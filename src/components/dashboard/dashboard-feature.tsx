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
    "d1L7ysNympcGjaDpvqtcevjvse93AwrE7JoP33NZQSU8y82ZemVHpG9M9upjDBiv2WTEetTgPtQ2TEkknZmaVmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6U3ba6BZCnh2Fqv5Yqa58STgXo5WpJafLc6LagyDYrAjVZ6742zDS8xX5r4f4vpTDFdZsiyYPVBjKLDSUBTDDpY",
  "key1": "32sXJJqS1zJAiswK6SvPk19VRYyTRD5yHTDeFcdLThQMziarDYVUFpXgvMTqr1QU53ZLpZc5K2kpSB625WWuMprJ",
  "key2": "5A9REJG7i3x5sxvk8hv3qy3eSf4ice8qmnyygQSX7Nk5j8UtFP5hVFYn9JEevxf9D22Giof349bsmybQEXhrux6P",
  "key3": "3nug9TFvpPE2tnumzKZjwHk9i6mqkivY4o9uQaYKvX4goHHzqjnhRX56HybLrVW5pksZdYE9rqVqxyFb1WsaJUkz",
  "key4": "4y2eEmqTzasz8bcpoHvDSVuedbXsfxac9JW7UNoLeESxgu8bMYXahunhZz3Jueu34XNfScUrqqUcv9pvkMoR99jw",
  "key5": "5XLQE7Nd8w3CSEf7JNwSgenHnefTmyrkaPRGLJEbkMiq8i2hcnFnfeLLCFjGCTVCCrAB6CZv2hXndg21TCNxuzn5",
  "key6": "5LJcbyDL7fzY1cW8N3BMbNFAxtZn7iP34AknRye9sv8F4PiogD7msVDUUHLDXCSDSmHHvnk9iuv5QaNakyfKWEb9",
  "key7": "2iHCSJm1RNTWPutrC2fCrPPpDe1xtvYbgdEtD2ZFyWx4ETQdefpug9vhqyVnCwhGUrVNSgAhUWE9UZMWf26H8xTH",
  "key8": "4S6MgqLb6bunsRwurWpvbAJ8WQcxLuWsSFnuDXKDrUgjnAVfUXV2bLwQpxiB7EWnC1qCaKbNAvf8gQgcrK64Lj1p",
  "key9": "5hCcyHfp5ZmuyzXAepASegybqF7v9SzTYNH7bzg8RokcwAqeGKf2kKWyh6Q1p3gPPFWEhLcqCa6PzigZVDXwzhLa",
  "key10": "5hotjhgdJd9Yrn9r6eceXTWvM3TtVqJyqkqmGpbbs75gSP9bi331idx8gK714m9obasvdunbk5poCjF3tt2CbCEy",
  "key11": "co4gChpwND2pi2fyYExTJvek4a97KgxxkbXivXNcmsiMMNR1dhDANX7bVVvgpQKFzmg8VCBVxEuY6AhtFb7YugL",
  "key12": "5Ww3sF5T4qSGh4HMgVuJxnukTV311vNmoyVN3WDFng38YY1yPpXedk8FRrZ2Mh2eyfHkQc3NTv6cXbjxQQinDMqZ",
  "key13": "3WCxcTFwd1xwT8NEbkJG4mU6Ak89a9vHnf7i9ttBYnPX7GrUbuvHhBmjF4H4d5wu8y6d564tiazcTnxzUY8iQHpJ",
  "key14": "4YorhNFBbeHd8maTmBnuvJgJ4WN3iDR5AyAAcCLyn5rXBHipp2vPzczSdYddPPCsu7MkkjdJVWxGTJN2ymJfc7yo",
  "key15": "s9F3bkQtpF9ktQ5kCGouMuznV3n44zKZP64Qnx2zVbBaBKqzPJVeMHqrZLCiUBTATwLpY23GZsc7tPcP3r3CvWk",
  "key16": "2A4Qfm7WdgQqivJbn9NcHcVZvXxpxRY1uC9bixJJrTJVv3nBRBdXCCt5o6N8sBfkWieWSR2krk4UerkEjKcW9TQq",
  "key17": "35zpkiFeW69P5JbiiCxH5zkciZ4zA18tLhikApJZygs7zfcSLDDFqQWdfpzyNcNB25Wm6251VEC1eCWjUSpkQCiV",
  "key18": "dsbiqtHPhtKtLoEQTWjNLPz9SKBjhPL4MHFZGj8N2nKxLZHB4oBGcMqjwdJmyTSLD4fFBiiufW351y4YbXUj86z",
  "key19": "3wKtKZcTYyXVNT9MwN1pyCS6WwgD5CLmfVPExSM5DqMkw43Ae8rct5R2ZCHqiUrzL69uJ32S25xB7pHzcNWnCT8d",
  "key20": "5u6sQZj4qGvsHA1yDmNyGhzc1gxnLrkzF7rcbwidfR9FKp4sqRYUMT2ivyVdDfNJeXFB2UFVPUBKWEX2hgGMCWXM",
  "key21": "3Wa1FntEHyLxJ2NFiRuMG5prg4iwHDc4DNRT1GzVr8U6Ls2XgVubJGV7uS25aVhZvKg7UHGiihXpPFbWiHDeCquA",
  "key22": "3SxH72Ziu6hGLQuDkj27ZDygnPnAqMHyCwTwdQ1oj2fq4c5hri2YwNyAwv6NDeX9kQ4yYLkWU2CqSwvGFFRm2s1h",
  "key23": "2W71cXRNioSpMTMVsyQxaEUNxpoxJ1pQu3CCqmMScR1QhpGGEYvvFEihctgs4V5DHdaipQuBHizKGQZzxpJsdVSG",
  "key24": "3oFmTK3zMYa2GU2sFCK4sBzBA313LTvJxU7s8b5GXs9a8MjQtZq2dAmvjwCp5Cr4A75WDC7fg5v45FMbMX1VuS9k",
  "key25": "3ebqQrPaubSmwhWUH653uiTJRZfCo3UJFTpoWP5REX7QDuxE9wwrfJc468Lob3UDYjyPboXQ7iafScsRL6BqbQqT",
  "key26": "5ur84GKCwBDy8tQixdvPk3dxffq5H5vPF2Jj1e8cLxyBPUjvx4NWCgdsKnxFTdvZb1autxvwGLpRamJxjLnRMC7i",
  "key27": "36QpkPrrbqczeCjCGPBXhGGWrXokHuXxwpEvBxm4mNxs8XiRVx5btyuiAjMk4KUJ2aoU6akwgJhCi6ETJStHdvp2",
  "key28": "3AbUZYeqTNr75YkAhjkCrEKy8K3kncdnnR8efmQbaKfJzMvpvquhrb1CXb2Vj1YAeGyJLHJVJmeaKfJxihajK2MQ",
  "key29": "X72RxrZdCo2cV5k8TAPeEw6peS2uz8KLcS3MWzFcuT4VaR5ANBY7AmuUPpN1P7B8ZJhParXsDcwuQZuZXDf338x",
  "key30": "3Ty3SpNgrfXfBJUww1hK2JQNURb5zgBS4ezctQpqPY637dcvk92yZp7dm555RqaZSiUBC2V9hqn9z1WV62oHPkDQ",
  "key31": "yj61V8Arw5N64HNUNNtxccpJh2Ubsd17CuAUeuitdqknbuzHkbef7HeXeBBLMMipx61ZubKRfey5w7ufTaRC8k7",
  "key32": "Ms9Rzd3uLGxWDK9GF5XsdBH8oCJqM8zAu1SHpPwHfWwsTUzJLjiCEfBNVKd5Sr4W5bb5dUx4ETV8x4SeL1EXHsA",
  "key33": "5gYEn5oDiX8Ew1qKW2EGusHKuXfTQ71yfKXbXb1iqh7KGQVvMcMoDnCYzZeDD5dLC5nRvt6qnEeuqhxH6eXtQ4go",
  "key34": "2Gx8yU6edADA9mGo6VwkUrgtHXa5ezVvJBVE9B3YAeG5WW9qyJTL3rYwdW1RVnaFmdV59opweXHDg91D1j4bA5wK",
  "key35": "4wh6GQ12Zb8aqGYPV5odCNVoVwwoF4veLwwmD1MygtBYbDv7tng3XzQ8jq3A8Qi6NrTALqtMNWSBZbWkeSv8VgLM",
  "key36": "39UFsdijV6on9xrwX7x59E7LjGQgnHx8Yp8k9fvbNgiyCN58EHwGudh38jP4po5npkNpD4FSqVt9ahQLa6HevYvC",
  "key37": "4gVwUVgLPtMBqZ11Tax7VNnzu7xEsK9aKBadexAv7DNwHcxbhuhTmSjECAvqKNMJhUhHnwz3XN6QrEetVbgnTfyW",
  "key38": "Qjbb5n53jSPQr7UC7cUctQvwBxQuSVkUDjWt4f8ZvGhESeo6dSqpFsvHd4YEBtN2cA3c8GwcV3wXEQBo1bwXWqw",
  "key39": "3tfKmVGNRi7e2qZcpouxvdCzhgSqekRuyiVoQ116gTNuPVBDrf5DGcdVwVVG21VgJU9o94BWkaM3MmkrCKRcM6r7",
  "key40": "5qG8SRjkyj4iFnG8G53UimSqfUC22Cdk1KqBXzswqz8ygSQPc12zaLb4pZXs7djiudj3MfZ2hmEwXSGknQc2E3Kw",
  "key41": "44onugXR51P76oR9dEXemKtoE4zEowgWdbuu56RuJiZUYE897cR67YMRAhmeY7qhfD6XbEqfQPaEocKiWovN9Wrw",
  "key42": "4kqqYnFbzQDRAHLRKiYkj9Wfck4j6H9iBXtCQRhCP7uHnquUHdG76GyuuCMgxVd1xDdfyjDrhbMvohpbfVHPqrHx",
  "key43": "2Y9fe8TH43mzrxA1kqmKD5rcLDtNizrdp7g8dFALGVdskkDemHakTFbrzwa5z7RVhFSMrooaj6BJxJav2VxnYZSJ",
  "key44": "4tDcaxQPqmpHsgpUqct5aR3p23MkFkggTpMQYwdj55AnkrCFdsEEujmbAc24ETSMGBqY7FEfwXsJDQsb9UVddmVu",
  "key45": "5ynkUMfHMoNkngy2yriiYjQCH2fohNhVoUtJ5rzGAEpwcwDGp855uStz3a8AK2U2u3mNP6hK5qnGVLSY9sfZ3ywA",
  "key46": "3osnY9xFUSNLAKJNcTDiavTTW1M4H5GRZYqPwNLYr2QT7MH5Y6uQouHfEdk6TfSN7Q1FhXbB9XTGGKEmrxSBxMej",
  "key47": "2aNo5emdKqdF5JYfmyjWrnGWRN45kGJRfP43gyotan8QWA92bh3i9QB8nvYwDpiYBzZgMsQxWVsEa4CDHYfkpCxP",
  "key48": "5Qjs4aYcNVYNUZjWYwAdzarc1tgQPKstnxA6wUAbebtViUqWVnUiq7w5dWvfBmRDf96do73bnmZJYJ2CvtQXXSx",
  "key49": "wKeWHUafRgeKpchkDnanfquUYC9L2TsYSZhcFvNT4rLY1rGexFTiXe3o1AZTw7CFmD7G7kWzfm8StybQEzcLJMW"
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
