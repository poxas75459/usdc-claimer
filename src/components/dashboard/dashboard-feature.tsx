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
    "3kJbvpJas667pRo1cLQH2FXGZbmfg5tZZP1WCzqDfSLad9yHDZQPWGBXgT24KWN3aC59GHXjbxntGQLXUCfRpc1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ch3bSmCDFveei44CmiU1eT1sjxU1tpkbtcj7Lgg42f1QpDAHrJ1jUbBkYy1jDnYyhFfxJh4LuR1fqdApQ4xSc52",
  "key1": "2pdhtUxGC79sgNvdeAxBeLYYUPC84TPUGs3n43KWkkk7H7oU3Mxiq9sF9teUKhvSUhwiwm3fC3ctiCzUPr3VLT4a",
  "key2": "5bMJvKb4EEjbpLPUid5nMUL9R96Exjv6cbwC5tNNe394Vah92XPXcW6nMoU2bBndMg6VuH2tAvGGnZKjU2nAp87N",
  "key3": "2K7SnXfdj2S7qFFTM92KAdSZRjmQsQW4pPkQA9x1eLVGFprL759S3Z6awyxyxxcZR1TvmvBj5UP16zBmFWBWbiAd",
  "key4": "4dQrwequWGDKwCqi54C8YJsCtXsQ6n2GoSxULCkko5ABwUyqKazQ2jAoiSrdEzyvT8tJQHjCHCaqUEMVkqeRSpH7",
  "key5": "4uXZEWHa332KMmr1MxF8JkHv94RCVa3Jo7FzoPJ4JRdPPcFujLb8tx2iVwTppMng6o5bL63Tc8i1VV1PuayZxYQn",
  "key6": "LYSmun5kb8HzBXPoWC1f2UyRMQzuYXxYFgcTmLM5BxP7dyuqCuH1yEdVDJSwSQ2ohdpEVNo33XMEotAehSsnuES",
  "key7": "4r3nzyvvhJ5yuHG6QfAMjasu9baoLC6axm82vEEYWCCipgTQK8FpzFXQDCViDVVYrE5Y8CynR57G8pmSYfh7LXzy",
  "key8": "3JD4mUgBfEovdh5W5iuLUtJzKUon2CZp29VdumqWf3JrbKE6jDLabxNKghxU179Q6gdvjf2igk1PWLX43V2x5Abj",
  "key9": "5z11cEhTmXN6TVdDLArWQnBQR5SZA83X6ue82vdpfSMtztyUTP8pugSoN3aUsMeMZXNBTD4mW4SJvXcWGAM6DMDm",
  "key10": "4bCTE3DZ6n45nW6irBwoAeuGuKYAu1p97fDNwjar7MJD4WCmnPRj1q2EXSuRhggDdipQu9XLfDnxn7wsSYeU8nEo",
  "key11": "4SLDdxZ7QEFfksSL9czavMVYkUK9dacdXLTJimaRPDUoithju6Ty6ACu6qfueMvxXGVCt9n76wpncMeTrw63mUJN",
  "key12": "4SDbqWjybaK5d74WChFZ1uZGuST9AhfuxmFtVLUe4jaiKTNKXQ7GGpWorzxrHEemquko3TdvfCThHfkGeDTSa5bk",
  "key13": "3cd55LLTVwrUP4SfmrW2B8NAkdeGPpvVThk6z29E1ejBjkfDHkSfugUJrNtwCkBFEd1Y74TM8ABcEQfZtp5pRaKZ",
  "key14": "66U4KkHaH5BtVwcNYiDMaTnyx7jH8zgKRohRyxAi5LqTxyTk2FHvz2sDk2LbTu5GpMimq3R5Dc1wktbqEj7QcoJE",
  "key15": "64qzV6n8ABq5ue9yQq2HtkHBUk3fVEMXBGeqeaHrcynb2dyXr6WuL41Tnu6g4pdHUZgGM42qhR8WHL6eRPrcLCZK",
  "key16": "2UoPcd93aaJ8LsjY5QRgmpmat5w1Cb8s9o9rtqJQsNFFxP6CCLp39rmNXcbdSWXCA3kLMXJqCed7jvLfa1B8XfXh",
  "key17": "4JCCRnnpdBSLooXCiY4moT3CfZUsoAfpmD6Xk653TYqQGd9GF3HysPDy9zLLm8Mj3vHcC8Jwe3PzGdUCqne8bZtz",
  "key18": "3phfcdzEjGXRzSfESwXZGnF26zhxz15fKHimfNck1eWtN3mfgKuXTvPJY65ij5Z469CNhauHXdSexFLSjfXNWBw7",
  "key19": "2psC6NXbu8XvBBHnJaTo5bqX9uT6jCwDwnN1sPtmEktn6AbB7LtJwWFYUzh5626TmS4wbvPVE9iYi5vu5usKYPbB",
  "key20": "5osLWrcYmrBxj1QBXEsK1Pf9nX5GcMB6uXEdcFFMrauWRHjwhZVvQsXGU4JD24m4pPorir254pcE6m7G9E881vEf",
  "key21": "2MxECYRGWJVTbUfyKcmmWZFXzPCR75HWjPYDuu74KtRH7wwVAYqyVag4MVQU6mKEQoZ2bh1Y47mKUumpxn8hQy42",
  "key22": "49pGuxzSe6QVvAZbnJUUbJmAGazMuPCGk4A8jgv9JuPtzDtMeCWFqJCvNECiWBZz1ndLzZaWzrBSwtyZkmskQa3S",
  "key23": "557TwMy7vC6VekFjLHk5finiZs8xNxsrnCyuy2AFtoZLFGEc79AmWNT2L1AsmmdqxLVJvXxrAXhKy1tJFK5nTiqY",
  "key24": "rAKmcCwTzvmftTNQjxVgXKrRRmoFKr8mKHejbCVSu3pWM6b97YrnHvn84BP6vgXrK332fS8VqMsRysQVbx8F2P5",
  "key25": "66grRgUy4rSgMPux9aNnrDWczehMMJehn4MbP3WMzuYi3DVXbrZ62M3qWbaDGjUrpBpovu7bQ66QpM2FteAacE37",
  "key26": "61R2gZEybzssWZcgcaJ9ByHNEtTjFTJKJhA5AUaj6iH2NwCteMJXmXQubHbbi2q3GLv23AJQ82iKmR2dnfX9NCPT",
  "key27": "46GiLMjQ5HchNoo4nJLBdqRJYydBq1fwbqoHB6P8ch4Fvb24CobzgS253hrLdSyfDWRuQP4snVnLy6UPKG7e53RE",
  "key28": "53uRrqrijSPcPFAEjWXD7Cq533yo8h1ugCctBGbHiPoQteDq5yNreFXewopc4Vf7VJoamZitaL95KWf23M2Qgmri",
  "key29": "uttZiKcXXXsxiPiTMqRWozJZt5hUDSku2eNvmAwnE5DECKS1GExfunrJUbCnjGnVQe1zcpA1pRk5JgCLsxWXiin",
  "key30": "5584qLorLB8wHFDcFCG8JTkTJ3r8eybqxVphGPLPuPHxEu68cvRxNoy4cesedcFTo2hZswbJ2gvJ5AJ32hjzpzEj",
  "key31": "3fTp8qURZKWEs28r2UQ8PicymVeWNmUxw3VL4SE8tpd5NyPty7dEfdWjicK5AY3VkRShrZHfd9Z8ZNvY9acGqhr6"
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
