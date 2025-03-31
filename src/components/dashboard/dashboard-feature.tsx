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
    "4z7ALcUkFoXCYHEyNg3orKiTmFKxm2wNgUP99A6YKd3ih69583g5txR8vttz9JHqx5oaPymMvFWHbcSceSveBFvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nspwZkd5NehwsTVe4AwvXyNuE3QrP2PgdvALPDPBgv2BQ2AwhJmAzRyX7roPggRo6qkG4e3JVGZ16wkr2WfAG8X",
  "key1": "58xMG5jWbq7cCjznE3Uey89Dpy2zibhQNbAExZMiDKnuy3JWmXLGRJAVG8ZardGG1D8BRMLkEkpTrynGihCJMCKm",
  "key2": "36C2wcuJktUBdBJJtQo3Z6cvPojd5ReNt3tgU3VAHG9svsTuQdctkzCqbznLNcP9RTaRfqfq2yPWbcrfehPffd2U",
  "key3": "5KwdGw4LZsJG8mZvhavDfTFPBD5JhuEjtAi6By1f5cqddkVqPLudEMgotdNH3fEPQodZrxc2vXBcZJy1BQMuztyp",
  "key4": "2x7H7KxmbH96APwD7We9oNUQvKkELNrx3AtYtH6g2uvBmdtvd8bN5GS7PdLtdGPWCXKUZmwQSc84r4Dkq9hd23pG",
  "key5": "4uks8nheRGxZNKw3YsfPvdKrMkMHMPKNb9jqdCMudGBc3mpSBxT65eNw6547LgLGXHjvboMaSAeeYVbQ1XCwVMuM",
  "key6": "2HEdfURZKnM6AmABHe4u7JpNfkkuZts1KfGVnCecLcWgg4krf1zUFBLxNRVGPMCi9UFA33cBYND9LsFbotdQHPVw",
  "key7": "5Bzz5B9nYPyzQcvD5nVbhndjwiCuk3aZyHYZDhH4tRoU8QdhLYLh6FhCUWaHys1YWdoF8zroqYFPzt6ce3PFRb8U",
  "key8": "5pf7XCAtesRP1Sv9auf4QmK3UidGZiDx7LmGPrUfN5XzS4EMsGdhewuwLoDRDErvm4XHRp2VwZXidBG9ek3ABxde",
  "key9": "z3fpL9TXhPmRF8yrK4TBQpyAp9953Q4Up84aV3hdxPfaVsH1tH573oFmHqmfHoaFzxk8inh5qE9EMLtqWYS9tnR",
  "key10": "658rDjh9GJ4CktGMPEuwcyn9W1J2oGd5GnvtxLJF5Dr6HVupQfqb8ZdqnqqynL2eLeeTXF2ejM9sWmSuWFjr9wzT",
  "key11": "3rpGh3mrAkhwThJuRM75QSPAhBHfFN3uyb9zKXkPjfqYZ4Um1CPjNVXzTutyW9DuSxkYsGbakWhMmoWyMgXzewFA",
  "key12": "5fZXprnDWL6T5S4K91FDCikv3AAC639PqiLb8vDbjaKYc8vwBdGcJjhrT2vFVPakHie5b1Hfy5L3XEA5N93kUC1M",
  "key13": "5jpgzNVqVLh4smq9HXDzjUFTY45hDoXe4YgDHt2CKcAu7cwMoGEnRHHSeVSk7FXbdVgM7pAqtMpvJqe1EVowMxBn",
  "key14": "4XLNBfuiiCN5dL2DX5rxq9as6Cv6s45izn8HmDZAzmzyuk3XPeaeYnpm1CqRBkRiPPBHERXzmH1Rob7UXhdbEtGV",
  "key15": "5S3G6uGSLh9eQvi2GmQgBhXKXNpksYHk4NKeD2KjuDU7iP92MVoedBSZm8nYhPHAkQcWpHNmHXYayiYirMTkaPRa",
  "key16": "3J2TfBBL3Q5RbeenSMaNjA2kmuU9aQvWmJaWoMNu2tdsnQtxjtsYdKVGpvkBwD4AiGGZH6UmGpJQ94KcPqJkSAnd",
  "key17": "4s51TYtLfU9ngWFnTUwDbMRGeG4kqzTJhJb2ND93FNVr7qtnVDbAtzrqKK92H4QXasST28QiVhhcdZknbZXKJ72e",
  "key18": "3JV92ZZrukvm3YUVek1s6s7whuUJcTT2MJ4iPccitLMXCfvPMVVSNuAnuQSbnHYBLe8EhLWna4sentd6QKr6Wstq",
  "key19": "2dNbKuk5Ef1VRqBnBn4gC6RpnenbeKtdoEkVwDi2gc2aYkuC7fgh4HKJXtWEhCSB6zP27ubgMexRiXhXMxsisgMP",
  "key20": "5QAz5Vsbjv6HriUGGnMCXyQTBfyJiCK3qCMsy9nERW41JyL6GBhYksRy4PnjK9HH533vPd18bXPjkzSVZhE6TpcS",
  "key21": "3Fq6qX38P4uNZoEtQsSHfBFzbM9VQqC8gjtVyeRrZJhEKs9raHNziHXHyhvQTo99BUxC9QPphsvAxSYCk5vL5ZhZ",
  "key22": "53T247n4QbXVQm78EcF7LLNbJtxixvd58eYZgCVtZ53euKbRAq3hvVBRH4czi9msnHYY8AXVNuUrKFiS2yRWipR4",
  "key23": "5fd4XtP6EEYLhVCUzcNSCuFZejPMknq4dvUDFzFi4kt1BfjMZpAmwkf4R1d8LADnGk8VqPDebzuVFHoPCHhdkEU6",
  "key24": "5PETcp3vycuFNU99pbiAYuk8hjBZ9aG8oGXmoh3Digs4CkjFV4H2vApCUyEGnkG7HMreUyM3aHoKwFxGAExzs37c",
  "key25": "35BkkDviidpjqq4RTza2CM86z3t66NXrFd1DfBMMcVGVNZF6AmkS8kPBLHaxRsUz5WtibwCoVQ16umnkVm7WcwJn",
  "key26": "2fJVX7JGTj4WeKfk6EsfPwrw8DTsao4SYxoQhXg3PSrZhe2ChicEPYFVm3twnNsVDgiS7cGbxFjk3bihJg972s5P",
  "key27": "2dNDV2HZsWdDuxMGacFJwUXJTM9vnY5pYnD6MoV3ewzP1s8Cjogxf3Wmebh7y3g2S8aeVCjez1jHQMF35seqNTa7",
  "key28": "5ykU1VVro3eowKz8RioxK5y4FV9pMNBMCqomK9hYZdwG6S6DLgwuU8uwZJ36UHMAWH8zvvcT9yZDRxX6uFgM8pUd",
  "key29": "2KST7xBsKuQxZCWEzToFJCsnpD4HGRtDPZyck4oc7ywPErHaASbMQcQz6NtAoFkiryfK6Ec2CW44yADwGigJkmyd"
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
