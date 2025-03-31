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
    "3zvcifrkMTR6gYcXZyi2gEUftE1xMRXS2eBbyoWdhtnTw9js36jmqw6d9HgSzGSfkNxxR3Sjn7kDPt757iJZi2E8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wmM4bVWUqDBtrmSnFE3U3SVXCoqbgvmX7mD4j1JT6vjNMd8FhcL36tGw6NFScCPJDUdQ7L4ewQbF4jaRETWkh7F",
  "key1": "4HXJCUwLZttiq6YLz1ZwM6CvYkRFVA8XGEys5cjSvzqLxDmGHj162qnCaotcQaVY2tB66Rjj2LrtfyzDK4qN5nP7",
  "key2": "3nMFpQyACUrb4hLYXKahYeSSugX6BC6e7jacv2Ym7ckoSUiSwC5rJCVPaNGkV6Rq8hBXAWddtn6rEpbdiMcYbDYf",
  "key3": "2AxZ6ACsq75rzSbB5t7v5RGg55KZamcJfvTUJno1XHtpfcGAVN7MeCri3MEdhNZB31zfUDukBeCsZZUrd6cvdxj4",
  "key4": "2LUuzBVXQTauDsuQrA1fQzzJVXYGfZhZ9xRycVnQ72ZQfXH9UnPXj1sYu7L8vxxrJguFN6dtK9bVKEPZ742XB8jS",
  "key5": "utR3DJs19hhJGWpcGQmJREGvK4U6k7UmLVnTaZVamnn1vwUunMxqQjC5E3hQqCat7eBw5CpSXaqhrcPy9kUNZBq",
  "key6": "4j88ahSNBaox5kwJDyRKF1v9eptdQSuRaJRgwppvsMnEYa55BmjtXHxUKVTR1rwrTEPwsFpYW117ranuRDGeKuzK",
  "key7": "2FuyDLoVaK1Z31bZt7haARUr3hSYwvTcZLFD7JD4db7XTrNYgtR5GAcwX7Y1AMWpm5NwQsdTMENAiUAmiiuNaWbC",
  "key8": "3Wf7TG2DhuwMo9ZgxTAfc7mvDhQxLakvRtmef1zTBmM7XVZbm3Qarc4Bge1fuJQQpGn9p3BURVGr19FyocurM4Hx",
  "key9": "K2zgv6mzAwy1Xf2hCnppvK8s3FMtL9y8AvifpfLZGTqV5emqZgwK5PB4vB7RYAnLzs34izmjcbYgJAcAS3Sok2u",
  "key10": "2go5TaoPWX2Lm5mToyyPwJ6816VigF7nDoDa8RkRtPmELghHfcNpWk8hAvwEiaReoYEg8ELB6cotCVKfamfnSAbM",
  "key11": "5GNVLRF7U5vKjWEEqHiKRwwdTd7EVrwoqrHBihqxUJ49Vh9D8MZq5ZQHuydHuC6XfWhJZjmCoRcTxqB9xW5Y65jH",
  "key12": "5L1svuQn6joQcUxTE2FqQsK9DGSMkCfMXBETxj7NeKqfQGwRpGhckGA4L27ZUeV256pY6rTZSfSK65Z3FCt1ityt",
  "key13": "3a3ZoXdCYZoPgZg9m6BAxXeuncugXYktYZrmzfEPAFbJyyY5uMEm8qsvDV2jHEwh5yZS5XNdjnqhnvHYwcUxXsPk",
  "key14": "esKEjKDRdEt5S29UfM5p8CsjAYspPvxwDVKbto8jJ4dFfRge7y65YBcpvTJ3TuZh7bnTQcUz5G14CvQHLFEydED",
  "key15": "2P6dz3xurHWEfrSdzX1bQXuyUBTYf8hErEY2W4mmEnCEoRAReXSzTxbhhCHo9cVmBoi8HCY61y21FhvMYcyL2LTf",
  "key16": "2bwnm2PF4ajFrcTJjHVS57JEpXNWfD1kXL6hkwSmdY8grqaVwCiwSVGx1NCK4MqqZYwLvYhSgnbsuebBTY19zxXE",
  "key17": "5tdnWCZktWtaqXwUA8E6CPqppayGtZhcpmNLfauPpTukWgJ4xz7MtTGcdgKrYVMEWuiKAJ3VZuPgE9Ri4oh5Tjsp",
  "key18": "5NU2z9xEFSKpPqsy6Ve3EgavqQ2NeViMHTcMSnocVrX3j3ShyusAc54Fb8AFMpCzdK7ksi14zEfdoUzCWcXRxgmw",
  "key19": "653KRYT9aEHgqtSYeFkgnJ9QAi1wswN9nWzhXitXxmCYLHkqfrCfFtpPJF8k3srB5WTBmpjZyZnGp3WG3ABbGqq9",
  "key20": "5KfqQYgupy9bm6Tf2bKTaAaArqgxdkPY6Z9KoirosXSDYq6tB1tigGxTyPx6LaXNiaNgseY39uVUZVuvqzax3sjz",
  "key21": "5bqDSosU4J9yxrTsKrpfkFndmszDmQfScARnVY7gR3UZNnAEZ8G2z1vdXhJPqAcpbcFrN22HPUy3MVmKREydb6TV",
  "key22": "49y1Ukxi79sGby7Y3MAexAAFJijr7fbeNJwd8NLsNYURJad5imQA6HsQDqMNKQag9Bc8gviF6B42swEQVdySDqWy",
  "key23": "9VPdvg2tbPj9MbARBTLUgHpKSJLvgnghHXmpe5fbY2bBLCeTuQdHFJ9rfQaUQMd6bcKCuGFdDAeKcsKe4wUdZ2L",
  "key24": "ChedREPugUy3DZFvCLvzbztLRDAHSxZth8vbyVSQmDeVxfsRQVScrowZiomvSnUuXLfZgHTjHHh2bf5bQRUHzbe",
  "key25": "P5RzgskMqJUMtaUW6cxf1U1LDCn9NJjAk5uXHKU26NmYcGLMay3tWcwnu3NrvSgpxbZaqRXuVGbp5Adauqipjt9",
  "key26": "5YZskvtvmtfsiMupMPPtoujDnR88KFt5XXCvnthPTh7y53CKR7PMhnJLW5Noc5KGuXfYqeTZZNjFwNPbw91kf2E2",
  "key27": "5gS61zjadwCDC6AxDEd8Yqu94Fpv1AFRg5i1gJxc2WfKoKcT7XNuBXhscNojrXteDjTdcZSbL5455J47bhQBXzFn",
  "key28": "464uz4gWWUWHY7DQCkgqAhSMz8SDWrjZ2fQDFgsYXKHJ8Pvz6iEyesk356y4iDCGcAc5rdkxYSENKLGhvYEMyVGy",
  "key29": "4ZXDktkXU1a1FG23Vgo6rTU4Gg6LhY2qNrFkvZqMx4FHavNBDkAA2zUin9ZANKs6FH6tAEhP8iXbpZdodeSdxS98",
  "key30": "TnUfdcX6DT7tyhsj1bZtHgiRbW1VFujXBtdKthfZCZS6VFRM5Z6635xxkoieCMJAzixV2EWSV6W4aFWB8Rk2sHr",
  "key31": "2f8fwG1dM3fDK86VKQLZJnKPRMSsvqkYi3RSu4NHU2Q8wuUUJTCFQvkMnoNRDkj9gk7dGh8vcx997Hmhv4Gbc9X6",
  "key32": "sQDAq6revaoXRtHcT6anH8w6oPkhXkgKmrv54Lu9AjYCi6ekStTyCXT7BAFSjwCGDEQGkwRzDJpPf65xmreKmwZ",
  "key33": "2gzF2CKeTC4WH1972HvhBsCvuNLXyA4DP5F5N7Qjk8RMfpPNFcxpnStFxY3PLUKQmHcZJhvRqCxE7oXuL7kwVsSm",
  "key34": "3oZZqj2bVoPmuSY8cuFWm2ANnRM7RehVioGc4avuiWqDz9Y7W5cpSiwogNU4VmL1orPoPfzo69CAXaBRA565bzA4",
  "key35": "3RDoGyJ3hDTnFBZmBsYHzw3yj2HW1W3tDqrzb3hxYdJaYxJu8RSY62enQQ36cnW78nVntzbGNYL6oVDxw42pYk2S",
  "key36": "5JzDsCNZ5MeRVW4CYTWww6EVFbepGCDLod6cbny5pa3BLnDc7971TEhw2MXewnJBA6scq3kybnREhFcAgHrdXE1w"
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
