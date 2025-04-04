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
    "5GsR4rSh71vM2xmDKxy8cx6MezYEqK1coPB68sikUvkfWvEkjoFKAJocGqFzWkuxe7kNJABzRJG5P1cgoeGNepmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WnTYRe71YTciSzYZx8e2kx3tiYbCvyXPfEG3MiRAcdkhufPhaoM95BysqbE4NvZfFu4ojMvuEsWTDKozeNjTSgK",
  "key1": "2xTvTE2CtagKYeNu4V98EsjtyRbiiFnd6TXC4tjcod2T2x5Dn1yGvsMq539GbYj5XqEXLZDdr9Btu9oNerkxb7QA",
  "key2": "4ZDYGfS6LsgMQMPbRawHqVDFc23wK4NmVFY1MykuNw3K8xQrkf1wxihdx97BZrj4UkqjD4r8T2F9VZ5jNSMteBwi",
  "key3": "4XYdZyAPazCTuiFvSpTsiiQPTF6b5gXs41K7fekQUFS5T2SDadf1tKeNvwqvVp7CbsxgH4Xc5wNF3JyEDPSGfVNQ",
  "key4": "4YVYvDpcLSUjsM5hWrqYexJbpWPLRHBDAFRVkQvEwkfwnVrFdFprQ1wmJJh3CuDDX1CwSHHjyeMxu7Mza7jq7h4V",
  "key5": "3R1pbmjxUqFkxLnchz3g9rdrUH6pMKjNJtPpvNk6cd7EWnSJje4RVg8r1kZyydzLch7QNWcQSc3euR2x2C2cbQgf",
  "key6": "2fkKyL5mpYekyx8DCuANcWiQbbjcYm3HUurXrZ8AtCStH1zJwhqum1urQFESGFv7AMFCpc4iqwu77n118oryaE5X",
  "key7": "3Zh1BZLZFUXudJpeQi1Nzdt81VqNvSSS3v5jAeghKaf3EV4MXqQE2xxVkCpWwRbi41BB9vsAB21Bc4wUGG9XFTY5",
  "key8": "3HTo1sdKVgSsKcDsGgK8ieJLookBdx1YQafbjQcxU7yNdfRsmvAo6L7BpRu9sTuLzxHzn3rUuQCxZwS63pQewAzU",
  "key9": "2nLkUw5EkBQSNk4nr9swKCfRGrqBLNNSc1CLdAYf5JLMAg7nXAynYfessPgqo8fDQ4RwDKEqcRGaXzgTaE4RXmwb",
  "key10": "rZzAJH9PkyXjWVgkwAvb4hKmVajSpmycKGjof2GXgSRFDb687rsA19WzdZ41gjBMtnmjxsMbKAfSLPpadxtNpy3",
  "key11": "gswLRwMf2cbshsttZxRYXmJHZnTakhXhLhQrHyZPg1R2B9As9TMyKjL7nq1zzX9BfV1wERdQBr5MMAJFAxhgAa4",
  "key12": "4bsMmvhcTLKJfkZfER817t9ExR1hrujaBMFyBweTUqRCGrdWHpax9ceyufavQc2dGCpMrJx8D9YYyZfLsEk1cAVV",
  "key13": "5aWRbSFbc34CgPUekRoN32UKggUXY6hHWomidqc6S4paMFY7iTaHgpb61282i7dkvSQo8pAtfqbyTe3VmHthVmxJ",
  "key14": "HaSpFrHGXpykuco1313vBE5vVWChjY5HRaBdEmoWxoxexxkna32ysq1Pv5YExd4rey4dthCh9Tq6aiPXFdnHR8C",
  "key15": "4uvi78oHKWzch129UB77gzEdyjeni8EprdHAX4P2AEC3ecjGiAqaQwJCkFuKHPPsp5eGXmfkqbVUtTzhGzMuBvaL",
  "key16": "2wZuRVsEGuiHLjrdm1GZp6zQG1YczdsY5FtnJbC4dH8c2BDq6EEXWzNdz3PNpdSZKcdpNnvJpDT7xWbhJ8xpbgM2",
  "key17": "3jCWMoUeguuXSYM8UxhCKFKeWNSxKFZFXhZS5JQb4mKGRjch1uqDZrn54edMfmUExSjfQY466kFbmQg1ZxfPdX1j",
  "key18": "2DV3SPq2qjieBMC3NCzyPEYQJ9xTPpP8kZhtJvyBJRsMzqLE3vnmjotnqHv74Eq22ZpvoxpHjeYtgTkKLy9r967D",
  "key19": "23LhHktfyZ5UepqBNdb4NJCAWLWPYag9NDbmLHqLpGmwp5jhXF8yPA3LHqLZbD5U83Cd2MaVdb8e66GzBbodMSJ2",
  "key20": "5y6krMPauHyzhXxoGXTj8Xt4aWXjdwxPByMnDyVX8Dd8ezv8Fhi3XuyBjpKVAUSsXhhFvAT5bcCc6dgFmiFa7Keh",
  "key21": "4mKnmzWt7t7YGf2qfpWXVJvWcAB9LPvy5cHojwAG6YQCEnfgZ2X3n9hZEaZrDVj4iK4vU34R8RpcRMueyaNJ8xxL",
  "key22": "3AcMwMd9ZSVBkBAdqiuhV8bEsdmeM44MCBGpzh2EXggAtB2WKw4qHJNoHonjGdzzJTNxrvpegqMUAwnBDxKhjSSm",
  "key23": "4tvTeUs8ipmmmGoQnyqnuWtUMuuidJBrG5mSbGyvhf5SzuxMD2BVAix2YEmuThgewWpVhb9k1qRG3o3rcmeCwgm1",
  "key24": "32m84MEf6XDfszW18k772uQBVfrZKKvK7s5omU7tnfVYgRnJ1xRo43ykz91VivJvYywJdLdbZgLT7G9fia7izDoy",
  "key25": "2iS8wpDfPifMEaMwtu2jjhSm1r8PhR71TYgNR6rHoRk4uZb2XKcuvFmPKCTegzrwjfhodM1ktJqnDSt5AgPPH7PF",
  "key26": "4jKAiDwK9Srv6JxN7UbW82PNBYH9z3kt6n5QcKfA3T3EFvsj2UeS8uddFqF1nJDkvsso3SQg2iDNqZGR1j4LY4zu",
  "key27": "p8xWyQyj1PkpWtUPsWAfrfSHmshXnJegMPupmBmQfVPNFt3MGXxBfayqcHVxpRnXpj2YnMzTJn967EjbReJ3Vp7",
  "key28": "Ru5ERpg3pFYvUt7pmy4r1HcrA4ty7SMrVzXpbinfknEC5FHrkmViruURyNuGbV1HropHkXo7tPgY2abSv1p6Ub7",
  "key29": "5nLhBVA1iruGmFiWcNTZhM2ukgBQcN5Z73unTCFYXdjkwLJncrQ1J89SQqYoQ8NaewvsYKSsu2n11Fn9u9hNV5mN",
  "key30": "sxvXQNXezwjBJWdCjg89Q1ri12SYqNYGLSWVEojaKZdUQ6Ww1qLJDfmEYEbyp7F8nyPUK5CGgbCs4XzM1mRBeGz",
  "key31": "5cZvT53h9i3nNKcioHcQt8jTqgcVvrttoZKYmMsHVHGHCSB48BqvCmP7P6feNwUu2V64YDRh47Ts7RepBtqwaJRC",
  "key32": "3oknBkzRCAAqzgAsxBb9XnmNJXBBQQd3iACCHJak1AxWpsa9ZP7MXm7Vrm2kirQSa4jgVdkToJJAAgYWAsu6gKMz",
  "key33": "Y5DSh7pxXf2j7Y6uu4xS1By9G5cFaoJBqMMSmkobKMnDqtebg15LFh3esS3JZwgZUrRYiFvs9wZVhAmAKk3XcXm",
  "key34": "3r4PgHdNfZkzmL4o7eeYeg7b5a28U8KrEqEMHSsL4FDAcAdHjmF2nGrUA5kumTKDroHhY3rocD9W6SE1eoJxzCw5",
  "key35": "5QFYuvKrbkmybwvQyc1PQJtnzHUNav6wGbc96X7xSz7kR6rkLdmN9yCjDEPzYDc9yym2L95JiwTLy4EqYfM3vFrT",
  "key36": "4RuTxKizjLVhG8BYyoUeds5pKueKqprCy3sVFHo99CMT1nFzSLtSSLs3XvDvKF5YSH86z2GqmUjFX4KrJn7m7YkV",
  "key37": "3zZGTws2AM8vVF6ga54Ge582GVuuWKRgqYFvxDVg54z6rMbp11Vw1gNvxKnBk56VTNR2qdEHc5wVK4NcmTAk2Gtw",
  "key38": "3j7GG59W6w5RdPWQPFinm9zANpemXo4zsi6jM7M9PPK4u7u8o72YUsJRHUAmVrtzFcQZA64XK5dFVshKHk5k1Vmc",
  "key39": "WsG5GsErypaDUUKrDY8QpKRrBPC1TbYTso91PjBtHcT7LSEWhA6z2mxBPp9waCaL4SyS7v9HdfbPgQTfVNXNjtn",
  "key40": "3ja7VeMKULxKZZ67TJGmVfXT2JiSM1nv54YCig8eRb71bx5LHfpQK2TZvvbsMtVyY46JCnDtJvaCrftUvo2Sjkbe",
  "key41": "5TR3CisRnodE5CKu8vxTsKKndqkVHygg8u6fusJqebahbEuvtDorjpZXceqBQpYmT3ySDAurDJBLXN4QtGcurChy",
  "key42": "51CHRF9a73HKqnAVRKooVyP1GPmCAN4bRexkDkfsE918o48wxiKb3TSAsEvhAJbWR1VF4Hc2F1aUpLXs2r2Z9vtS",
  "key43": "2HZyK4HphX97nzoCVQchbjdMC1X3ue8JKo7QVBYwjD5w2zhPRZVyctn8PBnV4dXqwUjrN5nqLaiA7KeQG4rch39D",
  "key44": "NxvFbgyEJcmHhmXCyPEvTfGkxqiEjcfFg38WQYsD8SMFcoEAV1ZB7gUxJGpYp3kZzKAs1DNYyoT9KBpp7Zu4R8N",
  "key45": "ELgWgHWcNjzQyPYrWUScLy1CwrKmFfGW4ddyNgCsAUWCKtDp3kPTaJtvYmRLCW4XpgyY8ceLyjEJPwvrc3eNefG",
  "key46": "5qZ3fsnPzin7Ncn2eWkYqnYkmZGT5x9TH9H5hJdhm6VUs2CSSVmwbSqwKYYniXpRWfLxdZ68qw3y8t2cD72xDnuu",
  "key47": "5uyhXn1GgvSZw5Ux3qd1oWHqc1nkGTokoTnsg4favicsYC2NUnUVabTXfMKk9hTY3yEA3SWzXs2hWiwCM8hAheck"
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
