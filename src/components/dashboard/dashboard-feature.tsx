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
    "41S9rA31FxhpCfsEJfQXjRoUc7xhAppQcpk7Jk1rKVvPH7iXpZWMd8Sr46aq1NTaN1cZjrWwzEcEEwke5h5XUSpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H3vwvbjgTveoRiXjo7px1UP7fAgNQZDkYb8pdNawbchtUAbwtx3x8BZkBZh1YhCLkiyYdrDVubEyUiFpYKM7G4t",
  "key1": "SEZrMAs469xp846duM9Ut7hwV5c4ZTUTfiTjpEdvpiFkDbG5oLGhvtGCkdewCrFSxRfL93KoeFkcmPvgnPJhrsx",
  "key2": "4gitRVzHNFUaugn5zEBCAwaRzkdnZpT1YfMDJ6SXwYbbaL5yHM4J8dCo3SPn7yj6BQUd3d2aZnntNmC5iizwyPE2",
  "key3": "JWFtLUAxsBevWSaqBKNg2yQDj22thvUkxvUuSc7agDiA4uR5iYrgbaLMTXXfRiqTgMKeQPQfg9ySDzdcNqptR4z",
  "key4": "ksfD7DdxwrU71XXnrUrENtznsuXz1Dp7vea9MihqgbAp8bJiBKKpPcSjHM7Lxu16XbqqBiXhHhBDyeEj6uLFhzV",
  "key5": "4Qj5KSQidsvY2AoP5bnPacpFD47EQNBBmz7GNJhfPX3miGJL3qnmEasVEE9kj9Bye9XU2JqjErE9iwTgX73mKVNE",
  "key6": "3ABSHvjw8kDxB3fpjMDp1KQEap5SYhp9WSr7McdVjGTxm9jHDjGgKHQwLUVYbdFKnG8ZCYWwyrP7YmDa1wg9xdae",
  "key7": "4LJTDXZaRnoNNNakDc37X1cfhkmNz7vPJMw6oVKp5wLZtq4VqYXSpT9As2zhPWFgpJptBkaJruzdNZyp89xHNp8G",
  "key8": "4SBNWNw16LGnzkPK33m5f2d1CgL8ddF7eKqdGjD27B9t4n6Yw8Sakv34RdasDipdxBzVD4wR171VwrCZaT27MbqS",
  "key9": "2kmFQKNtVtgwr2kwVjc1YGY7uZFGHHgD9xUcKZik51CFrspgxJA27Nfne1mHtsf9unuHP5PKBJMtyzUftMipJ57i",
  "key10": "2ArPVQKrkgbXpHyQZrkxAU4e6EdzkM7UvZPcw2tbGNyVwpPKPTduZ953inPErqp4cz1zTyZpEBr5VnEbLUTVA2eV",
  "key11": "2dapupRSpZbo7Z73UWxtLS9W1XYwJmDzPMdEmH6LJf3X81cBV8G7WvpHa41yep8qFt8YPWYtYRsyQPrSi4XwGUuz",
  "key12": "2ZzwqNYYzpQDq5p17JfZaXdkdgYr2cnJUQY2vc1ZXkXQUMvn2LuU9xSvMHBVDYWngd6f33XykNfXJJCQ5nipS2Wc",
  "key13": "4vJ3LcvpZCvKqHJqM3dpdKuv8NzRyLD4bNt9e832qbVxsgf5XTyrUavSUiuBDzcbSkRPdDSo6Ba7KBVqajNsKNYW",
  "key14": "23cxEZAPr5uFFiSbi4HAy5aAtDECVtXh3Qn5eySBYSMwTT7yzk2HDvorPqvi8UpfgMQMCp6bxGHPtwgooxmEpE6L",
  "key15": "4v2rBYm2cLPDVDkNEeKua2SsgHdVfqJ89iPKh1nx58TrtpkHxjopvhg4LMq5y9sE5rRugJ9ugGp6E1HmFiK8Yzw3",
  "key16": "3VBo3aQZgyD11iK62cuZtf7AJ2vkb1PvJzrEpuy7QGos7cedKaSZXDtzQefiUJtxHK62iucUcPQPxABS5qXjrDqG",
  "key17": "2UgEGJi9LHuQkrmCbSuJVmZZL9rvcPPgkMPEJHjxrwZmfJLqfzny3VVHbuJ3XnScYpffPFqaJ94pZF24fVUVHEN4",
  "key18": "4KBKowmLfJjz931CdaGQDdmtPUzNTxXL8vp3ZPV9WAP7MycXDweQTRaLHvTXf6fxWJaG3GWFcfovjodA7cZoZfQn",
  "key19": "4errhx8g8d5K95h7wE6725pFNBGMPhBUPmc37wUKiqemTRsEt7MEHgWtrGMDvLWTF2LLzKrwEwrHg3emHBDZR6WA",
  "key20": "pCBUGNM6bmhTJjHRgyxksv3N57hvRxqBtaBWKtgJZ4uzamme5CQyr5MD72MiRY4B7gqrY1pFT7RLw8usxVdVbLN",
  "key21": "3YSzizpRvSWcjLdcMX53SEi4JSebmM5ErdjRFV7Es5pctuvbKfze7h9nq2wNMPTopZELTnFhhEsRFEWQeiL9xtse",
  "key22": "49zpFX4Kk6TmBuMWPQN6ykbUYTuNMoV8bfX5qWcCZpsweK6NkNGcdzJSJAAwNize9pKfLXPJiQmx9dg8optwWHmR",
  "key23": "2gCQKu5L7cDhLhCJBBopo3x4btRuQQgCbSwi8CSTZUUn4VNwGcJTVRq2qaAKKNdMKn891zJXUdbJPgLuwP5AFDRw",
  "key24": "2o15jXXzP2U9ZLLwkh1kQzXXFyqEaAzGhn6tyrvx4cJt1sWpT2QFVyQpLCrkBoKpKkCAQ8FnmcdaasZ7tXtLDRQW",
  "key25": "4Hp6joqbqtMcxbxHBzefk5U2iUmf6UYQJ6bbR5ngzEfgj2T3yJ5oeC7x1vDy6zj5Ay68kvJ2WhhT9XsNdUCyPiz2",
  "key26": "3EyW43RLw9nChEAjKv1Sks3foGuD12gDZ1vHw8Deu7zXt6fCtkgrSvBpBCo3sxyZkMzm2j6j9YiLMsBkgbRiXuE",
  "key27": "rwzJQ6gHPwGgFUY34fNJWbyVk9t9jc9sSBAg69yemTfbspa8jrXJvfWK78DELcNHJvnFQ1coUeW7U22gsSLQ1zR",
  "key28": "4j5Hd4w93PXGR2FgXhM56pATcYJ1KQYgUrYFVo9PNeJv4zYyYHpFiJYyUCyvkk9P9TSTuPVLLCVD4x5LDAM718aD",
  "key29": "5RW6sejVYWtx1v6NdkcL16adr3S6iDn4zqis7jB6Kcy2NZBfmtempH76kSJiZF87RuXEDr6kSPfR96G94LpKKJ2f",
  "key30": "4ckEhxcEQD8RTBmgXQxLVh2UPdnhoZK5jDpNZebaEzMj6e6dWGSqBMRcHYJZ3tSyZYcab31bo5S9YQvh7kVu4az7",
  "key31": "3pCAqCHomdeUQgvincY6j793NXQTJyJvNTbU6DBe3EcZ9TTn2Amnkv9nHua5ikjuJdH66kBzcewj7d7ha78F7dGS",
  "key32": "2z1tKV7TiHvTeTyGwvyAyKktiT2XuB6efRnvUuocQyisPagT2CbY5jJChSReiFam57z9GbHusUWRKZAR5ZGPR7ri",
  "key33": "52GyPriUbSUJgwiKp2HAEUHxMYnX1VXpWgFKnLCeyBLLr9gr325SorSYHhNQ5TJobERNRQN5yFjYQT8mmufxtty",
  "key34": "4dDfkCSRaSYBcGaJei8J7VHqUNpCztrqo113oLZQwho6woRxWoAp6oYpshGEsPDXVKwgFtmkUGGuhwmpAZ1WScHb",
  "key35": "336gVWGh4NdY3ngPRd1F3uDLgbi2ZLWStFmWcMM8QL4eSLbrRmuwuosC71oYGb3VUZPGUQLvjP7TgwnruWtXjtUy",
  "key36": "3yYqbhbxHyh9xvvYVZSrV7NfcGJeTgUCqB5gr86t2A6SWQLmA4Bodj5jzasmkWzXeC8Dbs5Q9sAkLwxMMP1nFybP",
  "key37": "5jTAxBDzvzUzX9sHTkvQdLHHJeuEGXqiCQJJVZTaBsxGUjgSVkSF1K6Qjys1Wrpz5Guvfx7Q7TDLsCnLSioCjAN9",
  "key38": "kfjCMew9p2aakRwaWiDNj5gU2Do3WHep8CdtbLa3MeYNWDBbeY7Z9Q6XBUdYPiZ4AzN4g7qPxFAn2MJD25WDBoq",
  "key39": "3fTDi7H9q9YeXpEiF7hmoYWBMEXBhW4GsATDac32qjRnmAbhVzWv2wRE3h9NqVHPMdGkuDLYkdErHNwTg3FkZDmt",
  "key40": "2F52yiCkXKHcHMTG7S3yi8iJDboNBrkEzT21JrXzXWTqsC4XFbya6f3YNCbYDGRx3GnULxitgdrUJrQ2MCm5ZpE",
  "key41": "3ZQ8CU7eDBSgrUAHjaCpjDDP9EVFdKzwvyFcBy23KDfJKotpzgJPxRae1NpUX7P3tzv89yqfU8WYm8cNXryP4giG",
  "key42": "4JX3Z7dDGhXmntK3NxX1yc4wc83ME4hK4PFvkpwdDYNrHGbaTy7nYHMfKKctWBBQskP6X4wMcfdwnsLPMopKjPEj",
  "key43": "58djRN6LgbzpKQK9grLWNuEYAyCjiDPwMTLhsZfya4La1XHZWtw5h2TBsUNFUWQnZjsqE5v9XNVmFC2D7XjSNNnz",
  "key44": "3WGrbhNXWLLz3fUPhXZTb5AMuSQo7UTG4NmBwyDvHb46F9wQMexLQzL3YjKwSPT8Drv6B2Uoh7axKDM9dU5gg6UT",
  "key45": "584FNsqxFyuKxMaBjpa2hKSXPcqmWBHNT9v27A147xDB8xMSGLGrpQJfZQ9vf7NpUJLXjMmkEJ6MtGNVvUaiBxZw",
  "key46": "2okA8WzWougqjeoEkRzPPuGoELYf5pwqF4emLwoM3mmbBj5isNFUgcTMLErXFoZKG8MnKh8Ztv5GGrsctecqmcJu",
  "key47": "3ctBXTB3aszNyW6x4cHFpnHoPNGWYSro6Lx1uBkHC21KKmMRPgvc9h3max68NcikCfBGom83RzNTueGotXjQbp59",
  "key48": "2xdjZG7PigHd26o3MGx8gTiAgTtDC1PBcU2rwAsFnKXSkfD82GB5TAfPgKQzrKNdz2L5qJN8spGFHN5VB19ZSNQs"
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
