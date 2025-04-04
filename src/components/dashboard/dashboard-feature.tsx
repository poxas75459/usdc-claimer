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
    "nTDeBn1jYW5jzYvuf9zjw6Wz5Q4A2vuKr9iDoCNmiGkVeCMZDMyKb4yqvk2XZAArZCJxsKrogcGcHTzFYhdJaRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dpzLWVr8JE6tH654ovvp782wmdB8eWXm77TTTdTKskoHEzLrvS4emjpm5rJq5duWae92ZRNwysNDYEFgzZRxp2W",
  "key1": "BQdmg6fyEfLD2o4STDootZ8LY9wW2h1Y8LaRXNTG9HpgrnMnyTnh3p1BHtqVYFWoAr7gw3mjXixjm7yhWznDKVp",
  "key2": "5V4HRqcDhsqwi5SC9eaAYtpRZkpC8dd5EEtwQd1mBih6saAvbzZxzcNiCaCU8RnrBEdYeC6ZuPW3e7tdVb5qowsv",
  "key3": "3GF5Lb6JoHyt5nSuaWMDvSjGFtW5uBg7SUp5QBGBhgNBuBZXC2HVXDAAn1KeCszRXB7eDFXpYhLSJK5H7Yjv3ydP",
  "key4": "5X4AgnxVTPjQD195oJCVLWMeyADXbTfymTLy6EbqztMCVxRdq28kZTLj6JzMStVoSX9bN6VUYYtoWtAxZV77FHv1",
  "key5": "3942UGxJuVrDNSDK9WPq4KuedbYavaNU5nxFvqnsYQaNdE98hFX9BmEvhZaJr1xeAkCj82SkKsd4hJFQztpgGwJu",
  "key6": "sA3Xg7ym7ANxKD9UQPvu3MrTY1sH4wPuMhmyLWbA28RWvHRSYg9kAkGA8DpLfTXbBKwCa9sjaVCRoEgN2rCwdCE",
  "key7": "3sxHK3Bk8UVXNGJwcij2AC8KeRxHg7Cj74W6PGuFQn654iPrTmdPRzAeZJfyBMCfRtPpUZiAt4pXJbkz8xPjwBct",
  "key8": "4QjygnygdCixhFKo2R3nuNzEJpGXFXbVCexeRHjSiGkyKH8nFXQNDaCNWDi2CbKGsvJqa1eyWWuQtoLVF16Q7Sho",
  "key9": "4uCseK7Xmz3URqpEVAWHtEXsdoAwvYQdPbQzwk6tkQTj4KjwJHYpPQsbcMpYNbL1zap8LaKmUDYMP8h4LdewYYZe",
  "key10": "5vkGZmNUg7WaaovKcpEEuy7HamvDaHsJ7CJDhYPuw9SUf7W6MX7CgniqRfbVj4hzt1am7rWCmZdGAmXKSD6gWYgX",
  "key11": "25jG7YEPyQxUS98Ezu4rMEgeRp9cYKdCJ7RJhfa3f8udfCEczvv8GTsssZFsoxEz5Aci6DbwWdV4bmgPyRX7Xtkq",
  "key12": "67a8rdQpmzMq1z7S7qVR8U5cRD7z9vpTysgbnQNrtumvQ8FoML63JCnnLakrNmT4b7y5xeAGtScD7LGGUYnoc92p",
  "key13": "4MYq3oYZFQ91Cun3fC752obUJqTSTH3ZjdSuqoA9E3VRsGSSvpki9hGomXjAWty75GwNEaXfZDaTW86mEE3zwtno",
  "key14": "VF7BYyg5nPe9st84FYo2nombpHtg8sk6nbGfwYxVf3BJJpsEZBWRRFCbHBKdWohGQy9BRefaLe2PHvrG6w5eEAb",
  "key15": "5QBFTQSVSD8CpMDZGeVk4v48JtMJPEupAFRuG82YK9GazL7EvwmJcPV9Di8n8ZaGRmyo6UwuP5xsAZhBd9oeFuu5",
  "key16": "AMjQCqX77UaNYiWfPL2THavDJHnxDdAMezEthmzQLTrAMyx7dcooejCsTpRf8xQEA8Qpxz9w1yQV66QhACK4z7G",
  "key17": "4Fy67QmBD7rH2wYhWyR2JRo6aiVA4v7obF5uC2ZxgsAYvKj1UtV9fydu7qXU4x4cpNTvHneHxAzETfs29Mn7pGvn",
  "key18": "66b89UcRMCch2ge1hgEGooEo9mLhnyaP6UTwYHoim9DU1XidDQBS3Y3Do3qiT2yQ5TZfPaiVF8XVjq1QaZWvx219",
  "key19": "5RzQnGMjiNPiwbtXdw7ncb47Zj2e5ahWaT3NUmWiYqwpWtHgP5j154JDiCmpAtq9BqE3GXiWeUY3q6k48hrf5wMX",
  "key20": "2pnu9ZZv2AHdrypYWM6Rvtghn31f35KVDUnkPExzYJ5TDT7zXfUJsNofX7VyScW1BEvu9YEnJwENfBSRpryAfHio",
  "key21": "4DCMTNFkBMpWfNZrZCBpp7qQgFr9u2ABvAzM5n2J54SxeJfud4Fr5s5MX6HatdW69cNTMkJpLZMPcpaDXhub4sDE",
  "key22": "47D68DDCy5FzKj6E5BCRfGE7TVyCouVd1FEyenmenNYG8QUgDdM1smNHni7NhyQkCdUPPutBxKBHSVeSagqWVwpv",
  "key23": "utJsNsLc7gDiqNqDUsHCGKa835L8hQZxDbpo5iktpEtvzv5bYVZh9oHTQM9EpujAwGXFVdwVPTbRWpMrtZpbPui",
  "key24": "6uLvtsGnUtR6Mv1ag9a1FtHhGNLcWHHieqd9oCsFz9bGD2xwCrzF4274R22S8z9WysAKYbE9sCe59NVrgusqEBC",
  "key25": "4yjPNTKm7pTUqtGSxChmj2e7KHtJH6hKRe393k2saQaTnsd8W5RZ1DcWRyjiFeiBim52xndyjuUBGLTRik9XWvnx",
  "key26": "4yTftj6SKAuHQmDzwh6wVvVUWseiHY7qYrA8vibf6NvDgu4rmFzTXWbuFeLXgVePnRrE9jDHhLvNus2yEmeMHdBD",
  "key27": "3acs2i75YhxLcTAQ9UgHws8zBYiTvVpxS1udjUTNpzSAhAuj2LjZ3UfksZ2jntPnoUFUHXN4DeSptnrSkHbvkNHX",
  "key28": "25BFg5qdnvFgJfQAnbkEp4k3gKrafufDT6MMfiGoHwWerNXU6HYE39u9KzqZsHkb1f5tZMNxyUavUtxRwSiMkvZo",
  "key29": "3hiLKD71m5ADNeZJuEc9UASoFg2BDD1PhZKHkRoZ5cTeUEoiFKT7UDVoQmuJpifmfwxS7qu5wcBiXQZmYu1sKbo7",
  "key30": "3puTTNKAyEVrCfBedJ5PcxJZJfTYtu6FUNfD9yuvrEZBuFgGyc8TyzjiuHwUKQXZcyJnKgGQMHXa8xuA56FZvgpS"
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
