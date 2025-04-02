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
    "4t9PrqmLNMpZamqfRasUtgG4YpynQJivWNvMAzYShZLEyfP9DfTTQfEZ7c3qbooE1E8DbXvyxZeiGqpBRcckkEyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7jEMCaRiskjZ9QoMVYn4Q6J55nsKJFAVC3xXchmtQzP8TDxTaignMLKftDetYx6hNW84Bg5vyt5AAm68ipbtgyq",
  "key1": "5exFpWjJTMZePJq2jWabREBvLP8kBGVL7D12GJdsB8kBPct3Ezbqh98GSpfrQiDSfJ3Tn6pXqVEQb7KMPUPf9GLd",
  "key2": "5rZVWeqhZ36tLnhCLBxVLesS1VR3F5RoVtrJqy6r5jpCKxpxFEgcLgzJKnidbFA51wsQmPvocwMUqy8SJPq25Xtn",
  "key3": "XbMFpfzJzodMKkr1hCFX8jSRQ5HyYgxsDcAZ6XeuRr64NsdqPCncojZGZeuxcx2aGxTh8ktgSUaujTtENSdf2NL",
  "key4": "3WYcc1hHAfR68oGbVabtpE1D1pyVGqFr9sLStKrsbEpKHrA9ckpjK4Z2f9ug3ZoaEBmX39nCE7zYyTbUL5CFvRWa",
  "key5": "4GGutRZHnnTyH2w1sfjQRavpYk2t2J47ok6EX6tMYwscWuLUjjqgCGeqXAzSUmFLj2xVNujJvTNQ4EeNFBRwWdst",
  "key6": "4d747bfh5jNfGMTjij5yrM83odNtcAorRGqwj7JVDWnEn3jtPvKeEyBUDsP2zGeZfvS8Jxo6g8cYxAcL1332Dmge",
  "key7": "3P1jJYBwEPpTX7V638qySRzJurshPenmoz9DTqNnRoSwikUybw3JhbCrie1ACDTkPMPJkA38mEYYAJS1uDniczBM",
  "key8": "2ygV9Ghe5waNjoRU6TPV9e7KAh5RosPBtZhbyxCTtiquPxfzmEY56TuN6HpyZG8x7qfygFnwpwsyzE3L8ALUhYNX",
  "key9": "2g4TWZ4VNf6tLAJheKcD7PxPmPpxuVBsbTCJEX8x2CK5eQfKDLqf6TZCAdeVvjg5aAUKoXCDXKGA7vKTr9oUjL52",
  "key10": "58XZM7FuAKuNaqKXq4FxpskFjFR7CxsR38gfeDBq7Nsz4x1e3G5r3SRYD3gtdaSn1pfvHMeq2AvqT8BMv6JQXusw",
  "key11": "4hAFC3TZTYg8mUbTvpzXtkbSGmErGrkkotpjCJZeQpFtsK8MMoLZcQtrWXC2Ekc3hiT4P8mFtxtHesUWKt3eKZud",
  "key12": "59iosBtGdLeUqeKntySQKna3JSH5iDkQxCCFxqTxxxkRrXGi4cDeKwK5NHHL96dc31YzVT3yAzVywLpzpmJr5f4s",
  "key13": "2VUfgZepxK8Chv27ckwGavyhbs4qf5qK1SeraxfjqhfrT7MWmtNZeUcbeae6czV4adMo8pjnfB8fFFdQmyizmNkz",
  "key14": "511ytx3U4qGVA7oXZsapK7f2fuJ8aCAM54KFhUbUqzx2p7ApHACckyxCjJr7DrP4mMSZ6cpUgKorA77ki6ctPAXX",
  "key15": "57tXTo2YFGA44SNFNgTv4RULtbA2cRh4MZyJkkM2XiYNqVNXZupsN3aFK8wR27tcP1q1D4t4e7ESdEF2m76s8qgo",
  "key16": "nJyyNTzNg9SndD8z3mW1m1mFjoUt6SBGULwWSt5RKffrLSgvwjVME9GnT6MC7Fz1sH81B2hEFEY8AnKHG9JHdWc",
  "key17": "5sz8uD8sd7eyNDDnYLkbXQ5C72iwvFHx1zd9KPUkuFnJ4iLxnyQS5CzK4B1x82PB2TZwwmoh2etbp9zhejLLgBuq",
  "key18": "21denaekr4CrEAj7P9sk7iRVQmyFvf8WufMMvnrvy3QV2udYbTz78GVLL1oTWF8HpHpXAxST4CZaMsK8pU5e54jp",
  "key19": "4L1yVfjstF623vs8BawApYwMBzB45SaT9AKaWsx3PzcCAicPD5WutXHtLVs9mNatqVrC5ovVRwSx464U7QvahGQm",
  "key20": "ENigjdPtM3VPaCMzGeqVeMVLGUbiab4kQAArguZyfP4JkQb4akfzVPgHu2DmQaat81Qf7vRqvNeDS2bLFx3kK5V",
  "key21": "gfDGfj6KqxcgRsdHWaKpsRbg9fdkiNmTV7MNPQCva7NiCUuaCmyEFusodGYrcQuWsC353V2MHhoKibgGjBEA5Gz",
  "key22": "2UFvwRgGUEpfNo2tSWkaGmxBDVgG5dNB5Xqx17SjHjo3EJ39eY55CvZhhutwi9BKkuHbYx6owHZXwv1w4Uo3DuFT",
  "key23": "4vgDxrNpX7a3uMvQUfJmXC98SCuiaBKhNPWPbERxuuj9XKFAC3K8HN1G9hPwo1d2pvApv3sXC8HMkU7WdxZQdrR9",
  "key24": "28bzQcmpMu2q93PzTA68nttZBwyhDJScsooRGf4trw52WJHqdTNo2PQLeWw5cgCKJ4KrfHDQdy9nknHSz2KX5MVj",
  "key25": "oYgkueDxqQf65HRKBF7WU6UbHwpmouUyeJzidCUQSpEAJzjuy3QXYoRVC8q8UEm3mgJaALFBaVx2jQMo9tFucoB",
  "key26": "4SQqR6Ph3Yo1DkaktTJThYNCuN7Lt3CA3vDRMD5QYntpovGxWtzwpLK5HJN4ntnCyqSdFdNCV23rrVLxuxq1Xq5C",
  "key27": "JBcpRNBQbjZzqM6VAvq9zTK8RUTXRjZzRrfuGVC1fgn3qNw9Vb531gy48JSALAiWSdmJSFB2Eaimi2Q1dJSHdGr",
  "key28": "7PBfVDaAHWQV2ikeoPoprLtuzmvFpbnd7YBtJsX6m8hTFjQghxV1W6dKft4oK8732pYo64giEy6ctj4kgG467Ni"
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
