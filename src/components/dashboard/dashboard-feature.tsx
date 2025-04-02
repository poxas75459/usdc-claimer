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
    "y6hFPDduuuzzwNDesJeSKYfACd2ruisdf79kLdDfRF6jFUPuXnkttUST2HTmfc93ThaiFmzoBDtpDLSV9uGgZok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UkFB9jBM9gp2wJTYuuL5q613NVhQcrUNfqz45RdVgPNAkmAywFHVdJZ7KPHcwP8aQwaeUL3azmhLnbuxptGZrhY",
  "key1": "5JNi9MV7CCqDb6dABJcsKHN1fAZa9FHdEs7BmBL3K6SgH63n7Kg4u4JfzYfu9SA6UMDSPrJT2LawjmQ91b4zchu3",
  "key2": "2KXDxPgckNEL56LX9SLm9ewueB4sPSX3HJzpqcu8Kr8cydvM1zi1qZf2jUHZBtSbd7JSCWoTXbgvnUbAgxV2wPpX",
  "key3": "3oXm64caBoyJAwMme92FW6aeAGdta26eDy68q6fY7YMu9doSHouyKw1fbZD8TNmuiyWyATv1EaLDRtGhVhe8mb6r",
  "key4": "5pVe8KfaQC2jVgDR44V96h6u1Tq56eqem6AbpaiA9ULsaVoRe5Uf2bzHG7LTKA91FuYgSFnFMDbFqbmDdEyV6Sq7",
  "key5": "7QgVJfCdyuQ2NHdUtyvxKeuPWWR59Utgcc8dhqvB4HQMfQosmYj3ZKc3yz3avMNkUHF6vSptnCoqzBzkLyRAQNM",
  "key6": "GNX9Xuu5xEpixTmfiQuaprjFF8nHEFqUDGASvdptgkxf1xKaorTnE5xaN2HNsg7HKkewEStEGwfRfYK3CBkuUdT",
  "key7": "2ko2Ki42SwAueAum35MaH14NcmdMZZr3BEckkUMY6ewXSTDD6s4L52vXWdiBKKsvgZF4Mg5LtrvMuKDNHFagoQ6t",
  "key8": "4PTJ5gCHZ47K9iCSzz6YSF6eAwE57hHz2wPBDxxR3RKCQz2QXM2QSaAq8rGRhjYPkYb55P6DWQ5jCPC2gqCpG4go",
  "key9": "2F8dLpP526edXQpUDnEVdXMyNWB9dN7otvjK6Q8mgcuxZkHY7mmaM7Uuo9gBbXnCzBRY8Nje4mg9RohcagfzrnpK",
  "key10": "2uzkohFU6Lz9L3TuXdtGHuk9zSg98pWmhupQKjtxsEhnvYyuhhNG9SSXRSsHTW7m5cpzK2Lf3cggxacKkULg2ozp",
  "key11": "2EHUUJ6hjwMPRL61cp1vVGjVv3iHGKmDBguCaWcRbijDnKQWNouCUCkFYPQZBw5RG2bbFgYH98L7aCnTE5AoANia",
  "key12": "4bT6ZEZiBeDLkvMm2MK2cS5rkssJPXrAEVBsKkXr1KVoBk6wb2zqCauEjJpad4RYz346X4ECFXwBKavwyHg22AvS",
  "key13": "4qrfUwqLfvPs8428Nm8eVQD9fSY1JC7rmFJNBMFEFKsvooqoPbc7YTKzy6NCwq2YjQvNjrXxupPoQ1aizP6KYvtF",
  "key14": "3to8Vh8detaz86nuRQrxHGrFu5fiuw5jLHosx5wYZSJCsKGbRsM7wL5Qhju3TAvCepVEWHBCV8rLGNPQ5tdyr15i",
  "key15": "vnEoic2tSjLFTDPxtc5mUpNDSVFCYhtb29sMbbsfMwSoeYJaKczGHQShy1mnN7H5j1XQALGzhBDpgWVzSTkj2ix",
  "key16": "28XbMdxxqCQTnh24NNxBEKQBtqKfttXtuphtb6QGPrJtatQQWbfTPyrdgBHuMrBm7jSjkwY7owYXspFE9ibJgXMw",
  "key17": "MBzSq2EgP7i3R7DXTAzeBnttyEGMhCwKyW1MjGdhKSD3gDhg6Hh1EfyAVHW1KySVSVdem6SKZVMdojqDaFt3R1T",
  "key18": "PdrhjPaBAoQLURwJXioEKAZAvvBP657gBrj82bSWMB92C1tZk7KLwR2cgt6ZbgiM4FXuzbDTHfr8YeMLXc15u9q",
  "key19": "56FBtP3ZVdRgVNLeN91bGMbKBzrMJK2LULsMyWitAS1z8pUwsRYYCpJ3QEMsDEGniRm1xHqvTF8t5Wm5c6NokXmH",
  "key20": "2WjAzqispCVKDVBmtFhJR6cADzX8ed4JfsxsCucHMBC1Zn95yYxBMvy3kGxK8B8EQNz6s1G9dSyJ3eo8GcHpRzUk",
  "key21": "4gi23JprryNtGusevZiMMPUj5G224GBDQPGBL6LktP3ucNY7stceQ3xUJocLjG5LzYgWiUNHV4D28CvSWo6ogwP7",
  "key22": "5fHkteru1sXC67V35YmDqsKH32MAF1TSMa5CjRWgYc5iRzYDaKvWAbNuWnnfXNf5gBBt9CoFAGPJmMModyXLSwPZ",
  "key23": "3wUhatKpdg1kmx1TBo66zFGUs3DiFEUhjPVq2rVbdq61bTFqMigecCZxM3URRmaFTqhss8e3A9BjdBwBqvq797u",
  "key24": "4juC2AnFkU3w9Di37DpPFQCqWDvxzjR4YVTgQNLpvETrmF8RDNX9BkcDTNfXDx12VkoRtMmyB5Bch5kt78qTwUrv",
  "key25": "hkQYrPWiHYKkeUgUzWwoEwStdX2dQFkiE7TXaHfApwzBA8dH6atTw1tzn962agbMP2v8QfmXvXzAxDKyivyvxJu",
  "key26": "415f2pfYfurEAdpvZkpZGRw9QHoq3hNd6QRJx4U6jXr8AmBe7yknrLiSVeUKNxKV54b1jTDqubbZexqWrn4j7TW6",
  "key27": "2246ZL1oEPef72d6iX6hsDZBxHFNDBr8p2nawahiUC8PGLqCNpvSfxJHXWQBBGvCViAXSFxkErXzVZNK4xyeSyVu",
  "key28": "2zkwvPHhoAHkxRdh2CHsPeJefqKS9JV5utTBPBfRZKFtfFmC3xXruyd9gywrXz3Y4MtfWfEhnZvZHVNmUsEdvoku"
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
