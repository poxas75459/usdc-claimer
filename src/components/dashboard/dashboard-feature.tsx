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
    "23qfiXhsezUUyUwGvGWSKjke2KUMJa12MpXKNJEjyAL3miTk3oqUFP1EQWy37FZoYm9pF5f9qUsB8nHq4AEjdta3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bkyCPpwLn4ZLmFWY8c7gruytFB7Ld5QbYjDjiuYCJQCMWuasWYVbct2odNLBHdUnfkZBL4tymYFbyysAAtKD4J9",
  "key1": "5QAWXmktSwcnR8GjGebYgkBzXhDGJ43kNjfJgYKTJBoou8SnrnUdKa9XaNk1wb1P7JuAM1xAoML1ZVxoYyVVab2A",
  "key2": "4PRwCEdw7cceYWXNHhmkYnvwN6zZLgEqkDDUW8snt2AjLqDMidYYty5G7CdgqLNvo6i88G5DV6VPDmkt7mzSJRHh",
  "key3": "2RMsWc9Ss8Ghv9ZaCHGiorfNA34LAAVbJ78iamqALugMTF2c2ChZ39GTQH5vZDqAzYCoDgwi9yAXK9wXjsVBx57B",
  "key4": "rsXgpWL3fVrCMCxjVAJZEhbT9VcBK9vZTL7s4UnyA9ZMuczdLuo81ckMqmenM2zvnKbiijpA5av3D7zfPNbAFFZ",
  "key5": "3ajQ9Z1YhzZzskYYzgagrqG6jEqgukqaJpfqmjD2D1mfN2KfZ4Y6NByJaA6RyE8rUdDDY5ZcjQ6XtCHWSG4eV2g1",
  "key6": "47nnVNXCTzSCG1otGZvLMzmthjbtzSuawAJrGkP2o5Qhg5yqbJZ8eo5XTxD4KnWKGw6gfnHJcd4oyPcDVLi31SxQ",
  "key7": "5en2uSnkhazRQkrxggq85kJXCqEJRHVP8F3bNEf1ckbR9qv85fjGusNjazfaMYvowwprn4ypKGq9JiyBTJiBpXxj",
  "key8": "2sGHSCQFayuBehPHBQR3YcV3n2nn5VPHEoWNB6RzdGsE2x1z6ZPpPvqMrTEicAJrigLG6eX4mZcW156u9XYnPoUH",
  "key9": "4cNN2XK2rMDVuHYKfNyvBK5bWNx49wZrUR18Yk1dCJqb8pwMhyGKiUusr5MoeyaBf35pWDApA69bpKGd9U3oXizz",
  "key10": "472LbxrJHRs4EShgLT9WadspWToFi5nbmqjqsDw65LnLPNRXVsH9ZQbLavhXujqPoAbR8exz9RknGKjzoVqJF1bm",
  "key11": "3FeCpshFLw2onJXxDwwZLYAH4eenjmmZHZFVECFCtFAR2Fz9ffWJH4MdWYSYJKJmBZa1vMSsDNzko3cJobLN95F2",
  "key12": "4n7NZZXAWyfRfjck47N3PHUPG56EpTaBzaxb8C4uvKqiN1DRmd6atwJfqQbSQcTWSttDAuQTmLxT2sJTReEjQnFU",
  "key13": "5m9WSRqUsQymJ28BKqHn4BQfJwHCm27G4CD2WPEWzkACxwrTsAUZoTFoUjdFbdm7qHQND6rze5z4bfHWocGAjMs",
  "key14": "55q8BnT5MScFcLfzFMr1dmAUdbkCt219q7HWR5QevRLqYGmctwFHzx9W1C3XmvL8JgCU9u7e5n9eJvaAyUWRFdPa",
  "key15": "3JGBHAHRYaG1DDbQPLU7gQNbgryUT78KVuyvY2c2eRNg7kDokKaVrAaM45eqjDp4arYTxvdZeRFE2gtrJHqdFUcB",
  "key16": "22EieADwDAYKZkgVUYsyJFrAgFuKRytoHTWgPp63CxQKjaVwUoKyCzUrUfY5srBoRrTyxAP9pXtm5eGbGzyFwGx9",
  "key17": "5AJw6ELzN8aoU74iuR1fTcrmvmvKdyNk76G3mWDeK9TbDmowQKBitzBTn7vsCF9h5nfeQBybKYjiiiH8xKbe2ZAs",
  "key18": "3Dns6d9UgMJqQaJBgoJdkjqv4atwE3scWaRX9R81jdzgt6KU5JoBKvqYWUTFKv5v46Rn8D7r1kUVLBCZHHnLL2sZ",
  "key19": "865GeH9vuXYUK1cv3jUXK1RNxi1i5CwcTqM5s6MD33d2kw4Zu2aa3LjircwJikcXosiqvtXGoMHCDmq8gpqXQZs",
  "key20": "CQL1Z6gQQhEpjSRRwtX24MGFZiJEx2whF6KeuEowdQqvqEw4D6nPgp5kBSU148ndxFdm8GY4u1HjxAQbkXodFQt",
  "key21": "4mbqeniQzhKhFhrTehz2iw6XcqQyrkexjPDyQNYqnLdAfAPm8ppRgVAYsHGjBmLtfXrE9bZkJMb2izqmZMteAX22",
  "key22": "5raeQ9bb1NfrNkqG64JHNPWNatbQWs2mF1qe2fUBjtRGM4oWGrwmKYw8ovwwgKDt9ZVLxVD2bjKtDaNAi5vkCE1K",
  "key23": "3h5Vgfi8As77cVs6HVApvh6sU8LCxKwpMC8t84XpSrorFFzjmR8pNEXPxxG3cLfMYQFYUBqWMYVz12EGgDFTZ56",
  "key24": "52RRdMRwsZG74BteuGMNGvGKfY3TctUAkCeK1u8h1mgMcY9XbC6XLd3rqv81R17gBjg19eMJNezivejsK2cvz1Tb",
  "key25": "2ERjwSqgYhBHFPPp7J39yc6DwGbjg6yiEkNMnFCUiJ6dMaBBwujwCWnN5zi5cWVtun73rKpid5LFBVL6iuD4PJzm",
  "key26": "3sHxMpxzLmg7oi3aakDKJAtcFSvFgBdcCUCU98YexGwk7zivsbQ2bKU3Li1xXLA4D8zyTKAmmF98eT47aRFFv37V"
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
