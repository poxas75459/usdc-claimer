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
    "3f7oWesuZUaaMArzZxhPeEyR9A7ic1aASZQdr9WQ1xTUSkhHgYFobEZuy9taurhbbWaBdND6tNgyJqxmCCNgaYtj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zbr2RNMoc2NFobhkZNbGPAJ8oahASPWmjSEH3cEzn1sJ8FpQFq4yc4C43oztex6jFyVgzj4ibMqZpkcC8S5CzwD",
  "key1": "wG1EHVKX11GA2ir1bM1ssnqgkH2okchFBhQUStS65ukKdN1s3eEN2ibhh25bjQHYidYBMdt6n2QZEufVRUwDFcE",
  "key2": "1Mv2T7R7Qto4CREa721BJmcCseobgrNWhCzGqsKByV7prza3wBpwjiTkajsZCN64fzNmFbtavnidQnz9i7jTG3y",
  "key3": "3Eyi33rdXLnGvR8RehDdqnrLJcb23TjJYNDn67CvkUDzkvWaZew3Mr2B7r7n4be8gr7KUxBMvrrSQdJyxj3cA5wA",
  "key4": "3Uq7aHnzwmNn3TDG4FbdetkLjhXz5qdU4s1W7zUUUKF4i5zA4DEQ2pJ7fg7kXEmGugXrv7ehBbGYEoZJTEpp5Zoe",
  "key5": "55ThT5zqap9Ufq4bRiq1fzBMJbUSA2SJ5MNT65RpZSRvYuzk1czXxuYsExzFVYBdCyUJ3aXVzZYuN87VehVFLvNm",
  "key6": "633845nAqnC41CtzkQTHcBnowbeZQJ6CFSoHLjzWDXYCZgSAruZd7Xm5rgYpGyTmVPEiJW1dxrkgX7dJEciWko6p",
  "key7": "5JK985xBy3gW44g3N8ty3KEH7KNhwCwWxyLa1UQxSTzFmDYAkfuZ8n3YBiB1WFeXTfZjfcb5NRsJBYgqJ6Ux8MoB",
  "key8": "3W8avhen9WBr36xCPuQH39kuDRWCDUiCkHiMf3SQ8BTsjxs2V6Ghsb978YV1qA3WXv1AHvARLYiCrYgd2maqhgp6",
  "key9": "4YtT3JiyhozvqNDyfpswWpemjTXeQLXUD517EYCfxb2iXmV3DVi7UCcefEPAtjoPtcYBCooYiZ9gP1TFDgGDkwHx",
  "key10": "23ezmoNbbzwJ2PcYr7m3tiVj4hcgBSLbYjPLwv3H8Ahv8nB19jooYPvwQYMJC7VbwYYNysMbc1ma9Fgci9uQFHFp",
  "key11": "5DXi7fxtrtt1Qjxi5FCsL3StLKXptPcB4unNgHNkwbKXCp32dhjew6XRvfrGRvsNV1xmgCJoTpULsinXzPBfNcRD",
  "key12": "FHcX9NZ7hLQVq7iLRED7yGNDNhbQEcrCT4jLE1AG9vjrJa5F9kZGj7K37cL6sJMcCu7LVnygyFtQfWng9PKhGBc",
  "key13": "36WLCRP5g67BVbRFLEKb8QGcYob2AEe5RotHJqUAmUGVWgMXgbLRgSk6xf17dVtALDe71EnKHofo5m3tFr9EQ4So",
  "key14": "5K4RZLwxLVuxM6Knwf7N7268TyfkSrq96qzXWU3bLRukc7dnqCZRcVxUjrLjeWoDeXrReqXkXPW1STGvAXb5szcT",
  "key15": "L9HE8Kt6383pZfxzvf1qjEAQgh7zzfzD4RuXMQ3jyVkRG3aTNFtzzDSQEfifRc6RbfRnm8QFPRgxJCmnBeQce9Q",
  "key16": "4VcuNPfEu2xaRRZrCMy3KBo59bawMJMxdx4z2QA9KAgkK5Bd3Yq3WeperH6WYSsLdTwUT775zG7LSZDZMuCxrScV",
  "key17": "2BFaWDc7iLig2noL1XZsFsb6tDEhZZQUqdr3xM4NnUUafADNYbWGMF2vUqTViQzJhZGQ4HA1rd5ioqRBvdUzB8uQ",
  "key18": "5TTr4ACKCerpDEaJcgAgwpF1VRaw63XYnT66DfduV6qDR8aWaWjCBoUwzidirPKc9jAdepFp9crSaovWcVX35LdH",
  "key19": "63NGm2iqqG6H6inXsvtvS38CdoToueVjhAeqtEwQydDtVtog6AicA4Q6QwYgqsLoDYiSf69XyFsyXvrqhYbH5Bx9",
  "key20": "WTQx8tLzaftnTgNxX8zudDmFm5ThUDAsW5xK9NuKn5YPisruLU6vLCwkdXmfgVaVvvKdWmUPE3UhtoaqVBA1pop",
  "key21": "5eMkiZGDjcQc5Gv61KByNygNNWDP9uk5s9pJgAcSLrDch1JBeX2Ler15LFcjfmBKcJRb8mTN6CrJ16BDURAoAGnv",
  "key22": "Kw7iuJFXVNezgtHehryiAbYj9VTnC6JYmaFKzkk49cxKDzaUFYcEyP99KoDAfj5NoFxTE3Xka2B4bzTYqEaP81p",
  "key23": "29vuguJT2B2BqgiWZzp2NNCEKEdcY8xBPkfVVvw3H4Cr1mYLhad6Lin9QUyjUiouky9DJNv4xQ8ofqkWs3mRwSYM",
  "key24": "35psB2sgQPuEZ7ZvgrrRrD7RVA5JnUddxvrLWsgcNXpVgv8pfx5McjsTJ3aBxc1WMJ1krX3qrR6La4LzmZHDiVKr",
  "key25": "2qhMi4cMRHWRUmzcjsAtBW2JCTopespDXeocaFevn4qVnb2podZLaKtPXNPLya7jW6JWvjntgVHmCq55rPnjAXSe",
  "key26": "i4NzhSuvS3eevijQgSMDoGZjaVMwGWA98ak4jZJNSxvvUewU9xek1EkqqrsdrvTwLbKqkrAmbgchzFxtwFDm38P",
  "key27": "3Z4yjNRCApE5cwKWLHix1fgVq3fdDJqpL8RinvFJm8uBhpkayVLER9aVAPsvLhLMu3Z4xyZx4wPsXuhcE6Gsv7Je",
  "key28": "4k41CuJsmvW79GjJtWLu68X24gymeR9U8ridPohL2EKiFvTBfHXjqCZcsPN7TzPdia5bvypRfg6GFoGguTaJZRGx",
  "key29": "3bNvFKir3EDNjziizC89F1X8PwhLQpehSAZQ1f5MAH7hANciv5ufoKfm9cmZGKEwT6shtGFGFTZEznAoNK2DmEht"
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
