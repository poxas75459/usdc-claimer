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
    "5Eje9ZzRNqeyzzRLRXBW8f7wXekfiFeS4oELiY1rFvw7eGVVDoSiDaSE3SbC68vRc3VMuKoEpbGFmEQiskkiMGmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fJFPmvGPCPhA96cdWx2hfsGb96YqZG1N2dnBNEGVemcPEo983Bj6A85Zz42njwpGYKEAhtbhhfsRtSTXuTFTYrE",
  "key1": "3uZ1FnM7jf9RpjF2kFGHuPEZ1gVChDYAiMvuwpi6ncFpyVy9MpLgfHfZLJHR7jrmCNBU7DV1NE44CW5pEWW8gtwx",
  "key2": "3CnQ8txPviKrpKci4HdP4mrLeY1ijwvzdscE3zeXdcEA1N4z9ZHH7xV5rGKbM6U4La2ZX2DRk6qznKETeDJur5Cf",
  "key3": "3gpQfVkSWHGkcLuiNNwDrN8v6MpuGXEGjcQpDNfzXVvixEHPRAs7V8HQ8XCxBjgiobaghWztLS4CYrxh6ppLm26r",
  "key4": "5EKtk2cpRU2VG9mtsv45M7WHQevkckkKfzPsupdQYTGE521HBb1qVpEPuhYJqWWWbFpjp6JmeyhTq4nxrLUt5jHx",
  "key5": "2zz8Fe7Kxc732EPAGFjTE5DPCaAHtEo5ULUCs7wdRaBmVmhFNcJzY2tb3PLTRz3q1mfdZjo9ZvR9sCYeDvxRc6Lm",
  "key6": "4LTv1AWXfPDwpGptWHRdBBLagNPKiN2sviEsycZhGnLH9rVwzDWiZxVk1nEdrMvQyJz6fzePnfDk4Jaz1F2Crvqi",
  "key7": "2rJjJwWunAphhAxDrPqYqBwWFieedTHcRav5BCTeWKEp7aYDjaafgKV3SzsmTLLj2G6G4WcASk4Myq5f8kzcAYqh",
  "key8": "2cSiLQ3ivJAGCVbH6q8d6SWTh11s5KfR4gbt6MXx7feEEaP7S1bwNvXvCDWGeb5iBtz1kVD3rRsTvgFb6fDHNS12",
  "key9": "2WPkQuJH6418B1atnhQDcfuXgzqcLQNg77AgyHqte7U9VSQTsVVPzzNgc4EtghLsPDSC9ftd9yvNgGHV9UxffJAM",
  "key10": "5Uo5NLJ2aMA7vY8XZQAcbC5tL7qqWX3zvTNuHABaogJfxQAaPMbUNyatiJSpMuCpUMtgfMkxxtzJcUTCbC6ELvMn",
  "key11": "5Qbr3da9X3izmtXKdLrLqrXnuDtaPVsUBkeFYLiPmRGDzSuc7Y48m4LbAMZcz19QfAuvZpGgNG4iocWRgkKjjzdW",
  "key12": "3Zb1m1vTKxMZmiDU3pdvdJFHbLjjfY78DKuvmAvfMQPR391zbiVRKYQshjzokjhLUAGasJ1G2wk2pbjmkSQJAJQq",
  "key13": "52vrs2AUSUpeyD3GQBv7KaroonGgtDyBRXC17i3CXD6oetT2u5LGXRiFRFTG254xpyn5ruUdaktjtLuTxneT4Xgs",
  "key14": "2fmPs1km7ifbHhATZqAq4QMre2HCp57TCbEVreq6vbYa323J3oofpeCPqafEBT27iSDKd1pTiF2Sd66THiTCVTRi",
  "key15": "2gav5TKR5w6Wfxvj2hDPk1FXUXanuMwmFzY8Ntikjf5pgEEuxtVhq1C4yf51wkNhLEsP27D4iEHeE7NaPwZqQtYK",
  "key16": "2BUJXqjU7sLYNs5GDnQRQdq41JstHZDkEYs9QU3UyRAtGJGxUn8SpDp8GMdq8yWaEw5fzw8prfHxidnvgAme992C",
  "key17": "3aZgHkFUe6zHkBB27X4XNQ6d1WoW63L8JMERCCxH4phoj6nEGQQ2bEwpBTWM2Whs2fT5Vy5417hVgfeicrdQi8kX",
  "key18": "5cuA7CoegvBHHwc2eimqqJh3f4dv1aRmKgK8gKPYvMmfyV5hpPMHjdm3VbvrYZSsLmkWVzYHZSZktnYsTjxPiFkB",
  "key19": "5o5AANErUEFdKqiF1dH8pvAc3x2ATVSMR8tnXir2F7RQdp3iCy68HR7QzeBZd8w35W71TVk6dpkmv6H7fpc8GXJN",
  "key20": "2aZvoqF13p4ZSH5N5Hfrpr87Zknhc9vMk1ea4WJjkekPZFL3tnr9wwEWMTW7Mko3qPXTurzkeQZQvtZXZ6de3ZjR",
  "key21": "3CKDqp1airQL1BoWvSqLxhPKV9b9HZSnZKf7ew73m4aUuWvsEYjLykq33sKxnb51ZqZr6KwTPXxsayDCnmXnRsHd",
  "key22": "WorjLb6Bn1qJMTpvwRw1jWEi6eUAU6Do4hCusEGE8vVXNXj1QhjWiRqGwtP4xwZYYw662jJumNQo56hZg8UsVUH",
  "key23": "2TM7pkJDWiqR63m7KUxBQsNTEJzCMfYGiYZ8fRJwb4TEFon5TxedeWC781pj594As3GMWfZkzLNQ4SYcDs7xD3Sa",
  "key24": "2dtb6JbvNDc4CvaMCo4JwGSHZjgsD4vH1L4riQWNJDS1qGwKYzyzvbjQqfEhzg4MttFeMP1P2yWaL7AfKxdNU5py",
  "key25": "ZAmzKgqFwzgPZkBSS3cXzHFrfRti8toHdrCVmKBrsaHMF8TggSxcbcZ9cvfm2tZdUupNcDkJqKkPoaS7wQFktje",
  "key26": "2SJy53ii9RbpWkvvmJYZAqV4etgUxYC6Lcb9n5gpkRkFMtfoQsmHjzkSYwkQVVTUbZn1CVgbcw1c5uWmwoJu6GAD",
  "key27": "3aPbxynrLoGTkSSWPWnf9vJXWoYgkZCNdAuuYdShrfc4C8G7wwuWiSUZyXhwww3X9PUDRhnW56bSzCEaXrcVEAMB",
  "key28": "23dPkhRs7JEry2iK77uhsxQxpZyQ4SVzZoFAnsUvZTedGWbgueoTUeBrNU3sDhbE6MnGeGCE1RPepVqUcDKnTq8A",
  "key29": "4wykoaFNmRLUytXotzMiAxrV7zm43PEZmi9YFDDjw9HTEF7R9tn4cci2vUWEMfuGrEhrG2w6ab9VTNPU3L6rUTGt",
  "key30": "5GQ5W2KMDjeZswFTSP4VXa2P8vDpdd2GHDT2BPaNLt66iY6qG5wvzxC2eyddtyLiwJtBKxxY1JgWaXhapK6gudqE",
  "key31": "nzcQ9Mk49WqguNuh3voZuci73tY5KTwif5KD2Chs7QcDwcxrCgsLoDK8fYm2ckNF1NyQdbVS2P6pUo11UtR2jk1",
  "key32": "2rnvXvLbQB4nnZSfXtVCFKbzyHNaLRpP5HeyA2TXmFyDeSv8gTmjFieXuZeUfv9NhD7o9owBYkmbNF4x8t1RgXtP",
  "key33": "4baH6qCQ7ibYJkwPyVFaAGpBsuW5sRrxc1nNjyYAPVQD1JfxED72NKzSrsy26tv7U6muT8dK8DPK9RTF1UXhRQxA",
  "key34": "5Skrsk4yQoE4CfsoUmhWDCv72ihoPTSb9SdBTJKjp7Rj8VvxGKxeUxxPD1vjfgPX1fqtdp6ggcqirN8STiypn66V",
  "key35": "441tsCe2xs4XJLdM85eTnG4Zy96BCFy1ofoDUpEb8LxHWjXM4gQBFBFxw5Cjnv9HChxEij6oXLkJRKppXTw9EQ5X",
  "key36": "2i9cDcYF7ALMqx8Vw751DC2W65Cf1zT4xJtCHxUbpCZAXhn2EzJ5i7wFGvobryHSKKHyK1q4AuGaVPHM88EXovcA",
  "key37": "52zg5U8CNu8nQUCnGYsEvvvzYjfH2rq2fLDaPxDjZyxQDzeq2NXXGsRVdoUbnfSU1wbpTBEd1T9sMNVrmq3YkvhB",
  "key38": "4UeZReZUhQS1UcNq4jaLi7MBkwmH6q47bxEbfX5qrkwbTTqP3EB1VtYeZGfbYB5RFBYkAEQNaCbXB4dGzwoESBnQ",
  "key39": "2iC6iqrDw6WBEFFDcxRWtTMhrMsPvtzuR1LhS2UMCMrU1ozgf8GWzcg63p1Es6UnuDH4z5RK4Ti5NCk4PJipvg25",
  "key40": "2BEs1Nr7fGUiz9eq6PaZbr1thtkw7rNhXnvvSgDd1DzaF9D3KLsc67tBRcTjq76NuQkPaoumSvE4p6x3iPkWYiyp",
  "key41": "HjsH6RDfP4h7ggVSjfiVwYKkgBpKx4j7VPMgap9vinwvCDnzhCrekB2YMjppRba6CtBS5pSd4guiWNWH8kqLvjK"
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
