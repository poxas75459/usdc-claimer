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
    "ryYas5SPwuyTAcKXinqvadQTicgz6uWDSb8ZAj5PD5QZdZqYSVnz8cg2TfmoqcxhF932rX4kEHdhc9KntBzv7xP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B3rgEHUQzNgLc1JVXcbCynXQCD5GtQLAnqeGXSjRFA6d9bcwLrey5FmEpp26b8FpE1BYBds4cQfiNTVpLoJvGdp",
  "key1": "3y6zbxqd2NJGomX5w4HXmgzoUCsHa6UpiNv6N82FUM4iLzyNPD6wgbHYYAZheMT6Kurf4VmP5oKiVzWUfz9wex9P",
  "key2": "5jRUWidpZPXX5BQWgQTpHGuMyGuWQeDupMmCPB3ZtLHJ99cCkvsuxakmg1zzZo4sgpkitz2WeXja8ACw2tRS5ayF",
  "key3": "3KF9LEbkvGFDnCVbAhsSYVKpqMm7Kc377fjrUuMwCBRUfijDtXjKeQp6odxDNMiR38h9e9sooRSjSvTAp5TRAuCe",
  "key4": "3TzdMLbA48dKhAWu4ezvCs4hPuCyhTeF8VMA1wGHnLpzJvJaPKx82QTeaR91StTxnLu1WzBCrGJo7mmu8V9faXvH",
  "key5": "8yzxipzUEK3sTLybnntFUCtL75RFeZgZ7y6GD6KFvMKcN7d4vUkqxCURNk7kLtDVcwysfWM9K191z3XChSjfexW",
  "key6": "4wycGWov5qpbXaWx5kXbntV3Jfv2CCEe1wKFWaRpZVC8kYgjjiSyoeadwdsYF83KnLdf4Pek7SVYLCVtESZPgMPp",
  "key7": "5xmAyn32W19epx8PkXEW6gqcyLzVgpCYap7FWdi13jbUNJ5k7oQfP8NQKZwoJqvfs6SPou4ba2gr4sMFmiFaYJgu",
  "key8": "qQG53489BFba3tRNJgn99vrPnrko7VLmjPkLuFv2CJNCSrwhoRKpunoM4n39vm9K3UkwEM87mkuKSvmFJ8nc89p",
  "key9": "Jc1fcDDeAoais9d2kmE6e2oRLk814CF3WNTrwNBdiNLHTfM3MrYsoY5JE3yJWtJq3u6oyZyaZmjva4KdXR1uh83",
  "key10": "XrEMAfKAPNzdkueosjmLGiWb8jDrYX2eYNTPmezWKAU3jYfJCzwr5JiWVMtvqursjeR9XJhnaAKar4qSRvazdur",
  "key11": "32FGSVRkhJsjjgBgAVUQ7HTUesWrbRTU2bUo56gSgiYvkH8XuN2BTToB8p4HuyigGKmEwTTPXyee1L8TqdeP45z3",
  "key12": "YZ2YxzB7gciRfXrbKxGLFC7JVueJ3YrD8ZM4nuCZjqHGwHC6GvS3JgFZUKzPRaoWU4TuyCcBRa139BzyZveuEkd",
  "key13": "57gnvLnEnXH4MdK6GGepsguMd61GEQoJ84NcwhUwZuniVdyUn7xenQnPMNdKdirZbiY5tAtkTXgnodSmzNWKQpaA",
  "key14": "vT5HMHHhUt6hP4GsSrtuheUpdsjCc6Tj5wUX46odJ3NkYrgfGjWTk45322w8gc2LkTrAStd9YHjDZvBFKtwUguH",
  "key15": "2N61WFojf588EKjyrxEFK6dnvDzwrqNZUZon2NjwW1uutTiWmjz7c4ef7yGkDpnq47ysbvkUGSt55xAN9KHjxGs8",
  "key16": "3dtKaiF6Nk9okehHSsbR6TmZnQj8gyRGRDqxLeJokZbmSnvKtGHoPN3pvsg68yhzc8TCqTyEqHXgKS4hzewzFSMv",
  "key17": "5C3Dt5bg41xhghp7xcbSnqDgrqBi4iq26zPTMCR1jgc5yjETKZM1fG4RvEYnsEkin65rkfaLBk2TgVND1oS3f1HG",
  "key18": "2RBtKSqUD8Khvi2Av9NdSoBWmPf4ottszBdswrt2Csvp6xeTz967knY3gPcbYLrvrpE553D3pZjC9fxx6f6qqyxX",
  "key19": "5bDvbHqFyChGkAr2nkfbAkhv1UfKFKYYN3ZwqnaAoPdxx8TYMyudA7qZEuyHLz3JfkkCPz5ZHgxNMPtHeWDfaS1K",
  "key20": "gzcPGRjeHv8bbseqUfC5PdTg6J5x8EAg2ajeYt3x35Kw72zCfhHEM2JkanSXtSEz3HCnaKN3nTemYfGSM1ZBtaL",
  "key21": "5ZxxTcA8kqU7r2azckDc4SGeVWNEeSp18xTi42DwPTyYnALHuWSMmK1PwzjXC4AajqWzuAntwj7ydT6t9LFtmXmL",
  "key22": "5N738xiUry3TdugLwYBQRgjTEvCoowQPzCADg1Hghp7q5HgcEJF75UtqzytqgNm6t3xp9Bjzh1f1LcevifbLa4sZ",
  "key23": "RSHADnPYh4fob1z27b83t6NmCejDNtDW2NiB2H5kQ1SUcYSH7RygzrV2R3xfXED8QeCrKwefCoNikfFk8iYkhxs",
  "key24": "5agu77A37Bd3NvowT3vqzKUTjBjEaAE8DYPZxVtvHoSzrMqdnwo1RAzkjJiES67Rwcvw4cmTqc9Ggwr3NnNMRgEx",
  "key25": "3ZbmSNwCH6xqsUNKtncngzQA1q9maXH8mdtrPKx5E4cGMzJGpnqyWuSrAU7M73qqZmcbFBGvXvQtg8WXXzU9mjXL",
  "key26": "2bA4Hs2HwrxGje5F4iJauqjcYkttBmVwTmWe4RoE7eUGknGwPnmD7JYFJ24QS4kuProyeAuUMyBYH7cjDYB143kB",
  "key27": "3g3TdbVwEGyoTnyLLVChLM8qRFSCPy4tLWNqj15FDjp5R4X2veV3heULBPcRptFYFhyH4XnybvMedp4fWDU8rSY3",
  "key28": "55VZPtvKezuJ5ZSsuhQaSdg25J1S6XFXYNwccyon2aTx4GVFKj4md1y2Rw1YFiwcM1bY3eV4Cd8wAgRMYvpggzby",
  "key29": "4g1ZiXsYGmreqUhzrXmAeEs3eZPpm7ewixyiR2iMPYSJi5gMqJstqNKxVysXdjVmnfzVKKtALphBbF47cuH8heHv",
  "key30": "5JZoKzmyfksK6LSEn6Sic86DPEoNjhPzF7q8m6JiuArhniKTqowjXSDs8QWXmhR8Yk6jSsQkB5rMEZpoabUtQi6X",
  "key31": "VH6Eb9hg3LKfsBXboq8buRivCUDu9dveu7Zu1NZx8t91itnPrbeQSLFAsbcvX3EH3883pkLoSUzGP7Anv6vNvKW",
  "key32": "5VgxNX4Bvno2TFjYUyy1oZ8TG1fFqSUb72UXHQMuFW5Zq8mvywNaVNfAs73axpaVXkStjsFtSwX3ApQDsBduwcgw",
  "key33": "29DzS9boRgx8xdXfyauKHcxF1cR6HQGBvVSzKD4hJoxsYrojdZAm3GpjKSNZBPiKQTrNfa9EzGVChWTeiGSbm1iV",
  "key34": "3o9xtSEKb2uKTZLyC8fpZbEXJ1r9dwXifd1C4QgV5kFTh7p9oMbnGCxdUj69gfAUSCyNvNdejQ7j6sDvcqSPaxMd",
  "key35": "4hqbRovn4YAUNWzdCVqW6Uz3d3LkHAA1Huwo8MP8sPEXF4Z98Ye5W1NJLn4235MovhFiMFDezWc2xDLYeQ3DP2iz",
  "key36": "5Tb27NX8pETuHsDNi1H1NzoGfhFt4HETEgnUZvvqN5LHTpU71ugV23bCRL7S9zQFdq2jwUTxLWyFwgSZJSziDzP",
  "key37": "62Aqownvo31MuGR7XWckPtnBwnDsGzw9rQ8iLLWdutpmZuHNYvbFcoNdSyzxYk33HhFYx33Jpa1JoASppJKJXYYD",
  "key38": "2qGzwSG1WoPd7yzfar8wUuVwezXjQe8y67kTe14QourJmDHNBh3fX9X21Bf8KgiFD9SnxxxBNi5DqYEa2F6QzcMu",
  "key39": "5aXHw6GCmtgdso8X9RHtizGSZosZprj9qctFX9fKBhUme5efE24rn3uvpqWQ9vGk6RS8N86mDaAwm7j9eyqDfmue",
  "key40": "cKPUTzpL46eGS4GVFW8eVXWEwDJNHQ3d5nGcASPpTpM9vNxGyjmiEmxKEHA8K3yinWgtgDy87iRi2rytRgMo6pU"
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
