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
    "4Ufrn6z4aexP5jZ7Lr53ZJTVT6UXS1YUMCCifCvuu3n4xajZ4EwYpp8DB9HyB5ExjCJt8X4WUgsnr1By2Jsdq7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bf7Vc7Jvg8XbpUVkzhWdvLaZKQe82CKNx2R7x89xz78LV5iJbg3dPAoCk2DNp1RB19urCnJfFzuiyS7J9a1gsLv",
  "key1": "4VqS3FyKP6eMb4rpn3fWZGnE93B3grbGHR1ZegcmzufLdRpACkjXGSrZvA1Gt1FyTon847EocoTXbGmra8VLhwb2",
  "key2": "EhtJ8xN5FGhvS6Df3MqByQKoGVtFHgnsAGxDr8bHhEXNEf7qXNt9jTNVwwmy2NtFFatCp4rtpbjYU8mAscAC5Mk",
  "key3": "FPFJUAvcCV6jFAZhq5hxWSjHmqkPspPiPpLAvfhMBeLPiNm3Zf2C3QGKVHyP8ZtPC5swWsmwUJMxo4maLDYf9Pz",
  "key4": "4X7qwH5FVVQDqGk4dKTEfwsPzrSwAVhUriQRYsmqSFEqXqk3e2L9sDPD5cZf4FjGCGt3NMTvaeX3UXtrPHJ7HdVf",
  "key5": "61m4wPqomdyqp5HL1M8kHjz5j6QabHtdexzkY8sMXGSYF98DhnBXnBdQWWVWP1jv8sBw3RABo4mRMv6RBL9N9Pg8",
  "key6": "66xQtTzM9LGYNf3Mm2ft8tLLQz9mEGc3HUPKuFKb1NsiUHNiVFfdHevMCEqWsHXCk9caUUjd5FMkbezpCQzCNQsc",
  "key7": "5fTDRYzFZTw71faKZWW6TPM7pfrgnG1tnKkugFrMukyRap8HQMFWCFE58CyXA4sD8QfbjcivxmufW2oor6aBbd8V",
  "key8": "2RucPU3yjcH1Gqz7oNLwJ5EMT6HgC2zsBMy1XXqy7qcbipPdTxGtdHGQ4sMnbjNrgT3nDtWTv2zyXQFsJ8uCwBJh",
  "key9": "wj3pJqFHKPW8NPgpxrLStYnrwgTLHMwEJyUiXXnuQ2E18sG2krS5p3DUpn5eKsLo26esojNAAXc1rZKgDt6wpn3",
  "key10": "2nHEBtUJcf7cLeQ2kaQiBJXfs8M27C5BZLkmfH5WfCFvwNxFyaZEyFVEdLMKj2xxBBhR9eFYVKXPNYtrciGWAGa3",
  "key11": "2iNB9a2Rg3PxNiiLCAnCQSr3M2ERdWgT5SjjVQHsiyQZ8ryiqK9VGrJasJEYLoX23uS88ZaXENPerScKmHSvajCB",
  "key12": "4PnCuBwSujbTnM9rW2MBiHu8BXUjxjjrTrZUgmpKZP3D5S2xtY6rX67zYYR6Kbc8ja6Fk9NzTVkPixLac5iJAVgK",
  "key13": "5rSQgaf8y4xCx6DnteMYUjs4LauSBqpvq4AcFykczcmWF3iC1v941XX49Pzrg9DzUm4dRcbxwjDcXwPrFbtZzbez",
  "key14": "f7GKttSPGY9fM4r5CwtAtPSwbxorkC8KippkJx3B2w4gAUzYYfVnXqvzyVG1weJomAZsDg3SQL1wTyJsLp9gSzo",
  "key15": "5rkwianuPVaqoZJGAHTrXHxPzUhhRKAmqefKVkDcNjdcqFjxmWNpZLnkWopkhbW2yWv1mYhuQinGbfyeH2BJNjko",
  "key16": "5RhFE3i88D1y1ErKVFbffQhSnJXpijccxYQw7n6GNhUf7mUrbdWiN9RHhaxeMnFbaxHvUJ5qeB1T8tdgghXV1jYy",
  "key17": "38cgnUcA7EogynBviLks2JVegdqNzePSVUygvqDKkrkCY2QGwVwPXGU2ZjVgVUSRL6K2QoJUu3SeVRGFVYNQHVuc",
  "key18": "3Rjqn7AXGEKaTJ4vSnDaewHCWPkSQ7VLfjXFQSC4KkNd3C9mLH9DMFVC5SRL1C9wCQYrfFbnUZz1xs29UgCUzZ1V",
  "key19": "3BTUgwKmXvtmqr3MFSUM2qGvo1J62MfuMUzgDGSyZMBoLHb4nrnNE8Y5FMrBgZeHUHF7dcA3jWiRaEj5R5CggAee",
  "key20": "5YbUEGegSqmfbCAb3zE8sLDkWPW8eVKHWkVDEYu5GpH7nxeSdu1eBJu8J8aTS4pyTRNi3WbkrAsVfzxSo6jHPk9D",
  "key21": "ssbETasXkaYpWmJxf5QGaUPCD5EvHgfRWi3oDfY2pEDTBeh7vreewm6KrD4dQQ2Zk23evuSYWaArxNeecGq7uqa",
  "key22": "2ijP6Lnz31Fa6TsPnq9oEyzvTXm5c73WTVMxQ2eNMFMU36kVZn94nq4EEzQAvxRKHUNSHw1QeuVuBfzsxn2T71qF",
  "key23": "4aY5bp9B8YD4BEGsu2pqzoeWDQxRJA6ssvzimzcweeychc2mKSLpgmFVj7mYXWVQQeVjvpYcrxVjFpzDwqVqrKuq",
  "key24": "3Ez82AgcHczrrKwBDXBYLPoESyPnvNKdiab1uoABsW7wUJccBMMufeukxp9o788aXZnMcYFUZox8TYwDsEfw272c",
  "key25": "uL3PELXXQexR7gxVWdfQ4u8PTBs5ZUukNmLeRVP3yRbZDQWcVNbmXoostNssLJgzruVn9N3ZtzsucCexQhSvCjJ",
  "key26": "3Xd9Af3riAGoGusxKWCSeZRGwsDifURSpCkM9uyqKeKiMqoMPV6o5Qg2R3QnpUXxgYDEm8uUMFuERf1AC9atKFER",
  "key27": "yk8TvYyz6WWufpiySHw2LibxwGh6tuTEP6aZdup7WfSSsjFsa3pCVFGuqPUGBRRBjRxwibnc1Csqg3h1thjLAh5",
  "key28": "U3xqGSc25EJt9yctmNBwgpjquK4CmkBCSAh12ZH5DcbtvDogTVuSqLu6fcfzwDxPxJYJHvKZDhQ2E6ZQA7ZpceY",
  "key29": "4vERnSL4tFPK4zzZMuqETbXze9vgKtJKob8Nq368Dim1pUoKb2mhHaP8abG5XYKCejuCTzUBRR9TDVrS5DXca4z9",
  "key30": "BTSbJywuEQTU821PCodERXbuUvSgvjG1UBjdNScLBiwYKghHLHVowUJw78tUbZueGKkGgRyXxz7DDVxVbY4AwXU",
  "key31": "4LoPWpMoEs5LwtcVNUDQikUsN6vD2ZrXdNAW7y2C8CETMCQ1bVirD1Q6AZQ33wkn5dzR1BJExHVHS8UbpPc9wZHJ",
  "key32": "4mT5NDWvsRGWLXhM7un2FBgWFhkJ7eaDkyP3SfvCj7yCUxQbwLAm2vrKX9639VVaHuVEEoTiP3ZriamULGSkd7wa",
  "key33": "2J86EXw8CEx9ftSe7wx7tYNLnqgy9GfZxEkQoyTsDjEtoWVsYF72n2Muev5ZBiPu8KyfaeLSsi3MVHkoLobpxc3i"
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
