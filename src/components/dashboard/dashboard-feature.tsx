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
    "4Cft2GvZsbuY2AZPURidMywdQYX3BjVMcUSi8izVaQ3zSdCg7MuZFqJZqGrT6o2oujYMYp9VFhUJSCA1qqwqSHVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SLhBHAkr1kWWASaML1KodWSE6gghzW13QpDcB2BxEdfQgwx3gHvoRoyLgKfVyGdscKVijW4QDFxAuDC3q7Gw13D",
  "key1": "4UB7MXn1XCeMFqrHnX1o7uZjQbg7UMafnFRBXqmzp8xHgSzRirXAWyx4zuCMhwzvYk17cEHPJcMnC64Zih1QrzVc",
  "key2": "4b3TR2TZ4FqLS5qC3FkQeZHge8ciiuvebnUVz1ZTdhE3rTg4negN4ibGF1cEaxCUPQQDcP5giQZ1239iQEcZa3EH",
  "key3": "4F3BJB36yThWAUMFB1it5jo7iREWFodwgLSB59UBnKfh9Wvg9pco1KiWvsx6T5ufBHxRci6y3TDyrCmys9qvGmJC",
  "key4": "3KLU1mibgEbRjujbuQu91naqb7aPAkapSuFUo8uWWaVsdkvuVMmkKayocWobBtD3eMBaRawY7WKXh53V7ZpaTBAs",
  "key5": "5hSPG4pDGkA7HnpPZaYKcb158XCmf2Yk3S3TEZJiKwCcSbCW3PufnapXCAKc57ZBHDb13ErLMZp4sVLYmaRPR6Z4",
  "key6": "45Hbh47rJyHTE5vNKTAdJsPoxQMJ4AkRT5KN6V2J1F7tnnfvyBtDzJvpGS58i63gsFyVWcUU1iLvFQ6fTFqPXqq6",
  "key7": "46X3z83qFvDKqzw48AwHgE4Wr8Qip6NbBBWBvrJG4tJvXGPCKwhRguiq5ThSJta938EbrpeAazYV1DiaDGeCessf",
  "key8": "45J9bdU28HeJPkQyTPfa28JGXHEzoHYV4CCT2er8qweovz5ngTfzzqj1gmRJ677uM6enBbUg37FcHM8Hicm8eDTW",
  "key9": "5f14FJzXd5QYLFLxanqvTkFJ67D8fkdkcFdLgNsjEF1fUY53WzBqJuFMVorirrxSbLFMDWxxNGMuDX7GnnfHX1sd",
  "key10": "4qdqE2WHL8pP4fkUtaH71GT1guE6MenPsgCYkykiAV35KBANsM4Qay48onYEYvZhgU34btfYXDbYa3N9w24mHaqy",
  "key11": "x456zd5qxSN929TnPFrTR6Bzq67ZbRgeAT9ZpyLeKSdsoyYEXrbxd7AiDuqmbnPkpEoaBeyid7wPXRU7VdBPyb1",
  "key12": "2F7eV8ZJ5yT2HDKdnzZzAK8TG9xH54YREmFefstyTRi7BdQSLWzDUE6QrCDMXLfjuSHWpBJgg1zduK4p6BXNP8Jv",
  "key13": "Mmt5iNV9sq8tsQefUTzzp2impDmFHhAG91qHGoaMiuW2uvwkdcMMT7K13h2HetzxpWXwppnvfxGp9STmjHAzYEo",
  "key14": "e15Nu88B1qQDXdBWAbQy6eeMFuYFF7gLwYNc9wc3Q9kBYKfmVnnK24Wd58AuhRMPSxH62ssbKUKinKUtAce3Y3h",
  "key15": "628LeUxPEpydCbeTcu6D4UJrLZ6vFLeyoGPHe1P88NpvYVmf3qjDPuiyp6EnYRs2KuLaKfdxN5vEE1dKx6xfpu5d",
  "key16": "25vwgB1njkcCKvirJFi6UyZbPYXzL7vG26EGFTyj3K8TAu7ZKWRBeFEVuHcfLVAfC2FgYaf93SqBpZtqeaGhwW1s",
  "key17": "2aDVEQ2JpmiPw4nGXvaERdAw1QQH9xgpSDN6cdnSAq6Zu7UshEbkBw9pqNb6A6hHkgoETt3L1ggrChmYTRpALfEH",
  "key18": "4rTviEYL4x74FhpkCdz5DwinFujY2EwGFAb2wyEivTX1HhcdHTHvoBAHRh1WiXFT6orz9xVg559JxxHk1PB41JER",
  "key19": "N3UQS6dr1YV9rjWFsJbkKzPqU4YnE8TY6F83pSp936E275aEnXJeSvZNDkNvB5iWGRLQskHp2HHZieMajcGvB5P",
  "key20": "2id29RPRSAp6CcvcrH6bQ77PXaE7cjouFHT9q8Fu5esvj4qm2nMLPL2oZmebWnxFubMZYdxwq1nRHcfw3DUFtZxc",
  "key21": "8rSnPwauUM47UKZWdtdE3mPuAC4gLHfZJZqCdS7v8xvuQJvNCu7GYeA1qV22y6jYhUnywKk8t7UtTZUMMpZBRAZ",
  "key22": "3FUH8BscJRYn18hAz5oNzN7jQExTeHZD2psMGPpqFS9ePKezQj2RUuTiGdQYEMUJKBgC1ZYo1SzafN3DnT1Z8qU5",
  "key23": "5HSN6tdQvRFmqqm3rfQ8axba6p7sW3s4UwqzKixNGdvSkqvqKyeXuuwatTW4FMMRingRLv4ZHEnpeXrT13xnVkWQ",
  "key24": "26WYCkf4aaZUXCyydc5rJkrp712idPYzmTbngUBB8nQ3abBxd369nna2YypjECiPtJdZU3Uc2kh5fhBiY4Ri9uVc",
  "key25": "4R5kywek59BuEGt1bwctjxUnTLt26P9UeXAJJ8tgYhr7vZtajkcuaaeQFy1iifqCCPjefwU2cMTCJpaKPAtpAGNv",
  "key26": "5FuQprXGPnwAqNgntjaByGG9MDvwhp1546GhmM9C2fPcLdeHuRXSe7NzQ5xm3jWwdHnvs6oWRnSR8qzDC3t3qgFc",
  "key27": "kBp2eifZma7WxRjn6NhcPU5jYyLq4MVXREVy7LKLNYcfiyEWaRELpV8gAghRhrEpbKaTVh8QzFcXxTRjA461gLm",
  "key28": "K6FbBb8Pex56Fzm1vLS5jSrzCERtbZz34BJjhrphA15uxTM1YEfyEaNn4wCdGrNbw6JhwMXq2FVbBozneYQxkCo",
  "key29": "YEiNGmDHHXk2CJTct6pKHZRogzanQpXVRayo3Ce39Un7NtYqRB24ZrWCg94df1czK9c3oNqhko6kvVreTKSaEYW",
  "key30": "3TuAiHhaabZUVxnbiwBKqoVg85sqot7rgUscJnUwFX3m1MUiaifxeeQqrs3YUGxeM4R2YeLg4Yyhhi85npTG94hd",
  "key31": "38CSyRz7xiWDPxR2XKWvKmqubtgvRMo5HJUjVCXZEpr1yRi38uzdywm72ejXPYvxvpbBLcjiLShBGZe6R1UcLfvp",
  "key32": "5anmDaYpzttrPuVmz8H2AwRXgAdJo5FiWd3h8KufKQFCbsVrDmi83nRfSabQJnPh2h8mPbfFEEvHMyEA33xHfYHa",
  "key33": "4Z3qQvBwLAE8et4sbjJ5MEGhDDDo1oYwAMZKEfPWkavhKU7md4NWK5raPTUcqyx1zzCDNqBwUxk3NR9x4evzx9yU",
  "key34": "3kF78WAYB8akfxZQkk1Hv9K767WkaxkMzeZ9zh5Vj4JMdiV75MUbxptTvCBGzTnFQC1RCHrDscVStgmmfmPz5APx",
  "key35": "4e7CUebcUVEbBZMfbsPjwkswARm5JdaN4p2dPeFGK2xAW2rNUeQHoZhpPdwKwYwD8s8gAs6WbzZn9uaTnRY3oP4i",
  "key36": "2dczSS58emVdBy2XYqU7Jp1FdSBPrY35xbHipoVK3swpqa4GHkGBohg6nXTivV1X5e5vh7rv4QFspW8PoVVbvYWB",
  "key37": "2J9bu9TNV3Z7PCP1jaj5xhd7eHXqL4B5f9xMR2K6UaQcMPC8sjsU4PVmX8QfqdBNoeicgUGUH5Jj2z1hXyKSSttK",
  "key38": "3yzXfcrxjJNeRbfjuHnU5U1DPB4ehNBmP17pQvL1d7DFRg3Ct4GhgVEsNwa516pyT6C2McTrYT9kNQSfakRE2jDm",
  "key39": "2BaJ4J7Tzd8pmjtyJFpTMRuMwSvmcqSqGQqQpiaPsphXXJ4eHysMtQruScL9zTuifrdVF6dEV3rVSyP4SmsmtTX",
  "key40": "3yDbBF7WCfadkw96qiUAn3p6oYGsY7wn4vfiEKN5TpPTLhuDVt5qb1aXLZQAz8EPHRKs7eBDTBUAkmoEtRscqiwg",
  "key41": "3Jf2tZ8ZSN3QHfiPJu4uuFATB1xYj5hnj54hYKKWmnf8zYR4dw9UX86DJYA6wPj1JTbosuaT1dkYCbyv69e7Ri8R",
  "key42": "4RupyunwLSyjzCD2SpcF9ULzhANBwsHooiXWEnfJHFBuQziSsFFiLJtFiSQrt8bqtZjtZ2GZ6fCMmG1kr6udRN1J",
  "key43": "3r1QUU5YWQtb48PE1JocQ1YCFT8Fh7NopE6PKMZC4LcMooJCbTyQGLvoB5yhDMdJR8bKyk1jpPSvyRXz1yQ5UUfv"
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
