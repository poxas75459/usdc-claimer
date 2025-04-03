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
    "KHky3Yr7S9K7PR8JoJMCztmNJiMpC1F3pyXQ7Zio6WKZ8Esf9svwPSRoVcYtvHACSP31VZHSSDu721m6ZHcQ1GA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rH4GErbTqW7coNiPAnbdjwB1bQpNhqmVeKcHTh17QYauMXq3S3hyKcmLnJYrUVy7rEUaDBBgxsBa1H3oSA6J95m",
  "key1": "ho1KxHrHaZ2rg2L5mCh8agiQMzQxHZByGtqSzprfHaP8vk1tExcGbZrA6ftvgSngyuNoN7zarTq5TD7HWNVzRHc",
  "key2": "5fgUFVWYuRTkkNdibtyHkq6LzsmroDYrZCmKLGBKH7Nn22tERwHqRz75hcrmwkjkJ1gssfa2n4GWxJyCXRxQPauj",
  "key3": "gzj25KU1voVg7bMffDtmPRXTHqySVsnpuxM5i5QVmMTGqz2NzECSTm2nPdQd7vhKBeAtTKDMrkSsWrZgTvPphAV",
  "key4": "2Cs15CuiLwUakYpyDv6PFMzxG8x1eE1tvq2XVmZLwdnjjxZFbTG4vGGLdDzhnBT9Ep6LA77Gj5V4r6vRF9ZEAKZo",
  "key5": "2z8Dx9GyXkSc5tsp2gnprN6oPCvNrqWwGfTY8tMg86d61Fh1UoPC6bZhLG5Mw62PNm994pLCXequma8f3erEFG6S",
  "key6": "33PJSGhtd5zTQbKyqvAdZZ2vLZavES9Jk1mShfGBJnu4AYTHGW2UmkapHZDgrNAEExs2U5i979YHf7NtTeqFKyn6",
  "key7": "4zALtkBFUiinLECd7FuX8sULDyobwHdjZoSKbx4rEYWbZh6pzuCLegMejB5VUqG46zBiRvi8KkoYvRhHvP42aZAV",
  "key8": "5Ni6nMJmNRHAg4NYCNhMd8ACKo8XTPhT7qHuNPoPX466npxy2CWVtLsCMCGFAGZ2Mc5dfPoLH311vwqYkoFyh6zL",
  "key9": "5B6jERWQudwEDV3MEQB3sA7peSqjMySgrVf428gRahT5y2CpWFR2Yn9Q8Z8uAmZBiWhxyvepWUbptucxax5D84KV",
  "key10": "5U4RmBb92JzPeDPHWGAyGxPbpDuY8TVnFzQKZGZwdmdFnjK5rENNsqJBMvVMfYU8g8fcFH3hM1MeuPBH9uJ3D8Ze",
  "key11": "5vmz96aKgVRtnEdvPiweTTyZBuh92jHAVioZoAufx1EFgSAg67N8nnrv2SU1hhbzdXywoAcxCcarwBnBYrZ8oRpG",
  "key12": "2fc714p9dgXGzcXJf6AmgHVUmDzB9m3SsE5gZ19kswD9Biq1bEppS8dePm8y9SEEBWx2kcJpAV2ANFrtB5FCdnA7",
  "key13": "5qXtBaZRJp757BorR2iQXSHW3nkkN9SCaKjhXZy3z9fvGavHaSgrSC7soef59udNwkZbHhs6FXqesM9nuz51rwVT",
  "key14": "3uFWna2HycAuKEoduoVQcq9RtKb917h7766NuePRSp8NCUV5fBoPFtSL9HaS1gALQ6ciP4LWbDyQbmRWdeoogbxs",
  "key15": "5P5UVazaMbWCdDiyuxkEBCJBXEFzDCxpSdmRwNyUAATPsMbHN5Neybo9Dj6gZn14tmKKVewgUJ1uDXtfnaHVSYZs",
  "key16": "dvfsFuxekxNo3NyiLaaqTN2UThdiJsLzAgPetyzqUMLPg3oQzqCsUeTADzshU1wRWnUi53bUhMzuznQuWDuPtcD",
  "key17": "4KGR1oH2iH9KvMZ8cjsnvXtphmLhGXcVaQfk2RcKvQbEqMZ6wfmGmk9SUhUmrumCiLhNcfV4UYGDiJjazo1CJ87y",
  "key18": "JTWq91gNxHJrvFCkpBdvuPcox9NyFmpz5vybU6qUGrb4KXiJrxuah4QvKBaPA8bSMo2zFHnV2vjvkz1CthTGV9J",
  "key19": "4vTJRsAgxRAZsCUtvKckRDC74SG2ZShDLLe7mHjJtCVULSyCHnd1RAHmuTfby2hSWKtyaPLvfoqPDDk8tJpaB2Tp",
  "key20": "3b4rVANkqkn6K6qYgEGg37RbxJSjMH5rUjLDJLWkVedNFHfGXP1SJSjjBESXP9t9P2ZzUqEG1AM3XjWZ7CJN9J6Z",
  "key21": "5xhLor1nneiwFcAas7LvzdXh9acnr5wjVjSyb4GorDUbLAhEZNskriEbYfkMoSAWP9nEGgEzVRz3UG4qa6xgRqxr",
  "key22": "5eDfCceLPKDf6d74XNoXmxMQvZvJMUGAKs2zieA9SAZ6ZQpjwqcQAXjzAsAoPA3mRJq7bj9JC1Bk8FAfSXa9xNup",
  "key23": "5ck9yj7bhTah7CwWi6CVFifaVLSe5uSgAGyZQz3MeQf67h4Joa8miYq355qU4oPEpsuqZ56wBSjChdArd5Z2aoLu",
  "key24": "4sq2E5YWHawTTTCTEm9koULn38yEa2nQr832MQdYgRQkA2ooY47c5U5WKU8WqMZYuH3WPnM3NbV4VSqLHqo9goCN",
  "key25": "4BzLGfEEMiiFoNeF8o7vMsnUNAfCwGzeZDPjz61LXgVcm2nXJbzSabmsZyGTkgGAMqoSq9Np95mdTdyy9sF5n4tF",
  "key26": "45g7LDgrW1mgWik1qecMEjRvh9rVeVZ8Fx4xHwEg5QLDyLYmbAPxYKjVef7mVsrKP8DWXBcnvxNcwiX3GEzcBYfc",
  "key27": "vebySGesxX9bEWbonUWBLSWhDcoGkKRhs6SDouHurN5hmNwtyaf9z5m8LLe4tm3tCu8Pv6ne2x6xTUj5dV183ax",
  "key28": "2TAWQkm9A6rphoF2xGwPPwv5QgjEuQGCx1X95JQeSs8aVe4K4vzovEEuT7e14jasSq426wVuq739pxno5hW3TTr9",
  "key29": "6F2XDdAqjkpFmTid36Gsp8N1tZPJYGWizf8ThpPjrsfBywUaURvx2sYMT6zgQPssgXuhiyQdXHYtDcatfttVK6Z",
  "key30": "52LbsgBp9TZAzALMQWiXzHHukvM6YPswQ2CNDikV6w9tBLuy5yfGGaRBpBU2MmPh2CtnNZwAspJ8rHsRstgjcs2V",
  "key31": "mLsLWiDWSv57kkmPdE7LZ3PLhg5kGWdsCUFQV8TwqXLoAZ1VXGrU2QhjbHREC6kifg8vaCBLufeE22YueYjuqPt",
  "key32": "DTzwaWNrqz13yNaLTBhUeF2cNXb8PJR3Cpihx8Sg1BXxvshKPxdxisHi3DUiAMXfEGrdStoG3wnxAyUvStjjCPE",
  "key33": "4nLk7cGcoL5bPESqnbYThbHMYgr8VSubTUrfbbKf4apUjzoxCkznonEHk8EFLFBs6hUc48mz4XNhgShHD8MmUpqi"
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
