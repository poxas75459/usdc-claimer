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
    "4GtXqZwnPfyChGiKyK9VWWunQYZxhDtGrbjpie8okzoSBjwSysa1Xm9DWcjyvesXdWqiNbVvm9UcKoU8U6dPWFJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NEA27VFTC4wTGGQdn4TUYcHo9wAzdJUXd6co5wkLoqwhqMxWsBdw1nGx4A5hyybW6JwmuHk8vg7MdQKYxPZtsig",
  "key1": "3CU2fg84vCiDpd5YQvqYK8VZeMLMKz1ZwXp6nXkLydn2B7yKUt95Twoy35fgzvkzWyn7sYcJLBon2rLNfAKXC9Mb",
  "key2": "3fstPPYy8BQihmHMzGHaVrJ8WrsdCvAd6RbxQhZ3DAizCg9AV96F1pAtVPitjaoXeoZLGN9SMbxEyYtwvvvLesHP",
  "key3": "4dvAx3XkuWzmehRC4nAjUVoAQ2xnpejdeK7DGsM6KUhgnGWzUPfJtSQDFGdqbiGCXXugUCU4FdSxFX6u58VcZ7zZ",
  "key4": "23NwD12RETyNZnFgRqKoYWL1ES8PVodC9KhAJt5hi8XEobvx1VJeNJdDVDR4zHrEseRFV6KgZ48U2wp6ycm8MUTs",
  "key5": "51rWvQTwBpfdX8QKUwPZtD313XqAKXPED4HQqcxeEB8A1cQVvEB2wrPfTamYv4hThsz6r3Vqr47NtSg6ao3MQiU9",
  "key6": "3kbNxBk2nfKQ4A2LR9PdHyWFhnoHoM415FAqMzBbtCMXYS9GmYkhs9W1o7N5mcGBmGoeRmCHbEKjhr4myMFsbvm5",
  "key7": "5fisHQ4sefCTa7oBLAqmfAT4Hg5RcmQjZYQhwHq6GM5XnKDUFQC3KdxUye7PbyaJcZaZ3e9vXCHLwz7WVqkuNzjS",
  "key8": "5gCdFijBYdLWNBByv6uhnRSgbqctpgnSereHHE78ouzvcwvCfqGGqY31mGuTgaaRddxg4kAaVVXShpX8AFcghiXo",
  "key9": "339ptwJq3Sr2TD88867L6udNcq1bNWngNtDxtY5BT4DQP3jZUqavpEm2NuCXzP9zSuLA4kx1aQrKdsyMbw7d7Lfb",
  "key10": "498hVUCkTi2fpKkfVKdTGt7jwkuCotNG6f6ZM2iipKXfVAfXaw3jgQCZjuSTpjoZX4eKcVCWfwJyEcDmu9uHmh5",
  "key11": "2pV39rt8pEC5gRH8GjVvz3GzBkB7Yp3higLxE6SgAizDUvN8xUhctTfUokWW9tymF5BELBWWqEg3mCa9KzRDae4W",
  "key12": "2eZ5GimZuqKKQfeMw91pMhHUXr9VDNA4tyfG5xNryS9Y18KW5L7hedrQp7Y4LxLBkLbyZiTr6G2dnBQXvXtkavm7",
  "key13": "2QAZfkVtNNWp7MnSfP84V1Uc1Xt3cb7rLGoCJx2ckWj5vqtF12jF6HkujUByUq9WoJFiCKzazfB8aJfJzifZqMvm",
  "key14": "5bzHd1a53xVYDEaDWzM7fDmW2J4t4R8cPvY65QuPJGB7JrJHQ9mPkav2CBwHnsZ7vvpurWELozWiXagjbpYERwsw",
  "key15": "4v1R14wsz627L6qXD33G2UFejjEPwHmDNDHXfDRbTw5FxiKQbTCZYGSW4k9cg5N6kFrRZYZXzdq2C1tPsr7MV6VK",
  "key16": "48fH7czDPdhpk9CbjeS3ggMri8dVzDebGygXiJGYX8it8MMwKxtWP3Vbq4xy6tS8oK9oZeEEuuaw1hoJ3UUUsV54",
  "key17": "5q2VhDXJGyKcnysCKkDMfwsqqCfVvmN17qmGD4zfU8eUYYrVj15HPqfY43VoueeVLMSvWrCQN53PH1FeQKPnGkw9",
  "key18": "4EdmzEbpcWGy7BgjTNJSutFQ4y6s7p66ukTYE6FGi5nyQavzxrBAnQrVGKEfzuPbyBXmaWPb6EA2BS31T3Ut9sTV",
  "key19": "2CjdVH4vH3CuTza5A9ycJFuVJMMqAvosTpb2eCa1LAsR9C5VYcvVn9AcfkPXcBqeLjmFTPHpZb5asXCrKVvEAYtz",
  "key20": "4GRrqYWx7JoAkWQKtDqCSVqayhCuRQLCELoUU8RfmhbE4pWep62Xo5fTDjTB2AoFUjqw3W8Dnp2u2hN5YP82e8WM",
  "key21": "4XdWufA9z3wZueUa34KydwfZTYczpTExL6icX6pkNTVjyaFdHSY2nCZ6Az4wa6SzMW5jgLhSgeuyrs1izZoHzv4v",
  "key22": "Pdtoy94aLEAfucKDEeqR5mL1osAVRX5ECM4vCVXCAEZFeViT9FoUJHoKSUxeUifurgkGGtihE1KPTRCtjfbkXwA",
  "key23": "5KdQP5ijCQ6YH2L2PAopED77Ao98rEPzGnF2cKkLiNiEHPLYc15bZTk5EvaSUcbag2n45amm9fRL73KiTqSsWwMg",
  "key24": "2GSNn15krP8vZs5GaQsbReLwWQZ5PUJP513W9TZBfcNZGVxiMvL3YBMRDWDpBcBgBi1hV67S5rgMHcf8QYukqPfv",
  "key25": "5ZwfcQA4vmFra3MEuzg6SLLviV4zh67zCyUkph8UMzpCcGk6WpVpcMn3bm3gzsj7xNCjpgbEmxNZzwdTDg8C5gLM",
  "key26": "2feTv489DVPEUxKvdtXqESiimn8aQ4eZbUvz518id9gM9qjpe18DNcqD3EGpuSu1KGXS5vRa8ixhVSVEt9kX1jtV",
  "key27": "8w59qf6fS754RY3Mrc8Ce2q2hv8VBtZeRimeRSYBWZGq4DF82Ya2charkKrCnVn4ffUX4R24YfWSxEdBcJ1spJf",
  "key28": "im5zG9stnq1CwuPUkAK74ish7rdfThndMdRBpLgsKKBfwjenLAvtaydztNNeFFiCabVwn16ZeN7ad3XUfG7ntcM",
  "key29": "Ys2ZiwyvdwHcQ8FbkBt1FPfBzAAp7wa1P1H43ekcfxrcoP7P67f2VXkSYC852udkuB4ys3SngwHTmj2RVDXdd3D",
  "key30": "kYk58MgtuL82oaEhGC68yqAWU6i3ZUC2iSFe531RMqifduKGmBcfUz3ah3oo9CQKA3Uyz5Rw9Hma3VGEinwG2mM",
  "key31": "3W2erbPAHYdcz6zd2HCXiZ6qUyw54cQCNx41CPRT2WpoZEbTbaSGV4nq4YJZZwXa3dfPmiYKvvZ6UoYMBu4DK6D9",
  "key32": "2quYPDuFSKggZZCbkS3AXhu6pCtr8VYfyJvypMoJfPNxYYqEqPbxuUb1nHtVUAG5PgsHwib84oe9iAghsriBEBUa",
  "key33": "3FjJ7miWe8sw8RNEAWW9UW4rCGFcApshmQGhQnUwwFNueYF7DBP8Rjs2VZibzb6XqwsVgrSzxz5BFLBvPWgijHo2",
  "key34": "YQPNGU7HboDKuU9MtfSjWpuWvVRDdVJ68Z6SJA6NUF58Q8vxCcfjx1jmHvvMM1sogFqzJhmYfa25BkD3vBFqYmW",
  "key35": "3amXWZqtCQS8CFbrRL5am2gHPCxjV6hKixDUqUrTkddkVk4hqfpA71Zbai1yt6XVGFWTaScH7E6Sh9fWCtHwUM72",
  "key36": "4qybFxoHbTnmkHarL7LtDxwZGDuw2PRpi43M8bGUkXPgpPngSJBgex7qFL84ereS3QdNXMqf4wsDjzTjMBRt4LtL",
  "key37": "2rsyCHqMtVEKFiNcYt2tkoPyqVyJMysniSrQqLQiE5xBeivNHCsPNA3LxA2f2vfQXYWjTpdvvKntA2sQfEsK9kAk",
  "key38": "CFJcBx2w36UvjsfUVHT49P3Rg9GzbyugEBsyWPhqBZnV1rRmZ7Re8xwg7aNdziFs9z7eCb64z3QiErY4gjEzvzh",
  "key39": "M9NTNu9Z1EEUEa195Y7352GgLtC7MD9QhM7B6ivj4VCCRHJ1K6YXFn5xzcM7DJvm52X1w9NhWnEJnnThr39NkmQ",
  "key40": "5XiCiWVDByHYkLZKFUVWQQqjjy9s4ArD1t3jJyb5qYTBmgh3p7eiGoaiShWiGNjhNuZGZUnkd8LNQPcFX5GstETc",
  "key41": "2T4kCbuFh4AcYLD5DbyDGehrszdamwvufJod6fnxrAeGbTsmJq2vZfaKWWSmCBTrNYJfzVfCL3rgFB6QpPQbfSNB",
  "key42": "54HkxAtCbJKBQKy3AJfspNBse7hLHG8hhWi3TAd2jpx295HkvB2EbPEbKicx4WkqxZLs6WjYJk7Qa8onwWhoZVq3",
  "key43": "EBG2B55U7ZD7pz8qLHfbmFX2Y2Zf848D1GmcrxhZJXAfSLS5q2nwr6R2fkPMTczHpxDsvKitZa5D3F1cee38yvW",
  "key44": "5GpbMdFUtfiJVEWAqFmLgjH1ki2k2YEPae3vLk8MDwje9LERyfLh1zxEdZH7F9JzF7afvBt4H2iSWFoZF4arLNM3",
  "key45": "p8Ae73gjvtroHVEerbwv166gW3yaKwPHJXwMzpwVDkEUonY5o689F9EEZL1axBbpN8sEBr9AgjF536JxQp9xBaq",
  "key46": "42qdJtJbsbrYsEFpT22X5Yh7htJVqMsV2Tied3cqvP1H467apeQtmutUYbbYbp8ZND1ehtY94XnTHsr6urcz1zND"
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
