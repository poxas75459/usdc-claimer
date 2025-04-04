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
    "2GJzh2hnafbhxL9sRxLmsC8aUTPJ9KtHx7edw8XxWibdHbesRyEkALAJzybtPP1uDYWzjwPgHrK9Ab9GFqbjbne2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qevxofEaR8AD9Svvo8JhUqSbd7NvGHfXQMcX6ibE23GrpBrZUA342ewF69iE1yLHSuth2E2qmVSqdiKNj9dXQW8",
  "key1": "3ZTuQUZpqf6JFBxTMK8eT1uQGX2ZeEukitkH2Mek15gwgqYgzizX1dZ13jm7KJqMF8cQCJaiACNZS3XmGdCf2uZh",
  "key2": "5bDGr1RV8wuSCaFwt4K5sP2oiPMYTjCopzxncxArQsVM4JKYiHtq5RHxHaY1kLNUaBiB5nujLqqtmzKLS8TiwyGU",
  "key3": "3PHcq5U2cEqL1zrc99DtXMdV2bNGKGmo8UChdun4hRYzsajNbwYiWwu9wbD335C2xPZKynz5XAj4oZQqsSLXAGxY",
  "key4": "5SGR2UKpvKGSCjskAHYBs6kVtR6RaYbj7zW2eDxN7JYQoJDsXoy2Mff6UhVHMjX8BvGxAkpjcF3SdJsxB4PD9wbG",
  "key5": "53nQMy6VtxjudSh3VejxtMXFx2CYHaUgUbZNL5GvDGovdhRZWkCZotTARnpkFjD2SrKGVArqHsCoQsR969zoB6ou",
  "key6": "4xaoUAxnjFWb4hdiPTec1PhtyN8fzVCYS3Ng57wkt1YChbPm7na5cQyCVAwTn2RHVAER79dajX7Zs6RfZNKCdDge",
  "key7": "3jh85KVjuwzNtjzWHkR1TmxHn7FDdxjHmgZevpvbP2QqjuyF6rCxxrSk7YQtTxFeLooGnF2rkpuN6WCD2exzhD2z",
  "key8": "J56YbANc7fypqHVTSKChkfM9zAUoATpeSGjUB4253Mo41yisYRxiiEZeSvpquqhQG5HcN7SbsB7SGAauBUNitY5",
  "key9": "4b5KcuDY6uq1SMrULAhqYNAGaQG2viB5HZ4Zdc3fzo3p1fHJBk2U56c4qoFSPg2ixAjJuvmvTYhEXX79ZRSwptt9",
  "key10": "2V6yPZhVRuhoA2r7tuMZAfNvDKRxmNjVAUTakEjVnGP3PHNUNR6wjhPDHrS7S2TJrytWCm9R8ziv3gNHzh81Pjpe",
  "key11": "4C4u9CYvEXTRJDdUhzqpRdaeuxtddJWtqyoxZmWbRD3kHoGL2sjnD1bBywfJKKSXd8AXbiVzvLhjMvwtPkazwvDH",
  "key12": "27s2w62gXqq3tDT3Fc3bTgDkQEcbzoCmZMmxvG55hXUeU5aZT2VnTykKfxw8wcn6LpqXurbtwbtgrwcsWiT3z4Uz",
  "key13": "41KKELco5XaEyaeMLGVifXnbmiyzijKFpbpKroZ68rtfgJkjfawkXYGL9BSjJACwsbqVrVNNacS7s2NtuRWq1Hws",
  "key14": "FoQ5E2QnsD98poRq5p1tJ7C6ZwxZ4vWTHL6LYUAxPtbQuZNRLoo5ubktWN2Zty8rNigMS5FVZ3vD8mGLibSxqZB",
  "key15": "2jqobGngmofQdKQgKEK9WtMxD5Cfs3rTvYkAha6ctit5r8vz46vvCuUQ8Sde5rHMz7aJgj7uysFCCdwbv1SrBBe3",
  "key16": "LrBx288kx4gxHwMhk6RudyBmzReo72myCG6YviQPFv57ezxdfyWc6yqjeyHkK3YYX7U65kcygpwhxzGs2gqRtzn",
  "key17": "3fkgseY6cSx6hmFvf2SRuC8YaYjAP7yakNXcMrQ2AtmTQx6upLd8bk6dGUrVmv9BFYBK8azBtLmASxNSUdJetfHw",
  "key18": "5uivJAkQmTQ5wmkYpfUU7BW45ZJw51rdJugWj7sZWCtoeYyrwWVwWZNCBSDJ96AC9eV3gdZPsv2kHoAvzu7Lw2aM",
  "key19": "32AkmnpAe8eN5wDGUTtwWbRizAAnLHE2JCTYsmh9oWqhBwrWJpDweWDyEuwrAFWy17mJwMs3knfigffYPBQz8wj3",
  "key20": "4TT29G2n4FGUkg7MwVGm63bXykHYE9WBvTcFGCgibaS34yMDKGbWkASE98xupvQ2ejnyTsv9deb1xwX8huR3de4",
  "key21": "43m7FG3apUtr5av8WTvv6bb1yePnDvdTpfBTDBrzm7eTEowS9o4LYPJWCLq3PaeXuP8GB6vN7XaHdd7Jpq9Kdmux",
  "key22": "63aSCpxqFH6RSNyzZMRZyaH7BV2zriNzbZE34655YFA5YEjC6U668qSWpgqxB8HKmxPg2hs79HwGKZPrAcuqzAtU",
  "key23": "5upGgD8czboHFZbTsfmD3KjJwJgKCMCTQmBFT4WWetSKqNMBGHVUUDf6zvGgGPjt6BjQFvCiWM8cuiqCTim89hYu",
  "key24": "3Ny4bMoky5y9PPjfoqQwX28nn486xwDHokhHzck6H8JC79HsrkdPAmfzY19AVvpQSe3d2vZ6QCKMZ7XSQ8v4FrUV",
  "key25": "27wLxv1P65Kiy5bXiiBW9mTNkpwBkUJcaxzUgzjbBPajUBeKVpUTMLB4rhzHPGcMpr5QY9RdBciHrXPXBS3Jiy2V",
  "key26": "2YxZzuxDKMVT5p7cMz1o3Xr8tBc7am8JZJ7hTYB9VhapMU1RM9MyUtexw9v6uL1ehikuGdUAJSu6b1T5VfUMr6fF",
  "key27": "24h3n4Nykdv6xUEc7CbbdPecFDzrHkiEWvxJhi79p5iPifPAZkLvtZtuUGDUaYue63QS3DJ7Fj64eBbn5hNwEMLQ",
  "key28": "46PBtLEUNwntoS472xBaxcL7U9SDXQDVH3nqMSPowE161NE8MQ2YjB2GTVZ6ughW6qjEKcj6BL11wtV3W3GXjfNU",
  "key29": "2Sojq7JoFtvKNL41zPn4VuuidnRH4iXUAu6eXwHZMbXdyhn97nkgdt39q3W9AUCtDLmAnQHEmWsMvBYYUP5JFsaH"
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
