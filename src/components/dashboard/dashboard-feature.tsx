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
    "5k1pmX262sWEPj8oX4T791AeRm67P5ifQK5LBRqtKZUirBb5Ed4WreL367shArTua948kGzvXDVZAA8dArspWxj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "esxFe5fS7FKF1rwNyMtaAAC5Bge7BW6trrgn1Bg3eqZ8S78qU4GyNpisgPSbRLZSRnJYfUNptpwxFsiXzo9hLXH",
  "key1": "5yiQHw37uoaEncKTr59akCKvovp3Rp58Qwi4A4QHcWoQbghydHKwo6nPKbdhnVnPmy6dZ3qdFfe1TZq89fshokpU",
  "key2": "5qBwDxUZuPTViwGw1qSWk8dzPLFJ3nUrRgm3qYpaUCFmN8cSjeBrwQfJiSCFszZmTfDQLd7w6B21oiqZPFf9tZ3A",
  "key3": "2bvvgUJ3HnYamzr8TnXA8Zr3f6nmNVv6guJe9ZzMYYQAUBVC73VuwZLT5EJZ8PsNHYsoWtLtp7sshZzEGUgAhscA",
  "key4": "4WgJKpHHdJRUq83Yb3A9wwsyE1SEgcfFFGoP7N1CT2jdP4YWXznGgEATX94pStbuWJAGaRC4kCGaVic7ma3XYG8M",
  "key5": "vz95uTATcxoCDP9JhjyVmfqb4zzpQuCDkxKP3YE5oAAPNx1hxza6eqSC2ArnfoNu3oLB9RcYNLSaDXk3AC76BfJ",
  "key6": "5MT9g6deZqWtV2ztL99eyC2VVd7bgyNnZBnwUdcBPtxvw7SJQ5ePDGEhu2Bcn4dZ7Qp2Sipw1xLCvE6RDaSQz9cF",
  "key7": "61ToxjmX7Y8i43tHTXNHNvjTyeDb8M9Lf1apaxA1cS1y5KqGvgDuHz4yGQ3XVZhgS4ZJrs72H4hSeT2nzb1QVjut",
  "key8": "37FvVX2k3nLH2d1imabFFafg8woRtxCCHgAytmprisKPWKxs6vws2UksbRrhoRYwBWa1u3NJ6yWkEXhHsLjh82oJ",
  "key9": "3aTWmuJpkvH2a2yAYD8zjVmziKRuZWLM4E5myzx2wXDCm9Wnt8DboyrqdWDvVEmPGwG3cYDZ7wVcU1gXicyJ5cBo",
  "key10": "4u7sjGY3YWo4Q847ACX28f7uxoPvZ3yewJEzCS5yKGcdcW8jHsTg7YjPi7Nfeb9V2bJ7qXnTC6jSzRs7sAHc1icE",
  "key11": "c8qJ6kua6HiJVY4Npm6hBHEQoZs11qY3ocEVdJe3kuxoJdRQkjLZTofrdTL5Gfvs9U6YMFq4f3Gourt7cGm2wb1",
  "key12": "3YDb9h9Ya7EaC3XPE2JxYYdNKshUzTV9oVXdccUhpxu3iWcQNwpKd1Vf5SV2swyUnBENfyEceVGrDELdeSMCgSdd",
  "key13": "65ewecy1EbSzyoL8rwsDq3HdRwFaDEt8K1wtTrUrE36fMaMFHPzni6PbgUXHJs2aUs5xQtmf1zhQpLY3ZvYFCHV4",
  "key14": "4aUtZbb9SPp3WCnttBaUeRuXnMabqVQgQKQhjycPJJMGT6toYHskFCATy8AxJMWsuhBjQFjmTnEqhnShC86e6g6a",
  "key15": "4cJ3wiv2Yiy6BDzT4DGBmouoT8xemkCUNnunodykUNrvvqEzZjwbNFrJeXngyt5fasVbu6FqsXqBdUDesuJMEVpQ",
  "key16": "2ZG5PWskmRuW6cbrMVjr1guyZ5Q2EDBZigXrVeDNtZsBeSybCfYd92ey2A8mWr2qP6Z1zXwCHc5Q71RVuCZQnuDc",
  "key17": "3f3cQNn2TYghWBmsFhxx9pjHnRaXrRmY54sduouRrncE8VR9vANs9xBbNqe2ZA486px6hBzF6V9kL1Yu6W3kuacu",
  "key18": "43wrnUEjS16Qe37zhp5Z2EaxnHBZPKudz3nHx8PddnU3m4yXPtnbeJaEyiNySAKfqiaomvCBULEpNnxUVCyYVD9e",
  "key19": "zEq4F7uQUYGTTz6yJRBcLcPX1Yy1X9umj97kb1LKbuj98qMmEB6Eo7GM5yU2MPxAWyrCwPxZwKfC8G4KdVtpph9",
  "key20": "2GK1ZgfoZy5rxLJ29HyZFPg55TY5TNRnCYmtVS1RorAq6qsyMEAz6Ckrws5NnGEi8Jo3DAfrfXJ7juTpegNvx53Y",
  "key21": "v1Sbq75QttSEskdps4DoEJYfrQbGquPwqWWCTM1NUso5tk2hRe1CFdG1CsPz6Bf56QtmMVZFgwSRubRTCtMh5xu",
  "key22": "3raHZDJTrESu8UBKv52i5VJjgAP3AcXhG1PsGrfDFRgidgBL51bGpbNPpLiVoht3PhAhEBtk1Foo2mawR1Nu1Tpj",
  "key23": "ct4dVyFBNMVA64EN8H99dQ4VRseY3LvLwdPuMX3rEyERbSAwCNwo5FeBGAEf6hTHzfncZwHt1vgp5PTYRgJMfin",
  "key24": "3KkJLVXUGnrJbGGq6bLepkEpjYr6L8D2uHggLrZbS2ayhc7bh42Pi57LZgHGNdgEGywnKN4zyFCJJWRHeavwwjuz",
  "key25": "5KjRsRxPxA9KkGpEB2kTjt1bznLXG5h5ftURGnVJGbxKWD1uTibHwqHQ4HL86vKRiW5b8sUwyU1oXwQiH5x53fUj",
  "key26": "22WB4Ukay66G8YdzPjfMxuh8ppePZdATVt1iYKVcDPiHomU1my3B5givJEjkLRNqeCGAV8EFacbB7vvKJhiCAAx3",
  "key27": "62CKUBjw21aBBDgofc5hBPYTg8pmVM8A5tjxFHNVoCbPtGpJzbsA5MTNzzsaNgMmeAqifFLtM8RPxRYiNzqPjLJ2",
  "key28": "3tiFTQoSkC5b3uPrtMfRF7mezQvbJ8zSvrbtJL8Z9fuTuhiGGZ9R9TixSepdbThmAMUAR7UhQVHWkV82PijGGzs7",
  "key29": "31ViiZzxfEsdtTWfdZhKaSUvxx2S9fcYe8hzvcgHYx3iHFJtZWY7joX4dmoTMLYKKT1dT3x8toMnp14gKsTnvaYZ",
  "key30": "5kX164MwkxZ2weYcfZydLkmeaeyef6f7i3KapXkz6rUWdxSzhk9FsFm4NdPszjmysyp8DRytSmxvwkm4YewNUztV",
  "key31": "2mktQvabuZAVk4sn6sCx35hFyS4t727PfZjBqb1HeK8ZQGKhQ5dKVrEChtD4cjHi4ELY1LVXSeYBx4yvFTJUSW9E",
  "key32": "32c52X58nkTuPJNwqim9SJw3B1RKQWgQfcgabqGePKpXgs3v67vHUtuZe1KtkkjRGPbVorbBoY3ryiJRK2T13X2x",
  "key33": "4NoRUyy58qZ24bwXWHzjpippCuyaAPX19zyvE7rr91ELzeiJ9RZU9X7e2EaYNi94oXy7ZrcSv3MwnqraM3QiR2ND",
  "key34": "5fGKV5tbabbxWd89DoCgtCKYZy8YzPDL8Yvq6AN8cRhLshoXFRQe6mJBjLRCkMKMGAjaLxFsKdk9KFKRrNBQtsAn",
  "key35": "3QoCaq7MfduyhFZkp2eQAPHeYzhpWEJ9ZYqUwq9nYgtpMNUwsoT5fwh6vBdHNm62wA2JJ6d7rbLbrr7LXR1GByXd",
  "key36": "NbC1AWasXqxXT3VYSXzL1kx5yh1oX62ssP4eY1ADpCRbaveUeMjK39jdiXGg3fUV9xra3KvoPUr9fTfWgnRjm1B",
  "key37": "sFkTa2AMZ5MZ5oZkEDjws6zDxvezHrEX17adJPjqQ3WEP4yiP2VUhZYMh5RhGjnGmqVcZR5iVUu5dXWiWhKYS8T",
  "key38": "3AwGnFjpCPvc5c8VgbCUehwy9gxdV397Hd3ifGoQWET7j2RtzK9J9rxsM9SGZJRzDfP2EUnzCSjRzN7qV1fafCAd",
  "key39": "3FjQ14eRE2RcCfPqXFW1msxFJiax6DuZYNcpxZzoQ74HZvfjj73GmqcDEFhTGQCJY3QMCMiyzpVHViLg6KiZgtre",
  "key40": "5Z6Upsyz37schkfihShrRXc2FAM8ySnZoNmUGDh9faQy7ARsJqCp1sdQdZcFqb1qzD5Rr99jdTe8wrJSaKa74QrJ"
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
