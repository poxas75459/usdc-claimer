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
    "3FQKgFx9s2hDEi2PjMMjYRmfSjnmpwCyubZGE7ZmGWsHxnQedZQtr2K7X12BQJ58R7RtJvHpUEN3ibkuckqSVvTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5faTtxHRaHG9Vx14AjDsLVMYsaq7yqA2zQR5pCGT1D1t3jT77wqLpVxCvxXBJ6S54XmjsAbTYofmG6rFa9FCfxiq",
  "key1": "2qZLj7GAj2ZnHMwd52Tag8dG57Z7B2NTvFJocvd6mFz4RYVQ6CGqNJsAxyDhrKCEU2hRAkZfmRkCCED8yxWRBzuC",
  "key2": "41As5FQB5x1Wy7gT6FhKZJ6KR8csz5jhEmMbbLaefaTHRA1nfq8cxPgdUp8HydTwgeaqNSqQMw2JEejmZMwtiLig",
  "key3": "MGUwmL9pf9uVnApycp8SijaYhYgaTfd5gJpQe8uYTV1ucaEknaFWNY1mxVD9jNCUgCMJyzb1NJUkE5QbeqCZS7y",
  "key4": "4kvyfSXn42Mvcqknpo5aWoEywMBb2ScUri55htXXqhbEFZTbxHp5qEcHmHT3udrBo6FQCxSVxJkuvXpWYAgbrCNi",
  "key5": "3XKHyic2dYrLNS5njFUxh1v5AW4ipnLQQK5qD5HFGDqJ9Bk1DYwWZ3U4URJJwp8DfY8gEou6EqkQ3R6LoS3JS859",
  "key6": "49XhshgvJdW2BMjX2S7iGX9sUbq9BR5F84wR1nqj5q8F3LLy3eiSJ11VY3QPw9h1NjE9rL6EWvx8Zhw3CVskAwus",
  "key7": "2mbt4TrSE5vZ4qwg54XaCrnrRPPaYdVMZ97Pjz87DRmS33qnn8z58VWLchbnxaAqjmEfiiXNThTn6Lh3yWFUNMdK",
  "key8": "3oReVopDJTG5h4JoT3bBtA9M3rKXPyxtLjCFGpvNUzmZFm3xZhXvii56633Kxextw4fuLkyroupdAGQ5Bf2qpBJD",
  "key9": "3YKYRHyqTMaPbUV7ymHZjgrKZ2wRVcMbMMVxAL4h4g9JH38cY61YLUMXLFLFuBC8HYeAVMuYejhc4Mv8vopa7gvf",
  "key10": "LG5NkmLwwe6s9qitLP4WS8u8VcMV4cxch5sdXBeKeVQPqmqY5Cm6mJaYSrHoPhMrpkS6NxXGEenzP1NSE8XeAeL",
  "key11": "MFdK5b2pe9h3gad7BZKV3ADZwYrXh5q9cJYQF9MF6nqXPpASTGeh5yQa9JYuH8Yumow6jDzf2Dty3VYtZhVuREn",
  "key12": "43caXVc4JPP2N6yoEu3XDDiS3AcfAFobjK3oCkvddky5dKnYR7DrS8Dw23YQwF4LAzhYdPMxs4DoBrcw77rCtPTn",
  "key13": "1AHMzPfe5GiG1ZQos6HukrujLZqfnVjxFroh59iLJpyyatV4yxuNZKYfTrmkopiwwZRn8z9MS5H2ACwqm9BeGGD",
  "key14": "gYSUUfz73U2CnzPKrDcmC2saBFEZwVEhHvK2q5M3hi2dFSKZwKC7RNmojPsoBBwD8VJFrSxHrdG6N5SgVtiDCnB",
  "key15": "5c3SH6gurR6RJk6sxzaX7PvzM9rHtsxHKzdh46YFUQ77YsGfywcSo7Qj94HSgShT8YGZtQDBZqhm4pzkKtWbp9dZ",
  "key16": "2J5hrU9AtUAw3mGUnYSdjLTApWAz7g1F3UUHkrfkUnya9cmDrEVR5Tazo8uSXTLCojVYuj7GS7raFURPTVShrxkB",
  "key17": "5EC1wXi5SRADFBi9TEJEHjbWXJke3YJMoopp92WDtTJXpU7zdfAcxNwxa7N7v5YBRXupWuiowUq1H56C4et46o7E",
  "key18": "C8CipxHpVwPZEBJkAhc4dNxazb2x6guNa6qxmdoXyDrgy7JbbsqYnK9H8skPPNopLqPfQVBdKdaABACFdug4BKK",
  "key19": "5Uv52fS9wU4yN6dScnrDdJ8Hj1gBKE4qTnV4KehQhJQ9QAmbQ38qibEvPWdB5YQqSouixKpXGZ6SdAaWvRTE1ZEb",
  "key20": "3uG3mrbey3ikYU6DV4od2nFBAgvzo5cfmge2EFAULJdvfKfrqYgPKn7pPKzkLSGh6EGhg2Psf4VcyHJwK9WBfKpk",
  "key21": "361MTAiLaeKyP5LphrfUNqMhxjCf7V1EfJneaUgugMcgbmBMP3vPCcqudmxsYTC3KtAzqhjyyWedr7GAZUdNfhcv",
  "key22": "5BzBuYZjm3cpZUW8zi1cm4ccXgGasmmziqLu1AiyCB8duWp6SmNhspU87rAosAtavE7R6pJtghUU3eSBYQ9EkxCV",
  "key23": "5YQddybjPXAQwfE4KfrZt2VFqGPNWVAEM4g3epbZsxKqSqj6D1ejmaiD14qyziEDyexeTWT54PUbTsCMCLDYWHmM",
  "key24": "34KQwfa6GtA15DEnqpeGVAmrqHJu5jp3YCbW2v9fct5WDAyEGKPexub2S2nRvkxsJmpQW9EQfenc898YFg1UVhZY"
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
