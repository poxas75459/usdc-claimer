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
    "1eAczTEh6gPPAKLgUdbQeCzZJ8oDmfzDJ8XYVB2vWf1eMBnkzpgLvZT5eyFfoTHbEqvgb7mjYmh1c5BqnYZgot6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SLGm7i6UZfXMHWPbGfcR3DAnWsNHxaRE9dP1sbXjiF6DXUFKfECvfejk73YsgmVLZhaaadbEz3HZurWt6cPBWtw",
  "key1": "2ftx1TJGhhXx5Pvb5ah9VZADxCXxU3LKJhraZnQMCjdUpf3i28dyyeQQcDABsrYrMjgcV3hpP72zozdiwEx6Aa7k",
  "key2": "5H2uQuk5y6J65X31me2P86Tm41zvFQMr6MQiT5MCPr591nzZxUyFachwJ4trqjBaDZExeMX9QFPkPCgVcj5ig1TT",
  "key3": "3ak2dSURVdZN69y1RGLGdc6KNwo4qSuMwtKUHSVog3h9p7MZCHG12KJEhBmHpbx3VH3RBNA4QKUCQ7Vw7ZWEK9m1",
  "key4": "2784PdBQLWvSz9ZZYpbdYPGkbr6ErabHbHAspG9jwbKPDsrjib2rGtcs3GspH7HjaZuZHTmn2DFdDMMH7KQvUvjM",
  "key5": "MUMBvFStzW62iCyfRWosXnLeGHf3TAzbTzox35g87WY34Zzqt5JgxU7xNsqW9QADY5G7zxbRYPGCbSc91VRyeVy",
  "key6": "2H6E3LFnFjJfrqKLyGK9opEDxDNV6z85tXf8fxPG3TY4C7tkrpPVCWU36fbBq9G3BDku6JKamW8nGACqLu6VRwYo",
  "key7": "5b6GPY9ANVaeL8fSqogigaas4Y6xgHJHNsRMcdrX8KGe7f7CYnqHrLiQKV9BBSiAKPwdpxF49cMJq75N833YTh8S",
  "key8": "49WFgNMJiKoc29P4hbPhB8AhvgTdcjYxhBCuj8rLZPCKcVbEVVgevqR3xKRz3uwjDb4wJxVpGEZXETTQffXAnN6J",
  "key9": "3eRqssi2rMiUSvXSDHnUM6jdyqrPkPsXdcVbTpCmuA9PrxnenkEjtBMxan25asKujKxDGUrJAc86Jn43iWhA6jER",
  "key10": "4QYMKxjnGLkcXa688ZkuL3ZppGXxALRGi4HCHeAct7nmdi61x12w9fZxRmzPSFfiDRp4YYnAk1htTzuX4GsTt9zw",
  "key11": "cS9g5VGY53dLpHNNM9hDm18gLPze3GVwV8mf1Z45N5XcfaNr1wJ5afSYK9VAFQtXNpoKuhKt1tdD4PYX9q2rQps",
  "key12": "3F2y49stmxcJ1odZYWEoSTk2FdH9VsGV35tA2dHPfwgpJSmGgrVSjH5WWd3kVntghv4sdVv4KMEXZMWbWhq4LZME",
  "key13": "5sau1HXxu8yLdL8Stz774futVZwnde5tFkpLgr56xQw63gpwVH9Z7JCZjnMrJgDaRYkGDex33yZaWvabAm5mJiLV",
  "key14": "KeFvwnAvs8G68iGgHRPeX6GZHjLXcpNZCRWbuDYeeFXrCECvax85fUzqiAqmqsfoFCGqMYPLZzGW7bf73B9fvVr",
  "key15": "Q3jiTq6ers2RgDWSkeM1ah2vbKttqwVJYPMuDP3cDGcxiqgPtNfQatRomGoXnBt6NKRSQKY6wQbHSnzcNXVnavf",
  "key16": "4xwCypRu1WcsDM7hZASv8fQdzvrngXyBujtGzgtyqiePuZodm762MF3r3SHVn52JqK2QSKmGedXBaRcQbxv7LBzv",
  "key17": "py4VQ2FhdD5WKe3GTNoQgwqQYcnJ3Hkwk8VUmAujWsf73cgvkPbfDfDQwvwSi8tBtQhNFHw4DS1DYMF3wQrgngY",
  "key18": "59rk6zEcjgXnoiujpvm8dWSWvammrn8UXJwLTh3Lr6tdJmStuoYN9QUbMKQmhYNsh4JnpJHyx4DDAynw9qWEtosH",
  "key19": "4tRMBjWRs8ok2AcyU9AquAzdiRswaJUYWKWXVcaseJwnaXPEQ4JrigQ9w8bTHcVqy6KTpedMcHUBrMyMKF9sD2dd",
  "key20": "2XRMqzwCyBPWuUpdh9ngG2VzuRrxkdYbSvrEySSzpkUJocvcH76CjenRwdXqZQCuJkgJ8FpBXXHU77J1ZMiwj4EU",
  "key21": "27bzDAoNX11oaR1ohYtJadvkamXT1RjtC5g2gCE8gbm5dYe8GWLsVfv5smSio5eXNQKae9CJiojahNKf1Ry8vrNm",
  "key22": "2M9vnHshUobUDX1E3fYgzdsFoNJSCD6WCQRh8sEsRYvdFBH65XPqMDuU9ktDKi3M6g9aEMpd82JXZeTEHMysvZNk",
  "key23": "4eZ4avgQ44DfYBrFjYWrum3uyo1q5P7z6mycuJZMWpgWBAukhew7M5s4EdWfdNPLz5T8H3XJXuGu7pgfBZcG5VNg",
  "key24": "4r9m2zdQPz5Nb1rGfLhZnRnh1fGfp9PAGoBY9veHbfe5uYxjJV97Lku98c46v2LxUErmb6afsZoLwfN9NZ596Gtg",
  "key25": "2YQCT5EvAnVBttAXe2En1XX3Wy6LDWcGxWo152i5sAh88B8uXhnbNHgwvwbKhTkH2sRsWbgx3dge4pNpo97y9TTn",
  "key26": "5NeFbbBnhRMxbmbSkJhMfEhF4jr9aXcFrDgYs7GHht3vKuhZL7gDBgnAP8hrYs17tYdwpQuFgRTr21AHwEvMmXcx",
  "key27": "39eAkeUFVLacUTK3EDEyFBYpHMH9qvkVmcbPhhvCv4sbRGH4n3T973uLcVh3bHbj4Xbyo3iEtGfCU8h1JNMsCuy",
  "key28": "2uaPnTH7e9h4EXqZzumoV2K9CAgVMfzLpJCe3xWm1UWD8eJh51MSDBkf7NAZgyE6pKxFsm5H3QptXRPXSVayhkUJ",
  "key29": "mm4FKU2FB2kAYnN3eXr47aMWEN32neLWmYmzfFhxJVq4f8agdNmBskcorahXFRjjXM9PphewmBcN8agPyjLGPzC"
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
