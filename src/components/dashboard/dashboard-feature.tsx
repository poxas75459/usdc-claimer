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
    "GBsTeqHNVBK5pynjJT9N2j4PbnmgpM24q58Yi1yVaZPTGB5Bs4aB3pV1FbKuPAYc2zsZYXkbiruUCyQ59HGyLhK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NqmGHpfwkWn6Jhzn9ZCA1A6A8w7nTgACFCwswrU7oEf1CF96atjodRy772y1eu5DUFZ2Shn4stZ4CMamBs1cqtA",
  "key1": "2K38GD6rSDyF76AbVMTJdcwfdT5c9fEZD3w3DS7KPDxCCvJkW3jt3TJeH9tTVp4bPJ27H7a1XoHG2TuhQ1hHHRsn",
  "key2": "2hmWTUn93uyNUSMmRkvJ1K8yHhwBrfLkVt6uuyjqZM7RE9vwHeKt7TB28yL7VxGTDbhjV1k241XfhShi97ykCkDK",
  "key3": "2Scg9BX6nLHQp3xc7bxkQAdRk1ffESAyDRgYQ8zRpNZsPJRqw3jsj7JdoepkobvJF3YPakDimwhgY5aPP2GgKmP8",
  "key4": "4zb7GxcwsMSkMuNgskmLnBdSrxVt5y1EoLUgasN8CC5aJTyotdS7z4GeBtnW6X8G9ZToR42JScASbogjjXGkYwbV",
  "key5": "43xXk2DWFyVtjCFy4onh6n6sNWgc1XAJjAncmc6pvELWmY1zWafCHe2pd1BDGWjFRoP9vrfhJ91eRBdyztdWiGsb",
  "key6": "2PVRbrY4AXiKcf42RLg2fLyVzC24mGBveEDaXcWdsxzFfacU9SVDMZQSaRaR936W8c2w7Lix1iQPZc9E4PHvQmui",
  "key7": "4gSFxQcTYTkrvyrStBdSK2SAweE3bnL2REVPpzziRjraC4LYg4SXg6SQy4HygG8FABuNzxk1brKfgAMRVwbFp3P6",
  "key8": "2raUjrtyX4GuRbfgcY2b1Yd7KLtSbQxMCF2Ss8UK5iQKYBXwj828srbVjuc3uWVz8XvXX67QSX25RhZ11SMDmTDb",
  "key9": "4Y5A4Rra43Cfi8Lhw4cuJLyQcVx6ahW41vWaZbdu9ogP6CwsrSmdbJbEkBKCMgEBmtZK6qBAKP573VTMtSeBVsC4",
  "key10": "3SYcuFScqvDUsDZst1zSrp2qNjb5Qn96KxAPm5rtPS52gvERnsmfvkCMcvMeciy7gjEfX5eEqpKaG3BTCZQwoHvC",
  "key11": "eRFfssGQr91o2ujY3YaqEXdm8ZRJhVS5Uv4rfsoM4USSeD9WakRXqhdPcrNjedVz7eCF9CPMKW4bSptrBi3wqUA",
  "key12": "3mQmrgbkwGktcQtSR5JoZHjSfy2N91wQGMuHZzijF2PaX6F5i4rDKavcypvcHqb7rkDLfu9fJfUep9zSUnWrRaNP",
  "key13": "2nH4iqRguEdUH9a4tBk4si5Bj86pqojZrcKQwzsuzKHmX49NehVXWTiD92SuNnNH9rWENw5qrDJveJcRVe1kDAxQ",
  "key14": "3XbDC68kBo6DjS1MaMX6xsm8eDUc46WhM9Rd1Sz7gd5g56a3fCjvP3swz4qNKDmvpTDWj5EJcq7VsXcokXQHeqNV",
  "key15": "k6p9eVYTLgHE6YPyePBEhvGoWEhrAvMyULNHn3g5kmC8xyzcpPhzBJty1UBcxRxyCqcCr7DYXykcif33P5qmnPb",
  "key16": "3pR23zc12L1aCQUxySvmztia4SMa9r8QbxmjuM5oRLAsrc657ejectC7W5AYa8GeNQUCfZhr3YPcWpzdkous791o",
  "key17": "3FNBCQWJPQqyyUjKr98tKHFR16dBxjQkh3SX5CuG6QWVPQnnxtQXugRDkYvymCkBTEjcXXuPF1z9ZSRywbRgGwxP",
  "key18": "51ouUTzdYff5DfCUDEpDR5yD8d9uKfGPNKwPXiwQAzsxNhPkvgC1bbPQsykYruFihAqtoW1NPJZCqwSviqiPS5vb",
  "key19": "2LF5oDMwsxRpBZriwrCK2HnRPtMbm7j9ZDTLYfUuxFDCx614aXu3Sf53L1XYDP9M65VHXUGrX5cHVNtkDh4WaYoW",
  "key20": "22EvtLfMWhU17woxGirzZjuaugYputEFTkdvS1U2ZppUAQXTfPc8RSf2BP3bs463RyTadmTDYB66aUdMYXLHGRr9",
  "key21": "3eHfritaDPqBr4Xwsxcv44fqmkY2FdY7Vmq13AxB8HJnFSeDiXsLh1A83ewiHcuhNjYprTkDDGg8LWHmpURb1j8i",
  "key22": "59zv8QdEpFdYZA9hXETGLEfuwgDtMpXqESXAxfaw1CpL36f5YejCV2VFBjK9ruo64Lwhen5U1C8zRDQm7Gxczjxd",
  "key23": "5ufUS7U3BYDuj88VvhJ7kLFRyaYxugoTP4sG4VuiR2wGpADxAjQxxqfJ8TAdELNCKTmScHY9f8j6otuHh5EaGTrA",
  "key24": "2NKbeebTbYwu168CprcN56TC1DPofGfR9hBNswsJjgAcMpc5PXwiZpbBCECptm3kWF5WdsrUNoarJar6XyC9uU6Q",
  "key25": "2j8nh6PpRNXMhLcQTgzJf4eBXvhWXYnKYYfPmp3fciJzbtmb6pvLnDAPZKqJbXZpGrAqCXAh6kqbaAVkfbKaD5vd",
  "key26": "2zjeKJPWeCw38UK3pzjuXE6fEZVRjVeUtV3UTdviEwkuwfZfVJa4eAcCBTknpeXVQdcYazkxtpKhxp6HQ5b7EGqn",
  "key27": "4QNz4gzJZ5Y21jYVdWYHRHguE1mGsz8J3Jf1Rdhjc8Espqf4mFXNNSX1NWVari4aS9ibeFKAczco8Zgkw11BuQoP",
  "key28": "3y2rVQ6JKUYp1BGu9y2wnAFx3d92ibhvdEevfJ1DQYQyXeiR66KCLTaBoC7nnznaVFCqTVUXyxSSDxhAcGVcyzEZ",
  "key29": "5qCwUwoKKcMu9u3YVwJaiagJhBWd8DNYsMWrDR1ereSKCUHiyaUeUTzHaAmaU2nv7brC67raXEAh1YeYKS7MShCf",
  "key30": "DUiAyp4JFxgA6dR6FddQv7cJfq7uADBP1CDYQJX2hyxCujncdKxcwHuygpSs5WyJpEHmuft8cePrg3obMiLZsN7",
  "key31": "yU15THP9CVvzKDf93f4V7A9xsCfEryrfjTcFF9UG8HXGooMxEhF62vLHWdZhDEvnXwAgcuhagaaAkJBagq1F9GW",
  "key32": "4wauQym45dZgxCWUviNH1bn3XeWnNXQyuxNKHdiEAHJN6iyQi7xRnL3nPXxUGEjjLR3QQDHm7J3E4JtmbJ6jYTRM",
  "key33": "3fi7m313jBXyTHdZg74TKpukSYiQ59d2YPQSCgS5SYt3eUuvPuCE6ctQDLuGG95g5CzeoEMR2RgQBiUZAA6KddaV",
  "key34": "2ZqkAmymkAHPhUMdGyd5nA61BHeA5Z6smQGA2VpF8sLiNC5Zf7b2CKmdi6Cdp3UUYyaetKuLKArPhmC9k2wTJpW",
  "key35": "67X5Ai6T43TxPvkqLrSJGK62R7UzNvQvpDnYtNRHdoetCWV7jzMVTzYu5xdhTw3eSBBHkHGHpWqjhGR86GqsrDRS",
  "key36": "58b1hWtsJWTudCC1f7BRZzwKxeFfeFkq2pXFbb9PTLPTcgJfKJKnsJjTgXMQjczv9AnJT3dsnaf9YByTp4fmWDRY",
  "key37": "3JvDez1EoYVtzj8zwvRk8ks2JcFkUBeAS3XCM8bnRVTHFPbbB1sMBqQjKnzMPf8KQSbRG3i3F7wDicdWCuhQoXKC",
  "key38": "jtkGDxiTYJn7g9TrDHRyzpZ2M2TURZqbNzRNTgQ2vRLKss1tPer67YZuAcePccW4ciPNDh5wzbX7K42hr3S1r9x",
  "key39": "251h1o3L4kYx14EPv7izzCDWmCdLDj8R91SuarQRA8NMkkZMkSVLt9vNWc9pUDsaAh5stHoXKfZyz8GUVdAPfxTk",
  "key40": "3WNZFpTnBvtqWDDkNqqxJt8Jt7kwpCdujQzKWipWjnBfQFAuUpDUSEe591bkhzfYLSqNcLvsDr2npz5nFeVGfK4C",
  "key41": "3NFqHnjCrMJfrrCCRy9zGNr5vDap3r7mgRk2YE6vJzthffB42Lh7QzcXdM5FVpFAH3hPwc41Vw7ggbKvGBSVeyhD",
  "key42": "5977jR7Qssi68ReAkBCuiN6gZF6U3NZZQrHLZdRDeqohXMcZWkjPZTnhh29ntBhgLSmV2gcfLNAs8dYrAaT4sHep",
  "key43": "3HPZ7qeEtM7X5GUVj8R8LnzkeoDnH52SS7FDPAEZ5uA1UexMXzGnCZkkVYLou8HSif7Q8bGnW74yaJFZ4Nh5mxJs"
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
