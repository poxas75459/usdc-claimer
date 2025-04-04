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
    "3AjaTRpjWC9o9en2bUV1RZNjVggkWZyPxUZbihpRkPtKgrSQ7Z2XdNyDv8bh4RG5X4SdJ2LfZ8CnsB6YFLFxsvQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "we3A52TyZR7a1NWffChhb9MieVeyaEtfHM9jdcoobztEJ3kPiX54QqYttyhptzM7MEBCEUQWcp84r5tYwWEvnsE",
  "key1": "3Npqu13QtzDJ1qFmagZQQTJxcuzygntDaM8MWmEPxWvbgCu1PziaL2jdS9QxTT12qxDimA1eZ1FiFe3EkbQv5zhf",
  "key2": "3AK7MdLmS61Xahh63QV3KbHXhtj7iaKhEvYC9aJ16T9k5WchoaGTZye8MX8KyTbzyYyPRduWM2k14gfNQ71myxb6",
  "key3": "61crzR67XT2JurjroybK4n6TNAh276edd7ySoV3WHYkeL7BWY194Rad9WLsmkE2gQah2CYEt86ShM7SEzasYxsjz",
  "key4": "LCqeJgym3vxbJkz1kNdw14uYSCy7XHXgUacNod9RvysqA2skFdPCW83jHC5K8FuBCBkygEHa5n5LJwAjxENSG7P",
  "key5": "3cKfTGZtW3kSz9zwbW9QDfUE5He8bLNfXy5mLpiZ2nzkTzydQV9qeWL1UhC4akbGmWV3WNfKLopTm6Xp2fGiYVad",
  "key6": "4F4qjS7xUsP1EqjsFJABfpcWrcEBvKzWBtBcGSrgwhDeoDzpscWjwpGeHV1YSF3zh1gw4s7kPEY8osTBWS2SSboF",
  "key7": "Gt21tfzKJHo3DpvSCtEBk8UNGEojXMd5oj2WNfg5gZoQddqbFELKW1KFb7EoZtokXRwCHxbUfFkzjPBxYZy2b9c",
  "key8": "2HbCm4UesGRsPCPFdjDrK6KqtWQbMrsoaxhiYwTF6VupwN9toWarvvJTCUAw8tJbpHC1K8Ltua3wvwgcyjdWQvJZ",
  "key9": "3gscyEduJSaKAqYUXUGENxi3ypyN7a9mVRn48DcQLht8xCFx2r5evSQacJ8jLVeGTYj3PuXtrwBeLuetrHjBpANr",
  "key10": "255cyxzw2xeKvoWW527akgFVCvWcLDW1TYoQnv9ySbjHo635bnTY8b28x9U6rhkphBz7q5BvgtsoipRTopHpgGwD",
  "key11": "r96R8nxo3Bdx6nYUhUN2NR5diXDQm1YEFYaghRgcA1DMuhfXQuWuo6ghbMmyViN7M28UyY1AQvZCFtSb3wjkvvp",
  "key12": "AdUAAG2n9YJVikjKFRXxjtisa9xFJXZj7hisjaSjRtaYDcDYehy3YrDNa6Pa7kaa6gmo9KNRixkx9ypuUMFZK3m",
  "key13": "2MzEEgtBrDTj3mX52bA81ckCwXobGkDfsaWFZy7FDqb5gp3RrmKZabBoy47QRAfNzzi63rM4HxhWrxjLJtbXgX25",
  "key14": "Adab69myNwJ7dCx2XFVvfP7J4j9GtP1exnxWQUYTjaPFHrmFgvaW9a853rnqjTssL5sKtAiv2HxvxFiq47TPKyt",
  "key15": "5iE3zqT7VhfBU1RXmREEYSPvV2G46wsrVvUwsBoAN2konc3KR3dCuKJPaUS9xJEJD22UcmtkMaHHFhc1rWLxHDFh",
  "key16": "5VRgFNB9WPipT36tKXRX1kjhjZGrfuBKsuWcxodrFnPcukM8nQYKHj5SMxTygTp1LNnvzRBWaAq7UnnMWNovCWyE",
  "key17": "4k8HyvuQL7U59fzM9x5DVyKSNReN92PU6wDM4o1yDn32xzPuvbkzhf4qHXhKEnYk6YzUCc6JCGGUxAXpkBQLxFBg",
  "key18": "2XAJv2ACSAbwZEsDsnGh8sxXqbTtotFieheL5c7pUzU78s7oiBuQjriJhxS3wZDHP427DDQfdJfwMQbsMoBcw7cP",
  "key19": "5w63ztDR5ATYoHYNYLefjSPWaD2Drs4u3JhMH8hZFbv9tpARTQp2gaTcscWBQFUwJaU49V9gz62B3ZFmRDBweLWc",
  "key20": "CdDkUs8QS9t2c8xyzii9xDjPEse27xXHuEcqJSPrPWhxxdTWHwiUQ7GHWR8X7L7JwWNUuLcidFQVZVHGPLvqVq4",
  "key21": "bgozv59WaLWNJmPnS45oQdzvfJ3TfkpkR4jaEf1kB9fn5sAJiRVbcd4X6NUKBLhCFJaVuahga6EjnXVnmxxqBg5",
  "key22": "2GQPQWaTCBZiQhBZ2EBTurznLEY3t1NTrCkt2Yq6gH6dEFUamjudKRYoXUdizmD5dBirSzFjw1RA993bJ7rPvkDb",
  "key23": "2G4eBX3vZV2Jdx8DnZ4d26uZTLPkt2p4KeF1mYE23eHRmmTJpaDTwueNXneH78XsVo9nuavtJ6LiyigksVXLsC3X",
  "key24": "iQ6hAVbVnXtirdRWJv9g4AmtbrPrt1UupVdyY4azvAKhtbcfb15Fa4JFRCvysiL2J4PFK6ozcvqB7dCwN7UYfpN",
  "key25": "q1CbefhBS3xFWDQ9SvedyY3kjdB5yPN9nQmrCujHJ3FjCZSMRWYMiWz8xJfLkKa1e3NtfbpHDi7qsmQ9zpCXo6a",
  "key26": "5QrY2bRVT4dc5c94oNqQDtnX2qYKrMEHRDckVSQsk5nkr2MRmi7PKZZ3StiUHsiniUfrpoYa8sCTo1BieFYJ99vL",
  "key27": "1LUbpWtiQ2HfQfcu12k2EN2vy8qE1Qwzo2ADD4i1bmBnrzWf2jUVMr3hQYZJvKcRa1MREon5NXv9uUPidUGZi9Y",
  "key28": "4j7Q8AgX9cqBbHR5WZwRtRT5YJR4rwGk27wNWCLa8ueUkn861AqQqqyCWrcLMJKFPJQhot8PK3w5xzpWmfJ8Tqdo",
  "key29": "2EBpgRYKtGfYsxn1W3C8QgREPxXWhzUr3URRv3MWZFiqUKENUAiZcx82uRKU5X4XdmoDUVcd1gwao9jTW12w3ChU",
  "key30": "4LfiS41MoM1LnYTUzZd278ua4isqRA3Jpr4o7LyLhTewzfX4LQ226RyfM3Makpx5ek8DM2gerCM7ZfkTRw8nakfL",
  "key31": "5GcNMgyXWjUQma8jcPCsxjdHge9cFXYhB4CfFSaoz3jH5xQ6FsfWT43HUeFtKwR4qYZhGnt3iHa4cLBemwNVkZW7",
  "key32": "SY1vsx35GERuwHLceSzmumjMEETX5Qy3dnJjqcxVXGfZnNG4p1S3TJKzgEKN5vzWxHuNejWjWG1XmVeAuyans79",
  "key33": "24LUPpLxGMhjrFUWeFp1EiwwMqthrMsYaRi77no9RAqXWjRqfrUPj2gLF57CEJBkmxg8GSNBQixg4sG9KTSuudsa",
  "key34": "3Xno9DJrUdg5gVCayHygTSionaQN88qntCYFtoAVwxCc2mobgXqcTn2d2LTaYvFZGU7nBk7xKL1WxjcASVy9bg1y",
  "key35": "2YqxEEd3x3TRHTnxQyH4mvphsvc2yBru5DREANPfAmpqtYis8E2kEWQvTXqgQVMZy5cnSvpZBknRECupvFHG21f",
  "key36": "8555LFgMGcFfziroEEqSFzkruSFxCUhzb23JuMBpAo2xpDG9VNZ3cxnLpN4XtPSh31HJsLQ7y1T4upmh4utQxoh",
  "key37": "4DJqQSHQ3LT6CyHxrpLCcmqX6EtRXEVWbD2ftcgvDWCrdmQrrb4cpDggL1vpHnkvp7bKqicWK3HGD3Rzh444TKJ2",
  "key38": "4Tt3myaAcRMJtWkkKekgefDSy6fNxnVfqZAov54hokWPmM74DQy6PyXmYGBL5chMsunb9TETULJEqsduGfeDyp1T",
  "key39": "2YEqXg4TNESuvZoFVHxkFnpZHde8mCMEHps1uNuYoK9AmbgjxBBWJWt68cducwGVhPN2oQrpHcFs9kGTKnmgYDJ",
  "key40": "UcVmsSLCXJ2z7w9NGEvnzuw5ARKKvLBUjh6yKrmrgZivbxxxgvymUrub4xJkdGgmBkC2wEtb7GoDedjJUxc5xoH",
  "key41": "3hEKj2YQsztFphEWyntyWHnPwPJnTNAk1PxzFfGhvtsdQVaJtzD5dkNHRtri8fYDFrGd1YW5nrWtxXKRjG4s7o4M",
  "key42": "42kEsKkReWNSfpPbUspE4LH3f8eQhBD2D2UhwBVAAz2BScWDNpUFNFjzChcCmco5spc2Lo63gHNk2Baik91ESV8k",
  "key43": "4VhXrj8x232rKhPQL6wgRouBfEUBVnhEsUvQPX1VYhCXALC2vKXSzFAS3xi5sPsBgfqb7BekDgeV6vUFxjp1T6A2",
  "key44": "2JcL1hAgUw2YDvZbQgQdT4M3X2hKGYy7imrqPWmawWr71kDL6R94Wo85XQtveypEQENzYnMx9Gc1zZSEdWXsE3A1",
  "key45": "BG5knN3rcdrs6N5WC8u1QpspxzqSt3XkQEVDVhmJVhjSwogLb768n3q2Doy3tkcuctzxWKmQncqodtMveh2Bo1N"
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
