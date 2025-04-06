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
    "3gDLbntrFo5ptxwi4xKFcWpuRZThU487JVKXAAVe33cdfJ8CQcwKuzxmtumZTrz7r2HwwrHsZwSeGQbZbYYR2oC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j79HnQ1uR9trGiQq39uhKRsKiJ8HJ5cEsSHpfY496baBqSc4k17f1UwRc19ezBtYEc1Ud6qsHkVxwzAS2sBTpu1",
  "key1": "3WePGTa7WKMYw3EWQqdMjHa24EV79fuUNBkhNRYgHEUkKNP6qUgPHvtqKZvFF2tVMsBbFRHWGJUNLCwQsftWndje",
  "key2": "4uNiKTDjPTpr76yJMTzggm1nXgog3pZqyxtFRYWq4VvT4SkV1m6kDehC3ZspGP9sjDgABH4og4qV9wqbZJEaNqDh",
  "key3": "4rPxbxiZbeafZnfLMsCiPCob3TEVheCECqYnDqVWQRYfArb3tK67fLHvhXuXGoqNxgD8GEo4xKHSALudFzj5QF8w",
  "key4": "58JEtSWvqyogKMWsCdtfk2SB1EQrCutsaWC352Hd52n6wxT9deKuyj7soq7c6BEFUGDxPPpn1TNBe6MKcJC3CuwE",
  "key5": "3ZUhx9vk7MVwsTp5VGgVwK2cpL8FkvUxQUACC9FGMLn973PjKnKizZQmRkGnQQEKyAZvWs4ukEu9ddDCntCLnt7u",
  "key6": "63iw6UUKkpQJgf4dv3oGnSsMR5uCEAwma9cbBKzDNuS8bQfUnYvT72ucedM2ykEjmXMgWrJFemazhpqDVXUCFcto",
  "key7": "4D834bCEKPDWXBnWMQtYxdoPZ3FynEZ6KgLk6JoByiPq5Wt3dwoeeY6dzssB6MjJeU2wKDvrkfZVMynb1diVUfCD",
  "key8": "3azvVq2QWbR5itwj5VFzsPnf8GSKm3kHKaBNKwbN6ZWsyWUHZZRTbUPLadHpfX5ZNGJgq1xx7q2hDGrcs5xmufCe",
  "key9": "qfA6dJFQSN7M5K5Xvz7uiAQbDyq7uP2C4FEnBy2cT5cBb42wusJXVkum4rXZC7xSBz6tVpAc6KRJyXuoYTzMZQc",
  "key10": "QyKaYAbMwKoMXiYtUEBvHEfdpDAgEQ7v5AxfMHY9dNbu7YAv4uKLtx7HftAEGSw9gcSpASfqsacXc71brbArrHo",
  "key11": "3p4a3rJX1dCigMYKQTNQyNEFFoJMwWwx4Pbw1EsREuxciXPstouFRssFvEcUwk4PRxnMbxpxVJ4s4YYqXduKY2ib",
  "key12": "4MaGfUHV2q46vPtZfS4HXzZP2J8dWCwBvunyJCBZwitNyxPX7tX8EAeBmwudvim5LiV34pRNcbfw5QiptRzqfLR9",
  "key13": "4h1ythBB7Q4KZyePysEGTXwrEKWYtrFE1prQM2B6c7r6cXo2QrjmJACt2Qx7BP63BSfMdcNUDP1pz9LERhVHp6ve",
  "key14": "65akG3RoSYRtWq1RXd1eeCXYjtuzaiG5UNwkPPFjucMg8YgK9dAqYyhEJTZAE8Q5DKcPduWVW4rSxe5ZBgLT4NPa",
  "key15": "5YJf5dsGzK7FddaHAZd7RbZqh5wGRiDWW7sgxRRkDdKBGCprPSvKN1RhGJN1SujNEjWFcaFc5G55C6rZ7icEqS2H",
  "key16": "3YzqT98y3gMJWqap8bdxyLJuwjzxTi4UmSG5ameCVQp8BpraSXekPqLPRZScgJ1gvxJuuh6tBEWwW4L5DMygnrPW",
  "key17": "adFabhZaVWsgqnqXseirgUcYJYitSCWa4Wg689zdiSNdVMaNTmMgCVBLMrj13nnAg4nKgugbsQve3pVojoX3Qtn",
  "key18": "43ooZ4oCS2PWRQvtZufv3RdhpY5yFVa2xhoUGfEmFvL2ZQKhQaS25ERgzsMetyjsH1PiybnV9cHFomMSLjZV86gL",
  "key19": "ce5PKoftjX48pU2ufv3myA1TgVcMtQwpk95z3khqFu8tnCQM4iD2LpUT8nvasEb5aU4xGAo9WsHNzYVvcd1DR9j",
  "key20": "64Vn5mJDpPLSn48EuYk87wnJuFHbxuB6hG3niirVtHXuKgxZFCqxHKpts1S7MgDFSgPVXvakAbYGokCQ43Yf64PL",
  "key21": "47WgfAUWn1HwghDDsLtDwkWDcGKeBMphQpM8hWgHHZCsvvN75mWyPPrRDDQJemhRWkmXB6xRzPtdMdXTMW8qkhkC",
  "key22": "3pwrFP9ZkYiKMKTkThviVkdAS6xQNneynxmEH97Ca1WqnfnJV4jAyEX2eufqUookFLNs8oM3oyMuDJQZCPtgGrmQ",
  "key23": "4CnYxJoReptp4TahZ2V2izAm6ZU3e8yyf5UPvEpTH8jJebyWShKtqLTLC3dLryEuzcq2co79PgMrcq2sW2LuHfjE",
  "key24": "2BmgBXrE3Ary4TmLcLmMpCBDAJKLiUJJrwiQ63sRkPxU5HXu31bQXgTMD7NRFDorLW1exk1rmJA2pnuN4c5Ff2hc",
  "key25": "29hyAmWJtC7Rz3BURJ1abroovKkV4KjVspPFPmNCmPviUqNb21gjnhAuhniRsAY94NboG9ZQ6891rRqqrnhRW5i9",
  "key26": "4qTjNHyKs4wTbrky9yg1DzPoiAw4jsLNqmuHiNQVx1A3xvEJ7awDrZ1RpAgit45R4wSXqbY6bGTjdv5DCjXiJU92",
  "key27": "5EHzWogjMJ9CBkFjVixvbKEEmBjZ3LL1u2GUsThgDsvcmWbdPe3XbA4LCPx8dPUpnWQecqjx72rVUtRMth8FDkPr",
  "key28": "3ieBz7eNS3j6Nnju14GKmcZ5WSMdtwaxoXqTf2ypm9yGssgUBp5g5cgcQ9nnebG9VihZavDSnUa7pLygGi5MEVnL",
  "key29": "4Lvpr9VvVW335tX3DnNcznxsyGXu9BPeeevBNuwKgmqtfUbsQbZ5CSyhp32XtHPz4PoKWa88TicxURoCLrzEvUp7",
  "key30": "5A7E6zyV7nDMM4io3rgmAqEQSSXEGCx8RtK48vvDtpHHj5ehJcDDiSnekGzrYsL6ZJrVNjKthuft8zhiYMRTLHzv",
  "key31": "nAkN2sXzJbCLVep34KjQ8MFqYQ5qCGRwC9WUq3JiDCjLmmgi4wV5trUbaaRkx23XZ1Qx9tqpAZc4gPefNayjhi9",
  "key32": "5zTRFZXbrHXi8B4RxFJcHte2cXr3svSsWQJL9WMUUsX2A8xB4weK11owzqSHE9FQQhCCuMGqi4tY5FuKYmtcj2X7",
  "key33": "1YKykZ65p2CXNnHSfDH3euMm75tZnwkm9gTkb333rfjHm8pA2TBGPKbGXtHbbuoBCPt8yCVr5ujYbj56QY71e44",
  "key34": "56qXsMdZpKU9W8LWuMfmCdzGZ4V5JuKKMe6fDGfN5oc6zbgAwMNkmG9vBB6GAjdCKyNokvxSkaUr8tz8bwJZBHLK",
  "key35": "5zzibb5YbRYh4hrGEGiR2DwtUQFQYJTxes7whYahVTwAaPdrKgX3qNuu52nan7azqRHETvXJ4s7uep6AknX7HcmY"
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
