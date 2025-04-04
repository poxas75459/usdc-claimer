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
    "2rFpqMqvWeegw9m2kw3gu8qAEivb9pF6Lgqvm5ms43WagqfNkKbcFdFgvWhFzybLGiViRwTi1p2L4zCfR9VTzCeA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hQswzEppLZmuqeWbbyP92kKwR8QUnfM7hjcU4AumutXXye3dNFhxq65tEjynsN2npvFkcppHABryVu3ceCWvzxf",
  "key1": "4b2hFpgTGezXYfrTaUBK1K3qYMpZQJCsVEh7bewCZLWXiDvPhAPomd4uvqxkqY8368eqS1Qdh56idoS6nU89xXea",
  "key2": "5q8LTZ2fdhx4Y2MgWgiNB378kFNbutTVS5ezJQceN6yzVYRfuDdWWRmagMSnTPDZYWyqaxBCPr8v4X6NJeiqpUdZ",
  "key3": "5BX5m7qFgeMnk9AMMx4t42TVgv5i2v3WNEPZozDGyG7gnQsGUddEGvTtd42ohezFkkx7SbeuiRggj9VGmcxizAHf",
  "key4": "5mMoNVJcLfwDGvzRgDY5xqPJVchnCV7hrAdocf3CJWGMy5bxM8cBvVzhfAFmNDo15EGgjgeqi4KjyMLQZoTiResY",
  "key5": "2FQXry4LQ7gFk8dj2CCv1AhRhhF2E35K4VSUrazQgCjZARSrY1LtfoekiomgFDtAdjYjg66DxtJwjMTMvdwf4Mtt",
  "key6": "4enUHREnNTy6KtPEiAbPTK9QekeAenRdzGruejJp89xcVKZgbzZeBz81ZF4tzipypLCGBjA7eJ3EjRhikwoS1NWq",
  "key7": "51fp29MhqTdZXA9rwYSWnDUseh5Xyr8gevAfRt39RzSJTsYpEyCwCKCKHXnESDnHYKPpkzRmN2jS6Yzdix6wxVEF",
  "key8": "3ErLPCgLMjTqrFuGHgCKK3xW71443uCsAXjjZWXvqAyCPwWLSRM7hbySZYeD68JrV3PkB8do8YznuUYk5TvwQMCq",
  "key9": "JNwRanX7t7FMCMtHCqmVcbXgcxitgnRqEvxuoxX8Fk1Nv8pPETj4T6oYUY5Zm8PPXiYYGbYmGCSeNfUqKCKfnHb",
  "key10": "3CsMixeKfDA4zD3DDtphJungdgugVoWqqvhL7akhYpqTqVSw5EPvczSmxdQCpeYiWdSvrY4zhhHbGqpmXLtFeENd",
  "key11": "5Miozj68Wxy5EXz9htEk7GziA7LcW2EhJKBtA42A1BLDHaS5L8eKzfcJkdrQAJ9io69drb9snNRRoKzEgehCbgq5",
  "key12": "4ryJ4ZMC4svqudR42zAm4aMqmh373q39vyubYJ7JmBRDCd6Jac1d2DPv6Ho7tzMNnmApEKxs3d2TpNE55B2D1Ld6",
  "key13": "QVrkV7zqS5V91vvLgnCKg8WoCKneZRWr19cYtdKZ7QiyHMczDabU5RDjaFnN6jtQ6STUFvvovQTzLqAqHVb3X2c",
  "key14": "3QRDGrZnYMQv9gjwr5UKX6kzTU8PaMF4YAA1SRAZ7bAXnBfWdWqjAMFXG8wZ5Wpj9Z59qaEkm4AT7GZyGTHYeoTE",
  "key15": "imHa3xfFoDRMqCJ6BrCDCjSCw5rNjZQuDVmgcvCvxrcQYkKe2rbNfiejTsTCJr8r2iBngtr9BLyXxfRpSp3Zuk7",
  "key16": "4hJPm4bqBmgyiXCqrCoJP2wZdSrymaDQRBUKXaBqYCkpEgSsNmfsCmQhah4paRBoCvesohCz7gyxAkAeXRPUnYYu",
  "key17": "48J18LZowaucdEiXB47SjMxu54zZr3FScDpyNC5U91ASuSC91mvXMzeMXmvcVUqaL6ffkSFL98t6omWXX3b2ANXm",
  "key18": "5WXtPJ6ZccqD3Lt6kDWa387ZLFz1wZSyPxgwzwAo9PCoKNEjRxmCUBR6BBZjztQ6W85FgbXketBpwfWAPDCNeeTz",
  "key19": "2DiNAE92G9YQv1MLgJLy3yUBLKYsneNSqLt4ZoMUsDQLQPN63aZPXXRKLpCtFXDFXDGpNk9oUDhjuNyWbQBNNCio",
  "key20": "2mJxGs4gf4ecGBWDCXiavRdZvsoEKjfmYRGcSZqvt2zPzB1WixaNQsdN6KZFNikvsL7j9j1jH5EFABDyTSV5mMSw",
  "key21": "4KBe9ArbhHaPrNABTvcRvGtHp2Kq4x6ToTjQU4k2RydfPXqfKTqwhu5SHrSFsWPHMkcbMy7NsjrDtpP56XKckhCX",
  "key22": "4sPysT2Y1qdDd3ZPhyK3QR2C5igvKzEtjnbA2eq8oVjqomWbw6ke3pZmXDDi5MwdzDe7ive5tQSe65nxFpDTCsnj",
  "key23": "646XGG4wP6Cr3jRFdgk2oSCk4dR4vg7ye4aqgDCr8bK6STJB3miU2gdRQEe9VEeFwsAMxTHyAjvHewx2vsyPj1tE",
  "key24": "ohfiyno1NTMqZg5GoP8zTU49BmA4Vq9xUS28MD6hYdiHDpwiifMfFGSYRdiF7bacsgV5DoHAkLcFTozWJoBygfx",
  "key25": "4XNLh4wBBfLfTTwGk1vxK4ydHNZDKSeMCcXENhmCULVtfUFbsLrQsCSR5nUHQtnPYUmxQtxjPBiueqBMkD32NSnr",
  "key26": "bDKvB2roDLKCv9bswuXek8M44MtS5ScmDCCd6D9uLRyJxquPyW7iJxU2wJ4Jd6RjkEwpQx42QrhPse5cJsN1qY2",
  "key27": "5c9gzUNTakZsnsoZZde9eUqtQvfTVfktsJ7vgXkv5bS644rga8Pnrs3fMBzj21BvJcuZH98h84aheiASGVn8GV2B",
  "key28": "4Qu5jn7ZvScP1M6HAf8J8i8wA9Dwne9HFHFEwbnDcpdpXtXm2XUoECcKWPRah7ZzfaMryvwYrr5VDhKNxBgGrWPF"
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
