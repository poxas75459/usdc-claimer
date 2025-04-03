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
    "UJy8Fus3BpShZXdHoUJujjg6FrUFZXTry8Nfoom3rkcWBWbkxkVLas5e2DKN8PYH7RhAXAW819g2JYMywv1ZBjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qmt2asw36irDuz6buUpm2obyWtVt8zqZRGLq1GVee47zEopMdgS7q7s9BkU8T7NLSSFaAtuSeUXyRjBCFBsvhuk",
  "key1": "5zhMdjwSVkWupsBTT5YtvpKybk3FyR5SsQNJ5mz2eKPJKpsEcHh3Vi4VgVFY2Fd4WM3DPL42PN93gg8Hf3hXvhxw",
  "key2": "5k8B9HbY2zxjTW3B7tbJALDDfzkEzh8dni6gXM1d254Xzfd9WDJC6tz7Sa3LLY5vJPV9YCyoioqKVGTvpRU5C5aS",
  "key3": "5CSQ4qYMfvEXHuardNknvB2RVqkCkP66QzXCP4E2UWSDFfREFZDP48Qd9MuXcDdSQWxBXYxjhF6cZmsye3kQqecw",
  "key4": "3wQbXB8nhrZayoK1thqYjmhVkVLUuNSCdPwUkJZA36CydLAjSvn7RFVuHLm3XmqbT5yNtnhP5DvzNQ4ELUXL7QMq",
  "key5": "4tZVtTsEjAdRqEXxvqSgeUzbV1GoX8qV8prXWDJWLHgLpVXWt7RraUhdjGznDUje1VhidCAbBkjMc6GiRieEUNoq",
  "key6": "4xNxGVMUEgKbLo79k4Jd2C1H5b2r4yuNAXnNBHqqzhvaEXqiJScDEuRuz7hzhuvycFCCatFNAMWr9cuxoR6YGFXF",
  "key7": "4iCU1wW7MY9P3xRfVxBXfMAQpehXh9WfHzvabH7JBfDy3MeC2FiQxsniGHoEzohQF4376E65efevWjmjMBbofqP3",
  "key8": "B4qW2qKPKrHxJoPZU9wy3s1EJ2fwdrq7EtHnhaya3ZyAq1HPxkisRWwrvJWB7bJmXCoesKAVvQUeji3UG8u8vzT",
  "key9": "5D3ithHxCFy7KFqsipQBLKnx71dSKdnReACgiem3jshYLdKz2DsnHhyQKYa8E3L1hVeHhV9YmSvpbjvTUZmDwS2u",
  "key10": "5BPSUYFenGWvuDxbvPZtGSNryernf1XuFyqk2AVzdxhydXCL6mSEGA2wUT3WmzxJAGCfm8Td7Pw6FwwCazWtfEHD",
  "key11": "5ma6VswqhDZmvZiBKLrhJDTrk71rqCqkxraTw33A9ru9146pAhYTjdjMio8nZKDMq399rJ5JeSG6RC2WetytkyBx",
  "key12": "2J6yZT82kRva4gmanQzyw79z8jRAzDnEx4sR2Lhv8Hz7rBh89Q3JDSc4EoQnVuEHPJ6hvJBiJ1t9eoo7m4ngFomj",
  "key13": "4hcqnEJcPQv6fmCjhf9SSMQqtaVdkNBfAnVAjQBX433oq2ZhxX1UrPdTV3HzjgUS2ucpMN94d6nfdwz1UcghWYGu",
  "key14": "4KGDrbD24mEbjFfrGDLTS9e9kNrWfTSVBfd9XYcUHxTEa8H9h5dC68aQEhQKREY6zqReohJChN5vtNKE6QnP7ga7",
  "key15": "9FaJ77rPpL8f56eBAjirU5t9w7MizFNB9aVcsD53EaGfMRfQbNhvbznEiVBWDjYwrDKP5RZJwwPHoZ62qd8A2jg",
  "key16": "zhG3TkQtEYnX21HV16odGpgCExxrW6jX3xoLN3FZZCYqYn1rUpHU4BABYR8nr9aNDmWsUiHStCY15Zm2YhqbUnf",
  "key17": "2Zmkptnid8pT55B4k4JuXJ8Mr32ToREjANVZqvErJKgbPnvNXpLKQMmsgnAjKDEQBDZrhA5FAxqk6Hx3YLDGVToN",
  "key18": "4QS1xpDsemc56vZFe8PCd9j6uyVgvciD3QjUWoibAE8z1gygnprkVUazupdDeto9KHMS6mETTm7rRK8JVCgJVhEV",
  "key19": "28x1pdcUrifiKzbdnSqq4atEoqMQPnTRHnmHszLG8bZj4qp6Pq726XuCSVF7EizQubYGSZijFYVrSSwUbbJCMnPi",
  "key20": "41iEn8qceeBiHed1Ntg9nr6Mov99dGxayeGyQ3Jz8Po5wNqMLVCP8yVSAzY8fhaUs3VNiGvaX3YfhXm67ZTFS5iB",
  "key21": "2jhRGYWCz6YnBVbp2wNoaSPfj28fAxmChToYC92TcQRQvjPbuDBxAjXyr1vYe2fodM2ZVfUP5FZSbUgf5VGDdLma",
  "key22": "22scCAgpKChu1BSr5sPrpwDx8tbwm4qWxRkRsNjPkjS1dPgxm6U7RVBUuXtomXssXAUDwM7fDd9VnjQZFZDJHxVN",
  "key23": "33owBgQ9BYme6WQu8CK5jJCQnkHVQXhqyp9dx5rQZvmvBDx18KrRrDYvyTmSCwPV6AHDYP1F73E37cyu7BpVShUe",
  "key24": "4CmKoDtadJypzaVAAyZgE1Q7QW7SA3DyEnE3Hx51a3AkHFEckoQkncXGaLc9Cz9se6hRE31MPVyccHxeUdiRf4qS",
  "key25": "2p8PYBBnWoDyLtBkcXYRGgm1yf4Awmgky2ECmyLEQTy8NGJpqTk2UCdfmFkpt28N4F2Df2YcwC2coNHkJ8THgTBu",
  "key26": "FM5s6E164AaQqm9dsJfgsP5G5Bk1rvGBHnGFdex97H7LwkKe89isRgVCWtDUAgmtHn3ADJEucQDhqEMhKanzHJy",
  "key27": "KEeQnoXCESCQgJDkRGT3VbXCGc7SiAGXyXffiAY9tE2Ufooz453yhnx22GGUTE8Zs5TBsvdYpjxn1R6hFwCGe2i",
  "key28": "2Q2t5SKUyGCC3E9sigjZivdCJ8Uf1GDoNXz7ADKjpCekPUHEctxdJGdjnSK2kAJonUtbyHjMAmgeLjj5NBcVA43Y",
  "key29": "2xTifQCdrauwiUAadGb18rEZRF6S5ps7RoYTNGNhUgNte6pJ8MiLXG4RbkZrShAJWknzA6fdMEtqUB5WKFLqS8qm",
  "key30": "2FGBGxMf7T5MALKSJabiRunSke2d2Qnznq2bbnbxucUPWdZQ6nTGXaAYrV7N34Ja33phKUCUbNNwfDzYwSewukR9",
  "key31": "5cN21kwKi14DAbBKMD3Ue5Eojx8AB3uh4Z95JdFpojmYjdk4EJpUxjKnTLGuprhGHtMwa8JHjQGykSt8QyQYbwyz",
  "key32": "3Uh9CwTYvPTGxVsMNKCM34oQRQZsjxw6yNgJ3q8f73QLdVgu5vB6Hj5rdd34dapsgW1HowTezZXWZLQjtFt3AsBE",
  "key33": "VgiJfYvaafMNAJatjui535w2wSbVX9Y3obS7XmXKxUWqrrcQ9F4m4S3v3u1dJQnYb7CxnDJ5fD6armX162LSnoH",
  "key34": "38pRniuC8XmntRtyG1utVvSxLVRuChFc41JBZXWz4LXy23tYHAqQtn1eJKynXQTG73fXz8GjRbbc135fDjxyeUdZ",
  "key35": "27ede6wTdMieXmnmbgF291tUrpEEf7sMAgwyisVWfSW6qNw592oXv4xh3csk1VcK3621soREDupJ1XVmLD6WNxmR",
  "key36": "g3UwbiDTHXxStCcSMD4bomS3LaKMTfgmm9S1VGDyrtXfbXhQDaijVx1sKwpvxcpUutytpq8ccip8q79zCgFznhz",
  "key37": "5iV5eURZqaHHCGUSFLDCCH4QFq8E3xkzUuiqwCQG4J5ceU9xDUdm8TT5vcujfEW9NHWdQZ8Lr3rovByRkjCzySUf",
  "key38": "3jNzbuPL74LdaCxrCMRSPPU9exRyWWnqK1cQDWDZYMfm9FQh6KdA69QKVwSrhDmCxpKgBL33yfKLzzg7H7bwSJtQ",
  "key39": "C5uUA1jaCh3o7Jku9Gckgxx393e7aTY97fm6jN5xkPCjrwZAhcofg8qLmWDafuF3SPkoRSfzf5UL9snM7aVmwax",
  "key40": "VxePYbgH1vPTjSY5VZQWkHEjAMSqTFapybur2eRheVWc6bJQ8CNc9Q9TeVGPDZqwtX62zb27w5oYbzhHJHShKWF",
  "key41": "3j79DciQ6LrTLsPuNeDoeJY1JnHDDhPXct5ozAuPfyp8BwuFj36VjdBdFpiqzwXqQuYZC7qo2gMtm1Giu69eKuPB",
  "key42": "doWvTYBKjbewSbYn3v8s4dvs2g25NgUpbvjyNyFu4QbfVWEngLUWsHwhZ4wZMAQKXU2Txsa6YZYi81Eu9TNHFvz",
  "key43": "4izgfbzCchezBGyBYfoKRBA5UGvGBqLiqngtnvPfm6GdMvy6rZ4xK58CPdkSMaALt98aMs5DeKVgHYCETMPUL3hB",
  "key44": "2qudRYWB6S9nT2WLfY1UnTv4b26pnPwG3htnPkkr6z2eu3JYUvcsB4n8JgFEtQLuZKJpL2PUYqBAW3Q5gPUkudqd",
  "key45": "Bz9DUDYwHVBK4xyj93kgJrrq8npnY7HFggW4f4k19RSYQ3WbSrESuPG9ghrVQAA1ugEyxEAvC9gdTY6xDQ3JxvN",
  "key46": "3qkJxYedjoz73zpFWHbnp3hzBohM66bJTaA4uNSbimcwtuuiMvwZBH6xvRCqdBws5P4BEgVwxELY9LALhvPZjF4r",
  "key47": "5umTfeYre55CLVDr2F3Q4P9XeGSNcsrciyCgmaWmdtyrQ8kUhE2FfaBkBWu7TPdgQ2CvuXKgaMMkf2vVaXwfqHgE",
  "key48": "5BKvK1s8DsQ9xbUtiBrYfYm1Ww6Jzr3KyC4npUdPrjfY4CHuMviPPYggVMp8x47nWUpLETBrWZyutc8vjCHdRX8c",
  "key49": "vXkG9LrbRcq5N8mxgJBqwVQz4vTNBBAqFyWfDxSpyhVTuAfZbietZCZPuFwT7txPmuH4uBzpq7yUHiH74cfwStK"
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
