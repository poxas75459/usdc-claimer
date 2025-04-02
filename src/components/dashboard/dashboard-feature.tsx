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
    "2TtkXeu9yEq3Pp7Esdwxqk81dHChrPuMMqtjv57US22erm3aXKuPeAfc3dM1FhceDXb2gMXwmn9MXJDyg7uiur9X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cG7cxHcRV7ThKZujisNT1Hcqj3EzEe4WqtewQ89CeReu4v2Q2g93nfWcRkpvNhba27uDALHyCJUtpJXREA4rUpt",
  "key1": "3gJD3f14Hn3j4MXTf6T2K114AwLk2My5zyRNZavwb6njMcKve8vgDS3pdXTQQE3A9a3BHyjydaX95cRg7xh56Tbi",
  "key2": "mbfQk3ZF7ykfWLDmHugAm8ByabX3jw26Y9Swo2iFHvyXQDBdWQ3QdyUe8cNQiqsTEVRaqyxouL1kBsTzW9F2Dhx",
  "key3": "4211eqx2YBzC6nDkhbapMbXpsCCot3vzjuoddAxXqTrS7gK9oMD7Sed7MQeKafMsbKitKGAWxgCRihWo5QCdxZ1u",
  "key4": "3V7BHkgFnxGNqFpBBJBnEAEofJ4fWNAG7fbYrHfHnaSnhTYA73YNqbrMW9jmWDr2RbaqJRj2XD57Su84AfFrxL8N",
  "key5": "2DXzoCYjR6yjMVxqsM5X6ZgezKenfY8RaZqMtBYiGLfKC1rjdY7SUKBv5GNKrXFqJJkRvbzQGrMtRwebCqH9ixjF",
  "key6": "4Wrn2Vare9MQs2fxzX1e9rBxbqdA7gakCz5zTCBYzyWn4754c1Mw9RLrHRPspkg2DfumpRdwyBVNvUW1MKQaa4LQ",
  "key7": "sWSxwvg9Gafe5pD3UuYs42jbJXGqsdEHMaWUeJSfZz2QHT3smK1S69aqY2aSTNNwacGUC1VZ4pqwJ3iumk8mZme",
  "key8": "3pYD5wdwSDMFaWvQMho493wfkBQSVdz5ZZMjf6tSQbgQAtZjCLwkASThdq55TMiRmkSMgcFXCaVidV3Fj4HTeSeX",
  "key9": "4VzYtYmXxrs9VVe4BVNVHoNzhYWd6KBBTUWYQKNPG7S8siYVpk9g5ko4HSLJGijyKWSFYXcZFcNVNVKmT5Mta8gw",
  "key10": "4QiGQ2dSzoJnNxjYYHhUVYU2VT8S4q45dAhm2fg6FTjn4ubyGfXoivNtRSHefATSAGdEBRvKmQFn2PvYZVD8sLB2",
  "key11": "YHxbRTdcp7tfRfniQC6NAaSSdmc5BqbZuNo1KeRmrEKLkDyhgZxNvmQLWWiG8cq5iS3iKV8v2ebrMZkBXemVZYJ",
  "key12": "2VhLDB8buFNaFXV2AhwgtaGTZUKB9S4efZ52Nn4Q74Ljpw1f6ms4qEVEMVUE3XZodwRhXLekzJHZJzsv5edTHDoH",
  "key13": "65AAxREeni8YA6NAyBVZ1Jty5qs9GpdHz3gSD1nfETFyhyz1j7JWH4Cekau3ALDbWgXfvune9C8GXn2nzbbHnLxk",
  "key14": "HYFQem7kkaz3ZbkzQoTVCCt8DoEJMXxnG5YanohnfP2BjmQprQKmvXAwes6kK9FvYfTTCMH61d1jyCgsNC25LAX",
  "key15": "3itPEEbdHqRB2fU6ou7MLU8cPHxw8KhDXdPCvexLXuS5TjikywpJAqne2o57i5zbRdfZ4S8i7825F4fQPwN9Bd7R",
  "key16": "5VZvGV47BJF6yAeaJFi4AwbRtL4cSswmS5qz2H7S2cZz1Ad6DXnepv717Dq54WG4eXX4B2Qum4xoPsikGYuDZirk",
  "key17": "3Pkvk1NwhH6t6jQvEMwJPb6ZMHKoYE4dcwNL216ChYNgdojsNa45Km3msp3DCUqCgRRqEo5BpGGcuMsyvd84cTpa",
  "key18": "yatK9W9rHGGtaewccKZ4sCK5d1XUySSzpjDcgoSUrfDUg9EtkEaCXn67fxa9hQkVkysxRZtxQdmn2GJbhPFRQNV",
  "key19": "5kArv5NPBai8scc9hFYzM8xKK3sfVQpUj2eSdqMH6hSaZPGdMBk1WPtmKNSfUL3gmkwb3q4GDy4wSDTsfGeSGYvx",
  "key20": "3GNU57z8pC9kJ3yzXp9hbaoHQYMxythLM9Qr4bLyEG7KkdFgCZM7MdeDWzZMeAaUTV3DhjeoRhPv85PHV1pM2qt1",
  "key21": "2mw73TfLiEdCSER9P6bXo2AeqqBwnYweHGCREXHvozJKnLEqvZbDanMf7jRtksSHFKFGP3CDReqxi1AssakFGqgk",
  "key22": "4mW4cbzyMjFfBAQe6z5aQ55fSb8TryMA6vjjBpVSntNbD5ukGsfkFrRuzvC9W1UTbt5KYk99t4TutrtpHbsw8FmT",
  "key23": "3gkQcjCuFGWcHwRgF8RFR6emxoUkSvNjQKtQJ49PbJS5hLzqYHnAqDUCE2ArDhMRNegrDbiLCmJZhn2AXqcSQdLM",
  "key24": "3yMcJH89o6942xzQr9H7DVYjuGJuGAW3dsxepoaAUDnwwj2kis1asY61V42FE4HGBJea8uHdjo7GVoriks8ZFyS2",
  "key25": "3Q1JRaffazw4ed2X46TuNcMFgqswECPLXkt95gxFSsFnHY8gmhShfnWsPWyWNm65syifPobWobvkY4RnySD1iLaD",
  "key26": "wLS8kHhDNfgWyhzDWr4MzGMa7cS5h9FvYd8LQ4BNuUFczMZw4TKicFLGsoE4o6grH8ASjCBRJ2RrkMFuYu2EmvW",
  "key27": "5hRUYnYRnKsnWNjcQtKYezWXkvDw5PPdXRBPaurJP1PVsVZfAVU66EpG7JTqHuzhQBoM1nCpMLtGe7bj5GqocAP8",
  "key28": "35kaisxo1YLXqcDX8bRpQJn6oLC8U51wqf4ddi8GQbfH9YyiVY93rLGWcvCzczGu1A3eUbfficA9XsTv353LxtsK",
  "key29": "3WdYiCTWkrWUow6ZDcMpoGeadwsoVjQQ19zWxToapxqmPskJVPqhFyEpg99LWPgEY9SjE3K9b584AF7FJLFhJo4c",
  "key30": "3NTFvQizHxGeAxj3hg7EXFiNzTdoAVApxB3Jrz6kKNtenvzsuT8wCiaqvRMXuAcwoSuUkBeYMoW1h2ht55sjwGHb",
  "key31": "5svinSKZE3SMkfPzV6xb4DZzgah5rrSw7mz2u8dP47pNKnxWDPAviMqEkiMDgVgETjh1XVsweov2LH82XiNaExvt",
  "key32": "2y6fXLrs2qUxNfXZkexbiHbu1JAAB8SxCfyoj73ZvLFVKR9oY6CDoFscVYmJjq6xsqdktQsWaRpzxpXcPqFN8yRf",
  "key33": "hspDoFGN5h6BDiHgd7J6nuw5DKfD6XPzRweUtnqbzK2BhqiZ8DBFAggjpwkcpKL9yTUpywAQNUHZ25RfW7y7o7c"
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
