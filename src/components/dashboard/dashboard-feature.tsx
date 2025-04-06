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
    "5XkjEmwKSmzYt16Rdgv4uVu9vQqb8xDnkXszF4qDRot2msbRCHjPhMhr13Fu3dLsm1yghbbgVUN8vnxGqxdsMeen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nr3hqaJVFaR1JuAEm2JdgvjEMRdmoDAevuVBXvnFTzqX713ba462dRbmk5Ee7KjJH5SL92U1BcUYyMTgYaAtCds",
  "key1": "3TuenQNcRF6rdCLeK2b4F5AUrZVXNyRKcj1uekxisCDhDYjYWaC5XhkfcTsN5UW3LRPMrnb1yFhZYdT2D8MakhL6",
  "key2": "2UFQ5QKNf5nNKg55nLQYXhCPFuzC3dTwzS9ZHPVoSP6eHxikaQ8zA27tnz8Zh4UmcbGsjqazYEpk6eGPurr4fWsr",
  "key3": "2hZAvwfytXKUpPjnwKrLT8uBnRuh9RYvrfDEH4T14rzfZP5qjTCehbeN4Z4iTgmaSS2xRRGsjENvZqyS3YYADwoP",
  "key4": "3pCasKbXBY6kqnN4Up5FbLpzouLRYWa7bBfpXLQFy8NbQ9jyGffrypyxmPG4KoFXDNMb3zeTbRetBHdaFdhR5Moq",
  "key5": "4zf5suP5PoHgo2eHZEpnZa3yYiP5r4TPkzjebFLBsqvuwiNyLi65gUMhNTKqeB2b1A88FnaoBqmTSxhbK4zdqJhP",
  "key6": "5xJ3ooKzrEwh7mewQCF7JjiPWU2hF3NhYAbcawxkNvj1RFpP1EutbYuwX3MSEpR711EiPrwEDMq4QrzXLWYqLycS",
  "key7": "2AgRehd4HRAfxkiJSzLKL9RdnwjpfKuHgVe28URs8wqCc5XafKrTRifatbCpMLZWdTZRZ9AcqJFUL531ieMob1Uw",
  "key8": "4GkwqLfmYwpcCEA3Q8p69eV85fCYcSWj3QEvscAse1XXsrCkcYviyuGUVesXKunkMPypuxJH7mzxEDyiXSKmuBy4",
  "key9": "5Kdab9VPphSxHSziwJostZhWx5yfnie3WvTs69wan2cm4F5aopGaHPERHz5fyDL55q31EsPvynW69ZG4nBxcp65g",
  "key10": "A7VFWVfnj9ieDTuGkRtoATgqZ6WxzBP7oU5tSs5ofr5yjejbvhaNQWSTfoAcr3arLE3Uuij1Ej858AM22kWtDqm",
  "key11": "2bbtceUsZfVMhdqxMPe2UCZjeqh42WaKvozw23erGMZYHBVHHhXYmM6qxfbv2TX63qku2d9dTJ9Dw7PoM4yMR5b8",
  "key12": "3LASUHcDV9Gx8sxJZRR449iy9biiZxE6T2zTm8T9vpUq1EKDetYxSo8SGx6n5bEa8B22YHLNTZoG8MsJSrsdqZaW",
  "key13": "2tz6rH5ZYQhUswgjpt9DgYTad97upkghjreM8RpavsSwZLA8SHUKVRvH4euKZYYuqDUpYZGuC2VgLc4TXDT3DZrs",
  "key14": "63ADFG9tYxvkTXMhzjivZcbgerEzDEx7z4mVm8UGUQLEpCkhFymhxDa45rWyWZCQWq96ecbkJxr1AJFniAvh95w",
  "key15": "3w8ewrWKY9tJiXHnfE6UQobvPGurrWdsnME3hqjvazSWF8RSePpKG6f6kKDP5SMP1B8vm7298Y9nEv6ikYA8pwDX",
  "key16": "uAcbnbAHRLd6xrunTqhgvm6F2eDtuDE9ErV76KvuuoYyPRLNaKecEbkGAKtMMEfY7a4egTeZtJjju7Etm3LoBTX",
  "key17": "4fm2zX7AtFvksLxpLTAELPRYQ3o3CjinYmGe3nwPZpTsPCq2RmwN9VFrZMePa4AUz8nucSUd4z8p5vVJbwpNeZnS",
  "key18": "4pWFEzpDtYkjmdwnDWi6PtMEoTkjafTwdVfHghQx4Wqo1KN58hmcXzRTotyDaxffeQwaPdbJm8ghRQXWZ67raGR5",
  "key19": "4befgNfUbbeYppFKKgSF1hVnQpY5x54A3vgqa2Du3Kvi334FqypdxUR6GZkwJ8f51nVCATZSwbmMmcLpLmS7dESv",
  "key20": "5H2cPM3vaKezEktRhaUGyhX2cUUy9Z8QTEwtiW9BmotWKYjKZFJSAjeetfd2wf6BCpamZyXfFe1eKiJ4ZvXXKFeK",
  "key21": "4bHzNDeVVN7qUCejTa7QkgLEDrQqqjTgZgNp2xoKEEVacaie2i8Fym9LzJtwtCqwNuK4mPqv1Sxfwix4gqRMXa7F",
  "key22": "USDqDQLLosSNxuq97wrYvF8CfuKV32Ew3HV2cQ2TrfWgY36Q5449bebmMUxRhpMXQhwBaioB3N11MMRKwyTsmfp",
  "key23": "64RSuHenNk1U3khqRb6CszGFyb3TMAGR5AdvbEiu5q9fu2rRddpmMyZk7TSwXNZzXGcFZQUWmVSxF1wL7DTZKmMo",
  "key24": "4mGaR456q5fN25xyEjQEoSmNhDPBf5SHXAgG9tAXyYHYA1q1EnnPWAPJusbCuCWBbjJQuKbc7eF64z5NvViAVoPg",
  "key25": "45ku1sjxUySjwhRpQaaurVBTat3u6GVbmf7w4AmKEveNeMnWDNWYm39qXXuzo1cHoL5zmYoLu5cYgDmbmwa8kHeD",
  "key26": "3ujFmXSyzTNjVfKxQhHVDM4VaEycgpNwTsRY7cjFcUCAb6mdvnJGEj1epQfMjQZ1HeiKthV7yBqsSZtytPAGVUQz",
  "key27": "2wa6TL85v72gbtdZakfsXVSipsxh3jkxhdPcdLuNnSJTEbkVcdcbRDUUyQp7P1agEndyNzFvJo4hurvGc1dw3VtC",
  "key28": "3zRXwmZEfjPQ4b3Vexv7iKuMFSroudnRoXxgfYZCSrwYvtme3vpk88GffWV39QztBCLE3AdTyo9ijV2eo7gacYfC",
  "key29": "2oHPXCEwd6hmxmZr2EasqUdLRc4QdCazNVTTVqvPAU8i43gzrQ7rVHr5zE8M8y9imtJYSktyqWokS5eyyxiYiBbs",
  "key30": "2UGuHBQoEf8eGwMaJfyhC14Mc7ypYn7PVGkpCNSF1gdCQqHxTvK5YWEE3h41u8G5D79ujtVE5H2wWfsKVH5cKB8i",
  "key31": "3MAdYvVdTrQtLBdcLyxHyEofzNQSWoM9J8k6oD9rcqQsuFLNEtzS9K4sG4YYrkrH5jRZPgW7Rh1tVVZ3tFqq1hRw",
  "key32": "4joSiB31Ah8ecZQgwHppcXdAFhPzxHCWeLeRJGUGHDFits18YcAcrRYZx5GSbNZCJgq8JJQU3cWerieXCxkqotab",
  "key33": "5BaukvyY7EMC2XQ1rCr59xFsu8b4iEHXnFPUrA9zPAgWfWhpfoN4T6cWWtYdXZQF4P7rdXHJnDtcPMGRx6cdC4tM",
  "key34": "3W5NiCA8oBKCgFqxx3Xmt3WzRvutTRXMEWoLkU8AorDn3iqRbrnD6KPVzEKArHKqw3xohm6Ey5wBZh7yyNPiWy2v",
  "key35": "62XjgBFd49qRMpBmMnRUtdkMFwuG8gtmhsNMzb8nKuU4ekqPsGAnKiqdxbZcDeEBbjdgYd2TYbredjcue4N8hii5",
  "key36": "2J83aDSe1de4GoAXZtfP8M9gGjxAZszmphHb8q1GZKRtKWJ7ZAPdad1bebBrDi2XG1a8XZE1XnKHkL8h68VawBjH",
  "key37": "3FdWgBXF39VfJD5ywXrnP5BGwPURGGBy5TogBZNjq7r2FhMnFfzswjE7L6KGWsYsjkiZ4uYYThPTfzWQDyHAtJBu",
  "key38": "5JDAmHBvzz2coqaFoZAbDR3KBxpoPs5mc8jCMche2Ytq3d2SeG4sEnbLieh1LB4Qy82Ktpvw4XSG2Z2annBNes96",
  "key39": "E1E3npjNGAhDQ2LE44CFFb6UKAY1i318QpX7kLZxt5GUoRdbgrwfeavTVcgdgmkyCfNw1p2Z6QV2nK1hjRsf3pP",
  "key40": "46Sbk3SKyWRzRDrPW3UCWBvuArUsyxfAU6yxZsutL48Q2sF4gNMyh7Gjmt6WG287FU8TigzoTSWHUYf1gVYBDSSV",
  "key41": "362EdyPDBAmNwyDruYm5nQ5hoG9eGfvnr2UzcZxfGBYFGpjQiKnAS1qJhyMj7gqkaMF9t1ZmiVpSpTa7F9UtJWz6",
  "key42": "2UZwNsiHRPGY76GG2LrgoR3q2oFBiqZigXwix3H5j4hhr3NRdnbxGVBYenWq3BJoMAqP2cDzSxYwtReLaZZPF2jz"
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
