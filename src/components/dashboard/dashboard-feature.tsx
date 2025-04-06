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
    "3187WmysQ7qbA4QDtMAkfstQhyP29CoLeC27jE6HMiSrfn2AWnfMymBZdcmAtPafSVbFJtsQ3hTGiEWDgW54sQ68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ex7GroqBR5pGctQ28jyDDru6DPLmai4yCAGx49YetFkMdsNHWf3y4Ruek7bJgRLPfVW1YiE1zyrcgtotRoEReEM",
  "key1": "2p2JWENM9PnvNr1bwos8EArGdrE9BN2SdNScAaTb2BKv4z9dD43WmERtu87QFEaQvSgsFuWKr1HGgedKU48HC6qj",
  "key2": "5zV4xu2Fdkn9ZbohR4P5MvjhoTs1ar1Hok9MjNHDpStG4zKMBvkWHU9vCn42MYaQkksmBnkz8fhUxrUickKNSqPP",
  "key3": "FgmV8nXCoSTYDfj1hWXU43vAyxrEj2pJNDw3ATiUc4CeBYuxaHrDLCaa2GfiPEmVGztxSP6Ew5VdscnYRbNg9Hr",
  "key4": "4ihxZgJFp8N3E84T67pnNMqEtRLfNbi4WN3UXTECrHeEQGHqqKpTDKBWMcgvYiShuEYWGXd3emUnTo3em4xwFzu3",
  "key5": "3BhBviodB5jP7pP5V15zFzc2zDfwf5rBFAqVDux4ugW2FobPqLjjn5rLQjY7A8LyFY51z1fhx3CeWrzPgjo3sWF3",
  "key6": "budrHQ4cULQioNcpVDtSQJGHEyt4e6sEUNnfC9tAfVurhtJggCK34zaqeruQ7gRrKobf8Lf923UePPw2ezFrJZh",
  "key7": "2ip7naBGWkW7QZsTmKmbpioPFEPbjztKJpyKFeM9TPSNa9yeugPCQb3LpjWUZ7PwSinhYVL4DzVo2nsYkyYdpQ4v",
  "key8": "64x2M9j6dSDquesFdQw4Tae5tguuqfGEPg2aFEDkDmCKagsNu5v27ri2yLf4QC1hWdeWqQiK6Y9FxVom7wnQgsVa",
  "key9": "2ugPpcJP8uKcb7CprrV4osoLPhsaFpsUUBb81WkfjW7fwS1kzHkx9q6v3gTecCEHniW9zJFUAMY4MLAjBYULtFZB",
  "key10": "2kP1GdHxWAvfJBCR7ntWL2CzJF3RzGxBFWPTbpV6XKY5vW6xWPhxjLLCr6qRrubanqJpgiRsjmL61n2fj1iQtSB1",
  "key11": "2kttZ8EvXZbYanqcUvEUZCZWNPk1MZf6yRRtH37DrJCagZKquwGYgQRipGraqoSQkb2cJSP79AorjbgG5HBkcQJZ",
  "key12": "4Ny7MLR3ZiMznw69eAk2x4h6351eVLBMFGS3MXVCgRXwbMs52UviWVKT28s4Fj8j4XeR2dNTqcQpHyP4bsgHCEip",
  "key13": "3RXUg6hv5kaSsULCCgn5hz2hMiqxN3ebDdin8jFm2fxXGhVMmmLD48C8YedNrZ9doB9sqeVmFXEVyy4VkG7tpbqb",
  "key14": "5NveE6YiPcB1JChLsm8arZVorJ4Dv1dLp5aG4AB7fhZspEFMasMDtsJtXe4a1cpGFim3U7BaR1hw85mcCU6oWVFm",
  "key15": "2N8VZVHdXteix7aMAdVUuZH5UuPQhj5riDbcKD6CotZPR7UMYNV7QQiRdySxnfNzrtP3GVFEu8rwMxvDS5D7yGA3",
  "key16": "4e3vxC3gE18ToRF45wLN6iuWQxQMcKRGPBGmwkUE4t17xgPsR2Bi5Fu4wMQf829SMqsgbujqRXyFttvhRP7Qymvi",
  "key17": "5Ejbc6HxUFuWMrrrzyHob1zJME2p3crkNTq1Hzi5nZThGzkqEYQ4Qi3jnGMuMT7gZrgVuiXgBSt2WHvLMEzB5Upe",
  "key18": "5dGZB3BKQWrEfYfGqxtAY5YxAWUY7vpC7KpTWvmDfafL6Y4BBGZWD3dA9hz7j4BGoPiMjoNy91Lp59wTCMDK3Jb7",
  "key19": "3dgpTAzJkvdLUWxFXTJ5zFzZg7PaBbna7qU4GdxJELepEosNdmQpH2oQufeH77VZXKyEteeCfJqm39ayQ3ZaYQEb",
  "key20": "3LaBGxSkebZYZ7N6A5UXoqGHu4ioGuB1XEGpjcAGqrQHDjo4nyH9NnBRCMYh6zN1YZuZ3wzHavSz54kNAaFjSg4j",
  "key21": "2q3TCCW8LQ1humPzVbDVUVvKkKyFYepLfVQBKAN7T5nq6uEhnwcJ28QRcrrGuFiMnyjGJ6scbmi9HEMHcNcRzgov",
  "key22": "3LeaJ1RQNaK2RAiAhwaXQXERNZBfWSHgFDigozxTdtveBFUMqtigDHUv41hzorqSnUoDmp8CJ7TFq8kRmbUt3iqN",
  "key23": "S9qiYjfbBoCT2aVTqsCy9XV5R3bVFchsGgScL1AqmAxL3X5kwC3mcuRDfBmC9BWdj5M5C6C1c9kSJZjWfkfXdug",
  "key24": "64zsQMTCNxvr4vJfwVj9XdTZS3UhqrKjUiQ4GJ6ZnWn2ShFpgxSQ1sFT2HeCUTBWw2WQZ6xkEiuEYZEcPWNSyfyy",
  "key25": "wmMFbdzcZj5oYB344xDJP6y1aHo4dd7UGtuKqedvmnKFytyKgz2Yo9QH3tf6kCBbXQ9wdgedBPqrh37LviPnKot",
  "key26": "3DbxmHqbXHot7KxKbTYCHmtMdssmxX5BRcjZEaEWWcHpHLWNUyfkpvWXkzL3A4TwSXaXTRGbECi35GbaCpUpkiAo",
  "key27": "4EafrgmufFg4ZkU4eBeELus2PbMmc1AqHBk3LqLy3jQU8WwnbzDGvM2JWY96an6UwaQCp1PVh1YqutEAqyHbxUar",
  "key28": "51SD9gCWMk5XhyZiGgKDa5WjRmmB7yW3jD91J6gkaCBBZSh2ysM2qjiGn6LEbArJ62xDdiLBYsUijSbmiaGW92fD"
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
