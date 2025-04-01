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
    "3hWuTM7XnmMQLbZiZLN1RgUVxJWCTGe9r4iVD7h8sbqFDKTohKW8TKWVRRio4NU2oZf8NThSf3eXZvTRVe3Zf7pQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pFMZE25o5tw9CM94a9uonpDYmmNz5fQhoGTpStzX1GgNkkVc5u5C1EmSYcux2e3szQMMuRkeBPLTv1kq2PM87S5",
  "key1": "5B4xF14VNinJvMDkan38YXvJEvLiaTpnmKe1ELMFtpdDH7vLeiyGD65MHPBeSZYK3eJxyx89dToSYek1ZEFKmCcM",
  "key2": "4zBegsqKovPGzCFZEJKeA1z1auUFER57azrmi8FV47RrF5PhUeBRMJsTVmKZJxccCxr2ZG5LKUgxwKohVR69DTEd",
  "key3": "2VAMqy7uURv1crqhBFtFRxZKFU63WRoQX61kF59yz2fVpdotykgPZwhLunKYu8ebb1TWgzzd1urF1uPnU8EXPajy",
  "key4": "BUzJxRH4QeAvACGhvujDFgHBPuhiM9iwq5EFUQ3XPnWDVatFaKdAQGSMDm6B5h3yHDTWFmtowHHwSqFHCRwQKJk",
  "key5": "3hMhrd1cqoKDaKwWh5L7RNscYZ3FH5Y7UZ2PdQ4iKgwtYX7DK4aFWTzWukFyhP7WUKnDGosJxwimc6mVug3vK2sx",
  "key6": "ySjexPMHPknXUe8zX7QQupvsJb2DbDTdwuEkvpTLHJxAVoDHGbbGYfcQ8F1zMktFVE2t6Rjk53yM1eToyEHPHGw",
  "key7": "4piBf8ic7ETjyzsbj8kjMbkyKYHnjjy3ocK4BpshyEK7nEACKqmgzUGnLLcYjSmRipg38Ern5nQrxCzXV7h2144p",
  "key8": "4CjmDEqek3FTsmZyKdoHkqfjzutNwAbb25hByPQDddb7ioMAoRin89W8BsC6252yeA2dZ8V6FJHTub2b8RsLZEHe",
  "key9": "Uyu5VWQ7rCJpmLp7eXGEMKAPWiGJG99Y2Qnj6PsGtJnv2hT6zUBMDpMxayD1RXsRuqZjHqAMs1Y8neRK12CpyfN",
  "key10": "3uJn8UnqzXB9H89PzisGiTzKgM6WJ44EgVxLsQ2N6gtYJTB4CZqyAiyVx5cpCJRfXBPdpXjcufRvNUuHpnxDypcp",
  "key11": "2tXRGUXpntLfbABLHanGE5B1cqr6GxtnkJdc4ogRWo3eQZuZZJsofs2n6EYF8XNSruR5qsE4e4sWNqUsf1FJxvj5",
  "key12": "MJKHVfxcgTZho8iTHufY17tAkjS3xCiWJsdU9FsfSxwhgPrSnf4f4WNX1o6Sm2Xr3ScQQeghKCmkPjEzh84gUcy",
  "key13": "67eey5tDJMZfS6zW1ZTJjnoGRS3xKhMiaoxRyBdvZ9SHubSLdjfDCetM7VghMgNUWneXVZXGovMLo2pgCmG8jzxP",
  "key14": "3K4RdLw2ssoG9uPsb2aYV2G1BJieMF5UfpXWrGestiTDVK4gQy3rjLWZUcVkHDdJ7asb9iY2o4Ac91AmsQqhH1af",
  "key15": "2qow6B4pDgPaigpWpLDYMp6Wvdg9RpjYuCctksDbE5zoLVSXzsRe2NiaxZgvVdfB6rJQTiNbRxmppLhiLqSimvFK",
  "key16": "2efAZgJMyLotHM8YpQTFQGWGjQArnLhXh72QsMtTJGbNpChk8oSjYAns9Nu3fJ2x4gV4p6UJ6Hn3undzKSmhL4SY",
  "key17": "2K2yA9FyHpqWRGK7UuhXYvTmGPWDR7sYRWqckuJUKey5E8uYiqv3sDWJfA2eFv6aMZmMhV8MRNi5DmYpbF9RrUWo",
  "key18": "2eftNbkU2LFv7ZnFTD21R4GenCP7KvZupNPALXbvD3bRQa3ZPMSimziBvynNBqn8mjukCm3gQnFu19ywum9qBzeQ",
  "key19": "gCNvyeWx858B4CzgmCwD8AfEgsAJNqqspA4TFBi99DZHW9XjBDm2KiZMVAmZWfU4T54RYYCyGpoZd5pBby9DCY6",
  "key20": "2gSzTuXDgHzYgt6fc3evdLBYMws8KXiF5JEjq78XfSqNkzGCMV5ZU6kNBXYqRF64Ug8Aion634ys77EsnvvEA1k3",
  "key21": "3kVe2EiuCaEP5EMDgvUxzLV2mTme6BWhZgGVEAB8mrbQKRayWGeadhJQM9iKRHyULB2tnbBorRAtycPDMhcUccVK",
  "key22": "4JBeFCNFvjc79jGFAjxwDdA3dzumiajrZyamzrfeqhEHUJ7UEB7fmZM8MjxqU2BPwaxkB4sY3aGKyhz4kkTVrw9W",
  "key23": "4RksTLgdAsCSTGKJQDzDY3q7mbAyyuR5Yo91BUssriJmq39QaH4pyr1HxLcdc15h7cSWa3T34PBGrqVqzJDTS6UY",
  "key24": "62AdpBPuUNDfB5RdxEBgS99hhR6sk5FHW6parv2xiSbVtCEFLy7YWvjGYT7MEWydahHxJAgYiTdEvW7efQQ3Cnvy",
  "key25": "ym2QP162sL3wyKutcA24bwounLeTumz8WzDMPj68jPfsriozXfvFixhQjCuMMq58iJAytDg7E8BLu9tVpBcgmkB",
  "key26": "E6QpkmyfTK5ZtRWpp9xCYAt7eEAmQcJkJxSzsVo5faigXMM2t3LWp2V5V3XhyQy6HpGjzp7UibRVP4Pit6aVK3H",
  "key27": "XqPgLqgnMtVfWf3z8H43tr5iEmfrGe8avA6fhTS2XKG2pbMpeZYNHuT9WAL5XfJd8A911d9ZjxmcKchDnK71NQ6",
  "key28": "2hUSzgRKhHDZ3vJ5omekCw3eiwg9ypfs9Gygqoj5z2UZ7L5Nru92GLcu7BgXEx3Xgg6YR6NnGw4knXhv48VQjmyQ",
  "key29": "3TEKyroY9YbzwkDD5NKNgmhGrb2XuMj3siVr23JCGFuwqzRghTxTkAiVGf2qLJ6e5KH1ZDM33nMYSNCAUVnrteGT",
  "key30": "5PNW1QVt26H4D1gG7U6Z8GrxnaEFG9xTCrFQoEmn1RKEPejYsTbspNxkxhaMubAhc7rPT6D5a6fmYaM1wnGh4vdA"
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
