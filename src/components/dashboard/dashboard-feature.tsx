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
    "2pj5G9YBceAMfnZqzeFGWR2EFpF4WonQeqSbm6hbYTrQwvKwwgBk5QEREjrsk1fUnwEGnbnZbk7heDiro2rZ4EY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ryv5hB9Bb8nmJEEzzwq4UdvUKTA2AabcNaFJKV2r1NDdAgapjBbDSZwVSFq2ytrqTNdtq59gKESCE5wXs8thJGH",
  "key1": "5TEzyaJVftw468Ckz9bBhURCKvkVhYosjSepCRfjor76HkdzrxjzT4hApCnU3FqUshaddePgHAr6JCNF3FmMgdKr",
  "key2": "9baX64Kco2ovbxgiqGx7kawqxUipNHQHJGidrCWGAp6zMZkLbYHPpWeb8EBDMhv32jXnjBUrw3g5SWXqRssNSDP",
  "key3": "3MAkKPBzRLox2Nmx8BZSzx28C5hpHyUmShDDYTTZCHaegFWm3b5kohfbeL1uNKAHK7Wa5cURDUWcQXedoMSPZUJj",
  "key4": "5VaCDqmLCirAFGS7KVyGrQzBgUioEZ6axboNmzrk9Nb7Nib9Zgf92kVEAFiriXCJYQZeUW619dkGuTSCk2XreW5y",
  "key5": "3LAaxxfFaVCwjZNEb5XvXH1Mj1kLwPXa9TrZ3hgYvct3KDP6C2oVFLsGtaVbqEcAZ8KEYAcqTzRY7Q1Eq8s95Stm",
  "key6": "3rdCiPrBWTm7enLz81a1CTcy9Whp1s9CyyZLT8mKfAzJAQvJi5Byaz7W9diFbkKxnrhXrNF42YXoHxVsydyZxeQp",
  "key7": "x727wmu93UY8wi3W6csWNe3duu1qfUZeFESvKJe9Rg9G5BNuiNAEJTfE54KLsoD9FfP7Dc78xr59wZPqdZNPVwF",
  "key8": "323jqEwFZgV1dpJ8X7X7Da8iiJ6FTjRfPsuQWKES2iKaaTouGH78BcDgqaQtCa2PsX7d1qqESdMroRVUFRxeHhc5",
  "key9": "v4TjU6ihRvaGgAXze4c1gBAB3SXJhAyTNDipTcACPnzfBcx2CR7WC4EGBi63xLNxCxiznhFquak7iZunqhGPxbu",
  "key10": "CS8uV9FiuyuTDgNwnRc7w4E2E2FtuC3xKfDQ89bSrG7zt5iFecbEWE6LhLDpV3qLqkgeVRSGyXzpW1sgtd5Eh39",
  "key11": "vkp2NwToJTnudZ2S1knfgrX4wFTVEB2KRa22tKNKMrjnTcwJztFV11sz9LAPdWzAgctRJdUb4VcReu77BpgsGP1",
  "key12": "2M7HBzvHdyRHrHj8GEfkkKZ8veaywEknJWTpWw5QHfnmXTtreW5dfmKT8uzwyFaQ5b9PD9fnABGKTxWu1HCDqJPs",
  "key13": "Wpw7R9DzebpVWCfncsj56JbgXf6TqoGFrJyCoSoUaecu2mBpjUKww7q8s7UkHLo44vMd7fvD5BSRSfS4jfYvPfK",
  "key14": "5k2qEnZ2UKqpDU5wrVC2QG2vrHATjBz5wUL2KpF4kCJF2xZdentzScrZNjyPgMzg81Fp9ifQJAukTWRGCZWYWRwY",
  "key15": "5qs89X81bSeBkckJgja3MBT4Xzz2cxd69WPxS83NDHYUfohxdCNHh9AyYMXkp3ndAg5xdS3utenWrTZEtSAqdg6m",
  "key16": "39o3ZAgUMyvePvMzXGbKvTdyBwtB1pZ6uKpcGxbRnp5AeAW8jPvQhWxXQ2r67nmBvBSrQLasgKF9SGtbMt5ZG3bC",
  "key17": "5q8A8zZqk3dsPvh1N6Jbg2ATy1azyKYvmrktPFUeJ6Y2y16HmJzpGLNpzEUf2By4DdeazAdm3fumyTSLW2UtTtUj",
  "key18": "RRdMSgjhiVZSZLVQpBbG5CWFNAZRmX1WheDXdNDXAySN42QbaYqs3fTN8VLPUusK2Qg5JG9x6p94qixYS4UWiir",
  "key19": "zu7ECCVCdz9nEMbe3wqqbef3AkxNw4xcYMdAyxR1gfy99AvuWywFXNRC8UtehZeR6nmUUGZ5ntPQxGKf6D81joM",
  "key20": "5L3pX6TkZ6t8eU6smUeuDVh25jrkkefAM8k9TU3TXs19ttPrMaRR1wiNGsR1oTdNLCEVy8vPrMUkDmeyu7t432BB",
  "key21": "4iyK6fwMGByd7rwjiEDoh5hyk4KNteEePCzWWkzRv1BMP2mmNjc6hCFd94WFQhgb61hbbbZHEsMDToPpQsm5RKhh",
  "key22": "2xZZzYpBJzQk3ZXWKxjap1Hg99piyhqoSCKy43tpRX6kGcTff8KXskE3XfEZLDgntZVoVWoU5dXDq4n4dvocnvzn",
  "key23": "2WgsKyCKESz9cy39fnqidqnS9Xv2RxoN35U3aYFfLWxWy41NC4dBLT3cjKgj53BGjLtguuaUt6WbvLNnUioEudsg",
  "key24": "62tf8gt4H9pK84BUSkxhgGqxi62inNUMNt86jUi5VY1hyd3fuh6sMgzPmh5W5V3PSEhSRa7GBsfihyAZVqpkd3ra",
  "key25": "5fcgqUF1Bt5DA7PdXZksUJD4PiKDmz5MKi3FH8t43BHCRaKaqQqTAqeRgHvLFJCWnoVGVgQUJAh83CDYhRnvaok1",
  "key26": "576iJWE56PsYnVGCu332Dip9MLmEkzfWbhdQNGzijXnfCu5grrCN2VTJkcEPt6y2LQ14Z1B53TstcFbzNCjTEZMC",
  "key27": "QEG2z1hQi25w7ENBnfBEUeo1kBUKZKbjMdUdniX4Aaonov2mizsvpedYseVxxAUWjbgnf2k41A4FccYucFjYrr6",
  "key28": "2ukTk4LMwT1kcJRHrSeQNj3pPdS4yLoLpMuJx6MUUwGb6A4KP1J2EyoCHCg2P8yUnZCAwhHL3BnyrfF8YmKCJFH8"
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
