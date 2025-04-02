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
    "5bJEPMuaNKzniQbL949mUknJy3wAyWsRvktRSWjT6gvKJ3uJGNDj7ggBrTXGdrm7mt4FS1wDb5sMh9QzRqxFVGXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9u7Y5eVzXkBNUBDkU54Rn45yZ524Ssp8XhQyze5nM2qmaiG6d1H3mYE17AmUmzdSvR4rpWCpQhfkFrPoS6mi3C3",
  "key1": "3jeZpbpGMGpEmkBg1XNyMAyEX9oWoArVvMTq8Lc9m3f8r4k5oWHNNmbyA8KN64g8A7yHXSBNV1kbTBUcyUbEVKNa",
  "key2": "3y3i8d7ebjGDzNqY7MH5qnu1Qqr7YDCSjkF2yBwXcYC5hcm1F9FxcuyRmYyMv4BLn9apbSwtmoAv2LHWzGVpkav",
  "key3": "4JMVXbttgNbe2cgnyYTuDmp5cQkFNg68wSievJCVmp9Us7BLvhrXasWJ4MNCMs426NhLbDNhUGpGUEVeme7xbqii",
  "key4": "5GsJkWBgeyCQznfzEmiLZiszTwrqnDcxZcHyZXNSTo3XRU43moiFwvJKN9oFQFrHaZUf1uEiYApzmThRFQVM1nbx",
  "key5": "pQDqrdZn5gtwdRMVcE6yNPMUVsGALaVgkPRz4zRycT7NmAJHhiVNfU5jEqF7vqDUpLZzEdFeZRFMWr2ZnMajSzZ",
  "key6": "4zr5XMnJVZBttxw6yGrhiDcjUBVKWHTAsV2UidiTYGLFvZQDFpyN5ZYWKwBdZzifZ1UuNSodCVzJx8Pgtg9c2RU5",
  "key7": "zEYVJA7EZZQEDcdqJgis9iyfn3EGEEuJD6oxbZQMiL38qyvSvTC3LoXxGpBgEnNrv7LMCf6WJR9AqRTS2yHwRpJ",
  "key8": "3H9vTs79VJrpfdnS4i3ASJ2bsFcQEdmmT4BpmycV2K8JufghQASVtguTW5XDwy4pficxjwrZRfznoWRM7QBDaobc",
  "key9": "3F9XoWBfznwkpm3SVAX8Tf9LViJs4BHMXgAZSumtqEsqFp72XGbFYkueghWA8aEqi5T2MjFu1qkf3GxyT8ayGfDu",
  "key10": "4Ho56WGwzA2qCMYimzd1FXLigFSdhCeH8HZ9xnYvVSs6qmRHFDfHzwZBq38z4xxZNi9q9UAoF1cCrJ996peCT7cV",
  "key11": "sednGjbWBUGuh8ZW159sgCxhJxuCqoiAHEoW9yLszyu7sjfQFdbZ9CetNGXqtPkePY83eP8VbHXb9AxvoJXFso9",
  "key12": "ArqeBs5ncySWEy9BCCAESB6DS7oavxrtnoze7vYhSTSPS8mw4faqBQ5WW8JucNkC66HwvtCp77AccHhqREfYZj2",
  "key13": "56Xw8BtFsEPYpmr3U9Y8W2WZATmiGtRiRDgxLLTEuJCHB341728EDfpa2GASweKWrwTCThPVHiS1xMh6ceg5GFBv",
  "key14": "2dBCG45F7qQ91N9UxNNg2XPR45AZN1yYzPC3qfPDWNcgooe2B5PEHfgBRqEE5wABfCGwQ2CFqyX4nLTAx2arMhqh",
  "key15": "JkW2ycSXKtA4fsgme4U8yPfp65SHGdfGumnKKc7PKKVbcqgSH6MPmi2F4gWc3RDmtwaKzWLVoBJSUBhUGt6XC5y",
  "key16": "5HGY1rg8HfqHXrnJKxp9j5BWaNoQippYfwRuXEHYtu631yjSPoEiSNNp7kvTwp4sGKsfRBnbtGRACjUyL4fXYVya",
  "key17": "4W54vpnDgJ34gxCv5VBzk9EXx35SX16fF7uAayNSaAbjsCSE4oWRJqw4fejiEiQkxZitLYi72JduNQ2UXDCvfdPh",
  "key18": "aGraYvJzGV8yX6ht9Jidc2Z5ZEfteUZ9N2hiESS1B1G1qe1pCFhoMN7uuhzVCRCC1EocNZsBCKCgawJxkR2RSXy",
  "key19": "2oYB84thBz1LTpfee1W97xxs2ULuKXtcA4rbcpHycBJcyN9T4NAjQopQrUb1tjFzLWB4zZsh4avUAoVt3138pt2F",
  "key20": "REe9yyhLWoG12dExAzLAd72fF4TUVDeFZ6LDSvqRub7WvwRFCCZNZn2vaAowgGjkSVnGudYFX2vAu16paj5xpLg",
  "key21": "55b8RTLFn3NooJVDMkqqqQ1tui4nY7Wcgxa2Uk1hNotRCjnaQWRzfPDinUV3cEGPVqrnbZdUN7sKg3ei11PWXMc6",
  "key22": "23dtD8yvGNrJCscRfgmGobqEDPhVfqo8x8kxa9a7T1SfctVn8oD4mn1wZ3M8fHhF4cE3SijLnguRpwEQJNPhKSyt",
  "key23": "2mwkHQKyKnsmCKEsKvRED7nQhFKafteGBfxBwiwY5oj4h3prtYN2FeEYYDS1swkqCXzGee13xoNzfjEZ6411yypa",
  "key24": "635XNoWGgrDJJVMHH7axcRYtAfJy2Fatkr4GobGAuEcPbby1BztGiBhcuogjjnoYdDvFHYuuCbBcLsED65z7Nsjs",
  "key25": "4DrtDHSb3pEftCejLSo2XWrA32H4HjtTDw3nbokbPcoD3YMvCdbuJ7cjc8WRuTTWXDZwrpYRKukBnWNkdSocx3Cy",
  "key26": "3fBxNbCPJ7CpBjwjpjWuD4XoywDRRdyx7YZWT7s9eQgy1qATt8CtvCHQiKGnwpFJLLVv5DLmEdsaiXLUGj3PCF37",
  "key27": "3QeatpaZkg7wUvFpoYTXS61KF7VLAsBwG3Gteqx5ATW6tGXrhVdPezWkLaBu8rLTyJshCpzYFokVZmDz9FkPcnPe",
  "key28": "3rEVoeKfcTE2Ab29bmgwWWf75pd1qbyfYZaFu26hs4LYxiMZejFXA1sAd67or9R5WnjoVdWDjQtY5V2KdWBDx4Da",
  "key29": "5CxNs7duVWqLSWwuPG6JK5XC2GDJ6JpVpMi2fwXDgfWNMEs3EkBJEWeFe6QWiSH7vP9wfwzDoWDnKUik9vF5c2bZ",
  "key30": "3ck9j8iZLK4yYB7cdKrZN9PMMWfaZ8X2YAdURV8jAYyhP9mrvvrfGsiLS7XqbtULJDiQbhYDBzMZ12a7zzFiphdL",
  "key31": "2BvwzUquY4csZc95tLcZtNJFj2jv7YKz8xaPHg28bVupvap7qaV9HNPk5Br7Pu19Jb47vhWgoMigTB9sghyy6pGK",
  "key32": "2SAtYggGDd2ivhJYTerB1yYkcboBgiYWtkwgifbRxEGD9DzofdygKB4yzuEBetgL3U7VYQ9TaMZrZKba4WUzmehc",
  "key33": "2xEckXPczbeXTowh9XQEi2JfcPtomEcegdWhRK3ueNbGSiZYmtipBFd6qL7MGfS5Qb1jxzi2hPfK7J4DjGeXguqQ",
  "key34": "G2GbVdXsKumMrupFJ5pbndGyrpDwWbMqkswHcJgjPXi5Qx89vQrCM8RvJviVy9njuj7rg43k2DdYZFwXJkWNvXq",
  "key35": "3AhQgvAPW7Dj65BKL7V3o9wCqFavhTmTTi6C74b9bbskuKnnFZxEBdb5JFAMG11cUCM7iHEgW33VzrBPxXGnJC5C"
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
