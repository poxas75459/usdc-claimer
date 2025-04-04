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
    "3sykPJhLGkbGePpwo8XoEbZ5SMRP3fuVHYdoyiVcYKBH6VuJZDVmLyJX9DHQ3qsaueDRHmd98vChsbXo3ZAB8p7r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hgGsUUADfudDuYwyt9iroovYM3kJT1zgcH6WdGmDYBfrTHStM5w4geLa26F6tFKkkAPZzNNpHRPrhSqELY12NrM",
  "key1": "5gHdeSstCA2ud2DQv5JN28PGrqcvcbjkM1iFM1KpQJSsvd1inVgjeYqCvWvhFBs11eDTYesvNaepmz9hoHVEY9Ce",
  "key2": "44TkYDsyTY3R4LvhiHqWTqEvFbxmMcHHSrpRwLym8MNXnSmRMA9HKPeLwouZzk5rMXYviXk8Y5F8fNHgkiAknYhf",
  "key3": "2VBSHbQjQcbLt5SipK5jAGCnrBZaJtyNBJPEL9azdLde6rXfqtMabWsCjfx4Vcd4vsBcEHmey36aUD7jF45JrZkc",
  "key4": "5L2RUyiY7gG2YVE8GuVySQ4KKMgRZhHGJQZpUufE1bNtUC7jbaZDJyTM4mCc62WDXN3sL8g8Pbo6qF1FvvxrXDRw",
  "key5": "39MLoguu2HnWbab6Bv63pfmSrTrCWL2DBQFg79ZSq2peTHS34U7ZiEVzCXi6ZRht77e3PfXEX8vWqoZNFaewPT5X",
  "key6": "4BhgbifpX7A84ah3M7KdJbCgZebpRvDFGHWZVP3j7T3XYGYeJuTALM1zhk5Gyanjrvbx3JP2B8DXKGp5dvcodDF",
  "key7": "5PkKZUUNQBS3qKhR8B9tUsjBqUBnBnvQazqEvcGUBqqPiJAro9XKU1PPyq8LwEcz1EsqatXwppMk22ePMfMqAnBh",
  "key8": "3gE2JAHvnBLtMgwCDMxzzcGeRhU3r4oUesdY4EdV8MB1k3N6vxyPcpfR3b5vbGRzAzU4thjDo14hZLSFBThrQWmZ",
  "key9": "4krqptJNDtgjvSLjgoYpn5vouX15ThiT5EH536V5ToiYfVKzRrYsAWsgAES3nzMNHZszeh2wDjgRJuPPEy5rdokp",
  "key10": "4SVjYcnjbNN1gNcktT5scNc6znjGNc5dXJ9BHWxjKdZUsDCHynP3U4zsUuMpyxtawM8wT6efV5EEDDWY8WbqwVTC",
  "key11": "3kGpdePyNSgDC5jXh8oGDCAQNwE2ZdDHQdC9PQzSUpAdEESyi7bnY5uwXkowJtWokNkczP6dQsMfLHE7zUHgsvwn",
  "key12": "3EFf7UHDNVjiufpb534nHSpLvg1Tvkokh9h65mqNubZ3eiMkjxjCp1kFAMtHDd8dHQJAzCzzgNQXeTE69Q97z81K",
  "key13": "2k1McW1fXRQGq8qrLepk6QVRUBjBn3PoVZwgMYtCsyrUnMWF5wGot7Wc5EW8mjrmTSkTXagw54DTU14MiGtpNXPQ",
  "key14": "5Sdd4Vx6Er2jpaBEvq9PgsxhtCs6bHYcoWwQ7tjrpNdK2pebknEjyoWpsw1mbM7gBhqZbUaWYjtoMTv5sa9GuaJU",
  "key15": "3qFebZZZqE5T1XetnPwrqQQRR9s32eZKwwy9FpGSFg9JDwahzv7YjrYP1GE15fjQw9WgRyzGMCtRLDx8EcarcngS",
  "key16": "u7EzQw27CyUPqMcoR94j2U5NMoe5iD53118gTkBPTkv8xZC3k9wgz2Wab58mQP6KWEFayDGcJXAqdMub37uNU46",
  "key17": "Jh1Q7p6ukHh94fLax7DGvUBUJLEvu6RMK2JYYVLjNfW34TFxamgVEmbwen2yDW78EZbXwQSZAPNyU7eEM1k6SQG",
  "key18": "3c5PBVvMFxpCNVsBAwrbJkmmb9XUAsrjxvPEDpQ7GqDPpARzxWG5ehYhA9apRbA1yuZ68Ntqqc4ZZDxS5TztfAGR",
  "key19": "2mQkaj9esHjeqU3ikyWiuGuBHTS93kXGVMkdyyPQ7JgKRbLp4KfL7pDuJfXtTUfR6wkFhjiuZgoB2nCftQ3Uy89c",
  "key20": "cH79zBcv6Z348uS1TrHGwQwkJbsyQZz9xB28exSyNJGT6QDYhQprQ36bthDMog4tnqEqWeYL9ppfUEM3W4jvHgr",
  "key21": "5gr13qbPKEsnubSeJVTDL8oqWbEF7W4wwpJajCbBuo5rM1kHSpsvkHacfkamGgCZhsHgC2KK85vgitABhdpbxHuA",
  "key22": "5ge3gGTY9WSnyYSewWYTcSkYihRKsoXEH2RjhvcmheJ6wQhJgahCNE95QMf1yUUE2qCmchE7AtFq1hPfp964SPyp",
  "key23": "3QWNdnaVHua4cAcEtk1bGemtY6Dn8GgkFJNr6vKrjNArEkvtkXEq8QpWXDcY2DpDW9ZUvmpW2DGomm1K1ZyqGwdF",
  "key24": "633xxCpZfSeC2mq9HxNZx7M5oXZVWB1D1WcnKk5DGcRHwchu5UAAnebpHiJRZfc8N79BoDfbD4neq4rqnZhQsC1w",
  "key25": "2jXXqZXJmKhuacMksNcFuk6biW8uHDAPr43Car7kxh7Yjb3apVPVTUvZ9Cwx2XT5nqnHpCwXeCMDZ8NfGmjua1Bm",
  "key26": "3dwTjX1vfYsTddAwuS39JH3ctKZ41t7vJJzjv5G1QSm9i9h75RxsSSZzdfUcuwY5nfN5E6XDjKwFyLCfR2LGz6h5",
  "key27": "2f5UeunutvYfkA5H8RxwjfjxGP8rSyREbQK9Gnc7rDMxUZo63XbvuBLaNBVcyqsCray9L8yRE4rtxRVGrEPfpVmt",
  "key28": "2qgGLLzW3Xp7qM25JXACfuW4MnLXG4GTVPgxGXJ6gqCAMuxQkjprgJRFRjjjQ3ADnLsQKSFqAgocpJ8pt3Q5NhxL",
  "key29": "5Mzn1KLJeYuSU6J1TeVd3kVf4jyxgryNLJvq5m5nfJXiWQrGQ1t4ioX51szGqiEdUfiSi9sspQ8wbeTiWPE2JBjf",
  "key30": "pRLowmr9KSuV8BzR6W5CPVEoLWvKRtzSjBpDFH17huNDzpMUGt7cKC8gHDdGctC8135K2yz8AfsTB8LXcLpxEhh",
  "key31": "DPHNK7gWMBnvtK79JrtiJZJAsR7D4Bh9z6bppa2wmYyffwVuEbGz2z8k9NhZBg4zcfgvA3PPRbUBWw8dT6JnUoc",
  "key32": "2sJFhSC2gXA5HiKuWTH2iNUMJ2sz5JE9Yi7LrpCzBr6cjz2j8NJhHEswNtftdwrANWmY5grusN8JHasARvE8TeGH",
  "key33": "2hE9Dcm2S7NSbCAnXQ7mekwzsswD9NTqDWvnakB9PNacsnHiN5x2vEi6275VVhrbYci4TMWh1Bzeq9uzJrh8gQN9",
  "key34": "18FKctTbRrX1MLdFwZ2EDdv4izvrBKfffxaSgiiPdYR5CpLCV9x7YzsqJ2BAgnjfcTT2LyGyj4Ug3gmY9YdoyDU"
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
