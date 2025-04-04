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
    "3obM77nxtms154wusL9Yq8GwiUzUhyPioiV8D6cdPhWYTxwf8YfGRE43pT5cWfDKYyjqo2ed1yGgk4F3dPRmmAHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZLtiHfyppjfYaZ8Qrbnqm8BCVNHzEfiLhk8QuFr1bFWNduMefSdotvZGtRJgNYyepub2rG1bkKaaqXhr2kHGurD",
  "key1": "2WRxMMnHoDav7qGGpPkzpdt8rPsRrnt6fvPT2e4GdXnaQHgiz49vuDkwyGfnK5cQHXPrpSyrHEecsTV4jMbkQD71",
  "key2": "21UNDzinA7b2N96XmutbDJ4U4pZiGd67pkMDYewdmHE4DT9yTdDKrV5fVs8ARh68k8uBBmzk1n7e9aC7SHSJJ1Uu",
  "key3": "soUubEU7LjzTLcJ6osGhoHD2SdTikm7NTfsEJ5MCVUPF2bkpUaZ5T8hqUZjsTgFfjqeFtMT1uNn6SmSwe8kt2QR",
  "key4": "3VAJujpWhgfrEwAT6wHanZQjZMo9iJcuiA391eJDT7386xWDVkjMX9ekBCtAt3ikLxjUxBcabBPA1XMySsALswQu",
  "key5": "7GMqe4oza95d73Q3nx5WDPt44PoYLkdsDdZtc7cfPsXBJiaFvzbHvRksq7qfxgSvVmJ14LUiAZdkafKMD2deaxH",
  "key6": "5UZRtXThWXXpojDK6vLBf3unohFe4WJHYeUiysyYeixjUSJR6bnUUHm7o3bZTfKe6SbVdU1EyEziRSY1T1gGJGCa",
  "key7": "39Dd11kNKgk9NonZ56UmC1a1zENwfhd3NJrjHgwhRvDcfhcq11KzTsxydPd6BuRBQc1rtsD4msyqCptpbT1h7uxu",
  "key8": "5KgwdQD7DGcHMtUh58tWmys8qpZrbHaadu5tDAmCgKQdfcNfkmxJJn9PVSFeZi5P7hsJWskKBhXzTXUFZ4nSzYXG",
  "key9": "4ZCeg1msvBcRi6YaFb6qENbFG4rqVgrT37m8bT9pHqAGmwQqjHfsqXvXhjmd7fuYP2FETHp3pzU9uwttY6gppMDR",
  "key10": "42rjkygUmcGoY6P5tBt45c3GjdfmxR8y7QGv2jhFpV174GDo3Kn8Uoj5ufjdM6cFoc7TiVk7gjBdAcsK5XpsBubY",
  "key11": "RKrf3Y9i7XffS2Ls12UuZJWWuYJhYtrxdtpQCQQFnmuVXfcvH7C4Yho141BnhGJ35CfJGX2y5LdkK9rghjVFds6",
  "key12": "2Di8WHjG7vWhhzt7w6B1GR7t81cwvKYhAf1mvXk5vv3xAYhGUkYmxTzgCTzULJV31juKNr8mqWoStwyPjrGiZ3zR",
  "key13": "4UspSNQVsS5gqGrYsQeJVB13HXa9VHPjxrxUFxP5dfut533gYmvAivLWJrTjyUSQfdRpjgpLEeP1PgPY6CBSwtaM",
  "key14": "26FBvx22gaU8Mdc6tfVTa8RoxjRsUPBNw9y95VdbYAqyQeeiYmaZumneZnbvTeGseAn2RFwD2C51Rp1SrmsA2gPL",
  "key15": "3GhqgG3SibUVkiJijTFWzRcE1KQTpjvdd5ywfLW3Lg3ur7dAHUgJQU3xjBYG8oADWFkGfGkz1pxoZmeyyNmuncW",
  "key16": "3wGGzsCbA7nqkE7cwDADLkJPmvdD4jMi9x91KgeDRhNz7EReWaKrCpGbJKjQKP8ZWnXgv47C6cW7Jrh7UAgsZ7c",
  "key17": "4nxLPLi1KoiiAQnjbQBkDqg1F11mdRYSR1hbN75HaGDK6yCSvJYWC6BDv374Yvv4PKFyb2dct4mpTtW4ieS9Pe5v",
  "key18": "5Y9HL5PFbSHALgkTGXKmvUMwBYSbQ8PFZnrtr4hJU7xc282Jvd2bruG6t171dk19VmGfwtgiXaKP8SaVvijePVif",
  "key19": "2gMCwoz2g9Gq7XQHZVhWupGoHBvHkVNU92RV8ew69dvrcjHJzzrjypxv6e8D4Zadecjtd53V53A8T7AuDbQW8DTa",
  "key20": "66MehAkM1TtLJBaFufmoaeExzTEH7L64q1cNsA3uMEhPnirmuXW2v8xrmE6HEYCXwm4XMj3YtEjjTZW2ekeY7wXs",
  "key21": "43QZTWDomq7NJuaDYqMzA2Jcy68KJPcQiwUhSmTnMdyeMpS3Y77pV9Au2yYiduFSy1W6PhHCewrJqvXG94vQGCpc",
  "key22": "24SbygRKUe27AVz3qTyeYwKTacGE39WCjhnvJ15q484M89ofgMFqWM5N1wc41w3AqrDztF1T8WLYvAWpwMPX5zre",
  "key23": "421yQubdKTot3nPSvmx1f4Ko2c8mEPRUCRnX5u8Kyxa3vo3r2JiSNbgvRcib7ay17zhszoueSLVxmXMwazUvhxu2",
  "key24": "2b6fEUrfihPRPZd5WRd8uTYbaRNfucdiG9vnz4s3iZcLwm32HnstcevegLX96y1WbTxtoWyxZxurKBNvsGG9g3Cc",
  "key25": "2xPqUBEz6HcaSMSWeN1iSnnLA1fvyYu6BgdFmngu2nKXfEypE2DVA9hAGr5YiisGY1pqFQnEiUzUMRyxWjxHXaHR",
  "key26": "3W1FhTccNiGcGXEfVzBqqdo9cgPgmb3C8GM25UfUvWTPXvh225XwfN6tYf2pn35GRYrJomiajGVdFjtpcxasrufB"
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
