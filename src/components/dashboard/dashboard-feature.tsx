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
    "5K7eSwWrW1bheydWsuNjtCktP4oV4JsDQprxery6NgiRgsD5AUBWWsiRu915pEc1qn4SgbM63eVY4FwTQ3Ey4PZN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fySp7S3D646Equ7vifoJAmrM3zqt5vSLwtSCV7ugS1i3StQgyzJ5rmbh2gLYdLNyXokdbVABi4gP4dNqyiUCD31",
  "key1": "3AY1m2CDHcYRR8vDpPzvi5v95EnZVeoCgefF9MtiBUmLBLnZwbNc1zteMycoptFfQYFNVMvE9MEVb9JpcRjkJPXs",
  "key2": "uQs8ZwagdMaY6MzuhxeVgnVyg1Csf4m9N6uoa1Li7WgkGQd9aFwic44zAgPNKRDdJWWfV5xXYW2mTsUwybcR6Nr",
  "key3": "3Jr2vcruACAQm6sS8DFvKrUZJ4sDqhapRnHD3cCtBNBWqdo3Bi8rQGRtYVHrVQ3MGCvFpd7XXrnMzyKxqAgpRosL",
  "key4": "3a4imhMVf9M9BqKDdHcLMFuj2Uev4PpQSMkGV9Wp5YEKXpk2fBLRhijJUxEsF4KrsccSY8DSgppGMYfkDARt6RbZ",
  "key5": "2DVJmYXm224sQycGgxVx74rKRZjkD8wKkk3q8yg8TEVHtyFUtbJaB6mktMKuLjHSr5EZotBV8c3v51iXK4CbtbHB",
  "key6": "beKHcawyY3Xoh6i9xHo6tWmbcy9QYbEpPsEz1XFSgLZBG3NbX19CSnxawzXJGEqvT9ByZJJMBzWwBD7riy4Fw5f",
  "key7": "VR63Kd8Xpav3QTJCyPR1KpBRXy1YgXTZhmSjuvm5dPrbQhTAG1JbFQjCJjb66cZzVJ4ZWpRahmKr8RyRM88mtsb",
  "key8": "UQqQWA3We3T91B2DqtmmuoiuXpeLUiLpgYsrhCLWo89zmrVqZ4qJMgyTYaT41dQSPqGwmrTJe246CwuY3j355YX",
  "key9": "2MuCJ8FkhbGjjqgpox6m2LegPvzCwcEkhq9PG6PLzpy2jzozeDcdu3KPSqwP72uMhsv81E5DzWUHaHtzRqsVrj6Q",
  "key10": "5SQrJR1QvocZJ5k4uEcKoSVgrtq2Y91sHt5xK8WAexvyMVeXJuioS1oUennnwJp9c3rjMEnT3P6odbGeH6Je6cgU",
  "key11": "52V4UBbPSdSvrcHUz5C4N2pEJmqNsXn2WU6VEhnhiz1QmJhUkebSgXq8iFFfuP3R5xHGcRX5FNpSpuyoKdtgeyvW",
  "key12": "TRHnKmh5cJWzQpUjNXD5ZTwLHH4EgjEy1ZoFThnzieVux8RCcyaW6d92DufZz2ZeAnD1R6yFFJRd5p7BkbuD4am",
  "key13": "2TTrsgKTcNEgicUDB6bj484kEeVSHUqNpykrkxBiFcF7mHVWF8iuxmrSZT6LhBitYRUtPJHv6F3iM1iTxFepSK5q",
  "key14": "5MVjD4Cng6Epw84vpzoqehZwdqETMF9v5xPc8hR3r8W7ukFfhRPY5SLcG8RCCyohHfWhX3E3k7HXdjBT5Aq7tfK5",
  "key15": "22jiQKLVoc44XNFvDnYoxC9RYwGR5WREuSThJeGbUQpTVksP6zurjJvLQCQJtnyrrock5LmCC2XFVhKf2uUeDtCt",
  "key16": "5Tqj6DNpAzuVvHf4oaYvjwrmdjxBSdgUqn3H8Sa297sRuA5RJZCZKY7BDom9JLtQDfzKid2NYshXGypv7a7XH1B6",
  "key17": "HfZGK4W1gvLT8FPT1X25yty112G5bVio2enNJPfryJ36tDhCcKRGmU8SqTGkwfyhyKCXcAvq5pVw581mWkxp4Tf",
  "key18": "3Ea3GTfSb5Fwv9jVb2rYoUTbFDMgwSVHqZd4nd7YBdj3gzrbhYNiBfkwGgTmdFJKCJDsoqx1CK5A7P2TU2qtwtC",
  "key19": "3dPgJDjzNeJ2xNf6MMS4vjYeKNZZVzSGKuuSGmmaez54txs92ndzuWSWLQodTNvQHRn1sQytLz3dy1yphf8nCaNd",
  "key20": "2AtG24DW2zYy9dPeUeVAzpTsfHrY7YoNsAZNAwy8P6eJQ8JFddsCkJE9bi8oKKi6Zuu8LWSLoV23X2TrrZyBj3hU",
  "key21": "2HgZbTGeyVBZgAEXbQkv7rxeLxw8uU8StbF4AAnuDae6XjtoBXBAZU2cotuPTR9D556jLsdQbRjxFAUrCbPWBy2k",
  "key22": "3exAUfUsLaa2Exg4tZA3PbRAoo69Pui2NUPahMwVd6rQpRmsupjaprjdk9F7EJFEf9HuVdKziqUAjZCi3ikJcVn6",
  "key23": "5RQUTxqPACVzWtvxqV58oiMwVGw1ayLyu16SsgYh9rfgPorG2zYPbtKadtHJN2uwhJNnTVgAPTG6fwh1S5dchzGD",
  "key24": "498fYspsPBnmmN8XCpi4Mc3rLkyze9FtgDB8CbczMHV21rjnhuA3L7sRU1dnZjLUCNDjdmGUqdaYjC3oqdKDEnnd",
  "key25": "5WdG1rYZFvvcLS8eddiGbc9XEFPTVaEip7dUv6AACyVNQUqaaXpzTggdse8Q7c4BWjTgMpEQvYajKyhKHDUvgVRQ",
  "key26": "4C7c7m47PZ1WERVLb2GUxg12ffJdtPZ8SdqaUn15cAZT9M4HbBjRuWpbnkhQRxjSR2E9YV7HMptVhc6HnLhju7RX",
  "key27": "3Wonw7xcccFjzsMiLcw7ezxmLG3S8tGhPbxRPaU1YXVT82agyncrLmtxfTWkqnxabncvDTQ6F5URZcxZKq8STPtU",
  "key28": "4mvKMK2JmJxPECX9hYGjxj44jNgyV5iwKxdU3xGfe7gS6HAJFjfLfA7CHL3R2qk98bMNk6HUPC88PCsGE6trMa9K",
  "key29": "mBSv7THJ7sh3eu78ZTK9dwMjkCE5AHuEdf9VrbkN9jNG8rvj5kNwrVGppMVAEyv9agrU3mpnrCZw9U9Bmtfqg3m",
  "key30": "3EbGgQ1EZJXo3JjgZhE5pMJ76rMVh2sq6F2z7F2HSK1w4dbaaEi6Qu3D3zmXB6PirGTfWU6PLm322rb7vPv1Gjxv",
  "key31": "4uGa7HAPXbKCuos2pknad9FCqzi5RLSDFQry5k8ybzJ82n5ZvP83vi3miMWdStifxport2kPKtL9cqz8WPW2zB57",
  "key32": "4ryd77Qfx1x34f6JENwgQ7oQwbAYhVmZdSJ3cpNTdJA9WmuWdXDx8T8c2tPEfEEha3kMdAkpmZWYWWheJZqHpgpc",
  "key33": "4WroETbGYyvqDH3ktoFnJ6AgnoM5H9qnHVw1NYEKNer8DxujFVe2oUxgwkq5sCGTQJiU5R2zQQoHVTUpmXiUXPsx",
  "key34": "3HgdB5PYxKQqSrpQ3Qaksyvywuvptg5YWrHtRWcQnVgGtoYNrfGyXRYCuxmiEeUrtByMtEcrkj5nLf9dDRxQ3spk",
  "key35": "jpbV7t74V2ji8sZ1PhGdqd4YSaj86YuYW1EJfDb2op2kidzppxrkSYzFpuJ5ndsxr1Kyp8kRhH75858JbFycNmt",
  "key36": "4Ak7iDxxizhs7NQxRbd2fdY3wHjH1ra2vnaZwnHxneP4Ui6uizg25S9JMAx8rTniGJJ5mYD3SfKTfaSmAbKzgutR",
  "key37": "4t1ZTGA7LTbwbmPksWrNUfx4qaww7CkY2CLMY2hqFvPguCop6yZNumbkS3y46feqs2XAuHNfV8R1Nnii3JDEkr2C",
  "key38": "2gCKur5naKkhbhAVViJywnAwKhcoqb5tM5Y6mRqPcfLbumvuVjgyHfu8ozYpYVbVGkveVGPrL7ELTC1yiNJmhmwb",
  "key39": "TwdKk1FTLwBbbNTmFkwoepNgXwmGHwDH3fi9tL2tmukxNBzPvU6hdM556kHrFiqHYp2JJChFa1N6ot4ZP88C8XA",
  "key40": "2rLyr6dYUSeHxQULFifp8g8qGJmZSU2gQ5CyPFifQEcjMA1vd8bPM8t9RsYeGnucjVR1cs7aHb92M6M1J68iCozt",
  "key41": "3yTKozf4HPKgrScfetR2AELTgTJjvnDaL3sb2zroSyfSQFGtrVo596EHXmnHT2M2on2NPWBwCXbbsi72443Ts1JY",
  "key42": "54NDVexvZ8xtPDgYDbrZFM4KbAYnU6GkEHnz28xcrMX9emnk1Fb696xFL2Rh4XXug3ryJzEF3ubEVPKu83WuBeaG",
  "key43": "4RcT3m9VVMinVzacJanGGkPW3XbW59gh5jyqfv7fqcVc7E4AqhhfM3LiY8otqa49UtvRTaUQBeq7q6zfcu3cs8W1"
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
