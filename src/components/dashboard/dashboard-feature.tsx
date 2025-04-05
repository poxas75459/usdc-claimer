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
    "3uaYtSnVD92hvzPS6dAQjgVkctNXQfzoAYybMZKx26PpW4yjDWkBsrs7hhAvSd91SX23cdnJVFdediKPVtgTs1YM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fh3xx8XEuhg678Wb7tVPANFV1t3MKRSApammtrC8SqvptRh6JBn8rc4iP2K1TpT859HXe8NjrgfBkFNAUjKfMFz",
  "key1": "3zudLDtxrFCMWVJS2xJeUomHPXYf8eH4kVEuJpzybW11hok98qAeQyyuvC9dpcGf2Zd4wBxK3dv5UYG5zJn5owPz",
  "key2": "3jHJ7aqDNGUuNJd1YiYvdp1jqK9bJCteAnv5H739bwxWhwwaRESGcQYiRuU7sLupJ8Se7Heoet7XhYuWGK17En2k",
  "key3": "9faRfJxsg4Zx12Wy7uL6bxqt6P2J8sfqfo9Q2abiPcgroVrPySwVKcm6CJq8aqPoBRdbxFnf9sjgkg1weg7CDV4",
  "key4": "4bnJoVdSd3rM61x9Axt8NyvDJBGBLv9AJoi8PZP7j1dkzbDs9h49Du9rfG6tbcZrBtfjnUT1VWYJbeD81f4KvHaV",
  "key5": "27nHfzt6bt9Ntmx26v9uCBWdYzgKhPqjrqCxGoFFAoDDzDYKvAzZWYTPXeDaLyQTm9bfT7KVhtEoTopmpfFCWuPV",
  "key6": "RCFySEPgfpqNbmkCeeCehsk53cWLW4jice6iGMTgKJo3A3AfTRQzMbXtNNzBUuKK9wuQ8WLhsXNydiQQ2u9JomV",
  "key7": "MtnZxK7gKzEtQtDHMr53UeAiE35XKAHQ3txHimNtwDB1oGqzb3BrDhVgzFta5YyhgYYLjeu3fjtmJACDAxtMAfT",
  "key8": "4Kq4vBAh9X15hUMjcBbMJycAGQGnBzXcfryFuip6K9uab5deih1DJ58S8eJvC2F3PxgMahiVjXojLveU5ygoCoTd",
  "key9": "5nCGTX7H2xMLNjStgDnxu6cDsrzrN1D1biP2XiBtcqh68njNSbUEZVGUauWxsQN3u162wNWdjtcLiC1UrHGVHvuC",
  "key10": "2rn3Q3whCoQbLKMavTZHQmZfSTfSSSi28bDHzTwYy6sftrT8gnwdurqxHYjjc4CGB1DSRoyhE1oD9yCnEriEn9hy",
  "key11": "4vFgfdAKkTZvMkAoFtgqjZuM7WPkDWZ9QqbiK6f7pd5PiNDPucFrYHCV6EcEU7cEz5duQide7V9ajXCR3H82oKCh",
  "key12": "2Q5KghGfP8y44LjQZLiWw2FmPzUpfZsbd92fzatDm4yf9ryNkA7Rmbg94Qt4s43VFokGd7xPTNwXe3x6ratQc95E",
  "key13": "2b8NR7bZcSSonh2bjbVrXK4WLkP7BjtH6CMtMtHp3ugqDqX7pMM82sGuaVnsoCKFS9GLiu8pZrJcUoJUChBrEP8g",
  "key14": "5hcGVpDtpVpao5iB3VZ369DBc99iGsDzLNx2y7PeNFxe3Dj6iWJYY7H3fEa9KmXe7wrTvpf4N7ixbZP89Wy3K7TY",
  "key15": "2VGmkJccT4x3vLQDGLXE37rfs3HXEsrpLCGHPJfFAJkdwyGPzDH4UQ6LLquRrsRJFMc3MHbPtoWhYybJ8ppfvfYf",
  "key16": "3yXGttCCnfkJBPyJy3g4xFBwqsA8jciqgHS4SizK8aEzBRCfoaBhNBRZ6DgsBQWVC2D7kXZktYk91hEC3PnLesRg",
  "key17": "4SUwxpiyjfcbcxNm6u6aXMNhpEtdsSAJFxnkF6n3jN1ggWfudnE4AsCjB7Gi5nZXA4ptMASTvU9dMCz9J2bDikcr",
  "key18": "2bSQMrAQoNNwNvhSy9hYtamG9XPFLsBSmn1aU5SVwrk1Bjtxfr6FT4QnsYsQX9nhKxEwY5G5nGhTWR1zsfqdoJUo",
  "key19": "muSiydwDTnCndRtFcEJ4xExirydDgGJQPWZf1To6vrgbfsVU4RzzmSy9pcdJS1cF6N6BDTPzKoJ4SUHFoQj5Stt",
  "key20": "3a5PJGTW9bH2WynVyPVDQh6ANP3r59VD7upyLm25a4q4nzKK7qLMx3Z27D7Qn1RNf7MVeVraF14xahyFAjXAHtSU",
  "key21": "4s6RRe7Cx6uYw2K8hftdeiuNCnKRx4KxZx2UCxBhZY1nuJWaEAzwif2e1TPExhfBvsMkjMy2PKaEZJpJdzq8E6D4",
  "key22": "55RoE43JZ5qsyeGfm7ab1HYh1MAYSDFZqUvTYgPKNLwXCYKN7y7zDcg56mk8YkptFks2wnedHu4aPDShiVgGehBd",
  "key23": "kmqchqYTgqQNYWLiE3QSFTwGsJ7RdfL4MRWngro1c8qbShKtjiYtdP3LtBKWjbs516mftA3sr5Nz3bWismWWCjG",
  "key24": "2VcjLu63gXcbEgmKqeK5Y1VPimdT36gFVLzZ1rWWC4wMRgxhodRSEHAxHYfxpF6Axaek7yoDfSrMtsSc4pi5nB14",
  "key25": "53pEBpiv41zTJPk8Jh9XuxFdipasNKg5uiCxkj1Xqe52mBFvZhtiH34Eub4MAocbMjv5tT4A5ucFupCRHdLCCbbS",
  "key26": "5jCnp3dtFN7qc3RnZMbBghyrZkAjGZVpYEwHxV9MMFYoTVfschcXzmggm3E6tJjigR8NejvRWvW66gKXNNQ9uqst",
  "key27": "4S64rTutb2tzvEEg1ksuhghMxQBjXd9fNUiz6XTkwwjPbifreNFo1RHK9W5yHWxGGbiekeRsMBb1jzKMsiJzvFnc",
  "key28": "4saMEKAadUnG9mCJCSSNsYK4KLgtJAq9twJCZsLRTGrZo5wzMskzjyiAwiAjfUd3px9SRM9DZHKkt7pwkSzD6oTW"
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
