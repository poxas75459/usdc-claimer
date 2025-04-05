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
    "5qJKK2ZmD3cnov3GQA8Z3VCRXLPvB9bj1LsE99TSBdLLqSciJr3urNXZ8MvCAWvQSc6ZSqYMX2QCnWh3aiHbgFRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tUrD5sjGTAWYdZiYWTECSLYZTKDVxvYET3CzjXYz2jRNqZ4Fujnz295P3wvoiwGYoRRZwwcCLAzdbKYu6a5bXXZ",
  "key1": "5NGhUAi6zgxUb6eHx2Bt49xzkR4V5TBrCynBQJniK2bFbPjjzxBGx6YokVmdbbSMHNqW6N4yqZdUvA56om1PRsdC",
  "key2": "2oHrrRGiMXYHEuULF4UvM2ELJNBWmHwokEgCekUHsesDLENtz5rqkDWK7WXfMoZL1J6geLX6swaAhwvQdfJQx1nm",
  "key3": "4hpXDcY2qntb1KekWckzNqZXSnB1PHUHU1btFJpiCyYpjPSHNQXfpeK5cMSPF9eczGSyqco8bT99pvuDGBNyNppU",
  "key4": "47QmdF5SyaGxs1rBk7HehxPqDSTRFsVG2cPSb96ExdnTLXXRSpmiy5dHSwVcqfkjarrZquRQMk9hkD9bDa4QT2fn",
  "key5": "3z69HCNGMKUrEZkzXeg88gNrbGfdK29wRvjHq5AqBhJtDLYz3ZW4rTTYq5sSPn8WvasS8Q1PAjjCpPC5EvbLtQre",
  "key6": "3MoFaLX1iE1aY1yzNiv1kvwam9nuJJ8nkSXYKYkRpK6gF8h7xY3zH4CEgeSp7YKXpAi1rhtc2oCPLLqXdysQLWaU",
  "key7": "3fNWnnYkiWy6Tj9MEMSiXFt924B8v2MFPcVqSwnaMtyL5YQS6CsrtbUTVVCjqrJL1Czoow4qJL4Zq8RUjUmYPvXx",
  "key8": "2W5R7pMvmKQWsRybNEskTf978nYB9SnyMe8ssUsT4WZTTQaSDxGEumn87sZoBm1CuBX49hAxFRDhnbygP2RsV6hh",
  "key9": "MbKHyWcCvSYBPVwnVD8WhCmSMQ6QJMew3SMUDBcojbqvtrmTvHTn163gw1VKKuKSyPJBqm6LLv4Pyu7xjTcLw8B",
  "key10": "4vLaEnbY1Ju5mwkUn3bqfNqjmf6cf9c8XBWoV8ZZeqUmRkrEopZec9Bt1TiVyN4S1HKVeVWEK3Ru3jECeLo84ca2",
  "key11": "673eM7s3GfzD9kWbDR4aKrfqdmG1b1TB4CbHnZG3LSE3BFcugCWSD6R2XYVqz9aQVV5STLuWJLBUPHruuy62iujx",
  "key12": "5msWBhdAZDBYE3SY5cmWAdLcjkebWUxnUanAKN4DBRiDzqj9C3zj1Yw7U8b78fSXiMmMX1QBL1o8yXFv3Z5cfhYV",
  "key13": "5jtUAoWbkKBn6ha1ubbGgFAeyg6vcbBvGiJ7sgNSiV91A7c6jALraYTJJqTGSc9qXxNBgYDVGBWEsw1jMGC3TQXs",
  "key14": "wnPLyVsb4NN5m6JosS2nYZKAeHpsvvhZbGygLM2mkDBpfcwzUTt2Z8J2wyBcaihUz8fjabSCX4LoZkYrVmx4bBY",
  "key15": "4pH1EAmN9XqHjgvka5SyJA5Khrux5xG5hsqprSgDQUwV1Dx189ByNte1aGbTTynJtXoGrcN1AMDXVzTuXmmEaNJn",
  "key16": "5Y54prnbnsp6nbqRhD6H89t6LFfr64rNcmJRMxsG8yMHDp5enxowSFCiykrRJp9oMLuwrxf216LeQQpGXrhM9pvY",
  "key17": "2DochwqSaoFgcnvFm8waKZbUbPneAktc16mkvynZ6E9U3S5m6KBsGt5p2My3aepBzA9REzbi3ENZXFmstWapfz1m",
  "key18": "3G43rufacs5gGLyGdoWdaBim84jbEcH7mFfTMCET4t3tobLiPQzx8qn73pERPZnJA8ydobqV2VsJaKcHZt51G4WZ",
  "key19": "51o3kMiUNn9Db2fSsnWiCCdS6qWQsRWxx1xJEZRbR3mCyRQ5CCAVXHHKBqjxSb64AxeRmKF8j9ZWmKrpu63uPmzz",
  "key20": "3ZZ19Sdp6GDSrfSvLKkry5E53TwcAwM9ssLnRBbHh94eNZ6gFkvvCR2q2GoBWbBr9qzrWVHNpjD7VXGCEAQQEWML",
  "key21": "55uSQmDLHfCQBp8dkiRwujJGUMVPbvmqYw1NET8rZPmVRRW9djkJmak2DLzuMJ7pFiQm1Vo7g76eAee75MPtRxKK",
  "key22": "ddgsdP4xhqd8m6mmuyvRXVpkUjZM4E89W94Ln1Ade5Jy8jexZwz1MWbH2Uj8krkqxJsRKCuSoZNVMk3rdsXHed7",
  "key23": "3hNakiRX6YcdYb67enDkTqy61Bsa8Q9L4nZjKvehzcE1cYGMkmAnzuAktdvjHvDEqkcpqfcGggG2MLGYXMB8ZhzV",
  "key24": "3VYWULN4TECibSiDikjedZGKyqX5P4pWNy3Afs9L8Zc1btQQuhuweAWX84CMJRfxUGQc6aP2jLxorzrf8ZvXLA42",
  "key25": "5rMAka5k2BaEMLikG3kRDwDuuLFyCnLEM4vVapWRXR8gJzsDNg2kdwpQutRwVTESe5HMcRH1FXJ2657kS8T2ZXqd",
  "key26": "4yis3m9TcSCQeWwgpgWDmgXCs6Q6VzQAZuhGRMRBw5bJyTktLwUyghpNYb1hQ9o2SZ2GmrMycP1aLJz3sNKNv9rn",
  "key27": "4TyuTQvfBENx4277UxAXPHyzUJ9MG2ASgcfBcE2RVCAXGArKmon9B4JvQ18Pnw62i2S7SPsdTwjzwUnVNJ3a1ELL",
  "key28": "5PbU9LVbUe1ijKwpYSZwbDxXJtrgKkZZttc1Zpgnvkyt8Yaav5uV1M2Wa6poQRYYz1JkDr9Ewdzpj2iDRyiyX9wS",
  "key29": "8dY3dhRSMWZei27bHeFRoSt4xomZw4p4781mbreB6Y1D6RoGsKSdaTjPn8DsURZAkBFRh5SsprcdrE3vpyBnocT",
  "key30": "3qjo1GNaUPCWWmR524ePe5GmG5VRxzvhk25rQZrdfMt6xqd3vxjwLmPDjXeGcxboHeLepCvuvzz3axDYNWGm5eWf",
  "key31": "4k7upVQWPFju3D1nKRp5LsLFVPNDQheUssEdN8qZkVpGaXKwW2xdFuHzKMf1eMb8AuAr4mepTQ4DWbqi7NfrXFS5",
  "key32": "3ovYPZRRoJkEP71pkMFAMRW1hNV24CM7Ct6MzCySHsp6JL8zZ5WLBNUpnfCGy9RB5m1o9o9nXCyGoEhZ3sFVt9TF"
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
