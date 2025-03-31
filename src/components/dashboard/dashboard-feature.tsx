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
    "2umuLpgFBjX1dbhQ7gazVQTZXmcK9hmMBFXrgkvGx9bqxifASD77iRrz23zfcw2V7PezmJN87kCDyubNFuYEQk8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YsHPU4QVdwmJWcjspwWYUyyFzbYjjsjGFGHfuKEHEGfyaBNRRLkkPZ97ntUjXuZtjyyqSLgWHDkq1ftEu12TSok",
  "key1": "nr4jC5NXemCoRTx5Prs8xgpBjcevqr79Uns26AeoYU52zfVdFTbimTHnBno1tZjKsQENvZD2k4tFzpw4pAUTzNc",
  "key2": "4BZyxfGRbpD5mbE3NmVYrBrxdmLncghMvGrX54JAKMsgjbAt3i5oBTB73NEmBFKSrigNKZnKfwjS882NXo5swwfE",
  "key3": "5aq4jf3exBpXL4EpdX6YrPuhccNVuJEw8nMcJLgyfTqCkxN5FJ3CNNzVEKxutX3ohi3Bfdh3YsudJntREgN73efc",
  "key4": "4dn5JTH6rpAXqzKzHf6WazKwSmmQ6y8WJaSd1LFLhH8QF4E1HXxpXokWPzYQNFbs5pM8GyRrQjagPdKEQu5nUDPR",
  "key5": "4gLpRZ9v25RR67ma9KXQt17LvhjYyfRLiCqZZGAqjRUWH2RBvmohyp28j8s1RK7oJcV8JvPGJF2STjNddd741Ngy",
  "key6": "34aFX6r9cghrmhspLXVbp3Ke2GgWp2H4hbAyZwVcDjXvfzBP8GBspXWv9qCdxZuBZHZ4upGHBXuj8hXW8kiUfgVa",
  "key7": "5hz5YxPVswJw9Koe4zz2YALshQKAmxEpa3KbwPTmFrwiNzyTQRDJE6f9ARB1F2eUgCqxToWYbQFcwgmXBtPhAqBN",
  "key8": "5Px43EvWf1B3wnYauZA93uXBe6ZzqLBAQj7hSShZid3kr8C3v2ZpGdpEKk99RpDrExYUuJitWJuj9XT8EYBmhXbC",
  "key9": "2SVNFKfV74s82vh9t368fRSAHddhNd84mUuhk44HNsvBYApe6KGpgonTZyrTPas4jTUwBHynXzLEPdDRncpixDfH",
  "key10": "4TR8Kbxb92RehPDdk75ksicAw5zwr4huqF1iQuKdeVGhY17PP7tPh4zPHZp84nj8o4HFRUL8Dg7Uh9LSGCkUKWZa",
  "key11": "RKKLnDEF3zSgtLbwGSEF9o4XVSCEK3AJ4SgrY5oTr4LeMTD6PSBUC6QHpPNAep1UKxY6KZbzuqL3JTVcVDpok5o",
  "key12": "4iv5DJ6owVz59yhnHqwxsU58sefcGz9azpqgUfpAL1ZNzh6zXFMMkBFUn3JcrJAywwHSy9A2pdJbAmie8V1UrSzc",
  "key13": "4re37A4dRUYmHngGcWP63MrVJqbr3wpac5T9asSKT5v7zyicXarZc3kHTas4ZzU7Lg9rLfiZ1TKwTAekDBWFzxRY",
  "key14": "48AvjNbZE1ddPRBnhKM98HStUFWaUCzvmEeMJuCXFm7NogLGzNkWcrqyqDfLFhrB5uyXcSySsmxSNuv1ijRjxFzt",
  "key15": "63kJfceUxcb3T77d4TuH3weEUB2DvqSr6jDcPqB2f7zSgMkxJVpFeL1xnP7cqT2fEktPY3FXdNYn35h8ECsphCKP",
  "key16": "2SFxkCR6TSJhZD6gLENaXpPt21fF1Hjt9sfzp82QCZVhD1irQEpKaL6NnWcLLXe1wfEWxwzJJUpqgNzsnA2QBkdC",
  "key17": "MakMecm7oHd7iEDe5yetaCnKdQGqwS2GHv6nnygagMskf777NcKvrpokMoCg5wkR6XreRYmXcW7svxhndUXpCHf",
  "key18": "58k95pEudTqyEDHpErhdFWZQJ5o9muvd4u3op1tFtMRtbebGLhRZ5yRhhbQwxvKpZ38hXNfa4X89TH6vqEPpjPaW",
  "key19": "2md9JNN4iu36RJnbGYdbV3aHg6E17chyezfMhWqQza3U7ZgiFoA3hKKfmzwXdYx552j9Dwrz9xMEn1qQhtizhVct",
  "key20": "Tsd6PMgMDW7hgcKb5nEZm8QjqHdNjAET3V93oMbYiZjXpB5ghZUif5o9uKHfyghri4bah4N5JHn83V12G6Dvryy",
  "key21": "67UNEATwHXSp39o8gFNFV9dHpc1UuGoav7ZPcPBYRozVLhuBRCVJEpd6gFGPwpZxvmT9YHtqc8qf45Ccc75ndcBx",
  "key22": "3NVmGkFwSVHraV3PVt7euXUUzpJnEJKKwDwURwvgKHutrNgKNh3HkpozuoJhuBEJ7StEB2FURHQQYtaYR1Nqg4a3",
  "key23": "NkSQEM8w7aGXHEbUDD94tBK8fbHJN9wVVaiVgnJjhkaH6CLgRTj3ZBqa6fMn2RPmWRmBNz2UunR1FLTMTQr7rPn",
  "key24": "5XuRrntUJFoPnwPaSS6ArHTbY79MRYyTdtZSNzqETZYKaka7LBRz3Cm8dqsuRUCQTyNajdGs6ds31RWkt2eZ1u7y",
  "key25": "64ywFaXvoxkiiN9q27Pd8UzhgRb6SUbfye6BsjzdkLjREAiBuj6stFrNPvQCNBmbYQbTuTote18LEqDCZmUNazKK",
  "key26": "578zwmzBSV9UtUkt4SNEj8y6idP6eamTSmvktF8JdvkePpbTU2HnNxhrcocb74Wz7e114CKLc9XQ4yAWZkpbjRBS",
  "key27": "5sCBxGbhM5z8BFqZsLXpq71YFp3hEBTAf4cSXgiQaMWUvVhe3mfqK2HtCTniAWTEt22mtRtnnpCLzB9CrfuM83VX"
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
