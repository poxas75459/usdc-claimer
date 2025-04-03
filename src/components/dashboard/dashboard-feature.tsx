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
    "5Dr1yHGrCAAZvyWCkcEPouR5EHVDzde7KpAxAzkES7AvmHysSaNdYmBp1mQcSerWTGEwBvSCbntdgwW6LhKU35v9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vzk6mBqhUhJNRgJDh7v5RXn2hM54c1yRaLzPKQ46EkVXY4VK688XnnaMPMPTNamzHi86LjG4H26yqQXESVPUVmM",
  "key1": "123Wvs3KRANUF6RCUTwgKGwQ64FgNykdvUbFkCFQd52fpZ3aJuGjKtmq6J14pfGMpM2jb7qbAyABQnEEoAzUqp3E",
  "key2": "5nVjbfKvm8aZJqgnPGXbKUSaN2mvnb5sJcFuKPKG2MX5o8NWenG15yju41cQzkjcv75V2kQpq9Nd3xZavWBS541o",
  "key3": "XmoiPVdLBUN88Z4zrHyE8pe4EE8DQSgbwtM8B2ta7Bf5tkHPCJ11w4J2ZQ6NiDuvDXEKQwYmRsHfSYAmnUKK5Gf",
  "key4": "5j5ZKV27rroeoEgqgaRXbsf4htPM9nKKmeWhqbNyBNjb1i9sLWM8L5cMUi73GeyHbDnmPzGeXSVBNd2bjK7UUGCd",
  "key5": "2Pe4DjdLR6WuRrqyQkwxZrKJ5ZR3Et188Fi7bRnxn37k9UafDRMDPGZKys1PaKFv7iEtAEV8FZQE9UPbZ1gdy2Ty",
  "key6": "5LNncKjBx2FS3UwgTjEU3XakruDviL3mQ8CNNztYSqxSbQFm7b6pnhm5khH6ZQNNq1YqJXTCoQ2dso3h4axEYsD1",
  "key7": "RwJJH9nGhGsyMvQ2w2B3pMHvvYG5dNxcgSqw5Dsu36qwhyJhbr37kouj4VYgxTG3MFAu3ixQNDL44vra3waQZrP",
  "key8": "QpbMPZGdX3A2WxMmzDQFY9sUfh7nWKQcrWpakipciSQH4BFVMkMCdH1RtSZrDGF3KchJEjeSfe4bbY8GdHxn5bw",
  "key9": "2R4NV6KLKDydGRAbRFpemEDUNujANBe1yBuxk3QRN1g5aYHxrMV8SB951xF8TsqgbKqXRZvmvcsYyBkHQjPgT7Cy",
  "key10": "3mdEkVBNp6WFLXq2tnxysnsePMEAeXR9rEqU2zg4gdEMFBEYzTJLwbRjhWcbrhKM3xtgSM6oNpJSBy3rhLmNBggf",
  "key11": "5hWg4vbK9WBD6XMmYCJKE88pPLinspMWDRmDZp2bRYWnNyWSz3vdsq4GRYSoCSu2pxzcytMhwa5bAvmTzHJykpPd",
  "key12": "TdUpqyxcjWYR1KJ4jnQ9bzQAGRZdxFuAA5DiB6Pdkw1hrpFjYoiT4A3bA6ntkX513bdLF3Lje5ydgEgHjGUMcS3",
  "key13": "4wViL5iXNZUSLrP1WBqQErZVzVuak53d2TAFKLuTqi9B4fqctetjfJy4MN8DSQZWJDa44qDtuyPK5GBkVcWob1w",
  "key14": "2GsFceqivCx2rAknfk6qxH1HB9XasU6iwUGZjHZZZ3SkTr4yKeXoN7xhGVjmpNbb229eAr1yGH1v1GtDpyJx6NVK",
  "key15": "3catKDhEPRQKM2ttEfsLBGEj7Hq3oWYDyWYerFBcz4QYS7W8q4sX1rbFCkYA1JgJbRMScWJBSQF2ZH9aMXGs6RAd",
  "key16": "4KwsTtbfuH323DsnE8gCfYUxGoPyBFJpa6xvSofwTwviQq6vmA5T9Wm6DTcxsJqe3ibDokTUG1miYUKAh9RByjdq",
  "key17": "3eVG9bgtcUh55t5h2AiCJfn8r2P3zyHfpU7xGQ98qJeqYAjwEM4FGLYTzLQCUxhXAp71PFWBDGujcfvdREzhjz56",
  "key18": "2DzjsAhv3NDQ1JuNDUjNGRpjMhx24gQgBYkSbMYMGzb4ZH7ECobbDBrLPBpFmwo9DRcfCzWdGUgkb1AsC43t9Svx",
  "key19": "5u3R7mKXLWp5SqoKtxUJD1NnFxLnG3f5cU78nn54svi4y3z4sfLCoDSBAUqLuSJjgbcwTpQxGQmP63QAPYBx7EZf",
  "key20": "5j9oAp1jD4DBC9TYKJHUtjcn7mMTtQKNLgPqbJbSwY1AAr72AghkxfVe79SGUtfLeDgmYVhNhJLQm4HpJ2AvcKES",
  "key21": "39ReTVGWsAQfmg6qYrgfnmMpwcHMuWm3WUjoaTp41NJ2BJuMWRV3UKuyxVCwRdBQGWrguR3h2Y5TAQTSPeSAeDjj",
  "key22": "4VHDDwHVk3mi4BEvWLXnXehDjiWDMwCrD3hyyxt5xSdJJHVzszfjucFj9aZGBhRetxKBwFDAxc8RUD2effjgGGy9",
  "key23": "5eZzjiu113w5eGJtYd8cLu599whanUWr7BcyopZW59hhP6gseWuFB39WYsCjA9DJz7JHfFw1JrmT6sMRbqkuGffQ",
  "key24": "F8Bg4nRXV5FyRsY6mgPDrrTn7Z7R7LCiLXuBZRpv5BMJoa5DLn55LeRjnrAmGHQ3SyBkfhBoaGPtbhCqH7Mw9b8",
  "key25": "4DNN4EXDCtAKsrTeBGdC5raisD3ui1dj2tjurGavRR17XG4QLR9GYAwSMmf8sxAAxPvkqTnwqKjgEVoVugfJNgre",
  "key26": "4gDiheDmGqqLpCPebuR8SyRAfcDHMkHGaP8kcYy86fGAGw3umhzRa2jBwDZNAnB7uJnmFhnNU9PzG9TuByDG6Ge8",
  "key27": "27RPk2XM6HmUcamupY3nVzSFpUeyv8ibwfaUAYVtUSiQpSqkZn5LN6yvhBdEkntz7uukWXvauw1rMibTuNXFArBT",
  "key28": "51ARz3ja3H4KqSc7dVcZAnwhnUSPBE3pwke6F2UwJJAx5wXaAYgrnFePkjwNwhqEdo5VPigDKKdiPLxGEuwCUFB",
  "key29": "5EXgsVYwrHm3aC1TS1dtpg3MgHzbWRDpFrKq8XFWx6YqS6kRh6GNeB7tnxT6YFGdDztHzqe4Joj7q8ZtkaQgDDB5",
  "key30": "5g4qVR6BwxVRxfoypiBPZgxPXBGtzkeLCaoCaS2SJaVGjqovv7nsJmReY2dYCAKskT6kG7XWzRZ3kXSELjpYKSEA",
  "key31": "3gw4TbunD2ehJsLerwZwevNGCQAe36HRJLZcxJvy15AjvUUPu7LxGLR5hs8zW9ahDT2kVnWAQ6J9MM4fnKAsBjes",
  "key32": "3q6ejYSZjkvRDGUdZGv7ARsnyp3TKoNPQd3YTT9VNAqBL6uxQRZeGXu38eZySbZi6hmR7TdurQvzcz8dQqRRPebZ",
  "key33": "irHrcR31hu6GEPZu99xx5qvSmfTgpUxjmx4jLgP3B4UgGfKw3aNRWtMpiKF6d51fSV67Psab3GtPurTLHnzZ25z",
  "key34": "5gxrWLVh4qTrr2bRrWFDzaTNz53qHqzQzf7fi9YhcStoqXng6CNpKZuBsMNuMMca5QvpK4FawASfEi4Z5Ku8Rvm1",
  "key35": "3diM35KotjAiq64kyG5L7C94derCvLt5L1a1S8ewa61Q9AR8u4RvZz2E1dTbfXrChf2qm9cS188HrHoCK1vjgzRp"
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
