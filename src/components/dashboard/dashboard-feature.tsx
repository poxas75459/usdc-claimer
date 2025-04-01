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
    "5BJz9dVi3amEfYj6oQbvisnnvDBxSmP9d12ff8ZrDrgwkbYJrDQDevDzZDtmZcBRwgKUTGqivAP9p4gzBG7d945g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52iS4igYNUembd3fYbdG6zRt6szHCfP214bQTFd3Z25tEQ3YHexm2hWwkPuK1mJoGRN74JakqPS6hp9WTXGGPsJZ",
  "key1": "3Zz6nv4SfCvsPWUYP2cz7avhWk1G7T3KkJ1KVx8U7BJjZ6LbLsUfvBEaruxSBjAikiYpe7zvfQAJpyQzfvQrnCho",
  "key2": "61GY3D6dR2B7TcwLn61HGjpMwEhV63BnQBpNQWD3ad2ameFJutymiHD55otNVGgyJX7fVEHVqVZRk77LQkiqx6ox",
  "key3": "BEEtwhT55RVbnGUStMN2km61sW3VHgxnmM7SMnJjMxMCngFQcehweFgYU9u4mJfLz6m2mfomX6MNAAncjJ58gSG",
  "key4": "2YbGkcDgFpoLYpFotoVVE67igmEs3ypTJNiWQynY3PEVnYhYKHMpXVmo4sWWn4FtRmbe8zm3ErEAYCB6DAwEJyiC",
  "key5": "25e6aypKNmg7rE1YCGvK5obRJ5e4KDoatsg16tdTXMnzk89oBu5oVtg7LCktxn6tyWWGv1wi15Zt5zXoot4qHeyj",
  "key6": "2Srs3rMq5U2JbGuHLz3xCWWgYvUQbLNrrnPuH6pW7sQXEzEoZZnRufzEDREhj3RF4KKYXFPBjkUVbwi8fXLRpatB",
  "key7": "2c4h3p4gv22mcYMqdNFzb3CCW2DDikGBzGjKqbPsWA5YycYRg4gqTcrheHVk7fS3rbG65XHCoYjTkH5mgk1W5Cg5",
  "key8": "2DEPPGktGkGPKNPGueHSAzUtCaNHLA8YvsGaWaz46jfKSmS8tZKQg9QcmKvoUhGAGydfsGqNHoe4oJSm8jkYYkKC",
  "key9": "4D2q8Yhmes9rHCS1CchCbKNsHbn5qSB6JqpgLS2awoadxhmjuGDSujbaZKTgpi2UfKcM2gDWv7Da92cPopiywJhX",
  "key10": "2zt3ssWz6eamJDQ3j9AaowHxes2ZmhZoQ2cQitf3LF6DAEzALzerZMTCYh9bRmkBGb9r8VgZ4wzrh4uKxCJHmshG",
  "key11": "4EPRkXUWS4iHX2BzkXDxgM3csZxufcZ5MgGmtGSGw7ZNbrCQ5Z2HHw3uSTj4FTbQYvUTEFBjYoFZtr5Eby9cKpg9",
  "key12": "pX8cBYQ7h1kkDy3Rkz4i3a1RzBhXZKwWXNBeXpQcfe2T171MzeCXd55Zur1xurCcmrQR2qUBixXsNKods9DSS7U",
  "key13": "3N8QXj3pxVT7xZJ5m4GpdWfue7G3yR1CoemNxGBCy1LbvomoJV2tBJcBfwdA68gbxdSjUBj4VTMkRcRBZC6azWy3",
  "key14": "4No34X7vvYCUn4nJSfWUUxvDLTFD7mQkFxUFtmFv5Giif9TVbq9JtibqAxrCjh1woWm7iUNEfq2C3cd9W1zJJ8Vs",
  "key15": "3rVrUyXHCjQRXefgHgguobr9L5R6mjP9eB3EqDS72gU9fZFiFK5ZzePeFDJMS8n3ot4ysMm2ghTEdC1ydBixx2KP",
  "key16": "NefN8uwx4MYg5sqA92eCne6K3NSDTUFu5CnRi6wyPyo1cggK4aVZ57k1wKMGR1yxseE948iLXUt7VadcsRAnGni",
  "key17": "46PeoyhQB1SFPT4eYeueYH5vhQBwMNpXL1TpKj7kFH24vUmFXPpXf3SHZ63EZwrf9S9WhTehAGNmmgCQUYGy44Ev",
  "key18": "2z9UBVZcTcBLnXhfqxfFgk63g9rw64tYGdhveUQvVnGnS2JZhM44DnFQtfxSMk3kdKduZmfx2RzRAJYmgiPgT9xk",
  "key19": "2mfvSHcFLc4MAWFTErsUp9AdKFCUqspx6uBPDjxpnTK7USbN4YdgWzaLxBmBaNopZi2T7YjxNEdBSjcigeeWTcXd",
  "key20": "6vjz9Xzu1zSLsGi31U7AUxadUAUPRJrko9g9xzPZzk2p5YLwCM1yYBBXfZ3tNiL4EABxJDX3AgCymTU6HVtUMb8",
  "key21": "4Z4mHkLbEM75PBPVeYktcJn2Kgd5GjjFiS4rwuEZoizDczoWE5fFjMdkZLBPt6o2QHuKEdKqP9NZxPBAnJqSZjsM",
  "key22": "591JhiDPBzzgYXQXSwss9TTss6c1C1hprqENE1h5LmjGr8ezXQtjecopRWhxVC7YCGwPz7Jt9G6faSMsTBDQUDbQ",
  "key23": "5Hk1xxwhwXA1mhDhgwMgG6y4kDPycjeS4acjfAkH5VQ1Mk5XqcHgmL7UKeYWnm3m5P18gEsvdjcUAkJtpWE6ewj2",
  "key24": "5uxpnvxuw4MUZn41so3NmvbmJ1kPj6t54QWvycWALsXUdkqu7gfqpp2aMZdW3p77CUvMxXMTXkXPZvrGs75g6mpK",
  "key25": "3iCB8AjSNpHB66ZJUh3FcD22kaEpFhVSevMZdSsMfgVnykvPx3AmsjkspQtUijijQJhsx4CrVK34ifaXcSU61W91",
  "key26": "3Mw3CQg1682xn8S9YPUPFEnU3Fsbhtsz9AH4CfsydgSp8y3WFFJcgTiCe9RAzqHo9U9cEvThorBMfKzgvUeUQynx",
  "key27": "4WZp9ghQWmXRW1VzTshYkz3fqRaahX3ktMkjeTic5EFFf57Ef7LRdSN1Gz67xLmKqQ4hd8SovtupHvRfAc5VV2CH"
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
