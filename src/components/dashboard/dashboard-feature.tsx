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
    "3n8ZVVoVaBWE7tMsuDH7RfVgtsnNY7TLgKjogBpNDd1idkL7DJRSKcFmJs1zYghAycykd5ahu4qxoZddczWDSZan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w93PxtBRVSS7DmCUxU5Y1gcYQAPWGtbCQLMNhTHJpKX6sucRujkRcfwsbFfizMGfazyE7ASAxFGNre2upHbMPsV",
  "key1": "5ou9fTUuiyVbu7zVvzWqrmJS5vWJRMg8sMvhTTojPzDboBhyirsvQYb9aD6LfBjuL13FzYJcMMAH3VTeHGRtFdmm",
  "key2": "2P99gSwUFAFRTQe5mWuRJQLMPsmsqGA95BBSv6X2tavZsqsc8N9iVPqRwJUGzJKeu9S2Y9uZ6feQ6KizdNpnbeMV",
  "key3": "4nFzqFp2k2hVq2JVJQYsz3qP3nvFCWN8r35qqWbGkwvwZCK4NiHN3krdZGHuMDknZGuzHEQRXC3YqoEHVu7aVt9f",
  "key4": "N97VnyyLGvZJuns1UAXjAwVRtK99mx3rUAy3hMxihFq3Nt25DtBod1XcxgtxqzEBmZTw2KsfPMTHXz2f5ycsSWj",
  "key5": "B5T64G7B2f6LykQgfPs7mcqputAGgR2NqfKhYcLK6XibbvaStfcUA3zzih19gZ2wAeBppvUiFbwe4ytXGVqjpnt",
  "key6": "2icxk2ucHApodw8zz4iH2WzFpwGTfbDhvSpTecWPNCsdmX4MuQk6UT9qH6hsXeRgaRYYsYPycxQWrEK5UCBJzzc7",
  "key7": "3KAakcUo4o7ZC51xZFCFT3jZNMgPB6MbTFaCD2gX7unyPpaYJe2bfcpCz15p6jrdyNe7hXu8gnLHSpR2GW7HemDu",
  "key8": "2UC3f8Jj9Rf8sM5TcyJS2auGdCQTi8Z2TjMmTtAJm37rKeo9rz9CnUfmBqixJb8jpb9WemJiVkKNf4u159PjwmoQ",
  "key9": "2nfL5yFyJLGeecnFBbGGk2Ukg2QuN2KpynzJDyKJEA5upDDsfifECFuTrHPfZAewyRrUwYzR4bDLyxKVpJ6dAeBi",
  "key10": "5J2BEMchBPQo4jmE4kn7ndo4g5nyv18UERWQVjhsD8sXzvRQNTdxJDXWnifnuTKi7Npg25u7PoaphA3XGyhU6umr",
  "key11": "2KNXViU2XEKAor8DuKpHTdYACANsZ28aYDrKncixtJfNnRvXhk8fRtBvcCJKXB1QYaYyDmUaxbV69JBaUWn6q5gn",
  "key12": "36esvRuPiyd5QLt2uJDvfoWuD4owdyQYYHz7EASEzCno1uiXjbpQCfmTFb6aQx2z9VivVhJeR5saxnqNAadrir43",
  "key13": "gHP4C557CS5eMQjpd7q6H9KQRo6W9x2gfSsMRhXhevuyKDjbbx26PXm98tiWtmeJ9aoVj7SDQdZJdd1tEUS4jvq",
  "key14": "2i31Se5dHugRrxBSa1ikM5NszxabrrAAp7rQw3sGatqzPkPxLtPe9xbueb6RbsZGcfsRkZHek88DUZEADEM548p4",
  "key15": "4aoKV2bHBJbTzgiCfXWhGXEg4Xkscv36syQoE9ZGDBSs6cfCZE9sCUmmhCN7tJky6mJiCZXhNGhmagXwiLVyZnzT",
  "key16": "3Z3zyFGZXHPzKubmbYwRYFnhRb7niZaPd3qt82GUnGJbsDXCpUV2hs2hquXoQR612aPXG3V5GtCY18gBWFUQPe2g",
  "key17": "52BYnkeuhTkeenqqtZtbeRzEkGHwLD1Ajqud5e6BELCLbMEYtPeX9T4pybmtR1o6CD5ei4muXif725Ad23MCCgHn",
  "key18": "61NYyb869kfEAgZxQqb8DZEWLKBWPqwAr95sz5Naagr1PaWs8UcuoJvA8oraggGBuyTasg3W1u9x4PySHADZ3Eqt",
  "key19": "MVLwKzuzmLRmnvGTYTLwUAzTmwQEAaZXUU14JJPiSdXbXFieUsaoUdxBYJbCGGRiEYoaeWwgCLK1T2EAWhxw9iT",
  "key20": "w3srhN2cPFFanRphpu2hf3vxWDf9ZH7FGBa4C3VNZpcyJvFjdbrLxBU9FFyNFgBj7agQFzjK8GDUWU8hKsmTjPC",
  "key21": "51UjhntMz5ZisLzQGJuieksAv6JrvkB9KofMA6Q2H4ropgUkkqCat6N3qqJnw6d3zitSYsvGrgZ21FVDUZu8s46x",
  "key22": "5q9FgZyi4Kh9TMWYeEphJPJYEYpi94WwaYENDV4EMpbqMPHB7VniWxpfFA2yPqNLnxA6k32qn7tEv9xPMTu1vky2",
  "key23": "4tEt5QofKf3pFVzGS7ovaTNQyHTZ6jj1oQjZ9fN7xLjfr78rm9TLEjtB78UfhncJWjD75j8hbvQhp2SPHSCwxfur",
  "key24": "63FwTD2RusN1HED3WFh2FXGfeYKoQPBYaBiNUKV6ZKz5eoeuB7Yt2sAeLtQV616xpqiTgPnfLsHgW1D4NXvnnfYo",
  "key25": "2BqDFFb7d6dnZF5xaKFgiXocPyFNXaTYL8xmfuoYceeUzPZj4DCDV3g4bcvyBJmfJxeGCtdxi3DS2oshgNgpfwyS",
  "key26": "2M6M6FS498uhv8GGYeuSwdezPeLJJjV2X9szj9Va6kUQpuGm6Frijt4GkVZi95ZaJgVh246PHu1VKoxx3UTxbyU1",
  "key27": "whZHfgALwMEpquEguc1YFAmdqKx4ki1V4eMrVnnQ8hi7fZMKXF833LSWviVisdSVWwRUJxJYUSX3kHYjSTuksQW",
  "key28": "2cwqeTRTGY6p21rT3fnobRGHsR2cBNKcLFug5P94VfKwM5aUBVCL2FGjcVcpPs8tkwfiDr4BqBhVabTCsCgmjdr5",
  "key29": "5MqBc73RzmFzgp9yr9EyocxwyNjgLa2oEvg58YfVKPU4obueopaAFwGwM4MbquUcE1FBdQC7XFvphnZ29AfYUVGg",
  "key30": "4GtTJWEVgEbqXzWiFm4LZU3bGvuV1r2gYC3XPNMqBVS5G4QQLJjN4pfTn8bCHY5xpC7pwVVSWn7YMzpRzYUoxseA",
  "key31": "5nYNvj8UhoTHV2kY9y9zn2KQeEaZdZaZM8naiSbk1vPTGGA6m9JqgFff6fiv6i3GaA2Z3TZ2znncG1bdmWGY8xsr",
  "key32": "3Yjix5FPZGjsWuB2425uQSNFoHsgofDusKwU1y12awRzapjywP4VfrTgXCnbc2R5M2qeeewVgpFgnpPp6aYCER9H",
  "key33": "bNYvv2gDeAtMinYFgfECMkyuTKTFgcyfCztfx6Pu8BYZUcA87HjyCVEuT9jptXksWL1RaqX9tPPsmdVixPcPGaK",
  "key34": "NLE5a5TA8DRUMR64CYEB8ttZJDj3RhMsWP2VkPBLuGGRZCjPynBS2J4b7iq45byLKP2ebhW55AFqziDnWGT6FCG",
  "key35": "xRt1KSVMkCAA2u29gYrvGF96vWHwnZwBYdUqCstwijfqRU8wj3xrdHv7HcQkJA3D7987RK7Js1dVr8yxujf161c",
  "key36": "5yfY1i1h7Uzi17LuTWqZyL3LKRxYxUufWqPPQBSbyYzUiZD3jnY7ttpufyvoUFsYZmPUEPW89NHHGduuKqK33o5e",
  "key37": "29cNQzUot2DcGigQABrS29wttYYHXRBFDbSzN3iaNc1J8wUCHsVjVENp3JzTasdweuFcgnRu4YN6YVopguEJj5Bn",
  "key38": "zeKfSWATa1AVdZMo4uQrnHAYxxYpAptGj2Qt9JYs9nmhosWFyQw8E2wKteTeCRjViWKQLvygxZtRJZvCx8fFEAA",
  "key39": "5Dw2jyqT3WcUoQ9TANDcoS5V6ZU7mwMzfBRDVTudNbU2xousv6jdngdUupE4srSgzcT1srw86UL3doYENn8kKvxn",
  "key40": "EP7rkJjjKfLpDVixz3Pw91XMoiRjkeE8C5q17UQW2LrqJykZahHY1TbzwDNV4hmLYEPU7hg71GR9jxu88sKxr4a",
  "key41": "23LF4p97i6aFMhHQUMRZsaRkDjb8i4e7hByHyeCiHtB65w7wrjxQb4dKN6YVhFFnKK8aTcArEzzt8X37xA2cLNgb"
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
