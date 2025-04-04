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
    "3WAqtdQJhyLk1Ly1VqZzzJsL5KzmV5jBXbSY5R9Tvjp8hR96urhkWtYzJnpu8AUKgfetWq92JbWojc3wtMpdJsyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RLpg5fAiUcmXqcm1LCbjppZDphWm9VMwP6dErYECi1Y4eSCsvdFXAHVFsCH1t8mBFzvVX6nCmUhAuKZJGp9p3Ho",
  "key1": "5vJnK6th2b8En8pKUP6Aw3u9P1EsYDoasboGPoaM6fTWrAcdV47pqfm7VotgCJ4kjqutuFqVHnRpji7DPzn2q11T",
  "key2": "4dCpakua9Z915mj4UyVtMhzd2hZpZEdF7k6t1PeLytpXMKGnWPmHxMcUdAnjm8yjzYesWJ6UXVaGPGTmuLLqg3QQ",
  "key3": "2J4NBk1Ux4eFT8hji8Uj8WnQY3vGw3GRbUQi5TNc4TSFCczYgozQ1m1TArSoYA2mBvSXb7dYjrUEkNxEGTD8tTQr",
  "key4": "4bpJJT5Z4udPccfdnjPsr1usAGVbvx12WX63zH6XgEC62VH9yjtcd2LCJHVRrnzkdMgs7qSUUwqF4KXssDhAmSdW",
  "key5": "T4mxGLh8ASgUqAG98yMrVcJeNCoLkDGDYpEQguvzEYyYKxJxsvp5m27uZ4Fa8yEnhb2uFUy8aXV5xSzkvdRfxmk",
  "key6": "3W1QnJPEXFz4PYRg4zebhHAL982nBEv4ViL8tBFNPiwsbjQGPGsxtJdvyDbV3yK7DpAjDMfrzon6fREqyXkU83Gs",
  "key7": "2YXwmLRGZBDwtFBfW4jJQtM8gZAj5EEd98peiyMHSGAw28yii8GhTA96gvGkW1TuECDQr1UyiyAyW8ePBhQyLvi8",
  "key8": "5pR8MDimyD6oXa8gQHmTERcdhYDX6iLSykui3Z3qM2FA1rLiSGX8ns6heBY1ydGj9FYLa2En1KYzdaSCb8YPpxy2",
  "key9": "37rEFZPJ33wWimijzumBzaGZZdxHXYmev3iScm9HL3afXW45KUGS2uVCUqNmmir8KAMgjRd7DuQ2kSTnLEqpVQvE",
  "key10": "3DrJVNDLH5EcYFZWtqivoVDaEESUTngj1cmEHYBCiPBFw8476oJyd8CprXrPWpXQakz387eq2ZWKW3p7TohXtUMq",
  "key11": "3dmQxHUE5xzDoffzYoFSEtLy7BKRxVvRnKnJYKxwYdTBCxWVuxTrMEgv8u3EkdMFzJssZhnVfxu71aiA8HRYT5uq",
  "key12": "4G6r6WANNMWhYSVEGT2eaGjFTiihb8us58M7axvxtcaWGUXZbXVLgUqg5JfUZtqnawd5fqDxUigJDhsi6PuUpqPb",
  "key13": "5HtH8qftj5J7kkkW4veHLt2WBc4Vv6CoNKQBqfh8HLJodjvc78KhxrfktyZqxBeDR8KqYUeKRvyoQ3vraYc2TNMc",
  "key14": "466NmjwqoBwgRJxQGDhUYhYXtPsR7ssJ6jSmP8cUQVLwAMPuzpdwPT6wKpjdyjRpRMJjMXJR7ScoVjc6uNmWFvAQ",
  "key15": "4KGBBTm5iG2izS2ZWuH9qrsFVmHza7oZomUN49Rtu9XZ6Gz7LfXK6J6Xt8cKehBKzzM35zuiZ9AvFMb8MWCnhYLY",
  "key16": "3ZKiLWLh37E8SYg8w7FG3Nm8VbgQ9Xj5ZshVk7UiY4N8km8p2kJZsTEg3eYJ8Rx1ovU1PAfQ1AS1pRP555fcy77B",
  "key17": "4Y6quTLVgLvhLX8ktMvwNkYcDv52HcQT2ys1mSdhuJMzpQZcG3xELiTVMXy8bviHC7wqnpCwipmrPvfpub1HWVkK",
  "key18": "2e9DnQEr1BrnCP5yQhnbdynuVzQDzUUCgfixoMEioZK87m85395SsGMzk5iMhc1fPRcfiw7hHWZbtHWnEg68Dnko",
  "key19": "4vSm6v9AfKqvEtCqNyuqfATLmhPArwinfzkQVewetArwFC7YTDXpNG1mjCmmz74eTu7fgFA2mUQJM9qcaLHPGTYn",
  "key20": "2Abbk9TbfazZ8JjRg5RxA1oeRDypQAD3oNtfhXh2kkcbFz9Rj1aixqwEMC11BRzv4WchA2omL8Qw2wL1hurXytTw",
  "key21": "2ne5uPaLPw5LHM3PBhHDhjDBHgeP8JYfmyQVLV22GNnALobpDf2iSnw7tbRW9wHXqtZ7HgrcveKLU3qdS7NQZNRZ",
  "key22": "42AzY7YdRnKkhXu14kAvrYjhPeEE4c8PaSGiheEaYQ2a8Ycr5yYABZow59eNRJMUPeruGJAZDQm6NW9wdHvRNzfF",
  "key23": "2wnpeqsKRybVfwoDC3ssGyp2n5JrSBTzDnXTDfpJVyic33oGiaopKNL6KGNdiWLkSMmg47G2NZtsVmXZaTjm1aYV",
  "key24": "2vWxHTsQp9HAoKKjpRpLUiqFj6FKqy7mHeNBDr49zYMdmGrejXYbCcjwPpLdJuU5pgzBPns9qKa7wuyoJfuBYMdR",
  "key25": "2UhZfQuJtWJcKX423X3U4Y3rpKZ91dQJhYiWEUpjMQUcfP3H5LBozjgiLzMCACQTQGq46G4TFMSrGamSRCaJ4qoU",
  "key26": "2GrfYZDYLujep6ZCsexjfCq7rhXem35qP3BF1kpTS7De51MjqCcVW2An4faZDbMFubG2ugeKAAD1bTUsDbcndcpK",
  "key27": "4KWTzigAK31hGF2Ks58Mh5zu82BSyc8LefWWEAq13RHktrVTY7Qr1t4Nfwi7hEE69L8MV5ayaXUTnFoyRiNpDwLk",
  "key28": "5T3yLpf3mEDi3RWSnRFQ4d2VUdLy2bwpWSgQywwWdZDuHokEFDS93JLJb1NsZQ3MsEt9kPC4Fj1E1jvHu3bfLEmJ",
  "key29": "2saM5BYYVfdnQtcLPE1LpeHLLGj6bDiAHej52ULKZJX1A5uhUqjCAiLFtbsGrcfGNdiPjMypr2JvACckhAqHDWe4"
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
