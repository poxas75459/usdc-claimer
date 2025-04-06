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
    "4kZkPMoNmaEqiQCSKooNGLAgzNXaFESnwh25cWdpgZ2RLTTCsJGMjBDk9vzJE9WMo9rMF6bkVT7pu3TajzNLrA3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RfkPE91HsmSWWWUby92qAm8ngBV77RLbf1vTUTGHomsJf9kAJiBAN63wCmqq2cdUgNHNuksEuBw5eyoGKkjt8K9",
  "key1": "2nSxtwq7E8enyrKabKJHghJ4D28dFaaipBT5wwVo8SwzSPEKKuPnWxdAZpHJfio8NBiA1Tq9bpCmADm2sW6wVvUU",
  "key2": "56HrWmZXe1Yfzi4v7jRrxCxJspU5TbazyPhiHNdiC5RMGeRcQSKdgsu3CUdztEU3AuRx8DWWAQBZPF2eFZW4jQNo",
  "key3": "4hbhSiq3KKstuGyCWRiR4X5tCKCDh3D9DC4F81Hr5DaJhk1B8ng3Byy1RMLY9JnxLv5n32SJs3XPE86XSRQjwsza",
  "key4": "3qorGAVKGdM9x7L4X2XEwZkJbzRTABgBtqCNJtjPFG6cEtEwWY3TYfgNSSfqq2BMuwxoui8d1VRiNCrsN8V5L2pH",
  "key5": "5B56kZdaUJcTTFWvCLWAZuU6utA76VXr5AXgoVRM3xJvth39wLjVyd8shZmsLGSesVtyA1bN4BMAeZW2MQeygfXc",
  "key6": "4bpor9F3oxfk6GxUnnNPP5UARKiwRPRSbeLn7UQSvrzSG6SMGWTk2RFqwrwuSF97Vd5okvtevjGtEcNiGfdXaVzQ",
  "key7": "aTHQtwTCBY6DTPEVj48VRVCDTvQUTHUJcNHnjdKv35uU3F9rJ9CJVAEsMVMqF15k2wqGu4npjXxGFYaGddmaHnf",
  "key8": "43EJrAw9JSoDtXmjMua5ozjtRKBNbCjrdokoNHdxv8sFrcMUZrmfoQ7aVyqhNfDL6kwqYnY3XMeTV3vX3WbcEofr",
  "key9": "2qgsy7RyginZHUVxDwKVtkbp68AjGeazrQYuY4uP2TtiEnHcajW8LRSL6xV3MEiH8AQsVTTMEyaRj4hgYuC5r2gA",
  "key10": "5kJmnkpgR8pbXj3KADtFvZUvmCMWKuoav2EU3GXw1cYLScTy1jz9P7mLxcwpB67ouyXpdjEZ1SCw5RFwx3PTETSJ",
  "key11": "421p1rD3ntS6Cw5FmNR6S5xnM9Z1pfgwTmvzqAco7NgghPXs2daEty74DQEKCBryd74HApavxJqmgYYMBzUDFHhP",
  "key12": "A1NrvPQzQ37bYTPtgJDi6gcesX4JKxg9LibqznQwxjY1Xd5HYL7iV1guNZ33tZAa3BbWEPJD3sq5KN12YW3J5No",
  "key13": "3QnGYZjQx4Ui4KbKsQ3uD8WujQGqsbDC4vs5Yb3KB2ShZ79vx8S8gqV8NNo3C3AJUfWcosC9KJc26Burur6jYSdS",
  "key14": "5LDks5gY4tQAD4CssEWUGQFfXRyNxSJRi7JSr9xG5QiCMxPB1iC91pyxKayu6P2hBroVKKYZpcAtpHCG8nirwTcD",
  "key15": "3CHsGR1FQT5CxSWVdXt1nwoUEPPTj5kvnU2B87fEYuj297mNwYoxBcxPaND7sdRzmWG2DW5ejzAVehzGAgCsXeZ1",
  "key16": "3N78EZdqQTtADZi79HFMFhZsgkEqkWvB9tSJLPMZHAcgK7acaA6ARoyURb3nv1e2bwgFmmkizsc4wzmixqpebQZE",
  "key17": "4TePJdn576DwkvbFoVUFjb1ENkgUjoWD3n9P753TdpXg3MwxgNwhJkqDGdzby4ibzBcTviWSJFSjWbphVENhxMdB",
  "key18": "2aiPgjkSByRjEYbb7RsYuAy6J1ftHiRRhMqJbxVfHShK8V7TqJpWGhUHMozKdTUUH3iQKFPFfgoStJ6aKVCVLubV",
  "key19": "2HCuPP8CLrKFAbvSk4UjdZda9SKzV58rgQvuspKQBCVbrz4eZf5hy5vhBq3KYszziziAXpEhjSdVL8Z3Lq9JEgYW",
  "key20": "3rXSxdqnYEov1nDb7mEvMdsmdRo2Xtt2JxMCh6x5CbwoiDJe5tFSUV2PGpmvJ6gGaVKrw7YhXNit38KpqLhZh9ue",
  "key21": "xZHKwNgAqPAUW5eGgPWeXPeGyPhtusLLgmrBHtEYwDD3WWybukNsn6VcWdMMannYjzt6Fqc1ehtYBzQNE4zBX5o",
  "key22": "5CY4k4CCBNhDemeecRBg1Rjnf5z1GbSSRTcpyqya1sAjbAau42toibu8ivQmdc5we1hiA1SsZeyGT9T9UAzznu9L",
  "key23": "Xayau4QzUJQmjNBL77kPgX9EMsFAHuD1s2iMMEZat3jtpfa3ubDB9jittxHEuUa2abE3MLtfvs4VhQYUttp6Gmc",
  "key24": "5HvfYEHGtnKnnDHh2YKCv3qZaE2s1sV1souGCPXTBYTphcpfbnB6DhNhoFe6S9CnQngiC15nsRNZF2DmHEKqVgi7",
  "key25": "2AUARtSJeey21RZw7XzYnH6VL6wSDkNhLku2bGVVKqKinnjvLVStVqaGBhrgy3vHi8j9BuJpu6NwvAiLM8KP5PtB",
  "key26": "5GEQF6WTwBavBUELyY9NXTUKShkcYfuer8HrearGt6X31EwGjutB9EM6WTzgc4tuSQH5Fagtw4rNZtZtNdWauXK7",
  "key27": "ubVCzZ2sLrEr9C5Pi5SQtm9nC7k3NyNuGoNyGmwnpikoEpu3ihFRzNwd1q5vvfJPRWnNWAnMxNXqB7p3jMw91Mk",
  "key28": "Vah3cEEorSi94bNGRDi4m1Dy44nYYWViJdPXkfFvGV7hz3ERuEaUFCByuHPwRFvAuqh5rqBZkJEaqZLMVy5VqHA",
  "key29": "28sj2EAe1qw8SbmvuLP5jfoXe8MWbSLyuvu5fdEuQwZNFGk4aZQKERXoz8XWkZbc35mxu1Gb2sbZUXZqGu5UCJxk",
  "key30": "EpxPpDCe9NWjNCQ3VDSuxJWbHqr4qBvvnA4QXAaviL7zn2Ja1wp83uMZAxd3NtRVBYm8i4DBj2UmuWwvXRDriuq",
  "key31": "4D1opZbRWA9qeMkfegy38PGWo7RpT4spbX2kabiwPRpH2VwHpnSb7XVm3ic848XVmNd6DKtAUWaZytMBysiRyKeP",
  "key32": "aTXrXEesuJP7wFoaAQ9Tb2XFCTZLxFe4CBuCVLUa9cg3cHBrUCeEdUcLSqsWLAbfSRYt77nM4W3bMVpvjyoFfsj",
  "key33": "6F11bW33U49AFAP3jNP5FxH2h2ESRtEcPFfVxeA6sgnjDdVacdnAWUFUuRmX3XvYBhELabogax726LBhzgaGgKj",
  "key34": "5gDG9ZksfL58hAzPdDMz65CzeCyBPyRCGroZxHkmMKVW1gExhFpPVR9HegwDsobXkuicDrr83snviVt86BjZso29",
  "key35": "4djiX18UYqSXHKUKnSSQkq3N4nNEPY3E1W4J4s7pKgmCS3hTmYL9rWKMXXPyYXPPtQY9TDpKL4rSeATFp2ebMJF8",
  "key36": "4ff9owWA9i5tkZ7edDYuKcR9XGzhCj4Z5w9dPagDZw54y2h18gX26rmZj9mEK4PyF8odtkmbcYaoRibcsZT97gyw",
  "key37": "FY3yVX7iZ6XFQY7X9DNqPSvwThCz74b3784Zn5RrVwZSAinhpYAbEZesqMNVRL61KwHGn5nTTcLzAcXrM1ramVQ",
  "key38": "4rUtoKLUWHHa3xMrPdcgaqks6pHNmpqDb91XmMtrwcUckCMTBbBNpFSYaPXYi1y1cuQNZwByXUEVB51tLu7tH3rE",
  "key39": "4KuTrn3bm4PUVMGp8tcqjiYsbkkTuS6QCgs3SVnzcG4aq23ygqzsdnedacXmgNEWC7BByKm8X6YSP3ofb1ULJJ7V",
  "key40": "PcmBWYo3NAkvbES8urHrrjYV5wqC5pZBDk3h2hXNoNEnFuEZ5F6aT9wo1jFN1qguxdsraC2EmJvZ5S16VpGbBg5",
  "key41": "2aE8XJ1be2f45z2mQysG7qDF6ayDGwJXLHy8S2c3W2tUW1d1Re6DwE3n2hcDV4zMjgfqRooBa1rNSRuFJHak35cd",
  "key42": "4azBRBnRYJQTuSrSDVLdoHRxtPXcyCY1NuraE8HAt71gWe4ofCmnowZft6bfXyzZcUjN3JZx6ZRLKJxZSLhQVG8Q",
  "key43": "3UwKsMuxgJ8vPys49dnicmoMdwMupkTjo2JB9pqTWcgLDGJqmqXYyUbRvWVdnZoYgNoWuybrw6N7GFmsHJRunSAm",
  "key44": "4qFVgw5F6SXGQZZfUAATGt7kZVa34rDfu6t3z1XcqXk5u6xy2aotqKSu1QpoVkAiLGY8SqRWwiM9Nv2wWhJD1v6M",
  "key45": "4KvrZgaxwRo8YrLyFNkWJev3VQswGdcJCzJ7xBUaoc3oMHzrnFLVs7FWZeCg1zTcskFk3DURFaK1sL4nkrppp4Yo"
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
