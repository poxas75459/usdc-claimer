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
    "DBm3d4TEfYTQ9uCEHq5EEv1axNUQW3eHJhM6oM25RKJyWEzNiAJhfZDhPA2TmErQH5JHgHV8K95u5h2XH8Coqgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7oSSHpmLbAtj1ReT5L1Sr7sPbhhH2qJd7LcMsbTuDEERR5qdDHNSv8hfbm88HvxmxtdpC1m7SVz7qd7Zt3PLgid",
  "key1": "5qMv6nhsorY1SrSN3M9aj4XqDFwztBVN6BJZZQA6S4a9diPyyBgzYxpT1SjRF2S1Vr2Aft1bUmZt7s6ojmmPny28",
  "key2": "5o2FjSWUKPV4v5aydjkEsMXMeTiVd72akCsSq43ciFB2iHFi4V1YxADF8zBi8w5pLd2vgVmrC1eUNTLt97u7tTKV",
  "key3": "2DiBGoBXnhPJYVgJAYMzePKNta3DpgE6WT8EMBgxWCzkSEDk8cg3jw1Phz2Ze1yyBNVG28Ug8ZU3w4FDqR9y5dVB",
  "key4": "5W7ELfZbTwhgKsEJCNhYkGMfaHSi2uLjsuiPPJkmkZDK2CADrvx2eqWBZ1oQExEREu7VwBKDh9pAB787iBQehEUm",
  "key5": "4pdBAZjGY7SD3L9FhPFd1ytT3ExeqLnC7Mvxbb9yGt3aCQtwfytCKHW4TDnktYEDvzMoowkF1AJ6DVx8Bxry1CGW",
  "key6": "39ZbsyR7ek6kccvrCtLQ5vza4fhqVYtCYJXVpvxSQfouihwaztyZZYzXzyBahsapoVCd7YycCMaTFfqdjLByzzTs",
  "key7": "4pqEFeiuMjBKm9AetuSCVqMZFhHk2ksuiMfixAbHm2mVUkGiybAYpofDhFHPi5Zp2cxZQFPvyutcz9AWH7MoJo1b",
  "key8": "3gw5WiiE8hsV6DKNCgZwZMoY2jwJBxg1Yz8PBttpaHZXAnKkJ1z3Kg7g6zRzK53SEg34smRDKeFpPTBMo6L2x39T",
  "key9": "4fRNwGFobbUNPD6djgmXgyy9bGNe1mV5tse2yjbo7sstQoQGs1sTaUCZKsoycKBJNAYuruZR5pdQoxArDGPRtb1S",
  "key10": "2Yur3yAdPBTP9xkBGmPtyt6Kaa78sjdVFpDsWYtqt7tZfm5jbEVQWjuFr5DmtSLvJLsrbHnvtBYyvnwiU3Vh6khr",
  "key11": "35YDvYX2H9pwpmoWM6qn6P7DKdfSNqq53mnfe6pACvXnmhB3n6P1xsS6UKnoxLAUkqUa3KfVxAQkjg3rg8LWTuxe",
  "key12": "GUdPa2kcCH9YPz1wXYZ3maD8dEjE9V2Qro21LHsvjLAi42pmYFEJXgvr1JU153DeQB2Sbnx1LZYitL8JRjWhfkN",
  "key13": "5hXW6UKTjeWDUkfRG5Gi2bd6zjJxCDyhHQZL1zpqBV9fYWzy1Acgbif48raUUS64jGbL1bR6TH8ienLxBnDurEUJ",
  "key14": "3HfELS7auDkxvMgukmxvVBV92HXTdBDDSSXQDR4HEDutzV3caZXZAYuMmy7Tdujo22tPdFMSc5YebigNHa3SCeFr",
  "key15": "ytgn3raT6y2b3LPaJ223sRTxx8HnbFzRKAPZu6n2vEhG7bNhCnjwCJAdDnJPt6GP9eZ5EtH2Nu9WXCpvMJJjNuQ",
  "key16": "3H1rRThHqHGJFieTp4hx6CydFCC6svpRAMd2w7Tj2Ace6BYT2RYVR4YfxH543DiWZYcF2xkoLkJfe43BpufWNfSq",
  "key17": "C2FNVeNyyLPow4isYc4PNhXzoZdTYB6ApjZZXn8bsX5qh8e91SdqrpBoa6BPhnFYjwEC7SufG7a28iYGEsHLWS7",
  "key18": "wyyjgvrL7Nrd7kk7pVaYmXUTNfrctNtL3NQfm8nu2RuyJtuYr7nBJr19XZ21hgxLf5rT5QvoXSV7WdEZAZCNP6L",
  "key19": "5pdtafDwZsxCDHiXb265NzVhrpixbBbN3cXSUgvLpcq1y4Yp8EzQvBNExHXo3h5ZxzSMdRK1pVRYxVYmABN9VPmo",
  "key20": "f8VBf7cyUxCzG8bpnsxS6Y7AmqYUGfNCTYm8pz5TJwC7zrHm35ZmPnhRGKqCLSfbF7LCuSx6fwAkJKVrpaMRH27",
  "key21": "4LrrBDD9P3KCaYCwbAmRZ1wQecdbF2z99i98bfpNhbGmhUVU44vTkU7Rgxg1ZRv7H4HBUD6Bh6XJF4mXnupWttNB",
  "key22": "4Z1LqyRithFgBzbAR5fGon5EnwGJJKmbpzVW7T3NtPxfQKtqvS9XNQ4ppsxuo9NcRpL3JC5uzi4zu7Hbt24p9Szn",
  "key23": "3d92orpNRRf3uqEs5shVRpY1bDR5izhsL7R8qQJ4RHFt9Rg4HTUeXYUwyFb57cRdidR2qbA5LJy1jgbJfEG9C3x2",
  "key24": "59YFKWGLVDB4xDuBKMJqEPVuAxNt6EkVJDoscBcQfQfBM4jUSVoKVFmoMddtuoY2twjuha9MUhmC3tfAEmUp1ypd",
  "key25": "4wMWzjT9fEHv5Y88Th3YYQaCfUZqEGPVoMwkNhzjSG1Rsi41GinDBuu61EH6HR6uso1rjKoW2sreTVq1ysDUJ8SD",
  "key26": "3ovbcMAfCZeHuhCUoxdvoEQb7YoNDJyePUxxPFTLNiLNUz9JN24UvsuRSC6fTFWu4KDHrc9a4zrTptqpqLiRxmtq",
  "key27": "3rjKs52PkEFUzm7JL8yHWvwqaeiipPsFhfE375ZiPov2WFjJChABCVUpmtZS9hTF8zcb3DA2AiFJR38rmXMgymkT",
  "key28": "48Vjs7ebE6nQhpd87LvyNwhuCbW2WkynaqhoBJjdvQcSVcZt77Uz2phjxFVN45WeAAJiuyqNEuN4oipcEMEtMbaN",
  "key29": "4w7egkUbVp8h4bhu4GZ88A785JnBmszujicd2ZxSwrSKAj8AMaxCtybZsvVuNpMYPV8CTL3uQNYPu1hETEe3Cr1o",
  "key30": "225SVJi5E8unEZ8H5PXEoMjm2EEdEPbNQLv7LxBb92VB9x5nm2HFWkUxCe5SgYXWCuX5UZhZ5MFXNoGNXdm78V2m",
  "key31": "RqD2wiuiPpE9BRfYBsJbeLaA36EySi5aqLQnRirU7wuQk4x1Athrmuv3yymPgFcnFbMJFhErC6VWj3ceZs5V2tK",
  "key32": "5JuDLBGhkuEhFXZ3HWapgTTndHhbW9yTFzS91ahZ67WFq135jcY4XpzgAi2MYbi4mWCiLUBkR9Gt3D9QAHtr11UX",
  "key33": "3M6fUMjVBZYmSaoZQTsLiejFefTEhuhQTc4sLUQW1NHdgUr76yxiitbF3zH9MfgDWBbW8vHwQFHWFC5JGKNVC3YC",
  "key34": "38WyxqgiUQxCCYr3UZ3ZC39HrvPLc1kkDzF1rWdaAEwUFBh8K7G8uThP58E8gd2CdyyzS3ydS3AeqACEkTLU99r3",
  "key35": "3bwCMG27jqoqTsC5DnhyB5YpqX7kQ6ghPUgEETKkWNZQrxF6QHj2AdmSnN597HZRCjh5TbvR8mNX24cK6XdadETr",
  "key36": "2XhuxQYfYhjNQqZoBYuoYrnePfCASEQeAs6VsaokrDvTG8ivxTYkdE21ez7hmhYtJrKVaLSpMFVYgsPrWs2NkkvP",
  "key37": "3qJdXwgFVV7kQsxq2wMn3EcPQfxqEAGsRLcRKro6mKAHpVUb22FEhYwfEcu1kTE9ap8toRh1Tvit1uHaNnCSkVnr",
  "key38": "2fYrVE4kjfueBu3iAkT4nun1CM5vbx3DxES8eB7rRcsGHZiSW2X5G2jCYcb52b4CCHn3zNxex8eMUqq2UQpX1zYi",
  "key39": "4VmyRFvPUhuSnZ69xTB4VoWYD9z9DEqU9XpsGe7HMmE269BJWVceT1Mddk7VGNPMpMELnD2ci6FTLhPo2z5RptUZ",
  "key40": "398FXs1QK3P2cEWupHQkdSj4PGbMyofNPusZyhWgFDG7otxqZt1oPbEzUCHcuLrCM5KF7TxuY1mpp4GMDdTyhwZF",
  "key41": "5gJHmKJvUzpCxYfNEeeUbg5xf49NhXzAjmkWK57yPkTYP588zzVu8qvXqgw1TmXHtHEvxGeCpg7FQAvac3J85zds",
  "key42": "3iRuukdBD5U7ZN1HkF5qeHC1ipYnNXQEBZetWnhMyRa4T2F359PA25xw5Gm1iQ1s1oomqWDgwdUL4kv1vKtxyWdU",
  "key43": "2NhqpeGZhtUf3g7YbPrB58RGy96B1Ntifo4TcqwfnQhZWCHSuZ2Nkhudpdk7R3pHBtjE2VdDSoMHHeezKhctFjFR",
  "key44": "5YLAQAfSbpsYtU9hUUiYdqu1eGG4NraKTQ5nkM97o2da6JaCzQaXJh5vjYfEP2Dnqdbp2UjRhGxePoyFecaQbJni",
  "key45": "2z86ebQCYfQiokv5UxQf6GT6RwrgkoTpjHMxcArumcG1cMmNiKgohxbmnwC85RPuvaaGwovtuQeTVV552t7U5cAL"
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
