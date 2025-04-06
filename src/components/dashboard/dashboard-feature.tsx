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
    "36kuwbHi6P9T7ynNexAHXFwP25YLaiByKZs33bHqjQV2fuiA6A6LAAt1Yk5z7PprjLTpjCGL4k347YKTsKp3JFPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B4GQkT6nCxtHitYWcxFo6jQYKqYuWnYzGLGU3nGxc8TPCsPsAWCkt9sBjToSHqfHNMV1Mt9idu5PhXsALR24YzL",
  "key1": "2oUp5Ashg9jY8kA4EbgrcdRiFAc6UfiPLbTozoehsrCNJCJfB46QizjD2aM4kEx6kCZwqSdS4Xpre9onCXNZnBSV",
  "key2": "CoznWd5Ax8o6wyYAyWQZ5myvB1sdnFstZXPPUsRVEqvdegh7DSifwfUdvoKTaEjst8N7BPwJcjNC6hm4bYdZ5hz",
  "key3": "4Cy88x6EzXgo3xYLjApvSGNoTJCNAKj68oRSVbUuPXaMyS9mtJrhN8z7ZvD48mnTqKSew21fjy12BTmpFN9DXhMr",
  "key4": "KrrJTJmCSjJhLFFcZAMnq8MEhhE2JjBWXjHMWxuxniBHBvPDHSd6e4bRRAcmXaXo4qQuGMNYGnugkVauHE2g9nz",
  "key5": "5WwhyC6DLhC81XEXTkSzMdFiFTpToDtYEJR78LVnLbFXqRZAcy1PLUCFeTFzEGNTHjAYUhKRaTPMkZMzhE4N3cbp",
  "key6": "3L3tmZe6Y82BWoXDH4XAmzTek4jwYV6i6JuNV2PLFq11rqs8gt2KubAoXWQr47tzNYqx5Sg5NiRTzxrdLASp9xJF",
  "key7": "54iUueSL1t1SCdFHYb9tgHgd9ZUXAte8zB7Pw7XWoYG6to3s551NtDTDBByqSrXRMagyw1V7FtxcL3WtJ9t7jeEV",
  "key8": "5Xq7BCuvMe5UqwD5PDe88yqdJzvXt2bZQmR2cYZoYvBBrfGcCAFfELBp9PUmzRxvGu553uDBWHCyM7dKR8TgNaPH",
  "key9": "5e8pyvB62v1vodFzjPAc1taZXJqfxGpmtxvSkPAUoJMEEe4SSi8iZHUgMXtPmJuzoMcXWv2NccTqJs8QJr5ggVh3",
  "key10": "2edPcQXxyturwJNYYQTrYptJBbN4cjJojgB9QVoiu1N9MJgeoL9zMJZwHbQ2uSD26AsCA2fmcAVK3f3GvNsM52yV",
  "key11": "3FjeNXDvNHNek7BaUV5ApHc3yzkhWwFqFA8cKKiD8KnokxDzEg3ZmsW5qz8LENaz3GVNUkcpbveNi3DBujUdWDMF",
  "key12": "GXdoPqU8YLWPYvLgod8Dya9QzvP2WyN8XgEP6ZDWpcmFjRf8ovsvyYxmKwt6eGLGfDCc765vaAtxsCNwpK65kcU",
  "key13": "CxPPeHjALC6Kpd8yQoRtfyr9seRchX6TABgQ5jtmKFee2vw9YuAsSXa5XRqeDMnW8tfLmoGL3GcyDDjKSYZBEAr",
  "key14": "2WQjz1C67L2VonaCxFCbGgkqHEgmJTMYn7yUqy6F4MiuCpiC71wa6fcPRF3rMyhmxorKC39TUA7PjeD8TQhFUMaW",
  "key15": "5NNNYzjEJt7ctQjsLvGRQ4Tojdbh5g4k7Mthh5EqKMT5Kev9639STWa1SMhKXhxfsq5qd3SnoQKu2fZnnwwp8W1V",
  "key16": "5k2XgeHamvGJX12wfguQoWC3xLf6DmUNZaBv2zd1JT37JYeVQrACY3h7qBZKYktN1Zu1mmVBjoXGHTqpxZFk83DQ",
  "key17": "TsZ3A6px85qMnNTnGsVhNFuKkMwitvGTkxdVvu7ZngX5iDZdQLN5EQZoPCEssSsqYKT9xfCUss4MsGJrnWThV5C",
  "key18": "4t9rAbhCC9NQn56emTBE9bUWVQwCZyii5F5XhiCuuE1p7esaP28XFs1ZCaeHaVQ7bJ6v27bJb1N4Kd6DVDZAH56C",
  "key19": "3i4USJJF8NKtrebyRquJ8ewUhaUByoUZQv2Jj1ZLPPKmWpRE88Qra1mc4xZ9KvgSnuuVopSA8X6V7fL3w5aQV76j",
  "key20": "65KbaGEfGd2U1t663rkrPvxLwC8BRPbAgMhVMafCCaWjB7U6vXQBghEecGEapbPzu4o4i3kASMegoSjTb7zEgrve",
  "key21": "3uWAJVLhFFux7sxDZyzcjirRLe9yxQzsqa3T6tiEJGVedzdux23NosZGPb8FMpsYkHxFA1faL6xVLhpaSnFeTzVr",
  "key22": "5uuTTLLQfhejmgc9AiQ6W77piQTCdnFoTo6BFHEkEDjdqqD5DKSAjSoC8qZfP2PhPcZSXDLR1NRq7ndTWRH6dvEJ",
  "key23": "3f4SxTDLo9WkHHoaFVpg8YRwvQz9k9s23vNZpcEMQCF5tiPa7Xvnrtn68aBJdVFW3hVbrfB4ob8sNCgADxpTV5b3",
  "key24": "5JHHGjLKMd5s9PLsVi7QzQ888Nhob8vysYkfcUfGDyfwL7uqMbNqMKdLf9GMMy8ebGBWybxVzNNq3WfHyCCvrdQh",
  "key25": "4U6DktJEHG1TWtgP4ZR75BEE7K5M2r2YACBKq8Ae8tBiahHm5UKabB32gDLZe7N9JJh2H7CEZq6ntauLo67j1LNp",
  "key26": "2SGKvJp9STCAxctH4JeYf7Wn3FVoYNJCpY7aXmxnpxjAYdxEHbVczaQurfuL1jQG1QZYdLHPYwVcepa5rrYdJAq9",
  "key27": "61wCheB1Kk9LEDyUmWDWFTZoTEjJBCnnMXNv3QD5L2xA1pUsDFX9TgShmTrkt1A64KJ4NF5MPYsgVQ8E5VzZ6q8y",
  "key28": "5VL4obxeYxpmzVoE5AyUBhVGiLczRQ4n9zsVnf4YMd6Kykerz9xp8xXu3ojhoK4ePe5u7DtJGit5ttTb7hbStoYT",
  "key29": "2KdBbCCrftQH2G2LZsPoctne9ndDb9mkNZZEvpR6kxGSuFTAQ3xxMXp3W2i3dWyoqse2ZEFYtc6kXAjTHK33b4Lx",
  "key30": "55AdTf6ZBFrRr4m5cuumN6PLZpMpj5WrDRQj4EAgPAe2hR8nJtrixzsg3Mo3SdPqniFrhg9PbQXMU5PAQjmMVmSZ",
  "key31": "5PyruYLszTnYgaEsDAibhuNiK7aiE4yxVBiz7ZqvDgbhTGhEW7pT3KLWTC979uXcLbNA26SNrfxQAyvRMZN9sYbe",
  "key32": "MSxmBgdCv6qWcdo5RmkfFF9YBJgt3PHaHzbY3zpEaGu8FmtgPbtxE18XeaRZRPQ71oprtseQu6929KZh5XsSbkd",
  "key33": "34mjuD17HSFaCyjFY33MBJ8kkogEHfKuiUefwVagK9UhUgepS1gysCibXeirrsBcLgQPWKQtkEypB8WVhR1J9pA9",
  "key34": "5MxmbUAePXhKHck8m4YT1QPg2Xf3iuHDunZsttG2wj7qU9JdsZSDduwqida5iPcBcqqZRy9qHyD2LdykzTTr2JhD",
  "key35": "3jsVrdfXKMXSBsfGFP6W6jvCtqGr4pTnLumW3CMbQkGwWCQsnaFKdiAovbeMeTMEgoj4KtCuMBZkqgew71jWAF7",
  "key36": "4KhzoFAQtwVNRDWvTwaoUjJijADpXi75TZVKVY8ZPwpgZQnesEXb8XWaqfn7gg6YGbjqEA6h4DjsfwEzTA2KF4MZ",
  "key37": "5yyGFRA7Y8cNK25jrVerrxkQCSQzDwrYtjAsVPZEZPBhRsavDM6cb9WerAyzwHdeYUhaDPbL1UreAGk5cUFetmnt",
  "key38": "m2XTcuCAC2kgvWsEnKyasdjjxqQfZQfGzfGa9kHsn5m7pLHQYwiKsuLPfEKWReNhpFTeiGjAT36CfH9aSq6Q2Pj",
  "key39": "448p6UnCRQqZMk3yu5ZPVdhAjJaXg3DMWeJyDNZse2QHq5U6xdWoeR6SPsZE5kTk11MpKHF7CG1CQ9BDneym2ztf",
  "key40": "5Bu1DbH9s7HNwEZqF4RhqnFVChk55XyRccF71ahWXmyHLCaL7xWrAyDuqTsSU8LUXXEZJxhyF584bHBc8HUxxaE4"
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
