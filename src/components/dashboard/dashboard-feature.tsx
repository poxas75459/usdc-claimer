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
    "5rdJKddj5FgiwYDzu6LQrRLeTG4QgzGauhwQbnCucNYLVeKqRoRV2gz9fZXssqnY4zzWETKd1Z8y7x2bgPxKDGWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NT7tG6QvJ3SSaeKrBkZbFVbmSoS3QKhoEkyobVJrX517fowAiUfBm4TTwNPyRfkSh5JQJC7A6gKdrh3gfHLXeft",
  "key1": "65iDHGvZXazUscotF2s9SctnLQyYuSHDD2iaKLEQ7vUVk4fuXaiR6CkeD8nQcjLGSWQ9z5T8TcrBCCwH39X4ih23",
  "key2": "4EQ4hWVarDTre4auP6rgcq2YGzTQSeJ9DXVk2VQ2Xu9qn2hSyVftF6LPPGoqgwaGaZJHApVckiVX7dYSjKV2AxXW",
  "key3": "3zN6i1iQCq9L5cz4mqJWKmaUrkSNiAcJSu5MKb7yrbfVvZxufF93oPpVF3XphUCgAAoUvh3hFpE4sV8LYFrpXAff",
  "key4": "5tC6WZ5mzy5vDXahPJghttk2HDTLPkUXfsEfZk8otgHj2tKPL37mJ7v2ZNP9DJki7dWb8pCeMr4skpjaZuGr63F9",
  "key5": "5zdFptRnQnbhCc8yhjwdUDu3cypjEQRuEzANJvyVx3L3L5X4g7aHvw7nb8uXTnMvien6osyrfUSkHSFCFffDHEJZ",
  "key6": "3kBLzbCiRmSPSVp6qHaChC5AFiyVxk9RWSwr3b9CjrrJG9UhuRBXAwJCU7Rov4YzwmSoaiHAgSRcwezntDh198Pe",
  "key7": "QYfUrxEod1pugp3tvQoWbSa2h9TiRMWRjSFV1JxsTz8cZVsFJXHvh1raSwTJtDxT5kcHcPMQfHFyUSpQ6UPSbVr",
  "key8": "2UiX98BNbgrTWpDTDmFU78kp1j5YsZMUWZnEFCgLq4JAButnqLAzQ6zrkssJgkWGEz1E5cdixQDyzJcxyAd4D5kz",
  "key9": "5cPWU6HsRHPjzw69UfwdRpZe9dcvwevx5TgBoEv1mLGtctzi9FA9dGbMus8R7vYJrgr1WGNrrua3htCx5QCY6K95",
  "key10": "nn8nPp1TNs4bVtyR3HUdwjbPAL1pxEmFy5cH3goHrKVstcQKCCFzUJFuo8aqo8qKEnNSxa3oSHyXH9nzKGy2wF3",
  "key11": "3WW8VRtDqhRpLncRmugQRhs3Pio4ap3zU5sBe5SffGGEdUE1ZZEiYcZ79AMeyfWfobQaEaX8RDotzrSRM1DAKo96",
  "key12": "5rhaCrjxo3NbFtRnKhDrxLhT5W2SioCAcfZVs2Qfzw416QrXtmbTrcA1pg2JX7B1f56bETScHAjVZvpMHcmzVwzc",
  "key13": "KNMivZN53XZNoPVF9cm4unJAKqcKT1wmLAv6H6DcGW6pJdWdwojwgThabgNQLFNgYyjtZSHsjuxpoheFZXqfU1D",
  "key14": "Jm2ygXrLkgEwGVMiNUCUg5Hh5q3pZ3UZvZb4CGqawDksLXStHjSPq8BrUMZwHFj96AnswzbhDR9MK6TZBfoYzYM",
  "key15": "3vy2F7Tx6kZe2XVteLaqynQaF6gethtqFEKQtkCVN3L6TfwGyWRyhrnW4B4u8Thp9vsyHmRNTXrCLQ5Y2YhHa3Jq",
  "key16": "5QgVwP937Lsdp2hvxU8draZEcEfscDqmo68kQ3ni3Z2B3a91prNw8D4sCzjkqEFRPmpyr4K9FTPWXLw53ungyCHa",
  "key17": "4jRbiaMFeeuFRRgL56AEC1Q5ARJGSEuPKwiwV17Vw5ew9BzccvGJGHmvZN2kTsp1WLXajHuP221Mo9QVckmA2nhn",
  "key18": "NQU6j55Ygrpac7EerZMCnQMjViS9dU5LL77HnpjGsm2Zevg9XNSrMVonVFQZWFXmdN2E1K6YJkq7ciaSsfCgTDM",
  "key19": "3jpKiCV2XCZ7rByaDhucZUDkF6J1mDWmDe1A87gfs9LbpCjZ5tgZNP5KMBsJkDuee2nikUgTLhQGZbCyjWFpbDcr",
  "key20": "3ZXjyAZDdppi1NFYKekteTr5B13AD59YkypXsQw47aUwFPfwe1qZudacQv4CVqKSaoi8vFUDkkDxaF5VqLDenELF",
  "key21": "5CoKas7rK8GYVF9W2X8TABV6instJABhRzBKWoJBf8jXrazC1Tp7urrffzeNd7aAdMsAwcHaRX9yBW2TSriCkjC7",
  "key22": "4qwD5cf8NDHMfGWufL6PWnE9ZKmMMGNGb3KQWpWERfWuk7XUSMYpVcZetREyr8mg4DcMyP5mv8aj58nugMYyCJuc",
  "key23": "4ynebd2aL7ucDgvfD4jX89XZDKdVXsRbHmubheutDrdz5VffWSEF2N7qz4bXNHEZGV512on4iVHxpm8TVrt21Hrd",
  "key24": "2orr3FXHoeWs4aTiJDBGAHKZLNrKF1tnw4JPoHCYj8R7rtxsUGzh9Fw9wkTti3mVukgvTY2zq8N6471kTEXSidXa",
  "key25": "2eQ6DQ4QHJFptymjXm5th9wyiV8cgpzZTYYG3NwX9moTAhwLHK3dhnSfVN3iZGrtSL7zVAxgQTPy2rPZUBibgU4d",
  "key26": "3Jax5pNtrQ8q7pijjkwe5TgjQCCLEZB1bYwmjFyqZQM9XVNwnzLTGj3VYqVfBRjvRy7p33j7d4tnEQp99D8ytLST",
  "key27": "5LjyhjwoQpCcpQr9CH8FBGBw9nd6GhDSt6AJrbJmpq6nNF4cHZ3Xd1pD9QvuX29gCfAHMeiLTDi3UsMP5CtJ3LL2",
  "key28": "4wxREGP3Jh8CFSKwWB1i4sP2JqKxKrDz3BcE3o8cdRCcrJ5gMnXXv5wePdCxWpg98fB67QDxjtr51Qo19hadt471",
  "key29": "q8fusfWVFQJAAdHFrdThyAh99RFHd6FUJynK6TtY6VzEXnGM1H66jcUNFjCLNhmWkEM95ZGDCpsNx24HuBKPSSP",
  "key30": "5GWwqCyTn2peehd18cdY8kJWqmJJgMh3a2UQn4YV2ebMSV7j74usZVvMTXxUr9HZjxEd7odY77bcw4Lf4gW3amgf",
  "key31": "3q7w3B2xiq3SrC9o3p2mJSSijwruno8HSoKzUaFtmWjxtv8BHngJQWKBmdruCYgswQBuxyBLUf2w9N8BkcQAsPFr",
  "key32": "7DK2GDa87PL6efLm3HpgpZ4skcTbNJDcEaixzQNMoudjMaoLedQ7pVaQbV1tvErpXdrnDi7zNL98a2ZtsQaihmF",
  "key33": "2VcoACstBFafA8XwUY9nh48BsdEG4GnFwZYybRrVGLK9LF1NPXd2DJiefTessrp9DSa4NsPCjzcsNzZ2my9AcQiP",
  "key34": "5x7Wy6ThdCWT7mH3B4CLBpTsBvgZ9yamUv5yXWi5BJUzjtx8JZya6GLTQa4etYcdVdrZ4GTnS6KZtpCsJM6ZVHFH",
  "key35": "4EY774U5wMyQnnyo6eZEyQtp6G9KX2sziVRKaDnyPwbmfT6Yq4CVv6XqNEDvWRvpVsm8rcN3d3BqXZeoqqczjdor",
  "key36": "3YkC3WNzzrqTjwuEPWnw2uBdWAvKPbPEhvnx3FiE2zJz1scxtrpngfDoZF5y2Ro2uG8Nh1RjHs1cyeYsL8V7dwnb",
  "key37": "3cLBBRNYdZEfxwfYmysyjMrxjuTBFt9PECQxGgWkDoZQiG7LVVz2h3RJwjimR6G4SKa6D6PnTZwWPcWuBjSb6rPb",
  "key38": "3Ds2fRFKBn3m29TiGQjXzrrLJSNXcp7aBpugweBks73U5VPUj2dvCF6XuGGF1U6gk275JsntAwmFRtkRx3AdN6Yy",
  "key39": "4vTPBbmC4KtkyfCV3hWqz1w1X3LfFHsDFTF4pbxCjULy3BRj7mWCXj38CPNkcSksk51zeyWT6rzxrnFCtAmtc7be",
  "key40": "3oCD4xzGsLVf8QZa5SKzC9g5fSmVdWXgC1aigPiUeSYYHCsr1hQkcbRLQLVeN1jPq1ChWmRGJBawWgqS7SEixYaG",
  "key41": "vXYCQPrnsxLDKWbNHEtAwothTY7inkegLMpvSRq5oM76H1Hp8AJ6XNY6vozGz5T4ES3RXK9y7JrEGfwJZbU7EZw",
  "key42": "4UEyB3EN6KU3jJQBWrUjC6mpgT8bFkXfWojW38QPasALmgyeXpsWvj4ehNacrXqg8cJB45huMaiwfHXy6icTS1sG",
  "key43": "aY59beVr7pPgXEqyt6MYRvR1nnbbAokRLxiSaPDd81S1hC4zrgxa3NuJtSZ1r4WgeAQb8gdyASFwUna7DdHS3Kn",
  "key44": "2zGDGiN97VSwszCLH9tyaFyQFNGHAHRBTVJ6HoC9GG6ZUvqE7y5grwoK6VLS6d76yuQNWVV936nwUvHqbCuPNAxQ",
  "key45": "2ZUxrLPtHCNhRa8uFBzw9GbvfmkstG7GtnqMvN6hPAu4ADNLpk3Xrg6idKZFRfFaFRyCWwKrNYmjK14rB17GsAhJ",
  "key46": "5QYVgCEjuXoC3SMJrL5WRfZyhVhrewtQjonfCf2qR3fyMChZhtes2174Emk9Ce4Duq7dksxXztrByxXfB4tTdmKW",
  "key47": "2F8Q4kbYit1NrjZJSsFj3sfafv9CPHGaN77UZcg4Vk4J7pf9127Bo7C2o2LHUrCa4dvz5Pam6QhMSGvooQqWoZGt"
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
