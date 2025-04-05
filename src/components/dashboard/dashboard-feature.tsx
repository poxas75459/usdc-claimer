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
    "5jDyJ8qDXBDGvg8NeL1iEPHJp4Ar4QnBpcze8exgyFTxXG8MLWRgSicWJ4p9ANt9BS9zFRfwLAUvXW2ELrmyjeMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MjczehPmtgYxij4xFWqjdrzGCELi91znUotnRQca5o2o5gCUam7MtZR5F89oHQ61JW8ToficzisbZYnKmVAZ27P",
  "key1": "v6Lg7fRtME9Kcoh6jpzNvfhnvry6MMfdV3c9WysQAcJbxDgQzcEn4Q85zB2vHtexcwwVqJodDKtC66R9mnJYLwX",
  "key2": "5cNnNhm7d4LyiQ4xQaTbry4HCsGomqiDYwnBQoFxJL6Uc1dATq2NwVJjfy4pQ1m4VL8BDy48WF5HZFMpvxQdJMMU",
  "key3": "3TRaMk5x37pwrVDCAMshBMVxMGTuRr6Bt7vSNZN6nbqgK6nobVMusCfVXJ5KH1iqFeMrTFtMebWJM8Yxf6mhgoWx",
  "key4": "RxACGM3bnojxwKvLYzRqQQ35keRnkJQ6oQqUfXUBY5Xy6NCoGrb3ZgsFbeXWsMt5hV8D3Jtzr67wTwmhLzvPB4M",
  "key5": "495uBgmTBLsr2ARF8DtesdLAhUr2jXGPqBBhnjgx2bAF82ocntzEA9S11EUT1iRE3g2148MvmTLQjd4jneGkc3Tf",
  "key6": "2TDPsyQq6XdGyy6oS5ok2VqVHpnJqPwFnE7Aa3m8RpkNaXSt3T7ZeGVbdmVYNSFna9LFuZCam76cb895ZJbgYumf",
  "key7": "61zHT9dqSBXjAsn8uAcKZqYBYuBPQXn59rgJN9gRYU4qeKk7iZ2FDLin5g5mm5xULUAioyxccE2D4urKrq62Mojo",
  "key8": "2qAuRrFQik3cTHLMfWbUDGYLFDFHC6G7ST6TYJ3pbtjpmE8fTAbnGnAEsnUBNnTqtbsBwVNALv51JTrfaq6eQvUV",
  "key9": "2AhHs63oF7ZFCMYgWCFhVuJTA5HrhkHupt9YZkSYU3U4CHMpD7y5YUj45fLaMkUedVxUdHccTwwSHqiCX39G14xf",
  "key10": "34ACR4bBqEEuzTw9QHgj2X935dLCmx54kV4yArG6ynyZe7apSFpAX195ZJCMcoiV1BW23KTjafJv1vDz7RFVMdSs",
  "key11": "5a3N7Qp3aAq8r18CQWUUzghJqCeix3yXvNyaWZBM1MUv6vzJNWPpzcp7o24SPn2Ehdiy2BdmSQiszV93xNTkTg5N",
  "key12": "4w9ad2f2qEbeR84V4PWDDqhoBpmry8Q7YocmfRQoNUYzob7VRARfcPHd3GdqWYcvEdaFgAxB1NRGLryj5iUSyDp6",
  "key13": "Tt8EmwobUyTVxUvP7vvvVTBmnEKRxCVp7rkdVELja6jr6Bn7Y6ki5idDhe6JbCQe6oZwLDCy6EL6r2eQBvKYvZo",
  "key14": "2fEy3T4k7KsEbocVAi1cpAy9jyNpHce4UMu5NsQ14TDE94iEMeAUFvbjvCbX73ZRESdzi1m62smJTCAMoBr6d9Sr",
  "key15": "2HBL2eH4FMPK5D5TXEWoowWYavP5fzXXk59vX3MJDovJsvmJ4Yq4BRv1WrZBemSFNUroVgFgbJ2QiAzLpG2XNrJT",
  "key16": "3b9G7ZcQUDfXqMvYfDL1tmKkRD5n64edd1E9w2GC6j6Xk2ET1FHMyVMH6MnpqYEH2KsPXmFvGx6rnEdigMT3ZNBv",
  "key17": "3NQy5XHpDwhNHzyVwPWQ1Nwf4bAqFbe61RgCmMwwYgAhagTFgXsJHkaiVU6q3UGfPCxDZq6Wkec7Zx1JSrKf559R",
  "key18": "3ouPGF1JkvkheQkVPELiXQmNSaymG61zEtneTGSsTNTt8KNAYKQUG1Cv98xma58J6gt6MMX2KKe5sLozb8Yhm4w1",
  "key19": "4TnwbESXHi4kFsF7EFxYqEJ8CPP8i7QDtfQz2cfMGM6t85HHQdm25s26rZTr8w6JLUrQS3RK1atbdXfWUjfPTyHa",
  "key20": "4bRKo7UeoyWBX5tYzN6q6kW8nXy1kgZnfuccHjKtvBbd5V2Z2Rw5ivnpNhAgkWYde7PukatvsfDh4PZsXVoDkpc9",
  "key21": "2RTaHfS9E6MQ8HvP8wZDMBRmN5P33cucYPMnJ7NRMmKSy5smVta3zM5w5LwFRtCoBDP7Fy4r7BrmTqsHwWLJtH3y",
  "key22": "4bxzBqWsoRz4UqMrRUYd1HxEd3QVhVizX41LxfbWo7ettPAoVCs1fDx9N63j4V5NYybbBRAjuBuuKrQD8DAU84us",
  "key23": "oj1wL3t91ntJ6cwxAN17spEqYH5QH5rXaQ2vCrH7CXBqM1BJsa8ADqWxQ9ApzBjH5kfVCrbR83wQhmkUchYpciV",
  "key24": "59uaZBHdph89szvyxnUdKFaU54bsiyqQU2B9t332uYq7ot3jU3Ej5st8Aiqtth1GGLB8TT7gsFduHfCtML2gMVLa",
  "key25": "4Y2LBzDfsvyKU8krFJ1H9gj1s7QLWRnwenoWUv8CLHCwzNYuxUF1vAqqbV7tJhWJkvq4zaM6DQePfZZRCnY2MMHW",
  "key26": "2BaTLGKhYDtwNMiVvBKTcrfQMjPKHiu1DWKdeNKnJdYN56ytmZRTCe3RwmbUnhnBxJPDJ7j1YjYFXtYHHWJ6wnm7",
  "key27": "5kQcg9ZgKtUiCZt8rLpSo69dU7CY9PsnCCDNwDqP8mW53nGtYTrvqxGYxokzogpV9nryGWuPDmAk7UtUwAYgi5bY",
  "key28": "5iPVeAWqusu97vySEZFn5nNzDMVBx1UGhVPFMtpLyaZZ1Bo4fwaCLkLh9E6QxCeVAEWgpxkjAuXWfvdL3dKsp6XX",
  "key29": "3LaqnPsm6HFM1ft9gpMZStJJExWAgAHsjborVY5NwfRLceGh37BMuRzdmPk2rjVh9H4yF4E5HpRiw4fgqsFavSPB",
  "key30": "R2Csv8Lz46WcFcFhxmorhfeniACGGNdCwdM3qjdSsCXRhZhuBRptXH2GYuft4mGL9NgMMhGbsrgbfF1PdSgX86F",
  "key31": "4PZdDbTVvSU6P9D6AnSGVvY1hxp29qUR9EqugR4XNkmx5rS7SKMdpNLBJvUt3M2XoWoY9DWMpSVvVbncRm8bscRD",
  "key32": "2KzGsPgAT3KZThLjmoBDfSDMTT91r3M5rSSEigmEPPm1dsmfLNBWGBA7p7mqRwj119TbRmC9KWdkGP1ngjvDguSg",
  "key33": "3sLJ8XcufGcYvQAVwZGQEv18otUuYhA6i4LBiX6EhV9AToQvnuZDnHwi4t4X8oVB2FvFmKNVuHKtKvmqxFcKfbYT",
  "key34": "55tLUrf9nnpjmqCP9otJCiNZaY6r4UUrx3ge7jsgq8ui1amMkFVhQ2BkCfjHgt9u55uMxZSQiYLQF9L6F6w1QnB",
  "key35": "4JhTWR5PGMhXBAwCViwEq5vS35FNd2eTtqohLHRnZzBpkYHENDKgmZx2ghpEzxb4rdzKz777f38KcTsJfFNpKWmd",
  "key36": "2DLCG9Nuo2k9FWhp9xpQnTWe32DVHtCV12bpUo69PwWKLGRZPDAy7QgVpZaG38KFVbugiHv3RYiM3QSZfQuLgjKC",
  "key37": "21kWLXwDskNCL2gjHYJp9Y1BLkTLyhjdphoaAwNXBkXH4HeBvEmLYD6r6bCRGJC1PBiWm9wgy2GBwESRFmQ4tuud",
  "key38": "4EVdMhtYqXNBnGFnBnTBGQQkrJLnpuYPa5pU3W5cY6se69AEoHGbUcZWY7GCyv2JZqC19jqbj7RoeR1979hWsWJ4"
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
