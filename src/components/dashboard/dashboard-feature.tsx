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
    "3ymJVUx43mEYnMAV5dH9cpkGGeWN85aqvRXoqYMZu6UVhRKCkPCaG4UBQVbdbEZLSs5PWTQxMSojkU71PEXGVtYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k11FLmF7fwuHEdpot3A8D118XaLnjMPfxRD5uaVGoC4cwHiAyUdh6dDMZQAcC716QuHWgDRfUiaoUZZbgMFSwL3",
  "key1": "221vogm5tpCBS42KduHqTBh6997DWzVq1riZ22cCDXZW548r8ZVT3egfob8ocrvLSKn2pyuXAWpFpqiFPPNxRemz",
  "key2": "3JxntaX1xkH29DThDpMkADh7wBZrqASpfMNsNGHM5rwXy3KjrXRGspRe8HL9Zhr47pzL56BKokkPknuKsfszn5yS",
  "key3": "2om7BhZNotBwNQ9ouz5QWh5d9vpZgFNBnuTUAC4YUS1oNU5G7eybMLGRwRdszn5CMr5QaCxXTeEnnsL1cG9uDdBA",
  "key4": "3BkiJsFqkeaNqtZwqCde5dcgSLKTV9BsyJfBjfmmaD2C1m7dbLWsQ6SxAJKuWsajkcqFRjfrtJe2A5x2rbGgSN7Z",
  "key5": "nBn18jj2TAjjH5nw235faAHqDHMvrrP57KSbmnN2CSmwoQQVeMcH7aBE6CZg1DLDyciNhwSKaW99MXRJSmagLyt",
  "key6": "498QegL7PetFNzTa7oa615fkfK3n5s9QbyicG3f2ax5g52cip66qgeiTzQYvzMS4qw7FxSLs4zeDoWKsgNJ4svPu",
  "key7": "3qZsmN3hMLpFR7TFKCX7BhYLP6Xqc3tgcHPSqaYGKfUdDxa2cKQCwAEinecAbWXiChr7XrWPubKYLHqQigZRRd2z",
  "key8": "2jxjtEHN4kpcuDFqaKwzPKPdN1iPrk6BmYkigY5gQ8rfFsNCD3mrihvrCthSE7JA5ukJzQXUDjWz1z4dFyXGZfW6",
  "key9": "436Zypaa39q4Qmw4UUrFJm66smiSChTZWjfdKdWZhBf3FLMdKKFBg4MYfrSDgZuYGLH8RpxWMLpP674YeifbgGJW",
  "key10": "4pkapw7bB4MUYusUjjuRYc8mEt9yULc941LWNccZfKjkmtHmw2bt21mrCf2k8G3GTNVTtXWZTxeB1C4HkKZbGMzE",
  "key11": "24ijaJ4g8aMK2Zqmoq1TYrRP2pdrYT3H1mqRoCcCEAxo4jci6RLmZv1JTeD8upWgEDbzwKzGSnaFMWh4UCRguy4U",
  "key12": "2ywAhrZ4yHgevVPtojS46RuFURwzFkNNSGT4sN5yGCFPRKQuKufXYPNqvQRaDevnhHfC1wfvbu5oBiYsVWzuTytK",
  "key13": "3PFR3EAXpRvCaDwAcd7HfLXDrTZe8WtnKvVG2gvwWB3y2ZWnAAJc27dNk2r3E7UWBCRbDj2ytJSCcT4DmG4346S",
  "key14": "5J2riecmpbgrWsRdtGCHDVuGikdLuMboeK9WTt1JP8X9yrZFh89EfZ5AFZG5dEqQkmBkHrrH67LcgyXuDmwL2iHz",
  "key15": "2uxUignBmtZrMsyyy2GpATjGFTvNC7kihJL21nQeKg3sxN5eGowkiiJLqEfFsoPG6GnhcCJJTkq9EPnEDLmxb9cy",
  "key16": "nZjj8zdmmiijP27y2wv5vwX62LPSQEogcDE6X6wyJMYemoKGyoq2UncnBXSirW4K7aitQxmC2FPVmjUu2pevMx1",
  "key17": "LGdWtNFnr7nM7BmhyRkSBVQmJ34MCtAhXk86N1M2rbc4uf6jrMXx5nzfMBEFY2Vt3J1ifoFqBMtoJdvLLDB6nNB",
  "key18": "5MsnjtMSh138GqNgaz9jFx4HECtHW98MEB6Woy3BKT7ipq8voGdaQjmYNB3FtkHZjf5xy8PEHfreMQ6WLJWc5rBc",
  "key19": "4biiKo8PJdtw3AoySWMM4S4QNrZhuJkYfP3i5SbDi3dqpTvFa9WKoVg3ZftokytrYd1UVbYdgGmi3rLCnvNW2VYm",
  "key20": "56XBG2DEUez5AdL9D13xZanpA8Zj4xSRZus5V6RJPxQN8M9oH8XazJbhYFkPNZJ1d3miDGYbFmnhxaCCSMPgs9vy",
  "key21": "2nobagDR9xFRMxVkajfkU1BR2icc4VkwA92P6Zo4v1aXDbmDDTb8SXeLJqJBuwwKFwVNBvXTJ4yPz2KHRiAgSgJC",
  "key22": "4J8rwfvyDUSmycCsaAb7etZmyYgxVJfnbaGrpwQdV88wEu1db1kfakV1tS7eDfZLPQYtFZt6LYTLQLxkTNtQrE3F",
  "key23": "2ReEXwEcw4qsKqDmNbksWz1SgcmZ2TtRxHwKuGmQPfGpQMwtNTbRctHNpeaj4xxZZJSVReD6qaHYV6h1y8H2ivEK",
  "key24": "55V4wwavAPth1SBf6DaYVgaXxsoJoHFGecz31WcihySmZm65EcZivdcVwGnEJ5gBfHH5eEbgi6VJ2poWePGLjLAT",
  "key25": "4g3fgrNGuJZ8VsPwYdpMqarEazc1fpNNnJGfDEazdbMMj7PXtqJbU2Reghc9azYrejHavVyVKJGGPgSkQQPohoaj",
  "key26": "2tXygXMjz2dfxqQ5rAWykcqBtyTiTWDzmojtUYDd3VtHmxUpcCGP1kNn6GUgyhhseK1SBkW42hhEaY8aEaZQaTai",
  "key27": "2a8yoY86gK5p77ThwNkiMuGChZ8bCh2oDJZhAhptBVsEeG2r13oEMUHTQDutVHKNmrG6Bjh7PgLKX6ToG5nogpGC",
  "key28": "2Y2tbceAicEkHXZ93PXMFvRng1N6XmuQfQY4e3BRSgrQraWVpBqvd5435npkoPBagviipddU1SDbW7249Jo1oHgh",
  "key29": "4yi1WGmX8Mu49FUYxhpraPEP7B2f7LULSFuApY8mwqrXJyLKdoZLVszaunALei9tK8DWspeoRpjg9Mz81Zbs5dRG",
  "key30": "QCAhFKymjYg53XicoeH4jgHHhs4VUu2Dgzx24AVMmAwWUsLagVCuraoTM3iShaHgFtWCDqbZWbEudjVDauVoMtj",
  "key31": "5uL7yrwwty6GN3yuyKJqMunm5Ugh3uxjheY8bRB2VXcyod7dHNNcMHCJixH66vDAuQooZUw8Yr8Nt36WnJV27v4D",
  "key32": "9fvEDjP9nYMddzSReaxWhCHqg41gfWSA69kSQwsV2UiUBdEXznRyE6UvVinWkN1Bk4CdgETk85cYm6dwdovqAkH",
  "key33": "GCiPVWXPgWbY4NaSGxSX2XLoCuccBMTV7TL9pcZcz2uxTTW89ozyg3cap7qrvZCjaxCUeLSfWBqmr7RWPUa2yGG",
  "key34": "dBHQ9UGgxxXSU32R8e4U7oZBatEK8LVis7Ty5XCzxtrRN55oueu6FMT2wJYGX8TVANQ3ihTNi7sDgX1d8FLytpe",
  "key35": "3ruER69nurGWsWLiDAPvd6xLFA6fZkKvBQ1JLR3D8dMqzwxpowtvLETq54L2x55hSzuVjnGW5ETYs7ao6n5JmaCV",
  "key36": "4K5Ze4D23GPvurJiWQ82A2gucX4zCuSsqp1mbLQE7F6ocmowvzie3Mok1UfkNvP6MHinza9ELnEap9HcDFxhvKrp",
  "key37": "2zT4YGnfuCrb2rRjkFjNFU5wpxYStPnDsmsFyeXaePMW9KML99KYAAE9cxV59RGvJhuoFzVYAfk2g6UxYNq1f87i"
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
