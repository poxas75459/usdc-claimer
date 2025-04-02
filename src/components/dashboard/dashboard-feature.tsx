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
    "39ygXtjpmLz7BfNZSLguoX1yykPA2SNfe8EqwzS6xsjLLGGPEDqzX3TrAEWktPN4tdYqg86YNMaK5EA9CARUrkwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Jc1SFyQ9TwXXdaWFGKQmk6mY1PAeXpJMa6xKirTCcdGQENiXUt6GR3sPYfAJoHkvjCPMgV27XG6SCvJpEpcU3bP",
  "key1": "ftirecmRYeMrNRSGt6CHdQteRUmg2Feezrh47f7CxJ5buRzmFQbtx3mGapGbLNYD1L5asg6RCHrqomhFdSdidEZ",
  "key2": "2kNmiM686Qu9pe2trr8RPXA7fC5rqB2w9oPH3pjm71LVwKRN9ABVVtCn1iqo2xqVyFnp4JghxK3f2LgcyKaq7hPP",
  "key3": "2AQLprVj78HV4ekdkqJFKESB1tgsapS72Syn5DLVz3nGuWAP8cpv7xHCJT35pTLsM2g38WcTTTvxSzHhHrmXZuxh",
  "key4": "3nTRZYHLY5veegud7c3RumUcYPt2qibJRxqT5iFGhTVLvKNAGU6KZeztqx2nGcsZ1Cb4Egb7iLRNsbQ7mtdaBnr2",
  "key5": "HjgVDaAD5ZnUW1e4b2m7sy61qLosGEGe5sUAm2mjFszDBvQfqAL29EK6e56KXLkwFQ7Ju6UD53WKLvACUnxvq7H",
  "key6": "4XWthiRm9DZ7P86j8QmNAaNjNYSEFqXjWRAvLyvWSSZYiWHQ99HywGqwqKZuRzsf24MoAcczUt4XREY1RD2GZUSz",
  "key7": "5AR2PxZymcdKqwJ2hYS8HzAF7hBUpCR3mYuYctSM5QmuTYCwVc6iH7EqxJhP5mA4GqMpeGuj6yNgYWyQbUtQu4R5",
  "key8": "4yLQ4S8ACgNPR92iAAVL253k48U6Ew76Qps7X7bhLhF5RiSpafKahKDhBt9syhZC2YcUrUrTtP92JNDLcPCXjn1N",
  "key9": "4bdgWyharmf88Mmc7NmXA1odq1k4ph1rqLTzfdtXdY28jA28AZZayxurkSdUKYURxgmeK1xTwWp4uScwPKCNAVTY",
  "key10": "3MNXWZdbG9hYQURn1oX9yDczYYCra2EATqK89R3gSznxsLF7R7KuuLun69ECP5Smjz9vh38yyLJVt4Pgi9bqc2BA",
  "key11": "2itY2WPv4cyratkicz3iZHjUUasc2zpEtMam9qoLcTSRVS2zJb2sWGv4RTndiXFiJ4mHXZmiYTTwVHc6RxLCpxWm",
  "key12": "esrrARgvLKv1WGSCDS1gL9q1BtYQwVy5UEgusWP7Q2nkML7T6YXwpz2wwLD3c7YXnttTirS7jR7NU7NyqwingKn",
  "key13": "3GBoe8ni5ZJ6iXPpXahNMwYGbYHNsYydutpRpBmTmbprsx9ZGvvywSQD4hS7feoKiPuwShwf7pjxW58XFsMxPWZ5",
  "key14": "5TCX6mAaUnFHsJwV7KApPvFBGHgrzhu2vyprmxjdUDg8x6mNhzjZNt5PNu55aZUn7gW6GBhhQ5EYwazw7yFk18oZ",
  "key15": "4HB2cTvpnN9R8ntaTHEdJr5ZDupyiqJUAh2Mkg91jyy1NbjtCz8Ta2KS2uvooMoaD6QHbntHoDektmyij3L29MF1",
  "key16": "5aoSModvswX5xWZWcPPkmp2tipFji65hEKKKiDKcxKnXEqdpkbzptdP1wKqmS5xLoowWA3VdMDE58czYYqAs3ApX",
  "key17": "3TrGVCojEY8KnSQoYZ1vzh7DQ8DuesdmixwrxApHMytf1pNyfDNmtC91QhJPxzN2JH9zwjiTkci4LTLptsAXBcWP",
  "key18": "242jQaZxnT8kuKCpBwW3Yms2qHXS1BKEa8MvXn7TV7HZT4DcvGGXWHXUsmtTq5pdmZxxGR7qtRva1yFxapQnjPpL",
  "key19": "mKt2FYf73jHnkUqRy8pkTLRzy1AexYYmrjJ445tyTSu9MqNvRxQY94ivgjTmbTQFvcEtUkZ4bXdPznp4ZfP8vHT",
  "key20": "s5bD65h9FVXk2vWgfdyNw7fvsCuBET4esrk3YvrvUwmA5UpHMgbj37A25GuMehFqVRAupvA4QTZpqbU8fnCYtGZ",
  "key21": "4Z9b1Yp3xKY1EGPEQKmquFHyyukqDQiDTDnKKuJrAkd28HSSVBvd5a1nr5PkGqXz1ni8zwqFriWEvomk9cDigLZW",
  "key22": "fUpX6KMqc84Dt9i5oM7uX6tKeK3xotWPiKaHnGAJNerpi3stKAMn2jrmHyuC4U6pQUSZidAyfuAef1cPQjmGwxF",
  "key23": "3arajmHsSCDw74JVyub9jYawbRCmnNzhMoQGRpbjFWqj3SWPT5LJJoUaL3aEWLXhXUGAnQ4YjqzTcDH36Zirnq2n",
  "key24": "L5MDkAUgkZU1bjrzyY2SChGGURmqudKDKLZc6TsD3FkBXuXhHWRLmMLPLS9nCxkAtgarEsK8FFFKAL3Ahi4nL67",
  "key25": "24uDKXsSruQEQxKGYf79w39yQmh9ihzcbhmodgRF5QGZESPkGsgNvEPfEPcEt1NHDjUdLBTzLQhp6o5849VP4o3q",
  "key26": "35L3WmmGBS5VVD8XeEj1MWLa6KXi4A1sWchcEABidaHf79F3DHsinB9rvHS5BgCrkPW6a42uQYmqtup5bMs9XUea",
  "key27": "2NFKmVJBK2MUPKNQJ92D5NdUzGBdWS635LaG9toHpHaCdzmaSqErWudaaiU5ZnS4CHXqyadCanAAR2FrkXe6tHjd",
  "key28": "4gzoRNM4mpKSJvfU325bMpesbWhZ7VGcAqGudiXw3JGVMgBVcbaT813M9YyKwwxNCaNtbM5Qi9JxxPceVad7PtSu",
  "key29": "2zM7AhKerxM1LHUMQKeUYR3GuTUwddbgnKrTFYC2EfcRkCXyH6dRHf5SmwqPqQm4RqVGwfAf5eqey8N83pyETv6X",
  "key30": "2FULB6GyNiVMLJJ78fQiz4Gozub6tmCDgaC87kpMe8vgmMrEUBXG3ZZA5EvYztJ132N4Ehi8ss9KKjXYVsoyeEK",
  "key31": "mhoSBNhRQyswFbdcinBrBm3zZSchtQ7g3erJCrjCcd3NJEtm3m2fZjHsGikAiAchVwXC2yFjmnFHc8Kib1WqPBV",
  "key32": "3o4cg568qb8iRxmCu7KZjiJGm6YtFp669Cd3YzFqguC82RTfCDWXbXePpHPwU5GzN1T8ZL91Qbzm33UWiUGLyook",
  "key33": "5R3ozfxMWq8HbUPTwRebCvkUEwijVUeP4hoeZMVWfCRmy1VUoLpPWKwjyxP4Q39ue27AVmwCN7MUqeHqtjdUpFsQ",
  "key34": "5aRctKNLB5HWHXtbtyUjSsWLwSJiPkCMS5t4dDigs4nfHvH8ew3CC8kLdxsKhB6bd14zfpkkDXAXGJxbBAQAwqS1",
  "key35": "4LtXLZCUHXFxaAQbSKRn1XVbCbMPRhtrrHT6tuUwoz3Fj7HY4xozkYFZ2Ld7JweHzpNQwjmMfTpay8SuSnDpTuve"
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
