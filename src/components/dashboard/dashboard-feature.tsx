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
    "4WVFdyX7tyaqry7cMhXb1BSb7CDiM7cqw5YfJaevyWJwuXFfnUHWbkea5L8yG1raJoxgN3vS43XrLPjyWmR4K2nn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "um46nf9szVS4nu3gRRqeAcNqkbyu1aAZzfGthatBEUs2SS1BzeK5kusu8qbEXUiLc7zjiup9hdmZKG6RSgGevrA",
  "key1": "3xm3Lq9cGHQ5XJVNQb3FASJwnpkUCpgu4D7YNVpBQauAmixCUAKW6ZSVTu2V1E4U6fPPpNAYhiByB7iaowtW6S3p",
  "key2": "22LCvyaLRhBtSTQrzheZpJRfoEqGYXmMhrBpUBCHqs4wLLBajdSJPQNonYnzXE5uhLkGCD4riNL429S9FrB3jzzY",
  "key3": "5kzumueRgKCzSc9cvzazYzW1zN8WUjPpueEfU3aD2mQC82cJmpRYtD27ozvCUocoZCQLxPG4nHeMKM9F6wubgKws",
  "key4": "48bwufHSbPSQ2g9WzJNEMKwkkTZYHYFBXjJUbjVmhhwmNrbf1XLzEfeSvKJpNy47L7tBiPjVVFjo17ACtG911bq1",
  "key5": "4Tgx7zwaqPJL9kMtwhMpynZU6NWjgRAEAoeREL1ExNGomVS7ceS2Djv7W9spzBRvGkGutGCS9K3DauQ1rnG7vCra",
  "key6": "E3R2npcMNijwyvev4MskujnddzsCb2AbcyBXHv1BWCvzzJE4Jk2K3nMGqygfNTuFV95ggW1FfvP7Z1J6FTJpQQz",
  "key7": "3M3dWUFVGKxuHzha5UQGxWG8sbSLnp6V6m6oW3hcxtS2CkkJ5fsX3Lt7ksYqbS735i1yp4TCewCgxG7nTJ48Q5LU",
  "key8": "31wd44aRNWaF6E3LnLqXotTqVoSAMoUCKW87bdXtnnns5yzCgWLA3REmH2feS4pBQrao7r7u5Qh4iAVq7UN1WztA",
  "key9": "4FjTdiqVwRqkAtRbxzstCoMnZeouWejVCsxKiPuy8yBCscJe3CKzYwKmzdpV8NdL3SLa1DoSyYugkNGH29xZydin",
  "key10": "42dPsYkucRDz8jXF46Fpvs6rijKeUz9QUB2SSCgfspEfTr4oNg28CT9dWLXhaR24xejDWyHFc4WBBMM8Bs9SY76H",
  "key11": "3BTxjCsix6AB4VkyBiuHRrpYigp7cAnWXA8R2PBDBE7Y9k7u7QzcMuma4o5Yso5iJpDF59zXZkiEZ8iW4kwCVfAS",
  "key12": "5J4dNdtmCsU4fRX1msGgc7Cf8xCkfrSFWzXZTQtwZsZmLqqsc7atEHzz7hzZP84BzBdMbrk7bvHDHpx8RPqeXjHJ",
  "key13": "42Wqoth2vyhK11iMxYGoi9jgKgv5XYzpnzK5wTekHSZvPmmrbXuJpB3yKU5XSZV2AtnwpwfZMka6yXQF1XpnVse",
  "key14": "2h4jXW9RXbF9PvYNZk3zdhkBUSn5QbncR96bq31KDpGkh6UP2ghvKvs4SAJgBTEpJC3v8QJ9v9RrqtZ199FkRC8b",
  "key15": "2tWPJX2ULvsfD8fJqPwH2by8h1TorKf11XPBMNVfLZBkdpZHLUxbeFrPC3tFfnCn7PN1kye6fzj8gBEsBPzdxo8N",
  "key16": "4ev8QMTBLDUskEKqx6QtQQtSwHaPLx8PoDw7VPjN1txzSnscRLztDGCmuEQ4kqYpE6X8P4nRM9Rx1Lh9LgiRAKix",
  "key17": "2FyLy4Gg9nxmkiDM1NYRtyCtw7fdCz7qn9ZAjnxX2wdKgzHZdpSixaYHpqYFgXGfy2QJUJptyxDVkyU97oeUzFai",
  "key18": "4y1tvKfzBEt3MVBoqd451pakYBN7HUTXGFf6WX4cwnZs2wmiCKuVrc2VwwADHor3v4y4Ex6TkMhsd7posc9QWFjN",
  "key19": "4Ns2xnLDZTk1atrKMpNemkDhGYvF9bHEDM1zyE5R8LsmWscrfHxous1schdtCubt8Jj9XBzM9bYV8vVEeFn5ewYU",
  "key20": "2dCs8Qgahhj12JWx57wmQ9ywEV9eJFYNEsE3S5iUH9PhTwNmgeek5nmG9QcHvXym3jFed9o1zYTLgj9FRftUqrvh",
  "key21": "2z1isk7LGAPi8CPaEXyy9sAEkXnfZappbcKd6n6B44kiZpnVKaGjf35NUTakx7ki53AyrUh7NVirjK1Bp9UrJWJW",
  "key22": "2ko2YzGJx6hfjUfUqESrscfNBsmV1H9nPtwvCzMwNCYb6gqfv1N8YmMaWCbDr8RGXX5VV6Y2JrHmN5232qT9mAik",
  "key23": "3buryTyuzF8YqRGkcexi8pnvGxzvVT1BT8z2ppkDtTBHMx7mM2PGLyApunRUZSXdVS3Yip82NfysGbmYUVTD5CxD",
  "key24": "3QK4kTZAqXwEeXspGW3oyMjEWBHyrQjva7CHwz3h85cTCoswXSVqmivey2jUQQjHJLDqQkkekKjzPBTnUopAf1oD",
  "key25": "28WtXtDAwMUw4jmVjMC5LYTCrM1ewdxYVC3Gdo7RPJh6bHp8dAXuS5X5bTH4WZgigQovezfbWbzNnEq4Q7g6VL4U",
  "key26": "4V9w9yHTMzuPi3LvNPfsPp2BE4CGDCEmwLikCjfD5MnbCnNw16N2bmMQwdHQSCvVEZ7c5BRa2QSfdngNtB45xi8U",
  "key27": "5CFNfFgs4Lq24KENmUpzkJNwgeT5DwhjPXcoZshp6NtYYQoHNrAR4XRmsE9gHe9gtfNmvdy623qwdBwBoz5gLLPo",
  "key28": "47hamAJSxMZmA2C8bW5BTANSqUsrw9ebjo7EmAq5BkEhZMi9auaVQ2K439uynMsapoCb3JaKpuepM2ik7yyq3aAT",
  "key29": "3iHttYH4eBeYPisgy3H87Nj86VtTd5cLdzg6sf4bzaRBGtcLyYZ8frULBMvWVruNKgv6REjxmbbo9HobACUYwp5x",
  "key30": "5ub97G14snYSH61kR6J6nD3gRBS82XaCPkiB1aGZgzqWvcfss9c81ssw6jWzULC95seKgz4d3RwWdLxm8S9zRqQn",
  "key31": "2sh3Wjr8j1Zeu8K22VBahfLgCF2Q9x8J2YjjtZLrVJCKnn4nt95mbtsCeFFrbZvAC3Dfs8JHpLVHmZv4LfP4dU9N",
  "key32": "4aZJ1GCYHeHZS87mDhFJxkZ8Xcm9ujKey8sK7Ny16ERtBw1DL7z3g6HBJB8bqz5km9B8KGoFRGpnmYCwNDHj48dz",
  "key33": "5Na9UbRxFTCVhmECbp9bus73Qdicgd6NBBEzq5gmpU99o69bZePNDrcfxNHY5EFkA2wm6rqMzuPyBZ6FSh8u5Adr",
  "key34": "5qMsMrRnm6qJA19SfuatLnnwU2QeVgFrCFLdJXp6mryNqErGnsmg77ekmayB4katDwYbzSVAoyHFrmLAgMd59UVJ"
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
