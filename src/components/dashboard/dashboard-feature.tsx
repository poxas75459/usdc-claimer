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
    "2fTaojNGbkVSknWwGJMx7dJ6Jq3AcvCRJ1rPWvi41Vzcoxd7UgznGFneBs3W5tsRtBE3Z3rE1LMVbqCP9Bx4pv2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54XedhdteajSpQAvvhD9LLx1yCUZgsZiB5dT28rDQtbdT6ECH2Kr1GjmG335x1EvnZbvghDhfxYGViXEBnhUuWZF",
  "key1": "5AbMzdv7tEXtqiQoyuLwiaLdAYu3R68Vtpejy5tKuxvxkMuTWfBZgC7FqS2WyrnWHqh1R3Fs9oFL2PG18gS7CPz7",
  "key2": "2XeS8uQaXLnBRDr8jg2gV3jPe7MWGQAwQ6UAkGhnocB7ZA7DZn6aYhbHo6mnFAhyFLaZ8pXZA9vbzXZSJR3qYE6X",
  "key3": "4oRtDeNwT5CJwkHuxMbMdq7a2xLBuZDFkdyFJ17uxMrvB3MianCuTWurToRBSe5YL67bCh1sHAu4e3CFmTpy7ffj",
  "key4": "2KuP1x168DCkZDKm1SLVKsEJ4xix8a3adtE8qHnmbzumk2RyknqYGeqKm9C8J6zNcwTDY6H8La99FPPReHweYVo5",
  "key5": "4zNQgq4BrYgufSLkRBfUWi4D7SyFMz1C84X4rvQBTejxSJF7ajZoFH2cMfyZCDdtJ7fFcN6zLWH8X24E7DjR6oV8",
  "key6": "4RsfrCzoqpZBKELzVNqhEAAFHxjizz7w9zKsofhL7tA3NFc5k1dZXiuKAMkmvZABYLe4n1nmwWX6EWWD2nfq3Bsk",
  "key7": "5ojeVJPZg6TftmY1Y1gepRmFq2d16QBbdQSDcShKW8wxp8UMeDi8ih4YN35oQrN93XWZRKUrWcPjhu2WAtgLaGEg",
  "key8": "ZHuiJn8VXpVaQWmibxb4ijH6CTVa3xJACkn9fXFV7m7yzGXSmeM6uEDcaLSxZ8jSHhNZNeJEo2x4Us9Hr948NyP",
  "key9": "5BQHzpqqHT1WGmUtpjtZkviqzPmAAa7TgfHFZvXsgXUtLpLwogUpAJaMFH8Zj9TZzUeoqzKCSwKfJBw8hvFMWmPc",
  "key10": "3DmBF2eG4qMRF3edRxUFgZADiY6foYvxgeqQrgNusx9cjnNQ84ZkRnDnE8RchXeukZY28CGuG3rjLuaKm4FfjeSN",
  "key11": "2kFhB3ojpNNxuDPWfEfB1PWBbur7RGaVQmrU8W3KQ1cWeZV5pKbw3tCspVH1WmhusmoBD4GCaPVi2jbToJfkgpKZ",
  "key12": "kpXNQExSovMk6WSpebrw8TYdAcspPxUR437PFBwD7md2AjVXJrCqtn5b5FPh65K5AGKbjmEV6g6nZZRhNqnksfn",
  "key13": "qXKS2FDCdMdfa4p6AkND1YUisgs79PhsNerbfEXGuandRCyWWwzBp28z2bVXCFGTveFkoHSmeKuBz3HsBHVszDc",
  "key14": "Fp3NU4iarp4tT9fw5i7cNm1XsAQCy9HE3dxf7BLLTFZZy4FUqD5fbkUNRYCXZdd9bKnTsnSwqi6Tj386PyLXieL",
  "key15": "gNLHy4qgfnosr8PDrQhDJfeM73YiUaHmfAkRWeLQtgFjEtGDca4vZqCCxD8Lpn7ZYNHUNzW8LsV68rbXagX1Y1y",
  "key16": "5QVXZhXN6L8UupjdR5crjmAVsTLKjVeFQ8yTQ8u5zTGVrVMcS2BYur4AkNQ3HeBJvvBAjMwpDUgWBnaYT54EiVfo",
  "key17": "5MKPDDhMWZBYNtZ1yKX4Acjrb1WTrNEFTuX5U2jDxYyVvgfq531z8nMtgZToQRaZVEU9NPUA2gVoQujr5cQt7JLu",
  "key18": "5bTzx55SodpiGLJhw4vEmPvL5zjz3VspqdZ16M6qodNEz3MVrTEybAB7cbRQwY3dgbGLaxo97eGwTvH3RB2drjLR",
  "key19": "3Qi1rBcVtSFaaj9ic7Re7335nUY7eawaa8PYGZWHwpdSUWeeveAFjQB2auRauwouLGVjQHBQjUwAvZw3gGrUZrC8",
  "key20": "5kmaEZJyYceTwDv4gSobNDmh9M9ThbfeR4ST5mQfyfhANLMiUdBk5KEN4We9ZYLBn4iRBAzX2mHt5As1ixS3qZoG",
  "key21": "447hb4BAGMoeVykBj89o3epoUwgsiGLLAXFjkX8YQJSnxGaY83L5D2aTeSVNpaPZT52KyMPiDyAcQSiHEhRW79XF",
  "key22": "2cSHBwYR1RWUQKGEmE9SKWpChmRxwcU5Cutobx4qjipsQUWLGVrQk52csRCXefTL5GyxoHUnQWNWuqgcSxm1UCra",
  "key23": "2GnUT2jFNZfhSKFimE8UQbqrjTyEKM7rNoZX9Y5odzDULNfwNBUXjoNZUK1eRXPnx7Zvj1SyCbeg4Vya24DpVABH",
  "key24": "2Hr93GSsNeShnWGGa8yZFCXSjQE73XFfDih4RcmLSQ811wDqYFUDgFx9k3hKRbxYMhH1LZNy9GD8MY1wbbqkWVAZ",
  "key25": "2je8VdWdf2Mbasz1qRjswWquSgSpR3SMLw2JD98VbhWDNJaqvMr3ejcqTCotHjjLYoT1i8SfoHSku1Xw8dqTuCuK",
  "key26": "3x7N5vjDs3zTi1sUvjNj2FJAdnroRPb4VmAW52uEA9ANV7a1GAELbiMkicGRqDbrRpaJZ5bEjzPJFzpF27rBH6r6",
  "key27": "2hRK3WBJ4ScHXQVkjh9g9bDX1bx8YRkBCX62xkPxn9rxhSd7KrFMGvG9xdTrXZQSFagDb1Q8ZHjfn5YaqYBwGX6",
  "key28": "4UQnsEbjjAn9zQmm6JpLcweAu6jrKTjjW1pif3iYUD9NuRJSF9F73Nd3RfKs4xA956UaSZUdooCgNiXdhwzaH9zu",
  "key29": "2EBQRDhLBqopyTUYuQ5oJMouhJbVgm8MoTEqRffwrkEbJWwMp5XWt4FcXzuN3ZVN1aMD17FMdeJ7dbhz5UM8F4zY",
  "key30": "5DqsQPkMvapu4qhJqimow8UJV5oBfRLaLpTxVxtjGeqPhDsu4tYgWqrxQ3jZUZK5tQxJgcR3KKDAPmydB31S7NSu",
  "key31": "3BMvS6RcgtxouvSxeb7d4Jurj8y6cmKowSN1NG3gpCnVDWovbgCVvU8gYU1CJbRh4Ge5HJGKXCpdTCU6zgRqrRwc",
  "key32": "57rx7VPPEeRK7jrmCqbasJge4Ym93Ue8tkd9hvE21zDPAt34HUBFdvA1LmwAjUa8aLuSKggrHMSidhSFYvQBJ4bL",
  "key33": "61odsuGL4yorsZj4KzM8nrMocjW81iuXwiWkruxduwa38xBA4fKSwqmp6vCb9RWNsUC96r8DcNZQSspdKXygTRTk",
  "key34": "n5RphquxGbXvjkUQLhPPbc1Tpk4UXKBe6z5vzjqocNAj5Z19xrrRPjfmMkVG67wkzTKDmY1LR3F5kaipaaSxmjM",
  "key35": "g6FYWwvaBTgS4ufieShW7BCUckAjYRj5CWtPdNDa2rBBUQcFJsc56CktLQRaDK2ZbP2q6xZmbvNAyrgQX4N76Ux",
  "key36": "54pXVdPmyGWF96g9KHtqynxC22ikjdHE3foGQ2omK9JQKCQk7fBgfWoKJ1UstjmkozUPnw7MjSTaiEMXYXCTMfNs",
  "key37": "3CCTDSBmy4hQzokrTveUvct7MwcUXerj4ei268AZECEfP6EerTBEvjrdwdxVAQmuPyvjy2pVFgxsFF7SBu2rgejH",
  "key38": "3gxVaYGyLDFN1SoEMJmBKnHbfwrT6ZovE4ccVsYzVtb4hXjSC55q63EDHPgKVPHZ7kJ1zZavRTswt82MfBVn72AL",
  "key39": "2zNovSay9P6uT8jvL6fn1oVtEQRjVNMfUy2JxfWck6MC3PqBmPMuYxHQsmqcF1pJaJfZbsFmieecYXy7bt8KrFAn",
  "key40": "2DL4jzrjioKSAMaCNRMJP16HeVkrbygS8UrDRsVzmxcwjrxnv5KpG7virLUKMzJpTNVx9xNZZu44ciNu7kbNsyYa"
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
