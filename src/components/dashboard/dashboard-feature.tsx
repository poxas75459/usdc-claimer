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
    "22HGTjRWS3N5pozWvzN12CcwZfjtJMEosPDWtZbk8MzVmPSJt3Ss64weCnTASTUAD5jdASKzWXQG16WTQNKwgji8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ka4uoxZBGTdCjNdECT9pKtvmMBBac6vQ5xqCgNg3nZV9kioThvtabwVtPrK2revrkCpbExjr2VhfvyKbKDEWUHc",
  "key1": "2m3SSnhaiwJPy1rbR48o6W1p78zesj1uHiSt1Ber4dvaJAoLBQXteX6kmc1z5tj8Go6VkbPJ9ZTWE9VXtJVmqWuW",
  "key2": "5SMc3xUq8wKvD4Y9LsZX5vrp688ofUJQhfbJA6k2Y6JBugFpgR4jMPted7vR5VN2UgzTHUwRVQamNox4HNgTcu47",
  "key3": "FNjuaYdRi7JipK56aGP8MCGU7Qe8aACep4evcQSmWdw2V5ebFBYJzGY2NWK9AeU4a63oYh6yJspZhi1gRMej1sN",
  "key4": "Zb5h1gcdyS2xnpXULVVCKYL4Fm8A5sHryA4yKMFAk465yApEZD3AFqMSj7i1a2Gxu7YUGmG8WeuJQh3h9GQFFjz",
  "key5": "2Kxy1pvUpu5Sg3ysa6hC8oru5Uq5ywAecDowJbM91VqsoEzG2zDDYiLwociWAvFPASgxdYN1g5uxMwMKLGHTZBbu",
  "key6": "51KnXMrWMj4coy8RZh7HVzSQL3w1wWwfELu4JPPgdvaXfn3nTeJ7puWh4PfRCUDMAEiYWS8AqB9g1o7ZetG52aXj",
  "key7": "2sE1f7TUvk2RpMojf3itGY1wrAFCF3dcmLYS8ryhSRXW9dquT5HEhiAVM1C8qL7h5BzQpSVsDsohJ1aStA8VYwSd",
  "key8": "2kGcTth14sEfbW5VUgBH2hCDbQPiaBwE61yRtqQ5iutKnQfz9JgwEJNGToy4UTdJviYuUSx9q5JGHESiCSdBM466",
  "key9": "3Rtcur9pM5WFt9V3Ace3f45uR9QVnJi3ot5UxngEhXSCipTrAHBYRt1Suo6oVCfjqKvLSqkZZntZyf7DszWDL3wk",
  "key10": "PtHk9cjA8o4ZpzR1qYedxV8YgUgWVdrXirKiMpVrji4AaqbPgs3BC5YQG4wVrr1NaTBESeAmV1DiAJJ6C24ynuE",
  "key11": "5oRM4nH5E4ogp5QMh9kSSuvjcqFpM7w1r52DbKH9TJ8zdcxyZLd16sZgJtYrXneFZAWAf3FbUK2yEewjh8RRcf3p",
  "key12": "2158GmnTfhBmJHXV83ajX2XmbRpb7gjyky69oApSitHJqri3EgkSB2sxW8SxT9RqRfEy3RHU7fX2Yhg6JHSnRbcP",
  "key13": "fCo1555h8y7NzfpahnBCWecmXJ49Fr3XdfYPtZw7uwTQcmu4xCRXDSyJpZ7yPLheiZe1jtgZrmLHkeMiryhAL9o",
  "key14": "GpieQ1c86K458QsXys8Sf8M9KRurtowfPeZwKKU5a1Tec3HDtj4Lag1mdMdx8jMDWDGihWK3KnzpzNVPtd9HgJS",
  "key15": "5HT6H4gAfZigXyhktK6LEeoCSKrYEUzQ7WYWuGGdEwJPTUGaD4UBTF9KXFREmu3kHJ8odq82kGQdc3Nromk6hgrT",
  "key16": "58miN1orMZ6iwGV3oG4M4GZywBwahSeM73zSUKhvGXGf9LY7Po3stF3fCo8ZGofoBy6eTXdVPPFjKJBRbzmvvWcA",
  "key17": "472DfiktTU6zK4FWX2Z85VTGtCmtiLE16ruRDNDUzbhry2XxjHKrvvzUCgdt4CLVQenKVQ1gqoyEHXzGrSNaM8Jx",
  "key18": "3bJUU6nhyhmm6Lqsc9EE82fVnXCmQyZAXqgRKcZZ687YNDxJMkWgNQcyXxRzkArQWowC2UayUFdSoVhkynvjbi44",
  "key19": "3Bym37r9Mgbk5Q1yn8RWesNj1a77ZysxHHjyutx5jPK1T8gZqAwpaUxRKxPbysxa2BUCLHtPs2ixrdco4dsWfVhe",
  "key20": "5gmK38fapZbHMJibN152CFKdBZBS7iqCPYY91S6hHEA7czfWRxh3aCYDfSCERDxA17aBq1RvSQywrg4QxiC9Yvbf",
  "key21": "5ecL7RERMSMhwFT72drpganB7nN4NHsYLj5x1pZmzfYm9CLXMdJufbaVSzMMRzDBwYKyojiYQE3sTkAyzh4MD8Yw",
  "key22": "4f3A4ddo9FSYiUGKwjbdMLaQt1miKG3gNiAqrQy3DUzQmAfh8W4smA3UNdzFrvYiriyuYAHiLaRvqM5X93fCyfu7",
  "key23": "469xFH4LfdF7MZRPZYZKD7QEFgWm4STXDQKDoJut7TmWzMC2cAnJeCvHRpDZqRLPMyXCnT6nL3u1GzBj3SRWDSP2",
  "key24": "RsXqaxkPUqmQspy4SbEZ5ZJohMgccD8Z6BhzKJH5HEKF7TXnpDw1wGUSFroU9oHRtF8fZRdSkT7cFBajy29UMkU",
  "key25": "2u7dWffvcAHZk7ew6Y9dbkjd2sJtdKSeziVEsDM2U2FYhLtDvbbeZ2tPUbJ9hvnTeRwmKVuu6MbpyZZmrJ3CXd3v",
  "key26": "4kbC1YeQPmfSJTFfBaftRwXPZxnA4YwnDeWA7eUMt4FckrvKrQKGkskJsFN8RxhBjyFCJik5j1hB7q9aKaGHHVGH",
  "key27": "5jy2VoUxVB7mi8gjmUk1bvc2RFTuA7U58fQU7EnNPpCerAQJExwJvpK5iiqYfYV4sWj4kE3vuqvoX9vnjBafkHnt",
  "key28": "38w6Q3uUsE4thi6iUHrpH9YvvpHkFHSwh2pttqa4CkiYqGPzT6x7CAt3Ufc6LpfAHXbrTkDpPADkkZsm8WJnRrCB",
  "key29": "4MXVCmzNiGeNoPqCY2jQanqPtc5VWPz8vqTc4HarnTHXbhNTpJyi4RgdB2vEbQK9xUxiDPA1z4D1DMZTWCNMQA5",
  "key30": "2SJbruwybbZwvtUzrkjZU9tPbhghomzDkSrv42zQf5kiArnRVPwFSxy69YHmkrGons4W2WmBSG24Qmqr9UhLzLyk",
  "key31": "4aj39cBLCbZfBnKb28T41WLzDHPRXZ2DCW6ZbMPH4AjbcnAQ1Kg2yeNEKYpwQjjCQWJ9pAyYS2NxDcMhRjJcbWWx",
  "key32": "5bTEdnAKo2GJFEQ9L24U9ufsRUK3KsF1owBojmaEvQt7okL98LQQYgg1DcFzzge3KWBfay377RzCUKfBYMxAtJUD",
  "key33": "Fff5jNGVuMvvnLERCAjX9tA1JZQXJEJQ4SNWGQrJRvzqQMLzV6LcnRJSFWKoEaFseyYZtHzXKot7TM4DBehzBks",
  "key34": "4dGyoH1tMrvzoC8ZbgcxkEKHwRvKGY3DWvTw9J7yeyUZsm31ZBq1VsFwJpp7nmpypShPqVKCsf6G3phmN3dQsej8",
  "key35": "2LxDXf3Bra6QqnSAUbmL3BNvDCWVsBiXAYw83Hb7fVJyFANE9knqVAaeEN2yT9eHy6bpMLDSDLCq2Q8Qp8SxfcMC",
  "key36": "4bB7oxiXTbFeDhAFsgmwJw41Ghp4LwqCuWt8w3sJQYR9EmkaA11BVZXQuDy7x9FGXMgZ1UDJZfvCn6vFAp3zG9A1",
  "key37": "48H9W178tsD6zcv7MUyaUNB1RFWtsqoNRV7r35eGtgfXadpE6d1CjLDS7dcN6vdm1nzAGKSCbDVvLYHZD4GMvQAE",
  "key38": "5cF9QyMTF1Tb56FHFLaZMVyxcs8wDfmf5aYDXMPzHiBytoLtSK9WVFDqR5dYMv94x1w2w8m9haabcVYMaC9YumsR"
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
