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
    "3K1EKj1vhAG7iDen9C5RXtRDg2T6KaqWggEFXARQxcW8UANGjcrue9ubaiisp1x1FQjxyJZvxxXRdd8qwuCPZgZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tQcMkrRbvgLHEsZDb1nqvXG4NZts8Ea32t6dJpYdGXyzbtwo7xt8rfuAm3F2acJ3PCqvj2wGkvcFXhxyxYhkqdL",
  "key1": "3LNW5ZSV6UHjTwswpbngS7YTp4pr99aY3aFCUes74QQu2ma1JYQyKuWSGgnvMW3g9D7CK7Li1YSeZeDSJdJB2JXq",
  "key2": "5cQNxK3xdKehDjxzZReQZDp7LZHUQwSihFhscN9xaiRaXH3NSSxqPqiFCHnvheKX6hy6efk3Ah8JBkkZoQPSN7xe",
  "key3": "MYWb19F7UShXSSL4q7NsutwPoaYw23bRCbE1pwQi2HzaeCYjSQh8Z3zbL6XeAc57Exe9p6BejweEsD4hHz1zeKr",
  "key4": "2H4gkDrFDeTEprF7eK1JYyPUkppcw2xjtqrRwDKm9kccadm5dRNs8z8ASCcGK8UhEjZddxR7Pd7CrJgb8NTK5quN",
  "key5": "2nsUjjBooru9geFuWeoGzf3oXSJBGBS6uMFjBrRHRuujanr5B66XXbPxXxF6gdg2L71yZi2fRD13LNfYBkPVJpRv",
  "key6": "5hr5WeQ9WCfKD7x4JqMJN14DK5Vz58tcX5AAgZTj4eiFrrt9LokbEeGpTouKw671GgY36Q2ZPgfs3oxAJVXzEqJf",
  "key7": "65WmmkxS6y61kJMxtS88mJba5YwdnXp4ckf5pgMqYDpjU5jTi3ArrGTVGrtxLA5RzLPbNEFWVVDssVqzanubBxPV",
  "key8": "5N1PbMk2GMkLbUrhMc3hdwWG8X9R9fjYHhUWvYPvcnKrc63btcuEyMTWuN7FUQ4b4HNDKF78UGYBeptu8qXXZKH8",
  "key9": "5k4FvBzFwysDAyXGayDVPUJ9bjwxx7EY5ZpFfsM2MbvSZzTeqkmhbfad8FNFLXcDXfHxr4vVAkjJNjDsUeMkyC8x",
  "key10": "2NAazqunaPkSW81P2LGEmY9auZyeMYC1WeMvtYkrEF8HJkUvC8pRSZHnEy4GYcW6Lq2AEUFQAMVq5coaPJG9SZSB",
  "key11": "5YzZvL3rFE5NnssAFjWzfVD3BZTPE5r8cNRTssFvvcEJNApkajWzPStzJ2SsHvzCRy9JcuebfNkDYJeDP5E1jdfN",
  "key12": "2qUT7Y95BVig2uuTsziKZ43fD4NRNpVMZtve3w7bpDQDz5KpH189QNGiviohxhZeLNgvtGQf2qcozXuxpsmaBEum",
  "key13": "3x3ioHpXw9wvC9ztS5GZHk5sYDGDk3xbrC8UCECxNM9ugwaYS8AcjXGXRa33Pz2Lz86mRiRy7YpwCroM6k4uov2B",
  "key14": "2udzLdvUTnoC5vijann5mz8AEj9TwrB9ceGqTCWhoJ2KS2ATHPeosZnnNAXq2nxLZkuQNrnR2KKszxVcsQsGQzjg",
  "key15": "39L1GfrYEFNe97obYkYWTme92cJBJu8hiUyQmPnzbxcr9w9uZyvUbeeEed21wo1UWrZ3SicSCcedVbR1Un8hVyN9",
  "key16": "67VSLv6B8BT3FUeXgMRSBZBfZyMh7ygnBSjdjsLdBMYCmoyYQYEZuyo6vnkvnA1uxEGe7sAkNez7ex4ZPkLBdfoY",
  "key17": "3Kwfnu2k2UYQ5NehD81dSXfHkPa6L1LZtjutcnE17FGP4QjwA2qNpTYLs5SZcVJCepMge6Fw3gkLjY2ndq3EtRbS",
  "key18": "2rznrX6sa9c1YijGRgvAxSAqY8DyxczDdM295YhkLjwfAHGVVNhw8DsafpSWXX5odiRk8w8NLAXEi3sqvrmXDZ5R",
  "key19": "4MNyutqkgbsHn9qNbGpQa8RMCbFWXknBELj15pGMiVQUJih7dRLYNuUVhfBfCBAAz9EAQn28frgUwpEvAzMhdji7",
  "key20": "38GmBSC8CknYc8juZBmdRBPh8DGDPCsRqCtK4jQwnenLCbtxKJg6kBd2E8FUdbkV2HbtzPtuMbjbiiuYxmAonoPd",
  "key21": "3CbGmAFuTXJz9uPiHmckQrcDcVPeGEQMgKYswWg4gpKuvHVAT3WJ4qnanV99taXZXLNSknYHHu8kDotdkUJCbwyM",
  "key22": "3v9udQ3oHPSXtLhXTzkZCfYJz1WPUYUQ9YuvrcbsHrxfsE5wkRLo8YbS4McyQLqQ16Wzci8w2NNmQxtNhxQA8PbU",
  "key23": "BtP9u1sQCZRxH6BmMS3UBMd11Tpwn51jhEffY6QExejxLrhokjPgXVJvfQERkqoL2fPAtZvMUofw1x7z2W6xUUU",
  "key24": "3CMz81HWXzCsorHueYwxRWg25t3reY1czU3rDQxAzo1Rbw8Nz6jpLaxEpfKcB6UXftSE6P3QVPNvB1VCL5ZSJjdn",
  "key25": "4hNTrme2tYZHuG13GZ14jsB4qr9cy89kDDK5RYC237jDowaywgPUVj4h1WoZqmsM4U2e8j8rqE6CmUCEPVoHnSsC",
  "key26": "26Zn8KjJ9siUvR8PKkdk9dAbgdqSq8Pe9XVRxXDSjarrYcnX96SAa6mu5aU3Y6FhvSJvP6RNgiyjd7aW6A5W2xwY",
  "key27": "4GEXjw7gLFuDAGfTeqC2ZbrHgQbvJPfqgKnyF1kY3B9ipSKCSPv161vj2F2wbDK765ZgDM4BP8fx3nvFwZ2uravi",
  "key28": "biDdzEmtek2wLXCTBxk1rNHd1ARhUaBY58pPjNddX9vrmegZS3HY1Y6TMPKZu4eabuDYhEbEw3sroUx7mwVFXU3",
  "key29": "2Swep3TdYq9HwCLEXDnCHx1jxH5z6t9QQrH1ZWXVLVq8LyC7BBodUE5XZikp1h61na8RJhwtM43nLTBUA5Yw8bjm",
  "key30": "5g7udhDghb7w8eCvZsnfMehPkDKYdVwe2frNdcmtX58gFD3vGVpKWXZykSA8UV5r1quwRi8x2gWG8doxgjqkpU7L",
  "key31": "5ZGoiWxqststbUHnyxiGfvK6m9tdfyEingFuu6uXzabAvUTNAQLm7DkQevNwwYfKLmQQQZZ8uXGTHtPezhJ4PBL2",
  "key32": "2yNC8LkuMsuPwNBgJTbL6CThGuQ9T156MN4xaQd2PoaigvtCfkAgCFnqEjzTEYRwTGM8aYcpUzp1cdPUxKP1F31s",
  "key33": "58h91HwZZXSDMkjxdxnjzMEg2wUjxe9XjiTaZrDoCr8CgC25HEtzLEbvZN3aTTiffqFZSjDnuyMEPFSsw9zMPBEE",
  "key34": "38ooJRQ33vsJUfwh71G3HvGxyAeH7T1uoQP8myCp63TQjPRVhXMYrryUu72VPfUZ4qHvT23n9icG13JKnEfS4JBe",
  "key35": "3SGpb9b2dsDXRvqhXe7DudTG8LBneJnXmicQ4YdPNX93LMQ5dE9hc8YuHEFYVB3yAtKfschB1vF2gYiJsaMoXUey",
  "key36": "5qezhoxfBk62dn13n41hcWS5meGkLr3xuuCJu7x7ykxEpPS48uX4sSzb9C2LPQAiKngDtBcnqdBXJif9RxaMCFoL",
  "key37": "2nRvLW2egiLx3FeQp1ZxyZ4cbeTyXYDdpGTXRwsScJEyM39Rorxf3TFakjkra85TKmquBXCeDj46ziPT5tw8M7HZ",
  "key38": "rsmDbbx22Tu769icG5pSNxpuBG9MNqDopgfzFJTGzXUL4Y6Lx4n475wkdpQQuzBm8Sbtc2VwkWEjAGxQucLUCW7"
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
