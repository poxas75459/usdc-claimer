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
    "3JUaGRFQZQu8bBTLn588ynr3Gvvq5DuDSY8bc9W5bWRQ9WyZrh9B3kLrKJCGzokew2kWxDz1qj9JAyJVDQSfkdaN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K2euxq9QJ2jEyWR4bsrDDyVBUzHMN2owBRs3QTQL9ZurRpJWctxfXdn8CFq3vxFTwJCZ7jviRZ55QzZ8zVoZ4KJ",
  "key1": "JuJcGJFFCSUWsiuV1odfpiokWB7RVMw6T9rWiJK92Y7tRV91fA8m75dpHytLTQiExCwZ6fVRuuTGnNHXRogNUrX",
  "key2": "5a8qHtRnzuhYo62BvEC8SEkTVVEpsy9LJV2K52qWJ5LGoeHz24hZBR3CcKxaJdGjKwGPVH3iFbTAKaRg9gm5zHQT",
  "key3": "3RxfngjhhaLFaJZg5u9cgdgM7iwMCQeqJ2dBqTDc5bv2xSkVCYmLEVPfi8Jq9WZB1eMk9fMUUN3YHEios7Zp2teq",
  "key4": "36kQTf7n2gc7YoJkneoaNCP4eCWa3YhJZWqucVSHq5aHN9Mpur8SZmWrc8yDcCK4Nriyaa1GCGbDrEuf1ZMPtArV",
  "key5": "5PrfKoaDpRHpze3e67kbRE3Ba8Lw5vYeUPNxFLNAusAx7jZ8iczVf8yjWidK3J2mCxw97g5YSoMf8X7JeBWhqTWT",
  "key6": "3hdv5xPYRM2g9peLFXLtvLtGBxkFbUgRQsB7pNv5qc6m5y1h31Gw5zgTNMVc5vqxHqbHVN6hayvZEZoZ5D7Ewirs",
  "key7": "2k4uh6AwSw6hrBS3vHCEV2REi1nawyD7dBs89pegaSZ62ieZPEufP1DojnwUn5bpzrCcHXQGruS88A615R8CFw67",
  "key8": "4yzW1gLAS7tQEcCCd6hZM3nhcEMNWqRLfwfzJ6cSiWoknBBZDdnd8gq2XTJoBTeEyM5mqN6LBxH3GxWX3ABurjFb",
  "key9": "4kYRfoT254QkySuaDGeGgRoyP7Rqvd9bdQCjGEPxMcrMZKvmQEFeW7DHws4rM6miN7bD57JDk9vXTjn1ds7ebpBW",
  "key10": "23WZyvQyU12XgKtpz431vpbGYF7WrzVXJAX39wfw9y46q42dYBaHbXkNU2mLNRRkGXfWky7JzBgvfrn2L6Bpfn6y",
  "key11": "3ACxfD1d9MGtWbvguHqxiUtd2rnA9wPyNxxWzfbkbDSzb1uhMvXX4bM2vHWNnMTuTy9sjw4xs3bMvPDoA3eBFZiz",
  "key12": "2bJ1FExTPyx5gYcXg4wD9DWWAjF2Dmv7wdyT3a1MryucEeYJ3w5MDJZLj5mYnSvEjdfduGAv9oqwwm7iFcVBeFT8",
  "key13": "2eiDMBmGiZ9CQ82Yo3P4iRTusKzDixejs8qKDgVFnVVA1toNgnbaQh2GDbo6ne5iggwR9Pu8Pvm6r9u9HxZmnoka",
  "key14": "3B5BEv6QKY6eUrG2C15UpNcKjaCXwWgCgRWnuq3qye82KXDTsHPZJvaTE7ievEV6ENd9JwGEt2Y5hf5Jufh4StFX",
  "key15": "2C813ohQaEokK2ULiq8C97Y5hJ5WkA5EqffNJjeMHW2AXKdvHLiUecu87YEp5iBNuncHVwWFZQEHpvYkAFZAvnd9",
  "key16": "rJ6eNHEEAbVn4putBycHpqyW3ZfheAGivuWiJuJtveBCELCsfZhN2whcEoXDpSiMuNcPZJwMWR4VzFZF8ZB13dw",
  "key17": "bAF5MVmyuq6akoNron6u3DhAKbYJEnzF3oEiVuNPHh3MtzF7VzhphREJtu1yKzTiQfdvyciztSs1bspT7pqg8ck",
  "key18": "5CdtZvP4SS5qqUambVzfvdLT1q7fJzCdF9vg5YUVxD4FiVTCNGBsXhqkJxxXME1EB1MG5HkC6712UkDW7gCXnqFR",
  "key19": "3ChMF5ZyEaQQ96ebQXmnyz6T4cEnNBCcgJTmagyRp3arY8sPQ7PnSF8HtiXcixbvXEihRiDWhNu9Up7idFYfAef1",
  "key20": "4t8rpK3j9T11cfBUCEW2Hr8tp2WQPpnxgEh6N92XpGezcYz7ZAQECkGe6T2GdmNxQohfmMLxzdMBHUsxNWVMsoH5",
  "key21": "4VMwPRCQR1bhoSivGQMw6LhsvHAZLkXZGysopNLkfA5AphPHgursYZDEHsMUhEgRM6uzdmqE21HgLekQs2MD2nnH",
  "key22": "3E8aV84QvLrTRCFhqkUFLFnAk2B6pYgt6SnEMkmzUpfkEFgzBEZ84Gv9MZqszoxZZ66mE3kgZjadnZp6YCJSs3G5",
  "key23": "4hmdC7TXB2X6qLQvduJEc3KVhSVEaFMjpDTgP85SFVr17cGwmr7spbpgnCwGJQHkeyg1LFdBKNWfxLWjMmci16Kd",
  "key24": "3xeHNuMqQTn1sNnRiGq7oenv26JVm18cAer5xSFnkLJWRJuorqdkMV2zvTU1s3bwK6pVxQJAMFSjMGWHjhTSrPFV",
  "key25": "26SUco6foaa26yKnnftz2BJvXGLo5hrmQejyLPPanmBkW9mUwNSTzX7Nk8GuQHLRf8MacmR6rsjpUc5vwRdCyE4K",
  "key26": "5SdZK1H62LbvAiVhgheRBp7RJWoxFfuG8zyeheuvfUxHP5zxWpzvHobk4nsvgW9o65h6Dy2BQRRmUWNzf3HbbUXn",
  "key27": "5CCnzKYTC4Jd6grcZnELpSf3AwaFA3BxpNtUqNtiPyDcWDGQcAmw3C3B36Qy4XbiLgaHZuFK7BgECM4GRcaRgLyC",
  "key28": "3G2k1n1k5ykvhMrh9GJFvvRTqLeMnzLTuzAaDxRfToY3fSZ8uynyFMfLtcxLhbo9ZUPv5aTJpLwXqZK1SgS4yBec",
  "key29": "3i77pBoYQHFucpqQZdeyfjaB71LrpwQDD3dhM7vcHrTNJif6sGE55xzYfSWZTPQSi3vzkuVTandY5cjjRTW4SnxR",
  "key30": "Kp468KRKkdNvvFKsVRaNd9F4SiUKfqTS7suhq4m4wNsrc5FNLDMZXzSWwjuYxvwmeXQYCCrYVzpkXQEcwzi93TM",
  "key31": "64RmyQ69onYxG5SAW3AbDRvXV9jfehxQ7UNKwgP1UcWfNreZm4zEvEFdTguTCHPM9Z6VxLN5TxeiDDWsDnprKMvU",
  "key32": "5KvzpvHBKPFge3kGSQLeSwD73iTCqB84pLP1GqZRY5f6fxV3MKHowuFa8fdKumDJgosDoG2WYKsQctyjebz9rY3y",
  "key33": "82bgyqZo3EpWzUAJ99Xba48Uzt8t5uB3tEgvdWdgmhscdvBEdx5jYvC8Ptk4scX2NwgVALNEp3EV9fkYnuVXsFh",
  "key34": "2hpLhs24jHdztTmHX1VUBcDfScJBnezBPFRsBpPB2RwkW8tzmvdaiNEXqgf8ZZ6qVsNuDpnSaSp5LokUDWofZtFX",
  "key35": "423D4YGc9PPG1pQaktAPcngGDtdMx2sihtZ4ALGiTJSeMZYGLMEjfUTVK5iMpf7oK9RY7Za2Q1JS2ZUQcMxRUokH",
  "key36": "3pTvW98k2E14gRNog9LRmqTpBMXkFCwfqxUcDYGPNfbUaWQvfmK4y2dAbAZ6LzR1mMCxrw8wwoNRmmVC9vuBEs3J",
  "key37": "32pc2t2gMBWLsKHgLCkYkFFwdMJsBnh8ZZPcfeGesZrR8eCQbJxg6FvcDYEZA2LCL1vJ3uPQ1gWMmz24zpbutmjF",
  "key38": "afa49vnR71bQMPTntvqCc84bxM6GRzRmVotNTzQn3yVVAbjQL25qPkDWFVF99UDPTWZgDZC3KAKp9HXfEV3gEdc",
  "key39": "3Hr8sqnTvvxAoT9WQsvwXQ9r7ebFQxTCfbBCQGuG1N5yhnHLLPXnvtjuyLp4E7K5GYF6wtSgVDRr8Mnfx5Lm2xXt",
  "key40": "6HJY2uK2BaUAArnwhfvsaUGF3xjQ3B9Yy2z6TAcpGR3B6Qbjx5chmnwacVMG5sQkmzsFuXebvp9KSGmhoihFzxx",
  "key41": "2vZjfkwuX6fEGvfzVCewuo22CFs2wYC1skLDZqevgu91aYWavm5cyhs3SnoNCWqYFCwf9GXFvL9tDnVWrvMKR6tx",
  "key42": "Wm3dDaWB75edRF3o8RmGqUP28GGxSESVYoCv9WBAjYYXLHqYxTSnuBPcyVvdXcMTyGEXKn5JGS9jXDkzpWSJcjU",
  "key43": "3KXTAc6jgbEbncqgHTgqSRFPnq9Jkpmwka5EAA1P8yD4BFwLFne71u2q2GafYfMVmETTBW89mDcS6NnPsPhHHNrb"
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
