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
    "3gXdEvsw8ZixeQXLabrMzkrpSuke6zWgkHmBBsxUQjsPaZSMQV51tDGFbp7bLHmhRKujSmGDNyLHyE3nzDL8QDsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UTyVfWWPeDNo3kTv6qyEEeBueuZM2MTQ1pQ6ZJwSgZyzog48VJ2t4moEyWvNLCxUFqeFi2GTmaUxcV8UUy4sqr9",
  "key1": "5HkiAxwZJVhnGUmAnTQU2osRoLuwcKkvHwPcQivjKDWHcgMCFZqnCbyTmGFdqQZ8yGYzHD4zZ7qNuDYDxkzxpggw",
  "key2": "46BFCLEwxFDw1NZ51njxjzFai888bwmAqagaGLb6H9vPbHdSDARwaoQmkzy4rU6M57LZSdqKztDDx7qzJ5EsxCQ3",
  "key3": "oK7V9uVUnKyGdK46tajsEKSTYw9XStX6JZu7YsBr2ieKaYZn7YEZmkXuX1XuDmxAjMVSHgztyF79DMF88UZZbxd",
  "key4": "2Sm1fxGxEm6ibbdZGamEiG2HsHuWsPd11BTwv4axYmHnREEojmaQ7k71HzyTghj1ZZpUWxA9BYvHTWB5kDdmkgHF",
  "key5": "3zzzg9j1Qfxjr2NdpGgdbr1b87AHVqyK4VEnvGyaRFbwh76bSsgPUTFSrNLNayvS24iEemvoorq8reuAxXtt8aiL",
  "key6": "5njJVDDHyHag8UYYD8E8pL3UrfWpw1HdpwtDo8AU5vAqVfS9eXRjsPEDN5J3mFpEtpP6sE2CN71GAj7TwDvNzLvS",
  "key7": "2smQMCXq7YEqcgX6uU53u56WvYitApKuRA8AK9X8Fq2PycgJKPgy6bxHainow1ckctrB7e6ULN9YDQyDgkc3vDdh",
  "key8": "3fxAmzP7sr51aKwzX8TahtDQK9cweWonjCn2bRRT4mP5DiiBauFuXa4LnjURjWpHCGCUvnuM9F9ZVq4nFS63iGVr",
  "key9": "3AXdFzGWT6ujYgyLmVM4Tgt2YUhATjcjR9a3vkhBgzGh1mtD9ShxXJm6nyHqWCg92Be9Ag5htLW7aDw3khXYxr8J",
  "key10": "4UL67QNJFUwJnUDh3TW5v48LM6n71Keaf6zLK7nAjbNKBKTa3gyfWmnXBi1krPnSWEnCZj2TX3CZagdioicATBx3",
  "key11": "3c2m4vwoRmGNaQP4tNykujoCgHggwypuPBc2tyvBCuE4c4fQUzijbMYW7bVpG8Uym8bjMg6CMGhgxqGLszeJ4bDP",
  "key12": "4rGRvbv6B4n4KC2eY92j45nBqB83LtrnWKbLcBjJXqttqyWEwHMMsDGTDoBRRPnosiJQL8e8BRBacM5Tqzx8CuFd",
  "key13": "iQdCjBQeAcxE8wYBLrgDtFUwWnimy4hU1vV8CYdrQgGS1wiUrXnteZUan6ukfkH6FUoTEJ69PRzAnQf2ULv394N",
  "key14": "3cV7no68hpqpfkiE7Wu4mZaDzwr7Rk5uGHcvQGmAvd4a3nR5JQsgPS27Q3GfhoFwRS2MKuVUANFkvc2ACXdPFaQg",
  "key15": "2eskx9dHGhVvk2vuKb8iPagmMyK8QUYSc1oKZDsu7ALARksETvn9hJfQ1fAK27w5Poaondj1BiBT3xbby8T7fyCi",
  "key16": "2KuC67dbLtgjc2K2oQb5H5qRn3Cwfr6oMQWRpsyYH7xschDqZBooTrdp3kYNyU45mzvzSHKec6zD5EdfihvhUpvg",
  "key17": "38mtpMWch4qHsRQzqdMes3Ysk1Xy3AzpBKhqKwA77TxNyjHYcKchp77FtvrWLfCQ77ssVtexiBHfAC2iFfKjTxsW",
  "key18": "7D5FosvJZLqSKrntJx5ys6gDCXwz8APBtSJbQcZr8MsSRjacEoigieBSFTZhvcwh9v1Y26uheiW42otQGuk88HT",
  "key19": "4TNNhjCXH8grFFqZMHkr5mBYEcxadXWoUyRz3FfjYj7uUhs4VoQ2T9YEhXf3hjxFTkyuq14b5A429LyUtpQHQCpZ",
  "key20": "4kTHHRCLtUwC17m3quj4SEhVZie2DFcWVp7yP8ETNDvWhNGPpvGnYDnVLSpvsY6nvxxZ35jFrnjpdZQVBt1LfA5F",
  "key21": "3LcjcKo43R8gR3kddoU9YMHqB3n8zBgdu24MnmrEXdjPfhkVMDUuHuT8ZbUG7WUMPrfQniEqDQSv8NuYBVdNCi9Z",
  "key22": "5kZ6GG76shbz15vxv7vSwf2DcHYHqCDPKsxgjyyW7KogsBBTiRfeuNcjAZCtfQdyoFTgJEEjeuD9HvkaoeNzUE5U",
  "key23": "8fNeQ2LMtzkNEK38hEUchAsUCRtAGxNriJFqtdeJH3xUPM4ya2Ef6pLjkVfrGURC35kpZzcZKphM9KYBzyCFwby",
  "key24": "5bni2AszJah2zSeUiumNodtyKjEzGRBQrzHTCD4grjLUmSjdkT37W3ft4aFaGyvaX51jUbh3Q65hRuGdzCrj1Uwu",
  "key25": "5UJCHgnjVtSMi8Z5Q8MzEYrnyyTHaYrw6iRamyFUUCv2VNXrtrLw9WSnLCB25Z9ohuSmtJzi6NoQ74QT1T4znVUQ",
  "key26": "4afJ7PQe6Gw2CjiqkD4thHxGrMeQjUKQPGR966oH84ZpMfE9ucgAVrgtKzv2WBRMuvaVV9Lazyc9mLGtxUnv8WsL",
  "key27": "vsywkW6sa2ndAKUvP3n79Md3uxnzyYMUwZgDRZp5BZTs56Af6rGQ4DtF75LiyLNQLhwmSc4gPLiXAvzSWjjixnX",
  "key28": "4dfYzpkP4F9YoE3SouM25qB7cgKQtxU6Mo5GwEBQYx5ENdbw4frQrTh9HW4wmBdxuk4U4ZJeYEwmZqxAykkaEjUb",
  "key29": "3RxgdbB4TUVT4dmZou95WRYAsUJPyjmmoviF7HdHEdRvzUHdhGrDko2z3oFFTSCnL8jRiwVZFRmeweLTVrFkKZgF",
  "key30": "vQzFGris8UDeammsYBpZoteP7eQsNtVWK4mcaLNoP1nZ9Xre6mpVgdfsQT3yrTjyL2q3JhXkuQ7qXRud9scrjZy",
  "key31": "3BSmWGzL4qeFhFcYt6zyh342Hx9gzfuJCbfKony2yA9zF88RZnTjuJqUS4smLCs6kREuLauhAWVJHoM4caP1MPfP",
  "key32": "39Bo6GSMZ9H4WLDJkAZ9adkPaGB1bzuw77LhbigiRgn4rcWm4PAyk7Md83Ew8GEBPiHUwr3Qaha8TcccjZMZMznQ",
  "key33": "4TsXSwEKpKazusbRgkdawa3bwhvR2N3moh3DGqJjAq6Vy8ND3qbHL795gu1A6YG4yU6BdnXccVtKZmWxykNtpwJ2",
  "key34": "2C2wUFZAkXXHXbVqNapYB7LzWRR5bu9RHCHVY7YJ8MfRSjt6Y8jSvXY4L7PWQzFgdfJYBijAF9LQvsxwZPwFGRCB",
  "key35": "2CD5oWfwxbgoVrW5Nvy1J4uumkJZqDcqvwrThS8df9gbH1txbG6wkBDky8qf1fP9gCFrNqEQ2P8gzMhbrJQ24S1q",
  "key36": "4wyNxj2RrMGPP8D8FQi1KUsyX8M2hLqgyTsncJNfaxbuTKpq9nBnDbsVJcdF6NSJpGZ9joiwaeymKjEm9oAt8p9d",
  "key37": "53akFwiWQbndsqgvucgLpwUWPfvngS3HCfknwj3f3mByewARXwRr4CiLwKVBSNv29Nx6rwH7H5VFBDHvhHp96ZdT",
  "key38": "4Nc6vqxWKTVqyLoqCXYxFKr4iLrG7VPkfCqr2ntxmBxx5wyDPrknm67Rio7PEtAzFXPk2Gxd9jUf3HJvh1oKRuXx",
  "key39": "41vWYzzqwUkLtHFa9DJVwpEenYLrZEDzwj3gY76c8tbmiUYbQ5fXwrVLqURD346UHXPKwrH7anuqX5BLvvV5FLN",
  "key40": "4okK7cxJSkg6rfxAAgd3zTjAotWYU29vRbrgT8UDsFmsnBh776hQbYaGfpPSi7j3fieiS5kTvJ4MoEVW5Sgf6L5v",
  "key41": "sCVYjgUnnSfzfBY6KPnCjxUhkpJ81WmkYipQcZfCYsLLuBFuUaxJC9WMeuDbo86YhhHEoHHZuRdJU142NGPTesh",
  "key42": "4nC6MVzksY9CMpU81hHo8XfZmbHZNyuAAtddNgs17mFStezvCTnnomrreGssy4QKsTDp6W1PsgQAw8oQdcLN5GsK",
  "key43": "5aJPizibTwrkUrmwTYhkkH8ou5H8RxKq6wnuAtFgoSsRAPBFcaSwzBAMqWVS33ivdJMHfS6pEGNbdh6kxPL3BWmK",
  "key44": "pvGucDbrz3zZH7Pcd4C4YbZKbMFAKp9mGpgwYoF8aL34e32Z9yDLe9DpFhaGz7PYoqQYdw6RrFsa418ssXeySup"
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
