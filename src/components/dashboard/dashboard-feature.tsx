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
    "4HD8Ub4C14dHaNBPJaKKuezJdmxbtybFpEK3LGTzXq5zQEojdcoCkhppQSo3vANH32n6yjPxH3HePe7gnTC9GDQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WzuoYuB42ft1RwsmZ6XdBt6iEXrMMq75RHHhTuaZoZfJsVZcGmKuSKbnDoGuTVnPuoWfqwYZHTxcLhg7i3FVpFb",
  "key1": "5Wq1b83Y2kgAZpmY7FrpeysWdnjVT22uqjHgvSWgEqXfDoCcKeMsBNCot1CvzcUdY8oGRaQxGtZPT4wQAx59k8vv",
  "key2": "31LRn8VB4gYCTWe2iA1TnVaaYt9cFXmEQQZ9vnUFhAewjabiaZcby4PFAcA57vdcU4Nb6Ud7j54nJiqtdKHVqfwa",
  "key3": "5MiTUQoSC6TxV6YddXW2tA2WaWsC4axEBpvUtTuL2XTEhyfo61dhnAqsrvue3AN7ezMcTrrUZ6MmWsZCb1c47xke",
  "key4": "2Fq2a9iFU29Z6GGRGS85uxGSyN38mukqna3LE67LqtuPhmF3kcYVmeyXnEx7Gz9rih9Xwk78B7RgSqkBBHZmy41K",
  "key5": "5TDkgffjkFJUPPttRSjsjqMobNVg4VN276ntdrNTHFC1kNecY8mKGfhAGf42cwhGRbXJGCQstmFaz7R1CXCVpBRY",
  "key6": "BPzBb6q5t9wQeeZSaWeJC3nR8vW7JxFifHLrEbTE1Pu9LmPHry9pwxqxqNv7KPnFJDhoffEugUmc4w2RzcEPBC5",
  "key7": "5LBDXLh3EWLJkXyQnX2BoJpzKV5t77GrndLjbRMDNBF1c1ssgEZFQeBGNDYKsbe5neYwF528EXoDAaMyKjB72chW",
  "key8": "2LydStcvTrn7dt26MdXc78ZhD5i5kxnRAL1vmLPM6XcC5QahFmdhfDCgLmY3ajiXajYhzHkQrfaAcQsZaKyzdHP3",
  "key9": "8NqUeCM3Zp8Pa7a41HyendS8yF18rb6UofEhYQHmNqGKCunLuX6Mkn7pv7m7sBXRSehviYA9RDgb8VzGVdbnRzP",
  "key10": "38TAKRNCavspPG6yuvyCDCBdeC8HqZLzCaXwhbKB8SMRmGkRsNQNaxpdk1NHoQQEwbC8MqhLaikpV1ohZVBA4Qfk",
  "key11": "2ESEvGuva7Xe9XMLpSuGw8HEx3afg5K4hAb4wQguNWHeCRUY4qePurM4BanmW1j7tWvzorrEaUQT5C5VPvb8dJMc",
  "key12": "CiWyqVMKeC93LAVsmTfcmFy7St2GunfMPNfsNsYvsD4htKW3LAhvh49MSvH3ZCwhHKy7q9uRE6iBgzpYTeVgVn1",
  "key13": "5JgFZ6AbE4eCMJ9VtGAGiqC3ExmoWLvgD1KSmnKdtQT126kCUeMiiRDX6jiYKjFhoLkoDq8UbrwFGwtWiYUA32hH",
  "key14": "5So8QDYu9GTKqRcJRmaqQAS2aPq4A79LJTdDuZLWFJUadmaiX6cuDCnqRFnKLwvFdayxho5P84AXryfyquqnn2p1",
  "key15": "2n4xFpJcppDYRfwTRzZmVkXbauKrpv2A5NEuh3B5uv2bZTLwYdc4uZ5GNokdu1hVer9wot1nhqQbvpuWDu7a7EYd",
  "key16": "3abKuTrLc3QrbGxWXsRfw8VMQT2paHsb4fELYMmCsKExobemxava6XSNQBZzTE3Q5M5Kzd77BiqXhpMSrShicXw8",
  "key17": "2YPbkf1SzYp72SGuGfdaVdWzTw2V1snSk89tYvoppEfvyhitzic5qEEQunwzKuYBM9y8b3U6jzMz2rhrq2tm9U5",
  "key18": "48S596JCFzGAi5feCEq1MfxNufeCxZ5BDt8crZ3pFHqB7MCdCUAJJHyBmsesirqrfPZ7Yozdrt2ryC7RXYYFyahc",
  "key19": "2j6t8npixzdunKiKb5deSh8ewn5odSyzCw1VUMvu7yEi7wXJzdnS7mqZPYq89GCWN8G3u9WpEad8WWSkhrbYSLho",
  "key20": "47TGsp8JREkmNN84LEC4vbEpLiX2wYmT8iZKa6i6wuDJ7NBhMgnuDy6WmXFPQEFWPh73NAtqwcFAqZDq51uuYY12",
  "key21": "5bQYv4w6ETJo1qNy8GCqSpy9XZvUv1rBCsNS5Wpc4YKmUfoNDQAMoLq2fMAXLParUcUEo8z5dezTGSF7FxjiMYJ5",
  "key22": "aFeUNoA3DBbJy3mk2xW2hRQ9TpRPe7u4woVUGxSkigmH6sXvQSXuX9vxK5B7EhJELH1WH36Xxrbdsp75wEVVVEF",
  "key23": "5W1CTdNGNFapw5C6Bg6Jysnxm6kCuw8RBC2fwuUdLResCG3M4byJYeJHQx7jThjGiCDTjpfrBajXFMFiTtsi2Lnr",
  "key24": "5KCd2PduR4r5SjXXtMuLB8P68iUQkpUug2sEiGka5CGE2QQzMLzbS7ASyd152eCaB5wn5S2jtuh3aovTU4xD7gLU"
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
