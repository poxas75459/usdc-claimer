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
    "4N2Sn5vrF8HZNEgN9HQfRwNNwDoZnGk2bQQVwPKj1acKAPHqNDnYTSWk3M7cdv5m1arCXXTwC282vMATv2WP8hmd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2psQnYn2tH3qYp2u53yroQKY1qCML8Xs6jrCbxH3NaU3MM7cQNbQBxcs38ETDrmYsuKcf79rRhithfdAE4jatg6y",
  "key1": "5AnHfThdsQ3PnBprBkH9N14Wthh1gEiysLJghTLNaUW9UajtJ3XkqX8Bm7ZN3rykzNbietFn3MscrpT35pN9ejky",
  "key2": "56MvmfdMvEGsZ4i9n3vmo4dQAxBpFgn2rFL9n3yR2frUbf6kY6RJH5kaNMXM1T45bdwL56J2oNMtEg8NUXF9Vi2E",
  "key3": "DESp6s4AicEfpbNcL5nExW5pTBWAqCimKFR8vWXhE8pnBADdW4qKqjmMy9kP3ondqPdX6umywUs1wi4k4TyMnES",
  "key4": "3FCcYQxkDAK4nn5Hjb3zVMDv9M99VagwwTZiLEHp2k51hdF5g41FZsJb6HfuM4o4YYNyAjMUEixeoCuFMSghgjDd",
  "key5": "5VukamRd8pS6TAeY9G1gX4RBrH9yND1T9YSawc3ANbVJyUPKdHWZrCkGowm4RqGnS18AkPTbdpYv6sFKdquBnJWa",
  "key6": "3P7PDnncBC88m2pFDezD5oR7LV2EG2qHzEKv7pg3XZXqbcbpSbEcEKx54EQJBR5qb1Yi5JJyvYt2AMzGqA8mpp5m",
  "key7": "gituSFcRWVZzi8kJpFuBysUAyfoV1MRqD44LwUZnKqpQy3SUR4GFQTCiMHBaR3PUidQwYGeqWVCJt8Mh18VEEzW",
  "key8": "3eeZeFtaY2PGSzeTgmYPRyN1xEgTvF149m8phY8SKweNqH7qFTzm4Mx6tCH2zg3ja2M6emcc21dK4ZNUbG5hDFhx",
  "key9": "KTpjBYccVq986a2dNkUQSTfP278VjeKW7GPSiHQMNkYZdY1UbgdZf6KkDEy47soayXPFxRzg7XEPnJS7Y7jDL7L",
  "key10": "4tLGeFkTUUYpU1FpGR5aCUUuwRESSgaB3zYzAAoRQ28aQnfpsiXKiXyARfr7Fo2ZEnRyJf2iqe5Upc4Ar2rvcFk8",
  "key11": "5zCaepDWqV24SKv77PgxehsT4Zox8BLRJ76Kdku17T3fzQdtzeRRKikWfd8RR4Lamh2WVGd3GA1dmVtCrsw9FMg3",
  "key12": "3s1AVSvgfsP2yGgVF1DLxMqn2R6C2y8N8EM9e3f6cMfLSZYpgz92KRHPiQritG7uEgGMpngkAgp1FCqys7SqYYU2",
  "key13": "36RR39XDJfA2Z3CvVEryfCpo6eF3mt1PsBM8dHqoFXd6SnYzTg4C9vXpBRXZ83cEKdpEoksZE7r6WBhhuVX6FHUM",
  "key14": "54oY3kw3sGHBiYj16SLHYox4MUtjD6wwE5xwSjC1ujGFs4etcAaRYL7bvQDM7mmaCPUF9CJicMQZyNj4ZmfSfHgP",
  "key15": "2nwBVmwkSp5UPmwWXmTFeUnK7SLReXpVcZyQuZMtMpdA5NgGT9qtZrdxqSpMb7LUJdnVHpbc3b2dBjiP6QV2ucB7",
  "key16": "3p8kzC1T9EDHQmYLKwGRk7LSNR8rSn7UDoAfNYnyL8U7tq9jKZQU6a7MepCsWUeoBPsqojcUmHZ1LdHU7NjgzCu8",
  "key17": "3DGeozi94YLB8REvEA99ppnMeMjCtcSsBHWZgofALkeNYtfcmGjCpFpmgs4Tb2BuLSNuN7fPSyr9o3j9tAR87Lx4",
  "key18": "3ffhJMYwzkHjpvG7aX4dZtozRkK2S1Xgbf37p4bazR9zZezqjjrXNX9zo9TZULqHtw2UxLXwcmBY48zwYkqR2YhS",
  "key19": "4GzdKQZE5NyPqqgEudoVuZHPsooLxWQFXnuCKMNZbHdKRy7LseoaCuLAAQVBUBWK3Rhpz2wh1w55muPzEG8r7EZZ",
  "key20": "5TGLDip4A2J3Be5S8fSbybsZSjK4R9h56SM6G1z1Eb75GRrk5B9FPsb4GMVgdSjntZkQ4GZATUXK42Gbc48wLjHW",
  "key21": "5CQDQcqtyi4zuoBhmM4Vei7DrVxJ24W7FHTgChgMXxy57FGuw95y8zXWMLn9F97R4199Bp3vdmF9gRMHXJBNKmPh",
  "key22": "N3ZEn5bmZtZ446KamgAWzq6ReTWC8fFkPjcvXuEsdWadWcwZ8SA4Mv8GrYYXG82zi9VxkEHgg8sdjuDkvV1vQwo",
  "key23": "581ekPeevWoapN9tf4aGiwumAtWtkZMdXkphxkzfNw8DQifpTocKJvKUro9kHBq1iLLCLdS5nQ2g95Q6qTat88Sz",
  "key24": "fLUqCkxoovGZRVhf9cfFRGsXhLt2YKuYBoPLhVUF9sP6rb2QM5jTJNdRYMFkEAhLMVV8JzJPjQZj33bzSgdE6fz",
  "key25": "4pCxjhaYoczLGzsFxzNoMRTxi8D55CTrn3XGEeLHxiTKdExDQ6Svwf6Uy7gV5Z8dT36D3gsTvWEckefckdKCS67N",
  "key26": "4LLjBFbRbSiN5w6kJxAHHPcshsyEozN7SDmWTbUbMCCeJxchpPiUbYpEqCYr1DsyJNKiMQcnDjo42okh6bz56mJS",
  "key27": "2rptQ71gxNdXZUSqTL9zvXHrR1aYDoYvfbHX8tNgRUFWVjLBPofPK6PGCEpk5WafEFnZ8RHsJ4H94i1GhNMDkBFu",
  "key28": "61zXQ7JGVsQv1SXhYUBtQ5cXTT3bZNEmj6Hf7hRCpjAMPwsJR5SSWTPCpMDnUNmsjfgRUcCJXAkPUNmcAVUYnLuZ"
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
