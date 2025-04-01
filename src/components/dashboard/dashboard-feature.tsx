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
    "2HzvxQSsu1YZqCRuESRVmJrEgPCoVap2waypWFMT6dW8pfdMTSutvP5VMWfNouGViwDbwtWNRdV1ZAceJGsjFjw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AQ48zzi2YagrWjkLUMKHQGtUjv8GgrHK2yKkxojzUFbTmHJooFHyf5XxMfYcpGZZk6naY5yPCWZ8fZu7k6Pt2rx",
  "key1": "5FjKbAd7T1NjzPHqeDnaUChCyuyhGDUYf8MXjxYokyCper9VatcYssfUgwUbtR7uRCfRj9k1BiNTAowiufd6e1dB",
  "key2": "42unu3hVekfN8VkU7oPuDYre4ye48uZgsJPwhRf3B5Y6eLnQ8WvcZfEaLK6Ka4S4XV1FmodeDZTccZG8zoYbvyMm",
  "key3": "4UCRtdZ2fhSJiWypa16NHFH4sn17ZVwE65Wby9oi9vFuTXeepqRnTUdhrThfpYNX96hdDUQvW4nvF63w5RGGHaxF",
  "key4": "3vtLFPSLJ2ybGj6LK8qwnfEqQhgQydQoS781VPPVZ9fQFcFoGGJKmPBE98uGTFPU7HCnoniHyesB3J5mk5zWvCt6",
  "key5": "RAN3gvEX5Drn5ELq1K2y4ouLRq353BauQbEMKoThLCwUFcjcA6Vx82Rk7NxPb3MRetrmW7ZqfoJmMzu4aXFZd3m",
  "key6": "5kr63geGLPdYCbb8XdVH3fSd4nLbtf9QfWK5ew5ptxgm2Kq1fMfpAfFrEZxkcrm8P9jPLm7Vfr48mzVjavK4gMf6",
  "key7": "2iboaXHmmVF1aMJs7b8wKTMJmAmRJAcXnGMHMimbyFz8inKwyTdK1rBor2NYyDV6p7XnuZFCGLexLFqdwQa3V3U3",
  "key8": "5NmHBC4cgaByhwWzXvnBH9bx3mYhoxe28DQfpppDeWBK5uoAsbxip1WVbBHoV3fJYHGBur4WGkiSKPdGFGhm4jqN",
  "key9": "4uBu67JVWzaL2q4PiSn747ysSQVUqGGEuRTyV7wnKoNGw4gs2PU1bD3e5DuutqXDCPwbSfKpto16rzudJ4qMxnSx",
  "key10": "47wkoWoUsnbf54X5kWXnTGLiU5VvCmzAJQBgzYHcC9xw6CrHCUPM24tC7saGVn2GSf7DoQ2pzn741PjPQ243KwsT",
  "key11": "44kQXJCoKd8Yd9f2eQsdDB9EE1fVSY3hihbu3Do7u8bH51YJfeQkTUz1Koa2rXiU5dKqvLeH1EGaKK5mLdMcNQiK",
  "key12": "4nSoEiMLe8NvEYxcv6q8hLMedTaL3gbWMAvKmKYRakEU4wE6kC3FecNsiyvZNbBQtxQS5Cwz154rrN68dk9G5AKE",
  "key13": "2u9QBmMPYLMDhXLEYcUEAT4vwkopjVoUXvnSQzKdwtjfqJZ7hwbZWgKQbLf9dJKUv14nWhnq4Fg2oWQcxHpw524L",
  "key14": "5Ri3FpwjfGQQWDbTngzrEPzmLRMx35jymkFEsvxcHwH4JD7fDnugUjawjEcxc6uv5y3rNH3MNHA6xsxWTc8QBuHR",
  "key15": "3DNstJ9R2Q7UpbKU7o7B1jBAxoRh3WwkhBByRhqDJbt8qWk94x1AZrbkzsDv2q264qcaKbGK7vMPPbXYmvkX74yW",
  "key16": "4NL3BRkF3f77ugsodtodR2MJ9fabHmcdMWeWoqtgGFYj6Hgr4sZ1hW5V4uxbGM9NZtSk93jx4zuzw2rGoAfH2gAs",
  "key17": "4Y6Md7UqJSkYW5VAGp5efRonuWu6ELWkXAGM4RZEvbRJdfEcRtpLSc6aAH77pg9kFjm8pdCsNViUD7xoYbiBWu93",
  "key18": "4z1W1ZYHQisENLsHBeTpTNFdu8824Whr5GUQEZW3bQxLhY7yRAQmeFnXT8gC1ii17cfprte4PwHYZpfvNiEb68uA",
  "key19": "2RWERqqcUeisz1ZZniv6mq9Y4eZf27CP47Gx64tU7gs2r1sHHAPoCxG7LQjny7R7Jq7i3fbr6aQRXYgxpvreG1vb",
  "key20": "5ejXitmQUiPV6EM918mQHoZyNVZW5NgYCok67avPFsdrJYr35Bxo2ep4Mg4kY9W8r11TaW6Q1fMGcaPUHZkfJzb6",
  "key21": "4czeMxZc7iocMQyoHN8aaDhs1hTEU3BK8CZXino3nj7NXjWQTzkg2vuM1biinzw1v4qMkXNGSLSLFHajZraFuvx9",
  "key22": "5zJoQh3C8BidWDysC3YvB3eTponyybELBdxVNpbjxMZDKrnxsHSJw5o6kPHBDsT9EYz2AuXvDMrL4dAqdJCqem9L",
  "key23": "mWxsUb7pcxyazgtYZ8fKu7bJxAYoakD8EJg674MahK4sZVGvHjvoWTqRqJDrUJfS5RTerXQawV4VTWj9KjV8f6r",
  "key24": "2nDgvLx8Q9iWSNGRgFh2De83QaHez5TJyNDMkqJf75jDgmjwFvPje3DHccFZZ3JCjdCXeSuBXFv49vuxW9pLiHS5",
  "key25": "2AwVzfyeZXZ6Z593X1BTmb8ND1PnxjH2DLv22e1VwVvzrfiBaGpAHDaWBETKijqsh7w97QiJ1JCqvkP3Tspci9rp",
  "key26": "ZwD7ccHsYXt52zRqU5ZTTz2rXpJ9p3Va3PzFXLpgdC7oGNu1qToV4HcVtHy9Ynuuo1z73iboLB7YdrT7w3bp7CY",
  "key27": "379j3ea7S8ChkHek8RAYK6SiVEhuWAZcsq6U6iuF3QSBtTMHnYUJJoY4cLiSfoxcproXEr17vY5uVrytKjF9vRDG",
  "key28": "4rnDrb8RqCYkXUMxtVtWUNc4K12n9YpSRyT55ajPJ5PiYZJhVKyfQuZF4C5q3BXUZvvr2m4VbCYD7A6TPmP9yBrp",
  "key29": "3LWM4Csr2iKeCsKxyBtLDHVHvfnhdHY4zr8F7iu4eqfCTfAGDi2BpNDeEBEVraEPmoCjT7c5bnfDbwBpw7rktJ1C",
  "key30": "5AabeRTSjLWRr9DaoSiRJBxx4u66kN1YZHoi9iAsR9J4SrYFYQvMGQevb68MowFpBzYzkNZShCgnhHQqRJxUxEwn",
  "key31": "fJHtFgag91zDWqsFZ9VupxVtRk7LmQ461XPzCuyUMagrx5yX4tmUH9ANzxjyuRjmtJjCH2asQ5vwVwHg1nYjsa6",
  "key32": "TDo5ixLXHfwJzreCBYE1X9t9VXGwxSF2cSaBEg4tLMjQXziss9CGwVJPdGvXWe8fh2B85iK76zTMrRxUZcyz9dW",
  "key33": "5qLeAPbKnqWtpqZ3ikEPLpxCsjbqDNSTy2n9sUwEhdf4M3Dsmv6CziuYadazLPt8aYkwi1Ur3hnT7aNkf4JamZQU",
  "key34": "421Z8SuuxSrLa6pUo84QYS5fQkvU8qBZXTVfHUCCJUYj5isCpU4qg9Kbazqpm5nJnmr48bz3az7KexsqS5m2Phsk",
  "key35": "3EythLWr2EoiRkND2te3nu4NgkSK3GQGKHi5XVkiCK9g5wRrz12vqVUKpDFeUedRt8C24W6FQeEJTmjoAtER6fFe",
  "key36": "B8z9k87prnDSGt8TQ9SGBdxSLdQBRFJpiyXLWZBVuVx36rkLpRvJZcwYJV7LVcKHyFPueneqxYY89TBRJuKMWTU",
  "key37": "4vPUY3isyjGo6J5XWWDNk697n6MTgG2SM8FWn1y2GC2QsKAVWZxN41bpVJLqKX2b2rquVK1GJgKmX5EibNigfhjv"
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
