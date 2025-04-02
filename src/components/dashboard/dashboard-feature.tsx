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
    "QaJH5peHG34DLBXHZYgZvgagX3d1f4CbTC8WwGSWpfirSthh6JwLxRqUC9ktJAxqghXRWJ5W2yELUEaoB7dZbeB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nQr68YWhitNTb7EGQV4HGfCvokPX1ZQrkojBquKDwesSAcmhVXMj659UEsbvTZb4CFQY3YqpjRm6g1eP7EDihAF",
  "key1": "4DND4s9DjbegPEqq554aQRUHojVkm2Qtnj5ooWZ9ztRbYGX3jvYNBzgji38kLUuYekF6F7UzUTavf6ZK5HBgsqUm",
  "key2": "5oPNPByeoGAS8QGxxzhDnZpvqeNwUs4SZfTjyQee6Nm6UM95ryRbE2dSjqrjXJBUq11XGyFDat4Ryj1chzLSeJQj",
  "key3": "5N9HUqB8nJ7U2ocN6366emcLPbL9AYsv8S74whvR8ny7uadSi3JabX9NiDhmJvLDrxSZTv14QHujzxjpgcPLy4HW",
  "key4": "4Ji6P1wyLozcXLwYGK35ZDitghn9UqZTQGg4XEf71uAKNZLumZ9nh1AAp26qd3edPcjutDXKZTBVXna3RonsBCNV",
  "key5": "4DkBXGxvdNAhSMg8QL8xAJbkzsVmK5hXJYXhr4jHBXQfoLbM3HoK5Cg8kc6eKGdXrzy8iJ28iNADA92j4GCacCDg",
  "key6": "5YKkwFvhc6GaTJ5NtkrS4EkN1RzBZzw9QcnK9FtrUwcm7E3Atew26U4hWjqHdyTzTtJYi4EyXWCZjVDtSRFPvh54",
  "key7": "2Ey57JM4VUAAHHiLGSM7pnW5iqiK24dq4tkf4eJ7pNujjdYYSAwcKRF8L34dsWT7Xy6DihPkQ937pXYYgUafyDV6",
  "key8": "4eHvWCcVx8kyek9i5DTRdWNavkQcnx6G7tYPywRxy3HfQa612bQDksWrEPR87D2YH6r86Wmu3DxbNeHMVSjS98wi",
  "key9": "2EY492PymMfdK8GK8tUs1dr8abTEpBTq4G7yM6RhntM5J3yS6M8HDr7dKiGDv2YJDRHzvDF6goY18Tj7Z2uRyue8",
  "key10": "cZDE8oo9gvSZEK6M4LsjtRbHYiEu59KoeLL9KhyCChw6iPovqR3JKoqLJJfJS56pNceJFumjZMS29iHzyZJaYwm",
  "key11": "286aEHhr5EP2Cqv2Cv7iZAEa9hC4FSvDSnGD1nWAWAwFTnXvhsjWJavsV1rjz23XqnziQzviGeLopZgeorpLCCyz",
  "key12": "4Q8TAowTEyfuJxWhHenDt2t4z3UaWWnDFiLjPZ5aaznWKtfjdxEcc3yFMEG6sJcaMG2Gdo9FM7KWx5FyNbSuHqpa",
  "key13": "64FyzaRSxs1V5hNdcCMjpnXWYmLwyKVqximrkevKLcHrvVkSt93cmY1JH2Amv67ev7PUgYivBAXwYuEcuAuYHFtG",
  "key14": "3YFpijvHspEAg5uZdDxfn1FAKjhKudiaJLbjXAGoSSnzBj4mRESwZPPrTMdvWiqyUrpLTzcmCwCsmJ7PwMadHJpQ",
  "key15": "FjwfpKQ1TTPfBxhioTgqMJyjxzE4AknxDer2izA1TjeFCxSw5qqvEn14Z6FmNNif5K9Ym7pmZK9pRwi4613Z1qH",
  "key16": "3kxtnrHR2b3AVEFpvCSanpaEDBiQB1SFaKX7rUwoApfme8bZ4YqjkP3K8529bpfWD4rpzAyD5UTtMwiTunbZWbNb",
  "key17": "4i6jfvzdQRASjBZx351ix3HUZwVdo2hRLvLDrNrsf8Vvcy78qd4EA7VRHtxL4FDoDi5wpJLwGdZMVqDiwQq5VgmY",
  "key18": "2JDS9mTAAEEviNCQFCzvJ2TbnGVAH13bAn8TMt3NRGHXHGi5TMNj2dKX21VYPduP4wLpoNnW1sQbZiZTa1ire8Va",
  "key19": "38g5NxFMdnsd2hfqQb6DB6EjkTUYGYYBjRjV6de4y65mL96dFHKLYnm6F7nqcbsNZR5inAYUqyMJvjNYvRZwssVr",
  "key20": "5Vy2363Wvot8ohGouXtKJhw9oyJQrpRAT19LWzAZ9Aa8pn1jk4eCSfMZukqMSscn8fStScqZ2R1GvNqtbYZWyfWT",
  "key21": "5DPYT3pZq5Y2Pn8eH6JbLWWJY3CwMVo2chDsB9a29ejhWsmqFhTnWLvbkS3rY6g416iXBaCjj4AvoduMJre3HsyZ",
  "key22": "h1P8pdq9PXM4FDx2uVYdGTKUvyTqLBPkaYRttj4YxxpsR8aXEPS54mvFxnyy2zuh41Scohnu7x6ZgzP8QwELqPK",
  "key23": "58nx14bUnSFcBo4WaJ34WTxQ4GK7B7Udz2b9FJLTuuMWX9PiVexw4GyGHM9vrDU214NNRaLUbAog5ybkH1QG5cyn",
  "key24": "3hXoEYBRaDsUcG4FZ7LeRiRioxNsY6Kj76obnG4TQqNa8egHypx2sqMZQ8ZDzwj2ap37yR565kvL1ysLgkrjcsx9",
  "key25": "2oh4NpRXyGNdD93q6n6ZjdS2yjRj8eHYVA2sazu2J4pr5FScDPSpChof9F8RZazrepE9gDg45CuqW5aJDeJcw55R",
  "key26": "22hmG7tWZbiQai13d6z9VH9bhhVfyjahyxHsqmgRrmEREC1MWHPSgJaNaWbmv3VZuNbq15KGaJyoQ5HK4qgPmhM8",
  "key27": "4M5NP8XCGuWszgLqi8iPBsi2h7MvBp2h8pu8FUQ85CY1vdJPM2VeX8crvNF1kTL74Qi9s7Yi235jmZYcU1krbNjj",
  "key28": "2LzXsTraVH5qp17GgNhYFjCmuRpszCB44rt2CucRGue4BgQiempV1TRnS5pERLysAVYzxV32ULSNvjtTsk3TbPT",
  "key29": "3TrnCvoTZiaVBuLBNsqqhFJY1iU4RjeA6q1fiBjwVYf1RtLtnM24WeNTzsctmZYu19NxQRSM1GemJranQgR4Vc7a",
  "key30": "42apimWUtjYsdQngXbytgFDeMzJAXfXdhzmqWeSUrLP2RyXNQz63CJPtJJeFhP1XHipmYx39Y6pyFMsDDThnFSdz",
  "key31": "dH5oUN2DQrcQfruyZecsYd2KYSZb26UeZ9LxZPHQ2fc2QjMpotVQegUD5QDhqysj7VozbtXCTFiWoDiGxSL7JPz",
  "key32": "9kLLCKu4Tdn18dneCErqiouanvoLqcvPoUyJ7KsseLyWnUQpiBjmihf7zvxcySJU7VJ4rWYnvBfe5QwGnEgSRJE",
  "key33": "Vwt4aTGwSYCTWQErtpPPGviGU6X1vXkZpCTuCNABpNSGXwTMBGanbKFHb6C2kxrkzK1VcPKNsjmVxbpt35yVzcT",
  "key34": "3S8XKmn2rxRkKf3CxRDSxc1HkRepbSDobkPxwTE4UxKHwAfLBnLj3ByF2vyqnyjZNsn3kCABxW9FkUVkc5QdHbnv",
  "key35": "3TpSDP2iDP3vACQgG9BKn2iQm8SzP5R5EiQaB3nTzSPHnfy3dZwNDQkmm2ERdaC28NgYwWXiV4X2y9Sfi5Kmy7Ng",
  "key36": "YkxTQ9E9EY5ZSPfS7g3gH3Chq7yT3ouoPT7Bh2zgYeLWAeVVRWnsE9S7gy6U3zXd5eiygWiHVZ9yA6Qf5XReNv7",
  "key37": "528xKTB6BNRWae14snv6iWR5YtuNxkbXNCr9igjsy7d7dts7hS4NgsaVSzeZTmcVqd5e4Z4cZUhWhLQedYdRvvtm",
  "key38": "TunzSg55icbRwYd21jV4o4LwnkHcjCEBuHbUzTg15ghfnnogwnZdY74ayrDzZxnun2Yw8L9RgRa3VsrLALpNZWE",
  "key39": "2zygu8SiYVUrkNMEhD5NjiXuVkZBsNAkstHbTw1BM9KwyUyzrLKdvDJD5grYwxA8FMKagMWgnitqJSkEua2PmBY4",
  "key40": "4EuaQSvUxxLoZnFDv1YP5veTehHcAe8XUrfdwaGPgzY7THyURB5oUyNZ1PZXxGtQFV6xY9FC32kacfyTNbBW19eL",
  "key41": "2F2qAw2uDkXWKz5SPS12BBjQDnvcCKjifBi9HXhwwRTL11YAG6GUxjMKA1jQKKKjsEqTXLYjQEvjQ5BMttuw8QcW",
  "key42": "2rF942mvcJWmvG72GkZt37bfZwJDhsjVWGxqG3FMvcvPkDXsbmqSx6WR5QjtBAwnwpEa6e8L6PocPUj1YHouoTmU",
  "key43": "34RXTTM94nqhULx47hggc7tRrgsJAe2yaShsjUkmwd5Dui6WbKJGpBqgqNbF77Fnwdh3CxPzE2WvJtfXvy47ZQpZ",
  "key44": "5x5nWdQitrdue3RTX8krvUCKQA7oYHphhCJXiGYK27F5Vjd8WfyB4G7ZzkxDpHdXPadWfUQ4QPtcZosKNzHZBLJr",
  "key45": "4SNwuQdG851vpo2E74HgSUAeZwHq5jQVJfcXjTBMJ3u49S7CwQRnYRuvqumEVFUv8MuovWDKBnrEeaLEg837iYwu",
  "key46": "21AxjbkNPpivnbXy7VYyeqBk4CS96VnWbLzUNLJB2UAeCWgp3Y73WsqCv6BDdGPBUyYf1NhcrcCfHFS5qQDV3UtG",
  "key47": "52sfWFfkdW16gPXbBL19J54AJN1FYws5A4CzBUjksn3qxtVotkq8nYSuDYeSW3V85imjZzv9ZAtxo1nasMhCWcNF",
  "key48": "275Sr32JxxcYy3rkhGYQFdqTxoB3NBSwo6NuQjyVzcvqouMvm5kA8WkxSaT3gTbPSknDp5NZcUogzsT7rcPMmxx6",
  "key49": "4bjoFrGQ5YnpNe5b2NqxsLsf5UjRCQX1iL2EXhLTRCvKquGpemghvhyqykqpXjnZJvT2cjNY66NZ5QU8xVEK9ZFH"
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
