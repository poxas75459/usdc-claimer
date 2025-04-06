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
    "5gAsQ9FaSszLWn4f1DFedp38FdVFLGV4bZWSN8e99WnQWvSZiY1EQkgTZbT2itPVCWrsKGgoU3PmMdohVLBUc8vz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yMTdkcMrvK61UAZQ4fHdMDKG1bdxpm8QqRrus7xJfNVEbn1YMdUv8btMfWmVyokVqwbbrwUFugfvL7ELSnQoYaq",
  "key1": "3ACwHKdzxLeA5D5DwvrnxMgn1csqQt5uauc5yxJsUeisbyfsbiW7kQeU3VZNZdJWXHqtRvk9pvQzt9Hf6LshrKA",
  "key2": "3hNGwnisgRQWkNRq8aJBSEnocjCEW6SfMnheshNcb3TLdQpmJHJJYGFitgBefMLBX5pckdZe1Bs4vW4ng99jBmtK",
  "key3": "2i8DCPmaxUWV7NgxCRaBtAEJ2CsJ8Jy9zDaWd6FpHLKSwfyPQ28fGSmp5FbEjN8cddviJiRUdE8RN3QTZVuoJJU4",
  "key4": "hARndeWoFwN7HSmtkLRLmfTPxbuH96uq2biXxVVBphCajSWVJZrv464ucUwXPPA3iNkqHdVJRd4rKiCaPzdcoQU",
  "key5": "5c5C2wMtarptCLjtfDnsKZJwmeFqEPcnFm1e17akr2p8eboHNAZoW3pUPPc3j5tFJopp9dGVZQP4Z6nEzS8eprBK",
  "key6": "2TBu85eptTp5Wkkth3MiqqaY4NCBeQJKvJAjiTcHEiMCxGcgSKh6PBymY6UudZiXSGK7yztDrn94QGgVadLqZg4h",
  "key7": "4PAuoE12zqb4bXzTRbhq1RceSMWwqRVxfGg18oyV8u3jJHK6FsPEpfrZKBjZ56ZXZv7XkPuD1vVwWqhXg5E4VQGC",
  "key8": "2Ayb2XSXZRbg44FC1e2B1bPJ4iQeTNzJ1nqP9fNzgP95QZAUQtX22RLhU5tMkbA4huf5EjwqjGvxkeoqSitHBo9E",
  "key9": "ecLKSH89gh8UiSrQ8d4E7MnekWbVJVqXce5Z2CmEH9D8qBBb9hp7BHBU93iRWEeDC15g7ACQavoLnpRDwgss8nZ",
  "key10": "5D4foANB3MQLKxxEfZdnuwb91mZ4zietzvg8TuKjafZpmk68Hm5NUMPUPbeC5TTPXAV8BiwwaKPWGieh11xFAGf4",
  "key11": "2KT4gsepbK6PiYfhZatpDfUwqpPUccXfV1ypmp16Wo87jWRJq7D5Cp1UXNsE8ALo8JXPCmmEptemycQxSuqMc7kc",
  "key12": "3Dw9xtKivSEhYEARQ4XEEav6ADQPTq1WNDZQkS39VVVTenfWQFMmjYLJK5FGZ4iUhnsqgS3HigPFcdBom2u1StE6",
  "key13": "rq567p4FeBa4ZSzXwvnFxVk7vCAdrR8T8oUMLUqZtsnhPReA51kd9TWajv9Pgtu8pkGhg8zifLsUFVvkXaJMD7M",
  "key14": "63xxT3VgEhTj4wbJChYGGELsVmEQein1ZAjm4EJ8jhhDpMj96uVHZ3HvGyHhwLdVSKKfKRXheBcAn1zyoRKdscz2",
  "key15": "2AXtEumymoRLRfuwCXEsifBKkXVY4R1srrTj85MeGD9kjzm8yiQ8NKHSNMkqi8DfH1Bh78NRD5HWZuY2KgUAaTBL",
  "key16": "PgpEMxs5h8v15YXxMH2twhjScJBaBcaGXmE4usX2GWbbx9b3WfQg7qynwh4EjhXgfpNJ27dFkZVwN9sPcCTnCbp",
  "key17": "3x4hdkYc3z3WdCBMvbksBi6fHvNYpYQ9Rc17x6GkLHWwqxfjihbEYY2eaasZ7WwW4Pbjbj9YKp2Rg2emz7bKgq1H",
  "key18": "2Rsc7pcrXt7uBzw4vwVyNg85sTM2xgjtCVLGPfnALaNiTtmzZaeav4y3HyQp16RR6FTFh13FoVW3X3bKVMVy2g5A",
  "key19": "kjeZwcovqup4MRZtzeyzuviiqJcUEa1UidVQawGknsydEmurjkdoUMUoShrhFLeXzgcqJHrvMJYEHRuaEtoqyuM",
  "key20": "3qeb2mvpHby4zuYtAbRu1eHFHEMx6Bc1NemAwWxNECPhdGqzqmzf8U9aXbYnVMx1y6biCx9yHeE37tq8Dw1KBN4c",
  "key21": "2ZJuDzPMjZQCUakYpwEp72aNggGEPZtt5CQ5AGJRRPWBNsGSpspsqGUTczHwqhHZvyjKQSUwu9WLxWR9Rs7vZ4bX",
  "key22": "2GugQo9W1uMv6YxuMwdhVpGXu6csM2MxUMpcFyRiqrBANMD1prNmtqk1g4pDhwGexdeXjti3No5DPdWKu6YgAn2X",
  "key23": "4TiKMLkk4SH8CHhJW2xrEEwDbiZm8qwrNVTxCDBL53DZoaNoHjyQY5wkF9x3Y2AM6DMNYQtzbMfLarPqB21Y3ezL",
  "key24": "3s4dRpiru2f295v3QRvict7rWtVpzV4rg1MRWAhbWmBWa8H6Kut2twa5Ymt4haGX5WbmJ4N3QqEFd5VUYccZw2LZ",
  "key25": "54UBrC57fzuTNM84UWrsZedAGfghMVht2PF1v5sncEypgwb768AHwn52XRyVRZEzU4f9cK3ath7xU2FNmuWvhCvi",
  "key26": "4hQNXffcJAC61K6ms1gsuTqswp4aeWyaDNCYb7rMM3jDra1YMynAbGTKxJZ2bRjV674rNpeXkBuAwoAhqcQEFjLA",
  "key27": "24LCon3U1Ty5YFMkR98nLTFiK9yzpE3VsLQiBvVB8JyGYSpKTN4q8CS8UHoXkSKUkDhP71KTXHPcMRSb6Y2XJbgq",
  "key28": "3vnJ9eW9EaA9FPpgAgwA7jssbPwEJsXPtDVWkYrSiEFxMoanctggZqmhuU29XDRnewbeAeKs3nhweCKvkGNijEW8",
  "key29": "2UtiN5n3bBz1jFBcesvtrVQwQ5DNfhcUFbGXXpfDBEhUam4TaMM2HWfqf1vkbbnxymgBWxkf5zqcHPfYm4JXWqjd"
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
