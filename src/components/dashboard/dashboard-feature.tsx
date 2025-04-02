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
    "5Ff4TpwvvsCdyQKaZP6dmVgPrw4KitKzup6BpgM3B3VT7aQe1KoqdZC3htqtG2UTzL2BvLhTozMZxHzWg3R2ZdWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hHMFmthUJtsJKsk7zRGHW8WXzqq4t8VkHhDbmAHsSXUGxnLDemrMvhWrTokvknDerHJjz2g47VUqs37Rruc4raJ",
  "key1": "eCWMxipqMvE2Hz9u5zbAMrhSVf3wroLVEqbL4AnW5WuQR5rp7pc9EYDXbbyLB3Lg4BEsN1tfDZFtc2JycA6TcUr",
  "key2": "5cHWKw6X6RMkg9pW7Pu5s1Kiscdqww2sqQLwms6rcDrSQXyqYaMDnfAQXxTxMQzXJ2U373xtWkFEdaVwNCt2QV7H",
  "key3": "5X7DFe7VyatcHvNiiXaTDFAcbWe2iBgiBeVjhREDFPDQRs2JDh52rNMvqT5LwNsu88fAesE8yg83FPnXj3L9aTwU",
  "key4": "45kvv1yArudY9kmmac1G4Co5oUrCC2XzgiozKTGKaaqWXM1DwBpqtGvAcoofPqbDnUfHXd53Tw7cUGdasCBRSzy",
  "key5": "2NyKb8DZngTxTEF7ngkeoHQmuqmwWxkVWnHxxB8P1VfSxQeF2E1XQvZozLoqP5RuG1BBnGVBF6n9jRunvhJFhrKN",
  "key6": "46Cmi4aGPv6s6jFb5EkUb6UrJbLaXnWeoHAMprUBpPqPc3FRvrnNihyyJy12uwytf8GAFeHRkb7sTerqURpkWdZ2",
  "key7": "2rEyoVQPKzptHv2TJ2mNLj3KWhyvwDtNw94QRu7rsyMQ1NjMcJSNCjnB1KDjVxbM93Z4Cu2f73niEqmpSdQimVjZ",
  "key8": "2mJuHAfQGzs5tDV75CxXiwezKRBAxR3JrtBCfsvGsBuTGqcukimjJi4xGbb1nUyz6gfFbtyytY128zpwJAn7SotY",
  "key9": "3pBL8S1JYRkuSqL1RXgrNCJa1m2nV6NyqFoiqssm2kKtcNiozv5Y9xmH4cJ5C78QS9cEWPZRGvY1yYujjVnT217B",
  "key10": "2BC9NEXug4dzJ2Qgk7hg8Prm1EdbPe3qnVCQeVSiceiE1iZMJQym7LWRTJQcd5DrB753K33wuyWZhn7kgahFxQik",
  "key11": "4nFp9JAWce3FYLVaycdSPXsXDEBnJTB8z71EGSBvY3k3yfQsCVvHPgZb4bCM4DbWCbV8JpAx6iS9A7kpez36P83m",
  "key12": "2xLedczZ8xXd5u2vxwqfWCnHRXDinTrtHN2Gmdt7wHbPghAqVTVeXhTBSiLKiMx67TKjWcWEFegP6xjTmQPL4XCr",
  "key13": "4GfpcwN2E9UxxvK5F2DzM88DwdfjoGtApcqCoUc7s9Qtu3uGGdgCmRUkq49iQqDniHCGoJh4ykNjBsiBfgX6VCSf",
  "key14": "4VBFvUJphWezsVzuZQBZyHkGErdfNfTYMdaztLASkGMp6iSv3aEvyhDUsQh5aGapDutSKxZ88eaccHH3C8yKwnXm",
  "key15": "3WzzKZGNUXbb1y1ppm8kmdKaRVckXLrwKwDmgLjEhBjfntL5i6bNC2wv67xq5QbLJy6EcH58bgAPSmShVeSQxCQG",
  "key16": "24G2NeuvBx5Tufjz2CZH4t42StK57SZsassdb8PCcpq3SYV6P5unkMxqRt1HXa4hDLpBsyB5QbWgrMg4H1t2qtxG",
  "key17": "5bnfR65jje5F6DZtXMNW6N8tYXCcUtgzCDBtnmKgnbYgdjtU3Au29rkRm1XjUtKRzqe5WPCkCRrG5WGavyu82V6X",
  "key18": "5ZYdF7vrUUoU91CBo9LhP1aqCYJfjnKp3sSxwU16qsfBFYB7gSa98uggTUPcFbMDaB5A2PqhrtY8r3PiL7wakqSh",
  "key19": "3T9NVoSg9rbsNLwGJrydevK9D8qrBoeoJVm3GBsgNfwZVKYic6ebjUWirsghzS1xGFndk56wQKD3z8ctNJxQcG5h",
  "key20": "5vWev661sHUvb478jyEqwGAgGiyvEkKuHUZ3PBBvNQ8ar7VxfpFaMmu6SL2DwFGo4acM6dRme7uRjo8my7B3G8D3",
  "key21": "eph69tG5hrmGjh8KZQeeEDTEEQaKZyNLB1Q9xx1fHwJY9ac5Br3SAFP9imBivABR94CpBUxkVyaN79WQ4qqBtYs",
  "key22": "37BjinKkUDs8vA9cRabDN7h4YeK6EYtZvTtVzaGYtTxH5wCae1A4zyu43w7e2yQStUfAwUjQjZEnX7bxZ7UR8WHa",
  "key23": "4foLP6RKBVrDTVJdYKPx6kfXw72YGTXTi1bjbjMvEZgEVQUiDkWrP2nSxPizo5ZZYcxK9zuvALvhsohQtHmEwELx",
  "key24": "5DDxb8G7k1HffKRKydoMtK5mLruBtyicn169MgrF4wsWGj1Eaix6JgVnUbamY5RqPSVwXQ4eXXR8Qa1deQiJN651",
  "key25": "246VUAPuHETTWJrsdThwTDxG8r9NAfQcwnPZbx6FwbZ3J4LhYTwuV8RwMHJv6znAKKsb3aNhzm5qCQA5VTDukCJ9",
  "key26": "4kZSz19DoTQnoToMGg54mDSFiMrhEp4Vw2EhA65i1SqQDx2wFkRLqxd4fJe6PGJS35Z3WsGMzzQvrHqXMsooGiuE",
  "key27": "615H9oHfuUsKyf4EQFRayVYbaesMsGK3c74jTrqxJyuSTarWBb1YgWT58Mt4wzWzR1ahHKvM3nYsKNd9dsgiCxHd",
  "key28": "4yLRCBzCLetHz6KtXjbCh9ghpJm1WFjaFGkXCgjphdQds3nkwHHsEgSbbu5oCE2cu1np4V7GtvjPNBTfJeZAqzMP",
  "key29": "3smkNZHaNe3LN54ywvBso1c9UHZwaCDdMgdUzvcPKQMztZ83nz5uPe6nVXwYZTRjsJBSkKZbf9ymeiTtb1w5hkLJ",
  "key30": "J6vDqc4yEYkGiK6xYp2aksSuERckL4KQG9qzC8nnaj466XBhpAe42JQY79556kTvSgMvzFRNwdH6X7ed8PCC283",
  "key31": "2ZQKTVuyg566GvZLWv15TdphKw4FFCVp1UmHD5pPiXyDucUfRRRbafRogYc46M2g4BnVZ73sM8WXCDjQhMfqS6w6",
  "key32": "31xzkzd2QTPBtVL1Vc7iEC1ZMg5oFQDUc2ACjpbQnt3zkQMe8Y9X2xFUUs1mXKBJ4NW2aMA5HgekXu5zu1WmK4Sw"
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
