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
    "4iMytPfVzCag48zmXFhTpRXdAKACvojnSmAJstEpXkzxkutuHWtqzG94gHsmfJ22YC8SA2kRdfYiSgBc44rMfbkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vmmTQXvvpAZaHKJgGFC8fewWHFzosQc1d9Mrkw2tpisZBnAdKjdNkU3DDmiAfLicD3LzBK9SmSPoqTX8pKQSSbw",
  "key1": "3yMMZq67wWXTZJZc2aqofVyisk8ErhEwArMmagPib1GaCgxg4htUi27surpr4DC4LCVoeURrhoT2mJeDbLHJR5Kj",
  "key2": "2D7fZq1xiuJv81ALXi3H3ctm2jcWks6G7ZxMHgk2vKUmTpuH4N3FraaWAq8D2Zn2bVTzv2awmBC2dUifYac8CRam",
  "key3": "4P6fQkaPUdZY5iaszB11JBAZepcHwKtSet8fyckv56WwGWTnKPjFp2UpehNoMnwt78z11UWBgstKiezbrXc1u8HL",
  "key4": "3doZkfau4rvZ1Yonzw7BEzeqtHHNNQJeiWNfWrQKMTnkG3zPWtidTkgKtkz53nTjMbACQqDTbrzMQU3Ayt9NNthA",
  "key5": "M5fuPvuap7fJ3jo52mt5z1XinkZvEJV8Gd1JRu1gpdLURaR9hqdSytCoxiQVdFkyimrPKnYZCx1gEvSkGJmasdV",
  "key6": "5iSL3GVsJ5GvUK2qnCwrs1KxZqP7rXLqBoAaVkVVmMD4CaGQhwL5CwjuP2xLB3Bv74z675H9qA956ofTCKYXkJWJ",
  "key7": "2or6njT8Vr1B48kvgfc3tXcbfuSvVxiz9JJ3QPyBqYVNaXgiGMb4tb4ZMDnvKrAaQVcqkg3iUyMcbCfY9hER8m3y",
  "key8": "4hCzS3JzQgAWytLA4Qgc6UdikHiey5jZpLpxmRMiNKA3fL41JD7S7EnACcdirmuVDdMpWMN69ygngmqsD4DKL8v3",
  "key9": "5ZzX3fsodqqn7mFa7EzNPMu24NKTFbvu4GpSfoZdUSRb48uf9htSsdQDdKeH7xVqwYxyPcqZHnHpWdz5LMv8TLyn",
  "key10": "39FrM1FFWfUFHy9Hm2eFFkCbkGsQAAeUkLaoDZfyWgfPpzeAgCjev3RopVNe3YNtEfe2Sw2Hz9yPMZiAqDouGXBj",
  "key11": "BRv7z64QsZ53MwrvnpS3T2HnwQYGmgK51xbLXTe5yvE6mzPbJ22sw9wG8JnRxj76BBYE13w8FFx6q5QWXmJKh1a",
  "key12": "2MVf3VLrCnjDxwqXHjkA8XWM36vSbADZC6rWpzgxhUmpmscFoHQRw4VrmKBigKdHjKRDhMuF1o1eDkcs8tZYAZwZ",
  "key13": "3CJBXnegjn7ZRzN2Z881JeTAa472FkhMGRMMtWpRExvYK4Xs5ABxVzLue6ufuoEPPaenD8wTkq4r83o97AKrD1Nu",
  "key14": "2QGonQ3E7HpJ6bBvspieYg2zWZFUnUBk8Q6GBu2hRMwzVUwWkkwi44JayzzBLtQ8yZXGSzSeQrLQcuL9m6eDksaf",
  "key15": "ohLB4kp7zKqt18QqxBhcFJArq6vJDqm1DVn53DD8wacdSsUDZVJa2FBToWcVqkxfR2kRKSQ9xrpjJyhWAkvvkzV",
  "key16": "5sbuKrPsD2rxGmBgJE7a3WYnL4Jf3WxJ88UEXnRbkPzTY5S5n6mcUFpw9oMGTcNbxznEq63JFxYM1ZKhAEtCyD6f",
  "key17": "ECTPMEkJVDUPxEHxANhzkHiCFdGGZw4MeiZpESaa3V7NGyPRvWuy8PKUy7fg1JwKAtmWMbdJ2N8nDCFoEGin91u",
  "key18": "3nJRCTXHjw6V5M4ekMBTJfJgMiCw6KA5rRSpaAUqvfsQ38bZNCBYaAonvX734Ubmtq8E5xCoh9ztv82zE5GqSgBx",
  "key19": "3mTcBWnMzfhrtuv2gv56vVCnKfQFAxgK4zLtq9jQcVkeAU6WkrfSyZoQa85Xrqh1Va1izUiJhrYo26x53S4EF9N2",
  "key20": "4mm6v2xsPz6JnkSUQz1kSrSY7sSrWMkxUbrNWLfDwSkVpdVXpE9fxZmgirWz6c1k3Uh8uicWgfW9dEQhq9CbzJvL",
  "key21": "47kzh2obFakUXfnWahxncUh4jGj4fhtcQuXyo5R4JsVwbhx1yAD6DCKzfxTQXVWzrb6hKRmAPZLkEsN6zmRk7Q7u",
  "key22": "34dbY5buJFxuTWNULhQ362xSzmJ3NivwEvYydcwY88YXjEFs7Lf2AJKJS2YuBzo88vavGGd6e5j5fXa5AbVWSE2c",
  "key23": "2b1yx56eMWpzrU5wKJedHcv2JGQeV9v9x4RzLrooS5vsG2t4CLnHAbmAatrYb6mTX8TDePnXGtt2KJ5DTZHg96MV",
  "key24": "3FJzeLwa912mwPyxtWASL588JkhbWYRjHqaQNYAMv5xzT7azKwdWVK8CQcgmdwfwtG7snCqCi4GGy9GDuzrDR6ZJ",
  "key25": "4cEwHYsi9YQiJJsoEjumvvZr34hjt2XwtPEHgrSvV2Gs8tTaBnKGqskybAhduab8ZZbPwxiWMLwh95SBdTeKr7oe",
  "key26": "2vKQiQBrHWyJfU5huk7qAyAQ2JGhSrLJytDvAXwHqmzVcKpSu6NWdPKGpvqSvrwtRZnCDP761CfYDQ4XvxE9j99A",
  "key27": "2XFRZAdHH2AXxDqduGYYXVgQWNf3wqLHogxztwA2d4Wd9UYeLUGWVCHYAsGSrTFiJRzdK56SoUVbxjVEJVdcsiPE",
  "key28": "3EDtn2cr9SGvw46RreJcnxf6YK7kxwU7xPfxKMHCDe58zyxeT7G26mSJ39Y47BjGdFsNMbokmhpenmjE2wrvrLD9",
  "key29": "3UEcGv9cE5keFkcBKz6qepBzuWFJSaAhPjBvkEAh42GsH3EAc4eEWa5bk3hZnwJAbmiEgKhc7pxTphX7UnZNpjPM",
  "key30": "pgwrAzemihcswk7iufMEHFcVqkJsNmVYwxZntkzGxSVsdgQeyYApdoHZWosaMNy8aCAevxAqs3vYA1YHeMW7L7P",
  "key31": "4BvDEep4UVrFj8rpVveR3anLvkoSr6q9aFdaJH87PhBzU86fisKXyZAyAfhbxMHqtM9bmfS8YriQGxPDRmobHDqz",
  "key32": "51WPwyq3GUA1vihvTrsMCfMoShKiPimqLmNby8xyFXEgWboZuWudVJr2QXGaVTdXNkwpb61XcJiH13CWYPpfCBQT",
  "key33": "BSvd3ebSEMy3Y3FTNQvkgthALctRUgCB437DdXM1mp8AMxAd794i3kb8iKH76DEyzTXszi1t8NdjW39ahXVrFW2",
  "key34": "wRNwNgk9YMk2eMafHsWV3EvYvoBu9jtNQpQEqMJ8dqh2mFSyfQyV7WRcCbQSvTo6wY92y2hioC3aDYvzXQYTdmj",
  "key35": "5R93VXQf7EdTcZZ7W4DTxB7ssN1n7jvRUUpS2fYY6ikgHmbtdxyd9iS1kmkBRzEW8xbBYWBGR1kB1cS3hTn7Eyff",
  "key36": "PrigJc7EGgC2wNwiXd43D4pwu1TTC1dFHfju23LjavqTbStwUg5491MMgBuMUmXHL2BqjupzEm1VRzWNEGPfEFT",
  "key37": "51LqkPB2Q5FzKxqPPzhyyG1iGsqSM9hmRatBQWQFsVpjLYTEWQUXUPt2Tnu5wknmexfnjcDSkUSdVynHb8JT9h8y",
  "key38": "4Z4uVsgJqAVQCBN1cQ7fTm6ZirCqbvKGwrTKKqYQR6a4pzBe4AmHy6pzt1TXhzpFKstNVi97VxdSrNLU1VhSvkgj",
  "key39": "2g8X3JfKVSKsuBEhuhMd7ieGz2yW3RFfjvknJ54XojFHimpaX1C3VtfSN1dsPCkAsH1NGGyb6cxUUav4eAJvG1TQ",
  "key40": "5eQhmnnbdRp5VfTyTgAedgfkYwnXTQ29iFuf2s3njvWA9V8GUUJ9LUTyU3GFhqGjSZFnueZ2jq9moQod9NUX81WC",
  "key41": "5Z3bh1ZkdXy4PzpRfDQsPLhbg2PVhiuDEBGCbfwjfrx16ZP83SvATdGNbHSTkox1JnJeTipiY7kow3okZe92ksXN",
  "key42": "2ZfXCnyTpQS12HUXMXS8pJKgb9m91YKnMas6tbfNmET9pR6yrtuejuh49KjTCJsJwtKwa3ZLB1NAVjtxTb26JvV3",
  "key43": "2EShsTgVvSdkkyn7HLYvPZNvsbknTsJxAzudHLM34TDWoCYESiTKJjwUPnA3JH5TtEw9iYrrxZdui6FCdpkNH2YM",
  "key44": "2RxVDf1gABTtD5JVvtei56fHxWbMUZKyyb73gvxtvzduosh5dMU1myc1yGk75goW5GceHUYZKYZDP8BQ2UGbWJ6",
  "key45": "48FVtBYEM78WirERyMaz6L7kKy3PbavuWghH2PTtGyVgjTV4T7kdxZJ6khM4Hi7fixA9B8XwvY62wSZ8mdZ4eaJi"
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
