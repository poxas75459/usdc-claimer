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
    "5B5pjF8FTxvG8n93m9LrLaUFVccdwy5nQ2HezARFkBQX1tmwJgqhb2EbaXgntfqSKh43Z1XFoiRBs6WCY5TyBFAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c3juF8AT1rKuKaRRfg5bXMXqZWQzGCYFggzbLzH4c4aGCwjh4wkceMawjdK3kZtPG8Mn3FXVZxKKkSrFNCGgra7",
  "key1": "3HQFifLKNAm2Fms1HTZNS6wyuqWYTTB8D39T8ZDPLktfLddDbxXMkEfZCxoDFWUXjDdLZijCBiVjDhaCUKGvyr8W",
  "key2": "3Gkm42Y7eogfJqyjYjgvdx4amRopsH1uHBwkmAM4gmkdL7zLiXRoxc9EwX6zqvfiubJqV4NPBFd6FGvdbi4YFZJi",
  "key3": "2QjrtRVTFXhrL3kXCMVT856EX4uNjf83niGfgP7qxFEEyfXvXWBkkbnYywrpK72UCfJjFdmFdq8jh3TSVA5u2gCa",
  "key4": "2mpALfSejbWdmKoftVd7KYLZDQ3hLpJ3TQaKmcRzZxFJCbDadWcPVi2Tn5bn3oe2i9Kzqn6mdUPHYGx3u1FJZzd9",
  "key5": "3c8LGytbvUoqq3L22kTbZefyCiYdqax1BeFqbZgpFYq4fgaTpNhYw2vE31i6fjFigWMvwYTUg3df82a3fF6uKBza",
  "key6": "5tFgdiv1SwhGeMboSji6Ka89J5WytKB5FBDkjWcnmgViJ5DnHa6fwVb9g34iXsN5rJjpaJWwGYu9EVjZvo5vSqsT",
  "key7": "dnLDYavqc9dUksgae7H7xYzsdfXFjJJUnxFNCkWzBteTBCw1dF9hCLMvCRi9ZDZjsPj2Vy6TEuXFEnoaJZyMeka",
  "key8": "4Zs4FT7MiAFzWt19rDvhk4LTkqvCNNBwg23fPgXcwYMqPRRimUC22H7EzLuB1CRX2taEfjbNSWa4QtuRkgewq1dm",
  "key9": "4opphGMCtcohJXQkWavbyKBvopTjEtKgERNwKSJH5PKyLRuZ4sQNZ7g4jKmcCGt9rDPZ6fTheiqUFprNuwKX57NE",
  "key10": "odPX5C6b2ELrfhpfxJ4tUPRDfKJQXAtANrpc5GEPVczABTKoqJ4uVCuCLb4B8yGkRHSyw5MwweGVeHAsNExwtWp",
  "key11": "31PagBzHwqAp6W8z8baaUXYmy5ehPD5fXcjy7yXLNpYqJSn7Pa2bMNCXGNghZmJf5UF9VHmzteNWEQzYF2yvXjPE",
  "key12": "j6wdjhypAY9z8u8NLbJcS5EBThr5tuwyj7Vk9fgUaRJWczygmRdDsXfNnL5DwLnhxkj42v4qW6aKJk1mw9K27Kd",
  "key13": "2n7zRLx5ySE67CPvZqjURgEAPYuuz5s1vEJEWAyRptCCzLthxtRhH7fpDL59g2Acx9UnS2e5e2CpppWwvw16HQaH",
  "key14": "4DZpBXVSuHb5p2ar9dzEJksQjE2xFioquEE1yXtphnRU7pJtrVncA4xqpsHghh6Vj9Dypm7FFKXtwZ4sEPK3yzfi",
  "key15": "4oNrQHwFMZ26XcMtNnJbkZPaVGBgjYEdfc4tCYmvNumPxgeKz6Jw2jYqqfUuzNs1J5gLVSA8Gx66TKjfi38jZQAU",
  "key16": "2w4K6Epn6cwAhbRt6aq2fS5PzUf9EygyoLmjaZLKJSrjGmnnmBX89SoQnFHVMZ8siZy3a6GayiV2E2vb6Jzucx7j",
  "key17": "AP7RVVDQh8uD6A5au35soiA4Ybr2n7uDrp83mTwLXi7nQiJdh73j3xW7N9akXnR5LqwJKkLHCeWWEtGzP9cvXho",
  "key18": "27i4wmk3Tr1X7DsdDAJ7TUMg4cQBZSzW3PysMP2tHwTajYazDBA5S1ZopT22i89AakGui11rN4R5JXY2tEd6sKG6",
  "key19": "4vZ6Zwbr6YNmW75JfVScid3LChjaHQ5H6KQ31Qvm11UynjaszG8HTjtJaL9isWGqHhUcrUZTYdJTi6ih62SdCeU7",
  "key20": "vBE9mSMjp3ZiGc5FmsekbzmRXui7QPZc6xoyTvM7mTyFuFsjxytVX1Joi5hqymBqro83bUcf5f2jZxYtixU1LJs",
  "key21": "2NdiFp2TGygJk4rpfUHjUxkSemU9KFhVGDNmZQJTkaabsM7THBn3x46sGzo5Yz91Vz6RdV1F88n59VKMx8rvXSpk",
  "key22": "2x9J5Cs9QLADZAydLt2z5NB4BSKLE7SFuup8SGktsDghGNpf5L5vejFHgnGGCWBZWKo19kvfthmdc5ohQfvmq6dJ",
  "key23": "5vtZrEsgkN2MzFrEbawUkWq7KCFmB5TT2SwAFA5skvg7LE84C4G7DEmQ7n12PyxJgTr57VpCtkkeL7qMk1TFP4h4",
  "key24": "bt9cCmvCw3BAmmDGQtb7sqAQpYwRoJ1TDWvb8t5pbJbPaR8oHfBGraYCSm4mRfDqThQa2VdFjYcp4sePXujqMDC",
  "key25": "4DsVYAY4AcmAgEnjGsHQBbanw5URvjy1AnmCSx2xP4yNs8E1XpCfee8uUiDJtoTaDppBN7F4hxUmkUeGbyn1hiLm",
  "key26": "4tou3nGfamAFPcVBnupv33zBLYgKxZrMeGKxVBPYbkZrfVC8D7KzemL5TtwN1rHKWCA843xWUg2GhnMbhZGhHSRN",
  "key27": "4kxzK4q9Sm8ZmMRW5kmZZjodjtusUosDdKbNkuqhkm2E383VNHo8px5BnZdCCDTL7F4TD4T3wRSBD2b7nrchLVoT",
  "key28": "2jUVhw5DCH6BWiuLChNVw9hWQLDNVjtdBFstmwgrZCDtJzmwLf27zTcbwB5PrMKmHr2V9dACNhGiEe9X7s3VQSez",
  "key29": "5Qi1z1oCXTkxPqWgD7Mz56q8nUc4Rc2qHa74BC5MaUHRT1qsmNArHEj7QM5QHabLhnCyybP78R3g2BY8gwcmc7XZ",
  "key30": "3AWyFB21i1jFYDqhuz9foM6jUoGgK6AbwcxXi9nGpxFVYNMP1juXFSkZn9JuP7MgXB9veZ9w5HoLTKqJXB3qVyKD",
  "key31": "5A5SuCS7wNcNdeRdtr56v6AefdzF6xeueuSokxgYPgwdroN3uAiUV7W5NQthA6sRNAQeR8ZJpPH871Cn3VoFp3qf",
  "key32": "5udgx4xTKVTAyhkEB4gwmMSKux1kkEWKdAKYNXmH8nEGKyPjajPCA2S7qSRiAupAetSZWg4mHcoKm8Nv6rEVepEk",
  "key33": "4MoXV4DnnQkDgwDjFMqN6eYP2BPnvPZjcQK5WLyfByz8eU6fa7dU3EL57H8PA4dvpEMjarfXcjrFibmSoZXSPGWG",
  "key34": "5DNkCcAoBvzj6zFt3JB2vMVazSeRfh4Hi8rTPAv3M8zAN7XeE8SdziFoA8Y2DJGzk4fKnvfaQTSX2iFQm5F4zGiA",
  "key35": "7K19EfjHqYf6CmyaJ9Av8hR8avNhkrvPC8AQ5saJyfK3vByLYFHJijx1WmG4tpGzyn4w1ChKhvhUDYRRu5YWRSB",
  "key36": "KvAp42sNyiqpdWDcYFcErGgjJwsW38To17aehaGsvbrkAdj3DmRYdevFv3eHb41jMXgzonAATJK4kFbESttRm6B",
  "key37": "5UmLBSb1VQFMLc2kuKKEYnkSeoqUagLwR2pEnbQ7qqcCpQMd9g48tfsKx1E9sG8xGSRvMEHCQ99g3oNpBrFL8AZU",
  "key38": "5j38TwuysXQ8GnmMgdeEHgiPeYX5ZyvXjz87kkyLsFTQUNCxaprVNEiGmjFQ8j8UXhzesdgNdJ5c8Nu3HP6DGrp7"
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
