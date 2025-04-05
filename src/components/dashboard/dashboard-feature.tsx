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
    "64t2FE6KxmBZBybdkBUnx6NhDRTbdQSex7BWBaKZsRkpLDvxac3FapHaPErDWuDsxhoCtwzqJmrFVcRRPjerNk75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mNnXfnhMx9U4CtmKHtSzEY3afrJA47qKU45b2PwngEXg2afUB6oXgctdWwnkMyEEDaFCnVbP6Q4askcVg8vU1ia",
  "key1": "2TLbzLk6SQ7FgssVwC4DGJgM8iBvcmeDePqc26PJNp2s3agSzaXuZjEQrjtRK3qHmcZuAjaCrqy4VQBa1gpWYx84",
  "key2": "3CFArL5unNUJudF1uXVWyjjxtFW7RchUWnBKw14HG3KpMZUHh2TyNUAnHiyktZeBR3WTH27ByR9KCQp3m45XzYyj",
  "key3": "5xWf7Xpu7bGr6vVZFMmKGyXwuoHaPEuD2EuiqAynpejgc4jp6AaYbyrSaDd9kSHb18tvHiEP7c2F8tRRDNey43hW",
  "key4": "2bPC3TUokJ66GzHVsKq8Dsz5Zch1AR5TiHWsE4L5G5rQUZbcn7RazM96qFtuRu5yWKUhdZP42u2ctNvzGVE3ujY8",
  "key5": "UECgUgeJvR8iAYVhyp3a6NjTnSukSjh14KgW1iPurTwMQccEok6phQRPXsDb167nFs6toKf2Gw6EjBfCWNMrCzN",
  "key6": "3EQRnT7Vhw9L7crwTPbmnnWn22CGQatD18U1GeAWP8d7D1JRx4RTi6xvTqQskBBoxissR3f2HjQAq8nP91J7UzrK",
  "key7": "hdk9anNKzt6tWQNNv4uemg2sg96FS2WGai1MwmJbjA8hyaamjhZMv89WXJefw7XxjMAA79eDkCZDGHfinzaP6mT",
  "key8": "3XMnk9SUHy8tuuqa9EqAg3Uh3b6KZFe364vz9aZpWcUF7N7kAyaB7k41UKePn4ZLaGxMPHwKTKXxB8Pki8JVmXh8",
  "key9": "yezFTdhE1rJb1C7R6jwjZNf9iRNLEKuAJuPVXqAWWjboVq3i4f16k9KV4jMpKUqRYqhvT2d5hpYjaCW79kaWkZL",
  "key10": "2eZVepnbcQ85tBUAFb9oZHMVgGLiRCQjTvy5JaNfndJQMNcJa9jRJ1aiGvrviemgCFMBuvRGe4dzdnjWy65rkodh",
  "key11": "5ykcNQBQ5Tx3feD6LHkzPMSqWv4zU7AhP1CQctiFZ6qjFYha7qr94Npv8jo2tvpbN9NhQCZXPfN2JXs8yUaB7eZZ",
  "key12": "2u9MPWfxoYZCRz81gdq8nCeKrA4CH964QEYWWH6UfgWPyu9EAfmKaqTLPVZgT6XSdzDaeT69JU2Jtq2jkpMfTpxm",
  "key13": "64f6CzdzvVuk2XhH2ntZHAN1fz3RAPwF5fFqNf9P537P5pVRDGx2UavfRqtTZpi2F5iNXNqh5wARwMQr2RLa5x9o",
  "key14": "2SwNYHCPKw3y8dmEeagtidfECrtimAEb5iiPD5X6UpjV9iDtatbnS9qmUgCo8v535wZR9niHQNhqmJk2iRjKunkY",
  "key15": "5rz4r2jzhKkygjJmC1Ha2oiU7L2os2FTcLuNsgayAGa83DoJm6nhSMMh2WEcTqVEU4QPEQaD3RsarL7kDgd1CuPG",
  "key16": "3F3MoR99sPwh4XRQZTz5t5uw1wSZGmZwBpHa6aPQJXswJiJchHDjYGrE9hghHsNtnGJ5GzcowJfJotCGnL6Dh38p",
  "key17": "5V4NcLvyfEm8Gux4bowEF3RqM7nKdSCXos4EgFg5jSGaMmDMWiRbPCWUewxC42sFJewY6Pp9i7RtoNcQc3wqGcfX",
  "key18": "jTxCEhQ5SVYLr2rHGg2ZnzEJw291LsUxLejhvyAwiQWHe58zsFxHbo52uJgrWE64UiKew2SipkneHCsqsJHsDqh",
  "key19": "xpfLyEe1dYNgk25YiN1bKseQpyEQpoTSKGvKjmo66NrBH1pKqChp5XCXDeaAxCqXh1iofaYg7BVJxcxubFwuQqr",
  "key20": "3Tv6rpVa397KzNefNHTgL2ie2ECrkMizwiDG5pSvJt5b9Cpydnt6dxJQkSWJf4PYBggsjNDyk2CkFRaoxTZWaA5W",
  "key21": "3n52QcCgzFahUAVS1ruUFy9z8y6GVrGcNoSPCJVjpjFbwqyFeCaozw55hR2goAyy1ABFv7ZxtUuCsFhjydJH2Cso",
  "key22": "XZbjTBhXbbyr3X4aUu77ffk5DruTZYZGoP8CoVTRS73a6F67AncUnEwNFxeJhxmptqeyNeSBXwMcghJPtzYBze7",
  "key23": "5a7u6vcmvqVrHTQG3khZijFCAVrMZazRyRRMnauu8gBmGv9CUjR5YwFerkq8yxYfvGXFMQM19DFuRr4XWyEVxH53",
  "key24": "3ujyNoaNWqrP6ZTU9BqqW7jdZdLKpBgDpnNT4kfHXeUc6NwVpH2GgFzkrRNdyHKBrxEr8qA5pAaJeYNG651RZgVv",
  "key25": "4RnumAfojQsLsvJpvvcTdTohonJTyRkRRug3JYvFh3opeQSK2XtbUYMgD5rV3TPzJzVd5Vy5vDodqsCLF5PTLE3T",
  "key26": "2GNrodwuB8CGmwommaapLLCSdrdUmS7JsNF6TREqT5nSLKDDkQnWMrepzHxBpY5cT6jy35agLBztDkxogqrB1Bot",
  "key27": "4wNCE2XYKXdniHiq8i2j3VxeUxCkXVh2KhC6p6Nv3aRVCxpw4psmTTWXSV1caCKSetW2Qn26FMkMtdXL6nwQeGTF",
  "key28": "5j6b78mYcwCi8y4HGRwRqSh6jE6gSz3WikhBRbJXkkYQPbfRXBY3AxZUY8gFYLiLt2QjiziAHjKTMyCP9NTKWjx9",
  "key29": "4pb8fyoACqVNq882cVjaH1tmRNEMecBDBYUHCia8FUCUFNw9GF3JcTf3td7uEALZcZ4myWKPvnRaCFpqKozcEPWk",
  "key30": "5fstTY58mZvuRatw7JTfuxibryC1qYMdeddr61341nWGPw1UXUUrt4JdGUycPF1XCysdFZtw36NvvxVZ4F77gjmp",
  "key31": "2gHrAB28hzBQ4g4cQnZw9fPmGUpM33KYtGC1NKgHSfLGqnb1ehRmyDL8yjavLSrPDeFvczMoqMjTYfot8E7v9YK7",
  "key32": "69Rz8cS9vezYJXoDKoesHdBXkLoRro5wqqMKbpGFPXGmkHwpVTeei79rwLHbXJZeMc3krvVnZ37ErmY27hno2UA",
  "key33": "4axibJrmNjn591RHGDm3X8orH1VmwdLZXoRYNciAgxS8rEmUGm5p9nZCqX77r4suJyLFvG5c9QHP2ZTQFMLXqgfu",
  "key34": "424eDHKTRdsiPC1cK1kFt48ZqLcnp9zbRCcTeyL6ufT9hKpEkiJzZYVp22RhXh4gMs3XaU2jMVzWZCUAnRu2SWNF",
  "key35": "3VyPR9tHDNH3NYHWEqyZZvukpEtKzCfiU3WhYqUUfBk7d4UgJtHa4aqcGaS1htzQur4RRu36CYKs8iwHaZZDf1Y8",
  "key36": "3CqAk2BgSLUJgmtqrJSWYADpRaco5cY4EfpNLPgEzA7gJ83XnLUsFXJrrgT76hs3SkPcZgPfEKDZmdzyjyUY7c61"
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
