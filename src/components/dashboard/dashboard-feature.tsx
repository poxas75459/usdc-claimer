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
    "xHwRpkDTT5GKeFvCCz5sryXDnJ8mtc7Re7rYdeaqhxd9vPbPoPzDbrvHos5moWX29X6gdaWexVbBrNTw8P9HGXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56C3JHnse1VEWmVMx2vKq1mxbZkhaTrkVna4nKixmkbXYDapNCgKXhksSAmVa6dnaPHMeVZb1okDcQkFZSwsfsMq",
  "key1": "4dcA5627QT6XcLbNLwx8BkaWNnoMmZ5jVMRvVtU8VN2mW3Wpw48w1b4Z5xYATtE5GcmqSWjygZ3byzLeRV8QBWRd",
  "key2": "22bN4D477AMnLMP5hpdqQXpnPbb4yC62JP89zWBTuuYoYzQ5v4ZwRzgccA453XYtNQF5EnqZeATRM6dvTebCsgNK",
  "key3": "cnBY7h8JH8R7edXeR2yfgQe8swx6TVJAvB4Qxjago51vACiBNt8czRqPia5rhWm1LdfSTugHjoGCfKDkDVnS57n",
  "key4": "3eZo6oq3kXnBxHVYd7emg5QFkctSHtPSfFjk9GByQrJrbHBehUSrhyuD5U47eQNd7sBg4vcHTkiWSh8Evf29rrmQ",
  "key5": "64ZiXDgBHH9RQArNgkn2sNqaCEcq3N9SWcRGpQhNyEQqi8grEGHsDGd4Nf3KeXDHLdmPgYG4DGn1mryoY6pPHa4",
  "key6": "3hoYHi6vWUfRVf7iMiypn2RoZ2jNdiecrtaLhKmDur1HE4apWdvaW7srdk2tKYzaBTup9C4VTNeR3A1cRA56NDKS",
  "key7": "2uZnvhGH9w77ud4XbAW5VFcZNqJuto58gGfsR6sDBMQXkCqxwu53ASBW9ePYrSfnCA37B7RjRgX7CjfYbVymjb2j",
  "key8": "3b1A8NM7JJ7TCjuHtc6vmMVDXHftTCwARvLE6RwMbeCMwSbdcjvdZojMWsAweoxFADrskoBvi4xVwGLpq8xdAkNC",
  "key9": "strRQmPqT4X2axtm2GvHYsZXRoq4ZKuDeBgE1pWY6TB5eZ57YKZAtepHPc5Pvh7eR35eh1FErA95GDcS7kpFJcv",
  "key10": "MQMLrphXjwswn1Ttj998dMBZaRPkARuWkEemH8GuSc1NAAvpgSr4jFN69dyWNGNbP5rXm7CULVmWrMcLXWp756o",
  "key11": "4F6qBiapyhgRKyEH1AnuVPmmHb6BBCQuPbRL8zmqd9Hb4ju5RNPbWgiqAoPY1YTbN95GtvLNJKqxZNdMQGpaoJDg",
  "key12": "2K6X6e6WZVaktim5AUZxncKgigGhByJKEMatnWJVoabXsF2jy94LQbgadAk75SnyivCatr3ad78ni1XHuY6zXzdZ",
  "key13": "2zbMGgyaYGCbFA5eN2K5pWQGRLvpghMuCSkBxtaDUrLdgj47obAiJWYCaGD3M9YQpkkrrwvhjsAdhv2ifjPsasUV",
  "key14": "2AbxRTiVo9DajVFkp1z5wEgQjTixzZei6w2MBvkMw6DLzGJF8ZpZTkwbgbBYKRHMTaf9UumP3vw57YyaJrw6SmXi",
  "key15": "4iwLAzo82SXAvs9yt3NCzewpr86uYg8iSMzYDrBpci7Rrzbs5D9xsxZZuchStPj5EXgTzgm8qum8xpwe59eor89s",
  "key16": "5U5PWGagrTRnBmpcvpjDJCPnSSw5a7MzK2arjLKePaeGVKWmhGq7gbcD78r1DRM21vp6tcpxrrkME1KjXkVCz2jX",
  "key17": "4gXPYBELQg5Cu3eGTLHtLVmYSXCC183UY9GosAGwTQDa7mN3HPtRYmL5YBsn7rGTxBWJWieDokrrFFVxvEjGu4o8",
  "key18": "3QyZX9XjdzmPHEMAEar6bPoVfJdMx5oEY1hS2MbzGdvTsVzVcZvhQuLBkQbWTabehRtgYkjrhxmtd6ewW8e9d7qF",
  "key19": "3BUUgFSHhTtfchnz9h84rHMPx43i7JrjUbY92yEnFPARmAi4hvfQEYPLsVKTek7dKEBAnsjYf3U88ZGkWdCbhkG2",
  "key20": "3oBAK9mcRGGeCL9WizEyynY94pJoXAJkPWbRW8u6BMmgQrXg4fd4SHbYbcXqfoMQhqWADQCFx3TDwBAY3k6cK8vv",
  "key21": "4bcijWvzX51hcKxEbq2SpF3AwXeBnwDTVsTHqvCe7eMjoTuX3Utqeu4vvyT2ecX5o3TQW1Nn8smzMoD7SBxJtHbZ",
  "key22": "52pbfbZ6fPsLAu4qFhAf9wr2d8mM1iJrTpKTAPPVukYeLV3NNanZ6wnY5QsaDCsouHkNsKwSQmzn2Fsx2E9AQ5PB",
  "key23": "2UyXb3FVVFAMuCKdKv4zXaXznFf1MR3Cidt8cDbvaz7fue1nFWMa2sutgW5zxx3TavwkyurQowSSFhRWzj9yhcw7",
  "key24": "4b9ZzPmbjQYLhYS4z6MHyBEKrC85GfFDZEYxGMPZS15QANSzUvEg4xvShukz9Hz9WDJAG7UkV2L6KgKxbCjcM6DQ",
  "key25": "5uU41hZAnS9TeXwfmqrFrgpH1uwYJxxMSvoqRbmG57KQRpyBcdwUt2gjqFcBbFBZafzG2L7E6KVNNp2oDvApWU5X",
  "key26": "4KyySJeVPLEdRh9t7hCWXr3zNmrcJX96aJd2HMvDZ2m8E1gHdEfJkigy2q6Bv9gLxoVJbyKvTbErBBREJumLMwBb",
  "key27": "3BZnrDP69kpXrP8EWoQMeie81NF2ioyugxSGGrERJmLY6rG11eynTJCrx6L68up3qihnGGeR7buVNicPAneJMYNb",
  "key28": "24WwDwfedkQoX1r5B5m49vQh2tVDv86EjuBJqZ8NDbdistGs7sXxnT8zrRdhMwFMmZDtqTnbE3qM9B7qD3e6f6Wb",
  "key29": "4VNS4RM5tg8FgP2axgzFCNNm2vHU9mwYAf7V4m7eHUYXx9TBtcfxZxxDJoE7oY3fwYsgeLhiheiAqfnqfvEKTHax",
  "key30": "37HxANBZUSAsmJbygUTEiRZytecC4dt2QMTD3zfMsWLUXcAJbJGtMRW93tbhTkNo9KvJSYxtURNLhhkxg6mvd5Tj",
  "key31": "54FfKxptuUFmUp5Jz2CKsTsqHwRBveKJEDGSKinGbPWUiaHdiWjg7gzm1SuJFycopWVLdc5G2si51GtmgzYa2tWm",
  "key32": "EBC6j4pawi6rrZuWEKPq52X8XBY2MZsS6eCC1tSZmkxHz8Gg1Q5N2q5impWJcPXJHd9vWiGvKrAu4oACDktYN9d",
  "key33": "667UiQ7hnYkjBHic9zW3tFkne1USZVGKaiGDv8E2XZs25pciZGQKqaSwij9qRfgVs25rqdtjNne7QPkmTTJhv8ac",
  "key34": "39rGezoD2x8BLbVT93Vh52xp8eGi99mhgFuqN9Reb9L3EvTffkkgjD45fNPYdQSgdufjLwx5meYF3UbimyzuAhZf",
  "key35": "5jEcJzE2VNzpvV1DkHxS1iTMMUHU18aJL11F2rhivyQZ8zwdjUMExuNuRhXosvksTNDw7kutCGYYgoRnyytQepFA",
  "key36": "2jyJKiUZZ9JfERVZPwKTHGYhJGavEFcgFcqijKkPdJPJFpoYzLxbdRHEyJskXCZHsppQFaEedcQThwhUKPmqayGn",
  "key37": "62Sb9f3SffKWSmwtg3oNDR8Y8DCYzjh7Tvi844aTZ4Ni6PaQUFoWzM6i95GL3RPQpHK57GMFYXV2UgZViEb2bQ7B",
  "key38": "29zDjk5x3DESzF2vDsokzhf3gosSoCS1iAnWwKnhscV35jaaPU9bCz7sqEvz2HtsdPKpRmbox1e8F1WMXz174Uw1",
  "key39": "2aa19ZKqV1iyDm28Nn5S8inDZovwqgqk6PHDAqypxiSdfAa4xh2yXATGnZ9NLLgC3hqxnKx61PrbHWFHEJYrVKrG",
  "key40": "2WgjoyCKmiT4qDvxrVMDhQidPVWf3TFwtD3z2ZUiJRsQz2PYPsq8UQY2j6F75SjiwjkLx9mXUmYDX1mo3sm4ZfB4",
  "key41": "3G2QgqR3qUt1rhkiX8wbnXPGkKLPCoB6g2k6rPpjnFa7HoU3NDJrwcgzepwRC1YrZM6rD4MU9R1yZ1x3Z9ZSV8VS",
  "key42": "poQmi6Fxwh4doCDG28hK5rYhgKeqMYRpXVAzGKqawm4uU6gxM2o7wTUwci5MxJkiWHcnVSb3VoSgXVEWcMN55Np",
  "key43": "5YwKkxHemLEkEVai2SrJXeEEBWKToefYnVyNtrFSpKkWWwtBkzb6fgKD1EYTKT1mf76MS5e6kzWvGmLNL6xs8CXN",
  "key44": "5MK4TcPqZC3HhHamdBkJvPk5JxXWhxovJT7znDUgsHfeouPb6dTXLN53rnG9BMStRzV4i5zSSC9u1tsgFCqz6psf",
  "key45": "2xQDJDRzv488cra9UbFNppv8bg6fbvLoQeK7KstkDp2xpRgJfDx1ECd1suTK4EmD6e7jVsKxotgGY3ZfNQhpAhg6",
  "key46": "4wrs5YGaZunmRLgTN7jMdMdatLb4qNyfTEtGe3Vp7SqZvKAaC8KBgmAZGwVThD1Q3ujt2CoHVychw9ZYNPX7oMBQ",
  "key47": "3VhTRRqwNvuCqShDkB9yQhUWqiSbuCoQb4i3e9E2R7ujwy5rp3cZ8xeEj58joukBkwUbBtXS5UopgP2pYbK4WRES"
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
