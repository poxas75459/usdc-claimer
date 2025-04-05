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
    "4Gqdx6dRxjNLDRcFPduPx1MMcJjUuVNh4pL1W6prSMaQWgnfLseH8Vjc5zGPLg1XsnUJM4wQr8H84BBQe3YAAQcX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dnkznFnXopAX6TDkZzVSnjdudkJgyW2fkHMLvYJYvGReE8RYjEHMFb7h3fwaPYixwDucyyA1goae39cLAgfAmdh",
  "key1": "EVmdBnwo7VHgz7t8oAmr47cntcKeYzQ4pZSk4z7jV62nPLj7faZeiDiax5u17g7nmMsUWrXNriiQECjcY3bjySy",
  "key2": "3mSdyn88Qqkqc3kKrRxU574utd8HBGECfFEweUUs42EQ1RBv2dQuExtB1Cnd68pbKN3Vavgd6n2bki3gsJsyfuZK",
  "key3": "wRFwdE2jypUX1QYw9nZwpHJwHXQEhPEFuyfum3ZvRV6yoLZoXPHNhfkswjBwgQ8jvFi4YcaJoLJBzynPR9Rd77Y",
  "key4": "2MKDvcWMWTp5z2mHJuu9u6ZjBAS9Kk1wg8KxBoXCpSgHfT1hrMSVt8EAoXfPXjLJFUxg8iejVPUJ9Kn9SU5BorDo",
  "key5": "5VxF5J77jd9YTF23t1yfakNwKqF5ax1pwFqizXCu1txjaSuRmQngREpksxtUCrzF9uAmGBnAT7hXQYqRR4JG5i5r",
  "key6": "4NMaPwPSBVqV1R1vfxLNrcikbV56Zq3Caj1Mrx9E71YoK7cdfaUqoLwzztzrM6RmJezQNKGh7L5XNctGZTozaKA6",
  "key7": "3zHsvgAzjFqv5QRWL9DQb3eiqUeS1gJRi1NAWMnjoRGFxEev4g95Lj6ppv6cbksvSG7vfunLCFhdh2FMk9tiQNE9",
  "key8": "D8swGrNL3cGyZh5f928zkkuFenDcjDikyQATgBgHysELDVKV3dC5YAMjdp9vG9bFUHALfFiitaMiJkiYwQ2fbe8",
  "key9": "2izPKZTKrRdphuyaDjhJYctVgfVKM4jW8kwk48fGuimEnKBe82LT5AtN7fGiuiAyLANJhGD5i4MYm5HS9ZBv1Fse",
  "key10": "JMELho7aAYJQ4x4x4Z9Ubx8u8nHhqTbKZzq7SaMvzvbjSyGhMWwcTYmMazHcftxbotoVfDQPy9pNvwNJ9EXYRtX",
  "key11": "5GCNoxEEbv7W43oxHMdtsMaK9iaTpUA7gxQo3umn87zhVcNjDpAH81Ee7qehvioxVt8ZQAPeupsAvVkToNm9JFn3",
  "key12": "5pPgXwYT5x9Z2iZn9QQn2iCAdwjpcxhH9HDP5ei3EHip2zsnQLvENsDnZrpqXWqEBC9LjwK6G2cCG6Vajm7gEFgL",
  "key13": "Kcz8GguceZLzAanxzoAiUGodUBBQAj6oRwuqZLHA2zheV4mqChnqDmXFZfr7U3gAVqoE4ph4VLWMJpZWc1FohUB",
  "key14": "2EM4VXbJNihDGB8XZiUkjtaVtzBr99eSVyUCnx24w9d1hKLb15jYQabmpHrqk47dcqeknvNfUtzxoqrmrhFERoaY",
  "key15": "3v3xPLAMMaXQcfNHpnZrJ2PYiC3cLCpouq3MhHA6DX47AjwnyA61KQVwLf1323Rx4r6eXNvxSmWatC8PkewbihSb",
  "key16": "4352bSuKLqyJqKnYzNRB3qTzoJNKF4jidrwLFtw2HmTeCVAoCHrnccFw38hbE88nurPvZnXyNDi8Hp8N7W6tmfi6",
  "key17": "dyU9p1Cr6EbE9RGLZRSiispKnyTh9tReoqWYHpL4gzS5J3sCVci9KzSfP65KF2YBoktSvwYoNqVEbQKSrb1XfkD",
  "key18": "2rFv42weiJcGKuvJHGfGKMPDjrW5xea3Tp9eRxBnTjgfxjMc2QvUuJNH6vnWYRALjL3AEaUyU7V2TDQv4uHkbV9F",
  "key19": "PgewBo9D3GVdZ1YpTzcQd1xQMvSNUVNf92e4eoqkSK7Ajr5ngQDdpAdeFrus3iqdsFDWd6QndFVbCEJPTsZWBqb",
  "key20": "4CDF7XTKSDss1AtXeD7geqWDkFLsrtp9svTS4siMjuDT8PoqxZZezUGTctDkduvoshBtZzcjvLCM9wgPWxyqbedp",
  "key21": "TYvLFi1Nsrhp4neG926JMUbJ3vvpk76SLAag6wuJetZTNXjB3sJ3ATMBhPKgpaGr84sLgayBRG3j3n7jnYoTepd",
  "key22": "3RmEN8gCnmNWUt6qjvkkMUYznKreS2zyM6ar78mjPFVH3eFYWzHeDfHMmqHzt7sRRCNMusGsutDHss9MXF87dUDk",
  "key23": "4PXzTSfUShVXrkoUagsCqwBhjPqjvZZDbwcs174FobsMXw3VRaMjNcrKE1uGryVfJr9W2vRAotcMwrEH52HYxsFH",
  "key24": "GqdkUVq7f9VTSZtdoa2PWwpVWdF4AuscADTHmCDceKjjwmVmkUnwNGkAWNvkbQUThoreFw357dtEedxBskUEiQW",
  "key25": "421t4Z8we4YhfT5uRX9tar1A3218pkmWESMzF35Jb2j4vj6fZhx27UPi82Lth1gUEFGPBr8BZJKBew2HDG1vWGT4",
  "key26": "fK1ZUCPyGFBqDKyVbQEaGPFKHqYSsjK3KS1cGUjhwrTZ5UMD1B1qooqNuVd94KeDxxvffZcyNreguedSAFsQHYL",
  "key27": "5xzGufiQeKhDDe4LZBqeqqNYUMBB3WqR7vjjUxWme1L6xzFtjuKpGmVpVN24nQ2DYpfNHFijst24tYkzTzBLrqHk",
  "key28": "5v1gDnf5L8a6GDkqjLFyic4xTzsFTbemGBqKDVZuufanXASCFK9WYavJ95eW4R73iUM4ovwgWn7psYZP91joy3iW",
  "key29": "3SsMcNCqgXXNK5KeWrSnhDLh4KFHYBEDCjh7FoxHjyF4c9G2gnyqu7k9QPVb3eDYH68VvPbBDe6qTRyJtpnpCdMV",
  "key30": "5gvGt82Gy2EeFJwCX47AVwHug6KeiSof4spqNf8hVMep9ses2yQDGvnwvWJCcgoV5jcBUpt9hv9qEbTAfbAf2f1f",
  "key31": "4P3W2z87vGJ44HNe6NRW9uwXBcwQKcdTpkAxVX56d3n7SK2EMDbCiFbzNiPx6Z1y9xRwxPi7KdRivmzPU6avhfpK",
  "key32": "37FsgpPM6Mr1CiV34tj3B1y9qzpoKBtBfNqA1d2WYtVRjrZkzMGCqrURMGLAENBJm8bQPuJWDhh5G8Ztx6wYHt3U",
  "key33": "E7bdSnpdQeV1ksvqYwyQVCnYTFWSAgbFFK3eADLqDth31Yrzk3ajE6Qp3B8xeeipLirwUzm6d2Ye9S48TVpcX4R",
  "key34": "22Wk5d518Mr7iznxVh6vjtvTfZ4zy1iSHwywbaJPDacNnLwMfQ6VwyNZT59VXK5KBfYBtZV3yXAuambB24yGucXc",
  "key35": "5aUKsDTMXHvL3Zxjso4ahhX6e3u88DxXnp7PAudMQowFJJKMaFD2Rawvc8UogHm6cpFqSeNCgx8c3pnzb8ejovjP",
  "key36": "3cDk1hcy3tzT9cWuQd6cQdA7h4AXwBi6B54tLhotxD3VW4i4uwHuWVLdHDjTHUAhPpHToBUzgR2eSMALLqG8EEfr",
  "key37": "Y8B1n58r2LBqcycBLF5656YoBZoMsovnracsebS7oLwdzvrprMDxRNtrbYpc1XdvmnCD5F5HGXzdi6eKtmTwrtg",
  "key38": "2QhM37XMmSces6Rc2bZ4SxnZfFi9pLi11JsATPB18sRbDZPxroY1Hd27uiihUo3sDPjUxCfbo3mrmbvkMaoUv9Pe",
  "key39": "5a5z3jt9w3GtM2ssXWh7CEPGZoXDtTiA5e3cwyADNWBsHW27DqiUzy2qSiaZgL78gHEtqrtSJHD9VnH3iauKd2w7",
  "key40": "5Dc3SjkYZBXsP4XsdN8JJdFdMg32oNzsxvNmtMyEk7okS8EFDdAviShug9aeunknRhWLESqVkV4CsKAyM1JGX6Pi",
  "key41": "21XqGPcHfnJx9rGYFA5eZYDHSMKhQ44ePEhK3qpDHWhJxjJET7Ekgqfx1CLXMtxqnGXH8wCfj3HpKXfcSYbt6z4D",
  "key42": "3mriLzq4GoYrNrKUdmjf8HPPmef9PRqv7wLc1wNA7zXhiSXrMzkcgfhuste71xmvfZ1bTPKtSrhQJkm1NqA9iDeR",
  "key43": "3KbWpMuSMpP9DVrY1JqgAgkL6FDzohXEsudHvRh3CgJZkgXka7AzcpQxDGFCBe9nzAig9wTvvidweAudsL7bGU6D",
  "key44": "2steRKTGsJtPPdkTbZnNvg3ze2roDup3WfB2HSVWHoQbabfvgTJbcMLVrmuugqZB3BcH595LkXtVdGPGNBYATn8h"
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
