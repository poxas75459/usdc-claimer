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
    "2UfNgENRDdJxfQQGyMaMVF4B2iWy7oyK7GkJwtHKijqLYEcJRDoVQrGLhUzC9XqWGWvnCV58vKT8HBPz55g5kDMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LBNGNHbmU4GrWe39GaxwcJ8S8iqFSz7mFnDAyoeA5MxenrDeBbf8ei2ZcMRk1KMcT2vQCvbmnB6rsapSStuWFCD",
  "key1": "2UifmWKra6z6W2Gv9Gs7BRr6mnHkfCxFor8r3mN7SANQRNEGxpHSG4w9vA2UtyxpU5cmnz9UScY6CQbACAemMhgb",
  "key2": "5YE8uEVRToFXQTrRHHGjmSQtpwFG4fjUwLh9CP3m2jJRqNhJmvSwpnJtM8saWpVgumJpf9MBro9kDSmNw2bnfHzn",
  "key3": "3wCVEN2H3Sknt6uwEz4CCsh4NEpUUDmQStkM4vFN2qCFEfSqdE8Hvx1yX4EVCBZhL8H5KF4iv9mq7QNo1sV6CJVo",
  "key4": "z5Vhc2B6TxobZ3CgLTTV5JVJerh8UyYx9WGV5ob9adMnUSgSmsrmxwvJTKuwo6U2YdBMLjK22Wq86dyGBwxASsC",
  "key5": "2wEZugXmKJWoaDBJRykJUMXzam4cxzDheDN9NteFLVHkiFkpSrVruTMQ3pkHxuNFk5ndi3HA8vShh5Cn6CAShAR",
  "key6": "4QaqdtPKgYxjhbCri5phHg4MFFB7S6tAQkCJb2otiVUVDD1zWo7j9Xscyb9mAwq5Mo942VBjwNbimYqvo534FBDr",
  "key7": "2MDKvdNEdAXGXTBcuuKogH3zzMUJRRJc4Qwqx1PBq2BhbzjFArZJJFoTq1NemHVyv4bw6bjKStrmmxoiQoB6roGo",
  "key8": "5fXzV9rMbU9FgNVVUNjJ24hrn1kEA6mhAYbKb7U15JLVfozcmdUAsn3jSHSeDgiF3KkXWYrccx3HdpHgGFuexWNx",
  "key9": "SPLuejyK76h6fYYAfMen6fwjoCCe8pAkr3kEbGn6PrUrVvsxpUkLZxSDuV88E1yJw7FJxdC36eP78tdf3DGgqfD",
  "key10": "VGLbMqWm5zRYH7wLcXP5TMT9XDTQNbDVNtVVTUDMoHWdPvyccSV5GnZPUZabqBWhUcoeCHYSVvfitMi9kgYZfgo",
  "key11": "SnKFDoCHVcajGHumU6if72qu9Psv79j1jZ279QwN54CiavyGb9LUyEE589oi7XFoFj76RmMzLYe7PeVZDXjLz1h",
  "key12": "5Ddwb3bxfZStStpfhsPms5UyWUNaKmHQ9jiJ8zozw4W1pNJLdzzYhER9f2JqQqGttDY758u8RkZpcfukRefuKSMa",
  "key13": "2FvoYxdYDbnXpBRrgvig8gShENLmQPFoJabsWUQy2jhji2w7se67eGxV2uDKmz9CksLVYuuK58bovsgmfwWiw82d",
  "key14": "3TMAQ3u7PBdV5MGDh9A7B1FnNxhdpvDBBTa79Vh7imhfqvcKZAVD4YpsyBUivW1AMmZMrTsRPZpeJVSAaVVfUt9J",
  "key15": "2iKoLENFhSVbdXA1E1sLeuJdb1u7DGotkPi3NUA36xLpJti4ohQ41XkjrLUGNxaH6tSUuyUGiSddBKLChc14LM74",
  "key16": "28V8pdg6YSUwyhrGHQu8PfjqxywhDStagqKv76MZLukRoVCbQu97gtZZ7d1dja5UycoReZZ6uThKT5EmXewEUxnU",
  "key17": "53Gh3GHNdREiFnd5ezsdeqt7TLLaB5ZsKcqS2iSBLK2vXyepnTQ9mv9DFi8bW76SVF6zX2AVFcW5czTi51KbyNBg",
  "key18": "2Q1znAWSo1rn3yqac3WhTyLWN3VTeDtcYGqJpFVYiTCooFmYxpunMPoBUbBdijAi6FLPj9TU7sKHL2uMnbDSAbGt",
  "key19": "3rtsyciMiLRjgtatAMHC2GSTKWh4GYoqDSa6kPUHZQJ57Lh5fKfDGWWJ2ReBXDH8GaLad9kxzaCqkfvYZNiY56za",
  "key20": "4KESWHvqjFtNni5SixeigFNEoPyV5GzhAQjJXTNiyeTpLVPuwpLgqBf7AjRVH1STQq5J54dfRAYPYA46mzyLtC1z",
  "key21": "4Hda5UTK6fwBt6B1sTnw4AqmiZTyRALmYWDHyT4b2rqAiq9Y2mYiwj6GuLryLAKziZpQgb5KjVqxZkWJw8FSxChb",
  "key22": "A6Z3QSUKJP4yYutfQU8ZJDBA8Uaj6sgH6GoU5btxCW95Y7mYHifGSkjEL38bQaXMP6G5FXQaCrz4KV5L4QnoUFh",
  "key23": "55xfB582QTq3cTc4Sgc9u9eaQ2SZocLRWtpcepvjGMq46pyM9tWCx7YxXLXDhnk7ZaSevYD4ivf8rLzdxXH9zfsC",
  "key24": "2Tmf3CPZoqH7Lxy711ae5N5TgVBDDL3TtCEQGrytphncaV1q6H9r8HvMSsNMh7copu4AdyY8PQZBqGxXaqwEVpyn",
  "key25": "2mj4pGdWE7yET3BLgqbpsSmFXudz18nsRXp2D6HLYHVAYxYFUqp8UPkU41WAkBbs9mrhSPU89yQZjx68xD1T1hQd",
  "key26": "2wVGfsENE9BptcSW2FuXSNxN8tANXtm2VpPsZiGfAU5DYD13r1KYWQLbbC8Tqy6FgYkxTEGEmMpspjrHskga2ehV",
  "key27": "4BaE35yfw87tvwjXGgGNmqWXdd793UzJ1Y5YPBcqCURP1Pnshq2ZRBcVJ2yZxdmoJZpTQvu3yirJXffzZmTBbV4X",
  "key28": "4yUj7PwVDWiTTnCXAq7wMdjMivJHQLZLsZ3PcARo1K8tRjZVgx86ofeEw3Ujnf1y3zwEyyu9Dpac9YJ88P3cJq92",
  "key29": "36m1q4zv5gqbo8Kyr8tWkJq2WjzaFaTxZ3VQhFh5FYvghfDY9bLGk96sjSa8V83AiKXFvp5EcMeXhhSK1urSFRBp",
  "key30": "HNKXt1cisrv1kQ3XEA8jv9UAkXFhbs1gUfEdhKPKPtZMuL9j81tXcun3pUfPNnAWDrf316kHg7RA9jxLs8Ckaxp",
  "key31": "x6bHVM6yE7QU9ve5Yzao18yQby7atZtTuW6a5eFZGaaktYS2ch95SW2ZBFHwQNhcr2tkxpyxpVZPTyAtismHZpa",
  "key32": "4zLkBf8L7hgs2RcWwzKNd8jKf4wYPiN1Dvuh5YAYkbtk9WLkEDnW2NgD9f7xSTwSoWgsFcVZbQ552Wi5yqkUff6i",
  "key33": "2qJET6U2FL6RLMPkvQgR3VCwj1g52aS3iV8EsE1dx8q4gLf7xrQfe5y6qY1GXeEXrgC9GBHppKb3JhdKMnCSzpCQ",
  "key34": "2KJig5UnED7sxJmioSZ5zgoJWsEpjvrnnkL3ktgMVSCTbLDezt3dBXbPLMYw9LjkYUeTh9NfKPJ2CnwBxhb9uMp8",
  "key35": "3pfv8ZxAPhmys5xJuC3w63ncNWfAvHTafxsgy34PxY3cn8Fts9Hyc44ixNa6pamcK6pGXaaAtodLFxHk4XSxuo35",
  "key36": "ud7i4rYDLnVCYvMv7PRcKr9TjQiTtq3jg2TCN3h4n77Bjz3uZmW2DLYXFnrHQCyuG7suGGB7PBnH6y4u2ieQHGy"
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
