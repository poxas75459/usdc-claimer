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
    "4iKLg5B8uCEH8XJybBCQf7WsYryTkwjnmZaJUVfBczJo8CsN2nCzh5mJzgkf9doTYPvJUdgcZ3Z1J1fhJdUoDaDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pWWRAkWVp3szHsbjFtJFwXVfH5mBEdxJyGSEszb28159BryH8mWJoUuy5hEfkzpjtgqaMkDtVnzkAcamAQKdcQj",
  "key1": "5pAHpUA58w1oPMpmkPQn58eP9J4GCSVSzPtH6nMzvY3F3Vw1etWo9zzssuuadZgptPz7fwxDoBo4WXHfp9W9Bti4",
  "key2": "2ci1RxdgiDPSG8nMAuRh6cJniCE8dw8L6otmmyTumfQVQ6GcChP6522W4PjnXGud3MWw5YxeRqqwTDR5eAMV9iJ3",
  "key3": "5wx8pTEsDUdf3Ds6sVhc282SBkPVxpsRQpckmqZ36qPMqnJpQyuobd3nB5rpuLkQaU7CErT8EftMwHKjjRYhvqyp",
  "key4": "3xBrC3d3GmmULz3UvHQBzf3qyB82DhJSJJPTPW2MHSaKMmrF11xHQf4aegDGRFLATabTt2WbfNV63GyqzcFksKsT",
  "key5": "27vSpCyGDia45rJ3uTd9YxHD1NXHxrpDkWNYzUsz3epSgyknDS8WHNaxmy1ogPbSLr5PwQsEiFvBcENwWgfHAAVv",
  "key6": "2ZNBmwuw8uLfyqUbJArX2ZGqrt8o6hk8epWkyia8pPAFn9RCuUubKDBTfEdGLVA8fiKE2Rne6GvVtw5PqpLmAUUZ",
  "key7": "3T3TKXaUTAeBuvKpGanj7mQVNx9GYguyrfKDF8ip6H2cmgLJZT6cV3tUwaBu2YCBkrHdE7Y67uQgYAtyaMhJy8qo",
  "key8": "5MxSXV8DTK8yiJni89Qm57av34DRQxGZRk4Bc5bEsMFheGnmAfeBwaqaKvPacQeCVcsDa8v94FBGXrZQiDqprHVo",
  "key9": "5YxnPJhqq2r23aYsemQxP8rvajFA6AEcfucBHisSGxz3QVGqaqpkTT9KW8x6W9zX2APzHAhwJPxcCzYTtrPH1yG9",
  "key10": "2bsmUPaTdWHbtaJUXSgVj1ZMAbVDurmgDwjRHBkHVUwFAjDTCtddC3Eb5wh2dXMy5SzucXPP9EiNLbereDRzgxky",
  "key11": "66ZBC4d2fMLhmWYZMyLaKZ7LC5BEGFFh4zyLbbYwZ7kYRoRktHcefxybEvKAqaZ5xvCXt372suqAMFpMEFmsinFj",
  "key12": "3dakqLVib8aGNAmWEMSr51YwCN7AgMax5p3neYmFq6x1kojEzbKBzRzE5sgUQnYZTzHvoffABcUmR6VhePKjnQ7W",
  "key13": "4eicNjWk87DGjhXAwEu8KVF98zVHM7TLoF1PUKVHcPasgCbUCaoe8ojSFKVJCevczj8F1qfFkWSLTBHVPr1uJrG5",
  "key14": "4Lv56HzZMtMZztA2s1ypgXhYK1iWTkSi1siXZ8PqsFaPUZhByHip5zxa87tcL1JdcCczZHNEVeSSsVtbBep1Ha8o",
  "key15": "5DsBrYuh6ip9rD6uU5WXGsZP1MXTmzkzKu3dBbbiFuu1Uq2J2CsGnAADFGac49yGvFb7DVXt4FvbHkH9r5GjCgjs",
  "key16": "2kjnxfFXfzQj5a2o3veefd2V6xUM8VhnyVyCRHneEQbFQrYgEV3DsGgydfbiCUeqcSJtqdCC2Ve1tszAs5rSboxm",
  "key17": "3ozzQe3dyttZ5u4emRmxk7dsD6wPodFsApFLTKeNzRDVB8gxG4XLPKXCND2iBJMRyFwFWB8ok9MgJi8ivWrwcbpH",
  "key18": "vDAAYia4CarQMRXMSLYw5A1xeLZfjGnSFXrt6iaAHXENhyMPXeKLEUcm5aVVwcvF1gihtr4RDCzQBbxudpvb4F1",
  "key19": "6CVQBhqJ21kpjM1hAvYx4vhTTtnQq5V9T1ZUWHBYYn8WLhFueJvMtd3LDaKNiqp3upb6tuMS8Tv4damfrifi2qg",
  "key20": "5qnCe7yNuZFGQFk4EuLZKNyXPn529KKr5o8UMoWFWFU9jVSZsx1xPrjdjFRjCGCFsfhPifHpzLy44Uz8565ncxqT",
  "key21": "2SUSAP4EivRJyKVKawxDWxSuXDpj45cL6QKj967sohnJmHnaCtv6aqwzrVAmBytHprp12HSgDbWWS65PhcYyhk52",
  "key22": "62Yd4vgf4Dps9MNc264uxzSFHN3We8CZto3yA8SduUJWFGaACZVYuMr8wMUHsnKxQHCDFtcQ2X1fPyXCdZ83HeP3",
  "key23": "2EpYfM3oqsaS5gD3FUudzu2z6bYyK7DBMWLWEWMMDdRMHHmkMgNwa5x1vuSsGJp42tqPJCvt1AHHmF5sjooyHBe4",
  "key24": "675LNgw9XmEvKo59JMyJkqbpXVeT2hFXC52GsDYG5AUdtcqZDwu5v1a8QxVHZye8YPPJHxNAguBajo14Yg31PxNT",
  "key25": "2jrXf63imdv4Sk9iTryTknWgSHyyxzhtAtDTUNKRT7bw3TCiFK3KbRnuvNBX9LST3VewiXk57HZcZYUvzQdV5dL5",
  "key26": "4V24CSNgMCGUKGSsPGdzhjfHmcjY2MPhq1W7rCtSC79jvufmdshFRscg1jP4G5RLZRc91U4jBow2PZdPSuuB4Qc",
  "key27": "4HU3UMn1KdjgB8CRSbhuyUfvU29wtY6Wf8BP9RSDSXnHrZjy6PpgK2Y9TVEtahJ8kCjy4gZDVE4U36cKEQTsTKPC",
  "key28": "4di8BBDbraMCYPkYRjPKkBzAYJw3K2iuZepx4yrPSUFVPbZ6ddLVL739xYGLE8oJ283GiyguHCufhSCFkHMfksDV",
  "key29": "4gnrFhqzyoNFMLYxadEz7kbDN5HX2HXexf6Ho8FzY7LdNn6ku4AVZ2i2zEZ7TcUE8q2fd2XqJPqwjH5b3HEQWRga",
  "key30": "2sphsgpB7G7mqizyNFZxuvgV98oTJ8cXFL8qMM815Rw9xH2iPhE5wu1pEzdFYQT7LMC8DygqEdEy36Sfa7wQvTx1",
  "key31": "2mXRHtntSku87c3rTduhWLBXWDBQnUwHfYTY2dhrK42wbs6EfQbpKKEk1t7Q7kmFakhq7YeBW9uLipSYxz1qromJ",
  "key32": "cFf6yq6bFgsQzCkQesWHcHiogck5oePE8R7uPtaZXm1YvmqbyTvL3UVVkq9EeuqhXm2PAnaZeRoevYUcfwj1FMG",
  "key33": "2pnB7e96VN11Cd3mbU39Rwcy1mGXBWpPq69DuvvsDqvVgsFq8Gw49sqWZhUtv5m1n4Dfqoomaa76ot5fyfufxqgQ",
  "key34": "41c4AjDtGmZbMRu1bum8nCBzpMygGcLYGhcmzjLmWvDRsjY1ZE5sm3f3VLcaSSWU9xFrQ7Mnow9cSATxG2A7CvrJ",
  "key35": "4qVzQJCEULm6n1d44NcNZ5REZ1mQZtVoSHdFj4Yc7cFRRjrZqBuP7SadpVpgMDc6nSjbPRyUpz97m9Tdj3iQtUhU",
  "key36": "4jmJ4y1GYMVi4D22EpTgA6szvHLjtedmwP7Medzx8xzEqzSgApMhjpb2nh2Mpk8tUjyYfRXhR5njZbBwzEBXPNgw"
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
