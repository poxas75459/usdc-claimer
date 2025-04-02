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
    "3ci2EzL7J9ihiPJd4hC7AYiYWB6nJ295fdPWBK75mWeQqQgY8wUP9Yzc8NWzT9PkVZHzJThVg4hJk4ssizkByPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hfa5wcmwkrxy3ZUF3ZyssyyVWdSKQ6h6LBKYeCHCgdzs8TEKM6Mgo12PnnDxmro7A1xPqaXYRre7K6bxoj4t4FZ",
  "key1": "4grSWss2QyH3Zx9CJnE8EiRfuwSRrd8PesKWijYQLrmmQZTqb6mPn99tPTyQjyC4kmPZKNfjTvYVcfDqhNaVy2RW",
  "key2": "5reGQRBa4UmmibNxjtzL2494pEb483SUKakvwkmYWDxex11PsVcZi4ttVs5YoABQNvmXhxjUR5amKFzGp3AuqeNc",
  "key3": "5SUksABzriJDH18X4UkW523jTZBTxRs6znfYptAiupdc8vBbajdh8NhNKvCPcaYSVNuhm2yhmjFu9ti93tGjN2FN",
  "key4": "2Dc16QLACyicwTBvrb9aGyLZ4KFP3UNKHq23pGwKF6srfoptfbspGtSFZ7PkCJ4N5iuh6GPBE28BBaJTkk8jdRpH",
  "key5": "4e9pbdvw3pkNFfdE9nLyRg4Udd5cbXyiFeRFnADGmBPfQvidHyQMAyrPbPibM5cGGPp1PnUpKRSim5KUNbEMawYN",
  "key6": "3hWkmaCBn69pAch7srp9B5V9yK9pC38Fb2oD9qJERP3Y4fjgnYGCGgx2CmmRnzPHeetEETDhHsqLTrGiTFPESE9e",
  "key7": "5PBH83aBCGwMYEgoWUN3a54xx9qdpRMjpWKD4YyJfd3BQWZtRreRJGBYGGjuNj7AkWdm7MvEPUxyupeLuYTpfM9F",
  "key8": "KVeVume9Vq5kE4yjpykt7Fp43s7YsfAvFFqDfZryx98QmpgwWbTFWrZNzPaqTPZgiyuJ3BowKxdCJjgvabhddkD",
  "key9": "TMgkfbjUNvpd8g1ihmWB4BgZtBZfu2GkEg6TQ8gggmBd7XYCtiLZpGZCgLHxzWm8SA9yM1P6pyakQ3waPde9ihD",
  "key10": "31XbgahaRmajT9aTpGqiJ4G8g7fVL8xR9hwArZbJ4qfHEg8mfugQYg3Fa4cQqjfT4MiosAHTaV3PTJFoWa9hojqP",
  "key11": "5G82eariWKJyNAn54XQCZfCjyhSBDobVw6TJeLk1UicJ3CaXz8vQkRbfVoc9jdgW1XzYwYhYwEkS1GGCYXGCXP76",
  "key12": "9YiL97hQzfN8Z37KQpeZ8grjC3r5A191nUoxypgSPx4BqSppqDvBaCZGRdFZgPnvLhpAMxmUDEoS2ff9FN8cfna",
  "key13": "5NkEA8NYiB5B7CG9TJpG8cMUJNPUZSsu1VWGDpfzT4VSZaQLAYKxtfS8i7rdAwvFDRhn2VwQ15GmzMp621D98iuz",
  "key14": "4nNBEzHvq2Qi6gymZHDiXX2YESxzTPTwyNJtHqYjjg5xnVDBEeVAnbAwKDQME4gESn12VWNKFEXSPbs4vgXonGfq",
  "key15": "YqaTbrv8kPfs7aztnm8iCrsZYPj8TqasmiJP62sGec9BVp5Fg5Cwy4gV2qPUhEfq22aXtqe5ULULNNxdXxrafii",
  "key16": "2bjAneHeuxZVkeJyZkEEPFUAqA7YFvBXGC21iTA8UxKb1cYsSQEetvVT3V26UFWZAB5b3NEYejWEkbLEfddu4bGa",
  "key17": "4VqiB7DHN8AuFVw1AhY2bVZTULPUZEtsoFDQW7FNCySmoEYxed3iLFgSWsrcyChaeusazNfhguwfQnznEF3nD8nv",
  "key18": "awX8wK7Usf1HpT5DWcynHdbwguwnnm45VR4gPZSCFdnmSuT48Kg5hzvNLANRUK7tSvPADfKoKh9uA8wPp7rdcVx",
  "key19": "B28HeC1cUBTbpoH2y1ZLjeSTTje5WC2NJi9idD3fwDCZuB923A9j8q5vKgqaDqWfBDo1XHNriUqwohgJvgVMUiW",
  "key20": "2n2gvN5cpdsBA6ZA2HEnQofPsnC2kgEAyjfk5fo3kVi4hbEWNJh2FDcVcDnHj1X89nhFmS1ejL7PfsbbaepU2yVY",
  "key21": "2zXbRzCP9fku19kdZBWWN7N4tCeZMC4KERjpUd5Et1wB9QcxtjTeC6CM9rzk6NnuDQGoLkVbHJQ93jKeS73ea1To",
  "key22": "4XJ3sTsdmskvWd36y2cSKY26A7pAyP6f1swiczhhxiRkw5b8BzLMyE2J8nWKKFQri4R1XWedJmmVHa2ZXtFypL6R",
  "key23": "2x3wbx2BQuwCMoN4sdqzzCVdmN1kunTycA2p2CSuw3TjGwZjzpy5mDAMBjm3f9mRoXGJTv3CUGgTPqLygobhsTe9",
  "key24": "x8wKkz6A1reh9ps63VSEP8XbDjTGFA3LHoykrYNup571rvFPN6cNne9TAXTaigDh26DVo1PM92FHg6yttNMsWdU",
  "key25": "4i1DVHHH46rLvq5freBHPx83xMvyAXJwBmMAUrBCbZFDWmUZLbCBL7Y2jy8uyPfHPJ1y38UnUkJ16QfQNRLU1DyG",
  "key26": "3raCo4uRkcjhwGMCnu8Md8g2S2ZFY9CsgEn6FbibKRy9P14fWnvKcDwhfGjvAV4xREdqf4AT85KqNyGXPnZBpdRv",
  "key27": "2DAuU2dNvGxNxcg7KAE7nieVvccjcge2dbdYYqRUWPTLC29PQg5BWoMHxK9nNEAs65GdNaY6iq1fEp6qJzaf9qQy",
  "key28": "Hhs4VCczy9FnQqeWwcRtkwBGexu1nuWarf4ybadhf6hgVuLgu1FsBnHbQ3MffaW4jJDFYja2JN4GQTrPedpCVCS",
  "key29": "2GA6idTpwJKXzH8EvqBZJdhLUiXzdV2MbpQwLGqnzFNuPeDM71Eyc7PajVeuLvY1DvtHeyfYz8GV5yvX1JywNBBJ",
  "key30": "2Ap2DV71GDPkdiBnsyCJfUZnTUrMQB6PYmRqrMJtNUSFpnp9baa2oddPZL7s2bedaDZGZty7Sitwfw4pGtNNSiGx",
  "key31": "aVzm778rz41YRhR9EBp4NhCmtY2qhcM2B1r1bZk9n1VQMjNXc1LGBsdVub5EwwzDV8F5viys443ocW9A6LbT3M1",
  "key32": "2LwWKjdpSRKALqVofsmPuWGVKFBUC7GxwsTzNW69erFpiPZygwqzwuZ92KnU5eS3HRRRd1mBuKg6ojM8Tkbx5kFP",
  "key33": "eXqikisXBwPAojBF5YUuo7Lby4GuWNAw3dtkrVMdx3KQ7qfqUZMBr9wBiN26qUWi4EM7seBfPs7iPEB3hqT1hy4",
  "key34": "i6u9jyiavW5wpy741Dw8bJqxW6cWFpNP1gkESSQ97Y1CLkugSBJscdeYcgBGR6GmmRn1feZqKPZDvAF7gYcEqRJ",
  "key35": "4cVfzvqN11G1hc46ShAXpJPEgYsGjNdqR5zgKsU6tjnTb6L3sZiKdF9Ew1GWvr4pwpKt3e9fubFuQrxkBhGuHW2t",
  "key36": "4VNZ2UZpfNHexB3dXYk6fNsYwGuX4QDGwZu4SrTJF6ak7aVn8ng1nz8X3EtTiV5ZmTfPVRoaYfA7CaH2hC14vbyX",
  "key37": "4fg8e3sxqbkqYjT6kHvhprcHpEPTCBnPzEztMfexbEtkiarsATPLtLS9zvxzeX8ukQoJQ2fiRf3TKd2W8oadk2dS",
  "key38": "2ifbkqrp3kkW1CmYby2VksgBYJrmcPGxXeWvGL2Tmu2YVNqeTdyYdN3atWUPquS5HnLKxymw15bQ82DJi5u9we25",
  "key39": "4ru3Ra15g9JJt6j7LzLk1Ae2ydLSEC5d42ej9RWyRBE9ryULECEBaGdyjT4QfMxW2fm4yQ3jtXBPonVz6aYZ3E7R",
  "key40": "2Xo7eUrtzbbotdgAjrLJogf7x4WNT7B1GjLDEaNyg4rGCRMyMfM46b8ZLCUtsurfp9ymXM8FwvBqDb6Bv3kzwLQq",
  "key41": "LzyKQdreHMcZt37VPnLh8Qx9L1jap6DBTgc6DKwN8HmVZBQQ9Kgaa5HokDrrKCAa1hto5wmLu7BmhPBgqaLjASX",
  "key42": "2Z4tKxUiQZs5XEjfHnw8Y4Sns6NTgcKdK9gS9KNKb7ZgGLaWqTFqB6h5C8m8dNeatVC7Ec5Dor3qjSX97AGukwGw",
  "key43": "3dskMGW9ZkbYDqx4x9ZT1Ym1u6LrU9KjUcFAwGV1benFQ8RiPG6FJe36Rjbo6WqHkAoqzqDY4MAtbMcSid6pkdcr",
  "key44": "3btWKfPosHEoJ3HhAKyTrmQqQSfnNnm5Nmnki93S9oMAPejVqcefzppfD1sNuF7Xtqm3bKxxfmmzM1chBi8ct4E3"
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
