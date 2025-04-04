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
    "5fd2xfdBwnj1p4fDaRCjUiQj7vbBGk4qnsubjGozchwURKuGcjutLRsMggGig4utBcjkVFcfCY8e8RgX91bHCvqb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48nZnZ9yRAjmzm1Zhm4j2TuasjHj7uXCvpa2Kc3EMyU4gbeGWN6BZJ4dV6GTKRsFoEgUJgFQDYtWwj6Uei5Qf1j8",
  "key1": "3dRAqNCtijZaSgi8FynNGqx8vjHx8JrgYQu1YM2ekpa1oHcmsr5PdQZZ7K9mYon3pSzXbdHkTApoT67vnEx6AhLQ",
  "key2": "4RSCcCxfHMcTiuJPvt59A8MLKg8Qc7MgNLtMsH4i3KtCU7TAYLhkrV8d5qDcf5XJdbAicaBZcyPVAMCqMVkAYoMp",
  "key3": "eYhMKDfJyyujDTVvuVuGgErrtyRVx7A9wnKJJt8xB6yZmYgaz8bVARg6YY5M8uCArSqrBrGpCVmp1rGhMXeE4eq",
  "key4": "3cycFnud7A8d4wsCwdjvmQHCLBAxuM6jyoX5GC5EaHGa52v8RqeoEGao3e7AVFW2k3YM4xmewAHcPaLD2eY6RGp6",
  "key5": "sHMvNLkUJgo75M6EQYsnwfDLBBrsxPGDVaWyURnPAz2uZagQ2GraEYWZpAkbR3H6ehJa2SszkYU5MoByFNsTu29",
  "key6": "4taQzLq4HQMDJ76LGK2jJS9be41iM1JMTftGAggYP9UVLXn6bRy5MdseXv3ZFGm2FGvwtKCZFYVaW8fmLDT31eYY",
  "key7": "z2jAYTNnR4Hk32UZNrhSyzRfy75kteU5NGA4tB5naEKdSGmrgDeyuZhgXLhwK4ooCuzDYjYcqsS3rCr96aZ8oST",
  "key8": "3CSuBYYYrNiy4tztWtmYn3amhMVxaSEGyaurdCfYdzvF9SutjYo71A5JBcGC6DmPgrAG2eMmf4MP4CRQEs7f9mDn",
  "key9": "3hg46unacQNnwKxCpZMcxRkRSJkbQMU2tTkuVPyjj239f7FxrVvDogFEWNs7VQFS4W5SRy4TnkbLrQcsiFiTVZT3",
  "key10": "zVmCTus1dRqdqRaDwJLVKKX8SfUS5NacCgZVMKq1vtiEjyg5gaqo73JC9kxVbLiqTAEy8ifyDm3wU6SiURBktHj",
  "key11": "3VnqdgE3vYBchXbT2wQ3dUjyS7ycXtMZKWnfxAbZHfqQW4XjuSjNMXjqtCByyUym3Xj4cirHyMsTqeYPZx5P5uTr",
  "key12": "5zox68i9cAiRNWaq4V2obJ3SS8SwgkCbYLMsLNC9LJWJck8Jtn6vSkPGAaD9R6Y2FmReHxeVKbH9DeXQjpPF1PwG",
  "key13": "67jLejCdiXEr1p4wFabaMW6uSwrsuQavZJPBnQo9TqhyMSLNJZkzypD2NtuqtHf7chzBjF548G9gw34AcQRnjgcS",
  "key14": "4DyrPFPz96NqzYZcjepzTrY1zii9H8PUT9i5PErnJ3FhV5JexQuBWn8e7MyHhyaFtBaoxJdxasfNQGMqJCWVL5kU",
  "key15": "48SxWKRWGMes5kwJJLZakA3Ka9rftbHpCVYtQuX5tELUiCXL29UWiA6yf8RfSXK1KBEyMKS1YzBdfx5ziGL2TpyZ",
  "key16": "4nXLUdYXAXdE2b8XSAzqQ5Mx79eFS4RtTaosXjTX1GtYpSuHv3YMkukXCkrUjKLh3TySkV3XGq7uAzqad1N18n2i",
  "key17": "3vxcEREsLCSJ1vt94zcmp7MbHWCE64bFRbwj6cxcn2YUDquPmygizqFAuSWxAfKVzfBSizZYTmg1u1p6Jk7aRohT",
  "key18": "3DGuFaS9mm2PfUxjctrNEEPgrB1U85evDpLULQDpGUErfEcbPgyWKH8vQBYnd2zX3AgvMzR1ZMTimuYZsW3F23hB",
  "key19": "2XUrWKyTGcmwzXwmNDEDL5cpQQBQ9J5bkbd9Ze8qqU7WK3CMjNH8LLgkqjMLCuVhkRsBbDi3q3U9Y4G6QtP9izBH",
  "key20": "5LSyKRXHtYPZGTwCmtcKSi7EA4hoPGPrvfzija9LoshATsw5YvfaXv5bzdFj8ujHJtJgXfFn8UktXPQ24UDqDaRg",
  "key21": "4RLWpcvnMGHRzzdrNmdeAPn6okFaGVe6b9btgVBrk4o61tpgViEMWDZCLkEVYF8U7XXJ5jbkvsBPVyqi8QR2A7f5",
  "key22": "aFtJ4tRKaKhrBiwkf1M7xqKikET8857zkuFqJCVxJuWJUMoAhqgQngy7ATsisJ1x2qSSbtabctcTvRzthj6CcbX",
  "key23": "4VfDS1fvKhPZ7B1pA4bYcNNKARQXrAwj1qAUPtfkFZChs7JBAE4XToycwJYKuiLoHdL1b6DhKNmHQHDi1n562KMP",
  "key24": "CJgEmzXe3egoMAfwZiqqghb7yeAJzLu7k7DWU6kSFhiXiQ7squkryGqZ7hET8hxYxCHeYL145DafURmzFeZkJoz",
  "key25": "3FHkAhTiSqM42ARHfvupzHqGXhbDcgLThEA5TLzgF9BaMbXSqWufm9pqwCDHFw7a68mGQTbK5mdNZekcoqC8hjJG",
  "key26": "5xHBQrqFEiRbVEYXZAeHThEJTxAZMi4kqEEo3BVjXy57VkeJr8tKie4mMT6X6obxR35rZpkkU4X5syzH5r1eGWWi",
  "key27": "aPsTVFe6qQn91yWnp3EDHo4up3Z6VYy43Susm7asCm3epvURHtPKVibjLQTEnFbMCAX85crUET8eWJSWBECNYve",
  "key28": "3N7NRuQr4uUY3DVvCSKvHGpp5reLsDS3yrvz2u4kHLa7YJ1HVvoUJ3pggskFaDmyXMH9dKeo431SAwhCcmyoxBb2",
  "key29": "5kS9fcAHofGn8TAPsosWcfuBsyQg4oxNqBtW65kL4MTCY67GJg7eTFPk49RzFExEb59JnJp5TNzXLv5Zi4tuct3R",
  "key30": "4Znut93YRcMquNTzy1QR61A6VU7oxKjm9ZeZxFJXuyNGDTyFQbpXM9XLk168bRSYDVUcyuRMUfuDcaXs6tB8Px7a",
  "key31": "62BiEcwFwRxvMi7keqgQ6asp9e6FVKdhmf5KGMjpPeV1ZdurP7biPGdaZPpxkWcJZQDHhaD1TeNLayiwosr6jaqr",
  "key32": "3zr6HFntDECSBK3YJNVfEipWX6QUcPYuBpmNkEDUUKmzrhmm33ggnR4LdH38dPLKVykpNdtj8hbHF2sfwyiepQxY",
  "key33": "3nyazpht2N2EtV7C3eCZ6jUnoRR2BhTfLVMibsSjJaomuNSbDNVMDF8qr2w9thdna3xYJYQsnkT2AAWKkujpKi8E",
  "key34": "4hhhZPoBSTJZkEoJZVNx4hU567ERbM5ZeQVVim4HrkrPw3D5jBvqEpu7ki31tnBfpeHY7YUgoY3XKd1XyYC8d8bC",
  "key35": "2kULd3KNxopcT4tj13HpAJvBfW4yoWG9L5ZnvTJoMuRk1VQgX8hbrMRwdS4t6fxoRVJHGhnfqHjn5UFkPNEWULB5",
  "key36": "Lm9pZccU4cR8W43iqyjT76g5zdkNwDxg7kP3pZymoJpVqku3m9g9XPKG83y8hXJBbdvy3BvTXq4AVsE61qBBfrM",
  "key37": "395jawwgRdAPe2RRi8aRUetpchwNsAv3syjg9vaw22Ak7K7RtzpBYEHZxggg7To5iPNhhodtsUCLiz8Z26kT1BaP",
  "key38": "3pePFyNvw2TtLPtZh6tgrdrWko1pqGrRtdyG2DpunLCFykCtCFZAYFisUNPG1PLbpHbod6RE2TjniZ9J6TdGEv1y",
  "key39": "5FJMr7ygCvpQZdAv4bXxfnycZvAjHcC4FBprhxYi3Y21Z3q8Gzsx5htZHUNFj3CAMqEi3mymbce2nh46F78Kss3k",
  "key40": "3eFB7a2DrvExGRCWbp3TdaHwuE3Hv2gazHcy4UZ7HraJr72mwa9pS4u66NrqSZ1ccjiGSqrBPyGWVejuUR7fJwER",
  "key41": "yVKiLof8hhCgnYRV4K1D63QvRprvgPAW8XoLM92Fg2t6JQvpfgFP4cPbpWxrmV4yFG2wYRpTJrf94WvhzrZ5UKq",
  "key42": "3WPAXAp6tY9dXTtLfy8r7zcx55H6ihsQYVWUPx9YLvP839gWLYdrEkUU9j1vyQLRGyUrwdgDLFKiBAja5VggYPmX",
  "key43": "523jcfKhTXP7AGyXzPV3A2VPkDinjiCka4Mjdrhwh55ajPg2b1vkCdTYGS7yDr9cFCQ7Yu36dADrVYLNNVFVWvHZ",
  "key44": "2KHfcdtM5WZqfcVnqLMveH8gsDUesJ8qfi4y1rdfQVPMr5EecwYrDLHs6uqpnRmi5yFtZ9QEDhgXsfcjXTpa6vQw",
  "key45": "3F3zDY5tR1NMQbVLryur7TqV7XGJpTM45ZmcprKjZrQ5GgqCHwvfLLmreGjwAG7wu8DF4T5CJVzDSEQgR8w5Mpp9",
  "key46": "5WjfxbR3YQYTzm1ESDsFsEqt2MSq6Kx9VHnBUFavW3xYDjXzu6g3sgJLCeK7VJwy1r4a8nbs5DAXWFvetNXAvq92",
  "key47": "64m5Yno8HPj7ZH9vuqXNXNpxXoF6Q4fAqJVuUDBFpP5Vwjy25DJgJCjExafApBxFTJgJ1nmURoPzwzGQ6RMbggmu",
  "key48": "3TQwoGJ9tAemexyNtwPFFctVCxEwXprS4mQgmMpuAUrb1d7xQ4DfQxEGBsosyM7jKSuVoYddpycJFAe8jHLbiATU",
  "key49": "2ARX6kFwUVB2gQmhA93YLWgDH2dgzGtxvSSs3WUc1bLjFwV1sktttyaBqv1ccGLQQE7BUX9WzpgVqg5ZUdg7vnMH"
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
