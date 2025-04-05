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
    "4KWuwy6QNDsSxoyZ8qzcNcRUKgDZPKPsMWxaNR1WT3kANXRd3SfYiCmEakGqKs945KPbxNMbRy2EYMDnMcCr3ELP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HhsEeBywYAvWCSdJqeUoXbQRd4ZbzhCbTbNaD9Q3MBmLvFpGuRGgeTBxkNEeRNP4E483YiqnMkf31URzkc9fyu3",
  "key1": "2qTUtxsWoHeCqt4fm1j7kfc47munuBCAHuDMYP3JRNU3Db2KUPBquEof1tW9UEpEYt9eaykUfrWHXW7zBMmya7tU",
  "key2": "3PoyW2PuiHKY2V5EmZVcE1ghKFULLdAKZ3Z1Rf4ts3MrqKDZD8o81SJYUBJ4x92Xe9hmnyxS1CacSUTxoWkkJnv7",
  "key3": "3riEKUuCRmcNzwXz5UmTPQccdB1eSckem1wQff2uMPgkeJt1tcp4uAFBzwmjsS2sAVaDAUpuNCZqxqaD6Fd8VFzB",
  "key4": "3vTYCT6Xbv6eGB142TQeqXE2Kqe82eLkjMaZuUnPu8SfY35vaF8dEUeQRKfoLfPRSHSC4pnUxYFLrjHuY172Bmgf",
  "key5": "KZMb1SWXzNpQw6i6GDJ23Km7RAdHQeAEVzB9K23d6Ltq758eQp9FM2DEHwPcVbr7YyAoVhqx2rGnqjetqFuG9zy",
  "key6": "2DGeJQ6L5PQptZRwWuhnUKeZa8gJzTcQr6QWFtGBtzKFWWVQasgyk1YXNGE9xRV8F4TJdJzf9k71eUVRKs73TuH3",
  "key7": "2TA2qCC2cM7rQZKP5iiXAmJGykNpRMBfcLjKKy3RYzs36PhZvpusoNbwRgdXZykMyUaHZ3fqwzyYhmryUEe9aXaP",
  "key8": "66VKtwKQiWY8MWRXsJpxRbMDEPjb4tMHJHPsNwKDUdB4FQQGK9CH6TmrT6KKdxUUj72Uge8iVMRXsv3Hzpj9d2CM",
  "key9": "fLnNCkvjScmrTq8MBNg9XV5b9Gr7UsSDYVuotv6JUAzv7biN7KnkafeWDqX9Y1f4iuCbxqc8xVJWHMeBBJ1ojk3",
  "key10": "2JGy8dYik9movZHPPDNsEm8fqqF6xhtZpgJDf6jT6fmnZA57FkqzBZVbCf557egTMMFXv2jGCQeShph4xNVYLwcK",
  "key11": "3ApQhBPihyiHHT6gLEp1wD2fUQCdL3Eu2H6j7VU1SRH1oSEL7uCqZ2JU6uvNKG6dKBDFibJxD6wk2x8QewHnz3Kf",
  "key12": "46ffdCeoByu3cj7d9E7dZA4yYx3tbqRuGfPTvd7gGJYxTfym58XyyiV4cDWMgnzZfuu7FCqJ6rggdRtXGNm3hcFV",
  "key13": "2wY4nZKwDVp4Fa8BayGAUdBxeFDF4ztJ1CLCCiTVDa7Svp6cLhN6AQbVuBFs2L8hysaKGRnbZ9HTsorTiNSKian3",
  "key14": "2iy6Vgf2PS8kHQFY8G5hMLwjyoqHByUW4614VTSq73eEyK9iMvogP3JwRbXggTSFhoThLhWQoJwkdgGjHKpeU4wX",
  "key15": "2qGFNoAYwdjGXVr7bpnXf1x8odJu2G1u6gr9Pun61p5tePSyM9pouiYDTLqgQCuuduEHDZmovcgMWeZF5tk3c31b",
  "key16": "2LKFRhQ8Jky3HAuJC5BrCcjW5qrCkDr9xRYRNBRwXPTwKdaALREdgMXWjW1aVpEfBo3Lmsr95tGxp25DRDf8qE9",
  "key17": "3hNa9zGZ4soLHwN11kKqAVjnExjcWR2JgnBz9YZyogm7xBmuZWZjgqL2K8v77XdwtAxKPNT1RXJVYQZ8guwR3xSv",
  "key18": "5JQwTxJnXaHPjBrfnbDKQkYpf3DEKxyLXNzBs34S8H3Cit8Ryb78Ngaxj57DPf5UiDfDX8tpGzf93co7ZKMbwpHb",
  "key19": "GAKut7UCQEEu5VkWpPDWigDB6VJ9iq6vz27ovJW1UQVqhg7HxFzg2kSeJ1SnRRjgW2Z1QAwA1SxrrsQJ7KQsPwH",
  "key20": "VGabxJYncCoSVNwYJUfJJUHUkcQswVBa8QqmKRweTsWiNt1Km354Frj7xPY8uwL3gtSVNKJhU92ypAFFAasXB2U",
  "key21": "iwSMs1xvfUQL4zb1YhzSyfJTJZGegHqnWus7LcAdp3Upj3tEQHVuwPGtFme8wEH13ddzWcFq5MtZzFCRuDqHdSJ",
  "key22": "61qSycr9ye47YjjqNfdgep1kpkbQcS7rt76PGtZrFgfXPwruTj5zjR7XU8cKFMx8JPnzgw2h4nrJcb4mV8UkVAjV",
  "key23": "2WAKe6G7a2GexVPy8QhsDVY9sNXUAF7VVyTRr37UkGBwzxh49oeUANA5qbmw7ThxhMyxF2XM7RAzH18j5psWDH39",
  "key24": "3ab4wHVGhMLH3zMrgAKW82SBd2yGoajLJeM99ogWWRo8o1MBCq3ivqxZsxsuhenSu6iQcY2pRFFy6ig5d6TyigJG"
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
