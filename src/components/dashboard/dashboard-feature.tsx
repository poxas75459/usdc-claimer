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
    "4QBZcgrf9y6nm8dmczJMDTRRfuXx2x3nHKwGqnqmVXZUAnmbypq9yBJSmLwb97nQvcoq2WSVJkqn491ncpoXkMSo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mdZWwhazQ4rEpNgmRRj51SF75DUEWzwmKPurDPQPm8L9XMEyw8ki2yX9rcU6CGm4uF5TsHWPkeECGcGkhtrQXys",
  "key1": "28maPVrwhf6oyyFAKYHAznNFpNMu3ZunnH4ni7Efkigi4zEsZzzRabo6Rsi5qoLTKdbmwUtM15QUcAaCsAXbVWvW",
  "key2": "3AyQUXxGRRm3WmZoaAUoWKRbSdWRZAuuoPiaERpoxz6iHQoKquzh1cPFqXejiHMdFFHTGbsmS7Grm5ox2vxjn66T",
  "key3": "3jXf1KUNAWVMFiLFuaR5dExgX2D5jB4WrsuZKEisGKZyWpcsh5Ap7EkY6FPq2v4hRETcDhChCQ6SDT1qNxqu5MeK",
  "key4": "2hLbCfswJEBruyfHF8XQB378T7VDw94ZYWAvR3E1FH2eDCQpUe5YJjbN1VXURbQf1RZuLHZhK7syX4LHPLCcyTa4",
  "key5": "2L5Si4FBMFtevzfniV7g2TNdQ3eAo38dooQ62a3CPVfxapqTfXcZyUoBaCzkVYwpn6Q6qAAPtfzAv8qhYmpgtyVm",
  "key6": "3qDZ1RxEefBGPUcAMeq4BGuJCnTio4wCJsGWXm4SbsMWUyka4yuoxjcVEpPUBQ3Uhx8s3XJfY2ZntyRGNoQuGGDp",
  "key7": "YnUoA43xQbwupnoDSJvkihksafsYWYvxJD3wxpwGtK7RhwcpcURzbwehPZMHM2NRUZZJfvq6CdDtGNPBNYmJ8X5",
  "key8": "2Ug8jipJinbr4TjG5hYBLbc67EwVKE2ELS1zNUcxsJEpkXcxvVWybFTpYa6ZuEJt8tFxWFHabArnyq4kavTBoRcL",
  "key9": "5b8MUzjeVkVitb3jgdF2tJmc3QXP3tpRQQPmvtLG53awjtTvFSHFaeKZd29Qv2Yse3KK75C7i1GRX9GKehTZ4Jke",
  "key10": "LAG8mzqKJyYeyAoJwWUTaYFxLtVEnyQbqHVyqnD8CaZhHCG915LENKKyXZHqjKoRA3CnRTtqDomkbxrnrbwUMLL",
  "key11": "4kVXn5TpFBskkN3tvgADUoZvvmd3SFXnS1wuuchiSBjQoFdSFDQYzYrpwTn5W7Bjn4VBYdU1uXDLmpy6UgJT8uPM",
  "key12": "2fRnw9jYWDX5KnPbhQA3Gb3wjEDnFYo9UJwaipdHqNcnwvLdcyWcYnzovkwH4WzxfAGF5HWRGz3prpe4y88ZpDei",
  "key13": "32p6T1F81W89Wx174Eis8ED6LmAervGymnieK64gEdVWkTKhsb7CJnMQf67suZLafy4fj9PZZGM1BS8hxyh1aRGS",
  "key14": "7gnCXswjRZCBqPrBaLWMLuzG1NWzYYtShNVtCxYEF5GHPk6f7RYG6atsEcGpt5Xdw9kr4zGZmvCh4SmVccZZnzi",
  "key15": "vwE7RQTs8ZDrQTp84bg8kF2mpD4NLgT4VQnBB26mVUf1sc3fYgMxD5jytY3pn9f21ZZPbH255SqJHhzJHKevp1h",
  "key16": "54V5hgmECRD9QKhFR7e26cfW7g9ZbXiTbSJVYoM44paVkSmEE3fMvc2LU6JW12wWGdPZqHDiouMibzXQ87ZEH22Z",
  "key17": "5nTyvi4DahygiRVnAjeiT1YVvMyXzDxmixGsmuHsM3gXq9oDgt5Qmtpk8pc8nDHW537WAXTfic2hBGPoMmEURSJK",
  "key18": "2i6rovDaDFKYoEihBy76HYqDJiWghbJQVpGEYBCRojSGRf56Da1dLLFYhrUWmfPJTUWnh7cbmFXBLBWWta8MewvE",
  "key19": "3eTxshs8boXqrYPLEo9CX5qqwcSfLwTsgRAwSDuyRPfkyEmtrkq3eV6kfH3wnoi6czDKLhUgTJBgeQT1hJgXzWbG",
  "key20": "QK12NEJNo9XciNVewGC5dx9TQkBC4BnT1QniHR44PxoKmHwLBrNXDrAYrHckzPdbSka1f6Pjnc468HPfgAWd6Pe",
  "key21": "2R4kRQdBbHUMoNEs9yNn6p6v7hmdr2T2MR25dTpqLmEQ2C5ULwZw4seNWjbrnDqcKNQNEWJ5iv69WmYdCcyDQoy8",
  "key22": "4Z4xSRTQiYAdW7HQXafKRMvBaY4ffUYzkhfK5EUPeZkR9PTCB75RovrdSgG3KcnwsVGh5bhum1iGHj7BsSS8C92W",
  "key23": "2HWp5rMzvJcQToq2Lnw6vgT49bdKK7akXsYMDDfee5xkMo34R8v4vTxBtyyjd3WdrZW4t52Q7nHMMypST2JGvePN",
  "key24": "57i3Zekq7tRpAhSrhWTA699c3Aoud9rabP7nWDSTxhXb8wTsVr8VvU5Y5pRcBBe4VZiySww7rrN6bnc3AhrA7mJt",
  "key25": "3dhTPwX4k99PTgJP3HpNQhgsU6HLPfJv2y144eQRzwHfTdJtiuvMTaZ2u2fodXNxkTxc3D92qS9DUMV8DhFq7yh7",
  "key26": "611YA3v6AyChFVSACsKHAF8neEwy3UhYvmPFw9FNtrm8ChCNBs14FdaR31xTRWouQzv5guXFnkP4w8U84x1k515v",
  "key27": "3CHjZ9RLwDULatFTT2ZbPVSuzxZipTGxKzYFytwVAr6Yo8Z3ZSNJ2D5a2MoHe5kmRnBuasQmRd5YSjMsCGzKgaKm",
  "key28": "4HryCCFfHEJLSVJEcHbznS8UkcUZHoLaoCYAVqLc7eQwc3UFu7rsA2HzSzkGKYHjGUGXnbMBMy18wx6Fmh2YqxFy",
  "key29": "5fMnL2oWWwK3jVRLQad25E7wuvFoYrRSRDe16cmo9R6F4tb4jKpzNKwPw5dHjSrdS1FMdTa5rNEgys2j1b34f3Km",
  "key30": "5nsKTRpv2GVmTQc4SbjFoqux9PvtrG7ezaGTsg1Ly4beKM1CiFTAnZD4YXAZ67kFxjtF3oLWWbBV6ENcXDe3doEk",
  "key31": "mfAyCETuXBwcKejbZBRPakh6vmF9MqQDFnCu48ufDsuVCm7ko4ujHgwwofxzUSxWJDZbZLpfuQi6xgJxrJeHMd8",
  "key32": "NS2BG6zgxw8jca8SdXTnjHnwtjwxXEbkUPmxnsBnA1ozsnfAPZLJmkM6XcwTGsUhriHZxQJHj6yvMVf6DqdzPqu",
  "key33": "124Y6G3kcVJ7NwjEb2zM2PAvhcVQc5QUoKV4WbGVvcJRur1CHs4oW1DDxopbBwx8HQEdyQm8q83RMERtdUsFEBMp",
  "key34": "4mN4EdTYze2eiWSC6Pui8Je9FGSNKVnLF8WDgNjUkccFN2B8ugJXAQKi1RoH4SeJFaZJrgjcft9nowmV1g5RzgRT",
  "key35": "TzrjVHWpeJRsZmkqdLAqfL4HVg5tC7sxDzYrpSGK2iCJC7ghxrMQALk1PNp1Yet37655NQhmNXjfTpGXd8AZY79",
  "key36": "2kNSrrkNg3tH3Ck58CseNttsAJj6kvahK3bpZWdeJPqFnVsreBR6e7QZwMWMsR8JcEmUEY2zxevTdzvELxuXQ1jg",
  "key37": "K26BTPACdBJFkafVZeMJpSKHJiRkEDyT3NjWe8LpEgTCadoZm8prz9jSqwMZKDUn8HwWfzgPtTGGUEVh39nTCbz"
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
