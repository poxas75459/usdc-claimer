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
    "3exuXZT2FB51oZQXoUDovQSs8Cjoj25jJGzokMkMMxWkHYA19SCfxHF7zVG1nbdDCa773tzLSeWN7j8EYWLuhAxh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x7qJQqQRijzS9z7qXenEjbtgu1NfvrrRGURDH9NnJ5LGegtQcZCwVf9qcPZuAMrJt9pxaxpNkReq4YFhycFUrBG",
  "key1": "2uxxepfGyxCkrVKUjPYZMsaoWejMcaWidefqSQZNajExrxaAoXvvCiZVkPLHh3suFZwyFYEAcZ4S5V1vYxgwd2WW",
  "key2": "5f8TbebdyHCgM164VhdN8gMS1vFXE2EHZoDVHkq75eUm237xJG6rnGMmzU7YhB97ppm72GQMyRKv5V3TTRFjtkUH",
  "key3": "28MJUGG7J7JpXhpk6eYzcumfLzFsnQVCm51S1TjpVp9Z5HBaea7oEkZuNUFxpzKx5gxM97xwFrTsqdncFstQkWEs",
  "key4": "oVULkJHsYroSDAE78DGG3iVoL5HGEfiLgRMpGKGUWDq71RBhTnS2vtpxsd1LGasqiNqphVwh1Kd4133oKjgMVpa",
  "key5": "5aUxBVBrPGcRuYc1SSWppKTTgAVAywjn1Z8vFf6fQGerqXGxrT7fTm2UspmB2FqRVhu84KF5TM6LGWKNqBq8kDCo",
  "key6": "3TgVj9EcjH5FQm5wGRALxE8L24YrZQF21gfmajnp7XwoijU8oYJPR8VcdX1D5yEecjYyyJcgaeSNhCPjFXY1XB6J",
  "key7": "5TGFWVgbwbjB35wds8Y4qjuhjqrQizxm6TmfhM8VZTwotaiibJVRSermb1S9h3JXmhH9kkgsYLfPG1rEjyBAE8rd",
  "key8": "fYPs3fRhpZFzfF1JTzB9PNNKP1z3z2XhTRWVVCq9J3x44cEstmQjcPP8Ci6VjVYdvdLNJRBtgCEsZ3f2F3w6Q22",
  "key9": "4emLft8tyS1VgWFVYNQ6Gyoy7xnp4nZYh2WGBxv68RGa847QNYK8HavtaeHqVNhFLdZ1uiBNBai7HgKpT4rjLRZG",
  "key10": "444yusdALRr53hpkFkn7J45ZMttmLJM8wbCU8Z4nPRRB8qryy6FAECv2eAhaTqeFa55CU9CJxsgqZtLtXuGhG3xf",
  "key11": "3UmjfjjciYD6VvnqhqvQS49MYomKWqM7jVMiLg3WF52vAGk8qPFWYD13CoPU2XAtwH4CMCFXfFX9J8KkxGtG6Cet",
  "key12": "3ugNUQmiACB6xuizFTDa6NCXWJhsv9V1DFFdoNoaTu1usgHRStkr8t59oPCbJAGbFzfhxxo9CLEHfZCixUxQGXJq",
  "key13": "2VkkjpSJ1hNMR4RcMsUVcCZbS8UgkvWNfUQE21Bq8JsyhrRsya1kydKQQzKSnMySHtCuJN7YMy8ojZ7MdFQaN5di",
  "key14": "2EWnHujFPNkZnnVoc4jVAVmwBxFD4QsJ1s3m5XqsvBqwjvbBSW8ZqboKLUCVVdSveNxTsX2LS3ytB4wm8d82gjsA",
  "key15": "5vBrKGA5BZg9ciBfy4eM1nWgUeJNZqxXxNYnGg5swnuSXmFaxo2c8fHVAekKqw9MSay9SFVQpK7xkhxbxv2WBeYQ",
  "key16": "5dtEdssjw8T6rjuDFmyoV1yUR2pq8dYrTuSWumi7dMT9EhULXfhmmJi4ybLRzVYNwQTvGqqqzU5AdVDE3HAkGAg2",
  "key17": "3cvooyJKKxQphCnwFRxMwN2cRRr5UVUhuJLbfHD6C4M3taLDcVxeFAJgeTA9QnrHw4vmpE2A2ynfmXwVDyfhfwbm",
  "key18": "4sp2A9ff9rLrRGNNKqFx5smf12XoAJeHczHfvBKjqayHozBdNdVB5UGE42usNsNbB8gUEB59AY49KeEgQCvxQYvb",
  "key19": "5zHmVcP8DXwdiRzbiH3VvpE3STmucb9Ny66Zx93eXz7neNvT8rhrUF55nhMCM2vHm3FnBgh76Y4ECPwDrmdcVegK",
  "key20": "DU1zYaCPyhke1xQxKJ5eKVg8vjuVNo2idHSY484oSC6gJLaGJovC9sFrwnU7Sz5ooq2khenT3m9gTzAytwR5Vsi",
  "key21": "3pcgHmnomQdDf3nqXfwFSVsQVjuXPd18WSoubtkicpNLb3FNNzsh6NNaVMT5Zdc2fEBPSezaCwyvL75tB9XLkQpG",
  "key22": "579HS8JgmMzBvxC3bSktQmFvDDEpEnAjvCxZESkS7aNKZva56onTarHatNGsnheCXcTM4LNBwd5A5cs7sh8ryQDf",
  "key23": "2TBXrVttAHqhwNDmhv8mS7iEmBjyfkBugbGqhE15UDhkiUpkvSgdHPAxdxSdXXnNSTUmq3dptZBdEW6H9pgGoQny",
  "key24": "57xjaQFyvnEGuvbs4bQ9TWNmdWTSj77QyxvMAbQA7Ld3EUAYGMU58zrgVhYx3hDwUpp4Sa4WMxwW7oKNDECyjrGX",
  "key25": "44J4BUTRT8hKDGeaokGUVsbUjwViQVJuQtaV7WeaHK44dyCo16aESWmnj4KqN2mJQLK8RGuL1vg3ubE4HGcGufej",
  "key26": "2QWKPTGwZ7kwCNGVYiPvT9zk9Po5KowV2jjPPatJBXhnwmeHvZSXMLu9o5pR7XEJUxELyu3wrFDDjP7xTquWasUQ",
  "key27": "3hcXaaHaZMMmXP21aGewQkHrCTbBDDGmg1STkPHC6zwwa8RueM1Ms8szRFb1dDZRrMBujMyB5PirRcH6i3LUWX9e",
  "key28": "ct315u1dXTpWMjEvyaXTtFJQPDcdPXwtF6baVs5hAxtrxGZwZUMNuA8mxJM2zUZrUoMGCMUoi2VfEk2k7dmvrxE",
  "key29": "4fmk7Va92HCPJazrdXzJJR1zCPu5QMQ8CTMsEd9ED7iqekp4UG3Vi3WkgrnjAyB6pmVsjf7dUE1PR8E7xQURZNfY",
  "key30": "4WdBRZ3am4Hr79nzqRCidvKy7ciwszz23wef6YLjfDPMZYpbzFECCYYMiiuiWgZ4kj6kjJRThgsa1KKEr5WK4znT",
  "key31": "451FNMxYzp6G3u9CMaSrVfvNDjmkKBDRvpmEEESUU45Nbi5J9jjhA7GPPHFZx7SLtVyMrkJGCndtRXBnUkdsMGSr",
  "key32": "555eFiWa6LLQF2phy5c8jrfAic2exGke39zxF6YgdSkXB1y8ffExFMYeW84XpB81hGeJYSh2jKCVYoswd4cJ3brq",
  "key33": "3AE5819ae63bjLhNMqxqyt65EysZW7WQMx4Y1GmpufdfkLDuVtVHZor9jfABff6KbHQjM81Qcyb5iXzpS42iraSd",
  "key34": "4715j3PpJbo9HWJPgpL6ssSPjy6L36DQPQ6N5Ywdq8vo644WhcUKEn7fqfZaXwBjwTTT9AAKsnSYD4kCv2es7gUo",
  "key35": "5jbHhzvZe9ZQfqKeEYrN8cfeHGEHBxSxjBJYZUvuUuowsSVi3KZftKC72C8piYijMKBLctEqUBQTuBYat5NavnBo",
  "key36": "junoGCXaZohcwCR7JFMxfsz7ECbV9CzibLSbQ156pF2YL1dBTj6ynQfMysuDm3iRh5eXidG7vSSg4YuDBRpUffZ",
  "key37": "5eReka4t7MZnq8hhvct6ic37JSiSYFP7ZHmbm5GLh8k1eEKyyToj942DhsUkRqud5CpRxKtSbYArGEriYXrRJBgz",
  "key38": "4b8DoVLARMHTNLbL2pv5YdV9zv6F915e8oacJj5HW91igVHRmZZ3eSoePn7LosQXnxE2cjTbxHbHi6bQEPiKE973",
  "key39": "3PiW3Yb5ybbjgF92q7fbqGoGvphC4V6XUgpHdDbaiKzKwbmAbfMXfLJG1zzNVW9xey8Tvv9potfXaTc92oC8DdYA",
  "key40": "3S1PWD6FnR9tEsU12jrGL9cRyeVy6mTQhXckAoH3EC7eairf3v7PWBXmgp63ZHoxxhsWnxdbS5gwzZbPPaxSTGmQ",
  "key41": "66WaTaKG1ZoNHKHr1pc4oJr3iEzALPvvyjg16UeRNCgcmt5B5AzhMU3z4rQZoUN2k6gVA5yXeSa3NDW2JqroKP2L",
  "key42": "3JT9GCwXnd86PKnn9SJ8LU1Mdjr1DKNu9omGUNxGYeQyxojrPco2HuYpvE3SmezSXWwWFnuoPArwckTH7ht9oZa6",
  "key43": "2jcr1tVQ2h5zHULCukvB7Z83Ddi5bbebMaFXnqi4BKG1NKruUgEAjEba6LWz9BeDaKojQukLr9RpnsTsRo2JrFMA",
  "key44": "2UZLNG8jMh8WjnYjneXhU1V2YDn971DdGwnw19qrNKfSgGpiGvvoz7rAxpanRuQHrDjn4m7m7E2FrDviPEWrrPL9",
  "key45": "5oARKeYg8Ubykvdf3mZPjMxV8qqQRRA8FqX1eHLBmZRAHLZ4aUyfa1xa7aLBbvSaN1QTfDBkFHDb4ehyM2K5BqpZ",
  "key46": "4hPUFKQ2xyzU582XkM2VFhy8EQc2qaEa4dQu7GRaZ9VDqHzv59bWhCSc7zf6NGvnfXAreCLXUuz4Vpefg9tp9ah7",
  "key47": "3ZE88H4R8VJmLp5RMPA5HPxUb6fT59aMfhqZf9Edg2rWVX2g1YtzC1iLh6njCkyLJBWNcVPDGUEEdGZZsTBWqJTb"
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
