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
    "2WWTQx3yDcPmTZcBLEzmF866gK4eYGFLbztffhUVHyNDCpcay1nLZi1wKWr8PktLmhtrbXJdgviB3YpcCuES74tF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qMosfgvPyBaESbE2N2RWVVKVSfXkLm8mdyLfnxk9UBGe7a11wNveYUR1ye1NA5ATvA9baiEPiiujtzxY5H12AoJ",
  "key1": "45bvFt7gJiC4BeMFPvcXf1cMGtkYxvDvh6rffCnS95e5sibub8LhemjNuA6TY7Jxuy8zb9sFviMzmPn8fpCpoKgN",
  "key2": "2KZcpjTQPjjVCanKA5QERPCVCa4UhETWB7NmCewtCj316N8ZwjgW1v58To8N44pW42YoCN9w62zCMRz5oQwLwqc6",
  "key3": "2Ye6bcRgYG6utq6kFCJb9szYPyEvfZXxtMptpToG4THyGoSamaeoJsWR3xhoQN124tjPYFPF4LJBPrjVeQV2pALG",
  "key4": "2aySBGp9zwYLY9Wf3RHrWeFh26sQmsnaRnfURX7Lkq4fT1fxjFBsAXAfbJMVxvGAz8aAbN6QNDe2nkm41nWexdXD",
  "key5": "KgeFKmmh2TWkPskXEvTM7p8UsGSzF9mLLrPk81mSZRGUA6iVqiHY4neGesaiac8qQzBtWeDhsiWjCpxT96atfgN",
  "key6": "5AbfvLHArSLy4Vr4HYwj1h5HrG1LniGx8a3FxvChJ3Y558k1FioYvRCVTcBiSnMLeMsXwHdpodhKUtaoMHQX9SBg",
  "key7": "2ukquu8Wc7Tuk9BkKAQcunFfr64qScwX3yLjNTYPWQajnBcZaaYS9E8WRrsdvVAJTS1qXQdbp6ZgPdoJwywGASNV",
  "key8": "3TNi6pdGjm4n8Ev4EqM2uCsGC6JXqdP9tVJZnWscFxBHdY73xQ4mWPx3QQe38AsWhV1riX4UmCS8zQ4VF7KPs7mY",
  "key9": "4XCZ9scB86TNiNBT9b3FuhjzBsBQwhhrjx13MTJ9DDREvKy8fVKd3DnZUFUWtL3aoYLnxF5U8bqvJfKTgX59makn",
  "key10": "48186Cf7ZaE4jbYDy5TqVX3XVvM9vHBf4Gz8Rkox7QDY7Dt5SwGGLpGHg2tqno4ZupRNjTDLTHA1JFTPo4gymUF5",
  "key11": "511HKXhEZG2W72NsRtQbTwdmCBCtzCmuaD2UTCQpeL1iv5utqnpqCfbdexKH7tKG13LGLwsFg23psWYr9oL2eoFq",
  "key12": "5QhX9cdzLvp69aD9VJGybz77Y97fTCykAcq2eKU942bXidNoFpXvwKC5UMsYvNorgtEBgC6cyGg5MqkThj61oANC",
  "key13": "3ZjrW5ht4zW3oSrx9NEBo3zwEYxGrEjC4AgK4mbwxqq4JiMJqbsUHsZRGMawtLLJCQEEbjxrdDURdbPkRQiT8hJ4",
  "key14": "5e9XNjfVm77sbGY5pVzpkBQTUnUpzpzvdFa14bXXDuYDUzy8zJXRKBNtQCG48wEc1LF2TMyQrBXdjeHz1pNbFvzk",
  "key15": "3X2eeTPeDLNPf8o3eKaTiKTxKZAn3EgaV8tTCYvWLG2RDcxG2GLFVVheKbXTZsh8aL8VVgEbQ9ttcwBXxVdJTnTf",
  "key16": "3UdTQRtbbExUcwB28ZTet4Y62vpn5cMKxuCs3srGVXdrP6hTtqymp6CvYJAZbcHCUA37XCa9cJ2UxN3tpF3fyQtC",
  "key17": "4ZXaMfs6nvvXNzpHP3J9ayQKZPQcsLvVNsFLe2JT8WSxTBiJeGzAv7xf9rB4qwADhkSwd561Q4GaL7hTDjtcVv2B",
  "key18": "ULVSpirZrNQqNr4DtWEV8k5pNwMbgntqw6aKSWXJnzy4ebUr3Yjm4uBaFqxkHdZ9aJft1wT5FnQytM652Dz8ZUn",
  "key19": "3Cz4ckVVHXSEU5xWNGWUHkneFDHM45SBWKG2tNDuUfj8AB4mYYqHMSPK556GYfWhcMSP1uxGHGfUFArGjir818kR",
  "key20": "67KMquYvcLAvFeVeASNiZmZfyc8fcwMNceHTF3fFE8NkAkjvVJzZMrDrwKEyK4SFtSkoDp34xZgGycyDgkHsJSC5",
  "key21": "4k1tzpAq8dqeza6Ds4QTSgz6Wf7mvMr2zsC51KfSAtttUhqm8Tyjwnhi2bdEtXPKVB2miZ14YA7fXT8uQiyuaH2z",
  "key22": "2mvXvsGyjBaMG5ir17DVPZDX1QB6NBzKoUcZ6H1M2fhc9tLXcRxRYXETVvkHyJfA8hUpjPijJgU8sAjyVo9xAyM7",
  "key23": "4Yqa9nztFCxruqnJcsWHGAFbi616SuarirzdgfRb2EoarjNGew97LCkTPKsHZVay5jvq9c7FcEb15AQjnJPJpdHj",
  "key24": "46dFLJLSygNALY6E83VKQcdSs7g6BDG6JjYg8aPSLYPpbFmqZPaf5NfuEcqtKuv5u7ZRq9AdR2RueuM8m6kLm1rW",
  "key25": "51NHEaq7mYTLkcRSLspkRT2kamvZyB7g3eJBgWAmx5UfCc5T7tf3ur3ia8Ez4Yg4pegnNGtC1TQ7LdTVwBpgprR5",
  "key26": "NuggpHiupFf58gN9HhdwwyQAGR9JumBN8yFpkZkFL8dKdqyRdgPZEcTAWWVABeDcFq8tytgXKVfbqVu6Nk7zkSd",
  "key27": "21XcdxGvAVW43bM7BZi3YKyebHaBKUeLPXF8bWVv2PmkGddYwTLCyEB2AhxwVbMyDukXePQYpUW5xa6Epixo3JmJ",
  "key28": "5SvQSunGqeAEuyxy8W2DWo6TRAdF8ZEpAUM54oy5P1cFiLGgJwPrkMcaPTx5KBUzkpY8WEs5R7GrVV98FsYWcH7J",
  "key29": "KN63o3YbtBUPD7KTQUoY6F5q1JQEeDwh2GBVVJ6w1kHaYJAqrJtMR1tH52iMnj7RFBTtBudDkHcFjUPFtxkmfz1",
  "key30": "3ZpsHZSPhaFTMSLa2uaDaWu1zVBXCfwXnchY6C1uemCJpQGCH88GgHvHGv6ZeyHufbdSNWi9dDq4kJ2WiuC7hSgp",
  "key31": "3LjnwRD4nwTdEB4t8BGTX6v8eCoWC5ebuwvp8PJjg328ewV1UYbmQKmCyXMy7pDKTzSNrRJrXWrETpSJmPJ29U61",
  "key32": "4jgnj6SU7b6LLFsJyjd71rAgVxYJYnFjHAMJm9W87fgJpRnxmKedjQCJeCfm2t8NrTSKUJDTojvNgcqPsXmTpjQq",
  "key33": "tCoDBokzzZL4QJNdXxaytSxoU8AqRsr1wZTjtnzpZtAkBDBGKXGZbdXWqmpYggsSVY8bzotgsqvzufRZ1BbVXqW",
  "key34": "2ginGGaeGGf96C8eX4W7tgz67uLEHWQD9ukDXRMbbk2JoTqLEz3EJzbUnifyyyYrUrm7BHGhi3GqmJtL6NBr7dbj",
  "key35": "Dx1imDsxqKF2vgpJA4yMKfmZgkG5wfuU5eHHX7UxpXJkz9M78ssPorCLdyZR5741AzCgbaeDrbUqniab3Y5CThG",
  "key36": "4qXqZN3p2zdXTxU3PeUzUagGjH8dEc8RNcgKBvnVgLPSKjkF8faQvonhx11ak32mSo1nu9ed8BKXeV7nVVmhiuvU",
  "key37": "66zpzrxPZcQpwoYKNAwSKG27ohrnKaaPTvcZb5e8jzQ38SBHh2tFakZF9YS3J3Qh1RiWS8aTtfd5dHjxvZS3156q",
  "key38": "4x8udUgLRgs6axKAMxDEp4oZavN7magfXm5sB1tXxKehDQ49KZKQPQMzyK3aUeyqq9j5o2NRHC4Je6ebU79nKVBx",
  "key39": "53h2wbiVZ2VWepvMEX3PnB7VAqShCkt1fZqDyw9rLJ6rmB3Th49xnSZbmDnvRymWrYBq3uEy7FDnk4E4V4MK5eq7"
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
