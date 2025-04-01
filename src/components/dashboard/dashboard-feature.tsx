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
    "2iMce7QtzfF58TQJFYB92A9Qp3HE3TPswmtmcpZYhUwbvVoRnjEL1i1aLX2kHEhiAXmLBbkL4PSSmZNmS78q82K1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n3efJu9L8Ze2vf9HNAfLMbtrBp571ZW7s9tLRymDR5PT8hxdhjfHdFBaR8CUVonLcFQfqmQL6T27RvgA8onNc51",
  "key1": "4s7FYNkv1raNrzCqJJXmtFEH2Uf9jvk5zrUgDSyNpWw77dULX3DQ6hUebDunbZyWTVjMf8DnF8sooVG83edrF18y",
  "key2": "mttAZ3M2ochuUq94B9TCmDMMScF8vepRmuy59p4VaEVVXAhLs1docYoZ4srtXXjEMK2rCD7Z3DKzFDzEHp8gKmk",
  "key3": "29ZDsW4if8EmHrkszstxybL1mWDZ9mqGFxEycYxje2YyQ6SBnMpjJHRpXB6DfFKuzVyKxdrEspyjnwN4jqmtQe2c",
  "key4": "Wwa994N2nZfNDEP3F29dLAzqBKrZyEangLs5pbKDPKGrsZxZC9ZPpR52zqWTkVYD8obmadLXwZo9ZFX1FibkAtD",
  "key5": "2ooNH8My7yT1ZZHcrT5odf5UTzrn6Hs1ANYeHxQGZfvCU5cF3FozFyvqbJKEQ7j5ypKBMnWPWHYWcM5TNkVTYdc2",
  "key6": "5ZzCTi1r2r1vGdS96JyKAq6ru9YshFViPpAodHDW1vW58LCeNapxBELJ871MxNeikE1GRV6FetVB8NPj5Yfkoioe",
  "key7": "aJVMJpkai6tdqMnzQ93tyJ8LLizQKkaaFpXd7MtP32cTYnsq67datiKcVpeisyP789puNJBxH3FWgbqJWk4aUgQ",
  "key8": "4aRXDAmVwMHztAAkadjvVjEx2ESaRy4fvtxH7FqCo9S4CUP7PYER6Z5eCCTFENneygBNqgWwPBx3Up75fBP27Ram",
  "key9": "2MpWUMxYggAHanGqnK1WFj33CYrDEThydvu8U2bEorS5wqjNgVmGGSTpuhvGz5tR7z49gVaxERjYn8MdRrCBDhTp",
  "key10": "4goM2EqBMA9vPaVhJVj4sqtjwDbSyCivDVeNbXyoNfjHnUyoLC7CaKqRudQ3GWtYjy8zgUEAKBw2bQ5LBvhzzj6C",
  "key11": "5uDYT8GruNRnNACWwcTXLeVJb617Mek97WkFdGH9JxbV9vSXzVXxxidzGQqnJ9i9GU4tLyjwCJMSnt6wftUcaWZ8",
  "key12": "RPeyDFtqhE6pCBWoSoL9auQyjMZTf4escowL6BSGmBLyjotuzXCBMbe4GHw8TV3eGUrLWUqKZkkDLKKJqPbYudx",
  "key13": "5sMxmvtpMaxr7V78PxgwkEkgg9UrdgxHtCgJzNuNJFaEbVeBVx9nPP1bjGJCscFZAxwsJBEU8SkJQBufd4UGqtVJ",
  "key14": "521nVKb6J7TDGDqmBcGrWpSykSFYTzJtiFP8mwsDuVAVpbYH5bYPrBrekYhjYeaaqkzb478B1ghNWSWjAnZ7XkAV",
  "key15": "4qkivMXpb5g2XaMZdoQfhv7ETjbHDyk3GzQvi1YJDrcANXBTCWA5d7XnHxZSpdmvomQH59QnnuZopEs6JcnsQ7Rg",
  "key16": "59Sw2WaSoynGxbnoo2WBUM9xg8b39Ec7hyNLgxiLgVH5hjmtqGPP3TcMMxyYAZ4Z6uA24GHzDLS4cxAdUCkwSYQ7",
  "key17": "NWRqrmULuwHLNQ4j6Mnmup9RSMq8ShLDdqo34xJWozcVnakUMDNCoyej5Y8YSYCs5HwBekWo1aYNptbnsbS9jin",
  "key18": "2baAHFcCmov6V2TsdmRSV2UrvNaXBSC4sDiGjdaEfDq9wQWZUWBGpjYTD5gBW5eKMjNN3XUJjfA46AhA2hZk2N6m",
  "key19": "2m5543hFquGmxau3KpodE9z1mU3vnxwQx8X7nZN7TcBipUpc74ayHT9RZL9Dmv4yd6EV2wd2m3UpueTUGk9YN2wc",
  "key20": "Z4ky38myWyFkEMuL7iPKoCXGg3qCQnoV7xMmNfYV6yxxz9E8Ez54dpuM8aJzFBGk7sZ7WzX2kzUNcaavJQFHpZy",
  "key21": "5FRcoPJje25PefErXsZ1Bc55ZJmtfLQ35xT6W5rUnbohKtfMfa6qg7QTz8jT5NKwJ2xTirJX55b5f7VSNv6bj6GD",
  "key22": "5ZE3zVZptSxGjvDkoJbxLsrajXEC9q9JJYSqTT14d5hNxeeZaAD84fjT7LRz4bQSXvqDZ8jCehmkFk4PKLfDK1Wy",
  "key23": "Vm6iWBcNpqYEMVbm3onv2GQXyUwHw1irxJm98bSMR5Xtgj8mwLJ2oBJDseG1pAhoMRfP1TMWr8MwPaCv3Ut7mE1",
  "key24": "39Fzjy5gyPnYCpv5G9vTxtxRntYg7iYKyrbPHpAnt333j5xJNQXsNX9a3eZuAW1wbKW1g1coaoq6GPcdoZDJfF4C",
  "key25": "4Kn4WQKuLcTCxthPtNpUCRBzEsTRmMtLuQo8ivyzqEFbWeHGmfLNdopxEHZNyDuZ5NZSC9tpQgMzgqqaTcdPhoTa",
  "key26": "5ig4dBjiyNbBCp1cDTGXpZkn6QRkXEa5d1DZWAw4rQKaDBsUCUkdnZRyUedqttHSrZdNEkxPNsPZ4f9ZScWfRMhy",
  "key27": "43pUVms9BRq4m6RtnzGtC6qmJkMsPxRK2D1AUDZiicpMMmL3SCkErUrxwykGkQZ6ms455doaNuHUSpQMXGdeqn9F",
  "key28": "4QiuircvQYaagH97UN2TwRm1nSpdSjiecC3qgzK9X8oendyg1vd8csfPqruAHx2zbiGFqSher5nstvSKZjT2MBoY",
  "key29": "41PyxDaNqJJrnVqybeMgt7VYuBNxUqA7a5L67W14URtX1CKswheVqmMy4RTTubBLfSxHRE6oZ5LNcJpJvW81v7vr",
  "key30": "4FoNfK9tMFCuqdaxtp9g9nw9FxxjMTqQNnFm6EDQUVNCWr7KqdaNjkYFecSQPAqmSosw6wqwtqoTUhQpGpjAi7zd",
  "key31": "55noFsCfBdJFTAiETorLeyw4imGdCct5srgkqfVNPAr37cKw5exqePrLC6Rg73q71XNschK9DaFsngM272RX8xKi",
  "key32": "3qXTJvL8wzUk3YhXR8z8MMZDyvCD4aC19hsnT4neLnigRUPenKYJ6DU173ymGrC1kXGkYLy8z3t87WAi3dCgh2VV",
  "key33": "hDMGCdiFJUmypYE85ZwtNNZTEtaFZ6qBaGepg8ah9qFJWG4xtXdTP4RKc4UZgFgEpn1kQDva14RqPKahV5wrSkK",
  "key34": "2up1uvCC5fa9dAjZZPR2aesrhvE6pujNNaEoumXU6FAn6i6rvLPXTutCEo4UiJokZ78ehf8xPXySfMaf5BSymtvk",
  "key35": "4QCABPKfTT2FQDiaw6mepzAeiZQ4dpjPApCWi7mybkR48MTSsnKLJ9CYbTDDxjqVHtjbcs82vWieJuQBytj8CWi7",
  "key36": "W4dCmx94utiz7GyQMQPtyrivitpDf2YSSD2uggkMp8qnTZGNhr86YdZjwuajnHBsJHuxgzq6LfP1wjKbR31fTew",
  "key37": "3f7iZfgxtF6hmUtEG77EePHDJpSjHrLiBDwLyyV6FbdzQBi92spouLB82SJHd15DFWWkc4gMYJhW9ZakzKXxqrzR",
  "key38": "4JPjQMfnRmjrQPmyivymsRwQeUaaYEoaonnXBp1eEttbsh5imV6z8mHaH2y52VCtdQZEPKZJ9A33BEkNx9teNKUL",
  "key39": "nWyt4CfFRkr9UxAEjK1QmgxntCTEz8YhrJWGMGo3fPiXjvNk7b2qTr5NuC8X3pEcysh7tA5VVbdxNxYb4gLfBnr",
  "key40": "3BpB7eKsTaFF5Msir9L8BoTqq4g17tFQ2Q4Mbae922MLYPnpH3YXwD9jqAyMDFkqc3N3thuokX72F1H36byZaNa1",
  "key41": "4Lkppx1HaNiNNyat1zDLGjZq8uRdDA88gXiBjwyi3ruBHFUJokDsyJ39dJEdqFpjCkxgVyLXXFwE5HQsx6a9Vkvg",
  "key42": "2C3Ffq6JKK4eu4L9MTD4zV61eYH1ZhAx3WM34qv63x4qWnc57wLAzBMMYBQY8TWktkt28cHwQpwbc2pfXJE11TNx"
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
