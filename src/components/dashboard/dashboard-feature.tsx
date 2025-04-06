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
    "7CZsww6mtCkQowHs84c2dzy9CBf1ZmiAhZ3hSEVA4bMzyicb8g4PuSRCWawfkHpaAAAvJ85CvhZp9fBfqAgHbpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oUeMMr3Eyp7Jd9wuY7HkYUTHA6GfCN6QfnivkxcQ6o7cge1JKYCe2Prku5zrzokUcBKhQfFCNasdx2zbSPeJN4E",
  "key1": "42WqFXQz8i3KtB5h7crPsU7WJSmLYnUVJ5MZwJxcUHoQabjmF189rVFBWVmRQvhs8evQRwhhHHLrFpkWw49ZQ4Rf",
  "key2": "3EjR8FmFKBhpis81avNxKwztCSc3sfJpLLFyFo99MhVeCobgwJrgaAisX7LS9vFc3ZZDnsP9rPmu3Ar6AVvpbQgT",
  "key3": "hKjC8CM1BT4vkkVZJx8fGu7B58kb1DKpuspWBtSNm83TqYHEAy59SShurkskXvzZ5MSJW3GUtVX2cT9jRFM2jcS",
  "key4": "5gJC88bXesvC3KjRokMDe6Tm3wzuCQQkAP35aND9dTiRRf5wpyxpvsfRa7GnQ47Y69FFcnvWC7DmhmDnAoaRJAnn",
  "key5": "yX6rLAWPcGhuxBjamBKaizQLqbfzgEqpBDKFyLxYNNXQ6rEH9wFzGhdvgGWpS9P64Hs9V2zeCT66xsYfNUM3WtS",
  "key6": "3YTsYdSAencbJUgoQFtTLHuoq3JxyzjtNJxoXJpV1HJjVNR7GXA8zBrmbe1sLMgpyYFDu4bGFbc2cVmZjQyXSkCD",
  "key7": "4q6tmTAmekPmMkHV6dPCxY1Tb3QgEnkpcwcBWVVGj5MW1BYG9YL8eUbD6B8fDPnpT91pP6eP81jVWDRsjwMNwwgA",
  "key8": "zoNHLsCAwXpjdwYpKDzN5NEo7KfmB14DP3XV6PGo7jwXLPPbbiUTct5ykuis4e7VPSjjZUV749Ahdgv9GkiT9hK",
  "key9": "45meguY4vnYxBtka8BSuzh1nT9MkwrNcJHyc2Z9ZNJcx2DVEJaSsrAGjppCfA3CEoWfWczjyM6x3kcRXseTTtWF3",
  "key10": "uWAEe3L2CpvQb8WtFA7JCQiJuv4oqC8CYLmF8BdXsUq2Rr9Jn87PUB81gt527jShZ3YbUAfWpNPZNhdL1US3sgM",
  "key11": "5mvUKF8famBqCw1NkTbNMrJQNxgFBpqrAkybrVmjPMCNNFmetfwhj2WCcAPLGppL1UxDF1J4dXPZjYdx57Ug37MN",
  "key12": "2F69o3gvYYPg2tRTpwkq76opmgTbD9NNcW4qzBDaXmWKYnekKoCRTsuDxrpuMhfX5BbNj6TmyABNF97kxtcEHLP1",
  "key13": "4LAEtkSuQiMQFZHEnn2pYJhXns6gRXZxeAna2QcSmKWGvjNXXUJxfWuqU2nCW21b3iwQuQSzQfwULnpLN4z79VmC",
  "key14": "2egWtqxAffnXaDnYhZxYc3aRnGEnKQEyT4vep3HaMRKTpndFYrZGpY8STtXmRc36PhCXH5Q6vLMjsxgxV4vPWqFd",
  "key15": "PUYSPKpJWjE9NpWkEwGskVz5jRbvpzU1bGtEYiWNpqouarvi3wpTRkk2ZpWASqfVib2GLu4WRaS4vgS96xpRAHU",
  "key16": "3nUak6ZNkRx6JL3cxoC3tpksgfSezumfmR6tk85QkmA5iDAMY1k4nJLEPfvmTZeEjwyX2pbKEDYThBxXHmfdSUD3",
  "key17": "5TWZVSXHuiQsxKCwAvpS7f3jwh3RtWPZQfe4uxk65bL4yyZ5wrWCugqpSsyXfNx5Lsi9PpCDRBzsEb39B7w3vnEK",
  "key18": "67pwgk94JkuqULDtnBm9XDWdNGQMRyPhabJrqdQuRzDH2dLnpnw3Jw9VbBaEoKDtQokGse9ZyxtopkmhzZMVHHL4",
  "key19": "2M34WSpsbBWnDSM1yAxQzBetsudY61CCqsk2UfvybGwNo9JcZHqG9yKni4ua7rtr8bnMwLwA2Kq4heCNJHpktbLz",
  "key20": "2nK89NMNcsd6CfySMBarAgbw2UB9sbkRWF5nVE5YrESEdxCnN19K5okA6XZyFcPqJ5ZMvnTaFwHBdZNSdxG6AYuy",
  "key21": "4PUNoJRS4mDCSaNXho9fZycWrMDGkLNcRcuXsPU39EBh2X1xmeqnuT2gwoPiEZzJ5jfmCaG5xCXYZ4iM8BWLDiNK",
  "key22": "3PpLRSvt3YJzvAcsyWg6a2p2vR54hotJ3M2qZWimRKr9bkAT2MjtsVXv9354SxVUWovEQ231JX28sMPag32JmVqC",
  "key23": "1kzPDDFXJUqhg591dojsdprc81vsrHHVTeJ3fu1e8NDUybHXKqxp6Uear5hDZ3k5s1xfwcwHsPkFSwDQfTfHXk3",
  "key24": "5zCL4a8ZYE9brHRcdFL8tNvAdk3vm7kETgxmcTrXrZie7bVXoABmPtiDKMheMYtsNfzM4MxBdQJ5ozgqi5dZKrFR",
  "key25": "46Gq6Rp4A3DoWbDbdFkdGuB5a26142UHDd51Lkw4AK9bCnFVwDFAMbw7oQxsm82mBrrvyxtQu2LSmQYNJKCfcPaw",
  "key26": "3V1RtLi4463XDeJ5Ew5WYp3i8sXLTNxqnnqDvzPdqqgX16kdXKoj7VqpMuEJYY9ja2qpPFEkqcZXPiPXuF1BGaLu",
  "key27": "3KTrPufcmhQkNWBvGuyBnkQ74FSi4QGEndTcA6Jxy5MeK6wL39wffiiq3A4LxT5KnWhaYdQEuT2j7HGtMf8EuLEk",
  "key28": "gmFzrpwXpGAfPMEe23To88nXkXsbKemQm2CwctmwmKdZeB2QdTN2eXbc27KxHW4DWiqW293N6YCPdbgXRY4Kp3Y",
  "key29": "5QPKbNYy5MoEAcsTcn7qd1fJGfWroDw4R9P5CfScimTuMywpNLjwGyASmTPHadRAmxJoZ16gymLMScQfc5asMCbZ",
  "key30": "3eYiViJyQp4WnX2R9DwBhEXqpAKZ6L94JmsUziV4wGgLBASGhkFALFqjRJtXv8pFyR3Gb1u3SpeoHRVFxF6qJkxa",
  "key31": "64hbw3c4MH2X7bp5ZSrcdzjjoP2MDkZ3mpfPcJ4vUrAt55EvbVEvgBJ2bE3z19o5rKUigysXKQskrKTAbq6vcpuT",
  "key32": "5WxL1JBR1yeJzfpesJcpTQUz9tT3FZgQp4q7GtZsTvxaifNTqZ89EBPYzM5wuf5nyxMANofZV8cTgoM7pD2GLQYD",
  "key33": "4W9Dz7jQehRtYwpHctSntbJNpf2DDzHWA4PrL9WFyteXhDwXhVh67rf6Ft3LftWFNxy3rEYshV4GfJVW7qHNrCpp",
  "key34": "4s226H4xv4XMWEncPat4ByJes1ftvnonybAm7rCX5cwy2JKarBnhrVRLCX6tiii2PyHitgbGzJPP4zMHsvVfrJNH",
  "key35": "27oG2HZQmX2hHJq1seSvi6Ux9toEYB8FJAML2bAobzvhGUPfEAEu3K3XoWHYA24dtDDDoCQJuVQh9xYWEwE6gZh2",
  "key36": "3kRmMPhdhfiDcBvwuKijsRqrTJC74qNoi1um8iyscgaZt57AsFmm5t7A3GDWwjWiBUK7wJcLBuVfNepBmLnNv8CE",
  "key37": "92Hrs7jhGp94u1GkfEoirFue9Ep2FLsp9MHZvXmJrueKW68CBZ2YpfuX2Vjx48UTNPP1t1PymCTXKU2JSWL1uqg",
  "key38": "3GdXBixh5inqoLUybVPpv2k5gcdLgJgyJNEwQHmimGtR1gFdthfsNkTKGVuaaCkE93fTfSSR9rKjBPwSGfJhyuxW",
  "key39": "3kkgE7Te759LXT51RhsHQ3AjzcpaprN23AquKLpxAV35sNDg2kmQX43jNBwtasU99qhShtFTvHUnM4HWbTwZGQmK",
  "key40": "3D45G1Hn25Lk9YiwvG3VhZMj7m6ZPUvCbJe2GH5kk8JEqgtoLQbsj8igGWSJxrmhNvhv2BKFxDbKNQ1Jwc54gqgV",
  "key41": "5PBVpDjfLjmCA8czotY2GtDbdZQ1T6aDxpPPYiihzfiEGFZSokhhT1WndTertt5Nmv9JTC2UJk3y963qQF8x5SXw",
  "key42": "37wFGPZUN8UTKdyEAq7J8t8e2kj6VE5Wb7tNV3D8faRRYRmqV1DKft6E7G4871DmuKehitU58U4RnJj5VgFzEyau",
  "key43": "2b2zqkExG1kJVhVMxNPcmPjQXBDY4vhJs7VqVgEewgPJ24Tdp2e6oTZX2jFwLiHSpmYzBou76cwy3J1bLwcF1P67",
  "key44": "4BX2mpy34cbu7iPMqnS1csxrwX8iK1ysm5JBqhZzzvuhbcxJCwUWL56f3ePzUDAuezeRUCwy2sXEGvRp4yMeMpSV"
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
