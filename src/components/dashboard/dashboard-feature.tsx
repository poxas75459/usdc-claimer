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
    "4tEFyidaSN2h34fFaR5cUMBW8Pr2sSk6dFGxajU2pyQZbpgCaYt3MU8ey1nkN9TPDq7MzaKp8JGhzQgyjMvRojSs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9iayFqwisVdsa82p3ygFkCsfac3eNr5tCRWYPNJ9o9soKG1rFzFXgToPN7J2afqiS5mtYeTirzVFFCZupUm6tpZ",
  "key1": "2XMiwTrfBUGEahud9Tk6JgqxERePDebY1Yma8VJ3QXpBczwui5mYrbhqqYyrakgLUbSGyAUmzBjdnC1Lo5vFBCzF",
  "key2": "4b8dBSVCp9GoyBqDqns39EzWq3EN2YVurTbJBc9958f2AdcNP2SvZN7TybSBQbDDVtft43gVr11G5Rowu2DSu6jy",
  "key3": "eavLrkD7ZioUYoAZaFQuFVyXtSvRr3ogHkpJWEwfKJC1eJx5yvTQdE6z9fPogerqcqsovPoQcyokV7ibDEuCWWf",
  "key4": "ZSrjjy7Buwh1JsAXQSwoHRNQyAQPX5Ba8foNyqM2gqPbDaHi1ZK9Z5fTxzLUKaS5nKhRrRTXYUP3XnW7jgzNC9H",
  "key5": "2z94kyxVgz7rhCkAs3BhpPgCunUcc5YS2nJYxfwhtCMx7i4JTjt6to5JVjF1WJR4JaUwE7tpS8trgQxMQWTMnJ5V",
  "key6": "5qKfS5Gr8WgSeqGMnmn3G92TSMkHrSVhjch6HcYMELwGPXdkw4JR1LAN1ZycHSjwjyET4M9TszTkhDBsgemZ9aDj",
  "key7": "5hdWYGHN8veC5hczdbJtvaMRKD6iDpXnddHcGKDgWc2CNHANrw87BBxBsx2R48QJhCa222792KRbh5iY8QxFLy5f",
  "key8": "4AvtyeFkr7KVnZ4Vik2K7dDL9xUVmBWZcs3eQofJg9XobiRDBsiGehUxWDYtxtXu32vsrCEH3DkgdekGZasUpg2W",
  "key9": "e9DfwC3iExggZRKpBPHfacsm34ZJop8rrf49LKDh1e4n5ugZ2eHmefNzqZb863AJzVHx9MoqVck6fBgouJarwAP",
  "key10": "3q3J8K5vuau4S3Nf29Tv6xMQqwaxLGuBymQgcwFw77kJ4U4uWDBkmRbZGZYEnZoScbETWbXDKjNVdPzcraVE5x3S",
  "key11": "2qvZQCsZVkKN14jSkYQu4WwmQCQaiYHPu2ESHyuwoDGFWpN5yPQiYsmt18cHDSGU2HVtd8uY1unet2EDUaSsqwAy",
  "key12": "4U6JamVVuTP16xFjonUYekW1V1ZLstMcb8z6Exg2dtfUZ4BHs6kZw7z4bV2pB4j8mgSExYzYawUXtxN2LtPMXvEt",
  "key13": "4SJf3M8KGUKATmrniJLcveYrn7qJZStiWk4PvZghKnEB3pdFQFdLBcdHn1inTKMxAedyR2Szv59uw9TMhmF9tYZR",
  "key14": "358srG3ijqXnY6NejjX5LTWga7wx2x1YqCUJY7jYQQb7719mKyuuNnrxzsJ7gADyW7WrqY5rrZ7DMSzJXizJbX2Q",
  "key15": "63ChEJRWHUbm3wtT7tRfacJBc411RpKneLTwU8inNvfuaMMqLv9UuJez9BWAnHZyTLaF2zkWpvn9U7s1XQjeHNoS",
  "key16": "2NnfGoJdXD1fc2d6WbgvPBkuBSPivSVA6ehPaX8LobZaui7oEQy1GGY5NWHPHViBzyDP13u3WJ8GaEBhtWWAfZ8j",
  "key17": "fZQsrNk2GRhoqx6LzrcufCUviY1JdjKYs4XpCLTnW7GF4jEVvq8kE67cFzPr3cdayG3YRYjWTByWrfrRSqZ8FV1",
  "key18": "2ZPgC52BPrbKU7apxhzejaqby5Ns4etEfVJVoNQCTke4QSh2mgPFJmPAd7Yd24Bn4YbFmVZ9ASpc3QvJEcJ8xtUu",
  "key19": "63ndk7xnZig2Jyrb78v6DeLEZWvo1jqQXKUmuBcLdZVMSegPiDmKoo3hwyzykbUexLkqAwRzeUtT6gstccAYdUzs",
  "key20": "5i5eidw17SSofdWEJkihHU5PB9rJa6CQyNiY6HA2PETzGYp3cuu26g7fzvdUt4DCJbyVDPZPhAXzWYGU2pd2UWgq",
  "key21": "3BWJ7j4Anes69BVZcueq9PMfNubxfPr8HuGxBfbatvTXi9zSXkX9GDPGxdSxiBcKysg64cKvWwYmYbNpPEJVPoLc",
  "key22": "Hfvj4pY4ySXjBLF4EKKDC3iWMygbjodBNDK1UuCrKScLctNtaT7anXFdXL1MQM2ZVq9z4xRcdbq71nh9ypwfjcP",
  "key23": "4ijM2FbnmeMdmp1Fins5ae7KUgLBAWZSJeysYUcqBjnAZgKiyU8LaVfhQiuxtSAR3MMSaxEs1K6gv8LGX8pivXnd",
  "key24": "4zMrsAw1vPnX7Q3iyRHeq5RXMSjVAJFwM7pSwM3bPGqyGfPK235TEkoEt6CeGKELs7C151Ahoxbmc3nVMvtdhE86",
  "key25": "21yJk5T5G4Vb8jRthT9cEYW1h8opnrEALib5UDuf2ovDFFHirYKRdzDS5FvguTAr7NU5Zbs5UE95iyShEPCcFRAW",
  "key26": "2mTe1cBb1pqaA4TjCW22aiwQGnK9bjKQdUvA8oGUUTZfUFWhc3DZ6FNGhaDZYc6fzC9E1g4v9R9K82fAoNQ9t76m",
  "key27": "zz2JwwUDh4HwWYhT7HtFZqVyAksgtJ8nYFuRqSWYDnC5zp2rgWu7dMNvyt8ae9WKayfm6nmUN54Dn71H8LibXaQ",
  "key28": "5kgu8CxUfFkz4UEov52WTKekKLmagecW73tNkjfMRBXDJMNLkqeVcdGsCHHUcXF75gyY5HYgcZhYDiE27V2LZbdP",
  "key29": "5E5Tcd53cA6a2xxLh2hYSQJzAtcmvanjsxMSh72FH7UC7QxJpzuWQTjswpypDYQ6nrKqBamd4i1u2FiyL7Z6GH5u",
  "key30": "33mjY4BC1Lnki26quxN4DDucK8ja1QUfxcqFxEZRZRWPVH8p7zdohD7pci7fqekPoLiGbeCkGaMSZDjRpsoZu7Bm",
  "key31": "vsufCNdZKWQAqFbSN9mFDgvUVUdsg7E55DzhxPUtYXD7XKoLiJeqWvsnbRuGYc6EA5bo6ECrW4miRF6z7chzbFb",
  "key32": "5ZdUsr4z4582YLwijTjPspaUV45z78CHPiwqhaDzjyPokBehsdSsELugxwRZQFN15V32DmSoiRReELJJsmQi2LHU",
  "key33": "dwWWCwhWD4njqSvjspz7hNgGJWvDQzvf6ukP1vGav4bouqxFiLx2TcrdF1fyJcUYRkuWekZvTGFaWRqhcrjZstn",
  "key34": "57LbhV5A4o6oMofhGqa5jD57N6Urz7Urw3qhWwT184NiQrz24Mee9XB9FLxq1C2ZPYeDFjx9LhMdu2QafVfTUm7s",
  "key35": "4H2YA57nuLXs9LzYNm1q2jgUmNo2Vj35hACnuqp124mG2WZKWMKbFzEbg9xxmKqU6MUsbrWX7697WBX64fTXqTnE",
  "key36": "3jvSVqcm1S2KgZPahQhG9h6fYTWhGa54VjBEQ51amTe9g7TGSJVY9nuFmgMdXR1aa5W1QH12z5yhxyAcy5V8VLQ1",
  "key37": "3GmCLbe4DMjf7vzvs8Paf5MkiHjYfksoZm2KLXG7v2kHpkvo8PFZvZok1QY173MyijRasHZngkFroqeYAefso8D1",
  "key38": "W1i1TW4hH3UfdFduCPJNKh2LwunkW5R8Awh9VxdaAWtdoiXsKAqK3kauxetVzM8MKqyry873AhdfJ8m2n2pFBj8",
  "key39": "3WfWxQAeBe59Rex4PKFTuBMCBmem7Ujdy9Y6bT1ChvtBsV3eSvTKR1k2xtQZaTmxZxw5bDwzFUVhDrq39EFRXHMj",
  "key40": "2DdzE5mrZTH8zmFdXbr9onrsNnZXkHWzhrrAjRL6NJ3FRKDUqU8XprEngPT2j8Gq9TjJ5UiEbpre6xE9FmGdegRj",
  "key41": "AXcgLFiVtgRUpjsSm4SeK9yszCEE4XcF1xrd4t86NZCBq6sJGjZ4AoTDbqpFZivAjS4domA4ThwP3w39hRSGrgR"
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
