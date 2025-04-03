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
    "3pv2Bzf4FbrkeH6tCTZPjQURWPpj7uhL89Epo8wGzFe9xLNErxbJYWrmwqzCPBadY5XYU6tznodjKSTMaq7rGS8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YfFkvkwKRukb48wk4LjtiWeQBkRAKQddYxGJwzpDLGR61htfPJia9q6nouP2wKy7vXC6LoZkgJeBmhcpaBPnV3D",
  "key1": "3pL4pciw1AwZFjATqLKF6juivAS4JuWYZSj5c3Sh9e3a8seVPGgSMrZ1a896Pgcy9G6MbHh3HwWVsW7eYK7AF9Mg",
  "key2": "2YM5YkHPSAjvcWWuUt7cVUgEza2ad7TVb9GYQRJbFvzeCB92BQzpsDnuYGaJWGL6q1VrAucS1i3Ct3k4iQpctUJc",
  "key3": "47tr5u2uh7DBnCtwYVRmxEDm3PEdEsJHHrkKJ9wkrVML3qKCp7353c4z5Ljtu1AmtVEgka6PZbnnCv56jUxN8Rpr",
  "key4": "5t8YCZJyAwNmzcjSA6wSopVHcy7v6fyzS2R24V1V9mHhZFzJ6AyNn9aF2eQPMsk6BrRXRBRYrS5RSRZ4Xyw1oQTE",
  "key5": "4E5UteMZ6JTADvXUhGYDkgyx26P9qF1UA8H8kmn2o5ETWesytiwRTwnYykVA3mhe63uvVz8YX3K31sJPZVsMKEue",
  "key6": "2MSo6onk8zckWyNYKXgHNXPDxtqJRHM73q1Vf3ojHdsDsQv8sSdVFDtQL7hg3GuUN7PvRT2dvCCvL6CcurKEaRam",
  "key7": "36CfhVvtrfoiZpPbmCEhjqzEs5tTPGboToM3TUtVZcBUaGC8MWJU1p37iVGcwufK95LxwASjtCoSPrHwbWZxGzeN",
  "key8": "4HdLokzHUGhpAP4zFk3oeCRJwXewoDUJ31EfrSbWHATUY3S4dzMpoC6MQqBh3ZFoNKsb7v1Xgmi33unTBfafEEAH",
  "key9": "3nKcpiJS9z4AXaWGFSUyyFrbQeov35wacqE23jjR6iipsT47UFF5yENYgygANWDnT6H5rPJcehrnWbYX7nLboaDE",
  "key10": "3v6T4zJHg9eVmfWEkqLAWrRn8NXktc9ub4KjrWYy1uoG69KXnwdhxz4dRhxKubtyCD3LMSaq9TQ8yxsomcs1esHu",
  "key11": "4ZKNvE5Cg9EZGnexxDwPqMLFLg4sjDRwhxuyYnQmgS3yCxfH6bwx6XtQFo7STR4FyCz4p1vkS7P1CijVmM6TDrEM",
  "key12": "imb9iV82jTmZLzd11QNb7tzuU6qY1kVp3toqsdae1z2FKQCWfe4G5Te5ZDcxvnABTHe6st73LJCHeRCTdoZmnaK",
  "key13": "5gxHiZDJ2Fm5KCRcodvkSaSK4roZbu4p4K5tw7eXoaTLXdK1Rh4TRM5Ugdv8fepczwf9zCFhQZNkLxYKex2xsx5",
  "key14": "3gLF3yJeQgSQe5zSD3BCakzGUWyZPmP55SP1njhxjWjo9F5Gfohnb4TLJXnkSZtbviaquEXbyxADanbp25xY2Dop",
  "key15": "26eGvFoaXRXuFoqzKGbTPSLVUXmsvLuHuAd2p7VGnhPsc61LPfWyxzLYjM5LmkbzREnKcr2pPG2Q2KekRHijNbN5",
  "key16": "5BHAcMcjrqRZHjmz3uRKaauCQkv4KFHbCSjKjpVsDVbcSpSMT9Qi3g9yg3TZV4yrQh1jWpcAEnBhSF3PcwsReLa1",
  "key17": "f7v3o25MHbXwHSTYGZVZBUhio2BJZ7JUkpuBvpppqj2Thpb1jMDu9VgbW39xTjZovrKhKRKw7YqiFqdLzzKiXMd",
  "key18": "4CYnNhYpaL8Xchxu1w2ywt9Dr9LNVRsLZFhXHQ59R6Sp5qScMvnvvtzE3cB1RK61qSGDQoF472R1MegkimDkFZsf",
  "key19": "okTcur41nXiNhmVvALUSgWVAD3UiTrYPJG2gbYj3h9thJVTGCJ4VvCE9AhdEWyddMEqbk7jyydAJQqsr6St94uG",
  "key20": "5KrEuwJgYbpACxknpFgRGs3o7SSivkLFoqNGFr5Jj2oUTwJszK6D9fFF4Co2n161GcovXkAX6NvDGyWKcHMfVKKe",
  "key21": "3MUyhYSbH2Anvzz8r7tY9mkQtyCCde2xKyMMKGBax28uALMZbKrQgYChGWjbEx3YRhtvZjBRJJAWP2jmDGtJH1m3",
  "key22": "2461yANYbYHkGroPpbNKuadQyFPhsVLceFcD1M6kpcLULbwGHcjVhE7WHfokTCfnzpydA97UsRRQ3fMj5Npepujt",
  "key23": "UBTngVar6R7bDKiVQJVdBH9FBYp3enP5RkX1f3R6xFNRfdXnTo7rexsN6i5qWSZRrvMw3fDnWxPa5YLMLajMfKe",
  "key24": "61NVNSQ6DheKmWhuDDi7T5D2kgp6FKgRo93ZV99LAgcrHHnwoQT9kp7TevKHMrZAM4WK7r3QGhXgSBpxGPBsMQBD"
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
