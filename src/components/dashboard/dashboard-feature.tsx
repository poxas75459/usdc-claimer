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
    "4XTuSw5YDggwNeN7giwHR5j1dmU5Pm4W4D7jWC63LmwucWysEUhzREpX1amvbHiBTDgSErHsr5G7djs4c8SARTKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hH4UU4FWCtHW5mz1c6whbqYzLpKGYqipCsikymLBSo9YKGb16fwi686zGFjAk5tpqgJ7WY48ZdBoaqGZtHo3hE9",
  "key1": "vrDhHgpBDyFMsUHrmLzDUoAVnUUAV7g8gL6cekQuwHCu9fPNKjMnbohmFR56Q17515mvyvqwZGKzyfdzzAjWih1",
  "key2": "5DfX36n4CC7oXTfkJueyLBEAteLnqVc5PxsXZygHV5PYbnwPPxc9CJGvr4Gyt3Tu1QEdTT8gfDySN2h4DfhcxN2r",
  "key3": "3NQqrjhiDwQsx8vQQKw7ADS1SGvcnbm3CB4z1K4brPW14Za28xiboHFCTyY3pUVEUntnbMb2UJ4hWDikhcKJN8T8",
  "key4": "zRjvhFAVTPdekUydKfzfo8DygMYaAZw3YC2fBV6Ms3mzyTFvw6fdy27fajZ5zhjaN7hVDkCCrvjvtc3VNXnU7bK",
  "key5": "S34HquTdmT1VFR9iYPyXBieAyUetk23knhhgPv22X6XBR5MhepTEnnqLDBQTKX1VhBC6iWjcGbeT2Hz7ddBCTPe",
  "key6": "ZqnrMQ9ufvFPh5cgYY3yGqfG7uXFwNfvHWqCLtD2NdLKT5KonJ3P4mAudGSTbPLnTUk1aXc2g6LSdaDHjCmauHx",
  "key7": "Hafr1rRwKhTsetT8KN4sXNwm6dYimuouNYE3UmBtqa4AcYXXeSLyrpi1DN6SAdWsfRkm1PtVNamhdgLMfEVQgxg",
  "key8": "4G8YeT9iagNjH97bybMwkZXujsajigabT77uCa9zKC2aT8uqcnpmq7Q8NPzZ5NJUWQjkz3JZbq626dqbyNwdxRnn",
  "key9": "k75jA9beAN7TrjYzBEcR9iQDyrWH4w4YtHydMuPw71zYUG3YCn62Ki3eLFUc9rb3jwhZVHkkSPXWZCj6HGhAhSB",
  "key10": "yxRTW6f3biXYBynDkXwrtAfeXgTWnrGFuWqbeuhJkRPuAEMxF2qnbbKDip5PRcwAjEJxPpDDG8Mrx18ubGcjCfb",
  "key11": "3cf3h9WvCjREYsjTLJWgmSCGMkWPHYWAMZQCxKgjDXUxdJ27ibKMsHVvwG7Q3XZ5wVdwA3dMi8ShDLxwpBAuoZih",
  "key12": "3scKrvqcdkaFRrVsqR8EmUf52upaBKuZUSbWhPfNtbesemRHkF4VVS7eRYGSLpW2Vdqy2ckN1fueuKUjD1ZfoJVz",
  "key13": "2GKEhJ28j8rCqEJWgfZ5TAUdDu9oXyPZXyb8e3f8MGvLUzq23j7EhgBfQ4agveU5f9L7cnJYxHweeZX3TD5DDRjs",
  "key14": "3hw5M8TzXV22oP8EELaExotqzrSVSrWZBsbbypVu4x2sdApndVRhDdxDtkenCm8bPrsMiNYzP5pTSJwGiQ4jap8Y",
  "key15": "4BHWktxuorGZw8VFS1h6j7W2WP435cRnuKim7bHfqFZ7kK4huFJ8c5TF6vZRMUhC2F3QPHooYAU1PGgm66HMS9FL",
  "key16": "66W93gEULT6T1P7CP2eAp4rSCf6kKfBVMSFwHoVYyRfqazPCCk5hFqBuuhrT1S5e7XrpsPuACDVH8nP7EuPveaor",
  "key17": "5R6s62twT6eMDwTWQMfAPnJCUiUn8Zq5FBpx1m5uXr6878PSLCes8SAEEzJUcnN6GvfCF3ze8c8aot92Daf3bwMK",
  "key18": "5u3JDQw2rEMT1xdRXP74MRzpFhH3UHz56YrWWFFu91e7DBHVQfbQaiJHuSinnMQjyQKrTzHKPjwWmwMYdKS9E6Jp",
  "key19": "5V1RuaVyeBKSp8EcZomzBGonJAXDrz6C2u7S33QpHD45tCAoatfCuAcnczhPQ6ysuJGamcn5zsgUXUgxLAaF1KG5",
  "key20": "5ga7Gkj7TfxTVJZmAkvCvQsZyHJyHvXRAM3cdmA3mRcFvSSZnVj6CKbsDfWrzsQfFsL1joFaJhWNh5Nz1PxVKZXm",
  "key21": "2Z3MHwLXc3HBbnJCtLGrHTeTW63AUyVpWjQJgriaNvCd7hyzNCprw42Hn2PM17x15RqRuSQ3fJJ3Qu9VBAjrnN33",
  "key22": "4wavDnire8LTCEBTXEiVd9FztdXsUyXahLhccZHV27tVGt1M7Hoi6BABX3kCyG4G3yksjeB9kH5pBoG1RwQJdgky",
  "key23": "4w9ynnQzaBaBsFcXQHe1KfW4SFn8afvZFjJrVvN7RjVYCVCMu1Dv3NR2dFYC5hc36K79WETfGF7EestxmE5YAsbN",
  "key24": "YDchnGegzJLpsaFi9WouhXshCA7HrhPdj8hgCUDfpUHToLexK6gE712J92SMHFtiCck4dsTt3TCK7PccRySPwsM",
  "key25": "3EM4Hf5pj596n6ktjr72dptEGWdj9Sa7UQctuGgYHMMSHqcWs6ZakEzs2B4DMS15xHVm5sx72groLK6tcuJGrqYd",
  "key26": "39fMgbtnm6KeA2QVBq5nzsFnJQHYSfMtrqsLobM7yPRrZPSfG6N6MpXQEqr74vjWC7iBihNeT1hFcUm77RyYvmf2",
  "key27": "3Zjkg746axUT8bb1dgBSavUeQuV6FuDnVTbQCs8Zcj5BDLJJUN928ECPiS2iPwV6xqrAsvsHicUDwA2mBChCSMxn",
  "key28": "46Se7jbjcZxvTv3GFieFNx3wXE8RzYKUDuZgysXY7AyeZfs3RhRpShyhjFbhNTATCFoteCj7uKvp34bJkfAC59Qi",
  "key29": "FxZNbs2f5divgEYgfU9Ntbv8YLtp2jd4M8w5vovPx6DgUdRxuoKtzUeKKeddEV7hiEjg8AahWzKAmKP1Ux2jgsj",
  "key30": "4jHwrTYVniPVpG4CNyzhnS3HV8CMdF6a4mPJ5BM1JbrjZqGB8PAN2drykeTYD3uhnQ3bj3Tz9svUTeCSgkgmvf9o",
  "key31": "yPZHHN3HSy1VcKocNJcrpYUqu7v3DiYRjfnwDeTNMdNkYycKWN4AJrsrve3QKGni6X6JrLTvGn4E98mG7gQi3hE",
  "key32": "45AwHhWysLMFBrp75MxmhTYDProiiZ3awH9Qk95S2o2h2SFkPUZA6GD3Dpp5y1cVmmpbscGvYFB8cG1fP7vwSSSy"
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
