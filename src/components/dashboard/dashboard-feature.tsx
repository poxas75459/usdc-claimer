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
    "63YxKbnkiXDFgBZcRvvYa7mfCmAHYKe54N4M64EryHcrx3XuLrtLnrosfY8Qf5zsgCbVKAiyEDhtMUzUAjGjgqaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PH3gfVon3cLwLHy8b5Mb2nRYAGMMMMBdJgpxP5dDtnrBqAyWvpxDz7y2WRRADxMTVo4LXNNkNHSfx68fDnwadjm",
  "key1": "5WmpRjTUaBwdDkMUqh8y72ye6ccNuoq4x6LFEt3ZrCHX8WgW8mW4NYEUVKs66t1GC89YiTtz3Wcc6BvYNa9ZxGyw",
  "key2": "3YHagFAC3sXRcQgF9HTwokV9oUUNhGad12B7MGFAvFu2ZvCZhH3K2uyJvf89yppT5ssPPhnwxd85iz1undnbd2cB",
  "key3": "eUoMqAZVPfCAcNsVXQJGKTXdBh9vTFPfPEJGTuTXMGvJDwH29ERQYNUqWkUoaTDZvab2FZfwqoKMmPu6XRwsMgv",
  "key4": "5VjbH8nu5sdfKTmP3uESJTkvZKKtUkMkwaAz6u9zhDRKveJYqoEqTC1AF5XEsAajt5HWaD4Ts5ywDv6THGCMzYSb",
  "key5": "5auyTwQe7h68cD8ARXjsa9H7oXFsXURc89yeaZrcCHdJjSNtNxaedJwFv7Chk4s5hFbQbc2uyAUbgQMVLZNrnqtJ",
  "key6": "2t6feRHtA5X7fYJgxFt68p72fkxQAAGvKfBrCsp1Kah3g2vGpbhi7dw8Wrbn5NaXHv6Ap2RSHbe3CLd55syhs2Fv",
  "key7": "47N6fitRdmP1UxFQjcNFyrR8RNJV1YRkxkm3BjVHFf8ji8wvpyMB651Ac3sCobkcdKFzQDS7k5WbgnsqbBEAz3bv",
  "key8": "4MdZDvdcWBBFcFryyeix6vWxFRAg9Esfa6TkgokFam3JWxxcKYHqiLYdkE11hCKq3MSP1XEA6KUpnQitJ5DMdzxF",
  "key9": "5cMd7kJk36fRvqosxwtU88weRpfTKqRwsSJDKVW8G41tjasbUd3uCRk5ERAGQ9tJzggLTHDkeRcBcAs1sye8Ms66",
  "key10": "hh46s4TUHP6B2zDwVnSqvLyoW7MwVRiEuNZRNpUet2RQ6FNgFiAvuwJz51bG7nxEHw7yv28LsDQadhJ8PUZS37m",
  "key11": "mkdKNZzENLhJPCE4PkyZFgXGPMWcnfqQurwosRVu1dHiDrpSkooZkYJiTGEvdDwJvjbAEo8T71PEgNTxbKuTX9i",
  "key12": "3bW4yieF9pYuzjSkWPRvNJkPNdbtiAFm5yzhBgYhhgU1fm7QZzUKQ4PnKjHnDLJ75krsVsbBXGbdc9tvtxmHGuty",
  "key13": "5PMDec1mAHbkWmjDAe5hbaSkEYyJX9KvYZeziygcD4ES4ZwdoJLXAFNCEAsumvWcoBtsFHgnT4Ap5uk1DEw5Kd4A",
  "key14": "ignLhKfCxfopvwzDx8PXDBs7s11hB6at8zkaaZWVouqhiQhRYc3C9uHNuWV41FsCxTTYDdQErZL5F4bXrnLu7og",
  "key15": "5ccMg6z8b3Lu13M8UcZreq1tFqJRSRtB57CyFQzZMRLBCyEc8ufc3Qp8JDeJyk3qNmYB1Ae6tJK4ioMsZe2s6RwR",
  "key16": "57NJDyZwNG4uqX52a7yA7rXUHiNPDpXH1QeM9wH6v4mbSZR4GTp2L1kZhuJchvB5xxmFGk8363zUsSeiNdZ16GUx",
  "key17": "3wTb3jAf2NwoT3Wpa2FHiL5JynL9gHLCRRq14LcqhDLfB5smuycqzAMQ68cJSUzkMnCgsjWSPKbJTr6xFbdYBn9u",
  "key18": "5aVwuponwbhBK3PbHthHzDyTsxyY4gGvUSQL5NF3pRXBLUrdnXiyf64AEsMiHEnM4cjEbTEeyog7eZ9sWvUBMWRt",
  "key19": "2D72WqMTCCAbuASQbGZScFjkf4DXR17b7RFMGeTXmfaavfLY1xgnUaGoPZssqzegzu3aRnQpXyipS6jdvPDr5wCa",
  "key20": "5u13VeZZhcHsQeFqyUKBmWgaW5ChYcBU6U92h7S8fzfMmEbmbgy4RQrR8zSb3rLX5CRpnTGoAmtg8z8YCjfxSDAK",
  "key21": "2teuCKDKtLE34LXVucWAa3Ee73Hw46iA86ncpht9dzE4zcTa8ZNnPA6hPGwhFidVYgPKHydNt6yMYUWFJELR3C7B",
  "key22": "5x5frBjotgenRUo7Gkqrk4aDXE7tH53Rg1MGAYpRWuYYNJV3R3A9ggxqEerwfukJJrnJ8LrFgchvnxpMceiUS2vd",
  "key23": "5cZPDr87x7nWcRUYEkiCRtmXGi31eQbMdiF4ivN5JXvKTGniawXjqaK51CkJQgKq6H9Bb5GqSXDpoCNLLd8amJ4v",
  "key24": "3thCBPy3xLmFMy8Zt97kPw3fu22bq19EjqHQuDkSayrveAQquvL5N9azGovK4yxvtNTYzSr2DefyYrV19653Xv49",
  "key25": "2dJ4u7ZLG1xqWZcq1AorFQuNX2NJPrzYwR5efci2czbq8hSCnhVzWRJJEKgDCcMfcTDeaozTTVbLKheWzAnAJEp5",
  "key26": "2qG3JG3UQT9YBhBcbzeFZ3qFgoiv6nkXYLERzFbnaNbPZ7DXHETDYjhUgdK8dBUi72x2U1Wzj1GL4394eEBitGSJ",
  "key27": "3jRi1zsEGJvcSXJvawFjbJSc3aRcBq1ohLsnXcZ2YJ52jaotgTYWQvsa1q7aaRfTzP2fye9dYX2f9eVTEjiTmKhF",
  "key28": "41kfRRus8Uag3CfD7R86dxvDuFtdXQntRkWVGbab1nFo44vhCHY5CZYD6hiJKu8ARFr9wMVuomL1sY4q6FsJjqYi",
  "key29": "4DYroeEPsiEznBqAY1rnxgPE4vTnmpq7dxg7qTFeJinhSWJEZfh3X3zqNZvwSGFadGPxvGXCXYwMvzHXswKAu6rF",
  "key30": "3pPDwMjhGgVrBBjwRYLMMFhXvpRUpLTHXfxFG38fcbwLprvwa2iQofdRdyiYVwMz3awYDWdLiGM5WYjD4BEZ6MF2",
  "key31": "5cn9PUsRH9RKzVyrEEuF8e6m7XTdRFntUGtUDRGyaQvPfvtf2wHvDsgCRnN3Ce4tK4NtC6QWHKJw6bjQaeZ9gJYX",
  "key32": "ggqQcaBSaMwCJpt4gkNSWXGrQJ5xjLePJxT6z8DouzUPzgqi8maUvii3nYjjVPxDi4XUxuConu4g54NyhbB9XDj",
  "key33": "fKrLoLqjDkfuducD5PLhsarLg4L19pCpJPfaiBCyj4YDR2G1MWvqM7EbRa1pZtpoxGgPqqhyKjnKbnpz98HffpY",
  "key34": "4duiz5ZCMxJudkcFKjLAr4eAMXmPQ4Hm7CuYxxrk7p4nfNJ28ZqDaGJhSdqAWE4P4Z3rUytpWPquU68KHPTyUSzo",
  "key35": "4nS2gA7T2x2Ym7o7sjYn81HJz6AsnKsf1hNMN1HB8g2aC4cJjybA2SN5tTGB1NWoHNH2HfttGq2mVpknCipnCNNQ",
  "key36": "5FZtc4STbaQs3kPqQ28WkVQ5BArDhTyvNpuZPm4QiQBoJ4FoQ6SEGZuneFF43rbMryqpyoc9jYJZ6k9QY9yXkw85",
  "key37": "ujK7iGnYWRTsA59SgexgugvhdJKV1C3qFvKXsptJ4tHLn7qsnhXoAPUdZThDxjP3bJceEMXqifi2CHBqq8n5r1R",
  "key38": "5cHxUe3F9TmT2DypBFgnXFypsBF1FJTo2p4GzbeFnVqVurkQmebR9obnyP7yfyA9CSYyLefi91Zrpkc9faZkfpSH",
  "key39": "39XZU6FVomUbX51fZ7YmFZDfKF7C8Ui6hyGbTA9AF5qinDLtLpebVVEq4WYx11e3JGDXcfYP5asUtV9R9Ne4xBCv",
  "key40": "4919rBFBL7Ryc84biZWZW7uRMNkqbGw4TTC9PqRCR3jMNLkFcpJVRmcbpzWP1jUbDs4R8Wpqo8jg4ky4mc65auuL",
  "key41": "WKWfK7YzftCajVXN9dLs6VkrEvES4RfUmAR1YjJT6WbeqmcZ2fVxE721rsXgUVTZ2DfegjoYPWbidBA7rBuHHzT",
  "key42": "4wdLLWnisqSPKz5r3Bwp8HZKL8x4K5vb17ktwFKBHucgtdxUtoYXvkZo4FLrGiPhW93UEmGPu6oedZzuMfNE8ZEQ",
  "key43": "55GG9Ne124zpYrE1VYGymNza6FxEZXMyxptkU45s1YMiZMm5qW7WAR7PF5SJJ5c9HmEH1Pk3Wge9PPyGiCad7Ryt",
  "key44": "dm7aJndJSBXLKvBRzBFz34cMXyJEy974MoxZvm5v3cgsCwtJTRWniAnDSVNM7H29LXnSsVqe5LVgqTm9FmkM5TS",
  "key45": "2P7DffV4m6hqKJ6Rf7kL2Ei963H7oCbC2FwA34HcUAXyRVubPMf5mqr7yUuqSnMwpF9Q3MfaL9MxDho9CWVGdVgU",
  "key46": "2hs1odSAjGPdCiYn7UX1wKWLKyNoCFCAtt9skfq8Ko5yEeSQfzVCsYSis4Tjor7HDUUevg3fw8ayK8rgnZaTMSdx"
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
