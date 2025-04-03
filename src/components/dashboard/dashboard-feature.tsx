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
    "3nX8SfazvozAwhKRuCs6mMyuNpzjaPBUt6P2hNyhEjKi3UnRwdRGDUxUfEHf8UQzQQVYjgZAVV91bBy2S7yLXtGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g31EvrpzoZJb5nk5QLqEJ9cGAJetvmiWcdcySAw4wB1MMGT3SUZVdFiVjSmoX6WSNuDhsQVt5GinY9y3iSkf3dA",
  "key1": "2sAJ6eSSKWwC1J6HHk8xuxQLTP59Yn6N7Wp6ur4M5Rze3K3WQfxdKuZLHL5zEcHBCwzf5tXHZipM5ynxMWHknEr6",
  "key2": "2gqcoRYyqPAHhLi9rhR9qPqGoqx8mBXH2juRYyrUKuyDYHB8aV3zjcVTFcNi39URQRpucVYQDcYBnyabbu4R1pFd",
  "key3": "jFNLS964NYZQTjGDNUU3miRZmqkYuZRtYEjU7rSMF914QG18wMfkDb2cBUUgRSJeqCJuwN3aX6b37hhWAse3KRW",
  "key4": "4PYAxi5FkUwAL1ZB5YtuxkvC6i65hNEKtjecJ8QMQSXs8Q5Kst5qtW5SZHdZ9huiXXZaKSnSXHGpmg9VopQayEx8",
  "key5": "4LJZ7aDFwqC1yXJP9ercADiiashhXxEmZibjXYs5wXP4VfL9B81Jre1R1QCCK4QEaPdyWT8txsZ6ZQiWqtqkyiYM",
  "key6": "4RVwp61QQvNJhQjL4LnA6UF4CvRkT87yYXhk5LhoC4ae2qZP3QubUhvQDDGZw9GEUCZRp936dvw7nJm69CL5uZmW",
  "key7": "avU7pQeiaJxexABw8WfGoPoTZyXcadF3UFBemnjWVMFSnXL2eb8cB86TmfReSaeqcme28d7tDmtr47dgQBa8rSB",
  "key8": "udq88CDK6HPwSy9DRczY8xGNvoCRjgss84wuNkzavcRbripBNt3k5wRHQiujtV2mKNdxZevcuVmYSF5vCjxV8ov",
  "key9": "4qRGDt8zpoJAp9L5wGN3PczWJ7m1HeWKjx8YUodo9Js91b761fZc46oB4RoDjmikYmUVGfQXXePUkCLgY5E4CKLq",
  "key10": "3jwqDSVmqx2PY4bfrqPy27cPQJvWecxJT8DeMSZtCJh2bTzuNGtSHFhNAE468aKge8MXf1sdxrJYuWsUjkad4bhE",
  "key11": "27W3KpL8h8btBY1hi9h3FSxPxn2u3omwM2ThHpr7xGetx1QE9Dr9xt25nnUhmz7GdToNtzsM7ahJnnGguh6dNz15",
  "key12": "63462ZGefwV2jMgv6MpmXAPurVB3Kgu858kjcz67mmbzCyPNED5q3Qc9U5YaYG2tzZtmQK3PcuXTSb2YFQSZD66s",
  "key13": "3X47bzYeKdSYcPGWvPF41QU5jzJu2dCG6Mw9nJXML85dxTi1J7Nb1voHcP9KRoXNRXSi1E1yma9RW5GQLnc19btN",
  "key14": "3ZKs77CkPjn5r6yARpiZwdDMzGCy538tm977GSUyA8N8JwZLr1u3L1FM3hB5e7KGfoH9odLNKuewbBX89LPRKZd2",
  "key15": "57pL4YREKKd2k5BLQ5W2EfXK2cu6nxZa5k6WKTts5QTrwbFBJzpob4eGRVcHsBfXhKwYkaBWXFxcuG4jiVsZtY7H",
  "key16": "3k5rPrx4AFhr17CcRXf9tVN7txFemWFbbUAWwMNiiRuGaUVoJp5dtiWALfcrKH5pkMrWd945dpoyVRAyMgyX4CxF",
  "key17": "53BiXuEgvudst3DMxeCZFG3L3BLYzFjLHVkLUnHc6DfFyhjDDxvr72BBc7Xoj4H5HYJiTWjhmF2CFSRDkdSEEPH4",
  "key18": "5dHRuEGpTPPnhfi5jDFd2iz2amYf1kDWgiqjjSTfuqboAj9tf21bZe5ZCv1xTQBMUng9BZY4DZ4YvMTv2kWxU4k8",
  "key19": "5GiHPTqtnTNXWVP6Mx9tArWtJ1EVkfD3Ld2wRjry1ZB9en2SWHkMJKLsPZkRD3iHBEhEVuA7wbqg3GA2mDVYJHHx",
  "key20": "2cByhc8yvkY3GnMQvWGv5JBAmvdRAUwaVr2ZXVnpAyVUZNYWiPVNRuGNhPJ1pkU4rf5gV9wLPJu7vq8jJwP4XTMd",
  "key21": "3ip5TYXXxhpiNku1Ec1VLAxE1J4E8dnjS6FfYdM4z2rsakdiHVkfj3tK6V6n6A3YbD9wVusXYtEzsoEGmbuQVBed",
  "key22": "2BXt6LZZFYHLRSJmMcJoEwfePKxM9vCSJB9MHtEXb2HkocxXMGpREpH6FsmMD9bihwGEk6d1Acfdmf45B3E8LRTK",
  "key23": "5haxRDAB5221rLg8kY7ro9EPPuANWo8ktbyfAmSb4rjUX6gNHFRYnkyDtJZMVUrnhBtEbkHFYN6ZSs292cjZCJPS",
  "key24": "2bBvj7vt94HHcwATozWG3YnpuNaL63cugkPZX1Q5STcaD3VqNf3t8z4iCaAm48PCu5pMorKypDEJgV8VGbuNSdjh",
  "key25": "3xDXpwhzktNaJxfQELtsNn2M7XdKDrvwMb7ZzfonCvSaq6q8pLcDJsCqRKnHjo7JMxQEB5ibMEgQ1rqUBGXbaWsf",
  "key26": "5jsZrmumCybkG8chVYp8sYy5M2yPiV5WdXqZwo51hzMD4Hh2fF2ju3Cxp9U9yYmSs2XkseVs3wNBwGZ2KRGqMuxD",
  "key27": "46t3V2vkfXS697L7Wz5XBt9p6xbshSZgB98md1awHNUyKcrP3dURzzmuWktGsttpeVhVmBjwmMtSwZ1KVqzq3VpK",
  "key28": "63cNbhGpehHBmhBAhd53etkRn5GW9yHVtNDrsPzvyv5MZg1V1a4FYLGYY6uwGszRroegRa1HdGBoTeUi3g5SYSUE",
  "key29": "2BJG6McD2euWc1HRhsU7pAL3CEnizgTS4tJNLX99gQfJHMoCCDF3f6DccvFHd54Zpng3tRgqZVB7S9jj55BAzn3q",
  "key30": "xtNTqUAdXMPNX91cmAST8PXaLGmFCdid3E7GL3teBeRzvU3ZDEpUtqTivEKrLq7rt2KWxNnen9uGE6dnnHf46x5",
  "key31": "24QM6ASNkz4toQKDEN9JnueLGs7fPTPLeeLpMzXXa4tLUk3uoWz3UBweW4GYZjWx94wrKid4uFAZDJPJR3fvUHWt",
  "key32": "4PWNQeZdNKyGYsWgBM79o9PwDAzu8rdLwfqKFrTCHj4Y8VEScfqK2EsiQmm3rmZnYHLPC2oFighBXBnFPH4oJ8UQ",
  "key33": "45dWJ8qT4XfGHVqDSVavjND2SjxeWdzPJ1d1Y7cw3WLWRfCSrPF8jzfP7x2rqCwDF91LsB4otgApvyd2DrWapxf4"
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
