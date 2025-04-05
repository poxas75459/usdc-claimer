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
    "5Tsv128fFAumA27PX4jbNacnY5Kf2wcoeWnsT7biz1ZmxhrgjgNiQaRU4vP6gm7nBpR64BhVmGWytddxs15yU2gV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AFHQVAU1eMXWsqybuJgKNNQcEHWyaJRR8uKn7BrBRfvT81kH9eiUyFcRKZruu4XEasnV1XTaLar6fjNxGhh2yXB",
  "key1": "2uJEpVgHFLW5LSEruULqjqqVizyGx9XjR7a2pbHg8AwHUqRg4ZSwSCbcJMePVQGNV2pz1nU3siR6DnSBYY8N61D6",
  "key2": "5Te6yxsbrhXd5PK4A1bKb9uq18FiJknAd6WekhSa1tGB11SNbodqVc18n779zurJ594GSH9W848DrKS5sTPSkuSC",
  "key3": "47mu9ScUmJMXuznN8vS4FRxJBPC74a5vFizxQgiapRdncNGXPpQuSewMNYnjJRGRuDA3EEdYiKVyrTYReojNDfxy",
  "key4": "huBrcUPmABokpw23Z4xufhFKENjB88zDCw8VM8XdSLsRyKxUjQLY1CJquLCAsBHAsZoHBQsnuTtDVbeMB7BCiBe",
  "key5": "5XsewNjsuduHBxLEyuq7NUgYmHdhFxHRKbr9dCFMXJHpSksxK5kvWgC1ASL1iLHcgCWZfMf5s9C9XCX5NtmLgu2w",
  "key6": "5c1k6wNBLipdvepKyYmH8sCgAiRGAeN7erErTHppNXypSoYpLbnc9xhNppdAHNsqPcCbaJzyiUTef5iV18YFNwMi",
  "key7": "46QUdfbjWY8q4baBD2xJRsUDokqHiVuBCiEfXTUE7mDaT4KXFUPPrKX95tYzWBArWw2MC4WnxtkiR1BT7Q5DgMPT",
  "key8": "5vLxXWHPDJW3rhQC5rBFFW2d4YAsKe4USvvSsBs1BiGiuo18qwv1tNWxAAgkZzF1J2oeQf74bsqGAKZBPeK82NQf",
  "key9": "5ehaHZiuXQGiN15wvpLcGeNQ7o7RdLU4MkFH8s8mhABDMMoEADKEs83rj9GfvZUzdmrRiaRWuPsTT4VYy4fCKYFP",
  "key10": "2svCutbTbEgmF4qTrF5n4vqu1sEWt4hD2AzQHZfiBoh1TMBJy2BXYgKK76zc5ykVTUaTng2KUx7Yow6uVoWB9i7g",
  "key11": "VrBFPeN2g8azA4jZXjy2XwS4eY7hzQbaPbfyi2yhXcsw6YB72Yfjicj6rw71SfBAVBtPE6ex1NT5wzMn5xHs6AV",
  "key12": "3egFdXRj3QHxDMuZJqhKX24PkFDi5R7scrR8ptngxi7JMYehfDHz6PPBho4MhJQUBp51gyFaqgm39brbHLqh2WYu",
  "key13": "1QmX6jpAirvPyac6n2AcJg9ai7CP8fDEiscS8K4VGeDFHhcEsLZDSLJNQ9RLmJfLSkKo9aNyEbQcJQ38dYKHCcp",
  "key14": "3Tzv7kET5XUHKQ4ii3Jr8vo4NCcwsaHnkCt1UfN3opmaSmVWwzKoYDmdwFjrBDUW3aUzTQuoKMvCbzRhrzpgXCeX",
  "key15": "3Zxa7527VT9kB11B7uBcMFDzeNem7i6MJ3mchSqYRLw4tZbLG7NKH8Bev2V96WzHxn2j5g2kBFkEdp5xn2ZS2dFG",
  "key16": "2wnYSzamWevLeMCTKKt1ktN9sreWi5fxvG6i4a7iRzpXayBND5fMxvVwPwSGiYCt5bzxAsdfYGE2fpdBhsuERTgX",
  "key17": "5j11LDfUFeNiVdTB1wAcn3CcxSUMqZhHcFtNkRxRUfegRrS2cHcy3Gg4nXxNeZxZ9nkP1WrCPUWbPCKgrQs6Xm8Z",
  "key18": "4PTzqHPwZn6SiSMutSrpavjELa7KrVcSAmovCebfB8rXHxM91PeVoXqqHHnLr9EWtLdRUVvDM1cvQnyddLgNP4s1",
  "key19": "5ujvyi1UcwYmeXnw9tycRP5ezjD8W8fggeNunZDRTjDEpMw7NXKy6DzTJCkVztFQTMsP8dSE6zB7XejmyM2QVru2",
  "key20": "5ezYi2Jh3GLq9Wd5E9WMtBnUTqK3aL729dJJKhT7vVwv6benUdT1cHQWQ1DVVE87SiUD1ySF5AhFu3aEXtSLpnGy",
  "key21": "xcpk8spV5tWQYX1PYXErx76BU364Q669YtwcsoLofhRFQBphYdJyGi2nREUMcM3AZngae77PZ9TzrNeoZE9p8Rp",
  "key22": "2zhEjWgN5CmAeuEPVP2YRh929KwuGPpRWq3KAVNRZR7tTFSFQcHNAGUUhnXzGuwRS7MhZLiWQwHdYbXLGe5eWnn5",
  "key23": "5wALVhYiZ6GVctPmR5398RMHP2jWFqKFpTHedqmzrNftAwMxKuTx79z6n8NskSuMo4qVYtKnWYDcVeNPTFWJvLRg",
  "key24": "2iwsLGKUhSsZ4RWx4L7Zct7ui3VqSe1Cium3FaS7SAUfvFP2z6NquQXiB6uoh9rR9djTWp3iN7RAsJHDksQzFh6B",
  "key25": "MJCqvRDsA1QF8yd1JGDgy45bTzs9JAFirihGE2ZiH9sy4svUCq7rzG8W4gL1a1PevVkk9vbxkdhT2Q8qtkwWK8e",
  "key26": "5TmzsQCpHb61waUj5BKXa9FytMVScB6ypAkQ1YP9K3JGBUK5JZQoxnXuZq3JdvyMZu4vuYneUVodyGGF6ZwtcttF",
  "key27": "4mgfczHwqADoxYvGKV5UCXHozkVBsjj6t9PGaXt1i6g2dhjHdSVaLN7P7cJL2rLyyXSJMBhfinncW9AYSNDWtnEg",
  "key28": "3NJG9EXfXJEHRLBTJHxa54tfgeRj9BUqrswXQzRwhM21ecV4s8adKuuv26N8VQPi5nCXr4fxKUJhkFqFKi12nJXP"
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
