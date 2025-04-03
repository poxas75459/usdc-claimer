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
    "3FPPDykmmBELBLPwkbZA88FsFAXie2CMVd4y3VmxeBa2twg9T7umXcsfVRdffhVYs7CPWmL8VvEngxQLJwyyvKgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iDmE2mARTjWamSvjvpYY8PYqedwbnw3hkKXLrs2d94LE51VpLyBVM3a9ADb7gQJUJrfBxCnGxuFKwcHZ3tN4Z23",
  "key1": "5zDQV9TApyZuHFKXiB6VxonDMdAwgfs586pRjay8VywT8WtxfaNE9XX5raXDLriebKamuAmAQbGdRtZoHFJn1Fas",
  "key2": "4QS9kN36cCBRBsp7fV9J31csxF44p6ZD1Kq3vcpk33SpU74qbbxuHA8yzjsufnLMSXMb1SLyCtyCV2ppnLKr95YC",
  "key3": "3ofdkuttG2DRJ11aiaJdfqpdhMpZFCTwCJ5WQNLHnDDmmuqrkfe8dwi7haGd1orAGBMLNZmBkWQeRYGGMiihhsq",
  "key4": "4u2tmmnyCdjjUQGA1zdbUaLGagQb5KJYceWKabzj4MnQL1Ht65CCRs4CRj1e3VfwgFPj7pXRfjsMRkeQf7Hr3yFA",
  "key5": "2GZTK8wV3VdPYaXGTkyjvUvPxZNQv44vdhm6oKwoKDt3MCqigjMzjHXoP4XNwJAx5NaWMrvvJBQVf8EHdYPqPn8U",
  "key6": "2LFUNVFJWbzjFjHWQ7KM9zHnEQYtn14Z7CkPwgNhkZikACYHRnhGM4uuJ7P9pTseDpqLQSnuwnjdvSexdHiiT4sP",
  "key7": "4DNToXfEwffP2SpjhxLz8K34ECjwnLHDY79FqFeeC6SK23Fn62j2A79VttDuC8uMbtxZewDRNyZWGJv7xg24VmKT",
  "key8": "2BUybcxKHm4pvHhnPMH7ZGfGkqqJCPg6k5LaEhnbPM6UVYAYxPPP5MX9Kd4tM8LcEgNtf5pjo1JbdZAnYXqwFonq",
  "key9": "3A5gsykpaCetjTQW2J3zpd8UageUBtYHJHg2xjQ2LZ1TS8Lrt2NagBBT8thfnaqHcDP7v1eKxd23TpttrS1da5tp",
  "key10": "5p63waxkyJBcGYmMAZYngA7fHz9mgXu4XVyUjhY4GT3QDEoCqMgdhyJyHhtqo2nHorKnk8N9ckfnRCDsFCKuEySn",
  "key11": "43gqrCDhZBRTcRRsE9KhQ4ECvJvFptiC5Pjn8WELQqTvXMeyF2Fs2tqkm5QvhPnk9JxoFRuSPt9MBNWobwL28fTQ",
  "key12": "3Sa4NzMrbPTzviQwqqfzDJAjbNVcqaGCD27rQPRKdp8Ramm8hrTvvbgyqZGDgPugY2SwfnWtDesUALWYtJmVpoft",
  "key13": "4y8ZN2eYvzSaefhvLCZjGHtuvSPtvA3Qi79AZ6nJoq9b4BPzsY9x2PZLXtuY4ePmH1zC43zCQ4y58BzSMKAKMaT7",
  "key14": "5MdkwQx2HHWYEtbiKxSQQzVW5Ym9Pi45527F5TURzUQN95QF6V78KhFbHKS4s7Sag3qTNzEMyaPtjbecTpZbLCUJ",
  "key15": "5MpWDjby1enTkpHib5GBftu9AeNzg79pXSCDDQLfiQAXFcnws9pBKedPBZAT5uSm7dqs8Dk3iQG6ukMFBkw69JMS",
  "key16": "4q12zWbtJRRaM2wSXobUtPBmPxWUmAEZCb3134hXKqLjru1S8bLamo2LNHPFu7DbyE5isQiUED8ihMoK3v77fJ7B",
  "key17": "4ZyXTdQJtKza8WerQxoFysNno2hbDrJCJKMrb4KRcSWzavytPM2Z99geM9ddzXuSfLqjV7hf5LsQ2VyfsrfWfYKh",
  "key18": "26RnqeCv5RcbJoVhqW86rsD6R7sXu8XcQL4KLyJLDRqnhvRHASqKorwPpkYTtLmNAis1c5fDDffyuuGSAvbRQ25W",
  "key19": "55N2tR7X8bKNKiXim17Kj5hKBL316VY65PXxo2UKEEt4fe9QxWXUrcLNnRXdd29koUPiJypb1tqzQBp2UVoZGXrB",
  "key20": "35XobC6KVbZ1fohVutJojM1UhsLsFd2h5dTdMEheh8Y9hyKvQNm4rFowfF6NMsphZbCc4SBacv3nhR8KCNBZcFrH",
  "key21": "5FJ9yc3tCgBBKWQStCg6YgJgGSGgHvaTo1xmy8GSAC45A8SvbDroaXjR18r8vCzjDH4h1Nnz7qcE3838YYaq4CYN",
  "key22": "7J1gHWhTYTgSKNHSKRtGtTqT4xoddZ2QcAPqyCRgkDjTVrMq4QcQyRaqhf3i97XWE8QdAqs1NjFwoMXKG5nSBWr",
  "key23": "HykNhSWYKfcRojttAe1vjoTdrBeycFwZbWrJgH62s59a1eJ7py8zhs8jYYHHXh5xKDuexNB8q5E76zBw72Tx6jC",
  "key24": "2gf67roUvgb5v7EoeNPCyPpeXkgzvVWmVjUu4hNkVmaN1amFU2NhwYHUy6cA71kqVFQdjk9v1uJCCXLJj4uQWKNs",
  "key25": "4F83CHQBoMymFBuUtJNGX5WZJs6HPqsS4EoYCR4GiMVSPWDGG4BFYGudRcbXFJZYBvxNwRsJP95VxLu3kHwLjh2A",
  "key26": "4SDboNgf82GfTNrnhMcW5tMGM1fnJmpsDwgoWrpDDDCRm6qerUNdxGetBzQbJPZb4iA8DupZcfguQrMo2VVTUXy4",
  "key27": "42eAVfGVoeyvCtGaye5BLn5HEGgDtyyNtTU3cYLvAgKxZVadYo9HYmLu6ssp43A87C64CbxX851x2nViBzhzf8TB",
  "key28": "3XJZNaTSKgAYFSc3MCcDF4Fpt49a2zyLWtPCLYgudE2LynEZxiVpZkLVQVf6XiSBYzAW3BGRJkRJQKbFGJY7Rw7X",
  "key29": "3XpSPWkg66E6JtUoH3zxe2U9Kvm6WywDczNQHDyhyUyv8q4mCqKnBryz1Rt1ycEz7ZeWsv9A3uorSGXKrUT8gXgm",
  "key30": "2VY4QEsWoj77ps99bqtEDHJGy3DT9BQzo4q2SRsM4nZj8P81GbMWQryskm37JKf1ZMBtQ8FhnBAnJmQEEzQW3n7E",
  "key31": "3DoMQHTAovy8WrYBEjGSRwy1CQMACZEXGrVboHYSwyxdeSDtDfQGsGx8RK4fWxpLhFZMx8kZF9X4K7jYvjsgwBk9"
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
