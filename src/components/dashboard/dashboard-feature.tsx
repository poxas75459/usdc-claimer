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
    "3jEAeXvCkRvsv2ExXT3MHctWjmBT81kViamsh2CFi78Kt1buKwPQPdRT2WpKDmATmPtj7fei8gNp84Kks9NnUAt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QHKDzHDeQSir3qQuEACkre99tLQM3z5AiR61BoNwmYKbiW9mE1nxN5T7eYMNhxvTFHSknfXqVoJKEAZYmiQjXyT",
  "key1": "3gqzJn7HybawCL8dRaX6JcEsSfYRwi5frHN8MYNqnJ8HQFimYWJPUkB661t6EF5ESvtS4czneePv5pVAGACu3oGW",
  "key2": "21Z1Z9R9GVPvvRy2W1qsN7hU5uc8eqaxBpjbPuCruZHqYmDfKxSsS8gAWqzkBbp3UvDdGPFV4xfWt6jPjfrfwBkx",
  "key3": "u15vbN5ba3H4LE8htZFjEyYSgNZ2yRj6Dn5Q4mLVxkniNgiyHrSKMT6AnrVk18UuMR5U3E6PXECmatqW7a2kHf5",
  "key4": "4aNENiVhJzaVJNKZafCuhgwXd4BYFSN8d79SfFutdjeyu3auwgZzFQrKXHBwEpaZpimVmYEiioiBSqF1RLaeBHUB",
  "key5": "3N71n94RrnDY6BNDeHFQ1LgGKyEouhQH1SZ3wCGWohaxUqkeuwjaZgmW18fCo9CL74FLrMLVQu76hZxoBuJtDxdc",
  "key6": "3d3agFVjUUf2vkBZh2ukvTuKf6XACR7Ud9TJpE8541BDkqryk2bE83mxb4Va76Y7u6EzY3cTZ34aB6pYD2ipmFGQ",
  "key7": "4FbMPBGb1SRzbwMFNWkBT6Syrh7roSCeYByF2mnKLoVvoweVQ912wdXVwZaKpUVp1PGdRcx9JeMVvpw7Vo7HMJS4",
  "key8": "4nZHBD787Dm8uvjrPfiNoQU7ELkMD2jDuXePgUrVks788XxGBUrJFkkAf4C9i9f3AWhrTgVs2Q6zABemyjZQm6TY",
  "key9": "3akNuZHvTxCSWVkGohQTH9rboPC2a6kY559FmJvUq2CmkWS43uieC94WcDkhYHoA8BypzGEdBP99jCg9T5rqJfhp",
  "key10": "2Gbht6UpTiaJMbVWs1kFN5FvTHetZyiYCBwsr9AkJ4WxSp8uucmkMh8vDYkBnW3bkXwjj1AyDmFiqwaWwxQVAVUm",
  "key11": "5v8ejxg2Ggwg3WeWHK4WPiExoCYgawP1MVPuvAeCrrHqKamVWLpFny3WT3Z7fSjMmbF1E1aLvRHqp6hnp4iwsfCv",
  "key12": "Qjn3vinzRH793eQ2KkonBVHKWLvfyNTVMu4Zj7B3QrRaW2ZFjUeSawSmcsH528DwsvJobov83RfAMRLKCceWK3e",
  "key13": "24NGXg3rPWcZYCpovmA7qN3wRNJMB6inobiyQTTzyqer1jh6CuEVtiEAqv8zkepRHu3zJRsqoknnq4ghtzsTofuH",
  "key14": "4Ypfpru23ZUj3qrBBjWUewJjKNu8hPW9UPm3osr4rqkcBZXdRUQjgAFJDUfeL7w9qnnxZKPwXuirCq66sVU3kcxm",
  "key15": "249kNcBDRv7YBPCdCWnb5rzEtJGaKgjQpprHvBSy1wdYtDRpNbPGbHvD48hfCxemWbPAkr95cRaPGXpQJSuQW5AL",
  "key16": "3SjMYMSHBbkS4hF2x16X7mkPQdb5yZqjZ9njeX9ATJeTqaYxXb5hEUEV5jRrq47HbrDjy5AktaJFqrYMMdFagQwk",
  "key17": "4epVzA7fBjoQTxVSV3QSgwguUtqK6Ve7S2c9kRZyCRemZTw3Kh77i3tRGgA7dDUr8YqqkEKFiPwiEx2VYuHbf8Cp",
  "key18": "9hRqLJeVoLEi1zSZrSnEGthmZrd3ifM6eQ26nNYMfFzrHo3TnvB5sG2uU9TfKHPz9AuWiAnQ3ws4jLsAQZ1nSan",
  "key19": "5GJCHgidgiZyz6z1YdJUKn8KvovKH6BwrZQZxaofjQUnFDcanaHtWeNRoN38BHH6oTfBQEkEES4AjsZUsoajtj1r",
  "key20": "ibS11boya5KPLFRfagRhCcpieNc6JqjZbBP7n624tBdpZuWCtknfG6H7zujv2EsMDN7EAFoxT5aGMyX88bXRaU2",
  "key21": "3bPtotF4an3fjqhLmHYF4bEKcFamKSmPFcz6FDpTwBYJHsYFKU16SW7rAjYER1L2j2y6W5G8iwCRkzwdF9tfHv2C",
  "key22": "4XJNW7rx4Nu2w5S549eaeWSPKACZiat7Kd3ZGmPmNcn49Pcmgkpg781WfuAeN9KnWd87Xt11cGLUu9YwydgvbFz9",
  "key23": "YNJiZB95NT31yuSA33fsVp5Fg3cRo6jF2cV3pH1seAERwec5R18G52ofopQhgNTgQJFX9QD535qXL6383Pry76t",
  "key24": "3yJBftDnJkeVG4CsTvWuzAQfFikG7hr1Msy85KJz7QnZ57whWnMwSfF8d7MVLm7eBDazKMx8Mirr5WWFx17RYHi3",
  "key25": "37cPS6hCkcXyj4tNT69AhbciSnKanm75sYtzhTqb1Rr8J1NRUgvXEzkbxedKzfAs1TYth5tqFq7GVeqtJfz4XLwA",
  "key26": "3VnCCxcVvzJJg67XYgfQk8Q1sfN1fw7aRLgZC4aKkGbdb7i1yoaL3fDzSDWMKfSRTsKFtTKpz9Sr3fNWb8Dgh24S",
  "key27": "cuFWm46MPDSLfW5Wx2nTKUMYpaBZJGfNPVLd5bdSbgVHAKbgxQARFS4ZfPdFfLoay9nvTVmDzWzKPKZ26A6NmwR",
  "key28": "2DGLJp9HP7D5CtbrXvxtfS2VHUhbpeDbEDkzXrrT5dyEkUPqQSAZ4G7X13JP4W9cLcg7dk8oXqJfaJg5Fnw9KLS8",
  "key29": "2iEiuhk1CujMmHx2MU6wi7PdTf2CefNXs2pZsAUZ53ezuKhA6M37Q4qdUqYdWFdVMoo8Cq7SxDeLSjh6wK5y8nFu",
  "key30": "2jysE75emDRnbqua98hqP4gDcyTZfCTXoGVpeXy16kiB9eRuGv59nxeqrwt5qSoA9C9p2z7GWiSwsYxgsYyRC92r",
  "key31": "3jHrVvEQ93rtcoQRCu8Cir3QpMCQPtXB5n9jFHgKGbCiyQVn7hJVB423EHEi83zNNeMF2ysxT2aP3gyxQEiRRPin",
  "key32": "3wWPFLWLeBWKbYGVZAQFYCDViELPXzUAy9D7KAfPNRiGQAmM1ggksY8AM7BJhkfxNg24dyEWrLJSWJuQHUHpLNtk",
  "key33": "4hD1GNZLfFaVXRLdsRBd26dNtTrvqkmtPBB2sGPzNVQEVethi6pffzq55iC3HmD6cLUoULCY3p6jYBWD4LWey944",
  "key34": "5kBPL824GGsJHEaY9EYQt5WnV927KsH3wghGLBFfsXDqYjaxVfT1r4i5YRTgV3DLTr1kMaSQW4QqZkjdGZw6MQtb",
  "key35": "3Xqiniwma8nadxitnb9RRKtVSGd8ZvphTaCLdHvuH2Ev6xRsdzqdgkJ5f4YhGS3xQAkc8fanD2Kb386sFKwE9sv1",
  "key36": "4W66e1wgVyZLnTHgCLonyZiXbxxmjVKr6ZHUByWSWQxr4CjddCkVWNeLuHtUTguSXzySAjCx6zu4VWTqV2cfbgEF",
  "key37": "4kugSSd7hoKhwxoAMqMhMwW8Ud5xrkYfAWWZX8oBfVYNVEbzcWzUKF7DZtAA8utPyer8F6h3KpxXjkMB7gpioUAs",
  "key38": "34SWj2AUN3BTBo42SCn8aBwrA2frfTqFp2Vvag6xW8g7AoCVfWHvRAVgnkXYmLprZ7rgLTzPfB3XzCs3b75amdsT",
  "key39": "2b4NkKpMeJJXkNERwEFwSUop3MymHk9oWJKrLBj48z9XLRCRLQsfMp7KBbWNnwdZGbdi9DTWEAUsA761KPPzMs1X",
  "key40": "msiiTNT7FYKENDy77UoDrZvxPcQUVT41jPRCHV9hHkHdkLuPWfhoNtCWJE8kWNSvLR6MdFEgbfxG7rJoWdZk1PV",
  "key41": "4vnUUHHQK26zBZUGNdHTGebJbb5MYtXJ5DQN7KW9w5eTCvCv6r3qp9vSB99bhGMjqW5PP2iNupdDbAuhXwVr4cEG",
  "key42": "5FbXahe2oXsTtobxtyJWvhvtDKPZWmZAUA8jSeSNnAwwXGAAwWhiNLD4HQGQD5ftYxS9vcTyScc7ktC1haZW7jnH",
  "key43": "4Jv6CvAxEfSHLWoCP19J4fB6x6GLTT4Wa92fEkdwJWpfG1cLYMJT2U4RpKP7okSyrH6sWS4R5ifKgiddVnZAJdun",
  "key44": "2dEZdMUFKy2YxNdfR2vESpLGH9qP6StbcGDr6y5SoVx3RHt1RxTrvP7hYtcfRQazn9vBFHCUTbxcT7yFE6hjByhR",
  "key45": "66uXAMjg2PtmgnSMJAQxoGbQpPhJJ2EoDvh1Rt9qVvGBz1JQSQJLEAcYudfdFDxgMTKQgFisTF78UZTg4YpHdVWh",
  "key46": "2jf4AWhVaB27jifgdKfg5BkcpmxWSx3xsQKmvX9M3RcTNYKEYJYtuVhtRBY2EVstsFBU1xXwZzqjxG3mPk6ujjkn",
  "key47": "56b1XEuZDe8pprhqMKQdaA31VP7hb4QpPm6D3pzhfbP3PjbtLtd1wL2XKWk1rnh9nQwFC8HMrYiUXhMiH6S61ovu",
  "key48": "4tMjw1tfZTDH22SzMabi5uEPvxmsGVWvnxWgZGi8GyTUUayvY4tEa2C1hmcL1Fy4tRbYbpAhUxiuBv35zbMmDV54",
  "key49": "V1hmP6S2acBQULCutvgaLV9ZMP4gtCk6wBT1bEkGujSXDLmbX6izWxUFzk1AMX3h9CkZpPxEc9qvdFkdat9uxCz"
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
