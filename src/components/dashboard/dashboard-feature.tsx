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
    "23MyFNMQTMetN6H1HGSapzaKJgYxQRsaGXKmzDpDsWx3j91U6h3kZb21nofbKALwVB8VGXcAjS94bFJy9P6ziCF6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qWQkx8PdEaiURV5nDRqZMFCXjNSiRNTDgaWFn6pgN6NPGyWYJVHKccsRDYh4ufCYxn2rzqCuJnqo8Zg8JrHM7Ky",
  "key1": "3tu88aCQkzC5WCJXU6R8SvdoHdeLSMELMNwdVz6DkmuBDr9qnvpbqQE5Dq3Cosn5QUrgwQWjS1a5o7WmYVEdZ5A9",
  "key2": "w5rry6jifKygSjN628Vamaj5cFLGXQWnz1krLTZxnv1h459TtVMtzafaJynjU2tV3Fxyh6WztuMFBmN1egfAG7G",
  "key3": "325aVGHCqJnbeNNcYpu6dQSU9Mvq8q672fbVTcKZbAARydm6fRB6ooMiSkfaEfiY2Tz6UkTamAG6bG95gxuqa215",
  "key4": "2gbfFttzRMvR5oHC21MoN3ZiDPca68Nae5Md8VFQ7cork1ZtcqxdyzvGbiE17H88614mLES7vb1vCEzin3CshZeB",
  "key5": "6N6zaXh2qtaDG48UThFiidT6mgQj5kKXhwg7sYRW6Hecbv1dkTyr6jnXyMrkXNrGoPHYY1k47Fqn4hKqMTaqGFS",
  "key6": "2YFswJAhnGU5wqfm5QH4o53XB8GaqqiYbxQW5Py7sUW6pqEhtUe1WPje2gs3arJ3nmx74jo8xrH1hMHbvKyiZ9vi",
  "key7": "5xmCEP27vTyWZ8NPDYTKKfGN8T4vdgb3fyqafhGgmVoqQXPWavXmzREnpA5vhYyPHb6fniWdsMKNJ4L8TJABmnh3",
  "key8": "3hFoBta2L3Xkd5Bg1sAzMky6Rh14tHVg2rQNphR1xTrrMCS76imW3eS4C3MJ3Gz3vMnG3CKnT8bFFhBx7T854RVV",
  "key9": "4AC6ung9oTyHLLf4zPLoFHcsMLdS9SCzE354n2iJXt8NTAdvAeRGtYxzcE1SeMw9MQUUdqUbkBusuU34b7XyrDfT",
  "key10": "UZhe6x2hvBgMbEux3qz3qBJ7NyQEeqdRRz2otPCbKGp4rSfn7mnHQNLWu4AF9pYYU6ckSidAyG4ygy5C6C7SPWn",
  "key11": "3HamKB1rmh3fPW773kFPdgde92ezmgvUu9aHZNZttkGjnpmjauuHNeEjPbtVJoUx2s2hWzRqBpjWRej9rZuYkDsM",
  "key12": "5FHPhviXrVB2CynJ9nV1Cc1QqeiBBQi8ZsKRFU3pvQsCBxQsT9JZXG1HPzRjjiWiTeJtagZs34P73X48WfBWMFy6",
  "key13": "55SLWvmHh4vdixZujaWvJDkSCeXPqejFrN7N88Vjfaxdy99A2JT4NQz2FXmr2oWFLJ6B5CnDcE1jRG1PpQaJHJFt",
  "key14": "5t7Db2gswAzhdVVpHU6VqLhhzYju9j7YfQt6jBMqnJaHnZ4BWd3GLCDXeUorNS7u3WpgU13N3rKbBEjr57miDiU8",
  "key15": "4BDmRDCqBd8x12nZqvQbK5MXwvUTUHL1VvMxWyCWfQSGkD3hKwErCjGqRnkvnV9hVJBUTufaTXWpj2JGwRDHvSP",
  "key16": "YXXBsQFAULDaJUwvVMpakBnXyyyQgSDR8oeSsH3694KaHmJd2enrRSvW94HPgCXWp79ifCTLZGa1fa3pcEG4ELZ",
  "key17": "T2QkFEjP5zqUJaL3P4WQFTY5PtxbaBWaPg6JV6kKgFp2cS6Harst6aZffVF5JdXPEMKB3V8YdDkxBsV2SQLQtV8",
  "key18": "3pE6ooSV7QZikUz77ShAvoHFuCUksnKezozxTLDbJqU8s4yYbQKNzQbqaRC9ad8kPc1sL5hLRhE4McKB2LgbnTcK",
  "key19": "5qfQf2yWygceSYgMJukKbMmswvaR2cGgM6NgVjshhUtZ4tPrGEQrk39wz28esk26yXEiPT98perFp762KLR3yczY",
  "key20": "3JXyTmLep5o1S8AMU7LhXV1dhN5X7im284UvdzQRQxFPZ5JNzgDusmREceCZ1CjpLe2sihe3WYK1fopvdqk14QZi",
  "key21": "3UYEFetKDi17zkkkWWkXfmKx7iaMX8pD3w6ubJUi1UFqJcFSvvdah1nJyE56tLmD4BcArzLCXri281jQ8aiXhYDN",
  "key22": "21iSaza11UXpZ2QwGcucea7KEBXAFGSzhC9kmDTjbK75jjh8BLAryTRiBBzMg8w4uv9zUQA8uzbwqAtZuEXZnSR4",
  "key23": "2HBwHHRwkT4cCgcMWksTb2DUSAMV2tRD2RZnUiafWUh7VoccjskjwetjaAWLk1aVqh59tQe19r51cgacKqcgC4Sm",
  "key24": "5Ea3iJWvq4kisRT8xyoJEkWEyZpqgUk4Z9w1YEAhXcttu71VScNENKKrjn5AVDnkLV1YtzJHxVN4DEpBz7ojRvmW",
  "key25": "2N72qKGhFexczCm3L4cnzLE4oDY2HTsMJ7JXaXF7u5r3dSQjTR37Vb5pMzoRLRdVie1FMxVgitt9dUtBYNxw91PX",
  "key26": "3hHSyJJVrSmx97VvPqnmupG8Z12YEHaiSCZWGXrmB9y4m2CHHd3XVp4fiVeMan5m52EobTEQGf1BVPg9oRwMmoZy",
  "key27": "2owCMZ8zbN3CTBmrX9GrEhG6PpQmyGivyJ3knDNRAivZPiBZFUktQgBhn7kSC2NAXhfwWi8GMGMkZnGqYgTAQfV",
  "key28": "61joGXnoXDLGx5TouaHLiscQyRu5zGw6tro2REsVmu4d9GFh1Bf1nJ4xervDcfo8tpHcix5BRzDCY9ACSm1SVbrP",
  "key29": "4DxLAE5fgbfEM4W9mgNQe6KEQGzuKadGDRsqtLVD8SAQ2yeKSpAF97bh4HCFFjyGVSjNVrxra2yP28Pkg4hcA4mQ",
  "key30": "3JsXU6GKfewdWAGEeef92vvv5uBJ5P1Hi79RtXyg8gDfmUU5wdxKJzAAL7fkMGj2JZemRfvgLKSjGaCRcE2EkMK9",
  "key31": "zNQJ4usc5cmofzDGwktvpnepfzx1kcimfMdCj4xQX5GxC5pqVwMpW3xrubreLhVJjPt6UdgC8gpdQkmF6vTkagj",
  "key32": "4qMJCKnj9fUACMAeAeCbKZxLHJyP6zCQG65JTmRsJgiBwKmTmM57cvtyaE5t4B5BWvr9PK3pfj39XDCKKxWGBvxv",
  "key33": "5ZjHKZaBjaB18iuDvRcMxTb2QtridVW5wQHordZ1kz9EUahW86yaaJwsFsSCXJfGM8qfPqsieKJwnjRDGjfJgCe8",
  "key34": "5a3a2wCWbEkidstxCB76adT6wMq2CkauH2qGw323dEX1m839uVz4aMRmBuRseVDC763YL49r1joiJvmBrNiXdfWC",
  "key35": "5xFNYsrm2co7q9PutKZM5VxZAxfqnRt45mtU2sQJ6RXATQeHy8ueRV34jB8f5Ecpmx2rrtQeHL4KFayoPPoixx57",
  "key36": "xip2Uos7DmYcLXBa7UiTpLwJXLLizH3giJ7HpsUZ117i5736uejpuENS3jdw9G3d4KP97bpuGYFNvViECQB4GvU",
  "key37": "ibJ86bD2o7d8BsAkteB6GByTthtJYmvavbrb655C4FpyZWoTWawugA9A5AKgkj14uF8uNmUA7M5bZoSGPnnH9pP",
  "key38": "3oLB8mKH2JGmxdgKv3JhD17MyvWiCwNmUKAZxrq817woNcRVpvoiKdfZdFyENzBqDgKgLwTNExF8Hkq3PniYPBan",
  "key39": "3esgeDUy9KsqhGJ8NdV7neGdHrs7HpPdokm789qxk9kJtV1n7go9sWwYxnZRKDUckbWRV29MXTd8CeQ7rGeYQK9m",
  "key40": "3sxuhdapCiuHF9S9Rc5hYPC1otw7qg1TPXahGhm3xnCzW4PPnC6BLunKgMJCowpveFnhiJgjBzN4Rk4GuBNkGpuD",
  "key41": "4ADq3cZTk2yfjGQCr1S4ruGjEo8bFwtWHB9AHMt84vyNyxk6ZM9siBUzTVYFXc1D9VESyMEaGh9QUEvM6DpD8PyQ",
  "key42": "3U5i6VPryDAbkZHQpsuZzRfEqAmTMYGThSCaqtvCkpkZYshRyMuEJtYzDCeKmaDMfbPhV2o6HBtB7gcWnCwPDyNr",
  "key43": "38YZbx9QYAue6yYLHnCVMzuzny4Jsy3SMg7rVVLj5PJ4zkaphkaRiVFZqYpW6rApY9GYUkdBUgMzqo1RnE6vx7F4",
  "key44": "2uBSRRrT6GmNfztYUkSckfEjRzQGt72A4eFuwNWV9UxUodVp7bJnEC3U57bJMjqd68VPB56a6TSCEZrQJoWSTYmo",
  "key45": "5Xe6NbLwJRAgQP6DDWPm77J788ef8BVdHS8CmeY6JQte7FtSfZvNxHTxDgufApWR5mjSytJySXTYcCf3bACUDqd2",
  "key46": "39XbEtd4qKVKf6m7vm7eLbzhbfgTWSqFsrNpqFgcY8iWAWfTWcmVLdLtepbhwYwNoAcTWyuiigqKU2T7jqW4bGtw",
  "key47": "2R78LM3hwJu2hf4mjTNkLoz5Fq8MeJXZ4eSXGyVth3LmqBm5hD8j4MH2ni5JYarBQn5Y7yCbAHrBK8aSdJDZ7DYH"
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
