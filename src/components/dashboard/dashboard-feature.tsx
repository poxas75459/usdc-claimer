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
    "fvru1epanEouLMR4ZYLoASCt1mnkuytdcmUCV6EcRYzefnXGyakXhXfEEk5kzqj8GS3hBV5zwNkaKwzMVSysfka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "287JLn76iSUTtf5UBUVpbAS2UF6NE2wVgTQQijefUMenxDKxjdU45KeT8Uz6iTuR1snk3gG552DnTL9dpk1iKbkv",
  "key1": "2Aw8DSomZe8uTA2tKwyw6pNfDb2Gtop73TxB7oyxL8BbhcDHoqKphUy1XDbBevSBpptZ58BMM58wJS1Qkike6ip1",
  "key2": "1TvkyVDqBYbH2ZzNz1q5BKV9iAnd9ohWMS5iJygv1phipaxyareRX2kfTi8L5rw3RzydDPN787WiGE84atP1Yjq",
  "key3": "5bcK4TPDbaqsPFw7p6vYjnX5Y6BB544UKLwXspfrAMJwEHkcjB39HpiSyvfxT4usRqGgpkhpdck96tb3RiVMi7sa",
  "key4": "3xx5KfDsR2wQ7V67QnZjpgevziez8Gwq7QcChPLDcu2x2dDGFu112ojKmpqHfYZ9ubsqGHnKzPUYEGA8as1HLTe8",
  "key5": "3hLEBY14YrfDR2BibuBGrDZkGGjtYaYEcaZ1wigXnr6vcPZowGuHcBEtNu7u3MS5ovijMdtm3boqYVEZujDSvxep",
  "key6": "2zha4EjSShr41YmFeiw29pnmB5QzgnDhLGEnE4JiGZWXYhnbLPaHaDWDJH7xKMtmUZmkUWCtMJiDNWuSjTcVBy4M",
  "key7": "5TmtEWNYJSbUHHE8e2KTEHQd49yQG6X5ebb1Cmbx2PWDTmuA6WAh1pG7jJjQ5eybTa5qiMrGxPxsW7UoACE6jBGw",
  "key8": "3fX4wM8sxgzX3D9oA3UTpCnnLKApqdDW3m2hPDihTW7WcdaePLKTvDCaBzmBrkM7UorybZqBt3S74cjbFLcKw57s",
  "key9": "LjY1d3SJdq8TxompU5mph4wqBN3tSeaV1cxPGz5gdbvesqCxEHdAAaYnQQLR2aCVEUFUeX7BivDu2rT9CwK92T8",
  "key10": "5oHQjqQ33XpfDuMFBWJqByeLr1VkdCu3rB9zLeJQfU2MVVZFFM4YjBi1yEz7MN76kXdexj8LP94noGSYotWkp9Mc",
  "key11": "2vux7H9KLDDnz8sd9BG3hoLgrZTqXbr97RL32p3jJDZDsqX6aHffhVbs5nNCkym79fAYnnPVykKoAo2AcMQuX5Kz",
  "key12": "2aZgocrBdLSqXY6J5ryVZc3foRRJUm4YxEfBnEMHdUDuRva9MYr6VqGiaXk4LYvYmAw5os959v7HcjFBaYjqEXSM",
  "key13": "3bDcQEBjQqDsAcJP6C9kiMq7UpDQA5WfQtm6YjEUDvZVoZFTbwSjFC5nwts6tzdVnWwpWwoSBKjmscsce2Cr1wEw",
  "key14": "qoZMgHvyBJcd8ccoF9vDEWTyDnJd26Gucmw3iPKMmSL1CXEmtotE9GUAPUeVCYKhUjmvp7Z3w5s53FEr5mvXAd8",
  "key15": "5vJt4d6TV1FbaX7iX5VFjXNaWgLX8Ad6rytLy2ZaLPYXmpaSerdxu3rjXBhuEy9e6uW7XFECgaEMzctapUuAXXnU",
  "key16": "5RSFNqSF7oPRNbuuDFwnSjB9JW44QkfQMY5EQoQiENVJVLD3cFu316P4qg7yXcLjiUmZBK37rRttZKbv1Uq1dVXo",
  "key17": "4Rt2ZmXKBGCo5WBXjH2SSn5C34GVwqywN42YCpcca8HCNZvZMC24LNCotmpHKdynFjKm3uoxu2zHhqPaQq8VXLKT",
  "key18": "5FvjSnyBDBykqFKmk6zyN5QV6BQdpN5nqv8UDP8G3r7Wv3hUHhM2FgEwByKHhpc9uk8BRy2iKZvoZnaw1K2SB23A",
  "key19": "4pzofz3MGfuJx8wq9ioQqeWx8RxmWLDtLZ8aU7GdhD6fFvw1TvqZmouwqrqaebcevTk3L6vWVRfpZm5zepWbb4k5",
  "key20": "4Br95Ejp512GExwnSffQruJvWrypZEMYqa35ramnCsyLiDoe5PAPsZbJw2f22hU8Rs9oKiDns1spMwsDnxXk2N7v",
  "key21": "25n89YCnzjcvq1VKFdKiDYahm1A2g5opYEJUWHiwDK3JLNtPiHX3rnZSrtdUbiMaW2rXpvZudkAssarBtVTBwrxs",
  "key22": "59kJkRvB9dFGDSqWZVxeutsRRzGnKydkYDotwAAhFPpkSWtQrk3TT6S9ig8X5wzprPHDwqpTLguXNfo3L9dWu5Uw",
  "key23": "5WB1zaSagVhGJgWjjk1Z6439kVhFucWi7gyHcAie2oZ1tMzXr3mYNCvjzC9iitZ9QA3oSDK9Fr83QFCfcEc7EC42",
  "key24": "5WdC5Wm1E1LUxrBcHw8fSrwbZPsk8KDjdvFLSzcQ7F3duM8qL7GmSqX9nRab1kF6CUkWqFn2ijshS26PsnA8wRPE",
  "key25": "2FUqmBWFo5hN81gaSQkHfV2kDUcDpm4FAZyRpeitKPAkMkwqPo9RadRyknWfWXy319QPqQM6Tq86YGT8nowHRnXz",
  "key26": "5rJDDH6PyDmk1tUGxDDbk8qBSmkhGvdvqW5dWmoYXZF4hssr39m2dibS5eiV3JUnA23sDH4p2vjzf6jzWM7ewckv",
  "key27": "2NGZzzPLxTjAW93NYhTE2jpJ1YVVf5LFT8HaDi8jxyrgD7qarMaAjcHonEKVmYgmcoKcp1gucfq7aFRebc2ZHkN6",
  "key28": "56zSia7yFHESqpnxa3jKoRrWkrH9vdHVycrEjVQTxjALxeRuPSV9Vfi9PUDXE9Ax7cPSWTkxCFQdTb48xqopKvg3",
  "key29": "3Bt7D6wSb96Zj69sydg33wunChVMkbUnPkD7UxetVGHy5EyUqWv3XZW1yUtdNPX1gKkPpovnMhsE4tfuwtqs6Y3",
  "key30": "5ZQxmVwsULnymekmDnXGcftC2YuAPQewmriTJuatwzpzU2MoQwiqTfJU3z2SnPRNG94EWrCo2PGpRRVodrE1Sw4N",
  "key31": "3kyYvtFwh9NWs568bGoiBYCoPUcRWBBUL6aMFbZEwSZiSrwe7QzXBXb36dBTibax3QbMj3ndhkbm6h1LxUMi66hP",
  "key32": "vqeCjXW9e1w8Ygjz74PH87HwmopSRtMSXhcTbZgivs6hr9xirnQxcVFyZe7qC66bBUdLXMDAXV7QsstasiSDXaC",
  "key33": "2zvH9D5ghaNFENKdAPoUoBb64MtMeDsmM8Yis4bTBmEPycJ4Ux5EZ417R5HFAMmrjkyDLtHfXibyiMQNPL8eayex",
  "key34": "4yudwA7hed5ztX19TrEakB2ieENKyvyAuYvpXzsNtcjAMzCWx6kguuAwTZVACpvu4tAnsdR9VRa5ki9ZBbcxonCr",
  "key35": "2PCB5oLuZ2f1CcQgx76LRV1Rt3fDdh7tcWnQQktpyvFHxt1fqtXakQSJNh3Yow1xft1DefNoXG1SaDerJ1SJu5Fu",
  "key36": "XxQA4hgMxwMX94mjD9L5GUGgeTwAV2zVEcPoRnQWAhKBvJizgS2Sxgmc6YVgkVKmYU899VzUqicbWSz7P1GBXNm",
  "key37": "2i5DBGRkz9qTx1Qnp6sEeXxpXdFt7bGCZSxRtdXS4aB4DWJWpK9qoXNbFGqGbSt2zhg5UjpWdxiNNTtgwnzUvQWg",
  "key38": "4wbDf7r6CZudTcQd4stn4hKh5uFN3LTZsYw6MmiLVoSrSKB6E2u2SpEyQNtQN8YugcHNmmpsa1ZRRX1zshh2Amso",
  "key39": "4nRE3f4ecWVxAxkyH4aCQcHjuDHfpFTTrgWncnXSPESDrTZKUz69MADenUE469LwFC24etpeBLzfvYWkHScLr9Ko",
  "key40": "5JKnja1eENRbbLYVYuPKeGg6ECAHPujKADFy7bBuXkXC368k4woHEo21sjcSx5zB4vcfQNkwDSQqRuaijfGr8qzy",
  "key41": "4rq9EnH6LRruQBxTxfZC1S5TXenwKxokYfqrYUTLUs33bguCiy7U3kXYwXeSYoTYZFWQQxpida6RhJYjNn1nndvN",
  "key42": "4kbCzvMZHSMZfoh9SN7WYyLhkhUf3VkJsPix8K9KA2Tw8oW6i5ohEPp78qk5aYK6wZJAsYKqkujzaEP92dZ1QG3q",
  "key43": "2LBB5gxkvkHNjYJmzt9B9mSCNiASeBjvAQf3nXJazX8scWF9Qr9srXLvUeD138WnYMouaXM3ygB8VCMfbYadjYpV",
  "key44": "4mmPkcZ9D5SnmeEzDttb7YJu8dXa8frR9Xw8sDmVGuaToJRorr7dTN8PJbVEntjytFBJv82SAVRJMKkjXS5QyBrz",
  "key45": "avj2UN241NeE1iPVe8iVqFF8328neRJTbP6VggCRDFicNuWLaHhKq7ihemXF2c837wZvqfKL6Ds8D16CKsXFLPc",
  "key46": "561iAuXPGu9VeFoTecfobJsdm653MXrmuCpXuB1JLLtwaLG3z5X4nbHEt9Tjc2Cw95GAxEjFqkajeVcVYED17viq",
  "key47": "5i8kHWVPM6kwPvsy81gEy2rYR3NqoWCyorU5uTAXhRT9XAZyyugFk2nPzinwgEmdLkKrB7quUnS9S8o7GwFuhoWf",
  "key48": "3wXKkEMYogKRjrTHyCVLBGeWreFifHQBck48B1XyRUu2BK9s4Btc5ze9wCS3AEX83vP6876c9GzeDgDnA2CwhaCg",
  "key49": "3eDybWPNVM15rGqM2RpCni5HDcnZfUTVBnRNKDeDo3AAwwRjGbyVRkxxtb9DGnUBwSF8x4xYonffphpN1ittybFC"
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
