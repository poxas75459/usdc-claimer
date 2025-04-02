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
    "2c41NYsmHH2SZ9tmtsYBT4F1emKrZDhRa3cqNXBq4yf6Yw126YmPazyF6AS8h47NYXGEnf6GWSLSVGwSWbcvobay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42oKejstwmVKDm3Bu64gw4QHSNoSYPMbHsob3mYsQs436NaDvTELAuarYseuWJEmPt41SBzjWsiVrjDdu5byNVVG",
  "key1": "33GiAzAYHm1WoMqUcx5nuVuXzUN4AiK9yDZjFCn7SLYpKbC2opfpNLiMWYStxy3cgYHrBe7oHg4fMtXFYsXdaR8m",
  "key2": "4exZEKHXep2CWceLFkYXsKNeJFzypZVmDgsyCghXxxtZ3ZmacmFeH1vc7uuuHTvsPwsPrsxunAcR9NtPwLz5EuxW",
  "key3": "54XccXMcVzwKBCEuEfpYtKr856CViQ1qAt4Xk7A99i9zxCGGbecdHd6AU3H5hrucuieBtBtEz4dVH5dfwjWRt37p",
  "key4": "4d1mn5zXB81KLfyMvRKrbR7inT7hWrgp53bzKDWtWU4DatomtkxwY2AKepTpGMyxYv6BAr4qBFbD2gyinFqCC2VK",
  "key5": "5o7QPGRhfJVZ69nu63r2b6J3YYPxgjj7JYDgeQH8f9Rx9grGYUXF4quCDDam2DEii36QniEvhtH794nv3FKD7v7a",
  "key6": "2hRMNk2ZnP1gtQincYjmxkDLPqGsbRMaHt8S4r1jN7Hkh7A2h2Nun7VCSCihXdg4Nem3VQqDWULWbr1FnmmLGUGZ",
  "key7": "5ciHRsQ4jWSnyoB6FuZgFtxkft7J5dCd8Mnz7YwjB7AghMyXHaJScJf2QzuZidLrrg3oqVCKXyLwoJayJNmxscpZ",
  "key8": "4BGLgio2g6ay2SYeuYNynJEvrjC5xQcuK2aYeDkYWsG4NouXJSb5a4zaqGU27vYWkUymgnYgTxzqyBqdoQdp16JA",
  "key9": "5PfwoqpYQMk51vCWYZQdL7ASjSDupfRbyTa94PAtGTZMi11vTzUdQxFXEiMa7SGPgDNbx5rRH6XhNqDyXZdMDji5",
  "key10": "232rWpJz2UbBnUSgqQR3mACgcoHfkwBKsbPfyHPXgJEWBCZ3cY6bxMNG5EX9nsXGVYdihoNKRma1JXgfaGUUd6Bd",
  "key11": "4mWMMmucapEDbux4z8bkPe38gG57LHeiKznpA8rPBKRg5iu96rrYpymmQNqVGxH3yYupqEDfNT9knyFyerFTc7eU",
  "key12": "557X9fp91Z4HisSqgNK4hDTKnE9NE8Ub6gpTnksPcbjZYA8NmD6uihybbQA2jroiKZ6YERoiNeodTc3jcRQJRMVc",
  "key13": "2XufaLeU6eTWZ9VVfwi2uMeBKJdnGMZJCi6Ni9URKzMZRXV9fGvq2c5q9SF44UjHU6gQTULAW9wJxoRi3LRHfF9y",
  "key14": "4kxaxUZzmYwxAFmfypwbmUCWBjS4zhHCpHagRb7u4tx3v15kijcGr5736Sg2rAq5LRPV8eQt66XAjGYYFjm929By",
  "key15": "26dUaDCofcAZ8nuhMdC5Voo7uqKuM6M4d8jdGxs9zyGaZ27jJadZJTLBX1qJWHY1GakwcawkeKon1dMp1Vn7Qc2d",
  "key16": "5qy5y3UG6q5NSbjTxQM4qb9taMFSfJnPSCKmXRtJD3erqZA6dVYYNbho2kngNLvcyUizLjKTTiwCxt2RmJy8YDk1",
  "key17": "3Wvjom8cELfvKPXgb7RioddreK9W786NPrr8NtbBQ2mNdy1tzzwtv4uBmCZWcsSMaZy8D96AJ3Lv4bdkp42HL37c",
  "key18": "4HG7CAFNKpWrrsemBzmeK5viXj7StavUU7ThPEimo87K4xpsYhpcRkd2xD9EUUDj36tikj9ubyQewaK8AiCzbzzf",
  "key19": "4ZU8x87WLzBgAdnnHuKJSmTBq56XDh67XcFXttFeVb9N3tFC6V5SjedXsQVejX7DMM8cTaAqTSVHsobGrGLKTMsn",
  "key20": "5hFFESmxU23iLZ1wqL7naTP1WZkie4cFUohYQaSf3HMjL5jhzXJDqJgTHytGpwUTrsyiz5geZGHPinAUYexwj1ur",
  "key21": "5WgPcR7SX7t47Mresw7ckuYyAkvGVjkwaGqDn53dU25F6VUoCD2X39mRHSUBdjdiZKV18KkGeWHRcEKm2K6maPP5",
  "key22": "34vtChMvsAvdAkgWYWsdTLGV5zT7z7pjery26so8hZbqozLSJEpSUJ8veXShsUsgdAx2Q3ehtaf5s3pXtqEYacKp",
  "key23": "5VSsGfp87P1Ty2AFGppt59TgTjTH9ArdpojGruTgjqKxdd67GmkyhntKLMK4JCMJ1M2F5VDhUzQURg3R8cRSeFUU",
  "key24": "3WiMznjCye8QX7dXBmkRiNythx62GorLT33Ec9wzTzxii3mUSj2i82Rute4X9hxqgocrz3jJqTmY1uXLxc5b8rk1",
  "key25": "veSCQ9cZBAeNYuDHKYYZTaoZ3B5FacqWfai9xPeC7j3dpnzpHaUT3bbMx1DkEhh3aFJyo34C9Y8E6DiDQDEUN8b",
  "key26": "c6nJXZnvtBR4EcPHQs6MaUf5mRcUTybe1NNScRa9pxjjZG5fc78aGW4MnHgibgjFZMPAdq5MGaUFfm94Um1b6BU",
  "key27": "MtjVniV2V99v81CuRwrw5Y9fMXB1PaucxwJfhbUCXTikx5djfhpcdy4LyAC2rr21xQ6hxxZqMBaXMEKoUvaEYha",
  "key28": "SDGe51T3Z6QTUkmTQg3shcKWkZA8qPuxSDz5x3153RRMxKaxdxBmN2wzj8sMpuukjwBLzUAVBCiT6gjMMbTXo83",
  "key29": "5LeugBYCMv5hwWYhvejUibTyAwgpi6AXxxpuNgrMM9PswKWHDkMWpSpkbcVxXgHMozXYveTVBDtvfcnaXCPBjgEL",
  "key30": "4DNd7NW7APZ7aKKuFFXLwdCUjBy4Hi9TD2jFJmoUr1nKQdeGi1ZVKnXwdMkoC2AiR1gWhNintGLkVADZa23aQTtf",
  "key31": "2XPFqxsQsJ81ZUyJkioARXU6iwZuHU5QjA7rJoWx1ucWctNGumZFFs7WyxVmEKu5DsQy3djgqSAhHfG8KSsbXGr9",
  "key32": "roB7uUyKhQehRw79zevouJVHqYx4D99QQ937u5T7cG9AeVQ6Gy11kRyTkJxHVeedDfgCjkvesqeVF3XQ9jsTPNA",
  "key33": "2z3MKzFu4UEWAq8CpoPJA3KzPxMfhLRnyevnaPdBhxYpY27Xm7oh9ikw9WKp7wdzaqCJTavDFNZFW4bipLmfURMW",
  "key34": "4gEHYf1J7HvGvN2nLU1ufPTA8ChiS8mg4AhuQ7uniRgtFFUeQL3uuWbYt2fo1DwguALPaSHjMs5RM4e9H332JdNo",
  "key35": "54bCeBJZ4KAjWWZU7QoWXQdRhcFgQd1xwvh24NHENAKtThz1x3toPHsMCFvYjSQNz8498RbnaMkmr3JPjVfCfxxh",
  "key36": "2PifhoacKLwkhkVfPxc6bR6Au2EYgjmHDfSzV5YENnBzfnch8pVBUZn9F6PZ9tMbCboU4JLHRGXsENUMrDqNiVQF"
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
