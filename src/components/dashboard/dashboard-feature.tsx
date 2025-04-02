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
    "53omq8uuq6fqddB2fBAzuRx7LGZyzjc2rsRKRWu9AEPSKPVPZAvV3Rr4GZ51f2JqyWkgHFgBUWtTGKDVGqu1PUxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EAd7Uuw5REQuv2gtX7wsi3xxjrj2UKWpv5UdWrqfo3tETYp4Y8BGsvmCCFmm9yrVhntPDEuMovZ3GQt7YLBUhdc",
  "key1": "2k5kerJdYW3sJZGbmaGPXe3s37xZwjnFXKX7vSaCTPEeAE3KRF2SonvNkBgRZXRKiGKAxW6NSn1p5NuBjNDLrrMx",
  "key2": "53iR6KKnh7FtdGjRtt7Ex2WV4V5zFAYeErwrY9y1iDigLWURBr1bXBgevkUgBgR85Kk2tinttyXzU9SryeqjRpjS",
  "key3": "3xULFLgExF5NSUsYfPSqNDXsM7brHj5JpNNok6QnvxLu3Ys3NNDvYSmH9iCG7v9HczWBH76XyrpCaXtdDpJcudfQ",
  "key4": "4R2Y6jNpbpbcWbVcKQXMmwfdiXnKoatasGWNEYULR3RXYXPZyWN4fwg95Nec5MXczEFeWAeEo3wYdjuvxZMzbWdA",
  "key5": "5CgPG35yYW7GcDRQ6ZBXTWQB3KCFHwhFaHokWzgLzhuEHf9wN8jcTpSgSJ79wFYSkAmaAvteKWL21hwFDQSxjSBj",
  "key6": "4bAw2iGZHWiMRdEZdVptPi4A9Zm6pXX45eaPAx4k9VWvNzwMDsfZp5cqrqjW5QVDSZ9X4i9hf5CtT8R1NXk5n3vX",
  "key7": "9F4ALzgD7yqgstUYR2cLXxrEr9XnrbSmSNNBcJVD4ZJTTE1BLam24d6GaCmQWMjZn67VxT2JyoaR1w1mwDkdoeE",
  "key8": "3S7JtDmhSd4ioDtzSyiouwVwxk2bwR7NWPYQJovfveSbkaefwfXYYusG6gYoNNYrgSU5AnLYVPoyY6WTKmJ4PPpP",
  "key9": "3bEZ1ApDLAiqWwgDZ3Hrx9d5V3jfve2fWWdzkikTaDYPQ1W2iicaT8xBoP4VNg8t7VtKpszh3w2Umt8pTvP4t6RK",
  "key10": "4DXhgfn3uTmk8dSEeE87crhWW8xsmYePjHZ3qaSSUTVrCit6WCjvg6aYgsnzxkRTZRrU61waRdf4mWtxpKQpyw3v",
  "key11": "UTSdwKo6dtMLdtT2F5WMK23gUAxEHs3iQJKGBUwkcQiHss1t94bkxX9oMDFsRgARCt2w7CWiNMLM9Gja9Az546p",
  "key12": "5Q5Mhgw87QR6Eptf5QsWgGu3d9wK5PwoXpBFNZSwvWhdAcLB9FGFFAq5MQawwK4gLVTqvEKNEQWHyDqW1VfMYhtQ",
  "key13": "sHtn5KcG9EudHMAm2DzjMos9YuVsUgjNhwWwVW5gAXeRvwttBT66bBWw5ys6bTkX77voBFx7v25ZFFbiQZYh7ec",
  "key14": "X9DzncgPUvDfEGVkcwyAtu4wGwuzYQZXPTzxuTLEjJAC4KBSjWcPLW2vdgC492G721jNHprkpEaXA8xERNpcXKL",
  "key15": "4Sv1hreYMToN5Fs5ozaWWhzoSVdkYepENeWoCi1P4vtNh8zXnVQfwrhRQApT2HsaWhkgS3cCaiu1mA98ZoUH5pQU",
  "key16": "2Euu2if6GW3Fe2hw6nQDt3HqVgVFBEVybMgL2BVjJFbHRK92ND9fdB5eaX4XqDaGdvAt4uwL8kR1K47Lt7VYPeu8",
  "key17": "8C1BszV9YdTavd3uP7semsBNyVxtZT2uFMtLuRAHvjTg34AarkAhN2sg1V5wzCpZuW9vQEF4EG7XUn7grAdpFMM",
  "key18": "4mK9PjPCyGgyLUV7vxq8rm3uBmXaDHGkyPeT1ZTutd7kYPo8drQCyCG8gM6iHYddTR5xSNvj563SNZ1xzuRpgqhQ",
  "key19": "2kARYW9BvynaaCQzQw2h5NR9zqQ8ATexnPuwxykSZ5gtuM3aYvBEDReCV2nmC5naWQLk24rSMNizrF1YXHvLDiFV",
  "key20": "3K9W5LXFy5gqHFU2xuGeLqptLhCWwgse4mb8m4Aj8ib484TspMXGNYEKkvhBk3G4YBVZ8ZPUfJR4jCWFcxc9Qa8s",
  "key21": "3snbLwyT1f5acg3qyqb775JjJd7AqL6pXX9faCegcanakNPWQw3XU4eSj9JjNJuxU5pwm71w74CRYJMUth4nEwaZ",
  "key22": "4pSfnY8svRNLZX6MJEdLDLWsYRUuAYSTuLuEWLg8XwmjLsctc8fsvcqjnti7bDDUxfgEk1T3nNycsRoJcNRmMfco",
  "key23": "2MqxSajEnQinmAU1946548P5vE9ziTvkBbMvbuZEaMHWAFbkZQAJsPt8HuZFU35bDsHgapxZ1jjBn1SmhZkCSJ3G",
  "key24": "24LMfoPhgJ9UBtCcTzuY6qxKFJBLH3bYv1nHVZ1nfJW4KfhNL1k122xCSxzMMqmDaMzvCVN62SV7bHF5JNb9SytM",
  "key25": "5BfRiskdQ21NqjpYaAm1emVqAT8axG7sEfUKvBJRR6fRigfgjKUVHFBJHxqGfB62s293ytPwaW8xhcGHo8K14ZxG",
  "key26": "5nEKG6iWcPkuyQX7ugKnv1ztaqiF695AvBWpUKxWY4vvt9wrpH8KRis2ynQa6niCbPR29sq4LBdEQDmHQ3YdQfUY",
  "key27": "62JSMybr1sVek3925vS1eynpqypG6YDJhwVsG7TyiYN36iNbKAqp5r8wfYViekjAGqxEohnWmxT7KaNNN8Zx4ftp"
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
