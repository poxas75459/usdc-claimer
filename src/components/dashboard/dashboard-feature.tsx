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
    "33cQRnZgUEnABm9tARNECpxCR9jydtnqVCVrEqPU8Nus6BdTnZ9r2KdqJjJQKTtoHRZVox6ntDEFXvRkx1dTB2q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HHKKeTiXF6piY4S8UB81j12JwHwCkmhNabRhJn8dCtZ5aA1N2TKqb8qvv9JP7eKxTmeTNEN9VMec2o5CfKYwaj8",
  "key1": "4Wn6yxJDeHNAmqdGKq8SW9qSPpxGcJVwXuh6PM5qAAmsM7ZPN4pg47QwWcAHJbXJQKBsrjG1yZjMSrDNLdWgFeWC",
  "key2": "aGw2Tq4Cy1UQ3ykw6dRurmcsguFEjA96ocWCMi53dhMMFNUvauK4eZ9rbZYJd5vXdiayZqcHR3b8WpzMbiSrWpp",
  "key3": "3jZJRCTSr5rWGhmUnpjwJqkFSRacgHsvB6aTSeE1bQouTs5Dm2qmaQDzVh2fszQkKYs7UbuCKtRoxaweFLPpQtXZ",
  "key4": "4U7X4msasAis6NDtvPP41Lt7VRMjS1Sp5RXMR9VwcVFFxsFUSXkBqRVnX4rQBUxqfnp3VvhSCy4dT1gfSnH4G9cs",
  "key5": "naxy4aKywDon9RxiudDThUekG5tmQrXe9VVqBu7qeGqrPHCbWdFMuruRBNuU4FRt5EzFnhTPCnVQYmNAAGNSX9C",
  "key6": "3fzhWvf6CTdjoc6MQonh7Mbw6SvSeYPyv8DfF3QhJgws8Pj4nrnK73MJVaQJSp8Mv4rDrkDPWyAJG28AAKVHcJjF",
  "key7": "4yDW9pVRUSKYpLmSDN5j2VxFqadGY7gmn2RG9V8Ak2BspjE5pdkaQSu9hUuyxjgbBpmKEJZGY5FnRbcEUg4sD3x6",
  "key8": "3cS2rB9Cm3JqfHXpeVMbew5XZnGJFZ2PA7PiGSstdzbygiPpitQifHTQNZ4mPfpm1ta1VBdSYP5nKKb9ubpu8yWB",
  "key9": "2DmAmfCNiAyHLJ3d24UPu2jiKEMe25twcPS9DnJHh961SSNRAVh7McL7AZtxygu3FfgLTdZrJTYor9Gto6wvJsNr",
  "key10": "4RcxuCMLHYbMqZoZegKWZFcSoeU78EwwPNneUgdmUR5rEgq3U3DM9n5SBhnBFPvLziRwDt5BekWiUQTHgz3b3RFg",
  "key11": "4XDe2STRqEodB6psd5krpswR96w4tBUGcQJXCpZUEpXRJe45B92Bv3tC74yYNxrypEzKeacXjgAi6ZbiAjFAfY1o",
  "key12": "4H1MJuYFyvYNvcLdepzva4EHN5ZaamsWX75sxRnHNVZr8WW2RLBunKgZCPJRNhf4LEeDqeCuDa4uTCPSRNhiD9pd",
  "key13": "Ev61iCFFcB4Lvy9psFjJ52CSrZVzg4gE1qoktwffGEgJcyxXMut4Ys93SdUYhvWA8jnKSSWizKND4d8ZHWeaujy",
  "key14": "4dxPBMFUGvgTY7c1yMW2v2V2jauyr8DEywjknFCBEKizXpqGCoknPmeKey229AS8RKA2myyRZv1X1umnJHPMq3Do",
  "key15": "5hPn7UfiAxUM81tSAkGgMSm81HM2RATmHc96FFzKdvb8vdxmdyeAgVbcm4mijidgSoVE9zNdZ9SszeAoocENvnai",
  "key16": "3GfR343NoA5PskFYJQ7e5zVQEMGskAdigXRzCkmD1c72KWVXDYSFQwNQAfNSw3FfT54nhcTJPVreGW1815poRhYK",
  "key17": "3SyQonzCL2BAzasT1CAAn26UiCangxz62rmUNSKEzktmDkMT5keD5kYWBCHd3xXN34HWMN2km4wTmcbWZPeN87iu",
  "key18": "tPkTpvW6UNmYaK6SoQtNyBzjQF5qXwf1Yys7U4ZZK5mSDCTQJkNuFxfQNrxmvg9k6fj5UbS3pjQhNfoHLoqDDdL",
  "key19": "35nN1YtMwMB2VYDn8kwa7GTKbe6H3bCrxKCobYiG7sMg5xPeZRtWVEWpCgF2iCD2u9uk1VEBEL21v5vBYWqcYJ9n",
  "key20": "4BKcKj1RVutZbWzXrFmUu3ceVXF6U7RCZusxyEbFAu53ybTXPCjp98zxdf9hYpr3vMJHyn1tFsqaVwPd2LrKjf9h",
  "key21": "42iPbQVsgyamznmf3e6CgkHj3mqpWT41gyKx973pNA5o5H2tUqVXW7waSDWs7jboX4L8K1B2Sah6EFuWjKYuLWcj",
  "key22": "4pzR4f16vYqtWiXA6YbQNcoEcUwMKPDop4Gyoinn3HbnWWeNwaFZNqx3qjTE1WW7v1gNzy7GV1gRWVYLjQS9Hzzd",
  "key23": "H9M6ibrrrMFLyxCkUqgWeJz6LNLkBhrPh3dL56UV1aBXcyD7ZoNUptQBhJ3Lv8HDWFLdT6gCFm292EhTQFcG77u",
  "key24": "4F5BgeEyyDi4BroU49yC3fCQwXFoSjwgGHQX2o6e33W67dVwYFhAHp9yq1HBWmspRU7GZj3XtJTpvSKtj7xEbW9J",
  "key25": "4p5ZhGq6d8pXqjxu7xh6nqSi9ofAfjvXXpxDduyKQzGk8aVhsxNYJc9f3s58DHNzCK85T2QaA5P6mBypsD2fFChe",
  "key26": "2zj4sXmfHQhofjR2SBCbBGafuzsVEW4ybdALByVrRSCd58qWwqAbru88GTHt1VGvhMc2TyPj62QDhC3j5osymnHm",
  "key27": "2nx1YmGvc9pQEhR62j6gPhPriX2NZ7vRDrsUgD5c3EVd4TmEJBUreeqsbKuF64uX64HsUrrk3VmC4QmdbsB4kUnx",
  "key28": "2CCDZv8HA8ba7KJLeFJh7Vmry5v5yzBMsp7fTNZe2SzXLukj847oSfKa3pmnk5eyLkNnAGLx6SJefnQKEMXN4qX3",
  "key29": "ShTDW3G6cHrvo9VvXoh8Qc8sbEwxm1HKbq7jRvVxBzcVvg5wWVySXLPZD8LshZFfhCi8BDDE628jZUwQM3dKByY",
  "key30": "3jbyLy5gM3QeRcexiSwo66S93pmBuTMa7BNYAj3v4JBFmUoNuvixmRfFD5mQ2rm6JBi8fB1KpHHkW4JLuehha6YH",
  "key31": "2oTMdayPiwQvczHEKJ6KiFAuv1GXue3ZBU7oefpGPZDYTCXrC79SA9U6YBeNhSdfHFagcfde496xN5Lb69f8vQJY",
  "key32": "3RXF5kzijp3qVv7zhEVDjqsae9Cv1fApwHcsw9ZQv2WHqm3zquQrjd5cctnPVYL8vWb3stvVMKku2ouTGHLKgH2d",
  "key33": "4Y3B9WbsE8JnvEWnvL6wLXnWPJsZC1x8Zyoe44d5NwrrZS6pkKBfAaHp2UmZPqTJr8unmTBbjMKo9eqNQNQXnm7Q",
  "key34": "4S3DGBhuo6uJse452NGyMmnTezRrJW7EZVhGBgezarfgh3wYYuTcHbUkU6NXU5VvyhW8pWbNVdA9tCSYLdPx31Hg",
  "key35": "2goLxFoqPeNq49RVUt7VunMWcKbzVXqysjvZCtQaSZXeBnjbdGuwqxhDdC5DDMZfQk1LG7hYkospBXckLYSwEBDi",
  "key36": "4DrrZ4C1sxtNGPE1ZVKPVyUFmw2TwJjbp5JwouXUdJH6uXWw9M2o29Kh17f5yiqLSr1z6mZhAahgbtTH6zxTFZ7L",
  "key37": "54pEBpeftsvnoPnBPAFLFL6SxTLCyyFgkLeSGa95sTQcaxXt3hbDJuMYwZdoRTn7LiBbbRKrd4MELRWPPnPSKEYf",
  "key38": "2eUVx42EeKEXPNNKbhPP1QGgyMyafzmSiWL29puUQMEXstKCx3BTHa1roh8TBA4Vi5mBRymDALrF2nao9CuxDinY",
  "key39": "nGDGF6Soyp6YGeryADyPj9zPCm7AHFVC6LbUbvVickfrkzMZTiJL9yzEe8joGoa2Bsh9RxEP1Da4sDqZPDbfX4E",
  "key40": "2vuvBjtC5nEbgoBhT58WufbpTEggAe18p3PPe1pvpxMCKUW24kKCsKKD4zj7UKNckU4XxbE3zStnmF6NP8vAmN4S",
  "key41": "Fn4o3g7jsqrdyoAkkiibJ6V3PARe9XvTVkkFV65UM54eaLgHTtAggXChK3ti6ESdiDhrpLYjiZubkCNE6YSPJj9",
  "key42": "2LiNRbPK7L4TyReZzox3qR1jtnhDzZTJ6frVNbbpsUTLu7LekPVgnHn8qT2Zcy3q56WSCUWoJGWCiGZngWBqpHrZ"
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
