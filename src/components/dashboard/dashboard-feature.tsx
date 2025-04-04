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
    "61F1QvnHdShayQsUrtFNfSqD19D2ta24ANxP5EnRhJX96rg33AoQVmBppSMWgaYtKpaBijQZ1bwYrH5SrkkPwTG4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52aAAfNHvi8Hnzp4BNsPRDnMjApxc6jGqSjqbV24wgbfieUzbfK7NaJVJKiiHzp1isbuCrssSrMior22iKryE5dW",
  "key1": "UbqxPJimJ6gce2iraUpw3t268iqCSDFq9sPSzpffgDNG1Lopr26oJwyGXyakWCYb91mJaG3n2xZt8gJTF5Ai5S9",
  "key2": "TWqWBqdJz64R96MMiDoqfP6CK8Tmw6a1oFM4sbiy9TmMUDrVu9LZCBKv7Up876rqx8rKjs1bm6HYRhKaPuCvY4D",
  "key3": "25bhZwLzawCYMVaauHiEUFBKrm5E15RyRTZ6CVXENMcEBy3Hky1zZc2MantvbQzEWgfYsH9mEyNbT1XuUFYU75NJ",
  "key4": "2wF6tgDSdoka1p8vhMwmZjdcX4Y3JEPQyrwf3DHTVNWBrvxbBeC9F3hrRj6CX4N3UDjDFe8ECAW5jWY8yGGa5849",
  "key5": "3n2kPWHhtf2fDz142g1FwQFWnUL6n2JcRn2YswC4C2TgVb341Bc7UcYqX76EQ7QpzUtZyu8yb6rqytu6CwWETXis",
  "key6": "3mHShi67gK4jwYBFMinUDzZEbJYiNc5KS5K4XYt2ujs3kTgmLrCfYZh6tkjj4VAsU9ouwsz865DsCNnnVcLqVEn5",
  "key7": "46Ny81LTgtXtrNVnFXdvkcwKd4DgD4bN93SPwNcs2Aq6jjxBEr9Gpza2sSsFhjUFXhoRisy7h6cLL8D7mWhrzHMK",
  "key8": "uij43UpVRFqQzg4Pu6ZTJ9nJiixY7BPYo1h6qhyjR86i6ZhvSmGnZMyZSy5BJoMD48K31Tbx9RUUXX4EW6K5XHv",
  "key9": "2sN9vsznEbfFWC37Ui2CpbLyYxhX7CCR8fAvLM6nvhA4QsHDYAXZasCKL3JuJ2xNJ5jY4EBqyXf4BcyZWMT17d7u",
  "key10": "397UmWYU3DtRiJHyc4hz1h6na55JTBRq75JLSnNF1KAVFanzrwx1BVwTJ2wrfnFNjsbkudrFGeECRAwrV7CbFNYA",
  "key11": "3FhfRngWJ6aRxUv5and51AYdjbqAPEtiZwpmjbxB5MRQ9YGLzWf7jM9r5ccSdfr4Yb17TgP5GQ4yGApQtbp48nKz",
  "key12": "4LBQoMpaKoyHycVtZeVYH7GneT6okCyTg865AQdDQnRkgxaFK7G4wJy7jFQ4MmZZ1CMKTASMGRMnLwKwR9YCF9Ry",
  "key13": "c71zkHVhjPf2MhcDTL91yzjCvJJFTjARYmG5jMRGXNQX66SJCxQFtNonj7i6UfmVkPRNDWNm6vC6sBFenHeyW63",
  "key14": "epGjG4NVwL7T5KKcbdtD9fwZpHN7YEVNHn96wi5TUkocfi2ycKK1yu4JWhx6DGFB84xPrStp4zPs4bMukBZ4kmm",
  "key15": "5zcHGviY7QT8eSXyGxpgxu85c3vn2fDg3ZVViP9FLBpQFGsiAc983iSZKrYQRorTV8BRZh9MGWkPvREhxZLswduR",
  "key16": "8Sf4zrZyfUH2oQj8ayNfETtRpePBhakeqjVdJazd6ZFCZNqCtEn6oBczBadfJ1qUezUaSGGSUskos1BQFj2sDsL",
  "key17": "5xLwtkDqD71HxzYNqGnc1jpKcCRRcFKcXYvN4fW3Tw7V1zwHkT7rGSpDqrfLDktHUPYjthpBgih25WCNkyF7tszS",
  "key18": "53UGYszE2YcQWpx6dpLNHFSQeJoG6ESNesAeSpEEHDjQKxs6nRiN8JzbgmjPTcwE6YvkaajMW7Uu8bkuergpyyKR",
  "key19": "5axRUCjiUpR8J4t5kCdVD1BqR12MJ4HYMeRdhxqzGBzGSAb4ffrNYArAtMLXmv4MbUMkfAHvFojRWDnkaDRCQiTc",
  "key20": "tDwMGYMRAFJBaT2KQJhs3dZWsgoP6WprinVgBug1HG8UwTjugCZxmuS5CPFkA9A1eWt8ybyz6owuAbmuazFHwNT",
  "key21": "5iYLyh4DzDYZ83KMTQpUnvyTzLBMWmf7mU24h5Qyswf535onwcQkrVyyjeZpEKUebu8v6513we5gc52j1jZGhLvj",
  "key22": "3EP7Cf6ApfakR85vJWmK6cXtXAifToCdkoyy2ZYGBA4mwJLAAF2HZ9UApU6ESECN3unNd2me7JNSGW7JnjP7euKu",
  "key23": "3A2V82h65pJC1DHgMoet65wYv9DEjXDM2B8dKaoMWxgrJ8CCGUDKJUEJBN5PmMvYC999VyRCu9Ndqc94MocY9TPe",
  "key24": "3wyAKnGkhkJxdGS1CcM144AnL1gFNzy8EKuwArZsTrTRXuCtbrkj2VAuJLV2z5KQtHrtrvhN3Q71Jg5cPMsiSVLV",
  "key25": "3eyBv9vSrwaQ4WvQPkbpHTNtwoNNBmEN5jT23ETCh4182H44GG6iahPWXa9ZBovpQMMqfCWBA15mQrm52YhDha6r",
  "key26": "3gTUA3NiN9FYy37JdQPJby4GmQSaRCn8xmLn8RRMdNKb4gEe1bxHxP3wzwK6sCBciWEK8LBviZ8xZAXMDg2FWPfx",
  "key27": "37k92exEbg8FGmKgdVAedZm34bLCRj52qem5FH9dtTb1aw29WKN3HfiQx8NooFjvcxVv6LNFzchKfbBwtZXd4x6v",
  "key28": "3WRTvgJR1QFBieMjAbEbguQBrhFUmVew8RGvjjHLG41BdJPS2MhCN6LfhgoR3cgc9c1ecQgpeCzsZ6b9f5GJWXfZ",
  "key29": "5yixJuoPUSgRDCDR2AQsVCh2zNFG8eqFKiBMcqmWBHXSguAKEfYMARXe7MfQFNAzquxhGcgyZxyVc8sQTaXb9w9q",
  "key30": "2rE6peS1XLHALrEfVfvnRcBu5SBhoQudfQHL19dkwo15ivZgEkDYoZmk3q2P63p5zV5jZgk54tsQiahvrpmRFPQH"
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
