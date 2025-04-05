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
    "BC7fecPSUr5xqLsGm4erXpc2hiMCXSs2zKxnjfHJEchufwKoskueA1r8pNrdn6aRGrurVuHzm7eYtyWH33QXtnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hu4mjx459ubT93riBmBR4f3darwj2DFqkiDkx3Tt1YHwJXJo6oBTvwu2EhKpmPPBSZYMTrzDq2A5XP8CPJ1yyGy",
  "key1": "44i8dSKcrYpztiUfvdHwpAAAmM7aUXJSyNH62r8zkqJEoAC8u4eFzfvATynxPyx81sxo2spW6iy42xEKx7XT3HKx",
  "key2": "3XzjP4WGCbdcjhEdMBxB2DfyT3Apu68GZ2euhkf2TbPnypANEPFTtV28tikdMbS5CkyYjzzHX6PBt6no3cWRUAWD",
  "key3": "3HGvQkALU8DR9UKvfDfgyVXRz8LWboUaYNhZK29axWmeWKSt2dcnhMDqZcUreXarQ4wXAJ45Y2Y7komLM84ge5E9",
  "key4": "AS5ztR4tjpQyviUZKCDooh8KX4gPdZJHPoQGBoRAYhJ6TyLcb6zdgcGWGkA2LiYE57S2Q2KE4SJZJcGPHp8gJGt",
  "key5": "339k1mARoMXaUB7QSBCfMJ8bDP93TmjsorkABEYHqoCd8Pf6Nw7B7FdEYj1wubpSszojUrf8hdutBpZnjGYCa3Hk",
  "key6": "563gAhm9wmLd2TXcGMkyEYGpkKHbbkfE3apsrshWcqYCNEB4LSzcw8EmqMXgrZ3zQPy5JkqwCyYvLLWmWKMozGGZ",
  "key7": "2k77a12UtBVdWNd3pDPvtGgQs2JmVt2dXHpyxDn4aAuGH5gYViXSauruKNRKUv3VgWSRx2muRd6QBrUqhqd93ovB",
  "key8": "vwBSZkiVH54wz2g5ubSHazXA9nWKjU3p7vV9wc1rASX2MCTFq9yYvAt7HWo2QdsrBrbzw6EeUErBciRXQnBQaQS",
  "key9": "4CpbH7mFQfYNR9uU1RKPcfMNHYW5a6i5cUVKaRM4K7kYEpyJFGEsdhEjeGHkQeNaDbiWSfNdjrwtqctRqUnwNbsE",
  "key10": "3UZhQdKwwCyEuHYZGmje6CyP7X2ZwjZuAUT1oGrbDyffucmEZDLzUSD478E9o1EkQNb2FLbcS4jdkL5qdkzH5Eap",
  "key11": "5FUpNCR4FHAiUde62aQwBiAt5DBqD47gDPJEFchgrFmG27rfLmCSEJopy4uryEDD5jMWguXZ515EJakRMvYBvYb9",
  "key12": "5UfmYEJ4cR6bLnjcG3JG3PzTF6uveY5UfA28mXH3UFbR6qPYJbx6r1wpuoqLdBEJaS2QHo81eUK8uQCvr41tvDz",
  "key13": "VWJwdsozTLiuQuVuKVW1CwrxDcJbC6gCoC6kqwYYz2eDTThGmADMc6YGdhujnP44gPHp1iQr2fUfyaPPmrFBe82",
  "key14": "3ZtY8av2MEixFYqHWowTPwLhkT5ATvyZJw6qtfcmbxoxbbvDwGtxXtfZdZhS4YqsK2jyiefXR9XtB9KmbSDuMxDe",
  "key15": "21Lfcev6mkvG4HQvZb1caj6KbWpx98xTo9EE6pEzKi7kEmNp9NoUShE1iRW1TUNqe5D5AV496oFJNgZK39H2C39s",
  "key16": "3pE5cwZxg8rbTSHJ2P11Pka2WP3S4U6skTeYzZJpGWF31RE6SnjhLyHMRWwo4671wTFNtdv6igyk43DFwYb31z43",
  "key17": "2Qxykk2Vj4mCdTbF4Ug9tBv33YqKqod5bhE9sDiQLVeMVNvDy5WNX38YF4aNxD13jHFkcPckRv4QqFDAKLio6NQE",
  "key18": "2iivPxxqH829nNUXuoSgdXKXnE8cV6pLEe3svcPLtvmfvrWT19Jt3bqRpz7WyqSVHNViX8n98BDKsvaTAfVMJDrD",
  "key19": "481TRxGgwtjyvVEQqhff6RunjgQcHE6o92Y9beA8xuKD6CYT3teSax57pik6akvRqvLWatVLSuFv5uzvp8GR2t96",
  "key20": "478migQDipRZzgh7UWmSHBWccDubjERHTC7Ym7v2tZeD2hJU6E4vooErZcR2hPWKTxS2vXThb777jd3pabVdgeXJ",
  "key21": "4G6gy6m232VejKbY6mHnDFAHD23rDhd1fySZAeZvQKA8bepRb3F8KysoLsNeZNd6CzLVdyXVUpaEJrxezvBFm17g",
  "key22": "2cZSbRDmX7krF9HZ55tW9PRhXqbb6yWKtsNj6rski11C4f4RoPHc51AyrdfAceiUBWvZqU7MPKj3j4HUPshonPcD",
  "key23": "2JvtCT87drD6m4uXMC7216gMQTgiqNNG71b7PUhE9XhygccRDJjxXERzBATPC5p39z1QUpcEX3ZxQTFttoPxdNnu",
  "key24": "2qaEgEYvZ8b68KfnsKKk8xThAqawXzvB1jXohYA3vK25Fnh9j1DZcHv7ugZZHHRNsvQxqUb5Xmw1FdTJvypzzgn5",
  "key25": "39aqmdKesogMmjztzFs9ymENHudjHaFmb8BLYDrzmudUGzzD3MBVF9HbBMGBUytzC8s8cPGVgGsF7bJWUZ4EAupQ",
  "key26": "2GeXHt1rqmE5AcTZ4GzjW2D3Ti7uSnPr21T83kGaBqhJqC6GbnL5Gi95iEiWRyhMfY2vhm8ymQgsDELZ9Mn6h7SC",
  "key27": "5bireKogNd8N4cykNF16MWkYToYhNGrAg3zQsiXhVqC1cLG1jw9iuPAPudeDC3ML9R3fFeb9Lo4G7dfaDDiSgCZP"
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
