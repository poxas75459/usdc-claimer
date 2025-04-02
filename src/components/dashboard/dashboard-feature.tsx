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
    "4cNGJNAGN1jQa3mR3svecp3DfmSWK2jQgZ1LRHjVovxFwQcJ8GbwovtWkFHVieMM4w4Bmmw5NJV7kn1UppPnLepw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LJExd761Aui9cn23SFxUgv7raU5aW8su3vmRBaYS6wtiN171YzVG7huLK8hH25oRVhuxerncpRSnoeA5a1m5Qkx",
  "key1": "tQNMS2cGUmok3qdnooGe2xXCkouuEfX5fxSyYGLuVraduuhqvR3oYELfHrhEUEmiN2pWQRWCGUGNKVygHtdq2i8",
  "key2": "PVByXb6gMVGwbA1JYGwJQGbQQGSMdEms4zPns2FZ2asrbWtPRSHjddQfyWTYC5y7rMwspLo9WEAHCtbqK9b5K66",
  "key3": "3sjHUbrmNTgehiwYmNsMpUL2o7u3pgHL8XBxwqv9aWw2CQ2wo3KP9zdfFYABbjeEJG3uKhxPNMMRT195NdJpn6Pm",
  "key4": "CCEwK9bQy7Wqs3LGu3eecJwBBhFzaqDGRWQsuCYbYH2MfewNKWsAz1s8vzYPaKk9ENJCRNquAtSradQCidH57vm",
  "key5": "4LNi6drLfoUJbyD1Goa4ockewwQyEQpB3HHEMXkKysBm25K9zJ28mks7sRHJme786Qk8beEgrYZ9fPKsc6pDM97a",
  "key6": "5q1BbgGiR8JfwRQBCLGFZVziyEuxj7GEBqfhdp1A2dgHSQHbHhGWuVBVHzQYQXaynF62myUsce41pbM577R6P6yp",
  "key7": "45roAFcTnW9qBug8tAEZnTtGuQZMefg6ja3V5k2vmv9ur3Gy9gibHYSst729ngKiBgjyVo1zMxr5qHZjdVWGmVRE",
  "key8": "3otLaiyxHqQJCZtuhhfgZCmPbj1mAR17RZntqFtHxoUJWqWmjHXK8pQehqMo5k94H4seZ78n9JnTMLHoAZz2ojrR",
  "key9": "2AGa9awK1sfkfH149nXNppyxcjBPeGCFeTXDcGBHghtAyrs1xiqaDE6WPpMrzLXod3bKpzuuC2zE8usyVEf92AVn",
  "key10": "4BWYfyvEZ5g3ZSu5JarWhm92tGiM4uu8M3BBJZo1t6MG3aezP3bK9xkf8dssWpv2N1FMFraSv3Aw6kbE8Z3bBbow",
  "key11": "4Fx9TPFjPgEZNZiF7UVquzv5u5FYHLiqc8ySkrgJvBcFkQiFGzDJhrGhnYDp5cQxFof2HdmREXQxQLb7M7kyTnsU",
  "key12": "4Fbbf1zqY4y9BS6gBCUwy42M2qV89W9PUTgnS2dGHEpTtCtkYFQiWhCTEEjgrCi3W7B6QNW3uDCPC3u6aYi1LMX2",
  "key13": "3pxDUtjFBLF1xksjZt2xraRwdKDWhtEzkorcmfVcS7k8AAB8YxmQEJFouDZKzSvmmXvLYT1eNuuv5W5efzn9CSPK",
  "key14": "3vepjSj8856qxDsvs7jWKNRfmpxiWEW9AgYpwjGLpX1tCZ2si3cSympteA5j7MASxWYnR4oXy9adnqdQCkKpbWW6",
  "key15": "quyxLtZxe6HHsx9P2V4eQso3oTSkEKStHjctK6yN6jzgTdk45kVbZE9owRD5vBAUZsfuCeN2paRfaZVhueykmR4",
  "key16": "46rQLEyX5YuRr512qVUuHDQ154hynRZpJu5W49obxy7ZVAvAJU3WvoroBUdQrrN16uxqV2kcLVSffhqTdXPp8HA",
  "key17": "256KTLgeTLrPkQLc2pbRXxGvCJxFp8F1BMVgwFUe6unoCXwJvLEpWPgEBoNwwX2iv5NNzS516sMjSpMXtCPL9vWy",
  "key18": "bXPCvA4F2HakTt8z5fbsSmq83duBDFxWYP789BATk4pzt4SRtG55JFMGG1499dAqPndPUC7r6ob7sv9MkpB8ChU",
  "key19": "2uoPpMxgMdKyHvTmvkevdgFRZd5mkr2NpNYoz2giQTjtWzgBVSDUtNcPB79D54EE9MEobA71dpN2kgothQ48cqkx",
  "key20": "U3HdvTLR8tDRuw8MUaC73cTUj5RPwKTsKVcj18Ew543Xm2hC7SfwpkAe19ABtqUMxhj9hkjdoBe2AZb9Gu2iR1C",
  "key21": "54ZTYf1wmW4nf9ULSDLF3xQN5MFwXdyf1EieDefo6LPuHUzgt9rKuNMBXatRxedSpjKKk9ujbgkaXJXZDAtb9m4G",
  "key22": "5eaF5Ckt3J3fV15xFt8gBRbNY3dCrfMS6gK3HkxPyyPr2xBZpZALB3JWnKCdCU3Xrt7CP62gaLH1Unbaqc546ZiH",
  "key23": "2AKPQGMLePkhcAW7zT3qoVXUozzTfCe2g4DunV8X1wCtm9LgmAX1V5w1GKzbiJZUgKD5fHx87DCFpkxNZSRWzz6t",
  "key24": "5fy8LX6Epbv4WkfAH1X7vy2yPkN6gnKSnFwyuGB1stnC3LeQu9trtus8xok7q6uMGVY3MsTPbhizEBvAALptY8Vn",
  "key25": "fjEHw4BS74w6ehshaCz89vicXnAUNmA4qGewza8v7iAkbsf6ne5iBd7t1sz6DyNTk8CT5TS8SSeYKHB8RNUsEij",
  "key26": "5b39MpEfYVf3bp4V6Go7c9sL2mbCH9BHm1WG15LvGrmao5oGDCY4iMpkdgSZcKBinBc1sqiqHCb9owwno61VUA91",
  "key27": "4KR1DfiGYJNBsJGoZfPcEPSDcfVFH4gqHkBcTThKjGfUe8EPT38ku5gVWuzKu4yUVNN3DApZ3TU9DXqT7dEkCrF5",
  "key28": "HbnJeFKrMjhoBXeFRf3a4G1LQGYhCEPBw33kJLbdxJ3ythdX3iD91nUbKYozsVbSHkZcTr29Y4o2pinYpryP5wo",
  "key29": "37PyGRMwoDaEM9eB73F2jaEgBSW8rm1q6yyGyA2LCFNZyLVVwfgoA5jpzMAAWKxEHD4VZht6MsNyYGsacKuaLchY",
  "key30": "jNtdiJR1vKNEbnhQ325GPmC4jDWNouxE3eBtxrpcdqEQpzzKGd4amds36xZ33FF2X8MSDTKxsNwjc637hk1TKGB"
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
