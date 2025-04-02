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
    "3Cbb2nihGKBeCkP137nsR7qA1mdBneqXJK7uD2Ap4BNs9Yiv5VPgiUJ2weuqdkpsGx2VP3WZXKVAQ6YoDQeWLrNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67HMh6fmivnpgr3hetSv7u6FFadizTiAKrHQ9Y43r7EcyCZ1vDNKkEd6W5cB1YRg3F9T5AgzhkSvNW1CH4E2YAtx",
  "key1": "35uCg9KvSK7ynXeUFcQinCBeHLEMAQiTWwixxEh5fLRZ5PAzP5YCLQv75W6vQJVX9hgUDzELEZ2ar6jgoKhURyip",
  "key2": "qN6APy1WtMTeryCyzw8C4sVQs1tHX2MTbM2x2jY6LwsPNw6e7is8dG3UMkrm6JaqBo7wLc7qfaK3K7TK7SDYbk9",
  "key3": "47UR2W3MZadnV6dbm3JetPUodAVmhZywiU5hVz8CMd1ji8viLatV6otPjuBrGGqB811MFqbiKTcbsDdxprbB8Zuz",
  "key4": "65w6QgKXzmnAGtYayTWcAzXBZaWFia9FZoaXRcTQmGLWLTjFgMfzLtEtu8JMn3C9vVa6r2jjtMveSG2zUxdYSmus",
  "key5": "5c8TPEXAkYBvKLdwpWjb3X7xCvh74Xthi22rTQ9vr6e9zp7JwTSmzxFuNqe2QT6WehVmfznmgYJawitamXtyvs3z",
  "key6": "5Kw1AMRzu87MYCMCcSMR98gudEAcGtFQYd8yqtExkZKcAHyPFNhTeLEx6T4xkZagKseU6v7cojCwzwQcUtsG5F59",
  "key7": "5pSH9WXo3v7PCxy4uh4x7rLXqmitPE2sDyXbQmSfWJquQTxz63wrqWw4D1jLizB7CKfw1groBW42oprzcXApQ7cD",
  "key8": "5PAbd4RwL12uCLFmTYpCevRpKcZGQdk5V3E5PFFesYhMVcbQ6u4Nj2vjJtv3RuchsbrK8bEEQ15cxY4guLtoj1cE",
  "key9": "4amRHNkjguuKnPP1fnw9YhB7MJdkqCWfpyb6VQCx2aKAb7C9DXv47aGmw7y1SxpmmeBs8mg3VuFV1zCdxX4WKXwq",
  "key10": "4dpcr4qMdMNrK3c8Y5AfNK5FKjxyi5EewQSwsqcytk9KHGy6Quqr78UWjmm4848FcLCbVqDB22FCq4CDcww67kTZ",
  "key11": "65hpoMh9KPs1N9Yhw4ZS93JHneySBDGwEVPmseELyEMunYRNwkXrgTuawLdNUcoRqqxaqb6dgRnfVrWLnhViUabz",
  "key12": "VeVrLQptCKJfczMmcXJC5UD6saUSfoP1PQRaH1VX87uC74QT6ZEn9PzQSEpiMKiwu8ppVHUGrVAToyrzJyyNwHS",
  "key13": "2qU3wC9G1gpSNWp8tEwpvD4YhPDReRAEJNqaiXD7jxL8xrZUs8E8rKjbrdvDTW2LtLPEHPrmw8z6FKsKKArH2JVr",
  "key14": "37swkVuWn2HNaT3tKrHUA1HicULhDGEw27pVzkqAs7v8E5Eex2b4NPY9DsU4S2yGkwgiqNnGLDmDcNfLhKuCQYw3",
  "key15": "rT4zDF1vrAPZTBE8PmfasVSFnS72KMAHmfd5urz7h6nxWr4WvgRRQiJcmnCBx7ZTJPXDBH3wK7vqMFVi2eA3WEU",
  "key16": "4NksBcD5jUZ4QjTL7Qn6eyxJafxHHjNmz4Cs7aacJTA4Mv5ZnrRceWghoon8htXvaBYfNJSX874eL7e9TWpu629J",
  "key17": "2VmEAd1A3V6xHHXSwaMmK6Vpq7ETfoU9k9VchCmW5vMo2PKVt9Q2WAZvZR3N4YTq8yew2HNb4pgTTDf6oxAyrodn",
  "key18": "3QpbmeafAtTxGu25SxAcnNvr9x2HnXYgYBfpmNQtRY8VyppcnFZe6f3YETDBWLo9XaTx8YJbXED4bv7eh8AJjxnE",
  "key19": "2Tv637yoMkFf7TecpuZVbR5Q5uSBRTu9nLDqLtxewgtQYaoMM46Z4MbHuaAMcYBhNezRwid3WiQpoS5v16kf9Mf8",
  "key20": "3oAG93BoofDnWfzkinEjmQMXuCGmJSWfzmHbYd6jeiBjme3B2xAz6S6LSjiASEWnL9n6RNRY9tYENsV7mxM3xK3y",
  "key21": "b3USdJikQ1vwC2qb3awqxSEZmpr7WuPftg1dBPNVtFJkP7NyUVqa8UQctaRz9mJZFCzeQcQauRvLyq4SkrUQ5o9",
  "key22": "2Cy43tpDWGsKye2qorMvM1cL86RDVcd9GGVKNnU6dtei342R2825NVNmQtMYdEBL9PmARU9R5CojMQbgACRWWCEs",
  "key23": "mh2ESG5UD6cAVqfrCJVHcRYgqZmKm36WVrUNPjtBQ2WnwftJAedbSpRkereowr2zMf5SCM7ZWzcbf4okmuvoP8m",
  "key24": "3AYi6evrDquzsuRVe68Qz1sYEKio8j7y6c52NYHn3qFhzFcyuE22J9bkay7nxMJMq3v9tTUfEhXDthKqTS6jmxBo",
  "key25": "MkFJs4GrjFonpqV2QXJJVZxmEPwKLse8d1MyJqdadrVaVpFL8cdY9RBGhddu7Kby5quXFruEnuFfykkH8FyBAqf",
  "key26": "qCXChgLFZGJJc1Baf9rqMkBoocXcW7SfAFD6RQMPcBjBT7guuVCbGbnJi5tyWhXvxMQUsc9YkqNf2jcmaGJp2u8",
  "key27": "36R74dvASQNimybaowztDy7R6Xhupznz4KPefJp2VMyM7xEzCf6nJQ5y9e1fTRqvnzuHcvMq98ujZmg81JA5LuNF",
  "key28": "2w1SLxkGWfADaDDTw2xTD4pK3Bsc9ucLNgA5ezYeqHRbGaYhnJ51ZzPbYJhcXzbUeezNYxBxbDVKmoxFqzBzdNUe"
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
