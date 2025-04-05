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
    "5gVgdByiXkCi1ibnj9gTpVHjQWcuwEhsvUMwp5niJfWAjWarjo7cTWNEE3cWLPdohsVHZxhmw1agiebvVPQfdvWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k6CfKkPYDz8FVdjY28vWvxvVdY6B459MKGaSfDR19gXbhbCeWtmGKpYnPrfNmKoC7bharWjaiBMxHehAgTsooxa",
  "key1": "2GgQZFoEjN3k5B7wey22qSgEKa5PqNGifnFftZvxrCoCQpLu4ZCHZ94GP6TJPkHH1jYgX1tNbsudqoXiJ4RKfLo9",
  "key2": "3zReA4FbxZeYudtoKdWRCpcwJVG5RDbXxqvoEQHKvUoHBX6GirftW92Y8ETZ1EEfGdSd1SGqiWcEcfhgqgedTTcw",
  "key3": "3ctfStnPurV3ithRLF6oCMTHaPDmyTrXZ1iB7JdosCnTTkc5cAVvtBynC3yPYcjkVV2uBvEtq2mnUF6r3oUaJRJr",
  "key4": "2VhReYWSm93sPUP1YArUjhnrPEq8rM1SuWh6ougVq9P5YAP3NBAZMjF46f3suGnv2WNbHG9J1BsNfGdEehBdPWhv",
  "key5": "4VKcbar4kdv4gGSuysHXQWmfYatwiTtpJ5sygZwp1AsaQgViQifuSbzYJGKXW9mjnnajeqc6dPnNgsZuCCqM2jU5",
  "key6": "5DPrdZRJHrasBtfAfJEdnMqegnDjPHPnR88dwbSPgE3vztw8WCRUtkDHQb8XertiY9pDGk83FSBdwiCuoFFrAUpP",
  "key7": "5AgrbaLQGFsGnGHnpnmV1zV1F7RtcKih7va3C9cE3EngqSLsXDuuiYcWAwjm2pqdWvqLeHumqzi1ZtnrepBLcNG4",
  "key8": "4w2WthxmgH1VrSJAin3SfAKFYi3uWPGqNbzgvk7ixrKrVnLZEuybNwhFH8RRMwTn5V37cN3EGSXSLteSfMX19yis",
  "key9": "bcVVnfXCcy3nKQCg5oCCSzXvKTxgL62df6AMiNw45jWJLjcyQ9xPgQUMuvx47G3fwvdetdRDz3bsKZtjpZVhFgX",
  "key10": "5hxVzxCru7LKyXbxsgNN6SxarzoPHJb5tzoKjHieNuGSjbuG7bzRGnSEHVEsPRAAENjKbPcTdek217ymVtciJwx1",
  "key11": "5tUXCCUdpp3obrfAMg88cpByrrNRWKtLbbCX96YsHwELhTicTDe1FVgfXYTTxiLPD8QAZeXZw9zkPkx65NorA96X",
  "key12": "223S8fN5a4D12Qr3wcSTRpA9sjAyovz4oBY6K2b7eADDTZPC1BRjkbXckcgNuAGgoNhmcSkYg8ou2FNnd5HrTbYC",
  "key13": "27xv1tfVkvkC6ieUh2CjQVWobPmPGPWhs1AKv1qcRjm7VLHWJGPLt2VKEXCYfPMmFqn4MSa8g3SPAni8yYxJaptE",
  "key14": "5KoGpR7qEEok5Sm3QZyHSJpGeWDPRjBUNaXrJr15oYwAKiR9nfwnc8g2Dn16EMrMQ7pjUy7jYP5P5naeFrda4sku",
  "key15": "41MUrX7xvTa4WePgKnmBFsgbNyothzC59vVkTaCHdogzXdP5LyT76dBF7nghrppcmxXauFzwQpE36ohGWbLK9r1Y",
  "key16": "3x5X6NMFJueMHfuUgRpXm3opCh3MGGLLTUNevNbQDWbeU28pcMRMF4vbcdDio6sr4xdDkKnSotjThTuiFVszDC97",
  "key17": "44Cm4yibf4hVaZdAJFEidwRXzewUzF5DLY8gTyZqRsCnKXh7mWeZLktBASp4na8oDAoqWwMxNSFcz9Cr2NYtx2sM",
  "key18": "58smyztNZQYRmnGxUP93Dxoqofzcf6wCFGNCWeafnJxep7mmywjyFy39QgmyfMvp3cKCcMrVW72kYZzDT8Ex2rib",
  "key19": "36cY7D1eAYtSETHjFASohnZGkC4AAwde3btyFjRSLbwNRG5tX6mFhceuKPgJoo6dR7xMDeV3qft7feuzboHw5HRW",
  "key20": "4byuKm3THYbNcFtE9o8Utj9RTihJrqbA6AVW1MEZNnM56TzkJ1qpsNNAECgg4a2jTz8yFHdDKfxx1qyMfcFVNYBe",
  "key21": "3JFcnivwJmanM6d7hYeMp6YYyGVfXd2fWKRsxmEY4ma8b43K6h4iPH1VjEpE4ckjmuFHTLXqFBmvSSLaqYyudwdD",
  "key22": "5q9uACc5qepFQ7Zh9hGrQCuoaJwqzSYpSVNfeqbMe5Rs7QBp1SJ1t6seczahaLM8QdNEnqrVEm6badXapQVHY9Hx",
  "key23": "7vrUb2WsfH6oYYW6vQGGkbvAHFpeHrsrz2WBYUH8U5TUt9CAMu3mfu28RF6kEH6YVigMuFUPNjRq2R3coNnzZm2",
  "key24": "4UdxN5Y1XXM5fmKfB8sU3q8oV7nmPiXzNDyZoY99WWW32XixkznEoCKGr8NqBkkuGAKvdgGm5p1yBB8RPVDta8Xt",
  "key25": "CZurM4MeUN92E4gCryr6CEP6bT5z3qTkEFz79ycSfhP1cUxYKaBk7WwRV1UGQV4EFAQkTLHbem9URe4nLXDE185",
  "key26": "4uLEsSgXsF1rojh2XEWG73K84WZxVuzvzjfAuCMVrY7J93cVEdhNZsaKTP3fbQij7Ebxucdob9w7GscSC1q9X2Pg",
  "key27": "259cG6bFLccyoTCUe1dQB3vyfj9DW9g2nB5dsCrbXqC3EisFwmpSQsznAddey7ZD76aPchRkNbPrg2Qkncfc4dv1",
  "key28": "3hHtjbK9WPWgZL5uU4Vafk5f62oX13i1rLXFA9jpEVcbyti3h4uG5i9Soh5kYWZtRT74Ya6oX7xe5EqkMFczZm3s",
  "key29": "VfmoH38a4D4KNJpgDk8WWYjoF3Md1DnEBjgAxGvRtnhFFKJMhCyYdvGrbeu765czytpdUpNc1WARCWGvkLQvgXS",
  "key30": "562oGm8YhvyD5HmrXKeFYst7YZod9cuKRFrTPzfg26QAdmKDbdDNq1RbLniihpmPmTQJ3SYC9pC5Hq2vYFRpxDUb",
  "key31": "2Temk5oV3uX6kDK4WpY8MDqLMVtY5mwRiFfjBGMBWVM6agPFnzUrV3GHsxF3YjL6VZkabxvRS68HqPpL4MeDZr3Z",
  "key32": "3sCVh1GXbHCbC7UDVzE9BqxDbSqE1orkFQCLdyXtbjE9X5cJhrG7KPaG6Dt2BgVXoXrH4LYHSYXpKcrS2UNZjD7Y",
  "key33": "3qS8vzbphH52FvNLaFsVaRe83EPgKjnyP4ox4kUgvuWEG8zjwNore59QHyNNS6RS38nzEdmW2hzVh1FFd8mdmC3p",
  "key34": "jZEsJg28cyVJefAAHm4YX41uAgrNxcZgMdoihFUHcSDVmeeoEThh6q9zyyp2rgp8ZcB3kXsrTN6BQhCqH17S7FV",
  "key35": "4RDVGqDCbnmkqKZKUVM9KUNdxES1R5PraSsv9VVr4yzqBcEp7gNXmNSxDhgMhpr6peyNG4WbN35G14aQXDfaM7nT",
  "key36": "2m5brLAzxKyobkU2k5NHqd2pDdFdoJom2u97Lagwgy19UjGwMMFqWFBP4oaRGNtfgjjouisoVjEJmny6xKkRgTYU",
  "key37": "55ET2ExYDYsdohVkwzzVefkngA3wSF9dUFo2Metzaf2zuufpgNjRH9PHmFQx81xk3akhxBiTT1Xr278u4YYUvDA1",
  "key38": "gpfYsBSRigtNq8tR9xHVTqV8kEWCT4yjBrbYeoGGxR43pkSpHNGtgHGsNqMmvA133dsPxhwVJHNu9QDHfkoJs68",
  "key39": "ybK7xXG5Yh6dGYu4nLz4FLoVT8owoVtsf3SfrUQMABfE4k6WEmNvijQ2RiRTbcqhXq1F4qZdvyFPVTBLs5UP88W",
  "key40": "5BumvFuJcews3aR5BrHqK2F1U6tC5zMihY8NTjUipTD2axhVhBvjYwbLChtcPdhM87JyJWTkMNY3GMiXvYg189fS",
  "key41": "2i8362dCFFG3FVhsAeZXda9DFTFjwspwNv9kW8xV4HE9zaDpacsfLa1kJfEEoYAYnmJ3CSgtpHiV7oqbDnPGJ7s5",
  "key42": "2LrVFdpS4ZNHpJJrcJLZgrR2uo9tMxwc7YZVvz78bfANo9w7HP2iuTA7rX1Sba5yi8cJh48h3b8UU2nFRms8cgxj",
  "key43": "9635z6wYvtaHMAWf1HvUcygoFnXxmj5UcEx3WAkPvrWobxdHvBKXbMTpyfmvXibEdtJkZMLXnyi6H4PPtSa5nqZ"
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
