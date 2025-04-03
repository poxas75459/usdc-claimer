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
    "4gDDyCh4hL6m7qwU62DLn7KHJ9ANRqwYbaEs7deopKVau8N3J6rsEo8DfW7vLdYRUVGhy9w1ckLbqbJygdRxAQmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZzUsRBifdg5FsLMQRWKo3zP17G9crjVw8HYhRKcv2xqDKLGoBdExFzEhQWifBupanny4KyNjd3MEbfPkFVbdJTG",
  "key1": "5A2BBNTwGDoWwcPFdZhnYTL3WYLnNVjB7i3h6hbFHyinPWfUH7YvMMddXuLbQa5J9R3VbnLJxaabSb6NfpuXFwmh",
  "key2": "39Dtx2AtJNQdHrzDzLN5D1Ge4brS6wHmL9ATE1xUTG1XApcBecUteKbAnup15K2PTjD2TJBLjEdNSCVcUtDhHv8",
  "key3": "HLaTgg4beVPJacgcTvStNZh8pzQxPYcRdnFgE7DPCSMm7Md5u964K6mocCoLfYA9aDTUz2orMXdSX8foR77HaCu",
  "key4": "ULGZr6YMhusJRrcVCiy4UQecCjJu8HML1cUejVBJjAfMGU8rpEXd5tzTvsAzxx7FTaFvz3dwQxKg1xX96a97KYf",
  "key5": "2Xu12x88tncZdeWrLCmThcZ2LcCJUiYxKZ3SVXn5ZWZoztv3JcC7337144feHi3X14vkGozkNxxegeKJmHBecw6F",
  "key6": "2fzBrNC7aNP7qkmKbS2g2efa7kNK73GxDwrBhRsdrtskKpUsdPEiW2CVbKDihb96a3GK2dZAhmijjyAvDTkibCQQ",
  "key7": "2YjcK4WhULiV7pk3K9gbXxyjP7nUt8h9eYdwYzBYdWVuVW1Ho5StNNXjb5hHzaJVNU8Mm4HwG46JR2h7VXwD7iFF",
  "key8": "4ShQZ8WYiqXP3qB9AC9nxSV5XHvwBkfsSokBJWguXodAACTVgqevgd3MjovcSvhMXL2ogE59uJZEbKD71wsmC7aJ",
  "key9": "65HhnnkUSJRD6iZzMJDxqNB6uNhTLxMzoWJbBt3XSYYAYbf8YN4AT5yKwVmXAgwvpDcTqfE4y5KWGmA4hWH4LRv9",
  "key10": "4NTmP73vWpfiVKr3rujSxeKhYymVxRTkRFrsTrQgDetvPhJEfG98mDTvHkLg7Zvg5VUHWxFtDPGzQgzwjAgttDb2",
  "key11": "39kWgSTPHrmT5YbTa67oEbMvrTQ2KaUvy5accxC8v8wpYLQZSttLKJv4pbMGh1gVcGJeCiY7qHxCyhFCN4i3ZiQu",
  "key12": "5Wq1RbbTVEbLq731BnuzdNQRxVxm3aLtm7z3medhPm5vpQjBXgTxbf1J5QQS94ksmLMEgi96sCP9DJEcxRebh1LJ",
  "key13": "3ioYWR8yxXQDvdQKeoe8AxketrNt5h4LGr4qkaNs4ooWK5NaggX4bXAPcPYVmnYSL7EioQdDZMKU4xPqPNt6kBw8",
  "key14": "5bhDRkEuCpCiKHFUFz8zSq59GwUnJUGWSqUtfeHw3MrTAqUBfD9raXFsLQqzerYtmRcehAAv91UitPmPvE9GfBhK",
  "key15": "3uqZA1oueuqYRpBesshjKEvWZrdci43cGcB1WGQeRgMuHhpRop6yCAf2TmBuedyZzQrU76UJHtYDzpmiDdJ6TpKh",
  "key16": "4TtQGPf7N8J6N9CDKPQ2PvR3mrgqviEDEHcmLtiyof9jFBXUmzBdDJtPWhPNWvgpQzHr1D3DgiD8Dw1Hqh56fjAz",
  "key17": "iqiXbk9zeC3E3Hrs8HSasQNdzT3w21LMXuZbXXdyNFvZ7Dx74MBaiUdDmPmGz7frAqGe5HDUJxtE6YhCLVUDtTm",
  "key18": "a8F3tiMq6aBT3E7hMrFKktDrxLUpg3E7o48y2gfXdx93XaYwAzdhetJ6YEkSGBEKW4jUyYvZA3VN5ogttxKN9WW",
  "key19": "2DHDh8aHeufbUR2efZ1bUBWGbMManMFG7Fx42GoTe1L3F5MypAXqZhGwcX9VdE8vLy2ChisfAwySjBjPa9ywUwZG",
  "key20": "3Bvemg4b9WgrUy6UqKHL5HsLXCucQ4VrKsJn5EC3HLSmT1SZG3dpqpXTLV6G7wxdTX9r1ncBuZmiX3bB1dbQ2NbZ",
  "key21": "39uhHxUYdTtWwqaRfvxNnNKSHiG9XYw2EB6eFnWwakiUn4ZK851jRkHZQLFLBrS8nTT9MnibvXGx913oddymVZFV",
  "key22": "49Mz3adetdhkCWWosoAX3CrxSwzX1JUW4z7Jgf1dXSpMeNovEFuuBjSVzhtGJmFWfYfbFppLm2oeSbUxbWJdG1v2",
  "key23": "3LZGQtFsiiYUJYS8Zez6HPedxVcYZJadayMUCG5yCUL1QfQaKyk5Agcj3xuS7gVduyPvgMcGH5SEs5jZhqbLEcA8",
  "key24": "CssVe6dbsoH7zPfMp66t8CoMXiQvim5Xs35LCxmTBpNVQj8rNr4DqqkzpDJePtDSqR2H3dpSAJdV8C9m5aCJ4TJ",
  "key25": "5TQiMnUZqdy35u4ER9a6o7DJnreKqZbu7XCtaMqiz6VnNbLFvCCgNRhsHEC58G5VGps24DWxYpwYqeE887fs4iy9",
  "key26": "xzYf1fSqWtw2vekPuPBdz77dJ7YsWSKjGqvYaiLsMVEnEgni8RuGr7c4ZECiHg58sFWZd17MLm7SxRQ9PN791J5"
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
