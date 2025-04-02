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
    "4pYCJKGeiP742a8TGR1nrW431YdmZogZtaEXKKKiNncviaMqDVDymNBCX3MMMuJQuGQjPK8KAcQgQgPHSUAUKyyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vdo5w4uxrm2nRUVQxgsASXjZqquECizuVxJNdukqXx8fDriYx5GoEMQ2NBbhUw9Hw3XHAd2sE65wLPoJ9v74SrB",
  "key1": "2kankTGPWZyTyV41KUSvxT6BaAh5Yfp6d2j4FFS265sSXSMmbvNeMGsdctaNC1gkN1Kfo5eCZsJD73VSRXwJWVjj",
  "key2": "2Qn8dAwV6bbrVZM14e8pZhTMynuqPuT7kAYRtaHfV624ht7fnhj3yhkCpy53gyjMEedTGSjNBgY71muG6ZhbHoxv",
  "key3": "2AseqbjoA7MDDvt7CAdmnPwppAEML1TnBhT1YvWHHbAcyyQmXAsq6LmTx3HJMa7orgkeJpCdnVHGJuULuwo4y1Ja",
  "key4": "23NmfM8hYUNHoaDMET5sjPPiHBVpJbyFSdiAkymSrVwbEZEPhH7KAktXZS53mKCeZ3N4NZz2SDiWzqRms4CxRbmb",
  "key5": "rveLkmLPVm4gC8aEjTwRHeTqGQxXFYPpT3q7PviKMR527ESSKwxHKGg9vmpf8BQhW6wEWYU2VhnHmExdDNytt9X",
  "key6": "5ZMfwgFwfSuDuEZGMr6XZmJ2BWipn8DYYnr8g7D2RqHxXfGGNS3yd7BodAobrbxLGjheph1XWubG3NFdVB1zNPKt",
  "key7": "2vnWhBgtgiqvYERvq7i8ADcKrtTZontDPS3Msne5NpxQnjn9kdUjqbzc3nzUsgwFYoLV1MpnXCtvVfEJs2aRityw",
  "key8": "4TPNBndiqiE1jNAH4zSYFsLmNgFCRhPATZEU27LaPLvnemLp5gzjfjmCsqXghg8k2THbMtEbPUGjRXA15DXexPXp",
  "key9": "592RgSJ6x5X65GkMktdwJ1LoEgG9Tamy4b1Y7rnsJgV3dnEQTCergpK3ztjMCZUgwiQJ3f7NLXxhFTRB5kT41XKx",
  "key10": "2DavT2qoqntX5xPGAK1WN1JCGxE3Sqq5Dw4eChoqNzMv1WzyNZxFeqWYe4RZV46A1bvVaveJZS87jiRnEFKJcQSZ",
  "key11": "3g6N2b5Z9FE4s6MTPwc1hGepSstRyuUR1hQGLS1JKPPeZJguYAJsBKChfDPebQmRZcWdX6iFjS3Nzt72z8SicCTx",
  "key12": "TiXbKo4Kfr6GwKGdxc8WaXt5fJ1VqyjjxD2D32QujuYGBFyLqpW5cbn99JVExaiE8W9SFQ24ZRALY1gCDFEF515",
  "key13": "PoAg7MTMWTv8H7JL4YuSLYmev4hC7983var3BmWZNjucetYPwXnVzT4UTu4m35BNcrQYeKKSd7Y92bVKbBfyRo4",
  "key14": "Z3caFaHNKGGqdAYmLoEpxc6iwHSp6EEdVJvWW2tRj1xvEYEZoKRaUf9dSXfxsRFFySytsRk7u37xWUAk9UfixCv",
  "key15": "4iqKhKMPY4CLu3hSxNh1HxXPYxbm1sXr5cBy6n2N4GTTZPESFWgF5pjFaea6ehcqXKnk6vtqPux8y8VnSYpjhZcX",
  "key16": "4uwS75cZXM2Njrqo9Xd9nZ4c27MaEbQBEGjKgmFCx1h1nQyxZESvWzu98FLgyd85BCRsKhwM6Udh1rS2Xzkz2Wwr",
  "key17": "5GxF48Rrp3QT3wMhCHxshjEPBunYE34bD74bfZVnFRLSNMP6iBgKS476q7nfwTyoxckF9SZcNLAemjJpgU7FxyEx",
  "key18": "3VXduo2z3C6TdH8PebGEwZjLhUBNcVN6SeBcUCXU1SYQAasHE3K6pxLecqsirjbXLGnNnWK9kK7CC2THJQu1uXGY",
  "key19": "L6oNarBZ8QfPN6FPtoJ7EGVxDzqPkF7XemVsFXL6dDizJv8X3ceW1MenhswYW3CGfGNcGYaxNyBoL1A5bhVttjC",
  "key20": "4vJDUthBmhe2zoJA1HLZVSScSPJdQJFUQfcn2kuh96urUswgrnjhQC4ekhB9Jvkf4GPuwRL6n5bBh7yvBPXT5oz5",
  "key21": "5wSAEQcV5L5KTPTZdYw1z5djPwFt4kWU9drmz8fc7CkE2pU16hPLFjqk5Fs8xb9RRS2AFYYqxEXoa71u3q2fhGi9",
  "key22": "vA3gwaQ9RU7hoXTuEx6V9BxKE7HiuwtMF415GfMgAsCzTJCUmS9LgDq2EXrjfTMeaoakQMuQGXAXJayXUPip3jf",
  "key23": "34mvTjzPzJijj7DmsV6gdyqkm1dw3v45L64QyFNwVjVv2ZHTxx5416sCvS8SEFR49WyZLvmVJv4CZBF5uTHJGcgw",
  "key24": "4Wj8F73gLVMUyRCLPu7PKZnC8FMLt6U4buMbuzd7gfTKmHU8hEbSzEcLK8di6BqHH9FG93udwwHkQkoBcjt2Dvmf"
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
