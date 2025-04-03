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
    "RLbtXi4kmnxHmHjfob4LTNpN6y5sCu2buBwdQGaALZuBQVC5M7qDY2h6B5NLcQax3Ni3AJXsCXJA4cqNmFvCJRx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ws8gJsRu1THiRHsSdhNXWdjzUmsNRbwrCvu2pKXrsRRMKZsVohXZYn8U9ZXL4NayAjJp39fYd9C1G8Ay71DWXpr",
  "key1": "2s2jyc4nFXX594LcyUk3Jv7qieFq5r4AJtYSokEvis7ssmaSEhKgg362GRLyuQAxdXTkjND9cb4LUQfigmL3KySs",
  "key2": "hxvPhrpcvjZCy4Yx83HvrapQRKdiYgHwXq4zLiLGT7W2mFJbnUpoZdiLSASMRc8LHeuh8y4hCByecwcPCLFFgni",
  "key3": "3WqUKU71NxjdSMsjUgY87CZCTdcwX3vMhdAZGkqK9yX2QJtA8GND9H4dna7zX7CUuhM1eub9Mmk12a3auMP7pzYZ",
  "key4": "5pvYA5iN96kdRpfNRSUPyZ5W8aWMJHPLUnEek9CNgGdEuBgcTiiMt1aDb12mjWRe7H38Uu3aEFB32Fi339PQ2n9y",
  "key5": "2Dwh9WorK6pXXVEVwbiDnZmYfZXBddZfaEpPGkzWmW1QxSJdk4osrEmkBuXxdi4ceZ2UuNxqb2aNSTYQhsMtDTfL",
  "key6": "3AVqAE1UHCHFRNY6MNuBTPrs9hCeEi5Hwq4gyc2kWCLH85E2wDw4WhZECApLHvhQbnvUyGjCriPqUSmyiZuk3j1m",
  "key7": "Rik7q8okN5cewL1wumBWXQQEfitVDL5jg7VCuHibzp684KMinXrF2kTd9thLuMLaC41nQT2LCAmW4PGW2GX1aqg",
  "key8": "4twmiJ9SAv7RHdwvhmuoRdprVqZ2pQydKmZ9pvJb3oBJDEcrRijztVQgxCVaYyExKNrxrtTbBGGQDjYDj1UKwVN4",
  "key9": "qxMXAcbgHu8ZkF8FhuEicxA698VoW7cy2DYV1aMwVLUswPqdwxVqTp8XfKR8WB2HWj34HAx3MeY4qAQSJdq92rf",
  "key10": "2iN5XU1uK7LJkEqEm1Ay5ByPw7QZ52P6miRd6Ghp8nQDh7dPzQxiHhD9ZAMd68RC6VaKmJNYevineQpgnbePCBZs",
  "key11": "3bY5NEgtDrc9hVzDw2DPBoWM7KUfa3iqYeAtozPHssGPWB33Znt7EnwzDphRaytesweBf2hXNDKnGPuGbxoMmkuZ",
  "key12": "27H8EQnxmsMmhREKnd1LYGPnUWYCETZbHRARWfKEKmbKLAQiJKNNdDW7PFBu8zmUXff4vKkDhk2L48sAqjDSRJN3",
  "key13": "5DWkyYsmyMteXT1eZ5BzDKJ7fHYFiWwmc4C9hwDSuwFBe8Nb3J9kqoJXEgV2rbEAFRjpPPKqfJcdcjgusmLfPW7u",
  "key14": "5QNfMoqdsRdnXJjid9GPrdn8xKkCwk4Dp2d1e3ojwQS16edwAxXo54yC2hEKmQ8vBsttA2o1EgmXDw4DPzvrrXGu",
  "key15": "4yMrDrwERXMC9Br84ah4T4rVUfvTyXxuWxfnYbipTGBrnFe96xk1xf3CohHBYH74AfLQYCSN3mkEqAByZo5uk2Yt",
  "key16": "4omCaYMszaGe2wM8SkJHi6EzUHErQzxs227x4Jy5U9jnpmGNQDV4VT2nwT26V9cqM1okCdigWgqfn9MKRgUqpxz6",
  "key17": "3mTMpyKiLfMzRTrxEgY8KszeDDe4nu5NyHXUdyZK3hWQyR5MNrSyQ1nRFtn9FL3QeMUeiTLcYKeQgzmvWqWrNGCu",
  "key18": "7Mn3JSLwtG7EbgS7vwksKu9Ee8MfMp41RKHR6Ntuu3p26hXiC2ZczJMqdewNzdwg8g6tGyK6MdJPyMymL79URcF",
  "key19": "5Z3M3F4XE6Bgtf1KackDzs2oYNZRwyG6NJSRPeMmGP7f2GqVDbZfKu6tC8xScQuvKXL58VqD9Zc99He96oge4L4s",
  "key20": "5wXNw52zQ5sMxMPPD9FtkfXG7GT3gVWR6dRZ2t49G6LKDc3bYHeJMmUsoHMixf7bXkmwSJqeYaodiZQ1a4geDFf2",
  "key21": "2PbxTdZGHTQ3bZRwVXkV9mo2evDTiQfNQfYP8FCimWGEo7VKAT1i4xg8ftqNMNd5kyhdzeB5rtUdsBWvM4Mbf9YC",
  "key22": "3axEmwN718y5nazwmRfL8Wjjs59Yjrq41tPTtpHcLXvBoERuTR5ahVFLP22mA2Cg73eMybrzfcsR3r89PqY1vaC4",
  "key23": "2j7yurKDiHBTPcBZMLu4ZC1codMq91oyw6qXz4zAUD7uoP4ZrgvbxYnmhCGQQx14r3FVqdJh6PwQfV3obdCg5XTo",
  "key24": "4RdB8NsQ5A8zX45JZ8CuaAv3rujBz8K7N5xhxf5WPjtcwpzypKiG5SukhjA4fFsUV3QCQYk3kincF8HHmKtyWS2M",
  "key25": "5kRWKG11chgwNQQ6SRwV1MkX8gTi3W7cHH15VPykDF6fF2YYqw7f4Rmniqnv7gkAPVNw6LSbPaTh5NzmVrpvbwop",
  "key26": "2NbZrw7JS8zhaweiES7jmHfRMm6rQLsFMgYEn573rRuug713aQCQJWhBSiPEsQBzUhUnWGzxYcTfaEePqJLAL6QQ",
  "key27": "4ybQJD6yg2jxP671rEZ4mx14jaKQfm8pjkEwwvNncho3RwnFTwRhBk4Vpe8qqScDKZpnYKoYgQC3AWRPzxPKzUEy",
  "key28": "WMbdPi9t9ygdjuizqGE8wjtUouUKRQ98QELjhuZCiq6G8Y7xuVxgAQVtR7KPxCBfr63EgoCCFD9qenuHbA4wK21",
  "key29": "kCZjwbwdVaCmEXELuL8RNm2ZbWjLSV2pzpDpPr9tk4XmYs8NPoeFkxakwsao9829rCzXTbdsT7e6KEVWfKprFMi",
  "key30": "3s7naztTFv1kcG1ppsFjKa6yQXXAg3VSWCQmMfGyt1wXEqn1ESvDCQ3EeNon6cBPfdLBHsfagX2S1Unb4AVEDeUL",
  "key31": "2sfhmnXPaE1fffsmoZDXUKzMNu6wwn17ya8XXBaH4XdTDb3HuLHqRwEhuhiabxujWRtHcLQuWZveF6eburr7LRrz",
  "key32": "5pUdgpW3EXqQzcV4sJGxStEKHKXRj9unaVZtcEsWfFA1Lqu6jH9WVadeGy22cVbqXaLticNMH3DaTHZm2J6vmfiJ",
  "key33": "3gKF2PVK8cedSow3uwoAygvkczFajLBg96TZTa4JJKUWPVojW5iGbuBPN11mtqM5EVuWA1brUVnz25vgfn9i2EsN",
  "key34": "5Re1pzoRyCVh8UHKuw3dDCCaFo4XrDCK59GHs1wH9WgrfpJFgdgGFohc9bqQABFnxx79vtJ1r8wzMyyk1McZ3dBs",
  "key35": "2GZPe5C8YzHp3oVunRbZ4yMJF83sxTPYS8hfevjCnPqA8wxzgtVEW6Fyv1nNfn6PH2z33eAAN5wmYJJpBHqPri7J",
  "key36": "3za2cWLN27dPQqP4miAZnMudPgXfGC8QCyAu3NWpTQ6UgBqqiR2dFNYYne99YvtDo8hPdPoRkvFXJzMhSiJSEWbQ",
  "key37": "24hKtB3fkRNRMpKmB4ozkXyDV6juPJM11hxtv1JL6dY4JBJSJvwYdMp1dKGjtoZcsXWKfVoNFYmSRDHGa8MRqeiE",
  "key38": "5FotJ1Kfv5oGCBhttpDJBGnNfXMnXrQQRk9ZgBD9CakHm8tBsgdgJBvkzbNz4FEzPY7NoPgzfgb2uAw7wcP6dbJ9",
  "key39": "4XmVaxsGaZ4N4pG47VExsR2EkT43H2gpgrr4RZVQekFJxapmY92Cs3YCym4CCXHyBCFLudbPVmgJ5BKeC8mrZy44"
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
