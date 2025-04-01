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
    "2FTPxYki2nnbsLbxRmwBtYRznCPst1c3n8Pot7Y7P7RnhSAMQmXAGg9PoEoUqie9HqfbmByMfuNPnY5DnGmmvSh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53PebF3ATe49eo6sYsAEW6QBJh4PdvzXZi5LnRSP8tdQqzxeJEekH7V3HctztQgqdkYdTfXx3S9zwFHR8WrxGX2g",
  "key1": "2io9b1MQp58dsGYxawrrQdJ2CUNzcwB6q1SqtPpWma4QVu4rNnsfPCUmBcJEWdDcmcyh7y7XTVZLZmYYyLsGS4pB",
  "key2": "2resaht7naLdXPLtKMQ2fkSpUQH4AKmFFRuzYnd6a33Uf64zwqKCSMMbuQhR6C1nN6WrXu4xp2BpEiS58ZUSP2Qw",
  "key3": "41mWgXVkysQvcfncmnMtfwvbLsGjhLvQS1HPxru7ZEajFFSoqbABhYhaCcif98WzMJHiH4EiczafX5Kod8hTtxd6",
  "key4": "44pTpnPMb5N5ySDp9UPq5sJaQ42JHL9vSnuvcaMUbg7E3Ma2Y78eKqYDcUXM3VcRNXY4y6Ff6pJvU26vtQKv5p4a",
  "key5": "usn9PYX25CYTW34LrkBbQzDENPEtvRyGD43yAbky7qUXpY9Nki2rDwKruLcW5ZC3tG3i9V2QL3h92bgyDrWFgB1",
  "key6": "3hg7qt4n2DMqDZd1obp6YF972bZ1k58rcjNKVSYTL8wKTZyhH8yThprV7Bzb2PYj2FYrH8wXifG6nbURbQ2F54Eg",
  "key7": "52upL4xMicLAF4ZgxBRJ2CeP1HxJqiNXyyaHjH1Vf8A1eGFuYeQLLmaffSpQD6hSN3wkLcFDFpNyWCs9Jk3XPkBM",
  "key8": "3oy1ATE5YCEcUhuFhbk5hQqeWhs5S1pRYo8Uj1usoiXekkVdvfomReiUQq4F837fLL6zxsoRoeQh27T54PGLQawc",
  "key9": "2rEAvVzQ3ZKg24tpz5Pyu7FrQ28uSJE5YtHoeMsJVcEp2vchxZCTryCdg2Sc17A5Bintpi3bRLo1v1XnjESjN4UX",
  "key10": "3aqd35Rrt5XTu6FXKctcc8rE8mZ9WqdzFuVTSLVGCLi8sQPvHk9DMMBQNM2meYjkE27w4hW9vPhNiUQQdwT8o18x",
  "key11": "MqG5khbTQjRbko1CNtLoejncZ8SfRTwNCuJp7njofrMZXu72nNjVpGqL1Z5bVGmkPzRpyqYv5PAdsipymD7QSfg",
  "key12": "58dmUohhh2jHrbTDp5G2hbMBqAmjoYGpsWHGEvWkmmDJXdsQsbTzXdQSKWNgLvao7S7bmk1zBM6fMb1y3T94dgRp",
  "key13": "3BuYkcj2puH7RaqTFQkXkegoqJwY8gxPX6Fr8gDC97HptuiyiSeKGRgdF2EPMraaNU6d7vhWFfGD5qu1gCj6VyfM",
  "key14": "3d29k9HV3JgH4SkSiyd8UbfHaVzci4XLuqwBjWEaZx5nB8kEsMezUp4Pw75sGNvsQ4MAzbyai2FWU84bcBtBzunp",
  "key15": "3G6ovk8TesjkG6bqDk9qVBPGKerpgiTPPC2X1j2U1d7ijWdxWmKRZ7r5ESqSF4AMiJfiVD42xBuaMLX1AbThXfWA",
  "key16": "2ygqVcxqe9M1dAiskzFgWcfpHjnwaHQpg2p5kqwCyBnTHVteUkCvri8z7yx9P4FTZfFEcyJKuWKqQweHn5cbbC78",
  "key17": "om4mEytt1nHJ224GLNQNRPx1J3Lverjp1pXZnVufnV16rLazdTeUgbVTyBFfMJoHy73dhxJ8izvGXrEAWc9KUGT",
  "key18": "5a8pBcp2JuHeaGTNGD6MY7mSahKwVyQDzZepUNkeGWJSQ1Gehbm2ggXUx8F2HEmgS17ksYf37txdhTEnamqTdnrD",
  "key19": "4piLcu8zntAx1CdZ4H2dX9EoMeyVPtgUdkhrbiUDdEcenu92hXr9Cngp23R14HqtCiAVZPbKX3hpjogFYz4DUKSe",
  "key20": "59YmXfwMfgKwQErfVKH5PBVXtMYcJrzt8KyJ2euGLSexqESbrMaF6uTe5xG1iGUGStU4w5eVLStKB1yvNz8JFT5L",
  "key21": "2vhKYus5zf6UXnNgLiNknpk3nz5v5sws24JcxTgu2w9f4zQkRp7WThTrxBFvbzJDAEcZKPjAimNkL7DKaM9npR5W",
  "key22": "2gKD2rtneoN8uF7tgxybKxGoK1rb7jVxvekVMkUeJQdYzVmBjxo1QimTYY8RrmrwPqdvRhckJRT2A4dEuHLLb4vm",
  "key23": "42BEtkDcBZPCATcSZiWMuqndTy9zS31gt6bSXbGYKrXKuZYHRLBvb6ntxyenWdxhjwEtEpTLPCNh6PDFk5NeC3xi",
  "key24": "3PZZ8qcduUoLDx6A3zCEMiKZeKioSfnGrVZHd3Usy6frNXX5Hxy53fqUiPKSoYfmx3hheut6uawNtGG9JXYzNcaA",
  "key25": "4GDmxJRTREVAkkUk4M7MQzM22R84EU9AVeZ7jxqdDsWoNV7vSJXPeuAkXFZZ2qCsu8DUfcwHBpgZtKe6te3RpuhZ",
  "key26": "5CLZtNxVueaqprfdhYM9MDefxLHwM1Lwop3vF3wGhLEAAurWgUBHdodcDxcueEBMhSTaVXzMxFQJYfM7kLYS42eg",
  "key27": "5zVL2AHLJFiviksMcezuZMjGZTDh6hM8DwhbM9KpugRS1WK9LKCFtHBMcCDne3vkBTgZmmp4cXiBTi8RUVCABqUa",
  "key28": "k6amPJBtdpWPNXt1ghAXVag1NDegDFgtNsVraUzJBu8M1gW95F3Tyu4wXyVaJzB6XmFgRvUFsLXUVZ62mEntJFu",
  "key29": "4q1ivshFRfGvamYNiBbPpRG21noCCKJKKexM4U9rrDPjuG64scqxNNdbfF6ufQmr7xxhB8J8BE9DW4sYHQMdoRkh",
  "key30": "3NbD5keq8CfvF4VJ1hpK7fsUasWphnedKjZ1srEjYgcQwENB8ZuVJ3jfSa8qfM6eKTe57mpJcKxRNbxNRF8cCsVV",
  "key31": "34AJGLEsbcw9J7J5bsv6N3rPucxwhmB255fL5QAu3myijD7VZBhBS1RpyYmFHibEFmuqFqHezf4pCbRyffTy7vp5",
  "key32": "4sKMwc5gVrcFxPvBfyrUHEztYPWxfCv3wofgKDyu4WFdqNirAhDScmEbzvFpr2N2oiZx3tUuifYbsfHHrdi6JWsR",
  "key33": "67CxXdjCMYCQKD2ihb3VfGhpMQZ6HkQCEu4bg3xnLx7oBReTfY9whEysvgDj9o6NpNPwLwLZwCV46Bzv2nPAJc9U",
  "key34": "4FMtFcQdz9Xv5QZjkYMctXAW65wiBp6JXbm3v2XdjwptYPKUnvpifdVfZ2UkBreAzLMB6Wo3kBi41VnombynuxeB"
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
