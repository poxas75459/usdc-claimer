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
    "29XtZutneg97FdZVDLca8wg7aJo3NPDcxaZcBWb2iZTR5W39XqmcxpXAHCTwVKS6zJe1SrGHmpEWPycHr48TYaAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22rs58eQipWmTsMggSSZMypLV9D9CMBKYTcjnHVVCFQnbEybbjRPArgh5WndG2dEEAvTTARGAvjFEkpHV5dQXspW",
  "key1": "5UDbqvm3tfkDwdMndnow17beXgJH8EQjHeRWkQVjZqnkmP1JsAdzyuADL569nzJNbsReyAgTu5VQA2hAKHAvzcyF",
  "key2": "4R3LDTNh5FcTTvXU9sPH319FqMyUbi7S5oEz2KsdtJn7jzpYcA53KB7hk2ctoHxLdLpYs4nrbfH7EA2TDfJpgWhn",
  "key3": "NJ9xq265gTM2PfcKg7KRr4wzno46j6WDFkKBWwqtP9GjJjAMaa6qEtvj2P6dJ6c2Hqs8cWBRhJJGMwWYsaHGUuZ",
  "key4": "KmUXF8riWic3WYhy7qYswhWGbJpe9mGshASiJBBfE4V1PPAF5ZPCjbMLq25S92ZUjLKoniqCDC4EBwpyn5QRYbK",
  "key5": "123eAEPtRR3SXh5ptFnLs6eqtwXiYmKWkbSrAzz8bQwKd7L67cPbYwywFtC65ooTr3rTK318YHALh7CrzYC2KYmr",
  "key6": "5JZJ86wAS91RFwHK5rjLqPiaMQW31axdhJSEhGcXm6c3qn8MPSFAR8HTNqkDgmwwkXZf3rsz3vY1bxwe7t3QGk9Y",
  "key7": "5KYe5HpWbYG2tAUUFJngHjSStduxcevyAgEagQ9acAukU6GCmtvAT32KBqrNvp3nD9YFibbRFXCVKeAF9kC7823v",
  "key8": "3P69fNU7XpT6rY33uz17gk6N64J6GM8KhucjXLdTBvAbjggdb5CuDru3bzN7YGLV15PzaA5G29YoAfx9b7GLETYZ",
  "key9": "48fds4PRxAjxt36oXitDMYx4GJZNGpoynD5ttLQzi7NNu7JQtVA9hfT6xfph67vLGRfGGkTg5oa2QJ8R9U8g1R4G",
  "key10": "3DSQA1XubFVfrm5CpTV5tqz6oABb4LkHeFYfhtnuQYRg8ykDV2tPof8srR4cfVGseFWfJ1deqzT1BZs6ebdTRuHg",
  "key11": "5V9NQkJeFFRwCy31RmH8Mt3Zwt3gwoZDnrF7jEAzMnNePgu7NgQXHdrNYFCAB1jGWLmNVDk3q3efviLtUTAcevPy",
  "key12": "3XmDGVNpDyqwwqDpPG1ACyNn9vZcBTL5tKkqViWzx1dRG8oXUwYCRV47dCAF2RMiSLACVW32a6ymZ1sihn25BjBf",
  "key13": "V6xHmiQUcrimJDMhgKXqHLcECuVpVQBYsdcxCRm7N2KD7VeKKZ25vgBvJ78pmKWdCxuNHVSSSzww7icWQG8YQeS",
  "key14": "2UqKdGEBoftn1kVxyzTGyLBwgsC5j8EJjAqEsjxu5YiUYLhtqLG2HAvExak59D8h5SfCoqe2EvxDNY1rxvQAunHv",
  "key15": "4r5DkXkLVNfz8cmBiK8nWKJ9aAAgtdJqxZxuLqRmJujbBruSjgg7sUfYogParmPkaLCrY6MniRXX2WERAYg9UUso",
  "key16": "3dwxi7ZiVNyKHy1tEvtMusix7CAnbeBzXERGVr9reEtUnUE481wGDUyXCzHNjHx5U9cr18eZesbwAH1WUhyM4Sua",
  "key17": "29S1UL4oF7YgxjbL1f4EPHDXFcwYaagP5fHm6ToBcx33DyWpALxWptVSa8q99sx8qKJg1JPJMdJ6Q6dPxFXnrrZd",
  "key18": "3VaYRtHQbxNKTZbCvB2U1TJCLCij7snvRhSUgC7h6EukC3sfdBna9Nfs6bhPDLTSKLRmnaTMpW8PssQUGyXhKJCt",
  "key19": "4UhiNmMSvY8zRH7wUcHdrdX3E7HVdaXBi6SykPZnNEikY96YFDENfgmSvNUFs3Aoa2EzRJpcbgSoqc6YxMYbkHQc",
  "key20": "4yQwxS1SH6EfHY54D5pSdRo4M3zoqBcMnRzrTh19WzNEkMdY5Mw1BhUNkyfMSxGeHoLrjghfPSR8pENJyd221rd3",
  "key21": "3QmfiEu1E8kpKj34EjY5eR9do3Yya3zQNuC3ncEDkg4J7dzQKwhrkqyko3s2S96Rb8EfEUrpYEXg9QdWyqj5exEU",
  "key22": "aPQpZJAQN4RhoKWu4ZSCLJ9qwKguNDHgyhj6cKxBw65nrfiNVwuXv6hHfuW1c8eYFdnkh9o5m74P3gwitZ1HiiV",
  "key23": "47MCAciQzxNFQevqoWWJtrG94W4oQsFt3QSvKxp8LF5j7GR4HgE6uFkmtWeFUe86tZU9QaLro5pbdXdLhona29Pf",
  "key24": "5C7nCzkHmpFEnGWRkfz6FnGGxSKTigJv7Pae6jG6tDTFWf5RZXm1Q4CuhThSTJGHHHoqgeaZtkf4Cz21sHG8p7m8",
  "key25": "4B423R6YQz1UiDjtav1hGQKZhWZGxVefUfv7DmyntHwhTss3WbPS8QePtS1D3YRG7N27j89655Vk7sqtSeBgctX7",
  "key26": "2vvt1Jvm8vBNreTTo8JuDspLQvSLSyxAJDBex6TLPrBBkiopH8Z6Q4XBC3feyoNAobQk9DK1n8iaA6mbK19qCv9b",
  "key27": "2jaqiURg9xn5XyGfMogLnh3GZuJHSBJeMZeFbwsQb7hBxHqGq9MsJg8GSe4CyQLE4n4NcFC5G8XZYHQvUezsqwtS",
  "key28": "2FLFqGtzMa8gWXFyCefT5LCX2goqwFPLSruXTgzJVo6U7eeWP5BDRRGMvCYdpsLz2rqmEfucB31DjyCEFGFGzwyt",
  "key29": "3K27VLPFV6KjtNSFrx7Y2XQmQeju5Pya2EHoHfXSUbGditpcKGPBQ92LJfGKEgv5Lt8Rc8UoxUUjfUn33HjrcJjY",
  "key30": "2Dn2bXGNykEEP7bHbFfum4GoQnksx2gDNEkBVnYLTJWsFHUAtUZCajZXRTKtUuELEzvwmAQgnBZhtFT85CfuFGy5",
  "key31": "n3EiyqB9NwvsfZHVcHXR5ChxHCXoPJo34Mid627baCgZjmR47Q8BnCYvoWaUQyJDPgdRxos1NJv79BtC2dShE2W",
  "key32": "4QrurzTHcBsdgiCy673EDhd1cgLx3EQsyHxx94nKL1EGH2i7mH9SVjxF3bRDCpRa6bzadZMd3ZPQnktuqbjTeaN3",
  "key33": "2rs6ac6qPHaCNJuYTMdNtZ65umGrtEGTxCJJgJQjusFetmmyKpYdQdXHTRva11PiPgQAZ6ttu2ECRiTGPvM9zXm6",
  "key34": "5PRFXhWseg5SwUQhNsJ7FMQphVGupUNN4dzgpkhK24MbFmXwBSKPe9iw1yxDH1HLaVsWETh7YqrvNvGLczNk7g3Z",
  "key35": "3M9gmiYtCWyhmmEkvVtPVN6mTd5RDknK9cXqsz9eTudJpGPKWcPfkRWtYjHQtSyjuDWVuiFXoX5Nsc5h9MnToxDB",
  "key36": "4zn7GZ4yWyPBYiEEtqmBmsjoGVsX5SNeitwPPG67NxYtA2eFQkED3GzHXgqfFLEVfWCZ66yuvM2nhxuM8EGdLJU2",
  "key37": "4F9MQNeWmiMnXvmTqeCqdA3T84S2id6VQbDjDqXSzTVXqTgeW32d35k974gu2Np6Nhc4b7DRFPipmLENFJdbk91c",
  "key38": "3t5jaLNaEUdjZPQw1i9dwrrEsEMVQUnwfJ6RmK8fkq6yobthQXFLupBKDAT4oKAqhYZp2FnPuNjbj62ArYrv83dd",
  "key39": "WhhiQVmkqrNQTirsj1DDf2LbmeTS4ywVUs2ZcN8VvinzwSXQ6B6aSqsugT1P4k9NpC5ZNZ5tqTjoE1y5MEGgKPk",
  "key40": "5MyqNvFoinCPqnxbsi2tAZ1oRD84jDZSAyk1j2uoZejfNbkFLAVF3wfcFeJQdBn6PJcr9aDDayXzebYDWWob8WoX",
  "key41": "25F6bWAMGo7r1R2p3qHENzuzZaa2e3atXQcs7bMLASQNibsrxgRceFwrXNXPZUFzVm7126Sa74cZfyenF2zrQ3fD",
  "key42": "22tkFUVQMAR3j4haFCm7BJTMyE7G3Aw5sS7B5kz5tLSncNsekvvrcK8piUifXfWhW6w8F3vmEeWJDmvf1A8ejpFN",
  "key43": "cC2RcWjktBfEuDP3NspJt95G1HznT7DRzpVCTSmDWANCvWJBRdkeVc6TkJXU1dFK1veBKxgauWLrx3eUZVPFJws"
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
