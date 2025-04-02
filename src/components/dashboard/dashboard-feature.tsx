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
    "3Xky42PXwKEKkBd6kRdCYurpwPu1vKpRfP6pM2F38naDZGfsvDEXBpKYyjwy9NGZ5DuTkAqFPevGmdyeD1GumeRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Byq53um9nSNcA9UMCSVTeQDfNY5mEpFG1jJbBTNgSgpv52kd8BQSg4FtsDmJzL2h4RC26C885RRNQDqvSBjdh4k",
  "key1": "3Wrir2D1jQ5sUe81gwKuCp52NB1JLMi8teZKF8XGhTfRFCjjaks3XLonyy8vy3TNx6u3Tr9CE2WWzxq7nMxEB7HM",
  "key2": "5drf47h2R1pybY9QnDTnVatH45XWKLfktsn8Z7KhADxF4rYEbJmgcfTA5nYqbAQjcBkcqiRhuxWN8vMJkkRcru7W",
  "key3": "xazovkiTJFdZSPsRj6BLtjaij8BSKFpfFoxom9DNcmzrHo17QJ3TjEJNu4xQ1uaRAnrwPrEkwyWL3ZghXpcEDPi",
  "key4": "4XfWLYFezvLaSyE122TxkTaJG2mvyc7XumfRiAr4XZJhsazNctcGBNXSmooG1H4inShhmwkE4NDzFFhzc9QX6uFt",
  "key5": "BLmQgJFPQMoG6Wo2RYafvS1SYJfFL9dUEBcAfiSCcXv8aFoBcpJJggAoK7P1DtVkP594KvGAfmpBtrRGUV83S6v",
  "key6": "DSsMDRtFvckyBwWviR4wp5hGHveNbEzA4jtJV35nzu3orgTdeF3Q2R7scLHKUB4VijC9v99vvNUNkWZreSzudea",
  "key7": "5Rd4hVDa5yoxugFmDDR554GEmouYWTEb344Z6bm8JkCgLqWT9JkqvQQF7eZ9m3TJRdsp3BUnxaja3PWWTUCEQJwu",
  "key8": "uZWZKiWkpCZq4cC13VdhFnyHnfLftcKxnhzkonk51zjdGp7UUofnXWkkdiv8hy2vNU6TiAVZ6Uo4onLdiRSWfvV",
  "key9": "J4dq6ag5iDqLy8MVKb6JatPeqE67dfKm688MNcV54282wrZfjgLSQNkEdmV3fe4hxJe2A6K5DeN9ghuYnknAsEf",
  "key10": "2bnocwWa3GW8hFCAqicvzLpH3NK7Q4K2Stn2WLj1r1Ua25TFwoQ7FFUiynosLhuhnbZt2rzwQD4aaRKSUG8vTgSD",
  "key11": "2Mzt7HAg7jSUmJCAAL9hr22PdWhuPw3sUE153iXX4ZeiRHLy7xsisbc84DdP26mtqJhgXp1jU4Rdqn3nRaav2fYo",
  "key12": "4wWj7s9T9PwK2zppfS1J6hU8BpmsUwXkXX6HMdMDvdVX2kS4jhZXh45AEVR3qfs1XQDwyEXfXGENTPpDEZF6dZen",
  "key13": "cKouptMbKUevPXaiemTUAnDY22bzjmn9DNR1Y9nTb7mZDrMhxohFh94WMUYBHhDqscUFaPz3BLFVW5hDkDSMCmQ",
  "key14": "2JqhNpXa7v5RTKQLLuScz5pvzy9wqMQq3PUaQqdTX93YhFRLSr5hsXLVsTWjZ4QT2hERKYtGoSHnibzoWumsJCZy",
  "key15": "3bff4dxG5s3CkZpkQsTfordwEyYsRqawFwdD5LWpCYmBNfoKD3vqPuhTvQEdcxP36XuktNRmQVQE14aeLdYEAB3L",
  "key16": "2XHgUajkfERXTTfGMxECb9PxGRMHbzvaB3fAgXsvioikWr51XYoTQL1otwPfgzkZLmhxyA2mLsaXzw3wnNfdZKvL",
  "key17": "f46F4KyTePBNiurjR5LVzQQQs1iESHSFoy7ibiTHSUsSjoHcPeTw46n9653XRpJfbJMM9A2vMGVHaZTbKF3Htws",
  "key18": "3BaiRJJfc8Rb1cSMWENk8aRGcU1SHk92KBTLQsnYaqy5Jxtv9kwqzA2MUVA6hHbssNFbksm2tezFKB4ZLac8RCcD",
  "key19": "5pCV93BC2CZRtZW5xxZeXtP3tkcM2HWidhxRqBaF8jdwFZqzwyUkCmEWJLgyP4N9yUyiDiTtpQ3KH2bXBLCjQ4HX",
  "key20": "2vdCAHwaofa1P96nAeQXNspLYWxW7P6a38xRrMKBsYaPKZEfdFcfVF5Z5ToUL16p9kdcMg4fvBuc9PMRtTVR84wN",
  "key21": "4iiHkRVEP3mQKuTWzcrFx6X2LToN4PZ82zfS6wx4f9ZJiVWQo1h7dTFtF4noZZ5XumiYUYvHqKfHt6jEqd1E5cWP",
  "key22": "3A8LxHhDcQoaXra3yuHjdXfzoU3mi6wwuRZdwY7As2qr75Ay5e8zjpp4rfYcTPDuE3UfrGEHGPUwNojUfr9XGAuJ",
  "key23": "49iE7M5Sm78fiydhTdPHUE7kkmoLK4SxuVzacstrDKLahcvLz4EM86wzFSEmjpiLpQtQiWDu2QyxZDZh2Kh6RqWd",
  "key24": "4zAt1fT9q1XcCFgKyuwZgYB25KoJA99wdQde1ShJQ7D5T49B784w9XcTVDxdfxNyUSkT2JZpY7hL4kvGt2r9QKHw"
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
