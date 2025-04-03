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
    "23mGjRoEQxaNHWFJgkD5YEAZ1BEb6mvRiadaYHxN632AtV8zxr97EuH3GtuKp5RyuW2cjGxJL1c3pwGmp5gYuRXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iqwdBS4rcqsjga9gQWVPywjeR3uaMV2oswESR519duDuYqfiTpuJY5Q9MPzJPu8Zqj1ZrLsseit1mYCGuUXPKyK",
  "key1": "4SgmpQmJiDrBfMiBDc6SAFVYjyDZCcodSu4odu43Vtjgn5MoARzYvwaZSNgkfYdCexU8nHYgN5o99WJnh8R34v3o",
  "key2": "4PscDGQykZ2jcaCiNiMRuXbhz5Uejs7rDfoPysHgXzxmhnYZHkiXfYEcUmVb7o5MocEGfSKj8SzdCYcvYWizQLpH",
  "key3": "5QUaWuWhpDSf4ac4Vff1eMUKUFzWd6Ea2WNnux2LejnyL5NxWft9WubXC8tVHxYALeUrBxTVuYukvE212tAT8gLH",
  "key4": "3S4EKwfknejUhnE5kzrr7wjAsEvgXevbo5N1a1EfyadrmRPtaxmq2j5Gu63SYtNPUiLtt3HFwb2wcRdsi1KVKrca",
  "key5": "5NZPEMQbUp5zuSrv7NCTZBeiqe4n822e6x4zTLiYdPxUAVZj4S5UrnQuQwQVFK23xzz69UwiE52w7qT3s2AKDUbk",
  "key6": "3EAA3taMgCY72zJqoxo2CcXM3tDxJGHXweMJNvTwW27yP8ZLnncS5RPvePGsBe5GSqEFEdHmjPUKRUxKyzynjBut",
  "key7": "2o8WanrjWA32keXPv7RuFSLvV11Kg2M4BfgR9bd6b1zyStwRW4X5uJmK7qto9UiLttWRYpWk2qUTCDVToaearVjN",
  "key8": "YKsNQ7TvJadBf1v5TQv5LCEEadBFnMePdY8LnfEvEbQN3bTh8DZP9DSkg2aUvpYUYc5kdXk15RSSGv4PXD2Q2dk",
  "key9": "4u9z3Q8VrrFUYVdz1hTckvtC5YAthAvQrhRPobAZ9SWQYgUhSg1xYbWEjdMzvUkzSLqfQo3TZixNnSMauZq6RHDy",
  "key10": "hmWsLkQ7HCKtE4zeD4GYTbFAQLWoqrReErZ5yu8dect1yF3qtevS7JktDBgY4gRsQdr2wufrmkLaUQPsNXoDWg2",
  "key11": "3Hb4UyJoyuB1XE1JxBgFVQh1PemnDgaKpEBYWS8BHScGW9ykSFCDxwdE7uYMsXCWYvpunQbeNixRf2PmPGJVpayj",
  "key12": "2cH4yi9H33TF3drLUnX1yEE7f574229Qk7act7FVYAKySX8QzmC4scbd4PsqzswdZmBoRrPFY6Vm6aDN5ovMVjLY",
  "key13": "5tTZ6U6SA5YyFnwNmKkCmxnJ2Mp5JQ4w84jnhLUvdJuse1oPZPjsnqTzWzU1AC9h8C2E39EmywupdLhBWmg2DGAf",
  "key14": "2fXTUV8rFc4oM5octt12Yg4u9pBAhQjzDWuNRCngQYHhyHQxtdPgDwKgcLumpXbBVTmevzoPp42QZds8FCRAojbX",
  "key15": "5JHiAB8b6ZH4v4CZbczoFwcxMXBGNqbg9njUsXfaVuuJbmH7Vutt4SzKjcTWZSBhAM4nRiAewmHpABDuUq6wuWVx",
  "key16": "4cM5qkhWPnKZKBZfnymbRtx6BxJrkqsdUXKD3KBJzoJG4p1vfoaGUQm5gGKh4DDZSho3Vctt3nRivf4PFhb5CgHZ",
  "key17": "3vKM9FLwzqn7XCYbEPSwrtbDSUHNhCnxpKqaLWszqMFip5HTjHzB25AptUM5ZxyMnevwqBMownKqW5EopmKzWbbR",
  "key18": "4B9jvoGbFQdSHdNi6HaFCnLzphRU5GkgYCt8tW674A1SRhAdLcJXsHLCUUDodWA2L3EeUhzj3kAe9ctH78YtVqN",
  "key19": "5BvzG7QNgrw1mPwWnhEkAhi9T9SiEZaCvELJuChNR46DhrUqbenwj3Xgip8JQ9yMn1L6TkZCuYhBcohWqxYMNbBX",
  "key20": "2tLL731zj9ahfG9wFpfGXKMP2WNt8gcLBUnYBRxZXf4zgVpvCvLvB6b92CxgUBrKNdMK2BtwBYZPsCeNEpw9Wtc1",
  "key21": "3BFdqkPWr4WniJhptLGHmGit9NpAzSfWThe8YaPQ4H4J4K7AeuMkmYBTVY2A7DhCRAAA4qFaRVmYuWhg4Wcsb7Ce",
  "key22": "3trxYrVwtqVfPcG8grNz4zHcmrnefjAjFoPp7sFkxp1HS7my5T6QM9CaJjycepYvcUjAck9wA6kWkLWenh6YWW26",
  "key23": "29Uk8aTDBjfUWWjaa7RzSiVfprpwJmoYfd7fewYn8i1H9XT5gfeDD3PgnB1P8wnwNCrHmKGqzoUYDjpWhUq2k4eB",
  "key24": "5Vce4NcjNazdCdaTgsHQs2b2M1iTD7kb7bPNR5sT1yfnstfF6pTPA7JyymNkg6X2zfeQRV4DMJBrrQZfn8EdAawD",
  "key25": "2Cs9Y3Wt1etSsLjbjQCX2uDh3uejAe2TvB5VdCgU12FMhz2pnuEGLLgDHRVeoS2zbBiG8s3GdgytfgofRVQRqySm",
  "key26": "2P12c64t18fw3XXHPsPjrG8G9cV7u2mNyBAkuChPrxmu5SStR2geM1Dw6pmL5GhmfLEpLHd59XRFhy9Pi81nXEd1",
  "key27": "37omNsTcdef73bkEN3pcuMB6S7MvGfKkx7Zb16faJR3hxWNqabMmLSEAanP1APsL1BSwrvgzsunxg7JyKkoVxz2F",
  "key28": "4QMvD9ELZnZ73r5akXpMNHUsp5hCCTMLMJqQAkgMK7Wy1UF3T8E492zHvM3CuY2swGZyRMRdEiCkXdf7JPYTiQTC",
  "key29": "5GqbYdFHPxttBY667cUPTnC3GqDv6gsZXwaKducBVZQWsWDEp1ZDwsw8puyodMNa25tRWZbZpN8UjPtwKwXJPQc9"
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
