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
    "ykjDs19AHTFZgkD9FLNozaXLBGYWP8Z2HuPwtkyYAumC23j4XCY428RjTV2GRugUBeW2Lq65Q5qabhPz2sMsJv6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UQyaZ2uzfH1hbAjpjuQrSGBf7X7KVDDhsUNJwdxKtes9ZaxknVvjhwaDrWWefNJdhaAZwG2WeEt7N5SxjjnCfy2",
  "key1": "2qViWfNb6m598KXPH4KfZy74exEE6BCG6NuWfsPMh9LQXbK3Lr7BpvjkaZcatURVqBmHhr355VWXTfGU72wWnYMZ",
  "key2": "4eqRreoz5z6SpdJeybQncoDGbAhvRJsUqVPTi9XjGmTweT2GWq3Jm95AgeV8waujTsdm3w6auqfyCkj78raKYUT2",
  "key3": "2nTtpZs1FGDxPFiGtpQBpdxRna5jwGiSMi2wjQj7i5Kj4fYF8agtTaZcm6saYxUwQVgJ7ZDy2Qk42gq37s2rg3zt",
  "key4": "52mj3DEsFTNsWGHH5gAhkH1CmkvjneY9JKXTeWaj8bgnbyFXt9do57MpEzSZgWoFaqJPgbLFj3b28NgQAwRX5N1J",
  "key5": "DWiDHJYkeChMRPAzFdY8Gs9ypympRmP1jcijnHbaYaaQS3BbJu9T8ehxLuP4r3VHFeWbraN7yfkjox8FXeaAaR6",
  "key6": "4dtaUCZsWLawyvkdqHGu2P4f3WHiNX4brHVJZy1GGcFRXKZVR7zRPLSe1R7s8L1qt2MK1htgZRDpwNwPMP7NewjH",
  "key7": "44J1Q1kxnWNYd5ingLKEa2UXSheacwNCC7orNAFBkfjtGffz1yR2GxKRxKJDFnMigG4NvqS6UguXJjeBNxPAWQJk",
  "key8": "55w7UHmN3bdqV3UppYueY512qrDhRy9jZ7G3d7WdiXtsg7FyxZMnnZV6TcuK3v7apsqUefEBf3pf9UNiA4UpRfw2",
  "key9": "3scf2osPiV9Lurjo3cv997V2NmG9mAy64wCWsENkg9GGg6RgoUGRpxGhoixK3CqkY3PUYj1LABn386dF1rXFAwrB",
  "key10": "54ZNpU6BmUeE5VdpLSpqp5r7VnZWsf4s45Qa2nvgocVP15vvC8vw9sXkGXqqDK6XbXBQ6n7pE4ZVSAmxhU58scF1",
  "key11": "5E4nSXADWDqbtoqSncs5XaNtVqEcDYfZrKS8Jujz5BE6buaHnZDpLW243kcqBJCy7ChY6sAGT8cx8SbCE54nxCgz",
  "key12": "4dGQdvRfKCkkhR4iDugjPVyy3Gq2hzyFG5vB1k1b7nzhAcYVmhSAVV8R2dpJ5yGcq5LUDB28VCexoUEhhgZBCJA8",
  "key13": "59W2VJyGJ1eGCBE713DgfSs7LuZUDQdJpgC25aGH6MxB5Tu5pCKC4UiqmfkkjF1fTyo1C4FWwZz4SxsGxnS3fTZ8",
  "key14": "2qvjDFcRQdNfaq7k8ncuoksA59JffvHVicRTe6judhWPJrHdxM64thbNrKmEDXzQAzDRpknQJid6jtuZj3TGeTbq",
  "key15": "5JBvMxKvhdNmYwXQXTEcq3LaTzuqg7Zsgmp5Zpm3RdxUfZQ4FvbbmWNAA6wTtnpuuqCwKbVVS5EdUmZQXWnnB8Mo",
  "key16": "C5q5M4RQ1w6K5hSfpUV4vb7Ci7XhxbRErTHe1htQGrvRhAED3qQgHrckyhGPCNSj8soaCrQjV7HjJhCExNoxYhq",
  "key17": "2R8cwh7F5VoxefG9TsQbG7CSXJrbJNHkouUeS3m6sdYt9ZfUudaKsvrUGoWe52Eymvqc3tLcHmhppFP5pUkJ9dLv",
  "key18": "P33cJzGYqovyXLzjkEwNkJgwVJnM7YCgccSUajoLeVnc1AcGxUwzHarpWStZzymkZgmDEuUJX3pyf1cCFfMBq5n",
  "key19": "67Nm91qRriEhkoZtfzuFxkzjDfD6xYwQS6S851RH9zqcZzogEK4yvoT95o1Ng9bY7g6Y2KvyYTDsRsn8Q1YhBedH",
  "key20": "3zBD1aiySdGsF6KuCzdfC1thT5QVf7Ss1HBWhK5ucyXsjtY6L47VAE2iEpt9W7QMiwjG8nstV1dxUWJT5TYbEzmS",
  "key21": "3amN6z2TaqparfPQWpRRX8hirKJN3Znvz97oPTnyC78zp2t8AfKcodfy9vALbxks7wpSEVqR666XgpitxVuSw9Sw",
  "key22": "2qL9NVMrfLQvtDFXD8JheEmwRHcwqTvSTv9ZB6LwVeAH4L3Fc7sK2memExSA5RarmXdDYGkv27iGZY5ZouRuGUj6",
  "key23": "2tVC6nPGJPvWqfaKVENrLBA6eNYKydX9yzs1MyTzF1b42gvtLddcmbXySqfQ3BxJQMNDk43esSAfqtobxHWo9uya",
  "key24": "4vHo7gk5rrqpPXb4ecw4biYq2xgR42NhxizeRnfvMdAx66ZzSw1CJ3nM575Y3E5VYQXdo48Z7ngQGacND5Brhgk5",
  "key25": "2ZurWxhW3PjpBtdHUny75o8zMAqs5KZVQo7pGbXaftkdzxWZZNcQiCmMPHmW4bBjAXgAsLyLangZvx3xyTKPoq6g",
  "key26": "2AdUNAqjYapChnASukzDWZs8Z88mZDPPAE4fAGyCfoivbhH4n8DgUwqSmktHvbGfm3ZKnWUbw4EofXvW4oR7jEys",
  "key27": "gf5RM6onFpLvG9kPZXBnghVqeroRnkuueVv79ryXpxtoE8C7icpbgEM1fMP5Eh17h8QvsQkaX84FtGK4vKGPzFZ",
  "key28": "3EfS7wKVF5m2sCPbtxt8bJtQuKjxFqPsMhanToZhGJq7HnG4qUXv6j4bxY1mbWXVJiCsy8Tn5tYwLUhmYtdKc8M3",
  "key29": "4BdB3jhLPjawoziVQr6iCAtfN8zAXFGQaJiKNqsWK9xn4wBPm8sj5JPn7kwSsK5taTWwx8EnoBwkMhktpkbbMNGr",
  "key30": "mi1zVUnqTWHV213uZg6yQjhH6ZubJhEuSYK7NLJR8DsHtPfoaakjKP1GSwZRyF4j36mHhiARRWFu6DhjrmnMg3Z",
  "key31": "thvDbiPpanMw7B5bmXm3AnsVdsroxpw9y9ZzZr2FxrCwiEqrHaHnYHVTvaRYYToGyvqxd4uZQqd8Eo5k5gZjsXP",
  "key32": "5c5pGcBE3xzi3QaRYCY4PGR74oa9WjCfnTCxqMyWn4VmW7GgyoqakMLjj1K4NmK7TPxd2ptCcHiZvgLxpd2JJW1i",
  "key33": "4dn3q6o8m8jt9H8ur4q9FJaXDbmUrPx1avSxAU8ozko1PQTUWgwrbyh4bXxTRuy6cmwqPpEGGrs4ZPGCXeaq8RtG",
  "key34": "3eYnNYsNuVJ1DsTW1y5WGi7RRL2BQBmi45hMZCBuaJvgRX1qXfbdEHPS2EKKVUpVmqambj6Pjdhitr3XY4d2s2fz",
  "key35": "5oke5csq4pwuywPJPnNXZKbD9o1GjwjbgVmXY1DCXN4mF3bxuuVtLQQjHXQjKusnJEyi1EkxENR8iHZQAtU4u6mE",
  "key36": "5a2B76R8MtysWNH9yjsi5XGQeJuTR2HpZVNXwWLXFyeXvRSEMnQfgmbpK7CHMbbkrTtC1NqFbsuWzChgqr7yVGcQ",
  "key37": "2u35LZETKZ89ZVDaiNbdhHZwshkLYSzYQPQfX7QxQdK8J63VUPa7w3UcMaYPAw2ndTkeyyqH1vZG6L4rrB5vFnjT",
  "key38": "3CPFSPNsrMSdvTEvFpVA4uvGndMY5KDH9Bhh9NQiK7pFvnMYGy6SDrBX798pp2TpniZuWLNUHkWZoh6oYEYCpVZh",
  "key39": "5C6To6Cvyu517vui22ZmySMBKbVW42943jpxWbrjyyn7cuHRdY9ScNKLC14XVkzhZxuuJsdNTuHsfTmVRs27Xa7V",
  "key40": "CBKsv3fNLvxBx7LFNPhXSyV43vG8BXkczv7QZaNzk4SDmioQs1jDiRcCWgBph43D7RE8EGcZEAUhEFMHZCmug4m",
  "key41": "3YUbBNa2i41qnXr4EgG3UxR9NkQsmebHjQxmbygnijfjZbxuwvg9f83FqJcZzVXqkw4qU6TFQG477vz3Wb12QDRP",
  "key42": "23sAm3RWDK9MsY2q7zScy96x5GaHPibLD5EcPqNFfmcr16dCFtciD8DtiitwrEaSxtoFX48wmDthmCV69TWLKFvh",
  "key43": "24eMZD326wueo5jNyS5TXNnVifnYwaBvVvqgwDPmxUY1YNSwMT6ZCEhREa6BYLpFYSTjrSDyyvet229AVs4eeeVE",
  "key44": "4w4u2YgbyWjYTJpccP5Lo4T9AjUqPDteJUmFpwht3AnimBFQJ27mXTvb8yTsDfdzWFRBMSYbeEZCcYvrsVfvAJyC",
  "key45": "54B56dEeFhAkdLwckFVbnENwRGA2tymCegNabPFCHje7fDtDTuaFdwHin5NQon43na19s5Q2KxD6Gy7JJWSe9635"
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
