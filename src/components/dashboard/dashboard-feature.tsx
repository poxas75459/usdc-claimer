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
    "MB4ETKr9w4fYkZwheMvXaFt7LeQF2a5Nxu7TG68YnqY4275Mr998nHcW3ynBjaME5hiDoXUYZb6DKSDE795Ew8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zx7UYRqYis3MzXGyo5GfsKv1qACK3hSUEGAdpr6xzGNhyW1jPokqm2kmv8hJvqNnzRhJ7rbyZF1zKrtBdr5ipoL",
  "key1": "4oaekdBSgzHB88MvdGZ6gdHb27byrbsTQXmUqn1Kwwdt2WTDZDVqzELBp4Lez8hdFdR2Xe9YDhJ46UarAF34765k",
  "key2": "AVc2qktbiXJR5pztrFZ6ndKvmP4t7VM4EdenPDErK1vpgk7rnYcCzdiNJjWVGchhnTuSzPwB3BG1HaXJ5onS7jW",
  "key3": "5EyL8cNa8mFrnuN7uX3AuFWmnTQohq46UAMSnj3e4Vk87Muk6efSGVoHMBcUjQQQLrcDvtJNDhikUcKP1Lu7ZpLA",
  "key4": "2rs4pSXi2DDzYoSXDsPy34Z8J2wTYrXQijY7XXeD37WixtypsGans2WvWPgkBXnnsgeM6dmQcZdmooUR3SdwVE7y",
  "key5": "44hFj6S9tS1crB8CdUATe2zPiJGPnByQCtGqAWpih5yi85mqZxL6KWXGz6x6f4paN8J9EYiLsm924bkJoHpCmDSX",
  "key6": "2uFmL9ErB3yrUMCNkT33VB1FijAiXkdH3SyAiHT6gGm4Wcopp4z5gtcx16wLGQ7pbdtPdStyZrCqM1mYESGiTpxv",
  "key7": "3fANzP6cPuazLv4zqALJQY9o4yHjAjyF5FFNtArgUhzcgf59nALxxp8LKGArYGc6BdbYXYceiHPRg5S7pbMe9Y6J",
  "key8": "5GMAyYT5n4ZE5cqc1VgWVsML3T21tD3UPGWUVtKHNVUu45tvhdDczA5EhyjUHbDk2Fq8uqEt6cT4aVPjcTaAUozi",
  "key9": "5PefCBpuDLzCG9cWm9qAYfraasq2xtRRkxaSBdTXq16g7Y4U35bccf5kXgAhG5f5tkyDpi5mAxhfc72oTVYJF5jW",
  "key10": "3Z2nwojHqo7A3vj4bmMqwhwMnHbHYV2jXCKEh6UZSX6zYNzDuhj1nsbkTkTp4D51kvUhu9dy5V3i4FPP4vqMERic",
  "key11": "63GEQLYMQ6VcrSYPY1Jgt1cys3FMSpJvV5vKEUd9wgebfxttraiJwJCxvECGQLTTStJPYprj85h9SQhDR5XVJUrg",
  "key12": "2cpEBxxfBwmJqiJ3MMFimHvJW8v8RndB3HH4B9UHjh6uJURFoyyen4Q4z1vdwc5w7Pwf98rJWobvTUGERGxSqaKb",
  "key13": "5ZfdGPLnzRF9YMPSQUDGHzMq78TNgARu1hfybmAwgDdv1c6VvkaaQTuwyYNbJVmYQFhGueGFtTzPiDcZUxbkqeNT",
  "key14": "3wPc7naj3zD55y4ujkaLnz6p3XURoyDK2ugMXu6JQF65VRt82v8iVfftSXXnmEhCaMaP1RC7wKSmVXziQzjq2myz",
  "key15": "hef8KY5BqqqnNUA6Zzr5KkdFmTxn4AWburXDjvdhsKFHRVq6Y1a3DXKm8etEbaKDoCZMaiQA7Y7bruVveTZsN7Q",
  "key16": "2UwQJTzFPA7mZNPC8TfEAHZzmyDGzF13Fj5ffEXzqm5sb4ohcjEHcRGhRWiZbKBk7LFTiyKQACXV5KAQesV8AnTS",
  "key17": "2MAsRR3BAxkSoSqtiTsk2V3hjBzDFDKrcC9395uamqzvi1UeXw729N6UHA4N1n5s5xxooMZEHbDooBBcpn4NYBuj",
  "key18": "2oStVu2eg2H7fY5PJjZfPq9q8NmxPmHdnV58tqnhizjghrrzS9CM86f2JTEceMW3SyLsSAdnvGhT2PGiWaQySm53",
  "key19": "2xYHWZHmes4mtzwRCj42UNmx91qgkTKYdxMsLhWgP4wMD1MBpbLPPXFaaZwxLQynvG6jKoLScG3oUbxQPPraghH8",
  "key20": "4FkPJZJ1MYhLFLsGhdSRHaM5pTWpBLbv39KsuHp26LZvZ8yd6eYptMvsXCaeXu3ugqzCHuqHMGYVUGe9KHvWy67d",
  "key21": "4a7ScuZoXoXL1TyzsKaEWB1kUvcSNa4NR8MuBV7DipT6h2rxwBm4o9ejtV7QXz6SyastkWhBz3CczXm2egYwF6j8",
  "key22": "2J4tkUU7DFybZwbaTL69p8UpkQBYzhUNZV8K2Een2PAvg3Tm9Z8rhww2sZbueft7sVoXKN21c9mjmumy1U2mJ8ng",
  "key23": "3LZAvUb7A5Y2fLKXNaEakYe94juDkfPFY9CXCqeuzcNNtfhgp3j31LCM2JMfFYS9mbe1SLeDfTnyXNvJDvrtdDRk",
  "key24": "5rrD3v95B6YWo86RLVbZYb5QAe8TczsTYzA8vo7mLSF2EJ5sAMfCTw6M8bExRm7pb2gyctjYBYLXJ6jEws2XkX9z",
  "key25": "VK9GuYERMBworfbhXHPDUv3wmugEgnpsjEzmpLvqwB37C32SgcKAJh3MFbKwgQMCc4oZ38LfkMBnQXZ1NA8LrDn",
  "key26": "2RSSVLFLPr9xbzwpYZ7afP8Uo8KNZ2dKZT3dQgSnWnNRRiSrDFEndQGRPj4QLxzxc6JmqocSZwyNpGmL2TNeTCuE",
  "key27": "2nwR6vsQ9jLHGayF9Dtyj9oLcugmTrD93YpHHgEQQXhDTTgkWbASkhuemPmGBsjESCeyqaFh3MLQBNTjzVcGF9fT",
  "key28": "oZWHivbvJr4MuHSeX1uATn4Aya9hNDkmBFtJr5JtPRHk4kN8pD92YspM5n9gjRfdCUcyMLE4UDb5vdgBQ3AHwun",
  "key29": "jKbRg4qcR2p3E57eyjBWjNvciPgYscmJWrxWf5agJsMUJ3iJpsmdW1tHCGHos46X2bRmmTFvrZo98vtRmY6Ee9R",
  "key30": "QLkto57zKXQjPEfgrYiNXBghmMEPreBLaQu67KAs8AmwQP4vf13F9aYNXi2by3QUq5rHHyFexwDsbLsxCkU1Qxr",
  "key31": "3t2Y6TqKTDowmToAnM2N82VoE34H3tGkkNEQ6BJcmCQN5r1m7NPcxe19M2ujLxQF9j8Sz6cm1QteqS9eTrB9Ufcj",
  "key32": "2728mLjXiTvQFRMHMre57BHoZREVwndF761dZLWmQUiX2M1RxrY5wKJ7oYpQqzWHL3RmeqXFZbu7cMwLQ1jkvfs3",
  "key33": "58sEtUFajD7GoUxrjWxwzjfpA7MTMEAwH9z6qMYxwPWM9wrcMkHHc7g5PmuskrDQRYM7WyftmvGc3Tag1wVJaenq",
  "key34": "3cAWcZ2GHewk55RL9PnSLg3Upt5sH47KtkRWNtbGMWjQ1o6b1LNqWwk1X8UCWhzG9s9rLVigBPirFxmGAx5FuLMw",
  "key35": "2YeG7b3CwK9spG2Ke5DZRidnvXMWe4jLoUSoadKREyDr1XS82JTNbEaxiqbxNg2T5bHzBvfFpTqknQuASbxWpzB7",
  "key36": "5hyMVCCvfjrKTf3sYoJGz6mEaccc3P7mEsRvjmT6f2p4PJPgK9xJDj65w7zqFznUdDwsVg9q2SQ2UoUppLj8XWR2",
  "key37": "2ahfJQKPT1BpY3T3rkQPPWKS5grLwn7BMsM4jGMsyoRHQydgT4ZJzcEX6vbHJ7PuJQ8f5JRFkHytqTH5oi5WBKka",
  "key38": "3eGDociQawWAo2xCk1ddMUwnrPnFDpFTZz45JsQx4yF8gYwd8F11HiCBPheh7iDgDNNSp3wbv7rhbEDY1tDWivch",
  "key39": "3iy7YRXzJrmA5cVPrEsoYFzeGXhjY6CbnPA9VpBD1SrCoGfY773TmD4ooM23qZTSvN1yTQPNqteMUZRcz5jrTGGv",
  "key40": "4scYeiNgc1vuyZ4zwJMzv2UFt3Vetge6CTZCAHRCVwSUCk2bb2vmmeyHcaTLQDqo6mCwuSMgikYZRxfRKdskoP3G",
  "key41": "QHCGDGUg2fSFFozKy8yE4pfnRutHeDJusV9qHTmLfSEtvF4tnmrxApyPyatNHuA7sFs1ZKA6B52PpKA52aC9ar6",
  "key42": "3cjUpwyfHCVg4rvAvFKS829923ktWjfRuv515qudSHF7XvG6XXo46YhHqdDXhu4yKsJs7Efw1qDb94XpPWr4XXy"
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
