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
    "2UbJAPPzNaqUYn7Tj3DMja6kP7Mz6pqeA1qMWQo2E9kkdDKCUvZ31gQf2knbyLoLm6LfMxe9PkdnFxemZZW81Vi5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QKVVbp4KqsrVhXU4EWc2fPEAM94R3FCvPiRDWryzzoopCXrafQ1sa3qeqBShq2K3bfazKpugqzoV3CRzgJYfUrB",
  "key1": "52qhKnb4TSbVDxnVgxSr3TCDgHhEFXao1icMN9vr4c3HCnWeaoUJ6idKqWyoL427H4xVoQv3hmkuTXfLYLBNZor8",
  "key2": "2aD8PMtkdcLyuPAUC7aH2tx5wZ3YaX4Q1JEYPiRboY6g5rwJZkYyha9ZG8G6L763jx3VJD2zsFBBAh9FE9pQCb58",
  "key3": "5TShTdsokVaeuYxEuFtAV7xzhc4uJLDEJTpEJ6XczmZ6nTZNE4ArxffAukQawgppFGfPTu92vZwyU1bRryun9bTT",
  "key4": "5NK1qtuNFHvwGxw2oyG3zwrTXi2jpmSGTWHLMLAzPJeGs2e17hb22MgHQvecM2UiECZD5iRHdPx92AqaF7nvRjh2",
  "key5": "2dRou6XvwsXpkTUgncMMPf5m4g6p4dFg2vpiPbGHrXgQYLnzCDoHvUkwsmgAttQV4Exe9rmwgAJhTrupZ38sceVR",
  "key6": "4XnVxMHiUXAotTi12HNXDnEbwrrysioBw33Uu486rDaaqEZjQaWtnKB9DSuzTpE6kYsGcusoNfjwPRfjWbKSvFEt",
  "key7": "xpHuW63etoMPMsXJUJZMAkBxpJHVaGTki2pEu8ypBeJkPUFx3qjxip4uUAuDLuYkpp1ncYgY76d6GKvkbcAL51w",
  "key8": "5ABFtnZ6Nwb9746nbPh5v7Nv1tuq9ZSydYcGJVcTZkznqm4S9T2QwaA65CwyYz1yLzKHq5fyWVeveNS5G5Ri5CPY",
  "key9": "eoTYFnp7wQh8KJLMzBS8DgQXkbKEcj27daU8rKNuQzPenKrMRkqcTfY2Hrrz7kvYNaNB5DkVjdEmJpKXt8WbNx3",
  "key10": "GueQ5krR5YVwgzsY1w9mVKmKWsu2d9rS987b8FHr3pd8JSEXoSR6xRYN1H8eoUMDBUc3Lb4gQtzN67s3Cb6iUFU",
  "key11": "4pkVsydciTMSYsu1MzyyQ1uGowcnT4U91KBH9KfS66jNbAUS54mXZK5o8yPTDL8cC7ZEcFqkruWqKhNBuvsePZU1",
  "key12": "Fp8kLFynhXYV94rXGg9JoqvbrLvbxBNzs8EqpAT1wYC3rxvfzJGyiL3p8jTm3u2xq8i3UmwqR93CrGWtbWHUKWh",
  "key13": "2owWc19oz4GVt7M4a9MHBLzoHkJ7QMdaDjmvZvT1w5ZyYk9X3Lvus2Jg2rxWktNvSM5CCrU8CX49wQBWeQxJjeZ2",
  "key14": "64u3JzbWrVB8vf4DXzg1fZugnDSrWoHgU3c4bgGMBGdULMJFjLhaEJpV6RTXnHPmtsj4Li36JRmv24mxx94FrN4K",
  "key15": "3vCYPiNJSYRDHp24wH6YgqsRMS4GoF5YT48xZ3sWFDkCEx3U5FaCppGeW4wqQ3cggMBrHGzYeKmxWwxWZv3zoHFw",
  "key16": "3JPdj7t7s7jv3RqjxybeDTWvRezCUqB2TbH5i892usr5hf4YH5EbZpbfMjibg2fLGukeaovwwngPhdL5h3Qe6Cg6",
  "key17": "2jedUX3om5XmCpKGd1emvrW9o286419rkGD2b8Uy7uQCL4LYvBQJbtMJTy2sr8aUM1F93e3SaSvZGBfduitXx7Zt",
  "key18": "twUc4U7fiRKsngKfqiL8nJzF8HtZeDG73GYiRNLubzWbuqiVyi68jRPXMDHYJDiPs2zHQ4iYWkRKFERdNTXCyGX",
  "key19": "2HdjLMfTLsSi7xacCTyrTYjvME4TaCfbyy7u2METXpoqpQQFQ7yzh4WiX36eHgfmFECEzcdurCb2ad4h2mRiQGCa",
  "key20": "3gFTZt7Q5C73N1LfHA1sTzyoGeVhWNsgu4ixdZc6MK6QM7BBrCxaa6w1hLLYM96f1deMfQJZwwPhL4Z7fWUAia71",
  "key21": "fFM5xjR2X9PXx3Ny5hpwDVVHHXqb8Y6tmoQBFvYCkLZsEfeRn7sf9VBN7qGZZsf8y4x4NsjyCJ1TPAmztHNs4jo",
  "key22": "6195asQz9wZhDFmr4xjsiVSQRL3Wmu1oVApv8gD31Zfgy2BLybDWGQHwp3Zhbo6DQCokGZsHvU1U6js9UfDhDtCm",
  "key23": "3gBzjhZw7ycwRpNbs3Ve34xEyLLASYV8KuSSiAe5qtQQmuDrqWUpFQ8KCFzShSbmUV2Ppf2CNSdRA8CJM2k4HpxS",
  "key24": "5yffcnMysqFw4Kh8KHYiqRQT9bH8qatmPfiVQYvduJoJGfuPKrDvwLaXScDdjeTTx4yWrQcfPWPSo3bFveRiwqLC",
  "key25": "3zGTibjrbkkze77MnE4FsBQ7DkTbRSNtCH3a4gRbaqpCZd4BwQneJm1QRKazUDeFNQy1eG5VP4eoFkiudZpCJg1P",
  "key26": "2tRbrYV2V1k67NejgSvoMX7UfkARBpJZxV7hYXyiDau1S3frKqgQrozLr1BquXf5ynfuGLYS6kCQHvoMDFE3HaV7",
  "key27": "5sWQAkUaHvqDRmMzxfQea8iHXXwsBNmtDZJGK7b7evaaWm6qGnKn6qnP7u8ppn7wEWJkrd16d8cMU2fpq9oGAaKd",
  "key28": "MckuiR6ZLhqcPtKDWPN7EzjcnpwEHYtxQ7C9sLK9tCA2runAY2ERC77hHpyQUJQveuu6Y8RUcXMkDNF6vEnv6iR",
  "key29": "2tvuaWkYqKbE5fJczH3HZtk7q5iAFv8SbmLTFjLy8a2Y74ZCFb2Vio8ewaRHKMVQHQSo7a5jytFXpyzk6TYpwVqQ",
  "key30": "63YoJ2QSo8DfkhmeBjH9DwqpVdk1PbtjnY2Wf4vJMF1WbjHXBpR3SQVez1RTQcUYitkMM9UVB5J42m4p3twXq3De",
  "key31": "549wxkeYTgiiXEPGaYNU2YNvpJHhiLBp8f6k2NUDcSCUqSB8hrMfEiM5QL5wGMGDvndLrZ9AuAXYkko1J6nZ9EeY",
  "key32": "4EHZViSPVtSWEYFoxVvhZDKzPeFwMTwHMzqWZy2xRTanz4ieFUpp1MVXPsDmuL7QwCk44mihA5HbsvyART1KiUW1",
  "key33": "5p7EaajwyLkRuv3pvu7BJhDukV1yDytGzhGwzxNjShT8KQ8q91jLERKERDEoFpHcChTsn7mrE9pwKKM6zTMb1fHG",
  "key34": "m5XoRHWMErAnuYuu4NdbkMR1P3CL1MmTDJTx3sPqbGRXMgfQ2qgVg5Brh3EadxMeZZuRpbxLbNvCV3roQs4wjCp",
  "key35": "uaW4LYjV1VMdm78nFmk9cQMkz9K7LpZAPwpM4DCaQdRQvd6TeaFBkiyZ7zVZPuWbhFZPiHuCTJNvKSjXyjuP7zn"
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
