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
    "5UtzRzftQtmSfWPXZf44MVFBK1zEoEmhF5Yc3RiGqGLrpFwsUbnWrDd71UgreB19nKSjtV7uuNohu2UXKJznVdG9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vjWwHayK5R1msqxVXTZJdBjHVxqxtT3onj8s8hktGcPfDMBKbbqjSVtHiqtSPZDNaPnCrAcFkhvnAdXHjY9Puw9",
  "key1": "3R9pxRRmkwqXvoqnkML91YezhL5BpJu7YPikb2XWi87Q3woryjpWjKG9LhJTDHd6RhhiMLrCGCP7t7w6Bzp1RyT6",
  "key2": "5sFqRhTrdSugCrZQYHqr86yy6tM2bg8cwgDcDNT4qoyKo5DQxmxd4EgVpQmyDu8wGDnJgD1MgCoy23p7UkZjbJpw",
  "key3": "4X8mHs14SbQZwx95gt9PrPYaaV6jEi8Jj2VZXfRuvfYu2N2N9xmJY1yUvzvcLVC4ka2te5Lr7HPG1BSpNEFbmdy2",
  "key4": "423HSxGVPWFv441grcwiURaXqkFoJxM4ZaCB4kQPLRRo3ohTm7KywXSRurDG4sbqYroxJSpFc6ag5LNUWKEEif9V",
  "key5": "EHAFthnyFaxoz4L2uFsMEvJMEaDkEDfN7rVy4DTYQNJrGUA7zd7AACHJXbGYpTJ1Eu7SWxgx7z8BPm1hPsfNYEW",
  "key6": "64ZJQDcXYr6XiY1VSAitShX1bqWyxp5S23h6Ctn1d1uMyqep6i6nkLWCgQkfR9Ar25uy6jAbqSj48bvCkDdYcQbq",
  "key7": "WRSinxNTNvkknR2YyaTU1X4HYYnMzKintBRJAvrZNzr95yZKYDdahUf3moFXV9oxZVwcujPgMe48PH7Y1e3cPTx",
  "key8": "4SQWvS72F7qtGfQ21TgFMCQL6VS4Z1cNz3q4cwvFT7iLQhuWZp1V1fi2vayrL3yw4BwZ1reiyLBSwdk1zBk29F2W",
  "key9": "3A4pHcMpf2kAcy2toD9Hq7kF51aSduHhpEzMgkdksiPH16TXrgZDczHAZXaiEFXiJPuSKW2LvRKmTmQhn4HLtKaa",
  "key10": "4iz3Q4jnebWjKq41eHvzRso5Km2GTM3y6W3JafEdRryVnkZHnBZaMRyTFkF2XpYeS6UCbzp67kUmRF4et4pZwDwb",
  "key11": "3sujiQd97Ws8NfSfv9dF3yz7oqpbhBJcaDpxdq82fSzrpSdBNqNhiaivas9fmjUMa9Zi7Ygptjt2nhz9xp9BZx9N",
  "key12": "3bQaCLR42zRmPPfMMZk85yTG3mZJcZThv2fd9mzbunv8vdCe2kSJcPE77zX1V5F6UGYPDpjvBBRDY7XurpSSbwre",
  "key13": "594UcJQD9yikgJPoE39Mf25AtXQWELbvyeQoXdXZsU9URrfaK98cDeEhQv2Qb9Vmg4MM7NtswTCAyUScd42AZR8v",
  "key14": "5Hgs9i1cSNC4PkYDYFjCZYyFeLqK78pQpxffAJxBje3TmcRGqsaLzDdwXhSeicG2ta4wwfoviovanTGjGaHkzWVG",
  "key15": "2Xuyo6fMKUsXVv68u9FQiHpQgw2MDs42coK5ZRaLN4rJqKWtuNEvHxQ3WBB4scGvjbCz2XCMC9Axmxqfr44LcmXk",
  "key16": "qHFydbV1UMqwiwnV21hE9vhQMneqfBBH8AHgWFj8KCyZd9o62QZEdDUXnpCoyNeTEzXSJnvhobU2RPTcVKWvQTK",
  "key17": "3XNBXW53izPisnF54hobcnZoE7NA5sHPRgm9eSJpxany8shviuoBreQKfAkEVqwAvWnrbi8c3VMkYSdtAkxxMMDU",
  "key18": "SZHMxDVKTFnbnrkQ1TtijquZecXru5BV5WVjajGkyocV7nBQ6zzGDjLq62fCkXLJohoVZfAAMQmJQcLZeyMB2bR",
  "key19": "4wLYj9zzCCK7BmfntENFLGbW6LtfV4pPMvLDw7V3jEnMARrDquyySY5YhpsVqTQCb4V6LSML5jm6bXCcrgdnWif8",
  "key20": "5U1vvLiAG6DGLgCjzWkZTN4FoZBanKe3JG2YmiQStfbce7TV7aSsdCkgYZxJwqNusN2JrmdJ19ZkvN3qXE12A24L",
  "key21": "HK4w4dqr3h3rb4RZ5QrHkaa56afZssJx1Ya3BQoE7VRLm34MWj6VcnEeSYJUz7gBsjZm9ba4GdAsxYcqAsu2FPT",
  "key22": "4nMfN7vG9Bc778QyzLRon6L45QfzMwmL5ujq1MA96nHUNj2n8qsV2KnhDjiDP9w1V38hLmFBGDHQmrbSMRc4q6EG",
  "key23": "PPZvimYF4sjEe1B4Ftg1spo3QPBbRpMZazj3Bwfpwtr2mcNQkW3TA8ZmM5ZRFzG1mvE7smipeEzpGiDsyUix1FW",
  "key24": "CANSgWWncBrwek7Gsz8H6T7RpRq7kSZbX34kpZjuWGD1FpwcsPuwCmin2o88gQKswDEDtGUREyR6iaV6c8gqugG",
  "key25": "4ktTcjrsGKNzMLnn8CPJjNAoyrscTqAACHyySnZo2N9WaUtaf3vw3CKwiatmC1BNX9sZGLLhLs65gnFHzwfxvbk8",
  "key26": "2nFsVfHgbJkuKxvE562nFApQZus2oMzjAWUCaGBb6Pq5o9Lx5hvSjSTc1mbdkmACEsiTu5kiXxsSMzTokYMxZjyQ",
  "key27": "2SdgLo8Ua4o6FUQksDJkXzhxmfspQ4AXSnQZTeZZPG7ion8oBG8PrSKzdU4ry795TpNNUi1fPVeFMrgcbVGoPNba",
  "key28": "4hUmWJwbem8jZXPLSfNp6iKrX54TvkDeKr5KP4QSP8fXCyT11Uk5QZWMgDA1iQQm9ApudRREGWL33zv8pbJL13DQ",
  "key29": "5Fwqbygx58dsa8UXQVvmPm25eiy16bxYkag1N9yt826zEuGiX9gDD9Lq3ey9UCYBxe2vsSBM97EMwFkqsAzztWq4",
  "key30": "jZ2ZdMQRoupzPcyuUNfETYNkxLx8QnaNKMAtjot1qQ5XZqU3qrZy8ANkQRjEQpH1QsPgy7uwxem4SAtzr4MkiTK",
  "key31": "2QrjbvaS3EbtsbdTBnNfioLs6bNuLHFn9oGCv2e69beSAXnrh3M4keCgacT2687FzV7fspGBXMEZcnTejtU4oRJK",
  "key32": "23pXZ34GnFF319iB9Ec3JPNiNrWfkNwNaXdWfNT8BqM7D9S52Vtre3J1Z3yw2B6gPtCZ2cjTujTX7vfBA1gPDTMu"
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
