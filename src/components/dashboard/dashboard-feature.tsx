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
    "5Sgrn1jtopitJGxHCMh6nak4k7fJF8GqqCQW7cj4fn56LEAR5JanonJpYjKFPo1HPWjeBF7d8ATc2YPHt8X7ScD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FyDMBhm5RKppapS74BZjR5hoETtqadU5KppyeHWxR6uQ6bVx8A7vvjY36DiH2mxxspToPVk2StDXAWMyoqodGXh",
  "key1": "3RtpKLkQ24HhxxszuLJQnQPiA2Xw6fNeZ7rYkghtHCpJJbxY29dPjkwXHCUzukvPRLoL96BbUZbupdfoiPzSRuDx",
  "key2": "SFAwc9p5t9uvCCn8MPDf1KC7q2VkMyVYZxhwU9PDQL91wFyB1UoTKntPj62nxEybRzPiUdGMi9Uzfqab3ThZaYE",
  "key3": "4nNjj5fp9TWqzqrcSh1ZTFyL2K4pH4sWmSKkStvS2oVe69dziMqVuRoL5t9zEgg2ouxBbFg7tYqpoNEf1dzBRWJC",
  "key4": "4JSvhW53aKUQDNmdZzxSvpawiLXCutHSF3cpwwiJR8AMEzfwy3mTCRujA3axD3gFJEnrX416556TaJXVujenTgu4",
  "key5": "2uhtzA2SzdDzZTCSpyBDDniVEjFqqoLiRYHdY6spcqSrYQhLHjkqra1tqHBXfnEmFNVhqsFLpNUbWRKB9Cn1jfXQ",
  "key6": "4BeDv6wBhGeetTH3aoYsa6Fg9L9ebhnYqUiYZrwizgNB4pR9ovSvjxmWXG9KMpW7CEkJWr3Pyxa6tXAqux6MSqYL",
  "key7": "4DCTpUQEPhjB9u1HoJPAf6hpwSJMgcBrjfYDKnXixTDKkhWT2BPA5uzCkk9dyJwNF7emWQuqezAbZLAmZwW77vcn",
  "key8": "4vZh9kbuwtimUBGHLGPsvcuFUpqivTmxtjGKBJxcXmX8DcEGHD7vdhZ376E1ra1cWy4n2QSrDmRoMBJb1JFrJSy2",
  "key9": "9ABfC9Sg9u9VPaCrU6k9iGmfNaV4btFr8L8JFd7G7EE2gNWtsaRaf4eyno948qmrye7FKPdtCPqTqixRmhfzE48",
  "key10": "4LUQBtPP21wY4uRFBPnGxSknURiZ8nXuk6mKLNXzxojiJSnPmbEnTHHLsitGfMkiT1u7PcbXANpEj5113naGbxs3",
  "key11": "b1BU5cZJUhpXw2jWhRb1nsnfZpJcs8DhGfP9buY8UKNaUYxcNYUn8ktc13sGUqyhL9LkmAm4Y64Y7MPL6PmUkkF",
  "key12": "64yHA69R4RsPCTUMDYGwbxAxDNRAiR7wvQ3hLqwMbVdBqb1UUwgu2Wh14Qp7UefvR4gctCujxdriYPXX5DU5DCey",
  "key13": "99B16i9Ew2viBpwmUDBGitqsdatPkDQMj81spd235yGvAodzri7QzaGot4VA3RHFUBtvgowkkGUU7NaP8kYVL8c",
  "key14": "5YarQ3WehacGZcpBvVCnrHxm2SM7Ax9QfZ2gXPgkbhzLEye2pZLao9LNEU99JVKc8SF5YmcCk2S867mfXBFafrka",
  "key15": "26Ts3e5VcvHofrVfimTYwzB2a7eGgNzWbEUdvZuk53EBeVB3XyHjxVE9dLoXVhEnuih6R9ycDvu3P4kpismi5Rn7",
  "key16": "2ugUQ6FBsStpJ6C9Gys4zQdP6o27xUTQj6fYtRq24k65tsKKgULL1JcLL46u9HvDdvcXo8pBWWLsexGFzuv6BjdU",
  "key17": "5h95g9FhMZ1EaajxkeZbU5kZd1YSa6zwbQYdrpqAb6YHTAEDNhvAyujKm4GSH3GK63BHvxAzhhza7BFyEjr86V8W",
  "key18": "47favyuxpSunXfNfXL1Q3hoz3VXPU8bVBNHGU3xDcMsJHgfCT3sV4TWL4cUi4j9VYzzfWrApwWuESMPFAcq2fxGv",
  "key19": "3tzBMKori1vJqXWjcVqHmc4MU5DXkr6BTsGJxNq5kquFqB68Hji4E2HiRJQyfmeGw3zo7M9wgQDrjRMBGY7ZmrHA",
  "key20": "EJpvdRYAvbSJn1FuLofDSdX9h8vh5a5tQLxDzTekNdrxiLM2j4BqJRidK35HxQSAix9nax3wb71CKdbpqNQxF5D",
  "key21": "3yriYRQwgEALcQ9J3pLp4RZK2VNw14xD8ZApLVi93bra4Ty6QMztQk4pSuUpmgQ648Mj9eDA7S6XiqHJMKniuEwt",
  "key22": "4wg2xEjk4XoobzAY1e3GS2vi3jKJwxNH7ysyuVLvg3yFakTuU77KGmjeeUtLaVJsBwD1EXg5aDRQAfrBsaVbPgdv",
  "key23": "5XTVbotmNkz6v8Qg4xaVaYpfx4vxwDD34YZuwawVYo372AT6cMNmyA5KMLtAho24XbGwR9wbPR5HY1QSt8fDeyZ9",
  "key24": "5ubaqkE5VbHfhmvuq1hH7FQmfy5YkrSzKjZFnAT9hhtmDUATdZcC4bFd2Hmhke778LwA3GTeNNBpcpaFsNd3tZCg",
  "key25": "5RDzGZtu2e3A4vSthWHA2KRVjXDdY8MrMUBWVLwEF7VWDJdKtBffS2Gjm1p8BdSjDg3aPkddqpbDqJyFhNhscCKp",
  "key26": "2qagFCyfBkWRpmzdKwBBr1kaEi665CF6XEBTrD8pytzfzeZ26qF8SWN9FTJFSuQZynxTe8emASpMVPDn8LdTKCwq",
  "key27": "3iEvaHPHoQSaLuVEPNGv1asxwWEQjtXvjZQwFSTM74nyNAjX1ePtFCbntPHAmLH1VkwccfwzZmpGChhSXRhkwfPF",
  "key28": "3iRCmy7uY7xgxebF3gVftC7KjwMNwUgr39WWG12nBZKaWjps8QyNCSa8ho3VoLgXsquRwCLG864E3h4xsg3HEBda",
  "key29": "3JYJPnGU7zVQz8WEzefYebMuXQL73PgSPSVhEcNB3HAorxoL3gLcYN5oc3dubPQviGYDWLGBnTWQz9AC9wDpi3DY",
  "key30": "29hj1QvG9XZEdHEqsnnVHkBWdNU3hgpWq6pQABHHs8W58VkGyT9aN8oFRuedqje6wbHXepe5AGVzPjfGDGYHvbDb",
  "key31": "2PQxaFH5sr9j2ZoU63qP4QmeGq3RKyAGpWZPxQeynuN4jnP6pS6W8fX9pxFWKDsQq4SFDLL7Msh31tLipJLgpCrP",
  "key32": "2bWyhohEcirYynPekSmse9FkAjWXfGpWqadjst7eZT2MkDNKevoAmDY7tD6eVzU8q46C5g9pTEhpFvaE38N6EZTh",
  "key33": "27kipP4pFeqBKk7m2ZZADGW3RVp2iBqZB2aNyYiyN2Br5mKGztvgx2c6jRNJ1cK2E7xR5neKSdHF3p4Jbim7mKDu",
  "key34": "3vyfVN6vhKdz25BnPEY5uDQK1etBQpRM6KJ35N7Dyvt48YsR7sUTnSEjhVMuCHotCrBvP8JgoQJW7P8dctTYYYFo",
  "key35": "2HLsrHu6Wza8JcsxnU2pHmyQ8JKe1TfGAeqV8RMagoLTRtZTZB2qtqXdYiizaCUUF8CVBJVCYY3NSCUD3drR6bGD",
  "key36": "23pJXcxfD4BHArVJSJ8rBmBwyLFSXnTZaJzaAFBbzTSdC2UxMSx9F7JxsGJJVdkx3igcwswiEKmmN6LqQzZyaM1u",
  "key37": "qmptRWm8f4xUoft5h7fujcbdoygyxn28M2MwzdVdcW2xKcDj6YNymZ822DD82L2KeQguu6X2a4VaZkFXpv1UE7g",
  "key38": "9q36iPrSpS2itwTDwdWHBZsQvYjtPFrTpMZi3N6Ljj2Qkn7koRpL2q1kYfgzDg2dQpTuR9b3MCfYwwtyDZ2CEa1",
  "key39": "4gAR4Dz7TA72vSU6CZVfREQBt8PQE7emsCcSy8pLn8BhSh21NBaCq4Vrg8Uio8JdT1rzggnwYxKtSaDvhNBaLk2z",
  "key40": "2KtHDzM5giZZ5oynDPuMMnfbYRqxSwm3dz6yesFEaZGa8HvaRfiEWpe9zps9DgA3z8GuErnZdrGoA5apnBKmjsqs",
  "key41": "51cAGWJa5KgvVLAupw7QEqt1G8yRMhS1YaNXVBjxEuG9bqRqfk3oNMhFooxZkFhZPVzafPpFa9AaheEUUfP5RDuj",
  "key42": "2RBFj9DHV3yZhVabuAzuhBa76eJE9kyZPSDfeQkhipk9iA2gpakDMH6ERmPVNNADoc2DVypiBCfQH9c1aEp4FZeV",
  "key43": "5tGvNfAHYmEDvRT9eTAgu3KPzVeEm6NbNWDXHgLtCUULPU3pw7YXRmS6r8LuF6KJha5hQrknriZGqb2CNCj9jhhJ"
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
