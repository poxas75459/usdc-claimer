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
    "3iGzFf2LCdkkJ1MkRiM6TQ18kC7mj5FhtEyTGVNBsTZ6e9dHMiyv6cxbsefn7X2AanS2yDEWa65aXa9CqA75j5Yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pe7J2m2ZRmjzsq3gwG8Q4G7jwcvvRuokey2ehyDeZETZ9bT2ma2zJTbE3GmFb8djSLeXnenM36kSE1SJV8ZEo5J",
  "key1": "23QuNRUcramqb32cxS1m79vFF6VvAEchJjyGuRmCHvd1eRcqXHzBzVKoNkcU79CkDR86iYuqoKmSQgk14GsB28do",
  "key2": "5FGwZReVtRPqD5xHNcaNcNPCHVpviRktUp5VmAAMGsREpCBXhoaPUrLFoKA6k57EgzjRdzsbg8edkybhKboY8Liv",
  "key3": "5vgJFXZ8wu2GZPPcHn8NZtwou2ZGAzNqTnyvF1P6BmtGJagydL6GpKBB9Rcsu2q3Z4c4ii6zRkwnEnjJYMeNFh6D",
  "key4": "34MLCC7CpVZWLz57RBcyvUb1TdMfBwtLV2FyyyQhfa95ZyGY5A85R4KvV9PTbiwExA9VjWrwf14HHSA1j5nJuTzC",
  "key5": "ApceEw8GPFnn1r1j2mQcx6xzVt68U2de3bsxSqSiJet1Bvjea2Qieg7w9NGh68nzCQaLg5ruk4A6oTbgGojG75n",
  "key6": "5ir5PtdFaK383CNaAb2y9f4UEQiX8RTFT8eayUX6SKVVB6PepZszMpqaK3MFgyqvjfk4uUJFiF3Dq7bMCwu13fKG",
  "key7": "3cs6meBoyB5z1QR7tPNdaZ4AgbtLcfrMQMkJQXMW8G9846zzHigFYXnnDqtEREZk99StuQQb7ya23ZU5wFfqHtVG",
  "key8": "67jwBCacmuFnLJ7fozB3ALPUz5Ae6UbckgR9hRhWKc4BSN9sE4kf1VwrCMg3TKpNmUiEUvcXPdmtHoeXBDeZJnK4",
  "key9": "btHfXsskRxU1ScWHLZyvxJhJNRfMxCNS4tHajA1QXC8f7si48BLQEWTAXSkcNpnDkD63bFo1vfQbmfzkPVP4HtR",
  "key10": "5t1n7ZYf8RLVrHLHQREsvr4RNjF51gr3HJh3BJDD5jHWQYT96UjLbGjDYj3uCVTztEKz8ExWYxpNr2AvcTPVKtZ3",
  "key11": "4cfW9JTuqJyxAo5Q2nMSpCSCHRGsGeq5kgfQ4pktGAitJGUYkBdcvvKJuT5mpvxjUGkeDCVPaM3FqcCvdxPHvMb3",
  "key12": "59sqau7t2X9mL6bWFk3kXEzgtNR3RPgfbTxkVunFvM2Qe4hFqhzuxgsDevFEgptZRw7bkJKM5D7tJNdzTfuv3TdB",
  "key13": "5ZKvmbZQE7Fx2pwsiqxCcYMzovaPhNYBT6gaENxNnZknUAPjCzZPdLHtiu3uiNotvHkt3M9zBaUqjC7SzHtptYrz",
  "key14": "2VMkEc6Gzo4NPaSAUgvmAYGJyySmBMzSaGRz6hijU4WSH9hxb69TbmcxahAJz2FPbR9JFfQmQ8Ew6HKhD8vLVMu6",
  "key15": "3QfYA8ynWkuLCbX6Zop8Sqx5fSfMRV4e9NaeWbTNRQp2vKSQ7FNmrnEPztfCe3H2Lp3VaSHXw1cL7NVZJoXVXZtY",
  "key16": "5grJgwCjeFt9qt5hmfi8P7FvJggnAhzjB8Ba9VKpMXf5Hz9pJbffc7CxME7R1pGgNhTQCqrABiTay6CiLdq3MGda",
  "key17": "rrZpB7JZgHdognd5YL3dexTTfZKdFQN2SeoxEfvPqZewtUfyWFHAry6JiN57rNWxiLMo4iQZtdi6tYqPq7LLiUT",
  "key18": "24Z2WoFAjYKUySf6HSQToXqVkMxKUU3iX8VL4JnPrNVJieWZ7RUvjCe1h7eizgM1EJitxBUFPN7TSv8otmnuCKBg",
  "key19": "55EhX1Uy2krjQEV8h8rqS4uixyAyxGjwRE8gVucDAEFRRc3cvHgVx9z1XP9JvkCbEtD4x9uynjf9fz7DP6Jfqsdo",
  "key20": "2wL2gctNYwVVG7MDrFsDPXh8JqheTRbuTpFzqLvX47DHCweUX1SzrRhVBvvQ4v8MA8MgMcEGFvaeUQpFhNtzuiMS",
  "key21": "2p2H7wn5aJxNpGG7UgGJgrCGc7ZnimFBRTXeVx54whFB6S4UMEbKuxapvutu7ykBQCTTvTq9gtGz84ewnjcoKjek",
  "key22": "2ZTbeG1epVqxfdHiKsMPiaQ93doK4bXnh86H19ae7oqQC5xFskyVsYfajbgNDMiPVqx5TEvnjUsHGQqMgTUcg8K",
  "key23": "4uXtLA6J9SGWF4cKDfY2W3CQAzLMz3wPUhcPSieuoJL1oC9geB1jHkgPaAr6jwTwfuHQnRs5DGrD86LyYggAS4SD",
  "key24": "2dRqNjB9msErW6Hakgbe8QMBVP52zw9Rb9o7iujMMxNXbnfM6WKwrn4Wi3VVdWNpD24MM3TsFVfiySdGZCNG1oHF",
  "key25": "34LVRxSHrEA3tCveD68615wwXjAQkzEcs1vauP7CrhnNKBaa6p2AGswen13rJZDqnKoPu7exNxxumrGwDszmGQ1Z",
  "key26": "5AR6i43uCeTSJLiPBrcthVmqWQfAsdgNDmH39wUYWbcFcaqntckXgKWEYaBnR3Ycr7WahkUB2JjTZiXzVdNRi7Eg",
  "key27": "62uGrVNeZkS9ZozeLXBCfnjk2MeErcth9RSrBnhKDVCGz345taapQBLTq9x6D6N7QKk9WdLBD3rGdE3xJJET1hnU",
  "key28": "4XKijiFtaeef8T2BES7eMQRhKVz1wqEx6utteK2RoQQeGauiPwBrBRe75sQTTAaWvhHQA3xAcxobBeJVGo9fKKjt",
  "key29": "5AFriRJ2nofwRTnkHGJxjQTwsMzdU9Qs3HPTzoLnZ6ykoYDdrvT5afdsRyoQYRQFcKtoswjPHxkHWi7sLgB7Uz6m",
  "key30": "5mGhtuEYb5hi1CEGGJ9WDJFqJP194VNc61yKh76Wd47QxUimagqFyQmKUDV1ayrHY7EBNPnkx6sjM2ssdNvZu3K1",
  "key31": "5HTrAkrotdnCt2xn1AZAPsejd93ZC1Fx3i4qGSqJgtoASTvfrGcTb4yZqZa2sHnzqg3FUe3TYkfhtwiGKsdigmkh",
  "key32": "3cbApUPbyc4Uc2pQxwwxQARjMDnxW5RQww5RYDrT2odiShQ3SHyR6paCe9PNm7w5qGvndbF3Ny5nXxoxvqT8GPsj",
  "key33": "22YYgRewx5XUxSB9JvGz1LtsjXJ1m45uJSbxLBLniBNRVvGA1DkFjT9G25ZMy1TNq4B85ZAH1aDPpJrhwimNVJaV",
  "key34": "2GUJ4hfp5CPDjdtp6wp9hwnrVYA6ab4AM7bH11dCFYCA1BQqyeFwJzDagw57oTcX5M8ioEXTojeUGm554WNNKYDh",
  "key35": "4RWDMe2U7yfCDeTvNB55gc42yqKKSNEQKhYe32ddXPJLE6pqwHytjCwXfyNCbGhLLhbt8fQq5CkEQsaLwQxTL6w5",
  "key36": "4CAykoEp9ndnB7xjqRH2HEeNqAtYcpfjNojL6aSjP8WNZAQfSiu8EGUDK44Hefbj1p6CohbNeWfsrZEoffAy72GQ",
  "key37": "5oVSuJqJ5u9eerRVmMaCcY1ceyAuUGQCNopzCfxrZefHaUkHKft6Dkh23WYEz5VWtwgLESy4zag5pBDPMsNBZyWb",
  "key38": "4vAZR75fdLC5Gwq8h2FDmwuhyZyEJ6kyZWQSfA8HL6Fu6FkVHCzTuQwig61AdHHr2yWUDnwZWXUXWUe4GKpEYaPu",
  "key39": "2kC1iWyqpbZZuC5vhL5pFuaYzfoETg9Aatw3GPrHXNwzRJcpCPCGzRxd8LdxAQUvKcxL9Bih3koNVC43K1Sd2vWp",
  "key40": "USffhgQfg5G5k3YLgX2ub3ixhFiGUGDH3dDDiD7ExbdHPmY2u9c3dBfRTYBWrgHWWe2nKSZk9YBmiKuLHhS9u2D",
  "key41": "26cSc92Lh4ipcBx8P5iwMxGqhVtoemVn9x9P9nN2D97givAaSLY7VJKgM2sSokjX9kQYenKcHQdrPbdP8VpsUmhY",
  "key42": "5o1WPT26iibCYGAFo6b1aCwkiraQEpiub37yMvyZKTVQjRY4hEFgWWLFKDTR28yC2b83qTSzQGFm8dSXdkJ6HZUn",
  "key43": "4Ucv7tAq6mpDdFauEUNCahmDHfMAjQWP9qFhrP2iikfB3846ENb2CadvNRncBGX6h55j7RDTcag5gzyxnJGhz1xZ",
  "key44": "4RDtDqK5PBEraKx951hevQMrxP2rj7fF6jfrRGN74FCkGcQEDaqAGDwEp4u6RLwhys2MGR9C6ELNuwcGMfv8ddbi",
  "key45": "4G7i93VYmJ1Cr2Cqjgdr6nEZe4zpTdW86M246faCqYGZLCF6nEAFUceCXyxc8oT8Fmk9swyxauUsVYHTQMneHwKW",
  "key46": "3Le2L378eBuCNJZFuCZKFTQmxDhrFjrtqmok2Kfy7VQCtdYtEnPwCdTzKT3M3oPENSqfCgrxS23MkRgUDXngyXtj",
  "key47": "65CAPCa52H6zUCCw1xXm3GsQcygd7gGmLFZqRsJwk9a4yRMF3kV2puAd5uPJyaw7PGwPiRY7abCpoUue8ePMRZr8"
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
