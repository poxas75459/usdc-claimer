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
    "25NmTuKfB16cZZuNDRx5kDVw5BnhWL6DSummLagYCk2Jb27Zwizdz2AFwzn919dmdwNdsUfa9xmD2gvSK6hcjzoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jHZ5jMxQU277TWpnQi3cPckGXeiQ9M9a8a8XMu9USm9ZJ5nHSzxCxSmeqeQBjz3eqR6Yb6qUF9Q3oCaQ93QJPR7",
  "key1": "YJenSookHYLbTDSGW8QXsoWzR8s42oo65VknxuGuBC9JDQX12SgBDknzUgs6kg6aQSxPmRF4stBDTk3uxRxrwWa",
  "key2": "3wj5tCUqFhD7jUeHw72a9rteZAcxKzDzhvwTQqXD71SMLaVTHfPyM3aPEZeTCR4Rd5kx95sc1tyLS4DuYkkHY2Zj",
  "key3": "4ewHNS9iW1ReKX8qL9s49puiwMvLXa6qJ9Gs1uwYFQXrveMT9CiswQt5WiFKy7bStQCZ1bpqgbiA7ptAf4FheU1N",
  "key4": "ktuUiqMRkvDu6119WXEtfSCtz5R6ZAVBSRkRmSbmgghacaufhUMT8qPLrG79NertJGyTiPhYz39KpYjoxPKYxdp",
  "key5": "28BFeGtfASmVX2RiQaSGBSNcDKikn3andhyWzEze89ooBeQ3GpJ3Ao818h4JLLDfDT7jCWtEXeLxPPmJo7WdtY7P",
  "key6": "26HFNidFEc5oNdWkXAqNeYYMEn45vpJkfyRsHNMhehhV9TvcLoQEuyB3NJuZVEJRDuJ6BSpCSjUEhgEFQVo5vXsP",
  "key7": "49kdNdsw8jfm7kPZp5iFwS4Wc1UPxxdJvjQs4RZ4tmfzmxS7dSSGVTJZJedARyr8d9ii8bYjdxBRHSnwErcpCRwn",
  "key8": "5pX2maRY9FwCrQkeAc4RW2eGAexCwTJP5J2tCQ3ar3R894HJhA1ARkuYmECoyvmaSuCi4t9QcQyRF2ckN9CiyiRb",
  "key9": "4mAxc7czNepbRXiwjguhLmzJMYGVteg1HBbCkmM2vfBFyFcYdXSrv2EVg9UfUyJWNhVLyd1xNTdpp1DPbwfgv7PX",
  "key10": "m5sPJpGFEMwxFFAkY5msVd4z7WpmUDKT6vNbFuMKN9zL3DwzVu4NAWD4BjRcd51PavrsbSMmrR4jHG98yGvbp1J",
  "key11": "4SdsbbchbrJUj5Kx6nnsMtS89oAn7UxAesEc9S9g9JZKUtJbsNDWV3ykdA8e47qdep1mLNPHXUVLARWPJGA3vck8",
  "key12": "BfGPSvC6VjVustkQfkHwC3wJBsrYdjvL8zD4e8K99N1SoMzAYBzdWQoFAnFsUTeCuhR5qd8sWNhJJh1JLNEN2qH",
  "key13": "28tY56e4kNpcrBvNkH4zDvUPRc7MWdy4ez3qPLYvPNxcp2ejdS3fSt2PPRgMUTqJDmc4PNWieE6rHNHj7oprimxy",
  "key14": "jPypevuQKi3W3RKqLQxpiij9dDbFFwu5YS2U5fGu1CC7t5ZHSAhyaj832gF5RgXgZC6oK4hpAzj6ZGcStuDA8LW",
  "key15": "KSVCZenrtoj7QjZrTNKd1gNqXaVwdmoxk6NkY8gkh4Tm2bheeJKLHvkY7nUbSM6mhaaTRiFNMEfgyC8fDiHzJCd",
  "key16": "3XkJeSjmY2wm84U2bWnx5k4PZ8fAjCPXWXMnhBYMoTp3ppUigXjowBHkjHxzqoXwrYScxAG9QCYToJGoKpNh7Koy",
  "key17": "44gJCRh3Zzo5YrB1ZfyUqWYW5osam8YKevNzj56a1fQnpgCScX6xmDdJ6TsEnsBC6Lq6eqLMrAeiBQrhajh6f2dr",
  "key18": "5N9zKPJzMCent5TCY3kyQMWLuMDP6UdvQXAd5hv2o73PoNhPusstoi3pidxkfB9XoUgssurxLjWEpiYdPP55tUdT",
  "key19": "2RQaE2RSHEjjo9HTRySQL3Ln1KRpZjDxFTzPpEJBWafaRmD2W1S6rKFHG9m3bEZcoCQaUp1idV6b9nm6P6QXWDkY",
  "key20": "55qYTmP7B59jdWihdkg487jZrpZnJeDN88vBneLsPkhJWqkTiL4AmFmjSpgkoYF1xBMv8KbFzrUZKSjJj26BLkVj",
  "key21": "55cu7Kmk872yKKfbGR9UDe9Gy9DxfhUJJhoeBEX4G4Xa6N1qFvWNHsnYfUbyXLgxpFb1KACRxWYgyzaZ28VZvR6P",
  "key22": "4wztwYttPzbjKe5Px4xTz48NNx7MDsxQoynoLmEYLTopULD5tQJ6yBNsDA1JuZdVcSrL5WMECBuCLpfEdAQrKJyf",
  "key23": "3SnC9rjgFTtxCUwCtpQMBZAC6E2oeu8JJ5DiGRu7eNyhdf2wGoLrhyTwAwruDCxCsjTxW6ityMUdnzzXVab65Lx1",
  "key24": "RpKPJDLh3VDVFbVb63WcxCvpNZrWQrqf3zit1WndXHf73Zpi71ZuJQYmXd5B8txPGrPpiumiPu3mngtVMwNWbz9",
  "key25": "4XC8Wjvkw9nW6wVkaLhnUBYTCcGnCEFHorqAnNFVZnXn2iZ2SeaZm4V5dqPVA6fyZGef6qCMCZWm8iEVE8KVNH7V",
  "key26": "223oiLfDrv2ujPwPW1G7N1gmNdNnouqCVnoNyFtk6VyAbV9jVQnssNBuwqq28SmqVy8jJDECPVdaMBWiHA4rtryC",
  "key27": "3KfvTJkqmymrXYuU5sK1qwCGkguSRx8uACmQC4fEe245KQykyiRV7MRf6RzXHczauxHCnm33AMa12Q8DHjAFDvJp",
  "key28": "rcSbBmXdyGyxVWgbopmfwwHdDNQ5RGkppe4bS3UUbheiYeWgqkPBkzdz2iWSBt4Sfo7d961usiT9GSehcpdZ36h",
  "key29": "62Wn85zHQMRTdnBoDrBiab7TxkpZsHLBE3JD4Spahmzu8WWaCSsJANMKfrgeVGhBJ5q1661wZNHbyaDS4yrRrPfZ",
  "key30": "qxr88MQTqeutF3khQpKcjY3Rvaa8d8uRCmU57wzgZuuvgLAXVui3ApgqDHR8xAavyNeEmGHFv1KZJXdoX4waNty",
  "key31": "2RpraJAu1MXXyR3eZRVxwRELnVMrN4UeaHdWRs4EpuiRRoVEp3acC6DgDu3ThFX6dq8YVgjcUmxiosmTEboVfF3u",
  "key32": "3RiTto9iHyRQG4HLpRbVeGvT7jEAmowiywgt9tixSkfPaJVYaYoqkpnSzyqinppiNrh33Gnuxoe7wcL3kVcFHbWK",
  "key33": "4syLa7Q4MEbkXL3XXR8tZkoTBHnwvFBDtKqC1ZYcGLWV5E4iwRxDN6RBA2ZkCmCuozFtLLGEpwscqWcmXC94TqcC",
  "key34": "2WneCkCDVG8VhHCA61ArjRNtHNjH6GRwKCaUoPacVN4MJHGjtWedxarRs78EwieYXMLAJGsayur63cFHNYxahPHM"
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
