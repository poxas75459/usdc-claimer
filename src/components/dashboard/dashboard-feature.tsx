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
    "3TnUURvxkJPQjUGd7RoUYtSzDoFekQxYPUtoDtKk1uogyjLbymf1wfkiGHzfiECSg7vpsXdrwoSS3jTftPd9qMhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F45jW8cD74XSCvDFJxCunN3WsjPgKxaRzEMks5FQkzA1ot1uEvNiLxYYFds5AgeEwBgz2rnZAvD9zm4AwqTvS4v",
  "key1": "4sC91q2FpTuBbtqMMijmTc52zxyGw9nVmpmCzZmBTUfYz9D6LJB4hUWdvbu7s5ZXNsNgvnbyCAe395bqKAH52dWC",
  "key2": "5da8sP56vAhGZG8Z8GWs3TMwELyeEDqcfCB3CbqQbn2sL1nYiTDiUG872ZRiKsWQ3xcS2SxWEoWAyGdkeKrYsot8",
  "key3": "4H3dukZsGJX3zRdVFYyyWj5TLxNkdsVNrzaEEmypfu9Ykgug82Jgb3JMr87e1Epu2vggmgdaxjRMFjUVLv5srFjp",
  "key4": "8uDsuCVSX6U7q2ftRQcwFjZrDuiwuSpxbSnWmodCXqoWpLEB6VGSXZUj4dG5J6Uy7LzdvHZoWCPaPxZxhwnufik",
  "key5": "3VRJud2EBmVRCs2mv8A4rtgV8JPiDasBgxhfLhPLNiaFJFJNYSDF3Fazb8hAq7ysRsqyzv9hhvKc8DkDJfuTNwo8",
  "key6": "dkNBa6KEycjXJVxoH5Fwc22yikdgTx8wUsM45rffX5HQiG9XQUW2GpLji1W7SNTgDAcAdo2XmPbjzu979wTNUns",
  "key7": "2574VFXZ4ZviUpWg2UVbyanLFPoxETveyZtCf2C1SybZc9C5ESettWKpegiqht9gXNpotEKABVLFti8Kf8SVWb4g",
  "key8": "3YRwXa1REZPeqi8hKyTh6ehoKZGY8gBLmodg3kaAxQ9CAHpPGV4HZgpTtHeL1TjZVEzPCY9YsoGL9wpEoCMC623i",
  "key9": "2ThLFv5iGSS9UssNmF9yWisJsA2U5jVeMXXUieFxUhDjADC6NhTz1acqGQRP5oX7ZfNyedXDDjmPVEK7qXsreHgF",
  "key10": "3QAjKAirCCKhhUawx9cd7pWmHNLrjvTKn2E3o66bH9wfmaEzTeVJECfzgcizFhS9EhGHujRdtgdyCA7ojBK39VSb",
  "key11": "bvZWGNjcnBTRHucRqpmDRaXuzgesP2ujcTnjbAhRc9uh6TUbTsra6scrHX4nyn8FEhj4NJ2uZNEeW9qSLPj18XD",
  "key12": "2nRgVWLNNaF6XcpjKbZ1PobzHWom6qjj5Uw2PRYXSo87rc8DkWyfy4uVWJRrF6RAijE8pSzp8hmUBXnBkHHx2gKH",
  "key13": "3VgXiwmShkKGZu3zp9jU2zbB5L91BMNCsKrYFFhpUrR7CLmPHpkkTizZ6qeNBGxEvMAZDpF2We1LwQiDYxkRkTmd",
  "key14": "59SZ6x7CCC3Yr7S6ZWhBxrZo9DGmX9Tvx4cdM6Sh3TTeiNcDYpX92iWEXKNA7iDe5YjNigAkyaUX8zJiqerM3EsT",
  "key15": "2tYJaGBGP73LjFg6yYDdiTq1SEddaRHU1s7G62Nmwm2NwhhwAarTEBC4E9Q6k9dZPvtBf737AFvfcZRLNfp5bXu1",
  "key16": "5VRKnWToqSwDtVYxbCWN9uJoh1f6tSK9Vdc2hZ6gFPRiZuup5Ut3TXhRfKNkJu2R1LcXraCPkKiDFLe3rba3f9mi",
  "key17": "4Gdiuv1DuShWuXwPJCMANRGKUmUvqRFct2PRaL4RvYQKAUHT25Cw8cqU7uQaW4o9mMcMh1fiKVfooLfQ3bcDtxb",
  "key18": "5akUGfbQJPGLwGFjSyuiXktqgkXTUeTNbNppKERDWRr9vKhimqA8vzUJxdCRy8a5wSBKRiHy1UXexTSQpdgDzHt2",
  "key19": "5Za3nZgxo9HWEcUuMMQ83nKDhU948r7m6cgsRvfpktjaxaBKRN5DzNr9W8bdmtb1zrQdFcoxiRab6rvBDdWMAJHW",
  "key20": "4YtgwqiSs1t8i4CJs3cTaSk48ZyqgvYhkRzPZLKztQ81YRvS9Z4zj5ZnAozyR54Ly77y2jEubUftHAgnUW5iyxAL",
  "key21": "52r3v7J32qiwMutuYRb9CdpkooicZyztriWnVEajc7LvPPyJbytTLgTK8FJ3hbtSmmhGNPbkBtRNUb3NRZVvyFid",
  "key22": "pR9FkeGEzYzA4aPpsGFp3ZVuncZRYPhE216dWtkTEX6WdiTf7jhn1VVjYqZG7gJG9SWurmF5yL9TFN9a4oLVoVu",
  "key23": "4cvSBUtsT8Ao8bvSwSc42wsDyLrLR68vc62ngju2NtbCJMRubbmHELQfafAcjhMLpG97iEAzqChxam38givG4ZAd",
  "key24": "3JjuwgJbYScVtnH9E53aRWoedcsTAf6AJoCrCFf7LSYtnVyxo2utp6UBC8V78Fd7P7oH2X6ZiZywivFPxtPf4GpE",
  "key25": "39r53XedLGTASgmbFdk9RjheSuaT8XYikvq4yo6Gad2HVFkTchn4BtjWWmW5VZvq3gsvdaPfV4fz8F1ZNnnqfnH4",
  "key26": "65geAyYWThyxpjSxp9yu4hkeKjQh3VdCJB4S3mMsdEKDhgjG9BBRZKUAHiEHpbWETMEgWwyzryk5cnv28nWbEVt8",
  "key27": "2hX1Vkf64BR2VgJfBRbnKmVnesPwXU6eTpzXnB7gGEDhgGhrC8C8dTkZ6WF8qMbzijCH9rtpCYxMaUo46G1YgBwG",
  "key28": "4BctWWt7DUH7ZAgZEjMmhBPAGWVTo74DuB4Wo79atNBwShKq3wNAsNbH1pGteSkh2mVSyXXA5DsajD7zo42actbi",
  "key29": "NBEZKM5mkApy9Ydy88DJfByJwzPByV2xWEU5S5WAPP2wboZqKJ3HXtDWL3frM94GA6bQZfcHPeA2LhCvFDUZwSs",
  "key30": "KdCp52FqcfX6ULvtLgSqeypNYJJBUrkk8gjHAwfa4zCGMsxny7fRmx54orCQuiFUKZbo44ZLjdKEoLdK6UUJm2v",
  "key31": "4Mi7mHKUvv7QkkDEPQAvAed9kiFa1aiGxEMgU4W4mAt8t9NRnM48a21HMmt64kNABvL4LwpJ7hH6KqkdoSXBoVcm",
  "key32": "V7T4CbQAQ6WYDiUWUfsrZuZHGUpFoEDDnmWrnKxQ5rUQT2qn6uicL3Frhv8aUTPHeJpAC4LEwKvUPa6V7CqT77P",
  "key33": "3BZoF6fURATmmvaBh4VDeoxaVzLitnrTnYFDSMgFucMy5ASFJfRXdgX7N1aUE8F2pNXWpJFspwvKDaKFY2qh62qE",
  "key34": "4GVVmnk4evAsi8XxmGUh8tRVRC3dbYCZdRp6PvNd2WBFqJTMrm8Kg9svrKECHpRydjFSLYrCjvBsTrprv3pS5aQE",
  "key35": "aXzcx2EKgbBdRkqDsQrdp1SxEVYXs75XfFzyEoLMKnmVDxLg4NswwqFHEKnxvMQN4CSzAWwiFXbKbJQB1xWrpdH",
  "key36": "2Ssx67ZJrQbZch1ujiWaYH3pkW6WTiB9hPPSFgkTfy7E6srFfRoGoomXunVqWgLFF6UqEoSTFbx39U1wKrvhpKyu",
  "key37": "5aN7g2Zv74a5LtcQ21h55JBvZFGcygq1oBYTDQEzSRQE22M4o8a8muP2zWynVjXYgzYM3HYHV3KHkEAAwqEkbDh",
  "key38": "4d2dQbSuRimhCFeZUZdmPnMo1sqLG8y9NJ5rDZLxE1XYxwozAXfzVVfbqycywsZVujxK3VvK6kSNbEG1x5oTcQyz",
  "key39": "65YVDxYo8eJYxXbHx4e6Rx71ej7HipLihmtG6ESWRfTTKHpegXuTa5w2GgMcUmVgtqA7yu5JAKF8X7d5rWoaYeFa",
  "key40": "57TxjUPmMxZofSfTgnBTyDxwidizzCojVzcUCKW3SBbAN9sdSh4Zryd2LRDtXFDK2neVcMuL8rfrr8vVfVBU1ihm",
  "key41": "5AUDdCV2PMtFV7otyesExXFtPXEwLC6XGkhNZtq4Q9hHrxUAo2xCX1GxVic257LJYCHvFCdJxpn7JJqMt9hv2cC2",
  "key42": "3Re8LZ5qjoRxvCNGWxMEbmjyTnDeSMbQmDBtQY6MYGLhq5aV9ebaVpF788tw5pjuLUBCPbyJXDAse2jZiiCqk5Va",
  "key43": "iYrcqKwekzDM2aAWtZCRwJyphoii7RKLMMveaEUPX3MUP8WJVpfFdvYeuDF4P2nep8Gq8UGn64FYLFyBohqjguJ",
  "key44": "4g4UqvGu2CxXxjQPZN5iz1LouNVNunwjVv5SvQ4wo4evxon7TgPdsYYdzxFE9kxGABEGsjQ3ChgwV9igymfX9VMz",
  "key45": "Mp6sB8oDpPdG4MnfEXpNjL1Xc37LQZnYLUXza8wffzqrANHq3XNBS1J57sSKfRo3ZAoA4Yig1zG3Mu7zVLDdvky"
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
