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
    "nfKw2xjxSu9S3cb6w7jpTVWBQs52BgtJmrB4o81RrYwYq7kVUt5usJ3vVTQVf9tPKD45W4DQ8JHen5VZ4AzJdjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46JFYyv7rDeW16HcGHS8EQv8exFu9T6188qo4ADH3YvtzA6Dk2uBAaNs83NUyonN5kZb7VTZhxCR87vRX68tNWdH",
  "key1": "5tYHVhFnS9RNzXsfYCspUkainNMwyRRUUTjHZLQTnu1M1c2J1387k2NgAh1rpkqNwNoZdboyZJPAHfmyu43Tn8iw",
  "key2": "3kvCr1jLE5qc5roPbGjaNSjCZEYhSECeqVqrbokPHR1JY9Z7xkM2DdkKu6NkwX1c8aihj6tQVKdinYkZgCh9oEsj",
  "key3": "5cbzm7Gz5pCUkkrmByciEhkvCasLRwVHwS7Ax9AnjtpMKtiyP88GCkU2txPDC6uy8bFFGDUWGt3ZnYJr4WRCRPaz",
  "key4": "4djHxrAhXBHL4RpdakE57SQCdgvcXCsknXKfMxPhV6oRroK9YsTrjUBY6fNxaMbDkcLXoNcXFpPoE8XVWAgqbL27",
  "key5": "xBjHxcQVV6LD1b8k81XsDjvf5V5T1rjrwBcxsxTHEjvKZo7mJwXTc6eGefr4rpoJPA4vrZWNVMSHGhGFcGV6UPY",
  "key6": "2Lt9cgu2u84ft98RyQura29trWecDQQXEroKDBWRE9rjvxxLUVWdg5i4TUjrDW5PJjc5jHDavo3tCnx55ZAt91wm",
  "key7": "3Fq3qqJDnsRXv4yFRXjDTPXZPfsunXgDXkgkqQC5C7iSrG2xhmPnmKrqmuSWSh7UqVQHGP4h4PPexafpb63NDFM8",
  "key8": "46uGZUCMZtcsuMRYnMNrG2qbcnyzWqwRXdiJoEM3dqFG3T9P9SmtQKEBh2S9TaFCo888dhZWHEUnyxDngMhxX23q",
  "key9": "3eRR6jmARUNbs726PCaK77zsUnPUnV8dVuXhcFrCnNtfSZEAv2duCMWJc45EL6UaHg2fYeKdMrM8wadxDBY1HPjs",
  "key10": "4mjNGHhtHHEbMz8o8C8JKfs9c6j6ngbo1LdYi8yfgfMx42ERfd6PoKJWrCtusxf41HJs7X3vfcfdKV9dbv6zzTXq",
  "key11": "E7bTT4nrVEGD53PXZ4bir9U3nPssN8dkM7rSGyWwk4yntb4Mrp4aFGykiLovLBdvfC29KxLRm1dBsmhxx8EmEdP",
  "key12": "5BT4xhJ2SDLaEuxtVrHjvrbhsb21xRBdQKybxvYqJyKoyDDpnqzywQN2JETgo18H5qsPNJJBYJSJq2VGFrUQHm5i",
  "key13": "3KRcsrtYTV527oWYtCtTBp3XR5uU1cvHk71hm9gLkaEGvNy4gNZGRgFA28AodakeYKM98hy5vGDZqDgbVYJJNHHK",
  "key14": "2v1tpAe4Bv4vLmE2EK6m5vsp4ZDgKfi3NH6pN8QmprnRF3DLWtn4C1fAYxRpKbGC7DcyMrkngvQoVDAwqzt9asao",
  "key15": "3euRCBNfetnZPcRAUDbw5dCdKMkCgRNWAU4GFpcwoyF5wCafiBGUoUvEkdFPNuGBQjAgnUNjX7v7Ug2UhVZeEe72",
  "key16": "324HvZZsNKCkJXrSyfDYDEkg1xQvo1zfFPnbRnQPrRs44boyHXWiZ9YUoY3iTgpbRXV22AhgyrWoxfzzdvQcZpNf",
  "key17": "231cGS141qy597Dst8u5KeQP63th32k82QzEdWF5oU1viTNTM9sMPWf4ZCi9pMSpuTqEnHY1ZGfZrnezHkszNWeT",
  "key18": "4RxhY6VFkUZdXRYXUbGXU9yRua9biTFdXsCfZgNPNof6FjsVufPTbeTYUL4R3kMdbVaDh6GcTf3kKHyRREagwrKJ",
  "key19": "X4bhRbHHEr3g3Tzdhd9oaw454Fzvsb1b2druBe2AivGEnEoLVikzbrVBrQPdWY9nePH5mav6hLHsYoyFGCvJBVC",
  "key20": "63png8vLevSUZBG6cL4Qq3Z91tMfsaaLx311CCtp9Up9u7kNcr8PXw39KnX7DXhvMYHqBPhVFsb55xQF22pz4hgW",
  "key21": "5WA24jnGdcdbUJWVJuPp1X73zYMEEDxYxsFnEFEv6AvbwGYqDLRWqd8nfSUXrdLtJaqXjvTnNFNWj3CwbjAnnKtp",
  "key22": "3MTGi9mQtmiASVCvM4qLSvwDgKaXB7r8xsJQgoSq831ukoabP43CbrkiT5pQELhkREp8SBWxrhFmXJYUoLXYYY5v",
  "key23": "5vpDLTcJhDRRs722apMB3L583jTY3orJUK3BTYHfTTASFZiWRHrSbd1HEhLHbdik5C4UvSqPMVQwtr2mRVXqBhVC",
  "key24": "4mp55YWEAQNnHAohLaq1zDLWJdmeUD1km1uZ25CUAa1e8NXbv3PfcuWCQveS2dVQTkV8zGerjM7dyNs97bMRMXmj",
  "key25": "2FVuCBb2GK4348ySDd48ihkJxENwgn8KBzPg1YT3B1t5FJPwNmGLMGcCmGsURB2NPUXsiMRMu72ZCrYaui7a7KUr",
  "key26": "4mp5pkKKe5YgBy2NDR1AGH2Pebk2CMD7DwW4iFeZQ982wev7mgohX3VLECBSho6U6YfDA3DEp4aPEfuLbpPnUYBs",
  "key27": "iFPB2KAHaRe11v6U5kKC4qzL5F7jsYJEtMqYeWfLNJgv2hVCa3wofu8aXLwAWq17Ub6Hq7Ceu64D66ciP5LqBZL",
  "key28": "55QSPeFrCL6Ni2Qo94yVP8W7kBM1btp2yxLHeJeD62oD1e2R8hXBffUadDritk3WGR3j7GaYmy9tqdWEUFXfRxqp",
  "key29": "57ptdW2ju3RUaCUVeGXzZYQpV9BS6Qa9iDnJ4sHVwLuxmY9KqmynXPEF87KffKdxQuBQAdKGX89RWEgFix2gMu94",
  "key30": "5egz3djNicPRu8YAUUUJEFvuaFPimScZbh2qotJT4jyvmNadDwXqtcJDzimvVERqpaJT1EtDSHsAniR82YYCZm4W"
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
