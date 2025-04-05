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
    "YpWzJ27S6ssn1qAkqNtUGvYht7yS3PhsV7P7HvmApBs5nEVnY3SStjcUpCcbRwyDsG9q5QxWpyunNxW4TG2Rhvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KfC814kuMGHUzqZoxGr1jmeUcR7QSV2N1vDjHnEwwuLo73nVgwCWyPsshKmaXqqD13jJNgjq1V2hkj23tYWPYFe",
  "key1": "p2TPSdCTxMcwEbTu4fEDJtGKdcRK6ZNhrJttt1JUsaCX4yE1UpiGbCt9TEQmGRY8eQspL2Dwg7ENyWxT8af5piZ",
  "key2": "5mbKyXTGwqRunHweKw7oTkB8xUzE9f5oRqnJCizjUBmab3pMJb3mWNeX375utGF2w6mo8iEmGmtfB9rMSpqxZVKm",
  "key3": "55ctzZqLHfFBZ8SBA2YVRhmFbLch22agUbjqZVfZVQMmbZcKKQZuy66SRqLSWWcQNG8rBTtqWoSnmxq97PpEC9Mx",
  "key4": "4oug9spak55GwAE9eH8sDcrHU3TuXGQQDp8et6nU2RTtxpx74MMUhdVoXPP6mphC86TzpXoGMzHibV2dv8kR5t4c",
  "key5": "247WGquy29nptdw2CjVKq7Z2bNXSDeAiT3RUvAyissKkLKJAw29KUfQtyi4UQE5vdrGKz6nt7dA5imdFzWn1Kc92",
  "key6": "5mHdHniZHey4v5AZRKrgHo7m3j85U9uaKFJyE8TTv7g7q9ud6JW56aUn5HZotdQbqPZc9xsmdbGvu3fhawCCVbtK",
  "key7": "5ahkhvm9yBUJRk73e44HeNnVGr5Tm6qGHYM3scGopPv1oL7tsVXPPkXDL6Pp1tr3ocRfHrpSFqdYdbCxMxpGMRKh",
  "key8": "5yLAss6dQ98UwSqpgLxBnEYyw5AZmiTNJNEJLcP9ofCKoDWmbPMauLth1VBbnRQKU5g4MLeTfbc5VwJqZG7R7bXD",
  "key9": "5uEfqpSL5CkQJ4c56NHpBaKPvJEzmKnXGMAvSEZvRYnLcMQDVsGPWrYZqmAWaRpge86GKAzRr1qJ6iPftC5TvgV1",
  "key10": "sG9nkXHfhBzqZJ5ZiDDAiNP5VdJNGQfygaHFTrADUZMcYoehenpdXVkbrng97eGypDsyRTvnaSbjCUwV1i5WsGg",
  "key11": "2HXHhanh4AQAGfWhf1rZUQ6zigEBVLnjq13fj9Rc8C5JSWnYBYjxEPy2uSrsiHsWWJinE9VPi1E7eePqbqPtZ1bn",
  "key12": "4jTUz6dk4qtAzGwicbGss2gQss6eAAFPJrja9gjMnxe5iBjhYu7pn3hkiZ45TbWxM8vwaD3yDjWSb5GWw2zBQRzE",
  "key13": "5KBWVJ4U1NPfpfUm6gV1EY75Bs1a9QKrDXPBstbs7q1ZdyY24sPpSwqvgqLJALpzeu2YhKpgrhNDe2XUnhymKPJb",
  "key14": "3FGz6whKjG7pvyu7bNDXhHrm5TTN9TruQwkMhnWkQBEsfRequuU2ua9JS8gmHix4WRSfrjKd6h3v9hHMkRQg7tkg",
  "key15": "42ExTDZeZit7a1sLYMA8HRcYU4Md5N3sZikEHEViu9dPJFNQsakF7qzLogkqEEpfzEdxBasY1H495pdVGaoVwZ8p",
  "key16": "4e8Bzesa85wrhzm5pjQgHzATQYBaQgDZCuNW5sMg8EkXuuB5UyhF5RxPwTMZfffrxnrSP7x8mkbund5Mv2ArLmPU",
  "key17": "4HCfgphkNXgyfERfzHdTQC6KGYeYBhnDEA8ZyfMMyFEf5xA8ptKDR8mmtmgXsfutvz9Wx2zPfN2mWv9PnZD8AVQ1",
  "key18": "DSNTLBi5RZ9x6e1AobMw5z8qw1nXqN5vEYnKrnaMV2zfZZhAueeH4Ukw4s2gqPULQUBBpU16Wucwa65f6BdhHMc",
  "key19": "3qAFnE5LUBsocUkSRfRmhbrb8MnFaSmbsLFAoyWCFjVftyLLfSVxqoedgy72hF3xdaH5VM1NnJhphrS5HbSJtjCR",
  "key20": "fvfobMBNjPv4FfddF6Z3gN5m2ttRG94ca3kXCiDrHpKQwNcYJSTjZhq87bB6JUDbMMQRsJAYwTpXV7zaebocsMD",
  "key21": "4yNiQW6fpAFCyGX4MgYg7pUL9wByjK33bdkNKXkpQyPi2As4vm5D9YKSYk3FPvWB4f9dDS3gcS88YJofvJzFd1Ue",
  "key22": "1oHchxV62kugk32k8KcXZuafGVHxE3EJX47Evkh3334GSwBeEvuR6ipVivwxW5P8RFsCuQs5Xjvv4FVEqQPtAKZ",
  "key23": "5usY7TRVd1Uq9TXVmgfdHPKXMgmmNgvGpRcXVfb6pY8CtxJnb3JfVVssyfeppGNjpiRHa5LZa58We4aYkHzAzAXz",
  "key24": "4HxxMGJPpvzb9Wk764uuS6vcKyogPDQHUjtoZhZsSFFnGpn68UZMXM6Y1tif4aYazwoHka5dRnnyzkYR3HfRLz7s",
  "key25": "yyimaUo5GheKM6iEHyFbja2c3oL31As3oGwimMiVZfLAf4pCHLj6SLPLezvt8Ft39xjPNPRMuXxMHn5bkJGgB2s",
  "key26": "5NBmn1ZYG9EgsBVjwBPQ4iy7SB5CU19nJAomT8SBHJh7XcVDY9VPZ7hEsDL5HXBq7jkX61jyo2FQTu5SWWUcHSg8",
  "key27": "iQgS2VorJ2LoJ11GEqBXmqrTS9P98rmZBr8tdUJhHMP7hTWYCtmautrW1Mjtg8vqjnLYgBiYhaiJw8GmaBxWdSn",
  "key28": "iNH4MC8iXH26jxydFxGYKrZHVjUVbeqnUXQFGpxtSN6kGr3jrYg4SryRoCuHCgCaCQA3Xpz2u7yigcL1XeGoTV6",
  "key29": "5ZJfPudWaeXKDbhAZazuBsvMnaMX6YpEMmR9p4jrukCCsPAr6CAxiMiBKr88beq1eRrnQtkXprD1orsu6t46Nxim",
  "key30": "37PDAtey7qiXyEFee9Y4F7Xewxbz9kDHL4AGGQaxwe227XwM2mGN8XKHQkfXuquaBj7JaYdhEoUcRHcRvJp6Y6b5",
  "key31": "2barsXWHuVkPsDoFHbBgBs6q8j41rHg7bhA4Y72295QRAdaT1EgnCXfgvCWQUNduUWdhTuNuPu1te3wUXoexaYw7",
  "key32": "5jjy6C4XwwkvZRyKVK2xXQrtPxrQDxHGKDBFWqGNNJRs4kZt5GLTfe8dH1Y5ZXCvzNyQJB4Jahsh29PBKneBLJvS",
  "key33": "xvYEr1ReZzuv9AAefScMaaLCdn5Zev9TS19y7v3sHeoFe8duVyZEwBW9gE56u7QbFP88hx7MKou63PYhswj9Yqw",
  "key34": "XzufnPqjkLnjbUMPC2BW8WSCQxUWPKZRWPeoh4Yo7QRe1WegkXYN5XcbrYRHxhAQEiPNWzUnR3wJ1L6QMKm4tpr",
  "key35": "4XSjzU5gmPh3qRWqdN9yxSZ32xbcDfpj3ELeEgeQ9Poq41UKMg5DDDS3KB35pFsYne1RJ1JjdZAmgsnzqRp4aCSm",
  "key36": "5V4D2fUWdS79LhvTjBSWstKBNKfMB9BF9Zgzb3zeaaK3NDg6defcYWujYn3ZiaCFSibnTMTHfZXG7qoAfiHypmev",
  "key37": "53kxU3zBwcodvANPKv7YgeZrF1zbJNYPeSxLn9489x9uS8sH1w2r4sBEYMxHASEeZP2eDf1LQodsDqHtqDGFqFjB",
  "key38": "2NkQvKiNhMQMe1CSSonoYi5RV8mihxqREPnaKUKno4xewuLhv5uUYbmJSoqYW4TfUomX2gSmZzo8NcDgXLbvi8d6",
  "key39": "61qQr1E1izz11jYapUStbCFc9EUC4BdC3JZvjF34JhzrKdNozug4HKoaJGxehPTm43SDyPy6aNU1VHKCjNwyQbdH",
  "key40": "5MgJmjDM8n1e9B3NVkBtR8xAoMfrzNjf8FcMkfMmHBiqy83Uy1niavFfe2FFs8RaNkyNTD6ZN6z2bsg6Snn7pLpC",
  "key41": "61MuQr7wQK4MRFyaHbZRdaSGomKNbHyt1P1yiP7D7D6n5DE1mYSrb9VNWksdqY5ay6u6ogV6vAZkunjAD9475g3e",
  "key42": "37MctQe7YMjYGTaPqZQmEHMZhz1dxT8EFswnZxrPWAZswtt7zD1MAc1SmYvjSEUYs57s1fSgJ1Tc54wShPxMMe7e",
  "key43": "5CUvJnYzP8av5TnTktaNjVjrAbX2JPwhw5c1JGWwLeYnfzR8j9Vs6FXseiXXoG3ZjubVpmwP6yXivTjjB5iL2BBo",
  "key44": "3sCLDRb33pifbWkunnJB6zAaceXXX5eNXdBYuXYQEoW31Y2YCmHDeJCk9hFJbW9XiUmYkdr9pKk3KMa2d9yKHv3f",
  "key45": "3DYWTiMgCjrY891FfBVQqtzX771PBd7U5X3MiLQpeoSAbMvBPKuq1oMi6NmbuwiURoUo21sVN4Ve1bVwGs6um5sY",
  "key46": "51HDvqkE5CSoCF58cJ28WRjjhUqbjDHCZkat4YMgu95ncDTkpyWeAxvVw5akWA6pDPAYu4XGwicE1y1qvavMyroK",
  "key47": "2KJmwPmrWFc1YQYDQ1rJiN1Zcuyt4RdrwxEahEppVeUCHqPCDw3gK4xXgHgVBo5hQtektn94u8gFGq7s6vS4ZDHU"
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
