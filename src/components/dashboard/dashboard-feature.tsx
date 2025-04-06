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
    "3ggc73fqzv1RW6r2jJDJGGgNwFJZNsL6dBXfN55iBEGSmw95p3LGcnYY8p5q8UpB4NqrGrxCxpdQUctboxGdK15R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KEmCrHntK3ruBQXAbriLePGyfEc8tw5JEqHpoDqiy7Y88yFtmXuXhpQaZMWVaEwQ3NduEB6gBA2QwaqSqEXEQJH",
  "key1": "4K6PGSNDg1HZVgocjnaGiUXqKBazCewKqubFgkQAXZ2aq6rx3bTjMJJCKhyBCMrtTtXeVBj27dt6HGEqCmbsUM8B",
  "key2": "5dTDZqCc6WeQd6NSdmktF1wFU1ER28rRpmbGBGjMVX5GEh52fmR9HoLBaZ2y7GGZwzNUshTPxDr9SnMRGVK4RsFC",
  "key3": "4jE9uwjFhpKRY7mS98wfKox8esyeJoBUM3gWSWdi6kmHPootC37yPcJRxc9ioYVcjqrspTRNfNdNWVAKqxYkRnaG",
  "key4": "5AziKCQtdt5WXbWW4RUJ65216PyreEGVmUGRz1Tcr8tqJXP9zkHNRyCcNfRZPzDt9Yf8J9to2RV5aHfsfyCRAFZX",
  "key5": "2cFRnYAsX8wuDiP6gPQjXdLLhrmJ23BECeXTpaqvfdf6qvU7oZWf8EN1rDv7DsDQfBubmAeYJisXXjjzjr2Z89Ni",
  "key6": "xF1q52RVhpjLZWGfUFYXVdUfrRhXaKH54WjkPvcZbkZ6zKYdyR7h7aZRttb2d4nPayBeFgxchF4NgsyPM3ayesM",
  "key7": "3Nfb75ZJA6Yuvjf3LcFPsQ19Z4e3fB9ibJwNB8CF7Ezk4yHHj3BMRMzhVb6AM6KxEKzaxLUF1gEsEwt5YsiSg7ey",
  "key8": "5VH6DFHrbzHLyyQubexWBb8aWgiu4z4xib8vkX6L6EeU8rYpB7z93LgMAAh3DCjCU5vdiMsbJu5jEDDSQWHRMee1",
  "key9": "4vPmZxMbeNBNK9wwFha2KGe6okgST2iTa1MRX3nWf4pYJxQ5VCLuqZBnC4mM9FFvziSesxwuJ9CFDK73j4XwwTuk",
  "key10": "3gNLTwonX7SbwKbRKz1FfMYW219aUmjxJHVuEWtK49g8JkDoNUcMb7GqwLVniGtJsXyjWz4WJxn8oEmsCc9QLnSP",
  "key11": "2UbkatHaMBe35Xz5v5M1KJtcxWfJBbFY8HowakWeiyT7Gncp9kYDpn1X4cpQhPm2ePT1utza53g7Tc6gpaqS4zXT",
  "key12": "4ifu87ia4ziMAXWjEacK9R3wdYE5z6p9HVtzuBTyKpeXv9MabGZZLcJ6PAmu6vxr7PVZEGwCu3DdsuesnkaKpxQc",
  "key13": "5x3QuzKMYdYwyRvHicBnz2KGBrsoZ76BQRRr78xsUbdv5XmHLnTd8BMEe8Jxtaj62BQpgedGS9t9D29ozcUnwnD4",
  "key14": "5KeX42T2NE4mRLSEJZGkRUN8FYJvz46cMZhUYBZqXofaA81fokCRTXJZc7ZX1Q8ksR6zz6KGeFyHsMkprSp1GcgB",
  "key15": "5N8DWTFbzvTv3VjBARo475a9CFUyARmkhHPXesQnmcWW9utsymyaN35xpvaURNgPR7ZqCA7mp6otkensqY52Gfr4",
  "key16": "tMVMrTfPV5biA2nF2HzWuvucRizVkBSc6xdcYgQoAyifYS3ix1C4h5QLg5SLt16QMcVarX1DJ9i5PhG3hLoe76Z",
  "key17": "hU6RmwugWYNeZkUDuJNkvbvSLoQvGvJF7pPngWJ4bd1PRxwt3XBFbHqgprUv1GVffMq7f7hJDav46xEETgyWjtr",
  "key18": "2knUQzqWKatE9yML597JrwVjyNBRKFdz82LxZxh4aZ7HSi8RNhVR2cPVpgMLp63dm3SdGBWgfNQqMiUNUZVudubW",
  "key19": "27ycdkVpJWVPmMJg2t9W1RQ245kS3LGwBFiq7DLozQCNHoaVW3r1CnNBsWdwhbvjULypTjp44zLso4SuPLnRQoar",
  "key20": "2C9g7CoGW1owaPA8AM8dorheYxKixsb84NHrTKTf5u6HvGuyJsY5BCTge9YxfuXQpkMoWbg9Z6rNGihU7WibSGjA",
  "key21": "4NGwGK9RhYSGyuUcTifG9w4xBvLGEKzP5jszWXUZkJc9ozZUssmVZgupb8d4WjrFkufyGSZTgWKfamHGX7dkKYaV",
  "key22": "Wap6sMSGS7RJE5B6AR2wKkYJj2FHLNhRd64LaDuGjQMTT5qWGisVveW9MgXrL2ZNHrRJUhisuH7D3V5trDkY9XX",
  "key23": "55JFCrUdQuFGwGppF5VTowummdDYAPJxXcftDZ7VifMptKqKKKRis7919vzEW6uGhQ57tNTXDfuZGsJ3fZkY49tq",
  "key24": "4msujXBN96fYvrS54FF8Qe8xPGSspztrU49ASJCmA8mNPdmNChf3wWWsa8X2Ajf9JdEzcV9HzKrUmoRhxtYCwwoA",
  "key25": "4MiwVFRqZYaDp7tZfDLfNHy9q93tNAVrMEYxJ1iSjwscz9Hkiho5zLLBFN5PtzXPKsj2qqywi2tHMNjRtGarWZoC",
  "key26": "5GB9k11gCneGaoWXvu8oGZYobmi5eis1YkTTN1FmZGhirxeWuKpSQMb9AdBEofPNPWHLFA8MEoPiQBrXu6AmoCGD",
  "key27": "3LMCRceFxT7QCA4XEvq5hZcqePy3v1XyhzJGn4nHaaDdb8NUg98MYjPFQZhNPKPGjCPbQDEvYK91ZeRzyoKw7Gwc",
  "key28": "3NKGiqUZN8rK6jw3vCJe3H8EaaGGMAaCY3Zyu7zYxFCPwt7HXNKf24pH7uvrdNKFVBa7qxLHU4f6n3PbhyxMzaRJ",
  "key29": "5QE61Qi2MV2g88Guf2EqkucGVb6GNyGpyqVqjcEsLnLXaVaUGEAq97C5pBMbvSskQ26E3qNqW5dF6HM8xLoDNyhb",
  "key30": "5w4gb6m78A8pgGGhnwk7Ug1wHFt2jEsRwo9PJ45W1FmXHXW5fczw4yiujb5pDMievPgRAVpyB23zSoAwmA3Ssnsm",
  "key31": "6upD5kNBsaq4VBTv6hEXvc7FESFctzJdi3tCBe56Qicp9KJK5xpKhscea1VVh4yfUSDi6anHZU9cssZxfJYjMsi",
  "key32": "5TfXVSe9UGUeWXH9odrfP1JVSthaixdq4VxdpxrUHn2V3JLyWNJpLU7tFi3ugpxmLPXBiUMXL8DWwKmxyUevrc2H",
  "key33": "29RqfvSdiBip21DK6W9uriqgERsootVg5pNwCzMSoQ4F8eJXTokafPAaziZt2gxL2HK2sh3A9zqBrRZtZRFimzov",
  "key34": "4VnqNZAbty2yYTchGyrALWXxPfVVnFDeaAjHGCGwdeQBRSJhDD7e8EvVrDi639p1313dTJKk48QPGGYJpTXt1jBQ",
  "key35": "4ew187fcB1qh4vnkmfRnUGZ48qcPUsnesTpmC5zny1mCLcPdrCWwcmnvmUh2A4nzJ5kfRLYbLWPW66PxYAobCpTe",
  "key36": "67auvFz3hxpbKSiv98mxWeGFmQNyZWkcaNLBFokXj6etE5mMnoAREwHkA7CFZvMMJ74mtZT26CPnkNkkxd1KadyS",
  "key37": "98SEMZtosv3AY9fLxde6rU6aqrtpFzNQRcTQt7hGMpu6Z3WohV1HKEP9B7YNKia9YMUvZtfdC1fCKLyHaEawm8h",
  "key38": "2LSxL4o4c6x2g8P3PQpmGnmiEvc3r1xSC3sCm5qHq3kh7QXzBnvmVp6TrBu5bEvMYmLqixEJC6DGxZEatNGgnrcf"
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
