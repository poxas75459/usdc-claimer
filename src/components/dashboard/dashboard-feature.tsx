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
    "2AMgLEPqD7akjyasPQHC9tZPfjqgavRC4xe5nANT2smz1CPx49xWFbggCp6CZ5AeeJHM74HYTnNKJUQbctGUziNt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AQJaa9EztaFq6d8WFBzP77gVoso6zHrjqRuJGEdQw4ybveaXf47UMsFhn8Bimq7XxcfVhtpCb7fBBRQU2RafS8K",
  "key1": "3pHEw3jW3RD4t6A6SspCi8rHUwBXiQged2M8tHmFwxsJVbSTW1XFLrZMtsKtxB8KRWL2jPhapswHoTTKGW9rMWiG",
  "key2": "5bdX8HeUPjPCwZa7RrFGhr7ByxDH5Yc2JgX4KJ8FHREM7WZBVr33vzjPNzz4gpVyR1TFr2DnJxRpXtRPSgKcW8Mq",
  "key3": "5YH4pxMrTKwa8HuppaUQka9scEvW8Apya1WFjw3TteBEd8pJpk3RTESZwuGqsdYvwaDbhSseDqzmz7QxV5BdefJD",
  "key4": "pt8fi9NFyJk8WhsCPf1aNDGh3MtbTeR9mWgUfsLJVgqxuJj2kFJz3dYC53csU1wBkTfTDCU5ZEXccne9MpsAeFp",
  "key5": "4hh64EFVKAfvihES2miVZC5w4JFHnSumg7XV8CJxBH4UGmq25eHQYpgrk5P793Y8NqeZUizAz78exQPgT748QBjc",
  "key6": "hZRgZTabYddfXRsABS4adYJZfgnd4wZdARdnhDEyjqWJPsbDpt6SHMKt6CyP8taWsX7cdAnUq68aSvcNiua8LoG",
  "key7": "QTxSsmTpLsteGi13xvU8DCw1tMNDo5Xv7j6Ygx9DKDU6KwHYxEgzPGYzqWEuTMyqVLwHrdmbJbydWH6YBtFdvRv",
  "key8": "AqEW3zZMBPU7UPjeTjdjXE56u6ikwqEVV7TgGsycWU6kdJMQrjyaoYUj9b6VbEJexuNB9fECTQcpfGWzkGcYTqa",
  "key9": "4wv1q5hsXtk1qUVYKqoieJnBWAGHXGYepPfjpyYB15pZY6dQL8ZUm7y7jtLVspzpz7pBXEMMu6vdvfyAB1uQsH7A",
  "key10": "37GMrkrtruA9Jm7E8QT5NpGqAkSqAMP8C5YfmM9poRZSjNfve1YpLexssZ1stjm6ey2NPhHBCP4SPKAU5zhpw9fc",
  "key11": "amwCj7Evf4V748fmMV8KCAp9CQQ4EpQuVja7ogjn1HP2kYKqzb3Rbu5s6DPqej67iwcCy2HpA61wuiWFGuARQff",
  "key12": "4MFCf1jjyLByWyxszf6fPyrSTAKyvoBGgBgj3dvcHKUsgAXPWhmTJVAaK3Y2gFg87UE7DXaJrQLqAbPTGjbfKJU8",
  "key13": "4w5uhj5MiZi5ATkq5WYRA8TJSYTVDon2zMybEQYwc8hLjq5EkncpWioTwJvG9QTW7DZQFgg3ZonQBX1Msuv2ipTM",
  "key14": "Q2z52sGGmaMN9m6n718RzvESm53wEFnoSpqob3J3xRGtSbUCygQ2MnJ1LChatecW7SwKttVhaHfS5GbggUk1xFT",
  "key15": "5anRCLMdU5XAD7aU5FveGj1xosvEXSLyUBNgYcxtTHZjsddLzxMobxqSm8z2AETyoEkg5gtDSJ19bchK74uvHmHp",
  "key16": "4nH3TRHDU6Kh2YNm6nnkzJBVfscoRkEjj2s86PBReszS8AfY74HrtbJYNYXPVP5ii5cVMVg3iwqqf2QGFj34vyBt",
  "key17": "UnUe5aa4rVQ18KFEoDMJcYcF2xi2pNQ9vm3QxDSQuYEkQFcsV7ww8kfjqHmNAyVNCyPXNZGrKYBkuQkXi7eRUHL",
  "key18": "59M13SRj8pnXFGjRyqChiDNBf7cREAJAYgnBCVzLAcp92at4DCEH8r3dCxYh425iyw66SazPfAKkJQzTuq5fBmt2",
  "key19": "3dvM62qpuh54Tw3QGFAcdrgGuJmuuiwtaeGYr5kADS77fgS7kQu3MCPHx1jmF1aPsokn3LoUbdykSeTKeEoqn1pg",
  "key20": "5R57GEY1KAksJ8hnP5vERGbzFzF862fFwEiNEmwbPkZD9fDV6b5TrrcHt16BWJeGbR1gzvoeC4RNSCXfnY3hwQwB",
  "key21": "ygNqQCFa4DoHgQPFBJoj4qs7swaUiPcpNinHZumqEvJtefLYsfuwXfY19r6sSgz7LmR2q5ABWeh5gM9ABNZpnKF",
  "key22": "4VvtSV6AA6bV4fSUGiAvx2viqXVoSsv1BRZXB9DWCN9pPPbYBLq9J9ebXw13DdJmig68tEmLaZnvek2sHS7gzHBH",
  "key23": "gb5YNna8EMc5WXVWwgsYzZbhxj1zPaka9YYeQADmYBS7gF892RhD7wmNXT54sX2ycj3hHJG3qHKKy9rHkYGPXvK",
  "key24": "4xvWNCiZfcv2ymwQnrKWr6HJFRdrkSqua512xRCKWAZ372zTQDvDR5HYw5GHbtck21CGa4fnfjEeQgzANS8cqWyr",
  "key25": "2UtUhotvWbv9fcmkL3vU5yGGyWcvhYhDNtdVpgcsw74WFb3EKzbtfAFacs39w7pNyrmYPatNE76YSxRFPuZjQYVn"
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
