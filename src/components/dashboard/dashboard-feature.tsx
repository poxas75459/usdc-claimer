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
    "4aTB599mNk1URyJpu5TTejhvPuC3uQTFmZBQgHUD6FCmrgSAN8ywDgW7GjiVTgkuXAEFq7wvXZQMmrtkhWLMJ1uB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y1qaAcTsRBJmEq8wVdPkUwqSr66XePScUj9RwGJZuLL5GfL6duTtYi6Kcnxz2nPor5ajgoee8tT1SskKLMcFKJq",
  "key1": "5UyHnLcGBfTXuhx3JSBeEcGqKSD5VC58S3a9H7Qttu8Ced5ktix8wCHskv1rZuWBhrJRpVAgKZrA5gYo3huPjhkZ",
  "key2": "4XL1j9Lkdr4mteN3KMvw2Sk9q5LZkKBsfsUaxeouSTSVX77MurtMSQR7EzMXDuJKV5TtCLgmLcbG2X2scBVPtiqT",
  "key3": "oaN97FDd9EdNGReRnmN4oFsVQ39RBrfNiFuJ9JZrEK8dPo8zQtVGMEj1jYaNXxJsefu5kNh2hpcXE1X25F6JhRx",
  "key4": "bcN1hNoKPh7dm6vAm4EvvriaMcZfp7JBkRCggmWJL6zMGew6ENqmmWvWx1BQQSF3Um6Ks2eCFGtnAtgXZcEoHuY",
  "key5": "51chQjdNdFMFrbixV9jxYECrnT4oymEgbat1J1Vm1JSgCgjezzV1qicZjz1VfnYYA7Y4EbN7qY5NntKNT4uTBzem",
  "key6": "HRz6vv9MD8Dy2g8z2w3xZN53Ap4LYRAZ4U9Rz8Bx9tU33bMF2aDPVYTxjzWZ6bDaYMs4CQ5v63R9BQr48fpNRjc",
  "key7": "qyXnS1yUErkJArwJa2jd7tvnMPuV99mtCNmGg37e8Znpey82Q4UTY7kQFSAchvLcEeLZjeKPnD8oUKdmWPv5JKZ",
  "key8": "3UB1dtG7P6NCspo1ajLhs7QG5x7xewC1EgK7AHU8yDXxHVWE1SqvLUSv57BWJEt7wbkoY7KTRr4UHKwZBqNXpzkN",
  "key9": "5icSXp5PhX6rgBh7RiLKo8o9qj5VqGb2goq8B1ANnjc7yNNpqME1S8d6pzbBkzejpwGiJvh3bQcboEPA7WMq6tE6",
  "key10": "4WTs66kXjGGizVrSre5VsgCom5VYrA2Xf7itMb2G7efM4o7Yx3A4P6VBRtL8Ptmyofcj7EFsNaDDVsk51a81k8x8",
  "key11": "4oNVFpGPYKXfV24aMjZnPSf4pEV9Ggucj6WwV4QCK3vkJrwVut6UHL22RzzZE8vm48XNSGKwZfNU52mnKfWe5Ygo",
  "key12": "4ZAriVWNmvJKrSsowhwh63WSoxDwN9T37QdBPvN3dBQ84Z49B4jCuAyddkiFU35uP3EK4GdWDBv1stvbHEYMy11y",
  "key13": "28bKkYcszZx6Wi48xhTirBwNGbQz3zvWEkPrLm8CbPRsEHS84fFxLBqbrwExCv4uAghddVf4cC5JA18AdssHHVCK",
  "key14": "3vWWqdC7PfKq6YKKTuzcVjJGPhXL1MhQQHBh2vAXguvKN7YB1xcuAASMwDKDE8oKZ1FkgmkJd1MQrs8S87yEPSfw",
  "key15": "NTYSnRB9kmCthZ7a6JzxFbK18AoycQdEC6ptj7qjXj8riMt3R3xiFYHZUFF6DHWA4T5C4yErb41dutpjbYXS2SX",
  "key16": "65N8jz6USFHPCetnG6o1NjWVtkQ12G34XG2NPLizSBgAQbdUPa75AUJUqUMiSvxtabrYVByFEGZLCrEUJ7u8Q7NA",
  "key17": "59pni5cmLNUYmcynsXreUVCiFNbFoVubNVb3cMoPptr4ndZ6iFf4AH7pjkreMwW61CkJRdJUmytta9XxrH5Vrnh1",
  "key18": "5uq6HuXsctxidhu8KZdRLdVXQ5yF6JCi554YhXoHRJvZSghTiTKwKpjpjA677bcomuvmCVZdLFfu9A5FULpWnPP7",
  "key19": "2RWHqanAELgmLLBgvw9oCwQNx45L5pvUiCj3Yi1ouWZ8xXWgHgRDna24w6ViJUT7tVzssuQGou9xk1FNpBrrMNcH",
  "key20": "4YwmmWhiead5PHGY9Udo6iYWBoWFVzW1sYrXEdQWdMVofM8BETeotDApxyBqjDq6L5gPzuicb9rK63v8m5CpxzoU",
  "key21": "57BpHE4cshEbNwqF4XBjoX64xKShWkHZdx1ZD75n8oR8CQ9XqYDwCVAgYZVepP6CiLxmS48ZPvT4PEFTNyMbMb5P",
  "key22": "5x1fw4W1UCbJFCxwjyXG5Mf6WJfESy8jr9AZJ4KdLNPnkrGfpZDzyHnw9JejzFqnQaWqHtCqU7sQsHwRkNoSeqsk",
  "key23": "5EfQcqrDWTJuGYGHjoUV9S2PkvQKw6n5S1tiKYzdb1x4ahbxEc2YHoaBgGjZU7tTomZdoWmnS9ehkvGVr2pUPRPN",
  "key24": "5Dna6gEakygAonaAgtEnoCeDJDQDmBy3F7r2aRGLmpk4JykvSPpJK3mgPMi4o6foMyDnVbab7q3nF581V7aMb23",
  "key25": "4yGZDojt219qaCoSpH1MyiVJURcCtUu9UptvpWffdTyNfWqrbhqG9EtZCKwuHFnhJdTWnb5NhzHsheGeV2pnoEtf",
  "key26": "4oSgbQsx5eqoZrVXdfJGkBvguAihQ4jU8Y4fQYyMbnyX8vhvvj1ynGEKKwjdua7PSruEEPHY43WgkZEW6VLGzuen",
  "key27": "3EJE4HJkyRHLkxRh6cWUbpRCRG8cNxNhe9Qkbg3z7pCfKTtrpmd47TVgGtJSWUnFZYVKae4KJtrNWod8Bdd2Uc3y",
  "key28": "34idGbiRkUuApUHgsgUmTTQ4AmYSzBgv1tQ7uDQAtsYwPP3BrKswVQMp1HvqYqEJqB9yD72hTW9ihpz8sXGyU1L1",
  "key29": "4qRZDaxFWp6TxWeLFyw3Tq5odZphqZziFhnJSZfJxkeAQvA8UBgrJSfk6DPGfyjrqs3UtGXbyrAJ1ppeJZiL8PVh",
  "key30": "2dQwWSfwGtbYARYPmgKTB93AjpfYtDTFbaAsPw7gWdP5ehrdtHUgusMBSVSm2YCU23c9ixUtfpqWJCmcw3HKWoBS",
  "key31": "38Lz9kfjudUwMxZQ3MNwYwEkejcYqD8cLoa7kE3yLeFsyP6DbZD6dYthGi88CH2qkrDv5JV7zdQn6zWnkXaJWUZZ",
  "key32": "2Z8hfiHTeiWLtrrFta3b4yYsqgrvStkhTanDFpwM3V2oHsz2GwpK7VEh8XfoPnvj75zhqevuCbV4SsYy73mfztXL"
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
