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
    "5527CKyt5GoTGPYuRstGgARbnfVW1XBSuqdaHJNG5gNBcYhadRqGREXXYrJ6N5kbUNqiCcBF7AGeNiUweRVZwbz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WhW3mjR9AYpT7Qprf1KgFAzYeMWpoReormZCvZMViudZmA18U2KNc64RfavSq5UNKoMZT2mza5b3iaw49P5tSHQ",
  "key1": "51Dpi6dgn2kvZzmphzrBrxAEvknGR9FKfPfk3dmtLsAidi1xM6iYvj4Lzoza644iBBzAujkz2Tmpdx4FqGDPNe4e",
  "key2": "61zoB8eFb3JaS25EseV5eZ4KLX1abDwCgLkDAb6vJH3R394medKDrXH36XPciUuHSq2oS4qmngoNNJKuHkbWmbEr",
  "key3": "3hNA1u6tCb1PPrjpfNmdjgfbNYV7dvLUuY5jfPbzduJhjEWXioSrtadjAKGLps42i9dGgm2NpBgMHn55yFqRpPmv",
  "key4": "43CqGm3tFSonB7xCXqY7R5KuXEhGG3s5YmP4stUm6GyStsV9YC9V6ST59MENh1WK1JhG6dUMHqYD6ctdD6qVNC6q",
  "key5": "2zWpFa6gSrYSLsm6ogRjcS9Reeu3rbJGTyJoWx6MqPaNkFm3c7oajYuGyT3FgXshj7WicbB3zDWujPRwvVCRZf6U",
  "key6": "2sT4EbDWsqxN9mhxdfZFmNV43SX9eHxnXZoQq4QTGm4rrzDM57k2DzWmur7EqEAL8a3hFM2Q9LiE4Lk5ioLJRYfc",
  "key7": "4fvz93qAe5pUeA4zFmcjFWRunHkN8H3KsyGxGxgS39b61ZfM9aesrKxikZ4FDktbi5ZswqAD6MXkJP43WAPKMMGk",
  "key8": "zxwE56Rac5ZMWPdFURK9QR3JhMRNYtW3Kkoa81pdCgNvTqRtKhfdGh5fmiEoyqojyk297QGdHoittZqNSJCW6ZA",
  "key9": "2uF3Aja39RNTtPMtxYwwJvFWhJ8tMJiMdNmbMVKohqut6yDtM5UgRu4V8V9f8jMU9SYnPyJy8sVin1aFhBKFydM5",
  "key10": "5fBNtxrqKC3D3UeRo6vSBdmvJHVEtVBvcPpjL456ogtRgH8xWhKRrWRDHpH2pnGSsx67P3yem1RjzNqkjw4gQUHR",
  "key11": "3JY728vkbr3JsHwxtSeJWfpdh4AifqbXy588aScxzkJrVdC9H453PoDNNmivPpHzE1x7z4Kaq1hAWiKY6FPkE7Qz",
  "key12": "2fC91YJmbynZkM6XB6nmpWhUoQYmDXAJ2GPNXHJpVpBeoLZC2jN58d1eSi3hBoZdLG3wdjnZq6h4SDdREgQBxaeM",
  "key13": "22PvTX11y2KzD85tvfAYu6T2KHdEuJ5YgQ4m2UMyg1hy7NX7zSxds8cQWxL1rEooobdaKnWyq6JNcF2LxJEPXfng",
  "key14": "2ZaaiaDAQ9ruxkzmaWaoUWi8n97j3s9QrMZLULgmLik1B2j66jAqAEgBw2isER2mQUKNZvmZSohSSLnJwvgUHkzH",
  "key15": "4MZj8zKFWzXVFXuZvj2SrDh6Bo6NY6vFwmA2HnBQHed332uKpZu4JYRxvwZsTiL5hoA3QiRGk4viBRSKovu35PHa",
  "key16": "3AHaSS71jBy4cSUxC8474hAYDZRySMZnvBSFHzPiveKtQvBGct6BcnSVsoP8vvzpJYtSBCS9uqdivcfTEiqNtH17",
  "key17": "4XgLN52F3jpF5x3JymmvCoLpekDJk7sukCY9XyPKLfGVSUp1ZumVdqDDTJPcNFBdfv8RkpAezUXSPxGChCSwMTmf",
  "key18": "zwHsDPEkFN1dX6vv5QnAHPCY31fv59RhQt1z9dxHt6y59GqbFJieUNYXXY6Se4b1FT3YCTAPW96u4dTEBkYfhD9",
  "key19": "3MdBbUPpXouBmywaa5nqCyUJirw3rKQ9B2Scoz1QJ4ttvJJBUV1CfNnsMNMyvvsEz3rhoDywhjhUzeqFUeB3NFd6",
  "key20": "4wxLx5dnbtipfU3LpTLTFQMkYig27c282ua27x4nT3ZNGa1ganTwVezeAgT6qha7DKrz2Z8TV2KXHjWho3f1Yeeo",
  "key21": "394bn4KWo4jMsGqJc3EUMF1P2LLXqVuSqSqioEuLuPdZFkg2GN3SgwnRuVBDSma6hiCQ7XAqbayQ6i3YMK1stXJY",
  "key22": "55TW1jkutbo3Qbm5w1sjD88aXjMJSpBDJ6vKydJnMJgD9uzDbNdeEZjSPQC2X1RRcQK1HGMMuTrfWaT9KYTYKhUd",
  "key23": "34Vq9nXNZvp4rJTf2yxemjX3mpzzB9w7Cb5cPPYwfhrsdvJujHAzjzVtktMCUNKcbKYxi1hhsRdkwQDZxMTz876i",
  "key24": "3nBMyu3hkrC1HorBtUjFdGeUTs5gHPiTUTmn3smvCoMFSTLPWMnd1kHpDrez4X4Xioq8ZyjsJCobSzFddV5MtrF7",
  "key25": "4Q6M1mnfpmVftzR2JeBaoW4eExC8AFiv5jnqezBV6FR3gLse2zZuPhQf1GkdisMXyBvCiNWcZH4meurK7VhojzfH",
  "key26": "3GBkevSVmE1b4ci7cQa8MdYfbdYGyBLo6y8VLBbduhtm4hSGmjxmRSkF1y6bUFZwBq3aGP5YRUwaQWcmtt4XTkJp",
  "key27": "4HsRSQ26TEuerFjBiSeRvd8jiEeSwQFWimDwqKrE393L9MxEsejSk2izuWWq6Tmk2Yoza62avBX8BTifM54yD24q",
  "key28": "L68GEWCuLoWByK9MoXENEQckeqR9PMrGZrE7od9VUDmgkTu4hVrAdt5WxKuBccmqFGvYmDJNHTLZypRJMgPP2xq",
  "key29": "22vTng6Rr8NGd79d1zD3Arh67WZTjxuTR87YDSPCycUR8revQVzrLL3iecTZtSpGoKT4LRCEhmMUBkM5vHw1fXwy",
  "key30": "4EjmvyS6Gm3BrtHM2haDDUaHabQ4PArescUUmEAN5v2tQ2T7EhLncQhDELcoDFJo7kczUP6ogZaR5kmfuXoZZZvJ",
  "key31": "4EzFaZCcoDqe5W15FYMoX9da2ddQDSe37RaUqcBmW5rmgnzbNWeUsfZL65rCkPjBYrZ1M7H3UH6CmqmqQA7R1uVw"
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
