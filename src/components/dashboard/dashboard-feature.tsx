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
    "2tLkDirk1pvpKiyGyFfysy15SgTuYWkLSDjseatW6nUddSpWCbmrukvSfowyvWuXBtmxXQCULVPwttpsjtQwV85s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9eYGNLFGh5TSa69p8L84L4ZRVadKEcrgCqA4AuhEcCUiEVpaKx9b5JgyWpgo9AhWuV2gj7QRCYQLCwgiMA3sJU",
  "key1": "sjFW9zifoSfo5UZfYU1nVJPmpHFqLNUkWuuyZ1xLPuVNPZVgMjTeNJb4wbGe8tWz8NvJEBaqJ3zaLNp6LSBR2hU",
  "key2": "3SdsfMaTZzxSKtuMZX2Hf2Lu6YW1p8RfUsp2Z3q5TLwWtsF4Xi6aYiSGsgHjL3CpN3jgKzHArjXGDsDPWM9f4R6k",
  "key3": "5qf4rLw2CZA18dMVqeUe9z7y9PXnvA5rxNxj3JNdWLZ1biK5EtJpwPM2UdvZKtLu76fdag6QrGWDihGcbDKMunjj",
  "key4": "FWoq1uiiejbJS2eyFkb9TGYtJzZiCXTFmzZhmrYypyoUbZs1LFeXokYszif7jbXDc4sYvCe5wif4uhNBhbPeMna",
  "key5": "2s3uo6DErYJ11QacKAhKpkzEwWk9a7rUXJXvsxdUcSEzC2J2oatXbGtSYPRqvzt9xooNJMpFpNt33n6cHs2VNLnC",
  "key6": "31n1pJAjHvueQ6wFzdFT4WLC6o9HwdFvWnbC5bxvVH3Rzt6RT2wNAZkp8z1M7waqkgKhR5rUnbn3um7mdfjkp8f6",
  "key7": "4SEDhctGXMEmUgXLvNDB2rxfk6S4SqiEDh6xYtwDnnGCN3i1T9dSADv39bWn3D3bqF5hChkU3YPDxAKk5vQ5C15w",
  "key8": "67jjpGap9vw9aZpfNiDFA7WogETrf5YycA29qRWT5YKXCrF5UvFNrMPSdmNvxLAfTNDfCskxbnAEdhmGwd7H1kv1",
  "key9": "H9q1ijP7QGb3khaecYz6v9ivBHX5rG4YVxi7QWna6QGCgbRgKbqEuoY6k5gfJxnK7vbe8HGrtRY48qnybMUT7gC",
  "key10": "gwT7bok4FVZUnU4vSepd47ZZXFUeqaRVYTKEx4shmtwZbDgyckF2gfwz6sHxRTS8WghaUE7y9hoQZymp2bqa3ZA",
  "key11": "5hPrySCGWTaXxETKraN2GFymE2ZfW4yCr8YrJs8MVTmoSxRS6PuVafB3ZAaYZbwuTTUHuxuPDnd7FFyFEh7tqV7h",
  "key12": "QtgH2LqwV1Vj6x1cti32aCkbGg8EgHKC3wnFHo7jasycbFRQTEoVCmazuMG1kvBwmC4tVSTnFXEy4bREWW4hmXE",
  "key13": "383xaP8KmLg54GsLwiBsmjdFtwKUJeHF8YC6cszjrrnBK2F5Xih8uo1gPBkPjTTCUqEpmxmpZTV4Loe7mi993uHx",
  "key14": "5JG19cPKnENHQdGuGXUQ4tjsVFWV2k7Wia89uq3kvdzYUEoutpsh2PwqoADwF1Tk2EhFanX4gXdM6WiXdKvDD5DG",
  "key15": "4HaD8Pboyo2MHupKhgMihHP5ufUe3r6LxFbokjwUx4YxR6ZT5pLJ1y38t3fyjxkTajXQhTib9H6Kc6YSpEMePFBK",
  "key16": "3oALVps7mnm5Q2r4bvb8C8nB7K4Aifp9h5GSMTURFxnwYWSWV5aD7jMjHU4CDcbMm9ipxJsBmkhy6L7jx7ScmcRQ",
  "key17": "iB43us91iYv7kedXTBUce15XBJXpCJp4JEYMsvy2nFcFoGkvb57pEgRSsJwQoa8PQsA9aCtNTLJwP6x7cnfXfAn",
  "key18": "5kcB2fY1KpWt4YGvfJ6wDLfxh921NJTwM9pWtB2X8FVZgssTZebQJhVNj3cCzRAjp5aChwy2tQgz4RCi64x5TcDb",
  "key19": "4KziDfGa7xpAW3ZkASPcPKDTBoVFougyoCz7VNpXGwd1CpuigU4qAfvPSSt8GvvYaVCfRdVY6Lx4o3BW3QMSpDD8",
  "key20": "641rJGYCepZiGqZs1uGu8s6X7kwp9NnRfpddcDTWB3WJ6cQesx31cxP3eaTP3zEbNZSJd9tcrS87nZYuxKchSAcD",
  "key21": "38QTRjsAMgzuaCufFsPccKiYbsgoDv99xugkYwuCnADSEZaqa6q8VjZyNMwzHT3hgZcCSQrasjpBR4qiwHdAKF9Q",
  "key22": "SzjegXa8jL5rwre9ZkfkdzPvpXXuVfdhWphSuX7MsqRARWd2SVcApAFHuVs9eQ1HaojhtarWFvZdqv7AET77pou",
  "key23": "2xXynrAjQd9qqTa4JfecszavdwAGHvk4jztb6kAMQzZQWZPDywrf1mZMTBeoD2RmnNpJcEY7bhMd49ChpQW4WrBD",
  "key24": "48vZF8c1NPF29sQAJPUMTLWb8VqFXiR5myJzJ8jtLwMPbXALX9PKpwZpCha31aAeb7g7Y2LkB4YbMjunWMgnsb5e",
  "key25": "4FMnrrXrXdSqU3NAkquTggZBm1faTd1JJNqXeoh6QKdMGPu5EFrEKUxxsUxB5c7Bj6Db913iCY1RwwzdjRi2BymB",
  "key26": "2jojT9SRx5X22LTfWGSyUP9QLq5QY4NuZSQ8wtKt6sbtuDJj2uQQA2pxtQ7UmerYaryqNBqkmiErGJ7jQwYxdShm",
  "key27": "V8mhsHSwS5SNQy6LW7kp5atSJ71WgNw2Sfp34t6CziCyc3sERXVSpB1r4on9VLKNe9i9kEjnz7AcMbuhDiQmchT",
  "key28": "ciWR7n8dZ1H7XBp2FEXn7sVkfuButjU8VefyNRTYg19VW43CmWHq5sdXwWhctci6yHAetXEbxveCjwJpLUPW5TQ",
  "key29": "5dnTVYMjAeiNzzc9i5fqNPxXZ2yXoJroXp2miXVSFXmvTA2joBe9yKdFMop8eWS1UzH6afLhnY2GeQsZR11g7wmk",
  "key30": "52dPNuCjh4fFEnEJYdQSRnkRYZJe2pZEVYMCuKabhMdHn8CoiFoNeQautHicFU5YADbVEg3Cw6EJDeszmfSVR2Vd",
  "key31": "Tf5pmaRHBKFXr97mjLQTZt4hhfNLohiNEQL7MHdqRTp7XmSq7bTkSsfSBoZzYey4nCz3RvCrQihFv7L1S93kBNY",
  "key32": "43y3YdHXxa7QBfXvVZvhZq4BcoCZJn6crepaGhRs6vdwXDaVogQcgCnVnXsoaSAMYSANTeWXMPKNVUH3zqYd9pTy",
  "key33": "g5dxHWg2iUwdGKVZAFYmM5vYsyVfaa1tedQmJX31BdvhYpwoQi1Tw2oLw4oeXUZauvna6as6bajPrSttzBtKLrX",
  "key34": "vghidKuFaTD5DnFn6ey6ZZCj6AdNHAd9snQmzayxhfYN2Fr9UtZsb5k85yfvJ6imw2KkwHV7MLr5gxYuFeLBFcm",
  "key35": "42hABSLXNPt8aTbscGLfXgmhqF6zA4uoRqUzEKbX95ZyKrKoxd9xELYCrKmtcRX5ebbMrQWNFh4UkZwT6fniiiTd",
  "key36": "4QfCNumRXqAAqEQA9BZWeskjuMnb186jAbKtfxsL45ewME5t1zfV8S9fKJE7ZUbUHcfseA3h9BPDTma4Y6rQ9t7a",
  "key37": "H8YMLJ7mrtRZPU641ErZuxqUpLqxv2npZwpSCXiLpyw4PioytCfkDgjcwzFJJ5ndQ1PSoXeTXZu1G9E5VGC6fqL",
  "key38": "38xza7DaYhzeBAsvTm2iUFdwiX6xy2wLpu1Cyxr7C1qnSp3QjDxBV2fqNyv11Q6NwDqa4Wy2faYajrdayVpdQYej",
  "key39": "5hQ2kScmrofSNGTVcEx9HaqouH1H7F9C3ZmvhipufbH4HD6WYERs2f4ngLkaMZqg7ARqizFgdCHmLJhL8n1JCBmW",
  "key40": "4xcBwTHFQL6nZuKYMUjrfWSRuscyGqvZhGrCKwUVWqtqsdxBovmcxYsrksZkKo37gEVxAcBbm2fKeLjHdvTxqbwq"
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
