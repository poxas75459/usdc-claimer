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
    "cNkCiZzvefyf8fBxSv55vNBWNhjGWGrtxjYZXVTHeZVEkM8XhoaMpAbF4uVpZwpkTBsuAihuwRne4YtpEAkjaAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZBnAswyaJePxjQ3fwrHkFeAXDqbTpFcALyNjqYz4Y3schPfETRbLh4SJPui7CycmeqVUZZaooq41BN9X7uZtKqm",
  "key1": "51obcuuGSbatf84CtbJF4ZLyb7sRH2z7TEAxM6nAqLrA5HrtkXXGmQXcEQf9j5aoPNmg5YBiJZo3bU4y2SWNSKwa",
  "key2": "4d6b2ocUF7uhTgrw63r49hcXbdgtVMQZvuj4sm1batE4Cce24sxmrGhtP2sPPLAQMqAHL9p56HMbCvVrFohUsnvE",
  "key3": "3oR1gkSnBt4XtyeFBsk4jyBprRYem415EDho27kwuKt4Pfyq4aZ1KG4XDtH649AFctopUJmTR5AXKKzzYUi1hT5s",
  "key4": "25SnE33uLnkSkfQDPUPcb6wZXnYo8PsKng2ea3Siyza4PnChYuSdvQCsyhTKjBUVEbAArV9wUhyaSjxc1M5oSSp8",
  "key5": "5PDkvydvcKCb5xAbXcm1x1cHQKzMMqJs8N56NMw22ND7B7ugkSLzrYyFLeDwgaXbt4F4XkPEumVxL12B42q6Gmbo",
  "key6": "hY5bm2Jh4ToVWW3gCrCyN3knrFsz9jCcAf39ujQxUUCqy7YXpnkgeJ8DWSjcaJcgpu5KWxDYp1VZ5FHMibcBb9k",
  "key7": "2FnSMumRC65iG4DEjQCkE6aCyUTYh2YuB1LSoMuso6utHAdXNTThqa8KPVT3AyhexWAZjAHuodBxbt2uVwCbHNfG",
  "key8": "5J8BXFWbM7veaG88KLYk55oSmmHWC3T2BK5ohCWybj4nn6RX8wgscxXxjbxNeRfMd6JfKoYbehwZzqKxX4bA1uqp",
  "key9": "2H72Wa6FDTiJXLKXZ58xBSpdymBJDxZDeJc6VHtCukntrAhFwKtvvSw1xyubXdwGv4g1FermwdSxchozqT54pUXa",
  "key10": "4B5Lw27XxeFWU4f7PmxEDkJUxPAvw9XoVeuaX9bwjGDp42CoKzh8Fdw9o1pQYGB4m8wQiy2brnCoVZZvZot2HXxh",
  "key11": "2J1CeiLce6TZV9QYEvNJFoM2fHwHLoDYKHmg9oXhXqy1xkjzzZmizJHigXp35fH7Zouzjvh8n64w91VRdhpRMSz3",
  "key12": "3MgNeSH2er86pLU3iwjMkacsLAV7hScGzXCaniMSegKwxDtwrchKnAqFBApD93cjkLJFPbRwpqQacKxAE5MwEQBu",
  "key13": "5yZei3VNNYYVxTnaL7go8xTiMvXwp4ivDSiTKWpCFwBHMuwcHSZxWJeWS5phWxm3eTVyRedso8EFvJNabbqfG3kH",
  "key14": "2LbPucMkJkJAa7Psg4azg3WsZN2xFyQ2nyc93ggxAGQ2mUGtjqTRh9gFbHdnGcb7bFAwqnMKXnAAwtFC2yVXdhHd",
  "key15": "iDG359huNZVRg2qdLvVbdarEg4ZeNK7v9xDTjDPZxtoyJQ8Hb1PqB7vKaE2RLbENUxdQr8YojYMaF5cpubrFUUK",
  "key16": "3afdvo7uGyFL9En8YNT2YfuYRMU8UQjTvcswJqWPawdPK1FTCqpTkHmes8vw15URPn6r6Z9anmqMvdApttnAFra9",
  "key17": "5YyakHCyJNX4G34tU2YnWyS6ukB4ETfBKFBycnFYMUhmecpbgWr1LhGg3nHviD8F1KkuoYca9UNnJtuRcfSgnCXC",
  "key18": "5vfUQosZ441neJdtAWY2Ht2jhsS3hE1kvyMTLTgzsTphnzo1Lf3shYP5rNhBYyXgc3VTbomSUMvt7zz42Rhj6eq",
  "key19": "4hKYHaDqnZRE6XE7M8J3gQi5UrzJJYQQbXBXtvJzKTzLjUputaLp16ePGzQ66VXTKJuM7grn3vsiUwUAoztG9twg",
  "key20": "MyehSgY3KRjvm7AAQgjVkeV3pytKCYprSY5kGFLhXYvf2SEWwSdaUp2GuT91D7HLcnUwYHDTwfUCdTHWWbsnBGo",
  "key21": "3HNP4m7t3TKM8q23HGUF9XeKQCNZTp7ZsRzCTGhmSZ3R1dMddbPCV7D716wnzsjrfLMbeoj7hnFXBpHLFDqL1qMP",
  "key22": "CANSJyAG2U4Rx2FyZFFGahqSuv2Zwasw4XSvcrHEsqB31bpTJdRnWwZ1AdTFHrLwzqwXc1fnfJzoM4LvgEMeSZA",
  "key23": "58QYnRPTYA1rziGifNP33byngDFbHttCWdrzvzT3X9dJAmVUz5cQVnpARE44vCG4M42rNhwX1Zknkn2Hu59yEjaL",
  "key24": "2UZ9cp7KWaEQc2DL79RxE8CEQmrKbMJkzr2RfxQrQR6BHZHH3oYWbvHbajfhkL1kK87dXGhyostPMbwmGEUo34pW",
  "key25": "2vpdqBJ43GuibGtQaMsCgYWPCkY2E2ix55MFMYCEgkiRkPEbVYGaAjmdA2YhJLxT59CtCUzhRB6uMvz2AgE1wQia",
  "key26": "4csLpLKJpbAij5zkmixCQxVqis8e4dbqB5Gwnqkid6UokyxjrnEaNMJ59kt2N7AAG5WygTpE1MpXk3eAu8Yzg731",
  "key27": "JTMjr2XTixHq6jopccdo2SrBCMwCwdrvgmLeb1gZGaSFeNj4Yo1yWrihwiT9Yxxr8tH6SaD6GzUWpC8ArB3Dvih",
  "key28": "4fzSkKTsHoG5nWHX5WN4pTgovbWtkLPA51ua5gnpjdFH65h8J4CKP6HH4o1fpzeBvEcrvUTb6WFuUw8i3UCWV7ep",
  "key29": "A2JZRg9M2m61n7ESuaJvkrmFG6mu8XjY21QfadA6KkRg4uyZ3GySkWsEeVSz7sHtYaSuL616mfW55JnxrvUWEGk",
  "key30": "FpXpQxdQbojFTpGM4XBEfdTdQte3cpwwwkzB4xuCUUCnJMTFqVVnStUCe56BanMBhyCPA3HtQXwi1WVcjfuFUp7",
  "key31": "4hLzbsz3e1y3nnVb6G1VVTHLdipwYsjxDfEN6jT18Ef5Ffbg5khJLNrAMELgvFKAj2cQUwEkERYYbFvAiVbRruMH"
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
