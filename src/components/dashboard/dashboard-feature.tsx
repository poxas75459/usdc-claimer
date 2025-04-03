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
    "M737RxMpfNsdhCBUhkmQ6cwjDKdSczvt8nRPj5v55UuLDydSZsSGvZxLpc2Hz56gznJq8LKh541uvubbqk66zKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cmf9W1MqJf8ZeycwftoC37tQi4Msntre6K82VEmR63RhuPNRT4kyWoQe5WvAAaZ7UNhv6k7ehqGFC4t2igmLMjm",
  "key1": "573KTmGtXonVBfk8FngTiGzhbQDJRaky7BNVNoKTuGJMDcEBCDMhQPUffFnvSX2WD269dKeuwYERrUtR3yfgUdxw",
  "key2": "5Vp4WbUVu8r573CJRjSfHqsc8heBunGDd4z3smw9KvkTyd17B89tKLNFk6eLfJRmLHnsY8U7hQT4smtknaeJ8r7Z",
  "key3": "61SG68svk6TBEaqrTQzxm5uoGW1FUeH7sxeRMNVUUgW3oDZ859sztdHvxS2RQXT3MkKBfdWEGVdMgPeHYv2aurcF",
  "key4": "5KMck7hujqo4LiaEMph5rh6MXVNzHKK5B51nnjsSpKjayTXd6RW8p3KkNAEJbDeVndNbmsQgYkXXf5xezNZ9JE5N",
  "key5": "APKHzahRoaf4KguiK4HGeRnePYvV9gU9hCmQDF9wsvEaFxcByNEufuCXZvDiXYZaRCAoCYPKVURoXoVeWsF2ZEx",
  "key6": "5FQD2CSJxjgADie8K9UmsDna8RwvzUH92eyGkEkP1R6YtxrpTLHXSoGwK5JmwZbqsdjYgDCY7YxZRj5QYChfw6bz",
  "key7": "2nw4eryXf9vXSWJhpxqLtqTspghLDAnSBXbQrQ3CQbeVxNNo5TAG9o2Q3YCXQBc9t2vNdmt8oHmqk2Uhfetj3ttJ",
  "key8": "3P8GigevCRdYiqayMpRv5MRz4WZ8WRcjyABKuiL2Vbc2FZDhc1JvAgPH1XPgXkBWrsZqs2CAYN57R9fE8wQC2aAP",
  "key9": "B8htNCNeVnxFjBYV9ZCwK5RiBZXZAx62F997c18GxsHc18WdVdNS3M3NqQDfG8cQJvafY9BxrSYGP77ossrZ2Du",
  "key10": "3pcUhoF15ZNKCBUMZUgsUfqsTUxTxSrDJG3FhE5PhA1dTxih2wgpEH2mNShCDHzts4SeaLfwCN8oa2nJ8kV6TV6D",
  "key11": "3LMtbBCj1aaQEeDDw3pqXabZXHbAkKjUdXpr2nXmFBM5W4DBGrttUYdCkSwfiQ37JuguuZcrqMV7dK6ywKyHLe9H",
  "key12": "2UMUfnMP3bzX84Kke7YqZnURHMTwpeLp9g435jtX1o1Cp1cdsBWQfxpCRZ1WVGkn2cnVhQAJLCLimJZeRfDAfqP4",
  "key13": "3i9boMmSiuqVF1nKDEqCAQdA6AGXeXRZv3H7LkzaxoUTgBmnEFjjcBq7jsuZmPXxs9knPR4Vj5g4KNLv7d28jAsb",
  "key14": "2EaBGbnut6CSUBLyQnuPsoXLWLxucQiJwvV6y5EXTcNtZPiZPeZzKjyYNXZ9iqFZXvUKsLWgZhix5ZPwBjgTrTgY",
  "key15": "voeTAwReMbSadiXepd6MqHquNjSiJBJK9AktqvQAynBZ89xtPAXiRhDeJfFxZVg8vpn23f3nm4rbqLU7iCkWYjx",
  "key16": "5DXU8ZuT7eiWFAebT88fhMUsxnNNtoimzwkMeDccffpsX6cMC8qViHmiWFA8HBSjqWqKUCw6qBTN4t68HZAmKD2o",
  "key17": "3DADovwQVW6JazW9Vwt43euPDCfeBefKtmt7f7Xf7CL8YdfUe4pZSTvACHG9u6Jqe1FhRNPGFqv7fMecxoksincp",
  "key18": "qPWGNRXzdpbpD5BCcfhUHseXwRDXPgmqjjEbrdrXTTjvDdiPU7tu8SGeNrqe1ADbd8k3X3PAjCHxg9PF2GDWzYR",
  "key19": "3jTQzVa8iqtV5CAn7yPCAz633x92A5SgSxQbqPKh7QjykJTA38QhiapkVU8dwudqEwV159CmDEsVqfZAGAFBeDXt",
  "key20": "4iutHsGkxfuVM3DVEuFkmevyYGenm53XYYEy8YjdT73RHBKiHt42ebzupL3ZqcHVtvXeDLsm9eNy17181t6GQKBB",
  "key21": "5hfAwmj4XLcVZPCdt6B1Yn2DARHJcJbvx3caDZLoaceVqJBK4uKw6HNucrQwj1bxgM6vrcPX4F3JhSCvWXQbGxv",
  "key22": "621u3NYCAxVpscz6tiJTMXEFoCsj69fq8j48VAKyE5b14UNW2SDLV8RrcxPJoPaed1qVVeEddygo8ViFC2Mn1A6G",
  "key23": "3jiLXqNsrXULvxjLyR9EiKE9rYDu9uZxYsqGiKqvhqtK3aDgRdWrhCJLMA1vA4sPpQwqbb1bq9E8r6XYgsC2TuTv",
  "key24": "4Y49DPkhtk8jc1LB7LHQppjCsX8RMx2yhuaPQr5D1whEhTWU7YE75QBDpMSGDRJGt6oJdX5zAkTWNG4GptMiX9Vh",
  "key25": "r6TH3WCp47rSTkPHuGds3svLZTvXJ4wpHbJpV9s8fpCU56PAwW3f1SvvTKJfMR1jjwgfUJPV46RFLwYkA7se9rS",
  "key26": "Knppzxjyfwy8xMuQup37h4QeqM2Lk8Du81svQKSVUCqKzB7FxCGCiuWrGoqqM5AawKnAvqG7w4SYpc6KCWS7iiu",
  "key27": "5FWUzXSE9994GGruErj6jEUD6YZg5Y1mQH26aptvPd4pAcoVkyy49oRhYzMw6KotduFa97xtwWNraJG8KUtbCxzY",
  "key28": "4pKpBBLbo4AwrLV5vTEpNhV6hJEyoi9AnJHYmLheyw8zKmdgS1NA6En5TKFjP5JkrG5J3XBZ1sGeCDtFSycYanYw",
  "key29": "3uDgD8hAKqr7EQH7mNAmJVMMibqXnsX2U6aR6Ew7rJuVBKD3aC6sALWXS98ACE4xJAzxqejMQnanHnj39qfNq7vA",
  "key30": "24fYakEvEDjnqpePRNPheftECnoC7PaBESDsdzS4zeQBkNjHMKnKmN1L6GoXVVpTA9cuTPX1Bo1hu9j4quBsGJHp",
  "key31": "4pnbf8svXx5FHnUpTZximHmqGHsMxCuSgNLLqGBNkufyU1oJ7pwU5GoimxEZRgr2kccFG2DT1PFX5wYS7WrifKEC",
  "key32": "4m24kPiyrwmEgbVCmhNCAmRTCivCvcBompASAUnmoZY938aYzxNzdXTdXhJhYrfSRp7SFiCGCGVi3CbRc9ccxmJQ",
  "key33": "2RkeZGieLiXLKEJGtLxjpg4iPrLDjXZmGkhb1rAxZd4aebfzvC2SZXuqRTxeox3bGM8PTWkJHjnWfCaNegmFW5f8",
  "key34": "3QftLkGSXqb2wvULo3rhSo9ivAicEhNNiC5WnGxmr5Cd6eeQm6uQeDGuT1mCvG1LhfhEPFRyCh74MCvn9uEaBs11",
  "key35": "5x1TWr9BPkF87yYvhv4gg4b2AA5zZYTBuSrV5pnonwtAbpHGeAz6wPvX3FzdkFRsWptVmWsc5wax1XjeVJZH5ipX",
  "key36": "VR3RDp471VkcePn9yTtXiqKCwNT8nsLjgjnYSWqzVjKg9v6wFy5ZC23VBbtRTQNqCEGUbFSG8NqjRpCNCigBvWJ",
  "key37": "3nJKiXhxVXhQXBXWQNvq23ERYwMNVCnaj4HqtQb4rezc8EmmWBwz1dPa68a7oU3LFozhGVhN7vHg1bAywF3GYsTD",
  "key38": "3SwnUe61QQdVntm3mKeYhH9PTM5kCxR1pEFDaZFBTV1Ze2gE52BsRmFqni4CdsY2o7a66ZwURfsNxW73mo7CwD3L",
  "key39": "4rfHoioyiLrb2omrVZotxQ3T7JZi3ym6QgafQT9K4pvfajGLV6BvA2rC4nr3iSviZHfpRnJFKLacvWn3KxPjq2P"
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
