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
    "m64dioZ7Z9uFEDhwjCrZhYREewAh6KhNqXL1ekR62bZfJ7Bb8v3gdx9BEpzTm2D7qf4G3HAYzwaFFQBBZnS6wqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gd2fiBDa6zWhfi1Q6H39LnhVfX7bEZaQgDPgaL2uwcxF1pfmuUrr5T6fmeEAyeKiV8554hPS99evnowkfAZyBtU",
  "key1": "5KppZwkXSmVfCaLxbSyvcEp1E3pE9hjeb74deGYHoa8bSVLdgigz8w7H1gvJ2aJShbcbojq1rtZ2NqaN4eCdXmmS",
  "key2": "3LHqAR6RjJFk38qkatu7BaeD2bBi1WVLPLTdKn4wgQ32ZQ5d1MTZ4iYWodZgVP6sa4iTMYndx7y25yq4FThKv8HL",
  "key3": "Z3vMwxkSEdMYoj6x5VQ67nzmNSJSB7TcLswbTevB7TJQnQGEX45thRsD113dmrZ1s3MwZsEhnvZFCXqtTDGs6oE",
  "key4": "3C1DFYhB8sWc5LVeLUxY9n7K6RQRScPZXWcSM2dRf5NBdZguVsEzf2G53mqLzRUeGCfmtuw14yPM98xpmfVj1bvS",
  "key5": "617GtyVyBufur3pFCEgH6Ed7FwJpEbkP1LScJTtZ2EeGH4oDyr1Eo3xnjHphr581YqT7yAqyt6jBHZaXECozP7BB",
  "key6": "5vwzzWETbf3gf6STWiVDGg2TmxvCc5k7c12Hf6JwaHaKyQkb4qwPbLr9ykd176VSdHtYeEhZAxHFusjfRCNA6YBu",
  "key7": "5HHczct8J347AZFD8SFBtRintg1KqzAChzg2LXBLaJgkkke8ra14Spd3VAzUqcTH8zrz6ya5JtpktjLZjBLYMcJM",
  "key8": "5nBWMqgswKCM4DqNMQmD1Dk28SQNmQzExHzuqavTbk9jEs1MWYvf14co3mhmU82QnKvADng8YekHkL3kriaXFA5i",
  "key9": "5rRTFsCQUoyFu4tUAv7XQb2AADKkki6kB4tDsjeGcdzMhgwVsmTQLUKGm7jtmC3FJwDbr1mwoKPuhrs5bN1yQ7M4",
  "key10": "3uaEH28jo6Cxj6dEFLNZPox1KkanXEvGgoxjSpRU5Uno21dxaaGGqPvMBn4Fq5FcfhUo7wtLAPfVV5LJDjkknhYp",
  "key11": "2L1SP565pZZ2L9umfb3nFWQqC4MRPWGh1HRob4D8F8t2ztxZDdCitCRh1k8GxxnP7amMJ3xAHhf5JFGDYgFXHv9a",
  "key12": "5qeaLE3YY1dN1AduoorfkHkHthXjR8rcZRz9ei1C6d35QA1x1oLre7iqCtBtesS2R3jAir19gxHzAyD7KbkHvFh",
  "key13": "31Kr6JoW3NAbgMvkmQ3onC3E6U6jEXWk6UbwW1vrxFxKvHXRh7F31LZUqMPihRXDpe9n1hv5q5UCRa4jyjMZWw7n",
  "key14": "8gWp8Ai5oHxqksEZ43tfSTNvmRgKGPsTcrjqppUbDb1eZCKXAUcUEpYoGxunh9y3jMSP1SZPGaqT5xMHeqtLTPB",
  "key15": "3Tgipfgyf7jdMej1AYVFFWPf84iemauimCPKu1njsWhV826M3A9LnURhhPMXXbGmFCFpQYH9U1C1oXUbqLkFphUw",
  "key16": "53PuBd9rTPbinFjR1UYiU2RRaVnDS9EwhRgwh6NhkJuyisQTDDnuwTP3Mo7H4vvQV8VZoagT6LLWHaGiuGshP2ff",
  "key17": "2ob37YhkQ6iqoaHcqXtKH1HjVM2gtrBjN7UgcPucYdorADw45ipJ7QGkZ3W1CHgYqXhr5iZACWSEmc6RLqSAwFBg",
  "key18": "2SujKrugDvpPC2173RJrR76m77VWeDoDhv58LDKwCfMkAhUqQXp8WTdMERs4FZoeX15MGocBgHPkAS7WD7tE5kYx",
  "key19": "33HnjZynmkFgvapTpoyErpQRuYDqt5zffzmP6tUZA2h2DCKUQETXwK5uoWu8jdhrePVpHb9uGQQX5TLskDZcAn3p",
  "key20": "7rgu6dxLD1eJ9Bq5gHbFNM2BCbvBzXnYY7cBe3v3XodhmBywUQiydgrNx77XfV1T9UNzqdv5ajHT7jWHGszu2vX",
  "key21": "TAQxZg8hdqnbhcqwj4FfSTNWzg7du7awHa1ovcRF4kSnfwZv1vLjCo4L3PgjGsyJ9jCi45JcxVxGkNeiD3EBKCp",
  "key22": "soXiueXiZogBCnvFXudR9VpHGArrpFvpn1EEPDLk21GL9wnMs6SHdP27HNvfwdZzg59vorsCdaghrtVv6iPbCPy",
  "key23": "TCSMfyS9QxJeF59nY7SANxHTdFMfvY1cobA2HwqUQWNphUo5TG48FfvfAUFT1aUgZC2hwuumb92LFMuqJQXqMuj",
  "key24": "hivbRLsvmqjt1FV1CwNWAyggTXqGBFSPgzYsWPrnt1RPQmauFQpYKwQGrTqHqa9tFEUYpxsHcqukNvGdBCRYh8i",
  "key25": "2oviZ4AjPnCytR6Vicq1kfvVdZwKq6gfQAVXGgmv94mT2Gr6vicnFP7JcbxM2LHFtBRMnn9GJyiFBr2y8udZGkEt",
  "key26": "3nV5bYta5KGRmzVbGpuyd1nnGDir1kbtoFWjKeXg8DDNk9nC6pcGz8dPFPMjrmLaBAqG9jUf15TEfzDusFMUBccg",
  "key27": "5Cn8SBsHbT9dGPFxZhJ77fQjWDE1EqfafDF3vLN5xQMKV7KsMzDquZP7zrfZE5KXPC1683yrEEGa7XDNDEBhfdQj",
  "key28": "5dtNw9BegdKNv9WDmM9nFQLVutJufDDkS8Y2ZrruX59rL1izfXZyc1HfTY4BPKuqP3BfBNjxMyPcArAo3D64oo2w",
  "key29": "2PPLd13oDcztrBRoqe9op2kDmCCAkkdZQCycLXh6bAtQZZjvPTxJ8Pbyt8XB2Kibm6zpwSoXnqu1VdE3MPdhifoV",
  "key30": "2ASw6XhhGQnBpYwDyqeYTv5Ef4Hg9Hxz1JJQDARvkPZUDoY3MdnyVAGHkxREgxgnYpoMYqcyAC8y9tywy1LoLjPt",
  "key31": "5Kp22BnxRR5R9FgmA1gSEj6ejfYjATBPt1xRwrV1ffiWoqRbho7eG6NqwtVXKzsxRj6gLyAedho1X3m2NeDYUdHk",
  "key32": "5FBGKuPHvpMcZ2rAEnTyzpXndGgY5fAS22ZryngkUbjMVLCdED23PYWuUXvSVHMaS9ZaFe9APXcwcDu5BELAcoTA",
  "key33": "Uuk1SvgCysQXdgcwvo3jAZMTWJaSyg8UnfqWwsVc61DM7rowkm7DNpSeDaad5SmN9dEpAhZUjKZVBfbdAVoboRK",
  "key34": "4xm8hHLVPVyEBuiryhhcd6hAvKnDJ1xTfY9F3HN2uyB5e4BHg3y6tQXPrP65YDqC3DLVXqc6yuscyWNz5DkxVJDn",
  "key35": "4R3qXDCZFiCQQshCQKEpepcJc4KxBa69J3YswsBNsVxvswYYR8HQ5QNdhAgwwRwwrqycVbY45TbxH66LeJruhJuD",
  "key36": "5vzhuyeKixUKmWnCUmmbddq4Eoxx9PVB3wtAVZ5V2tDie41JkGiD3K64DRhS2X8TodnZA7YEssAWVf85dV8B24qK"
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
