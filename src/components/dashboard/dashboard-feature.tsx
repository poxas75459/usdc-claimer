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
    "2wk1z5X8UJ6xU4HAWU6zyGn3kNb3QcmZUzJHAohuUscXa3TjaL2hLj1tGJ7FudadvhqQkhLHiow3sAsbX54Pyvsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AQsjU5eDuDvtWP9XBdbxSnWpkoTFizwBYo6AgognP6JXr1xSBPNvb41sy14JhkqC6eRUvktwBr1n7mb4nMYcMej",
  "key1": "5xrpDETs72QBmUmmKUe39xattPWKUcofqHpPziucKRUmi6NFi3w2nhajMWqywewdm1hWuL6F2h5j9CrtkRWUcprA",
  "key2": "4KyC51w83PaAaDbFvKjpVuxcZDCUTe3DDZfa8MTBsxhbURnGpyQJaBJ7FYEdcnq6Huj9QmTrfVNuVzo91R1cUaVq",
  "key3": "b9iUpHX4RhbeVCtuWLhWUZHYS9HNPE6MMMb5Dp3LEx7EHMZnZtnzuNWMHfV87HmHGxTbAXbg14BJuXGo1nnNYC5",
  "key4": "37C4BNVVuKy9rbPwZ5x11VeJj3WeLjWFkbEZUAFZZw7ytsDnvJ7yRbGnvc3Fhv2pk33DPorjVMrSbmguEqt2gJmD",
  "key5": "31W5FBCBmSw6mnQJ2iyaYHAToK9EhrUxohmDn8gEcJawrxmxS73YiTar9wo43gbSpV8XnvwQjXQ1wuL4rExxfnBb",
  "key6": "3f4cSY9rWQZu2yzuBoe1n1t538UopG5zhtKCnNj5y8Pb7auQtDgjWcoYdw44fkmom8u1VFB7hwcCWJen5YUNL8R2",
  "key7": "RZiYJ2CKhYMNFSbzAN991KWpAMDBveE7JK2JcdabyuWVGfD5P1cRay8kBwhscghbKwPdyjjSvxJG5JYzRoRkeCC",
  "key8": "4ZASvx45H81jzPx3AE6NTqApeMA2A95hmz19yRPDUtFnzjDz2voPW9vCnkiRw4QEn2U4oeDK838o2V5YWEXye6jP",
  "key9": "62jRUeFGHLFqotP7mBkrj9HGbRvfNHYk6qRnTUF5kXk5Jd1bc7SaM6MBQDsUXcB5kkfxMnjNEPthCpdKAJe4EiMF",
  "key10": "2WeZUxTDi3bZVfBYMqwv9sNxXXeDmoLFo7qjfEsSkqMyrUNpBu83xJVPgkwU3kxRGahkdjwm5jU6RwNK4QgcGAQR",
  "key11": "64L1iwaDP8LsRyz1NuUzmwVB3q2UuTvG4cVGMijZbpNAuhU4LH2NSpsVTt5SXBdxW4vmPPhMeuAukDzGdkAmWkkk",
  "key12": "2KqkZmLGmqZC84c9whQ8uxqYtxySntk7T6psGmjTmn3rgpGvoyE9s2sfdb7FWiq5e6kZhzGLJmSnbsCiupnhtR6N",
  "key13": "5CB523wosP6z7sskoLFCVji95F5MA9rUKQh5VqcMoDS89nznkZoTh1MSnUbLnLeWbNXGCwQnQCFUxhuu16h3ozrA",
  "key14": "4aXVBiMdVwihbJjmjpne9UUEgS5JfdC8wBwocFuMreuC9myChF353gEa5EvS7BRQy93JHr29zjCW4Bou9PaLSmkf",
  "key15": "59rYB6mn2DDXstcVshS26Y3bq6akibSmLjrBJdxz6ZVh7dqA9dgnDA1Cd2TojyKBruz1b41hY5k5CxWoritqeqsS",
  "key16": "5fj4nocnCzeJKFtekcoAEsZow9oatdq5U7f7f5BV3CVJdkBfjBdveDwUiuPWg7wVdhShN9hHM2Ga6PXEm75hswhs",
  "key17": "4vysxfoLVF7gjnRhMkLrkSMe9g6BF7HDJEUKpixy1cQiPvNcjLjwucf5roWAmuVXxeaxq71Th4sMy3UM1AmXrjum",
  "key18": "32mbvdayHQ9RNd6hVRkeQ8zBYGMiDhYabj8bhCiHTm4i7xg4Rws7tcFZ2X3Ukr3ReghLiemu5bGRg31VxZbHTVWA",
  "key19": "5agnSbPDzKgbWfQ7z6Bv3ArQKQht1bouvdredTbi6HZor9qzzwzzwVTSKdJeVST3AYhZJThWp7GzA5rEimSaNKZS",
  "key20": "318qimpnnquKRHKrTKbowgL9ecYh2eo2SseRuaKwKWZtnYrhSXGfghYLwegcZYds4LbcQg9HvP7Chv2mtgxNsRwG",
  "key21": "4bBKuht5EmwAqkeFsxs8VzkB2spsLo7iYHGZbZD2N8MA4p71CeGg4CeZFFDvrxSBj7bfh61hJFEGBBC6RR7hEgaa",
  "key22": "34G2n978K3ZVpt5FG8ktpYNz6eBW9Eswci73TTHqLM2yS9BxKR7LrBUcVHVUBsAhFfFRUD36xeigJWojXkyG8mix",
  "key23": "2d4aTf3Gjbq54GGYP7z83gTmd1s7JXboRZ4ArqSdk5RTWRBkP5dz37quyEwUKqXwV3xcyiskH7AznVRVP9RxBY1S",
  "key24": "3kJAyiucYPMUdhzXWLNQ7uxeSMMYnVsqihCA5a9v6g4TtJbobeGpm9Rb5p49dgGiBcFwU6PnJ9ZewXuBDp8k2Hf",
  "key25": "2cHm5CLzog6t72ogmFQ574r5U3JDFrZ9GZNrwRUCRLmSaN6Gw41ptn49TtzNrZ62kCHRyb6ocQGgLhZVz8W2mcjS",
  "key26": "5LrLk2x26yBQ2PnEBaP3sY2XJvx6hTqLcTysSZbgG61PRGU2x4kv9PWqGok28p7E2zoh2NmNXUVfDBXEPXMmh8Ni",
  "key27": "2EeNhUDvxahLBVH1nJNud6f5HCLZJYSay44wPNwCQSTkeDtHLRZkidhHyjcdThciePFcfsX3DDf9uWYB9YgvA1yU",
  "key28": "GxQdLmurJRSHsA5n6dpdSFCMFZqhu2HPtGMrzQgNVcZAM8nJzs3hzsFz5LfmUBQyG4kMPRoAwfGKkraKbaQYqiM",
  "key29": "iqfKkEeuaHpeGFyfjfbfktghxhYhcE7LMdcQnepg9m1dLVSB7qJZKnKoZhCWhRak69UAxS7pNY9Byh42Br39uZi"
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
