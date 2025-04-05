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
    "21RMnsbA5d5DVgcRvHKG7hYg5Z6kRrUSuo24waN84rpWL28evoLC8vCoPXYQLDTobEcLshMyXfMVdopyCQdZSowm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4n3TBoqgN1Zn3t8toUh41FwpqSjFSMGBZMRfpdBAGS9kGNdWHReA55zU9pV4kaFGPWnosriCY7hsQd2sRRYpY4tR",
  "key1": "j8SQ4jbfAmxR99sA8N8dxhGRRAhEJiAvHumsQi7JotfCHvpgfZUTmLxJvsYBJ38PtMqf6DRPyNfLpkhZmqQi8vf",
  "key2": "2ZEYT1bRGDjbCuaPCe2d4FdN6KjmB9ZJinzRHf4YrwDx9x12ZHSj6QY2ioSjXdjbE5X87oCj9MLi6sTh11kznSxf",
  "key3": "4jEA2nPKT3DPZA7MeotJq3KMWvo5AKjv8gHELF1ufnTKKcriTwJUNPeJvbaSuHMA1mBatJTJgZpFBaVHV9MAvmcB",
  "key4": "FE3hizHti8b3xTMPVPHX4BstcppC3MQhj9FhwDvP619svdkUEiy2wB4ze8PG8BSJY4KGYcRS6tWfsGepysL6RzM",
  "key5": "21SLS3jGk59xJJtKVbypGxMF2q2xDMV61M6rEHVfJXpveyv237n97DYFA6kZCmyvEAUjTuMmYQRpjrjk5sMcSqek",
  "key6": "4Jc9hGWoYJFHKWqvEoH67WNADACf448LC2nDcxFBtb93mQahFSWH9H1yupbgHtFogbHmjerN6uyVBSoNCL3yfDgb",
  "key7": "Fi87fhus41WAgaGEzZzWesRGTsgfLu7iQXqfMKcqAJHwzNfJbgcf1VRByfsf9WmacZ9mc1o9tXKfDx4Jrd4VdFF",
  "key8": "55r4vJsEe5eMAp4GybgdHMYuimJLP9PEAyYxq71wvT2YPqyeKFppRFaQmGAxycZKzVbroPsBVHGumW7BB3inGuQV",
  "key9": "5xwmtP8ZAm1mKjmYNc9EKA1S22ibduCCy2jCa6Av9XZTynST361ye6Jucm737YXawxiAWmWvE8s292WtxmPSKJTL",
  "key10": "6WZDQwCR1Dzpqs5itgZdp8W4xkDHTS9vrPmDu7idtahJ3a1MrP7v1Y12BtioMWU5TahY4pkZPFvKhL6JdKvKTmN",
  "key11": "3XgYx53H67DLXjWJrKujfop5CkNVt6X4PTYSLrps1aiVq5GUEyBAYfMVGmGYLDuHfZoUHSaWY4rJGUqvAqZF9AbB",
  "key12": "1QgLoBGWELaoRDTA2JivUfuvZMq8NS3SqpgHGWdpS3SYRGq91nFgL4UVwd4geNpqXkVP4es4Jb7ccosiWKrtJnG",
  "key13": "24cUjhuALhZHRc7ivcEkyAeWZLpUiPSgpXQUGiAYzGS1UhYQF3KRVV17BbxcFCWF6W9maBL1AKeo1q4C1xFNWZ9T",
  "key14": "4pEDLnshFfxtwZc5P3rkLoJwcR21vVKRLXVMvDXQXySmAum6c8fRn8v5fnmx3bAFyHpYksRcdyoeQ2qMz2iMMh74",
  "key15": "5bTK9k9UUtniqkqQjHskQqRY4sNoBNBsdDJHkVwFGyaSoEqHexSoqTjSvNbgi7ynhrmJDZ14GZnubEW7qhGb8HM5",
  "key16": "5GrcX9Nq5PVXG1AsQXjBJ14yvRz9cW1BaVMZpCKyL2wwDKa1gnUXmd7Xh2sGf6ZcCUaBCnVeYxA5edq4xctpwiBQ",
  "key17": "4XBuP1KgGKDtdi5ky2LhffmijeQWcUBBgGY8D2YtgD8Y5HBRKksEVHpfYmKxKxwzQPdHjFtc7yNwtW4Mu2Eh3uQT",
  "key18": "2pZLt45rbuaX8w6egcospa56BtafPcRAPZNsjuoLUJvF13BCanqdbcNoZKLZbZ9phACn26sZnjoksvKGy4Qgbtz8",
  "key19": "5rGow9EhMVjbA26vSbEBLZx7Ps6bS9LCvdSx2zqyPk85Lh5sdAMEb8RhEJfc8QL2m1s3BHqHpscfP6DWGpRVJxzz",
  "key20": "5WC6hrQzx4WVnpcXpLt77tswdvuBc7KwW6m6DWqx1P1b6shKJLkJ3GQiz5kFvMKyNJ1XpGSkEPhv8XZmFYcEj5yE",
  "key21": "4CutY1xC9s4RdntiesPEdWLhMbbQvoao8NdsvokrHQtEVFf7B8h9qng1gwMz9hZ5FiTrAUjYGnafCXM1wUcWvHEa",
  "key22": "3BkA23MPSHoX4ixJG7qLJH1vH4WPTgJ3bv3T99wzdCuL1dzEU4ZJgV7ekwz6dGxnYbhzjtgbAgZrECccxr7ywh4o",
  "key23": "2geJguYhh7o1n7GNzGePCay3PUGVtLPWyGw83KgiRxbUaAo7qJ1zLU4xNy4Lh8kwQHukXxLJeBum8rsrTMVxwyZf",
  "key24": "2hM7gc15LZi3Yq9jcifAZvw4AefjoPwHh8e58aZQnwLofr7Pu6TMXgN7N2AZjmTh72FvHwPxP2Czceyq4JhxCcGF",
  "key25": "5XdYTqeoeVUk789DMNQGRrX3VqR2AEX9jPeGgXyjSRA3d1X78yRAujNznK3QMiAtf4GTFjjuuwDZtjkA4rezdcqv",
  "key26": "3ptbxNyW3nkWaq3NhSxCprDp4g6nfyUCVXB3ntBWZdckqrDHUSrFXSHiSP6ceUCtUCMthfWJ1sSuZHJnr6n3pCP7",
  "key27": "4WNz7XNNkc9TAVHGt4qDRWWcuFq8g3p1yicaoxbr9eF3cEuWHip9kMorP7QAVBiRQq1hXHT8uHPBVDaEUgvXQiSX",
  "key28": "5d71FbPhMB7zdyYfsCUKUMTcrb3UsReAcWTaqwd641VB7NGZky9L6g4ZWNsEd1cBitK2RbPPNZmgaRMFSbHSfdTk"
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
