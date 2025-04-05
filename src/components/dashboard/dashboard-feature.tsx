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
    "66khT7aWSJat6cpMAhnQ3igFqPfh4kQwv36H4D12SvRDktvVqcYvn9dzCtPve72s53bnS9bWqEfvJGJuZMVVHgYe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ph3qbZizhes6v4wDGVbvpwoid54oXMe5pGaPVWVpR5GbsMB6hzGFgd8j25X7b6uuanY9G77kc2keER7NimQbfV2",
  "key1": "29sL9nYAVD46b1DJdXBwpndoVdovTy29inBVfyjJpU1eDVzLfib5L97PMjSbGJ6YSGQtKEGn9TfJRXssuYNQ1kre",
  "key2": "5nHxDhgXLfXKVuAEMe1485MUVWUQEVV9yro1RA2VPhBSKzzmNbWtV9H1PHUqVkn9GJndXLi1HAL9RGfKSPnSUcjp",
  "key3": "3kA9JQP8QfzpyQfk4hvi5qz7Sa6Y4AtowY3cV7MRLNtNVVAa3FqtvYrSrcMSUnhHtDtLbcbtM7UUATJUDiNWRQ81",
  "key4": "52hjpQP622KjyS8yinBE2id7gEdE1Y93zauJ2cJzqbgfeXWwUqw4mHmVjiqi6mA4WKxaM3VaGBDVDgRWWPSFuPWm",
  "key5": "5uEuM6cMi5aj1tMxUSaVGFMNWbUuZvnBg5Mb18n1jBQzcTy2aJV6RDWiqNtB6DHcs4MgZkFCULwTYM9yhatAwdNW",
  "key6": "2vcbQFeBRvcGbDHpEQ5z4npJ8AnukZ4nfMVroAGWokSj8BPHtXdVYDR4TCRyKWvUuEd3R4uDFhJa32ia6KYHYAEd",
  "key7": "3nhf9AR8D64yDpvPHFzJ5FmiKGQKknKzUonpASRBqnes2yLBHQPJPmo7XpeK9eSZSW2zQ4YitzGrZ8T3cYDTzWLv",
  "key8": "5j1bf74a993BZ2d5uvPPGXTyuJv9v1FHEfrisLvYuspVX6YAMiG8Mx1Dgt3a4UAUPWrtk7ncesa5u6nLDvodLQHd",
  "key9": "4dgChTgZrRMjFc5RYm4pti4zKfusGEhQi8DSfe7RQdERKqFpLoGg9G48S6PBbKbPj19zPXSRaYzZCnqgD8qhDEii",
  "key10": "2vM2UZB4duykA7y7D7gUKx4wQk57uWz3wqxPkpK7Q5Rq8QfeZbAfMRaAgzBmsou45kNTb9drCHsFVcCDz2xW4z6P",
  "key11": "2yYwovnRbkf6hDkLghY6NWFg9ySxFNuQKQEe5AtxYJcbn3t9T8r6oC22pXwHivrquNZQ5wRzZsYtoL51zsCzbDRU",
  "key12": "3QyNfTY8oP8KZQUk4fe7maFC8W2BfYhGAaM6KqSDj6sZzZnqNej3e3h8zTgR5EQeVLCSyFhJdRJuLPToVTJguHp7",
  "key13": "3ZD9gz27TfCXgxCPN9Xrcm14dbw8rn4nx6h3VstTW8vMALhS6BWV4tuKVBWWSnwy1DdFqBNwNTaJ4bfWHkonYc2u",
  "key14": "5p6w7vsPq7CdCPyvzKawCWPfYhvB6kAgjGj5SpXbaEKZuLcco8igyQyHh8FP4tPqbVQxLyM2muF6FZKPnVx3Vn8C",
  "key15": "5oywsnTZ3tUqDHF33DxrNXZU7feKGVMW4XDufnHT9HWNSpux6BbjkknKSDnVHAVak5kNt3NViJM2UdZtJiKf5Rwj",
  "key16": "2TXgBAPqSQz88zu46ohignMeUEiVhiCDGcAue86fQ1VjLgP3LG8ubM7hckzG5JiYoQPLc4XgBpHcsdGHYazwXQ46",
  "key17": "3QjaSHwE46b1YbVURc5bivGf9FCGqWVWt6ZUxwk375tDYdwt1JMs8vNbCf7VB94bChgE8EAiUh7fc98C8ERwivYZ",
  "key18": "4FVeQ1vcWoQmgp3qsaZgGBFfsSmPwJ6sW26EzdCjGWkPPAf5xVpoYxXS3yz25inx6q4UPtWGna89URFZALPYK23A",
  "key19": "4qncnZV8geci4NMRSagAnk4H23BPsxsZrk3ST7fT16Y8NKBrFWjNy9d6dDerzP4WjqTNjChRuWNnkUxVuvmSgG9Q",
  "key20": "3Vyfg35S9jHTfBTwi3YYY5BC1mbaPTYSBmu6fMyvpuD4KgBm165XG1W2XK44ATDqjy5Gx5JR74A2UVuaN6pqyQtq",
  "key21": "544q458Wz2xA2dRajsNtHTaS4vYRfHiHath1Kh1XLYmr8EaDf8UfJjwBk7iTUNs34kRbfKxpyvpPabBhcSrvqNKY",
  "key22": "3DbCPwnCcCz9CzS8Zcf3odeQYJ9d9UHT3cxk9ahWhbPgYvcnzAhvSWw7vkzdRVAEYpjwwYFyMyDNvm2kMAGeK7Tn",
  "key23": "5Zg1yQ1a73FUcKzKndAaELq8kUY7sAQLnix1zkzx71GWceRn1HKN261udYSckrEtfiBWTpejAeMxZSNKRwCu7YM5",
  "key24": "3uxFf3eZnziPWRv1Z67qAdo4hKweF3k6a6pyr3F8cEcUxPZJ8LrgX3i84XL72g2uS1ioFArCoe1BLQK6aFPGrZh4",
  "key25": "254kFPJY8KohFd8nRzUrHfpecZSptRvzFfe6WaEbtZLnfJvPFHR1qFPSewZYwnGn3QNqSSbSmPJUh9tXkJPKEwok",
  "key26": "2WEr6RiU1YvRk14ThuiTEKbn6za29VqJUi2Ws8WAonphTrUozTpxbL1tJyUaF1fkT1cEsfrhCWX8ooeeHJsZgFif",
  "key27": "3S61bPPSUYjv81MEB5q6aUTsXM9fkiqjPCLi3cusvYG1PjNQqe6Sey9qYsCzCkoHhn81N1npLzEkuJmgwdA7sDQo",
  "key28": "33Hep23VrVijY5YsoMMoQPXhbaUDguPHifnz3p1mi3Ys1LRdv8AyQo85wphVmt6gR2MmmGdpuYygKoBi2XKTo99A",
  "key29": "YLLdpHDeEKNY6m43M9ysiXe6avi5x5KKZyCHnWk4W933z3VZLYNyLhpCEQ6n1oXoXAPMEwjMMYgZRnpkVPmJ3HC",
  "key30": "2Vght3fqe1YedeL4Ppc8fQaHcaRLBg56A4674P3RkXcFUVzRpScenAkm81M4nYvBpdYdeCvVPLk7qibv2XLCdkXV",
  "key31": "5TBieFu36gQVTJorKWK1WaHVghjCMLFtjNKXBbLCjdZS8ed3QwTZc1QFhzfTd9iEEYcCrKQGHZ9VnvkiTinBT7gp",
  "key32": "42Ljn1jW3KX7KtTgB5kkZpPQK4Y49jLRuKmERV3c4vpEbhx5BQQR2qiu4GznUcB5vbU2aLC89oTqvQ51iKquuCQc",
  "key33": "4fkR7TR2kZ4a84uko29CA2eEaAQwv5KPwYBUQRxz6tjnmf1L7u5trgn3joVYC2tJfpVJScDRxm1NPDaFi5wZzLA4",
  "key34": "2km3UXiWj5GDEVnxG6FTd9NT4SeuV1bCcKnK1D9FUBWYG9cpvKkJQt5sXUM6dDR5mkLGbrxiWJz2wmFHykZQuSKi",
  "key35": "64qwweVbczsfXSs4GotRYuAi8Fi6S8JAw8umf72Bbhz1DWZ69VQF2kVCeG1XuSUMYfWpgbLM3qHwsmMUrkbt8oRz",
  "key36": "YRzkmveHrpZKuMpJ43mdVjcmCdHccZGuULCjHUc5ZF5XHHD9Uzifs2PjJAFwbe7x8TFvjREiviz2ducwLSfUWGF",
  "key37": "3w1J2pYqWVst8GkGW9fKBYx4w8Hdmu2ACjMdrUSbrELequ3YBHdLpPhVmx2WeScwU54w9EkMznjV7BkuRu9qjcms",
  "key38": "uPhvEnizQ77tfUTp16dGF7q1Y59YsckdBjfTV75BhANi5gp7wFvgmWuCfgH6a8F2VLA2ZLxPfwxYBAFRcwaJTnC",
  "key39": "67UhPujf9Rj7goFdTLHhd4uFe14kfRh4sPSuJnmKHntFUXSnB4ap2oiUtrb7fQpzGp3qTfpTq2azco6TabmLEzQC",
  "key40": "JJ3aadSiXPmYedTWctpy1vXSFUQ9RkkzcSPWNyrjhwSXi1MAAypPB7jjjg7rEjQwDMgWKR6KmGsBBZS9WygoK22",
  "key41": "4csiamgtfm4CkgEZSBh88179EVrzji8i2yBwtU6hip6mqA9XrxWdwPDSkowc5CpbaNfn4Tq1A5X2quA1B944AThH",
  "key42": "5vihXaPgWr3B56ymccjDwjC7EVKLuaAcxVA5TejJu5Ev3AMeibi2EsLpFwnjwdGESkYMKdrdTbmqRKZaCBpGv883",
  "key43": "3hAb1xbMFoNu8oxgx9Q1ZnVjDAjGEPbCU4d2GvSnxQ6qouSTh9kFU34sn7s2Tr68JcwU8wzT4KWz9DrbvWLKUWox",
  "key44": "4XoTaTqxEuF3uSWJxQdwipKaEvJHgvHGFPVgJ8HAcuuZ9tKMoLokeJuY6DAkdYD5UD1s5UqxE7TXrGzVqieutTby",
  "key45": "5WJA6jBewRNuLwnAJoYT9y2uLUZAe1znJyCphfkfbxcV2ZhcWXyrLXsMEyFJwH5esNK5LXh5Qky9wX5R6iybZkGK",
  "key46": "4ipE2Wh2cgTDd9Q9Gk2F2vH3mYWVytC4pNecT17fg7yheXbULu6Dj5ZxbMHSg44bXGJL6JyignHn1S6QNryt9Co3",
  "key47": "5Zkr2rMSNqfQvq5k4VVWgb2UVmDzbdiLoBDeQfaWzbNgf52A6tTKcqGRePMKDwqsYqzDtJDb5Qmb2GCuVr61Soo2",
  "key48": "3AFvEci7icqKnfyhWVEERB3HP3pNtHQBL6Uz2k8vy6PhK49A9ACLPzt1aShuZqXnWHeie4MW5RepxHVF2e5heZN2"
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
