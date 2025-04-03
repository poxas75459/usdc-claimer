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
    "4g58ssz6G5xkw7VoPGQ7b78GXymy4dZBAHGduSCmsWGWd6Y757RqdwNb3tc5LiqG4fzYaqrzCW3DPWu1rAAi1F4N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uUAMAzP3mDMTAKMA7YqMa2e7HEvs5TMvBkmK954CfAkVB1SKZn9mgA3MR7Qjk65EaDYycYfgRmBbgyxgrqh2ePS",
  "key1": "2E6Z67azG7xLAqm3y679w79U7Ckzesuv5iEp5gQTRvxQzxDK4dThs26pzHU5qFnPwvDG5Lbu4GZSDfmE1Mak71xy",
  "key2": "5cBcVyEgVCuHtVAWgJqPPgHun9fNekjUW76rByutJu1JSQiwnbW4h5GBLnpAfgT3fpM2W4Ss2AeazjYqTgErTuBT",
  "key3": "4asmVNHHhcrTeyTHoj3gWF2oJT1ndzVb7nswB4ivYQ4C4PfQi68eiDRAzyvCgfA6Sd8v3GJza7FGd8By262fkrdQ",
  "key4": "3jjoU77gyCuPpRefakQLzck1PEzKpdw7BytSYFR8FDjJha1tse8UqgLzkEfBwa432tzsEvmuYdfdqosTjQ15Gjmg",
  "key5": "GCfPCqfev9V1haYnAchHGsTnETPHy18TpHPJ78wU3usXeew9wQGNCsKdxEWvoMyygpLhYja1gUNKa2qmuGGRwt6",
  "key6": "RENnjbrmuY7nt3JY3PYdvzYBQnsVF1QnudSvR61CAAHosFvFUUdYDboYPEhMqjSyKJEB3yAQmuXPBvScoACkAdM",
  "key7": "2BMumXEqRQxvDmRaGy8wJVN3dHVm3XL13Q4i1dp78SBwjU5K7sNtwi7ALETv1C4wJMNRaxhCw1NhBciZDPjoUtMe",
  "key8": "3fGXoJYEE9DksKsdUncCWaBTzaFmE69xJBajRfpctP5kfYgwiMVos3tvi4FmgesmETBWJX7nZeL8QM6dqvGpgh2t",
  "key9": "3aNdPps8VaFcrsk61BRJEUpxiBs1Jg92NYroHpej29qZDEUfewC8WhK9taJ88Y4YLs2wGhLa4BtHJcz2X2Uwxgv8",
  "key10": "2wmu238yUAhgx4bfb2rYGogs6TuMFfKEUaCTXPYEKMc454gRYL1jj28fAUjwr4ASH6R6T6wsViV8noD2HWLJ7Aq5",
  "key11": "3qM6MjeANoBD1FZvK9iVjR5bBAZxSzEDQMwGkdaDtHsYcxFnSabdKh7vkP8CgYu1yZHdNqPYbUdNsYvPLBGkJySV",
  "key12": "2VcRrUzj4SbahbjKn2r9QGBRYXcCRukkYGnZmGTsio3Bv4x5T93JZCjWEQrXT6C9zRgtkAWA6FVn2Smm1HRffseP",
  "key13": "5mJsmbJdeirYvo8JiEqWhuHGg7YtMbaS3StALs8U2XwQsW29gGsQvotwSgp45tfEqy4UmjVDdijW16hGFiSeCHsu",
  "key14": "65edyqn4XeNm9Rp99tUwYApQLoEufvuN8MruAPKJ7fVmWrHkPeiPGytmruVCQuj3EKNqpMcMUh8KUbgnUhrftM9u",
  "key15": "4sgHsZ4R3xoskJpT7SazZ9qiXCLzr61xQJzknd9G2A2w81E4XLpktM3FNu8nyfUq71RU6Ceq5UWoiSSvR1nzfyCF",
  "key16": "37DQhVZYxRziWnSvvn9BtEVm1HnfbNTZyBCdQxht4KHGWFJU9wPoVyaM9h5csbsSzxg7a1ovugLTUYPcJrV865sC",
  "key17": "4hSmCD3sF83u9ut7wjg6ocMue6naDaEgvUicmK437wtxhRGYeabTUtF6yK3X3sQU3Ub5J7Aq8tCdwXCZzsQjuwYA",
  "key18": "5Q1rn8oD7wYrnqkCBHCvGJ9zVsvcEhtNQnDsPoWjnYZipJk1indB25VKNbo9L6F7Vj4NR2XsnGJ44h8RvKHLctLr",
  "key19": "rhh4rGytmkcvGuYdYsAtEjMPQ6MakEnMn2YB62sZ3jsC7bw9xmRd5tpgirZNDxLB4PEfVPNtKdCknFUuoXSx9z8",
  "key20": "659LXVBsJ7rhSVADdmFsvPf6RKYhxc8UXe6UDAoyMecYe5b69FiA9M1vZVEFRK6BGFcBcM11uCqRL4rxU88UgSaR",
  "key21": "VWFQrGJ2BjqUDyaEoaMXFmoyZQckn94LFtL42vJ3CfS38QpE6zqWm71tEn4LvN8tThQ77yJvvx5BYaRpuRwAoff",
  "key22": "3LAVSE5LJpZeUAqtkkDBTFPim7RbfBanLkh3HxN6y9KsW1BAmavHoPpUKmPAMjkYcViJKkBXBVUBg7UHGD56vn2k",
  "key23": "jqeXNcwNmaheqURNJsDtP42nJVt2peY7XB1UijPMFNm2AF9t7pjQhxtjsWNrNnxTcar53E95QNmPNk5pUwNZx3r",
  "key24": "2FD4mnM1X3e2zfG3u4G9hDKG8HHQqdFLy6ZVTQ9b1sz6irt98dDmL3NxXUGFv1py7ou1pWEgX1kUBybrf97j6sdp",
  "key25": "4etmnBV2yLkYnmxq8qJC1aefMx7TcmsdAS6i57KTQJZLT1Wme5kcHLyic7ge5rmQBmikKE8KJSQTNv3593H3MJ6v",
  "key26": "3yVZYmBphcsAALWrvF9ttoYfRhFrdgVfGx2DqNkRRKThGz97z2p57hLL7fMpZiRj5BempgSpML3iwNPURv6VmXG3",
  "key27": "4hbJynuY5mHu8wfYnWVptpYLpRN2niJiuqhFNuBGvNY7pme3kdqrnu2tT3qqawA68ANJ8qnpjyLPihG75ZwYEtXY",
  "key28": "2JfnUj3vbeTmerfJ8ravHaDUemDgBEeyWi9buXzFtAjwjZfHP9KRhHXNR9sB8cjmCM9qTr6fnMaEuYUJn37bdNGg",
  "key29": "3dcNzGkWfrPGE2NDvV7ERFbVwkRqY8eCWrmKSxNsBX7bQv6JA34LHQYZGjxEVtTsFsRHB5PhdNkiuYCq6ew45FU6",
  "key30": "5zGkw6x4jDjnLcfYfCjEhVBeTXeUupinYBEXXaByUuEUQGYAehn5S85gFpN7drMF5zrva5b6kunMEkRgXjf69oje",
  "key31": "5chmYgZEZpj5CHrcmyAzvvYXzPKdvNE1rT2KC7c94c6ztqA45j847fB1bSeWe5AhyNKGo6a6QMHtxqLdbhcJWhk6",
  "key32": "3ZUvoKjzKj9mqYNxw8Br1RVFc7xaZrM5HVMeJuMb5uXzHe62zYK8w7axQWP5yGM4LYzu3fhn2PbozQz1Kroprvgf",
  "key33": "ABNM6WQpRYrTQRUdEiFmaJx4fVGHxCswNmi5xh8s738EGAuftPhd48FtLRY2k53ZJ9ByofTQoDKowZupsVqG4gT",
  "key34": "621S1pwDoR3evoLFt1kUtLzN8iJUs4LGdQs5UcuohM4B3iCtNUZpapKDJ8umCXWXmpyMTJgAfWNZJK2572aRhdtw"
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
