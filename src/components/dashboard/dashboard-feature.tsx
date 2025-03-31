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
    "4SP1qP1kUczsPoBSeHDWBxSHJmqwj3SxQGPrMfGZRy2Zo6fJUs1PeVqPHymXVrdgC5EcHoNKijWLK258nU27PKk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u3bck3Epw1TU3ar2vYNDfBbnxB16XygaW69nZg9cKcxAfAHGFYM89KQ7j11Z23sRgyJEfo9wqQEkoxz5vQHnK9j",
  "key1": "mxtomyviEA78S24XfjgnPfp241TKFMgKXdQ7fggwzdHUXWp49Fy7TVdg8nnP4uDNybJS57bNuDSyF9UeSaGkNFk",
  "key2": "67CfFygogMAdhYs1sQfWeVxCw9TYt7W6EWDjJxs7fhP8S5DXQ4P9eh58iuZwWxVYC5oHnZkywuwgVEhL6DDvpinu",
  "key3": "LC3eZ7xL7jE2wwiYuiSaUNEhGncvjm6ntnyQsmmUjpsPzbjRkSj9JbNDTnmfbDCZFQyLBjsTb1uewiAQdQhEFJY",
  "key4": "3rhY1HURF8EKYMxbwCELWyfJeU4v7XJqrA39MLbLNkcfLtKuRE489cQinEEw22sjynm8CjE5kQEoUm9qARiFf46d",
  "key5": "2uZSsbegAV6BVUTMqkThGSrhhxgaJd66qtharEc9zPxEDULr7wCUF4wvVtaLL8B1HeQVftkDQ2nrDqmtZQn3REC3",
  "key6": "3KUp3QqugvkpSB3pFbCsUoUaeG7DiJpbiS7whNhv4KwSoeLWJVnpvRGeGu6rzNbixYALXS1wBJoBejhLpMH4cyv3",
  "key7": "3uLUReSG9n2WSgmkVHMg7NJ97nB7JeHBGx1Kj2NDjEbZ6TuCkjL5ffN5NdetWLPRaanC88TbdwnZ1e2VGpR9KP33",
  "key8": "5ys4Y62gwPSUMkeiyxQaCue8qLz2yjmPaAuwYfpan6wRuwYqMGPyWqHaWtn8hVgLw7nkz5dLgzbxLKpc4jhK4Yh",
  "key9": "41x18i7oTvQz68LaVAYS89NHSJAqm3VarJqHYuopf7dMr7C89gQhAJAeZpRLnPE9SU53mXQvLPfQWRS5NFNSqxNT",
  "key10": "mUQb53fbdM3vg8Ao9b72xZhFVrYVkLVKGPGeBbLFR4eXvoQGDPqum64RhehDNzsntH7UeS6bSYw3x96V4HniADL",
  "key11": "2Bn5ipPfqc3jm2JdeYzeh815ZGPeY3DfBGKe1QsqTUHwh3r7C1xqaKEwizTqix1jujg3CKPVHNiSnk99WPK97aW9",
  "key12": "44od9kb761RxZMVSBXcPNWrDidpA3EE63rR6GhQA7vFG1U8UqLEiQ4wUzd6tGJwqNuWbZ55EC99oGmRry2WSXCCS",
  "key13": "4Vk3zoNQ8dDbMqESBqmPA1V2PjLCgfpfnEP7c3znX24bcprjJf3G5UDx2ExeJVHbUtcNpJsk87bLC5M5gNHZyttd",
  "key14": "4GAY8MxedUWQaZ28wTXXVSgumk6TxAb55sgSv2QQDunHBaBzNZY5y7LGMJ6JbNdhy5sh1AYPwYnuehmrqKTda3CU",
  "key15": "yzWu52WRJ1QhVNpp913q7fy63gu4TSpG4cz2J5Fqq7HeA88TxDyMtjr6jcBLkXpMVEJRNadFQ8NYXWtT9FMNuC9",
  "key16": "5UH5wgaxkcb6qCuyZouCPN7HyYqhzK3aZv3qn3vXa1wAG2zftWf3rrZM7SWVFDtB52TNiSEoBTi2ocRyvngF1ugV",
  "key17": "nLGSCVwu2r6XRWGVrurJM2jZV7XZFvvm8M5yc13dzFtUtAsKDQz8p9qcFPzKFtcSCmZWhWUXLLP6jFZTSePKaBu",
  "key18": "2RjTwNAC8gGFbivJH5Wf8quUePk4uyWaBhGkTNCHUJ3JkbudiqL5LgekmrkGbgpWNReUVH3VAFgQkqbtyG189KTy",
  "key19": "nkMJ6wpxj4LVCh5Fo2hXN7Ercvqy2xG2mYCSkUTPrpAX6d1TtcmXsFTM2aQ8w9Xxz2QqdvkivQ61KVjbKEdhd3q",
  "key20": "62iFNEb33c5qtH6kHZ41G84L8g6PW6bREFZH8VBi5MQxqcbVhUKbk8p46m1wrWU3raha42iX37XoYRsMWH89Lhm7",
  "key21": "rRGtrqTeY426zco5jL3KE5NgTNKMi7tvmpncAfpQpBzjyXDby9KzuFjSYAsUryzjNxbiMGA4hkvUZURyFopK3wc",
  "key22": "2gFvKF8x1jSMQMFP72LUi9mGf7QcxTnDBHfQPgio9kcZQ44X9KP87TqPhsEmdUT6KjAoTdZxtLo7oyH5hny3XKxo",
  "key23": "3FMWkdeA6ccwgDb4QgXh1vjamfQimZXkmWLrgTY6bUQBxt31oz6M8YZzJC2GYanBAwj4UzRHyGpnSNxCkRisazFA",
  "key24": "5URftRfjuLzfDeotA7WFGZewV3AyPJjAC1Eo8MhCT6rySnStTpyj7akqK5Hjz9qZA48gUdZ3EqC7d4qKGrhgPHvK",
  "key25": "3PZNUtTWZP8B6JVTHzDb8Xijn7uCo3vqusTh6afYUhfEVG8FwznGFdPE2GUFwDMdhCAX27gE5StkppHpRG8Gko4C",
  "key26": "2WKNQ5byd1tMcbKYjdFaH3F2d4vswSLPoXEBMMGFyytXBCEcD87t2De6svDvCk3HuayVR9r37H59D8QkEBPnm2J6",
  "key27": "3p33zPUzfJbsa3Pmz6SUfiVwWiScp2DyekVZgCrg15me8gCyXsBSGJEfQVweNL2dG6Z3wnwGG4xRukYSyf4srB9m",
  "key28": "5JxQAVocVKEHHwQcDWWTxPRoii3zr4aps4SvPJjDz3rCS9jLHv32ciqKqMmgqC1dnca9ZYPUJTFQCJa6ReDj3cCf",
  "key29": "5KdRVcaq7JhVjvtDXAtUkR9YE85LpPteFHC55dYCWED6qwH1WaCS9KYw8En5mZno17aoJ3qMZSDUVgxUvfUDzdsW",
  "key30": "4icLTj9mGLa25NGdyvXLZtohppoPQYTqEGqhRJsJ185mVeaV8bUbFY6igEMEW2BfFSZ8LC82cU7U8bWMxzCsUAET",
  "key31": "2PjUYXnzbJvCzi2SRra72MLUCGGWDoJy6425D3pTYpJKeGcrww57zHPaLdjA7gby8TS9tt4Z9jSmExWmFKK3LYaP"
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
