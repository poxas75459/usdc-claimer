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
    "2KCe7hWWodmjX5MSQLMqYZPvvYMvbUcRPKDE8mXEQSYVLwM86YNMK1cc4nd3Bxh94dtkEa24b6oPP6nwrfYerw4j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jmZMV5sK99FQRMZdLynZQG6GfvhqxKxxbaFFoQoSL1Tin6WuTaXMenEk6jrq2weXL68emgk9MxYi92137T2CKHo",
  "key1": "5Dm4mcAGs194yicqfomnVnp5og8qJBwJ8aaWqCcNcwDvwc2ANsEMo54Ve68qbufmGrCnzDo6Ef2PzbJShBrWhjSh",
  "key2": "4C8sAZouiQAs4T1hgw7wwKW8dkUAWziiHUmW4fuNRHcyv8mKooCmFeFnEixG8f3esKxQSAYqdbj6HWYPqRqtoaof",
  "key3": "3Jr3y3zY8ykk9mmQxv4fdyqomqbyjcioZytbRQ3EB9fk17Laq4yVzmS58DggeVrfwnkPGbxn66FkvpGU1NkqbPTS",
  "key4": "2wMsGJ3pDbL3NhKsnzxADbMojWdEgcij6nweRR5SX3RkHyHPYAM4HPXGAfD39wGXEuJXrYXmu8VfjaPqhept3Wxk",
  "key5": "XuYUXJsjMonFssgubjvyosPhuDVGG8ExXWtkKhmyC7v5YyzciKw4t6For9yjRaDSXiRVZTo28zCGb1oR8n2fB8y",
  "key6": "2LDJfnAa1vDjTSn78dnir68FrLpPd73k3vBJmPaShKAGKXhWMK4MGdNrHuMLL5LttpQYwtQw77U2tWBxzyxfixts",
  "key7": "2UzbD3Z7GR24iKZ1BAi9J8qN7RxWcGrt76h7FFS72rvQjF8ceAkxeWxko1gpAws6qT7o7ct5AAjQkXaWWysPvsiq",
  "key8": "2hHHBfu9VmK1e61sdUa8TQBQcKPAX6YUJhB2moNEZXGKVxG49Nc16MsKG5idDg9sbs3fp1Vuj5mzrz4yfpxLbH8q",
  "key9": "2RfGcrTcRADHkRdqpTovusPcHJpvjEBn3d56unRwmA6Q2DkbpzJgza5neeXatJd3jghCTbzDvqRHFLhsrn99eN6n",
  "key10": "3J546vMieSwNXAWDkXsFRPrtZWypb6RiosXcnHtmRofPxsgwqH827DzgfTf5RFSNgLZapm2gkzjVkqVsKRz4vneB",
  "key11": "2zyW6J8gVvEQZ6XGK6MyvhmSMvZ5XHvjaZ7h2qryfianSA3MPUTV161E2R4TsSnaSZ3kCxwJ8gqudRRBkV73Cp9h",
  "key12": "24N5PfxbydxcE6e2a8KNVKe6jV9jhrHFgSkcVZ3sHipzcFSNMPAcQd1PTofTjo28dhsMYa6k8FJxoZRUREsdTeSG",
  "key13": "2auCEeGp5ZqqA1MoEb4nWMHoxEQSTuKy2dMvXbbNz6MsYnapNm2rBtVgxPXknEzS6EerTTjPM1P16agkLWxmBe9t",
  "key14": "wxqWjFYRAdUFbthMSSvADV6KswFS7TyKfuXTzXF9biVGV5hk5FTCmxwXbdz2iPMAhowptZxTHP3jSPmEjQJ3hUS",
  "key15": "49rR6rQCAvXzqz9ZvZz6BRuL68mGtghnDQ14Y5uEhx5zw8wofdmuCBbFmkePEDqRewSeZV7eHDd99pQhXHiRknez",
  "key16": "2u5buKbW3RE9poCuy5NEaaCzJX7BYV5RY24meaHpA7VSXwYJ3a9WUou44tGdTg2qtrzwf7ZTAkcmptc6gCp4Qvkq",
  "key17": "RyNRUEYR4xuHrSJwHYCMhMnkNgtUYhvHxV1bE9W4Ef9TM1g5BHg8Lg89vZoFDftn7oEp5mbWaJx8GiW8YbZuXXb",
  "key18": "EXkXusP3KYoFAZUpNpZdTCHCaNFCNQFhJ2Lby5qG3iddJjzELKxniNbHpnifzsc5GVKVHyZbMwSntUJvqb5pUQv",
  "key19": "66A38iqNioYhKZL7oKodSDhvTeJ7Ua1hmYbyFSN4kFkyR2oL1SSsFyuZAXLop1fVHSppLqJPUAxNDGwGzBhdvLA2",
  "key20": "2UZ81ZHDecZp7Yk5J1vD3Bcgvx9ZyyS2DvBJ1cyxofDYiuRU6nerTmKHcVpEF1UFy56J2eSgDPt6219mm4hprGHK",
  "key21": "2fWY6C7CoKCfCgyouX18MgDsQPzovaYndeazyJ6YMZyPqGhE9zJwRSuyWS77zo6xq9qmoeP1iiTe9TTNNoE3Tyvq",
  "key22": "5k7iys4qpseBQQ4g2rht2m5efoFbvJYQ1N2U8xSh2rcHbBbirDcfGjcDne95rNY6NpyE7bnWCGU7YwYuUHqau2HG",
  "key23": "4Wf2wbq4ZSphMgRYYQZhN2AcAHVrDMTAxmkSF9kE9NAneY6WpFK3MPHRU1Xgt55jstjofWC6mjWedQYZHiAwVW11",
  "key24": "9nr1rompTSx1kCwe7cM7XGdN7b9CVtHERoAM4QnqFaZX1We5dFTZnZp93xb3R6VqYj1b7mezooFUGZ7MPQsBm93",
  "key25": "4x5dvfJrxpi5LKDAoT1jooVPHezfpFXbLxnGthh6ZFinzF7fzcrW8UY3FsrbW4fnrtUWLsdGj2SEgTTVYFPSJ3yh",
  "key26": "EBt2yuj9ZhFxxGuRWLPPCuy4n5aXka4YAVgEEyrRdQzTRUUYRFCqibE9oBeZdT7PAVvQp7KC8Gxw1yJzr8CH5D2",
  "key27": "4NAqYJrT44EN2MRZCxdUvWi9Q2z7fT9qR6tM7t8AhnxkAQM89Yt7Pnk2rph6rkSLBjARK9cqebPHjujx2AMRt1PG",
  "key28": "2p1455DTxNzJjc3sp5VBK66xCoNNktx24fSH1XHYsawWsQzAnb8rmgTmrN67Frkqwi85TqVRmRDscvsmxL9vJK7D",
  "key29": "5qXea6Q52B1SgTPw9TvwqcHf2s2zSQ1KvJcpCB5x1neFxpzFWE11qZa48xPXkgz9C69Fcx28Vq5Y2bkUwehb3egh",
  "key30": "3rZRvpdcpJFvga2nkppJMWH6kKfsTrhk5ai4THZTJJXE6kC4pVYisHmrnUC4GDKg1YkjgWsfDnY5SHiaxGFvvGHN",
  "key31": "bNHQbLWtNpmii3Jtama92AoS4DRa4LHvrpnAKHjusnT6ghncgG6wyBJxYWS8BwoXiHWYFMjNyxwwEgEuY93LUuo",
  "key32": "4Bmj5NvXaQmpVsFzYpTrLD9fkPPVMHx9JSfsV2ZiyYWajgRhysnwwTr2kv1JZaBZX1rurjJit9ddNfW6s3puav8H",
  "key33": "3Y3yRmGQEMnf67FrQS8XMNRBwB18HjbxcDymCMn2q7ZAHJ2wREyPMkomCdy7L1AZ8v13hfhTC7qC2fydDMMG5STR",
  "key34": "2CG77dr2YoR8vkxcb1LuFn1h7z1wPZ2eGVUtMMXXroGXVbtHPJdZb79EYh7wnHepGaicaqNjwYa4N3TzrxQj5dBt",
  "key35": "2N6ZSJse2VLHHPQW5BCaqLYMehC6fJDbiKMzEB4Z7cKuvRAwPvCwrA7sVN9GV7xUKsgeL8AXiFP87DuhSQJiwSkk",
  "key36": "5Mr7a4Socbjsxna5q9bMQ7k9NubvepfkYXRsGQ5YiY3MgBrmiQZnsf42wsfs3Cygic67cqHRQZC8pBXKpM3GnoSP",
  "key37": "2ZmFc89cm3G3HkhM88Towp3sDhbiaJ6zYX2mB4BvcQsJ22exqEvRDpVsMAHjg9vwuQfGyeto6in8jPPz4NVALueA"
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
