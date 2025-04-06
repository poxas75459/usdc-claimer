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
    "Ky8V9EqPntMDWSAZjdaf477Pxk8qyi5c7N8JgWBn8iXAJRG931MJoefxNZakuj4onhfjUMx1xbWnhb56kfEgvFS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ADhMwnUvXg3h55rdvGVRDHVPLAA89tgPnmvgt6dB7kYfrWthzJkA3cEQqEnPC2YGRQhp21xPCsqABFSBuEsvVJ5",
  "key1": "3oPuyYvWy6GzWwMUaCDEkDNnGxKS5k5P1m5vr7Kph8uA6pYpYPNL1dfS9iKhonFuuSJHDfcfNfDF74JK1nFjeKLk",
  "key2": "4ibTHtKzsCXmenxrCsQTdDsSSbQozDynnEEefao1hhSYqpXjBw2pdrQS66Ri28Fynomjjm396ATvFUfMC8aQqmzg",
  "key3": "4iHx5CiNvxpzv5v2Bh37Rrswsf9gb7DdVQJYZgtEmFTXGhqSj66nwgup7Uu7XjfzXpPCNsKTv49VTgVnbEM3jHVX",
  "key4": "2HnkT6cEyM1WjuP8rojMLAk54s9j3nYnu2RfofEs5khguuoi5vLt5GN1JsjM4CamCPKJHQfiRjm4uEQPj3L3e7Sj",
  "key5": "5VxsacroPY77oEzqMS1xLFuSDXuUw5rqDLMZUWmgwdrvTsrvzu6EVj9omey5azLoXDi86XfjVEpUQj2scbiKC2VR",
  "key6": "6RHT3Vg7EPbrnZeDQJRhpBYWKjdULaBdff1AbAx3qsbNfby4HQeWU5ETmQmPJxRe1bDaVDvQrPEkQw8UZsK3VsQ",
  "key7": "3PGY9ZYTQY7yCPBKALvMoDJrXyEJrwiZM2zv7SQdnqt1978zKhSB4VBGwaiBeofEaiyKJQAjkc9cDD18KWWdC5Kb",
  "key8": "3BXS4uXSMUmHDMbiAXS2yEaKXbkDbEc7RJqKL8sVVjtGMHvDF4F5Gsch5mVFXG1UgFCyKEg7rK8ypphdMShvuqsD",
  "key9": "ca8eoAdU3amkfo5KXBjbAtHMJLBYh9h1pjZJCYExjeKyqU1KCRiWB1tVSP9eU7A7ep38SbVA66M6FPURL5v6Vi5",
  "key10": "2o7kQqRtVjtsNxoU4LixryzHdF4NyjoGPRPwmcVpp1cXCrbyAwBibHoPptatYf5CKPSEsodsuBa5FuQC6a72RVQo",
  "key11": "5xuPHmp9fCPXLKM7PqmiFcfQC8jdA5EQWgVJeGFSLavSFz7GqCdvoLkNk2vPe55QW3bfZZrUPk8Bx3p3bvrQi9rv",
  "key12": "2e6zd2xLw32QnazdeqJrncwFGq8VTJ5vqCKtkG6Fi87ZDwKBpHJqkFPSiAWvJkcfhYWgqi8w5iKfZ9HwNxTPu2VC",
  "key13": "BG2QziXDsaL4wm7oJYvric9RcqDNgz1hcmxnpg4CcUJfc3yYVmy2eQW3wk6nDv3m2cEJRfGyokMBuPGbgECjAbb",
  "key14": "2ttF2ZFex3w3un5Lyiwf4QaeHGgUSeptv6TYSkeQeYPJf4Vd84K2AMcaspTDHGALChS6gf7NSdDXjkFVKNffYh5o",
  "key15": "2HGit3Dn7oPtJceMjit9AmtzxuHrRkzVWWfR8uz6V6oRNaenUVpscbpQqLMYZX2R3LWTRo67kDoz3HvtwW8SEqjG",
  "key16": "4b2mPJ3GwRALPNsSKPHLoaqCsG3gtZABcbENHtyDTcLCdGe5b93fRa4ViFG48YU8XDVra5KVj3dgB6t4oTW9n9DL",
  "key17": "T1LJKT2JFDzAXCCYV7fK6P3jvtzTuA6cYoUheVCoSML3AMKgGWUm92dtZqkKsXo4bdf1bnzCj5qz9NGDs5WSbYo",
  "key18": "2Bfz59dL8yGPfBaU58owg6pix5oGV7jz3LczmYJ31oEdE6RQSNd6m9P1PNj6mGB9jJmsLnEgT4P9ZHBd9cnRY8oj",
  "key19": "2aEYF8UFhAheyRRfhLa7HwmSYuthvrt7F4tmrqkp7iTwDNrhzDUKxEEcES5kwtooP1TCjViBL84Jyb1fPgcNLjVN",
  "key20": "3Ns8MnJvQ2FN9QyJDDNRhwFbVYNZ7sqMJgChgq8RNmxnrbS9iUWU12aqmsBdSqi4nmWj8SfKa19MLxCcr5Xw5Hm5",
  "key21": "4wQgXTGnH7yW85f4mg976atSCA8MAZdh4Y6GX61kyBnDDJEtcxeHT2XChVSJjphSDL5JeeD3TguLWnXGtqWm3HW5",
  "key22": "4SJE8uquakwf8YSHhNCifgcgtkX5myCsM7daT1wys2QZxqUmksjkCSWj1YKWYsqcHDLjn9p9FPpM4wVhQuDRA9a3",
  "key23": "51f9zKPgALSFfzFiVDEJsN6j8SqmV91ikhQ7g6dsjNtmYh7fV6cZAKsVSFhfXu2DJjrNruwYRUwkHtQMENpm3nNn",
  "key24": "5DM1ptUihNApuNc6u7cTcHJT2JvJkH2HEbJVqi6mWuMj6XpGpv6JCosHxGH6UQ3zw5rGB8jwHZgDyk4tjVhusVcp",
  "key25": "DTaYsDQ71wkMcj8hRiuv1SZBADKDzyxv5SpXzocX7QzCcQUMXPhZmHzDEw3uvj3q27a2db688QebQ1Ui4b9xUdj",
  "key26": "CdJuSkWJFgqbH9caZSG1fT2og793kXZqaTjK9dP2fuRdusvZqSWSKD7EFNykG8bjEYvQxowpxLMaFHfnsFarfAr",
  "key27": "4ikSCPqR86bvyJ4HR819ToPVz3nTV7kcctchXbeduAxBNN5wTo9eAVGwhXWygy3kTvSHJt8Zaqdm91TBhK5ZHVyy",
  "key28": "5ewEMZidrMN1wzCJ8ABLEcM8uXARNXrPJjVDejfW1nFzLaE3N9ZBZtC6ogT7cozrzM6Dkx1j2BVKaEtCuwfBLwm5",
  "key29": "3vJhToCKTFAj3KM5BEVpsb2Gtn1Kps5D9Ynmp42qPuUrsZgCsdCtx63WzPHeMtazRYkdKNaUT5EaTY25QJVYNi2W",
  "key30": "4V1BqyaLAcdb4AyDA7fkeN6LH5XQTYz7iTMJQGFSUBDkwPAnDTurKyhayzhXoHvqcH7vYypDNHzgy3zXC3v6VEmC",
  "key31": "66iQPZJA12i1g7Qq2RJYTvMPvcqVfKi18tmSos52pEZGFLiJM6muosM36zp2wmFNuMfSnZEqkE1DTSQfTkuQ172x",
  "key32": "y8ePe6BQAbenHGAYqFX39ahCmMAmv16SCNbQuQcqTTDMbW9yCHMVBSgezSBQLN4tPnjKx8AcRfJ9686BWU7AEr2",
  "key33": "wRhXdjGyDbEfnbhrhwZvTnxdEyJJWUYUB4viVUSnRYgkQEbQXDugJgPVgKN1PYFeTo22k5UzmvEU5C6zqHSwFEu",
  "key34": "2YStmJ76zpYzpjds9Wpz9UesY2jiZUP7jzKyidXi1W6nPHa4SvRVQK4CaiNkdF5zfK2PWpeyf5sXXuzWkdeE1j2R",
  "key35": "5oayTicfjoZ5jvaTfn1m4NLPkbGwLhPBCBiznHbNz9DzqwHxCMJ5ADnj9sQhws4ZnsvQB7Uyc7CEXY53F9UVRgW",
  "key36": "2XGKeT5A1fg2NdBeKrfkhcpLDbv45VVHi2fCP3Fo5ggD9bw81KArSbeAmgGebRXnW2SCPxNy4Vu53fwg1MDVwVgr",
  "key37": "M4Jxb898Gw2mCHtZ76BV6i6VP254bqoqNTKctFDJgS3Pj5YjzQodS5JqiHhLcyFXetyz8RnTeYJ4vKEUiKGSV99",
  "key38": "3CHWuTf8wTZ5oFxg7urtpEmiMN64n4bR89HZ31r4N4S2pkHHB8BVJ5iR7n1vNacjMyfMEeLEwgr1cDdyTLnTnZJf",
  "key39": "4xr5NKY7AAjiqHPvCCd9KqfseWcbDssnNVnjkVwUzuxMhgAuBVcTKda7jJvuHnCR2yZNCMzSLi8xe8j1bauE8RKF"
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
