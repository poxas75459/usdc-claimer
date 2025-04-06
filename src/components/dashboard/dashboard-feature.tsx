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
    "3D6dFg4Jk3eW7Sp3hGDmPmE8PE5qhUwvApSNsDYNGRL2i8RtVLJUDXyekMRa25u9M5xMKRwBMkW37j4xaoTss9z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tumkb8s2zGrBUcXyFGE81yaom6c5FNztSJ53zrggSyiCXZnTcX9wPbXeD3syt4y3VbSk4eaqwrqs26J73aKjSKT",
  "key1": "4j3C5jXu99MZvg4XyweqYze4JpwTpJYqyRkh5NLzrFGQgYh5sCzLZEprzKvCecbS74pQudvWnMvj3sJvxMfWuVyM",
  "key2": "5izjVsVDjV1NuHKWNkg8Kxj5SyxyZR3zGschvqdttatfpkhU9koxx7VK4Upj1H1Yd1cy1M5vr4JgLd8D7pUhsNQE",
  "key3": "3cPnqvNhr9BbjBpSxUiaxG3urTi2asosahP2VkXTrNr5RvY35Lp5s8U1J9K1f9g9s7gaXMTUBtahGUfHVHVQKEEp",
  "key4": "3GMd1ATMGkW4izHFEDVD1PSAHKZokXkXFMGRCaJpK2uGmwhmQBvZFPQg2Ewxhtf8LSSbn2SrZaytwuFDQ6REWvv",
  "key5": "4pw5U7rJ3Nc18uRDtp4MrxSGKBmrx1h8Go2oSQxdZyYwaisBMShq7UgtAVkvUrsDtjjvs3oLg5EwMt477Bd3eWVb",
  "key6": "ENgZMLqeUM16SheYmg2Q9utnhq7yrn77SZ6cAsAjJJ5woy5Kyt9mxgtYPivUmtvQMxPPuxkEBXzWwFwHFGzad8Q",
  "key7": "2w9VnLz4dtcLcibH4Rid5HvSDPDD4x2B9uGkpV8nMLf6qcTAjFyJxdTnTRhqD3deqGdaxtFsQFrXoED1Z8TuHajx",
  "key8": "4puFp65cQEv4msLyw6ABNJ1MFEC3PjShwPaPiyPS1aC33nHW1DmyWPB45rb4UPHvP5GWXKL7jiw8fVQfwx3AFAxu",
  "key9": "3A4TSJiY4ADZvaTbWXk7UGSaLbHEQYwE2UBs7X9mREDXKZkeMoLyr4A3TayD6g3HBqKZy26YBPw2bh1BbSXf8hyT",
  "key10": "4LRCzqaJBF6t5oTP6fz4Pu2YMueSMpNMLRkQrzJP1xcHLnQZphpg96B44RC1GsjFRqS9mRzLUL6BLKM99P38mRob",
  "key11": "4CXonhgAKREE6QqRJKu3txwsaz9x81kqtwPXik7ojyonZCzLh5cXiaufxTvFQCRDhk2SfsKxQdWL1sJTWUsZeyjR",
  "key12": "3uLMuid7SoCVrVqFGhXSuPhsxzKfAaQuvmVTgGR3Ajx2qbRrSMuKUT9Aopx4YVdFCrZZncp4Jag8SFZxtJtteS8e",
  "key13": "2zAaEjKA61MrrCydhALvTDb8igtfDvUgDzTXkvcMejFvQYGHM8ftd4w6zYSMTNGbgET51KXhFrFUfLxxpkHi2dHS",
  "key14": "9grRnDagkR2Phg5G5EAEyPLBgwKy8J9S2NofHuWrcxQS3fb5SeB6JuPa4nWHGCPWs9Mfa8yaRU2kymCWXDVCx8v",
  "key15": "515nErSJSSHn6CqXDo9JVf529Qtzji1qcN2TFQtejMYrUf9qgcRNcGHW5fVd25oLv6BEgo3rWQT2m2FhT8f9NNH4",
  "key16": "W3r9nuRRAcvKJgKQ6QMWFrekmZKEmK9GxsKtV8Fpaqgk2gQjfYrZwg9oRpeugRPsVpw2NUUc1Q3HQrF4wF2qBbL",
  "key17": "2R5TYDJkLpjMik8rzmKkRFRTPUsPUTGPKLBJCVyExMTBi84AMRUXNSA4qFzvqR27bQT1DmRHuyNWd4QcWERprBxK",
  "key18": "4vHwXiqhYAya3E2mTa8pataEQn2EAnD4moMuTn64pTKucddbQq6gP4PfXagb9Q8Cj9DgV1mNYbevLBat3eMtBgFs",
  "key19": "5UgMqipFL23inpTp9SmgzrJu9hZXzLbnnDxq6VbPnWkG4fKuhTDE3ZWcdMkezUn85yFkn2YhCducMjGnxn5pUrE2",
  "key20": "5q3bG5BL8SqFhiN9C8rb8JsLkRNbt4CpKs78zTukBDBUochve1ddj9G48bFWBeyo31gWvLYRJSwDJ5bZuws4ax2A",
  "key21": "5DhV2bnbbRRqY3JSrLiZYYp9Yt8LsALd8dURFC2tZVi17yyDV6c1o5KgrSwLx6w8pUoHkkDQjmkdfMqTgyPMwGMm",
  "key22": "3Gv2zQkNMH9bjHF6m21qGFyM7HHbBn6MTKhB7xeMv2gpNLKv7X4otPJ4hy11bH5yyveta4qp1UnxBRBXZpCj9jEs",
  "key23": "5MFfRRHKXJiPmm9YeXgo3WP9qSLQdEUPBa9ccRePDqFTQuKBfUhdjXPmXocy7Ep5UXjAYuSD77om1S3Zn4tV5Beb",
  "key24": "3mrUBYwSGqFQbCm29VTufuewjJXbEmP3s77FwpmpHTmCDQn9NgW5aMnUfxhe9WMTH96ykiL9bCfpYVJ6MVWVUgBJ",
  "key25": "4enEypTNT5bkgdi6fUS6sQsAJmbM3LZihNSre48KhXu3TP5eKwz9aKxCYgdGiJ9Khjq8eFgHpcXafBBC7mKqhEjq",
  "key26": "2UWkv8ATrNWaqNGWgRkTVoUtGFAcHb6gjHF23uk1tT2RExrhmsPPGixtaESUCBRUPkWrYM2yDqMGcwywD7LPww77",
  "key27": "28Em2sxMKF2pVcmxDjZX9CRUDidTfkcyCsPNhjqH5CU7sGPzUyGhaFBUxYA96FczQbC9xK74RsRQR9PNUj3j6Bd1",
  "key28": "4AeyP5bWWyj1hD1VCD65ARsXQ9ouVcpHYMSjGydyXGqewV94oVsHBddJT2czrdC9gipMfRQMGTniRuqdbQ3ctGnc",
  "key29": "25xR3YdomKrXGGnomXXY9SjhcVQygM3vhBtDzSKW6z7ohNBPZtxqi7nWfFP3R3qLZAjLdQFDHArsjQkbHk9kuq2K",
  "key30": "3gHWmUaEfhxQEBiMQtdMzjLT3h1uML8N81D6rH5Qp92C2Uf9W69WMhXBxzwgVpJmt9r7ovdy56oppRWH3ojwRz4j",
  "key31": "5yJUvoBYL3MvSiNQeGxAEaB1qyB5Qy4eTPkvy4CPGfgJc3HE5xYhak3uWeN5Ao2yV7dsWXmTBQVTzqSMA42eVwYQ",
  "key32": "4UDQb3EH8NZjrMTZNPiFL3aNc4aCgPxHrue95wEH76jkUAjz6wLuMkGaaato5RFd3jBiUzGpJVcC96xnUXyy1tz2",
  "key33": "2igaTE5RqgSiusT96A4T9RM1nktL8RmmuNXBCzJzLn8zFgD835cGWLQtEWgL8rvARZ1a19Lev3upP6QVKRUzt9Jr",
  "key34": "4E5WMGAT5tk92jLu7KNXdVyXE2skLANzBPtmSsEUUkVeHuxStmcDyuzgR7mmQ2ZcZRmT2dFvPHsjPzLunrBp9CS8",
  "key35": "3oCJ3FnBpxkxMgXWsWcv3umCFDS6ncmWTKqsg5uy7zP1gyvbfrzivDz96pEzPwpdfpCzz99X6zTPzAjzjkDX1duv",
  "key36": "4M6ar4JShzm2a8mML8andP9Vp6PoYy7xJ4k5HPiY67WJQkHyxst18qzHQftzB7hxsAPxTwhjqRtXZ6mBFgq8pHut",
  "key37": "2vzACHWAfFc6YK1V4CXySxU7ds7QuzcZq4yXhE1bBQMwEWZMfDfjzKaqsNeMdwhmCZ5oUj7FM1iMzJ796LgTfvd5"
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
