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
    "657nsyAPws75qHLj6inDjV6Su3gVqHi7EpQ8fAb99Wwnn45drir9DYjS3kN7Mw6Qs3xxmDmcafuREvLiNzPvQbNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BK8TfrvxEJ4bB6GekuXUwQM86H55frEfyivnFwQeYTPRqYsGu7yRGUZRpcSqSXUFPjoHw6QZJJqM5sGnVAMETmm",
  "key1": "5zxRnrraEmmihbF1aTezEi5ntEruVUqy77ftk8uqWiTaEFjAzXHFdmHCxhDd7dd7vCvJFVbpPfVufUHkme5QYtpQ",
  "key2": "63jn2pFS1p4zDXFZS6jFcQfNMJSjKhmHTao27vHg3QtxKuirZxYEriomya2VsGboZFsLxsqzT9qjSD192ajN4ETt",
  "key3": "jRrY4xkEQMLqqbDHFtZhhWktJScEVaAsyC6RDN5hC2wVwoGNJ845yPre9e4bgLGqo4ePJqx3afo497xQG6wYjcg",
  "key4": "3ZGWqsb78A1r7N3wcufp7GmvX6bDW2ZwWnfWsbxapDMaDGPfQYLYGkjXfa3Mxxp3L8RJ8ruaZdDZx3xRzM7n5i61",
  "key5": "5SQCM3xJmrUKvgVCB73gktVDehKbRMobSZdmKQEX5WtCFNCWzMqfJPJ54vLJbnGgX8JNHK9mowyJNtX11p9zqhXE",
  "key6": "Yj9ZXNXJjJgyFhCsL3oc961Nkjm9RsrTMCAW7qqtPuYH75gZdotRJ5b2tYg79ks2sAGiJLc12iHhrhzA6UGowJC",
  "key7": "2eJLnWGgVR4oC9gd6UBJaNx9zXi6PjCvA4ZWTAavc1H5bwmSAYyZAAwoyYjJfccefKp2BmRijt7i8pAKVDefg3jU",
  "key8": "3knHgGEGHa171ZSLX9gYxFeqTRfCfrkD4GfcpnSLr2vrpSffiFq8mMrB1xzuzLhtcbpPoHKfY149sDNPF9V9D38j",
  "key9": "3YBJZJxcSXGnobPDy9mLgKKUsSvkpDtZg6PGonU8TNdiPKtq1Sf5cyBjXGff4RqxDibtghbYmDPNKXbTMAobpV94",
  "key10": "634DynfQ8Undv4NPSJFbitkEft1cL9hBk32VPzJyp9QjnaZuon3ypnR47p6UoTLPcpyU8Mf1sGKmPizknmJpMbjf",
  "key11": "5BqV8YTMJn7buvN1LHncLHYdC21CWMpph2y9K3f9bLNq4LBapohmuPb9JeBqzB9Cwdq2vKPSMersc377eEHxwNkX",
  "key12": "261qTFK7rYBbQdFAdANZZpjikkxKRk2zZefzJYjNKgPfyeLnjhmUKEZJArQEkgiJLfJthQeMWk2u4R83MSgKYAsf",
  "key13": "36CVVv6jZmdsuadvjUGWhfoJsHqatL6BYzvdNtauHqRzPxTijZn2HErgoESas6QiKa4vm8mDhAp9wL5S5yKnQ7nK",
  "key14": "2Po83ArYjb75mZdojYnTrAEpafjfWZDFp7Uj56LWF7CMVXwn9rYxV42RmU9iWvg1JGfd4fm6ikbMK9adZUkXopss",
  "key15": "56cqj9sYZKwYDaKuHvsTVX9FaZ3GjaRYM6S8M5LEbb7XmZAqUU8oRFMDu1mqFfYedyKCqKt4ukFASrXBfNbNgryB",
  "key16": "WP3EJ4vPXrG5oEEwXGmzkdYThK4LEmnqahBrWkv2HF6RzXVwyykU6rCkLsYkpNUqW5G4abMRsgcoSJjJWJHYVL3",
  "key17": "2MV4HowVPgEXVmzo8mqj46VhD7V3gvKy1MWv3DecYoJLpP44JnX4Ya2eZC8t6wqzw3TjuqqS1nx9HJ4fButbbUeH",
  "key18": "4xuct4tsqWYowARiLxK7Jtw7YhmgioSVZADvyuh6Emk1ggrRhwK3jij7ESGJapz2igYfgjz1xZvZ8RUbonAcXGmM",
  "key19": "4Zvvfn2mpfEHTxJmEEKRUMRsK1TM9GFGvHMpCcwFWUGSvjdTgKgofovTshtWLMCEAsqqczN3eZ7KX4gqXJN9rh5j",
  "key20": "5JA564mRamy1uQhfaQMYRiwQeNmzCcieSqEo9X9toU1czLSuHNNnfqU2unrEDP3Yw4cbgm3hNi7Taye8aCoz6FCB",
  "key21": "2ry1GppfH4nkXAE6rQknyscSfyNvsr6fQXB6R7aWPfdeSQ1zoHzUAsucqDebgQWa3iKdEPkTUoBPdd9gQ4QQLDLQ",
  "key22": "5tiE3DtModdWZxiZsk1SCAP1rZ7ad7E2rioFkVg95rxL1PGowHPyndSc2y17FdEnXWVBD6EbiKy9p4rKC3nDaXgT",
  "key23": "38TtMWTHn2sRG3Dk6LAEHDT665ze2G1LPwoCmakAdpfuGy4rhb4eh9y7KVjuGB9coAeEUy4CMqGaEhpBhCRYvKUZ",
  "key24": "4g7Ax44mCd4xuAFtxSMUVMiAXKfowtFcCuViEJv8uUHPRapjYbBfnNpJXmpKp9dg8gegKNAMTbT5Aik4RNsvLEyW",
  "key25": "2gsaJGBgXdijEWBLSpmE3pJcaa2G4FEo5L4K6bnVteTNmf34t3pWykifENJGDmMHMHxrSqaDicGiQzFR17zQF4T",
  "key26": "66fcLYNqmqsNjtfS9d1BN67vywcGGLmchDjbxmeevUYPfjGndEpXqmb56uX9SLPf6KifvgPKt33cS2EcLvZFp7aw",
  "key27": "3oSguWnU6vXKQ5mVvVPLt78sRTZXjKgmwYsmfnoqZJXVhbJLMxPGQBcEQ4p9pjjzjnCkNbT6NXoFhwzxjKiHgfYH",
  "key28": "56Vc9U3KRok3xoY4dVai9vFEKoTM5tbJmJdzfEK7EqmJQoYsjV65jPXRzEuwjxmmsmboyXxWhTDfKJ7wt1x1KWcE",
  "key29": "2sNcBppYrQzgER4qRktXYNThd1oNwahDZ2GhLhy4sMwF3Jnh7FcEaDZDT7xa7csghcL5yXhMUgvEbFW9nZmEjLuY",
  "key30": "4ac3VBByAr2t6e7j3WS963EKyqLJkE4byAiAYGQPuEY9AQKijoa3pbYLDvZTA7tz4pixZDasB6z48bgG6SQnXS7",
  "key31": "hsNXVzKZ43WayKCKy4MebSYpRswscKuiXq8pJkJpLLFfcuq2ewgApjbYsavVqcALhrjbMCv38Cv2AdVfJLGuumd",
  "key32": "44jHgkYobwpVUymi5TT8Jv1QUyToNqx5BsTa3gBw6pX7AsjkXLv9Y57iQkZaKmk4ci2vg2xhKNuMLPbAfg7GhaLb",
  "key33": "3thKzrts625DjAHKZxNffx6YQmhmnSwk4jXYk7FBnP8vNUdwR6Wi44LHvaoKATzyjaHDmVvTNo8dWujCcRDoRFqH",
  "key34": "nuDLEbzyt8WQg2sdDJB2p5NuiRPtE7bwUETf66RtUYTpadoNxp3uDowvi6CAYqmEPB2E6666eaZM7g1hRKNb7dJ",
  "key35": "3trLbGej8pxV6bfwmVMSNJaasAc8hpt22fymzmTcMdjq37xdbg3kiE52PEVsEBQqwPu2xo5hbaQNAzQaeqEUB68n",
  "key36": "3zimtwkB4o23w9JxhRsMvmmq2ZavCYdLK73ugigXefFCpo6ixpCAQN45kXg1LbY6CnWyAMxcBRcoLWnChcXMq6Jb",
  "key37": "5D66us1Ufd8AaBBoxgGE3MNjo23fvJzET1nCx73xLvMpv39bMenAFFcBR8p3NXj8KW4WE4aBUwSD1x5sVRSCRY2S",
  "key38": "5nuZ59b2vc4n3BgiJjxdaBFAyT5KKc9MGd64WHKYSSMGjmKwXC9HDWYWuhhR21ywqJatK1V4xYK5T7SrdRdaLBTg",
  "key39": "2zWogp2yF3bM2FodqHLDBXWh2Rq4WAnN7mw6t1gLYcqdMeiHLnmnUn7udKfT8KLGs2JN5KSR974RUEoB51LaqT1Q",
  "key40": "4M3UUeEDxGijRkoSmEFiGF2tUtNc6JsgzNQEZzdmHa3VJgH9nadyJgDQmcG6wzmkCwoLJkjqichCEYUpMMaZAS7S",
  "key41": "4XbRh6WFJjBt5Upu4pEdiSJiX7ek1CCMzcecvog9XE9CboUHUehmDFtnp8ebe8PgisKBythjmenUdbp6n613LAkh"
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
