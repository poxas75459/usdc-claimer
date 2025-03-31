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
    "wFLRbmKJEUqGitm6XN7mH3HFLDvVxdvDZCwbgYUy9bcku5QVRS9VffSzkZLY8DBibvhcLoTK8XGCjRWrxVAwjJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "328JbF4A2MDzqLnWf564JggDKqQGYp9meyC6sR9K6mhDcP1r4n8JXvzEf1AqFhkBF7JHbw1ycE8ifT38CCyYfHRn",
  "key1": "3FbgpwJXM2vNSbNy67kbeju7xHS7Pzyr5nb6xGj1uByAhoG7GqoXVifsTZtJfaXgcWyUKF4SU6s1c8ab2CAprwCD",
  "key2": "9Znw6ofMyYntgFKhcFwSCMHmPLtjeNvCAiec6ZpcLSYJTedNGQqqLW1EEQr5yATGdbvnU685LbjkvsNr3RXVHsX",
  "key3": "3pLrmoLT6mcvgkgGHgQtqVmBS9CTVL5JYFfj2ibo7DXB9zTdyLdjSEkqoEx1xW93oDK6v1a5W6dXAHEj3Q2L1rcD",
  "key4": "2yfxsuztosciURyptr8MwAqi2mGPJ1Jy1phDY5NzHkpBKy4AMPccv4dPnJXRUXWZMgaUwA1vCuZsBBN6rQpuAJud",
  "key5": "4bQNYenrVYJpZq4KxvcMKG8wbJe8bg6ATMd5wwfeCThSegsNY5DoU9PgTVaMmpKdJViEVJLsDhw1YMHPcUyGS1Xa",
  "key6": "35RRcE4cKzQqTiFgHNjGZ6HsE3J85hx5Xbmq368NpjwNsrhQ6ih5oqq1wEZyPz8kHuQwdzd1VpmcwpFUhm6mPAUw",
  "key7": "2EtQAqbEqkCneJHwvrpRe6U8PK6dB8ZPAjGKNtCJm7G9meyMVAqwcHRfPQ4QVcgFnc7ETW4YngWfggpTpupkHFUR",
  "key8": "2QrMXM58mUEQubQUVQBjfncEB3bX3Tpc99JmwwvwUqCozai5vaBo3J2r5afj6E7t6f4bj96z9sBqyWw4qsDzrc11",
  "key9": "5LgK1cVpEe5qRpagpF2iLJv7m33NWoUqWPM4qtTByDK8TnGsmejND323THPCELcs9qMdmhHaMhfHHoYtdFcfKWGE",
  "key10": "5wCdiAMb3BR9dqiF7GT9sy1aTicAVy6YG4hnMXPm8Bb6V5d2t48PfM2s3x9CisEAKz4ih5tBdkMpGfVVPibSseK2",
  "key11": "45yc3xPowpZs5h3e5MwH13GKLX1DAptfMQsZhBBR3K5s91seD13R655Fo4Gk4USpHBbn9xsNnUZ3w8bGwPyn5vnC",
  "key12": "2Cuhz8gbEoMGLs9jq5cgUC4QJbK7kDkPeifZwZazvdoZqBL8ibbM3UCZBHdK9zPfTNxT85vH1n29bUeMDm1K8r9N",
  "key13": "37kPxk6ciTTCx4zYpL4ft1kZBQ62EWPyHV8ACi7KHCUXKWfUovcwRGws5tAGHfxumPDE7k3o1d2b9r4MmaifG2R9",
  "key14": "2B1ehycmJhnfkrKFFACkP3KKu7QjymFTuM8F4RGP4S1wSwYrDzxgoWwYd1pfzBGWDYeky9BmtdmmC8prRb9fYc4P",
  "key15": "WkUHxZz9Ewk7o1Y8zc3TQVkUw19R5kHLEfGGt73b27BWha8uKrFt12SorAmzKja4iUfRmpwyLS4K6EH1am4LRXX",
  "key16": "2W8UhBhmF5GFVTpNbuBn8EF3TXJ48JKWqLNocdBPFWKYqxfjZSKHSjfSqH6B3uHEmB9kivK77AnBRibrP6LcDWxT",
  "key17": "4faxrD9teNAzCpLnxkqyg9bpSdDda8FDDG2vUkJNjxeCMmqBQEheHD5UKtsHYmbvTFdk8y84CgcQz6VFvVTwYTba",
  "key18": "5hPRKpP1pZnZqpa2o2Ta4PXMVZL6BmhZobz8uDCYfN5rZgUWaWRKQqcvKkuPb3QQatD2Hd9JX4f6Afebzqb8oKBn",
  "key19": "x1DWvgq5HHUYJUkU4zKHd5Uh4rVqrN2MLEnP4nE3DJjPj1tNa83hL3YhLdForQ7vz3p8JVYaukDxcCVUY6imTaS",
  "key20": "yg4Ek91pceUKzdKzrErLDQ339ZFix6me6sKGXBbwryr8chtecE7smGz7wtHg5P6LuBdTbJRG2ZDprktdjf2HwN3",
  "key21": "5McAfQGLxXDv8RN8E7qfTsW3DxpGhP255Ako5MxSuDBLXafzbcvACapYcusgR4x2nLmG9mmDy2cqs1d21CfxJZ1W",
  "key22": "3qNq2VhP2T3s2sWcBw192tjcRKcYJnqByzztNituVnkLu2N3x1CtrimVkZBsfSEDD2nYicSyGBSRfeiZHesJdRMc",
  "key23": "d4QZyXNKoSqYh23bratCLyijtxh5TvqjiTrpWtD6fso73cUHVQbikYLf4w9ub5XBLAmvJeF8WwANvLVb9vQnYJh",
  "key24": "4hki3LDYeyMtG4yjDTgdmtpHmW15g5FvPEsTL9fjmpXoQtWmaY1eU9EMG1gbgkLZHqwqxqyuiLVXRbEejXSETNcg",
  "key25": "59n4utXAGTZATSkyNzZiPnZqnNkfpm8tB3n2Hqm5rN9Dzr7afYCgqkG4XHJxbe72g12K2pFyBhp7eRxgfC3LUQDu",
  "key26": "53ewXSCsgwxzAxc5g7wrv9Ci7eGebMbgGzMkscoSFkVkNSBEaaZJn47KMw2s6ZGVZih86N93rVQgbpbh4apdT1cU",
  "key27": "4RWKSAqs1z1mTgaxWPodG3ixQk57M84zcqrQFa1RdDAJwfMD9sKjFpcwVEowDwjMzQhAgT7uyrVzs1PsoibKkz9p",
  "key28": "fM1aM4sSFby88Sq4agUDa6mhzBzXrXUvH9d4AS8HKJmTJTF4W5TcfyhusxiffdWWTKXsaUS6hkDkxmtfjA9fimU",
  "key29": "sn7dKActXwmegitsnSbMnuFQbmJ2zy66MThds5P7wb4Z7N7yjHeY2mf7tdDgWaretZnjMkyMT1Y6Gj3ttkxnkY4",
  "key30": "x2hGt8udqYiSe2o5MMP53TYvbbeJmFF7qg7HK3tycsT3LXFMWdts4dQ2dStLyrc8aCafGerWMUuFbMMSm6zVZz7",
  "key31": "58KJnKYUwybqig55SoAp1D9mbtzB6oxhRkxTcgkGXxMAMEFyX7KTj7USQL2rkqZJWsiucGBdrpwMHgvqTMjRVDJ",
  "key32": "3WJky4RnMxoH6CPF4UFy1CrNBkE8RzaeLAD8LjyWLZEi8QG3YLue8U2QvrSoicbi4dUxTX3irm2LtvhyxGDVEdh",
  "key33": "2ao8wxH1NPraMPst7ebRfrPFcgEagHj7vsmBDZuDs43F2jNJ9G8czo7ysAZp7M3S7LcmwARN251xL6rCv664Tifb",
  "key34": "3BWyDmWSc9jQjrLys8Yq9M3Qn6WgWMPG4u48bTE7TE4HGq4nkSn8nwUw2qA8RdXhqrKbXxmmiEMsTkgzx66mDodM",
  "key35": "3MVNyMKfrih8A9F6cJeouN8TByhnqwHe76SFRMLLv8hCXUT1WcfnmJQJAimveZ7dTjsWVJYt1FQ2kxEV9bwiwoVq",
  "key36": "3tRDtx5TnUyDBk8MsTN6nr2h55VbaMZDR68zkEL4jcJbWKdLoB4c94E95koSh29yxnqfxZNJSaQrDS5judwKctVR",
  "key37": "wHZ6Xb7Qs63Vj37BC3DdFefpcaajhXERR7tm3exPeWTD51ibf7Rf7VTMEP8xW6fqNfAvT975Yxg2e7uiuDW1We7",
  "key38": "5SVuwr9qAno9DKMipKrbTSJmJyiQTYQSiLA8o5MX8ASXVcW1zsuUdHo3VuwsF9o5kaYFoqPwaAfmedysy6gJY4RC",
  "key39": "2SsxG8SormMU3tGgCME2S8nXFnpxu1qwEH1Mj5iVxaJAHJrxjrBMyMGxd73qchAngPbyz5Y9gXzp9RhKSseSzeZ6",
  "key40": "39U7wqVo34gRZ7cfNdPf6sX7f6skrPjTJwctW9xomfTGQrA1pcLNE4kt2Fpaj7SMbt2VdkQY7YwCvfC4s2kMGNmC",
  "key41": "3B4XNXuFRSS5QnkoFQHSRffE8ZV6MZqYjjHNHVJrQFpiouJAk9W4hWA4aaYTzSw2dgfz5d8DnXNfQGMzHJ1mBDs1"
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
