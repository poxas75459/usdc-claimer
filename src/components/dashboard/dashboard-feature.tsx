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
    "AjW722BBkPucqcxCECGgWWLjE28LT6zFG8j2caHJjN7fPjUEDafBEmNTYTfKsPmppLUCrY6T8gBnQmtiFUnKaX2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y8cq9BmZU2tR7PLi7UZyxetJEHYsty8KAa3FdwiCKRcW2gs3oD3Td7U9k7c53R6hTsi5DFPBv3dTgMRCWVuYSY",
  "key1": "3Die3b459KyXhkd2u8q11aQZqrBXwSDytApNxFTqSBzaaNeCxPcc7QmnjLHyiZUH5RyHWevDDM3i3PtrXcRMD3aP",
  "key2": "39JspRXLmTHueRx9U7mEY8iPkB3ADJ1Rv5pHGbgUb8aUnKQypCF1e2PqydBctjho9R6WwLAixXSQEb8RLrUtv5Le",
  "key3": "4j6r7kLEa6KpXHaVkQ1Z427eg5LH5p1PEyQq6fET14i2ikhY5HAUYjVTcAiyb5Gfxq7cWETJz9yKBWeR4nhK4kro",
  "key4": "2dQ98m1t3331ZgzFTU6cBKdkR3newTBNhXRc5xg3zg33ZfabarrLNPrjWrnn4aBdds3FNKarY4kYEphimMppXWhC",
  "key5": "2ppAL9M9nrTrXpXkt2mrPgvgAipycuvJXu5Gdq9f1rPGtGgbtNcAurdDpUrF2pknJe9QWGfMpWo63oHdPPnMsYnh",
  "key6": "5VfmJgTs9XBmg2WR4CfqvheafAmsDTpGpRx37t3XXWPPsuoiL63c7yQmRh9jjMPcbS8Y8KY6cc9gQqLesGU9UadP",
  "key7": "3nnrLTPSMJcP4GfXcNUDoE5Mi6vk2dPFmjti2tWobv8CA58XFeScyfdsTZRBJzNLWqssyfCVWHsWN96ki6UQr5ox",
  "key8": "4K7uCZkeFd56nNQQNeX8JoA2o3wV8JTVQJokHYC62WZ5aTYEBrMnQeBa7GNYTNF2gRzqFnE8Z6RQwNCDocge1RF2",
  "key9": "5ersfd8kc9NuTDQwY33rNDHMdE6EYRZpZtts2gPdMbcFi91f1mYobWeEmki4gjVatfPv6TSbSvwH2QaRj74YTjLb",
  "key10": "tDkYG3Y7Hfoupxvkw2ztsvM1w7yks4AZnLM6tf9Kd9mbm3WGMqKQDBtqbRzEGjWvRCS9jNttfpyZzavERsVWWtF",
  "key11": "wBQQox2k38eWFzr1aaq2nRX1vh2YtTEBGz3FSnrB4oQ5fgpVQdLnyoQwTXWJAMPUub7gnNvNfQ4kXtyf48jmGCQ",
  "key12": "335uCwoTNsQppSnTHWbWtWQ8Yca9BaFTNDUjB6CxnnrbYFgJKAcXuTBucFATB1fWngobMQUC3HU5W5iHFWRLj25M",
  "key13": "3nQ1htTU3Rgrv4eTaPzqiWMES1Yh2R9dAKr2thh8TtRoEeVcMgq1DsJ7JymLPBnhT2i8rLxYSsKPVtWXxro3rWat",
  "key14": "3VVPaFixTxEtPwoSwnYDMKgcUwhUJSX8HvJhJNf7B4KcqLYMHAcktckgS3NM9JGmi6wtF31YhbpWRWWMbmT5RwUw",
  "key15": "hYC8P5kmbjL2uuG3PyszbSTnNApWkrD2XgmttHBadpfoxvZ29akRb4GGGVauXsiwwXNhJMf7d24aZhaHU2vpwqW",
  "key16": "4cx53BMewiZqox72WARNQvgoK3ubDk1WG4kdzreDx8sC9sSKqHGZ523ZCGUASiG3pL3ATLdsoB4nZSuMxnxueSuZ",
  "key17": "3PaPKVyuhYV4HSMEnvHZ1FrxkY5wZY1X6ijK8vrifjiMQFAGcpJRmfeSmr8dFJf9MdSwh6Yh3yTBtbG5NE2r6zjg",
  "key18": "2zprJT5FJZFU83w6NVKyzSVmNWGbQBbT434iF1vs166TU4Pt9YmBevcQjiMS1pqYADAdjQsTFTRoZXqsrNjzzbAX",
  "key19": "4WeqiyFuoDDiEcrFNtrjfpDAhEuUxd4sErgakmFuthaMakfhhFXiUh3BPdYDuETNwBYHeGji9VGd1XowEb5vLS8w",
  "key20": "AVKPd49vDa81yUozF3DSq2rZm4vTJAUNHHSs4Q5iR7RzsfV2YLAgdZ8n1fPh4Hv2ayqCU2JHKaCgrqtWhB6LXap",
  "key21": "2NoxuQfRm5ApjevboJF88gGLNEGssZut4f3LmLreBtqF9ieUYBDADZvpdCyYbnvZhvSntT8EJyCoexQxvoekuFm4",
  "key22": "4yFNN5U7bvVkmGx6mU4huixmWAu7tKfXveNWCq56U61gNt7Jk5TZGWcjaYoJNSYYw7u5bddpsPmraSSR2wq65dHu",
  "key23": "62X9vUd2GVxfmHkRSKVvYzVhj6cBLshWRF7M2AX1yCh9qdufez44W6edE4qWsDQS7sqxcRpFrg28z5UqEEnmVhLz",
  "key24": "3RSRDZDvCgAokXZ2SEReuztFuewfVHquYpD41Z55Kx7TrJ5jjD259prxhUWzxiw6k1tmuPMfxnD1qK6ZtS5cchoA",
  "key25": "goFsP2PAtwJ3KJJTobJP6GcApNh4JGTb8p1bu4kiTxpPDJLnD35FYithPCq9MBvUX3f6eShH7AuwEr4vvQZYEWT",
  "key26": "3195QWsiyZkQciQpfmW7htZt4QNWLWwmquCYJNGVyhFYMXr32jQU9WxvxoNPKzQRyRbHcUnP9wKNSAwNGJHshXeN",
  "key27": "CRRS1MUrtvMJUiMB7wqNnPkkWMm1VPcg8qEknEgzzVvvre8m1AHiDEcTYqdmYBSNdR41F3KZui4e6VSc2WyZZy9",
  "key28": "zFVGgMVzZ48bgbdCYCLdgHHXnaz5gMM5xsZx8uujoBfVb2tVHyesFc1A2hJA1naCN84Xxv9NcSqcGpmDHSZuNAH",
  "key29": "4qpwh5Cax3He7i4uohnbpoDXFjymFeVpBPiTUto2HdctnXhfj9B78iRp7hXxApkPFnZJHdbiPzRB5YCpLLQhgefn",
  "key30": "33HYoL7svuVB6kxo2Pu94LmbKaTHjT9geP1kCeboBQJtZtpzjRJD8kdPidNvFp9w2YUB9KUwC5grxrML6dGny8mo",
  "key31": "5JZZ4hVzC1aMFHurs8yaYVCs3uLXddRdCm1Z1Co2SNpA7BVNV2TCzG8kKzAQvUD8Bmfh21NG8CAdmWaA1oe1xovn",
  "key32": "33bU7cnYwphzZCFaHRDgfye33fZWupbuG1vfHi3hdWGdaL1dUBhPSkWod9kpnJEG4RtkFttbHYwmgBaw21AASJta",
  "key33": "39iHB93TDithdtEu4hcjWo4W9u31Emx2BfWFuSkis2DydhRnPceWvkWjoYKBdSd4C21TVWJ1xVYNKnRPWYSuEPXh",
  "key34": "XFcjPGSsCyDqhg2Fb5uysKCFefQ9aGRAyfpvoEVsB7SwmtnJbiLfCQ7NaKAmxywcGkK8a2gFB97d8k4yVbn7CSB",
  "key35": "5LfTP22mg7rsSc9E3nFyQqVwUyy3RyrZLzeEmM1WuEz1ce8tyW3jPBzajgQDZNMVG5T4frpXCxXsJz6ymL2JC3q8",
  "key36": "5HjSDrUyoTqbGzqAdM18cEN6HWQG9gDgDnWgMShyBjHQSc5uNx5jKv2oNMNkrBrnhi4ZK8ctgitHeRXSbEUvxrD4",
  "key37": "4Xo9jrVqzhfeJNhiJmN9t6QPA9Ku6xebrCVrn9Xx3yKpkeZ1oyzCBkUaTvGmarX9q9NfXZSQD1sx9wVvYLCW9ThB"
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
