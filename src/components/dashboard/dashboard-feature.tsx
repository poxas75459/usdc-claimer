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
    "2HBQK22Fb8deT4haLbUypXSu7LuFeK48eFMKDbv2LkEWzHLCsmvwFirVNmQqD9Uv8Pux3DPz6PvtRPSUdLAtd17z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eoHDsDNWbUxs3EYLWjzqBCH24jBwE4bJTMBwXsFyngVFHtGVAshviPTVGvoZuXJT7SAdXKSoyrT1d3biRdaRQWE",
  "key1": "45hjb5ThjD6JwTLQAkGnixYT11aLf39xV44b9WBrFX2frBydsusfC9BLuDkcc3Qva6mQHijeYgTRUavx4SkwW9dY",
  "key2": "51RC9B3TeaUrEZd98PwSYQ6tU5nuSXSQj8AobhZT1JfyfTGxC6knABbDDjc1vDUaqS65efiKmNhS2mNPg4637Z2h",
  "key3": "45ALjp99BW1Nwb8E3pWJn63aJavfbJsiyuKw6t6dfEo1U1C1b4WL1YwWxKw7BGwJjeHBtDe4noa7dv78zxc62ALV",
  "key4": "as8w1U3RJVsCvhrEQtuL2YLn7mdtTaBowucPAcmYQ1ezrsBpyELsRK4y6ZARqUDwe2vsz3DNMCqFLDyJkJu7tbu",
  "key5": "4QDBNuCr9LaHq5FiAWyDVKBB9f72h6edFgPWgVUxFbXmt97d2bHwjsgUmeSQx2rcAmMVBaGT7Fa8ggxaue2zcaJH",
  "key6": "oX7pH5iqBRYStydwftmjVn2nxmWfC86j4oMPR55D5CVEKj67Mbw6HNAP68dGpnmbcEy8avZz1PyWqcKqZ7cQtzG",
  "key7": "2JG9NA4ubRiep2rhq426qpEuEUQTS2JZYibjZac94Xr84JrURnszVCktPVSB2SYe57vJkgAg1mFnvnzUQ7koRbue",
  "key8": "4ViqKPfnsyKT1i3JskmTcEeMFH4pMehvzcraCRGyiZkXGxEYTsyDbNP3K7T2GSLBC1vKDmWWoRVMS4tiDCsvoa1D",
  "key9": "TTCtxbSowbPYKb98828zsnLi4YqMQZMY8KGpDGGGZgbDao1L2T2DjWvVccKKpUqtsCVpn9T8UwZrJ4P5N7QPWnL",
  "key10": "5n3FU48Z392YhmBBZY57g9sppVZ1vrUMywduupY44tcL5BT6cCqHnR3GfWFdUkwNBGNMNsqTG95bvzDzwxhxszjN",
  "key11": "4mqZbkbcrKRWRv5idiCLiaBQUhpfPKRjxwskSXs37EQojGXMi8W4DSkqVMVn79kSSQh2ZLFL8A8Y9NVDBgibWoHt",
  "key12": "5H16tY7c4xaZLL8VTwEMEQ4kjApihJG8wRo6GhUA67qFsMApR2vAsubMtFXCmJstJCShYKHmvoa7r82m23kPCuQh",
  "key13": "3x2xveMJqURdVKKEqCwE3QsHcMna82BT9EJbT6g9VSZ7vfheqXxmUcpG6Yig6pSmMNbtHBZQrvGrApS9ALwR57ms",
  "key14": "5ong257nxt5a7wAhkkaqTpscDcHhWGYBSbaUVow2HiTJAAzL77rLw8zS4WzMcrN1PyCrYbjH7H1jdcvqgg8Y5EGX",
  "key15": "3wcCJ19HPnVzZENxmNimh1CPKsnnDY37QFXs2x2dQ5EBAEmaafsGrdfCqJwRKotZmK816GkrhB7rkczAWMHwfcUU",
  "key16": "4eLNTyfQsiAW4jRpjEboNK5iR3M23b9ee3AwwjFvgosmd3kWsQ8wChUhheiicJ3yhjomuNaddpMLJAoMsQYRXvuk",
  "key17": "3SuC53BAegRhSpQujRPn7DZubZCnjPx26eCotSwsJjCckWvskGf7PSe41ubNbpQxwNB5BDtB36FCNCySdaYE4ueQ",
  "key18": "2aVPtm4sfiFF5uokSJ4u8TNzB4rqZs9osbwPnpZHWLsyvjE4Xh6YqMY2nDUZ3rtD4XWjToTyEeLGDfhZwQPHkdBJ",
  "key19": "4aebQqdRh4whSkBPP4Jx6nQNp4z9euVrmYXyh8ErCbDs7dpGWZ3WT9Y6iXCg7MLKLRV3Pc47F7v5Fcc462HeGNnh",
  "key20": "3idwmWd1DAkJgLG7TKQy35Ba1zE9zjFTFJxihUo1cCRTNUXpy34XVsF6EUdhsvkXo6jZ24gjYWVFuceBnScA8xKY",
  "key21": "2MRX2ZoarGbSTGjrwFvMK1u5z7dTh8fsGFs1Qa4e6AxvAxVQFZU53xVzcmigZohrUZxfLnkxT9FoWzs2ykGsPiNL",
  "key22": "4t7TA2P9XgCrHfZu3bWBivFhjGQJj9ZwAgf14zAgyEPR9fCPi8kvQuJJzxeyjhc5C7Z1VwTPwKdXB3BVQ5ktYTga",
  "key23": "3udv2fwEHL5KAYxHgugEcJ8NyssTLcF9uDHRNGfosk8mV1yUoxqjcPcn8HZF8Kh6nB1W2FghdHJ9CNsng8MGmhiu",
  "key24": "55DJVbg6i4DkWT3uwVzSjLWwJwpcy7P8vhhKNat6AmM1nEcxj7YbjhWaqMnGMUvTyUa59EHSZ7u93VaFwSsD4MtM",
  "key25": "3gZ3dTA8HhMiVvaRYWvkBAyTsLVmFYDFQh17RsLZSC7dvavABkSqNBDJFV3aWFPeJbYbzhSGnyFzr5jzvwhDWtw9",
  "key26": "5jWt2xtEpRLY3ZGann2Z5Kv22mBWFh4hpGrdLN6vUyDFwtiuaTcohaqZEgoav2ZpS5GwvSrwj5Xo337Jf7XugkFj",
  "key27": "iBkio6MAf9oTbxTgsPCexaz4hhUTS8d8MKePzqMdXd5wANtq6PoMp9mKDu9ageqQ8KJ7KgZcfe9MuoBCwdQoVV2",
  "key28": "5cWnK4qRLG6F84nQwR2TgHAUwhVQ187DU5Rnx8RSRW3MHUJR3ZhDmczAWxR7Y99F991Mze34ZityNzzaU8oqEh8h",
  "key29": "3Ntdpfm3m1g91fg7pQmeWGjmWEddkLVhW2UFbEHb5tVwrHZRgyA6PhgL7wEAmdFDXoKML6dtVVjqKH1BA7TFqncn",
  "key30": "4mZN7t3cp23MrVcGDX2m7oAqXpnBAwTcrmX5grQSvEJcmDggCLPL7Lg3gN6nrtgZtn3vLxiRUqesRSQTR7Y852K2",
  "key31": "2UcFJvt4J43TM3M7aCa3QkxEqjKtHKupXJPKLFcDUoojG9pzHJSRGmm8XmC1ozawT3dLyxPTERMctRGRhXBEffJd",
  "key32": "56sfhhsgWzPLtr9T7PntcHk588dvekxdQTUQQ1CfUGHNb1UtUK9Czu3f89UzTtxQWHpiPytUff1S4NToUPpkW6Pi",
  "key33": "SVbvEwhCwHHQMwaNqZth49CiPpGnycSpwVYSoerGRH6RTRJgx26pxU89quFyqGoVVf4xgziNHQMdi4FFDefEXgK",
  "key34": "5iXaxrjtQVC9ZBHYSM37jrAxmbb5jmCoavmjRnDGeSwbnGKKnoBKvQVu3kRr4DKRt8mPf3k6Sz6JXj5baEeWXKnT",
  "key35": "4WwoTaWWjDd3Y3Jwt5HVdRRXV7Wf68bzWapixwsb5WMXKkYCqdHGivsMKT9PXaWZBJ4borEUoz2HpyBh4YbLcy9y",
  "key36": "52rSf9eJUrghi1rcKvtmPF3u1oS5BNkhumGg8mWdd5vKK9XDUjTCmSVibQqnAXWqsTSRmm6BrvTFodGoD7BVinLS",
  "key37": "y91WsBtZf1FyobzQjjrg6SjuiJEPuBYKdLakB62Fd76eGGP7f7k87dkXCsiiSXaxciLPyFBBVu3DXaytEu1NW5y",
  "key38": "2Nx9TzPbvse7JQdD7PxtmMmy54DyLf94LYczjCEcif637CcBKq6CDT6gyuZsvi1Tvr3vzCrKGcxB44bpRMqBuakJ",
  "key39": "2PSaTz5uu8SuTWMYAWTmA4LcJi2sWsPBqFfsvKFshqZ4QNXdunRs6tGcX9PXPcJ7SZg9zYMmABD1m5kBtF6dAy8q",
  "key40": "5cjCq7okTefEu5Gnn6VyEpGAEjN2y6jRiS3TfbNqhjPbnF6cjnA2unhfp6iceu7DiAM6qWrnztokV4fFUpKsrLWD",
  "key41": "44jbeqQeYTWhxHYpWdPjc6Q5EGKFRMRP5VYpJiaK3wr4o3VUc1sC6MKE3Rvv8JrDNMe1BkJSa1WuK24qM9U2iJyW",
  "key42": "GZuCZ4f4dVNmAVqWijxN1oJ5YCUYHQRLA5skwsfa8xBiQ4vxMnfWBRgqXkF8ZBiFBzhKVvQtUTWuNqAKPa5xbjc",
  "key43": "U8PdBAEDh3LGQ6azFJifkkkhBdHoff2RSfHzxp4zL1yP1dzPctKYYJGLNZ2oaY7aeLPfiDBBUyqdvGvYTkfWuSE",
  "key44": "5XBvPGztxpEhCHkETNxeTkkw1nKKJtZrBc4bafpHsRjpVUZjbRc5fHZcpStxDrz6gz5pePUh2ukr5DybVEjku8w1",
  "key45": "u7M9NiggFo7GpQ7CaWy4V1km1WFUQnmqHfvXci9XUhAe9et8zwaKKYsucqyFZBxFpm6ZjZY17LDV2siHv5kH37C",
  "key46": "3nNQEit4T5gdBkvjCTiXrsUQQ8GeuLoumrmkXD15ntQA5t4wg1CbmuNtNZcn1oBveXJL5KhxqJVwi9KEy7SCQ8qs"
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
