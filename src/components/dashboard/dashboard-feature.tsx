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
    "3jPyNRTRuQ5gSzfhUKrAh6MKLPq8ViTbHJbVCdUMDkCcA8DqQScYuc2n4vRWm5qwhcdCP1rj5dz97A8Gv6SQhrYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bqCgAqWXQXRZrXDYmberzGh9TFQgW2qjEqBSFTveK72bZdJafG9vTo9eybYmCBecbCFxRWFKp6xDhBoNzYE5mfT",
  "key1": "2uwED661r96hZrwVrjVyei7j9jSbpYfHCUeVHhB92RCCQjW8V74QZAHGpY43HT32pbozNBa5g5DCzChKujMFks4n",
  "key2": "ALSwddd1SnQPuebdXWqaHeGsk21DdqcK7sVkmzjmpUx4Nwis54HBw2H7TmSve4HUsgnL8D3SmM1C1iVRx94wY24",
  "key3": "3NbVVKbTRoCKMR7vjNVYPam4efnWZBfey4r83RAKLiCrevHsBf5vbwqYdnKjdo15GYoWBB6F38dx3G7tBwqfWFgX",
  "key4": "5XVmPsGbH6YZb8hm8ZLAXWX4NLijNjy9jkhe72vohGnGXJKMDmu47tstXrUp4stjsFhseVkgTQkLfFb3arRXecRY",
  "key5": "3WZLf1QKrdJe7o1NqUpZAPrxP6jL8PWsYkLPHiAXWpENAk53ygmFiDD7TqMM5wnnbhvCjgupMh5yuYGRT7WU3tpM",
  "key6": "139jronx8Dj3piAi17jtZFih3JQdAL7JVY4mYCfDeVqcD3n5pHkGhp4B18S1SJcpoSoFg4tqKSbP9PsKjtwoYbK",
  "key7": "5PPN9nGNqug3CqFXiZ7re8tW9GwsC4KRQ9TKN24tjLnuHGn4p7SRGDwJVssT8ErRCEwMvzQTHstdtX5L2GsqiTX3",
  "key8": "tJR6RGMmdsF9Ji2EqfXW7mtHCWYiMitpz2dnAGDDFUJ4Mr2nC6sEvCdxBceWE2pV7LoF1fa4Yf8gTvtwEdjXcbm",
  "key9": "sZwuFnGR5oL5i3xVssvZ8rWGyHFqRxBXf7dimG59fCQyPCU9ZAvuGjfXgZo2SEpkU4uCHXF1SCNjLEwrvL8WKrD",
  "key10": "4vNRun25JdDDUETmnzUt37Aw3WkidRmjaXLmi1XWPhEFKQAaseQbZR3vogohpcMHEcGnRqPV8oPUQ1RKqm8ne4Gr",
  "key11": "5tQpfufH3ZNUiQG6ExdUAzwjn8mjXJpdhQ1MM7ygXxnuwAdXVzfUA4QY6qMJGaR6dSSPmgMoKjFTwyrzrywBCk8A",
  "key12": "39FWf8RWrjg1hmWGMsUHqrSgw2jbAHSugZris3b6oQGm8frk6HBjcWnKhbVvHJDftyN1gy4N9fANx5QTWjvCcjgz",
  "key13": "2a6CTaSmFo4DHB2bkBdzoXPymoaR2RxeBnH9kSkjnBMxRjy9hf8HTne27WWCyeRbG7mPMTzGX5F9UeN6uWpS1rjb",
  "key14": "osx46zUTuJE5k9L2ybnRYtURoMqnhrhDFCEzv7Y8hkHSYzt69exgYkscU6v3hjB5LyWa6urfY47MP79v9L4CGvD",
  "key15": "zqw2SogRpTNxc8Q7STH4mDXgLa5yVx7DgPhF177nn3Wa3bcBQnqQ4RTmNCUCRkP5Qov8R67KM3SsLBZqqZq6QQs",
  "key16": "4g63x3oCwhPLpYFuJNkxZJyve5EqRWTJfLGN4To6Vmx4KmhadjG6sejX8PfkZswJaqxVp35ftZmMf4BkfJ28oL4a",
  "key17": "29RkpUr4LB79SfyTA2yo7BwTiY3XsAFoHsfcbseFqoxKFZs58PbPy4sGsmD4tFX2zdJGo7d8Eq9Rqe4sJMZptXXp",
  "key18": "2A6mETmjkC4dHUvMBWX4aTW1AHk2pkruv8ZtWGXdqzFBVdTbMec3Jx95hCDsxx3gVJznAEgsvfkAaNAkPCQahPHV",
  "key19": "4rj2fANJeXWhmgDYHcCafX37D33obQPBqVSvCuZ7HxLRoVsPXD6D74eJiKuNeXdzBfBbfJaQJtjE3jHvExELwpqt",
  "key20": "mA8zSVy9sNEo4JHp6Mn7zDWYWPt76nXvd5wX4zX96qkZ1eb1NejrGZVXLT4WHrW1tqJQEBMgp2RntTteEsSgdGR",
  "key21": "44NTkv5KsarbHyNcobpPv9e5xLMKnkWsTEmXhjn5d1hKPppTdwL84ttpUxtYkKUCVxom3Y2UdJemfWJtUgtekcHV",
  "key22": "2kXWU4KDobPpqwVTBUEk8GZwW6h3PB5eJmRqejzsz3xf5fTeDMMTSng3VdADjf4rMBJokSWYuuHqLLqsLSyC8TwU",
  "key23": "3rkxhovXvbdLoXRXs65HvW4hhCQLXvbQRqhkX4VvmCnUuEfDQGGVNH651ouFt34MDv8KGgrnxvyyukSRqo9tw7oB",
  "key24": "64pJ1cAUiQQVPqCEHy3qXxeQXd4Y9t1PaatqfA1vaX9CJBQQU9Boqz4iaBgxLHzrd7RMKcnsPiEHnr4N2LASC9y2",
  "key25": "2WYxgHrg3GVkNYeayjgXt3RCemhJEKh9Cy9EDZfNJJAkDUyPCpNGqAcmr8JGXJd4b7eDLYuThErwx4tDgJ2MjUzR",
  "key26": "66Z6umwPTv1aNQVFvDMfVmp3quMhyZkMHLLpRcSerzqTRXquD4a6tFPwTxiWDpA69BSj9UQ2uMYFedGq7xemrQYG",
  "key27": "3MTWKZBY27cRVSWjnDpowAEkBibGFR9RNZk1BgSsMwgpxexhWuo9HsPTcnxg42Knio44Sxg8CGjJqnC3Z4G1oikd",
  "key28": "3VK4sYjqrDjyx7dzkZUYE6nFWs9SEkFie1FwPybuze5ByzV3mgFFvChxAWfi657MZ1BmsL13aS9RR3F2VzaDmucG",
  "key29": "21roU6fg8WpLYH5F1Ag64WyajBKVZfgLqxSqY8VqqUFnuqKJF6cGkgNsy4wABdavBGxQVu8DefQ5MtJxzMcndCEg",
  "key30": "3MYRzku1DAkM9E4RaF9XDD73kPmptgWn3Pg27xXsjAjqHm6GbRPUHfkNU1rGg57Gt4bSvysv1YRnfrm2aWWaaXTu",
  "key31": "4PoZSBTSTADwjpfcgpuH64zNBGfTDMGjkhpF371pKWX9jfyn1VXtG1wkwL56fbCwkfKfXJ1uVPRzqeKTtkD4v8dm",
  "key32": "4RgrzgV32EeTehikP37xmsaA78fDeJeeagT6Ecfz27N99t65sruNSMm2gH76geceutjfRvVCTtTG5wEXCZDNmT7F",
  "key33": "4bX8hWLuamyraP44FQ8XN5eYSk3k68NcpstKmSUX4mUp3un2EMiy7RLtHh9dnKUwG6nKXZhKHTbdUQuFJgC26PYu",
  "key34": "5WmkC3gbYmvAQ72vyb3DoGNUtBTVYE816cJ1SfWGsE4ntQWmhLtjd4KKxDAppGfxC64W5qXWJS8v5DUCHm1q5xK5",
  "key35": "326Q9nJjrBSFPAwgXRSpwe2dDifJgvC8uKsCQN4SBiXv9GnyK6W2mWjUhBbTVD61dsvVfuAHMPkiNEBQLFU545eA",
  "key36": "53yHPfxaWrad6sjDZ7nH4dCXb9gCqxntihzW12xUNh22xzSDM7Mzt1Lj85pMB5cYmHVUjvk5QTmKwaNj4L3aLCYk",
  "key37": "3wrka4mBReFPHp27tBhKJ8b3PFEiWyD4eaLY9wAQxaUEDnucHTwmGwbhYL7mva4tUPe41QKd7vhGZqLAZgrkmZ8X",
  "key38": "REfTrLKiHnPJ8zQNQ8nAx4NypstmChnhug3kRSMDUg5tcm6RpQWkwPiBB6YNEUuguN9hGNTcfAMtZU6gdTzb7V4",
  "key39": "5EggWhEJCGQSVZNdCmouPeECsMcbgdE442BxkWNvkMR6CXyeBovFAotnhSuGKnYEEg6VKCifKhpdcSrex1csfGyG",
  "key40": "4vcx8mi7phomRRUxexe6HNMUp494wmA1UB4naqm3jbwMSethgeDRXaervvXY1ySgdoqUL8ocLbj9oPeWbXjbdqMk"
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
