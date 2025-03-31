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
    "3YHgjHCLZCCSo5dGjBv7j6h6xxwXHk4EBEeYWAo6chXD7e84bYFHhjfvJiqgdfAbKY2VguWcZp7Z4pNSfzPJFQT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2phvjCxdoq9q2EZd9CSW9RHPLXfXyjtT7jowfDmuRp4kHX1njNb6uJeFvdRU86HUyhKKySJLiAnnAmMyCPUK5CMh",
  "key1": "4eg1dYW4Jr24yS8kGoDbbpZy1gDZqpAk6epWcJTF7euFhTvoMMR1zV8fzmZC1o9HR7KeATjzQZmFfo1E6MfFGxYC",
  "key2": "2MfpnjAE9itenScfpCcrSqru6kWz6Hu6KB4Q1rR7RF6rft4TVJry1T7VBG6xYnp3Y5oyq3USk9b2dcjDCZfDWGgN",
  "key3": "3xgnvaAp6sopn2S3S1LQuL6uwakTPsGTHZsZHSEYnUPqXBMT13UZkVdQp55UHVknpR4BUPvitMaVXAY1dijxi7n9",
  "key4": "24zG1niB8QM4Y6wduKAV5XKyiAAxgBMhoFqyVodhJvjvQu6LGPZSH8MRLPhfWuu6zidqJsc7iYoBkzXB4JVd8na6",
  "key5": "2qhuHbEYMZgjx2Mn33CWWCXJ7VT7XkQp3zSFbm1CN4FBcujDgbGwbhx9Q6fGEwjJG8aAWomaFMkRV6pzRCnhd446",
  "key6": "3chtP1SSqJKM4RZfrfswXW7DFJg5UxvwzkRqfcYp6yXWQ38QjNjeUhy3L9zZBLHAqGBeYnwTkAuexmBMT96Ed4nk",
  "key7": "9yVPDpYTNUFeHdDBhfF6UJjLFR8b2yJ7vUaPQsW7DbxPFnSfTvAwHJ6v1wNZTYUonxAY7moYimp1UmLejkWGf5Z",
  "key8": "54Da48V3Mjegp3kFP3QGKT4giEoFicHiTbrfotJg3e68dmTqnkXHDFtYkWhYeNohKxqtUWss9oV3pSNBp7CzkKPq",
  "key9": "44u24CUG2p79wu98VfEHxt1MqK9dE57xDV8QEgh12VaD52CaN7hfC5DTweAbFeqKDC4aSM7DPmQkZiBKPQ37hoFK",
  "key10": "2mPCr3iFBxQBMkctYG71hJUv849Z2q3e2vqPzVFcDYWm8npmXKxwnWJkfUwBkiCpiCqPd7GW45NjkE7Cyyst3eJW",
  "key11": "2SbvLmPYHpvKZEfefvotuq9fV48uJuuQCfnt6mFZfiC9cKcDN48wnj7F4brLvfKDRGxMxkZAQxf3F7u5BJic6raB",
  "key12": "5yJ48HQdBXEKvABL9wRq8VM2roAMdpsuk2Ky1iAQLAnJfuWYhuLBmwnvLSgzf6RRkEFxFqUzBpG6q2RZic9dGz7h",
  "key13": "63zRvRAejL7pzBU3KTrSRi12Ufin8wo2LYaUs7TbvqE6ixrhKmAHt2B83UT7MgM7sQKbh63zzX4ATvt773idVt1y",
  "key14": "5AF26NrFGmNRzU9PcRscftBzVTtRMpr3EJR9WdwpBvvoaebCJNNPebsqLoUnQh7MaWXob9m8rxngDynLUpWsVKRJ",
  "key15": "2awCyScEVVCfmgvsWGahpRX3Qy716nXBie8KBeG3sdEj5CmVS5GYXAEvps14GXyUfQjQtVCpWV81PM93yhTBoyS",
  "key16": "5HhXzoexK6KwJUq2oy7E227gcx2JnfEugDWMiQuujQvt9yoQKWKQoapoHndSPkJCpVWQGKkSHvfhsbpW9SnJUzbS",
  "key17": "3PdyXGUFoTvpDTQFS552zGFE556WPHXj3fhHqeVp6nFuaNpX8W5drn4RatyRvsmxJVeyiftZSdusVcBdShfXgwWK",
  "key18": "55GDQdTjMW6xUzYVEMmLi4UAkvpieNkYLa9aRW5TJ349CnANywUm7UCmzbQUho7B7GR228VvSv3apmcn6yY3LH9t",
  "key19": "FcUgrFsrdgpqoEQHwEgEKN2cjqWhqF1GxRkeZBRFZxfrWhhBSihLXqf67Gj8Ns1S4CYFWz4YebiDhDdmKAXPt2z",
  "key20": "CvbLRqjfzp8N2VTwXsy9K27HctbLN96WjJkwVsEhhtRuhYGLRHcKTCVsEuXToxh9iioxKM71BLK9W1yWSSPWeJN",
  "key21": "5kUP4kcNDbQxBoFhW6AtiBWzfqv2vm3ZZ23HYFP6wsYtPFZXeCMhs3ieG2VsemzxKoxs1d8z5cge3yx6UjdYzDex",
  "key22": "4dBZuVUF2Ac1ooxyDTGZarJySCYUdHuVpfiWm35kMuDMoZQ9kjR22PmcnCVpz9uYa2MvyQnfhMnHySLoa7pSoyxY",
  "key23": "4Ea1ptyehcbYkUCW28hZepWTNynn3LsWKMgHC7up4xTEeVEhp2XBDKgzphBw1VAj5fjTDf9gRbmLDPipMYig6Y8z",
  "key24": "2gNqknT8tZ1SJkvcWPqkiKUFsw6VEz2vu4SNTMsgf36grTef19KVTEQCUJwU6ff9aQfF8nQ6MkeytPX9vzvM17Es"
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
