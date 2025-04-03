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
    "3wwfrnDnkAi8wc4tsgr3G2Y2DdVpJc41QRiysfFTi5sDarL5Z5dwB6iWiGdpofMdbzrjdg61QFyiHhMHPnPKP2z1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29iChWkXSjrCgfPJm6Q4dXas4U6Z7XiqmuzV3YtLo7A13ujMTzFwyAGdgv5TpXpgHWBBiUkEGiMZRm3ftZ2oZgip",
  "key1": "5JShj2Z6N7r1Gwr9ZmQNs1BzeDt59JTLuiAsxxsQZ8fygBKxFDdUTHVr7LE7yo6sHENJD5kQWQsAaVLVYvzVoiLw",
  "key2": "4CFS3s4wuViWaXEkSbusT65WiVEWJAizJUYi71tH6UHydgkobzZSvSczct5qvZMtS6YLMvawYsfAziALor6TTwwR",
  "key3": "4iVYzDchMeKxf7oo5mBibgeYj81Eu8Di9hizkrmVyVdVpccdkda9YrbHYyTXBGk2XvRyMHFToGFS2PskPp5DDMxq",
  "key4": "4rk8efZtQRMTzPAFd1b91NHcCzVfhBsiaaxsYJn65xvesdQjD8FsAHGWR83SsQ6RvUX49uPWxyRwadWhonY2c6ZB",
  "key5": "3wv6NRrN8yQtrFBdQGiNAUfcCtVaNKA4ajLHXMj63PBucf61w4GG5RYLtCWnLL9uNnhja2FaCqpwY1KaFw8BVda8",
  "key6": "2p726x5K5ZDJAWR1SAtKgw66Pj9yEKwHNBuKJd67sKLwikgdVUAsuWPsLRkTeC6GVNWuFB627J5ppTSaR1vXhK42",
  "key7": "34zvk7M4cSY5tjQBMfJbqchGkW3nceS72GqcDygwGx5zHgYPyHzTX9C2rGLLrvJsF46qhPgZzpKEvadsJmEkaDYL",
  "key8": "4eSPiP6bAdeY2xjyCBeYvgD4o6CXCL6PM49rErWXtbkXZd5H88mDeJxbsF7sNuGtsT4Ue1yjSSRKXysgABCM5FC",
  "key9": "3qYRQVphPZuV8VXYwZ6o84TwVhqTE3FahMLq3ANFahseTR8FzHop1TJjiQoWnk2raPjamoEbjh2kSaUsGJpMCpWD",
  "key10": "fK7hyKJvzjmCBDMbGTgDiLkDUVh2aSH4yvh2RH956iAo1XgUivr8juMiySg1gTL2nn21Ztd5ZTNsuwZLFaRweTV",
  "key11": "5RjP5qfvyEz8gBYVUhX4PMy7npp2aUATLiwvWnGpiUPMKcHnmdydMDjEAcfT4eEXbTpnJyGM2RW5Bq8vJnVA8sSu",
  "key12": "5uqoH8kkDr6srLgH4gPrFr385PeP9bHE21RYyyqnQ7SMo8szEey3PN68TuSLQZdVv1Jvbh1Dh9AmSCd4e2ZJciYZ",
  "key13": "4W5GC6yqMqfqzKoF4ikst2m4UvmJ4kjrVW9Zk8MpuF9gacoeP3wa5cVPJyXshSs3taCaeUHmSBJhCcMRHUgTNC3X",
  "key14": "3WxAwcdHu4KRjhH3NBHNznfLbiEeQvtLBpRpb9ccyk1nZGs22Q6dRvXrgrfWvENv32ru1LVimd1wDdsVHf4VVThZ",
  "key15": "R3XzPQQimJm5yNHP524v56m5LcwcsteSzq4P3NGMJAgs3sgHEVnA9TiVdAmFDasmBygimYphgDd4tjabEvH6N7T",
  "key16": "2KnNnbJpLEMZ6vHWN8bWCQka5CMKDEG6TsWPdfHkmndhHk3539pBv5twrmJdXUW3WtCD6ksLjhM1ePDFjxEfUuLC",
  "key17": "LsbCmKQ2iGdX8J8zFwcVGXf8ejufy6XWKCBRnqnECfCbs3LHTePfAspbyMf1XJpqWyGVAvHa99pTJ9tyBBUWNo2",
  "key18": "2FmgvnFpyy5CDbhGnLNj5hsz3ZV8UC9SdTsxTPaoWnLwmZGtozGqusBDWVdLRK6Tx3kKgrukNJukLZzPKqk3kbNu",
  "key19": "2wQLtqkpRHKpjRjQY5e5Ye2HRCQvdhLtRkrMz993nk4nxdEzMWzwLNnabBxpCYfT64PJ5B55MnC1zup1zihu3nZn",
  "key20": "4Z2Am49RqkVeAGTXBFS4SiTW7SYRj6RgDnv8BWRmZv7XeT8J3VP6Wwu8V8Z91E9zg2dge1dob9AaAb2DwqNPnMdn",
  "key21": "5Yn9xMTrjFWaUEL1vB7XoBoMDPC1vMQJiCLirHFUuzMoRrxFoejQop6MiQvcstRMVPJrPPL383GrGdwZHbDzLh2g",
  "key22": "4UNzdgm9x33zU7pmxtRDq5NThza7HL81pAB5g7w8Z7juJ5NnvABMWQCskio8qcsH3ZL8VSALsqFrt6QMEiKUf6iU",
  "key23": "2R9MxVRnTUBE2Y1FxF2H1cNkYsy4Co79iv41u3VJPWZczjWmpNdD24GVtWAAei2783yaH8S8FLezoL7tGYJyLMUr",
  "key24": "24hf9yEefiy8jQv24fadpZgGayVsHrM8iupVDfKZeC3L2VA78Eg7SkR4pexSX82HbA8Rjjh3R74HnLK2kND1gqxe"
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
