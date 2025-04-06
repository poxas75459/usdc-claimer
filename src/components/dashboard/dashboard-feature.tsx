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
    "3NWH892AbFUbpt93hp6QnNdqZ4JkJh6syMus6KPtWkqwkKDetqCzSw9aBMERCzHYnPevtmMdSfk1UCEjm6kQZgTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5keXaggTcwnZf2JHzxBatEeH6udJtTx1xVPSiv7CJ3YHywTo8PvFnxfqjY9uMH436vsLN3sovJZvidwZyXmhaPNP",
  "key1": "2Q1orNMVJRrRKgkK7PP6UWBBEKZZgZq7GbnsxcKdR9UbycmM9rkmQe1fnCCJ7uP64rk5hw1HrxmpxFTmoJJDfjzn",
  "key2": "4C1WzUoWK7xAgJboJYa9Eh318saw3uhnjzWcGnCbG3v8PVwjzKtvgHgn9RZB46EQJ1BnqpCJR7XQYytkBuyFhTpf",
  "key3": "57wFf2w27iGnvqSGLeRhcW4huKwajKCfH27wVsLLSr6RC2gVBe5umUdNSHN7AoykP9khB8crLQnBPqB2fdLX2FHc",
  "key4": "5qBuKr1xpjUwDti31p2QU9WTJgFxXoVBpxiXA65kpWjjbzw2FWNTLgtpnyZGXUcAwV5E9UsVLJpruqo7iNjDbto9",
  "key5": "zEgzUYDMEKeHdGWpRwDHqdMpiKgy9cwLbhbfHM65Cui9c5VvQCHJ7FZ2SGDtcnspC3y6cCwrQ92i5pwSeCzGau9",
  "key6": "4ARVC8ToJumLuhaorw2g5Qu3kq9xcQPddFK9XMcp3U1CcZA5yhDbqQ7huHgH76tQdzw37a1bZD24o7CyVaFdvRL2",
  "key7": "45Ng1Pz7DuqhdwxrF7cJpsUPBxwd3xczLCLoUEZCSztqPoVR2JMpZzzUH6s9GAccaiuktEGptk3Gsa4x37hoEU87",
  "key8": "mkxrDuSHJbihm53huymPHQFWUFQDd7r9GABHfrD2MnRp7Jy6cnJVbJEAn4YVgA6PDEV1MYQAej2r3kErvXybxgR",
  "key9": "2HvkQPV9BXzXSPzGJ6YijcykBpAkALGAVWsvgQ5vM7xv7sFFHcBk3vou6TTaACZW4DYT2C5ppuiUi8XhMCcPcwfN",
  "key10": "5K8zzM6uYKr4CSF5ET3MpPaCzLwUFk1buz9URB14o7SbfqXfPjyW5FKRrFM2q2Um4vgs3YKsjZJxeXs2SF9SPKxm",
  "key11": "2GV5tzfpvbWxkDuTXZ5MFbYEcsx5ZZcctmUD4ipsGYVHRPsPH7LZg5Epc9KNqZRXsRh5V4YyUWYbD6XPmHUWWd5h",
  "key12": "4BoDTxe81gF5mWbQ1qzxW18HMim1aVzXayyYWpsuNDGYkA6GemUjkZ3vPUCHiHfErfrrMmub8YcFvuSRdsgN9BoN",
  "key13": "MMqE3eyhbwoJ3ogbsNfNjUbq44eqjeBngVgD7BwbsxvJiCydkUtX5b5UtgkwubVAJh23JwtChhbh4attyLBXcDP",
  "key14": "2VqgsVqzVbCcHpxcm1nbrKXEbLW3E8zwUCuL8rVCTRoMUHFU8uwyvd8CLL9DvRoD8zqDYb54RrCkMTPayx83EL7C",
  "key15": "21FtXVAqUmdWSnVcuGuLWWWzqjr39ENVR4DhjVdjpX8Zxh1qZbbiZjq8UMAKQWdjtwsmCBpCL9JpSt3orf4XuzkR",
  "key16": "2jda7uJX8S2Ti8qvFsDwAHrMPwMMFxc8ML3ecUutdmxxJUSmkbEBw7G83En4jq7gXjrY3DXYWeJTY8MxR8NrLWLX",
  "key17": "4Vh4gnFqTvXkVPyAUQRQ6SLGBQkS7ssUuKJbLz8cxCNyQNzm7gDYkvk8KqRPsr11sSakupBwS4mxDqYr1zB1vyep",
  "key18": "3eX2A8nFrmWN3R3a19j9jmKZGPErpZHsqJhxaXtJr4nWYNnAAPbGePmfaBiP8bbvBbRRjCLpxL2BqjHbVyNEPU3G",
  "key19": "5weAVN7U6Ytn517APZDXZUPnJBVx17w9AbfQCmDhAiTJTXQx8MmyrrWM44wvCedjq6uTKRWFRuhVUS76ZdB8jDAg",
  "key20": "3LUBWHKHXKz9674spEsMHhLPizGmqhgTA3zLfjaqZ9RazmCzyv1GGht8iMFWjEuduGnYB3bF9CeMXt2FGn2brkUG",
  "key21": "3t9hZPQnYu2qAEzqCvjZDgHq3rd9p2XACDXDYASp4i18wT5QkonhRrFd1dmU1Cb8GTBMxjL8jYhYRz3GbE4KjhCr",
  "key22": "hhs5oDg25EtBqS2TtsammTwx2w1SnwUZQWBxNECoJCDc585CN6iySb5EH4LpcfDdpGHUreceNApmLEVtFW7bb5S",
  "key23": "2hqTVWzppgT56P1rWrFFxUEXuCvyNhyiavLvneuY8hji9QoBg6YBi8n6dzQBfxcpigEJGRxt4iUAC7f7uDCf3XjK",
  "key24": "5rt1VWr6fnqaQRkrP9ZEsYcgNpftdQQYXXgi2SFgbfmsZRJjPYT3q9ofSuANYQ9DRx5MhbGCCDEXexMxur98oU1W",
  "key25": "3u3tsnCxtNZ3B2BjmvtQz5HoJMgj5H2bSzDyH9Nrf9vEMbWQRyf3n2ecyVnGqpDFT164w6GgD9TFKBoB3TzLgZWM",
  "key26": "5bYPN9bWW1XdzhJBS98rqgx5CzfnxmEfvs7TApvNsQ5ZLB7LbsQKMLREU91xWF95DCGLpTNuWkH1iprAiiXys312",
  "key27": "3CEvZq511wzCaTrqG7KDpd8FEhsqFjd3Cq4CGji8Zu658dG96epaeHGekStV2AAAcmiS7ezP5zYVbyC6ia3rXrsg",
  "key28": "4QCpMyxMKo4Ec3GaipvkAumVA8KtY3gKKZieqM3t4K8fABp92gFaufxtBguK6vM1AHbL8F8SynVjqULBVRyYB48f",
  "key29": "37fBebCLsyabkne4sSgZ5bbVP4azkkyw4zKTBxQW5GuCPr2x5bVx5ec1cqJZNrT3t3mFNbGdnD3MdS5GHznvB3MG",
  "key30": "2KHiGzSVaYejvFbVh52KqvMNViwqnj2w5cxYUepg9RuueWEpebhmWFsNL4q4ryseG64gQ3299L5uzH2SiYR2vZUa",
  "key31": "4z1b2jUiw3os2jjwEkkSfYXKMVgKfsQwe26tZUprMZ56jB9PrPNVxyeCzyAFQQmLi2hLLw9oVXL1DEVvrzHTLMwA",
  "key32": "4PaX9KXHk6e554iGJZqm6tLVJ7FgNwxRUYZgnRz5wmbXmK4PkSMssGHaix3mZJKSMHaJxo41pyiWJcwnWjEZE7Ho",
  "key33": "5UwUFPvbY6cSnnTqhNWhxCUZqeLef774MeSKTp3eHxQMLKz7N7iMi61CvGqk3mEc51ZgEntbcDdKZ9gGDNfUCbCN",
  "key34": "33yuhUDzKEYefv4PSpWQVcUqU7GFsesPEpNwxoj3nCQ3bg5zx4AGapx8rdvae85Ja4o2fzbHxiVq8JmSGy2fBvEL",
  "key35": "kmYwV4hDLBmJ24xftEAxpzBdFzTCvsVkGGSzP4J8cuJYK1CrqzA9Jq5imkxMS1BKUN7sD3CQR9U7sMK7bobyrkP",
  "key36": "iRpniWmMiGCHG5Z4v8bPFhoKRhWZRUGETDhKLeqCbdbDte38Nf9EqXJotQCSuvLCikphF7K5YNnhgahRRzNhHDH",
  "key37": "WGUcmcsZhn4p6z4kKXGgSf2n6QaDfJ6ua7F5TP4DiaSaRsT5KEaA3gbyvRXaJi3BmMF2Bqody4eADJYkJkzvjcb",
  "key38": "tsx8MDMAzjmShoh8d58USexAjjYNzapq4DZ8fKn3APDKAiNAsdjmp9xmwF3wt9qkH8EeGUtRosMZxtsc9Sg3MEJ",
  "key39": "4d1AL2osXCHr1ZQWv5kdcxUwrFQcy7moar3C6DzXCiSPYrMeqadazNhQ8CPrHAC8gSacFxAzJoBvonuQkwR2zazJ",
  "key40": "24gJXqbCfuEjyzeHeXTYrSHXW9DLGgojH5UGC5Qzhm9vgXFrZ75ysauGBYQLa9ogcCZuSyTQoxmZtEMmfutZHwEr"
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
