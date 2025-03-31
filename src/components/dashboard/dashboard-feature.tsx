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
    "2nqF3pJQdngCiZoarHmaoe5zYsUs1jjGAtinod4iv9EZG2HvBKXvERLWnvW21xPKnXLuZkvmo4CHVuyRJaK4G9Wq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61D5uuNQLMWLmLBPLzSR4pB5WdgrUJC4PeCgK1s21FF83a5MYUgwwYVY7m86eudMD9qqXdfLagiRWC4b7yD6w2vm",
  "key1": "4nfKQ9LDMP3dXMCtAzVDwPmPgDkMaFyhcYjLEaLBWFGUo5keR4HshY1ECKxDCiEqJGxCBRBrRgG5QWvA9vZpkodR",
  "key2": "3Bz1KPVYGACxtWT1tEgcoDUftckQPeSK3jsEd1gii7Mh8QXiptV1cc7g3K7zK258KJ7unwSucGKBpNt64N5hX5RD",
  "key3": "3Th6EYTiT7TfGR2PkqMqwSVKJAstpQhHFmt9tLs6PjCByzacUNhgePA8LaUES6zvHyGceeemVLumMtpzMyeBL3e6",
  "key4": "39x4G992wtJ8ggS4Q37Xp8i4bZk3Xf8k98p4c8HRxPz7aY2DRhrxpbzWRKWyLen51aTAhBcnbq8kE4hPRZahv9FC",
  "key5": "4ZoJFRUpEYrBbACQeLSxQDgAAzkEf4zx324XhDohHpUv3M1QhcW9HfB17o7ZfKxnkVHVEWJyyiFq6t6BT8DTkZqE",
  "key6": "3TjPt8dZvJ1sXjChk67R2J7UVVwffBtDCQXr9Y2skG2YWfgKHJ55c64yY4wH49YgaxgdzsahZdi6xu8QWdmR79pZ",
  "key7": "3WTvbbfEn1pZurAx3mTda1h8GdknCX7rZpU2uXSSRJm7kHodufUTQcET3b2aBTcBEJhXNh9BqAWNQUBHEAWnxoFZ",
  "key8": "5xzz4sXv3WoiLK7wTGbMVTXswMzyDo1GciDibhDHs1UQihFWetG3YVQU3YmRRCEHJwPiCC8NwELQJPgkCQmX5poP",
  "key9": "2rqNTFT4Mn2Mhzh6HEAd82Li33kaxT4jTeSkHCo2jy2SwMiozNDcbZaC7RuN6jqGSR7usnJKKx2CSVdzax3cG2pv",
  "key10": "2GDV1y8xH23qB6RPFbFfhRJVLrT6H5irUTVuNs4FcYbyTd2X3iKELD3E2x4Y66dW68ffcxT3z4nr7NJEQmxYYT4v",
  "key11": "SFNePbQaA2EbC3iTWPEZpUn53kxZ7y123EyrsMhhwx1Qe4dkL2EhD1UmCtxqMJEpFMPc7pLAcEpr2VmVi3UAC7W",
  "key12": "2MZWEQMnNXnN8ssVoshCAYVyhYJYTm31iwHj7brAHhWUxy4LAXnZtCdT8R3b3EpDg9ySzW14TxfSELQQsAPGP3U2",
  "key13": "2PV3qAXsAzoHWEuNnShNApe4MWhn7tuaQH3ThJE5B4Zd6XThUU7GDMxTCc2zPcEvN6uwv8hxNYk7gPEWbrJHNSwZ",
  "key14": "LZB1tKXif1Fiw2ZtBuLsNABzRgkx6MrxVkXK58aWdLG3LA96fxCTXzogcAgDe3k5naQvDkjQQG8R4i1rx8G1MCs",
  "key15": "3dvtwerfiDezJtLT9FXrYHTFaMeCoqEu8P1LEXxpZsAugc4redi8QgLEjGhN2zC55poa3VkspDGe4rePsiAMSizj",
  "key16": "4KjieLkzBHpPkh7vE7TrSQ8z32XYNQQrMAPcx4HBkzdR2YRGNBHzUuRG2faetmpmko7atGcNEHkAyUqDdjXRv9Gd",
  "key17": "LyjYbwXt7UgUVSRffE39BDri1ENNz3Frskr3n8vd71qGnkmag9KNs7YtYwdoGSM12q7uecaD5h7FNpndYh24QmA",
  "key18": "4ukxEXQFHsq9EZaroxfMDtxsLtLnfmo622zvZM2tvsXqsRc7WBmka4UouRKfjavpEWYE79ZnmMQm6bz7EpWpc1SK",
  "key19": "5kXcb36RpMD9HZJvixAZzmmpaxCM7Fmks2jrSmxx4YUz7k7ZiwL5u8euh85JzsaYbG1V87HNZkmPi3WXvSw98Nut",
  "key20": "2vchpbDp6cEPrLuvKuuvLH9CekPHgJEHNUM34QvfS7Xd9Yo73NzZ9VFc7jUGeUGHe3Kd8coHwTJWUJgQDLp1HsJZ",
  "key21": "4NeGhJ3TQPjMYwZYffQ9rSsEZwyJ5cXDfmnthFebD1BSZ4VqZx4PZR5t3RUrohjd42xYtT6VLLNPvKTARR3WE8SK",
  "key22": "5FJSx6Qz8wNfCF367KhJMdNZ8GuoawwLzod7FSKQcoGfRd2df4KbbjE6MEYgqxB5FvEMwRTE5RXgDiYHkKuJ35St",
  "key23": "2uUwa18WGCoDK5X1gQin9n9M34NrGR5DTU3uvZ7Vj2ktxDfHDh8iCpcjKi4ar9eH6eph8fGD151feEkwTimneA3H",
  "key24": "4SYp4ETxW8UVirK3WF8MCRn2ejy69WWPrZF2F95Wn9feHrGwnwygzpUW7XysnWoswPbJN4FbyJjo3JzL9Ra6Ayve",
  "key25": "2K4c5uj1Hqttk6XC2CBitrjAYbctMpQQgmZZ1f5JDXNiFyotNd57caRZVSNSf7hobkGsyLDaKFrFn4zXfcJwkuW6",
  "key26": "5pRemoJCwBo9dcbgikGtFNJjD15TBqHMbMsDnfAEQq28MzkkqvDvda8UTQYKoiZx9oZB12NHfyYrvCyqjThMSMPc",
  "key27": "rAvLALw9ifmtWoMeSHn2Ws2D4qxc8TDknqdoM5SHKbdeQ5NtuvwJ3Wr5dWoHbGeZZZofWv3RuV2Ua3ZxuARScpz",
  "key28": "5qrNnz9TVxZRDJSW2fxCzyNiPqWrEryJ8KjnRn5VBVusmJ54eDM7rmndppDCbRvMGUNd5xh32FkdRPsefiKxMqCf",
  "key29": "441V8XSF4YDxpiLLN14tDhd2gzTCpge8Nerk7iDA4R2PgCkfkAohC9i9XkoX9Vy5smfZHH1TdwhHzSDLfku2n1yi",
  "key30": "4M2jrrWutKzfDRU73YiWaDco6GDSeqJ3dazNdT4XY9wejW6jCCMZfeu2kumBxWZNEhHDujbrri7FBTxqTb7tEkqo",
  "key31": "3sxasp9WTeFXwwCkdwsCFA27yF4Abyz5vmnufgXPGQXPLky4JMSsdnRWnuBDyCuNchGV4bfsKUNEuoiBwvY1zc7U",
  "key32": "3cbdyaMgQRofG65qmY6BzkxgtGhRzDkJhcTuZiinGfu1nLWimHbKBadAUzVJddNCtH6L4GEyZoFjyDwVXGkZZjSk",
  "key33": "EmWbNN56kcxmPq1Hjc3fsdXta8qvTZRos7gygthJYYoL4bMxy7YTGss3tQt1azsRzm3RJd5Qb5KFGWmiKYbE4Zk",
  "key34": "3A6U5c1Gff1kL1KH377rzRtLHSXbxBqY8Nah4iGow9vqvDETHPhRW1bHycfhzVLnX5iKLCsUC3mfagFPJ9cYssvK",
  "key35": "4FSUdkuqwf3FhFjtKCPsqoyZ3CxWA2P6Sddq5nnwVTNmeJuCsegZHSXK4pzCC1y7GFYAuUnpDUQjzACBwzert2H6",
  "key36": "4rnEpg53iBTqXojNLco8XFHf1h7rDCQxmFua3ZXPeNaFvDzcdWJ2znFgpXsWiB28QoCmwCmn6iEAZGEYUzaMyZNi",
  "key37": "34pAW4ZhvhcSSkhDQps9V3DHFB4m8qQrQJY3JDJf84gyEjuJrtHqGj5WhPowEQzzy12HywSrBshUPgj3R6JxtAqD",
  "key38": "2E5b98EFG2s6hsFe8EDWqBgGB3pLCkdRt9ne4ywAbHHCqq6UB5ybaZWB5irNAojtzf2z6xu2PNm79iVaPVrke2ER",
  "key39": "378DEGfL3NfUdSZVkF12j7XR19oPGQQbNXBPnRenWWFRLvssEDsLkEVLR3zFew1qTscmJfmaQ1r4wGrHUsFCEmMz",
  "key40": "5PbkTnmXEej8ER8dguh24Gk2iffewh3DUATJQo5jKpWfztbaqdvSHb5Ge4mC2RwZvXRxgdaXmMB32XkRrwPzQNVU",
  "key41": "2Jx8wVpcpjgNmoWqqxbF5juQwRGAngSoDk13DkS8prnMqmStiAUmbDuUzrY4bRYFFtC6GRoZiBqRqyRQRnsZRvLh",
  "key42": "2M9JxifRsTFDZbNhizNkpTx5ZQ6gGQFmH2eu9BqM2yRBmfDRh5gWqrYcLNzrGez37oidEKpMdTsEKwRN9fcoboti",
  "key43": "5ysVtPs1sHvfWiJmeow73U5W1bgdiLPoTYCDwr6b5em4Zi6j48hwcW68dqZTq87wSJYW6N5DfJJ5AcDXSasD2C8j"
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
