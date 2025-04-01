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
    "3r6DB1jrd6ykBePDLhzkzWWtzDwCmXPL4aNR2oUh2XTystby3AFDoMkijzPac57EN7NTYWtYgb4CET3vjMRdvqBL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "K3h6wCAo2djdx8X2shsEW9ssCizwtQPV73UDSsxJsrpuaRwESkFazjnHe2fJTxyx2Y7mwBB6s2UFoHQPkH5k73v",
  "key1": "2cpKwnThqrn2mjwtVXLvuvbnYrFSHeoCGnZQJJzC5VYyjT79mWzHQ4PotdjgGvBxDV6LLAe5bQARaXeXBoCUTegC",
  "key2": "2mhmdXCFV88UtKo1p9f5apYDvEnG7KwPwiRhqv4tbrGYyjjmGSibLZSQqMUuezRCHgBRMg1o8qpr6FzfQP7CkxzV",
  "key3": "2Grjtpp3QMG3EFBby9mLXu9C9px4i9Mq7ym3uDwkKQm8dnfoixepLmpYG9HHauw4Q9pgMsxQ4Q3Q8AszrMvAKmV6",
  "key4": "rbg3zEiQMgoUUvjnf8kZGmaQCVxoZwshHNmgdrvYYGV77v7dSfhnDz2u19mVaXAjhkFKi6nLKCk62byjiG1weMA",
  "key5": "QrizVv741K8a7krdr7GDnftoRqeh8XqgMpTG9X7YzKs5HTpqaXTXDn9GT419uU3M77PTPhqWZhSisnKtySwAmFF",
  "key6": "5Vzd221XWm4qQ98GZbX3CLCPSx3mmWChK2Gbqce2ZPaaSjCyg5CFYXnXCQ1t7FazDvMgjSx9yz7w6FCr4nfG25qS",
  "key7": "KSwtcaNNaRwS9VDHiPggkPP9xLfeDweByKhMdjuW9FYpnMtG9gWsvoC9tH8sAxDZL38ftFnxrWZyoQpJhbLSde2",
  "key8": "39s1g1L7Xz2EQ5oxGWTkrDF2gfySL5FkaPvAi1uGH5VHRoVz5TrfuLWHCwj1MHyzBYfZcX5Z8P1uFk4MXSskHNPs",
  "key9": "52rbxN1EE33bQF8X4Mt1dUzJ7REwp1qegci8hWBRyYqJ3mNPU8KJfvDX6ZLtvYHbeL8uVQaRb6K3XQtSETHL2xxk",
  "key10": "J91JDMqwqF4Jhr8m7nraH8J9kQmoovdx9dovEES2veuJdG8Y61QrGt22zdwV2er2hXGKNS1TbynrfSts4WRaxdN",
  "key11": "5Qfqxy53gDKyLeh3UB1rMWtA5PvoasV917PQmocmKLNUKLwzwtx7kkYZs2HhzCcpLWs19h9gy5s29zkFHDS5adEh",
  "key12": "5xdFsM9AKSdiGKRgNmXSHnSpW3ZjBroeeANf6uvGrvGk4DXPbRJppZ8wwBRkLFaGT6dhsZ8RvbNk8XhJCkFZ3HA7",
  "key13": "4EhEFhJ5yMXCPYnXGoxzAsDExEsPFajH9Ly54Yt3au8UXE6Ddkrvezqu7khdhBAmwdrLUxSKGSTtF6QcvqB2BdmL",
  "key14": "2ekedSELu6zHcSGjhp34QBevJduuRqW7F3TMnmWmBKzwFmDAemZvievm6983Bunv43rHDKfks3jZYkeTYR4Y38rh",
  "key15": "EvVpqbT7TQi3H7gNbHPYXBBd5pNuv5bXihgKVMJM9XYLQ1Vtv8UiWgrd5UDRztJYH1J7tKRFCe11UajH9GNvm8w",
  "key16": "4KTDVcNkbs5dUEgARrUpsB8t9chP1vXNUVqPo2WZwmUUcNoDyPxtwdgbh5CwkArgT8vJExox26sonBoHuGVSRS9z",
  "key17": "5Zj1UJviNuw22MWhN2tQWauQztiPRC9CuqyWW7GpfW6cYQtUv3edbTeStjG6FUZEP1jFV7ZbFZ1wXR5t5APbxUTh",
  "key18": "4xVPRX38jW9vnyKtSKTVVQxDmbRCf3KkAjWk8LZbWhQ7uPCJkNuqzqKXovJs32acwuVncnbETGHcCJEnHnjzpUpd",
  "key19": "3PULMzZ1LBMi8CfNgp52nowRrvbnvwHVBQj367Qfe4oiYAJdKpPojCYpfzuLuPi67aonrhc9YZi9ch91btEZ8dMn",
  "key20": "5kcqXvfxMeiWXnBJhA4YCmCu4Lbr2XkC1zELAXuHGX53h51eaKffsJ34Fbn62vV3zxao9kkqSpuVCUCyCseFqg6q",
  "key21": "sFoS6PMpTrpULTwATuzkmYouHwKNwWRg37aSyZTuNBtYwrg39SvqLciqg82A7V9aWxGf7Ns7ABDtAfFMWyFchPg",
  "key22": "2eyES6Cwdykt2WP25gBL5JU2MikMQqqW2zvFaX753WQhf5FpyZHYkW1cmbvhzSuRCbWZEWQXGK5KaWHkhqdJpeXP",
  "key23": "5qp1RJvHyoS1FjfZaC8cQ21aZR8d9tmHW2mio82iT321QTsycVJTUtfW1t3ULR8rTMLyeB1sKnzAGqJk2UdAWEjT",
  "key24": "5qxiaFTbWev89MCcXoehcfUdaWYKmZsFYz2jgNwmBoib6eCwdbSVNs6EbE1FKx8mvz7Re9UGXL8AwXpcsTYy56kC",
  "key25": "26xwJKis4WRDycxtgCnN92mxCAa3wzhQWZV58jmNPzJgxzyz5XbYq26TaWtCDbSFvsk7R38hj5S2LeiCYe8dksKS",
  "key26": "GtBPDWwuGnJjKkzM9G7kbrWWujPYXr9mit7d3Uf1rmMHfwe5ejggUF4cnHKdU3n1X73xspVosjAdfCji1eWGAQ1",
  "key27": "4esKfWywcQsk9Hw5VVwW98x9JH49efCfa4PAWpUirSmYRY4aD7YG3Cg25UbQdSWmfnppBwpM29JPBgnM8iw9qwW7",
  "key28": "9xCxhrJYYzjGm4F2FpLkLxCYfGj3UU2zJLFHc6WbkxwMMn12WgV447LmXxPQpV6eDKBYGvDHuRZfi21CUPy8pAn",
  "key29": "2eNC8rMf3uGZV1f131xKHLmpo3sLQuKWYTf5U1MXLb85J1YrbguvXrKAuKBnvQEXJjHkdYn82quLJ9xrFUa8rism",
  "key30": "4TeetudLFtj2zfgot7j4rq88jo7mbRsiHsphbLJrkTeB6j1TnNmS9CaLMBzPhgKt2vVGXNpsGg2szJW4YCLKW71y",
  "key31": "2bW5KwcZyoJykSq1urcHRcRcRBX7n953gX6euTmEd5oWwz61DpSxx9cp2XtzBz6DpLHARz8hFPxZxPFdR3692j8e",
  "key32": "fKswKxmacn3qsiSJSnJqQUpsGWj3hUWRHPkDGA6Nw9jDgDYsoZTLeU3Wka7tPgcTr9npeYVSoKwKq4G8SMcCQ4A",
  "key33": "25HMLA4C9UseK9c5i7HU2dbDRRA4TGtAqd2V6B2wLfcH4pQgN72Pm1kY2Cb3fUSSo1xyVCyQzMhrTxk9Xa4hbEaB",
  "key34": "3qT5NwhFD5aZUFM667KtUtx84bP9kEvbM1i9K7KPLaKSy9yJNHMviJLx9i2zcosx1VkFfYu18ppNZvGofpQ6bLKg",
  "key35": "63c1ziaH1P2UZyW6fgbZDHHMpQP7DvATJJA63eTUZK5fdeh3MxXhmJqvvnp4E9ieh8SRyUhFTohWYEaq3cNH46WE",
  "key36": "382jDydqyunBhgEbgnniqHfF6ufWcgeSG8PnZrgGgHxEX2m8KKyYx8CCB57T8zGaUJ18F36fMomSFTFqZ4djWyCc",
  "key37": "4J6credpi9sBLwj9HsNPrhZrCTF8id2EkVJPYVk6Fh6WXT9yPcQTjKCNkPiDTPssMKeoomZy6rNBbdTfiGs9aTw3",
  "key38": "DcEh5QjyLCZVt2ff8utq2vC13A85crxFDyvo2ingTT6q8zVcn6Rph885uVvUgCn22zX9g8tCUi8Kg8sdAq7nxur",
  "key39": "4i7fMd1TNmhs1eRbZWkTjSnfszDuMDqQ7VPi7e1SoeAHYV24b1y4zma7YtNbaNQQ8detviyfQs7XYjKHP2KNPEob",
  "key40": "G4iZHLx9VfZwWFuaXKvo5ikNWk7ReaLxanmBsZuG5UbZMAAkzSErLURoGTQTJ9aSy9c8BRdJm3sqgFZqssFzDAd",
  "key41": "21MMbSBapQCUtkqxzcKrh8vBXGyrEDtaNs68iVX6t5PxS4XXmRPTHPU3jTvy3UxB5nidZ6JHe7TMRUcHWD3s5Ani"
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
