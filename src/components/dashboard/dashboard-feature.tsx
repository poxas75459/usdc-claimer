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
    "4jLZxUAReUKghNB9VCKYdytzqR2gqYd8Tth8GXnG1ffsYiVBxL1Cp1bmAEXk9QqtmzYGzbb7yY7EYFNm42FzmehA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46T6ZokbmZ8sR4h8qsrcBDHuUarbc4WMm6m7jzsBzu7mN6kxQBFQNdt6kVkLTT11Mgkx6W5mnKLYjJHhA6qdfust",
  "key1": "3A6iU3ySWKwW81Tobvn89m7joxszf6zsuaKxY26i6kiWaDekF5BwHtpcpcT6mD6eU9E8zbgSAHKjgx2NUkU8c974",
  "key2": "2B7sJp5Dxb4bZwrbcPE8rU8p86ZjtBgrkjojqfZMjDxtZxcc4k5akiw9JYoYDjPQDnLfkei2AUHPrbVC8WmGrWoe",
  "key3": "GVovLLK3RbDchpUZT2hqMr9nA9tP6Y9gXyTGrSt2mcoiCQWXD3WjFiyVYCsZUY7iYGLhCixy6u5VqLazdUL6FyN",
  "key4": "5o2H1EHf82VJy5qVBNKRcAFTSpLvgiZSoDkdMayp6R1k3A1ocYLihqyrzM9qCUa2P7DiCkzBhVFQ8UhMXNk8fRkG",
  "key5": "22BeDbudHJ3V3tgdTqjDFN65ZQNmSHgLegzyZTFvh8YEbRG4LJC4jgnvKJy1YMW9fkFY6iCD5CdNqxJYNroSsAWT",
  "key6": "2rj2AsQVYaRVtr7zL1Y3D9mPkiGCmanADMpySnawWYspZcNF77zgfmrpWC2oQ19Lj3dYz4ScccD33ZyMfVWi3tjS",
  "key7": "4yGP6Zbe1M6rAvbo4LBu9Psn4yFUHUpWnY4Fo8iFopAvQq2hWRjs7xi1LiVJzk1AKXmymZTERadtvU3r7KVu9GL9",
  "key8": "5VSen1bxkerZta6wThZysYVpDWhMWXFkRvmxyFvHhYyjfo6jocpk6teCgnBphLUD9ek6XEqojNpJwngmch9Lrg2R",
  "key9": "4RM6LBpjuCXrc76GRtxNpChXc6ctGLszw6TShdgzRXk66CuNP6NSQQ1mob4cKvwjNqYZNCUJ7uXvynP35omZBxxZ",
  "key10": "3fPdmcNZus5FeKFWowzYHHsTQwHfV6LFkiYQkqjL846esfzJmHKpLbuYUp8xYavzAiHRtpkyKfH6x3VUP485yh2v",
  "key11": "c3ujEkrv2FWuSeXXhibMkMMVYUZc4Fk39dHMyZJJoBWyACbHdoR6rossa83eV9bnqFormxELES3FJ1kVpCEUiGC",
  "key12": "3GaN58eSVKoMsv2t6JsxDHAUfTJcmnEEGsVJprZxpHjGoQQrm4gDGJL3ZjNUnXCnwvgAW1m8Nxh3CMyPBosmqJ9",
  "key13": "2NcQmz8Hg9YxH5GxvybHkEAVAZMcn5mJbjZEqibB2sfSDQBzmrdgL3TGxiZmyzgJsrysHz8ibfdC2314vAbpiwbn",
  "key14": "Thbn5curxgTM1axBXhC8DHbfpKAXqvNEJ4jL3dJyNxCQ9ZT8YZdyCCh7W4CuzffTsF1moLqyd4oYLxa5bnEvQGh",
  "key15": "4VCDenJfMpLUhPHGHmdFkQgrQQFyUcQHkWrfnzzWuoAKjNgiRFP799LzBoWuyfBXDTvn8YDm5383jDcQ8usTridE",
  "key16": "dmRSZ79ZyncsNnRMr5WerfWL8WhEjGPvLKEwtay8mmkmed9Mk99uKsJadrhL7u3YFXwLpmbinRuCKsqu4VqXvgD",
  "key17": "3GVW5NFyRZcrkr4SirAAD9VGTEikwfjeHL6S2NF9yh21jYaRYYhfdGj7v6mcgorgMptwdzu4V5YZPEiAA7QxxEAU",
  "key18": "53ZG1ta2i9E5dwB6rV8qReDxndZmW9j3uSo49UdejFT1TZXeBP4M1KHcMXwKSoVUCyy4M8kewHYfgtPSiGNRAgyE",
  "key19": "S7SfncuaVzkfMyF72hYJZ6mdEbASz1AiUFTMgEg8ehkq9EN6gEK4U9XjZUL3b4V8KAWrPTV2CWtXkXA8a5sy2qi",
  "key20": "8wx2amg5p27FyEHqTnnJJPcJn9Nt8EbTPnJN9xR2rR9et7dQmXsR9V87AvXg2HjWbK5GhSTnBYq5gRVQJXKba2H",
  "key21": "2QNh8YXQLMJPvdKDQaZQuHfnT9MF5sJ3mc9wSLpMP3s87yMHHh9EafA7KqzkBJo6yBsihKvUmR5fJ1uvUq9WHGdr",
  "key22": "3P8fcHTBasAeXaxNAsMg8Nv8RP4oT7D2KGDMccKYczaNzNxmpf4ncDsMAXvBDbet4C4FiZgwC4dWHonPrNBfWJ1X",
  "key23": "2in29LKzNfBGfWci6B8uTc4mgegf4NoycsraG1UigANV2Qk5zkdZWRErApuoSMYJEbaaNojdDxoPuvjyT5N7TCWb",
  "key24": "3WL5ip1bLshXY5Dk9EfYKW84FqVW4K3SyRP3bisqpdGjd9vwV3xJZx5nEbz5asGRayaGi8SAoCYfLdkU7pkfW6BA"
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
