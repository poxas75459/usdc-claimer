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
    "2MFWMvFWHxuxLfvhSNxYRx89vL6WYK8ihYrHsh43e8mawo61CbMH4eqMDtoX3VdicbWmoCSGsxiNtwFZmQyV7qEW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JZtMP9wRoSkLs6ZyNLFfoFjWJyc76CyhA8zPXLH1viFzk9EENS563ordiiXdyS9AUrNUAz41xdyopY3n4Ba9Qxx",
  "key1": "2TrwrMqNCfea7oHCeCDBTZbMaprVsaE4vxbV4QKBAfftvDLPj1qE4D51tCxWE7an2jo36kBCxaazDub12AFfxpi6",
  "key2": "nbm1fU3WS3AVSMWAgXx8z9cNCKmfwqGx4CbqqXfwaJr3Yq6fi5xdSzFUsXY3R9zP1DZX2jmCcT4wbij3eBVej5h",
  "key3": "3MaBhynJEis5waShUe5TuV7WWFtB2TMgGAsoVp3rW78fwQtZio8HYRmpCCMdwukNj6wKg34h9QmCBmeiPdLJXfQs",
  "key4": "4pr9hxMwLHzpMPn5tRae3dG4XxRJZuZQ5Z5oo5xcgzdocjNS5xNL5hxbSoAVwe3oYQQUyonzEXy6aFfp4hTKZJ5B",
  "key5": "4CTZZSB9atvWD94rYrvKuubVmctiR39vKEAXkuuwLxoJ581M432tcu2Taxg8jWqehGLBGNv25U5DKNEYBFCbHnGH",
  "key6": "63WauUDVCe2eQCCsV7PsbpeM33Qi5PSTfCRfAT8uh2QioX52U828JHQMGLb7Va536QQdStTd4HxSk4pDW5B7EMdP",
  "key7": "5xX98RXyUrd3TY5TAdTA2kituj3y5DP5CfvGSyApgsTSJhc2ihXCmqiVcdyvMoSGHRYez1ByGyqVFg7yA3PXEU6a",
  "key8": "2vWcz8zdxot9QCj8suR57kqDcbP1HCXi5bMBr2ADcHUoJ3dWoRxYgkgDZ8MZ5jZohnQrwZsfw329YvSPBC4AUcKA",
  "key9": "4RqEbVsUFf327ahvsXbMQwkA1CU11kbPiPFNavPKFxT7EkUsz8VTjkZKoUirHYCDB1tjGEh3pHodgAJ9RMyG7EWn",
  "key10": "4RF2bHs44FWCXb66nXJFPPmBZvGKc3mFvTaGW4DXkEPcJap7ztN88QPTDW53UfcD3RzhzjUYu5VenZi8qAXj3xDh",
  "key11": "62N5BwLsojM8VYgbnWycmofVwJTqTk5RSZM48kYPXaZPfbxD8iJwAAnPfiQKT1n1PoqqgZAJ9bPH9qTae5U85d3o",
  "key12": "3bhJAfgZpRo3FmzAAWQPprSSn1F7srhV8qMDRA4ZGe8PAkEsHSrJrWXVcXg9U3WqgszV8n4p3J1YpKChrTV38trR",
  "key13": "2mU6B5tLU2RtT587ehTbYhofjcMjYRLT1Fx8jUGUG8VQpL7vsfQcSCtKY7PpzwoJJyWUCnpsdaycssbqJJcMsj6o",
  "key14": "2RGyXsm3bG768SkP2KUPbE6Z4ccxaYxXreCc9VB9M3D13V1Sf6DYcu1TiB3AsJVDHNS1YDouwM8Y53fuEsq6SekF",
  "key15": "3XuuWyJFbmmjAnBqTXQ8r6M7awMQ3qiPupMHrAd9Nf6VVPkXqrzghoxiF4kth2advzvG9ht5qhEMFgSKg6xxatzW",
  "key16": "2sBsi6WfXXCatoMBfKjVtAsSYtTFLjDkC2gS9sRgAhWwbMRF6XJ4dG8kcxVgBmBtGd6vt7PiJCk4Mv6N8MKXCmtf",
  "key17": "3WkgCHvCWSaHkuMuUUyyS5Eh8N4cq6sfbnoYAeGDj5ZmBnp6b9nNZgjxk5UJSvVoD8AgZgAt968udPJ7vZptJgzE",
  "key18": "4Lb834RTzCeLTVnUbmx4txMBJ7wGUJbPaa3ebDtkUiHn5Sbs9rCKHtG4CRafnWW6vGtTdfiKve951itS6FbpcxTd",
  "key19": "2LMXfB5M8xxUCW7Xmce1Z96Jfr1gxbFUfWBfudVwg7DTCsMFhTibFqvibSTBysrdWkmomfGWemz5uW7AxVdvsXkM",
  "key20": "B9oZYeJACqe4j4ZC1bffctH6e753xLD3WLJM7cZh2dNDCVF2pMRwavbFMB63Sdvt8nqtGSzvsbKUs7HQck2LjJ6",
  "key21": "3tBwVKkdpkdoAjqxbF1xiy8EgCZDMRsazTVoY5vFzZ1CfvEfaSQ87D9yg9PKXGzCiqUmxaFCu6npgbNXKzG5WGD4",
  "key22": "2uZjdGzcTbBKZRaVLTHKhXyGpofEuHX9HFPvDcp9srh5wWYQD9vDggCwymdcKQ31p2dheTZmwpHjLNzhfmNpPy5x",
  "key23": "5MLbCPF5txbYVpVyNTF6XRjxdozH29GrTBQudiBVduDq6yRghNUByeqmp626Ez51KzzeCS5sZoCk1pqMFZK94eR8",
  "key24": "4DQJQ4fzkxgK15r7VD3TvD8nwMTHxFCXyPTxCqMBTUaYMEpC3SmwVYC2c3mScfrFv5jZJgvs1kNi1Pa25JWERGot",
  "key25": "4S8g5YMpamqDvr6oer3ckBvsLKXUenYZ7Bdhf62syn5xpnqHwimMG77FcVssB9T2RhQ1Mz9R3nCoWkVDYcRoerUH",
  "key26": "4HjQuYGiAB4UVaPfjEvMukZAqktYLiEAu9ReN4gVgfKmrE7yWtxu9XcnuqvZj7gL2HTAFn7BTt8HsdBaoyJJZcrb",
  "key27": "2rsASNYKPAM247mm35titABCztJ4thy7RzrweorCvYPzYjBLVrctN65nEpy55o75XhWYhdY5rASN4KEfEVSdh3L5",
  "key28": "5dzWHUw5FfLGZTCWDgDULVSPu6dAMxE6BLW1wnm7v2jgm3hf2fcNeCMRJJcciXT8XgxnzZx87XrUpHWDzEFzqFva",
  "key29": "4bmXfCRJHj2TJvmkxACZbNPL4rkcZx2zvgz1tEjnYN34yj5ZSGc3tQfGot2Jx4W5hz5iTcapeDLmghj4yCctswTq",
  "key30": "4P8i7F3wYTyDr879BvZhMYNCjYxNR8e7A456WYcWPd7rkCNSqxNSJEGjwjytN55fZkqWxpehAv55EwCiD8WPsMUD",
  "key31": "2piYijitZDU3zzVaQK1rnZBaxQYQ96fH5geTcUBFNSLu1VccUqXAkdtYc1NvPNmdsA6Ge6UngEQENdv1QU4x897b",
  "key32": "4HFuJSNKNEVTggkdvmLiaSZbh7Gu7ymGJuJJnMtDfuVW2aF4K8KADDrdp8CQD6E7EnyRAFuEc2nmobCSYfMbHfdz",
  "key33": "4M7DMvnYRb7ycryELSC6vJBY9K8QQA3LozZbKB3B4xcSwHtFG7xXWdqWrgipkKdJ8iNUsbPKFm7BrevrASkfRvbj",
  "key34": "3yngdXturys3U47FNMha2fNjhtJSfnz7wZ85JgHQDsXpbiTTSGsxqxL4PLKiGK2Na29HQoKY7HEmWGKyBbbupZYZ",
  "key35": "3RQAFuk7NrURnK2dQ6tuurPERQqrDtJoSCbuBTLL84EkvhMEGEfCnMLsNuqpwpi71HUZKJzhCeaMHy8JExBA1sHj",
  "key36": "4Eqpx8rAGq6szUNXFNzigwpsZqaKCcPgrzH7AX8gZfUhjto6U67KxWNyoAURNm77wes8XdJthiQdqrjnLNSR3eH6",
  "key37": "5HyNNG8HRsVgqr9KZhCNjuCa6EjvoGUm235ZGssnqBf7kwWi6FVFkFd9F4KrcKSoK1Cb4Bks2SYHBHSqeQrXDoJA",
  "key38": "TutzzoZ1TQ1KSEtyAgsY7RdBPD9nh38jHBCMBZGmuppxwnV8emL6ttQRmK8vtwH3CSsSrVzpULoVzNMAUBFdKZz",
  "key39": "47kY7p4JGD89K2pCydTVBeHY9pfQ97KiAi6qWU3cAosb43M699NdxZ5pShkyEzAxBUTXWH2yaMteSq1kDYE65YNB",
  "key40": "SKuNzMafosYTcLyN7c19Az9BbuzZNkzWh6n6wbMMntUKmutcDv8wwHtPQvo8TtwCRVUS5SA9a2enXja4oCFyHAY",
  "key41": "57iFnJdzd6niJr2aHhRzXUU9TEhjgat69Wwvx9AMzVZcyEQMrGezjXdxMybjDcLohz3AiLSqWeWB29dQyojes2zS",
  "key42": "26hUNbeWJRppJYSVGovuxLXj2SxPCFoyPycdxms9u2oy6gMfQPbLUhbqD9WifmjkCAmypvx5Lpa1kooVigWj22ux",
  "key43": "tiRJnAFigKoUauAdA3wouPctZK9VbCiANZaxUxeYBr9fYHfiXGPSPNADhJoNGXw3G8Q5eEHVzs8uvcfg6QvH4vz",
  "key44": "2MLxgbhsrQyhbNKms1zu4gDAmaTf6KWTy1q9zU4Hw9Tjfq9ib5X2YUZ9XmHNkVxiC3CnR7Yma6eLqcAvT6JCqfsq",
  "key45": "5Bn9yRURXQ4ujnFcctKvR3FEtoc58wfcV31A48mdJbrTGUu1Q4ovjRCdQT5SX1iJX1eAzEVTRNCPeJCcBMRWz46q",
  "key46": "mCMKvXd9JjSQisKRggxdUjMavkPAsPfVsqKSHPEudyAkPoAzoiyqDRaj5G5rVheNjRf3gZsaFKUSm7HPYUDp5Zf",
  "key47": "35oxYTsdchqhftcbCTLwRDvMHEJRopvFsvXz8BrgNBjB7xcTaeGicjCQwDUr4zswgca7j5urTxivRdnGW92XPoVM",
  "key48": "i1Jwv8TruWSvFSSEg2H8WFzky3kC1yo6LpagCyZZTGcwvdtkotyZY4M7t7yZm8C6wxkfKeP9GLKN897urgmh8fr"
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
