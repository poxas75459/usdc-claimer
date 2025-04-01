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
    "3tn9AXiSXHYTprL4fut6fkxs68YtT3Ne5W9gWzrVRMPx9dM9mRu8xps99wEEVHxqruFdYakuQ7X7bAhdPQYdvmWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61T6pTLti5dmdbWBvW9weDBYjnrYKjb8m53wxdHELDpG5kwyW1P4ZiALatJ9VT9YvDFy2RERUAakSct38qy6UJUa",
  "key1": "5i934UZyBDbqRbMJc5pQSMPkoXo9hFU7q5tTDmjczYoahcR2MgXh381cspwGdBndkSs5zKqcioH2Qa9VZJDcHVmn",
  "key2": "BDZZSDmbvKkrD2tMeC95KhRNQa79JPTiKqmJPsB56shHJ9SuZpgCNmWgLbK19nDfJKMutmA3Rz71itNfZzgEY6B",
  "key3": "5cz5HxJddYkAEgLU3StTsSoYcbr9LNvBC1iTKmhCWWnCspNugXAGipPuWpGd47naeaqE6gSzP28TRWrUttT3aEgP",
  "key4": "3Wue6Ku9sNdsnLhTUxnNNmoYe1BFQseTcTWf7nUNY3QTti8PXGTiJCZJCeNXPibCU2inymUpUSUtRfFbHgz4LvqA",
  "key5": "26qfamBBeABa83jUdc2mDeLLQiHrkBm7k1pG5MT4fajmH6dH7oqPzyW3rKGbkeaaszXcfZ6EfavFpcEUNhUxbByN",
  "key6": "37roTBE3yyCoiF3ktd9ARiJ8Giw5jiShZ3tRvFCAkBVqMYpYmQWimkEWP2d2xGuFPyJNmBDH2ow4sVRRj4pew8qh",
  "key7": "5tKjT37W1r3Gk8znud7WN4UidBMBSJfZUWHqULqLwzNKJgaLWDahiHYWQfMjRcQUGgr3nZ4b2Yr5swJidx5SWAXf",
  "key8": "5gcGMRzJ6LafqyZaPeizfWADFV4pnVGWN1wyFmve3wAzMsaRnwAYmvkJjrhgJh25zHZ7PwCVvpwmNsRitSGBMZ9X",
  "key9": "AkwcHqw2TYUMhSbkeuHc81GY22cP8BekJmmPoPebJdj3DwX2ywcMGsoengZCJ8wWGrrPCBBdPs1JN7vW4C4VyWa",
  "key10": "4me4QFJ1DzX56jsmBmYpz4n8cR55Tpe1XBiC8Tw2DDf4vBDXUX1HgPieHspo3BEUyYAXHjbLecKeDEbpjKjvy4k7",
  "key11": "8t2TxCRpdmS74gNaaoTgudNNyCVwWougYvTzRytxMqNRAzminCriTptnwwx5S4TXwvNxs5jhoUKGTKUqwZR8XrR",
  "key12": "2KvJRuky7hE6jxAqCCGWn2qHZtySrGbMZpmujyH4LXR2j2KV9sDhGSCEYoYa61dzEJMQJYL1pJ67RMER1goxGyhn",
  "key13": "59s3J1FPmjngVik79iMtTZPo54cjV7R43sv7iwP52hcpWQxcQ9g3HFK7y4yS47gsrXLuWPngFfvpCt1JyD7mifHe",
  "key14": "GAH2Qr77owRjZnGoa1ybp3JMc5jK9RYCWehHdQgXZ2kaVyR9m3dggPt9Mv9uoVuGRUv5tEDjw37GXRxpxeXyr1s",
  "key15": "5i7rvJ3vgxFopZ9wNduRJo3MTSovoq5hWwiHjga28Mv2fMAJinwizrNqdUEJADBDLeXu8851cvptMRdLwwhNrzcm",
  "key16": "2hEPbp5ZqpCxRHvCaXm7pYm6uZeEUD1zU4TW4tBysAjRPZnJPqfy4WkvUiQujRG9fwWYDj7vjWgT5dRmsm1ovART",
  "key17": "4nSbGPk74uVGwdHkGkP2UXmE2oNs1xcZ6VjJb4ACjmh3YekQwT39X6zrTUKEB6SV5buBcpRRRMLu6KoJ1p5eL1Ug",
  "key18": "kpMk2m4SMBXJVvt4YHSiFpT1cvqb6FL61qLvaAiMYktvjtWs1mvoU62VEKAdW5GXt4GpPZxzcZwEQQv9X1rjKQR",
  "key19": "4LT3LUzTutFi3N5QuqCGpAACWGejR42q9CARuYAi9CCw57uac8WDpJ591bJh7odvR9vPUgdqcNgFphjqby17qNCx",
  "key20": "4rHJiMhqag1NaHDJ2isjyz81bn87QtSczBQdJ27nv8ugjGDSw9oyGu6rSZcmr1ZZoC89JyzPas77YKyXBgEoSKnu",
  "key21": "4ry6PjZaHX6KtrenuaYVejrayNAR1CofvHZAw9cbJSnbJNiyPZDCn8izmjZLmmBad3kmwFNXxaTennTSSqSBj8KP",
  "key22": "2EMdfx7nmap28eNamRGbLASWwuHiPDPmgf4c7Vbzpid8QUuZAGNHgmHSshcEPb3NVuj5NFhxwFxtTdVuyNLNk56G",
  "key23": "2h7PySLTXsFnNpvFQTizyQLoqVct3vdBQSbjTrNEWeP1U1m177a18jsWNWJ35wvfm86xuS8zn5jXBXkm8u1yJa6J",
  "key24": "3My5EWeAhUHBQScGAeE1rNEjUeGrQeZjxK4E7KRC7di5ccPM1txH1dkvre2yNu7br1ETXBE9ctanUdv6VUFjL2pN",
  "key25": "3GSQBeqSTyndvUpta6zP6sqXY2THT3VxZZXBFPLoLNJCW9GihwmLHiSVWndDfLKjT8Yi1U6d47NUdQhYXNMMTLiL",
  "key26": "4C8b84byfH8QPu9KvscznBaa6faquWa6mofdaD599Rq3KUKxo57m2ifBhmigQdFvbydeYPFdSCqfr8d8XRad5pv7",
  "key27": "4RK1Mx8t5iiDw6i4KHnYu3xxPsczGoBPkQH8aH1n4kkqSRf9StL5tJ6nGQbxZJctqZLQo5w7CgN2roJQ5ej8XyjH",
  "key28": "3fz51jMf1umSkK4dPLnXDAy9DfyL1QZtCmTw2dBPP6NHXf92ZEHgzXxxDn7zeGq4wG1KSYJBwgxRRwE5jBER8ZAh",
  "key29": "5br2HeSEVzRTCckiBkS43J8tNY19Z3bLvmueA8CpJZgC8hWzJu3gkhRwsSfHPbVwkp9pM1oPgnAPXoiuoTsgM9FT",
  "key30": "1hnubSbJZAdbfeLz32s1fJm2dbJg5zAnanWLx3j1zK6X8AMYqRFg4sZGwVeYKmdqCSix3iPkgNRn6RbaT2CC1aS",
  "key31": "3vFL26FvQZULX5Cs67GACc15A2xypPXdF4VtbiHsNZTKom2cb4XxrQ2iAfjSHDCDcdQZn6LQDkBHChGQwvxjPz8G",
  "key32": "3f9mfs2CoEAE2u5bvWTd3rsbaXrs3CQfkYMbCrcZwampmukg9Fi9qyzV4kMY6pdeB5mqS3jv1Vg9CjWfw86Rq8QW",
  "key33": "48Gr1ZWpUxTZNFN2y11VtH2bPn9yw9ptg25zfjH4dcPhtsnWdztzeXP99UN7qTG3dFWEDQBwjQNeAFDi4ZdF2CfL",
  "key34": "3DdD1z4C2Mn615bgCbuf1iJy79TSW7wJitcCLTqkeB2PfjsUD8rymyBBgkcHxxAPuAaQJNYeTmpuxvAtHrYvcuNF",
  "key35": "3mmd9uX4UX2sbRGE8RFpizwwZAdaEZ79eomfGcs7s828dcFjoSJEtiQeG5JfYsr4KpgxXVWDKySPPErDRh2pXE1M",
  "key36": "433eUTmqzzgQmiN418fTkb8hpYhuvoamRmFCbe9rMmRvcRAqFmcL1cFL8NXHhskmRyvCfcCcHcsRk972DGmdHmqo",
  "key37": "59jEgsKPmoEYTMWMEZmtVoyMCL7fzz1JBRBpFq2kC6QoFhgQ7Baq3HBWy6vLik2mhqbDHsR7iouvWDDvFvaWicL7",
  "key38": "5WCPi8v28zvTKpAY3S4UbA2LGwEt78TeDVjT6dawiAgWCEkRz6xXFpLpqYtRcgbFn3vgKQcsmdWUUqfBiCJmFkWE",
  "key39": "4PNURxQxLMjkRPgESbVGqMxrBpuZoFzrG4Rsh4EcihZDTYL8gucAFuzXfhR8g8XoVNtAKDyyzBAfbqEsAqtPYZbj",
  "key40": "65q4p2zMcMGC53DH1sZ837YKiW4JBXSz93tKFnpHkvkrVAGpceZRfG74FPeATKSvcHGk6bjJup15nKcRCzjTSu7f",
  "key41": "4uw4yh3eejoaX31Nc6iaJPLghLKrLqYFmu6pmW2a9xt66eWYFzsBmwjBkiw8V6781VLDhpKLVbehUvRwZD6ydxir",
  "key42": "3S2cSLqcaX3YDeuwa4JmXzp2zHWfa8HT5WcrEfENB2gQeXsxXyeccPhKZd9DMsCCcob9NzgWViU1nae2SHZgJdkr",
  "key43": "54eX496JsEVaG5w7VMiYa5uJ7CMh4w2hCp5tBFAZ2Ey2ZAFTf3Z6XqegoSMc5s7n6r8uz8pMcRPkf6uB2tyUHRXZ",
  "key44": "bVohK6DQPize4f32B8TWycrGi5E78oS5eTWgtep1oRyrS59Fh3oW8N9rRZfFjuTGwaGK2r674vvj9GPQi9WboME",
  "key45": "2irpGq9QXMTaiqj5oPzx37tJJWP1uC8EgY7kVx4iTw3ZiRDsFiAnfkSagY2fBHSqSCbA7p79muFaa4pXqLkH9xdC",
  "key46": "h8j8xYjyF4eDUV5zTrk1ztX2sVQ9pihN2rJjfuE2Xpe45Y1hTHByBKtXSJpTnyYnwRz4gX3L5a39oNBnAJ5BdEq"
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
