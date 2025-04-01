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
    "65LbiZHwn4f69bYAFENKoCYZXhfnMJ63Xj5QiaPBf4SiJe8Z3BfUm3vy7gJ8HoRXSt59Sk9Z7D36q7Fhzc2u4rkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DmSVnzHW3YLX5XYqhdRraTmuMRMSeu23e8zx7G3G8XqRbBekr2c3gY4PNQFRPCjMHhKsAh4WTsRUevEPo7qMNQZ",
  "key1": "2Rd4NWcTtYkwR2Ssr5BEYZFqZrpamWAb3Fi82gE3oVeyZnZf2gjU9g7cFE3Qz5Lcee8mpP4gWimfXhUzZX8RPxcx",
  "key2": "5sceVqEsUzwAGJkeMzsX1TXnTHXXPNUrh8wSMQNi8z6BGwpGXDzxtfwbMaqEwnjJQjbVsmu4kMs7bd7Ft4N3XFJz",
  "key3": "4CyUtXJbBTaS89osYd6Ftn74AbQ9Wo3UgvJks4yFuyr8XjisLv48hZWBoR1HQwAWuQUhZe6AaY9NpHzMabQzRtMP",
  "key4": "2aGLYXKLPCeJtJCAmAMHhRBj6ZNhnLadqUjME49DfewUzF4cWHCtvAL9kL6n1jQsAEAEGreXH4eEAZjbBujUY26e",
  "key5": "56H4XhFoWPA8x9c3VK5NZ79XyPQfcXPzxWb6SrHmGkprexcKXvVmNAHV25UGMnNwkfXC1KupiexeBRSnv1xYscAd",
  "key6": "2u8fPL4jtn22YKi2rpkvQtsNhS8kGNXvr8CCJB4pqBF1ww4hSozmWH8ZB93Pgo2oGPjQhqPYy1BBs6kaRiryGURf",
  "key7": "5fozXVsVuULQ9q53PahvDrimTT6f9HsbZ1fGu9R9Y8cTcQvQZPW7qbSd5fLbRpHcQRzpTnK8Mm9vLrWxKRDbuqXT",
  "key8": "5PgEhVo5jXvD9Dmc6YBjobacEThRqF11naYPaNNepnFF6qDhm6x4UmMs2HLFAA3i97FjQRVrUYDhmjvpodC7CJVQ",
  "key9": "yucpashMy9Bc149zAHeavAW7LL1832ig9N6XjEuVvozAXEtb67sYJrPk8vASJYzhjWtUGy5zSPmFpbbh8jirBzL",
  "key10": "29v9frg2gupN8TiJ1SqghPEGcN93xc8vx9NCSwtBXXGz46RXeDMpVPnwZT3dif3SkkfEhBotMagVXvhxteXCg5C1",
  "key11": "256cmVnXHZZT2FfAtah3nDSEd1WnSc3qxF7Kk4rpD99aRc3N5RgGhf39KTNrJgw8YrqYWJKoAsZEkjvzZFYCRYZp",
  "key12": "284G2aoJMNhNrQ8gSNq5gdWW9DT4jkd4GtcghJkL42Lxew7cGT8yZ57d3chCAgj3Hvibh68wvvbeLc9GEVaqY3ku",
  "key13": "2dmDW7woSX16QRYHsmW37yr8za7HRE1DXoZsA3sQ1jUVonNi8s2pxGzkrY5MaZtEr9jZiUT6uu16DgZbTvAwE14o",
  "key14": "5ytHybiXL7NCLaN9gEK6V2Fcwvobrr6EPqSpp5ACgiC41tHkESpV8UhSZgrDDFEHjozPs6eb6CyS2gPGbzRxTcFs",
  "key15": "4XsfZkrp6BU3i14xEZq92dG54AkkJ7MKY3zsGvJrvM2cxFfzmLKtMkkknJWUCTYJSE5JgUC7NxWfYZASP4tohEuv",
  "key16": "e5EuMUxcXHrURdipZLu1ap4jsf1nj4GHStumkpTYH2KxTYCyw1LchJdQaQK9uEFTM3ungsQzN4bDza8WR5V7azK",
  "key17": "4wD9XkXwXPbVLCEjYt212jotqzh1Pd3NG3Bbh1s8cfX2C6pffLpSNUX9MyHh6QLsFLaHrVa7JS7Qpd54gnoiKiD4",
  "key18": "3ndXpM4yaMkwmqQ7YDApJSbyVg6yhh38wr9y1vp3fxBhz2XA2EiWEhC68imeTd1gHDxK5aJUTef8WKXEVNYwb7Bm",
  "key19": "5yRE2TbSirBkUf1vjLczmtexLb7ERWNdasVhWWDEK6MMb1NjGteXsgwC2RGoZELbcKimN7DfoEdehN6JqHVDJAsn",
  "key20": "QD9XyqXAknL6NEcfsR8RY9P4v9oXiECdxPXn8Q6oF1s3jZepT65jKXWmxPdyVifMqzwzTPjRzcawdmzinsrV1u6",
  "key21": "3Xq84eCpBNKrEBAgyK1UjaxyhcZnatQTeExGgZ58XXSqA3YxVrfRTtQmw9UrvrNEKgDdeUDX34Uzi2uGqGkfp11c",
  "key22": "5uKNNQg8u6Y2ZP4vuao5oPTsWwKye63g4z6cfpcLncqDp3WXFKe8R2f587t3kq2swb3vuxsQmcML18rFBFE85r9B",
  "key23": "5nDStqEMyAxGx5xYUHXr4bQRKapaej9Xuez8ifrTmY3in1Z9mFNsAhq7a7BraPmMBArrsD9x3wxj5kN4xYd9zA8j",
  "key24": "3QoWy8P4nZaWydfgbBW83YueHbA4TheuAAc4VKXz3KL4dJiPbHo4iYPkDs4MbWmcJcfQcbkAhSnviS2xsPkZE5CM",
  "key25": "4o9JsPcj5hswPNaWakL9eVPVKsxi3yd95QZtUhmYjkjJRDakhFihCN3eFvhaPYfz46T9L1P7rwT9mVcPwcGcNJ6e",
  "key26": "4VyM6mNk4bA7ziR6UjFVrMzkVDNjTqZoMnexDL3myuC8xfHCMC6dfpcT5BoJwa52eH3YDt3JMGu8xgs8WKNtPWHD",
  "key27": "31Ta6PSm3SyU2ArWyXezbVtR63Jjqg6tNsU4v3QnJVTJbL3pU9YJrnMqbBdVjKQG8h2RzqhppEtLfdiAFpxgvqvk",
  "key28": "3ARhy7pZ298ZmtqJaNW9XYpbZBfw2EoA6ZHQis1ejJ1FxasVr9ZmExpgdQkpaK37sSYqfPJj9UH8E8QiWYUHN1VY",
  "key29": "5ZRCb61BLNzKurtbA1fg6SfwqXFMH49twX3dDcSmBV9zsV91w3QAaJbEvmeyFe5Qyxmf3NBxCe3ntUKz1JUS7ADA",
  "key30": "25nSh9LR1DZheEgEGpge26wcqrBUxpvCGxMF6jzvkf3E1JVSDBzjgRDdLnprcu7PtYHkGhUwFmVt3XyMov5KaB5j",
  "key31": "3Jk31eahxHhRPDnzdDbm6XiqVT4sUgSEfXg7kpj43JDMefnKJaNCWbYevkTSyQKAva3Xi6Rp3uSF4AFKndrfyhP8",
  "key32": "4nn2NmpnQySZrxCtDgBuvf5F7DTwt4JGRbpyfaJSkXCZHsc3qS5SyeQWmQhaqc2MkwvtdfnDmMXhEVcZKEzZmFqZ",
  "key33": "3RvyMNDPfvyGNjp4KYivbk4dua33ypBZEGU2BDSH2QVB6XPkPub7sFKJHoj8UmRjE1HYgtVyxHePKLAftcLoVWBn",
  "key34": "4vdM9X79h5Hip4uyQqQ6hLoxHsboL1xfptzMovnQMYUkeETnEQNpNqZBGXM5aPW8w4Px8BKabzWyQXE7M34HAaMS",
  "key35": "2S8ZQ4VLRHWxryKHS4FKnVitynArCApVZrPdXSt6pXqgV4i2ZpBVXwPYwJw6tDBLLkNiZDa2er1WtBPPPCXqiLDu",
  "key36": "2iM7mRiqXrTu2S6DgE2HBAxnESZJTAfayzvPXywzTnHrURmmoYaY5ZcJCTYQw5FNczKwc7E887wXJ48KkybjL9pr",
  "key37": "31aePRW2JgXfEMsyS179wraE9YzGc9vmdDhGVTR1xkx74qVkZcGPL3nUcFJsVbPqFnBpxVwcdNpXWQrNT3ypup3j",
  "key38": "2b9BYDXnbWd6LSPBHBGembq4uXWZvHubJWk9c4bDX6S9zjGoYoWspo6S2S3R8K8MPgWmVYxStJZsrKgGFxVY34g2",
  "key39": "2LPm1W2ZnDpAxQtp2owvMBxZF27SnBaBGoNPMdcVPrT7hQoqrpHPgiZjsLRou2uPaAZyYbzKoh1iLy11BCMYZwM5",
  "key40": "3nyztdA2iKWDbebtAkTehAu69uR7xo3ZuzdAno8v2upRQzeynf6z8S5uuXcLgmWuGiM7RxWm43jbeJ5ahu4XEsge",
  "key41": "2ibu39rrig4vdTS7nTbBYLSCzoVAwJG1TaV6QkC4NUwfdoepYsruwCk8c1TEnQHMw7eZkMW3AQoxyjSCxDD6Ne8e",
  "key42": "2ukhG6e5kCHHHt2USsFubhdxe3kkGef7Ufxpjzw8EboyC751nGHAY8FZg6rcKyrpfjz8hLSXdQgJuSiubhHo9Us2",
  "key43": "4ebj5EvJGffMZQE2mUfSAowha1rLVPLwRk7DFadQXSMNDwcS4G7y726ahVaszQkZmswsWqzTC9Gri1kqgu76Wf8o",
  "key44": "5XmCU5Dazo9vSsJzEmp8KKVfqR2TkndzhdHK56Bhe1NoNQ7Ltx7MsPuhT6kqt3yXaYwhD1JAa1tMUypjhrWuKXrp",
  "key45": "1zesPg6wT1CCT4xZW3k76a5ErxmocQ6EY3rYJ3AhMocxc7uM2w9PjSQm3PXbxVWkvfiz4LWVU4BR6FyVTqqRCPt",
  "key46": "zNsT3ogDFn7X3c1M59uTc3ZceeHNA3PnWXLFSZFtAPF2EbRovxPemA9JMEAzax6m1amEsCapzaiasQ8aEr8QXrD",
  "key47": "3UMn3Vct5gmPu39PCsHsd9AJKHfii9APepb9nCzwtupyXsqYHk6vecYkBimrd3UTTjT94CEUinZnEcLKCdX216P3"
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
