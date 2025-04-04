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
    "yWyWqQjyJ1YxYD7NE8ASWvybEs8Lt43di7AT8dQyXYUd9A7ByVpfUTUhD4KrLSvbczZPwM9aRFwMQff7gkPna8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9KxNSZfdGBBvc7gM4heMuxwLLjyUCTLS9QvBFCthLh4HKhZv1kFRoz6e378C3QVNw54vtn8Ntb9NzAiRbbQbB9c",
  "key1": "56R6wHpDqGsU5z51proj4p2dsFLy8Atx4xrwp17Jpf99pzAWTC9VqfLwQ5dzMKAbaoC77TCDyvedA2Bi1FoLBWjH",
  "key2": "iBFQPyRzrRecsdj2dxZbDNDga3xKBdSsZbG4RgTJFT7eEm5782haB2pv9jHcjFg3CA9gAjfz79Vjek3wvhC6SgK",
  "key3": "3T48w5AdtXCMLg3XzTYPCuHsqVZ1L3Ho2AF9Ucf7m3fuApmM8gsAw9fcZLJiseNkauZHSUBeCceqNQHUVxDnz6Le",
  "key4": "5PujjqdHdcFjVtPMDLqK4y2wFndFVyFytsPTpfcpNVBfzEM17nXeQrLqhnkGi5A8BZJQQh3pSt5Uzx5hzn7fuQrK",
  "key5": "wAaYvriwTsCEoUhaySGc1qpTLLWviCQnwGXYnwFhgfaJ9S5DkJvv4Kb9svFgoYWUVZM9QvRp6DwgqjgcNWAUvVJ",
  "key6": "2NVNJqY2VSffVZeskvDTRCTj8fCjA4TSqXDBuKhd25Zeex9SzCZfH3SWdtnpQrRKxw8nKm5YqNKQa5nQWT1tNNb8",
  "key7": "4Jg5djybUd64mNqYiKCLBWEvQtbFS9AHHaYQrottYWEG5xWygcQirseGnLixcoVQq9aNhNKHewUjhRyTtsSPd3Vs",
  "key8": "2jqB4qNu2CRSnvF6fba3aYfuSvFtQyNbpijj7rFC3NtJVBAGAvaNfBxzpfJnhRQknjHLC3CoCz1geiXW1kU1SWJz",
  "key9": "2FXhvAChEX4JZfsH7tTyirVW9vMByKwPfJPwscsRy5uD4fT1NrJK87awEfAu4CoQCfZfb9mqhQ8f1Lr3h1rSyE2S",
  "key10": "tKk7obQeLNYDSN7MLCUw4qXpmLyTFGJNg63xQujr3HF6s8HGeb1cDVARMRGRwv9PoDV1TqbFHyiwPCvxTevoXdV",
  "key11": "3ysBcJLcT8NosbtvQhQorT7NaXHRvxNAs6vdnb2QoBw9YcfmuB3pXcAbvrNSTiUeFzSL2SEjYyKsTdLZWHd2NJ2J",
  "key12": "5WEVWuMGP4UmbQ1oWFVb8dnPM7MvuyeeqhFraggZ4cmUcgLFXbVN3hMDv4NFfTMnDSW6uxmRugKYDhpp9ctcsmoY",
  "key13": "3QanH14CKHVXF9DRvhy46kp7WpFADP6qcEbRXpvyLTHJDyUVspiqqKCwLMZZSod2vBjceZCRzW3ADCgauXmRTFJP",
  "key14": "3NRy1usKxbubnGeYsrMeQYXgH2DxLotLVwrhdr9FJnrBmfXpBHMSatTC6T1St51oefkKYDDhUYqAEi2ztFmfLYNG",
  "key15": "32CgHpkbHSXH4TfvPs5HYakHvikt1x7DhEer6nN9iN47m4nFDyqgMptJJPThspvEMr6HBnBsyqSn9Mt5fWPFzFA1",
  "key16": "5XszU2CnV3R89Yq4NWuCadcjc7KWc2G3y9rWLrai77QZSNnbrAs3E4M4uBEucmotRQMvohw46X1mDeVKiVXuLeN3",
  "key17": "2kD6RFAdXriaYvvKRySWWLMDP4RboQYMthgE5ifTEr4xTczsaPHGc4EXnJUnCheS6rFydYqaf2849s3tawHJnoXN",
  "key18": "2n7JvJa1bB6u4bvWctPQGRA36aJy7gXyxzDGsdapd7VzECfvUWAzwxvPkmVKxaiQfS6bMAtSssTDBwkzrBqdKaqU",
  "key19": "395TdogmRCKF5gwubx95ymJ5Bom68zuZTYZMjGMXeovZHr2NpTmM8G4Srkxca3XgAKD7dsuc11C5B8mpc9aNdLC8",
  "key20": "5ZPUVEvNB7H3dWQtSHVTFx9bi6JBjPNW96UtFgvrM8AvuLzemC47Q6Yv1XUhTNpsrhy4sCcWxd89K17crLo7eyH9",
  "key21": "4rSHtCM6LzLVZ8E4EvpieqW3K253BbK7ZKQYNJWEwyVSnhRG1XqLFGCJzof7p2ZGQyU1WYNG4NYwfLTcdQdG52U9",
  "key22": "Bfx4DcUnJea1TideKmcRbzD7UZZLMT6fWvvfygxsLt3XAdibqCSd5EbX82bv12eTnw7JTY7Ar5DFNbijZgVXYhL",
  "key23": "4qzCpewfJjQMJFjnSovxfyqeGyHEHUsTW1sPAYc29Lb4M8BuoUXVGUj5K7txj8R9dmD6bUkUbVr95nizyzfoohHi",
  "key24": "5n6yru6zQKissFKPpHHJVHjgjHMwfC8FoSt4CMDw7YGDhm8k8wprGmy6YzcoNpJYQHA16zy8b69GQpaR87Kj5rgE",
  "key25": "592FHB4m3JeHdyr2gwtBUTB8DfmGxkopzMWHJFwmjqMbuKYwZCBpefwfJYiHdtrRZUGLmjkrs9y5FVAiRrYhq5d8",
  "key26": "5hz2UKDtRgvGxjPEP1pcBGh428QpLFcK4UzjWXTnpK6MmisG9atCfSjawHM92DFg3sRPnz87GxUypKSR2PAGxQqS",
  "key27": "1ZWQwrvPuAfqVAwgJ83sZx23SW6NFBNuqYExJokgp3FHHWzwQFEws8tTpTjVz9ob1ub1yNeC9Wfm7t1xsjnLUBA",
  "key28": "NPRFQS4LUBRhkqvXz2bnpwBzTgj88ceK7RkoEyAQWuoej8SgrXferHQYv8iGZVQ5yKEa2Sm9yZhUumL4mc4oPoY",
  "key29": "2dHc9S6hsWfSrNUgQj3eEFoDNtoiqbh8hHXTNbTbFp3cysRQxRfKG2b9YNSXSZ55UD3963M2ke9XHCGvR4BKqNAh",
  "key30": "5Eoc9h1g2qDN4JLeN9Zbp2J12SMuWNgNLdfYLbqPQQUS6t1N8Gp5PvGffEmLAjV82PR2i21bN3s1tSLWnx6zmLJg",
  "key31": "2zHmZNy5RbzNa4pqQofxM5ts6XtiBsPUqFr2Qbj4gbhiENA3gU1u97dX6XBaPWoL3kkw8VPZSHJq4voNoEoWy2Qm",
  "key32": "2MC82WwH3yRReWV7LdUF3caWumFDVG3hccTusSwjBDqDcwGfxEABMnnghEVYLh6GrRW2Rs1pCAmdQP9KcTSjkVvU",
  "key33": "Z2DFU9iRkMgQNTBLWfBoAKzb1itBMir5sTNLWxCpAHE8DkFy6K1LY6jppyt77yV89cMypVGmZ7efiLaEzTmkqmm",
  "key34": "2xMix5sc3tzPiXzQQxGGjXzCB4jBq2U3i1wRJPEGFUwf8GPtQfZ1XhUrGs8SPcc2ZEHbaghKF59F6DnoiykNvrFu",
  "key35": "3Z3AgepRLbpmqC9tVMufkThjygdHSsMzwXUtfCs4gigYvwfR3Cch7du1A83ZcdQ66uUmoRiyragV4kd6YrKJjqTK",
  "key36": "4urb1w6q61mV1hBUQsdpcb228R8pNiye2HmMVqBsw9YbUyUUrNxkSSRk5eGrtYR2LQcC3B9qtvWxRcR7g7cHm6aZ",
  "key37": "5gmf12tdCSiNuY4VB9zSTebueX2gvzexAG9WcwLRpX1NFjH85ofV1k6nng9foiDYfxSMC7JEbCtGKe6VbUVuaQ4x",
  "key38": "3MVAKx6hpQooTNwXmMfrzeB4HEYXsc7NcEWJHNFyDqK3Vbvc2qqu3XkKMyVtveyKg7wdgFjwFwDHnpkehQVPy7At",
  "key39": "512XBViqzJLvUmzUhpHsGkKSf1jcdir4Vka5BKky3jA7rqBeTjap1YfJ8fHbdftiSn41U6ZFKR8321uhbuh8MeXb",
  "key40": "4EffzMCxsSFeJAEDD3Si7vuHkeWyUMzSu13gQjUJRHGvAjK8H9XFuCbcbhKTS1ThhaWwXuFYTYSeZ2n4QBXAtuJ7",
  "key41": "5a4Qjd75G64evF11XMDUxiUjtSJ4SGxBBfZ8EeGXLtB467nMHmVobnpWQpuP5kdaGwNf7dMj71CSeyteE2s5QiN5",
  "key42": "xX8HNJo3pqhFuiTr265rJZh3b9zudGG4Wf2yFpHJPSGHx422hnEEz9qqVAHCNwL3RUNxGWekrjXQXZVUsMk3HYf",
  "key43": "2FbXKtUbqaLm5NENohG32rhsQA8ujyXt22YJFJa4KAvPfG4t9iCF7ngQ2bx2kWTzq3xg8jvocG5nqSG9CEUBCesg",
  "key44": "2j9WuZV3fvhwD5GgZLwrkRLtHebUfeCieM9nR4CKmNNG1ecwYa9nGcFzNNPnrTtYLSjJqMYAMqQLqNR6Cj4cTiKu",
  "key45": "34HY8M45ZneGTXhCSKd2vBdRTdsMTqaJeCsGwY88Cv3RCbTxVrhEoajLAtEUwoTdBxXuU6wLDRCyc6eg6MK2Gewz",
  "key46": "4ArLHWSNL85nxgCAcJKghr3L3y7Sw5UBj9fmVs5ttCa3MAcxRVzGFtPRurnMJwtJurHQRmMMNYZsWcmmNbK13Fis",
  "key47": "cRe6F7KKMRt3techGDbtiXrd4Gtx6gzJ1a8KLYFijMkAUZ6k8sqtSSknYKpH2sw51jiFZva4B9zG4eEK74qfdbE",
  "key48": "3CQVVHadPP1x71LmwQmxDbo17u8gxEZak51qYksTJ9btLwSrpyWbUkDWWTFCPkEy2ejEw4onMaDphoyL2fEpNBdX",
  "key49": "4k1zD7KTdF473ZPgMeFQufNQAMquiGAhBePsuBPLUNbCXsBmBEmukVHNZu9AAFcDPocF2oE1VftnoFH2wHpgeAiH"
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
