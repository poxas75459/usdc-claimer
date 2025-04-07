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
    "57gBL4eD13MaybKtSqz6YdBmXEMbmx8PTfcVku85dRmm1fhvvkok6VTh5wzNyMR56gd9fgdGS7NXR6Zb1yNQHBPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ry3ugh72QKexMeDhNYerWFKsSLPqTJJJmfesG5NkzpUN6Z1D19bJwGtVa2GqXEYNZvdyDBa1VxvF8Dm7sA3ScCM",
  "key1": "5bwUy2ZyWoSra8GrdiAoCQMxXUZaUWHTN5nx3hSHKd3bZjVF3bdEZraHcyQhcY9f6m1awW9GU3G7xE273iA6MrNb",
  "key2": "344rV3a5QC3go8SZ5mysyv5jMpKR2r74GB73CWn2AknJ9i9ycw64CrfAon4eBV2THGxoa7a9tdxgg3d49m8GZC3j",
  "key3": "2N8BUQ6BzHZCJPxQQB6SBtwZUQE8fcURtwhwvzxsAeHb2osLWF1sczYqrjUD8YDK6SXUig6YBemgufE5eHccNG8",
  "key4": "4GjunwtKX7bGmC9rgT1PQG9qd6Pq5HbkrAataSPoSJe7FAYFeeaZF4jvtnZvubKNxaoQJZuEtw4HgHX13sqoku75",
  "key5": "2qKDAaBvJkziTkRNDsjp4jcn7h2hXwpmxsznkxALppgbGY5cwwcQHprnGxjMiybnGFzrf4wxMjfNgMqNjf2dfCzS",
  "key6": "3TM7BPFxVKHdAvoZ8BcGsr5ofDt4vxtRyD3gngEP4TrSvAidM2JffdLLo2qpUcLYyiZ77gGsKExX3GCDxz1Uzewq",
  "key7": "44kViW4utcSZKDtNiZwJUT1vo4j3zuSUG7ixbZetUMoB1iUniqbrSquEmfiqjLCuRFJX4zYF7MQw2J67hCrhK6MY",
  "key8": "4wM4rgFCesB1f4jgTbxdmpGdQ4aFPbaaJVypjEos5ja91LbBfL12KJicoAQWQMS1x8ZBRQuqJBJcbjAApjXYgXVP",
  "key9": "5mxX9RQjSvJSxSMDzzLe5tVRdTAPqWQem3pg9mSp1RXJBJkubZQdaPhxB7dtiHNJH7WNcdRTQ4jwQnZfAEd2oLsc",
  "key10": "2taa9nzF4tjgBoKVzbNNihPaQHKDrVgNisHxJTKcGQADmqkRuPC7Y1V5m1MamaM5UgaT3S1P7UZNdeQ2XmnUmKuN",
  "key11": "573V1S8uKcM5ztQkKMTh2W6Y2MYjuVnS641owWYcX9WXifG9K2HV8me1aA6pzv7jZhXdGnGx8RcrsLAsvabJA78w",
  "key12": "4FS921unR6JQ3hK7CiFsEk4czSTmDFVxwxiNBxzDybtYV2VrAAbYdPDkZZkeZbgnKLsyQUmqfv3NmMyrozR2MR1U",
  "key13": "5GJQLsE34tzWhEdHgAf7GyfesMzdU5NApEcnbhmWRMAdNktdN54j16jhKFgDJRJVHeNTzdm21uwuuP7bbLsQ8Hts",
  "key14": "34o3f7yoviJHegnX1dKW4wsyDMPFQvW8yN12NYKiUz3hL6dkndKCa4nHKXX6HwXaPTKirKsJ7MuepvjauhFm9Uzr",
  "key15": "M4tsk294mLP6vkSfRs6Yu46hTWKVbY8tPxfCfswN2QcA9BZ9D666c3wXF1qE2tYKrG8sxwPZwXHtREQHSs7EnXv",
  "key16": "2HVwa8yHm1ca1xTJWEQ5FNBKeCJ9Wa1v99KBpNKpUvBgezB29HHeXNw2LN71FwgP6bZGsBuJJ9FGymXopuDikBZQ",
  "key17": "2sq9TiCtbXkS1XN4wV2NLC7TfaZu5UUrw4ZFci178wusHJD4aY4EtNLAVtwRdQYtefDV952RDhGU7WenL8RoUqBV",
  "key18": "5tGhpQVGTiWUP7NX15rrQpJ9f87tnQtoqhbDsAwNoWoNiseJgU3FCmFDUKT28ngDBB6vriXyDnWoo1co1zCbVmL6",
  "key19": "5DdXPRqAPESrqQQW39meMrfuJgwZo6vSKzVKYVivvjAALNDzG2kj4TSpbxVenspEbSk49BEQUKkUViukGghix18C",
  "key20": "2CcqxAzjWXvssjgziwnTK6dCkUjhiH8BPz1B12KYniyV8PbykW7dcWaJt9uy8yDySRxzyGW9y2bpLBzifvUCs9Rp",
  "key21": "4suGAE99jy9DYR3doo1k3mHypEyL66qWoycDYKg3oPZrChSLRzJUdxsYdBxMcy1NkBCkZGqkA4s7bQHePiKBaU2y",
  "key22": "3yrCddmAebBEmuAe7ri9AfgK2cW3EXLaocKs1dQMo99Dr8uAMc75pi4Q3WgyJNcZMQBio4iCAea74AHNahFjEzUR",
  "key23": "4DSTULJERbihNFCP4fi8C4xaHeXkCTE9SvQnyDdzs34YyZ6tKEDGg3PjHhJGSTZXVr8NHgz9bnLnfGRhcbi4vsDt",
  "key24": "Vk22LFwd6DhjP1WcU5G322dpZVo6v4oBcSiutobwk6tVK9q7yocdjT8J9Bu5YQPbXvSZFKHVSwS7DjhAntD3dxK",
  "key25": "5uoPXzK2qBze3GLnyQuF4edWoijRCC2f9jrELQrnhd1EFCfuVwUPCGaruhmYvVk9dTppN7GbWh7KEMEvHD3Mxery",
  "key26": "5AryuNVPYgdzR1yRqeK6TwEyynoZEzsaWUsTysq8agVKR4PzabvMryhtGfYn3A3qRM4YppNkYAxe97FTsVEdtGVP",
  "key27": "5Nvyejp7iHBWQGWS7ZSe1H54gwuubwdnn5gwFNkAD91oQCHnL93tTXs1qe7EYAXzEat73mkoKykVBAfemDAx9uR2"
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
