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
    "3qfZr8gXq7aQ5PBvNPTFuKXX3Dzrdsm5q3xJj3LCtnZDHwVBgLdwDBnTiAKKFpU9k2u9szzwevNKzqnA6sR8eMh2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vChmZP97HxxLvXXhgRDf1oCZkEgt4dYKNk4Yhwfmkm8Yd14Rm4wMLyyBVLyWsRjkSsf2xtdxwme61wGxA3H1YjV",
  "key1": "XVcJk3YjCBBpsB6kBQKeSQrxFxwck8p2biyLD8K7qr3BZETckppyBks1TYDaYNvT7w8WjYi5dc5vHTTuuctBpYt",
  "key2": "5V7s6b4wTDUZSEtqhiiA5ehVR171psvp2VoFTBX3xYdf1nzQZNzfWpzTXgyhCgQqevLAra9KPBAYrKWiVtLf8wEt",
  "key3": "2jHoPJCLwn58Kx14uau2kWfJJWgRk4m4uK9ScTwDixJDoqmTkEiFVSxU7GmdZSoZCSYA69jCdfFX9PcZ9rK1RSjR",
  "key4": "2CkzdYLZWJm9QoXPfzrCMJ6omxvMbFyW2npGpePrRRcU2YpqZxFEsYfMeE9rYR4XhNvtmqUDFhsKyYobSQzPf3Kh",
  "key5": "26ax1dN9w7pdWjcpCpZsK2LZChashJrBNR193K8cT3V9bSNAiujwUERxCqZZ2FCysQ7CrAnedy7Reap41J4Q1Qbp",
  "key6": "29GL4f3s3H68z1TnXLZwf4g8Etygr5feSqRrBxifLNWpdatY3yTmVW9SkMAhYQh2bwssqAnCBKnzKzkaLmsZifYz",
  "key7": "sTRfZ9eodmXt1ixh87Do52ybWJgVe2QtNzdETzufCcMCGuXuFcoyJ3msvm54U7C7jQVSASv2F3xyjs9QGkhd48U",
  "key8": "5znK2hGvT8XHeHGPyu4rNGihCaVKXFLz6gjhUX1abaDH7pnkd169KLV3e2cpvFJDf3eEmk1Jb8zLCu2b1jpneg9a",
  "key9": "2HP1ukTuUyYaKHpPTmuXGexWPKWmaLQwwUZVnEzSWUT22y4ct2XYaQTCtnE9v1LpVvM7ZcJxP5vME4DYLgRgSSrj",
  "key10": "2NqzBcuLnWAGVG7FHXG1fw6XvB1WGLCpbkzaNxtsGnwbXcEZX3PFWU4tWds13kiiXiuHyFnTj2cGVfK88VrG3hJ8",
  "key11": "kcoAg5Un9CTrmN12zxYyyDESbApoR83KNnS3vuBSiqA96BHGoYkfK4R1bSNP9Xvjd7C2atDhssAwz1pXyDZStco",
  "key12": "xKTApRPsNkeZGon6zHFPawzevHhgPFFoHRRbNwnVE4emWbmYEuFAkG9gZh7p21b5RpjVhE5EzA9WQg9XiiUYJiA",
  "key13": "24HFhMdXr9vwSQ1xCvfZjhmwbZqLdEMESGxMw7ZTGfNUfEedjQzNsKwqK5zxtq2jD5RLbWhoTNRsRyPa8y3vUbUH",
  "key14": "5kEL4gL2FY8nKRkzMKp3iJfwK5BE6yCxv3mBdVZBmr5wpC9ioT5SiMLDNz31RrFby67wmkEQCa1unv8grTdVyCbx",
  "key15": "418cS1tUDvqVBgsTEZuvTtFDMAJpJAkauqEda2buZ2mvXtkEM8zUL3DPXpMWbtPJB8Aq8BRmCUY9Q5pkvWrpiRQG",
  "key16": "27JZDRU6HXwSvuPQo64nZSHLS2iuhieFZsL9VH9s6xBHbJXgynhGoJcLLhzkfEBYeaX5kgGRuhQeJRXFQAzssESk",
  "key17": "32xNBgsj3QQ5hhV5VFgWpx4D78u2YRGqYnZdJw93vZw3cWewZd4TkpPLMM9WgtPyW3pEd98X9NJNX7AvCPoiY37L",
  "key18": "xy96z1S1ZxUqA5fSaY5FKDGasKBZwaUNsYyNfxYSrM1cHTBRriebmu9VV9ugvGMCnLid7L28nfLkEHAagr4HNMu",
  "key19": "KPH2GL74NrYBLhC42KKXjUNhw9cU9Z97zRCyMkKmLCUJYpbcc87SFZpVtT6M6Y6Q3f8XxuLyH5TaTNfnAnM4bf8",
  "key20": "25CmDQgst9AY9DDVrTWuPSXQLeueZMk5RydWbsEBBdnhAWW3c481BJCPk5zuptmkTtYk9J3EaQaG1NcewycgtAct",
  "key21": "2QYQNp8tAkJDGY6CJbCU3jj1aW4ibnE6N581a4NJzAbdc2wUm2mF4R2vezJeN33Pmq2aSRhykST5LQc5jufrJiVx",
  "key22": "dAU4SqeACBBPsHskp4wTuuqXfnWW3xYuVwTdN1BS7xcWh3hgKCj4Tj9aGWgvJb5i2zybABprMZVCkavqChefyte",
  "key23": "jQvy5FnMJ3fkb2wEMLRokJo1Twixv6gtnx67Xogy4t4iz6E4xB7hk7pzcWwbXey7znVLJJeuLZfVNtyJKtS3LzC",
  "key24": "3CdFWis31RFHD27bLtsfn3yjsER1Mu9pRfwThhbSEYHecb1dBtgB3XGFHi9srfUxEHvUyiwAPzEK6m7MHa2cJXXk",
  "key25": "mTcZ6dwQdJo5jaCH2M1to5rioDmi532Acop2o3aiCYM2noiq8DehMejwkZ8U6aKpjhmKnNb2VUJEzjuJsvmTyL6",
  "key26": "56BEp9Y7muWPiSvpJmfAP9F1yWRm1n8ns4oZEFaYdd6wvdAotfMvDMYgvCTugu6Mgsx3vwaiZW5PTAww5ZDQEigc",
  "key27": "3eRWN4B11meju2dypVtE3hQaPA28c1ixNMbzuxBvPCd7udmLNxBBSorMbf1fRcZjoBqQX5DjLhxUfoN5xQxBmVFB",
  "key28": "PPJ6oVqECydL4eiyWW6cxzYeidM6XozpVNHyMGR8rWxRkqud5hRhce7URZJX2UVDJtswFmWyCDTMuA9skh7ei1A",
  "key29": "3XGpsnXH7nqB5VtbvKHuxkXkGNefMB2WqB6ZUjjB6E7arKEjiDqpezbqAuSeM8pX7FGNLW3tHTdhwDBkoRUccKcE",
  "key30": "4B2qXs87jaRoJaQTwQ6cBsA358EGbUsgjSmrjF8YrTi4inSVJjJBHLYtXXCaRqSvn5qSdpthGT1XUaLDC9ARHGjp",
  "key31": "5a1C1GSZTkY6Gi259NVLmaW4dHCyrzHKova1rTLV8Syoor7BxfEUKn9rk5SM6kg66c4eDB1HTVZWrMFzm8nCcV5f",
  "key32": "2cPSoXo1cRBvM9k4gLXJ2HV3NzyKJp3iWg2s3Yu8pZeLbe4D9UKsESwPRnMP32boXJBjMTkAFwwsk9uHVwq27d7z",
  "key33": "QpfZptKnBgH4zJR6wKV9ETNW5uH3RKMyAa8fgFYZvwJSCBiF79n73dd1wanz5nxNL3rKNwK7bZDto1kpUNwrKok",
  "key34": "2YnsDMYkafhbGKGytjpJYeBGNyNc3mwStVWLJKHPkPUJCNbQnKqqzXQtUxvv9kZTJA62TqdAqGboJexYGDUwEHkW",
  "key35": "bZ1cM2pPN1HDkzMZeoJGUC8wgdkrduY1P8xUCw624djiDXJqPT8VBtG5EqHuamLSWGCbso9wh4csijsGDgGFeWV",
  "key36": "2tCGHF9zjVwbzPMw72emFQKboLugj2JqGJgzGRdb4xSehQnS3knag52mUKyxxFR9yen2HkkQ6yBMd4JcaGVqaS1x",
  "key37": "38R681B4m6GtMX7Ft9poR2cj2TAmGJw4Sxdu2Cksc8ZTfQJSm6gjDhstUCX9CCgxKPKpH5pQqdEp3T14ZnGRvzaE",
  "key38": "5wTYSuSSLDHkAczo638UWrh2QPr9BAkMvuPb9VY62rh5445n2GyRGCYahjVYRVxByMdJqKiEs4egZGC6ELcHHBr7",
  "key39": "3WgRswp3DgzvtFamL4c5X84s6pX3TBDLdNTKd4ZNzqo8gcH1tULradGxabjJ18dd9bSQyN7BpQN3zTYJh43t3esA",
  "key40": "5xGD5bbcFpetsNbaGX2GJ7YRKop2RQWppNTY4cpTF8QF7CEBQuYexq8CpyGWf92J64CPLJPSWEvu8rTBNiaobjE9",
  "key41": "3GxJXus2PnQenhhZoqWDHxBvE63FLhxs5yR6E3BFqqsceKaPZSscWuVwbgatBcmQjWxTrUH4cBKgW7tSrducFaTU",
  "key42": "yzQxS1vhemPiN3wvJCDmn8V6v2Hi844z6Kh9S47bMsGEmpqUE7NDdZTakdsoXjTEryQbNTkJy2fAYHNXiXeaKcx",
  "key43": "3jigTjLuNQFSWkC99TKyqTw1evmjRrUKEZKspHG7MhKgniDoTGVyK4S9gPLzpuEhFbpTPxpHEhd8sLAp5hJe4qvL",
  "key44": "3BHhi8jMt2e8m9ShGii6mAiAU4EmDZBNLvvEykjzvkxeVcPgyX6ydMYWtMEmULErETBDk5GWnppmbs2HosBfquzx",
  "key45": "3cVB4Ue2vp8f2CvrKQoDhzoizsJrzXLx26Mn11Nc6kYAPSn68HKfnXtpDRvpEwgDFV7MmiacJG3MGWMUNz21xGKy",
  "key46": "v556Bx3JCUmHV7mgxu6UshT2i8YYv2U8r64YKTXC3WbCQ8EvSLnYtf5HXiBvu64nkwehoH5bMEgoT4UmjV8rAeX",
  "key47": "PpogDo4qddppNTWxkLLvNSELBqkD63ZWgGLTvkQ27tyb8xbSWcRrCWHwnR8WbSuCej5pEWjYffwJz4zewS6hz2Q",
  "key48": "21D8yiqEoghtXqkmkAuvKDVY7AZYdTL7oBiJNz1mdRw8tfvUuYDf2zCA5zUGZHm6XvkTVQB7aNWpQaEYPP9trUwM",
  "key49": "3XotkPJeebt4H5eupZsMDbEQnQaUuEboai2EM7oxkxozyw1QWm48yA8qiu5vYbbeRomFc76P2pdYEK8bd1qXuKiW"
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
