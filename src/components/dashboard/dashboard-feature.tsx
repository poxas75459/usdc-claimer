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
    "5iijmZfnDaB5kZNDACVotzA6AuEyFAnuePxyPUDnY8uc2Lbi9AdjrsJN3FnF5mvLQAQEMELM8fvYg3GnkwvpKWJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CnDF8Ks7Jwppujioxi3KwHLmQLBk1QDDusox2smMeZPdXMFH1976UzDMWXZgw7KQaNpvr14nNrVxRtw7i7ittSr",
  "key1": "5cGuAGopciBTMchMavHtz8R83dnNeLEnzXvSrAJx8dwdGdABKdA94V5xHpkN2VZS6k1GV3LatDQuoDT5zPxn2kSw",
  "key2": "qEh3whC4dgEKhmc4Y61GvFYCyq7xHgKunnqcByCQSaz4BVJg8FWoHdXCU47kwLGSH2oXebqi7jP9Fdxs4DVMYpf",
  "key3": "2AoN47L3M2gFUunqp9j14VneBzL1am3kbf2xsKBTxCM83XP3X7zBqZKefwBwRSvp1bVyn6D57f2AWqySngU7dAhK",
  "key4": "4LZW3BigCfFYwqpbnyg9ALEkie23any28VDoADfph39FqWVkKwTdYC1dVdADZSZ5mEZpegT53cfAg1fLzNnMbCci",
  "key5": "5KRN1rk6jT7Cb3sshEjLHpgHo7uTF2AmQkfbf2o5C1yMRNTPGYLhSV6stjDwA3znscRwrHeDVu7DdpvTs2Dapmeb",
  "key6": "Sf7dtFdseHySwG2fFKzdRkfAt8c37VVVydsnc6oq2oeyEDAjwjBFNivEm2dwk5nynQiNUn9d52sy6jf7ERKUwWg",
  "key7": "3iomZGcKxQFpLdgLpMe4FSEVZn5SDbUUdSXicSYmc7qoKg26ggfYSpjsVycwfYPvr6gk3s4jfdbxHyE7dphpfGK2",
  "key8": "5qbxLrqdNynGU85fVaezYpDwjs9MzLDfgjZRvMcRgJbBjbcLec8Vfr2r3u6tbVQ42KSPwmq7Czugbsbr95JstDVV",
  "key9": "5f6inZW5HTfi49TjAF6rEcbfMi4X3hEYceepKhVSFgcxyLCLew3mNgizKACA3ixq2Np3Mfcf2RfEVEC7sAVEi1ZS",
  "key10": "21zNbnEX5Btp9dUhKGMRki5yCeVLmpVZf65zqghTfCArSAJ3MSwFG7eD7THMocuhmiCJvkh3FrwUqRyp769Aa2pA",
  "key11": "zpbdpjAct5YNb2Vx1j7FqXZoWskXRvawJ51kDCno5nFj4DbChq3DpG7L7SEjryKkbX2JpyLrNC8fbrYqGT38nNT",
  "key12": "3saxBxG2msMyNCGNanThWeZ5WidV2j6TDB9mJMb64kxQ4EFFiJ1NCnnVsvQwWRY4xRSFrasTpbo3XHNxcjiMiSBh",
  "key13": "4EbrahMBAG9jFPPQS2tgPAhxmzxKt5vCnY2Kvy5hf24VkKecnRvk3uTfwSN2dUbhCdX4Bw4t5zph421Wfvz1k74N",
  "key14": "4omZXzB4otCQyw5jFukCmUJwaTpSvfcFdKXkrbnMRAv8KCJqV43fs2ndMHDAgM9gbW3bnBuSZs7LugV9TvyxUEqw",
  "key15": "5oQcGKGS8XWwnc8CXRgMGtEn92dhYPyvpfpiAy91ZEPoVi3hfmpdGAvUQwxF4UQ2C9sWQQduP8xfpx4AWAtWhhaZ",
  "key16": "4ivJwkg1eSjDb219H5akuLFtv8vDw9gzGrkURyCaRbppu3gWn4nmZHybEpMqqEZdiJAAEK6jr4pjegRoCLGWoaeb",
  "key17": "PDBjasZX2G1C1cdseYiVmdyptEBktttSJ3ayQy6AcmWgHh3t1Xt6GtKi1EjenwRVeXYMmCH3NnQWD8P23ycHDVS",
  "key18": "23xHexXm4hphWQC8pS6HKW8M4bamkbjCfkQZoEwcbhEt4JebrovxwoCrS5sFba3gSZ2H2GKP8gkp7L74zA7tZ8cp",
  "key19": "23Lj5QKZL2K1KWfecYaGwwo56cEvqi3891F5cRdro6xXZR9YuoAzVyuh9VVAiiwk8MQaY4L3eFauLEvriWwscbT2",
  "key20": "ic2eWHtLw6ZKTQPxgYz51gbZRwheABnnKeuWAPCQYvEJJNWKBVhGNtEkJ44N8ZCs3rcj4hFDDeBp7z5sSpedqWd",
  "key21": "2MrkZYFkXy77GhXnmGbhnfwGX6ZTr42LmJumvn92pnQB263UFRf8mDvya7Eki3wUveF8McWCAKqUacVsXvif4fgn",
  "key22": "5Nyi6NwP3Z3YauiLZfjFbQ7BRcV7JGBF2iGaFa39ew6VxJMMbEF6p64MRj55WhPGreoBVewzfm5hgiDktfRztoQ3",
  "key23": "3LDyAD1DH19VQBJHmSMyKDPvK1pgAMzjHFtVRZCNKcWfRQkdRKFmBRsWJwpMtBSctwy9Yuq4kVkkPz8maDbnSftt",
  "key24": "5gfyw7P12nyUaoWD3wFDSGGFfaMxXYHA7TG2yJ8yaQ2ufN8yebA3DNELsXvxgSHtYzLe9QSridxvzauicWdU9vRL",
  "key25": "ywLopJX7bQxh8ZpoaXtE5ktRRjYfQVMCfixfuJmaQqoxvrjtXRZNQvs14LynsQKgZnyjupVbF2NjMe6t7uxj1Ky",
  "key26": "gVHPnvtwhiDjFbEpb8armmQh4pFkdtrkqazmATGgeWEEnej5ZiEhcp5hKQnu5c5M4r59t3pgbJ4eWj1YJ4J1xtS",
  "key27": "4aGxMp57teGqbf1z6t3RbuTsFXoEPsQo2K8z2Ccf8nJtmWRD3gN3bdHmAKXveP7e2PDDjHHc8jPLrVxo8UAQhPKy",
  "key28": "2ujq5mXc7uyxY6wW6aXxFgxi16A5XBFmVQqsLWqRTEnMhhGvyQFQvR1iYaYfv3SF7Pcx48zGXa8FpSRb3vSguPGu",
  "key29": "5cr74175ur5bKSAXT2HgTfuwf3C3JcWjoBZVatyT1DrTzFd8GDJUJicn5etprtNuiZhY3mUBeC68ihX9NKp6Ufru",
  "key30": "4AQfTgtFA3izNBJDfkoy4ZhkG7a2pkmtxfGoFa7irqt9mGRiwHAqWT5u62bsMDgMLtmop8D6SY4UdSFjsPNswzWQ",
  "key31": "4dkjwKbGkzEhCMKBo5UeZnArRCBm5BBD3tP64ykcyibuHARzW4227sGt3LkkbM9G96vEzz47DzFwQGX45TJaCg88",
  "key32": "5cBKkaqHNM5NmUcce9A5DqEEnwS3EKEor4mWR8p6xro4wHPGfRZZ2x2WXt6tnE1cmjvdh5fPTzGXCm8D193sMnsD",
  "key33": "5sWSkQFqhrnEtfiXy24XoFsh6euEh6VtTqVNz8ZbWo4m4SqwUcN6g81mMUTjizyHQqcQK44NaLPWei7f3Jj8UCDM",
  "key34": "3CDB52TFhVViud1ZL863oju6Ztt5yoMGKDEb8d6yDQgiy8YZwaMv4RpkJ4MZZR8MjZHxS6fxPrkZVKG9Bxfn82XS",
  "key35": "51yoYTnzyxMff2pb4CWpYCvQKyvnHcoXk9P7E1uPJUjKpXgVxHkzsnphQpKe3NMLWn9vHWbembsQEEQFiz6LVw86",
  "key36": "2GVVXroLFoxCgjgua7ccMjzRZ4HkdJTU35EmrKnpKUxmP6LRWr2M3GhGZUsegfvEEweCdmprRfCwiPL8NkVHq4M3",
  "key37": "4EHkRDuoaeFm37VmGddTaQBwCa6cZbja4xTATByYdgn4PFFNBVBv1sJ15diuAY4kYi17m99xGHwiqvGx5E1LX42V",
  "key38": "2Uhk18LeCPkDhPuAnLhey5tUHBVwvq83ffu3uNVcdKeG4Vfpgn24Cq6cSHixtUgUp27zSazDNYNKLsPnTWrTHxgZ"
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
