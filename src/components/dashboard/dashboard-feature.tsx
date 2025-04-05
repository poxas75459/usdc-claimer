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
    "5wPcbSPD8nDjcBe2ybN7k9tufneK5886vUBzcgn2F6vKg6n87G8F4MkuTPhL5ECtfdPqLkhfVbcV255CCcJNRRc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NQn9HbwrpFBHXRH7yPPuCpmfJjMMAKCDNE6TBCL2SzAX1HvU6tEkBXcT4h6xUhgwe3G2Qdb5dvhrhoWM4eY8ru",
  "key1": "5mYyXuyZNmgmzUgwhQiNkMZUGmGq6CHsh1keG6bD4jvDayWBZNk4S134LwZXbAR5XdZQgQEpMuaE4cVVMgLt6oyb",
  "key2": "3HWmvpjec7GVG7PoLn5uiFgvPhzLiLiYYT9htYUiFx5rp4txy2SVUa8MoVzi6BedQ4eKt6gutvLX9FRPyZKpuwan",
  "key3": "5w6wEepKVPmk4TGqchzswNBXpFUuAv5xxQUXycAqQU8BkHV5AWUoPwWRtcCgm15jajcVz4TjFKxbrVYZATequv4F",
  "key4": "3WKb8npiCpMLrwG1LGkWiRn6vcRty3d6aokxxyGNDFPE53RyMNPuzDm3uXVNVKwQfuMnQHYy9bskvKeViyfYqBag",
  "key5": "3oLkmRUo2xFphgj4SMptR6XYvDXkdgotYvaZPNoh45LBrtGd3ChTWhUVzq4LuGEpo8qMB1EuVzxRqcqTuGvL9GAG",
  "key6": "4559Nvepnxs47kfuEAD6EdHXR4oWuwNpiDYTQpLUo2h91Ds3pUjtREjKkx9ASGA33Xvpz5QU583wcsAowkLuPxF9",
  "key7": "eh7JWBy4kyV8CWWVRtDk1yvt24tpCVEdzNP2gX7Hx27ptettrwuTBQKCEvpGLzRqidGDbzgzZiRNzhw6b8UpM9T",
  "key8": "38J6vtgLMF5KuRcZqbzStva3Pof6aSDZTkYwmBgTmRL5UugGzFP3MRCyjRhEi3B9sEmwV8QDqnwkATVua33WEP21",
  "key9": "XPuDVJZZVEYMzhYvtYZqYBCajJzhbSA7oFrtNNNZDzKtTNU1tcjLD2JJERfWHN551c5cyeFn3hSqbwZmy3zvSWg",
  "key10": "2d1DbTCvzNPAtjNJMnnBmBR2Q7vZPSspY1ezFVyzM7CtzKgPHfgRqp8VrJyQubHUjvVzYWArAyGnV2KUvKFSyQTx",
  "key11": "damfT14S88gJfA1akbmwJ2B6iEfV96CDBkheje5XSdfib2zERmbCSNmbSUFnZffMNs545TftNK8fez5mrT6V7dh",
  "key12": "2TLfz9XvpwRjTgN2fgdk4SW1TjQcwXro922ezVkP8YCbHngWzNCmJFHiBrPUwHU22Kd3yP219VHV3eKPG6h6CaxR",
  "key13": "2vFtNHW49qJe8vFQiaDeXhLTmtUMQhnc6dKPz8RjxA3AwhFruptkQeowE83fK5B6tM1cCsR3yoKMhAHZt4N2J8Qn",
  "key14": "5JH6YSdcQHqefPncaJZPZsiVRFwi7z6fwaAD557yyHz54wJoHqH3Ls3RdkMtKroPC47LSn1Yq2qy3Qqd9KPEZgd4",
  "key15": "3wc18T5dhFVc16XfyxY4iotwUknfpzv7QNtwgY3tdDWSTgr1re9saA58Phjo4CRvRQfbUVWVRGoYdh82BFoNKkm",
  "key16": "2467qfnnfxmfofAo4Wm4A76XnEPuAzx47auKgcce36dN8RNdAsbNs3jm5nymMmUQWfbm4S81V5hZQ2x4CM5coJvQ",
  "key17": "4Jq1F5kVaxPwQGRdtXffmBHBQCJaFZyW8oP8zvJFNWcT1Lg3oB5sbUM6msRj1B5okgfGiTjyEyg8uNc5hJ1bW85A",
  "key18": "62aesS9BQJZR4n9BuNxmFFZsmApd9Jrw9pQEnHEE64YkS8nTz1dFYko3hH1TJ46aCXkfRFLMtk52ag7kvxQnwb55",
  "key19": "4uUaRnhtyCgJRYsZrXnD6DE6pmh8f1x4MBc4JW98etiivExh1kaJFeJdiH1teTcA2XynMfCbjmBhusWyir7nNwJF",
  "key20": "2UpTP95tij6m3JaZtHogZuezQQ45jmuQ3AJ5acxc9hBXA6Mwr7bhLEeiJrYGJSAcEfy4casqfpTgoyBLbBcQAfJD",
  "key21": "qPPztWx9GVPJpxfLxVshPwTT2JxPQUZU1PcRpEevSxNaHHeKnsALEqB8n8RzpwjZBfJtoFauVJiidgT19p7g1wG",
  "key22": "5afSt97VR1yxtHMPdfTBCYJ4WS438CM6xrZd74nacZGTYNYr4An1WhTPnkaPhVmMYH1sy1UjbBQb8ECVGUc2i8Qj",
  "key23": "2AgtojUqVrrAcUvdQW4KDs3eVEETkPMBPkdZvBLghYdYi5c9FUGF1D2yWTbhtJo3hVVr3Arwh5C4GvbkxLLhjbkf",
  "key24": "56Qyu9afssDBAVtAimRiRA2Wv8MgXyr4VfhZ5L1ATKJGibty9VP7YUQYv6FnrxFeHeakDHykGtKzjcpvkDLmmiR9",
  "key25": "fvEy4qsPR9yRnq5yKPPPwU6YRM6TXFS5M72jnEgmDfdDuXZ4jdbaDC7hbQmM4BvPsPVyaW3ZzxUsBJPmwa4saPZ",
  "key26": "3ikFoTDy6P8Mpq9zYBZoYfKi2V7TBZeCoxEJg2PradVQ7iSqgurdD1b8UyL21pBYk6D6S3v3qHf3tn6sRV7RH4ot",
  "key27": "5GAp59BANPvByKiXMkr2yePGfipm8Eqk31ZR2yrpKZYqh6iD7ZXK4FDtcebuWDVN8yVfz1ugTCr77BsAEMeiQq49",
  "key28": "2WKJzRUrs8FB2BpbgFdMtu53J36ibZX6Xw1NYbAY6ajiK7oaAfYzC9sBmYcCiFKspQr8m9RZV5gc29JSatuTzFAZ",
  "key29": "pp7YPFDsRrxkH2c2fuh6AU7u67eAzdYuzUnZZFM1ZRx2yDNq9GUmi3atVFaAdNexWYKS1FUTokiYavXjA5j87xS",
  "key30": "2Lqu62YSBxgS6BG53hSAZ92sE7DdYoTpbasmThjtKt7C7CXHujLjhaJLNwwfZ19dKHbmBfa223eNAzwtHMijan4m",
  "key31": "2QpQxWsWf9G18P7kfRAcmYj6qALYmbQViVQ3vMcCbEwdy4cEuG3RTgBSfhnjSes8SEATvXfW4AMvFMYHxNQLJXJ5",
  "key32": "3Vf8CLAkLbm7AYYhNhCSkH4wFXw13urVhZ5CEWQXWx99bMvFdHqUhjDb7MsojKGZMQcBK6RrLfDWNAqM6VXgJrrK",
  "key33": "3RUiL2k49QfjnQ8ypdJebe2ToBBpwudWTMzsbHG5GdLZvYz6ZFJDmkQZWqXLSzH4g2gZq7sYnqzxqV3EnGhRsXgT",
  "key34": "51wxmG4JGjBBXhWh8DpY68unw2SaGvWEsPU623VgMKV7T8HWbGyGFcwZpKZCJWFzehwujNNXPqbeGAgEsTJeTj1K",
  "key35": "5jQrFbmZH2y8798PjgpmyvRe2DF2ZLHdvxJZD2AuNsCyW5aAzLm9px5N7H4LZPDKzYdVy82qo2PM6r6omZifWkfn",
  "key36": "429qUBSc5zrk4Nr15LerfZrnKTLp6o1ssa3xoYrfdRbeY3QauYFauHcHNTaD7DVvEz8xQH3FPjhXBX3LftXPpxV",
  "key37": "5PS4jgtAskyKrSvUUTBfoAZfjZVjuWqVgepwjSvd5dinnpDgs2k6GV1L56Ec8Po53MS48qrHLmih1HBf61udzPn8",
  "key38": "5PxgzZrbwQnycRgoVHSCQwt3NeeX8sPg3gGPJQmCbz7VPKSu2oJ3uvWUN9PnHrwVG1DxhF2kmKgSbKrWbGr1ubqD",
  "key39": "3jBc4L6U47TFfdcEGnpv45eECvg1f89fqD83T83s9T4or2aKdQhhmv9jooQ78EStS6hYmcLqNwWLjiEVq7pThFW7",
  "key40": "TG6Z5ywk4LbUf8u8ajwZoLR7HhJcTPE3vQQ9DoekZar3rQsQPiER4UdLfRLiAZqgWyLopSLjkcj15HyzLfpemfd",
  "key41": "26UmzHHKbPnc9HdDT5EzxBuqjJrULJcxS3i3WvYguKnk1C6fYGtcD17yYbK44xcDc8CYDroYeqadwByB7vYTpM7J",
  "key42": "5RFA4vayB3KteUpspynyxmAgEEL6rpLkA22g6vxi7hGmaDd5syvA7Toj8EH3ZZy4HeVqnrt4GCAMm35ztcBjK25u",
  "key43": "uymqeDpjvD2i3UAWxLg8qKB1g26tpTvPX4krJWmt8mvmLL1eKBAfkWQVw7o1b5TbhwQGtu6v6GRFTmpy9w2AwYb",
  "key44": "bMgsjjhGsBN5sU1vHXiZjAMw9Lz15KfDiNMvNNoYCcy1uvsJBchjaHnzuWR6hUTmsuLDrNtmspambXLa36GTomK"
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
