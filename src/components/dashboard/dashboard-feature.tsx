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
    "2avdbzyv4N9hBmCScmGNTGmkvg7g4oghKW4AHp87kQjxLWDXGbtZfeefCvetqcvrTNfod5byVEsXqRuhD7RgHe6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ebA1DYGP3dTyjZEjaofUFKc5o1U585kxZUzray94hcUXJSULsZ9ADoSTJ6LPBuSZHa88ExoQT2QEXxhSHToDneN",
  "key1": "5STKbjiEooMfzvS9KUW78uyHPWNDfknMHV7cAwKQEo16oRK1R68E9C4XYPLGu5HzaJVXZFrGX45rUiJCZVAmirTe",
  "key2": "3D3QZtwuE9Ws7SrV7Ps1wikntoaXeosWFd9hqsTx6jTPJKyxqGQ4JNkedFM1oAzxD5D2Src3PxEGCGSP47VrWnqo",
  "key3": "WcnRtEMC7zqUHUdTf9cEhC6WmurNp2xRCybeh36UB6Do3WGCZ34TaCVNToYK8V5obyhSoMZeSFwrJdFvbh6N8KR",
  "key4": "6234T1iovZj5t86GWpoWK4MV87e4K11uVRSWYv11LxJ4Tv276kWPK2d8WUQ4aYL543nsgBU2RLtdHrpSDnFwrTfU",
  "key5": "5kNakR1eG99pfw4MFVSp22BHEcBvYan8fnF4kdnrGQA1k6btGSko2EseD6ka2gWe7cmSqMJWZb7PMyrUCdJkbBFh",
  "key6": "37rjV4TPEUTPiEgcnynR6AWxJW9CozRFBd1NY2vDhjAiXe3E5wY6NKLJPifyGYYhvvzXuHvKb8217FqFGZ7VDFdp",
  "key7": "5mVVC5nczBaqfMbyHn7tf27vj4ibASExJbJFtRunWAgp5zuiKykzrJoMYvKuhFbU8ZQMRAua4jTtPeMBBuboh2WV",
  "key8": "84Wh31msjXB4vhn3o2yXU1KkUsZ2wBPYTxrTYUA23dwLsUGeeij2Kk4EbDdKdR1dBt66LVvi12Rq16ecERP7qZU",
  "key9": "5bYFBzX3SXWnV2pskj58AK3bfhZrXAdZVpDDgkfKPAdNobTybPVzKW7YLiPnRnvrgPPEfcWki8D7Z3VuTZeBdYPY",
  "key10": "Agra5xAFZ3fGinSe6BRSxqNMT83yhKYb7YgKpKRJffnmA2yhQqEZjuqxfRYLsMF93DCHSH19QtKSbUhVk2TKUZd",
  "key11": "4dQR2PzgkWnQt1tiN9vQG2bKerozAaduRHozNR5UVtKoQJws9GZ84Rza8Cfawbm6TR9zZBQFsbKtbnKRsuX45vAq",
  "key12": "39eqqCSj2tnwVYdaHXVcnpuiDTv2WByixYLnajY4r6jdwsAvdo3RjqrNPgvT9yR3FoJNfaJx8Q19XVfUuMuMR9Bz",
  "key13": "2D33PGT1r18aRmaemG6kYwTsGU9T3Emna5LjKVLGu9RLsBpL56kWJu3H1MUfufnTqhPazw7xQMBVdCpYXJZzKcaH",
  "key14": "3rC1HQJkUvfhb3H846xH7cWrM4uMYmKQDvN38igz6UNaBRL6DQ72RDfd1qcwAxTFY2kr7aG6pV5TMcQ7q2cSkuvV",
  "key15": "61y4mmkHCHCHERLu9jjAi1LM9eRMGVHwcB2fHemD6ys4M68fQ1UAYtKChGZnL4W1iEBDQYNE48nDEecv7cXTbJrc",
  "key16": "3sZY2b2TC9c4bxG1Sx3KEPuGhsE26sxFGayYy3jU8hmZHPnLr93s3at2nHfqgM7VBzQ5bukjgYeWzqrv2PBbVTHk",
  "key17": "5T51WkAmAALspftS3UdzppvTCYdA7AV9btkuFzkac8VNPj3ME7vDmJ8KEjqvd3DfPEAUdHAKMxXDijvRHGPEwQB4",
  "key18": "y5dg5WwQTCZNS35fhv9FDfhg28JX8mPzP5NabRpVPpLTqycxGVqftkYrsso6LPcrHLzD5DPhbmfA5QJcCTVnYiN",
  "key19": "3ovRVZaFcje5gkLQUJKfuCbeA34n3oky7o4ZQGeJgYinEKJGZNuo9xQKsrvXxXqjAjWTd87KQeXYd47Yxeb4To91",
  "key20": "5ekgtB8zang4AosabsczCzQydYrgix35JSfdqoeFTkMfioYABB3gH4Xv3v47KvgFD2zGCX22cQXZgdHVVVxEbxmS",
  "key21": "3rkdK4wQeDA3B4SJR5ZyRHosfFc88dXQLR3qLjVKHgeaASj78hwpVqH46dcebDESAu9bBuNDVGPvidj2rDobxhAf",
  "key22": "koi513hM5yUSeRMFw3r3ForWnu8E6SYzz14QbhmgiGSskmKwouC3zd1CDLEpQPE1VWD6VXyJ2G8WMUY27vqzFQm",
  "key23": "2QcRsyg2uM67W8DDgpTpVAfKMussatB6ap8R2BxhMUoqyCMXtgT1AMfSFaQCi2a2bnrNmfmuapVJefsEP1buMqZm",
  "key24": "5CrZYKu6zQTSNAtiYxVrAxnjEGB6t8k3PmUoofxotx6vU1yxkdnmr53X4czSMtZQCMK2z1XMqSNzSHCD9tsQg8pu",
  "key25": "6ig9k1ULx4cn2XQ1BUrfDpKXRqDZst7BxnS7jGiQZowHp7zQMnqd13QN7HwzizFuj4vhM6fCuCbcwhZPiyqudeh",
  "key26": "42gaPJmFZ5tQiNMQTi2Qh1jeKpqddtYFqGaRTT2TqZYEjMH2xQYcM4ukdWTHAn6AQUMS5jTZkorGiqk192jmdiNE"
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
