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
    "37Vaer1LdGpfSjwejttP5uw1cWn3wamsj1B9tA6vVV3PauKQeK1uDPPpVNXvbkRanMuspND7yghVVUE6cHGng5F3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rqayuApToccf4ZQg6zguPMViVYtpAo1bGJc8oHsMos7iAS9VA6bqM8HqVLqokecV2PYX25Mk3QgxDM5ktt5M6Mm",
  "key1": "3j1Etcpza8ZdE97utt2wnfgxFBHdSs2VGa66niLyovwboDsz8BjJ6xLZ9g8wb31NfjVn8dmftzbkzBx1vzfYCouv",
  "key2": "Zuy3S76CN5ZRKbUGTCRnN2mG7Y6Lnx1E5aEf8pjb8Lu3cvjpzR3TbUmeGVXEUNVsU12LCxXzRWgvg8zcSEd6rSu",
  "key3": "4zMCxmrjuBjFmNurDGRzR8rxgQ84opXE5PLF2oHtaUSPpPm8gVssC5v242WxEoSRaVbqFQZ1sdBxTMSfN3ovbis7",
  "key4": "5nQAVwhX6pgDYAgdh2BM6vBpLqwsgR88cgEpZD2kUwnzAvm5QA7i9cseVeUryzRLMLnT8ZxGd1eDMTVYgjEd2FFU",
  "key5": "2GfAoyQjfKK8QJQfT8ZauyTUxSUFCqAsZ6rmqnizyhF21xTUpzEcuHaTEieKZ3kQuqorGm7t3jgUa375kwJoSAUt",
  "key6": "2id2Qcgvj4PWCWzJkR5wd1UEgnqnzzkrTV4rT8PU3nYYbgh8HYPYXVQUvuefHkpEetm4nbtzQgbsG7488W9BPnJ3",
  "key7": "kc8ukPQhdfpuXFkxwFNV9hvNCjuZgGu68LarhsLU2FXKitps7wfTXxE9DM4fjob6gRn9NzdrSDsYjVwLLjE1MJs",
  "key8": "4waHJjMYByhqxxo7gXzBEzVaYft95bg4q9WnPxVJTrb7NGNP4dQmTPxEp56KrHfbGUUb4XhYQsBiuMRBHjoMWFdV",
  "key9": "CMDtVD5BfdNKosbsjMdzR4mTf3hiD7n3K4wYm6qnBbJJDM1ejGdnsFCbEz6spfQKod4TYLfxj6Jtt6tkGuJuXTa",
  "key10": "2fi7cPNTMxuzSUDndJ5nCyw4eEgjn8P6LLGPmLX5xDNjHSDssc72EBomLg2AjYdLerjbfK3aJnACaZXLqNBaHeiD",
  "key11": "3PpHyYv6i2GuaB7au3LtvvXVp4Te1HMdY3fiV1tBRsQ3UPdHMTUnGS2oz4TDVfLonWAfTg3EhzA4pHFX2whZfbxL",
  "key12": "4xZhzESedtfg1aZjX2dGNqtzfCbTcUq6hunmnkQcmZw22Np8e7S9tP9diqBGwEbuxUDh3ecCXBm8ydEPFS48tBvk",
  "key13": "4d8WJTDqpgdoxqbXJkbwJroxCCeN9hi1GLtv7FRUKtdoMVUURcGPkP2m3ALDtypnoPq52NYkmioaDyPZKWJ4VxDm",
  "key14": "54QXoZJ1S8QrPJk8WUUzZJm5UcyYH7QSX23Hi1A8DXA7WLWj9Ck53fi6z4Zobe78FL3abEUnCk8AoHw4Tp8hLNA3",
  "key15": "UL3NUAaAbWYs9vrNbL1sAxSyYNADFWSC5RBiUB14jiyPJVQ9Fz2BDyGXtyAQ7RjPfqaiGuc7fUW7S2gYKdRQNHK",
  "key16": "46gQLP7e7YRQBgCwyhXbgqQSSkDtot4j43BSVUbAbwsckje2iuMW8sw8NaidrScwXeQMF7Y4hT2V1UAnyJi8Dkx1",
  "key17": "41y8jbx8X7qpq9YvCJ3m4XDeNKy8WE1DWD6UrjAFDo6vqG8ZPNqsx49qYj3BrQLPGUn6FPu3hNwFncrR3uuGCUHy",
  "key18": "46ZXy91n5qzZVCquFUHTJfr28Gb234ELuSvEnAN1TM4WCoF6PyMrtEFX4sFMis2wMrrAdQsmR1ktZywwfEJq1acc",
  "key19": "58ZctTM7J4G6DcBJvcFkW3VUeAhRaQ73XRutPxLfoC7D2CecgKkYT5EpeHAc1c4mrTFQTb68ihLvMqjZ6WtTtRwJ",
  "key20": "EHVfArMAmjA9G4uesga9uXTuQAnYtNBD1dTRENPLECKoNHKiXvjEyk28qRgHbGWQ4JgdaRofmavEafRFoahcmkq",
  "key21": "2znc9GR6Zy398HxXvj8Pb1yfXHYpuKyxvVNhxU6PjewhTev6XmemrTkttGZudojgQBHtCtitHQBD4piG8Dv73a67",
  "key22": "4LwZ5Mokf63j67DZf8BotCZEZSXgyWZHHqd4mVNMDpJ9panUzumE9KVR9g2qgsRgLKAbrEsxPcBXBgKotLbVVsWk",
  "key23": "sqk6XXJUza1XY3EACau1fnLyvQJXoYFPi2hkBivGRambeXELrQRgRwFNc73YUbN1sWggpPqCrWVBLzhf8x9Lo2N",
  "key24": "44SaQju93PCBHFdsRWacGiTcoQJhormsUms9W44LZZfWcSATArwGamNF7UnnYviLVReVuTG34PUPDp67aCzpCkGp",
  "key25": "4yrseRbdHSS3yQSrFAND8mXKJwNH5xFKCjhrYw1GGi3iMaQXAa7WNJbqvqv3pdLokx9FG5njAqHYyRhbpVaKHFNi",
  "key26": "5wVbzVxxPhFGJZ9Dcqe42FvfMWFiuG13ftnascNJ4SSLTZykTRRnsY3FR5yNW6KCNAGCbeihDLDC98TftzMnmYJj",
  "key27": "67imZJL9xKTKZS2epbyNKdVBnW2dbBE1scyn29QMUB2LdooGnDCWdtpTwjFW9rDj42zNgJuFviJZc7c55JV78Xni",
  "key28": "5oMnVkTt18G2AFsMJhUB1RMqkwi8sDH8EuvGaj6SxheSU33DzMTJDTAQaMqiR7ptjoaAvmHWY5bQVyuPLbbJrBVN",
  "key29": "12ABmVTouNsbyRfadQjfpsGmhy5h5qDaHrFg2G9LvqAN31v8dVbVsmjUtX4RmpzXNjuYU48knq4rDKz4SNCseBde"
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
