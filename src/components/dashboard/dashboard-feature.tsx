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
    "29KQTKviiYjofPEfF7dS9YEXQrtwtJ52x8jvfCNpyWrYjJTTcKMMhYYYfuATwU24SPPmb12CD25z62XAoW6kYo7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28gQu1RfhxAvE947xX3Vpi3kL4jvj1zqCcdoJRVHTKY5K5yZhAAt6RV3jVtn6hj3w9eLsPxzZ8K9YQ4RKM99ZeRD",
  "key1": "2bcYCaj9tCs4DrPrDMXNzjtGFxPnWeV2LxNECXgi1cBbsf4BJLq1z7HRM8EnXWaWP12mpUaBqS71QzaftRXyCc1A",
  "key2": "4PqqZ8sFBiTR49Dcp2UbRd5nf9fBMqWnue7867bgWqV1eBt9KWWyD4r9EK5L9BchjJMSrp1agtkoAUBR3ntSQNTk",
  "key3": "3Bq9jWQTvhSBac3JdmviCvahhYerE9k7HWDSTEGHTCGsHNVz6Zwmuxa82c9iFedrHLiqxvFPa3UsvpM3X5ewnPji",
  "key4": "2K3DbgeU7xEQNG7aX2m6tjjXnP5fe1XwzwuGuTjYRaBrzASSVnA4CZy6CcTwxKDHYZKsE3vWCCb6vS1ffqyCujib",
  "key5": "2nboWb3PzApek6kzfrtXeJKdgGWBLe7kgYgUHLtGobFNccybKootJdvpHAAAbLyW1hcoWcctEqWN1ovvZbG8e7f5",
  "key6": "3SGYAbRMzD3GqsVcGsNW43jGXHykLM4Lm15GqzrKDKQdKSL724MDUUSX38bSjgYVta6TWDtwQY9Gv4fQthc5tG1B",
  "key7": "5DriWNr3LK23JsWHEaZ3f6zaXLUafSry66Hy2b22cQuQEWgpg1mF5enFFmK6m3itJeocfmAvT4eyzchbKSTuQie2",
  "key8": "3FtNpsKRfen1V8pA7GRCBZdUohdHNkweS2k8rGRBtNRfMeBsuGDbhh865Cgw6QQj6DtzriknQiRPfaUP6GDPBmyt",
  "key9": "3zwwkHn3tYBU7bnEsYxCY1zNh2u9Upj5BrnxoGhcHSpTxvUEun4UyEUY22zFrW23QmP9wz6RNdCpQKnyLEeNxWEb",
  "key10": "4knLsteyFvXTbzEZPtMyom73LuZAJKPv7hEBY2QokxYSD5jRy3rDmegyMx63p1gaFnkx4yeFwTHL2TAmGGBERK64",
  "key11": "4FACf5Rkm1WttPXuv2YLi5gaAEEMjhqNb2TLMV78ytPmkTBACqEiCBnNKppH7XFC19nv5gy3BSYqyrn6bn8iTot2",
  "key12": "2Va2ESMBrCVKvstLnqZL7BxDr1BpiyKDw5r3h1rUwKKF52DCeRAKh7gUTjyNS5FEY7Uq73KkJY8gZc6LKYKS6iTq",
  "key13": "2gwLLWoFAXTdsZTsDP7RsHWvzLyUGTCGmWeqDyjAtXDG3wz8Q5fvo46C9ityG2Yxocg5ArgPVzvbpaFWGuTL6Wff",
  "key14": "3zppDPcGjLYeJbUBxz9AYQXoDdryMUB1ocnCm2yLj2ckQq1Uf4MzrnVtBpM9DnwqCwab4FnxbgXyL8tMyHYtgcKr",
  "key15": "LDmXeDh4L4EW1ZCmf7q9y9vp4Z8Tmwrhhqjb53Rskj14h2SgkkyQWwVbRcTqCncKpjXLYVf3mGYDkFKa5CXcprP",
  "key16": "oww33PyngHBi657gxWSHdDXuZd1jxPsRaauSKdrZaCc7xSWR3YyXEJemAmCMCYq6kArLDHntutRdoLvrtttRAKn",
  "key17": "3tE7rvxe8dbqdd1327wcqSTeQy32xCQty32KtgzxJVKjGuCHwQ78Sp98aAV48v1U9gUZUa3dGbCiYer6VG5vFrZf",
  "key18": "37NEJFS6FWdR3LJwgrcfGweanq9sPFDfKN2VBD39Ro3HyDU5SC8eP8X3SjHXxb9LTcEX6FsMEBeHSQZPKKbEUKL8",
  "key19": "XtjCwqsq9B77MwiC2JbdfujyZhoLUqwE5ty5jvyznifL2XjnCsaDHuNs12hke7LU1EBmQzyjx4R8qUj3WH4JoBa",
  "key20": "27GTgnBLS3C4Lb8VE9AJMUDS24bJ7QdMwSTk3cmFo5aSR8GG9NiHU4TkhuiWzc7w4PMhw1K41yHnGDoKKCfNPu4R",
  "key21": "i9o8jjYt1YUaL2VxmKYMkg6ACyGT7vpPh7zSRjdKx584WwuXMgqSPUPUvYn8caGpNcFbJcnSWuEmtryxZacq7SX",
  "key22": "4hZ34ZZzPMZxLVEiigmYU6ocda3goue4TRe1X8J31Tiw7zVWiEmffwEAcsC8DNR6QVuFdVQ6nR9XHd55ZKUB1Cmx",
  "key23": "64bZu5vTzcxnDTNBw61JXRizurC7GDfAiStrbrGRV8sYyiQ4AKqrqb9aGX1CMyhpy8CF4cytng2NECT8YpGBf53z",
  "key24": "2miGpQKBjwJ84RP12hjk32Lh5avZmPuCfRXbTDSZNXija7YQpBCF8NpCGMYsAVD5obHPME1CH74oXFHfRSJBsqT4",
  "key25": "2GfMbaCv1BR6Brrzq6zvAaLRpY5dsnVbTpNyDmuexZhx659qaYgKzF1Y46YdSiA2LpASZyRMwdY7VGTG4qyyYwvE",
  "key26": "5jqbyGETmBMBddvhYGVm7i7fmErYNLEDzvjvPKo2fnLWHNW2QKFvCRWCKmn9Wt1Bap1xP3CFzrp2SKeWvnf9d9qS",
  "key27": "3Jhudaeo2hEnBK4V3yvDicCfbykDt2DwsRK8wgiCrMpFayrRdfBVjGoN4kJoqs2zhzf3xewruycojAksLXn7XAE",
  "key28": "2BDYQXwkcWuAtjWmAfaz5abiiNs7cTq3huXSdYSw8cvVhNpTkq3FLT3ma2HHRoJoc1SPzAo2C8J5CqBYVNbrwieH",
  "key29": "3y2aF8iJqXqDKoqJc3PLTS2ZHZLxAfKmCBfzAXidghaC8HF9PKBidSYbSUrhjvh6YAA2cGZAiKQkxmVoXXHLuc74",
  "key30": "3MY2QNuzzHPkLrn5QPw54ZzsMvE4gozLm687uk7RagSAaQytKdfZgWEarApuVYrjKjBjjncyDtSr74CDvdKKabmN",
  "key31": "xRLtgGrdq4VCqbb6gmMmX2QEYYCPXcbU5pgiqq43VhduozV4BWPdjdhfjWMjT7Z7MEwiQmg66qg6SZfrbragzEU",
  "key32": "CwobtKgna3zEuvsjGQvfseFxkiGS4edTtLRX68ULJ6RE6Xx9DYPzkxmBpoX2UjD2LRnYKkoEgiGE15jBDzML1mo",
  "key33": "3kxtjLwdPidkT3NNXFCjYLc6XbUUwWq9h3cFJB9SRjb3KRR5Vk41uwddjPt9XzXYNCVza21PezoWQtu7WzDo2i7d",
  "key34": "48ys4Up2hsGwvxPkGsckgiDwMNR13M3ExLncc3QW3o85Joq8ZmitETzunYeuFGx8eRnw5jtNbKoAxACzJXZc1heX",
  "key35": "UohEh9v93Vahtuh9HGPWvTUoJebcmi5HNE5wBmvZpfwpYVThTfe6wbKffZmu693c4qozLZHqTq9HnnV3PPKeuNU",
  "key36": "5aLHD3BSWvP8AWvCSFRJ3hAZFxZamLtbJBmgsirqfJyHSAmUGtBGovxpuJBvWzJmt3K1kGbkJFdU4Qqh7xf3uJo1"
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
