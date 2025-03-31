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
    "3MS79Jws6mh5sPx8utNAauNFQGbf3AYCW6uC9k7Hf8aJLobY2Ug1G3dyWdP5MQGdmtbmni2CAYe6F4kvjHCowgdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38MujS5h4542zZgtf2SLx7nQqRTmr86zxSiKS6nnYf7hYHWtokTRfrXKgu8Pqghdhh4rLranR6J95kCmd9co2jN3",
  "key1": "2itt8ZgyqqqQ7DZ79k2Ec74t9eisEXZ5w3zdXxenhC7F77TRn34ZgpFfXw86fpSNxjxc7WaBiHLez3ngUf3t7aTN",
  "key2": "382dSM32QEas9tWZYYXT6FgYj5GKELTwoLaLuHFDXUt4YUZdyvJDxDpeqfTWxWDhCKJeXUNh73eQRbdAfAX5f6Vd",
  "key3": "47Z32tocbVA1HFA2RTrEJRkRErCoRtAsdUJ9Um4Cm5WUpamH77vn7y8dcLpsMZhsfzezDGsSKX1prMTFxSw4aeoP",
  "key4": "N1LGJ3QD8XTubdmZR1SE4kYBzDXESK2byV8FAJuxaFzk3PDQ6czezAzSVGcZ3sQgyuRvyjSxu57DhrgL5gquzMj",
  "key5": "55JrdgqHhmm2wFdBp2eQprVHwpJQMBiLStyQtMPYpx9ZwhKjUhxakEd7zPKqdstFr5YGVkUFL2YzJqawGVDAgs1Q",
  "key6": "3YzvY7tySDtufhG4oKqGDKHz1rWRTc3zuhdzRqFRdq9vd4jusQkvfAfJAVjvjfNWtPDqDBsen5VKjBj1zrrpRLRL",
  "key7": "5K3MgftUPpMSruaK4Uf2t28YH9douv7Q9MepsX1BkbLYRHknzwz3NB65mRqPqH26naYm8cST6Sn85tCgUS2KrZ1x",
  "key8": "4H2yK4ZdtpF8PeNYzWrMAk44LvaSLS8sr6hnKLX4RtQh9aZDBwWqj6fGdt53RyZppKk7BzArjKUbVJfSb27N6Bv1",
  "key9": "45buUu9GeJDu5A3BMbqwqP9n4jLJ1SvnhGqwKwZahZjMBniXs1NRJvFnoXccbBDdke9Hd8L6uB6gUh4SRcLEwBmq",
  "key10": "5NDmdxyVyayqFnRxZRA4PHFW6j5UynjSjSPctNPcS85kvUf9a1sSj94bya2ZNDQZkRL8Bb9HtUVtmZh3DKpR5RZW",
  "key11": "4P4HPoztX5FEVWRvcjKGkvdYWPM2BkzfnUdd6YNUaCCmPQdxoNgdAPt21FAQiztGFmiYwETcLF27oYmSeB7oh3nc",
  "key12": "53SarxTCJZp5HuzRzdgTRq7xFDh9Y6xi6EFagGr9F5QQ9wouH3PjnLLBWesa6enNhxJRNRL1cTome3wudTgjRfoE",
  "key13": "3Gi8LjRjmme3Y8L2MD67hJoRTTntv7w2Sgrob7exNLUrW1xNEiYQG5QvaE4bQvbBz8Re8rdmikYGG5dwYvaxNuKr",
  "key14": "38p2wQrAHa4nFRNAsSYzSgvGADAG9kkZ6tUTCsR8eYdxWijQRBNbqZzz2pAUcP37pFxpaJ9HUTbbrAtwLfgbCnn",
  "key15": "5d5HBsSJmTNAYn8dpVuye2artqYLTWiuuYcajPPbJGErYWrMov5YGx8r7taRPv3c9C3tPV3UoRQBVs6Jo7MB6qKN",
  "key16": "4d4VQhZH3QVnAc7GvNuzj4NdRXFPur5PDbZfTQvr3SfKGCahV1jyrUsVnihD9GmP2neV9JbwcgyuZKnqYrhLM1tH",
  "key17": "43gaqXBoa3Vj2GET2ZofLokYGnidxkdX1ATWMVJGV3yCuNEwftmk8oJtzhmky4KwLx3o3KSkV9Sfp3suEkSoUWsu",
  "key18": "2iEEYK4bQ4daZyJu6GuY9pDLaGxPKKGtB35DPDpT8uEd3uQoDbu4jAg7pg8DLScM4wyMoxbd5jizGyqdhq1mKeem",
  "key19": "2LcG1snMwqHcSLGcq3AULzcB8YKyCQqWkaS7rZMUkMZek57XgZPCjriVTMw67JZ55h2sG7cmQSs5jnsaM3Jztw1C",
  "key20": "2Ciyz1q7agC2KKqok9bDKKwVjBEjXPHSpG4jM6h8QTvbpkt2bKFCn1kBDed6RubGt1GkyDbQ5DQUL16WSrB8rDZp",
  "key21": "3HjukCurJTKYQToxDj59tSWRW1MdizKdaihRZEGeGbcVoSFZ8iSen75iniWZnHiGcUcJsE5HTfeqdTee7hyocD61",
  "key22": "3yobUsQyxNSUVzJfb2FsjLGfZQ8e1BtDAdYPxsZVKuBszX4oyVc3RV1AoaMNp1d8G7tVhFf9PBQ7bhfAQv3sSwR3",
  "key23": "3K7cYPpTLZGMkAeDqvsefXvtdYUCbreckfRuJ6RNZCMBHdNcTz5p1zdg7g21qtYyqpqwsmZtZE4omTtgM5KQyGKn",
  "key24": "4pFKoFp3CneStWdtdTVqEYZwZmswuUCprNVuwe11LrVNcTq8NYjfpGf34pc64xKWygkZyBTQRxAZEstMRVM7pYsw",
  "key25": "58xwBYxKF8AsaK7Xa6jQijsfQQcvfmRhEGLjnp4PAmLkr1b4UbFDm6PAYb1FAitPfnmUeuyGbFVmMyF3GVvantr4",
  "key26": "4Lm9yAn2LUG31cw3JUQqRdpgafpnAABGZbnWEfFp9AHa6WfsgLw3T4gW2S3LwJptwQgDqJcBTSTbdU28r9zVncLW",
  "key27": "2zPbrevdTNNk68hqeMfoPbCW4RA1BduVuzm5XPSeM2YGEMkgTwMyfnJgCB7FPg25d1ZGNmCRPz3oGcok2HekgCM7",
  "key28": "5XsQzJeCMeYVyNVgJZLVNM8aYUvRBmRTXo9L4gGNDycGKjPPknze4fpQXTK8oQv34z3zHJP87iSAaG1q896a5jxY",
  "key29": "vTQMR7SttQpe4kXwMa5qzANFeM7EE8UP2R5boNLvebvTQka37qkgbVh2s415vKj5KVkPtFMD8nCu5StvUkGRS9f",
  "key30": "52oPxxizuRYT49VfLWKFHz6Ci58UvSHDnJz2qzBATifZnC8V4tSoKhymryLPmeeGea6nNDBPmY2JenLQraEnC9NW",
  "key31": "5MsJPJ7W18KnbyEeCAn24senHTCq4b5uvbQzA3MZ4Z1NicoZrt3EkTpi4yPsKj7hQ58m113H13fJVpSNuuZHUt5d",
  "key32": "5ZcPpqogzD6saPahzdfFzs5ZhHbLpjkYzXc6zaJqRVXCTfeT4WCq7ZNzLSoruTSxh2QN4xRdRmyjb2TE6o62D7h2",
  "key33": "3BEhVVLH5WvnRD4xVsisWWmh3iybqbVpbAvoQAkgTyPy8rwZPjHreYpma2AFPuwoKR1mro338dL2nToo5kevWyx7",
  "key34": "3aqpkUqtb34v2694RkAhja6sWGxFKGeyQhyUejNnwsQFyvKkUdrpQve21YrkWgm7cwhur5g1iZDW5XwvkXRGSPjw",
  "key35": "5B8UPA6f1C8eyxxf4zBUf3XCFMY5CkjBK823okYouNsGazPaqkHvFZLKV1nsuQ7UniunHWULRF9Ng6iKfJ6931dx",
  "key36": "62t3Ea89oFwtSXHFovyLPm9Ap15oALK1BGJRdBnh2B8gyroKwaEzvrGcFxN1bFgCTHrD3gBjSwAXG4yPHA6AN3bd",
  "key37": "4Dee5jTD89gStkJ1MNUaxW2fh1sMSnxywb3tV5VfvXBPcPUFGS8xazA77MciZWEfbUfazvgKuuxswdTHquJJYu3e",
  "key38": "5MzkBuC6dFhFwSFdnsebDfy1pzSHJB9PMSLYJ2gkgmQjt6qL8f2HxEUbrJPuGaBww1QKNpTKedjEvUf6jydGy5p",
  "key39": "2bzMjQ4KzfsJ8Lt76N2tBMtr9bhPFbzrt7yHgD7nMjVHvRV5q5thPsFSwXqtWiHuHpXGMmShYs31jnzosEgPZ3JA"
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
