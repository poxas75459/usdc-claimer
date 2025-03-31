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
    "45dCm22zvVYozDH8XAKYqT7C8TJm3xVr9U4D4BENDTNLP6Nfi8AXKwMcwS8v5cJAGEyvgwKjjdBLckStMz4Mmwi3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eZAEbCs5agsC2DCKZt4GrpxY5SgArFKvNxNeTabub2bN4yC5CxxuRxEhdnQEbfVFK5VgVpjEfBzPHnW7ZKEKVPv",
  "key1": "KyqxisxrC7UJMLgYXa3UNSUSsdDY42hVFNyCEfTXCek9WZwXNUYZVA7hpPhe9eE1Tj3EyYxjy2QPStxv4EUxKf4",
  "key2": "qpvM7x8GyXgqNVSNTvidHwAd5H563tbmQjx98T2GpnZZQ4THSJM3mnvBKY9FaUwVzwpux3Ap3uhqoYZ9s8Zqs2A",
  "key3": "4F84Gfn6iKs7Wr93hnnkmkh5JdFZUDY7be8nMHMd1rcCx3q2KZKxqqAZ9y55U9qvKF946FkmBkJJmVU11P2NYzjV",
  "key4": "2XGyDtCy8WYLWicwP9rWYQjT12r68HYprUfd27HcSNFLqNZcDwM3vuxwubTQrXygiMibp6Bs8Pncu866rJLRBZUo",
  "key5": "2uJ7HNYzWSNtpVww6MkP4fEVwrJRMaKUFg27Q3JimPWg9YGWwPJGuFf7pQJ7Nyz1SVcyXiXLyDNBWzavTLCpVSCc",
  "key6": "4xTspiqjkA9dha6q5SMJioGCdLU2w6WecUKfbiZcdWqpcyy2KhwJZ4Zt65Kf6ztvXun6SBxhqdpsYre6za2h8Zq6",
  "key7": "uHxhSMXUbZJPMbNqd7iB2xTHkDjbQdn7UrTmfg2B3QNoe2AQJU9VhKNqXoFwkcJmjDTb355PEomuzgJAvkCZoYR",
  "key8": "3gzTednRNTsnW4WCDNH1UVeqTtUJ7Li2JcbfAfFzQtMAu1YkqJ6Ke4SawV9XJajSGFnC1mFGpqm9UNrHFod5mpmZ",
  "key9": "3VYRBLZ4ZAWogq9EQ1KETUsykeLyiQcztrM4fo712rQ176TxfBnizzwzRpZfaJVYELpLbgnzPahzsCvKTWkyxVJJ",
  "key10": "3ZmAd1dmcuNBjUGVHKsFh4x1Lfc6B91asVXPMUkmsDb9z2AVro8KFLi9Fa23zYjBM3zbSkZk9vN4GFM8EzkLt34X",
  "key11": "4jhnppyzihEn76iGz358aRSPQELVTQD2JSk2Z1NBCRgj5Sd2tZydtjQR2n7WDUuMq957EF3vub55UnhZJGAZHPAV",
  "key12": "3pwgngdMwSAUMA8DvJ2q1nx9bvmqe3p8VGG1cJUEeg653mnZVoSr2niK3UwhZf1Mao1orUqtPHARUkDAeRnJKrXe",
  "key13": "67X7zcp85t8RQGzYquKGVh1iYWE38njsjEFiGCMkZhnUiib2awY9XT3U4cqz1SP4aHPeNnX9hmVscgkvmRo2L9P3",
  "key14": "2VfS7zbNPe58tMfZ4GTKEckwJGexXb31mrNZU4QvGkQFQHkyo6yJmeQXDqyT5BAHTJL3kRMVx8UtU4ty6v2qKASk",
  "key15": "58ke5bbvTmrFss5N8TwP8VGW8Mqj9F8U3JsjDxb8fxVZbSbGfNKY4aqFMcD6aXZxERUYNeUujnuYkc71uaUDCFLN",
  "key16": "5JbRSmrdAirw7R5NNAp9nswiYF9TPceR5U7cHTCGLgs6mPiZ3ESUxVCfwoTV7R7Unsacypcjd7sqbsu73iW4jSCT",
  "key17": "3E6vp69tZoMb4xevvcHncDpJW5cZL3ZX31SC5mhK4YuU7o9aqF8P1hgyvFr8ev4iJwxUz9vBBqbE7gbC4Q9Qtn55",
  "key18": "5x4WddNNc2q1HHu8m7hrDNQkMZ1tNsv3CQiRwcXSwaUbVLnw7sYhCp6nU77GsCAxDpcH3gkMAMR6twkSisHJ3KhB",
  "key19": "msaAJDuGGeNdeuTiKkvGBQR6PA3mjS8egJaMKPkSELiXDk2XFNxwyNB2c9rTKcGaeUNHYwJWgzmSvyKwFmpU8iJ",
  "key20": "5U7yJCGFCDiJVFN1YpBrMCWrLvXQXkKwybzcwwX2a5gsVqt7PB86erLniQ5KHfoiT6RcP5HZmdvckjYnU1e2Khf",
  "key21": "4bEzAZNHVWouek5K7VWwEW3T9V3YMhTiGXadhc5LvAKyQycpEVjDiKKWdA63pinU1kPLHWJkJLRfjN9Mz1Y5NHfJ",
  "key22": "5yae7dNUwGsJjR2xGDLrPBis3Vxnz9GCCgiqtpnGEiAhUBjJqZoB1eSLGSgjDWGj8jWHWJZ4wk9BP6D9YKA7WhLr",
  "key23": "2ybs71Sb8TRKpnZ3yc9EFrvYJgkBFesGWN1R4rESmQohRSc4nt5cXCKQrqHwKxGZGkpgwdC7MtWe8EWtU1w38D7g",
  "key24": "3tHARs3nTL3FE1VLrV4H36k5mSGnyU3H6rVErgteZxoLQNYGYpA6z2KNiVz8oNFVNmmkJu6EcLJw4GbeCtQsaxQf",
  "key25": "5XJjes1GttvsHCfgDMfyZhz9UNzSbdE9rCtfQ7q343j1BpDD5Bsa3dxMwxoQHDfmyDtXfDS6mne2TH1YzhSLueSX",
  "key26": "3n1vMb2hwqyMJtqwtaAe2hwgHX2a5xEEgxjah7wPbRBZjwcSTdF4DK2mHWGQG5Hf5PjqmKhCRxntJougS4TQEf8L"
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
