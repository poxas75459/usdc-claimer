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
    "4D9JiMHkZV7QCYRQ1YAqgq6e6QingNEiHjHsDUBHyR8N4A8XDKHktP8jYcjWuaCNGUEpvxtyPAmMhPkmX5Q8coYc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xC22tGkfL4D79sZrCwwrTzmspwrNXpnWGdmJx9xX2ZotyyrtYcMbFf8to1g4wjTnCB77Jg3jmnEXpEFj75cMY72",
  "key1": "Eao4hEggkXaXbJtLzrc6GA7b48pFzNWx99EPK7DoGmYQq1RxERcX2eK66CQuU1rzUciwmrmp4PNpmbdq1sk2oKM",
  "key2": "2uXneuiPRaiePkdzusCJXj1cfV8kvKpReV13xoHzbnCwjEJuX1aggCQCEPMnniGB47pqqrQbdttsv4UmiwgJpt2p",
  "key3": "5BjMuoopSjXzbNuVzt6pzgrUc6dopfYuwQBC8wXNVRojFWB74GicTmCMdUxDb7WdkYNKNJW4adnT4kgR3grDjozi",
  "key4": "3j2C1JbiBB1UhuhTR6vPGLbiKAffeRje5zEE6QfNJfKN4Eb5j7pWgd7zcSkio5t3bW6gDP8LvGRdgrCG89jBbBsP",
  "key5": "2y1eUnPzhmQd5vyoSuYS7hpVfZHeZgCkHcrshaQXm74EfBhF5uN4EhjzTQT2D7uUafYBZq1GRFL9wuwfqNszjzfa",
  "key6": "3JuoDP86YHXnBkN2VwDpkAfZr9MXqcLtZRYgNuyCs6hVDBgyZFjudqiVtfGRZ12WywfSSAuNjTXWDP2bgkN2voyo",
  "key7": "4JrTNJmxAWBiFTW3v8WW57GEEUgHAv7oDsTGX2LEv1rASu3FPpuaWMpiYD8BXJwxGn72ra3Z322R5cf6shNTzmNz",
  "key8": "2steh8fNgrqoXVLjhCN2vpWqak1LbCUY5paqTiVS4apEx4LTU8j5GNyAWXmeLs3peKAxP8ya6fEhJSeg8t33sZ33",
  "key9": "31baiQh2MRyau7rqpKU4TAUiMu9s6fDnj4WPkwKydDRfDnwnG6SyLuMgV7596qqGrUNS4JvCyDW41LQHkSb5twoA",
  "key10": "4W6JBU4PHzVztvb18aARbVPnpeKi1RoCHd1wnck86XKB3J4aDBPaQCZxT7eTL1zLMp3VQ7GAR6sYiU3wBCPZJvKN",
  "key11": "2gW7ziaCbzrjR6NHwqurxmpHBsKoaB96rA5cdfJCKwzwkT5shTM262d3ncXszENSk3jqy8qZS1RVCBiJK81kufSd",
  "key12": "ngRNKy3YB4hc27jueoQ2Bv8fztyeV83vynreCvVZdyu8vXbqpPGfCvPBUV236j7uSKeFHaUJoEeKvyb2UsYpVes",
  "key13": "XRoAxutv6SxdfLBEMQ86cqg2TZHVQycbv9cWGCn3YhtYnWJX2v9yeQWP8t7fbEGUbELejFdvCajMS6mF6SxR7vE",
  "key14": "46VFkHDmzSCLAkHnkUzm8GQDj9JDSQQokCCCRW9RwDpdm1gWixTTNcteZ5U3p9Bi8KSn3pcwwhgkk8jNnehQYW2u",
  "key15": "528FxqspXCGX9efhny4B7DmmMmDLh668xjfJdPVLjfAzww5WKYaHWboh296pTKQtMCJjabnFuoAFqr7hGGxQFkAe",
  "key16": "3KutxQYwzzHmgfXQwvnB83gNvEHUybtjqmj7kFNsvWE4Lg3b3sjFiBT5GvwgM14FmfSN3EZMYfPkG6Uz2VVUr94w",
  "key17": "47wSisCoXNcCPGUjKsfHLTcmZpoSDrfkdjh3WNCjh4JFm4tJPNAk4RKPk7mymNc4TnqDMLD4X5UcQ8rU6kMtrnMD",
  "key18": "oCzM3XsGBLt3bRigSaM64diBubkJZDWHAEFsTj5V7vM2XqhrVfMY4vJVgyhPJJLWmVvgKfQ4v2TUhbguHU4hQJD",
  "key19": "5ZNvrDgqmLokbxqBH2ajJ2jF6oMR13dE9MhXie5rZjSGWroUR8VPTVtse5MhJYiTfkhyNT4UQWE7E2PVPpWhWypw",
  "key20": "2aYzt7QYYMAEkit7biPUsxYr6fsHZGEzbLuHvVYQ3tAck3h8UT9xMQhzCzzXxXQgy8VRihFv33mx6d8uEZfUqkW2",
  "key21": "2BRYpV3cPE9D2ehfaj66TwdswxtuKPysShTx9qbLikuRMoLxfJyNMDhcg2V2XSkjRXgX7xbMHiW2H76qpa2Zot7z",
  "key22": "5mvsuDUuLoFAYHNLey4aW3GeBLmrTZtqtNTA31KV7KLTjQQY3GexDJS31PqV3kdFN2hofWQszefb97juTVn55Fpj",
  "key23": "3mv6FWjQZ2aLuKUQ5Ce3p8yVqBpqNH5GcxvSNwFAWpEu4mgCaC5ZRKxygJwJttudfLBP7xQxZQfoiPSLyeEVbrR",
  "key24": "5ojbebEBLXHPLNQsXJc87E97gWSNikcomyBn2gZXt1FGVJ5jy4qKyykZSBxYyMdnA3geKc4rkg9ZYsK2M52tHmhf",
  "key25": "4T56hNnPzbet6KFFU8ppbaBMbAUmDPm6DqLWtruDpeq1F2Fgccn1FwJfqxMs6eN3MhpGAPrEr1sCeUCYoieKoJpM",
  "key26": "3XeZdu55AYHVcfe4Jc9cdNLqmfyERNawzArcQzjyX3CSHaqLPkUbVf3n1GWwz5qG1Niw9poL7qJ3Cr1S1mN94jd4",
  "key27": "rBmhkzco67EsiZ2J7zFJdKFrCLALU5wt6rwZNV2G1iZPtYZ2hz1e8KgNSyQkmQEQKF9Q2XoYfu6QF6977GQ8wrD",
  "key28": "3bWid4HsTHnrkeT4FCK7AJVJnDUGnNcwSN1bRA2cPBd4cMaEvoMf3eTpfobbaWG22R5BbWJ6o9AL8GWuFpR9zaax",
  "key29": "4fwQYRj42gpgbA9mmX8CoxnyVGR1QQ8iiAd3dg3B4Wb1B32HScQJXZ7PE28xey34x6f8tfz9sBytx966z3b887tA",
  "key30": "3CK89esE49cAHCPojJk8wTHTSuQhS9ZwX9ddGu9AL9ANtDMKeYybvAU1G2xXZ6JRQu6QeGymGC9V1R1Kcm5h4LNC",
  "key31": "3ycWkvXnoEgnEWL3WS8m1i1MsjbxUKDA4DDYJSXir9ZDrLMrbhqBsj55GfVN59XcynKTWiTEmUokMmmKpjuLNqQh",
  "key32": "2u9FZ1toL7rb1kjNHZzgfRsue8j4N3ikP5JavARt8ggAztR38EzBdkH7KKdcwkktLeK6zH4Sdn7nkahmYG8PWc2h",
  "key33": "wd2SCUVEYr7jq5jDvF4ef6bjKdxH85cLcSCNrddQJei6W8eFAQ3WQSgMzfcMVwWZxnp9bkhcUXR85PoNfPw6PKW",
  "key34": "cqqNHsSjNTZL9J9cxukUdnAkECR8HemqRUicxrJfULU2HK2qBc74cXckNmpu9ecFHUAbsE8pPUGk2r5XGfWejiw"
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
