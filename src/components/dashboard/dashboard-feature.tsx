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
    "3WGA4gi1Mg6qngrqmqHDBz8bf8xD2vvbuNUBTUp6hZSu2xAdZV8rzGCCMkKGeVBCEMkoN49x6Si1PNL2npiU9dof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FR1u47wv4bw6j3XdTAnMv4wQDMcbYfL17FQzqb3Be9MGGEZoJj6zWMyQgRkrDUKCaLpcBsU9VCGFBuphWacGQPM",
  "key1": "5K4kGtTfdEP2Um5dXXyfe21JvGKaMgBWxkxGQhzmA97rF7N6TkLuR5zen5DwNhAUiDYeTWXUKgqZNRgaCFQNGF7y",
  "key2": "2Hs9MPjQNpXsMyojoHyWL9rouJagtwHXPBH6sTKLkzSXuzPPCQp7h95goANcQmuEQ5PhEq4yA7S8N48xxMJ11fbh",
  "key3": "5NCz2WxVbq8r5EqYBNeLPSVQ7y36ixG6rhqLCvFGwhfAfKdJXxzCNkePbVhAdHeeiSR4BYR4DpguNSiK7FX8BqyX",
  "key4": "4QfeNGuJBXrayk53wWeFqdEz9TJcxdumFNDo1rvVGXpVFRdnQKtwD1iey71GtHqPLwiqo2MWVygQuTt2pNZXtDSF",
  "key5": "4HUd1a53KMHnN3qoLqVpfiQj5oviq1PktBFTqa6YbiKhngJ7K7M8Bb5EsABXmpScBJ78AQ26nmgPWepPaPBzW1py",
  "key6": "5dH8TTQx8RxXqYVtn57WH3oZVrQ22LE4Am6RR4EpmS6LtTM66jqmJKmjZdtdcWxun81oLE95PF4njfcmj8QVukZt",
  "key7": "61SF8bFc1h6bkntFLcXU7LfPqvuC5aQhKCgYEUVubM98cucboBFtyvKHg75VnzBujBiSEQJXUbQuRAhgWDzndD3J",
  "key8": "2y5oHUkEbFd78PfVwJmbnmW9ViNuGLzrEfMfwVEQjsMFXUEe6v2jcidDspWryTcZ2Hmd4dx48R1WETUnyu6M6VR9",
  "key9": "2HmsXX3YUAgXD8WuE28hZYp9bYPHhgrkZm8unK3Kcp3pr9fF11UjWSwSgbNRGvSpDnTsZKUzeF3d32ztKBUVQAYP",
  "key10": "5NKWuGS1MpWmRLyFFqkCKMG1qAV8zbHCp5vCYEPBQw8ED1dKQZm5BTHA9R8BeuXEPVaoDy5zkLpvLWe7WZUMETFz",
  "key11": "5afwpSXGq1295nJGDUXzYfg5nkK4Tb2EoZMiCJXiMcrxcNSZetQQBS5uC4zoCEq1vHc4zLA3eG8zEXWAqpHrReNW",
  "key12": "4J9dGG4CvnHUtBLJQhJJdnRx71v2xzPzmHuwzgqt24KYctBeJSu2uDjdgJeCcQM7XrarQVoS2PaC7uu2yYAGxEMK",
  "key13": "3FqJcXMz2AgfFSXGfdiurdEeAw16Mr3qsN1b2r3SQxScFuMr9dpfXCMVDZExBMqLPtw629SbQn5pJNLSEHB56xPE",
  "key14": "5khX5hbMaRW6fn2KFAJwxhyHBWL7hcB2rfWzA5RpzUDUAdUy15p8RYZH7ybQznsJkisLpstQaCFsQRTsUPX4EhBb",
  "key15": "nxHU1vUuWw4gbkdCBEmUEKRs6mpC1WsjRuD3qYS2ukqLWTQmxvZFw6d45pseNVJsUJLjbNvBajAXUTNww6iKf6Y",
  "key16": "VfZhMLhWkKnnQAU6kuiEBLfMYm7LHVWn3DrgW2gb5moK5iXLiP78NUtCFQ4tfyKQpgH5FVbxzEBLG9gj2bJYLyW",
  "key17": "5qRcMyroFR6FzGxGWasB6FFwpWzb1HR4MXs4JX5QZKHS6vo4qrfmdze4FxD7Mi6XpSsyYz9FX2n1KXTkxNKfeERR",
  "key18": "3e7GmTMFCHk6d3LGZCdEx5hVNAWp36VhXAgCRTYmY3J1KWPD7M6HSo1iZpohErnN7LTjxNUbLuKrNF26LGTFbuKr",
  "key19": "3Dg7EP2L5sZFfnASsnRY6jgGLNaUnmBqrAsv6bxSr5YhiRTUULK7HfdHXwMSmUTY83ySLeogbULhwR5TNNQkQV9U",
  "key20": "2bcVCmr8fULdtWUaVp1rvSyhriwvyQseVGmuDSESPxiM8EavuckCJ8M81fcMHrt29psW6rfcSFHGi9K449X4xLdK",
  "key21": "YdhSeihQxBdF2Y8qpf9VpfE6f4MXq9Rrq3tNio7YqcvkqgYZZi7fpMnhQ4wezDwk7Mec6YV83FSDZLTouD1wrAj",
  "key22": "4LAxQBsW7D4wtSLAaTwhQei3uWQe5Ex5zvip5WL9snXeWkhBSV6kuTmC4rJMEbRAjQrvoJ1ekDqFWXT2MVrCGpyV",
  "key23": "4DYBzT4JBZUddgv7PWd24EzvxaAKAPy6mREjabCY41JtjrXnYLEFCYGW8QFYm13jxhSmwoaRAEVomNhqgfTc8yHG",
  "key24": "4aob5iGpR2kLQqLRGDC8NboFohcXvqEVSJkwZ3hqVwHHZjsRiox1nfgL4GNZqCBNvQeqF2dHGMMbX3oSd1yKQCez",
  "key25": "3CEiB7jKgQm49eRGiMkq1BrbXEkW6FRiH9FMogUgRq3ZZMxeANTchhUeTDiczde4E5drSLM67ULNCNW9utYkxxVR",
  "key26": "5pbKyTSbnwAMmz5HvKSi3vtkBuTwZsAnJ5efq3q6rS7erDL1WskDMhXvNYoMvGSu9ajdY4sTbnxk6qksMRuhZZKo",
  "key27": "3mgdPjV4iXJJKLeDmeELSLszycNWjuVkgjpgGdEPS5rByDGsLCSNTBvXBEfZnwK8PerVBzjRdbz1mwSwsaGJyAbc",
  "key28": "27vc2xPkUFKgc5m61J2nrEkSxJ9Vc4sKLSRVFaUGxrs4HUG7fe14QEMxwWA9qfiPWoF5aXtT33iLimS4b2fSrisg",
  "key29": "5ogPRfESxeyZfVdLPHJ8TzR2QJPfvLukTQYQCwf1ecRVHVeXi1kntiJYd5ETKap3nythUqW1Hv5ptTh9GihynUd2",
  "key30": "3nyU5WKCztU4JSx4bSHWoGLt3sRzGkQmtJkLeDYQrmZKAdgFSvzzekgobhp46rkfnRcVWZtxukk77axAVBQXUzo1",
  "key31": "4qNrkBMCeydTsJgLBmXwLjtGE2xy9tagPJ3c8ofKHY9surCdkQj9NT6HbF2nhexDHdaAcZk77fd8xMjVpP9fVBkj",
  "key32": "4qpckmYK6hRozufts9w7LeKSF2nxdwx6vy3PAbFuGdqp6kvxSTabtdXS2PEioZr6h5LVZVzg16RPZqtBFTgQ8gKH",
  "key33": "5whwuHZRiNSVfH4NDa8aaRNN5fkKL5AWVyDoqVFgC4oTCK8kCsuGx7qRg7rMex3EyBLACzoZGr9FtywG58hnj9ki",
  "key34": "3Zw3FQWDYjCsALkTvHNcu6LK6A1px3cXMAHuXXyDkpxWrU28FUR11JvnVJgUuaiSbbDtatZ9Q2u8XtfGaqGUDFje",
  "key35": "5cR2E3NoCPkMQRUuAaQxRtj987a9PqH3AYCZAxt93WwjpyjR1VWqEAeatnJ8wd4Fc1KN8rF3iFv6neFQJZRZop1E",
  "key36": "2CboCMGQ8mGhNkXhE31jkA5ys4vc4NFDwRSCvbYKg5y6qNey5cNEze98gwD7WxWEwZjFcKPibakbQrYC6PCC8aiJ",
  "key37": "hSrnc117mu6a6TMhmpSc51EmwCd2cpqfhejLZDHSNuK8n182PZAfxfwYTs1eQhU3csJ8q3APvg9qa5L6HjsLefW",
  "key38": "o8KuURKmCg6eFoTituXN8khhBH6ANGYRhW1uhq35dEn12eVNRUj2AsYSKMAmmN2EooQCho1AXE7RdghHLXd1EdD",
  "key39": "4tqybR61xCVUMJw1kSx6XgTcHYEG9xZFJjLLaEyEkoBwmoHp6moXFUvjbwGopS4JJ2pcQufvdMHgcvqaex6CnDFi",
  "key40": "2TkETR6cbe364GSPDtJewK4C63pfhT6V7tJbT6ujtrPC5zfLogJTZ5KjfXugPJtwM1TAcuDZfY6dMrcfDroQqZks",
  "key41": "tTAdqpzvjhPdTsd9AwQKfAZuNeQ7iE64B27tcxFrkX8PmkQHxuAWKiYy7CjFp7a5bvZhGobJQ435GBgD1bbP5hm"
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
