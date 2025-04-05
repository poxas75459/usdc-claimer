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
    "5Zm5MsqXJqubrRu4srXYcnvfFnWzt8piMjdSasg42YrNZAkXKBw8NLrB9hvuDAUgU6KPgRoKV69EBkXvcLzaV7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26cJL6Mpt6Hn9xCWCWP2BojDXw7cYfBD5ihmzCvnQ717oiFix8KZmjjP7VpbB9vjTDjtqgDRM1jsFLswdprwHJS1",
  "key1": "5Ydbh83FFiNarMraVsbKZ5V2KHDBFPXfGyC4ACBn2Er8Q1EsGcvtk3auLmAkPPjtidj4PLzWKG5Sp1pggmLCVagP",
  "key2": "26xZ9KFqFwX72YLHgjXyLheXYH3MyTM2hrekEqBxtuh336yLYdk6WHnRhSHoDsDVDXvtpE5RyeEBRAe54Mqa6Jy3",
  "key3": "o69oLVRFrMnHGUwwLJDPAiFPWDPpYveE1XfwWiUsYkTezx2MyqUkw1f17tWJ1NcSbLqaxMzCirWgYbSscHTbKUz",
  "key4": "5jHknRuSEv3SeCKWxsehpopTvonwkYRp6bcU4Lhv7cbY1YV2RJjYZYK5GChCEL3Dj1KaouVMw9wmUwRbDdbK3xjw",
  "key5": "2HLPkUWQhAW44Em1JUWUWQNrTCHZSrwtBBMCSxY3sTv6TrwtVUT6WfTFLGCqNph8JScrprbpoaviFuqBPxcewENr",
  "key6": "4NN9UWCYCnSK4aHXavCw7YfgMzKeDXnqUeDhcXcGoThqwG7oHye8cQixXuHhQrP1Gnk86U6h2RkSE2E4CDZzv75E",
  "key7": "4tb2zutiEsATg5ai7TrPwbqYNwFzKjFYnt5TqcURQMXfUB3kShdiz8vzUxAA5TXNGpJCV9CdmgtAwRfAMh3fG1pm",
  "key8": "43R38ZBeLxmP7JxUrPaoJCeAKqFyAgtdzTrsJRe5tVa2exLY2wVnafDMe9H4uXfZFtzwuGmwVYP1GtGCj42mopf3",
  "key9": "3ChdRMS7syNADovquLguHizAF9wvw9JJMhefZRqBSxuchdYxeLFG1UL783sUNjY3ppmpez8w3vuHn8t3VVxULx5L",
  "key10": "5PyuNRAKDmin5NjwchM8Egc8roPndQUjztzrpxz5N4D3hVBEgNmZvM8rjpoUewMPLGJ2GVumvmdRUkRN917aTqVZ",
  "key11": "2RzJnx6kdHhDiLiNZoc2dwQmKSUuVaWDqTCLq2N1ivUhMXkpx24xPkYiCobiCYhqsV4KmMt6UMqo8doQ9qAWERTg",
  "key12": "61imUNej9UBxmXhtdYirRYEcvooRPpt1qF6bi8xxuwbRsCB1hAe1t7wBtbcFzvoSNEKJVzPbfNPdDNS5W8pxNM3Z",
  "key13": "3nuG8NAzAgUBNHLUkn8tbrbNMMTbHu7PrWmfVZdqCUTURq4Uaczx9E7CMY5r4aaQqCUQiBifLhpki53uMkksWXfh",
  "key14": "65LZFKknT9HkjNXja61mjP69wyFHAzsbuVDtdzkDUu5PCPxRs3twgypMz14XmdyVhsh5xX8Mr7CFq1uKocLeVcSh",
  "key15": "3BCjAyHFNTQG5NytWLtML9Z8p66d117aKqhrTMA56gB8KDRw1B8Etqm68jnc7iXrsp9SecJyJZZckTaUknzdSgLM",
  "key16": "wdwHMEoBPEgQs7yUhhxn5qWhdtY15vAaDUoNaXkT4X1R9GKBXnN133KLau7orZjRcG3FgZWXky9FLyzR9uMr5yX",
  "key17": "2bsEe5CcZwRribdqGt5ZJiPXzfEzT8v4PZGPeiT6jHfgDRsUYFDWLEvR2C9LKMVoWp9G3LP4uABSCANcBxVV3rAe",
  "key18": "44jzKPaMvS78DfkgraH1i8XLnbjgUDDLmHLXRTMQmeAdpc6EPfhoKj9Buojvf9T6kcKKzFo2W5wuidohqgYT5UAA",
  "key19": "33h8QDtuoqUCCpa38hGVkt5LznHMyQ8B2j9zCa44UbQV9iQhjWzZjRxaQNMkC9oyMbDhZoFF3XCormueE9qrQDFH",
  "key20": "5izvMGqzG6Uf9NzEF4EUxMoQF9VGv1BQuHgYHVKAfa4akzi8NFqWFAejjgRnVorz6fHmeQUPMgGiNdUjLJKg62rB",
  "key21": "53KDqJUjo5TADBdznmDxn3xrXm6pH5BQ6mPUxQm9yaBwB2ej2uRp3W9RXtJAH8szYMve3oDSKVdyyWEYd3WHiyC6",
  "key22": "4rqRzD9MDxisF2PLrYVR4CGsxT6dDwwhJpHDcD9o3oWBVpSNxfE39sGjJyit5TiQgj7c55fJ3G5Y3V6PshX7dQaK",
  "key23": "5WzqmQv1TaMZhXw9PF3sEwPFN8L2T3F5yEH8QDesaLdx4P5xtFcEuUofwgKTv6AJ67fCJMu5bipS8dtctyBpPokv",
  "key24": "5BeHWP4jjjwqC2umPyMTrNXjQQosbytjTNCMZo4ztJXjDUJLUGa9en42maMrPD2uSrQSBXvbXVGFK2nyTvAhCWdU",
  "key25": "2KbwMXnmbDKW3vpyPv1wYa5ZGVU8fqrcA4ZdCVcXSJUngJYA22FmzU2X9gV6WeT9XafBykc2aPyjco8YfjjugTse",
  "key26": "5yUvHGsaevTZgN85GhodMxeSvyKhopmmUgnnotkpYRKE5sxgd5BEuvU8J3BJ1LMBnHxRJcEKAdRwCBrrnuYaJj6H",
  "key27": "8v6f8fChAJDkH3Z9XQXjGiyZtGKAMqYCciD9ePLdnqaYfGJt5GqaVJdpZZS8pTZLsB9cy5qVCbDGkz9USV79YvK",
  "key28": "2iQWzfcn4twXXgb7KL6cCh3V3ANdMkZkKG7HMz3ZKijPurNtBXhYKQLnJ381dWBpbAUT7ZBw2piJibzaYLfWHyTo",
  "key29": "43sZVdgfx4p5YjUSFvRzXrNgpD4M8ojhFqPAfAaRhzNSaH591qW5cyXAvFHSG3rR8XVemtYtzgQ26VtfJupB8HFo",
  "key30": "3i8g2hsDe36CzF4EEoQoTh3XQctGkpXuuUa4LfffeTUgyMSyeoUHSFBUi91kttn4WpHdbdVKdoSxRRwPeTA6vsZ2",
  "key31": "47DWcdvunJtxAp6CdJjJ7a2ukmtXY5FVC1bhrhUTxqPgWf5VtTF2WJrVy9LQtQ967G3c7YHdX12hFFyGcoK7Bm8A",
  "key32": "EnojGgm6ALTsDiwuYr47rZCxnNSBuorm9s13aK8iUoSexZrjhwdx6XhLVjAb48uR22M8bUFDNYoZh9G93rnJHq4",
  "key33": "bCGDYZWWy679ZxM8KStUBE4X35Z1emF2WTJocDEWpuPRhZEKvHFw1fnBKjBGbeVNgeHNuSPE4dffJWamDHFS9cF",
  "key34": "39dwuqimdbkXYvbdodtb3w6EMsN6QNSYjdgjmdkQeB2AhRUTxGQJNaxeZ77BFENjSzrPoGuakzPSJUvy1GrsCTzi",
  "key35": "5mRfNwn1GTCvJjgkH8HsZ731nBkqTx9bG5HByutRemoE6YS3SxiUNTweK8umnwXrV96Us3ywv7MuQZ5hhJUySRno",
  "key36": "3212ngYkv9H6rYoDpk8oNxEEwxVvyDsB83KocJE71Wdv2QaAzUvPDz9xaJCLy5QFdorV2SbSCxxUFLyfp9cvRAgw",
  "key37": "4KPXcTtFHPsRSx3CUvdgao85sFT7BiRirt9v6m5YBw4XadHVBQio3Vt22bDSDyGTsqjs4gRu2kPQ2raTEZKmEnY2",
  "key38": "2XZxQYPrwQ3hxqqfBUK8A39qFnf7yxtZtcCWuVaReT6CQzhbswssuaSsuY6u1biwNr5qC86nWcU8Tj7nu9qVU6Nz",
  "key39": "ojWy4Zq7ZpKdG7ASVubWMTxyJL4EQjBUdsVB7S2R2ik2TLPPy86SpQywtKPPkhdheDtaDWUz6He1uQNWL2x29L9",
  "key40": "5kFzaBaFy6aAjCCptpnJD38DKpsc1d6dUZWPr5fQrhKW1wPxrEq9ncqmm18qxRXBYCyc6uAqhUDW4Fsr3PfnJo3b"
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
