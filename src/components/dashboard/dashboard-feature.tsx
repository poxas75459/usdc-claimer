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
    "38tN7BrSZ9vTXNAzY8jgF4EUzTqEa795Cc9bL2n48RGVUVWmfcDv8r1JnAtJtGEKosCxGfYzcPm3FHzGXMmo1b58"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52fvAxoELH5iRT3Gio6jhD6m2C1Hmm43vmpY7ZKbLL1UrjMBJ2LgXhzdhEmZddKoahfY2pj17m4nQkwiwCD11dPk",
  "key1": "2YoQJEqNZDqxhvQbisLkd8asWcRPLsSkiCLsNwSuJapB1DfKB33HuFjnBfcAiP81wqyKSb4dmTETAUW3TEt1eRW8",
  "key2": "2UurKN4cesHeRkgozTA5CazSgL4bGzBW8uEp4xPuAuWNEbz1o6TP4hmEtkWywQJK89QZxAQhac6NySwxumWjXqog",
  "key3": "m3e6frfKctKMb4jst6Mv88j4HbN7KtYReWSr5qoCkfi9QoYXApyFmRrGnq1ohUVmFGA72aydZmDRa9CE2d1xN52",
  "key4": "32sb1MqJt14aVb7g4Di6pMiYLPqxSRszHsKBqKCBaaDyoWShaQaBSoPWpV8hUDnpBD1cmSpQEFzjf35ixvSNLsrQ",
  "key5": "3DiY2ydweSBmsViFYqYgbAQSntDjoCEBJ7oV5WCXb16JeHmhTNTTjoDSDmNPbx8KZsdz95zKQ7VbXcdrcA6dfq6M",
  "key6": "3y2kbQkMj2ZdCWQaiPJD8XgSM4Wf4xgLu17BjsxbYRkuVMBxf5pqS7ziViwDqj22dZnBduphQjFJBpADUAMEBmQi",
  "key7": "4691z4oHn3oF9Yei5xmH9gR67SnYFarPbZLofNHVngSEDAMPN4tVvbErtvZtSULkyGCXuUep3XTaC4VGTEKaYWBg",
  "key8": "56PA33eZizDu1DecriqWMY9eYa8cVQ8LgyjdxugWFaZzTPiZTYyDKnWvx5i319k61hp15jEkdP2BU1MLBC7UXx1k",
  "key9": "2NzpaSgTejWh82T6d3X55zvSR9ryUBEtx9swRmge2oEYzTKh9McsE5ifyt72gYigz55rbkGdrWQLqhhNLwmxqUfH",
  "key10": "36nNEnZNnEF5jv5rDo6mc3q8SM2CBZzYPWCZ286HeupAt26L8JzM4Enukzf7rHMe24UYc2DWZwFgswTqXH7fm5ZD",
  "key11": "42njjv9ASJtxDzi1EarVcTA74cu2W7FBTnXauomSpvFnoUodJbmGgB9ErnjZLW5pbfyhpZoEi16xFaqDwTHcSKZv",
  "key12": "3eG5p946D3Waphswruo74GRx2vvKgTQ8LCz7yysuxYdEj1pD7XUgod3dUNZg41BPiaPJpfRmzB33sqLnEJpi7VWH",
  "key13": "48tkjXeXU2zdVLD6iQEfFVzjEAV9mkN7ASCvY9oYttvgB2u5kqnALdUKihwuvWcpoRQDLMQrLxx43xhBekJJjzo6",
  "key14": "2bYaKV9KdyAzKyUkxKqNB5raRpmSdQcs9PVQXvNPsjWCnFbB55Q25U6bDSNyPkiSDjxsBz7B1kr3sSh1AoX8iN9L",
  "key15": "2u8aKMV4hEFFBqNM78J89ppzuthmga1ouDhHXnSa6zCAr353ULcazztZWtBLb5Q4A3h6URisLVguayH6YUQGunH3",
  "key16": "wra6voXe3oqNnxb1aQbsQb9mm1KgWxQGH5RS5u5xWAWggGJN8NEF4B8Av89hMt9JBGKo2oAp7xfwKi7T2AxCyE3",
  "key17": "3B6yrA7sGLyVVckzDKPvHn4k5nnyXMAYJqzrGPtw3mAsjcbAmtnxXBFt5wxudnwD5evGyZnyzuj9DhCt8dFVZcf5",
  "key18": "2nVzPkejdWCzGwgEshhpzuyi2TawbCCDkmUTfKPDrxxqk8cmD29ZebAeHVomFp1gRPpDCg8tZmtzcAwcGts8xQSg",
  "key19": "Zq24AMb51G5fBLp98cpfmSCn8c28zUNAxzWTnrmYahuNFszDJf2zV2Cj8c7xasBoP9maf3UdHQZe3RHC9yhBpW9",
  "key20": "Qtdn4oc5yKKmiyzrHHQHQNPEK4qCQKRgo3LXVJfPMaEWhLTG4P37r7MLqiiEM6QoQFVED5dLYUgDVhCPoRYYf27",
  "key21": "4tNSa1KUHm2c7RaDvXDr87akzqf67xdtJBAhWDRit1fqS5ah9EAUdMhQ8Uvfae6sx1HwR6mBppz1P4aQ8G3Vw2Wq",
  "key22": "1hYtGBRv5jpsQsi18zyEDkgA4CUCL7QXmUVkDzKNn4tRySYEkqeGbExRUQtEBMALCD1wP3kMh9ZE4rxmYM9jNtk",
  "key23": "UFgiEYaVqrHPDbUY6XdKZ8AW3ZKei3hcNHhAQ2dqYT3o2ZyHAW2NYm4EfXbFyyEBPUeFiqh582SFCGKkxDC1hdZ",
  "key24": "3KeEEnWRMnVC5sgn6whwAjoG2GQXwDS9t9sSvdLmxsDWq7TFSjCwJZZEz3qvbU8DRE3kjeM4mAWcNEVXywsDhRtN",
  "key25": "5khFYA6zVC74Tn6rTC2KJv7ZhpLRDgw7rMm7uYCoJmk1g95HfozVJynRh1LnFRkydFsLwzJ2AN24TCV2f9bjf37U",
  "key26": "3cFaHD7wzmQr8mzqW75MFHFHSCAQKTfEhkfWoYd76MawTrydCcZiaPKy5fDa2ZwPMtK7GccMvYqEia1HukUEc8WW",
  "key27": "2XFWo37ahXacpD5VXtwStpgs37DfojYEDVNT4BvpKeHxxcA8r1uMNFt6XmQ8D7R1uthwVPXV5cqZVAKMgNs6HZgP",
  "key28": "5s3TwFwhAwEUUt42G8p3PDf46dfmx1PM7iUeHijdXsP8eudpjeSe4k9NcaCveFRPrMR1isNJJAdAVeivo3N6hdTj",
  "key29": "4unJS9At4Wfy551UMUzh4CPc65BYBAQe2kZa52Hs3Lq9P3bEckQpkdggMhNNHbijqRJrsz33kgLtiMErc8tQWJ3Q",
  "key30": "21GnFcRF1nbxmQd1kXimXWk93fKxMgc2D6WXz7xnQJ8wxUuC3nqdHtEFy9gaj3Shr1XqSh8GkT1jMJ7KWQvJTK5A",
  "key31": "4pYNbnpv9vN17ZVcczhzagsivAra9br8AhfpBsQPZs5FB9xupcfBNJgCL4NXEKAGwJ6eChgfFej2ESWs1hYywpiZ",
  "key32": "54xnaXQy3AYXvUCdQhFvZGjAbrSC2W7qwU8iuJozT8G4VsDW1boaF4zee1n22aLyaygDvGuwzRACsR7zhLJEXi54",
  "key33": "3huT2ZiF6J55xxkvBQSiCh652mdt92tcWQdM5gbjzQSvPE7JLE7ZWcoUu9kFFBMp1k1sWUZok3AcRaqRGNZtPziu"
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
