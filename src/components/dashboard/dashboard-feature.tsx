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
    "3fpRWqN3U6EnTPqmWAPdmzjXjz6TzvsyVBPbcTg6Q9FfRnwdDFy6c9VhJZ1dANzEkuuCkyDBkr461gV4eFXJfX66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Hzuyo1Pzy8FSD8U1WrU84hSVokevvTxfaCB41qGgGwWY9Y1McQuEQrfnGwm4E5EfpTfE6vzq6GEKe1aQWm6Jy",
  "key1": "JPWzjNsy6991KUDXw5erijwL6emdZ85bLbx2ELcT6PP7eU1kD4rVyHkG1NT4pLmyDDvsqYB4AGcmjqnLJWRVSoS",
  "key2": "AhK6BXggZgywL6tZcDJuhKPHiYLjgLt6GHmnY3QBZYgQDUg7rt85o8eT7Dv67BYPpqMqAa2oRu2DdP28DB4B1SC",
  "key3": "2STVftnyRpL9PVTRCGPoxgzEeZGTth2wMLAxxFMsKjFK45NRTguGZE1XkDMtox69pkTPNLtyZQmReQftkTfReKfL",
  "key4": "7HYY6gAMBmGNNWw2JGwFzcbYiLWQ8M71XpyACiX5dKbYQH2KW8qeJMtYGDgF75vD1dkrZCvFXC9vugiwPuZw9kB",
  "key5": "4AocPfVDDGqHotZuNn1hWsHx8J71WmhZg6EswUjfMbAky2Yz6uCxT2bEAGqf6YHcbGwuVMkNhAN3siLvxMGKKPSZ",
  "key6": "4A9E3ZSTiYJddjGW1dDxk2zA6XjyZSDvDBoqXv8mE82xCFmf4hdiLrWiDecnzrxxGPiuNVfMj9THe8qJzFG2Jfkb",
  "key7": "5jBnLr4okx8GgQ4KB7YBHDVhbU5G5kKNaPAC52RA9nKzFam4EAFqUwmn5hYHVpPdXuFXp2ABNcLFxvKW21dKiC3o",
  "key8": "3sUb2TLiFLzWz5jHoSxaeKGTTsdsce7aHuQnKnggL4nGoVg8oB7xnQdzGALrP9PioCwCdcdfUvj2hcVS8Pn8cxNE",
  "key9": "3T9Z2gxLqTRf5HDLx8UR5a8qJYh799sAcrDEuj7uF63KFjKLPc5RSZ4aerjGwZSHVMA2YupaScyaLDQ8rsYmRrRt",
  "key10": "5aNEVTSPU8wNrK37mJ74YvA1cE3pUiuiSyAcRevVadpmiSgJHDgCNtVojLBNHo5w7LmesK8uZShE47EyQPa46Fkf",
  "key11": "4sPFUzJHfcnHhK5tU6Vx8YXwo8WJe8LSni5miTLmhZBQTfdRWZ5EmUaTrLbHB5QswsRQFr3AbFWYfjPvfavbJsrW",
  "key12": "mq7T68Z8e15zYsxZTAcTmhNYa6sPXLQ2CekbqvrCAGjJKT9W7xYaW2XmuMdAg5YUE2JGifE7i3AyzyL4crBySN4",
  "key13": "Rie2eVwKWRVrAhAhXBP2M45HJnuEwhs3pzk6ZUdhmnM3RkZco5GXDcRTkshzW5bKHwVJwPFdKZWp5Ef36yicGVC",
  "key14": "2U5RHrc1KSPB8fdJ5msxyM4bjNe1aZnmS6JxnYsSAFFSir7he4R8CKsJxDVmu2XERFJkfV1MJbQT938EsfXJgnbh",
  "key15": "qPeepQC8ML8JbzfHEwao7iDTEs8ku4rGDLRSVqb6mbGgB3EC1bvUKZg1oh6WXzPfNgtoLkAixqrgTUCMTHnJGFH",
  "key16": "4SCCoEuvNFN7wyTC5GRATZPbQtoz4Rsgb7EVutDVburhqttdSe6zvWwcZBjYmoYiXXW75NWqddZ9xMsLxRcSHvrZ",
  "key17": "qkgEewSN6dPoztPj4TAV63n9BiVnX61sSowvbcdnBBurtGPE5AuCt1GTyBj8p8NocaZrNmUngRmqfakREvEyN8i",
  "key18": "3NJWDFBKw9cdAA1v266s7jS8fC9bKN3qRq4W49aGwJQmzCKRPn42DEdeE1pAZ53beUANkpVLdg1sNMwSFyyLiid4",
  "key19": "52cU9WJzcwxTn92Foufv3Ju3YNFhtwjF7zPoHX9DxiJJGLgKUiGQN5U19u1aiKFdDhSwHt2mPUbAGArJeao92j5g",
  "key20": "5tw9ynvBeC841iM9SL93ewXzndy4S6LLzF7CWwuXqs26RiXaPzmJNCBir2tij4oCqEDd1NPVNE1GPtTcvvppsKwf",
  "key21": "2dVxhZLJ5V1uuwDQkuoPEWbB2iAK38rkJZkeR6QX1PJmDrUnQ4seN8PD8hdN7XTLtj7xqtJeCqQEwq9VRc2QThFp",
  "key22": "57PJG1rzTmF8YSYzyHYG2rETp26KtzT1o8PqGsMXEYGUfixAfd5B547mX6VoJu3fvUdfrK13QYngZx6DKC4XoW63",
  "key23": "qbi9JJf7YhBKiYBYt1LisL83uzDe1PfQD31m78Ft5gyGjfx6GAqtLTb1YKdJNi4Bz8rhNPEbUoggd9oupNxch5k",
  "key24": "2VFzLh7VJfb1DDEyCEwPjkysqmbTrNzqkRDTz2JPkWorb4ogaz8eE3aEbQgugNZHyUqEdM4HebQHZcDDtJY3XH15",
  "key25": "3w5HieYrNHMYwVyonf2kBnN9axq3X6FjCBKe3ghnnLibcvtedrAGjt3xuFdJzWWjAPH5v6aLxnLGUxNJXrzmi3aE",
  "key26": "pZWxk47rnFFJVrYKWzAWZTDMj8wJsNHrADGhjmn8B68Zmb8rdNtaU8xcLgZwXVm8mF44kLotYH15UYxsz94VFzy",
  "key27": "3kDXVNpteWcDGoTLHfh2ZJnCTzyq1X1rkxx5smL9zRE6M7yTS5DaJPJwSwucsfck2HFaPs4rqqwDkYMeVnSXQZ1D",
  "key28": "2oW35EyrPzDKqDt5GjMGPJormWB2k8AHHpkviozR3GfYVXEq6XQuuFeZyhSh5aENt4pEoTL1BCytpm8x9u1qc1Yt",
  "key29": "31MpcD6TeYp8Xx5WwTT6nsCAHcCHSagVUsL9wESpgWRYxVx5hyqacsny6j5nLGsJaNpWrGT7MWwdh3eaMFyhJAUM",
  "key30": "5XEreg2hAcaGLZHBtTFECgW1SxkRQ9fo8mBFXeNRmAMb4v1jPuYphi22pQWRAkXYkHVdvw9gfvXigRzwA26wpxm8",
  "key31": "S5qTPG3esEGNbTYBbAWGcFkqgU6iXyqUTNyv29eSMfmjD7x9aeUXxv66Fa2hdoeu7gZhfbGmzM288XbByrv3YVb",
  "key32": "4GAEUtTjdjTQxF7uXtLYHQGk1z18jjNMtQUBwCPCC46c4ygWA5vrZdkbSkbXzhjD1i6ZmZXTkpi6qBwKVwj2AFNM",
  "key33": "3o5a1jnVVJ7VpvKYBTvs8yeoc5LwPqoi6qyPc8LQBk6CrsEsG4tmeUaJBeygiAh7trP5Hy5iV2x68KvRjom1VxXa",
  "key34": "2AZkUnfaZbypLMfUT1mENrkB6s5JxTAPmCaYdTi6Q8uS5NbzKFa5iyefzzMVbvfArVc5CJxmsFvqQYBZFYtnxFP9",
  "key35": "C8fZZ9qjTBGYCUZs4BnbNPY8c9SfygofWZRaUfRejwPDtApttT83iY2biVvirxFhgsDnTrbcMC1RZtb12wXDcgz",
  "key36": "EBBqHjGuy8yyJkyx6CmZxbAwTCS1sZja464iBqwCoPYSMVRcE5HvzqSgBKn1WGt3Pk1BDA5XhZGq6Rsk8d8JZrU",
  "key37": "57Eur8KEqTYFzPfe5e2g2tmLrTjpEN4UzaPZC9qPJMKqJFnCKWVPJ6A7XR1CpiY5M9iVLTwqdYtxCKpqPcC3GaHz",
  "key38": "xx8C588aYLrh66Dtxb4w7D9FPHsVBK2TgN4vGbcTE9hkGrryaCK6rxxtMPXQMaXyjACtzQJKqMtURBSdUeq2KcH",
  "key39": "26FzkvNBjHznB8S7itgjdR4sPPAjXEGfTtCRDt2s6RgNREkSGVFcJ1ihgC2at6fLyjkw2y8fuaZuSLHaAUpB9QPu",
  "key40": "4wVuStmofqF3RCQnFJvyqYiTJ6bcaYb3YuHYQomuikcXXKtGisBrYQ1sowgWJR9AgpfxerRWq16wxgx5SuSvDELj",
  "key41": "2eeMauxb62qKK2NoH9d91NGX7WB22bnmQ1b5kWpNWYymaCb7ow4WrFFcgYKXXbhDNhANsTNzzPH2tbngvaPM9BHf",
  "key42": "cp5jsJ4So6vUZ3J8whj4e2VtmLun8LSrQ6QaNFEopvYXadMvaKKwC4rFVaZLY8cqv7x4U1U31YY54EjAvYsXPvF",
  "key43": "4RTB2NZ9ckDQBgbWbKj7xEKoP9TxYfkDJpdsEHd9JoHtf17sGv9p2kgqKFDQaAV3GeMvbg9aeBYc6G2egawyRWgX",
  "key44": "4GRtk473Ur1kYCpYixsgMcCvjU1BRMRucp3KkrTB9G5CPcLjKN4AGvujmJceFzM75WbcbtBRCY1FX84w2X2qoibX",
  "key45": "53YqhpUYTKFRUuhRxmFGY9KktS8J2D28PgzaZTrsVR6MCJnD4SyaHfWL5zcWJJB7qgXWQQEKVkhiXXNRZtaT6kTW",
  "key46": "3MRDu3XyTb4Vm9qJuN3ygmCuA7rsBn5wQpX7MEdRuzBVyeKpfuX3DJdsgj3PrDGiu5hZxCqKMbyJTAM6SQUnz8ur",
  "key47": "5FcjVpQqWvaxRsdvJdgV5vdzKrZxhBziA6vBdNCpxhcS3FyfGYsNUEAxfhVzEK712J4BmLA1UWNYFeYFSJzptgka"
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
