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
    "2w8sxUmnTUpDCdtHbBFCtpsmdaoqqDobBWk48kCsvmTxuh9auwYwdLGN9r4FrVLQ9tFvWkKWuixp5wbLQWgTKbco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ls6y9U4jPDWU86gpU6JooGfzzumLLyxJb5rZJC8v6gg4g8NKLveGQoTRBiPGfuDY3eE25KayurWkVFBbNe1uz8t",
  "key1": "4gnqfiJ8ZbF57wQiLX2M1Q2ks85SiNXCFLZHJ2TU3WGuHSsAz4bqM465j9eNY97hgcPnvGX8yYgCYsKREfxcLLjL",
  "key2": "zUFCLGVoXWABooDBEVmj4rTV573uHyxmUJH6RewZ82FeUykL8LS8AJE7RwZYncyxPQ54bRVagtrhDgAHgM9igrZ",
  "key3": "2zFrWfu2JNAkwoL3tcZKJFquQtw1NtA1UsUdp2Ty3hncVmyp965zzKh4kXCzMnpS2p1UzHKTLQkDkWcX75gPyuRf",
  "key4": "43FUqkYa5PiMfMZQrHNm67p9xW6xRGC7PKBoGG4kGfxh5WnzppJbgyZUijBozt2x9EpYH3ahtV8ddqCQSYqZpy1g",
  "key5": "2ibC4GVTaknxFBHVyLkSwpj4Yo29B7wA8A2X6EyqdiHYzKyydUjKRd2pvz1jU3948p8A8ucEeFAvJB5nEz9b46Vk",
  "key6": "DyDSrVtphre7hFsXLoGd5pok96dVoDR1erjW6sAgHMv6kee5xZ8y6BfZYzxB8hMB3A8kG8D1Y8kbnrJUAVgF24a",
  "key7": "4X75izA82AgKhhHhsEYJ4KEkbjH7AYNjBbeuBkC9M45cXeYybFHvHqh4qYpk5WMR38YVxsdPEHP2B1tCD7VXEKJt",
  "key8": "5fHBJVxvdm7T1RWMsardBvWEJ1tBNKgRWk7PJBcE2frcTAjRBtPQ2se3mXm9qSuRde7eFh8bVkRN2uPnT58wm4xk",
  "key9": "5z4ciVSsttq2SZUXwBUqySDDNw9jph54wqviyiGBBXvh2C9YgmEQwwzcTz5xUCKE1MHENfKdd37A6hZ1TSad1wcw",
  "key10": "3o6m7sxoovrwa3Y4FgoDznp7qnKc1pMCXDCYC4brgVzjKQU1fUWxQHoStbJAX8gyPtRMsDrxshkBfSMzgx52Yk1f",
  "key11": "31GykDP4C7LH6yXnawp5AbS5FjfMcfNQcTPcBh6TvwQorjsriV3ofo7bn8emFpPUxy23vo83MbyqjMDyjSsWepCt",
  "key12": "2koshujDAwMpmnQ4eSTHW2kFFqwi3yzCvhCndqw9DgvmyvLgjD3QXGJ8Arn6Bh5bgFcixvFtBbQuJn5wsWStMiBK",
  "key13": "4abGfm7uTVRRBfUcbRJDJ6nGBoC8PreoH6t2ojifx8d6jB8YUtbH6qFS74xKMngBEcNW9jPrJvk1sCUAyd2ifEPH",
  "key14": "aUZxSiDMLmVKZ8Dt1WuhRXBY3KiL5HREYaJzsjccd5oQkdRR3bLzxALoqj5AE6VNKTbTfYnn3S7BCF5pSJbC3kX",
  "key15": "4ySwfRY7ekXRjcynTq6bNFbpnBav8pj25if78UrAg1xdAgp4rPY87JnKABogyGWtNcUWjnUeWqQWhKVMNdELkVf6",
  "key16": "31Q426nCQ2nnNReGhepYeMJU9t1uajPYUo4WbGuhgRHBchiviSLfdhhF6takDfKdKxw6NvqCZBKM23N84iuCZ6yN",
  "key17": "3zi9E8oqaR81fVwdXtctruMkEqafqXRmD6Hy7anHa5LvHxYWeLSTFkV7KmXze1PGWtUeTWbcSVyATETehWqycUBH",
  "key18": "5CP4tTYuBjwiafVfTpt64ki54owQZuWsNgYWRNpvXtKwoVtXU8tMFDRTVqNPgVhLnd1eva2yVyK2kd1A9mzdKZN5",
  "key19": "4rUc8KZWFjje3kP9EEv1Pzj2iFrvjpXVkdeexUqwjptrWjEExJN4WiVFPS8zhHvuyxP7Lbv1QEKYSQ6deavvTGW6",
  "key20": "63xPtwmsAf5xgoHokUDDo86TA3vUacpFDsw3Shjgwfmq622MrU8Ax2nqi55m5z9fFqGmhTjMeD97b9j1SHp6jThV",
  "key21": "3yPQpzhEz7P9ywVqfAsfevZLPHYRjyDRDMQ1BdLTbtcXGhcygt5Rxer9s7jTpPLKVHmXCYT5R4wXQ2sc1AoKManH",
  "key22": "6afVRPeusQdiJ8V4NyiU6YW5rrDbqGetqsRu2tsEjsRBVBuZYNy5upWifDZAf2upMHVBrwNRhkQ9etUw927zLAv",
  "key23": "5JGgjjHs2YZU2wL58NMWoNL4n4d7S7vvB53HocjSLACw4FZi2wkVmgaZgb9yupQ8v8iDkttNcxEDKvGhKBgY2yh5",
  "key24": "5HjTxi12ERkCiY5JmnccA35YkYFKXEczdUN9D5mbH3AdB4UMvt6dk5KZ8RN6x8sKHQJZLjrLvcZ1khayXQJZbwJL",
  "key25": "4w6bEWzUpJ8NkHxE6QmSBW99YZ272vobEFbXggNfgyV4maQhTuwh1TzcRKRjUvpmCDcpYAE94TZYRbaywKobK3C4",
  "key26": "Ybi9LaTFHzXccTpMAacWcJSUTk19NdbooGPrsBwfmqCueNVTSVTteyEDLAFyM29X7Szkkeb1WAXDtQNzDNEFb7e",
  "key27": "YV8Mtc18No64nCCb9ywGQcggEHVx7FYh87KdwqkxLXXdFEFZEMTvnfTqcVdzEKxqSLu3th9uLHjYR8DkJsdYWiF",
  "key28": "4t9e2GvSW3fEAMjG9d698oYnTuqnync1Ze6FM4T4D8yatXNekFSN74bxu1guFYHzVhuitFhLQ84fHH2zj7KcrhSh",
  "key29": "2V7VyCyv47t2Ffy9G9VtZwGnJ8iVmiQP69qvPTBJ9khtp7Gpc7yLFAcnALXCfr1M4zAsE2ewmkBordFfc8uxtpQP",
  "key30": "413a4jjsexeHM4tdWQpZcL1au7XhhETZUqB9JzbYgx7E75MC2oMCof8bsAHV4Kzewrb6UGddqNPRUQZsxREE1GCN",
  "key31": "4cHbMvurK938WKJ3hpLcDzNqdApXMwtBQtQ8ibKTFAzZ3LuxP5jrxS3tJKcV88MJgJyx2TZw3aRhYtQqwY5QoUFR",
  "key32": "49uv74r28abGyJKsK3EUcfWk1nWw69Ec7gK8sv3geZesoTAecs9gknYWq29cAt3N4BvNLdX5PVxCYCBUBvqZdpx3",
  "key33": "DHpsFcWNHkuf8NZHqPpxSLrHfKtHxN2uTL1Cc2i7WDn1CiG25ic3QhZGMHvMmJwKjb3BJx2hbrhny5JP3xS9arw",
  "key34": "2PsvNPaPRpGkSEra4qVfMN8CCwM6r9iniBqRQAhxQoGwxFSeiRKnVbP7Z8buyfcHRiFGymziTyy99RBdyRAV7kXD",
  "key35": "56p2FmjwEreRtkskgeNYvcKwmCijN1gw1fFy2JfiJiT9cXVdswBr773rRTFt6MoXLsQXHNoEW1mPZbWKLiSZe2ZB",
  "key36": "3h6AaecPkKR1ZpyqQzwKWFSxT48SE16sLgZvCc1YTFRZL7DNKAf7DK198WSLcjTtFGgeUaQYxrAQUhnvsX1CnKAt",
  "key37": "3nM6puETH7xTeP7Mcp6qfJtejBiPrCcVFEdaPauDY2r3JDWW2AB4K8buKGeQKqPwjhm1eZxg4YiNzz1ozsi8opgN",
  "key38": "4YyEPXTADdY8sXHcJvZSQ92Nj4unC176EiiQeXs1qkD3vjf5aCQpgao7nyofZC2fUnR9N4MEJ5SXJzM7aC8y3gV5",
  "key39": "8d8jMqdtdPqY56kTJ1sJbXUEmYGQsG6me7jYAcMaTUiydej1uRWiEBmhDzCUVXV36mpzGuY7zmvx1kdJDxbXS2x",
  "key40": "x5cKGLfT4uz2aFxdV5BzhKSNTsat3UVP8i8vfapfUUht2gcSzbLMEKfoH44W6xPaABJA3fa7JaQXmgQuHAgL3Vw",
  "key41": "522A3z2BQqYKfEHnKKqhvQwYqP42ifGuzMWRXRyN31c9hCF2iujzGswCeGE5ZxxTqsPRmzZafa1tNTLEhHdBriHp"
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
