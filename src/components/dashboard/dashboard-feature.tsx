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
    "5jfLAv3bvtyuhiEZ84fLzCWRi6UJetdgQhcC9hQSftdw5ocz9niYi4gECTHzFvVBaMrKJ3SBUuQZZYhmABBAScxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V41YSVBZ3pZEq8dpBrRCZXEzpF1oZwEXJXrTtS3oeZPJ75SWHZ2hvuYyCzJjRoyBMKF31X4Q6ucjcqQkayKXg9b",
  "key1": "3hG7pvEgvcYPKFn83JBU77tAuZYbK6p1FFe9WqZ2WR5TZM8ktjcGX6TJVwWroUSHUozDfv1t5LAY34LCkRy7ZeNe",
  "key2": "5n1oTTBbB8bs97BU6t1Jezeo7jEXtV9GoVe8KdLkukt5fSinttZ9SzsKewLrmoWbojJ5oLE2bvP6xmDaMLgpDWP2",
  "key3": "5q5okucVAQo7r3kJE6mvkdrjPce4LWcFnVmMy2kVeDtakWiS7JHgDVtzWsXjvnRRKX1yR19oWyZR9SMGzQCyi3Tm",
  "key4": "3qtkr9wKRDSuEMmeaTfT1MoRkFuhBNvHbyyoN5ZXpcTmXGKSRJfZBo8KZ21pz4DJyRJjhRetdXHTJJF31iz6hvav",
  "key5": "4qrJJiLfgjXqxTWbq95opAdF5iDKbsXKvrC6Sz3M1Wa76WMPgQ8KwsURkNLgCzg1zuJTTQovfFSssuehBKBGF3SD",
  "key6": "5k5hTtkoytpJsJ73FvpbVBfDWeFCnkAHFbo6biiFbS4CG65GkvKTE1RHsL5JfQ7iihMNats1R3m1BaZUC36S25JD",
  "key7": "mvjdzcs7gb79wmkSnQd1r4P97gY6hPpgT8jPnSLwXQH6WeFUgtb5K4PNrfJW4WYSbZxhu5WHGGCaDER6A7eQe33",
  "key8": "2XJMkEhsHsSqk8feGdsKEJ5H71vCnUyCJHSo5oZA776acPCiw4dRgj5hLGAuZkT2ajMBXUDkJyanurw5edpyk2HY",
  "key9": "5KhnoffkFh8iVDiCRAQLAh4jCyZV7sksjpoxB1mu1ETya4dgVXx6m2uXJzQQxSbL36qqTenknsH1WwbY3z4rAQ6n",
  "key10": "3kX9oWTVGR3kE1rP782UKqgS7gkJnvhbvYbrNYuyNvrQ5KoXFzKtohoWUiTX3bmdbW6Jh22uapx8AusnzaxD8huN",
  "key11": "saAhiiDawsfwUkTPj2JNqaU3MYABd6oPeZKLqAENQLkjcNu8TVxHcSj53DMf24zy3asfjQg4BbiPyvwUZuaHbU8",
  "key12": "VqEGqb38KeiKdDYGBxbHgMJBwyUpeENR6aaANfh2BAsUwBopXgPmZxRvyRthMFt4hfhDYzpFJJwQmYBtWQ4KWgV",
  "key13": "5xjeonS6azJVoaFhAtoVL3cNFZcFyLm6NmXMRcGY1f5d7EvDysntFU1h5Z5AxxU1oQ5u52JFfQGHxCKKSw63fQge",
  "key14": "62FUiyo7r8j3YhrbDAdjTQGcr8zvo2qcdASqdEsN894Y4mHws8cQaQR6542omyjno96XcYrMreTZceUtCPNei2yH",
  "key15": "2dPKWK1oLhV28K6RVcyf17BcSQmqkD5tfzYiDfpP8uTJUaFp2KEd9vxJTT8eY4fobwd8V63JSALDTuFqe2Nnbxr8",
  "key16": "x71CCxfJK3Sp6pqzQzFpG8GYmk5AgjDuwaeQc1iQCTDboFF9aLNV9sAvpTcDTE6DFPnqnRKAZ63rMi6uhbdEkUo",
  "key17": "42WXuvYzLcdbccsEd5orcKGDQJHpo3LkQkhKvmqoayiw84ZzYouaAFQkTDhbEzi2exB1EpS1hCT11XADQA9AtDRP",
  "key18": "5m63hDnukP8X1H7hz3pMq68TVsBtDjk6EQifPQUj4SkC5Vo97wbh8Lhy9NkiCjXoDzrTxmYQWrmbyqGsU3qgnNSy",
  "key19": "2qwzgWBsYWGh4KJpT1gydk6gc9Ui86qWGxYJBxJrNPNwYtkhTuBcoWXwYcYa7fyDovYxd8kYzazBxy8GmbFGmwgb",
  "key20": "46kUwiKUFZ3LoFUrJ6emCfW6H5LaJERkLwy84QRm9ZDjBaFF7wdQ9xymHgpz5eqsjFeriC3pCbMGds3UR784yfWP",
  "key21": "3ayB1jjAjiabUy5H2tE5MPtJGFxNct3SNt1JxPAJsmoL8ff7JzDqrd5Fgn9xk9uAEJTadFqV4y6QYMD6iBMLxpDE",
  "key22": "PVtENxnZStfnh1Pj1fa3vJMcScEMqNhTQ1WooSftTjh5B5GQ2dvxRxZEE3r6bWVfp7eDFTnhJeTQTwmLdoPYPsD",
  "key23": "4xJbe85ZCP2uME3taAeSb4AyCPrXgRBQKhB1zcqnShtZrok1p6WLvwLCv2cRi5uUEhjTBQwTzxRhg1T52atkFQ44",
  "key24": "3f4P5bHtmEq2aaTfSrFTVTn68TTWbwz3ugmFmqhfE88fdToj2KWG1pfbAY8k6BV8JYQN8yvaKKwtdPBVC2scSuAm",
  "key25": "4fSLfZjgGbZxLd46SkX3yWyKEMwspmrHo54JpaRFawFMf1ZC5DRjZS3Yk2iAmmEaXoqGFm7DzGUZtkzn8PD3wX9c",
  "key26": "6CSRsFgaCA2ADKMK5gxgqAvnPgfiYyevx8ibXHAt1esqCfAPu6LSgS7asUfSRL4mmN1kKyMcz2MdBJ5qjcvHrrj",
  "key27": "3ea6qgVy7bNRaiGqEfjVM7yTGmwATGG15uGUthF4uJP6ki8LJa4Brrtn6MpqgbwfGduZrxZPDju34UFtTmgFNzop",
  "key28": "4gqLGjjwTNvUkwhRDqBHTShMpVGrPCvZeQgxuXEDmMsWrVmKRKi25fxVXFK5iLaruoh4sLZMuqiBpuDX7s6wdAT9",
  "key29": "52jW4TdJfqVewhisVr4obtLMmFp2GhXPDRLAKFNi44kGxgWkC6uygfu2GbC5NnLG1o4rWRtUARvp43PPUnrpH2Xh",
  "key30": "4bHaDUZCi8iw5UKyX5PQtmemH57CCW2SAGhwTTuDACTxgfLx2Vs2WyY8HqGqMbUmDsd4UniMo7nENCHLU4FsEGJd",
  "key31": "3BPcN5vZLdKncrff7ZUHztVxVB2mWMCjcaEXXpX5maqCT3VhJyDbZ515n1yzFuhFjzJbFwFQt4juPk2eztYW88so",
  "key32": "5KCC5nG9fLzXwze5ieZR2erUJ4pxhBwJG48WA3ERCPXmzA95FUbWfrsv5BUhBGw3ffiYBt4eVzm9GAJjvkNvXk5H",
  "key33": "MY7pC9QcFMsJXNHHgy9fxhyV7VEcxDDWevps9iRAV6oPpAkijxE88WeZtfUfhK61UWXSxQ4pMGvdK2asnACRidA",
  "key34": "2ddeN5JuTueZ7u158yLBPwfBYEnu5MJJsH58Xg8wJG6SiDRC9Fme9P2zXj8CgfXf2euU7eeGw4xBuhFTZXa2ww8H",
  "key35": "3Vu3yxNJgdGXwDM1MLX1v2EDah6KpCrwUPUhPquQRJECpFPnKonN9Pwdod8kggNPqWB6XgmSZwFhkLnNXSpWaAYE",
  "key36": "4NjBM7yNApcSipKecmgh7zG7W2FY561eVj1UfZ2PonSnpWnaMUB3b8N8BMA2fLUxLa1hKWWUDZ7YboSSamqiVV7w",
  "key37": "5eqAtsDwfBKmF7eQaQ7ZyEg5APSjQFv9kUhSXZyDafQwCkkacCPUJsKYnBeqfpNBqTB5eZTHnLCjwJWZSD3uT4iM",
  "key38": "3HRodRT7FSFV9qzjzCnzgaLtMFbv6JQ3jmb9djfw3v1B72f4USpLMbP7cTG5ARhmP8CpmHGgAs5WYgiUFTauaam8",
  "key39": "3xBXToQ6Fajxxb4nGiw2JLw7zG3KAYPj4NBzrpK9ozW81PaSiPKc7qYAPsk61q9ZrmzVsZZPPUygo1imXisWJ729"
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
