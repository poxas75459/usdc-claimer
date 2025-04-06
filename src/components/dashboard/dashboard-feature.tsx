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
    "4RZ9KWi7876binP82RnV2xF6W58dmu5MKvVqMeifZujSYthXoGJVpE9DXgmkzGjnBWD1vDZcFjisqNX7gh13Yj3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UfkCnBuor8F9FEiVSMNa98Y3oczQqh32XnAdWsQQ4XaTsDpbwwk3hNKLbAMNNsiNN77VHFEoSNZefp5wkEjQahD",
  "key1": "ZtNMYiS1v6fDM9p7J6E1Dq3kM2Gt5yTfBwPbthn2vCMiuhHkvwVBFK6af7EfnNsA8TKsMkkA7xhDJyW8W81Aj9o",
  "key2": "5hgea73EM2aNErFsV4YkPtcXoJftL5mTLMofZ7erpdQnp4QEh9yBPjzVGkhZ6SuXbDreJth1cXCR4UBvzkSnwLvA",
  "key3": "5jx7kMCMGysksfbSbH5TaaortivNtPS5LPXpoLvoaQUAGz7iFQuQKdMLUCqHr4D6Nc7ZDdaxb3ZCQMaBkpwoXk9x",
  "key4": "4hmNqzTtrSiP28ToasYFxFDbGMF45qV2nrC3Xkintnc3ST9MDaabQcbg8LMPh41zHvxtujnoJTdjrz6iGfCzHHhp",
  "key5": "2Wjrp5GP1mPn837y8wnMWAXhqoD1NyVKFYetPzwiWtaWmJSXV3Sa3YdXgCL7iAwbEGTAhUmFW6jCwH97qboaiQsV",
  "key6": "2oQP8hu7DC6zkVq3JrVMYyPGFm8YFtAoJzryd8fcdyhJ3G4KUHFb6xJj2SA55n5A2wW2NFXGLBrwD8dywD32ffYL",
  "key7": "xR5ykbTpuBaDMs96FmVEYfga7gx3CvdAECtsTP4morVyXifjutWKWwy5UhKDq4PaNLpz2zPD8AAjNR4uVDi5c2b",
  "key8": "3VSFDHQi7v4UMDuBs2pSNWeoaBpyWPoZXj9DcHEwRPBY3piRhyiWJYv1PxPohU9qcNapJgnSsB8pm4NkM1ytB55A",
  "key9": "5iBwKV6gUcfjHTWhdkyFx6Kp9S2caBA629Xu9eXQZn8C6r5dgL7TCmpNXJLWnB2mJLM6qMVFHd7f5RvSYKafNuyF",
  "key10": "66gwuAwJ4gsnHQV9TxyYUJB39mbMraL9A6sUfb3sAEW6CwkBYRE2tHKx7b6YBtP3NbWQxcREYZfY5ESf9Tys4mwc",
  "key11": "N5iF8GG3xtSX7S5H5NjThZBULotGJW8FFNgm1qkRv1CiGjGGitPLY8EjeA7WHSkJZMsJ7u1VY4NJUi2MPrZ59Ps",
  "key12": "4X6teLP5fuJte8qMi5CxhdxrBeUSxqzHPSgLtMPvivYecRsHBXH3Fa71nEbyZ3iEwmWkoJuwzjeSnZ9q5EfhVMY5",
  "key13": "2EuS4p4E5ovB4hPcbKhfbmUzFCopRK6CWqCjT7yPWG8K8ExmWMe5cq8D1tiPAZCvLcjSvP5gW4rAK5dHAvL9RoTH",
  "key14": "2JeRGaCrkfAgwy97WyZzxnpmSUHddqo26RYn6onntCmv3C2jKChm88Ai5KuyaAXFrYEgbTJvXGq9xprSPvws1oSn",
  "key15": "ZN9Fgd2qBQiRHKpDnfEiRe2dnMci5ftjsu78y1RxQUDLVDGRvP1LyFzXzYJ2f3Ucjz65rVb1NsUaZqfEbRgjw1B",
  "key16": "3nLCL7MTrSGyYY1UA2twygpzbSXrddfRkfdjbzeK93cWKTuTgZvBa4fQFo9Fzn3dX8vDbKQKS8TUv2ZMduKa45Hi",
  "key17": "5iv6BqBBBLNzfm7aJFhKoX7cgKeoQJJLEPZc57TSCQ4un2sy9vJHFdkgb2phXrZxCoZaZTqe3K9yxwCoVR7Tt1fw",
  "key18": "3c9DtrEes3CGmFEbKHCBjZ9QuUdAhUvtdKwQy7Aeexm6Jc9LzJcV24WCv1AbVqJxGhmLYgtKP14TDoXFqSD4CQ1m",
  "key19": "3BQ98B1nU2SmQsJGoYJ1o8UrFTkyG53618DCxeRd9gfLarAzDLDXFqBmkTYYM1a2qYZGTvTGDYsFvncxjXCDeSd5",
  "key20": "2uPovLmuCDQgdfHpSukQCSLcTrxJaMFRY8HCpkpEpxefWdwpMaEXeUVgpKyMdRd1BNUxRX4ANjGcsz8CduoZccRP",
  "key21": "31CHrmsF8M1MNDL5oGccG1C9xVcmSkHQASGmopQWjsscENMsLNctuCHFnafZK4sYprPRNMZcNmZXDNMpwv6Ek5BD",
  "key22": "4WCeKa5oRDa3eVe9zzTLNJkBrR1GFgGmf4WxMj2Y9hKap3MFJ1esq3MBi6dxmW26ifCJfoXYwfz34iuvYNWH1cVa",
  "key23": "5pkCVeCZqFdFVHjzbQZKrTeS11DAHxyY245nwDz13sj3XgeuEaBVf1TbLrf4jiUb6jpYro5Lbdt7NAWUf4cUc96E",
  "key24": "NDzEBpy28PKYdFDJD9TWybwy6s3mMvEUeT8837fDX7MoR9CtjzmqjjXbKMox953mCNF9CmD9QRPkZzG18Lf7fms",
  "key25": "5vCr36siYqpRZ7sXxcs4wsdpzsASbeVsyaWGrX3hkZ3k9TyyanwULZb5rkph2Svw1uu5ixTAB9yfN3HhWM7Fr1sQ",
  "key26": "3Y6kYEnFogfH1g4qJu2AXEcyPxXhDznx6JzUSL4CmneYNTRsgV2KrbPt56LSz64PqEgU1GEL8bNQKW5TpZvhvFXL",
  "key27": "5pZQqmPJdcHa6gJt7AgSupMmokG6jLRjDhG4yFvXTNCshmPLpxow5Nxs3MXUDkCP9sW8WiMsHMTgnHaj8KdWdF5b",
  "key28": "595wVbCiwkr3UgXomWfu1q8n4M8Ywwj2WaTtvUCxmcHgrAucCPXCYxE2b1xjRNmxKUbgHrHCPBGmEYHycaaaWa7B",
  "key29": "Mud98qeshcAbcJFwUppBRu36WZKxAQDj5QuB63LoHm1u4bkxAfFWRfhJvrjp35vEPT2bdRGKQ6BsVZfzAGaANTW",
  "key30": "5dTST8jXbkTTAZTSvwRyBEJA5Fao25CodjE8kWSZrCLApjoqcZtAzGcKWa3pJifRAjbeteEfuwFimNkrQmyTPmup",
  "key31": "49xZ8F6yHzmr53R6EdZGv4y4qnYyLJpLiqNBCgcmVi8nhHYAtt8M434msBzHJS1aXgS1Jp8vsCjKqqMGk7TNE8N4"
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
