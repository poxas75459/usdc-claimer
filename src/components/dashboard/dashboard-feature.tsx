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
    "47Y8om4vCe8nNuztUkRQx9hxE8QtHyBF145eLPW3CXxXdfoqWpQSqN4gqBLP9p39saWSvSd64sm4CZUgWDgNaVZi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rHABinr6LoW9vyAs3T59YNhAm3pqkkC1Mhmtim2d5xV1CuUX2rRWahnhuGzyfwyBE6aq8H2GhMATYFXJGDoQjp8",
  "key1": "3HACNzpjLxZ9cUSeF1f18sAk79xYwEuDZwvdy3b46W81g95U9Ke6Kxuj9ZJoap7wxh5WX51DPJSA7SSGksFe4MaR",
  "key2": "279zHggTS75B7LnCi4MY2FpctBg44DLWXnFWrdQWw1Hweo7QgRvk3Q7HCqTtscbkABfy4ni8wj54MEDDT5quinfW",
  "key3": "3sqfHZi47Z3rzv3ZKmfz9hpecSD8ifPWUGS68j9zUrMziGpuMrJGoFGBwWzgsjiYUbd5rvbC7B1T6sVwYNjSUhPt",
  "key4": "5SmnSaaZhej91dRtihZ4kXDvNLBVdcqTdXaCBLMitzQb3NrAzGQ9EjFGsp3TEk1zQQsLANcKGMVwV4jc6M1bHVsz",
  "key5": "5hmg3MKi7g6bTzuXtJFip14GoLSritk1XY73CZT79f11z2KG7LDFT4LSDsvgnw4GQyBvRccxcjjpqw56rS4zCUkp",
  "key6": "3Q7SJXtLVR2CbQk1p92tw2oka4TSJ3tDjxKqtB2tif6XoxuAFtVUrXnNioSTUxjGn5e3nME2ni1LmeDuuJ54AenB",
  "key7": "2EizK2WhPGUTjgcwA7jaZcBWpMubMnBxixxxnD5GuUvSqjzETRi64VviKmb9hsSx33uydrbWNFnTcjWRQjkxjwP9",
  "key8": "SEz4AZK1Btj3u1LediL8RZ3pv6YjZ1o6p9L9sQNRooXsMDM1q8oUV4X795MUpT6Wr8yJzzgZFd2J1S746K1g6bv",
  "key9": "2SxNqH61JZJSViyHffqMMYFNrxG7yCb2wkWFbTdoqPrJsMChgy5H5FB1oJqDown1JTLLKktjS1ftfQannpiNVVdK",
  "key10": "AmN3Back87LaQ1v51LM8ss929nwzmDeVwH71Ht3aMnbbwttNeH11d64mgqa8S6XKbF8s58U3AtYWfRbJG1iPjRw",
  "key11": "2HJmpcUPk2ABJP6awjrFkqrRCmwsyMDhpXfxGJ41CJMH565vY2p29TYGZRFWJQJm7fLBugfFmKJbuKEHia4UJWQE",
  "key12": "4NgcWTkPW82zZPzm5qUPiLNBLvSy1uVTdWHjHdqunL1mzdcWPJjJ9eCjv2wRs8jqKL89PLeZuxPcuKm2bHhduzmJ",
  "key13": "38ZVbydVqNcGLCjuQNhGb97DhdXU4uBwUGvmg5s9jWRpib5n61oExpFbyweuP8p7cTuGHV1kEzxB7BSP5Q2mYaLF",
  "key14": "4n3zeC7YoWAKRf7DnzKE5wKZ4g2hT6rD91D53RE7cQV5Dc9MfTbdinVJqDHYznE8vfmA74XrRFUnLcxKJauCjwMz",
  "key15": "5Tszpv9C1EB6R8ocgzKpXKb1xPexiPSFrx7YB3XnTqBF2kRtvzYZiorzmejHM8NZKFp7CiSz4RXEfRHCpaaDCZzm",
  "key16": "3NDoW1kyF7EGmqU9ZDnei2kzD9c6GGvHmrDPmu3xeVnQfTTJL6gfpuNsAr9swZT8G54LrT4yF9Rkp8uTsXJCKKea",
  "key17": "2hfxwJw1EsJpizo2oEkYgy828cPmsx8z9UQRJRorkyPjmQbzu3PPvgSbnAzK3ZX1oE68xt91Ae3BR4SnfYfWXbrF",
  "key18": "64v1NFcKPMH5Pem2EQ7E3sUUSuihCFd7hGkq1YGZ4suq4YhUq2zjWX5BVDa7We1A4Sa14t1mHTTvqRFABor3SwGz",
  "key19": "2hvdjEjN8RN18j4EvHzNpAcwUKorKe2doAMjBdbUDPzEPhG8kV1APj1i39RMjFtyMH3SnwHx47vcRupJxFzkqk8A",
  "key20": "2JkeTHZsMPEyskicjEQUy1WE3z1DRMUV8r6vWDHEFBVmrEEQTu68nVvtGugbJ21Jcw7hu1vw6NrC9VGVGgdbo2vU",
  "key21": "n8o8WgX3NjkmjnMP8ptFgvntwP4A3RgLxgaRmoy3gyZf4mWc5ibrd5RU4gyJETZVhMwJ5hL4DhzWYviPj3u24qs",
  "key22": "3t94ZvxfbqXhbbppjXFhfN71cbyGqK6RBoZWaqbRN5va1fZEx4ehHpSdfJ762qPLuFqddrRiqX1JFxa5V5JwBSxP",
  "key23": "2PiDhKvyiUybp7tEcGLnTg8TuHeGfu7LddbCq4yAjjjRKJKf6MXkqaBWnHmstr9puJCHjRj2mP5YJKpDhzwyu1JR",
  "key24": "KPUWTDMR8q8kod6SbHVNay69vGcx6FVVBDWBsLViueEw41oj33DuAmWu7YnehvFsUA92YLaUwwf9nRNkvcSxVNN",
  "key25": "4kyt5PYWX587CTg7bmq8XqjzQ5wmp8CChvtzJAY23J7T9UrSta9SfV2MYjX8NB55jHXGRbhS5bXvsRBsM4PHd9SB",
  "key26": "Lav7vLW54R5eo9ZzeGZg58AczWMZyv3HtyDk94mCExctwnhTj4JZUDHU4wpTyGwBkDZD8VBaQm2iTe1mDoQk1MC",
  "key27": "HMw1qdUUrTpLNHn9rTsLoJjHv7WF24mWfsYt39WbvLG3HpF3XNLxWYCsnSf6MpG6RgrDuBUcuDwNRZLdBHpWD7V",
  "key28": "nE18Aun7bAEyxEEWx7oV4pnu4FEF5tGjoUqkXNNGLbwdLkuQE4TWzosCDfTrZ5EGCzBhVaw78S3vKmLjJgfNjTx",
  "key29": "2S6eTa7MA8gy58TPb8QVGugdwJb6ZJZHZAZRVMf73Vt57xbByeWMitZYsc2U9Dyef2i7Pqe9ubNDZsB17BQueccf",
  "key30": "5Cze1S26ij3XVsjm6ZcHAxuHhCfKvpMZSf2msnZbkChwfnAxqnDWRNxVRsYrpffuHS9PAgHpKrbASEGAsd2jRqGs",
  "key31": "2xCk783H5XQadarxX272RGhs7k8gBPP4kPesfCbFfkwhWCFanAAQDwwT2J2iR88nz7nPgV1p7SgnHmnZiazJxm9V"
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
