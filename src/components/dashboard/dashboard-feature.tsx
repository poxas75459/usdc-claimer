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
    "3jjnbmoweKRr9FDSvLb4MGJgTF9GMAMSd3VwiWRHteo5DBnhwEk6gGFBHJSgC8aJcw1trQCKH3axvYjGqD4vH29s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51GW13VeFbvD8r8KFd2NejjGnYSoxyZpvZfsuCTwaHJPY2YnUdrD1Mjg9auc6jtZrawoiJBZsnmUxjXADE2a4DM9",
  "key1": "3bWkPZaDCmuubPzgYRXzBxcS99r2fRb5LaYzZ5Mt5neNfvc5vfP4WJYBJ425rJzPxXBMGMdSyYDwTxeQBaRWLpEm",
  "key2": "5tNx5kNBAK4TP7zEWTheSZy8awrTUx2bfdYSMiYay6ZmGRpWfbLjNoDh62MRK7EtMWcJKw8KPfiLX1pQNxwqs12x",
  "key3": "4hS8XM1ovfwoiqkuPL4GqC4FYDSMLAirCxxE5F79A5rYujPbcAkt8xzonf6EfvcBRzbD4WVTktjpybPpokyW9fpx",
  "key4": "wLqoy1vi4qhPc5B5ybDLs1XgDRWwzeuDiF6cdMEzCtQBnco3Q2xPXQBYkseoxeBvpiej4dEcCJ3fvdLPLL2d8hj",
  "key5": "5wiHjeomfjAtvLz7DLM2jQzLPxupHAZyg6ZM7fJQmxfWyossyiDz3ZAh99vGZDvmQwjz9TRwTn8kdtQGGS76PwwU",
  "key6": "4CPE4uhxARdLdZPzVThDVqiaXfK8XMbEbhj2HEWwk8QtUMFTD9mTDFBLHovpa8kwMcAWNLCKZC5j1qTw5esV3pcG",
  "key7": "4AE53oJk6GmyFN9PiA4mhsWP2rgMZp9f4JujwYmt1VfH43hHqwHFiJD2myi6JzyCcz9LYDLcsKGSXRxKtPgfVfgh",
  "key8": "5yuPRkvycHLx2a9NiTbX2Z2ymFh6jMLSs64FEoAfE4J9ehfhhcoUn8htGJ5MFksUXLN6sR7UnaJbnUNsLcCD1oGv",
  "key9": "4LARsW4gCWvqJrtD7BR9tSnh15WMgdDS7GBztaxQgTARNM5gvpPKovhkJLAVorE2fw1VxxeNVD3wUhGtXaqnaRsA",
  "key10": "258SEx3kFscDuimRuyBYEGYXxzv28mHTxDSgfknmULHQfg6nqANPK5RAmr2smnNhdkmqPXXqZK2w7ik8yiraMkNJ",
  "key11": "VCqBFv4eGwkPxJ52GbSRW173pk1oZVFA2wYTKDwaWUS55dKm1vmq2mvKp6ezNyj3LVXeApjvq67T9oKvaYEmpJH",
  "key12": "4J8DPApw5EyBp8Qy79jp71XHJKXptSEq5qvge1T6L1wVQcdpLZfWDTnCQDaYG5WH5iazDibF3wTsy7oKb9onztVL",
  "key13": "5huPynnAKNr2JmsQ1zxryBBxrRZsanzbREZd8dwNjCNB4N1GEJzhyjPCU1V9G2xecGVHFDxLbpNc5CAxCxtmJfd5",
  "key14": "2hJXvugFdZ92mH6CUfEWdFBCgvTWNkgU7uKkaEgV4m3Fz6z5mirxPwTDhHMLYSNGvA3Mb3AUE8476Y7PMopgV41b",
  "key15": "2cDi7UMimDiufz7QEJz5kDdFGdP5KqQUqh3HaCR8dUiiBfWxuZe6HuN362VVw7S8XFEMbvcLLaGbaP77YycfipC4",
  "key16": "4Gp4YTmReQuqJwmSTbWrobxERaV8SYZfpJwh1H4cABr3tsc9RGysttMLjMqc3jabj1qSJ6oHMqAf2wntHwyNco7s",
  "key17": "5UTFpw8Q85Qfmq2zDJ6NC1zEoJRXFFyL1ZXysSR55Bear1KoNqxhQZGiu1WoCi8dJ23NxH4Uvgxxm48mENDbKVf6",
  "key18": "5ABxfmq23uUfTMNhaVb6LZSFuURXnsTodQb2zSYgY44KvGXgiJWmDrA4VLM6aHp2qZjqNgcHJaKDDURuL5cKwBiW",
  "key19": "5Tvu26dTRP1AB7C2VTqkLkV1MSG4tRwUoDndLdpkidDuoDjJgUNpgY6Kv4z1New2QW1Yu1QUZhwvwqnebxjWVuZu",
  "key20": "5FDUD8Q3mf8i6vHM8kdK1ZXdrSct3FZVLQ1fVWNudMEjLBaegX7MpH2hPB6zNVM78yjWykrmhPN1MGj3yTBheKNs",
  "key21": "3tQSgZ5FTV3tZ1q5oxdJJbRfbHN9krxRpLSapTDfppYioHr14zQMQqZ8Vr1gdWxgXuV5Qb6Zrevtu3xcLoP46drQ",
  "key22": "2tSpUA7gh65K6Dw3aQieZUuub5GfzMRK3CdVX14JfQ2Yu6RbGKCmebRKch8Kzt4zxXs314Z1dbGieec7yQhqM7bd",
  "key23": "4ESnk51EGa4mW5VSR5LZC7tcerXGCHS8fEvDWxPM9qQnMvpxQYStYKKoUPD9ZVWhRQ6yyAuS57JPnCC3DgQ4aBxP",
  "key24": "124i3DCrfHxKLohwh12RKUMryYxoXvYfkdqUaaTHbKfsh3jhDV9DKEcAiKSqMCavL9FGtpyvS6nCe235Ved3N76X",
  "key25": "4ajT5TZrPbLGLz16PuwxEAZd6RH4TxHB5zq4iT23SUATePNLDnASMWcLf2KsyVM7rwvSFihqFjDFrPmR8yayZwGa",
  "key26": "uVBywen8zpSjXznN5HLv1pEuHhdUgbT7fEkuiUWBCGWMixrBdtS3Ckn26ztAK37KiW3VrECyEmAtSAoc7PCB9yh",
  "key27": "2pAEca46s1xiN5Ck6nYavVMPZae2xSwbwRUP9G5qVonLWujWqWYNcbHhD9gM78An5AjJoedA8Axq8pHHjWT6YQLW",
  "key28": "2bLYzNBCKxPVnci4hGGpQaBT4HgnCxpHWLVh9aTtpUwYMvvtzAh6ciRhCoywve3etpfvbYyPkgW8NdYL22ZJ6m4",
  "key29": "4HNtYx8sPHBzwatLbP1ekBKJNFTxsxwYQzaiq2SNtNwDF4EKTQxvSGSxk3nxkPwUyWB7fFAa1XGxbusBiPLeEXUG",
  "key30": "5NM6tEeFdjAex2itRYbMDnwANfQ21tSJhbwxrNg3XBGrUtunsMY8LTHHL4Z3SuJw514a36rGTjodMRRdDyy1KfWt",
  "key31": "2wHa3D7uA6ddiBqQArACvMCToWCiSahh4L1qQcp3ZeCY5beyUJsNuA8mRJfenqb6v9QhzZwM172QFHKg315RaQiX",
  "key32": "HMroVaBR4pRzYEcQSqr3iViv6QEovd5zP9Nq5ofqDe91seMmg1S1HCz4HN5vFX3YueTcz2NnhiwXLmQatwkRvSX",
  "key33": "21qiUBGYtKZT2EUj5cmmFaTRPzmhNmt93kzaD5NdhRYpdfF9D4sLmHU3sMqsqbwvoW9Ntrg9D4Kyqjfp5Vms96fk",
  "key34": "4gJZu35En2AGSbkAJLFzndpL9w5ioCXGrXytking2S1hm4q1kUAgynYPviQGfcSfnhZHtmNpmxcVnmcXn8519SA3",
  "key35": "5r7ReskdpFjbaXwbhmgw2L9QfhhbED3LH35U5WJqonT92MjxADMG7892RLN1VhAXLbXE5feVtiPVVgvoNm6P8qaJ",
  "key36": "TwAUsx6NGAsLDwA9RC3RA6eTszPMEmqo9gxoepmpxmK25aUmrpog2ir59whTekQ5GoGtxd6Y9q2WyHZv9YizbmU",
  "key37": "2p1Vrtzky7tQJNG4LdU7RjCH8uSXqyRDCWy5JYV3CwGpVqLEQ34vxnzH3KUmg83pyyhRUEFTdhr6bdmBvnJ6vyY2",
  "key38": "22aoZYhsk1ojnf5vQqo7QUfnTA3bf3o8fBXj4Fc7bPvWjF1kpzdidj5VsVNU4rjeH5SgjcsMCVVG2TrKMt8dS1yP",
  "key39": "3PDkR63zCpwWuYx2BLV11YcZPZFaX3qcZXbmRh9QDVLMvZ9GqN6Voory68tXCBGWdFAbw3ybHVfdXJsA2SgnvoZU",
  "key40": "4Pgbc5bXdzuxfF2VZUf7xbMzFrvyf13Va36dYt2oFbTcwRaQbKpzRzuVSmJ5sC9FYDnySyZCEooMeN5dqyrVJNiK",
  "key41": "5L6TA1qCvvUzWxiGyyXfdB13fayneoouPKznd6tC2eiyC6BfeoerDTsbe46jCtP3HMTDMXWRtjPnuUXv3JTFejpt"
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
