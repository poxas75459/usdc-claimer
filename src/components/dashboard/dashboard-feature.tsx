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
    "3jfV1EhsRmToRHijbfFHMGiRf4ofP5fqGxBKuVdhqbPGmBwtKSJhc1MTB5wnveXPw5oFenhqf1kwMjVaZwf62Vfh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yGFpqeNXqJ2uXMaHouxiFVwM2gx3Gfa21tmUooN8znFyB683te5KpiQxLYwx7zMMXniQf4HPhQRNK8FTWEYw93Q",
  "key1": "MgQysFmwpkkMvovHSNakTHWYaFGN5nwAa4gr14uE5HYfhvxew19uR9C44SbBX7o3REJB2YhQpvnh6StyMEcHLVp",
  "key2": "5iS2697vGyZ2xtMgLRBcdJkZHp7iLjFZVkT9TD83FqCMb3UB5vsPbHE4t9zUMcStMihtAQAV6h3gFdfE2jTdT2Rb",
  "key3": "5F4XzGWzThAPC2kniFMYz4iNEkjP5aydEqZk2db5npGgpdAat2Cpp3ofGbc6g4ghyL3hSueAEAJ3mrLiBox8aVqB",
  "key4": "4X7wBgssmYU6CVQNC63aQxEqFnRfnAaNRu1WwnnRVaUq5rZ3GXkHeqwwYCmpZrrd9P2ZLY53CKZQrEEXcQLdkVDr",
  "key5": "QVDLVFjzLFFCjN9Z6K5Jtk7S8MEYN9FvpC2zkj8NvGU7M9Q9cLBDzh3etutLEvPikkrUQoB96Kj5gztSqtS7sM7",
  "key6": "4Epqo73P8oDXkM8gf2zTuNtrNGLkWTBYyyjCH2AYFZcApQLiwJoYsXDaFWat65C5aJ8K1K7g78ENQLrS3ReKvnFY",
  "key7": "5ZfkGuPj6NKcWiyvB8y9xWFb1zz4PS7K7NYpZ3LkwidU6DfUzqXFDhaT7VkDesVKvyqGn5jA311XagpF53rZ2u2E",
  "key8": "27d88GyNJyaE86gghNh69WvydEtn92uvzuTavxtkdeztXePsst8yAkmSaSUybXmrmiT5u7nmMiScAFFowgq5Z7Va",
  "key9": "2CrifRNdcT46vAsAYB3x86kE6bREdxu2iNavsJvRcdmMXuXtj41HTyrJk5XWDDyp87LJpToTikf8Q3bqP75HQwhe",
  "key10": "2yxsxVYqvotggPfnpStgLDQZRhtuLwbcj8wX9mbL3HhQDpyxNg3hFYd7GQRGKMdAMQE5w24gVfr5z77mnrkn4udU",
  "key11": "5WweYcZ1aixKyv2pPUEMbmny1SXdJF4oEyKXN4z3KYKfEQmU7bx3uUhTAR8ggF2qn76T2C3GGUSFSo5VntxKFhci",
  "key12": "3pGTkW8uTisNuStR9mkG1cAYxKf6oaKevQeCQtvGV3yEaoP7cPphEeiQUo5ts1RS8iB7snjAvf8wRop6jQqEF8aw",
  "key13": "3gjbJ6GFUAgQEwrCEt43SA4cYBWAD17K9cLdThxYv6cJMHeWCBqQHKoheeRq6Y4opChX1yCXf1RsREEX9HdubBrH",
  "key14": "21CVFjnom55dzWuTbw3hMLKn5bCmY7JLkDBj1hV3XYEB2fbkcsVcQYZUxygebvqjU5thYY8U9TfHy3oWf6Xzok2c",
  "key15": "2odi7mHiRXxkMH2J51WtXxjWiCtqcPAJgwBEhHzwSGMu3w5LmnvvdmY16nE3wswtAn2k6HeDgNUYVgTPTe5VtkVs",
  "key16": "igLxw1zUKPrHt8JZHUFwkgkP5pZjhENsxp4oaqezhxZvGfXLF7jdHsC9AqFbbwqLC21HMBLVxvxmqb21UZLQsY3",
  "key17": "5aPx75PwyMxeVjZwBsVHp11ygZCwiZb6Eb6AVTm1huzRKVEL4SA1BSDCPm7YCCUXCyXTGZuuqQto3dQjQdicF9VN",
  "key18": "3V5PCt31sZTTk8qAKv6u5GNe38zMzvZPYGj4dLE8QCVJAmscNWeqRLW6wPo92VRuRLvg8dv1QqmpfmFvUkrx4ubG",
  "key19": "3oz8txGqb6eUxXmMsC4NNyyy6vi3ueLeFpcp31qELeGdf2uQxYB6hZYDo1i3VUNi6D7namGFuaFmHXsipLWDHBqZ",
  "key20": "5Ku5DvgRar5M14srRekcgteNkMXfFw9vmzRxHveh4GUxVuFwxYgqniKSGFCuWLcsrXom8Y8Vxma67myAqnVHRgiC",
  "key21": "2ve6Z4mHSp3GjyR3aBqu3FhREXqDy9as696SdLjqsjhZdLMNH2JXZ1a1vZoGbzuZphTURhFk7vHbQmfd1GRYP1aH",
  "key22": "8ZcJNiPpfUf47oQnsab4jwZ1g1wKrAaAmxPUJGicBfYZyK5W732x9kQmD2B9DwDjoevUAapLV7EWpASotWT9uQw",
  "key23": "22asUhGHWRDAvErwSMpMHDygZo3WiNQydiT2aYxUeqWfYJjBe9wf8GmwZYmZP9dxW9iitNxYy3e68ACXG4YWwC98",
  "key24": "28dbmhB46SVBCbnqd1SWJe1DvbDXPeqbZVbhhL8CirmtZ4FPSACZrUphEUz66ZS6RLZFYLCVWg8NayK6ER84jaSt",
  "key25": "42R5wxAuqZEeufZ9vohA2vi5CDpp7FhEfsngTTiw4DCZ7qAzHCGNb4MJMug6YY4QdGr72ZmDUuJ6yaitrzXrhL8y",
  "key26": "5XTj5LEjG9BDg8QhuxoRqnDokKiiacJdTjeLcHRA73td2ZS2UjtPVV2oHs5exo8yGRzKnY2phgKzcZA4jCTf8ytB",
  "key27": "iMNJPc9urrvkUQd17iRhAZecr4eS3jg492iE1Mag4FBfTizSvFBqbugU5Fg59d1ntfrFLgGeZXgK1wPNyFmoWrv",
  "key28": "5pHbnFbRqnAkmMdthfZ8CfJhLar4byhoffpfowJ1Mxn85yBGrdr9fsoZPfkKwPDkpPzPBCHtpiH3o5itJ3LppVBx",
  "key29": "2THqDQ9ksvKnrRA9G6BEZTVgRw9AWcE1VE6bVteEjTeJMRcSdAh5uoBXgV4WjmGY4HQ6YwNs3tLYE1TfdEBfgSo7",
  "key30": "27n5GjgEPrCLAzjJcUY55GX32ow3mx79v7ZxWi213MJTWUyPwZEfEDURxZTaTYAN12rMPY629gSyfWgLXLSDKtCz",
  "key31": "8TvRRwPFU6XC4AZVwdufSktb2QcDvSyWV9QyPzTpoowPzNrUR3NUCPXkUJrJ5xQfRUTfWFL41r7K6J7RbRSZS1A",
  "key32": "4rpufjFgbZEkVxzsbW6J9yUzyjad8hf43ds63QGUVq2q7x6EGqJbxkAzsWFUAXDCAsqq9rpp29j2ojMSYWYW6ijb",
  "key33": "4uSXUYE4f41YaNUGyhtuBamjLRmppTtXG7JJCkj4H7ndMPixC64FifrXcY7VBcitXVoypryGaSTz3rgH8nAXtwRS",
  "key34": "3hLUY4Ww67vB5BG7tkRSGMY3Hrb2sysPecF9pmDyTGqW8E16huqMAgyHpH26eApoSoTXLdGZDvJJ74iiFe4RFbPf",
  "key35": "2qq5gXEXBHgnqDBqqJTC9UARMiNp8eodSp9GTN9uLbTJQghyNawW8koGeUqZoiUV6CMLT18oajWBwCuN8WHBxitd",
  "key36": "3XNjASqQwhR9e7MtCerEPyhP3SmoyXGueccFQoTfC7Dk8qDEySKR7tqVTh3shfN4Ncoqwo5LWxFYqA8PJjzVCXE2",
  "key37": "5Bf2kyqnhqWW6MHKBPgGxS8HEHbo8nkiQBZVnMSgwdQVP3GXXuBt7sZK3wNTpGaniSijCVEvpYkgJemtvQ3b6eDm",
  "key38": "4fxTPnFgfBKncPmBkkiMoDVc651yUzfRGi7L5g7cLLXE8wimPxzTn9hLZwc4BPjXTeXZABaDVQtG5So48t9qRukD",
  "key39": "rdyXxf8UW7GxXvkKbTWKabVeJFJ84drbh3pkhYuVHxCDojGX7wxhuJaz2VR6p1L4EsahMCHjZH3haWXTxJPURA5",
  "key40": "3PCo2oEaqWoSAeE2z7X3zAgPyFqA1snWTDpUCrXsfrVfn6deynjok2czUbzRffq8qnGR6XtSxvna8VNEHi5HH4yH",
  "key41": "7haEaWe11r4EfiyK8bxeV2YXXcPJD6HvkvDd29jjMbrwhQdd8S3XfCLURRkh7EBFzMUm2yUhQsjv3V8scUeKRoc",
  "key42": "5znTwGp4kzf8EeV4QiCoyQ1WEbqUGPEUnkJ8gpHGakbzakHQo3VaLHYFU26PtaTu8n3PaR5CRiBDWVFeJzcdQnx4",
  "key43": "mQU4NYk6nYv4cSvYLUsjgYsBQKMpZAQR2hUaDBMVAD2p6i4myrtAGi8i6L1wmhkUyJ8DHKeRBxW3X5RqTff8jeh",
  "key44": "4mminMzzUWxVnHXpjJh4N9cjL7DqpGiuJNSh6VducuFkh3Y35NBKe9dS9meNvkymAtzfgVEzkSc3XxWaNVytnKx1",
  "key45": "3LaH9uTUo9yuu1ffuNFjzcsY8pXCQ3H8fphPf1a2tNEmpHth51hRtAH7W2RrnkxNYfNGoY4Sa438sNNmVcz8sPAi",
  "key46": "4nkcLShB4b2zYPvwGqxZBFc2xJMP51y7VsoCg9sHAqu2FZM3EdZokzMwuMNsLnc5btCzeaXkbNVX6UJf7Gv5jbFs"
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
