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
    "VoDGW6ww7feZNRn6XMm1F4h66tCoZ6284BmLSpynPtQnEdNmB5TXteTbkeWkc6G9pAavk4oBT7ovJCjLCx7JwQ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EFUJkKfe9FwSBAT48iZnRyXYHUcPJjff6ay6BoSddGj7GMXbfZSNBNHGUQxD39iPFiCRu344rt8p2zKQZXkuW3y",
  "key1": "3qfSWV6Sp9WA9Jkoxs4tJH9RofFFziFN9iNHwTd9HkJfCaU18uB46EK91YJnWw2xJnSnUCCZfkvaDjTs3dMRMGd8",
  "key2": "4Je4kF8YGaXutCSpuP1MsW3a1ixnjoVTcNDCQrEhvrEkTLbUCbKX1Qs5LMMtuxiE1evDHgYYzM4SZ7cXj8JyaLtD",
  "key3": "CC74psLotjw2BwifFAAz2KgbiN5PoDyJcQbAxFqLWk8TD28ZKJr2Xwj21RApmvHU5vTAeueWFkLqmMb6sLersA7",
  "key4": "5AoakLCHH2J2uAV5BWrxuNtZW9dmADbzyNiQDEhCzhqJ7u47iKEybjfHkFrEdqbV8J5vxt1MqdBhUDjdt589i46t",
  "key5": "4NA9pn21CHnmwVktp6z9FY7DvvPrMbAKFFXKgWcf5xF9K3MnyzLn76uNu5wF8TDT74D13xotH4KRtXcn4LTjcBLv",
  "key6": "5AcgwtC1JBn6oRQE1MmvJwRhsTnSiMtEVH3zqSTQj6UXJJRfFtubi9taHrtNRfc7pjNmtDrFCuvkhRxvd3Pq1zXJ",
  "key7": "4HDjmrh59uj1HukwWaDzvkR6LWPHK5HyRPsPcU9QSTC6Da9LD4bVQL8mDthBnz1CTLewTH29bRiJBNWzbaMZparm",
  "key8": "4DfdmyAJWbNWuR7UjaBE7fG6wDzTLaTnHrYkdEmTUif6nkoRJKPBXsVosaZmghDhJnjPixq6GsvVgphPMGqjtSqA",
  "key9": "2ZmekC5H57Am2su58eWTpFYquHxwCBhKzBdkSB7jscbQMemyi3SRnBNQtPso9ojphpBrLs8X33kJMxkjHj7tzrGm",
  "key10": "Hom3wMqY1bFhpUjx53UZLk9jrMy6hwoiUueCdsBjtsLj7G5kQA31oUoLUrNHuGGPFmZtmuAzWtvPQS7Fxoj1Mu9",
  "key11": "GwPZR8HL4JVfUSzKQxY29n1s4ScwemSz4n19dfcwzoB5sUsEEkKMR46d2TTUyJZaHid84cL8uoJmPKdkXt4Q8ws",
  "key12": "4FA4y2yCgd72VdvTnTcyxHu1GnQVzc4EXXsRy4KbUANQEnoJrQqYGDgusWUCkQXL6rGeGDrk5xuUXHnk3gcbErrK",
  "key13": "3nbq5JonyD4E1yYutx9NbynMQKs5VNFZ1kbTKz7beRUFeLEzR2XVbeBeQ5Fxi6cNu2rhNihBh8352CCPahFChnJZ",
  "key14": "5BCCbp2tzda121cNoa2CHutiNEEXJL3vJDY41DZtKM7bC5V5MAahb33dVSfmDQ1TkeSBLrdMZeAX2cVdgGdqRzns",
  "key15": "54VpJD2X9FdCzWFc835Xj7DPS3mxGbpHsDRG3ZG4EbMjcTn8Y6QjWhpm4Agsww1xCDx9Ap7vhLzntB3T883fBC2c",
  "key16": "3YNaYzip8sVynPtY8EnXRUm7QogE7zHPGw3dwmfiqxdLd31fQPQzKp8EEtQVCwiNGcx4d3ja6nmDKhPdM7QAwhE6",
  "key17": "3azm8hBp75yaX7vRHGzeDvcmNrje3xJdqunhATbqs5tqwQpBLxEgoavZpSgqxY5ZcUD85BsTqdwZcaJpfyke2pRp",
  "key18": "627hMNdyAPvmLmJA4ezqu4k3qd2Jgkgg3tPk8bdiHZYqd7YkcbbMe8cwWT5W7vwvkJvLRNV6gvWrjvBjhr1PieAH",
  "key19": "22RfKp91cYpj1isVQd41jzWTxtGjMS8dwftzNxUXJDaZaE4WB6Sw1GseC9Sb91DMtfGwEm9rJfmHr8WLWe6yRYDr",
  "key20": "26RifpszMNx2oqnWZArsEJVd8VGXVAi3Wmo9HvZswupLJV3hFNpAKu2jC5qRfogFvNwJEXkW3JvKJs12Bth2QtQU",
  "key21": "4j7GXULfsq4EQPBrodyWeCVypYwyJgY3DwsdtAFnpQnx5pNgNa3LC9t1sYV2Gq8PAE5gXDV6wpZLhTjhdHia2TwT",
  "key22": "2nrJHuL9uUo3MHTp8QiFhw3t3jZKYW88xHspzsNecHMpWbMBv5zvFLxVhJGxGAfbmKFTjRDdW8WF4LMFSQkw9L3N",
  "key23": "4o4hjWJLC4nnoCXwB4bce3V3pv8iuYCjADX5MUEcbZCdWQrnZ2SKCumW9Ly6z2YSnJCQuZsg13vpk5gqcv1EX63m",
  "key24": "5rw7NGUhx25qtMYJzAosPoq1uYfM3wXYpK6aJqkvBvjQ8HGGyaacNbw4dw8tB1Vp7AKqQ4qPcc4MMD7bXaxjcoo4",
  "key25": "2t5aiD9duyofCufo6dv1zfZUoEQZGMC4kiiaEH4gGhzTMsKAh6Vnn8PnostMYFBaJgcdKwpik33Aupncgbd7JHrA",
  "key26": "2ak6K6RGEadXy76tVDWNatuWZuJa2kWhVuZVYbfsjgdek5ENkwpjt7k2tHAj4UPe1jpNqsJZQmcrXWxswRsPyQBw",
  "key27": "2ioSvmjCcjvMpHAPrMuQdAN2DavQzA4Mhh3tV4RuLHTJofKfD3Vw1W234Hh22VvbVmpv73sJqHCy7CDfm4Qt9GeU",
  "key28": "2Tg4LMvBWSvRDYos2gyDvWV8gjdocNveJRjYXXTNZYzJenp1r176kmvx9JzhJDTz7bGYhDGZb4fF5m2AchsxHiVG",
  "key29": "3BUNnqAufqzha9cjwHPVmNKq67b5sTdzr7UZZiarRuH3F9CENj6ceJBaczPxVAaTuP8wNNC9vRAz4d5d2VjebqEM",
  "key30": "ZCZ4F7Sq7hUeEhcqxRfaiwrBQyLDttwr47D179BadpJ22gkf8nKbeuDVJhB4oPPEgqJwaojftbaQ6DH94tpL32g",
  "key31": "4meKsk8zeoGRzBcoghHJQd3BwBx7vDQw2xX9ycYwxCSVvMx1NH3ST4hUcNUv6bgkYWahM33mFeJHBTnMZ2A6Bh4z",
  "key32": "5q8WbbFdzWNajMC3GhADEhzvbRxmkxyH7KSR5AqmxEata5AbmQbkLYCysCuAkoQvGXwRaHeW6zbo7t3oBudpeHxg",
  "key33": "4iGpyntxau2Tq3jtkQLvVCiWQRKyyNYCzFxP3cYkbkBsF14sWm2CbagnBRkYFaVXs5UxZi6RLeJEF5PXb6e66PDZ",
  "key34": "2sYSH5Mkb1bGXCgyk7SRuLkN9dvPFEx9KTg2hQbRBYp82xeB96w5m7XtCsTR2BwGiBRfCL3bAsLXXQJ2p46vsZpg",
  "key35": "DDgm7XhLxzvmH59Dh3ai6DMTueuGvYwd5jTJt55f695D5sxundCeantRw3u8BgqoABN8FkNqWyX1PSTwp4mpWp5",
  "key36": "2cDk4kxm5qa7hJFZEGuiucedsagdApc5V2CVp7YnJJhZALto2PkckSchDamz7rMeXKybMafzV9N6mThfr2ESynjt",
  "key37": "2YmuavUPUhtjxuinWNnW7GGUjhoHS2bGjdA8UuC4LWRe8Ky61raxqex57NVKPrmMqmd7PYcpb1hSZTnQjMXD8CS4",
  "key38": "3VzGwRcn9Mu63qK9cXCMyuQPt7Kad3ZPVQQifgoxRikggnSDWTWh6166ckD7KuFhF55oD5fU5gCgEQnMLVPSSEf9",
  "key39": "5fjoMdnPKe8qa9Qeoeucdp2zbXhHQN9EJ6J6AiLLijMpuKHJUzartzWeqhoE2PTycMcpjJLge9mcPX9YKNdPMY6A",
  "key40": "5BNneRfG1v9YCm6CFo2AhN74PfphJ7vFFh8Qy5Ym8MTHCNfS5w23GztrvshLdumyVHJcPnWcW9NcbtubpPE7ibV4",
  "key41": "2pXDqUCuZE2gi9kgnBRd4AYCeb6Tmf62o6C3Aco1jEGBeFsz42EvutC93hdhe5knq4dGhYAioCZMgmbiLaLrDgij",
  "key42": "5HSk6TxZT41oEwaXcD8xsKD8MoAqYGjYacb6SaGKfHgCqRv8CMPxrgZoGoJ1rB6KDDtQRe8X92uWQ273DvmMJvEo"
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
