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
    "4FNiGuJThV9jXUQNVEAon6wq8VbqrcFMPeDvqJqD9FDAcgSD7deGz3VTkM8zdddbqEnZd4SJBZrQk27PDJFUX8wy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z6cvdxMuKnJJWDr9rfGFi8RG7pZ3o49VuDRq6sAazX22YH1z8q56W1v2xeRHHaFxjNy5hyHZBg6BB7hudMeHwC2",
  "key1": "2J7aECcK7EHvNKpLmH3bDbpXJ9nWtnCuk53WeHeskjfPqWoLzJiLiKnRhKc6W22CAw4YZx7Zjkr28FN9px2xnJnZ",
  "key2": "3wt7qH1BP1CZuawLidTpELvHJ1ktHdgrWvVxbCThtbXR2Pnj8gGQWuKSsnVGe2bhnqM2APiPpdSq3bpe3Jy7KDnq",
  "key3": "4Ch9VxKQPGEgNdEJVKYRk4tYyyxrjE5FB7tw9WU4JUZBhmx8fmEAq2eytPSu5sLSHCWjCVcHMPSygoStJ46vM4Y4",
  "key4": "4uyv6MHbhTBLkGbwPsUZ73tv1Yw8WThLS61K3FHcTtNETKDc3L44D1771WSjX6jPzyw5Efc7MvRLV341Ztc6m12j",
  "key5": "5yphcc9EkPxHYLZgfh4qSLDsEsV4K1VFkJjfcfUbeAyPMzY8vNjkLjAhCBRE3EJkejq6ETryrF5vkg9YqZSxj7ec",
  "key6": "45F1uHvou6i32pXxQ1pkTbGD97t341iiiXx7v1YFNop3srgUnoN4WBSU5c8rePeKXnUzNBnYFdyNq8T59nLQFWyb",
  "key7": "3x4KaJsmXjY3GJP69fJVWFd4YTvMEVHXEEghvekgRGVFbs1yXY6VqDSSj939MSq4knuWm2NJ9DQEceVXr3a46zWu",
  "key8": "5aTYozi22VwY8jKP8pCg3K9yftzCrGJtDxuxWZGHf7HQQrt9TCyYmkBRm2DGL8s8et3vamPG1dqznYWvn87KpnXC",
  "key9": "5XB2HqsByprJ6yBatY2ssV7RAAPo6GDE4cs22JLrJitaC57rL8EmsBn3v3TMb6UGs9sPM4y2abvRyy6SEg51Wjqe",
  "key10": "5TdzwqCSFtsczmX5hs5CcUYyvxta2zsqiDU7qsnQ7ARRtvuUE5pJbKDcYP3eWiprsNjfpgntveNfERQAthotzqvQ",
  "key11": "4Tqgom9UrSWp4UHinVRsxevt4cqvZ32fQbPLemu6vfTiL2N3WK49usenpehGXadH4pgh7dW4KcqGVL95ZpewgT4Q",
  "key12": "234KpDEiVefASKT69H6TByxQ2LpMcf3KGYCFkBeHTkzPHf54YpYbTMngsFzsBAjADGyLREo7jcKiTvC5t7bYiuo3",
  "key13": "4QrGCT7KAWXkRAmZ56NHtd6fbvEoSmfJS3AetBtzw2AxnhYsHoA93pURqGPm55WyoqhLWYqSyZd7ZRJugV22gtv3",
  "key14": "4t9zPRs8aHqMHMbTPWgzUyY7S91yngc1ScnSSdEqdH7HoDKhURa93fXpCf4Wwf8qr33trKgFVzv9frrNb9mj2ydo",
  "key15": "cAmjcoMsiVjV5asHbZJ3UuCX7sD7fMrhNPeicw1Xr6a1mxhu41kL5n8RFV9XMdDMUsrQWxgfcxJcR6MTTWTXD3D",
  "key16": "barZbFUgR4Pyk2TYEzrCfkHFPPyxtEiFn8errwVCThTwRV9KK9RWcurjNPD9YQvTCPM3LjHErqi9JXSioKy7Sqj",
  "key17": "3A9rWZjpN59gCrqMQF96Rhj5QcN2tCNskQbDXhn6JZiMFA75n19yPkLPbkE1z3McdzKcj4j4RurgNgaX6BWtbaU9",
  "key18": "4zsMnKS2xPzPZv26vKsMu4cfYHKTXN3xW74h51y1N4ZqNkEq3kN3JTQVrx5m5Aka1jzujgmg3VgzhspVtQRonKAt",
  "key19": "3XkHZjrc823BdWR1B9vYDrEhMo9Cx3YKqkouBgSAmMr2WvofxaGgHxNGD7jjAv6AtjwyktSDpiBpdKPWBAz7czn8",
  "key20": "3yjqVCDtaZkNe9ydwSMPWhAxGfzNyAUVafFEtHLToGH4rQsyNgtJjG93umZGV5CkCe1fg9S9utrVQG9aeXq1YUVC",
  "key21": "5zP7w7WsZtKEhF54qr9rFux4CiRf4VC8EZgmAs45cb9PTgMC4mAKCwDZrdkReSat6R23BhCb33wTU7KgEEen85yX",
  "key22": "2jL3hWpmAPhgcAHNGoPr7prxBMRAXARmribn3LeQa9XNtMBeFgZBcskmXjtn9yV7rVmCL7JfDdrBeyGyLnS6t1ff",
  "key23": "2bJDsPk2xHf1Qcb3miTAg5nb1oSLGFEZid2FisDsS1zKvMBGzj9259MCfcyLs7Td6a6sKyp5VqBWjb4RPd5vk1uG",
  "key24": "5wGiRG1vJ2Xe8XcbK8hDodQ17xtpjULHZCLLE1CeShJbnwTrZCLCNNWpJyfU9zVmAzkbMq3Th6chREB8WBa1hgzw",
  "key25": "2EKVtmjzTng5MTRTUEp2wd9yav1F5i1EZcE5k1FGcrU2mLZMX5CnmLHfzRuifF5rDeMW6gdAuZHsJSLqTby99ivR",
  "key26": "3ma5bAjNT63Ac6s2Vf2db876csUvAvm1HQWw37QiuhHfnHushkbJHZKNTMrrViEN4DpjQxXG8jx5pkKfLXW5UAcd",
  "key27": "5a56zjDkxzJz89fQDwhDZwi5ktBW2TZsbJrNU6eKPm8BT8DuaD1e2G6vhR4hGcYJX6fFdZ8nz5y8ZWbnEH3xk8hp",
  "key28": "pY2JS6PHwy9TnnuLZrt4UoAykjpRC1Nnb95LbmRZr4BejLaNTW3YwKWzv5HG3MSGoc6wRsneASyfk9k9k26AWBb",
  "key29": "4xZQnCjGhb7V12rhgrt8YX2xH8VM81rUK39nnp7eGquUh5P1SYuvPsfhfc2KqF7j8qu6BkqBmVtrJcKaWLnLBxnh",
  "key30": "4cuhmYLDQu2UtZhBm7VFViobwFfvY84UuxmVJgnnH3cvNxHiAHcKwG2o33t22miYfmKmgR127fvevF8dqJtxUxJR",
  "key31": "2ZSz5qBBf94vG3yFgJgwh241cWXfZd4c9Di9kemQSBYN1xHoiBTXrrZ17KborKB5ErawYQPg4F1HRHwSEpSdu4dE",
  "key32": "4QcrBiNUEKnYtpRRznRob8StkTbcurTbLn6XurykbJmnpcpSkCoPRHu6VxEhHzU5NyQ6gCnKbJM34qmAnYcsYyrV",
  "key33": "4nQ7kD3NvafxHCVpGuiycsn716HjpEVWmLAnaSkaCYKJmMCxwWXFDFvMAgFD3KvPRi8N6QiQTogwszcMvpnaMti4",
  "key34": "WsLP8EJ78YsJgdqSrt61VXZM9mQyU2FQybNC5yeK69hZ7RWMpbSrfq2dhyXxd9nWzAbUk3QN7sA9wJrDJ53EGeZ",
  "key35": "2fqxj2gG1yBTB6XjdVA59fWQ1Nvghr7ZbvuXxSmWRNvioGbggUZbLD8aw4w1iZ1wMmH8ueCkR1tftG77NivR1fWb",
  "key36": "5garfer1TzYH2yd6gXFcBZw1FT2eEv7YgdeAwhTEC6udEvqCw3cZXvBLZqa3gNNojsRgNAf57TozYtYr1iteBDnH",
  "key37": "4eAn1F2Tb93keSRXtrzvCfyW6DpVGB5K9SbAsFsucArctHzFCnHeEGe6BEXF8v76asiThY497cBNLttwAJ4PpZ59",
  "key38": "3c8XW8jP4c42awwKuqvvt636jNnmYGzAr98yfd6YVmtu8J9GK9mSPDZnM9C9iTVbMmnTMPLhPd63qHhqq72FescC",
  "key39": "4JwwyvYsMBQXYvmPKJb3LNW9wSEWmqyD44sz1Kweq2XvF463r7EuJrpYM3FfkK7y5ouDwaPYGL47ghMWW3XJcZwj",
  "key40": "52difL1ck4EUKtnpdPzBHCmwqAiF2htVRXg8MNHPuyqa9zgq5ZvB6CjGpv1bRjPsGQkdBmTNDThW9TMv9QgoMUYL",
  "key41": "4YFEdBdsJripKvhJeB1JGVTSd1WLzDRusCM34pFENqoUHPVUNpQaYFVRUSxjhwbTiFAJCDp46Z3ZUeVnXfVHCMTq",
  "key42": "36onbrS1UEmivK4NDkm6VTsxPMVd3ZbHtqNpjBWbwFcPrZsSrD79EAbNoEzYbDG3nMrtQtHz3Qb9JciNDRvtX3jE",
  "key43": "32e59MNFxQ7geQXXFymbWbhvhCTx8WDKJFbHBCHicVPaFruT5i1LCQeriKhdXAv4cJ6TPVebVFP5LdMPuEt5uHj5",
  "key44": "4CoxDWMTE4FboKCZbfkCTA3tvdfuUUwsZ8jDYAS1C25okz7BSHfDjndBE7YcKQkMBU2UFzRv5kEvGspeMy6b7spc",
  "key45": "3TToYARhfqpETdzRtpu44dhXNkBSHYUmDxE9prCuDZSsqbwUQH4JiCbSxPqrteHEzmDTdQYZthKF3TBHrCFPJC32"
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
