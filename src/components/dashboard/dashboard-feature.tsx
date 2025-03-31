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
    "2Q9tcdqLkF8ozYTqbBGmVXJTjCHm9KJCa4CRwGFBFAahaUdrHZ83aNtbCKPtV3XFxwD6FpqAbb1AWR6fGSHXFedh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f3z3duPsrU2jJCXvJitqTA6xmfrwhxd3ZgQecfne522gqTXdE7X8ayiFDyaiw6EaaGpgukZCc5EiayRJ3uZLxdg",
  "key1": "3pJ7K5DYMyrUM83NhPzsjmhq44bgGEVUNZscCvSjtQhqh67uCXy6gaiAC2M2qqmanAFgYo5TMHYDNhDkNZNzSVvj",
  "key2": "3DcLLoa9JjvxscPT1tpHt8cpqhKMALET7XQJQQvodPEC6wABsciugZ9Q28TtLvxR1xLkRMPDSe7SJLQWtUPE8e8Y",
  "key3": "17pZ5H77vqmBtpKJLTkdm7i8zNvUuDKPsNmgWHV9CUfdccRfVMemiXHV6DiEn3NJqyQZTDTW81j6JFuJkgAnn3m",
  "key4": "31SnjdWRcpKTFkqmRXoodPnsUbp6nBSV7mgxRm1aRRd8VBxaYSyDpXJfgxESBrTsLXvJtayu3JuTJtBm9PiUmUUA",
  "key5": "43fFAsjbcvtkHudCeCKkM97cQmF4hkkU6c4CJCvLtEkA5qLKDCuJjYKHc649T2dGX6RadH1r7TPeRfk2P5nFYk1i",
  "key6": "EQdZogJGdDkuENNJLbR5JECK8bqGYQ5UtEoQhxU3EnWYDQXYBz6rQrZqqHw3xRB2qYifT6eZHniLcyNqBkcBzYW",
  "key7": "5tBCH1QvrqwzeyaCTEEngv2dF4UsFyEmdDRdnhEEEEiVHgJUDpdqy9WyCfuuh1P9PjqfMCLscPwvJdAt7V3RG8B3",
  "key8": "i3W7bL2SZK5Cazv2WoJcs6KqHJUMb7QnhLcRAZT3geqNezPN7eZPXaPqYLei3i74KxX32VDuj2c6k5qfBacoRox",
  "key9": "5wxYxSFG2CAksyuSdwV5kWTzUXbTXHuQXhrXf3zb5bwyYPXK6QwAWeQbpCdrbvQDLn68gpMqfPNdy72wDD9FL1aD",
  "key10": "mHw5us8SKTfQJAi4ayXfdBX9GQoeEEcX2Ne6Q49N3Ys8YSDEBmCtezoViJ2uER4Qvuh9XrPWDXZoAEzj5wLpPdU",
  "key11": "4mjh3p1qnJF7vHd7n82sJChAET2wQAgGcg9FKXrdbFdvQwhQWxCD7dEWyTzAswsf4AZxcgWfvZvR1HT45derQqeW",
  "key12": "3iEn2qCyrDAiCjrYWB3FpvKJXTgdQpPuQ1ztijubYLWySokoYpiRv7y11pDRdZQUsBxHGn2DK4mHtUX2mNdWGxYM",
  "key13": "7sm8u3i69fsLgbfDxVuuQVi9J59rSbEcCQEg4pk1xYTLZzniCfVX9F67UaG1paCAFtw9r4AX4Gtv34rTBzzMfrk",
  "key14": "7PEerS5AR5ZZXCogsxFFbr9BqvFMrv2ay73jPiCDm3oqyzPnbGJbB4BuUxTv3VzedtH8XdDsEXT2rcYjGhnmGEY",
  "key15": "UqV89dJJkNY9e1tgeXP2ukrwVG82VqZdSU4XuFdydTCdChXeiKrohUQj4CD2QE6XypyrcsjVSyoUEGddTRCERQ6",
  "key16": "4L9rnWTSMkaLFLxcHNo6UXaK9DDy35HAB6mdW4T8F8prjUmXzT5soK4CadFHinqVB8jDKSFHoykPUBo9ugXgN9Cx",
  "key17": "4Fjonwywsxn5cxQX4gUndW4Vg7Zi7GuDDBEoKBrPnTbUbQh3fNNpHkbq2q2Jy1Pz7JabmG9cGHrHSqCNJpmiojAb",
  "key18": "4aDTt3okuQ7Cy8KeXaZcEY4HPRCvqCu2n4oxC4tAp8r19S6PRZAqiPLfmjowCHkhd7WM2gM2J61qtMQ9HEWcugaQ",
  "key19": "32j1wPykoJp2zHdw1GqSXrGjdLgA5Arpt9vxD4whV3aLwYJqcdZu4hegWaTZyyzngU3t191fbJuaGRxCY4GsWTrJ",
  "key20": "2RJHDt9C6F7KBRwD2ni8TYvx6jcEDjG1htEftNoemB5YKnow6B1Hr8iPLoL2ZE3tvPQPgko5qkz6W5s9PuNi57FP",
  "key21": "2nNb61QDkX6BpwU4ucDFHXhjE9nH15oBvn6DXXH2o1YJPbNhRxkxptp7Z1qeGziwzi4XC3SJkUGnDLeBZ4AMsHtP",
  "key22": "2UEmtVHeABuLwnsTZTyuKdYJVuTTgE1DPqRU4FdBZdDL4CGV8KoT8qZ2MKKTKiR7XGMjdMC7jvWG7QJhBoMLKuNC",
  "key23": "4Wus6oLQAt62VCocHD2G4n8ViUppHgCBU4xcwNsMpdG3rjuH8Fi2nWwS788HLENH6UiPzssszGhY9TwpQ9fJVVEH",
  "key24": "3dTp77cf97gcakUSZijCpxzC1SE49uwpjnMgHEoHe9VytS68xce98Kn4CzAUZs7nhMBsVPkszev5oy6oBQafUzdf",
  "key25": "339YebrJJhQC9zWMMKB1j7BCX7cCPBLmXjqytvDvPLqAwZTGa3UAoWrF5fq6pG81WwfWZ7NbLbPXNKaRHuFLWhaK",
  "key26": "HdfDrMVTdJ99Ejd6a9znt1rqK26Ko6UwPqpLyrZ4yrx7GnDZYPgvqy1HuaArhpCefosD3aszjzxw8BpekucArE8",
  "key27": "3UetJf3sumGj4Shg5kDRBg7CTnpgBX25M9WJBB3fKnopHTv8mTysKeAXtaUqsWRmSgpmyx33yo9x8kHAK2o6VK3c",
  "key28": "eJMP2WLyMb7ekceHHyAjrYJmpHZtjqQeYYdzRZLNCeXDCDn9bSJZFUGrKkzbHKFSUQURFxCF8xEA7eoDdT6ruN1",
  "key29": "3ZykvVQjr5Necttea6Z2z2AJGs1vqWrpS6cvywMKZBRBkKbKoXWjcBHjkZpDp9NkyVAs7wgTjkU7KuixxHqUzno4",
  "key30": "5gTJsgsTUc9RinzEsVxJvNQUXU8uu6T8JAm3pPiivBZPSLk7cYKEt12MuV6EXVuNKWbReNe428orDVvFrwcqpE1a",
  "key31": "JSR7wLsJ53FXVxXBi5faWtx21poAPUEUNV4YPRLSTHGPwa7QPG9CacUTGMXGbnQWS6jw6vUyEZfgwsGVko17RCc",
  "key32": "29JtXLLLSmXYTS8Hop5zV7LXUHmU8ixyhXWNcSzMXKXefPF6D9DEmLBg1anTMbJXmWfeuXzVeBtr8Dcz8AKsJhma",
  "key33": "5dtFtotSvkVpUjQivX3bf6g7pyfACqTo85WdnpVaUmZcbA9rSBT9qcZ3tn6DFzmkVCVprKxrE1Jzky8ZqBQBvfkA",
  "key34": "3b1ajkTUbbZRv4yBmZKgYQn9faLQCQQ89mEBUCPLYNcjRrPSt9sK5R5ZquqHFR2UZsbyeTTJ4vnuc2jqgUQJ9Vvr",
  "key35": "24LmwjytHL16zQ9Qgop7QUgUakQQW3Jg8vTF9Bg9t2iu167Madw36PzpFxpzFDPfWCZ8reHKzhcvxSnV4nGvJMrK",
  "key36": "QFqYbuzVfjnNFo29sgyS5qeXDnnL963LZ7CL5QANFdLHabJNf95qCcuU2YqA7j1A9SexUAgju83gvELV5Uijz6P",
  "key37": "4pYKPJMcvVfmE8xtDo8G93RNyFFFAHoPMTDF55D72sGLeszLMXL4H5QojJaYgwh7JEsBvP6QgZX7aVfEkrwaTAZt",
  "key38": "4MCBuPerrNcASMk6g32uCr3KiqXfVVpA98VPz9qu3VC6v4cWgNZPcAQCxDNdjcs7PcBWT2y6xRGnhthBZFXwHeDC",
  "key39": "z4bu4URfXFc1DQmCAnYQUKrihDjpr17ModQDocZiGbP9RehNfruRQDQx3zUDjd1HQowTwDQDdWyn7V2XAFLAK6j",
  "key40": "5D4TZ1DDT1dbA5n4SAsCG9gd2WMEvBywYQWD1hP6GYdhZWawrtcJbRLjr3w4BSK1ptGKb1aLCsTKRaTpbbDkEUoG",
  "key41": "4Jj5A14KWyuQGLfnvhsiR3RUQJXRMEkFrcbWphPdHPjyNEzKHzJBDZ9R8ep3QUStVDMQ1p9n63cczS7P7Yrk3UXa",
  "key42": "4MUbjaPnkYW4MLCyPrHBnqhm48aesdASNuLycb7EcHma13VwSXweRuRu9ZJtHRQKrrZEuKGNHjEX6FneAeDFHsXi",
  "key43": "5aTPaCiMeBL1eFhoLcr5eJD7nt7UY1qnvgDr1DvsQPbxxkp4Ktghxc3J2JCPxsxVF5v7VG3r1bt9qgkKppTthTXB",
  "key44": "25woGZVypAs2FeHZgCKeVNQ7ZtnDfrtyWsUsRccgiHZJeLzVSU9yoPWjZGBqg6rEvLgMCAGRCvrjyohL6mDaVBs6",
  "key45": "34modUpxMZy4u9BopCtFgRiD9hCb8yhQuJc2LBz2UytShpfYzeLGYjuYc3DGrHCK3FsUmaC3fGx2m3a2aLXkJCTC",
  "key46": "2zXfM5zJQgu3uCskWMfTHSfkvB7jcgpDRhdXRKstReBc7oY3fcRgZhVBpFdGRgkD83UiJEVV2ks435qxR2d8W4eD"
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
