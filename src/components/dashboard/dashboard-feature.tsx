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
    "4GHpt5wEAczgMgYP7jf5ofJNq37Mo6bq8ACzE3Z8H6zuqFzhKy4m8LDTKdPoUfuKVD3J8pUjLZjQarn3g7dDSnFp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ze1Gi1zR26u218gdRdWtAX4k9qvPBzXoyEAGtxBLMWMFfY1L5phZTYxgXfLxmHLPPec1jHWpXRv6n1gEGE3aSA2",
  "key1": "2mCwqCqA3V3Y2Fbsn1pCjgt3jFiFz6fh5842GiTkcUQcxAro1ZXAxgb4GHcDecCesLz49bvngmzx1XjSSvN6ZXoj",
  "key2": "3QHft95DijMXXDqm8AmWqvUXRiebfLLyCezUPRTAeR9PPuB319bZmAmjf1Sfjm2rpRGqqPbFDpS89x3Dqhded5Pg",
  "key3": "5EdRpTPDFFAB3vzSBVJRY1ckAJpLSNdRwudt9jdHKRcfk5PsmyYydMQawCgjKTK27bKunHiyoovhd1KuX9QiBjyA",
  "key4": "4C3B91T3PKjGT4A1GRLZtzKZLJ3TzetGPASk9eB9VuspH1BW61WNaBZUxRfoWEEKd2oiVUpnUzMZdVBdSiEP6BKD",
  "key5": "2tET7rzFESSG1cyRSPbxNZ1peteUZcEczr6djrpyahtTjg2d4fdMaByVq8Beu5mjnjW4aZTwYKfNVvr13m1oWNKU",
  "key6": "282bghhp2iTXj9etFz8TitxBPtuy1cjT7vwWkeAsUCRhRmsBvQi6ED7LqdS88ZKsRQy7HxecPAitjfMB4s6Pz5uQ",
  "key7": "2EiyMyP3KukAPLH5cc2CprgcbxaVNtXiQxpV3prwu2VUFhxK2qnccpn1wKRDLdR7vKwgce11or7GZQ9fz3djh7rH",
  "key8": "4DRS2DLzen65Us26Db8u2ZWkYZN73dmPymWXKVgHSNb5iri5TTTrFfXxYLsW4wGweLHirxdsVeC3ukQWZMhN5VSW",
  "key9": "5csLhmCsJ9RYJm18ZVR2sxCHPev67wuvvoWSNb76PZz6Gz2v3i4JELX44FxqXVHDrh339QHAnfpnbgMFtD4Zx6Gq",
  "key10": "7JRzVHLLNcKM25AURuKUE826DMHs7XETwqpsuCbsQeYakbdmqVyaYEEoLPWpn9iNfCaFvYyBbnUzLLoV7Q2vqTa",
  "key11": "5h4XvV6hstuhysto7W5wUVgSBMh5bcoz6GMybvLpKw6rR26cyEmFLmapiSGKHTkBq56HM9NE7EFEUbiJqRNRPi4P",
  "key12": "PuafB1L7wLeEHYSHbZvTGocvAJU72SLhnT8HkscJHdfFG8Mjf1s3EHzyRH28Dq2YWBR1BuJgz65e8W4xKYwbFEM",
  "key13": "nDMa3ekeGdJfhD8ubUJyxyCdHnBTTLZENUrzjSP3W5eHqezsJspkKZ1RJ74jvdvkrpdh4BBNLHLi7tDKC8yAzU8",
  "key14": "64drUcKSds8ukTfxXDR4StjnrQLahZm16MQXmy2w2mnNHQhZi4FN7fb72GzZeDh7GryS6cmfh2Dzo4cBv2pLJjH4",
  "key15": "2dK7MC5bW5ico3jRWyELSSjUpUtErdqkTyvEZhENdnu498wXK48ir9eSM3V6UtwKdADEEtXogkLC5phxsXiVaLLq",
  "key16": "5jx4aF6fpt9uqxbjy2veE1aTJH7VS6LbpfPNEapBX69d1tL3jNcnNfHYoWwgRN5FuUBkZ1DWP657wyRzd1AQ6fFC",
  "key17": "4kawL8wz2X4iH1PETzn2mhK5UK8Hoy1wq3QZtECxEtqL4c1ittY4J6nyu3wkrmWrQzmVc5PUq73DUqaron791Mv8",
  "key18": "46MNWgjsmstSBJsnmF2u5zJBMpmn3heu8KKJP7RqHJKnmNVDqGHN9UCrwpmk4wWRQHGpR1V5BZstHQvicd9ASQqD",
  "key19": "45n545QzgKTUn1hioC9YhhUhpTPciVUpZej6rj4Ansz78ieWYiHmBA25HmxCLBLwRH3r8ppBb6BfyP1SRdYcxtkN",
  "key20": "55hP4jwDDuFm6WGiL6Pvadvq1YW9PNdDJ2k6juvb9YNspEnTD4E9h8mVthBiCA4seeprMWyL1k8LMUzg6MXW2w5n",
  "key21": "32av2pUqj8foj2ZVu71y3DfNnA54HEpwFXJxzev6R4ywZNrog9uYmuPaWsxoRrpU455fQGZ5U291FmoRu3RWJ7BR",
  "key22": "4WNzHSTdYqGAfoksJrVr3qgQDDvNy9RANqZFm1zLRPg2RQb8duMzxCL8NizwDkGvEQHe8wZ95Td7woPsKYYTiEDA",
  "key23": "32faNKstLqXko4eZ5ZVuPxrstYiMMjxzgoV7DgUTiEs6Bop6L93s6aTKaFi5HwZvwKj5TWnJ8CggrbUjaYsZdM1G",
  "key24": "679KBt8zP4uASE4WqVTCWqg1cB8XeNM8JR3MVNr3oGkefkjbq2N46hXdeo6KSPGyL3vFck1VB9nmPPcWsCpcuPUu",
  "key25": "2bDZTCfaL3p1ApiBrnaBbNi5fMYDGT1cqQDsKL8xQmqa3vkrspaFzAjujG967QPfoXJaztdu59Hjq49WAo6QR9ie",
  "key26": "3rPC6MpqYnfvtP7Ky2PNYA73j6yGRwPzS1PZmQzvcnmyepjnh2fhuv3a1w1t25Ngt9bd3tefWLAApSyMiN4Dix1U",
  "key27": "P1S2UL6kV1wxSbxLbyDZejjbMJ3pjNLa1N1MkdMTZcKZG8j2hQWWZFCzjcWfH1DBU96cu6CFq3nVcW1VsUuwTd1",
  "key28": "gom6JseMZ9t3FhqQbCrkmNB54aSZjv4K1hhqjCSU6bngiywuVjiCgTwnrt5oR3Ja92PNQBHyN18igHeywzHQyWb",
  "key29": "5mNgt8u1NYsDt3eogjB9zEZXkqvKfxoX5ujrfkfWvc36N8w2LQjw9MtTzSc8DjQK8WgEWVWJFkW8A8ZVVACAv9ti",
  "key30": "3QbniKSRkwCZMh5sWajddWNHMXR3XvPQYWxuCNRrEm1tdkf8TJBeZ23J7NaQSNVJhJCc5XJZRvVVhcFFNSpiCWPN",
  "key31": "4j4mu4BxUD3rrDDoNkkT3y1aSKEsUJuyrRub4iDDzGRDwZyUHQMmtYuJVsvP1jWMthrPXkJxPs7Fpmb6eEcuC69P",
  "key32": "44nFazTo6FzGEdgqqzEgqUP6hMwTesSG3TRmxdWvemvWc8QCG7jXvTc4ddXmfcAw4SKKQE1zhWbWNzREjsi4RGs9"
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
