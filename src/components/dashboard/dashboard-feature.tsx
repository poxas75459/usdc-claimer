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
    "wpNYaLMPgStu9YGGZRuuCm4ksj8XDN68DhRPUSX7n7zrT2eCnARv7fwtr2XK9CnLrHZbyzxgWe64fDyVgKBsZMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65v9nu5PdhSL2Jz7nwPmBSxLaazppJUsxHxFd71Gr8z5FvZZv3Hr854gCiv8RjmmsCT6SrchB9LFrZexVD6rCNCo",
  "key1": "3eznsE9Bfgx8BeK8svE8Ag8iSzGqyMrGd7WWXt1L9UVmwJeEvLVM6g23fom2HmBjDLXxd5sUJ1iWfmQbWoVb2g84",
  "key2": "66QogHzosn8M4iombatGLP1FdyadWnDPrmXonNRLRaEQi2HG7ciKTBsZMU5vAsJwYJqAaY6YJCbbmZq6TvYvKzxP",
  "key3": "65n6jHDwSZcSctfVZNpZZnmACX1FViC2vkc35mCCSunEYRVkjcixtd9N1U7WrSiQM2mCSyehcNpPEJX4FnGvnzoT",
  "key4": "5wnrc9VxfDsfyEEAkCM1kBFKLedbfr5GijTam8zJL8kJsbDezFUZQJeurmPuFX69VjUEFnR9Y9b18ocP1cCpeA72",
  "key5": "5Zg8Gm7GRpnMnGQaJ8Z9m4LjS9XYmDp8px7vkU4bJovCoquDLfpncMeg5u5ngE1XpBK8EzWKy2VXUkKLFiSddcxe",
  "key6": "5nJ19cYXysV58afUhm9D2WHeYxJau2bWhzQyJnsPSkUzjw84xGUU4XwXL2RisffSBumwRu2nFu4B32EAueRk2e9z",
  "key7": "514SXoLC5RfAuVSEauPhGqZdtuMZhGttC24yhv3RqTvz3LUpCuj9gPmkPc6PWVQqFuAZqnrLMan2Ti2uSvRTZ3QC",
  "key8": "5j7Vy8WWuorXccUYcspDQfJGPniCikRh5Y6nkFjMDZi5V6ZxFmu627eB8TLaqCeVa5m8Q318tinoU51uKaesNtV2",
  "key9": "2oC2fjGD6xQ6htr6VTnsrDetiNV46gUbr6tH9huYeBnecs8SXSNG9LNT2hj8XqJSVLX6y53vPsfw4gW6fsqdFXMb",
  "key10": "5c1J58QDJA8KywQg1kntGnaeMCQhAcxHheY6Fs99bHiAxbHytwsJvRRMmLTRDipZSvhNamewtwYAXSabCJ18LFdY",
  "key11": "3hC39RPEHdLtCgmLTSaxAYSkyYbDdjeXGwzkMnwEXNDXBC2fPymQYHd9Dh9djAcGuA9rPtUq3Sks9y3aMzHPX9jA",
  "key12": "5ZA6eKc8pZ8WqLkgqQBtM5ayU1AqE4F2Vws8sE6gqtcAZogntECCJ76TrEHVwGuGsPEE5duuUELutwf6oiqvezz8",
  "key13": "6LpWrB59ew1S77GAiCtHz1CP9siyiRp8JLVpWFBHjFXhGGqXPSTFXSZMecqeznkeYbbkeqZugNjptZ9xnui3FoH",
  "key14": "5QuqTAiaYg9igkwBaeXP1Ln1cU9GsEvbHJHTxV8GQwqyngC1Y5GTwHwE63MYWVJhDmHonCvWvik82CdzBRkg86S4",
  "key15": "63HFPTU6XhJ3kwBMteLhrD27CFhaBeDqJhhrYV3Mexo5ne2iCNRAkWQhk1yL2w5FYLEaMSXvAxSjyGSmtSop9k9d",
  "key16": "4u8gsq85BzdcLEfNGXtC9v37N697zDv88fiySnTa2f9cSNwFD2mTnHMn9LYMRuGLc1tBE1B3gxqqs1JD4gbRoArt",
  "key17": "42spnq4ARBii1z6YRDCr7w36WZpXztYnyZ8EYUZ9SZ4k9VpEdScqqbsumc7i2bEu6tz9R2NaMxRgkb4eKehmpCNW",
  "key18": "2m9bE8cDG6c4mSG3NhijyyCXn27pg51c9ZHf2vc21D7BP9bxvoqMtHDGtTWm8yy5asiSEpwZDDdRcXw5xBoaKUVc",
  "key19": "2c3QGYpmyBNbeQ2or8iSnf8CBQh1aEUewVevXixPzyRTUzi7pqFXHEepmPtacMRUdfumKtbwJc2hrupH85owF4Mo",
  "key20": "67LGPBHU2n7QZ3irxQgkecPHdUdHjqwUqbX6cDU93XJSJCqQ9AEfrqJsrAc5x9yjamNsL2yddUXZJK7oYyT24PYr",
  "key21": "2GFTdJUv9jAwri51cmPjwFFCweVxGwHq6vDhoJNTutAhX92SWUU7mt9jXVx5hvCRYModzoNfEUDGzgh8bAXi16rR",
  "key22": "29sZTSDv4bYVXsoxthh3xjxenmFp8Rq7dzukGWPGV4tsB4udbY2z3N1e33GkKCW1QsYxtdsSsuyUzDNcfnxvr48a",
  "key23": "2EkpXERxC9AQF7bxXL1JNhKECqKvzVUG8SiiWNZyWrRcgbDBVT89xVnTZm3hjcApFfCiDTZiDtc4JM6r5XEidcMU",
  "key24": "5Ur41BC5ezsM7hMK7rRwZSd4LytJ8u6rtWeRMEbdzw5fRWa8Yr8Tj4ngXsGwbcSLVo4wLCqsfqfJmCFMq5c8oPLt",
  "key25": "44zJQKwGuKyZCnLiwMkWS199vTR5ovs7ExuVMjgUKwLspgHiZV3B3UqKbjkSRGfw1irTG9ARxbKf6GA2seLcnwJi",
  "key26": "2wFb65ejDcgjo1Trr7DBLaGkFTVu39shbN3PWJs8NVnVYZbJN51mKTK9VkRmJmSZv9cmrRADnZEDABLoH8CqxgR1",
  "key27": "5dpaYbNufrYHYfbdXLPj2ibSnF1xrC2yGGp5A2PjFbRW71V5QEuBr9PRVwGx8jJdnxZfuKZo6cHC2Gmng2GaHpWW",
  "key28": "2KiCx64D4tWE2rFHJ5oJVXPv1UGXFerTi7HC12yPAH7cztFGxFWhSryYaHzPesNumFWRJ69qf15HyyKTuPgybQKH",
  "key29": "WfKntmAYj1PQnztAsaTMqFEVKu4AM6zhANYn8wJigEwt7r6fHbwzNY73812TUHN6cje8sdmuvEUDqD86PRwLXYv",
  "key30": "2nnppHe4BpyhJuEWXCTAEzZL6E2yNF49FyfbqWWSDN83C7HEVuR7auFdcLJTSgLtjYRmBT3mj4NEbFZNNSZuFT1k"
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
