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
    "mNnUdnqngTXqSmMVf3ShhsE7JCZMTHtnEsfn7FfqKh5F3n9PeuVo4XndhVWucMhL9TLJ6xtWsQi431ebCfpYBXy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZEdwSnkYKaHVevKvhcbQZqTq6L1rCJHTMLN5esLEyKkhC8pvoetxJLazNGLiy2G8rDzw9gsXfYuM7dR852Q5Jnz",
  "key1": "5ZkDauUfhAG6Xg9ixqgGY2V3SnWB9PGJgAmdsoWPPMTzpwWxdfcXaPrQkAzEpzVUDqkXQ8oGCHrbXUQJtVMeG52u",
  "key2": "2er7xskuWnVt11MHe818YrWtbyHtUxhJmoa4gfWSa6nT36CJrbT5XbX42oLq5v2hzpbQ5WVRvvHfTy14wndaEUUS",
  "key3": "4wuRMgvrUj83smdFm8F24xTnBkniN6ZamHsZry3KcPfFBnD1QBhWpjcyN5XjbmSU8Cn54TgAg3gZvWTMpD9nSnbi",
  "key4": "pNbz9cdSxYtx1h3JzDKTXvMUqA3VM28WR15FBjkivHr7UCWnXwdPukj3MeoZCyG5DbBpgH6rM5b3Ht77BytaLMo",
  "key5": "3JXsSRAyYWmcnCLthdwVSF3Gp5KX9GyhLM1bfTJis1phX9sRBHqYpp8SMot78752qnKAB2iqsVmxxiYyqdqFfath",
  "key6": "4tfrT1WHXDzp1wQRDA7S8Vf5HowBt41x1onxpVWa8C5WgDpaZSj21SruMm99fdVQpmwoZ2Q9wEUyQSwLtpoZn99c",
  "key7": "3L1JVQpY7NrMzstRKYAcNYjmgQ51pjtbLy5KEkwamTXqSmqT1GffzW6ydHj4fRXdA4FGQfPZzhEbxTDcDtQAwYNS",
  "key8": "pbjgvTD3qWPtyAtYPG7KiW4tgokyrjz2MjkJcfa38g9U4z2BU4UxU7Yegzqzp8TncsrACiPpvXjmJPkmEQLTYWY",
  "key9": "3ezMwvRyFXfSARyVRLCeNe5pv3K7EcvsYCZgQXcr2UA4u1GKrTdhfxqjTxSvqzn3WU5EGZCHjVKSP1Ns8mJapE9Z",
  "key10": "hazFQDjj8ECjQjUx3CodHSMHoggN7qc4mkPvC1vRaFphJ9Rs6YW4qjC2sBpGbS734uB66Cw3cSBh9NF6AZ8KPmf",
  "key11": "4nsA2wTrnaKELruihUrxv599ypr4Qz2DHxnF8tjENZtPnJL5CapEqzoRrSXDtzwLeS864YDQ6PR354G1mzgv1Eei",
  "key12": "AMFhmEoGynMdtrzNNHziPV4e6JemiQ5D8sJ7YK86VngHRrCEMEoy6AeMS3tJTHs8rrZqKJyz6r7K8ouhhCEsA33",
  "key13": "r4oeamTtaH9ZAZzMewE3j9cNoxXXRWdUzkucbNAA6kqUxsRWLesMjMunTFEMMt1P1uM27VhSjFQuUmYFUeZUoiS",
  "key14": "3ErzjyAKcRoAp598Ftyd751XS6WJY271HAQrcvKD1RGNCRJkdArVJJ8RkoFtdxrxqkNVxyoSpUdyi35QAnu6e1Gu",
  "key15": "F4rbUcb2F7nPJ5UNV1nQmmmNKWUMHBAZSGghpH3yDo2x5d32uVxuF2KzQw61ukwcuLUKegz2dcg9ChGRoq1fs7F",
  "key16": "uc7aBkzhHkDH6vVWydKTDcp3kzRTjJz9hPfSqw364mn1L7xcsmeXHN69Yvsvn7WBA9p2NyhFxL1e4ffeXyij6By",
  "key17": "TuVSVoYHmHh3QnuaKnAqmDNyHFoPeTAtXMRN7TXrmUoRGfAyuAXQFudWqy9nHb69HAC92CGnbsmKjdybnSRkHTS",
  "key18": "yRjABpuXjwY8tmoyp9Zg8Uu9moXAiHPxxksNbbEnCHr1Yuos1NwusEwDd4TPRSDGBWaxFFLGa4V7Y5YcHbrptmL",
  "key19": "2xDygWPENsyrLnAmfZ2STTfn7dmaqBDnrRBzR85YiLVfDp1Nvh8ZAKdcvHLVGMSLpjheMViJiazXbEe2UTRiHaTk",
  "key20": "4R4nTmZFbPpB5nKjmGqGF4ShxU27uEdLCK1nSWUAMzd9kBCqq2qgYpGg33mqLyyYy5ZhDTkwgYEdJe93BDYLjuAq",
  "key21": "5QM8HWhd1SPU9MVhwvi6gmZafVVdA6RMuTdbNK2gKcgiJZbm8hCFKjZy1j6EX7NBJQf8QWQdV9utKj9cjBuUqLuV",
  "key22": "5bDCVdttFWaagsLhLacw4rM9Yqeh5ZcowqHAoXRidH3QY6b6yQrFcqFX9eTRwGArvCc5DqYuCzxHrVsi6ndR4SK3",
  "key23": "5TYyDev9P95yz7gbHLxT2QcQzFNG1jkrufwaEDHqfWTfuv91imrQKUjx9Mjue5a5aNbAiiqjNqnKG6Hfx9C7FRgg",
  "key24": "4XmSJV1LSSVP1GcRPwwnhnMW6MG1UPotVt6Ytj8VU1Tu2AiwQXaf2xwAJh7HqtDywwamfTrpsxP3d4xN7aGBvvpN",
  "key25": "4JzLkUvMVRhno9VZj5u91bU8vcS72nHkmRYikMsgZhp1eZoTBqfiN68th2tFYBXZiqqpWaA3G3iGxD1wuKZkRogy",
  "key26": "31fVUVEbPmXTQ75D2mrR5y31pqxe5Hs2NjC9mxgNNiLrcQUPU4n8WBvqaXjQEqZtAZZxJSKv5MJqKAsu4Pr2qVik",
  "key27": "3vyWPWbyroUA5EXBFfQw9Fqf2pgRXLD2U1kABuhzchLiyoqSn8YxrRiudgS5X8CQUo13DbkYHUyRkz6tiSUtowDJ",
  "key28": "5RTx4s1MocRgQphSrFq2tG5RAMSpXkRLEAVMgkMb6RBuEzCnzuZpCrMkpK9DK7vB6PhJTL1WfU1GxCofFNKyQyCT",
  "key29": "9D4SeWB2SKzruBjKTPFuW3KBvomTsAYmQrFYur8n3BmbkrnKZcMrRtbstg96AKotprm36Y6SF4dDZMKMSHpUYba",
  "key30": "25HGLFTgNPDtDJvZ5cPqjKiL3sg5Y6a46tKbfNymp5x6ddkkdabX9HEJyBjTcppnzsYzsTFbycRsmrec77xwfHnZ",
  "key31": "3BYLanPJ2UtqWBNcZ2Cqm8yKgrYeL2UybY5DT5iFXvgwxaHY9aa4YC6b9S1G2z52yXARgupoSSXySgWG9Xi4vZBx",
  "key32": "CLZdU7ToeGzMVcViTuQkN4MgirhYf8TjZZqNmGa8JhGW6jeGxgKfkasCycfiHFandpYxmPqsuUwRLeFWwRMo2ja",
  "key33": "3sBvUB3eLsuLnAtvK7boBkPmvSSex5ft6eHU2zYWyymK16atHkU9miGbJMHJ1WdYacGaeP7QJkE93zaUQE7Nt2We",
  "key34": "2r773p2iSNN2x4XXxvZAjKGyYENxNARCMQGdZdrrwcTU3BSV6Hwxx5hyuFhssaj7xuSbpBUBpuHFmrqL7226krsF",
  "key35": "5hQ1H61QkzGXD2sNVt2osUXBxY5uGBdjkAt7hCAcME59y2hekuh7JcDvxCXGMauKjWag6XcmFnbyot1fmt4NB5fp",
  "key36": "2tMUPSFjYEU6JJTbZCZ5xwN4qozAUXzBpwB2eXEbUai2dWH5WB6Y4jfszUSWH73jnTQXeNVeTv9vcuA83cvSsCZg",
  "key37": "dB7P5k9wTAGapyTkooRVemFoHa8HPTXGbjDPekUXpcmgt9egqR4AqMA5qCFVXouKawQGgBm22KkcEmCUVBDQNep",
  "key38": "31Nryg8Ur2cXCjW6KT65i3SsEtiK3pSDt3gbvhcvCpqLH1CySwhrgcDAhUvPypQwpVVuVe4qGTJPkUjrkPppS4UR",
  "key39": "4CHu3NDBBR8jzPg5XSP3WaDLf1zrMVEaAiALuyQuNkWVEAqTvFepUvhWdKvRvgmbMw6qbLPWhyNJVEJgmcQCvVfi",
  "key40": "dyc5rZiBUzMCcnQpnGWTvKjcgZ2zWBCJKmTFV66cgcuneJHn5KRBHipGr2nVcRGhwmFZGb377mMZTTWCJQeQtmi",
  "key41": "5fd4cpgo6yay5EmqAKEmy5UM251RHcPCEm9uCt77tjtj7nrKx18KZnXUncUJHKB8sySCttfyD5D8MJRBpTtnD5cK",
  "key42": "39pkSMp4qUagkerVBY9e8Apa1gHDNE9F7f4zeLVD14FnTdJTYyFy1HeePbZJ7dAf2TRU5dttHxdJdYhd8NQB4bYS",
  "key43": "3XnW7PqHwk5F5okUSMxo8vUJgTLqzTv4PGtiN3uYe4SnEwVbZPRyiH1cHFfnoEq5i5JJUnZyA5WAy33qD7MbHYci",
  "key44": "9dVE87Vg3h5H9QBHxA3HCw3ALwnK8zzx9qB8tDNCdF3NbTnjwfwwW8EQ2AfeS874No5AfMg7zvtuMq13Ezcgjbv",
  "key45": "2kfETmyMeLy3kwQG8Y4L5t4AVrywu3RPt6B5AHk1QBddrdZRNAPRnhsTGgdCQP4dmarKNVW6c7rnpSuxiTybLYj3",
  "key46": "55a2GKj3F7pVZw6sFFiYSMxXu6rvVA9tUwLptywbbEHsgPDBf3esQK1EqPMS7GqZVJFR4svak8ptG28q82D2qbbo",
  "key47": "4KLrJFgcASB1odq4pM78MKtWbR29poT7PTXojajvAFxeFMaJgUfyNWDLTzhDsd3ZZ8968hC21hbmqFZqSnAMwGp4"
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
