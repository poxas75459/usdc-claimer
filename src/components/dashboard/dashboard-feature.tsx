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
    "2HSBsbxrMhhVwLaXxWbJjQJEHDWJ7g5TkGxpwtSRyKWYcWhsaJTubJiLTMHWfpyj75vd2myxymgEPnqMmx2ZrZcZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z6AUFBjJmaufR9CUo3yNm3mqxhbiVSxXtWeMRvQVkQdVgrNT9rHo5AhdRuGWUKREGjmuGtk1Tnmkgjs2Dm1MLKg",
  "key1": "5ejdNuMPmY7UbkGMQrh3Waaquyxhw2WWnVYYFKgaVkn7BAiMCMWpR6DatMUihShWEHHtgP5uV5xF2eJabcb8f2M9",
  "key2": "3ARDsQpJSEzi3uESTkTRNLVkp28xgVgMidrwfabatBmkUHHr5eZeGjm7NpDkZKe5Cc4EHczVZRcGmZeCVvw6huai",
  "key3": "27AE6oeSMcWEJeS8aU5RGvJfmjTmmhuFr26sMojjt5juScsBeam3M7CKDyBaRADnqhL7NGDa8XSv6swFFPNEY8WD",
  "key4": "kkHbrjuPVTpgFmwHd7w7HkoyX6cHg2DUE94ViKBaft9ePUic2xN6xhWoUSqfgSgL2yoLQcGcptDriMrPujvzNdj",
  "key5": "3HM2ZefKDZeoyGJbPcDEKbUp6mVu4xTjn5H6X7PcawL7UFazWQ8HyFL3FRZpUxHpjsFfVNhXCTo6uwZWMR5A9NHo",
  "key6": "eEiwpcJP7cXpKooURAsYffWx2Wqr9rZLdRUuEgbBxxjsC2xyFtg8iNgJg8r6cbeudNXjP27AydAihcGhYXXXWri",
  "key7": "55W3BSEq4UBMgvBdvvS44EKa1Gw84SVNjgXaRyaaU5QWELfg9fDKN9qwkqPspUWKVq146M2pdBSxTBiUGknTCAkN",
  "key8": "dhXnij4UHeqJUJfDUpHmcFpgfaSEe31iUyVHUatttn96zb9eqgfm9gsGwxuqz2TvYoLNjPRiD7qQYxVDg3gqPAM",
  "key9": "nUtoE5XfzYQboSPU7AH45sJKvEuDDbeESQonuRYRRR5LgkSw6pGbWCZQxHEwq3XZ9rFJ64jEiMXLjZ83BndHr7A",
  "key10": "GEXihndPvFAHGWcoCYtrH8tRK2Rqf1L5Lk9kxvFCz6WLoj8SYHBFqC2f3QtRKbCMJyo5i741P84V75vSH1W3rsX",
  "key11": "Gi8C7gSF4THJoVdgvtzs6Hco1pxH7U8cT2Le8G83SF2wKMpKr7uhv7YZ53GsJjKvkfPNUn3c9YmvMDDHEfjtm9a",
  "key12": "5MmeorHN99yF1mFg7QfyRDtSkPQ75FKVMsXtrVi4kbBuiz22FiYtmpVjsJpdYpVTgrhoSy837YDjPtAAnUu5TMQn",
  "key13": "5kgtNUqBoUeCzkkTkaRqh4nr2vsPpjk8DGkTrihhtheR1o4tr82Kh3RZmD725K9kE8cQrMt6EqN9MT7AMbVoDFDu",
  "key14": "35ZmWrYoctjCXCvVDiV3FgWJTxNeUieojKLiz1JcYqrU1zs2MvHGYNodwsBstNYeGRUkaVmquxJ9FbzARBb38h5S",
  "key15": "3Vf7uUqWmo9bqdU581s2jXcFjo5TDjrCvmvXC3U1ixofKKcLkxb2QpqmVmurZ9Efy4gq7W9opHHj2nyjmbYWdNQk",
  "key16": "2k2T87Byi24zzNvBT1uyU886CZgwsVZ4RKzn72XrTn9KkHYRaDcF7tUV6QjFvD7w8sqPHZW5wtoiP6DYXuHj89ja",
  "key17": "3DFAvt7LdmjXyxeZtwrBcTKki2uhwx3w5trJMfamKSXZa2R1kvbm6h93pxsSfyDmNifAdpV7Lnw5HjagmBbuJk3h",
  "key18": "45Rsoyii3Dapt9rDb5h19nuH785AZ4xqaJojf7bqnbVcLFhoubD3YT5x6CAwdbLRtmD2Pp3dAZVo53d3gntXU1Vx",
  "key19": "4ji9rFonUXED5mi3yVEZfTHqfEUtbG3nc15KZjxQvcFvYE4TRxXwVrqsRxhUEKngbERrBc14Hp1XG68JHZ6wMMsy",
  "key20": "3MeFH6fjx5txDTaBmQBF3bYxxQ2JPP6Jf6cmCCxY7JvSTx3X2GJENWY8yNe1cG6mtgbTx1PQz3XcWzjKAXiA7p6a",
  "key21": "2dQAymXw7Exc75C9SFSruHE1CBd3KbiB4YvSFF4U5V1kZHZ4MSPKNqKrB3uKzDnCnjZfGL6vz5qRVzsGyh2sCELD",
  "key22": "1JHCYJP6KatWuZqpoHts3XhG8gKhAyqE7seNwY96nbdnhaZvJgdCiC4c7QbXU8ydLk11LXDoBtWZqrSbqfvb7hG",
  "key23": "3sVFoPUnUohmAv7pjTgZUnh6pXdzaUzMrChDDsmUTGYq4D79Qg3TVMg7vyMy4LHAmYnCm5NR3BBfF5WkGnrFEYKW",
  "key24": "65nNYv3qGiwSf8yhL4cSPbtwWEXgznrYkMw7GkHP33MJxTp7rERR5CwsgRSaZEkRLejWBnLbi2ahyTA1YEvMWtak",
  "key25": "3wwSQ2SDEsU42duWtXaLEgMaP4CPGaHBbuw8XGCG374jFvc7puPvEer3ub73sAK3vxJpexb6FgjMxbRDQPz6yE54",
  "key26": "3r97ecd7wzHvRA84LsAxaow1US6HsAJT31nX3DvYBWuo6jnbWTQjq3ubVKzjWjgjMtFJ11E7Sj14LD5TQtMmxZah",
  "key27": "29n2mmCmBa6BMS6nTqpgP9F8n6n8XHpNzGV2crCNBnKTdCeHthwRWtSFqXEX2ZkhnpQ2rU4m9ePBqXgdtJszFsqs",
  "key28": "2At2GgA8hvWzxbxVYvD44BLuhFUetDjsSpXCbduBH7Usum64iepSnFHKTKztsBhDy6WcYEsaqJHGf5jmafbHtqeN",
  "key29": "27wHLnVhB3zc3LTHCiYR5RSZqiSpMsSF2RCieAzGyfCS8KcMtxoCQiAfbUmeX5eGgQUg8xokLfnbsD8xNk5gTtsr",
  "key30": "3nfkNDHRvUgbNj4xYBj7eKKsFiy46QsjAdu8wynzyw57sQFEsUbY6nejQpSAS8SsgJzvAHDdQKrtrwUaHR2VRST3",
  "key31": "Gzj92mErQNfckztzHqiuWkKUaRTzkwbNDqQvySZZaGoPokqDuHk9sgA11VLkPQT5axJ35V7nCzA3q7kH6fdApb8",
  "key32": "51ntbkU2NhAUwzc9YfMFBcD5BwbFD3yCnshaodKxANDpwuPieKYuMn1n4L8fk3tNaTzy1aJ3C2b6o4f566TrpJ1y",
  "key33": "5YpJRJYbAVgkwisqFsmHtfXfe9nX3aFBJVgYC3KbbaoWuoSzXgMtuxKuznj1euJoPKdXbBx3RV9KijmbNSSc1sih",
  "key34": "4xtWMhZksXkP7wfndr2GTwgTR6M39mS6VLxhm7AuEhRewWGi6vV1r7YNnyfW2t8QRcsfbU6ZMvEHUWoZ7azLLvv3",
  "key35": "4bNyKhPf7qVraRGKf7xfkLoUPkpk4QXYqaKHyucnsDNqFhAMU7F6J3gpSYSdAgkV8rxWSQTaVM1je8GBAL6Yhwcz",
  "key36": "4Mrp3h7n48FeWQJshQMbo1QpERixwvAA1aPgwrTUXQ2bfzETTc6RhNwL6xvEQFnRpt9vD949gy3vTG6RoDnFSCUW",
  "key37": "5DAnxU9fCWwoD7c7Z1PettYiXeSzpu3VmvZKfH4X5hCRXiDUpv8iSAs9vKCTPFLJoM2s8HyVTC9qZ7JwdTgqwWJx",
  "key38": "2uMJCAmimwXpywoJhFnoKXsTCGphY1SmRN2nZ8crranAGykZuPbXmHbuBo6qxMhi8QF7oxLDfrKGFtwRqNGNj45X",
  "key39": "3xM569yArFDA4xaw6PyVtoWxUaq9p1ZrMNQyUXVWqJBwBbpoBcueuNBo6HgZx8xiCnDPkcfutFt7UicsbHxkmedS"
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
