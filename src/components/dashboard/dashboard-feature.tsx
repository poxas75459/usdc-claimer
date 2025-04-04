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
    "4wmSG1Y2TApy2kokYQpeU28ADcF5oDHTmrNR6voZkbJzfSdwXFmrbJMWJViM9JExv3yXk7Y1SdXqoBTnGxVVmxtD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31e19korbAEq1EmJEYMspkAEXp3hh1ET9ZoaNsKScs7yu4bgFRr5qviaSVjr1UavGYWUNKvLvEVFiMcimzpDADUT",
  "key1": "49ckRH9FWnBYrm6pbd1bbAmpzPzUsTCJrGfxhKcZTPxk2Yc3yQojLzQ6MTCQEEHgjTnTU9c5dHbiYfrv8s5kuV8j",
  "key2": "2ArKNPUktwoM9m4TNY2a4eWBdAtpztszbd4SZ71y5oqgF2hmGFcXgYW3XX9yt3kL27vrGkZus8hTkRRS8CjNK33E",
  "key3": "a3reZuPK4ooi5P6ck7eTC7w95ntMTWJebZ4MhajW8fn7ar8EHQtvoP9HxCZKmMoCsHSN89ETyZoBBo3JTuUow7j",
  "key4": "ZvrcwrUrUNHWFg547PTQE1tmxSy6ghH4bmbx4N1A6vLNHezGq7KMpi1gSrus8YjcxQw2ABGM5XFCkW3bibxbfr2",
  "key5": "5VaM79BbUqTCzZHk16VfraR3Gm3VEi3ztsQ4dKkmjDQoVDCYC3N3umeLhR8C4peX4tNaXkM1bSei8BEaRaG1Bmv4",
  "key6": "2qQ44KhCV7fq5y9SE1DUJZKc4xR1vqJQsFRM6okTzeVQwDfW28dFgyDGGPwBBzxAEUw9U39wMyFi525snFiFJDhJ",
  "key7": "3a4aAjPxYJ7ufiy5ohW6d77fN7SyHTJ5Lov6Fn9SRL1keDeSFimzeUzDkAoCrUn3UsvTjEHAuMCYqPSVCkHSkUqQ",
  "key8": "2nPtJaAezXko9PJYpmrAy8txpJeqdLDuVyHjTTdx5etYEwNTHMcgzgwQC4LtzBiUpRv8S6Fb5w1jZJQTGam9RVA",
  "key9": "4it9gFDGWFLv9FkBDPxwJyEGzhEMYx1zWgfMz7U9XiB65JxCRes8AAPtjGZh2cGyrxtFD2WS1KLjL6i3Pfrgstf7",
  "key10": "4LddJxV6XF1rmbYaTdJmzxV7HgE39zzxDP9pCix46TCxGNiMekyDj39z6NfQS2viqpiYWr13N1aMzPmYraWMiXFW",
  "key11": "3fvUhYc4XoeBKEQyE4ZkCn3sU4S2LHS8GA5bR7i7PHuSTxEqMiUcdH2BHxxYZ1ug5Yrp2wzq1r43xyfcgCUEiNxz",
  "key12": "5QWcDtwTUav8E8e2wii5n51bGzse6TutdxiML3bMJ31vC4UQ2VbWnbA4E9Nv6Jc2jfka7pWCynqXNqBDY9TqTSua",
  "key13": "5wY3niiLav3XAc8z9odYEtxUnqfrPEB3Tsq692YBUWdmnKvcbBUC96ada1eGJrFJB3syrvTAheUd1apvP2y384Tq",
  "key14": "amATd17FhVUVgy42w4LFmekgRwscAufh36CsGKVKrKAs1LYf8VeiPFDd5XRoPLjwCqedXRHK2UuXp2oSPU6igVQ",
  "key15": "2AH7s1FN1HVj5j3UftsZ8q9DqDwzm3dgtDmsnaXnTpfGgdQezR3XY52Xez19GE1w4DaU7BwSvRbA1QiUEatdZZ6A",
  "key16": "5xnz6Zq3hiHY2KydsbHL1an1jXmvkbEPrfi6hQtm7CdSfjxEn897SdaewaqJZhZK6VuLCwZettmx9esahhPyW9at",
  "key17": "k6g1wyyUACFbQFFBZWkVASPEEHpjA89pB1JeLY749rXULvUPdFJxkWhnkUzYrMuhrtLTDRRJQtQFgqLoVvYRVm1",
  "key18": "5yWNzet6E8RYC391fPggekdrDcBM4zMZJYJFgstV1oXoQZfsaczhD6ccGpJSb5vSufF5y3ugc611Y3AhMf5Pegd",
  "key19": "3UrzWZikwkFzVY9DpG4wLiNnonMJPqmFD8FxPPJFjWtSdKPeHZVz1SgshqTwhJsfSV7QyrqX12buh5Pa5a9cX94U",
  "key20": "2SdSm3RQjujVMsXk1Gnm1syeZ5nzK1PCML8CDRZWUJ62TfiawSXLuqwer6MZ4u1uFRVMvNNgovqi5f7APtraDwTo",
  "key21": "3VLRQcnhv12u1JuvfS8WTCuTbW42sXrpv9hC5LLRa63z7vbm3rzLmuXPrDZeFXw9xsX1UNrifgzXr8SMBnTogboJ",
  "key22": "5rsBh8ctoFLpZGujgjLZyubBaFQrXqkZ2zRZHuGk2VdsNK1DJsxdmsWzQrbzNtC29nXCj9jnEGC3Tvj7JSezRcGc",
  "key23": "MRptPMsiEhTFcLk75L3u8MQ6aDUtW6yX1ezKybnZWzD1dRV1sWDGsjgSXqa8wPzUW33jy15c6fD4G5yqedt9DeK",
  "key24": "PC1in62oXArqoebBmF8CijmtyHdkbosrxKLX6fLdJLti4jrBSBpaqkQsFjNaBTsCG1JNJr5hhxSeQtFmFdwfqa7",
  "key25": "72PZGgKupmovc9TbVbBhe7GbZxD9NeURxA1WFwPmqeqnhgPpqmefXQo1qd1HkqQAtJHz14bYfEmRnuuE2WDRVUH",
  "key26": "5Mo3ze8WefYvNadEAXbjrMVNwN3pQ7mqJ3KYABRdaE4VEC2n3AHpuqd48kjCqZF2pXgHX4SSE9t74iT5YqzQWBdz",
  "key27": "3bCMSjLYQaxK8KXYzshF5HefVZovQcFrYXuJiefX6jY6U8jJsav5Bin3EYLrQ639vPpf1aeF3EUrxckoZ1dC3GBR",
  "key28": "4HzXzKousyGQxU9Koe4hsxMuwkc4F9dPbdXz1zU5RqG2Leqa72Kr5LbqnT1eFxkhS5PWdiCUpcYNnUn99CnR4VXX",
  "key29": "66ibfhcAaMKUJtpFqt2cdx2irYFWmnjmR2hyAobMK5DnRJ9xwLen8qdA4gSXNPykaDZ7hiMuHqYyMwuStkvEMmTM",
  "key30": "63Zvt39ANbCtf8EM9C39cM4sxg5RGNuRUSc2YU1yVv7jntGco8CtiGamWpmrFdvGhbtTvWc7tb9pZ5PpptGGqiWx",
  "key31": "63k4FNL62ehRN3tfLpZn8EVsGLs8EPobXMkr9Fd4BZ3LJXhtXXAccKD2utyEX5QASnVBq4W8mz6bPiCMwcrNDem1",
  "key32": "5gy5wWhh31eMyhCo1JREebbr7fobnGJtd7t8wtFJS4ufxCxi5jH3ju9ezLaLMpSqrpGi9CBmwCus7pYvo8ft2JKg",
  "key33": "5fZLNNd4DQNe8USq5AzxtsCJwvdmjA8m9xuFaHF6RMoXhcWmqVuVARfSX8heDgPgdjKhszQS4x66NCKi3WcDJjsk",
  "key34": "2QHiiBfUqKqURyQHyvcjnH6K89JCfTzM4jucf3EKAXZdwwMcvTq1xdYxV6ypSbo8sKBfrxxGQB7akEQBEuZbcje6",
  "key35": "SS3nxDHwep2iwMF63B9C2kXuHJMqU7wF9ofpy1dRxktzfCex2fYESiRMGhxyBtV666SdMJec3JLEviBt6nGFxat",
  "key36": "4Y5qCbNrRHSwJ2wyWoL9cUZV1Du2x6b7vLH1mvXkyYyWdEd7ZMcw3wWRsyLZpiQpcJK4kisp3BDjsh2oQUKP9hzY",
  "key37": "4TZgytAm89ZYbiR4qFa2Cwa9FcTxboEB3BXYyzQ6bWsmXxsBGLS9FC96Pcbs4ewXMHErf9Fi7JExEHnvqfxtC3sa",
  "key38": "62kmpYuvmEU736knzvwqfosMkeLk9iETbxA71XkxTtM2knsXbZpFuDd8bcTQUKqdk7dGHYsDhecFkd3JoyA1u8js",
  "key39": "dt1v5eaTyXh87jzLRQDy6mRZ5d2Bzk43XAD75Z5ZnLkFGVrieNRDCdcmvgVBVy6UkKR6DhVfJhD2B1zFAY2ZvrY",
  "key40": "3WZhXW9yzgVQSDqhzpL4des3QxMcGjE87fkYneLv4wUZGuBFTRBbcUfMn2nfhp1tL2BLQuhDGbq5kNbpLQCJ3So1",
  "key41": "5P5HqB15SBsg8FwSWf9Wh6XUWELaYQMUay1zBhipXXSJsQVmFNe2KJez5HJHgRZtGyGZcYBqBt67QwkAmb3gs2uj",
  "key42": "DnCAgtGqetyWssvJZRUpdRrRaqyq7BAZh2bGgfiDVFcxZL1xxcWWzzdtXKom6vxkNMLDmAJmtKRoqESyqgnRHtE",
  "key43": "24wDZz85WHP2195ugrE3hRTWzvyRFsJZjogkvfVbr26oCC6rJpPRDoDeqfDq8fQvBcVm9zAkqsHhozRAJMEV3hvf",
  "key44": "gQVXJkcsrePnAWAw9NaHMt7HfHpiQLTg8PUB2f2hyikTtMdMqxq9PG3wL2KPs6tuFYUiKRJYQJobYYkWE6Dfpxy",
  "key45": "3KJpnh9xQXgh12U95R3R3oF9TDqypLBJZQdN9ZM56orZBzZBVkTrSvT6wJkagNg39kAzmM8ECxKieVydUwH1SaJN"
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
