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
    "Dav2Es1oCw66F8qTkQMMvWpVWcR27CFm3DH1Jx6nVMPhJxQtWoaeoF7xJr4AXbF414dgVswFoBaGBisPncz323f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mV5X15JtRHyRjjq1Pi42ZqGojyuRpGegxdxgpUGiRFhoemMszSXqXaektwnbHA8bmgS8KW5eqTidKQNZRPHNdHD",
  "key1": "5SZsQJ6QkEvTc6rgiSca7JiZc4A85mfFxWmcRDvcYHiHw8pCdHz8SCWCiG4B6kydRiSEJviKYuGQ4WWh6Mb2DPMT",
  "key2": "5YccQ5MJ3Ae5AL8Y9EoN2PGnMYwPuE4gagotdWrMMDk6EwzfBut7DJkQjWe1Pm1yaJUDaJuxRfZ7TaCbW95d5LKp",
  "key3": "5j7rJrzM6t63oQvwCHBwC2Rcr3C86yU2GdxJM6QmNdNYQfsA2bmrxrALW6Szz7CZLJpbT7o1ucG6TxEAM1j6k7n7",
  "key4": "53EdCCgnzPTpb3tXhh9vQ8VZJh7uewxTGeDNHfJefUJyZvfpxo7ge7aHx5zkKKhrtS65YWYbuNFLo9zFRHnksgcp",
  "key5": "5cqHrBVgknTZWKJv9gBpTo3erNugnoQq4HUSSAJHwJksdwXJrHuieXVobonWQsKxxKgEvxaKSsswcpEYserEjnRY",
  "key6": "4dTRUwEWTEx1ADUqpWTYUC4z7NefLGA3ivxPUg1ZFEwkrxLCZjmW46BBZrWHqcLXZ7bgKnoHjo6AuJJQnr8ZWeC2",
  "key7": "4titbs5Krzu5cY4zntoMMeApueuLgeojN5Sdwjuk2bu2LskcvNjTBVcPHsE5qdWT9HDGZxRGFSt9Sjm5a5aFNRBL",
  "key8": "4RwKrHPjrWYiSU6A3gbjRwXepzeob55JZdjjSCpoDXRPxFRggZFAdsGXHraXRxwgErpG3oW7KfoAoCVQMPxMkpSF",
  "key9": "3fwHXCVJpQHsckgb26m7jKdSih2fvsYB8aYhZvaHGLzKTH8RJ6SPao5whW2Ep9ndMFaXMAnmgq83QniwjXU18DGK",
  "key10": "3jqT73k58kWS53hjRdfbD1iM2UyTCXNjsQiv8RgpA9MtDUBBcXRws356rQ83tLiktojuzLHTCZEVeGs6snDVkDxF",
  "key11": "AsBFP7SH7z8krdiG8oKGZoep9ft61yNUwEwNycjnRhvFWdFo35FAob69apZFHyCoThDTwVD1eMQqqUAKRy5w7pw",
  "key12": "2tS1wXhNS3sivNZC1YD1RL7YqWqkVpNgtUQm4JMBv3FgUoESwAVRFW5HdtcyjLQjGWttsUzuH96R7dAVAxJpnaM",
  "key13": "5mbyWYun9cDdTF5vLk8AvZH58jWe4QnN2QuSi5PUjXPZUJhrqX2v1G24Q44vBurLMTYcq1GfvCKCVpNzpS7geXt",
  "key14": "2L7Yu5DaVXpBj2SL8aKqEbJS7bEahgHfiR1g9gT53b5rrJtAV8qgeVZZqoeaSFbAnYWmvFCJ3JVbdsvxVSgsDAuW",
  "key15": "4J6EbxPhAdJmMZ2k8BBBdRSenpL7BgE36GRRUitDe4uGS6qZz7c8QwrUo77ycf44EYMwZdgQqmnTbBvVUstoyMkh",
  "key16": "4mHsXa9kj1HxzJWazH4mbNcdYZBPiHZ7VJv6xSKqkErvUEXnxRepVDVfTGWYyxiLbuSXroqbtPCCYgPKhppRzDma",
  "key17": "5tjBd4JezSg7izaV8zDGuXXpYahxhwDbQ35C1zN2nLMpxqDcqryWuSTEyAfjDF7MqANyWFsusZsTtU9Mn4ED4SnM",
  "key18": "5tEerXZiRqhnHFUQP7MGyVyDHUb6Uqe3BtxHf74hYGJmGE2rP958iFxSUL81sHyRoL6U1rEErPhDr3YoFx8M6KKS",
  "key19": "3FUJwYR1wbUNGq35nMEtbJ5dFrWJJjgU4pgiD93AGMGFhypVaiCfTEi63LKzWWmWNA9PfsR3v9BqpS1P7YdvLbyZ",
  "key20": "nLegeRw3xgFuptDQTAS7Yo4CYHcsX5mi7eobmRwNpv59AtyxXofRBAfGw6CNshFvqkf4sR9q846tta5Tc4oengM",
  "key21": "Y4d55MUK4XsEJyuohVvGR2iKoVQaUjmh8f8YETjNGWbpr9gtFeVwivf7SuWTwMYRgxjP5QBskM69wNrtP8KR5uV",
  "key22": "4xTxnBvdABsejsTijunZkSvwgHsiPXReEiFEY5KfUKbNoGypGyuHaWyvGj7t1fddXEhBbwG49nuhKeQW2fNvNbdC",
  "key23": "4zAX3mG3ESAXNYXTkZcofp4QqTG23s95AGEwnm6P2EReoRN1zgGaKv7g2W57cmqAbqJLumTs1u4osv4xj8bCyLpt",
  "key24": "41vEp2zrXHBU5fUzgMxdH9gvLbjUV7EGgYbgTeWhFHZMyqfYv4kp7Qj5BZDg5Sw6JYtKb8SZW5qHaZnxxQQJ4pQZ",
  "key25": "4dEawyqrktbTCTcj6qjVCEy8q7u7JpV2TtYWJw4r5d2qu3QELbKadUGWF3wrkHuWL8ZqJQiDnsqw55cw5JJkYUkT",
  "key26": "2hHTK2faaho1BTGqDxoihTThhrGtxDmr5ssctLmp1crv1ktFcvE4YCNdNFNTLwkSw9S5F68De7cd6j3kPgeKruCL",
  "key27": "5sYiB6vEWrSTkJFiydt73hXgTMvDsAk75imgwhTrQesCpy6b4YngQWaWGGAzq6QffMhNtfLTjNBXRwMrgHp9NB54",
  "key28": "5opoba1FbERaqRdvqwkpDTwf5p4RASCFEXkKnLkqoZwvCbDu5XjgqS52ETnVG7d2MaPATpWvS4ZEeZr89kdsBwyp",
  "key29": "2yzLFS45DCNvGfTSD19cmC1MW12g6GisjN3YaWBbgofKNbEVY7HLGnKBaaUfCxeUDizZ2rrscB5c6LMeKiPThNkm",
  "key30": "47s1N3CJLzWjRRkoQvwMAhCfCrHFebMxXyrSGujy8BdfVkzRNWUpA1VBcWLBWA8dJZAKLDzHRdQs99c8nBqqR5MZ",
  "key31": "3NtWryeGmBnb1EtjUH57L28G1nNfzbRmGkoeFTFJaPy2yMJszvHNVmJRBwweYHfpgfRfQRaxt7VHgMaJkMmcvuSs",
  "key32": "4bW7mVLBwH3mcMzHzFb5GxF878WVwVF93PVqJvdiYaHAUGfSR48A4oPja22LM7gFNyMfhtGz2hdhFvxuc5WuFep4",
  "key33": "fv8qfFuaQ8vHBVrsVpyz7Cd6XgCSc9efYSj2hFurWgmzMNhSFFey2p7ynvXQfQqaoJCkMLoAfpm5h7E9Pz7m5Dr",
  "key34": "3YNfAy5C89rCPcN2nBNb4sQwShdcupKywSJyCBMwoSqBwxYB89mUrF6JQL9hSVVGXzt7CgbGQXRG37AnVuyvTreD",
  "key35": "YoDyGvRtBeodeoQSpmsrmzDwcDL8TXua8gqehsbsK6iCh8P7pksZkEwHSkfkjgiMhajJutMXScUsQK9jLyfB2YC",
  "key36": "3vmGmz82eW5WYbP2hVQ7gU3T2YzsCJEnqPFgbSfzcohEdcV2BZ6bGiH7k9eHGVcF5B11uxvC1NfMx9q8vPdymjXC",
  "key37": "2LmYvBz8VB75rjHWaoadvsHvDfpUSG91fnndABwDZgaVMQZf9Miznfn8XiFXvZovDkYNmyotANqNnCJq7NPiSyGb",
  "key38": "yekp9LPZzoARxi3wfBppa3zik27wpi9C5kwXvJmLTMW1yddLohEqvk938w8ff6rAPWPfrNva1BP1mk6WcbMoF6e",
  "key39": "5HLPm9P8BJtNoCUXdQJV5CVLuKdac18ZbqpgkraSrGwjBUPwSi1fR3vYVjjJZy4dxsMJoVRbfPu1BSUm6f5Knnnw",
  "key40": "5Js4Q2HX1zPPGYTwmuHPjhPURZ7XvqMfAgnDAavw9paiDiVKjzM8bySKWy6wPcfYnz6roP36YWGa98v4fYwvz3zf",
  "key41": "3a9yAYkn4PDWqhMNjFSVFJHWougTGA8SC8myewWyZ4MT8Km9SHeJWQLBCXY4zffu6eMQ4X6fXZCscY4sq9KKJDPb",
  "key42": "3kU2Hoin3pMuJcbbSe7CB2t9oAQ7mnFQyzHdGMvarqjBzaY86RgjjX36FoUnF2uFqWRegSv4iu3eD36kXZwGb3pt",
  "key43": "3qTV3ZQ3uCcgEgifEAonM53A4tvfaU52Yzc4f9DUmATCjdNWUZfgrLifU2dQm8f2bvMhhpGtUPvDQD7zuK867UNz",
  "key44": "3LZRMCLwZHAxiZSpT6TNPAnbCqJbrhatiw1QFQkiMsD4XA2z3qsvYw3topEKHHDjNQKoxDBEh22XPke6zFk47GNu",
  "key45": "33joKW3mgBTHcBVJ9Bje51opxMty77DBwyg3NJhUhmbG3Qan1NXBZNjjAZQwtSq3XVzMBhmCT2qxzw2yJ8ubvnyG",
  "key46": "2s8b5HF2SvzUeAdaVPf8MSPWkB7mRGhUgf49txJ1wPtn9i9kZFWjkvUiGK39VPtF5MzsbsktPdxc3fd2ch49KRap",
  "key47": "539yi13yf4WmAY2VNSedsMF95NgjuBjpi75eKLeH4kG9dY4y9htZEDrSjSncBkHDrqQ7GnnR6pmCjcmP2bd5dRFs",
  "key48": "5NpZ3cZzitggkieEiJ9LQzeZF6goCxLgARHWTV2PPYrRJYx4LZdKZJj7NxHr1r2PfjVVbBxzXFykveQ514RXvGcX",
  "key49": "5yqmsFLEcrhTk71EAp4WKTBDWZ9obiGNyrqp9mn8TpjnMq2PGerPfnVgV1Gx3DAV28kQM2c1GrjTHnRGmyzUv3pH"
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
