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
    "2bDg7dWidrVSQxSGhXyrhVJ4SRirgQq8k8poN1xZ1JFGpnncBP17q3sZHP6Z3Yn4bM3pURhZ9H1hDSb6tjYi4Ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a6LQFbmGr5xXsPBZHjbAgV24cQ7R45vDMTB43drXAfYF6TMNdCu4vERrAHYCwKKLvao7T7vbHB5cay2VKscp7b5",
  "key1": "3EUqm7Q6WtLvXNbFbJxeVMWxr1FHyKfm8k2ch5w3EiP85Va3jYcikazzQbsnmLKvyCNB5d5F6HFVophwkGfM49j8",
  "key2": "3XS8Xs6zSH9hhyZjzCfHwMa5mahk1VpH4kpeaJheUoKjnQ4N6A79b7Gk3CJ7ZhQbXRxjc9zB6YF39PEZmbTQLodd",
  "key3": "RruwwfFiLXxA4hdKyCWPooViXqZ2F6cgDrjRKsttsfgVczeQH5oxyZGKiqdA6k34XHRvLKT688KZechdkpw35QJ",
  "key4": "31j6WLxKkZjqCz8YkNiryLXigqgv91pNtEyD9V218a92eN3CXfY7rLp1RTD5mwfpmEbcJWbCGG1PVGuWN5PMYygC",
  "key5": "526rn29ZBTFPZvYmU3FfvzjGzix8AiXZ7HvXpewMQmZWMjTaQnwygzubbaPwZKZzm2C6wwtRedaF6bNz6NSawXA4",
  "key6": "45NkWqeJq3p3jBHm45w4smmsmxz9uz1hApSxS5yCvjyzam7uaLxpv85kzwTNuDc664sAzXr8Cb29XyD7PcAPiVNe",
  "key7": "2kws7G4PqmMf8ujhM9AuyjkeZjeUTpscktMKHbUBR2katmS7Urdw4Jz5Ez1vgC2g4zjmHvWAz714Q8JvzzLnD25A",
  "key8": "5UNfYnYZahep3K4Ri9Ppn3MJ76YvG2DH48DEjFUF2GJjpTacqA9fkbKukZXdJ6LcdbfKtc639hwE4s3ud6r8Gno3",
  "key9": "mdrYE2V15wUrfh3kuj6Hy7KennB6URDCxDKM4SQasV7mL6TnWCAV4DS1RqUHGgJHtMeHjopPL1yiLCzCu4SPjhR",
  "key10": "3a2UoMd6bZrxYcKuVQbS1dV4Wcyf8PFXEe1r8u9d5ikZrxDcu4Lyhe4gGe3fK8oN7ZJHRQRhreNhHNeicxRFXwrQ",
  "key11": "RN5h2zeEx856duxbgBFgnfsNc2qQoJ7qMThQb5xnQCd1hyv1TfGncVhaVHgo4uDaTnaPir4BE8xxTG1L9fwxuMG",
  "key12": "5WTyZDNi1HRruBTJnZ6EXVM27S4ebTomBRDGeiy48Hxq51Kv1rzL7kTPTtmMacLm1EguBnyueNUKCy4CpJMqVuWz",
  "key13": "Upb4yLv2bbAWcWvngcso9zEFqPQCAW9ybqn5cWCCaDSy8YsAjUDdDSQWjh3q7yDxc9GmAYVvRH2W3NFioEnaqb5",
  "key14": "41ksSAPGt7uCMV9roGvXPpLHVi4ydGeezneo3uUkx9FQFKJJyQEcdE7RMrz4XBdZ3EJKWeVxXWujmpLgXc9X7Vmd",
  "key15": "53pCxCJZSm9aLEuktGpB21vPHck2yMngKfETsGbfvqR2QWhgyRMQCW7bjWFLqfac2JsZpjBMzk7fQc1xHhnEzYGN",
  "key16": "59citop4x4LXgvH4RfrbLHPrq1mjTPPkBmdCcnCvXcaVQkLsZMDVS7zyCErnTx7Z8tH3QdyRFUZPzyhvNdBXt29U",
  "key17": "5FNDMoTCwE2rnfNoWtE4nNeNrEHv1e493ABKbPFLUPF8t5jVWDmCoYy8gCRXvS1mu4wkKQeJZdE9uVe8wmapfKru",
  "key18": "5yGq9FhskWAzFQPTvHgqCV3K3ciouQy6yjMKGYuuLLYhvZbw5cXkepGs6g3j6wPTfG9Zp52NAtBtLE63pbuWst2c",
  "key19": "2YL9Qsw1SU6Cq2pfUT3xUmT9zPqpatBHUbb1rAKkg91915PTQtFjcGEo4rM3D3vo3W18fDdcUvzjTmzXQiRamdyt",
  "key20": "22ACS8x5SFvLM9fphztd1PKDp2cHUbb8F3Boiuyn7iZgpNMZbj1eBfucT98Q9U2xtKg3oAuXYzMdazD7kT8JbEFu",
  "key21": "3KNqreD52TiMuC5dCyR51x9X5wjGmAdjnZTJyH8WCNdKDCvXLdnWgfxUhFNRWywfNgiemiMubntLDUUxPvdt9qBe",
  "key22": "3f8AsgtBUnmmnNHa9XFgrEG7ayqKooSUCtP1GgJsDudyzK9kaFTdgibotdZeHC5G9XHK9vqcv1FTAdA3Z7b1mK4E",
  "key23": "CLoHu7HDsNyLipn7MofYzXsmUhdUavHsPNaG3msBBEYpm8ESeT8QC8maofDceo8YEESaus3j6J7qDyzwpmUHD7L",
  "key24": "4JegF2QqoEq46CZ6oRgJYz27pHMPmgkeY5vpdy8356soGPvj9huiS7KTUs8iuaS93avpDoDa4iajcY34a9MY2mTG",
  "key25": "3WyoYRsXGcptomUchik1NbPtz2vVecJ6Uacw11rYzoVbxtbsADxcPe6SJ4r4WfHK8vwWS8Cz3NU7tSudAmN2EDi5",
  "key26": "oxQFhNExTEg7E2oqnxmxduoGKYCRC3gUAx6JNw3eCVv1vWha8v3AEjuu3k4iFQ3vRk3C5BvmLSNUBNPTHVKNJ5C",
  "key27": "9chtqxxHkbsCkm6pEMYkG74cLLQTm6swNsJ1agkqDchJYXc4rm2C6di566ogmbzLKsjjKyeFBuCHshziQCrxXrr",
  "key28": "5qzAYRRXuq7hXnfuWxCL2jqNVtWtjG4H72UjJDzEArFWEzqBGXGCNvXjYjJD6SdXt9MUqUEfbEXVPULS4z9nsTw1",
  "key29": "iLJArCrLkF9JDgvrg31Qez9SUWQVSJvRostq1Fh3q23CjzHxKRHwUBEcTQfWUgUM3mVG8Bns29JK6Ayhp6YBaHi",
  "key30": "3CSrjordtwynjzD9DUEewo3dbU2YYuuwCpNSbcEHRUYRcGDp3pV14N8Jxp5qN7SfwC8mcZUqVoLeB8pUqyNVo4pe",
  "key31": "DTq64gcw5pBnD2G5RyWQRxBuWaBPpi4Bxzzpg4pdbtQJkeEpFtaABg4z1L2aUf4oixf4ondZmnaWWLYhZeVeBC9",
  "key32": "4JcfvD95yXpG5vEwDVRHu9Yg3T2Ld4ES9zvipyVrTroBtysv1oTMMz8XW3yNsLdjetXDi87Sd7QZe781jCB92gtp",
  "key33": "35WTJw3ZjfS1XdRynWnuxQig3Nc1ThLmAtCb39Y82GbkhwYzpZkNZZwjtiZbmeMKZXpq4opSuaTTYKNZ3wWspP4V",
  "key34": "26FiKVG2NqG7fZ7PxFJj8J7Pv61qWKDJd3vv5Je27cc2xpADHy8XXYcsjnFkztwbGNDypRdDEtA1SyTj9wq1kFaa",
  "key35": "4WyX245KWXb1pt5DDuWvs12hcRNEQDXgq4sQLfofCge5ie1S1wMqg2798Zj7vEtL4kETVqxvvvL7jAKCc8gh4zTG",
  "key36": "48yvs2H2CoCFPaXf541KxT4bRhTZqRDtixBrUcjjfjXsxzADmqbW1zFPwUnL5xK5LpUz1EnujAkLLzworUwXW7b5",
  "key37": "67Un7S8e2SZkvourjdLmW8kobj4L9vpsd6fFyjre9ZdicMD3mVBKEM545xQsuaJJqmUbNVU3t79Qbr98uN2TaYnH",
  "key38": "4Ti3Sip35GNaMUaggkd1jxDv7QBQtLo2ps3pTJT99HkV3KTNjeAZxCHAEhrojnLw7CqvSuciSLduAMn9NLxBNdC2",
  "key39": "5WfKnStL9PKLK61FxFY2TCLkVfERC86FtRwS8hDAPg9zAdwYGYEjxenwiDqaR4rBzaAFErxrwuMGGzBsvhLZnML9",
  "key40": "35vrDyVxJoTCe5Txy2h2YKf54ycm1HrfuQEmFXsZiutQ1WANFgqkEV2m4S1zdamuveaW67uc5QjneE3w2hFicWVH",
  "key41": "3usYczDZqhEXDtt1Ed3zjqV6MRuHTXm72GVgL1qDYet4CG1aDjL9UoBdbU426nQceXLa6VVLrsn8vprXUmYgwYV9"
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
