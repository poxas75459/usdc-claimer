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
    "3onCtG7UUxNScieXPpkvpJaV9ypQue3nHoYraJjR7VpN5hH5JFFF2mggjUerTrdBH7kRASXnAK3CZU5tswjnezYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SFhM8iucvnoCqCsFk6U5dhjVuuurgAf5aysXUSvmDwLJxcpGDeGvP7LAnCCnKiAnQq3rGgDENAqPVCjHLcGsDAY",
  "key1": "41Jf5Fdb2a7BUDD5hiWVrsTc4cbgF7rTrDGYFhHJyG7YWamm1dKrrHim6YQstp8H9rSbEt7aQvmtnB32GorsoSnF",
  "key2": "4qXvEqbXEQFnMBJxrQ2VzwigFz2jHHB7MwxzFzQdaPM4D5W6nhZwkjjoRe4WZULQB8rdHT9HzHCjcgyx89pHtj4H",
  "key3": "4fwhMnJqww3JWhggEh1yK4MnDbpCmgdWCev2zAH8hwwcWJ64Qh4xMcPBWvFEVqDQSBxSkPudMB4PqSTs9Te5FVA4",
  "key4": "2KPtLaS6Kj9cZ1GTXbZ4tRbESQrYPEDEnLDDC6QUnb6FvjvNLeo3ZnahpE5fub8JBzfEkEghtakgMVeh2s8qArkQ",
  "key5": "39tBEf4SNtKwLW1F2NiUbzMh1JGUwLyxZfF33daHmmTAJUcJPjuw3wz2a39PgowGUDXFNmtgu9votMUcU4N2PEzn",
  "key6": "2aqGa5isW12NPJZ4adVVugRmL94yKBcjhWWqzWDMQs86QKPpzxgndxF7qLGAaNhkVyqLyCoGvGby5pMBDW8ff5FK",
  "key7": "3d6WUspdgqeWQj5aDJT6vjhhubtpEcVYsVmdtEdx1MyaymGsBJqwfM8gDwSAbPzk2SHUgZoaDs7uPtcb853EoPfY",
  "key8": "KAvKKkDPMfJ3Cx8qxnRQ99r4bZBXssHfjPJEMBxNLVoGAgdv2vAKuktBAjAh56umiamoeYY6HjHbD8xzEeid57X",
  "key9": "2MuG2GtEX2WjuEn1FSwJdo6fmzkwFxPSfu3kH6vRinxXXgkbtH9UuscZGRZTVZBWTJ9qLAYew7RrWeYXi1AtMdfM",
  "key10": "3xHjWbdo5rVXY4GqGcr6Fek2qz49NmTfbrMSvu2fgbKcMDFJxGsmkvMYpeZw9nPnwgovXACgMvfnQ1Zdxfi3rwFf",
  "key11": "4EH4SDG2Cu5gpSTRMmkBVDCvNkiqWzV4qr9Qojy5KHvFLHxdCAbhhDoL2qgiJ9rt5FdKtCwKGqrGF5xPubXfdKJ5",
  "key12": "5yomSYDcT474HGoLwrfPFY8U2yfbkeifD1FTVf95SUY5xso5Z3DQSHet3tYmiDTv1gKFVqChDNzsfV4Q7SVqLmSz",
  "key13": "crc7QFYfNc8C7e2QSAfGFYCGggjsRzwAYHJeEJhkzmyEmBh5i4UF6KMuZVCee3HcUscJLRrLNPbp3ryhm4z4Pc5",
  "key14": "4ef2hznNmpMq6Tc3E5ngFxP7L77m6SZPb4rb2FRD3W6GKPcm35iB8fSBaqWnKrwbXcDk5141AQQfoyurxcwQFMJq",
  "key15": "3vto6E6vRrywSUkdTcrDLR3Zoxq6aJVtgi3t1XJos8EPkBmsgo8GZnEnDbzro2DC158B7w2gGxftywb11SbWoUyE",
  "key16": "3o5A9fkpAPD6HDnQzQe8sMvzaKaeNZwrjcEF6ui9hRNMwjuviZyoPjMSnAQtoX4hTHBdaJXZKpAw9qKXQehhsUDb",
  "key17": "43tKxuNZjNWiUbcj8evBivPh5jnK4aRktCN914hPbfFrr5C8GZKJsGYc1xaDTT6Wmc3L4c7f2avai9EEQgyqK367",
  "key18": "7a3gHg8SiNyFn3ixAvy6bLwJ2r2cUKnGSKdj4CVfACEtFDQYoM53dMqJx8haUWEqJuxB9r4TERezu91jfToh2bM",
  "key19": "3PR8a4ttpP4vhYxvm2BcCRjWqbdXpjWhABwRjpjtTfBYNnpqwtxNUG6dJ5e9G5JZH9vVJzMV5xdknE5L5AiHrA7Y",
  "key20": "573yHsGGTDru2HgSeGskCjuHssNUxCBzTc6kRR7anj737D1fBKAekVpdp7SivrRsVKof2vDGRafBiRuxqLFAZj2t",
  "key21": "36aJgQSUigUyy4AnP4yMyTfTWzvPPSptKFaMRfPLP4Wqa93tRubus5jggTyva7JuEJFmrj8zhtj4r21WZftKWPr2",
  "key22": "5n2By74n5KEUtCv5f99E8zytJpGAhzE9v7xHT3g4NC8m7vJHMiMh3rmscEUXSF8hG8eoopSzz5zY1caV1bZAGJix",
  "key23": "3uMEHY4G46vXJBTKYhnnqL3BWsnwKhfpRVQYD8qG56nUUvuGuNpeg7vNLDEe6w1rZxu3775ZTsVMQQkWUANirZX1",
  "key24": "W5eYJ4rSUkE6pPYKufMU9CK8aR9WGBycd2ecKW12h5BzJcGKU2GtexEJeB2jNc5iXv2tk9Q4LLWjtPD1punGxYA",
  "key25": "jHBbMFmbMMobf5N13hGQR4xWTTKNAT9hohXgu3bMjarZRUxhoti6rieQDgBsNHDMY3hb7VDRWgtGLTeHvbqoHnN",
  "key26": "4YNfriv9wKHwn1U5uVJX7H1ckWSRZbHGsHfB5WKmoKFGuYT7cPkU5nzEPFud5WbNeDdvSu9s7kAEdS26JJmsNTpY",
  "key27": "LQMnNBPacxrhmnAAvRLef7S43JGdMAo9GBYnyPzad37n3K5LExUPEAiMZpYwdm8w8qFU9P9zScjvAZRuaKoni8m",
  "key28": "3T9mnjnppCaCVvHWrARQQ4i3B6EJKc98SYd24MDo1DVU7MK6oLJfB5NoUMU99oAMzRMRdnxcL5WQNauNqo2FvNbB",
  "key29": "3Fr6mA6owS7p9NMkaRoApzKWDo9xqt3K6wT9ff78bPzgDZBHNUdnENLAPG5tVgw71dTqmdigXHC7mHSxHhZbBj7E",
  "key30": "277f6AF4XTQoBTbEApai5E3Evy5yF3dC8MMbeANGufpcJGjo7DLCq7kUWrULyEYw91C2zfwDjF3HV2j8mHHKbfVb",
  "key31": "ZD5E4PyvdTjuv5iRSrJLs3V5R7F9wu8kbvjhiBUpZfPZFfnptTJELL1JgnSd31Xd3jynHdY6YShMLG5KiBRSgor",
  "key32": "4bYUnfuTChZfooRX7RwWXWAVJ6PgmA86mvE5ETz4Rn6iEhg9xEtJLaKTs1T5CtimC15ZfbDrrk6j1iAJ4DjMChDU",
  "key33": "22ioW4rbKEM8g6zpUnLMwRUioAjisWGXcv5AmxrNUJNVw7cg2TjUQSNNQ14Me3pGS8Ktfw9vkUGVjGzWyqkCHvT6",
  "key34": "4kzniucbxxuwLSPTh1vXM9ezhy2Qgo4jN8CtZiUr6YXMDuWezXY6wr7AJmSjdNYgorQ67fFFRBkbhpeKRvun32H5",
  "key35": "SBcbwbwMn1dEZLydewtkBbpqZMb4KVwSuhASeiEp1Sb9MJMa3WJ58B5YQ3ME7L9DGycshf55nboxaRRGu8QwXBB",
  "key36": "CY9NiMhy31mVsawL2TazXXEx7qhzfEDx2Z3TXAvqWM4rB6XMPkWpakr4LxoytTVA5zaLEn4M2Jf7dztJx4RDvX1",
  "key37": "igtHH7pP1pxy6cCDxYTEi2ndLvGPt3iihib4pouhpKpMDtCZ5bGuasw6VXKTyuMz2ACUhJxjJMZmcXiSgqMxnVr",
  "key38": "5ZRTEsQvr8UPi3ucKpBrkCLs7TESmU353WjzLkLvFR52HP7Cd75BTPyB3bUsCc64JeN7uEpTzvi53k2hNP1Cxmdg",
  "key39": "2YBuKJEgcbXsUJJ74TxE8LBJMnVe4q6EJJuw4wNBcz7VhKGtgjtx7tXx2mUHaGpY6SBwGVYaNK8qojzPFjLMEAMf",
  "key40": "29XpgX2menJFLmhrJVw8f8wat9VkQDPK4XPypmK6K6aYJ6Hg4kEcgX9pE26AwbTRHihi9LuxGFqWoz8vHpo3VWZh",
  "key41": "23bJVRxWeSXNzLtvHKNRuUGt6Rwq24qpmuwDCtcPwcAYjjoKgzxAfqZCjtYvsWE42AduNgRLZGnf3dKMy27GB1m8",
  "key42": "ydXfo3GQiePG3M81VmfKPyVLyMLdniAJednSrJkmrth73c1bTBZpBKu582nNW3gshTYgMyEM6LjwQvLPNhhosmF",
  "key43": "Kf4mz5K3wyc6UVU4NbHfsakHcLWsice14yyjYYrkezkXychjmY3AeHkFmJb2cXoDUwEZe4m9tH12RB7DvWLzeru",
  "key44": "5GGs54vU2rv5ahrzE3JLLe6zn75H3peuMS6JDwSDAxC3XfnttbE4RSFLDKqoZs6s2zhRLVJnU8nwkKWPe3M81RHk",
  "key45": "PAKA5tQwHg24eVKBXxcuk4anca6JSCEadFMGhQUn9BmhJub6DNmtsrQshMcbUrTB7nY9aE6oUAHCQzAbvFa1dRR",
  "key46": "4Q8ZwUY1YoxKzKiBcVknvdp4n5Y6LkyFV3ZEHjLN9qBeMjkfuGhXLdW5DpaLEFUPEiKxggpzQcKCH6BTUSmUMNpj",
  "key47": "5Hjd8KWmqbwftjtjjVQNcWSBUJb7tYtGg9esrRoa7ck3AJhcfAokpFBJ3uYfnd7qn8efCQZGh6dgHUJAcSQWZN2R",
  "key48": "4nk8ciV6N2vBxyySi2iAEdo7HJwNdbdnLhDceHzJzZT2EX2bKWBF8uvxmcW2DHa5DWZqRUz7PzYpovWgNukWNUid",
  "key49": "Cs27wkiViXaEQnHAwy2PGEmJex3d9am6SxpWgDzx3atST9NbQcGbUqyC6XgLuG675XzP333JKmxLkLGa26L3md4"
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
