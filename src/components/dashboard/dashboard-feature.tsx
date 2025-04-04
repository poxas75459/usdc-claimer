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
    "R8v1KzXYeBpw1sx61hSXoQE8vw9XAq9ksa1AQAbEe2HsFN2cQ5g41SNx64Rkm3zQFziCWDHwATe9dEuoe9PNMWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cSJsF5mNMz9Tn68Q3Tosj9r7quNqAhLEMfTT59H1SQU2F5CsrXsWAyVcuy4C2jAKMBi13ZQRYLvL8kCxgWgeiBk",
  "key1": "3r1B5KsBxL6mq9ScPed6FnxfFBnwHfmUE92Vc9BTKffs28erWpg55MM2m22dKAekKSz5YKUxQAib3yn6Ye42jfJA",
  "key2": "2g43YYdoJHEd8o2ZHJxeR5dAKvFS9fqEgjdLFsfZop6Zoxw9JmyenLenAJd2VB4sAz5VYJYuHxutZt1JJBb4Ddtm",
  "key3": "2hGPAbXeepzumVSnP2rGf5d3HWV3DYQHwzkN2KRZM83dPkmWypkkjV4k4LRgLQ8kcYbZ4B7Z1TEYNn19sCodYNEe",
  "key4": "5sQBBGP9SD48wxyo4Z47vS4aBceZFnX2v7Vnubht6BKgjoor6Aywmi7kHqQjaiqLpRC2GiYja2qT9XFJAmQn2P5j",
  "key5": "53cPxAuKpaS4r4t2j7r1Dfy3Kb3ZZyjKKiGsYGfExCT8mXixeNYo8T1equ6vaAgjtA7Y2FHH57a9eYfcnGxAkLMZ",
  "key6": "bDHPvnXEdpzWcbnkM2fnRspWRdpS9AvRdniP5GfhNJdUb7VTnDdcojBQGs6HvcqvUqyderP4CKhKLkXLFtwZSKJ",
  "key7": "2myhWog73wSSoTqMgAegGEgHZy3tuh1XNDwULUbAhw1mVMrpAjPDdavs8LTgZKvKUc4St5uNwR7gndKNuFtP6yAU",
  "key8": "4LgXq9VaskMTkELs3hf78VeK6HdjXtdwpjW5cYkt5YyCiww9GCNncjYWNGx3XFgDh1z2htS5L5PFcFaLLazmJMya",
  "key9": "2E3p8mUFCCDGoUvNFbdH7wkSJ8p3nNrAJ1L3UQmKhobw8TdyqKCo88apvFbDx9TGFEWc6PoU3fCDDXycru1mHnxS",
  "key10": "5tdro5nNwW6PJR4xMJX8bMpzC7m5pXjLDjnKordWiumu9L4CfhU8Zy6Kt6fZyDZ4ov2JQE9WFwRvruAuBhikpsFn",
  "key11": "3WtitUJEBpQjyyVUaUaAenm6o7VYR3cYjehufnq5vT1NXHJzfS64aZ85T884Va7q1FANobh8kQt1s1NjXEymiRt7",
  "key12": "5DCwsiCubTvuocpYu867YQ8QtXoSj4kSPvCvBm52MXtxJ2yvujGQUpKQ17ZAuEMt6z61iY2v9iYubHqK4wTuKtxm",
  "key13": "5BYaHaX9AGxJq9X7Ms3MLToLnggMQwNyCFH2Vr6iZdoDe35hEm6mfwoRUUDVoUwo1NYYCUwoT8yjNfFBNu4jZ2zj",
  "key14": "kV9jtDkT3XCAS43vUU1YAKVjcyyhxVzAbqANCVZMTAGZLiNV5vto3KegvGprPdsV6jAhdoRasJTJ9XcGkDzEpiM",
  "key15": "4BMrGXr7x5F3s53wYSbDSnaeu8nWMpLjv8SYSemq3k2r5phNN1c6v1MD2jdmeX2GaCqBAWHugyZESyxUdz7ZBLQi",
  "key16": "38X9jiBQoFTa7ai65n8doLoqSHnLK32iJU64yxsCvsMgNQKTjfXJKCG2EuvbyBWx9UdxQxLsnQTUDUcK31c8Xa1Y",
  "key17": "3QKBKj9Q9CdAsT3QU1dh7RrsPnY38G131UKaYuZubXGtUmGEgcaXanhyfm89G8fK23QW9Ak4jHk73LL5kZGWQsZq",
  "key18": "cpiVUXYm4b4zoZXMAQrZY2YL69bG2x5sFiCUT3SkhhrZLM6E2rkyJMyKXNUBbAEq8tek2mke1KTrGPaFuW47fRT",
  "key19": "3qCmjR4L61jYgrDqEk2XEemNDdYGx6gYXqgsCShhtiw2HARmeCvrr8tugnpNSQGPoA2oTSmDudaLvAj6x5ydwimk",
  "key20": "oE22AXXTxNZ2dQ4LWKr7Un4uXw5eYtsU5CEEnzZSrW9CLufRQmB7HX93EzuKv8fZkCZYantpqEwFj99hyY6Q2K5",
  "key21": "69RPJX3Uj2WKnTxLpBredBfjxMtZNoezJoru3YMvNMUAeXFnpYovaicq8THNCbpz1GubUNQoZtVFCXaKwEF3uQs",
  "key22": "4K4a9uJBwKsqRjw4TU7QcectmvktbPwyWC96xyydRync27bnUsdTt6ePodMKGxUdu6ppJWyzpsyHGCfhhyNkvCqQ",
  "key23": "mR5smZQXxY3PgB3nMgMfMMLYe98xmfS8msap74X3nJLSSoUKeLyWwmdQkmk28WEsJ7AQXGLg3vn2pXNcQwu9Gy2",
  "key24": "5g9HFMnNABT952aAbPgr2CX7f5mqg1KuzwYGf33LTVAuPrmCbSbnUjG1xYzpBf3NuDWBC8MF9yd7rWMYrCxcGcRc",
  "key25": "i9sgajVDjHK4ecbVAZSQefcjgU9fxSwb5HaN5ZysvACMbwq9EEzG61nWkj15Xuii18Aw3uAxxyznVqM5EMtoj5M",
  "key26": "2pUXLpDSKsPjdtRGNkF4XjP7tMUeKn18iX1Zaq44GMXtRnQ8qo6J5DnmHfXow5QJtqknf7iuYnZdkUi8kCPuLUHV",
  "key27": "3aR1r82ctRPgbXMTeW8Np7tk4ov7kvDbtotDdGf8vpX8P8zJ6tPLFNbqYJbWYt2XMNatTxHbQbNQ8FLqTaBoJn1F",
  "key28": "4DBCiMeg6X4LCvxyKw4MUnvYB5fjYnHdEXZaghtuwQvYZV3ZjFDr7UaEehGkXBcCtDXt43YujCQgTfWoXDEp16gg",
  "key29": "qYGk43GXZXWmdPM1mGEaRQBn85vvUvC9GS7KirzokeEoi6b6yVjR3utEsfjfatSy1dCJBphBUTCzZVikHhX7RSF",
  "key30": "45En1rA8Ay7PwsJV53Sg89uXkwU2JarkcjMnb3J2bKoY9iqCMWe1fhtacVUws8bsA1gS9kdNEYhaRffawBmJM5ro",
  "key31": "26CxKMQZSsPtALXnQ2me4YdKQqG33ieM1MTyJ6eAcaPUr762yjib4gcVeUk7UkLdx9Amh8dTVxpGvC7DxUzwW8oi",
  "key32": "4y1raxXouDPJvNrFy42zVUWGXzpECH9ppR9dcX81R9pfURdJb4vCSNLjZGsWHAiK4xTg3EeDh19Ktif6NdcHn4tX",
  "key33": "jy5xvRS5ddcs6dwNCZuc7ychTrW6xq6Y3FmLdQbJ13bxR6KXAT6exLCbNcW7QmDnggsLka9n7H6QR3fgpD8dRno",
  "key34": "65R8MR7jPru5Vu3UinXkCZP1FGgDFtYdTk7Em47rh67UQfcFMVDX4ZZJBnRAjYh4oAofkAAxyFZy5VBK5NRGN94a",
  "key35": "4V1S3dCrbSrmFNTrW8ByMSKQrZd9jKG5vxu95Lin6ndL4ZwEGBiUCr1LHfXpPfDVpzvZj4s93hhsiWKNPKRcqqtD",
  "key36": "3B4wTA6rqWBcWF7CrqJN4s7obieXqmz3pHk9pY32sKMS2WAYChvbiBNeRwwjPZSYsAUppSMxXQSN5k8AuMnxsSE8",
  "key37": "5jK5SmaLCSaPL8NTwH8G4s7fDHBeRQLdqPWAsWP26DstxP9eNFkuGNEgyeLLfPCXMUemnXuLkve1qaY6WHPpN4Jx",
  "key38": "4VfdNcpw2kpJMnSorot1GR2twCVJ4DXDKErvAoHNsef9QN4qyigEhYdMUiJiiuMucum3DqzZiF6s3ve4yvZaV43Y",
  "key39": "4vbDH1iNgne4TEBesa3SGGzNBFsugKqtBnwT5jXD8cSJsWwfA5HY5dTSJaKEF12ij3c6j4K7moXTTKSA4g8HQBFG",
  "key40": "2A4swpzhfGYf1UjQhEVEp3Mt5ux2YD1mUVMzXBmHV2Kg2kkTSrqvwRo4J5JHhBZtP5RUTryuEc3jcF4qzGFtCZL2",
  "key41": "2B7ejwKc7KCP1Fcq3prhis3qPFxZegwwCDCAMDBRrwhAULZWSUw1AG2WgP5etxbvYZkgcYhLgXG5URdacV566LVr",
  "key42": "366XBFqbuamiUNY3m1YQmZFnwYme4774uKvN2ytR1N4e9TejH1V86VEZKfd1t9v9wjrBbvgB2WqxqZtcHZrmsiWm",
  "key43": "42rMS1QEyyDg9eWqGXhayUsRxRJ23CCvgWadkqngDdN8DPqjcdSHBVTiCP6GJBKMXhxovg47FeB5QPBVJt4189e8",
  "key44": "5w5xMZAqMJf34ERLQU8jpiNyRgHvBgAtZ1hMZaKsQxJhNcDFgNKzZefGczRzAAMLT1h4oPBctCSX2qm78HWw3Xvb",
  "key45": "4FgeMfLn5ZDEqcNiYNkgn36HZVkTSEMc4NaYSUh2c2iWw9y1Q7bFEKMLpSX967DXL3vU3v5F5Cy4hpBPuWbovJaJ"
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
