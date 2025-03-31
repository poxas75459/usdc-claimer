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
    "3rFoNc2SdMqpet3DW9VUKRjkRFLZabs5WG3zWrAv3B33PT6GAsYU9w2V3mmfSGwb6QvHSfVAEFsmh4pGY9WJaDVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vDwxkGk2MhUU8b74jhsYzmCGsLAf89kgjv6utxaupsv7PQyp4QY5z2djgZdtBiNa4ZGV9VDzLWtmBUmQwD1R7vk",
  "key1": "sNY7V29HC5841vvLuGTLmkws16SKedJTDC17Y1nLsZzr6kkhojvVt29P9VVypc5fG4bTXVGn3qCkAEG13ngjy9n",
  "key2": "3GpH8bEhpM8bBnHHzLktT8h4uXgJHEP4KGbx7gwVRFZarQPhMvG3aM185u6z3xfFyX2UG3yWJX3tPEhRjGjWopz6",
  "key3": "3qqC1T5Y4rSvyFUoLxokTay9H7kvizRBiaytQtWu3ZYvtpQvpxopmg2mjJCDnxL8CP4YX31oaPffCcNW49Vwd1Hs",
  "key4": "3hBcTkhdh5ZjoVPYFgFq7GvMVBLakYCPWYGSrW2f3TnQJBgN4hGGz867fTrUy4jXcHvBRFPt2gxBdugLRL8H9srr",
  "key5": "J6dejPCXNzU1XgzEGFiemMB6wcnZQahuzYkTYXSJTZe7uE9aXZbfGRwKASBKe8FC6ZgbrKwRw4Hyc61yxgx6ik3",
  "key6": "4bmEePejPVRDq15RwAaZjkaWh5uk7zK1Ab5aYYNV1Cts3dAbEt11PQk2DMMFKGWfQ6EoqTL9KkU3Pg2x3JthjwQD",
  "key7": "2acYqFyqJX2oPLaBe4Sn5e4PnHPz1egezL5Mzd7W4wLkS8EnJz3humqFFrj4mvzFBiR1ESpERF8sjd9FKr15zRQw",
  "key8": "4amiMn4VSvbEXekGzAxgPJpzD9TEDVDXbpn21WexJYX49qzhjnsUztF9BkG1x36VQNzfwE9MUZe9B5JWUyQX618v",
  "key9": "5Xst8qUMM7E5ocK8zrjF15vDnrKSCTVKJM7vESymixewFE7HKLb1r4frkZKjTQSxgy34tAb8m1RcCQBvaM5fTqzZ",
  "key10": "4FzaTq9uj5LweG4GFAyjKw8ABBi1mVdBP7y8nk2kvJLPUgAoejGcQvs33Y86rzPaBiGChCtPvwPtGbHVjuRSrKPY",
  "key11": "2ZvmMWs8ipRzwjX3xj2GzMJFGiMNC8Rp8yEQBzZ5WUYUhzYHByYtbf2QpLjnUft52B3htGWMiU2sqrMfdYn7yCZe",
  "key12": "3gbgLvwASmezauEN4SQMnGxUf83AVSjsEppsvdZAXv9xx9F99Sd3zDx18pQnSGQUc7HxnrusjC1ReJic2kYmAGvh",
  "key13": "53q1VX1LkGjVesnuefNafRZcTUQKhVSaz9diptrqn3KcvMQjMTxxrFEp96CwLBxFXt2FG4LBY5v4r89eirjDj9gP",
  "key14": "5LRhXy8jBumbS6xn6fjSees6LMNHcEGQV5xC4ez2cTNA2WhcU8kSJzkg8DmA5DJT9qpxvKeiGucBMGECFvv6E7Q3",
  "key15": "3Mdy8ibuW3rXCM5BivBeTwuVvx1jN1fmdxUyMkhrbichnyboJ9YAsG7qjBHNoaRMssBgsCqaeegdxV68YnJw3qqz",
  "key16": "3UoSKnQ3BEpCANZwgdQdBUnPr66HzYhaQ4fWzKdgVFoyo484GUNDugCJRAjxw9uJjbvUPD1Y5WXSTQVcqFbeTJTW",
  "key17": "4bhzWMfAiMjezbrzC9v8VDVBcRpTrQNtfkM4ZJLUkad7xb8BxMWyYC8Z6AjooerwHVFD5eRxgAaVL1Dopnkme6Lr",
  "key18": "3MUS1Gu5mp9qSmefEwgh3ZmUXShb8KXRqGn7XsG4KgfxvuJw6KxNiQ3FcKfeewQosnPoLwBEQ3DgGz7KTmkzMNK9",
  "key19": "55gWJt67Cwbt5Lb8SQApoyLd1ww9yMrpMJ6rR75UGZPyZNoc8HsBEo8HXCDLF1SMsBHgUMYw5yydxhfqNyoZbg8T",
  "key20": "66fBn3KxBNp8k4C1GukzSYRrEqndJe9AN6MgcR5HS5eTpJpXkZgtWQzEi8sBgDjfPq2SHZKF8bzjF44fMauuqVno",
  "key21": "3UYHwjVKYQiqAHVKdMXtFXL9uMZvSVb2ZV1T7HZjYKv9yotaYAfLUGTRrpasutHqv848iVysRchHxQSMZtn6Ww7G",
  "key22": "4qFbY35UTaJkQ1Z9VAFShM1WyNrWt8Hbru2g1FxXFqicsp7iLt3X6ndSTJjLiNxwmJykjHsjxmu5YJxQcvKoni6n",
  "key23": "amG4rYSJundAuaA56tTdBSkkHL8eEUABGY1zJWi8DP3AtcXSMcNhBtSGX5m6B4mckFpv6A9VzLzACuPh8kniLXP",
  "key24": "51skeoowhwcdmEmN3YLc8Bo87vj6NUjvL2BSSsMsXGu2MWkwhtzFTMMrHxRPM7Bkmhhq2JRMXpMVSm5U9gR7nMU2",
  "key25": "g6K8J9r1rA2LyX5iDw4rVnR94BYjbdgqrm9MDDU9aW5QnNEFpKCihHJzx7T3ENukq9ZJ4Turct1gUHurMeVdBhL",
  "key26": "2P9aHzdzjMuDXzjyVwbdqTHuCorDpB9dRVecHfWVQhzLQ1zBhDVZnzFmCDHgZLkHGxaquTvfT5Z5DJJaUQUX66CQ",
  "key27": "2wJDYknkcnATEU6oQEYWVBiXRbgvvwjDCdmBqEnLqYaxHfdt8DdjAw72tAwUDCRQ5HC6Zu3532mfW4dbeS8ZYCsQ",
  "key28": "2MW2MfxoYb7nqhF1EsGnL2zEHJkM3BNeNPgk5PU4aauFYf9H6jVkfNHLkVTbAMydY3YSSNuqamAyQtap1cyri6Dv",
  "key29": "2kPsrxSif6usKoLwiKbdarX9MiEHXmFXZZBd9TYZRGfiwwGzw9ZMo9qca3iQsfT1QBukU6GAT6XYPMTJCBBiiYmV",
  "key30": "2gsVT8jTsjPM9aCxkxNDunAN6f5w6ocaZHzG88acUvBTuk81gSR8cERQ5uRtknguVCHFP7zRvB4gt3RFqrq2cDbA",
  "key31": "3F5sS2bbvbYurWuQPC2REbvA4wHNmY9U3qB6Vs2VXgCaKSxJ4XC6j3e8XPykwiYxu9wwUXNpv7Upc5ddHLF7m3bs",
  "key32": "2EFBQqzHvSDCfbZUP8wW5cHhDehiA1iRrqjZPMtTCc8oNKGnsxQ5HchHW6nQhVb9B4UoXsu1Jg17htxPbkkfJBq4",
  "key33": "4ytttnVJ5oACNMXtzW9MQiXCDs6DR8LQBuzum3gdsSYBQmw1jTAaoyWPRAD4ibQWG9zBAHwZ5DU5PzxLuU2DbXQ9",
  "key34": "4bpYhos28FuEHUT1xUoWguYLMv76y4Qr4TjKorh4K6APnY2n5ZaqBV3VAuTfTFVWmeW5hUGYjRGDxsYw6Xp3kebd",
  "key35": "5myZjH1kqp1MJsAJTB8jCLAqZHKMG9PyjhhLqMkhr9F48ek3Xeue4cJmN5UCsqhTcaqZcvaj13ck8tGnAqVVBmxJ",
  "key36": "4S4cwV9DcDqAwkt59XtER1Joq3TkatmccnemgUvFNfAXN4RMexVYsPEM8YNaX83V9zd27V7CsPf1ekrZbenZWCZ",
  "key37": "5KMKavX8C4ofzc6cHSRHCg1Fq6GtcWrM3faGm2VvcoYhevteN9qrLJmCFcNWxcwXpuVQqnaqKcs9UbVYHNpv82ZU",
  "key38": "3Dq9fBNW8ouE9LzsUhZfNMjfZr9xcVhxSR7z418mesA5yCvbwFtpz2ReNEHkYZozGsdZGvKhn2xqx2ChQiUF4BBp",
  "key39": "5ReLB1K9C1QRzmjDrnHHbwpA9eZfYGSYh3ji4LNY3wuW8L5EKpBMv9USQR8Gm6qFqS2mqQu1UopCA7qPvx5XqnZE",
  "key40": "4nxXAB9cPiCQyQodBESUyQLZyoVygqcY3vgrnTYNaPnPdQskSMG6DCW881ArGwZJWn8SDwPDihTg3WwVeXhpFzPF",
  "key41": "5pzMmRYmXMTKQatLbSrRTo8wjLKVxZ6Je9L1ustDWvBejRfxkmUccvuSjGznvh39a53LDaix3qtJZSpTeQg86iqp",
  "key42": "4SZsvPLkXKCjtcd4y1si4Ndufvn5husfKUVRLRvuC5DvJj18gvrjTTLh3RKRB1X5tr2yyyyPS5GG3iUHRwpwXTiD",
  "key43": "2tVxRSYvhQwJwkHJ4da2J8a2b9UJN9MZwdKfCrSSSdp3Wt7m1eKnbDvpAxw1iV8PUVC4LRNj5Gu4mofAiU3kgggy",
  "key44": "4Uw3J672cbCauQoq8HFd172BCu9q45gxgNCtrVtJjVc6NkVxBdQMtuWfQjphA5t2HroQnxyenYPh6AzaS8j4ps2Y",
  "key45": "4Za6hZ4AQvo1hUpgCP6YKJkWMdTySomSSWUXDbJuQrACjvATAKWWpwn3ZBBWtXFZxRwPVFnrR3k8oWX6rHpvY6ns",
  "key46": "2tdSSUbNZzvTAHW1LW872djVJcnqbRY8oTmGZHj25V6KkVvnzTW6Fvjond5bpbuAYhNyJepnLDMbabEWvBQTGdun"
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
