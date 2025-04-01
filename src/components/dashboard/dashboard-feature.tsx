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
    "hvxqrNevPz7QNtAFZS7wcDvLPmbG85ndKEStwuVaNVofaJWn1AFx8krBnMwpJYgCk2U92cEbGPG5r9Rto1aseg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qHBbUHnXcBGumeMYsB4X619wzNwVQvqZDYR5XEUoQbothCuiUmMseQhZf3CAjnQ64agnWDfpEMSeCT42UegjBjr",
  "key1": "5oinMCvZ5v7eGNNiQ2fQGFkC8AfhqYfRJGLfz2YRZwdbUJ59cgUAzBbA2KPctQgLivXvHYXNBudyFa67eR759ogR",
  "key2": "24nTkjXWYJwLPUK1TY6fP7rtjkyHDEu5myqFpUvEfAjeudeSaJsYbcsma3mcpDhGQAznRDaz3oueXNm98Q8od4UP",
  "key3": "3ozSA143Xc9RgNbGRuiSyUM7sbVcu9Jfgq2BNcqbb8bWzf2hXPUpDcgHkFjGty68YrVbZxKWF4sfktEbVrvFLZnc",
  "key4": "2KJZEBBqoRJJEKgyAkHBMTmw7KjNZo5aXNvhvxaxwLahmxUewochggartmfUPUuTe96Qqya49sdBgBkowaBf6toj",
  "key5": "46U4HDcw748c8nvRbB8GWyVW88JLxzwCSELotNtffwgtQLGJ8duVgvVPDB9xyJRryZLDUKgFD9N34qor5KGsp1QS",
  "key6": "vL1TGVdhdGuZL3qQu3hLAKNvW9n4J7tJTm3vebAe2yRocRiuQBVtCPpUcqUFJMeTZuD5K8AeJwByodjfn6Mx8ks",
  "key7": "3jsys4J4ZE1SXBcqioC4dspxvn2yBs57GyYCDddLPmTJgXZpBtZPMT5Nyunww2EzziP1BLk8o3jxANSdVtynxkRH",
  "key8": "3mswezL5dr8yMyzWxJhQEpGTg9wsJyVbSfhWDeEx6KwWLjxpZrzVzvJr61of9h7zzgKQSjtrAXxCQdod5wTPqr6n",
  "key9": "26snwtVe6Yav8vrPdb4QtFEFGMGbnSRS72WUnEvtg5n9YHZeP61MHjPteashtHzbvgZcNiP16MeMJktiPiJR222e",
  "key10": "3yVcSS3FWmEmHaaGGtGZYPifWDqeLKxnrQS4UCXfFevHxa81jdp5y9GRJob7EiPz3Q4X8Gc3iiUHVE5o4vXSbYpQ",
  "key11": "414wmhhLFf7jDXCfRwPUyY1M1CB11WESfEyKoX4EEHmAT2tWyoTpp2whbT5j3cvjHM3NyoGymG4CjV2r5kkrZ64T",
  "key12": "34q1r8TBcg8yPZtWh7FwhMFmZapvHqLazceTguWs5t4C1d189YXyqJmDRwJzVYysbZtmKxYJFBgXH27PMpirQ8sh",
  "key13": "2QbzDmjNNA22FRGSFijS6EwwNUemoZ6mMnHR9xi2xPAdD2FeFV3kisBjvhX4S4Cjz7MDNF5iGuRoAxFdJdBtzEtw",
  "key14": "2fgauEPyacAupk8thgfsw8SV3TDLjJeyzxgNSwjRUN9CYJ1bckP5VVziXZJcDwnPn5HaTBa6hTTbQ2sTavNULFo9",
  "key15": "3byZW1QQG8Xsrz8jhwFiT7zqoiisB75zAbAbDpvUzRvTRqvx4trU7kDN75EkQVDwbdSDxhhXN11cf3KhvBknSrK",
  "key16": "2WhjDYnoBPLpYZAnaivsvvqx8iLkaWMYRthcirKZpkZMaezpfhczoYzKuKWPGmgchJyh4e9eswU7Tdxkw3vBK95a",
  "key17": "5Via6cYAFYQBypUVWFzHzhqCFYDBqxwCLfDBDSMuAfor1k5gacV2uCJVmZ6Ersig5JLTihvEPBViDkgksxdHbmWC",
  "key18": "4NRhARoMP58uYp33WMZmBc96mTudf3vdzPs9FYXzPyRzuDgV5GjfHakNTp3y44LFWnxhAR9nBiesaqcNtcEEZYoo",
  "key19": "4rZ8H9qq7bYLtwyGn4DaMvoShQEntgaaSLveYnbQCsKVNA2RhjAsp3rqmVFSNttQVNWjSaiqngQpkCq7ziRHx3z8",
  "key20": "48hAcnwge7oAFM53Ug4qvsRETs7Fyc9LLTaBTUSur98ws11THrjUJ7j3K5oHjcApkAwKheWYQF97zoxhGipyYis9",
  "key21": "4Zzd8Ghc2nMQwBfUVAscM3m9LaftV3MMhbZbpyHuGAbzHBFqTtY89gWvWPv5yHv4Bz3fxHyMh3CTstRKpZorvpws",
  "key22": "3z2UjHjhWbm2FZbNMLR4DXYPYrW3tG3zdLpd3SXnRvLw5tvcvm9tvkzEbXK6YyZ6Ng8gXsfmUa7VidMWSrSeQWP3",
  "key23": "3jnZzNFmYcS9oHaBbvYQkZHGhiEj5idwbmccykiHqwMtoTz5QoPesZrZhg54C6MpXM4AYmrUJQdZ4HzwCZGhzKYn",
  "key24": "4VmNH1pZmejA1pF4GFMGMGsA294Wv9jDjAyaMX72FeHFa96J4Lu1gkeNTyr5YxY5S58vGSPHdAt2SLd8McgdCMka",
  "key25": "4aUrPQVUG7pqeBLxC4ABdKzdCY5CYAqG2FXJBNehWwtSUhejW43WkM7b9PKgrSTV4EpA7StAPTVJFoMccbt2m536",
  "key26": "4gLUJCX3Qc1mZiuhMM2A9M9cGSGSrr331bQfRvPWh8xyT9ef7M4d9PbYPjwvY22QLZdgCZMYdG6zNpmDg4spTVeY",
  "key27": "2DVnQEdnmStQc28rBUJkZHWuDA5aP2SQ7sFcXvtmnX9ji8mydqsyngcfXfeC1B9CDnqGQEnf2dDfdNk6NS1Q8iWR",
  "key28": "5BJbSyCvCHY9zj2CpDhZDQWkeyWidqiTeWEbHDcpd4WitabNPvQsq4EwSmLszSQqiDpUsVCnPNEasHZqriYwRvBL",
  "key29": "2iKYcqnS1Y95rTSqZ7eFCYuU9p8Tzfphn99CYNWJm8sSWN3L5M6cCmsKLy1GX6wsRAFdBcd8cbAxkVJVvz7fREpu",
  "key30": "2Dai5y3WnWZHWkWauw2yfZKUGfxpeeLjhqy1FjbQeKiswe48XkurLXrH2rcFcpLigBwAGHtWRCPQzRGKEYLAcyjr",
  "key31": "2a7w5fLfPi9RgBkkN4N4eDNkN4feihf6NiVsGkn6W2F9JtiSRUe2oaQNWQ7gBr4uq2gwWiq4G2BraN5k1q852XqB",
  "key32": "5jaV2apBe4LVHEaDXx1EdTYBn8qJYo3A1D6b9Ruy6712wG4bZxWzoZXcU6EBtHx6GKL9oHtHLEVwGhCFKtJbbVx5",
  "key33": "2Sp3a57z9rJzDLoPL9qHdiRmvXyLWcwAHL7CaXzShdzTWrsnSbBj5riVnr5cTHkJXZeKa4ar2Dbo7g6vjh9TwPJz",
  "key34": "cQzZbhFGH1jiwDmuqQH98HudWmb51zwuv4daiyT53wv8q5Q47KQU1ZEeAY8izRAu1PBFDGrt44KPK4MWruAfUyW",
  "key35": "4zyvAustpSabfX6BnpVbxNdnP25i1eCQbz8EUwc6gAsBac1ViTxz2DinSVosnYpKEgx1bdTwPwdrAAmvzC5oEKxb",
  "key36": "5owAmpFxpJQPu4XiVurHBJSAShdCdZuwydsK3FjzwY194GSF3868yZfBYcHfzLT7himwAK42FKNqtvDs3ztsLTvv",
  "key37": "BQBcP3Ci2LSjMy4FEnoMfvHTPa8jHErM7Dm3PPGG9s3xCHKq5JnKFzJrNgXfwX8mHJM23wQC73GKaEXCpcLw1m9",
  "key38": "2TC7rip5GW4fJucAcfbHph1jDgaLFCnMCQQDaS5N5eDhXG9RQ6eXoAZLeovW8ZRjGuPcBG7XtaPzt8KjKZ2k78c6"
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
