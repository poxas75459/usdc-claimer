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
    "566o7faqrbuuMgRXxuTJjSixseCBZpuHAyuJ2uSDwGSYBnLrckuCu49U1up31oAwLwtkH6z6Nxa9PU3HTceX5Cs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "581DUeDMznsWQ6iF5FfjkbRPc9zVNR64Spj97zbu1wNTjpFrfEqb6PLu3LtUag6BR9aTGxjQaHpMCvgTnV4fSL98",
  "key1": "4EDiVpASPR7yLszHMZ45ibkCGmyEXjQ3wZHP9sewUGfkeR37koNpQPmU9pNx1A5XZaiFh9ouMxDRTWKFLDKMYVc9",
  "key2": "oXSRW6ZCmVVuqLRGqkkkQ7rfRVt3UfzS5n9fbheS8TKPfmRSYcvf5Sm7KnTzPGZ4ZazjVuYCKWVbQmA1NggVa29",
  "key3": "5BSvgpcSoKXtH3exz7cVBPuR6MbH77eu7SH5ho7Hfin9nqxqY5X7QfQFv5k2WeBvL9pUMheMaANgvoSefc8svsEK",
  "key4": "3WpeyZ6fmDRHER2nBgMGmv3yE4QvyckcKTrabeKhdfqmkjhr3SB669fgUibQsdmtUpiVkXjNVq5uoMNk7groMLtN",
  "key5": "2ncNcqVPVn6P3j9xPcdhapsA8JNbQKS6EyfRjzedDupuz6uojpaYiX2hL8CoMDEsvheEeNtg1Wrmd687QjgytwRd",
  "key6": "5hJmnYZFsxfoFt1GXLQkHvNvPnEsPqNqRDtestajUgePv49rJXo2bWCQVvRyQFJ4dwmCxaSr1rnic4s4ZdUthLhf",
  "key7": "5pEDSGS4M5usfGuatbhehkwoJYC4BdbAe4nTumqoa9LnZH1qvuZpDBcjvi3XYf61Au7Lgu48BNBaJrJhpvdQvaVm",
  "key8": "fDcUq2eRYepqEmrpBUDqDJZH98acb8UjTSkSmanSB6k36L9JSBYG67EdDx8pvuR7KMWtQHF9oWKjndJ9YRd6MNs",
  "key9": "5wcVQY8obezbNKkBdGiifdmSZQ1C3K5jDmWBWHPurnvu4skuWL8gkuY292GTYdzjEmSCGKnaei5wrVg4Hn3gcjLn",
  "key10": "5oZtYuru44BF5zG2CWGBJG4z5drs3VsdkDAXQkKrBc36zmKF9k6NXvFTfm7EZCRXXitp8ijdqKEBMUyK1jMSiVpa",
  "key11": "4c4tkztC9QEyKBctH4Av6HGzCmru3atpTMqwyhQd4iryGTWxcr9pnvUTziVzCq149RF7kL6Ea5DJUDzrxHYMnzW3",
  "key12": "5vDhnUBx3xwi5j5XwQzTM95uwWPCwLYQfrn1z6be8QAbUvaRe11A9QzSjTrpeGXBCVMXxH8E4C88pFvYx75oiN23",
  "key13": "42P6Yo5hmAkNGNSudGc6JTr7agAYgHnfUriDtNE1Ma6RYX7TybCJqJFxQk6k51oZSv2kjc6ekuvwP6vaHJwTB9Ez",
  "key14": "5B5P1Sdqy1wA8KGbRc192NbmJyRCvx2QwJwyMKbqAPzByq47qdubfoSoyyCiTGNFpNX8mbkgTuzmweK4reVg7hv4",
  "key15": "5TUKgjwK7uk6gr2Sf5Dui5z3bmeZAn86Zf846LimZTy2irEj2zZRLwAx4kJVdUrM4kux7FX95sxDCjpe4rFF1qNX",
  "key16": "H6MnfoMguvAzxwoHFkLNgWNUoVCuiupGdpdV7byyEyASDNBHHaRLnsijXLPSPCSuZiAVqRDXwke5aoNDaWCqB4S",
  "key17": "5445PKt6AvSJT2qVgGYLdwqCogHi3EorMqy8GYee3yZaesxvEYwvrhRpcvnvNRu3sDgnQnCzVVGSHyWsXLcCXFcU",
  "key18": "2aHbt84q1Wv6E7R1HT2hQtwnqtsQR5cTcosktxpCFMBRAVWqbZ9ufZRHNp89RmHUe3JanWFhunGJ8gEVkxf6bL6C",
  "key19": "2DzV2b3JquiEA1LLT8dyiknTjTB7JGdHWbEKmb8jRofjHpgfbgqsdwpnABXNcMznQxbdEfiZRBRmYEHy7F86yHYe",
  "key20": "2bL49TsrpEQjrnxxU7E2Vm8EPEmPjxxELrJjA6uuGgGQ7d1Ua9otCReEw64JLQoYjjS8LcA4G6Qnssm5VTUBwKFF",
  "key21": "3yjexvHUDzuY3iNhanD1WdyyGNFnpitYWg8vjkS2RvgHvKDa2tzrcnmGEsPpwTG6xcDGaVVHau4CWi8x8ChY7UEF",
  "key22": "2X4a2i87V3M8fXi7kUtT4Tsdqqmzsexu9RQ9bVg8BSGduUfnDZ9nXbfLLFmrYP2vVCXbM8CQrGqdEPrjK55vikKN",
  "key23": "5p5x8wAUMqFUbdBV4z53Dv7guPsWpGv1WgGcJqAGq8KsG9Jnzimxn2EtQoNvstAumZCuZjGBc6DCjEdCDz4QSKoz",
  "key24": "5PKVni2JPHLgdxc44BzU28tPwDFpjDT12rb3M1WLfMpai4q35WP6nzzd6VktVBJXWnkpe2AJr6H1y4VeXHmxJzmP",
  "key25": "5y4fqSLWAHdSvppLcRdLCWqboLX3H5Z9ejrafyff1R4q1WXXWxkcVWd25a5jrviXP7ARkomkanL6ueansB2sqi3o",
  "key26": "2Yj1Y3JMVGXAyabcnmCHEGPqL8tFwRiAosPy7yVx6UXsFiBtDFrSirWbyidSQwcMdBAJ3DKh8Kri43NeDDXtxkca",
  "key27": "2LqS8218S7ydLUJqsJ9js7vSMdmAvmnrvMbEnjSMRi9h7QYaecsEPYZVUU6D7vYG7EkRu5fbtsqNtpJ2pCdx8SfB",
  "key28": "3PLSGk89DiA7mxshZAGGP2eXB9FMQFbyLysADSZiVae9Z9CVNrPZyhZHAKyr82Avqkc8JnjZkqd1fDJeqRz7TbXU"
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
