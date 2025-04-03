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
    "ddYh6BHbVRHmWH6pAC9DzRZKepJaod7pJGojvNhpGeBAVXDWE2wZEQE5VKFv2EujJhJ2bWRWnG5c4esBEbP3HRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k1giMC5v88KYx3pNaA2WvEfFvFQ9hCuP9XDAX4WL7HTha1LW3fk6pvSfzsStFeHWedvh7DoZdSVfiU1YXGPVmBo",
  "key1": "5nuFtUgmXqZdzcoNyNy71PxmaNZpWjCyVm32GBL5E2XvSxCtj3eXxGkmumsKg9cUxxvcQr4Yz2Zbky99qLLmNy25",
  "key2": "5mfCWFicY8B8KKYznHwfXxBXUPLT1uCE4JZ7ZBCvag23uBiZiiVnCv6VYX8vgCkqnu15V5chrBKV9U1JM6PmxK6w",
  "key3": "3zukETmCeTf8R1HeGhD8BnAyiS2oqMqJtwANSMnTKhk187TFYdZ92qBbT1TecYyUFEMTPNS9D5vNbmMdYQnW6Kfe",
  "key4": "24akGGtC4sXx5BqJgmA57jq5FLQhv7P2wDa75m4Efh1Ht6LSCrPLSRdZU5u3pJXZFutVTGtz32sucCZHnihfRDhJ",
  "key5": "YQvZEgsPKz5rmCFEvMTmGnbuBvv7pHjCbY9eCoxqxF8YKnJgjo8UfCZURdJjShK8HmDRuKj2gBLWptJiV4XoZ3B",
  "key6": "3TSknf8jMnvW4yDtnGgjGKhfM2cwDP8kUhW5SQZezMs2MbtcYGuEAf2xg2i7udzZzgk61zcMjLGfnpyeuHSKatrH",
  "key7": "2j1EqUoutCGz2BqUNcVcHDs3wsxsTiAGb8EamknRk8zzp7GSTsmqSf4UfL7fKng5VyrbR9XHnLMtNrDKUiq16HjC",
  "key8": "3R8zRdswCFtBbHDWfBLGXFuNCt2iufRJw2cz9rmn4mVLpPHf56QgmNepyEEGASWvdF3zc3Dm4A9FiWyv9PpVacwd",
  "key9": "nzKhx6Hro2uDjLN8RqoBSHSRVvi8YjuVAzdiQfBxGZ2ohBu7CyvmwNYikaAPxes8hGQS29peLPJn1UBBtMVxfWf",
  "key10": "5f2TySsoh4r3G8S17ngkHCS6XDWuZsaokXNWBpoaBELsBaTZYCiD9k2FQqRkoHB9yZrhoWKZvq2spSLzt1bpdGMY",
  "key11": "3nRbmjyz5NoA73urnK8bUQamFutJAWuBarNsGVvhb21XYxqpFgCFmaQgwLcGvzTjtiELAUTbV6K9XYHWK2MqELyD",
  "key12": "3qsEvtkAm6ppDiYbq96Aa6Ji2npsbwU8katgGca4drEFactnyZhMwyKF9QPTUyhaGKKPsPj5RpBCUKYMu7v8MBKU",
  "key13": "WYqiEFq21mAm2NX8kZvanqiyamUUTdpWBgAqeCjruQdrCScyP7Q3i9Fh47e9T45KLPrAqdXzvZoLaxzmmkWtGC5",
  "key14": "34JyzMpXmK3jFwXCQSTN62Rti3LdvMie4GWHvvM2or8RARUZq8YD7LbvFeNDcU1WurbVm6wmCrEiZMD1wjDk6g8Q",
  "key15": "ijBa6f5Cp2iV62YbaNCBky2m2s49PvuFgyAWkoBQZxVTum1mNnYaHNt1mNKPTKp7dNYzDKkLXXxsSCVVgRyrN7S",
  "key16": "3nQrEMjiYeZzQEbzHounnXiCrjuzzkzVTLeq31cSAQYguykMajnTvXX3FHvHtEwchABXYcp2miyCqJxgoCLdh3DH",
  "key17": "66QwFrJDoV2Li9WKh7X5LBRDmYZ2jMP1i2mFwc9CkjVTh3QQJwn6MhoiLhHXcuGfmqMJ3BTjjCmGDH5WL2XnhLgZ",
  "key18": "5FUggzLwqG2s7stJrr7vuB6dC6zfaikquVirRCVj1i14aSYqqM393DyW3EZcnaf9LzZJh7uN6g246JFfdgaPAcQ4",
  "key19": "4VxRamw3Hjc91ju4qkyWvJ6Cd9M1N59M7PsmpoCa3bNcqSrmoHZqnBk43cC8YEiKPNp61cHwJsaZ8djJW8PKZ7HU",
  "key20": "4Td9yq12SKRUZDYnqakUzz59nvTmmefeSM6kMfqPDXAjsGbQYwoM9sc4Ciio98ZvMZ22jnecxfisZpYq8KNAQkgr",
  "key21": "4bYq1thGCHKEEaQoeWeCFP1kqKgnmJHofvtGUFwftpzQxgQNcNCf92kBc9ZPWCV1BM3P3szBcrptWCLQv31suHkt",
  "key22": "42tsQhnzE64WpAbeVQXyVP9u2Ls6nnrapxR5J2THZcUN57c51Bsk8HPctvk3MFfUZsFWt7QEskJTN7fqKUWgUKcf",
  "key23": "4NQF7E12KovN5hXzNAVh6wRf7rMUwZMYphmF9GEXDLFVQiEpDyLs6RRqPpX1ggLavNn8C41x7rWia9fQc4KYzdhw",
  "key24": "2UAJ4RnLkpZtRNmw9M4QdnJtAmj53pCcKMmcSSsCPwro8R8Kuw47tQP8P5ULxjxWzKCpc6WLYqhsw44Q2PNESKZF",
  "key25": "5qGUc6qPecPSZosSNdAc3oYAzQEnwDq7g6G28xSzDJtFFVfAGdiUtFPXFt2P45BQv1oVN3yr97fCRosUAnTqnKUN",
  "key26": "66VDDj4Mj9jznTdmLW5BtpbNSv4DRsNdjtFf1KUEywrCxHEcsmygaLL4C8i4tuNfc1GfxNBaeQGZxhPW241vH9VC",
  "key27": "4pYit1YLLajGpHoD69cTsz7CGXcXHfoYMBUspPztKLQqn4ojV9S2KHM2wdcvSFmCvu9eoF1AfWP9f7uXrwQfVoEE",
  "key28": "3MxULbTvhp5jwUpKC9vtGhawG4xbQK9YNAmQqrAVAE8Xa3X1C1rD9CKBwhcMcfrJnc117WNuaHB58CozPWNva2sJ",
  "key29": "QrxG2vmuvjGjXGQfJiNXN5ThPTz67VGt6CwURD3296pMpJcn4uB4qLABm4JqKUxGtY1PZ3oqx43RyWHt54Fh34B",
  "key30": "54QQRcrXKQUmdoLtZEqgQnMMUFP5UzKkG8VKxc4jNL9JzmTAMxDkAHXRGGrPRCzUpVoAZmgFWsMV811zkjnRaduY",
  "key31": "3PSktnoJbNbxjCvPUBCYv6QfvuHxc9F8oBxtoqShQquqVRVjSvnXEVedM7SVXe5JBjDmSag52T61NB92TwRcU3LL",
  "key32": "4Xkka2HScxWqLGL4afajDmDgNdB5eLE4emsh6bykYdEwYXLZQMdnziHwxAUMntZLnYGemqm5tdNxgZJzwwi6StdN",
  "key33": "5rSxjVtdaQkzMHD8QDNqsg4HHSCLgA5mDtYo6wv9qMFVPy2PmDv15yvrbWRULWQ33CVA59gbq8Gv9Jb6PuXCxmHh",
  "key34": "4CHqpfhzEyh5FY8QWXgTp5uPz3SWGLsD9h4mWzA9JVHwRXofFyWoSDFCCpPB3Lxfj8irBYSY2Y8rk7oHMQ5qAf4L",
  "key35": "5uCwLvD6bCag86Z3MabVBudxDxtNL4DrQ1fDcAhsJrjskaN4mCG8bbrPKm7tSxQ8KFuG2RRY1iDkSaRuoWzTEgw1",
  "key36": "4XXuZVvNp73HoZpJRvMitBL3fm4Tfmhi34hhg1UGMa8nJwxxx6Kb1TAdbvrEkp7v34vzcPpENTq9RTF8ttxfyTx7",
  "key37": "yZm3vSiLkrT9cUeChjWGweER2BXU3XdP3tJq7gfignZYmSQ12tdpd6ajRyiZSng1rwZdGgJ94PQ7DU1nntYLfLm",
  "key38": "5J1aNtbDRKBt95mNZgsjxSzDtRuTZwVWQFYvBoSjoNWipLaEAyNAxUvnYovxjfQX7Sv3U12DPRcDLX7kSK1uy7Cm",
  "key39": "2on1ENdoSMiUNq5bjMjwx2G553AHKEXDkbnxDFmCx9BkWv7a6xALpedZWqJGK33DQiw22XuTZEbd4EnDAbycAS1",
  "key40": "4jATgsbcGXn1nyXgfqmxG2tuBC8EYgnroz9dqgfvkeYo9cjt4E1xKJ8zMtXkH87C1Jy8SJgeiG3EoswNZbuitkUk",
  "key41": "3TGNLrADzkSGuiW2cyCZDnbhLQCa98omDmqgApJ8VXxF1ATgbNmAecAAwA4LPDpQKq7GKYeC17gHoBGR7cWUmWXC",
  "key42": "q8tBLLAjnXCfSUmCRqjd5n2o3YDi5G1NAAJxgMf11NK53bXKafohRFi21i1KZXVSfVReTzHMdRfEFjwhqvZdafj",
  "key43": "5UQ1wCJFZXsDVAv6iTGZ769SPRZZSYtvNx9GsoMT6ryoexm7jjP82h7Fm8yHdM8tjCVRcDRC8yMm62mjZjXJMSxo",
  "key44": "5pzhxvyEi7v9qbYoXYncwWexwhbwmTaLp6vafzkXCtYBhf7j53nNP6SbMoCXyYF1eWCEm76LGK7jbd1ZV5Y1ZXSe",
  "key45": "4bEv6u4s7RFbyBjDPvsi4in8azvW1yjPVQAas7W5t3MQXpEFv4gyQkXNN4oDcbCtirou6cM6LVpthYWtFd3cpouA",
  "key46": "3Bq3sLVbFKkGgm3se9gdhXXTXmFQytabZkJ2ZH29UndXxAf3ig1H2bxYYcm8vBmsrdQ1V2AHxquHS8hdoQiTbvwD",
  "key47": "31JgztAhBxG5pMHNUaoB2ArEetCrU5yrJdWmVb69jW3M65jqM463cMbpdnYgtr5JJ9qwHhw57Y2NgL33KmmCXGLX"
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
