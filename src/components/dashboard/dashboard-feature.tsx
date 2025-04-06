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
    "xDVYwp1ek86rEDYhTJsDRijPntRCAs1t47GD8DkvHabeqRgsXfn2unxBF6cZxugMrRUj2kRKedhbPUhj8tf3ftd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YLvyCR451Ei6SwEEe1gy5mUMiM6RuKYMFvwvg6cABgeCTG5UCzDsejVkpahJHzFTnaPLLyhiuL1tpv2GAMHAfH4",
  "key1": "4H4zJvM95sgZQqgH7uvGf1zDBbdZyLW22LLZibtoTpmSQXZYggEAXJrYeRfxcsH3A2v6oz6HVp9cMDaSfZ8mHEvb",
  "key2": "5zVyo5WCreeF3LmCyNZEqnyzcraF6xPPc9grjNprX2uxCyy1CHExWkR1fFcNmrJru5j6DxrmsdSkHLfnGJqCPAK",
  "key3": "373aGNF3Jc3BKgc75pT4ftaped3H6czQktEwgyPrUFNELya25R1K1e7qr33eA5NS8VLvWqbRoaop6c4FQii2hYn1",
  "key4": "2g6oVCSDe93vwT31wYNB7JGGumiX9owrqPSdpuck2Rf2HeypBCWHzVBjmMCgmLBQVrtXNv1bDfBJY57Cxvhyois2",
  "key5": "3SJygBsPAwuiNxDZRAvpdAASHcK7QreQ4J5KF9ZpRW8M7HEvCd4NeyyFQaTyBiyVKSVEwd9FqyuopwenJr6LkxV4",
  "key6": "5PE1AApEFSM59E5dSG2dAdcGct2gEEQvrfowEHQQJJxZUawpKo77UgmAHFctvQ39sLiBs1sD392yCmspkmYBS5gY",
  "key7": "3fULYHfJ5PSmzoEsE5z5MgCPysxSLEhDvrtAHyLYwmsxMRdbzKUuRonqWpnzPxFhWhLobYTqm4vduCikWuXB6n68",
  "key8": "53azDMC5DpjZBB7ecBXxxvuCK7us3Tyqg4WoZUZZcRAUXAkUJHXCB7wQpyjukTcGAJ8hSZKdBMKBvRVLLM5p6T1g",
  "key9": "ShArke9sUuYsytS3HTohywPvCQV6HqkAmuGoSS5ia8MASf4PDMFpXqpNJk4do54jhnjhCyHRH2tTmP1o9crhiSK",
  "key10": "3hZzZu2is6HzqdKSdZosAGiqZg9mfWKLPbVjDwyRMYabaVnB3QV1hEpmTGb6nfA5tG1pfBozaDmB2FHPTFvKpi1u",
  "key11": "46SGBUC9zKcFhqKCUDi1fUVuGFwpyTYPbJkEySDswBR5FH9oDfdtYHhCpm3JKaZYdqLKcrLQ2ec4fLBJxcSRU2tA",
  "key12": "641wxxtg1G4uZzFMR2Rw7FjexgoGmKiDpLLgC7dV7Wa342eQei3MMDJP1UUVDMAhBL9B3fMAoSmjFfDNbyeKt25K",
  "key13": "5N1uA4843rFKHazwm5hKBKwndmSRTuaoDK1pWtfCBaQjdYr67VmzT2WRhxGB3tkTth2tUM4CvPn2btTh368LMWtC",
  "key14": "5EfjzqrDRNA6dpA4PBHzjMJvDUqzzvuksPKaTKtZU8msACFSJfZ1L9hfp4jKaAvPAY76ZckzMrH5owNhTvLcD23F",
  "key15": "5r1VmTdCP2a5MSnsLcdt5zG5y6CrGSd3S5P2YTxMFUrp6GhcnNxKNbjdbP4QNjfJNDVDrwSswALewDtTUKsKP9Y1",
  "key16": "BsAYxmXfuvFJfGJTgxW38VpUv5ygZGLpKXjYLQrfpKAUVo4myhkoRJ8fkEs4LrfEfnytNYQrQ7oyhKP8TMTJurv",
  "key17": "3ZCGLse8FJKPYtD6PyH2Au7voUx6vAUNVtgwi4kiQLyjvVaHG15mdf34fktXWoGBom6ThgGAEAySjpVKZm1BNi1u",
  "key18": "4UMBgzagPmtCi4L27p1Nptj145T5KHJJxg6CYNt5qif57Gemyz4usr4YCRUuGw6C1mtsE8rECg3veE1kJTpKoHKJ",
  "key19": "3tBe8Ph8Lwwc1bxLL2zzVxW9rVMpXGNMSZ6MnoN1QpfFWiq31opL2JJxEvEM8EXtaEyE3iY4NyXNc46pQqU9wz6k",
  "key20": "3wcWcxzj1J1Hmsjyus8uNG6aFEAB1EkmFkgb7oQH3J8eekoDTcYDHEw5XkAji8dzDvTZvBX5VcJLprA6i9veSX2E",
  "key21": "5kPWL8uLcWmzmME3cxHcgbs4USFGSAiH1ehgWr8D8HRBtunL8wFDNxTgotEvVvrNpuzUUWAsAvgX4smAhFTg2rga",
  "key22": "5WHCrL3WTk8wJa4fQefMr9k9ivzgp3evNJcVEpQzs9XDGTm6kRxJg35fG39BdzhtVhGzEvZQ9ijxY7rbiSLQJb5U",
  "key23": "9rjFZRB9MpDpZEz5H19VWT18hNmFLFAoqe8ANREc3NiR58WQSxLr9v4rY8uR4xvv1aaj9rQ4S9TPZtuqivtJG7w",
  "key24": "TPJPY5gorV8bR6vbDvWeh1FZ6Vi4mK8xyZJw8eQNioY9ksi9DLALG9bXzVB2Rjhdtj4Ho4w616HxvpGEmGME8bs",
  "key25": "X7DxjzZzh2p7jKXiggjUouuP3ijtujWRNCZoXubhfZfsbkdPPZnYhde86uUmpGhyzLyFKxJ4uyUav18Jni8thry",
  "key26": "2tk66ZXea8HMKChteiTgBqBujRJJfdtqLyneS4MZbpJEuagJzHdhFBVT8nouuxuwZQCwCpq4B7oQyspci5veHydN",
  "key27": "twqqBt4auW4mKyvsoKA5qSjEuBFwJPRZU86C4bDPB27MHuc2UsS8fwrhLWiEiX2HXmUVcjrFPow5c63k1GM3dhX",
  "key28": "2nXYymx8Wjecx4cUE8Extckt744r3boihVyy6CWVVVYBkRiEJRsKFrXH3tFiW9JfrTkoTCPWUcNLK9ok7eLLqw44",
  "key29": "3X4HnDXgQoTL9n1C1Cvd26HPimGwvfUieH9K3wWkzj81og4P4cUDQFsSQQWtEERSXt9gadF2FEtdHjW2qV9z9hdY",
  "key30": "3WekvrqyjWKZmLPGGJ7dzku6FD5TqDLMai2qsTboHkcmH7rHzh5uczCzq1NvQWrErErR75m4UfTbdPdEJipMdhdg",
  "key31": "F75kDJhNoKaFQ2b67XmZ34yZxe2oWkHGiRAwm9zYxYSWZnpf7JdpjhvKn3ddxooDhn3PSbjWXj1CtH43ELYwUoj",
  "key32": "2vmPgFVSVuBHvrjbPAuMVEiUx9XMWaLxgjutKr21Y6MEbRCKeHbD5BbAsiEoSVaCbawh6fEFiwVQm8MMYMXhKecr",
  "key33": "5dNpckDPP7tXH3ohvHEjZQMzrXoyZPdrC7tNb8EoDcWVvmkpv185mY8kzjfLeFyH6ZdJT4DycAzGq2TDb15fAbh",
  "key34": "eCSub6otJuL3PZtLHHVxGq2ea1yem2JaADnTmT2EnxdPzqWqZjBkZ4soA4xMkx8MvEq5LdEzAZo5iLhbCuhdMKj",
  "key35": "4J253CP4LT876bSpKYVrSzyDfbZ4bU4Ndie6U3jZSWwdfHet7FtDFS2g6ZVRSxKvT9uRFaVAZzp74SjsUigcvUMX"
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
