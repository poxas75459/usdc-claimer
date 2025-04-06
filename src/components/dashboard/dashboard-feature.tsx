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
    "2EWjCVRv3in3sCbR4LaPuWuHwA96c1phQ57zzfsys3WvrBNjYeYafUhT92ncKgxupFNZRJG7vUqBuPMaLtcuU5Vx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1gQgNsQjnw3gTV6L3gccX8wwgNTEXTCqRA7faBeXUTtxYANTQG28dr4wAzEgt2Q91yvFJ1zuHTegm6MUPYTXHjK",
  "key1": "2yz64YtTN8nfSC2usSRJfJY5VyAhWC4Q2too1FZzYuHcgKN5fAUUNkGRiuCnWRFR96GuPcdsHqmZtFx5FCFAWKib",
  "key2": "4W1LEiZL3cVXRA5v4jeSnU1TFKaC3SKk4UPmdLH6eQ2J5kLYWgEpnDT4hPYmqgFb8E1oS5kLTtHUSbQSeELuhVeE",
  "key3": "37F4GWtnQPxcfYhHypoDoWEmHVuXe5VCFV2QBqHy8XkAbdWoBzVGkCt37Crp9c3vBrnHmC1jBdh6pXNo15Ug48zT",
  "key4": "5CAJyws31FjV4oygmuD1HbF9SNnYMUVbwZBPmArf5ZwY1VkTif8H6zoVmZBuXyQqVrWpWnfDTfUoTdFTAfbu6N6k",
  "key5": "5T9n8YFHK77oo3QAyqe6cGM2LsSMbQGBd94vUfj64knddcozGfetFKy6otasNRdh4b4JUfzsNX3FEXjHoZiKpzSo",
  "key6": "55mtuFqUHoMVkwvXjoDPik4hdNSGxcr2FCDgLyQ5DEBBoUgshKondCJERYhLc1JCyFk9YUYEamGbbpy19ffGfpJF",
  "key7": "56KUJ7BakixN2HzonDSNif2fUdqk5DyAjiGxc9qvDzkBxhM3e1afNk8rpJyRe1fWJZA19qfopAMdphNmWb3ytiCp",
  "key8": "2PLcSht1ENk98YVLxEYhJbsc4ReDWiV8W1Z14jZzLG1T8Hb6UVK19MHdyimsa8wWSdgF4ek4BaBkDyWbQgTaev4",
  "key9": "5kZMyiuwDuxFzJ9YhSCb564ro11mGg8N1JYpYiw2vcYwzX7uVkDuLFwgQjGnUyQHeLGbdpX1UH676QA3MHR16LmN",
  "key10": "RGMcCV5rMas2uRdoxSe4TkCcE4x6KZebwC3XmPF5bd9fbYcCLSzT2RKeF6bQWqifJwvEaBzXJRUqEq8fZBTmdeh",
  "key11": "5WrmHJZ6opJpmuFmtk7pjdZ6M2M1rwnCca4atCAXYR4LsvYxUvWgbRWcYBULub6dbLpEhgpc5Qr3hJtzsrdBXj4J",
  "key12": "33bmGh5GmiiWb2kMp79gnj26tX3czmPArHfnzQmCphHTBNYqQ5jBiZge9MrL8daerSCVaX21nUqJQu7oVgUo6hDT",
  "key13": "5EaK81vcVYhnHZbgzefWQiidegLbKeRbcJUovZ6Y2zcZJSmDh1KFEErThEPct11f3CuwzDEcGtWmqSgooGnGmvmH",
  "key14": "2GrVAJJJvD1FocRaGxB96XXXjoQPhzWYnrkA3xDcy9eBZXCE1uYZfLb5d4sydh41qYVKHwjppM1u956gSMX2TvkN",
  "key15": "yd4RosU9ex6Mir3uRqqbQxcE47a4WQtRwmZKpqB6HmX3ekjAPdSJigDXqNNQsLJaPUgi29fZQy3KZT3nMDQf5Nu",
  "key16": "38RfmunWRmYJy86tkZvPVuUSmExXcLUe6TBDTsJNVHMvqVbuNZQzCywQonrGksXof9dnw2w6Xjsck7KdNJojvpMt",
  "key17": "2XtyzWp8eFjoFREi5oJm3jemDnPCMbMST7eE9osiKr1CFM9dNWKxonz5gFVf7X9iutJgthzWhcZZpGNNYdA1NomB",
  "key18": "5fGN6v23hmd4DLpSk19z7s35FUJYiyWmR8NBEds4gRbx6YGxmceYFiQJcHRB4rGsviLf9JcEPN57WMsjvdYkCfhi",
  "key19": "59XZJSiy9Nh4Wouvc8w26hqiRwXkfyfcxWNUqrhrQaxwcDx4GuLsRRQgiapYELfDf8yojv16PEhgcR6cHDy7PqUc",
  "key20": "2tygkv5m5abf9U8cb5WRU2qCYxeVoW49HRXUBLicjK8pJ6y4ymQq2LyyvHSLXqzg5ZMTyiZNY26HHcVkRp2tgxaU",
  "key21": "53PaD3Se8XJy9xx4Cmr7XS2X574aALX7ERXy6m1qfdeDDCXvnTj7o3N88yoRmccpb7GCUDJjcPhVeoV7XTwRj8uk",
  "key22": "3qtyTpFM1yGgfJtUEXsAr2AKiUmba2csSbNC6PPvPDo4eZy23CbDPV66aazdnP5ZTmY6qoaWndt3AubdJZXqY6Pz",
  "key23": "56GZMSu22qnPNE5TfAUUDBeZoFwJgY8LtzSQ8NthefTrCjSHJwq68dFoJWiXJGkAJfqaAJPLyrN5fYe9afW7z15x",
  "key24": "3VTNdGd1zbAhYniYL41fszukBuyvpHTjQ8iRrUYj67gXRb49ukitfnwSmz91eg3wzs5PLQAeKfxzgJHLRMXNQq5Z",
  "key25": "uD1gQ3pMQnCQycggTjkFxyRXQAHZffNkEj7StNLAYdMtAL4keaCioBt2w6LBVDBgyWjuozwr12qvW1UKy8XcgLE",
  "key26": "3qNwhnTK12FGxKiELupSHTA7SLX7C7npkqEXJQMqSxbS4HqcWdonUTvyQBH3zezecv759bPZpnwpgWXT6vq7u87E",
  "key27": "5fDiDWB8XVTDhr9kG9x1dyZ7r4b9gCrgDka3fD5F7XX9q5Ro1es8depUezdNrJgWMkwuWiJZnf5FyNhBrnDwAgTL",
  "key28": "5NjRbXwahA1ovwrgza1dbVHhwyzjDxvVCMnGXMDQz56XVSVAC2WwFpY8CeUEz7i6FNgN6FRV6V3pDcKYbeLdXKBq",
  "key29": "5Yn4YNASieF2drQKJZwU5NCGsA7UELA56u7F1rMaSjaBJrp97yzu7uqjeKzYa3oHyxyXzzAokJS4WhjjdXiaPK77",
  "key30": "8e42PVVcV6dFczMWUai34fxk3f79t6d1thD3FRcZQ98xRW9eVzFy3utMR8EgCqsBHguiVm6uiKPzXD6kGS42aam",
  "key31": "2nzVqG8eQpRXnSqwtuAd2xVrecfR2SdumWDdp29axtm4Y668nYxdm1XzjmnXXpbBZ2JUpdn9bczKbSE9w66r6etX"
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
