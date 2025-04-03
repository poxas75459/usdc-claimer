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
    "5JMpdzHx9uELJToUq7G1p6wWPcwMunyNBeAKLZ7zvmVxXChcoFEqCi2NB8RFhxeQu7DkDcP45jYy3KJ5mtaKXoYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ey4MPrvWenNtFwpv5J8Au1u2UZ2qpMaK7HgDwCdbME7LELCmfy5ZYs7DJfg1U46dK8Vr3mAwhAqEmjwv3YCFx5E",
  "key1": "P3L445e6WEMzU7DbHWRWiaLMNh4sN9jahyEpGFz2MigpgQkeo45KWinSx2iue6ckwkfTaujJ8i8wpyBE8XTryr5",
  "key2": "KWxj2KTQiGgCFhFqQXer6pj653sXwLukwWcQYrho7BohzSiHcLHsd2wgjwQTP2eTazbNfWJbJFhJ6r4v8qUkRWn",
  "key3": "QwYV2znZS5KuganFxJT2XeoPnNMciH2KUtd1B6pwgvsKBLVv5aBYGPU36wyBq2mCM1nazCsW8hS1cK2Uc44u4t3",
  "key4": "5WBQ4dvts5mGTvRkHgZnVZXE9sjEdZV5APwdQ93xWABCnn8zRA9kGriRw4bDJCXu2CuaFHDZjx3gFvnv4nXBtxpa",
  "key5": "47gxDQia9jEvW3PhqDoghtreqocXoqiwhJ8iGNR9V1QbdB8SU895ib5qds4VfNW39qKQHmMFGYHvpPYd6SY5qqxv",
  "key6": "4DUcbqrWM4SkqADBMgfe7fjqHHS2NcqA5MSEmP81ueuoAsTDhz4duc8LZJBRRC6ybVQpA2ok1J52nWwnXPYKMVFU",
  "key7": "3qxsfcSeM8saBjyqb6n9HWWFYbiFJMvKGBiCbWdzhG3SpKWZJdq7ToWGv3EnHQi17KqnsHZjbQpXDNeoMFWMbtM7",
  "key8": "2TnfrwkydNg6qeXPuhq26ZhRQXFFPxWZx47LyEML9B2k3rY9bqHHXjrhPPsoAGtWe6vNWA5q6vjqJQqnUoPZQz41",
  "key9": "5SLBzqibbpFqDxHFAdDGTk9ipfjBwWxea4mE4WdAA6oifcTtYrKpwWYfCYsMx3od722FKKD637pKXAQGE4R8qMMM",
  "key10": "zuCTsYXRGuwL2ey9wg3C4BBtvYhL51ujfWHbGQ9XLnXUefVa4vbaKm1RYo5sJ1eeCt7MqishGs1e22qRRFzvAnw",
  "key11": "4j5C5HvF93QxffNSfncr4TZvoKpSzL1ALPyhhnBZ1DiJQsVB4Y9iov7821dgy8DCPq2tJcB8dDDaT4dKqebjme7s",
  "key12": "4ntoxeeWKVYgqA2SiNAEjpFadMjME3dLPgjw9BhYRd1sKAn3PHEi6tbqYnh8aKKYXQitCjhiXX1g5YmSUkXFrKyb",
  "key13": "243MFbZwsxsAi6xVwoLESqUNzMuenF9ebZPvaJ8GmUypXKUeApETR4pPaW6a5bCVHwiWQSAExhwaJVo5CnFXr6UB",
  "key14": "5i19RnfHYzRpXJYz9a9tnHmyGu6TvRXowroyeLoNZRJiCQEAzb2HxHrhGaM3CEu3z7tR1M22c2C1uYNpmBhUGMzt",
  "key15": "3ZBdQbjt4PFYgPLp1cUEBiLyqfA5JWTxKJ6YPgL3wYHtMoZPXjr4XD9cx1BwrUQtwqksE2GzQjEtWxBS4gpB7FxQ",
  "key16": "4ySKMz58FQtsXqYVRtVcmjPokeKkyUkuJkUtJpqwFawQG5TwzuWjphejeqGdZaGjHr6T8K5XGd9GV8HEtUdTjcJS",
  "key17": "5LVohFhgrsBNb7edDBnyB5n1eqWguwiHxKoaWhMnxwQxfQmejSSziqzVQCrnNGDoypsjJEDyKWQQZSksr89Rie77",
  "key18": "4AKbiE1fUfW9oGuPoWYEvU2kXWBuiPYe42M4bdgKSH8vRyphhRPzRApiH3FztYx6SNEEyepq3c4ix7dBAGN98rB8",
  "key19": "21kkdo3fzWwm1xHg6WcxLEvaME7icMdohaVw5EPU7KRUdsLori2seUJ6MjNXSxDE15793ThGmTDo4BVwPhpqGJS9",
  "key20": "5Ahr5sAxQU2ygt4SxqHvaRqgwL86TpQvp3LZWSPHes8tDUuPgZpbnwwxtHGRoTf9avVXD8EF2KeACXfVKhTaAoiR",
  "key21": "5YSHmPmmim6hetmkCFEbzZWKCjw6sWVTVVpt8YsUBQ91oxPhjFPvi3ZZoL4TucEXKfo3T2fQud93S65DwUcbC93A",
  "key22": "58B1Lot42XqUMgnbSuTAy9gjw2veJ9WqeYSG5qMH1FFUXPqKQG3pxUCrztLhBHj9vkqQxWpeHcpDV1piLLri54St",
  "key23": "3puQuQ2q2fKq5GkSG76Eiizjhjdb1HmjVmyewsPW4DMbNzHHM3J23AcCEGVadk2pSiDnZ197PQrXjQmTu48opiPb",
  "key24": "5gLnLmbFmXC9wxL5WRUmseDWrhM4w775ZMfLD4Yd28JBH4Uci2mVPqDUGDWSkRxacXXfUqdotDEbW3nemR544U8t",
  "key25": "BBD5BddyvayAZNoa7saaU3WAN99yUtXVFUtaEMD9oKmgufyqH8bBjU4JzxDp7Mpo73R5ckmHyxtYuH9QMc5LRdp",
  "key26": "2SVfN4Dj3v1xCRwz4CTeE36a8HVgspt4SFABxzoFsTPVSRwwtrsapQ6NxRN3k1PCrCWXBFbj3TST3baafbhsxG2G",
  "key27": "2Yzy3p3fbnWe8iguEn1XHqr9imBRYczpfgX2AwMamv4X9fC3UsjtySFfV1ZHmsJdYaGTYtNVfycWhkC1X3asa4xX",
  "key28": "4UiThPUz5mJrhM6NBPVmq7JrJUrWpac2vKf8kKtgr46bxwEvgdTr45N5yFZ1Moe65CVDJAdERhT783cPretHtRQf",
  "key29": "3RcXpjC6VL2AqB4aWD9RxqDH4svCvVYbuFc9c4hHKJdQKbPU9nuThMmsekobCDy6f8zxg9aenrgB6JS5PMUYdQcy",
  "key30": "2EcUh3sGvLfvtbwfvHQZyhgqrFUyphZhfmmKrT7FEAH7dMBkDD9CK2n8PHo8ufuRAiFVkHyChZwHAAeAb8w55VmS",
  "key31": "xXaTZQNYyfdm9xmibAauCNuxtzFqg6EjKiREzWLBgu2Hd8UvaNTusYacT8dRTt4LesWkb7J3QyPAJZcGbxR8fUZ",
  "key32": "3wR5UDhmoooExNCRGi6xKnSmXnpwxcf9y9VS62p6ezXmeHQNDTDTbFSdbWxD5SEiBLazpdvPv3eMNeifnXdqm851",
  "key33": "3THjbXSuu3kefVoTXoPwWzowPavE3x8kwg7anitku8C12NUyuTFHyXRDh2apphgPScA8fgaW5kiDY4RjsDaYZxuU",
  "key34": "4T7TUnhcUgm7vzgsrPwz9ESNPJsL3d7qEaArEZ4VHcnqbQXLKdgGJXKkMfhkiynaEUnT3Wx1GYH9DiuxRTvicePU",
  "key35": "64m7zVaNFAp4YxwyRuH25k2efbEvb5Mvb6fcpea3YcMmjKkP1LTaJUsVnjNnzECiDXHkc6oinU5QQD5yYoPrXBgU",
  "key36": "4J26PWcJegSYiiF2W1EUQfztqdb2aH6BmXjQVN27cHMk9qgA5jScxrf79Y2GkkgvmN5YKcpqowqJEMetbpC5y6c3",
  "key37": "4gpdp1pNBdrhbQZBnqC74oiuNam4gfnaoZmQiDoF6Pkk5JzGaWoTLRE4z274zT3d4g475oBQAU6pkcdjuMb3S7UW",
  "key38": "5eEVWYAE1sCMucT32d6gQRLfE2oiXiSYPzTMkdWoBurrE6znwf6RhbFQNYq9xZSShXBfCYL6dLFSUMVa3WUsTo5Y",
  "key39": "5FC56Qpj1Ex3vZdqC3JN2EuUCSpQTmB2ujhFE1uF7sMyekuo4paisXPB3FFbapwGHcBXoF8cBBQizKxwn5yaBQ2K",
  "key40": "3RZKCg9X59qYoEN7Hmt3dzjfj7XnkJJR3XPFUkKpJd5sWQhvZX73V5JjHQ1UfgCo5yd8fCmnithxKhHbST1uSVAT",
  "key41": "4kREraQ7gEWVRYaPjZERCk5JRgPXKiTjoR1RPhBHdexdgnB14usnxjCY2QZmzPPmURvRFVh5amPj1xhjoNVJsaFB",
  "key42": "5t76LmSJNfoUVcgLZNP8s5iXSwSzmdGidGpcs5uPcVXdBABW65DNiWLASn4Jd5Mhwc2mzkYTiU6DCMaZm42UP16r"
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
