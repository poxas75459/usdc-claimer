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
    "39g2SU5otNBYuAespvzx6HtVF3571DxYeXF7guTWiMXHcCPEoHSdMQAozsr6HxUEQQXJPYtfEcgVv1x1s9hfnmPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67o3nkq4scXiqs9hxmcD6iwWfpmjetVUV9WN2E6s6L6RCJgXXUmMXyekPEv3tojLgsBZPk7Ct4zR8HZNaY8hKamk",
  "key1": "5UDcz9RB33tddGzd7xGqFnBJ86wvmJc2r9fCaxr1qbPEUuNCsu1jUywfhFmuogWuVTFEyDAPKTKXgquZvNekKZwm",
  "key2": "4z3tYT5X9gKSVBMcjZeA7FCDDgsw7ZZQykvLtmdovWUEb584iqJEt4JZfs4XWuVNd8yXwNiAfBHdxSH9phnhtDZv",
  "key3": "EFdPPnvooGpM9iW7g3Vap2XU4zAHFERUip13QGfS2Y7b2mwC2ckDz5NBrKyRJZiw4fDTHcVEpJaFfZx8BLE5RoY",
  "key4": "efF9U9bsuBh8m7D591fhGXugwabUWpKJpEcAqHRiteraMQ9MHQmXJ82kEmRDZRtQsJcbJJ18UajhFY9nnfBSZQB",
  "key5": "3pNRkaSMsN8MCFrpvu3nat4mFhrDE9jrMKoVpJKaA5Lf7a9t5AENzLSoiDU2a19pzbJPM7gjcp7tEj2QhuMhW7br",
  "key6": "cwSbgHy8CwiDgDpprhjETP6eYxyGqBZjK6Bo1ywrUb8B3yaPZDk2Mqj3pHHEQ5MYMJsbXkZY5mqkUmatrHkouU1",
  "key7": "2fn9SBXYFwv4prMjhrga6CyoXx2Sx62up3MWQQ46DdXgsRwGvyYWBvLVkxeBXRpAJh8RyMQcd7SvifzFWQgx2kQQ",
  "key8": "3ut5ybw9vJNK7jm1PLtQN4dbR5FhUZ7DBfao9WxfJZu3LvQ6CkHJJvuiRJF2cGxLrug9Gz24ZwpS6x3vsZTteGK8",
  "key9": "4V8B9sKTEXKuCygNUYTEupvC8iWMdVX7KWjrwmfNV9Ms4pTbCngWsxAz1CqhBNgKbtrGYWbB7nYGSSSVBEQi4Pnb",
  "key10": "epUKQq84eZRhTYNoCFiquQwD4CRcK6EvhfFTZTFrLqQ2QRtr4wi2J2RYWyQE3mcyXrswH2ZZQTFYMHTEUwNadwb",
  "key11": "3M5bWDcJqEbXnqcJqNBoUnYJFBnDustPNnackhppmgbEC8u6q6paCwuKy7atnsZa5qoxoq7vd6jne1YeRCAN6jx9",
  "key12": "3D8dpMrA3UMffhufN9eY1ZXriUtEZxyAj7KuDSPU4n1c5W3DYvjqNEDu2RUSN6B9v7BBunBdyVgfpkhzk13i1Fzs",
  "key13": "uxUgSNJ6cMf9EhuZc7Wu3Qryc9oJEMngQ2ParL6wbqxvKNuNP2LhHhSv2f1f32VRUk6CBLDmoPqZ3hg1t72Sube",
  "key14": "5jwXXBzjdCJ7spcSFGNVHg9H3TYKumCgoPqevwMHwkiPofQZWyRZKXk8AnrbQzEHoahuWYv7rFH4aagnJv8rT47d",
  "key15": "2fRQ5FCbqT1HKGDaFscMDVE97UnTZFM7msCizKecAuunoFYyMcm1DpQaK637nBo75471K5VNmQLFRP5ZrQmhMPEc",
  "key16": "2WaajiK3b1PwnZkNbf6e7RQ17wq1DT7r7DPomo2dqHScuWDJJpLuLtS1vMKRE5HEGejDC6SzPtiHFbXLBme2A3Vv",
  "key17": "4kziV3AGjANhwqdFk4fyLyb9wJWqQWewXMn7n7nKkJXSSVN77n8tVuH7bqqDKpPUHcFNGBimZyicbUVN5kAwNm4j",
  "key18": "64N68LbkdAYTGQbMtGBbapqw1gLXyAyAAGv9xRPQZrV8gfHvxQMge4XzzA95pNKRazreLzC8mh6KreRtosXTLLQM",
  "key19": "r7gDPU9bJJfwpiUYYeeuDAjNTS47sCNHwmM4ortzqL4jcnZV7hFo4mpkLbj5H1RnNLgjQgqaZLXrvS93cg3pPzX",
  "key20": "WQHXgG5SzxJAuLRzcvX9MjK7FzRBrYtzaNKUD1RkUTKpH7Ak6Fou9Rx9BWUd7175A5Di9mFJod8rToWVScns47U",
  "key21": "5HtYCoNEz1JMiMK2Gj8DysWrUcHzipu9oERdhRteH4zDD79CD4Tyob9gxtbyY4jpBcgemhCtt3BkEjCorNkgitmv",
  "key22": "3SCGfdGmP56juP9HrNziHAFzxPDvTiUtpq68M4vDR41xB87MG9dZtLao7XhaKzCpHPZrj3Q29GB6rLuu1HSsrDFh",
  "key23": "4C3xWt3zA1vV5e5Bn6iGEpQx397ZkszrkaTc347iGKJ25bEg19nQaS7PZ5JkK3Bo6D427QVUg9PKFrmcqKB4N8Fu",
  "key24": "3vaBsPnoQ2TmQijyGJD6NLdp2VoRzRxu4ppZTYY8fRwtVpeewb1dhfh2bA1HY9iWAHGVcajfJvBTSuaJLQD2kcJL",
  "key25": "43jBqToa4AiyEfo3yueoTGkkipiWHZfP4REBAidrzbFf2P94ERieKsX7oR45rbRuqSYuQSj7chCRTXPXeA69Fbbp",
  "key26": "3D9dcpxrkhepasdxK4R3F2pz2WYDf84RVZit2y6cGgvCLQ6aKUay7FeW9327Ek2PWrocGHUdLK53WEFAQnxhZGXo",
  "key27": "3zEyFddnNPvNsj1SfP4zjV7dgoP27i5eaWiNzHaRktCzg5AcDkZWjDWAJJDWx64hoGncNqPAd7JcN1PDhiQsWbZj",
  "key28": "5qcoFUCPqCgiv7Jx5wzHR2x1f9eHfuLZy2L7MCCBRJiTDvt3DkzViPzqiPG55LWkaWbSyroAyY6Y6vrkKYQo9HD1",
  "key29": "2ou2o2ewW2ATxyn7n4NnALWuBCkNAMmczwV6Z6ACrdFdYXs9p6mLqbbzWBFG918uCk642tShzx2b8xUBH7YKdjT1",
  "key30": "4ECGY66MSatZy6b5HguEwJ6jiEeyQNMvwWfWDzCnK2ru3Z2mAwQmHTeUkir9Vaq6svubyNMyvRwnpsWninxU37Kk",
  "key31": "49Hto5fR6eQLM9SmkmdoAsSJTxQdc3TzXKgnN1Aa5Pegt5XPeH8F1pUGPD1UHVgawSwwGpyStAHL7iX7yvR2GWk8"
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
