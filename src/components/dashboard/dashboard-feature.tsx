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
    "YdSGZhtpK1cNyHPKYY4zrv4BgnM3DrE4eyC6hNP6B452B1CzjarQHa6R5oGNeXoaLoHaMP5f8t64kS4axYsfh3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "spDU4GNt2hhqC7rZYPfhfYDR9BAUVwbBJcdJ2DDi2xYtWJA9KGWF4tRtrHzza6xRNRMH41snnGo6XBZyPXCKpJs",
  "key1": "3DKkF7j8CsM2s6it6xbRPt51gDpwoPk7vZBbacfnhW32AmophLrvkmpBdPjcwVgbRav8jpUzm4v7MzCbdr1ETzhP",
  "key2": "oAbJkEqPvv3gJPK724MyEzU67q3Rjdp9DSfnxCfWH8s9ZYg3jsZRDTztpFRsDCSs4gAM7MuuSECoimAo3cbVa6z",
  "key3": "u8T5BtAoNmdGkApKdmefi3JqYNqBGsnA96xCWCaAK326u26dQqgAbJdV7f5qedFFK7gk78i8X1yJakMckrUoixB",
  "key4": "2VwzeK3s9BP5Uqi55EYfPVJfQEmgQe8Cbm7ezmXy5acavU5WUu2CFbiW3Yx6ZgDbzkDQR8U6uhZ1CM1L6TJswvcW",
  "key5": "5UPJgSJjYuavmBqbGeh8Sp9b4fYNEfJooVxmmEHWSYjmCenBu63uxbAf11iPwxq7QhhUmtiVYjo86RxnWfLUjf8B",
  "key6": "58bwsEyHDQEPbzmFoLqCUP3MpNJyoi1YKHMs7m86Fv1XYbbrL9baCWbzdtfJYEEJwt5E4AMAS7RrnVYLUDBpHHFj",
  "key7": "2NUyGiqxeBNXHhDtCPkP59pmL5kExEmSSmXrrbLCv7oXGk8V84HHz19pUGeU6QVAok32pEf68pVEvQkYepL1XSy3",
  "key8": "3fmdT222BMeWtPDMVMaVG83teCK4cyVuxTqJPZhYifkX747hMqx8RN65YJNE4E7SxGWvF1K2KgYydWa5EMW2zPcm",
  "key9": "nYgUwQHzDt1qMuFuANogJYUXAGDVBdnGcA8bcUzBpof8gk9Fpr3MWjtEpbPFGzph8KrRfmwtwogkabVNMvmCeSx",
  "key10": "2AcEtrJTFMbewmJf2qodVD1KLa4j2HTK9VWM7XWchG3nVmepRB6WtBUB15cR1fx8qoQ89tWXznvMdY1rgbe89ohU",
  "key11": "5houk6BtXTrZeTJD2Frc7zsDhgb62YQaLiXM4d4asVq9CWENAwHpCGziFShYdeUu77HuCA8nxukyNVUhgEeFFWvo",
  "key12": "3ncNGDQ3NbRpjioxEisVpf7ecGUA2ktMyGQNxaWjh5PtsFAZ7nNZUkkK4J6KdayzSN8FKUnDEeWFxhnDQYUKS5Mx",
  "key13": "2hqg8z2UMjQNHefjx95kQjxsQ4KNkn7opqTpzdgendhdLL3uREkJD98XWYKFKjjrYdrBmTtqq8cxE8VKAbrAw6T4",
  "key14": "3uh9CFjiE2SwahFLMAdKTTy1GWcHU4nmR9EhJzJG8A1CM7bHNSozVYknuGxGhPteiD1CMkY8SXWb7VHDkAFAW68u",
  "key15": "9ejMpnNBp3KxhoLmJgeDRgnKveupvPxZbxNiqoL35HG9RELw8NvYCrnTRLeu3nL6bpUHkJy1Sb4R3Jequped2Wd",
  "key16": "2udCB9ii9xoyc7rtjgt5VS3i4sVbvvw7thggQDrbopdm6GbpMVirQdwv91vcEiF7hsosZ2nEzUDUWMB2AUA5k9uv",
  "key17": "Dx1RVEfhD11rYDG9njdgSda8a9QrkxVG5J3rwftKAnJ1QjSp8coQLvRRs4odB2PCFbgr6hDha45ahkspipVHAZB",
  "key18": "4DCT8DHC6zsJUtJVnim1Lb2cnLRKNM1myCTbAihnF63QKqxvKtyvPqSs7wzfWapKkTvSe7L4pcNCLEFLw6sBBSbg",
  "key19": "gLVQU3gGqK5JZ4mrH5VDNxUjpujxRa1dvGnsvgVf7YGyVemaB5ziHw1j4Euxoes4FK1CrdVtd1gYzuXhwnqDHKg",
  "key20": "3tBG8yvJNARuHNQXcUeyFvahJmpSW12jMbWG98p7HTTZjCrpw6xgju4xDBSuPPhVBKWTiogDg5E9XnXHx7y88ZmS",
  "key21": "3YmKGmbFUtEdQ265Xqe9qEk4yzQSZYorVAcdKQ3DoMUgy8oK5mxDhafdTne5T9EaNZPuCbQUGHfWtURqnFukHjv1",
  "key22": "3ZPgCPCFfHnWBMxKsMLPBv6iqp5yXXp1iq34rLVyJn4K8zvwdFwoDmFEmerFH2fejia93EbYtsS8KxruGWyqXc5h",
  "key23": "4cd5ZjnY9twRLeWRKfjEggvGb4xvevkmqgne5fn2eeokRDx1qANZyNCwDzUiLCin3k2xSDQMKPJpuu3m7ws5yQa9",
  "key24": "4mRQKdZ7CE2V9krFcSPvCqL9ryAsX4P6rzVabid4qsbk3twEUq7n2oQ5qLMdZEz6kM644FTrdHKtczvzy8W6Kcmz",
  "key25": "2qJ4UBFNsfJrCUDhG99Lt4zzJyeg3sGiCSj1jUnmzDyKgNCbPjCV5CQtExKfkzpfLxGoobdkNqzuvbExzcKba9GV",
  "key26": "2QpCRcid87KexeuBCPnjtQKvRH4fKtc4cb73ZSU1VbFPY74E2zNXFqf8iQDwHmDpPMWottbpLFTfmQ3ESoRBtcDn",
  "key27": "3229CntfvZCwaU59BhfwGssM8P1cJxA9bz3m7whWuuDWct5sZJxfd4pP22hS1ShgEGentv2wqrGV3ymJfdwFYWCg",
  "key28": "ivRtYkEQ66Zmvm1dhjSWxiJMENXu3Pb2cJkfBt6qKVWguWubKbY9nej51YEMtmXfFEp8AsZM6f2uypdkbnDsJ9E",
  "key29": "5u75zmqexrDfvPRWGpPoQVUSVUuZzDwxqqpgfMTa4XaDPC1twLYKsHbH5TpncADpwyKDgmj6WM2oJxqhuqYVTU9Z",
  "key30": "382bxRep2C1K88j3XQZB5mYoydoMx3EcCvgqg9gQFFdK4ayxrJ7SYdWossFu3qFLCaysxHbF198wems4QUpdc7i6",
  "key31": "2JeiKQW5QXaJcf8792BnMnVWgrQ3gyt7VtQjDkXuyjBbpQNGSwjdKVLTbhKXeXDvgDGwWVqL3fx6CfX7vyFG2Eo3",
  "key32": "5FoewRzG1zxcPPwgs7NCtfb5WNGN71AH3YkJU8AuqdFJoJHAeZDcwt62Mvh1eL8J2mQVDFq4d9YQkG9jo8U6PBhm",
  "key33": "4azBACBKtUvTUjLaWhrH3xoMjPcj4gLCwDN18HNv6pUAVnXRFu3wJ7eLqrD5J9P7iw6nPuoYhwDX8U8NAPwGRcdC",
  "key34": "62BPf4Hu5BhtxCD3D7tpj7JkayBTwFuv53NbPTED5S8WyCijrz4wH8uRNohY6LeG8Lg29xSgz5aSPuP79jG2eRvN",
  "key35": "3x5zYRK5hMBCnF6ghuqf6daFHyimyQn6QK3EkutRv2WPtwVvtbiDSzbUN9pFkw6hCp9ETYsvAz9jGuvE7XAUh5xU"
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
