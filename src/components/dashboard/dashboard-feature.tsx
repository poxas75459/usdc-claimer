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
    "gykFiuEQUND3gNbhrqdw4xAh5dZrVt81tCgBvBwpZj4M86Wapu2cosNfARZ3ZZVnGvcXT1x157cWUmFHiuzwRZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r6t4sU9fXbgWVqujA7r49cTUFgybtDiX3Hz67hsVNdXQQnjiyfVGVsUnPNjZyqW2BsExM65TaFh6RSdRmKmkh6h",
  "key1": "4K83SX12Nx8jovd37VyFLdnh7FDu9eVUJ39i12hbzr8vyBBRbsGKP5wjuHAeupFF8mZcuZKToTSiczrEkxsoSJPS",
  "key2": "eCLH8N2GgGX91F5TsfsgG76KM7R66CgEnzny39VjvFGYBKhrQkW7vZUYcYzqZR9QCAM6D5mAhXJVpp6LGF3w4CS",
  "key3": "3jFR9wGjiRhtiwWhjB9xu6ZCAR3AxF6qSsYCUfne1M18AZvgxwVG1PMkzpYjJwk7hzCow6rLWhUFYzTQrqHBVboA",
  "key4": "5Peef1nzTMCZvLY7LErM2ebz69k4CGdpZi4w8eZ9Y884gANGCYBMaf4beiLCn4K7ACfA29z62CRpEaktoTxAnMLQ",
  "key5": "Ae5SVy7Ri9WgmwuzNbTQq2RYdKo2Z4aR96Wbzb2mctRUKet9ZACZPb1NAMoLr4z59HjgBpNxeHoo2PWEFQo1Q3G",
  "key6": "26BRUm5LMKWtofNVNLrckD6Y88qmMz9ckHN14EPQwuKaA4zrLp5k9NsJVJMwZaPMRBKckzZyYqje2NwJtcpZ6DzM",
  "key7": "3t78fVDPijayLf6k7EGrCaA6MJuavGxKWZ6rWQGZwniwhq1G2bZZtCDfy8FYZCWmd5FyYQssP7cQ4tV4n4wDoaVv",
  "key8": "4oYuzNUharvhw7vNn2C78aGpBusRvALmGT7Nzbfy5dNmN3Bv14DLp8nkWezov7MJy2NiqiwwrfsmG1so46xLSJQ8",
  "key9": "2LFx6YMffBQRpzeQ7No5j16YD4zRVir9qNsfrwUCWUtex7n6HnJnrxNe1GAfZLyh29f7LZDtb1RqfUtiWeobcYcm",
  "key10": "5jMjjriEWomXPd579GWAUAnvR8mMVanhvMRzwX9uVkPepW8ygDiSFX82hno5icdzHTWS9zCGJwTnusTQwjJtbgzz",
  "key11": "4b4NLFCVi38NWhc517uHFTwtF4aMeot54F3ayfzwrUQP7gGTgu8tah3XGvSogLUdKjZfu5mro2Sa1hkbxLLPixut",
  "key12": "5aoza9ZrjTu8bsKYZNDNCxCWs8kwFcbBc5r38QKFAmvMvwj8UTn2bSxJRztMp8PvK4DAvxEeRhxwxn7v1TqUHyBR",
  "key13": "2Fnm3qjeNkXtgrc1aTznqaXunefGjACKHAMs3YCJPFZ9zTQw9P9RzMr9qYZs7bsjYqChtcfw9MCnfZdWyXD2tm2q",
  "key14": "25EZQAuVT4vHhbEnpseFwEpfWYsYRaaiFThNivxY3rXYdjy1DSv4xwixuTL1DseQYyG7ffnMfQUFN2MrrBw9rzZM",
  "key15": "39tSq3RNdb8veVmEeikM2YAcNrKspxPm7bQ6ueHq3S2dJNYwKAiiip5Jvtsnabuor2UatyEEFxXCTZ9wNZ1DfkdY",
  "key16": "3nXRD5hCaSfPd2MUVE3wJBgqwDDRnHkEsWDZPdggrEGvTR1J4w5bFgbEC8JhYzFTBptkDfJs61Naan1yB7BiJysZ",
  "key17": "48aodMBm7SYGg7QYgtX7W8yq3LXxZPsHeDGVJ1NWnunAnt3Wtj5dZhvDx5EY5XTpZpmPexzipt2QpbTscCbddyqJ",
  "key18": "5RmPsdrD3jEHKx6DPdAf3kwFcaeyNhfjgrXV4SNQrYpFmK9Hz8YAMXQdvjf95KU7azhqyueZddVeJH2ecunkimk4",
  "key19": "FbqBUPKxasvyAtVC2M7EwdgcwgfUvYh6b6ACQzgopk1KMTiNop2SWQ1zrQwyNTBm3YX6sXiZHTcHc9sS7TmFSPK",
  "key20": "56LCGAsTr299uCyjTEAEcgvGBYz2tqRjaXQbyYEMiAscPj4KTLzPDaUVo1WYSfyGmEnnEiqFRvZWW8sha4koaZRz",
  "key21": "3ihC3VCyrzoxq6WaNpqqhokqFzmuSVHdyJAjkABB6mmhmEyW1SGHK9JJCnXCTfvFDs3AL9nA277N32HRd9C7GFYD",
  "key22": "4eWSA5ezdtiNC8gYdPxjzHpeqdUMUXaSB2Yr3jk5VqZHynofkGQrPDy2Gb5fHhpdQaS94HQGAQXZEkDxvQXcjjuW",
  "key23": "5RvXDdCXhroAB67z8p4cAN9Ufw4yLUnN9QQrRc51q69yY3GRfCma5vdGanDXwob4RnK5fDiQTkuk6ETmux1cYpCF",
  "key24": "3RXw8KC4PzfvWw2Qiy3QMNTEeLRp7hsMHLbhVeVwyCvAJt4HU6GnJMVekUucGwbqgJ1dstG1vmngm3z9R2YByobD",
  "key25": "MVix3K18PD4zjLkuEFnjQT9wLb1tZFniV8QeexRd9wJGL6qRMd7ZYmWdtpDVCQNxTYYCy8s6Lm5GCQYsqEMmCXa",
  "key26": "4ocKUs7pJ4t9UxPjnKqAzCi9JqQAhpAp3CDnsSC7pyzoxv98yKRfHdR8cGUaVaDySq2uiAcYhMdot61he3kocRBT",
  "key27": "nMioNFpcGQsv5rwPoujVcJXaY2F5CER9zDCBsvs7cEQEo2pbcSV1J8aN61aK2P7PxotcufaFJCCETXKfLvRhJDf",
  "key28": "4xqk1hPUmdpkrbguym14dGapQfZXuVcNsRRwJTCfjHvMMTg1NJ7byUGi9PESTkELgnDJKMW4iye54fduT2d6hYy1",
  "key29": "3nv8RnJfeuYE5PWAcZNx45utt7dsEJ9S2AdWrPdzbtKpzVpF9mxG1HQYv77QaiNzpiC3dxL8CcfDJJcV7zp2nWfB",
  "key30": "39cVBGni9iZQxVqPz6Vtr4kfU2cmnZoHNuApmkZgqA8RXBpKdM34qoBvX9dB1EP8c5X7nsS9Dq5S8anWweMEXWcu",
  "key31": "HgfVWuZjBFcLvW6JxVo2E8mCbVi7aZXZY4BRpQXGFbwoKoc3kAQ56YGFo1Qfcr5TeYvgzkD6ghYVU4GVCUMvPoi",
  "key32": "qGGYudEyo8NwEox5bUSTPu6TSW7mYnh1Cy7oE9AciDEvPfzoZxFowJCGPo8odSQGHRv6mC4qNJKFHJvWUNkuuBo",
  "key33": "3BvJv1sC9KqPRXwney4zdignB2uMADhzBctdyuqUu7LiNfDnJSTVFDaNmSTxEdYBR3Weyq9hnJiznu6ARiZgfSjM",
  "key34": "5axLqXzypJC1t7hdK9vx4ETBzR9eFQVhNTUvW6gP4Mfq48q7HwuH6DJEMMuBxuF7DmEL5swF9iha8ZwwW3ELpjXY",
  "key35": "3o1MNtGLhWHctRjeEbJJHbrXunoMrt84M8bD47zSx1cUUfHSdydRwjTapTNiT2aKsnZdaA4dTRvS7ta1aBJntUSj",
  "key36": "2YZtTLdoypWQt9JpW7oUfT9r9Led9Ejswn6x1Vxr4P79GwjrjmxYxWwxyKGMtmZReJDFSkADL6n8ASCQrWzjsAaY"
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
