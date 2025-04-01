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
    "5vqhdD6MFHisHYGk2Pb8qtB35uzESqt1SEqjt6VBC9nFRHRK5vaCpTAnLAZFhqSmdn3groVdCsH4pRDbFJZWZxK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tbgzs4Sk1sajKS2WD9t12WDRG3td546QuPMv6sGq5kR2Arirt3xEtju484bcZy5M7cHTwaL41fXXfKjW7nNZVrs",
  "key1": "J3GqtHNeFKkBRJ7Tqaf9KhRthttuHB7Mkkjy6b6pnfMrw6B4uqstzLzMnvEpgbWEveN7h8GcL12y1SxKb1Rd6w4",
  "key2": "2kcYRP2MHewSntgHzqiPhx5WZJjW6CBY9nkPVCbWWNEWN9Xs1ycaQCxvJXEXMnXgxKcmPrW8WF9NSqDPrFFohWSd",
  "key3": "5833nEn5DFdbqDjH57fJM2SmFYhdtwVs8K3wLbtMwHB8VZy9VxtkgWExMgg6RYp5TqSMGVrK3o7TnywRZa6EfhED",
  "key4": "3rom6ivmoDmFFMgtDprGi5PP8xJqoKRdF6EfTzzEm8XF9YvnVoNXc5kd7eu3yucQ2RQddS6PWfbGaGF23G1oMy6S",
  "key5": "42f4idTNrz42UcQRfMsVMccZKYyEgtjcNaYyKeXVoy6S2cRhoAoK9YjboZZXbVDyYc9hiSijWwaEMeH35XqxJU18",
  "key6": "2QrZ6XwjpAR4kSSQcejrSh24Z6oJx8LoERn7V9Z9FMnsrBY8Zw4XYExmun5rr27cifb9DcijKHYqs7vx8NVqqE1w",
  "key7": "2ZaNsdoV6gn4VAbvqfN8Wf72LGKbBL44cgFKyXhftaoxVa5rk4e4TJEh6ewYkXhEKYzdFjEmgXTfpAHW9mXw1Jzp",
  "key8": "3DEMBFqtD6uZLxv1rsRFijSmnV8sVvXKRXTCWyZ32Dge2x7dfQg6vT11QNQL9vCmjQTUJxA4UpCsHSmQJ32dWVph",
  "key9": "5PC6y7L9edCFBvji8pepXeJCYLXFZkXNtsgbpGvFsTrRw4NaFqGdL9epxCZFuY1qZYAiQxJdAW9DNyDsGnqmDxoi",
  "key10": "2M9HVdXH1dFAfyye9iiQfiHYCfssFmkjjSsR7P83nStPTyWwMUdDanUpvrMp53a38fXas7PojgRkxmrJnWWSqpG1",
  "key11": "4QrozV45ZGuTRXTTuGQdCRmWdmikRTrA5pxfsX2hERFFayZsyYPWL5hSPL8bKDXFQzzW3ruBJDJbFsKAGHLDG8P7",
  "key12": "4DxGwTwNm1HpLHctTfQv1wvbwWz8hy9YB5bwdCXZokZKtnFaUmD8T63t9Awau85nsasSbjokQf6SkqsYwLkzNpkN",
  "key13": "jXtmEimLSfGujtMn866DgKs7d2FT6uy9uJjD9K66nMSiz5qgfzkXAwPSWsfK7YPHSdYK9B9GbJJQweEZLAvSuQ3",
  "key14": "4LBtD38wzPFd6sDHmoQ1kvbBue9VQn78Lv7Sz85GYvGSUM1UT7LchpmbT2reiUbMrU5YjgWoh1WVJTj9BhZrFmkN",
  "key15": "5L7CohjMLE9psZAj15Xy5dEBmkEtQc396nY2UgRoRb9o2Ac3xpZxD4S4MFDkHgVMoS6Xhr9dvWfzDpKMq3g6WXT1",
  "key16": "2myseMdLgyb9RPm5UEBgg7sw5U2EzujfXSuwMsc3TDGqjGau16p53g167zWj1qzvGthgfWG6hN67GZaJnEwuCV4e",
  "key17": "5XXyUa1GuSfWev9UmXkgRtXUeipf6FhmL1PKcyti3UAUjrXhLv23J2DMHimJWdPQGXjfMhU48fMmdXzChESeSCD5",
  "key18": "3yuAE1wsQHe4Bhrk22ugz54KhnFE5p1FQFMJ6G4H7gnDJFfz5XhEupC9TayAh4dRZ8YrTiUqmu5sPMxecdHprjPx",
  "key19": "35hY68kUrGEkuzSSHUts3JLxctcXBui4NKtTRHmaqeGyUrwxau4tKZsz3FGFBtF6aMMSmnRPojys8iv2bWLiQAYG",
  "key20": "52P9V9kB2XSLALBUpAds7fBv4vBzP5pfzncPUkXtUqDakhEgiRjxm1QcwLKu4EUvd3RcYQmdYFeX4A4TRyFtzP6p",
  "key21": "2mPDVnSUtVWC4QUHM9dQ6bqTcmCfqMVAT3AAqizM1jdov1djvtdp3CbSqcqsuKHiStLPtF5yrbAk8dFvrSBLso5g",
  "key22": "2gWVWUTNAnfXNymBYHd92KNMUJcTZiWfJZdVAKJZYM5tQBQkAhjFdRFdWUhtn5r9VYL9rfRJ47M2XQwC2wTabR5p",
  "key23": "2GHoGLdtz4aBvCfwJoGQe4Z5H6Ezzg221tbSaAgi2wdoYLN67bUt5vfsz2AWBkMsGaUEzdFPsnqShLyayMLRvS9B",
  "key24": "55cRSvCPDL8YffkxvprZaaaWvm8XV8Ab2HZ6sQPKbShoTe3FbpynAHaN9ynbHVsz8f6uaBqNs9pywNMWpRosdnoJ",
  "key25": "54PcSaUiFasZuEhq6MPsZvwtd8VfXCzFq2XQnHiepoG2hk24XsxJ2dvWc67HjA9vkWv7RaZbxsDEtNVNvqDzbdY8",
  "key26": "5nF72pmYM1TsUQs5gv66nC9rDFHZSt4iujZSNXUs59MXiQPnEQeJmgjKFxvGEM6w7McRads78CiDy5Kw1UJWqsQc",
  "key27": "3gBVgEdWudpm9AUB5dBBKg5jB84Umid7Z1va2DkJrytRKQNURsCfHZC7gQNzYjFL3K1Q3Fkm8GG4fFfXfrh6xfVP",
  "key28": "3nXVUZkbw8UZ5qousbt1a2xfRvD5dCa4tpqc3aM11FpLyYRKh6CTZFhUfBFGZKV1yUoVEeFKS66Gc4Qbaswhu7Pc",
  "key29": "4e4EJSu1FuUiLwxMfYoEBe1yoNHSnakfDB5KaeBmZyUoZ9irboneKbBNeunEz8aE7Jjpvv6QmcspMZk6NcaPcVnM",
  "key30": "3yG1wzNP4jdy6PtrdV9LibzqGQLy67XwCtxQfkFg7NJu9e8yMM7KrB6Edg6CQjww9pULEb7fFVJBJCExUpMy5bid",
  "key31": "58781zPLgmQVe9oTuzq1FHycKFkNkNEPNZVy21VdpBFCdi5hNpWjxUJLGJAgKznHUG9CfDHZvHV6KGPrfxTUGovq",
  "key32": "eUd8AJRMLjw5sjsQbV9aRGnSLMN5xUwqG3szRf3rqYFRzwsddQN4Ay5oQYEDajr5VzpBZqqSksD7qKeiyGMSW5F",
  "key33": "sSsBbhiWrjPGGEP5aCEsH7DyAKgPj9naGo3qwQhgdwwk6s8oqCUrWEioP7ivBxJdp14btM8EmtETAh2amZjaoHW",
  "key34": "1V3e7sZ46hVaCPFrNuJnWLCpC7s5dzJcnRbs3dnSFPgyc7VcN6MmMZYvssAUtCToJtJJgTrNb66LhbgeGCshJGM",
  "key35": "4hbrfgMjT6MwwNQdi2mnbLYb8hp4YnE9iaHRBZBrmXfzoMmqKzW4u97oQ9YWRwQAc6tARPUf6b3xpaJgSCVNPgnW",
  "key36": "2ab15LwaCQYsnZajyAfWTaojgmnXFQw4KNqzDGRDF2zs9xJDjZCRtWCNX5A9Vsnpkg6H4bWZiGqqZ3LpKXp3geeb",
  "key37": "hxo7Az2oR241Wv2VAQk4wBgeYT97FNccj1oTHfvk1Lymy46qDjnJ5ycVAf3MV6cMNYJnzaUqrirsKyXMti3UZBA",
  "key38": "2nnRcghJE3b3DVBs4cdijk7XKaVY3CGkPrrk6y6pU2w5pfiQRXzvXYScxcdvdYCHz5iUhCfZKSB7HRupfWweGjd1",
  "key39": "TWPr6Rbz2fqB882YK7o2gBKD7vYtn5biq5icf59sffontAsPTCSPPkzWQPXcNgav4tgvmJz9XQnVB4GiVQCqtk8",
  "key40": "49MzkABMnSLbe6LvWnCaaPAUNwdTcEpebiqruE4TANorCtnuPXZ3st6zK4ETCEojdyRJUJe7uyYEtKkpR5L6c76U",
  "key41": "2MVxX43ZZxwm3493sWh2BycQKDmDnA2jqhd24umjMHz6m5iU3Exx5xcurKyw6uNTsJvS4MnerHLDQrvz1XhLcRBx"
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
