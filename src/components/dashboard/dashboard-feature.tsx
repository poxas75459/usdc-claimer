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
    "4gC6SUhgnDxieJw9NKRNsxMcj5rRzvCRyLFMYNZ42FvejkM8ZA9e9ApH9GDkvKEubCYw9vPMNEF8f53e2qX8YNGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49aDERYAesi61D8qrTmcRbTkBA75mZdKh2MC1uMnnPYrBRF1XUtSWkU4QaV93Xt2WDyBvmAGTjj4crgDE6u7xXTT",
  "key1": "2koc9B7B3YEwZrEseiCyWHKAFRw6i4iA1yx8QmCbSXjvPxwZfq49S122WW8EGSXjqAQB2qaqWHsv8AfNkbZxshj9",
  "key2": "5jb2tXiDzCGiRStwTzfJtWvficsZbhDzXRBksPGEGvmK66LYD5hpxi5UPDyecvGnBdh8vJJ6NLUb7Qv3j3nCquhw",
  "key3": "2pKvz7tTDkjrMu8sKq9Lst2cvhL8vcuh6h3bibKb9T34EvFuQjPYRZpcD2msKyp2aQS1NKQm56gicWzKZn8LEo6x",
  "key4": "oxritrTa8Sj9PVJ1oGiBLnF8gyfAxdy1oGt78FsBrugtQzLCJ93EyowRieR9FDv1vJb7K2pQg4ZSiUoA5tjMJYy",
  "key5": "2vktNiJg8QpeVe8Y65ZXNoRvdFknLXVCJgRW8y1dDc96bjBDEHzNyHF8vXiSBvkLFZECdmvVJEdf1K4k2rKD5Gbp",
  "key6": "4WCH9teJrAiT7PQk98JGyykHNcJuEU46gnNVjb4tjuAKte434PbCUjLdrtAb8dwR85KvarXz3FH8RMWQ9WGQ1ded",
  "key7": "4ZMPR2C2NNSheHFrn1gEDYmEDdFqgiUXgs2MuVNvLLKrcNQDcJVoP9kGL5ETn7D1aGjkRebQkd7HGomzxUvnzfx7",
  "key8": "2KfD2oVLV8kypUtHGnu4fsD4a5YDvF57M8ButSYFomLWPLsoFL6ByiER2PRT7CczbKDGEAgyT9XL3BRVLgGmsmHy",
  "key9": "4GqZhmyqeKRafgNrtjhmEqKM5jTk9QjfBnyLwiMvMmrwpntpYdEoAEFUZ782p3XBbu9ujvbCSQTGTFG4xdPrvFmU",
  "key10": "57Vit2xBgptp35D2YDBvLubYjTadav96ESf4iyskqfSGq1sLXURS84pWabzVSa5hfb46SSvfsxWPKfq2XNDDpVwP",
  "key11": "GtJ5QkRKoGugkioEHFwWazAh5E5JP5nHPaj55tUcmgBoS4ACj6ZLS8YYrcaC2SsquQefrPKTQ5waY3SHApmmGjw",
  "key12": "6jAcD5KtMfRKUnYBg9iMKjN5XajccisduS5o4DrD74TRzB1HowvXo9FoTd8LzL3fbpGdvExpwbxtMtJTViA5Jnm",
  "key13": "3237XuzWJFbhk4ABCvMoRCSnzwyEm48uLFWySw6cM8sTtAf8u1peq9UvceWMpnBi7ywjBPBMUTQDv78zjCquTvkP",
  "key14": "2N1rHpyRgGXzCzATU3Z7Sdxgp8KuBwz5HzRTerKuL3X9kXF2Fbr5urp4Rpi9TAcsUHUn9GYbeuQZcZibrzRgpQKQ",
  "key15": "2iEirD8CNaUvTnzsh7hufr7sddFRqKAWtPJy5kZfpeMMY7iCDJXTj8qxwoJ9Lqm2XdRmMozAxt67H1gqGXa7icZx",
  "key16": "4uCYAaEmnkUPpzucLtujrExvCgCZg5xB32JBKkZNEMtaBLyehzfiYr5LadLH5EJxuyUYqoqC72pPWcuD6gyHt28d",
  "key17": "64jSoDW5ZKrXNrPuCtNfKojAaL5oxQa1atxD9epzi7WfVquCS1aKWSyuRrS2s887xtpBQsDE5SxvatyKeoBcQ3vb",
  "key18": "3eAPhLJ7yyKtRks2yRMVpg5s3qUTfEpjbXHYEkzMWJ1rLBvvmeKgBEpmeAYGknP3ZMM4Tb8zdPa2kRf7YyqsRPK9",
  "key19": "3r69RrBhi9x5RTxsJvnhRg5j1H2TT3e9LVueKzji9Wya2kQvzxgKRWfJgZq81tjZGRTtc97xX9k8KKjZSBAnUS5d",
  "key20": "2NwHXKrzZkQPEmis86KUHDbBuvVW1pjB1rFbsBtcjK4mu48v9pWz3vEXKPqK9TmzU6zK1CErczXTocbQa8YhN5au",
  "key21": "2MiCHyxR27PmRTA4vQgq2Y7HTN86LMsZApepHRFzy6fGWnC1KAoxynMpyVTe8UzQkSqtkSjEJte7zotx7YHhMr6i",
  "key22": "61gtwzAxPwRktWziQZEqpcxQ4NXmsySQvNof3FBoBbNFJYizZcah8ULdpPbgUoZ95M5RDzVLvxMmhSBHXcKgKUrk",
  "key23": "4YbeaEfgm2QWb4GjqGTWg4QLzc3i4BkDQj6vnUffhHXdZsyPoGj14MYcy2vjrLmi4B3sWfLJTv87L676ecvXSRMH",
  "key24": "rrtiUPTw7oz67tov69g9mVyjt3kPjabJfNoSNE3iR6zBnFSBxjpJKroA6w3mwHZCk45ut8cHC8Ft4t2VvP2hkJe",
  "key25": "38DRBarq2ebiWa2fyRPeMzfJvYQ1fPM7FFGMvRTZrKMUmJuoLGGs2VYxxKQqYTh6istunyucwvXS5H5MARgPfXfe",
  "key26": "3ZHx39RZzrQsbx7HS7A3k8QfqWvoRxrxyVTxFtfFrz3baP3NrAWbgU9u5NepjpbBh4BocEVguxbYJ72ZLFcQRwYX",
  "key27": "33QdcxQ1hBiPPbHv3vTBVib3kN2VoMdUKCvQvM8pTLFSd8hJKANWrnyghfmQ7hWcd9W8zEo6MKbnsRQNHSv6q9B3"
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
