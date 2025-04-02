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
    "4UbAgbHQvCMjhNdSLLaVqRRHQCTBr1MPNteGTve5mnkiWMRv63QN3xzZcwykCXvERY3Mrhpk214nn8xVNUrWCX5Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LksJucXCiy3etGgfxex8FNVwVGZmRBpfKVDLRDx8YdxeZnotMFuqcCWaVmzV4yK85xGA16ZGzg8qeHPQeQg5hdE",
  "key1": "3rkCF9BqKvdyMgQ1AxseeZj69uPCpi6676MSKxpxN2swWbFPGixWaeKFJ9xCLTU8SzrKZKqUnHVTD6knsAbtcwTF",
  "key2": "32Nbr3ovWLZtBcqRJsqu8HTen69n5nDCzhXTV7KRNxF1J1ryvxwvWxYAVi5XRyxKp9v8KfWBpEfzGTroKJNDQa9t",
  "key3": "5YAFRua2xHZN2TMq38BA7M1tykeVUcgzoWxn9E9Xt6EqWBvsTE96aJFKJxvGHjTTCi2tkgZLXNSRrX68J3317Qi2",
  "key4": "5Xt5jqvCAfZagB2PbwVRUNf6Eya2kWv1XpueZDK4hCCCqCDAJqkCMohDUv7LxWuE9xt5nq877Rd2QGLfRaQMCu6S",
  "key5": "2M39DcD1UnNHtntdE4Aj2b3RTTTsX9my97cnbe3ANPuXEq4tiajwSEarcnZmFdo585EpxisBYhSaAQe1f74pQG96",
  "key6": "4TmM9AXiF4nvBfVyfbvexQDZi5ZYhh16uNjbWoCRhMHScymPftzbs9vrrExMN7ZouYgwqH2wU8LbCsST9UHqZxrj",
  "key7": "674qRzy7cJJT8qBQskcXombYFTTFu6GNnyEdDSRnyjQC3G2W2a7uGDyXf5ykukvin7Wwv1Kfak3qpffXPiS8w8pR",
  "key8": "4qeQyySNhyHSCWxhU3q1KXeufpikrCEinuTmmnV21bUNZsDkjUAWpCAreURAPcaJCwC7HL7bdDSNCdeWMGrqP2FG",
  "key9": "4TrC8VDKxHKGGEb4QvzPWnkx176EsF3ThZDngHM1bfGp2Ah8TWhQqYQWf7dCbNaQes4muXs2GXtDGZbmH1cLv9qq",
  "key10": "63PRwg8odvs7oUU9nTtWz2KR9gC4gKJMTtM9MAo4oH1wPpmz3qE3TgJEUWnrN83buaKhPbcFZBQyoZU7K1zGeNGP",
  "key11": "31XDwqViWjwDx73cHZqeW9ZBmcYQirSSiyBeFtJvP2jg7y17SaQw3b81kGd3oF7vGbFqHGWfceHPCMMzY2ExUzQv",
  "key12": "5kmKyRGaEbSzfsnc4J1K1o7F9u96zKu8YNwM2pDLVhR8WjkieTvpx6EHJS6wcdWh2LbEHU2gKc9TNQrguz2yaZdz",
  "key13": "2qVwMdiSwCK8gaeuTeuu5ZbAJ9VsPQhXZZsGeBsFKhoTWy9LGPD5hQrAf5vpCxyUxBfZA3bw6v3Z3u7jhWN2mVML",
  "key14": "2XUnRkzWeYX5kcoq38r8LgUsrWmfo4WKshNQ3cReWhMFMJCJbVhsY4zkMJyfdED8NAKKG2S4YWw5ZkDQxf8TadEw",
  "key15": "3BjZWgN8736U6tW5RAm3XVe2B1jpSAG52XMZE1LsvugVgMoNiG9qbWJPmAoiBup4EJ2Mb8QtqRUBcHMhTFVWxDyH",
  "key16": "3ktGQxLGpVUbX6rSWqzCWJ9d9gFXwE5SvdasGA9ppG26Fva8P3dJVyziHQ5Fn9qEgegwskrZ71cmhUNLD6y8rnbS",
  "key17": "5PtEuzSUSnkPZhKmkAuzCzq135XMaiAaof911Kq1iy48KfzVPhtXfYSqdWiSM3dJjFRQLwXGRMNDwKsEprxPq191",
  "key18": "5T8oPigMg1kPcUmuAaNRPkbSEeaWpGZSftYzUF9Nt7xLFBEJeCP9edJD7AofLYzZZ3UMxAEQGT22oysCZDENJ9A7",
  "key19": "2pEGVJq3TgHBxewoCRLShpbQ1SveqLQifjuxRrjtskxtB2gPsFnnqme59PEQJ5U1Rzb6giAdSKxeBqEfGkTPoymC",
  "key20": "4TYcFQuaPDbJtjKLqpqTLEcm96fKYCZ58uncHnaXR1dcFgv1b2HXagqsSVSjiA9uRZY88kosgQqPhR3ajC6M6PYP",
  "key21": "vpcC8avJNmFJFUTt7PvN91R3TWWpUcrEE5tnRXLHvAkqxwhtSUELHeEKJbuwpkPxqRNQUUty3j1XrAGHPwcGrCj",
  "key22": "4zSZzsgRd5fmQkoxW4W17kQ1tPpNB2LP64oV75Pkiw6onSMkBAfRbcjqyf6uNjYJCtuXFJfJfUhnrA6yBrXM6MQJ",
  "key23": "2SmpsVC7w74uppoNHJNYrgEGmfXeKZWxsnX6oHm33WSDQYn5yVPY85gLiuzq955J7GiXFdn563Y6p34xYcCtAmVm",
  "key24": "3kLMmtXKoK3xmCvAQoJRvEDQYRA2zg8sVxoHocyFZfCVmQ6E2KDrTHcyLRbr8omeD2MbiMEbptWNBN482YeJtKCJ",
  "key25": "36iVDh37BcRn5dDLViB7bxkUzPYWFYxZEk2bax8Zf8B1jmpSrM9Zm6yFa6guokiaNRHobns2L45aekuz8gXhE1Q5",
  "key26": "4NTDgDNEqmuzghf3ircrqpfFW4ZJTWXu83YtGSjmmC3Syztx6TTCfTexyG3ZXwdo3inay5WpVi3XPNzr9E8dpoKe"
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
