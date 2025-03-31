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
    "2yzg8faSqNbj7Et4FtsnbR55ebk7UsozDk2TYZXNNHM4SbTyGsfMhAKvE9gHiNmnZq6VrvYu2PPZdXwb2gCCeh9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q4GE7B9Rz67NdJkH34QYyaCxMSyZZkaYhTSYUAu3gvBikbq4k43roe2ifnoJgupySWjHdvAU6vHaDLxeGFxM36Q",
  "key1": "2b2nb1E2doz1CMrVKMYBM1miK858pTq437tnVs8Z4aJacHyehxYBgrSJefSCw6km2T6XTnHoik7kbft7WGPBF24K",
  "key2": "3UpnNoRnZNv3zqDgoHxZE4KMpjJejB2jSiJUtouwNLzZDpCpcTcHkPabVw6mBEDxe8tJu2uCKazA2Lyi86zBDCG6",
  "key3": "3iVf2WRaXoM5nfvtfxQgYP9N387FYjXcdKwUDHgxHnAYgyE95HthWRLMtMHx4WadLfYSEMncohJ8T8RfUHpmE6EB",
  "key4": "2JDEpBkqo1xBzBk2PaSDtFYR6cxKspqkcpYBnzBjc3h3oZvhZZZi8BtRiLsGckozcfAvqX5fWU1oB12H4SzXWH4e",
  "key5": "42SK4KupYiPSmikdKumH1LFuWn5garKEBZwP18KX6kp6ScyabahadGk6YSBmTR9HUD4vmoV9QVBtCrzCUniNLFyc",
  "key6": "24nA2K3c7SVyNAVtZZrwzHe5zEr888poT7R5CtGZCKeeWmJo5VQXoNYBnsUDUzsNJrCCkUcv365FTTRxpTcF7nEx",
  "key7": "44nxCAo8HGpbjRgHwU1rcApiFAzwEHnLKT6myoXUbR4c31YwFv29YZmhADfNsoHKEPu3XRWZdSxYdKeEm99petuG",
  "key8": "4RwbczxE1eCVoYnnxkNi9AwrQXxirKZwzsQB3MPcPwBDs8GJQZHsxNdQ7J1iAtgN9bJc1wYCx5MeQQ1TorZRNAPa",
  "key9": "3Dq2GvxLQr8KxRMQ9q8vXuxj84p6QGWBgjNce3xGZoehXHbtamjQqj8D6YSnUZk5RF8qvwGNuWgKnYCxntyDU9XJ",
  "key10": "55Wvbw5XkdCfnknAcDD3LStezk9pme298NZ1mjmCGptURRpgeTa7VndsU3UXzudDuHg6tHoeo1NGieox6FmNzYR9",
  "key11": "uhAD85RT188jNbtwwCZyWPZBB7wPzfNhhXwssegWg5dE6kpKPNvBAPwbcm4XHh9MNEqeHbg7uLLBkD7HuSNo7Qi",
  "key12": "eVpRGTzqeB7pLPHBHRJrhq2aFgai8j1HU2Xfsv2PGgJQsCv28UhgzUXeCK9nahwZGYBNQKABsR1xaJTDEFhXna4",
  "key13": "5ubkvWiyFwSe3LaMTFoaJ2j13JurPfWYwe9XAB2hpULSaLZct9XhRX37nkW8kQLoNu7pJF3uvmJ3vYL1xkzu3C7F",
  "key14": "5fua3zFCFRsxyyXDfiMRD13DHH161ZhXLFNMkdLLGNVed1TkkPyg4AYYu7voisXtWCDXNrj7Th9Kb2ixJCqJCWYy",
  "key15": "4MshZatFs98QRk7AXSXB8YsaTJitGfrJAtdqa4QqDJDDVWnEaBGiJ5xTVoPV8UWA812VCy3hMd1U1wkP63AjJ8RK",
  "key16": "4Z5bNWJ7dKdrKCm6sb2BPPbnppJMC3bZpwD8Q6FHLeNSC9aJ4XKYW5t6iwCy5zCBCpsrV3wjFyVHYjxbpaGYEHk8",
  "key17": "52AqJTVgSTUbvAG9q71JmQgwzQ1Riv2vp9AgLLYQhwtF9b8HTkx2HafVS1uxcAgZN8KFkvZcqLHhjVZXqqhGVwdL",
  "key18": "3vpFjZY34YBCn46kCPSSCiyHdaHesQVkVW8HL8NwGmkzrW4rwQx1y6ynTeqHU4WfkEgtjRFZNcMKW3KtTAGWJUau",
  "key19": "244SMmWvxJsXPXVusapJ5RJxLnoHUtkbiMQ97dZFxmGXCDzWKwgsRpZjaaoPRQME8t6iU23DYyPWKYvLsvzGVnqr",
  "key20": "w1Q2XCp8xB6FESL2ReGwn3NALZJh42xHNrMqXLnhdCqXM6gBDrzdqBDSExXZLvvWho73EmmU9PnEAmLwf9pPMc7",
  "key21": "4PMDZR1zYTcS8MPMQfdeBVP3LerEgvdML8uJcyqsTsRdGkCiNuUmxyYVVmS5upvPZfg2dvhAsevuxo15E6TiahbQ",
  "key22": "3oMzpqSMqu5ytBxeRENQsquuzMRfbUAPAUWKHWbLLMvy1egAYjVcWEQx82dZ5hsxJ7j38ErqpjvDDThCSXBiyA3z",
  "key23": "36FwsGaJ3UN62LWYN2UMCj8U1bmsL3ASknLBT1opwhStPUwF9XVSbZY7Rvi3ZhW9fQh2ttLFLVYcWsZNPNaXqGqj",
  "key24": "3v6T6ctA2rMFXcSftg2UqZgUyZEb3Budxowpgf6mb6sA6tpguFJWtCBtTK2BktFaVgwDkwifACZTXCJFeQYESdmH",
  "key25": "2eJSKAgvoXibuYTF1uVsMxH8Hu2xYcht5xfcD1gVRT1mbCJkSrXUU25ieQ9YEwDphnY7eVRKX6JMuNEemtePo8nf",
  "key26": "7JsdkPhmEHkWWPfvL8PCun6LiN878zeJ3RsKTRXxs6YzXv6cR3qcgJFanxqJjHWXDtoram578S6nTgSuqxT4VWe",
  "key27": "f5nNURijKeogv2eABbVc4y3wcqYUGvjEFKBrzXca5zZ9d6PAzkGAF2ZhWedvRLc6oKp8etWWdfhJ5XipCyVCxf2",
  "key28": "6ZF22UsCZRZ5WDJDTTxfQoLFtWGAXRD71G9gACjPQTwnTYrF2XcxhSxNCeX6L2E4eRFm1dXxzgzum1nxAthBZNL",
  "key29": "5y1Kn6Rvj1Ce3tP68z9WBLn8y57cnYKZvqKBWEe9n1WJhBxeS8oJmvsTJn1EDQVArZSWB1FCpVDWwW2xfFfsdek",
  "key30": "5hyCUqfrCKLLe3Rwh2CyPeZA6oJubN1Ggm4jxTwEjvbrtFFvxkDwAqHf978yHcsV8F27VWQV4Lfdr17xwKf4ydEv",
  "key31": "4kJV7Ho4M4VSfVvd48za5XcNPzKqHWqWqwv8B2w4JLmWK8zmNdcAQX9nL7whTHFnHBY8a7KGaQGCxzaZXx77LsQn",
  "key32": "2X14VYtL3L4DTTwCNmKPmXy1eMR3a3uLtHySun78uDWkbCQRPWXJ6DinzGYDzcQho3ApkmJStG3xXZq2KPUWeRM2",
  "key33": "35ZYRBun8y9owkJLNpg9najHESzR78WYUEzSbfiANfUrvqb362HCUVJ7k1cygfFZ9iDJLgWKZKmbzg1z4a5HwSdn"
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
