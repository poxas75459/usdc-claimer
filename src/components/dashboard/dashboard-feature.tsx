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
    "47zt4BQRbQx6JsLWBQkz4HVtp2pZ7Th8LPRpVWPx9NzqxqFkRDA8kGYC7m7zDYEhmMAicJSNH3FFLpY7uLmg3CCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64tGNNfeH6mGfAMJFP4tCXSY2nVHUc7j93UfEkTT9ZSjzDGieyYVvQHSQkYAAmiepzy5Krc8YXzBrBUdDHiqhY8N",
  "key1": "45ELahrYYJqbH9ojujMzeh5JAhvWDwPDNh9jr3CSbSJQFmxw3w3d9S3vhV4dfKesG87AzyCrS8xRoRgZmUXBWhA9",
  "key2": "4pkQzbp9eDrHQWMtsM7DDvWc9ta2rAM5wiohc7AAoJfmmbHRHtfVppQKiffnE98ULqwDsHPuiF9tAooiCBEzaMa9",
  "key3": "5nuYu5kbJeu5oxrb38EXaUSiF1kDpidZC3Z4SBpjqY2JK1AKiyAAgqXpTUvy5MmKvTybtjxnxFTyg9rKtQD79t8E",
  "key4": "5LZjSLmktd4ZYtkUSTAxnh2rZt7ky1aphU1J5oAoSEXthGRJSUz2T2i3v48XGWGrtzGPfNRxSn8ioMMQta1FQELJ",
  "key5": "25DDvzJLHwjUgkks8jPA945BC8AoK9EnBftLqE8PVWwaYJpuStAiXu2AsbiaLb7978zF7MRfy41HMqqrsrCRNEKq",
  "key6": "3xEUmirgZprzTp3pL7o6dYWEzKmxkZDnynCM21iErHXaA1z16wcSy4dVhv5FiCVscMwwPtmmHirefMh3hwad3XWP",
  "key7": "2aRioFRQ1m6SD331jpuFui3uXxKHsBLryeoaAM9JMBiLwBFmdrvs72GGeT33w7NFhs1Gz1EKHhrByrTmCAW2d9BS",
  "key8": "2PsckRFEMcZaTUbn4DXJR7donRemzZC4keM7ZnmRo4sSdUiZr642tpPaB9GqAPqitrprHGAczfUh52mkEqakYmRQ",
  "key9": "54YvXvvpBcTs9Yq72peTvGG9PfZEgNPLW97e9tQaS3x9US3RxadcrcUzauYockAnGixaN2iNBCs6f4kgmeJoxYZR",
  "key10": "2BBx9er3Rz42SaNCm8mwvUZsdFWm6ELtntpLu5za92rKbEQR9ReydRbAazM2cWBxEw1zTRGhcstLMBZa2gd6bTY7",
  "key11": "4B3it8MD7pet4mutuEXPosmZEav6Rz8M4X6cMEES2D3pNqbEWUKmH2y4qjv4KKvdRLqeCzGMQDMFVf7LrTffL4rA",
  "key12": "229Si6RVJPeJFi6234fKTGvUbYhuuDjjMybt7pdJZsNcoKZ2ERnaP8iEytzWFavcmtKSH4ScFp4U224ktAJECjDw",
  "key13": "5rY9Uf3LwJrgJ7hfdKeU4etHCLPkj7ctRuVZxB67Mo1EqudFS2K575KQg7JjZxwrU2cYHPQvKPYJ98ZJAetGwoee",
  "key14": "46kQAHjWFe3H7mqeTTzSTovgvFWjyEmCHWwi3AeJFoJ5nfhvyYkoBLywd4etKUapLeYRcQ39vwGDPYuze2uEzu3y",
  "key15": "4WhZxCBqw3px5EB4bFysGcczeqGQmGDusdqzWDWbzc5ezuuwWv7A53V35WCp5CQsNoiH3YJhw2WPhjreXbG5KzWc",
  "key16": "4pebBQskwJ9C8Bv98bBozSn6nMAEKL7ZRwM5N8g8WQnnU8kW3rTEvUyvSFbz61TuVWp3pckri7z2x36cx26tFsGF",
  "key17": "4MEZagJPCXGagNvytTtT9aMRSHHjTXZUY1ZmaKgcXrszgn7G28dXKRcwyWibp4LWS4cMYnZ8d51KVnUXxcMi5jba",
  "key18": "4mLoZ75c661xBNq7UB17crye1WyfFNrGri4wmwkg8mv6KCoxqiQ65AghnfUkZvbkf5prdprJMUon8ydMQgoF3Jgn",
  "key19": "EiTb9HfdjbKEY3aDUbRyBh9KBPqcZLiUexcbEp6ft62tRrF8TAp75jEPEEQfndvmMG2FZLPmePMoNU9hqS3DbPo",
  "key20": "3JWo56yfeFM8VbemDUCddru7CJxobVrGP4BWP9gu7kmRetMYZkqGDSjY8ZF95K6tY4a4CCM8o48NNBBszPwPh4Nq",
  "key21": "332MUZEYXnLsQ6BXVNJjmHf83K1rmehw9sn86PyBFFocJdtMZcgj9LiyWKj77vyC9Ho9yCzbhV6MAjKFQQ4WRLAD",
  "key22": "5vU6WVeaBcW3vYRbUp7TK2FvJZtwey8mX24u7763ehqC3rq9gPWw62JAvnUnNrJhQtiM97ynWwuwnpwaC28y1Byj",
  "key23": "5YwvyuvzADBvNevMq89kt4edxP3MDpHVq5ZWm89oiBBm3iC9VuEt1gdKmR3ZurhVkV1MNHrSK6vULdPj9aptEf9t",
  "key24": "6hP32paxDR9DmHjRBZZq6yC4Xemsjoudcy7UgVAJHN3v6MhifqttpxpXH6wVv5sL5xj9pzGx4h6AVKBTaB8GCxR",
  "key25": "4MXqAqGx1yPeLz83qXWRwJfAYf6SkVfMpDJsdX4dX5BxcSmCMELMpbQ94JYssJ4jfPL6uPRjgqq8HKqoMDuXnXwD",
  "key26": "3DiZT1DJXBdw5t7y2Z7uD7JbKzEMMK3HyyYiSAJcKNK4sbcvjhm7bhQBoh3EA7AcijH2EAnT8SJoHaB49o9pVxAJ",
  "key27": "2REusKcpFqxuFdvpNfYWdvFBUakAMhMAHBSFVaKdmDdYgpNMpKBJriJ6SvGv589ANESXJiNQeS1K7yNMoqUfcZAu",
  "key28": "5nqqEobK67rav5at3fTgexep4u3FDGHwH4n4m5AMMAuNQhQCg3Rjp6L3GsjcjMsP9ipk7HVt76uigkcKCWfeM8h3",
  "key29": "4FSQNMkTVdSKVV3PN4EUnQVVoTCJtevnBsvp72fghM5chudRgxQeH2sAvoWc2uYsV8a6gvAfU7hiuP6ABKccagGE"
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
