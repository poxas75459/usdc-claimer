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
    "5BYe2UWSk47Dw2FRwF9rvmyz3oq5roYMiRLdU7XxaE5Z4yfuUNYTYwtRVDJDWLJYRWV7WQtY79PFN8GA4iaKAtSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XXWEBccwV91BhbX5L7gUxyoA17hvew8ByFNT4tayeP93SvtSWF2VehjzQJLqonZtDyEb3r2EymR6bcsH8YFgwHj",
  "key1": "43XaNVuYrrKuiboLFATbqmmcXzE14Eqz5u9MpxN8Qg8cRnUnvnB2kdjQjaqvYwfnLQsGoHP243WWDSWwvxjD9dqT",
  "key2": "ypNigjXXfHLgLVkHKjvgD8iy6sjNkeeHGG72LdcjNPVJDJiebtZrok9KWayDf3C4XWC7DhhB2449L6foFYFYPts",
  "key3": "5t69z5EZkRg1wDz6ZBRRN7Wapaw9k73YurKaGK28f4VLVVNs3HT1SuHXd19B6zfYKDqAPL1upzobfgdWRqgKMCRv",
  "key4": "5VaRnbrxpTWRr2hBNKZmvLMPHALpieAjBZpCgN5cf24qLQnoEHDoE3YjgMY64s9Dgwna51ihre21cVDGHFsuETjE",
  "key5": "3hhGJUALDQ25uGWoEU6GP5wgjVAA9HsP1hMjqqhnyiNR6DpbSv9ChUtn5W3tesHaFat9AygvkbJJdKwq7HvikkT1",
  "key6": "hDLDFh33fP8c72ry2zpz9GnjuDyKeCgC2oSAy9vcGmLATQGnqtJLHN39sV6zcnr2MUhYfDdmmxLCcquvU6n4Y6j",
  "key7": "5Cj9ytx1ZXHSefqHzm39THTSCwmWZYC2J4oB8mbfbsQ3giCBJ7hgY3Vt2JVyDpowTT34ncDvBQVTWydbXY7pQJz4",
  "key8": "bx6FbsgLGBgyg1wCXWKxHAn1yxVKJWJnVAWsHQ8A6CEhNCpWNDnUq2zHrM3MhkZ5wKRTrYxBivvYXZ63sw5Um35",
  "key9": "3n2TqFQMuzSje3CdULQMYcx88BNfTtaeKP3u4XNajQVL8V4SQZA3MQZy8y3N5vxfGvD4k98U1NBmrwccduFrSQB4",
  "key10": "8Z6MCDwwz1ZLogDt2Mbr8Ubm4yZnFvV9r2eJ1Kc231rFwQWLa7uyGK3xxuyTUG6nh9jfUbDwqduYe5HtstBuy5u",
  "key11": "35JGVgLHjNFCR1M93zMBswXkRP57zMaEquqMLMgcKc3iTBQBsMEEW83QmPLcZxb32ZNrKSoaJcZdUkajGxahYgJt",
  "key12": "3v7rGqosdLYU7Rh1UgwUhNnFCkCEJ5D6WkULKYL22MuVCLE4DeGuzzkVjEKpgCxbSfUQYfXgruNaJxSv1qeT2bV1",
  "key13": "2V93WrLa9aNuAEH8oxW2ijBJwjFUZbPoQAGCQE2XasWWnauRYAFCd5SU7iwBkQwXHahdiBZyJS3VyUTE3wxNrSBU",
  "key14": "5QfsCSNecoGtPkGYEpWZ9YsxQN6bPx22J5CbbBAyfSMPi2pNEpzzeDnm9ibAWBBbmJRCSpNTQvSet7YhoELJzwoG",
  "key15": "4Km8i9xgH7RHTevxR86oYgJuWsDR6ssqZ43VBBFLMMhbS3Vs3PeqjRmw1BPKaYzASjK7j4DM4ZYA9RG9nmWwv2re",
  "key16": "nbsDQ3ENbKgzGhpfQUjbpgv17f7DyxXg1NXhpijCi1mLKfvTKgWtmwWwM9PEZjZDRVXeHw4gJq9UmM2xySsdBTF",
  "key17": "jJoobYbFiNFfMVsysFbWke5vSWyZmvyzjty5jN5Yg972hA23Nq7U4a8JaG1sQGtqxuoAtFCJoiy7KL4Aek4ourr",
  "key18": "5zap8poWmHNPDWqYMbPpLPSis8B8fcJSzQ3xaD66Ggy1t9Giezxs4WxrJ4AFkmz2WkcV86YhEkCrpv9Dbj4PKDzC",
  "key19": "2TRLr3eSjrysDvY5xgyTfEv6N1idvzWAnoqTQrQMr2iChnVzUuX2W6UuPjfrgJGV5YYiwzbHymwxoW3MKh8WuiMm",
  "key20": "4rBNFtpFEcgBPX7UefdRVjobCN8HQMiDTyzZgwHV5HRdoKGVbAXqKPweQpWHxtdUK3U3XDzHa2c1NNU7zebuV6M1",
  "key21": "589KusrrvAxjeojKAPUywcVEpDe1LoQhsmZbc4hhGiS7zNhdZqLoK7x2EnVLRSy7XT28B2VtWMwZ83F36eGFPE9y",
  "key22": "5zqHDDBwXMPvTYdTbJak85nLHNrqx2UGBoJzAzHQwwd4Gvn5P8bmBAR3NJSU11Bj6VuG86YHdtpti1goJdTTenQN",
  "key23": "36UQYufzVUi5dAFpzyA84uF1C4sqnS97U3Aghmza16MMkfq4q1g9wcGYKni6UJicuQVbfu4vyqvWc9GpgRThRUyR",
  "key24": "3cSp857sSEU1VX9wqHNAWrRkh45Vn2kKemj7BigcC2DBzyCJDf23xDiSDUL5A1mSrd3BPgmKQ1A7beJ1U2L8VBBs",
  "key25": "3vNZNFkueGJi5XoS2n6Bw87ic7Amq4WKpLPYvdvHZucTdBeH31Yawt1J4Fqd3iJ2roJv2DdXB1zqpDsq63j1Qepk",
  "key26": "5EebZnyfNgnFT1UuyAFuBpBkA7qQUwujLgzpqjm5wQsKPcjafJJZQYBocHWLUc38UjaXwtLpTSAC22KQWqPwMKBP",
  "key27": "4fsqQrL3AtCnfzK9riVssLPTMxuWzeMwbdY15KGoWLix17RFpiDJabL293VSbSviZe6Kgpkw82DbUDNXowpX1fp9",
  "key28": "3LobCRVwi4m6oBPJTzaMJAQnzq49MdK6et7BzxkvMfXcs3Y6gbnNmbXgGBtE59Z7c9MCof3Hg9nKgXDc1qdpvZ2X",
  "key29": "4sfVvKNU7TbGDMcpCyhT68vH313x49JkckLmwojf3UnzT5tHPAu6iavaMVP7Kt6D7jHtiavw1ftjCf4qSLVsgbue",
  "key30": "3J6AQVFjQi7748fF5EsE1pH6Zt3pXaQHwPQGyw7B9MXjFEGVHhmh4NJzLQrqhofXaJzUkYkbPB1u9AABgGRLoyk7",
  "key31": "3LT92SpjQYtdLA1nVcWv4z5YG5JZLgvUxjuNMe4kE2pRn4omWBMNopj7u2G93wbb17YU36RSSb8GKAkZV3oV4DQW",
  "key32": "5j5URWTow4ybvywFXzWNzwW2rNVZHAiUWRXPjXJQ5yKLa6usVcXVgYySy6PNA71XzmvHFWfJvjDyF4AgjXkTBrV1",
  "key33": "4EaS9ukca24feqJ6qHfsLBY7D3E9CA8UgF7Q9oxoUPwv4ecVYaRk8Y5ahon2sbMyMVXE97cF9rXS8dwXc5RedLZV",
  "key34": "5cqDSQYk3eQzq4VNcAtEJ5uTFR2gioPGQYcDrigcgCF8mwNu7P6U3NL2YfcfDPxJBsLoLRhdemA6WNfAMTTpJyXE",
  "key35": "ZC1UjL8Qf3nsVEsVrT37nP8iJdwWfr9R18ogBrmfB4duCTYEkVvQotQHExgiWvY68HC4AKpKc4b4YgPfv5jJ6EC",
  "key36": "3rfoqnzqEfLWnRVmjP1SessgQmhyQhBH8MPqfSD4nJ7Cb2fHWH6NpteeocZScsyRNhKuAxMtrZGWyYSqMsE7U4Fn",
  "key37": "4j98gwSUXE6ojBw4EL2bsBuY4PDN9vG8Q4Rc23K15Pyij7NwHrVSwyh2uLtpRyPGXiM8qKfgaYvJrHRsNMtqSjAa",
  "key38": "3jxyxBvJsJf1faFzQ3M5LSJAfSUzmZhthLxuZg8GSjBnKyYaSVGRZnCqVgj48nxpY8T8oNCxGVVvSiPugp1kHgq1",
  "key39": "4Qzg54UbpqojA5TWXjDeBByqxocG8hnCa2mUqis8KnFu16sbp5rXMkTdNQrpx9JMLADwnf3EBD9XfUWv2L6MEG7W",
  "key40": "3DxcYqkvqie11X6UhR54JRn4EkH46dfCE96HjoiwDeDYiw8DLAaeU36zwqmwcH1UTdpv3D9eCqSg31eZUTrnSoRH",
  "key41": "5mS7fkGdSJ8NzniSDDVEeVpjEEMbEAV33jfKQ8beHTyeDhW8mwvnSyT32zMBhYjyjJvbSHfjxJM7waq5G4MVr2f9",
  "key42": "9uPrZhYXp9bx1KzokNU1VdvpxAgPy4hFJkseE2npSUUXwY3gzN2TUzdV4jRjNUYQhRpdwDvzUtVWnKWANxPcGsf"
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
