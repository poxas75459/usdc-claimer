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
    "3Ha6VrWTq7Uc3Jf1b2xH1NpfU4uvHzurAoa7qgJG8bHXpyWw3Fp2beFkV3gJpaHeAD4mNBQgrtjnnSoxT9ZjcnVv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q2ihquVLa25iZEzXMHJTyGg6P2DvV4GLun74e2MdTWpSambVV9zb5LipGzMTr6gWqHyQvcnfjh2sZF5sjSmyuB",
  "key1": "65yoFVTKELeW7SAvyLuDTTRMjuG8pn54HLoU6XJDRkBkTPPyyJX1odkuAMMCBpyzemSKmnFsbSy5GdK8VZqPra9z",
  "key2": "4sxMCzK8gMqtPS9VNoRWsxTNcdBA5uFEezzLBmJn78DPKgy1c49yiqpNqgKtwKsxq83qfA2232ihiTGAYaCvRBQR",
  "key3": "3eWyyB9A4dPw8Mhry2MmAXE2rrY87EgxRitig6mfwVHCTrbnytmbPuunkuEqMFNwW4ZtRoZrcrsuJC8GdjQErtog",
  "key4": "5cEg4dbtMwBjS8mGfW1KKjdw761fKvcwpREfxawudgMgCS4QvJVLB75daNrTqk1hX9hFkNPW76gvRkD19sD8tW5F",
  "key5": "18t4ssn5h7q4sEutSuz26Y7uUztiJWMsWRuA4Co8QJnv9KbqmYwc2Z7UfD25fDYC5W5zZPSbc8wcXZFJCFGR8iD",
  "key6": "5qURGrMxxPNuoWEVhqakjZzxeKZzkDkc9XjEVBg4sTkNR9d1G8mBJDpB2MG7VN4kC4cdEs1jF1dcMPa9yP3Bsx97",
  "key7": "3K17gnASaT2CLRHdSpPCPLSJmooPmwa8LBHJWRVPy38aQwZPTyAz2mfbQowetr7CjxWL8saxjtvh9PWo8Wgj9yC",
  "key8": "3BzPe8WWfZMEj6QJjYuL6nTrcV9DEKS9LDU7CLvttLB1oCx2ZwFozx3goxkSpzm5yUdXnVaLDejfh7BPAAnJsrFQ",
  "key9": "3TVrrS1PYs1exE7TGC3Z9NuVvjNr7yc6bUu12LFT5ZvkEuNvVGHATWS47KTr4zdAUXsgrKFByo9XWrwkhcGxinWQ",
  "key10": "572gcENnFqxFB6azVoXiF8rU8TQkiefrQDH1Lwns4rrYU3vdXRvuJNv2iqX4zQTfk58tcgAkgbLrUMNaoUx19AM4",
  "key11": "2Yn6fFHBrYFV5LMXsDPVRPibyeZCNZ9dDrGbw66NahnZGC191gokMTa6QAAxQG9cayeYrXzDPD5Y9g9S5CFkGAhb",
  "key12": "5GqpgeGpGiVaRXMDqzk7uiV2wFts3bbJcdQ57s7yL5ckYnKZnogjDGJHMHgipDrpnRWPiCUJfmAxvHrnUGJ1Phmy",
  "key13": "45yCZtNFT6vjFzfFM8eKWuKQBE7pyjkMfb59GzVjQKGUfe3ShYjbAJBRCoDNwrHWfzsEx2VNbPYMkwoXNnY1A4qT",
  "key14": "2Lc5u2BEKTNqTijjhiCxUfmnVyMtuZvQihNwm1GpS1pFRGrcaiMrPZJK9rxFvjBvvj9q7KT4PmxbDRNd2dLfwCYV",
  "key15": "3D9f7uLZoeJyeHi7mpG5ynVPjryvwnf6GwusFWNmLjx9sBCDMP8nZZYKZpAA4aWGDJ1ELPpBMjnWL6xoXUn94T9q",
  "key16": "g5ACmoDN5TtWfrmPRWdReuLHp1wdbgVGnPV44cPcHHyqn3bZmic9VyGwPK8uK9eJA1VK6VkRyT3YnQ88CEjjPNF",
  "key17": "5e1Km5yeHKAbKeb7CqGKFq3M7hDAYGbBj3S1sSve1TCp7X2ifUYyUwpujAt6oCULFNuamsLR3X7GPoJRDMthWB17",
  "key18": "2qLwkdX5EQiJE44bfuFv3Rtj8CkoN5NzRbnyZwKkgGhQYD7NMf3Hgj17UB5mwsEKu7k2ymB4jzyjTnVbju6ESJqa",
  "key19": "5WK9cLGnkmagNbfTPPi2RsHX9WPCVvqPRmCiJEzLfFL3W3WA7MWGLEtF4n7A6cKBCgbjZzi9HmJLKBwYFoyQVTua",
  "key20": "5A9dX2ne5TgvmwMshJxDgZSpEYEqRKkt6utuhfp6UGeeS62FnjxxAXkKiv6RwgY3atJvrP3iw7uzRVnkmXb7jY9x",
  "key21": "4iunPxxvymusGKA7jKPBdkGkbg7XkJ4yzBNRb7bNURiqarygj7aM5FPoGr4eB2WuBtSLYXTvRng89sxj62TmLWtJ",
  "key22": "4F28RW6e2Umarc1HgqWSPevMCVaFFAjGYhcJcCBuBcZAsiayYTPrwB847K9q2JSSaDUAfxBpAAc8dugpnveNN3Gc",
  "key23": "65FgaaUofHneBK8DDrMo4bPWpd6KHb1J8hXiS7buAPBCWeqR9PUPkK2cG6d7zehHofmUaKc48oeepNhXdsu3mWu3",
  "key24": "6g1kH9XAuNJ3CZhtpovfh8NwRo5rHdiJToFDoHWYNxFH17K5aATganVARBDXj1PqKKovSmCRuJtWJXJHkaUt86D",
  "key25": "4BCbf9FanSLPRDFTrrNPPgK6qSse5pkqjrPzVQePT1necY1XSrjt7Bj2BFpSLiJHskphnt8TG5U34pegprD1XuV8",
  "key26": "7zZtzEPDuVPwwED5fyjiFzecbVLEcHdozzfEgvB5grMNUSTi4B2GjfWNZyo8GpzCncGkZYx34omk4DQQVWMxUbR",
  "key27": "4b78sdt6KD7nsTu7Ajzhg4fnkDZMXuGWPxCizESKMrEASMCowtr39inhC4xaN14KXfnYYdBtZmTamPeqLQueWNqr",
  "key28": "3QYZxgHKGxUBX6C91vW63LH2AYrtKZmM1cvb8ENJ38xGtLuqyXNbD4TtjmLLxHCqDagek44HQY5t16uh4Dj81SHs",
  "key29": "5kGjT5fjtX7yDDLfU5kzMswurv3PAuDYvGLGXoqcE5V3zPSKP6826dUa6FP1CPfizysRE1gMWvUjjhpgnPqZBxz1",
  "key30": "5gNjmtmAZxPVRabkDrszKFZNK4bvcAf9q51JwoGjXMSFXD4v8GYSkWpSwpjgJXCcXGaFyCcXmDXzHp4LjLFq76kG",
  "key31": "2eLhXcJwsf3gHqp1JWW96rnPUGtZqcQ1ffinZ59GA4yFDfaqSmNdHcTvNfgMDpGGwd51Uou3nbjbgSMauQ96sMn7",
  "key32": "fWMZ1u7yALNmp6ZFhXHbSmLk3yvKAjRdkM1ZB7dTpkGN6wvWPbZakKT4krZ1SW6Gs8NFnJRgMQ3zPtXBsFxoRni",
  "key33": "2edqWGh8iaRjvCZopGKicbh3z5VxDQKFNjrfG5Vc5XWsZCs84iXASC92BmRohZJKxmD4eJA9idxTHNmWgfaTEBiq",
  "key34": "234GN6esZKCaYSLMmsKcXQEFQPXBW7WT6F1nthgT6iZxbdXHztjd6EnHPeFcu83wEPf6Wjppgb4SCkDSdAnWuUjg",
  "key35": "2ni3Q5qEEhSPn9FzvWyizVzesszb9TJjY4ksyEQro3XMPboCYevyYu49PgfpMZnBbGghZL4jNUNxyX1V58Z2BiZc",
  "key36": "5BuSPdBnYx1Sp6xMQEEZKHZtKRck3326PaEBgrvyGWD5oUJyav4Ba1qcP7Zoy2SwJDnABCksF2h9y1oLa51RXcoR",
  "key37": "3D5nYcskvDCrxEXcgg7JnETuBJURSGCEtwWT692vSt553E283yvhDrZiMFLaAYCUdTpJ6pMUJnP6MASAggYNVfr",
  "key38": "QaucH8uzdJcDfzwFq6R5pDVpUSyMRapZ8tpd2MFtW338Rz8XfqV9uWtXpFqaX1dWM9zUaG1Bw5iiCh9Syd3JLSw",
  "key39": "2Qm4hLDZLTFaStYFMvU8n1aEYJTU7xxNWrdoRvaRTEvG796jFx9QGdQ5zKNwivoirhyVBgDEwUmJ5nyVQwnjXLbi",
  "key40": "5W1R5uh5KCwZY3sojXYbE1NXg6GqEsRNZJnWeknFvoGEjE9kuKCKEr4Kz8FWFtg4eyMLDCpuNss1V7XdpVFb3Utx"
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
