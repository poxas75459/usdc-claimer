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
    "3LQgf4WjW7Vz2Mm6iehi7i2krD1GtkkJdjNwvoBqAx6fBATVSK4LnWkdnG76Pogz3MVJ7fvNudKQXbvjHTxt8KZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hf3o5bJuUTEhvoSFakCBgFmFqCYcUeJUJLGX6vUuGW8PmfG6pbQZrJu5myjPhw8JaDDH3qPUmUHhFiSGvTitMKL",
  "key1": "3TZjpHgrn9biJWvm9gBpa4Czeu4RKQsF1GzqGyo7XA3hKt6uu6ZtujEWdJ3uxQDSV4GAwSm2Bdkb8sRyEwx7n7PV",
  "key2": "mbxAyjnRHXB2XjwDcVS7x43TxW7H2YYc7TVm8VWLWT1GJz47skXc7S6nXJwzH7uRJTNjo4xezFQApvWJ7gYjZGc",
  "key3": "2wGtENX2CJx1hkJG3TSgpkerAK6kxXkekU2Q3nRnhTEiRG5tQ7tNCFRDPw8sHJ8aPrHGA46qQUNrHyAnCEY7Gedi",
  "key4": "5DccUXps6z3MHqS5eqg2hGPGGyMhArCQJfh56awrstVohWo5YazRx7QyHVwCcQi8KU8ueUVUv14oyEE1Humz85di",
  "key5": "66AbgRa1NrALociUNEM1yiDAtfTf97jECogF57SGBMzvKo2oZzPeSYh1uvqTVTrSYPPDNrF23v1gXWTwPAdQvKzK",
  "key6": "2SSj45UqyWKCWbW8gQVXy2adkXTZZz1yHVwoe9dfaQ8pstXfSpZPoRBcceH5dYBeav661qVjCXsH7xGRAijcKLAz",
  "key7": "e3qLMnguHtm9chJkxHtuHiKSUNhexFUGSoRAgkfCtWgsSYvAaxDaEvW4MkYEkypku85Zo2agdqoNYg9kcqvc4Bj",
  "key8": "F4cSs222irdTDg9Dy1WX3EUnvUefFZ4ASPyfWMQws2DH5onGPNVie8VTo9a81LeZ8kBnVjyZnmMPSCU6aMeueZZ",
  "key9": "LEhVcu8yG4qQRAyJLRsRWRGW8V2hT2aisU9hkqUW2veaZFn1RyA8prrtLUGRHPa7NM3wm5RQtVoAVS3PaWGbb57",
  "key10": "3HzgLmjvdAY2KygLxxYfMgncdHGmhfd8JA4tVWqDxVUQRUdgxQBUuNi6i3LsP7itSRZkKyN5Ukq6aSYk61dcmbwJ",
  "key11": "Rdah5Ui957vevjfpStH4GeNkzHNJc8dmwomRnf6otydVy9JxemBKxahFLy4mSGmtmhpQjhFmhXYFHhsCH8VX8Gy",
  "key12": "5oVwqrq3FUcqMmMJ61dmC4brH7a7kfUf99o46XqEe5ikd3xNgvsZ7vWRizUb4LvzWPrhTs3dfGAvyf76181C7cu8",
  "key13": "3PVeHcFj1Hee3ne8fm1nWqLJGqY3LJsTooHd6N1Df4Hom4ytAXC5uANMZCNRnnchn7FBhCie3FmmgC2zzuSfnSmw",
  "key14": "2fRGctJunqDaDRWiV3ZmitSL6e7eN37vYBBjWGGCiM4aPwJR44kFhXfDgtUFZK6d4osEJwWtxkFGksVDdUvZig2y",
  "key15": "w7tELyJv85p8BKuVec3Uc3MJWGYYarNUWQp4dddWC5aVr7y9TVzE3ugxyZcfmkPP8eJJ8vbjNqFcNWiVzxrmDgg",
  "key16": "5heRPTxeGPCnrLQZnYeEsyeWBL6iGdZUuPWGdNeWJDjnrYcNtupGUXdW7ALKNzauPSkDiU2d1s9Nm3i5W4uRmx4w",
  "key17": "5V6gZxNwtRVFLa9sKiEXdKmopo1mPw3QmWBpzaJ8pu64W814RZn6ZQzzBnyG8HnS34DR6BK2CkAkM7ZsXwJwtuzm",
  "key18": "3tNAZvSBKGuR9XCN5CYzUjZ5U5b5HXeFuCi7TCbF9wC3FCoRNgM2jq8ah4MpFQnMfuYS2UhGrjtdiuDCBn9xZwLx",
  "key19": "2DKdurwt27jdqjEbUfPFP6TLzvETy66cq8fxUa2itcHVmk9S8Sr6yErxWLgPC2T9MKvYjTqtGsk36TcocAyvdXfS",
  "key20": "2p9ZmhETeHhsGd3Bc6yRgM96jetFycMf5MCAC9i57HBJ6Jh2CfwNfPFaQiwpWrkbco8DoLnzw8aosVDjLhc5Bprb",
  "key21": "29pbLoF8amXGnZh3ix3JjeM8Uxx4mT3KRqYXw9CyxtPkQYzJTzhwo7s3zcttCGdps88iwzT8cUyUMJiDzUXZfXKV",
  "key22": "4opWezJJMtDmV9zDoMaRLHqj35LshVAwGG5x83ygsabkpEgDScnGEQm42iP5PNrLLJN1tQFTnzh3FUYXafj4Uvzt",
  "key23": "2YRE69pFcEc1LTFzwPbsZ7ts9xuHusXqDMKwwQgHxsPkjvwQPThbqKsuypZbB7NyeTcT6CXoxSbNBe9mcdRnNfJC",
  "key24": "4ZpZ8HgtfgG3W9qHTFH57dc7XFdeHd6Wc3YPzcBrBB4nzG5XQK6ymnkeh6U4jbTkcVVtbdabkooZbtkcacFVuzG7",
  "key25": "5oy6AUuQwfqTP4iXzmPRZq1827JSJJYn5FrUPafv3in8jfiPPqU5cXxXsTNBJPJYdU2R953LJWWCaV2DU5QsENBr",
  "key26": "47SrKjPbaKDMSyZ9TGfFWeHb2YAhagAUwVe2LS9QNDgurjJfsjtCSZx6Hh3xTmuhmhifiV7WzDr3WWWVSNW9PJaY",
  "key27": "5AcdBpcJgscwsLLRmgiZgSNS9KHSXxtn1m5DNBGpQvcfJkxnu1R1kyGzngJLxDwN6r3wTsmidftpRpSvSgLkstkA",
  "key28": "2vY87NQg2ikDKNUkkGEN75BEnXP2QS9pjbdQY8Q7f1vURevJ3aETWDQfKcCrGmjBMYtR4iTmzietctvWuhZfDTGL",
  "key29": "4iQi7a1uYgf7UfWWiWWfvRBFcVytqUtcGzmHomTrba63EwwoRSrWeMSLpaad31eQvR2Fvjta7UVSU7H3eLZcpDsE"
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
