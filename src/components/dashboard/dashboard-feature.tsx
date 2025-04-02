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
    "2SuMGwKw2Dwangf1B8SVcVEkPqYStJnErdUKBPzM9ZfXqZU3MqFPMN7h66mNFmA7bTTSchGfbJyym1EC3wqnNLZg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QEKDgMWpjcRSJMPxVHemABj9KaFiJtofdHWxZMVqotG89uUr1HWcg3nuX7WEpmFBxDk2AQCasarNyPynKUhqcVv",
  "key1": "2D4GnCJL5v7qhXwQvRmxuKczXUFeENCyfSVpT6pmK2X41LzpqwRSDn3rjG6CsED1E6aq8yAjRmVQ3tp2qLZSFDHE",
  "key2": "3JDa4CKiU7njkyNpvcHAVUWBE2PAf4w48HRoaTf49mEpqqHLk5tWPKXUvfiH9B6zvEsusk2bU65uJnwyXyiNdMw",
  "key3": "3zeg5ko8yDcpxMZyUwrpQJbf2Pukv6VzuvyyLXT2QbZvBmg5w9uaAtrc1PtU3b2WBUTUVuzfxkPanAEJLb11miPH",
  "key4": "57cri4bBgMFRgV5pU6S6xcLHkFgvdhDMQRgWWovnKZajP9RyjPYnsZCDTcz9HsRGN2cyVPuCpQUJcaff8pjnrQo9",
  "key5": "bHH3qGWWbELy5g1Mp3ZgYTQPPxYPZq668A28eXfdvajQZTaLd96AVVRgMrzxhY3w1UV3BCgwHyqBFHf3h3dz2wx",
  "key6": "2EtHV9eNQWcppZqProVGXBJnmEL6B7Ap7q5S7QYD63ijBv499vk2RBRhYCeFZaEAvcXJB2nv3AA9yFTKnW2JXWr9",
  "key7": "5xJW2pq4XdaDdMpbLNgbtmWwZRGNyJbgL2ix8XwkfmiXbXwxjXpez12EA9PWqM9rrEkyZnnfjrUSjqybyA4V8Ne1",
  "key8": "3hz3DcmRoRfdr1A2iDMNjW5qXYBK3cn1ZT7p1MafBA6ekJUEcVPckzrcMa4bXjHxe6692y71DqmsqsWgvEHfiCVb",
  "key9": "5NnvWnCSh6Bcn53E2P3zXg7Q1W62kWFbbdvP84G7G79UPYdXS2LVPZDiX63V9KcCJVc45EnDJ7z3bU9YjJyXcnRw",
  "key10": "32ZB5ytk9yDhvX854ESvnUsk12FzgCctJUFPrk4cZGj9M7LQnAsbaqL73JMncANh3FYRd6wJVimGzBKH6SzXoiVa",
  "key11": "3RrrD4eL3QqYX9aFtipTMNsCwTkdfNZbQzUZg7Uit886t2bEFMKAeoV6J9XUFjNbRA19gGPRiokTs4mNac22bm6P",
  "key12": "22ddbpunroqiZax7BLSy7vWQ4wHLwksUtZSMoiQ8bMwPrDeP6krwCViiXQr31XAbqdzXWSNzLL1wRnHs41VAf599",
  "key13": "4QRHzk6fVGSXtfbqMKBg8GqgDgX3ozSNsMsWrhzpm2w6WWY53nGNAF7hWWzDue48kVZnbhhTw2LMaA9A3DAvkfWd",
  "key14": "652GMhasUhyobWXraMy9hkP15ufTu2P1XfmiBzbEjUgW5qxP9YSCMGcwr7w92Zw9JrhVPoHK8Unx63nrJc77Te9L",
  "key15": "2LSs2KMr3gBAuuu8a1qfADm9gz42hHuArQ221yWZEG8zpNwzA96tyqnPuuaZqMZwTpx8SK1bCPt4sN8cDsZQ3gt",
  "key16": "52wcWZxyLv5pEnXZmm7fBVwcccYh5TYV8W2Eu9EYqCeU8urJZvoVPiWUZDKubjcAfBFEYBtHWHcKUQe2Am8HPKeG",
  "key17": "2hnwW76yyr4ncB1MH9tAJUZfLG4xS8vJmoHuHjjgSzBvB8ZJjqc7UkbFxNYrhUeRN4JsudinfLgC58V1tbA23DqC",
  "key18": "34EQT3jnMqFnorqBM8qtFd5z6e3sRHtog8u83AQgqnhfpskJbhXiTTGfmfZLgf5WJEVL4QeGMGg5ACodguMHmjCw",
  "key19": "5v8LKhtjCEu6auCbpg9ucVCvDxnVGvdDktdmcKDjQUM7F2nPEgv4ZiL6wuVBh9QU3ikNUzZYcFAMxYdG98uCtPpp",
  "key20": "P91qk3fthyBWfutLnr4hqfufwKfiuxcK7e4b3wN8nZxwrBufxFfw91etcmrzUDxX9JD5CpigWp5h9G3Jvxsdnys",
  "key21": "3AjM5NSG6QJhkSC8ZidXDFpPAuqqQtWVwRb5Beyt326hZFy5Lfk8oyj56pw5BKfxkypQ5D2kkseDXutaFMPC1Gu1",
  "key22": "27vknBNKNj8v35pPxxaVyxFBdEuuGMUrXRLUwVL5UyLzFPpkL3NDw8iSCNs43r9JfSnUicY8iKpH9f5P2JHtosBz",
  "key23": "5YWSjCy3cJf86Y7yZ68p6EQ5hGGvj6fXfVRrsuCWQJbK2KbGtKpbzB2yCA8zDeb6MfNBADGKz58yW6tSdqJ1Kkaa",
  "key24": "GRScb3R266Qsjvoa7LfEGJdTFkqLGzEZ4Gz8fuRHwq3a5RpED8JDv6ZwNsqPEp8yoUq6Mu3oCSupwmGi9ix7yhV",
  "key25": "3k5BDd3Gjk5fAfNqZARnYLkZbazZAWBsfYk7Q8Jj6jp6K3QYCRWXbVADJdYgqeYR88K4Eg8999i5m433KzU7Z23J",
  "key26": "3HQQNxHpUuD4PJPGg2xafV69zwdiGW9p7v3qXkh2nTGZBwRRPWgb8Tg83VjhyESMwyZq8LU5pN6KqndfLwt4FHj2",
  "key27": "1KhcTuuW4Skdag5Xvz1hmkoiGTHTAXkoCfc5ErHJaw3RUYqyhtcc7i5FVkrdcAo77LKU95YgRCSrD1vxU4KsX4c",
  "key28": "ZGyuGYHFyG4Mi8wiZwbuiw53vnXJyUA3tFLaJTz6bE2wjjKCE5gzWPKa2AK6qZuiqnnWwgz5AtuamjWSToHAb23",
  "key29": "46GB7k4hSZXskhUtxLptCyEjm4v88kceUzQ6PhYmCoRbgaDT6Kwb7jXsRdZmttTiJYVrdK94A2gJPb8jJbVyMrb6"
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
