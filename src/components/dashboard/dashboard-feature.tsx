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
    "4PuWa4sr3cvLcPtX3XWCELK4kJ4WHhQ2cBeGAdirgjspW1f1R7Byh9MeNeEFoNATL1hWouKUGkuMPc3P9enCvAiL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vbks6eyrWyKyzoYfyTcK2iCy39CjDWj9DAfxMbribBbkZ79XtRSjR41WhkrW6s4KQrRUb3uNTzWSfa7EASn6We3",
  "key1": "3y17RubQDtNRgiTBB5ww5VYgdSQiupBWMoNSUwgY3ZyBVZ2y55EWks6veJREnVBmCjxHmK6TKwrWUmyBAZ6QQoCA",
  "key2": "4rx8D8HPQ9UQPMnsuecT3w7WTzBaUj2TfjRSGeAqAHVnkSeTwP16HWFNbrRdFKLNAHf8JF9FrNpWP5wZ5W16uzZx",
  "key3": "kGnnc3rd5uK3Aiu2RNGbuLWspLEhmDjYN9YzGZUoDjLhGCVhQiVLc2qQs67xcPpvnAqiky5q33NRwjzFRKChoMk",
  "key4": "35LAF1oQEmsHVanU8Mc4kq2DAZpLuWbYU7x5PMwJ1XHLh1LMgSeX4cN1NBKojSLxk74wHSJGrP7BGidQQLJGNKs4",
  "key5": "kzLCxRiAYt1bvnevUP6cRm7aRWWaiJXCrt16ET57BxAKtLqGfe2MMjzKPxW51YTd3q5Y1BYHpRz11ZdEMdz5ABA",
  "key6": "xN3e7nodAuEs8uC961zVgMFkuiv6wS3tqr5GWfYoXar31DJo71LVrbKA4GV7QpJcMqH2DmhEq5FtTPDUe8WgTnv",
  "key7": "2oBr1rK6DvAcPjx4mdozPqQrc3y9s8HNyNaGjQrpqtD4wgfgNNX4kPS2aCENhEmzzsW74KKmfnW1TUDXt9UUtgcP",
  "key8": "2v2yzYjmyF8QAYY5ttWf1hu6qfyi4zB3vWNzvYZBtJvisPVnHvKEMUa3gVVD1G8eLCXJw4yiYkRYFT8byAQ7oY7T",
  "key9": "BVxmDS5ipmSok8J5goGwiYEBGNg5auDh2h2BWH5fNV5QFeayGh6GMW6wpWz7GMzTqtv5JpL61uDdbvw1N5LRk5t",
  "key10": "4jGVfPkSQLTiavzmiR9jPhFj6nPu8BhS1QSuGUyvE3FryQi5KJMUuFsz9fnw3FUpGq9yDUFyBMr9VPHgpM1uhwEW",
  "key11": "C6S2kAnVhcjwMmorpcsnJtdv4o8D5prcXMaZyeZYUgFN997TmN4SGqbV6Vd2NFPKvxJ8qUo35ZT92XxoWwy1Gqc",
  "key12": "cz2S1PuJFHdGBH2yueTsXDhxZR295UhRG2yKxayqrR8PjJUsTsZZtVb89sEF39f5Vuxvf5wndWoNvsozrW58xuY",
  "key13": "SfLYzzsqcV7fbnyRQr7NjWt3WmuqNvHUhQxpVrYyifXEUmm7AWvFFT7vrnktSP6ogv5cbanPZJkKceCHA6TAASL",
  "key14": "2cXGDNiYSP4zdkc8ztJwPTxBvCeop4XhcVd52ezWNX9LzcPmNUfvfd2B2KNBzzedvDYpRae6EJhPCpCrGQzBXoWw",
  "key15": "4MDLa9JZoCGpWsszb7D6Mt2fzvTgrFbWGzKaHLBjx81HybpTCm6oD9WHwod9j8TherwrawoPUHkaMYZZzhw34N8S",
  "key16": "4Hvzf9xCZg1bkBhZBevUZPjszjsrA9vaYnwge9UvD9uxcUTC5WjVuDeYwuaMTejVEQV5iBeXydz6xjMgRbBLtrpW",
  "key17": "5zSNsSrwR1hrEbASCuGUCstS4NeQ94LAL8mGDs4HexuRsUKqkxB9xScnvzYKwWN8FVV9UHEsG5v25gs64gERLiVg",
  "key18": "MRg4XEafdiCkJJYPxff6cx9TEa4SjQHHHH3rg2ojRXLxaCpAwPcDFvyfhtcXCeAqyeTBsUfc3q4PpeF4x1i3kiz",
  "key19": "45v8GkPDQhqHkVK5U1HuQqk5atphuyzmdPTs6m2hRmEkDjNCdQBkaVVXuaJdTsCBg1NuHfekXM73zEi4sxe96m2e",
  "key20": "3TdRruVxBk4SxUDYkBr3FEa4sZapvqcnGtoihkVkvmNh12WP8WMBKkVDbc3DMEP8GHY3MrDXSNT6ZRVRmewbAsKh",
  "key21": "w9nFuZuZZKb7Fcm4Guf6Hc1U4NeJAFKECTmczG1Rp4hxcx5inSznoCJXemYN6RpzAbJ7GNPwHAck3HY7PJpn44L",
  "key22": "38yioHZdncFSQTvPKdXPR4WQXPmFDdeLcurZQGTDokJV1y23CNCxR1HWKfrmSaVRnx3A5EjKc5cuRBQZMHNi1bBj",
  "key23": "2ADkKBYA4UYPaxQ6HZz8fjvNQRr8PoWuXLQw7LbVCePpyNBCmW1XnqrcsZe8zMz24Jh8xLULH3P8ZP9pPqpFiy7y",
  "key24": "5rqMXY6p32dAwXh2T8EojWfRCktkNYErSTELVNyYmCwjqobtkBkDQXsKC1oVSuu1M6ia1oMvsBfunRaQkW1WVaVd",
  "key25": "2kXmJPWWSH2FNMKg3QHyL5n3NNGXkuHwVSxoVnoRzcFScJ89Rju4JdLWUFM51fKVETEYcRSbRa5c9kayYT13H4pv",
  "key26": "NzbuiHXJUC3Q4zrL1aaAwyzuwCoDsULg8zBAogH7XYnW9FJXAiSKZpdnw2MY4JvA9RL8aAitseNKaypR2MnMyaU",
  "key27": "3ZKM87D81PpLEsPdFsdhFHvRdFvwBbavs4F8tcC1iAAG2YEGbQ2LCrygUGcN892L8pCKSHyHZUsALEaGnR9GHPSW",
  "key28": "2aG61sZLiyTuipk3S4Rc9NQjcMqGb6S7oAvSp3wB7pTeB32LfxJ8uT7sbPJp4UBFqkaaBGkQPkgAfDEM5mDawBC4",
  "key29": "7bSf8a19wB7C3mTw1NNt39JzswPh81imvuA4qAEcnmcMcRns9FRUPMkvqbc8o6YMtkukLXuuX7QYU2SRnhCcPwN",
  "key30": "AzMxfmm4JXseQ7nM9HnCpfd45zHAQpKAQNhFHiREB1phkKkuXo3mj4odPQtWJoXGXSpFxpgRkWLWF6tq8F9THZA",
  "key31": "3F6g3bbkY8cqK9hDutWJZZYqM16QFRLs1tWn5eyQdnLNRwRkSTdh7fC5DFBav2gzNpJg3uxAdmbFuEWxFfjqpbp1",
  "key32": "2cCU2SyFkxGoNX44XdkNACPE2ZAJRgaCPJyVmJNzBEoQNV5mhFD36ssGdKq66yY4Wx1reqd3LYj7kitFKexSqFQv",
  "key33": "kPb6MqMLM1KxgkGMDxpBRjcGFpXztYoGd81ExsM5an5niJnGYKM5cnSQXDPqV7XZrY4EhijoApYzEyP5JSJts3m",
  "key34": "4PnwYrVHZ8aPDJeVkD4V1RkJjMdcsbH6g8WMveQGYtVQLmzpQVaPEPvxUHb74yQBGzEdBVwUGB3EnrfE7NTFdDLz",
  "key35": "2DWr5NJitt24d8NU1mo9omVxpciXjdyBz1b8vxbnWa7RmHXvqnYmNKbhH4VMuG1k4jpV9uRRRuXXLPVQf9TpPchS",
  "key36": "gXpFLqTYMCArm7R6nhRFWuiCTHwU1QxVRr3ArpDJ23pN5pgc1JwSM8VEMCDN8rbUEWhAMuuHSvQoaYaTWUgWhuT",
  "key37": "3wjnw6sLu77VW543Gpb1tKe2w464jbrwE7gJefyvWiZkMpxTNHyVcRYxhSx1QFMoQjZg6uV4waRG5thgeipqNc48",
  "key38": "53W9uzKuva2pzawipbXzQtxoaJSCquwJXDwV9xHnTN7ZMxXdY1udYUhsHp1fnVym3Hj1webe6y6zcM2agDJUAcD8",
  "key39": "4cZVpcsk6LWqehRNd4gdcG1DiXVpmmXw5XPbghKvBi6cXivdSDYHrh7cRZbZo9m2emMVunSGWztyNQVRWr7jyzsT",
  "key40": "5h8EUwhGuAtiJitd3Xg8vhwPJAKHq6wWEMudRqa1SsdHx4Xn9rQM4r8XDTaUc6inuXLZc3jetNswYP1EWyaCgwNw",
  "key41": "5itheaJToWzXsik2FHMPWKjZjZwPvgtA9Cnb1X3cehctVgwKKsFb5XyP5hMBqLCYeZxmWQFqB9wFWLKtZjgyxKYF"
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
