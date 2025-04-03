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
    "2zyBhVeuSegVGrSi1Ejnab5AcYNhLVBdmekn5DCRiXeAkws31goisrf2UAC2tQE6SdnwweMFmq6uo2wNZhvs332s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2orqARCpRK2WJdrdqY2Q9BiXTn7qvuLgpCn54eC4gGwLTan71xRaB7AVHCybe8TQKCe8ShF9B26Waj8Nv2yxMVXs",
  "key1": "44hvqkwpt8ND32w1LwVTVBycNCL8Q8CEk4gYYihw7KnsvKLaWyzvTaC8ZqBPZtWMNyYT2erima51MVBd9Wsyoap6",
  "key2": "25aBPbxG3qDqZdJQXfPjBcyTpWfXtd7PekZPpkCq7UB5ooXgzoWztiCokxGiJGpchVaPemoBa3osRRPjxecrEYPN",
  "key3": "3RB7qKQnBhV4Nb7HEAB3jTcHiCdsFALVevXuFXf6fkBi3iNyCC67rScxmjfXUKGnh3z18g1uF8vHNmkewp4hGXw4",
  "key4": "3K5DBCRTjrEYMUrx42pPswHNQpaaJeG2AcyP1qjHfwttduhMuhbxxMfkCvSSG9xMCbYwLQiWbHuZvMSJW4sx2McX",
  "key5": "3jE5dGKfyFEA6EFs7MGRoMD2NpJTkvy8eLNF1UHuSDMRUN5waQDQ9EWoNuViM8J6J9HA3orwr1bbduPyFhX8aWW1",
  "key6": "TiwxS7Rk2MjgNWnT1qtmXpN5h7kuE8VWvMNdTFiA9Emi5vSkG3Ax7hFjubjXp2oKXzBKZZZmDQqkk9XWeho1x6i",
  "key7": "4RyjA8rbJZ31Rc2tMEkZgQ4qDb4ZhobbPNCpAocHReg7m4jd3zv6tyyGHNZGuM23BX2ZF7LaJviS1ATu1Gcqb6oj",
  "key8": "4XX5HTcmKNrPJYxkDKBN624ybka4fxFi9BdV2rzrZjAkzLMtJb2Hy5HkS6Fv3nCPCTfbivzm4A4GziLo5Z5rUvMJ",
  "key9": "Ygt7R2X9atXpDTwGR8Ma8sAatyBDpaKSGkjaUgqgYWDBVspoRvEn6H6zU9q121W4R3SXas2NvMEKTTpCvhptkog",
  "key10": "4wTudeZmqj1opeG6rtNQw1rEwUXvAckkDPCjMRCd4ywy1PF8DSFNaboVa5HCecuAuzUe7B2h8kb5a9J5RC5JcvGA",
  "key11": "3CwBEAd4cdV7rRGZGMiuN9enLfrwZRqjB5tPThR2jqGdaGoTJ51sRWgmYZDvAcEiLvJ5FknSWLRQmy1nQRoeeYEp",
  "key12": "5F8LrcHNHokvxxNSAY7fevgZMy6MPWiXh7ScQKeMLRDu6F2gjbuAtZZ6HTdD1mtDokFkDQC2BcVBsV2gyBS5U8yt",
  "key13": "3uD514kcCfrHm5t7Unid7J8P6XyzhuHqaNbS5ZwrzmBiZvzj1ohxA5QnSsyW5yX2zdHybeZhNExbWqik99jG9L8N",
  "key14": "4j4DKvUtMggmaB7mb85iiH4X6UgKCoepxvDi39feht6U9AxHFdSawzdkCiqzdeBeryj1itKLcCcg8FzujrodFSph",
  "key15": "4SVU9BMFJLDeDkmq9eTxRhDLp4KYn8AR7MEBd4X1SuWWT23TamkqatdKFPxcFUmxVZN9Dj6PuDTKZDfeY7DX4LWU",
  "key16": "3xsfd9sVBXdqpVHtdSWCSdABb5D9ddbHPzRTdYpfrighoekoBAeZabakLUbTfg5VUH6qkXEjvJ55hznjFvyFBrCY",
  "key17": "5Yj4cgrYyuL55RGrygvsAoBzrNhYzs8KwB5k96NN9yJHMooNrkgRodeAzAybpDUSLNAfi3xpCZQyaJYzd7FJmPMu",
  "key18": "3PkbrqdyGRox4ETrAvkAFwqto4DEwiZqZgSEHzioCU5QacshubriFk7iwvSXCZmwy1XCwr8Rw6yGdDWLfBgTvXJy",
  "key19": "4EPRQcAcXLTKH67pFtN1oYUz5teX2dYTWrcyZWFV1nnApoPzMMdLGBf9PAH1gM9Apy9Jb15n92ipvVT6fj8icANe",
  "key20": "5a51rBb9Dq9PAecdqmu7ExEEzTNnEJM1WKSEa2dKojc1CJ8fQ1qJruV5ngAYsVCQAumV4HJwKAiLs5uiu1hsCnsH",
  "key21": "2JjzmwiDpBN6QvW7Ss93qB66Nk9GCh6nnBPBdquCQ9qRBGs5jcZ9ke3y1wU3H3X1H4vG9HvsEEp62EmL91c9MZjN",
  "key22": "5BcbENMSVRQmAjXzBUjtrgqEEMc676PqJcvHkb9xyzRJMwtNiKByzxTAyE5sbp2AnsQRsqT4wouHPj1Tyhmbpi7g",
  "key23": "5zoRyEyyTuURsT4mGuNPQm2WJv8CB8u9qYQXpu7AW7HrWwCdBpYTQnuH5dgf6hrmUQvoBTUrJBsoAi9zXYrK56m5",
  "key24": "2owhzqm7sW5STf6sgVxRjq5jPCegJRvqakbH5RHWioyrUfTzQV8TXQoqPMSdv5vBSPi2CgBFpA7ej5pHBMzAArRr",
  "key25": "5yT83eghASwDh7bfxHupZttLjpF85juxKPsybFQEsmDKWfWCbzBP5dsqVCgn9wpp2VxXywYx2r9x2DFf9hQ6tbwX",
  "key26": "5SoVFEihELjiBuZHyq8NzoCCJKwL1wu658mM2mhQLqPsA4RtA84fNYT3ycY4uAg8QVM8aapoK9Kn6G7edf54w6F6",
  "key27": "LGpKQfFhP8K6LxNo72tzsHNGN8h2nRAdCrDkZqav2d2qncnrru4e63mrX1Shyf4VisRRyH4PQ5Y4FgeL9jSMN9R",
  "key28": "5b6agWpmWNRxr3BJPqpCngBp9nbscbBfBSwabYXfDtx1ECnConMEq81dQscu3mFv28Xjz7PQHWqR4bXXKgF5ouZh",
  "key29": "617AsBwozSPDffvav8tEYFHKP8RjUK172LQUaEcSk3drDmujs7WhLUdrVFW4mAdsGRZm4qw6zhVoz4ZckFm6yk14",
  "key30": "Fx7xCnreN3mqVDa9J4MwFJJSMmgXbxFFUedYX43DQCdj5n3uF4pmyuNc2pkq4YdrUB4uWDX5hJiBaz26HEDNKai",
  "key31": "21eGYiUtF3BoSUsKNVUb2sbgT4EkkbfJwfjuZUpDpKmbaFbvZmDA8eT3bjorVMht8pGfoeyMoTGEYKcrAMHH8hQA",
  "key32": "5B2HWixqVBfQk7aL2BzhPTCRWHMYNfHbrHFoPZ9Qf3B14FQw5kQtBr1z4m2T6CeoPo5VoF5LW4LMzQndxKStVgGQ",
  "key33": "3b8UEyXFCcHv7d6WfFLWbhedpLb7jkeF6FThmsUVeiuAMUanqeBFtJhxrKndppNomdrp7ZpYjmzZ3JZ1juphnTGg",
  "key34": "4PMT5HbVDbAJvp6Cbk1imz9gJgqazz7W54KZPEXdhiRoimp7KdLmeQ98Ri4gDVypTT1MwsgodZCX7t2bNKQ3DJ2L",
  "key35": "3bWpDdN5tMGDUVdu1XVgGMDHTwewuKivGtMKRmnMq3NBdyUTfeABL5tJFk2hHmm858aXpxHTETwGVYCB56pKZkA8",
  "key36": "1h7M56FpPkwa5D7kSBfvmHX6k7WP96KSomNq758W9fAfQ9739vpCFFFNT9bTWv8czfHGu3dNGUdWwwbM4FjEStX",
  "key37": "M35etUhgnodQjJULCHXKuD1jPcK2NnCBv48Y8M8Vg34J5kDSDQ1ecYKmzxVxXF4258XErznp4gt5WEsqzLgrgRL",
  "key38": "55cFGYPf7CCG8Ymb99dZmXo4YTntNbovBRVqYW5LhzRdaJV9TD9WSdowRPL3js1R49wwCQWEhrgVzYnstswkkjAU",
  "key39": "2wzUHqDBKT9Tn1nwzU8PzrHaavDbR7JhBQdq3MWvBVJvnv2A4RkV6YtQHW4vdybPJq7vKS25vwnTQcRr8yPatV2A",
  "key40": "5SjauiJbTBM3Le45Tu7YqE2NdGmcdG5zut4CtA2YuY41TN1RKEEfVJgonhonC3ebsKszw2ewd2BHLP1vvW2wLGC8",
  "key41": "2J8UQe4syZhQP2RnPkzhHLNbKiqy1oAGygMvKVDxq7odJ8v8iDe9RJ1ZQrf3gogMpm8ZJuAkkqTrWhHCs4bTeCRr",
  "key42": "3pCbNnsVRgtKGhd1Q8Tj4CQHPRdLA4EjECSkBkYvRtAzmbtwR2KfsLqK5LoCeMobzyAndVs6Hs3TTaizmLs7D6kY",
  "key43": "4vYjMQYS4AFa9tfE3UW3iLd3wcSudgbEjYoeURdWnSfxon33S3z5XBaoDoyW6zREMdcePAgcbssHguP73YxLZRiq",
  "key44": "28FH6z31p1xJN6mJivMgdqxs5TGAG2NzJhcgFDdcJXXW2XFY3btPB47KaNNKKGA7mBiKX6ntGUievgMx5iXVXytL",
  "key45": "5wgNmykahpjzwSZn8WWhz6aNCXAVkSxPsYXmvtcSm2uS5HiAfaY4tJ8FzevimEHPzrgB5sA5GWXfRtV5uaYczVUZ"
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
