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
    "eqJcqQxs2WNjsMw3TvAqWMApg3SM5MzG5yXXwSudaP2maQ1xexwJinR41fSRpLkJpxajxchwuo3egpQi18mWkhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dYD2tZrz4cTGvsZ2qybk8KQvCunwxGU7u7gD7PvTtwdbPkCKkQaTmhdPQhgejnzozH7uCfs4tEKNJ73FdDEkBC6",
  "key1": "5qzqFbYp4gUuTp3ZDxsERwAFM1jvHcjtLy6uUjeXRREfRogTY3U6MGFkUU113TPNXVS5YTZPfSiV3hwfGNNXJ4i5",
  "key2": "2LiABim4a3afMq7dSdab4WeVVvcvvN7cxV4VqmcCrRTZkJYpU2ZJnUngeJTKxefJgv6L5jRXNRYnzbGnd9fwA8ei",
  "key3": "4tymRA84JKms5Ap8eUoSb2CKKcUNKzRAKMhYUvkmD6WP19erTvCUDLsViNrnW95WsSpBx1Zyo8mZHQG3mGGW7ZhV",
  "key4": "2Hxr1Adv28vDWccxzpw4anekRPuF9K4gtMWfTT9ggXCNjhYQNzr2qxUyTLXCsM1PdEEytbzePWfGDHJwpRuGMNFc",
  "key5": "41UdqPaPCKrhgb8H2YLjHmKqXsYXJcg4JzZwrhuHfTsgNYCuhFgeJewwnWQ66WMbgo4Z6qxT1FCuQd2j2bTb9WUG",
  "key6": "5WDN2papSsAPY233JD8wQMCqMxs4uzowXzVTkU4D8td865qQm8sSd4iM335PBbAV67uqaCNLoL9RCQ4PPdUNci1k",
  "key7": "4kLsvF7QqA282y9nJYbSEgd5cLjbytzcC6ta5uu4xHrFEFu9kzSoeZYfTUQEfvBDBMRF5uMdqpgPzAxHy4stgSdd",
  "key8": "2mUjBMH8KfyenpdrCekvMpG3dDGGxEfiojPHQh6qSqaoe3ar51DQi6yhcWANJqXWSwddbX9uEdfB2xKqc2CkmFf6",
  "key9": "281PkBeSfX73KSpA5KAmmubqwemQ6F9YwU8seNAKNBEqXN4QRKsWWCBJiS67ARJhYwotDawotNaqm2H8vFt5qJiz",
  "key10": "M1C6Dyh2HYUJi4X4dcyL3LGPZuJkKf3LPwnxnrVmv85MaFdEQm7uKAN8rFHBT5y5QhCWXLBzYHMVBAb8bC4A4LJ",
  "key11": "4oVG2HtZNvjcJ5ddMbCUCsvM8d8pTXkUBA3VtsJ4HHqDz4ETT32iR3ArNPj3Pbz487RAFW2RGbGanYw5v452Wjvg",
  "key12": "2n4Z1BrztGLf66EqAJ7VGcYGGoW4E27zzXmsU9W9UW3MXaWHKqymwJD46xNg9F2cHuNdhrmSXvPKrtJDE7fZFJ5R",
  "key13": "2o2hkLekuidhUXEPnVfTmqFENrrBZ3hXfWSN9feZHtQQubozhot7pMEo9YYPBrQuVWuwU9NwoLgjhKFTtAqQ9aas",
  "key14": "2SSiWExbBdLD13qZxxQqKvdqMVuMsStGVSarbVKeMhBAgYrZu4A5uav7jvuu8oEMnbCDdbcFF4NZTqXnt7h46G6M",
  "key15": "26hyk4K5tFxnwfRm5VGUVcL8ZCuZkJapoaJmFFthLXYQ98Bgm2pCSDgdm53L38HJAypi6ym5kVPbw6JZ9up87Zf1",
  "key16": "5HACK9r7hh6RZDNZNk6h17j3oyGMbBjeo7fK5TyEynxdreGrqzht3KsRFuzZUUoeNp1pmYRavzsD5EbF7sDkFtZd",
  "key17": "4HsNXaHkSLLHZDMcqhq8iLfX56RnpGRVeShxuyyMCngXZPPcc8fYZqvejbMdJzVZ5WoQvq8kKJqPpXpZ6ry5a6wi",
  "key18": "37GiXinzRWqSACjs3mwUSVLnubmgecZ1PUrjHsfDeSMAPfn3g2C13GvMY39DPQZQWF7ru9HWMNeADMNxZnNEEmBa",
  "key19": "wiuCswn3zV7eqpuhKdiwaEEC79kEY1iiYFURHLHXn3aF1CAaKPorbuP1Jq9myujcc6Vmc9XiBbqQnsc5gtdriBa",
  "key20": "xUUFV8NX1y473YM4L5F7WnNKmpesMTFks62KpQXSK5Tj54VhSPbNE8m9RNwQNankF5X6Pbp9V12KLEFvbfk5hHe",
  "key21": "3ojtjVSyX8dVXMfv9irWrSfsQWTAiHBYyC8KdGacSoZMtSGTMTXFuL5hXxYHnyLdoNbHo7xHJqdxUjVpcBQSu4sv",
  "key22": "3DShcPxGCYgQrjsFdsbkLNy9n8AFBPwDWEeE7EbyUUoYqG3eWbTUbmuJeYnQGAAGXQe4YageueB1PAd3N4e6H9JX",
  "key23": "4iHJrSzhKtmJrpmgVyyGc5ZrU92JdHfsEag8aHngetzo7jHPioonMUwTwXBn8wp4c1hDiNxgWfyPWbgFGMriagRP",
  "key24": "2BsD5pGvucnjGcq4SuAt2RTwMBUWDrAJCDsidY6Ntp7bzx4V2mraJYtRL1ZdY2RHjYS1Kuxifve8472BkqLhShYc",
  "key25": "5XPmdNDzJZ9X7iUd9ichiQex5jzMQSYTQXX7VqQou6iaQARbcad1RFGc3PH63xDqKLm4NNL7HSWtpj2kpsZeKp3Q",
  "key26": "rrzaDmD3UvZK6NJbmXKYSTSX5GPVmneUCrhRxQ5ciVDGBbcx6UExfgmeBmv42WLZKLFeHu7fe89xi1Pgpvoxm94",
  "key27": "47vcuPqoUZSvbPzGX1eRJaqapUf4ba5fxyNF7YQjBf6yWry6gJc4HHMwZEA9xvVzSRdANbWtb1xYtCdjpr7zivA8",
  "key28": "64LamvS6JGfNRpf2qCLmgoTtUiEaKu5U2a8VGkSogUNs6H7b5gi7xnhHarNa8XFNPUt9HgBbUARiD6YK1gaL6FAs",
  "key29": "5PRLEZki71H1sShbmAzi3vukCqHGSVvJUG52z764KuA2DVVZ8Sg96Pm5gg7towDPbw9Hhso5pzAAU72SYeiaa53Z",
  "key30": "2BYDr5AuYAvie4anhyEe14ebP83VpvXLnQPYxt63wo2tz3DRShUpkJwtuHr12UfajkdfgFck9wrnNKinS9bPj95v",
  "key31": "3tzFBz5phNzAYXUpB9DWbCyXwPDuqbwdwkAMnqxa42P7R3ZcDKBqwAWoGfLkEV9WnJLqbHkjNmqq8tUJQgWZH6Tn",
  "key32": "38SHBWxDLo8QGnjFuDmDMvyeD178TchpjZSUAy3MgaKmps9huAX4982zSVVjQeuxoH19bAA9XdXBUK4kQ6QzVFQ6",
  "key33": "66em1y3BzmmAeSqdAsQhSzvC35BjWavUFQyKdLW1GSMAevbEcCk4LQQAE2unmrruKYEmqppuxEGDwND4kSbJsx5B",
  "key34": "GtVmebaCXUiEA1r9TQLz7WasppDaWirnRYGU8BBuqSYpYzu6pHH4vYcpUUn7ium2vpd6AAqmrZAmH58BZvHcqSQ",
  "key35": "CrCMz67LwaV4SG6eWr9AaiwYK8pDdZaF41K99B14maiutj8bmbuUoHFgSQi2eaxcHhay3BkzupYTzrbbcTU75Z5",
  "key36": "4Nx4Rgu1BFV4sfRs5nCY4ZrHn6U7NzpgdGgMDK9XBkyTBxFNpiMev1Zsxm6T19gDtbQQuMhTAXuCViJyHkbt4DLr",
  "key37": "41Y1KiVC4omtNHtpRaAvXcTz521PWGHijz3k5UnpKLjjJFE6QXf13wrGWvt8s2xaUpBJTbpeJLersNAnHJuwtZz5"
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
