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
    "28mUnauMJ2ErMiGjBY2BZhgLw15T5XrHaEzJgDEyVNxLVB4uNfwNBPJ4s1A6YwifoLyMUN2fzV52uKdyLddMkUKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nU39uBVePUNwBNxXs9sf3pDsxqLszhiD79sLLtHRmWvh1Aj1cgeMdXCisxDWjojSDSY5Ba5LSEgnJByGtmTNxcG",
  "key1": "2rp9PbRsM8ssuTfJJdhANDFAcdcGXLPXPEtYs47K51ymcd9Px5Cv34G7vcn3iUNisNsHXGcJqzCodHbt43nR81Uf",
  "key2": "2E7eq7JLSji1ffrojX6C5oYpTdUygVr7Wa5t5UZMoBW3GvGccy2mgDoRDpF4bpyxs9uUFSb6kp4gyAnqgS6tnWxX",
  "key3": "3cUsmbxHaYCRbs4tzskSovKi1vypDwoxQQ9dsWMLV5oLQiD1mFYreL8SjRqBhKE8ZWKv37tCHRhWmVpWnRrwvywG",
  "key4": "4D614x8Eekxv9hCifXZUqHqnAsijhYZ2vRFv7eVbasC6bAnUTJpGwvDfxGV3WfAxiNpBrYUVn4Vtpxxc6hCauojs",
  "key5": "XSUfBjptCFJKJXM7YtacR7HsGFgwjGw6cKk39TPJLRfzh5yWPNNvAFPZ8EZuaVqs5ahYsmttQajjWZQraUC7scn",
  "key6": "5grCAZM6EJsXWvGs1s9UPmCdTwiu4qRoEAd8RMTj8uMqMqfmLFZsq4UHGrYVLiAu1HBcPiJUFtbk6Hn4DMfMK2WH",
  "key7": "4HSCAnN1xqEW8DYnC63ENNmJdjMCQS5FnMWCVu9XhzmSrfXadv5uwzyFK9DLqJnuMBcTTCDfxBFrUhscw4gM8RyU",
  "key8": "3FwjBpidDLhtCu1pGsLpPsYfLqjHwxE8hNXeiqJbwPZz7xLY5rAKX64s1j1XRW7GgZSzMx1hn7UkRTvHad468fXc",
  "key9": "4UkWtu284hj3hdimJmTb2qse6e93cjYYask1Kgvtw7zcyqoUPyE6vNkPZwtmwqfJVLBUYJua4QYRaextLsZSW4A3",
  "key10": "ruR3CWE49ALntTr6o72T1NgSZwJHHkiq9wd6iL1auuUaccxNtXekM1X251qEp2Zp8jsmFJRmji1cQe9c7KZmNn1",
  "key11": "3HLqHELLzCKZEKCMR2zaQgcojdgGLdgyAjZsAam1XsgSTr7P3yZs7KyoGKc1UQADsNC1YJ7DsCpJg2UkfbDBYT24",
  "key12": "3Xnk7WnGzESVMwBeBUBv4B5GHumS5PxXqXmHvCXkN6kCTB4PPNgn2aUhsHHnJCSqP7qQV4wFtkk3L793uVgfeVY7",
  "key13": "2BbgNLy8pAi9C3CqaiLWBcu3XDuKxHPuWL3gJboJBE6L44GaBD5Kfzx5KuhTQJTXQJ7tT8BySxUoBEFy7xwtyzio",
  "key14": "4uu2yStkMXdXeuvJ5zvDioBSvg2qGoy4GPXxbeaM3Us2qZTK7woBK3zur5dURmKQSF1acycf6iAWSBHJB5fKohh4",
  "key15": "3qQVRVBPhf14hGiddBs31Tikc42KiY3PTMFTEuJS9zQxCdnhkLbxNi6t2cc56JcTRnK4dgovSejWsiLtn661BHw4",
  "key16": "35k8rHJoFfJ9uxjo51UEFbpChAfm5gFRFzs694vt12ZdaMwSGkP3Uq65V9GdxSepQqTpBTpNAgWmQ7q8KfeatqhX",
  "key17": "2jvTvZAE4LACUCuQbQjafG1FazRhMuHehnfJKTCuaey57FcZFuf9TJaix8Wc4Si5xpLrXvJqsxNyLcJ9STQso3uc",
  "key18": "CKV8UU4oHJR1PMeAYwvxJVNqUfm735zYptb2vaN3X8vfMhzeh51mo9agmpeCHhfS9sqHtXiMDMMouPDLBVnaiy3",
  "key19": "3atwQG2qQDZdAdbHHkbk89nqcSGLTegoubGt5QnJihfDbV7SFxJDeoLznMaTrbm7pJLGgJ7bQC62CHnirvBkpTxV",
  "key20": "26n9hHwtHU8ts4FtZ77BzHnawZo6Q1Nrw7jzsEPmDCnKD8BpiYLWxC4RzpnS3YkaXd5pr8hnANB2ocQx4hap1Hzm",
  "key21": "GgKPvfFa7yHVzTCSDwyy4bjg4FanCCrPCLeL6tTrwpqb29fh8yEx923wiyXAN4tRGC4Ygmbem64Bn89fK7gbFVX",
  "key22": "48NtdEU1vmHXgBCAUi62VCyXfFwxZC8MNmB3tvNvV3xJVasQdYU4TX5nrVrnFjZVYgBNE6f2khGGP3VLdokBXURN",
  "key23": "3mv6pGJwFHARK46TYzJvTqGNufz4g6RWM8NhF2RfBvxVL4cMKDS34fc5VK9fuWJopN35P2LuMJJsBTwghcF4Z4Ga",
  "key24": "4N1ZAMHYHAChGPyYFrTBVVtmqY2w97HcNPtUnFbvYKUjTdQFHrMiTHKfYdjMHwgXz96ovescPLTefEWkdrbYRibT",
  "key25": "32qtzWnDaKiyzmbtkUep4543XKdmr6JWiJSi8b42VEdJZSd8D9BwFyBMb9m4BpvSStB5qrhgsbAESAsf5vLE39ay"
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
