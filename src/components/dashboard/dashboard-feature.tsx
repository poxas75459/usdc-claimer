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
    "5aWz8kc5xvvn2YUqtQ6bsfvtDV1qTGEUwBRB96JxxGCTJqL3VA9363tM77JgPAfUfo3pnAxwft8161Tw251ix9eY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uBSrqv9JoTejbdXvqhXhdQPwbXJrSzyz93oRXbNe57JD6GXUYrcJVThtZp6KHiNwdWVur4BY6XYE9nbnkpLvX29",
  "key1": "3T5mYo7qV7TtpNvp5WwdRU2wfv1Ypapr7MZXx6BgHUKQoEKcdHTbMN6sfDHm7qwLVvmW9QLoMtbvkRwtL7XL1iyA",
  "key2": "HabQsJfD46XXjtrdZPBV9f7LU7CoVMDHEPxE6e5s62UchojmmXio3k5WfMs4ec11L5nUbz1xmj2AnJVR2L2ubPz",
  "key3": "23pZWs7FA1Xe3DeU5kFRnomRGAy8Wv8M4d3G5YvE1JQAiXDSU1H5BkfBu3H31S2EJFCgYrzo4jMcvbzGGqpEgkCN",
  "key4": "hBXV7EkZwqGWCG7Em1BGGvFQKhiajL1KnHBgGiC8bA9KQv6AFxv36XKejj1LX7kYjRaEqgErYKMHghesRfqvHUJ",
  "key5": "2MnetuhoEF29cb9MafKSVzepPLBVYHxrstFSncdn7pPoSJ8ZwkK3xeb6d4sKCAwEL3BdJkRnNJzu15cc5Wx4Avc1",
  "key6": "5Tj6rDWAtRdt7VS63TnJQUB7KUgyTtU9aX1UkQYy28jq1edDq9mWxvKwPZQdzbZ5Kka2D8UY6ZSJH2ZfCgs4n6RH",
  "key7": "2qxovwuTVymrn4dMPMUw9Mg1627bUZYSCmmh8ZJzbVUPuw26u6bRdMHwCd3jTjbEeCoG9s99RXjdkiL1itojXRrV",
  "key8": "5soaBKu8f4b1R1GxYFwfg6bjiEvqiMhU8yrmh6EHad6YDrxmiqdequykHgVhJ52MhXdhu3NscSKW23tF6xDYNcWr",
  "key9": "5ABate59f7SBtzyV9YT4CrfqgNasCsrBAn5RmhkPwdwhvLHxEbU6t8txZQLbApsSr3sA57Gm1LNzohYrTciXus9v",
  "key10": "5Kp3Ni2T8wKuG4HBfUuoZDgRi6amAhB2SiEfJ5QrA4Fiy8H91oEovRx3W7TYkiLuVk1HZdLHGXDdJWJrARPSMxpj",
  "key11": "45yGqUsrk1n94TYCMUZqgTFwEGcP74emhxRKiVsHUKMECoNuBMgp8h5ndvewD64Qz6dWwHcJJfeUe3bTftxyqaM4",
  "key12": "3wDPebzKTTEJmKdAsuf6fSrcTa6nB5brGQiVed9ReDrozu5yzyzaVYGMYKU8hynf84xk5BeUuVhJGz2NqaNdV8pW",
  "key13": "5nugwj21vAR2YBv9mSbCc3UEiAGk4AM2aj4FjcugR4Y28QRCJ64ikxaVWsWFtVEjgigCYcT1rwJjrGWhbk1sFo47",
  "key14": "24mjjgs6u4ivtoragXd5zrBEmi7iY67FDrxK5GYVidczZAB1KxBvU5tvVxcc9fxxBMpJxjQ3xDmqUek6WDzLaVNh",
  "key15": "GfeWBMN2GhD99pPd9N7o6qRRMmaWTrpWDEJBpKu1whdusKJF1Px2Xvo26xhH8YeVs7moWir4zAA7cjAHyMgPaDE",
  "key16": "5hbwpuDY7xDDAqMgpViD532kHea2iXe7vfZ5enfrqYyLxrseMSQSdHfhL1Nq5DuaYmsm26evy2Ft4NUAoTuA7Ri8",
  "key17": "677RcdGaTHbvGUFAmLxS19dCNDHDGboXiHGjiM3AdjKw59QeVxWNaYk1pVP3FbPczUcHywb1oVH3J5EuHAEtAVQS",
  "key18": "SrKSPrfjJ29vxxKSLzMqhZXRdpwMVdmxiJVS5JMb5j671AiaKSvmdnDheNcNNgjDgkiFU79apf6Aw65KZWv9uKA",
  "key19": "4bHpHuoXfwT6NmhLwmVqCiizi3DXWeA89fWTWZN3yaEnzCCm4rHmieENLF3xeos4spb7jptwU7PAsUEx4a3B29U3",
  "key20": "3wN2gmRvM8qpYkP1ET8FopXcikKQHUDu5FJSjW7FB66RmHFMsnxf1JCqqAzPNzecLApxUd8Chp88gW9nP6vFJ6Sa",
  "key21": "4j4da3PFRwB1mCjsfAZPJkHxDy8n8KF5aSrKmqBckkKJdhxwRyHWt7njf4zKroH85kXygeeJ4CWFVcVqK8B394hQ",
  "key22": "wbD4V443ChKbBzXsQERNrJa7xzJGdVqT18TUvBEJNhSfSgG3dTsBthG4gWNEwGXgiwYNLg5vSRGFFPucp4LLA4h",
  "key23": "ECJpdg7AKiM9vGMfV4JNHVQZ2a9EmEU9JyL4kcCZJbGqXCQFZAjqnwopnEYEwsTXtKGHaongYCoEPbyu12GQUKU",
  "key24": "Ai1Fh9Wbhf7rg9kDiMDmE1arYWrvSJynr9quiEUEJKmngsdrkF6rETX9fct6Rt62ZpXuLJGL6ZrG7eKbHgBU3Pc",
  "key25": "5aeP3jdt8KPtVbkug1Efn2f3taX3PCaF9bcV1SJSVbjH38jgAAh1SDnneN6uAHyHr1tnLnTrKNPhFVbAvg121Tt3",
  "key26": "3GmoTuexA1Xf1TwEQithL1Znw7A8FRZP6UXaRHM3jg8S4kDn5JoYQsJcTgzsN1rEdqttBa5sfUkbB6gxHxiFUw86",
  "key27": "28Hjqpuq7bYvgRBNFeb5NojSytrNKMAWzu432kQmB9NHkAS1TopUoBhRAYdERzq1PEFodatY1GKYaYtgM2dBVieF",
  "key28": "vykgUaB9kDyPwBxvNajQD8vkJQsfReCarNnQDrRDPFvEe4oQyGfNEq2EhbxttjJoNt7wxQiVhQGvMynbNV81ngW",
  "key29": "5xXte4WUJwUn5iTQvBVVnE3pdCU61NA1f1a7Fpxb98i5Scw2yGnCcTiRAyeLMoHv3N7zzw1kiLj7aFJceMn8jzoa",
  "key30": "4vLyC1boZQYZayorDVCFUUPYLVWXrjUx8hbqvkM7PQJRdo3kyBz7CKwQKYgyCYTNuT5dUT5HfxkRb95BYUru8ZmH",
  "key31": "5Xspte4dY9Bj9hAkoQm6U3GgPfKeEcYjTooa5q7vCqyLBKW5nh5nqXepaXxAN715TJbEjjYYHPGMs7EjDE3CVN7S",
  "key32": "5gZtvx6HweeRQPL4ikhJv7ychqjs5vugXKaiF3rFomjNna6p2CpCP8JrFArmNkFYxwS1eXmzm9hSqXYvhAxUCTXs",
  "key33": "5ShN5mWfZ1GrBhfdghrZSzuw85ZduwPwfBX7nojK9mgB1E2gUpvWnSdizQ52KqV3YEGjiQ4iWwupCYrujGTxV4k9",
  "key34": "wcaJeHY749M2PWwTwbycQp3ghww8tNybtB3dhAeveK3Q7SmAA8ZhqZQwnDFmoK39PaZJsCRYuRnDQi2o3VBdZbX",
  "key35": "5xkgnp8VyhRFAwwLAhgQcLr5nYZF7CRzebndbLtuaCga3B47oSNYVFFCqSpqAcJdmENL2BYGStYYatP8QCmJ7jn9",
  "key36": "3eHimkAdmvBxALJ94kVCpzmT5Vc2XEfKqtVZXzyBwHFQwfs9dVT6vajJ5dqXphfm7y6GyDT1waR4Fk8u3XWy2C8y",
  "key37": "azZbpaEFqxHrBuJVSqa6sFzyEHJWH5ddSqwMD1utKCsANJYUYUivoFQM6TwP6h4YDDSELpv3ZoqHu5SxE1AAPBq",
  "key38": "51SoTcBs6SD26rwGebZrEc62wKXvQAAcZTnKK2DaVecFheLgMkQFRM7Y5PaCtAaEyTtiK97mHaZd9QsB67kRJrBa",
  "key39": "3PVzaNcW8ppL9i5HkkaQd1CRW87eNcx6j9Lorm9oxFTHaQVadTZR74wp29vzZPGG7A7tWss2hg4kcZ8a72AqpBCH",
  "key40": "3JTwT2yFSTcndyMauDFcuofGxaoSxtFabbXkfF5RyVqFhfa3ghCbY56adyAHyLJZecWiGUBySaXNLXo1g2JsPFhi",
  "key41": "2CpW1KhPHE2W8guZE1ukccGLhaxBGNdW3RsUY88qMLK2jJpHAF9qxW5FDMVTyR3q4r6eQPLkqt3yCkSgPXHngcrw",
  "key42": "2sPuzghohBYSsL9askdUBzSVrPgdav69GvAQ8cZ1NYR3pYekNJ4KHPJKxjYwiN4jDSvZXuy3cn91RFZgsY8V217U",
  "key43": "2MX8KDojAY83hYNgRvGTrAznV7jLQQ5zXffRYQAay3W1gevgHajb6WkUs9y9zsWPU8tQWwjPqCjHjEhCyxP8Yfi1",
  "key44": "4NJ2LuWpZ3e8pzhVPMTYK418Kv461cmxoFTeTjHv8HQCZztjemz19hXFsBUHZPkvyo2FGmECAY99kih4CoLCgzPX",
  "key45": "3NAfaMhswNDgv3kzyBYni8xoeryBXERSqAvCsZ2aqRJkxMu3EWec4hDJZ4f4JF1yYS4nWZ62bCtR5nEZDcL9EFNV",
  "key46": "5LCB49TEFW8FbTFdXeYhk3mD2LWr4GDiVtqvowR9giydVCSyoprCrvQSLjP4Pvg641APx1ZzxfZTfSqRAPPRafYs",
  "key47": "2CDp6Jthtwpk7xVBMYKp1Gf9RPKpjaReCMmzWMxCMGMHTW8PvG2EP34dhqvzWcD7oQaqjbkvsDgGWoe5zm6zDiuL",
  "key48": "2Vt7nhYPasy6tRVXKsH8yo3tCvytknMSW2tK5k8S58kV3bDhb4AuhJjWDYFzmGhPTW78a2Xaa93A1u4CwZSsUzCT",
  "key49": "617CtK7H8z4T6bSBa25fdnqPWWMRCFadZJAnpgEdyXz7jGfH6xeR5AHzUjNTwsbadKS9YnNPERDfzCHKueBWCCfu"
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
