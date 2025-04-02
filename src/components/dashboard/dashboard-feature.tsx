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
    "2JQaTYjkUbTwUmfX1N9PK3hUjq1VTidhmNQR61adW6C9u4e5zGKATm7dUHqLeeE7Yyoy949svMUxmcYCgCE7qHNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mASXtN8MdByR8xqB3zJTkPumR2oqFFLxxY6AobskNYSrYKD3aKJyhhL3fmwANM7dsoAKmEHps1nMDrwYtZ6PqNg",
  "key1": "5h7eaxJUNdPUkQ3vAT1UfyNHoV5XWhmaFrHxxfqEc2MQJ4y5JXd2KcPyVQc4W5vxtvicpGsbT7AvwzXnZu77NevW",
  "key2": "43maVgoqx4oghzNptZ1BCmmg3VbLN8WEJVA693box3KyvbS1snjYa1i2YL2PZq5j1gG5XNZeNTsbccWczBxUKZsF",
  "key3": "3rznFLa5do8Nnwg8szUYew2yHn3DvMmb2994Qu7ffWAdVyDVPYcRLECoemY95Ew5MTr3U5ATM9HokpcAudmxbJPy",
  "key4": "2TKaaHvcwbGAJDMDFVUC9iTwJUCyot4g3BCkRtQUyYg2o6n5YY4Kh1PTg5zwXNdiGjbbELAL2BDr575c5smCfivK",
  "key5": "62guS199eGNnQ3GEV7QwqX6oBTDv1R8uibW81LPQtBbp1ncuK4CpvT1tjK8bPaFnxRCemo4HtjSEYtCFzbnJC6RH",
  "key6": "43QshSqdgpDBmaiyB2vRayXbyPnbUKKkFbetB3MqohWRXeeiWds95ZJTW99UAR3HMT4ET16XA5wvmocsPHu69pz3",
  "key7": "3rgVPn4zUqQUNpej2XceoA6TYizqRxZSVmHkWKyFDeryMCykEsfgiMQU65yYQpmsrC7h3G9ojHScURPVRPr3XjrH",
  "key8": "2VhHreidm6A8ign4nuUf9EGzJRmsnVar7cGVyAoKpkN6FsVTFPFsggg3Vo15MqzQMTVRUs9CKuh7LUV2Bgm3z97Z",
  "key9": "3KgB9rk6gPWwon8UfV5Z7rZkz3LVb5Q4HJvRiDXU1q6rNcMNqvAmKzYuB1hytgd4PWtssvbcvrVBL2iabJc6BTxu",
  "key10": "5LqkRVzqFqJXxgB6VzXTZfQRV2m3zW3DatwaYRd7uoehoPH4CKivXD8Ck7HKhFY9wmYe85tyRGvgfdHmFoVgegoT",
  "key11": "tsZjVQbaehzvuWd5pQoxMFr7nMnheVm82sGHjJuPYNbnLRn4Hh7kDNhYQ4dfwRGjwRX37Ro1P6viFkg7sWU1N8b",
  "key12": "63YBdjvhfiQVy3DhqognVHgBJKZF1DGrK2p35CJ2PhWicVgKdJepUiRxnJ2hgrMbXM1ZEQV4GKwar9iqvwqy2Bm7",
  "key13": "4WyPSwvUodaRCKGmgb9qceoWAbJPEdra9dJfCpVbmKTqcZkVnNAuLpPyXfJg8NtX8bUq6DBBSMpKEL6nYa2Q4443",
  "key14": "pf475FaJdgW4obBWsTEbVrk5Fvs2WDGdqAuPdu2Qd3bVF66eoqRXkmn7F7N6k1C4ccrurkhobjL8mtrKHZjLiBp",
  "key15": "39DGzE4AabFzELaDQHU4ovLpghW8uamqDjU2AgbVANwoxwwoNNbdf5Dvxxr4D22U8vvzEBuKUyRGVN6i498QaFUq",
  "key16": "4F3XJZTnZY1GbqQyn1arr8tXs32YwMEbRp8CLGbAd84qmezQm1McmghL3Jzexbs9nN9uAdGDNraSUd2GiSD4Uw7z",
  "key17": "3XF4qXaNVEG9u1QTkMsKmBtADpDeKAtn8E9mj88pEuqQ1nxPoLVWbD8uo5wVQs4wPzzvzUXbZojzji7dik9UdJih",
  "key18": "2PUgr1QHBhH92mZapPnjtYhREDTTrCPVSYFnEQ5kHE3TK3V1aoyDKho4SDNW4nmYFovk4UwLnQZtbADwmTwtite2",
  "key19": "ZGRaV5pKYKYweY9RWnBg5XKR11t3fCHoRXS3GQqEp38ynt2nuumGvbPsjTeNy23cUtGCR1WUn6FhpGK1HUvH8p4",
  "key20": "Zxme728UYjPRGZ8zFQ4v4zF9E2XNCxduzagDRZfKqixvEFbMXgJtJiCPtZSDXETZ4Vkhu4Ye2iV93ntiaB4rJwg",
  "key21": "3X2DHyVKm4X9ACDXUPzCahX6EbUj3RzWoTWebg9iuwQPPhskYd8nKSBSNDKkLXcsxsRWdGV8izWGH3VaSz9i5tZH",
  "key22": "3JpZeqW2B9ZoXPb2XwLfmx4uHWWNVUvKWk4EAtxuwcGVYNSqs92PZD1pzsAtkzGx7Dx5k8f6aBqTX4h3r44Wfg2j",
  "key23": "4Kc6etKn7ncujYuAPAqqp3DeCZb7xD4cBq5WtSDiDVxX3AD8kYwWoBXSuFC9TZMmdbjTdrQdxKhNe9drz2DcXFWa",
  "key24": "3jnqrNutWkAFxs1qAk6P7pxQ8TjFRUgCqaxa7DgeJfEkzw3cFNK25sxXdz6Q6AjTbLND2Thy5JjUgPgSCTe33VxH",
  "key25": "3Cr5wrwk9bAt9GENdyiPMtaSfjiCTi8hJqZVHFYQykJHpk4qHsuGZ5wQrwMGoo3aFRSy7zkKZ99RamZETc2kKYtG",
  "key26": "4kgWpZKdw57yz4VXqn9bLBhKmytrRsda1FMB2tDYUvrx2iGG89RMSszHARnrW24kRmuXfWVmDvSuEK2cqghb5cQ2",
  "key27": "53J8nyh3E2E8BVQri41kdpWMw977CdVcXvofS6xn3wQGg1119ary2K69D6HZCbecWTdf2weqFvwCiXdgyANJE2yE",
  "key28": "3Q7vpqECfxGCqvTrykYFALvDH3D9KmPo8zMsMDU2hmVvteYpLvX7o1MoDuwWoNzPJR2tGZ7yWXAHN4oPBbVZa39i",
  "key29": "2afZHxkcPeiHDeciPRWRhJhmddJR7DAFUyvFRdCspNSeBcQcDxHjGDhww78s8JnbXqk92YrD61EaJ9i8JdeFtKqj",
  "key30": "UwjBbmFhsoBcmQuanxtBR2F7uSiFvuHnY8iJRKZmSTUZE6mKsKMxp9c17ZNqzssW3CkfGiSiux4DjCYWKDMD2ph",
  "key31": "3QAD8pQbyrAe8g1ABvvfEGxLetxwfAozR8HMHVqds2dTySW48miA4c5wwq5YJkAEY2LD2N5zTeMRefwbrXcXom3W",
  "key32": "6593sTz1i5cJRXVi1aFyV5CnggoTvb65Rm6TLZiFkBVGkvoJ4ERiG29NQ1meSb2YpxcFnmeySMQ8JoDZf7vFLYd5",
  "key33": "2Fcf27SYuswYrAkGDdRGuzmkU957CTmsjz4gRA9NShN3Mr3SCM9cJf3U2ZzMNrChfEGKKqSNTiT8inokeN6hDgnr",
  "key34": "1wAw7W2Ru9ctF8BxyNRpBpcmLmcFmpMCB2VT77zjSoLw5goatFvMfabVL48yQVMmZxJkj2dvXtHz57m2mQn2aYg",
  "key35": "Pna7mikc8rBZ6GvUAnDYTkyJE6SP6Lh2mo1z9Ujr6GtXaS5DcqffKS5775t6TvfWirhYPc18cenAknomjKNKnJL",
  "key36": "4UgoNFCohqD4TF3KL7uqSFR3uXsXRHomxdyGvZhEUdjDnBK5XzyUNy8mrD1s9BdLURMXjpoFbZY54WtxJFipWfbJ",
  "key37": "2Bmw4zQK4jomJvvGPoVkieBRPa1P3YBdyKamQ8KDycrfq1eRWDypVx57KYM3Tz5gcVePF9n5fQ83LFdxeoUgFsor",
  "key38": "2xmzQwjYsg8MJe1dYBMNmkyyM2QnVyuJV8qDWrDEFmQ7KB8m6dn494ixKEKMd1AeEwkBfgB4ajDtymUNB6amezBQ",
  "key39": "63Bi5xzVtM9yUBYHnezAWHtcVi8tae4TBKbbSRRESdjpnh6vp8qeCYNW8ta2XFnkagVXfqHZhaSdUrCMaJiW37wh",
  "key40": "4NiAKow4qoxyHezVS3GeR5rTWuhfHMd6A7Y4kCPq3rpez41kJXfGjVserZU4Hf193xe7Zvab4nY8ohqZkEbLpQH8",
  "key41": "65ZsKuCWV7deGZAANdPfHindPU319Vfita6TgHn3XbhU1oYHqhzcBYvHSgjLRRrGkDu2xyMXc98QpiGoyTWHeF8c",
  "key42": "5Rup4dnvKrW31JBAFmEuqoati6p2GGKWruGCFE86DAuf4DpkEyMLmXACS2FouZFnr8BuKzBcy8PgZW5HXxvkUuBC",
  "key43": "2CXDdt4moabMPfmg4K541CEnGbPSf4BNNBNhmCBpvmXAJceW1FD1V5yA2SPmbFYbqmFkg5zAu1V4CCT5N22q6yEF",
  "key44": "2h8aqSwuGUte1R38uUAGNSriFdUF1TnqdmUYeYufXPBSAG28cz2hYNRF5tHA2MnskQF1YQUCKMU7iko7t4XV83tt",
  "key45": "jETKdwdJAGnSnX1WLVWoCTF7DNoeZKR6Xc1xEbEnninyv2Mqc51oy3wNnS17h6cL53Q2bCsnTWXSuopaKTazpHe"
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
