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
    "2ye1H8Sx8CS7WPzMAk686gX54V7xB8TEYfjisKP74RKGoP9Ds8hs69C3cxotLpkv6GHXc9PkuSYiHdY6TPbhAAEQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rftgiy6KzKCy5JygjbD4fLtb6FzS6NegwvLbiWskT8REcps3VGi443GBQF6rA5qmKEjvU9Thcxt33sPF7WsZNGx",
  "key1": "2eKQ77qMSRixfGijr6TVU7EeUi3UBzxE3GFbfJ8geW7SjV5Htbw98yNXMCPre6eBkoUtsKvHE12qHinwkb4fYJeL",
  "key2": "4knHaDnV2KHcFG5aTfAcsbrZnzoZUMNfij13VFkuTUzbgviu5ubgKnxUjg1DX9E48dTJcM15NEn4vqDSELNrBXR6",
  "key3": "MeigXw5bCZcTrob5kuJLXJ8Mf1ag1iyWLVEeAutF2vtF8Kkzw2Ea8NZTDCEnQnUfNGnzXNJjCiA3Tzz8gFuSyfy",
  "key4": "5HuEz1Bu19EFTYkYWvyYNcZThvXhrzUFZJSHporMePh5PXt5WS4ydTR8zcs7bPV1azQoAUscUWQFijA6zLG429ka",
  "key5": "4nKaDoHU9XwwBF2B96uv3WoNW4EDPPeimYKRx6GVRDKnfnrzJiuYWDSn77X678RUWYSYjVxWLTPobRGQRku9P1YF",
  "key6": "2hwbDo9McfuQC9vFX4sreRMPXk4esHvroKy8WACDKCHfwdBked7YxP4fRTEbSX15R55MKogco56eyEghaLCbe6Co",
  "key7": "4wq1cgEdnVqjncSyuHuapBKTGJFdU7GKm2494NJbqA2MWCqyMvPzz8r6uoRTSkKQZ2JTzXfakhmsM3fsSkEyT9A3",
  "key8": "3Uz6iFGCn1EFUW7P9Zvk7yJDaqd2Q2FvgPq7eaQAt1eXd4Xx7yYEb3WDPbQ7NrorEfjgegSZhJiaaaLzRMkaX837",
  "key9": "2K2h1n9YMdhhsqKxRs8sAv6EkceLdDw4X27ufiW3iN9UR7BTsY67mvvEEL1Q3frF4gjaberm1GsAryUCRL1EbsDA",
  "key10": "xoEV4vvSisPKq3QrgLRHvWQ5kXogpFLhFZ96p4tFaU1Csp1a3AAXSTaFGbjStY4vZj46PsfgCWBYXDcy4A7pgFw",
  "key11": "4WJsmMP4eHw8HTQt1UyDU8x8gZqv1T2NJokra5zB1EwhSzP2NWpUDGBE6NAWG8RNdveixjWmkPq9AzMyKVfDWWfv",
  "key12": "3fxKwrthXzsboY3J4v2Ts3948u6LoL7c6i6n1gnqBYwkfWF3625bU1UK5eT2CUBo3jYGmUoQocE7N9A6Dh4F2Qww",
  "key13": "svNLhhH36grB8gwWLCmtK9ZMvZNAEpW5iSCkpszzDPnb16frAiRyAYSfEVXQ5aKyNF3MCCfJBNJazA7XhRHvRwG",
  "key14": "4yKaTcjiMVRQJMARzUzqfqnasKvhYu9LLwTCsYVkgBjVHzi37CbQ6h6Z6LrnTTG29FUmNzy1VscXVabah6cwsaBb",
  "key15": "3LzTXmbeSgsYizFwcaf3vv7HJnqkwzjBwWCWHWru2XsEg8tDwrTp3yEsCCLcB6fzKhB6J9dX4sFuL5uuM5ED6jcA",
  "key16": "RRq9s9kJRhfYHpif5T3qY4G5nuiHoMR4B1XTYh4xscJTJkr9pG9wYYMmupfgVHzqEo4ax1kNJMcq61Z2ozqEukV",
  "key17": "3mArHH4CEcNZzQEB1F8Gr1eGAzPg62ZDrYCSP3XWBRQhqGyZELcLiaEWKNof8yshsfW2DiQWPdcWRrF3zcpAWdG7",
  "key18": "4z2oP17xF77QUg6bbgAVzhhKshJ2UFur9d8saeXy9AvPZwBd2mCJTgzTFpzUUZzA5YTSohRj3wXTeeDWtDWdGJCy",
  "key19": "5Jt94s9PMutkop7VKQuLWHQcKYxEqsSqBTWvsFM276Un9nzSf3jWMZUvSNSVbeHxvyeknatrRwTAf77rp1iW814j",
  "key20": "4fVnFzaXVuZpjBuMBpQbom2RSvCTfoHC7gFsNxsuP44pgfs21jmFYChJL29wJX8iPSGsxCTadSzz8d8C1EdYNBKv",
  "key21": "5tQMGVUFUdnQ9xQ4aczdP5prdZKpLzeZSdZXMZFVjuvzUtRrDvoGJ7SHxcfpnDxdVY5fqntSjtXTCJo2hy7Xma6x",
  "key22": "5LDuyGnjrfeNkbSkU4tcH1pWTvAsuC5gceBKWiPu2eEgpMSFzV6KUpcTDfwzc1CvnpRTCchbJNEXM9B39c1wKZdS",
  "key23": "3rNKZujDeuhjfmGF8tbFqs2ii96nFs7A3HExKo7G6jkbNF33wBQhdsC16VTmmAT8Ept61A3TEbo8Q7CNscCKcDfc",
  "key24": "3S3fU9BYDFfB2meDyiTqexBL7Rpn2je4Crr57F4VfbNgk1xHgdzC7zVhFkvz3JZAkk9s41mLFGMTx5nXuXyvUNuA",
  "key25": "2XJTQE1cUFC3XM9vs1ALYRZVY4rkpiGbxR8XNhKjB48KTTqdJrbMTEemUEQmSWYGSuES2QEHR6GX6uGWn4bLgUBL"
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
