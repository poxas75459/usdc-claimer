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
    "A8RS2DLAZHDv3ahaLEJXx79ajyZ7JaMr6jVFg21Q92KtpwQQLyB7mAH4Ux1xXcQGoK7DR81RX6HipPsqmtjMRqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eJpmSyH64QhjzHjg3aZWfmxYbJeqranWjASWuzRQp7xGmEtpJYGyNgjYCD5rQe2DophWgH5XMqZ9qsnPVDnPJrY",
  "key1": "46U8sowAY2CshbuAzHV2vBsqp9yo27y3nfGbM3VBFdRhj7E4GDLcfNioxRc4hqwTSj2aoSV6u7uv7VwMp164zGWv",
  "key2": "677qLZyVixvZ2SNwvWnAwmLJzAGzA8MGqZuCnA9jT5jAfc8aZKXjYnTsXWPjeYwUMprJ64fF6W7PHQCVwbYYhYPR",
  "key3": "32aM1kQ9iAxmPgufjRSkWKNWia58iG1AKemyHTPR9j7jKhThC2PYREamhNejQYDgPQNizfEbYVYqb7k1SLdeViL7",
  "key4": "2pavtvLtbpmnEbX8ra8WFrJRHzCC9ntFN7R9ZiKyXS9yjQoMJU5mGY4tghhFT31EGWQ1aHbFg1UXjCmYxnn72smy",
  "key5": "5ayPj1o39q3w6x5cQKqRnJ8qNDUKBycFTpDvvR4KPodUwuCNRx1LFU8nS7RqwW1UqWRU8WqSer4ww7BqsVZ54YTG",
  "key6": "DuMCMyNjCSWtpCUzgiQaK31YnSxkWr18Cjomy2UZBYw2tvEknZCQr6jxQTs3a42N9nbceNpxAa5imjKA4Xydw4h",
  "key7": "2ur1XvoiFZAmaSWHgmxA2Rmir2S9dEXYsuRivR5VMANBTGVRvkZu5NC4qAuk3Wbrp9Kun6EKy8VoY81uokBZTfD3",
  "key8": "SEWcLGKsTERAcSezKYym4YW5aRA7Vzuk6TGykrtyDZKARF6fyGZLeQMj3yRcYdE3XqACbg7fH3EL9Nkwuurz5P7",
  "key9": "5eV3gMNCEScxFomFVDnzy8T3Xdc4FE6R3Yt1JrRipCv6Ybg5mMCSkt9Czbg8ofFhmVjsji1U8uSAFScUbqZ6t5Y2",
  "key10": "3innQa7UYMGvcQdjv9BtBVY1XQqcAwZR3ow9jJ4AgYgGiRJaf5i8fi6T1tq7s41mQTuDpE8ZWXZJ7JeCMW9Ch79d",
  "key11": "3TXZiLAcoX8JJzfy1Vhg8SgvwS8Hhq2rXv5qQRKpjnXUWUhzZf9e5gijSDZZ9YnAJF1vkWRFeK6dmEV883jnyL1G",
  "key12": "3Z8qBHfXaDWweEF7bAJfeNkWtRU6j3xfX5Arxs27nhE3fGtu8KSLZb3s649RdJqVCFSWSMKUkryC9qLTYhxGVpHh",
  "key13": "RWXc6oXQLCkRa823nSVCPwCJqQVFk6PBDeoAK2Zy3eX8LZ3LsX5Ta4Wj3xJtNjq1B3d8mGUbFcyFSqAPbzz81LT",
  "key14": "4Rxq5sDfpLAAm3pEyvm5ztKA3BS8UcYgEsaQY4VLdpQrXQzQkL7BAKcdRiG6xhtLbeKPyeorZaJERAzLnnnuLLMc",
  "key15": "4vgySBnXrZGRYV4eAjN4fPs3YiSSUNZeJpTc8TAkWXQDcgJBMcZH8heraWTLRhKCv3NgMKbXd1yP3fDG31ssFFGj",
  "key16": "5xZnWJehnrhK3yFHGHuXeHzD7b6y6J5mDnj9x2WoGkYYBgaVF18R8mSqBQt4oMFP3srwWRCNEDxQFkiEtgVdnsrU",
  "key17": "5q23QdavC9YgTsjCuvGktnD7td8QmGBnpV9hBYpoFnyN1jAcbNXD2wFcmkqJyuuQVgopChNRYgG2VQgEizN9esc8",
  "key18": "2YdRtG6WaBuCwZhAXhM5oasvS7F91MURmhcMkGhLja9MH86d7cHAZukpGDcGWSJ1rJdRHa9D7EcQuTZJtYZ1nist",
  "key19": "gZamWcYnabC95TpAU2RHTpFaGAr8M1FKuTw39CMPmFf2nNbBfbSq2ir2cGBqyTqFdVJM4tQgRVQkZssVRCNCeCN",
  "key20": "3Pggr8FRBLUXTbLCjnApbsmD2JbCw88843LBcYKhUdNhQqcQ7CXmoTbQpEsBVWFk3nYViPw89VJjy9MkiyLAfLa",
  "key21": "5MmHzsarCzFR3wJdP5YapBgpCBhENqdwMQHsyiQ3PcAf18FPYPgu3HyCHb4ZJUn8mypV5dVefFhunVnjxDYCYBFv",
  "key22": "4Ns9f59tFwt5vyxz4WcwjpWGJUAGcME4qgEcBDx3jySVqH7q7sWdTpUDvriXBvwF8sQBuPHeEXPjcGvQ9RWJc6Gn",
  "key23": "g53bc7hjN86erjbQJ6FHDQt66jzpJ4koMVRX3jywaqNDCXq6LxzwekaFVim3baznHT7P8Gu2AzC2QTCdE6tnV5n",
  "key24": "2LGWNcXFhom6FgKDbYvNg3NW5LPBDan83PzEsGG777K8gWgLMBY8EirmreBVFnDJ4y5Le67C235V1FaJFcRk3yVM",
  "key25": "T3DjSPWxXioQqC7AnvUeKd1TjoGct7vRWQ3k6rCMDz7PF9HzNzZEWjuQ6hEpcZvEAtuDaJ4f3bduYq3vLAEF3xi",
  "key26": "4AtnuNuCQFbVzUHBkc1KzcMzKarn5ZaDrghoRn5BZDY8Div1rmV2zYw9NGuxAeYMAupF2gR8ZgcjgWJ5aKtVk7e6",
  "key27": "4LM3eDePLFaABEzxb1mzRv4yY9FRXqHkSep9uxs9o8SSUsiMHAV4xN4AavJoZD434jsEAW6LV4hrVifWhptzz7WG",
  "key28": "3fzL7cL16zQ27fHHfRB5FBeWNsNFn3NjBmt9L3fR7yuat6SJQ8aq6Tq72zE3VE4DTptfP3BmKxQrVer3x9bt7z2K",
  "key29": "3e9GRfmvThmjVoooh6uk5kJxrMEmFr8TeS6niGFnq7k2d6oZqWzwKVMiTf8EB29NSYFHfntJHLbz1BuGWra4x7c6",
  "key30": "5mpyf5NKyUTsZ1yPoaxdgzcSpnCmYtR1iDvRTNzEsb5hFHRdLx1ew4i7H7uSkjwu5tAyqhdh2d5NrGncEQBi3seu",
  "key31": "5VvsdYXkEcKh1iEdtne3zZB8BjH3SQmcEQry1zyYV4dfHdJMuUsvz3d9BNsRfU91V3ZA4ZNMcdxB7UmrCGN7CrFN",
  "key32": "4wuEcKwJMajLkBu4iYrgvkSZBv6XbWyJkuULoh5E2mdR9UJ2T36PTWhAFR4D9PkDujPf3DDfg7aFP6EvYBehFMNg",
  "key33": "2sJiL9WEeoRBsp5ScvxkjpRzLZLVmRaQP2sFx6ZeEAwCAN6Au63Fx6LW88Lva6h1ii9mic53Z2pBrdZHbzDtoD2w",
  "key34": "4638t1ryPdEaKbp5babbBAYB5wr2htdrwwQZdV5NeprZJDRHpJ4x8gYPrs9MkP18G8eVTctuTdSSK22mzu8bC5fT",
  "key35": "2djGztDgZKUW9bj6DNLSgegxsuGjGkpw8iu9h7adKwewnoUyHdZBa4AU99iJpPZkyw6RwbL8PmppJQVx1mrjJcxG",
  "key36": "4RUnQDTafqDeEWAvPoP7TZf2SSZHm7jqxGcBSd2a2zs2yTjsKvmh2DTGMLfSowawjjHXno854iR3cbZtp9MukHdY",
  "key37": "41Envv523XwKJWiKub9z5rHUdPoabP3k9ceFQDhoejFJnTRxnqd8tKMdqArMgjLbGU5gxyZMc4ySoMfne7LouVGP",
  "key38": "4q3PHqT2g7ZFrCAJ3wqmHmZu5NRG3GdQo68ZngGPrWw5znhGcVdfP8e8jUcE3gKyAi1enWBF4amL6UM5YRE1UCjY",
  "key39": "31RAKNDYkmvjvpskUMR7jMoJiw2xMBVyxPAZdjXsPF2YpBF4JLt5ni6SxuXvgxoqfMefPyaNUSGgDPN7BiGc9L3C",
  "key40": "3RkqJYNDY9Aou163GfuAkZTFqCDy6mn1kALPb1zendn77h3p4E7aeaoZDwPmQtVCec6JpnRQL7KuTRtTHEpwcS4y"
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
