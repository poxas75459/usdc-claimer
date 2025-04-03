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
    "3fUZLqmTubj8WnhhAKumtdUhX13N9NbZjk1PzpdATYj6LKfdJGvHVVuyPyPYANV3genmXYFTaBdjeeXYMyGn64t3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yiJy8AwgknAFx4fFG62pEJnYvd3rPmgSQCEZcxoM3A7g6mdehHYhUeiNoReHa9dVKu2p3FPRC4rRq2wPvJbKeYA",
  "key1": "43xtrTDzbJPjxGiUT6Cruvr6u2HRyLsS9kVwYbC48wGDvqw7LPrgnbkfGqMiUeGuEL7AC77NCv2bRct9UbVJfSQh",
  "key2": "4x2RiThrAZHgSKFncktFeXvFQgTiMVb6Va53bkaCvQFS44RUnpddvkWKuXtQGVw6HmoRzWj9yKwEpjdXFNWX4Mq3",
  "key3": "3qqBPEGX9XLxUDB3z6W3TL5mdMygfttncsvwvKPboyhMouQWQ7St62s9pMNvqWkvZB5pQViwA39pYiHQHBqCL5rd",
  "key4": "5iWdSMupc6fz2Ts9zuaTLtgCpky58bfWgqXc6PVB5qBocfJhsDiEC8WEHayqD3i1NLwrtpJsTib8QxARnEVEqfTK",
  "key5": "gsCkteSbZwtgvcU1zorS1i4GoDYkZT2yyovcaKtVzjkZzMBr4KPTfo6wccA6xz8p4eTMdMyLJZi1Xs3KqfYLuR7",
  "key6": "LWjBFqXHfUSPSHg8fdjRXNJdg8ueYUZbLKxrPtmZ1sYBfxPmxm1KyHFW7GgDSoBS8bbSTPVBztJ5a3FoSDSeKSq",
  "key7": "2cVM6aJsDbEExHKmCFVL8zqbdcjWDcYvDCY4VCNsmXRH1EfEFANDfNhkTcai8ee5uEpS2mdh2fnLhaCEnhWuqps",
  "key8": "4jfaTTKKC54DPTtyKtR9ekv4LaMuHDL2gL2dE26bPuFpcAyovr63FCptmVxmXF5wGd1iADT3DtxyTXqdVpyzrB2F",
  "key9": "4yW9EFsxgXPagU1irfQas9ry47c8gDHF6hJwMFFTcZh5yNADhGhH7Mibe5wA39ocyKUTm46mJGGY8r4t6hiVmxoH",
  "key10": "5CwKfoNhrtWARKtyeHG39cbfpejj1C7rBY4AisxWskMpbU2i9fLPbJdCzQ186jEYzkMVtra88czavuW6D4uVrgxD",
  "key11": "5fjyCVUJcAHujHt6Y74XRu5uCXTzj7iC3Ey57wbeqa28JiDhhyjjKffmS2noGJcfAL6SHiZ5CBWXvxHF8xr4uqfW",
  "key12": "4cfki7KdjNQFtmQZ4VJYFtL7CHf3qoBmHJAuD1KryYhfrnKnAo5eQMfqj8QD2rnmL3Vj5uXJSgxgkXHSRc3dvx33",
  "key13": "3ahoRybzZVJv9G9No4q2ejaybkSganx6jsHAxb79ox7Fj2VPYxHkKbnT74RznvxeC64dZycsZCjjEVxpkHT8Dawa",
  "key14": "2ujeTDQZaL2a4s4rBLNpUXEZvp4ejpss4z4Lyu9XHcRk1EHz9gVz6SqLCpdYrY8BSx9n2LksXCZ5rLssqgTqXcCC",
  "key15": "45V1dn3kvfVJiQrHNEYMy95g8opnaeKfQ9iYygiPsyvJA1QuuYYtCBy6BEzSyvBEg5h1TxLgPUjK3cPG6bnJKHyJ",
  "key16": "2vSgCG89tg3qGFszf9bem4oPbQVY8wqbfKDu9Ktkup42m732kz3hDbnXw5hK9pyeHuQZ96o3AAiwfibSutSKPxPM",
  "key17": "2Bet28xey5oVKooZMqobgqpfXkUy1AsSSBBrwN5HWCH4ESYVHkXJ9FTmnrAY8EqhNNGiYErhk4ZG12M2BfVnuq52",
  "key18": "4gzLVqy23Bv2Kkz5ioztFX9YFV8kv3QyUWantsicWgXJre7Fqy8zjHrinyZ4rzqd2YwNgkA5piqxenDs5CreojfC",
  "key19": "48u9LvC5MTAH5Xxtf3tyUzasjjQQxc8v4iJWRVv8ATvePpwVpP2YriJNM868sWt1je8TJzBMxQBT4ALhvEU4t3JW",
  "key20": "28Qf9jsq56XPWy5A58W2xt2CVRqp9EQ2aCJgJoiuXdbzzUuxZASnAzFZJfvfiFRtQVvZFMgsLmnCidjTmJZvSenV",
  "key21": "zVX11pDmU8gCknaRW71bbouiNUcEf9AKWvtMa6rqvyMtfZfYbX4NuWBm1reDo6bWMpFhbYD8yWUPabnVJvkABGL",
  "key22": "2LC4VwZqpWEN3RDbCknNMvgnjiWZTHtCrnNef6cHamcY1uqFzg6cXR9G9AuMzEbmnYp3QP7fy8Y9sYqo64uTh9cm",
  "key23": "5pbVhmWP3JB4ReeijQXKpL4FS8KUqdEGu7TMFxCRhtLqS4Cjo3JcBrnzFsJ72dfjGaY5wEg7RYTxLkECrQRjLeuq",
  "key24": "3h1E1RpLeSPiP6zWFuA4HURUJ6B6sr6i3JcxDy78B5ZUGr2HY6ip5j8xKbsWmgY42jhDdc7DTGco9c2oJhTNp4t5",
  "key25": "2iBXZEzjDQs1LQge6xxa1KzSsBmarNTjMQWrMNQDqsRaDfMLVk9hzAzEDnw86srZ9Xy7PnTqVhVGTophh23kAF1V",
  "key26": "5ZcNgkLAdydERNd2M7AJAnZLS3tGvz2TuyfVU3F6JrHLbt7xYJkeeDE11mKgmhHkRgB2LJmXVjQAyaqkxFRioHsn",
  "key27": "65otU5FPM2scMH9TzqUPsAKX6o44wKnp3xKkPiuA1aZGDQm7TuhPE6qgUBeS1Bgxe639yBMqPBLt4LAULGh1RVbU",
  "key28": "5x2dtVeevLpfCdMsmsWs5fGVFPUcURQEgCHGr1h4uCCGgdJ6QnuFgBXzNrsem7pov6dtv38JoWGchNirWR4rUUu6",
  "key29": "ZSkCbsjTMW8EJB6U1sddF3j8Q3aTPrT2GEpt7CXWjLdyVJyX2Y5uiy5qskZFmGuiYvhcTyykJZxfvY2StYfv4cZ",
  "key30": "5DNtv2tKF86oedS2pxShrVJW1U6UFVrhYmzP6hHYHasMz9mDbYsyx7cfPXemjpeY5ZRGpYXSMbCf4V7mw9jWWtu2",
  "key31": "2VySPZBcUzKWRbN4isj6jvTKsW9TLG4oR6zT1hpZ6J3NAWBrA24nvB59TAnMUcGPFFGABibTdGtc3Bn6wke2YSus",
  "key32": "4hxeWSnHeuTMHgyFNutivJ9FiZohSimxfQ8uQdRCWPE3RxdmYkYrJrUmPkZptaq3BmK1ruh7xeix7BYAXFTkgr4q",
  "key33": "hJYqwwPhW175z8qJMnYbA4FaoKCYwjfsehbzDtSZW9FWdEbaJGpFAJ4mtSCU7b1khoGWPcp5mSVKRsjqmn9kNod",
  "key34": "2xUGYLghCwL23Grq3V1hPtraY2XRzBwNjYSJmR7Xb2eFdtSF1gbsbStyNr7KqqY95rBp46Jknif4YwdyJgKNMFfk",
  "key35": "2ARTbc6jZjdNJh2sw6BdYjDVGQSZxfuF81yaQPqGLWtFqnTBgXKrbChvWdYQUomNhr1jfivBUwVhtB9feeS2o19a",
  "key36": "52BDP96BV3i33f3fL97Nxqes9Xd5xtniev41LVaPBLoQ6zDfvRzHTgEQ24cGTcqbGUwHaJawDEwurKGHvtBb8pui",
  "key37": "2YYXU88BNhRBMsFoFxYgJnMsTtpTDruoqQLu6QxamaJKLWVLcAUGqfhTVULhkkacjK78P67oSp1VVRPbk589fbiM",
  "key38": "4Z2N4xKTEjFu2AcWQbNqxneaYyCT9BCY8EgezzfvSwJMd1Nci4rdm8o4QHL5J6YCkJudToZHeyXcwWMaTqYpDCS3",
  "key39": "5ktyQ8YKhgJUtZ151PC4iVHAGhhF1me6Ey2HNntB2LvPVw1MA7G3KDtJh7yg1ihys3GX6kWPaw8iEsD2HJGeNhqW",
  "key40": "2N1jgcqNHekvx5N2ZrheTRZ4BR4bPxqcstZrM5rgXmEtjcckb7H878CYPDSGKWc8CTPZJ3Q7nVZYxCGJqwWDfKnd",
  "key41": "2PGicgZSfu56F6WrqBPjQcWDgZ6z8htkBohCnZgvAquVKWeDBuHbYcjRX8HeZfGukcJ5GtgBekX2e5UqZqyzqA8T",
  "key42": "24tCZsrWJVov7UwtNYkaaMpENSXyRfxB2ppvV5LzsPKq7RXshemTG9TqyKZwJ8ucdRbuqiRbQGxYXmTPwDfHnTkr",
  "key43": "6GaYcmiV9obthx8ryvbujKCumVCnU3mKWbVGqJx6CvE7g3Jpg8AqZni58fdbczmtgB9jQE5e37yCiBKRVpmXFkC",
  "key44": "4JJgDRB6FCk4twcZFyuY2W7VAFpb9CvDYtVzJVihxNpmWYuxUp5EAgb71ZmCwxVhpGR1rTYH2xnZku7bcuyJ32gA",
  "key45": "364cbDkSmwLPVvt4hxAx1nqUvV7pkVbUKniBLyNvrj5DctV4aMmFJq4deCzEtyQNYfaQfmXvQ1Djm7DuyWTsH1Tv",
  "key46": "nJeAZg9LcxkZiJ9Gw1hicv6xLkmZfsJngAdWVBJ35FAYMyVeUWJoruE4foYPAqzHD93pY5GFs3wpFiTLSwspHoL"
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
