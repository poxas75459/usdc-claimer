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
    "5eFv8T5Bp4ZAV7GBVsSfjamxZQ7YGbfaiQWhMwjaaFSguZ5VqqB3LbABynnsgeXPzEx3vbM4K7VcvnFae3gMoSeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vt9sUP62nv1HpA9BhUoVmrVsAsmjspKeu4MAu59MidvNyzxHQMB5QrpwArcdUpSaz9NprCTPcEGYGw3c99ncBY1",
  "key1": "3Li8wvccU9V4yK4PBZDurAL1sNYhgL2Y8x3vj2rFzZiSaaT66fgam79q2jHD6cAipScrnxhZipMWuKGsGbX8PteD",
  "key2": "26mHUVku2PW182uiWKsAx3SCwxUGbTx7cz9Df2NCYEG9SDKPAHexdT2zD1ouE9c2rrpTX5t1Fmpzs59WGmfJB2Fe",
  "key3": "2fCPtrQHdx3Xb1EzYjCXCRV3MtBpVf7q1eF8z48y2m6NUJNLPsCmLe6FpT1ZwafPvGuZAYJ9akStUNzbnq6rU46R",
  "key4": "jUuqqbFriNS5R1bpwctTjGsD8hs32U5GP8tS89ujRWof1LTisL2f5C9yL1nwjFM1ASYbXvpm81ZvYM3mi4nd9ZB",
  "key5": "3t41q8UiwgCrqKzn9QBdqHtjEpBNKKLoN3SKRqtrY19Wak7hcLubX4sfXoUvu4qQ6no8n1LEHBd7KMKrb54zxHWd",
  "key6": "4zv8qqVVqJKoFufigdUrFwxcL2Hc4SACdfMANRWJjTDkWNZh3wk31fegnro7GwMenPsrkHpM3mDmYscptPFE9F2A",
  "key7": "41Pyh1cQkfMuWg4tnMKVadJ3ZJqZYrs2GcxfdWwqiitE41u2g3JPNXRoMs5zonhPSS8A8hCtkdBxzcPujPPcnTzW",
  "key8": "32L4c4KfkmrLTMj951U32Y8PiHqydnhxr8ocXHA7DBLK5XjdEHMpfWmiBLHDWvgHhf7pKkEg8uMwJNoQLGs7RJY4",
  "key9": "4hiXraxBMcx6MavBrkErsti7U8NfecsLN4aTLoCQ8T7WJq13ZdGkhsZgKSuYRKJp8WhueMdTEM2ZcBVDPxJFDQYy",
  "key10": "3TKcSA5jYbfCoKtafFEJdD6hL9bdrZwJHzWH2g1WESYemdgBtHYz5CAPHkPchqjKx5CpnQ9ZfX1ZE8LXqngcvXvv",
  "key11": "4QPQYPiWMW9VaGfV1Jhefr5EjR8c4N6Vg4Sowu4HnZLTFaJkUR56nDraBSLzEWtrxvceDtuRXYaz5mYxtEdo3nZp",
  "key12": "3iUzr7r3u3J4MU2aXaMMavpTcDV7C6Nz3bZF6k7XCiDve6hx3wddDDbVHNfzDy2VFcZkXQtpYziHBuSa83cGFcN1",
  "key13": "XN9gu9gq5M2qNrja4mNoeBpjC7kbThhkWvZGyiK8BLRFmpvwyFc2X3sTFTXk8ZKfAKpLAKgXrfnm5BECoDUz6J9",
  "key14": "413JTwv61JUcogVwwASd2DLddJtpbgbpYRK2L5y7AL18QEm7osm8qpdZFcsdTeZkS44ygEkWk3f36kMSiu9Dxqoo",
  "key15": "2MMtnFd6Fdc3TfAmGYK6sZKUpXemXWmC6Z6UgENzVsrbqvbrtZGsVqicHT6NWbcq7KwhQr3TebsXvi5V9w61tosb",
  "key16": "DaRQNM5oBq5sYHcW44ywKmH93tnev8wogyyVtG7BuMAFQsNuuKZFonKaBhipzvPVbhiCcLHVZMGaEngYbP6GJPL",
  "key17": "51oQ5MNcTV3a2cQmP53g3jEiRuE7HYsSJRpMTUhedhAXYp6nLSxzu4YzsA67pj8aX9AWXdxjGsGDpBDT3Vnoansp",
  "key18": "w3P2EeEbrenesaVMkz16bHdFKCczdefLnnrMEaZTrsmDDKUwuR28xmKspF2WGmFk1ruCDb1AHNnNW1smG9F2aKm",
  "key19": "5HYJLQGqoR3zbzyMw5hhqXeA7KNpi8xwJNeroGa1V8yk9SPuCKRSmF3p1ojdD82eq5jEVF4X52Ecqw4GSKhmeMrM",
  "key20": "3mUjUGsXaLUAoN8UdPk43g8Rhm9Rn72stUhQk9zUnaPh3HJFh9HfHjS86jNRzY3vEMJMnfmDar9cw6NNBe9duYjE",
  "key21": "2oYXPNQQ9JvZRjk6f7337BwSjL5neFfnGrxEuvXLxc7be8v577LeGAhsA8pMUPgPES3uznzKqo72qUbuAqezKb3p",
  "key22": "2F3sN8WjWrNLEhS3ZNcy3TEkuboTkFMYYHbxLDetYAFxeUTpLD8oLdKso9ahCVaPjs2oBUFTjYDMHLVjps8Eo1SS",
  "key23": "2CBtJ2i6sBjZYxhW6sTJvkhYvj3ki2fmfv7Jh1uCftv5jSSUL9qwjMtPK4GdG8Sh8PP4U3HKh7A3jHTiTtMRVnfS",
  "key24": "2SzWe2PoaEYzjCHTbyPV1S9UB62HKzdwVVXAg54kFZP4xQ4S1V3yk6oMiboazD2LS8SekcAZ5DNRHcUANSV69XM7",
  "key25": "5R5JcADuZEf9qU9UpoiK3dtxrqUX1B5sDoaPxQWVRr3kvgMpVT6KkHGp2WTn2SqjecL558tMyGXkKVHuu3DNWxcK",
  "key26": "5mPDjGwQC2N4y2Qu9U68VYk53TTrRhj7cJGweGV3kD7yhDGd2c2ixVwf511tZxMdJgHxQLjy8un6mA9HkqJvAmQB",
  "key27": "4PqafgJizvS6hh6GNjPoHZsCvo3PR77sPvuX3TN6mU29Nf9JFDPm6cSZL48mVATHm5a4t2fKHNS53sD4NuGMr24k",
  "key28": "5fnCAgrQwW96mnMS2mJ7EnTaDKJvjZMdA4owcaBxTQNASetfd7UaaE1ZLdQGutqtXRZxUvc6hZG9rW9ank3fYvv5",
  "key29": "2H7UrTFseNwMzcLqhriKYsRKLaiMZ6wcdsndT6rXGkhjwvtPYQ9PkJCXoFsXnej1nB7swmB3VHgsqhckQLZnNyTH",
  "key30": "24M5RC3FwGTrHn1n65op3dsSDVzPHpaVHu19LEVuvWQ138QrquhMQTqX8mC4u748wyMCD2WSkCLao2rTXTf2gdod",
  "key31": "3F6Jt8YaJK1yw5DEQSw5uf6NYNYyM4PKTYs4ZaxAknBnHhzSQQ6rpYUqvNkiVC3tXrKAVAJZu8YtqqAkTDq84gav",
  "key32": "2mVB3dci4PG7LML2ZacYJi7fhripe98EveLsGFoWYdcjR4GWgW7jNBZD95j8b4vspH7erDf4U5Ssaq6o2uK3faqo",
  "key33": "3UUz8Y8UJkCJFbib9amK4qydUZHsrN3kzF5j8GyyS4Chz5dtvf8xu28gLEwwY1rbCV94RfXhzBQzy6UoXU4pegkv",
  "key34": "4cygGHMXgDqeP1cojdfD7Chn35VUnec4BC429xniWQN2vHQnoYAQJnPV9s2orwNFADnYE9kfbkxpPGMd8oSB1LB7",
  "key35": "5KhybLKv1T6TZZa5Uj7m2k7FXvfB8uhH9kkvXt8pfPViRHoshz2tQxzQfvAie8DkL57HFScg4cRjxBAUwNToiPS9",
  "key36": "21WKhHoPjso2BrNb2sHGPRDs4DXkDnQXh7vJcLwtvVGDDQxRLPJNgCvo6apMx7YJsVGqUvihEAbj1fFH5Znhnufc",
  "key37": "2cy8fYud5bGeJQ6hKHgzv3Mb21FBpA4azQhpBtmp9iXMqbcsiSnGmzU4vpZx3YchocdmUfGNNsjhczikMDMcuLQA",
  "key38": "4E5MbCtwAwQQpFBQagdUPfQAEHYoktVMvMVFoNSocmFe3U7bGiWU9V5ksjyUC4aR2CfiFZjbEsk1Z7ae1Rg6p1od",
  "key39": "3vj8FgoN853N8QhjdscejNwenMrca5LecMgnzQAMNAFQcLmw2DEBiNdv69K4bHeoN4XAa2JpadHp5bHxw7UFGvVV",
  "key40": "CjdXzEDELAWybeLGVG4TXQkGHcJBgd86HK1EvXenhxY9RQN8339fAUr3wgGx3AjErgBLEDPpK4Cz8qxfWMMC5vc",
  "key41": "2QQ5NvdQxFboP4Ub9THpvLGERGXj2xpcJ8NhFL3hZBUU7VWkE6256BTUUQXYnfrPh5Lx5sJ5PH2kH47nSxnsAYRz",
  "key42": "2WfiUAJGMmebXuqa5FsuvpmdFNx4tndZLtUSNsU8inHJEzA6TCK43h7DAjPbRUAri7r61oy7xCXt34hRioyp5HHz",
  "key43": "3fRJqF6gJ5thWtSATrs8aQo3gEccXvHdL48uxMVkuNomZLeiMKsGqGBqJHj1aVNhbje2FQnKPUZ9XyMFywVnkZ3F",
  "key44": "3jxySGPCdfD6G3Eog7dfNcBLJZheU21XF4Ct3cExEWjBKxtS51kZVFyKMxveA9KQ6nuGGGzPz6wtYPtDFiPggvNc",
  "key45": "3fyqqkWDZekM89qoTGcrnzGHQQEwx24aboSmF7tbgxva24pAivrVzeugzGpZmbHaQAq4Tx8XYKRHLbtXjMYT1FyP"
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
