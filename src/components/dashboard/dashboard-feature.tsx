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
    "3cpmDq1ab3KZvbvoToppxpRwpYaXGJKKrGX4RJqPY96zwVRXV1bwA4LjU6zABk5gBEiMG6rgXVrG3jyAW9WdK6VD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EofR8YS45drcuHoNHUCHZdmPBt5r8nSvhixs7vffJUUFuFzyJ4tWvj6rCh5JnL4oa1PAUB9YFMdvvzeYnL4WnPS",
  "key1": "4H5KeTbC3dGNzPmQwfNZ4W2Nt52cAvcCvo2DQ6hjyTC71EEUfrbTFsTRTfQQc6K9gbHCaF5eHv3F23B7RbonZ9V6",
  "key2": "38gpnybzZGippUM4Zkjdo6srkcHwdkJxZaYCC8xQXQHGz1ERMi9oUUg8qcx59L9S8GJXbuL25ZDPeB5djvshnhs2",
  "key3": "4XMDutwdWAED1GN4wJz8QSgxXdtUhtjJ26FqxkHqosrEdDtbY7Eh1Kh6AYYZpmSfff4MwGgcqgDfq24Y5KLmzacL",
  "key4": "66rPA4ntahYp4gBZCAq6jwVTifPrQehRPA86npiRu3oDedU21Fr2q9LNntHp5KtgGzf4upjoM3TYdVzW3U63nN5z",
  "key5": "2QnoMY9f9dY6hp3MGpMCWK88SBadNdD5nJGc88b1kfYRg5PyeFqHSie5KFvBYxkfQZ49NhBu7sJboPfyoGWF14d3",
  "key6": "5zpPYTyuQrXB82v74FVEy9fRDQ2YRJhBHkNJnJjWznQX4fey1bLhiTkChiEsN35z2aXFwHf4NzJYbxGYoDtLg4a",
  "key7": "5V8bhmdbvNHB71BztWakvxFHhkxecSyegDG1LToX2qBnbJW3gxuDbAPcdpbt8wV1ps3Bo3Dx7npQVp4xsRGAQGfs",
  "key8": "4ZaD7u6A9Tdo8YvHNd1hALrDXedTNcLZJguBgBjAwJFiGQmibrmv579TPDixYPxfmREfEhX9H8aScDJFM169X2CQ",
  "key9": "3iKous37HwK29aaEWeR5ZAJ3mcEdQFhyArXgSnzTdVft5gPkamLHpRCJaKBaLTW3u6dGsneiKq1WSpbSNXfdSvvW",
  "key10": "535fuRQSiTZWqYTPnFTWYmRuc6vXdjnooBaT1x3fuoVhX1T2qF1t5hruqriyyJsLd6NkzWhpt9uZH3cc9T41QfYi",
  "key11": "2VnCzdKeXe2c9QiV2nSA2Me3tH2ctHWidCujoBhmyx2AqAkGXX9Q1RRJZCDpESUe8jEL7rjzhuRW3QaHf2ULXMnX",
  "key12": "28amXpDXkxvjuVyYe895e7GvpDF3tkFf4uRXSX54njVznKJRx9kRhwJACrUcGjd2gqW78QPSD7jckDHFt2hbH8di",
  "key13": "2HMzxjpacgudtXFGqrz3mEzcGHKEeeSbJSryeyBMVVabPjnyq1ssNeHsxPWJu1F4nkL7WFwMAiFvvWVhGYnR9FYV",
  "key14": "5TGznM9wy2YJY8FPrXjCwoujH2QpiBj5BR6mFkxZmKW3A621huC3VZriufkBdfHF7QCJCcCtHDorNaagxRyLKYSJ",
  "key15": "3tS4FunNNwjZGbj4bMyMuJnD828fWaJxxfTLhsf3Jq9KVs1Ub4cHiLj4BPiM7mNHNkfeqBj4LwXLTrmHdJWaVgAe",
  "key16": "2V72uNff8C1D8kt4MRLijWCVPHgPJenZo68ikuc2Wu2onB5MHFR1maHvKt8XaY6NnqxCR1RmowTscjkpxA31ANxt",
  "key17": "5wHontfWtdLvEi2CEH1cXd4M2tCWa2VurdGcSHvWjNNdxS5ikqwfmmsGGNp83cqxqPUV298L4DhXhWvSzbHbAVpG",
  "key18": "23XZYdPCgHFJhtDDMcz6cRqcDrXjmrDusKrSFAy9cZbxANJ4A6gutZY1LDoxUyZbpjkBjGxHd9AiHssaocr44PMf",
  "key19": "dqytcv9ugoTfDHD1SNqdKJSMqjdyY3jrsRh5vTXJMSp1J93NFj5nMsjavsW7QcRMPik99mLqhHnM3MbbJWddazD",
  "key20": "54RgsgqpTzhrNsoYYizXQyD1PZ5tDJ3A62LgkR2BNDC2C7E5WEEJANMNgBDwCW4PnDggAoMhN9JVCoybqEQyhdve",
  "key21": "3YL4W6tmKERBj6sw1PFFSgWcgQet75HppwQTfsfDd7Dw7fhfLX8r5YvVDK5eZ2EPpWaiSrYaMP7VecaQzgjQBy2E",
  "key22": "5K9vxXuUXBojkmFGEw72dAvrtHFtoZrgkuRCPJPbYcmUxD5Z64zxmGyHHFVHZpfPGnqX97WdJdt9BdnLYfUBDgw",
  "key23": "2QuSBwyqBGqkPCojh3fXe5s3xLWtDXTpZmy7omPsHojcLJQmAPB5oK8T5SCFzXp2YdeukFgqSCDsJgiEmQrHGVpf",
  "key24": "4dJbRhz2hGX3NZHznjHEmudyra2JERXAffxWfMsjtV31aaKvtkXQA6L7mkBPivry634zfkDupMQaUNN2v7jj1BDC",
  "key25": "Q2jcp52JXZhQFFk4zbkJMxZdJrPh5CsSee85Fhc3hD4kmQKX1dPVGKUtYoG88QmQ2RA9DxkAiGmNLqt8zCdutBF",
  "key26": "PdqpHRScXP5VpB5uaH9hq2ghDay8kT1cQop3mt6dLx47VtMrSfSuwer77NrqcHiNndUiLza63USPpDDwQsg9KNQ",
  "key27": "5UFSRayuh51A8uqGRPf3QkDoN41Lk4Vda2tmHnL5ijcx9JvYpGhrjvDrC8TtTMefX4NeYNi5MMkx2HrxbVfAPbWr",
  "key28": "CvNTLX7pJZSSZWXt9Y3skyVLSt1yzfXeYA9pMnBBUn1rsx1TQAZJAcyyLmSAPa9drgnDLiurmnQfHHjfKkMcGKb",
  "key29": "5HJjaxs9Yt4sAPXhpKY4yxM2vFcydqB54Vau46d8ay2RJqHmnFDU89sbkcTmatMjEVmLCo8S1cYFE7nrNgzEbrac",
  "key30": "2LYkVq6FD5J8bVWxLEt2M7GqCHTbwQ9ABntih13qX9owtzLsGT3G7RmgWs3XgNUqoCyYue8453vYMY2GJH3iBDDK",
  "key31": "3knZjqRNx4SvYfHEB8D2kZRyuyapVM5EbvyrfGy8LVSEgiAhVLNMRgXqsJqvdzSr2EMMLXpth82BquFuVba9JF3s",
  "key32": "TC3xR2GkjAeXSVZ4sAtyJmsuQSqzgMQLzADa3WNwdbumjTPYewKKE89bXyiGeChpSfeWzSpZAJ4SmcJcHiAruZ5"
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
