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
    "3ExaCEDf9XrMR55ZJ5mwbjr7TkECXBJsRyYGfFsHiHDuqMJ6iGw1x85i3P8AeWest8RWSUiq1Gq9F3mnW5hBjUxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uuvgt6bFWRTBwrEYJPNGH4ZvYFUx89wSxgJsA7boJLC48m2oixnkpLo3a5V4SvNDr1gGSGqghG7Tq8m7YcwqJD9",
  "key1": "qTboHPUNZfipqWJg2eMUJiapMTWMa5CTC79GeR7i5jWA1mrj3ZXhaYxhXz7nzLyioUNb7fwoxqW3Gj4QabkzXGt",
  "key2": "2YQu2VmNGUWNTJkkDSsjAAuSYBVA3ciu2jerZ9xUaK6NmaU4Ew63C8fsWVJgXyPnmSDpd9wWDMuFaqvRU2iXUwtF",
  "key3": "3z8tCbCMRkvifA33HhNmDxjhVQDwWrhPLqU27dY7NnSmGEP5QLYyTTvQQfjz8NwEhrjK8PS9AkJJQEz8Ehd2wu2D",
  "key4": "57R3ULAH1B3kEut2fVsSsNvGPhK9V8PvpX6Hx4TFez6fbsa3NCTuJnMVX7ohnciRWYZXCsvfWdbLTU2njY2AeA5B",
  "key5": "3cjqgcJL1b3v56JTQJYZkQ3BgjJS3PEVvrjQEHyjo1RB8WyoarYwGZUMmpJAGhwrv4xEPnBRiyx7nfbXCvMusxt4",
  "key6": "587Q6cTEMWfGeUwrbrwvBwWvJ4T2YtSqNR1tsBtrxa9gwZS3U7J8mY2LwR9NTyDLjEGveNhDwGmLTTactWNWxCxP",
  "key7": "2cYmD55YW4MarNhgHFAWNAcdaGy4rPy5kpQdB1Y1RAz3LNF7BhcGYDqVa53T5AmvCR8Wf2VMKEBtYFnW78bDzC6d",
  "key8": "2Ak4cyhjvZFz7iS7aEenHpZVzq7yx5BqqegFCryod76L1rL8UbmuC189rsLCXw7YEiEh7KJwc2Dh7CHpgpTTUQvR",
  "key9": "GuCk4QaT6MTXETX7PL5YXQ35Nq4ttfbNvkDiFoUgpLPRE3zkUgC9ZuLhvq4aja6hrGbkm2F6XqPtJX1Y3hp4EXu",
  "key10": "359NhAyQS3Mhhp7TKHtqeWxnZMoDmMjF2xkmNUqf1kQJUgcBoqMYqPXh96mGhwh3fxKwNa36zpkeddzV4MYTNS88",
  "key11": "yn6srPixhW4B6JRt6Mm78ZQtTxU9zvsd3brK93CurGWn4Jaa34fWZLAUJ1DKm1LP8TSxtA4g41K1n1rFFbeVtKi",
  "key12": "4VzfBnDaH9AQhMKt8CRHXjGpx5YcfHjqDd8QU4FA7CUQwtEUmQekNZ7WSz1KtfUSmwK2se1ALuvomkNgHbGjc3x",
  "key13": "2GoiSt66AE878xDRu8XWx631s2gmwtb99gmHz44ZuC12jsYAkNRzAVgnwMUqDHTek2zFLDv8Gust2c3zY1rcYMJ",
  "key14": "5fTNFxzRite92xRbWnLFMm2nvER3zgxJrjsMhVZ5vZwiN4tbPf9XmYGfnkGgn2GHUfGxdnmRJgbsvGwnetauCKWC",
  "key15": "2MA1Rff8FaEsVDhz1eQPTrfEmKWqWBHwP8Wy1yZYrQLZTPJGHckksc5vGBWr9vogtgiJbLsyGjmwrMHewwKXwdCy",
  "key16": "5Y5YtAaBa2SVkry8aaZDqXEv7sPnuD9gyfEMhC55RrEW8GCbb37tpoWo4Qso5vBvFRpBxzAYrowBZ1HTmrXuerZG",
  "key17": "FFJtSrXyQDxFzsypxgjrfTJveZqEvCRyEnkSCNynLf8fdFT1zfQRLBCDS6Xe6CpwPAXLB5zPWSAyVwjRRGN7ZAR",
  "key18": "akYbga2TscvBJpkRqvMrrCjn4LYf5RmtCVvFxs8TF2ck7vsjLrr5wRdJi6RapyvgbMTSAJvLNgKrit2gFgY4Y4U",
  "key19": "2tAk5oVgk2YW1VRwF8DxDmQ762kXEWBdQsdzbJQVPTW5JLAagJxmXbkHKEQRMgrpHbka4tADEVdUwaGWXJJjmY1y",
  "key20": "63pdbBHb7e8wPvsNJjvFH3pxxnKeyXMBtBBmiqjFsHKxwfxLvgeHpajuDyTypKtN11H7oLMfPUJn3tk3wiPCVfBk",
  "key21": "4oA99xZ8j5gjxfVSsR7rdHP1yhSUojA6qDgEqFX8bnZUsnxqEqB6LHvDLmxZZC6G1nZgJjsncYwKHj4guHU89DY8",
  "key22": "4EKj8SK3DBWToXuWVMKQMPC3ijKbNFucSLLrg8JuA2ib8Q11g4bn1iKtoPF4SCk7t33STjefXF9BdZyb1qE8gbvB",
  "key23": "2h6F28kGCJeiUSJojfiVpBVeTeLSwa5GBEz9iAnLnneXDbbqzHPaAYTNKJtqVdTw2qT5QvsR81Pjvr1mcVYsNFvb",
  "key24": "2ynymSet3tr1PxuEEzgyadfX5fVsoKYrUyhzYBcHkKFeSVQjwGvRRpCDSgAUsRttNmsewhDykeuu6vMCN5Jd1G1S",
  "key25": "2He7E4RFFseUZDiRsoodQkNDJ7Biqmt2CLuPsW4pt175qt1L91w7PRKQsQjFD1tg43dPJLX7UmRCxcgMTDEiCRj5",
  "key26": "3TfH9yq8PTZMpQ5eqK3YeLvWH37WQL8B4yAWdJV9H5VqtbZQTn2cM9UEPaAB3vKuGQ1zcsgThunucwJ6C5kB9VD5",
  "key27": "3uKchLJGCsj5AWq3NXiRgJqxkD65Kq2NTsgzSh4irVSmo7eT4wkC9NTvsDrQmL3fDwUX1Jo2hJg7M8Vq6C6oL2My",
  "key28": "2zqDAqtQ61LBowRj7mVML9wFu8hCyixb93puJnaRD8By4xCXXuydRJb4gXydeRVTeEJczGD9oqgsUdkGfaBMYRgy",
  "key29": "3U6yxpHG6zMh5UDAp9Ggz1PXTbAMZ3atXbBJpmFJwJpjHBbYd2oqwjPKSWnsuUSBjUsYbLHvsSUB5DCvGirMaKRm",
  "key30": "2pEbPBVGZjuFC9ZuzzDVHTgn8rhXiWUqmN8TPuTgG2QTT1Ap2rYUEJvXsMgxbPn1x1yP4t89pXrNmyd64NFQ7Hfo",
  "key31": "41ngfpcCa3PwBoRKGHkWiWq61zynGmVzY5vgpD2RumKkz3HTCgGWM6JDYtPW7bUeZqhqXkLhbKekpZJuoGVQ1yKQ",
  "key32": "kpp6MvGMvRd52nLsUTDkrqJYju1gTQaUdtb1m89M9hMxfVTdthXBJNCXUBwmw9474Dc1auMKCNTBeCcFFxSbyjG",
  "key33": "3eyu2PoWC7JFsfUig3CLy7Zsa3sJsF72J3KPEtPDQLb8Kvs5xfnaNsNeZetVS8CKH6MUWNCaJhPioiqCbkChzoyC",
  "key34": "3psNedLDj26CRqhRxFYQcLfs6n1PFCKQtikMRJ9H2eQ6Pphj4D5aMZ3BbKYCZbmV3iZGonxCidra6C5nTLZ7G7n1",
  "key35": "5VJ9jAKgrKAGEiunQNc3CSf9PEUDhQXRdKbPC42rahdBS2UrRnFvTx2sWxYihn9h4R53xz79LExHexdiymDdyqes",
  "key36": "GfYFv8Rd7knEmxvYXzRCCaLQ3C1e9ffJEyua4K69vZgsrtGUN9jcrj842VUiYhki2UfKMz98BpQAJgo3MsucRHm",
  "key37": "9orKKYmPwwdYVZBjFjX6CfreTuFSqz5v3VnRckM6ZdZE4qBKuYrVnFPVVeEEPmgdEGkkVxFmszwo9rNUEdUNvZe",
  "key38": "3FUj3eaSPKbmGJUjSbmeHak154vFgjQLR7vhANWdB8vL9k96rd9e6KbeY6NDNno1rgWFHaUR9Q5VApbhKfjMQ7xG",
  "key39": "5KDTbGVanrTN3m6TuCbttH4X9ojYAsJzaTe2Zb83Si12GYdsC6f6KKKt14ty1vYpL5MP9aomH8fYjGDiZU12V4Lr",
  "key40": "UwYxXSJAYNQQ9LbQgu98hyYqPLme3B8bbFeoMWhUhJc9gfN8q6jLiJXRY5JqtYcPCkXBHgto8whkEdpjzDfdYgH",
  "key41": "4VmCwMDPsmopfXtF8HiMKAuqH2BM1BAbAmAPfXq7dvmjbgeKxgyM5dKqt5wmBRwen5uyoePAEMFnar3L1NPEPLPN",
  "key42": "uhypAzuNS5bEHjCXnw1pPdoDsaw4p8FQ9GmPFeRmsijZ4c8ouYKGGHYhH4Af13vbxge2EmvE9MoqjYQ5YaMti51",
  "key43": "zeRqX58nBSnwWksWFyUQEwAJA4L2KEZY3t4vBCBxbmKSRRdrZqvFPyGFpMoKcsbfZYJYCd6aKupr9zRwWLbjzgL",
  "key44": "5cQTxmy1ZeonWKwsbu3FZLQwqgDK6vM69nghN8fsuVBpDnujajozCxxJC9UZBULLnkay5R8kPwKji7pUuTWi9Neo",
  "key45": "3VwrxLznnqRDon6UcmdUW49JV5ZLZh1k5UqMmAi2JppByVxW8JeEz8mYuTywwSu3cWw3DBgJF6sTBZp7nydPoL7k",
  "key46": "eBYidBZnaUr1AMrTAeM1QqsTvvip3mB2w4rp5LmL1pu6CdDAXBnVmANgKBdxRA5sMDPHQ1JEnpWd8JcaS5163oW",
  "key47": "5ytPgbXiZMqkGmWtoAbb6L5ZgqCttr2buVBh5XVoLYzRuwGZ8wLDvyKrqp3kiBx6LizQrmRjEbf6n2LQCQi2ZMvz"
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
