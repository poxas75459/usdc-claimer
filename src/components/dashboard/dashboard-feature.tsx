/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "XGy9T6j5Ng7ibSYbgGGFb1qTgw3cGceBnrzcoNuVBAiZU4E3qt3fxKUGDR8RHo6vrwtydUNgNDerPXi5aspAYp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DSdWvnFzdrZEhekiUL7tvKBAR49tGY2ietKaSS8oLLRFmWfPWqSeuXUxeSWYod2miu6ACPmJDYta7x9Zo9ZNg4P",
  "key1": "5ySTRCJcYHYEm95EjsZYFDW85WEcDcpMWWG4rsPfnWjKD7UFLBjvVG1CHaUgNiP5kpYmWBX4usRtv2dS6aF7MorQ",
  "key2": "5MZVk423yQJrzx1GR2n78xwQf5m164ksC6zvq7hWx52kN42YAXRh3JyYJxMSNrXyVduUDG7P5aBXuw5s3icVb7JJ",
  "key3": "3ocLtEfK3i45o7pKSyQffTXjx6nkLnJEFzUkP8oVRbMXzdNcFCW8KKPChqWLms3L6yzMocax3HdQ13GLvBtysFNW",
  "key4": "6Ry3gCadG1ARrqNdZ7hoCDvdBjLnoP4MURBjEpGMan87yxmFSZJBKBZEMC3nRtxAShAkqZx8sv663eWoeURZkCD",
  "key5": "2Aa21b7yQrY8TMPF6neUQdFG4BaFepgozpVedr4QiGNLFSwFMMW7xRjbGv82KWDJXTfj2DRZDWcQZQng1VLAjHxQ",
  "key6": "3i4xdfxCypuZZqMcWXuXsfxqbtVHZW7S5eN77h4dDxj7XA9jYtsfHsNoRmkhEvuhRay8S25zDtkUFG6jJn4MR2Lf",
  "key7": "4XxXCTHyPwy2EpNet5rwSy4tFM4oJ5j5FuY7DF4cd8ipHhzXtTs6DTqBKod8gwqoZt8tPJYC49GjFYQVYqcSAY5d",
  "key8": "3kL8vbYWzAEDAnUVK52CfkarNSnoUHtR79RhHvNFnfAhB4M6ZKUGoH42vSh4mpp7XqCFTbnsP3dPWfwuTeYQhghz",
  "key9": "yvn7dtm6RyoDLJzK2uyMrCKM9yG33dzxDQnC6h6HKSfd3iaFMMzinU38NY1W1Frm6xKb3MxaT3eqaGh635MugyG",
  "key10": "5vBkzNBjbKCHpH1xS8w7RePfVsq8GnPUc3F2mkCGaWyYKZomMkBiS1eUNonNMys9AGMZejDJeziELYCFcXDn12R",
  "key11": "pmAyGYYNDoojuxnPFqCpFe6PmhUhBgto7V6dbXeivHGvCbeiiNpdDhG3eH7x8PWbYppY8hiBBLUPvtju2aK6hrz",
  "key12": "45SWhXYUPszCnZSGWiGdB8ZkNsEJFJBhSbX1ZhNFY8SpXJ3Rz6wvDXgE9Lj4iJqm3e95kczrcZBJfMLihHk3wjWh",
  "key13": "4KxRmwwrmpBw3Szze9Yw8GTih8rY26BHPKWHETTMaKbiPN6hLeuY9yiHpBWnSy3ZfQFArASuVWPxYHutRMw3BF5H",
  "key14": "3DCxm5Hsczb1oa4dMxRjPybSyhvwmjKhWYyxiJzakukF3bNSe3Mu2SE2EJShFN1WFaofwRi4j4WNufhsHNM9CCRK",
  "key15": "5wkhh4NgchsoD1dQzzFDSBXiQEVyu19ktaPc7P5SA4pPbqF4qXheitLQNBDNUdwxnFedqXfXbCjDZzZoosvWscXd",
  "key16": "3Lbcue3zkQUU6uFcCXzWAs5NGjVNy2UtkvfGuZmwrr7x3m9zjsgajdBiqkf9FwJuXbvDgek1EM1DxuxfZw85TSjR",
  "key17": "4g6ftoznuAsJKd6WPmHtwmrgUrJzoCKkrRjQUHnMUeDLb1g26BN7FYQZgtZDWEL8ze45CWbLnbwdvNuoDQ8FzaS8",
  "key18": "5qjPiNDKZfkNw8p19LMmV7xjPzdRAx6mQKMxm1NAbjcczFWG1WXJ32CrWhRou6kjRsmmGBoM3VGDQMztTyEhz7GE",
  "key19": "5PV1wNp8dPGkcFP697twbUYgcpMuqvoDvUpPxVKUp1q6KKuYVr9imvboBULEKDU8oX77gDNji2tJsJXRimQsyfj6",
  "key20": "ZBY7eE3yYs2vztmdc9SthbfK7ShqHtNLFWNaSr4YB386BhcD5R2NJYoRDu1jYGUjnYGX7bgabACSYp5dQygKpbw",
  "key21": "3g284NvSkSALfDTgAWn7hrURMqddka8yJbrqV14YgAveiVkjbtfZ9sb6zKeJsXF52CWgtPtqERbG397iXVF5vKu9",
  "key22": "1ATPqfxJgadhtwgv7EQnhYSmUTTzcoWfTPL6eQMXBcQEHYoNEco7ph8ptBKt3xqkyxgQincs4dGnKr3YfnPSzT8",
  "key23": "4Bp2pod67x8vP4P7wFxw3Xc7WMo4HBDN28wmCV76YnUzbqxwz7K7nNR9eho2Limy5nBaDnSvw7vrmpVfDvJRsPtb",
  "key24": "dqJGeHBnrsA7BwAAxgqGu4HNaDBMphE9QseyCzxgKNeNQSE5bs4jVQsJiC6apACmvQGPd9vR8UKWPKGZK68ADRR",
  "key25": "54XuunwQx1EZYZxEpoHeX8b6V3bt9nKEPFP8qcJt1BMMgECJGrdk3nr2YkAzYQX5UJgRWzFLQ9hsmJQ5py4yDRta",
  "key26": "2ChYfzF26DAdcK4faRXmEodhyPTCAvTgrz6FZ3dHPCCouzF6GYWEfibnSmHm6rtN62ebPKuBJwmG4yzBpQGiEknj",
  "key27": "UX9VFQeBEhE1VUW6UtiLw7k5fzKA8dRey1c6DZNqsrZ3XyeV3auSQADaekoLWmVqSX8SVYPDQSU5nSBpruV2BWw",
  "key28": "41HrP4ynMRZZVzaP3vhpf9n62c7BLwtBCGD9ZwuPZMtrs58MtL2YCyoRtqbZK4SX7fSftJATV7551Py2dxDcsJsM",
  "key29": "5m1hEbMjLyXCanTYj2k7xc67pC66ak6KsobrTXywkCzHbDtUoDMaC5h4DXM1JHdvKwJ1BotmSEbwSFXJeDAyUBS6",
  "key30": "3DUUUXPcafDK9Qdwzhods5S6V6mKgFqmYhJNNyy9ctSbsVZUDmFN3iCinxWMqEwekDKDoTSWov8r3bN6ykJVdtJa",
  "key31": "vi2iqoXTRpG6XLYzwS2ChhwTQYxL6Q1MaFv1L8VK79spx4icXoJV1RrTWeXfAUWvh9LKL1XokzgDoGMBo9U3c8Q"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
