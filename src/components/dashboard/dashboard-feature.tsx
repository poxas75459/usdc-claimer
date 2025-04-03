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
    "481NuxYTX8JHFeXkc2QKFpuKymXSxZJQURyUUmpzFWdXQo7wTiwP68h9vTe2Q5ZrAj2SxyLqKZrYY2k1yu7DeC7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WQRF6EkER3WQg7bmoKG9G2uLjiob3tXMQuCThoT13zc8hxMqNKMLxYpHxMpkeX4mguXfZ8yDk5uWNk5TFjSkoLx",
  "key1": "22X8xyMRMAeSHymmmpnYNvza6tvKhgsj2c3fuNTFjaHxRxBcfdzMPfoBx3jyM69AXwd4Kc6uXjdpuBBGPfCH3kBH",
  "key2": "2ibPquZNSQ1iPDmuUg3nQa17M9G8ehxTtQZeyGCRJso3HWadakLRyuoMNPBoMm9HT1HSyNcYQvrPw3kShCHadxwE",
  "key3": "3ckquzME8GtMxw3oqRqM7uGWUGiP9tsCRQSqiKzwKf3p7bFQ6VAgF8rnSF9tWgkVtYeuqWM4a28yNxixtGXgQDN6",
  "key4": "3zxkLLhgsmRrgxTyBtKGVje2YZUrM5buPAzVGspPYBwUsHWz5DZ1gQpLmUAoi2YqRsbX7L58X9AsaYX9rPsgPz9b",
  "key5": "2oDYP6JcNFhNE5oaM3NzSqsnbumC4vhWFU2FefE5XYf5pcUPxYiTchckgC97gVZ6xCFpTgb3915WHT3xPR8WU5M2",
  "key6": "Yz3VZ9HLqVeS5h6H66Ykac7HsYJLMAHbiGgcUdGM7KCZnJCn8KhTHvS8x3tp4SxopuotU5AtNeJozZdrTdikqov",
  "key7": "3YxuFcoGTEKwLPoMqo7XqqHDJiaxp22rvx2no7g84PiYHRcETehkGBWseefsbS33UmfyoXiSqbwGkWFPNTiDiAC7",
  "key8": "RNShPqRS7EUpYQhPNrJMtUoj5v37jChoALTF9oVPF7Sh5NKK2qRgYg8CacqEL7St4N1XqiBqXmaQYMG4nNicJJW",
  "key9": "5f6hLBQtTntgT3sGE2v9kxPWoFdivnpKKYhprV9sjAYZcavWZULwfYEZXzaqudpXw9QKjNEFTUj3YdWq3sBcYwXi",
  "key10": "3ZXMENbUupKGcteixuMzgsRRqvmugJdfQYCt6KJ12CAqSwjCcuvN66UsX34qTsNPQrigFPfHCfxPZBmUov7T4DN7",
  "key11": "565ikixAzgRNXWe1iMg87GULUcNnfP2efW9Rs5kWHXjV4MmhUtw4rcnmALbYE9ReFN2BkDAkWzLyimMjpZumTbyd",
  "key12": "3hERBxxGPnbHdWwxruTgMM8NAbKsj6mQkPSatdss9gyU9j8FPvyu9WnCKoL9LvZ5Xx9oLYv1aKcy3BCU8gWX6gh7",
  "key13": "2o3Crerx6cRGHyrv25hQrGiGGnWVnhyUmYhtDq5NNdnmM9GihXWxSqKbHCbq18eAC5c4Yo2zXrNQqQLKUamXbHnk",
  "key14": "4fwfaRiAyLpvXr6kCsJaFQ5q3CVdiqFWhAiXy9CBp8hKNRpbQPjLyEeTfbksFKYS4QpUJm7HoiPJz5Se32pw1P1J",
  "key15": "ohz6XVTEFchL4FHDiQ8YPrRuPCJhek5JLxE5SyMSxhoZdWDiibFYWZgbRfZAfXxnQvF4VwnwTtcah8exhkmsgyK",
  "key16": "TdjGFQdPzgxSQGzVjmjX6F5VmkJR9bqkLknuGihTBCcumyJgGKhvQzrKzddxbhqykwqFikaGng6jDuA532iStzy",
  "key17": "37s7vEwWyFLF1tTh2nvHPBNxuiq6BXgTpBTUoFDPswLqpay5s5oQYx9ZNvJ8Lb2kKC188d8kMYenJijMZgwm3c8Z",
  "key18": "4LoQ2sZwaNR3QQY4W22rAHKDHNLeW6iPguHskVVpAsmD3WmHXYEBwJxrCirVjYh1jLGKjrZvJP8xEHxXqw9D37Fy",
  "key19": "4vjKLGbkDYeuw7KLfENeosf2dDV9iJCtvvB4Ek6qZeXLrKXB4FPAor5EZnWcNMV9jpXRyNqmeUt5rMkdspnwkQ5C",
  "key20": "4iQ985STts6giyXKSL8V6YczsBnT1RNc5CZx5iz4tosaJpt8hLGxxp5ReL9txJeUzZ2TuFKM89Gj6z24bDc9dYbA",
  "key21": "28Fu1XLKKMS42Z9Z3SuNHaQXBx7t3WiHMd8neS2DVTWhRE87VYyCQMRx6oDqm2TMjUTerJEeas7tYPK1RZ9pFr9E",
  "key22": "5QBTHkw9ciFyNYEYZiSEfMFqEcnjiLbHW5RSXfZ3hzRM3ePbWvT4EGf6izmXJ6jLmhQLRbGzMTFcBZyxdhpTFmZ7",
  "key23": "LNYAwTnVYokxgshRBppFjY2BDD2C3jmHbauSRp5tPgPyHegGsACKv7nKm3EcyQjkvqovj4KWux42T5Q421NUdaR",
  "key24": "3nQwS2mRAQrhfkEMQprCs8aa6jpWJDqbt4CAgaSqUmQ538fmN4tTvAsLSn5bVBmRb1MVdQGwU3UKFgJUcYuZvUjA",
  "key25": "5a1nuGhuZw1Cejtc7UnjRSbBxj4W9ayJ32vjkwe8GBDxqBpeTLTt5RPNHoz7oSuKYbiPoVXS5XmJ1T3fSYkYtgxL",
  "key26": "Lmr3V9E6ZE7HBPPD4M1J4Er2st2mA5PuGAVZFTymjPp4i6Nz5HxnhK7YbGstxH1GeZScRA2ayNfgPTnN6XyYYVT",
  "key27": "25yHU7EHR5GNpn9Yrj2QpU8rXaFm5WJnEXT8pWCCoKrLWDAeecpMWFBYxAUWYy8v1mVjZGjN8A9pswrp73jwBhMP",
  "key28": "4nGyRPoNogSjpMfMGYxecYoS3jRoJgjJLCceuC9kPmmqP8UR59TjgSmUMb1wsgn1hMLcRWNyUiqXnfWhE8BzPxkp",
  "key29": "3Biz2Td1E6YR7GuAxJTzavJsxeverLxYVN6Ck9PBBSJ5edy1ruD8HBPkytpSSSigxdMesdi4WWZeM5gvb5Htyr8v"
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
