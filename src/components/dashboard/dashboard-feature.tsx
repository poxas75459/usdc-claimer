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
    "4RpAg866VWig9k2BTXCHK3XByekHDB55R7jGAdH6j51wejkHzppZ6A9ncbvUwgdyVZspoh8qW39HGHNXozXjikHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AR2mNzvPz6cWHdqn55ZqSrJLExMs7zxV4qKC9njx6P7U2c8mAXmvatw6pbgC2yJbn8Jiegn2eosni7ECon9u45n",
  "key1": "5G2SBoekAyVbYF1xHE2mT82GVHTT9WSToXFEnmmPymzHfv1kK8TW18MFDFcmrsjsKK2y1CA6fzRDTmHNpKzaFeM6",
  "key2": "5RmULZqM3GgdvC3msdu2jURFBqFVbEaj7pQQ9XqbkfqJUkzckyjY8KV761eZSRBc66KJhMKHxfMRFyPARHDk4fnR",
  "key3": "5fx2YwhwMSuhdV9Vv14pjifC7TvXVfMntY9ZuaAmNHXUuSNbXxvr43EettSM8zj8SJHoK7BDtHXQyY8ibFoqzJQ9",
  "key4": "2fegyXJh5gv9tzuDfD4qUX5SmHHc5dkBphDycJNucp23URvjvo4JzUCN6EjePQsXwsgcxeYCkx5rtLvc36ALdUxc",
  "key5": "2pVSSZd6VbgHAQShrBKHkfhVpGtCRAbKdygdyQgMqDxhSXyBGcMREY1QTTf68zwpWZBPReyGE5NYgitEYykUA3Zj",
  "key6": "nwqUfdrsCCHZBF6LdtDpt65ANB878ZFUeasbGih5ELWdAKXt8fRF4cFsj1bsMPikpPkppgczLSCjBqgPz92Esqf",
  "key7": "5RoxtvnNC8NN6MUxU8gEdJXahHfukscjc3rKc7hNwtehMbGvk16sApnWwLdNFVvrG8DA5R5mAw3Z4pQuQBUEhbBX",
  "key8": "3Xoj1mcqg3vb1Rf9rZco4fuZeE8DQcZTvy7Ef2btAV7xzmSA5p8K21GQReTa5jyLbKt2S3QbRyr6gKQUda9nwFsF",
  "key9": "93dkpVzDQSvr7Litqmv7ipofMTTJULqE64m2Sy4wqcAst3g93ESh7zPUP8uDSQ1rWcUebJpLT5jEGudmuJMXTVE",
  "key10": "3zyzmrz4ov7WhRTVBG5Sc3KXpdVPQcpynaDWTJ7fHcbLhnTPz6eF4sw2aRjAVTMCHEwVXSNQyELyq6QEftdYAGfk",
  "key11": "3DQuKR3dGokwwbB7sQX7xKa8AKo8xGjQVHVJeJTyxmtMYDvA5kfE7dLcEYMZgV8ii6BbPY46YdRNtX43LGw53LT8",
  "key12": "2yf4WVryGa2fvTK9JJXeDyDRxyr36oCPojrpKDtDYJMeexXKhYTwUHxMHGc8qade2eVReW2psuU246tMtwy6DjQo",
  "key13": "3ugZ4sWrcXmhjk3c8C32jHjtJEobfXhJKLcEpL7FPctxJNmq83zv5uDbEa1kpY7mMPAerM4DFvVHiwCT5MEEjHsc",
  "key14": "JXrSAqidZXMx7kA9GyLgZeFbXz4g4apSgH86rpH94GSKQEJUdsgp6hCYsse61YNd6MgSWTZoDgSkfjZMYknuYxD",
  "key15": "4bbz7gpeSZAyfpebkxo5tyMVgnZ2ae2WoCYs2oyBgegHRgm82A2ihpvHsKkPSqWLZsD8XGrjLne8TsGjAQrKdMEs",
  "key16": "o32Df3G9vE8CDJJSahVQ1zaW3Ch9ww9AUBdsbqcANsqLrh8sMVfJg4NcoygBAU7Z1R69raf2DfSq5BjHDxXn5hy",
  "key17": "wrLJuyix23tHxdo38QQ7mHT5f4femTu45JcQ8SFA4b9hpLDJtWQDjfhWiggi7aXGPZiSX3hi3pAh2nnRosCUpZn",
  "key18": "2Ltbe7pG5D6Mf8KHwxNQXsToUYs29WeZ5qWYtefwno666DRakZFb9V2aFyEkT8RmGQTf2bwKTnFFv3QjKFMmXxPM",
  "key19": "5RvcFS8V2UzjEsaz4EcdBuYeB4F8W6UGABvLVqYAHb8i1PDGLEF8pVHMsjZBwJuKfZhqTVKWqv5RJmx3HMBk8pS9",
  "key20": "2LN3tENPMfXCDeNSicCorD986EbcLQjxE32tgoNoGPoioboWqGLNQXu3WjQrzEtGAYtwTzpyJBbWbVUytUVNf8Zb",
  "key21": "vMi2iov2JnuFYwq4JeSxdKMA3QgMaBWqDKR3Rv1ToQpFZgsVqZWHa2YtuKGVYDh44oa5LvFa45bCPVWkeEDXQ8Q",
  "key22": "7thsZn8iSWQnaXxA69dt4usDxxddp3L736doa1MckHUCJoUxEcTEEPL4Ka33iqFMAEYzqxFuBoiR1d1evBPkB6v",
  "key23": "5Zh79aLqjki7JYdweZ7pgiNK6MCMsy1SBKskSmidqf6TPV2oC2Q1e3yB7MLcraoWg89X8uF48kmz9zDNHwhikvxJ",
  "key24": "moMo3DahzerqMkLaMZGz8D4tkY6e9z5WsR77kkemr41ZDaCUPJ8aLrvoRtFjr32MHLVN4VfV7Kb72yFCbWtkbxV",
  "key25": "2NAqnyMf4GEAuQWCvBq8RKsgKGytYAz4jA3TjraSmwUZFcFpqEkzuaKWGhRWJNQCL4pA8R2LAHpeafm7sdN8bsU3",
  "key26": "2uTzqSt4jSEF19ABLJ5TEcGwmj5t4MGSPKp5BpEF6MJXh4VaCvCcnwJJ1Cmf4NxTXfsTPvYn5iDj9E1pAKpjbuCP",
  "key27": "Cu4JRiVjukBxNnnVHByqMA6GgXGTpYxg9E33Hw5DU1Fh7FyZJdmdVhHBmi2buGUGmyrQTtqKe1UmiiQaaWLcvkP",
  "key28": "5uhpYtea6MbDDgfiwLb1WNcJq4mxpNax4t6Nj6j8Y7JyCdJLKQuucc9WPoRiVGSeXzkVfuD2aH1z1tNRY24Lfjay",
  "key29": "2b2qUqunCeh6T8fSnvFWsVgR5jiXekWhuhRZTVoCe73Dec8S7ofSQQsA1SnuPZDTdyc4QDHhkph6gBCxfwUdcZaw",
  "key30": "5sZuwHd4as73X5yyYWRT9nraKWr3FSkwp2VFSJiZePNEn4hGqBxtfH69xV6AEFH9y9gZg2ewHj8vwtgtb7xCoQjH",
  "key31": "2CvVhbuCHqaXkAXyMHMja2fomCpEkDmobozTMXGYBBDBpri1u47CPaQUQgHDaGSKYr97r5FJTYrZENj68cTdqg3u",
  "key32": "4AM3GwqywdJCJmpt1hynZwwJFn7z9eHzzCTDH5X6aH1Kggr9aApMGZFgUCynceTtKywtXXfdyjaBFacfw7wnkXjC",
  "key33": "syQnvzcZCb8a2bj69FCGwW2CJw4dKZHqY3fKVyYcaKhihyvGMSg6yiKxh2vNZmc5EGuJFCbsigFiSJxQSS8kFNA",
  "key34": "3L8cR6ungk224qK4sP2oHpRA3nFdmEpVPQVYyAtBqvjEf6b96TW1PHUAZXRyWax6JtrLDQfm6tfNXCjDutYqiz5B",
  "key35": "eEe5rYsfM7qVpfbow3JWjqio5cX3Rs7sWZte14u2E22p8Np1k6gFN2wCrEPsymgdAd1BSXA8NQbKp9C4HhhGsMw",
  "key36": "5k4x1FEHay3toLmVHqXtss2LDdavZCi4rNcZ76nHGQoD2JMcT9vdvPH86t9Pp7TPKwe1LKSDYJJSP5mUCfeFQL6o",
  "key37": "5a1g8pe6Ln6ML15A3cnjm46oataHBoa6KjzaVkrujsAtafrjP6uDhxfkXgsWFyfchRg5XUPsLKTi3uMADpg636oc",
  "key38": "55AoDpaBR6DhtCTrUBpoP7MPXhKz2CyfVCQ3PaWY7epN6DU2diTDqg5YvobZd71brNTLWdW5ESv1RyGzL2UyBhi5",
  "key39": "5vEKDaNn1ho5LN9AwvzyAYjgBp9MkdRB2UbQjVp6qrMMxfhRw4Gc17w5ViG6D8cDL83N7yedWuiaEwHJESjKkMQt",
  "key40": "YJVDYqv2waKgbQJtgaDgU4YGrRn783LQKY5GLR6q5f4UXaxTkRajYKsct4rCixyYiq7jvw5W5BoJfDiJpNk5DQY",
  "key41": "3i62Vw7wo2hit6cbnjUcHVWZgYJqvJrBwE6jq5LW3MLGEqbvFwci9hY5H6to9xFSpi85JD91BoUYiPYYbz5kP9Rk",
  "key42": "GUAMLa67AiWanHHnr4qv9v9UEYLuDbp5tbjYsVDBqdsZUX8St6o4DzvE2bkuZ6kG2AL66pYEEQZZ4pXPiA5MgiK",
  "key43": "PFiWZiKG8WFzTNHqmLeWRBLqMkmgr5gpV9MwtGd14CiAEVb2zLZBuL4ekFaj8w9PpTMAVVzSWGCEDHSLXHNE4KS",
  "key44": "4ykBvt769aXEEuQ3vriz1hpBpKih9XdReLn1PCUTsVMtC5t5DHpXq8CodK7Mp8t6ymb318eAVFa7FHEE7bSZg1nH",
  "key45": "2TaKJVJv85k8dFdVf6YVXaDQjfpSWUrCVimD5km9bBgtuTpQ5rqHEXt3YWtfbafJr2GPmuswK47oLAr6bS32KN9D",
  "key46": "2rHxjWuzbSQzVTvAJcnAwCr8qnJcSwtDDfpUMCMSbiqyTzWWqcRjUw2nqJsRuEytNvN3F7LDgNpsHSYB2QRDkCmu"
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
