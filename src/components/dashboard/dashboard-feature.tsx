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
    "ihBsAN5WdEUpkP4AQm2d4TfyrCeVs32R36DowchpYto5hkzwhTNbAgDeM7faF4D7ufstgdeFVBSP58kdfcFAeFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pnEpTLNNkEGLuCoHvQ57dGs8tdmf1tJYqT3dCYByBH7imYfU4xvpm39LMc4JtdjAy3ucPJ3Hdh63maURy3wdxhh",
  "key1": "2JmcR6ckGEMqGHEA9r9gyW9wRvvyKHsTRomjL3iv7M3Qugsh8Lo2Q6jGiDJyx5FRUEQDDuzd4pDyou4oduFosXAj",
  "key2": "2dkchLvRu72rFkLv2LH8v3Pzp93EwE1b7FFaaFbHsfNtt8BNSegrfSxcbDy6rKXxYsRtrgwZ9kZ4EDPVrxbJs4bB",
  "key3": "629MdP6i7SkRCh1j7vSB2Udp7EjWtQiVEuAB9J3XDLXVCAryS2UJfpvrZvF3K6rWsTYQW7YoT6PFUZ7DgS3vmPJn",
  "key4": "3G2APsPjPN51i5r5jR5JNpAQThT1oVqeEcH9LFyUWkHhWyc7i6pVGQzh4ekPWSBn1DVhX7hKVkqMvUxt4LdC1TaM",
  "key5": "42JJgtwLgqvu9HDRhrpXaddroDJQCMwUNSE7KdjefDsPpzNwcRZXuayTap8tk7QQAx9XF52dYNH6iWkP3w1kUEwN",
  "key6": "3AXRQ4U7G6mkfHu8QqCiuKETF12aAUeKLfyUB7pAHVM3Yt9VZivmgJ2j1MXMYe4AuWNpwrWrn7rXJoYUaQpvHws6",
  "key7": "3GkvALpQdqyetPP7FQ6qysmNmWySHudaCZaXhWzcVVoHyq3UuCMJ4CiUZFWRqmTfntfq87en9o6FyoNVQSAwne69",
  "key8": "7CZSZ2sL9TdrJWvVSaBrcJG5jiC7tiiP2DRsbxagKYCNnbkcXaphpGLmEniHKH47Yv7SWkjrWpj9LzsPRiSf4uL",
  "key9": "2H3JW6c26AQe9cUpEysiwhgvLzpmWmtjmQtotDyvyGfpK8hDmZUGEAY85RJvR219oDCvKhHePEKGzNZJ4xcRVJQz",
  "key10": "2VkdbJUkkVsCXdJtBUw2LdfA197Mksaw5gWFVGtrD6kF2zVAhDZkBKngEAzASDNNtD52ts4S1RszrniPPSGHucye",
  "key11": "Jsb96AsNRu1rDiwDSYks5pDgpGrZ79pZEZshcXZ3M5Ummmugpjsi8HdUeVBgq7GFcvriXb9kD2aQmPeMYs7vtUo",
  "key12": "2FQ5SK4xAnZTdpKhYD2knC7U8LAmWuQYzxoNKsABegPhEtCjkiU2nE3S9LZoe3b6axmHdo1VeqCX1aLuqeVjBpZH",
  "key13": "Z8uc6sesknzWt8aVv8cJfMsYj1D3HcUVaAsp5NEd3fs7Y3E3SELLBsypwHbNPT8d2oKgZWwsMqbNRsDzSTH67xS",
  "key14": "4VhCzVNeuQzRLfFzv8EAuMhB6FFLzrj8CvD8baiUWake4NjXXdAXivB8kvMHLEYai51UQyiFLD44PAwMQ1xNAV1",
  "key15": "4DcGQptesCTQvct6GT1UkuNpVVn493yjYmn6vGxLvMtQgqUGQfsnAnGKNPJvab9C85cdZa7VwAPsiyTyxKv8VNFC",
  "key16": "5dMtdDCag5zV4CtvyG1DAiiT5DVwG1EqBzdMd3mhdje1YwziZDHcdMrVHx5c92431gyUaUvnbGVsGH2mwTRB47Dz",
  "key17": "XXryGCkis1US4BCMYt7G9LvNT7PsnpM83PWqXCELy5K5pt8o4ttPX4kB5qQr5AAFBeCzTKKGcoNTB1yD7LGT3em",
  "key18": "38WQ1kds2FXC3i768mhnuSC8AW2o1wYA5GwMPCkJn6uZD8XddC2ti3oBoKAjLDib7biE5rsUvPcCCTMxQqFugPyy",
  "key19": "529Aic6PBb7ewHDiKKw43yQPrk2w3C4WdAEtddh75zas1bpJxqAUdZLhjKFYvXJoFuatS1zPTdyMmmosbRzswcxn",
  "key20": "3bLG8rQJoCgWrt4r2jNVi3os4rqoDdprJhHfWHRxgmLT1U1j1ufzNHSQfM4WD9HP5HkbnryoVzZV8CWssXZdyMcP",
  "key21": "5W8TuzXMpy2HSir62zNrS74Gu8p57fRjwzvDq8XvPbWgrSH6J2s2XLaCxM8L87gC4cRgQY5w22H475v1fmsrVicD",
  "key22": "5pGZDA5ei1fHSMnMTTHaBvTikvAiwtWN4oJ8Bqz8KwTGvHDuepFQnFxLziUiWMckQQom8GydU5R3j439nFMZLR3z",
  "key23": "5poVeWxuNiuQn46LwdP4mvNJkrV4ioRoAWUmMEoDC5V2SW2MYMVZCCHWbG7SnKCoa55bLzCC7aU1RM33MiCK5usL",
  "key24": "3nGhAE1RPWmYuRhu2T7XcPfXQtRY1ZjsrH3ivE5vf5pQbH7c3RB8ui3phceKknjKdjrdgF2VQqQED7hyXLU7f57x"
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
