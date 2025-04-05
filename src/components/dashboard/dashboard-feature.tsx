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
    "2CRFCjNeyfZ2Cgh2jporbjMRHkzuqesjzWu6qivPZwynzYQdqb4gEGkeZPBRCsiiNYdFoSqfAgPiBGY86xrgefzt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DZr7BcQjD2SnihtXFkbpbY3BipjFZLTBeKc4tYDeSGMxbpYK1onscB5kwJNqudinmeiPvRy1sfdZpyXB2xJrwCF",
  "key1": "5y2D3w1SA4LoxaEADZ25LkCWDCAkhu4vWhMi78UKWmoSAaozXHTWQ1EdKD2dbYfSv1qWXiNkQspYiGNZcQQbp2h6",
  "key2": "4PaviRrceJ1ptQTz7kP7N5zXfvTCjUFKiVFaPiRdR2bjyaC1nzrSv8ifJNXn7ZCkgiszfjtt6fxRGjjgHbXUXnJD",
  "key3": "2AbPbhaAprGFz1u6TVtTy9CxbfyY73wN1fAHdknwapmoKTRLGHkuiCgPg3Njtbwg9S4PKoXaBp1NhvDYvpoKSH31",
  "key4": "2j9fX5Jxbob1dyPZwXWx6ie9UQzK88LF7BbupCgk6xZUR6TMqoJ5iLxovsTUBTQfiFWQBCTcTNDvuAEC4q2m9pki",
  "key5": "Fkq2Y5edgtGzMfW4TiRrMViSZ1KF1VKAcSwSkP1wmrVcZJSbrpnLkcFLZh5YfBZAzdUeeWeXuB25tvUQUKtPLNN",
  "key6": "eanLV3UoVCLn9i9HPQ6HDWzPEJGWc1npVj5rCiwf4H6cDhacvSxe4AfyJVvY13D1AYxVJTPtnfrUUWp6ajp2ciL",
  "key7": "3rbX2XmfAf9HAr89Re7z7aQCVQVqSrL9bNWW6d759j6xPtt1nFEGUhRv9V7fRwFUn6thEXh83u1iqZzg1w4aZwbZ",
  "key8": "5gKzVweRGW1inU4Vji77GCLTGBx6w1s8tANMBgscwuHTvP8CJLhdEHWsyCd4wXQUH35m7qufP9skjvby9gqDbCPs",
  "key9": "4A5yLV5qHMbUSaNHSv7AQem953jMBKDHWd1H6rgQfBQ3Tp3VW1oGP8UmjSAVQGky2tvnk7894QerVgW9YefbRXDD",
  "key10": "iE9T5fcRvoZtV3HZCqhDYoN7KAqCY6oDJwjYNLHzQKf9Rg7bknFZgixadZJj4ixEa4EMNxXoGCy7ujmDxTRhSUu",
  "key11": "3gboEuvgFTGRCaSU8RvQXnDnNN2hgAUS57TZ5JtnDzsRAH448CLNuAokAPY5DN6vasmC69ozya3chdxunjQ4ZXtx",
  "key12": "5UVEsRGvSXudJtSrAbvGSgxqspzqngyVWHaNfsCJzFhYe3vDMbzi1ubkrsM1eZAgGvqFjV3H36n324cFdsN56CkP",
  "key13": "3r395AeZDBvqysJVDexyC2k71iZNnMCdcQ95zSa9di8YfwJvbkB7hApR9yqjyrPfw6zWisxVZGaZuNvVKpLHsKbx",
  "key14": "47Voca9a2wXyDSGnUMAin7CLxAJPLLjcwuqML6FHZ1X1V2PcVbSRvjQGsvYYQEM2vtLi9Z83XxRzcwYzwqYgtv4q",
  "key15": "2rgPe1A866fnJ34xkSWGSZE9ataVbY6UsrsUHiZxWcFZ7zAdVjUDMjxXBiHUp9t5RVDkGKv3SL8VKBZNdvScCJKc",
  "key16": "9ZnGfHD6U9iq2R8b6dYuQ9fg3LUyGS6GMZDbDQW8VSUNx1tcaK8pbKMX8ojNoVr66AuHzzLjrUZ5Fc1tGE9XYDV",
  "key17": "4rWKi8EqwCi3bNcuHStkS1UozzBDBRXV42jwhwjRZoKrj4w6Uh55gARUrXWeHCX1e2z3p45jsMbtU87Ry6M4xKxZ",
  "key18": "3HrpUzjR7Hah96UVuSsc8PVYigh9yvNfkH34gBNRJBwVLkJn8FFiy8vaP1ggnAfQzfoo13pZgQ6D591SC1d3RDjq",
  "key19": "3Y446ir4hWQ27iCYEsGo8rZzccA7cJP3aoHwzgoYq1rF3MaDUMJSBCc9YzPFuid9Abfmd2Z4zYXf52z2BG8FHSKr",
  "key20": "3x47svCdChKZjXnoPtLQpGp4sNhZmRD8Q1gDyMh47hq5FE9hwFKREcEtXhAxrsFTaDV6VP4VFFiHL52FWi3JdcQU",
  "key21": "9w8RXJBCv7w1ifP9FrFG7EqvepG7P1Eri5CrVqidQkuhWhAa63tPqUCkyXxdEJqwW9Te77oguSD9jxSuvzxrM4Y",
  "key22": "2b7wGR7cy8nh93QasJmHtWfsJJUpBPjWPeqNyGrPwGeVNtJg4WMW2q7LLGoGbqTmrgnU85CNPZ2J3Mxsrvy7LSee",
  "key23": "4rnGa3NMXN74A4kzFygNVx2neCKjUJdqivM3YkZh7Kpyo64ysVseuBER2F5MdcRwEpfNioUwwPoxrymtQdTopgVD",
  "key24": "2HFZyjFGvTk2Z32nKyLFFFdj5SPa9at4m4L9zwteaKw61eaqTQ1BfvMGXhvLQ6C2znDCqxmTjuULL4YRNDkZ4b7n",
  "key25": "4Erty4zViqT4HAEX55XAUcSSDZVwjnGEEQdUzxxkYKoBYqmSvQAawKyy1drdiAgyNoDFq4B8Wau1bGLXhKuD3aC7",
  "key26": "4ktQUkRqWV9ufStrgtSQ5k7oKRZJLBb1FNq5TbHuYpiGMsSnMxzDBjTwQie7CVfgimVzbZtsCf3ZUpe6KeKh9AWu",
  "key27": "exKmFPx5TM5cyLZ5rjDHatTB9tcXeLzp4QuvN6zppF7Ss5XXSE6QLhJtpuwyzvMEi5u2nvxiiQBLShkDKwg5MoM",
  "key28": "5s1PCWxRnd7QJsARS95xcqc8rVwSj7qYcnGyEzRCzZE63LRTBUM5pXfskhpsHW4SbiFdgunR1F4KeTQcfR32g1rL",
  "key29": "386TGkAwFbLxEN6S9V7AthpjpWdMUZQF1Gy9m1ANzU4W6qNGCFeiZiL14nN2LftD1kbypqAfpRbSb5hRmY6UA3jQ",
  "key30": "5QDrksvwD6vjk8TNgYcVBwNK6VxDZT6oLdwk2rrXVUnsLDpiZTkLRm6EkfVE72YzEf2GdH8UNaAVFfLtgCp9eU5o",
  "key31": "4mW6FRkNyDjY1zqeJBaYpefBkoFp57xjUJyC9d4qb8FcKJvjuDcxCPfzvGiAyq6crNpmENJ4oVqbybfaMwioExwn",
  "key32": "5FdFMdmbYHSkeoYPv6YdKCSrJz6paV3bMQ9hDomehbcCfjRFYJ5LZzcihcHU6MJoWTu2LX91KdrQuABotbBCGBHC",
  "key33": "2nUia6biQSaDHxyhMYGng2nQbx6qy9QZvHX24ZvXciqyhafXUqBwQFBYMeJfEHnidZuv8kMhDukrrxdqEczmnFXJ"
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
