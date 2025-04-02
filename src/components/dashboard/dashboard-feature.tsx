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
    "3Bwv1rNC337NKX7AJGz8r6tZpaC4tN3BodmSSFVAnAe3EzSRcYqZmDsJqPqJRFcmVXjgkUppHSWL4dL3XhYeKhPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JNBs4VfJ6UpUQ9fpWGsbiXzqRLsf9qRXFREfDN99jR359eviD2E7xqVpufVNFarR1yCp491imKPUGm1ZzK4deNP",
  "key1": "53BDXp9nkyiNgmqfqACCDpGiwziD6J59YR7fNo9k3sCRisDmwafW3YU56HxoNuJxCC65mSkv9ymDQEecQXfVNDtK",
  "key2": "3jjiov3oo82B51L9xXhNrsQCmg9smKr8MLKDRZbczWdbC9ktX4TaExV1GoYG4fXbQWBvgfWATJMQtsiNXPz4zqoZ",
  "key3": "pVm8xsmGdbWfs3sx4b1cjp17rAxt1gQQE6keHigSHjDHnuXGuwauNQTJan3JQPJAz2qNB712tV7wcYoFVGJBHrj",
  "key4": "5cVQj6pCksJxVn64MpPmg8L8CkKxcepe8X21YuzEqtbtyW7o8mmYW8efXMrkpssTiETP8oZfXCcdWzYh4PMgpQap",
  "key5": "5oRseuDvucgHhNPkZGk4NEhxvJwiwfMm6J3t9dMZPY5Qvn4C9Xub5aKiMmjbeHodMwkk2kSQN4Krm9hpU87vVHn9",
  "key6": "AWn3SfXxpDnyqMoQpB3KqomWtNHEqfjewwDowxYWDc5TDFKfn5JT59u2HfjrPBRFvvptPcMptWnBNuZY2XwnvL7",
  "key7": "35j3WrNXxZsFFFuW2u3e8QjbQobSJYNcwmbPAxeEG7PRWD825GpbwnW54BGFe7WzbrMWgN7DZ16tjzQDrBT3WRGS",
  "key8": "PoNKdxLrxHVUXevk2zBkXqr596pSCpxwg89YasJHb85gY77qoTuQi4ZLNpuxX8u5LRLziBRYZu3vuGtS9pm31dD",
  "key9": "27GVbRhu8Qupvgvw1xvcV3V1qnWFxGrw5xKvGidN6Si9LTLuHbRsASaxdHqsAEQAZMqGKz37LUWXG5g6bPyQfJGx",
  "key10": "3PgeV37ky8ePuUfLcDf2rw6xzVM2WXNn7FSD1vFk9JYnaGgm1aDjWyZgmAHhBEXJ8BsM2LRrfHMfwVxqwQtzG5rg",
  "key11": "3vGZwWuJkXiot3gCJXbzeCqJ1KKSPjeH63EoRc7J9peAKZ9WUndvwPLRm6PfyVsv3KeFQLpQMMQtpPUYsBWgSTao",
  "key12": "2XpekA3yWdfzkEtzTc1eGBTM5pBkU8Rz78ibTUXhy2mQhbs8TQBjCPj1UQHDuRNyGPaegoeSnCfbsW8GsNmMdghA",
  "key13": "4J8pDDaR82vNGHQKE9q3dZVxGj7MC7322ZcJ7ZCFvDAhZKoQMtHjjsZJDVtxTNYwSWxYjVp5c2vsB4CGwq63EgLA",
  "key14": "4Cg76AkGhHASSbsYgwVCoHvSmuqPL4xmgkBGgU9SrXT2JwnQuWcqXkKFRCmP8fSRTtr46P1yaMhXf1qLoYdjeBqf",
  "key15": "5qFLg8vpdBpz1eK3DYt3p8L2o6ys53KaPH31YmsAYsuQ28XYtMpUFeAgNEbftSWEdftYHPtmpqEQuiBrZq7fPins",
  "key16": "LBDQBcrvg7AJWwaFU6UG1jsLrdVA2SP9f8uuz6hiiHujvSJwhasMd8cme4xTHwFEPkaqjSjkmGd6KCd1R1bbHXS",
  "key17": "2QBM2euqBZLSCRHRhYNL3vzz5oNuRyG55PxygkG8j8xdCbpANFZoyJSNzApJ2eqV5efW1C9UTj5nEXHuca5EsqfZ",
  "key18": "5h33CmTh7xj4JEpDc934nW2STPFZoLxNcZ6oEWLs2MPjoKQ9bF3S158jrm5feHDGKWJSVobicKJJ39tyA1NKhyLm",
  "key19": "4mY15nWn1P3PzRf9oGJgJEdCCAb222ZzDGji4edYqsM4W974KFutXJ36oWdhR5Lgn5Q17CNa6MnUUv3aAqiJfQy7",
  "key20": "3XaKDmYxmR4eoKsoRRmDpnmNSjcvzGzFkcnkekjY4GZTjprWuCepdPY8jbhCGAB9MNE6Pjq1CkeHv9XuY1iJp4vs",
  "key21": "3Qva7FVjuHXEQTFQYtJFBDygAbMEQYrKXyxU1kDUhJFMeoTdhtKUtL3jUprjRLWAFzTxCmuJV299ooAy6BRqqwq8",
  "key22": "5RqXiXvbt2BQi4DcnAxYA1VymHswx8mAE1VWbH6zostzkc4TeByZCDLt7NPaRRS6UKLReGRNyC7DkBp8Fm8Wq8gf",
  "key23": "3NhDSXktQpVCPziAhH6jXQ98ZzEmSr6uYtvif92cfQ5VfsVJN9GubzL73QkuJ35fDtei99B1Hp1bYg7adhgrJnUc",
  "key24": "coeu6J4kMbL77AAXGETegybFzqpnnm1yR7p6cKu9Nx8PKwhMMbLkhfins4wMAUL6UJTaJPN35L89PUGMiyAXV9M",
  "key25": "SeMDaAsupqpAiKgBwzrVoRimyu8VXqm2M9oJUEBDiG78zv3AMzfp9LmdkFhQWCTr7Fx5YWgwyG1k5z53yoZ1BJa",
  "key26": "XUF64msnqxJqWtnv8wnBNwP7osa5ChJowJKFcJhGWQhxMHhDczwJTzW4Nf4rvuzuFv4wXHjzdQRu9ZZ4pAhusbs",
  "key27": "vtr4uJtMGqgK59jN51d8Y39CpSDr1YHnygPWYvVLAgFne68vKC7MWhaaT4fW3YAv4ATCXY2TM2vb8zZEd3CpaDY",
  "key28": "29pV5iFcXGFXCRqtanp5dcCwPYHhPAA3HdPRXbP8ASZGr2AVRze1pMkQdG3viQNBgmjyyQvfhtPJEfLB6jT8TRSZ",
  "key29": "4WmuMWH9Us21Rc7Jtzz3L2iaMMPhig59kQj5tztR8mUXDqSDKugGm637cPnAQYX1ANTsbwdMDr4u4Cw7Djer5RyE",
  "key30": "67jhhgBAzD8i64RyUR2wh6pd6JHV3JUQCrFg7EKPqDDvgkeu2Yzui7ptvVzuLZ8bkhooQKeb7XPfjkr6GBqcgHwh",
  "key31": "4STmXB98kadfuQ3LE1HGSJ7Jq3SYUSs7Vu9CGGPo2XZnfKst2GEGzb3BH3caU1rp64N7AF7xXFRua5CW4Sm12RRH",
  "key32": "3Zu1S3ReAnZLRFhRspqLQJ8bGUCJVqiFKUTCM5qXhv4FnseR3zuu4PHokYzgmNS9cCEuN4dkqSUMLhw5BfKFb5Ai",
  "key33": "41SLRtERefg5dyvbrMBYhS9S79qGdvQCMGwMjyftcsP7cBWNMnznMvKeWTv5sjPMrCLvZKY7wntijzGMEvepEkE9",
  "key34": "2tZuH4TV3Bg4dTACK9JF1ZCr39MtWjFquBbBNYFD6vbpX99M48KbmKbJnbFAdEcgstkga3j8PoYn5pvpsALAVDv7",
  "key35": "2FTDpsVKYNVfM3Rg91e7atKcvqJZn8CvjZWn2zZJFVq3iAJb8h6sq3aT7nCgKbRAztX4mx3Ro78Aewcikpr2ARDV",
  "key36": "2xBdhe2nFxJJgwaVZ8msYx4mTdeavVxb4SbRoThz4B93pyxTMC6XmirLevZjF22yDUCyXQFKkcScwadcPzzDFKst",
  "key37": "5vrVTqKe4swcQGf3Gdo25pkDfegv3Xa6WCWZ3B4x67HVLzcKV47qywnN54RijqibPwspKgJujqPFWP4sh5V1Zi84",
  "key38": "34XnABqyCb18uMVdRtHFfiTpstmf6CSv7kbKAaeMuBxUn1siKdU1v1Zb2QRG4eiKcxt1M75VTouMvz4J8KwhVp8r",
  "key39": "3y489923mS2fQ6JKUJinrZXUKnNyDXwcPuegWWAVfwMCVCfnMQV5k2MyKVAbtMAxZqeU1KJGmc3GB49gYG6ECdBp",
  "key40": "5yhV59Z9sdqJWh5iTeFaQ6oxFkjBpczyCHCj5JTMahpJBersRBjPj7VyX9VG9CS5TN8NvWdX7cYGmX6dik4uharu",
  "key41": "Wq4XPR7CF69HfmE7K4Pb8wKq1A9jGzTdJMhNtZF9MBrqeHt7tAz4EUqXh5aKbkYVpfUyAf7vMSB7zYZWS2qmgxP",
  "key42": "2UedrwR1yrEeYJUXTJW8GQD6zTss6zTUJNokdcrKnc6hqNSm1cNdXLqFg5NXLHB7BtwF5YK2KLyC4DwoQp8kTiD7",
  "key43": "2sJrGo8e21EEuDxJpULqg7HdJUdpEXr7zNBbfrdZqdCTcTqQU9CjxctcNgYhNZQgJcgfwbp4X5S5vMaR1KZNHrKU",
  "key44": "5xjjsJx6bYtXvPzoYbhUNndmJGjNSW9Cbota7hhLzsrp1Gto3Vr9DaL6K6NSu3k9KWwvX7LknWGUujZsZDjXtYTS",
  "key45": "4ubkt6oMNEppRHWmdNj8PtTLgWX1vGTW352L8VWG7VEMKYEr1x8gUWRSdXzcYxDcC67wLfs9jjqbT28nPDwyqUWm",
  "key46": "B29X7ReXXEFNHE8QsCKhqWg2SCreHR8gSNLkCKGLxuHrgJsmYiSxbGtTtAxkgGRdbJZ4Dks81j9DVTmCNbJBjZb"
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
