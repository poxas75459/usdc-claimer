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
    "5YiW8jMRQPd1eU1nGbcvnhV6HFayaqPLvEyDHggoG7t2AYqos8PqbhcmFUJYYwquDUP8ko9KgcWj4AAAQN8kCxiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yFvnxY4TKJqTMBJPirHd9hZS6gMv4PBNmMZBLDMADjxEmeVsGXSYWq1sfxKY5cUyVyfx59M81d6LHoyv6WCc12M",
  "key1": "yTspUS6Wbgpaf4pi7hv9TExjjbYrsYmK6vpiV1LC4N3Pcn4SABd4PD6rpQusuxMe1NVXQFJWpHRriFUabxc8zbt",
  "key2": "3e29KwdSmqYBKiQnJwFESVBLCam8tafFxjnsMCMKAfZ1uipyzEo6Kv8suAD43WDDsgewBhhmCHyXXC7vZEcUEKjR",
  "key3": "3RvRrRWr67N4NwaZm5SFx7tijkfAczrcqvB5B7MMKQwBaB3nvHE4gNqXBqYDVHj4b2aWBSoSaWJFoHKzNUWMLpNr",
  "key4": "4zdyiBKd51WosQmbKdi6taFPqszeGdd7Jz4siBEUf6XaWJw24sT4mkuBxftg3TvkWE5xvh5u2uV7q9YPLrqeG193",
  "key5": "4SFLv7WrudLQ3NgFwwpekiqDEPmNUALXnL4BWu4ZMiYDhipPkaqeZ3exKBG999M2DVP6vSkejYDUTdNA3uQbC4hc",
  "key6": "2A3XiwQYboi37H1jpdKXErL148tSxJEzjpYgEvyw7QXxivqK5aFWi3harRrQWcsY6CtBnG1oghjVGXVr2gQLWPFh",
  "key7": "3sCE3c4egBFS8D7fSRmb8baELVfXabnERdwJJGPWyiwgVbmB3dX2q35X9cn9WZTQqtuTmny5mTZ8A1ok6zpbjD4Z",
  "key8": "4Ms6EQzgVQmw3EbSsHcRi4aD2sbeRi4SAhNanUpgEJRYAxzptXN78A2V4TseFiKau5cp4tzshqSygFsyKFWadcbu",
  "key9": "jy7M7c3WnJGNVeVoQ9wd3iuz2UQVsq5Kqa9AJwF58WNjLVS5AtYDFrXUjrywrzKXLeybDSjb8UzDmScFHPo23Pj",
  "key10": "3N35NvQpuiP3XDjYhcwmNsvx7RrWCRBJkPLzE3y1TkCkTiF1cvsHraF8eEADPynSoXbK4uq1YS25o3RmKk3LFuKN",
  "key11": "54xpU61VAuNb3AHHQp6MGg1TTsXWRyqfzz89SBykhb9GzmMH83Zez9Rp3hgk8rfXjLs1zkKQ7cPanQhvXpXUQVrP",
  "key12": "5j8zaPhgfbeeqJNtUmw4SqawNg414tZ29F8aZTFQYBNEm85AwMxph2w2Z3cFG9VEFNMnrvgZxMZa63XooVux3433",
  "key13": "5ZbsQbtvBeKspyGBmd9YxB2Hs1VFo9dXW82opSYpVBWUkHx9counHULqckG2x3R2eoeCgiZHu3iy5gkbR2t5343o",
  "key14": "3RMUAB64GyvvXaXfrepPAS1NzwKvs72gi2bu8erBmiEexi8cyoGJpd3452ynE2D3D5w4SgF98DaFaGzUUw52LSeQ",
  "key15": "3cjdK6E5Df1eQe2UmnPKhhmuyEWqS9cbdA39y8aboEtAhfELSTngsM3JNp6zv9aE24BmoaARfFW9owgAguo18ZTh",
  "key16": "KoD2nCXHYmichdPoSKfyArPXxxtGeNWMqyhJmfES5BJ6CGgcGTLs7pf4gGNE4X6EHqEwYvis5AYPubgmGjJCfki",
  "key17": "54ysWhrNo7bYE1n5m2nb4vfvztUXGB5A3rJApKWmqqYDHy4HA8J3vYNjfbGtaTNwhzhQHC6cZyyM3TSEj8p9oVYM",
  "key18": "HNnD4KXUZVPvCRSXqhwnGyrw6z9nCTotPWy1xnp62XYhM1UhybpetJE4dizATNog414nujikwBQztVJQWiXCcEU",
  "key19": "4KDTXVA57UtRFBByBguA1sKGS7HmiFdoodhPryHv84bjVKgTWx9UbzPWHFGfvPVcP6mzAaXBFmu2k83dBQbpRJfP",
  "key20": "5wsRu4Xyr3z1hwHMcD1VuAtDgUNkAavXGRrFZUXbDTpsNJdMVicy7DVpMSVsy43zr6ix9jyENyE4Die8DEKTjE9J",
  "key21": "4G2VURgUsrp4NCK9Vwwn149x1Gi62kczNcHxckdDXBRT9EQCHAHdC7krDKSzSzuDMpzLNSuLyNn6aCc5DcQ3rYTE",
  "key22": "hGRjoaoTa2uGdxkeHHnDfxmG46LsJ6zzjsAnWgSem5a5RBvLrRCQrA6p3Y6zTDD5Q9fBXWLUBnsZwkhCHjXS1YP",
  "key23": "4qRQa7dM9usuKGd1u83nCgHEnqndU182pTzQPQYNAE2N6o1RDu3vyH7vSS4nFRmExU62PW5xzb5efFjfYuvUdYJV",
  "key24": "4UPjqoqmHREG7VngYnhouK5KQKf84P9p6kPTSpi4cZxKqGCesmSJrRHzF1MfyeFV8jJpugvBMBsjdbVUFFrYzKpo",
  "key25": "4Nd61Gpjn4Q6Z4AUsEsEnUFVEmnypzKcSPeqxwqjjDjMSYJaXRzmJwne9KEMZEUzSoVAsxwBzpLK2U86suBpG2zP",
  "key26": "3nst5bXngpTRPSoFJg9TQZvr6objSQ4erG5s1rAuQ77X3cCwrfDuFXJxkz9y3Yu1aiisXwog1pf3ZKVkur5mkRyt",
  "key27": "4NDtcYC2u1dWKxyyYJHZydezzwr6hviqBiqtP7D3TWEksq5sQFCtV2C3kh9EcYHrZS9Dq8WHqvoKDGM1PvEcFGd5",
  "key28": "3YDhAHCHCEomwGp67weM5HKugfeUn4LGRvCztgrz1FiNNz11qPG3XanhmFz6grpLdUa3U2YGx2njXufnz5t969ce",
  "key29": "63XgeuGKapCVFVP7wCWqg8kyDvjM7M9PfxdnBWKuBWPygGoUg27YzKocHSqPpu4YrGXCVpbFwjoy2Yy7UNFAD39u",
  "key30": "3WJVAH6sxHpggNvLEfMaYtb8bvDg94FHzNi6RERb67fNvD1qEswGny5h5d3yVNMS3gRdoxRoLnZZZTKKfMpRz15G"
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
