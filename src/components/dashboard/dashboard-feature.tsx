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
    "3ku9ykJQqvLD3QnexaXkWWhYr6g5ZSZ86kcfrp3g9MeLNXzyZNMy7SSEY9z4guuvjWeesHi84mHSVdhgQsDG1XxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cLsbZBUEdLa2GqcuMNhcUNovxMD9qyPHHd2ncF3rsbuTGdrQtr7PMiNP4LrH3z3G7Hy2jZa8dzekj7TCukpwAFt",
  "key1": "3ttssB3BqPJ4fjJiNMYPLjSMDM8vB5ajU3Ly6nQCjVGKJVo2Fe6mBZKQNLHnC2RdSteymK2HkPSwmGDGjrtxhH3u",
  "key2": "26V7eXthNedfaAypXz7aet5ZGM3cDiDLcBwk6JuEqGEBzKBjs9sfngShG79q54D4U2H2iihGr5fcBVdQCqQZ84MM",
  "key3": "5PopsJi5Lf7o4daUdRnVxPjXB3Fc4sjvHKaB32f6N36CWz4ni53N8BkEHyNVMDr5b1nMs7CvzbwYQXBdLavTMJGC",
  "key4": "2rMZNFwsWxjj5nq5NEGnzcRnfV9D4uATtoBxEdeBz8TJE8ZcabUK5DH8DSW5u2ygvprSVhvBMPEvDUiAxSwKiWqG",
  "key5": "4HFfn4uke2pRVqoq2bVLCEbWwXpccaFLEqMx5AZ8mgQwUGoFLiD7X6Xxf7Yvdiwfs25xCBbDmdVLJtPhrVAqyShw",
  "key6": "3PhMxbDUe44nAKJcEi4MYQcqzKFL8c5iYYN1id3rhB31oU8ktmWAUg31XNsWT8SbP9NNa7Y1qVyGHwPVW3w9hr9G",
  "key7": "oB35e9PdziMEuS4Lu8TNBbz1cNSFqTNjjbUE7WDBpLRTV2f6HSUbR12wXvHSiTcMhGQfxCzLJu5EzAfbSdXivrX",
  "key8": "5CYSmrYkvEehKhfLyUDV7visRDexxDcHecDEzVrffqavGtdUrmSt4iR13PkfPgxvchPMgBxihQoeh4AtvteYmBpV",
  "key9": "NhRQtd8hDygKqGcQ4ctJ5oU7oUwdxXD18gtvK593YqSkYYe9gcktKJLxuvh3wcBm5LjZyWd6rVbPBnyBFUyxxeY",
  "key10": "5EgaTAekLuNNi3BSH5eqavZncQqssWSQc33TTd8TS4Ttwvyo83233YwVVDvsSVvsikowrZcSAC6fVXA3kZJS9kDC",
  "key11": "3puFtedZzF6f2YS4xPFbhDHJdBJp4X1v3PwWEYuUXvJRE2myB2i5CU1caE2dzLRUju2m8Jjy1wYdoS16qiTp1XBx",
  "key12": "2oeKngTjmY3crnzcvJyk39mCx9CVcP2Lssu6qpUV4NHnLxntKbTWqYg5h5LqUG5f71md2A7xs14EdkYXj1brZjMZ",
  "key13": "A24ARdNTchcVK8JQ7DaXvTWQcFo8jWE5LA3NqNk9BrTqMy4Q1uzwBCTe44uWzVqp43SSqS18z7jrw48C9Bo1PGD",
  "key14": "2U4CrssSEtddVL8uY8s3eW6WrJy6TcpYNhTWx3qorhgBraTzQ5VW6h2aHe8DxW7Knf7RXLyBBebiMWKbXDnfBcrM",
  "key15": "56UFqExLSeoUyNQinCn1jdZbNJEAHj1s54zCgVKSndDwtUaaemq9bzN2hSYGj72QKzRdkuu2yhqkBzUqotNJu6dE",
  "key16": "C31kE2GjyRUUZttwXan5DfJvqMNkCyezBeURJiomwKMEMshF4qc4GEgpan2SjsxBtmvSfuQFaNP1LT9Ef6VYkhR",
  "key17": "5Wg6SPCgkKtMWSrS2iFC3rewkD3Ucnhe57zwBaQnKyKF3ZVHD5Ecj7TJiHBoprd8aswXKj2QmSLDy81PihBZw5WX",
  "key18": "2vcSurxXbKHP7rP7B9XLnvWuvfKa7YPd7E6Xuw273oFLExe1mc77GB49ZomrC1znSEaLakyWmVaCbBGJr9u3zaoK",
  "key19": "29RGCc8EU3MSCzNmAGBNYcJ8P7i1hJPphHW8uiBWSEKT9ssYBJvoVqMtYnna4kjnxWz2MME21vthkRdSuGsGU6GM",
  "key20": "5AadqzpVHegUHTd9phtLkPaQYSn1y7C8GLqLpUNYAFVjnQsVdB8CZkXSdh2f7ru9cnJgrqKP5qRbjy7Gv2ykQF3e",
  "key21": "G2RwTc4g6pbAQyd69T6xK3ky5SRye5BWcAGXtRGWdCDHKUevLJ9g9bxZ2t85VLWcq2RrZMmAMCJUhkFzxyk1utM",
  "key22": "2aF7veamAtgtFHsfZTTDig3MtJ4RjfKRnN9QuQZ814QDpqBmVAsnJzpEJAZauG1hUXpihXfsdsh39s2q7kBCpFYS",
  "key23": "5n56n49gwxbY36djd1Vj3yf5jNXUfyxWJ9idhxXsDrJUabChDkSU4PP46icG4ZS7YDAMkZexmtZ3RcGB9B2WYAvJ",
  "key24": "38YMjceBsv8vJJyqgZYYVWJ5AJichtnbmy8u9iHtncgj728Z4wtb6R1fo3UQ7DLR2pLqfWvTQjr9q5g6FncAgz7D",
  "key25": "585epB8Wmvv315C8HK1arLbP5AymdvWQ4LCx27zj7GwhKT8td77ByvumbFH8MrAeTG1n9oZ54TUhqn4nLmp147fz",
  "key26": "4EWC4PrSkVLo9eqZjMtu29jEkZUzwAUZdrQiec4rK8mL6EoaomEL2UrNphBXDXwUbrHB1iESfpWHdGkVKqjWDChx",
  "key27": "2sAFNtkf8ouYh6ssch9CoJUbHE6ihB6652XsLpAqtsHg1m2mPAVhupbnYCQBBsbi2irXNwxpKtaLPktU1eigdCiW",
  "key28": "4zJJjKgXW2nE6kubmTzqso9iD89D2dtdPu6e5YCgUwQUHHgzhH3fKmBY9mpSyyjedfafsayfwmGfC6TNrK7miGb9",
  "key29": "WE5uo2Q1fDQmFcDbQEkeAZgopy3d2hTSoQB7qVpyDGv5JCuW1KkHNGr7QuxDQMmJkdspjRtyBGJmFY1hc1JBb1S",
  "key30": "5kN1cc9fQRhVcr9akgQf1v9U31eUuBhhY9AWt4eEtrNe6hp4UiFFZeQvLKohhVFwqeoxvYvcaTphN8AwLRbw7QDs",
  "key31": "2CY5SxaJyoxr3FajDp2HWK17kcfm4VvpYwDXUo6YHFaYJCXYRyjHZr5qJfp7194Vgfbnb1ANZ4z8MrtbMRLxPqnc",
  "key32": "3CYWVbXKiaf89TFyavsTaRxu6n3x9Fa3zvg9uoHFBXabhwdn3ia9RXwXDehRMFcfzhmASupHVPb7bU1aRw2EJnmN",
  "key33": "2K6Fygwcn8GW9uhDeGea22rDwnZpDFtCGMSrs8GuNeUrjvrkC3NiPUKSJYyatdSHDnQWaLykjstHgZbrs1kjdKG3",
  "key34": "fkXQcEvkDR1EsZ3he6LkpXb5st4qKT8uKq7FY2oQ69htryDtrobaqzaTidvHeeuTQcdZc9F3VHMAQBY7pAcxubU",
  "key35": "4jV3Hf4nxuayco7t8QpD7EXBsbmeyDBFvCdZV7Ko2oLbT2PzUMkn3BCpUcwMyfBUxmXejssf3aUy3Giv1H4HYoVQ",
  "key36": "7SL7wLeK8RivYZH69f8tGipxrq9kjAcB4ToarJMSpWzBwy3dNkF8X3PnbKrXn1AyUL4JMLeFvbme9bNiyyvcvhS",
  "key37": "4GH4msphnY1xApb811D5H8K6bTiGKRAQY87xQRVJQaLXZx8RhTanw1Xut8MTGh91zMNiTi85C5MFHxVgGrWGSezA",
  "key38": "34bbabWAM3yLxCC8eeKDJ566zCmKgLqMfsvBa6xyt3wSa4wnLUbHPNVssSyZ4hD9fg9L4QsJL7TgHUo5TsgbZHzu",
  "key39": "4FG2JyD6aeM6ibSZPZvsDJvq55knwaNtJWPwE6A1nNEUBqVNLQ7fVWnFGfhCKPR7uonntPMSMdoocj7FtMu5EVpY",
  "key40": "2TV4N5qSdme1Jva4gauBsZS3HrAsqS51UvL9r9vZ5vfjfFBxYXhQzTyhRDkhnSxWmvtQXj4Jzo1wTCZyGWsQiZm3",
  "key41": "2Jb7m7GUGauH1XCimvSgWE5XXNkRrHCCTf3VSRHB4dNEmpPL96J54d8KumkWNKVFrzNBr3jWfwNZ6e5DZuLDSPMX",
  "key42": "dEkXEfvHrjUTDgQHU5ZgXXU6F8VLyoctrR8MY2Tzyzt9teNxTZ8UEFhsMJRyrcnUXQq4h98scATsgKyEsqesoWP",
  "key43": "49Zywqi8LQWymAtqct9jGhDQirNudHYk9GfGUvk1arjsipUw4gnFR6dGkaPrxRqgzjKH3Je1Z6xoj8ZphaFZqh5W",
  "key44": "34qUEBJwPuA1vVav41bbRe5kffwstDgpbJVb739gzAhPovbExZ4Mkk5YeYfhM4T9G8QnJqz6UMDMd965pkjpotdR",
  "key45": "2W4CrNW85GSMVSNyADpKYvigvYcsCys7NwgUE2BvcVvDqk5Pb98hTjiMoNdFLvJhp648iMfV6Rk64PUzhMA33eaT",
  "key46": "A9LnTXoA4VtQu6dwCaTHxV9raU6yTEGwPFg4r7ZSVvHPd5ELZ4ymtfkhcVrvVVqQfczsPRSeHR91CyP43MxZ93w",
  "key47": "3Yf4wdAov773DuoCbaUNk6Rdz7DtmmVqc8ADNEbusVEYb8CKeQ3JQFaDdTp1TENZzaib5u7pmStszYbGu24xJ3dc",
  "key48": "2NBYEKa5sgaXqWWd1n2KKzxxUGeBiibGtropUUUk4w6NvbPkvckbmGiAgrr2Fq7UDPozgmPxsa6mjcZZ74TebAUd",
  "key49": "JsAnSguq5v9dkCJYJRBTPnKwzSf4eue1UmvVUaHAHPrfWcw7bHrRJthNpP2LoU9zXHBFDpGafBj8xCM2DoDLFof"
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
