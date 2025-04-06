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
    "6AQKy1KNdZx9NDavGaDi3fk8n8kyhCtUL7hYr4DofnJTyez2mbjmmkL269Q3m4DYCSNf7pPvD755H5b34mJLPfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CJ56W9rj6JrsmoEGzkrUEoFM1XYRzQyDzwapgRZXCw3pWqZgQeJ6NFPeKzgPcpWBGJTsn7zGEWheFBcJsB2Jzto",
  "key1": "544Ks7qMdyovuiYMRj1uGCtPjQAqfqCK8F8rVUTE52FEeMuwNCnVN2g2JqB6eE47Jdw7hkLV2y2vkokPf5KmeQPk",
  "key2": "L7ndXEh9wPHm4MA4NMSsCxs6TbAtTNrkt2R7x1jHdE1kzL7GzMeqhG4k1aHr4kozmuGYwjHGhknu14YtWs4h2uA",
  "key3": "3QFuU557E8ZfXmpTxv7fu8v3pfTezosQ8bidAq47stv9CZh7crYBp5c7yFKMQrNj3VpHctHTLMaq9PbZTwecRiRP",
  "key4": "5sQ5uvkpAScbFR7JC96tRxM7dbReNAD8SFnKJeE1qgbcz43xdSycR3yuDJFfPZ4QhpgzdWw6NKYxzF39iBRHnubT",
  "key5": "5feADYYi4AuY811MSv517BmHHuV79XmELGAJCxapTWyoEohshduVD9wPSf4n8J8H8qHSFVFY3XuPYZ8dnG6tRBR",
  "key6": "5GbarvfRsXUrSiwZvqffzjfji5ssu6mZBFCre3k2wNbL9HHqxnwNwvFQe6qrYo3AfgdwptajpchL5fNGgd5fiTHe",
  "key7": "5WWdWupnddfyux85Vegyg3aKkgC5iMdXqGHZYjmFhaYrMNDK6tjCAmNug6r2A4FTJ86Buy4EKW5wSUxBeveWc6z3",
  "key8": "4P5sy8hB8UiB6e2H6ibNBVncnTT8bvu6EMPCWBuyhXo4ZEbsaLJgpuw3b5qJpcBPGNCJpEx4q7R5BYi9G8gVN7NX",
  "key9": "2VFKF7FLF8q5b7gTW4Xejm8WE4hhQheN46gpxYJkaeKoBWJmKL97wnANyRAem7bph7CrbQpgVG61bkvP7EVCe4f8",
  "key10": "2J7yoth3QcJfjbGzjjRtpA6bgUmEa4g3X8J2twQFZffDNwKcU8SXVirQUg39MAKHCHFwrYWKMdtchVzS3Wx4J9LU",
  "key11": "25jHvoYeojQW2DZHp2c13kXZxZ9n7niijoboAnv3eYMKbH2G3UzmASE8tDTa6LvkymNbQ3Lfuyrmtr4XvHmGYya2",
  "key12": "4H9MoFzo4Lo8Yqr4yjDDD7M3GnKrDEbKvLMTWbtBNuMTfn7NZxgu3jjWCkjVHHnxgfLwpn7CjgQacpgyZ1XPKEUB",
  "key13": "pGxCW5TzxxsgT8PGUfHqi2eKFp1SFbDygvykUQYtzKqNDPhPrRStWr4iamysVw5v769ZvLGcCw6PQvGeaCPU5nA",
  "key14": "PHfhp5RkCGSjtgVEpi4Hp78HTPBbcYj2sGBLTZFMG6TPkGEDjywMHQNpFRRGWh3ZCtLqSJoJ4zNvPFeqouBEZD5",
  "key15": "4ygJKJHrmTrF5wScniRdnYfdWnxQj2d28GmvKTYTsn2RxBbhErwBpwVHjhUkiWpsvyBjJavMnszj63UX4vfXcWns",
  "key16": "36sTWohgURmXahTUVm7HdSLQd59PikAH8UWFRSaMQBCUjWhUPbUyDTQnLTupEwpUfJrjtQ1fD2WE8PzGR8SxgtML",
  "key17": "2SoSKL6fTbcXySCsiUmZAmFnsAkFDnPmoYysbQWwnuHSi9pM8FuUxRdxTnXmkVDCXHxKEM3ExHbSjr6xyF1UCP1z",
  "key18": "248QVBjit6haTE74kBTWU48oLQ5GuShWxUkjmL5NXSPTXv2a4PrSfZQ2BeYe9dxAhCjTP59BPSAXtLC9gvSzrNN9",
  "key19": "2p8LS7b4iF5ATbaxLAWLRka4VfDTED82JAhWFVppUCvp3vyX3ZvQY2oJtRetPxP9vATj2a4nf4bFM3pEh4U7aUm1",
  "key20": "2bgkRnssBYfJ1eosXEv4aYH1tJQT2Rx2WiLs7JBgk7sePdzTQEYdQ3ZgeHbDejuFBHwoj2eEUVZGiAGhPvFa2szp",
  "key21": "2GFQxdmdJczcrMuy211FXbWVgBs2G6oapXXhirWxLgi1ujcLsRka998QdUQg2Gg8RcWSy1D4FKUYEY3R4vuz1JT4",
  "key22": "4h5AxfKtg9DN1P4y6L2KjUMNJw8XtH4BSVBPTZm9FNkjhkL3zANPbaNrajiwZqP75ewsCRy9RUXQDgXste8wbq8V",
  "key23": "5Q99SZWzwXRFrtMJ2DicTgdbHjpn8sFBpD2DAT3hSHFRKPEM3rG7FCvyEkcHpxStMyMMABN2hFhR1rEMAxMCbNHx",
  "key24": "RKcQ174saAkzdpeRvu2BMpyEFUheALwS6VLNYHBFCM3yBXi89BqpL8XuY5j5nLHJVveQm2bsyX8fdmynK3ovYrJ",
  "key25": "4NJURfhEqDH7ZSTWJz6udmCyCqn9BF8MGDmSeXmC4bYwkNmS51WNpSZ8nuLNXTquxo3JE1Q2iNhQMNeZ3zC5ZSMA",
  "key26": "4kqgNxWHZBm3WRFTo7HFTwiqwsxfEoJBo4FvhU6VhoffdN3Wf6Boy19gqGzXo4msyjvXGB3yDBuCNYtjzF2yXxop"
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
