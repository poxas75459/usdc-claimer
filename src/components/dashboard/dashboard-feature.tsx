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
    "9X4Ka3XzQwi5qBzgJNApb1nMM1fjGHgdyv2TN2NQtRYoV84Dorr61UFHjnEi7LyUY35t547YtdGKF7a7nVPSiiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QxVGySskjB6pxveSf9Mt6mVK2rxmHBZbM7snLzAeY1ZjsMDkvM4tG9sHER6YboaMJvpnPZcZXar54GsMda8LGvQ",
  "key1": "2RnjwUzigWKihzG9uxMWL8AKfut92Xxe9Q2ywFF6gkRmXFBz8T3yaGS63ySGtiyF3A1wQgQxa2wsTt6eTUPFfq8S",
  "key2": "4fz7LvzD6nJvaYpkLeRdY584Hwqbu8nCitGP25hXNNsSU9VCzLQmxNeYpSS8DQ15nvsgjg5bSXruPSRfV2W9Udt1",
  "key3": "61HwbeDnuACsbgTXGBArPwCiWdEsDZ2xEn6GKX2HakTYvBZp32u9cK6Bxm5wH558xt8BvenUPLUfN6godjvrLUGw",
  "key4": "Q8b5uQmhtpgeWKxd8LwD6EnXXoJeyqq2RpheJYfJhhKAPv8zZSSoNpaDBp8pooozPLBu2TSiE3JC7sxmNNH3Z2h",
  "key5": "29XeafrTxaQnCyJs7Akwo2ABdisx3aEWFonTid3Q23PvuBsN96wmYudnfqHhdyhXTtm1PxCLuaZLNLRUQcdQnk7h",
  "key6": "4uhLpN4GxCe6wFLDrnHUBwRwUYVNEs2TV64bx1aEe2CyCKbM2XHrDKLmix9ds5dUBU31FXZZUcoMZgoAZWcRFU4R",
  "key7": "4rFFAzXwJbZA26r79RVjbYK45gZhyurnpxts5BqewKnQwdMqqzvLnichJ7hn2yj1pSczhBP4CdNKSacxtak2Kpgx",
  "key8": "EXKpTN1DBDKcCbtwP11zF1rk1NmA1AHbtYMggE5uKJuTGauCjH3xseQrgDujgYp3pBuYyjQhiwrvLAri6WVhobX",
  "key9": "3j1wJ6wAg4M69nWGLwJhvDL1x13fgfMLohnrGmkCLbV54E2f7bryzJBVc42wxrcJBLzwuGNeikdGgTB9za2GN4p6",
  "key10": "5HWUH6ucsBtvAfXmHL9K9VryXKX8GvMGVNAPRrpesnsSvi5BdR6zkHx6ddVBAJpWLwH184bpWNFjeCrqFpdd5GJo",
  "key11": "kyiJnujyjHXPQAqzg5dEN8kYqyWPnd4ersgbFctVvYreETeVjkikKjoriYrfQYdovanSKczRgSJqH7RZpRRq5m4",
  "key12": "3p48KhTVdnDpM5ukG1JfYx5ZthgWRbJA4PQs4rQCcx8Bf98v7e9uA6fFXX8QZ8F9iyZBicbe5xGDwT8gB7SwDcfD",
  "key13": "45u8YBvxrATPgSTTgNJ7YF1bqJRyRPpH7wZswPsCz8qaGFSWAQYZT2TDWG4Vow9g3Yfp7Q8t4LAFwwkyJPHEbenn",
  "key14": "3TMh1Ajp35SRRiLD7cQ193Acfh34KfUB9jZCHfg6eK3Dk9iUvSFKTvcZhPr6gCXGXYFCa3n4ro5qX2svUADooaHB",
  "key15": "2GeeRg3VkJAC3FiGc2dnVTnAQEtPgw55ZyCf4jnGe24nCG7DuGpzc9QD3hZkpT82ajrgQacGTCvrkzpiTpFwsMxJ",
  "key16": "DG41B6keCDXHrcPcjd2KBSvP42VvhY3zt3FZTjMovqiKjB72aBPuLJPCeur8vKMnQTQnDhDs4oEFV8FqGnXwDsh",
  "key17": "2UbwYhBXj8DNppDRZKaVmSRG6ZYS4CFcR3fQDx2pcUQ9FpxFYiccFcuoPVqVNEtHmpL79fkJGzMGNSBW3fZS6oNG",
  "key18": "5LUcCut8ULrA9r3DRpo6Q5L3sxtZwJeAEvR7Qkj59k4mypRzAkuFmUXcPTWWXTnMassMmnncRFD9kQ3n5ELUsXTh",
  "key19": "25sFiw7asJ8vjzdpNzHXR86s1g8Gx4fsfgvUvd1ojpgP9gqB8YbZAUpvqbJMKzC4ijiGdsTHddkspJNc8VLm1DR8",
  "key20": "3oXgbrrYTpKXA57pfzXXiS6FXsrxQi6WBePGmqyv7UL4sK34nDRUBYGXrRqozYNpkBirTqKhPCqCtBCpWbKk6Nq2",
  "key21": "2YXzbWhqBbntiKLbh6sZxNsv39jwRX7rQawpCFveuiFhrUE57nw4JLQWRnv9ZhCb2E6Z7gi4GPAgXRN2Ri4HDUxq",
  "key22": "3P3qVkjhvmrqcJ6HmmQVShHXiSFaoDqDPQZTPShJ8psZJTefTKMAf8XVuDhg68B7H2PLyqYEXr2tTj4GcLfMHiZx",
  "key23": "49Ux1MYVcBaktmDWjfTtVVo3ZShh9RwFXPU5dE9VoBNjiZ8AgpWvFffzDXDWE3M4qyNFrfUeSMjJgSSpb2nMbtyw",
  "key24": "3QipsAZtE3g5Ch5cJRT4zoy9ByG3wo9QRPWaxvE1cVbQDKDxdtvEJBycccXqx9LAL8aR9VzDzg66XykV5A5PVgyj",
  "key25": "2BfRRf5rp3cxjQJGEuPXUwjtjKztQYcfdH8xvgrWV1Lphoe4TcGfRgvZytuUkLyXwP385mJDRhayGNPBqa6egU6g",
  "key26": "2V4N1tNZcUuGtRV2im8fdP5je8CaxRD6QQtcN1Azm8sbbw2tB3Q54bhHhaabRjc17Jcvi3hYP6maE1HRTE6PjT2j",
  "key27": "NgrGsdPhcNdM8DqNVi23NgQoW2oCs8TB8S4DiiJx6LYBcUDgtCmerfzUDyTTztBN4H7NpsenBai5n5WgpnvXVWL",
  "key28": "2fkjQCW6c1C1dPx48HsjeVUFCKfB1xrqXuDUv43NjJefmngftE148ZE4G6ZjPmBJD7j8Ep4s1pvzNDGrZvHVqawC",
  "key29": "46tipqFj9JHqx7CVEDNjp4dew42s4Mz1N3VnvkFBnxxXkng2aiV7fULQYPp8PmBb8P2Qg98xzgr5jxT3srggGnYN",
  "key30": "4gr9P3BBZxuAWtPmse4bLJDvXvivW4C74TpLSbQKmRA1C3DDMQwMKyecxQM6sTPhDVwrp3hGMbSyKS8ea5M4yjeg",
  "key31": "2EkfTyLFhLFoJZbGS2pnt8ZjrqQczxPNCzQ9vN8rgHXcsxoXeudCQKTXMP89e5wVLytgJLtYvLzrrdft9MX628R",
  "key32": "2779GtAYfmdSJ1BDcth5Wui6vkffjH3RzWoZ9hMzv9v4RhSRAHa2Ja3QERL39YE4pXo3iZivWixkGA8TWVXY5CcM",
  "key33": "57rBqXGk1iq4NwM3CEfdm2QXq5bwFvfD2385LmybFZw9AUfHyL2CDm8gNXa85S4urXsMWZWMbgPTztAi3cmE19ei"
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
