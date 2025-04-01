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
    "4Zqou8CyF8XKn96L3jLD1xd21fgCKk1MU4YDFq3CUht36t3UshAePhsDsXCNH8CAQEbNS8j1JcZaXujbewyE1p3e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WFsyQLtm4mXk2NaLF7fwqafjpUPN7hDcK9xbS5kPtVWM23Gbb1cBMtHKLTxCCuqAdPPiAcK4qSHGUvg51C8JP2T",
  "key1": "4FmUTWJhNCcD1qsu435rTyxQChKjvE5VT8VUsPMb8igywHQew3gL5utgBDoUuyu8eNu2eQCbhAdvFPLyWxus347E",
  "key2": "54vxnN31f5vvUGi2DSEcr8UkJ17T1h5bAJdZqKqBXiPJd77Pm9uxijVpi3CT8HdmaHJBJvWFMT7bTLozuaHgjh13",
  "key3": "2119enhNmZ1JLqhSgkpkzotwrvrAwN5oJVKD81CK4H6fmVJMskUc7SWsaZyjdxsVfvvqj8nTqdYa5r9tEpB2DxKo",
  "key4": "3oerUXqFEBD1UsrAxnGNdkEurtR2r26efm1ttWsNv2YKkfxvVu7CLTGdDNE5Pe2rWN6BsJJRCWMpf36TcE7qgZQE",
  "key5": "2P2eA1UohyWLEvLQowdjW3jLDkfZN677M1adGFzrqfbYXCL1R3MqfutY5or37uENFAQ35rq9V6S56NpqZcH9ey12",
  "key6": "4hWfZKUgiHA4WvEk61vYrWbwVJiE8gECirfVXGEN7hZjRE5McZk8K9AnkttYVtkTvDvMjL1FVkMHoSyK8kBsTXLr",
  "key7": "42RMP3XUBa31u3tcPE66GWqAL78XtWSDSgdELTXvLyVWqz82avujSNaUjL5aeioexoA1F45P3i1u4F3NMWCu3cL9",
  "key8": "39UDSuW8HGAeZtdx9GKUYopwAVvNSE2n2yrXEiJoBwNZebPqEuMLbPhJS3U4fW4md6ARM3xWGuFymqVGUvcfuCPu",
  "key9": "pvFSgo9XB1q5besT5vUngX9dkHwTNWn6H6i3qun4FyfTNxW3QwxKzqsZprTWW49w2hxaXe7EQG8fJctBy9zYJXd",
  "key10": "3iBLv5SPVL1D3FHeupGeDaZfEc8SpjfzgfGywYQhzkcdiopWUzhGL8fptNTFrhrwiqPj99sAAdgFHeQsKxG6k78m",
  "key11": "2nFc3ePwkPRvPRdBEKVVTTGbDrXtdE59ZLUxJHyff4GaK6mynqs7BzUXQYTovHz1Y7ZUD37RoyZy7eGisiSxyZqN",
  "key12": "5ApxprnWuriJf3NxchoGFGz6sWE82FmR6px9DMqPrdVLeohzc4prVEQfmsD5veZrhN9dqVSAZqaYm8JJ8oTrFfEP",
  "key13": "5zfpibKUwFQFdb7a5xEMkcobzk2EzA9u3ibdgfc3KA3HhEr9xFG8xoFvc4fgdqLX2gJHAEGkqr5vVKac54qhezTC",
  "key14": "4LnMDUws9ssTQUzHDpRKVrbg6YQBaT65LqjQD2j8yRn4bgwvBrs5Tzg5AUAfoFy2vJa6gsZQgwoGANTCjg2fJzyU",
  "key15": "LnuFN6pYPSLH4TGvXWyYjT276Ab9Cqs81GBKUWn8mc1hbrmq51n7WmFZTQeJmSbvQ14qZaN9R5G2RPMmib6jN1o",
  "key16": "369oBbxpP1GFzV7g3Wvw4A7sNBEjMV4zjoMhDTELEsX2no1Bg9vBBCh25enYRyMLA3nJL7YPCsra318mkf7Z3ASw",
  "key17": "qsfnqL7yZ8urTwejvzJMnFobxiN9Cb8Ler1CsUTsEjsFCkbZxxDKYLbnoEqWGcw3JU3BdhyKycizQwkgyp1PE7g",
  "key18": "3Mm6n6Uoq1ctYApkJh1eT8P4c9PYgPxTKwHtNUbYNMBJWZsVZBxjzjuPc662yDy9WAU5ebDS4mBmwqZWKg8pC2jV",
  "key19": "2XsbsFjfgxcS5apXtjJ5g5mjdLpqueab3cMUFWhFoLmrmZG1eoR6bfmXx9yAHMRyEz8nAuQoWqiSWrgBXXJzJx1E",
  "key20": "2kL1r6j2DEL9rah7civR4vAu5S4oD54TKouFf9n6bHWMSdznqeV1Dgq84rVGJPK57ZLqv8qNxjNAYhEuSdcuLufD",
  "key21": "5xdEvA3q4Ns8BAFYQ4aWT3b7zSM9ZAymgtyAZ6MbaXdMA64e5xxKk7DmpqNnuDdhjixvKHrJvK47dGD4DQSsh7zY",
  "key22": "3v8ZoaaXSqvdmjcCsDX9AyBvG5qmfQvsSF5HnvkvcEMAYe5AxQaWXsuvbfdzo8bGtjdPJUXGFB4mTG8nqcjmxpLT",
  "key23": "stcKhqbawKVh4KSWnCevkjJRKEmeB6bTN2haYv6eVB1ruwYp8rMk7rcBwzx9e1ViqLURy1eiFaBymBzaxj8Ep47",
  "key24": "PtTF9V6o9JJRmaX3fThQYRxNDPVGCtfT5hfu1FcR4H2RGDHeQ5ySwmAjLr6mHvPmpveMBxzhPWGa5uJFDPQaTke",
  "key25": "5bZuTTAU3TbxfLWymRvhXjajkhgG8VQurqFucgc9c7ebXHdKcJBwtZw9XDARJC3gbiirFAYUA21gSoAHqyngWiiq",
  "key26": "osvHiu9HMKVhwz2uw37eGHHPavkQzdGMBYwEmPQzubdGFnL96Junb2PEDftjGZ1cefLLKgyU1Q99sYiMwmTmkSd",
  "key27": "37oGkB4mmLK2W35njS9dmpVAFPXumRefqJ8U5ozVA1xAMEHnXXYaDSD1sd2RrLuHn5urd9JRBoC4r6nKdaYw9FrF",
  "key28": "27cDUHrUYRyqeH3znX9mqq7DtMTEYEbMQgtSmEJghDhYoWpE7mJaJggCFSQW4Jukv5TSVVCpUcRVtmEu1qmM2Y7b",
  "key29": "5i73MdJtv9KDpgAstQzDkSKVJaBjHLgDDMGmCtfifFkdUnAfsoHxPq8kH4n5GtvNHzfUeWVvK8kBgggRxeAA2PgX",
  "key30": "5fRgohnxeoz8QJbtvv39KTdvMYJ4D919m84i59hVWVgKUksNWDubFZ4BcmV5F1xxqGhN4AxPNkVZXGBctrmXBB53",
  "key31": "2NJ1xPbH8AZVLY3yGmJXoxwrBk7V4cVnXWzyBRnKNeA1mioKDXC9r7vBo5H8j42wbJBnncSwEd8GEYVJFksyzoNu",
  "key32": "3mk52EUGZNmftQ2X2cnq7uVDpB4tiKKeNZtWoxeXqUZBByWT2wzGLVD7uvfCJSVQCuJK4kp1eUnTGWY6AuDtARkg",
  "key33": "49UXj2eNrYTJA4JMu8iBQrjmvWpKjgvzqzHwPETzK7HSEpZLS92B4AfNBDdf11h1oeGQKdGCijvb8Z8UXsWe3XKD",
  "key34": "UHxxFKx3StEFFaaFqjGGd6bgbfwUdjx3L7u5fuZRN5WTtC4mA9iU7X3xo143WRtoKe4QtM5A44jKt1cs71j8de8",
  "key35": "oBM1hj5DfkT17nx6m1NqsBPedqKrZ88j7RM7Rjf195tm4xs9xZ16q9CSbYY5nSxRERGQFVs5P1EsPfMrtChaknR",
  "key36": "4Euu7sMXv8V7xaHhsAeKsXgqCfMEGyHVQpLVAUrVEYbApXT9kkrabZrLT4HEgkTHNLX8k6xtoEf3RpUaZfpFF5rr",
  "key37": "fz7yFfs7XJvsFFFHb5sLV9u3vdDfsmzncuLpkUoqo7Zb4M1pv9V8hUhC7tRuLryjoQyMm5Z5fw3C7sFMtU5Nj4f",
  "key38": "5CzLjneH41KfFbbgmTb4fUHzzuUrLkfimDLVQKsbmZDbXr6skiBCnUHh9XBKZPkGpZAzudjckbv5Bk7vwPTLJNFF",
  "key39": "M2Yqth67cpVRB52QZmGMrJcZeP9mYrkwMU5Si4bWy5ry6MCSm1ssQcua57WVQf8y4xKuBksSC2wMfEKVqg73DWF",
  "key40": "CMRo8kjG19u87YDB1rthXAcnmyj6SQBgYJQnP46QvpCfvvtHycXKHBmfZtCEStu8wL98BxYjDu6oqsAyaRomNd1",
  "key41": "LiyMonJz3XiUzzKWttm6xHtnq7TNH8ahVdFdT1CV1f5ggDmkjC7ukn43aLaTAcorBEdEQK788ZBA7tzMxhbLur8",
  "key42": "4zG7RR2eyo7aLcyx7XMyuDLKDMevPWge1KPj4FQyVMAf6Jh8FVWb2M9UanjJB4EgLCvkhmy4xPDMTMgU4NMr6QGe"
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
