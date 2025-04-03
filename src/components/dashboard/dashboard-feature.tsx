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
    "2WdTwJ1aWzQLUHhiZS2RB2313ajbB5dferN1frE9J4KkhAs2UASie6pWkPEUGSBNXADXGaeduCcHopfyLjs9RSnD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B3o8o1VJpLKCzuhw9b2dgr3jnwtQEcBc6iDykFRy15xzna1SMGT4mazy357Ssb6TbNbN2xEFe3EGqDJpHRUomdo",
  "key1": "4HaWg6LKXKzVgJg6dZoCRQe6G8LtTDHd95GVY5xKJ1EEB3XESDRuZB2shiG7XgWtKmqqx235FFoxtU4gceXVzXuR",
  "key2": "2EhBBN4BwX22wUekxy57MvzZthjFwDVHcPf95u3xSwmumjwBMuBLKh6Pr1rp26w4dt1Ac75QVwgMq7r2MpDg3vaP",
  "key3": "3NttccstpmfgLEm2SHwBCHAuewNcJcqBaVKr1kBBkK6EKgG5RutqgXEkT9kii1ttHnvqFSyWqKwx1o3D2FWg6wWe",
  "key4": "3aSFFUkZhDAkBJxHVAvJqdBEBrxHMsdywcC6WQM7ib6pwUWGKK4xv7Gutovxuh6PuXnn5L2rh9Rfo2hcMjuaTDhq",
  "key5": "5or9qYXt5oxb14T4pVepgeGJiUoPzbq5YFWmFCu2R8wowpt4Fkb8HvbeRcEsGtrJaX49JwFQKCeCxyWfAPEJLoqq",
  "key6": "5pXsAvC3o6aVzPdqqFwoxNe75SCW9fY6C3DWddrZs5sW9FtqUk5yKP8FbtDmRYfYq8NPm8GMTBwLdXVBumBsv4XP",
  "key7": "2qPe3x56Z2C35NQPqpK189nmRGFYp962YPZJsy9rvM7Yy3aoVTQ2p8jFrkDHtLTGSQkd5Q3SCseav7m5bdJWpKaA",
  "key8": "aKS2H447JqzEXC6W2B5A12AoA5rY41Ysfcoip7NxtJRFsZ25jYrmQQHi6ZK1Znr5dBGjkmVkoFMvPU8uhKqJybr",
  "key9": "4CbZGTDuNrofPtNusmyvXvy6DoUoWTZ7aMTqXet2NGQrfkPCjGREGW4L4dUvB6rmZKYeBmYtGrLcEVMoNss94JMH",
  "key10": "4VJo1wLy1jt8CPor9EUCvRotwr5U88dUksrDpqD64Vf4CaDDu6W4LjXWN11dHhvhzgRPXsH8hEf8WxDDJ3D5WFgh",
  "key11": "51LxDUkqQJN5Qz97i9eHAoDMbgR94MAX3C5a7jr7c1oPLSnHVzxZRs1DgoaByY3NMZfnwcVLRxNJcs2pnDQ8uVWQ",
  "key12": "4mNiK6KkNZGPXpnCP5Vws3w6JMwSTR8AABAVdWTX48E2ooY6Q3vKVBXjNKgnu2ss9s8tbX9pq4dcHfH4RcBFZSdp",
  "key13": "5hHpsRdaz6W4eLjCdma8crLBvp2poXPbMvex62j94GGkLtcVAMuG8y65rRekf1wojZuJsEX1anySeWF4xiMwa7iJ",
  "key14": "12jvxhzfKG573UNnorkoZeCUwDcHdQGfdfWoq59rXNzqgAs3CFRHMK3qG6uqyMT6s2n13iKYNe5wvg5oUBryGJg",
  "key15": "3B2WGxvhDwMyZn5fBiDESjmjYywsmZQVV44iUcmgz7D2CD3xq1Q5xvGt4fybekg2Zq7CzTY3yGUwomP1XNP5r86u",
  "key16": "25Pqjwgfe7ZgCdQrdYs57tTziWK4bGm6b1pU7FFptgpNc9qnRTiNE8inTxfXbCQdnGGsE2X5TdU5ngw2Sp8VBGAD",
  "key17": "5iRw3wFbshyFGfXSM4ggZPMw62fTZebyo7TeMBJL3MDhTyR2gmefyNy47LgCUqUrQKzgzdCEdqySS9NkyoUVwycD",
  "key18": "46oZP7x8idb6csegpDgGX2aTEwFFvVoXw8PtvvZQcEpE6Ufjv8kX73Z5Scy5gKf3ALzfNjbnXhazkH2XsJn4o1Ho",
  "key19": "21ZFPPZg8YZt83Pn4yKpzkaKSZG4tPrZutciinrb5M7iuGiHeyRqAaYESwSYYKv7qcC65xNHXERZXEumnFFJURFu",
  "key20": "62bcNbBJiJqenkr7h5kn5GcRja91qXPVvtwWtorZn7L5e7pZKim64uWoXjX93nfEoRf1SMhmSDnVT4MbxB6GaAfw",
  "key21": "2JL7DyZmeTPeW42okgSadAnhihLP56zHUqjBodnZWJ587vEoMQrHLqyKFiupmPxoRBGwjrPRaLpuCqyt53iDqDHp",
  "key22": "3875Ee4WiGVCG3dVigcL8NsmwwfBTQfJ1jyCvCdFNxDYiCnEJ5u7vaywe14h2HyBb9EANt4ZugFKsHDZHeh2vWBu",
  "key23": "2R6ZZ2qRUBuZwRY3zenSE3PY8Bopms1bbnfrB73xERaA4wvArzDAobaC4wKuGYRnDMRXuKR8UB4N6pwTn3duN3rf",
  "key24": "3YTRaRJMAdbsJjqPEKGXmeyQFHyB7EjqXDSVK4sf1iW5dA3Xs4WrufGF7WVVcwbqozMTeBvmSkSo72oP8TwzxsNU",
  "key25": "2hdjYvsseadSHXswrv8AM7oyEVnFkqF9zKJwRN2Cmg37h2DF8rrAFzndjJCT2BGPYRJLEx3nnJn7fxMaJmGyWTN2",
  "key26": "RmWMkgNBzGWfVTfaoJX399FbHS5DkkCCyw477c4skoqAi7rVeq29s4jDGxq2778VLHeW9xD6Jt39mvAS9mva2jC",
  "key27": "5JGuDUtHeWsf3WTVMTARJTuA7mwPNuN37FFCqt7H2S8Xm9dpsifMMXYKHjNp5thcjBd4G9wYce18JXtbwz986PUJ",
  "key28": "44RgaGtxXottWYgAZzTCWvVGMs6RhTpiyEnFnjdc2S11a52ARkwVt6c1XiordDH6XVJRTDgcYqxRaPyhvjPFBCrT",
  "key29": "2W58zoserRg5zo2kaUYyJYPJAXedAm8wmT4rTjctjZt8jb7uBszM8UwAoYRbuE2R1rYm3BXf1ozox6ezkwQ7FbYW"
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
