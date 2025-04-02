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
    "2pfSWxhFva7yift72MRXES2cmqUNX3vtJFi6vuaLMECxTqbvvt3eeEg24bMSwtH1B55t4vhW7K3Cmoi1UzVbyrYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mmm2MWzbBWJ9knwpJ6mLaMGdCNLJcUrqYUaXg7axaaS7veHdPA5PsrCjtFtuGCjDaAqjz2zLFQSUgwgUHJVAmwM",
  "key1": "4mbiQokfHV6BwB5qYCLPK3hcwhSS1DFwTvXV87a6ryNVTvtUeRmEF5htsF7rYSdCCz6ajuUUb2YN748GQNqZZxwn",
  "key2": "3Kxymwx9o5Pfoc1F2V5dF1xcKLG8KXt4xTwZpeoPXrRH1gKFT5GCbj8ReKu8xmZYctSDcw4rJnsb3cEwWATwHpLE",
  "key3": "5wKJxKG6DzRqgcizvwK3jSQ84hddaKDdNpBniopBrAaARYpKrjDDwodzF3fPk4CeartAcHw9UGEFu1StccVT5qQ4",
  "key4": "3YC2oFPzMcdZVfzTMwg9LF6Kqt6wMgtMcvzZphbjm5ATU57vBMd3XZjRiwZUx4R5VwDGbeJ2pUih89ifd7BZWH1A",
  "key5": "2ZkoX3Hs6GKtLaSWHeDVsQSFYABaZ4G58y4nj3oLNhbdSmr5YsasepCTjhicEgvjMH3FZFC6V1W7RH6GjcEpbxkb",
  "key6": "BosEkRwBgo3iJ7L3LvwP7Y4Kkeo1KrcNFZGEGFNkNYcBJigZqpVezrAB4vq2uFWFwQqS8a3afcKf6oifZPAhnyG",
  "key7": "ogNnCuBU5t4Pke91Wg3NBeQ4WUfAqPaG3hLiMPguqES8gKrEdFL6WK7DYWJ4F2KKgW1uxtcaxpifADMHmdzCKgQ",
  "key8": "2aQLS5AAbgPUc9W3VnANmdN2Z5hSLM3SD2mK3jFFKUh1ah6DLX2DpQKDAUKZqBzgBtgfftuqeJ5BkqHCR9SXMiMt",
  "key9": "43JgpaqoHtMCbgJEGcVkyNzfyqFqfKcBXFx9Tr4dJXGv6g6dNQ6ja2nWLcZznYbEF7N2M6HpqMAWwAEnxzcXzP59",
  "key10": "YrXwg6NAhMHFmJuLVDTox34Jvy4F77DQXudaTiw6mjZQnZMc8jCpq5o9n4EnDXiFLKqoDLEoxYeoCnUz1N3YShZ",
  "key11": "5oZLCYsJnpoCQA3nK9A9vGdwLSaY9GPjRvrY6QWHWoRtpEu1zHgxFpn2pXVpz5fpVnMn8osbCuHjbBJp1yjEH8ZM",
  "key12": "5tpgztwamHPAgGStQb6Udpt8rNBK8nV9RQvnf9YVkfccoJLkABRyHrgjqU5P8kna4SYib1wpCKuxXaFcvxQCRqNJ",
  "key13": "3gQxqupCcp5Mu4wSamrTajVgZ8PxE1k5u1GzDgkXmAV1QzxuzYW5JF3VRBCPF7FQwbJ227UD2rBYgiFf2XbVq6N5",
  "key14": "6Ro2PpTXGnvJH2VYmHckTNzght475EVezaWD9XfwqaQLuufebjV8RX8Q3ofFF8gPUUoUhX5A5UYnTrhRPBeVEGS",
  "key15": "3ZHHGTPb7ysXy54KsBjDhpU7Aa4CpUC3RtCqWMCswi3K4mtkcJQ54DdsX5WQfVJzWfZ1J5AzA7T1dMjopyAdffcX",
  "key16": "3mjdQhJjsHF1trr1PHJ35oqmeZXpvcpRra3fcbwVqJqHNaJm19cecdkBiSt42XYunQ4uZKieyj2SdWLhZPVSS9QR",
  "key17": "Kk7E5YYgAcac9xn3X8FtB7Z4UXX7JYT5WwduWuzdZPEfSBJgeHKyN78rzajKJcMbu5HebvPPxEUW8NMqEYBT37t",
  "key18": "vmGhpKsZJ1HENyTYaFEqnZwCD1dkosDZuSUHvAdwUiKBR5P3ZcZWFBYyGAM5L8AC929eSUpa6YYnwYujWyFQTEE",
  "key19": "3UNr6nPZhAap3tqXq2fV66VBQvjPjGDZ4AigcSwpdwsauf5MzWo5kfF7V313YhB9GqjU93tyVVfd98CFuBUofPYX",
  "key20": "DzSCMdg1RZfmZhuWtSJ2DPffcxL193SxaJQnVPL7VE3XzXPwc9Shf2n1TDs8P8XVxBMWKWrwxGa5dgpzAbBpWsM",
  "key21": "4EarxqYDXn3VpoASFKkB9ETw2SCbYSJs9bZAXkdGrPh2Fyi3dD4btB1oRHWRU62hsnNVakLRmkUnFx524bZJyoVC",
  "key22": "5Rx5hwKHAjKMeSSbz8Bcyq6pC1GKFTQj2mGnFKsMJBC1CV3mYthDbshkrYeqnn3hZBddwpQAJMKTgVkRk9y7H9Xf",
  "key23": "4QhDgPmGBZ4ojkpRC4fVh33h4Lqvcw4Sv2MRHoxHmHkCUijARCx1Ruxax11AHRshJj8hRQ5PkPjiNKG8nSJwu1ip",
  "key24": "C2KV1m4BV4GiFAhYSo7adVxfyjM7gJ4UY4ZtbqTxKc2Aetw5354MSVoWDj7bJHvboPGheSkMvAUooqGUHENxC7b",
  "key25": "3M2VGBM9v5UswKeMVgXegMvbMnCVTvKX1jMT6zA4hpMkmaVsoiw2NnvSfhwCY3phaQvhX2s9ocgELU4GJc78wkcF",
  "key26": "3DwtfuqZS8KkA77SLvxTtQd5LBGNQo4WgfuxLKuPU2gh82hUncf3VL8wTGs1eEL48AmPfn8wX34mMXtX3v4xrafm",
  "key27": "4H9rdKN6eL8A3WVbEaZQefSQQaGrDSD2nGWBTshjkFcbfYag4XTtrQR2988LHCj8GWJVxBdP8oJVLUyVKHVV8CGh",
  "key28": "2CGqa8fnhzXsusdm2i4ccKNUSpJxaez26ZyMY3LypRLedzFvGN5S3xEDyqfBbYUfytehMsPJUHNNPm8vBEMYgnFE",
  "key29": "3HJdBRnpBJdGK22EFWcWgftBFZckAgMiFGKmegMbNsoKup7jYaGxvtKLnKUVbHiXjaAoVNeKx26S8iezy3gBkEy3",
  "key30": "3mr3pKLqgf1nmaLDi55A9gNbBwbQj1gP113jURUT7LgdWNtB5ao67cdWmJR8z6VVexBpQXEf1ASfAdP5bSKafeWV",
  "key31": "3iMFsM2SZE7eCt6aJkLtscMvbYUgjY8nqAcFGk3S6LigGji1fHbbTKmvdf8skZLNBnaWhgX32qCPbSZHKeq6QudC",
  "key32": "tHviQXJgLjqMMBiD1dTGoLJkq1ktG8wuSVN6aSkTqtu1Bumix8jJzaCZMHjB2SZct5E25Lpu7BGC28Ntwdqk1Bv",
  "key33": "4CFSJaFUKHdR5DLkhA9Z3MHXGK1DdnPv6Ea8ByXFQoDiDqQS787LDTAboSMwTGfipv81HwgKUhAGnUB39QPCYr5f",
  "key34": "4C79TojZFfkuWtUrgbYoZDjvYNSCF2Aq1KPwnzv4LmDYAkvFTWn4gojsxqiPHRoohFta8vMisfD17P8T8vSRJoHu",
  "key35": "fce1Fha7NyupnxT5mgrSiChuMywz8ME976fqJsyyzXXAizs7U8ZbEHVN1dwGBLtavx5TtAPkYjWP6ysueMmAod5",
  "key36": "Te3WLAdc7SBtYysM4qzEY19weoT6HZ8F1j5nL6rcPaAQj4rZjhGkRGjjzjEHQvj1s3ak5hhRUzuByeSVbWDeRdp",
  "key37": "X6awCNzJSZWQhX7sd99V5VHvPxeCydsuJnF6nYQ6Mgm6H9vZXVWScaGwhwwFWFLqmQpzntmjeyEe5oEcedQHU5Y",
  "key38": "5LCxfeGazsnbDav6Fdwzwg6D2oYmdxyAjgFqz7dCxktZm3GRAPS3b7xWD5A8q6nmU3kDo2j9WR3qdJuLLfe5Rwn2",
  "key39": "5hZ3PYx2nKMvbm1SyhfjjAEaWaYMzGdjhmxye5H2L7rMjQs1aAKv4cfyeQs6Hvd85TuDwN7nPhEBMJsUmtBNLBYT",
  "key40": "4xUkhVtXmTf3sjm95C4yFQ716RkvCUVkLdgStg4NdPMxuUEteQYPoVvT2YeBL1SDZmV53U4vzeUyKik9M78j4NwA",
  "key41": "5nnC3JHp9R6CtwQQSf2kKCxQkATKERF4W9odgRmVcygEHxoJ95rMBZb94BpcvsEHVYvCHNYGdP7eWivB5hQo3v5C",
  "key42": "49oSSgTJtNAWwNQGPLWtvZWTniXPyGK7jmqV3W9rRxBbGsYZa5hSijsigGnfET5njvYiXp62FNftnaZvvV5GYiTB",
  "key43": "3QXyJGWQuZ9gxMqXWRdpFzoFwnWQQhuMeoUVj6TTDAKj6xHaKMs63mm9Z7xkuquQJbkexVUfTM8KQ2LNzYQph8oV",
  "key44": "3zYiGvzfxEhDfHs1htUXYpdxMZ9Evwob7XggdNYaW6GWd1kAHY8nr4mFJqRL8rbFGbFQteYrDH5MPmVHgYJS2qPQ",
  "key45": "5ERs6MjC1hBsgwKBvUoYCCPZcXKAsVq3DDTyP8iAtdwPcSvVqYLKR1Q5zyjMtTcXHb4V8Bc81x97Yn6kJ6hqbf1X",
  "key46": "46JTQBGXYAnxm6D7kYXwt9QJwvy5TyPXU1HBt3uzX77BJmPD8PsbdWRyNaKuPe2WKjckypjgfPpBuP1MtUr4z3Kw",
  "key47": "4GPoGCSHRGJQZnLxigSc2CeF9q23kH2sgxhSXT6g41VjCJp8bYCNqhgsaCEPJbELC9CdhZtWiKv72zUiWDW3AyTi"
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
