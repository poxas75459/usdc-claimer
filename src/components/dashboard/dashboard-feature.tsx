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
    "2yzDi2zzsMdVTc3GKYeVQY1v44hFZsmf5GNVr4y9odKQ4qBESd73cZ9Qpt2KBpgbJcwda45dtZuTsZjYbf153QQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KV5F8KAAYpWDdDmo6e4PT3R1j3z7KCQ2NqRTyZTwjWwQSgN2UMeWBLoNSJhV34WY5NecY4pWcc9Tcdvvotsviz",
  "key1": "5c44erm1WyYVRHZm2CMbeBrqwPaBPpEFEJfyiWVgCmN6qcdHEDr5rKerbcx8yHMBBUXUZ6JMYaseAWmtU56sKLnW",
  "key2": "J1MHrg9efdBoa9e89MMPkLcR5murG9wDZxQymptBzpEvnUXexSzmxHgyGczbLbomHnQF8fhvphRoV6Xe9Laodsv",
  "key3": "5ksYaCwrnj1W11N4zwipifYEC82Q8uUmAHPFTyLhJxfr4tDcNdgJwSvMzaHFxwVL2oAqA8Sbz3SBMDzAroduLKYy",
  "key4": "3mEBN1MLjFCK9P5oMQi5XZBaDQ6avdyydXoYEWuaiV4ef1JYMv9k3EaZLk1YGjGhYBbPk8ExSDdnRW4WF2YHYvcg",
  "key5": "SFQhRYBo8Xe4kRB17Sm3TUR8CGn3MQCjEznLBxGuDtrA7VAqY8yMWKY4ScgQZVVcdji3ZHWWA6HEKMNkDvS9RjL",
  "key6": "fUCjaaA46gZd1a3UNazCseq3KiWv6NYM74Md89dscpfM9Z8CpgCzZgYt8Tnr5HxckXNExmP9vwnyaNsnQWPgHW3",
  "key7": "65DPE1csEsmxMaKnwzJjFxZJMTRSxaMmK3FojdwRwxGiWJ7DQdym9EbZcngSw8x4nGPevf1bvqBfC1szuJRgKT9X",
  "key8": "xsymuWDNN5SRWp1qQFr4qxkBknQJsiyzkPjyucxz5iixKRGaezo8nPSFXeLJxqrr3uDWHcw1T5Bu5NAybYSjRBP",
  "key9": "n8FvbJqGLvfLVYrpVsbPEEVwAKU7V3HqTdyYud6eY3A3YmHohPkYuvrXBEjR4ghVwQEze4Pj8Zx5U23gt5NhbvG",
  "key10": "4uk9BxdBMkFZPWwyTwi9qkpWvMWpskaAuWeEmr63UuM83Ucdg4VC4zDyybHNGMec3MgTPjBQvq1JqsherWYoarNw",
  "key11": "8dmAbeV7M1ouber5bG9UqomzYNsNjUAM6yhrZ2zGHdMnscBAJiYCwU5f4WHGdQk7PfJGHY9YCrGaPAzoDiu3LMV",
  "key12": "4QoYvn99wuoL9ZExDJYTTrT7LGqJvQg9BbZhiqGAu9Bm77B2c8cf6mQPPk1nNRucAykoSJDSNzwfBNKgSgXC1apA",
  "key13": "38rwumcWdoNTSWEGSEkkyaRgNeN33GYTYBJPALZrkNAhyGgEuyRuLFpEHm8zjbmNHd6Awc1NDSjim84r5zqEbcnu",
  "key14": "3aP4Zk7pMRBDxRrmzb1X6iCxMGk2W6k5G6cyuffVurBXz4DGQ1Ljsg8mWKwNxyqvvjW7BqevoKWA1yKVkvF4y5uj",
  "key15": "QgcLoXrqox8JtCSbQiouC7nLBsAbfFa1YzvUP1vwZnR2ReEcp5YSfkGxrqHCVFEi3SC7F7rjupsftsEC9dUb1ek",
  "key16": "36jfAiytEtVPHZxQwZK3mfvhzEaHBmJvuPbbnXRonzuTh6umTPXvxqYeMedAfLFEE7ZA4y4dm9LoWT4wcAs9XnQs",
  "key17": "56oHK2AZGLjSWukLDVa1ziUr3YTeZpKdDMa8ns6vc3TgabNks5zMs7bnP9j7dC6J3kR7BTRYSRhk8f4FJrCfETxN",
  "key18": "3nCmFPTMuMaa6a75yhaxLBStGtuedfTAw8bSQrhdzdxGEjYijWCKdwhZcC6GnqTMUkxpWyH2adRE29xr2UFh5UqF",
  "key19": "5yT8VRmj2NFwBAvUWy16uJgoQHmmA3ytg1XVGN5m2kxr7EyjYh4HNPXHao63rjynYZhrgKrmeY6hbeosdsRFFKeC",
  "key20": "35mFdd2JVRS6J4nx8fMknQR6xRsRbdjGhpGBQm2gz9yYgtEyjXDHoZukqLqX9Q8kJEvcvfCPbZ9MzZdceTKqPRFD",
  "key21": "64uqn1wdnaD2BPqf1pmz1bmYg3XCcWxRotba72YNcpu1UBfZo3rBFjkJizaRZhf8PywGSCt2iWG51scQYmvqY48r",
  "key22": "2saAodNKVGS26VPQbrHRDhNPzjmcxvMskKQGM6uRYSpi5uEMpSy8VdThW9m3qUDBjTTXwUjWwzAxA5mU6jjFNRLt",
  "key23": "4nxxZAtV37LqeAqKmjTwEphc6oxXxCWsTDsVp3frk425FsbB5EAvThTS1JCERw4NGqZNuNhwxEMtfaqu8h2kcnJu",
  "key24": "3ToshrtZhzcw9ci9AUARUWT74v1P65omVGoTPd5XXXYoiiHCvqKRbSBPURaJWdfHTYarNXomZsF1vZjGpn454jke",
  "key25": "4MQneVAqv34189hGn2bfdjvCBMXXuxNN3wr3CZuAxEvbAS7ijWxvCNtdQM5jtYBdkfqLXaCEs4hSKChbyGiRmgCQ",
  "key26": "2UxvmKDGtZapuMESYWJZVfBZ6U1tWPwz8cZiLphvL5qM1LQPsoPeHweig3yYVwpasbE6YTMjBu2SDH673PjNCQT6",
  "key27": "3y7zHyWxTUUzUjSF2kEXsSciJxru9oSE9yGWwQjPLqnhjj6sQusG6S1gWXQefA3sHWyviAMAgRdRg4k162YUMWFu",
  "key28": "2bssFQkg31LWVuV4RN1npaGF8n8cdbkjAiHYjtF2dyipZQEA2VHSE3nGmSkiLtsbib4WnukBkqjmuCuyu7T4RCw8",
  "key29": "4fQAcK9P48pwGZHuLoVmAn3we81C1Y4ErT9RLqVi8viysY4PLLxoHgdXWUf9H5wa9UCiNw4pvsFcpzVdejyAvZX9",
  "key30": "fVPR9ukBeDS8dLULfyXmbR9VKtWDbrHZBuYC7hTUVBhAEN59QULqdGdmCQFMdoMXoAd1kDJ9AEYL27SCPFQGStF"
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
