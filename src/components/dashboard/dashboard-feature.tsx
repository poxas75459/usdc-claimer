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
    "j4JeRTgwvx6MnVKRTyp54ZT7PihSo9DUNPTnUcpePTatzRFmM5iVgkRPmsBM1RyCXaNMtHhn5MUMxk5Eswy2q7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SNcvGpFGqJ3B15ip4RDeucZ7HC2aJn58fmUU2nHvmEXKqkGNpmZCpdZGfWdjz5uqVS4x544xofC5FNCZ59XDkEh",
  "key1": "3dvS7RUTpsVSw9bgRJURMMYTT5McffDaAtyDSeW86xwrX7KTtJs6Tp4L2FTQT6oznM6UfBLKoJQAhCVKxVjB4Gj6",
  "key2": "3e3wfsNCmzoUj5oVxmLsvCSzUEXX3nLVUdgUo1LEQHoZZuSQxKfrbXbWrPqZtmdboLEwShXrWKf9xX9mG9BBewXb",
  "key3": "WmUBGQF6CdTdLmhvQtfaCk1ApdtuHDVzQicUwBekYrfRzYSPeoM7cZBr4hfmZEU2Gn8UDC1CRjRaEfcQava4CZi",
  "key4": "3R5ikXCEkE6P3M57Gd7335j9tLekAorLifUgBRsFvipbouVsuDEs7CpWMnPAGewLtUk2me5F4TvqGqHW5MM6LTg8",
  "key5": "4bGsP3urWR5RSxSQbcKcR8iC8cMKAG7VrFFLWvRpDyueev4Y1uAoUdJq6xW7CZxVuE46MsFLE8eqs8jbcvS3gTHS",
  "key6": "2m7s4qLhLCtGsz7TbQUUL42Dx3f6zTkgah1Lxj4JYjfRCUFhGDiqtksnFQLp8idA5PDFMuEoK4twVwgwDztQMGgK",
  "key7": "4Tt4M88ubtccDUarAyuG2PbD91tAV7icF42uZjfLrHX8z9sPfjt6rx3DvK8pjw4aaQxyaj1Wpy6Lyjy2yrf863id",
  "key8": "5c3wHPRM5f6kZxScVWsQmT8S5kh5NaUy5XdLAZpSfzpmqmAQTGqtQ8zFYLfE2HUvV895tPQZKFoGznHQZ1pcqSRF",
  "key9": "SLQz6Q7gaW6ZGfQq193ZpWbPPLSvUtM9AXzR415e4RQVjNSeUdxJFCpjikVT1bWVbULPZqLtsuBCSNFdsm7Xyu9",
  "key10": "3L9RkAuedyUUhXEidrX27e8fXiE5arAk2qQAtpDwa6edPYXUWQhC4kCS3LGJNV1RbvBu7GZn2RxHGJGPKFkXUPNp",
  "key11": "4a97vCwssVgpnmwAJAeJbi8413U9QLBLe9gpUA6xKBP3cUgGZ4Pj3ggbewdipEzMoMb2mELVCNWQmHkZerMCAAWW",
  "key12": "5HT9iYM5sdyuNyQHK7VWoZANSFxdxhEYtDCzno9iBRj2U294PCfkNVNErsqdzqTPVkcrfYBaytTBG395jp7p8wDK",
  "key13": "5EWnnoNScAtcC11ghCq19CwLjKZdgP6dEfyNk1YfkfmzT7k6LQMGQNpqPpvG29DFeL1iihCj7N7gvKzFY2yHexhg",
  "key14": "2VHE4Eb8MLGJFzxauxSf5HbHFVHMVsWRB4KC9L4qeSqLZkjHDvbs1Jd3TJ3ZUGSzog7MP5XWUADvTd8KUp4BGo3Z",
  "key15": "4itc333a3oBWmLgnn2n6DFRKuicRPG6LpX2BbmEj7qxRjdx3H5VA2VmmThPuNFSiGecyNcrMA77hfNZ1aMoAXZyV",
  "key16": "2CaMx6FFmTZDJ8N7Hy3LvfwyNZzG37f5krT7fDb9z3dGt53dmLNFiWjVVZY5P9utCTdqWLGnofbPdN8yd4hoTGsT",
  "key17": "3FNYcAZsxsgFVWExd1T3gE9c3ZnW1jSsQiiXAwzuUJsZEjKWBHTfYcyFguJwGbVEMjiCgypca34pcnGJgp5yXnUZ",
  "key18": "4nMULuLg2YMDMGGvCVS1knRrN5FsUVz1PTgREKwNk4GYggJAt13xT3CAXvh78jGQLmSqyT7DmoLD2jxdh8X8oJYX",
  "key19": "2ZnFLT5rephuMwFt1Gc7uXCQ6KquHgj5HKQ1ifQ6UqtNGCHdSJSGH7aUW6izHMtNWwiFGggXJF1xPFqoTexiAwzK",
  "key20": "2QMoBriXRbzG7RNpfsvd4uKQAjNMN5zGEWy6JKes1RUmHE1qnuhXSKL5twtdxckJWrkCGQ7wBZyr2S76hureXenJ",
  "key21": "5q3P96grbBGoGbSshNL4tZPmUveBEnoTYkA1nTKcweCMK1JvaMSrQbSuVMNXW8EBFp1hwa8wYdotkotkJN1AuNpZ",
  "key22": "4jQneHtFLhKXNnXv7YC8QxsZCkYjR7SPTWSqdakZygsegpk1M46RtPK2CLryJsFvZDzij3eCWA7RPpjQKVyEwNVi",
  "key23": "3JfpGhTfRNwQWdtDzcBjAVbFK8riHNXvW3TRcrgNom3jBCXoE5sqVFELpgZBY9iSViwAEMsb8q6Fe5yksV5DzaWu",
  "key24": "5w31BNwozNPuN9b7u5i3rZyrPTiMjt3AVfbv3dNK2objcadVCepQNPL4Q8H9RoFsXLrAEYbyTWjDM13DWmEnUFJq",
  "key25": "3hmRBWNiL1dK6vAj1AaqXzGTmxh9nsEqZLqaAGbg2FHRsvvt76GLDWeoq1D6Edv4AnS2J1XFUKxoqzxGiWFrJzoS"
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
