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
    "4Xj8TZARLjF6LVxRgnX6y8pci79wikbVv85Li63CegqvYDofbANxcGG7aNPj62DmP2B78tdnBjELE4Y69cs5YwMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YFtiN7EAxLtBbtHbc7tjjPG421T2zsrpVHb4URwPTHCNfQP2Jr1nLGoM5VginRNwKYcRyQSW4Ds1eih4R18fxqb",
  "key1": "2MFPmR9BNYwR4HNWZZfVGV2YHTjmfXVHPodxx6jPZEbr5R6x2a4ANnYsYa3s5rzNFfaXgHCWfYz7cLxCHSuuTRZL",
  "key2": "5cvf9foiPrKcZRpq729XEH67472T4r3c35ugUg7Xn14crvKKSBMyaa9jgE1eAGtSxr988sYdA4tB9mjn136oSw98",
  "key3": "2N7Lap3F7zSynpUxk4pRt4SVxfBuyxBPTRFiuNfngRHTaAhKoVW66WVVRLodVWy5G2TcVJ1SsVufe3m6tPR2BNNx",
  "key4": "3y5jVfEuSSGTmgYea6nspbBj7cGM7Z4D4vpSV1p1rbF4Xn3DdAkjyF8wsZaUUn2oXV8t1KcfLHV6jGxUuLcY2F9D",
  "key5": "3bSyNDQWeQAHjfb1X54rvv3GwxRbiuAiRAe2ZZyhhXQAsc47qfR1MVEJQhFY5evicbHesZ3batA8BucpqHu7KHHK",
  "key6": "mcF624oRtsMRSqvr4mHXj5bmtMcmJzVnfMFwfPJg7BKdYUcvBYwaApMw8UadB2tdRk9xovjxYBB8x7UrMsBkZKq",
  "key7": "4qRfvUgTSC94QbgZdt4SRVLfyJBPD9XXQgGcqVQRQfvKuNwf1t3yX2v6T3W9PYoPvzoX9qexmMhhPu2SpLxZEzYT",
  "key8": "2gUKns8v3x6EqAgW5dApKyvTjUaPPUL1k4CTZes9fQhnCmg8h98zun72vfRJnjRyCQtdAvG6mNsu7EBqAkt4utt6",
  "key9": "47b9xK8jptZfkfLZahb1RHm4W7WizSmT4KHr4vskkU428AyevtGkgLJ6zFpTB6CTnEAB4YZn7PXxcpLjFZQsppCv",
  "key10": "5BaimsRnBZYGZ2CbiK97mvHrAUSWw5RGdbTwR2MbSR4hJWdTndMBA8Jk4a9B2cLViFD12WMzMJCEdJdVZCFWMjGc",
  "key11": "UCptTUHPXXEdEigkEnSFU3CeRQgf7ERemUWYMkwqd5r2CC8ox1dD3dfeZny21FNHKsPmw714K2suDkedp361Q27",
  "key12": "ngtv217CJdvC5QRqiivp3HHT5s9R5yj53tbBXbmgmU58WwXtS1s4WzMw5krKP4bPXSeVjb6yDiRqQHeHMtprhtp",
  "key13": "3qr88XKoecdCCNNk6wh9JvuCaGAPePciM18AXeEvgjkv26ALuCzgYra5dz2keTmEmSX7DsRpiCUBpwUVAVoFhZZQ",
  "key14": "2nEnKn6TworQeCSQ7J75qgN2nwhht2Ekb4ba4W2kDfXyx9HriLBuZH6ijpKqsYLQXmVRqzaQh3k11CW4kRn4CS7i",
  "key15": "WBjx3AfjNotDUGKxyAEnSRoB4hbjZqNbMY7tu68oH1CV8E7ccEoUifpm3etrYQHUPAzfwX8Yg7wnxMQU5dCAXT9",
  "key16": "3rYbFBQG5oNGriPPRQ1c6jKakuAri96x9qCq5tt9byaVpm4a1XB8UwR3UJSvBXCgCFdyuPW1aLXFtXuX6pZFhGMW",
  "key17": "5674os5Aj4vWRxmdf6kptzyVAxT8jrKn4RYerRkLnNwSg4J7FXR2pwuGWARSfgskQhSrsnwVuio9ynBkBuVegEug",
  "key18": "4AAhLqK7rcv9PMKPQ3Unj7vx2UaojKfVGGpLyL9kQBo1G1bCgugzUWbsyvewZGFtR9bXzxN4ALZTfsqpmafr7TyL",
  "key19": "4PkFYbkwtsUKhgiyZtpaeCUkEwjNP9SUrRC8xmt9hzj3puTQnvNVxh4wB8sSgCDQUcou6QnPHVyzMycNHNh1Y31F",
  "key20": "334CtbLno4N1y8nMVuMKJAcW8t9MkqXzoH8VaPiCKwDS1srSkzDXk4fSfgrkFxyqnmYHNCvQ3pCJAFrUJcZXddCS",
  "key21": "5vvUsuEEnGpdMKr19mtQNCjuNMJD8UHHvocNPhGCU1BV6Pc4PvXSfp42mgg9QqYmDhyf6fXYLBhnbA92iVum2HJt",
  "key22": "2SWcCzbz7PVvMQQcUd4GFZuoqv6BeKQeNomJLJmi6xVuCXnNCZ8Yih6NZ4tgjSPEjFYWZaYZakcWFqWRxd5VMqfP",
  "key23": "zK7axPCg8GtagRUnqh97TUMrNa26ZSsLcpr3kyFdsqdzKkyaZthZfbQNQ1qvk8JCdNaKF6LjjKk4tnu1XhoGA4R",
  "key24": "2B42kuo3CMDPfUr54N6kgA2Td9CmQnZdveaTRN5NitdyJ1b2yVowa4ijXzTxhWYGNf6RafeQjr8DZTDBes8rDZZr",
  "key25": "xjscEZBQeJcaidcc9nkFigshBQEugr5JenDtPBFdHMSH2DcJsXeWdoSjWZDbjaQn1jCPMcyN1RdSE1CSLrvpV25",
  "key26": "73Qp6Q63fv2J22DPUYYkCwxqQqLX4yY4jYrMTdVABSsp8BXHTSfkFT6sKMKjKL12i5oGKGVGFrnBtewL7P33Xhf",
  "key27": "4vLaCZHq9F1uGpHggQsmDnsR4vWBUb6iuXxaAwAUNhgT7jgrCDYvrWyzw9NAkPrYFkrqtGkoogsZJBto9rtaD2ma",
  "key28": "5gjTL6c2WgiJxcXToxT8EtB7BKo4wqeq6pQd9KPnDSP72W3s6ZWE2cWYf6kFm5duTiV6KW5Sm22vYrQxag91PHrY",
  "key29": "5sLQVTmQkgWsS4YMPzKHCYjKY1FmxHbSjiViK7Vx5hDkbNuYUdkV6Ui1ghP8RePFqThQTtiTkno8Te54XvAnScpF",
  "key30": "3kaeQwY4MxvS2zVfQCpZunKd52jJdt2Aosj8hyByqQpX6KqYLwtGkfo17KAJxD5az4XxZNokFyjZxzsyZAzSSKS9",
  "key31": "4Dn7nrctvDyqqSqZZrcgCRM7Y1J1h63kob2SXvhkLZjFaUYu9jo9o76vqVZ9m1YWdWTsQJMV6vjJ18kUaENhFKbj",
  "key32": "2Av6jSRrxzmdZ4AHqiJ6hNvHWXBaJGmU51i4sVafiabk8Vr8rMYof8VseeCuCe74Fx9gXBHHHvW2FEtCuukvv8sM",
  "key33": "5Cnj3GaMjztNi3uM2bvEPZt9Mi3jDM9QXeuZV9gnr1vBLBcZrtBXdqmW6usUesiUFJbQEw5qvBfrRrMdWc5AP2Wd",
  "key34": "2g7sEmop4xsdxj3fUpkT89QKRmEwookUAbCqiDYxLe9Bi4iVcLSEMEoEYcT2upSFEPs2qSd3DHU5EjfZPVGRt1sR",
  "key35": "4jUjvZ9BKLUmh22y4KErMndzLTJcJxTYjSa1tE1gTMvTA6XwkAD4MoSSTCKDPqHVSCWg9wpvoFCtt5Y6oxmnoDsh",
  "key36": "32AkduiZdy1XhKm76KjoQyRZNbC7J8EpvJ4GAbRXRMK6E7yabL6ziUsYrbbCqXXaNk3zUwy77UJnm2L9R4aKnoqK",
  "key37": "3zZCoBaLqS63KFEKM4Nh2csbsjY5G1vTKHLVcPhze9NKrxgAYWKJPsaMzsm1QLNSwpTs4Ffsg57K5cHraUwzrnp5",
  "key38": "4GuMfCkYHqe92KyePYueJ7E95vi9swJmetb4uubPjWysNLLBPpqgvXfZSWwrhuBcQ9ZAuQ7ubpM5uRPva8qkDb9M",
  "key39": "3Wa15utwQZQd9YkRndgcvuNtDcJ2mtwkqMBKqMybSh7UpXetCQbqL32VpMkAW7DsXGopDsaYJHxi5HRTboKHvH2d",
  "key40": "31R91Qt1REmhNqK6vvGktiuXYanyWpF7rvFikzBDvxD77mVvdMRWcjqYZqrFTBXeWjHaYRKeseF3j2ahdWthBciz",
  "key41": "4PEcQ4WeZ6C4ABbRVBFCBXdxupq8sRrW7Ef8P9JAkN1i95hHcyrLMi1oFvfpf1iXSk3rK5wHFwsH2A4HnSKSWfkV",
  "key42": "5qEkn862oLvWwaggTSKbLLeTaSGxh8aFurkQJBh1gN7ZfQjn7AWdxESXHXdkWt3iqG6km9icU8moJRHRsdjYbNaP",
  "key43": "KKkfRZbjmJ9Ec5yDe6XowJqWYCYVQLups5Dx7w4ybNFNeZ4UbDsQCTgZSWQe6R3LZ7x7ePJ2s8yeFeETNxvs1e7",
  "key44": "3iZm1CTK5uJXjsd3cVF1XeZnsJmKZh1J5xdNE7ad1UEK6txAZPic1F9R7QkkyzcFG6NugPYSRNGiYos37snry7GA",
  "key45": "2xQ4d3UiKCHoAFkQD22iSQLqQMJC3v3Ndwrh2t8ur11AyqASEogFZzB1jezgaPpLxXYx46iQP9X5SbY7H68iPdH6",
  "key46": "4FxmjSA6ZLr76DtcVainRpNzLws9QyMFxhv63QbZtv9xqbiA3ev7zVoLBHL4tXu9P1QLox79FGFuECmV4sVFD6Eg",
  "key47": "vqdiEj2L63aohp3GfEHoyGrVvZamuF54z9pbHWvctszBPs9tk285t34gsrBFmDXDsZbWDWTaf1PQjCje3ZrVV9Y"
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
