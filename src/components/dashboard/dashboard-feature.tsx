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
    "5CccRRCo2cpqAKbBfp4Te1uyw46yggtJNvAMm4NstuLYLCQpkhoWpxmZ2FMo8nCKXdxCUmFSDgyCm19TKXprbJqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BTAASPyAKcScEQ9sUSVvVv5xVeffBmvc1cxHTbgiBZzLQ2Bnh3J8Sik79zj2wRNdYAePRUpXH5jqH26BKhmJSpD",
  "key1": "4usq7f4EK2k1edwvqMS7ktaW3yVkQDzPRjkGehZ76bEWVeFL4jAGG4x8wREy1hpJuGrba9U9HMNEtds8TrGCEVbH",
  "key2": "UQVgdeVamzEeRtBKSDhMfFcRcGfr5RnxSbzCK3pPKtUW4bFYud1MLKP1aVFrPz9p9ceLgUPUxjtsnCnC4z5VWso",
  "key3": "3Rmemiwg8mdJ4W9TM5X6PSGuy1GKipgjSrA2hDtfnLXTiamnP8UdAj962Y3bHcdr7PFu1iSUCLkPbzfyaVF9s2HY",
  "key4": "4AnYENX4KRXznVySP7ykK3n3BCyKr1K1Rwvba4QwAs24UFV6FvWnzSz9AweV6N3mMMqiUukDW9tUcWzVbWvQj716",
  "key5": "2dQrD8LhW7vayzLxwYanBNsLqX3ChKvQTMrJMKYsr2urPpBReKaAAu9Zijg3yLJgJ2At2Vp6bXRxBu4o8pTQST33",
  "key6": "5iRMPsRmRYmmgBVnq5SEcNLq1kYfjL93pRHxa9hcVCJi6MGkCZWExxHzYmGaWCgt3eDquoGiQaK12EwoWEgAivit",
  "key7": "3TQZtzaroxGffis6Bcqkd3jCAWuQdHuUoztkLv4g2a3XTu4do6VMfHuhzEEWqwvqeB6vMdQx3SJYHHa2QNS9PK5c",
  "key8": "39BhK9uaJ1S5WRki4PT6acY5iXTu6th9fbLeS7wZioGpCiup3p65A8Qq9ArZy3qziaK8AD5TjU32Y3X3gADk1JaE",
  "key9": "HijgBYecEqxa14WHBK6GyUPXFevPpAax3GvQdCf68cdAd6i4Ez3nrvSjA8yHypmU7BU4cCTr9wv2FKXkrV6BjxP",
  "key10": "2afWr5ZRihgLTB8s5cCxxmb7UAyN4JRXNw9QnEgMPMgWkaQtj2EiAoRPEDT6N521DhSZFeuwahqUNYRrqzVnLznt",
  "key11": "3wDcnnRnTqsD8MwfqnNDrk1Q2mkcTdk9kTVpQCjTQxAcPB7Lq4moe3Sxzhbq3rNp7fGvvCh8udaXNCjABJxZQ6hp",
  "key12": "65y6zn3zug2xxnoymj6n2j3oqRv4Q83UuQuAY7BCZ1Jcajacd7JuAq9cmhGeKDtMvFQNYYguyocXqhAivk7TqaNZ",
  "key13": "42J75LLj4yDTep6CuE39bKCQ393nKzaJYJZHmESmVs3nh6M741LFmDyc5pPeZAi6HbNZHUysqnAMnh4TxjpDDUqn",
  "key14": "35U7hEuC2oEcBYSxwpAqj886DsUSZFsrL1ozSwKwupz4Yd3UGZjkZLkaTvtYfLSXkArXahtSSGhzriorwNXbF1kM",
  "key15": "2VTBREckj44sZmyZixshNHGYVTZ7ESMH91uWYVQmxTzE6mM1zrxQ2r1RNWQyJhXThr5cRbmRYxeGqPv43rYkkJkS",
  "key16": "5dbys8if4Y7zM5K33bDDojPB43XBQ9dd6HgXizVo2yyMjncyS8WufQGWWyy1wmcTXUT7Wz43gvYvQrVe3d8WdeWz",
  "key17": "5btozRQz4b8vkPzwcVWSdmHcL9X5QNRFUBRLyTpcKh2JQB9R6PZic9dxq4NU6tdGp7A6mfgDHBYxiYWnoSc2BMu5",
  "key18": "2u9rtNrFnNyt4e8zrTc6UXfq6ikBLunBxY9V2bYT41w9QAjMbXRniJAABNsbTdURzzGMLiw67pFDddoUsZ1f7vD2",
  "key19": "2ZDVAWnTyNs5gChB3K51pQRHeriQqmwkjwcUPZdZRgf6rTSZk3TS4HAGb3AWAt2UPf8JAP14jPciDqD8wn2nrWjL",
  "key20": "2jhMGvB2HDTqwq7PGBztsfU6rij5ZQTAjGJ3MGCcmq2gWB29mCQqs1tfLqUkG6zCFZhaCdBmQy16xteDmJ4hR6yk",
  "key21": "rCdLY8HFCoPECL7HRVJvdWsBTyqqy61CbADbBNrQqZN43xNej1idLBUNPdB3wmKPtac7ZgKMpJSBQnsh1tjPWh7",
  "key22": "3q87pYNk8bCSmNKwEcdBWRTP6MxzsKFenhPomkKc3v4UZrva2oBc6Kurpd3JcoumiBwj62UNF5FhyRD4fPm5DChG",
  "key23": "AMiuyFy9wbS8JZbhLhoQXNSFYVKcKaEmngVERbagtQQq4KLThWqVoKXArmUwJ58SnJ1putusSUjH2eFoWYw39gT",
  "key24": "2HHA7m5RLwBzGc3vBJqbTU8QZqqJccKDukdNS4CGXTq8K49XBKF1ZZY6EgSiPwhYtXPeEb46DnHdUAvQYPr5K7fr",
  "key25": "5UcqfkpQfeCJNddXAWRXZkzKCz5U8XruJR6D8yA1SKkXPn2iEhKZdQfDGDNta4ApW82r9heYR9GzFJ9iQQkjxeVK",
  "key26": "2F4PUc4LYKKmkB5NuUh8uip88KMdJwkNgi5w4SFcJXeeTTzkE7DRmsowiAafjt5jkt2TXMqe69h27iE78SyxQpQi",
  "key27": "28AA74frKTqBmg3AdLSWmxkPTh5tq8JkaLeA7jKbKLErg4rZHXH5z3KdezUPHJZesAGhYRZxvTDGzHgzkCtp79vH",
  "key28": "4DQ2ojg8P5im6NRtmotZQSUgeWLjb4H2RXbXLCWEpSaWnHswC8cdc9YW6KP8vvnwJ5mMwVcTw7oiJhFWX28ZieDs",
  "key29": "4NmdiVsA1JBKQBdtdZyesqoHSKHNp3gWiayVituaj1ZfPaDTa5FiMk4Nn1W2TsgVUCfpkvQHNgw8zgcmXgdwUFCg",
  "key30": "2dZYP3ukS1vKMw2H37a6KdrAQFvur3q3GKefpz1QAPmPAuWRzrYP3J1tzeuncxAFSmX5q27WB7JFCSQd43gW43Qz",
  "key31": "4oFfpzf2rpqHj8AVQAVAUM3cn4bmnqTkRdEjqHqbAa3L8xXYpnvdVMpKbD2CsMscsxKtaXurLFvcz14HScWPK9du",
  "key32": "3sNDX6WhMzv3FDHKPJAaoLFzVH2P5GkfysxWNGej2UyPwsxoe5GYBzNe5vy1WuKLqJRE6zUyiyDz7WmWZ2vmYytD",
  "key33": "DoWW3cUFa26sRwZxPM5xauaycqsLs8ZNNWUAYoj8SxTtX7cuhzx8VcENBfUNsXsvzoA9AksChktvueqok51Q8oe",
  "key34": "4pbiQz3XNMPchUS1eWqaAnAsiYnVdbQbHoC5bQGm6TRBCmZpLpkkBK8Z35i2Zq4w7Lwh5sfRkX4Gn4S9fdUF7rxD",
  "key35": "54R1EZbjALyUWHNoQG4Jt3PK33WzNuZkzTatHopt8wcD54UCuhTZRbBnsyX4n1oQG3VkVzQViA4grVcog46WeHte",
  "key36": "3WviEtGtJ1rri9YtvzCJbicAxi2sTJxuFebLiF354Hj2aZTVPqncE6RSEphvzfherF8U5MXSu74TU16XyyZp5F9g",
  "key37": "3p5RWCnPdmD6dY4bZiqejsiPqKTbiprXNQidoJPE4AtVqxAXNdUPtk7fzwLUFEhCNwsiEDLrrnbQtd4GtrBGq4vn",
  "key38": "2cDSBjp3AHUZSt7bUPViiEV5dV3KH3AHri9vDtiWPhMtaer3pkN4H536ouHPMTK2pH7jdCZFC28ZAgj5xM2YLRjv",
  "key39": "5AK18AgAEQwk8Ct89s5guk1BGkh7739FBUADNhwNREE1m57Tk9rRHpknLSemwZViyrUEdG6Hnkr3DmKJi2yPTG3r",
  "key40": "21pBmuNnNeLCoTkeKMHGPBBbD9VP1ZoYyXzhaqK3g5xSPgQqhhSQK6BE4JSx1qyP3Cc1zyj4PTm1rc4LqzN8QU3J",
  "key41": "2iftJWPcgKNcifqn4KjD4vVJctijb7LCqDa4bUGhXvGcrictWop9wVFAAe3SXbkRtom2RAoaS1NnswVKt6JJdpzg",
  "key42": "3KJ2GMDrZXbkhyRTtE9zvpYbUX2ktAXPHurzk7AsWXZSxK9vW5qqHtv5GNYLwx92JVCWTGTo7J72F7A3dYtgGWB7",
  "key43": "2WQWRAZmC3oG4cAvvRg2vMsRYy7c4HiAYDwnpvSGqGRjCV5uLMzCN1L9XfENuz6dBgf3R2QxMWG7oPpzAwK1D4tj",
  "key44": "4DHcDE3BkDGB1Sav2Qmh5UYLQALCcxCMufpKM8yDLQZg6Ne7dh1xCdokgfSKLwLhp7ffZaB3ZcXXvW1kstEad3V7",
  "key45": "5fb1Nxj772i5htxxcv9Wrs45aEB2LvdTYmETHsAbf5pWAmoQ7KacTAbZhwAUNGFuEZoDFvchYxpJdxU4iZR3AcQG",
  "key46": "3zQhY7KfkFhBjz2uovu1piLdSnQ2K66pMgCJxER3J5q1aoZdqXSs3oD32Ve9E5e1YahpYuQMdS94ug8urp3XcBpZ",
  "key47": "3AQqQKy7XeEUmzBWvmQKFbatVuAN1NgaD63wAz8vccLygnRyUwbFUrqQQCeozutMD8qoW5X1zjJGuAzgXMBqMic"
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
