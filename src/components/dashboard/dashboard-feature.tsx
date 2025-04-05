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
    "2JehMrZRBzrMSXcJWqJizrG9He4dshvwmk89X2m1zAssULK44Zcys2MEo3vVZ36W7G7CFQWh99cx1Q3aaPwiv5Lf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dGjhKrNuba4EXJkbKGcHQdpB37Xw9sQ1AmxbCc1wAnNbbYJiMw7ybtskaWjLnyrSbucnaMfVdvProUfP8FWbmzv",
  "key1": "5sq7L4Rzr3q6y5ZejYm6srXnNrsQ1FKYqVta9fWdAYX7HhpS1wBQgevASdn34mfE4J2rbUDLrYmm2yvnT3RmBTBB",
  "key2": "4pGP4qU75WxnfMaXdPwPhYkXVkau8DzcWFRHjZ9DvLqZy5m3VNcNiDULVtKHdF6igiRd92tAqAVKBKeCEc1vthZ5",
  "key3": "4dwiupUd1tWknare5cH8mGz6jPzrHWy2P9E9cwAW95LRXFtkw53fDhv24Vw4TcK8g24df4Gt3GrBGgdWcVzPm1Cb",
  "key4": "3txqTvfYeom44XvcPaM5gsnUc1gtM1KBk234jxxJNHer8as5ZUX6gnoEALcauqcRDEjaFuWYbATHvLJa3j38oSc7",
  "key5": "qDSz4YU2fhabuEzzbyyXvUxkYU2DWVZ2RvzmKykVTgrR5NJcxLffkTDxMPzGr4zxkpGSCMBsz3iPbTbdCRT9RhW",
  "key6": "3YaKLHgekpk1NL5hKHNFV1wp5cAA8Rt8e5EovTz4pd11eYVmkVqT9masC2HhUbKwrnqgm7NHD8wkX5HBhbYYhXom",
  "key7": "3zttobLXNFzv7qb85i2RFEmY4urc8YHh2K9bsSiXFjtCGMcZ4cEguZF4CJQ9iZqtF7TA5fpAX7ckGjogkmGzipBe",
  "key8": "3pPNSduMiR52RQaVq13x93g2wosYmZS5ovwTvJSL2EfwsBrYX51zhbKzzefQHF7voDsnBM1YgH95U6qW74iUmKv3",
  "key9": "4vpkQRoRvYdmxk9oN1NoMQFKeXmmxiRHpYN2YotCZscgDxyw7EifiW39SE2Pok5odZvhbk1nXovBH4x9ookra5pF",
  "key10": "3ZSyVavWcWZAEdQpmfRPsxa9Mx8smxd4b1P4hnuDiX1Qp235izWZM41LRSweQHD5yomSnNSnq8ABvuLWYgC5gLjL",
  "key11": "PC1cjfSxdAEojWKEhJkxpHRoK8sXM975V8TifVjGW75YfUKLV88rwWe8u9y7and6D176ExPGNEUY8TPUSuSpjzi",
  "key12": "CNnQMZJMVvfwQdwbydhckqJLdgQ3j7yGTcbz7SQ5hqrwDXoLXS8pUACs9TwS2o3Bqeur6iFybyV5YRBcuEEhpQE",
  "key13": "Q1sF9VgS4E1JyzhVkzpbWfJ9aUhVCHxX9GWcpKrzqDspt3RzNfHHsoQfmz8Vq869NfXHrDwifRTic3g5d5NkPMe",
  "key14": "5uTN1VLvFAQfrG3ebg3mnJw7ECi3PHbcC99AtrCTjTuix2vCLm39Gu35Xay89ruu4B7pnUaPvfNY6jZFX3HHdgRu",
  "key15": "5s4gHYHEWaGi2vetS4xDfYM539QTqEKvYedHUMwzCFb8D8fWqZaB8NBCbCrkS8Ye1hYrdHu3cz4nh9j2KPtNvYnf",
  "key16": "XXgy6TaanP3ZyehsP3Xea7kPgspTpJCqzjyYboB5jPot74VuGgtB9TNnDGAQpvvKL59SscZ8eEDGnv11uXyKJPL",
  "key17": "5W2SQvny7PFGQLo7BccVWrj2FQuj643mGagczGwMKLAEFALaTGiGq51XwLqbT9wHkqHJs4HaTaFDvPaLFh7fSAqc",
  "key18": "5FsLsSoJor4b7qGtf1QtC3SUkQz5aa1oedpMRXnJmVjzQ1FG3oaPATEqnMBbDGHBuSkvJ1MmtFsirRWn7fo8XN4",
  "key19": "3Y8tobDoHmPa58kWpVJajtZa5ShE5ypNW3Yfd36vSvW4rnd3PyLomHREogDTHJcipBgPQFarDCqPusEoBG4pDDoW",
  "key20": "2XPbi5rGRmhpGoFqtC1bzPgjCMQ2wnanMCgsa5wPPct7hLDWCrd3gMxfvR2o49XMD28eg1PSDbcUJ3yqN7bEzFJ1",
  "key21": "48257Ae6dKVEykuREuQQKACJBfQJ772cc8C7sTk7aupZvWw7YEvJQNCZHb4gnJ9qgDpMpdjzrXo6SDWzbK1vCQ16",
  "key22": "38fX36G9juCBCkPqfqokx8eFtPFSv1fMik1SgAoZCPWVxSDrhdR5p9y7bh2VHTvRgySo5yEeswdYdBeSHS1R14Y7",
  "key23": "4hxUDbgBRfUzmiqXo9baBxXcymdCALz3QiN4cezSfMa9UkBDDFpfaZKEiV39m7sHfPdfoXRmLrPNkmrdfmmgvT9H",
  "key24": "28L1KjnqBWxdjbcfeHW7TFtsPgoMeZeb6FRYT65Nv9zwPAJeyKDQ7opYCunYy2aUokxk64xijke2py8N5PEFYd86",
  "key25": "2Eohx8Lu9pWZwjXWxtc7adbwQL3XyuMQutKitXzciSFj1kGvvcwqgXNk8RMVucCowtfqUmi4HV8uDgJVrJda2psm",
  "key26": "3HAE3DgWDiGrA7UhCBqT8fi21y8pUXwFdo7bRpYaCv4w3h6RePXassszzpHzzJPC5CuxwRZZfbnE4avZ6Mkykjr2",
  "key27": "25Gn1sxZWR3C2ToSbB1bEnXhALuWMLk4B1DgsYevwtYeahAV4yHzuZ4YTP1Qqumb6pfzUQiUCWNic2A1TzCfXz3j",
  "key28": "5YoMdFTqDDjupSqC8tpyNdhMZ5ceaBkfPmkiptLiszMSQVbP4WANAkXLNy8a9jxRXj8uEjDTwW2H9X2netyiJBXm",
  "key29": "2a1ZKtztZhcRMFJ2JLX248E2u7bqnA6cfBgRVGPtn4Rghihuzfz5kgf6GpnV81ffjaKkEhSUR5zW2hFxy4odRFis"
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
