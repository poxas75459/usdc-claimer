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
    "3HvhgSwC8Hdk7ZxNnxFPhxhGR5K2wWurnwKVAc32Qy2Y1g2uM1DnrPbDKaqSF9kAKEbSzdJttTHiaL9pQwyQzyLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZfDUHWhh166v1n98LHpyJUXpsn2dQZxajdr6qSqHBRLVxFXNfxWq62mtMH7XSfcD9BGNyHuukFBxaXpbf7N5hDS",
  "key1": "59QrRxg76sH9MYZoj9jatnrFBeRGFfYQSYVCssz6x1NA44n7hLqYshwXbtW4mJegMXUezXs3cEybMeMDJuYHkA86",
  "key2": "2rjEaLxHVRxun2oqXmnoYveJnxdy7mf57NEdCbLzj95GnkryUH4JJpiU8bYac7ezXa991QvsDRnmzhkJXgSz5sCt",
  "key3": "282VZ1MMu4Jkkmob3tykQ2SCFZ4E6U96BcFbkpNznt7tfVDmdJpeWrs1xqUrZKeivHi6efLT78HH2ssML8b9MRVX",
  "key4": "4RGdtokcZHZa6Es1Gg8noocwfurgaSwKKijRRs6kUDbV2MiiNb5JSbE5UmaJ3TNVK9yRXKCT2Ftuppv4fxirG6kB",
  "key5": "3eAXbLoNQBJb4YKHQ6iWNoibJvhwzhhZtPsmuRdwDPvpLsLtwy85NqWMaMwqBgHn5fnJArgT95e2cG7Mj8urrQ7t",
  "key6": "28VoAHk18bG4SmnNtQY1U2ywbmbM8ia7XNZEt1NgWoboskPKw4BH5L9tMZH6dcDkE9j1oNKTf9LTsf5nZ4LvDRZZ",
  "key7": "46rshxkUz82b5hu2L2UUX7XqgJTnUvSXKTxzRwb3ZpZHdRmTUrNutZ9igrCTW4EsLWbfvKuAh6pYvzxqv3Vkjbap",
  "key8": "3X7jqd3V1AXrFPGwqrdRHLSaJSU1Vc1v9K2vQoYuTfNGPQ1QZtXeqF5e9wkuQsbZPthSmFeVXWBNV9JWZuZ2mfUr",
  "key9": "ebp3FeDV4r2MRsjnUoSzr922U2nCutiZF9mBbmMss4rDkEwZuxZEntGL1zdcfsaCXXDFmFwPqTGhdducW5fghKn",
  "key10": "65yL5B2oMTmV7iTyLKWtchxZmyLMpGwz9KEaTj6pTTfQ5yNk6aNybbdbvM67jGeVH3ySetozBw5t96XF4WSmkQWF",
  "key11": "2JCsajd6L34ZR37cuiAHXzPDmkeURB1wNEQpYNz6ECH4qaSffrr2Psf5tZw2bkH6PEsgy51Q5hF8w4fRHmfb4tmi",
  "key12": "3pjxpUBm7divGiRV8LVGKdMf6Gh4y4Ecj3yZX25B3XGjZAKCrtrK2rpF6bSdrG73sYERhzXC29sq5iAemqfUYTiA",
  "key13": "5gAhd2Jg6Hfzq6fSfpoMSxRprmLmm5p7D2euS48U4uNa5yss1oCq8FRzPudixovYVcp2Qyic8FsGvHov9cqizWo9",
  "key14": "2iupUKYBuAVCUdEW2HxaU2bNoyuHqNhxUGQBibVTLyHzAgTgEDAJyStKaD25ZeVwPZNsoLJJ1bZwMYppF4SVQsza",
  "key15": "2bdp5AJuQiUXutYiseNiiffF9THVuiSFJbPaDXKVVcX8QfNmY986q5xMp7KuAMRDSpAEZX3MeJxCNPHUVLwWDJ6Y",
  "key16": "5drYKBUwykq7xFDD2ca69H1jdXv7X2vpbzAwaq1xbUvJSVr5Jgu4bQa2ptmtyav8iydnfQQcSkFmFQGTSPCEzazN",
  "key17": "5bFquo4BGRi6GN2A27nv6aTVEwBFCDfFNjMZfRN4jAqzwEWM2zLJCthsxerBuymtpy7S7p3veFofHmYx356wFttJ",
  "key18": "aGoNP8JHHW2Rs3v8PbBj34vyLo8ZBZ9UuCTWSu5aVz5qvTCAPLLQSphMPJzWRSzajG7Bdaq3SW4CdVRsyXYNtJh",
  "key19": "121WG6PMF3muLEA2YmrjQTHo2yk5e91miuoq1oAEGPSkuEscyLHKEAQNPqNtRXWU1oRh6Q8ZSKRtcpCwhbfcW36G",
  "key20": "535GKXy9zBy2mpErBEemUf5A9GgePyscA9BcM833Rn7Vc9GLZLTVHjwe1kv3YEn4cSq3sc2YmrURVarSixtfwbYi",
  "key21": "5RJWDSy8HGXMkcXc25ArGSZL6u2nskpcEd55EmYkXh4VZDzAjdnkZPzuxGHYSjezF6BU7ZVdw1PYDkeVDe2YEUNR",
  "key22": "3uLPtDYcseH7FjczvU5oQSnou1WnZgxSGFyjzt5yhm5Ea4gEBT6X7wsN4dECskoZxKthHAPzPTbh6MsEwKSG6TnD",
  "key23": "3j79DAjH63tSviwEXPNTTpW7scwEZibP3SBvYHwMsSCRGCcrUS2vBJZ4LchPvMGqik8NacPn3T7PkPYr5adGfb51",
  "key24": "3oTiHN6fckmiYF4SwZJPxW6DSf95gsUwQJy5FdedQE94fyZtoMjkRyjbj1ZhPZwYPeG4Tqp9HWa8HrYWVZt8qsNr",
  "key25": "5VirRgZbrV7Fc9iHfv3PZPQsx3BHgjqAjrPdDExQq91Jpeqar6PgUSggaPbLLR6nJvQN9k3m34KMo3SWKUrkVaSk",
  "key26": "4FaPuzHtVvX3oDHhgnoypaB41UagWvMKiCEt58UPFifqazLDpTi42jm5SKdvoyv5Bhe8n9NCTjVuo5NcYN8Mx9Bs",
  "key27": "3zWn5rvHSWR2o6Z3P6a5pq9F52sT7tsCFHz3BqmtS1CUfRGkSZ8GfKDD1ds96UFBG4xAhm9SKWVezmityXTvQ6ef",
  "key28": "36r4gG4hndaCGprAy9sbJfg9jNSvNsPtksNmntq9nYtdeqGZixs2HLTgUK6rXUP7gPBbuduMx8CosHdMNDAU5Uek",
  "key29": "4sNmDkq8US8nGH5z1t6Pu2J5zK3MSSdcCMTKnpokEL2mwSQWqd7o4sBSEyh8jK4SDyKpisygoMXyC8itDDLLuj1c",
  "key30": "3ABh6AycwzEMENBoCeQ3xw4qwH2RQYjZbuLBxq6gKLMqc1e13Dp4BUfR89tQ8fJ3tZ9ET4JG2REe44jL9GiFFdBG",
  "key31": "3xxUy4o22vwN43trxmYsbBLVPzBRk6mf44pZ251SkFxNRu6mJfXz4mvCJbHjzY6dG7Tu5EGqxcYRwchfpYhtjuCF",
  "key32": "3PoCfXnjJaEE9HfbcRWyXEv6nGz5VDhcNcn4hBDZjrZdxSYRPDiwsBEqMXm4Sac1xj2MPuWpLTmUra2Z6UnTfYBh",
  "key33": "2g7HCJZ3UZgNPq1cLF2meETtcBbXaLwCL13smwGbj4uzWnapRs9sUFeEM4Jwp82d1BWsUgobiwJLJMi22wTkme59",
  "key34": "5kTDdfGbWhjbGephqMdnfe1wgUQirsbSexYdwmTpR2R9MqczSudvPPaLtYtqmAW3AGeTTo3DhrGsmN7DCjkMJ8pM",
  "key35": "2yCWZd8P2xFxfARDxbX78Bn5GVn7d282ku2xipA3QcGNKFoTJHFBqmXMEsfyqHMxch5YeCNABaR4g8t4DHgz7UKX",
  "key36": "39yYLMjMkM7wh2YtsBxAHb5FEzLQUHDchgb2YSgHWAFe8M153e8K8NPdoUvqhoNcJpy5ZK5niPTmrGzkd6ZMW9ks"
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
