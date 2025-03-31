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
    "4EB3iP7wMt3gsu4Nt8CTnuaRWNRmrbfnC83wppUGy6RmURsPtVrXs1eh8X9DT5j8EtmNYyFXJrRazLdDhDFBiJ4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39eU5bNqyW55UfiASP6LMLx8XqC7Xgohz7XovBNcdLNZjbtR8QJ126X9gRbxVXPdTTQ2vikZ2kC3AsXRcrVvp7a7",
  "key1": "2o3podaAH7nPnDk3uDHqUc4jyHF53aTja139kayhPM888c6DW4LbxMr4cPKQZEesJ2p8PQFYG9F5KTvPGqVd8tZf",
  "key2": "GAszUig6mJkPwS5xn8wQq8wZN8jM1B9QEDWwhoxjrZoraqJVpRPrvt633NK4SpPuiaW6rostZ4MwCNP2tjGjcAC",
  "key3": "3DrfNZ6EyvoE73AdMgr9CejZd3R7vLjsVQ5KS2rJsqx5oQpX2KJhCCLy57dShuXLot4173bLtpiJU38B4qEj42D3",
  "key4": "293ceoHzcJAvgsX8LgHQeNoQ5DHue8vU1cK6Nv9xzWoPj1bcHwvbfFwHk28Nfyix4d8A5nNrgrWooRtg4qB4H6DB",
  "key5": "435ManpQzYG1G9vnQJ4n2wmT1yVpuKm72MejVqusrNb9cK7LNPfrKL1828KAJC9L39j6VfzU3S2dykHMX8uWwQZc",
  "key6": "3AzbqJNf78F5utKoatYAT6HvNeeRNqZ3T8E5sBSNbo2Nz8KKgZzdxU3TMU89TcLU1Bg4jDdS8TkfMXvde83qvmq6",
  "key7": "5D2gB4UVD1PkbZubMNLh4pWV9mGvqFc3G6m46Lj9nqKch5oo5sZKugWtznmH1VzjB5cjGVRzPvM6J1JM3UiiYYTt",
  "key8": "4KYrsVc2y7PQGqAbHQU3hbxisktrrARVEYwEyFKJePzpdySg94ftbTXz5UkdDpzj88ZGsw8iF7zNSQUjTARapuuj",
  "key9": "4tBjmMjuJ4k73GrBvcv3WA9B4WDymmsB6ZHfdYQZ4nZ8gFLRpzyLe9NXfgSGYzuq2aWhCdtUpKYJUtwxLKaGGT2R",
  "key10": "31t1AhDGDAyH6zMiwpp1xyqndAYsQUhPkrTg7v9uRGnQEGdn1U4jSZ1BXJdGHE6D5mBmeBJ7m1vyKD9hujCWKqgj",
  "key11": "24yE7V4qBz5YAqKfNjLzNwjiLiYwSeeQiewrSsFUdrn6gj8cyrr9BHsi6fN45FbNFiv4W6bW3hmMJ9faj4Ge6reS",
  "key12": "3yvHD38Pfca7ce74GyLAvFmAX1NcGpGMiWj8Sp11ZzS3SiKm4cwMs76HvrxUqbJ9cFYMPpJnCWzSZ7zGhjztqGjy",
  "key13": "4a2P3nQ2e26fGLtuEMzL4GeUw6Ez9ZWqwKReeZDwnGGQ9QhaTwYFcX72NpSRZt8H2JPwe5dXd62CZdWntXqZb7TT",
  "key14": "5dEFYt6ConTe69AXcB9e4F2Ni8VNpSLzXaWjU89kv78q2wbGHGAfDjWXDy68V2zYpzGYAjPnH8UYuXzkVAHCzkuP",
  "key15": "zA1DRDMvonHhLsPSTf4PN9JzjZzBQpwdDjx2VR6oR2q934XU136wnnyZHXHFzg4LVPAGw9mkX5hkFJGrBf7PD1M",
  "key16": "2CqFAsjRUiov9psTtiZSdU5f2j9V8MXaV2syoY9iTC3yE9T9HTM4eZfCFKjbe9sLzzaP1yw5EsrVvcAef6jQAwY8",
  "key17": "z3TfTqhZ3hNsmbyswSgw6jDFVRVgP4qu2obbuRuDB6xndoxy5PsNYG2XMcde576QVhJwfuZNud2Eh5DVbWYkEeW",
  "key18": "2EdC8HmwAYWwHRPEfCx3Et62vS9wMeEEbAEzq62WPx47dLtziH6jGziPMKvphNEyrWE8WvYc3eaSBTRriweC2BMR",
  "key19": "5oMakJLSkStrVxKZnHt7wszz3rBxsXTqYjCNYMbz8Q2sGCCcTf5z2VSyzuEez1MrbqzuA4GFhAuRu3tiqQcTiQtJ",
  "key20": "3LmSZxmNoseBX3QtuGG5kLWJK3MsgdpSwF4Ron9MfPsRDXCctryJU8HTn8STiXsZEg9XhD2F6M1wN8g6QgFetuTc",
  "key21": "41Yahav6bKQy4kQA7NKSxqpdzXE4RjdZ8a2wmfHetYWF6uJzybKN84cTHkVDhbTzrWLNYTUGhb6HkuMxeW1TzSRt",
  "key22": "4AEbzmRZwGjymNW2jYTxNCW87syHELeaZ9CRBPz3xsYK9nmGcB8GM92RcB5paLECQ7ZprUi5HvpKqJSgwvHJFmqA",
  "key23": "3cHJs2m6WP6Jiq8o4WFaMmj7eAXG9LEfgnZsmMonB2nRrdvhouW3fkETctKKPfjwiRUq89FbWxo7K9XAztvQSksd",
  "key24": "7JZFCJTegaMHwe9jLFr6kRMb28ekioUR4a5dFr8gyUX4RhmUZot5tzJzSGYNrvaNk2vRHEj7biQH8arJhh6CsEe",
  "key25": "52mTcHtY8a3twjR8t7MP3WEbb4o9Da2SUCCVnKSFdmZz3pFEM138ByspULzP2aFibntZGBHaXXz8inMXyED5wha",
  "key26": "2LfEJg8SYJfEhtLnKcDnnw61akNqjQnaa3EFtov3V2yiHt7xPMH8zYCdmJj3LzBYHweq574RtmSyM2WPs7tbpENV",
  "key27": "4VzYdM2axHsPo6wnNL94VevVK5shynMt4paT5JDsjWa1YUhYdoWA91qpUzBq8MXpEjpeoMexaEfndGArofwduLaK"
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
