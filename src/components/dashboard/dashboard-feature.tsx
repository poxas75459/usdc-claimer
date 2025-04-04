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
    "3ZRbeMX7Q2QWgGjxBm5rpfSHMi4MAv25twqsZZdVhmoLvZm3RFaqGW2dBEhP7tEKCEB1xW4xRDVfSpW5PttezGko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HpBB34RRArx7141DrMu5dYuEfy1Zw9k1wqJ8KEhvCkUjjdSSBN9VXW9YEFxf8BiT551jJ2uhjtheXPy41Zn5uDw",
  "key1": "DEEcKNjSKJqQfxRgUqJTiMv5xMoJdkNdPmKMuvrte6j95mbGUF3G5dyWpwALD3JfYc8ZuLDiFFi2PLwCqF2kVwS",
  "key2": "nJcnVjzQtUExsGsiHDp9rgRCLdsJr3hYHfDw5ayB6eWxGhm4aaeVAuuQhTZu3XWjsiF2EAGwtSreLy9VxS4RdsT",
  "key3": "2tjbKoS64SgWkp3CbkRwhdXAGsrHAic3KVUjpWTG7wi2nkZv9gq7pUmGAEpVKLTJYb9p2d7tYMJUwx24crUCTWm2",
  "key4": "4d4h57asAp1RpW4E2nhg8uLkmwHnQeDQE5YfJ9JKNwoqbYChbvwjSyNNtttnLgXZb4HcjXcRNPmrKsrDyc4RYpCv",
  "key5": "5p2L6FYkqZUJSFyyqArcEkNp4KMNgK1VqbN2bYX4xh8tGsaeo9V6y3xXUKAqstCDbCkS6aBLRKpsamNZji6cNNoV",
  "key6": "amVh13jqjs16V3zewofpdq7KecWNPZsq6Q3tLaMoM4V1WhdYpSSdZ7av53McfUVQfiRkDPpuH9tg6wfqZdusg9W",
  "key7": "P7TrRAUXaQgRqar1TJGYFCT2c2AaJ39hCG5V6ojCb7mvhqNvCWBnoZTG7utNwDudgBoBdWekxXw6Lt9H3aeBB4M",
  "key8": "5BeQPpbaXahojap9XKt29BosEw8ZXwMgKDpxfHepxMu6S1d2dHTpKcpY28RWwQRH8qGShi44kFiqCKDWWYZCjqwo",
  "key9": "2aih42UsCJEbV2UN5kuGahXWuvxwDNQdCnPgyiJ7SKw6rygKmtbdrfb844zE6KWCkZVo7oMaEdxxPUeE7mdJCmJ9",
  "key10": "LemMpWeUA1Ca9gZegTdzRHcA7XadEcXBYn9ZcBePnaLLMTmr32AreGytXTyV8aV1BpjDtSFtqd9BRQKCA8o2w6r",
  "key11": "4t7orry5SCJbmzATAPPg7rRDTKDmJ6vm958dXigDa833XDb8bYXC8WVMUeiXsiuRwmAZctU71k6cCjPyAxL1QnBG",
  "key12": "Axz1JQgrnYXjARQKTLaHFqsajw1aAYqgdu21qYQVqhyWpyN1FqqEFzvm3kspvQzoQ2qWg3SAiGVweNa9ruyqb5o",
  "key13": "2n3kwEL6U4yMvriZVT4JaJuyweQP7Xf7fwtG1jC6xUSLM27DCBmrNQDwm3jhxDjabsDgaPj3BoSnWXvngvLF6q1K",
  "key14": "2ug3PotU3Wwg9cCRz1pjVd7vCa6Wsx1fseXXRkQVN97M5TEm5kw5mxvrpnjjotSuK5PPyxtcJYbmuTeYAoBXtDgK",
  "key15": "2APczz8H7cwEFBTkUzwmr1asac2HsmT962ND4FTPeKNuQG6uVE96xV8g2EUyxQqeUJhWya5SbADNZPnVY3BNgcwf",
  "key16": "3Du7zmNZmupTnHD9EHtB2NR2QtBh9sCLJncsVzSQJ3XvHBKsBt1DffaH2c6if7g6VjrK2NyTuGUWF69ZDkGsfm47",
  "key17": "2nhzdWsyVXCGmrtkkyKy23JTatadqQP3cK8CsuQNJfXwHJEkWUBxTnM3gtWg6nvrkJamkB6VoehFYynq68BjrVsp",
  "key18": "3Tj7BGbJ1AG6JYH2KmLV7W6AXdtk5WAhncHMdv53pLD8Zyp3qQagpg8Tmn95WwNQ8dA3HM8CVWmnLggqBTZCfUjS",
  "key19": "2B7qb8d3g1EJbg9Yv3oHEkNCJQHZ8MM3ERXh1L4VLV2eCQtRQsu51hHyzLBxB4s8UuhZJRSByt9PPkPEVRZcQxrx",
  "key20": "4obegCXfmEZW6Xu7SyKo89q8aBF5tFLh3UdL7mDFa2Rsk6J3e4D39jpUNMn45BD7URRAQGmkw3FtfijqRpYcSUp7",
  "key21": "2fymPijtecim6Nur7HiXUegrBvmWLtt5EzaozvnW7SJfPF8pBMBa39iypxKjY3m2rVhgYt3JhyiNEViPkkGBSEV9",
  "key22": "37XKbnH9Yct6FeCuahexRUUvnuAEwEUfYc6w2JUbyb7TBBgkRGGdomvm2cYWNfqHwoHtQYy8yZzkmWdDzxFHdC7z",
  "key23": "2BBs84pDTHP3c5e3AVh76RmYmAgpK8YaZYKwQrHJPSeDjTz9cwun2vj4FSySgqUQXREgtsYfLWwQRnccKwLoMuSR",
  "key24": "3W1jQrB1kbPH8k6VcGH6abUeMonCr5e13UFKU69LytfLVinYW9hn4wWiUJUjWpuew7LzMa7pXtYw9pGNDKQM1U6C",
  "key25": "3nkPnovzhbtradH1xbpcb9BC8HXufK6BqDebDz22RZJh6t98kPuebKk7aG4wztoMkRwvdReyDxGrDDqZzYyZD1gE",
  "key26": "cvP3uXp4gGg5ACCfoQhANCpsh1EPrcPCAGNxMJ9zNxdwNg3ko18xwrDefifY6fvuZoKthN2PeUEf82FhN6KcsQ9",
  "key27": "2PiuRoZSDgkDngFjMdsmm1VPSeUBJ57ZKEAhigFyjxAJnBFtc9KBqvY1QVKHQnaxAPaoyAVXCkjf2HtuRw9URBEp",
  "key28": "2BLNK14rRAs1H9rdVbwpx87JRMk13mPksHQN5b784Q5g4Twb4UwprBB6qeF4gfpja6yHaoMu8Rpb3k3jXfds1JWD",
  "key29": "2mqCn2WBdpBTr8XchBTQcenxLaTeChDrBZ3ogNMTmg7vxr7XEpsgWwinrMbKpmc5AAoc7piqMQzyu48SmaPvGhsK",
  "key30": "2vTJztFcsbaAuQSiMqYxmMN1SA7GAcwkLmqqWeeBoDS9R5b59oFP4dekh8YqN7vZhLYf7gfMewnQfPBZNEPpkU3V",
  "key31": "4BwMwTC8b6Vc5N9V6QSJXgpKmmetqHJqtvRZjxuFMFRPozxdbgXakoE2rKrzYUkA7J7G5kxDnRE1z68EFjo2wKrH",
  "key32": "2FvGRMMM9DA5NZLHEmCzBNUgtS2vZ8ZVz6MiCN9gFyHzcDjqcT3t7HSG2e68hL574KEcL1myNgJEoDRpTAjjDTFV",
  "key33": "WZwCWrUxcGxm5gj2Fp4tyd6EhkDHsWGCjCSrwm2jCwrZZtqPZ48arvi8J3Y47fHVdaAjwFVkK2YWFBdovH5FrmL"
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
