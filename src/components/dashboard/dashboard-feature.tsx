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
    "ijsiiR7uKZZGr74xMPePpXJtb1USAKuf2YVWR7DHqMMtzMscQ1AhG2FtGUgQ3UmreLZuHuTaKiapGXvJ7oScbLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fA6ZKHW9B7rK9TXNav7wsguYMohiRAEEJNKM2pkQHWPkFncXdgU5U3nZ26AttiGPa7sLUCecetrUtgtckYkomWt",
  "key1": "MtqZnS6dpFsMRC4FBTnNduiAhw38n1kxt12f2z2JbtB9t42wxL94xmDp3n6MSFmNoCSk2BitN9wASrjeQXDma7Y",
  "key2": "BWPmSUWzDXHQY8baCpVCEWXicYMoQMBkkQgecgnbkoexUsFoFw33a8pTnaswPkLbuxpMgpkJMzZ5mw4HMKDmz3n",
  "key3": "4yx69tyHhfKGDDrvcESaETnkbb5jNaaP8Vp1jMEtw5hLgKmiQKuVa9SbvQMY7pziXU3o8XF57DLEvG5Qors3XoSf",
  "key4": "4f6U9Eg1mTLfMnmZQsTUfVCadkzQ15b5bXX5CBE9g35dt248gpq6mXWVeNnH1FbcLfFxSXBFWA9a8VprUvHvKGqq",
  "key5": "2bbA2hRF9NfHAZYhdEJZYsAGQWT9yZEaLbB1MbEWbXqd6c7d7gTYJZHDdLZbfu4XWiE9aZF4qvg7q97pUo8vjbri",
  "key6": "2hJGhPgK1yFHz3KbUJas34Nm5rUKyLgDy3GggyxWk1M78C9VZ6sACXTTuv7fhSHtYsPodLqfSy6ZZ9PNwyw512Zo",
  "key7": "2E7rT6mEziVnMisLon3Dvv5FqTeVPtYE34RfTsBpUkfcZBt7jsZZPWQX1417C3J57TYqDt63faP1bsayBjXukpio",
  "key8": "4U8s1s5jfK1bgjdRG53joAS5ZN3KH1oZ6X8vLFNRCXKK7CMPC5HhXMGjdEY63ETCEpA9G8uE4JwtLe77WzbEAPCF",
  "key9": "1m1ThHcqnmfdwtfug8mx4io7RmenezhxvCGUbRVdCufoYTWbaSwQh5yrej6ryheByznpTmy5VrcHPEcDvt4d9Pu",
  "key10": "uBzia8jsYLwTHudvFax4vGc3CwHTFwLZ6Lm2kdgu2N51sRcG4bFMCU9sg1ViKwQ9UUUfiLmwGp5aH9QzE1QqESL",
  "key11": "3LfKVLQymacgdQk3pDU7SPRBeQAzKa5Xkdq96VhX47JPYyUrFZAmYPCy2T8j4z8tVT4wmrrTMHYMYnLAXEqhz9n5",
  "key12": "Wr3XaYunhDFychiAoaL18gyCP1N6nhCiqq8r4RCepfFun6je8DfASoqMJowRTkk8s8HMturWk8MxeoKxdGdGJFu",
  "key13": "8wCRoewGuhDqiLAFRKa5pHg5i1bLwisJgbUBNHCb32R219w3KkUbZkU9wJZMmBGgcezFRMLqDQtoSMRRgbq1Ldk",
  "key14": "3Gs4UFkZyksh5haFxcncbGsKVj2Vg5HnQhZrs2zqBpNtEk79Ba6eM2a6TLRtchaCL27FGUgLBNHwFV5X2AvuWNrA",
  "key15": "Ay65aCyf5gqYdDpy8kMFABXqRLE8azSKkpTgRMCcg75yYiL2kApgjgtzU2NKsnzPewivtHPzDhuq6agYdvFWL2f",
  "key16": "5XU1JHXGMb2ko8gkfjeJcggp9TCey9oRxGm14WaJDqeNwvir4tuofDkEecJRTQ6nvHMxJmhw5pHap7WSG88X4PgA",
  "key17": "5euJ2QN4uBUvz7Ps5WJZ58yQ5YBgA4dyK3Ro4VjzUJT4jREXfuT7KWj8eZ3vXEVK1dGe72XKGeusJwgrPcacii8e",
  "key18": "5v4JVWoMzGMMJyB2NTHn9HgSLFmwwkBtkgwqRnfg9UuXmCTUzAv6cwTYudM6RTe4S7goNUc5NZSFShTX1KoMsLe4",
  "key19": "4sMcrLcELzWLXajauQLGUvnHzsdwPxaofg3VUBfeUVSz5vANbXWmTE4idX9s7CGazrnxKTQRLyobu1cmFEHAviNo",
  "key20": "2hVr36jVdk381St98G3EBzHacmvbbAYtksn5WZXsU1tvb8UQa6XZYoL7kid1i8npr5oQrTZJhAYU8zQToAEHKiyn",
  "key21": "3dbVp7gYnUr9NwUsCL3QKRzz52tUTAEwoqckGoYnBHPwSmCtgqF7HSTpRXvPnJoJsi4kMnLHeE5cutuN6RPcPmAt",
  "key22": "3ctPZLvAqS1XfugkcDXCZA5JjcRNfL4xJKKrEGRxJow7mZGcydFGDcGa1YfLF27WXBcodrYYT8M1Wyvrt4JTmdJc",
  "key23": "4bkXZvGruNDGLZ2mHFX3V24os8eyg8RJCkospHKi68puHVK2pdqVnJxxYkdpUJh8u81MDk8gFkBehGG2XaMxq9qr",
  "key24": "3b5Qg9EAs4wUZ4oqKKaCysT9bJrY8yH6jbiD773yxcpt5uHE8gSQAnK28nUTG7ei7xppnmFdrawg41Q7a3gZdHqJ",
  "key25": "56zi8BLZpPe4iPh8bequwsYYMKCTkujDMXWhJZM8qcFvhPtfvFt6fnQMsigBwVuUZWG4yBQzcTFeZH8CNDhuuFB5",
  "key26": "4TAnn1qKhCwLFcVxYCidv1HML2HyfxUw7j1ttKHMhxiCzrTcSNUFemRAB5At54TjPAJTXs9LxL6ydz5sbKi5bnyJ",
  "key27": "Nzqku96t8xBV1na45PNyQFfEcnjkbMTNDn2u3nJ96eF3mfnQHJ7igbBmh1mno5KkRioF7ng1xkYanVEvQRP25yD",
  "key28": "3CQtmdtf2m8ejPCS9YsvoCB6sQHqub5BfnikSPKeiD1cMJ8VnSXjWd4VrvHNjJ3vw48Qsff3bcRJW2ZQbGQoAAnH",
  "key29": "3q4j5MBVsTdUzshGkdcgZQqyc2x8MF5Taw5gKEKfUjamFonmxbZ2CWyHke2Pc7Y8FRjciqnNUL8tNJHXow936L24",
  "key30": "2NoaQptwuxnDnL2TynndmGWmNmTgLNr5HD7zubWE4A6ZBAD1QCKB3ZAZ4p5vF2UXCyVCp2poSp8ufXVRTZWFXi5w",
  "key31": "31S2vB5w2GuwEbNhTroqkuPy8dGbN1Pv6djeEfyM8w6HuJFWJi7KJ5dvNqK4vNYEZzFcviw2KrycdT2Nw1MQQgTv",
  "key32": "y1twGFt1CqaMECLao5ASGvHsy2kCrm6U1AWwKwZvDHTVvaPRWRUbppUaiHQ8HzAYpFYPcd4ck13sQkKhZHG2Zb6",
  "key33": "6souUzZCwc5dAvBouYT762EKA2U8ifZRjtFnhfRMLPVPfUb6h4YascYfG8gXg31ww4ZRZkHom1f3Gyxfihi7SJu",
  "key34": "AKZ69zNysBL15Erzb3VFht8KVY2R89gbEtY8oH1dREGkamHHz4s7wsBxtAQ9qhkbCVs9rtJtw2gRT6mJSKcK5Up",
  "key35": "3pDSx4Tw76j6RZ3uT3BZHoJJLWpHjoXGzEBYiQMMXmfv1qcWBy7LTDaBJ5TNauf5c8HJGZE9sXmfrBua2d6Y61J8",
  "key36": "2HiGsYkQbP2N7gNur4QnHVvKJ388mu6EKB7FRNq6wvwUYitCt83cUBnRiJb8qAnUvJ1i1x2qkMAxV56PHocpbhYL",
  "key37": "4ZVF4pygRK2PBMJiM7P9SZxrqBsXN2ka1DwXpquNRPExA8U9SQW5aBsQriPStYfMRuPYH6M2ytR2swbjRPti19Cg"
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
