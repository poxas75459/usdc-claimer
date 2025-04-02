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
    "2vGxeRVajuR1VJtyFKMyUE8UY2GcAq2gJsZZ2AiGbuPs3Tw5M9vxAcsiVnb2q8TeNzmmjPmiL7NQYj4so8hPKFmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kbH4pvaoRvb8hgKny5GhZsNuX5QtxzqSPbnC2dkAx9CY57gTaTwjMWATsmsETJp9HJpFppwbPefAq4AzwnqsUU",
  "key1": "2VRo7ZU9ApckLFZfiZco4mUU9fd3t8kymDd4BZdxMgwHDvGcCr3ydiWsFGUYP17RhFX614UvKG2pAvAERX8AfFaR",
  "key2": "5f7G4ag5Uief1gpjXAtZgFSrJYi7WQgnjhaNERZQhXCmW3357yyizpCDLR6jgd3NnDULDYcrSjiZApVWfd2WEjpF",
  "key3": "2Y8DPjdHf4JSx8gVNvq2jwfHaLGdh6B87adMXE8CLNo8Y23kY2cBZMfQv8DB4r1pAZbKHYsJV4pF2UQx1VArQw7e",
  "key4": "56Pw2GQGrpCHdTTh3dJ9Bj6qQhbK5g32zEoRJtrJ6H1iE2WW57g8rJsxBi5fRkCvovYhxrzLT46vdof6UpHfTmD2",
  "key5": "3ggQFSAbxZ6nEJBfb7wwwvyqUMNjgP82d15q6jf45Mf3raz3ZPZGdTmrMeiGgWQBraAMbCg7b4QxpvZe5opnr1NK",
  "key6": "4ygeMKoWc9UsTMad4yRHa6qFrWFvvZC7XUNDsz8CpCmBRKTxyrp847yTuVahV6KTCynz2UfvaCNddDAkx7pTJgYL",
  "key7": "2cbHhr9RWQ5EfMndYRfvKVnYnJk1tPtdbxG7mvbYW2eGoSCgUsy8s7EMhyQ2mtRRLxo1YmXUNrf5Sv4k3C78PPaN",
  "key8": "3J5kL28jtPHjhHQkCaEYJZv1mj2n8d1BMbpsBSHFKxCFgN7kPzevWQWVmCiXsAsfrSENje5i1PYYUMfJFXqa2Z4g",
  "key9": "5PZvpUAYy8eedHfW4CSXMtwSEpaKDvzv2ySqpBjJS1qhzsWeHG3dPhQWzZEHkWpYgYV83kVPk9Ct6ZYwDTC87qrZ",
  "key10": "5E7Lcqw1mfqGFwgi7fL3Xqt7K2JtJwYuHgfGQ12NxMZXzY6hC8WUyfMWdJt2PMGgj2djRxCk4cEGiRn4ixaC6zu1",
  "key11": "5o1ttsrP6GgdSnnLGkQAo3zne532wbzwR389FYN7HdpzoFHv1CYugQfPVVUJ4ME2DaTKrCgG7dZtE57F5j4MMxD6",
  "key12": "2j4Exp5PK2PU47K5ok2v7rKNCoo5UyvTv92fPwHKhwsy6sRHZYsVSrnfUtwdNrs2wFVCpiX9owAYMwBAuXSYAtBb",
  "key13": "3sKbEtQQZmrKGufd63ZVABMJz3TQdomSMaqsTyzic1rmJcfc7vfdyLhhAuq95YDED82ieLrTvV7yQSRYqFrRjTLd",
  "key14": "5QpcH8cAYuVM7xsDm9XF1YhYFHHFxcfi2jeh8swhodJHTfqyWVGS93QocWSynGzZ6xxBgSV1sHr5rrqTPz35iZ9j",
  "key15": "UNumKLqE1wwpmjEEnuCuF6UzdMhUXaqUsCKbTPmwmQWrCigRMrHW8cSF8JxEudLyyFqngkvMz2ndFpkRvch1HTG",
  "key16": "5NpYHLqiZYyVtbCSTpbqpvmgSKomksZjSZ38fcYBLNUkucAxuX3rnfR842M5UukXo3MM4rajczfyKgLduY3qHxvU",
  "key17": "yvXgyRMaF5TkSeQGGiv23WMVDjWMdiw13bBFNVgy4CFSL9Ecms7ULiN68D88VddxQTDfHqVMGQ6qZ1UzLkyrzsH",
  "key18": "4s4J1CX8yVUnokwAAxrwSGYU37fVfYsr4ZNejWREqzTtUugLhDUPYmVwULvzYgB9x9AD2gHvvq8mDjh2tdfkJUf7",
  "key19": "udSXafKeSEa5UvpaLYyMjTBM329J536W2jr3coDWYoX2va7Kto5v85U26sKk9Rxw4jRP2ZAYsxjFsT8anPXMaFX",
  "key20": "54QaABryCmAoprfMxnvLMZMa1K1UYrSdxeYM3PUWZYG2CUuSn8Q3isqH2PAuhPaPGDJqhruMiecHDAhGp458CsrZ",
  "key21": "226GMqro7RiDUXxhX9GBKGSmsD964zqYSTPLATaeeg1CcAczac7WADWeq9EoJKcoZBEHdtKXGcgzix19mco9pCQS",
  "key22": "3JCBX2nv7BDBepPCZtLe1EYYoFKKbuZY8mazrzPrVzbVEniU8Ra7iSBz4f2RK73KFUnfPfcZsWh2Hf97R56KQk3k",
  "key23": "26Wch1sNPBDH953x7viK3TkCvar3chp55j1cPFSQGyfJ2WHM6BQ9dvPxvEHVyKR4unmFDpWsLPXpPjB1dK4X2Hq1",
  "key24": "3v3FK116UwfaKNzUfZTHgbTxZuRV1vBNgtdZuDHBgnAA5HAFDZUaQKuReVaDwKCtE3hv3M1zMrRXyDiPbJpCXArK",
  "key25": "2y8gncL6dCXFcoC1sMtum9Jr3Vq2vJS2fFArSB6NipUhzHGfRDsWsx6LRdkUyH8JijPi6YdEd2d7pp4KdcbD38fs",
  "key26": "23LuzG23kvzSRKo3pMX8PNek6A3t8TD9nrDRaJHkDF4GskoATNH6dNDTfE12c8DWyYGJssb6TnpahR4gNVS1qh4v",
  "key27": "32oLT4McdaaTTXJFaWmiSop7NsGB1r5e7S1T3ZHDyzrko7qR9GVFeCuVANznxLht4r4ttKfVjARPAoPoqCrwYgxE",
  "key28": "uXnYqd88wMiV1TtoMiVFR1dWhfrmahtSLAodqS1vMhRkC9c7yWHsqzj4Qb9aXZN5Ce5CjQMggpBTyBgLsY8iavg",
  "key29": "4JtyCcTEmwbttLBAubF1yCB1DUchtMKPswUyartKBzAR12c9yBJRhLppAHAZKuNe1Zma2GS7kZRE9MA7hKzNFj31",
  "key30": "4QETJ8jFjGgPyEvgSiVkKzEqtjiTPYuPwmiAmp56ddjRvdX9insC5C6KXfiTf4QwZhcSQTioqDmtNFx1KSZGeEiC",
  "key31": "mTSzNSjS6hKjyCfocN5Mv6A5xBf1zn4q7eU1SJ1mZPYUCqjUqTSTMQJusdiA6pzE6dNtaSkHCfkW2ugWNVKzbSx",
  "key32": "4No3nkn8V129moywXmbKCFeDeSoTdMSn8k1LRXYc7GqNhkTFXNK1VAmHEemDDc976udxQzG33m1n2t5FgoPTbuGy",
  "key33": "3Z5ut4nY7hnvzZo71q2PT4ZP2zMFe7No6ZYJgYpCA5yR15YeKxhGiPfry7rZGS2fE2Nm2qLTc5AQQoRKBCSKfQpD",
  "key34": "cMvWbh3Ae4SRnDexdciF8vyM5dxsJqFXymurP5pH7MSUPS6KehDExXe2LJQNtb7nZeXi4T97osfwE73jrGNSs3j",
  "key35": "3g4eoEc4S8FRXGzu2cUdpQM3xBvzWLEVxdjVBcJoLFA8N1kXcG41VruR3gk8z1mSNzcorHviXiTt1TCFje5GSWhy",
  "key36": "3ufZvGDm6mfuJtMsvUynAAC6QiPkR6XCKRiqm582gu5MsJsQ9PZWc7pEtrCiPZ1j5wvH7CPAhjRmhdnWJjLxidor",
  "key37": "4fPidrRmHUxynpgBaje5M784nPiFktj4FpzQZNzeLvf3y7Y2XRcJUURwh5YtFrVH5KxZHSEKLqY2TG87UshkxBas",
  "key38": "3fA9Ph4bLsibVGxuWfAK9Hhjh1XVfSa4cdvEhVAHJHoeDz5CCTT9TZQhzX3fhPqA6ZAR8G2GjM9BJn3e1rYp5juw",
  "key39": "3ENozuoDF9zLPHZEY4oSc5cxwGtdL7DHw9oAnsfQSwsYxnU2jDHJASxNF6TFgavzE9TzXzzxbNBb9FnSKTs4jwFW",
  "key40": "M2YpCoRbwX4n3XEj446UuttFsdVBmTivpiQWPncpGY7c9MyQumDe7YZ8e2x2LY7oK5WAMFtTDe46XYtfKGoAUYi",
  "key41": "5t56PVwe4v6baUfJjmDYqvayu1tAMGnTbDjyRjtD8KPPPZmGbjJtUChX56EMcyVfPP1fjoMNw1aQhowss1bBUL2H",
  "key42": "bwnDtyXKFrPSrtivYYFY5GdJTYwKqXhDhvvECywcSQpa9PKDrtDgbUHP8prKJPfazFbqKsGub7DPgYXafqRoMCu",
  "key43": "4toMaEgzQ29KyeQBMQzh1G775ZTUumTubMJwhHGjeqwYxmTjVYZr9j241uFd1YqdmunxEYLSeScCVp4ZZ7hVxgYY",
  "key44": "4spbdGknQ4oh9gEi9XPVaPWEP948zLwsad5xiG9Zgc4LiE63myMd5WuFw5ZE6gDhDYKckok4FGgMnMcanqLsAUTa"
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
