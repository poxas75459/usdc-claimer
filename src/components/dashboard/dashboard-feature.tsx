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
    "35PjVu71FNvavVzm3YNeGu5zjxyKbZ5dadwrtmGUxDMjrEBwuHCWWZgRGWGMtLifYgMfizUYEYfZsL3EzpcJLR6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52WDiJXX94PQtkACTzwyfbQJnpwfgbXghCvEVxdBJCUEkEP3LVrgCTE8b6jhkpB3wYCzsKRqi5iYCHmmJcG6wBfQ",
  "key1": "2P2TzFJmASKXkwupHtfsopLMYmvrYyJHDS3HK9gYxhmmMK83GCAMg9fadBnQ5txxg54Pr7bH2xgJoX8M2jGb47AM",
  "key2": "62tDjdUgXw4kQ48RzTtXnyDLQK7zXFQZ1zvSRuTk6PT2N7RqwPBj9EuzU5MHsz4iZdFKcKtEaAvaqKMtGhGkEbyE",
  "key3": "HsTTD4rg4VGChUAtQegQd9UEAue1R936n9zEkp2tN8UzyMLtmrhNBMeYzdgGBvAxBST9kqh2g5Ksjfjz3zsgjPf",
  "key4": "4Lk4uM194fHY2BcoMF7yypjxWPJdR14Kru2pxFrjpuwwDnpuD6ocZAPQmjmJLx69ZpfYEwCVxxnKQ5x9rdgDEVj6",
  "key5": "4wjfWrALQxQiu5MGTreZV6zydaQWRDKpke39un7XcwVeR8HGTH5JeCzQQCiH36d86kWtViP125xUc9MqXR7HKuJE",
  "key6": "54AsYFiEDqjzSZkxzqtj3EzF53rcM1mq3v85VFKnJaaS6RrFNDXRQadZLHQzVzYiJREA6frXM64hA8h5WkuKduzL",
  "key7": "5PXL4CXziZA4oKKRyoyo56bzPyoMSH8GFFBStoBqpgmL6tyVNjxTzWxK5YaHx57xSa2gg93ffo7FHPk7frXGFS1B",
  "key8": "5ds8ZBpyxoQQ7oVTP7V34YYYwXQDn5qWEJe6NTCmqNE9XEzzCAkLQqkXy8ocEGxUFLsbBe8xhQXq5VrCYkAib7ok",
  "key9": "35tdrT6ciSujgRGN13uMNxFupoTDJjuciYzgA825SGghZNDhLdiWKD7SvBSyW6SMVNdvfpFfzHVUcfaNEuSDwWjd",
  "key10": "5ywVpx27qC3Zt7nuSN81ybbBEnM8avQtVMY3hks8WFSbyw14x9JrGUTworw3XKVSgdBRvxqdSYfkqhYSyBQQVFo",
  "key11": "2GReEepP4tkPoNkawK8y9q7gue6xo7g9svC9YBfeDFwfjJo43TLNJH2PzMGsW4xnyRb1pMEyo8k835SkD4LjNREv",
  "key12": "4uJsDMfpzkGfY17WJZ65q3QrtjM3ogQrXXScun54sv3zNZpkSbbTzy1p9q9Tmsq9zkNj34gYGu25wkqknicjrrHQ",
  "key13": "4vu4CYJxq46BXYks2An7HJ9eygKuckUUw5XkUTYQAE2EeyEVw37i81547BjmwLATtBchzpK72eLgdk6BdjFHDWMB",
  "key14": "5sLp9WqRfyN6TYPDEDhyNMcTpdwAWjS7iHTRGL8cAwzL8RXrLXbfv83r6tzVRMfdZGxHWom3fEeyBka5CU64w5iz",
  "key15": "4np6rprY3EWSYcZK9GUa8MC9tbSxXmKJ9oQZq5KFLxMuShxkrQgQ9WGgyw5aPxMTo4HCi63vpoB6TF4xCXV8bFWv",
  "key16": "4Gtsx7MebJnf9nvfK3wgKHT75naU4teVYCEb1J5fp6oLtTVNd7Jx6b7mtHyHynxQbXd4XEFGDk4x7f64JYBM9Xuz",
  "key17": "Z1ThFXMB6313Edx7MDNtt9Ld8TpyrBGeCCaZYzZiSymL62WScqj41ecUjaMwMFfbE3GHnXRTP1EENGAPZfcPQqk",
  "key18": "5xacESZw7hLLtQFhwzC34cq9adeSk7LgKjByKdwfQwFzcsMmpVc82joqb18CsEbc5qVNdBZYmi43PxM8pWBNhXxD",
  "key19": "NiPmrckLx8fvEjP1V3RRfurHNfFkLBYNnqqSE3zUJzw5mYyKNqrsrCAPozMzKKzqkAHu5wpLE3Z48pF8ternjuV",
  "key20": "55MgPneQuSCe6iDuoJkXzBbdEpvYydzSrNNMRsU4wJtPgduUtAdZhkTTgcyr6ydBWcdLhAAPsqNHPNDUEwSVfM3U",
  "key21": "5dpCPz9WZ16SZbJ5YSBYdvewZrfdhn92abW3nhhfaFEMg62yY7SC8ohR13Y6KSNpxpcMGWLDYSx4NPVaPSChCR2t",
  "key22": "4Wb2q8WdhtJ9JUtGvJtgMywjY9MgtgsRJDCrqjMd41dcK9Gw2aM6DELWXA4q3yVKXtKS6encBYS5LwCevdTTyp8H",
  "key23": "2CmxeBEaH75AE5rdLe8heudh7zpadxgckS7bvpAp9nuLkktQ4fpaWhKo4yJzJ4JCFTHvdL2Ft4XNvoNLQUetZwAZ",
  "key24": "3Pp4hTifpJ1M9hFKVvot7NtDHaPHJ1pQmcYDwNHuakiFNF6u9P79tAQYtiiKR4Ac4hnAsFS8zdTD57AvjuC8uopo",
  "key25": "4DpBTQX12ywiTy3JELQQBPDurd4SxofgUW5dsmdWPZ4LFix2ojiDwrUrudLY6Dg15dCCeiXCNdw4bJSVnJ1QnfhV",
  "key26": "4hK9x9qPb7a4tcXkV3ZaWs2MjEHraEmue1fxesBZwu15SzdiZTU6buoZLjQ5v2pTjndL9A5vTMrHU7puZPQjoEvG",
  "key27": "2gVdoooRmQFZj8hHrJCqX4NSVP61Hm5LwBAYngW9veLhaxxx43SBFXTaWBJLLM19EwYfWfeqbTSipLpQRVm4mC1N",
  "key28": "Xj9q2BJs7tVRcscnFCV7f1RtQY6MNCRHmLcozLASgC8pXrPsgowQu9T32PfdyYQdireGcyngByetUmBCvDCXiJk",
  "key29": "6sny9urpyxjpSyqXV7Q9jvM8fXrhQ9MsLX8UqLvxKMxX9STfPk6we8YXG5HA2nTomUedv2YpePsnSjaS9rq6h7L",
  "key30": "61ZaiUQnRFEp3pahwVCeshYLx9yZp7z5YdQMq6mcQN4ugSeqzraT7VAapnNhoq8V8dL61Tc29bR1YXkKhDGmgEBi",
  "key31": "4haZrnzhHFmpVssZEUkWvS8a6jCC6zei4YZHqD7Ug53v3nnv59k7mYRygz6B7upSTC1wdvMXYwWGwQoj7y33FoCX",
  "key32": "64ALJ51VwWuNbLW1CwxGutufvZ9tkGp4iphrnv3xeHx4DyfRC4sy9xNU9Vj6BQ9agZLAE5BsDK9ETf4Pf1UbeRxe",
  "key33": "ybpfgRZN46VGYZuALkL4WGKx31xyfix2VJwaA4yy4rDEzFL4FkTHk4CmNfRnwhCj3FpV7iwiz8zRpjKvCVvzuhb",
  "key34": "hmpJDrq79UzRWPf8g4TL3YP3Uwzp57P8iMrGPZW5Pmof7q5JqmEdYx6zsVvMqUVGyvquScif2E9A7vhBr7CSLP2",
  "key35": "2hs6ayiDDRoTQMfdpVm1f27r9YaoEouVudzKdRyLxgHKPG5xneNG2jzs33BTMd7tf8BfYaAnVBapaHBdRE6yWL9P",
  "key36": "2K2gr3HD8hVf6h2txPbu3RRWpGffJSZFiDhPM9GtX5RHJAv1sYSQwknGErzkqUJi1QtXk3p7Mru1nKThTaSCDpCo",
  "key37": "4etz1zYCGSkqpYsyAoM9Rqn9T6C4cCEYNXWnBmvpCu1tuhbXcx8pXsYqBSQGKUSxYySxFFBUzPM2Am7YaBPH4JSG",
  "key38": "3dPpKEaxtc31BR9ToAornRUV2ook794Myi3esBf93cB5JNX9AQDouS7h9oY17mLYA3L6iUWNNBfBGu6Xn6pGTufF",
  "key39": "5poLSkugT8qHgGKko1rr3Q2j1f4n2LJa6mW4P9h22kCqCFGsimkBEpDUV5CGSZAXUaXGjs5WyTHGhgRoZtH2Waya",
  "key40": "4aoFLxBAB6LVpmWQaFzyjmXXuQJ683bcCs5WCqWzkmh7BhMviRpPRXpxWycuFZfDY7NiCRzGcTxFZJ7NFczudon4",
  "key41": "3Uy6NWf7VX14W3rG6vp8QdezzuR88oTT7Gj7RRGT3ZVFUYpc5AvTGUsagBYnmLGtQyP4T5K8GnW3RXFC2tYT1JCZ",
  "key42": "4ojUwXe4xnAEwAfF7VZ9pGshvWQnSrb8r1VV1ohP6KiqiAdLzkU6Xt2FResNaTYVAM1GHXc87NfTsrBC6v5dsf6E",
  "key43": "NuDuvzeyv4ZsgEBEqD2B2f1nuyrUBwRZFffRsZEFtdKTBEfLLHnZeoA5aay73kUSzhZHcGXuVo5SxmpxfnrqQJN",
  "key44": "3giCCAqdtT7pudKUFdtpD9swRLGUBbE5vLr5fn1cjrJN1pbomycyfsg5yQ1eW6HyPxvG3URbmfNET1eM7yKzzwHx",
  "key45": "2AZF7SHptxV2FmUYqRFAZTaE1uEHShAP8muCubYAYiGi281r9UQ2ZWuU8i8E7vSGmTtHqGLHttYSptyBhpEL7FSk",
  "key46": "5bqP9GZVaRJCKbe4eEerZiSRgkUoKY8cGxGopYe8fVd1QUMYeoGnSLoTFhi13RzbHgsr5SDnvpxEkbz1VJjEwD7H",
  "key47": "21kJQNmi2PswaTtxUDC8WaopFcgmCPfFBd5Xm3hY1zmMfnhtSUxNCiL9jmfFePhMQxsMYuZhxZUWfjFMnt3uorBg"
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
