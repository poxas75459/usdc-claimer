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
    "2ccJ4W4FsnBVzWtEDMQ3EbTvgGBTcQGZNQjNXaJi52jbosijHRcXkfGC6svhhBnwUF9z1iTxJpdD5LWJ6HtgfjX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XhKdZJSVJfU1yHfb5TjDKznRTagP4XEavsZMr7sFyfUiFQafAWzpphVQ8bMDRcpNrWiDxqoNsu3qDzjDoZmbjQM",
  "key1": "4aNv2CFsR5whMddFzuTDxbk4tBysznt1Aoz642XmkDRzUZhvcLT6XsQy2wjKR6BiVvSRJDJJkjZuaYoohTuBBKsD",
  "key2": "2gL3qUcBbqZ6pgLzoNvRebGQdbwXWLd9jZnFu1ZAokmB5kuFHLEZJVWb3AEZRHkX4voLnqVEc4M91wwow58zSPWb",
  "key3": "61ZC1nDDrfqPqWxYuNfncbSqaD2FTJuM1BwoVWiYwz9J9MwBmCY9v4oQc2S9Hd886ufwDSMCjxNSckgteyMyomJP",
  "key4": "5tNjMitjd2QFLbUcT3xiMNuYZDqFnd3iMLBYGRT1ZdhiYcfCYSfRm7dBZYnnmKtaeV34vPBdkWmityjF3a1QSF6a",
  "key5": "at5acxDTnz4TuTpXoYEXA4YyDL9fSXN9vBY9vYSwAFDwS5tToe7gZDG8RydF9ud7kmi8G2wx4J3KnPTKWVsD5Wd",
  "key6": "4Ep38pupcMBstGb7AL1DX9WENB9wpTQSP6b6yVkKxySiBEvUWpDxuFsMLJq6hGJefV1DyY81rLbnLm617Kv8WdAV",
  "key7": "3WmMYm2NR4SGz1aHF51Cb3JkgabWL9uasWjTRfKxBrdrC4T5xdp9UQ5wVpNm36y65T85zXvQBbXPm6Bxs8YPBKFc",
  "key8": "cjadnyximLM53kEGt96bJyZXrAC8u45XVR9DzAMxsuumS34Kjc3J3Jr8ef86i3xSzvJwL3htg5WUfEQ5ybi1Snw",
  "key9": "zSmeW2fsKq85BYtUvpLt5g2Je5YLodHqNrCi4Pp3fjXg4E9CNQniywsnEjmnbrtStYeCmE2kmzpCwc2yquGmVQR",
  "key10": "Lf2XGnHRwjQtCQebexfiGsexsDEhRX2LoiB9pd3qCAAFAsar77iGZPRD2jsK3TTtzfwvk5BrgSmGaVdKiUDuKwC",
  "key11": "fvxk7zmr7DWijedpPLYPJ4QMpnnZeqLoqs7yNEEcCF8cLEVs4XDnaUiP7TmQVz4qQ2mUR8n5hDBXL1SanB6gfEc",
  "key12": "2c9eH6tahsYBJYo2zLojVxe7i5xn3ArE2DrDmGuwShnv8HdUzCWvjWjmWkLmwW1jpu7VTWKnqiKDutGaqc8Yj7oW",
  "key13": "3MKWDB2uLvv5cRbtnPYBACKZvLqWW7phMEX7pTC7HbC7cPPhGfsbb92J3KDQAVcnB9DrWKfACNz1V6cHSMTr4Tih",
  "key14": "3ePtBbWHaasmiESuxNN4B9bbX8sHfEJ3rBLJNxfbHwG4ao1XeP7MQy7nwB7eoqNfgvXPG8rJ3iQJq9x69GXgg3Tc",
  "key15": "449Dy1CHjaFvJtrnfkDUWKTvMJqo5xY1PNnqCJFrSnW39ew5nck3CrJ4qzayCQSa68tR3PjBks7qdza4cy6MVhQy",
  "key16": "5kesqYvqhderdATYQKSWXzyDFYCWpi8jk5vjFhBFzSpqe73mpv2pdYKaputmYU4qnMxrgJYi5fdYbiuRxJnS5aBa",
  "key17": "3otL2gXwyxn22NmqAct1AnzforNtnoackJ94xyoT7fBLTR8eYALeaUBQwdW7WgeSmhyBimW77RtpNKxmHmzavGUE",
  "key18": "45LpRSY3i9rPkg8K4pSwGrgndxx7VndL6cneHv61ch9VTDxf8dDjj2e9PJzevvWciWFdQ67TNuLEA5i9sp9UA8dY",
  "key19": "4Y1XYkEa34a7S63xGCqjTe4ube6uAv2oXP8tuN1sXrZnkPJecwKV7F561m8XZdCu6r8thv1kqNHn4146HCFjwGFD",
  "key20": "3kxuk22nvgu6wHjAqY8s98fJTpkSPPpKQNJZnPfvquKeARkJzhABXJyJ59S5gfUzLeCJ9H41vM2qsTZ2DjCGDJK3",
  "key21": "2GDkNZ9rtG3wukETv95aRAjoXwbdzU541uFj62RaVGVZj4kNjaGcq27Myxe5xtbBtpdPw5cnbcNyZPua5vS44NQt",
  "key22": "4oAnNmZu5H5C14mudbvHCpsYZaTzoeZk1r977woyiPYxachaDv76wNi2Cs6TYnrkwfo1jn3LsuNRYz6qQxo1HGAs",
  "key23": "o2VRgNYSxzbyWks2HDtUoPYWLTagoRRbqPijzPMxddwWKyA14mTrSVGda3S485n8PYwihu5mLjwNfHjmxqgeSwv",
  "key24": "2zMbYZn5MeJvuiNzkr1HrC6wq21sGXe1HMNL1RSZW93Mq4K58xJAHrfQM6iYxF9APGpoGL8Jen5JrfmPQ59rfcLG",
  "key25": "5V9DKXqNCoeLExVdnE3jaoPHDU6Tou5qMM5VtSQ5ECadEPDyYNU9WTx42Ckai9cfhzN41x9LH4atReqTcung5Mco",
  "key26": "46WR5X1Y1RM5JLFnztaaaVphPzc5fzunc4bauiaSKSGw9Cireaj93Gtm4naTM65Zrvj9nBQyaZkM9pzR8Znzx6rY",
  "key27": "2yuSqMhYzdee4hMGp5gspHZwMZHG9iDfx1TQgntccCeGdUyVNCpjHAFqhATKdvJAqQ5uTEqs8Kai1pXABy7ZW3VK",
  "key28": "3jjSi3WnZBvJui89P2LUh5LiKfzAbe4X6t16SA4AZvUMXocqWxJbbXwUF2Ze4wNQgryDqprWSsxM3mYvpNp2kgzZ",
  "key29": "EHfDZvMyHex1J4vwHGZw13u3d5GdVFgjkdoyVLnBjxG1j93AKSugWdWWYb9YQcFS62ytmLBN6KjRCotk6DqsnDU",
  "key30": "3iBpkKFhg1PoBdwM2F7Lyu8MFGmzUz6zWjHEBE12BV6K7CQRqRLtKizN6mHNWHvYDZynjByR1Fn5VP8JgXQwYzna",
  "key31": "3XbYnCgYHCY88mvGypRLnTcUC9tScpdhgVE2SDpjPs5xu7QGJKBKZWk2PJ7nWAkBVV3hLJ1S47WtDSvrYF1TviCE",
  "key32": "3tDRt7v7JjFkQfrHHoA8NJiTCRJKKHTK829huCftHLCUuWX31oFX2cZ9CpehWyXwJ1enQfD6VAh7cJuXL4TaB3s1",
  "key33": "Rpyw74VwpfTXGz8Hk77rFdAoNN2qQC8o5EFTtZRmx5yTbLWt9pPvqcLqYmvA3dqFtnwQhn1BpcJgD9F3ytWJga6"
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
