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
    "VY6G8epsrK9oyFDnAvjBW8QkZDGyB3SSDQEq17Fjo2FmAp2rtohtrRHCdCLfAtpTQSRfJmi1m6nNSHNPVzTJav8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NjzFvdtPoCogvFtcLNwhN7pStcps2MZPWuXUkXVFQSumgjhmGoh8bmM7BwoPoEGRidVr9uvVY1ukeF9b35rc9G4",
  "key1": "3vMsWBS4o7Byke6XhnnSuTrGKmYJrniWpUsCGVaNQ5FL6GH3A9wtdjtPeN2TBpykHKTd1hQPetj87NAuMaSGteRv",
  "key2": "5VWv9mYZuauECFiwZT5ovLeiGfEysdXRrpXhrjEgxvjk4Zu6hqMZSGyQykLwAzLKYXZatsceAQjdG5pHTSgMVo5N",
  "key3": "3tx12CCWufyoKbHLAXuxZ5yrZdjCNRqkA4Gzd1RAtLGAMWLxA1CBvUHW8sPBngfJHVfMUastL3n5YV7D75kS1nwG",
  "key4": "4gVeervDgVJgvPUEiE6R3MKTM3nf1fPHtdRBoU25DKKUeKWdbFCVHJRwosMvyufcnKSRCUxCAwBp8byqKYvVTQZh",
  "key5": "2S5wgRrgjyRULdjMrF872GRyFd6GnNBdmcaHDTRYvsVK39dGnmEGqQihNdfCWHkWHt9LPE4sGmkr4MuWaJ7wZhNe",
  "key6": "5QCVT7ZuMFmBrnKQu4caU3ajj2kmVdF1bcCDxp9zGdJE3Ggjt2WvmTZjynnw1p433kBbNu2B3xe3nfVPMsgqXEdb",
  "key7": "3ywBXKMNsaDPsRXe9pBoLDFazN18wLFV5Wxk9jjDhHcN9WjTPU8fUKbDHTKhCWCkVVhWoRTjCgBSzdUcgtpchZ9H",
  "key8": "5a8Rs4mppagoiKmHWCY1RFngz4icqVNKktSp8uANZRqGamB1Bfw7GHpVSHMMwecubdhbhyoLYhbY5v41EyJb4Cjs",
  "key9": "2GB38n4eFrT6e17BBo7xfDpFV5TYBXJtLr6pN68csQ1d1bBo4YR6SAXPqKpn8AZYkmY2H5eFU3m14VwdAvLWcPjm",
  "key10": "2kmvCRubdG7QgBgJwUgCFaNyPw5MJWN8KiJhm94gAbGSBFGWbuiJtfsD6USMu7oKFEJH6813DLRnwE1HP5psedio",
  "key11": "3zSFdRPNe7PgduJxRCgbkDn6e5FyUYxSkuhKoiz4cU8CJTCCpkP8xeKcFGuv8wq1zDWErG2EoozRBkwWhriRccTB",
  "key12": "5dyXhK96CC7pBKiJfE9uTRzwwpcd7ejuKqcqRBomL1kdZEqFcyRsEwqby5aAqdtiQwQod7ky5BP9qUsvwi6RePQv",
  "key13": "3K4qk6EhR32u1SVciEp9LgkgKMUDzw6qXmjZv8BucC8hosKuK3HPXsMvjHvD6oRGV69maQcUN4Zj9UMTEPUkF5Pr",
  "key14": "5f5hWLqQXUNjVq2YjpMWR7qJUkzNjhrfQVRMcPSPdxeeVjU6eLWebi5MDbqgdBzvgQDhzYdNGJc5jL6MQPuEtCQ4",
  "key15": "3txwhUFaCSPeiji16JrAjKHw3Dxy9aaZ2M5ReFtiVEdhbMA4yoUonxQyRdqbftKdpCDCrbsSbZZ4Mu6ku1L3yxDb",
  "key16": "xS2P7tqnsN1yRAuGnin2s71XdTPGFadnDQQx8Ws783HiU2doffMpZmfPfAtwwsKxPQH9hrCzjpXQMyuRM8M2Mkn",
  "key17": "34eb77UteMmjkuPFpqyRsC8oQpYHqoQYLHXgoyHJ89gsXKQSREzVGk9TE4uEkPJ5nK7wbJF1HqGQkVQaMLjwFCCf",
  "key18": "wMYBBmGkCxoYvVdUXBMeZvGhoE28i5R2auoxR2xjRJZSdBuvTNaY3rvWAFpfbAMwjmsH7A3gg4mGWXTUD56565p",
  "key19": "2jMJR3tAb4wjHJqTvuFzEbRAuGzvwkVnXNXwtaFUtQ4xsiENHy94y4sggiMCadfumUoo1XF4VkoR1F4J2kMPMWwe",
  "key20": "2X9vCFzyzpsamf2wihae2cBLMLWMf1sp35GJsCYjNibt6aMTA19q2yYEJacTTQALFuxswfvr4cy6Ux7FvaQsnjhF",
  "key21": "2DPqWRes4BXFurvFH4CLAM1n8yGeTBsK6QgAbm62CuQMhGaDA12YEFZVcLtyVjaRcndXLBwYGb1Q5xufBCwBHhSg",
  "key22": "3MA1VzUXPGTJMst4QtGUYMDudwcqangX3o1jgzHFi25jQKEsckfYbQFmXN6gsTPfNkNwrGEM8wHLcC99AsTzDMPS",
  "key23": "2cCUTPTVdosPvzhf3goW5GJmfdL85fTuDAEJ2ZU79yiC4WsMpFUdpTkhBbbt1SDDMdjE4W7SaWwb8ToFDtAVBZd8",
  "key24": "3Mc14qMg1qv3nanK5MrE1mhH7PweKsfkKd7QNz8JSc4pk6TQDGKx3kMv6aXryNutirDkj8Ktoc9PkBBjuFPK2M5p",
  "key25": "2Am9aWwmeEkSHvxbNi7BJ1SMPYu714GvwcgLdMPEkrnY88dBv9JZ8u5juu4PsBBXA5NU9AKLShArEeeoJmwhMvdQ",
  "key26": "2e3a3g6m5922r6BsZVWsaBTdsjVdqE7K4kWakCUrrG2L4PhyMAxgX48wUjvRWRn7vaH89dHw2XGWticRydKwFqwJ",
  "key27": "b18w2Yg5J9tGtvZmqMgppBkXh68GtsF1uvquGJsYL1qGFW3eqUVJBSTYvpuXc95fRszbDNs5BDYeC7wkz27aXn7",
  "key28": "Mm6HE7MdBqv86mhkSnCWpt595w9bg3vrw4AUvHaLnb1E36xxDFi5BeUqh4BZurgC6muQP2u29DheUnc1MCWrDVb",
  "key29": "4tpnMpQCWqzaEJrNRtHZudbCZ8cPEd96kseKpkWcFTteP5DYppqywPsZfRwtkew2xZNNSLe3B6bBmomumLjxup9k",
  "key30": "3dKvuqXRXuqDeiM6mfP7yWNvLCuMdQAi31ctYQKUW5PZhSqeK4yBnDTyYLG9XYgru9sQE4HWrfJiDTuS8o8nbEqr",
  "key31": "4MmB1bzPFeeP5cTaKdU6ARzkL9GTp4XamKxXFVHChBMLLgYih3xYS4ryhwCggv6PTXN7p9yhncRfASyCP5kRb6qg",
  "key32": "3zu6bASnGxkvFZxbgL7Fc9GiRtatQat9E1WQPD2ShBKHk9eGVT5xzoJXmgZguhkoncxU99XxWh5GLmMxiVQnnBKN",
  "key33": "3Q6dXDK1TceGjGnvHBHXyaVUw9atkxjZuJikn48CBnSG7xTAdi5PWPWUrvnXqj7QaRefrLgxAh7YnQFzgY8i4D8p",
  "key34": "37vuhUPBfvEDUgxhQTYwHf3RcvvZaGP1u8EAfAPxxoWHWew7gh6ttAvZPjzZV7SBvyWYM8B5Ywu3GALcH71ih1RY",
  "key35": "xTDhs56yFkBgmw39krexjAAjgX19tvaZ467K5nQmSmD8ictyhC7tEDVMDoLmT1SKQFKQdn8zvcveZtPooGhH76k",
  "key36": "TXViVJt3DdUwM8ASkcERfUTqtaSVnHQQMVYPQMkxmQE5LuyMCxBgdV3GmdWrXyZvsXnTrN5mH2oBTGkiarjEM8G",
  "key37": "55281q5Lu98LP2A93CehVQ5XjPbhe6Eub1XMB2KMUSX4DVcvgva83TasiYStNy5FkFtrhLdL1zc88o5X7fX9jb4z",
  "key38": "2GHFSYvVz1iZGwtXJiW1SNeFkjcnJ1X2nJg6HsSCyLa1oYf5QfhgY8Zg91zkGmvfpxyCUjbgARzjsYYDkmHNBMLq",
  "key39": "5ZBkoMih75VULod6YGiwhTzHcgCDxnKJ6ZD7B4SUDSU4QydnTTm8Txqz6RzusKfxQiG4UpmZCFb2xqz3wMjWjVyu",
  "key40": "2QfifR5FAxrHMZ9FkWa3gZjC9ZNC5gfbp7XwRZXen6aJex6nbgBbGSSxfZ1otWDWpeuEQTLMNxJW1xXZ7dV5grAL",
  "key41": "2YbNrndCy4wwWqG5itbP4gj67hrWXPXBVzsgMScJqrC7AM2ANr8CWPPixtprEVkEPAf54Rx9b52bwnRi4JhPeNEw"
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
