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
    "4E9mqpdQiLFuwvAv8L6xPhCAxkGsaZJqURwiYpPGVDtCM3BmiWHcrk8kvpbPkxeFpNVW9NTT8hRfNTcwwZWwhYFx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "akpoS1HXTD3KdztrBKRnZrTbciddJzWnRRvyu4A44SEwdnTcYTTtz6PFQD1pFcg8BSJosj8hJZHtZb5XbnLxEYG",
  "key1": "2nzHRbgWjJtW2GJ2mr2QpoTPXtr2z4fo5Le3LrvDZf9AQ4WoJTC3QiGzmq5Hg1yvRpsxgwhSeGHDmTi9P9hMY7kR",
  "key2": "48sNsV17a6uMmbMY6cZi84GGptd24xkx3Ks3mdRu8BHJAeFhkxKmJrEPLze4ihCTNioGEYBTQPHMppasbVEQrk9Q",
  "key3": "VfTboKBg2td1KNr2BkiUQDQcB1WihqNU3ynRkEECsEh5FrQJDhYGyUWL3fGiMt3JSPauwFK3BEQtrm4QmcEUaMS",
  "key4": "dPYNLJZwcXfFa4CseFi4bMSpieZi6Ue94gvjMbTMdBPYPLG4wAdQiaG51B7J2eXBPrho8cfv7EuAg2MmPUC7NTy",
  "key5": "4pj9ZbnuXM6dvNmvaQFiWWFEkuELyzD1L5yppn1Emh97WynqLEjzpaj7pWXtbnmGFcPWGaKYm85eA1Enjr1xWRCK",
  "key6": "keLGwh5zTA7HYbq79dYVXUd9cHLgFFojbQMhsTso16Yo3SbFJLaQ2VyGH6oRZjpck8xRnwwbruwqDstEARDsF5v",
  "key7": "cAaz6Rkfxp6RuHbuvW5GRUTdoPKjPELsMo9aYdzWroicPN7W9qv91iChu3qutsiPuVR8DJkUSFGD2RhhWifBdsw",
  "key8": "4YKMyTQK3zBoB9Pf1oYpV1yPWm9u4hDwSa4jNpwy693wczqfo8b8LdnvKgjq3JgbjRJThPBaV2XKDMmpnUjFGsHy",
  "key9": "SVNt3RvF2APiozpC4UWvrydDVUJxcJACULFXVfY3zRzRQqtNBTMs8oMXiyKLAuXSf37pemD5KC7UWXghhJTBVdg",
  "key10": "5u9vo6Q25woxXhrqwKS1JY8SA2PNmTWDrGjBMv2jtZ7hymwwUp1GxMkp1xSuc4aHYgYLHgHHCxF5EdSWzD8fxM3i",
  "key11": "5uK1Ngx8JpYKr4t7JwqA23HGvF7DaJLcewtea2Z378YFcXMQVRuvRJVrSsxSmnDHDTwgonvQee9LZTweffRrxn9g",
  "key12": "2zHic1bDeSiWXDnumsWiZuym72zXBXa4AhBsmLJzRuQfU6paWQ6zF5jC22P4QME18ZioqnpmbfWNYCdK3SVasTq9",
  "key13": "4PmrUmTxw1iH12e98uWGpyeYG3wqTM7c6fnPxewWhZ3nZfv9M6jfgWX9PcyHHCX14rAHiLaZYHksPfwqw7HoEtNK",
  "key14": "61XoNze716MsyB1G2fQs95jhqaiamhJS1Gxu8pXazZ4iJV8LdF5Uqynu44FPxQAjtpwwJiUoS3JASsVvvbsBK14K",
  "key15": "5octvbhywxLMLbjwMFAxfjZfZpw6BaNwH4i5jZzetSc3e2Nr7EazaeZxzrmyswHHRzs4o89CP8x4w5GWZD7kK5PW",
  "key16": "3gKm2vDw5y1L71eMwpNw71gFTESAWy5vLKMt4K1yz9jFGLvD2NQwb9jdhB34d4dmtAryn4CcTurbV6hjGYxCVLj6",
  "key17": "378Kt6KLxjCEakKyEcHrgtiqXFdYGzJ92PhtGzHV6LDHgr8VpY2tbxPkgiKmEw3vU3p6NzY4eQgpD6cmc7aLP4E8",
  "key18": "vwcVqQxPgE2Y5nLK3oSBtuSanDv85hbgE9ADp5mAneTqLE8qUAmbC8x9GriK2otJ9gV2QhXKww5d6mPnVyRNhV1",
  "key19": "3ZQoNVCVGC1ayoGSjy9SRdWkqX5rnDKY9WVvJVq6pZnPAdEDWw2gHkvWB58UdpVA9BpT3WoKd1gjjkw86ah2whqH",
  "key20": "4bzhRJ8yD74bE7MegbwE4NbM3vZpoqfZJrJHaaVP4NibQkuV6ypHU7WFKXVpuCKYGjWDiEZEbHXZojrzgS7DKrGF",
  "key21": "ysQcXjb8TsZ2yw9QGcwtMSYjkSv9VWFhTK2YWCuwSjcC5pbmEkA5rBTtqTf4hFw9zgrynM9fEzpMAS723azhmNq",
  "key22": "35ZKzmF1e9S3fYPHdV8vXocQdC5yWyYRRWYoVQFRaj7sDSzpKszwrU1AQVWzJ6gaqAwnVUjtFBa8X9sVTMvqvNCm",
  "key23": "MBiLkNjYh5Uf64J1cfTyq9QFoTrMoTmoHc8jhkCVn7b31DFpiJZQLoN2dSTZwbCfL1pGpB4fmSx1Kry8wbFL84b",
  "key24": "cu12UqR9spuwFpiRgYD6ZYezG167ep9XKXhhSneVj9ConU7h17akADu6P694BEduD27Ls3x8WdZqU4jWgiY9RKv",
  "key25": "5wTAifgbXqGJf5ebTUymdSBpwJ7EYb5B1awM1LuMJZKesrjpjHWd7u7vqUcfAb2yYP6HH9t34oELS8BQGWXauist",
  "key26": "5dDEfs3KTuucsVw2EApsfNMJTZ2tuwnkeGeTYJSR18zbqJ2Ze11akK2wQwBJvMJsfU4Q4CyhjNKe16mKS5i1rJji",
  "key27": "2hArj45eWV51d5KSFX6VBqxoWnn8PqfnrX83eWSQTGM8aYqcV5n38f8A5E81TP9qFU5piA652DxTS17Bxquxu41R",
  "key28": "v4FVipEUjXePy4S7Rr5eyxM5XfbK7W1HFQZenKC7HWHvqLi2eD4wgWW2oPPEWFjGFGGpSUQ2gwGjvdYGUHKoh9S",
  "key29": "45Exf3PnF6wbLHaTMv7p8N6xChctgyh9G8nrdeka1BAwnnG86UVoHA3DFtXx2AwTN47SnRgGpuKHcXqkaWJRedFL"
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
