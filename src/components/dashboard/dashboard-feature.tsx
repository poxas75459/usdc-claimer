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
    "2iqexZyZk4v7SnyMvY2dySs4nTwCYrpmipnVreHm1NDm66TzNJKnbsEi1aornSfFqMD8rqJygVLCqWj1FZrcGc61"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fD5KgHhb8XvfGsvqZ3pvG9k7K4JRiHTB9b48qTvDghQHVD39akJ98iS16aUvm31rf2XyCemmyS8Adg93AMo6Ppe",
  "key1": "dHeFiYe6y6mzmue4UDgf1HQDYVCRWoQzgzH2unoxiGqxZkL2Ds4Y2PGrC86zshAN7WxKQCbmutBgynPd8d3Y9ic",
  "key2": "2Y4Bek5pK6tUfJDUttPxepekDFP24vnkEnBfz3ZEwmKeX2YWNrqUWFjxdx74ceL6AqSYqTULCoi7hNtc82BKAccR",
  "key3": "3d3XvuoQhKs5Pb8PESVDTnjq2RB23gbXGcM1YFFE93TyhFjoahNNdDN3WutBEttf3T7UbKmTnskyUpoRKjULM3AG",
  "key4": "45GEJk3ukvZMEJ7oJAGvod7RTGYBdPCdnhLuDVQdzfXA1EkuFbgYMdKePmQESQqNzHoEK6v4QvZYrHReNA4QGF1i",
  "key5": "5Z4YqB6WtbMYWXm1dTpMqw68yM9Nn1ZUcrmAcfzA4gzbg1iCMbkSD3hP5oN6iMzDm8CfrzCpRoYgC2nYgYTkTS2W",
  "key6": "X31yqiVv8kDvWYB7CeCwo1FyHy2hGyMd12X8r8sQRQrvd4MNbZmWJKoMCGzyh4trtTLsGL67oaS1jK3mifGK9eV",
  "key7": "3yha3wksBnoySsHDWjHFkWYcVYgiYqs5JYGYYTZuDAtPVzHkNxf2nCY2pAhDvB57XG9639HfcRkkD6U9RwhjQGCr",
  "key8": "378W2DspU3WeM57LUW6qeDTHUXvvem2vSW3jRe5jBEXJyhrJLarmutwSjAtseuvXRkptysShFeJ4tvT4Ec7fgaSu",
  "key9": "AxjjQC9Mi8UFUADBvXCFTKZyHiA4CLXaBDeCnkHZ8uoYRxwQ51ncVouMWgDEDyEzm9r6c7MXAg74zkUu57GUamc",
  "key10": "4Zc4oQTteWyEE67HJhA1yHsks97SbgBBet47Lfy4BBVmtpnY8gT3HJFR9NoxotVU9dFETZNnQPUdCEZqPyCBb2kB",
  "key11": "5psPi8KV1JYJXAEV9Rsi7QEfLjde9xgNkm3mtM59hUvg3cHckx34FWZGWpgnEeA6tKLJdpyP2b45G77Y34cZcksW",
  "key12": "59bHmwAytA2KcTfEGPcFB7BFpW5vKhSzFgN8oGbvxzvEqLo35YSkgUmQ4NDsiVJQqFfnMSSrSXDyXKLZLCktRDAy",
  "key13": "36Revdvo2Hr9QG2FZFVUDThiNWWXXqkwiFVDAViCEEnHF8c4u6yaytXf1LaVhncBZmuDgq7SknCy89MQHeNMfCTc",
  "key14": "5S9sCf7Lob2jnBbiVMz5ikt5vA8hArifwgDobbwbjF5xJaxStpsaSY4VAVfRD2NC2mjLm2XGgthuvraQbbovYpo9",
  "key15": "3QtCSGN4fhxiezgnyZmcEiE8X2jGpvUewFVe6qAb2bNkZ4EJrSNcwDm2ka5YrFeJengr1pMD7iSj1LaZDWzNHzQD",
  "key16": "3LW45skkUDB3L6L4gngu23dGb4fYfCxx59XsDdbasnAgeRLU7PeCmzw4reRio3p8KoEx9QaY5TexZPfYNCL5vqcC",
  "key17": "gHhqFi5ESoQGtUeA3Kw2vV9EN5UUFzRdg79N7ZcCg76H1gTzN69fLttYAA2ZMieH1pKjpu5rUz3HqbemCStaQ5v",
  "key18": "3ZKW4DpZVRxYcofoQxKrXdc8cgifLKyM8Gy1GZLqhCr8gNrhNz29dgWFwapEkJ1hrqXmHoKt5zCz76aRmpXFdvaY",
  "key19": "5zLVX4L9UkFeL7fYsMzu7gamLEUTLH434RX9nDoN54tV4cYGfUodxkjJQ461aRbYEjWSCK4ziqG1TfTjWsDgkLJ7",
  "key20": "2WaDZapHZRjdtPpvBmD9qNNAN15DnTcTBh1zza6FqQN3QhZeJ7hKj75qjEWYCZ1qg2EryJhdZt3z4jYTPzMe829M",
  "key21": "2NZVchgurwqJqVPcEVmVnBjP2m9831s3D4K5GGp4AWcoMMhsBZGoUe2W6gYerf4Z7L47Upto9F3S8xy5A5nwFdbv",
  "key22": "26dJ9eAWLbUJopTpuy3QR8DwNodZXa7Nq1Xk16WPNQmNSKdjvcfbAhRRhUguJ1goKavZkuyc7j19xTdPdVwX2Byw",
  "key23": "51QcNvZWDHz3VWJ93JR74w1utPjYGAZZVAC43a5qPNt5JzTYYvbF2qeP1xBBGw1SrypskqamdygFeuGGWUjfA3e4",
  "key24": "2x9xCAHKNKzQ4pYwrMdg1SdJwuurKNWjr6CYBD2jaMNMnkgeyVqbbU4kNHtHShpTof6dNLiD5qAVpkKajTx3NUQP",
  "key25": "3mGoLb238Yi7NEHfUU4XFsD6SJzPdok421zoMifGnmibYS86snuLP4Y6eE8AEQWHx6yNHq48K3tN7hKnd2BqdS8u",
  "key26": "3hFfi4sEESoePKhRKGD77riBYpdExmSCufdimH81D1MXpcB6cJsiJL8TYgmimjjagCYSPGJUNUDJukVcFQHDxziT",
  "key27": "3D5YjurSoVjWH9uUPrDpoLibLGZfw38LAm7fpGaPogbFYHqR1n9PF5EH7JjyBszEQdwVuTKWLs3DCwMBgtM92hZi",
  "key28": "4UBjfmTc3FNSx6z8NKE9yUzD4EzUXwjYxCcuVAnTb7AntaSeXYvtTCR7vJuwZQ2aJi72F51vGgmvWMANJhHme8QY",
  "key29": "2n9hMVni45fep7vEEGZvSCewuD5gSAjKh9knrtE3zv4WZbaMBVrFEfyAjJuBcXqY8h6YxCwhT7HDNMjHmN8yg5yh",
  "key30": "4daaZkWxtJAqDnkHWVD744AdohNENukL1f1Ga3ZoZc3GAQqQsRWBMUQkG6rzRnkePCRa8SrRv2rT4ei2d73nENRJ",
  "key31": "2V3TU86MxsKpSsfFguRGxxGkxmCHCMnbNRmwM65rMjRwzuXv57nmzhYMZLdiApbCbHxmd27MW31ihAXnKXiBDPf9",
  "key32": "66XJFmu9ygf77tjiGgA9pHYZZLe6147wDejZSHrx2wQ3oibsff9dDPHayyGRcRxoDhxdefTyz66XnVQU6BbXZXfT"
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
