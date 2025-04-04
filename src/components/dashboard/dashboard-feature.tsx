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
    "g38doWQvvG2eBf34FVUD47f6EXSsuBJ4XPkZZ4KLHMQQpRebCoXAXRck42QqfYsqQT1idaTVTrpVsdmxaGQysZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ftSGXaPzzECd7m4B8G4JinUcWSMkCRJJj4vNJXG7Ji9o9AdX63FwG25dirkRQb4fXWjUamYsGrd3gewb1hgyENv",
  "key1": "5rXtT15M15izHinJC7nJp793nj1SaAHVo9Nbd3PJWgePgbuEzyzAJUJrvKWL2YXp8RXWh4rvBjasfsG59crrHpdz",
  "key2": "KkbH14C7oUWiixxEMpkWPvn8LXJ16PmX1QmywsjGoti5FhFHF4sJ9PjpXub22RzH4SQhVW4WP2qRA2GKvw2Cd92",
  "key3": "dFF4TjJh7GFxxuHyPgJwEFXR9ADAEPoqGqBqKVX1btvYi7vtwg13Wtn7Qc9Nsa2qSVUS8uawUq6pdys7WqJj82u",
  "key4": "5QD2J8fHWa9CjPbkPfNrEkeJrGPwDPrxwCTgjRyTWin2RgtxBrThVKV6wCzXtakiF7twdENZrTAJG4xH2yQh5Q4p",
  "key5": "42ufPPUmdvk5sueZ56yDGmahuyKNbFi3mrPU9tn78ktP2q3SDFWJvfJTcyGpYskhbiJqQsZ58YTED7ob2WqKWpgT",
  "key6": "DRtftVVcPx3sfVvmXGtTvpZ3ZoUKECS7F7CFXUCX2ZvacuvkAy9HLDUYgEqMvEsHU8Z8YdVoHvTEHB9sW7bPvCg",
  "key7": "61SWczRs2H258kE5Ghsr9fyEqmkgBkeNzHWN99qinWCUBTAGTFyrCh6nHVTowmFgUkR8chnHqgBTmx7gTZaZ41dh",
  "key8": "3B66XNSfiAgfsZ63QoYcbcRoHJjuw21a1C38J4eGwqfyh55a1t1BGyuLmsAcWa8CuDKq12kpKFCKEbtixjcLCtMT",
  "key9": "3CTnieWKM9uDikLGCWAPqbq4oPNmmGkPvDBLQsUAYyvBcSPym9KzQR8ZFwt6vVySpeAtr8zoQYnMqmAQmiFN9c6h",
  "key10": "51sVQGF4MLPC8T3u1dqyjC2ocP7EMiW1DJhAFXQqkb5SYo2WD6NRxd3j3yuKhfV17jVTmNjv9NnxqAFP2SrPRDFb",
  "key11": "3TuSrchRZokPjTYE3rxaNbAoGF1j5oYw59n7cBRoHayDjAd4ZvgT9DEnE5p1oHV1DFZnmktEaUMUDBo8MBTCnfFX",
  "key12": "5XuXbULB6VVDcjvHF6YJPyycU2j76de5hB1HcRcyh8Q4pZgBh6WocT84frnBK2tN4fzrNhGgwjUXcUx8ZxKJmVd5",
  "key13": "5hpHrGmDY3MjebusueXFiaygbb6U2cajdcpCQQFrtT2uA7TcjG3fbxe9AD7xcurVkbnJ6tAirfF8q3Fi57WEFESF",
  "key14": "rVNAD7nxiyp3zxgTjJY2oD6XmKcH4WPVdSUq6jAy37iqx1XgPDeZ6q1ZyPXaLdLjk91dPeu2JupWLJUD5Y3bFPS",
  "key15": "3sCCunAMT58gyH2po6gtrNZUfSeZNnJgVASGW91uFkWiQtUExjFrovAhy3QEKvpoTZtmRd4EnAhq6ZPuoiBQWV2k",
  "key16": "5N8NEcnLeepLPcJQiLbJLUUAni5LTdtMjknivdNJCigpG5bhUSMtzhLMce8BGiFgKtPu31Bd7DtrLzZGkE3fyxYZ",
  "key17": "dLQnN2TGdCdvVaB8kY6AgTXTMDDebHYdZxbVZbXvbCRARL1NsY4Ts8Mn95oG3Gb4tBBggxjfWPZtcNiSkg1Y49d",
  "key18": "5e3pNYwZ5PXgPAVoyTgtG3Dva52Pa2BaR1RnZDBtHyiqDuoxcmuYMi2q64tr8eifsvMN78i4oc9mEjfHDDVKhotu",
  "key19": "5eWmgjpVExqmrMF2PDtueb2TVY417EVaaur7qxhFXb4ERv3wNc7doUGsg8WMR5dJF3sQV2hYm3Q2uVa92k3zViV",
  "key20": "27nEkHsEepfDLVVzwJzEpQbboFjgt6qTxTp3aV3zBVRwbsLwoPPqS22SYpGJtqj6QJC2cYesqqrx7dBVYF71kYAn",
  "key21": "3gmD7xpRrNTHjRLXFjNKPY4gNrv4yCSkpR3n59styWJHLo6T81tebsjZ39PR5RT1d1oWpnC5uvpdhQuNBDM7uuat",
  "key22": "4EwxZRzu2cAY3bKi3TGKzXXALr1uvw7cK7VoqQYNwxVmdYiXBS5PFQ1xaRqpjAtkgvs1j2Y3FfMk75UpRVC4tA65",
  "key23": "2rjPEsVmxA7ygb7dLuPniCb5UapdTn98kqaKeHt7VhwW8LZKXsUsBuxahBiYwdmeBQ8yvEJqqsXjkfpKMmzHBdmA",
  "key24": "dPTefyjXtSLR6NFxGnnZGNeMrVzs9AbgksorsJof3dxYEZ25MpvF5GAhD2j6RQiV2E8ZUwB2jihMy6z6W5pAWwG",
  "key25": "4UsRRqBd3EbM3R8avHnZSULaMHLHpcDt3psNnDBBRuViSjnTQsJKigWG5tiyah2cphDSiiHT3xhcsUryALwV6W18",
  "key26": "3gjQyaYuKjEhty1pLfMKwBneNN6MTW4terwrkUoFJhoSxQaEcWM2JxHFtujPaQ5FCvSUkBaEhk1HLcbFw7Nfh7Mn",
  "key27": "cEgTDTF55zpPRmAEJsZ1BhHFJCRqYAR8mamCJ5vW6xeTi6iEwzzADCWbcFEqiqF1KgyZmBhc81NzcpfBzUEeSFC"
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
