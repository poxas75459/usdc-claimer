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
    "YpDLM79dgXiKWVVbSw2qpNRF4cWduVfhfeJAvtVvXt3SS556QQA2fEkPapQG818PZvJooADx8Dn5niGzQxbwgES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KpKpSKqTfB8dSLMU33K8xNVUaksQMfxyotdZzybcy5baLiNQpECjMLFMPb9wnJDzWsE6s75pTXeQ5qwqDr958gx",
  "key1": "3FGXpFYbugiq8CnvECpNHfpcqrqDhBqgJZq6NjUpPUZeSeHXcg7NFd7BNgebyvb14syeFFSzCfXGkBN9ET4BUyD9",
  "key2": "2HjAsqxjBS1ugnzN25KfSnbE9xqRmRXyZk2NCnpo1N9QYZwGhijRqMX8G33qdZjEAyq5h33YQjkyW5VtHYGPEnEM",
  "key3": "4QakrutSKB2emNZPjKXwEE8sFziRg6zPvsWXrdJmZGUnbbgfWzzMCuobQSTKCzcrdaiKm4WWu6myK6oadHMe1Tvr",
  "key4": "57vobnQsTu1AqRnEYUVKFMsZ9NdruNDme9co1YMXNbSCdMe1zHJcXGua2py1biKF7cmmFBgH8k5rNTVv36BNQovF",
  "key5": "5H752DFTXY5kJ492mCpsSTtdcs5WdPo6ahmAiky9Xi2DTq7bPon4sEqjw8ed8uemxDnedSEayXe9mDPFVim1XA3J",
  "key6": "UrQEun47RYMgw736P7TA8GQvaP8uYYcSdEaH4yGHRL86voqbsRYcNYC1gSPbyTM5WxSCSfhWNzvbUg45qwu4vuZ",
  "key7": "45A5oPA8dh5tBeY6RoowwDgKgo23HB7Zb2TEfXSMY8d3aPVu4pruv8fEfBYQ2DCqPBoBHEjRcUjhWHkrYyWFNrY",
  "key8": "5twULLTarz52imoPD9beRVEuYa6P1dg9DoNbtWLELz5pDcm4eLb3oPKP7Pqyv4SkQiV832Gwp34W4D7DWDUTwnt8",
  "key9": "WBiHiPKmU1W3GVQcDaQam28eLBya3q2uBhzwCYYa8t7AuQhWrkGKhtbTLfScbCv6jbphjzwh5K8w1joJndjLptr",
  "key10": "56UBsC5YJDkjnwqorckDPgBcyihfmDmvKaVjALP5ySCWbqK9TBqbjwxL9HRVLYDnMLwteHCUA46cRBRHKMgRsuaQ",
  "key11": "65b43LHnz1115Mp3qXsKYQhPYxM3sCuo95xXbq7hLt7PWuHnnPTKLB49h8PRAUNzBn4fjEn4YuF7WwyiKGLfvQLY",
  "key12": "5f7Cy9WfQgV3oq9CtwiJGw9ouMVtxfX9w9SahX6RZ4gaV6SKTZUmfeJyKLxmiFKStVAvE2ttEeAbGqWoH6rPjkJ3",
  "key13": "5412i55cEAYyiU1hKvuGCBiRgKHwPxkLG8anpt46nfNbsMPQ2Yn1i9Q4cppm9PVhbb4ksiGTQhTAEyyBDEu2pvX1",
  "key14": "5epriprA1jYKcz4T4jbPegNJaapWWJWipTxiS6YagHgAYSqaZbVork1HWW4dWZhVfkxgjPMEz8812jV3cyegiZDt",
  "key15": "3QEmAQktg1J4F8VNTwNtE7THdPC9tnKK7HpFV1ret2uNyy9R39Eqn3DW67yXkTEkuTxvNbpf8LuokrwVP9JzbcAV",
  "key16": "4ujuSaUjpB3CXawNmDWkGPEPY43uyDoRyHgwePJ7RLANLQFmdSCBs3iQLdw83K3Avmpm2F1jWxf3j6AL7VhmLss",
  "key17": "4kfR5xBsZZfMevnm22dDgiXW88K3e3cXt1C9rivcPfKfD2FM3bgUjwcMTaedM16EjowFKdKx66EbNHn7df6Y69Yw",
  "key18": "673GBoeAsmKbs2F99E2qZ4hEAYuubyvGB9gNMmGtZAVpSREaA44u9LkTiXxAUV1eKvQfAugLLJQSevrcqrN2jBv8",
  "key19": "4jHsnWxX3M9ooWRSym8vmRG2SUu2hrYqg2qLksRGhRHHVUQjVtjvevzANphQf2WmR7rHNFLygWZ9kYMvVvLSFNrp",
  "key20": "59ynbmquyRrt5pfpRu7jRDiNNQ2uwKm7pvjBhaUcVZxdzob8P9mRCuoUkWypavYMHSj74pLnPBCE39injcJ2K8Lb",
  "key21": "3uXhAQPBobRhFA6EY9zbrJE8vdMAumT6UjMs9vw4oxxeJyucKVX8v5KdWrAewdeRmcqukv6AvcBaujNBDQkek5eo",
  "key22": "AV79hdRrbM99C59mowcMixkroPc385vGuJwhYWmthse1PV6ExLKLzCwV37Ggr1EPN1bkMCNCg6cGJMYTECeScXz",
  "key23": "P97yzpYWu69dZBti5kpohe6iUus6WkJdn44i2rYSANMpn1HvojmkBSew61WYZusoLvgKR9FjwRGFNcdu6tjBeBq",
  "key24": "2CaadcpWxnjhpJgyh98cTxDRRZVUkgg986UFXNwQYkXyJo79vz5PnYUD4L64LcJa1hrE4rhG3XzE9s33ADG9r1ht",
  "key25": "5rTJbq1ypJBErEzFqKoNRCxmSkWoZMgN4Ec36Cx4pqe6wfm9W5nwqQQVRXrGDQSatphNeoBZvx3weVCVLUrApFAJ",
  "key26": "5PvpRtT8RzNADA2GTvuLEEZfjgvXhHMYoBKdLhnBPyXVUmFBB46oARgGjPRMXMPN9RAbiuHrRuQa59NAxPJ2KZ4d",
  "key27": "5NtmXBUeEjdFC94qSydefQmnwr3G3UTejTv5yu24kvWVUqQBBSUroUDYocuViV568D4VLoeDmGvuvtehEJbdyzor",
  "key28": "5kycNfMTVn1RYBxfwtK1aKmJRaYqm2JFSh4X61SiXzYAK6mGyEZgYqWwKLAHStoifNn1He8schCR6HKuPnSbQLay",
  "key29": "4Voo2mYqQgTGEbKpzMLhukWerySDns9vx1UQY5B7hADA1wSwDAjMvcPU8Ykb9Dc1uBHWN24nuf4qkC7C353bxLtQ",
  "key30": "51WhnFUnDa1XHYz4zYdKrthkPcGNu6CLpvasWg5oQqh1aVjnjwkKhSYqM2jbakDsu8N3KuhHvkJQmmUjkd6AqEL2",
  "key31": "5kV4Ln76Hy6TUKSjZWtWXfyzitK8P54dhSHqAT13aSriKD15SpZBGHcB5d4vTt4Aw7mT9nV9nPD3AZxG8H81bNMf",
  "key32": "2wC1xSoJNF4wkMMU82paQez7Gh1PNPbSPZZ8Q75AVez2vb8JtErEk9NPX3foZrhXEUcHstGASGhZ1NvfaYo5Ljz2",
  "key33": "4jUAYhQX8AucXj54tvV9nw1ixEsC1BTh9AfZooqHqUyKhCgruJv7b7fgnvZ8ZPBcYaN13UpTEGNqNrME8ouRMAUy",
  "key34": "26eynmHs2V7BFHiJA181fvdu8FXs1c3uFZQJyJUbmkFdAWCKQ58qWaoUMgqfNMhm3FgF8y4Hu5ErCjeanagYVzmW",
  "key35": "4WJAbtKwVctsCW1M1tQvqRAXdH5P2Somst8LibMhS2BXNJuH3uKBbr1rxfpeAsB7FpU8kFWwAVZrGHbqJaAoPAV1",
  "key36": "3CU3mG9qx2TzGm6Z3xE4ufwpfLdDz4BtJ87W8i2grLXvT1iZN22TcMQ6dLnqu1jGRLZJ4rToXq7vdYYbjYm3koZx",
  "key37": "58otVeS2SY4EQvqjNRz9dF7twxdS2CM4CkpvmPe1yBC4u9oGw7DJtTkSpmXLmsv8FETmjzBA9FEKZNht7JE1gStg",
  "key38": "5tcf1ScE4MQ6iV9i49qdky5kwKfAdJ8qLoz7fo6jmoX8yh5McnU61fNYFfUMtjCwrcMDCrZnHDtYdKuvnDyYbZ5F",
  "key39": "4PPJeyR1Gk26UkZhJLVmV3w4uWZXwof96v2UrUaCkx59HzAhw6RXH32Gfrao1QVBc6ndgRpgRt6ioTbgb252Edun",
  "key40": "2rU5A7KzKQBX9xijwqBBPKvreqghjdRMLzemPqStWgzxq6PJpQkh1W8Kky8qLMvwnc5zpmBJD5JxHqM29cQGxLau",
  "key41": "3BXj2XMoBUducm9Qef7ejGoNKPskVaY8jV4m7tLj7rQUHqGo4iSVpvibJtcPtRKkGLm1ApPBfdkAYhM8ENqtTCgW"
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
