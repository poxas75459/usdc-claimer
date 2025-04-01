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
    "5SurQtoRi5fAM1StUWiGsaLiBCSpzUiX7RLuCQ5CxVYCJ2zgbvKhzgAA8JPAC3TAKNXBiHTu2SFdCLiw4o9WcvTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RFWq6uLmXFv6PaduvSpoPm57NjbvQM6h7F2JXBJra1C7muSmV8JxTKboFDXPwutndesS13Db7gB4W5zxwoaN2aZ",
  "key1": "3rjAGLHaUSZFfQPPN5hCbRF1maXWMk41m5qJo7qK73fhfBL2ZfSH25AfCdAznsudMTKaboFs6DNKjx9cmYMMrgRV",
  "key2": "4G8o1FheoHeexmWkyBvnqAcAXBbmzizeuDA7mb1d6kRs8d7669bQZYeexF9qfm1umg92tsrbyRatmsmiX3Vk2cW6",
  "key3": "2StDsTXFD5ZBVyo8tRqkyP2Q2Kmko2eV9Za962HtrnZmwP3odwNhUbBnCmRTJzs4ovNPDvUzXapKcNsuYcqt5CMr",
  "key4": "5SrNDpagFjMqUsjP4jjPpKhpXppEEWzu9F5m73DGRQv3zFQp4feT9xjpesJUJATtTfdombuAYf7fkSQTB9mqg1Ee",
  "key5": "47vKBCA9xDVgcBb67GJpH3HatseJjg1jCrkhatHFQzs5EerA6dCyBi8y3c8RVJKJ8dz1Czam7LduscnQ39Wx6iit",
  "key6": "3SdATtkKSaVeRVYjNhM9P42aj73oTwfi9e2k7xgkTgNMLFunpZjFSy2nYuqYVsRBmjKq9aDPbZ8vN8ToQ36LQru6",
  "key7": "2ShwFxRMurLpYMvHDgDWP6Qi1J9V2bmPf5ULtjU1s4kkTmYPigdQSpbsWK8JD5f8vbxhcfHFgsFuBgN994xiBxnd",
  "key8": "2xRpwRUDufyQP7UMar2xMz86BRko8aQ3t9DRzrRks6j2B9ZqxfMqMUu1kJy4ETTFdAq2shMUw3qz8mBxFMx2wbiY",
  "key9": "2kkRaPDqmd81B33a2UPcmJc6TkjK5TLAtP3MaFEc3P5MyQrMYJGK9Hg5ajVVwq6qyXr6bum6bhWXFPYSwcH3Fcbx",
  "key10": "4vELaGxjd76GhS2mBfAVo9xDiSZDBh4zRQcNR4UkGLnrHaFnSCVdCwHDdCUSXecdwfp2HyWKW8N813evgHazDs2B",
  "key11": "3yYSF9sm4hvRhgN99RWcWytgmb339V6sZhgcpRaTiLKUuPTDfRs2SzFeXfKyVhZ9EAVYVVTPqbTE8JqZYPyVgjbd",
  "key12": "2SXsFPzVT4U7VxQsAQ5nvNFywevyx7EvuwV9Gypj1t1nhqho3orfnys5xQsdiQfP6N6fK6UVpj9pC5PrTpG38fQv",
  "key13": "3ViMmD3y4zZooVnyCLtJZkXAuVC7yGEc873u9M5v5Zqf4p8vyj5xKQfvn6eADuuSrahD6ijjY8LvVs5MKY2WW3Xb",
  "key14": "3dsrhhQX3UJ1BhqieKT7oAyUDK8iCcK3SDfHi1AwTWDSfMD7oJAt1YV388y1K1gWeNpbP5UcFMHMwUW5Xvabtrqj",
  "key15": "5gXGNiLjeeoNL7acasHHdDHZM3nREgBWVaZVYBuvgV8Akm3DPrHS9Uy8ZNu8VwEaXqNWZcR5Ww2cZLpWe95iUjrP",
  "key16": "2L4i5DNJepUph2zebBMAwfVA1NCuap363EdcLHNT4E7MQ12P9WN9Y8quRiLMtE8xwxPU17grf21oM12MVnz4CSpG",
  "key17": "4eEupzk9Gjxspurdr8xhaYMiLzEYCE29nBXtjBdJqQyUimNBSW8bwdiHxgy3bRELzFreQpjsRe1s6h9NEetDzEyM",
  "key18": "58MdziwnkwYyjLDsy5KiqjyxXakH9oadosq5pEz1cd1R6zvkexVqx1mp6siNJvgG7CYN2v8S7oiUH763FoD6hupz",
  "key19": "3prRiWMHubipYCgWxExKyw6K96qsKpBUh6SnXqUzmv9qrro6m5GX6LwuuJG2ST7wjiM2bTZvKZvcpFkMKhcxoBge",
  "key20": "5ar9MWQAxK8pFgPoDnqgwHmYnpu8pLXykgFfcEPqj9AjjMRqrLDiMhfTQ1Unw4jZhaYSTrrBjaM4EJAjDBbuUFGa",
  "key21": "3caohPjP85WPzNJ3ThXU2dohuRNehNrewFPGNdZMqxcCTP7QAbC7T4cT4hE51bP28C1TyXrkEq6kGL7aaXCKhYJX",
  "key22": "HGqUbtV3AZexXxuTzKLDTpZSXCCQNZz6dhhqyukCxdc6hG51mWZSVXTH8Ei1VLHzQXsZwRvXhA9VciH6e6N7FBi",
  "key23": "4zMV5rswuxX7xtXayPrph42Q8DEC5Wo7xw3Q8bKNCiPcHw7Eqpyd8XQ7qGXD4NTq9AdW3y9xTUciDvbfyNUC2c4M",
  "key24": "4C4VyqPKtGjj47BvAVY8BtPgFVmkjxr7KBm5ubHyGQzUYZ4su32snpYAmmyiUFYuDuDA4UVgmPatP8EpaTRoaxdH",
  "key25": "2m7URtLaUGCgiwxG2cB5gj8Yaa4emyqC9uRHnuRZLRaZ3SY7xvbhZTJjUJT1QmjYgQS8B7B3YDjAGgxgGNWgtqsu"
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
