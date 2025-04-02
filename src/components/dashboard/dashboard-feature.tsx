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
    "3iXz9dwDH3pbok7QgUbvpwzjYDM7rgRChqLjBwHm3vs7eGrtGKd3NPDCrTERnwt5eQ4vhsx4YU4GwYeSvdvYzPBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kqMWzgmRjd2T4UyMzCqDFW2LB6aG95r9XM4bA7rcznqQLBpMRNF3abAZfUTxyXDUSXQA6awCzFPhTD5u7nLp7FX",
  "key1": "erAEKXwd4SRRsQyveYq7tTtKppEguEuaZgcdcTYptQLVByRrJK4EJWTVyEUdBEsHJbiscGczBmqCn76C6NEjpjV",
  "key2": "46n4vGVeaEDMwdc3Ui53UK1eJAS2Pt5gfWwAYPxfVubwYDn8tbqktA6pD1hGgRPHQry162pio1VtFqRLG8fawwvL",
  "key3": "5qqc5NeMpsFpKHbKwXPgp6twevmX9hkTtrJYCpUTTGTKymurhXx9vG1x9bW3osrhPjod5FUDx35KPV4uw9zuz7PE",
  "key4": "jBWJkzFYM5WJQoJzk7VNsSRfiBTc3bUhxMnWMGw4UxTaBtBWvMMFPEQ81dtyh3fEadurxuJ6rNfXZB6uMEMafzK",
  "key5": "5CpGE77D9xEMpMXDs4zHBa5ZSQGJ8AE9YAHcq1h7ht53s8Cqppxc3xKiJHWvoPwpTqC9bKfns2BFqFWuBmGaVhRc",
  "key6": "5ANTjKdNp3UgjrmasUByPcBiVcqEh8NE3uHECyNXVFkFvhaBmzWfBAj9qiTFNUkQxYCouKqcYNpkJjQe7q3rn2xg",
  "key7": "A8Q2rvncWjdxLZ4ujS686poZz6gNaYGPbCvcBF6LWtCRMN2q9ps8q9Yr77mTUr3xMLEGYU4vMwRZKtCxzSKe6TP",
  "key8": "AgduSvxVDNTU2s9mAmmSVPQA487GM3wvqcKyfrScoRvG83isPK9EbA66WfGRJtnW3DuRQQvL2qtwsm2p8PpRMQp",
  "key9": "qvxmivmTvewSGJdey8ZFsZmzg8WfByofWC1WgthNeqnSa4oj2h9Xmvh3joEXGzpMqU5M4Jivwrc9xuQhpBBygRs",
  "key10": "2TwXXFYaXQhvFDKmHgZwoK2F1uTwtGEgT1u2sES1ao1q8BdhamLzx17MwLRanzA7d33pDWLMp6scMrCxMi36LosR",
  "key11": "4C2LQ4pVS2RJAx9TZP33mEpaDQFCH2m7mpyMVmYWbUJvMnu4BEQmhLZ3UP7qxgN6Yjenbfu3sVPrRAtLTR4fC6AB",
  "key12": "5UYeRt7MakVT2QemBVvxHfmaDzihpZhbocK8b1FR88H449b7dSHr4pEAm67efdWrfsXrbtqELSRXZQLZpvS9QJBe",
  "key13": "PGdSc2xhJ2QssDMuTL7HG5p5TLQ8vKbYUHT6MBm5s3mFCvVa2sfCtzUeUz5DLsPxU9SufRauT7VC8GqFCP5E9if",
  "key14": "FVh1Lop3uT4T9CUMQptNiJmVhJRBp3ttGXoR2dBqN1i5KB6BqcYKsyfaa6qJNnVio4RrmzqVtzFMfwPSSyg7UL2",
  "key15": "5ozEc974PpRJLvJaZmAMu7vsmQAyRknLzAXtUYWmaGz4TwDX5GQGU2Mw6VUmRwTMsKPoWaB53vc7VK9w75qg83rC",
  "key16": "5nXmYNsFADrpCqrHkDhTAz4kE6Xd6x6Z5SWH5DaqGDT335pv4LHZudMDVxJuuPwpb61J1MeeR1miQfnHAV26Q9ng",
  "key17": "3qoQYiF2jeFMKNDMZLxmTrWX3WDiqhyMXzti1RTQ88izDNsNcKjZ4hbLn8SCzQmDpgdwUN6gxzGmY2bJx1VnZjPv",
  "key18": "275qQJUmN6xfqynkcGabfZEfuZ9SFm4a2mNRjS2uTkpFWS66RNjae1p1zrd5Wew4f845NEhMsjjvMNwrgtDgTdZx",
  "key19": "61MmEUaS8UQ9fa4JUVbu5Q6o3UbUSLfE4ij7eWMaVgAveXurxvKCFGEtwSZksEstwzjnpgNMMYYpSFESHLycHnZA",
  "key20": "LU6XCd9Kw6jngpg8KfAs2U72ckHoqJSogiQRTPCdba1RCkedVMdvEmwL18rFVKt3vGhnujMTknGRUnuEpBVJbWV",
  "key21": "S8ZbDUvrqfBe7SKzJEmrxS9ru6eBuUuEVXNdUnqx5XY1hY1kWbK8SHrzgUuWBSJPEjH3NoFZiBKZeeNDznU8BU4",
  "key22": "1WYfGD2Doc6EvT1ToksTAKocizwMpob1R6MX6RNES9GsfazkFBmPUD9PFqTy1BLcLRYbR6gU31XGEcre5oNGk9C",
  "key23": "3g1aXZgAhd2Fu5mtuRPaUgN5gKU7ArPAwWsgvbh9aTSYBtRWSugPJAmyQ7NoTHKjTfNDw1VaBaidQLxhbeef1yjq",
  "key24": "62AUhytPQRigWDWKxTwF9D4gZ6YcufWNsN5F3wwhYirZtDdQvKSrWEJ1HPU3qVmR4A2eyqYPMFySZxpTgNQRa8Rk",
  "key25": "95Eff3KhXy8FiirMvpaAYRUuYh9aJPUHihkFJCUhoExLx6kAvQoU8Cougb5kifQPpjUp4gMAc11m2ziKAXZJ1v1",
  "key26": "3nF4kMTevz3R3fj14LwhieLEXYyXR8vcoCuKXNFQ3vBSJAaVdAMBTcK7bxFPj2eJkyHwZCMCW6FJxmbS7k5oesAX",
  "key27": "3WHksqZ28FRxcsABetyBdSXp61QFf16CKrd6RJXweVYZVQDoiBcY46dPNN1HZb8JRry2B8Sxsfg7ob1pYBPj1eCZ",
  "key28": "4Dc2iGSjkJ96MhL6BGkDa8h3YcPYnDgV9Da3cnCqPuVarraJjQMeMyukTHDWUS5ss9MWXtaGpDxTqEP9gt13B1jb",
  "key29": "rMj1Aa8Sy2p6C5twdnn4ZvQDjhFQpmTB3eZwVGJdG7BmEj6PHcAq62r1Ez6SxJnAA6oa5tnsdfcTyJHidam4j1N",
  "key30": "3K9HCqArcQvd1uLSzXgApaz4u4cHgZdnULk6FPaMxbBcV3RcQU2APx57zQ6bXA7FfHiGrxMnqWtvKiYZ1PbburXZ",
  "key31": "2KQcF1LDUhxejpYs56UrCdbP5U9C7rDcFPeKTc1rtdUk3vJ2SeYi2roZ5q97ystxAAjT4SRCohakhemsyYzMGu1n",
  "key32": "2QR5DgxwmWUbKe8DxrE85BMWGURWLfv7cSVWZ4LX5nrQWpxoJyPKREtRnh1ptLeK4Na8LjhcjbYwo4NapS88zMvM",
  "key33": "2YQqrpj6c86GYp7NQTPj4Z1zkHU7LrtTY5CvfadiYqajsdVMZyFqWxxvygdA5pP9vX5K1U3ZTRUaqjKZcme4KvTF",
  "key34": "QcYYCXcR899AN83Amjw5raRWyreToz8kWNDZmk5SV8mYSUwWeCvZ82fXwMRx4t6FZr1nqk4jpBbFx9ZgqkmBtzZ",
  "key35": "J22UNCFgBDBFjRjQYRbKeoWQiPmbWsyCMXY3CsxZGE7j3pM48AM3JCAepVkk7yZZzZ7c3aXHT37yJWE5yz123g7",
  "key36": "4dJDy9jyKymMSrzKGVcFJxtrLJiTovwsk7XvukcFZM3MaPuRGMA6ZyBm3D5kgKebwpwSQV26JyKJbH6ftNhnhi4",
  "key37": "5gDxPK6KAYA991uJBTEKjy28TVog58VhC3Dv8mQJaNfiCZquMQC6etWgUG8uFS44im5yKGjH6BQoHGjH5Nq9zz5f",
  "key38": "3GCu5MhtzqvBXoKfDQGqHjMc1m2RL1XoZEH4TwFXf1Swq1robKqvYAJbQRELHrycc6DxUpiq7JCxadWBU1dKD5ef"
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
