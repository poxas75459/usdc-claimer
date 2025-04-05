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
    "2PYovy8hBjFs2b8d2mC3uRfn1x62fxiVcQ5ddXLvNLecCEq3ATFucQYUDHCQvKuZurzx1UoBTPr7EVfyfsuq9rf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nMyydL95DbJAKaSxXieAQdGtr6WqX5sc6KSDhDbnJrQqx7YD8Rz58VZfz62EKvP1C4yEBWBXpvXiUyLAJt9p9ep",
  "key1": "5xqUbzdvv4Hyq3hckZXuu15DY4HpnTVmdZuVWJ9jFpsPUsHeQNiasepjA25yt659x1mQL7yF27H2kKDA7SzRTLnv",
  "key2": "4C54DAUyUPPPuVKNU8pyhjTgzMsk2sQXKuB5keMHig71HikFx4nt9MGe2aVYdRW6YzUVgLECcawjDeE7VvtqA6cG",
  "key3": "5KdQioLXaGeivdBgEg4W7F6NKbw7NXMH4k1ytZkvbaRtzkhsqmZiAGq6mT6hUEbheA925dNVpp7128BbPYPQbDX8",
  "key4": "FFT3nNtwxy9JmvEThgFj7XH48iwJffbp3ug6vd3DHkUhgED6CgyVhX1ycDfhcitsiyw6BVJCuPZVDaJ823zUqmp",
  "key5": "5mY5nGHcwFXsGXZV5bXLNtSbcMH7eoi9CThBLwcNA7sNT22cKfXzWiPfxhdoCthoArk51K7DYiz5wxuNhrR2NZAZ",
  "key6": "2u8nzyyK7kVHXHoHVxheMEmcigfVHa9LnMfjCZ1mTKJuoFv6fi6UBx1LSGBqsfUJdB5ZDUHsfXQVayDUaM3R6vng",
  "key7": "41R9y5QBhuQYkVT5NMhNMTsQn72aqXrtdKAC3rQmZ3AG6wsLq9HfdJhpKpjSd3ngGv35YKfYLxsZhH8HQ4fRVpJK",
  "key8": "35xNNd3BbHVYv4MsRoAJ1qBr9tgT94EtNhBFuhiNjPndMBxenr1AfWBhEWzLeSonrSHgM48aef8DNnXTLdBuQD6W",
  "key9": "TTzHK2bGppuFmWjpRMwL46SSZUp43tdRRJKVSWz4XnraTnMiFJF2gp7Lb5U1GDnij4Ys8MJdtebCKtEKLBxJyy8",
  "key10": "4TYsLquWtkByM5bsyax4nBwZypK3NHx6CXMaYisnSr2TPLSzvBN1rR9nNcY3JLRKRMRzbfJvvnmq2dzvzKkKuutd",
  "key11": "4fhfcLztQtWCa5SHQ3SNPqa4tP1vhCowt8HMBdXJDFEk5oAC5BAsWjJ9T1MdNm1VscQ4afqf8ZEZ8iwafU8JXXsn",
  "key12": "1qC7u5uv9s8cvRwXXNBkpQmSHGGzQoc38ZKxe6dR4oXqx9P1EVYgPDYBWBeeyuiNGZK9KjMwWMTcZv3HZdW2Zib",
  "key13": "4TQRzAVwBRPFwdYWeATLpV9Sa1JpGACnihwwoPmX9j2zRTAMChjV4JjpDqooG1SagrvrMUUhAoDsWoY6jD7dPRsS",
  "key14": "2EZ1uySghQYjfRC3Ww7E9GijsbYCnpyWATPSuADaCnVvAxPoj6qAew8UEH3uG8Ydu1Fy2tiWysqYgusT2UDe7hYm",
  "key15": "skVhrSTLMRpUd3ZWXSpGfzxVHtF7PQrAQbq8WWR2NLYBWFXnSX7sSxtzYjF183XETKguxy33ra3dP67dXSJY9Ap",
  "key16": "2RQcPvByoLyMT26sE4pq1dyKZ3oL6aEMFLAPjJUnh21VNoMaaz5G4bnRyeVNrKMVfCnxvLcybA3KG4kxEZdLjALd",
  "key17": "4dHhms8K7Lqyspm8uzhtR1hpLZdxxzyJwobivTpSo7xvYMjU7iRwLPYVSMTecV3JruUMD4kjZSQ7zu6x3citLCbP",
  "key18": "45w96wTNb74cdLkMqc28mmgqH45GxvEsRAHmRY4ezQxoH1t2JAqkxGxryXst49p8bELqZ2Q25xbMsso9e1vG2Eg7",
  "key19": "4Q9bkdQpyMP4RzQeW9wRWcfyHnt376AgsziaPYv2jdFvheXKFWjgwmrWcXrjwmWwxcBNTKPcVHG6Td1g8j9GJhX2",
  "key20": "2beaTwxtPrWnoWGUFG6ipYwqBzPvXmsE3xbte6rkqNNssPKWRxkvQd2rbmNbme2aG5je4z6Zz5WpFdUJuArA8saw",
  "key21": "3H9w3jTDRC7TQGBmGjsCyE3Lw19aiz5ZGJ93iPQWtF2PijeQjRzwVWAKmXRAQA9Y3SkWffdGMMhGwXvqpLgzb7bg",
  "key22": "3tWGfWrQktyxTYLvTaXMKZpCqSJyhqvLv51pY5dYsbTitnL9kodjG32DMAHYbBKJdnQ6Der2qgY8xv2wgrt7cwJs",
  "key23": "66V8bBUeazJkjM3YyU4ttsP34ktzCxVjBN7u451WeoojbrfzD1xKYBVwJgSj6MWk4UgPTURWfB62NmCfZ9kvZCYt",
  "key24": "24Kpkb4mb9woGpyn8ZFSJZRG2uB3VtUhM93xk7rLgJRnRcGhWcCkePr3m9oqvJMPsyQEmBVZ93gFoU7ciTEfF3XD",
  "key25": "5Qz63GjauGDJiCoXFFJRndd9fAzbeW7CDDUVEKFA9cehGtfxNeoEjNzzUqVBX9MjRcEKSomeKDQFYyF9P8hCPEaC",
  "key26": "2Qr5W8APUpK6U73behNAzfLstB1hh2eadXoiA1Tu81J8HfAZnqQj7M2shS4mAJ98brBbHi2BZhqTugr6mksQaUt5",
  "key27": "4nbWJNFUdegK3XqeiU5YLwc7hw3Yhe2opWUZ7cXT7XantaUWDy9v1DTccSEpUxwK2kzibMPNnAfTKQMHgsSNjhq2",
  "key28": "VpgtfAvGr3hd6sxPNWNoZqLrtWeQK2BwCZwmyFdrbeSn6U9dy9kVSdPd5t4ayCsG6AHLagGmcJ71kt5KLfrZaEF",
  "key29": "3Fb4DrnKUpBeYmR5ff4uPjZ5srrh7szrFyTKBf1g4FvWbEPuJqCkac87HSuQwgYdoDhWX2857hzewZRcXbmH2jnw",
  "key30": "2PXJxK2USWEYumVuTcH4zFh6zxM8GZBa3Dxf34ARRfVv8Urbf4r8jGdMWWDmuXUsQKzf4vPjLF1qrxPMwxPBiQRs",
  "key31": "27E65buCx6WsECgDELu5hjbzEXEUHzjFEYL3vMyLpW4FRFG5YH92ZEsUpUzbbYZDbetV58y1nB4WGdiD3DW5rpMt",
  "key32": "48ZWGf632YNmpBqkRjB28y1bPhq4FfYuweP77qnfJxPAXC1B4xDKVmACE4PKxmVbJehUW4PUnEfjdHUtGjrcXm5V",
  "key33": "2yVfMF7RRUjW66z9GAi9SB6M6Gvw7sKvyRbBcRxK1pDfFDNrhcBnZbabuxcx5DAHbQMTmZDnCgpLrb3NQM1K7y8H",
  "key34": "61CahNvDgsePMWuGS1JJxgNKwPps7Pcna6RaUyhfL1cRU3kyWwH7LEp2eyYLk1EKgg1bfyENetEm3Ggxgpt9bjsw"
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
