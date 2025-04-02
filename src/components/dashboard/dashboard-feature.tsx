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
    "3E4eicAWfeL5nFh7szBVSAJKS3wjJc8tLsNQUFRyY1je3FVYCA1KNUfT6tpFqT24jsAdHRnWhTJ1VWCehZ9fpcR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FdazagMRHDUHkWbPcDjRSo6GjmHqqjWSREuUbjswchSLmEzsddTMw9JVz6mMfVc9ziSUmVpJuLhnc1QabgMXNpB",
  "key1": "McR2wxtc1pyuwyDruNxK9sSTZt7QZEgEJZcinuvEGeuTc58sDsTdKPw8obWHX7o9ZGQLmH8CSaHhKbZTuZvMkSM",
  "key2": "4JgoTByLkmsDQqD6GCm69C6w81qbw9f9TJzHLoxFgauT1mEgt2MQUAauo3eyCgoBRSELGpwUV7CymQS3q6P8QXN6",
  "key3": "3kd1wEZCAKa84HDFZcdYXsNNEMDwGV65DkXqVdik5SfHWCXC3Lg91LwocvhM4Rtc2GrPJ7g3DA4iTeh4WVkgLkBY",
  "key4": "25G8uJdxskkAenGkbxdG8ouJv5maiMGGxNTsvD4iBW24VX72xUD6JNLw6xKo4RYGHdKVSMuS5cymfBNo6mzeuzSh",
  "key5": "4Xo16VFMSgMZ9Ky4RjhFJz2TRekrAJB8UCVxXdYYHLx7fjWHUhgKRhM3ZWA8AMKkBbN8P9aX5PNHWQdAg6Shk2ym",
  "key6": "4QDeNaC3WfHoawsLcptvNkgNUMxZA3AACJprkhiXYx5HbXxtjCqA5Rr4Vyoh4Wq6Y28AwwZkpsC6QbBXvTK9XTfz",
  "key7": "3nApem2dGqwHxoNeWi4a8cZGTtmvaSWcqbZMeCmhL1DS3tQNkUKodUR4FV2BEmaBT42qSGJnNTEoRtDGRnXFBKmC",
  "key8": "CsH3C1fZxJaJ4jEonC9NSvQsomV22qF8B83W5nEETjf5hXnVoZkHE5TEF6DAj4ooip529Z2AYfNPigrWELcaqSH",
  "key9": "4vQwtqsDFHe16Tz1HjUgTfoVC1YbDYXA9KNp8Qqsmw4QU9J2cVyL983YM8yL1jJMiyXyMyNyNf2ocCsnHAziewA2",
  "key10": "3CXyCX3jSG4TYtVLkT8f4sRqZh3YdQXNGUvMyBQHKkpnm9N9Pt6kJBq83cNebUCeJr8btr8SA26BzPvAPdZyvTyr",
  "key11": "5AZvE9M9A2XaGopxUvKgBJ599BP2w6WXivX4rS8bCdQYTHuivs9CrqA2JRCBsCxdxHK5dRmD61FMJHLwKt51tD5x",
  "key12": "32vbZreLyUbwF1jkE6ykSak4rWSHxwiXHLLptZDECuA22rUfrbtkffb7qMKh7cqVHrtPiamDrMgP7z65iDe78BGp",
  "key13": "66TvnboLywnbeGjTavZKNYQHxWpwWXjAxscUkqTwhpco9x9TQSKDmvtwZPere3WToCaMGzSXyWt21Pa84Tbi53nB",
  "key14": "28N5fuVe5iCxoZ8fBdMpdD8o2EX6j2gBrFYidR15c7FJKnpVx9vxMEGzWLM6hLoF2XuSga79CfR33NJZmBTbqVTH",
  "key15": "4tR7XkXqWEzfRNETYYnUMqimpjbAfPdzECRXeFsm1fZ86kGWV3hrbTuYu73fZx8n3oKXPPTFmNmAJfPYVtFa3d6x",
  "key16": "5JSp9K3saBBg8m72XXeWQiGpF85WceBne7DxWtsrRR4bokU9qdknTwEmBq9S64QQriJV5XF8tGseUFjScWH1xr57",
  "key17": "28RR8p9xziytxaAE8GMzfcdT19CPvivzvbJYJFWPdXV8FvpwhusM9X8YPfHLRArDEVrFJYxo6QaBdhYBsJ3ypw5V",
  "key18": "2u5JnEVDJ3PrDaQjjnSN8GXwCwhTkJYj9E7kPLWaS8ceDNQuYaMpW8GKTqpPpsfqa7jbUA44vNbSu74B8DaMVFQV",
  "key19": "64AcnfdFxwVX3BGvBpJLoyqXSp9VSfadwogsETkW5R7NFU1pD2JBNx9mHDDJCzJDYqT7tTXRgdQ5bZbToPDEDSXQ",
  "key20": "3Bcf9DfKDo3WTtzY8o6zdiGm9HsBwzjvZk3cZQQtEXgNC3JWsot7nEWhgRsf3Egfguv9mX1g9XKuTbGzoycwzTS6",
  "key21": "yaJDBWUo6hv91Lh97pe3uq46xVwMqexF3JgXMYSsGXD5n6bXBwFmpV2cGCH5ByCyVh8EBUEAAFHnYYNgdQs8bUk",
  "key22": "3baMHiXDZmR12xrf2U1E5efADBeYnKd5WvKaBrJwQjFZSFpUzvF1bYFNSMcWfJVcXn4pSd3TZe1yijHhpaE9z8wH",
  "key23": "4nVpsJ1pzafiu6KUfPkaqaxHCXQEdsL4vW6n9EmwSXd7Hfy1s4cDk4q8Cfyt5T1tCYFLc5WCbPoQ3rTfdDJFbo2b",
  "key24": "Lir5UWhLb4ym5sKi6gjqkwufbS8Ximcxd2UXB2YmchQy6iqxfPBPDxtMaxHihXDJ2ezGCufpnAezuaW3fFCjJ9M",
  "key25": "3es9j5jAvHKJrqeuSBDmC218dyxDbiJm4YjPf6kcWtodsoEHwiQ5ukK8v4ye2Lv9i8vGSFriKHcXbqzWQS2wxs86",
  "key26": "2WNwAZtpQuHCaonhSPP1enVQwgRMD5rDrAkW6zo1UFJrB3Wwv2xxAbj7V8h1hoLevYWTfKCzuLu73QJiGUpeyBNy",
  "key27": "5JE8hboPFNPEwVWG36pFQaHVsuHgaQ4E2P6qwyaBJHqM2TGHpzkNmeRwsjmfESNK3PqnA5C2fy1dNDLsuj92pazr",
  "key28": "2zfZ3YPCxwC1mXK4kPzo3AAJMJbHoqgsxrnVdQrrDccinDHhmWuWdLY8Ax1nAdceknXBp42XqAcLsitoRXtygswa",
  "key29": "4NfAfZiW4VCQfmhNdzhBRySStQGtX9zmU6H71CLY6shXjXwzBdf5zCf7d29BGwF8JqKWnZedKaJVAkynwcSEi1pg",
  "key30": "zPZCwJVtwTpAJRNVMZj3Ny1TuCQK9746ksnTyN53kkEGDrZJVWFATAEoUtonEMq6q3HLGW1smLjHJZzRiWrw7AC",
  "key31": "egeV5TSQpn2Qba6va3KZMVqpPbPGBVRuSjpK58geSAttkWT1yXZ4J592w35WqfbCa5Wd1FKPecY2WVjALAnKNJj",
  "key32": "5uL1fScbpj6HTHk1oawjzfQkwLNUvSF717tT1Dad7oRwiqRSguFFpVTZrjczXtZ5prXciPw2cPP4f6ySUEUoHHQP",
  "key33": "3xcwg1YSS4iCysHkmgCEu3cYSaKt6TMPgyYLUBJPUrndhaskCN7kPF6VJ6ecBcBnm2KUvRq7DrSnS38NSZYJd3XQ",
  "key34": "3otmybbVetm8D2PAcv8jB6Vniz8i1dA2WxPnHC9BzN1dN6NC9SvWYnXMFtpqZaSf7Q1sKjYxdf9bYostks8Eibhf"
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
