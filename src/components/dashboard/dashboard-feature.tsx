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
    "4kDbrGfpZMqBY8dKmaPrJSbsqmZVTUGKvqoXXRTBSc38FQ32GUBMAbXeoBa8cwvrSmhHHwnhWBcrKqWpxoqiG14D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "73ki6Ly9p3ZSCBc3uVNnNhR2gAzCKN54tH1E4h9RQhdDGsPMKBYWGtmwPNkrh11SRxVGHLMmwMwkNPDRPqqtP5L",
  "key1": "4YhfnN8Fk27qGoWaXsGt5AGWmveZ9ZYqcPcR6yiy3GJJSLMTeVKGiGq4qu7skC1J2GiwwS55A947FB29uaXT4VZD",
  "key2": "5aejvAeoRFRoCXreP2NqqPnm2TpJzjPGfsEWrG8mJNev1amTTuBW7Lv49UuAM6bYTTZetNf3R12U7u6qrkoU629B",
  "key3": "4sXCxdyDPcevdEipuC4ksJ3zxP3EWzQWcAsF5YiMKyuRNYNJEnrFxTFF2Szg6NGZpJ4XYjReA78tbqs5iocA2peh",
  "key4": "QSKSaQa4YiRHWu71zY1A3rocH7gpp7ay2e3ponajyzKq9T3MQkBXp82LAr6q76SYU3JHg56F3Bs2dE3WekyCBnD",
  "key5": "5E37Uev26ciQRLLbdaBMNZ9XsuRWYXikvvSs5UmrungCMBSbRvFkwS1jJMbKDbRsEyQeGvwJfqARafJQnGygqutt",
  "key6": "27D6V99WJMUsEWziJbUULEDFRkhGH6Dc99ZvsQfkxHuHUUGHuwvfhyXD8Sxy7UxWypQbUvHwyiPZf8fqtaab2xS3",
  "key7": "LFU7p6SuckntYKji5zfPhEBKKpwJ1j2dwZpapKcrDFgMvKwWjtTJxJRU6rTgg4JBWjbtTq5bdSDgL78UaFZMnfa",
  "key8": "56YXmcEGQTvJiFdsxMsgX63wjUWuNBtdFnFeVMBausbZu8xx4PdmWKrm2BYof3JsvuQ66s5Ryhb1LH4emqW7Mqaa",
  "key9": "MHnKWCutPgL1BuamUaDfk8YwCxB76mbY44Hi5b5Pr2f4fc39gv75yGadHuLJs2FBzb7Uo7325E9DRMqpJXtdjoP",
  "key10": "4tm7y8suAnHcB2NYhuiMhqAuZWNXBxnmFJq7X2FEbWwN1544xYSdLVDiNsw8LbUXzMEjWbfUv6Rz4Jxb7tocpHvF",
  "key11": "2XU51cMDxZvqKRxjduFvDFVZLLFzxanR1ygeywKkgNpnXemY7jL58vLCLXw2fyiRGdHbgVhZu3kcPEHv3ko2qdq",
  "key12": "3xvoLmixVgav1ghmAUCHQ31ZRMWsnkPEPTyXeqEFziFs78V1EX6FgmVo4jsqifmpQuhVW18RYgHVDXQbyvHRWCqN",
  "key13": "2K2R8A4kZ64DRToDGPDe67CcsR9cexmDuf2aZUkE3LWbTyYby6odNHGUDLVxsNd6X9H8CNwvAa6EKhi2hj91FXXG",
  "key14": "4NA6EnMsr2WNnbZ98mt9oyijohHUqwgoxuAwygAx3W1CU2KatKFkN1Xgpr3w17A6bfQFagewpigWQyhmVtrhEja2",
  "key15": "5tF4NSovJ7RYvUfC35U7EphZSQ7H5bGhfRbVH2ACRCzKjaXgG5MuGWfSoREALwTTiYfPE7xYsDoxXa5zPouYT2G4",
  "key16": "X6k2rH2XJNMf4psdghvoDHd8uUEKAvymQwAbHxeH2P1uZReqk7MCcqwweeAyszpSsBerhBbtkwofGCT2DTB3GP2",
  "key17": "3BEw9jj6D9Nv6KJCCkD613JHLkr8nTy54WGrTfchUVU9MQvP9pZ2Xn1U5GR4u8fLoooxcSj3VcCfJ98oEvMqjceH",
  "key18": "3Ak8x7tZWNdMGq2nMAoLW2wvmHSUT8PSM4X34v9EUn21zC9XnW7pJKuswxXf7R4PNcUeBNaT3QZSVxNXAVP9MzVh",
  "key19": "ccbsVaPEWeMoxekRrVpMDvojr75P3pEv9LiUq4HMsdhohDxj3w7JHDMPkPM5GGd6AbbLgJv4FznFKDgD1LQzCND",
  "key20": "2PYaUKQP9QJh9zQrMK3eE7WZJRcvgNibnThJRBeJq8cRzfELyjbrStzMmQHLzF6iENaWzMgPAhvq24JRdMt5EUgA",
  "key21": "2nEFM4zQL7XZj1ddFbLWy5TByov5wGn7TqgTDH8kbu5G7v8BWB7V2R17KQ9hz5wwH5Kf9D9pRCd4keUkGkzTTQJo",
  "key22": "3bznFugoRKy4yYcnNZ21cQt8ivdN9WL95nVKBaTStGdaomjy5RDZa8RbDDm2ZZ169LtM45pRSEKXhkMEqNRSkUZJ",
  "key23": "2ErvB6bnyroKGKQbK5V7EU28a661fAXiz9spdeZUgLwUPBV8gUQuKRuaEagHRqhjAWfLcC8UDnKqDaVaP3ngxrzi",
  "key24": "3M1nLMyYvAogM9s7Wg9Lt5xDon1umz58LprAZR72cPDzB3dTBN8j4a3qj2xs4U8RcuZJbkEjx3gf6SzyQni5ZFpE",
  "key25": "cupJgdxUar4ghGZjwbgemj6FUTj5dfbAw93jkJrjvGLMa47wF78AbB3PTURdedMSWfmdUYKgBubc2bWPaLsAUaQ",
  "key26": "mvir44jhxv4pbTYtKGrLLymhNJ8RqCG5BemA3WG2t9xwVqmuF6ZaNGwdjJfZCTeSbTffPmoxiW7gQrRsbNhVp4q",
  "key27": "33xKnpc3avn3xtJPkAsruna33obgnYRQ3TAmQnsUxAXDbxjfKrLndj2zhPw1EGPEBbx3o5Hm1L6nXJfjVCfDfF1c",
  "key28": "453osQci2hcdRmdaL6QGcMhAYCipyJAUutYc8UokxEZgd39S2miQWVfJosLxxgSgcRDWhTYmHqmbZiH3RpLMsWHp",
  "key29": "2vV8UawEdQuxXbWSQ4joPFEiDoKoQSfQV85Qs4DLmzCSbQuix5xd9rMMDS9o1K8sCgoaXsLNqR1oR923qkaSUfvC",
  "key30": "2iV7jRXGGeVyFhxnX8yeprG5qbG4S32cAYV2zFfj61RiSPoZcd6HskDFUERFVzfrAKQ8ysnxXCUu6B4dmQJsciF2",
  "key31": "4zyg7aYrhZMFQJY4RE5AXre65ZjjApSvTdN3EUPDVw4q8NrA2YJE9aFCW1dxcW9D9EuPgySJW6A58MzxihSd2muQ",
  "key32": "5Be8JabVT1QU3zNzNAHuPbpbt5WXod54q49Ho5ezQmcasDCmTFX4T3Ff1GdwKrNx5HVdzvF1EahSc2atKhYBz4wD",
  "key33": "2WyQRRP3DfQNRSaYgzYrBXq88prqVCKtd63XMhMf6eKbGQ1QXY8qf2veR67wQzxeB32JeteSVVomjYhLt6PzT5VB",
  "key34": "56kNwyiM1TuTg6YLrFkiHsJYMwEkdW444MCwqo85gMGfgoYUvgbD9pXu1vao5yr8384mhgVqX73SLDsm7bHsjdvJ",
  "key35": "283xnqNArkQxZff9GxBWK7L6gQJnE3X5ZyuEfCd6atXBgauPrma3b5LS82RHpop9T8MjR79BG8Kgud3oJ3tKMKEL",
  "key36": "5dRsJMAUo8Ws5zyeCxVTS791qFHYiMmDuZZ4zhsvNBPZo5Kkn5FQeyhwfaKjh3qDrYbQV2LF6pb9Zra8ahK7ZJmi",
  "key37": "pfUxCqrdCeNavYhH8FowCQbiGEw8kW5aNpUV7mz4YsKZBw1zeJifhbpiBsY89jgpf3S5LVAMqi3H5cJRSXGQsyc",
  "key38": "5MAEavrkG28t33i4fXzDFbRYhsZQ2HPGp7KQt2xgKUm9P2QAK8gTA3JN3KN5q5r1jmZnLgWN1dGHZYqxoyiu8Fmd",
  "key39": "4GqQrJ4x6PJNktPCyGBHygbSjVpDgn3gstE7zw69g2mwEbvf3FMPiCihC7fpwHEPyYzM6DiFMcszKuWYAvbzAcKT",
  "key40": "4wR9wZZRJeE6hpWY3CLfRce7kcQ8dgJ2zf3Di6pYF22iwtt9jycxkLggkWYDfE4ZCFMiA2QZWcRGDL8HENrGDSMk",
  "key41": "3CYUoZqPw1V41MrNC2sFEP18iQXhifKE8hzVVHzG8JtEmwjHqAkTxZkQsJXp7UBZQQN13xdQTzcDTaUgu9wKsTa",
  "key42": "5MtbgDkRkQWciKWLrE1fJudz4GjNzPjiRJLYXq59zQVmit7hRbN9rENgexhrtiwEGKZxjuoT4VoXnLp5y4HHfqKB",
  "key43": "54XvY4PR6Sw9GbFooCeMne4vJy4AF3mb2jhtX5ER5vMVFsW8bKrPKsijf4F4AJatES6PhjjrqwbxJwxNmPbyjQ3w",
  "key44": "4pe8AQhUcKabHmLwKh7otUNZUnBk1M5Y6xvNwaSyZ8Kxw9qjZRz9hknXCcFmZHkAm7RPPz3ASYZD4Ve3tqHtCxPJ",
  "key45": "5pwKxnyqn4577FECJDKVQmQ6cYAfnjDU6YLCW2YmfpKPczzRa8dtZyMKyC1m9Gj4PPwHEXykTn8h9fSMTNvX3s9j"
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
