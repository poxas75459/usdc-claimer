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
    "2vwQsk3m9MxV778fZGo1oHdSg6fyQDvSRFGthexYgCb739SvChEhZcRQkDMtoDFnDbRLh9R5Ycy1342qy4ey1fp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nsqAH1VvW81tvuXQvAhowLKQaUtYMbVKrcV4sMs9SYHcQLE7jFbdNgfWuV29YJuGsrhuTPTnXuPqm5VY146dycW",
  "key1": "63R3Ms7G1vPwjPwzL5kBNs9ZysYNEPXFjaxMESQNhmArS7ruiTCHty5ut6uv6gQUx4im8eCMzfpJwvCp1ux6R4fM",
  "key2": "5Ujw6wsxLH6f7RFiVSUUy1bcD5yrdC4LzFfB4cKvC2RZ2RDvFZH7MgGCB4t8rE2A1YcxC7P3UDgehseWuxQLfi4Z",
  "key3": "4MJHRCJsGdTviJ5TWtEKuzhCuMZKkmTe9w9Ag6NZqwePJNSz7KcPYXkxSbLYvbe2fN3wPeQKFJnEqnFWaSKx3DpG",
  "key4": "4bAeH5fwLzCCajVy9GgW7ca756VUyeuf44LErNmi3GDQrqZA2wYuVNY8YHCuzuJcjCrNqjBWKx5aSzUuF3AQTDvE",
  "key5": "2QTebE5cyZBv79TZCaLUW2k3JKFP3iqXKCvaSuxtS2nvd9sJu9evigYtyEmDR2GBSRuMgUsteDNk6MrTeYNvpUpU",
  "key6": "2i8nTaZFeLax6Cj5UHSdct2qed76bX7VMsKm6ZuQGN3qo5cKGLYVvwVzR8UWN5fasoRPuD6JBqFS9zpv9vHCjnkP",
  "key7": "nz8YZYrNX2qfGYWxWF2pmBbaE5K5zKqa9qWGJ4jei3sH4x65Rw5inNYmXN1FA5phFMnwjvaKu9obQGh8H5DMVdK",
  "key8": "3MG65RRz4HaAryzfe8CstauviEKkHPDXVZhfYdDbNL61VMzK2DfZ5eKhsQjTp7kRuCBL8y8C4zeMR1Tqbxg6URH2",
  "key9": "4pr4NSkFBj88v8ucs6pQiHc9tcofUbnpbDpYLAnKVDNmzjkBUVT9Y2hH9v8YYKGWG7GxLZm4h2VBpMsDVXMytKiX",
  "key10": "fFufcq93g1mmTYG7YA8qXte9rM3fX7dhZM2pBfL5xL7aRURht7AeGC43aRGynxbCYPrCnUv4MdZAF8zhDuhwWin",
  "key11": "3CMkbg24f2oBAhoFpy8BAynKGPcxrun4vSS8pZkktx3sSwFchv1vkDhFa2ho9Z3e6iGAmMFygBBZnkydPXXVxy7r",
  "key12": "21mTFJPvLL4sT8nhmvnTdM6nNEdgvT4pCxGvBMo92qduUafmKrLN3g7KNEa7GMaqixPtyCaNzFoCTdjvMsXPuyiR",
  "key13": "5h3YBCKYXqceCRR3qrqEjWCwnQy5KGuu2t51d5iggHxqTADwo8f1RCAerSnirNWK9XvRymFQwTPn7RtabXxapfNe",
  "key14": "5mLtSzDzA6ktsKKcXm8cTfj5MJjyirs1kLrzn1jdMwTtQrHgUx8iLWvfRJMVydLJLfA27Hj2DDExmHMYztv3d7Mr",
  "key15": "2YEsG9K9PiUFB5BTuWHuZDAeVCE9jzJ39Lnn5CS8dXB4gUgcrhS9f8RZWMoMc1LiNSn2eW3KVo1aVQdVuio14v85",
  "key16": "24bxoR6MsRFSZDdsP6wt8pr653vLTPv7JXToJ8QNVRVbNNuWxjE4NdzPB1XAPz7Wz4zUK8Gkb6ipeGcoAXcG9f6w",
  "key17": "2RYYz7K66vibsX6ZE8KPn73hnhrUurBPaomKM6dMjn8xvFKtHsTMRydcuZo7GBcJtx8vxwQJkS6sFS5FGhg616YM",
  "key18": "4pE9PZNti1cHefbx1ereed6x78Br4k7ioSDh4sxrQxKGExQpMocEFCXeaFme87eqY7AJzmqwk24tukQUnmvdjPkd",
  "key19": "3f4sSMseX6Z2ZpGKU3jgrPoKJ4CpzBH2KfvggPfwfKnCpRF4T5fukz9gJD1Q1YSbVC4bRTxXX5dcZFqbfqaqVBzv",
  "key20": "3CjbKDTpNy5UrTVGt82hZYaaSG2dsiGE8ZMAWWct65TGvYyTVPsjCa7AKTCiYrQPFFtAnSe5AP48hNwYBqPk3Nnm",
  "key21": "3umV575JWrgq4PuCv3cB3MrsfwCJvKZjHvKt81s1HnWA7WHpajJPsG4RRzY5ML4DpcoHKV9QkR6pfExLuzGUiqvA",
  "key22": "d1oAiE6itGYFdGseUkz35F3YPQumNkXdG2SXgEFDypmQVtjX4CShXe8FQj2ggvF4idjz668Gpt9KFoDLPv2U8yi",
  "key23": "5ksB82emAaNyUGuHbv3p7ywCQ5SsrNUakaPdbPbVsAfLGPWxSCFWsaGbS94PCzyoFbatpLL1XTfgpgMqakDEF91J",
  "key24": "36RXoUDigfQNnpsUx5211DMMmhSyHcyhEPz49WutYoYpgqxRQEt6T82NKV7kpR2kJcjRWUy5BXFDTSttvSUHAS2u",
  "key25": "hsVf7Ri8zGkoJbvvMGQECkkhv8XzvxJki2SL9iPjXyW47D52hDdccrQYT3MdBmaAjcdrSofmPwNhUaxZCqAtg63",
  "key26": "4FYp4NjNzQ1wzcC6c3sn4Jdb4PvxhpPhJHpx7wfdeL1d5CmtzMUX9shaj5gcPukEMcit7xFnZSNpprmuoewcbxzb",
  "key27": "NryzCcDNmR1ydvupfFvna1Ep86VaWjuq4zfpe7eQ36f1bPg3d4sdHT3Lfv1sjqwe4W2ZxeVjdKGz3XnQZYEkfvS",
  "key28": "mS9KfViLqmfEeDDjpWdXyb5d4Cz3UAYM6ZEVRovVTgKq1jgQPsEjU7ziRJdRsZetb2NXPif5YLzY3pJGX1qWCZZ",
  "key29": "4N7dWQyiqXzqxyoP7cQQxPQXkXYbV6sENT4mCDaM6ukEhRzV5w5FNHV7rRGKpjAA4UDfzNf3y4UGxUFEVP8tqPU",
  "key30": "2WVhG9eYLGM7AQWwMSqSbG13FLaFv1uJpZKrwkde2hcyRjvQAdAaXPmh2HiViecnCXF9dXzzo1MzzMYPszjiwxhY",
  "key31": "5yybwHp1L23jkaYhVdTUUf199Cn3ZTb4qNHiCfLtHHofe4oDfHWUfFLFVvnj41xdpxPVPA6dHvZ3ZFdhwTNWL39L",
  "key32": "5FDr162vXe6LAhxP14LFNaKbUuNicwkSX44nKEvMKTrDjV11NcG3dBcWcyzhq13RhY6hH8U7erFqMe4EsDxX3SrU",
  "key33": "3UhzwzYcju5kdVdqB3oV3on1CzD4gsbnFaS6EY2C91fJBX4orbtJdUmM6ccdE6af4wiUBz9oFsBXaLqwqGeSQrPN",
  "key34": "4LuAaTzhBxGmpNHMbMNkvQ7cG2ZNAvjbkbthNxNN8mAHjDeVceK5PPC7Sq6bkpfvQf1gUgReJVdaat1d2jnrn48E",
  "key35": "hqkwD2YzTXR2uE2exZhnDYAWjkjw2MUfu3nYmaYwdRcL6FjkkTRUEMir5HqvynmEn8ufyEC4VLuJwv64ETzsRUd",
  "key36": "3PVppH991JTBYCZVaVb924S2kjAGyZ1GjxyjEdGMSVMsckz1Eq4qNjUcttsCuJdFZD2adwynEjrpVjnUthp5ct7i",
  "key37": "4rJPimMdvBXqJxx1cSaRPMtHjuG1qAW8b2j86xdz7CNKBdDKjrSragkMQ2wesqqHdFMdVkrTkgZGjPqqVR4FH1Y5",
  "key38": "2dU2KoQYp7xaHsf2HvXVdKyH6D6sxjUcMBnVz6BTKKNPB73NRhEPy5nv9S4yxrR7sMbv7BF4XTBbR6BdtkNUz2UJ",
  "key39": "34cDDMAehiK8vfxXdXYuiS9bDmSjVEg2rqMtk8CvfW7mRc2ysetGrbi4t1BZrJpENJ96Uf8mBPenkZBDi3Eg7Vyw",
  "key40": "Cbfriz92PUh4VtC1w972CKNBgd38aHHWfFuk5NjqePJwVRBwbugSio6n1Y9xeh2UaFq4ei9QPoxJFu9wsSSFzFy",
  "key41": "29BS9bD3boDSPxhrGPxj2TyAP5xAheFs5uGtUAqEQnxT1zLMS94cDveiuvLbAYqoroKVGNVLxR8LhkGTQosvEh1P",
  "key42": "5gpyBwzCDC9XSmmLSPoYUtfM4LGksDv9k1nb6TGmmrX4g9Httdk4EXKqqr2Mxa4WrtzPPzNjWT4fiTVkeurqZE33",
  "key43": "2bJiUJF31RQC4qigJYv5tQmdZxhRtMi2t7zdKdag4oqahmQWWY83yj6dKDTL68GEjiSMw3RZigohNv3tXAt4ZZBk",
  "key44": "RL1s6me4rmLmK8opUx1tc6Yyqru2mGqmLQw1GvKHwL9XwGM6TBJpkFQGzVvJbcoQA6PEBdaJP8yqZicuNzTZ7nq",
  "key45": "31jVRZCK8b1k6P3oVDWXbAHZuiqmECDR9LvnEKoKRAYtAhGz64tXt63jZqNRnTXaoyEHy359ZYXC6B9PUXenb3sn",
  "key46": "44uWDux2KJGQe6QFRwLuPZPZ7YyBr4TAho5FgAimQuG3YaQf7FB2SgZmnyRdfhiFxW5BcmsAHSgVoGnD1QQWb7nC",
  "key47": "2KEaUitAmSrHG3mMCWJgRFzUhLRg2fTMduo9GuoUdfJLm2zNsDkd4DWuPcfhNfMeFyPx3ZoMfuwTNdyquAoML6qP",
  "key48": "4PSWiPRDZu47zQDXXczBPLWeTP935KTaVax2hNfcxztfvABc5ztTri8kPj7ksoLrjFqqC3cp5xbNWtQbLqBxsNF8"
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
