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
    "5d9326Uyc3CSwk7Z7Wg6nYStVFdVgqAfvtjy1XJNHaQ6m7WqMUHwPVS6uJGxzyRakV8ogmJsz8HvAeRZaHPN3g6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mBiP2U7PF5x3W8d18rAnqyH1C1vLbUknKHv7LiH3Ct1HtHqye9xy65CNRQPjxgziLFhddEx4LWqZjwcnr7w5oTc",
  "key1": "3Yeq2z2UtjWVhybRx7iua9iDoBtpeRxKceUDbfAZP57F14BBjsHZzyn2cEpdCwH85yfLp4CH6n6MnAg4xgnrVshh",
  "key2": "65C9bDjh1BtZc6eJ4BTcrY1X5PUR3iwLbrgTYSoML7p4D8ucgcJTXFukqo2RQZwHV1TPh5caEuqf6FHLs3erCSSZ",
  "key3": "64Wfcjbb4MsRd53qmRZvaq1NsyXXUukBM87Ep4n8MUjvoeRqVrSkqHPCgoheZprnGdp488xW569nNaoL4hxkzCKM",
  "key4": "DKwzS3ZtTreMNNCt1ThxJGnPV6wK5kitSiH9H1Qn48jt8KRowZ9za5PCKzucgJ5G5s5Es9AfSbYUwxs1e8gp2r8",
  "key5": "22WcRrfjazjwFMTzybR1NEi8YNj8cpjeCotecBHHQbFeMeyW8udADCGj3o9uitnnbsFTgJf2o99huvmctsTSRWDs",
  "key6": "B1sw13Ta9RoeU2DUdjjWggEDQWqiPg16LiB6PKqwCzbQYZVpKzwNY5NNhyfYrwhaNHL5b49VJtdqMsCM67FZqS8",
  "key7": "2EVEkySr7anKXf1yGxQTGbSoqw261YH9CLKjXDich2djvkzQk3AzS3eCwEfcq4FoXfTF98Q7t1W8LoL8Ax8fX8Kc",
  "key8": "xdVBnBQnYZg8ohVpNiQyrULmVtMv1F2gaJ6i3FBAJw6TftERu5nVpL4V5XMMxGAnMRz2MHVwLymDmJDV1dunefR",
  "key9": "2YGZMB1qama27u1znsd4frG8XqQu5SiSkKiCGQYc9C9jJeW17q7hN43foqZhyk47jfaxfSunrUdr2NQN9yGNzCJp",
  "key10": "4FJAbjBFd8CJUNWi5JiXDg1TAEELnAPcQyvA53PV8NfzFLd8mxUA6LtukfPyVVXAXqULehKU2X2Cw3yosPhgiXru",
  "key11": "4AMZFXoUQfFdPUMb4RKFmDgbska7FTXTAeAbXsixuePMm3ci2Kh4Zt23JgiuCNHA2yqpHNjqQGG5KihwkDzssSHT",
  "key12": "4UkcEzQh2ogBRUuQR36fQMVqE7TxiCTyWXZrN49GL71JueTmHG6Bz4xgMNbMNuF1UsEN5WHPRH4NcfyWH692CA8",
  "key13": "PFmtXTb97t7L4NnHCcDNKXpv5zTaENREmGBgGvtg9tG4YVq6HJEokM9btd3giPzqrZa4VSRTJyVR6bJpgzwdCcV",
  "key14": "tchAJJB3KB4GppP29kzcrkqRJAYJUYgacdRvUaFhJvXh4pHJr8hzExHp83gtWjp58wro82iW2FxJAin1dBqoM1e",
  "key15": "Z2YJr2A1wU3BQBaHKi5akZveFEtTEotvPSvdiEGeAzV1iFw6WstAigLZSVEd24ByCHVKB26RfXN5HhV8bArkALF",
  "key16": "3t9CBefzCoXS5g2Eg88VLh7gkNdjsjFgn5HYkNiwyCNwPGG1QZuY8HMyHWqj3usULndrqrymS5vW7hbRNNXCMBKA",
  "key17": "3WM6arAfdUZUCRMuZPbvhHh6qtgMJgGRiVsZv9WydMxPnVBVEJs63h9eCNur9rV4SBPSEfiFRdv9seMR5giyX1Lg",
  "key18": "2XxQWFPwRAozievKRkXmjymWbzDUAkvAFLSHzVv76phiHyRx2tjVAcpSxzjYGbMAzw2rFStsUtBZL9iZkCa8FpCu",
  "key19": "34fMACLJtKzYZRPgi7eecSP2ypajSj3K8jj3MWSvcZupuf8YRqokAzQSSY5bQaaqrgsa2bEzCN64amtHdvZVBeBU",
  "key20": "4rqM9Jnma66VMcEvRnUhC4CXeUE3iGPji4KsJL8iS5Akn4cZTvw9okQJVXoQX9EE6J7q3uj7EL4yuPQ7wsu5kMgY",
  "key21": "5rHpaGDpVgUjRWP62v9wLE9Gw8qknHViabMWtfR7APtCfvzXSAHRMkyx2L26Qts1jEvTBk5y1dTzvf5HLxaKdhCL",
  "key22": "zyNvaqL8MvjsokWUyME4yyTFjCo4XrMPZeULa2kxobYYRP5mrfMTeegmA8PLMvvNEJ9eCG2j5eYYZ1Yi2krNNR2",
  "key23": "4gDjjDmfBGcoidy9Ahch5BSGeGi3iyzQB5hPiNfqj2oMSvm2Ydzbk1a14BauuecsqShc1suetBK1K64KE2wQJRYS",
  "key24": "2WQ8czR2CwX8RwrB2Ew2JSXTCLgrGd5PNxej5z8uRQocUKkKfcVahJcE7VoEqeh9ZpBZcTfn1gw7z2LXQbbY9JLn",
  "key25": "3wR8wGTr6wxbP7RdfiGpiTnS1WjrKFX8LqodoBG2PrW5zogEsgsB46htpreUVWpZdQ3ob9iTvWrBXv9PWXwnFA96",
  "key26": "4FuVzyRhzHDVHL1GP7WFmL2WqEDneHGV14fNnevRt8CoreeNzRcJiBcR3FFiRuzuuuNT4UEn5kjeTroctNR7Stw4",
  "key27": "4rfox8Z5RHnehS3xFdXSVSVG9jxZCdwu323HrQXJKEzpZUNWGY7uZSZSFi1N8a3gxdv7J9kjqhhcY1hReiBSmRLL",
  "key28": "66q3gxY5Ry4LSzuyznFdNymFyjZ8UG1furGGZ4mAQqJE4oK15qTuf1yh3eZB2vNhWNBkDLPjm5pkWnkd4LgNQnfJ",
  "key29": "4CvpWWBDiQNYWUKEc9xLrTFXG7UQfY1bPAvk6vcMj16FirKgFuQDv3ZZhGDE92duH97GaYwdU88oMQa5PYtCChGY",
  "key30": "653mf3NodQxyRauxzYJpiz3kVSrUz4fQ4Z4D5m8gSk8kk5JvqsrULUGQqibFEVbLxYvqQuBCp8biiaBjRAHrBw1m",
  "key31": "2K3nJH5JqZ1k6NQsze11zx6DLQSs9KS9Hxy2rvr3ZCsy4QLRsUQ8T6MseM46ZCGBnb5R3mqMBi5bb8eqWd71Q9tR"
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
