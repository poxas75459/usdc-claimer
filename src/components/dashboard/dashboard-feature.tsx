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
    "632LZBF8rpNpEZXp42qpQW8yRDCNmyaZevHDBV2M7ZBA4ys81QLrAUEHq79baN6t991qh8h2PuVemNSCrG1iJvpc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CViDiuu4AAJWpd7kaijNsHvsMrVc7DCxGME2qevrU7mgJKtAU95Lueu7xZcdJaWM4ySJjTt5h8jS8tgFEkZrNSx",
  "key1": "5ej3pXLb1aHTNC2gTodwFguVRe8za4JwmgHCc2tq6UrhBRt4CnaRNN6xKjTsM8TaM7bxVt8NFEnoTiSaY7Tu6phQ",
  "key2": "21CyzNVNvNo4BPHEhjzkDdfF7y1pBSQhYaJ8Wun1Ftso2uaYycPFeGed2ybZXL9gFCTRJSderguU1z3pdsrW9SW3",
  "key3": "fu38ZJaZ8qFdoGKmKowZG5kArK8FSfRX8trxWzcE3g8M4hQrYSZFGKptNVJ7w6HwrXjqswmYMBcPLptRprTeX4x",
  "key4": "JazBs2FbqBRpKxgAnGDPgdsRLnsvVFJx1b91ouWzyrs9Lfy48sUtAJgqcXbjA4UZ6zFX8YiJVZbYtBnfPqDLZgX",
  "key5": "22cyDPTJPTfgEyCSa3n2E3UGaqT3asTUMr5qk2kDBaAqaVidJZXLJA9MnTggbnxXM3nzyNpFJWtnb3iUG2iUZrin",
  "key6": "2v2hAXfL35VYvVNnmRs6Tc967eqL8u2imUJ6WRBrNHGXDbv5rUExdLS9xXdynTcQ5onaGEuqMX7CZTHAYT4Pg2ak",
  "key7": "67FBL72HBfa7meaKXGNX5XXeGVTsrhZyhnUE7GaX7P3sD7b3BrkQTpQmRxcPEERvM3WBJ7ncQ9e5K5s7bvfNyCph",
  "key8": "37gKnLa7HSAbsMK9bQZ2CbQpsx4p18Pigv3xoZNrsp5FmroXakr3Sywqwi3frGpanVEm6QJUVgA6wCjuz2x9Kf8L",
  "key9": "vjw3PoD965qe8Z1neqV6qN4aecFW7nKBgqFi1psaM2c3j6LJk535VEJsttgBkQhosR82FVZHoVYjoxTp5SGkcJx",
  "key10": "4PYb9WQgX8K4bNGwWy2ZvaaMfZN34mMuzsaLK2YDpMr6puoqJGAve5WGaFwghGMQXyGxgoScT72PGGTDberj6heg",
  "key11": "4UZc5fdbPovUp6b2hqcRmTZx4tq9RcuFSsifzAvYdJSpGGiWm2u99N9twrTwDe5XEfqK3ttzxKouk9k8XfgJ83yZ",
  "key12": "3Exjr3A6vhGTWsHnpC4TzdEm7d7WutamAkaQg64L7Jc4xXTwY4jXyvk6XyDXSTiP2GLWTyMYSdjzkbPfqSRffGCz",
  "key13": "51xHY5SKbxA6TkdcmWK27EXMJ5sAEtDkzaFH4NvxaW8eDmnFP95c97VdtT1mBkQpGpBuno2iNarpvoQfG4CpseAG",
  "key14": "24L9idMwKu7nqGsH4NKYvD5jqSWxtPkfa7zjiyMXabuYPbtWjueZuLSM8kDp14WX8V9rCdf2e5tA1wPjM3Yzd9oa",
  "key15": "3jBKLxZFqTFY67ZWPrqCKTLe938bMVMF4x3RzAGwYYpD4jP8hEGEF3K3pnuNrCcgcKgDY7fNR74Ri6BJUBymbhnb",
  "key16": "TQpFgGCyabUWi7NbZHPXc2JantmLe3JDrocFqsSDHnLmVmSYqo1CEBd53Nt52QysMctRKZJhnVETh2sfzE4zHzh",
  "key17": "3JpZ1oUWNnnXhL2b16PzjMbxhUknXopZ7KRe2F8C18DRfLnvmyYpoMLQRbs5ApWmX3vM2t8ReYsxnXw6U4Yaxmah",
  "key18": "4z19ccPo48r8hViC6vmkwE1zw47yPUQXXxXtFheRfCRyBe2cPLozFjfQsfxrEFkotv1KzP3q7mSFPUjndBurL8Hv",
  "key19": "5Te8pYU1hq9fg22fgaYfcthNfm6YGwaYVDqkDve4sswL9vuYBMZvaszytBVm2d2bV9LbSX4wUpyckGmSiWQwG3vp",
  "key20": "5scw2RhaRbikaEksELqCA4XpT1Nca8a6nFu9fShv3QAJgXcP17sqNGgGE9rTYMGJ3PRpacwmtNSBn63nQ3F5d68L",
  "key21": "2yJuLPnWF3bdW4t3vFiKyuH9vtcSyMRtnun9nretqZxteaSCcPjcb6rjiok9fJmvKET7x5g9u7aNfFWrg8EiQire",
  "key22": "2j59vbHdRdcW3Ve7GNHmAM2dwTVpZx8QWqfPmFTdYE6REzGCAiB8GgbDVBpgsjGv5StuV9FsZjfpSFhgQj8wuQPU",
  "key23": "3jV9fxogcjxjnZ47nkpq43JeyUyZsQNkfCw1qvKjjmKaFnYTUvBpiZYoDC8KLXSEr5cbaxhAKkyRhwEuRhnsKaQp",
  "key24": "NyW9fGr5THmE8CUNCobAmG5Mm2pHgBcreai8Ny1Dv3XBmNTsJEdu7kaytXfrWdJcFSZ7wsvUXteZ7oZjbuwMRWY",
  "key25": "4sbafmucc5bukFS22SUrkhL8X67nFnEbZkMY1Hkwyvq2pcoLDdEURvdLK1KxBG48wYDeVB7CFkwU1WkKhSfyxFEA",
  "key26": "3akqRJZZde6tKQ2BtezWYaGoxBZJQRCQ53U1vYQwYyrA6w5wvfprguwfmbJzxcELcBmXjxneun9zjBy4yFLfmiha",
  "key27": "8FpFnTQ3zzVk1zs8TjXjFb8QLZUUvk88R7DDtxn1FAXCjxcsbmFtPkif5MQDDpZkNYbs8WLP9Y5Y5XaaA68rKbN",
  "key28": "Bv66YJ14MamEwT14WiTFfrQ3JHrQJJ4eKE1rQQrKME1W5MAVNwwA75sSYAUMm4ewCP8erN6rrYv7ManGdrbzRWz",
  "key29": "4avrEjFnrPwCmPXizGXFqui17Y5J9Td8cH3q9R6nqnPoEQtt2g7SD9gh1y9BzRQb71oTtKo6Bx4cCUTZ1NH7ktnb",
  "key30": "wDXVaBV3XXZpVJogGjhyND44H3ezT88R5gvpB4yuTgno5ssYjEoWSzYYoxPQrUwyA5McsdpCQiKEji75RWVJauT",
  "key31": "3C1E73vHqGqEDQEAevEzr5pKaPNrktsbFEZBrrT1jteGdz8huSndYtrsvLpnsMDwLUWcdyHqAHm1UpLREMXRoR8t",
  "key32": "24j8n7gj3eQ1fdxxjiLDcmuqdQ6dz9s8Tw9wAAqUg8yHmLmuaHxNyAD8wK5ioGcyLdQGYbtdGDtKmhCKx7k3LPSU",
  "key33": "3ZmN4exkvtc4iZLK5oj29cuSoYZWU869PvorVBcRNAngyvYsAsfF9DCE4EUjzAgjxv96h4vAtFh5STjPtnsLaGae",
  "key34": "2kTdhawd88f5YEK5vvz4fXpMPtJ5ZujaD4PEnFioHbToqKES9segg1freCXWRRDa9qEHFeng6trqves2iuEojgu6",
  "key35": "2A7YyrDPRGi5Yrdqi42Pu1USTWqjtEz2Kk7dWLMBPGLRFM1vm8xqhiUgAiXTsAMzSUzAoZQB2eYTAGJ7j2RgdoUh",
  "key36": "47WveRAn96toEriiXJPCK8hP6yRcio5jwGLj23AeYqNhXuyWoVz1SFb4J6jFDFyDViWQTBHTyCGY8pd67g9b6QWa",
  "key37": "63spEU1KkNMv4vZS6z162bLsiiWJ6A8CheGwnFYXsMkwX4ebASVj1Bxu9ZuxhhSRbmdxnhVAy8R2DJugx1TsbKt9",
  "key38": "4vH3M7rzr7grYbZaNCMaMMicqcdvtL6DrLAgg9JPM36qTx9MYKvNaEsY91w4fJimiEKKnEmg9gK4nddCdsTjB6JN",
  "key39": "ePLkxCXWsdvcrYH6bf9DVCFSSKof6fgSx4eywLKHjcy5Fie2cPL1nhtjpT3DmJvHKof2z6QLfpSvm9aevED63NT",
  "key40": "CJYCVpBH8R53wSFQyQAnhpXcbmpainQ6oaePUNEia37wY6Nu142oQyFS8nY96daEK3dbFpeMGoDv7RUoJFwW8Gg"
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
