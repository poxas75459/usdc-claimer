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
    "LXHz3d8wfGVgHNmz2LavFAgRc3kRku8ejEmUrZLT8K91K8wEXsCBU89XP2UtvoPD5nC9bxTKd8qxzeAL6yAjGSY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5obPAyhfsEPTftMpedUFE2rEpxXrkJtV58yWLvCeSQJxaRTxs7gBYT2R9cb7PR8PzuqyydTtBmjCsZYL7vWYvNVh",
  "key1": "3NMdq3jpTf2w76yT17z8mk3EVmHN8F9BWdCsRH2wRcqGSXxX2ebomfFbJ3EAs7LaTfK1J64YxMFGcNL9i8xmT7eu",
  "key2": "5sTNNLc5FNRa7kEPNAPgk5ivrE4bh6dNn7oTKjwsEQkuMJPP7i1bBaH5GGVsCiFeqRoLXTP2EQcL4GH54TNA6S2e",
  "key3": "4f7ngukD35gghB5P7vyphbm3g1KHv6yBPfmb2U4Cz5fM68zvwR4batdJk1wXY2u2eVGmAJNJJw8WV4pkkmcTiNwp",
  "key4": "2JBKU1hKoykfV414kfZHrUqhEheiY3Jx4avVAU9DPFp8GVd5XC18Nqtb4Fjn8cY5ih9kkA34Z3BD5rELo2e2EE9e",
  "key5": "fcdyW2Wo5UoA3nzQn8GtykLpVau4qhmiwq6yzwfKrdFj4SCJHdgoMQ6zQv6MMBGqYyVRpC4UFD5EMmX6SAwZUiE",
  "key6": "4UbMkh2JzG9dK9DaMUE3NAv1qA21MHzeknQW81q1MoE1qk5gqNTpPGysCKZW1DtEqrLNhAvvWPvjy7xJVWNcetqU",
  "key7": "4Bi8YMc5QN5P1nUQrhrR7emHWg16KHYsMyeWfF2nCq3NU46UBpNha1m46a5pMSVJhvPiiRQYVaf9qovqWj1mLWNE",
  "key8": "5FhTto9w9XsqaBmvSPj6RwdvqkPBHSSG5Q1mA3ohoM4dbpV7wafrB1XMfDhasYpHmeHFhDC1ztQ8pHSVepTwbULM",
  "key9": "5ELAHYNUHZmb3UocEcxe1uTetaCHtyjGMdyca8R6LCGCYffj1xMVbqjs8odkfYqCwpTj5KMfUbpcN9c1Fy2bqNyj",
  "key10": "4fjx7cRz4Y49HRLXBm8B3dkbKcw6ThfDvUezuDYGAGn42oxJZ7eRchCX9FQ7ABm2mLGcj5Qox4aR2mC9JTHeSpAx",
  "key11": "3bKomTnzBib1UBCxrmvaK7me4vAeH5RYF8Pqor7RsNiJzAxYpZyfrrcxvbYpJ6FuYWCMxScSJF2yN8EdME59Tuyi",
  "key12": "m19PexFBmFThwEx39j9wZzDgB22HMCoFpQRdwThWjsXmeeyU3undgxAx5wKybj6NvsKhJupyJuQphqKhxLcNe6G",
  "key13": "26SNNN8nBotp62uaqEs1pV7PMCMF4ae9N6PWgERLv4Ko2dzrV87yDmeSAoxtnVvuUSrtEZc6CJpyPpw69gqeQ167",
  "key14": "5rDjENTmAkX63HG5pbM1gQ4pYddPgmWrTxPv3hWpX3fhiYbiKKVRMs3zoACopFXbVT5uYXAjBf54wCQY5Yd2DSxt",
  "key15": "ajWXZKvkoDB5V3sXMpAPLkUqkjCWFLVSLFMNwHpmUq86P84vFUdJNkoN1q3nCuCFxQFPDdpzJYakZSpMtr5igFJ",
  "key16": "61TYb5fTkTnTBJ1EHPrgyBwarQNvMCEyJ4m67RUQ8LyW2sdNvjirk7cLpfa56i3gbzrC44G42mERT1NQfCG1ztvx",
  "key17": "ZG8ZVV9ab2hTTwyeMCKtHUSCQQ1feKArbiNxcNh68rgreh1Gf7cqrUVfUf1tGn7ZNoyCdaHga4jQkHvDwNJtV7Z",
  "key18": "Kf1mSDB47e8YwcqyPKp2ubVC1FU484MNF4CfbhAPwvyxzjfw8YRNGnsKE4EvoA5N6T2yEqfFaRPEH5EdjavQ8WW",
  "key19": "21yAvzQfU84RVxEpf8HV3MatpNmVbnW8XupwgawWKA19nfECWswjGUY7r6tRE3sBKKEXaoXCg67a5a5NiCBHMorj",
  "key20": "4xGva2RQLdn6u4h6wiyWmkkbLAew4PGgc3cw9P8k7REX2nYn62P6BQb8pCDSEHe3W2XEu4SJoRUgd95zG9x9x53U",
  "key21": "4nvyuzA4XRo55todWCG3GnPZqDxnz3apjSgL5P9qm1s8GQ2vUFsMSbDxbsoGDSeHvX91p4DaGVxabe4NBudJXad2",
  "key22": "2fEcmPKnAC2oxebR5KRAtGHKgWecL92S9VBA2bBZtrQdhxLGRKc3TUBAsshG33tkuofTCVTuYGKKgNn18HcAT9Hy",
  "key23": "2KgDBBxZkx2r8CyFK5EWh9XJfTvNN9KosWhGVND1QUDXvUvfFE4zfdfsh6S9VfGQN2CGxpcjbpyYsEwdz5MEdrc1",
  "key24": "3avPq1pvKiWxZbhaFHTD9BAfzYgb9VaBzEZxMxChrnUBK8Jvob4STpD9MkKvvgvnvwfmp3gLLWSFKwtC6QpUkfhy",
  "key25": "2KKZD9ap1btokvbssuVqqZXuKDkvpBseStSgPQEJhXo4Niz88DifA1UfX1SCVJitutp4jitsztrezYAjKJBGWLn9",
  "key26": "29U6z3dbzSxmkuWTqdpaXijzgw8o34jL4LocNZEdmAYJQiaVFmUjMn4A6Jor3gEKEuEmNtqiL76G8PkXHVuz6KaB",
  "key27": "61hizy9ErWadaxYT4nxGgLczYajUewDW6YTekBjjDLVrHhxcnCjYwN8K5axbPdBG4CYXzC5d2JQvJ1cDicH6FsbQ",
  "key28": "3LRCuUw6T9PZT7XpsGTq4gDqbuRRGcg3xZvm4NszpYAfd7twWLQD4HGBHYxhgxmEcCEv9oPHwaAeQcquhnMCn3sa",
  "key29": "2TW2QjbaCsBGxbrWmiyxXPZtAqeCBGkM4PoakrwNtk6PwK6SGobeqF44EEQo7sHRb8bjf1JnTgp8SWzt5pXdH5Lv",
  "key30": "4VTTw5fJY7dP7aHVWpHGTDZPVBNsSjgpfgkaG6t5f8EWMwrGGJ73yYjkqns66FhtJxH1P1jFUGwqB5W47pkTdo6H",
  "key31": "3LcWrqWQHF5i7WZ2iVRaE4Ur7hr1JGji9251VDhExtbeT1A2JF6b28yQL8MH6PqUi6A7WTtJXTgxEDLx8vo6rSJv",
  "key32": "4xuYV23hiv7S4mNhboGJnibD4UT7xSPYpzKd1vDFcVQfmd9bLfDPw4zzm47Ji5fNjeN2h81gxhJnRoc8KD3nu6cD",
  "key33": "5zJcv4METN5qfF5BhJCTKCTdTvaCqQEJzSBzGMmxKyrJ4nx5iuES2trmj8p8fgtZ7Erqa2XAhtPaCy7Z4uRST7c9",
  "key34": "2hUZco6VhGCW2Pqi6VMQyFxdYwE7NC4fx5uhCXCqaDcYzgr5KtEVkgSCrxRismPkGvLc9t5TGGZHf4Tp6ZFfJnjX",
  "key35": "5Fih4bnAsdW3DcwqLXXe9MsebjVpA4c25yq1qUXXTcx3hvpnjSgRcn81HYmyBVR17MxXym3uQWfoTGRnDVHdAWb1",
  "key36": "47qnELY8HgtZFq3FikG19anZd6ew3KUwMZpKUTnAgMbjnKHKoBm9LPe85NtQ3Yo4bFy5mpxcRh2UmFZirfKuHPJM",
  "key37": "2tH9dj1Pqbm9uwVHdfEkBP65UH6KYsPwhuWdW8ymdUWCrnpZ9t4KvvJHEThXugvWAM3kK37deeXunyKoBTHvBjeN",
  "key38": "42T1VynodknuLB56ucJRwQ68C7xvmhjJM9tPbM5BUQ5Q6y156xeg3zBvTJX1k9sY7LK6ZyMVu6qDzH8gtttCBQmB",
  "key39": "H8zfhjBLZBQcCFYkGAuV3Wobj8acuhonYvRdP3ZJfHuDXy8FDX9t3ST6uAu3Y1nYTPbq7QyF12uLmuFS5KVRzF2",
  "key40": "JpDccY65sgimRKKTVM7dsn4nztpbcbUm4bbfLhPCRbA8Z8EjR3ZH6hHMsPx4dUWKXo8kuMTRZNDWqfzBdmypM9a",
  "key41": "48SuarH1cyvw7rkkWe32YSAg9EUiPuwitvgozoLquEYwDTZjSWywMYR95xPPc5HqeCc9jZBBXBEUGdNGaYQLRbna",
  "key42": "3jQ1D6P475MP6bPAfg8zVQytn1CLaj3f5ttavpioQCqSfhaanmdWbi4xRMB8M2VsaaH65atKf3M99vapRm7MRjkR",
  "key43": "3Df4zA3uEQAYnjEdVLGVkLJVjDo9Sr14xhKVsyXSxwKeVPJ9F2Rui8YrDYphPnNUgmbKpxa789qcS5XQ79vDC6pp",
  "key44": "24kjREa7h65cj81i2RRB6kndMoeZiqJbKZhsJjdiQFViGvkto7Y2W4v1yPjSp1CmDA4qZmka9RXzYQkUXuSTVY2D",
  "key45": "4jz85H38jncpN5ZQ2tx4h65J1yr129LfjNs3vzwQV6PzYW87iVrwYnvh8WB6ZmipjXFRiZyW1HERy5srZAUG4MQj",
  "key46": "x3sk5uZiAnveRZEfSipSEAG7ZGiqbuZqt8mucMxxgCFQohmG2amf8pJFYVEAncz575kczYA186RgkpjLpqLJVeD",
  "key47": "3rfoZZAnUpmpiTLjGgcwEQVgudchmwGF52ts45UeWgnGMpBtatzhd2HAhnz8dGU1nSEAkrNWC8Ynf87LyH1qJ4zT",
  "key48": "4fwr3ZCTPNgRa4tu9anbMz8JAeRsMBRZVewjapi1rdgcN1K3GuAgYcoisck5YAdQRmosbETNcN3X9mhfR99bXrTQ"
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
