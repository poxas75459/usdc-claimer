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
    "KAGxRQuuDqSFhMtbZN5pkKk34qgGG8zGZFdXeUZCcAYGrCHEUWASx9gBbHisPJjBCBDpeGbDjTHt72e4ZQEpm1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "b2W5sf1Dhmi3eYuypNF24tGP2GWrhs6cKLYYysfPpLakwE8fv8VZ7w3cCUAVg2r3XVg2hm5BcuyHzTQwMK4kVLN",
  "key1": "4vXZRrhPhEUMDec43NsQ6yYk1BC734SQCQAtuqCRAc1AGuWT6Gj9UhVmGZmojojTMU3Shyhnr6Q3Dp3m3ZPaDFdq",
  "key2": "4prqLqpeuqrc8j2svHNNvLRFguc9LYtwhKxML1N1pgv3pisS6SXGJokrdRy6UkSj64CmKDs9wouNW7vAxYPwAk5s",
  "key3": "yespBTFTXtz2oz19AkMgb3BLnmn9meTnSmaYGPNXfzSBPdtmMQ9TioLq2yCTeBRZcPGgq2zTEoQ44XhDUnz7NRK",
  "key4": "4qesK5EmV3GbLeVmyX4bQ99zhBaM8GiR5TVoUDnbMkVtUaD9ZHRSUngiqt2wZPKyjf5poKXvod5iCzVXgeAhqRzu",
  "key5": "3BMHvuzDqYxUyVvoN2cYK8FGWtp8yyPWrpxXRbDC9bHsWr2YV1w6CXkFv6CYDwW6whzZCDD11VFp3kfrWqisH1CG",
  "key6": "39Rbp2x5cu813USw2MqDAuuQJq1TKxxkQReHkUgYdWL6Deked5qAFVRy8ZuLaJj5F9RvTBBuz3noPjAss82r6gko",
  "key7": "67g8USfcjgU2KUiXcmXSo6iA7vJ33HHHefae6FF7GcqbLMWu9wT48WVacsc6saKPej79sp7PrBCHGEDJVcdwbvQL",
  "key8": "67V4ss1LuXoVgpr2HViKw75xPreniaCR6KRemgG1z1YKeFU7cMj62GRkuVvSu3dqR3V6tPX4qhn7YFA592fQU8Xh",
  "key9": "2qzTWAvrmusGHpAhhtnbgR5ux8RzLp22MrpaE9dHmHKMAqEcsvEDZ6JXuJRd2NStdLD94qybqj2nAeDiULpdnvFz",
  "key10": "679T9aXDHHboW6uEbvoSC2Qp6AsXJSdt9M145Zw37Lz7FaKwqJGPZPCt4XNQzXSLS3b3HtnsNQXUMeQTofdnL6Ak",
  "key11": "5rA15UkDxthpuxd6dhXctve6diqBuimSka6fYkKAHMWAov9kirkfi6Yeyon1ZRUyfgnTfkiW7VMENRL5HnwPPQqF",
  "key12": "XFFDeJi32P9ockYvrVE33YVcjpjGGB4LZZSZY6CwdxzchPNMERJW2Pyv6D7K7GLXFTK376MTwrKLnaTvD1MB6qC",
  "key13": "3RH5UPKVf6CuuQQ45BW2XbKiUqKyduEBP9rowmEc2JAmVifqsFE5SNjbBNHMZ4uVCwU5f1xMaQMLVHJXcyJJ2CSv",
  "key14": "5tMipDrHcz3Msr3w41zbjGtNfYUiu4hDwTRP5WksuM7cCL5kLJkFMXzwdYVNktdVuYp1UZHfWPmznA3vJqW98Tk7",
  "key15": "2uB9Xcz2mFJwoziVKeBbPtEbzkPFyzohmhc3pbKb7dwuvxvvJu3vVBJR5SHusJoKLKhVqGjDbGzzu1xVj5NCAmKs",
  "key16": "5RuqY4pnM6ZMZXhbqekQC53P8UmomwJKC2FDm5VdByAigrN4TMwCXWmsBh3KWBppnR9yxURNcAp7J7Qyt7fFWKWj",
  "key17": "5uk54zN3J8fYGcXRNVBfRZmq1fQEtcrGgAxkgoMnTWELKE3MMdPLWb4PzUsKzx4ipoiTCwZ1Hxc4wXuTcEpxM9CY",
  "key18": "5uNPsSjd9gSAptkAFJj22dzsuDWVToQ2GSDxpW1mb9Jj6Q4AkjqoVb642wRWSfzeTYLYokfiiXo4VpGxU98jzzvt",
  "key19": "5QFd2qfCLW1Bkt76nRtL6vyVQf4aQs58cnFVtg33VMhiZAypV6WnD6HPL4jnatdeGWodG4Gu8ZyRiaFcTm44xFCb",
  "key20": "2BWhVxSdtuVfi49T5E1dLzfvVeCPgh4iJMySnbJpEakUkk4u3wyRXkNQ4MhkWeBMMfGruaVJ8kj4ZTSdAb6xJTRG",
  "key21": "2AzU8khZCm7Hd94bj7zgyUR8Smt3LjfejUpNH45CP7ZdHsHwvUnrD33WQdTvh8V2cBj1qJepKKXuapHK8ZSXvhBf",
  "key22": "29mBsRCD7dPmMFwqW4yWcGG69wKFiT1XA2sBMdkEbW2Y3PzqvS3v7p61XwcyY7unSqumJbDupkHNedvdijUPMmuK",
  "key23": "3eyB6oDhAsjUfm9dr33iCM9eSof63JEbyxPBGXJxr74kdbDvjc4eYtxtfkXiZbdwLZKAKe7rJTpJqTBbHjqELHBW",
  "key24": "4KVWxDj69AVTB7ci3DrQKUXGwEPcEETkiTHJLNYMHpAhzFp8Vi9JADkB9ExaxgcRt9nFBLhtUp4jZdKieeib4PP3",
  "key25": "37HUcyP9qEFUqPacfKbHwR46LuPAD7fAWgtzQYYa2adJKhw29YsFhopgqSHjfyRnKvfYG9R6N6Ub7AVCgBbyGror",
  "key26": "2K92TUvoKy49XUvZWsAjgLq7erZnWWdBGGHPeuGyWdbeti74u332bfvo5HoxxFDRgwFSE6m8LeLWy6Ns4Mvjt9aj",
  "key27": "2TnHC5zYAA5NdG4aamMrR8ePyS4kmFHw7emkf92R6kDPNqsoNDP4boa3L45YpCG2PYfYsDG6biauMDXJSLfQmX5X",
  "key28": "67n6U8FwS1m7BK9nJBbjqbPup98fnjbnhbwRrUscgkMq9pEvEmDGnRTZ32KXNDdk9W7iHyjnQdazTQNRUwVEmU6e",
  "key29": "2dbWFHEzhhbao1Hz49RzhMhsgR7hNjhkzvMp4BiGpWMjyhtSpqWLk2e4BpHiFFdwE6GN7XJMAS7FEHeFMkuN3xgL",
  "key30": "5dvtYMk7aZYAKRAVkayRXMULd3MQDajvt2NAF5PJok231CgFz3WsoBGqUhfNvmvUpNb6zTXCeGMiJraBSnq5BjSt",
  "key31": "8RpbnnnxbJau6hPYDJyinsoJgFwqZavKBRg9Cx5FZYL4eSeyUfHK4MYn3BbaGr5x9fTJAxUHppF77c2q7WLf4G5",
  "key32": "2iNtSr727iBLkDL34AYMpkSPveRpUubb5EEjsNEB88FZEnZREwnEopt4Ue9icd8YiGoxU1Xa172kqQJmxdgPbSKc",
  "key33": "5Y59aD574SN2n43eVfREAKvNvAP3S79a2j3zdK7MioU8Uqx3JBg1LDNnWyHgBoSmQ2gTd5C6wpXMZLp4TRWRj9yp",
  "key34": "4Vq3x4mwG5mfZidK2WgkaBrnA2UXZPoXjaDxb94E6xnuc4kpeEpnYYwch2g2mbEqiJTB7i2xyqQCofVoEVrSR2BT",
  "key35": "4Ch1YWEjudHMUuu2uZPkMhCSRjzfWwwcGiinTxQh3V23gPc3eU1jULbNLLtajWuRNZXs2e9UsQ2kDEn4ScxANjYh",
  "key36": "5bAgwcTb8atomoTxZcWq1CgfqDUxyyokpb5Mcm4J5QjAFcvCHZ4tb9LmK71pWEJC9As8KHuqXWgNkbKeEei2KcD1",
  "key37": "2bEDJGU7EuD6DtCDpiErpu6CrouEL9YSLAVqs7Lhv8chSrPiY88EKYMvwXuZCTs4xKugWx4exwuWdAm5zuq2J77W",
  "key38": "4mUdtSe9wngKcYBF2QnTVzK4MrmPJEAv3bvu8y79hZxgJpxgnLkQTCvf29Xmmw9j2qPvyoPXRgWDR1axGNW6Q8Fe",
  "key39": "3rms4uwMpXnVGiREnsobKF3UGzg3AS6g3wrDoSec7VBAp8jHBMu8PZYQ5sTiP3pH3Y8xfBRsv3pTFUDoMCYJNGw9",
  "key40": "62dCqBDQVD5dskThjBLWTzixrHaQSg7Ahn6E8WUnEzGdvB8UdkTtHqVUFmPRvH4FSWXcbF9VCkUpK3AGZfjfoZwS",
  "key41": "4RzGJ2esWwyRrbpek9yjdNHzY5SRHgwfZwwc5RScpp9NZLMsT5qrozta7ibemgQxS1Rgwx6tpwmj9Ze3P6v67hyP",
  "key42": "4EidcxDbHW6hkJPZxThxXbiLyHUFprYALquYnaZYqGvzcVxrPEFaQmfJBHZ7ULJ5Zj6vW3iKupWE7qn7amtKpUp3",
  "key43": "2nHqK8C94pTAa8uPXfJvr2aB7ZZSCDwyDSoTVFDpuoC1Hd9Nv2iDfoiTqemLErrwDqfYftCYTRKsioHyTEug86Lm",
  "key44": "2cDzEHNrA3S5oc5h3CxiX7BU3EV71RtpJwQumTZfSKGR5Mebt8nmxUzLsWft2ntG4UZqXCzAxfQH4MoyFDwd1S4x",
  "key45": "2qqDxefJvp4qHQ1t1TpLsvMnmTEKoqjth3cUQq98Zc3VUtnotJcMNaKjnaFiihyHEZ88rPR5EyxWsonrMVojSstN",
  "key46": "5LKBp3AqofckNUUgPu7mWUPTCx4bZTnRiLMuWVd6NJz3VCoXL6vhYZer5pvVmKdyCFmwagxQLfkPq8EhjiRbE3Q"
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
