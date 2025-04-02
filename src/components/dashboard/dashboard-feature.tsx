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
    "2BMS4GKrSeLHjtvtS2P3AGWuJAp4JPAFWR2JBxrtuzNqKVgLBVC9ES39x2ymKaxhu1iG7FpnnhTzTJQMdJh4fRGm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4smrNik53GfYxPrLMsjyirrkMUZ3ATJz22F85s9pXG4xq6notXBzPGUyjFPtBW2L3JaQeLXJuT1ynwZvoqR3tWnf",
  "key1": "3JkNv6Ss5gGbANBXR6FLneAQVaRaYbdYb5ELKrrb3G7HWpu7VkPgpmGfXMyCYyjtWF7rkHPR4NXhhr2CWT6R9SKy",
  "key2": "5dEtUU7R1pPwv4GZqABsZb67XMHctov3xfudsJt178Ypxr2cHUhk6wYvc9AutewZSrox9wdJwiJv6AT5kqs87wn5",
  "key3": "4jqeYhC6SDUVuSmHEMUYp4XYJG8kgVigHRRmX6hBPwB33dAj457c5QaHfHcWioenNicdYX3i7qynzs1h7NFWwXZU",
  "key4": "5d5CiCss2gku9yQTMHyEmEAeL4y8Dv8PkYEmvqFe5RaCzBXbYod2ARM8zyhH2zX3PTEvYpoT1HAfZyeovuRS9o63",
  "key5": "2CjZ3BSZgw1mfyjLLgfdjFqmznfWVYKXTWr3ZwdJiu9Wtj1a9NoaSnaRjt8ezfBm8mC7keeMK2xgtrjiBmh89UFA",
  "key6": "645bZzydcxKdAt7VFBY8ceSFSHk5Xpkqjs1xjgrh4rFSunDkXEzWKX1Mtb3TG3CaNjTurSJt6v1EzevWwGSCAXvc",
  "key7": "1nXxuedt4f2i9uN9PKDpM3Q5FXf89AN4QhrivmFpQYsrXzDdnzPsGUgvTziGXCwNQJbobcV6418ErFqzw3Dzszs",
  "key8": "2mXo3B2t6y1WNxS9GVqtxY5Z5Jqg8C7g1LrQHzAWhsVvMDGSdAEQUCPfXfm1BVs8UMR4MQRRM6gWAhQspvqzuLvR",
  "key9": "47BYzcoMWs9wRVgNY6PAoH98kV1MARYe69rBR3zSE4rCwKkK9VepVK9UjYM5J56G6yUDyBjZ656wEmzWM1NwEtas",
  "key10": "67aUZY7yEEKYSv5TewZbTm6x6Jz4ZcR7SpByACitQDbqViudRhDvFEFcWC9D4tmQJq914Spuh9fDMGEk3uXdrjCK",
  "key11": "5ZQv945xZUPQER7uTZ8j8e7zr9ga56oFVBSHwmy1z1YR4iyst2nhGAeADECZjkKx2zjX8SB9qmrih6wVbFs2tnjr",
  "key12": "56w4hd8iSGP6R7ihbxArMrgBev2L36iFxUpCsK4SSEMN483ppj5dPp6i6iVqj1QSi14iiiXdkhFZQYBsDsdwXEQS",
  "key13": "3hoSMbjsoSP6WA72rfFdbEHonwJjoQoREzHUZTb3YA2yfbVaMn7rGnw7iTE8kX1HhPDWHMT3717L8L7eTGJgToVR",
  "key14": "39FGJtyuAMPvEhbt42Qfv5soahzuCaaW9PuT375VMxLAfMbbS1LVDuJ4NdAnckFnnJuPbq731wKDNCRWFiFkCxRH",
  "key15": "3EFSRKXVeqGypEuiz18dw96RD9F91Pko51msW8fUMmqtMdjMVSpPGeXmpGCq3cuxiaLsggt5iDZk7AZaGa8bWu4B",
  "key16": "UR1ZyBzLdLJ9AFa35SHvfnCsyTpiGWeX2cEwVcJ5oEreGu8M9CGgbuPxNMWP7yiWXbwRrM9paFzGdajBFXs5vnS",
  "key17": "4hJPq34BZpugA2RHtjN6LRfuANuTe7NQcyXSHLHr8TbeHfsNro1B17Adex3fHtyXEmsYbsqg66DwoPBJ4FRFnewa",
  "key18": "2wsmTKddnDLyYdx442XVZtBxgWM4ff7yYdKkKoAvJRMepWfhCmu8ijGNhkYp13EJhFDoA9WwLMoTpMVyYsKZWdMb",
  "key19": "xBw2ShSHGQ3QgwqzrnXwDtqnQXQ7AwNNaxpWemPWaGjFXH67kAK3fshCSBzqrqX9dVmdvheWrVLXPR822ZbsG4d",
  "key20": "29jvpYxqRfBSg1jU76m6wGXKtPC6fn9QGvayYGPpDxhZzhirSyn9cWTBGUBe1d1u1muPYAzYNRE2U5XANCLNZzkC",
  "key21": "3v7md92sbdBNEQ7BEc9f7uAqrXJPy9Msw9GWimsC1Cxh9vnJ2Kjv2xZQx7WX5fDWuN82SV8Pw5r8ojRfMzei5bVR",
  "key22": "3Jt9EmXTZNKvTmvt7ouKyT7kMAD7mbQbo6NBo34gbRrfjpGUUykZbCnCAcPw1BbiswUA1o5VRebV8JkmH7j8aFmP",
  "key23": "5m1VbgJn2mkqtHni9yXZNL7SFTrCqicomyjmaF1CikA1tDnCSWnQXjh93ubS6ceYkTXQwBp1yUY4JfPAFCHXhzny",
  "key24": "4hgghNcZ3Ph6P3KC2KJ1HPbRRxTeQqSHXyjdmJAMbcGhWzbSJKmyW7vDg1icWtvXbLgcvU6Gmn45dA8qqN3LPxQG",
  "key25": "2zqBpyRzDYov6Da3kGSHXJBbAT77HiEj6WJe8SEqgmJ2tTSu4epdaNwnYuAeE9pEe9csZStJxf2cb7rN6VUCLY85",
  "key26": "5sqZmLiQRDscJZxepxR98wa1QoURYhyf3Tnhajdbx2jUBccM67uwAFxAEMuvhf62sgCDvbKLnYvbYzm8QseMePH3",
  "key27": "4PqzjerM8AB8ESh5XEWFJ3kJA6pB91t5a3PnHDzsFXeRA1VzHcDq7vnwep9dXdt2GfVq1LtRXvbwaK9JVU7TXQR1",
  "key28": "5NG6zceryjiwmWkRnfUysExhqs17jQ91JNV3hvkgP65HvAt6XR6K8emKXRZu1XEivLkaDutmUz4SXXHMPQ2LQs8v",
  "key29": "ibh56DdB65HVLKo3BDDnRiSyWPpRvk6bGQFDeYrzgGKGHn1jgR3oi4BeahbmXJuWyk64av6wicoV1p5GSLsbdFq",
  "key30": "4BNi513XL3u9Ymx2dCxy3hkwvMALqxrQfi8XjnQbQmR7rwhxPiQKKhjKywpW1aRpNbFYorhsb9svfEtsovr8hAki",
  "key31": "3TAJ4A7NDeKQGXKVTdThUfXQjhoekNQD7MRepAcgm3qW1n5a2zk18xYnh6VLxSkd5aYm96XaA2yaJpyJ43wtNE9s",
  "key32": "4F4PGKt6AmDGwnmbK3Rk5GXWGhk8TRd5hheCsyKBCu8fa97v22jBA41tNP1wYbZKEanKSmWydZBuyZGVhQv6Rf11",
  "key33": "5jpKPUBn8ppoDRVfjC5KeVv1njvtwAH4oa85Va8ysXZ797Z5EFqHsuRoWV4CXqNYHQGGAjnamskDQ99Y82WwS6JY"
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
