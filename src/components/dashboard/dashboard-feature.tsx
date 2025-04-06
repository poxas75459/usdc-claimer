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
    "5C9yNkshiRwBjsVLPM65VFjWDP5q18Uthd12znkVEt4ubZEVEx8kiaGUrsdwTUvkggXQUi2pQcBsnX8bJHsyGg7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WbeZ2R1X3AudAcEMcoWvLAPcY5Untkoz4gCCuCbaKTMNPPWYfSiwJPtJg8tz2X9LnoSoMtSFG6x23mh1n1gVFuN",
  "key1": "xQkUKMaJw75mVbuh7Wrs5uAwrVUqeuMxVoP8Kj1k3U7Y5qJXLX6id5m6Kzx8qN4bn6wiVD2bFv5VBMAg6LsLLkp",
  "key2": "4Q7X2pHgHmbu23UQELhNAqWfSHHb76nPfTrNfULizQ3yP4TBtCrQkYf5TD2xSfTzo6f3zoZQsaDB4Bitm66h2BMB",
  "key3": "yyH2DWohXDktwvmDJ5sv9ubqqaVCesQG2652uTLryDVj9wAFTvchwpCXujqmEWz7Sw8qqyAgNr3q1q8cwp8Ebdg",
  "key4": "3i7eNjh5bDStmMhvCUGv8XuEsnpAEQ9viMjocxmWzEXEkAAKt4XQWkD7wLrcMUNQqTUVJiTpXGxwKZA3xNHx2HUA",
  "key5": "251zWdyYFKgTGPGPKfB2GNBads9VE4CB2ooR2Nq8bk5qpVYr6vpUCfyx25W71KcrnA9RMFW3wDf4ZuAY6gpCX3DX",
  "key6": "5Pffx81fbapFyEoZ7EKqN2aqGdd4hkB3rPfusvWY8zY2zrAXFVEUAt3RcsE3yLdAUpBPs8yRptgbgm1XUiS6L836",
  "key7": "2PU8NrK3GHJdTCcJXH5wmKh6H3LdVPTFF7Jp3DK89mEo8dzPpmqTzS53KsgbyDbF4Rr5fcvzcSwMAGKWy4T2CBjr",
  "key8": "2xyY6ZMXy4Rv5t9dQJaL27EptCfpoWXns7bmYHF7PRYSvG4xnswsurtiqU8jaDD9dQ8FEzLrAWCBNkwwMuFAr4Q1",
  "key9": "2dfssJkSNX6MYoTRN2PCBqfkhMLXFTctaEFZjDbvcQPm5xCaY6di9j4ihCkJeLrTsWfDXRJSzKk8oz2cTb9CRWBE",
  "key10": "2PiGkc3VxWdaVf1H1o8ZZYZMx48azBM2KfBPVtyzDne56ezhh1VLHwdt9rcrkqmJv5kJyjr1FwuEKo3vF3Wrevg6",
  "key11": "5deXKfPtahR3CsmwTrJnQPvPW21Wc4QJmhGEvFoCLHp2FAPHLB1iHncWzkscr7RYT9w598EwmxFQf5FXuTQW5XTn",
  "key12": "ZMNSpkTs1oJmoMkjF3RhAcgrmuZDbQ4H9SCrsE72nL67xVTR4K1sqBU7XCfr1rQEwfkBXBffrLn7i8WmK4KkVwL",
  "key13": "35Uh1UEpRB9gN2dNb8PJTKzH5wUt95EdrQRXVvFgx7TmnM5F59W6P6jurQdv8HG7d4U3GBjbzETtU53oC9CaUPFR",
  "key14": "4rVhWEB6gLikucyqk3PFY42mLMp5WSQgh7SPTRHzqPBZg3FM3UZ21wnERoRKkkC2AVfYCxQP3Ny49LjA7qFcCXLE",
  "key15": "3oze37Y77y6FfKn4WTFEoD66sWUv1tKKXab1P9s9MzSQbrqLdVdHgbAhnR6K5jhcAyf5hYwp3kGwY61SFx2XCpoA",
  "key16": "4LjBHmoM9s5xzaBWjSdEc17gg29UmF9VapDDaabnmLTjaJEqBB8CZEXGH1XsFyCNoEB46P5DtibXbaCpToeHMGg8",
  "key17": "HVSXRqK7rNJxPkYQTfe7hWyxLYGFKPGKp5XNwpytPq81eMpVPjPgqDA2BmPKcK2Wa3xwqYLeTk2TUsG8tA3LJ8m",
  "key18": "4uH8HY1LxtETgkr9hMEDmtPSs9Tgas48YcdioGUTtD9YsSUFrrNLHsR6wRvdFJLVzXEYCWxggAidJs5kKBJ5jQLR",
  "key19": "4mhHy2AvgxXmKB49MdwqtVpW6XdyRwyKRQgX9e8ky7ySBbfTw39YR1qZhaXUrTiWyKHKnGHsvv4PpzuXTBj47yKo",
  "key20": "zrgGJaSTyBwJ1Xmj68X5aiCsAjEgPuSvPbFUFNb2uiTZyV1no1a1Lni5VDNvVqwfAXyDTDJGbbqk5KuXLmBvhEP",
  "key21": "8LdMzKnKzynKQoGFKPPJz2WGHRuCH2YhtnmEN89vN7y3F3TZJaTRA115jUg41qXJH99iT1kEnysHLjvXPWJdBxq",
  "key22": "3p74TzZ71AG9eaXXhhNtMzZcQ72g7khb5ystUfEh7ztUFcGpdspij15LDmYCZmBAj7VTMQj6uhgqsAvDcw53kESA",
  "key23": "fUeKTGdxEpEM4smoJRgYyk7ry2c8j4HRcmumHYie8amXfcJV1c4tLXKn3NPtKgPHbieKmhPDdXk3eTW5G2tgN66",
  "key24": "4cG11Ee6As8m6MNCy5zZFx94iVkpuRGetxTdzJQgPX3MqTCoWLr2sSHW1uXzCPHBfgnPbuLuB8s7uNLWVLg46Xbb",
  "key25": "2zcjL7RbNbbGpfmV7uv5jHmvLrUGrmPasQXj2XpqscMnArdmB9VsoR3GApw8Jkhq1TMXFTZC2DGvdbmcpqadpC3a",
  "key26": "2nLt6Dz7xfwVtJvSfUhcgDHjbxuNtpJKpXoHpFuT9vVTy7kxQthKj2bk64jqs4asNkfxoZ5GHpzAxcL3us75Uf1a",
  "key27": "3bK237nuRrLTrAieavKUQxy6RT8PpcAXjMWpoySx5Xct9JV7H67ZJKCihhgqnBwmpJ2F9sjMSP3a96LnhfaRAzPv",
  "key28": "wDAiauysjRD2mQvur6PGYw8wdY4npwxJ4GcQxr4qaP4jtxpPtmTZbn63nwA3RA5DNEeKYzmBwb58sZe1Fk7XRgz",
  "key29": "3KxppQxNZG3pwVtf8XhgebCHT4fLKnTZEf5MimkWDW6LEwcNFzuLfbC3nTU86YkW5sAfwWFyyaDXScusCXmbV1z7",
  "key30": "4K4t2DBkfquVkHpyKnNpwfqWsbwEEtsEEVXNuUtZ1S4EdLYnpzHmoNdVwNWJhUa9JK1cbo2wpUTM2ubKgskYb9B7",
  "key31": "xGjZunvpF6AvfWAZwovaNrEmjzae7XkkWhRq8KohTXLFPJgVVPGkXUrcadTrk16YXfg2oUSVAwQ3DxHa1RarQW6",
  "key32": "2TaNYAk8c9cJgPKAL5XCVRQ1sHCzpvLeeHG8xBSDhJFKXkEXn3NYrvvhuUKaCpsNeF9uGwji7MoJwa4dDrNBvBnk",
  "key33": "2Fy9vropCGh2BCkZLnMmemFWeZxinRsSq6yCXxVeNcgRabDkL1drRmwKQc7QSXj9C9QWUKovhb8Wjz1s2NAcecoo",
  "key34": "2aaiEkM8b3LnhxKP3Xm7S8Kq5Z5rzFQwFntKK9fEqCHr43H8gRyuRWiK5iKDb6XUhNpcTwRQZFPpDDWFYoN685Tz",
  "key35": "48gq54mMufe2stJ32pG67GnoiwZuKcHjWdtPiksLnuPKAxXxJHL9zTFLcRmfRuE3JYU6FimyfHDhnGvEA2cVcbfT",
  "key36": "3Wx4krtDwdev4CbhRMPaHbmU3ccpwE7Yv8N2FQYNwbfcL3vTyQ9eSMe4ticcp7fDJxCybaRuTxfnkFvbrwAvK1C4",
  "key37": "VFtJfMphtWchXNXDwjdSf13p3adkTvqKxwGncr2Mup8SQKFeVXipTtd2cVAfpoQP7njqMKr59yv3asTFwZsFUpL",
  "key38": "4BUeRMbY6jB4hWHwgkVg5onxHxaQcQ3Q6QtiyNfb4byfRAg8oxmigWp1J8a98pFzuJh3XozjFuHiVnnbUtXrDucu",
  "key39": "aHfPm8VzduqQuwomrWYvXuBj3b1qx5cMoubcp1FxQrkG2MTZSKkXVzR31s85n9FkKqgP19x8BqJmBkBqT8CmFfv",
  "key40": "2UaE5aJ7UKEXP5CjsGR1CFmR8AeQRynpsjxbtpVo7iKJMmRHtWa72qvKnCiK2LcyVrveKdm5v6HeK9KjKDScqnMf",
  "key41": "2WnBWCxT4XAyTe6VQkGmjZCgHA9dE2cUBsvZV1FVZ925oqgnhbrzyZgziYsGSyGmXAXZD5TBenQH8xg4P3dYhnST",
  "key42": "2DuRug1e1a8XjqqDAZC8Broycis8RmYkhUyUG6hrfCRhYW6N4hGFSKNdc6SLAtdtUJx7Z6Whxko78VQzcgbv7tZu"
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
