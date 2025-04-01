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
    "nLkvPkydTYNuL6tdhdRGq9cXANTQZHqHdGBGVX2Se4oBEothkCVw8ZmczYX7PsFk1v6L3eqytY6hzWHev976FUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hb2Kxz75CCa3GNvaCcb656gq3jHKf99bXBx6pBV7n9yc6Us4szgcfj6nSpNELZ4pAy786DJSUNwUXsn5V6Kw9rq",
  "key1": "3yMxFJcC8BVg3Pujqs86UNJnDA966D8Xzaxg2finj4hRYhTL2vK1bMhcu2AcmuuRaWK5Y84YBwFTcBQWCepG7kz1",
  "key2": "2TWP1m65em5syQnyKgGxdLK1bNdMV9jY21dhmg991kwPUAu9iEskmEpc1pVGbRHCCC4chnJ5mHuHshK6CaxddnBs",
  "key3": "FdhZeAKrdtgFBVG5Gbd2iJzwyLkoNVoKP2SSdL2J1p9ygVmQdmBZmzphk9ZE6EkKdmd7pHsUHX16GeZbZ6DZedW",
  "key4": "3LpA59wiK8hqQzx8quGPYQQy52iskWaFutUEQ1fPq1tLCfhawo5AeEM7qeRAKoLugkcCPHNu5wRGDBQXVwYsuDTV",
  "key5": "KjnqqdJN5Mnuxw2yQsdX5FgbmKa7cgp5hLLVJec3Av4qczNenBQZNxMCGT9A9gLtLuVMEFTrp4gtPdof64QXYLq",
  "key6": "5cXB3RWoehHwokr1o3kn9SoW1NETVgLpxyezUgMcmVvreUY55s2K8Qy1RLqEMZhCPispBFS9eMRW6TYBPfG49Pew",
  "key7": "3AEcwgjAwmxudEY7ry2NxPbJD1iwrAksGPrfyzW8hy9TTBrd6Dq3kLqtbVTaukhA3EtXgHXHb86LsZVcyTSEQLtq",
  "key8": "5N4HnoQcQb2X4XGQ33PhBT8D9pUern7zCuEDurAw84pcPHuU5FEhhxbBuMXWJ2xnE2TAWGbBxNSJuZf43DYBVaaG",
  "key9": "353fpXunnBVes4Cr9gaj9BUBhV6pYKgRGUNZd7GKGaarffToMVARWooicpJxb3gvtHZmr9BnyDSymk1sjqmjMtTx",
  "key10": "2gVV6vjKLxx2FDdRGw9ergDj1Y9y6R1kGR1NLsqwXLYo5dgVeRDP8r9c1tztWHvN4oMBz4naJDTPgXZPSJR3v7Dd",
  "key11": "b3z4LYxQQWUZbZjxgL1wDsDSjaKWD1i8GxP8grmyz71aGF1RFC3R2wZPhw6XrWc5NhLQPSFmiKZ21J3orJa93MC",
  "key12": "w8ATjtSCdXtcXg7GnVd6QHUa5fBDyzrzkxMyP32kHBoHm9d8FmrwRwqzGaw8Z8XcFa53S32iUaR34KmB57Bk9uW",
  "key13": "34gfwHJGK4gizwnQSR29L8R6BG1cmbkCgjPLEek4QMPhFBccVra8Z2jXpo1tyjnEvZMojgsMrGNiYuLAwu98zno6",
  "key14": "4TsemnzEoSwCw65jfqY2SXRJz4aLNqKgqnxCxRa2SZxpAPV18FuoEXGGdHZe7yF2RpfpXJkbSTzxuWeMenn3ysk6",
  "key15": "992BdBc4cDvT6TPhUhtNh46wXKBQWjbVTDejsALUpwCB86hguZPMCePMJzSjDqKGv3nv4mpKt8feshhrnSudPzn",
  "key16": "2YvQseoCkCrTT8repw21p7qVHKSz8moAzL7mwQEijhaJBEnbo4ZwSQetbK2ePfvk3VAdD9t8x1DHhDtTyaS8Bo7K",
  "key17": "2JENhd3bghJ34b4GNmfAEBNmxbHPV79fGmZntZ95KYfeTdQgpB59DoypAfBhykY1rrETnMzFvBoZdyL3cL3FJSvB",
  "key18": "61miCXuYhCSugoPxQuEEvYD6tdLB8mvoUQFBCGNdEik8bBiY1uR4DV7krVUMPVhCCnjHaqkm5RjDauVjFn4xDEA9",
  "key19": "KtQQzKw3gzdycMw8GKn5NH2FxsCHnnGJNaAzUw5wpPCN7sb7pnysSCZVb3R2xbQm4m7pcDieKWkz9thQ8BBFLif",
  "key20": "4ehPEHSXweh3xFhWjrhBWYRtAgCGvHYRULy3b4DZ8GAUP246jUBwUHQMFRY898VwvMdVKTMTivDYi6UsoRsdBnES",
  "key21": "639FKQ3BBxzor36tLywhPWPq68LvFDUzMTt6MNrGCwEewUGhyaepUgviWMsr6NtiXyhgHYzyQa6vKFpvAqDkhnpZ",
  "key22": "6UM8HfXooBLTwznPtxnodZyj3uyHEYGrh6yvUAXEk2cTLB3qJ9YVst4doSVHWn4vCCqtad3X2whywwSAV44Zs7a",
  "key23": "2sv5Uuiz9veEp7JCM5CF3H5LVGXhQk2kR1oB2bo98Dryr4J8cRWTXFtaHby1HFYE22xMwXZzGcfk2Dmo3Aj7dvtm",
  "key24": "43BncBUsiVci7c5EZ1Yy7iJ4eR5ZBmy6vABcDLYY5GSrVNbUV3UMb2BUMFMRPJbztspkyGfnV99c4mFuCgMAuqpt",
  "key25": "2ZGvZnDygroJV8QHX6jkxdZRkRhrZtQMLA7styMFZy12HoZ6Hocg311m1XuVWgmCUhjeUiZWXQZyrtMKyXoZ2gmX",
  "key26": "Yz4frnyBXqciZg6WMygxMS9QmXgh1xMhMN5Q9eW3VEd8rvbJUu3HFsW5JuBr5xLd9PYzFsV2qVZHowevXDzuXnt",
  "key27": "5PCojcUiTTYKRQe5iwA7c99vfGUkgG5jHfahBSCxK15ft9Trs7QW84QZLjX5ZEQjgtX6ek2SqoTHCRUmGtNTogiw",
  "key28": "CwUfmqtETtNRKfXF56eF23QkiAXS12h1SK9UHqN63fxLvU2HoxUC4uDGpbZG2v2V7Kc8Dr1pxocYkrDhtWcyfNw",
  "key29": "5Er8XtA2pHVEch8PViBkMBuv1ikKnZvWgwrLCewwexUWwjebfe85ZkhV5dvUzvU8taQEB5uTQK2xsp3CGcsbZbqH",
  "key30": "4jq4sLgoe7oUwQped3PHxhqbK2mDH6zFjBLxDhyhqfiJMuaXjxJ2WHChwwSwaB6bFd5h779NGYK9jY8snN9rKTUf",
  "key31": "5bm7zq78zNcVHgFDtcmYLrpKN2adsrVL1avZhVaUq6N2TzntfStJX5K2TLQYUjt9JY8GdSGdpEvfkdEt3Aia9vk9",
  "key32": "VUz2eVTBFHsZvEXWRiEQs6HFUToHRyXZ4pYVTQ7vGkhNDxAWu6NcLdunXiBxtykDtdqSxNADnVYaYkPfwsJ1HQi",
  "key33": "34NYNzn9dYKKmUXFqcr3YJYyEGohzev6nykgaL2L773PqjezXKGuwqBsC1rqwYPA6WgkN4AWDqt7bGTEdZ1zU7rw",
  "key34": "2HiFisVVAuicFqAkF3DYCVceECfcMGZAPVfepNNTtTNQt1dww5tk3n2mNaq7oosRhcza1LPy4AmuxTMHhWMkj8ph",
  "key35": "4kQZJQ2WGyUkhBTSH2NZgHbw9UdoHDHactPrCNdQ4qfF1zzvg76h27KFEp2Aj7wTZaUGonJs5UEFtn7hiam8XP8y",
  "key36": "2nvu7eYVdc7R1c9uPEjmrvGEY5oYfTMNx13g4a6TwD5WMLjRiT4CjYYqj8C9inxbR8DTKSeNC7AR32KrKY8gGE8A",
  "key37": "5gSPmUou525sRoXaDrLovAPHWv38YkPhmqMddBFyUNAM393xT1fF9qET8qVMXCRKMnXG4m7AuVuoVQ1bgb9FxFHZ",
  "key38": "4CBpqid5EXzsUz5NVx2xR48CzrZjVK3Pi65w8UVto2KUXu26W7hQLTXcmgu3AWH25jWZn2V1CtpkABAipwgbp9Ph",
  "key39": "4a5Uyjwx3H1WzDJy18EsFVa3cAuqRndRpsMs1Vj9o5B7rhMv8zhbhqzxz7zBaJSqz3B5oYP3YC1TYkvmSZcLCwGo"
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
