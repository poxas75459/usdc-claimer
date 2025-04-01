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
    "5odBxMyHF2cEuXeWvHntGNpYdw1yYTkQ6TMxcSNE1qBi7dHQGX7AsoW3hpBLWnq3DXx811iw6uEA5pzz7FHiY75m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4khYovCnZQEZCkie2u9Cb8kYtKtzNaMPeaKWbJo4DWTEBhhr2DyFXEovRUJDRzDZdZAn6tCb5Ha7MKkxbvSxww2v",
  "key1": "5KpU2K4X2KZUNuTzWtzsApAC9jLdzdxNWFr8WKH41YnVDRtD2xEYDuMTnU3H5BV3poNpLRRPLay92mn2m4uZqD7c",
  "key2": "9bxgZFjkfGttzyVuq6sdPrQrqftjXVgszpsBkfN9eiYhUcx89jCTZbBoW7tPGmq6CGsnEBEitb57Ref2KLEDRfg",
  "key3": "51fvBLV4dE9kFP8dEa3GXBpeVMNcA2w5gfAhRN4NdYgzvwrZWTKyUMizSi2RxY2R1XDWEDvfyEubBFv7BmrVzQ4V",
  "key4": "593dJD7vynd5vN8t2y4rk6DYK2wZDTL3N66Wp38nuuYGgzU3pKU49aksuXxAaZ7wMUfmSemJNioG1Fjvug6hRnQu",
  "key5": "3yBjieNoRUdGqZmdgRcYHNeoASFWwqEXBjvcEbAyLkVKSyngMdXW8AkUpFWbzq1YcXZiE4nDgbJQpCppYJ5rxfH6",
  "key6": "2RagaDrTmnGf3aXPF9xmEJT12hL8cHp3fmUdgnLvnCqCLaazJps8bvoZVu6wEiFGL5hAjFE6nQVDspm5frvq86UF",
  "key7": "3t6e613m5saoiEwcGvFfURbBdRyQKYLCxdUo1sgQjtaJyjpG6xS34SFh61eTMqyhRRwVYMMwzoWYhJbpJgtYz3ZQ",
  "key8": "3YoA5yX9tnCDfpy8Ann7VVuptHPRPREWT7pkMFSv3tuYCBEh4YFpiyxBP6bfLxXErvHyTANh6BGGbrY2pRh3ggRP",
  "key9": "2eGgsKUf8z5eMJsaAvf1aQKqtVNet8aLzcQY7NNqh3RLDGDxChjQsPVs1jdQdC327NR2Se6Y78KraJzHfujWyzyZ",
  "key10": "R7sYk9iSAgXbYBdiALV15sFgcL95GEAtL8zDc6QHYSyBAre6ybhz4S4JfY8pBGizcurtowNmghSmUcjyyrxKNWK",
  "key11": "2UAAbwDDzdqEu7Deruq5xMrrGm4i3nU6Wd3sSYKE9ukfqNhzEwVeiBWXcBKzemCYsCzc2SBFxN7YSBo1c5aUVNd4",
  "key12": "4ndxBGEkvkKrCQmNLrnaRktkwZ5A3v3KFHqodXcy31aWynypvNs57UWajBvek4hvd9YtGGddna3RDRbRR1wunmn4",
  "key13": "PUbsA5QvfR7xGJgVynvJWPzwJ4XRu8GFnuU8iHgu3hD9C53YVE6Z22ay3V99v6jpQXoSeAtGjLbuToyzFHmJVMU",
  "key14": "2fYEBSNkG4mZ713aFHhLNsPvpHK7Jb4f1RNEvBMbgSZQ9cUveb2MCJVEWswFoZ37fvLhmhy6CsmEM68aoEscnF6b",
  "key15": "2ecz3zeKqYCTVmvvvcvKX6H2Qt2EMQ76P65ty8EpSgFGtMQApfsenyPjvaPVPHUHcpvrcS2JZr4YZhsD91hAvsoB",
  "key16": "3QsjC9Zb4yCQYeZSYmpG9g979SF2ynQU2UpvfpYzGzEJsnHNocTjnPaVVgt4BhroqLnLiqivK4bm8Z4dfFpDJBpk",
  "key17": "2VxQFkbrwLqwJnYmtNgQ2NHYqqXJpYZQLXZyAmfWQAp4sYfcSwi6wLPjwDkVVo6r5SCMZuQqz5hjfd1EDYn8Vq6C",
  "key18": "2pBP9YYAomdXsrZ9c3Lpjb29qefTqsTXkqxGAdLhXcx3eNiNKwxadpQavzj4H5WZWAXcyiHuPhKZUFdabgD66YD6",
  "key19": "oPmugeixwt9SKtUntAH17Vxutk2WkXSzdBgAgxf4Pz4q2bFiE2Drp5kdihze2EkwekEUE62Hm4KysNshfVSFg4F",
  "key20": "5V9ykSzqD1Gyz2XiWBUsWA4mo48gZURGYCvp9M4GaEAKmbMPkBYbcdcenDJq5hftD896sPisWdMzg5qsUVBvGRvZ",
  "key21": "42WJGB8z8gMUWRBjMZH2weAZXLNx3MCFdWZ7d4yt1awXT1CoqXHTdmo46JXRi8i5KSoKyLLbQA4aPX4kd7VQ1pc6",
  "key22": "37km92Gj63Y21drgixFEKPgVPt2mjNT7FB39mC553gp4U1ktA5PSvAaiF84xZTMPHUBM5uSXecDGvt9BctYPMApd",
  "key23": "PyAfMxtHBtgtPxmMiYCUe8Y9UsYwW2BE5UwyoXQ1ojg3XYQsELSvsrx7721RVTTQG75Udkux1APAgTWpVyp6J5L",
  "key24": "4t4f8KLKoauEkD9qs1WZQEcJgcS25HoWkCAfAnPW7hDgy6rhy27ApitynfyQitMnFCBnGAvUpqY7i74pB7iPx4Xe",
  "key25": "C81WKpaVoVmbaSqvExtdDQiuxcERsze8UrcpwnwA9eLTCNT6pYqmNjj1hBzXBrpbcsNtgaHeeAxUCXviMwGa5WQ",
  "key26": "2EJ6Ky6xzHKMisqdPTd25inXu4jSLRji7tyDqusEB82eSckE63gxkGEXEu1WY4qNJUYuvoJrZiA5yaRmGy6QCYvY",
  "key27": "3FyGUZkVqhqdDTnTYGxmxii74pUKNMbQ7zKEL2ikfBRRoq1T56ZnPBXCUVe8oJwCviBi23okkvV17az9vZ1GHiEC",
  "key28": "2pDQKH5g74UuQWWGJASRKMusArp7yQGKLivLyRAPePzJvvFVejQXrRZ89Jaftk4FTJrtUc7kK5cvEZbi6R5HoBMp",
  "key29": "4z8m1uQAKaGw92m2FW5XGEKBVycCZEZw3Zbs1pFrxpWbhV7PebummDHKKsWsaV4S2zWfUDncqk2eB313y15npjfJ",
  "key30": "5BdTiRfSK2yFViUXBz9KbJro4CkkMGM5VyQEe5ibS3JtSFGgVJ3LxhPjeLc9ZvsPQ89qnTAMVuX2YxX429tBf3vi",
  "key31": "4vFkumFAKhHVVTs9uB3rksw9cdSRbJ874iWm23Adm4ZrUJLSAk6HUEbbheQVhi4RuYuX1A2jFDn8KYEWxNmQxwSp",
  "key32": "29KkWyhQvB6jU7XDwog4d5FrLtkzqp3GCwKjKFbFyb5egtgBUnwcjXiGBVUcWT3sVbK8P9g5Esfkno45o9M61gqR",
  "key33": "3bpUmdMvEETU7cu83yAo9uGNHfQ89NW1kKviMnWMrqeDibcwUzpdUNsgKYsdnf8apjbz1CYUkBxNktYKv4aaM4XD",
  "key34": "3mfkRHX2mXBb7kUMJ5Rv4RUJGM4msj8CXgb4VWpxy9eGpR1zYjvjsLajLZ5zeeDSAixCLbx71ThQnYK1gN7UNrWc",
  "key35": "Sr2ouctasEYsXj7FuFpvB6NW3VfFnUfvg86rkwk9e5dYB1kCG15QM2TZk3XTDfgypAuLfkugudBnuYguAfTNvn1",
  "key36": "4nZs7LzVcB2X9sUHr2T3f17WpzyWwinEibEzrSniewJwDWHReCZ79YntSc7HDeZXwi7CMSBtiarfshZnjpebqRrc",
  "key37": "489JM5dKHztMZzxpEDGPybg1L8miB69QkeYWAr3HBAxgVxP6kdmtbfAdA3Jcq2mab23pJsYqoEkeam8mY4j7pB9D",
  "key38": "2nSZ595zSF8miFwcQVbBDEq1LdRVN8zVT4EFNQxNrzVi6CW8qJ1VQNW1SfePSiKmqFy5yeQTqDTpx1xQJgyvuusd",
  "key39": "R38vUjsnekPL9XFUfKFzrHCTJvUk5iBnDFnNC83esxNhMMDsodu1nZMNSWYuYkDEE7LrcLmbiyYppNmJGF31Usv"
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
