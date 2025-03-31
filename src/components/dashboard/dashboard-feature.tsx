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
    "24Vn8tYzLnzJPD8L8yk93pASxy8iGZYdQWNmPFAQCHd298XkLKzawhn6PGiCyP5ioujEqo6D9HAVKUWz4zJ7mydw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52hXn5Eh3PNi8PpnMKvWdefA51cMyTAwcUbe6FBWMi2dT4pxiMbRFizs8wGpqiWBrraHfRvEQSH91tvYJh22MkEf",
  "key1": "5GhrihD3Y8ZrjgWSGofFF7SdCU1eugraa2HqNa8fuTbmJoSD1P9URtoqbk6sXvaM6zJQqhN4yojjaKzUCBd2fMMD",
  "key2": "4CHBAwBNMpuszr9G4APoJETog4SbdZSHAnMw9gUTQNApE8kAai9EZ72RUNdvjNoGdkvgHEDRTeJ3kVWwXD48Qsj7",
  "key3": "5Z5e1JLNJ69Z1WhADFQMtpGEeqoy1Z1RBcnVsD7rkYxWb2HszR1ZmNBTiKJq2nyD7AF3JAj3UUFzD2r4ZpkYz1Yg",
  "key4": "5xcp6xaJFoCafkJnWmPeMy8oozeCAbWks6tk5WXk9bH2XZm7yJj3iJEM6X2svsuiVtuUGwNpdLy6iePy4ahajTED",
  "key5": "5eief61hX7qEzjD4HTxNZZWYe3iKjJeddrg1uwFkuXVFxkZ2s3mjH7Hk5JCGCY1x7722cUxBDvTaKDsobj3afodi",
  "key6": "5UsnHP4C3UUinrhpK9Xv6SZFKGWWW9shmJKPVG9QyKanCDAJ4xq3DZXmzkaZJWVayN3Pxg3tqAHZMP1o5QFKT6qX",
  "key7": "3BJufrZiBodYohf7McAjxBQ9UjWdAoXswt5ZVC6o5B7cSyi8VWZZBeNfmE56vMaHhiQcP1uyPPvyreuBW7J51Gmd",
  "key8": "3c7evmrz8kShBfmF51P4GUZbpnbs2fiZUCdCBbLWASgrtpXqFs525DY6jBoUgb874uCJEqYbvQkzA1MiahcCFagj",
  "key9": "4ABuovFnkUfiDXpeBztPE6w51psqJTjyadwsp3MW81nVT12WBXerry1kJnfwUukp79TPGxPqmnJ3oJBi9AWswqth",
  "key10": "4ebjQcVX8ff1Dq86aBzagDnxF9KLN4tazwCyZwwKUtmhr5HGu4z7kmYURaFgd1QiDs4dQ2uuhELQPznhjohLoAzC",
  "key11": "3nKWH4tSHXYqpNxqEkTzRFbN3n2GkRn2nsARVbkT8ni2Rkj67QncxtduagrBwLwn1b8A8deCMqvRwGCEugnEy54w",
  "key12": "8rXQ6fCpJ3t6A3ReeUTcTdUWL6xxbvUSqgZJobiepjcFbSW7f4uHDt3jfq6JETkwXwo1MU5enin8QFb1pUNGqnZ",
  "key13": "UW1a4fbEi43SYZucEgJ3F3U1DwjyaZfQFmgyW2ezv7WjuexHJ1nLEbVi9jYH1Ek53ZQrAPnM33aYxG188aXHfSX",
  "key14": "28TRLWnc9QJ2GnwTh4mr28ryU1zhS4Dv2Ek1tK7RSt1SY4xFT6S3Qg4GgaXVCf3agDQ6skUyRi9N3ivfTxyCCBDC",
  "key15": "2kMmo48U7c2DiFUA6aDW2nGJRcvFazU99jdjRLQCn9kFZFsqMPYwTe3cva5aajfQjuVo12swDZndWjmrD4ZXudEF",
  "key16": "3FkdnkTnibLHQHP5RUdYfosfqdXx2Y85oJf7PQRAPwxEyrcqdyLiWD2EFRHFEksVUhZi2ZyAtDw9QgokaHtopzYo",
  "key17": "5Qx4SvkBtPwF2FM1uKMZWMoCU71ABjyuyEpNJLBgSGWCYYFPfjCdpvHr9kkRUZMUwQbagWGLNNyginAm7yWVsadD",
  "key18": "4wyiSAtZTaLTeVnDPDGgxFM4ZVaiXifpAtzNvuYFCU5VcBvuUvwVLgdtDWHsDSHz9KUGtG2d1rqUAx45XJz5Kiv7",
  "key19": "22vHWMW3As8TnCVdZjE7W67K5sQeq6QvcppRbymvtBNmCqpDnA3UTSKbDJgsCWnPPv6Qa3at8Z3QK2na3NtxBSZz",
  "key20": "3UbLcfq864QEurrJC8SY3s1didJ9hNVa3VBgfAVBj3REa3M1BXf5XpQ4SG9cHbqCr6trU2KMEkyBqYXPa36rJ5aT",
  "key21": "F2CKeZJyK4w291B7UoAVnXQmr5yBdVoWbWeX4pjGwbAFLdBQCpHifcFE2gDFmDw1p9gbKbhrmMq65BCQXDJM2YH",
  "key22": "w2kdfJitEAcdpZtsYkka52Wt8wfnuYbX96JLQsJJLcUkbZ9QkoaA4whuJJQUPDtFXfh2zj3PBUqjmvzUyqYCwqR",
  "key23": "2BArykFUKvkg7jJ9wPura6zk5BP55YGXFTA4VF4oFXwGNSX2P1YEiQz27p9tJT9iS7AitHC6gUr2mCF4aeyzBvTo",
  "key24": "2FGws6U1cfBRoXybNvXTzhBBTZbyCqR2xXi3ABRWqH8jmBU3KeuJvcXkppuiQcerdQaXtKxGnbSkFDmL8nHRnhU8",
  "key25": "4ymccvvFrgcSk4d5rtMyG9Xvay28V3e3UxBgtUQqHxweXpWiT7EmwrSdvDDcf17L1681aD7YbhM4segWbs1FUhHQ",
  "key26": "3Y3EeHup9Z7Eva8WgzJSqLhusdgqYroXQuBoqqq1GVkW6kEBecytz8rSUg7KAMsPeNBHU5fnLDUEwqNc81phP79f",
  "key27": "4kz3w4aeELwQE8oiETFcRNeQPknm5g5M5CwUFFkeUZVXdKaa4JGU9xkd9gkiJmfgVU6JP6Zn5cxM5dyrkXWwgs1G",
  "key28": "5TnLs3jkr6CnBoQMQ5r9vjFoS4kcfgrezw9Tr23CKcHMmZZyZhJ7tR1raXjB9nfocuNFsRssu2Ygs8ZxRktAjUkj",
  "key29": "4wg8Fsj1RFxQEixpxbWboip4n6qSao8ejxNG39mrCYd1yTAeNUzXURpgWFuXgeem5kJv94Ro51faUKTrT1E1tj5U",
  "key30": "8HgYUp5eYVETHbWe4eAcJbbkZMCsdF1urXZGRAukXb8fnBVstQD4pAjmCZ7yzPgpLAPWJ17UQ1srBbVrMEvRWKz",
  "key31": "3BNoHkp6tgWgNyATix5JizSpri87dRUbeP4DL9FE2YGeUNByk4RcAKXuWJY32WKsnLX8KVG17wMTZdqWfBgrvF9g",
  "key32": "3JsKqtkLznkAjDy1WF3mxQPCw9TWLEmXXJUQ1sEBih9nEtZF9v7Vf5TNM4eGN3oTTgENyZjyLUCCShpNnKj7F3dD",
  "key33": "4SGFQcGgG25hz6ZzJf9siuWKvzJpAoEomnnpUhS6ibvy9P4Mcsm6hVxaDegEmU3EQkVtqr2d1hogqWqn8iNaQt8E",
  "key34": "4tQ7EqDGjKMTjuLx3zff7j72ipQHUqvXmtgaR7UMdnYFPqRAd8hUMKXBxb7Sf3Wrv9bGLE5x1bfdZeHFwNKhxxvY",
  "key35": "4pYfnrkuYxj1N8Ad2CpkcpXBjotGsQvX2a2HUGPfu6rsrbtSzcSya4vHijC4C1ojDasH91ngmAMWqvZfKGRgK5cN",
  "key36": "WaWeaqcMuxzrWsy3ou7JQZGRGVofj2Jf8b5B4EbhA84LnJnwvrYZv52CCnnnDUMC8e4Yb1m2LRpS8gHgEV8edxd",
  "key37": "5tZ2hhmnQL1kNZ4rkca24nsLVjBFMCRqhTE55Q4SxuprVMXH74qpR3JGFw7rdnDfQgXSWNM4LdqPBJSA4civGiHd",
  "key38": "batxyozEWNckra23YU1rA81Dh4moeoDppFxhUdqjSV5vmExAcnFBhmqLk9UkRMhdfgjt35tH28KZQaV5d2V34e9",
  "key39": "5t5n9LKfwvnYZqd4xgKpPZkS98PYMCFBijKsRRHRd2aqgPSpNQPqQnJMZkHaND6J3Vdnkpvs2udLZpDiRFdRyq2f",
  "key40": "4tqDYgc9aCa6zJGrGFAVyfWtX6eVWDV3QZjQifvQcmuRYEdyQAHRr6eqQmLRShngUjQhCfHLg4LGkFEdwQHCWQNd",
  "key41": "23VJFJmzjeWkag6KRJgtNcZbj5Y7pUE8c1VKmmUcP8MMjJFHDA29BjohCMkmXaapc72PqkhmVNG275S2atctH2jY"
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
