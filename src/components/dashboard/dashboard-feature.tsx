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
    "5j3qi1k6sjDJ1PrCkRw2rze4vK78i21besRbvtEcLGHQa9sy2u3jYiMgUbSmwmGgZK1YMvw2r2dpsT92muEaf8q9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JcxJSBZD8c3zoxjd7ubEHrCSNxV44FxaFEwpFB1iqg91622hwtzAXnmTcL59in8sLcuNFeQTY9mdD2oTvffdWPQ",
  "key1": "PXdxumW9yDazVvUCx57JeUDiThDow9ks43X3PwUFrzhekm7EPdu9rYeWZADxoTL2qe5P8fQhFeGUqRg3vv6cKKh",
  "key2": "3S7qAJYHNxYryk48EwmHGnENVYTeFgkRj5sMicNFjQByugF2LAShmHQ6cHMJ9WsrZDzdLPfDqaR5uLVuY8QyBSJG",
  "key3": "5vJT5NJf5dGH8Cczjc69SD8ekQiqcexaRM7SJjGEBQ5MicNk62xhadmvhuTNKTq566M9HFLrk5zkjJQDdMbezbds",
  "key4": "2VDUvd9MoyLSFPVCEGJrCjZPY3BR4bNDnQgJh9w9wa8XdGbAx3dadyS1FwJ1ykfYwBpvE3k5yZJwjczrAHhr6ptR",
  "key5": "Se1dQMeqFbBgqjByNfE7h3SqFeqNnDB4Kwjw6SHCF24HgZ6fqyHZhMQoV16DpMPirfuuCh6Utc52zckzdkyapA2",
  "key6": "2A1PqEqnk9Deqr2qRCJRMEXUrukV8Xp7ThomHk8eJJK5iuDP8JfHiPMb34y5LDaD9eNhbKFWdJXC3BWwNJ4eECEZ",
  "key7": "5a85JrbCTRCFpfLXrZzzM29vCUbtzNcZLGCUFbdcCHrVs41vBSpUic78H1RCUXNUbY9sCXupCRvZbWcE7dH7Ci4C",
  "key8": "2LZjYN95jcvZamDmyN1WPYaMtoWrZt8ztexrAocXHgjknfgHHCqLEwKUVbwwsvYUo9CP8j7S2i9YVoAsyVXxs4sM",
  "key9": "KjXx6VzmdQdR3X4wqEHJ6pCgqv4ra5svE9Lnux83zGD1vJA7jBrPCKj2V3doFpJduDcLn9kEcasinFjz7WG9aqM",
  "key10": "5WuxfQgv1yynQrKDTC64faPqoBnfGudb8nkzk13nMo6V16fhfUhPv3v9eScN88T1L7to8hZ59rP8LMfxAsuJLHhE",
  "key11": "58qYuek4Fv5G2kv61KNSTzJ5kzAU4z77BgKfsex3uXsWfR7sH9AbtMptLfsWsiN3szo5nuuyNT7yxnZMchzgjJYz",
  "key12": "5ACwpAcZNJGfXSMNYbrpKiVJvMxTWV6iQAUPrz9uxyt1ZCVfK5WWtnuUSTyKpX5di3G9fcjgRwYyBsum1iy5tXbK",
  "key13": "5HLficFDfRg3W3Msc5XY4ejxvyFCV26epuGZUAGRqupChBRYtCCkzPGiSvUaiywWCjSS9eUNaDvsUcsRysdQViQx",
  "key14": "4dKPGV6C5yQP8NghVH1wWYXoUYsFk9Ahbwm3KRUqLjt8stu9nMkjA6z5rJ54kxQYZp8UhPFbHQUhgYZL5xW3QSzv",
  "key15": "528c2EU4kQYFWDV8bC8V3mfPkmXswx9eDjyosTCPSEzcg8vnnRa35MYzvEvmwew6QhY9sU22adFUKdBBLiz378ZE",
  "key16": "5W3PvW8ZMRhv3vGUqhfJhiKSNUKTk2pbxDzDwpz7mGcvqpbrGZoU5AniKQPDy9yQv5xnkGpzjTujwSAV4DyzEW9A",
  "key17": "5sbcRmuXSawPtMji1BtU7Xm8es2YY2SGKT3jxp6sihg4JcFYUgC4piMPFyU1Q7vuFkaJg3AXCnx7u2vsGhHUvaag",
  "key18": "4Vb3hDAz1NcUm5eAVLFzhfhW3wJrusUVNH7EMfqUtZvaK65n89BrHXVrrbwj9h7KDDRLq4ymuGLojQe5T7aL8zca",
  "key19": "3NMSDgdubVZErcNNvRedxFePEYejjVcUJcD3K7xprZyvXCCL4GosqzakRBEkpqVcEEnim1XkoWCaSXpEnoqqNMy4",
  "key20": "2zpCjkvkkJTLwAouYZdh1zSMebuAWZRZS3iCdtRZa1GwamebVSQqGpvsufCRh7qWy7arSpZJKabiqMJusn81b68J",
  "key21": "5ZycFofgoWDn9r1pRgzMqaubZ91xsajaFmKwexQFgqCisJHNK7W36Tg484UWc8MUqEwfcfM7YCNwxz3AFeEmHZoG",
  "key22": "4XqgJRJFbHz34zVmmVXRz4fa91Y78YwFKpzzRQRqYMUJLGAMDD68zAx9o7wymmMEyobjQ1JAwS1LP5TSCiS6Sem8",
  "key23": "3FJXTq2z1tXBrFb28j5vBaz7EVcrM9C1tJpiKqngxHB47NLHHsxCCnwWFTX61JrMstiNQYVdh4G98ciLHY1SMxta",
  "key24": "jvShDc7ZfUCPFgZvMYF6CFyNqVZAbjT5w4VKhWJ8k89zPffmpcTexPFxURG9rQFux9RPWGi7wHa7WdNc6S9o1mP",
  "key25": "3C4xU1reKngEyJL1bc78zbUr2Z2Z25LtXpcXyJvHxfqidvLowPZH3XqJFWWL2c5upoKcmLJxxujh15FQHYcRgC3s",
  "key26": "4DByU7MmJm1afexzj9myY7maPLybTCYZtGY2jxN9qNSfAgrHo6aBjGSQHxiK1iTUJJvy5UXjjACQ3wezDvLi8afz"
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
