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
    "2ZHPYcTaiJ78ymnPxQcPD8kAZ3ttUmfTdZAnsYZ4pzR9ZFMmSR99tXRGKu482AP3uQTVVCt24KDF91g3BwmENP6h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iqULpGuMSjx2e3Z9qcL5tjDMbJDydJnN1xfXZctHJbzsmcApU2d1aXm41HNQUVGqh1tbDNZXX6VbrxtzFreTQVJ",
  "key1": "4XPkKRNpUJJmTxRQSvb1PHBvLo1XXHP1czvfC8EoLfigMTEjpojs2uFpkFQFcLeogLPHvtQvGT1ajnDQXczpUgVp",
  "key2": "444xKbEA5KYuNW8vPwFGurxNey4rP5Pyt85wpgah6qR6g7mLUM5naDw9RghUWbY4Z1rPyUjwBuWfwS1mTgyE5MVy",
  "key3": "2GWgD1HPBWThxfkB6K2VANxh7UQSF6uimSb51xadQR94XugtrQfuoYoLuQhb3uogEP8MjrCES74TA2AKbrkmLP8N",
  "key4": "3dqZ7BY7Zpb28eTvzToswMz9U8YjB5kYLxBTeyMRfPCaL3FVoYXsUSvx6bGQCFqBPdKZBuZGZZVJipec9AhfLS6j",
  "key5": "5bT3e4cirbDeM6nvPbxPRiiG1e4HvAKHxXTnwAGFVh3VEgDhhGZGxXGUReFATeVrwHXSjWEXiJuPc9WjvN41dJvg",
  "key6": "K7no7W3tURk3QJqL8nybuAzxTfrPbdFYPoyw6wERqXHEiZMV6KepCHCcHGx5uTzxYKxMX9Ra2sjDxnTngQKiWhf",
  "key7": "4MVYcGmFEpuMNsLuZ1oBz9kjGtchYfw23atPMLsKREmo4LBszFjkwbav7XGH8yrcKuMaLUAzrHQ9sJGywrXg5r3a",
  "key8": "2RGoD3UG5BYsJKovDtJo7RRdeEMreGYDBLjvyNjbkYWcZDoAsswfP2x2QoqSGHjyzukgW5CgqA3qckjxwXeTnRum",
  "key9": "4WKyuzkcXNi5Kpjp2sueh5TPKSreWWtjtHWwKD8GgomnCk5Cf8K3iSRVQkW6k54V4gDiREMsE1Qi9PsWHBZEEfER",
  "key10": "5Rh9yGhcG9yLerRLTJW63d7y5GkPyi9MHAryDCzJvpJ3KxNkF919HjvrdmEnjL55Apffu6suSVGk4aSxkEFEnTA5",
  "key11": "2RxnwuWKK5oxbx75HX2DXEMgsouBpEmPFKgDcEke3ScV77PgUNRwBaxCh1MUw8Gui798hd5BFdi7oYr9uEmUvuEu",
  "key12": "4gJYPYE3Vf7xyGckcvARXh4ASHHTGQvRtinyKLodr2pBL47n7Xdiqe6BfwqJB7EXwD8972mnWeRL6bA8sE7VAebH",
  "key13": "4fQ2kBVTvnsVFZxjhhdYdBLWEZ5RGugopSLUbvTLFWqFdQbw3sn913wCdmJmQqpPAJzgZvqRQaY9cvabh7MNgnvg",
  "key14": "2sutqnTBvYmYzcH1Dyexv5rB8anbwMZsYcdio6MTfXD7ukor1kNUrDDq3RpiJ5v6s1iApAG6FQHUqCRmwvaZmmZs",
  "key15": "P8ACVpwS6bAt3YKcM1pEhcJx5Yq1PxN7JVQUBempgjvkQy7vXzSPLM9vPPnpbFoZhtjMM4TW6crSMpY9BCfCRwN",
  "key16": "37D4jARLGYafaMDxjaKg7nHypXNVrzMcDPVdwynuBL8uUKiHWBQCc8JhuzqWVKvTn1t9csGfRiBU8cKLMoYqiYEX",
  "key17": "3FpETzXXm9xjRBUzQh661oRB1HnBCX3w9eSE1vr1jxpfoaZCSNXx1r9363Nn9qYCWvCK8WVTWrT9znMLBLhnJQGB",
  "key18": "2iXXxUR2AXr9vcs71yThyrRzAEAb7C359kRpLZNStQpmkN5EXe582wJ4sCxxdWPyfTPwnWoaojKNPggubNhLwgzW",
  "key19": "5khuszPL595Pw3otRdpwWaznikM4oqxwWYpVggFjabnLSeeQVTfYChkrSLhPhasJn7wwSCc7KsfdVF5NJLxgwpNR",
  "key20": "hAx7iMwKnnJGNeiVETUCVhq9mcuTGHeExyuAvHK54VnvzBRoAqRorrS1seVBeMTCAyNiaqkYhra7ZrHUVyxAH2z",
  "key21": "2K8gvUxCK5kra3gU86UhUFNvoV9dapuYv46uT83ojGpuo7hj8eRudwNFWq4ghbw2C5VJAJYaECyycDKjsgCCG4on",
  "key22": "2gbuHn4ETVxovysW4LJXEM4ZsMb4KRMJhKTf8ZQHqvYpeo56q7djqofcdyVphz9yeRv9Zbkypg4XpouDavzPePy3",
  "key23": "3eusGdFKLX1xEJ3ZiFeEDTBitCap8RButZ8Fpz2qtZ5xNmJSRzf95VhXkrexQ8hby3eJLHJm7Zmo1hcHj1zm4sCW",
  "key24": "5GjDfDYb2xaPLdYD81bn82SV5h1ZM3SZcdRspcEDikjbWh2Qq2AfGKg1KuuhY66ggG7PXWE6ePnfR5qjkaWETYCV",
  "key25": "4AQk4e4jHv1MrEQQgZekGRknXQFoipvspCyqQEHxmieq2MkznmPfHMkRWX2hehYuqmf9f6gi6yCHQbzyzaMCPcrV",
  "key26": "gCRpKVLVk8vBM8q6gnK6Peti1zq2eRk5hkLJfcQahH3yxf4L2JWZdhS6TBLMkFVam7BGbRABaVHovoqqBmGQAUz",
  "key27": "3piZDBRs4kn3mGfrorksDRdHgXrhuLVctfvq62qffcszfcuF287rNUMN1KvgbhVyzTRy51F6N79eqpk5N5iHgErv",
  "key28": "4gSqNmWo5mQ7kipUSiD7E1XfHWGTEYhVBXBDJKawCURcJGZtcMnWUCmwPu2Sr2T5sa69oVM47F3nFQAQoYVErBcr",
  "key29": "2rkcmkkqGUozFsrAgaZ14AWfb3xYyLQj92QnBVv7DPfxEeM5mCH1Se4nZeUK3dawaQAgkYDSQXUepD79gZGUG7cB",
  "key30": "Aqueba4GEqCnpuyZufXJejwqHEinpPfV5m7iQZh7dqkdc1wrYfoBXkSKKK3UeYVFVRNb5bSncmZbssgxvrJ3mXz",
  "key31": "4Duqm5LGnxvHWAppdWUm3RgS43ujQG3QRu2iBgZxykdz1kZkkso553hEPbQDsLY53zKzkEFUWJjojaqPJcqZu6eE",
  "key32": "4mpKUkbSkusKwa6ZsE92JuK6iY3Z9i8JP7ysNbDH659hXGZ19Dmpn2iAos874gh6q8XUEV84wLBwPwiLM9Vt2trZ",
  "key33": "4DGN6vBxnWx4vcwoieYDNZKz1HUeLfqag6qxgJwQLLyQP5SBSVaLuXETyhNaJM8mxN9NWxpJJKgXJTQgxYvMQk62",
  "key34": "3EQ2zQRmvs32FMULwyydThzyrJ9NhvavWdbdLoQjy38MeY9vPpiRgbjydgViXAzVwVGFwPkWzmM46Y3sXekVrqLX",
  "key35": "3Jp6jCNqUinxhAEduqNi5CY4qn31Sd2WJvgS3k8qyb12WRYwzSigCqK7prbxsDoXFLPL8tDdEe6dPRje4WiK1TcP",
  "key36": "5y3oCSychdbGwNuLHp3jK2KSw5TBX76zz7CVaxtWXcXdnHVw8jP7tmCRQDxUMriWJ3sUMnTRXYtDucPjgfs3AyHh",
  "key37": "2aBb4Lyb2ggYkKRtEACsqvHR6ueiwrzvWBHrpxm5c1whWtczPhQ8iNyD5D8wTDG1A49GuQhpcgyUdjNDqC38CdC9",
  "key38": "U3qVKDMuxw6dXUQBxi9wupKq58DtuEKx9KgnByqiAW44J8DRpisHuXikV8SNxNTVpUq2kvFx7r3arsUMTvx86Zy"
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
