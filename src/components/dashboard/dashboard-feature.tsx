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
    "2vrzTiR3y9cPVP5m4TFcwK2i6qtpEJm5ivVEn1mHw4Win7EjhNG5mGDABEpghapcvX16NFmnc1BdGpypuvEbjEC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fpm6391Vwm2J16jMkbYkRa4qf4KhDjUEA2rduYb7WSQ5sWabHhVL8EQgBCnHjQk1ESWQQPisFTdnZxWvCfchvSX",
  "key1": "5eg9ShX7XDcZAmDQsLPqa2WBPm325Chj8p9yWfgqtf3irkskrgG25DtW8zSBaC7Vg9wLi8za1wecQgCj2X5pXEH4",
  "key2": "ySYC8q1xQ79NVGnsGqGNWTCKqNzHoifCYJFxf9EHSctjXZaBWGhDS1Atomqau8um97KEc5YjL3Hb9DFHtySnfu4",
  "key3": "c3wdBLNSffrSfv5SgwXKxAvtTaQodRKV75GMfAeXn8m9vfYjjVxosiadSFz2GUuabadU5v591ob7WcskSaWSeFf",
  "key4": "4VpaKwddtNwXV4DJirMXuFGL4uuxvSh593R8ATiCmBgSGa4hgottg82q7WvB2NbCYhwj5kD8nj14HU2wJPtRS6Am",
  "key5": "5oyZdcaZB6qCNZALDWKwWoymZPStZJgD5faXZZjG6AqsEkE4L7G9EDBakhhCy39QBXTNTuRr8XMX55JQ9Xo8XeW1",
  "key6": "3WNBWycbPAQXCcUFhErM4srvRo6hUPiggr8CHVmchivNmejq6YmDKiPrYgVRdTpxKT4tNKKG7n1QhPebe4RfhiHF",
  "key7": "5mvRvvdLTZFdEDkq84Mzq1xjbCPmyTrGVEvWGYXzfEeQthAhbxQEDkP3eA4kWcX8JwBwyMoeSxYW3ktcx5Eftr6T",
  "key8": "2qH8oRsrrtCaHe9CQEpqgauifEBqFaNyfzTedkZdrwQ4EuwZnAxis4y6WxTpfxMJ6MwNTGoRGt6sGUxBJCSGrMN9",
  "key9": "5w2CMksxHUy6MdRDuNttrvP2UPGrcV2LT5nDebCQyXXeCkMTnRTEkFrrRrCE67CVkEvjQjvxb32FuxAcWBBvWYwZ",
  "key10": "2vMXGDyFCgFWudNRfahRC6K2KmuGmtTnZKswAAurMqb4GLZMzH7wG2TTm1VED1UxxHLSZdXTUreejPx6RLTH8Vd4",
  "key11": "3izEnWEnr6xPjMTe6YM4CyEBaHrSArMUkT3zPNx3kA51BRniWNSmH4UC8y9PWs1jAFiS3vBusVhxcPz54AX8KfjN",
  "key12": "5Ryk4EYcM28iRSSc342hWiVcWcFJzNjue8wFHjqNqYRJbvxuRj6y4jftHD3Eai4k5uWabZThd8SpeQiniKi2Jcop",
  "key13": "4rdFc9jQbGhu87e4MMxrP8PSk9zbHpggdU79fDgVgQynhiRh3FCwNnUmbdjj7HTFBjog6J1bVZ9J1FnaDic8Dw6d",
  "key14": "29Zz9Nqf78mEWDEi6Tzbp5ddHFGtSmFdQjKVfmUSniwkBVyKjjtX29pemDMTn7XBUNsUhMfmfZc43NsUwCc6Df8W",
  "key15": "FDEEfa46uLduVeG8iWKikPnS1EddoAEU8MGz5sUEmvdg7tp9zZaQR4hmUAuBA3GsVRdHW2QVXN5WqQfodaGJJBV",
  "key16": "3B4kuuEifsZHhsdWQoAZLf6DLk1DLS12vJ5PzaZo13ce6MiDHUtGSiex5SCowdobv3bV5aYgdE3Vx7smnZtQ9ivn",
  "key17": "x85Yaw2fMXSKGVhYQYPKJP99o49aNHqmTgUTmDHAtSmwjjFB4bHVTLepoknY1tivA4fyAB5L29cWBteGDink3iq",
  "key18": "2kNEVdgqpEi4se7yzkKYRDyZcqvDATcrDPwyN7Hhn8gwzh5kbEifrbYkLUDsnEawLm2ynqW2ud4mTMBsAZoCgiTZ",
  "key19": "478K8C5Jo9UdFu6r5emuCxNk8M2HmNLy5hcA8vaGc1kPH2jWZikFkqD3CACTg932tMYKf5j8DCy7YqG6Mv6caWix",
  "key20": "2HBqqetQfKhERxRv1Bmb1xJBoPmDj1JfqAdZPCCXm8YzzAz3iF3rJAk6t3tTgcCuuqoNzt7RRGBdiWy4xgxATWpg",
  "key21": "4QkqaygxCHmmy31eEgKfJ11vLmr57VKdEy4DDNaYf4GHVUv9U6gAkT6MNXz14GwZJ3pvDVZLy5RDH9mnzEFbS6Yu",
  "key22": "2DFZ2nnN9yitdX1FznN6mBPKYCTQQ9iydSfaXMM7pcc5cyYVTAAKMyYA42XmvsFQQWEVj1bVPWK9zydCt6MwWCrN",
  "key23": "2ehMBm3759Xm9U4LmPDX4cSx8NKTc7Bbtm3Wmxcch5YZtuZNFrzo74MGdn83hvm2X8e7vVhARRzQ4636ahPsR5uG",
  "key24": "4EBRrk7TLo4vdTa7SNQYCnFgSYdbrrc2onVr6TMACfxJeCSuX2JXigeRmPUTuHjCybfNJezS7A8QN8p9ejcspvhM",
  "key25": "3tGCvazT68Jj49WJFn48geg3fk2TzePSBod8EQUZaPNVQwdWkX1n4hkxhZUZw3Ae5s4ZYkr3Hb9LcmMh6SjR1QTg",
  "key26": "LsMeqTLwjGWBfzEjkr39tnqZxs5mYZ5p4CMfj1e83RpjELnyP6DRTQ53cwWjq9keeSzPyyqBRabqkSL3ueTADX1",
  "key27": "2Y84mZmaC7weRyRMneq3XYfNnwjZep6L5vVBJPwDtod5xiYa1segUyk4Kofe2dWU36Sk1mCzfpii3EvCjwRkRoai",
  "key28": "S69RC79UfpPzVxEYz56v2MmbvBvL6GPkHb5ypF5ZskC4udLBrwBxR5MHY1nqWLLsBBTf53nYR6WFiWAMZJBJtu8"
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
