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
    "3FBoJjxA31cstXMSb85F2XpFkQESHw9wxQxihLfvQnDWXG8HpCamP814iXNWhzm4amcCWi6UhKmdV67TYVnVrinP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XyR5BNfzdAk3FTGKWAmfn4vjspC1Ev4WQBV8RWuJxZRVa6rY2buMHgGA5Nx4Yko2DvA5f9Q7XD7cGJQBr84xMaa",
  "key1": "2obdKcZjvwMZ78LABthpjhit2ERBPGBHJ5sChbP12YmG9ekH9Sx5q3tqFm9XeXS9gUa3wemci8494pzDDLudJaMM",
  "key2": "3FwjgrDejjwiXiTpHyQGBqg76ADxiGq5JsfYY3z19LvZv2zi8ZJWpWKWstYgnKzx7njEPeLrfbG8Bu3um775SwRY",
  "key3": "QRuiCFPuYKviUM4vpqe2LWoyaMrLVLDSKLTLrZ6pdPeDfax4U825eZobZnXpvgfY5b6ugKnTJ8v8aDhTWCANzgL",
  "key4": "wX8mxUsh3ZPu7Mo3HGumYsrB6RLdLhfEsRfYn9j32JTsaxSG3kqYq2FFZqXXn5W8BVftCT1XiuJBEXPdLHN6DEC",
  "key5": "qR8mFLutGaCC66cRo3gQoP4uvDrbaHyYDx2XD3SKgNPWK8CXyTzpXwcCEGSHoAuvmtNtKDeRTWcejjvPNCPmZvQ",
  "key6": "641CyK1gmnLhXkib7RxFXDeDS1xAyC8ApyNuiKXp8NYNojoo2gFyS3fowYDPDcx8sXaPKcAPstQXnVLRTdawkBcb",
  "key7": "2uauRFjsmAnS7Gif8j5UXcSRtgk3JpbrtrDf5vxbAgv7YpuCxfpkT41CnBgwAs4QCoXP2N9Ez75HdJHxvAbn7dXC",
  "key8": "3fRGC4bnMVMMurj3PaqEshgCjYbjdKE7dnzFrnwgkjAApVkqKpQrBAhdSEGbGYg2SPgtU6JTZjEbKZVFgvmxJUeB",
  "key9": "2QKxhL2U7U9nyjSyP76U3yVXUxQ6LWHn4g5b6D9cRmwAcaFHfxs5qMz4nxrx8BW5oXLMPoj6hY3X1X21CuDv7PR4",
  "key10": "3yKgFb2BFJmYN2bqgrFqud2t4fhCYCAit9DU3xfdaaBFvNQSfUeKhiD3yeAhtXzNuWutaom7cqQhqRwT6WaGabgJ",
  "key11": "AnKRHdrUA1jJxZCJDy4YVzaY2NVEV5i2Q3ZqnGqAgdFY6ikKs3sqzmAEsfSVVax3fWtuh6JtBXRgLntxJvkDvz4",
  "key12": "4A7UVrpmTRsemqJrBp2rXL3XwnepvKUJUhtk5VHR3nH18UQMKC3sd3Lyx5gpiQ3JJ1eiaZCFvQh1AC4CYSZMEbcY",
  "key13": "4af5GzsRJNmBM18mQGdTMeG4e2AVGZ2ZeitowgYqHdncEmWossnBrbnz4a3twALG7ttQYH1vvM1kHPnhzuoQiRj3",
  "key14": "4asEAs8GAP9PD5X82ajYAVhy6cNTthz2imsS8M6WyGuvMn7sdvL3R1jxw6iSrqhxRvseagacNmSZFqqzs3gECu1k",
  "key15": "2CYG2Nwn3VV3YRjKxscF3maYGJnNbvtUsDCULHpt5akL5FHyu3FwaPNm7pjG8uxDZsUDNbAfPAQ5iADXUS9APQKm",
  "key16": "4uEDr8U1xjx1wxcEXPutHF9aBQyz2F2w8PF5Sdz4eAyzZDbmZQ9r18gXV4CePHsY6U9DjQGWf2sj2R8xsws1sCvZ",
  "key17": "2LTRswpyB2ML4LUW9t6XaAD54nV52MAY1xiRSL8TtMhAJz6jTavxcZXNBLc8fpLu8G4FgrBAQGjd5MmKzWRzVDc6",
  "key18": "67ZmDer9CJ4Y7RHTBX8NzdKYqVMK2uWmFbhf9ZBjWcKPzLTzZTkFuwhBd6qMaHrym64dzdeRCWbbh9G1xY2dmioH",
  "key19": "5LVNSL5cdgMUrHLYScSaaG9kJr8h4ES6s6jMT1oogpMzGYXe78CZfNy3C3gCzkYFWLdkgzjcG7ukJe5HXjK5Q4EJ",
  "key20": "5LHnNcRZtwcTfFUX9m3V7r3KaNH16pSKH2gvHkP1SQZ5KsR39Q6QS6wJnVFWhVZZshA1x9ze4y9L6qYpEdCAYYFB",
  "key21": "2QJprscTq8ruvNG2KxuktKnyHr8A54rGS3MzA3HxGaVpHJWEju4ofA5CC3szCLTUku3A2RhXEiAZ4X1KYMTTa5zR",
  "key22": "3xSQQKgewjwEHkBdB3fBWXyYgDaJhtEk4rapsRYTXLuWhbi5LctxMPxUmC3cromxTkVXeYNfYW11mCKUeMh5XBKG",
  "key23": "3C2oDkvyaUgCSbBHKnZDz87xj7jJ1RLSPgw8qZCvATM7wMsh4QEUgqzoggJMRs1FMnSDYmeG5DiTqzkicJJDbTsR",
  "key24": "3NELbnS3Kw2gWeAcuDx5djaPsC1Q33foT5TRpoHk5UvdyebLBLmBb9RGinJyKdc4uieW5A2UKx624b2KqruyerR3",
  "key25": "37MoWoEEpDy4QLL9PcEsyGuxC2CjUrfixLBeTnbLLvwZ4LhWTyLrU9JPXrEMhZGFgok1tbRhC5GvfC8C5XrCPn75",
  "key26": "43TEHjN28NyQxMj1U9PUHvDNHbYWzRgVismP9pFCkqwc7jYFRdMKF7brDu29sN2DfSuwnz9x3Xuk6trmwxxaaD8m",
  "key27": "2uBhKDaDsNqc56hcQcrpcRGMvrWcnMjZRuAvPKW2paF75hvoxZeo5QuAzNmdG3cePiiB7HAFe4xYHevKuhZmLXfx",
  "key28": "eLFyCd8nCZa9SgAbfpQV2XoBvVW2uC3r2CULyffGosLKPRXorom5YkTBRMAS4rQ7jH3tRoz5Aeo86CF6k4oeE2a",
  "key29": "48WtzPTfhCQ9YuTJvenN8L3Z5FXBkPi7NdDTQq4fb2XaogBFwqqkNHudUP95JaUdacEk9LutSdcyoRvgcEh4g34y",
  "key30": "3gfBLpHNVxqPvo8Wqj9uuYN7Z1NGGiDWuua2hD4TTf4TmKWeHKCT52njyvTxdmXnSynwrsULDQgbvs2DJ53wxaoY",
  "key31": "5Fpc5DFsa8hWj2QsSg9PBaP5LoKkGgx7ocaKKYxLAmhmhdbt4FLKXW3cjxnrSGaLDpYTUVFqxJxCY4w8u94GrgRC",
  "key32": "2V6NPFPQEFdfkmxeXGbBcCmmZdLTny8xegpY9fEiaZtBEfjqBQtGh4PvMT7vwMByEsQk6JE2g48SngQuU8VUYtMZ",
  "key33": "3KQyC9615VZMoCyWAAgciYEH6W2nMKF34mttQ7f5MfktcT1aqhV9kgzgbBUTKCFsmCDfSjv4XFpoypaE7GqRLQJe",
  "key34": "3s6PCrcx8KHgRtM9Lq9omGiSDbfTryLQaPtJMUEULbxjze3dWvfLQf2hT9MUzVBBXcvZVjPZJTk3mz91Q96knybh",
  "key35": "2KEJy3gxtjrib97rwLk2cefwSzVNa4sRRx8o3h9jU61pmMxmWsuAEVdkRsPxYgsSWVz7zsXG9hmPvfBYq3mKVJWX",
  "key36": "37WgSuPAorChNzXdxcHBXermpUiAZ3QjP6pugsFnXM5oCFwGUZR6zgGiVNXQC2y7UggHeFPhhFaiK3xSe26C5kf8",
  "key37": "2k76vpdo9XpPygnv52Qam95Gh4bF23JtMj9WEYYz35mfTFiSgaeShsQXLjdB4sYsrmq6Pb5T28dy9bdjxYuzY91D",
  "key38": "29D6SCJgaR5rBG6hfndPGmT5HoyqaNBU3qzUZ78ty9Kvak71oySpvFnMUyJ4CaVzFgryNPahTJ1i9h5TqmeVh33h",
  "key39": "4mtUcxwrxukWvgYd176N9umqaq5qDmKRwcGeZkZvKjCsKDNbS5WV77dpbQqxm8YTPwjscdZuhMzfwpd1Hn3mF8Lm",
  "key40": "4mQYtbN9XvZFWiL5QWRHrdmvL9RmPgVNeHhKd1rcca459kmun5gfhkoBpcYtpHfQVVEw4V19h7rj5fr9hra7oBaG",
  "key41": "34iHMdWByRgGhngnN7z5B4WA84g4kMCWtFdbF4wAci1uVB8FBQmMCjHK9noNou7Ja7htt7CY67Wv7qXnzsyF7N63",
  "key42": "3xDAyu5vQSDQYRKkFoYPbKPAhNmv9K4YQUzoxzfJou7r9NEpRJMXcqGDqxrW7DxUXpKRVSedZSYJE4JPfRZ9ZdjN",
  "key43": "5JSQHb1VqMujnD9CZKvZzhp2jWERBt4e1Y9tqcM2BqCVjvPQXsicajRGRdxYYqhPAytXkp2V9dQRpvDT6FUhCxd4",
  "key44": "4ArrnxFvEn2dBhGu2HU24JySuEmzzh1FwzLTCADKVWMbmFkbLR9mTqFn5VKry7ZxLK1dRbF1UF1jSbaPGJwdm7k3",
  "key45": "2opzLLAHQ3wW6EXN3k4gw7X9daCfbQ36REpwWZ6jRX7efP1MDjPFWM2VgqFDkDKYmqk6gddw124Vd5L7CMcEchQo",
  "key46": "3SP6bNhdpTs4UwwrxYNeAzFQs4LtX6BJyFQjNxzCMfQ8YNQjEP2YzCYG9YWkVYnXTMbAZPkgq9ymgcA47qPfbZUw",
  "key47": "3HX26VvBA41jYcztHYQkPbLR3EZowwwZzPPU3SDqFBQwa6swJmMWETJYVGx5HGpNnLpMroiqhWCjFzRRp3VMJzrt",
  "key48": "41QUbNCC1eCD1uzMTHh93ccxbqPScnCfQ5fu7oRHghExzjewrW8RuPpghYPUoFMfnQv3WMQfsmYmEdYDFku4W6Da"
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
