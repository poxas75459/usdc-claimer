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
    "3qzuwbfKfPX7WJZ4k8xyzVfEeRuTzvCyH9NciBYrvrjCZgoQCQMGMTKLVLYoPkkJYo6eoPKjBKdyLWUUCL5vwWPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d71KNqP6h4guQ5jnUanbEgzcALZKiMKxcm1x652eiEKwK52srymTs6ztZCL8YMvPLVBRhnho5gxbJEgobgGmyWu",
  "key1": "2iNt4UirR6S9x1JsZ91kuQfiCoQMMi4sRVsis9EL2qe6WD1DMhr2An8HVZLKM1JWoMVTpSno4euGgxpKmnPqkabr",
  "key2": "3fbXh5give9heQ3zBG9oeJ6oebe7AH45fUdNYLw3yRhuWpwarLE1ecfNfsMeNh9H9UZ9ZnokWgazQdfSscLuughu",
  "key3": "Z7F3JUzAkgCBj17M6RwHgmfKJ1bY3g9SDhWnoeFi5aCHVyTWtoWQPRcks9Z283FKGX75y9P91jDvs8RD6bobwgL",
  "key4": "2BCTh8Kb7Lxi93tvRkW6z1n6VsTfqWa1eXsFf6HCMHqq78M3DzrMTanze7tgmSqDTxu91wfaLSt7VbWMPQ5rk5Xp",
  "key5": "3JPGLz4n2Mnmtx21BvWg6dDyPsp3tAeH7MooA6gukw5jn14iiy3F9eafFqgMcB3jyrdEYPvitFx11K8LjTGsc3GC",
  "key6": "4wzhHBCnJwrDxKPxRsac4fgzRZNfqyPhQ1d1VWNhZMzjrcenE3SM2cgXhg48oFnpDZPWuSSzXQFMLnLfTZp5CgrQ",
  "key7": "3piMpR73mgRXrVp6UfJEpMjHzvJzKA53v6nevFZ4rDGSB3xSyGqz9FGRdti294p7XR6hJCBfXbrCk8pPxR19tnbi",
  "key8": "4z4VBmkoqJaiCKS331FG678e7Hi5KayjkJdfydsyDYFNHg6DRb3UtBF97vXZTS1V8WozRNoQuTmqMix9yVQKiGNU",
  "key9": "nVLSvKiwF6YxWUVg4wPyX7Cgh462kmunuosx37YPsd19mR8yn1qLuApgPcXH9VUCANJfZck6bXsRdsRyRoxNxSo",
  "key10": "5i3sUXNjLA4xbJJ5suqDfH3sGhiPVZ7T99UcqXsCeMvKAiJR9ftZysUXJEFF7PWh47S57YtkWiYEzjBHqzynod2p",
  "key11": "3WWWJx6R5W2QqRFgxJ8bC4BnYS5NuRa4BV2E3CMcNWWLbh1LVDhGmXpEeeNeLZ4si8yUQuxrQsMbBEnf9Etjogy1",
  "key12": "5GfvX49hrTH9tSmfD4L3WbrP3CJWsBiyaSGacR4qc8rzNu8eNHdwF4WhoTJrs5ggzRTxaVXxaNUCjLacbVYutiiC",
  "key13": "5Mkc622C9AD63RR72ocJFCnqCrCyTeRDZfPFbSCPzZj52Q1vi5Lc2bSmb7FbM3hTJaqmdDrmU6iHecHKBSXtQpX9",
  "key14": "3fjWDCU4g3UHuNtyCRdZT7KUHHvZv8Caxf6Qf6QJcXmApeD7iqRArjWMVKZZxMpVfiiwX33QxLjr3LBkJQSdUK4J",
  "key15": "3xMQgJxtXF35WHnPUTD7xzy9CJzoPQBRTNFJUKjQQpUdg6tNjfSqb6tCWgH7fqcPD8hbLKumHgJx9PArLHVo68dm",
  "key16": "2Qt7u68xaoV686kLXNz1oZzsVesaEDt7wJJyAU5wmMCxpDnmaD3xjFBcfCK2jw9YgJF3Tk8xyuyoEhxuqpfPNe5Z",
  "key17": "4ha2w4DFB36ZSb3W1R1FsBSYpHxhsETR42GD3SZb5dFxcDSahL52b8Yi8Tyuxkvt6CQZDBWv3DJg5zZa9XsnJWME",
  "key18": "21vUWM2zEqKE2WJVEZbXXmNE4UqLyu8va8B8u8P2V1uCyUebw4cEU4qwjYcKQRasJ4Zm2LjD2jWcQjUqU4KwR1CV",
  "key19": "2gKPq6aD2HRWNwhTNjfYmb1gPugMjwLnoQKDVLtMzpf2AVyyHwFGWXdZH83suu8in3uq2M5HGkTgCsbqqpf9E2Nu",
  "key20": "2Gf6aKxb8iEq5fsvn3t5h4ELAFQ5o2ZvtYpjsVqajoG2a7E94kXhC1CQyjcK9pkAi9iohqtt2wssR8LBzozF4mDY",
  "key21": "3ppZfMzNAup26cBm5JBeqxcYiPEjqRSGDh9CSu94Pa7pciGqbP8TKsYhx7godXQiS2GJoQQPKpkLpeqtzCGgRbJk",
  "key22": "2f8PnQod6Pb9cVNvkVwBLiCKy9ofwMUzSDDUnpinsXyrKwbpH16kqGCdxSMCWhv9ENY9P5g83MkvjJi1ofS1xZ1s",
  "key23": "3NRznEPMu9VoQLvwRDkmj8Wir6oLikpFQYXihHsX1YRbZzVcC1oQ74AwbFgET6X9ZriAUaYbW4f2fEZjPgT4GqwF",
  "key24": "2ih9AteQCHEBR4cqEQbp42bquHZdUyKnmiXrk47v5XdXr95FfT5YKbgT7EVYRhdTAGPAnbKgffnVfRSqVYMFHw4G",
  "key25": "4Vhs4E6tmHHtwVWHvMimPtsW9fp8SEGxLS9meNrAZSg9hDMxhmpBJR1UsH19gRPhey4hBGnwzBg2rKCecG3qiEDa",
  "key26": "5USqGN4pAiJQCMc4csXXruxeDnUULrChr9h4NGDjDymvtDYbN7PYDmfdRbjzwGXvSAuAYNZWqCMhJn5zH6JnjfwQ",
  "key27": "3dRHKTGczioSVDRAENCbALBgBbLXVL4ciiSMsG1aZRXc4HRbWtRjWPGtx2iM6oLFYCfMZTe9RomBGaQrDCn4C6bV",
  "key28": "4V8DjWrvbyhAQMK68dRVEp8UUgLkKF49j5iD8ehRD1DYUEwAiZWqRKmU5wbkWErSshcLEWgVU8QKK7ffVEM6oX5r",
  "key29": "WLMe9cZb5cfbw38DDM16mzYkxjnpSYB9BKFLB6vRCsc3Gac3Pxr7uCr5qBB13qpkdF6gs3PoN8Q6F5hGNBmU1BC",
  "key30": "2pPpDKH4RdRhnP5jFz72hUeR8x5Zf5xjKaLT6P5vbJCUAeJd5a417En7GnNi6YgtErbtfHFuKHL2dki917gwprN7",
  "key31": "4sD9mtHscHxoJuMJSf3aMv4bjYD4ja6EL1vPdazoKyBcGow91HgyAFkjxCrF4F24mY3ucrfzVT5RSRnvr6BJZBZJ",
  "key32": "NoRJiW3HdYDvvik8dZQjB3TRVZNnGpikx6bHuoNi8kYvAxWkkuDmCMJACeHZ2ViWzuuMyxK7YoTKKjmV18En69H"
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
