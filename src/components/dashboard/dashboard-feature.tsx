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
    "57pcXugkUKWuN8Xgqk6cvbhd17cGHhQnfu67adGEdibeKE1jEffZTXRgGjMpcj8XfYZKNUfxEcNPqWimBPGZynvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uhS15S1jkeVvrYx85QE1GnSsiRBiczcf82WZFzYJPj2k2dA4LoTMN8FGRvKDcuWgLu7Nei3Hu5jbpQQ89oXG6o7",
  "key1": "ca5ss691nDc89Ekqqme75TdZEEf8DWkNzicBwzCjexLJdNraXm2LqPCDkQ6kEPNkAP8NdUpctG43qAvMtYBXXEB",
  "key2": "593G5GzGNUmMjQjNJ1ASmsVYhtWqzxSEqdzpY2Asmu8L6oA94rLNcQRWzTpeSu2711qPpd5M9EXbK6VVgf43HJ6U",
  "key3": "3Cx92sQhaGfSwh4dvAvFcNyUB9niVmtBhuwh2DidHU3LZooHCWru2DCkbBARnPQuW3gi5LkrckcueZbYvkr1oPS6",
  "key4": "3XXoqiJaZVh1WEoTYASqXvMiEdufVTjYvpawWcso9grBiocTDa8cZLRiPqE6yFPcTVdELDMrGCq7C8AEswWj7DPo",
  "key5": "2UDJVyUNZKw3NTA58LM7igFrECTCnSMN2ue3FCNHmvjDjJbdHbUCoANeBGDXmo9VnsrhEcZxYq7yjZQBWFzytYa7",
  "key6": "h8KGvgSmRySaNtrHVWERByHLVaGUPe5to1utzViDJWeiHoHJ4AU6Md25D4b8qcjLpcAp7k1a8EzZKSLxHxmpNkM",
  "key7": "33khaT6NqP7SjgEJJ88FLDRxenu3KZx1xQgYcGnAEX7kjZUvHzBYQ1Y12tzByU8YrBsafTug5XFGHbsvU6aGhRbW",
  "key8": "4xMAZcaiR7Ed4DxQ5oHSKiDrLuEzVsbnMgNKwzKFVoXogUrQt2FV62tmiPQbvbykra7h5JBDUJmKpY6kADuxBS2",
  "key9": "r1LoEGCV1vSWwwygxMJSeDLUXX7NueioHaifzGzPPFKfHBLJcXMHDyVwAF564iFJDCLem4CjbB9F4yAocsZt2qi",
  "key10": "2kT8aLvTBa2zGzkop1ggmi7E8wD27VDWW4QFYsziu15uAo3hbyqsb8DnUumRPfLRL5K587rMYBQ6AsUPW8NPaFZv",
  "key11": "9Ja2ES2EQeG9cBakkKkUChWS195bDbg12AFdkAd35yYK4kbT3w7uF7TErLZXmora4eTMpo14vDpT9A68LV7tdKm",
  "key12": "4cYc22XxBwRcuCkMThzRG5w6RsXEwzNcJtppELouskY5TiJvqkWziNxpnkbSXrD7cgqzDF1vVz27Lha3qqYjEkAD",
  "key13": "5EmpctbG7UPfc89mhjoXG59EuNiNAfDiFcvgpAgMhyPSEeqffgX2e6cyANGkJngMZvmepLPPCvfpNfuHrHUBukBU",
  "key14": "2fRCN4uw6CdosprzQBBqbyPeioLDEwMerEqr1fxbXRZ1MpvU9pNuAg4sf9bR8s1T6hvqzJYahToSBKTRGDqjprks",
  "key15": "2g4eRG5dmBBKWosQ9T8YxzgYt34ZwBBzsT3Qyb7mMppoycm36eD11Nma1jLyNcmscnub7ixsUmFhWdvoXh8JZd8W",
  "key16": "bQ1mrEEDeVhz5av4deD6Daz8HDTk62BkX7FsQVkYWveCeEbfPLGo53BhgaoL7WQf2QE2vXppDkVpHXmh6iMCsY2",
  "key17": "2hYDzi7XnNV8GzfzZqxV4EhHC2iKHQeuBtWoSHFwPB1qxs5MMkKqtdDURAdbR3PPQ2opqTDnofrL4UVdMFTqh9wG",
  "key18": "3LwK5cimJ3k3HSg6qgqFfE35gJckauSgwN6xYX6JAvzZQxCLsdqTkL8zKLms3hkcxWnS7dVMR3h8mEKFPmZD85dq",
  "key19": "3oiXYnFeVut6mxAnSgsihhdz4BuDn4psQBYa5E5ouMaUXLLJzQfpaBJgWdTdMh4uttnnfCyyyVcvHXs4t2kaBZrZ",
  "key20": "5aRFqLP7L8k4PJBSWjy5ZvoqeuUAL6LSH4wHm4eSgYygEy5QjPanMuZuzv58LCkScoYLCsbPksxqQ1EUkUrH8xv2",
  "key21": "56EkEBdko8xJ5F2EG1oy5aPA9HT4r54Qa86ovqerQGQhrJnfkhXU31N4XxSGau91R8q7Py5SqrBEb7nRswJBFTzv",
  "key22": "2k1tSgLnZDHjNVwdHsKVc28YpduTr5XKrzQxnPNEyvV9ZhV7xN9qVoBwHwVKAixsrfNYsYrpciQJESZ5de7SjTvR",
  "key23": "2DjaRLkwvbJ2G717vH345M3cuWkrvrKBvy1UzRN2mhBpDwZGXKsT61hsL6Uv9jiuVgwgjT6z5eH9RHAgwzz5Xf5p",
  "key24": "51Wt4Aa7zvHNHjx7TCUHjCwPG5JqQMCU9MzdRbMPBRxG5qusBAWuTvUWQvMVED9eiCyqUBwvRsLetzFh4Hicvenn",
  "key25": "3Yy84DdAkhD1ACpQYocejrP8nUfMCsk1dmnWajieNSfLVHzimFmWjuu6ACBfP2gcR93HWkvTVF2Z34VYz88zFMVq"
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
