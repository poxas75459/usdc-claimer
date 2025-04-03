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
    "2wSKHQUzbFoHmkSsVfQQCEYtiLRLJzyevqt1agqnpxByBGctTuV2f6vV2vkkKe4WrewZQL9doNAFB2bjKpjqJ39E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XusWvaptceUsB2gizKD8yQ3q8bJWQec8ZwMUYKAPenhQYDbode6Tc5PMt7VnZLA3arA7ApBWA3SnBoxiAv8akEx",
  "key1": "2fghW7bnDGS2jEdPtHNWoTuBhWnWZECcdmApP62KwDiMyXBHNTid8J2ojPZpNaKDMW9qUJzSi7TxGXanA7cH9qCT",
  "key2": "5vHCjwuvEmP3EABXMwUpKG73Jez2bFVqaApkkyYfYMML7SNhuffMtrKitVR9g9ixvaCnmwkd5FYF6VD4FsjjUmb9",
  "key3": "ohVzTMP8p5zv6n9wcN15yM54ECBs52pMHmTvKB59tyQJxUKC3qxP2hgiNC2sgMA4X72B73eTdUEauQ99TDrZDDX",
  "key4": "2Ds8AgvgQhT5oDzDEgrinHXw8BPDuAK3yJYJ4cNAzpPbMsq3AXtjE1T3RzwNU8z48a9yEzKGB8NWTXtdhGtqhzGy",
  "key5": "4weG9aaCDYEPdsgQwM2CjugYZtQJ8WUz5B9ya8XZUzgihbLrc9JkQFauB31bQdBEPAyikn1VR4ny3TUPD855NjAM",
  "key6": "4F31szkmu7WKjXpLJzY67ZqzD7v9UvTH3jc17hfMPjBTXKBa3QBziThfp4s2isqddGDu7DxHANTvVzuqEEKv5Uh8",
  "key7": "3Bn3CAWTqwptHp2PhH6AtMkEvrZw56GZpaSSxbVoCGnDEaLTRMUd6wgYZdn97zcodohzLSGKq3qeNKzGHVV7gyMy",
  "key8": "5N2ZYGBPbeEDDPRrFWaHBUuxVm4GC1tKw7ieneF8ncXbA4GdvGktvEL7UtK65UNykDKc9XqvJAsGsxGaavroA15v",
  "key9": "4aTUT3s1795Pmn5cPbyAaTSWzQiuJLBYeBZVMV6XXtpaEqKBcRxuCKCC9EkETEU2pbiG4mkRv6Tqzgdcqz2rxs8u",
  "key10": "4rmPrksR4xm5Sy1rtoAsahckwNUT76spnMo27Dmv2EN79LjXnBcnzY5uQwr6FSQBGToBEaEh8P1s1QjTi4hz8CX8",
  "key11": "3UUpygdcS4iN1RiPj6h9Xi2eJFDNLFunkp2XmMpS5pL1qaMnSYQF7pygJ2xpmb8VkGyJGAZdPbEV2HbsDJvCkrqQ",
  "key12": "5F3iicxCCGGEcgiSsoaR5vSatTVsxY2YiKZpamrAAvq2bTQbvFpS7zAMnaxgtfSAeSSbhJNpzEaqo8Emd5FQQjuh",
  "key13": "3SJoCj7N9GaecrUgTeYDcn5amwzHrCi5rcSRDoqQPxR3cPd3fCpLetWBJ6D9SkpRHq4cRbCadGnzn4RTacREMTrp",
  "key14": "2witUwwBmjaKpMeaW1GQX8uRVJg4sEi2GGdpy4qySbAugsyeWStkazq9BwReK3tGS6p21Pu3JtMdTxMWzSqRRvff",
  "key15": "2DN6CSB6jJ8eFpN2FH1rQ1Nh7g5AxxYVPWT5hqZF7cbCYbUivC7KFV7wWJkRW3XbD2Smp3mA1ZSK4aR2XKAtGe4k",
  "key16": "2W5hCuto4yePE6VKfHasoFE2eckyoHwo4GMQoZTsDmBLotFZxZgvNDX1pmVq4KvqkttoEpWwTWEav3jYZtarLYaF",
  "key17": "2zSnNKMYQcX6dRPWXf2a8F8WM42a6wXodL4vTdqpgae8TACDKwci87HVNZXXCuLUyP36duvVzfYQCSMn8pPZB5Zm",
  "key18": "TjyEAZFpQkUbyvPW42qvaSUU3z7ZDnRwc7N42p3HhGCwnZ97xFjwQRE13aqfrSA5dBqRWmV5snSARC8iYUch5iB",
  "key19": "32G1KM1pS3Ter6PHed6V7EPpt5JPj3Zvu4GmP9dzTSFKp92YKVZHrqm18Hz2BZqt9yqmJNX2SCqXsNja7BZLefRq",
  "key20": "59S1MYLWKwbMWsijJKgx2hareAWtiEDQubp6Kt67JMs8pVDZ82SmURVVNLH6P5TwJ6UvEQa7HNoH1C7CLqd1LU5E",
  "key21": "2FsSbeTt82dVRtvX1sk1HLJdFMFmJyc7JVpCPj8GDZjY5EDMDd7qupJMXNC1eZkxDRCK7DSRxbJn3wRtgaunvynG",
  "key22": "64k1dgVuq4iLdCR9sbRCiVieshiL83xP6eU3FZJGqkhyHRJH1SP5VAYqPb726WY6KzAYXmizrkbuBVGJdv7gdLkD",
  "key23": "4PKeB2fyeVx8xDRKK81Vv3u4xWxdw15eexbpzEucoQwNWBkrQNJJEcxtrEnX1ReDHMYQXq2X6p4fLVMXCMPYanhs",
  "key24": "66mnQUjQoxWjNY4QJoPqUXWKB5qSAZHKe9mC1bweAgXpjTPpXufYD8J1c2SD1U3xeMHCpTEz2xQJjEojrArbZfss",
  "key25": "5epQUdJjAGtbq1RT6isyRXHMY9RMmqdw8BPg2f6USuWL3ggTy5wS89us6d9oF7sviCdBRPsesFcAtofzYN2cY8xG",
  "key26": "36X4TfDqwBCaCHnfH4MKJfUQUqWCecxorNiPRPYQFwYdQdt2PjarTmAWgMdAbB5SXaBB3N2SUTbfH3FQLv92hPr2",
  "key27": "5Rgzq3JQsHK4vXmfSiZTWijMkEn49hjqZRb74HJhUi3KujEQfNSsNBm9mdVCTt4hMYtK2GdWBLCKJZ7ZYa9fUMci",
  "key28": "4CDL5K7niD4KzyAUmmgFQPnpeJcthmKMFKxEVJ5mXNadz527yLvpz4pN9F8Dz8qvF2jtVtQWvdRcE7yxS43jrjfb"
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
