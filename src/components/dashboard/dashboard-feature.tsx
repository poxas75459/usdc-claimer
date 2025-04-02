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
    "3fVccEqPBnjL8i3GCPpr4ywWfkW3KUgNVCWV28bRDN5kAC6Fj3sjDNo7vSY3k496uYWEn2eq6awVoyxyTsw9TmuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TsVJ1G8i5r9621W94HDas4jEmwFQtUHR3w8XQ4AcidqnxBVxpK56k1oiXrG6riEcjfGg1e8PD81LUiwXg89TCc3",
  "key1": "4QdWAN1pr3iEt2z86k6hAJBUTzdRGteWDwg3peVXTQvtWb6EzdyW9hFXBacebfUySCTAWnkrKVfaUVBxzBKDV8n6",
  "key2": "3HC6f7KMjXTYqKvKKUBdwq9pD5CqhR3wERSdkUAkfD7oxazgE5dyHiiccEAkxvGjQShavuS1cwJEzg3cKcDuPcoG",
  "key3": "2PdV4x8wWAFDEYmxugx5Cuyyn7twsNtSbvaMiRZEpmqX9BAEuvVeKLpdDiTWKEREAnfktpQu5ZNcyEoaNzET2rTq",
  "key4": "KNjxZSi9oeYscSG9LiAPSUcbTgQUhVMCrrPg9NPemsTGEAz8wAKuHfkYZAEd6zjEi71Mep4TuvKRUXN6adEdp4o",
  "key5": "5VCgYfsBSgde612FaZ6rbVBLP9P6gFnEg8DTxtnVTJDVKDY2eixoR5xs41BmbvXZVPiojNvsuqf7H2MWyQ8mUWxW",
  "key6": "4sFtJcB7EnUaQrC861QYWeS2sgPg8QQ1LmvE2ySBNAQWiWCryf6pEVz3MJ73W8k937cRWCYLAQrb8oTGwJuaR8LY",
  "key7": "3kKEhk4tRsouTeDBqM3DXxaDX15JKosHQRAxQhUkhzkULqdmZn7bKc4bu6frUYjJ3wkkNGPmuwYeUstcs1VwB9Rw",
  "key8": "eZJ4Dc9oEBxL7YzcTKKPigg18FzhDfPWod2oq9ELvGBvuxFstor6p3cptrT8GUfHNJYZtVAg5XCUztuZ9UwHFf3",
  "key9": "4RddraNWAU2pG4ZcudvZHb1cxY6xrQdwFhd2vNF3gusEFghV3xXDVXnGCd3iHd1cCxoA2NufGrNvCQsiSMSj3UVt",
  "key10": "4ku7zN2xfVZvBJAJriAGacJZpriAHQSAc8woT7meF6pbQjTXuLXA2L9BAn9hcABX52Lb78XA6YrxZESCYmC5RUiQ",
  "key11": "5tqEtpXdd6CGAecUo2jepnBK7ccaXkoWh87nVeDujn3qMoASGBayDNkKT8c4taEaxJziEjPR37JaX79vTEvyfpjU",
  "key12": "5WW8jeCCqESqLoKM2nUKKuiih7WmKmrfSqZLGtFHasEV8sCkgEof2uP7TWe2XfKYqcnbdPyAyo9BpWDNAM88Ckzz",
  "key13": "28gZ4LhmhNNCTq9TmLLK3S29npFtqedZ7Qfy5skEeN1tszFo7i8f1435maHur46NXQekvRZ18DZxQdnJyP4BSvbA",
  "key14": "4y8AoGxX14FxynX1xfNHynYJPEqgSGP5TAuqX7VTBooZsPrnE9axLFjA9u9FDzj5rgFDCcXZeWV2JarzgvKVExgu",
  "key15": "27vFBQz6HkyFXsU58ENzKDthKyJkP85oFEybwSFsLa28rL9miaMdgTaCVdj85KTqycKESWeV1yHTgUHF3Xy6WH6B",
  "key16": "8teSWFyc9h4AprQVh1BPhBjqWGBE4uMHVgRfrPax333RyR29NPyU3YtRn45Jp4WUo7ibYqLq39dbVDJ5cQ22nFi",
  "key17": "55iipcbm7P83rqtxCxNYZavxkjVeBFaeT5e98TKUM7fggYRJKPL6Nbgmp7qfJ7Kf7E2q9pWJ9WjYr6TZS6m9woCR",
  "key18": "oMisE5DdyWxGuqaudq7nsNfoGYWJJ9zM8aed5cXpNGJoUA84WowtsC6U3Pw1Ro3VGj7oTNGdx27Jw8uXGpAU1ny",
  "key19": "tDF7ax8E3iRQMwB7BHnj3S7gwKUiJAo8ucgHPsJLP8up24RdU9QpthZgga2dCqR67dcvVA1TD8AAWBxpLii1Pc1",
  "key20": "2jkR624d86qM88iwvuCLTjHs2kEPb7q4Buy1vmS8W7s7wE6RjJAH51QVeZaNdYJL4VWNsQyu3byPz4auLyHAMRTo",
  "key21": "3rmpnhQDzAjQpjjbJkqenEFZLFocNcQ65tzW9Pd1gnr2fGkg55RDQ6FtKGkLe1ho8xrsGM5XSysNUoL2xTZEUmDi",
  "key22": "4hTjZrcFijW5EgHXYXbEMpdfStdLyCLASjhb6ciR2bzHUbaG5rGAvkcgc4AzeMUyYJU13XarLzfEZ2NyoyLgN8wk",
  "key23": "65oj61nL8yNRi5Ev2E9NcHFnr6Rr6H33v8coJDbBP18pUdhCDR2X1ZQY1mEitQQqCs82cwmMPHXFYGCMEPBoMVsq",
  "key24": "2Y5gnhhVNwxRmBriTiAiiTnXf4nrdpAgAdjjeVcuqePfXUJBQmShLqW7Pe7YJwD1Jorz8VT9Bddcc9rQGbViQsGQ",
  "key25": "4oWFW538pFrF6cfGaJJMkiEvCZqaMun5WqHi4EAZkJJYzEmrMUdR1mTw3YNozAn6x1nuZpcso68xhPSv9mG3UwsC",
  "key26": "5EVBkJdKuJ5cB7F477WbZt2B848ALz2NCG6wqa6TdZxbtFAWqmvTZqjWFr8SxWm2UjUouhNbr8tUS9PxLCfzCVgT",
  "key27": "3JLut3fiQU3EbKDEwavS5vWqie1NwF5gxd3mAchyWj9KR4NfKZbprDy5LZ2y51DYECk8koCx8KM7Ev7VmieafrU4"
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
