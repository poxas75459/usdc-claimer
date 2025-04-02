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
    "C3VhqreiZ1tcZCJwuC2EmxMCYhnJCNPn1VYEtqgkhjDjgysWCmeA4NsBXbCnS5NxQjbYtyxWGyLJ8AUEfs6FE9W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZyvmStgc95PjrbQHgcpr8oxWw1KoXyHpzWGeDo4ApRyhBLnJdCwgRPvTX5Cz2GnvfwuSfA85cz7c2vmAYQhpqk",
  "key1": "3vuACmDUiCpF9k9qvr7UqyVo79qgH4dBBCTZCaEQykZRBfppyFzzoNkptZhVoRcFesXWcJrmLyPBakzowHAm8r9n",
  "key2": "2Q76JasNJUtbHj1ys8ox8KPSuUeVceroS4Mp41XhUf7hHMod2MjnRtHMzghQjqgNy74Q1X21fLq1aVDb2MbCG8g8",
  "key3": "4XL97bVbYqmYJZdz6qN7qvkA7pkDYBEH6YfdKhprdbK26Cyc93724ZHmoTLev7WqA3FtqHZypGB2MYTju7d2EDTa",
  "key4": "5BAQjA6eLh3sfgoa2Ay2ALH1M133j3iyaijRCVmhPK3pyJCJqPi2rPyshGAn4FGRY8fC7Z2wb9HghNBPt81G4K14",
  "key5": "2BcDK35ZP6LDSPimNaqRAm5qrCmupSrrAV6ZqAdbNEKsuuyk5rLZTrvdBSg5EZD3f7CtYj4GfhNQUDJkuZKRPxdB",
  "key6": "5ycYvcJUXzQv9dAUSjn9gWdHjeiswZmRrsTwLK27zwo8Af68w3wBuCCBrYXt3btWo2Cg13HVJNKetHeyqE59fANr",
  "key7": "2V2wwcgc5LboCq5EtRcXqoHeD7c8Ez1iiNVY4Rh6HJ9yizumLzTi6yMDPFwH5rkL1jWaPiz6mcamkkFiYwGom7t9",
  "key8": "2dLuDGSprmD8AAffyoryy32jAim8MLpBzTmSqZkoEuS3qjMy1q4sEAqz3fTkki4f1ke6S5tEyiTGnSHR1ummTJFZ",
  "key9": "434ACBZhUMks5cgoXJEHhYiAkXBq4JE6RjfD6pCVptRUhLbhjjq16GQunJtmTMQdv9ZrRbXLuB2Cj5ASqgBgocVs",
  "key10": "MA3kzPQgby6LfW234vCCnrAa9LXGo26p6jSArAkMHrcMhNBEPQYRv6fAYbd3ZsDq7MsTLdXaYGLibtJjDjhwzim",
  "key11": "Nbfd7nX61Fowooeeezo2m2ziFwBqTNPDZ8nRbZFe1VNbBXPGW45Qs4tvVQvkViZe3oUaLt1E4mCwBLHFMQMPDKQ",
  "key12": "3rxtsF9LApcTZgxSajj1csaXv4SwwgbYKdevVNUtzHexeGSPis2j3i76Y24Qx8znMTX1VZ56rbUVZ2aiUVKAof6Z",
  "key13": "2TsNunkqwaw9JTMkcAJ7xC9XfRFcGmpNSmgsCEkmuLRH9iyabFxoq9Ezw9MLQxC62eFQHAjSHUzG7jYoQGifzScD",
  "key14": "fSoFyr6A4uPK5AG5RX2cDhqBE5E9xoM4Y5qG2NQ1swzcTRJsCWP1MQzu7vjSJqAbjRn83eEpLA3sGsNEorrwWTV",
  "key15": "45vdUEiNTZhKPaAdGMzTcWFWagdLzCELbMBfBN3uSFjm7pBJGhXHueFoFSKdZA655ueJkTxYnXojeFfJ5gGSBNXh",
  "key16": "4F3Mb88ZYX9LTCFGYMGXw99AFhGvRoehnshxqFMUFNruRfNNT231aLbgGeDysJBvEmYLZUgDKdhpQRaLNBYCBrt1",
  "key17": "54c74i5QdAAUxhATUw5mdjmzffim4z7GaGj6f2T3FhZVsTfec25KjtZA52csrcUC5As1ncHtVjDjhivGwXtmfi6J",
  "key18": "3Rwrp6oCJJAMujutbjkCc8ppTCv8jLPG1rWUZMwtjUZj8MvMweUbg5aMjNBWhdzMHGUrxa7wm31ajiVmiF7H7Ksf",
  "key19": "Fc8n69woARtvJukBuvFXUePu7jc3Dv1ode1FG5LiHt5qBBZcDEWC6qfPLrnJEBEbp3ZAhb6ZAhnXkQRuwWP4Uw9",
  "key20": "3LRQr3Vgw38YKi1RtXK8vN9AiLTS6u7bv7RSGWSNpZCS9oMp7fQzKmRowH9GBqYeBJH3BBPNVrHPxuiqspStTdpi",
  "key21": "3tKvXcv28e5inksjS9jp58Gzk7wmba3zoJzvFBWuoSPLvShA5XXegcbFm5if5xFHcBiyMdyVJhaUxigB3TQrrkP8",
  "key22": "wfzhDJrtKA3Gcmhgd5P2XKbFxdXeJUdDKi5xzGeVSWWeyDfXW1HaN9QcK9md74PJANqJX6YADSxwjPwDdytY4G1",
  "key23": "3Yfv1YTiyXdqyxuqvuoVyzLFiTZXBCva1PyrhAqd6h1BtYod25srZi5rnov13xmAkEBGKMHWudFU9FYnFUQyTE36",
  "key24": "3Q4h97L2uBuFnGs5JQ4kTzJS8zJJ3ri4MUYR3JRqKhoWMCcuhR4A7HGX3QXaQNQLEnteKxbr3rvkMdtyVXPtjdfJ",
  "key25": "4yHW5bCG95KHmsS9BzTQA6oKnkQemo7cHRmRjZeA8jdRdkPfYEsBppbgeyGAvsQx7dPEU7p89rzU93Y2ZqSTM7eZ",
  "key26": "62KSnGbSTvrudgoyxszMsgDr12gQkvh3UDRkVWSueAxkPH2ZN6m1HNJuqHetZhzrc9CcoiK2nrjZYFP4Uck1Gpcw",
  "key27": "KSdQ8RSnRBh7ZttDy2GgKUFyEnWo5xMHgn6R5rDrZ1PyVnfMqX8QULHUoGKAvAPvHqQ9pFEAgQ4wRhLx6ccvjsB",
  "key28": "4uFLrBQtto5S7dLRW2Sr3UkvoFaFvKqfqZVd1yUPfVRjXZWpCpBLVP6mEwaXvPmb721sZGiEuNjYZ2uQjxxkgsQS",
  "key29": "4zpQCfj1Qk98Kwphyosv1MnDNDMWEvb3ma2ts14fNsWTUWbV8eMCdK3PdDmzA65ewcaQUyXqtD4rTvYFQhJxvqUc",
  "key30": "4jtHCT2CE7xFno4WLV7oWuaGyvmgfUSLQmhKiWW3CG859ZKupFcMVECUXuS6N45C3DdUFtC7p7dhsMArPQwZmGB3",
  "key31": "44YUPvAqZR4zpaqS18aG6YaticVn6seGR48DuYGoqGj6WTypfnB9rzyZ71VSqCLQzr4ettUHtAY3jh5SCRiMyhpW",
  "key32": "uCnSMHQEkystgsDZCgXN2MMQzs3Nrv8JQuov1nhQJPNYidzJxwLjrJrcis9yPPZABUZaPmr2MUnvEzNVxbhAgtY",
  "key33": "k89VEB6ofv5Jy8b5Lc4DhtgMJS1CRiGQP18wFsuPbPzA5TH7WdPFTonBuKsebSBWHC4oStkZisCyn9ZiLJPHUm5",
  "key34": "4bWx3u2M9EMVmjrSkNNjNu7TMRDhYkS8pQgST2zpdb7kVNU593FmCm6TiUpx9ocyUdP5qp4nxDy2DcFMDiBoLy4i"
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
