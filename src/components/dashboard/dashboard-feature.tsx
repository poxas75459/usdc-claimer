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
    "53U8Egvqi8u5AYP7WvjfUfUpdSBZgGmCbtZHcpfbZ3rn2WTVuehATVfypc8gHUunUFVtwwMhj8qEKqU92WvBnLws"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GnaBKxVYTeuURmebpvakCtRU9Y9X3TKULjzFSc63kxub8b9n22jpP1TrfmWShXnKJfYtCY5vWNUaixvzF5MXFHn",
  "key1": "3fmUQSSpYrfM43TwSviYFSwWceviGEKDUsra3jkJFKMCmjBhro5fSWNrrkeknbUjeBiLYzg6MJUtjFVNPoyuDccR",
  "key2": "26pHsdctAzApRaTFKA13jph7EqoQ1nwfn5yUXvLR9FiBzBxqRczNSAcfHMWh3UdZqUMh5bueAttzCSmBeVSNJGDS",
  "key3": "4YqpqxMGAcJf2Yput8siwRCnhM9BDJKvaC4Un5jZ7hLd4V3Mq72UAJT6jsD8egtd2ZF8m8hX28cdrrjz4NaNiBzx",
  "key4": "2MponoLaY41DS1eJJSKW1fzYPMZzc1StfHTMSwuPhQwexYYXg7DWpw439M7du2R2LbRqdnYzYX1aHLRUpmqLiC8Z",
  "key5": "2ovNi5scs1MLp7uzczfAAHoMigUrNLBnMLckNvJQgPvs2dFXE8wF4KUGG3NkRnnXCxiERTZeEZNsBahGipugqX7R",
  "key6": "n2Vj8xWyPpWKAmVu4VTgGMwtfjedotcx86hYLXGUg2B52Xhvjoi6L4exS7D4FaUUaQ57szijdMQc5452ckgWzzM",
  "key7": "2n4yoE1uADpjgXauy3UN71sMAXRsriRgn7qkapBbHANNDxh6YtgocUMNSJyodQ5gix5BqCnaYvF3YTCScqkKhjD4",
  "key8": "CNJQRq5pztzwymDg93xCLFe1q6yQ4u3b9sNtAFkaKa1TF3HzeiuWMKUocpBRJF7zGMbREJRZBf5kNA7DjXNgP8M",
  "key9": "zzrxbqaNtLv2QEf9braDCEs4v1yJ6J3EUEz7rw1keTy932tx4yKdHM4fAbc4Z7u56uPeC9SUpkJqmk3rZ97m7kF",
  "key10": "3kVnpHYrsGenQT7MfEFnHWkbbBezMBnTFtzpzNLBh531BfpLoyKKVmq2PHcv8jGmcdNK9WvzpfxD7ZrfBSn5rMN2",
  "key11": "55T7w3KbihncunQujGrs7EyiKdTDQKcwV62aWpzvNC4D6o4QQX6aHMTU6ZSMFU7A9LcR5AwsfBbc4PiZzQpLUpsK",
  "key12": "2v1GrGN4gqZgT5rYr8JzZNYfsrJ3jCeDYYZ6RBeEQJBExxVWMzVoYGXdibfdUYfZ3xAMSFV3TBamvhFV3kK5kDnR",
  "key13": "5yRUQwCFeXn6VKA637Fe5EC5jBSDUnA1vNLbcfSJrLfAuBUxhRoPxtNMC2HJbjhyuG1XzpeNewbSeiuk8sP3sr9e",
  "key14": "3pCwvKt4M6KS2Syeq3aATHkScqL3351HAeBSrvjUaNuFkRRM3WkWB8s9BZ8e6g5SmwzcMnDGqDpvnvGJ5Bs3PNak",
  "key15": "4r7EG3fMJ3GbYavzFuBqMCaMcACpcu1jutj1RW86WazHA1i8dYF6CH9iANWTkbcqbGWhpsVfiignXYFamUJXXLkA",
  "key16": "481TA5kG6dy7jA6TqWGqosV4tQ9C8iGRYY8gcz5JBDCTU6XnyfM3XNfRXNEKMerC5UJb8qm2H4vdMyYxTzxWuUx1",
  "key17": "5VM8BKcHj1syetrEwpAcWq4FD2AtwFnKpvjm9LJDvHmavV7aNy5WZoEQAQjorjgVVNA48f5gpDXhLr4RkPU9z9Rw",
  "key18": "2Xkcpd3XUZvLwuH8vttZjyPBoKjScHmtvvScW2FTug8p6QCruzZKYzJ3GDErPE8GoEN9c7MkFWh423ReuSjpQFy",
  "key19": "4gqj2KwtbTVyJKiwMt2M4mjo3fHaNBc16XfzqzsTfTjadyP8KKk2JFezFyM6ZxthWW8VzSUHCHGLY634byyoqzie",
  "key20": "52KzgLxB49e369zXTcGXTMeAxm9vTqmU51xuo6mqRf6cUGXAFLBWy7P2BAtojMpWrsVxHC2rpb6C47cDB7ZEHKXy",
  "key21": "3Q8jiHfrsxSaj1r1FnAdrYh2eWxiAAf9kfEkcqkMVwBUcMeeMQVN53BSPH83cFjWNtrQCEGdTRt18M1Dsxk4UYRc",
  "key22": "47W4uRVHaiKwzDJBFiAKigxHCh7PbhdG36PBHsfAt5ts91VkcqTzpn7hL9d6fsfiwFpdFpjTgrstZitRjL9832YT",
  "key23": "Pab8Ci85HcaPd11PU3HaPwJAkFbxa2NPuBrb1cKPwo5xKHYBrkiDhRKsUe5S38U7sPsmySphhBqoHQoEgsTN3eR",
  "key24": "h2Gkh25fgArKyiX4hsyHSVeQi1M5jn9SFvyb5rXskyWQMRAvd9wpNrc77cSL7yDbHNYeLrSYLRKcNYX6XcKmdax",
  "key25": "35fsmurEUnghnMBfXBwhnNYF4xtrxzWAMctgwUALxNnCcBHUgHviBD1e6E8FAXcaA84x2qYkvntMj5B7kj4gCCrR",
  "key26": "5YhtRvkqAC44nmuAdRimhquy1JWq4Mi8GPZNRHWFS9RdjqEqu8UMxkpY4AVZnboogtgjAx5SiSSnAoMUypo21uKU",
  "key27": "Kwt4qHGfjSL9zWREPFQeG7Hoor96TnhhxgGr31xz994XVS13fo7Z9F9sjsa6CKHHdWSjKRYiS4yXg69nTk4NqC4",
  "key28": "4KzREj8o75tuHxf7T156zoyiEGuQDsxMBw3jCz4c83hc78RXsfXPfHVeqsTXuUoety3oKwix7mx7MMejyapRLaHM",
  "key29": "2obS5qpBWwoaTYDtFD75yycXdDVvGQL1ajujE2phmSfHUCEJJvWniVMriA2H9dPnVVz8sKGoPWd5wGkwrr1AtWMa",
  "key30": "5yBH7TwUWb375bQfEMZhpuwShEYqzDkVFXbMHXFMAF2Td3xaXYdSCeHXhSGZZGeBLY3xaPgq6z4cFo589MFZefqN",
  "key31": "4UF98cpY4ReH1xi3T1bi9CCyELRBxi4oKysCxozE7AJnXX55RCQuaiGTj9cYfNpGBmzbJVXcYwF2ydsr5DAgM8qx",
  "key32": "5ZmpK3EZcrsiRjJCk1GVMDPJjmq4XbgvoqB2QCTJ3D1aKQnYBWnnDATCkX6N1yYAdj2WW4Ug2UA12uiWwZykZuzg",
  "key33": "vkBvdeZHzqkoi2prXJSXw32hjn8rZ4CuYjLJN77F3PfuonbPRFicFZHxDnEKKqACoABPjaHTfy7bXwZVPceSMG6",
  "key34": "44eDSdPLnXFhZfhdX45q3aUx64KE95i6c6PBQT1m6HxwQVG6TqHvQn1z2A33xjq5vSGUG7woyDFTqLydCnx3CTae",
  "key35": "5wXKmY7nL2EnW4VvpyV74edUKUkdnpTL76aPm5fWKqwmuaa5TXsRNjYNA5kr74sxox5VqCxcs7RiQwyb9hrS3V1v",
  "key36": "5oSACmosEYsXyPirVaW6vnR3RqDo5dJJpMLJWqESnpmcd8ApjsUca3MDkehQ3dSpEmg4Wg8hreQWKfBGpDTktqVh",
  "key37": "nsiiSw1DReApQxAjfdShsYPAwwEq6T5CRaoVkC75ic84Vfe16gGVFyZR8KEAhoLhtzwEVgaBLBpYAooR6q19TXH",
  "key38": "3B5PgY1UpkgTmWB2eBEF2BVWfoRFNExDd7r1CchTaHhiRaC4PiwiBukWuYWWbD1GjiznHZvUnUDGWKwHUxpPVgJP",
  "key39": "4BMwKB22NFgDAJorX7J6kmR778VYRmnCYY4Yk9MUzErRkpSo2M5Xqkqf7jLn6xEKEpukjPfT1sjd9M6eY86Kv8YD",
  "key40": "3oPLe8t5aW6NKTB6CXAXGRjHU8SeCdQezxmbFpim7AeoNVKmFy9EoYKcATqtFPzLVgY2fTQ4HLYfMyRJh1f2rWq",
  "key41": "3XdUXC872japjYCgd7qtvUJdxe4vJKJxgHnFYHkKW9CoGtBYsyvf7RxATbdK2o869sqXDi9Jy5HezjZDQfXf3usr",
  "key42": "4S72EhtxttiH1bhyHdBApMCdJFUEQLBrRJ2PZ6mH6MSWNDNnLa6ermZQWHaQSCERMdpgs17qtEu4U1Fv12oDeb9e",
  "key43": "CFV6PVY8TsM3WNzuhMMTZKPVbHRY1nKipaFrKFEgT9LoFbeNDM3w5JNGyHS5RS1cQqGHA11mfaz7JL3pRMC35Gv",
  "key44": "AotFqYFtmbGpSKSaYsU6WSuikDJjZt5GRbq39Wus5A5GnZD4PJBV37DBi1in5QLRceBe8FDnaJcxhdd2zDPc3JS",
  "key45": "5pKohN2n64yufpVMfXY4DqWaf1ggat7cSijkGcbi7gDmCmi6gBwAex622hGdwKPZ2jtcC9cPBjUa4zfYwpgHi1ga"
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
