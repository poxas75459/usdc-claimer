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
    "3H3HMxL3FHwoq7mGGzeHwpKGh78EiCP7uo8uukhRuB3dCa3GmKQio24Pqyo6eszzaSmmG8RBUUkgD8YLs69aRw42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u2oqBkRHyU3R1bQVoBCtcsrDUsxtaA5E6SteYAtbkZVsTg6sBnNt1bXJCGScjhkKwZEfZ7awqkhPj4KEK19nckG",
  "key1": "3NZZQM416DqPCBhvnE2Byh6yUakCg5sBh3h2j54bZFJS3rSxTN6dLskZCzvojxrrqhubVkSaHeu3sCu8VXBshehk",
  "key2": "66c4cBh8cE1zFnMU6iBgTU1QtxhQbjBLhpN4fJ3Cu7AxtdRec1wfHmeupqFfaG93GUr27rzzXbpDwZWxXKBLLBhB",
  "key3": "31NmCURGHmZfRZFYWaymfWbm2M5vuqSesBsAEq2TZNuYB9HifCMWXAXdVLRedAjvhgCkooCW2D2NWXqVwkZJGYLN",
  "key4": "48wtTSJK46veCHGZohDuF35RjCCiAhhf91VrPbXWeXrnr72FAifEtiQZ3Xp6F1Rsvd5QQ8WDTn6xsAZCbuUpfzmt",
  "key5": "4Ro9XYQDhuRY6hQbGq8ULzTDyJ72XGCd9HSyCeJU7y3fsrJ4bbSMVF1TXFmTvUej3cdD1mGqLoMQDrYEJQuHQmWR",
  "key6": "3dhAGPiDUktLLQcpumnzzfwWpyqEkdHeeM7y6V2z5vyCWZG6t3H4ke7B9Nk5cDGqEb8Vki8E4rBwL58EreEBATmz",
  "key7": "2yS4CDLkeD77nkq5yrDNpnAuz3J9MJ9k43CQbdXBX5Uga64e6xEmEqLg1SBp4YiMiptm5KUqnELC5ZcuaEgxXmNF",
  "key8": "4tbmYAGd6ES3NPTvWJ3CBKrq6sV5vqDM4iTbBFrwtgiDUSCAoTagEbzUkfdHW1Bs5hPx1x5reVRgJsHnHeTXNvgn",
  "key9": "2DCUE5dDnEWp4jqaDBWTuavCRFToScw3Hj4J9mNF5mYPD3dwMPN3ogVqJk18QUyaNNjA8Zy5UfHvG3RGhsVnGffg",
  "key10": "uMmUF9MFrukx6bQcozE787RBN5LBkSrqrbZMXYmDeKtbKW3YvGgvx8qdneRZnEuAsoLaRjaWtWisvEnt3S4nXuv",
  "key11": "5kaz8vh6DcWfkuc1NHvgBo14p63vC9M4RiMwmXcjaAmdLtiFw4dDvCoA1hFUsTnZwcNgh5mCzqEUgokXRSQ5fL7D",
  "key12": "MsFdfw463BbgYesRNjK3m4jYBHtPWecHLwhyEDfSTrTT8rGmLmV1ojQwNVxou4yavqcPTrDxnXE3qYKfkbMyGrh",
  "key13": "Ly4fJ8uC1Ut6FayFeJKetQmsfSU9MP3A2fcqmWKHoejcPf9bfG5SdcQyCXrQ83RYL56SRxNRyEz4m42TssAE2BC",
  "key14": "xju9AwXfamr55G7ujwGZowHxVx9ooWrwCeQKCacSJCwauTyoQtPYyJDtrVcNSR6LgBpjJHYbF8kK6wW2dg7ykww",
  "key15": "3jtJsp359j2Whrgr9dyeLZD6gd4LQ9D6shB3FDjEfBcFaGqgnjrxqsHFyJHXx6D9H3SWqHAUnDacNkdomd8zTApS",
  "key16": "3gtEU9ckQYx4efCtiE5RjTFeRHfiPX8H83gWvUTy92fXqs8jrUxVsNgJ54zoE65RCiTqoVzEYwUBVAAwLDSQ84ry",
  "key17": "PNPKwS2sjt2CHrvPeSDjmhFq3y1zHcvYStZT2MCgFM5P3WHL2KTYSBiTkGrDAdpuhqvxoEXZ13wAjLwboQZDEgT",
  "key18": "56QMJt2PMAiVzaiVihbgDyJqG1n1YZRovSCFqmhTjLGAa62ik7yC2hidKXoYPpsDs8monkjMsLSrxgp9MTqz7yAH",
  "key19": "3J8Jwbe4eHGhEanz7aSvgZg2CEDjzqhU5pifHZgFS4GyanPMZQ5RpAs9aPsTEvCD6cAwYuPwQu46VgKc9AbLp5bu",
  "key20": "571rwYLhZYi9RMXBc8XbaKdKRFjFqUccV74raF6YoDGfWhsMcMgRNWTTjkGXgtW7EZGcM5G4UnMpfKEYwtBEXr1v",
  "key21": "D5KPnetM9QWv535LvAqRHDtfomDc1SJ9NXJXrAqUmWZiHxocfQG623MUzz17YqokkTjNwp64KEVucBCT6Xju2H2",
  "key22": "5oFrMfnxFzpEwc5G13XtHTH4gAdU9WvnF9HEPuXS1pEL1vYLxXT2v1Za5ktGSTFVFFjUUzGXUrbMYb9WXQypFW3B",
  "key23": "2MrpgnKz5mf5jK9SK9VEZREW4soNQeLcEiTr74NVsitvWrKcyqgdMNTiUCuqps78BmwosvrQUuY7prtmGaKR413u",
  "key24": "65EtCWY26XZsmSFztZwrSbFZr4RSACjfW3GxTgupT5KiyxYt13PqK5SPxhgDmC9WMyLB8bFqxr74UPNjH4C7F3Y5",
  "key25": "NrK1Go2MUgNBpgpFNEXbxEL5P7kh8Zr5UNCELK9fCTvxVbSxtmyFamXcyqdZqXzJPXa9Quievv5ehji4ZV6F1AA",
  "key26": "3fHL4H8XJ9GETRDab4NtHq9cmPvmtdyWCQMgeagXhbQDU3uytYtCKHH7EgAgZHBWdu92vkSMcbcVzqooMqf1Nvxo",
  "key27": "4UzcFLVhKf7Pdn5bjY1HJHyrDzhK6QuDkR1kftvJCVTwwp6T3XCFvawAs77GMkT7TP6cDfxjjYQeyPSva2foNVEP",
  "key28": "3mkw1TnpfXqFMVXVNeuHn4FenkaA4tC5g2Tc6Wwqvf2WdCSE8GUbJQQG9N9BCEnQGhzCkT8NAqsR6QspQQcbUp9d",
  "key29": "wjYM9KsQsq63k2jFGmthfujd3RqiVRJTbhEBqgYsWdg4h6j1zuLvwnGH7vyb7DGCgeU7HHaJfZi9aBrU8iuTemW",
  "key30": "3M2P25eKbEimvVBHPXS9H24femGd5MTv2UzvnAFg3VGYWsk3VxLKrXgsHNyfy9nhNNUkqzBwbp6SkqBd1YaehznG",
  "key31": "4kN8g7ewFuZyVAUf2NbELqYcNotBo3ywakMYxrXSB4mwLswAaLc4fk25UNcyjo8S5eq5xAR9aBPx78CqgZxpAGyQ",
  "key32": "5NoEmHd28YaBoKmYvmhrnjn9Z55GWjknorGAzzbeYjJixGSERPfXtdYrw2TD88ujGCWmLzvAG7BRQjx4qoqnSjvq",
  "key33": "2zjAN9AxHcQpF8BUsCqwKoLj3DdbdiAZcXU3sFuYRdB2ghLh1a8m33g6rFDT8U4p8FvXBiTKHPijZwkVdYjrvLpb"
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
