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
    "5uQHiNfChdNY6tnpWV6L5AncDtxraoCCfoo8V6WfcwZRk6U46AWqZUAPqct54rF2W8YzTyNBL4cDZAqvmvLzRqF2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ArMiZsbce3oRiQ5J1CHRSaiVMG55J14qSBXmJ6KPXgeh2oCmUX77Dkxb9n9272x32c4pE2SBFSzTU1Fm6AYBBZD",
  "key1": "28yx5WHJqz7x7zuhAC8N2yntZtj6C9Yc6X8B5YAyqN3Un5beK3xtkQ7Qj3B8sYSebJKj4KndkoypEnRad8X1j46D",
  "key2": "45oTxu9ZumgVoAsBnMVGq1voaSsrVufy2Mv3VhLJywhhVpD75zPTpUGmUeqHZxMoLhSvNBWoQ6sznmuJZRz7T6LA",
  "key3": "5xL1wLKcpkFySW3qLwShmmeM954E1d2xoCZhkErgQvyDTsu9frtBVFZorYByGWqjshCmfoMCe6UmUZpUTDh7WM2p",
  "key4": "3ZXQwkqWQGQCQmZKKedBL8PbjBNGT7b5uwnmGDYJ6RhsorokRmK9p5w2gDtaw8y5eHd187GXyZ1ijRVzxeDmHNb8",
  "key5": "5cNX4KYSqKtXQBfTL8CEqnogSHRrSup57dU85DqmVw3ZKmFLX29jPihhxvANE3mtyAJ5chiLCdJRWkFocXdNCaXy",
  "key6": "5z1qUT9gi69BiRmX1wbuhBuS4aSGWW4mMCwhBufBHRVRNRddiapPP4uzZ4PLs91KGLsJEFjXwpeJiWQYTSqKU3z",
  "key7": "59x83PsNNNsdkD5WuBH8Zt498RCb94SVyuhu1dqN3KKxxs8TikEmH4sCcNGRUiLSdYjakEpaPpe8XyVYREyr2v2y",
  "key8": "2iMbbRyDcxKVBceeddWeiJjnro2KkPXi3J8R2oVsEHGdD7rAjTFSnUUVQNNStja6UtfUbhY5GE15SBMw6JQfw8Zy",
  "key9": "Hib9k6NSXWWD2NKEmKJ1mUoVHFEN4es553BvHit42PziboLvq7eebNnDxi8M9xwyKuqvyzxWZgoRfeyLDaZccxA",
  "key10": "5nyXHpz1ySQiJzruSAej78v6rRfMcbN2dJfquhJGzgKRj4HzD3Zdc3aU3k5k2CKSzXrs4f7moNGbnxTUtJRG2yg9",
  "key11": "4SGShZh5xWJWpER2s14DfSJc5DdmFTMJUL3bHPJ9Xm1w6CtQ42e9LA1PVNt6ACh9yoeNCoN1X15SioDAC8ph9JV4",
  "key12": "3w7Yqf3Am6adhYD1GfouXRkT9BjLR2Be8qdDrtRADpdXPnycRhrSB1yWb2vMBVzSFPDoe9JaXGMBDTVnjxJ6H5oa",
  "key13": "2HyCrVjzaNAY4sGPytxH8UbRBF7KzPdCpY9KyRa5RP4c7tHVniV1g8Nty1xBwbP6CTywDtHFznLY6Pd11fcBvuoZ",
  "key14": "3ZFgZLxNyWE5ds2Qn6TJTjtgQDg1WzJumMjPEccmGh4MHEdzfxA87ucZgKZKzSQaJrTjNv6E3XxMPNWNifBbUYeq",
  "key15": "4BEqyzUCwCswT5esuxadXDU3Licjc6Rtxohw1UCZFxuRu592CQ4Kc3LHNV1NEbcULdDF4DDkLUnuXgUT1GNboXKC",
  "key16": "2AgixEX7i3xUjSVap5iLbzqGMBKc2YX6LgCSCUmqJ7ij1QCt33VUQ5dRYxLUgyBdFiRMgFiRsjqAocVFPFmmTwXh",
  "key17": "2wGHWDMXWDCGSKLp9jeCmqCyAazSMKVVTpMYJQcUNvn1fiGuRmrxyrJQPGrkty4pNNug2QgfKvvJJoKFRNSnrtbj",
  "key18": "2c7kHopkgUK4TYTTGYeDgerFh59UAzFG3ymQZ7kkY4Coqf2BnkBB2qBbHWUsiPi6dAtxLD9BxAa2mtFysL6J5hnK",
  "key19": "4J9YQ4SZ7btT27aSoALtQfsNwyMTBWoRUvxYKEVMgJKRcJNPyLDiV11bLcGHA1z6PV747pQjHAfQ5ZX8kAuSxBqm",
  "key20": "53An7xZLNR13BRfcGaA7jKVBjibbLMScpTeG4DY1gX9YjuNBUtNF4kZPGJbxohmWZk5UeoqS7BwhPqCkLr5yPsKs",
  "key21": "4a4MUUqRjnoLtVSDrLMLfjPhr3QxXLLLqPBjmURhVMU1AoJgxjWb5hodHndFP4XBz1cjbkK5iatbb2tbnEr73PjZ",
  "key22": "4n2upByPuPRjc2cu66xe6xu9NBbUfeNLsEb1b2HjME1oonrpbNeV16eHf6KNC2STCa7U3YpjWdBh56Cum62j5USo",
  "key23": "oXbCAVjsB1m7mvbpDLQhSxjvXatGpMqqnorriJxrkUvmzn5kDgYEEAu8SXnkDRoHULRGw7gV8pEGRMyziXxebZG",
  "key24": "hnEHKnXNrt7wycmHay43VxJS6LC6rLBvUSKfcPdyTbTX168judAdEMVKfx4xPQfV7v8nE2f7xfvt88xTD4NQ9bC",
  "key25": "4yqrUN3BiEogfqKyJd2YjHXPuG5PVs8hgxHLE7nxYkgs3AYBGL8qrqBTiR3RnkBtpLEquX97jotsSYyNU69uDuhN",
  "key26": "2KaiV7XaUcD9NePAiurwz83zPgGcLEnp5hgciMEPdhGccydYtffDAKXS2sSWEMSqd9DUwfuX9LaXS3vkrW5m4sUJ",
  "key27": "2NhFfwcu63C7FutJXmLepML1dgGhDdUCeDxpjk5UjX6Fb9G3fvu5D5xc9Hw1EoN1ZVnSaBL8qfvDep49qZJ4Q2fU",
  "key28": "5qgpPheFS3BSkkZT1QbkTFbNi5B64NxouepfiWMTYPZViTozbSnCTrxxfgvbuybiQv9LV1GgA3weUxDgeVmFN3AE",
  "key29": "4BrNu2V4Md1MP13NSJUZ1fhyF65kdGJFxmbUat9ZkV3sLHXHTDqxkismy7hJf6gMZ5pc9xQJQqZKr9pwY8tDLry5",
  "key30": "BwkUdkmESoSNZMf3MLuvsNhgw6zpYrDCg2ab7sxPA9ufM5PRQm5aZ21JETC7vypU1kn3ACKxWrrUcQ1BJVEBaXK",
  "key31": "4fhwyaCBGrorTcrVb1xHyg5ZQBAt7rgFgLvyLJ6sCFdnHAMB6XEvtmRQSVkhLMxLdV2HPKnkoRz7jh4hznPyrA3j",
  "key32": "3EN8EBXR9Ck6mGzoPGUrQrRKeyyvEWJstizKnft88VsZNP4AESFZcoJmcHqBMbbL7f8yCYpcqHP1tVD87Va2mKYr",
  "key33": "3tbyfqtp7BuxH8X2SDPEnbVJqf71aLY9bStPtaUEtQqrnWt1CaHd3KZ4n2J4hnMUhGmyC6fv2J5BPS1grkXxNGpu",
  "key34": "4WivXpJJcgLrEKBi9pznSu7sLqWnWqdHKpiMC43hqiNxCK7zEusGXMH9jkc23BgVZ7B6rKvi2r4Dz7jxrktQwo4A",
  "key35": "5dUQMZ5aAY2p2boYXmJoH9mMQFu8rWjjYdQ6nALG8sR3Lrs3wTfj3XrYbE1EdtCnkajZjd2opH3NkAp5fuaMJLqu",
  "key36": "4eT6JxDd7RbFUmbVTMJi8CpELvawoHBgccyzzAmUMkbcpfwFT4SZjHU8qDx4kF4n2t5mwPFY9aRG6kFb627hhjpW",
  "key37": "4aHNvp8PiVZ1fjJvoMraamFs6naZYE9n7Pm55FmLqzrip8nG8gLptjwDEPzfhUJUwihN5btCrc4tHCu7j9SyHnCn",
  "key38": "JEjut4RBifdFgeuxE4sZdXhQ1Qfm5ZsDKSoNjiEFA4V9dE2A2mmkeewCtwgXUvDt2LYHNwyTkZperM9X79zxYbX"
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
