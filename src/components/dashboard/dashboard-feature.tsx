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
    "4CkhK7YDX1hXwRz6akzaZ8ow2nk1N7LgiCRCSKzMKieQXSSyRARHAVgt5usi2P2MfH97JMraDV1TzSJTSpeq8hd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58VfCsh8Z5EkduT9jDUaBnf5cLRaHLD1E4yAy7wuzrLfeq1RP3qrcypHW5mPvZYeUGcyCeWmupaUQi3Mro3jktvV",
  "key1": "563wKQK2gj59Kj946r8j7sA8xJamGdd1ppopnBaDiG8g2Z4dY9HR2odqX4fyGxd7AXVTZumxQdbhdPjzKTdgVfHk",
  "key2": "3Bx8adqjX6HG9KKyStSdcwXhQ6nye7L3xwmybzXtgKGWtUnYjFnZ8FKDoKGrmKyu2SY5hYvsRPaDFb8Ntax5mubD",
  "key3": "jb8b7DPhMKbcZH6R9HbwNUpVwsZgarhPPoroHgUmk39jwiRF2mKKBE8McjQBcvEj5g564JDSPNiwgxJiCeBVFdX",
  "key4": "4PvuSeDPpHKxkAyjV8S5Qmvyhddr6zpz48shFdfHN6Qq4dECjfmghbHYh9zeyhy4inGpGZPyEFHa87s2yoiesqtg",
  "key5": "2JmbVJDPnT5j6htZ4SiLDjeb9sB9Y4uynL5CkXi6iqEH7XkeWSxA3cQ1rrW5VwX3JMigxAhqdHMiBDiE1pLPfkLG",
  "key6": "4ZQ7EDVHaCjxFhQADZMVYfxrqX6sArW4X1ZAmDjj9Kvc1vK5b3S5BCSUdZgDBmj3Gj6avuaZYVpzuXUP6eAZFwjY",
  "key7": "onFku7dnKZvQbwr9xX9ydTz3TkFXAiVGzDFkVceznaJrmAj4YZqpZkNrG1YHm9NYhSJ22qJL8ia3HDz8ZmbHqVW",
  "key8": "52EyrJKJRbi5F9rs1jX6PaK5e3i5NbajuJLFTVrxYtdsZ6Am6iUfDu4rG9VdMyYiLTm6jebLrALTrw6bvqGP3U43",
  "key9": "2KdZzwN8mMyrpVP93EyqGQKk946qAgPatuQ95wU75pCE3odGQjB5QWrgwa5HgD8dx7MZMBHYLje9DNvSViLNiYQ9",
  "key10": "5uc4iJXbYWVe1fQMETrhS6pM3XykWvgUqZNnF7otLM8K4GFFn21kAbvDYTigqPeBuC61pxwudnefWzaP1vfLpVLV",
  "key11": "5fgRcTuVV7MZFj5gW1HnM7wrjeV7bSe3vxCAQtuaSpfFA4uHQHKE8gY8br1GT1e7b2Mqcjhv5zTVr7xRJw69MbNA",
  "key12": "2hhDbSKk3C3sW6k1vMYqhXGH1EVct2R84HE9nV32vmvFguK5kEmMxEBn5Vz6B7c3uhTfHXGfWsMBnLjW8kCDpiYS",
  "key13": "4WdQAKbN3ExWx4k8KCNuDtKBkzhgPAPksaXxsUPfMc8njayWoZ8dw6fcSKawFdR6Y7rd9YHL73v4hNZrytgj5Ao",
  "key14": "kFyUVyTAoeHQe8AGakxGq4YgT14g2XpjrbRLCCcHzyiQctRKudy6x3CLyUWJtpng6TvrJRG7pd8W8xca38noDDp",
  "key15": "32smZpGKApAXQDiXi7A4PuYio9jUBnTBYGtWGRSjkbkRbJqhiqtGctRSpfQUsvMDPgxJ392aDdXQyqvFUagpVnEk",
  "key16": "2MsRVRtEesnrHPwhPB1xWJE1L4QCtBzikSx8WSweXL1B2fR2DBqDtCt99BmfznCyzg4mP5M6ZvBEnEVgEwx5cN1x",
  "key17": "2y8sw4Bn6LLnB4ThyqQ27fqem7HtyeadboARYMnX1vdVgibpTgs1WQ6y4sB193fKgKKbQ2spYHU1Xm5waVSFGt6r",
  "key18": "2BaHadMKNYzfuENmTGeESahW26K567Q8dxTp6e5SQnPQdckrsSfME2QcHW6EwceJ1NPrjbXnGoVWMn8ieKKHpUTP",
  "key19": "aTGz5pcKq58ryGX9qNXARyD6TCXWzkzLA2oNNWEMqsegaisHyFvpfqpAN31nPbiyCvzm9KQmoXZY7AERPLizA61",
  "key20": "C7QmW1WdHs7JJFd2GtfEB5fZyaKUKmKyWzwVy1QZ2usCs757uhDZnibZ9sVvrZCHAqnwv1VzzNMb2WeZeeezs7j",
  "key21": "4meirMVwqkMYyGYUKxnHZBugKmEwiwWpWVUphz6VP4zTFf7bUwkoLrPUmtBtpKzmjrVCm2FXqu2trtGZNwWeLsVr",
  "key22": "4ywoJS2Cn1gSikKB7tcWtebyvJCnjH6zeRP95Y2gvTyyXdkMBpXL3TAF8nU4G2JisFXVb4nWGAx73AS4bBDXnQPU",
  "key23": "2rYH6V22QLNGcKf2RbWcFHeNw2pARUs235xMoW1jcBvqg86vcHbMbpMHraDdsDBHmBRKWrSGdX1hRVMWF7EAM7vT",
  "key24": "3fHJbV1KsJhmCYWPcLbczD7K2kiZvTYNP5WAoiR6uaRawCh5CyJVbwYecpKQqeHUyFFGxUV8ZLkXUdMKJFXvDpkq",
  "key25": "K6fojKzifkQ4P5g6ofnKjaZXdaTA6ESzyX5vqTDtPmaBnuUuvdXpRTQwvtX6mggNmkXDYDB2S2upGwYMrwUevVF",
  "key26": "4u63wDfhjKL2j6mK81KzR5WPuKURyJTJN5866HuZY9oCs16LF7Mz2XL2dsFuzPytYNgE5nGUCfUkq7Eum42e1JRj",
  "key27": "4nDLLK5TPbo1aue2P5EnhdPtb6iC6KY59S89fiaSnRM3nnfb3jjnhy9CsbBwJufpXhD7jP1gptkhQCxES639PNUD",
  "key28": "7g8j1D5mvTYdu6cpzon1828VR7zjecVEm3Nsk9nPuqKp69YzZVdoTH8DcmCDK2rJ3bgqFkLpHGCF4LYThtMKBKX",
  "key29": "5YnpNyyvaBJ69a7gzp2HRue8QxdVcRg9uRXN4vtnvaFNiso2jW851HhxygP8qvchfbjcR9tyqZVk3aTmHVsTAJ2z",
  "key30": "4SmwgRNXYKfcJwuYrdUhEame2EmbeXeU6t9rur8kMncyXACszcz1J4nAwHRcVMwbwkFE63rHiEVh5j7Rqm5WtWNM",
  "key31": "31oPG7VryF8buXRhWiZzMfACWSS5fjVPxo9N2VWpBvUHb6CqCTgqW14ePZMNeRBLoYzc95zkhNSuVnH6GabcQW6w",
  "key32": "3RcbnpUAZA4iaLQx2CuAkHZwtMgwcU5mPFyuT9kSKZ4HDd1dMELaQd72b4WvkZUd8saSsmNn6cUDc6kGURnYJdad",
  "key33": "2TSYVw2X4XYd1dxhewcXScpceafjahR2AMzdLHbzfWcR7RX1kdUidwk2JoMgSLC3Y1x5DbjJjty7k7jQsAVrBx1S",
  "key34": "5FUqigM9byzUEzFtXqyGoXPNQkDwsedkyf9PVW1JvYL6vyzBYGwpb8e6hPzkFxFPpjewucAXnsNswutbhEMRh7ac",
  "key35": "5jzzdbZsUkTUVoChYHiyjHcbVa5jGEHCdB1i2prbwpcPN6sGLxjXugfyMZe2NMWGnmY6okyMRdQDSzeaMiLSk55v",
  "key36": "2dkiJzAcBdQwNYHEQvCB25zpSGGJ7QP7Rnvz9pwQ1L8MzPxwZgBV2sMd31B97zze1X82ntnCAFopURregfd9b7XU",
  "key37": "6zJWQsP5AJ6EFrd58fEBpwUEUMguzLfys6fM5FcwBxs7vLmSyMByXv5mpEox5nSGZorpiPSPqrx8PGPspdCNqyM",
  "key38": "5ZHZM178DfwBxzdeo1JNuoJMtgkJqDPukkfc9p1Qu3MY9DVTV2LRjW7mu94FcX1co7YtrCFv4fTeD69cuY5L1ckb"
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
