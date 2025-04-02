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
    "2aG1oUcAha4r45SNpB9u8LfJ6im759R7ww5x3ch79sVNzo6sAVBgrJVA6FHVucghMoQbJshNQ2cBFCKePFF5a3iU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fV4erV91VJ3rA2ZZo7UAa3jtBPzamCU6NwrwRzNMT4jDPmrTYC4iEWUzaRz8n6ov74kfZvAouTEikprj9v5cDdG",
  "key1": "S6jj3ziCy7hr9MDHWQpoN5EczTPmjrDCyLLeLDnxoCuy9YJ2BP3q7ujpNLYM19pCsd2WiqJ5HFMkzJGhAJxwLXj",
  "key2": "2R7MeDNe4eLMenKVWt4zL2T8o217cduHZiQ35V3thPgfEmRNZrkD98HyXyyzq5ZEJxek5JvKdBCMSKeFp4tUNPyV",
  "key3": "AFeZ2gztjUs9xyqG2BmXjBRHqhqLwRLAwketH2DUeQsh5SLHEC8kkLLm3aKDJrW6wGcsGczdQgrvnKJsNpGYBxF",
  "key4": "38BWh2szc5VBZvnBTJMSwA9bScJp2hwkRaDt88rDfpNSRq6ehrLND7zgQboumGKueWH4mirkyeu2Dz98XPZ7T2T",
  "key5": "53F1bvqGbjyH8KhfPE71DfFoZHdr6rLWsAadiup6MZygdUnuNNotgvwaa1FJ3sq7RE3yLu6X8FaRDuH6xReQ97ce",
  "key6": "ukqExCBSuaXAdDrgGbrUKVeEM1XNUt5bdkDQSczGF3GRjv5nNshonPQ3vXvoK57hrt5Et3vHP9wYKF8neoqEG4h",
  "key7": "21jWAgjcj89z1dCFggwH4De62n6CLhirepETSaAS87ZnBAFq6gNj84qEcDQUWfxLEPt3iEJ38UHiHiTCDATi9Y1p",
  "key8": "2nFGrzeV5yY55UDboFN6ixc9XBCwcPbjScBDYCbcqxGoojaM74haHDxkPbvqmBAWco9BiP2pBULF7aDNMAVkNJ73",
  "key9": "4eUYneJDGeWjBzryyaTnmZFAkLq8pmUYLRjVDQjysTd9hvPMj8bUAGBjq2z4V2XNsN6nm43WhAgqedyUwifMGgYs",
  "key10": "3oiRU1PBkTg5SFn6k88gCvto6Xv5jCAS1Dcy9NG9mq4jpm816UaR59AxQqcbkgcoi5xe2kejo8djCdsCK1uUShGQ",
  "key11": "2Bui493XccdQy4e36NMVYEbRrcJtCABJvGmBvDXAhk2xMHi2A1ThPcqsGwiCa24gkqdYE3jkCVct9BEUkcUDQtgM",
  "key12": "5WRkiM4pBRaA2ro6umDL1jTdDCZPNkTh11ZBJ33Lot2JR2WssicYAPR869a4UggjyTpxX4qt59WZEgLZUFGc6anm",
  "key13": "pjQUoKr5GpbXNAbioCTB8R6vB8K376jujye3fioKCKuM7aZLYKoeVcXM4r4At34euMeUkdTbq9PABpCj5M556Ez",
  "key14": "feAsCJYTR49aPLXS5uCVnWApxAWDcp72yjW7QjMT38XhzrdoAUgXbNfkZpiVdF7E9JP19vejTjUP6jNdVY5oCFq",
  "key15": "5srp2hhMXDF73Gu7Vbd517wZwrLJbzBr1H6ym1F3sLQZyywhppYjQKqhuiHURHcCev41JBLzpYcAkdFgh4jjR4HT",
  "key16": "3WwSaeophrimiiCBJXcpeat5NvZdsJcjjF57RNmwqc5JAh4eA8Qy8pAhbD15qwmKKKDk8uVjTzYaW3q2T9MgWMRD",
  "key17": "2xLET1odLPKMRvseA5gez5gBCoNvjyp9BsH2kS4eGvXefrTM9HVR6gpLwCnkuVLSQ6JFDZ94vFTgzE1WyZjrqHzP",
  "key18": "4sBnMQj2htb4oz2J9Vg43NiVx9Y24bHpPzhRSv7PoUL1MDMDcCSciJFsSCZCQP3sRoRhGuUH1YcActqDwp82RU1m",
  "key19": "2kkgAVQkQLgJixbrFtPXw7PXyt9dyQKnnonwL6bJfjDqHTa4fUEksxE5H73DPQFekL2kSfGwAadWYeqf72SHCwny",
  "key20": "2ZW84E7RCrKwGw3WV2BARbtXG53XJASaEbvk8Siw5f5NxgQiYoypNvqdwXaGLoCRgiPxHLUB6onatdpePCL93RQk",
  "key21": "NoK4MKHRFrGS35ZagLaK6NNyUwbxuSwxXfjenBpqoZrsigwF1SW67Mi57gYf4m5S5sxHSc8TsgFDrC8uva9jQFU",
  "key22": "5d8txFjXBiE3T3uQzYxbMFbLMoZufVvCrFp9QxNnczHQ2ou4Lya9oXxmPU6sVAe9tZ9qzvbj1zVswRhE2dXdAWR9",
  "key23": "4PX3R8BTfNjNEWYrfRqZMi43uFxCPenjmsX5PddwMWSr86rfsXMgdPxUWSbBQBhmK8KXywv5A5Ak4JXYXG12UEDQ",
  "key24": "3n7y9x8FJS8AABvXCqqR6gdh2KyW8Zf1eZ18TVH97zAt5FgJFNvbdY6STJTV5CJTkGn5D1krr8TTqwKuVeWRNwVp",
  "key25": "2oZL4iWh2GrPPWoLRDor2k5hvG3UKWxxrL1VS7NPrZBcraFnS3HmWd3zu7VDngZjYtHMZZbE3dWNY8bQhKCaCg5u",
  "key26": "2urU6qjxuaYTB6CrasKE8XS9Hh1pSBUQHWjq6RXt6ztLB1twShn5pSpoRxy4ZcpWE6QzZ1BFarBhVigq9WAgL263",
  "key27": "5Q1fY65RDrjksv1WZa8Sc3mgdDwi3kAwP47PpUU4eY55MyH1rUfSjzBcBWWFzHwe84DWvo2NE3obC96MpmU6swBP",
  "key28": "nENtsoiMPS4TPuZkTZ8fSzRn4JhNWrkPBukqLDQjyKfytQcG12nu4mjnxGmScY8qEUneV2vgwX2pR9FRy76rVKy",
  "key29": "59mn4TmUaithbAC4EKsKHkJ1pgEGQXMQ9arhSStYYipvTf8h1g63GZSAsDwFGcENAp8heHCxNVmb25bvkmQVmxGV",
  "key30": "2e8rM2MNQ54WuwnrsknSkJJqMZ9tPkDZiDfcajAkc7fLAMzigBiE8wsvdEjwsFsSy9Ayu3qTpJmTTYD6sn5tH6Gg",
  "key31": "4T5AZzVtpVc8fMDHiqxoDQ2symKZAW51CW1QDiWdTmQabMRHaLDzKy9DtcoBzwfB35NE7CCsmgmofPD4GA2WafKY",
  "key32": "5p1duLsC33WCSjNfVvjUeoPkiXEinqF6EVMkrhTJFLtNhzZFKmLrgRACmhkSikizLj1f9xa2CqxerszoGBcwtZxt",
  "key33": "4VA5yuxGdnzh79TLDotDxhKaSeLS6QiXHGAkEDWWW2QLWq2zUxh2qpZ5x88oZx1hyrrLQxafCMiV8bZ61EFKnNLb",
  "key34": "2AHz61oXcAKXK46hYj7XT7XY1Dzmkpu4u4mSSMzsPXFJwRMKzvNWduWL9rNSDhaiSqJ1wKbLkb5Y9JH8a3V9Z4mZ",
  "key35": "SB9zQfYuoKHgQ8iyYwz6wdELVTbgoQZhbB5NfZLiD8w1Ed89ZUQ5TfwNeMkq8q6bEYz3FwcUeZW7LP79DaMg9uY",
  "key36": "2enutnhDZaGf3iwftnU5wa42DCKvJygHFn49a6Z9ebRfrmm3SWq1mzbcDZFYigT1guQCrrskAy59shL17sDE5A8D",
  "key37": "3xPwufjcp9mNWnFEUpts5KtwCLgzWHqcaf8L9tktj8bPa8pZkmtdcrkEVYgs3BucXnFcAoWX3FeqRKQR2DPJxs8U",
  "key38": "32P4wDeC1DcBSKEyV2NETe8EqtnfnTqBETXmHpKMtPrhf6kGEYkBkDvrqed3Uxn3M2bMp3ukv8M74vZUy9j2ajV7",
  "key39": "2pPLkqYFFBaCreFzrPDBm2gKG9ZcGUDVMqcXFyNz7BoWca7JDSiUW5q2dCm21Lh1neCptkihmXzXbSr41v4t67h",
  "key40": "4oZ7HaB1oa4BwpncDXs8Y4bXijGCDZfUk7TaXDysPtDFAVQBHXvSE1Manc4vyZWieXwUvE8ACTqZz7gJvNbVb2Et",
  "key41": "31EDpvfXNg2ivpX5t8d53yFNk7AcFAoVDyyxYw41GB8DXLhS7Vf9d2TWTd2sMuqa6ZrMRFDwt94sLkfEVChSeJFu",
  "key42": "2WFkDoBB8KaDUEgcZWYsGHxkVLcGHzgbY9ZwSt7LVhjSFxYkaP7UmB26uFVB5WHzNXFY3LeWUHmXHWuXsqhqJyfS"
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
