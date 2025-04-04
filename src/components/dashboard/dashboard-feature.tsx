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
    "5xog4762Wthda3he6Sk2xuaYybGEhJmK8tgX3AxGRSEkBXb3ttVLBVCujPA1CzvfJb5SBhXJCRQj7zbc5aBb127e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uv9UP3eimVtojL33fhsBTCovMr1zNHz8Xj8FbwoG72ugSNDiHtzMyZy13ocB8mWczYayxvxpUKLVaZ2PuBTjg6N",
  "key1": "3tisvCwHhyZncqsWdWnqgHg7tuBAU6EWBxQ648hRdw4GXZReeiJft6QyNWfAZ6UAidL13QcCokEHn5v9i7uW1FJf",
  "key2": "4GkStVEHHMHNy9Y6bK6pzP1khTXqnCxWx8mie7gWRt2fxBzkX9g3kcNUbvbbsZhQpUoNq6cu9q4TpPcuThWBa1TH",
  "key3": "4ow2fjTPMdC862mY5MPEnP93DTUv18sgMtNTnyad2XZ852kWscnYU33zyv9S8CLHQN41VNqsd752sMTAkhqKMFYZ",
  "key4": "4vxXE74o86yJbMXwc88yoAdMysdhoLPqZdusr2x5SijJFxRS8pwzz71ThUSj7qeNJjV7JWxA6ww99pkRmFJ2deY8",
  "key5": "37nyu6yB2o8uDJfLJXUacqFMGKcasqWDZzpWrfccCML5X9xCJgLTrsbRPcf8SvcwZou9DnZykrjqB2BHvhX5Bzyx",
  "key6": "3sdagcH65df9ssMgcnK1e9585YddqevdpcEqm8iFfJdYXyGPMFtSWdK4YNtQugxp1KgoPebRiWhyQbGe6ddGpH44",
  "key7": "5rSeEWuNPoiCzZEAq8CKKuxDEH9JZLUEMpvRySgVtWT5LAGTCmSaNPLoLw6H9YkRAphkJWBcnXTWpanuzd8GaymW",
  "key8": "nrcCbH6Xf9QAHqFQ6ocg6P1jLuMKqKE3VJK34BwwW7txVNbCrtk6Ytkd1v29MzHQovvo24R72knXCMyDqnST5Vq",
  "key9": "3G4Bn8HYecKiDdmXj3XUMT9a4jHjreTgBQpZpig7ZNSghEQHsnyCtwRz57GQHj8T82wSVRSZMYWA2ufQzF5vtxX9",
  "key10": "4wKdp17CzcmKagfeFTcvRnxFPwCRYmyWwFGcGWkw3RGeR2YSwbPfKB4FX3zXtHiwx3sZzPr4azysfbDZucoUoQ21",
  "key11": "2sNwsK6kHoCsgBPVwsPrAXcyP3akSzDKAxP6BS6kGvQZMjhVPw5eWhEkxr24t9QgZmfrxMRy7LAK1ZTcrmiAd7f2",
  "key12": "4ZiyTvCF7PTrPVkfncSbgXDNdx11nCKVF4QPSCQxbqesvenP2pN3qNnak7YpNWtTtctcdVqA3j34zb56HJanuyBj",
  "key13": "1UJb3knniWTbkyESdRV2BBhcfntzkYeA9yL7mzjqET6SyDniHP2hUT2kYiLg7C6JaSDrPGa41vxvYjZNAPoonU3",
  "key14": "4FUJaQ2cTAdg2eA77B7jY15KGGsHszpk21s5ZC8TDQC3pHYT8yD4E1KfkFfh4RjX1B2uxSwnbtsDAjCXWnB7Bomz",
  "key15": "5ks7KvLtyDtvs1n2852HHL4isFpjKwMHYprbVjuvz8jnoKBHXH87uRyYYQwniFYZaAnEZPSQ5ghBXNfFqxMzMeQP",
  "key16": "3UpFGetNTFMJ5D3NdEEDUC57Tx5NcRHoTckn9MN1P7wrE13khsS1shkyAgv2unWuH8StkfTKjMZJZCwNh6Cmj6u1",
  "key17": "3XAktA6A6SwkzUBSrZBMMdm2AAwPPKYWnZ6VyXFnXudUmobgMpce4SHhtocQphvBibqGp2P4mRECHEvZ4YJJ71fa",
  "key18": "4H39fPdR9TMd5zVRLED8es9rGzihGpAhMFAUyEny3eyqpxEtXGekM9R4MzyGHHEnc75fF5f6eKdopEA7FStiuCWu",
  "key19": "Q14PEACyJ85QzyuAgSRQke2yRBLMHqYuK9BUfV8QNcAfHwc31LetYsx2a8tZ5i1fKJrtD1YKfHMFio4XzPrR5yy",
  "key20": "4RSSuofovQ3TaSiSKPATzPWM9sWJarLmhkyPkzoE5mLj4soBXpTsu5Td8j8Ej3HL1NFqhDnL5GrpL66RbpvKGh1p",
  "key21": "5zUuqqAFJvoKXdDjZ2qNE1afoYmSNDLdSrrsyeCNyLBT5LY1p9pT6qjXBhQBZFsMM5zgnryoE5KeBT7UyBhBBqkn",
  "key22": "gsMFjCGgvmXaiq7GhCv7mJGRP6qbrZ6ZbwPHbyjxT3zLJpgYGJf3Hhqdsrt1AVCxuN2Rqj46Aiw6EweRDe6uXVy",
  "key23": "2TESWmrbs7kRADXMwRoAbTqs58M9yxvEVgJg9R2iSfqRPKgchW88ESPy965PgqttH3fUabKoQF3Se2W9qKkBZVAp",
  "key24": "4iQoVfzbzwfLdq9tSEsFDygfPheVvVQ53nBp6bgX9ZoJbu7LJ5EyUWrWVdF2geuod4tMFhjjwEqDLyofcppQvRNr",
  "key25": "1BnEmkVMiPvdEaBxtHChqFh23NT2Ve8QhnW26WMiJEv768psmbeikki7krZiKDtkgvbmaz9CuHC5Sd4WZ23RTrr",
  "key26": "4bqX82abFMVJg3jvmtci7ehPsNnLeppHFcGSZmtfVA7exLetEdegQu1hgUp8vWqyEo9ahWBkm4wgXJ47iwAG25dW",
  "key27": "4HwsxCe5QvLt8dBxQNvBPdKL89nXn4kHqSPNM2JVVQZdQ4tdTUZjbN7gWDc87RXDBqs91CR1q3rKvCabMAPquLrv",
  "key28": "4gvUbWAF1nBPKUxmG9zkSWJtCJ4czc9GYN8y947DLvBRpZz742TFPXZgR7xDWmZcCwdTtweg44MqGTZkCnzMsFPW",
  "key29": "5UD9VpTZDm6N2qHypRkCXsaWqDoM4M74FHAQQWEThfKRQ5DBDtP7PTSZdKMB4obAi4R3ynD3cZPy6D3RnLR9FCku",
  "key30": "J3ctmJvnyjPvpKhQUnHLQJ5i42RU84bm4ojvpzoVTaSrpp3KwVQHkufyn26Qe2uwoMHrn8mWg2QmgsqUyc7QcZn",
  "key31": "3aDwwj8BQTePvLjDn5wh8oD8Tjdfhsj98VR51phwcszBLQQRqqnx6C5A6vRgUnhYXPFwjgjYeJnoPefpKnangtW5",
  "key32": "xX5yzLX3vsvveFxZTot8pK18LyTYARgECsd86JqtYKhnrRcH8HRAmYqjdyRkx1GGwL1NxeVzmePyyrWDkPSUTmm",
  "key33": "4AgsvSNE3hPRY6dkFDFacTqsJ1CLmnb1bumLC499jD5fHTYEcxdgQDAdeLibxWvBdzmRngmD8D6PaaEme3pRCGti",
  "key34": "2DjHmLAXMyCNuhkjg43TUC18rxWpTXkCUhRjLDe1xs5GwKNpQio4TTAkAWAZnHqkXrD8zBtWR3SoiNWQtwcmcmf6",
  "key35": "2eQSM8zAX7eWuGfM6PyeHPom8TUrSzmuvsXX7KPqgyLwhFiF1eM1Zfd89L7V8sUd7L9BzBpCHgBanQgrSsPm5VPC",
  "key36": "uUcwiwkS1h3S1o9Du7kPGmY2iqNwFBFXD8pQaxBsS85FRSnSr4VLK2zKkKiAGDu82uZ1nu3f7SdqtuUpDDcrNE3",
  "key37": "4smwvVAqd5R2XAxezoKCVfvWojQwDKueuHHoLWQ8TuTqd9gUXAgUQhf2hmCmR4tYamH8iK172cAkmNCrSCeAUq7T",
  "key38": "5Cys937EnUrPNDS4hZ5zyieqq6GCsaD7hXbbZoGuUgjam4SEjwnif9aBSxVCeDVFufWNPCgCVxxNnXgkHehygQwb",
  "key39": "272WCa7JEkHJERhtQtL38oEg9QPUBbcC76AVnnBEkH5CWHnjzESX1fVwyFLtnupKLAJySPZZCRGBYtNZWBGFM12q",
  "key40": "24JRuEQja15kgQPuVkUrrZCLakxWt2NQFYjuLHfF9oPyGQxBXoRyVtUFYzabYP7D1NCvuU5nWt8T29cTE2y86cvS",
  "key41": "2hNwx8PXvLsTgXL1Vg9TE21ki2H5KYUvfrifXrHThhDK4HsbJVSrQtWQjxBvjypixXtRwxbX1r1Zt2Ndfos3pFJ8",
  "key42": "48SQV7jRSzEWRhDdpycL4kD5CYqkiSv9FudWHvv1PtQBp1sX24bZ2fJ6s6m7FDNjBadFBVnGaEjJNXq4yqji1pqk",
  "key43": "4p1uRNK1xkCT1PK645V6esxJc6VpJjePETcZu9aQhBTqUfmWXa1fhHAyip39SwixWnLneUHWdodQnbBKJsjhcb45",
  "key44": "3dajr7xC3FgvRQ5zvCCxqSXzdVHGQm74ptwwWqHs51zX2KevvMaY54H8qr9Qn14nWDVtVCWPd1E1bLpQVDDYotGZ",
  "key45": "22eXYu1xJsmGT5eKMZQBa5ET19BfgQrEG9BrV5fRkq9uKifFVcCGDx9tPooMhVkpwYSr41sEmP1GWALsuVJJXnDi",
  "key46": "3GQx7Ypq8fSM9xN99TwgqcJg3vqmN74vJtFbg4BPbjroM6Pthk1zMXtQtZ5L1YPJnKjuYDcQ4KQaSxEMASnSEeaa",
  "key47": "2Rz6wtUfLzwbq99Fsb76mvpcar7v1AYxNEU3KUfyvX4LwnmbXJvUrgG9TF3YcHBckvLDqMDCRzezjeuzL7pxYq6r",
  "key48": "5zDPypEZR52vUj77CAnfHnoHEhNcuDhSqX5f7DvKM8brWv8UbXDSmknW9qeiBvCUj8qCSAED7f1ETgYMvEvP6pjh",
  "key49": "4KyS3kQ9Fcozj2UpMjoYsMmWxNYUfn7Hnzp4Ct2UYah2H7aPd3ADZRWn5iWiLh7yWXrKTvM87PLTH4xtExqyhgT3"
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
