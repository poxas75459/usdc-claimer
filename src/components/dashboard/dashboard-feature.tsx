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
    "5kPqVwQAfUFyCAowLqhZsS8B5bjGXtNoC4Yu7PVKU5cg1YkWLLV52mj75koTzZr51ChqE7oaRKxPmiQjvez1LzgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rXDMzJMMHAshN67ixqGmRwVBQQVYDGHTmUWwZjwrhVnabExDf2M5jAdNqFVFNmMUiusCRqitnC62VG4e8SWtFs6",
  "key1": "Jekg2tvD6MvxRSxvzyrxswkUJ8pHEwHimLeu3ch9eCYbf7CZhoaPK8RAf8ysGd1DeCh3YA1PsX4wBxHS7eQ2YGe",
  "key2": "4nex9QX9YWBeaGPqLsYhuXMN9XpmurdC1rWessTdYFCPoyKxBBtyu2Xy8VmmiLjaUBSUbR9VY72D1CpFomrt7KwP",
  "key3": "5woWjYGT4icFJA3eEyGgkKEijKSR45aJmvcCotF76yuHEaYFx9ZKMTxCJFBjswLVCfe5b4bPtBQJpzGE9Jb4BCpX",
  "key4": "5n2ykhMNSeieT3shwHh9dcSoQTzaoKU56eiS1qz1x9bY9ycURpWgAJfaPoBBxzorgZobv7GYh2oSDAFTW6wnRwxU",
  "key5": "59ZjWK3u4QT499ZLVXijQGiRBD4YYzYsjF91c3sQUhdm14VQJH2PJf4vZVzX4QphFnyTDXH4jaXHrpsrs8eJRcyh",
  "key6": "5LNgK7idGBRr1VEhDvspZXqurtYyT6RekiAjmP987EDvQLoVqJXUrJutaQ9J4MowQSJnGEChJZ1zbR3PFKoWYSLR",
  "key7": "3GbxT7ici4PDm5zMqencT23N9ksoB1cfVHwD8eGqZPM9qouXaDHzPsyaxwhCGKtBSweLKB8j8m8E5ex4YasLi4Xh",
  "key8": "2XUb91H2WgknThmPiqzmaYGRaK8MAmEtaXmG2KwqCoH7gaTvRjsAozz1pA7VTK7T4uretp6iX9bMri5urdMgyoEf",
  "key9": "U8dhdKDGdEMiA6Tw2gYsSFz8qpezKoAq5jC8hjdFNU2KRDHhoVeswgQhYoy953MWRYMAkDtfwA19FTbwgjSGSKh",
  "key10": "2PTF5VyyGWdRuigjMBRxpMNk2oVRG6UiLDXRWSQ2aWqWAopgbm3AEY4CuECzY7A1swuaiUMXsFqGYAHRe2Gx8eX5",
  "key11": "5VThHDoqQU79G2a9Ma72cPcUAmE2B7X82pm8dh5cWfAmeEFQH5iuUSMKGB5cxddgTPNbWpgMxCPpeVvDhgJ7u8QR",
  "key12": "3b2bmVPuVmWGwTNX5LYiyJDR1KDwhKaNDSqM6bn77kkHkPggZ2WezijBhMBbqLuqiuJnJ7icKQ6v5FfxVnCJjAi1",
  "key13": "4DMnbCtLu63oSA2MBBfEcpfBTcLcAZuFJojwsud4QaX9DVs7KKuPEhnjnSXrVTBkf4NSVrZti3NUjSV1ksQ11W9E",
  "key14": "47GeEe56VfQqKhMhyVJYcTkMax3NRyN9MGgBkzQxoef55oqUZiGbP83gdSCjUuHoGNCLkJ6fhj49zW64DgNZVnLs",
  "key15": "56c7cdxnQGfzA1tvGb3HvP35r4waZRgbZCLj8nQPaPhoazAhWFETWCpFuVfqR9ej7SjntxLwVY2SetQZDM7yDqCc",
  "key16": "3cdhNzheYkKpZ1qM2h2c3JLkBacR5Su76Qqeaw2yY3AVC5Dc1A2L6gExH5g1QY7rTdycC4axLcyXYUtPo1vGjWLx",
  "key17": "4WPL7Y3JEcA2H2hkMrkxH9zpgdftPskpf2rxbN7afmStkTeQbcLhBCoCqV1dE9216Fcvyoo3L7r3PUJEAEBsRAEs",
  "key18": "3rVENExbvEy5qyZ3ngcP2R2eTs2YuphoCNi3LsLEDiSThLZPK5TDRHXutFsh9V1vmc3Vahuh3zxkzRcGsaBHkbcu",
  "key19": "5za8zQAAQEMCpd2PB1UkffyNQ2paemyQzk8iCnPStuzmZVj3jnh8X8sjvgos1wey3ZzqRMvuiJ6PYrJLS5ybDNSn",
  "key20": "121pzcB1V8rXHAsm5LnHqSCo1sWgUwdGafU8A2JrBwcpsHVK3dac62FcMZCuGtPMFcoSVYh6mBmitvzPnmrSCuSX",
  "key21": "4G66CxY5wuqhAoztLwrpppwSpbfjHDfeeH4mKBnUkwSizt9g3n1v6Bjpm1EK6hyoNDdvoxxuP6kGhWcFRgbxVpC",
  "key22": "GBgq5mXb3SSWt4GUCLdSU2apTzw8M67S5fmivwXM467q2q5hbnc7miKW1FRTFVGFw4VsrmMZE4US3uGJ7qCDJE5",
  "key23": "4TMQevZ7bdCkqkifmXkJF4dekiwfdMzTi8Za7HyGZGkUMAoX5XdPHok81etXnLj7BLSbdXendTGqHPJcG8MeWEMK",
  "key24": "f8GDZfk1YfiCMwvEN6XiEbRpTcWkdY35s24rfpnGHe3CaNEN9ZedXF2XtWpML4niKpD2qEeseiYmvzNkju5Ed9o",
  "key25": "4RaomuJTXQjPcSsh3Smbh444fCHHZj1RCRwxAdEmAbSvb7144y8z1xEC2bX52rVYZ7ujmqziKx2HLJNv3kVrAzRZ",
  "key26": "5TM9YEdcgSBuz7vg2kcorJUvzTKFhmRzLbTDT9jWcka84iD5zu8WUSGzAqXKUVtopnAbUtWLwTfbtV4sJNpaTEnD",
  "key27": "f8GZihfNxHntEskdaacAwHWFmByXBDmQD2vMHhXPhFTsqCeC6xcNJ5vn1uramAhrUbB25pnuAgdpWcmPYV6jU7t",
  "key28": "2oFu3D9WcrNWTmT2WahLuFgf8eT5ttLVeREdTYngrVFJYr6iVCPBDDjL2HKoDHPRAYRgkozQxWu8mRXkJqxFTqtS",
  "key29": "4pEC9a6tcB1U7xgJSSoAr4iSGBaREmeCreEgxheaPEEAMo2sCCw4yXgCfoTFQA7fuVGv25SLFZXGmS7q7wN1ntM4",
  "key30": "sPV7tg8GqLuwuBimwPDUrUWsQE4xSrVYiKJfyn5KUH2kEbv1KErBYTR4k9hHkWXwNnqm9KxywKnFNo14P75wcfj",
  "key31": "HypFnE36gt6mxZeqr4Fq1RZah6hwewDFMQ3aJeaafsdQ3u9LADP21KfK6YhsRnhesBBSrT4dcMLgYBfWNC9Bx3A",
  "key32": "WUhAFZJ8BmGP1wjnMmAX94BHqyL4sXb5PQ5Et4TVc26o338LzGcYAvaUtwXVZKssow23avKzrJpGr7s5y7LeUEK",
  "key33": "4s6Ejpgt8aUUixDHrJTf9mFSVH7EdhhD5CeBFvz2WxaFT9cD4rhMAuMcTfqoMVDCZEmLLwgJYeLtCAVe8Zx49NJ3",
  "key34": "5idUDbuvv1CqkuT4yDcrPbZ4u47pGGhDrQLQntouWH9TbSf4tmhC1ziL7k4hG7fTU5huLq6XufHpXHQcDPw3p1XP",
  "key35": "2itnQvpAeFVBZxFmakt3p2wg93ePzCrM22LKRkdugcpf8JKyXiv35hq5e6w2YU9rJMGUzJe3G4pksBqf9uwUERf3",
  "key36": "2CGQqik9zveVv9L6u6fsFwts6T6nd53tMXRx7FsSEYXCroupiAV4Ybg1zYFCP782dsiHcfPruDjtqD1rinrEB4JK",
  "key37": "5ZZubLx9dgFDR7oY1GXMB8FMDJg7UoAC6pe6za2uWAfQnQwkBxzaHEGRn19FfdDCTjoLLRqVWosmqqR3SZQQxzB9",
  "key38": "9it6Xb3Affp8W6wTJxPyrmL2CGo2XfqmU1BK6UAeL2zQEniCRCArHeisBQjdn4avjCMfNqKt8mHegjK5gA9cNeL",
  "key39": "5HEyaPiJG5mMpgUaLidEjhtXgAVnqt3ddEQ8hf2sAerqD4xqJyaA34iYdaQPWhvP7xviLEahygh1T7fWzQ9RE6ur",
  "key40": "64KkJV44dMyTT6Mw8WZY8G82VMkSB8UXwPvs4RDiQ9hJZ5iR75vzxaG1TYh2HeD2NtuETbmkMq66bTYKvSY4BKdL",
  "key41": "5qvnV6UCV7tMaGcgcRJap6K1xrPYFYtwpt3tAVBfMXuqeb7LUwyaEmmLZiwSufjHNCn3wEMfAPk8zKRdrPWZU8KN",
  "key42": "5hZNNhHCLiETgaCx8oh6rTC5ABa1NkBjshMDeomCCtv6pYNfXoeLDsGxSECvsPpe2AJGgiZa2LHSpuk3Lbaz1gmF",
  "key43": "5pua4AEmCq7KgcZrW19bVpb9sQt4dSVutGEMRMuv9Njt4B2Q7C9J7y4Qk4aWJporMmquMuhaDMAiVi8KY8QZ6S83",
  "key44": "uSRxHd2MPEFNb29psQ4qjXbWPh9G35w7oJNnJB26Mcf46G4W7uHUp1y3cf5joKd9SYF9CLhgqdhBhB14fAH9ktv",
  "key45": "2s6HGt38fDb1nDf4HXyhgz5PiehULBGa3E316U4xFRtLU96DzqeGXYErnm1JNucmQLdoA1X4T73gpWKiAoKCqcda",
  "key46": "4kHPxxZ21DMSP1YhTyWEsA9qVfHiGRMLhBcDUEq69YYgK7jQMXLGvnwvgUK5eTxjaC9mt8hKUoQ8pUhR58LUKxEb",
  "key47": "5UQVvTT8FENRdZbCoykzxakepDokMSQmLJks15Q3ohAWS5ZUtozpBWXxBNkbfGvYf6q2CjhpDY2b3T6bEy74cEhc",
  "key48": "3CrYSDV5AxmixGGKDg9zsPdBwXeCcBB3bgv7oBQSyFNcCr9jzNMJzVKaHkazfLQbEEFnP9tivKjM3VkK1nao1fTK"
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
