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
    "3NXtjYANgkzph1kRP8JgdnMZQUiMZwiT2UC78gyMujj2S57JazqbU7pfzkRPwZrad6u59Q8qP3HF6xWEjHS6Ajw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8ZxD4wxRSCQ7buYVcKeFUrGRATzxs3BE3iKy1sujiZBygrsFdaWB3WLumSTdVyZyjz1fH3vCEzBaCDCaaiB7gNU",
  "key1": "527U2yvpFHFNh9U6Uw6ze7qVr8woRsUbkuipMeu5wd2t6SAYqZ2WHGEdkR6sFkcSVihiZgkhN1K3ofMsvLJ1a3UT",
  "key2": "3L12RLy9bxKDRhX7iCzBCXDbLnjmH2jTTznHduf2SH2peRUEtsX3KcZTrfnhefQaAukmCru8vEuU9aq936xwQuKu",
  "key3": "2RwRpjmr18NzdWi2Xv7ndTFg1EFBWbRB2uMn8nFirxfsxSCNES8j9eMGozzb9DoDLTZeW4MagcQ1MCMVxiY4858h",
  "key4": "4iu6FR7yV4o6aD21Cy444qYQxa3K642b95gZb4JNuAmBhetfeMR4azWyLCWjte6DkKmGQ1tqakLigQT8SyKinqEz",
  "key5": "2DTwceKnTbfxiGmSppiyMybBD2LqjAGrgvVhK3RXLsy5Er74wq3pUdKV8kEF1QE9R5F6ZtofwPRKpMgZYeoT4iYb",
  "key6": "4ssMYw91ZDyXXKmyKapD4kf8UTAfcDqFQReR1vQ2CdwDk6FgJ1aqVJ5foUq3xucnRMxyeZcugLi5dwzfNKApZFqi",
  "key7": "3nwzHsJVXjsPwMiBNyD6SCoHBCPBTnoUAakLmAGXJtkBBWHz3kAKwe8utYw2gqhqsCcsVZrtCt1fVm7nRX2uVMEz",
  "key8": "21gA49PCpugVh7K7zSKrCHK1kGcnBUbfUmcYz4kQy5BSJLZiP1jMWzqEkggHDSmAhH6Bhw6E3w9E5EYGPSMAF6u9",
  "key9": "4m9zxiCAV6RF4MZgbJg9f1WiymxQFk3TKLZvVvGeMAoQvEhSZCQbrQ5BuSGTdb3ooFmPSqPj7Pv99MXZRvXEs6XX",
  "key10": "67qAHnGRzAhqoLj56nNdHn5YMjMbrpvW8Thi3G5gC27FjysHNxCcQt47JbEtBbCcDhYjCTWmEotFfPSgXwjCF4db",
  "key11": "4QxyUbRKqjesshfDABgAUejsGfHKobFPYwGx9rKmKgv2d1oa7FENw5Z7DBjPnB1bcfkvjGb7ghxnBG35z54bxPMc",
  "key12": "54C1YJ8rCBfvRiamUMrZrP5oi5oC8oK8vUNvSbGEevZNJecswCzug42uHmYpT1GsPJmpmd25eKM45dNM7mJvpbLp",
  "key13": "LNi6m1rh9YjMNkvWXyYDQAZb9FpxtnBLjxkNg8AiAqr6y5DoDp1mS3bPB1BHcY7BETFEJtdmyqV6GxFu7S3fqFB",
  "key14": "twjykYSBb2Fu1HqSRBDYJkAtid1pQhoya1Q58wk7Hq2aLYDiSvdD1fAthdt6P8ZsmsxxuZXfqvx2KnJ1KNcg4mY",
  "key15": "3ddP6qeAhQJnb7jvGLrJzMHH3JPXE4zH5XUiUZnQeoQfHacdscvRZkAbmW3P1WxdmffNPXrwsTKbuwGPs7gUvELV",
  "key16": "5PWVYHaZEX5Mn72BANE1MNhjyhoS11DZchrGAVHCTZc2wkwJUro45ssCxGsNSDo9jYHLmKwT2tvx2G1w61Pqv7FY",
  "key17": "49sdmf6P5ktVe1XXA8Ne8R5f1x75PkYfpgVrCbnGVz6kstSbCg1D18Dm7bSZoQVbxbHR2rNU5e2LgK37gakfNMVE",
  "key18": "2hXPyEzCVAXkZb9Wgb2GrHnYQf5nUMVmFet6TpNiEgUpocWDdaNVEWa2NSJCvQ3RqwpcNi77C9PsQHdzkEULNuBz",
  "key19": "2Lh8cP2rAUAKjtHQyaZ4CAGxxzXSQ7rZYh8frSAvX3zqG9v75ZEytMjZg19NzNjrizTmtPXwmp9axHQk82N2hAm7",
  "key20": "4d84iDduqjy4D9njqUuWcDZMJqw4WvwzzJBTyqA1mq1zCSFFGnyp9hWTuy2vynSJhLpFHao7hMNBJvBoi7C53w2u",
  "key21": "3wy6DGGZCGzEQQ8Sd8Qt7VNpDumzF5Xa9fE53njA4n1gT6S1b57VnRqkXd4w4dTeCLxkGtCncDVreUocSUtmjpHH",
  "key22": "dP5T98AScMSmR4JvYnTaWABQCu9BHkHpFGEsHZhKLx9NbuRhagUDU8zfDD1CjkvwDX9dGL1oqFvX4QJaV9T1NoF",
  "key23": "3zA9n6P3xCvcgcfHsGkJZDgwx7VHsggqkYZdwsJxXyaw9L552YUE41vAgiCumCR5n2Q78qgiVoacWRg7dWFt6iWY",
  "key24": "3W1uSdjFqE746k7SM1dFX5o7hUmFagpfJEWSSMHgKwpjfVQjJvyymqNZUKwKMvRxY5K5a1QKAnbPhZf89fgLSxay",
  "key25": "7JFWaTK4PXQRTzjxPKtkreGy5grsGCUxPp86YzWK6dCR1wMaavF1YJvzBPvxVLZsvpJe1XQs1oDp79NiyX82z94",
  "key26": "gqbywfHFwcVVfLNmr73P121KadFtdLVMnCW4K7gScAdqoqJfybqjCmuZd8FU1FJi9k3nJchNrtwTUD7TDMX18xu",
  "key27": "5uTDBTtBhJohvraqSR6KtgEuTw6YhA74LCJRzERG2eXsiyxSoJxdhxyiRAJxbFppn4d7Wf1fMniXsURgrtWsPLKT",
  "key28": "3sDQTGMccC1Y1amFGvzawodVCpxsrv2gJu9K6WAckQor45vNDVmxnXdgS591M1kSDhWAWEXhRiJPfSWzDfRXYRoV",
  "key29": "62iqVahbedAk6FvfqtnZRydSAzs4sS171u3ZsqjByzHAUmkuz2aFnstkjoiSuRJ1bTxFgve2xdGhBdEEvhPN5tnB",
  "key30": "4Cazg8uaCBFXaRaj3YfMDP4JS2DVeEEnh2taupu3CeMJykeiQd5FKhBYS4a3s9bbwMx7v2rDJkRAHd96n6NXDEGQ",
  "key31": "QVrcRw9brjp1bjSXUWz4HjdWZtkeFeLFmBCUPvQzaFpxvEGzHzWh2Eec8JgQ8TqR6EtB3wARtEzkXaAqtkHhetY",
  "key32": "288EzZMPE6qvALD4bfHaajqM42EkR4VdRqioeW51GEApGdxL7iQHfZxiMTPGb5yHgeUWXFoRrJHJUbZuaACv7WjF",
  "key33": "29P9hVDQavweXi7XJaMCZ7pZV1pHm9wqA25tLhE8ZyfUFP6jMGcgXLfB9W3DCG7jkdhFpFTMpW16JqYLNcJhZQCH",
  "key34": "3RS4pxjFjZs84s5NqcVWcWP47f2ZZTQ9h1PyhFjjSNUBzMLmBa4WcQ3RKfZUoYEsQTWAi1ffpG846BZXQE3BcMHJ"
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
