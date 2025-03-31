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
    "2MGfJ113hw5ukWVeiQcHHDyArvoHdwraQ5ymibGpNfwRNGMREs8GrsNCkKMxUDFPHn28GSpjgAgxeiJ3ttE8eqF3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31D8oe2N5CyLtSntYRuozS42qdxzDrN8UkvPRvw6rqJujCQjtHJkbZ92zNZe5T4BVcZxMiaJfyhZo5dxiUBnnnpV",
  "key1": "5XiWqWhbVGBX59PHgvkGqatxZobebEQh7dsNPYsChykf88F9rAqWRtErBjHjBFyq64sukdKyUD6SBeCVaYsSterg",
  "key2": "b98gL7p5zcZZDA1WHnebq57EsVoSgXK3DmfS4k8nNh5AzQboJvkKmwTjsf4hiAiicX5S86tvN82dtSCr9yfMqML",
  "key3": "3Hh2oLmtzgkvEnq52XkBcn5Qt18fBAFiCPkkB4VGU83Es3qCymnFGeD3Jd7eJ3UaXmoSTF3Uj5fUhJReYwe3iTUM",
  "key4": "pYcwA667BGEMoweovUnYEhFDLqfgz5hbUjqRgSMHbQmUT65M8GfCjCxYCf73HGfeXh1qDbVe9i9w4qkcircK2zR",
  "key5": "582vZ2mH6sMetZAnrDYyeYY7bqvakCQ3ouxTeMigz2WMudpbjnPis7RQvfsq6N2mhJeM3JRejxijDryJPt5h91K2",
  "key6": "5gnfmirZi6BPmJWmD5WXaRf5yz2x9fGiFBQZCc19fY7ZRhk6cN38rpBdoFwg3pSf7nkD1FUX1tSGA46U7aYL2HVo",
  "key7": "46FXiKksNy7TeVVwxVD9wj7URE6dZXLB8NkpYQDpRWVCkHQHSpyejPZhwZB33NWwsXkxwtEk9B3SbE831PtBxem1",
  "key8": "3yWSjm2WANXmHT9tD5Chb2EGL9xUcGFWrrbxe3YCttDpgGFmaE9evEM2iA9etd6hW3P4qfWyeCRjhpTUNXJ9WrNz",
  "key9": "ySmPcTcvhA68jUxMy7HmRtQ5kkNjYb3C2irPwff28utfKf1bgwwyxz6HdkgnRdrxne1RkMBqoN23jjtRs4MmN2e",
  "key10": "2ks2v4Pr2c2g3fbLkRxjpGHVX5LewJ6jLkWtLvJaQ1B9R2uLHzH5ifA6e9wZgZjCtAV3s299kt4kKESQrz2TjdML",
  "key11": "5vewu8n3SaFA24cQU86SLK3xVxbHuLxhtWt6pw4opRiPGnfRBNMYGqpVbmGugjVV73pDgvycrVWKSie8b4moDU8N",
  "key12": "4chQsJz2zkW6g8w187m8TxBLgaozVYt8EjKHHHyXT2DN54YNuEwfiQpyzF5sKJyTKyjLxpHc8j3koD2idVt69iiQ",
  "key13": "4Y1CNT3FZTLAYUKLyhgfEFE7yfyx82EzTBZhvoUgwwajvXxEAsmyySMFCgzmiqJQQYVQF749w92VwMrwNfmuKzEG",
  "key14": "566oDnPRLUDV8Lw8RBMULaP8iaqdQx5LnnbFycjTuqJ67T6c7NVE7esr53Q3aaMkftj6DUjiDaPx7A7yUrxcBf2H",
  "key15": "2WLrS8ewDYQpAuGu8UGzMkMiK2NktktWeEHMW4gtYUXPccLgv2mdNoAx1xAfQCYryvXKE9FoSzkPaQqjGByHZz5M",
  "key16": "Zw8vFQcELW7Mkd7w3adnHr3UDKdwe3PtEmYX7uNxvFFoUftbLTUYD6fXzYwzmaxZfppJdVbdAcMuP1wyULDFrvL",
  "key17": "4HhxGs1XdCTXkSMMQ6bTBVQFDRir2azpBurnZcNwWNK4qzsKfkgDHxELmgGhAWh7KeyfZTp9G2cvuoxCfQkbSfHk",
  "key18": "4KNcmUHFksPtiA512TUYRBCFcSLoHNk6iqFpiPNPuyetXLTUTDfLhUf6EFYWwnYhfw4tEncGx3Hi69wqBDWAD4j3",
  "key19": "31cWMyruYQYZyiwfYaHkPfvptbSyAaREz8tCfzNmaQM8oApHsv5BHnzzkTGf7mJWa7njwH6ZZJQSb8gKJfLU1cnd",
  "key20": "5aJmy2XSzqreGqrUhrgF8kAaHon1AERqo9Lyic8WnebpT9rwgkMy7zUC1qyXtpwoRUU3dFPaQhzonwTjYpRKaDAY",
  "key21": "bgXFx7YBuQokjnwYnzPpzAnXH35Xfh29KnCJPLPvR28fd7JpLdeaxmMoRUXiM699JuBkR5jw5A2XPN3YbAKaejw",
  "key22": "3BpdPncxfXvvyiM4V1q3K85FC2TEcbX5LgZdQB1yMzoLSsjDywCd6cbwUG4552xVJgBmNyBz4XKUFMRuGBNdCMKW",
  "key23": "54bfeyytgYai6cJYhAUM9x5C1si1VfmYFmJh7QVBxU3SRjebBTxsXwQhKMewjHjDEoiicrEC4N24tp11GZoZDGyE",
  "key24": "4CMPd5zVkN32KhNPqDo6L2SC8x6zrTr78yVodWkU26NzDtifLGqf2Fu9GMnzwkWEP2MoNBHSwEhwzkNeAshWnXQp"
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
