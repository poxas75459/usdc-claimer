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
    "b6dAaRdo4h87uyWF1USPPRMTsGfxzBSgeLcwXMaogXLXKxUrrw2UZGdcsUYAfuKdG2b6ZswznG3uHLFPVMwR388"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HmnGTnoDxTTkjYmCM9mh5tAzksi3fjH8rzoTHi2GQ6yK6CQ4NPUvnojamA23qksH39Z31AUwwn81HQ548kTyuyc",
  "key1": "4m8TrPL8oUj8DzKY7ayabRHJgAja7H2Xkjd8NCQKugkCM5nP6xsGbopYNrwF3t8ccyvkcefyj5N7s1xEHfQ3M3H6",
  "key2": "4kwM4Y2myTSPiaEfEpj2QyhRBL3bTdA8Pr3APJ3CmGNzxz1N9co81nadMUsSTX8PeBx2Mzyhuzw919kEKswwYhJE",
  "key3": "4qKSYnHymD77qXrMt6QZCbEKQ3ZyW3V2tpDKRs3xFT28qfAx3wGGbKBCd7Rc26KPAc8bquu8KQ1AHqHx5xFojxxX",
  "key4": "8pi1APoCsSLa8CbiLuJ98F9fWJVKp6Q6VJi4gKSkmpxq5PCVk6p6HW7uvWGQv17rMkRHhPLEj3jvCvcrjoTtQaG",
  "key5": "4LFFr5kcuC1kLseHwERdQmk81JE5911ELGQxrN66ZWaujWnyBJzXcVcQ89DajGW6WqqT4qgS6DequYohyzmmKhxp",
  "key6": "4fiy7689iitwAH8YqiWZvuLU8crra6mj7PbB2xmk6BpXdoMpbKKJptGB3yFsgE81ASYc6CM3j932qUosHZGRshDx",
  "key7": "TU5qdBKQVX7YrgzUnKPVGHftwYqgKQh135gMUfvERtDoLqh6wvBjGssh4PSTMFQNf8XdHMCbi1aT7cJU2BYiK6U",
  "key8": "4V4okCRgLVBNg9GPsvME9HgNAWqib9dntn5tfNQ3rncSV3WYWeNKD2aFXLpX12CM6GjAnR6TNyueo1K4qVVNezoh",
  "key9": "U8aHHqHPf3nLaWAZ4tjcX3rsbGqJ7ajpHVBS4iha1TmMhFte3symJhDsWptgfU98z2dmEEk9M6fXU6Exq9PLjWH",
  "key10": "5Ziuvn9StdW4jfW4CsWuGPD9m8bNbS8xUwXohLJNS8qm6m9QPxuEcRAgxdBzQFGahNkthinVHcRHqEfrscYNC2A3",
  "key11": "5ibsTCg6HyDwe3cTLbHVGPqjsGeAUY6pcnbFgMg3dbQWgEsnJm44peGpf6GUd34zLa4mnGzo4eK7XCwjcdJV6edF",
  "key12": "2kPbyjQz134Sotzb6tQ5CaDkT22DmRSCAY6VSFoQkQmfAyJAZkUdyKpgj46jsbEjQkQ75GoUtNeAJFPCDadGyDRD",
  "key13": "5vnpDtCEyM5EVbntVBpDEhRFFm3W8mu1ksVF8ZgQfow7BP5BcfatYwzg1oYoxRADuo3svXC1wC3iujT1LMoNyQq9",
  "key14": "2kKF2VntVfdgZCvrY6JeKBmgdDVKVhy9cfm2ZDTUBBRyFWtEjxoAuMzFHMXSMKm79KJBG1Cs97Z3N7vkQ3jeYUjA",
  "key15": "3m1itGf3pXPbyTHZnyc5dBubNUcgAg5bbqtuYaFogcZTV1AbzBtAeqUQnzY1CCbDGVvEnAxuvKn5eFUGNJDMTGvK",
  "key16": "3GeegtEr5egWidoHSAmCTgofMeueuGQQmpJgrE8QwUAgTApp59jkCjDgx1zECbrWFPWmUVZty4iPbcwQWCWkZLxJ",
  "key17": "41tdRSGZ97RMUXEK1Mvr8QznWZD4oioaXn29jFtTn6nihxuEGxKD1TvNB83QjWikbu4sE7G1obchdGmy6m4JV96F",
  "key18": "zmuW8ydceMkQLXUtkFhEW1TXbTLku3CmaXhBiKgTgZNxgrhMroATptRGrCxX2eN43CjFHkLFYe159mFsxz6mYCM",
  "key19": "5Xbt8wRzpfuZ3ym6T95ZMzCoWVCfd7rZ9n8V7ggBAYBVpM6KPnkVZL1xrPKQ5X5FRUug6ZJuw4xiT31ZqE3Lmb1C",
  "key20": "UtjU2QLTbwL5ag76f7FhHjH4z7DMi55kqQrGanEUzryqcfiTgut2GjuzNfqsi8T2ZE2nBq9hXaWjzs87gTw74Du",
  "key21": "2uuhE4zrX9JK7vjbkLNVGTDps6EhbWhm9T6h5VXD3rz3LwazcFsstLRnd46PQaVU1kqyyB9bx96woH1LVrFfGCVR",
  "key22": "3XoKBdcyNG1XZ8WLPpdkHLLrUjZNh5RFNwTfebgEVvGCxzHY1B6RQhrWn74UNbdq5iQotaPFeDRMNpZmBNzSrLbV",
  "key23": "3mrvzXm357tcfN7A8toeXNPvjWebuPNv24q466JUL9abMEgrgMU2dHMEnnT7e3xC5varyMyyJNMARsLpQPbg4Mei",
  "key24": "5x4T3E2WrV81EqutGiHF152qHG4Q2QQVnjtrstceeMch1SbS9x4NBbmrqwaJQbKGGvVkLVSnLjkHdtwx6q5ULnvr",
  "key25": "4M2qfQaGe2T6AaFAFmNNp7KpBEWBtrpjtjKMdBradcXVd4MTAPfRHZXRdVkaUb5ZzrMS15L9eQGKihAREJwjeyrL",
  "key26": "4ZNFdve6s73Kb7FMU1NusAwaGxjEiaYFMCWnp8SL7ZfKqgHudqaqbWCYHGvTazkhMfPi8h4zMqZnPPmQHNvoiHwY",
  "key27": "4BfjULCFyaKH7Ni7MBBLRhnWuqh1bPk5nDERnifDfhC3KDNXB2t29ch3zqjuVGqRvFEompb6uvL147DH278Bd86q",
  "key28": "2kDhAxF16MATiMXkawpFNyDNHcANaQ57TxBg7tTJDmTPPrSfQAQ4yjZJMfagP696caLE6awdHkqW6Ni2JyQyvL6d",
  "key29": "2imS5wqxrP2PCChhcESNk9bQjGeYyJeQrxDqoyB7kWEHgzSUhpTm4wUwnuRsHak78kziqL8iw8AK81ffowYeknKS",
  "key30": "YPp1Lyr3a83QUcsY711th8vCJPJqWSaFmpJfjahwSqX48gGsWEhr7wwDJVgPw2fciGznUfuTjc54WvoqqF8PDby",
  "key31": "46rrn6EogGKpi8gYSe8UDW9xp4jKbTYYSuDfYMsnCNEZj689VrjoJrXTKzodDxSusB8gJniKUFsJXLRewjZhy7zH",
  "key32": "5ExVeUSofCf4bxZDfx19Zpoonu1FYX8df78Juoeyxpw2qrJgmpskcp2Kk4iWR1ocRV9a84o3jYbnNhxK9MiJYh4K",
  "key33": "BnJtKoNb1nSTvbafuR2xdj8W3HLAEpXhmghbxye5esDXiEomFZfyvTwpEvQcgL5AqppR2Vg5rXVZu9dpEi7hjWi",
  "key34": "5qo41ogeqzKsiBjFod9Jemkqai16aQ3Hi9ohAcMe8W1hGAVGcaMsh689LFMJ7qx9wTPgVEudJW3Cny8fMM55TasN",
  "key35": "36fgrPtstdZqx45W5ayMGn3vxA81irTxFw298AZvJHgwxkuiCc5YwdWxcGyVcYRA8DkAMSH2ygXBaA5NDncxbQ9r",
  "key36": "v7nLc3xMBgZkdpgwN3A88kRLr2dJduz7Z16a3vo6Y3NGVx1X1TGZNuTNbU7YjGwiHweE7K2ndT3KYGRzLhYAu1c",
  "key37": "wPVj9sC9k7UZHDLC8tuSyPcQSq5NBynDCqaVLj7dut9BHGayoCMe13FqLuK9y1gXZHJkkqyCVMqC2CVRnQGkuba",
  "key38": "37K5zPwT2SJi6AS8iP7xoJASUCUiyCc5kqEJkd1LrBACbgmatqnbNS7tBBpwE6AxrV91pWqwjpChEM3qrBgExtkc",
  "key39": "RiBUcJjt8YKBJvdsUfdhTwsYb5QJ4FrLdZyYfU9zR73JaN9bFnYiUKigveGvAv35JSGRThd6L9skPCb5UAyzjMa",
  "key40": "3UcZxffYoCFK3DtGwKVACbqByFRpxw8Mzzz1u6rYQ41GfovmP8Ao9uT2NNRV4MXtfwFFM27MY4nFQ3pXEtCE59Dy",
  "key41": "47xT2gLWhAVLAc2wnVeNAN7YNqpukhHcxfDLa97J4QcpYiDLhYS3bFoMQCB9PwxEgvcYXFbjXzo2D2nufmebo2T2",
  "key42": "4zspp81MhXEBJHpjzb7CKZPd1bFQhtVbqubkWAJJg9BFoww7MXDdmdPaj7ooeF9JJ2RRc8KDLxDp5WDbhoRkiNqo",
  "key43": "4pgkjUZGX4ixRUcCQnPfdrJY5k58n3F3KWMqv7tR8RGMXVSqF7ZJBefVYtpQZD5E17zG7mtnyDvUrkkt8Dn895fV",
  "key44": "3279tixYLCzTFetyLz4w9CSgPAqH72Fs7jh7nQ1m3qbzjSSprFSdu6iaC35Lno3oYKW2fbXCH2DqHCf7wzqu7a8b",
  "key45": "qUmDcR2sa2RBw9NXK7EGqQbZBcBCZeFAm87yBgx8fub6cYwjueP1FW73o2jCkqU3obDAQBSacoGs9rQAPxrndzg",
  "key46": "4Mqut1vxxkA3gpSEC4pMjib3UvxmK2uWkAL5UAu4bLBg4tkhAh4qfcjX82C8RnQng5p3DwwXddYn8zCjmZAKJCqu"
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
