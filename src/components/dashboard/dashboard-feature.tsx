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
    "39Rk32jc213rPxhCPr5LuuTZYPqqyZhKayV7Z8KXbVLemCpvhMj1r1adihFrWk9K4SbEPuPCArY1PJadAiLJTNGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32iQqNKgg9GNFxpLbvH2zg9aSY669CwfcUtnwM7Ze7HJRTj8bLuRtminuLuv3BjFEfFQVU26JHA19KGuPyKzJUUN",
  "key1": "uq9Dd9DnRdtrB6v5xBtsYJiVneCDPzf2NWGqnhkDYoacvTFt6bky632jkeT4fSNU1pmqFdH2Tzkw4jLPwqgqvEc",
  "key2": "4ohRa4vDqfBjKPnghXLiyaqGaKaLz7r2vyE53eDcyCVETv4N8Hmf4o6jNUibjaJxom1FyHCezYHEKznjr8bvNHfz",
  "key3": "4WBtiivA3oMYes7y5fGzYyKf5asgFfT6VDtuTwnRmqvFJLeRxZ3ZXdELJBRT739LstQCKEvmXZ5PJgaq7LgWn3ev",
  "key4": "4neDcfDeFNcbcuFrGj2cNET7WL59Ziku2ALbPbCsUhtNLSdfvWTAki4eayjemWPf6M6frctbX1QxPfoDzzQobME4",
  "key5": "z7dGbRZbbz5Ec2jepMep9U7g9UE1aZKCvTrdrxyKyjPnaSfVySYC6YSrfYa8nhkqnpWYxY2Q7Wf6uePpKc7VZds",
  "key6": "68fqMWfrqBD8oeYNweQkTKtkQSGvHTPscxTy1cN6zSKat5WLKL9Bxz6Dh1RxcctrksZdTgtGWBb1F52G4cHnuV4",
  "key7": "4384sqQ3ZUeaQeat3VSrX3LLkA5iHUtff4ibcVtEdhwySbL6yKVurQx2JGpbd5B5B1CVV7NdS5rjoSxUyEi7on7f",
  "key8": "2smZPoK91egK8X6viDVQ9dUbjsubHWbePSZvZfE8JdMd1xHrYCQ1BpFKnpamuwa5y7tkSErznXTVpLcboFwGccQQ",
  "key9": "EiD34hzYLiKNSTdebfxCK3eqMwHZN2bBQ798cizxnMPyboP2Fsr4mufxLMqeJpCdPc6iiW8UPGz5J4hTfVRFtQQ",
  "key10": "X6QQPpEXcFgvYYh5NjpSTJE9vc56jyd69ePpgwoEacmd5ro9L4N6Vo9bQddyByedFbedMDmP9DoAiLm5fotYdRw",
  "key11": "3yNwuRfdqLwxuwK8igNKGxjdGDCKuHLacZZ6zkS43n2TnvQ9Ww3HKcKGqisxbM4TT7cqhZKJ8378hBAb7nrZqDSp",
  "key12": "4CeTFsUXaj68u7pVPh7vwxr8b9UWtjNv8ApdmxWpedW8cV9hKvmk73jjZThCnRE3Exfgvj4cE2WTmFfphmEg8ozJ",
  "key13": "3GExdqXxpajT2cnKo7dpYn2QapXSWPnkgW4U8vfeLRfmsNH8nFyQ8Fq8kwLR4rR4YFi1JwYWjybQ9J1thUDr6P6P",
  "key14": "42jtgBEHPaqPeo97aKBxPbhNHQqb2tMS16U7Rfa7Krh2ARL3qsA8DmCM4ehZKUvvB9TwZTuG2bdKL221L7CVQXzX",
  "key15": "66cFriyWBDnamhMZ6pkoWXCR9HTUPovw5UeGytNCPHsuB4TpSY3HKHvU69bpYpF9Fr7LJDFpAuvMn7aYTDHeFxpg",
  "key16": "4LaNUUmVg5zKAcz3zeeER56fUdDZJxmaJV6XW5dRyNh4EPD2u31mQAKconKmXUQd1Ty3wSoGYrftKYG1sVaP9ygY",
  "key17": "5qbHHHb1oMH9F3GDufUKDG7DVxZJQwK9SeJXixizmGqGdESnfPxFrSFkDC79fThvHcx9SsyExFhHCyqNySfZMMmR",
  "key18": "5VU4xxY25usbYRWoggCzTwApo9So4nQ1HnGhuCuEdHwTrnspqhJ3QMxk3P4LxCjHW4uDHg4fWU5Z6YarwjjbzRaH",
  "key19": "2YD78x4t6mK47iEosL5MNcjGtVuhaKEnhVWoynMJy8yzqHYAK93pF3U8z44kAV38yXGEgjpyXHMpojafcQRGi4Q3",
  "key20": "4mqcERKCUTmMKmZLNEi2naRdJtejfpdBgoXsjqLhCYmK6gA8gVgqwfzNkdgcGbu753v69mhVpR6rvD73cJSc5oix",
  "key21": "3nuSrZmLtUkx62wMoNqwxo2jdAko5e2QJGBrRHFNYnn9WkyC64xCm6wR1bkCMCsTFdD7VR4Fa1v1Lg8R4gdoDFE1",
  "key22": "4kUtCYYRo1CBCY1qZMjFRmVWivdbAtAvxUrYXm5EsNdTVfRcFA8tdwLEw3WMwigLStgvzec8NuV5d7xfWHoNBtZP",
  "key23": "362iWCmp9oDLbNobGryjDnedzD7ZdJomCC4c794tRro5r1wpiE7gFpx9xpV72VRekygDU3kqz7UrFpGeZN2LKYEG",
  "key24": "4raEMuNYsJUgJYvjKJpLAKhqBVtSr7bfZWe24gjWd2VGHqHkKpuaPQf3sBBT5ANpZkBxQvxT46j6hL8iFjCju4cM",
  "key25": "2m3TjCCH2AAARizK8aTs7DspwtkGHMpK7Zhi6UH6j3LH78Dyf7YnyXXv2XQ3qTbzKVXQxYdxKhogJWAJTDxAMT2C",
  "key26": "FbE8jh7JpVTftZigGs613CRC3zBNub9r1JvtM1MhN62ULMdvPWxkTdWgw4LU6eU29HoHoGugQgEDWgmEFDxQut9",
  "key27": "5aftjtK64151nz3iJfjEywY4JaV4ZeBAyT6V1ew19Enp7pADzh6Fyf8WKMy4TkXcGxMzoWxvXmBK3spe2qFjFXmv",
  "key28": "8iPwCJVbcN9TJ4PjAb4hjoHvxzGRTfu7rYCeBnzN2sqDrVBRbjw4SxFW9t94XQACuqx5oTKMuj4gfXqy5W7CvMi",
  "key29": "5j6Qc4DtRKCb1ebAiLkoWcB9XfbgJ6LSdhPb7BZYE494Fj63X8GVcJQBhmnMKHk4gjhtovbqYa4gmCDw1aeJCyZw",
  "key30": "3yk5EGxTay5g3RpRz1PdQxHRQMKKT87aNXcEpiaQ5o4gmfS1aphzotgCVTcpmWXYgtiJXyfX8KUDx4n36RW9ZmMi",
  "key31": "3WM48Qp569GYPsnLTsgU5B5izEtLX4rxrLpgr3tjEDzR6nhHK156wMagpbUuAaRrhtvb7x5LVrRMPGa4AJPzDzAv",
  "key32": "4ZVGNL6FY3aAJP51XEL5DpdCLZxSLGg8nPnTriy7q8KNb1mFztd3ogGaZdZ1z9Ku5SEyh7BXo1aTCVpFbr1et27T"
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
