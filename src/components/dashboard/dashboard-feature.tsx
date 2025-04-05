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
    "3AdUiYPT1LTWHn8LpKd8ZHUXw8T1XtzbixgwJSL8FQctEM49QFHjcncoLS2JzZVBLC5c3BQWZRjK1F9fWhcqe37d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B3XqgDqDD1BzYHE3WjXegy1nr1X6okYfnmKW61eth9Fm8w2d6inAnfvTwaUrVYoJCcvMdViAZS1yGZ2VCgLy8Cp",
  "key1": "261c5SeLDTqr1rKQKBFpPVwTHAcs5XWUiXXCNBF9syn7DG7Zm2SfMCYAPvCbiGbbrMSpUbfu7q3PvXnWFGiAGWLs",
  "key2": "5rgt8UzbRn2gGePehfxwrPse51SNZZvcXsm9SbVbBhxsgoyQoRDdKXQBYhuqs5eBnLX2b9cLCrvT1y4fBh9Kfirt",
  "key3": "4KE814FNwJLRkTArje86TsZqpyvafrWncpG6LABz9D2W8S4xqz7naQwCoDyPG4YiabdAPaG7PzRc7AJWkTCUaZGF",
  "key4": "3LPYhgSs5NfKn6sVKaTVFQjE3R8dda6RDXKHwfkYnkGsfqni6JC6zReSrudUBU8aTfoFzgetLwq91tuvS2nTz4KM",
  "key5": "5tX8TnKCmyaCzaY4AZDZ6XYecEa9ZWQ8wXy6rv1fMUgFKWUGePnPVcRFESVwKySsNqhBL9PxuJ2zTGeXQuNXMGe4",
  "key6": "3XaQoutjrKPvuuQaC8m2JcvYpgg3dMWVd15PYqky6eBm5Sp5BxX8gGXo8mv8N3Pws2vL3T1dMX2jPEAk8BuD5XLs",
  "key7": "5SrqfntjGx2T1rzfjmZXzV4HoDM34vav3Dker95XMucynRHmaqxEkztsLac3joiBGEmSbRf5fa3gG7BJfAReDwYT",
  "key8": "4Rj9NHVF7cbFfERVSsmFS6qvsqwdS89gJvMxCt35imZ3kc1j9bT8zrdm1pwZ6JzxcLuRwkhqv9TAnTJEGN3dq5NW",
  "key9": "5BETWifHtcbNgNidPwAG7JiWjwCCepX5q6n2ngpCbvywuguskrX5viybbGttamb5rzDh5xHMjZhGe6b9HgMFb4rs",
  "key10": "d1VEpu5XYdPaq3ecgLa6urmWj9Cx5UEvAg5NNDXVZYb2sgBp3vH3fMuLSddvaV9ZFHmLhLqbQpDmJMAaUvVMkzC",
  "key11": "B4FcRfhmyszxmNe3ejBktsRUsNymZtey1JfpiXxWWFKT3zvXQRWmKR9jdzGBS8BK4QFZWwS1sQWDC6dzfGqGqK9",
  "key12": "53Ud8ms8XTxvbSHCAMtjo4aimA16Hf2n6J7ab1n7RNenxgYjk7vziAt6YfJkMjptRtkKapqHqrwdUdTowKmxQc3c",
  "key13": "2HbueWdeKJ6mqYG7qD3cHxd9eSiZncbyFVMWKLgEAP4AF7FEEMVySeEs1h8BvHbQAqZEMM2YTWuQE1Y97kGycfke",
  "key14": "Sqnv9U3rNucGfLpuhY6YZv3uUdH2eCN8LjDacmk3LF8tVzdNGF3db6xwe5ZKBFGkF3BsHTUVQafVJBtbewCVR9v",
  "key15": "SWzc4AhGayxEy9UCqaqDHatR83vjGmLBVy1GEvX5EpvfTBz8mrLVCKbDUQep36LV9JU7vshzRbmUYHfTrMXtgzA",
  "key16": "3dBP3kWfXRspWEoLxs1QiToW17f6B8b8VqLfELmiDhSbru9GhGM4tnz3jrwYvxAUws6ci5Z8GXMjQSPhYs2uH6iP",
  "key17": "Vhv4hCB96NJQ84gJkv5qwLtnmcTNKTPzf3LqY5sZZH4aRPbZZyRgfzmLYatfWCCgDMHRyHg2GBwfndqhLiqy69C",
  "key18": "4b8BWGpxzx8kgSP5D6Kbj1VnEKu5472h9p8BnB5f2jLX9itNuqjmY6NEFneHhWN7iU1M1Gm7B6PyjRvib4ALJyRm",
  "key19": "4eBpZAmt41cYB5BR6oQSSyZrMEAaAshHqNS9B5c6d3n6LhBGXgS1GtNoKffofpc4WVLYP5ReZZQDUnwVzxjNBQcv",
  "key20": "2wW6gnzkjgEtjS7X1rRMEiW2Jzzs96L838wfQktcj4AbpuszUTu6FgUHqwZ69ydNRLnjkfQpX7ExXGG2x5yBxoaZ",
  "key21": "4r46dhDXxjAwkEuTLJt5ypaUsKk2TReZbYqeb2va23SHLRypo7o8991C4E5xX65HJ5r8F7bGt3413wgkjYhwWnxT",
  "key22": "5D2yndJMnY3aXPdUi9GFiKNHk6A8ZNv8PazGPuF7199jSG68xAHZzC7aUceCsCCNxkdebbM1aZEH8GZVs8o9TsFT",
  "key23": "Yb3ff2mPVok8bRumtNX2RDsaVoFtTZeAvhe7Anyf5mSCtjwkZiGET13FNQ1Ve7S4MFCAmjbJYSqdsS2aZ34tjpm",
  "key24": "4RyhbS4DyjFRQRxnnjvUyQ85eBCiCVYh9aenBCntggkGnDz5qVNFbauAMgN4MY1oUeAzgD4Gos78y8a6ZH1f9Tpt",
  "key25": "3br1bEgk3tBaWfYZixX3At5vPqijPiVNNZu68EW1PVSWNogaip44Ua9siHYy8uHpYc9EuQKLD2CGeGwisPq94u23",
  "key26": "5CR7adgfHPS6cXoYVLVdUVFDcMqYgZp537dxBkyM8A2byyDjNsKiEQZgDu326GStWkHhNCuCHa7wUkqu3Ub8HaZd",
  "key27": "DDfDAyN88KAJqe2RBoy71V4jKzWxEPwhdiVsX9SvfgUfqLu13CuZZZaC69xTbr33kdDTg7TgH1gHYd4YgzNHRNH",
  "key28": "2mb4nDCtoQZsz9iTxWsRpyZ4bsNkpbuo7pPNEMMY7SjPiwvYQ3iStUQNMTwciC6ewDLnoTLT3o1Aq3k9bJJyN5WN",
  "key29": "4Ypmp8MuvGcZxGL3tpZ7Hi8C4iLjV2wrhFvP8YGHjEusgD4EhKeG7WG3KxJKYQkb8vG4syUJmpG5fgAvAc5QdsLr",
  "key30": "2WWSa6Z8MPBXTiTyEQVjv8Gay9AT315kmvY56MnTNyC6dznv7ZxUnDUg9Bs4batCa5vDa1LUG4jPJxX2qeeagLsj",
  "key31": "5pshkn9w6ZcDMXvFLxdWDjGbG4eCam2PoQFgexeVvQqTgWTcsL2XA1CnBTYCM3DUcagX2iipK8RVUCj1BA7t6WPH",
  "key32": "4EsezTw8dP15octewprMvJteGsgZVFWPvAZVRnu49cxi978S9tGkbwoCJAot1WmWaHoBbEzoWfEMU11PTq2RrBRm",
  "key33": "WYw5zPDSHAVeythQYC6v8r4zfCgyUoyBdAYESWeydBo5454Vs92JAUPCHRJnrivJxi1TmxnUGCC3L5ze82h9r1j"
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
