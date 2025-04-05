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
    "5Wk1rbBeMySarsvGU28MWTKXBZPVxk8HirjKZK7jtyWVyBYCCJmCNWqWiLkeSvSVx7QxHHPTwekscKjUpr1k5HWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57fVuGz1E4C8YTk4c91zW8rFhrNrptdf5DKCywaj2tTqfhHW55R2HxJ5ttwmbqkPs1phM191QqjbPUUXor28CJt5",
  "key1": "51R5FQbc5wpRM1UnpSMe28xanqjBvaw64uAwQMDca2tb8p7cQKjDds1Y7omjxzgsbN1EG3fV7HkW9GUtVbD6QSeB",
  "key2": "5jjZwmscE2NTsRxVMDU431FTeNwyqPo315C9neFobi1Q1zuXT7gZ65QeStS1j4RNkjRdpLxMFotwtwW8QV1FfgBa",
  "key3": "5EbKqFkXfAyyyMwS9NS8TXptNvz3gBf9iJQrHYjEqHRssZT212KHBnezyHNfXCPGVjpd84QTvqJ9vW43qgd25Rwh",
  "key4": "48AqUnStnL2Xm71txeeDAZvKxiUaSkWoDhzMCpe9FrSCLzn26T3ECgC1Mjqn64F8Cnt1AR51CihawbxLSPJNBUdd",
  "key5": "2AjLaPqjqTtYGayzzxv3xbvz8XCxGP1uBD2aSJ4p7Myj2Wj9PG6WyAXDQjVmuoPX9oSXpFsWVo7gbqSfx38xvbYL",
  "key6": "2yR6P8DZ4uQJQs4633yGJfpgLyixcmxNuN1QmN2NNwhDQgzgJQtuyEgJL7cfVbWhed7e9P3rJMY2NZXbe5n2A6yc",
  "key7": "4pGnhggzv5UNm6bYo2uPosWS637JorBECmTmTxkdk63VEL3pbJDeHwuz5SbcV3paZtDeHGKZnGqVZBHhzD66UeQC",
  "key8": "4icuv5thVmxwmbzRFFu7oNG1SB9eeonGgKe2frHWHTL4JjZBPMjxbp7MYKNg6QCA3iNNGX8P9pTL71SfMRwXRYPc",
  "key9": "5aTDtQTRLDEEkFMbSiYckt8UQNyLrHHE4JtGuNHUcUVzayFuSQnkAtWcCdDVC1BQxfbTBhLVn8sbCHqPfk2XXBbp",
  "key10": "vniJZd4RAGCKbyAYXWoR4SvzC64MsoTCpV3c8VTjRMtzFK3yFfMmWWbknaBtFTy7M2krskFEVby4QwXpvsWsHNL",
  "key11": "41pMdW3ewsgav3tJ1RvRWLmPnEfsDejCTDRJEQG8FGMsoRQcZJd4gA7Gp9muUPYTqJiacEA7isDj4jhrZGuZkg92",
  "key12": "4ni7XD71ijKjbMSPtgGb4QxFXBu9ZykTgpddHVu77XXqhYjShScJLtdsBYeVzFePgAbrPWUn2ydYrZBtiqU39kVK",
  "key13": "5inGvm4in3bfMUpfh1VQc4Nd6cPPTTRP2YoxZm3wTbvG6uE7m6avmsPU7AYSmT6ojn68vrptpe4n5p5gXXqZ5JyY",
  "key14": "5EsRc7zKM6s2uMkEoYwrSAYPn2urR4AoawXXNaHK9dQJYgi9bG4sYkyXWTjsvW82DNpjkS767qTnsdkiVmti3AF2",
  "key15": "5Tm15AnJDw9GYk8tJ3bK3kq6ZGwG1ScjFBKUB2MCZBEbhJUPeBRFBv9HNSjcvfrHLx82YChtxonGDZ8WkBZPNcpQ",
  "key16": "5Y5BamojEcqzCBBKDh182tWmtn6g2H9gAcZa1muLfb7M2weydEq9DGJrjXot3YMyXnZ276CkD8KLSACSqXVkzsoJ",
  "key17": "2Tdpx5sDALqb23zCLxE7TSfdD46s8K1rWwcD7mayrFQGUrUqEpg7Xb8GgDxNKkL828FsnsQQxrXG7wzmQ34hJsdg",
  "key18": "2rWzehn7aXfFvUDNx8dgcebTRbjiNUEExeveEEuBg3JPyB4AzncLHHSz23iwbdHMCnCWa2GsAL7w5Z8zzTn3TKas",
  "key19": "gieu6tajdKBWZFzfKjkw7mN8PtwM3RV5buKXmRU8y84CJX3ReBba4qoVAGtVD2y8LQpUE1DUut83DT1eYXcrsMR",
  "key20": "3gj2s64yq38w3EX4PyHaE6NDx8t3NBy98RqR7WfbYuqnzLQtMszucA7A1FhYoUD5Rpy9q4toE6sHqeWK21ZFXZfB",
  "key21": "3tbmhXPGf1QEmKAVkQQBxTbZW85VGpMAXWX41MReWbvpsSYb1vUJpiUZuF7pTYJNtPpHwfQ1BPpu8GGPwRVVmBvq",
  "key22": "4ZE9yWCpfnzbWa2S7Qi863zeD9QdLt2BJ89YPjbCsSosT8Uhuhh1eSn8xsPYE7TUETL9SboeXyB6oEctg87pge2k",
  "key23": "2GWs78d9DhpHTPeZGRCDeZUvYYm6XVZoUryhRrE6XoqRZ4oRiDbn8wK8vM6Gy2cUD3NwCtrMMborhcE18SKoCF7n",
  "key24": "5RXfRbt1ZvYMQicyeosy2HFyQY8STf48fKPEhAuhkPNrxg1pcMyApSATJAe3LFjEBnKLTjKAtwq6qxJAFKJguuaw",
  "key25": "5CgLx3y56CaHTxAo2xyMkyST7boJPvGfnwJPoPJgNBfPWkkK2Nn5bNawg9T8mRkFQpvk6PbG9uby5G5zi1EvUhaq",
  "key26": "2B2so2UJZWPtof8eUifFfE7CtNXqHYeBX7H5n4KsmD5aknSDLK31NvGo9WT6HeBUtPmFu4uf6xvxnVaYbu2NnjbF",
  "key27": "FZQtJXQTqMaWxeg2ePtcNemYphsCCsnnoyPksdX7PBKtejbU6kqNDL22vXW1M2ZTCh9N5VfScuNeHGxjf2omytR",
  "key28": "3ccRLwzogDf4oWhMoJNcJKtpcgtRSxDfqKMS8226MeQKqBV9ToTNcE27BSfkrcGyDCB8qqk1Hi6xG2gU25J3XLpW",
  "key29": "4PZkierhnzJAr9SA9BqXRns1bCJvTHM2QBE2d9rEWAMDraFHJbgWTvxigR4gFjEbVwrdF6eVaoUozQTUbd3fmUo7",
  "key30": "3YJG2jMeuhDBCYrHgCvH1CSzXpuADAk2sEg64t2Y9NvgkbCwij5tY4HjYrzYc5ZjNh4amunUbFSVphoXLKBTPHX5",
  "key31": "EMwnMNA4rHLhNC2tQQ6DZBma2AMhLRQJwNjUQNVU74dT8nxsTwR7rV56MW7ZL2j8XkC15XKPByX9jzzrQooc1j7",
  "key32": "4M5bwtPfwRpjJTyidW1jGHbW7rYV5RKg4ejexuSh1jVCQSakG6m3F3d89QuHSgGXkaHxshBDgfvH2VZEa43U17bp",
  "key33": "45oS7f7dbmVtwM8KEaf3qHUtJGbsiKxtFa8gSAjvy7qSLnaGEWg3AkV5jVB51G6NF2QieATTZKEi8zgkTWpgWXkx",
  "key34": "FNQZppxvU4b7ZijdRaf9BvNqPGMhD9DbzY5GfvvXH2wb88z71M9vtTKfKnyYzTJvs3oEyPdqWQxA1tj8RbkDgRp",
  "key35": "2qvDGWaDb71FhZptPfnytfHqNQJXN3JUgaUC2quLY7jPH1mrAp4a9KDaUEoZy4gUG5ZRw5KceEgt5d9YKFMMy1gA"
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
