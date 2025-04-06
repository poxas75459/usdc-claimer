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
    "4PNt3qPvxx5qgqRhcpLgJdhyJSLaZLyxm8w4F4oZzAMMoYMt4BT6WMPwZcon3x17id3En8M25VLYzjkDQ9kbAkhR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vqEi4Pbusk6vsA8Txf1sEq4kgXjAPH8VkgtVWCdRJkMZNoTwbFtYsmKuuLpqAwPRPdWCtdm8YPqs7mgEDmnSwUd",
  "key1": "3PYCPc4H1C3VDwGoTcpAeKcSZim1vadTygHP4TnnaRvWveaD9qibpG1BQ3s6PLJmpme4xFwgyJV8SgFysehbLnvF",
  "key2": "5RdTjzVv5cR3pEQkbUwfu8f1vPFNagArtKi8eo358W9qsn8gZCokPzRpspQgbVUyXWNEyK5NUtYoRWZzdoaoEpVk",
  "key3": "4hXZfLWoGKr9J22iWKqxyGaceoJX2fswSJABrpguBVBjq6C63fPXfuDPaxjQCJCCPTuFdoxMhVEyvntv2YJMRjtx",
  "key4": "5bYFxPhXHrvbs2LomsB1CgFLtFefDZfXwZJ5y565HMTm4bFNDGoQtacusSFmcjJA7HWuKFSX9DFMNqg1j2WY1krD",
  "key5": "4rGeCjXNHpfaChcQnttwDdsBKxn64B17AP8ue4xRTfwsC5FLWsmN4wsxeRTAznGLGZ7RWTbfcXc1u2fyW3Xh5FQo",
  "key6": "2itezEWEXSs7nDc2vrKURi8ugs995xY7DYZXH97wWxmTN3MesN5GJDgwoUuGyMwxxkYN1ewajP59DCiPMxaQD1TC",
  "key7": "2VeNUWJa1zCDBZoPkrvthTMBAz2ApugkpH1wS46ouqPDKawMtGo7kjZKcEmAijrDWibWWwvpmhy9hUBPdjAQGmWp",
  "key8": "5CS6VBcgeRnkYWQN9AkE192YTmTfQCm3DpzZwjbQ5PeUMUxRsFe2tWrpPwJQXXHTm5dbnNKRxNaERE3sTPUfT71X",
  "key9": "2SYsn5kBgrWUY25U8TYY5ZCynPw1Krpc4R8FuQRnexiCGzxFAMaZUNykLBXFLuMNv477fKWfE9i9G39EjQniQb4W",
  "key10": "3YJxLn8jX7t9y2uvBpFM7g9gy1BDkSAuchnEeDR6mojrEzVCsxyLpkdEiEUnmqVFzAZFDXbLx58pchfrXfQMhMVR",
  "key11": "31dCXjLSGG8CvVdmtBv4ZPp6geK9HWPuzKJFEGTYMRosowdjg3isthPn3e3BPR8bDj8ysK9vCYbcebqocWhLkvEX",
  "key12": "5GeRMHVDLc8vCFV9dQnZc9MGavVSAcYXwh7waTzHkP8icPqsKutgm3DzXG2uvSTemoRTesrjgGUYshGKox7k4S9o",
  "key13": "5UcCJrN4rPV4YFT8uhKsL5YziuNa2tV3cQhrXcnzNm94WKeEa7euyq1GveVcufgChXqSHjQsseDgDum4SajoUHQR",
  "key14": "2KeMmvCr7hext5jTNzFL2NFzs1R7CPMBnBx6HUcgQF1qRFTTUTFdu3aJqqwLaQ1oGRK8iofH49uJkkazVdxnuUdt",
  "key15": "4AheBAxuKYvwHNw7Sd46MEM8PNhxJkRpabGssJrEFtoZquULgC1HxpbTb8TNX6HQDrTtpbSqQxPf9vBShiXTiAWC",
  "key16": "5rPjfwZPh2bn3VQwxRroL4o3UmPneFghT1bWjfg4orDV8wUw5e9JbTH1H6X1FqjqRxnz52erooHiaSUkKMNKXMiz",
  "key17": "54vbXM7Ngcxq1QBoBe3bj6EHoeV2cK7KYupC5uwDD84EycBZJ4QLYayHMMqN2t5P9VZQ4qLvotL4KzZq1ufoJhte",
  "key18": "381b7f1HqYRKzMKU8tw8FvJDrCyb7UizdNnPJyUebdPCHCdCzuJ9hS9YJ7FcAutcqed9qMNmr6tPtebqos9H3NHL",
  "key19": "THfVzjKUM6DN1H8DzZwFsMdQEh8sRHzanui9dAbxVd5D3JhMyjUPRZoZwAQQjAktBjoFcro9g1gDxUA9E1RHXyK",
  "key20": "65NXeSVvw836MGDJtFFTcBqdiMrSNbzNtrukCJ4cA9kW2uvGPwnKPrkJZQPeVnSV1UNqkYSDt2wxZt2j3nosnvP2",
  "key21": "2HHpmZFx8xe1g9ZGSoraZfHsHzhdECYHHxoeTXuTntkjS2wxTdsJgPivDptaKuSULaGVqaaJ6L9R9NFC9DUwuCrk",
  "key22": "3AbJTXQj52wg1ozQceZLARwei9yvdWK6NXo5vEqYqCLE5NBwysx9vTaYWrm9S7gr28cQbB3jaFuVqyBaDSuXZoYB",
  "key23": "2z56uU4oy61HCsbuoCq73GQ5PCr2eepnM73FffuSwmtXe8wSXeLpYLNLVDD1s7mUGxGLvE7LtzvNPFZBEUPzqCvz",
  "key24": "3QFzDBTHkbseUNA5ZjPYXKfW285qdCNMNSnu1uA6rGD1sSKQ4oLWMFTiAi1JW1CAZxYUfX3d3fxcwRd52sxLrd6t",
  "key25": "ULzeHgF8w1ccaEx69shMkfk4omMbd5rzsL9za2kJQKbdzzRcAqM3CB9hCmdkncLBkhzSeJ7HGyFKHM8bLdmrCGS",
  "key26": "4HLooJLL83Vst22qQw5bog5oKntxKuwVuGWSeTn841xm4N8u6gmSEYFKRX3X4mzu9gBAVA3vG91W4mXKrFTSnqPG",
  "key27": "4UBPtigVVzvy3ZrsroQrZnAHZ8fizAqSLJ9AKkh4GM45nV9wqGcBYhUgBnX7Knr7oosyc3BygKxy27N6qUGXmNNe",
  "key28": "5Wc4FoZ68kpeYAv7FF9Akc7yxGXim1sHqzj4myyPA4QnGuYvs3mTEftDASzoqjLArtTKMVKnvWj2b5yFraHarMHy",
  "key29": "5zuLcrpLGgtUxXTkbpB4fwKYrCweECMi2v3WMyT6DwLqNjBXUtMGonYPxNfeT798RMnS2wWgQXX2vt6gr32iwQTQ",
  "key30": "jZ6p7idUcWCxqmCaXth1tacpnbNqtugFAXwhGQKGaKkh37hgh4n2LVqyyVNSU2ijXfZXBDGvXZjG4pRL6TVg4Lq",
  "key31": "4YpygM1qSHLwyud1YYf29Txpazw2F4PJa6KSvoogh1NAo34Qj1e4yNQhFzNPspP77zGHigRh1UvLJtReCCETJC5V",
  "key32": "4MGhTpmiAdQvwDF9kmBoRzZjyRPZdFGtZqE2wRnq1P3uBJKweR9fwSvBKaHgC2nqununGarBhjov9YoYTVrwojjh",
  "key33": "3RtX2yCmNC9Z4QKAn43B2NkfQo99fxq6ti7L6gHU2XBSMrXnkzAnFzaxm5uSGhRTjBAUwBF9FU8ZCm8Hrv1fWWmV",
  "key34": "2j1LwZ8ECoNFW3dTxx6aMZAr4SJe6WBYAFekuiDAj8PezrmWz7CUQtYL1WSfhVNRikmdHFGJVrMYi2WH4pWRxfTE",
  "key35": "2acr2JzfZgfnggJWGfEQ6d9jFom5RxyX5MncPjEqoTM1T4xdZLJwdyuLrDkpvaz8Ppgtd8mGzY32xVn89BCNKVZr",
  "key36": "2eBbgad8pnHqSDC5Fk2TQR8GVWVArx8ts3CPYhZma65S8LBRcvFwEdXDLXwocDb3B3W27DBBGxoM2MmFkCyhizud",
  "key37": "88afT9WJMqkANdaRS5ZwybdR5iapxyUVCGTpuVsHCvnRh77vGRryFNRdJ15kvQ7GywFnLibsJ7FJ1mYDKprqNd1",
  "key38": "5UBtfRLVbUKAPBQXKQC8ePtos4ixP1kxabhC9jwHuTkq4vX5wpgTaLeT8DwfFGZdBAWFxKYWSZh27JQidDZT7kpm",
  "key39": "2tbAunFn7oAP5XLeawi1jLU7DncZCQGAXsS6UoZtDUzHCE6dYTkzunAkAb2gGGJjSFKpWHSp7uyNKKW6GoLLe8ZU",
  "key40": "4JdXD7QKsHqWHpZKjPLNMtyBJGPstU155fthEKYGFknmFB55Tk8phiMcrkoFnJ1wNuqELMVweVo1BpQDY9DvtmLe",
  "key41": "5F6uWAwSYoDY3N7pdnU5w5HLZ3m3GkdWfJGZpcNNfncvFKbF8PbztuZbt5jKxCVucPxsDNQGs4qbdqoNt68SVpZd",
  "key42": "4rTqr3goco1QPT873YtC1cdTE4m9LVJzZjAw6VAsHqZFsyxduExNLWwuk4JkufdgAZkFD9jc8snGhVLjuJpEwPuf",
  "key43": "4XJTKkmmxr4usH8g9ef4YJRDswKpBbSoDDMb2DK1XB1Y2XcpmBK5J3h5EeYgtBH1TApbqZy1L5GrjihVdtkxfFPP",
  "key44": "2Mq7BDG9XbYAcXgCgTSMK1vA5639KH6gd7uffLbrZF59bA7CGbD7cpJbxykMEaTYExx9NbqUNpXSKZJoJwcbUMre",
  "key45": "2nVXsY5BrE3kXtPJozHRJYAstipi16YkQn2RLowaTBeWiQKFpGpvrb5u1zmKr8n9BoJymnwWnVBnG3cYd8Byp571",
  "key46": "7guSf7BCKztDgZeEsNTNQiFZxzKpzbEHgDxpsobkDEZg9dgQDcdLruuAgwuBULFVT2GJJ51udxqB4KFcrxsiGMT",
  "key47": "3UXhqMmnRFo7FWkCDMAobvhcdvCT6987z6JzCqHGpwQLRbELXFWSmQMfc7GgE9ftWuuW6aSr8aG8nmbDr8zpmAKP"
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
