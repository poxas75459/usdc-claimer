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
    "5Uz56UmrHaFHwq43Xd8Ty538LHjUfgzBwVr8HdFwmPZQaG9rdtc46ZbnorB6BpoRZym2s9yMbzRNLeJkRTqmJRAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZL949n4r8dvA2QcrugDcVVWicAycnCC3aUUNxSgjPGKL7ssGp52R7gLqnspUeAWppfAmFdZczmccwFPeijCwLQM",
  "key1": "2zQdJtyZ6VfDJrzed66HHy23EZQG1CDqaWsUpy1Lsj9zGc4EWR8dj5fARghcq3amRcgxKbBf8HJhegSJaDJQ3MUS",
  "key2": "5p69BMH5j9YrKKKZdgD38ocyttfQmvNxhehrDJGHr8N51kRN366Dsy8m2jJAMsF6Zf4ritXch2fvPEXZapvHajQR",
  "key3": "3gUpeyAyBHDgN645k69uTUWJi2mXqMPvqrhoa1Nsv9D32MocFp816UL6DAozAoF3MRqTC1XhxRfk25XqjpgKhXBn",
  "key4": "5TYqsj1qgk8rVq5rjtX9ZRkGn5dZtogS5RorRpnrSHuRUt8upx3SRHekGkmZg6shfRnDPocDFBCi8nWcpqEQFqLF",
  "key5": "YbxzqsTrN7PfpiNuToBoQZVGoiF1fdLkQ2sRSxRoJTm5RFGyen5oARHkMSZex3PwjjRqjEiEQRfs6aiZRKnobgS",
  "key6": "4HUZDuv2FqpzZ2nuH2LfaMNHvSKLNGJiN7BiUDyp5VjnF5ApjhhRWb7kzcX3GhAgAHeSoYLkV24JqyoEeZLLohuv",
  "key7": "3NYmZVZ7TxFoSpgmxBKFC8FpnUqs6AiAoZPJfqT8BePVmjmaF8hnJ3RXe3fmpZ1uQC6rSpm6KgBue3EwZhLC1rhB",
  "key8": "3jVsmL7AuT2FfJtpGLQP9f1DMttuiPyGwgzKKqDZgMpUPN7dqrs9Mpsg8Gd9C97iG2785Q42ednuc6krPQoqm4fz",
  "key9": "3FBJsZYUKamJ92EDYo2g3r3X8jRd8BihM1xzrzCpibf8mo8o3NR5egW3ZrX87DJdfcmMUnK3cvJrjBM5hG2gsJLq",
  "key10": "L39Qc1PPiqaVsXxr5CZstkG9Fn2fx9JRYtU3XTP7x6E6zX4SPFcvrcp4LAjQwNhuT45Uw3PAyFZVhJmjzg5gLFw",
  "key11": "5mUe4wShnmkcRjR26GVM9v89pyxeWNxe3ANH4XMEFvWhrCnrHAXqPjP3SyWKsjP4YintwxBkrbwucZbAHZU2U2YF",
  "key12": "3Rhng9ieVgXCau6abYMsCnMnohzXoySLk7VdALnrT4Phbk3ae49Y22ZJLzwWFoYyvBRMvUVkG9gDtK2H4NGoigio",
  "key13": "5DdPNfVqhEL4seLWy1bUugmYntWPMvSPUaGDK61GXux1kceNtzTzxEs8N2nWD4rqeR8Y9XMaN7gLdLKQSBx3oHbw",
  "key14": "EgKymduEePmYrFPNPL3j3hge5WNWzYHz3TSJNSUPLH5pUxLzqeSu7fHFv4aMNc4sXNCkWUjjAxb3yewb6FXkPc9",
  "key15": "3sEbZjA4BZ97HfJwuV2EUJxdKQvHuu3Ax65LELVhyu9sAViB5dALB7b9SAEQh7b63TrdKLdDHSiCcCXfVJgqzkV2",
  "key16": "36LdcGFCRXs4sycZDY2qq27VfrAevQc9Gvj46G28r4ZwFnyU4aimVdPXJULV3V3aJX1tenD2t1TioTYQaL5s4Uig",
  "key17": "2tETpVkg5gp2KiJydzfxigzv1jnFbTePJi9mxAymEKeD35deVuTPQNa97wkVMEVz1NPyHfwrd6sZ21eRSEQfP5iU",
  "key18": "4VLSySTEtARQdE4MCFVHrV2iyz87wXoh68LNgzGU5tXdHSc3HkGR3v23PGo8HaX1N714S585TgdjwYuPMuBcnWQ2",
  "key19": "4CGUFmKAqDB7W1efbfGqcJYtSk27kEkkycmqYjJsevFykDKmPij3DDPDCVAKYrUeedJUfWa5ZEXuvk93zqGWjaLs",
  "key20": "2zfigB98K1GejB6MG94yfv8vyZZc7kRcFcY3pptAMu6Ds4ThjKMCvKdNUavknkmDk74pgmRd3Nj5jNG1HkT36URc",
  "key21": "yjFeC2Uyv2wYweTQUxYCzoK1K7w9f9ScrwWdYZLDX7bdXSLgLaFZ9SnvSmUe5hDfxtS44uXWbVkGFehXtPxNJt2",
  "key22": "5crmaNCi7vDtrZcpDfUNediDNij9Y9HWMQoD4rqS15PAAFUmXS7v3J4AVKGncXXVkpD56JtsB7sM3xZnPwATXVEp",
  "key23": "HGGvYhJgJ2tmQH3Uq56LhiyU5ianj7Zjk79UTB3fGcLoPKCH5asuXxkkQHc6bVFLuZggvhTqizzsP1FU5ZHEjZy",
  "key24": "3HcWfzLSdGrA1DW4myCBRSxex7SRBDiiq1LKdQZoYpErn4Cozwj6UpPCXfNgpVWS3fcUpb9PJLf1q5ZDPhFcrxTY",
  "key25": "62sp1LadrKUJGn7S3fVL9AHsiJjnevXxaRjeu9KJbJ489errxM6BeyYB4PxHFDgKdzbKyaFy4iR4WFPX2YW5L2N1",
  "key26": "5yDi3vN5v33QFthH4SEXm3umJFVhPoGp8gXRmVH5ZxCBZtpQRwAHKJNrSj4C1a1TbyxjUQ8CGdGTvMHfeQ6dmrbu",
  "key27": "RZGbpjKgqDrLR4hU5vkVZDcdhx24EARFwd8XMA861huVeU1d1yas7j7dVyyAqZdtUc7TV3Z4ZnVHdeMC3rS77Sh",
  "key28": "f6e7ba4kUnJe197QcPZ1mmnmPEDfrS594wbnNc3NEtpm6xkFpk3oePi8e8PCecnsrz17qdzQVczkubX9d829rda",
  "key29": "4GVHdUJxHfXVqj4ZKXr8h2ynHCp3K3dRNd6XNB66t7dSPJC3vtgbgD82A4pLULgHcmPjQT7FFi7sUvxwBAkd9KBR",
  "key30": "yBwdmbU1z2zywegZAt9hAJNwsv3Ak98K4mYMkdUSgvX3ANU2pVr7DZzDU3TzXUWcuwnrrdvvBBqiEKemDvhieJx",
  "key31": "4Xy7uofkKZ7E8hiQqiByJ4LSoYVZfFTy5TgpHdngXPGUPXHKv6tzhu9Zx2cfaHfZd4xphoLtMNm9VWY158WJE8E1",
  "key32": "SZqPebrwHn8bSxFgE8wAZER7UiHvSBoHBQtVaRH9gW1yqYgg5KsxeLmUbL7FMHGJ7kENGmq8e4yPPv8F1xJuQJg",
  "key33": "43xsCtwyF3auJrGpuj78vqra3gDmoWCQUkQTgvGz81rZ9QZBi7ckhmTBzthEGDQ1XHPGTRjy1ghQXvzFSYUFxv2p",
  "key34": "3AuRPMo8UyPMKrHGFWxtXUvbHvxunQfHAYzner5y5mg56RhJ615QTQv9P6f6qZY3hLd6gUtYbHUwXoZ38eMbFm7L",
  "key35": "2j4VrpJbsBtPbfUcJ2dCk84NTuF9hmEK7w6p997w5xeMC2zMPxHYYmAFDDz3RTfFXY1Mnx6qVh5fTkBEveveKFBW",
  "key36": "5eFREYLoqZbYUC8DvfaCqf13A2kBEXv6KKZykSu1a74uG2d1etfAjRaz17f6m6jGxjANgKt9LfCeXyNndxsiZuyL",
  "key37": "62ZrucwnyqR3qNxpCxSHb9hHcM6Y8B3Bxym3orPprUVFppAW5hxSDkvBBQrWvQmkQjDDo5NwcaUCCHMZqTbMrMV3",
  "key38": "42DqRwSgJm6TzhZtoyw7j28A6J6TVVn7hmc5c5B4DjZXLfGXxptaVxSFAhhMayS6dPVSe4JoypDo6siqRfBE4P9P",
  "key39": "4abhKyHxRQsbUzTnbETHAzhU7vCBcsyXaDNNYSWasTdikLsfRtENh2J38iyAffUxnswnkciv7Pba3TEfNXMDAyqG",
  "key40": "46t6j14YpsgAUmBpFBEhukHmvwDQNWV6Hbd1sNtinDkzdpShhvBEyisde4dumw1MGGk8wupPH2ptWrH96sXGStaX",
  "key41": "3EaVoSVPduyreZunfnDHwmmZ1yPs6HkDrNLaXzBKfwzNcvvYD6s1ZAVRmRH25UKwFFQvdhLv5eDcL5VAPpWWsf47",
  "key42": "viUdNGsQHNojpYoX3EjkT6zNdTLdGHANbv1xuquHjMtMJUpjwEh6tme7wE2D5LXT6y4LVGpL7tsGRxmEbSxRTnb",
  "key43": "oN9MPFnZwjor2ej7RTnNMPonDxvmHs2nTTjT5bRwZwg1yejagoVFD7ibuCBNY9ry6QZfd2bnuLDmJmFvpUA2pqF",
  "key44": "5SsEqKBHhViAVmhyoPmMMX5Mwzt5paBspKFbxrLMMcyUssT9CZuiNYRoo9c8H9v2nqiQTkDSPQhRd8uUBh3T4dF6",
  "key45": "4PE46qxXoa65VBbpiUBD3ZGjQoJNav4vnRjY4zncC2JQCzH4nJFSdrTqhpDg5CHPhb5sKJ6kpWafCGgJ4WhFw1qu",
  "key46": "3sSuzNFjPSeHWbyexZeLvnJiZXBnnTrhZg6uLmjvCaASsjwVXXsXHDGPpSY2ugJ3ExgdPVuLVKazRhcJacwis92p",
  "key47": "36jaUbLMuNL83gPtPbqtzz429KwsVALhrUQE4u2zPHvy9ixXeBgGR67P8Cf3JsJKZCUwDbfNwvq54XkNZE6wGJYU",
  "key48": "HWfZpzr4eJiuFtzgNTHtgmJdt6mJQCkUP6QUf6op4pXLmqc59f5cvZUVU2J1z8TZ5Fa36Ye1KKxqoLtzGbV3Dzv"
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
