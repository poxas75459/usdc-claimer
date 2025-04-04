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
    "3mjxUaGQMfe4KfnKaD4vqMVmiitmcJa6mYV9kHxtmQFbH58K7Us3HBTDQvNFJinmqSy7KammhfeR8UHKtWR4mnQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gfYFsBXqivLBv9x5aekmdsm37GwNyPUQprHTKqBY454BZxpte8WSZ8rbML2AmaNqDm1TxUnvBCAsGcY1KFeaURK",
  "key1": "2tvnXV7xF3UNYLiAoS1kY1qZS9ptpuKXtHQgodni3Rh7w933doDJYtFvX6FVLgNRM5mUN3GsMP7jhTk28jQNza2Z",
  "key2": "66qz1fYUjc5h6UyT8mwHyB3XrS5jHNGKwbqRPAfwQaGGw9DExTuei5LxZ1zzibA14ugk9V5Jn1h6S5GuNx1xUeVw",
  "key3": "5uayxcNv226ZZ47aPPBVfFi2xXg5Wq71VabpJUuYFTUu3jQEpEDP9ZwtyDX7wRVHF1ctHtQQBpWDzNRyXaYosYRt",
  "key4": "4MeqRPhKDBoJVB4Ag5DrhV5V1MSJkZN4H3W4EBswbReZG4QEoTzHpBbFRNr5GSppeinJxbp8wqmLBWQ3eDeKqWVs",
  "key5": "4Zffha4xMaAEc4iwJnDmMVPhb6tUHjU8TEpsWfbtBQbUUPZFm8q6A9kXHrsgTQVhnhUirm7i9ShPd9myXVJE4kEc",
  "key6": "iHxve6borTyq2K2wF3m4BenVFBdMoDXbuAQ2cAgoMMVMYJ9jTbQ3NTBgSBsUhUCaiehvSbAktcZxWxvmno6HBnd",
  "key7": "2RfViaYjtEBrpnLxTdoUhQSUKD6doQdpPsanqsSxitTJc123U5CrXEmf9VpXv7wK58oi3c4A3Zi5VHfY87oaovZ",
  "key8": "4Y7FJw8wCPuUm9XcJuvzusWgjmZ1GHNE3HNWfPM9Ru35yoQa9gXjTUd8K95tXdhjEGeKwJGE8Vq48v7hwrtQNZYq",
  "key9": "2ydXoeq3eKddTdjd7UwNujuUpkDi9WJcTsPywNw9B7chBJPEJxSBHGNRkwVn8y9MrJXGdFEzQgscWL3WWLVBRCj4",
  "key10": "396QoquZBu11C6sdfQ3dG5A7fwFfvUMWkoyXfCybnMhTTU2HZ1trpCF2odkAMtXeJtDN3KQXL7dSMw3dq2mMaTiJ",
  "key11": "3j2dfqqKEHoyMSkAXJPfpshpr8tSNSz89P9zLuXSLwVaoKmmqQf4RpEPWg5BKkdAfys6y1mqyoHYrv3GHYeevtYw",
  "key12": "3d95SoDAn6AR5q8oVNaErzNy5tayoP8WjYhqWG5aUFtpsUQ3Nk66Jd88mYUXP6Mk7W2y9egxRskbHzCyWcf3uPva",
  "key13": "5sstvMf6bajJxFBkrH7SQJSjTVDGJ7ujb531irTdvfp2ctwtmo7ZBZTnNdJFS76bDAFubUenFT7nFzt2Lw217Rp3",
  "key14": "5LG4Muf4NCVm1NQssjrJ2SszyXTymooCxu3Y5ojvZWQQj3AGGJxzbWSq5fngq3A2oX6cdVHTsb4dowRvFbPqxo4",
  "key15": "3sFnup4oFi5QWGev3hCe3fCEB8ntoTtTmtDDxwW7Xg8EWUfEaeFcPy1C9DcVR2PL6DjL7TyfSf4NHyzjq1xYEEs4",
  "key16": "5T67u3e5WVqaUp3J7DaaZ1deTxJA3fN2yjXqQYvSnRX9rwj9FRdbBnMXZgWpCxRiz65vZVxxBjEYCSvMzmdb6rwx",
  "key17": "4yz46Ya7fM5EXioW3CXAC5qPyCUpxakYhnAaNvkzcCDWduPfLuH9ZYf8b1VtuwHSKt7zqKaRavnyUp96fEQd3Nmc",
  "key18": "2aFeFXtzpuHTUDiuwpVLEfHVKsNNMi1DRoUPXn4xsVVZA9GYK8Tmi4GQxhJy4J6cg5ohu4Mrt6hXK8k5i2rRkBKi",
  "key19": "UzGcK8aVnZ2sDPrYJdPS9hycTTnXB42dyPbT57ee9kNW42QMcAwBhPhXUWubxnbmhVhALhXBMNZntKYGK5NcHgu",
  "key20": "5eyBz2kWJGjYcqj3A4hnQHsQi5y6x781Q2BZT3Det5v3WwCX9LE4SWwQ7SvBUKTpdNemdHEoo3UZGP8HAHzo5Mgi",
  "key21": "5npeGFtxVhyrCtW8eonEGBYJTU4T4xJSfajd3Czb3tN5fi2MbQn6uPpkDqYZi4NHVF14SX247nbPWuQKuPzh6Lop",
  "key22": "4XoTKV868HxRfxXhWHzzwimSkYrzpQMjZrvMtraqqX4fjPjyrgAmKkXthpvDanWr9iFsBHFprv9Rkfi1ipn9SP1b",
  "key23": "w4mFstLhsuyuzrvkhffmRf17mWqjHJ4MLr7cWKcJXQZHq8kxtbwbfdCRTYjEbvuWCtptV1UREtwufL9AtDzYFCX",
  "key24": "2jdJw8sF7BMcsqKq9ijX49YPUtmVsjC1ykprTRMpZz4966gSfpR9EvgV7XaayB4AdkhzNpPA2QvYQ74CqRPjBzjv",
  "key25": "2iEtRWgHYhTHdnL5YqCvEqcNtbyqfDejKGQZpJ3B1876uGi5hN2EVtJF1WGtsAYpH8Ju5qyYPxGbCE8jn2MxVbw4",
  "key26": "2p7pX3qLFQtr5Hpa373J64iC3o8tCfNBjfso4BQSLtWPRS69d2A1RVkkT65Gfi8S5uY3r6nGSgXMHvoE5up9poT5",
  "key27": "5A2mPMfJFMMvzwjoHCfm77kwDwZNEVZAPGH1WEacgDQV4PgYW9aKN6cASs2WuGD6XqCHaQMkjqeE3AX8P5x5ocMu",
  "key28": "5tBHWjC2MZwmjrtPSe7JuK6ZyWcg82dHSMQnjZmfPAMgDzP9qGd76DAcaZXqBBRaUbMEWfMHctNqxFFa5oBv3zzq",
  "key29": "2J6jmrYyPAV79SE12ec21zxuGr29PBwrQyt6Ujpnn9TLwAEbwhaCmFPR6vFkJoZs8YBqM5cgPWHgWVPw8pCsjWeT",
  "key30": "2hBN2YPnnZYAQzrL9X7p1EpdcSPL1XdEeQfzpEVS6RBPS2gJRJhtg3vPjbKDtUNEtGDbwjiEzeAyssvqQzjBLMuu",
  "key31": "2JotVrWU3QuCeLMn13gNyrA9iipcEnbhkbfQbE8NFi8E6zPorXLnWHLKsa2yMFjEfk2hvsgjEWCYrqYPxVMCJV2g",
  "key32": "4cEN4Bn16egJU3g5MjBTUowXhmB3qpLjv2iFx7jo3Dc9jBEaLWFTdVGAMSTsPn6EW5LUakMBAYEsrkG7Je7A6gQF",
  "key33": "4NC3oPU7rQqx1fGPn6RBVJMk8zUHUtz329pLgoS8FWSu9V4eZykjwx4SyCHB6j4QiLANDRxWz4nqyfuR3j4xjovj",
  "key34": "oonF8JfErENUxajg5yo44w5Lnt3LE9kybULnVVDfu8gPr2s7Wrd29iYpYozrZu3NjtqAxreUJdA6rqXJAzDSevt",
  "key35": "LWzCc63K6sbkGMgjKNWnAvoe6ZHa4r4D8TVXTW9SDnvtdFqP7mpd72ZQjGpSKbsXdB1ge9G8t2BxcbEuooKExeq",
  "key36": "518GdsGeEgx2zkUiRYdduYhvpizkk5PovDk1DePoqAgpz4qYAxFin62vaxu8MWiv3vErU7w3qJz5GUYNSSXib4td",
  "key37": "4UyTam66d4UP6CNwQR4CFyMsfaFny8NqpYtPDyXe6Pe54GxnxGF1HBnoeQtydsheHH5HXgyd2mYVccYeX6hTpPWi"
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
