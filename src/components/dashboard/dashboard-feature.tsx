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
    "3jC8NpeuBLf4EbTr4GPV8Ar57smvFWGaMp83wjbJTa64yN9NP86WdTZdsppLwwNUhRmFeXtsv8CeFCu8aRChGBzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dGBmD1zJVHsKLzHVmuSuakpgBJ6NGcQKn2Vfhweyjyx2wNCEyKgvRM9Sy6g3N6oCwqBgLWyDhtPSMocwoTrEDwk",
  "key1": "3EHAZGVzaVLGT2Ni2Mg5YyPGrA6n479ogBhruq5WozUAouvhMYyF8wSpS3KKAbGbtdaTKoYzCu6UJanKReVuSQbc",
  "key2": "3qVWsSCNEi8QVwpabwHfnq2kYwCbEoTs7TpMi65RgfJR4aCBFQYEawsQtnjWiLRjPPqkAJ75AyVMZRkYHHXpXJGv",
  "key3": "27QUbWDeEMQxYevJXA9ykTKfXGsWxZVoLrLq7yKucw8gj21wZibe6MpHxWc2vohB3WUxawonp2YZ2cXcKVg5C8hz",
  "key4": "25E2o2CZCiw5yg63DyoqhFgvt6hFexgC5hFfKMc9awVvmEJLQuACPfsVGQj8k91PGao89yvY29hBpuxpK4LHjkGJ",
  "key5": "5bZcsVdHLhK1TsiZmuFduYT1FH72EgTYtqRksX3q7odgBkppXTeLsEqMeZcP7xN92Qjyr57bddBeM4FoubPtb14x",
  "key6": "4S4gw1dhvjaXG1HweaTTuXEbAjT7GU7qLQDc4QZ7vY3Dz4KCHPDArsF7xsa9FJhvU5qBjG5WptCrWC26kizycMSa",
  "key7": "rxFq8j4xVoRramYVVmDm2KRyawrXA7mXjBHdvSWHxSDkN4BqZTx8zVYDAkdGbow1uahTwcCmPJE8qYqpXeHowpw",
  "key8": "Do3H3fFp4szE6e9rRT5AnZQpdiQ3Rzdv2quN5JQ8TDUpGPX7b5EKRv3jm3fVzZRBGtYFGUJZQ9DnshWgGaHisv9",
  "key9": "Mp8VkkkPvp2r6gCQRtUCKtbiXkdDbSWuysvnTpbYJZt4eywtUbSf67YJ6iJk13AYLmp4EHx78zkCXbKZ6RDjXGZ",
  "key10": "47g4ezX5dvF9bE5AG8AmQkFzzojXbc7QkAhRBqbdardqYNMfoJ9NASJE6apDcd3aNMSrWopPuuvtxkamgE2cryaL",
  "key11": "4bgNGvCCeyA2ZUw5FhfEMshscH1D6bw5LQNWiqPT2DSekvYTbGGLhiF1UVbjmC8PUfNCkWdRzp9CGPE4QjoXUcD5",
  "key12": "4GrJ8PUGTQPuzhWL9jmryndQm5Jjcw5SBzkqoau6zeEG4RzuDkrhpoKyqDNvLN56nkcRXn4tKdCDEQzptLUL1qFS",
  "key13": "3yHxtvhcETsvU5v3ww4b4hsozuK11kqe1GA73hjAHT3afZYRVR9hSqzpkiXEuFhPqYmNGnn7HW9aewH1nXS4awB",
  "key14": "4XfLa1Qow5GwNoNgxPdnvgH1kQLGLrrY7JiHAeV4J1BvW1teQiPuD2TrQGnD7bfCTZsxvPr2PMph9bqHs9HE6AAy",
  "key15": "FZtxhHo1XsZB6maZUoF6GWwZTizvoXbmXbXZBr1oP1mDAhBJS3r1ep3wsicNGtKgLpT4GyxXjfAYhXKhmaVbYVp",
  "key16": "43Sy5oqMPTt6aLxi2ix3C2HScyvdbGkWCsxtur3NMHHrwrNBb1oZNdjgahUEH93FuBrnGRq3joF9yjip5XPbiR7u",
  "key17": "oKQdbAHPxMDLXTTYqUxzG5qmEFcx648ErLyZJiDf9rGksRrVVxmLN9FsRYQbgF2BFmmEUL7PbCg4mZoJspwaPxf",
  "key18": "4sBUjy6m2vi7cBPVHJuFStvmn7LxAWaHTTARCnYtTBtTBPLN6brH8qNNcAfRNdBiu11GpNSusYwQnAz1gNMAxkFL",
  "key19": "2S3R66B631X9xUYDLc2wrv9YD63ng8F1y1cq6fY2EidfmvW3eboMj24yDCQjX9BHoFMemzrfCvMvZmPYYKx2h2Z6",
  "key20": "9BhPe4Q5mRbxMixGdMaQBpAeobmLFhtAX9GpRwbczNhX3XNrhhYiy9n4VykpewJxgtqXjhk245a15q1C7TPEXPp",
  "key21": "2wX6hbgs6H7xdKYQNsUnh5m2TEQ3LLxosvxW6V9ooozudiXLxe7VQKDojZRP51uC4dVoT8G9UVHKUbnCwvgXXa1F",
  "key22": "5w2HgyeDqDbJLREki2CCmh2Jc9yt3QzH4B51MTgwnL5gh5xdAaGTKpdW8ERABbkK2dxgW2hKD7PZgdXzT5zdkLgt",
  "key23": "21hyAewjZZ3PmmwagekppS3zZM6bSQ8cqVVWNcQhG22bbkyqvsp4X3UmyovRxRrrzdx3bTsuWBVhCfCoC7vwgx2a",
  "key24": "2rmQZT1ocZXtXyCyff1eev3U3Wzyex8JYWjDb9hzLxoThTskghsbmR11VXtK3vWsKbjxE9cizhS1fnsDZYWQKqy3",
  "key25": "4RCn8Q5E7hqGW5rnGAo86xAFPeq2AMcuR1qzvgKn1emYtXughDTsBZyXPRU6QghYiy9aZShncD7Z5wfjdANb5wso",
  "key26": "567oZMXkdraNdeXuaD9FQdbEuom6KQDWhXgdpt99QPTZHkL8oqzt6HpRaoop7WVPkTZfKxNCZ8PZqJeBK3X8fWz4",
  "key27": "AM24CaRUoXd11itDG1wXsBLunqCJD9CzZ3itW57qxGauHNZUsCCx6PQWTFtdPCEnNKeunjaoe11QrTFpA1JqyQR",
  "key28": "3VPrkByBwwiBGbJwMxwS6CXVEVKbqHkE7eLWsCMhedXpq45ZKz4ejEs6E1AEZgcyhcnbsNL7xD3msbBSb3ZXKUiE",
  "key29": "365v6TKh1JPcnXqpxKWbMYzeXqhhcbAvLfwwXQcdKyBNRUiXzGMksEY45EGnVfupXhwpmgPZdgi5ANJSkhs74kN3",
  "key30": "56273KzNpSMoHR8vD8TvpfbWKaYnWBJZm1WXa5J6ntzNc4xJ9J4GBRKqHvB4h7QRPvQMN8cVn8wFHM69fRRWEtpc",
  "key31": "47gYJKEgh2UdoUUimcYoKbQcb4ZSxFCxr5AcHkh9LBuKAtSqkUXjrjSMEHQVEZ8wrL3GxoxtBYestuxrjsvi316e",
  "key32": "2f8wjG3eVzzVR6LxQrzNCcSUbBWmABoJJRPRPqRDjMmKpgQ1MR7R7o7E291XDNVpfkjccGSCU36dRtxN6MjaqNue",
  "key33": "yrvGG78jojxJp6r5yCJuRKP5cheYwkSr2Bc6tfR2334E5idW2ZWfamDVPHgvw7RfWxJzZuceEjV1y3LGgn9tCxy",
  "key34": "2Ts6Mdr3w2bHWSjbfPhSM7fJJRvYurwBX4FMcaQ63iisqqbTn2cmzCFSEAG5nSDP8jLFGifR6caPE71EeZ5FiRYf",
  "key35": "3ccbjMBMu2T8oMWjzi1SMJCNXVBwxado2qnEY4P5tvBrUEUPmk5nBGfSRoKGoYL6r58iguMFAqNK52AhnJPkmvfG",
  "key36": "YSrFueyE5eTfEddyX9bSBDHx4HaiWJaKSnRjwQgj8kCJMBCz6GNZDh2EHCTRMnyQFhbw9XpjrkwaPFtuDNdU9SG",
  "key37": "uuHX4wiMn3rwdgn8pyK1dG1fkoaT2QwpH2Cjst5DkEVwspTbgbdi4kaiWirAbBcxz9gS5yGzu4gwEFXAwGKcdkA",
  "key38": "4nGbZAqPRKMRyquNcovRCVotgghmC1vvgufiQgVHGXKizfnXsuXckTpSfJZELZQq7mErBWH4xN2F4N6giSWL75xA",
  "key39": "3B3RPpBCveVYniDnKtSz4Bhai8CkGDx8NBJPR1cMnf6MYMYRivYMpfbjQtH9cBqK2Ntwzn6b51bQRnYZmfZwLhxW",
  "key40": "43KwEJxzB9k4PmUMWGqAK1yah92reWy9BNPUmpRXbxj2yVTQ6x6SNx989hBeSuxEEpR2dR9n7RLM5W7eEgubNzwq"
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
