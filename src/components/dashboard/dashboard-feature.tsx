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
    "3PmDDBrM77Mz1pbrKeE5qcvxozuAhMF4Cicyk9DbH62tv3ffLNXkgnkMKLADgmGfjMNzYJScXuobqg3nExpDKPUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zRhzK9U66MNK6mFam2PDehx1uXHCEstykYC8g2ZTseXYUyVdoCzRQHmKBG5FSTpCPqYEBjUS6yb15yFoXq98zWw",
  "key1": "wPdRqxAtayVnpgB8zRoCUHB2jPg8mtSAffzvXuGgqvj7kbpB3WdV55umgWRimo6fXKF7GwLw2PdheVeCK4psJkV",
  "key2": "V3xbBf8bhZo2TXw9bCM8zb9w4frqArf6Q3NuiPUzvX3aL6zwhtAvaGr8PiJKzVSQDX9huQfSkssfsrXEfEbMrDH",
  "key3": "oismhbh4WcfvvusCXzzo6j2i9pSCW1Z6kqcUG6dHCWzfiEthCNPGyz4Ba4Z2Q9KpC8VR5BgwBmxpvKcPAxNUhXf",
  "key4": "525DB2G41mXWZd5pK4uqE5wUg9iQ9sYSucDSKdQZ93STmwpnEWCBa5Xb469iCaAj2HuGMacTi42ncP8BrpR7RDo2",
  "key5": "2fxwdKmaWm1GNJYbjV5ZzXtmS8SQSEmqTPV2oJtTUDDU97iHnbQNjjWahP4sEkpMYwynWGZRBzdkTrtKhnLKknXm",
  "key6": "4oKgC3hgqvTE2wHwSnLYBtGukYzbjKtPVmXirfcNXWGKM2j44PnYXnztisSSgdifhwshD7jBkZnqiHogy4fiKhgC",
  "key7": "5Yx54dUdXctDHRvTLhzSawGkdjRkWMj9F3468DbmCJEQYzxGRqgDGy3Pen45dZwwGv3aJc76q2vt2ezz1TFMMxQN",
  "key8": "3fpvgjRTHHWVX6YeGehgsgVrcaGTZ4f6Exq3BDXUfVabLJzb7NRsc3PS3i1mDHLbcCxzqDEPxsyzfoaD5apCwG5y",
  "key9": "53yRYh9ne4HNS5pxvSvLV24UUGucu4qdCVZNhqEPGDnrgskhHbwXxqhgsj1E5DthwrcZRmVNToXfSiuyC6B3hn4h",
  "key10": "3v6JucdHFfBveKpv7wbHhc6NP4iL38321UF1kZ5fFqa9M6pB7grEJ8Sech1QVaqg5k4HymgLT5xSG5M7AifyRDmR",
  "key11": "2jWTiQQUXQqbg7iFuZvLm68qPo4UH9Swj2uh1JSJN6DzfEV2t4wGcsrSHT3hmyg8nRvgM97XsdE439se4cJeG8G9",
  "key12": "2RJcQN6SurVggJGkHQyHPS2ywmX3Xa6BDKDf3oVGW2xzZfDkJ6sF4Fb3rdd5DsV8E853RyR8vJ418eURP2T4kXJH",
  "key13": "67QzKt13xZJGzWHV9y46Cwod4fGcPYU4eKgKuDmeKgXq44zv8XvB4FZPvxh7dPTkgyFTxSzzNvotfBfxrn4zysvK",
  "key14": "5gQGBxcrrmhPH5J84mDvZ1UaEkWaDgmAZvgfwhyYA2zS5SD767X4Wd9BMSNAUSDgF2afsevbqrGmg49dwCT33kJj",
  "key15": "2dLVhDoqn5w9C3tBndwuuHxTgSNUjNYSDnuet5x7ibE9P2JVh1EY6Ek9SioZWMECdVuNzTGJeb86MxKaw1WKAjxQ",
  "key16": "2FfSzSJDybmFFy3sL3wdTQiE5WopooCMktMLiyjn3hHBrvJHH7A9duUW521Gm2kzzULRANzLn615anxPWqWBNxLF",
  "key17": "2tbJ5K1K4aGX18fVYvwW6Ze6B2eX3uoY3vhixee3c8BWudrwcC4SEfjLEgnPBUFAPmfHjbjD4SKZeQZY5GNx1DgE",
  "key18": "4z7UeYSo9CkYMbGevGfBrCSrxuk99nkh7zNjc5zspHH1S1UJo9fJ3UKcHh6DVfnMxdNt2cRFttX5zN8TiAkKQ1Sk",
  "key19": "toMfppSK1ESAZhUqtX14obvhP62stAkim5YgvqJiGLaAmwqTHmAULdfWx4ERrx5zaxYyUPXiFexXBMSFgKKwVjV",
  "key20": "4w5qbKtCvGmzGmCS99yut3yXjQsDh39DV6HKgm4hUbriBurRSy9MG9KonS43Ucz26EejCG5dEGsbfCRrX42H49SY",
  "key21": "2pVDgFoMLyfWe9bgBwKv8C4xckSrTwSKrJurZjRfYcJFQZYVu8wBBMJn38KBvLjA2MebAXjyds2Visgf347eLNez",
  "key22": "2L8pRUTo72vnVcb3cEmtZKnjzBSdWjzyoYUMcv55Nm7w64irDdd4DhW2sp8krGjW6btgztmfdwVBUk7f11B3cYXA",
  "key23": "VAGYNSvXxEjZM2QdTcnjKGDR5FoTrndCup3bcuSnYdivhuLT7r8j3BErESgoWB3Q6VHBej18s66pZvivyybmHnc",
  "key24": "4LaBA8VdhdvjtVTrUw3mjexZw6gyWFNTtdo5UDqirib4ZtzQ8Ux4DHECzUHohAQMj1Pycvnd4rpfvP9D6y7w6eKF",
  "key25": "66bp2J3ytWdTqefWWyc5JxhxVSMSMWXAg7waMscGkg69joMqQVNJwP4hPPHiqpXMkAYcYTcLti96TVhCpfgJPnE9",
  "key26": "2hxcTWDj3S4fXXL48cVs3BBjknwGBhe49FbU6VoUxetRRLJ3Cybobkb3hnmEsRTywdZmZFD4NyiBW2UcXQ4r1T44",
  "key27": "5ki21tfRSmARmFrjju7FUDpyWym5PzC6UEtQcRqSipFSr7rXLQaxuWqQzQKDJTd7b5jHW3AWZt134cVk2qbDYj3J",
  "key28": "3fDDthsW9C9FJCkoESBAehpqYvuFwfpGoNnTUHrH76Cn248ZDwJ9zhbq5jLrbTYX12Qvr8JVZgNdL52b8rdPCbTw",
  "key29": "2KA329Bf26nwdjVbD5aeZ5PKR5Dz4hiZ1uBriL4n1cn4aNiPdeg3wmqmNHBkmPtvXRf6HETE51UFuVXvUBdNoGjo",
  "key30": "63msA3caSdUzMGgbcuj1E225aAkwbNwKaDWerXy5J8SzrhKVCrv4pG8byorMvsGcKwiD5WbbErX1agKnXvAqaeAK",
  "key31": "2fbw2RX7adbSAA92YhtWQuUo93cDZZFAYjHZUcAEJ3V1LPLyghdf4gDS8mrGqStXiNc6DyiQ99TNAYek4u8t5AV2",
  "key32": "2fzXAzcA7MWHfYWXSJVLwjV6QwHKdCGwpEaP8JwTs4HC76txoHxWqnxikjsJXwHsncMCZD4DBY4825cSQjCcnzxC",
  "key33": "2VreSi7XdoKLxH7J116qrmkjrW7zmpKF7NCU7TEWxxwXMinv22rTitaLcjhHFTDDFK5TnkDcXhPP7ftP5fzBtS6W",
  "key34": "56mBK1GynaGRx47t9HJHqKhSp1AkVcGzAijegcY4XEVTLermk4iUUnnGh71XD7yyXpxsj3vEVgoQhr5pxicoFWoQ"
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
