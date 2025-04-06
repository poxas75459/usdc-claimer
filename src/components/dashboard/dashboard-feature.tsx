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
    "4Nhf9dGiPWFKgmsZfh6H3YRuwK6Aj2CHkNHxC5H1Jm4ZHRbTSn5a1EZiadjttetEzF2LWG1f9zUH7c5GbJZg1jqE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bdJo7DDGccBN8a1C5GK26peRWDr97eNuN5FCzqbthBNmnLx1X1WDWE2RnCyadnWYZmQnns26kZqCKKhDaPcEv51",
  "key1": "3Nxvj7owPJq2gdWeHQHYQycsjsQZZzdwaUKgHdaMXaQMdNdp7vsPQRy8S3eJbkqX317bdfRcRQHeX5hnoZBaeNT9",
  "key2": "2Mv8dgEzbmkkoaLbgUSSEPt3FtZ3fUMSqnyioG47EBr2g8rCY2AKzFRBb3ZMaD6FC7Nrcfm3gMkiFg9dtFqKnD4o",
  "key3": "4n2bYMvCy2zahGVmdXgtxmKKDk2t2tNVb8TMDBkkZCp5SNMnoXLneQTV6FVN7zagf9w5pgtrzcMxWPd8tvjQ6Axw",
  "key4": "2BvXjahrFk2SKKjnytnJFfj6VmJboNhStxmtFkaRwHqTEgsoWPqcESayBvVZr5xkbLEUR1t1T4tJy4a3LBcQiYSt",
  "key5": "44n6RfV1htinrLTAFxrXRA9osskwuJFHhkFxa9VaUKpU8bvbxdZxeJaXZ1NPcSN125EYj25LvpNeyTCBn22ALemJ",
  "key6": "fp5EBXuF1W22pBj3K2AhyXQ5azBFNuJRsWeZZ6p9QwQwWwxBBKxsnkFQ9i98jumo8vFdn9gAs2NiznGu7t3jcQc",
  "key7": "5vpU4rjUxkMAWJV5VqSgmyu1z36vBabjChhaM1SvrGjsJNCoDWwWeHsi34VXj8fGFe8mqYskNjtHvNFDuBijAEfa",
  "key8": "33JZY75rmMcmFsoFPgWLbW12VqWijyjHmP814YhBUU679VjWkq8vjhjnvuk1dbg2S68KzBvM3mqDjvR53dm6jopg",
  "key9": "2UtXRNvCdx5ft9aDq5MgpQyV883Mynh2f2bpJYZuadu5Xf4KhYBxwnWkmjN9MpdPs5v6rkiUddEGtxDzjyXzvUcq",
  "key10": "22stVCDzBbWBrPrKKtEwzr1ofM3AZDghscpgJ4TpB18KqSSPmSJ4gWBuQpKXwojkrmfhD3qVfUCjZSwqn7REBLeq",
  "key11": "2SS6fwZ51MKyqHZpKQdZs8uuXNdkZ5N4rPNSywM3nGPvpftgZFaR65ArkykaTAT4sDP352ewkNVx6o5HBe8D2yjK",
  "key12": "GPWjtEsB6io9Ch1iMXFpVt3K8DNiSh8fRAQ8icFGPu7DgZqvdqXTb4xPBLUEiQFdfa6uhzvMtzEyqJoDh3HGK8q",
  "key13": "kfN6WwWjSxisj7p3ae46xDeHYVabicwsVuj4FrbdseJ2BiJ1xpc932iH7vYXeTWcaHkYhN1XVYX5DuHZJtDHU5r",
  "key14": "HUbeNfPDWpThHfKmYJn3hUfm4W76rC68Cd6QdJwXm1ybNPogbMegjVDJ97dpVLhQ2sjFpEGnoXoePMEJh9AN8bq",
  "key15": "3C69Xwv7havBF3g6ue6fJZHwyf5apz1zARybQsAJKW7RDYkaxeJ868ah2prSk5Z2FPrJG49FxQK7FpS2Xt4JvVX6",
  "key16": "4FaMdgFZWqW7vzgSbpJg5KxZAkkL7c9dwsg49TxCwt3ux4MxuepmrTrG2fP8wgestN7zLtfiWH9mPFsJVx1meJx7",
  "key17": "5CWnJxJx4ETisod8iGK1DayyzGNHioLC1X8V7Ye81nuWs1qAAvu8SvbpHDfMMixw629i7HJjEhbUiXz3TWcwqEek",
  "key18": "5PpBBcZ9bVPcXAvASfbaaZTU4oTrJsHC1vdFmNyZo1xHJ9MYgCjd1MLthieLrMbT6mTcGbt41K2FZoVFGgNp79EC",
  "key19": "5kUKAdEcRFstq3qww2xxEc36HMQmrEnFc2Ft4xkBpYaf3T9wHHe7VJj7oKxFhuTfLXSNvbE4JCKDx3gHp8M5kXcH",
  "key20": "5SA98y9EBM1Yd2Q5aWnZLYuSoAa8R9FLL3uGxn8E2HW3aHuspEwXhfVVhxSXCPkeo5ARR6UGJ1x7HQuTQvxw3PeE",
  "key21": "4kRgs7fDW9favWvHzKiLwSnhFs5dt7z24Gs6HG2BMiWPhpyG44n8XFegtnHALtFQUzfEtLgSSLJ3ryEWY3bY13qK",
  "key22": "5ojB8A77BSXH65DRqYxsqDJzgBJ1V6Ck35viq68oSqUAhTooRFJV5tcVf5o6NdswaKWVTZnMWHgVjrtm9ZNyQRW",
  "key23": "4oMkEfRDp98o4XsFaQoJbwYwdjNfeYTFsAcXU4YmrThYypuVwxY9BVdnaNZSGoMxeC6bUT7Zo2F2wKTyRd7Le54d",
  "key24": "2kDkkgzVNdRhGskWHD9DDzckqypVDRuKxRfGRbCcd5qsQdtBT1sRnCWiNkhVYXAybridHEzrnEsnynn3sYW14Bkn",
  "key25": "z6MrAHGmXCTqDJLzSJkzZ1gXzDU1445YzMhjuPNwqsHpfjgqvCHRyTKa2pde6DZgDLDUV16VP95JEQaHqaiCULf",
  "key26": "2ZBTF9BBUgb8bmS3KjnsoXooNRYbmsZjiH4VWkv8XiL9iXauzU9cYkj9ifLP4peJXDg2oEkJXH5Gdt8uyGyNmg5P",
  "key27": "48Ri6nJD4hyAy9iaD7VvMgzRDvBUdFtrM3YG4B7ZoVmp1csLgLe8r369cg6b3jh1rePZeywhmKDxaMvc9YJu4BEm",
  "key28": "45rrd7LC61UDDybjSfRg6M2Zojo84gKijHjecvQdBUgbyrmsjsiJ11r2fMwTJ788Yu2bZGLZv3myK3DQ5s8WwS3c",
  "key29": "4Qto5xRZxnWRgTEVjd3WHBNP7CS6BGyfFMmwpPmq9GnJmH73ou1Ja39xMbDiYQpj6BtvK15AvdnS6pEmrt2Gz64M",
  "key30": "5vqvzwy4M1d4twpphu25MC1vpLA8abtJPhhs6bQSPrHg9xGShizdbWoujnGeDnT2GJXFAqt89acbwjCJeNaCJpdK",
  "key31": "2PXDTzeXW7ugCjgDDmJQJ6Hzz7nz2TKXqSQzgzd6zRCaDN8dMapaaZiyerv4bVKTbpa9uJYRWt6mWDZhxCGYQh2h",
  "key32": "45pWVVMLAPjoXV9A55JYEWWBoNbZh3q47CSqAyLs9d5HqDdjjicaisSvPtDcU11UkCbeuTqvCrWw3aWGujm13bp2",
  "key33": "3smLqE7oh6SzsUre4QmcKAX1UYBwvm9MeP4GugGqczWWSfyMuH5c3yiV56wFnKzER7Mem8q21EhsnuoByKm3hTyE",
  "key34": "33HUTJu3yiriruGaAnvVkACExc4Es4k46oiV8Nt6wgNpL5pne5hiTw6Nr2kjBcRB4pZypLv6M3BP4n5r94oExv9d"
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
