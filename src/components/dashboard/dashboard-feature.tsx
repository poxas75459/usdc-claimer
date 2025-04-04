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
    "2ZycB51En2eRgHWoqCigG2ET5DLCEGSrUtJf2UkA68htE8Buve3nYsP2VNwwRmUrhfkAEjpsR5SVXPZYHJdUgHuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TTBsjxYvai15w1b3jaN3LwCemyVufDDzUZm49GjMAhHLgEk9jxs3HZa7HypNwAHfBbT9mcUN7iEjpDBM1fewrtB",
  "key1": "67BpgUM2GQcQbeavY9rNHaMZ5CBD1rXc7ff4tRWiMcJ1CrZpzKqyw81jWFtyMgSJByjPxQ7wBfbDycaeu2U73t7E",
  "key2": "2eDVRCPbHTHmPkAjqoykgXkY7qY4vZfhgoU36q5gpedTLWTrsJKZC4cjT81kUmyAS44GdZNWpZRGTkJvb8k69GWp",
  "key3": "SSJdaRrERNVqJa6nUGdKm1XQFUE7P7L1FpDuWSv19G3aNsPFMzztMHMnbFiPzhesHFWsvAHATYfRWmP1qpkpFev",
  "key4": "2132hVuN9Y4He5JS8k4oEpab9m1y1h4LtxrGnpAvuC37Nu6cUcHaq97DcbDhXF2QQQW3uds5HzCQ6JAXUG7ArBuP",
  "key5": "4F6wTUFCVJfHZeb1P4eg1vr2LMN3MKPy7hZ8UTGqHxyGjCYfssUKv5coWxf2MzEE9hLKJwDRr5uj3Ef3ctWqEPT6",
  "key6": "5GBv7DEXN6Za1XHsRDV84dkvLFocrVJDaHvnenC6yasndyFYfYMU4FCfUyh1oxJgdxcXcwnvV5grKRyvYdrfJ2Go",
  "key7": "4XYxvsbGHELXjwRQtb1TGZ8LhqG7Z9GK58W1hJNkKvrbehrzoWsABQvjmG9yiMHaDWviyDzioigHkGdszcx6FEyX",
  "key8": "4GPzLDLXiYb7K5HrvZKDmPfVTJyzrg1RzPiNTriWqTmaehH91BTmtHKwyC6umqzHRABYb1LG9PVAT4NMyHhrVCW4",
  "key9": "5RrfcyKgCghgGMPQcS11Mcu4B1oHYCzPUgtpksw58WkofLcgKBdC6FSuedRepybDxiDQL7y99mB33FBazuRxdrfH",
  "key10": "24Qv2nLLkdE1PpmoCKWjBrSRvSu6xbJnq5hgCcJdHjYSveu1Wm38vbUZSWxq3kGxWoshyULddcv2244NhdapmKrk",
  "key11": "3wmUNY47D9XnS5XjhUMCHvqG79gNR9rqPp25NFn1f383KT3mfJTZCDtF4WPvHeD4GXENWNR9uBbS4xLfUpmGknnZ",
  "key12": "61wBf8SRSLeNqHeveBKFVPXVH8W7vqrF2CsJcHXhasuJwemnmBFsvDPbFHbHL86djjYVdWL7Q9ngzLZbhyWeqpsU",
  "key13": "jisiqthoscUmsEjqeHdQcmW1f9HM4dvTyuVh4NH7h8TBPfDdxKBButqDHziXsQtYaRNcq2qbG43bACp2L4WDaCX",
  "key14": "3WRn3oYXRUW6xcCmva355Wbbj2s8FCXtCLTYruLxEmwRM7DCo4HtdnTcREvBArU5Xw2FVG33y4fRZR2Lg38pkhJj",
  "key15": "4RHEMwVmpVPGYookTtpXt5FC2A4HmLBy71QMmqCZtJXAB7sqWWcYdXcP5GrWdKzr4a1yym2JusdbcWv2BvhNBJBQ",
  "key16": "39uPPrDr8cVAeUSwGgrscfgFmyijW65L4aDue4hSgj1AH3zTSgD9sNExj2Fch4KdgG8EdEvHQpqezpGct8yLBn3w",
  "key17": "2jS83hzKktP9TEZ2br1uHRgtW2rRMn8gfVxca9Ft6yVKDXGxXjfoB6RL5iC9xowm8W42hy7adkQNZWgcrThEAmnY",
  "key18": "4V9X3xW7RRDdUKhnAQ727dFh1ajUJSF3t1MF6CQCxxwAbzkG7dQkUfqi5PGCrUymqV8zKxaaPtjCn5Ltt4aQHusp",
  "key19": "LZkwdR9FbqUKykaWmoonkFhSyfVHhVVwmJ7hL7GYq4i1jMwiD2oZq1gT7Bko6QF2gjhQ2ZGTxvMmn5BibTmFHTe",
  "key20": "65yo8W11ETe7PDWZoSq4VHvRL9KFtoSU9rQUdDCjPhPYLGSKyHTXvKkdaMMtn2HFEU99w6RVGVGcVUAmwbCowpNm",
  "key21": "tgTPmCrkpcwzRGFwawGWtpM1o9STQ3anM5q3u8sSv6kH8WXr1bmEFqLqPRrjiGKeb6vEZGwXpUaSHJsyCQArCLt",
  "key22": "tW7uGxFxpR2UEUZpSwhX2aubhgDtPrwmaWZ4G1Edzkm5dSXYHDJ2NeUgBPQzEhXTFYSbahiXjPFHPxoSEQRYXH1",
  "key23": "5oXbwhTjqcunABqznd7ijTi8hQQ8pjttXLfmcya33ktoTryM7z7aMbEneu4f68EC8GA4VTBKCDcjExPb2o2sA5gB",
  "key24": "5mmTKHA54quTCY6cwgHCmocEFun3qxUWiMEbDsh3MUsEbR2R6yQ9Pnixwvw5KK2PYLMphrHEQvzyeyxjvWMquukq",
  "key25": "4UTjpR7pS6s4E2eHW8mVq4SURS4ngTtpCoxNPLNfzu5FCh2o4proEqfDWXahWkYqXz2jhtAWSmt1srTnYmdZzzB7",
  "key26": "2KdMzBi3UZywu2YERXfZFr8gE5owakGE6hnhwz3eFKwVaAWpfr55zNpyEZGwm46xeT5ZdtDoQF48hdn1EqdHcJtd",
  "key27": "RgvpYx6CRYesgrsHSCPS9rmk1xzkWASQHX7gBi2tQ9poLYrj4SToXhZ35Hmyr6WYDpN1qMfRvCxVEYgVU1E4pMu",
  "key28": "2M4sHj8iuk2D6pydTBnvzeziTJZ4mY4FR7aeJ9EfR2w4zNfR6aKLfeP7KaebsFz1LkNFupeHpDgzVARNCjLNyb8X",
  "key29": "2P4vCvgJnEA3jHw84GwPr4ExDCXLUda1E72R33aF4k1BzgR1CHGzqJHeSNwoEzN1vfy7HeQxe9HehvEx3byC5mWN",
  "key30": "3A9U816B7psfxzxxvZGQjGDxmcrXSHKRB27R6i8TDDvA1J5ANM8P3Y6HEBVeDyzGCsCsjPKSLhJvCeGArkLwoLrM",
  "key31": "wcRFhoSYYWYVGxf3yZdAMd4MC45cR4Bbvau9o1n3PQejAGwirpktukE5EUn778xiWTd8uUaVacdFDPi8rnWma5Z",
  "key32": "5S1x931JtvHGJqRBWr2xdoaMDWSApzSqHQnddq3jaYTVaGm1faumNkx2i3oZPF8FNxYB7dhaatWKv1opCiff837m",
  "key33": "9UFWxsD2VQmJtUxd79dorfqCn9W5Z4nRqHAXntQyCvGDjYF5Nd6P7X82TLMmHgcZBhYRG5uJPesD8PQrxSkC83R",
  "key34": "5hkX4hKCJLtWf4HZh2v2XXv7DbWWPCJHEdSu5EL7EjVi8SPqwqSXER6nLSiUKJuk3SHhAuZQga5jK8p9CLA9GoGt"
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
