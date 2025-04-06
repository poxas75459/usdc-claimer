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
    "axkvc9ng44LFqwqqjkkkcn6ehZaqZF31GnGaLdRL6FyadbaekxzbTHzhnxmpVrh4kArHgCZBoMRdkG3LweYbavj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ktzGwG4otFmAMpzMSe1fiKF811PZ9PRaSrY2sSPR5CQBtiboM4v4qA37T6rNK7FvhajwQgbcZgzxLtjFghQE8R9",
  "key1": "2yVh4BCfnJdmR7QkZxjgt7eoGFry1yQKXfgspNj7qrjxnKbgwZWbbPQjD5yV5J1gHCvmVavFVtv6JspDh2fHBT9Y",
  "key2": "391pETgzdZmbkt47H9sTiupLQvYUTbGZbQ2FUQsFPzg7R6mHTJFZokccLi1f2qhhwew4957tFDs8NfBrtSMpRztk",
  "key3": "2wG4qfPLy2arVbAUQVG4mhN85BMc6Fyja3hpmMuFLZuCc2Us5Dx2cwyaXJEJSn5qck4bxALSQ9gv8dAr4j1yMGu4",
  "key4": "5nkQhasZZD4meLuRaGCxFZzYFEQxqAgArmn6vJMLNuoJ2EMyvfPYJ91VBMqoQLmMSQeuY6mZxKdunDpbg5HZtC6V",
  "key5": "5v1xjwtE8ZwApmtW9qHgCn6J1otr3GD2JtfBDsKc2xipaoKcqLQJv6H9FBXnCaQ5yQrAxSRLvhe1pFKq31yxNeh2",
  "key6": "5JcdT5wyxGGafCbSx87MMEMqHszUw8uP3MBUSqYJCFCLkT3f62J3oEvsZ7NqrMfZZ9MHnbdSwEwt1g3h1UoDDhtb",
  "key7": "RjpyRPQxswCDfJa7Bj1LWzub1qkmuiqR9WDVAPLAoj9QHhiW7HYNWDSmF4dek7wz3B1FDQB6Ye86Pa9xx25iv6M",
  "key8": "3Kb4dnizg8hj4aCqFKEKNoumNbsEYWqdTLDU2DergXUWxhkd8aqNotmpJrRM5GsTaUFqhbtqZj9urh4G4bArMQxR",
  "key9": "4e8aCzcimK9XL15MT6BoaBBbHtM3QTiQTshnPoPpV1qoRvfYyyS8Pdkuey8SdqHgFNL5NGW98pswAzvNUtvPPKbd",
  "key10": "3mYbPA6JE9GhVMvteWYkh4264csBvHHQ5HFHx1SZmL6LefEPt2qvCr5NhSVY2gkWxTdo1ECEuLx9Zzm92C19HRWz",
  "key11": "34rkH1XUbeFhRrVed7NeaXRnhSgpct86fi6ojm5ccCv4LUCY4CrBK2vBH18aa26gA7CPvNzTU4JH5dePJCPSMNua",
  "key12": "2zrbUEUpmXDVhaRhWcaKQJczB57HfkFow1euV8YsadeY1Q3aaKt8NHxDpyo9zxccE2BnyyFEpjPhp2P5gs85f7Pa",
  "key13": "wEL4EYysENKFw3U2mv5tFd2ehKdQvZvfzC3wTSijWaSwaT5bcyJZRnzeG9BU5VHreZP3J1oqSqVX1TtWtCRQjpf",
  "key14": "3MLieyjqjYtkA8vcmm2r5RzefkjRADvFfv13GQ5Fq6Spn6qqmnDtwPC6BxJJJgs6pctzi7eLPSstSh5DEr1RNuLu",
  "key15": "3yGtj95M6mFVCdxPuEEbNU2pfAWpFJctXLD6KhoCmu7PtjqS2k6KYozyQyLbZxDekozmGC3Wcshe4e9KE7Uz4z5d",
  "key16": "2i3QwyjJYehCLACAhK4dV3TT4W5NGagJtstdYu8gWZ7hPNbSLvKqVADG2kL4er5iizssFJaznYWcZHHMH6C6bSWw",
  "key17": "521RvAnTS1Ns8JmjoLc8YzyG4FoAajEAseD8yibHagJ2MdhpkHvP5oSYos2pMBqDD98Mto265mpA7J6WC9ozxGCB",
  "key18": "4VFm2YuMYmqSZXtD4VMcqy3A83M6gi5YRf2v8Udubauev3ia8F4QZPSgwcyERuJv7jYGEZ4oahGyzGmmAJ3AKXS3",
  "key19": "5auu2eqHSUZiLDgrj3fyufhafM1f6HP3jgfGFTkn3NGx8fi4Raq224U9g4c61Qy2ShRJDCmGV8NrjquFh1qBUfr2",
  "key20": "2W6j1ATJVTWY5kENk1ybBg9GGD4DRCLSkzmbxJac3g4U5miW3qVUf9v8HxnnCQjfEhtirmLwAyuxfRv92VgNEgtP",
  "key21": "2CTaATZr3hP6GsmsfEuY2KybtPCc8Ct6YHZw4Cb9sNgmrX9rqxm1VM7k7TRLGX5FnkL6JXQMtpv5TJJUhznEcukq",
  "key22": "BnojVbL6Smq9rQBNU5CYDe2MRLbS6nC73X8PvjxRS2eei1FWNRxmNcdrzdTtpfG3h2MLN3drHXVbkf1J8zLhZWx",
  "key23": "38pgbZT4xHhWdPxGbzB6nhJaKUUm2KJtiYEVFUJe1rU274bcn6U23TZzPrD7bfz59YKQXmux8zan9JwcqNrC4ffn",
  "key24": "2oKEC7oDYWBwdcM72zXn6aE4AfC9QfheLsusgeZ2VmCJEKx7Cvj5L94qNEkRYXQaohvaJBnRM4dXBwsfuCGR9quB",
  "key25": "56C2rHL4twbsvFtJ6Lt3bUsEWxxh6vQMJPDLfV2y1sZT9TXWVZfGJz5DgeKaRecjb3CuXPTrez33bPh6igdJGY7g",
  "key26": "2GSgbbnbSkRTuwZEm2FU1aE15C8hqpQEqcNzVtBvASEguFnUBz2LzFwFYFaNZqBUZCgDYLz6uo9U3qGEZBTjoUvT",
  "key27": "5KZWi1aZabyXAgLL11rVs5D5VXWtnYNuPivP4JH9AoosMSDgm6BiVAQPHmPazGvAzGjtnkyKeHLxTfDC3HAgGoBU",
  "key28": "HtCEVoyQw8HpYqfFrMFoot3ZjSdKsGaY2zNUe7otBMV9Kefns1HG2NHn89XYU4x8cmFuzx7NFGLLsrtJmPb7h64",
  "key29": "5f8oWKJHLGnjvwbwpTq8kgPpiMtZDpgPbvLC4N5UygNDrEGWtgsdtXMic8qXJMJk5Z4Vq3h3rmB8ct5w4ZXPSVJq",
  "key30": "2kfTui1F3BHz8NG1y2Vn7P5SRA3KZfQmZYBYNKmQbPgyRbNwVZjXGAYUQqYgMvK4g1DfRqSc9FBYbVLiaRTzFF8h",
  "key31": "2Mcmm6dzJJkg7p9VfHN1CV39AFxkchRZivJUV8w99WWq1TKenGQi3beogyM6oS3AiRELMojpg7EqryXdjX5qvdL8",
  "key32": "5sRM3guB5GTmCFpSMXP6bmoY2fp5cAzzXFdpiycudseFk553QY2RD8yxtcWXGseWtJujDvs36y95k98d4k7kat5c",
  "key33": "3DRF7Mn8nbnjLxF6QfXtZDBh1cWPUmxgxVDhNCLpiNU4rMXphePVFeHERpcjxk7vePhPxNESiZpphekvnodLdXDh",
  "key34": "hdga8hLSCUEnYh32ovCS6hgYNongw33XuqXzSdqhRkgkKNjbEqQHrghdXEEiLDp4hcevxYAifs8M3VkXnpYcenp",
  "key35": "5LuqLvLHsy3cw9SNjJaeRtYv4D3fKFSk6jcxVWsZmZjWEjk93zrkyvNfqoF7N4U5RZyii9CBiqpsjpAAW87X4BMF",
  "key36": "37mViyDChJdi2Y5Vd2a3ZCGLr98ymS9khNjWJQedptMGWcQW6HTcx6QFhKwQxn5TsWPzSfCJx4rJaXQjfsi3WKN7"
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
