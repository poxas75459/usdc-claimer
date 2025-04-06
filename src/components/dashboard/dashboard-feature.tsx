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
    "64Zxtcnwxu6RUbLA2VpFwzJmPSxWEGNyXZAT8g8TMcMjXwyr9JAGcV25MbJY58cPjS2jzmfHtYrfVD2iErC6dkTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39Ye6ZJcfTAJjQVUvJY2s1yJtwa1NZ6A3JDRWcd2h6TG1SCmJGQkiuG44S9ZpJxSSCGL4JxtFrytFu6jdC9ViJuw",
  "key1": "47P8qfUtD78NxVKUJLMJauxmvt4d1hyHf9rXeTqKzRFwA2rhp95jzW92ivxRDRLTBmWkFNXmmuEvkChPfgLsiu3J",
  "key2": "3QHHdZR5odghHDDeqx1fgQ5ND5FwU8yK1bm4EcFRXg9p2BgbizhDrd9K4fq9RxB2Z37W3DjijkgEg8aLfzHSfURy",
  "key3": "5kaNAqgMAwuxRVptcxTj27nrMHZXryx9CEgz5MFCxq38wxLzvY8yfctikwr77a5qQXXkBQQHFZY7eGi1M82XAMhV",
  "key4": "3DTiT5k6spTorano6gcrKhN4cWDS718aMWaM4SL2dpvztNatUbyqN3kEgcqbSajyDbrLNuEnKgHruKZfyAroZmka",
  "key5": "7dm5YPTuyGLwoRm618RWmeizFyxSL5sBwrRnju1fWYh92JvvWYjRFAE1XGxEQpSCPisoDDNKzU4bqgGXMpzzLPF",
  "key6": "5uX9P3CCLtRBVELyw1hJcfS5bxpigPXw19JGQsC4i31S4brBhh3eRbBod3gDC5hHyjNjqfyTLo9xfkYSqFHJ237z",
  "key7": "3rv55xpvgJeJtDyL5oQkWAoKdYe4Eh7EDxzyeaxxAtK3Be4Jt9jdXnSUbJaXrwTv3ywjEyfM7rTbdEheTPi5osM7",
  "key8": "5CYSPk4nZuwAu3Us7TrTWminNgeJtS2u3QKSRntRuAaAe8ZW9iDgwccVc6PcrQpEKDFmzsdPybof87sFkMBfbD9r",
  "key9": "2LTJzmVzd4zUH13s5MMD4AZ2pALcgUk6Bu7VCQsf9p83d57FXj3Sv7YApvv5zUpPWq7hpzJJox4JU1rC57a2e2ei",
  "key10": "5dRn2RXFwhzfomdnZKp27pvjuxYgFiDExL9U1c8jPXDP47c2W8o1xVXdHAVRgSPsktUoRUzjKhnfixpPZAJK9jym",
  "key11": "3okKVWTk2nR1JjtjrRzdgnLFCpYKiQkHUcsFi2iQVJnC3mbtD1NGPnNqZRLNiw9qem2yCMEnjeh11digBLJefffd",
  "key12": "38JACwHzYcRUEyYmUb5tLsaDy5Z4fCxu6tqC5Ekm4Re4FkKTXtTeFrgjAQKthEmVKHM11GfUXhqdZAx5r1WA9YfY",
  "key13": "BdGS9b1HSsLikgCqESFS9zXg593bBXg8jDJ1GteWyG41KxaixXh8ynECsQWb7WUa88ut2MszEXgQmY1dDBWDT6y",
  "key14": "5d4p4bJc4y4dBiefcc4ju1yMGR1EiNnurZtp89PhEuKZWwv9oCh7NQ2WpKXFRdi4UUpDnx59HFQacjF6iQewFhWp",
  "key15": "3NGbqCdit6egxewfE6pz11huwrgz26Eawt1k3kKWoYXhfcN7gbK2ZC2Nx5t1NNGCkHtCVcNfao23CcDh738yE89f",
  "key16": "3659ToBekFGiDccSU5RMDmRZFj4qPcDMyXBTLegrE5g7rBM9v745B2PcRTo8gsNCqkYhj9FK6C5rq8BiCdSecD6R",
  "key17": "7XM7cUyGnYbcYj6ahEv1ESX4sTVk3Xz6Dvv4q4ajt69Z3XadDuJGXr3feRyL2fpheyuRE2ecJar87X7LKfxCLg2",
  "key18": "657BbpncrV1vt1zfxCAbYtysus65CehibjHLmbXJL3K6GmUTjUSKKfmhMaP3VAxLVmvnCRxPt2NUbmputco8caFS",
  "key19": "3vXa74epZ8KNTjrHw2LQLMzyP4LvvzUxCmUv6LRZ3o4wbpwbZALHoKQkvX9wcAnTiN2n2XYZfPpkRsfrqnrH5fLH",
  "key20": "4Ay3rTus1AFVfxPVQiyNQ5SGC9ogpLcMqqmF7jrrtEBA3gsVgwE6ZG7vuUFrvH91MCsVrrQzykLftv3vTPyMihSJ",
  "key21": "67CgZJyvNiPj2jQxRfgNABjmqqTgYFi8t83v9hmmC5TBWsryYFdYKGayHT481sUr9dhSQL7C6D11T4hYhXeTxLW4",
  "key22": "3VqzVSkqWi4c81JzsP8WzGbY2UTqRJpYBh42gqPy7Eue1mi2xKMHkqgL8G2T3NaFHu9JVCX6MnamvDgL5RBhbaRN",
  "key23": "4sCL6WTxv1WE9QDZ7mp1oHq5scVMEReHCbLrRYQVjzuC7hBNDHWRNnr1zXodYVdL1By7QpCY6rgm7PkT3Gs1xYM1",
  "key24": "2scdz7npG1doHaS8BXxdjVjSvo3s6VWv9o6rxRW6zrQV8emeSe2DEGvzLK8bLjRLCNQP6n7jfHtEynuKGvDQxqRe",
  "key25": "2EeG7gdhWRNe7DnCHwNrB7zXrRrLy8CmW6ofST7fsChpboepg1djetRhPscvxomeVoyDf4t2fGqzmuVBS51kfNWH",
  "key26": "x9YCzTUBxanrPNWvWpY83KAcBTLrYHMc7UQnMgvSLWqfcNYxBm7jVz5PU45139tTxpXYCm4zGeGGWZ9NRPsjJ7h",
  "key27": "5ohQ6DApSzg3M38SfEqvSwExAACJWz7KsKHuChobhbr7mw8bvF9DBZJBpfswrg5Vw7ZVyjiifbEQKXMwAhN9RUv9",
  "key28": "4h7LMpPgbanhqPDA8jXM9EngZgtLKMbZtDEQ22MUH4mtELKpuuQjHNJwXZZReapBGFz8Bbpdodk2vfGxtHFAkt5V",
  "key29": "5ksmYkq46pwqrGUgevBL8AVhHCjP7bPusu5dpGSJDRaHjEPW2URjDUVL7YkVCtS2uxa9eLju21FdPsD6SJ7u9UFb",
  "key30": "4LnmPiF1ppV4Tcsz2bq18Cc8XFSuHEHzMJ9FNN9gCwu3oqLft92BsPrfPhC8RkCZpnqmbZ1KLdVpsiQmtWq35khb",
  "key31": "2HJzZGnpKzBZjW6fbSDyBPMQQvRyceSCuemT63PKD19j6UPToj37X9pW5pt4mqmq2ASgQHDvnPp8mF6DhfCzZdHE",
  "key32": "3yCd1unfTyfSsxvnMSchjmusvEnmm8uovQ8kg9BB2ewgkf7R9UxJLhoSHd4Tj4c7amhGfVZFkgX8aJVFTY9HUk2x",
  "key33": "35UAcviJADJJrykSVUp7CjcevYSZh3W9raDa3ErGLqU9yiePc6fyw9aM9tZ1M5MPayqLBsLWPW1PWN2E3hLmsJi8",
  "key34": "55d6TTm58hMN9TXQTVADDs4174brX1DvZoBGw4Lexhj32YDSh93HtsvrHp8CAUbfCdphJxmPG99M4CVbCtxgdVzs",
  "key35": "ESVZgL8GW2D3dFKndRkKyD3bLa3ZrocPRoEj9YkURenPZxyZWoyuAfna5chNMPzBVq7kfDBaKWzEc4oAdRs9pDV",
  "key36": "38RyWPVjqMi9eJ9McBWhY5u3eQm9oBqss2sabzHVknPsWqSjC2FWpz5YWtajM43Zo2VxVGquEWVc3ssZGxXevqyf",
  "key37": "3Qpm5uk8CJnreVJZqEsyHtYQe6K5zypMTUxD137hDQgHa4YciK32iqU2C54zsqE8pTqu3Pc2eq98p3GpeA37jU3R",
  "key38": "dcQzPHhq5cpbdtHGKuNJtAYWVs6VW4JLBBaMHV2GUKqd7Qgip77QYKNGQ4Lt25t7XAXcdhiRFdR6W7FEvuij81e",
  "key39": "uDgyRnXGkUhCcETYufjkCEdSuwSyNi6YpnBxww5t6d2X323u3vAAXhiPj1uyu1r9PUrPTUFSYN59pENGefxBq82",
  "key40": "3rPoysWAd6zzVPsim5XEGpGJvcjSeXBBwxT4KZqzRu2xcCiqNiZeHfNSpWKoZyAymJjRicacRPopsymAFJeLY8cz",
  "key41": "MGGqZmbmWQ13Hnk7cV3WAu2b3nGQgE6Ej21snezvSm5oVFRvcUx1qrTL6uBdgckNjXRFhuX2iKREB5aiKNk1bGh",
  "key42": "2D87atKTsjZkhaGcKNJBJQ1nRkF76715jcGLXPdHfCzu5Wt5h46x38hhVLcp5EaVFpKWiFzor6DckA6wjwWct1Be",
  "key43": "2NeynBMWXiSrFFdmt7DAXMhuQePYzQNyP7HHWhtbTCszd4da5KURBQkoVLU5oA6DRLABQTMiuvmyRfXn6KJW8iuE",
  "key44": "5t1U4UdU9jAsTdT9S1BJSRcqXE7wMFhKGYx9WfXjrn7jDNEcNH4QXC2Ghv3PGGH9HzPtQC9kaoxj3VwCot5uq16Q",
  "key45": "3rpnZyqqwedwqvHBZRyiPRxyUYtD5h1SWVUzcreWM3s974WJQhhjWKGFzukTsT14764pWk4ibTv2WpmKbKPYUXTJ",
  "key46": "4eUKqJ9o6mPzWtkFo1wguQpGx4rN2gHVK79qkkL5ir6aDSyPJHNzMi9airQQp9KubH7eMForcZM2gY3pba4jYXoH",
  "key47": "22pVV2zXoTaD4phfcy1yMibQb265MT2wo65YnjRDEGPPqJq6e9ZEzkrBU3Usrwaf6V7qkezU7guGch6dpY6hTmFw",
  "key48": "pCnpSAw5LxjeuLKu7rtTukx4bo7k81Wi8bsf36hz9hN8kmQ24TwkhgR51tAeSxqZnzm9XgCQVGtj3fiMzW8BE8a",
  "key49": "2mQMAq3xa7iA88VPbSLSmaKDnEVmmKrcsJbfwZYiYbhkAq7VPV3bAjx3nu9KqQ69b6trin44QcHUbXK4ZitRRsGy"
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
