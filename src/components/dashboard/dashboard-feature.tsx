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
    "5v5mnXhNoDyo5UNosf7JNoweFWvUT6rVGUpqKsNHWNctDKgpNb9G6YTveDRNCxLYY2fTmqNGDRummmKZavKnQvDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hcJ9NBoMkq4NdbhdsdAoxrJQ2dXwgUoui1C7EDce45rH9uvAeN3KoHVhnS97UJdSLwHobixcsDZE5gdeVnWEGf",
  "key1": "4nswHtEsk6vqpxSv1nNeAKhyX5883RQGzsHDWMoNKJkBufkAY14dSPGvAuXb6TexRrNNSMWpp9eHF9adr3R6QGnK",
  "key2": "2kCqREF3xVWKhmpC2R833BX1fDNu35NWpvaRACqCePuXGM8Dav7uNHHzwAeAbC9Tvw1Uan98kNq2P43bCrXXMPM8",
  "key3": "5fyd1VKpyvpRmLSDAMh3NnCYpu4jxLbAgYrPfQGTQen1E17Zh8Vn23eRL9J6tmQuhJ2sHj3NeGerGTbVd5SvxSEN",
  "key4": "2FoPG86N42seQfSK8BzhjFVC2E6ciBo2rj8jb4MbdVoUPejukNTn7E5YGPBUttRoWiHo1cAkRYqcbfPsaeyUELMf",
  "key5": "wMZU1kJMniXAWjrEMV8j5CRgHPNtYQocjehK4PeuCrVrmFdd1Q3JJpYwGL6814QEKxdhWd2PrWDzWb3brJf5etJ",
  "key6": "4sowhzTokYGaT5XrWYW92KrPccHrEG7ZtrbqbS3mNjLVZD9YFxryqj5CLAwbfGHwVxnFsRyVCFyZXe9V67LCULgM",
  "key7": "iuwSwmfxjwJzfsYmrFDRSkycn5mGGXU3qAYVwtjccJ2kaVg7YVtWKS2PmrmZ3ysnyf9iCy3w8v3da4zKizZRBPp",
  "key8": "2hhwn3cCcUHt6XsddaSmFo9aSEcDZLjye8W5R6QRLAQB29GgjzgsvNk1sSLVSScyjbRMiqB8juVYxoooBxcpZKEt",
  "key9": "5zqBgEHiqpzeni94zfFf83nuA6U6jWrjV5yhE4tbz3nKa7krUFpo2cE5L1gMqT1eiTSpLVw1WiTzSQdiV3XqNisj",
  "key10": "4zyxS7ALWduT8aNabGTxmY6JKzrGNmdMZxJsfSC5HnDJz5tZKuCXnQSNHdpQP5HyKn6B4httfEAZyMSfrNL1c5Tm",
  "key11": "2y4jA99jSphiaL2qdepnBWXDHJKMwzJ2smiTaZTHjk6DXNLCbeamZ7xPpdYkvuu5LkTza2nAodgsoL6oD3rPstz9",
  "key12": "4oezaPhvc8dGXMspqHC7zRof24L3W9REqZakxhArAYAjLNssFP1PpYwP7vbK71nnAXqo3rpPe9dLZhgFm4BbkH4g",
  "key13": "2BCBfFzrR4VNo2SGyLeajWEJXU2RnZsmxxmTXV5g7gEAUnjazXtyu1qbQDaGBw9o1SWZbz1Dwwve2U66JTexDNj5",
  "key14": "2xCv4rR3F2ubCSd3Jg3MiXwdqi25dHprWk4obS5RC6uGi9cHasmh4W3SfQoxvGKnCbcXoMXjy2tRh7pW37kRucE4",
  "key15": "LksJHX23FgZhRC2Nj7Nfh6x3umTgfpdLDoz8i1CfY9SST2g64F9DP9EqgTEs35FvL71sW2HDErDHSbz9rW4UpGr",
  "key16": "vzqbmYbaUuvyUk83oVonvBCK2NcTtk9rYU21oAkJuXXeL91z62Vxjs3t6Q1SXF8N5wwe5axcDwzuknzNeThyaKW",
  "key17": "VFmd6XYvi2VS7bTo54w7nrPMuTYZBE2k3aGUAKjGdfDxUQoiXwBuLb9ZhkJaNf6i7vCrZs4ktzU1sijiKrShj76",
  "key18": "494tvsFTDRaH9yRQvR3SoG4JjR4BMPRCTwWNLH7hzWnRGAyGC9RftBZmE1kedUCfKPZvPt9jwZWm3nFybPfU43H5",
  "key19": "gkugMtsNGrF6n52eTv4LwV5xSCKmpQkicRDu4fSobJ3ckUBg8Rop9BcKqzbNpqeR4suTkdS3N9DKeSHibXGqeFS",
  "key20": "4xx5Jnm8m3aBzjcTEYEzjoJsEmAcaVi1DXjC8RBUVobpvLTNqsCDz83Xgi7qRd9GUybhskV8GUUqqWFkDLibqAwB",
  "key21": "3QP3Q2oFUEKDktzQogQwLeFgYDpB6Nuc2YJbN98EzZ3niranA75rqJb4PFw3qce1MZnVz9stqaq7SiHCL7JSEZvM",
  "key22": "2nbrBQPt3gxSSw6qgF4c1yAkcNSm9A7FKkiTpjdG8UN2G3vpqHcceLGgbeM7XhnpH9e3mqeaD2vnpJt72BkaakCx",
  "key23": "2aGMdAav58BBxZ7yhVmv7jVKbCPHPZWVeRzydjXaCuzmHRsdLNtaR4W1bNjayE5r7hdndcUYrhYueTLS9qy4FaYb",
  "key24": "5E4WhGzg6Dk6VHS4WmuU41K2qStW6h4HGuj2XCiyXYLyEpt1zHnUyf7QUjFkkXsusRCZrhxWD4f74AMPyv8MU2Z3",
  "key25": "7W4maEg7YCV2ecwSDkZgUUEorZhX6v6TatTbm1ntCJr5G9aPgDguh7j1Ezzq5YVH5tgEHgUVRgk9LYxZ4PbCbzS",
  "key26": "3AwU53f8mSpuXQGxsU6PQYrgYHapC75M7nG5VMmj51v7CWQhu7a9eA2eXGJPsm7cJzwhi9PjvZHBcydKABQpRCsz",
  "key27": "2rW4tG8Xcuf9AW745npWqLuhqsuUzSxjh3H5Ta9EJZawW1wUWNRUhRA4fW4D2CeZqBEjkScz74ppnGJtLt54vPtG",
  "key28": "61FR11PFrzyqEbKtEtVq25i6LJEuHEdkYMMyq6xdZx1DMM8g27xunDAgEBC3QbewTarB1XZ8KE6rkAXaJnXyUvXh",
  "key29": "YTnCLfFyUSAfKYXg8P8Vvr46o7K4KzQmwNpGgPbbzs9KTmPqwHrKhypMfZmgwBHdHjrRdByVLruGHzt2e6sM2un",
  "key30": "46HYsyLfftAGA574bihX78Jye9vu23Amaw9PAcJ9JPz5nUS3tBd49VBbV4HDSqBaRrzzpEKAKmkrf1Hb5GPvR8BY",
  "key31": "2yjABiNr1uiwn82fF8gh8paaNdkfVQy4UQFYTroHh5dQjwap6pHNUM1AnoeBfvFC1HWFPdnNvnP5Y4HrGjQApn21",
  "key32": "74eWcJsKAwfGQua45inuaowpGhd1VZwpdVvFh6EcSy37EJuGHdEaBL7HuxbfDRUNXUiaqVEkmmbzxkhQPeduSxD",
  "key33": "5GL2jpEU6zwivyiVzeum1CcdYnGZ9wvKngBKyPNoJRf9eKRjHrSs19V7u7GoFLeteDWqygM7Sk4ki1ettg6xa8EQ"
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
