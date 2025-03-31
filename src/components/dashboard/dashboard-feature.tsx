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
    "3QmKfVMXV1WBHSrzcRfxLmz4vXJ3ECpNXsRAXTozrK7kkKf14cJfN6pSg4zaRTz1cKq3ghmb2q9GgKCZDPBw7zi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wc6aTrjHGFtkVpN5VmF82NMM569CYjUPaSEskXhEEzFjGggDSVE7AGpgFD6kEZUqoDoPJSSSDmHdRB1BtDQK2kF",
  "key1": "4zFT19PN2tuN5EmzofGpkgiYsb5aXG2ra77CqdJ2CJhFjciBQENhSC7FEwjs5LcZhCtjC99oToVwfuBM88JzHHAG",
  "key2": "3Mfg2oAHUsDpbsfVdfsncrvnmPoCAoeHKeeWSagPpyfy6RpCHWiptXGcBPoAWZ922orzT8UdPzd8E2cK5sZ954fd",
  "key3": "UAMptKCuVYMfGYDtcmovMnSN2rVm9wS9QRzxM34m45jEYvo2XozKuGr7rRc4VF7hynx5C6Vuu8mZBQo1NBvzYes",
  "key4": "5ENJW4uf2Y3ycfkqNiiFzn4drxWfbZiquyZ8F57BjPpSYaS4gKm557w9bykPCmv6DU7vGbydFrBSeVLAgJzcmgnW",
  "key5": "3ChTjQDs4GPFuGgQacUyjU2M5b7tcLwKK4ZF7Z3FREvwiQ2rnrekpexAy8yQRXicU5JEyoX9VEo4rmtoK6QZQQyt",
  "key6": "4MVGvoUw756vSTQPkQkFkjwir9snmAdMP3a9Wjw7b82DpqWf7yuRX8UCTCeWp8qKnmkr5pj6cnjoHtEph6fifsbj",
  "key7": "2hrtNV5nV1JP8fyBmqoKNLYUVfBCjBfvvD2HuRHBP7YVVz15tq9y8NAshGp5GN6Yh7bdeuoUEXbZn7NuRtvKATWV",
  "key8": "RWyzHtv4zJPmXMz6kGZAAV7vxywfDiG7uAUBHravj2UyS5gpoCn6Cfm7GCBvTD5U2RHBSwve6yitdnxUCAAoV26",
  "key9": "3cyrsoof35THufcb619QNtfShtpFvV5BsbYJkctXVmj8pWTt3BFTABQ7hhqVKCgVegfXvBpe7Yvkm32rYFGSDwVK",
  "key10": "4tUWt54VcreWMu5u1e3hCfxjQ87tyfC6HqV6DPwTLiNbVrWhLdNvjeuR41yvXhFZLvrzPpTJAN45uUx25kYfd32E",
  "key11": "4dxHvLDgYue7CyyXg2nZiRmYFE1FhyuWY4tbRbzw9QTcxCUDEcmiaLaqzfoELUG7EgZnnHohJaJtTXS7Jv4aXHP",
  "key12": "3u8KtgwWx5ViyuhibizXSGE8qE6ZfUDcg71azY82AyRAEPzsKkRR6LezsxSLwd9j3ppy8t9TFcD3MyHtjdcfLPDH",
  "key13": "5jSFjvdBFmkWXoiD1BLottfJLq1ohXkxqkBGGESWCv9GREHWxd17xhbimszwEoJdbTpe9VLHRy8cvFZgv2jb4Y25",
  "key14": "f5hBpWQ5dCsnwuP4TCf6Dns4Rw1djYmn43GKWUq4VA22wvBMM44quuV826BExd2VCdcvC5JVkLshyjY78bs52bf",
  "key15": "pdSJ1mTiWZ8yyWnwceTS832jgM3CrMdgUftQXSRQhRfAZpwnvLodsMULp2RcYZHs4BxscYBS4SCm2HYwzbRr19b",
  "key16": "5UdH9FeM9P1o8MNgnCyktCANd6UFfggd7GUYoKiys2HCLuECisuJfuuKPvoLHW4ERWFNHW4cN5jGDfeqHrFUDNiL",
  "key17": "3SZjtwsre5gFvgevjwj1FCMHUH1nTHqjF9vTr5sPxewh8iErYRF13VBUTaGYV27XGzp2VvgRdEgraTesXpkNinyA",
  "key18": "DBYkkUaL1o8QJcdkZN7CC5Ut8NxP54ySfvz1Xh7aztkoyhxwNdrn78Vwkz8wGZXm44A79g4hNDp54Njkjy4mJc6",
  "key19": "ndSwtK2U7xNtKp1JBrXa7Xk1yakEkiErDHtQQU1fqgjoQxGAXiZiDDNtBXbNGuwdKbxyrjUQmzreaF2Js3U4LNt",
  "key20": "2hjvRt2pVAue4wSDZ1oLU5LFW41whvpw8U2tswPp1JbCmHg7tMkoCYiatcnL9Hy1g8YWqFHAZbmn2tMsf2Dq3s2r",
  "key21": "4pJLnQfpoNNoRSr5iy9khC8JDMkpapdZXmsjwYvJREzmo1nGWS7VufeKj86soqVCKczDp5V2X11Sf7gf3o6RVPsy",
  "key22": "42sdHAQML9TyccwqqRHkVLPcrcVYRbDwVyFgot4ncAyRui6rhzxFzfkaNy1viwxxhCdDrUd1GVrCMdT9tgSKoGGr",
  "key23": "4octzo2EET8HzMd5Q1CMLYYBi4sCmPaoymGkLUfxK5o6r7VuS3u3fPP1EUcssVdRJ67uPsn2aKhFeozhQVXtaXhT",
  "key24": "2rpjQdQBFMcB81gJwApb6WNhprfWcwbFH44gFaVdEpkkDXgHZvuvwpRyYfwNQ7TK6UQgcFZozyRHD24Uw4fNaWhF",
  "key25": "4cookMoAxUBdNU2ePMyZ7D72vNpmNqkmV86W1WCUDHxdV5QWSrWS5HJfkYffw98FQRgms83kr26eEa7wisUbj8qf",
  "key26": "3ueYYGgXLETBhB1ZptcrLnj2sErYhvWTASzg1SrvvrJnvYj1NdP9CsySrrYNLourv8RQboJJwKfrV9qBhE1wmKny",
  "key27": "2RVkhxEANK9HFrqaY3zqosE2q7qVge6zhmL9xSZ2HKKkQeViTnov5N3vQZ3kQR87R3QExKhgjy8Usqvdu3q4KnvQ",
  "key28": "49RA8g1NAsG2kQC5m8LpEmePWo1wQAnC23jX6h8maWt2wrgjdtCpa3hiC8W9LhSgBvJL7vtWcwyFRVKTjS73s3vW",
  "key29": "fYVSeez2ZesSpGdQJAoLByZtraavXBdsA8tr7UPZJ6ZWmfnApUzT3yvMWWadzuHwUBCpMZhUfTaFUm1EuzzNSU4",
  "key30": "4N9VBDbWEn6qMR7troN9ahnGEmmvi4osRrowDNX47j3NHb8quREfQ3G3jciiFBypxsX7BKrrxH9UgncWpzfcrLCB",
  "key31": "4cgohgr8jfvr4qksJsELMmDuet6Jdqinsdx81ijPY5Bd7iZvvPKt9s4KkxSAvqjoi358KkaNbFWKjxsP5KEz9N2e",
  "key32": "5MrAbSTu6WX7QWLrRU524DQW5ugrmuviVcw7HcsXAdmz8SeuqbTQXoqaNEF1FLupBpSEZ8amg7QUQzkkesvwiWGX",
  "key33": "5fuzJDJj1ddVdR42Ki6JEVy2mGjQFGTLq2NxVvKmbJtnPRNMhnrJnxYS13e6AwZdj9QTjqZxJwuDaUUSRUur4Udm",
  "key34": "Ffcdgn31W6uzGQNvFQ3ag6K3mQy54i1UpiZpWESxHoYEBvuRjQT8oGkFwoijfmXtsKPiKHetDhmJuQBoSzmjFwL",
  "key35": "Mxwh9D5XWN8nFDqi6vbZbP6oLRfjozhTfyhcrZh7VR8RryZCqHYiJAtLZcitULUDD9L5vZQYJDc2gqNwUJoC4Y5",
  "key36": "5PW2kFtGLRbN7cfCfuEm5YRS7nrQjLALV8rbgmyhFXiA5gZiaYSZexvMTNLJL9vVUHcbQN7Bsa3E1j3WhzaXxfiK",
  "key37": "3ezDWU6PA6d2u6RUisDsAKaqTj2zfw3cPTjmt2wgwZtK9bdSixSCEKTys1PXkMgBsgKqgVdiC7AtQZy5gKAYaaEN",
  "key38": "2PayjEyJvFuTZmwmwgFbAiH8L2VJRj9EKxYZm8ZGeARnifFN5drivMbB9k7Zh7xYHCwKaYRy5DzZqc8dzy1GFbcZ"
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
