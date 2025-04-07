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
    "5KdCbT9YzsrK7ZyP6M6QnUmUHNTA4DfgLorC3yw2PRP9NaHNpxF1VeenPACRW2U64Wd3vmkGe3RsQ3vQsjVCJKDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X4T5JvBack98HxzSczg1tHwvc8sJC4rcWkkPkGgneQZcKSbrpksmhfPyQDKo19X2CdPBSXSA6Jw9tBJCNKCwdhH",
  "key1": "b8zmiC4Gu1J3D86McSZqMAmkdC21XpGXzbSDiXoxfKtLKFWryXD3tngE5UxjiNk2Mb8KcJcA7QivGDqSvrbSu18",
  "key2": "3znpoKsKg1ZdX6DVTDoyL9FYvAwCkbHxRsyYxJ2ACZ5nMdaww81jymqqSgsjL1TnJFLGuAvr4CMJG7rdgKXRE35s",
  "key3": "3gV1deWFQP8mdGfha9t9gapYgNk4TK6caY8vH244xriEKpgRrVMpvqahR3NTySRCbnqvDsZqa7kBQ9wRudeNA5Js",
  "key4": "3PeTrc76goo6z7X1GPNsFB4XdfVrFRjSvxbebJeKfRQWp8NCUZbAbYq45eUSDKuEjVZHUSwCcv4dHnHQStGus2dK",
  "key5": "2bcVrs4uv9vDYRZUtcpdhfGqBWBPXskFe5FwmF8yu6Dm43c2CJXNFaDWsSjxE1wG2wfQvrhJJqduyuKeA1HLrJCh",
  "key6": "42TGVcEDyvswDF3JsqptAeiRFdvrnWA8vbCqz4djh64o1QLYtdSoJyFMbhqM89EwGTdrn5vTDr94bHANrpZRfYjZ",
  "key7": "5RSSSD9nDbHSXBCHHFdAcJxxDyw69AffPxmE2fG3XPFrXitsaZfMMPcGM2dvS4PQoSnRVjJcrq6KbyRHSNuTb7Ax",
  "key8": "5owBx6ZcXEZ7q24194BSqVKKBBKSqAUupVU5pE7Bajv9VnsLfUFCpsb6hTB788cpcKDyt6kTjXFwTioqT5WXCZDC",
  "key9": "3oH2iHnxB9xk57Rb5D7XdhhVd2X7tpTceLydYK6BmYapB9AxDDK1VtxYL5h4HQJFyz76ewskTLUvdzSCjF3xtqoe",
  "key10": "43cJjJ67nWbNN3Upm5zPsaHi8NRwu7tLhhZ6oLdK1J7WTaQaLrgAqknVWxqWPVVf4Qe4RQir9d7wAKNXqtEDxXw6",
  "key11": "LM8xFULqxnwmSwEQ5mduKwqK9e2SHWQcmCZfK2unheL1oAKn3ATGS4K8WA1TwWwSGGTD7tVUMrbWFEWLvF582tj",
  "key12": "3t819NgaBSv6bU6XxDsMz3JbnQ3xfoXriVseFa2Bqb8fEXysXj9cgUrTedSMcYyYtsUMMVoJ2CCnbBj8BacyuV7k",
  "key13": "5bQKf3LWaYBcRzawiZMfw12frkjB45o4TuoU1Te4GkbsVznegkY4jcVCXDCsma3zbBtJaqdJBAPNHHwX99Pj4iXo",
  "key14": "5cJo6mqyPeKbZfa4MrT3FEceQbsAxuVxVFA7gzBACJ2bW1Wo3QgPc1QpGumQ2XLyNJRRL7hCxUy83e6sq7v6VPun",
  "key15": "3JvJ8tNaEGGJhWMF9GVJpSXBVopBR85bYRXSih7Wz1RCuSTFjB5zXEtXMjf15ZXPFZuiY57bDmpQSZzbCfxpxFNs",
  "key16": "t3YnWfm9D3udWLqrgzQ2Xo6DmbNLJjfUHWukhGyx3m9ARpacybdSDVHFGRdXRSjvDD8CUcQwzJtzGRgPiXwPjLy",
  "key17": "4Mjj4ChxmDA7pjfnJzoqaW8KKqLRVGnEMvSzPhqnnUzGvrVi9JPeeebBMUvgragNXNVNSuStePJBh2nfnkiExHUP",
  "key18": "4mHGETZ53zLMTGfrdufrxtSsp4sfhcA4pNCTzfkYdgTbXanazUiY5wpxgDM4omjNJxEQhwa3arLXfmym6U7n9QX4",
  "key19": "2RPKDWycKndnUba1FwmjKxhfhPFC2hvbxJ1FufuqEZ4pBDTxremtit1FLgTspKF4tsbyxTTgBLFm3Pv4zh4MsCYD",
  "key20": "5dnXBEshbKbgEitdyNQAcw4VsfZAYbN5K6QA9NV8mqmaHUhduWuTZLX5iobGCpkvFzcy8LUVAEvHXE4uAoERfpjz",
  "key21": "5bdTMggAXPDqdvoWVDh4jULExHNKvGxGrZ58f8ruRTq7cLJ4JPy49fWNf8Xeu5gg8QKHHgjiJdWeYTjchaAFh9SW",
  "key22": "3LXGoPTscRJJ6jwfi3PVaiMgxvhoNtFTy7RszoUHjERUzmMyWztoZCY1YDKiVujfPLZNPvZx6MMN5TWf9YsapUYV",
  "key23": "2eGNL5BwKvURzKVmt3fvSDuTnoABD3LzAuFwEGkNrL8v4G7ahxCyuAhkFb6MtM8XoABTisjiBBsBQZo3LFVzmCwx",
  "key24": "3b7Wt4ULqEhoktwjK6nzvre3c66rWs5h8SKvxEeM9joJkLAEfqdY5GfGY6dYLxStTUxsP2oCzapdmYX9WjsM7mr3",
  "key25": "3faRyuQdV8hfCwEcZcgYdz65KUhUSNpy1EUWe6jcg9YoDDdj57uDm8VaU99kT2JJiPna6DbNYK86BM7eoTFfLo39",
  "key26": "47ScnfHgjuw4uVamhR3QNT8nA3TZBJXYmxHLUk8DXdHWVQYygznigoqc2G35XYonHqVauk6JmRCKrjepBBnJAFx9",
  "key27": "3zTmLQQ1hgDLC9ndjmvEcpEQASqhpsPREYRoqGDd8BwtTrMajukJ3G4Ap4eGR468GB6nUvcokNVdANrWWMtKHDnM",
  "key28": "2xXwv5TfCzgwNJhkUtMJfjd96jAyCTJ46EjsZro34xhRV62QB9H5YcfgvzDrwHUeRkPNJ258Jf7mnEqRJmM2kiPP",
  "key29": "4U94wwcUtqivVBLYeoWPsqZZGfcvyZRJ3gziY95vWrZh6sdggbn9zcArgdW6K3kW1HyB59S3CqKxr3fjb9doEBD7",
  "key30": "4Bt3kW5ohvXFuuwDK9R3NPGLr4qM8KgGgZzMfyp1oMDJW7pHQCVF7dUYCRhGNDz8rnrxu9rPDrfbqYSohsHbwUy5"
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
