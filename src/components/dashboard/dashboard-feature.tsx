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
    "N3cSav5JUPRrvgwvJMCLYxMQiisd16Mg1pWZkcUdBUCYjrRbfAmxiduqBCNDtUNrxUdHeHxY244n7FfABukxTGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CUPBZpFSVy7GKKrsE3WDPQCwLmrF7sfpZo8K3nQT4KijqzbESWEK5QDukbFTGatjVEZmKHEGPrqCkmAZVLw2Bsx",
  "key1": "62Ynryve3KogCuLNuM9jdQVfbofm6u9967x4An7ohktXezDaQr6RfnCBFmZmaDN4dfSZp4UFiRNWbZthH3KqJ1Ge",
  "key2": "48A1RqqDbbJG1z54Q7E34tAhVN3enfuUxyap4WVLAferC4qV9X98zsok5oCgnZoDLofCe6N9oaA8aCUWSF1TQVFh",
  "key3": "19zv1fP6zNAnViCAfoEn8qeCs5LWiMAcJzafUcfrkb8yRU96CxiKUi5a81XQuekcG8EpR6Vnx2q8wZB5CpUWXvQ",
  "key4": "28V12oJZd16oW5TNFgmsMzJLGzyz6QWPawuBh4MUCErakMg7DURRved157qt5xZ9Q5GL9Zvu7CiNZDWEqSap5LxF",
  "key5": "3zeLb8G9GEKNZmsA3i9CyCF82pPBYnYSSD62rokdwbTX5QnUjeyLToGvmGwQjmMcocmzuozvgeUNe9PUMtyvvQZ4",
  "key6": "61iT7HbwE9Jhp9NHSyFRYxXy9GNg22zr6MBr6yxK9CiuP4KGw8Xuh2oeNcwMrzmjY1oANyNg3nrULN9ziaaByrcH",
  "key7": "4U5vJaNmTdBRQXvnhYnfW8V7DwKHCnAh44N7vqEBgsJMBt1hNAowQe14BD6qUkD1sTofVYQaAu2AHEXaAxvLtBaw",
  "key8": "3Tx2w6krtMj3uzrtkHoWHijfAtnzUiWNcuJJ9x8FPNQcuRiEJHY9qyoPf5TDBuiFcSvWjGE7hNbVeNdA7JCr1F1q",
  "key9": "LcVmCTHyjF8Lb7Wnysmj8L5FeeZo6AZ26oHUgBYCVwDPMQYa33ioDRULa6SxJEurAJdJLrm7WcY8jrQPVKXcyEv",
  "key10": "64cdtLrZfjoYqLLfWKA7HyaARDE2N7ipgkdA7neJ3DJDEK3WYD1kUeD2EcEFbXkF2NXHacuBThCTSxSTrPfQrzBk",
  "key11": "BmvY5azUXF53shSN3Y7y3jaPZ6B6UAeErP4psMNaxrE5u6drkCbcjv1znmkwCC7BXEUdRyFHSoQR87JYjiSqJoK",
  "key12": "2GUpN81K5uroyrBkR5S7bskCNpWxPhUBVHkfxZnPcQijVXBChhZsXvsohPSqHQqXLKFU7oi67iPG4RGtiZRPQxiw",
  "key13": "2f2S3w4RoHyitHGhHwSmXbiPPskM2Z9xd1YBYqD3CJifKJgTSqBgQxuNuSA7UmRQj7Smma3HKT9iM9JcJannGb1b",
  "key14": "3Ew9sDwQetcFAxbNeCT3P9b71BCqkpVHobuN9sqLd7zTfxSQVZ82bSSGxzSekF35Wch6ERBfNLz8HNkiBz9fsQwL",
  "key15": "531FbmTiHscXmvWYxpTbnJ4pQztVjVwVBk4vqJrSQFqgTFTMfe9P38NyEanoqbxvSNMCD7H4MtojAepdRYEvU8Rm",
  "key16": "ntz8NpWeCb8JVGEx57yvz45db1MJjYV2bEm1wYLs5PBz47buBbjNkRapV8cgsUtpFDjPyQgKKZ1GJC8shzfcEpp",
  "key17": "3kmvFfohepc6iYaLsuPt9n3vrnW1N3wYSuUMzCdJN1n3w65Zg8zBh6xnAbNJuYzps9uoDvZN6uQNLaAd3R6m5Q5c",
  "key18": "239pdwck4xd61TdUKrmLsPye2LZ1NBRe3vy3RencL6rUDHj5MLuQtzS1hckDmehf7nvrBNHSW8KWMuFb9S3twYjy",
  "key19": "5TbbjTFzSDctU6pBggy2jZ7iXtDuMo2TaxUWZjMJpzyaRsNQDy6D3zsNBx9rCY4L3Lh5NhgL5yHTu8HuT3muVSsK",
  "key20": "EGUpyBjiPWR5VUQjkUE4d9iC7chJ6ByqkMJKKmcHcve5TNswxvNVUDbpoy9bPFYQqMjyzHi4umgKnhfFg6brb9L",
  "key21": "4gmJcNhe6XoKQRnsbB2CTA2naHfPgnkiSynEyNGmfkd5WLdg2jaqe3rsiUjW2T9GercdrA5jEXxYJ5X8aE7ie3q4",
  "key22": "4HCXEaHwGPmjwMGvrqFTxgzH4FoACqcJoTFj5pMkvVFRgwgLR84Njkqnz1GrRKDp3BnFbaoraFJ3ct4fiHWAv64U",
  "key23": "2CqFBwTaujPM1tmd5A9e6LEGPj2qohbiTQSaNZ7Tq3NmD1x1Sj5vGe4D4v3jPdwKBLXfNtea81tuxMT3QQQTTKVS",
  "key24": "22kLakNYTosjhADpfjDMJwncaLaf7wWY5f4YZynDpLszGtt6Mhk3HpTe2SBypB2sbr5LZ3jTV772mCNATym3wZTc"
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
