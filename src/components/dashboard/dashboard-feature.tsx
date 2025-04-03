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
    "5vySaXzt6Je7ZQnvVeyQjb8Q498jTVRNwzSijqfjNmyckSfbw4Uzuyq6L78gTaBJGQsv5p1QX4aHsr4cVbiz7vK8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u47X3EgHqgpaPiWGG2Z1ZvYmo6suc6BdDSFeo6PDF61JkaPU6GmkNvsYREFZw73fuTgB2ihcTVPGuDKNkkHfWs9",
  "key1": "27pvFKcoQrUGYaFx3zei8y9rcBWP7TwFFM7iUvDDt96tnAqewd1rdApYn4Y71H5hbNf1evaSG8MvFGQFPrJ6Qgfu",
  "key2": "42u1NwRgUWmoqawM3sQYiwjuSLmw7X9f2us6Zhc1KKKNxTiVDh9d37vpEZ2ezZubEbBvYRdAMBmMEMCUBsXJjjj9",
  "key3": "1n4b4huExsB1fDpikMjiHSUuk1sZacgWePpwhZoCb65HDZW3kenaE4XVtJ7DzahkGuxTnWdScoX23pHuUDbigWA",
  "key4": "3njbSvnjJHuEj5sT6BUyRvdsbjRskGGqRB5FaLxU4V6e67NbqXANWFKnLbQeXLcmK8o1NAjLUzMuqiJp1kdhmcoP",
  "key5": "37mxsStniP8JqtHoYsofU6JwTXL6xMMSjEHRyqEqAUQqRcxoJV32fPA8o7WUt6Lbzoi1WUbHwdPAZMo4KU8zCS9P",
  "key6": "34n5hkzb4ukX7i2thQ4mDDAb5Un95QNbtteLxgyD4tVK2Tc64r63Btpz7e8Q49fumgntbxQVaehRihSoix46Kra8",
  "key7": "4c36Kurb8kaRVzDbdVmKof5gV3uLqgUEQZdxZyXugFkMnuR1UYwReQKsk6HFvtZ3aDuajqBYadtcRsSqBRYafuQs",
  "key8": "8TTsQEMwtp3oQLj2HVyxX35o7CJJFcm3SwCK7aSfghcjCQqyJdYDQDSatSLREniJh57xMZfN9ivY9WvpTvik4L7",
  "key9": "5UBV42E3kpnpFFg58SS6DCACGQk12kWuagtkCPHPqyT54ztYRXcNLjPkw3Hx8Pfp81NzebJXwBF9XmH5ioJ65yCp",
  "key10": "3GpoX7dybfY6fKwwb1n46SXV9VHCavQqTwcPpgXqVTYucunyHb7jvjVEGeLAEvZppnkgARhzBjJiBtvMsqQJ3EjA",
  "key11": "5FcZgP3cq9RckdCcwMSxYwV75xF55W7fyAGUuGm4jwMJdBa4V87kaH5SU2UPNdqfEUMmyuYTThJryWKA4J53FMvp",
  "key12": "2fhq6HXauMZHgdKZiSuseNrkwGKccHaSZnMogbhp1y7nr5jBuYXkHPw7NyUUpRK7w2rBkh12HjEKFn2D2675iXvr",
  "key13": "2nEcRGeCLgCUNYywsLvXpSLCRh3N3mYZVxHzPRfucJeMcwsmBKvF9HeHcxMWLVDkKd3s26hPwom2Wr1A8aHEN4hp",
  "key14": "5UfDCvUzHiRf8pmRGFzp5rsTkxccyTAuq8Ex5uBwoxnJeuR6fsqEo7JbbMG8usSPZwt7jhmTh61HgL2paZK5bnsL",
  "key15": "5BsnushPok88KaWkVB7TXow2sgHh9bhmrGpzA6t7D6tSekP2XPCqZHd7nwrxMk3XymwWPT7mJuxcqQLnF8CkXcSx",
  "key16": "63ktZUyojJXxSkoSSxKLTqyGmzcLDRRk2UXvxuXpM6ssAgCig3xLnh6RE9sRap1vYdyY6zi4C8RticSzj15a6ZVy",
  "key17": "5Y2EEwqNatTdMHMAYzguQkKxAVdmrpigk1gq6J9ykpHN2xzvTkD4FhJec7GE8BMPBKvQNimRWyAqJwtUyoFuF2Sf",
  "key18": "22ngprPkdet78w3HyvfQQ15j3V4pYw8Ai69oxFoN98FUt6eXSa2BgGK9XyzmR8bScqNraF9jeY9byojoMK2NuaVX",
  "key19": "2Yr2UsJDatg4CJfQKF2qYzhTXJ7yUXL7g4BPg8szWfdX6UKZXnwf98C1aq28M7yFFtjcT7VznEEhakwG6UdmkDAm",
  "key20": "4Dbyf3K7PjVLEPcyhL7a5w8XqrDcK1HeofrL2WpbN8WDpbxthVxaJ1ow2dCmQGrX8rAEyEvZx9yfTq3GSvorJiXp",
  "key21": "Y8ZcxPGGoCSEasm9rCfsWRBjkzpQDEPXfqsRGepde54Psa7YLquNKX4RYTRh29MrumdvYfVPrFMDnfynqUD2e5E",
  "key22": "1w7NuobETqMC6RcCYEaBhULL4ASpFS291Nq7TFpdn8BxW6FcvCNZdbbvtk8RvxrnK8svZgYA3TnPzgJBJyv5hLm",
  "key23": "5rJRehtVi4C1chCZXxhV3VSA1XnURSxGJr13xEtpSVbh8yDCumeRknjpCtHGPVWbTNokv3Gm5HMCN2vTBcfWhpBm",
  "key24": "4byJy2dRM2xisKu4JDRd93hobJixFWqX9fR2MY4G7EMfSedaPVTjMQ4m9DbNC4hLrJcpPeTVLYyjTdQTWNpunQW7",
  "key25": "4oXTLPABvXDej9Cep78PLjWCg3rDtNAUJvhyWADN59FegteXvcb7pWAbkix5Z9gfX35FwkC89EszEzcoFFdfuQ1x",
  "key26": "UEQkEmp2p8YLjucRT6fBKCxEF1EDNhZGWotmGnidHgJKGN8q7QwLxgGzsRris8j9yLRK9vQsJEA4HqCSrSjUZMt",
  "key27": "d4jSEFmVe76hNf2Z1Wi9bFhqaWTVPPPnM1ygD7CZo8KpYRVmcSXvsGKDqTdddUMuiXBzwNHPndH3PxdMGo9t6V7",
  "key28": "QTW2TFtWgLX4uCPiatZTTRARypaqsauPniEmoRrARyZJLcXw8a5NWeF6LPtcV8hLcMX5mqPWaHidGXX79eKpAfP",
  "key29": "sYRg925kjZWecMLw4iWwRoLnFXA1G3MzULFc4pjtfYSt51ehGJU8ouQndqPqiWphwwS6kgJ1JA36hQdDqipXfRm",
  "key30": "5CtBSkD4TxGp3r9R13XD57B82YnDaoXYjLBS4D3AfVNba3oaozAaaJmYi2BFgGFd5Pu7FahBzZQUaKKCiMyR5es7",
  "key31": "2Ms968CCeaYaPSVYBdnr7pb4rQTZXuDdpCVdKqzqMXmiWkBiNvwchaZhu3qhkasqqz9giuGEUX1pRg9sADc3gJTB",
  "key32": "5oAiX9z165cFSNH61MW7icVmcjLKNfmaGRY7FPc9KgDgipvkTxpARR3FjHi8PD5NWePV8LDqfALBfHnGZpX4sae7",
  "key33": "5pjopzPQ3XbNzHqLNNyoypRhGGj7s9koGi1hFeFHPvVc5F7N22uGJt6wybvLxv1Sa4nScxbg12JpK6uCF3ukYuHD",
  "key34": "42iDB2w3WSqpm3iJqW4WMUSpfQpZcGgdru69VPyVzoLHiXLK2FMdPvkeBDdxcLpe4JL4ZWkGzdag9tpRXHfaacjv",
  "key35": "3MoZfmBvSc7koF1B4FAXjx8dh7nfdsXC5tmgDWKZQxGhwtFqW3x9F7893e4zyiRT2Gqbvjn59TYmurdWfKPqf7Vh",
  "key36": "2oVaynyGTzwDLhh2GyejUD3A6poakS3cGhrkCDSQvK2WBddRyNy8ZTgzLJmsbT7oN74rdxqXWye4RHUyETxHqQPX",
  "key37": "3mbASypQqYSX7xL8oeaKC3iEhTwwy7xYFG4JNzxwvRmNB48TcV2NejZ1W1f479dbMBJ9uzFed36VL4pa1fiRiuKK",
  "key38": "5AttRP3RKa5Q7s1V2DBnutQGUM9HLcdJAfxzeE6JmWBmGjQDLwNRKXSM7Tfpn98NsMm5Nxi4CgSAFyeHgYfhA6PG",
  "key39": "4ttYCZaUarR8BUUJB1cVkRGvNuGty9QQr5rB7Ct1Sz4uFkP1K4cmyiNDjviS44CJJtXqWTRevjcqBSuwYAfuqKRS",
  "key40": "5ErHi5yWNDSAvJzkTaPacsc8thbTnwXyD3Z4jriiHsHxpoPGbbmxxqV2eXH2Mz66KEQKyPAYejNBv39DZK4sojkT",
  "key41": "48rf7RQKARJmu34JWddEEcqHmn86Cns2cS1mQ7vNNcoj1SidtDaUwBzZfKNyBHxH3UTLJFhPPVNx9CNWxcnoF81T",
  "key42": "4nmRy2hqXrepoChHuZBFahqAcTnJkHCC4MCBv8SMuACkh17pCx6TKxMVR9Uth2Ccz6iUMNCsxi4HXERRsdZL7Bat",
  "key43": "3qjYs1qzsHm6fNR6cB7CL6W2gYSPdMubn2AFL8HkUUsnQ9fPGX6xfvNwZgrKziDBkzZ9ZvAJLS2mfGcApzNTufSR",
  "key44": "5w2t3wKJ9FAgTzJx2XfUsdPHdXSuD7cpceCsEQKKVW6Nax3pYwnv3Kx9cKDW2Kw6hzE4JPeTeJXxkjQi9uVZUgrL",
  "key45": "5tedeRc7Rp8FCcrQAUdE56agpXMvA1hgzTDKiZkgS83aJNcssfmWsecabQ87RrQzsAG5NortKXAt6ZYGtMJZkmLW"
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
