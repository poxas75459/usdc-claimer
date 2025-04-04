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
    "4KwLwheKWpGQzmmtWA5okAUThxC8UvYQBmZUe3tKNZ69jECFXMXgA1LfKp7wk97YewXhqc7LP1FxLkxspMPSJNkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dnYXoUJndz5RWxqf9kivmzyEyiMoJr9JwuxkCUs6t3RimHiiKaW8pMMXnFhniPtJgdZHfS3isfPXmz7eK9esp3j",
  "key1": "2oo49iUSfs9UCzRKB8Dkm5P163L9WCbGmn6cC4H9XnJZ3jWF2ajhaZkDxfo9hUv3CSan6nb5baNCsMbai5nhCaR2",
  "key2": "5PP9tLyxwkUcEvxdXQvv8VS4zBZ2eFwqY2mJtwALfJJ4GdhtxZz97jai5EdM1mLir1BHmuwhn7iYNZj2fYy6DCxN",
  "key3": "mnp7ZwB1jRhPWYFZuJ8LRMRfFdWJ18xNUqsZeNSPka1obje2Ghrdn4Jh87HzL1D56az63iHmYGa5Abn5umL7riS",
  "key4": "64YTVxsTdvzrPuUvPJQjz5NhiAMk1ZgsG7s2n3T7cS7bHdeYiuDfPwrHBtfeVHFQE78WRJfuZ8qUEJryd7YY52k9",
  "key5": "z6nxHeMLxd5YrMmJDivzM9By5fh9sJ2u2N8BU5FHeA1VEUbCXah544M2x6wbosTk2K97TYc24WhCXH2PgiCge8r",
  "key6": "3XEqC8SbzavARsF7nrBqjrfnGcnkMfUNYeJTavPbx3LscN7cwjh2gJgJrF3nt9qvKjH6brvAAQUJ317uqbgJBeJa",
  "key7": "4jd5JG6oBBogrpji2KiA28RL32gefkq8fmJnn2qiJ5kukEY4QATpcMj417hCeGY9w7nDc6bVWe4KZAE6fvAsVTFq",
  "key8": "4tKVc9674y6UC61gDr2HSizevTN1LVcwzCx8YYdcomRVSrDricCrC5vfqAEWXnKM2t7waYmdt7o32tqHcAPd9oBb",
  "key9": "5sUoPawbhAp1ofYoWbtLxFXEo6idw1praFNBMXvGjHpNhtHvGG8VHyvDUerRF9SfJdfHKpA5u6sqHB9RmVqiizpT",
  "key10": "4t7nwSMR3Ms4UsJriFXMqnC5Xjm2CH27xm7HBLcJFW4xqXDBeTcqqVM6xJLoKH7oaY5byBnF2QcjMMdS4P1355kC",
  "key11": "3dUYZiTSPc6L5meF5z8RB9UAGi5aGL2JYgNTAB2oAXVYXhBbhQLf1MQiGQ3oQ6AgZzxss5sCmHJBUN6gGrBPCGAC",
  "key12": "47b4cszVKGfVxDvwCfzXEaxFkK6o1UQj1g5WjHHEJ9jvYoxuEBPzJ2Prya7dQ8RF2vAP5QvEranUCEhfdQkGUsXD",
  "key13": "2gnYfu5we8ttSLo1iPqq6k6eQNdWHGTttLWv75AcnLBkFR2p6kV9z3uqsE3bC5q2Nk9SczpjHtN7ZnYd1dd1N9EL",
  "key14": "3wcdLcUBHYKDSb76mjw5vxkVf7yyX4DmV6e524yFjbBwPiU1EuhKDcxf7Tr2hHwfbyo3emsqVbgyNcxEPAC7a1rr",
  "key15": "5Eh3prSzxZ7BpQb5ADb5ejFxhxKCVrBksbRjVmWMccHTzV5681cBasrxPDVfEtmLiFcmL1WThRw6vQbCKf6TXoxf",
  "key16": "MbQwzQxjMtic7nGwcz43W1Kj64LcGo2Qx2Ntf34FK1jieyETTT6A9duSz4FNsZ6JvnyAWa9xzhtjv1dNxZSxRHr",
  "key17": "2kbHfMT94xgWx7BU64oEM63Lnimq83SXNxVGL2um7Ht7J3qfBo9KPH2giRJ91U4U4NjVAUdWyGa3psoCymb7RSC9",
  "key18": "2VNhBY2nr1ZYbL4sja8VW5vLmAbTkQrzfMTGFRSuQgbHrGhmrThBRGDeDDKRdtALkbjQwSD697zVEWdKL2uZtVpz",
  "key19": "3sc3EmzkKBMF1nHmbf287w6sL5AJuTdbowq1nmYhSNS6Dp9RGMaBhcobGixZPfJumYqzrYHjwe2CKMBAENrR1tQL",
  "key20": "6CYDgX2qUFyy4HZpbhqEnHYGEtXMrqtDWMbVqorNo2gBFe7KJoX94tZE1xUEMgCyzw94mKhB2ybFJtJmHXykuHh",
  "key21": "3F7V89aALfrDbFUeSR23ajEVUhnPNRwQ9aTuh3H8vxr9ULqCrg8PkPrvHkjyNuDhDNjiVinYAHaceKRs6jCzqsbT",
  "key22": "23q9Ngh9xjsikvcjrjvWFAzd1DRM5LCTjFna14yto7NWWATZNBFSztm7NKZC24BjRmpR9BneF1caDWP4zrXF9rUb",
  "key23": "2zLfvea6uTuBmYStdsyAsiVb8hLZrGUbhyu9iHBzJdC5fHUEjtEqUs6aBj6GCDshfTurpKcNguScnSLHuUePmzgH",
  "key24": "EJ4pkg9oUvS3PcGVbbjRSs2u7Uo7MYAJJ8Gvveg24Q7HQSCjtHSB2BL1EqEoTGvck6Y8PkKQgR2SRsjo8ZkXcoh",
  "key25": "346ZebfKKVMK4jxk5rsz68KN8rvncbrxeB5me8HC5J16R1tdfXaGr9JbNEzjAhuDs5rfqEuqCbs4WFLEEEr6bFbn",
  "key26": "4ra4gjQKYkE785EZTEGG9LzNwX3iM3h6559KyhKaE8MozCvhaotfmTuozitt23NqrSAzNXG4aXdrBmdbGg5UEC5F",
  "key27": "2acUhhYYCfcmWCNaSFR5ktSxMB3g4iWnvc5CUK9pR28RWf92TP4CywYTWskqzA29Vut5rSdpxFq2v5BKyW4HWisa",
  "key28": "hvGLPR6YqSaDvxFfD63ZkrD79QDKUAoqa31fkHSFRsAnQHXQ62AeVK5AgSF1E9JE9iJCn3Wm8r2b2C2dSs488Ti",
  "key29": "4fkCmiVyqJ9mJmEEseRHLVvUdGLSVyQQkiBkWbMk2h229jY4u5UMhPpXR64aSH1JSBBRWW5kmqSY6JqswMVvhZVB",
  "key30": "5gRFnHViSy3kVa2neCCUHtNFbhxhxHhUuWrMAQ7cxiRbKk8beutbMF5eN5Fpvpj2QFvKxXbSTMuiAFkY13aFWBz5",
  "key31": "jPdgZMH79TKR4AtTfpuuFBKEmP3jkemJWKfqghFQMvLLS3JbfDVvje2CZi6mASCz2BZxJcRPDyzrnKXx1YreD65",
  "key32": "1FpP3VMfduy6Lv3K5UhYYFgopviXkaKJtdGnoiovMHn1QoLp9ZnCFw7mwwrkW4BJSMcnj4WSY6m8xmcg3xT8qVC",
  "key33": "4S3gXBa3GvDxiqvysFb68vHzg7uuzF7nA1Zt3dnsWrNDjXWwkRsNnXMWXN5TwKdf3sKzWJiq57qTMALZRsgPqP4L",
  "key34": "2Hs75Q9GtKfu4y43DL7Q3AkYQZgH31arof1R3LSJwfpDNL3z8uKKsH4d1SXWrgX5kmLHVV2UuFwSC6gQkhHQzJtY",
  "key35": "59np4s1KuPRyP56xdzoTSch2H5EnR2yX1GknTtiUnW36JxL5BActYQCMDWo7ThdtZgSh4WRXJpTeDCFYgfect7yH",
  "key36": "2xMMjacqAPyaQLSCv4Wg3BSrWSPgZ2uDxj97nCSHJ3vLE7wKQFrbnL9uDnza2d3v1j7ypaLS47sqwi6X2WR53rSC",
  "key37": "5TDkUyMicJQC34FwkSqKXgpVCu9qxMLH1SiAtFXymRUwfeZqZN4YFpTjKpcqodaV1w54cCe4Had6jJnYf9ZxSUao",
  "key38": "3eX1jHyNPGfZ7Ejs4uxGkGDZYkZ6sx9ASY2gVgerWV7dGQGUW3UXA1EYHoQhwus7Ptig2B58kM4iYCzDwkFhKNp7",
  "key39": "3JSkr7QpjNRfiwWMXfabGX1SmBTrhU4H9ntKMbktcdWbgfSnnG2eLgFf81vX7zzN8y7ecVKCHFQfa5iLSQHaFTDL",
  "key40": "5JceDjTp1y2teyAJ1FwoU8odGZj1TGYsC7N9dndtRJckXeBvpVKkkPBSHLAQ5GBsLUArhv1mMVBuWcS7RNitAFY8",
  "key41": "3kz4JrbVTi67mNznMhDVMoK3t7qarBrmNMPqQ4sTnHpn5p2gGngmYK1UigYrhED3J9Kq91ZuhYDK28BA2LCVmuHx",
  "key42": "KWvwVgUwgV6mrkFwXPdo7dpiW3hCW6hzMvLHN72i2xEB7VNadYeE3Utv5p4WBQXgNAJ1akSg7x1Xvx7ox92p1FS",
  "key43": "2BeMuiEyoHxivr8L9PPRPxPvetn1ycWpgcXgijxYmvZeetk4ZAeU8TPkBrfQkeXW6BEwrF2c2rjasDag1xUqjLYt",
  "key44": "Ezt84VKnuKukapKCjxTy6EvvgEkDwY48SEq6pJrJaDTsuV5u4ia52ahaFyJpm9UMBDEQTEYpkfUZ93aEQneWccB",
  "key45": "3srmNKN5AN9HsChe7Er1VkoXEcZcSuMVXsrj7zgLcAXK2HacpMRFudBRRn2ewZkiBjktwDsZUjhGTr9yzPYgGbSe",
  "key46": "4sPtKhtgazwGi4unGdfoWYzyaniLVdQCBGmrWt7NFX2bssFt7Fb3HPBHVc1gywtJ88hYrv4p9SRrFiavXSNBM3Ss",
  "key47": "3mE8aRpVtV9NCEvzNMhi8KrjbWn1GAxio5YcV1xiXVszSqh5hT1q4YYc9uNKTUB1YFy4HeQiqnAUKAFeFpVkpTDg",
  "key48": "mp3ghVDyMwuMQt1ZXgSyoVqkjBGaH4ecW7bytDSd92mxCzynP8oeXMSwdo3id9Fdfd93ymRZo99ZJ6EsGTRLRDA"
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
