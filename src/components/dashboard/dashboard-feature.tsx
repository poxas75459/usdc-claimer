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
    "2HAb8NXHDBn4CNYqfqcRyCTxWJmHrG8341VD5BHRNVy8AgK7FNQPBbetqUsQJPb4VHCxbURDsVs5iQ9RB3sQLHp3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yVVMCpLL6TMBBJgZXiZ5CGE4zP8CfDQa6B3shYU63b2HTgAMWX5wByNJFuSnH6o4fnYz22TfzKq3YpLPN94XQBm",
  "key1": "5AUfm3PK24YZz7ANWcR1is1JiVLtPM4rpS3WAtwfMtrf2abcXq4jZVBAcUyyhfXtsCVGLUUghTg8obEDMPq2AQTb",
  "key2": "5u7ndhyh81Wd3T8X115NMYzmjHT4F5z9WDELVLiDTzbHaEQ9Mb4F9nQ8yo4KmgZa2kSH4iQYMXC3dbo25NUbGgRa",
  "key3": "ZoJhY4fHCxXyRRWvG6aKpyhVJMLdeNQeHJwgTK1BSAU3R1FT6NsByoq8MveMoSiGAeNFVV6bPEgcU3NrUAg6w3s",
  "key4": "2faTJW56JEY7vFrtW2aLNoSpTVV2jorU6PFeNY2MbNpg7GSkxZY6FDJvqRcqerZGMHM1wVCnReofpaPGMoiVJ3kV",
  "key5": "3HRjZG76L3KpTKHs9ABfPdW2YJg4pnw5naBbJ5fzxfxGuaLUbKGbNpP1JMAb3NSf7xbdcGgrXuKmzsrruYHYji8c",
  "key6": "M1f3ePX5ePuzmuziSZ5NZALkzC2XkncP15fN2q1L9zoRqkY8LnRGNb6Zfp2Z9yRA2kztY6QTosuuEaUA3SpxiFz",
  "key7": "ZwJYA5J2bzqXhUJirLz2fSarRj2XSLHSiwWwq4ei76zwZVFaQvKrmd17QHtFVwEUvHAjdLNUNwtH1C8vtpRgdoQ",
  "key8": "3V8ttXQt19wHuTzhLB1Tq7PkanppvybPqxTFMXZmyBK3VpdNwaC6thqjtynM57LhhGAYWNVaQ6t8u4xxeEeb1fZT",
  "key9": "36nNHeEoY8j1ho5hmTgUkZvDu6VSchaKBHcjGV4zTjTm6MdbyEy9Djv94kYk94MRmfLDCQjA2eSBkjUWhXkRiHHv",
  "key10": "4mSF4TNNKTPoLFSWn54ZUUT6GjxewUu1PL4AoHmmm5EvgB4sgx2aCJbdPK3jVeaqJuraLdByzP2HmGyJkBbRjz7K",
  "key11": "CsvRkoYKPVBdWRJZJzRqgRUuFmtwkCDXDC74jmrsr2sg1HKqZWEReVeRtsj5SBxC1Bkuv5MwJ8mUJTTmyhMDNFm",
  "key12": "5PGDpqr9Hq5GNaQrHqKAatc9CPj59v7QE6J51BHbjzSCLh9QRY7cUnAuKBDVLimqU78CCqyFc9jvAexFttdQ56uz",
  "key13": "3GqdkU4FkNGcus1hDyBhxpvsQka8Gmo9fPWjqgeCZePEHr1uaLj346mChSVE8KT9j9TuzYyUPBBaZgjU1ePH5ndJ",
  "key14": "6B4jw4nCifc8tjFucWpvfi81EbP9zC1BC5X5cXJyD8cFuHN5dA7HBjL5NoLgeb2sdEWk2d4Hca4zs9Jofe39LGD",
  "key15": "3dVAEN5mFBStrsjLA6yqXXhpMwP6cq9PU7yBRA24mMa2oYfpjJwCzssyNmFmPzDBcJRqA8fLRoZUpwtHX79iMitJ",
  "key16": "bLcErNJJS5RvZJfJmcP9RYLpbNNBVkMaN6PY8p8A4SFBS7Yu6rqdeu4sk79EEubcqmrKGo519TEoVX85LMhfX7P",
  "key17": "RFDJyiq1fZwHEFs31NQzUMx4U7bTmevMjA1nPTFEtfJszqEHirqbR9LjFgsh4yDKspLnAxVEsudbtLW2xNS5Buu",
  "key18": "1YGnC9GsLLWLRW7WE6EvGNRpcNBGTn8a6u8LqPdiYLqYYRFuLMrJctL7qPQ14SD62oRT68LWGKG8k3bzACdWtAN",
  "key19": "2MCFmkPktnAHKJtmq43DaRmC2HrPt889HYPCFPd5oyGmj7WWRroWBxWQAwFgT6F3mFWEV66QcbZ3k5ee5Fca7vxG",
  "key20": "2qMNNftTcpptkh77LwjJPtmsTo6DHD88T16yj88viKbW3mL7Sz1pSwMyMZFCdkVnUfpJqAKFoMvr61qTk1dA5XCx",
  "key21": "2ZHJT8q9VMtPn9UYQtM5W3XYui1HnzTYe18WyGNSG1wo6NzX7aN26KBHzGbP298pATDry9oMXfhJ31QpXRAF9bYz",
  "key22": "4a4ep5tFPNVvAhktf7ANCoh7v7CoQp3YPHEckimJq224DAgNoDmoFvF3uLKss8BQY3YKBMk9tpJ4WKSx4Q3AeS6W",
  "key23": "3sptkRTm4RXom6LAsTw4HK52a58W2LPS5DUYbtLFJqAZ4CjYdEGt2hTbDFCvxsiCdFEbbHVUmwyikTkSxLopuSB3",
  "key24": "M1Gw25A5G7GyKP569HnKiVj3JxrGDGGLXppDax3zDEZSWUK3nCbVWnqcx9gT6PNpydENmAwJBVBPDq65wCRgZrA",
  "key25": "4YKg1u5kiMGMQo7keXS7oFzLMP9x4A3hSgq6HLph5fXy7s4R5pTsMAwdSgJLY2B6bArQCb7Mc8Uje5QEqyxQy1nv",
  "key26": "5Kg92GaCukP7rAbQAweVPKAfGCQPVSEaRyLLR111QeW7XCzsHxS8xRUmbQqEiPPUHCReD4Rt963hnnLycS8SKq4g",
  "key27": "5ABaiU6ug1xUrgRMMfUjReRmmDkZy91YsbTPqnx1LM7ihVM7tSPp5KSP98ocK17YVLX823eB5NH3yjwmSdkRnqF",
  "key28": "TZcXwyDmTRYS84HxitfRu77w5WND7tYgQNrH3aMHUZfHdkrNf1aVvxQpdXSzo63jjRfq3S9zP8bnheJz2484wiE"
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
