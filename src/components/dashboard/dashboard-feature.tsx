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
    "VHLf9EUpVV2b9n4AzspjZdPWfuC7xptbyG2fcayfLUeSEDrgGgeP3x4d1gGGEnZNi1fU328DCtnHWGqd2QfR31B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xH9MipUid7HtorwXez2BSzEQvX96PNfLyPCEK5h9X173XYsAnKhmrxQdUdG1UdPEhSNAA8GKaVqoCxJBxofGQVC",
  "key1": "58s5iq6Cb2gLXGNutxduEcjAmPjQutQ7Rd7oZ9D3cPgyGnAK6erA6oci1odQ3MLmxtJM4Bxpt9nRMySxhVCdEb9L",
  "key2": "4i6c6RhNT6ht7GaD48TjHLFjLJN7cMwAivEnwwrziDiTKw8rRc4EcC4E7AkKiGGgRRJNqkxMetYaZCyxL2iN3EeF",
  "key3": "ome56FWzr36Awai8vfK34QKzCnHHWDLBP6bx37xm1JraQGjfn2YKir5XseJnRfTUuKK6xQ7x6x38hJi3BY23v2D",
  "key4": "1DS576rHCKiUPxTKu37VvzJKpekcoRiYj2L8WVokdq3HNXa4eM7RRU3Xc7gD2XJVRTVmihHNLHBxSJScxN25gCr",
  "key5": "cmXBhVCXomPpgSFJHp9qTknMK4adqsKSXbbJpiMgYJLZLogRjBTMFoBbKtWn9FAmseCMyUuzJjLHb5jUnCBHXjh",
  "key6": "3AXfzydmHDoLcEM8nDuVqhBAgP8QM17JYCto8dshjfhV9qvZpjtnvGiozWqyx6kTyvVN9fBSGwkBmwfyvmwboReo",
  "key7": "iQJuNVChAtQmHhKmsxM8A7z73V35RLzsdtusqktkZrGT1b4bFgkRbHaqWBBEAGUMS8uXJ2MzDCefpSWtYH3wseQ",
  "key8": "eDt9uAjCeQbSaFoU4sAJWfrbcwnbD6AS8SunAC6ngKk7BUJTnUR1Co3n2uTCkU7WhujsbuKRZu5wTGch47qccgC",
  "key9": "5Umyi6Xt3jXncCa2otSUcEvVThV7XutdK1gKJVzhhvD7SosffagXHEZCtBG1HyiEucEj4DxUzVmcWY27dr1H7Yfe",
  "key10": "4uC4F3JNCUzX265quz2EkgkGbCVaQYxaRPjVEzBpmBY2jdjjVP1T9wWqsvEfX4sBgDbUMQcAmQGcUkfRgqYqFa4F",
  "key11": "3RHqmQotxcBH7mYo8oWgCD5QjHvCWkoAsFfYxoNjSFHPBLmh3JS3M8p8CDJR7JNybxHEpwhehjVmFXazUo48Q3ad",
  "key12": "5z3RdS1qAtnWwYGfLzEE5V31rcq4Kf7ySoxQTUpwJ5XziSzMehVpFJq7wTRUoVTfyhtX6sg8EPQKC9K6RXQ9g4FB",
  "key13": "4WVYwWWpeN2Tdn8tMdHDaRiihEbkRTbbvGhNdPZrcm9CncW5UbZFLNvT2GH7PpMpZ2amzeWNvPKty8uDPdyKrpsF",
  "key14": "2qgDakMMzhfMVnfJwJzPN6fFtMFWJy52JBPiXwp2kwJYVXFFW2ToSokbzXRkXXiu9MADLwtzCX1LjjXFs7XvVr83",
  "key15": "eiDV2eJn2NBLJVCnLohRBASf5aZ14gczxUAKhWxJCr6PZTWxchM6EGuNNb5aLfd1eGMwsyddgh67e2QqFKwix3Y",
  "key16": "5U9bbN9ZL4GNnyrfBwyAiLW8HXoHopCCtgwic7QqeyFSkyqE7oiwJ7MggqaL3prWeMpXeWPP6R24mT2mFH4TfQLD",
  "key17": "629Cp9ZmKnj7bq13HtqjXaYzc6NDru5m1xM5KeTskfqKiFnaA7WXwHiQaFUqhgsikXefrY3ovDgipSf1E7tUqnWt",
  "key18": "64qZSaJhznCwSqKRH4nKP3mxxWkFNCeMeFzHLAY8vuaLv6Px6Zi1NxtpSpJAZLDT35o6mKPqM3SJutiEGfSmp8nE",
  "key19": "bfzXZ97xFv3VfcofUgycr631DarwxpdH6rAZxFhcBf26vwPeMgr5dgUaKiD55qibiFusXnoehdHuuwYz6ivigfo",
  "key20": "4z3b4Guj8jq4PUxJTtb1T4nrGMfCMuTneySneMbxspUkCzLvvpX24FHqEHNCMcRDfeBzcJWAZMGqZajT9akQRbXh",
  "key21": "4E8krB5V6GnbhYJVm8sPGqeTEyRSBrrPFgkxypvkmTVHQb3Q4hFMjaKBMRLy3EYisxpBPsfSFw8XbH2ynXniGwjV",
  "key22": "2QLKwcmpEySxGmukrCqC5kkQ9zzK5xmU2byz5GAxCQ9C5LmH47wT6TWN2pbDtnBkLr8QAQpWecCwYDvsyVvk7e2M",
  "key23": "424kH5EXkaFT6VaK6J6DzW2tjSLrCGhHKdEZnjX66fjahh9bkDdbMFdN118mx9rkvtjnwiBgY5iFbbX3qhvMq8id",
  "key24": "2pNCy7rLCmoJ9V9Non63HvYcU7BmR7s6u4zGfM6iTyMFSiu5ELVGhyxceBjwV3i3vap4C2EewLQ4so6Zdrduj5HQ",
  "key25": "29naQHQUqjx74XLhrotzQqoJv4LcTxfwMcuiK4sfJKjRLszuSqMwLkaSjDSqEzdfsfstENXdhTN7n7736iuesugo"
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
