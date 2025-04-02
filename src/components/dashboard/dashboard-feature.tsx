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
    "2VJ8A1zkpJRjAmznhHJ3rc5Sj1NBQHLGJnNKTVjhxEvFTCoyHKpQvDxNZSKZfiN6cD673ohjSP7qRev25bQ1vskc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kUeuDterXpBVR2UKLMMxDpeZahAm8v9CdeEzmEUT9iZpRdtbbPUJo3bmKQpm31b7r5xDVMABEgxjw5zH6i58A3g",
  "key1": "2uHX5GErNjJD3ZzDjNp9WjS97Li6Ef8xumHv9B8c5DaBAVzj6tC54V77BkDEpYhQi7rPTnCt3Jo7soex7Jy8jULn",
  "key2": "3JvZaYqiAXHTuSGW8eWtpDoKYHQJypiyuPzSZ3HZwEneDf3bB3ZhpGQoRDgn68vDNuTmG2y1YC8SvQDHRmVSht1d",
  "key3": "C94tjhqQwJmf14QryBBWmaSVzNmCAxtYdhgWKMj4A9K8NZpGca9KVuB79G91feZU4pUEezsBwe1e7URPNzvuFPg",
  "key4": "5rTYdxihXh15rH8sbjUvVQiidoCZxqoXFHEtJfPzyUAGogK9XHCi5VmkUCpep5ExKmTMS1hpUexM4V4SbRzgHpWe",
  "key5": "5rGSCExQYKkqCRmFUr4DZ4CQrDZC7ULWJwYsbGsitGogCirbkYvfTtJZCJ9nD2eqhh7gYmL1vk9qaDbsznxNVjP4",
  "key6": "22GiQK9Bkqbv34yavJSkRVFfb46SHBWxNiCQgxqx5785CQQgqJWopqq3dpxDiRZVnaPYmE63Vv1BEH6sejFmhex8",
  "key7": "2hffPtXm9SYnZAvrJ5XzRUS3FpVC1bk8g9Z5iAuaYvHjXgobdgcF3ykKDP3QuVDKnWH9quhezKtucdJ8mTmJbUSw",
  "key8": "5EoeGi2GCddNrib3LgYv98tEq1iKPR6ggDaqm2CgWX4GVCBtiB94G9wo4atAJemn6rKjSKwgoCPmndXfCGATLzd5",
  "key9": "bajqfBpkHJBNbTRL6NRcgFooEsAK8R2SnGhVoLpGfuXo6wYX4wJNrmtnY4Lkv1Y1bpe6mqXCVws7ySrWfhRe8C5",
  "key10": "45HdECs1pVkPj3tcRnofeabQ6CsACSvhVsVmmtUBz7evW39Vm2SFuEqMLvvEepVyNxgBSx563NAP9wt1BF4du3uB",
  "key11": "5YMbozwa6tr4Zn6GQjh4x5BKMRwPZgQpzrf2iDzk94yPcRDL7PYPpFJuCFzmg18ftxdLPafV1N5ip4FChuk3kKsk",
  "key12": "2dwHczAtd4V2KCpjqyVjXtzD32B1HyYcDY7vT6EsgjrindFUDtaG7YBae2geysrnbhJayuYmEqGcKkUymJVk9zmK",
  "key13": "2N5HZa3j8hRrMZ14ESW454wHVv2TJEQgHKmonQDv979rNCYsGJSqjmLMRFnvM6esBGvuD17ZLLpWu6eyQxeEnBXg",
  "key14": "Tywayhv3fxc2e5EvSZtTyi9e5JVG38mipVWYd64UASS1sdn7HUgra4HDUmi1cK59XbHuYuXWB1tqUZuW3NmN9eR",
  "key15": "MhBTBPDZq1VUEP86eSSz3PwJmv3WZprRb5yXDaHLhorht7QqoHdPEXGRbeSGqi714y5NuEux4RyBnAivrm6o6DU",
  "key16": "5t3MFUkUGC3CnE6WT6r8A8yPmj5vFWiDJSVRET7Pm1bXPy1ttW7BDjcTDKqkrARVqYXXi3pCvtxmYp5E4ohpA419",
  "key17": "RcZE3ZqZ7uf9w7SGo377uP55Qg6fmN751LZE3nuXT6MGXmLxUh9TBRdYWV6mei4cyH4W6kk2doFx3xHv6wS63FJ",
  "key18": "5YiRnLKd5iNMZH5dQ4Z3Uk9AJs1K2k4obPbSAvfdj3ZrA3EHMjL9smyWeTXe8Ye5MRgEtsiRf7hGpE2qZ9AtKA9F",
  "key19": "2KGpRa9wPRNAUSWQ8Ray1DHe2potx5Fo8wEviAhN8Ec4mq4ZiPZTwwNW6eJW7KNp7Gp5ruzELh27TYF35t1vQhFz",
  "key20": "4RLtC5FVJ2vxTvw5g9tW9HetycrDx3ZygyUrkgkiJQCXWiE6ySJPdW9GCNPBd4L4wNcyu4DRcMMnLLsCBBtAcwgb",
  "key21": "5dnBCNqCCo5FTWv8drAW3wM7ntm9SecAG5PidtCgBcfhD5KLX2rreFh5gecRhkrGoheY45ZmHJqpLPDyqqDgsieu",
  "key22": "3zzDrcV7QtYm8zZHgekv2JHCbJRVPNB56TrjABdJvaQxhBHpVJMnMJs6V4KkWtNGDx2Adxy84QVifsLHZqsUWwZs",
  "key23": "4PnRmC9zD5s37mxKvseLYKLq3ENs3JLvrmHH8YA3wq7BUCyMLsy1X9gwRHKv3CPzNWkuP812gzsWaeQxHBknaXJh",
  "key24": "3wxs5AW7o7fhGmj4fX7nECbAm389YNVeuL1uNodyKi5SmtezHAvmmPdgXRrpSNvx8yPT8GEhGeqsKq3qqfY2XZup",
  "key25": "vuY3M7GXsjrBbhUcucjCwKbGZFwUGnGWKaCCYA1w972eA81V5SvQWFDcdRiQLJr3iK32rHgW1ARWHxNrnoAaz7z",
  "key26": "5dArcyxMeNeSY31vUsN9mRpmykVTqah93AsFoiq5Yc7V3GWpcwUkJWGihTR2apwZGQ3p2QtVLb5hVCLxoB5421fK",
  "key27": "4AZDcMGVgHb23vzxe4SBhZcLEppNdVBW3WUsMNjxQshRnc8KWMSs1UDs1MazPEtq3gEbdh45o2GQjr5Vq7poEktp",
  "key28": "2VdyPy5fFdYutMYMiSXSRsktqEQKCsLV4bn6yAvqVEfS5CetYPF1RaLaz4XRfH4NarQTK3KF7TsCsHW9zyt227XS",
  "key29": "4xgJgeN4Ge3TGhTq8rwAJ6Km8ytJr8YRwi8g1rtqSnU5rgqbx8Uy49jDqN4ovcViySSv5rCwxVVr4ci4qoTV4U58",
  "key30": "4U4WxMZcQoFr2KVkh3BQA3H7US521tUkeSmPwKPKpyHCqfp9XygPoY4GWVAASHrNFFWY5Mr1TNUowNgRFshiVhms",
  "key31": "4SEZVAesBYNJma2pc2L6b7e32tUFtVRnQJh5jQct3wnm24U6StbjVs2bzftMqXdWdX6ntpgevkKPEcZydg2mEkM5",
  "key32": "EooggQdhTBPNSNbodFVRMQCfouhpuWo5QYxLUnGe72bmbiWQn8adhawXQNpgMqQJtbochycwPp9dKQgoSg5ixMZ",
  "key33": "2hnT6sJZjLWbQi55o4rBfPYr2x3tDMf4RAe12Muv6AeG4nPmNj7u83c6ueTUU1nxr7RArt6YcqPHfUUBmku5BhbB",
  "key34": "5dgbZ9pVHXjaBqeNEBwsdiJkfp8HSaLVfYe8SvyC83qdbWQp2rvPxBqPCxZkhCPcSGjhN9qE7oHZnFy7GpQmmngQ",
  "key35": "62dktdbtuoduLFdHWDDhyRqzzRBUYrCnJyHXD2b1FWf66raH4P8RHs3TK1FbWKdMKB3SunHCgQKJj1H8pqj2nXf2"
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
