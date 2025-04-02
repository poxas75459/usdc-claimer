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
    "s8DkwVHnXUjW368YeKwjTyqNUnEWmTpAsbeUP8LnHgCvAgctQPHo1AqMUsBgkNxL7ohtwdiFaP6wRiGTowB4Jsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "79FFqEwm19MHRvMxb4csrmK1ru8GvfTwSGYc6rnFbXMFVVitajRgeyser9wwK6ADgaQTTqDUECk5vTrzuygxzju",
  "key1": "cBYCj2MduGUPtWBZHcbos4MSRtNtoaBHHmMfbZMqAZ7XbDxjhmdc8fHWvWMS5SMX8YDV1Px8xuYYhTgBFKnqkbv",
  "key2": "2ocLyW1P35M2N5PRXDHVthyWJKSun5Qa1MMVZkY4KhVz8yGCMS1V56PdK65eg9MAeUjFYLbghuYzB9kemJqUxEGk",
  "key3": "3kS9mFiQcvQsWrCT5gSgL2i7iYnCfsCes8mE2hMXWhHG7oqU4htTT2a2pYsXB2SWgFVs7UvgrJwUJmyUVMwLZW4W",
  "key4": "43Y6NUS9bVPt1p5TNzGe7xt5i7JD2jsmt8od6D3FJMkkGcjSbnCJLxi8AUSFA55ZfBbmdY6SPq5Ne9vpqnb62TFz",
  "key5": "KoYZuUxP2qRwYHCb6oGwDkPGsHHvaHzTHXhigvL6bwpmwS8JFS7zZxnFPvfW5Bvg3Wfv9NhVhHdi6y9ho1CRQgV",
  "key6": "51mdGzjrz5UiGovxDSX7WALgcuTudUcsqxERbnAsaxMdups7oP3EVsLw3btVTVZmZQQFaZ6ZSC8whWT5G5FgvgVf",
  "key7": "NnjFsoLyXge2oULeq7HRsENNYoMSx1bwLcY78Jvz8XVnfXZ9VNZPQ7EtwUCk19UnRrPSWtc5RHnoSCCo6BMSY8a",
  "key8": "3DYpGwGowwEuM9PXmSbeszP8DS4FiH1nUtYK3iXPdEN7PvzekyqZ2bqmywDj2iCzTjL75LfMtjHaqAg4QVKc8ZWU",
  "key9": "4RUXBnhLL3yfJiziSDgSKPP26nzd95sZGivAEx1uRF9rpzJkznvNHakUq736HYN4Ey8RkXnHXFidE28MstcrRbXw",
  "key10": "5VwLWGyST1daKcK8MGfZRAhZBK1ZqniLMTVXwSUzS6umfaM36gPMGYT7q3QgU1nztGmyhNkSww56D7ReguJ26s1D",
  "key11": "4wGTPzapEn2eXdQmVChRc6MoE6YGG6UaUrZEGCxfwNKJR2NB7mZ3uLsiaugGppveo1kHiftsDWsN3qUCjcKDZvTF",
  "key12": "3LqMNwXn8h5VLaKZREgN4SSdtYaiyNmHB9ajCPsj9xrueJnhNdNsL6k8NDYpDNm1oTru8DLzqu7y9CthMYXPvNa4",
  "key13": "237RhMcVHV44sxbv4BWEk3f9d3xt3rbQ3UYn6vgRPDt5dUtF7RfmEnDd25Ca7oRtu7EeMUDyH3TCV1R1UXu4h2V8",
  "key14": "435Rmgh7q5ckf2gK6oCw8DPwWcwgFQcmYYQ4W5PkNJwPHYTDc6CRgCt8y8KGeG35wEXpE9u9pxQJ566Mv8rQxUya",
  "key15": "4Px97WpySSJqwkWwBb11n8RCZqNUHWMaYZpcaXQAMHyVUFbG4hcWjsDkJzeE7DejFiaeCnVmBa4Puzfc6svHn5FP",
  "key16": "5eDQNdadt2LRdJgfDAkTCwU5pgr1XZsX2fLzCrrcdz3zhgMUK2DycSzreKBpBeBNgs9Ecf8uZQdUNd648siqDP9G",
  "key17": "4LG5PMW6Tqa3Hc6iDVrqbYCforpQRhU4XXYatLqQ1ziBuaixM8KhwkpV9pdKboeFCy6KXTySYTPzii2h8RoPGWFe",
  "key18": "43Et8HVoRe3UXEEw8XMU5KNeJwdR7x5HEGFFF7HJsxf3UpM6EiRQFVSvNhpbACgoUiQb7mdkpoZwnHvz2vb25vLM",
  "key19": "3178NN6XsUTz1ZNKZBY7trxFGLBrDBRGCsjW4YVzwxBr8T67wrG8FkkDBNuMJpuoprmoQk8n1Xfyxqb1Eo8K2VS5",
  "key20": "4ABoN5Yd8Hn7snsHdkD3YJGxG4xfeVJFs8ZcAwTZy31NxEWAD3TopKiPDVTLiiF8UQtQuwEyGCz9aMoF2ay7CQmo",
  "key21": "1DTGm1E1B7zqBngweBbH466dUxUsbuWHYoQVGtJDWw2GkMzx929GfTfLNjbPxurLZUGC7Ma2gEVzBr5aEQ2NoZD",
  "key22": "TWTNQYbpSpcSfPADgUtVND3X95eZiWMmjmHjvG5q2vc391rxYc4k1HHm1WGzL2XfFtD1Ct7BrNxmPrZFUgEzfSh",
  "key23": "4ZWgBPsWZoaxPWxhSLMqmZhQTYqKXhhbSJ3fA5RgnorXA7jFRKtJMGfs9XDgbwr7xbU5qpMpXUXvRgC6fhtREdNT",
  "key24": "26vTxJ1nRWjW5eSzdUhawoSMcEvo8BXuT5egvqACfVgwQdmXR8sMUJEA9yA64xM4XpvuQCLEU1aaTepYGa3Xxm66",
  "key25": "2rE3mb3EoPefYRLsKtrkQmhrLnok72V1gdWZeeGyvYY3GGQnByj9vQf6GGyK8MQf2Q7k7L5Lf4QgMsJyqBk3sqTL",
  "key26": "4558Rw9YpYaWgmYUnYiwL5NAdZVG6sinedTF3MQNeoHwUHCKe6u6Lja4WSTjYZwaZMC1ht1k67muHFXdoXhEtaAQ",
  "key27": "2KMj1jPyDzRPJqVy6DFTTyRnRMwmfj9piZfWkCqhc6fM8NU3KZdtm67UFYBxjA3Db9uwjH6bqdPDLR8VYNkp9R5Q",
  "key28": "3EcJsNYwZ7tkCLKahDJmtq8ixqtVS7X3mp1UiBgCdhkwmC4xvNHM6MfQK1WwRbaxRUoKaHXBZ8QepEdRg6yoFrya",
  "key29": "4KRTwjsTzFg8DemAdAhN7WYajXa4dMWRjKZsQWbQMQoXJxTaGBpGZYhbKurxV5AtKw4ZDgr1gMSbJejjmqyeSDLe",
  "key30": "67fmKZ3SCKR1SeE2z48uqRTH5ejwN4VvvnT4VB2WRTHMqdB2TJHC7LzsN3dpG1WMD61iMvAVbeYPz2o3VqYwBAwX",
  "key31": "5H1Rbi1VjgLDaR3poH2Hw5HZcQBqFAGUoKttjvkQWH3cx9MG8nwLJ1GEfVgBJeR3XcRmTVw6hvYYvZmjqFcsbqqu",
  "key32": "5ATe7L3LAVvhveSqiFuoCdn8B5GfNsiHEZGvM9Cxqk13McxeJmsB85hpewkCThTpNGTaVcLK1T21iGsHPjfXow8T",
  "key33": "2Xju3HYk86pgifkvnCYbFTsqTp8i7azfN9RnrrHKfQpWUjsX5qbWwAJVZueVNykerXbZY6BjdVH4C6VFzR8p1PQB",
  "key34": "2brdEMYYYUU5PTxqnqijr1ifqoJ4HSrcMWucBBZ1ju6obg7cpTpMoS1QnfjwqWp9X2tZPsbGhK7Vnkz6KzGpGoQM",
  "key35": "4Eu54zzwe5oXCxt71u9XCYmBVjWYfhKBR3Ay4BoaVmqmXfkmaubKkFU7FnvAb2e6yXFYmwAWR6tpiJFhDvN8DtUg",
  "key36": "2r4Wv6pzYH3eUTLpJpPPJoSMsNugHJJHYXXfJSP4wGfuSgsdqugFV54L3rhvMxbmZkqHUqPgbdEorYVaoXzz9zDo",
  "key37": "5saaWExzHX3K2dGypqch15XdYa78Rm4YN8rsMUyJgaV2uG6eWcRbqMR13MiRi4dkp8HspahDts1dF39WCxr6Pmn6",
  "key38": "3sd8fKfMx5szNKPscnD79UhpVoj1qDeLKoV9mdunmgYxHK82Lj44Qmt1jzRmrWN9AB5pfFSxHtcRESaRFxGn4Wwe",
  "key39": "3q5XePs3Q3a4oab7tAB19bvbKfT9FH44heGURUbG9E1Y1eD2HvqBqWu2xjszsMqVe78LPsYNcf9YvpuSGUbHvTMm",
  "key40": "3G5bDYKLRCbnq2LiuWtV1M68soQeJusXmxKrTD5VWkqNRLH2n1phduLWxK5LCq3Nfs6ZgvSTqvc8FrGSz855zAFk",
  "key41": "31XDXQF27H8G96XmKQtfNzTfpE9kf8NmQ5ocyGei536KBZWcaymnfyeRQ8mhzCDsoMEsRtLcZ6ZDEygjyBQSZUnr"
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
