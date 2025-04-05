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
    "5Uda4b6B9R78TsA4mWn8WMbNoc3YKwyMCcUwPBngdoUKh2b24Vr9co8LAPbgqovoLFeqP7XXvfmgXGXGuW7hX3yQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jFCco8RE5K45tH4h28ikfQoaJxvAF2fFYrTtkXWFjMmt1sP7QT1ZgappkpNPnhib2EFCcqxUPtyijySfisf7Xuu",
  "key1": "5vPwZ9BGn5tDHSrSwERzzxPpLfW9p1NHZdSPn3M9yuqmQ6tDzQpwCQ4Em6f5r72xG5Mu1fM9rywW9U8x1R6RfCtD",
  "key2": "5zPGDPBcbpNFrSvDzuKTkFskEjrUL1ZqKvmQcL41h1ujLfDyokzwvKXKwGfMnG7VN1xgT5dJ8cfi4bvr4Zg3tej5",
  "key3": "41CZSUdZwFsqBJCuB3R6EW1Ka7VVRghu4DsRUH1sVACir53jrhpUenhbHW15avVKQjuc9WSVNWjFdTxCqLAtPNgM",
  "key4": "5MsSovv7B7Wrykr9CHYL2WmnaQF5jjrhK3jLs2vrGmEQJNvWmw7zGasHdgSxvUm8w7XvxrEPCt4q9MMNP9atR6vF",
  "key5": "2SDpfaXWDQqwt3joLwuKyTDkGCttGhC7qkwhYR7Fre5f1Cp8Knx14DHdJAhDPU2vTS8VqzRfiqKfNuQQCpWHvxpL",
  "key6": "3UUk6Juzz18j36mabe9EdtUMLRepJTd2SsqFE2jk5qGwbaRc3fg93TiWhJtNsoqZ8SMZAhKHqhHVDqJRpg31vLpg",
  "key7": "4UPqrgGYh38kpeWBXxFF5iagjkCqrZcN84eMFsWca4KEZ6a9egHbjXVoRhdkKSJJ42WB2iZD3mYC7NsPTipLPFCE",
  "key8": "bQPuavua2vpTqSZ5RAqNjyZ9os8bwn44ECaQ4hqJ8ZGGX6AFUrqgiaoyN9JaJnoGoe5PV1T1RrNfa6e7yQCcH4w",
  "key9": "5D5fEXBN4Nqq7DF33fYyQdni2xDweBeTosPmkYQfo8cGQ7FffVyYkac7iy7kyob4gp9522i7Frdoqpq1PUjoLTjk",
  "key10": "7zN7ByK9uiXrGk3oC3mjYgEmgTfBQh5jWPQ8Sdj4yZe81PybgKpYzN4qBhoS9qeE5CZmb4YWz9ribXDtFmb6HEm",
  "key11": "5trJsCpswLmsX6MoAWgPK6xHUrbnTeaEDXZ2PJ7gM7cbiv8FSVd2ab1rD66kNjDafF7SZj5kVNKeojSEyxLvmgnS",
  "key12": "2eeWdr4yiUxaDtjP64DNTCZEAmHmD5v4s6qaPAo75qsV8MDFx5vY2ASbsZCDQEzH2kTomt6Aznovm6bUpRciE6Ce",
  "key13": "2y27AXWnJNT8KTwFZZTBcxb2h6AjS7JSegkamScMKTw1jp7srmGiDBFji1pexgf6RNXshYutXsFcfcyBzZBzd94e",
  "key14": "2uKih4KkPDsjRZf4qM6TpEDrq5wLTF8LbxfMVRN823VXu5j2QDHcLhuv8uGwamw2ufDFXQjVjUM8Caq8CadZp9nf",
  "key15": "2mV91vJzjyzytkDGi1NuvKa951Cary3QLdm2qpdotZk7cRUJDvtWsQGvm7hB6wkkFjBBapKNYFQjsLCTaWCyyijx",
  "key16": "2APnrkVZv8iQwNHhCyGXPRhSv3XitBZjH8zQhS6inKAySVJFBb8mrJfXJQxyFGZonntTb2kLvrxJ8t6d7wfAEtNk",
  "key17": "4kub1nykJS6jAnB8DiRAbrnURiuC5PxHN3h4h49eNwJvPVU5NHpG4wgoVLA59F3NNpL3RJ4imYypHahUtws7U6oX",
  "key18": "4fWhL1WPKz8Txu2mEowsfM1WMyvy7nyn6oHFdEscwgbF6xTn5bDPBzPiN2AmZQKsM4HWsTxZxnZTYJwaBpboW8Pk",
  "key19": "5uUdGCnAMudT9PMsFeAaVN2a8DpMz7seJRLeZ3mDXgtgCojtQeV3r323zFhqvwqy3V8SfmwJWyiwJTVEpBjHEEen",
  "key20": "aiU617VvxFXxASMDWvLi5H5751jKdGt7J1J5nBcdhMkVesyesERMbEKUUHbXZPLdYqJyZbsuqi4QVWXeqMhRt4S",
  "key21": "5JHSi5aBuZYNne4T85NG1P3SysGgdwbDq9u2vV96ThUoA2JYVdo1TLt5u4AssZMV8x2FesKThzEYRwfujaZJ2VJL",
  "key22": "2bTZGu35cAB6d9tW5D3CKn1iHGeXJWSMiDaGA3JAUrFdvaDLWK83p3kBhZ7pxrFhBzAHoGHzpwHqgbiDN3dH4H4g",
  "key23": "4A2u3xo6BE3PujAnz1dfyDbk6WQN8RNaEizknTrwmDjcjtuRC4PFfNR32n5635dna8WohcSS2ExdwkXZkiybzNpy",
  "key24": "4dxsuvmaW2RLdvv13kDJbxuSkqH1M5rkUuohENuGdpS1JoA2qYNbfSR1ii1YS3i7M7b4Jrgkq9LQi3q92aBy4gQA",
  "key25": "2sGDZ86w6rca96vPeg2CUx9KxJrXuCWmNTkW4in1uoYZNRkVZWXveJEJzJU3YM92iACNogmYmTrvWzQMNkpAUc94",
  "key26": "58yoj9wzLj9TSnrMybziqqh54cTtCyecSYMBFhWV7Cxm1JwAtSY14LyCKCoTmYLApQBton6ERv1TnoYoQ5jmys4x",
  "key27": "5EpCUwSpSERothLdFxV4mMuswwRYGTeaBqh9Nhf3Q2zXib6quTF7bRZ37xJW6VbuikvXFTTZShqmY6gucPut1rhc",
  "key28": "3ZRXZgeyUFjYrtH4pFXWF1USMF5jUsc331AT6eCzS18hxfdjA4xtpZDHJm6cTL793sMnPEDqXkeRrN8YaGgwLpWh",
  "key29": "3RyMtgjFSBzpz4vhaLa6ny41tEyScznZ8BAUW62TAstWd8YDRCvXPidkL99354xfnBixjwPV4N8GydHsuJybp3Rs",
  "key30": "5mtQzcwkFyBkY49bC7Dzh7uWueB2JdZc21FZdhbXehR26wS1oPtDq1xAcxCnTNjPygiL33nz669mqxpesiM8VNac",
  "key31": "2n3hAqxDiYi6hJPUBh9sJyQq8LULzprEKdkKG2bmUpMnTqFf9i1pNqPk32XCT47WV45Gqm1N47cEXva4iF4qCqFQ",
  "key32": "3LCpngkmRJT6HaHwprCk8PL4oAEA1dxWrjTdNxDRPYbxBevAW8QyDFDZjuD7mtY8tYS6NpkD7oyABGNYAnKnbBr2",
  "key33": "4vb6g9veuSDDvFEZySwVnU7tdYBghPvpvAkvnELSv5kQGZA2XfYc4B1UmXjWMkAvLauQ7JPdzFkvnMrNjDELNfnG",
  "key34": "3ykopGKJdkRrHyr4yrJYwVV3PoP2m8XfK7ehB6Vs94nd6cHhe78K7RRHfkYCvNxV1MPQQmBXZ7ga2oFSxPHa4cR3",
  "key35": "2Yq5Bg5VgWEw6WGf8y3AWb8c73wGRXuJnDmFsLgH79GfqzLTEjdodGSf1xs6oFNHQ5Q3Bs2WuvatWB3H7CTSoiFc",
  "key36": "3g5PQyJDcrHz5jYT1xJdtJKbdynpqqGNrspRcVB2UJr8pv37zwVU95pQ6Cc4Sum1tpkzKbGXJXMR5KStmeudbZqc",
  "key37": "3ztwWp6xYNRXL3WQpuVi9rWHXVuZu2nLatH1RjFEBDMm3iCdBavF6vMnYm4KsRTg1HcXA7q9P4f6WZh4ntoJ7V7M",
  "key38": "4GQ68FdErvZduRxccmQwF1qcK4NkcZMNRJq3QejUjyChWiSGa6FKJFm2LS3JR8inHwpBit5kamFZF3SzjZzkk8sG",
  "key39": "3Yz8oyzjGzNEtJt6BrCR4LUV3zb71w36SLA6WYkeZ2EWtGyrtvSKN8kE4tYs7RmewFpFSooNfq2iBtu4RcZSYTY4",
  "key40": "2CxGH6UDk8caSz5MnEGRMMNeqQNR6QQbtzHFjRwm87xN9AnJ1gAFxhxSrCRWL2zR3GDzEb7zcDXqBp1MGnDTtKSo",
  "key41": "WhdV2aemorLEMdnEJgbeH43pQxe98ap1EgMiaA5GuddwkD9m9LTkQxXXaTPGgY7vYv1SrszJtibELajrySSPVvd",
  "key42": "2gsTaB5KM8BnaGvzYN42aV9xy9QsVFkGAfdLWhA59Ve2eW7jujH7d1uj2tcHSFquRbekvbX9XbdgaZE1F2xwMhho",
  "key43": "2xB11fgE3eiW4oehucerChfcXd7qYFAnNDKuBVNiWYkhxWuGL7STkwwRhyJzE8fx8rk3bqTbqL98dCKqTZVTcYKq",
  "key44": "5ZtEsEjfhY8uNWGvu61Bc2jMnKYDQuZhCZ1owKCLKu3nSzCrcZC7sD4ZBm4X4e5PGjTdn9TkVVccVioykk4L2253",
  "key45": "r5jj7Quv8YVrFKayhNrApw8fRTcttH7Cz2cPE52JMs2A6eaF6ZJtvwFpi3JnMYD7jnyTFe9b6AVNZyYCEjhQocL",
  "key46": "3XZENJ1wqKvMgciGTDrZLvC5u2jwgkA7VCzQaFLxWzya3hNKwuau1qsqcnTSH9VbAUpmRrdbExGiNQ1xgAFW5mYH",
  "key47": "2Mu9hYB7SF7egWNx9CwHQdvUhr7KfHkjXKA21AzviXUtXErS4ux2uk9rSquX4Z9NVog5wdjYATE21LH9tyTAJmJD",
  "key48": "vZpdRdCePQ3vzbywcUH2kfsYA3GsuMG75zb1DvVLcBsjcbWMwAsUDY6obNuqkn4QRFjMb8jY6iEN85ySkTmUdWf",
  "key49": "4eYrEfef6DNCfybQsHBLootPGXHX5n3pSWjN5Ru1LH1sB3dbLEAMDZKCeWkPigCXYoha6YtzCp6WBTKwP29roV2H"
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
