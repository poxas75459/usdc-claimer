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
    "4joLeu7bjosQjb9ZFybC9YZE1ptptWQTbH4pNmyyMXxwvr8mLKMUosQUCn8SxrdExPs4eKxoHXuRtDytRRHjEYTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23z3BguuNouWepcVcNdDq2qUVyK6if3XP6TNFhfouvvQ9wWeVX6Q86hDAeizaW1vBAHE5P7mWgy1UL3rkBLJnKTr",
  "key1": "vD85jpm2FscgbqzjJRaLmRv5b67dxowRmexBcZaEfQiDZTAdhRgZNC665FL3SoBumr39R3GrKDSHVxQPGaW9wE1",
  "key2": "2p4373A91xE2Yab1Kx7nqEm9pwaMKpNjZwFvFbJXzEvbSo3LmwuDBQPAmbCYzmN3JJUYDUfiDzquoSxPy8iFrzr9",
  "key3": "4fyM7QifPLRWTswgzvXwYEK8VYyQYyzw59654BmYFZfWyo6GBA2LAQtqDe8RMqpv5X9qhoDAwe5zQpikp9mu2Vi",
  "key4": "1zRau58FcUq5YQLeq3WRFZ8NwbmwVTaEfiWhqjsHG57XAYdYPjTHjuUGk4J9gsKb75FEjpfz7Ek1UJXydo9pRek",
  "key5": "552RK89CLuFw2QS9xrSkercyJFU2HxVhbwUjmcbhPmQMacu3wUm7rBvTUrRSoKoiioKAWWhR3XmAPZVaz3u28rL3",
  "key6": "2MKF5nXA3VfBfXM7X3rphf1DzJnjzGTTzTc1baSqVWZuYpeMrnA2QepQLNVt2WSG9rdh1o8xxHspMMmJqjRPLnk6",
  "key7": "5p6k3Cod7warmUYuQkBJRwinzjuKiREsCd4EbQ3WnLwqs2u2PhyP6ojV8kxZDmbDvbgDn9UXzZEGGEbTwHWPkJHw",
  "key8": "5FRYfhbDqmnDD3DixssXXLDMQUB8AV4Qqu8CiU5euM7dH17JPbVp13PVNe1NyH1UCk8z1ePC1dk7hNuB7week4U6",
  "key9": "5rUBVwi3ZaCbmhgWxmECYRvsqpM51B7zcaQ9jTkEcemKUTKb4LQse8ogszGCpb4KJ7S1eUa9Af5hgZ8yVa4KK4Hf",
  "key10": "3YDLuv842Kqo8ctBybgpJD8DSYrnWdSxcVCmFuSBLDuR5WMxGuNVMXJkCf5HJSSKBked7EXjWmQaq1fQrY4u1rrG",
  "key11": "4cQfCiS47XG83gZu7hGt326NsCUqyKb1793zTRkwuuym5odVwSUetKMHfrL3i8trjX6urCpTc2FEBmjg84wznNCU",
  "key12": "5CxB9UHQyYGcYeuxM1wMJwp1mjC2584BehuU1CMbzmvFUqjonkVrxZV1YBWKWQayzaNGU8hhLi9nAe2d3v4kpnee",
  "key13": "uUWuWWFia3PpwdJdvFVuudejaqh17kzwq9S1PJRDDJg7HUb7FT3tB1e2yHJ2krQn1ybFxJR3uW3jCo7NmFqPC1o",
  "key14": "7oyUV4weiSZNFDCt6yLV15K4YpD7UzFbc3Wp6aAwjsJDKa9QcdsHSUfCyBRjsNESbuhvjKYMJ1Xx9kL9TtkKmwU",
  "key15": "FSo6CR7KhfLBHPbozL5p9bSa1veJDGdLaqyCEf5dzKDRBh8buj7dKmFKsMG7gpio1jf3k2bTR7RbGAxdnfPh5BH",
  "key16": "2G6QAn7DfGAkZWYVJtQGopR5CcW7zrP56dPBMS6RsQzMwfsoNQ9a2fe9BNndf8oGenV7Q1B72K1Zyyujd5WKZJ2e",
  "key17": "5PhTVL3NpdKVEd1dVX3Q3twKcB4CJUrC27xnrhN9n11Fwz5U7JkK9iNHGdyQdfKyJbU1AGBJ7hpoXBC3UoK9jjSz",
  "key18": "5VuHzZxiRCYgeb1yTKLqt7eC9mR7UqXqhK7oxF2JNQtBY6CjCjApcdBPVffzYLTAhAfiDtCBBcrZiqimEnacz2mv",
  "key19": "2xChgtseWNy5yPfGQnEhKRaUXnfBN9c9ugKhL6xeDkf6KhZmYDpEgd9pAqYW7uaJc4fnUxbqEjwRoECSMeNJXD7F",
  "key20": "5mCCxq5U2Wf6XfZ5ZFj61CGYrmu5SJRg4e2a5rhcM71KEBsfmYw3ibbfaX1uXApA8naL2tDZn9FadRvBuBqF8BfY",
  "key21": "2wQrZJZ9fCUesHa2pANHa7Diq85ub5mNwQKryamKsWx395xKceUfDGrCQiuPY3t842eopeWjbzgWYRJnnvyHcDUF",
  "key22": "2czjGYTnD8og3AzuWdK4s1Y1gqCLxcceF1eyUTp2mRhamuvbKcJRczXogUoxYfHhoNgFqmd14W5Vym8rLTuyoGjC",
  "key23": "3Zedg16KoFttzUFedQAwdS7NE88LCVXPby1Wm37eX8Nxb9qqtrSmiSK7CTTCiy32VaTTeQkayT9nLCCU22KFJXDs",
  "key24": "ahG5nm2ZugbcNnrQSd6LrurAuesy4aTG4CZ791iwsvsn8qSkmUgKuj1dJSummRvn4n71ZiRwKHtJNyTZUND2LNK",
  "key25": "47fbA8iqwMUt3gPghsstCYQwhZARrhW7hGT8ciuzkV7EK8yTzA56eLMLgMQqsa5qp6RFwp6HBNNtxJZnKbXDTyBc",
  "key26": "5SvaYyB7GM93mWYwdAoF8kKRhVpGHNdsjzmBm57aYaMhHUVFv8331jKauWQkbtssGnBx3Hz5aU9xuNeoF6pBCCTy",
  "key27": "3cm7DhFe5LyRBiM2QUR2bLNXm6dkaVzym7mx4KdLBTyP1WDQ1sd5f49ZCENP2Hj7oBiqCYjC7DnfQHfwPu5AVhKe",
  "key28": "zYQ7TXX1ftSYgrAKpKkDUSPV6HhRjVUZ4Mex7mNnohtYun12b5LD7pLc4AR3teSTdqkrQ82kHKegLGkRGAzd7wa",
  "key29": "zKvf9Mya4ipxEb2NbqKjeGd1BJNTumbRtdQpLxnf9H6KzbuVzGnhZ1dhe13gCXvpJcPpiXty2HRFCp71hfwxAu5",
  "key30": "4fRedTipfJgCJ4sZzbDocpoVPPavrH3DvRPKhaXJKqjYDYCP22GHFMNNeCHkQnZh7qwfsKj3Deg3UNib44ugsqtK",
  "key31": "5wQVCuTHhpqZrDfQw7E1fQCj5csQP3vvi2vDXAZdL5YSYn38QnktfjWKbbmfErSHoXdH89UiVED3YdaHux4q8QNG",
  "key32": "4F26feNV6PuyXiU38Er1BERJjzvvEXkPcb9ycHcLDgYDkAQhQNgaZVGZfH8ax6ksfXUVTHvHH25896JGboBbCVJq",
  "key33": "3CUSxhsAs1wdWRHsK5QJsYuL3FTVtwWXUugEt43UZe2CqNk9fz31kAWFYZnLAhRSj6eGqo1rWgzCgunv7nEeKE7E",
  "key34": "TYHW1LyYN69wvv7eVaLgYiqttitwHrHoKh6cMXhQVwJkmopngX11pCw25JmwddLwG9iXXrGZ5mt9D5C5AW9ffN3",
  "key35": "z9k7eoep24iYzBe9f3A7eDvX1p4SVtKrUXnBtoegx3zZkZDsSnkGZkZw72ZswpxQfHLkxtSVDRKUUU8nPHyZXsR",
  "key36": "5KkS9RTNKRPgD9ADbGo2it9CHzSJoriG8smAQCPMX6ZGNy8iXNFrtDjNg4HwWksRbaqXsdCez33PdGhgTMarhr21",
  "key37": "62fPKfKYrjAqe4B3awSmtPMs2HtMBy4GezqBD8XvVU15vLmw4eAQE7ynQiMVqHiZojitsThzE864zHD8xgHGNeSa",
  "key38": "2RxXCZYd4doJtu4ZSt9UbwA8EBET5V4uFqJKXRpWu4ix3afwotpFQ28Pk9iE5eU7eKYiFcv7CPkrXUpyvXGVxuHY",
  "key39": "5AcsPL4PausPBW3qY2QpC1syivruT6LrY9QMvWrncDUgUaSTx2NTnSTZxTp954RahiFw29HSvBN9VSA2gpJntsSQ",
  "key40": "4zXtCSVuNFXQjyfPTNYnSX1Yy683TiPxgrTirctHLDdzKeKyJVMMgRNoRZQTyzoexbaXkRBgrKG7KwGfKHyqDkJB",
  "key41": "5HbwmKwnLK7pnLuRMCwwoccxf9n7iv7gAwkFuzSHUCMU9hmtFpy4izmAMqFZF3z48M6NGNEVu6FqXwKJA4JaUPzq",
  "key42": "zU8YLjQ839otf1VNXQLBfEMXFRcgKp8f36KW75AbATgfuTq1cYve1FcJyqsJgfWUjhNyDvSV2vfZNxps3iWsQrJ",
  "key43": "zrrDJRMLrq73abDWFL7sdPYCs5uXjzXGgLuddPfie99K7BTM4r5KZULFbaHNpkWStRts2MtQkVGsE7L1U6FUxqJ",
  "key44": "is8DVhw7CSaSaomtTNz5gWWuZwce9jJu1gnzwdTa3ZL3yBfJc7YSi6dkKPfbMPBsSXJXYxH6hwnsYtMMCdRqhh8",
  "key45": "516tfAN1RkgbEPkgSg3b1idLAzUNYiicVb76MoHzZUsDcF6EVJVXP5HSbfZLhmW2CY9UERcQBTSuSDmrW8h891Ke",
  "key46": "3zWFcLvEZ5BC7Lc6KAT1gD3Y3RttRmUy6KQEEjTndgpQUkf5Rtf1UZrMRqBR8UGu76KHxZDEGMuP8Uop3c4Y888N",
  "key47": "4MDrMJfePxV9verptW73xHBGay76WrAV8bXPbW9YoBPcyz3Gzdxs7vtn8NXU56wTMdzQmc1EFsX1yPG3yeDiAQHD",
  "key48": "2vVvg6YUFtEnzmd5gjeKmuEyeyNvjsH6PjFt5CS6Z8aV43Wx713UAqi8coHdScX8NvBciqxw3oWUAF4M5kqnasSU",
  "key49": "m4HJAknqn1NAF2Hti9HeKoytEZMsGez6JugTVWwvsNKS9kBsvfMdx5v3Xqd3ZqCcWm7edNs3L5MPgyTwFGSMWNf"
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
