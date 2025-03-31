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
    "2NNZ6qJwGeruT8rQ4beEZNNnW3XW2Jf3rC2Hzs4JtTiVMeKC6w92Kfc46arP4WbEu8QF339V6isCHoAQ5NAD6fz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "462NNMWSiHZwFePz7yxbBp6ciP3xxuv7gfESDxiVTV2ZFi44T91BVtepTXEN7XDZoQzMYo3vEq8mdHpFRgCXu8K1",
  "key1": "4b8fDQNk1cXAVXUMhPmW5RTMrFNrtUFC46dVwSzRdvJojHZvshrtf34z2NeXM8g7q9BweSCxjm1mTh1AhrKCUFyH",
  "key2": "2JYoyFLnZ9MfAsbhBNfDZ4CTHwNSm9YQyoEuH3aaMQNmfAdLs5b3E2UEoc2ktfEeaMBprZmuc1A13uF9dQ8u12VU",
  "key3": "5yV2MiWJVih82Gy3zkwhpKboxk2csbFs2dKo6M66zHpcEJ8fynv6nVDZKsT4NjuMGyn4exMKBKGSF1Xj72gcR4pH",
  "key4": "62gn4ugxVjpUvfB811Rkgxrd8dN2mPcss7DSEiBwjXGTwvxBvQydHVssK9uTvD3w8GuS5dmfyQAn7SUHo5qzj3mx",
  "key5": "52nwCx1XM5Ldood6CMrRcEUX33B1UZGZxXtWn9XcTWPMJJDnsurnDxaaiG8G8n9bf1ydipCv1SqKytTwQrL3Eb3X",
  "key6": "6664w1unpGoXGL8rHVe8VieH3SQewscQyBdmeifP9eCwWoqzjpt5f3cEcTmXvTeBEATF8baVzjcqK9by5TX22evP",
  "key7": "62fHHpribMVk6quserB5ataZZAYFdqPNxqvgwRq44MzkCJRKXzwtsj871SznVxgpqwYTRGUEJp2cbWGC4YfGazVe",
  "key8": "2jE78gaY9tBBwnfUj42cjhRtFCx23TFiPbWS61xZDSC1FhaFuubqqPRJxEQatuURdMcFTB1PSAkswNefdTccAFbC",
  "key9": "41GTsb6WDnWp1X98pqw348ATBQ4ocppNnvLcQPg5scoFN1vFcvNXJ1s4sYu1Rhab1uoDy8RKrpRKebppmTVtZg8t",
  "key10": "vm9gBX6oTgYNNETMthx9Zz1P4QxKN6QXm53hpvFsKeuWbVtuAotBCtBzNK5auS7rbfHJW8b4bxkLkVFwy8mGpLn",
  "key11": "3JYmUR8eaNv9ho1pXSbsLs6naVo8RWcFN3LLZmdqSoHEo32nTBMhdZ9GYJnpnygKYTrZGn22FWwNgjcxiN2HjM8P",
  "key12": "9WF5Gp77CZNbLf6fUnUqjEVv5Njg73LhHwx4de4drcNBeLMadmiJCQrZCkGr7q7GnpChxg5sVtHvFd6UVMraaTC",
  "key13": "4RjdqgwfVjniFYzwjWUGq5kEN6n4uZiGmBYih5PUus1Bs5JevydKsyyc84n3Xhqs8EKiH1ZPkw5AZz1wGXuXmd7",
  "key14": "64Y1HsnGfjp1ESVx9qnmBN7PGvfKKQMA1eQUHdgWNdL68ptBoj2gwRF9XzR3AepRUFtXhgxXRMMH13whKGuZW9ge",
  "key15": "617y75F9givhz6sLLJXivu1uGHUEsMBjCpXBLNK9fpRCFzALj2XGk7Pkwh442hpL9wytu6RnbkDstFLL1kUYqE4d",
  "key16": "DwnS6XLY5UAHrAvRm9cwi9AUKns7JFcTs4hLqHNV3vqYNyP2fr8RY3gieaKcMxKXyDxPKbm81bp2MmYmBMypCRq",
  "key17": "65zJBgiUKSuXfMUXGtUUhu9Syt3rVHYJ2ByFoJayagy3BY3RTjTrkYvsaRtZ9rpiWtritSTmQzXw6AbSKdVGKsnT",
  "key18": "43sdGbwn1Deef3BAs2A2DD1mmDmAGEdLVzeKHQ9PAHnMTcgy6nTaAy3BbWVniLYBNpgpcF9k7rheDmqiYSX4ZMzY",
  "key19": "2dNzFCTA3W4KU33Ga5frNEdANsZhH4oBqC76fHiRBtJqy4aQ6z6ShQWWjqc2hoUJFd4kzoCJsG57cTNv1GBoAgF",
  "key20": "25ecAdJ1r5wePZqGKVmkzJwa1WuFeRB2a3q1EUhoAytvkJjHTAdwzvvkWahWmF3U8AcmFigjJLeiaaxHUdwmDEih",
  "key21": "5w7f4RY8UBtrvMUN9F9kWvbDTcekDNQxVrYAiFjR3FjKkdP2oSwsZ7Cj8ArMhzAuenEjJwz7y4uymC8f36EnGW8L",
  "key22": "5X3cUeMXicezncnvECJRhxaQ8B43Jk4EjQLET8yNNJbyQrkTT9x6kBFGC8Wurau4Jep2yyT2AYykivUY46GXYCbc",
  "key23": "3CDmo6Ssdmnv8C5vNgCU7rX1Vt4CkKCBi3bJax74o6dv7Y5fkkL6MmysQwyoUqP7PLt6K5zKpZX9hXM7m2Y2sefG",
  "key24": "9TEZo65WqBCg6kSYqqwHLgMCinkq9GxfXAzb52V2afsdDnKfrY2oQGJDm8buKvf4aV5pDEv4LCGxJz1PEZHSfGV",
  "key25": "3tJZS1Nys5sJqiLJBgkqXKr4wqAWkkeHDTSR2MBEUZdcS7B2MDs8SYfu4LARLCGos5rMBPngjLSAtsBFiNjp5Bhd",
  "key26": "2cEzwaPE3Cii6nMdESD4BBeH2N5UCQ1wSPXpw93QkqCfHeCCrCuDrxig2kMMeZJ9YafnjZvmRrSgMeo7MezbV3Ae",
  "key27": "2UNGGkuXCsK93kRjKiZ1gwmMYbnor8zYPg6N9RqiXoyMgtXFM7b5PgPFwqg1Tc7qibRMND6fgE8K6Q2XEF1YA3oY",
  "key28": "31pqmeNpS5M81NaXecJmc5me3QGP8z6LA3Jn1Ev5Q1vcW9fMd9RCWtb8yEyM5VR3thiUmndwYoi6wDfnqkFc2rps",
  "key29": "5Nz3U3xbnCEGfUB7GWCPSZkjc29Y1Tsc4V7JNXJEpcw9ARsNqUQuagXqxn8hhobaBLiEYnNcxrniSHcvF6wFLLVo",
  "key30": "yMqAtDxgcU7QgQAp4SJCncJCWDjJvPu8rTktMfBpq9Kq71tjJ44nAZ9gHSzQ6MtSdGvdbDr98jZsB84x9NwfbN4",
  "key31": "543ka7obkebiNiCiiPKpG6d1aG55vKXDFQye3aS6k17Cg1QYRa81u8DoLRtWhnxTb4UkgiVN9PiYFnPiZbVsVS76",
  "key32": "5XTCvTkG1vaWScz95FmRLCVPDNXuTg9h3VyeUZ1yxDk99pooFnN2nHeT3HBb6UFgUoRHr7D2inAB3Ew5oJzxoT8A",
  "key33": "5gULkCnFY1cnLE9J3zf2G7XEEotouqX3KAqgZ38RsrkfZrZRSooN6j1dCQGXPqqtLsH2F3RmHRymv1raKAS6gKYB",
  "key34": "56gsywDcjLiJib5p7juGkxGurXMhPX6WMDfeKyX2m6kxjFshKMX8YRJM45XbaQDmkZAddvKsJQieDVkWUrd6ujV7",
  "key35": "5rF5j1Ebq3A2hJoxCQL2iQ3V8B4zP2ohMXw7yvc5Ppx8FXLu42vTtFEkY9B7Vc6mu2w3fsvRrfFE8qbe5kWM9yeP",
  "key36": "5jtTXCnZuJELvQDEiB8eL7681ZjDzrqKRWZS5gGfeVj3vaQbqyjTN8C8qSDgs14F834kf7yBzVE4oQGh7raor9dJ",
  "key37": "WydYtRJmrDugT7dmH2TKt23QcHJG82LV2y9RsZG5rbRnhK8eo1Lzuoqfg5MnSDbTe9oEGoFF2NZqXqaBqMadC17"
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
