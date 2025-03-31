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
    "2WsQYmQnN6pbMmtnuLPZuwJFf3YtRLSCg6WXYKr4AAfYqGY26VV2TRx3hwRdCA7YqfVEvbbE52uhK7h72G4vdwio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aqiyjk4p9jF8ZY6mwKKx8hgUtngwki68PwSbfEqExDDHhKHGKJLvWej1KeFy3Ve6JFZ8j9jdLjW1iCPi5TSix1R",
  "key1": "2MPW4gwE8XGkozDPFTpjEL9wQ9RkyzckhmrBRSkUc7n2anarmd4yTnadmijw7JzuztxQiqqgYpcYVyH6nwZLtHfp",
  "key2": "4yZ7JpMvmZdSf1ehq9gYF1PEzNqJBgt1PghaGLFLZZfi5V2vgkqdKU72NyLtqDDMwtF7VGWnfAwbfrZ964Avgr5T",
  "key3": "nKZccUAg5GXFfonVDKcPAjwiYhiwgN6zb3ngYEKUcY3fcSi6SpDVxrAxfdFpw2cmKvamU9p85KHa8DV979Yb72V",
  "key4": "atVie3SNLxz19MqLVbwCoy35r52w8itLvKuu8CzfA5vPWxmhRNwVNFiCBMaDSZABoi6FxcBCvNPzNrWVSZ2xFob",
  "key5": "2JESNV1nb4BvsGH2QAdi88sXBgndztxGQE54aWX9NqG6bYu9TjZmv4Tuof684neQYyDoFuutJmgyFbbZVYvwu4YV",
  "key6": "2BucshHY1WQQdEw2Lv1JbUppjpxk1A4FMVmHSo4GXde2Vm7nHzmQy6ZFNmE7uvAaeekTugCx4U2NNjCEeveh4chZ",
  "key7": "5SQCh64Q9TTUM5Kvpgnp5LdWHDaHzv7qpNNPeCjHG4VhVUyG5RpKAmybspsw2mXNqf7wEGtCHaAoNEMZndChentX",
  "key8": "398s6CRdgGotMkAjqSWczT6hWqTYMN8FTsUYzSChh58FG8CiAsRWnzELTqsF9XN1voDzbcne3eRcLKX19DuRoNW6",
  "key9": "5dWhVxJxT5xjzTB6sQcq67n25oo6eTAsYP2Axk18J9XeLMUp5fAFvveeB6JwiRCBnCXEoMva8sbKLWMXFJPhz4Ug",
  "key10": "2Di1oZAgttiFJiAngnaJe5iHNAJUaSVeCi5TrPQ1ycemDLH6ziV9cBMVGWhb9XXRfpHg1MWNUUqZjmUe3kMDkc6z",
  "key11": "2Jeny9STAu4F8Rfd8oXxwmtpEioZms59d2kkzofb1GirRzyhh95H9QQZPHLJH8XQVc9SVgUFc7WgWxsC2vCPmNqk",
  "key12": "24REBENh9c5XWq1Y3JvtaUJWZhArR7x8FZjDLVmGNRzoeYvrxkv8gLNpnBMFSoLcZR6zJpa5e4UTZzcBCznnZAPk",
  "key13": "4BsRDL2T2SmMazXeUJ5CPK7dPe75WHP8Yy63L9WJLQdabPrM7UArQa6vq4smvaXn9chPw6zJTMmMp9Aj7HRiC36X",
  "key14": "fvuterzjrcjTTmE3iawbngNCQzoUQCbepS8wQJdFkQzfYVNRqYNiwumF7taB7F5jS76rj3hQ3dHas8f2KPJVw95",
  "key15": "UCKNpnCZ8QS8MRRE5QNzvq6P3d6vs1cnSJxfEDkWaV9sQGbi4q7uVPs9R5dx4QsDgFoBQRDSwavmvqEttQWQamk",
  "key16": "2ZeTcgk1n2eiq2xvFhWTL97cLy81UFgYNxEnGh65DfBad7cX31SHFK2pSbgqkp5w5yUdT2TTaEUQqaZbUsxD67JQ",
  "key17": "3F6TshPLUz5PDLcXRnRFo8wU8vUdsCR1ddaxseyRCoCQpcaaL4Fnn24q5z8nKiqfdnWLCDFWL1SGKAAg5vdTf4MG",
  "key18": "4nBohSfACDXuS9p8YAV15gGQ4cvpypNf1rPMLcXBz2pv6yfQVJhQGMdZHV2XP32YbuUks5nZJv2EFW1AzphYWm7S",
  "key19": "2RwnyPybbx5tZZ9pqeonWQyrSFPmkGwfFij8eEAeSdp4nXKsRa2YVGhFdeb37oKStstqsu8asvsg86mpVDNVqCcQ",
  "key20": "q3QvPqnQ3d5qkr7cmhgp6bLtSM4ar1LhSj3yPw7Xo3S1MFPmAGYTpqTBCxwM5j2hVWcvAp8zerk8DeEhzyLYrZM",
  "key21": "2XwQVUFFCGZK5LLDp3JawbP6fFi1BDsjRoiM4Unb7Vm25qdTe8jMojTiSxapkhMjm6C2d8awAjDitRuTy6FfZGYv",
  "key22": "3To3JS1u1TYokhzqb9j9cndagKoJPW8wCndxiwAP5hBxqg7nm8Pdupe5ACfwYhahesTCvzW9XhZbSz1LpaxktBpB",
  "key23": "31quQQtvCdcRbgYQvyReFf1tcKW86yyrWC1uFjScVrHVcVRDXTWXhQeexYaenhPt4k6GfGDUZqK3mwr1PrmMP4Gr",
  "key24": "4HA3GLRB5q7rVYmVc8mmg57eWQyGFgxomzGMzJZ8GLKeNbsBq4fcLHcVNedarGnzKpUYXB8egJ6eKdfMK9T6SR7w",
  "key25": "nKj4g8TRJBPQ7EvD5cjGhiz2bqgCKXwtuAs64KszwH2pSxXDYfCeHz4eey89YkRw1RMu8SfpKdM295fViudHjjY",
  "key26": "LCVkCJtfWcz2gA9AMPwEbMY81G56znmRC6LmsrTHs4RcnLWuzrJ3FCNAA1Xvk1AXiqZAATxesBA6r3diCWeUW57",
  "key27": "5Ni9PB7rf8jqyDsUBGPS4JSKaC6zRao1eJaqfwQsaurZj8KFaExZ4tyjp6bGJ56KPQDGTLX37rJu4iQxQNvRWDgH",
  "key28": "8C21dScyWAUgob1sFxCEHHenhYBcCf9hE7aDuNnuStExuGeUbsU8JvX6P8SjxgPbrQVkNPxLwoNWtye1A89oAnA",
  "key29": "5BiYnaEttJY2sVGRn9puie8Lf4BqnXk4krC7Jik3AW3Mn4sxA5gEiJuv1XSA5g1HxrSxEFhHajj7Tb9862go38Z3",
  "key30": "2mbP8niGiWd7thG6jWCK2BBMbzpEP2yYGPJtkwjbVHvmNRp5u2aAR6N5TCivpguEej8UjEa86UrggfMdrC2bZS91",
  "key31": "4tAX2RQktDGd2ZTPtMBHV4iGp1oJH5pkJQFvjejBfFUu2Ti22FW5BaASpmhFjzeuyD7nMFQz97hquWaXcwFSSNZT",
  "key32": "3q2Ymnd9BbuWC9v14QBBNPfhzffszA2HoCsD2AKqmxHzqyzQ9Utz8396QBPWAyWfVapay4E4uugPkRTS9qFkvNtJ"
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
