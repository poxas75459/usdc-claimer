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
    "3WPTgbuHmpypKmyR6fLh2Xx4k3n6awVRxUKXagywvpFnbnKt8rTvzbqBbos524tVgRjn6GXXVW6jYE8n6VbBz6Kh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T6JuydjWkvkJGvid5axjoeUTaoha6eXwswoM1hVh5D5H4orCVBJm4VUUM8qKMH8d86PUPFvcVaqytzvzLP8W4gT",
  "key1": "QR8JC32oXD1STcCcdviRb2ZdPGPkxsABgWDiHQnpb93w76f3RMq53kPtCZY9PxghDWVryXpLfBesfSXhG1FLsXb",
  "key2": "5u2ckGDy5ErpsfRNQQZXwWX68pgFW4pg7MrDyagasgvB2nKxQQnFUiDLvU8wSdnFqhfTQ9UrpNiM9AanfF4cTTWZ",
  "key3": "KxaAgMSXAGVCBaVdds6J1rXcZEner3QBv5pJ36NxGg7cVfhXwVzn1yKxxgFRihwMUTD72hZ5Hvs7c9dYVdmMkGV",
  "key4": "2f4nnpYAG2U1gbvSzk6koFkRDv4dyHkm9ts2ZaooSTpvpKWZem9DLXQH2REib9JFPzGZDWyRUGyckCoC4QXwdxF6",
  "key5": "4mSQ4BybSSWuARxuJ81dup1zoZteWaZ7K8TH1STcomCtDVmHbenwSvNmL3Hi4523mdwCoYbWqQf9XMD3REXBxRE6",
  "key6": "43YupGLsx4k5AMHJS4Rz8mNZYKo75e4Cv2YfHnNJNrSNLsRfLHB13Po9mFgwQ2GFdcL3yHcTL6RSLQW8RBa4HjU9",
  "key7": "3mYCnPhAvcfFGg7YJSR9MfzkqNkQrkJ4QVd51FATKRYZEY6WS89Xr1jiMqswJxQpv6E4fNbWPogmLRgtJBMVJxzJ",
  "key8": "4VRMaedi1Ti2sRyEKMjtZfaaXEXL1LWHoAZ1Xe9WCKkydirLX9qnVLo5Uxf7xz795nHS18HSfBhF1aoXy3zwEk5i",
  "key9": "LpPwHBMdZC4TYcgwHFRvSfSh452fTMwwehnLdBvECRxWRJY3odEsBsu1uAVa4bqJHqFWWPu74ZfRBV4tzRai6Rc",
  "key10": "X5dh9wKokk87qQaoJrNZCekpvbEyUtcCZvJb3YyjEJJ5d4bUpTSudrcm5qgSfZ4QAwGVCTPmj7nWSCVxx6ooM3y",
  "key11": "3yWFcWgX3xdkJkveGD27yz16yXtCHEZ4nzsim8HbVfCiEHwm77j3xeXb5FESGTYXn9mrjnRcYgfwkwfnsrhNGnvL",
  "key12": "4xxDWTaQX38nUZsTJm6AM13enxWXQY3nfs7h2JrfnxV6wuUFkaQ7DXQyEh3WxiCicBjSW3dhuCK5oGcdhsR8XJcT",
  "key13": "2iv2eFr5NjcU2W6unwKUhDjzSaBeU3mQaqkVQbUXfTXjYohUoEiuXNvBq5fFFdPYqGfk2quLeqaJ85BMyJUzUeZz",
  "key14": "7SGNf2iDpmTtAXJb8H1hMzq3Aw3ipmua3ed5QzoajqS6xXAaWxttDzoHeA5YtRk46JvuaUEBtr8ed1jGMaAYLw5",
  "key15": "5GWKeAzV1PDCtWkF1zZqAWsiESqiwN16huFyqHfijQy532JmDApcSzM6Jinu4KoyFbtrAqZxthRMNyRrn8AQ7iZT",
  "key16": "3D6NJdHES6T8h8jmXE2h6G3YA7WFMnxP9xfnhx7dVw6W9eRDjM1nLoYanoxEG63x8pMRkw9XEuoFhU1JC7mFtLGB",
  "key17": "3bjnkW7CSBvBoPiopNCY7KnEqktbd8DfHAkGc33Hc9PkiWLFNCdokdt34MXWnFppwicis2Lvfh8gS4w3DV7fEPUg",
  "key18": "5KnSwvQDfqRo1owqUS7pCueUC39NKpv9w439nAjue2z1oTDqEJaeVxMoxCPUAPyRvxyKcqeT5WLfdyTatLngRyeJ",
  "key19": "3jKdZ3Hgjn4kT1ijKZxktmHAc9du8KWmBTZdVZbHXDN44DDPysgUvb7qyfWZj5iVV5ix415VctYLRRUadiWcgmP1",
  "key20": "5PLtDb8V5VcqPt2ntwrdr8yaqcsoicFSgU8unSwwavdn2crEUkPnTeazwouaFnewxHbhHY2MHqoGyb24s6LVU1V7",
  "key21": "5MQWhKKc9ABwqffLkYZqZvjHrJBiwBtzWKbTxXNqM1uAJYbaMcoR8PvWx9eVzd8Ryb77mCWc2YgyBshWnVatqyma",
  "key22": "BG53Gk7L4cYPuAPhPmK2ncxcDELtb3EkuLtGirGhVqBDCBzeFFGs8bSpKx4CBatPSg7zdSNXKXsnqLsuT4cnZ1t",
  "key23": "4W5bWimVeoeteA5s7CW5vAUoYyU2nWu7yWLdHRWTE6CgEWc6csJUJJgstyga4xBDVgybZqDSwfVEKuBBdpHUbgHc",
  "key24": "5dX6NxkdWJfCoYJcdstmd31gvybxGLdSFW48UiLmfLaFSjpxFLHATu2jFF3BcWnXPhzhnwyDUDmDm1WK7YMW9UEf",
  "key25": "4aT6ivMYvNNeez1D7URxr5jx75mcKnLY8gwmowZDFiq2vhmJsVtidFp3rskWn5kmf6J33hqxe4YYns5UK4Taw13z",
  "key26": "5xo6qQoumJRWYFrXToQWTSJ3faKyCgTRjggv7paoPhJxFJnSzqKrzcNwGfFy5mEFzQtCFmGpB6RFNgYLmgBcasBM",
  "key27": "bQrnGatjcKM4bjTgjfukneSAtZaUzAFVScYpgRfpeNwSzh3dFvA69F63p11Z4P8t7mtRn6jCLiZ7PAw5Cx8AE6C",
  "key28": "2jXzKmfqxgRsuTqKCMCp1wPQzdiuqEd2MEDgTc9qNKxh1cn3ZYiwuSioHpVSRzAfEH6NsPd1MuMuVY7vh2yUzya1",
  "key29": "4toqWD9QTSMQCnRjah6ouatHbM3v1bxdFNXGHniq3WGChdigYYhnMNqXzKTg5j5NC6CBjVep4tDeR6kM4qMe8kDL",
  "key30": "58TT5iydnrZbdLdBbkAThit94gFAyLJjX9fXDWQxd2gXETK9Ho8okJJMy64EEtHC7AQ2mEV7in2g6jjkRc2LHnJm"
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
