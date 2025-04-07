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
    "2927BbhTXRJacTjgwHCLnjQ7iFhFaDSZTt7MF7UrJGEHjJjkusgbdbDq5PPi9jxHfREumKuja7yALYctxxL2ocqn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aGQ9aU7JuZvfoQm4D924hGQamstsuKRVKzTJGWVmQs7E7fX5ZG3eXnh8nYbJEZ36KdMAcEKttBxtQLCmrafHAE8",
  "key1": "EvGj8npe8RapoGDEUdKCD1YHmWzYirkpssxFoFXGhhefk1y6hNLk9HD77qpLshcGDjSkHpUkFZFFL1bgFEz5oCR",
  "key2": "5vHKQ5T1K3BvQmjGNqJ2ykzAR7TPXPTT1xp6WBrReHsW33igmaumwUKoLAqTbjXjSUn5DZZcsegVoy1HsDrBzMMi",
  "key3": "31yF1TnTmgMVdBiXWY9w4yzj5iYNix7dNCHwUUbMm4xjJqxpFNZr6VdnAqNbvSZHnNJui7Hkos5xi5Hxwpaa6Hyo",
  "key4": "2LLfLHa7o6zGqteAMV2FEifGwibTqB3NrtBZECnz2pjvqbCgwCS1FVJzfmvdTjvaTTXvJMbzpn2dbDdeh8uaXMhc",
  "key5": "2Gk7NHA4PXDE8Df5LSMSc18ZQXzUbvcBgVZCjsd7ephXzNrmRrCm4BJ9fGYn67gwcNeeKRDSQwgEoLqvrpGcrWuH",
  "key6": "3SnDaNes8zknDdgAW2LiNrxBUfcteRZF2UVGPmVzD9Tuf8k9b3VPro6Tpeshp6Y6baCZDgfFaJufdPXCLWinQ9qo",
  "key7": "3tx7yWHmTKzm1438ahSL1TvfFmyrpNHmW5jgd4aL3BPGGGN5MaQVaMWr3KouVbLJz95sKjsXq3UdYNWpn4oYMqxc",
  "key8": "5yCj3f5hSBATi7tN22ovZbgpV2g8Pp3PmmPpKtGMsonvhLaBn5kBShfUvCJqHQBn83sk7QfMTGqxENUVCMbkn6j",
  "key9": "5sTdYEYDQERsKMiuEytwo477e4UhaJJrLTLDhVHjrut8YFWa75LCTS7sLdsiggb3NpzTnrMoLb342nUV5HwG6gKE",
  "key10": "2bsDiYTvxRxteNEgVXdGUA3Sb7Vsc1wN37GqkgB2mBJsZq14rRaQqGfWxWErr5EK7iWGYr9jv3wbziZgQUqBufyg",
  "key11": "cMJwmV1B2Epm2fH7VLC5gaNvUSfQRuFeKwgx7NYbdAHcz2zAnBNdBJ9YgWMSkKjzj6Md1f6iH5jSTJEomZe2eSt",
  "key12": "4S346emLB32qk2WEuWSuQejBeKs5cTJBFgDMVWx1c79rfxfh9gc42YgMc8jSY2YtDpe9dYtyYma6fVLZk4xc6gBm",
  "key13": "5edDQjgUMoz8Ct7gb1Gngp8ZiqQiPv5vZ8gTgxRcXPHxv8LNpUXxfq9Jtbss615eN6kBJtkNVxPTNtwTfWR3QnBc",
  "key14": "4nupP2svMAUBVd4y1CgU57Z9LdwrfeS75DmaKhqencKwKS4WJBDRFtw73WCYwKTTv7EuRFvWWHr7VZSrm5zduySL",
  "key15": "4WtSfVDwDbVorAoTWJy9b8wpDTWWE97vSRhwQar6icaMU7Jy8eKCJgFttQAJSp9FZY5Uqz1wGWM4cm5TeiXGnzgs",
  "key16": "26ovV5R1rgjCNoHn6LtKwV6JnhMNEJdJqTyDi2TKc4871iSmvqtiue1y4DPf4BS28noBp96Nm9dxzaq9yWe8THAL",
  "key17": "NUaeE8n4fz7t4Qydic5aVjDthumLiEvq1Q7cyWRpj53EXTQYaoS5hQt3uoGEZJFAM32G9mozEhCBV21Zey7s68W",
  "key18": "2D1KTCop13fFvkHefrVp5fYm3xTBx1XNzMLeMr1HFWkMyUfz3FyVLECwhwsV9wtsEd3BUJNnUah8xtUXoxCApzHj",
  "key19": "53mFzDzbA9M9G4VwPZnX75cuMNhv5FnYWDPTMZZF7GkmWUKzFqDvCjPQYrkswLBmFjV6UMxzFnKuS7AU7SR9i4G4",
  "key20": "3mx6dqqjgmzG31wDdASZLXCBJLMZosmD3kzdWjwNVoXAhKJMr6o4eN2v8Y97HLwUTJUDMW9ymC6noJeezgrrANiY",
  "key21": "3zhfUVwVq1pXkfsLLvHt9Z95LEmGyfmRuV7fnG9wVsaQruNUuMJaSpXu1oVNvrwAMfdy7FbAobPDyx1QUwwwvnBz",
  "key22": "5xfL7MAETSjPMmB9ThuEBkV7NzNctqVgbGUsbYGjtuRAbqRCbU4L1t56ghSMnE68s1iurhxPDMMnusXprm3Ep51p",
  "key23": "4mrZ1omEBPz6eamKF6uaP4KtYTwwfApgay9fDkiHSF9Tdx3hcL5cymvFXgybCkKgTrHnAJzYUPeWB5NBactmRPGk",
  "key24": "4n6HAkZenaMKPuQENdV2hbKtq2vuh4jJwfWyN8fXRjXfSf4tqa6cQtoHj7eNzSCoLKNqzWmAhjnDUiT3Pc3Nb3o6",
  "key25": "21bocHb7co4BfyZ9UEQB2HxwFMsjsFx2i56SXkQAWKcaYsk9hrLamrJyFT7UGCDaPnrgDjogfx8YeXGq7TWWiKxF",
  "key26": "43FEns4Cmnh2y7P94sLjgUYxE6vsV2CS4yLYawgbpSFBu3GfRMQLYpJBG5bRWUwB1iU9Jw4hMAKAmwGarr5KSm3v",
  "key27": "HXxGhkCn4QpWVvB1HUAXjLtPoNBu9z8MC2jiAHybDV6PvcKhMVHeCUQZMpzx9dTLjzR6Frxb9ET3TwQpstJjUoA",
  "key28": "59U1eXQsJUJiwWmpfpVjiJdR2vSS8DA5F41osXvuxF2x3H5Jjquxsoa6656Cuss7exW1Bz15gEeVEMmCTyLNFX6L",
  "key29": "dMvjKXtPbZ6bRraNqyvVyNQ5dDQK2fA7GjVsF85q1Paa87uNQj7G9vok2UXApup1mc9GyXCt1LoyKP5brRNiKEw",
  "key30": "4APAfoM5qWYHN2UZY6S7RDGL23ApnYsPK7NU6X9FLCHB53jksvSAtrB9hUSGAZxcBViD4reADeDz4ZWYnxwvn3eJ",
  "key31": "2XUqetTo2R1qKyNXLMZsTfG76xzvVXbs3wbG2Dy3Eg2LnJ57aNJDvB341huw35HbYXYNZgLHQyf4fyH2ibgjdV7E"
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
