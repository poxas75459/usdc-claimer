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
    "3vKhd3GPLKWbf6fk6e4y571B3AE3okArVqRZwZpbCRV9AK1GiRGVoNhUSoUxrZauP9shgmcAsrbEwbCuDGNg5xDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WCqdNuuZUHkKizUhb4RwfC5Dz9XaggnmwqgJbcjiPgS7gjzmZGPCcTy7r8GUTi8vMDywRYrtViZanypyp1gonDr",
  "key1": "z7ppwiM2h65DYec9aS376NwNmK1aLJPzaaUZtfMngZxu5Co3pszzGQ1BBdt1o5Wmnr9fGgN46JjUUugi5mxQpMB",
  "key2": "5bhKDTpNR4rxUenzWpdbLzGM2PuBct1YCACrvqCdGCNxPy4eaAnqNGxwodiaip3tTGk9sch1oB5hgiufFSn1mz7n",
  "key3": "2gwar57jdMifWUjHaFY8YCG8DdcEuHTDzhM8wJiAJzZuEsJxswvH3FubcR8i9ipK8eNTHS5DrucsGPidf4LtLEzA",
  "key4": "5qZds7nCaH5ZKfUVksPUsgAnnZFNScj4uTrXYruZAPAautmZjSYdWL3i76jRTWbMcnnGkqJf1BiEJKx4BchBZbAS",
  "key5": "4XR5yfE6zQHoQREqWAAox2RW5EnuBPECkSxsRPmshvpchtdpw3oR3wLs8af7nXnVQan3bapX34pwvtHJRpCZ46zB",
  "key6": "5F92Tui6nbQ9wQuhTq2Lk3Yx7J4tpx8KGb8vhZPn3DXuCkbxjW2YZbSP6uBtHRx4SpxQ5gKV5wsztX2oyKjJo5Hg",
  "key7": "GexfDz5LKmqTgeSUVEZiv3fQBhBikoX93cGaeoNoLqqvrwz2TrqSxudVxuh7bDtjfgrD22MDtj6xadD3pCUeJBH",
  "key8": "3FMKhqQDF5xUiqiKS8FKLamBhytiStWz4eiuRd39nCijcjY1GCxTuF9VTPR9Zq3yZ3HdxR72VQXaepNg5Tvoycyo",
  "key9": "2LaZCELEWjFH7Vy42fwZ9PbMmEEMCk5kKA5Kzh9FpCxkyLgeFKQ9XcWqYP75KNSsRS3abduMae1KkNYqK8Gxwb1t",
  "key10": "72zBJYrTDmudYZ6nnC3xyQHVUtaDpybP9VbFpMQsEWWR3ns6DjtxgY8wmo9GmdEj8Z4QgbZjP1txfyGzPoNdAxx",
  "key11": "4w6Zt5xB5SskKFpB1vLAwFcthaFeoJoJd9RGHUXJ1pGUKT6QMJF1wW4r4WNYXRioVD2aDgPtBbnRULMMAVhtKLJD",
  "key12": "2zsqg5zhsSqPEGP8Szb5a91fiWDZ6tD7536rmUc24Ygk1ADFwtiQzhwuXSRAYpvwzu6MhMdLgS2jkMKnMptEN5QK",
  "key13": "4f2nyp8xpnK1gLnPhBJnCymwJn7n5EaF1fFcbp2MCX32c8rX1zQD2qzQAjXXxigZAMYht7NEUZCwcKXLJmYTpFRn",
  "key14": "8fRBPmoCLZgcDhfiDsKmRY6xDpAFDbDBZEiBXxZgWKMhWhct62TKxjmuHmoHUSeGZCcoUTvVMzFx1Q11v7Db1Ld",
  "key15": "5QkYVDFZdCiZLeVobEQapc69UqeTRwCg7VPDekk1t1ynWnCjdrQzeVcz7AcfZzNBV3XbSSWi4jyZpgpa7K3G4M49",
  "key16": "v7G3qxxv3nNQgMFy8EvgPrsYnTVosTfAPtt7VQmMvFm2i3514CitJWx3YiS7Pe8s9trT1AL3DKHmqyiyBv8hFyG",
  "key17": "4Bj3uLnRLU5iojZ2yCgnJ6XcDVsyTeTEYNK69N3PY8GAjRTCYpu1maEbyY3EE5zBJacf6ijmkwbmaofbytrj65cS",
  "key18": "3fhrXVCzRU2imrTPh6yKksgEkcQ9hCKXQoBXft9evW6qryXiuYB1FketW1NNPYMj5f6XCD3K2PHe7RB5PfCBbzjy",
  "key19": "5bktLfxCCy9oPQJdHhgDtkrd5vuFJrqUZhTQekbQKTzaUCpFodFCJvXiwV7ySV7H6kcTPmNpyMpSutJGeHa5G8Nh",
  "key20": "2qdzQavyNNWMqkKzyVPMwHRRWsSRpBJSRBRXoESXxmnekuZicTmkXkW2AmeAnBzZKi3TmQeKwzmXGEw8URugXTNg",
  "key21": "2ANs1Gu2zX7DKEDje8grVThLySeEd3X8n6QVojyavDumnm4QMETfeqazdHLmpJqmSXYU3KUPGwX6HMhmKoyf6AHr",
  "key22": "3f6GnqFvHXVzq7tQb3PsMLjHm3Q3s9kCUdbQrVyX2s9vsEK1X4KGvKY7d54hnDdNGu7hzAGuAzBx1mj6aW2ptP6d",
  "key23": "4yxLkySQks57GGhPsQMQvMFNmfffJLTTxivtRJeJ9dtUmiGtF2jpzYuEeFxSRhEwko2cfoGHpfMzUkZEQbSSacuq",
  "key24": "gfbnmXyDuNVDevT3t9C8mEkQyyYCU5qUh1F1U3EtPnQDxrHxtzgy6cB69Uau3B2qQUB93XYDT51wZ7kGtTFqKVV",
  "key25": "2Hk8q9ktJuZgffMJQhwDUYBozEWJsGKHepb4FCsVPdWSpw2azqYDGYZNRLtx4KZTKx8ZzsDRXadCYEptByT3G4zt",
  "key26": "juEFX98XCajVcryovzvwm5XrNjrG3Rp9EqQ1sguR7g25wjC6BoH2oqdvVwhgDgc4pUAW8gbSuAy4gytnauBhftB",
  "key27": "5s723cNpJ5aPkRkrhfNVLJx4Z2oHyiRLeWn7wQaTNhDNthYGRRqD1biCjpXdqL46xge71GeiQjHrKeob67X3aELj",
  "key28": "2vUpq458CK2xZS1Fy4acrHLAvD9Y9NX9dPRw7uGrbwBuPUkHquqckYLM9B5NR14TeHK1pWSPfh2E85kocVeYwQkL",
  "key29": "24KFhJkEX7WnjMz8KKoAN8vnPQrfJ8RpMrGTuw2ao3boQixiQzWRFm37dBJhBAw9s1Vj4B8xAbKXy9NNn4jzitDo",
  "key30": "5KFi1rsAKBJBGu4J25GSDtE7hEmmbbH4B9DTdBGzfZvkKJ4AzT4gUxtn55SNHi8pB4yszdR96e45z93niEBZJPPk",
  "key31": "2AkAyTAyEjxYbHGyWHg2BwK9jMDGVtLf8YyL4TmWcgUmK8X8Hb2Qk2Wgy1JUNHVpFFgETb3iefCrrjvHvv1WgUfA",
  "key32": "3UokRzGY1ZD2FmpW3UdgY9QFbXphn6V24riHRxojxVTBeuN1snFh6PnnANfvajRk57F7XiqSnrnEmYtgcnHCxUSo",
  "key33": "679zD5jpbEDisbc14h1YcNqR7uUYVSnH8YyXTvssoCVX2UqsicvCUJ2SgKAZoYoVYjPmgZVnT5fEyQmFKbeX2RSZ",
  "key34": "3vVxuitLQHCmDYiJJy59MzdZpGELFN958hdCQSqidTfXaoV3sVskdz61mJ47nBvsdvUMxpxdjfwTpPiGwGVBgCvX",
  "key35": "2q7wTBT1YLwmSPstj7iA8jaH99YBG65h8hgGnHxxkZqCr33UXLmoV2FbgKTLTDHkckensT5aco9xiTYFBGjvm8M1",
  "key36": "2tQR46o8rcikx4yHCBeRXmmQmrm6n5rGTcKsRHiwcHAA5WavvnpXUMB7iuYb532pVzQpXH1ocTQrM76dw82pZq6X",
  "key37": "5BP8tCxpBHroy2iXBoqWyBfXvoQyCaKji9dqSb1S6L6KschYcKoMhsxGHK9eBfnsFn4fBJQfZbmmKTVuk3LaH7sm",
  "key38": "pM4tb555DwTRvceMJeDwoss6f6M1wmwaSsKzTuxyACufGVmtP9AZTVeWX3aRzbihfnK5ZGm4izYUaP2wea4Jvx2",
  "key39": "2bM1QGrrmGvhMEtMeEeaT7FwL7X58Sc134mFb73t5oVpDGt8mimPvvu6yTCrZjJnGBjKkDw585NTjhVV8Mjim4d4",
  "key40": "5j8coHS4EVkzNe4B7YrC8o6Ajbk1aJHWX6DyWGeEC4477uiHx7c7XEeXYthRKWC1bnggRo147zwaLkJA5SS497Fz",
  "key41": "48nBxqhkpBkzvkNQ7stM1pGq26VCbtkaemfDKjEhFScrTRGcdLUqRUXfA2KTc2SW3sPh31kqiFWBYcmZ8KVnsXqe",
  "key42": "2Dq4uPeghCP3UwmkHyg68T9FfXiiKwAQPQR8G49pEBQ5wXzSkFSUavqHKLX33iDz3fATEfkaU6FgpfACWZLF6vGN",
  "key43": "22BNb1nW88YKidsCN1kBGzyMvsYstXkKNs2cN8WotQuJcsfiJYyf7LBAKfa2S3M6UPfpDJ7bvXH5Xh9EJfu8k6Tj",
  "key44": "2LfQfZanHcEdhqY9ioGZvmXmxAoNfujgLiNSbvP5qRFJNp2WWTfNLXPY1QdZXPStEEQpmgfPCByVoydR5rPaDDdP",
  "key45": "4jmjwSn8RL94dUp3T332fngM2kcMmD1NhdKdAppiuQuk9atB5CnQfADEpM9xRyRYCgAM1UYsead8A3e1Nu7gowZc",
  "key46": "5Shpq9iwv9empKpDggcwabXBmfsXKyLfdaeD7QNp6AT1Ad8ehaoUrdy3Hung69fFFKHoZVsDfmtgfpKZnidinGtH",
  "key47": "4erjLs2t7TCcCNgfMLZ64MSup1pLeQxSgEuQ5VpvaKYAREPASPAcXbeKmQAgDLPj3kd6rBEMPJRxEPzUVudK1VEK",
  "key48": "2cztJXMigpmnefV1BxniYUBXd7cDLato2eBNnymsumrtcV3ytDsvq4SGtKVJXNkKbByurygoabpwpGD3LYSComo6"
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
