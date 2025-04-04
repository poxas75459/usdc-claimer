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
    "5QERLJTRJvj5V6F4NCMye59ZCHwD2cPxi9xKBuj2Px9HpQDZGcmhWoyYuqqER57NFHuzbGQeejnaoeiYnvv5FA3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DjrDPYjy4eg2oerfCtEHfuJYpxntazbtCDVQkcoUreVLndHrYPjJ47g82MVoMixH37taMaWot4KvQ9oaYxMMh4d",
  "key1": "2AgpfapSJTWLWymDH8gqBobmmLmZR126rrzQsNMXMUGLJYgHN7MU5nQQoUdVjXGNsLCCDDwcW3Y7UXLJzxC7p9qy",
  "key2": "4153UMHH8ATYAcvJDQBYbDH536myLVQYRpWbHFyAAcWBKJipgwezx8XGyroH2j7mzLnNUxM8mWvmeRGq69KZF6pT",
  "key3": "4anDfLwDstTeBA2ychVpLU22joJ6y46VsqXKPGBaGvjMCkLCbdeTHFuXxp1ZNkLsErJbhGrJWJcnDQ2LeuHebkod",
  "key4": "2tHoWbdgyeXTvPtsbw8NDqGJaMxWhdrFZsQ7FSFM83Xctyq526q9y4oSDChyMq36bj3AHab8h4oSX9yGDAy47T2m",
  "key5": "mEFxNVR7Qde73amKV8yKgMbB9bwa6L6aj78Prf6YFa7R4z5fhm7DprK15GzqK5HYrpGSk3RTZ4ryWp6UzrsiVBz",
  "key6": "2anvKyRUuWgDuuchjkENoqkZ63hgtkDXRJ8DRdSfSGhymYUKajbbbeMF6oMRaM1GsyVsqjJ8x2paBomtvZArqzrG",
  "key7": "4XFL7mnDMEMgqA5nSQDjSyH9JTSJAXdnpBW7NZHXxA3P2nHLKPjhP1JVDEDWDf5bwSqeaFtY1H3HV9VkGKi2SvJq",
  "key8": "4ccQjbApUf4X8c3iVpVFTFAxEZ4Eqzk2oDdCbNWzMM4zJ38cZRhSwew7ShHuZogVVKPoVdtXPcGTwLgMRpW2wiBr",
  "key9": "3uBWJXU2YGHbM42sm9UhCzjbNoSoPe8WDh2zEt15RfxwNrP2CXhzCzvKitELkopP4aZYu56jHLhrDP23JZ9bbRds",
  "key10": "SnN89KY7gvBR6KzqGRVeWLDYjKeftbXXFx6UHe1eH6tSzpVPvbzCNh4Dc2sKsN1Fb3KWPMogBfvTQKhVLd7cNKT",
  "key11": "2SAiKwT9A3mjHujr1ge7RYyvuYv6KTEY3CFHK11RA3pZcxWzbiQ6hi5E36vA5thtvx68qTHZ8g28gDF8YuUpbJij",
  "key12": "2yxuR31XejS2Rcn7zA6RpJfHikoR3XofUbeZxDnpXX88rzva4rVRma67utD6E2dxKLY55TXBs7cDJNs5zKb6xYdm",
  "key13": "2oHjLFe3rF3cYtDQBTvhY4t1zPcBvuusRP9oA3Q118GFdqDaP5BggeKqr8kMeiFEA5FPXnF4trDkfhDnmVueLHZy",
  "key14": "4eiF1igCyCHeKW32wacmU1zhQnNkjqjJUB5gfmRMs1JTvU57Eeifs936sgj4n2xzHTkcbihsgcahSLewygYepBf1",
  "key15": "4FU5RchthkvoAfXPAqhzxmsqXHqLabbmEM7nEr42EeZW947KPhi7x8vuu7sio6yeWLJX4M7g58F7DQTtBrftvJNu",
  "key16": "4yhq5Fe3DXpWsUbYpLsNuTJjp15iH42pvbSkP2aeGkYeERyHUyjCxAwUAaJz7iS1cfyXPk1TA7KbFFJqHppddiGn",
  "key17": "5AF8U3EiRFoLnfPwbtMPC6GCVinoTZHDwFqiK9iS1ZsYfUKSFTZJrJnuo9Bp8PPyhZrzR8jQuPANEpGU72SajBD4",
  "key18": "2BpeDnRkbSB3HsqA51cRp5dq8A9ZSFaUvZvbdwH8WFEykzrML5amGtLX2AV6aQRSBa9Bw1YXykkEkqzvB6tASpUq",
  "key19": "5ogjfjMechEfU1U1ykiZdxPdGYupYeWLo7vyn2dMeR9zMjh9m9aSdAYSY8V1TYjCZXKDMjHnJVCmGptJiWXa2qJy",
  "key20": "39hug7abM5rqWbEbXfAiKYCmwnmUprASBQ1Q5PtWzSB7iUZN7Qc9mtMZgJqjs75SWyW3jf6C3WeKJnhEeCudx9ci",
  "key21": "5xbYM681kKsVxrJ7DoiF2RaK1XVN3SFUPHeikqkgVPQ7vVtse3CVqMAVAzSimjGJ1Wp1zRdZv2nYRmgB6B4F8GTZ",
  "key22": "4MoqxbtQJHR5UG823Q4TFE1AZ2gj8U84hKxMWcd3FdJsAMxvf1HKtwG2Ap7aeaS73gQmZrWLHxueP52Vz4ZKnNnA",
  "key23": "5eFZ3yBAuQMpkuHtgNZRDT4rv9c4a9cYt8SBjE5LKymSWgsxM4sdAgYbVkjj9iiNPA37691Ww2bJFLsmvZWiiFAr",
  "key24": "3coQmtroDT6i2Nbrt5vj2A73Y2DR6j61saE1bxBZY1SrWmeT92oSk8mj6wr5j1Uo4qguSdDphEdgLWvKnqV3rvd1",
  "key25": "4AC66BiF3zTKEYvWhDC47FA5xaZkZXiofEMDAaL7XAvEhvCeMhcPcNJuBPTyG7szCQU76oVZV7M29fan5TLJhnzf",
  "key26": "2bcDohxUDaPq5HHYZXYRyx1jGrp28yyftQVUSjyk7XVdG9FH6UMv7my5roLzA4SmEdL5dXR2ChvUPrpKdiqrscxF",
  "key27": "2g6HYUXyNp2ShZmrNtKR28oPiKBRhKcA8sAWbcJJeSZHq3qFyHWTpAhkgiuGyKiJoeYAdtbdTeG5dM5BSGD5yrsS",
  "key28": "5jUnrFz9FP3RDz5rsrmcMbRray4uuG5wMp7RYb1xqkbZL9LpNYaM5ACPtyaztyTk25gn5hDCSY2WrfyVfQLPnofu",
  "key29": "2EoygTae5oSvYjaDHFQY4keKod5PvXmWCCSXgox4jxe1KPxjAvXrDbKWyg3rwmLcwC3wwWbud5tPQjre66N3fJj3",
  "key30": "2TyNo7cujQ5owhnJuruqx5SprDsCxUV8PZeLZ5BiufZLS2MhrCDaDFzxjyThWvkgqX5r8CRcv6bkNDdypHQ83wyB",
  "key31": "2gBZjUdffYXMJ6uP6sCesXKfQDLaV1qPYhSYoxNrg2JuCAnZ5gWh9DRcjLvEe7sbNPFMEi8hrgrDEXLB3MCeL6Ao",
  "key32": "5qi5wemiToBkkSGtnreMCAZgCRDZ6uM6783zVWsfcLWgTioDQgxJoY98gD96yY5QpJMUssDGZun8KkjhVbpiXMzP",
  "key33": "4Uv4dzmVnAtrHssbbjKvTm2kwn3icVGpz85hJxahMsfTL3yRJRHMbwe88uzMPbnKjQx5EQfEMgM7ryxm1HYtV5HY",
  "key34": "2Jc73YPoJZxZALbEqri3FcceZj9ny6iFyjvbxN4brGpNqqXTUN6TDjS1uhf5Vn1N8xL3frXaGDqot6zCcoaJ3N6z"
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
