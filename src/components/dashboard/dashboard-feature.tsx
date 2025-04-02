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
    "4tvnhYDV9zfWywHnbLQCBSLWDT7ZRWMB5v5nNJTxgmFmhDndPKzrAFyKSTCm7F8wAbf4HFWuffQeZwx3dy2gFYxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54LTB1SvnqXJ6y7SpDfVWrxwyimcyatCSDLcBQxHWs9iRymTXfrrivKAbFra3R6udMfGkQRTwV3eXHgeAeMhxXFo",
  "key1": "4CipdX4C7SYiDT9E6MQbF2c8y8UYnRSi9T9rRqs5ApZdZzkKvRzdnaJAETkFzZwra7wTfsRTp1wmeq15jqVxPByg",
  "key2": "2iAqvPDZyutNxi8FSsdA9ctgDXbMKfc34wTTejP5Kwzohwdo6fW9texSs89Aaa4cVTXNuEr6NPmrrXxhdwrhoHEf",
  "key3": "3YzF6b6164KLNCrp2offph8ZtzzLg7hrrGt7t6FUEHSfd7Cuh166LDbuJg54r6o3C9bQz9RjNwW1JBsgUyrcKS1G",
  "key4": "5T6XWW1tixw74TaB9KBDRdnNc3AX91uHUgtMDAVFinWwvjb6QF6PyHAyrTAJDsdurPMRLArW9WULAKE2WEXgD2n1",
  "key5": "3DMs3oPDu9B5tvkwy4dyp7zqG9aGjjLH7QyufXstV8Ve7KvjzYw8P2TQZmP6ZDwHiZTS9uQMYVRj6J17N32wAebZ",
  "key6": "juFjiHui2gMwxbBDd8AbHSMVDqgCQgWum41Q765UnHtKQ3tG1UxsQtDzqrWTWtpmnSSwtii1m3t2QaxFn7ZF9VQ",
  "key7": "5iAzkGJQ4ZjZ4kfiKgLPZ4g2AWwos2BGHJeaCAemnAx2nUtqRyjdbzdnXQBmeeCVDhUdXyjyJNhJSXJc4s2ffrZc",
  "key8": "3GP9WqzpD6pT2WzWnYx1qCV9P3PNoAeuWFS8y5j8hSzxKJQqwjv1VxfnrTV3Hw16eCTH75bxGVpxiBT53KvxQ7zz",
  "key9": "4nAYyqjNa6dW9wPLNes7cCekzVYnJRVLWWHjc519HXTiXX36vMLgpAi5bQwEnW9j5xBguhFCJap3jVdsrsLUHVvt",
  "key10": "3iYBniENUmeLaA7CeDkwzrFkEMXjGatSCADYzQvZ569JjnPVTcTp7R4hW3UMzBTR23cc4uoZX9wRyKjrvL3cHFtq",
  "key11": "649a47dAosPEoiFA5z7uyFv21KvLteAFCJqQ5hzZdpKi3ZJ1nhPx9pBxQ7hVVzmKcobynhfUfXKRYmEhV59DMeDQ",
  "key12": "3f2e5Qz3W46sgSsdk2M7sHRT3DBgVVY4bxoedrskCmucPwhw2wRua9ZTwZS7KgpDjcXEMD2y1d1Cpr5AmkKugJt1",
  "key13": "39hBUcCwbUQ8EqZexmC1L8qyfK7c4LbqNqz1SxvVKKiXfNqeDjoUdSqgYfhZoPywVRN6oKT98adeXRKLHHu4jZoY",
  "key14": "5cnmMj6yzAt7wLK1W5iJhgf1p8ajNtLUHH2FV2Zp3qPHdLyAM4KRU7t1rpyem8tVPfwDzXxCfAisCwGDNH3mzJUy",
  "key15": "ixKDHyVRaj5RVUKNZRAUy3WkuG6hdipCNGn1n2J2PnBE1vCBLag4FDSGosBaN5gUK1JP4k9tADYLo5eANVHERe6",
  "key16": "4VxmMaxDcirVVTAnXBjTnT2CqLZ1ftjDQwpmQQEKmMZUULYVVYrEm1Rkdx5B5SEvudZViXf3bHmxeT1JADXFcWo5",
  "key17": "662ovDSWrKSp83n1tKHjuEXx1fsRgPgYnMyBpUmT6UfXy1bZePj6xxMWyC8WpoS4LHCkAcA6XJMJVaUeqC43a8fV",
  "key18": "3MHLHw6LfycKJQCepzD7kfRLW4wEPrKkbi1xmGmcbCaZatordLQRsFt6sSjxbQRkCqq5J1XcazjPNjfahny5WCSP",
  "key19": "GmJEc172gYTJ9F2Vu34dyKGwiiBwBgX6T4WBSFafJ9nfi1VwqKsStkH583kBs4EDrBmzKSBDd72vfoknUjPAZFa",
  "key20": "2NBV8JsrovcpbffzjybmHjA6M5SysnvMdobw1zJU4iUg6g5tY7uhUevKCRnQVKpb3qnN2FbGJukam985xw6G4Lsn",
  "key21": "3c1vfSnC9cBRYXY2VhaMwFKPqCckSe8RdE8xpF7thFicDowWjppu4mZP4ZPmMdAy2QSAssoNnZG29W7Lrwa74rnU",
  "key22": "39pKFm9VPt687rsp5Fg2jyjQ6wafefkpZYKPiycQafdiVJRPz2gsVw1f44cX8pSKXS7phCJd7pCKs7S6okK9BtsN",
  "key23": "fpcRfXPjbBZxHfRQ8eUx57V47ajWbEnr255xTA9hZKMWg9SNgKqMbR6r9Ha3NUU7xUqCjJJDgy8TChZAV4NcBGh",
  "key24": "uWrAZSVb5Zy6tEED7gZqZLgzK1Ce2xvRZBHdudj7mFj1N7mkzeAwYmjuzTxXL5EBfenDcwe45UpVhhRdgYh9PCK",
  "key25": "5a6MPBi8iMxodTi8F2WVkerz41wLz5X4dNkpyMJWdgYDTK5Kx6wwu7ovXKcKobLTVHsfDV1i64HHfLEM8aAKGFyX",
  "key26": "35PXT8aP4dSsAnLjB8QKUxMKnEUAD7wKQr2PM24PxXkLDNtdW4pC6gYRqSu1jdD6uEHoDGqMiSmUC5s2r3GcKHQu",
  "key27": "sr2jwRYw71trjK1Bpz2o3yRnwiSUqwwwg9tGhnMgDp5Cv2mfHRGykaCAD4HuesTq9cTue5XTXKiv68eD7EN7m5Z",
  "key28": "2aRzDriTMS86TN4ZBiToZhrv4xMDCSbunpSAgNYAghXvaMcEDsgCU3fWkKX64N78znNGEC8DSYhVzxAfBckYC6vA",
  "key29": "21XfqSADCiih5z54gyr8L76Bg2zCY8ZrLyyiD3aWVVqUkMgedWPP4A1mTkwTdHt35yuvXRqiicsqnG7fpvhSrcTT"
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
