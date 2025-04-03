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
    "2aayfvBCRVjmAwdL5dm2wPtANrrVYWRr4gPKoYnkCS2aXFKUK2tAVB8ExMMgp3kNH5Mky6byxxWbuBz245QZ6rJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rSi9kRqEaaxaocochbHD7Yzk1KS9PUpojCdXBGtyp2pEUyU9fhivkBbNeWKfUiBJY9g62Gh6obrPZfN5PNM5dRa",
  "key1": "5FBWwhvCW2U2ZnTnicnMekRF6Rjsv1hFJ2CYGSRULegRyofP1w6gznbJFdyruVS6uKBmEoyENh77MzKvXeaFFsVZ",
  "key2": "Qb9xJfpNyuntN4qimRgT55QNHBDz4EL55i38LE6dRpnzLR19N942rcJqAibJXwzEh7QiVh9QaGuq9bG619gmRa1",
  "key3": "5GJvJHAc7opJJf1t1X5iZMtPNh7nzpqFj1ik728NBpt6L36HPNPMd8xWW8hHPdoyarVoRt6eddB8u9m8sNFQ1YQx",
  "key4": "3bg1WR8FpRYAPqLYFf7cwABs297j9bC6oWqLTaSaZAPh7TLgZ6jnbTph4UtSVy46uUJpfJi1jWwEnpqDUewT1J6k",
  "key5": "oV5ZHawNYNz3WFxhUUqKkwcfYukzWU8iZ65SyUgTJYBhk1vaEbgR9GUTHyeuXUKkhanuQkviTkMqHLwTeoEim3m",
  "key6": "u4kogr1LGsYRmJayZjMHkhhoTXhjThkrcQApjbBNDUJHP9eWP6GNiMd9B83orM8XAJmh1tzifiF5hpeXv9LiLEi",
  "key7": "2toPsRWdtEttXMmAgwaHg2rSS5o2ckVVGkxutNNztDfFGFp9QpSL9LgMy6Lgkf1Ug9Hvjrfy1VNQKQtYAB478Srp",
  "key8": "3v4R2UMGdF789T6xzgJNBpWquUuEeyMGsWuX59Can4q6kAfSiVJAe9MVMP4ivPvwR2jkxXpi6xxPFMzLEG9JTMFR",
  "key9": "UJHwdvjFySNHFfoxUduuiFA39ZUhYJP7RmAH8qMA6gCx7f5t1624twZgeAzoWk1YmARFUf7bkRourQ8HTsG9P4T",
  "key10": "3vbF9n5a31NrTVw5mnZ5tvdyFs5GgnBqV18Qx6Cwp67EY4cNqKvUgYvMiqaAQAXzqPpZDUpcCRkC7xDm5Mo9YoiP",
  "key11": "2X5jSYhTLoUWqc2Jtqga764HRK7M49PtQyXqavoqq3UNXCmJFSz3X1NckjEr26ctpMquYE8Kf7Mn3uiiV9qaNMwh",
  "key12": "4dSuA1M9wA6EjtC5hXSaV4QkhobHgLJ9NE24btPHziqYMMZ5fpD2p2pYqePB6QPMe6BVMzHXL3er2mFi54WXNp75",
  "key13": "3tFDFaoWrkcFLY6cUnsMk9nJ1Abg6PPV6YYqaWBiuyqbqLZ24qgLztzdecBjpDw8diLapwEzZgGCFnKJDkHTNdgz",
  "key14": "3iezZ238j6ebvJzhroESaQYngjhXvDyt9KsdykH9vmVaFqEwFUtsgNQD6UAzyQLszTGhqJTDnbXukTTx7FXYXLF4",
  "key15": "57T75Fbpu4RWTiSwQgXfq5P5fVbbmjkUff9m349DZEkGHcSoWyB14VE3qcRNbq79mBk9sq6VCSmyxLVbLgtrfgLj",
  "key16": "552eXUGG8GAUW6cZ9k2bCVmgRr1kqawybPUu9qNWxYaPs9Loo4W5ARfTjajEjvTfTKffgz3AAopqYFAG8CRg4nV3",
  "key17": "tsQS3hY7241BxCSqYSvUEKWZ4dfeiQLiXoXh3NDWyKYvsFsMxcPYQbfLbdggFsqtUDoREhiKK2agKYxrUPUMxrx",
  "key18": "2C55iCSux1GYsGN3yMW9iEd8KAJooNmKpE9c9ECzXwLQkzXSbekHeiDEsQzDodbDrNaZfYJpET9E2ZghbPGEHrQy",
  "key19": "aqgGizhVCkEtmj61XwGe8Cck1aQaZWxQiMPQQAQjmWa6pCTkmV5Hek4K6v6zquMMVLVcvqVu3FPRuVc8XbpU1t5",
  "key20": "2N3qfvnk2Ftu3seHL9ZPWB2K6rqvxMwsX4xBjiLgUzbqTYUVQPDBsUQQuXrqDUgZj5Y3SnV5YTHFcghWAc3g1BG5",
  "key21": "3mis6urXqrCLy58vfykP4bhBMocnMrSDCfyk31idMnKLUEGQb45frgj1e32tB7fo51gF7ph4Eyh8NC7WFCRfDBcr",
  "key22": "53VoAVhzrMFrqxuyz8yoFuyfj8nEnExgJH33BeiUtZ1nwRgF8rWHHaTrQujdxUEa6W66xUFEGj2axsJiKYdXUhDp",
  "key23": "MSZ1ZVt3TauEaoBQUtyLT81gqSw5b3BsaQ91Pf9J2qXkh9qzSwipxUZyCF54nqn8nczs2zChRU3gE8QYm9UGmsX",
  "key24": "3KNVoWrti6Ly4nyVAH4v7Xo9hSBWe6zppKHPCpJ8Cy17MY1t3WANW2C8kVDySBsWYfCTT6kCMCqhGyxzdrgRvgZK"
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
