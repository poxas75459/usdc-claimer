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
    "4qEmeE5YFhbAkUmGv26vuY7TB6cQ2spUM2bS46m4ba5A7U9p3Fi8nRebkWUYiH5FFojVHwsDXKXYcyndFAf6MnRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QfQMsRqM2CmMtEGQE3KU8bDpRwFum4597772PtzrtdBrjwmxrEtfDd4Yv9VVuDiehyf1jkf7ES9YRQjCvGU2iwK",
  "key1": "5diva7wERogsLNVVjpGjC8axy8sTn5AiUmpRD46s8AHQzcWAwtepdDVRabAnzfBQiz3PQ6Fef4wYqWoyz2dhbTfm",
  "key2": "4iarVF54zfRJQJ1eiSWJCyrggAZsfpcbsZKwUbvewFWSnoZ5cnBfYHfjTKAqF9ptiDZ4ZPcXUdiVkhB87dhRXkgX",
  "key3": "5PmRPtQk3JQqyYKRAAp6VGbuAgoRV5dySc92AqZYDWUx1YvLdjiSGfXSWsT8g2kw8bJum3w8zkzy3qgR27oz4sXA",
  "key4": "EppqsjsRRvHakdpSKSBuNyb2eveM4NiNcgf2xnWvjoSsoUbC7EajHLAccAHxDpZ2iMEydKFebE1FLUkxc2zpTat",
  "key5": "55Czk358qQf7ucRveNZr9grcLQjJjLB4XMN7rymqGRs7b2jkmKoDcidnMjvD5uYhxR9Xevi4w3UT1HbDdxcu8E2A",
  "key6": "3zV6irLJLCs7VAEKFKbKcPaLGz8xUeizBq78qhyFBdaRrtrfP68sNi1BsjRHdbKNJCd3KxeV1ryefk5UQ2nV1p8P",
  "key7": "61tB8K1yQ6mT2Rht1CHe6TmVwZgwKfZhcDScj587bKPHQ99RL3uERBHwR5m2epG1R3z3nYgwsDSCAa8aGeJ2PZqZ",
  "key8": "588f6CnBL2gbToG3TtkndH5ge2MAxXz4xVLvGjHdihkBoFwieHfC8j3MFo3XDrPbFHLBYUrKoenS9EYj5mP9stj9",
  "key9": "37nXGCE1wcMVngckWvpVGXnk1ytFBwGr1MB9EavyBoEn5urLvGeoAXmfMiWbzoeujSJD9vHZeDacBXtvsTnwnnyz",
  "key10": "5LUeAQoiUX3w6nQ49WEoPV17DhVjqeqVmPdsSBY9FiagvZCXvPmfYkCPGAA7avGomYxhPoFBgv42E2umWwdwe5K",
  "key11": "zXK9tc8ujEjFg2Kpq3btDKyxDszvWZob2SqGQCeXzf721ypnSd7oZ5LSTqEKZd4VAPAvt3ggdPXiKUkPynyB6Ef",
  "key12": "4D199D8C3NyDT1yMvLKFqqR5u2CRj5vfPRHHm9gCr7A8nwLD833FkiynxBQ5aLZK5kkELFoMDdgHCKqu8fSUNyQw",
  "key13": "1M6kFqAhS8iyFVU4XN5YPwYmf5AR9zv2DaNH92smWmVQadL1VWhZjMZYf9XDA2Q2N9WuVPgBkKgQfHhPVsVMFgJ",
  "key14": "2jLGX2dLhv43cGWLMcPwPq6czDDfJMFUJ2cGF7ToATENqNTAso1KQmFDBQbz8yWw8EsJVuUUMuxGr56N12KE15zr",
  "key15": "58v6Ycw5LJbNVyksuqpVwTbg3dUqoF6p2kNbm4C6hmN35kHF5WeiY6bXx1t6GP6QSRgQu4SNaw1v5hTLb4m6imA",
  "key16": "Uvb4AP1VFejKyELPQPv4RvoSupLRQ9Ao2uhY1ar4kPUE184bRc1cHfZhG36wek9CyyKP1aMrB8ggGYWcVQpYF8P",
  "key17": "VG1mMDaQUBKxEx9ubEtwAtjekah6UysVpSQVSKSafQWGo3Va82n45LC7Jt1bAUWEkUr6KkHvQ1Qu5ecgPbMmhrW",
  "key18": "4evyrxRNRMhbDLYb7FDTrcNkC6dnz7i3Uic4QaubDVLJMebWn1RnMJTKqp3HfeMm5ii6UVVZ1jZfux7oGVhsKTfs",
  "key19": "4raXN4ocx5cw1t6ipRDjzG5PxM7ELf5RG3A5FFGvCh3JwPSJahqSq8bsWm3VFr7GD5Rjb6E8dvfY9FR5GgTLAP6s",
  "key20": "uG9MAJCGxSPWDSamsuTCiCDQ9Ff6hPgY3CRN6XMwg2fPQ6VztALeFma9BT4SdtrPM8FeY8TyxrDNiP3RXn48Tp9",
  "key21": "3fUr283U1BgyFzAYGWKLyUfnEyGkeygE9Lhp3kzvUdHrDn8151EPPebGprNJQHmEkBjLhhyE5fjzfXRW7E2igpQr",
  "key22": "3a4SyLCBkT8yK9LSgpBc1jTYMQdm3y5rMktipAi7bQFYvRQ2RFnRhvnku2uTtNFQ8XCnFQ5gFGM9UVeNTAYBDVwt",
  "key23": "2LrFNAwjXh4A7RbBeqPPebb4GGbtTtNHLgdenS7vvxif42C76WyEN4ATo4txaDj7wMdguYuqiEtMsXjM3f28hwVp",
  "key24": "5msU2VX6LHEmyC8Cm2pkiNDtEbMZvZ7qP9DUxyLBLnXfZxEqCFrb9MLyoWfkKQDBu5nAZ2b1R9C8J93JZJunbUog",
  "key25": "4L3oaVqfSbcvMTTyZZ3JV9YS1aLCN54L1M1zdMYvKmGA9b9HKMqCZD8SxLyT8XoE2YHkjJkmviG98ftbxqnbAKYT",
  "key26": "gmy9HGQYiZo9EeCNq3zcLFWoJUG2MgSnD2UVAtmtD1MrVVwxk32TTn8qbvw9nGeifaeyWjaFSv3e8BJEwTR6NBr",
  "key27": "3XQpTUHiChZu3kfBQs9GLBuebdA74W8pAg4K87KPRcoa2dXMJbHdJ7jUSXdfGEx6rvKaYR3mMMMwpcBrm2B3vjyd",
  "key28": "47Roqh1RQgq1r9Z6882hYNyZ7ogJNba3ZqJaELPKFt2p23px8wxTvh7AekZvghjJqwCDJanxbotdGTCQseRUj2mY",
  "key29": "5dJhgWBNVkFfid9GzDRLzRZDHM2nz2SbsDMf1C11Hq9519PEEyNPuhRjmzkgaqmdqKknhQR8y2HFg9qESE4FhGme",
  "key30": "P6NZiEXMwiVCZVvVcLDxGaHVeGL9RT6wX1dbChZ9PgrLvN2JdQKNeepV2YLjQdoCCnT1u378kDzoZkD8n1nNZGy",
  "key31": "3gbZykk39ujvENmQcsjR7KJmHpAy58Qy88VWh6LHQKkUhjHghqgYb6SztHR6uZSp9NUs2CQPtAih1fRFdYHZyyTC",
  "key32": "2mndhu1tZMtVc2h3bw9xVpaGF48kknzNsNJHP94jjnG9Rju2GPF9jqQucEempPGtYMBukcWoMM7a3rAsFiVSv9Av",
  "key33": "3gQw8TdiDejq2yeBXNeBRZH8sR36xBSq9sUMGYZSyUCPEpMjNcAoS9Sx7GParFspAoNS5iKhGEjXE4MhJojDFkPx",
  "key34": "LwWhNafRLmtM9kowyQRdi2R5XdjB9URiR49pUoCA1uHbwUqTzMXKEJNzQvcoervZ6PRh2bsKUzA2BHFSmtLoULr",
  "key35": "K8S7Eqn3sbMLVGcKumqoHsdEFYAn5vuJX2TRf5UV1WqXUWEmczYXjPCFUDtaD6zThHDNdLRfQ7TxrNTGELGgLmQ",
  "key36": "3zk6VTxXkzj9TGpgWBVkY9ikbo1tAPnDypAez8uAW8NQFLTT3kh1SEd1gugCrTLU6KK6sb2inaK22pYxHE9wPnVH",
  "key37": "5qqf9iyx9wYYgdF3ENnvEchDA715GcVb2dE9PVw2VAXQBbYnHUeb3DqKbkzSmDcNypwMu4bEGnv2urEzed6Fni8W",
  "key38": "4HYQ2oxiFSSaA3TNSjwZYG5T2iMXvxhcq1stbVCXocb2Ut116qvHdbZWJHEep3RDwgZ2v3AsrPtJLCDo7e6yEz89",
  "key39": "aeN56pZEK9kCp8PusdCyKii5QDhKt3LjXGo8G6hVxMnHnBUAWpV6JGne3FY49MshfLF7WsbMBdfVJqrwMt2vgie",
  "key40": "4B2USGskjx8JRWgQvDGDXxYunNrYXjfQHqTMMFarqTvMv6odQqkzKxiddX6pmadsuYvTULsMKVSJT3ernk1Jtfuu",
  "key41": "2ss5ZRMcbvNKK661GF3MjtUbDgydtknjkR7AkR2ZNorgkk8zdFiC4hHsv6Dy6R9GBDT4upfydoaTVdZkAqyY8pCx",
  "key42": "2bXxveqDaTENm5QVTtHthMSS16o5C9bKPgFTjQnxKm96RTc7EwXvvtNwF673kZbvEsRkY1rRJtjEegvmWUxrofJy",
  "key43": "5RTK6E2GmfZn8Yg37K2Uk9ERJbnGjUeUY4XJz3FNUgcLmUqMY7u56MXrd3f7Wi7GEfGCTYKtBJKqvY5c3DoZRLWM",
  "key44": "5DZgyRVpP64v1povPBmDVHkMPkyQV5mKTfwfbmsrxTqBPLpr39VFYdRJTb7t3CxYTfNduo26Ybj3GofpxtcxbZjR",
  "key45": "3EG1NJ4bCsLc2esSMszGRSU1vF39x7aE7NNy7ST4qavi1P4uRKw8fFwhg3eS2d2vC8MdiFLUBDyiRVGVTwzRia5R",
  "key46": "231N5u4aFL9bQFXeohUyH8565efFSkq1eRKCBCu21xS8kDdt5SAnWdJgj55G8GEDtMU4bBiXEanoeodd8n1osfsB",
  "key47": "2dQfxCgseP9L9CwEnsgJWw62zQFZp4MrZMGKzhPFhw4N8uuEbpebeWnp5drAfDNHr4AyD578VwoUt864oUh9qTmX",
  "key48": "62twTxdxHYtynTi3eQYoNtXHRcsx2BbjCkpaNo6jBctVKaAJDESQSneP8nMaUQW17b7ewXrXHYBxLfyPJFBa5agL",
  "key49": "2Rist5oCWqeeBLs8LX6kwY98NzsYfbXCBYAXD1fMKDKJX744wEDaMzN2Sy7M7maaajzcDndZmHH38G2uQq91F4Zw"
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
