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
    "5UkoGC2udeHDdwfJyZnpubPRzLpfk4WqjTZSHCsJEgYXQDvJeDb82WDBBYHCG32rPSAXLhCS4rLkoYz4rWjkPUTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HPB7cb58pFUo6ajEjcfnMVu6xSYVUHeNhQJsk4Y7fuq5fdbiipfxdAusnBPb12m6RPRqV38rt5aGiaMYrDdm7bp",
  "key1": "2QFwcpmsvJjDec2b59ehmPJFnYCUPbThAqDAiVS9BZYmzwWoamTf2uYHbX9uKyN2ohT5BbNEpYdRLVMckirh1gnZ",
  "key2": "zvsKsEGZVNFo2Di5ezLXfb4RzJpKayZG9qboSVBedjhD8FArCpAiYrKwPpLYZwsEy3x9fWMz2fdHkS3ToHodRQ8",
  "key3": "2ALcuyeT6Dx429GFW2gJXHrmJoRooZwxcJGAStbkzC2K7ucXWuZircSXp8yEs4zQV1rNcB4qE4oHnk2x7ionC959",
  "key4": "2VChaZuqLx43jxGqJ5ZbSuDeWtunUSSJqdzQ52BV11TrL5wEBw79vjQfKcdR5M45uTYsEuebTERzCMazY9ENcmfX",
  "key5": "2H11MvNirCNn9XX8VA4iAYiYXsepztjKHmzrU3WSSbY4QhKbQDp7erCWv35Sh5BXywmoGy633oZySKaKxmbidbgM",
  "key6": "2hsbKtPVGc5WSyj3wkq1LSdEJm3yj4Zm5Hsu7GncZyBRiM3W3pRX6NmTB4GW5qt7E1c92EjjJ17b9NWA4SnscPSK",
  "key7": "2Zjs2Lm1g22LCVQY824xsJJxbzeEMQE9fA1sW8eZGCnVNnQvC8KozQL6rBCPQd1op5VN8AVTStq7JbRfLabSWN4n",
  "key8": "2DbBQadANeecCeidK1LdHi9cWMWL7pcWiJUNW5gXGFZ9Y75JGXGUkTRrqPcpNhS2Me6KxbVxqAoBPVA4QvqSaM1X",
  "key9": "5aEP5ykhFrvBhbeTdYU6FPfaD3MJgZCMS2uvs4pMUtXibY53PGtupjGv4M5KBu7aTuY71xixhEUxAAtGGvYaDdq6",
  "key10": "4s3UEUkZgVNMBwr5k5z2t4p2Ge7obb9YzptSvB23tKQ2zGYmf59uCVsF1URD3R9YeoRgDAHJEEj7VNpGn2pj7Cwd",
  "key11": "3jqwPkg8xGsnGJVeHudMkQ7akwJBhDGQAjaxoRck8QA9cssoPLywvtQCSsyC3mWHDabYfUJQcHzkk84gVSLHA5tH",
  "key12": "5NPEhxPsc1wHcJHucQCYaVuGdWvXLYw2zCmGqTyhmzNnNmLp6tdXFcqFkDzujZKN6LDPkbp5kuU2uoyShcKVtizi",
  "key13": "3s7jGVxAvbQYCz54w7cDsEX1z5ava8qrmmRwdUqVS8N4XWv3HP2WVuDkx9igxUMfJjHhUGPNfNT9HAd2eXtoUyYv",
  "key14": "4L9D5Ap862DwQv7vx1gQvvTT37W9roNdGqaeup6i8XEQXgGSTyAmcuijpaxdEnKBTctZ9YFvjj6WrsJCzZ62avnT",
  "key15": "4k3TEsTTdvmyPfRNeiKa8SU7Q2Zh89xUo3kanu3bNUK4oqjiY7ZtBaMJFGnsPXV1zbu8tgj8qnUbZyQGkss4Senv",
  "key16": "5rPv6BwFBkgHVsNE7fP7a7kwo5uMLbJcr1x5xR4Z5WTP5xgxuYTNKAQY7ynAzfjtqhg9EmFDtcwEeMkhybLndoVG",
  "key17": "2kFRrB1EPtUEoyn76do2Pous9p1fvsNTHpHdwXFFhxvVtT6fjKQuVK1Pb5RUZ3PRT3V5by4zxc4qJXxw2oCPJ5tz",
  "key18": "4C54u9E43pGgmb4nanBPrik8dg5xe9P2hMjYMB4qJWfEJzdvAMjo1fKFBCSMiCAyx9ptsPpWF6NyJbmBtvXJYqxf",
  "key19": "5SdM9idcg7LQVjzvuJFexJdarRcHsaucuiG5SxqHxWCvZ5rxtUDj6PoFB47x6yjKDbmrh8zZayhyGtLHNU7VHtHY",
  "key20": "2vUwHBe5jmJvXYeqZqLvCkYWjwsJ3PBBp3kSGrUsJqWewKqKe6W2xufwQTkFcMvzEM2gv7XzxtCCtV1LbNBKUbvp",
  "key21": "4ERv2bHBennu3De1Qp2m53i34Y2xfiNCRYPvV27tX6T6GYYQyiTXiGxgxT24mH6qK82NUFS8qZ46C3GEoNn2wZvE",
  "key22": "4Mfz34obCPPoh3EcQyBD73ZBoNfyhq7HLXjJqAL2RytwrGhE1FbeG7ue921cq2qWbAqfdnFy88cpZLUQCyQ4eS5q",
  "key23": "4Vur26YtPnLtFVb2MUbMtRvy6NRn89EdTcouAdWbv1GNQUL5paUY6N7rR7hozeNJJNZFExKHXKnYzWL7o3NQBUuH",
  "key24": "5TH3YU7LcvzKZyQFWNcZC3SQJ6TRibtC6iA8znqC2ooyx5VAvkwnnxZa2qCMMUv9i9hc6XZ1PXWQb7KsxaHvHLjb",
  "key25": "5QxKgBEW9PFjkgb6v8rGhwgeyPSxrzPWBqp9gnNan98h5YCmZiugTx9qMpcrYaucMuKuEcq1QZMz3XVEC8YMcxEi",
  "key26": "CDeQwSXvZy186p7jDL1MzFsr76itV28ES6Vrq3WfpxW6dkWmSwNpEXmw6d44cEUBo9QqcXCBtQecrbCZBC1FCQz",
  "key27": "4cw168foN5ttGzmUSuvCRRuTWWnNu2913dCAgFVH1czW1CZ9VWTFiqURyD2MzkPGsq8YNQrdsxS7n5UFuWLSWrp8",
  "key28": "85o8rKmxkqcpQgcSsM8vpzEv6wQZDXm22oTnvn8kSAyeDjAcN16fkqGFq8MFRmkCBRnyq9PKf4pNfEmeF9kba3i",
  "key29": "DJuTngF9EU3pdPqcRa2XC4mB9qEQDGn1cLiKPqa5Vr9crfj5vn8nEV1mw9XMsg4mxuqYxu4imU5CcoA4MCycSGj",
  "key30": "VCmqpFHvEMn6FZf9bmjquBZfBrHEtSkr8wu3JzwAjuXFELygCMNoBGGs8NXCS7ukMWnXhpXiT6bNTu4nMUWPEFf",
  "key31": "3DyoFY7a2PMUoQcKXMoXmQYxdcMVDcUmJLTtjmskpHt7n5GGY32oPFNNmD9ZA7zmRavpe8c9nHc3mnNwkwqoD1UA",
  "key32": "53zVVrm2FJk2SSXChPeLWk6Ca4V9MSVQmSM7WMsyefJQGKDxnmGsxf4YGHPULmV4D42YsccpVhwxza9ZDeK2aAmm",
  "key33": "38pzY8vxhKk3taBdvRc2YgHZKj5JcCXkLYSGcGgnzb5xNEnXqshdvEy8JecYWffzUNvk853gLuHHfkE8RcCCXDB3",
  "key34": "2LKzQTbtR9nGnYRVf1cyi8WqVdpyXPeFNFzBS7tJE6yCppaYWb4UgefpBaGz2pJH8HG6Ywbw6yjDWL4VcjJssSUg",
  "key35": "5GcBXE346HBurf7q6YqDMjiSDZUYNqFcbUPMkYu591mHrkLSajCEq9Qg7XNaYKL7Bq3xV8Uwmbs2YAimmYCF7anZ",
  "key36": "34DtVrw7GLZEBZauYVJnKqqBGtbzqWeYXzjgEX7hv3XrD7NtodNxLytJLLKFTouFnaiY9tE28HFLhqC5zEJhq7Ze",
  "key37": "2RHJCk5kAhDvJ1KQpoWrPmYt7EG3nMnpuLn9E5FRYw6oNvULkH5u3K5FiEsmcPn61W4SC9cXHvj1eefGPPY4WWhr",
  "key38": "2pc65QF4Bic18LJzdhziE6Dxe76Eua5TaXDf3sq2BbTAUayzRhPHGpinWAe8Vr3SoNeHCug5umWidertteiLRBHs",
  "key39": "2XrD2WWUPf1J8eCvnTkpHDxGGMjKJR1xgtQ8W1ub5r6JEC5ULpvBA2zAUeU2d7VXYUVYpN8WVbWtW4UPabfhALxd",
  "key40": "64pKkriviK1AqzEBmacXZtehUkB4DGgBDeZPyqq9V9RKgqxmDYWBpaBXdCBUhnbekMmmFNg9Wi2gzRQ9LT9VyGmH",
  "key41": "5ytEokPwVtNyM1ip6ibViAYXa2m4DB7M4Xf2N2fJuATuNgehdkn3WmHtd54C81JoB9kmC5p1bjM1UvmVBhMvu8sp",
  "key42": "4funKVYi4K5rykRWS7q8sszt3f4Scz8QdfABoSU6ouokFoQto1bNjtpckS13taySPv3MHoBt63DjegHFx17JDoPc",
  "key43": "2Eccavggw6C8dTFpHEY8Q4w1eDKmL4VFB6RQknDigWAJGdnFj5Wb59Fc3feqkoJoDBsumcYmSEUt68oh65xCcioU",
  "key44": "4F4nsVmNeJWJDTbx4dv6S5zRwnQQEAsvvUm9Lh3u3XKqtwtfe1h4dHUzPaqT8FwjB6xsuLMEZoXTM6N3L1Vwo6Gc",
  "key45": "4xeMUKLksX2vrkLmzvm8QC1W8c31VjdkieZeNnFpX2Y9ENMNVnAwqcdyLtpUtH6ovNFUH9sy7XSeskp1a7w7foti",
  "key46": "29pNCBpToJjAGTgVR5vKF298qq6PDCaT3zrDGzb8yfCk2HcRmqKgxzQ2sWz8hpL1GBULNJzEQdZ84deWiaLeZvPv",
  "key47": "32yaThUVfipkcsr5A3vbqp6Kyf7iWR7TryPnzH7CBuqTteVZtbF4fSwhAZCvio6rrJDLAUSQG1eq6nqsjGEqdySo",
  "key48": "614uzu7997HCvNkxg5pjGLkucjrpY62sBes5SDJgbSi79cD7HgUR3jKpuP2VL4L2Ny81Ui2v8XaZjmkBpAopFdms",
  "key49": "5KmETYonAj4ToH1FyELPviWXoqaxh9mnQterQ45BXDkhWxLeLMbZ7GGhYwbKCGa4dcmJtrUdUU8rkmewShUhZ87K"
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
