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
    "5AeiyL4aS2N3UTfBTAWkt2h8DThH2ShnDW5ts8MHWc4ZGZ8xE22UQ6Fk3KJGpSkQe1Qst11fiQ36CjqgdyVZCiwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42FcoVeirfMYETYFL88ESfUNFmgGPZLMHeD8PWgPHD77J3TzFGeXua4amtqVEwhYwbtKmRHQ7mJTMp8fEFRGg6XB",
  "key1": "8qjczeHnvckJLuPiXg6yGSCCKxWPBF8zJnzyyNSX6mcExBaNfK7o8uZXJaeApzwWHhy3YevA1tkMcfVGaY3cQFe",
  "key2": "22ZoPGix8ojyBwWvENmZV2Qc5JP9L48Cy67bgSoXXz2yGyRcdwJzZnVg3Ew5mdUsLM3nmNCf3uBC4PLhsUUiTivH",
  "key3": "4B7N7ZRyX1WpbztonxQgYXwCSnrmhjbqqFz4yHtLDzyjsyXAb91rpwF5s2vEaBdv2B4xQCnqRvxK3cSn5z1QFb8n",
  "key4": "XEb3jqpqHXWdoZXrTCNFC993RCTcGDo2NRTK5tDaUQvVhxwpokyQpFxdVxCuWxtFQZjkmFzHDDz1TaPpGXwAu1X",
  "key5": "2jLUG2Czb8fMpm9AyXzCqzqQyR6Gs6x1nLya1eMVdR17iiHdMW7CAb5cV8PRZSoS1zWb1MHbEitb2rWen9t1tTSX",
  "key6": "38buedh8C7bAATCn5MNzR51FDAbBd5ULzpAgxsERhbShxtConHW5Jx3sbxXf9YQwYV2ZeqEK3Pz6zXhyyxqnNW8Z",
  "key7": "2C4Wt97Eu3zJV2tWGDZy1q177KFrNLpchsj3FnFUfNeDfeiYvQMZvSN1aPizT1FVLJqtXXLxE5zaQYyTAEp3rQmx",
  "key8": "2kaeS1u8Wdz4o13NQ88WNh9AcrNfCgAhEZn5foFsMN9krL5kN4gEsjdkn74He8A5a3nf4Lc1mnzcARTwyxkXv7WY",
  "key9": "53VH4woAgqkimb2N9FD97X3ZsrxvbnjEQMhv9nkjRUxEBtWp22gNkuNEJe2ExT9Bm4drnRvoXn2ZRMGmhnJBP8U5",
  "key10": "5SRprZvHJZ45X12E5BDidZkx3ScMg9YGmNhn4xLVSiGnYjg2QWzL1mV7fWoK8wGr1UX5bcoWb6XE4BWuysY16uM5",
  "key11": "22ZESsRPoxPcC2EzdNrARSW4UMp8KZ1MVqEWVMc6zEcR3XCV7Zni4PbD4Cn4rsRuJFNu29BNAxzW5WQDY3bLn3mK",
  "key12": "3A3DDdTRHTGTJju3b96xyd6fgsPMHo5LbitNQJ7pq36oCM8zzn9QLYPyvprpuotizd9Ws4k31uU9DZU1xkfU6YnY",
  "key13": "5FdgveZBjCj3FLtfyLdTewtoaXUYTVX2Lg4Wjp4xhJXpa4KQQJGEvUn8pkdb6qBp4YbXA55swfFybcNefaEPtF7S",
  "key14": "3Zun6HSppgwZJcv3DxJQbs1g6cWHxz77byqgx8xYvsiauy4Pd63ELPUPhUZ52SEF5SLtmwmUotQXPtccjVJEgZMd",
  "key15": "4EbfcuZrTP53kGcbKA5qsqLvzqmeSLs5YabxBvvMvoUM6GgDQPAdGhTAEnvp5U6qFrHkFHSz2LzMMx7ptk9JovPC",
  "key16": "e175rsoan8bqLmcw9GFvsVtvwVexDebJzyVsLALW8hL3zD4guPGyTXiCeZyeUJSuXTHvvbkuQr5YR7vggPRm2Ts",
  "key17": "3WE6WF3ZrBX4SRWrGTHpsmSaY8Xne3Mbp6ahSUKKzbLRMPCLV6VhdkoFavDLTdbTtKn2En46DgKMG6jmsbdPyUfW",
  "key18": "5uzkkyxG8u4ZWjtfzgeGftubExdGyTz78sm8j6M9RPQmTXL2UUrsUGP5vv4CUYUQX1vQGGwZx1CZ527gJ6dBEDim",
  "key19": "3kx89riioQvCLEJmSuTtD3WYVK4No8LD4BcmyD9AZd9PaQmCwSTVmCFd4bZJjwUwPpaFtPiRMPFhmki7bJithfLh",
  "key20": "2H1wX3Zt2yhGujrxc3zmjMbbhek7x7Ps74GHot9eZVrJsbhDHpZ1Sy59QNRoiufabMoVjE7pPHmuwTJRt2W8U8Gc",
  "key21": "3oVJMx7CPv7cch5yv3eCkx59s4GyaJctLuXeuRsRy6zwc35ifJD5vmiuBFZvAKUnigEqUjNzGgEqqjjjxd2hZoMq",
  "key22": "4cDe1Xwj4QrRamHDPhyYfXGf5isi7UgQJjJGTp4tvJahrNvF7VkggCSxhwwxs43nDmaaiVAEc2U2pQxoowE2p36j",
  "key23": "4daaDps4ToRACN9voKQK7z7Mp794dg71Y344FtJ4tfo6Ynm4Ux1cChYhG9j3jttV8FKwAyouT7QDzSbyotNPxTSu",
  "key24": "5sPk8xuQCuGfv2VkSoxG8oyhF3jKuvXweqFduTSTRHPJ9zHNkcfi52LtJrfoUg3wd3q1qN2DZQd6v2RoLBYFyoaE",
  "key25": "5ub2UUgYR1daar421ENr5NMcn3tjHNGGk6m5YoWRCcETct6x2zNkzyiz4ffDj4zSgQu4uqNzYJzGZduYZNPX4ocz",
  "key26": "4Kg6jaj1j6oLxkYMS7Busv8jCGj5meVMw84Vs1R9rJtoiM3fPfvbh6nAee69apY5GX42x2gRmdeayfhGbHaui8zo",
  "key27": "3e4PAoZMQvZChFr7vumXk11p7WgdVNDMCW6KssirPAwSQrDAkZBRSsAGC2CJdjN3axTsi9JCEuwEfeWmYPz8g5z8",
  "key28": "3jwcF3Z6Z6iGyCdTTuNn4WGoLeDFDfGteetKCtto2GN7TApNoU17X7RuxARwktwtMEuvq3v7EKkj6SPcRmYoZA6r",
  "key29": "5Q3fX8gJ3534CtdCNVWhL5EmeG7Upo1bweDXkke9V1BeLffFdpY7cpPE2PvexTyV5d4nTy65zaUbDG97iGcYUEcA",
  "key30": "63XMKyFyzAMvFEEeTZsJbV9vtNFGhCsg5Pr8MgK7S8Z3LZENYHVKfyG8GQET8himCHp2UwAD2JV4dJKZ9ZyrZjga"
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
