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
    "4x1wf25Ax8iH7r3zCxSzDiWnxyHAtzu2dYazjGbCmRv8fiS53QyV1htMS1SdajqFXfVXHqrmWkVcERurHGVX2Bya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MRHKiM63ktP2DcUd18DhLwFtNmZoqAvNW4tsh9qSwM171Kj11ZNso4PuS5ohkdQAivWBNAi2M8qXTyLSLsQYyK1",
  "key1": "3EyVwLkWy9zB8KxQSsfa9JFmTnkdQNydYUJGpkExNQMp5QRdBRjN5jHthmStmpBLbdAVcQsED5qBkdQ7Mv3KCPVr",
  "key2": "2eMaqpyk68WycuHWMVKwUHFZhrGWMpn5pC2rT8UkETQQag5HPFeFxvSZeKdotnr7dNuCMj17DKXHzPHi8MEKyRBa",
  "key3": "2EVbHUraLoAbxaPTpDv28WPtz2be8ScZE5FXxFtN5YKyrFwUUYdTEetFs6bAxaxZ6y8ZS6Z6TGCsMY599dxfKHin",
  "key4": "WN2Uy2rgssZFGJQy3by1MDCskeuTtRrpN8Dd3yBXoxoLv6iBhL1hstVVuqNwD5Fgr3ZUqhxTvxD5oyBZeQDeav7",
  "key5": "2Rx5zBT2wcbJSVdMTvMHwTDPMREAVDdhK1mZejtSUtYhQYGHuVhjnDgiceT9cmxZSwZH3tGoU1qZmgdpuyGScdx5",
  "key6": "58ytuCjK2pXJ6VYsFjttJvzRRStdXg81SzvJPStQscuNpFGFvi3YsrnQNUFuRqPMAXZQZP5jewcDdFV2s98ZmEwX",
  "key7": "3pbTpjHa34AcewdjkTjJgsjkL9p9Aj8gNppXGMQgoGwEAtwQQxj5T87v6UfcBwyY99MymwG3uX1PYeno9jhcwFsJ",
  "key8": "3YyQNekCciDVkZt2bLcBqrTkpnRkHoBEpbbBajAS2XXkPG6uHSVvPGZc7qqrXS5avWWU7ajuQqoEkk88235gWVqB",
  "key9": "5XyjC7qvyD4JjvM1LZkgMgxntmaF2DhvdG5rdCxt3jAGHQWoB1wKnahDZHShADkqRQZXcVHyS8zc7SgaTe8E1s9j",
  "key10": "72xNtyNJXeSZxV2L8NnaBq7gXpBaXSFHbYtqoSi8DzLUF52HD5x6sTUbh8BXnz65Ldg4pW8QeFepktcg7SnpZiy",
  "key11": "2DcuoP4dggAck2cEeac81QFcjn6scdU8x7U1PtrNduKYivrtbNEC37ExkBF3DpHJzKwEGr38WaugHn2H3WNaALr4",
  "key12": "4MGs7zNkCTks76NqJgpwxE8QQhgUMFEhnZ63vY4ncGFHZzTraceegnQH6TrhvkhrE69At32y2Vp2A96125RsVye",
  "key13": "2p5d7pV54DeKzrakLY77HFrZrRmArB5GmewpqdtuQLnDd9LtkAMG3SvwHGz5sdNvqehbALGGeaY2ciFDBhN24Hqb",
  "key14": "3C1Rzs4Mx4CVEpWuqT5PvsxTHTSC9GVMYp5694suZc9vKeDg2yZSiMk4rHELDVwQ5JhnNjFd859ow2JgXZtxNyue",
  "key15": "4zsvz8L1KjodQUZ2C1UwfAByLEfoVyKMNN3J1QmLXRVCwdXdrW8vqkmGqF61GduvcYh2S35cnkts1CKWzNUWhYW7",
  "key16": "46g1hxYHygPwyqafs1SduPB8LPVdDMVbt9DukMntXQkqxH5k9o1amovS8wcXVJNSvfVZEovegfG9VT9TBJjyQ2is",
  "key17": "4fQeC5JGbEx8jcWYxFEtPNwZfezqcD6ELG7BsfmsUpRnt47kYAAoGKPFWoE1y3qpMo9WrBVLybXF9oVbgQzZutpz",
  "key18": "5MLWxP2uYf1viNJFEZ2xHLgFhnSp73XL2PVf8DMTQKkdu7mxp3zHxx2hhkjxwNzndbBb15fyc1bEDWTcwBLWY2mF",
  "key19": "2jmSVPydgYXkTWGC3GMv1nvsYab4K44ioJ59TSXW9ykfEqE7LDYY5VBjteukkk8eDXQ5v5DXVs6npzSqJwoy7MJh",
  "key20": "3CT8yDgJk6QG2hyYW1HeaMRT1URZHDSfuKp4AEUTtkBemThoXjmnaWUhgoSHjbE7YJ7xWMNd8UU89xkVS2pgyXuC",
  "key21": "3bbcHPYHMGRqkvyc2EHwKXEtkqaeJXHDc3mTkJ95v2WvT5cQgomckrJVhPC8ejyJv8PZtmygVhXgHFuB25eS19Rj",
  "key22": "51nsr3dRq2x39zp72yNhHZ11QXUuoN8FgY6o7vWcR9i6cKntuG6G82L5xLYMjaiNBuQqDZbFArDH1kpEs9YGm9op",
  "key23": "4LDiFNHzYBinwL5Yk4mM3U88fUt1xbmtye2RwuaaWrwUMVXA6UCi7wcSusDvUZqDarkVLdKydJ2ciSHZYucpiABM",
  "key24": "37QBWPiJMjB3G7h9FZvh43Zj4s9V2fe3nv5fKY4YixWGko6J6xbSp4asQe6Kei4m1TxRyyXdivbFkXWxzSp5iHPQ",
  "key25": "4zcxg8FB68Zx5z1RWLtwYhUnphxQeAuX8AURXgrxEzwMajeNEp7HBYaupbesYUvgkPXzqx4rzuvR5kQsVvqoPNE5",
  "key26": "59b8cdVqQJZQdGqUBGZoND7x5wVHiYKhRB1z1a31m2Y63vtLqvdSHDxP11mHAXmmn4Xhw4bQ7NoqXpmWCUuc3XRU",
  "key27": "yHUhzrxjwbjaU1UzDTFVnZZNgJnmq8AND8auArRXdLeGFYDHw76KVgekBagMZPmgJA1kUbGBpJS7dW3PmtEbEhp",
  "key28": "4RoKsfbK9EXncoCQoJoGPVigDHRAh2McGvHoSBp7jYa3qUUy37wbLg8Eqhjg6VveG6rPNBHPdUAGTwHFSx4og2sd",
  "key29": "2y2uAXwGnUEp3u7ADfrtmhfmeLXSn2eE4sTSGGELidz34efxCEXYQ2ryHXfjg4qozWH6qW7f2ComkmuB6X6BQBkE",
  "key30": "2dTFm1VxTbC27HKfrUxvEYvUa3dPDzcjDJDWGKFrFJKG7asxmzWMSyEqseatj2QYH6vQL1G4Djgt84fJ1TxeYy7D"
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
