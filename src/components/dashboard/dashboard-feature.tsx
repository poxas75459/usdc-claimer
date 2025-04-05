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
    "5jFNB1WfowSgi3nuBVCVFmgs5HrZjodSBgfJHZEpV16Y7DsCeYgxiiyf9DdpGsFjxYaDCGNaUGwyaB6GGk9qH2hZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aFCySFrbJsmfSnRwaja6UmvyMAd6XRR3SPATVCADRnsZEqJRMMbvboizbLp8Ah4m48jjKh42XTzD6H7ZsbhGMVb",
  "key1": "62V4cmnXzCAvsaPwYeNJKkX7afnTEwfk2iHTWK9bDcaqdUtVNSyfDdrmwcTGPCBwDgnr5gNstNmxU6YQPuXbLU7p",
  "key2": "4NvzPZUVMSMniwEaiMdVk2jVHvtqxebQCtmxMFTxpZb8pnHhEesqABjcRouinLPRd9DxPE6jHZnoDxHgEKfpSKGE",
  "key3": "rtR8nteiE9xy7gKRWCRD3DPte5H6Vpt6Ln8scTHwBqrdZt1LRQzwKhZCjv7s7RqVVPrhQqGxywLyA9uo6Ms83pc",
  "key4": "C1ANSHs4vRTAodh14EaXzQiPbCvntABucQqVGgf9g1zedJ3LuyQfQppwuZDAU4b5jW5H3YvojjniAk9XJvggkmn",
  "key5": "66rnR5AjL7Dv3cT37f8i97VUqqizrmV6v27MQLE8SLzYL4QHetxf5yW1mWfLsXrYzxzQyft7Fzcf4kRqBUcrjpZg",
  "key6": "4oA8nD3gRrT7Bdtd1GsrzCKJCML6rgM5FT8oLmMe7vuxDvNNHiBfvusMqAJbdF1AyWB5UcimvZ6ATV9mjoWm4Vif",
  "key7": "Ywh1WudeBhWeEhVpZhSjwTqGGr6i85kXTTqHPtbDwsnCzmrKqtNL2UrkgrPD42ZQZY1njzhKT6hmftXoR7ecrrH",
  "key8": "3cwWti6LzzS3iVKngZZmNdbvXwWLibgTQjBZrc5MyMja841kyB6aQbRm7gbwUHSWdYzvWUGk6354dKSNy144biTw",
  "key9": "4WR2cDWx4FVSPfvD9Y9wozFTdGUtfueZwdZVvg85v98AsPUwGvamL6VBQysGBbJrbs5nyAf3Vmt97Lig4C54T5oH",
  "key10": "WUM5n8uR9K3rWson8gRkCjm1deibfV5ZnCNenRixH6fPDCvkViXXmWPjfkuii53WJ1L6pFtKzR9iNv4YcsU1wAv",
  "key11": "7iWDYT4CDAR471MqcdTvBY8zx63fwWjnpozLdVgvT7Kijaq1J7kBNz2vnudg7Uvn37AmQPCU3Bic8GPmUADnn6Z",
  "key12": "61dLgZQmLQg3gDtn5SeDZq4GjNhp2mMCHx8uK3r4J2UXLSskmRNQ53qYhfmnHHJwGh7bs84o8eK5UU3vku9Aw3ng",
  "key13": "38zw4QQunTGsh5Rxbz39DG7q16oXdMLUNj4D2q7njSufK35zBpujQ5kHYoe3zGGfLf2U1vidm4VrJVCTvE4nH3Zj",
  "key14": "fi4VTZhnJKA1E7wmVKA2NhYV8Hma8p2HpksNyHapPGY5goj9A3enmfKpg1iBWxiXS9JBt4Wq3X69nkRCY5Ca89L",
  "key15": "4on97RGmfLvF5XLafLPpaFKfthd2pXfTKDXSLkVwWUFJGhCUJY52vpZep3T8S96FdNzrSBCyLNgMQnJZc8bAi9kL",
  "key16": "2FMh6EethN6vsxnzgPvSKrCj5CQ3vhzGadt1PkUZJLWiFgV92aBKzPmho1s7nJJQtT7PuCToVoBZiudhkSdqCE9E",
  "key17": "5RYDRYXxgQBBz28BuWrprcHB9etytmFQEVA6cw4bNqfXC72kcAZP1RFGUeAtLhHgg19RApz22pRSHzNkFpJezrGJ",
  "key18": "5wuSMoWsgC8u9vCKmpdD7pHK6gDeGLkxKWDniY5YrhBfvAEqFYZhyqk83oYibr1DwDNpUcbCFKbiYnXyxoUG8jyP",
  "key19": "4U4vqGX4S19wifiuTUAF8byPbjYte2qQr3c2ADmRQFNgxzMoaGrEUBTamdsoK7uozUqLJ2Y5BQSD5yiCsgSQZgKi",
  "key20": "5vTye4nhmxR4iWcqosVNDyA9C5JJiigp3dGQ6wt1mpC2GqAAyRJxrwGu1b7B7DRjTqxDZpwoqs9rQP51j9w29FUf",
  "key21": "rqjEyT8oQWq8XisWgTmbbUGPh9Kmo3TptrsBGUwtmL8U5k7vBDE6WaAjzRxfExEJeYXnUkWNNnphTJtMqho5Vsz",
  "key22": "2fdD5TyA9JieeGjaZJGWW3AQWYLuB6UGtRH99MBfnqP7osimWrcoWqYx7im87s9ipA27NHymXKQifcYUkvWe1x39",
  "key23": "4uDs5sgyTrAgjyfiMJej4prijPutq6BZ66yfLRXqPYnR6MPDNnQyootJAymfMx2VYmcDQpPApV3osQFHpNYfDtRa",
  "key24": "3MSqvLEmzhUK1YLfXC16qhD1Zb9z54b34poCJCUdifQMxFk3hch3GAMiwxckS2uLQ1BQrePxe9rJZY9CBGAZUu71",
  "key25": "4duqsafaDhEnypSJEQ5Be7y3MrbVrnwgP1ocw3wa54hTyK8h2sHdp6wqqnVyZMz23YaMJZ6va8bJd8SGhZA8DCBN",
  "key26": "5NdhJVyw2gce2nVYCmsHenn7TYiJWz9aS431s7Mj8jLpkBd1ktd3g7PBD9V3uy1H9PRWyWXsyLwYoh2A4Bg6M5iS",
  "key27": "R87MRssqFHqZxpbkEfAo2kXCk2vWufYaWC5YqufMLwgvtSixcfCHhNkJqPgeT6nStbCNZiZhiLpzc67EU97i8vN",
  "key28": "3H4nVfjh5eh9g7LgBiAbJRS8asjQgPCuvT6fhAH2AzG8Ns5wuxjUqXzTVxucGjks1VHCqLF2AL6AYUCjmkmGvKtC",
  "key29": "5XkKWS756RxHXXfKNPv1YJdBMmMuCUYR31Q2ES2wgyxnZszdmsWWto62ovmaCzZYMH9F7V4jAv371hpyKPWS52Fn",
  "key30": "4MYTfK2t4TEDtwd1pDmVVWPCMcNL1ZWaY1J5WfotH52gDWbkgPQ2M28xHvQhYoDbGywyTFky8Pd4K9owDLsRC8s6",
  "key31": "4C8nba97f7aUKhWgUdAH4M1J1gZKqXZ5VeNqsAjbbks23JGgqr3kjDa7jM5r3YiVzTTwFPQGDXUb6QqZygZuwDEU",
  "key32": "2tjuGukrRtzVXDrkjce69P2qGSPVco837Kjz7CrexkaLGCGsWVvNFNf1nUBvH8fcjBRuujzJYWcLfcKgfHf2MHs1",
  "key33": "38N2hUVmsCaYQHjuqY7dU1yrb5D7MTWjJott3gTgGTQEQHW1aFhHFuHK67ZZqhi4wZWkLCs3MSNFjmPwcXneRb9Z",
  "key34": "2E9XVUDsxhCCnMJ1JYnnkEqLYk7RpmuCMftr9JvY9weXFLxHqkugmKEVcGsxZf3RdsrajTq5didzBh52gUcKyc6u",
  "key35": "3nZqKn2h43FMwXDJhQ6ZzbRVfRUwEWYjHPFx8ro38cFg6DDckpyKCGm4NyKZ7c6Cpim7GZdqrTZQLieFkeJhwFNs",
  "key36": "3gZkfu1Fszr4cfFQUV1W4raNHT4CtooZeCuiXHirw6BAczhf9p6VDmdbKvZwv7ynEChp51CxD4LNuYWpsiYV8ZyN",
  "key37": "N62YoQfiHEAtJCABrPWtwBdZtgh4sPJPMtL2MutY1Zb8LxR64h8Buzs4UhpJUfQXxrfCgFCmViLhR9uuvoLf6YW",
  "key38": "42pwVrpABWTYuoFkUaXPGmc4ADPcoUmaMAxMP9ZBHgq7tQXeG8EMeDWpPJ3YNpVxKp263rYSQUgPUjDfn2k9JDJt",
  "key39": "58VT4qiuE9hPK4nLKEsMAPbepkuS6oJNeLEHaNYDW4njEYKVNDKcqMLpT1akmxiRTX8JUmx9E7HSo8NqUav3cFJb",
  "key40": "3z3pBYwk3ukebDrhzpk3UCX4PhhRxj5wNA5y4bDUfm1TDCHYHRSgwCUSgyUcZ8BkFmeNDuwcVxnXS2LjHhLe6j1g",
  "key41": "2ANiELRjtaDWyUuKTMJEgWUP8pVh6iUnbuaWgV9KMZttexHiiP1Rcr2QcUFvnB1FG6EEiz1Ktz8f9fDcucTNnp3o",
  "key42": "334czWjiRQNMoQ7K4yfSmrcG1qgxkUzqrVFK5jY73Gsc6BbZfNQf1Ht1nL5rcmX5SUyM1hD9dSTevsFkw3t6HHuZ",
  "key43": "5ENN5R9KeiMFEWiKMC3euafNmbtnW34yrCuHazPBf7dUPYPvzBN59eUZ2VRSxo2nwrSzPUnVC5eBbkYtDy8Kh1sk",
  "key44": "3Esq1AH4ougyV1th8xbgupXb8aWugUqadUgy9CfHNjJ6pYsrBeP9SKWnv5uGbd5aTthaaUgJbzczCQUoPKVfJoCE",
  "key45": "2rjE7jH9ZCAVYCLWZuY3hi7Fu9MZeKnzdjxkHhwzNdZ48hjXc4F6LWemb4y2nKTNW7eo7yn3v8AyzAQVeCasQfUv",
  "key46": "3BQXYzzV5PPkoJ1vaiRaTYqz4v2TrrhknesiEFLBSoYZCpRhwNFrUzE6g4M56gh6zBpiMbq6ZG7a1TKr5a3d81FA",
  "key47": "HsKkNvFathbpk59sRNUGVqCBqntokcACmt1vnCxFrj3HHcTKTzMA4Ud7MH4VcwFGMnKh1HJA1DmxrK15d4zpTdP",
  "key48": "5DUrDLGhFSwSHadvSkpiBJYq7AMvuvbbg1SKJQD2dPkCPAtogJshR6AqhUkoRktLmhmgz9RunzJ4RyzFWVdkmfyK",
  "key49": "insdskg3qEocmUms88XYuPKQsUHDPiokKZqQvSWse1xw3Yh7ciN3ZazmSk9yDwJ3AowrcKXG4bod18CxqEbbXfy"
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
