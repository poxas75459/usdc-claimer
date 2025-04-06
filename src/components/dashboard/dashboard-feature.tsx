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
    "5MfPy4pPW2AxMCnFXDoGweaAMv16hPstSmSR4n2g3bMQH19atnYN9uFVs8cJp6EDkxFG3iagjzAYANdwDMHY5R1N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wNtS2kGtrWq89SpQyoM9TkVLL2GkrEnxwbKrF5gmDXd4x6whNdbuTgsgmTPnsBXpeikDt3koYnv9TVWsfgkmF3H",
  "key1": "5mUGCFVmGrDDUs2tR4QwzCWLT7jvvX4mBJGUtkopQUdjrUvjDDcHpAf82qJA5G2nbW4YMkhKV6RcSZdaUE4Q5xGk",
  "key2": "4z8mCPDitLPVcyBDToJHMxBV3S8PPAHrNkbyJYAP91WUWXeVb3kyieeznBWdvCAiS4meBKhmPeu2iyaGz8ehCdF8",
  "key3": "Dj741jJCQboyVwZ8wsM88J3E4oP2zirAzgAZDusugbj7aUDDscGY5Js4BAyiMHsrMS3zQ7SMnAjgDxBWcTStnqY",
  "key4": "5pobLZJx6GWZfDFNaho5uJGf9qEmjpFVAsAj8425fPMNUWZXgRke4mTTPYPdw8JGMnDjAPk1Bk2S5863TxPLfCw",
  "key5": "23KUdeRwcMxyh6JEBUuGtUZkQTN3bwkEaREVQAvvpbtQv6nwqm5SUCcgHHG7J6kpRRSxbkuRgLhPGY2hgqgdf1ge",
  "key6": "3WsokFfJLWqcDzPcdDSbh43gTZoPivUiTDm91pcj7V3HRKHhb8CYgWUTvS2qAx4ymwSFtVtuHnvBCCr265nPuViY",
  "key7": "5x6tozQPe1uuvTsd3xBvAhKB2kcFL3wYNkKaWBomdLz1PEaJuy5NnhPgzr7UoaWyuKkf1pcXKF6vYVDwSevCYoZf",
  "key8": "5AKs7JcMuLnCqRSXY6nTE278G7raFsDh3zwWz3dK4Qi3mLi8tKTBEA79HBaJRJHqjhcgraEv6S4tJupbTZsy68Tz",
  "key9": "2g5PqSDyREfyRaMaaJqE26i3ZeW5uZqS1RFNmv5175F2oFhgoSVxu3iw9rbftNEEvLF2bgY2HPDrNtZo5swHJYPS",
  "key10": "3T9tCDsEGaFzH81go87UiHGYzwxe72FCn1sAgUg8E7ixDNhu1C65FfsDp2WFj9KA4g5sFospqCeZF4EREpFRY9L",
  "key11": "3YWr6RKCAuVKVbfmRo3PEjxa7YFVT24DnTUE1MpkrmwwREKv4RB7B7bQqyxuqFoRB7Zs53B59idhidk2tSBeoaUc",
  "key12": "3vmYJLzY6gkzY3zLK2LxBfUzn7pFE6r8Hzxp7yNpvXgBZK4bv6uA2iTogV9MVznKGg8qjCk4FtUS7WqDM7CKVTv2",
  "key13": "HHCkMJ9fvPRjADgAzFahzQmbrrQsnKk8aZ7Rk1MXPkfEARiS68DiBFkQRpHisXpyu6cn1fp7Jfp2UEN28QkzMTM",
  "key14": "5NibJpXXMn7kp1C71TCUbioHZL4cMYevT2V1rpFKsm17p5BSDSTsGFJmdSJdgiSAsYDe4yqv9C33Zqb2KS44299H",
  "key15": "5S4E1fKfvbHoFskvDC8yTh9ykUiwNeVAf1776oZLTL3zY3MNcpMxJvcLJdgw6UihwXGTu1CTctfJMbJL83sdAhie",
  "key16": "etGWmLB8HpXggRZ9CQXNJ4u8HekQUVsNhtbMwZiT3TdJ1uwxG8KDeoQs717J5nese9enaCTnZYR8KnSdWotUCyn",
  "key17": "4zGEh1BmWHAYYxUHBwhZBrxuFCUGpXJ7QFGicYSREQfNmoQThXbPmHCzd5K4d8Ybyp7Ns3dg159NAPpppSvjLSCm",
  "key18": "3qoFQmVUKhK5pjwQgDfhX4SJVuQKPE2d7vPBmWrY9RTwN7uko1K9BjrdpKpH9bZCbheS8mDXAzzFCXCvipyPDWZj",
  "key19": "5GeRixCdGfBQ7jMX3bUrZ2MT6d1oHJ4Vea8LsoUiuMxvbomeRwruf3zC5FeDKFRQTVRJ1XRuDBSEguLNxZXrpkFV",
  "key20": "48FmAxFyK6x8SWpspnhWGvKfiuah6cwkiNmS2VPvhL8q8XQ3TXZhQSXEHnBWY6vgG1ZzsSr5Z1X3XKMvqfGrG7Zt",
  "key21": "ximoLpavsCa3CNCUBbSo2KmiXBBwgLQy45tq8pw9xVLXvPgYadkgy2XKCy38MrepPGh4wXeGkBffkaaoPdxDM3S",
  "key22": "5M9mx6jhZ3HsfXcgDjVrdsLAoRLRPbrpnuEDgyjzRFD1cucYARS28U7VSLwt7i4eBGqTQTqFdwycJZWn3eePadvm",
  "key23": "2Jd749ikFTNWcyG9LzwTGUSSC5Dx4BRxnTmELF5aiQ8UA244Lcv9dxtyVt8ewk1BNywjdVQmnszz7p4yuWju5xE6",
  "key24": "5guo4X3oAVW24cbEz2TkKkZyvD4VtnEzmYomLeEvxne1iHGWUYZVszrgkugoGsENHoTtmX6EYStM11WnKZazSAdy",
  "key25": "3CpaCLSJRP6re4KvFfCV4U2UKrkpMPWqW6m6rLb92d9vyK1qmU8m67FLydjm5fRz2QXTCgmDLiajpjkaSEnp9jdx",
  "key26": "2dH4Fxsg3Hy7yRaSw3Jvdhd8apUz9kWrZ7tyjtPc3A98PwKFD332HC7fJorfA7EjGKYnEqb8v1GVQziigzE2PE64",
  "key27": "2CXRvFZYuocYGew3t7AYQ7zhzxN4RpotA54jKZgPqkwV2nbWrTufDcXLDucBBp3GAJEVnvzme4UDWD7YY88HxNVh",
  "key28": "2ibh66b3qmBZH1XMp49Ri73SiJKMsDvfBtydCH1NxVedaRe3sLTAK6FretnSog7L3WgyLWGZAUAQVMVcAV5qmRvn",
  "key29": "Bb6CNqUnvG5jK8CPEw1gMxwJMt7kmu9bizEhUSUKtbWMb3QJRV73KhPUsGqSDtz19HprUUhbPZkkkFojQ7qZU2r",
  "key30": "HMprNQihSog9gpj3d7P9We2qvdxvunLMYeaRxzDJhAp1RMoNEeSqeRuriFPULV32v6FCWawrfLUnE4cEqyz2Rio",
  "key31": "2tFUWYDKFAjAY2dZGfZqzpUZSiXTs3PK85piv88nt54pRxNHipidP3owcbZyKjLBD23VfqmZLUqKAwJnYMYvMJ5m",
  "key32": "9AijoZqcSYb8s9oFJEbGVKrhqPES3F1AEPUucGfPbpHky5EshAx94Kgpon1yGfinqeS6KNKtqXBCDwsswhvJxma",
  "key33": "25Fs1VYV4sx7ZhtJnymdyzB8DcNuTNtFZg33fKrPNYxRtY8xXVvkeKY15XGj3bR3Zov4vJwNq8SFvW1Vdf6VZFh6",
  "key34": "3MXkqYtgQKmRNB9ariiu3kbjehgd38dourGyik7iF4uXonhE6w1hgcxYQx9RwobiQ5PbfzkfC8u82m2eRiVNmxt1",
  "key35": "3B1XzZQSKUXzvBp5QmSgpV2MCXyAzSYxCVzzMaq2N2sgw5Kdv1QiXSFYxiSjP1hTCE4b7WAMS14SMZrMSemyorCs",
  "key36": "34iW3YNTx1KDknVz5iFNpJ7pUxxJqsX9FDNC3Gz3SX1U91NqQS1XV4PoDDp7Ar4mACCzYA2KccaUmwr4e1y8TpGy",
  "key37": "whRJfJQcWyW5XqvVPFqGhk6sny3uSxnyUL3oH8Toff9DCWtmznphyaBYPEC2GRFTz7zkQeqC199VfQZhpmbJZtc",
  "key38": "3ZxZwktnSPoH6NdPBnPprMy5pLuKgVLoZEE1szaQnho2vtxb1ADx5wXg2WeqZHtBCk6jYBe55D59DRw1qvWzJv8T"
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
