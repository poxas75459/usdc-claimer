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
    "3mHwirW57NaKSN4ZoaruLH7Pz2T7rC7zg1UcH8XgLfSfHHmoyCU7QAPV5sByhs71ZDLhtiodgpGATXA3L3Z6zndp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Jj9Tn6kDpmzynCKLkxje6fp5L6AqpAtAsdB8mm4943mCUaRdypnoUWGGXYZMctZTbVis9KHP6Wwz4M3gkQ8zu4",
  "key1": "5SmRjqgJQfNwWFH5pKA2AkHuMW4DmV4EPM4S74v4zJh5jontuYqT88aZRtXJC4tkimMyJhSCKACQk3sPhJNbUowk",
  "key2": "4xLRpCEEsjxfj3rSCDSRb7yYZsoTekPUxNQDL2D3u6CqrmVuJgEcjMcmi9AL3w4PhPZ7cGznNFEFnz1evds9rVLx",
  "key3": "3yUyadPiHwaVHeMzGNynLBAoMTEf4nLeTDJmbiH5Kc7F45q8cYPkHUgPTADu4kNSENhLA3ZuZNB5TvZRiXA4EDCx",
  "key4": "26yAwY5dczArh2pkkX6ii3DDcAyMKX4UnemssBtcMFrLqjtgVbqxzoLEjdt6cy4PowutCRHoX5UV89yraeEh9yY2",
  "key5": "4c29Wckz48kLMKfMQEYX8GhFDfdPDAmfEKdNsALNFfmRuxSa8BUj54qpwaY5vfWRuhB4vnyayoibgtocTm64NzEx",
  "key6": "3u23G5rVjZyJr6cLoZcSqqJ22FciNWrRCCtVVNwtBhgCu7SD5d9FJcXHQWH74LN92tRjFRBCEE6TK1NQr1H8sMz4",
  "key7": "2M1LGeiEyu93DGZ467Psp5ogVxFSind1Kp8hENpY9bwpw5PVqvdnuUMVe3ex1pbApSyJtodiREHgFLc2wnSoQRLY",
  "key8": "2cSwVQ6Yb6ooa9BN4XgTFbDMYFJPdGqCQLpL2wiWm1m1c2qSsd9iCJHyGoVn7sUDTHHxuTFR6ZZooAZtY9CjR4ja",
  "key9": "2s3VP2qutVxpzHtPjmrcanKR5yn8ZjaY9rsynAiXunJsBtW6s6JgVdWr7tJ3TNTnoRxPvq6M6jhKS3TniUJwZNqq",
  "key10": "3ff7xQnptecZpR2CpZGMHVehfqGKrAKFo8RSLC7V6jbEBR7nreVQ5Wf5QW6DWbmVFt7nBaya8y9mjLBMnwbdK2Sd",
  "key11": "3iAFvW5UKDx5BvK8oF85UkrPBD3HuYpwcrTTQrFiWnePx4LR5uWamvjKhvBXH2A6P94vvnMnSELAE4jB3DHN3VUd",
  "key12": "23pCw4jk1LiDsFnwZLSMxFwUqSJ1genisyK2TpemVDG3sVK2a4MzgJiYmcu11KYXdx9edQkMFoZyaV445buimDxT",
  "key13": "2viqEoxUu8nvsmnybhJR5dweU3sMfjqVBAC13Eaic4HMBQGVp5HKroqAz2QGejoFiv4vkCFu2waZUBwahsSBv1gk",
  "key14": "64239eSbFYSsfsjA8oan95acrd7T7GuevHv9oMGQUF444xPjSHKVExcBBNspdCZyLwfwvjr88j6XtKZgXqCi2PVV",
  "key15": "8QA3NnouYuG5A1iwkts7w6LqXpPtpPimmLoDRm5jcYRUKkphJwAZzrdK7zQ8wgPKPgJZgzU8u55FxJ8rdYsvhsV",
  "key16": "5ro4aUF5KmwV1tyX9fLwgtsswMFEfG9WZytoVTqQrYqYYwuM5dgBaJcpYAFU2QvBMnJRgtUBAKvzHwUWuDB151t2",
  "key17": "4BMqN98f3u6YiiZFGywx9tDpFTPVuVGjMUJXtT7rJkoXTnrM9Qmx8Dg7k5faho4N9JMsHiGKrGTMCuLtV8x5Ee4q",
  "key18": "2ZBRrZ2emvg2snFQ8NgDgoL53nBGeHfSPYhsouhdXqaeasCCB6GmBLubv4Hfhn5gRAno6UkzMo5qTcw6bUwzf5gT",
  "key19": "5FygatCkCuQWKxEpxrQTQnCwxGGKBhZH32ErfB4Fk3hFruFB1uKLG8eCAJAQp4e2ksFRP95VgX7PismQP27krRHF",
  "key20": "5Vyu6fzC6Se5cs3VDcjCu9KHBKYYhLVD2je5qRRvWLdd7XVoF7iyEpnPKCDqTr8MNc4wE7YP5egH8usMzNJcykvd",
  "key21": "okEmnyrg4DzHaMQ17Y6r2z5SgA99uSG7kDaBfVf8uSCEif5efdZunVXYsK9oWAKX7xLVr6ML9bse5mopFdGfdAy",
  "key22": "5mKFrPz2uwGa4381y6i22FYQBx4KkwK3cukjiDy5i4njXPTzEu5SaRPQHBWt3Eg8RMzy2H5K1KiedMnv2VktnQab",
  "key23": "5x5bWa2Ld6EtW5pNQr8kkmWdKCCKx5fVYmPCC5GjXfA2S6kjSCvLpKGg2GEykCaV87UZ7rZsBrRZYLk2Jr7jw3tb",
  "key24": "5DUD8hcDowZMh2J2nGD9pmLjvoiT27GYjvgZGHSFY4T99nYh2tosktXSPVYn1u3uufm9yz5K3LeJNmzZjq32sCmX",
  "key25": "5wMoVfwUyMUCKrTKnHSnxJozcN8Kt7VC7i4L8aJoq5e8k3doq6q94ba8CdPodj79djtnE5mjpTsSe64nw99FfAj1",
  "key26": "4W2qBJMbVSjQK5ewcVdLDQdGvyaYqMwb1MxVdWKf3cgXmjDAGqrRLkRxDjngZfNaC9LwRjeC9jmJp5jpJFK1st94",
  "key27": "BssKgV7syhwBqH5LnzU39oQqgsvJ8DNV4NrzPXB5SQj9i3xyVkQnXub2ngbKcq5CWRMpypDQjgrKzTUafqcXMCp",
  "key28": "3AxSxiaeA2vHuUimZNLLdvT63xxPSHGwQki8DFU9rm1wMn3dE1vdYMGaL5TfzZSMk4GRGRq6tTecWWnytoXzwaAX",
  "key29": "2TXaBeuMrM5xeY15hBHEiz3TFvtNxY97kHsUN3MRRFybJk85ZTT4txXWXkTLSToFTWXWj96uiFQ7d95toeNSjqgG",
  "key30": "3em9xaiKaf4VaiyejUpz1VVPb2unSYYns7vpwkiWQyhZ4quRGXMYhzP2Up4guUwaydfUm4prVYyZRMCRUaEEMXKz",
  "key31": "31QkhKdZFS24xtB1o62xfysojMdmvbH27vx12gDxZLSMHQ8MPGBtPMoeZDyWAwrhDK2qWL1nTfPg23sFcNxuSNaE",
  "key32": "4dGvNxmNo6gTan1AVLisKtEMiG4m8WhYKx4dwvCDWoEfvw2sPthZefqSZXhy3AU7EevW7HTGZ72uye38S1jttXb3",
  "key33": "5rrCh9kgm93C1GmiHw3H6kFcnN5BYVLJSEHXJCqwZkbSAUN1MMneLgudypxL5fRgCsrQeLDbQLZharx1oGoPMuDw",
  "key34": "29wCSEee6Zy6FB11tefy8WZDn8mzPa1HYU71S9Mdsu6tY9Q1PSLoYa1UZCtVAK8vBFuaX6hzo3wv7FJJDA8MZY6T"
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
