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
    "4kXZrnT5zqiLUsAR1CBqUqTEvKWpfrk8gQM7eQqZctnq7bywKpqut1QivF9isLRdau5b16CeLx9iVtEuTtodjfJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Uj5sFUAVYNhp154iFJD2AdV72y3239Bk8zeTUVPMwu7goYyRWUtJbRukG3FRVcAtWijgtdu9J8MXs5uakUjQmb5",
  "key1": "3vJTiwpzqvn34JtELzE8nyVBEqMstPYdzU1N85G69Ry1HFwGPmD3z6CycrcnfjJw3s3Sgk2tUdwNWxaoNzQDykfk",
  "key2": "34Akg8Pki9mdmJjR8gWCRFXDPdmEE7atX3mJcyvgzj6Cs7Gr2bzmcu299eeS4sJuBdrV7YtAgMaeBDC6Tvjoan7x",
  "key3": "d4HzdkeHqXYEwe27WdmdmvQgD1RsA23JKfzkfn8Lum3tCYNaEfbwHotuc1MSrNrTofBKc5w8jF4e6HGYcRe7CCo",
  "key4": "3gJUDrzi41ZjjFFrtcbymyD9MpDXPfNM3jzkMcAAaiv9xkvFVysacApxMcMFdfbD9WqgB5GUoySRDoTe9vCb8z1J",
  "key5": "4sNsWJx2VNdEY4sNt2qJA1Tm4RLS1UzMJhHHCoqqwS3nVSabWs7yVgdwmZdts6n7jhrqVqPXfGSxNaeb93GAcz88",
  "key6": "237PWmp48NQXMMidT3XVxSZR1tSf9PykxGshmz9KpU7xujW7ecufjecfZsxHTimQYTyhXzKtRCybqyCYidEUz3Em",
  "key7": "2pCnVVmXnmhbPseJJLr5oaB7cyxCL4VTnDD5tm6pwjzCn8sNzTHSY3dSoyRegBXBwDhoRWrsZWqiAs8fdQXwXLcL",
  "key8": "4wdTpTBhmGftji6RA2wuzAieCzTGXtjH2aXSssKNuVAwTBzdMVYLGbRfv1ZVBDcJAvi2guF2JmuG8a5ACwuBMPUm",
  "key9": "3Cpeggr2ct72dtNYjzRZvBKsBw2KXuhb6kwkkGWipw4H9d3hBDu1mNnPzU4YbRJQfFgwfcwZn1rvbBT3mFEmrnz3",
  "key10": "3ayidQfUUsmVezyfJkTx4Kf3QHwTi16eaa23svdyCKbhFysovt2U7f8zkcsXWVuxcwTUBitF9tiFnuuUYztD6xq8",
  "key11": "4avo1ad85rPh8xQq2G6eBD3zFQgtsNQz83TZrA4PBn4Jns7AuxS31EwQrTohsTq3aKueUNgNHG5iwebCr8bzqJ4g",
  "key12": "CF8oW8Ybb9CTxCAwwDHRBQrZsUMzNi5ofnW4Nnaqip6aTE5KMHYpHtXysvjNQ6nmZY4YZPkxmddXUkR9nxQsBXB",
  "key13": "5AAPyxiH9RH1wpxxYrFr6MRMxJQ71FUogPcnLSxUXEgwacAP7UgZH6Wrshq7EKPkAf41dF5QTQtts4a4MpUDjXF3",
  "key14": "3jRTm93S1JkuMVd9TWxFApaqGvdxCeax3xNrgfbwGq3ZECCp95nVF8EiDr4JSFZZwYEFgsW3X4fPJBLexB4Rq3UY",
  "key15": "5ZZEqnoapnWxGtgspsLPJmbwmUEWUqpjSdBRRgu7uejuBsbb4cepBj3fJyinFarvMgpuaaZs9aZGvEaGm4sYgxkY",
  "key16": "5SRExWC2drVu8UASjRUPiHrqbMDqFEjYwdxUVBD4gnDmCfyPejeXXvZLBwvaUu5ijzs5FyMpsAgPMwgfBeLBkXwX",
  "key17": "2kGFEC4HugVhqLHqaYEusCbzkE744xWykdGGNL8WYYc8MFvA4G5xAXkKJ42aUdAnrdt8AFo6QmR1XK176QNni2dd",
  "key18": "5qFwLsAF3P9xfjYPWGWfee74tcZueNMbFCz7aDc1DEw6z2degWA5UHGkkuzU4XAGZfnHLLXZDMwoH5Gn3hKJhXn4",
  "key19": "5vnBaBmDrbRQuNMjE18k8isx5FeiJey1ytMuf8wkRryeQukKqaLWVhuY4hiHLmnCN2WhRDMGebWqU4zdx5aYqDAN",
  "key20": "23mWqhAiJ7wiZWiipyhD2s8ar62qPgMc7EtM39vUmmBx44eb6dJJD87Q9y8MiH2daf5GpqPZAH9b8LUHDQhZyRXE",
  "key21": "4aqUkZy2SkTs8muSaFEELDDfSevqcswbQvTWAAQPYD2LPTF45rU7eNP9gD4pXunZGZaMqXTJL1zVhfkmVLtiYZnT",
  "key22": "heLWJN13GTvEZgsaBsdNUU8q1RumCnAH2Wa9wV8dztaDMmgnd17ANAZ6Hc5HDwv69rEkP9UXUoP4Q1EukCHGuaP",
  "key23": "4tPAUug7oMSiK5qUE5HGPEEDjRVL1RvM61WaYDmajxscYAsoQHicScoBidourfHUMPJcoJieKLMGHM9z5pqsCSmL",
  "key24": "2NjLvCYXa73hLku9LVH5EdLEPjYaoiY944BVaLmnwjHcGtHXc2kRHLwoVXjU94hrjSTw3EFaYg5M7AMUza1jtTJ6",
  "key25": "5GzTqqbpCBH4UCHo4PonchDC8gg36FqYPDVdonHPXEmgu5LQxUoH1fcEkfPYhCgmpn58Xd2GmkDdxcL1TEWUiB5X",
  "key26": "56MPP8Kuus6v1J5c8kVKkfhVv9Ht9o8Th8HzWeXDeE5rE1soHZXhVCVLYwq8BPCAiNDg1XNKobhMp62bsPYm7DtZ",
  "key27": "2UxYgbBggxJwchYB6qwXHbhXBEcv6K3L2ybicwBniZtHRfTeWq6pxpB2GvMz7Emk4EHxFX4ftuqzBxF1Vq8YuNDd",
  "key28": "5jLSQBKXYE4PkBi5dS7fsLZAMsid2GvVj3prRcnCPZQuD1CdXFn8gYCTGDpLxwofXQCZu4Q6ehXxZ6cYHvTM2kSv",
  "key29": "37xY9MvdFVb1ArKR8MRQiv4UAqvmTAKw5AKdvHwht4Pxu5usRg14ngWfjCEKRLaPQmypzo2nCvpaXtdpy1Zut77q",
  "key30": "3ywUPsSZ7vpsi5Feaez4cdiTHPX8tL1hxhodcTRGnub7oauz9ovZAkmRQwDULdPRaLBtbfs4ThEKeu2VsksnKAbY",
  "key31": "3vMceGZsX2EZHhynx6Cpp6UMbF2c4egfWBUCJ784FDta3LE3XKD3gQLfuXnzisRSML4NQtB4gaVvbQPjymdE31nZ",
  "key32": "3PsSytivC7opz3bToKSaZjMKwGQpGnm6AcsrWhSPwPuB8kqbudNewLJxBFqZxf2qxeb1dtHvKLWHBtuULUfeCVL6",
  "key33": "64XBsxpKjNopFbV6gbiTNXLTxM8TDNeqqg5mZxGkZLXCDNm7hVmU5mK5evbWiyivc31uv8E2uXuLjMwgxAnLrUkd",
  "key34": "55zJ3avaCKNogkMZZf2JNDSFx9cHjU1zgabCBuKb9jxpGFF4X3mZdQ1ywLbEhjfHeoc7amUNNtwDEu8iyfm8a4bf",
  "key35": "388GqC4jp7yYfTMFeP3ihYC8ySaw9aboy3kAHPyPscpXq3KK2UhNDi2A9apC8fQeEjMCkjqHhzMsHT2shT6t8BAM",
  "key36": "4XNspF7pC612YnsXq3YJArPS3LuWETEcCno4dN9gyhQskqrffBft2joE2jVKpkyDrCpBhkDQ6CEF1cp2a5bwDEN1",
  "key37": "3hQg5mHUsdoXAQwAhjAYymaiw2VEBEX7Y1G8KsZ9f9sW97WKyf8bjsWSZY5XPcsHRkVKauDBXFZdRyLRHqV9iC8n",
  "key38": "2x57boQCSar9xQ1zFuuudoCaxJgiSyrztUUifm8WbsThLBRBhz8wunZxWT7kj4gaF9VC2evyakoe2v2rw5k4e8C8",
  "key39": "4StDw4XpCYqCTQZwXNWcN9FJ1o48Q3SL15WCLWKE7qHHhwhTyY5aLmVJbvVeed5cYXfpNiECngJEs5gSgsLt46TV",
  "key40": "PaYx5zR5VBVnvNet9BvVzuBwJPtVpYpGxj9aioMCEvFPE1K7vWBAeG8Lh4bsxpHSJwzyJJY14of1czwHmSDicv6",
  "key41": "56TkPm1YMDvwrKV67yvYXUQ1RzsDtfC8RY5TdVC4eK5TEud7hffAuUBVVKug4xm9aHBBe5xQxNRay6zLABJF1jM2"
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
