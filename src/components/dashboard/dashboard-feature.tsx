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
    "4EyexmewiKLErWtiSy5c6M9UhiJuvK4pv9BprdTnp89NcZpC6Egsxoajrs9GgEN2dTyPHp8XfE5Jbh4mug4TfxjZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XWKunRMfgyCMeCZykArVfnGA6x15ysz81fRhTizzX5ypfBcSBH5rvFMyyhhNFQVFLj4KSZVmM7xFZxARzNLcjxk",
  "key1": "2MBkYbPmNa8ZwxgJQNTf35yRsasn6t7pwZ1wpSCo9qFCLG6LdKJZrR2Mtk2bVAy5K86QwjgKwGrEfs4S8wcw6fUe",
  "key2": "5ZSGQhdnx2DLGyh22o45gNZx6zX9jW1CdcjAQ9CDWsk2qMbpjNngYhzfYJw2ZWmFvvc9Zp9VJrCCHxkkxAgqoM8R",
  "key3": "yhW6qmzUubjTKATwNHHaDq2iWJd46Nu213Kt49zazHNTRVH7pg5Uc9tFYhAd3S87La1K3Bu2RW1QMco3gv5L4wg",
  "key4": "v8BwKDgUUGySJtw1AfZTM4k1MfrZVRxJsnuxTTkodZPWGUJDPcp3Zq6vvx7AQuZUof7QDZT8Hojo2YqP4mviwKB",
  "key5": "4HxjyiGVNsBfpJLKn165FaUTMK7CY2sbByjYe8D96PHXkmvN4VUc5JPRfw55E6K6gi2c3bjUYsNyLA2fpr8syYe7",
  "key6": "2t4fDsS9TwPEnKX5PuutNpWpoZmbi3ZfwEKi9HsfGnzpjkvKwcXNLZiZLZf5AjzJk4akwNFTsiTz3pWDALh9HFYe",
  "key7": "3kPfmXtsTWLqcojsnUay9VaQpEf7m8wfHXmg5DjMeENopDZALuMVNAcZNNAn2VczQANMo9VFoLqyD6rpoPSoazMY",
  "key8": "41kLGK2oADJywL84hBrLBLdMG1K9xbnPKBfpRFcrHQJGHQWjZqzhxmsa3YZi414mh16gPcPU8cPRad81XMwM2Vdz",
  "key9": "22JkN8E9kLCbyHoKvw3ank27uDEZZLVBtb2iCz7hrnTFHCBf93KEVR7dJ5TWuzLz5Sw2kU4JLgyHBP9dZbzdJ8r9",
  "key10": "3xz46c3Yp8GZnwbjbXPXUaFECP6hDAEYKTy7W2Usm6G3Khto4ZdTvNvoo5HLXrpMS8uLJLpJorzzPSdXhj1VDCtv",
  "key11": "5QeH7mceLSEvSRDJmETqKyrL49yNsD5n8ciEfAaSTCcc4fU7nbfnBQkcs5Fn8yjy7Ri9WVnfSZ8XEyTpCkG6yVYC",
  "key12": "5iVNJH8QZWyqhCoeVtKuw63LLaevJCYg4xs78FH56NBnQFuY4iqdtyFf4sgdMLSB2MxrBAaPW3Y9PtHwb77JpvYy",
  "key13": "maqUt9xRVkZquJdWfmvajWmkLQA2jHRzNYuanJDVv88emN3rbAmAAW6qeWx9ukyxpiGWSkTMCZbP8dssWZtoao9",
  "key14": "2mFRBigTfq17Vak59PqZ5J8J7MEuP9EC6oGJtaDoosoVMVSiqU8hTHQJoVCECsE6yA9p1DW1jnJSpvLJ2uGVHKRF",
  "key15": "4kpfcBVNuTZUzrBKcBzsE7Hv6vpKNL63Zn837H1fRNTxGNxnD23HzA4LFj3GZhDdugwres85dVYU3bC1EvrddDg7",
  "key16": "5DbQ7oTjkgHmJ1UnRuYLgDRfyNxGEqCDENyY5UY4TBLmriRTpZ6PcnHoNxeAhVbugT6ssDeqhmacQFozSyHxKND3",
  "key17": "QcYKWpon5Hq7hkUQErrHXUK1x6VdLHwVXAXmqPU5183yYdr49PFd4KurbbdBkMH3mQPh4kg5dxf6Tg3F7hENMYo",
  "key18": "3ZpPM1wQL9DXwWPB19z8QSBzG2ogc4H9k69LHMNonXqwp2kLxPCRGZbSDfkfuZpXL1xaLqCdFg13TumEDwnH7PcN",
  "key19": "4Ey6Dp6AFdxp9RihX35rbTpbcHfWSHksY7pQSESmUKdTRQ4Becd2eh4B8j6AAMbKBS38bnNpmTmQFNGuyLSnUdGr",
  "key20": "5BbW6QfQuZeR5Sgm17y7dveJVnacLzW6HpxMUArRGEbE7UR5yjsr8pLAafDDmsu3VVMSeKsJraMMa84pJRLdvSR6",
  "key21": "4VmXV5Rji7ZHN3sj55tPbc576zFz4uyJChEFe3YjcjeGCuTtmtDvRofaRU3qX8TxPwdptduARVwVAFZDgrWn5m5E",
  "key22": "34M2C35bs7zgYKQ2DBkCwM6QU1C2J9oCXBND7ENEYHD7zadFNVpbzg59XLYLDa9rYm9VbHu2hNF6CYeZ7iadBWeg",
  "key23": "2zL1pqLdXR6Vq9kJ7J8rzDUEvsHEQvQM5CCk2ok8nLfh4jnpZtWZzc8MA5sQT6bBM2phXFe12i8qs4QQWDbeTvfT",
  "key24": "3rfPRDMtuxUxT9YZudpXLRv1k1oSDAQvWseDB9zCiMHbgiPqMyu8Rz9VoAuvaGfLoTt8h45Vc2CVJAzHMV2qioWx",
  "key25": "3FyK2q6R8R9wNP4w3N6xsgx6cjPBZJZAUqbXBNsaNZxiU1hHcZHuhoXDWHAXSLsEmMLkApRWxMdkrzC28fnkHCeR",
  "key26": "JXEQjmB91EsTxvq7azY5tptLWbTas1n7yGm9ZjMycvvbQs7Tzqt15Hs8CTSkEACzsAutp3ZNj7Z3pWXKQWxrxNz",
  "key27": "W98bt1eoRPXTCqkMzgnD3F4QHmp5mcJMr8HmwWEv3ecTqJ3cM9VGndCKqLzCKKc9LfA5weHevN6yX2Z53JiNiT3",
  "key28": "3znrKidiXgAjm7uiv5gZwVqhTp8qdfMuZq6TKWmSmwHUbXCzcczaHNrr77E5c6zqLEXottro9f5grCFThCtKrwBZ",
  "key29": "67QPcd9Nb9b6grJnhG765gzH3pPar52LFak1NAcMie26fXVEgPn4zX5zvx8QiRmfWHejVzZiX1VMwf132BLNDsCf",
  "key30": "2mtRFK3Szpz8SUMtLfuNpszSc3jZYpYHoPpEzcgEo87F2d6Tae6fnQ7vW9UJPbePZkCer1kXGZJ5L6xwa9CKPB65",
  "key31": "xTaUiBgaJVLkKcTfJXfn49oGBkaVTRvYqEheCUK2Tgbr5bYo6y7hG6mq5EreJq4gQWA4Gb7qu9mY7Dm4M9ZkT2U",
  "key32": "5cDD2MvQyWSdbMVpFRevfJ4GcTUcDdsrsxdopq6jhQix1iJPnPsu2kZ2NxcbJ9cMMHPgaEniGZncqEFKbR7w8bq7"
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
