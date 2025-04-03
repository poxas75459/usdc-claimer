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
    "2L2HX7eR9AtKwhdL7Su4hSQ2MdC5oJxpGDmiV2H3ooGQSB2X6bB8Rmww9GtKpAA45kbWEuALhwZKamDv5s2vUAtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "634TC1Hj2G7cBaNcfWRCSsqgkXKTjQthWkDPCTAjDzJsAxnGR2SDR2MyEUXS7mibdEkNMyRtviAdba9tFBCC8ycP",
  "key1": "3tGxochRnbzwvACB17YwV3hqqfYVu9T7CgWXdVHMdCDMLETivAZjjrsJpNd5pAvsA1R4jM7oeUZoVcFsRqfTUKoY",
  "key2": "rqeqa5FK8B7niWw1UNUM2X75FGw25iDVRCkNM4WoTsPVVRvC4nx4M3UczV7EPuEHW2CrnV4y88Y4H9Z97zSyboG",
  "key3": "29nJZ4L86UwawkfNrEW4ZUJBge7ZeRTvbVUzFdr2h6J962oNVth9i6zKdoq6hCircuUfqCn4KNa5yt9JhAsBfr6S",
  "key4": "45JswLvzGA5zKwhb4PjEY87ASoqwiWUePa7zpa1u2ZavVR8bDghJa44EMdqxZDsXkejtkmd38TLvFepeheJxiTQe",
  "key5": "4ZXH4aNErYY84BrihsSdTiLttn7KD6zMLXiU2eMBxHMp3y3umCR9Aj4MeDKV7hSimnpvsPL3rVJYYouhvQwEFnkV",
  "key6": "4dSdPd74p558vED1MRtb4mLbmbzonpG5krsgQqnq6V7zZQmaNsW9nT1Sw8jUyRBZYEcpZ5CmAboPWG8RPtKQP9ZA",
  "key7": "5GMPXUVKfFRPGM945Jv5ifV9kwcQKbArrkK4mj2WS3TbPdXQet22Msp3W26M96vib7jeji8nxD47ckUxLxkfe2qp",
  "key8": "2bn6JsKmZdxBQPtJhVesxwNjaMes7mFY45MzUyRHqmNngNVfSFoAXLHM7cmdEZz6qQmLUumM4dE3dTbtv8oMnS51",
  "key9": "5UqAM2PcrZWbDhXVEr31kqw7NVeHr9SFTkoEraUWzzonisRwMuzoAmLTwewNzwa1X3DuB4QwP9Q33KxYXjJ6DXcf",
  "key10": "215JovsAD5pyykKHE4PzmHsg6uR3xG2Dg3sSqKtSMnhaZNbFmLBKnUqPFa4nuUfsGFJAcv39Rmk4PLkWZZSxFSVe",
  "key11": "34kX6Z7e4oxnqWtR4naU2xTLpmuN6DCbGjWtZygMoynmMLTHHpJTZXsgXYbSraphSb7iPYjadQjZH2aiGFGqzq3W",
  "key12": "27WKRzrLaRKPcty8pN5SESj13PPrRj1ssayh2znNHjSh6ktGNGnWD79cLJdPouy7sm5KBY7bKfjE4FZued1ZCQvc",
  "key13": "3NrXJ5CtTCyPAkAD1zFirGBZY9Z9MwTFN8SeStUucXWnhNJJxooo1CkJjYAq7LEQhsCk9VbznTQhk5y8ztrt8x66",
  "key14": "5CE4LXDaJb5EKztXHEkcfNqPH5FrRPKnNawkygZu9TVvu8HwoyhPq5AjngEp8QZ6j79y3cukvmn8DQAzicu2Jze2",
  "key15": "2yKkYmfEdK8ytMosEwgMDxeh7jMMhL9DhQ5vpuby1eLCg1rNKPbxvXLusJva4kr46Cw6pkm1wPb55VEcAggPMRbz",
  "key16": "3pBPoRuyB7KEVQKz1Qf7oeJu1yYyEBt1TnyK3jv1JxkYDRscj4ibsX5sr4rnHq9sTHTaqj3s9pSrkacqusp1bJw6",
  "key17": "7wiQE158wZzCJnv3jB5w4dDqyrxGHKrUsepU1k5E5rP2ohco4qsU624DYtXbRsT1keL39VzgkzDAn8XW4tBTH7W",
  "key18": "4EA55nhnz9YamJ7UU2Apr5oCfFvfiSPaNGht7seKPDm3SRNcskqJ9VwJVr91dkbNMvohjw8AXqK2XC7EEcFmtCxh",
  "key19": "4kGVsAjXWvVBAkRKGznZ9EyAR3SeuWhQsBQV1XhA5L7MmgkbffNTfp1dxAkkEuEqM6ZeHbWUTLpjNHkhMdSaNv8j",
  "key20": "4KbXEZdVtZAsTTtTTfs8ZX5BwmX91Y3Pk2gbHyNEsiZsa2mYFQ8zH1fxk3d78YVPCSoYkUnPxw6Xx5jedhZJttRj",
  "key21": "3QCbdJn78xyQL3LehjHqkSrbk3kjxzJAw44EqPpCM6WAX9QcJR14DcSZanwMpDyzX1fmFARtJBHRb7TEyjFF5GEx",
  "key22": "4pV4LcXnNmSpWAGA2zBriQKic9kDFGx1aAc62bfLYqexna3WphYNdkcLMApcC7LzY6J7h2sLyhmE3hBpDMhKs7Q6",
  "key23": "EyFgPe2NPFv3iURuQR6jBF8HZnZNcVRpEVbjTkGcJeP4ftjrrpncME5xeBaf7rnENJ8Swt7JaSQA7aB8zmEy4Ck",
  "key24": "TpeMABMowBTta85i1aEsDtXkzPdeRLNwkSfXeGRSBmAovJRfpPhaX7igBjZnVLVZASNwzfdxNWora6WnbQP2QTj",
  "key25": "2bdvTKpWhfKTy5r2nQWeVYA7SJUBxRT6K96eosD8RUUhEhS5HNAfYExcVFMCYbCmvtHvhwqfEBLdAPV7yAQ7jf8C",
  "key26": "3VVcKfM5GAdjY9abYAALnaLXwHwTxpcpU1JS5T6NeuAhMb8QNnVZ1Ws2jPUYP94nRBFA1t9R74qEPS2JawJNgFaK",
  "key27": "56Vi8okGfTh9uudNgr5XvoBbHpePSZUdjfSDNrhi5sAyg9qJpDCR7M4yJCyrxPj6jFLdiKL6Z8yhgmdS7W8Q7wgp",
  "key28": "2psjGNSQe4huVgAHjxjS8LHAN5XkPfskKKpmBgJiuzmH7YyG7ShWmgtbo8g8jY9QTeHpjxfuRxTwAoMyCZfQapU1",
  "key29": "4K9jAojKjkejNajcdCJego63DQx9szA3j1Vxw8zetaZ9BpB2S9NC3Rjqa6JEz4LsTVcCWhMKMuM15URWi8YHcpi",
  "key30": "3pZRsn6XUJ7F9AzdbtEKWpwkcqSo5fU4KyNLVBE4pKvTbbp6vFJwJabEL7nRKtWZmCj8T6jLrWqaoDocBkyzt48t",
  "key31": "32ZZxpHdx7ANss5puv7TXARUCXvsQmymfG2Wtv3MkkyemeUZWo3oteNX49YM7JRCS4u3frX9r1iQEy37scqwYoRK",
  "key32": "MYmy6wiQwL3xTXDpioAgSyFQ3oEfXGvgmk48gWyEKfJcTkQ4eGANdT3KzZa25jJYhzT6XESfYw7i7aGmwvJWQ2y",
  "key33": "65qScJ9dHc4aCKzGzXHr1N51M7uLZcRL64gE2yp12UaFrxovgiTdcA5yQGJchN266DG2iF2g2j19LXTDDFQpjq3p",
  "key34": "1WFq1Zd7WRQG2Jtx8G8VEcvd4aBetkDr33D16Da5FhuaMuyEXf4cFphHtUc8QweyswwtseV2ZhYR2TwroPdWcdj",
  "key35": "2SXLxfPirApbqpqG48reWQ4B3PhEWLvxd8XxFvqQwyKpAHdgPQp9fVeNcXK83N6gV7shVWdp7GscCpA8o6VnnAUc",
  "key36": "5RPsSKwVjY3nMNKr94UY2rSwVVc5eUsh7oa2vddzGRnro3xRFQjoP5181fotzC8UPT7acn2t1tyfWLBCvEiXqt9c",
  "key37": "28pWThbKhQs5rU8PoNAGZ9NPSiDSrG1UjDwdMf2BMeoXkS3FbpHEkoNCwMG62QxvtJKimCcb3yKbeRYfSqpovvgD",
  "key38": "3ZveXja6cn4RCuqrsktPwf4dwtwfD6Axb6vP4ufEKTz4gLvWjbf5A4hfYw6rYrcvMvBdbBRxdTRfKUgZXDRmj2UL",
  "key39": "571GnefEjv7mkNGKRAoBce2ygkuinhfN8bpdMhVwfySE1R2U3pRDkHeh6RiZ6YSRtQBkomLx3KW3yT7EhCnVcLWw",
  "key40": "2GYRREuRmGHTrirKuSXAHtKpa4RDsqnj6xL1zWwd1zPx4TAYAi1o83bGJ7HFTs8ypq9CVNdEDrBTfsW84TjcdYap"
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
