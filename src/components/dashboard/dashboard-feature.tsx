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
    "4erJGCh1TP2ZmNLomzY3KksqaPcH4PMCk99KaH9E7FF96QgZqHxu46iyw97Z1MUJSD9m5bV2RzrzTQc22VcXftAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63MFqCssZY8QpQoCpUgwivRTCVLAQSsbaa42NuSY4WNL822d9XbzvvP4TPUK2St4RtsGdpJLYzsy1gmxxGTAGdrQ",
  "key1": "4eiPc4eb5m6QGNYQwjiQy2tsKFTodfdtiS1tvjbAm7e8XvCgYSb61QU2LswQJqkdLH7BGk7wpvvYbjCXwKzcgpzg",
  "key2": "3LGtcjVYbxghaxYkAzeme3eyVF7UHp6QH25re2WfKHCZ3xB5KqA9HYihdEijKN9mwWzr4sAqKU77wudUiCx3xjXm",
  "key3": "2kz8XLSrbNUo3psEVhiZEXXUXu3g48JL7CKPbVxZsk3vvJ1HdaaSaq39EZVSngn5sdy5wwnyrR9ofi6cbcmwQwKi",
  "key4": "2gT3Sxe5WMmV62wUBojhmNXhrfueK3nU5BrXnySTkYewiTVDbU91pE6js71z6CESAcsVpkwLYzPYsQsY5xmRUERJ",
  "key5": "413Kkk6Wq59DBnZLCotn4yKU86EQBuBjR3qqFMgUGfvD4Bb6gAGq73XDvnDPmoE3Ahj8hadg6gY4wWhWPo66sTyd",
  "key6": "5BNVkfiHZthQvxGUYiKkXAycBwR8yoN4SjkaRhkWhNFdYhCUu6dBLQBbvg1hQLoiZ1ekgQREYGuPU2k9mzYnvPY9",
  "key7": "98RVaFUQRDHKYRm4SLLx7ABkHLCjgBZWCJ6Ttf4S8jUJM1ahKwHMBm9RAi5awKabsxTxqjXs7C3KbPECG3dJYmP",
  "key8": "tQ2Wm5pmbBantNacEMuJSCAV7Dxewu3Kk25QwLQj37i5bjddr4rNodtEsxZrHZStsLCQs9bmnzBWQYox1SyvZBV",
  "key9": "6uZBi2d2AC1ajK3zUpu7tUF5RUL2CuqCfPd1zxnp86NaBEYhg24WvpBKimLWJHCTF2zwbz5DJzqv1b2f1a93CAP",
  "key10": "3aacCBMh95uKbu5RPHmhnTeousG8MXrMEh8tBBMWcM5bVKhtUoQkrfNpMfyEXf2GWvUH12aB5LPpnxeHthutZeue",
  "key11": "2XQyVB6oabCsMeWyX2v8eTsSKUCC4TeKjuLN3oW8tWYSXGjZvnybm7cgkoLP5dhoK3zhYqrNjUDuXt1AHS6aSStS",
  "key12": "48iqvvqkdCwZpuP6GiDifhAXs84ZxiZ72cNaKqf6GPaoXTKLoq86R39aaF8EqcugaDckYwfKEuHcXH1f1aTpqqWG",
  "key13": "2Lsc2SB3GHV3rdATEgHFs6o1A44hTXS29ksmP3w5uW7wbr4cEAH2c9EAjBhmWfVZBd4DACwk7kvxex31nRRQ1xsP",
  "key14": "3voLTKn3usqGEFyRjdJSV3ynT6njFn557c9ZNvHJvwz5enQpJL62nhyuSjpz5JwTDtbGQ3cWUCPt9zMp8UHXdSmb",
  "key15": "5CoAfidM7oqTNDijYsnTDvrXTVQxKqT4FCCLikGHE8tbdNLPVbFYDMUfqbUhoZJ7Ct4gvjFsZRyNAk38oRzzkJwc",
  "key16": "4oyAv6XR34akz544T5ep6iwziEXcsbrbpzcdapG9AaHBvBS1kDg7keKPxg5QGMvLiukxzNdgwMWLEQSXP1nWZYGe",
  "key17": "WJ9f6jHikDT5powKKhCRviuRf7cParhBNxoueT1BYapxSHVgYf3PgzQWzE27nSDKbQ4zSvaNGQ4iosHFCkVYVfn",
  "key18": "4xCniYYCAyPgCXosTAsbsWWj1XboQojEEB2GG95sSNpJMtMJMYnjrxv6eZThLkpmfuN1DMbFxPF5gJuqfDsBbZUx",
  "key19": "fAD2611nBwyv1NJVJfPckEu9Yrx1pMEEn6SR83AGH4epPBSiM28vLmmsgvB3eVUyGUNsPTzWJoA6f24v9iMoemK",
  "key20": "58o8DSm44AgfseLZSzWsnnGDvupier1ya4h42GvurCMnwweSnc3oMwzRZXapbCaxG4JsLB6ZvjjRxfFtTBP3rEL",
  "key21": "XLQZomw6n9E92QsTNX3sBdLDMUuCxuQVb8tCNydojM4LvQc7W6dYhY2RzmebesC5pqbKUT2ngkYa96RWjsothr4",
  "key22": "4WJeczqXAwjTFQK4SbfBki6QFj8dkZNqLcavGWZG6U3DE8qaYBwhfRS7PiQQH85FwEBq6s8niDtjpFXhvmZNzCrL",
  "key23": "4S5mVmcemc4i6me96TCQbTkRFauW6mn5ZKXm2iMYd5o7PRbPvDFRJCKW2XAToHrnRLJPhuURF2YGJf7mUu5CeVs5",
  "key24": "35bK5ge6N4BNivYfh9EFoR8LtGSxKbmDYpCJtn4MX2TXxEFgDg1TdetA9ymNBoi6kjqNhq9Y2GBSPTGjZBg4FqdT",
  "key25": "2HZZBYNkAwPaibNcM5FhTPGbiiZK87tmCnj3WhgyqutphQNdVBZrwM5bsFo4RoGuxAh3pvWUwfN9JdqTi9jtYaFi",
  "key26": "4qcp8PZvVvG87wszhC5g7PEE1G3YDveoeLVjgrxWcQN9jKVTkzj1tu6yDUnoeivZ69Jucn8Z4Zks44N5jEWJj6Vx",
  "key27": "xcuisNmRTTndBjUXkGHB7zMRJXbXxXJFDyY2pD3YDMNhFSY8wqi5tun1AqFRERKYdwssRApZLG8bwLJfgwPo61C",
  "key28": "4WqVL8trhaY7Qyo4WcyxjazGh32k1JRbsfCH1e1HGgaw9GG4FdPv1M1UcwG48m8wqnJq6wi68qMyUAPqeCb1qbJ3",
  "key29": "5zv3CQonDHfJa6Uge9zdeMk1ssqqMhyzNWr9SnyiGEkKyQcosFzjVAcaVoQunEUYEhnq2mnvqobRZbTgWpiVp22L",
  "key30": "3LNeFz7i4YnkRYW1Yusrn36JgU5Z3653zfZPaViuaddtSSegdFmSG2UrLtVHavydFVBJuiXLE4Btmp9YH6dcCfFW",
  "key31": "fk54pChhMtdrWakaPEH1miV1aagwKx3uepRB9pZmH1dKFpauqqgVdiAFiUjhX1xdyhHyzUrnrTymCPZpVfBTbKY",
  "key32": "4tjSBZcVdTNbqV1uHMvesJYGdC6S7WVn6GzpHDVShiWD57u9fN1v87PDN1N3RGYw7bW9z4xAxbHx7K7JCNNhnq9L",
  "key33": "3oy6hUmqhbNdP5hS4Tu4sUX13hJ5EHwqsiFeNRwGjhSbC1HTfST1cs45wG5quGDL2jPCZc8aySPwVVLSyTmTpFGX",
  "key34": "4QFJbHUJMP5jr2vDE3Uacicph62iVneYqULgMZZeLfLGHkztUTKQNt9k2G5NySnrp5YG29n7P5TrW8f6R9SvESt9",
  "key35": "2Bc8fTMWoU8ixHqF77vjyspU5Dban8AECiWV5sCxLymsJn3nipcLcAtwjHCtxBLrQ3qmBoC75s469eJpCd28tN64",
  "key36": "4S3dR8AayUVqrWgdz5FuXRrPpw913u6aW7iJhzrS3p5RsgVfQYk86qiJdnU9efSJM6MzEPKCS6vKp8D6UWQHBu1u"
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
