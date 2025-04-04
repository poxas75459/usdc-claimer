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
    "5RqLKyLjuA3VLVfqCtrCsnAvfTgWjWQY6ng2x9TVfTbGN65G3QsbFWxGNQxJsDmm9oiDkVc7Hsx2bX3mnqCVJfj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F9k3TVNijtXVrWartpwt1Ua1oSfxjYEXuhLy9U8juyeZgzrxUqMjEpUG4DwgfyPrc6StrE934hs4xK7uE2Fc7Wm",
  "key1": "3HuXPoPQc5pvTeGoziZEPbp8EYAe6mNSuywWon3uXffSotVr4k42XzsPAuc9xpg633PSKDbrQS2um6kvZNug7ztb",
  "key2": "scWmU2cAZ24NjR9Bcdv4kbRZ3Ao2VAVdXxwuSkzReKxZRPBmMukqpiZShupUA1TyMiGZs5uTz8WLkAP8NEGtPS1",
  "key3": "3M8ZNWKxb63kcGnXzFtvWC8cpbWs6ZUsPNZMifRayyqruLMuT6mA8bQNxay7NMHJgpsv4REcEAfd5NnuMcmfUohz",
  "key4": "5AikCywHcicBVz1WdQBNqjbBcjrcKCTWwY7s26YY8HbKePFCj1FJ3wQfWYQYfK92FyJxHt3h8v2rS2UAjCekTUL1",
  "key5": "3baWkzuzqTgzZt8CNjUuLvR2wFdU3PKsmqDYonf8EESoQFBmn7SvZ1C3g2GtEYvZxYtXfzXzjmV3GJiaCZMzuFwr",
  "key6": "43ZTPxcG48KY592XthnrhxaSFvfrQSEBb8ApqbjTYf4ucYauosWoaNvhtbZ4fYdYD1BWhpfHxp87nkGdZtByfmVz",
  "key7": "65bNRiGbRED7Vtq4PPaBn3jsJa1XLPVspn97RXqma6cL8j4JvhZY9Hf9VZf6KmT2U1RksMT2qVVtz1PLA3z54gSp",
  "key8": "3XLMRbMwPRNBq5dbMpgzGsFMDh371evQxvhbSfeMjcna8rWgg6nNVaab5AMpFnU5G6Ko9QDKTdng7KR9nLu625uX",
  "key9": "5Amk1uXaHbkxMF2AinYTpz9Z9x5aCgmVHm6936acNxRjWocGbmYuVNGi76hEDiPADup8pmTMsuC4zCeaW36bwrbc",
  "key10": "5jQ9h5qWw6YW7HVSHWMkD8Lzzox14E6QJZnyQgGSvSULFh5afi58gawXQMPHqA4AAcLGb41YL4zfGdkEYnLdA2YX",
  "key11": "5seztcFJoWyqfzThT9MT25KCNzmGmb1yKz3whg9YqnA7AmexkV1TbrUdJUC8DhCbFfJd3iF4JZsLJreBvgRm5cDj",
  "key12": "33cmnx1cGsYNy4CEQyJXf623tiUqGp6Fs4BgpVnNJhXQaCNC6RC7mqhhSeZxXxoLaUkqCyuATrW8prt83htxGEbv",
  "key13": "28eSR1976qDb86REnPCHbofpkSgug2SbZipkYs4k6MnA5HcptQ3yo9eiMoCXhPrRmkFtoaBpCi6N2SxMvLcwgiZo",
  "key14": "4vooFYM2Nv4ZSRsMQXnZevepcrpeTCkTCm8UMRNkur8uhD6MQ8KhG2K46ZrpvzrGsciCvsUQnhW1fqqcs3ZgjUgJ",
  "key15": "4tmYWpUMKXFWf5xA27rytvSjhzG3KXzXWv3mzFoJSdXY1eLuM3cWLPxMWXyjmEX852PrMStB5QDBQFpJ1LGjgFHf",
  "key16": "5hsxa6HR3eqgdBUk4pkyPxtt2ShjXmdabDQC2VeaPfjb2YxFt7SLvuewkxfDGz5zE47s8W7Mjv7C5zYKV8posp2x",
  "key17": "3bAgjEuBDwewHLqrjTUYWN3JTDNfBrtQV8aYe7yjMTp63eFwHZMuFguyGQYyF2Mzxn2ccRMh9GGiJLeBRxesNKkJ",
  "key18": "2yciwYynaX9uBMXqFNRtkvFjkDDRdsvYvFfBUaNtfNcKXF7AvDzkvN1eKiHwS5w4HVjPLhYVM6aHgUocYrWVpGm3",
  "key19": "3yigaeP2PZ2JAa9DFrXrEwL2WH1AfLZfbLbh61DyeEbuJ4H9K8Q77teK4aWAKYWb4FGhYkCZEWuMYAysGKe9Z49",
  "key20": "4SvEVPRbyt2K4frmeg8TjAPTNnfGjo397z7KkNyup2uBnXFnvSELNXPXk2837hYrQTVKRX7AD1Rp2way3fYMqBHu",
  "key21": "5uv1L4xr17zK9jaE1y4Cog4KrLm79CDxRnJypbrG1rugRLFJ27ypRHUgNgTUSh2J3iKkbjwcDat37wCh6xHGNVvx",
  "key22": "4a4ZwtZF2Zdm7u6natQ5fveWFLkU4vn1NvTra2i1kzdFx5AFEjS8HmP6hsu37o8jMya8f9PRJ3gTnFHE5cD6CJDs",
  "key23": "5ECb6U9UejxNDfXsGMvF6bmXWCFrhgiTtfVF4wHn4TFGpSgXMEVMwFXNanMjrQi544B2X7vE6uphLAWdwZBPbnBE",
  "key24": "5icJfNSXjDeqqmtC7aDYSy66v9rBEUGwittNS2tnzUQ1uaMbzw3XVFepuw6noWXQBxFjFqhN5SPr8FgWwnzBGdhC",
  "key25": "3wDydGsq2S1JpkMou2cStSdwgGoYGtiCzoXbHCxrmhgzMyqissnxU7D6MPtgzUgTsPETgtmGFyFSJqg1fL3qZmJv",
  "key26": "3hd3rwwpDDUuxiFtHSN1bAhenYnts8smZdGNm8zck9RRUb1GTKDmhRQyuCgqPBTPu6FPzhPKY3bNvirh4ZRirsw3",
  "key27": "5MRHg9N8FfdufNYGzPKePxg6qtxz7iEcQgdstzDCFQTVhwP7Cm4mwkP4F6Xa1Ykqk8iDdoJzFYfJyhrCATg1DpAG",
  "key28": "fiGo2AHZrKXbkANDpn5YDvkXod7tgy295oiDfHemv6CbGrqztXqaPSE9hMfDweG1kMxrAuVva7uKUJMiv7VoFnj",
  "key29": "421ixkxbuhmrJzMGMfyLAueBspy2xN7rdRCyvSEXEcQMLN9zB8twznSBHexgps1VpetvyincYjMp7njKaKN2C5FN",
  "key30": "3zPkXSiF8Y7ciWso67eqNZuTam9eLfw3poqvnkgizhYJ3rBc5TcdPoUKvY49iEAwNbqTGNaR8uZEus8hek3VLFzJ",
  "key31": "sGAGYss5tLMnnZeRAYgLU3APzaLdUjyLpyQhw5amRwZuGB7iJrtiAocXp7VkYhEHFf96DcjGtnmhvHdFmKNBjo3"
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
