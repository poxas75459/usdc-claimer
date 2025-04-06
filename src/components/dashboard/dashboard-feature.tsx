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
    "4QbnKyfotvrDiqscMCXGJmjYX3KrBbJiKpxsgVh3TVgbt5ttDysRjuthTWsrUXm3bcZpffCnm56SkJu7539WyQmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RFU9cHNmeXCnpxuYVk12izV9oaugKvMfr6td4HGMgD2FbTPeQChkduS4g36Ltg9VCfJNAuBoFdrhW6Yymc79vMR",
  "key1": "3NhM2juAiEGt42faJX4Y77wcA4JNCskCpjN6ZKtpTzwQp7JrJqjkHRZ3G3jEQiMcTc4Q8ZWJPETBpTKJBkuwMzmA",
  "key2": "4FsQvsCpQQJCoM5eJGuSHvbGy1kRKB2yT74WvJ21eB6WZ9QnVhqZDnxRSsGcWKnrDxXPtH7tw1QLGzySoZotKtsq",
  "key3": "887rh7pPpBq1hVf5YBwi6VPBvdPnPQRKbiqVSLBPErCpyEJh14i5qabUZGub5AydzwBhZJZ91TVqG6ikeFn2DTM",
  "key4": "2GYCEtXm3dn9cdwjmF6ywMoXYSoHKB8mcVM667M86yH4gvo1ZFTyVxyHxxDJKjaaBgTKu3A78ht1DVHwPSf88pbT",
  "key5": "3usCWxac3vQrRBWu5a6e9kW4DGWyDLXc6T8SwB27shnGxnJnvcyd7knB6qVd4MUowZuaDuPFn9FkHqgoJkk4fQHC",
  "key6": "mSZXi6fwJPsfrY4rGEfPZCymvH1YNCgvcMCNE32EM5Lsk85LDgwgtc3VEDjUvHCqp4FRBFzNVyzcwdXAbUy9tv9",
  "key7": "3WjbPuqMf1r9tXRLuTfKwtGBfjt3J6khcdgLtrgz9nKpbxeTRdu7REKjY2Q7nAUoT1TMLf8nXGp8GSz12hUcRa1q",
  "key8": "5z7RTUVMbAmEx2JJsmoqAph9WBJrpPEmdMbe8CVLVbRN8dFVfFN1Ne5TyzPvapS1hz2nmmcf65mc5uNDdrPCNQB3",
  "key9": "5qSDHCSspn7dPm8aBN9m3nGCkfRMJ9xb3WE3EEHjWX2xXqJ3cW2eXtB4QBrRqHHtSMQTxYTTDPZtMeAcM9mUwyV1",
  "key10": "2iJYK1Fj5LJdV6Rjfq5oEDujWvcDttPiJBBh8FqysJNJWkUBv7buZPaDCfkyUV7yXZGrxSAk7gNoWboYk3QmdZn4",
  "key11": "64WKwUbXiNpSwaTTjLCM3XiNMqxnRKEZy6n8eJATpGemmBEaZTLMafc5vud5R9c6jMPoU4tox1268QUg6cjK2UGa",
  "key12": "tcrDqcwDEKjDSVi8q4srYPiUTSvG56L7xJHyWaW7kgzrcsxoFoLbF6pJH5qraon3dGAkYdXSedntWUyeNXpB4GB",
  "key13": "5Zb3rBZrCQzvWFKfQuvF928FVtrAsdRR1Qzq5pbCoWXc61mt3jvQcgoxGDQvibr84t2QeUGH9ZMSAZAGT81siZEr",
  "key14": "NTo4wpKEvFiYZydEyQnfQghFgrtHvBarybWphjeqG4ZpiAdkcwYVK4aArLmCoHJviPeDV2bLovetEkWzTTMeaWN",
  "key15": "62hTVaFxdxXFmfCqgSBCo5ysfEuH6vYJQAhSRWgpbVPYiw3VafBhaJhvSAs12AQUzAWSYs8CEHdspemxNJ7K7K7r",
  "key16": "4a3EPy6nPGnqrB2tyHdRCrx47QN58nW3uqnvJpeKT5woASu4SEai6HsEWnZQ5CFZcBseW1GGLrf1BVpwkGrsQbpH",
  "key17": "2gG1NeurmKBWYiUokjVD3WCVSS9L9XXShm6Z3k87ymZXVajwfTqwm8QvHbqyi1fTgqhi1BP1vjsxygECTmzxWyg7",
  "key18": "4Stuabwaf1eHuKnFQ9dJ2FKDeC7BeS8Gq5sTYeu3KYnKR3WibApZcjjCpfHMaW58YWieiFbKEEVmZZasDYQ2uwaZ",
  "key19": "35LWgPVQnSBuvzmfVQrTq2Eia8qiZ6TRN24iU4nk5uK4MJNYE158zKukaqRpS9yunuynncSaUBR52NsPizUWWnoY",
  "key20": "3KQxt8XG7kE2uyR8iuDoVNFD6dBYWZMA3ZPY3qfGeJsXNL474BVjgcEWcV3PcibxJw4RTATDxnnr4SEvT5fwnzSk",
  "key21": "5DratYw1BJGC6tgY4Wko9WTD27JjSKj16SQ3zh7q9qAJNknjYpGCCjpS6ro5ZrY6iBbcVco5wJyRG4tpvrDxy2Jh",
  "key22": "3gB48gYW64vAJdnXe7AdvxL9uqjfco7T2ZdnP6XanVB9qzV1L2e2xjt4UViCLNcisADAwoJQQ2WaenU3iAo3qfji",
  "key23": "2m3qawqoW1S6ijG6csQerzeWbBQtYp4caeSiKmnrpSsKLB4WYLo12PiVPRavjpPPR4Mj4v2EZ3e6UMdbDUvJP864",
  "key24": "3Fc6ogXcob1Cy9ogD7DHZsbtMd5aJcSebe22w5sVcbybcjMTcnb3A3EotcXDUWNBXRedgKt6U1BKU8bANSKi2pW4",
  "key25": "rWMYLq6peXPM65BCfu1mVW2HyYS5iD24nZ9C8NuGPPi4hCTQ2QM5feb1rHNaDUDTPUTQrp2YXJz9QjGXKsNw7oh",
  "key26": "3LTgQAxajbBpnYnVe4juQJQeT9BhHeub5LRjmv8U655VDe5ozBn8Dg9L6WHbe8KoZgM5havj7o9Qv9onj4MbuR9s",
  "key27": "CMBkUcXAtgdRxwqa9inLm1SJvZFPaEAJdXuV1EepDBre8N9A4poHV1pfnwxyeWEWGUgSWQZsoignM9QScJ33ZfT"
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
