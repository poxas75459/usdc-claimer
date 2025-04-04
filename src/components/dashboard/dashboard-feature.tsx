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
    "2d56Yyw53X1S1Y66uFHTFB6WXru9bFRkf563XzoV1gVQefYRe3KK8DwLMErEV7fPQuqskjpcNo2iTwffkWF1b1Sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qt2gcox1M6MgcrwMHtMzJWRSktpu4PiKdUrWmuebVRUkXzWHphnBB52TNi7QjdrYQ6Jd9XaTLVjPywpPWhH3i9t",
  "key1": "zdw7Hyq1kVyvyPi7JJcRFGGCAYqHCyi29r56U9SgcRgLVxKUtkH7q6YoQwH4F8qRUeDu6YTjXEcDbv7ZW6CqAES",
  "key2": "4cs3bCT6ajhVbZgFGVNV85D3zHcxT8xTfHzBBPMgLMQh1S66LTddqS1JkgKD1q3SXDzFEbnFrMJyNtckT2S6Q8Qb",
  "key3": "3361JRcBEg4NQGTRFQTs424EizgMQrT4yqPhudnwQRepb9F3ZWXvrhqoifsxMdXGmhBXbAcCGurJL7RVdZ76qBxM",
  "key4": "rdHmFsDiEErg9y7mhQtcpfnbvVAAFQeUyWY9qq9wNyjCF3KtMsJvovK957pUWE8S9KzFB4VPBwbv8qWzgp6vjYb",
  "key5": "6Ff2n92piwQjpn7UayML8iy4viUtbFQaHqeC1SSnzTcUUjWsXMrBwE5hndvJ17zJ9mreLFPZ2DoJ8aZTGQUES4N",
  "key6": "4ZGjGhpXoX92cV4SPmToHTbLuXLoiuN2VbrHyKSVrP6e3ZAz49Rv479WETBmnuS5Wcp5LFdayKuGsUUAjbwcpdZy",
  "key7": "2z1mP3wDHe57dEbPcRnVQR3mrihUraLpPwtSujeJUn7ZHYoNPjNYqhh56GL4QFsnwkybjZEU2RUrWhn6SeVHYHfm",
  "key8": "3UkJ2oWT8VrQtaYYjAHg1ZxM8RxBzheoyufTEL9yiwUZCpR3JCxQTV2Hr8RsPwzxUQy8YEn5CJYnM4o8jkokAMMS",
  "key9": "eNBFurXWKxLNtpgfaoDSjj7htzzQfuX6GKGFV9ME5vjKLGQz6W61TycJAQpezAuAD2Kk7h8eY24EZBGdn4pzfeM",
  "key10": "5pN7qwJ6N8QSVQtBJTxnHsPecZhmawY1R3htSYbKA8dZnyvcLPK5J4FeEBAGPQgwCbwbFzmbmm4iatQJJYptDJn3",
  "key11": "5GfrJaP69KPBbVU7jTLx2pFaEn9MbtbH8i7U3DZEP9tvyP6KsKgwx6STHMGjQPPJXdQVc5B4rfSkS7t8pwRy59Y6",
  "key12": "5KQ9RTkLraZmPcLGDzRqza3FNQKTh4rUeF2HR6cnfCWLBiSSuJPP9g6VtyRXgWLrav3ZvDSv25nP63ibEVCAs7tY",
  "key13": "5B3k59zEsm6gjVgVCmt9QnuS67jgPWx3wWjpZv7jG8WTnxF1uBMWZxR78KXRMarAkFeWmTzQzg8tv8sSKiA5oHZR",
  "key14": "3yh6eai5gA8gVFiL5nMM6hHjxBKGEXNeURJTDmgSKZ2JQcyZiyUNo2vhk1fwyU9JyVBwSeFFvmzFTeA2tkLAyyfN",
  "key15": "5Dr4q36BSc9KFptFhUbHFQRo3uk56Nxe2S9HkQnGVhheRbj6TWYdhDT96fKo1s46Sa4AU9a3XFMHs7ZR9pPcjFnm",
  "key16": "3M3qjmqQVy4xK6Rv9V1V21WwPuDakZYMp7QNEiyJMVEDrMxW7WSnNVLMewe28eC3tqHs5RV1W5V3i4u5r8b6qpNC",
  "key17": "2jxcsjyUzTM6spiLqHZSSdT71voXtGvbREKUwRJNxb3wwqPiudaRdH8R2szcqQ2K8r8jRBMgc63whtHfaqCKcmRB",
  "key18": "3iduVt5CMNc19DtnH63bB1rQmUVYTsvFCEWq2DZKqHSEDQrpJ5wmcKNYg52hYn6HcHnRvBtAkV63V4GKqT5k9A2Y",
  "key19": "5ZbyTcea3dYM9BobZSFPybnvYz3o5Dn4fK8SwrgqdERD332x5CS3N1UR4dyV835rk8UFrHJrxLCTYC5L1zTgHp4d",
  "key20": "ZEBY6MPzUsv8XJ2SsvNwXVPgbTCHVkCwxqcVk3NV3Kw7WNH8oSHhqHsYA5XyTsu9tZaVW6LfSN4HLvLXrfivXrz",
  "key21": "3cGzGcMfZmsF95meNRUq7PPLzJBb9SnqyVyTaVgQJ7b78GuP6xhb9X2JahJpA1Bb5ef84S3BLik3THzTGwoccXBJ",
  "key22": "5YvpsC4Wjq7Bk2Dkd4TXrJsFcM4mGynaE5ynwQBS3a2EbJTJhsZUMjsATzLPckidrdaUyPU3FS7BmwFH7EThd2Ct",
  "key23": "3NMEY7ShEmoS1XDVWmkv4akD4c7o8Jne3vktNpxiAwaWML1ocLrqLZyF8ZM6eRoEXcXp64QfM6zsTsCnSJQeXDjX",
  "key24": "32cCa2WdU9948GCiuJBjVtqzwVkC4YJd2nqZTpfnJG5zxAD9kG3kGDNUWyxsdpoNs3Ld4Ut4DoKF7huwkV45rBJG",
  "key25": "35sgvNBpC63NRmLzCtpadYq7wK2YvEJ6Jzt7MjKgzexgE7vfSPHq1asLZoPNBhCyenJGtLZrL8waU86M185x9iCx",
  "key26": "4JbhKLkRM4zMM1dSu9V6cLyv21cAyxqJ35Se3GUo6gK7GnTsLj9pBtu6VbBiGoBLwWPxoDwYBqdCRw7WpnvzyNuW",
  "key27": "5fHhBM4S2W3LnkvwR1MTNM9wXo8VncgsLWzQS53dRiPN1zrTo2nSEE4DPjF8UwYocX6PRGfydpiTx4zrZZjAHuEm",
  "key28": "5i5LNv8aBLFMsm4oZmUygJYHfopRXyY2NHnYepSVwEU4ezrQvyXiQ4oqXatHvL6igwRRRxWNmdxtTNH9nAwVHog9",
  "key29": "5Xk8GETSvnL2bafBo6w6fqFKQUew9QrDysibT4B5qbLkjmbxRSQ9mmgmnik5Tjc6TkYThBZQx5Uu2PbyjKkuaCkB",
  "key30": "4hYRuKvzGckkedySv2qpg8CpVsPipvRGZmhb76AcB5f24fdmuhGann3Zv44B4q34eZqu5EThX1HU2kqMcbh57Jhv",
  "key31": "3PXLysHCnPTrjbcTCcFQ1hm9aJRNYgYAepgtJzBZgREwVptLPnt4Wys6tZWBWmHHRQguNtiVEmrptq43TGsoom7N",
  "key32": "5irDdjKZAWBh5Zu87U2vtzimvasBQAUG1h7fVgsqjm4aDjuJ54F3bC966aaVwuc54WjU9eFYa2BK8hHHnvoV5HbV",
  "key33": "5rdKBk9bvbHamuGBFsSJxHMFmpepu8qNMX3XRFaVQ1k6inRa5FX9WKASr3q3QnLTyaDNJuNU8AFtRVG6sSLzGUoJ",
  "key34": "3qydrYsQf1MQcWKP3ZSQSpRoWR6jvwDZsiqtdnvnEwLprS9ZzdcxXZxQZeMjNrCx37jQMGNUQZKG1LaufpyiEF7o"
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
