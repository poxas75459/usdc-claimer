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
    "tZZ99WDR4JZiM7tbWJCLsPs1gAxumoMgeM6WUXpEX2xt4kA2wAek9hc39tiS9sK39xq3WyGAWKr982ZsV7ovG6m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22nMtpFJWmNPYR4BtUYbLU55jVhW9oYFcgUi9fqbaaiGKKVTzA1mvZYoJjpp59TVtGqB9LjnGA6daDH6jhTAjQZQ",
  "key1": "5W3K5bBj22ZdZ3TUzLpLJbckH8NNhhNJxdZ6eqAg8W1GNJ341sntRM3EMNRWzEzEVmVNyEuFxUxyauxPBscoAUSg",
  "key2": "4DFsV5y6yTpS5VHJoCoP9PhnCr8k2Aw9rfXthjzbx6AFDMsnihqswnAnCXQ6ue4CWw5Qqe1gVCjjkJvcsJxEN7oy",
  "key3": "5Cob5Xvmr96HqHGJChfooGNu3Wf4fkwPUxDyjgxiAt5j3PXYHyFVB3Wuaud6DbDDo2MJqTLmLu9haH8CtauRzWWv",
  "key4": "4TJM9JWqah9FfgCkGuF7VKRNvENenN3CQhpQSL73EuDi94WypGuyVRdjpc5hoiyEjatRMpHUnFpcQxCJjJJbNrvo",
  "key5": "cWLrzocU6e4ZJgd9BtNoDh5sHBuSRbg2M6xfj3pLoGfRhYmAVyk8jCGNZFXX2pspZ3erTvXHpr2qnnWRBq6oakW",
  "key6": "64gjyMtBeR8DLWtAQukVshW545bU1fYGdBenq5KNPtvvxxA6iimBEqAGCExWwJoQaGhEto6V3MVumqoyNQpRUqyo",
  "key7": "4PbmEeQi9bSTvoowcZgQW8ZzRhsqkHzsbnnWc2QxJHxT4bzZDBHkSAwPyzbcUvhx5k1nLuJvFvEJ5B2J7rUsKD6T",
  "key8": "6Teixtjjo4RYbEeu6Uzb7c17escax4NdqQzF3tHAD6GdYdH2hdFAJ5Axpfe5d28BQ3DYBtnWmZW2axfSr6n2Vi6",
  "key9": "T1pMe1QAiQLTn952TLanFXhh2VxZVPsXYEeL7L3CNnxCF189bbhUHCZEbSRrxWgqhGWu2zBQTDbi5ybcrm99QRf",
  "key10": "41MuRpQJTTLvXQx2eUreNbQrqAvMhKXGDeqDxvcmYo2krbBxSbiUqDSEucmySeQaL8jnCdJNwQjcHTjmyBdMVHkE",
  "key11": "5Ysm6mFacKay8hKvUDszqsmSHiftQ8Bu7TGBr2bGuLA6RDuF4nVfpnM4H3sDRAF8nUFRXtGfeNGf5vz6GwA3hgyS",
  "key12": "5Fs4FHTd3h7k5BrKn1o3Go5AbQDGPd8CZFFyQzrPixJEBTEKB5kocUuJbN35nsqBHc2tuBjTLvm9DcCm8R4fG2Qh",
  "key13": "4gEbsGdDUFnmcb7PVfMUJAgnz5RTataaECxnSCXGF96g6BbYq2WFKjbtpMPiRJqCtFgcboex1SqmUMtNELCsCTEP",
  "key14": "Djf2p2dtoxTqKNMjqjgYyt3i1RXxHQVjVwvCMiswv4MrkmcKp5BhdRKxdBEJrfEUBKAiUfgF2TQD4CeBFpFFjcg",
  "key15": "4GPjS17mVZmkB8yofuf6Hc7K3CLBHwxnCLZ3rGmaWEa2yzSsnvw2qDq87CWuwvPB91bxwzbvr3xYb6gJs8f5zMCi",
  "key16": "47tQ4MZCFJBvCr83eLiD3rFbKJCMRte7VzymqYJ26rLxH9nxU3pUdVtUAiQ1aAftJZVagMZ5daYYufYW5c15kNQG",
  "key17": "3EnMdPqTf4YP1QHcWp1YjnAYBj538a1Ynzft2xABBTDBCwBSc1SQFaNaV4hUZFadShZdPy7o2G8t9hy39SWjJXd3",
  "key18": "48p5NS1Pv3MkVtbKGjJbVApffUXsbtCQohKUppDumcYu5C1uhAUMJyC9QvmPgAnVi95FiXrqVhkfaz8TjxSEobtX",
  "key19": "pTVnvokGqJviUxnXuwcMn5CGLwpFUa6UuXiMd7ZtsAF3mTpjMC3CGU1XRKZ2begpkPwZFvzDc1mHtciaeGobhCA",
  "key20": "5AbFjRxieQFY2MikqtiNYCr6H4si4VeKtqQA7D48ZdFkLdk92Qrrjd86GbNqCtyDFE8bic7C7o6GQpRfswwgHgxh",
  "key21": "5FYPLZsNoTXh2aHVdQ88LUqCcB2XN4NCjp6dkgjVbmVmG18qEQXLCwtYyQ55WVcekYH4ocdMNXH58QKRP3Z749VB",
  "key22": "2EKw7UHeYXBj3oiyWupgzvQxHrnAgVFpPA8E74BX1MHpevSQAqGabBVP29jM2RARuQA1mcvoVsDzHP72i31vNrHn",
  "key23": "dCroatruF5q3v4t1gpMEsGaoRCXxxuLdBmAZhTTcFgxvBqrZ8TsNNC588SRgXDYYYi2UKwRjDaMaG32Ekp1j9bu",
  "key24": "5vqk7NQeJgjHKBCH5A1pwHmtLYZZjFPz2TDNDvU3e7pb4zj3hBCQ76VuXGe9EJXHm3bUAbfFdj9SMHmbXduxGnG8",
  "key25": "27eLpR85rGWqRARiKCboJ3XcXZECvuPRiHYacrxPynpEXijoq335yxrHywbRQr6D32oQVsk9LhiL8BnjW9RoRCa4",
  "key26": "3nscu1DPJmRrTWduBmjBTM5e6m1vzesF8fFvzhNpLikUa8dvTw9aXUQLbPjts3zdFvfKKUAsd5yFaFD1NyY6Z5kk",
  "key27": "2NsWQYnUqivrL2iexLQSQV1R9tjLxnv57NdfAoxXnexo2fxrUeyctPU5ePYWeZFGVyWwapK456tSCEBkPpLufYeg",
  "key28": "5Kn6xK8CoMtmCptZU6cEEZ3WkbeH7Dp7G2XP5FYqqZefS5WeiWCD2ea4Rwng3NxuFBNTypZdmnpTKaqNWzQXETYH",
  "key29": "9uCXGpx3WHHFfyEn8wHYFp2UuEsgkK1CTcUE3wcV9K7dVPL1VDiepBzkj4k5K2myW7Cy8DRuuJLRHrdbeey91uv",
  "key30": "2A34pY5exaimAnwLFQkAvNs5vyjAgq8wSExAtevGLoKNPRMXt5x2qBmvAS2Y9osKoLVjJyMs3XVW41gPjy38ixHP",
  "key31": "4WZ2ygskpF1YNFQGK2QgkMLYskkAg5Dy4T5wj3yJ5jW3WG9PfGGLVpc5Ssz8ve4ejFuUcEmRQE2jY4RxFJJDgkYj",
  "key32": "5nKp6ngntfDr5NXtstG6BR5giD8NvtWPjfmPFZdJMTw7uP9zs7ZFXkxAViTxFredXYZ4JgC3DJqPmU5hKGMEJaxv",
  "key33": "36mHt2uqQSqBrEqDHBYfzENNKtqyNpfkHapMBkdBPdvVfiTBWyq5GepiPdNeH67cVunwFjuXWgoEp5o9Qs5rERc8",
  "key34": "4vHydoBQk81Jc9ALdLdx7CGWzSYFH7voU3dz6qEgbvpdFSjHKc8fzwit2PyCDxzPJmDQfbEdNJznFx1zCVbv7QUL",
  "key35": "2je196oV9ke9WXR3RRTfLr12wwHt9P2oM5mouZGtr9LiQMdJ2Dxb7muD5qZYigpR4w9X9VbraU8S7kFETb1vKou",
  "key36": "3GdTpKtH6DXmE8apsuuxLExFKNBLxGczHMWomCRrD6uBf3wqsM4Tqkev3yXirNdgXo5PD9GCeqhLtAts9Mv6gF8K",
  "key37": "3orjXCrUoAKGhJYZPpWAeaGvQcPpWuhZM1cAyHXa4qk6F7UCEjsb1oJbNjfZAgx8eAworArk7NbQZcY4Z4GwkKx6",
  "key38": "3mwFf6MLaGsfqNouqb6uGDwVDLJPDXkQwDL9SMH5Ea6bLmpZXjkfDAUHrk7CLb8rPPj9q8kZsEFpTzCp2TXLjxfN",
  "key39": "4oTeCtEWy7du5Xf2fSQ6uqwbzQGCdFRUouYFTkq81AkGRDiDxYo1iiYo4H56wprAzp553aFq7AZUf7Xy28tEA3Zq",
  "key40": "5pkbNFsDX19qeaMuq9RJrGWKdL2iJkuw8iPw4zE99DaGpvFZJTyjtFRtex6mrkhDesuda4csGwfERfn1pzohhwSH",
  "key41": "2WSGjYZefJ6mFPtaqiPjTrHUjkLtpCbmgJfoRBVJNVqp9tLsMrwjoBZPocgBzBcBdsQQ9wMje8GuLFWW7mqvyHYT"
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
