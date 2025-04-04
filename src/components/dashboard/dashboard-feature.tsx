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
    "5keSwHDGrpwZoRYBqBiPKsMyRoNAtXxZYx23fdvGmrrtQUkXZ4PN5bayxiKD6kM53Bx7b9AJbkdv3v8RVkvDjrXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aufFXNMG8vNdDPmAeXsKvo6EwfjoPPck7YATKUz5bHTZUo7hx9iEHD8vA6yTtU3ad8t2WHDFJHcHuoiPRb8DP9s",
  "key1": "31hX159FT4Sgcpc5oEwb7qydmQLGBtU8C3JC6YDsiPfPc6FWEgD7SFCjpx5p2BRK97NE6aEeuH92eb3QGVoLgNgF",
  "key2": "aHi4dZ9hWATfVtjDPU4QjBwvmhdarUoS5iBEUkWP6z5GA1KisadLMMq71NR4cVEDqeKii5rVQpN5ofQrmt2gxiE",
  "key3": "TQBGmPbVakngv6fSuXXQUUWi38suDLUBdPEoVNSs9DbYca2XH4VwcCnt5JzBK5iAtCWR3zX87TCnf553Qa6c9iL",
  "key4": "oqyjZzGi51e3E5hRB5YufJ3WgofoHhv96RybYUpc8iomMwoKp5Vu2s8JLdwWV6SjoH5dVY5SBhUxu6GhYfvKtFt",
  "key5": "9aKk3ZMPVo29d2ifx81YrPHq51SUyYRYNw3ZkVqrkKWqDxMd8Hox3fgQfLfwEzMVJsrPAKLiuWgLUK9Pux2YjRM",
  "key6": "3ERVG41v7EbCESkToFVo6pwWjf1dKRUBtnXTEHN3J97XVYky2vHiMo6oe5QNNAt8WotXwGV97ccuUKg1h8fbEoR7",
  "key7": "4NqmDVpyUHxas1xsGodSk1m316SEEURs3N5KfEQDr4a8DhNoNmLjAzbN6x6sVYYadzmQ9GpYigG7HxoRAoSmYys3",
  "key8": "2k7EeinA5J2psg543Z8jcMAiDfUdzWVZRk3jQw2AR1yeQrD6GCSymN6ciaefgrxogCKF23Gi8Uj8JRX48YuUp9Gk",
  "key9": "5srw98vbbB4mMHMAQKKRRsmdgvQuYG3npK8SwnhoZEDDXRik6jnAeEhw1KmNF54ZRSEH8t83qZayidWtUAzA2aXm",
  "key10": "5v2HTZxUMiJNzqJNGh2YnYEQbNxXav5xcoYLntY6sj1rsiVhtCdCT8U9VxAQVhxzVCamodhrvL9ei2WPUrDraryq",
  "key11": "5hpid8nua14nbosSib4Uk8ADFTtMAAFGfBHJhYqC7TRzfSyLGXWWhJdUgmsuBq2zC6Mx25D5ivuuhNJdB5eMivQD",
  "key12": "3bauroouxWEgG217DtndAiDcpV1SzjKzDHCm4sJt38d8eNgNVMfhqjQp1qrZ7Q3ejgdxe6yw7BTmaAJrw7K1L7wr",
  "key13": "2QZJHhyEkXXps4EcRuJrUzALM6zmF1RmP3EL3qNJj5ZLASFzCLmRmNv9Cne5tGY8kK1jKzvqeUJaFbRcxSsERGjh",
  "key14": "4wPKceD8znKzNpPaWrEggMyPYdnUTTVMpWZptqjGEBDeJ9YEarKg419zJUHsZAM5HxeVK29FFfEsy3p9T55f8xNM",
  "key15": "42eHTa86fsmQKuhp5tB1p9yFrGREsyKjz3G8ha4Qvm4QKwvgX3gwxWCu8eBfL2cLxepwvRVJBSZ7wvHeq88BHdWE",
  "key16": "31CGDGGgdi2i6HaMeJyMexqTMVimcDGEm3mfaXe7Mk7xB6SWHSukg3QHfBoejxLE61xeYLYNJVNRccxCmRqQgLSt",
  "key17": "oZW51SUd17LwQWar9AgtqWBvThT9kJnb4qYoUy3NKms4Bz4vMo3GG3p4ofGdRckTnThmvujZ2ARwjg6EAiNgXQv",
  "key18": "66t6BHQu1yFa1LwgomiPWyi6yxRxcK1oq6tpfDr175QSGWcqr1hH6fBnHpHoDaAMcgQcBgYKrcCuh4FABiQ2nTCE",
  "key19": "3RBS6mBLu5DCq5BFJuNDQEx23Ae2wb97f7yHbh2VotHJrak4szFYfor7FTLzM7MHiYKULtyV5zySA2ES32AVu4YR",
  "key20": "4V46uXU9NiGtUPsuVNtmLcoXay3tZeVAgFMrwpkDdp7cr9wS7ceKprtyvrXtbc4fFHidRki5A7QFCvQmTrU194xf",
  "key21": "4VxySAuevzY3Jj64KjnNtE2T9XoVbkh4SkXm3MZE5MFWmqEgurf6JyNVBdzwuN7cUhT8B16DEEk2uPQB1HZ4CpKa",
  "key22": "n4E1F4toBiuhvR8n6vWgKWMKJfXX1frDLNWLQen8SQzpdpgmvJ5TUD3WGfZ8GGmdzSrYsgUHgeN2T5hhNnRtYHt",
  "key23": "4jkNq6jK7Wc6LiK4zLMXJ4YqAJKJU6zQuccDjVH8oCsDBMGQY87CVjv9ohpnTXMzTSBVim1DE1vWwsnjCckRqSVP",
  "key24": "23Asns8Cq84nLP2VjDR2CEiTNPSpJCZgrxGJu1iFqzZKav3UoBGZANRHabhik83GsRG9YeD6JZPBVi71yNfQyEnb",
  "key25": "47oTXukqFeGd2VQjUMvcPYBJigbXj8Y9L63jtR9aRidR1FndUrmDs5rEo6xfJM8K7fEZWpo5hfL54HhdRBxtJ5NV",
  "key26": "43kSem8iHVEdZC6U3hqmpdu7x1oozLk2dBydMYgrCqWUBDkSaHkwe16psLmVV9FGnyYG9twmoaeW1evfh8XpEYtq",
  "key27": "4ugDhBwCsCuoxAxHPznz4DBDRU8ouziipNasuJ4Qw5GPew775q9yZkjxU5wrqqsV2v26cUzPXCTtW7cBTgHrJUj8",
  "key28": "4hZsF7Y3rqwJHRe92f3bUbA46sHPYiVXJSvD3V2eYE9iZPUHs9kxSNMj9TjquksdaAae1eHS9prdCbjVEnropcRd",
  "key29": "2vLMysq37QWgrUtjX3PeU4aVidP1sF7QbgUmxR9CjTeiYqvx4sTwhPzzLFnq76Cm7E31rpJdwCyjshaN8CtyvUWv",
  "key30": "2XuKxggX93iofbtmYYf9Tfr8keRV2R9W8iwhJsjoqJL5PYYhcaLwVRr6HGATdWXo7ipK7gSg6CjgyeLrgVG4YbfH",
  "key31": "55omj4KJs15vcWPoLhX3hoa9hDL4KLZ7CjgkCccLLtwqFZ4utjiu9PHcJuFc3WK1de7jkU1CgQmnPN1a8j4nzzVg",
  "key32": "3C49akforRNzbuuQbstqw2QiQyXHdKaWvAnGjX7bVrjQR8TX8PhZow8wV131SwVWkVayQ4tbmTQsHUmc3vDALkoS",
  "key33": "4tRTfgRtGRvpZ9MCUZaeJQ6xaiyzE45XsLfCYAcpo7ozXtcbKA14fuuhhiYEV5JUbqf6367WZyDMfwG6dU4fwEBK",
  "key34": "2PFK7QNg3QePe4NYusAiA7FrJJQyFTZgq8gKhkGetgFtPnshFZXQpBNmiDY9LXVNsrTdhfHsoHYX4JekZNVsQkZV",
  "key35": "4mufFGRbDQaubP1VZyiMKXH8fpwLQxUbja53QdfWaYXE99AGaHkF78iUbjskGZkrZo9gespxkburf574keyLosyM"
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
