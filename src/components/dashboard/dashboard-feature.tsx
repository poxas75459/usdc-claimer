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
    "5gGUdRdszujJAwfrzJQkYPuL7UaUiug1wmgbDmjtbriJohDSB2KajsSfhcfR9jJKgmkfGrBZukHT8dAjo4fH6EtT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nte3QW8WCrUJsggbB6577gxednR96e2HiJmG2Hqq96Rb7WeQE2LghgWciug6XLaoqZGFmR7JTePE5RScGqb1y9v",
  "key1": "6qc4zC3Ap7fY4B672ZPhChvLXGWE58u1pTxuDwnBgdGWfEQesdzbKs3MkdEg92pxkmH9hSJquTpBrzQBakDV8gN",
  "key2": "264dkW4TeoHxhiYMHcBAuhrHKrGffTzxktt7HG2QbvTweXj4yQWJ1FRa7WUk6e7JSddkkv7uBvef4HMffbRoFike",
  "key3": "3hKRgjRoLVCVNDQiPpNEunJvBTX5sZShHK8ub67o5ySTFE7LGi8kkgHUP3RznnmniWmpFguZ1wG4cZoxVcbM53Pp",
  "key4": "2iR7Loc7zELqz7w7fkbgPRAdTAGarTQmUTpKPGjFERViwY3fi71xtqrrjLLYvEKh5BKTVYqYZN6okgxq2wrwP5Qu",
  "key5": "5jLmxnQupZqT2bzY4SRqDLAYKFhdMYfkfSwbizvXH97g8oMcFL71WuRH1NSMLE2kRE39Xf4ywzokK2h12Deszdtz",
  "key6": "DSfBjcKyRkiztjRFqh8ZkpvGojEXiD4zfRcvpvynw6BKx4BEUZVP4LqPGwFpSsz2fs9cfMePvaWVFWuWKGNiUr5",
  "key7": "fziT2K2Htx7X9wqqEUYor9nhf8k6Fii2mJaCijztwh9cn31ZJ4GjSqoaHhGqjgfFMBqv9Mn8i9dMaMaBgERNkev",
  "key8": "57BFnPETb9gDWFCdqAqYasEfHdKcX3D2JTYnZ688aiN2NZobznma56TZYVp9U6mKL5svvH1EeD5gfyDVdk7Mrajf",
  "key9": "kAA1ofgugWqypmD4uKswPaacSg9QhrERR9VA1gEfw4hBQwq3WfXBQkof3WoghWCVAxNfA44Nsz6g1KQViAkJGCm",
  "key10": "4sexXHy2q1xZWmdqUr6wFGvVNfT956TbqBctUaLcm6E4UYBUwCecWkj2QfputfG32SgnaqQtVZbY9ZVcmrB1LSNk",
  "key11": "334m9mVGjXMWrE7zR7iB6xaJi4Eb77eMv7GANNf7R4YYFhbaPfjHVTB3Yd3M9vYNoQoZc4VuhJ5eZGcqLyhGQohs",
  "key12": "ADR6dHEA49HkRAvzAubB419xtzpJETp1jTMBMQz15hHZjWe61dgK23Pgr5fouZGLaNNsbSW8b76tScjzZ9XZVXH",
  "key13": "3JqTfB6WeF7UgHQ9V6NAxRC87ojWUqfQXQe49Uks4WmmoaCDh6MCVR5SC3qLe6oMxTJXh5Ja3EGhbb66FpapcEE2",
  "key14": "51ErBDKr39mcjbrXJqCzSsYLweXhYE9jZkqoVbhbjuihy9a3R6Zqi6AfqUXH7JmfW4M5iPp5Qgk5LTUQeyGgR6FM",
  "key15": "gPTaZuPHCFtg2xsuiFb7ymdqnUNXXxNE52coDG7Ng73xGmjd5iv17tth8mgJk7gDnzcKnftL2zfvsZPqhFCafXX",
  "key16": "4mGaNC2NTZv5yf2gVJDvKTcYcLfT54rcEz2y5CPktockLsG1hTd72PTC5WmaMaF3AUraNGPR4LT81mpBQdjzv4hY",
  "key17": "5Dkji6XXgKj2ajPxqSSPtN9Qrw4vS1cmU6hbmdiUo1qGdw2QypqzciJFCueabQYG1KveHyvJjQiEGse4PtErHu2M",
  "key18": "5C9fnwBLA4fyRvGXZXbGfmBajFFbP97kd849hqqtAhYtBV9gMq1veKCBe9TT7PdLEZ2vLnfuM7z7Ca1T6zLQ6ha3",
  "key19": "5Zkr5ERPAFuNYEQDdmPrqYHGjQ9WcHTGFF7LN4yXpguZf4PBWBmmLGtbx8w2sFE9uNU6ABqifMSvfbJwGoHXScP4",
  "key20": "5Ud5Kqrz5f35WduaWGe74v73FimLm41uSWFVkhEXNyV6pace8o7SETZgrQtBQQ4vc19GWJJHQVWtar3KxBbnndZi",
  "key21": "2xmeQiLwXiRinuoxot4p8MD7JVCk9kAkfJh8tb472x5xdtXw9rpQJ3RgLiXH45mNf6V4Gic61Gs6CqEbADsdwri7",
  "key22": "33i4kgys2MaqJP2A1WFGtUxqmoBs6Z7CQBjdCwEkz6pKDYJ3U1Q9dXVPnLBrFEWxCukWYdgFXVpfXBAfix1WuZW1",
  "key23": "2HtVw9ZajJbbKZgUQYhEbAXAxxaoQwwxWLgiB6Ahu2rJuTBjT3HSmaqQMqdF6GCVccDwVu4gHBwoao2hCVX3Y6AW",
  "key24": "4yZjALdiWqDMFEBJKkpfqdZEku1hBbXhkXmAYLSBSoszJw2gtmK5Kc9xmhxZCrs4pvF2GEuEUnvV4WZriGicXu1R",
  "key25": "4FaUAwSE7jTw7CXBKKt2r1KvXw7KEPKQVESZXGKdG2tegWzo3LPt5sfX2t8Y6RESzr32dkoLdchZgFDNQ9SLYbte",
  "key26": "3TFwXU5PNN4bYMDxRU5Z5c3Fqq8QfG5XF1p86fhCRtERpGWX7z9rxyb4MoAWEk7swhjuzM4ePQiFb7PAL6Dr5t29",
  "key27": "3EqVgDcWbRvxjnPYahwPw2nj9Uowf4rpE4ieHzopEhNQxnA2GUmoYtD7FypyrU2JpNuLKaezX5vepaXtuMpQbeL9",
  "key28": "4zeoJyHdmVvq2VWaBRFro5ygQYwy4akmBGsrVD3KypnJn3y5jbKmnHYXLPxihP9XZxqtsf6WQUwLwRRMi6XaEV1U",
  "key29": "27dXaf3hwWHq31qFAtEbNvEnJkxDKB6mbC6qusUX8p3YidiUvbaNinfoCbbZJTx5pk9B5a9K1iA1qG3A7trwDJBY",
  "key30": "ZT9qksLsq92rczbWrPawgW2HieZtACNr8iL2dKdSvT74Cs1bFNiPH7AuXEEftdwoX6ZSg5rTox4vxfqcg4b2TqJ",
  "key31": "53HwVFgLHst42xrK6skCqgAUQyrxCRQDiPV3v4SM6Dwt7Y6N2qpqmZFWZYYfeTzkKW8YA8E4sB33VUykBGEK7wM7",
  "key32": "3wJATApWcKbC8Cq22DLPKKbCEZx29HezA28WSkdRefH2TCYrTruhsRWXdU76AziBs6fcgGtfgDsZgaE5jdpf9uyh",
  "key33": "34wA1WEgitwnnrYNpZW5YLDM36JEiQhPTLm7yLesoiFUeLuvpwwKFU1Gp2erE8Rs8SXCWTG3HvBRBiW8n4cSJuLu",
  "key34": "3HZ3dWepfE34VKK8cWo5akZWYtKanx3aF2uw6r3xqvCqP7B7JAwXF8zqDNsmCCvppEwv8EbmLWcPveWAyK2B8fDk",
  "key35": "2PjvPBKA9gnmNoSZ2NZpLgadqM5u7GLXiN41bNJJ1qKBAKqcCYr395YCN1iGqdwAKdcFtk2hMARYzKTvbKkQtBPx",
  "key36": "bjUPqzTVCQfebdTouCfuUWfXmWZpdbUdccSVsFjVcQbpYzbHaqGaNRezzknfNpsB18Yj4c31a6YL4XmtkLRvS7w",
  "key37": "5LvB54hi7H3mjNEfhLmCSBuBbANDwebwLsoDXnb2CeCUGvMdLJJ7dcz2E9CaZFUnqvcp5j32qofRcDqUp8ahZvuv",
  "key38": "Aj2RdgwLxs7xosMWcNSdy5gq1JtM6TRvARQPSF741pxUEzAEf8Ehx49QxQXXzsFkYX9Fw3Pb7DmoQv2Ffrkyb8X",
  "key39": "59PSV86osdJ8vkdx59HxojYukaJaircz2oLdK5LgM3PtSHV5kyL8KHHTjjZGCLezGWxgpWRXMAL41dSPJEjMNfxN",
  "key40": "49qu88Ai2GuLizHxXfPX4mCKeiu4ceoNuKbCaRAUMtkVrGdRxkhHgHUVNHF9NkaLzKr6R6F1TPmyqWwgu17BhuCJ",
  "key41": "3tEZEKAMjgJRnN3pMNvycUGkqi1gYPfuxu2W3FN3eEk1zGPfnE9vkM7zUFm13KL26A8Z3eB36jLf1tSA49tBCJf",
  "key42": "57sJ6YqLtsGYr8cmN8b5sv2pUNUqi59YsY2VUGQn2j7r1uDXZZpoWCXGiS63T5iNBcUev7fnfSMBXo9WgUpByCiv",
  "key43": "3SHL6DrS8yBADrMd1FUNu3NHNov73k5SJZUYMLSZn3ktYe9BoE1vyXuxTTPP4fs9KX13375dJwhGZMsD2j43GKQd",
  "key44": "5etaaaVpWu8YemhHxFdaWpuyzRHvtjo7C5CRssmtHsiV3LX9wm1m2XBU9WjtPPK5V44DNhwDrPruCj5PYeojEktn"
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
