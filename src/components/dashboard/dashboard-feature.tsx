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
    "3f9ZkKQppXri3uKkRJzCEC8BoWLUUopAx1Z1wQMFXYRDWe8gVdvcohh65X9tz4CMQUHNJFfSzgkRiBeJaWpKyrS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZNM28MW9ELKig6DuwcVAs8gKoFMXKufSm6UquTyLd1wYQRgrUh8ceZweDcJFaLioXu25fCjbpttgk8UmThEgxfA",
  "key1": "3ZcvxDFUq4Tu4QNE2ZrEuELz1Jf2SJtDaLZ43UBk6s13FA4iYZYhELVzVWJyZPwAbeRGEEC7zYPN1h4kTvmHVGK8",
  "key2": "3QmzXHwqMWpY3rrgcTzJ4WjsGDEW9i51Xjy6GiVPJeaqrH51m4SLmoBFWF9dUac1153TVGUyu94BLUjsxzCubqNS",
  "key3": "4r8gwh9heDxUY8rcG93Qjtd72AjQm9SnEDbDZ9vTJhQ9dZHD24wLPiqZ9QHwAM9T5shUQJubuDKrZ81XtAV5GqiD",
  "key4": "2jnkNRRqrSywLMYBY2f94SPpjXgGQeDd3D81kLr7bXdo1osik1BYeb4BDAZxdFv7hmyFPmkna86k3xAHjRGbHmXg",
  "key5": "4QGHgXKAzbBK23oPhWTfz7ZNY9EMDitKqmiNPQfFD6qQW4tnB11DQJyHjPQVbEUSneeBZrgRHRpA2aLGeRj5WwLP",
  "key6": "5GphBjD3AwmevvFTjrf8k9VbtocDZrUuCZii8oFcKV2XeWHiooQaUMKhJs7qxA5PAgkBvtdPJAB8YWvxDEasu8Z6",
  "key7": "XGvJwvkma4Pg5z33qAW6B53iiS6tU4e8kETobDThxTTTvPdcKVjnW8HfNw3DrboBfzUdjDwrxZ82am88BVowxWU",
  "key8": "4meAFYZBNGSbM2ika9a6qZUA4xibtKW9p7dTqniQNDhFZgoHX3RP4jzyTpa5LMXBYQKTYFwrEFJzSTdxBq9Kgpnx",
  "key9": "3HJpk5ot9q8NEkquDz7cDGHd4iCh8pNKxyXw7KyCovnRjdunFXPx7SN8ZYeLz4NZAdut1AZSX9bqiW6Xe4tDDNg1",
  "key10": "4P89NFBm7we4NPUwR1ig1onWrbtknFgtSSUxSoDSKgZgjkD3AANH7b2RBkMakuATaX4LosqhEqy3NynzvWt5rNh7",
  "key11": "5uhJMH3EgHKmBFSadgwgan7NbAfnuxwKdXqfuVpMZf9uY6tnr7z5AyF2VFaA978Kcz6azmoAD5vbDE9wdYixHDX",
  "key12": "2bgVSJQxnAj7fDaoMvWjU1C9KRnvhBnEKFbRqQkDZLNbQ5QcetuEWooSQyJVe5FwjUXKzCJ5mgvojwNXh74BsC5D",
  "key13": "2WA1g725umirYXgjPv1d5x68TBUGP2QrXQFg9rtauc9Arb2ViGKVntX4LaiAQCkBtufjZo368KXQmwoqHzA4vpn1",
  "key14": "2rLpYdqgYvpwukZXMQQhbZak49AjpMHs5ssjye5W5F8DvW47MfqoTihLpDKFqaCDbcUUxXm8ehXKebVL8AeXHTvj",
  "key15": "5rWErWJsn46EAfdFWKH2YScSAYnFnFhEQYUq7MrA9ZSJ2zqT23XA72FPTzhDSWbFXJMFrxWCr8kTu7kogpZ7QKjx",
  "key16": "2xKZTiP8ZXuBF7XtdiNSagfKvAaHorJWg8igPFq6bD7SR61b6bEtQH3GeVNpKuF2mKW963PVXrgbi6aYHkBnoJLq",
  "key17": "xUjBBoHk7SritKf8jbkHhivJbwHpNEQTERkCGbtatrfE2KNppFkp3iPGk9CiL8SCmsQEiTEZQgMHhJzdoU9bhMy",
  "key18": "2d6pCBXCVrmcEen438GicGJGSZFbK94QB6dxvAaskGByASsfS9HBmJRKeM3Z9zGgap5PhSZBegmueYA3aeGLD297",
  "key19": "42JGKr6dhBq7wxKdejrVNr5n2Z9ry1Rys6zoRes6ByLTQBfASUMVs9hD7xqWELMGaFVFgjVZ49ee3jXsZzeceb3v",
  "key20": "2o5UNKYaNEmWpnvuooqqWYKFKxw9Lqs2V5oGcHHtDJtXEJAiDJyf7jf9k5Ge5NLZZR3bUVj7DD3oTwBN7uy89CmW",
  "key21": "5bQipReoAn9JPbxFmrrBAZSDpBsY1iu1rX1xstZ31DdDbDBZSjxXgHirKoYkn25hXo6gp7ufPf7i5q5epJJeP7FD",
  "key22": "xUgYcMMFdVaNpxe6ysaEALASrxwjFC3QkrKLKDjpvkXLaKQUXhVPdBBUCMLzWsxNAsg4RmFFih4Xj1n7btpcFwe",
  "key23": "vP7htAnTmwZA4aNfyYDt5FQwtgGYuYRQuYKa4gZ5be452wg8WDWvui2qZTVbVckR7M8quXEq3ZgdaidMAvuHqiD",
  "key24": "2B4WvJpmFsAsxJVhFVPoPBrtXutSzAKFSSFmWAnk18CnY8yyEBouxRA2HVbhCxPD3fYfvRspK8oPzyzFP4b9Qqhb"
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
