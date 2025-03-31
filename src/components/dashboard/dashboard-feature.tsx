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
    "4CwCKimaAvaLWeTMP2Jm5jZmvb8MNVY9HqPmWhfTM7UQCKrW62jHsYVSt7mtaNDGjLuSkLx2HQGR5kCiR1qjGQmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EM9mZq58t3k4j7LHEXYdixRfUXv8KVCavmXkutLQLjbSxQa2R1LyPAeLaLpooQM8jVLMCU3JdJwSKLPDwdYZVaC",
  "key1": "2GfumimiqWk2ng513XDorcXAog6hGLnoTayxesXVbCp9aPPcbz7Effhttn771QLNMAqTRxGJ7952doV1gtwy6CCr",
  "key2": "4XpqdpUJbH7SBJBFhHvGcKvKrEDySDDFkseWpL3MctZLagBP8wyWLYjZ8Ei3ZqJMtsQhZ5RmvTQaERVoX5bJEMTX",
  "key3": "3KFPzYowNrotq4m2zDFqLQiM8hAbzJbsgp197oe7HVJsaP9YF6CTpcrJHgg6Zmen7vVPt9c991NrsFBdkmnKz4m4",
  "key4": "3q7oMRrkNQQkKPniFynZqdnfScGhaXh6ErygB4WJKj1PQbvHXn7Er9fdcdFR5P2EkPh86b5vVo1ki6QWe4yUpfQQ",
  "key5": "3AWFMr4jELEeBpofQJC6YxE7MSMm8gM2PHhPYmw1bs1iDcV7a2NafgZeJ5QgNchDgkhvEDW5VHo9k7wiovcVqro3",
  "key6": "5SGqTUyw7BC4DbRMXmn4WjXRjoLgdbab8kGMvt3DpccXnqGaKgeFMwNNheS8PdCu5asr9anAwnsHPahhLV6cHicq",
  "key7": "3Yf2Cgj5fLZwcK6nffDsgxPmsmFDdRYDBce3f1iJKGgR4ogfCBNc9PHXgvjSEzy7mT8mhrSD84UeXK28uvBP5WxA",
  "key8": "5CWACty6FDoZopVFDZjH64xAKbkCKAadjgbxajNc8mMC2RgXF2g4qMeH1KorFNASzwDrNQF81NN5JgQRUjjjcC9Q",
  "key9": "2rgL8B6Dani72SKW1ZTw4MqjvewqdDhdTU9QF6JFbhqGhHY5hZazE35nWx3skKi1E843FX2LhfTHhgFHVU1Kcqpi",
  "key10": "3vefbxzSPqxrjnTeL9E7AvbkLEn6hGFbCXXUkHSozAeMTwYhhH1vVpVwqkwbwVViwhHbPjqngBtf1tqw6r5yFBmo",
  "key11": "2hc9ZbFcEA41nensXLXurjADn2PWh19kzeA1Txh9FwDbDxroswtw5gmfbDPVXkdSCUaaE1ib5a6UZwA2d9HpSmCD",
  "key12": "3KQBm6f2aapBctxYZfHEwL17w2jSsEEzFzjSCo7QaTepZTB1wvVhoGZrMSukadnPNezjyUcobCGpiVMcBpttSd8S",
  "key13": "3rc1ghUus1G92ZWrCxzF8sK9AfoXzTxPZ3M6cFgtUSbxtUfM4fJMev3fEfRc18PTjQJvJU4Jav7B4cUxH9TAaEQk",
  "key14": "5S339JQCoQ8qxXTZRoKWake41v9FG8bQcJZaepyeAefGKnvsnGRX1AySJ5W7gBx5MZ8m1mE8b5seobQBrz2gepux",
  "key15": "3fMJb75Y7PsbdMu6uZtk5kMtQK9uh42GehJoxfwWuZPZ8vqR13oBdm8gryMVUXR9upqEC9uLY7Ku98Y7zNbyf68t",
  "key16": "4jtAmYFma12eohJB9pNeHuhS4yh1T8mwFEvCaX7Fs22vMSqSySHMUVFscxmwf93Z8Bw4dLFs7BBhoDjZBjDsQ3Wn",
  "key17": "UdsMcwEvwcuj4S7qWk3EfLVzX8wzd3S46x6FBGQkY2zKNB93R23VZTDNNvG4pCkk2wBctf9pFoAFaGXRNY8QPjt",
  "key18": "2FTdxcoUavDddc2ziXty72cSV1asLnyQAjxmu2u8i7s7SELy3vKSC29ymAxLphWUBsFSbBauGFfJG8cAVdgvBD7A",
  "key19": "3JDt55Zy5SogaZSDBgfaXjoi5cuPRoi46pFbC5k5TKW2etHjhLsgMfoL4ubxhrSH4tRyUD8nGoNSWgZA36NXEHgk",
  "key20": "DgPNMcAYfUu5JGcJ9YWzRZQtWno7GoLuZnLrTw33hjYJ3bhGv6XAxgoDUZgwSg2AvnSeZNvDBLshKdM5uKgKXMh",
  "key21": "3BQHZdfrAp5kYTJ8K4oUQaSwYEWyTwnHQcLpCEeDJwru4vn69BvNthQHiPtocfLeVWcxNEmutkp2o4pV5xGDaPu9",
  "key22": "5BsokPhUfPAetC6tUw9Mem51e5nPqioW3LAQzCeQ4Fsq3eBghmbFWRHqWM3ZHQ1mBfB3JB2xY3mpyegjn1AbLYrW",
  "key23": "2WrAd3ZZUvRD527N1p2Z5AJ6dEMHxr6PkyMV8zJVhZizJ8h8NXAe3Qpmzo275Hx1tzuEboPZcCSeV2TFeaXuFqBN",
  "key24": "3ins3anyrqUfLMW1U7aXZmqCTHK1nkUx8x8cfkvnzwagqp7yHm2PVnsH9d8xsRCiGaAuaPnvQuPCAxjp8xD8CwQH",
  "key25": "4kzecWWzQ2UMwaVpdGCBWfjp296a7YKBojoQkuRF9vfXx28kqPX7F2Nv1jaEiYBcMomy47S3wA2scizMNCwBoHDF",
  "key26": "22SDZvoPU9B6Uf5JquLWFAMkHSWcJowZcw83Pv3z5gWBQwJtY8Yf8skrKLD62AXnMixNGFynEsgqFnW4hiRxnffm",
  "key27": "5nBZeeDSHzdJuPy8mZ113VynL6vc8ZSKchAzdr8AaCKsbryLQxhX7McJHgNBfsqx4VAQ3JEXyAHuVSBpNE4kbKdr",
  "key28": "sw29VewKkuqdaQtNv9KixeWHofPHMdfK7M46GZoF7wwhQNNaB9foz3vaMNAoYHvCpoaY3h4znAPUQpa5om1on59",
  "key29": "5UQihEvARgTohJC9E1XAUZ71uEQdrS3vYpyphR7LFUsQFc4YEnCRG3e5gMN2pcpGSG26QoLTndpjZbMhb4Xj1rCP",
  "key30": "4SLTd9Uzj4wt9dNFLjgDHgMG7XU55conAiriA1VSDxHXsUJudZVKKFMQnR8YYP5a56fCgDvhwMjesVaggCdiXaio",
  "key31": "4fcUFGXGKRjTd3V8pKAmpPttDwCPEShNe9f4y2sRxpS3wkVRaiquxcLPmboM7snV2vSaXU4L6FQX549r14a3HwNH",
  "key32": "53vrjJ1ufqbuL4yLtFAEYr5zeA1v5Wu5gK8UfXANrbYVFhUPimjSVTUiNHXaGpnKNKGGfT45N8CToK9473ATCgiU",
  "key33": "45SZngsxuueFKbNaDS69cFK4tuXVz1HS56v7XZuBvwTfH5XTwAazXLx78L9PWXMke2xJtPiutAMLbX7bJ6SLAz6S",
  "key34": "5tbpR5uSfxKvvgYwaNY5zHqsicpGvsXhWeEKXUmuR3bS2jkszjhMYiBmsjNAtxgKaEkYggBfsMkN8Zv2iJFvSMwm",
  "key35": "2d1vNor3mYhT9JuPTkZwhrgzikFPtcz2CUzprWX2k326twAo53YP1edq18iHqTDn4kcQtFkY3Zqh4EL6bHhY9g3a",
  "key36": "4jYTDY3YFgB3Q1viMStpRpoakMswiMH31jXDeKg2N1gcXFLNJtfvaG1n8muV9o6zye12rtjSbzHS5vTmtHRifEMX"
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
