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
    "2HX41vLuseHxx7dsbZhxvrMEXxrr4pDMbp3NSocwqp1WmxkHMzr1b1Rn3CRAg4AahPu3ncskMA5tRjDskmfuuZqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GxVTdEWAoa6DSKsxsGD9315tBAYixDqoKTc86GgCprPhW2GNY1caZSyU4bnZfJDJU65Y3HC5hhNdJegHNsVvtFK",
  "key1": "5ddj9bcWtdpp2U4ByF6n5wHJAtcHcF6BRLAtNtTv8nSA57wRX2g2WBdJsQ1uNt2dFAk6GiaHtCa1dAJsnfphsbM9",
  "key2": "4zQADgjqQCZzfmenucHyyyrhALvo91va1qP93ZAWD6h6no2KUW5SUZcgQEMPyYbubKY3iMiATvYrwGjJNEvPK6xX",
  "key3": "5vPo9RkJWV5G1ZiMnd9dQnew8TrRJze3vFXiQCyBS6YUuoSr7aciJvWx4ZzHj7r1XEwpwzT6fyP7uWZXPxzHqeBF",
  "key4": "41LM5umRU8okUKfFwzHP1sV9p7UdqDF3teNMkZGLg7Vw1zmWMhJDFuKtRXgFHsyCYb8xYsxb2NTrNuqaUwLVxw6r",
  "key5": "61XxjsggS4xsnx4CbCTsQJ993YPAgDmARVNZcdLZHdLEC8yGLBC9hT8NVccAtzobYj6Fpswrz3euXiMycpDjAjaK",
  "key6": "3XD7S6cNNcLjci1kq3FaEYzzs7korJRuMYMJtQ49aVzztKevpECZwuSjqTCsaVjbN3WLmUocHjXgHQ5otVQsKrHE",
  "key7": "5NS4frYbCpkcnE1VMxn3HHbf1igLbin8Zq6j3NH6tMU3YgHirgMD9NZMkMSrvwN2Uu1RHfRHNDmgAFggUY9GwgKq",
  "key8": "2Mdzd9ydV5NYbRBe35bCof4FSnxj7JrNZAyxG6F9vxHyHzqdoi7tbaiCU2uy9mGGAkcB1ZvgMpYVHEXkAoe6XnF6",
  "key9": "5PbhEfq72dkqB6ExQiZkVmQkA1sQBtxxWcvsXYf1YKrtvrJeBPLz7BR61Fk1yqq9wg1iY1X1jqD1F78kHLvoSoUu",
  "key10": "2rAVWrN4aEwCrjxLHfteaT5JzAx8czxW9imW67GZ9YtWvuSmJJy6uahe8gcC42eUaALFfLfQzNn9hvevt51gqh8Q",
  "key11": "3B5yPBWAfXQKfjg2mA1KCtxQg1bPnhiVew1mfeusVw4TiDaBHcA8dcXK244XCHmmiZgtyAsnA269Vwb1BSLzZWtu",
  "key12": "3ZL44iR8dP5opzhjc9Pejv8ruVemxbu6EHD2C1YjVYqeSjR2XtsdcvRT6LK4fgg8tuvUy3gi2o6UjfGDKSxzhUnp",
  "key13": "33ceP7FRZqQoQXQHowL2VDg1epPZnvc5Ms3WVbVPvvRaD4zu8uzWFWvgtn6CGNRA7TejHE8n69vouNNw7qH1iy6D",
  "key14": "V5bRknSKVk4mwmjtsfxpP4VV7ztWy5RNJZBMCyzBexb1SD1Rhaz5tZCni5wbv5URAbY5Cr2nZiL88uytMosmBQc",
  "key15": "4K4vwtu5EJVxTS5gpZ1fN44GT7g7yUmQ2gizsA3z9JwSfpRxNJvBShaZ6SUkjUPmzT7H2BJhVkCi8hPH3bBS2k58",
  "key16": "boe9EB3Jzj8efWjkT54JCqZxUfFxPAdK85sqKehM7NRwAQLR4mRpfFq6ccC1Ac1qWTPnDEwMCnURqqamQoHA74P",
  "key17": "3x3HAdDPy642zTC2U75syyEjg5Nd8g3ieDjvq6dRdxYAQmLJUuEqdJRX7Afwpb5DzY3szej48zdnZD36SK2KXe8j",
  "key18": "4wqGsLDfhvnRapy9sA1X9MXxFhxqkMnZFG6Qpyc2izSotZNAGteaJwaG1kTv4QP8kqVUw6c6GyDdgrAd1zAsieUV",
  "key19": "4a3REGNiKGFLx1yAhUGC5wUDYbRJk3iGT6tZd2bkbDyGVKgxbAtejFhMdgnSWhPnCcsLAUyYK9GfKkBsbTM6WEGU",
  "key20": "3DTEPjBASPWHyUHgjtDJRNUtx8mVA6wdojhCaSRyp8qMRg6qHNj34UNrTwh1zdfA1p5qpmXq4RRTQoc5i6qvTtgT",
  "key21": "5C2Jfqytct6ZuDS8qS4yXFUJamJRPSuT8XvVqe5Kny3eLnmMErP4LJxZdzjSsESJtfWRFTk1xdPLShFTnARdUW1f",
  "key22": "3LY7cf9Xh8Ez4UaMUdePXTMnLYeSbUyQwGWp7cm3bYAoUNCCoHC7TvU6NivEF3jiayWeyfBJGcUzdwhRAhwGwrpT",
  "key23": "26iNqYT91BaQEeu8MTRVqeorTUuataQNSqAUmNjYK1DMED5JQBgzsYXEE7ywcNHLvv7Ugw64ke2DdzXS3hdsxqH6",
  "key24": "4zZmLDjaMusC33g5MRWnPxm3vkGVfg9UnPaaBqFom1rbsRvLu2JBTKBYjtPQ5vyPzmAMzjiDCcYk8Viny2LF4QfQ",
  "key25": "63VwGQjm5RbaqZGBr7nnH5UHjia2D7jKwyL6FvyJLcQ9qqc1GGcsS5jdDLB3V7SJi3sG8bkhxQj4CuLEHrh1jBpG",
  "key26": "4C1dt5jwq8ri7Y7zUcxDdaSLsuerPnocxgAmeqdENyhkeWQMQXceWWcJbx9crQGDUCMu8RsUxNsPowiQ8bAiNZDB",
  "key27": "2mNUeWNBd3RrksnvEB9grVQBMWoyZDrsQ3xRdLinmekBXdcJbJGxMDxh7wB1W1PP4MqGcA6PCZ661U3dAWvMVxBN",
  "key28": "3ZUSEHu7n9qJ8YmU7oW1TNBoUE2rrueMCKwUyjggfMjzurKaZJTU84KanzAhCpWg34a2wpL3SfhwxoRWtFNwBU1e",
  "key29": "5VDozFVDSzYSP8ozadRoHHvwJNUrfPRCDQcTUaX62YgnjDGsiW87KL4MfPShsgRDehKKJKmWVt5FxjoC1KCuGvdV",
  "key30": "GkVh67WDrpuo52j2FudvQJjmE7qQxz4t1dvPuZKzMsA2P4JzmUo4aewKTLfW6jX8kNVvAPad3yjaiybh3xybGob",
  "key31": "5cEaQcGgKHsRqWeGH274JABNpEDogzotbjaeDD2H4LH1b68AGtvtud9gkqbwbdZ8Hx59G9abuU9bLwyzy3pmyGYk",
  "key32": "K1FNZehEiYoJKepZKa8MUHjSmDiH7uD8ddwfZShdrLeu8vgaqGL2Y6DJtWD9GAjvmxPiDbmTP8vU4GyzBZV33zp",
  "key33": "54sNRC4LaXVkFarWN7gmBtPWNUv3VmJMd9RRBbdCFfuXhRoMQMDFFcnYvtngtFjC8udJAc7MDDsBUtbW4M2Dv77S",
  "key34": "4H5ReexAcZBKSJRP4R9dXM1V3HHeHana4rPXZ2JkLQoJQSjhFEhNXcfxGqC2XY5YWt569NnerTkoUXe6tjZ2KTZh",
  "key35": "3A7mqZ5cnBvAk7bPCrEh22b53GkTFsBrrjoDgMGfZHnpx14EVxC4PD2iozP7PkKuoBfDP2t88yaywZW5C9nQU6zT",
  "key36": "3wSfsCTej4NEeWJJSjJUJDbQj4aWmNb1Kte6BcjD71MtLYjvMx7J7crrXVT5Z7XL7Xw3GNT4o4s7GFy1pfCCHkt1",
  "key37": "3AucTbuQeg9n3pFgGHpvn9yi1d9gJP6Jynsgmi4MEawsanKWiJoAYkm3gwzk9byNjWP94h963Z8DUyCdjfSSfJFT",
  "key38": "33YDSgssNvhbskjtDDC7A8ReXudpFts3jXG1n347dZkp9P6kPwuZdKtJYmKSGiAMHgLAdwnvhYgNH4qNnkYaufEF",
  "key39": "2jiEAM9ir3emF44JqHCJy5fJpcUvgN11jRCRSZAMSyFUu6Vzkd88PpcLfqDxehtzWk1ExKBBdxrYghYWtDzoF5QV",
  "key40": "4y4t8GBjR5E8W2K88cm2hQPHGUg8cvReQYLvFHZCfp7bK1e1GJD8DvhvKcyJLpDQGdM77ZRMr6aaBG6Az3ukjPUZ",
  "key41": "5RJi98fauXXPEVf98cGekcYPDeWc1v7jPCGKc5oR98mecLfrESSuJTut46qkyaFiXZgGf41xovUWy9Y5HUkkYfeq",
  "key42": "2Gt21ZmxaLtB5BeDSU5PQimP2YeTEwG2icj8tyLJ6Q7wMAVSV4fvUTNsg3459K3vGKXBfAnzr7jRkoDwNUJ7V2dt",
  "key43": "4M6vc2tvcXxznqesp9BZu1wKbqyrtm2T9WgCAtSTqmtbGknkXbjm6RkPMGsyoqCRHT4bFbvex1cRxSU2xXfqUZCq",
  "key44": "42huUnhFPYpvBFCaJUT2rV1qiopBbeu2eaC6KFyWGPEPteVhA74U5k4mWy7k2rQgz18RCkH5k7dxnHzGXb3UHqWh",
  "key45": "5Qmq964horsbqbhTFHmsS1BCbZxeChiTANo3kdFZ8RhEpQz94jtUY5FDeNjsnCpH9YGsufmBrQ5YmJjd2VKmwfPp",
  "key46": "23TcpgwS7RwgaBZb9bEjsJFM98BJPdfL2maYDFBFnMnhr8Ci15hu7oqAoeHRA8EmLRQmuiHhi1TbKSyNmYtNDkx8",
  "key47": "37R3j8huxgTGpgspPKR413Ktyze4aSZRoLeuZ5g1XJPu64qAZub5KywDUktuirWww26txvZtEU6AL5W84aJm5e5Z"
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
