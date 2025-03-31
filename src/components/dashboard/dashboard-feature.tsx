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
    "5oE5kiensUJcjvpCRouifhK2nFDVD1o2J6rZyX26eZPeuv3L6Vag2XQBtHRHhg1yYzX8g8WZ65BxAzJiT4xWQDc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iSgx16LCobCV773nNYfJa6McSE6ewfwL8gAbF6vcrMMHY1TshSKT62C1hHGns6aSKaSD7AJgsnZCCRv7ruPNaCQ",
  "key1": "3qzxoHs7YtmL5Y2ATWDGy816tURHvZFGBBC1tPYbSj8JKshK6Zx38yJtJWD5zs8ZZfBdUMYCHcuZUZN6kgDSGsYC",
  "key2": "46J5KqdRXKUPLbnmJ6E1pAPzHXrYdoTuLSwBscbGesZdNbCScAYVAKKaxBWvGiH6upPfo2ZCkh3avq6VxTtNsePH",
  "key3": "HVQkzGfh9ceofc8ELJXTQKGmitZi9e8TJW8eP8V8Qh8gPEX6BSgdxT4JWeaxi9azEcmF3Pv2TdryXpwhuPq3Hhp",
  "key4": "5NqF8Dq8pQJYJekbRhnuxe8PR5wcHVLM6eRzYHBB3Wmj3tcvNtWYNJteFVf4uYJTZMQ4H5xfsX8tGqqYUetyJpJT",
  "key5": "4mGfthiikPTgKRN5zNj2nagYqqpdF3tRTv77P4ViZPhdkJx49ZrP8p66m5PJqVfahyHSxQpfdWFRyVRL1yLTMbYy",
  "key6": "5fKWNqdEQUFJcFhNuxnkA8u58Gf4MyhnQ7PdKY6HM3ANWW95ACS1MuY9uKQwmtPGiJ2kX6nLKBFacrNUiJAjpWA6",
  "key7": "2ZdjKLFcLmaY4YSMWUMBBK8usaWere8PHJDrh3beWrqYnAs7aeJAD8uFjccDUAPyWHY9urcwPuS4woFGD6c819PJ",
  "key8": "5qvzY7ihRiEzLPbvafvVCjCn9jT7SU8Sv3skyrsQmW8nx8rjFjN1zp72fLCENH4Xn45TbWChon7R288BqVAwwu8J",
  "key9": "v4h9sGeNrtza8AvnNq54PvDkPN95eU7Dohs1vqM73BkBsZsTwjoG5Y6hmpi5BBV7BMhb77uoz7UsqFRaYZQFwiN",
  "key10": "yvoXD9u3T4EDF1YCnQ5yfX66MgyGEMpUhbmtN5XYWuDVxEH7qC4tX9uzt7vRBZPkoqhuN4Zu8wJazKfFGTTbzbd",
  "key11": "29pCXbc3Ex9m9eXs5ytnHsvdYJSi2NM4mT7qNEc3hiLFQgXPksuXuDznNo42wUhcqUeCRc3nnRfZ6jzMCSNDw5Um",
  "key12": "46ZQchXHZHjuXSB2fuysExxcQJjFgTD7wjiojNxbsTMh8U2kXAnzkm7YJWTBEdYNBzPqpr7YWYr3NTePTHaWuJQY",
  "key13": "5iwUFCZaEoSyZTF6h9a9ukcmWupgh43pMEJnfzHogA6gSCw5tYapnrXehdU3sCi9PzpetVMfoN7QofmNDqY2GxNg",
  "key14": "25dTarVtKcF9QXSdP1wZLuhqFnFZwqpjG48jWyCfUixTXkgKz2kLPh2rC3EXxzQjwNAUXkDi231mW8LbGJLfRqNP",
  "key15": "4xjdpg43YT4afmo6FWrn1FEVnw2zKfpKKC66Q9252LTEGZdRFfbvcNdgpHjADcBgZq4ecBcUZkxDuGRPRRD1Y6vP",
  "key16": "5diwzGbtH3RKQ36jNtzxQa6b8gwKBN5uuzgrRLRWWqhMZ9q6ifug2mfxna2BxavZPUzGrXGLqqVmS12MyKZcm4mA",
  "key17": "4ACKzX7bJay424WacPKVojmqAhtzwLksbfYg1iBnzHMBLtsxrB5UmLtf7oTZCgxKCNcF9AMQGSEj1fMDF6C1G1nM",
  "key18": "4B2z93iU9HTXQ1rusW8BCUbEMfG4PK2iZijyQfdmHw2oeXCPdRy4SwTeMF77DVwQP5MF4KejkgaDort9JNqbskiP",
  "key19": "56UNCrs7MnPSLdqGKmauZwD3UVSMFm5V3QoLwft9UT3HANt6HqtNBJ65dzS3d9uWSTU6hjdmdWgVGJWXWhrrtNru",
  "key20": "zxJhvcdVpcpm2pcFJC7nqVBhg2FBAog2vqMXCVFf1mdX9whmJ5MbopxLFn1Rh3w6n7rkdeKRrUsAfzwwzQsGtvW",
  "key21": "3E4Mufq9E5ifnbMdsFuCsjX2DThNcJc9qrdMfhpoH1g9Nfh2Y1T3zbUiu7uTmTu7fPL9n7eWSUckMdhBZ6utE75q",
  "key22": "47QjUUT6ba2DqWkXs9emokn4woMydfPR3Nwyg9DyyRoYPtrZAzKPKPwEnzkVUpduKDofg83rqXXVAfuW2N7i8Uo1",
  "key23": "NPavutap2WYLRE5iX3osCyUJDKsFJeE98ysL1Qh3af4q7SLXX8Q1zyPCNG5xe74LiS3xdKuuV6Mc3PDXpgKUegQ",
  "key24": "BJQCZqTwqACSH7RPKTkEMbQjs82e8NdEhLDunUgjmA6kpnWBJyHt8ZdHVjXtdHGqpyRLf4vRsBd21wcg21bKZKv"
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
