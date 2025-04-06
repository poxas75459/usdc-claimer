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
    "3GmsZHkjhgY6jwKSLW7uZ6VZspATnaj8zZLYabecvfeZu5xDvh5QYSgQrZVq3rASCn8XTNasKdt1duHpTis7kdTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rNvUKrscTYyRAtopW9tzZEXkWkhfqkbcJHnGkPzQfLJYWi9ic3SoaL4DcrAcQpsamsa12wSAFdaXfHGJbv1Hcbg",
  "key1": "5himJ33U8DtonxHY2Rajt99ggVvW3xnyNjYJvji81LNPSoshJtFFb1sML1kKfsR4Pp2McYZjWuRDuydySHC9G4sy",
  "key2": "3MmWqHfeYyuEmYLuhUSWPsAJFTZ4azS86HSEdqiQYLbENViSPhhonXnZ5mqPyR5xFxr1uAbq1BwR5aSK5Fz42VbV",
  "key3": "5gq7cdAJJ7YcVePqtptR4TuJFz9RP2cpXHuSVygsM7NhGxnpvLjBnneF75oVECFH1nk9AsiwvLygDsPe7c9stuQp",
  "key4": "tG5XzKWc7BKEMC4QBK93EEUtvANVBQ6dqdinGe3xtyDc8Zfc2XAyLs6EpNNsTGeqDJkV78rnaADbTV7DFJ5hFT5",
  "key5": "2EMcBVHnUctTrZo9wvXKqKyzHY8PhXxp8AkaJc9atjmc8NZCP6wieYEhaNTV5Jj3hjGjGWM51Pdpt7nnt5cPKd4A",
  "key6": "4G6G3pYh1iQmzokSEDquKX4H7SxRD8NzqQbPKBYnoYwEsgX5mXXgZ5sUYfmp7uyYcfZBKWoBUH8fC6wFfjxiarzY",
  "key7": "dwo88gnkRm3H1qZMcQB9E4ooJ7FMcnxmywz7xS31dup3ACsxkhrDw2VsqLu2mLqBd6X3axaqz2Ru7s2Go6Rt14A",
  "key8": "2j1YAYtm5xARPZgNfrd1BsRugwrEHBD7h2jbNEE5cBCwgrqY4y7GtysY3Na1keufMZxyzwzGJa55hyqNNAF2SJ8B",
  "key9": "3GHBPhWG2YhuiPv5fKmD4Dy12dZvLr7vG6Ff3AMcPQpprCVKYgDc9LZQG9y154EpJTEkuH1A3gRmFMggjySLVoC2",
  "key10": "2P2wJjxe8RysyZpkvzfmPndZwWvaEMpuNN3BRuRaGoEfzLmVK3HbLeNudFur7ngfViQH25nJ1avvFv7LQVJChnpi",
  "key11": "4byB1hs8qj6GZupUwXh3rvpa71D2e8EzCNVHSr3LGRhMikwzZRWcNtfNa1rAR6FWzCyDg5SAbYiYx7EMWsj4N1VQ",
  "key12": "4F4pzhy9Zsqp9CXaS2LHu2JCBYQCpprHzqZTmjMHdFewC9qZ3jAKW1g4TTcp2bBnDaJxt5xFgK2Ag9mS9Dp2Bfto",
  "key13": "4oFepDEa3t4sWDofApcwgVpMgaaN1jN8m5h4e5pp7Xp3RvJdQdh3fyLUkFSbxLXLerydJEcCLhsbg6DjJqKbGcap",
  "key14": "4k84bGhiQvyACBi8s1RPndF4wNeTop2PqbjEqYsmmDuYrnszf2NoFU6AEuvMyXjF9K4waUykTyVz2rh5v3HZfwbc",
  "key15": "4oYC7fWmCgeH9s4cv59TLcwRQ49pWTdr7TLXYcGLvwrWR5siuueTkw3HktrAAPb6f9JJKvTad6EmHmDHhJWeviGV",
  "key16": "SkNfJPDXJbAPChCQJrj6snzD3d8rt1vbMmfSgMoQj76aqUZ9QrviAzeZVtgHFuybjsBZm4aLehLfE4Axp3T7G9M",
  "key17": "3y4XJYc2bcGaim1ckSKU9p6MQ2NAL7PUYwdJ2kFH9RoewyGFirLxKkxMFgEnzrSA4eXWedJM6h9xEfm4eKvaqCH1",
  "key18": "4Ln6RMUXJzFpDip5xvxDAVe69K99e9brafJdQUZ75G9ah7fnypqpMGWBsGinYWc5WuS6wfy8pjhYCfC1mLvfiYDP",
  "key19": "My6dwTPsuEP2NGkaZ3FZX69ssEeWfoCbbFetHUcaawjdZCEKjNXnVGUWHP6CLioHPvgn9DDWEWuFruEUDeCU1Ng",
  "key20": "4zYvTffQqLQ4KJYLv1vLw4C7Lyz6AB5jkC9bccYgSKqTNkA9hYuVHN2PCZEzmfeq7AcvUR4EtdYannPq72YoqAf5",
  "key21": "4dkNrCUA9XKbsSMEFZ9UUxGAiWHTMoKHVinoAx14NuHX7ZqtdZdHv6vDVmAbfQEu1KGhCgmE8ZTNL7udaM68gKF",
  "key22": "29uVjTeZctmgyP3z6mjUBaXG88abqwpjodB5vzCizcZqTd2rJS3bcfVjQpcnbB4TupcfAgKHiW9he5DqADRoq36Q",
  "key23": "YixCvhHb2C42kNSVZtLgvZQ8V7mWZkdGUjXEAQUBB1Zq2JaYXmCbU7vx6dKcLVTjBfAZUPhSBsTbkJaVYxC6aP8",
  "key24": "5s4hmxpTAYPVk29XNEsgjWjeCM1WssyuxLkPdaunk99RVvZwmyW4aizgiKTUKgdjdby2UPXA4B8jYE2Lztfh2xW1",
  "key25": "nVY1kar8GKALzRkE42Q1GEB68CjgztqkX1Q94R8JgPzgyE9wacXps1jHv3JUiKuqJgVXQstGEixhRh7MJAagJr7",
  "key26": "48xxGYpp257NBGJkDx4cJMRRaiA433W8ef3EQwB4yaPX9VrzRTH5zM9brifjmEfaTqbJ6FMonvMXy7CtfoNq8TZR",
  "key27": "32o2rTb6T4ThX2tPc4shiQep5UiiW6iRDy7Fw5cpJJLnNkEKmaR9GrHdJ4AffVkdpQ2QsYV6ntWnKBiKbDoY3i15",
  "key28": "5ffheSVDnxEg4hMQNd3Sj7z1QaxU83QDBwTfx6TywypQf9ry81fcFAR2qod63oYEdDKGF1pGsQVjey4GkPNrcBMe",
  "key29": "eXL5VRj5QMFCAWNWPb4AGy5KdGo1eWjKJAoq9ceVLRUNFbt1EW8LP7zVfyQXoKamvgp7TuqpD9oG15ceqaiqrE1",
  "key30": "z3NZfp9uP2QS9xzr5nDnvTcsAq1HFruPhfhJZ4Vmn3s5Gq6RYFpoMiqwEW6vbMVqw7QYAKa97uaqfDwCzRSgeRi",
  "key31": "4ZhybNCo2JEdxTo7JNUuPFgFJubFQSWFL3TqDmQmRRHBmiLLMCH7EP3ru5B3aqBdUb1cjsgiGxegVS7KucPZkyBR",
  "key32": "5TB2WM2H9j4yckKodtqqi3MejxYHKQJSRMgXNBQeTFGXkuFVVYPc7ahEjYAUmavJ8N3hp2wgre1uT2yYgLBuWuxH",
  "key33": "4L24DSfjLNCdNNcpJnPoanF6ZW282Lc6Xh55CvHR3A9NXwwdMt8wPJ5x88Ru1GWhiXVWnoz8wHT91UYsj9B4bpWu",
  "key34": "5fA3z6vCMNVfSuQM27EhYakecgMyvx63PuPVotANKw3ZNnxTx8CxFYpXfPGwkk7BbqQvudGYiW2n52TR1qZdQMpa",
  "key35": "32hNj77wpHYoaaqskq57ChwJRc67Ryg2PafrmfurWiAGC4u55QG82pdm4gF5A3awCE2YdAgqVqW1eD8eMTWjNnpo",
  "key36": "FMYgg6515GnsSoUWkCk8KeacHrnQ7jNTVWcEmmo4daBW2DyUnFLmuec6fhnaMKU9VhLNEgy1sVHe9kSaM1VKEm1",
  "key37": "5jFAVo6RjzNrPk9xhG8jySBrXwnB8D6oaVXRT8BcRfncYhCF4XVqTjmyKiwMbuicEYEZg2wUSCBNVCDdGVay2XNR",
  "key38": "3ZQhZgJo8M55QoZJm2BqxQkLSb8GHbhRuoHQSZGYT33fb77doFWh7bAzZNAeS1qwsLLPbJZX8Ttp2eGo7bz6Bhsu",
  "key39": "3AtJ7qoBGs4Dtdg8YtWnqN32eSrfMuzJ79qdUyXvRMS9XWKMWhNAKkQbVk7hYPTUKNjcyaWQGknE92cZCpm1ux1n",
  "key40": "Q1W1Pxr7Z6P8mDLtRosfZRnCX2ZvbcixdnVmp5UUYGJUsqrWsWJ6nUjEUu6SGhktLg9qX2JopCRJe5BDK5bWyDr",
  "key41": "3V125fxoouXTZHQHp4R2nc9JJmtv3gdsUqVSYBWupaJQqMAQQTSC73kCmiSBcNvxe85GcJyU5wyWrn51g9Gvq2AK",
  "key42": "eeEGhSNuZWeb86wcSGcekNg7nnCs5Y7ULTRztuKJbFVrK1zEazEMUf8WpK6hYrtHo52ZqkEC2tCRRPBoLrgWwGZ",
  "key43": "669wMrstAbNF9VJErXbtwGJUdPkaynsiDB63cr4dW7p2AjaUNUwvRoEYDkJMRX6Tgk9Jos8iPj6G9R9rPoNxL42E",
  "key44": "3Tk4gfktCwwwQiVMKdH5ETttnJb21SwML2mnLm44dgqwv3qE2rAv3VVPB1tQ5Ucreqeg3eqBGoBU3ECS9Hg4HLjk",
  "key45": "23QYiLpHeLmVdiZXomYy1whY4VWjZXnoMPXaxizCzwPZjpvipVPR4LFL4nB1Yd7fh2jCjYQYqho8ozDJVbJSr8k7",
  "key46": "2FY7FywaQpRFPgM7Lg8GD2GEFzgSYoDoMBypkQ1GirSD9EtbQRNDuPGKqfPzErANkzyKA2GkW3Uyv8C8DVMPG8Yh",
  "key47": "2HwR4yjgvuEpMeqe4n1FLD4kSMXiZpycSkqjUtZtUhMuL6gk5zvsmeWc9LhPvKtwNu9iJvLEeDtQeZw34w15Fd7s",
  "key48": "3q3vALJ6WLyier7EG3W6FxTyeZPKdcNJrKp119tRawLztXKaNqxjLmvEKBbYPFrGA4UK1VSZRt2NHEDanNWwkVJR",
  "key49": "3h2jB6Somo8okJ4cj2p1LuiaSUKKvGyXkQnHA14FawEdxtGPBi2ToysdaGstur7efJXkbyf52ytriVRJ9a6D36t8"
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
