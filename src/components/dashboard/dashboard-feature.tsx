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
    "5HLyWZxHp7hdKmvhEBDBLdxAi3zoqeayuna73H9GCXU3fVxGYSMSk9PeABrBzfP5ZoBeCj75xmQtppCRETLMoa8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pc5t9tDTLcbdQWwv7JH7b4bCUgqueAuLtjPQkXpJeJwV34K3RnRKkaKGe4jQ2VGZaTC2DrD8qE42rMtpP2F2bkc",
  "key1": "5ip4MkAXYW3uBYqsRPzmbXmCaQH3Z68JkVDLA6STBg3EbVhDrQZC2ngfCkjbSswPavJg3Q8KhZnZTUmGkkiZhB6u",
  "key2": "VwD8aJerqfu1VLNCkUCrTadH8Xy6pDLbKmJNjA9K2gQ3VRFiQH7Xbb6uVQinnNyCw3odqSr6xzpgy4djGWEH1aD",
  "key3": "gnJkwn5eZj51ShtjhUVJ4cFt3M15fgdkxEYMPeHr2G2QifPQ8jRvrzEJ52XxiXUj4f8DBZudYSftnZ2MTDGkrqE",
  "key4": "5WGWkSBb3DZE3gv8Lg1UqJ89ijPA9KV9kZLvsgB8t6khNGdksAtHghbV7CJ64PZp2n8kNnWcCzBd8s8DND7zs2kJ",
  "key5": "LZDKqM1Jhfpk5zfkbjnDkMYHvCG4hY1E1XRX9CdwJ5cVFC3QPo4zaPi5CvXHW2jxXdRYGjkPejqG4VF1Ap1rHKE",
  "key6": "Gg3kzQcbAd36sZWrgwkncNzJ2bnrePTgEVFKHmivHNZJQfn6gANNXZXWcFkSC1tEaLGzppc8qPNz5XuGYbLUjby",
  "key7": "5g6vC9qTM2dxGjTS9iEbJdjsdWwJ7ZfvDHVE1JtpaZr3QqkCWvPLCyQ5MQbHTLgJtaDXhFq3cJbVNB3wPtn6Fk6w",
  "key8": "4xzmCfr3hNJDaSnq27v4wXMS3ymhjANYZNYw1ZKiuHRVXNyJJQkoJ9nLg7cDFJMdAnkLGZHki3Z3JSFsDrt9RekN",
  "key9": "4SF6KqzxWewk45rSKtSirjvYGkxSy97SJWbDtYPWzytohari5Q4JbvspR9UcR1evuLeiFSLKVZEXj7cdk23x1hvV",
  "key10": "2dRSATFb8GMkbMMM5rfxRYbesxQEaShXxDNLWbaaLbij5ruVudrbwX1tyxE8RJtBX31RK4uhBs44rL8HUJJV5j9B",
  "key11": "iwNji5BYLfoKy82paeSyxyR856XiTKrQfqMpqSCebaDRLfNj5B8FNkdgF6LiksancNDcXiH84bVionqAm3PGSHp",
  "key12": "4G7ZwhLqoguBXptWGg1sJGGE56P8WghvpDe7zbK4vPq4schYGGPEws1XVSCtFdbDGMPcsCnZ2iC3x31D2CgpGb1c",
  "key13": "54XpW491gx5rmhrHdhKhdQsqP1j4byFAefPk16YWDgMnYHvfaatXPNJ62sWNCE8qnYXXs3Ruj98YSa1Q4Ha7qupo",
  "key14": "5qzVfAEmn3h4TcPVgRFUVrucTy7gnB56D2TbrxJgugk9T8TimT3WvCKkKd8vRqDu2CkhMxNvWbJMeMJsh4JnnmpR",
  "key15": "D4QDqKw4Eepf4LjAETdZgz4nwiRYE95rQKxs5zaCFJy4RRBvoK7uVbFR1HsmAVcwR3cwKvSaEuhpmVbrjukhi1z",
  "key16": "2BZCsvZtpndoM4GjDNBJQY8djHo4LXB6R5QP8AKJHUzFQiwkR1usEhSGj1cimoZgAyL7peqDD8zzV3PDNbS5xRF4",
  "key17": "5xgSaJypCETuKF2fm59R7HQovxW3uxGGiYaHT5fJpn1Udr1djc8QffY5syecErCp573LS4cAUbDzUiidqgwYdfDX",
  "key18": "4fw7jhPPs7QvdxPCg1N3vFgfP5mr6DPMMX6rPRfuznXYmdbkTPLFSTxLbrZE1aB2GZkCeCgbsAre6o5vDgpMijST",
  "key19": "4aPLaRTSEerVkz5U51UxnDCZwZPXqzN6XdMM847YS3U27fvfknFwMnFyXmuAE7M12XtWSySzzE5i24AEGann6CNF",
  "key20": "4UV1KL49bnGyKeX2iRB9i2nEVkPJe129r3XAC63p1RoTUjLtg8h3TL7RXQNYZCpiPu5BYA9JnBF7LSrqZXex4dGU",
  "key21": "2QaPr7BXTFjjQwkSkPHxP6P7CyQFexbFmmwckEzbCPEEgJ2xZRB2M1osW6hRavBh4fv7sJw3FK9oCuzmNMfHWE1y",
  "key22": "5zbR7tcTssVnweVRbKkrmk3ySH6Sw4BJrg62r6sxnB24BiVG5ZbeYajuXLnCvX4Mu1Dub4wBjjcMRHiAU6Uwkjze",
  "key23": "o9Htc29C3QEkSZ1u5UVr35xh7m33Emm2xoVCA81QtRhCFbAHDnVyQjfUQii5U9izTFzeV1fa4Xjn5VBs9oiVb1E",
  "key24": "tARWqpiZYNZx9MBji7GbruBw6s9siuGuTY1V4fyrT7LnVPEbtii5oMbXHA1tLcUPLKzUSzibXgLArQ8FcLNR9EV",
  "key25": "5cK3MoYHNmfVtY1P9XrrUDiqkZtjXEE4be7PJr5VECSMpLinv4nwdAtetqzZe4AzAoPVBcN2WdULiUebGtqQb6dA"
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
