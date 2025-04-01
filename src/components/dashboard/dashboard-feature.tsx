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
    "2GVWvFK7nrTjgd3dJsTy4LinDr6aLUDJcLxaG9CoZNq146a5g1Xt5iiCop7zETfb19fhuWZoKqFv2q5RRgjM8FSw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYB2UzYba96wqMmdJyE81VRtTEtZay8jANdmBzFW1j5HxarUfHsDAfjj7EArzjsaGe3PY3w9PP1SzwvS99cgFbv",
  "key1": "66h1177JGt8jP32FUssufBjJWBLMGLeuq6Bvu2ckBXVhg1F8u78AqSQBpSPM38fwmXLvYtWFkPB7EAtmRMRh4hKW",
  "key2": "622YVV4ynEtwSDQmKtLqEc8FKnoBpTqh16vMGp1bnZBbZCPGrk8jkDNN15bPgtZTsMWBPW8BDaJ5pTaSix2AxVqr",
  "key3": "jAEcou9JuZkAzViY69sePrnZb5DQYmX7nwE7wfG4t7RTkjtCLoaJ4S374DXcspz42nzAren9WoG9VM3n9jawiKY",
  "key4": "51e2euHx9dsURYZprKpyERNewb8ReDHZFzNwT5s3ESJi9TBRbFvLcfRsv5jW4yY1zkby4vH27cGq7j5a5KLXn2tn",
  "key5": "yW9gQqmnniwv5X3mr8KYN5xSXMkrfYe6txnUF5XB3HrLH79yeZMXiAznG2MZGtkCqdpjDHAJVMM77UmTR5icG9s",
  "key6": "5JwMB7vruqtGSDrq1ah5aq5hoLNmucjEHH12BkhusR1Dy3e6N5e52gGgLZKZGTj3GSEdMVwxe6eSoHYK3kh6sCNZ",
  "key7": "byuKBrzTUmW6WwipfKyUbJ5kxT6LWHJAJ5D5CZFw2d5vQFeCiKWXis3fY6FW4nMGDW8caxdcVS9tqzQcK9tc4wu",
  "key8": "3Tb19grhNTqoJxK24BP9zgfCo6fWDqByhN7XCQT4HibwhG44rLFNjQH8CcxSmhmfgMZR3AX6yWwMa46SFiEzoVJG",
  "key9": "4nbvgJZwL1S6LfKsHYex2smvQV5D25Si7hy4N6pmgyNwjDnDShLfMeiLY49S8aWRwE2kTccv2qwFLKnVtkTXyzpD",
  "key10": "nGWc2KDWvB4AYjbpbU299RxLkypxxALog2rRmFoLYR7MVJpt1D6fhZcvaADvwpwAcozsskBtgMov28b4jws64pL",
  "key11": "2D5PCgLytfJktJsoRZ2mEBSXJqucjfuDkaJEfsiPQj63A8QsbkTVgUpU4vwT5faabyLhc28H6DmJChT3uiD1TguG",
  "key12": "XTV9Ny11qXJggP58KhRyVxesrA3gX41dTsK7WbkrXBaDxfB2w8r4BUc7pPmxsFVSgRX5AtxBq8Qe7kEmWvLZmfD",
  "key13": "4adM6vbXE5qrrVd11Mh2senqRRcUB7qXjhdFsG4kR5GQAX1SpJrew7xvsSpZKxPtdgEzi7inm4V7YiT39r7WkVvh",
  "key14": "3agHKfyiML8b6fQkiGPyUHD7Jz4eVuY6nNmaivX9eY4bHxVz6iyuAQfmNUssvTf9ErJfHvNhZbtr6d9R8F2wfEV2",
  "key15": "FcFx6jbtGk66NqycogX6EuMGFCE9PxSHDLMF6bqGPjPnXEaUnpjpWESpRUj1LngjLmsoQj3Mkr9HupdKKYzMqgS",
  "key16": "bTmvkbrPGRFwHk3rysHAujnTZUPeeQk9cKLrXQwiNrxAbupfgrm4b84p1PQ6ySZbmE7rhQboF1m2v5WQj5t1Xvp",
  "key17": "4fovUV3YXuHKW9eCqYxtxRDKY3Je3GB5dVXxp6mVFvf9PiLzMajzuoknZ1fBCQuFJHHJdwGfoQbge6PeVxWDqVgS",
  "key18": "5mHUE7b4LCF9xi2my6StfGNaRPu8ca52X5BzmkhiLiN6key73wDcwDBnWezU2HmhDdcSuBDbNvnHCdgpVTjzKPYx",
  "key19": "4iMi6aygWoEhKP3TBMBCQKCKFsKxa1thfME5pQBNU2FNfTAtfgkeNSW3djAZ1xYfW4fWpL136KasiiUSGGAxCjR1",
  "key20": "5nHiyzQmVNhs5fFji5yysEH5bhF7xvrq5ptX5JVWT7y1ajWVhh5HWpXsLpLbiqeM2jq7eXj9yzmM3LDT4MSoPTzY",
  "key21": "3hgVdVzkMSd1A3TCGszUafwGpmYDiQE9GY9Hz4ykzzaNvrk93aPTQAPikmazh6TrKHxZjghiSjK3YP3XCStqPZT9",
  "key22": "4UwzKuJF5f2zzQv84zxcbEWdi88CftcPxNLgqD2HZuV4MjQcVChuUvbUe6i4PK7Kae925zQeLAdtawE47vJo3Fg8",
  "key23": "2H75HbPWCrABr6kvR5E39b7eQmWjMyy9ZPP61fHiuiq5deEUe7aQcQDSbYFQy19B1Vps17EYanZT3hHc4CSKX98V",
  "key24": "SWTjJgLZEMk6WdnYGAUoitfiRXHHPJYQnnAxH1RSM5k7J4tNMQUYNYH2WV1ryHC4AWUC2WKfmJcee4MjR2GmKYb",
  "key25": "e3Yz3HiNCtsbGppKe92chCsNereLrHNN4MU5ps1m64QKkDywFguuPg14UkHm5U3g4R9JggNWTkMKQhAta31Bq85",
  "key26": "5ZWqESkYCg9JM88Be1eiZZweG65J2rXgDJiuKHWLMYU5VR5wkw7MFDmYhwwtfUEoAevDSQMbfo8oNSxSELuEeKLu",
  "key27": "59a4K4fMxTZn5YxAxxZQvwnoautcgHunYRffW3atxnHvyP45dTaGxx75fKTCTchxJe6BzBPEj8tR3xGkhHNvYLo1",
  "key28": "4zuht6B4xXGXy243rJS7ooZLasnUj5UpoAzNBdJv3NEeToizv6cufzKEwE7dMUByBhndY5LT4pEQboYS24vP8W5h",
  "key29": "g7NAjZtDcdNZSAGjmaxm6r9pwFimTRXtuhXit5ANRjYjzbLeoyvteiP4vKZ2KRwFyXBUeF9udV9JeTNDGuzJVvP",
  "key30": "3FftqxY7pjzBJw5tSCLkVijFBEDegA7uwcBAf5BukFsx4niuUczyFdBqJdBN2yRiYtwNTN9r2ReWVfQ5BXuTbTvj",
  "key31": "3iqBBnjUBkvbP6qCWh19mZqfZ3WDr1RH42uiiNbmhtHSwawAbNW9tdGW89inzMt9FRxdYU16riZhjx9EBYEJ9gvw",
  "key32": "5hP7UVMLgLcahGAfNSbXGRZvo3JpWbMvVwrj2f2qmxE4YEfT6YwzQn1FgLWA61d5mwfVHpSjUqaPhYiGnu9kpYpu",
  "key33": "2icqJUskXijMJxwUZL2wFZN6B7WeamjwE5kcQ84uQoGwAGDC8Rpz5xovmgenRvkfqzsULiiBYZ1MApJTAZANDgWR",
  "key34": "5uM9jmMzBBahiqfQ1bbqmsd6fcPiGcru2mN5Ma9rhCo1uyi3v5FaxQPp1KNhyMj81e18GH8jww9Ss1Xn5jUqSZyd",
  "key35": "2SA597iaByLtazmRy69LCN9LLo1tPGgR6gErTSRqJF53esGFATr42EWfqnVc5rw6Ev2t5wRWjcRBreiPwk9PtyWF",
  "key36": "3M6g7jhAnoYruZh9ifjsNmUnnpfRxuMCLPZ16XZTxE1PurMmvqKm9TvArB4v9ZJtcBiyjeTmF7ZCV21Cx3hQ8Wwz",
  "key37": "2eZ9S33JManxRqAeyXGupGtiN7X2wa6ZDidgr6fWQ4WhCoDBtDYPe1eXk79nM2ZT8r813Csg5xhYeoEjWyQTtDC4",
  "key38": "2akYAgR99LcoqTCvdCq4GXQnC74xUmoxhLyJXe7Vn5D8yXuR16j6RGrWW9CsYk1kA6nwJcTNQ2wxq5ZZhmM8vkB7",
  "key39": "51UCS8wcNXu3Uw3BeXZqHY3XKQAZq25u9CivkPAao4efftGAZm4KfDxYFNTt4z4zHDX59SpAKeHEFkPstAAu6vSQ",
  "key40": "kbjYRZJhmStCNyExrcbjvsP8LYbT5oD5A4Mb1xv6BB5vtYEnN9KTtzHeqCUNbkUZMe8oFqwopDb2j1ixS9uzPf6",
  "key41": "egEAb5Zb9DQ7WXQGmjqmbBfPdH72epGCxR4ydnjU1G4cG3QtwEw5VzjoMX9LmfaDoV22Q6CKTFDDDcEhzFpDwcG",
  "key42": "LJHLXZXq5XpeeNXK9KjNdvWV2ytnKubDMsKjbr63E5wzsTsPqfvHDbavEpjYPDSZCaN6w1Qwvm3Ts9QWVjjBXLE",
  "key43": "43yNqhTHPGC6wE72pXi43pBxwEzjBttMNhS3ranSAWTENibJXXgQdwQCBvpkVtRSki68Hkf7T9YmjxSB58if3Hrt",
  "key44": "4QneSJEgippy7VqWpNMxk6PTEzo5wYEr7Hkhwsvjwwy9tpCh82awQS2vZt2CurX6ByiNsHMhsJZPiP85DNb3UxT7",
  "key45": "2VwHusbAsACpcWb4jYWPx17C1GUQX49VtZLjJgughgcQP9whUJjtLDyedDrQREbwKkps3npL59a3VBHYs4WDTV98"
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
