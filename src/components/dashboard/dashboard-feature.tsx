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
    "2YrZiiGGgSbxC7xG98WTa6Hn7gvCUBPgDccbWSrsUsw3mvkumcVVo8JQcmKenE7Ses7zA4sRyLc2BCC38xTpwz7h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LMcSeT31hg7gQa7sbADwPp1ap11cKHMT3BiT7vRTozvXSAkpnaw7kpTbLGVBSx4UQTmkYpJPNK3X1em7B4uFZ6H",
  "key1": "2LqtMtxk63HBUtumrDd7Gj7ECWdtwX8gKgN2e3nb6wEJF5U9iVJhRF6xSXWLG7RMENpFCskjJFdrYMtrPSAhT8qu",
  "key2": "auon8Ygi6LHiCp2uYVkeziF7ZDSv42M7GSBQLsUASyCnGSVRF5t1rbzMR2GUgotd3PfjWdefoRiScpRWgWKsvDe",
  "key3": "64R1Qx8a4s1jCXcH1TWyRhbzhG5V2PKiuxVU2yBZZdtskRHEdbT2qpqiAeKArAe2c9AdNo4FgqmymNRm3Rfk3yci",
  "key4": "4EqEXJmbLgZY8W4vVfksycUavBhbH36DJTJNyzm6hGjwrWnCazyek18PnNXBV8XzYNRvFmbE66Hzc4BW7Cd8YmCr",
  "key5": "57fKCwqETJcnfaaVEtZddFxzMx3B4m2e5b8VUkusDMHazJLMvE73mrUwVagiX3FdLe6hn9qqATWQiqtykmUeDpeH",
  "key6": "5RkdkVa1YAXKgNUJEWkuHgPeu6HriUrrbTQEGqYzbLu8UZZym1ykqbpuxdH39HWpnrTH1EmzSMfnqwisC24Kvpj8",
  "key7": "5Nx4WUyzUvquaYsqydzb46soWfsUFvqkVkimXWuf5VvTxuWFGdaaiXrRFUU9S1P9NTkcdZUL5f4dD2gHkE41wXGD",
  "key8": "25iKX1dSXbGUjaCntLJAZ1dktEQEer1PsW1eML65TctRg9ic3Nhir3k2PE9yESXdiCpHww98dHKXp4oMrduDAMQ6",
  "key9": "5jkVmvt9cwxWKEMNfJWesUEBXcuzEmm4Q2GP4q3uGxddcHtp4ZLRFQn1HLPczNQu6kehEKkHMfvQT55mRC5E4CUQ",
  "key10": "58mbzGit5jy9bMjkDRub5jA9pTiFQVCEkNP1RB3Wxgeg92C15XmsNDxakqEjzQeUjEmBL6nUh8cc8aZR3z7qLu3G",
  "key11": "5ipPxnzfvh2ok8CYR1zRuJBu4f95fYoGpVtP48f7uhzgYtxrASRYwhhmbzoYc3PtyxFecom1m1q3Q9ANYXH8p8B9",
  "key12": "5ZTUJvtJafHedHMrSpsa7YDuy2je4egzUuzGjoyLanmuJeGmzqhsHe6miU1zTy5AAmCqfJLk9fNRTX2ZQJ62iRB9",
  "key13": "53D8iRgWwr6KXCjopTbeNciweSqzca9E7EvgVdS51EwwYUiEZz1U9nSU3MPK9qMFzbo1bQiyrpjcTJeBzMGBRq2A",
  "key14": "3yP2BMCjiggTAMAeNP8NqBmsncJakLF1ZtkwLJTKHiSobZbhttnzWE3S5TarNBNTiv3Z63kwDTG1M9DZkS8HpdpF",
  "key15": "3VdHX12Fph12gizMev2tqHxf3mtwJKuUMg4wPu8JXh7nqijzc551GgKpBup3GbmswqmexqPCUTU9zSFgpLrXobFx",
  "key16": "3L4UVbPsvjn822VXkgXeQTS8ZmZP4uoEmVah1ri1u8E3FqgjTrEbRgXwP9x9egE8tvPuhLoNzYe5hd8qQSHdz1oP",
  "key17": "4KsqEGGJ7aJeXJRuYKW17CyJirrQmra28d2t3eDGup5KF9TfiZdgw8em3nf55Ty2FFa9AvtzUeVF844npJ8qCNNz",
  "key18": "MeQCyigqnAmqN46FL2HnAWaVnjZtyqPdMUqPdmkneWUY98dhnbHTF69cKyuAMfBzhgJGaczxy24ffMdNvWwS8Fp",
  "key19": "2gQaRzuwAqpMw9ugqshWbudvrqYcK8nYtrstbQzpXPpQxDmFLB2SzckJTfv65b5AbuuEWbcSz2xBCk1ZzkLVZuVS",
  "key20": "4tkwVJXKVpXX2ukCJZkkhKX6ddXUxGYawunaqSFqdidnue7ENscTPfjWjWCF9PQFNTUBtkUsNQg4wvwrCNVAfkEo",
  "key21": "3utvXuUQC66prjXWJkXSwX7bijzvckVhb8yhpL4AoG223RoYeafPm3WTr1UkBejwuUaFmrz9vXa1ibjXD6pgmw77",
  "key22": "33rjhx3sVvN6q4bCmpQvRSPijrfmVry4GS6bfkrDhQC3DtVQ2Y6ioKdV3vGaqtwZUmpPbCnZAMi2dzTsbe2prpSn",
  "key23": "2mTiMP6zCUz61keXz6662VSUtRBpWUqbZAR74Pq2q9YDemKKoNSG5iF3YFvb7gHbiVXoTxZDbXzgrjSn4W1fukmZ",
  "key24": "5LaVqWE4WRAVh5HAMBAju8kp7d3iv8L3K9QKF64HGFAGgd7nmzf4WQ5qEmT7HNNwZaz5xdtzhrBXSTkT6yMALKZY",
  "key25": "5i8bCyRJrWgCjgwtuuj1EWf9rb7LNBwpRsYBQkjJKRaAZNfPF6dHNvmCUy9pTbUnsFwfNZ3FjqtfZqYJxCMhashu",
  "key26": "5emdi6oKrgNGnUNoXJRz1rbmwB6DLPRzBpt7tYAqdcqJ3MT6gqdSPW22A13XdXUmVE9uvWJELaypXZePVDZmdwvL",
  "key27": "ZZx7tKXXJ7obSDJXtaYWKU8Weopu926RMDscfotKnMWLXzqti5vLc3cnwFkVoKxbYTMe4BzpSJywY5VbRpPzFMe",
  "key28": "XGV5Be41YUUYZakQ24GXSFwhf1E7Ffw7eG9gjimJVAz8goUiGXbhbpBCM7wtznniNmo3aR2p2EkiPw9Ge4HGDFK",
  "key29": "2WJifRhSibEw6m1xoRfCNKFmPfMExpCLf5sVoJzJEqbGAXHn4KWZ5f1zZmRqt3Vs9QpQvqeLDCXPofGrR8Tn6z6r",
  "key30": "21qBwxsnwV2nPqHbkqbeYbsVarc4QMXzX1aGgA6nh9h12YqpSfbU2otWAwFELyruE7njPn1C9oriNKX6BCqzNfag",
  "key31": "5rMirpnzCDAKGeGRpyjspTP8WAeM7o3oSHnHqav6ohBKJkXA7zZoynaRB6NkdLWUNmX98nwFckHtmePLmGNf7Usm",
  "key32": "3n3N5FL4t3GtGCeFgFD4V8L4AWwauBiJMm1WxyEg8ow2gbVAYUQBNcP1J8cdVCnSHbEXWsSsqwyaD2nRruxvcQ8o",
  "key33": "2X4k7hAg9FHnhHWoeQqvXTnKx8mXK45mz6SU7TFxawYQhwom6CS7iTCpJuD31XoBRf8y7p7qRgmu6b4BtH5vS5Zv",
  "key34": "xcgHNbXqsfoyLwVm5VVTUENhN7jPkVHKDnR8xY3LHLR9r6R9NQgtNpmoJqwKNCmtfWQoaZ2QDsK6YBndCiMKBBi",
  "key35": "3ZDy2qsXwEuchD5B6p1BGrHkJudsEwFR12gyaQeMkDD1C8RF9WKSZGSe2KCrfRVqW36zi8b3MMDUuhaxzLERqGKb",
  "key36": "vGG6F5hfmrVk3NJrXe5kCkwGiBpmhtBCFMFoWPAPyGqvExkPFgJT7LZo3FsFApYqNdN8cRhh1VsLrrs9X5N4pyh",
  "key37": "4ufQknUA2xsFNWk4DKcVcGX9zPmQXQkdhzh4b3JNd8tovc8xXT5byauHu176nho82HWr64BcnedQX5yYfBvqoqpj",
  "key38": "3JwidvytNhZRZAvz8hEM57i4oC99aUnmvKc6JT9mRSEcDnwmQHrCRdNYWUgNsHjN31HsUs3RAT4guogmRbVTa9bN",
  "key39": "3qS8BXKzgHmzUCwDNMFJq6RALYpf3NSFPYCgx3HpqZDTp7WvFoxLE8CAn1gNg9ipu4sPA6C927JQDbuMCeyNWhuM",
  "key40": "5NAxff7wUiRHRj58gREsmaedrHhQVNrrX6p6jfYt7u7Xz1eFEvnFcHoaomddC1KnVR5Sr4KBv6yWpsZNTvGxWC5F",
  "key41": "ZUnjQZCCNLUCUT5f36U2s72i2ieQfZud1ZYfvgayHmaaV9e2V9iFub4EPMqXYJLED2KpiWpHdQHXg9zYL1tZXhq",
  "key42": "2Hev1PF9CBLctPEu8XQyGwQcAaGUVeMa2eUsKBRA6np2sPFjMiK2HLPTphoTJGmpgG5WiWTWxrWSrecauGZACsU9",
  "key43": "2gF3R5uv9GtLkVtZ3TnpDoGyaZWEaeysDnppoYAyAVhvodSnBASSp4w4aJVRTQNih3s5TxJGU3JUNpYm2hUqooQB",
  "key44": "28whUG9WQYnWPt7M5b26QMYgeBSYGyR6Y7jMVejaUD27ESuKjUWbiYuYejAcsKc1sayayrouvFcWAHf4W8BFKhSh",
  "key45": "8buhv1ZDBR7d2UGY9HfMjirZPax2ojKEtBZr5A3xPXG8JKMKS7EdwDVsbMGqWtisjo3V6kPQYkEt9imSYPSxZk7",
  "key46": "4vhxpS9nqctZDns6ioRwvDmRBZftuair3P8KP7eXBpib9KsFQMRf7BUz3aRef2Kb4tAzTMi3ByZvfWvkBVYUX2fJ"
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
