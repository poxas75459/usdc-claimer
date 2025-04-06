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
    "4DpGZHMvrwxRWU2YmWqeV9yAXM5tV89tkTUDJLtUET2kLgQdJKUpEWqF5VMtYYy8Z3gsevScffKFN1AXrPfdscTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tRnK3fqn9qio1im3rF4k238ryeG2QbxTNx2J5aPM4XSpMce95HXz3d5DXrrkfQuL2cbtQkSRb54f7USHRAdaMGW",
  "key1": "32Ea3hpmx3hc6HkEeXcdGtv7h8Zpb3tke5vi3T3rk1iFE8kW4Q3cgQNrv9mr9jPPFyQUiHjrvSuJLaa8UdY2zAan",
  "key2": "2Swm4iPNF9K4xKgj1pbFGnUfyHFzT5rdtnvX8EJviV6T2p9b8tNVU1yPo3Z1CR7KNDgAoJz5kL2SjpfcxSyzS3WT",
  "key3": "31zSKBzTGFLKfrRpPg2xrqFF5G4Vt2umNaU6ZB7tmfmxCAJAUKMvaLjEkiASq6u3w1UEt9vQHUwCXPdVS2EPLjVW",
  "key4": "4RxWdY6wGs25KN8hiePRRBgCaRE7RWbEUKUJvTWr9pNoXJgMmBkoKsqNgA6iXPpcxncgq8vx8cPq2gQLBsG2X3gU",
  "key5": "TUc5eE9syGDbSKoqkV9potuyRwRYjp9z19JVJqSMMR1L2x5cEnX2xbbouCiVKUE9PuDKbuMcSHFhcAzsZVDSxpX",
  "key6": "2reLJQPEth9UhUzstuv28zT9m5XDR6VkgefYDAMKpq7NoC24gc9svCGEh7qALxM9UUyfyyaxyAYkfwD34ewTVdAv",
  "key7": "5LLiLfxo6UA5EgWKJqgXHUD1oySKaXW9Hjw7pWcv1hymCAvyn2j5nneqbGFoJqk1fiu7o8MJzazuJpyoKW2s8k3R",
  "key8": "25CEZVFPHcvXDnubSvVUDomFVgb5HZf53DeZ5GKkocRNNuJQYXBL1q5SLB3iSZPhXEN29SQvv3TG1mCtyq4z1Wa7",
  "key9": "5wZorp3e5irk3ix9qLsFQmfXfkqS1jnLua3pHLKh7G2Cdjg9tfFdPRGyPcNxafXGCBg9vCA6aZoAiMTsi93zzwv6",
  "key10": "3wSWBVfDKBaANWiAjeWCRpj5mb9tN1hYAbMn6zh9jdNNM42s697BJWsZdtBigxFjMXE8xw246VRbtUq3FhuLWujx",
  "key11": "4gTdw5e1MXxxpWPt7nSxNAhFkoNyKr5F9MfsdvzNZBWxuLZm29c4x7BhjjfseiiifiP67yAAPZGsvUKvbYDCQERj",
  "key12": "35Xwv3DWspX1zWsvtknWdkuRLFUy56qZGkTR8jgFDJ4pqhmRn3VAtoi3wYdmJWoH1uVY973Z8u3XfLfTsWin1dHB",
  "key13": "231HRUKfxGRW4tDjn7sFLjjJNPrC3iU6ABk95b2ocdBH1Rpe129TBr2Hudcqrqw7zuABUZTHhdkyjZZEk2GKphSf",
  "key14": "3oQk8yLCAneCQPfXNj85eX24FGTu9HtZ5YdK41napUd3UWisQCPHVwiinmm666wWNBzMgWnh6HmBwSJxAvDJ3bqi",
  "key15": "5h1WadxuTbzyNYmAHCA5N88aeYKcTLyhY4LF46U3ghV6VacW53YKMqdg4aXXyTcHW3MqjVoi6tuUE2dsCSdz73GQ",
  "key16": "5GdN5eiEeto9JN6bDGy6K3nEcSvdx8ByD77E6byVXGAhr9rJGCgD3okhrWXgjx5pcrEDYt6u4onrjVJwGEQ9gine",
  "key17": "2arKHaq1vc56Ddaq3mQABYDse8j7p4GHWvJBk1GjYd9mHHWEgbX6nrmxc74F3Ssy5WKF4KAkZG9cnEZdwr6re9uk",
  "key18": "3xR6UWBkhaUkoC7DpxNpAP6uv7Lfmn7CwR6wDawnpHAQearoqeSr4ppSACnVWXKSgzba2sn2NQspWJihqJs9MnWJ",
  "key19": "23MMnAmXLE5eC7z9WYPfTJzT3RdEqPMswqFSFfgxnBcPRYuD7xM3vk6G4d2jao6wdYk8t5pmGcyyfcYTJDL6Jxev",
  "key20": "46n6dHEaushfQrh2FBzL2hjxkrPHNQHZGYn5yCvtMWmwNxs6aQiL15xJqWcU4ftf9Zq3RFR95V4EqyedRND3U5aR",
  "key21": "2WGKTrpVUUDhskVZb8ZmmM3nPGgHEdnMCJVYtc1S8raipV2r3stLnTVnTkJdvp8bPaPDzALFA6kohXvjRCGyXZL3",
  "key22": "2zcL87iB5twY2rYrEDqQfZyJrsiq6KEd8L3NwLre7ic4J9PnVSMXwSfabFieZwMfGSVaJshiZJpDB2dsThvqmzk9",
  "key23": "2Sq2uSxuKDjL932qnCLzJqBZ24TZaij844HQ17CKfZJyUT5i6HBojaWV89q5VqEz2GBQ1YC1ETeUudMzX3MWogd1",
  "key24": "62kuHekim7katevYB2QUAcRLELo2SPEoUZdD38utoV3HfgEg3mPDrAFLCsPHMC2ifuTZWpM5wpEWuE39BF7ReWgi",
  "key25": "ehZVQURvTaA6QYFZJWs7MaBbZqH9RQRxYPBi8M49i5YGcRSsV2Ltf9CcEcX2frt88pPpba7qph7AEtVSg5iCaW9",
  "key26": "d21h6WKEL5RwM3uVykTnmJkJqH1sqQz2W99khwVtfE8NT2XG4tBFpgkkJRwMqCdbLQRt8xFoZa7zW3T97Lm6moV"
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
