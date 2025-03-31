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
    "3owfTGFqPRhATsG1otQJ6UedVhvMXLcH6Fn6RHYPMvScLib3mxoUQRv1iDymT6GeMX95pr2TzbggrAyqd53Rr6YY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JAPp2dUTqvnbkgn98PeNYSt9kca8MNxnjYbbCyEYee5KnrurhH9eSo4CXnAkF22ug86RaM9W7ZV6nqvqS8QmgVQ",
  "key1": "3CQp8QuUiZuRrqu9RZ5JF2tVYr4F2qVT5Ph5MYUre5BJA14UGg7o93QHUCfCPLLmL1rDzzFNfNwJVYztB3Cu1juf",
  "key2": "5uMhYTU2UXy8dix3f1aWKBkpnHyhG5T8Wi5Be7TZTN58LXFcnGHUBvcCiQQTeip1Ub1A164fDiCe9qu1PmB3gT92",
  "key3": "4Gaj8QGjmf6MFkZoYq78mPG6GacqJ6FHAxEZWCbHBY615fxkS1b6j2FtBaecJBRQdZD7rDihfdnHMHPrvG8XiP6G",
  "key4": "B6Z3rrYSFV5msEZkE7S7ZREABq1BhsmQXbGCexuDpdLLadYFTimBSP7qEhwXKyX4hiRxb9cH8Fp9FhAaosGFrE6",
  "key5": "18kUqHYgHENPyn27T1kVE25arFLbjfa98pN3pvP4NGY3XUi9SrPYTAhSC6nQGvvweQdcJrLkg9Xo6wfRCjG6hbS",
  "key6": "3rrMQYLhcjWjMKinBicjW4E58dd85JU5XHnNQA2fReMYpzaV7rNMEFLcHBzMgVGxauaCAUVQbFyMEMrEGkRGu5Ws",
  "key7": "5mwik26AANs9xp6zhNhqu6hT6DmC6H5USYAKSDNoMv5Kr27HZgd53Wwt9neUNnzePTGjcrNmHfhzfVHevgSeJUjx",
  "key8": "44cUitb8rKqwqWUVn7zrNdmcJ1SdEc6Q2nfW8cr2shWU7SDy8jaHXJHJrYDUDdcPP5EWU8GMDNCaH6Mjda74TyBa",
  "key9": "3QgPAza8j3LQz1BtFrHKvfkRJnUc225trzLMPUht4Qzawj4E4pbdgw7DZyFzGDB1HpEnHcXhqjfPyVZDRyVPtDux",
  "key10": "o9MSm7wxxYKskFXYpwaqJYEC9C5vtmZYPPEh3S9Porp9vNoiRCys5TRXtb45QibNtkJJiC1MZm4iPJd27fquLgK",
  "key11": "3ApYXAfmPo8ET7qnZyRieoCotajecg2or9rgayYngtpJbhrjz8D4BzW4hmCq2Agt3PZeTB8PyuMxArXeSGA444H8",
  "key12": "61cdKoaJcBoYeQoowoAT3mCrN7jM47DYUzKaasGzDgQBDLRh1QYonj2VqokHeXVi6N3aWNG37L9FTVBJsWQLiVCa",
  "key13": "3EqAdLcRFyMYEcGnZctMzsMGFmLo9PcwWsq4LKKpch9sUJWPSwYd765jZw6YKYrPifcgPPfpmo8ARbZYUKJwLzhn",
  "key14": "5BvXfUoMtV9GMVrxBCgu4mC5fK8PcqxHRivnSGioKF5z3cJ5bFXYGzg8PdCZZZYz2c9k8BQHthYWXqu18Q4i4rAe",
  "key15": "cpbMKw2yzXzVfHAyxMQEzoJhC8QJ7CBAGwmrtGpRunVAqKBoeMRrQwegd7adPFw1cW48Y438GCr2JHLiZicxhUP",
  "key16": "4UY6U2eZNq5jUD68anzJavKS7jeHgQh31fknnjqMZCYLaY46da5Xnf61e5f36UdeH1ZBxwAXrfgTPhUm5zjDkkLq",
  "key17": "2eXq3H3hNXba7EbGEYDFkEiDNXBXhPgw3Gf2cNzxydbjvDqFg5ZBz7T3BDJC1RoHf5RJpzR7EfmaTNJZanroDdov",
  "key18": "5B9kowGwwpVPCHQQjWcMD8C9bHu5khRdk27zq3nVMysgEg6MnF968epHroSQtpaQXEQzkg589umLvs4mhN24kTiF",
  "key19": "2GrJM1hiF18Tc28pV2SA4zD5gYZxcZ6MKN1SnxrBNSCryJ6Y7c8HBXehPToE2CbEixGc9GKXvSsVCu6PVoZLGdh1",
  "key20": "681asxBWjmQMpeTjiVhWk1yP2r6N63mGMoVXvkqJcjKg8gzRZL5WFZxQwsYVj9Vncvpm6Uj2xnezD4YiAL28M81",
  "key21": "5gMbE9QJyxdvcSQoEfmFfARkYwe2yhksXbqfGjYuRCa5BWqiZfxXsASNQoU2W7uJNGvToptVgT4Y66sVrh6j3nCy",
  "key22": "3CxsNtJXnTct23QuErigtqLA7bRv8finnaVYgWzmPw1HvUf5cdr3nk5cDytpWWygNF4DHsboHiuuaHLSS89dPN5M",
  "key23": "3c2GBD8Lspv36F5fv4fmqJfQnY4i9zQAy8djeaGJYUWX11npEo79avMsNM1H7bCow829gasA3WFBMy2dZ124X8hs",
  "key24": "4mkUMnCRV8tgjbfXw2ZgA6siPBCLpW4G45FQygEp3YrPuev1AriNjrMy5AwQXqzVqrWWqzj7TVvNqwE1VxkNqBP",
  "key25": "5X3xhKoqFHDjFPhmMoP1K3FbHQPd5Rkq4sqazRDrVwSRJ7GusKEzC39gBBeJ3j6ZLsRJqk9Mfu9Me83vW4g8FJ6x",
  "key26": "43yNWxVj1fQn6LBbgnTCL6Sio4zfAvm6FVS61ku34FHQxPB3ChB8iokEVKoiZbomdtyjv3EnkfmjgeXPcbhmmdiP",
  "key27": "185xYduKSeQzz5L7fFae6ZjHiu81sMC3jvfevApfxPwrYDbXmvjdihUMKtJ3Cbusk8PTpkhYxcSzYKybtisitQa",
  "key28": "42ySnVHr8Z4NaSbZCchR4UzkgySzVurhACGwTPnmcr3o1JHS57ftUPWqW8H8Bmmc84u8ELt6zf7TZxM5KBDhFS4X",
  "key29": "5BkF5uKbcBexQgw37B88GouXstqK2dkSK2F8rarUwoEwQbw7bv4xfMSx2LLPMiPMG17fLC6Khg8Hsxtb8ZFzXzkF",
  "key30": "5N39hKVWBCVqa4JYr66py78KM2ywZ7aksmZWHXuoFQZH7pvSiGjPhjaaTa9jvFMWQaes216Lnoja4PioxCYStqWz",
  "key31": "5KrhgshniTkmgEYfppXHG5nUVfYybFmQ3mKj63tSmqAEXNHT198hnHaSqDf13Th2ttRsaCzhov7ybt5yhzMdCxEd",
  "key32": "4j42SXFLpxLYt1o7fuHvo15g7RX9C4yv7yYkQmkihXQHrsW9uE6cWNNxiGNBu6j6ups3NEMcvcvrBy8UVpM13uu7",
  "key33": "4hNyStcuQvKUho1j7cURSYnAFFqamMATb2krncJfcHNkDfjxs21VNPL2AqYTWtZeYho9Y1iq9u73pyDa4G4xErvr",
  "key34": "3ga3CcW8S2Y8fxBwHn2qnvt8oKCuDxdH3krhQF3xDywzaGufzkuun8zsb3chA5TvsFPFnQpd8E1TTQWHwUfA19NX",
  "key35": "t41uaXKw5H6pppxVmAEsrG3pN1MRvYyxcss2RAMJFh2m7C5A8wSoUF7dtbmuFy93bUEkaF3QCWCzEhG93RL5xHk",
  "key36": "4g8Bnw4d8xvy3ThqJgw4jWKVANeg7fN2QYokT1Au4y4nUgqmfAxbsARuxa292uz96v4LySyHhb4XjCykgqi2vBk6",
  "key37": "2TNjPa8c39cABGzwg67fybYtLtqajYLmnaw6gSKUzHc9JkxSpoy8YFygjEnVFsEWDqfnRJuXmNCYhnQWvwxMvyAU",
  "key38": "WP5N6ckWBpGEtpTVYzWoqWJx2ZkUNbc3Z5R69qy3aDdp1sUhUg57DBaNaQxC2aJezVpyWkmWkenNrnL15zo4XU6",
  "key39": "5ApiCn59ZvQ8G2HQqpzKX59uRPripZb2aHB9fUpnUaKi6tdN4pcfrhPi8s4r1mYqRQpp3HnUciNXrtSuFrU4wPT"
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
