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
    "44rJiUgc8tLBFgSb5A9RVcpVuhTMntssxPHcx7NYC4mLFbrCUCZ4tpc3tHronM8TcvEjgSDh8r3FVszdN44nkVcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ycin6LbBjyvuNNi3WBrgmAwsyjsUoSi28KndbEKLjkuizyvaYRRB12wsd6MhuTp5xscn3YUcxHectBRxcYoeaQb",
  "key1": "5kgic1fZKurJt4J624EGcuLzSNnHYgXfkB3dk9wKWeapodAYRAvsE7oUzMCzb9NRrvQjrAY3dP1GMUXjxbkRPfWa",
  "key2": "2euQkWHzxJS4FRrLfXwaoE1aep4ioeLS2Y2fMZ1cDYazAYuEdyjob82LubKCrtjEjszxBeajSepbhsLr7c7ptpU7",
  "key3": "bBnZhBdYb584TvLjn4xJqprFpTvhn3FcKLZDUuui4uB4W3qqyqR3vPEPfMtTJwtyHJxbZXztnES6WzUQBRJthSa",
  "key4": "4b5TMbUgcxRhqN9o9o2tbexitdDjHyEWygTTw8uGjUJ6kCAuLzX8wunPmpqf7wZvt1q4K4AMEjSBCrzo8BbrGigx",
  "key5": "2qGnwozRUSHFL7AMH3nqaHjHRoSgA56fo34R74wvVqaPXzqfXhqYvUpCaP9yDH25MhG4xXtD4U8rmWzymWyRmcPZ",
  "key6": "3arKrqhy7FoEGkqrVud5ZrexLCSaoL4HwutM5QHXDSgeyhqiEogRz11itkEUUVUCDcFYWV4kQUXdvtg8nBhcc8uS",
  "key7": "5dpHsegk6CytEiKEavzN8SV8DSPd1oqLTSf6dCazpPf2sPDRsaEduea5DhjRmworz79HRTyQstx2Rk9qKFCtiujF",
  "key8": "4V6NTQEfKJLponMBz6WePgctEDZg1aDfuGURiLiszNwxyFCLgtHK4TvhL47BiEVJ2vAqwT15qqncZqddhRWT7tQf",
  "key9": "3GaBX3y5LWnRc2zXdYfM8mVL7oyzPa97rZrPybTUBWjDFNFvpLKGcvMiu5nN6NLZXphVb12UDaFMFp272guTCKRD",
  "key10": "4GpDbXJXCWtnW3oqPyxPbMuMwUGgGHcLfGeEhwsxcqw4SaiNr6PxftyoJbAN8Es8VC3kP5xSBrGC13LVmy8qJr3C",
  "key11": "4rUCrbpSidQ2WEDVEBvgDQP6kvFidUBSo19iggg8GDY9hW9oUuHFRoHLxbStZLNpVibDmdq9CkAqpdYSYs3HWsdK",
  "key12": "5qBbspD9gdkXQfPcFAvpkPbjXEhB48ny663Bx9urTV8hsJE591BJQMzCexEJQ2SfRJtWFDnZbkYDjpet7uM6DTdp",
  "key13": "9pfMikV8BF2TXsUGKszVo6aHYNXfxG51KCHwtn8Kzo4d65SNsTR5RrmgjuqdLFSmEz1uf4TkbDXbZxvh4F3BcjV",
  "key14": "2eHNTU1UKUqtYs1meW8dnQ1iFWB7Me53s7ounwzM8bf8GCzU4y7PNEyuaBFsB5ocDRup7sthdmu3kDe2fAPD1spJ",
  "key15": "2rkhNVnLKPHc58cv8kEfFaEiCADwo1CKqJAnRNfiocgbzknfnsV6j8zQBwffwZZSq17Qfd71hNt43YDyjwhvWPWT",
  "key16": "5EhRfzv3dHD8L5oNV32eBJLiW7sNVL5veWRBH97JMbTZFCjPKN9tMn1ZdKXHyCBnf8ij39i4NNTDpHFgqAzziuyM",
  "key17": "5VoumUWzTiHaStAsDZMTUWAeNePhSdvmz7E7kRSqr8BcK2udz32y5uQq8MsXXwDs3dMFSZ9v3VMtTY6yDAtsVM3d",
  "key18": "2W4po3QqLVswt71Wtbbw48zadVwJMspMgMgUX5ivjzia2PZK2aC3aZz5WKbuVtcqi6oZrY4oW5sk4eFoHsiM1yQB",
  "key19": "3yxj7KFqS6V2RajegmuUXbpG2hP93uXYJfFA829VwE9Z9Skorn9wxfKjAsmrSYqK2SJXKggdH5EYVu3yqdmdJTSD",
  "key20": "63oUadkWgKbqK8cXE96maYutkuwLSQbuGULEtAQ6w5Kq1o5RKauMNYHXmSa9R2hMnFpTdSJD1sG3fpVUzZSiXL7N",
  "key21": "5iFfE7eqS5Fm48qGKRvJ4GCLazCXB95ucBxZk7Sd4dAje4ZD885uUnyZj12UJh6zzVBwDkdScUofP3o3CBktUKZb",
  "key22": "3smtVqiPNRPZLfqNMsP84j2H9S8XuLrcFi47Durmr8iyw46gFmF7ig9JfATeRcoRTvENb9Ygfreh4MAdma2t1kwK",
  "key23": "3iNs9wdod8t1PMgWQGt3cf5pmSQDBxNSCJTZTswBGqyoWPaWyKy5A27CuxgokYXuXTE7SXox3f4qDLZgWkBbjzra",
  "key24": "rM3Xz2ydhmWarheCmVg2LqgDXf2yPG5mLSr4SrHmmEhaCQZKq7cTQ4B8nNVpnAmD85uBaeDUC8Dp9yX2CibQjnn",
  "key25": "5B9zr6DTND5ggepiJMdg2cZFKQTeWoxqTcK9nxoyUa77EFengYGFH7qb2MXWUNjSBx3sDRpmbx6sdGR5MFXba6cW",
  "key26": "2PRTUA5DKngHDiR9mwWZ1whm5JV2Z63cJxAwN4KE1CHdZM6gFNP3anjoDL6sdbmesDxAG9Unysng8vFtKxXEHEsr"
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
