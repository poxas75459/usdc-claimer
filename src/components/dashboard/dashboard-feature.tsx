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
    "JueNC8z5t4WkdLbsrhMdhVcZ5JdGbEddqGJ7MESNhCQXyymJ95kDQePhpqCrCimQufwxoS1zeWcbsGMxgSZJSis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bnSgnJXp3JshbktUHTEf258wm1BhXVVnbVde6wcg328ubt1xAh94kaZkGtS5UwXDCa6szqoQsJZGtJjC9yLRTvn",
  "key1": "45rLzJ3vKJPhooQyQ5vnfrb6bG8Min6YK8jk1t35AfU3hg7UTsMud6JK5witLHQ74croz8MWuiojYDmdtYgaDdCr",
  "key2": "4r4GR5yszwWLficybg33zD5s3aiRm4188MVWm2njucyL4fSdh1nBVpjrC6aKb1Rd6NCFPREAw8QrDMgMw64UkpnC",
  "key3": "39Fr4pJmJhwJTFax3ge7GDoATAdcQa1mbtXFdqWMQPZrM566A6baLLdGNUnE2nbWPZ11ywLLh934gaWvH44iQLYe",
  "key4": "c13K3TdriyJVudQ8SNdk1FJdU1kXJqg5mLnGy92NnmF1ZZB1GSFULC4vxPhYT3HiWyTPCdSRWqgxQkgWTUf1VLS",
  "key5": "mL85wnLzktafYbeuB9FX7DMSG36KxzqzZ2y9LpLrFuiRNm9DQVvNWAQi7p85w1yDRTScfxPRaxpZ22b35zoLRo2",
  "key6": "RwxkCwxDuAnsP3tCNHkW6zXGC7Uby9Cejmp1FTZcaaiVavrVdaCNBNXCTeNQSWkRLNFSkiAY5jWdu5nbitqR9EQ",
  "key7": "3CaNQniYkdvJjgL2uEbgQE4XHLd62UMnvuwCqC9VgCv1qQhSrT7cCis6r2xxnHcXHRuAUSEPymRj2WTTd5sKZyRp",
  "key8": "etULkEcV5c4f8ECnNJmseRgR1Zr4eyPTGD26s1CH3TYuDhXFtXVUvSXcJuU97qb4ueyUsT9vzo696K3ZNKXZA1p",
  "key9": "63kgcCyQ8P4faLj1UMyU4pmjNG23jrjm7Vo9wutsa7XBpGvb1TLQ1jnd2iH6nC7u5JxX7yLEXhyQfzk2sfqAjBBo",
  "key10": "4Y7yhUXmjEs7cH79Vy9eTw5qp9eH7xG9rkFqFYkmmbheiTQvueX6CqQGSVkKApwJCHghak8suNSk9XhBwRVr5VdQ",
  "key11": "42j55C1CsEtSCmmJ127a1WR4pgraNV5smjZME8NvoiHJu2Qy7RiXufmXm3ndVVhvjyzfp9CBdTYwzrGHiTq1vaHq",
  "key12": "4oE9Vy3GfNsQaAgDaSW48ED8pdNnUq6zeJT7df6DAPam7Qt2AP5wGjqCYLCMEnJUjXwW8LgHicYi3m7rzzyXoWoZ",
  "key13": "Pyrm2Xk9UJzqrY2bAM6rLa654AzPBVbEMcVUe1BLYz1s7cfMkL2hAJusu5JhCg9JsNHV3ULnRr1at4SShbhbEix",
  "key14": "2h58wVUzXeDaQiVZBun8Q4E3KsGPXGez58DNug7Ku3Qx1NiUsLvkLuNc4ayuHkDFk1JQKBLbAfJC3XEdEj74mWfQ",
  "key15": "5EsrDFdsxSjWHpxcmBiURfzc8x2gaoyo49LKMytQ236ygGG3RtSRGS3uvVq98W4jP9ZFnwdHTrhDn1YkAwKARBaM",
  "key16": "59T57s7e8aqYbAXKW6EspgoEUmg5Pr5fi5HseUGfmHSkuThy34Fk3xKH7GkPvmEvEgyP4hnnc1HjWtjStsrWQ7eE",
  "key17": "4gj2EzoDMV5k4M83P3mz1extY8231NFTzWFne2hhrBakHBi7ZX3mZ1vdb1adHEPiXgdmu9LooJrNmjsJnF5DN1bp",
  "key18": "5aRNo2rRQVTYeL4eZeaZBwFDLhxfA7cEK7TjRDzKonzbporAHN6anJmBSgAZy9FYZzmAFwjZaW5RxwE8hhrtRAJ4",
  "key19": "49uvg65NY6MC8Udqab1rFsmAdSzKcgzqjCg1gcVBUzMGoAKdVNGaNH5uMM9eQ3Vf5Ep424DUyYPP9gRkeXgP8D6w",
  "key20": "2GFHpn3VnbchY2kszpf6fMJFQxVdhM78pqzgPNbyVJVEfTcPvd4ysFLc73FgM8TZYH48kgiv9mNGBt4bAvxohmRF",
  "key21": "4ErytsBKjrj3nFDSX3cc4FMUHcSebqe9PKxJSpavK5bvPa9Gv9habxenPDahmi6PganE3G5bqSAJHAPXdYj3oskm",
  "key22": "2AuirymfB9MMzFQuF6AeiJ1jaEtAfAsSTCfLozX4jjYWWiVgWutztos7SmS6tgf7yHi2Agy1WA8WVPDdRDENovh8",
  "key23": "jS7JAJ6zLmeubr7wW22D2AXoztMkQR4kn4cH6fvXrF63zGtRz2UtNMvAryvhzxATMhoqrmkY4iUA8viaFZqL5Mh",
  "key24": "2GQor7Hrwhw3MzqCdWjdMwyeTjgCLcMoowNBgsE7b1hXVuVDEk2Xq5CUf3PLFFBaKZKgmf54KDW5txxQ6FQm8mbv",
  "key25": "xZiLYe1MaCntkkVFhNHz5nYFp6Btnj8BQrnK2mpCGd9KUjPvoKhCXdu8Pr6kfTPvoo5V2UQYSVigNCpJ6upNFPD",
  "key26": "5oFTedftDFebegrYhq25PTrawqZsF8gVMy9augSLsPGLrkjN53qjpZZmWBg7StPY4QEjG6isGQVdCDpTpsPJ2bVx",
  "key27": "65am6jvDmefpfEaqbreLJd356Gyb7JtzeBqnN78Mw5PsXqsQnvbvHqLNnaCdqL5d6qEUmppQRKqzW9Fg58doFPtR",
  "key28": "24p7VnWZWWjH98Am6xoZZ62ox3WhZzymaZJDXyxw8UdSo8BhHTPVbh4jjEYeWgzZgpcHXP5pbrPW6nmQ3svMUHvA",
  "key29": "2cFrwTYUTA7x2s7u3bE5gZ8xiWotCCnHDyDSZb5J1UfBcSg3UTQFjk6cAw7axGR9VAiDhbTzkqYY2Ma2JVMhTXLc",
  "key30": "HtLQguhF4g9k7LahYJcf4PRz8Gjd8r8SKvy5erSbDEa4orvCQVdy7kEk2P4bKtaV6mSQAmMxsp8znidoCv9DkLF",
  "key31": "5cXJkNq6vy9LJ88oBY7ujiH5chF4RuA3jS8ASqz3dLUb4pqbJywaMEAMcyBcRDuvC3fpwps2KVM7evDdxumZqHVE",
  "key32": "5KaYRXnKD4YnFtS1BQ1TuofXshHaQ8our5VfxHbjX2BNnwQtrL8YBj7Gf2gFjUqh1pBDAmCerFEFtCMEQEXBpTiZ"
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
