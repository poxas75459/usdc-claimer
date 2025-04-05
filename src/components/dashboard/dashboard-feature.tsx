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
    "52YpjSzWQgaHxv1mpajvmnkV1KwSX2f4gZVH1NmycLVpSyFamtct5bk71aBnTr7vcx2v8AXkoux95ytoRukwYdBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SQUYQoWq8K21Z9pJLwigszQBd8DrQxcFiuYXqNVG6rb9mv8AVk6EhkDmUE1JfhH8xmkSivHXnoegmyqPdWe4kqm",
  "key1": "3Q7uqFfwsrTdCTZdp57PFd85PiG8QisZttKNwRbzLhBg47rAKPStnjTvAeWoTeRMKLYRsF1TVhhbo1zr6T3kyiSw",
  "key2": "Aqi13RfG1HKJumUm82XZGoPwmTgN5yxvAegceEevxPm1GXTYM3LotTtefbafNVJtsHcEvEEm3GnTZzMYnGmMugs",
  "key3": "dpd9BsbSxqXiVBQCVygjVS5FkAnHvk6sarBn4bbwfRpVbhUDMgdvecnrg2KTdja951KvG1KJUcYv52hUhEQDdJx",
  "key4": "d9C9TKitSNVSia2XadkkQQ7mLZAgeigU9dCWNSDSq1w33fLqPA9KXZKeZYjLXhkRF9d81bQWjdjLVeyMAbGDvZH",
  "key5": "65bDGKKAbb4xkEqqvpBPcCzP4YNanDqE4gb9Y1XXn6n8hTqEBdsM24S6VZA7ZQi8q6fDNz7Cy4ftw76QNfsEeqK4",
  "key6": "4YjggW6Gw6Ch5uBkbAaaMPrMWh6X2aUQsv9KbvuDxsi32qyyJX141jq6jaExkqAvMmGQaYLhGJAvV7nt1QAMwE7P",
  "key7": "3CSf3BmE71NGetFAp7aoi9TECKngucNGpnLZdx5EQ11SZuXEbxkJh6gVDXuHVnyVVj7pUYzHhKASqERvDqS44zyT",
  "key8": "5HAHJYvGjzWqtAU8m3ak8oWnXXfgu2oniv1WTQLuiniDvTp2Jv4vWuC7E95ZWuvh9dLdVHcaacHBaP3ExZPjzSAb",
  "key9": "36js75KKmPuf93DmYNWK1psadEtDcF6QSRzYubBJjVnzeZSsyVNUzo7yURRQXyzucYEu4tuW8VHvDuyVogTKGfeS",
  "key10": "4BH7infm6SjtX5W8747JZTqnkSyhdV8aFY4ZnjWX4D2Ss9c4s6ZTP7AhLFZv1DhbEGyJfEECu41Eafk62n5ccPVJ",
  "key11": "4XTTpDkoAZRX336wDG7DCKKBWj8TCkKQhm1GemWt2ULaBsdSoaj8sMGe2hszA5Pzw7kpuxD35uYnizTCK2xFqNPr",
  "key12": "2nigo1W5kEKuBhx3YpUqPUdUgEmqq28dzvH5Zv9gMgbgu41ckTJb5YWQa8DrzFKBSZUTqtU6vB4sBZ7Uj1PfakuR",
  "key13": "2DnXzB6RtqYYFeTJAmqwhnUKMexfHqha89oekTTT89ryreRBoHLSNvz5nseRsuMHzCb9kkxZ6PEowUwgRJG9b6xF",
  "key14": "2gyvPftnK3yCtnoEfRdw2mxcykgXzUSSAdbDvei1XXFndNFW5F9cFPe5uHsAZcf4uvbo4WyicekPZQuvmYQyoXJb",
  "key15": "2axTxEkyTEcMttWWWeSGnJMSizNv5Nshaoj3JZHRbg8ZeXvNCc5UwwfH8Kw3NcmJ6myrwwSEptGxgUYt3nRjFnSR",
  "key16": "4K2SCeLGpLDuxXq574hWfLFNEsLUkFGKjztNDZskQBUhEb9TsHVkSc8BJSb72jhLqAAXTaKU7Rtuq2Pc2QpuVPEt",
  "key17": "3GmWCCYhV7WbAJQEZWBqiM28njDzvec3YWCNTkf33bW8Qn63N3sB63uS7NtSVhSFnjTF9pH1vavuA54bx5EK7Di",
  "key18": "5NrWTaHPhWrbykiESqysTkEF57Wi2btYceqr4LRrsZy5CwXKVFe5vB3Vviv3ZeVvVuTeA15ngTipmpRBw1RwW8Vb",
  "key19": "3XAjEFd5mVM73rHxNBPfqdnpgSoJs9oBcfzZNeMeg87crgfwVqJeL3xELbcYVqdECcJikQ1UJMRWjCMPk2XRnZz",
  "key20": "7UCd62ALtdZDr3iGQbaJihvM3uHXjaFFCAdNpYepMRwm76qTPptwzLJUHhjZAmY74rZ5Tobd72DDATWiNkMa7Pn",
  "key21": "3bMCdw7vDFq8XZFAbdQUYPDrLV7EN9Zrfe4Y9CumS8aZwX1KmwFcuSErx1YS9C2zwrLwC1n99v2uLqZho9WFyUM8",
  "key22": "5Xbga9yKDqyFNciwcSzrYZhgpQnAgV8Amv3hmBYL2KifTqUxopSsAqTzU2K5Pvzw6z7b7CG4rDa7Y7WwuQYwU1fY",
  "key23": "4kCp117BAfTLmdVnpejFE5GwRr88kHnLYKrAnCqa3o7aB2oHwdTj3yMwutKSsz8WE6W2RgqsvXgUaJ8DqNS4JAUt",
  "key24": "8JTpYFWiNqtNYzSRWD5gLF8DqQA2Zq11s5LCKt8FaKXAo4HF6BNSvetFKu9HTTFEPgySviyomxuXsi5zEcjmjWs",
  "key25": "3JXmqK6uxXw9Q33gtGP3cJRhvfzGca3KRjUtUvpJvfyhz6tVxRaqvBvYrZvA5nPTuRnz5vNAdZt9enGaL9AWmkeF",
  "key26": "5BLaaGMb2DsaheP3rBehhCqUcn63HDHjq5WzGGiBbkLKZGBqXTNBsB3adzd9WH9RM59PrqrEep1ozTR3s7bVr2NY",
  "key27": "7esH4PcFwRqvU3yhSqzpQYN6Nr59mGxMYsA1cZ7FBdeskNHLjjf7pjiBvHCrVj63XmTAz42H7HWwqtTo1kq5mf5"
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
