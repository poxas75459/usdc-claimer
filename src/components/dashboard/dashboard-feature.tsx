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
    "2xZN59rFpwGqcmhdVXx4Kv67ugTLMwWgdToJVG3kWwKctUnDhdhJgSP4ypRrTWzwMwcpMa8njwS8w9Eg6FPd5otK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VBA4NWTXBqW3F8rnd9FSg58BLShxzsx5BvoPejUfVucJ1TT59eqEX9AGa6Qu1rxgYGSUyLxdspCsATQVt7yjrgB",
  "key1": "4n4cZrzpz1pBub1YZGBeZPnZENbuVEeFJQ4jnkJrZxyniWkJsjEFBQu1jEuaQnHnm4iDcxNQtVkH9ZuBtrXNSB8Q",
  "key2": "5s3HgQBGUVJmhZsxcvV4nqNF6Xa7fMFK814RNrnBhun4JBeeW1zzGdXk8gTMkwy2dSrMocFgKUWcWioZeuHsozck",
  "key3": "5GiFug3y7tCQT9NFsAJPVAdpwoJ4h8naZvJDLkChGqo9pY1NQgJbhEC6v6dzv6UcMYiSugFkx5MbhKxttwtAj7eD",
  "key4": "4hkgvRSU8BSUMU9iRq89eD97CLCinPJWbmJ3yr2Besj1mvJoYRogMfNgKRxxph1RbhyRs739tzqEP6JRJ3rR3C2g",
  "key5": "3Lt4i7GwL9QR8V4xQW2WT5u74M4oqrE3G6ps4dHxRVXaSmW5LUehLeqU3VEhUmHwGuDY7GezsaR2xPtUPUijz2aB",
  "key6": "2uduxNt7WubFH3csLMykjc89wQyhmqyhGR7wJ18FSvDtsrWGNQKPSPmZKQBT7q4MRKfXLWXavPn41132LdMLqAeU",
  "key7": "53inrRjpsYtkjg2NpvDcUVpRX95cuG1xmsSoHzFRtxR8AEqw1dQbmu5kWDfAHFTmMpYeyq4BmRjC6hb9BxuMdTJC",
  "key8": "Yo2AxzC1JfkKckGFF2XQ4VLsbFRCxxykPSSW1hGKCuAem41etbgLE3aFxKsWn7x824yRyftKJDnLLhYn9Kjfrgd",
  "key9": "5RBpkSia6MjpE79mX7ksUC98vH2GuwDT4B7quJbVb2Fi1wEJD2Pr4BozFwX8fe3cQSf1CfNxnfu2yCK5S34WWFWK",
  "key10": "b6F9DqUaDdLhE42ZNFiH7LwsR7WebjS3woTxHW6Aa1awE8diPXCbb4v4jnRTiC9E1t1YQCtyNmP8zhiKxLrg5wB",
  "key11": "3ECQyefziFTNMk2Noo955mSn2xApVXYnMALJRKPVXpXzxww86WVukSxCQHBy4yPQ1JDsHxxTBxgGJtcd7K5KY5ye",
  "key12": "5f5GgevAL8s7qDMLNRnVytUdtizj8G8LWwmWMXBSyGQ4CxtixgZYkPE49U4pQdDS3AzBnt9simdCzidRBpNv4krw",
  "key13": "4mBXqfw1gw9fNswH2umsQdr9JhvMrBNJsS4yx6Gaw5BB8wnMFk1QxxwFsdemAaM77FmN5559uLSGRrx36BpbN84A",
  "key14": "2Zq6AsZxbNGP5bSWWnsSjDndgAQRmbuxdJv7BsTWQ8wj3KeatkL1qJ5UUv5UBsHQ7dgTQjPgX6wMqrYWJm9Ar6Dw",
  "key15": "5MSHaKVafYFqZroqvcfcBdjXDH8kpTYAiJHG6RmMGZMrZu4HaYaKYQiKnLihpJ41rzPZNHae17mCDXYcU6v2TN3p",
  "key16": "4vLHJNkBhgQzbEdZBAi9msvBxGcE91phHmEnQaxVQz6hX7KPaqkcGrjtAEH3NLDVvXWfzUjWZRi232UfB4p8ysXe",
  "key17": "2Efm7CUWNycNq9qd8g6zP4S2r3JzyhqHHfQc3kTn18kQbvHsNVjRDvuwN69EXipWaarwKgfbbvzyoCz1MVzKdtbL",
  "key18": "djpWwXuCxd719u822a37W4hgDEzM9EWCnBH14QEoUzX2wtBQuhjveHp2pmKfxRdsmDKvsgTbcBEnUNfLCdpwsDa",
  "key19": "47Ca1qRMGaYHRWwng9um1nkJmz7W5BHsaxNXxsr4ZWt4QyohWfrHV8rmcbpoAZtnKvDADUg6UshtXDLPQk2MaHg6",
  "key20": "65MRmUhYKYQcEqLsxiY2KpMVDtLajKsCXKJiQMG1yGtHS6LSYS9GYZbaecAS1AGpN75TeHhhw8vijUtMqape2dgP",
  "key21": "vZQNKB1jBGsMPSsfCuS3iSQsFvqKJGgYcpke2fVjCBANEfbE5j2abrzqQjw6wLCqaNi5vZn1PXqSHELW1Qe3b9x",
  "key22": "66Pbvnyf5WLpm5YPBLPXojT1fP76hE3UZAptfTzNGTLuSbzfw4QoCquencFYqXXWroUKrE2kjum94DT1WQ1rhLxy",
  "key23": "4Vv7jcRrq53otajmRaRfw2wsg8qkogVHGqBuME1ccbhkDGWYW9KbTjLuta592E5qBSVurrzAkgPJc9x7UCPDP4CL",
  "key24": "3ZCAbtohGDyj6cXbZbgsJz2SGSVcq3CCBWtfZQ2JvHRoRctDeC1zT9v9AtQXrZkhAiJHvLXKV5o7qoCWngRS5ohB",
  "key25": "3YENAhEtqzS96NmYJyT27Cw7RFBTq5LZQ5PrW6MXCXei3y9b7BmLa7tH32WMMuyhdxa1vGW8E9noERzBTYbxgZAG",
  "key26": "2tRxqcKT3xm2oe7y79aE6g2q8b7UEJKc5Ys3dw92QybmPHrQWfZk8ncQKU1p9RVwav3R3wAepbZABXhJPp2uDqnR",
  "key27": "28MeM6WGZL25DmF1hdSrZuQmPQWdgixiEzGfNkHn9yJtkBdAoMbtCGc6LzcBaS6ejPeAggesSLUYD95Qhydz8JUU",
  "key28": "31J6AAFaoPEzo7Nuz8dgP1VAVGmdN6qKdYTy3uorbWfnvasdoS4qhmL2hNiPa8xLRpW5qu4FKQgAfCMyEXj7KT7R",
  "key29": "2dwWigea2giwxgjr1BwJgGUjn5hxK3WUYAENwWWSGp9KRxUzjt6J12o8E8iCJMo2b98qdRAaoXmyXNMiC27iPVoA",
  "key30": "63Pd4QcJMncReam5PqtaRxiBgPwvf5eNzApP6zpvntBoMCm2YVqzDcc2Gtra8SDbZYJSVaiczwKPSSp654EsmM6T",
  "key31": "51hM9aHzHyWQxMuBF1weoNyLTfSCnPymXZGvxdmJq8kEMkUJMVQwYGutkTGjv3aMPtrA9Uornn5rMRt17ogyFDDc",
  "key32": "55jdcAjnJLQzcjhBnvLKuxAdYpe5ysT9NTJWXHBK24aXwB9jk4ajsDPS8hMBYxuZKkcKJYN2eg79HjNAq4ThcU1C",
  "key33": "cogKAate1PCVTKc9PWjaaKEitZV3yBS9o88hPRWG4Bm9Wba16S7ZFFM8yyosHC6sGepnfAB3nLPmWETnEJQS5Ui",
  "key34": "2XXBBMZBogacneAFi7nLVKiwpNQxXFYDNCRJemxutPYXofjyB91DayQPjLdHArZaoSxtU66hSxj7KzbseHu6Kvoe",
  "key35": "3bK13z6YPLY2Lw8bwLxjouoQUVx6mkojQkkoXbcpJwJuzZrH2jXMNP6ZqKgrd9Y9SzSzCWG8zH4rTQEBe1StJGUN",
  "key36": "5isNXzNEu1tJi4R9QoSP6bWtVqGeSeZQuPcMpCYgFupHSzQwMvTYMEmqN3mGED1a6Js1qugMrE6uV6MasoTXu2Mm",
  "key37": "5F5P3e7DmcFW4k8gTiJfB8yj9aAm9MgHpduYwC1fRkgrYF6U5GnxaCAs5355BXqAEypmExr4dCHm83u29VYg5wMh",
  "key38": "jB6jYcMSU5MX3NEmPJn37n6ZZQqey1NK6BhuAxQ1Z9QdZaMCthDxWJwEZSTbiRFvvZ3E8f4GZQHBZydhV4woPMy",
  "key39": "YopyLZFww3KX6CSXevmVTGkejB9QTzAqxCkfEbmEiKPqvttZBhYYHy3qYju2Mw5kiFpRCMUCAeKEkt4jqtyUh2N",
  "key40": "28aV26vY3TbpCUh5MSM5KWJ83GbyuwuSQfKjZXZdXUKSwUm8Rdeyny9jK662fCkkQpxyawriKfvyf8mTAvQFHHZ8",
  "key41": "5nhbmoa8j4KYduPWynfQzQ6KkGiQ1WeDdT6BiM648LbKTisiybarWU2AFktyKw7nXJLSrM3hBoPtcWg8wB5FYzi4",
  "key42": "3HQk4FTybPk3n5JB8yoUhL23GdyV8mjRZSgH2eYKChvJWSopz3ZjHrMXLkB8N6QCeyAeoVpHvuoHLLbPDVWU8UbP",
  "key43": "54phGenqz9cUeMnbVvyUXWH3gCjFyvUe251ja6KdysUxiwZSfN57SN5CNGHHJiDquMUhf5vLS4iqe71S3kajXG5N",
  "key44": "T12LaohpxzCZ6884aYHpuZ3zMTbmgQXhVDuGixzjWo4JvS4AoZpcEQoFUtKNCJAWt4Wc5VWfPKviV5mZr6QjXtv",
  "key45": "31yHdDjxSmvHWbmQhQL7Ap699DgDRyN2T11aYgjAhsedcd8vW1b7WSBbVwE5MXmr1b98pY7eBt3c1vfJRBVo7opR",
  "key46": "3Q5xXeyzM2EQLAL4fDbKksMmFx6uMo7JDCFUUQaxwgF48jVzYzyFqCEJiQsFyzSZcnNDAY5AB22az7JdDKJFhLvH"
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
