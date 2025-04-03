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
    "5df7dytzf3MA9LE9JQn9utvvnrs7uZgGeR9aDuhrPK25TL2bqYdfUzTw9P9Yshx3tUYCYWbyRqKtD5VKCdfodHGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RkBTa8A2qcWGRvj2ubo8d39xknsYqnM4LfUgDmWz5UAJo43TFA9Bo6F45F55w8h42SyW8Tt8R8JkyZHYs9zPev1",
  "key1": "2ivTL1ewQEn7AY5jnQnvavQoMWLBJYW1WeqDvb67f8h39tLbN97B1tJynDSgshTwnCqyyFSVxbdnvyMS7orUhZh2",
  "key2": "2GbtZF5mZRLvqzdyLFbaGbrQnEyNbRJ314wgrdzYANsNmQX2nRHb2uAEWD3sigbngZx1S7Ys8QMk48FkdsLWtLjE",
  "key3": "4QD2b2HNzTtvLh7FcAbX2TEcTMWbVMdzzcMpbLddcjiss9MG7D1279E7h8DVeURyvB7R5o6XpsQpQQqyiXv1Ga1F",
  "key4": "4m2ycuDCZN8dNRt9LTXfkkWGfFYSGzSxBUgTFifBuiXx94RZmA8kUXRqBpPi5pwYLPHXwatkuBK2khdDDvY9nAZz",
  "key5": "JPfzCdEzLVzLDEB6b3B4MRXUwW1kHUMNoCEzwsSgNJ25dRNNjMsuDVusthSjaUsNGV1L4ub93jrfXS6vCvBLpbX",
  "key6": "i9XZHj4aQfdzLVYtjLMkNVicQKyb22iEMeaC8ezzYy7B1M3Dj3kXntmm86NU1PMhC8jbgc6WHYVPTPsjrfvvTUZ",
  "key7": "RxoJDtxncfWkqBB8j1tFy2iUHkPrjhVZF7GAD2xddXSknz1Ega7fqFtL2PzgpcM1yQGPxW1n7dxJavqEtZNYQya",
  "key8": "512WLkF1A6BStS8Aa1hDsGEouWA44fNQgRrLeEkuy4uxaSs69HxqDcN8NW9V2ywZjuboWQLVNCALkmkhKpZmvjBQ",
  "key9": "5GbYZv4UsgRTMoHGvzXHmpcxGB5rYpNgpdLmQrjkTTcrarkF4fSwwtNW39bXTQCns5EVtvHQRpc1RYekTJTA1Qe6",
  "key10": "SgoVipfwf3nCed1J3PjTYRFBdKwyK6RLdaYPQAjELw4xoMdqbrs7VrnokVitmPFLEfwMSjCvv682fNPkrhPfPgU",
  "key11": "WrE5giQUtvt3tR7SK7bwLmMeFzajzpmKPboyDDJVYC9tC17SdMWnPfc2C1frepXQZnC4qFSHzmwv6H2C59fMTqH",
  "key12": "4jKeBTvbsJy3Zj6UDrH1hzQT9EEZiuJnuVyoFbEF47kPRDouUCCyGDtKF3D5N5cufQQvCUcefDuuJ26MyAWGEL4t",
  "key13": "3zae4koGPqCTAvvnL1DbiNwZb48cZpFsEtv1DqmCfngjXg1ys9U9VrA6uxGMcMkwtTYLzMZ28iANNz3oX3dEYtkv",
  "key14": "3kPE9qZ1znuAAm8btXSHvojchnFJ9jrKuEwL8Ssh6ciG56ZyV7TE3DAgCxbk1CLW8kDqrV5CX7gbjDvy8v7ZrFou",
  "key15": "3pngg5St7Kjq1RS4ZAQbpEcRigg4okuhCBb2JHC1d3QEHHpvaQcEB4jmUrvJYqBXzSf8A5UoLijt5mkxkhwmRLT5",
  "key16": "52usvaniMeKe5mSZLyi98teLzUHpze4Kegin36dAtzerw5eGJrPVac84Cs19WuRS37PmNUCN44DQ26MA2PS7RKMd",
  "key17": "UTKdR797rjEUpi1dhnZBa73aD7XfaT1eYsq3HswSYE6WhwHyUhEzoMRu2CV6KBVHkg3PqS97k22RyDaRCp276zP",
  "key18": "437eVNGQbGdBHqsGmcKbmyPXZLuNWA6xNhCUCCkQQeMHUdCckJ1gMBhip7HBb1YpWtqmJ2EsQ53XBvTSx3ccYidb",
  "key19": "2n9yVF84iWvTMDebGZBd4zs8Tr5w5TYW931kDeihy8ckZUz1BK2wKtD6xEYvSRhFX5EQ9Jj8UqidvT4sSCpy57MZ",
  "key20": "55fBTwh3KYyUQY91h2RgtUdz4hq2RWsB2JvUEFLZ1wdxLfWHAmY9dvwSa1iEaqAHAdfgjq2ExDvRXyQwqWF33VAo",
  "key21": "3wxieGL4Jv2TfiBzM7doUwSYwBJQPLnEi1Gq2kXs5Q84NmWVPqPpVFAwAYUnKhFxLvACJK7nqcfTLUtcaVpbioMU",
  "key22": "34ngytftcECrbtVPb14BXayUjXesDE3y9SCcRfAqtnXQJww14b1KVSoavadhHzR9iUZdi7dPgrkhL8mFz9ru8UZu",
  "key23": "4JqLgH3MoY9GfQBAqi39fUwdFryJRKG5i1jWT7tLMufqT1twBsLsJNfBih6Jy1yHeHPDxqaQYPkY7hXwf94anGdy",
  "key24": "5TtLkbCYvTf8yipc8uEtPNrEGx14G45NoF67ykWZnUNo5KiWuEbzTA6Gyx8sdXCnk4r1DYPCojCW98DqnY2Nd5a9",
  "key25": "4dhPPrV786Jg6TwGkHeuh7fxuWb5PhFx2nGYzg8EELNGhDRwhfvE5R8uUV8Jv22bwCCdFHfGXz6P76eNVmbh6TMK",
  "key26": "Hd4eavH2kFCECcsfNnFqHdt92xGxGGuSDwtZRJriNYpaLyzaLXKxcxuGSTHnwqwok4XG64n2oHSyRBZyNcaiLSi"
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
