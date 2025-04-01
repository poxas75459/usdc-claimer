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
    "4182FsyXRBktWTVuT8QBJrWUZtJXay2PLf9pY2YaDipohZqGZAtbm6jNfJdPJ7CxaxjZcpxmnjPukrcxXmfxa149"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SVcB7hjTCVFwXiYU2upFqTXdMQrXXrQUaSjisvEk8Vi5Tzfm14ZDSzYaKi1qL4WEXofMheHeU9d7tVaJ1qN5PeN",
  "key1": "3Vc2JQgZBkZdjVuevMDxzkankcRBvJpTvM7gLuSMy3kZDfN4GRThocizZnrmR3io3uX9bvDAdLKnQCUXn5XWE2jh",
  "key2": "4L7hT2qc1gzANcV8n66gcSu6tQtRiyX1x4y6gBSnwMdt7T87gGWyc8i2dVfTwiASD1Zik4rk611YAdojsA8nN4Ef",
  "key3": "3khfbE9aF9VfrfzMkznTk6pbikXq4ST9KWv4yUmb8q8X7q6TLjPKgwFPLGAs4SvdiJRt4oaNbmst96GfhwnkyViL",
  "key4": "22pn7ZhmZKsKLVnDnQXRXNbe9BGnMMWHqCkpUG4ayAphbEw84i2HN4d9SVL8mfTx8hRwAAkE7KoZ7vEsHkNAkia9",
  "key5": "giC3gwsP6VGQdZYiGw5Mp7chyR5MBpA9Eu12KYdVo1igvQwvYjeF13UxGNHtBqPAXfKDMR4TaC6raLGnHE2gS3c",
  "key6": "2f9z7GLWNsTaA41CxqxJQWiRufRHPh827LrzeLQZvmRgwVn7SW4jEkN6TzzwRPqRgmgWNFTDS3iPDP2Z1Lhn4Jon",
  "key7": "28qoSFrLzAvRpRwn8KmdbYqpnu8Jd57wAExQhRYAL583afEdbb3yejiL5KwJQEDBHQiuYirZddcsqo1TM2ddqTcH",
  "key8": "2awRA8UQsjARJobF83oBF14fXFoU6zkDUNQ8CtRYv5vLusrxVx3RQnaKDPtxvnWG1VHi7SrfEiAKhKn4APcaVS3X",
  "key9": "3mjuiJHejgGpGjBmnVc7W8NBEYpxyUUDWmBwUfjzNiG77NwxWQqUzHMF7vZ5QdMnDUxfUukSWmVsYuW38SCWJVAB",
  "key10": "5iJAgPjRjNekwjmeDTYMbUNLoheNotncBm1Bx1mWGFKkeSBRgsqsJgfk9aeEu4v3ULfGU4e2AotXV9E1ahA8Ey7X",
  "key11": "4a9zmVryc8Yjkfona2MCetc5pTyqn1sPyv9oHLPRd8nRWmaVgq9UdJtRiNqcxEQyHAHdkFsAhBVWEje4sEZfgxu7",
  "key12": "5CAemJ3L7TMmbe9b3Hhj7zPfs1Axo9PJ851QZ5HXTYBwiF8RWZHA7ccn7kZJzCtaiwEtrYXjgbMqTtC5atJ4BDGT",
  "key13": "JwDPMXwWBt9zXC57fhRQ2WTosERTZzVWB37PPfkBwJbfomPWyKMHY2bvJDgByfAzJMXwXBqqKwXHuYELeeyZRAe",
  "key14": "49ij8kg1jEZ1gtDnATuJUDAZiNVFapgCVAPVzuUNkrx2kbhM4FtmEeeAdU9xjd93Q5hpcF8sQc6UNdKnJKFLSHpd",
  "key15": "oEUvHcNRtPZfm6wJURQVmrjDEqzHrbcDzu8cBQkxpVzZkPeAW2XSXJoUJtPLtkBs5YjLnvk4s3iZC8K6ccsVGud",
  "key16": "uSZSdc7e88FfoMQbsRWA3Kvq7CNFxotQiy7Xqub2xJNMuDJYEyJCPgWcyQFdD8P4wxDxQ38Sk3mGsmiiNpoYfGq",
  "key17": "66KvGqiDd9GvNWDMS87fUjkhpTGQDwfqymj4DKoekfU5dBX71aWwED4eC85kkKhHtoehhnZknYGU7febvCUBYL35",
  "key18": "mUEqVaXWytx8rSNhqeh9PqeBznF6v8Lcx1MRrZeckc3Wj5EcQzeRrVaxRsG7K7vNY17X3euTGwVU2QdTKNEqB7q",
  "key19": "2hhP4ewUqDq1GKcLKud3DWm92Cd4tvKRJY6ytPnKSKfqiHBogfHSXu4yF6iexXsDNaBpeRqwPmKUxNmtC3afN9w3",
  "key20": "4VP8E2zrbubfjCVSZJcKLzwGHGcamT3cEwxXLv5StyfypKQbC5znX39x8VXFApLT1jLErKLxQUSToMKyUHXyDJVo",
  "key21": "2gAZk9rtcKNfYBdGrT6ySrbL3sdY6cSRBtHSxvb3Z9NimP1igakjC796FfmLSbwMvwTG54WcPFTcGuAsKMu3cPBi",
  "key22": "X1RBo9QW9DwB8rnAALQdg2trWBDZgGWkh7XqsyvJWpNajC3KdiLDsqdoaZo4Lq4GJCWRvGGorbFrk6bS2YZK9Sm",
  "key23": "hZjKNKLU4uhpN1iHFqkaucQzNn1ziYqWf96Mo8KM1qGF2z6aQ5VkBhjVQAjWyW4vcKRpzDHXZxN6zCaKRHVQbpf",
  "key24": "5kBGqKz6Pt7hasWGDH661PFQdTmngGvdKgyxP9SfqC5ZBzTnFbzYS61eV1Sw7j5z6iH3pvMTsEKT5NuSUCU3zuuC",
  "key25": "59yLwg1YjiSgG3vVTvsuKNAiDZsBaQ5hyWYDUtLXbtCJkBd58iDtdMXraMi2cWA5sD4gbSHYWLsgfZnwxDimML7p",
  "key26": "3stoMdUp2LLxSVvMF1MJBSLvrb8uS1DqrWJ9grV7bSZMSRnSafkE1e3iCbC6DeGFc8Rgrpj3RTMJT5iYmTvbmLUk",
  "key27": "3U3nKfRUzyKnbYqRdA8VQDYeBp3rzpteAw5VUMLb3H428aRtSgrsqxR6hGB5AUDBAKf3RR4HvVNzqXCSGct6MH1U",
  "key28": "5cQaazs92WXs6QJzVzccsGzbvjhrB4ki4iebrtyLTHjRmkQ8E4kt5Vy6UHxwYZ6jxpk1K2VH4RGmqgpkkht749Tv",
  "key29": "2cQDg7BbEEiA3okEVmV6HTb4ZYuP8zeNwnXzftGaL2gCoEsJrjBEKmeD98218KM3ivrpNC4et3nstWHnsbwjhKmn",
  "key30": "3sHYp7aLkahMy66YQMMtekEMN2Ct5MDqq7ahdrPYhVQ5TaMuptppVqigamFNC1yvTTyjKbCUy76dDW28nLacgtQ4",
  "key31": "2Y3fTYZUUnBbZKwF9zC5pcZSRMZ6tAjbgkGCPDdSbHrD5PTkdyDw3CFLGnKFURuYLtZEoPE5ZrnFutTEH6hjYbfS",
  "key32": "25BdFJyE4iMvEvxJ4GLcYHAcfiiL3o7fffy5kGVB5NFVfey1CtQ4JThtYEW7JzLSNbdFCc6SVLXCZSsBj6zAdyTG",
  "key33": "5Bb7a69uQQLD8787Q9zj3wfbG3p5BvzMiJWQgdcaNMgREv9ARJ1jB9BhHF9A7d8R67gHgjYsTZ9etLHFiNx5kPZB",
  "key34": "5tT1BDK1Jazg7tmERCzcBWTwMECyteEXak94pcnxpojGXNqth7xqu98sqL19tNK76rU9MXm2nXE3KimsHZxFC4Tr",
  "key35": "88wnXtqytLgLYuBFmX6uBwjv2pnmf2ZfFeKPqWAVCJWMLsdqLVynyLNBPHBEEfCGF4VHKF8eJCaVo7uotgs8FR3",
  "key36": "5HLcQvaYTtdPq24DPA7ie3K6ZueDjtxk1XV4aoxVGTTQaFVYXbjffoG5AFrunrLCy1mYCoRP9fdJWNa3FJTzvdDH",
  "key37": "KSLppu8DfQjNaH98tzxKuLYzJvq7Z3Js645KKBcgAFbmYQtA2SuHfWy9i4wayVnUJe9SwDVFcdFGiPcCmG3DN1R",
  "key38": "4aTqsT5FFfjmncsvGq6cttHGZeD2b93kixctvPv37i35uLRAypfTkdiPzvNDXKEFZg3J3NfXxrgTG9Pa5TjvuFKr",
  "key39": "5V3vQ4BGoTo9uSBLcNfGMY9BRNGDVjpeCSa7HG49c1QprTw5E1dQW7bPfSUypQrjJZ5adpUav2fmvR3ZbYxsQXqW",
  "key40": "2PPkuQWFDbSBeVjVsgCiHoCBwkAmoznfFyco2qfS1EtUtWMLCH4mAJ21gK8jX2BtMaurD5J1wekjHsNj8V2GhC4",
  "key41": "5UPFSzikH9qTk3eq9YMbKNjHxUstbetGZc4KEA7GsnGxftdSXcfA9wvz3UAfwkQjKKYJUzWr6fJ6NAFDwAiXbkLx",
  "key42": "53zLusHNNkbNWHgd418dep2G9gYgkHkWbQv4XsR2c7dCCicJiMGHoDMfxBM26SdSP7UcZq3LbAdGAwbcwTGsXfqa",
  "key43": "3vKb2r8gXRipdY3eSokQLWVuVYGURZdumRmz2qQ4pkvW1LDtCUWVGtz2Ervz6KwNXqbTQgdPbWL8euKn3dfZoHhp"
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
