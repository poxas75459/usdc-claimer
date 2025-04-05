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
    "4ctDtBzVms7BsRtCskjdAQQmTvpdBPWmnVUTxz5JKFFqvSksF9Fg58SvD13YAqzNHYAsCqvDJUXP92FF1tksJvZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34cYMd7z7yh4z6avNrQZKQvWwgfoqHEoJ29VQVkJWyB8FLdFX47cMR6S7oxhAuv3dyQneUPeU6QdyYZWkJLAZjkv",
  "key1": "2wVBKaAusKJ68dDFUizcmpDx2493ZXomJ6LVvBX5t3P5Mr9NaruB4ALhY68stQbNC3n7Wnp68KKZAxzQYqJZZvz6",
  "key2": "3i2q2JPurky46XDxpr2DzAmpM7Vacd4vWGiTLAbTcTdRgJ82uxZTmPJoBRtJUJBQXbxRQ4zLWhfAQsiAWYQc2oiP",
  "key3": "n6wnsnTnvEPJrWkCxf7hccXSYvr1JUqrQmNrVqKLdujaj6HDczQ7CSQFRDbPpfnvgC4T8XazD81P4cTcCa4vfbP",
  "key4": "38D9gyQBKVPKM2Gi4sndGQoKEBJ5xRN2RYR8BsMN3QQ14h9EdPBX8iTNy3NcVYByMeFg6QX58CF74L5Gm2yagvp1",
  "key5": "3UyW5U8bJtg5XjbNDo8EWsdYPVcgAGujCSoknNuyqQiZBCeEGtz9dfKcqa6Q8CfWjNLH6mfmqkgq9T1wR9bbVSp9",
  "key6": "2gAaVRPeN7H4bxMae69WdNozeYgjvVp6ipKR1H9dS1mPd9M5R7Jc7845BJKjd5myoBmcNPoL6SDUQZGmgc8Rs69Z",
  "key7": "5a7NJNRzoEm4oAKvVDCrmsXKw73wYonKDegbjH5j1rsrBzFUtv3wynHSDNoeAX7r2ZjptiywPD7d9B1Wo8GSB5Et",
  "key8": "ww2UydPWzbdNTqV3gjTCC7neCVcj92LhALkrnv6LSXUvFovMAhbwpYCXW1TDfa7jCHdxfHniCWbhk5WzVmBKEJX",
  "key9": "3J9zgCkGZsiXmvSDnshaQSNgTjD3u9yAKvqLEQRFXmKtF1TNtrG3PR4btMe6bZVVQihwKSDWntQpjCQLmndspjqs",
  "key10": "zzHJHqbgsurE3yJDMvGap69Vio2dVmHL2VNRfUFr1eaL8Gjom5XUwsHkhMwQL7x9uwDFk8JyL5otipkwHAD23w2",
  "key11": "5NrEjqXJKzW67EvWkmgKu2rF4Fm3bnSBzNzutEmtfxyNM3nXUEGuGmDF1Xi2sAMi3zLrndzXdQuLPukatM5KK3qm",
  "key12": "4LoeeXWMPsvxrdeSfK9D4q8zzSLky66oZsNy8DVPt1dMkg1ai2W3TEZx9MxQxicBTaMbQyCou7urtRBLewukvhMh",
  "key13": "38KfiPJQ9dGHDX695Ti2EhCZpj8pwoxrar5MaSumfXQQKGfc7BP2HheiMksgR7jyja8ewo6KhgFs6e4Zof6XRH2C",
  "key14": "32ub4P6WQxyc7L9i5tavykcsLSNibvU9XS8EgyYEQCmJwXwRDDMH63ET3MW9aV9VXhLRBbdAS4UB8uXkD1drcXUz",
  "key15": "CUrrpqwAkx8VLxnepeNSMyUb9xkxAUVH7tGHP74SCWRV9kn4zwtGNYepKSd2bPF9XGyUn9kr2cEURKPyjAFnDLS",
  "key16": "3d1tqRkQXqC7Xn3WQqRyFKfHBQd3jCrfzjTXEDz645Fmjh4tDoa1Q1mRfsELZ5w8ysqpavLHUeyAVakGHn3F7ysN",
  "key17": "4nvrGwyCxpJ7TFWRwCc7RChTY8TWRoigDWm4bX7XVvrWp39nWGcsWiQmKxkVCBsowug229CJEK8RNWFCZ4PSM8nj",
  "key18": "L6evjeYBjtESX7zemPjnaDWEEVJzsspg9cefYJsLJkfjGwnc6E89fg4Dzkyvbdx29dnneMiHjM1DvwWragxYek9",
  "key19": "2H4BcbpPy5Wij8HCtjGSGM2oHX1DTbsUbZtP3RNHVKt8YWyGmq7ePThbLEPKCRs4muibwCHyyWUWawn4bSqRLBwG",
  "key20": "5KdvMkT4qu8bfiL67vm8Tawbga1pcKzjcxtDTZLCGLe7HwJiBAt4LjCFTFThvB8PNmhcrcyGzRTTpkTpvw3nDA8c",
  "key21": "5hTE5M6eJpTwzocxABwGcKsZsvikEZsgb88GKCXts4HCex2dXwEMggQqeQtrkVH8SfxGzMJrRs4wMYwVofrnT8cR",
  "key22": "2m6MqF9udvcMzXNi5ivxkEupkD7oBWmxHtYLbyni6Wx7NLgGajTEvsgjUbyAYVKWBqNyYNVx18y6q9fnna5UvELh",
  "key23": "3uxpeW8wNM6PknBRzknwTaKRDogchU5mKYr3dbnLqSEZWF18nNdzzyKaRE6mtucZBGLewwB57mbLtVWrUmKvg95",
  "key24": "3bNm3zA2qL7es4cA4Gqh78VYeFkV3HMKVuLHcNLyqySojH6es4heRDimjyRgvFaSnYBUAvq2UoGHBkNBQVZFfi26",
  "key25": "4GJQynQXsN83pCACXHXcf5s5ptT7hWYUS4qYWfn6GodhJCsofvQXmtnNe8JVSbNJrub6hzmkhGmUQfp8zvTyx9yN",
  "key26": "46KXBe8KFA2LRvfPc9DFt9ShLTN88LbBHTDz7wTPK1Ywbg9Q861Psx3HMrX63teyH4MN6Wns1KoJ6gAseFKSbkix",
  "key27": "661Zm13UxMGNYvUj51JJmvYVuAniVB8KPXBrLwxRxn86VwDEUh8iNemFCFfE8BqTJESFPNxFPXYByeiDXSiBENss",
  "key28": "VALP5cC3rZPKZWh8GLGc1ffT1AkQeEdEcHh9x4GS9bmJkDrJaz9iZQEChX6Nbc5FHsnPNVgsVNndhoXJC7CgTZJ",
  "key29": "5JPihPGSPkmddgTifk8LTXsqde23Cz3EuHBP9cEVcVexgeAduvKhYT4i8PvcZJuaYLJykUoeJuYtHzRS3nEDvbLw",
  "key30": "2p8xGHaFymFXp7SnmP8MYeG5eJZdWezLsvs3LkszBb3bLPo5nMxUvEJCDDc3NFULurbAQzxXg3gaZiy2X2aCsMuy",
  "key31": "DHe2661MVaMPrPi6otreyKArgT7chXng95QBbAkG3jxJvogSAkfUsqLH8dkvuKcruVrsgRuP7nmJyyewaUknpAX",
  "key32": "66xkcp4j7x6EX5ZzY1MZnWgWVZh7H9rrHZYghuhJBb3Ke2kPzoACU2vVwM17Pkb6obvP9Xuun8wsFAtN3UwpWsTs",
  "key33": "38ztLTk8BqotUeoMr3er6wH8kgEYwQHcACADXFwfx8cJndC8YcDzAuqmxzAotxpNyzst87ozpJFzne9Dz98wCom1",
  "key34": "5cP7pXsDYa7YCJ51WQcu5bLEisnGs5LocqGNinFrfY1pb3ivQjhWqwM2hZSYFShit7uKg9e5B3epHYGywLGUGLeW",
  "key35": "3R5Ji6K5nWpMRAYpnAXuP2ZmUNFg1Sev8TMnVpfSPTn5y4w46fkB76PnjCjaWUu3xap3WZVPf7eqgAshzdKKhPnq",
  "key36": "5boqgLCBBH7c2PgNvCYAPD2MqJpKdYVHAT1okXyRPEVHqcVCr6BUciyyXHdpt9HJUYpD6dQDDkwP5qPXK9zPhmmf",
  "key37": "63eD4aDaB98sXffZ1HzsqajojzweMKdbpHQShbwkVrw3Bv55Q7vmd4R3YQYEHG6647mAcWeCVfneMPjb141Rpjko",
  "key38": "4QwStkBTKBEyjmFsDiw2x5XBweAFUGSykhVNT5D7e55cVPW8H9qXjuAsHLM9Ym7CZSGwJrQZWavm2kNGLyjZ75XM",
  "key39": "5dBJCafYt8DDRcHkzSKkQ4K6Gv9RxUfqX6DhvKBCYX37V9xRkvJU8hPLrzX4FWMkuP6sYY2GGv9jGvhjR8yDitqQ",
  "key40": "3vSW1QyNV5FXjha3DHXxTiKu8oCg8PWuYff8uaCVYSa3HbVUDAnru7QLAapXaYUSPh4YXT526XzfpJ1QV8xVKhwR"
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
