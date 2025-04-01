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
    "5Hmd3iB8t5wcSayepDzp4Sr8gAdu5Xfj4XdUKyFJ3U4EXbKoNUbvNmwG1Rw1WgicpxpkD78E1cSevKr3A2vUTQGw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bc23tQmgyap4v4VRoL5FBBQQnnRW8FG7M8jqAkPUxXmpY9NLYexrK5JX1pgN9UcHnZgNpNKV9nKV7r4hw9QKMhX",
  "key1": "EFipTiy82qg1fHY9kfCgPHVyYAeJtgN9QqNpvmkWyjeUjJVJfApu2BnJRbfJq5vRBQpP5JtM3D1afeTbbNdF2NR",
  "key2": "DxvnG5tHBU9vKU1qPVm5jWjcWQMXqwFjGvWZ7yY88zb2fbM3rCvtYZE8SGeqk3TRKFp5PZ4U2rGgvKxMwW71Ywm",
  "key3": "4MT2D81ffWeCt7mRP2mgzz2n54GFhxschNfTqKPgndZ6Bfat5k5tnxqdTAWGJ1axzhFXifGQ3Jxo3q211SK73tFP",
  "key4": "2mNe1sHUY1iNAFT5Rt3Zv8FCbrVexAzdM7ZqjDUyZv5u8YM19GcRV8ooCMCjEbShYz9GnT1m2CMQ7Fma2rjnwbLR",
  "key5": "41YtaeLqvvXwHCMQYBrJ5WUMDb1QM9cuTVGiichrVYZ6EQhnqqUNaajWNCnPSv5Ujb3UEpJhPrhLYhnhaVNkjbwP",
  "key6": "3DTF48BCCSpGaq5rdCY8UeTN69aGG1hHewAHLo9e6E43sdfzEXLwv7vZbVFKUX7aD4RhdsPg8RFGnnUe6Jcr2WcS",
  "key7": "5T2wD8A6Gy7nfeXRAa6rGuiXYB3PRkX6tcTJfEpmkN4UnoD6MbMDtipjR4ivxfaELgXhHoaJjfJxYCHUCMJxtfSS",
  "key8": "4fZ4wTRDMhMohjmmFB8ifmKGUDK8A7TGMn1vLBCLtP26THfebXgKGhM1sgzqnqYrUNbhJqubJRV2oGqZMWGszX41",
  "key9": "2MUcrxjLiknW67GXCu7X5vp859L4SPSdu7HLzvqB3YG7CcCAkFXGe4S17jptMV3XonQtCSziJwE2U5ynYUySARNr",
  "key10": "5ojfKYXYahi3DzpurNubcRpxF1oyS8eCzZs4SCz2dA7jit8qqNF3oWwHVfmuGpamtjkDC2p23NeNqMbiWhF2Pjsj",
  "key11": "4cnjCDoYBRpPCU1EBd4CNgRkWBN5bmx5fwUkqUE7VRZu5sW1XnqhedBFDX8P68HPpLQai7ST39Zg53Dkmb8Qaqh9",
  "key12": "iKv8MxErPQ1tRbuFFZMtEQC7RxwM45bmy4HdSdf7YShNnsKfWRAnqxar4MwZCz8mLhjpV433AzkAyuRypz6powA",
  "key13": "5ZFWt4EhFZak4uSEy1xkpwNFtJCLP5DUthvCbreibJGqmxVF7aL1jmXXvNvJqZZQmTkqmoEPJaZjfg9tvsv2z2v3",
  "key14": "61TTHrvVzyQKNawq5v8otEuPDiS9RWWGzFaiK68XDSQ4YvzdGLmxjBAnn5KcfEpqLURP7aG4WiWgkdQjNDnLp2T7",
  "key15": "24N5Jrepux1mosxHomZmB8KTERFtS8NbtmwoTTc8zTGFu8x6F3JAMZGydWYNQF3SAjGqSQ6ihMn68JNBcU1W4Qv8",
  "key16": "fvxd5LLHEJRMbogTAAEk5511YRuRHnknpHWmV4bg7VJc9aWD2DdxSMppWuy5fVh1CSfiu8rXonJhSDCh7Weokcm",
  "key17": "4Vo184yfuhJYouTZbt8APTMdQbi5XNJQdLjL1933dhyrnm2wc24wYLRAfdDvEnktTxbskQWTZt3nqnRKX8G2BSeG",
  "key18": "3A7RDRcSwkd15TiYHYFsEG7YsmELkSjZWmrxt99VD8fu6qAYwxyLXR1RQSmosct1vHcK7e5hb9P2NS2A5VQEUbT6",
  "key19": "5CbDWX8cz8NAEMPwSKuVqtTpsrPHSocRz8EvU96mDF4JQ7uod3HNqhFz1a6a6poHJq3Wmdfcmr1edKaEfwtBmG4P",
  "key20": "2nDjmZn5mUUz3d2XJ9nKHfsE3HU3Vw14LHoe9FCcgwjdwwh7fCSY5UgGezmd45dXDhfEP9C18VLSSw613253j58i",
  "key21": "3YXVz2S1X98SWTDQECCNo4udDUkhfqwsfs7yoKcU9AagYyz6FHPW4SEE3XGRnEqGUhbaJgvECqWfv3PwJLRLbJpQ",
  "key22": "3tNfjCPGs6ybEJRuJ44BfeoebNE1uEfaFP1Nf4auKyihUrCts27KH92aWkxB8ULW5Xrd32c8B2kYWQNGJYRHDy1s",
  "key23": "223cmWYZEyw1eSqftaF5JjfDTsopgfkuqpHE9rGzfxE1FrdPayAwQbNNgEkT3FQ31Au3cEvSF2AuqEMtnmCU6YSD",
  "key24": "5ts2QgJRAhMpzTCW4B8peJHUHyqc7wrUSP3MRadHN2QvyLdsZxszVUWWn8UJ9KbogTLkRWXQ1SCo83W76Nu3LHBp",
  "key25": "4mf6XdVE8nS8Px8osXP3mYWwQZ29149pWzbCrtrJk5zofoVmMFNpQcUn2DdA9XcakBiUnqPpsqBj6dujAQ7U2Tzx",
  "key26": "4ZiXkT73B1agDZTjmggRarx8cQzdTmoRT7CgonbBCFss1FgVWhed413S7QYHut3Nucbz7d6TSM5iEgmt3VvpkzHM",
  "key27": "3uSCeTzDpj7U6JSDBDAzQR9gXyXK7stu93kzPg9HuiKLwKdTcwP4XjeLHxhuxKyatQUpEH9ZsiuwZ8tD1wG1w1yw",
  "key28": "5GBfyQ83Vh32Jvd6WRJgwPxSeeJgDcRePXfQX9oUebhqWbQumDkJPkwHUJLEeKQxwPk38vZLTAF3Gdg27Z4aoFhc",
  "key29": "uDnBx2ksxEUueBrQPkvFRfjfKP9KBeDjweVFeJx6ZRRVBRWfpMSpqCg9rUJdRxiX5kH6ubLiwK4yEprZcm7tC5p",
  "key30": "3ayVNNs2fXCZWWADRukXN7G5XfkihsvRjDkzZiTyRvHryKAsUkQLbEdJf86guKqesmnJzoFzWbNJDzWsYwBtCS49",
  "key31": "3hFmnAYi9zFUSprzoADHe8YQhh5d3St16xhpYS4MrY3aE6hCZfg1XhMht29qUCPihiXw7RAMMSNCSUwf8ncue5Cz",
  "key32": "gEQqmqJhyfHucRt4TGCTBcGZ6oKX8oUt5bZQxUJaeJh7JTbKf7MAHqTT8PYEcu988GAWjFDhKHK8mJNYoNk9aQt",
  "key33": "5fZhAts4q3JCWmgizJkVAyicpfxSJ4tj69Abu7KZMQ5sUjMaGKSs6dF4V82dx9akFNQNWnrZuv2gCtqa8S4MVD4C",
  "key34": "u2fQRex6oqTBdN7LU5uS5wbHcNTLrpPYetNm6J39Yh7e1PADMW9xFA3y93etz923FYnA9vDmLJTHA1jNd1aPFzb",
  "key35": "a9fz6k9SKqujdARRCV7tv4HHwujhFFhPco1nqErWjvCRZjSCuRfCXpsjk3evV8bCYqwzJyCtsZsX3UspSKYUgMt",
  "key36": "3F6iPSNXYEdCiHhFJkSNLZMGaNJYK6nwgFGeiP7CrpDqUqFrMPzWJmPwUDQGNnQQYdGBKgwiLfMtbHo1A32ZTgA2",
  "key37": "5rwvvxPXVnFYHCZb6sB7j6NY8qt7CaUpDcBh4NRfnY6NFsSuCqeZEyDqfAhc4buqVJuGA1fFXo3RGexoxsUeLRuf",
  "key38": "66KLtBQEhApkH93NHz1qsXG3H7Anq9aHvDLbZ83mYgiWZYcFM46NLZdCnTbECt5BBXj3tBhWmCpqUhRsqZ8UJWHZ",
  "key39": "3iaS4U8w6fYY3aZkAUVFDhS4vDpVYHvQm7QPShNgTPmok8UaQ7eybaBit5CguZCBkAH5CsYhjBDLEiqTgukudDVT",
  "key40": "4egLaqQGnJvBr1kibMJ8aW1oYqYgUP52AJ7gqTFcG4mrAFqwD1Lv5Um8JL9yhgVssV7zN8wN3Vx6Sa5w6xs1pK47",
  "key41": "5VoXtE1ihxUpmWm8DfYzN7rQEjLL8gcz1pFHzhBk4Cs85eTkdENUCNLRNKxxgdrzFpWdeTgK2iVsMWYxjZMkTPnV"
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
