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
    "3fdN3hq2xvjDQsFtKXHGnWeynSoiwr4UJH8mnaAxs185kBu4XMgNKf7gSryFcZVYZPRsJcjYpZWCpGbKLVqaeZU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wu5mBGDSpnwVQPYJYhJjQMkobmV1HrBsvMpCgSthf99SG79fiucoMbWp2rsVNMngFhhftgXTN2t7NiQPLZ8LLZp",
  "key1": "yGRLhMiuJXvnUgUFRc827NL9sWmLApwzzq3BCCFZ4ixood4MSdbc8vNJ8pnwt9FGyAVkHCP5DWDr9rVXR5C2yyq",
  "key2": "58ziiyJcGoRsRUgC4hzBxCPzVv63zTgZHffw411pCKWSerDqGoGaLXWDNu41sjdbK63TdWrF1YqFAGeqowMUMf9i",
  "key3": "5ae8Rasy2MB5VY7UBte1pgkVH7CbmEfbUVSUzFJS8DJNrQbpA2fPZ3nASuHAg2SUKq3WWKYZvsAojxke9foTgrgX",
  "key4": "5cPEYNLtQwnQB9ZJwRaoVmN95DT7FsHwf4wTuuTVKTGtEThNv9v11N79M5LgCQVsGgNxxFH81oPPvdiaKxYMsM8W",
  "key5": "2cudi6oTXnp9h3d2X7xc9YwuQSQeZ3k6s26LQKubWtaG4brvkUoyzfBN9fC1s8DjsAe2AFSiTxQyRxhtNoQd1Kdo",
  "key6": "1FS63pSasuGSA7e3QwrMC4xwXBHNEZ4f2FCQjFuYYTjFUrZh4i4AkTH8ZWBxFXq4Vq3ynSyMkdENbtznFa2azRe",
  "key7": "3u61RRzD6YR3TatEq65co1WjAmHxBB1owchH1AWpzR4dE6GZLzSUwCwKTVBSMHhAL8SM324Byx2hsZ8WZKbZFH6m",
  "key8": "2EH9vFUy2FktbjdcoMBXdv3p4cbpDrDRSth4jXwk2yeVY1AVnn9tETLkUeK3LAKqPn6Tmqkzo5r5dscvqreCyKAa",
  "key9": "3yGzrzS85Udt4CeCgrhzj1CoePn8tqaBDF1mtQvN7h41U5knqZjFGVi3pzYumStMR8wx4NMHTonMS7Mt3pea8yMx",
  "key10": "wKzoaXRmYGUDX29b4cqeCenychpXbAg9UYMhDpmSgRmM8sTAJbdWcQfNbVv2Xb3RLAkTjDhuKFAoufqBqPKeKuP",
  "key11": "2NJYzadsWoLhLZ82Pxdwht14W7LEC19JhE1e99DEcyDEtYXUx3Qh1vYEGVGG3yNBP71NWfKNJD4aP6CNcQCHwYML",
  "key12": "2h7RM9DqU9gyRuJz1pDB2Bshrs1TwFXVH89PG8vhWJuPQ26tgdaxtjzYjDPiMmY61DfTuL9X52h7VjViedPxdSqN",
  "key13": "2A9SAwiX3BLnYeFQm66nFjWtjgH7Mz2BqMgPhTcjwCxGwnbVzSnMNTYoQC8Aw9LTh8hhG2Lj5FHmshvgcXLBR2S3",
  "key14": "3uvrfz3Y8cxyrnf7xvN9MisntwW78r2RbBwed5i5pVdi5A99kUypBoeRiBgXA24HNxF8qeKMpCZ8qLbpAXHUKUVu",
  "key15": "3U69FV863nmAs1fTS1p7moCXhMycfp5rv2fdnhcV9thmZc2ySaHiYVJEKVreTmnhE8WbfWe6sYC7sSoimBDk4wFp",
  "key16": "yJLYGkZfk663ra6SPoojaK8XhXPvSof1NGxGiA8Rgs71WKpksq6R5ffDHe6JtbiXaSEUqio6eGahSJsJCWTAPRo",
  "key17": "3yL2e3oi2x9dJgEh37o2CvsuxhYKvzYHiuL5345riBYyJF9wCrHf9eC27qckDkL7BkFDgYt2ATVbD2dicve4CpeL",
  "key18": "43mrY9UgUMN4bqr6GgeguUAPFDBNe2duvAGvZ9n3fH7m5umt3Zequw1XZ6mXVGbbhmcGmYaCZJ7BzsAHYraFGb5X",
  "key19": "58KaFexRXsnzmGcdn9tbZQqRFhfg7YqBt3NkVsSrrR1EhCdHet75wCCh2GskEXVyrndh21BUsLmr4YANnRkVkJXY",
  "key20": "4CKaSD4YJCwX38K9BBDxZj5ETy8mPjypFZEAyNCoib2iXDjLyVwh6ysD5tK5Hram8Bi6796XqnzsbjJSH7FSHxnC",
  "key21": "21xpiht3bBJUx6vjtBiGgMvLMfUA8KiVamDnBgsvPm4WRx6j5fbNzWhS1tKCj2n95sjf6yok8q3z3kNv5ViWwAQg",
  "key22": "3RoUx3qeZiJGPK7SYeoYQoWbsUXYQCETt6Q2dmhLEJjvuDQaSzwawQYbWR4ApvfEmt6zYxJftX12kVoG2cmSVWxn",
  "key23": "51YtK2RWHCrd89VU8bJSyDq5e8ktWVeqhzBEYBoKqjYazevZJBxvPGr8PCKNSTbEJb1jjni5qjVLxfzAmcrSRbn4",
  "key24": "5XZpKKUcjkfooZpUbsQnddyFn7ieLvEaeezobvLLW61i9yWqRMAzwdUqMVBocE6t2C39Ji1DZ8Z5Motop7uKnCmz",
  "key25": "5rGVSqHQJUqMnot2XFkmBJ47xTmdPPfXGvuZy9WAqL6WB2UpECtZcCuQisMmJ5UL6QiW8NrxwNPDtLw5q3pVHJgW",
  "key26": "3B9hPFeK3qXiXsDC6DXXGQfmX5cHBb5SREr8KB78X6ih193VM74sJcnoW3SLFPGoiga9ExcprKnSTn5neKaRCNYt",
  "key27": "53wzbBqnMDGPzdzpcUe1WWJrFJL8aDodmem2ph6xQg6iqnehRHP51u55CWHc9ovTCDAvR6UkydLxHyKRpZdz9NP2",
  "key28": "4Pj8MQa6ZhfHeECGs3pz8E54Pqcxre4wsj7XeyosT5YBpVnTrBDxGzSPVF2SPQYrhbtpTZkqHvxE4XFQbbKUzQqd",
  "key29": "2UrShAqSo8qD9nt5WjEPE2oYWrAeJFcHraeonqNW2HG6n5Mu4EzbbgxWBmmv4TKUMA4ebM1jUcYwvwhAc5W3vtRh"
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
