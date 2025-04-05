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
    "4AMXrFSss7thfJBppgMYrt7YPCqAHYYDKzLYjwKHmxeXb9ndoHBriFznSZPVBBZ2wws2eeQvhWDWbMT7FXV4Q26T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DLHZFL8xXcPjMomhuoudc1HxqfHDbBqNZEGdN8X9acbYpLnqLW889aSM4ENxDXn2vtYALifmbBLCjH7c43TKavq",
  "key1": "rJa2kgNtczcpVC1fGb33T6PJytt66Yv5iV94ywhwu8T7GBst67Yvuj96Pi8kVFEqWezAt4KZnJUHWX68qWznErm",
  "key2": "65eSH7BBhqPwY8kdJ9wZ6oqpBt1tVyfsLnrC3BgG68w1Su5fnRhqxjRRJs4BKRZpuJKnxmzU8Nx8Nfgb6vsQfat2",
  "key3": "5i6hfxqXiAaSZ3csXWsxjmSE4Ki9jzqxMrTqNsnfsVQecBVsJVzeFMS8113xmBkX5doYDep4jxBKGG2962S4wyHk",
  "key4": "3SE676kiYah867ZuNUsv5tpRFPWzU2bQ4tiFnikCXE5Sz1XkDmAwW7BGyYwBpcMWnc8tDMVA92FRzwKikEXVRELh",
  "key5": "2UYk6pivAMtTnZp15QDTYdqDoFs8BAVxUwJxqB4FjM8ZZuLNSDoSaJ5TvWHxEzWCA5Eto61mEZV9JELKx9YeRNLa",
  "key6": "MVpcqUMZzqDjH27tZaBmW7QtGkgBfiBd78SQgtGaZQFtuJ8cVi8qypHtn2kGBR57SL77YfRRTZerVDqo81r2NFx",
  "key7": "4o51BiMtCMkQpdq1dKwLUBVybtCDBAPwzsYqTRqN8qSSUvqyUAWaBk67YCZRCv16aFpfddxsfNbU9VzUnDPjNebU",
  "key8": "5Wej1KhfpVEFmKoSdJm6rrUshkRgKCG4rdTvTniGev9h6VRrBdZdgN2aMf6eBxV1x3Ba51atANrjozFFCA9rPBpS",
  "key9": "2zggM2tPJKaciGjzdanEWVaqNR7i1cPaLnaaJ6Q3dezFf8Xqu3NLj2o2Xq7emMdLmKXCXymhDzVGvhwHKXZfdqjS",
  "key10": "xkngQQyJqPfVqLiEuVx3v9Bozt5ZsR2i7MKEZgDXES3tNVe33CP5trBTnDvsG2sxjQGkJFG2ZdBHQmQSQpcCypn",
  "key11": "54Y3hFQ3YPFUcMW2exb7t1N5dWWFVktFkGhi4T9Zj7ssSsxwZiG9tjLLjbAMuEd96pW9JVW3Bcgpg8VyRF26RdNu",
  "key12": "27hvoFUCVJwjYkckHNne6ytnyMKYydmHqgroKqnNhcpxpGbQ3PHvSGfQDE5kxzSnbttEBDuisDdkQwED4Pwwugoo",
  "key13": "3ynhGJpMPKiJZ5SbaJcBssPmNRBryuahRKUGR8rMCEUn8ZDYcu54Er9JeVVomKu2L9YWMsETM4SMemYKfbmt8GJW",
  "key14": "tAFbusfVnfqFE2s7BenN16iQt3wJhAuUXmXeEhbFos3PNGRtzpQNRhbAP6bUVfGiSEbgMMaQ8h3JPh1aw9p7VDx",
  "key15": "5B7Jqk1mqBkm6FKJ879NRNpGc4xND9Z78ZQmynJHGqek6JP5vXKQy5dxjgbbDydzNS3mVY2gTzb2shkRpsk1J6Tm",
  "key16": "gC72DUxhQMssPDVuyXBUNgmsAiC315egFkzZDELfk8wDee6n7fMem4cfVPKfaGXVKJVCxRViTPZQKDLLfa7cdWN",
  "key17": "jYBFxNn9MUqFsMxE3tcVknc6mgUXu6cd6FJcnbUJFi2iAWKQw8xj5Btm9bhcWzBRpo5VKngwZUokwEnEJ7gHuB2",
  "key18": "5KvzPSphAhNWr6hAN9z1fZ2swizuRjcccMm8TU8wP9advTt2Nz65PiqRzBJny35KtQwpRMSdmXAtToyfRksYat9H",
  "key19": "2E6qp9RoGommX2E7wBh8k8ALEFCmhj29jndJsq921v9uiipzJxv17jATXK3pEm4t1BJmYjVCjUWDptoi8reirLq4",
  "key20": "5njJdgTgXggSLAH1uraMWsAbLBMVFfufSxNCcSCk4Z92WxcNDbp3hGXmaAHiBypeoXUMrj52kv1BTP8rN4sKX4n7",
  "key21": "3eYutY1W5WbJBhDjPuKxZHtA47KUWeBt43E5xhya2YuVc5jDEcGUjGMsx9YTjtcy3NFPX8PuGnJ7VLBu2wMkyESF",
  "key22": "2DjyJFPPV6tcpGNubukJZ7LJagmePkqrGmwxcEJQ9PnvRarLkvALDQe35Cu66s4KZw2FDG4gtAvoYxiWmQGNMXAs",
  "key23": "4dTZNL4MWsdxm6snfdrHwXLgGvuvshz4axySds6KCLNQaqijAJdzoLBDcxM9ST3iKnXed9pQnvyAdB4aooJGv2EN",
  "key24": "38HcSzWYXZeXrg1Fhz6RYvLvfst7FskZ5AJqTsAu71YzuLxepJs5GZPWoKPtuWvybkU8MT3cxvwpxkhv7rVzMTTE",
  "key25": "u5immZb9GqkRBMZRg2qNHcPrUEQZs1pNgQmHp4ub6o8Gk5cyGEqo9GzSYpXbgWESsRDdx9ptgoTnrmhvzMNRbKo",
  "key26": "34v2MJYZ9rpFWiaNKfEP534asRVdmNAma54fsQreLknHJtarLnkzq3MXozNMT1wEUKfh5oRQAHF9EAi35LhFjc9C",
  "key27": "26FrVAa4keJAxXZBGXkLhpr9SrD3AbMwVKLsBjFD6mHTFRkbo1KdxzDqCSMjKA1Tf26KFKogkT5XcXHC5Qvvndae"
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
