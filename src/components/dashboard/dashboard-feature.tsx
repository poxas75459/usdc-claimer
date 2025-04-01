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
    "4TDdyKskMszVcfMPGwKsgvLN8wykDAD6Z31XBszM9VjJDreTApWpfdgG4VttrPwpA3QS6J8wRtJNizCtfiqjBe8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FTGPVusYfHYDRR8BL1KgxnsZgy431UPzGortAfZiaFwri2Y588aEG7Z1R95xj4CAPp3MTn4NKZinfHkkFeChzDV",
  "key1": "5BtsUBrHiaNzXr2ucDhR7SXX4bW5QRe7oEhayWiUDdtNmewzL8iTFJQFGSkgrJJdoLZStuLhbkVTG8xPJGXV7yii",
  "key2": "A7fk2gnGMvecSjPDnnd66tLMtDmBAvPB6pnmX5HdTAFZSTQFSQhbYG8XoCP9r2CiCMTdeJJXvPdjPyHQeFSDa7q",
  "key3": "z38SzeiJ9feDgFZv4JZ6uwTYvk1gvycucwoT4J8DAZyUGsdGUHyrMqDXevupUBiJNEy628b2VRHFMX3VyQapRsH",
  "key4": "giQ5a7vDLzY2gMoAwFMAGaaf1AHepXByJpfuCPGqDs3JKkGLGfCUuvRidqbnYUr9v43qKKQujXfLcKPN7iUK1pD",
  "key5": "3TbLdnrJiavLB53EzBxVfZFnf1d2vL7dGvG1SwKs4h7k4ayACuW5xebQoWdWbjjS8XRT2YYZKcPp6k1rJfCGbXt2",
  "key6": "auJ81ce2BquLLzQgvBMBVt2PjkptxouKrME2sMNg1Dz4zPja4LJ7SJF1AM6JwynFSiL3U37fXaTYZf5QihNdSKk",
  "key7": "CeE7gLvX5YYSGtgkJn3dscwCrHyVCsJVBSqFqfR1bG6s4wBWVeyWJe4mDpcxYbDLiuTvMJ5xFKiFhGHao9LBj1D",
  "key8": "2hviq82v1iAJXqoGiYUsQeURLcQzX6hzdcn4bwkaSh4TSK3ZCkw3fwZ1nZZjFiH6En7jWQBXbKvXhNGphagY4ZWC",
  "key9": "2E2x5VAGDNuAgPjfyP5bCRLrdyCVjWzsJsVpKXyAt96St3uBU4iKqEdt7mj7RSsostWyd7FkzJJB67yf8ZB2WawW",
  "key10": "56GcbSs6PEBp8pQDv9Qm2dpHXjDbMeCWeg5b13wJH6wdX1LKdM8oRn46T6KrvbYbNNmhyiy936RVtMoA2XntmFDX",
  "key11": "28inWX6U3f6sCQRGSerWiWMAyv8C9nWgQsNpRq4rRsBVDJ5Z8eNz1kKMY8is6PptqUgKz6DeNXh5HM9T89o4SZFy",
  "key12": "3esnncVBuQAdvGCHh3AxW3yBWj5qtF872u6MtVLKiwMDb6ons6xMZNAb5c915PUpYRpjqu5tHaTWB3rv1JjZAV8P",
  "key13": "5on3B4wYvnNNGzmtSyhEXt8EWSk7x6JbsJJc9cpCAxCnoSzt6xdkqRJLdGWu2RvkULga3Y21NsuvrY6QyqjFy3xe",
  "key14": "4GMLEE7RXWMriRiuyuZHHQXjyMB2YHoLVp5NLfeJMqWMAin4inGPUEuMfbN2rkFcZYQeAYcYsFeFJ88CswKZkxqD",
  "key15": "3H3QAz8epKRnKbMSVs6eekk2SubwBdDZGLeFbUR1mND3YaRaa1VmAW8oPDB8LCbdoE4b51xCB8wUeVs82z6VtNQx",
  "key16": "3bRUsNfRPSuHmTcdHdwHXXsdhESS1CsR2idtapqjEfcsyrGbTNbkbZWdXNAAprTcte1WixBvUHsGJwM4oQf9NYxR",
  "key17": "5Bv7rjgkxm68zzkYwmiBqfJyWS5UTT8njVL3eA9ANnJpQHrVB4RKwcraHbUAmbgADEeQphB2d5b7Bw3iU9sLPFm",
  "key18": "3hGyz7oQNhCUWx8gGZdcPo4XaKoD4MkBuwjK31nJNAQXP9SSHyoHwJmKEjqD1y9izkxgPKk54dpq2JxYCuJRxApu",
  "key19": "67pqLDjnrftmpi5Zjs1txPJ4LYhhQwYSPcQX7ejKcqcuzhpfgk3b164EsLt9WtpMUJ87yiDbjtF6yPrgH2euLFi4",
  "key20": "5ebEBCXoXWwfZuoxe2rqjMzc8FhYJdWnSLhZWDYp846E4mZHS88TpVQvJMiRiwXs2PAbG7z3TgE5ufEmF8CivusM",
  "key21": "4b6wt3vYhEvNKmLAynKsNovr3iqQVbQxY3LLpWvRaaimseAiPxnQr1zcAK1naBkoTpRHupuhCuHtVhgzxEtvLwBv",
  "key22": "5XWhn9jxzxynqP2q8m5B2w7iVxfPz5sXhM5N7ZWeoctNcV7oW4Gt61mtpaWF5XEeWY8sNApsG7wRE5Z2csxsBVeU",
  "key23": "G6jEBLb33qwjProV7wvTeyg4zJ8LTv3g3YHkLHzo6UhNmX7GDojDHJY9pEcVd8ST8VzNdhXe8BN3zHp1GXdx9TC",
  "key24": "4gSTDnvEdkFCKcATS4gQBUzsZT1rF51as5i8jtJ3f6SsVG31xYyNzjJkVEmk1Y3E9d41dkfJt6aktJo6xGghMSjb",
  "key25": "5izkrgjShgYB1yVQgBHQDoFfRLJPJJHLBZe48CU4t69jmnie3Jukq1tdsQ2rUn2xoY73rLQKdV6cSthDZQ4bv98M",
  "key26": "Dk8Kn8GrcSJXaVXTYDFidLr3QCFJvDtwsX5jYzfqK5SUW9Jbe8zCHTo9MF3y6N7616BETZD1pMQoU8GfwSFXW6s",
  "key27": "4D2xp9FGKmUj7WyvNm8Us5ujXvQxXApzrQUzXszX4gG9yqKtpBKkB1TnAYGcyDcza8eh2Pgdp5vXvV8kCrsYG8c4"
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
