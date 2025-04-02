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
    "5GajGFLsKQufnrMSGpiX5o4pzGQsv6DHeKq4B3KXFg2nXmN7FpPh96wTqdAonyqsNodg6rnHPRrS6kW9HZGJUzCC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CFyvBiirhmZUdNE22kRYkDD9FCu7yPjr3V1Fonx55c8EtigtarBj4TUhusJbPRfPwbtnskxkg48qsifmAh8Gac",
  "key1": "5nPi3L36HgAP8LBYWZQ4KBtLM3WnK4Zncv3VKi81ne2mfxSmkpJkpwkwf5eus1fd7oyjy3w9CztQrzBCgVb2kDDc",
  "key2": "5YEGvthUkUrHhkJYBfmLQYjnReysxf2caqaJtNsq6vUdyp389UAqtyhHJ7BcbKPYjz9jprsvFzCwjzgKsa4r4RUy",
  "key3": "3a3qgxkZWJbuH5yKiprkFov3u81dZ2ccEayiiu25kKqzdcASCvUCrJKyC9fLJTjYUp7YDKrMsNnpcEyjY9VGfiKk",
  "key4": "4dPkE8HGJFgBQSMu5Hn8Qjqf31bivGTvNJc96HP4zfWJWHaC2mgY34279oKGyUgtYmfwYQaGmemzkzKwmrcq5uKL",
  "key5": "5WrhccNyGo8tjbH7nYCdJRFqWe47GtsxK1HXZsnwtSJucA3m6ntZp3CRyEphQTLVHqwQuoygya8sFb2ntHijfYPt",
  "key6": "23iHTfLoeA9pd17wjyGJYkkQne75QD7AQwZUiZaU9xX9GLHY7cBS5aTnAmoAbPzHowzqmaEHaRrfq1yCgdtWRhGe",
  "key7": "4Kr1xAjH55LynjXUK6rt2eicVL4WfnjzmXb6v4g4yw74P3cuMFm89UxMfmZp4HVdJaiaFM3mpZRoTMAUQCBxFErN",
  "key8": "2ibtBehxqf8PRpPkYZ6WnLMS56iyyqWU1Ri5nCe4oosH3iSf8YcGcMdhqpZRf6B4tCuUJPWuUrHA6nGsoHAS8Twh",
  "key9": "65S3SwUCN1SLympcBvXvuHWSZbB9HkQ1EQGbpSBuR6B4a9eVydgzJKs3mMv69he5juRoP2FARHVxD4QhGMzuioZJ",
  "key10": "4jn7VL1sLigwPrvHax84K6HqjuAQS8yz2ZjTNF3BqpRF96EAaucyaCbVMS8Y1nLFTMysqJa781Beksdb2tF3cPMo",
  "key11": "2nt2sRqae2M3PS8Do4hDup9xULF3HTnNyq5QNaXpLCxej2eCqUX8esdaVjPZ9Dno8164PrctFEwDWd7m7D3aehDk",
  "key12": "3Xw7rx6Rd4h6C6Db1Qn64toUKCH9kPM5sgc7hMQn2x78jCCzMm4gLXQiMFNnxmPZ14e3CWiSe3SEUYFBqPJYvR44",
  "key13": "5pdoPoN12yeNv5VrbxzEJYv9bMN7gzNMvwvQiARHHmtCLnN14wWPWpU1xLS9m7KktGfvo7MWFBkpSk9yJzmndQkx",
  "key14": "25RusKBooNzn2YaGcdFn6uFSpvsYXerKbGWXohu2imfFPk9aNBFJRrhi4Y6CBayojjC17Sqgi37zFRjoYXKu2pm8",
  "key15": "5fvjnfw9VChKwBCLP47x9Q2CTdMHGrtZcF8HWgdw2aSNw6cyqzLoTzZSoeQXydfKRKFpjXypEmKVK5WiG8RgRkEz",
  "key16": "5BZYUe3wxPQj3aYzPaeedwcUBC33i4tMtgWQ3GiK4zJJHx7S7uDkLswmjwBnjRzH7YjEasGZkgsDkSuuK27t2hQN",
  "key17": "4DnLvWVk7zz5HMeBkbiQUfNcNmpC7yLHaPYrQMV6TYDpzWGTpm4wv29GswFxVnqCA5FpFhdWjVw4x4TZ5t7ZqjMk",
  "key18": "5nfCbobA1guzcLjYi7ZKjiR2ofZD2cgixSrTNKB5RMaxaLnKYQkS5qmELKLf1khtyjYKFP8aDsBapXazaZp3rA6k",
  "key19": "EXaUjvXTstw35npcrZMX2S2iDZWA3y3S41fVM5VRPrzn36EiZU9L99ESMdoPHE3JDUC6un8YCxwcfm3KX71fGh6",
  "key20": "4BKBRgGReWZQqrBXwDV2Gginekd33VSbfdHYiDQoHWcuinFTsP5AsfNCarwBjXF75aTQ9eEU1N62W2U3eSryR4JK",
  "key21": "a7qxW3qVmGjxdvivTq8D1YU4PfWKQU4nkvfCFww4NtzNJbVMbj59fKqzorQgH69u8NGZjvxYFEsHmePhWsokQyi",
  "key22": "2bLUQsSwv74u6LxuUv9KBbAiCfD3bAEbnxGd1mzQvKXwa5tLg9BzcPQ4jnGmj3tY9MNhKuuSgkSqiV4ok4ZAcBqY",
  "key23": "629HZLv2D96P8xkzKKXFojcyPximu1dw9biA5y23zJv4NqrMpqENmihwGpPnMMVeym1Rj2FLBk3ijHM7VqvhdVDa",
  "key24": "2qNJ2zVkYLiTs4hEYkmbftfnkH1ipXSR5rqJBJnZLFxXF9Q6o8riP6B66sCvmVEvG64VHmtGuYvd6S44NtWqDsvg",
  "key25": "DjaAUBC4fygt8asMkF59UR8JQQEQVcABGuHZVxfK1T7ubB4EgjNk3V9tBz5Mw9GNrMj9ZBQQ6itZM6LaERcr4rT",
  "key26": "3dZ2mVVk52Pw21eLmJT4qWSre3AhYUPdus2JCaqpRLagYZkhiSPefBPSyt1zw5tVbSAHVeAW5H2rwTCEZ67wX2hS",
  "key27": "5zeJ77PguwRXxQ6iUYx9hWpQ5XGdCXV16WcEaLRKyuzCRjAqJdWBYjmjMfM2V7zxsNTSbzZYkyCyJLDXNgXE1pWN",
  "key28": "4YUsqMnuUQgvRwPVbMW9HAA5D8s1sKWChSRXhNLsR61ZfABc5mFu2UcrzbFBFrXyA61LsqMzc5H462mJG9G9bkAH",
  "key29": "2CpjHrVERS2jtTEAKnmWyuWhFPhtovuNZMzH3bBnYEMDZP1VcGm8phv2NApkzUCrpBwJvMAuaaAoLuLSTfXmcea",
  "key30": "5U4QP9N95gardBEJqQcpqP5iX2HHzcT3WunWMtbCUTw4gc8MH1fFBczEYHqxDMy6qd4b1wojZWV3KhbW7xav6kBv",
  "key31": "5v54K7mr8nmLvqdXGUyHmWpEHPbRiZLh8vagGZ92nU68oF7Soid9nn8bxrERGCsUXxKD1w3mfLW2s4eEy9ozzGpa",
  "key32": "39zRVehA1WiVyr4gqxx2wRVnUMMsis2xcbeDBQJXgAcAFFVVTQV3jv5utgQLZoH6c9PkcNE1HFQ3ZoUQ2twCCLfV",
  "key33": "2NU2HiKPmT3ky4gp6P5HEtWmLmks8ka1akRcLWDJSG5Aou9KCgXenaCYWRDwDuXDWEJRDazjn3X4rPUgqqNgfLRD",
  "key34": "3dWQGU8uwuzPRy6BAEoViCkg92XiFCAUpe8q1oByD5FyNTowGydmrJFwbUA41XwxCmsmkkPXDKPmjCLJVfLfuGjn",
  "key35": "vuwog2SUY8Jwk1GP4uExy6ZQpzwhPmWomnDwZ4hojA8LTfdM8rZpMM9TbHoZqwuH5pjFpDXMMu8sGdo3qw9jm4B",
  "key36": "5hYiabukxdL5YxwTr73eqNtVjNzTGLxZ8sjRyi12HthXW2wzngqMNHifzbX1hAK8Je6BhiJPd6TVREr5xYnEfcs4",
  "key37": "4Q3HCxUXXwFA8eT1cJE5RwPsS3qxBt2yj898Th5a8YNnA5qPV3qaR3imwySomoSEfhh9EWTgosTFE1qsiE1xs5SR",
  "key38": "5EbhdgsZByqN768b1a8rWtEvTT6mVpFbXjsNjKt2RP8xTpH6Vye29q7mF2721jtvYqqnZHAGBv5BBv5cupbpyoF4",
  "key39": "5yj9MPe7VGzvzG2nCL8EMmFAt7oF6X1fFPHY1FKAFJjfESngouS8DQjiQuAeRPKWV4V6ecfBgjabzZkKRvqnatdE",
  "key40": "3QpktpJ8pVH4LepRwQD8qrBPEV2n6q8pc7AqGSba4BnVwUpdLisdVkZ8CKGiaFFHG1x9k4zXow9oYeSCWfKELyNy",
  "key41": "3dqKo14vBf8McrXcWCGx3C6DakZnLT1UY9bX2HKNZcDS6FG4Z4mFRApwNV3SYY1nNxMWFzVfUMb16zfFHVPtAJ2c",
  "key42": "2BaByiJk8J6g5jTFpQrh6KPbP6UnDvqyV9xMJt7fZ6Enp5YcsFL1cTxSB7zjuDnYyEJqg1CyY5K8FHTJhBYLKrh8",
  "key43": "4xsJ6MCctPTF93va2GejXgMd3xFE4yNGoVDQVs9J3FjccY8qTUPvQ4dyGGDUSJb4hDtJFVpHkbGP3hstYMAiaRTD",
  "key44": "4wKYWFRS5PebN73fG6WGHVF8gob4F3UHNgHsYMRCDhCj2aT6fMJvspgWXUQ1wr9jthByAYnCx7uMTSXQNRjQLjUa",
  "key45": "VmEmNtdk8XLdzuPCY6fHskhiHbWAoWQ55QDfsPD181QYUbBuQmEnbTeMK1zjKffRkLM4d6gW73kTogub89S6zdg",
  "key46": "fqADE7f4w9L3b7Sbxb3JmmPkqsur9JEMck3yxgE4mGmTLNbnhfH1ZSkQxZmiFmY3NYxPaWZMbiXQpDb73U8Jopv"
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
