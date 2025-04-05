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
    "3o7uyQsBFJmnGX8wDM3h22HS8pXWQ2kievPeoegm2UUWAhznEmQKv2mHYToZpFNimeY5rXdEX1YxfqwSsF35bbtq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gAEbHBJNceY2p9Ae8chmK1eWGHhZBWEr9N2aqKsiLySb2j16FRzDK4GCYzG5binQaevg5jQHUe2LcWJBYtRggGo",
  "key1": "C1x5Qe7w6gdNwb2qojgfgmaTQpXBzJbsS5jy3F1KdRFMLLx7sqvkV1M2eheVyKCyuQaEa1c9Fa6jjHmCbC6kNZ2",
  "key2": "3UmHM9NRX75tGryY1J3BhrF18jp5TFwdcYme4MFoxU8AW95Ck2Yo9jKamxpxsZWRXdTi7Tq1TybRdFaz1enDVMKu",
  "key3": "3zijcysJtVxN1s8HJxb9u66gB5fiP7qg1XBRhX1FMmt7PtoGriEGz5FJXxDFm9xMP1CFvkg869oozzXjh52K3591",
  "key4": "66JomgjiVg4cNY3sBpQdFibentPN849KvbezT9kz8AGpxUcxJDNb5XHj6M4XJwPmbMAsqSWAEgsCg25KCtmPWTdT",
  "key5": "cWmwufruworPZMfMgkjHaSvV35V9ahYT3Rko3hmWbEE51wh9gBqZJHWCt6CAfEoKGqx2e4WhE1rHwUr9uxhCGHF",
  "key6": "4tKGcc8EqAymvuPvhrXwTj5XdrNE8N3Ae6FX3anPMJE5WZw91hL8t8A1k8SGwL92SKQ5rNw3L9ZA3BCU5q2N3Grg",
  "key7": "34HtWi1sMXnJj4ojX8wHi94WCyEBdqAF3VHHRb5xD7dBhsmvaANuK6fTb5EQoMSBJY9bEW2sLsen2fWR3DT42WEi",
  "key8": "2EA5NBbPv4hRMsYLWhsDbJGu6mM8djWrpG5GkSLtJK2U7x87bzZw9aHpSjwPDyCjsWrXrjXhFsJfead4icvU7nsS",
  "key9": "4cModDq3DVxMQdiEWXtLk7X4Y44pwqrKfqsQxyXvzMRm94X3UWLtR4hwWn31vq6RtMRfKm92MejCKVTKm8t2K8ZB",
  "key10": "2DSTt5qLoiGq56H3MvYghCxFSkLNKgdAFZcothv9c7REik5xiZT3ka8cWNYLH9crid6NpM1FJDqvyp39dcGgeXsg",
  "key11": "5DHD24oNxaLx2jjUEc5e2FBd25XemUaiwd83G2rejaGuWjEpFMkHxCv4FhbKsqaMiW3LvTEfCgVk1kCAmeyJbxB9",
  "key12": "2Sjf7Wf8HuSfTYxwMamPFLVxa8AUqSxq5QjnjLitw5NtYEowkP39TDgeMrgfe2N1oToACZD2RfdVS6MYuhYSpA6o",
  "key13": "3Nx8W5AWQmKn2FVXxT2z5fDfEXXzbWqcsjeBu9SGk7erUdQUtrCZ1rqy7EhM9eCU8M7xSLbKVXmPqivYdkqH4Ayb",
  "key14": "49x3Bt423yQWTsNnRWtmuSYmTMdh9B6VJxNzq6P1qXdrMzhRzNWEL4TAaN3QtziJtXF5qMg2K1b951iVZhcLD3Hx",
  "key15": "5HUxzP45fVDjGs3n9bRifjGpxP1Vd3WQ5fvYJTYp6gbyET3HPBQZhARnWWEWTnH56vPaniNgzxDHcLhSzhvtGvZE",
  "key16": "3pVaAsPKun9rRZ9htsFX5KRq1qEKhK1QNz34T3C4HPUZNobuYdf3yJYm6NGEtGxDa7MtMZWRepMZLqE8epiEdHus",
  "key17": "wEQPqcMz35JQz9ZwQiDnHs8V4GbnoYQq5LdZnjAWoKXoWkZECNYAnCBfUnnPzEXjRyatjZW1xhnygRieGAMjXSm",
  "key18": "3Q3nM77GiDTEHDqWV2khUjpUfbNCwwLHhCWcxDMAYcHxJAUxgYByf8h47zQjxBCCMf57Jmz9FMZRQKh5vvFqxUyL",
  "key19": "4QWmqcx5PJKJXMQK93dLdFDZYnMtXcmgPaoGXGkNZkueP7qVumQLPFkGvYCj8vLRcxc9B2CUE4CmSUssCatuT58o",
  "key20": "2eChHgRzEoXxwA1gSGMFhCNrbdKTRbyhj7WWKihrRxsmQeCQsQNU6iMQgmBm9YtnPypkAYEo7MiseVuNaMDufMaQ",
  "key21": "2GnKuKn3TW5EjBjLDWU3fiJsBYXEbwii46cfCE9se51pABDSnUng2KkCspfyNX7GWwGjZrpjfyKSfQYtGxow1pwi",
  "key22": "JDxPxZBXudEwq9PkFYxswPFnt9X6SrQ9SufF7SbvJiBdGdmmasxrjCV276NHJmyQh6k5GTS7eCzbfyzBwHpHS3V",
  "key23": "3wYd3ybNn9bKQU18cyeYNhDYB1L9qncpjNo5CyFiim8Kbdv6afUUuFjfXN191PddpF7ko6m9P8ktzhGzZUCLZmXU",
  "key24": "27KNDtASVFzGrAszuMGptgFabFpn82nqKNsHZwUNaDM9iJ1RHzvYib9qEeekP2inrbsaDCp2oqNtTmzsWLe6DAiK",
  "key25": "2Cr3PJbzqo8m17PfLQZEnbPjuNtUS7MXYRhnquh9wk132j39qybpHA8Jp2rmhTrCR7pSt6jK9FkTtYgHoJDzSDis",
  "key26": "3MQpDfF3ZYJ36fVLHmPXLXwys6PYWVH9dBEKPgZbm12ACanRSEsr2i6gwWTbZky4D4dtnrRKeTDzK7RwjiKt1tE9",
  "key27": "2H9MEi7HmMwLBbvnBBSgj3VbpqH3YgGTVgxUPBfos1S2pfhUKF5C3QPocSMHgQyVeARXvigEj2SJbnJqgNJDvPYj",
  "key28": "3EsGQuAMwq6o498hRk6k1qAHeLKFA4t36wTpaUY4tX6cwFTkvkGAWybstJ6sK4opwZh8T58LHuCGUKihfh23Fjbz",
  "key29": "3a5KaSSbiiVhuJksNpx35D2DR1teoxfXg9frrYq7tq7x77xa5XX97A3g8CYjY7Dp2otiFuAueJaGiJKDfYsce4cb",
  "key30": "3YFRTKhwFmHhpjpX9aafEjzmFXWPkQfSkfxm1ush4ym5fy7GVbEnAXgisWYUhkHGPNu2Gk7qZKLR4F6ptwrzQuU5",
  "key31": "2Vsy8KAwVZpEm42XVFHfCFVWu9zq9QzvKMbp46neC73qHpGxgefA26jkuVhzCvJTxRD4ScUjjneipqukW81CR6td",
  "key32": "3PEkSo5aDZG3zBQgkCoib54r4bxFtEqT8PajjdCwS3G5c9sdEBvXmH4mn8NKDtBvNP64B1nSuQBYhHxAUbuiq8CB",
  "key33": "5A8bxWeyxM45huXV12csfLqTw7eJV24aakKtRpJZBazzhpny5GDeLFpu8gtXbeNMHnNJ5GTNDdkd4SrWaUwwribp",
  "key34": "44BgiwdFN6jZC7YS7a92NsE6zmy7dB8M3eF1eiCprdp3osDWEvMiTokWAxzVAvUh69VvtJCa11YNPf3suryUhmr3",
  "key35": "2Fd6fNdYRHpcnKswG4WCASb2t9do95HS6VRGuiM3k5ATdoGM1gbRSwm3pyiktoM8vaRDDdJirnmdM96aqkTiFGVz",
  "key36": "4nYbfNvfodzXWuhz693nDz6TTM1B3ymrDcoSc49oD1P395RuUJipeScBX2pTx8P2pReFUZKFFGnX5kfZRt92rw8i",
  "key37": "wXQB5v2CFMVyp58mSqPqNnvWMj9ieK2GQuFudnfhr4tjoK5NDAYbfqH8sEpzonE9Wqg31Ff1Fx3qggVKG5SC443",
  "key38": "3DQ25dLUTtEeygEzTTrzdu4vQgosfG67U1DqQELyax3eTm16WpcYbrf4J5Ln44i9fPkCrAoZ5YTEaGcKaYvVGFo2",
  "key39": "5MHfFDfEKVKVZiKiRrrT8ms39hbezdoZCybdToHPn5NwgqGzVszymEx71FpMUd6eU3pELeDxLf9ENjZsiceYaZqf",
  "key40": "4jEQYJA62KPZD8v6QQeR3Ms92rbVPA27jcTZenD5RzARyczuvxEsbiyko4sA5jap71pRtoUjnbTCQqod18fxuiRB"
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
