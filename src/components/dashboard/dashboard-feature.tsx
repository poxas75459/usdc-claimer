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
    "2PRe5K7eKeBcoTr1JkV1uUkJt32GK4Xs4cPgTDQRiAfvJy97sM3i84AojgrbRJR52n4Tt1wMTzrQEjK8kQdjmiae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F9uALBhVGVpjH7WYUWcdMSNCFnCMp7DDts8TkLc6iFvdGr3B7Mk5DWbAYipdfbDd1CksLgm8PvSskZ964t7TUwh",
  "key1": "2u86DGkRJ8tqYS8VgcUYoWQPA2vgboUwAPzU4YXB1w6KuE29dytUiSK74qtEwLKw1DgGkMkM3RVMvKkjfFPHAhUy",
  "key2": "5tjYoUVxxd9NBkdw3rELkhyxJRtrwsFQ9bgin96E38YR9HP91FjeR23g5YUTUcxGBwXnBVAh1QaoNVYYKibLQimN",
  "key3": "2WHbAPb5vWSQ8XvfPX8TS2ihKZEucm11XTJMrcci5sEWdFwssWHzeNkxZ3x9L9JFNwLQU69UrtuU2KH4jnZby2CG",
  "key4": "5LXnjCGYR6nYKcTrzGJZW5HiELMqcWoYBYYT3h4AqXiPYHdTsLRmDTAxjisqL1WBKrf17c151GG6fjbfpffsJaBf",
  "key5": "493zSeHWWruwiDcuc5KfcBQUfi4CAfNjVjbWWREXdHuacJuSLcjmb6zzcYDiFVLFBPSSRhmcj7fShAeZLQVpvF4p",
  "key6": "4J9fKJeKxFifKf6tTododZo2DgBmYSiXRMTXonsPq8zKB9ZSgtv2cbayamF2kwQcKNSnHnADfuFe7WSeB3UcKJUD",
  "key7": "3Bh7Q3CjABaPs2e5WQuAMviNxzH9yWyadjYavTJZu48ZKByXiaJZcGxSem2dUi28n7KqYMG9rUsYhTx9AZgGSjpW",
  "key8": "493y2unpUMfUGBnjTxYX79TJroFmSiEtjU6pvsUBAnQQmQQmn82f5qGBm3ABpPJnX38eeWq3CB1TV5quAHrer28w",
  "key9": "3wy2hog75UDB1a7C37bRWnxyHj3v7NxyPtGGS8qDbmPQNdRpnE7CdRtoLf143E7Gvu6dTbzHCQoqe3fa8EWZrAAm",
  "key10": "58329eVdxkJXU9YDD4LfD2yqWGizZ93YdNA6e8AotuyB8WsKmNK9y4ijcd2r7HzhZ1zzyJu6N7jZUBENGZCdrVU1",
  "key11": "45hBHDdDvgRbq1vmNe9VwbZxx5n8AXF1gAUQQouofKswu5bwNdN49dDvAAdxfqhsPT6jjo97noPSBWG59XeKXT1U",
  "key12": "3WfuhRcUAzSo1kHAGQeUaY4BWwT9yWghiXG4zK8tWavLuosGc4eFxiAzzw5bRWPxYw97EYCGF2qVQmpuByLqU9xS",
  "key13": "3tH5VuUHwttPWDDenXiy7u8nCpQhy5TbeM13tKZ9MwgXQWc9bsovMkPE5yDVnZtUAosBACzSHBTwBGg32PanhG1T",
  "key14": "2ZmQMAXpfSi4rD3yDDq5EStAynfnXruRbsDzkLSxML7qYaWwoCjFsN9r3Waq3Lt4Gk4eEgczG5ueNwtvdr64NfEW",
  "key15": "27MHjD7cEGhCspw3AW3TpNH2JsvHXnqdPD2cnaV9xd45wwnBvsG8haB3fzDeFZyEkGfGgrcj1ZHA4GwBsCtJbkJc",
  "key16": "3S8JPdUsKt8fpkUCQqyYRcbpisEjprSxf2PPbhEDeRW5EhwHRhNZQJi47oW78W4MoqtYVN95T3rhxzs8LvwfntEL",
  "key17": "2Dj7qb9Drcn73QHDHLCLTyFrMstHyBmG3CGs3AXaUDeVozfQwW8rAgBsa94DdCSin5Zb6S4b3Vn1FdkzRk3Deh9M",
  "key18": "jaD1eaKj56Jc4SVP2zjaxHDsN4iwRbJBaLQsqEsazZBjwCotrHe2yBG35MD3E1SnCqWHxPgd6vnnbcUTeYpHKTL",
  "key19": "478gL8N3dv8964WvSyfmA5etSXDuNcEUZGhVT9UwqwYSzwwNJtF94DessvPWJ7WVKjnaQFUfjVByjDukFuUTaHzU",
  "key20": "29mayajuWg7Pf3SfRBQJGEL5qtY3A5otP57R9ZMz6hQoHaq4SCRTg7xVQ6zXGZ92yxfpQqoaU1xZvvXZn94b1GJR",
  "key21": "3kfkNhx7qJkJHpTE4EdxiAxRaz2JKJHfjpm5igYyAWxko37Atncf6U16JniXmsJEDomeGtaaPqXXtew54hT4owUu",
  "key22": "3b3yD79iuaSbmRYRxj1tYj48WcRQn5VYXMTCdAkx4Jf8uCZnFdG9wx4ijrGazwN2wyxnfMSwEsyDiBUv56QoHLtq",
  "key23": "3AhJRoYuqodjTWjNQzWU7f7BpHTurpGMNsi8SqAcSpzLB5dx6BWWVibAcmFWXMfSnmRmtCuURxJavqxXZsWCToXs",
  "key24": "3Z53vng2CPSYHTxnuxxvNEhZkr3yByXTLrutDG4N72qe2YVq6C9GiNpBuckun76v9hCTucUVBrAaf8GVJhWeyFq1",
  "key25": "5Z5ujtVrhnRGt7TgG2UGpLyjnHBYcPf9fy8x8daiQf8b7svVnEnFnvP7GDHeoXjUgJjrm4fiABASCaQPkEe9NXMT",
  "key26": "5r6ugz6hLgRa1ifcxiFmw7Lurw1cnpNNWYT4RQChSJdXsbYy2EDZDnbZfdJck62F69T9dViNYKsTQRn9uYQ3SBBV",
  "key27": "4AoW3wM4FrsYp4j3w25wyTwMiLomn31aUesNQJF89SxYD4D1w6fuod8GzyMu6PjpzGm1ywFepjvRi2v29h8exHZt",
  "key28": "2SvVHXbtucWa9wd54nJcAz2LbTAh9TXwzbujHveMHyBvEdWCxaFhJFKaaEiUibdnHjrLbg4mahGTu9BmkPdxiB4R",
  "key29": "28Re5YXs6ervUoKCrCCXtXHZ9HdC3WMW3KxBppX9beJbcm6HphSuYLmUgP5uEzdd6pdeGN12gCfovUvy5R2EFhTm",
  "key30": "fyDK9FJDZnjZJNKyH3TEHjsFCasbbKjAs9iwzrwwhQgTcz6Dd4m1YYTgM4iXXqbXTigG84LZFpA1P2FsR5u8AgF",
  "key31": "uQGEiZ6sVyCDohH55jALUFmHQwTkPhwdmLHM1yugvFhBEbS4spsyhzvmwkPo4ESu2Fa6k8duN2XG62EituqfyLT",
  "key32": "3K3LmPQUqrRb5JQcQHJV1Vf8oYB8NiQ5FMZvGcMworPSY7z23NhwDMBV4kbfu7Mwi6sPqaW5fudgpfr5Zoa8BaoX",
  "key33": "31Qmj1sv8TLuwxqpDBC7BYr8J5mjE4z4cT8cHL3sQ897jcUNGHCtX1rTX5nXHHpWVdETM7pLe4Hf7iKcx46otRdz"
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
