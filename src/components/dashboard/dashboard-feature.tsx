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
    "zZHjTr4ibY7E1Qx3Sii2k2yQ1NXZouLVvWAq3CLP1GHRyZuA4PEyzPxy9KRRL3k742onWsGUWkDKbyFwDNKB92G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nGLJRdFanXyPeos5S5xMXpt4NVZwJuTMmv2AbWYHApZJUMDGwCXQwu1zATg41ehKPZGKsLeHhPxEarnVTDj2Wcg",
  "key1": "i7fx32bm2rbErfEz63cWwws5j7zHKsJ4cFsL7UEnS6UaENxKtBzbJ2JBP5Wa1kEKMYYEcaP9Z5Zmqv5FwYLydrf",
  "key2": "3UboX9SLU5oUNWLxG2sHcnFLkhys3eEa7RchiMgG6gr1YKzxSXVdutBr81fMMpwkjuYXpvzketkUt8rRvU8VdWgz",
  "key3": "PpYJYPJAGYCZ1WuFhdSRZKNF1bapcjGUMxbfRVKFx3MrBKg6wQXLQ8C97v7tT5PTKHemJr8ECC69PptDZAZWkAm",
  "key4": "FjHMBCV9MFPHnZRb75cnw8agPaAr27RNZABbWVK838XCWN5K7QAZwLe9nNguEt9pgCgjazPpFQFuWx2kENWk9M3",
  "key5": "65mKmNTnD3B5rwf2qHrzYgCQqkwquERsSUKgKrPaqtANo1vr8PvdybuueEo5ANMpK1U4hrMHbKAnp8wreGgroNv9",
  "key6": "3fGYmFfPJ1sCPQYZCYjKamGDkNReLXwTDgizcuQmVw7FjPwKz1AhJvEMXA63yB6DaAJvTSnYHi2pvF8wQeNZYNe6",
  "key7": "5kDyUZFQWr1CRhJwYxzjGuFvbesoDZ29mN3uctTRFkArtkcBvSx77gSSHHLVun5DwD5k23X8Dec9CepXAxMcM3k7",
  "key8": "4mryAQrbWRYh7rh8gM8mGnMMNPxoiDEXqNbFCWWj91Hc27d9SJarxbSeSTyo4BDDL6ANALdSpbgqDpPS7mEmz7KY",
  "key9": "Zwiri6joCGL2P8jrNC3HedXbikj4vkGw6bNHQ1cMuDuaai7xSdHebJR2iLSSYwQkbUa2eB2fNVqPsJq23ADLnmH",
  "key10": "5bbaQ7jVdNHH8tRoA7s2v43Uatvp54jRnaJhqoBxFUUZGTmcSUaAYuYdkNYXkvaGWQZ5nbCcdLq4XkWTsSEYcMsU",
  "key11": "5xabr2cQkQ7rpNRpDYR7bwT63yT7XkzbS1WP1oZ1X1ZB4hJwPeF9Jpfv2CYL6VCMLnbCpnjnBwJ7MMPZKEtuhWEb",
  "key12": "DaQwmoqpkRW5Uj83AM1TBV9R6rrANgaUVPU9dkeMY37JK8XutQGt6GS3wtxmgV9SqjZdfEvS2HL9nSyVSgnEz6Z",
  "key13": "25MhLbSzcfrdggjKzKEB7cvn5iCqveJ4rFQVmjSeUep24j8DBnHYPFPAkwpxJnfkheRcFQKbCNdM17UXKeDYwLxD",
  "key14": "5ZYqb2nwMU7CHtxGREnvCFbwQjuT5V3NsiucXLULhWMEXKW58WtQ7q2jtw4zAX4nNBo9YJByNq4nE5YC4WbTbZfj",
  "key15": "5au94zSyw8phKSNJVmesPCRurqnMdKD3ZGzzzz6dxVsNoaXhnRVYa2EULMDndHKMyxdFutL4sVcBRWDwip7zqf3o",
  "key16": "8S3YxXq1rMjXKVai7956RfyZbQezsDtnWM49yQ5w9uSPqTGRYLX1xKUxPQHEh9X97VQdKDvGF3gHpHvuuspozjr",
  "key17": "5AF5gJC5kgJkDjuz5oBpKRsoqEVzuMA3r1Rjzt8dqQKSsRywB4YM3cTfqXvzc72skixsiR6fcfqjM2qU4aybka3u",
  "key18": "4sT48eGCfDA9irfLKF7KjhW9cwbnDKaPX4aFWSvjEvLFKWFMNBY9oQsNWuGye3WbEDiVcG7sm2HGxoLgb4pdeDge",
  "key19": "226zEQDkA81TdFN41G5MPgxGUn9mFBNECnmf1deTVA5UUPVmesB5rvGMU67crshnwocXV3KPu5dean8VGZXRuKhd",
  "key20": "5QCmRrppz2ny4zzHJd2gE2nWm9XjpKxhJN4721fz3sz2yZx5vmDNWYN6MpV7L8YKgyjwME37w5aqWqQfPKP85Ggn",
  "key21": "4P8U8cFHx6G4SVNy78He8CHRZP6173er4vApsu457gsrYLftSfQh3GMoAz1iFarMiy5JsnDqFnE18LFt2VQtzEz",
  "key22": "55iSqT69Fu24qSoGQZmpgKrceBEDsHk3XXrKJJR21gvvFX5kBVBTnsYkagdrGs8aQgp53FAER4PpBtG38DwCBXZa",
  "key23": "3hTrLfywnTtUwXHfKrEAYmCMQ4pN9ffKdaspnpNAXbAVXXbffFN4QxQBqLcsXhJfV9qjSwpAcS44obKTkKG3k28h",
  "key24": "7jWVVHDnYFZPGHfYYjtMXeKP4QSwEmFNyAj8MNUaBDFPxJRD6QYsRFgtjRABb6H5K5z2XwJHFm1LqExYxYhkjpK",
  "key25": "2ULzQch4ttFx6aj7GB3HQQ8C2chm7m3jQfeD3BZsEVrKqSTeBQghhYwpYE3E1DxLw2X3aC8wkCw65pXUpYQwsdqT",
  "key26": "51Whw4TZaKCt8T4nwT73Buge3AG9QuSqwYRBVZ9XT6ZH7cmjCbRZ8vmvzWoTvFwLwSBrjvice1roaZJvAC97dUuM",
  "key27": "2CmYrbcVRMBMTHVhCGhWwHUXt1iAFv4ST7JBGaTByfMYzJZkonyjnmkB89kUdZt6af68EKCNGLQ8EBrfxYGJPWkp",
  "key28": "3adHD96sqGua2rGcsHGb7W1tmF59CQHENidMtj8PW1xLyYshxovsCCGJcEEttJq7Z832zQircsTkyRWNkxNtjWkF",
  "key29": "5ySVPvGm7tDizHGPtsRM7BF2xAj3sf8esLAVjwhcXxmMBCdrrsArwXeK8FVPyBrBr6G1UJbAKDQfDoHMz2tStr2Z",
  "key30": "4synHJQnEg584VtkfYbFrFvX79Ba8HLaPhUZpi8uKi79G4MbG1uFTaBEZRthj4RY1k491nzkRmnfds9ABpQmda5J",
  "key31": "4DAmedpdeQSTzh7CrtBwh5kiLLnBDvHn14s2siJM8kH1oi87F8Kuz4hxBh96GWcJ7EjcAfySRQyEQQnhvDBJzYwu",
  "key32": "65xjowkpEJBXPosDrGsdVW1GoBsziUVLMhxbsZ7ekT2dsADYtFG9LswGUnHjw8fh82cNz7w2p2j8YTY1KgZzMQy6",
  "key33": "5mbFZTUdQcCehTx9K1UX6YEoqGBMCZoNfmpC4TqmhmMiLuLMqLr8tCJPnCA4psXQQZYGeERpW4zWA2cNk8paaJDm",
  "key34": "5WHscjZGrbBF9Ppq2A3psJ3TFsM3xQYmg35AHnbnehzjSZmQ91fQtjHjcidu6GK5ii64eyHDULR3kHjdLAiqCiK"
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
