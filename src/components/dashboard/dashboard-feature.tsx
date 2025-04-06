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
    "66z5MgN1KfaVY5124CAuzE6d19G5rESKrfkWvnvenvJ3aycWW242q5GEMLoFv59XvxKdoLNcrfSP3Ua6Kzq16ZZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4ftaQpG1HmkpkapfAtk2SR9CATTSGyBWNyN6Q3TuxkzkvuPdC1qyVNcoMsCxXP7JoAe5QPybVznvqSk24sTp3p",
  "key1": "4GS5fX2hXervVKo6b7oSEcxG2rEvfYQTAKbr89XEcVSkKZpTBCCtNiFLDtFD96GEQkPsjms6v3CDkQAgNq3dB6Z3",
  "key2": "5E5SNqkXC5zmnwRTsx2pWqM6MHMcpMJdA9eH4zq5BynhNRo7gBNz2sphi9UtnEfvftNNX8M2z65hkSS2hy59hQsW",
  "key3": "3yUF2zzxAuXYq2e8SBWoonvWMfJij6MzNTJrffj4vwJqD3SRyt62zoRyy35zhKATzg59rcxFVv6GvmAVxm4wFk2o",
  "key4": "2YHPyU1LQ775YnNXRk3nqrEKdrZx2Cgcpsff9VKmBoSpwhornX6Xyw5bU5EYKJSuChuPztSQr2f1oeM7PBV6qS4i",
  "key5": "51DbKoPstfSE5ehFuyKKWNVh2DXMbDPxxSZQv8kLkYsMuGffFmbTDdJ76niXMZp5t4GXAmEPAwap5Uc1hyEy5pEj",
  "key6": "3AxhQgkNBBQQYXTwqKo4to3yWuv3ZubsnNwh6PLVMb4BwD61xNFEY2NWPKaemtspAGsj76qh88zQTXxA9BFQgNZC",
  "key7": "2CXDD1msTaGG8vJiYPM1UBowB7TrqisBDmabkr7CgPLEjY4yKb2ybDb5HqrmDEi9GQi9AKmYnx49v98FkvCmANu2",
  "key8": "Th8xjYzEdkFcFnDekU796Y6r9y6NaamJ4TqE7qKGB9bDPpJLhLwnTAMW3Xumquok4UX6PnoyJubBTsyre9M4Fm4",
  "key9": "jSJo4mTXcfme6MXcs4ihWzUmMyXiXsvgJYLTQ3QSYztwcAam2ck2bRa9k89oAE9Pra3NhcD2Z3e73SnGo6VNkrv",
  "key10": "4Pt2uVeyNR4qCnzR7CDow7MYtRc3g9SEuLXv79E1eXhxZdTF9YvBQ5sLBthwNPdMvpRzj2icJPSu2U9h9Bcfxggj",
  "key11": "37R7RETwBz8ymM4uwUL3qSejQwrVbj7B9XGux1BCR38boiQQwHUyE8QtCHyRXS7cYh1PPcpEFXLjVpSG7PvH3ppf",
  "key12": "5ftz84PiX5sFszqaQB8ZcSZyBk62rLJmLeQ8HkPKYPEFtw6QrmZQLKeupQJsh7yzy3czzEdXQ6PDUfYQwgtpGC9A",
  "key13": "5YmXure5kcYMTmFN5cgXYXS28QBcvkCWvYZba1SBHZJxK6kUVRjqEcceyyWnxgZcooSucjz4X31zYngEkUP16niV",
  "key14": "345UPMGYSsD5LJYAGZVDo7MwaLVat4Hrbz8m6DW7y4eXL8RkhAUoEkmtFTDrmR4heDwvkxiEZeJwoqDzdvEBrpLT",
  "key15": "4bpjmdzDC1b7yevSnRD2HEniN4bsFJghcPamWc3SUowrN4hmjQTUpfq9uJLt9Hko9uJRhuhCp3XUGX5ekUuMD6Fq",
  "key16": "b6DypRNbDrGYJJ2KYPZ7zjRwRSx5wMBKsKkugT2vzb85r84XRi8Mks8t1dBiMiaqBuodNbt6fKxcTy47HsFhPgN",
  "key17": "2nzq9QgQUUKMv9A8ASuFntxQAEDqNYWnSydAaQuWGwjZKmM1WkDp8cpVDAf7WnzpY4q62Avtr1LoggPoJAqRiNfH",
  "key18": "4aLmDNGaeecSZSBqtYgWwg3nS5QGiFa93vuyeYrr3UrUud1PTdN22na9YbFS6STouKdC2YNdFzNDsUcwnNNuaCsM",
  "key19": "4CPyPUC7TD6r79W2rZUyD5pgxnvky6ETs8k59DYVTLn78pscXNdfc5GbgZdg63UiSdE3JUgcRSFHtFLFpDcfzV3T",
  "key20": "3bMsDdgxSRit5je1pQhHNZXNihC6dsJjhBWiMaiSAV8cppqm3Go58n8d9DtMBsFu9VXc4ZZJeVqNDVdtubLJ5iWr",
  "key21": "2wnUy6obFk2bm3GaDqEfQmDKDiUNT3m3J1SqscmRhhkuSenHR1dBGN8wf96TVaM6J9jS7sDi5WwK3WjhXurDwZjG",
  "key22": "64cEbGujZGV9fcap1RMTp6vDG1aGguSH3nAFCBeWAfbAzm9cLgAEoh68MYySP2j6HVYNLH2sihArg9i3zenKUuFf",
  "key23": "2tEL7Y9xFXpPino69xAPq2gxRdegcnvEQzLDzsEX1hwktHdhX6SV4ToVbFcSc3CrJZQq3nutLifJja57xdfd4Nj8",
  "key24": "4jCkZqrNzQ1RjjRvdDAFQD2tuAHCh2Ssz4Qd37ryFZP2ZyJ7QhM1RtVvjRTgw39gk28jyRLH1888yQ3oBhUccTt2",
  "key25": "2ggnwPZdNk1AoTA5URyaTrwJomzwMdPhZQ64GZ48GhY5NZBPVnxM4Aai5z3XXRiHqFpLLNER9vMjSZuhysuvdvrh",
  "key26": "vmzK7oYAwCHECBU3sseAS7QcxRTWzunN9q3utnY5GnkFCJgXeemqDVdAMB5EYunVn2SxJW21DeWyakicTidwa6J",
  "key27": "2C9L8jafBkcTECjSwS9Cj1vkBeCCpsBWNaHe3NoeHyfupGtKwXCXeC7stjtYvZs9wnBZJUR8MsptJnfPFPJgrqSk",
  "key28": "4mjbCWU3Kam2Z7uWfnLTaHMyC5N6ZxL1hSFPgxLQ8YJpRb8dqBDBQA5b4rgN4CW9rGs8C8L646g1smX3PfzfMbPw",
  "key29": "3yg7ymHvSjzdowVcgUKRNFCLzXsVHkpTvLLMRTc3BJh6AHngzTMFwSpJLxdjqry2RXkMLNkcvH9mh8AeVwbgfvMy",
  "key30": "24ZV1FxGHP1a91WSUtVXaCXBrWjj5UcTWYRpJ47dWdjwLiRKa7jMRgNRtTGskKwCQRK6oBP4Lg4QT2tpzERr9nLB",
  "key31": "1ozPstG4dk6njaVd5BBUL2NgZT699cEavC2scAjZy6LqizUowr5dvrFjniqkmMu4Awh632oPEpdG1P9eZUsh6nw",
  "key32": "2MiaZd98u2fuSDNmgxw1Fu5j57BESbuu8GhUcmmNs7vLiLpM9yCCNkcjhjCQCR4mucHwb8jAe8U9ZpMAkQzPHVfw",
  "key33": "xNSjtjgFFSKZzbUNgEs7jZr4vdnWBET9Cg2ykyHVTJfQV4ho1VahL9Hudey2JPN3c3bVSo66hsorqzsgApqzzYN",
  "key34": "3ZFELoa8wY69YZ8qAVveeu8L8qoh7u72nwV7GHbjNBqJoq8KsX52RZS3PZ1AqbCyPGxhPtVD7qG2sTa6YbtFnQ4P",
  "key35": "5mnF5GJ4B5AxDDkS6qzC5Swp4VF8wUiSPLeDWu6SeN5qD3rox4ybF8YefCUvpFrTtbZUTqvpTE5UY2S83vJnpQgN",
  "key36": "4WPqLMSb2LdWKxRxrb47EtmWun4DhzRRxWYgfLCJeP4PmSWJiqWRCAZm45mENtm2xAxRUZQr4gEAYpoBWvgvNyE2",
  "key37": "5PzZA2uWcWAE3qM8cLxybmBnkQhhaaMEYJ9QKnfk3GJzVCADgdn7bcAthcFZ37Hhoo1z3aY3gUBSXjtV1nFzTV5s",
  "key38": "5yYcu1K6B6BVbtJq2maRYMns5TfKgJ56erwKGrynpkbQ8W3NH36rrYMwbCDNshuXz22JLEjEHmqkE3ai2KAsYGbh",
  "key39": "3EP8pibeThvZEiz48g6mEUe7yZm7uwtUzbP23r3PVvxcyuWtFa545a4YUpEidYjddTigikL6W897U58T1Z8nDzMt",
  "key40": "5VNoc5exB5Cia3ZjCR2VVo4cRqcURYcznNMT8697DWg6se5NMWN1hLvhLy2ty63xVEEoAoMQTcdZkH9CMbx5UfXW",
  "key41": "55AnwMgac6hykc2Vk1GDmuPikKqZoUan7u6RrQgqeniTJJ1bwrpfzvQ7H8aoYThYEekP6WCp3kkmp1A2Uhzyv9yq",
  "key42": "abzhHyiCSLeyY4FCWvAewqvta2wBcMiE2ET8wWHG9AD5f5zDdvDGfUctM7zP1WPdcbgrnTqYJxtBNxcBZojuwqY",
  "key43": "4ncGVuwN2HpL1ycEhyz5E3Jbm8LMxP1tDedCiBzM5EwnH4GrQXCJg95k8SYXNLA12uZy2VXmAi17GikZc9tA66dM",
  "key44": "5NBXsK61vFq5oarzYVKzcQV515URhPJ7AK8f6Y1ky3LM3HX446MEnmP1JW67xXxcENCVk7iukthoYNG12yzo4CBy",
  "key45": "66y6USdBqsHYMiFuDLH2benhKnQ8F5q4gABdxquoia4rj3Zg7kSnxQc9o9AVXTybRzm8mUzxx5Xg5QD2oKkksBqo"
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
