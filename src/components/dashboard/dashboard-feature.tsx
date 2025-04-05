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
    "4dNWFHZvSgC5UXFNJrLopXiQxdFduCjqKPSzGAhno7QXtrKwpvBAt63x43naP7NCGzVMwS6LYzCmcafgqT36Jo7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3R4jhi8GZa5p4Lq88uLDpZtfd2wVAN6Y3iNhENz7B7kqsrNtUqVhXSbaVZProBCMFGdybJuinF7ZtzTCPaScbQig",
  "key1": "zhEwzXFucfYWPhTAkk6q91RWBTiZUjPY9ugv7sNV3jnV9iMAATh4MjWGNnducARf3U1XEA5vkwnaLCWR8m2DeGB",
  "key2": "2kvtLN617QFwRFyCo4LNcJ57qJf5iE6Csdt5M8snFzrQer1ezwffnnTCWDC9Gz9EmBgvoQ2TBpzocwmyoyUXgiQ",
  "key3": "ujjqTQEgALzqvzTwujytTvX5qv2pvGK5Xfq3WF6452pXjFuvpTge5VTBKcdvK2f6J7WhZW7g6xfg3f7GhgoSg6Y",
  "key4": "277qeUMTtJYz8iKapoAosx8ccfpVaLAN7t7CXbZZzfUfUiL6XJt58teccfQ7EJeSc3Y5MrpAfxtfo5vJoR14D1wz",
  "key5": "3sfTjwv4Nf3igkaCSQrCBFd8wAvkkMyQSEkcx1HfJPSL8UgukTH9A1UffBVp9aKVa7hjrXxVpxGpSpqNMZ6zybNK",
  "key6": "2vQtuG3NxZoLAAMYAheiJjmwYKwCDtM7mwWQSANKWDdpM6UDXs4ZfSzGxsRxGbBeuyxhGt27ZbNQaZ5QfTaNXLXr",
  "key7": "5KQFnwARnZ5XeUS2a8LHjBN7y97E7hzSjBhtm8N2SCgVFiR4MJR6dgsFMfwkatTuRMxzcE6esCzi7eB3Bz79DVn7",
  "key8": "2ZtrxmFXwAYuZ1ub8F7YMamSFfMSv9Gww6rZHLVpRhX7mFDbySpCyeTmTo3eWLXLNJitkCf6D99dkm8tWHkrfbUy",
  "key9": "2C8Ej1fJhWayNESKPVCrxbB8sSBnGe1xe6bAmjqCwLSWQ8LHxitnhRiuwucS6RBhsLDqn6CdDWvhAVxzGgreHjt1",
  "key10": "32RNtJdSufVpDVotKAcjw785WyM3UekBxWazBogfq4CwBPLfiYCVYRZWeu8gEchy56c1cQyp5yTd72B8TzPwaw4a",
  "key11": "2F5UDARC23HgTooCBjikxcLGKkNZPBNB6L4CHheVBthYKwTBdar6Rs92Fc43LC4ykj5feDCdwYLV8y3JfDqKt8Sh",
  "key12": "53ubLCRpYo6y9MTp7oMLSz73AH3TSHPeXiWUJtwTH9rJRtzGS2CTYsBnCwXLmxVtsGhJGGX7L51xbBJvGsQ9b1TG",
  "key13": "FVH1C2rBrNoPr98uzNvdGiQexPs3P9ZWuhxYZnfke61fa3p8yWq1qPm9ZLbbvW4bN9Nw2B1grZHkkCdT1dKXzVk",
  "key14": "4mFCduKQbAmpiY6iJAifS2cCYLrTm5A4jyS16z1UutqokMen8Y14Lo9SUyFcZs4yAd5NTb2dPgpftKwQ9PdbNJEY",
  "key15": "4JNA6iSACxRFWh51b7m5uzDKYyzdqVNJic1jtTKjoTgx8rfUbkoZG5oZUEi6dqGS1JtQ4hnSgf6FSMmcESAoSPKC",
  "key16": "3TixXu4FtH7feApWNuptiPq1yfjGbhHJDSgpxViwc1XZBPyaWpTrUSJMpaFjBZVLBgmcVk5yESZatmb8PYi9zo1h",
  "key17": "4t9roCX3eVsG8N3QX7cA187SsZxKif3WjA4rncBEQmowTdyT7ZFSrhttZwqW6qSu4TijEiiGFmrzZnbaTZgPhwZ3",
  "key18": "61wQ4ttC98HV1GRmtTNE9WcUkZ2LZTd5ep1xKfve9TrEQEbDLhA3yxpLUgtWVGe4ZRgpK2MEuZnDxwx9xAQEH37W",
  "key19": "2UeAoizeoarqEL1e59hri4Z4TNXkminisfgKCfKpkc4FWg2iL5E8HAPmADD7bCW3HRg966wcw1rdfRT3HktdNZhS",
  "key20": "2Za1NXdJLmBPo4mVragRX98NvRL8gfkQN7XxT2VWRshLR5rqLczMpvhAqsvoMimRLdUYfdBRo8L3T8TvWdBAZ5SX",
  "key21": "4XpBSAA4x97xitBbGCTDov9wtSvtaEvDJKD9EZwYmoTGq45LMGN9aT64etdZRaL4bfBwdDWkbRmLFwxXM3M9iHTx",
  "key22": "4UF3XjsdeHthrtJQosdj5VKN56gdHz9S8cJLE6YDsihFmmMzS88R7xcWFGNPjKb6pQJQ1Qo137A7hXL7R8oL8U1n",
  "key23": "24P54BAGG7duUtCjus2HmVP5WuXRWJRhTFrW4p4Y1UssNbhdqNwhwwbVxxepfMJzJ5R6rr2cVHZxB4mPRdTnivoY",
  "key24": "3qoKYFp8cRrscshRFoC3jLUJv5hoVWGDCpeNeLEcyT8gkivZnb8KkQHXkc9VKLBDq3DuCXdhpjBiYHb7edj2eArm",
  "key25": "4ED6jnfGdobmQerMa6p5K7ESqibHpECtAzktELcRxSHWUsZj9FnnEyVZbBTxkQTKzRh7ss3pkbhZBBcsLeE7LCgx"
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
