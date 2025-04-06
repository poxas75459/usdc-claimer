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
    "51aP2CArxJS2xcQiVj4Yj64v65ZNwLXNqFvJh9PZrfwKosmdvNWAz5MDwW7VjBMscrKLCWvWPYG4hR8wtRwJEi1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AxHgjgFZc9Zcde5cSmkqiBNrEmvs2ohZSvNLZsHBhvGfKxM6UybgQvPGhZcckv7jBkGoDz8DwEZoPq7Uy9E63TU",
  "key1": "5JbQUEVDGuGkimqwdc6hGK1ZkpDdFzrroicNCcBDHWgqaUR8aXV6tqKByYd2JQ1b9XX3Q46ugHLnAHgsu9QLbXD7",
  "key2": "2pVoVtCqaLj9yMdscWyATCy8r3ceTfhpE8o91RyQx6osUXiWhLwNbMDVp5RnfJ2ovGmNynVpJRqdTxKV4EyvFu95",
  "key3": "4XvndmhK292Konhg5A9se5XcpAfGXJaw2WFBrio92eHq2yh2uoWoMpuonByai7A7UQwKAsKeRRZgVoU6Fuckp181",
  "key4": "3V9mCwyUrQYZkZXgUgwWs9mG5sXGWG2Ney2Wrh24caRVwGsBcNG5iLdwXWHMseueApL4WyCkNhfHrhZznoDdVYpv",
  "key5": "5FiKdrzn5JzGnQ5xEi2qSo9WEQ8tSrN4vBZei6nJ34as798kVyXTjShf6Kb6T62BpbFNdct6Mnm8itDBEXBahi2s",
  "key6": "ycvumsjJKTFVqv692wwzTYzxBhstQv4yBd9CCJQ1Pg39jtTR4yvXmgqKVEVDxCWLWhVCmikUNrnFCo8uf5U4V5m",
  "key7": "2ZMqxxZ2ZgLeuR1BMRkeKkxvGGUT5T7mwYK1Fgffj1DJAe73GW7qXosUxPasZXUECSHeGz6WEzyvtZxPdgQCE5JD",
  "key8": "KdSFVAc7GszcBybUkRWRAwtAikZNkWn697LAxbLhov96Cubxi8eZ86veUELuvd2X7zPK4ofWr9FnfzbjLXag9UX",
  "key9": "nyu488qBdhvvdgi1ohh95ihW7kEe2kiyTdPjEu6SJ6KtTYYmUxbL4mr3mdicahFogGMzVpqZqGqrUBPXFkDDDcP",
  "key10": "4u9RVyQtpf4eUX9xZZMs3vrk4STj8kCjWodB5ESVdjRWqbEVmkNsoQk35ChC2uGDJ86VkPdw6Yg2sMnYtZaF3TBT",
  "key11": "tVtyEtDSvWeMSPaJmJQnnuZi7x4G1PyK7trFY9gwUCwJeTeBaSSapQfKQEGdLQ8WMtg24Fika3pniL8X3V1Qews",
  "key12": "5gCQoiGjnSCpcAEppVrqyb1bvZ8oUukTuZ3EatgGYXwMA484RcWewMVEJ2D8w2eWFASJNXd8kABYmwm1AhH4X36w",
  "key13": "3yybJKNFZRC4DED4RGAqADHVwPD79bxSWLhrZHkX7evDpCo9SMEzkFBiRCQAFoXNFyYg5mgnrJQLp3fEqDxmNd7q",
  "key14": "64tuXk1vobyFgT1bzV3RpmHu55Q5icHKA5FaMgXNUPnw3bpimJAupnGRBrkqB34t1dNukjxX13RKUStA9kyrWHdx",
  "key15": "5kUMfYB1zRxRYV5jhf45PzME5nzUMWt2SxcHiPD96HghjDB57r2MqJbmPx8nupyh1V2g8q5g9Nk4GcZ6XWxCN3qW",
  "key16": "4pGWg3WidrxDswRXWfUJcGGQee3D4mVZrnWxacebeZCdfiMUAsvgEwh4919s6ZGTVkWLku5soFdJpdsYiQkQS9G9",
  "key17": "3SNpxH6udAviMdhtQEsEaWxcyaufBQB2NjJFVpjb9Z6a4piVYG9fXUHABxjyteBKzeV8Uam7pejMX5AZ9DjkjwTz",
  "key18": "NVBuDZTJHPGKpezBuCyGGdTT1pf3b3JbHFDFjsQ5ZTR4tk3ettELN2A3LzNkDyUrFMZN4MV45dr7dy2EXfZhQN4",
  "key19": "41y6uMAcfaRHKwkP4n7Dngu6X8GHXSshBn9MKE9hHTaKPXwJioQXZM5RGvCqiG1THNsRfXh6DPEcjBdaVSZXvKkv",
  "key20": "5xZrA7pxX41JAh1c52LTzeoxcrJwzS3nr6uKAx7H5ZXwnEEpoQs4RAitZPfPk2xbxom6v85yS64oEG4RJhc86acH",
  "key21": "5KrNoSYLgUj1vqGEu96EK3pmXdh3MMLwGJXDyJt92n8w96evVKjwFKQW4WB9GmCKDYG6p2ErTptFHk9frXohdhpJ",
  "key22": "4pRtLe9oTRXT9wcR8DpYFmGs7qcT86BvAm6ycUMZEFjX7d7ComaPJRPvieWkgmCabSunHKiw2pw8WZm76Vj5woW",
  "key23": "45dtjjhb3PRevoTrcKYqmLJxfcdS14yhhAH1u5yViWSv5D6WxzFbv9rSfMUQxAxp3TsYJx5xe1LmdNA7BsyEx2GB",
  "key24": "2T44kbjVZw8tAg7DHAsBKbiwYsNBypouyLS7KZvC1snQHfzcm3FpEvnfZUjPXrJnme2n1PtHGxycg9weuDCmy2Rc",
  "key25": "V77f4Yxw9dyGR9Quvq4MfFi3TC4oqgUL2ueJENq7U6wYVT4wUVB8P7dDdEAe5BrQTLBH7JLgD5vpUgzaqADmqr4",
  "key26": "4CPW97hoUMjoV2ujQ8aCSDaLgSG7HztxpFmcce5eR941jW9uqV89iT2ZRKX4uEyCE8h5yuRVifRUKurop6EiPgME",
  "key27": "327Cj6n18UPLmU5fE1hW5Y6LRo23dL86XcR1kHhuNmQ19WK8hvguK9q2QMeR5g6KdUeLdnhCkz7rpS7FzKFTFjNb",
  "key28": "5HLaHUvq2YHvKwA7H3RTnSR6jbYukQQoECV8oaEZqjQP9K84FSF7DcfvrGeW4SVgm9EwoJqczchKCUsC3pcJttZR",
  "key29": "4tvjG8dtTHSgNk3MUAmqkiSCSp1Eru63hSyYKgu2cXWTGYCnPiMawzR9LWSAZ1hompQ7k8bpwTM7doLscLMJtVnS",
  "key30": "5ZdkZquSJTXrbBozRxNSK1GYX5xfdPUJsuM8Jwp2B3K3aVCYNxauF6WcxKjYFhzRTZQBDzYX1k4x7ug9DoQVuHea",
  "key31": "588pX9ozUCPTpJy8H46cDKz35zwC6P8kzG1hqtfAFVU2mdP4yEQzBc5TpdmBogHeUeL9bHMv2pdHscrSVrsfw5ug",
  "key32": "3dTramMNnAcBVvT3GsjsHSpGHcfvV4Uc7o2zCUtqNszj1yHbtrJG6x6sk8GJmnQghBFoPNLohdz1LXsbkj8WfQdM",
  "key33": "M2K3DzgApFzbZL5P2nwSmXJgCMomAmBx9tEykivSbsGcxJ7XSyQ2Eg5HThBt7xLJ8GTaYHxwQJBRGqfcyAahfdv",
  "key34": "oX8TFJKsu9FRgCX5rJW85WAvCgh9xRqVXFJ62rhfygrMSgYucXSD3yKB4mhurW4MX6gmQvfT8cjnpQcp3Gunvbm",
  "key35": "4aqQGaPmpfwtTUbH2Uhqek2yKkjmp7jbcLw8oEjF5bmrJV24G3danso4dvoPKvi1kpv9BzWpZquCN2euLy9kzGbY",
  "key36": "5E9KEUHTmdjGhRhAsWtK2LVMVEnJdRpoXcYrNb9N3KUpMnvMPsGZBAu235BLEvYpFw6n8b4stG1gGEb2s6Xg8nn2",
  "key37": "AFKkajBC2TEoWn3g1YoeXjUV3wJZLrqTNxBZ34Awn6wWxiJntKmy1sqkx8aJMUgHCS54Uhf3fhh2qHfoKKnrFVU"
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
