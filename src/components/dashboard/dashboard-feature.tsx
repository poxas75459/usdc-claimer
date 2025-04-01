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
    "2DJDbuVzPzXhywXoV1mvyw2TSxPXLZkKZ7HAXP8TPrLUhGVqsiQ6RXD7hpVuTjztHmpamnZzfZNwE32sq3wCsx8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zaipHdfs26phNCDM3iiYSCkhEjWBA3ku99SffBDCYzvbCLMQ6fPkZ5nYuWZRMzRSCfVHrX6Y9FBbDHwW5Xjzw56",
  "key1": "2Ra2vtrBwF96fwEBF9okf7RNM1V9NrzB48jgbmaEaqNC3MzmM8GVopbgUCjLD1fZ7ZQzqGTPgf4MH5nhhcZyAJH3",
  "key2": "occmYcb3dXYvwFTdMZzGJYJwsEN7UcLwBC1HsF82duDU9iNftL8KwYFTVLgAqJ8XuQuWJhpa13xBGmWpmujcJLm",
  "key3": "34HJFRM4zUDZXhdEpZ5Sp11QPKFcrXhtGFcRm41QdMwXDjcZwY8jPuj2XnjXPnywCSoRWmpaj7ySuGnLdEEcPB7A",
  "key4": "36xr36cKpvtAcPhXkcuSRgBEAZPoytXaspmoEePqXPti8dhyWGvKZUnmnbJxWJWBQV1RUdAQeoXuXVucQsBszijZ",
  "key5": "2z5aJfzMQQs9L12ozqr2WnkV3PYdehS3cd2BjQHFt8ZFrbtCpNh3VzAeVpQrjNNbVh1thds75d4EJmENzCTFwQZb",
  "key6": "4xbKg67pjNmP3LAHzWnRsRuvVqYurY1EWjQ1AXNQquA9fHSqAmM52fJYzz8mkYhFyk4HC3UL8EGtaL4jcbhNbU2o",
  "key7": "siScVSAZzBywuVzy1twjkJaGQt5mRL57z5H8xp9WQ6CxTqCUjxi8FxAGjCma23j7GiQbs2BvzuJLWTZLggTYyyq",
  "key8": "5tsW55vZFGR75E2PaBgkrN1qRKsQ59ZBbAUMqobhZT6xSdysCtu2gSwyVjoigeMCHkLf9Dsqz3CZkmp1MZ1T48Bs",
  "key9": "qAtEwur1WZ8g8KXpv9rSMdGdgj9AgWn5RjJsCbsngyV4hgfRJF6VA3xqTkLpYLCSXLCZ77trgDmq2c1BkvXuMYP",
  "key10": "65bEM5m1PctDr5GnYb3jzitL9rtMn5DhhW11dzhiKAnuqax3pPz3uSn2BTWRyX9dyzFzNFUsQvK4FJiimvecYhe4",
  "key11": "4J8zyoGHS3NzquUeamqraUy6iEVasZSYvizFV2fuZh4mEiKEMa2yCCaFSveMk7BaxKHiiDky9tF7F7gCEj6ePAxt",
  "key12": "uQAqPX3uoyzE6QWxzhn8KvHGg9JeakkNgiJRbz2RstHEyZR2Y58621cFNUYn5Rwi3bHYwH49BjEBpsS9x7Rq41v",
  "key13": "5tsigzaQwTVnePMtsSvUXiw43gScfASnTZeBW4GdxytWQHfKnju6YipoAFPkoGAVhRFt8ADZTRdFjh7G4e1cDEJ5",
  "key14": "5oLrN74AL9m5Kre7RFVWKsGbJc6aEtgLCnQfX7sZCuVny7hd9gQGsE7zJMvStx65tJVVXVzDBREwRX1vgF3ccUT",
  "key15": "2n6u9mWk7b1UDhGNBb8wo3pLXncTdsNA2nwnP9yH1YtA9vTWVU5wG14xbE4Qwk5Ud27fAX3MQeukQifB4Kc59Nft",
  "key16": "5AFA6jbTC2tjFmyqcUmdeGPGuhTReiWgySZEZqCjdvKpbNQQQtAQKQmsD4EwNvpK9nhg4dhfK7uERqfzdx8hiRwZ",
  "key17": "2a4kjENjkgTBQ77UyruGpBTaqanthhEHYSk5DEgsb3sLndgpxeYRhGvnsoEZSc7aGJEubE8tnznFjZcBgCfpqbZm",
  "key18": "3LqY4JjoYRhjTT7jiBDbufsCPh6KF6sdueKQG2CHuCbsXfmxVVCdfZ4d7EwPmoUcsWjrfyYedqhAgDtf1wUNytHH",
  "key19": "3DzRSbVXcVcpzep7vPwrsK1vaFQL3WpSRAdKUSJinMK49Fr5LFgvJKd2gvfspuhkDJyjW7EGo2Hj6eRxsgjaX8Fp",
  "key20": "628JG1ckQGTsUPBoRCHY9jdWh8tPwhtjtKYMbtBPNzSofEsn2UyUmgspUHUfbm4kzSKN32rkoawAaTE4sv8wTFxy",
  "key21": "5KRQwE16RVpMEWBt9FXmbLPFpFjgrbsnc9Ze9VGqk7fJdenNrCQ4YmP737mX1AXrsPQ6pUUhio4nkN1tNYBbHU3i",
  "key22": "5x2MpaKRzkHFFk4xaBKPwE1u3D4wyx8aKUKn8vw4ajQyohQ6ZUU7MWBebbj8k7qvR9Voo7NED5tjH6iX2kH4ZCHz",
  "key23": "4fAckgSqHW4f4F3Axzt59jRrgiXLmfPeUovLNKucBxf37qgbJW7VDe6ZPYiFYtVYRcsWZmogh3u2MqFGeUNFnsoB",
  "key24": "rKyFYp9o4d9cGFYmpiVibXaUxjUwcqJf3MZiNJ4ENqGeNtSijHD3KKYxahd1JqJ4nBCKDSPbGRQbDxRW3PH6KVP",
  "key25": "5o2yQfAWtbbaok3fcXGBMC1SMey7FKpAntp8XGQ1GykL2BH7dZFnJy7FrewTi4Dw577sxkTaxeAYuUhMR2pmTBzY",
  "key26": "2kVLGMHYiECqyPbxH6foKr8L965hbtVpyXeN42jc8wHh7kb7vSLmbSTXe1ztqsQNnbZBKpjttF3Y42n4a65FoEg2",
  "key27": "3uH4VjZKDZ9Mz4Rb85Hg9x1YrkkHBoVMBtiKyTHdW7h6AVXGFip6zcNxoQtMvuBauztuwDQ5sRRbaNRdn2Yy3goD",
  "key28": "3ZukWtNoQxgH5PsGh5bDHRMiAKHH8ANjywh35BaT2bLbXbQsFQmwMcfRg8zR9cHs1ftGyrEDUWx1Wbmkp1zBKbMx",
  "key29": "3ZppvNzpN2EdwugEagLrYzJzmwGSGP4yor8oh94dQPMiDjd8BuSgdtkhbrNrB8jYHQXozHU5pnC2QjMcTAEVVqMF",
  "key30": "4cH3CcgDYBafkq5gBedySc3BkaZpsEjyrKp5vC71m2PyB6qCnBLpbQPrXdkUBJ9vRTCTNQMsBg2MdZM4N157qCQk",
  "key31": "5jfMLD9U7UHBL4TEcviDb2uMLbmsGUByrQAQHAQvUVxWQgLgc4kpJnQwPdAMw85uT885MfHBtUy7Kub96ZGS7y5S",
  "key32": "49TVWqEB44e5XUEziepyfwBLg3qTPtSsXJ1X4Z1UcKccCMYqijhMAp8sR6VRKnG9BfFwxbuKV8abFjZmFWaoiE9J"
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
