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
    "2cTWPmKySTKJREgip9zD9oqauTFynBjH88uhnQA1eWhwZMPR5Uiu17PedmJdu8ZN8z75YZvH53wy6EifhS7fQJZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DaMQ35hbZq7T3YuMPtg6tEnnnEjL9ygxVStLnHacygQ3cntH4NHBUVnr4GJiSS7f3NAxJFvheJNVJXQyVUpX4MW",
  "key1": "3ivVzSe5xsTs9yy6fGJvKhVGtGph3AJEJW8Tph1HyRfHw73QEpbSNwbWUNgpjFZmtS4rbumN6EJN28cwjwcR16mn",
  "key2": "2WDQpto1AxqgqrJX8vJzrHrLEcK2NkgSirn5FaZY4jspGckmWfQmLXTstYWkvo5dcyWBbyQZaqMKxHq2NVUQFDjL",
  "key3": "3Q38ms4X8ugCcj32bt1XefWiLRJuFuMARtaiuuGdQLc9f6dLJWsZAPGzzakFJ5He3PCYiNhDeHtP6tg5WWT8mudb",
  "key4": "5KP5QbKcRnhUcffCMQpSTYKr6dkjidmkqtAU6noypMWzFcXtKZJsMVKm3rNcRwxV2PmDcAKac1cUojzcmCJV4PWk",
  "key5": "5vf8YCdmriVe6PSSMbxX2LydjhustgGuWvwHh2xb3Lk3sDpdcgLDTAz17UBDtsJTLuEKGLJtPd2sYeuVmsZ74tKE",
  "key6": "2oNgj2hKU1yn9tAYPpTt1GMVYn87DxULvCE11NDvWbF7t9HC4aHFWDEkC6PiNVwUVdtLdvntoKUZ4N8u79TKSZFF",
  "key7": "2zMgmA8sZHEjhFc7FQQxegF7WyHRjVyCH93Pe1BUj1zrUTfuWnbHZUM1vVAWh5jGrobLCuFbYmRnsEUfxGTmjye4",
  "key8": "5FhdLziCTJgUXdM68t66TSnGkNhwy9onbZecFvmMzNwDGPPZjzizEM1LBdGzLSZre18v5U3g82DzDc7VAAZAu9pH",
  "key9": "5eZt7qEbVhfLEg723EpTq4SL1Etf3r7PTerg6o3VrrxSC6Ju3KpuxwsgjLXNgwGYVg4WkpxKB1cYG6foF1EzGp2",
  "key10": "U5wjdNa9yD1HrdJoC13uFuafKVTNKeLxQqKdsHS4Ed6ff5Qcbaq2TZiKrM4TGoTEYd6RYeFKp5pJzx8AvQGQDFU",
  "key11": "2yojdxCh3VyE8JRhHX65FPb2jT3DKw6bz29ACzNpY9aeK19f22ePkAaH63a1MpWXfutuGsuKF4UyuoS8ckcnn1mJ",
  "key12": "3abVcYqkxxnC2KyutkLJi8HP6VeBieSvNLW2ZsWwd63Gz3WsDGxFT4uhccM9BtpTwDVHZEKBf2MpdRGFQGWyXXvi",
  "key13": "5J1ZrbKo59RHumC9oRzMaLctNkxim8FYeNMp3eW9qnfC4o5sz7V7hxrGwtERaYY4CAqGd4ungwnhAnQkAi9wxDNM",
  "key14": "2G8A89Mo5xLXYQUJktTJifFMz4BeHaKpW2wohxr4fYUYaXNwRK89YBfBjszkSmNKz2UyPK1pqUrMh1H4Jyfjsc8i",
  "key15": "3MZSEdcymbJS9vfE4zzmbcMwMMdBD6zULwHgVDfuvBpQ5yv2Lqje2jU1KaLps2kzpJJ1M869VDuaqrzt83TyoHhf",
  "key16": "3VSLwoDzn8Ba6vn4QAkjq3HSzCdaXzunX2huLaTByCTWs2JNiEwrNpr98RT2qc2chLBTZxR8WL2G7gMoA5T9F9jg",
  "key17": "GeDWY7Ljx4VmNTUh28b8g29dbECA6vP2JdrCN1y4h9nMf8aeFaXtL5vDU8Vd1hZ38h1g8AriVtsR4uAG5P3KmKn",
  "key18": "5ShGvpwZufTwsUbViVttAk6HacLvuAHFtBQHcpMYSSff6z8fdSuHWV4M6SrNKx3Du2RpaX1UmdMKCDQfZwdPzvAM",
  "key19": "2vD8BaXWRXKJkneUh9ZMbcL5aUun5qE2kfj6Ez1VQhmjP9cX5Yqy7hCNT5pUQjrm1D1srmx3xrjSXCt3cqtfeXbx",
  "key20": "4wuUsji1QZoY4LMVYummK5SDCf9LfYFEAfVmBg3HXEFtXfyz9cbug2g66Scwpsupp9fhs5iTUM8rDiskuYUoJ8rE",
  "key21": "5Q4dRT5iny2YSMrRTx1XWzoZkgie49YXbnDcuYSMG8oRcpPR6h6BFu9sNXgB4AExEoQrSZ82Ljs6jmxydgYcfnZV",
  "key22": "3wvSGgaTEnoXiJDRxbJGkTSnYQwSPxvCg2SzJMkdgqPiZojDrB27kqkpTYkba6jw8bLaTMxMKp3pGfzpACEmMEks",
  "key23": "565SwLfaBmVQqvv83WpLgEb2qD1Rdfkfk8hBzNJG7mroBpQ9XXUekH951e17Zd9yizQw9yW1ngerVPhNJz1xgmEw",
  "key24": "2BGPr9LTEKyxNruFZQeqeETM78f3JyGjiWNkCoQ2ZkSDjNw1TqvPZhr7BQzG4Dem9Nbs4BwMn63Em1YPB9bZJHic",
  "key25": "4sEaVro22MtxeaBxnb95cxJZrQeP7RzTghWPiKePKcfksrzemaPXQ4mv6gFjqSWbazKwnkvie59KYRGggecgkrfD",
  "key26": "2isA8xTVNiDNKoSFx58AwVYBphX7f98QBsW1CZYi3GNFGQDJFtGGSRZsUZWuSZFp6FSUrHbd5eGxhcYwSSDqtWY5",
  "key27": "32hJYamnTvbcx63MimxyhvqBP3FAGNZXWzGzS51KtUNUTddRQCg6RD3Wz5FStmVGi3DdDBXhYkuC4Go4ktaPRJj8",
  "key28": "2DrZrQKq3yegTeKqZL7zcCEcE9htBjxBL49UadLT8gHmFWpasNZh7EQXe9QSD9VwK3iNhEeb4dshPkXyuLkJFYKQ",
  "key29": "22Vti7A57DA4GNSQfR3wNihzErrcKfaTWujt3SfZQj9iSEZEx6kf9QTVtw7avmvCgoNNfHfUfAHZs7jeXG1Unztt",
  "key30": "3JbCm19qB9K6vWzN65MPAfMzZzeWvz6jgzbGdmHvFoioSKbNRWC7xc4Y99TYJoMYNvgvmb9HkD2xNNyKHXr1ygmw",
  "key31": "38tL8c1YiojrJC6q5fdwMAMjAkKF8w14Y7XRjDhndLDaxu7ijkXtGy2WfH8eWvLtzpC82fiVXx6usF6s2v8dUvKa",
  "key32": "2MTK1KU8JKeX8Jfgn1YRyhxavTgmG4oaA6MdTxuhZwf6ASdUvdAEJBqUWXDV38RB9iAR4o5NWB5p9YvX7EJ9jWFR",
  "key33": "4Azb48BUBXSYUsnuHYmwBJVcqCDdnDSsmk23tA7raF96aQeaYG5Fi2buhf9CD3YSgJjwGTFz4qBfRpJUBsKAta3K"
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
