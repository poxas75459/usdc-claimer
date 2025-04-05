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
    "2HJoGDeyJZJTqLjoynsMABEGp8Uwn1Sfdx4yAg2REkaXxWGWEBLeHoKkEThQCgRNdSuPJjGsnQLPsW56E2Xkmjin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "toRXspZCJqLanNfriL8WpNf8KE4JLLnwiaQ6rYBkeL2aCtdQMLMHPSTdzMKiAJMJuhQPbSvMDmMWS2pPFSaTnKN",
  "key1": "37Vurwy3B58m9PYHm6EN68DE8JZyQpXRhvCxDvqF9WdoZocnLpMmAnfhahQDbhVsnmZ5gg371UNNZxWZetzq4EnM",
  "key2": "2XEHT174vXfFV7vpxnennLrQ1fxFiACAmjXtecYvSEWYJYZ94u3xyfunSAQAWV4SiXXriwYHGhTiAfuQ1okk9yR2",
  "key3": "4sfzjehNRBFiqV4h46F8iioKX2g1yyV6TUcVuqemj7Ap8pKW7AMnLUe98XWr8x2r5awiyfkTWwnoiHAroAZRoQZy",
  "key4": "4drAwrpiLWZigo9VrMRVFfLDkbYGAogCiQJAe2Bprmfrb9bmPJBJzDNxxzJynTyZJ9fe8npKLm39e646Qi9icyUE",
  "key5": "3ig98aU7eaxA2REm191wp75Gq1uXAEySWNAJqEg3jWwbpZm1NNs4NPPzgVakQugoTS7PMqbkj9xEXSi7A52AeCej",
  "key6": "3vEfpTk8Rfby9uLpPQChBnaydbPrRuxoZNyT747QyamofkFku8WEBDSkWr1pZDG9NYq9vX3aoP6ww3z2cAqyWTVf",
  "key7": "2y7Vkv7QnVvFC8bdn6DTUNDEfHZrLu3oFz16FphsAmagRBXWzkpEMBEVKj7ahu3p27iXa8CVvdBpn7ycXDyqAcEk",
  "key8": "5czsSywHgvWDY6fJZECXsKjy9YpwrWT63LCxrhexeeVqHQpRCzGyL8GsYUiXAcoHQmCPV8WbgC8wxN1YyuQTiCef",
  "key9": "2gr7xaRXN6ZcquK6zFwcGae71Nk7tAPkZcbc6z3RccC5VSs9rJZTQ3bVdQ1YqgVXg5RJUoDCxH1h43ZkTKxcAQg",
  "key10": "5LRxhcaT7UHm1WxgapB5Se6jAejKNc82HbprRZQPFX8DZ2viw7UuANPxqUPcvXB6jGwjptcY9T5gSBaaDvhyxbYF",
  "key11": "36TC4ePFxWhuEcPu5zeTtEJ42UnxeeDGGEg5z6oxkAsrYNFLKgdP8b6FakA6E2MQQgMRbUx6A84ojTZ5kXQ4UCwi",
  "key12": "5uJ2hr4opir3Q2Dse5nALTH2FowGUAQRi9iBv2Ju6oKTjeXUrseMUgDEqzskh7EmMoQYN7m6M84Bff8VgwR7Q1BK",
  "key13": "3CjEJ7tVsAG2wCrJmQRdPHHsmpuDWng7Swn1pdyQu9PJCv1SxhiYNE8b7JTahdCc1ZJCWThPk3i14ThPGMMHpz7U",
  "key14": "2yzHnQQh3ztfLGTtbNiHjRcfihDUqwxYpXYWyd22hUwQWLKWwh5jcNfkjKX3R7aeA5Rf2JVRPaxWV2ukv4sUVqw6",
  "key15": "5cU12w4APHyymB16cwVbB7VdJhWbJnoSx4HnJk9ienKdTkLJ8sS4CoRh87ZEC9Ew7DRxMA62pSMDoVXJp1FR3e37",
  "key16": "2XSG7gHPRNm2U1ZhS1GYHbjbUdAUYR3aNzE8N6diXNZh8NbjPj4uqimV5bRpi5ZPEiVxGBQG7jerJ8MwwufJQNzt",
  "key17": "2wZZAYfxA2ZeZJGYywcqmqKEUF2Z1BSRPNFKJNYMFR4KgfpjcbnLLLtb1NSWfQyb5eQeyXQFN9cV6po5KKucWgiN",
  "key18": "2JmLcNVz86PnA3UrDJJtAYLDWK4A1oVBh2s3MhHg59qNV5RnNYVK5e7B7fKpK9CdX9oBdfTqqNuEDyQGwLRPMUDk",
  "key19": "2PpWyQpCrmpsfSgQTVuHSonQv2cxGngAUzfsqUrSF3TvwHahnrngPVawnvL1kaBFMpALo6EHsshdo9MMWebn45zJ",
  "key20": "2A54YQGE7NwCncwCWSA3VSFyxNQ2q7vGC1Lruc3MXZ6xwJ5cgBmbVNZL4amcub89Vb2LszK3GXFVwLeDvniNGWYy",
  "key21": "4ecH28WRhzjgPEx1xvChjcgfv2T9ctGRHJyihKxiKWn1bH5RTvJJ4HwEqNBEAYmAmZn1sXAxngnB1zBbzcgy7FSQ",
  "key22": "5UuZLktuHiUaP6wfivarThfRPmSRjv5Qqcsv5VK9sCFuNnYjkCcZU4RrpujxyUFEFqPfKnU1U9vdy3RjUAy4Kfif",
  "key23": "4Y67QJLAv9RnCSAu7nDwMv4Nr3WtixaGZFD28d4sLo82bqtZYKW4nG2XJFLntRW6U5bfX1eYtgHsQjzEw5mFnkUw",
  "key24": "25YzrS2BVHJVqFNAeP99SUj5pdCwZuuys8FGbT4VjHJvkhoiuvTGxhGwKKWJ6ApVjsAzMqQvyhmrWZWg1K9f2NHH",
  "key25": "3EUmxbrheQiDjrPaEPWqDQ2RevMJ8npYxEN2FJhjvMxxvXwhGUi3RbcmjVaPTQHSTnRr7RyLUTAyPJtzBpm6AfvW",
  "key26": "eEH8jbJJWR1ww6PB7sXhxWJDe43uwF2CjkqqVDkYFpTawgThGx8csftp7kRdFZ3z4ed3pxM8WSpre2PPJSATEn2",
  "key27": "4ZsTcgySPXJYSFRKrYeYPY15cnycSqkPZV17777s9WSTfvxnsRh2QZ59SW48VMzTRPsNAAKsDEsRcAAY4qQESodt"
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
