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
    "dfCuY2EXwzE1kD4iX476pCvkbiKhePxwMNUh5FedpuVCUF2TpsYf1qKpFYx5aNQdCQdHn8X8gKT3USQqLXFot5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q7mYV6GydaodYJEAgauG7Uxupm5fCv6kRgYdLLknNDnRePAiRy6BWRkeQStSBXDbd4CWYrRH99wUxsNmRgBeqRE",
  "key1": "3aey3SXgqMGv3ABPJyNR3CBzvNGcAc9uYgLDuWs6wfkjPNTr8uHyKuMyLYq3KxXLqr1QNJPEsqqdYwgueJPDAWaN",
  "key2": "3kMvUBeuErWQihJN5Nj2Dmqd6byfzD3x2tpGZJWxx59f5SBQWRr8an92wtjQ68kF7UYWFc8qwvLCapjyaxiHfwsX",
  "key3": "7P5USPRWX8NXE7uVQbU5N9FNY3DGYgX381P26fNGuvRfLF2zpNWtuQKLUY9nQnQtgakm2PSf1eXi3ezhkeLP81k",
  "key4": "5WzJnqmQbx7mopMJiwnUJhLp94jsR5jBQ1fenpBRDiXJj83E8jzNegq5yhXqAs7V2ZioBWTBGQ274ubMByv1WxgW",
  "key5": "5y7RyWWWfei1JQnZvoUBbeUT1zcnwkSMwynzUMmSU8KxUDTZb9YEoEz22XgjVGFbqEcyNGew8H3MJ5ye57xCAFUR",
  "key6": "46x9pryyj2wWfeg15jTRwxhB5EWq9S5hpDircYQc81suLpsj4QsdotyNjHneTHvXycmfw37quFhsTpMpTacJXzBy",
  "key7": "2X5cjZhFFLWnPwsZscdG7jViiVcYfzX79xTu7HMpSBc2qWqtuDbzZKP6pxC4rArtQq4AZhUwKsKmZGNHfEbGXqsQ",
  "key8": "52Zbk2NAZKKoVbNENw3EnQVE4NfcxhppTueCgP5FFJLdwugzBqkkUKrk5F8pHcdijUvzdxSCHzmuq79CEdRhAfjA",
  "key9": "4t4FcMrBEBUPZpzsG3RF4kw3BbG2446azaWpvJ42Jz1CdPEvLBu9ujbcY6KfsUgH6GRHpwQcYDsBqgKivHrPouz8",
  "key10": "3Mtyu7a9UjzyrTGnXYnoTXC4cNdWGKRAmtRGVcg9cNCFyzBPxcmMdRVi99WkwuCtZ3GL3xZNLQ7vxTZ7ewNjojwe",
  "key11": "N9ABGgTKF2BteEr2gN6ERnjMTFkrBn3JC8Jgf6VCyF1VsaTyZPMjiWEqqxDRq1qi1gBmfLMdx4in7ZSzNmhVchS",
  "key12": "3ziEZqCgTCEr99sse4QrKG8i7YXwYCpHMBcf6fDuNUhabrK1oMTunvpKCfAwsLHWoJGkrsEJQq92r2rsHk81wmo4",
  "key13": "65iJnhVTVYJKzj75phdppf4QFgctrTSezum7U7qBKeJQJr1Bo8gVQkiRZp9FVAJoA2JiwzjLDzVAFmyLmypE6fhb",
  "key14": "e9189hNNNqPBjLBbjEy8dSmPR6emkcA8bgcqRV9AmyrGof3c5oXi3CcKpTKuLqwdbMTc54eHLyytdeT6aanwmuR",
  "key15": "48aE2CZbVkcUid8TzDaBJ6XaDs4CSFZ69itfYbBVcZG8sihqQJNXdPR1wr6QpubCtoRM4kchTMBfEy2PngvuCHxm",
  "key16": "7A51HKVEkJi72FnckNRmgCawG5uSS2Q78EWECXZEQ6dAAoHJbdAtWNSBf7WmJTATb6oct8XmBZT1GS5PiJTvhx4",
  "key17": "2Kef2Qrt4PGZY4oqnQE5jgu8hjHrLZhAkgzYqduKmfbp6H2FVXo7cSCFqyXiaZRfK3t3yZk2kc9E4Cna61qdcxNV",
  "key18": "iV3xjvmwhaU1DSHKGVqwagher1RF4kDJfgnxAfuNqz1YWnhWFwpDzex2FXTMbiiCXxzsNHsmJf8BTowPkfrZwb1",
  "key19": "54gDgcwoJq7h1Er6mEt94D4ohBGAzmEgEovaJKnf24Ub8TSfikSaQTB7RaPShggNU2hJc27T9Fy6dZD8qERrwmoC",
  "key20": "2hpXvr6m34ZuEVgavRdCA4QiYtE2bepkMQsBQDuGgfWDndazpV5Wp6cMUid5xSDhTkJh2LKUu2NscGXgE2AJZHA2",
  "key21": "3biEyAm1YitEhrRg6JVAiV2f3Vy2NnWWoqibyn212F6ADJy4KhQqEEAaq2qPX7FWcTFCzoSK3sXgYfuzwwByyRTd",
  "key22": "27LgSUcdnoe2h39f8WD46wCG191K8j8HNA6oYz7YV89h8u4RKNLRRVYLXnMEJGa7d7CN9N7umJAr4WQs3dW3qeuc",
  "key23": "yHCVa9jeZT3EH4J8sZVJPG8q3QjxfvetHcLL292CQZHtV6h35naz4Wixkot1TTCd9dDrKi5khfHE3ooUB9FuTfX",
  "key24": "zB5azZQpCjK9WonA1rnf9CmUUXstRndPAX8huPNM4XeXAzRJ8mSVaxwc71eXK9jVgvwXenGHnCvgURXMbH6kZuh",
  "key25": "3hkEFRNoDKnkYa9vB1c1vGL6suPkgUkEUpHqCRsbXo8DpB4P5kePa1btC98ga9BnB7ZE2vL9JoPPrw5cAWEdmDes",
  "key26": "5ppE4mebiKNFbsAfz3KAvJKFrdCpkUkcfPDDDPbMMGJ85rBccX6fHbaeQZicvbBHMDUXNXy2GpbXJ8WbXqbUgr5i",
  "key27": "42SXppiii9rRnBdYbF9XsR5pzpiV14YRw1EFXpKNqC7gUjZoXsCMEg5HbtNncrCv1dwoFsRfXL9brzeZ6o5GALc3",
  "key28": "F1khuC6q67StGxfz5BVEefDiJHf5jBQGakwAEZawdnM8nrmnZoWvq32Wp1ECLVBPBwop1huFGAR5uxT3eyn2Rk1",
  "key29": "4PY1nyPhhnhjbP9iR3mDQXMJ9Bj9Y3HyJRbuzJiVWBcPU4m3eyG3J6Pzmm2EyFFCTypZUqWVUs8QnDn25ETy7rH5",
  "key30": "483Jr5nYQyf1CajWuamzB6FDQ6a6kuwu7S5Frivx9EC34dKRPwqa2wRUxnBsmMwNF3y6NNEP9nBsq28D3Anvpqja",
  "key31": "2uU2cHCav6m6MDrK99avzRYfqmQfgoehrrS3MqsEv5wXfWwJCdN5Y669K7F2ypHRW1ra25mbiZTZW7VtfFRr7sSJ",
  "key32": "4q14QXYaTB6L86JLDu9xZpQCMPvarof4daemqqtCuV1CNDLhCBBrVyH2PVtVPpZj4MD5xxyVjBXd6EEEHvu76DVG",
  "key33": "4toBZu7JzRn8tLZrWqqkWmEV4bXZFqRKwZMgG8BPJJ9dpvw7aXJa9QaPpS6aXMXkDEH9SjYs4zDsgiiNzQzpekq5",
  "key34": "5kd7nAg6PaDX5YvSvycctReFYLv5GZHugNesV49bSwmHzZNJqe6BUFbgCFiEyto39JJpA9FZoqQpAcNQQdQ19bS5",
  "key35": "2Yz64DL26pXixSfMtxjATzf4SGA2p87fKorc4GvgWuiiSRuts4LJyU1HnxEjpUL6AnKAZA56ShcMQhrCGaBgV67e",
  "key36": "4SLUp1f5rmqbcyZ6R5vbMimZNojZgaTfeLyiqAzA5dhxq9H5Gnxaz4rHqoA3hQCXjitGU7ng419Ehmk7VTTWWVNP",
  "key37": "44qgrkcGVCdHR5R4krCSiHC9LhNUwSkcfsXRKu2dZSibt4UQjAP8GjH784VmbJytz33vFNooPiR56cByHa8NHjms",
  "key38": "HxWzR5LWwGMV2KTCqeLAxT4Yc3Wm4G4VXhSejKKwdD5xYLPr2DJbuU8Gx9NfXt8o6SaxCAwvQjBPGoqe35Lbw9j",
  "key39": "3TEgGgYh1LNSjftzsU8Zrykk52d73xu5DQVaigYgyDroAPuDDASpswNAGiK5fWmspRKrNJ2GpSHW7EgtCC9aqsbT",
  "key40": "4e3sAWyk4DSagVypbkuASXawmfBnaBjDZ4sDhAYLm2gXyXS1nUu9MfSYfmJpRXDCSj2HX1RY7z64KpXmYpWCV1pC",
  "key41": "52hBB6Cz62ZTtfMTM8iSRqV1P8ctgs5D3gEf34y23kz5hQW77DaKvZd3kHRshbmJnE4P6779VYrP61yRdbDaBjKj",
  "key42": "37ABMq2suMhjpRL92Tef9A7GhpmdENftsZuPm4iMdGmVMoax8dYaz3xsdEZmV1aV5nyny3ufqNg6okHSmVTNiNzx",
  "key43": "33wEu2cq3gRZwYC917CLto1VHQYaoRNGgfw1sFMTTtQv5NJQjLNdpEZXSQ4eVpqqxs5vp4wLMnBNbEJDpVQbBpzN",
  "key44": "35fukHAe1anokrBWWMusYBHoRrgr7NqHrXdQ59XW2CTn9NbdsjZcq3KrKRptMQkEC8GE5jWA79dvcUJy8CyCyvSv",
  "key45": "2U3LGovfa7RvvnBaxvyvozGWiob1wf5GvvhHtJHJiC1WtC3g874dP2VvGDHxvEt1K9vkGuLnHfXDrDPrdqPW22RA",
  "key46": "4a9HQH5sEbruXU9HLiY7hqukyESPRi51VeM1NcUjDMSiNc73TLrst8ewYQ1KpkK9Bj9A32iJNjL6Tf2kavjTb1DK",
  "key47": "3sou6j1WjPh5fv3XDgPZknHtKok7P9oMpc4RWnhNcRs6VSo8m9vnkXfZFqaxXYkmhVp4UuDnpRA7VLfBNNHZhXN5",
  "key48": "2gTYpjWtQRr6gYvsFs4U7BvAqNTorvGtoNjWqi9dzP9LcvqBbKUyfq699unWhTx1j2E4FKUxXjiXh4mJQS9TJgRk",
  "key49": "p2YP24A8Sep9w6HUXFrvcoRjmNGd5T8pmqoSMoPkfmYL68ogt2xnRdP7BAnXVrLsurrDJMzsfxGMw7KZpjmBxWw"
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
