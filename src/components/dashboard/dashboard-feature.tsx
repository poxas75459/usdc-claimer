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
    "4Co1tA5wibRvN9wvofsfYRmaKzVwLEuoKDB94tsw6U1DAB8jJx1z54o145ZfwbQmSJJVMBiesm22RwFN4exg9LFn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wp2Qy8AQuzQAfyMGSynywPDYsfYui57mxaocsFuW65qeduZ69Fs3MKbJA2Rix2zZnMCRFduX7GCwKnP6EC1oaWT",
  "key1": "66hmtX7n9BYsYXMNvKrb9MwWds5WbSf7w2g9T8D2yhPJkxKZXxCjpgeMTgWD67kRPvtx84ntv7TmLqEiEXCwebE3",
  "key2": "3TvdHTnE8mXL2yZUTNgtKP1pGYQjrYfu3DxY22AbnkJLidPRL6n6qYoTgGhBRMdJsBHN42erSLXKFTcAJSxkLB4W",
  "key3": "2hNi3ZWrxfwhDCZTTLRwcXctoQQPNAyzmxn4uMaEHbTUd6SgCPtmJjjpoZTvAUYQFNpuap2HWyKrLp6r7VbckRGB",
  "key4": "5XQJDD7vQDXcgwvsCrmUjAqqh5p3Kv2hzC5GDWGqiWJyR5oAdR1B5b5YJcvm4p7xhkpZTXmKFrLaMhB28H3yjd8e",
  "key5": "47C2g349sK5T4caAX4gdSnCD1m6VMQAXoRuoSESDxLidaAsC21Ap4h6TARe6D2ALq8hjG977vpmTgTHBtjBNryqM",
  "key6": "5wMN99YfhxVZ8di4pHbajg2EkoW2qT6hTfgLdGeKd12km7U74KHbwT1XYmQTNr2Qw6wuhFLffLoDJT6vC8rLsxUY",
  "key7": "d3UdmHbY91PcCpTpPCwmEcpo9J8rXP9zpqSQLwatnVDNQ1P2h428JwQkSDnVVXjD6ajsYxd3LahYLxG8puokTAX",
  "key8": "4vgYVehq4ut278FHHCN7mJhX4YS3gUjc7GPvjighzWhFTVJ22XPwpRb3JuqVdRnBgCt8SCRs61P98iJmzSXxbd5P",
  "key9": "4VNKwMgt6TFsN7gA8ANdwEjuvk8DyYjERqB3Xp4FadLq4gaUTRAZkSewRJPqZGhk6LDc52Lq7MTPbQoLWohffnAp",
  "key10": "VSpvUqYLYCxwKQAxcFfemtFLHeXNKvHoVQE9rtou6h3QbRWikdNjs7HW4ChnFsnAV58SVEpoZHYD8sDeiLuC6XH",
  "key11": "3PewHeTX2zu3AGAHHgT8nBMHAdQi64rbh3EY3LaXWXkjMDHKTiT2nRuSAKQbyNiEpEiLAVXMfSk46TKUWxxqrQ2C",
  "key12": "5sw1VVU1MSXK16Cngfpt4CVG5axChcAeSP7uVRQDb43QdLPy4dbKf22EGf8C92HDhRJXM31gBkVEKXMUBgBWDAg",
  "key13": "4kj4wkN7y8dZJEfGgKmHiWy1YbW1oxG5H1c7RzfDAu3vkV58YC1ANr6qVbw3JwnBVzS9aC6XLC2ui6vAMBeACsq6",
  "key14": "5QsV1DLcDmmy2xcB8g8T7B6mmemD1r2LDaZkgdbo56ENLLoMnKa1B3EMfZNRF2i4wLMxwrSm1kTR5qUJttYXFqj9",
  "key15": "2fxjpuWFHYfQbf1Vj91GGqiwBRZ2CLvYDFtzGggMo6UZJQE4kyfyURp7Ug983hNmiALJt5FHsqLzdj1RdPHXnbwo",
  "key16": "2V8qEU9hBDw72P5fu3JPuxvpzUi8fJmVq6TAA3bUtdWapyjFPohawcby5SHQbgmEnZBdFLgvqsK9GwSY7ioWZtWE",
  "key17": "5sMqvcfQQaJbV3eLvkeBe7kBpkpbG9UZikPPUDBJPd5aZkucish1hf9JWGhhM5AAfmbfbJHq5ecYC7GJVfjz3jym",
  "key18": "4UFK7octjLZdC7yAKQJrAZArTkxK5CXc6byNqsZ8q4uDNgA8mQpMLn2vigzvxP4WW3x7Hi8k6WGjB6pjLDZUbWM8",
  "key19": "32viqattWYaazfuDxorZQm4xNnXm58LdC1v7GYvBBAZ68UGqw4t1py31u2V1LfmZ4MqdA8EtaMtiPfnUAuzjusNe",
  "key20": "nbcqEYiRmoR7A4N53dMEpjKKmcRmt7yQbx4XpcGsYVCrB3GYuotxskr6Esipr5JBei9K5jfZNwTWHDpZ5awnExY",
  "key21": "7iCzxYWVHL5i6XRQrgGXfHdEa6mpQuvfsYGFV2Z2S2z2vaHFqnhbowwY9D41QyFu7DSphwzPrWji4XjkDz9wL5k",
  "key22": "3Di2Srxpk9tCVSNQE4KtXCZuHVDDq1Lj3FHWCxoUHT19cShaBsLwcoPskik6SQ9Y8tkti6p2N6uj5rYP3Vb1Upoh",
  "key23": "3yL1a21Sks25Wu5ESZQQxFN8NAbjxhuNLkzxxtx2LxvxsvoXW7hYZjuBwT2hfDtzsFsfyNdSbiG55r1v1d8jGsBd",
  "key24": "2NaSd2RB8H1VX8VA1jK17a8bSdFBnrh9toivV1ExXjSnZwsaK9h1VFoqoUghfq3WqotGshgwxg2Aqj8FicvxRQRJ",
  "key25": "363TzV9yeUBt4RAZ7bv6Nc31gBaZSweVEzJEdR6j2joze1eNhWkQA5zyN5rFo6B5wJzM1nAsoG7Kos4MSU8EsE21",
  "key26": "3PN4dpa5CkPgBK8nRTPQdQJy9Fvs3P7c6kWeoHjV47DEqNjPD8JW95wzgD7py1ZN9WzRh5P5it9pCHraJ1RGjqkx",
  "key27": "5gM4xy7atBV9tsSymp2RNFhVf4cFUqyXPVwk8akVQDunUewtnyNpxayQmp7MbqeHKESMiiFAkjjbFAy8krCKqrD1",
  "key28": "63cuEudFQDks6zkipQdXsPk8Zxpb9T7ybxFL8SZkkT75KNmFqy8HjAZvUy7MP5thFFtb79RhNZeYw1Z6Uwv923Eo",
  "key29": "3rmfRDtpTWU5uytmTxzHNLetoctxBrS1WrcJKUeXDw9JgCsXXwFKrDUB7a3AtPZSNAZdJ9uKQueh8ryqPkfEEVi2",
  "key30": "3nH3Ln99wutStDJkrC9SFLH8Z1MVoAB9qttpYHhDaXuL3sxbMvBsb2W1f4SC9ufm3mt8JLTsdpeb2hz6zyDCAwRz",
  "key31": "3orKr7o1GxWKRZDdZvBazEiJFJnBEc4zXGLfZGUDB3RYh6Qm3J9UVTXbKNcomugeKYwdxesXjT4zeUrPoG6ZHWFV",
  "key32": "3txcaaRiitLrYEdp4w5Jzytdk87irw4CTwRKPMYxrqGe5YFAay7hxCYsuF1eR2qw4W1W7q1aY7vgoUZ28r7NQiz6",
  "key33": "5MfHR7KzUCJt3wRh9tDUye7jjcAY6g1eBZXzNz4aZbnopEK9X4C4jA3hmBxG3TWqYGVtgC89ch9UVfHHNdntx494",
  "key34": "5D71VhyvnzaHfnAHQ1ftqVVRyUD51Dfz2Axwv5Mpn9PTCqSXqFsWvwyvfJnQkfQUdnmvuapRYVG6pcZ8Wj95QRdx",
  "key35": "4PqCtEJgmuS3YAHSpCmb4wdx7ruaZjjzf4wN8vN3Y42gX7ZqbxtNCGiT9weeKLpV9ivBD9WVffvei6MDKgKSCZuT",
  "key36": "3zFE6v1KKXwjKNGN526Q5d2pPTuYF5uESYMuEurbp2Vf8NkyVPhtdeeJqyTFJmPVGmQLcFssHPmM6YWrx1Asish1",
  "key37": "kvoQGi4h23MGpDyzbBrY49km4MpPwo2eLBZdEBrReG6j7bxn5C2daV2A2SQ3zc3MEfWNr5TypB3D8X3ygiW7UpF",
  "key38": "5HdEFeToJRdPLY9r5eyYthoaBp4KdDuhWUxTmuGuBvjiLksfU8QbJHAEe9CfhXRrK6kbShaKq4pFmcCwuhscxNHi",
  "key39": "3PtTU5CtYx3KJYcJFyeCaP9vj1uWy8rq1TdYtJ72SJtgdqvzJVCYmoXBZjsGxupxcYBnmwxrZRtMn4XBLaVKx5kn",
  "key40": "yRDM8WfUqaa4Xz5fh19u8ncZFWEbJr8Fk1rXR2mk474kkuSxGaNm6RALmLwKkmDy3MRi76kWmy3kNufyYrjgCVw",
  "key41": "HdRstimWa1c35hjafZUVCnvUNNXJ5iCzkxy5FK9FUhRx5Ee46iZP9fGZ5rGzEA2ASnE5tGVcZyc8NTDMiwKph8S"
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
