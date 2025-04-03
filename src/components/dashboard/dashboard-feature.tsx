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
    "wftWJw5jSF1n8xWrfvBoorUYBx6BV68ar6S5jCChsxd1Eb9FMfwL7NMVqav3Dc6mjWQThuw8j1Zb2QgdFpKbMDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C53zchZKKqx6q58nnRiDwGXRuqVzGqhwjehA6n19vo3qgmRBnQuNtvpHfKcFdYxeyRPZdML8rqJJd9odTarzEtA",
  "key1": "Wr9daRBh7bdyf59NkHBFqWMDcjoXcKvnPcEWRTFmc5zwGZ8j8JugdAWB6wF8TYCfWK8qnS67BioBnxWUrdVzo6g",
  "key2": "3s8DR1XdL2VUo34nq7yJHTc4onKo977AJF1PXBHBNNNve13EjVjJNdLyETTdBn7DqQD2ztyZ6vxvLcgximZM7T14",
  "key3": "5LBuj14gJHRmtnYLE32HBDWHkWnrkWbTenWsbDGjqoC4XGA4vaPUv3UqfLdhse5C77CjQpnDUFnDnpFGFzbdngaW",
  "key4": "2tpxb8hsAQjxVsDe2aYTXKRYeB1NAeboVQeHDXW4dzF9WrFAHA4UTwHRJv2U3TbMExESDfiSuxY6krzYVwhrqrYA",
  "key5": "3Jefo7PWfaLXsEvwLXvPwpxMVM3DeCTHZVWJKmGektPDxN1F3WpgU3FNUZapSTWxwraUSVKXYwSMgqw67VKFFiXg",
  "key6": "5RxCe5iPY1B6WFBpNETGA8FSjQwyiQ1HNAqVjG7bJAnx4fR1ZmLbQ9wduxnbrT9tz2BtJWNLFz6ovce5Ldjg6kQx",
  "key7": "2ae9va6k1PDMQH7voVcT3QK1ZHCnrQdFqZaQDD6ogwtpJqFvuHD5BSvEHUaMTrB2rnTGaM1AztJ81w6URwXzXWR8",
  "key8": "523dYzeogP1z2RzTWKwnnL5xzbK4NCvm9jS32ySB6W4YVwTvJdBdmhKrNtMxJitvXA7YCtPQmZDT6aZdwjpQEHc3",
  "key9": "2yrFJSR16cjYTWrRJrjxNLpTW77XfUxBUbXEjmTyFgiqC4xLghWWfJDftjXqRJYdLkZirGzg6wS4hFYw6fdTiPW4",
  "key10": "2tB2Ff5Hrm7o8fT4cr5PK6UiSpoBq7gQ2Bjc9Sveqq3KnWCJQrbth7NcBcmRjxf8v8Pi7GGNok6Aahc5abpDTjev",
  "key11": "4ey1bPV4i73KndPsiB1eMZsPAPf7FByqL2xfBA83g45L3LXHz34nrvFUeFo56da2Vf7KhAQkAhM4bNZoS55YqFFt",
  "key12": "2ZboGwpWbFSgcCdkQ8rK2oa1woN4xNxDdoZZhtPfmT88SP65tWovnNhYywKjtqf2kkLyq2wDcE59F9UXpLPWsMSo",
  "key13": "5iz6hHzjYP7Qn82iST5EW4CEj4taJiMZTaKRfBfQZi8qBw2zYD82K8sYCK7GV1xVgKZVzQ8SpdsgDhA6vBig14XL",
  "key14": "ywHc8qDGoBSWa17JPs8ZeUB7UrW4k6DsiBepiVvUW85u4x7fuYEW8whKeLmuinFVNccNQseBGUTHefrYERyBKt1",
  "key15": "2UQfs9anL9khtub4jCYiYRpopn6npfmnqefg28CUNtt2VAEHQjKQBQB6KF5JARzPeuztofgEZjUaztUkRMVX9aFF",
  "key16": "4Nt7ymtvstxQPogjpXxtLe8p5dLMg1vkN7ATKxJBw54yeYWzNoX1MnkjbBNTEt1itEnec8338WxJFAiP4QQ6Tv7X",
  "key17": "aEU6NRxFA2ybcoDeTDtUrAAZi5jMenbMh3DJ34M1TCLLafERKP2AJGkUDhaXteGC2HQnszoCnYBptrDkFFJJsev",
  "key18": "5Uiw2KXV7M7mThM2kpbHyuo4E3tj26L93J5wNVYbjsMiZ1hZit1ShUfTk6Jfek6U39yQssFecAJRJ62FwgcHep4N",
  "key19": "5hP9wckHaPUNZXe1ksYyHumqHr98kar8CWqy8JzcTFi8UYQd7UPTJb9LNDbFCLoLgatA7S72Y7J1iPyShRsDrEnf",
  "key20": "42wrrhzkyKcK15jGRWwqjbpNmpnVRShCewEPZzGAF69ffGKbi4xahUBBKN9H4PNGa7gzX2feUc3RsQeXcub4sMML",
  "key21": "2zxVvwgnzSzqNXfjNwyDfhGJGHAJXePCN8XZYpMPHkERwp1Gt9vEeQdK7E6FobW9WHfQyTvdjxiDaBpuEEuevLct",
  "key22": "PnEcWxdYKWepJnRMmGzs2pLbdvHiCiUsXAW2nXqucqGsewXotqgrSkmxJWN1yhgVLqL8XjDQucfD1UU1CjqcdiM",
  "key23": "3Etk7HoLi4zaswz4ibNpcj1ngPq5aCQbZ4xsRG87RYmYpZjvqRVu3f1N22Bk2pTUUA2ag46JvpWz5G36RewFPQVy",
  "key24": "49ZbHQnjTN2qN3EstDST4JaEyvYKxQAZL9KKBxdYmid5ULbMBdDRaGCQaBjuFH8dF9ixGaiidPuspxPxDVrRTwUx",
  "key25": "4LaCCUUfdAiWcXw8WF85WMEE9irqndQtJQH3RgkMyP3mqQnffL6TnRCar56aNr2KzbGcKu9fDCRFiqM3CNsPfZYe",
  "key26": "3GSxNvTVhCxKezRuaeVrrssKwukTKeMrZEDyN4LyDnAmpbpkjv6RrpF217kLJeGjWqFichmJpeGYdxNqy6xVxszq",
  "key27": "2echLaUXRQ4RBRrYhc6WTEYYJwhLYLT4ACxMcV5Z8GwYak4raMhh2WMMHcNewm8foFXYN3XK6Nz3xAjjiPZV9bRL",
  "key28": "2abgx4S3MADC6UtzRnpzrTtf4AUiiskgcQNGNv4zVnBQkfP4Khv1QkfR1NCxaDMyLUgTayXhDLBnsntJYzJhmQ86",
  "key29": "3FCkViFxjuYtaVvw1m8MfDNqdHRm2vv16L327Y161qFbQtA4geQ8CdcPSkSrogv2xScvj8epX3wCraqx5LiJsGcS",
  "key30": "5zGmSRd9VyuYWEQJKk4LqbbkbhsDRCN1sRwMBqEL4hg5EHTFPJB9HM71HnMYewt4STcst81bGmxEgvCLfjtZfDzU"
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
