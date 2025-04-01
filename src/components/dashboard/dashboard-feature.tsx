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
    "bYgvAeR9CGbUAJLL19E1zUTMNiwLBAeVyqcje4yGHpQDar5P45mKrHXjw7LsLhH6XyRY7hup1XUzuzE51BsawLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mcsDVHJzbLx4QZLZSbWNXKVT4vE9pAF7WyGU4wvofxc19PV8dixSjgCLcrrf8x7Ei1fWcmu8P8XVhcZw2ZaGMoa",
  "key1": "4zy4cPPcQao2b6ecnrc7tVykqVsdnfCwrHpSkcyF76FBbJjMymZA6HNeBKNqWZwofemumWwwzAoH6dGuddj5xZpZ",
  "key2": "4whZLRp6Y5PZEqpFZruo8WN4cR45jJbJPvTtuhCnNxngxgHg1BAwJUaqPMz7z2X9TXgv2DFPa3BRd9ZWpemNf7ga",
  "key3": "5tu4uiXhYsE4JT6i1tQihNMVpiuFEKbwEze8TTmzeFrQEpzZUw2JLosGvpXrMmGEqekUdVPWPT48ZjegT8p2E8wp",
  "key4": "5tmY2HTALXXnM3RJuZHScDViasqVRiLLak8wXdM7pGTGzdnFvQ8cfmX7n268AoRnYbS9mQtNNHVp4QnXvxmRWhx9",
  "key5": "3PBtG9pusLGXj2w5mVdX7fN7syKPLNZ57Uvu4zpz6z4kAHNcmovBgh7TJqAfgq2tLJjfumHtXyWVnZn9JDnKLD7N",
  "key6": "2y8wXFCMEbfyfmikHsuGdS3FxDcVJFsXmYnE24uZLMKWcAJRdstZMkpV4VQ6PxgNqUx7yNntko2wWtqxfUyCqw1h",
  "key7": "4YUix1ouDZKgstowon7G3cHmB6KxqqHVEE7cHxgB1XN6u9cEfD8YuFpL3ZYwX1ZW8S2aGGRa2kRVKLfVPbE76oKr",
  "key8": "3KJED4bwcvSC7o9uZNB6A2b2Skn1g22uWf2qKuYVQ1VaHQmRXt3GnjWV7zmvSLNbesY8WVVX8JKbJNjmWrJJAAvo",
  "key9": "5HfgtiNgjncySvrd46vxFkTuCDao7thmkR6ZaWN82wduyBtFigPatkxtkjfnsM2HKGovTWT8WSqqZV1sPWAmcUaV",
  "key10": "3QPwWgik8qL6MeRhESV2vrzTwoBKChG5PDgWp6xUTd34itpJBa7mQfUQQnNVUepQUKdf7HSbvAwoVK2jui19gKtb",
  "key11": "23BfagFZeg9fTNG7dt5d17VEesUr7JKps9W9HGrGbN22s1PTstxvaqxMRVThL62hbHYUXaPePWhCjux5dEhwAPjd",
  "key12": "2KmcN67pcc9e3LUwZ3karXo4hHCEQTFNYXYLQEb2N8FGNYNwFuRTug2mHbkpWyhiZospQq3Bq6hGeyagyWyWPaWy",
  "key13": "27cSeL3P1chwxYo9bY64JnyubwaS2x2ifZcsguFsq8h5EmNpH4Hr9esaevZHp6oQ1zfpXcJ54GzsMj7tYbQsMs5C",
  "key14": "2ym8eNZmuqF85nmDPM4h8W5Yww3sRkxUzynB1pAZYkchM3VHMcinw1C5iG4pfhZixyXZaWjtXXftE5gAh2p7duJQ",
  "key15": "2iGkduULRVTmZAbu8uMwcx6UWg9y9HbYxJXDtkbGmfCdoF33hMHWmqDKShtXpKs1LbE5afN8zTKjEj5wCKnAS2jn",
  "key16": "39bQDtyH9A1MP8nh69STAYbnmmnCYhSvEJ3ZaRKn9W4hHJP9dBRi4RwkUwA8giYTL1DSf3Z4EtJphHqSTatySAeQ",
  "key17": "4RYQo3ZkZj9SVKopgr9eTMge3XQdZzwtyEeWQKLi1VC1UeJysFdCyXcadgrPPirTRmux9SCXi9b8iW3S1qYB8hSP",
  "key18": "2JTw236ijXuPuZtJZz9XD7QCrvhinha5D96TURtA7EnkupP8G7Fs1ZKdKUNHiTCv4sAup8uWubNJUhmcqejgsg5r",
  "key19": "2k8GXWu2w6eaYF8H6KUX9LXYSiR72f7goFSHAm7sTtuZPVB4P3yiY95fWMhGtzHeFsdjUMCFvw7oKNQ5K7thcp9C",
  "key20": "3R5YuHFPAgjn77ErsaXdyASPkxiMXQ3TrFWRZpKJMJW2rVdvUuJVZstm9T2XMwQmCLVyS6RK12Y8PUqnLvPxWSSx",
  "key21": "5oDBvQhMFqDodHNVayVcYuDZ7zWu2Tvij1nxX7QzYbLF1opmctArxE99vb79MZgBFnmmUV6Q7qYkDEeVDqNV9Si1",
  "key22": "2ySiALtTX34uD3c27W4UN8Zph8qjR8P1tVDS991xFGKXahqoTwER8qVfwXAaypfHRp6XMq7Yf8ZKjGxc6mTTwon",
  "key23": "2HGkt2gJjLxPW36cJTWcijN24BkXysovVKbLMehJVAA4cfXNiQvKmSFLdHzhnRTyLJEEGXXbmYife2Y8NuvZrm66",
  "key24": "4dC6XJwzuBJw9ZLunADq824LZ3aNpUvkXfzYhoyD7LTVFi9GfvPeRpo4Fm6usd6ic13nxTh29kPx8WGE5EFZnvWR",
  "key25": "5eXaPJHhGz26DPBGRvYsqBJUwBW29rmDkDe7LEjNVAer5WytSNT5oX9TDnigrEpWqHypzpXJvhLFts8q3g9LuNjJ",
  "key26": "5Qyos38Tfi4seCTMpjNbEBAm9aJzFtbpTMbuW1QxP7DYhBy5aHa7gbP3aLAFiNboVa3vhhXvDUuGbKc66eyvKCtH",
  "key27": "3eoeYLLQ22i6xHBLd9Vv25zKiBvC4R7TNpYzQP8CJACY9y4KisoBW9hEHEvYEZpPSqwhJ7ZZY29zyHsdZPcZk5Ma",
  "key28": "4idPKLfi2pU3xNRBDHX5wKiq11N9jofQEG9sJaTGZoxzim4RePiGhVDH5D1tFbtfzpdwZ3cbLGmqoKKPhDk26NR9",
  "key29": "5vGZeD43g78WioQAVCqWUMPs73S8FEqQVqusipJVFLfRTL9H44vZyvjpJYJj4AvnrJarCHN8qMngftayHHL7wcnK",
  "key30": "3N7fVZ6gHr7XL6zMs59FvC5Vdmq7KQqZ4MQsWBvu7jMiGcuDj8gy5cZV7wESMbaDuT2DuSbhswyYctnJ9bpuL8p5",
  "key31": "4phGbAVUNqJzfNxTTEZ8yyAWH9NKSJ7fNzksBmhv9NXCdfzy5hs7uwuzEo6BgJ891yFtmtPKumuVFQ9f7zD9iUKg",
  "key32": "24NL1uPYzE7aybJ7Z94MJsi1iyXzAxZRW31UZnnhNRJkMXb5MkYu8Tx894yJMrchk5G6P45wh7WTfjyCWDEgyXe8",
  "key33": "5oVgEhAqYHALeJWJFxK8gRzTDNkDHeJBkRmkURqp97vKiBSG9MGKDW6CN6FqTqs731gMDxi9WiPEZRJsXCdhbqbx",
  "key34": "3uko4xqcfbpg3jJkfBNrTwRriCA45Vn5aU5GnQeiHoLBEkEAMNnBxfgJcjgp5AhqznZ1jHo2Yq7Wzqo87TkxY4XD",
  "key35": "3N76nrV1AitmY6zr5g91bZeUqJ7SKynqva9yrywHAyNoaq8hCJ21jCjFTitVoBkUGpZmN3YUxqcj181CFpB248iv",
  "key36": "5afSv12jv62dGGrzkEpqojiE5mAHFeWuCMf4DDcteh2YXS7MGWyj9aV88pnB7mQTwfZbLG9btw7hYkeshv8Lbp9H",
  "key37": "5tCfnARxMR491mE6n4CwnsH89QgMbmQCjjQLGDEgH3aCyCpSkNF6WCiLzgqRuAdMKVeW5h71Nx1jfaYm2ahjiPbb",
  "key38": "5WRZGeTfciTiZdmxWMaF2TAWzXePVXdDXbPodyrdG2iYd4rTxv4SUg5oJNqvj2Lu3VBoBwJ1vuUQEKMyZpfa12C9",
  "key39": "4bFdDAXtoCpRbZ8Tus11XgSXKEc6mRy6zGRif3eXHp2E6EvHQeTT6mTdRdUe4YKhzhWaGJxuic9qc5j6yGFvh2di",
  "key40": "4YUutZtdSrsa9ftTLCERmm6JdPzNquFu1LN7nzknyx9Ki1jmHSzE7kUWGiuPoBXXE6e8RpfedzYLScE7qw8HZdJM",
  "key41": "2LFsvuMyXGpBM3pg6GZRCg9SSHCjkgibq2MmguDHZKTST4uJokXZuw3nUYTWamNAozL2XwFdJ1n4GqaDw1PvZjHS",
  "key42": "5hNeQ4aKgpWRCB3NUfWsX1u9ViX3NCKbaLMV4uuDvtkXZuiLCMyoNzw1bTWa1BxhtifN11zQRGCtcHEMYnAgFVWT",
  "key43": "4meruKzRrcVU5frLKRKfX9QXWwp8nypkHYXK7LuWwAXc57ZyyNwg2CZpgargkMoALk1uQmJY9pSQeJdNXXt4s43f",
  "key44": "aFBDPvUcPfANLRZo5fp7gacohMypnFeAvvTq4CVfv5tGKuFDHRZsgZR53Z7ydnsTcmjCj5bGfhcJ942VtuMLgbo",
  "key45": "5i5TnJJYX11ECTTwfM34dwBvNZYWE32Mc3XJHCwPgV1E4yKNEoKy7zGn7DuHPenPKoXeoXuWpwiFDKAtw8x1nJKq",
  "key46": "5XqZwaATyWpGixCMNhbQhoCDFA4JAw1qg6j6YgJHHPWRpBy13o8iYyy14i1tEcxDZrtaBTuuCUnXMmUKXrZac8Lj",
  "key47": "55V6Yn6hXAn84SDDUV7bJANo4gNdwfQLZFNN1EQyMrrPEvDANd4RikdmpRoTmzBYqSv4HLs242USVhNCbszg4vN4"
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
