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
    "3SPZeh2hzahP1cdy9pQvStnXtTwAiumnECr2CdyfkiNURRUFhCUmNokQdEPEEzRutNnv8j3PmUUHpDsExeW1ZjL4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33W3PgcqHbjcJ2UxSzW3HQK5ySiVNATs9fiBMsTFsFYNbvB6LVmWi6LHiDf2JSJLTfedAEAS6wJh5Hb431DhueEC",
  "key1": "NG2moFKE5nQHwn3L2xyUKkm5zWRQ9hdvvjsQ4e2bTZX9JD9yfaHacxtHyBJh6ujBd1RgZGNu4ryxgdEkUfWyZBm",
  "key2": "2YSHLLnGo7wSycZNpSzJZ1KNucBRj6jYzrn2W1SQRWuUZmVmVgM17d3zeMWhVP2wLx4SHxynqPEgFzq4KrQKeY3o",
  "key3": "3tpJY2BSuTvhNp8SuJfA28h4EnpTdc4covP98v7i7Y1fThK3x5mKdomUVb2SQCESs9KwsUbpGamoE8zBoknEq8bH",
  "key4": "3W7zSfHM4CYNTzFSxeYqjAT5yYQtnrz5V1Uop5Qco226bfySfKTut9x5gZM7FgSyREzeRR1uZRLiiXdoi6VykrW6",
  "key5": "39jaEtmSRMd8SvhvdjXYqJBEr5KGuh223JsaDQJrDBwmqm7WbwCcrSx8nvHGP4FTWndLc4fm7CMDyND4bvy7is2Y",
  "key6": "wNEYT6mPsiuoGDRaZuW5t6g5Ky7DT78kbssLQxWMGTQtifL5yeAs5bPKwm7NgoZPH2Z7JdNDLYD8u1MzJBmEsPY",
  "key7": "4yVHBy3GBN1oPhZccn1biv4BGut6LWx6atpxEa2DRTTpoUJGrheQJeweKQG7DYZjNdrbXjAs8ngUUmiPWJcVzFda",
  "key8": "J2ZLV59ewkgi6MDs7PkHVt2J3BftRaSkTJtpayZpHto9Uicv2p3FYpEA4XaETXAteX4ph5us6odNzj7jcPVSbYk",
  "key9": "3Fhpa7CA4AQKzxfnEvhS4iN3xD62C8QJig6zB8tLHLq3gqodcU8Wx6ZfKnShdDtA3EB4UebDYkpKypJ6iUkhXT4m",
  "key10": "AsUURJpiU7z8J7yviSwrpC6B5vwRwatDXMY7Jvt2b1NP3gewxcvjTViYPByPvYLkSMWkRUrFPc8245WzutSP9h4",
  "key11": "a1FCz2RhPAfPCzcqdWNPzx2z4aRZsMfdzEr6kXssApf5tsCcHqd34UxuqMruDmTeiwGqjxWRA15zdeHnT8AuQY8",
  "key12": "7oB9QMTpof43aivNE5MamUYte9M3gJuyKVABWq5F24bR7UTuwKi9xuYWmd7XiCLi8M2ctCUgvm6wU5jcQgMs9pp",
  "key13": "47os5GZ7RjMhhLqTAczGfzRhtuW1HCK63SjoTRM7XKMxUkGwzWqWfwxkUJqbHSsMVcckGXTRX7WedH38CoAMmmWv",
  "key14": "3CQ5dHxNTU5G9nPEXfBcYYDTMn6xyQeNCiHxRHoiEF12exn1BgT67pntuHZMjHLfCn4P8RUGdiXBX5Vxy1acq2MZ",
  "key15": "4BFRLy36xUsmw3muzMeCkVBpz8HmbyyJYFo2UtqDXkeQfn1gwtKY4ncFWYGnM2vrM4mQ4cRbxrwQXzKMfvRksQKY",
  "key16": "Ga25kJ5oCeMLwxVgyRZuaymQ2DoWxvoCg1Y54VeW2e9ZiUua7phY6BjsPWdgVL92Q1AMMTdjeGdvnQ7TmgrtxwP",
  "key17": "otpZQ1wzmMtzoDw7ZNxbnm1EpekcXZYhJNJKBcH6Xq7aubLMhA7rTDppCpGXYJvSVEEmmdXp17nKMvQm7s5D5BY",
  "key18": "jeQgVskFwxWzxKYHkS49a2zqqpkvY8fmBmz9ZRVa6vVw6qfiXLLysV6JEnA9vfszzC8Cgp4ybtJCbpQRquU2YAT",
  "key19": "5CtLzt6QE7JJ5Cm1hkQ51nPMW2CEZLL5jPGarE6fxRHpSaJTFxxA4WzubD8e8mbbd1D486rdiJb5KmhFwPdPi3rF",
  "key20": "5jpjHLDVurbB8D9XhWsXquCkcebDsCH163KvvAbx9zbZoJHQA5PfCZYRuqVGSN5KVhFKh5tCaZ2Eg4NokznHJXS3",
  "key21": "47LhB6nvcjiXNHVFeYidMzu52QZwxQcV37v4eN1YHHRDjfxEZiYWsRaiyiYyBhZivD2ZEepB9LCPwFLtJ2bs76ap",
  "key22": "2QEaUam6VADVBaPEU4hEyg5cbFwXfKwb3MKEf6bKT37DRVKcGZEmGtKkXRoz86tfCTgCvzFkb6UjwGLQTiri4cDx",
  "key23": "4ALnxetxdWqB8HMRgbLVvvnCKQDHvyMFdbGwDRX82ZrD7rmJBCMRc4QHcyu1u8C7Si6Ho33E21RGYpDvjrqEqUed",
  "key24": "3XvU6QevBH1VLbTcCnA9S7j1btwKZN7TQ26n2s313mBDCViA3cZmVSTGRNAQn36suku2z7AucFhvwpooV7kJAs3",
  "key25": "EDAt6NdSEbXKrBxc4aDXvHcVgyDT2EvU97RssNnZ1ze3XrNBEMcPD8dHbcqMZ8SKauaxzQhPMyB8haanALuL88a",
  "key26": "L5HWihH4DkV2QLyBKuT8yrMPKb9DTvfjU5L9FtK6HpKdAyGWZMAXrxTYPXADY9sE3AoDARDjX5NoVpoMymE5d16",
  "key27": "36xsD4b5E1h5q5wA1CBYtstVX1M8TSzqWAbeQvj69D1NCExLRzNNHkPYc17uZwGYwmGNL8Ak1Gk8wdVKLDSnUbZi",
  "key28": "2UnszBVt1KXVDViahXnsXQTeRPeuahKrWK6bBcuieepWShHL2N2xt6uNepHM5S2L22k9jH9ifBk3p9Xtrnc4W3bd",
  "key29": "2HybXXhtempKJw4prwCU6tme1HSyi9nceDzm8w6p1PZmk1kUwcE9ZyFsB4dnGW5Y1mWxxfk4F3GUh7cKQ4wbW1Ri",
  "key30": "2Lix2D23aH6d3VkWhq1uMmCtMR1Ak98ypc8iutSZpshPqJWDe477v2NnQAgSaGbeHYwvPriLJDUk9P7qNQq865sM",
  "key31": "q7EGT7MLQ9f1gTV1tGkZkZTHc3b68XGeFnaMHVzLTKz74RUM2EpkTRECh8cb6t736mGGVaAbCGoU7b9aWAAuSq6",
  "key32": "5eeGku4Xmnrcuy2TPNfTX58G4qHrGFq4TV4vvBZzA8eGM55SEJSWhhajK6A47mMVRo3WsTYAaDopAVz3gXg4WAZG",
  "key33": "4TixVhosxLZKyqE5fGo4bE6o1e1i57JNMFnSkWgLdsCxr5PdnNMyV794DJ1mUh382Y49EPniL5RBxhhSKtmqhusC",
  "key34": "2Qmeg1hYuDmkxLSd4WCZDK6AmVRjcPRHs64tRe57kmSo4QfcDAWYG2UYA5LSvqp36XRFZiwm36pir63Br8gSpqM5",
  "key35": "5wkEPcuLd1TkTjLLyaiER2vS9kQgdp3k1H1pGtcyrgMARvHefeekgHbmuhYR9WnBpwedCnXrLd2Jia6692WzCFRQ",
  "key36": "varzGn6eWZEAWidw1sD1MXjf2MaJRwDvWXREzXHZgUhrayrDKw6n7Mb6tEECZGNp3SQDpJdeV2fmbTc5ex5sJv9",
  "key37": "2iQPqCqsQAP7N9VSeSQu22L8myjW3wMSafeuHn8opdH8qb38MBneSQbjKETGdYUhhUauQpuUeqe98pEJwjXmBYpA",
  "key38": "3AkeCdQcwT1jUXoWxF1Aqr232To23PfSZsk3L1vccFtmTL88MB5evNa64aMJ4dpGDBcb7ZJowh8EhJ9mxaJEuVaS",
  "key39": "5STFkgsEH9hoR1h5tuRZfBhKya2udiAoFLzrVCB3gFYJ754AccVBvWbMbK7RwAPzS7mjZUZeiWYd8iWyGfTfbV3B",
  "key40": "3mQgr3g7C6d38Za7TFcG7eeCMjfoKrvZef5NQCZR9vENBMinvhE7KwAeSDLvCS7e5BnfvKTSv2CLeujtPRitSgRV",
  "key41": "3PrgxkjMibCXuDCMduxXbMwAp4EL5EexvoVwzrsNtudWzthV8e2hscmhsaofkiwtnzSfTGr3jcFad6mr3pSh1qVg",
  "key42": "5tLFRM7M9nfGvnuhVeqykjLaHTTxVDnKbhTRfZj3rPkVJnk1LEY8dHMt5tZpJDsJYV2hrtRh8P9jP6usAWan5L2a",
  "key43": "4fujorTyKzYUmcHuNBQRkQ8dXbbuS7Nc3A4bQEYWG4ssEJJHpGHeVfxSkSo3jGDCkiE5QtKBBAnDh8cWFvLsmPPA"
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
