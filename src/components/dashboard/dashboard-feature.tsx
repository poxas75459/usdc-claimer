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
    "X2bE2MT7SwXVfJEjcu12G8JoUCuFAkaRgBj6p7wRtWGaBkDqg9ShdU2mBYFQEYQQCMrVAJdNpnWgv4qzci6Xydk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U6aMzDMiDmyb9oUS1JvoWjMeb1kZd2NpjTzF2qrhmMn9HUfPEeoxgLcEFVS5SZpae1ckejLxzh8PpPJ4dH3zfex",
  "key1": "34P4h3mGBW3m92NFm5EvFXSZRnQfjjRks96GUFw3bLP8SRT3wzTUtHBksrZZDUpRdwLUdjSuyVjMTMfEPFz6hkSX",
  "key2": "5LDwGDvDVGVYBt9Z81ZHmWpwLdKru1VKRQVFx5JVRQVb1buDs31Pee1NJYVrgvuxvYjgcu414CmKyfxGTYscnTY8",
  "key3": "3W8kqLewvZ5NjmxRNy3zQG43wJDVxE4hMvCjEop1rvpG8N17xFXq65GveoWwWwkMmxzSE2N8SSSP8mfWaA9uSH4b",
  "key4": "2uQkEBn3zwT4sAuUjDyjDdsA1iea9xkT68fKT6cP3zC3gRhearrB56KrZbPfZa7Yio5qwxFWqqXgRAy1gx53BDXz",
  "key5": "2D6HRS2QmHcm2CRNFXfyfEkMvJuDWWP5Wo6M45xbC1Tk1ZNXoDaihmvursnpN4mqEoQcZoXDYheGZ5qPFN8iEVuz",
  "key6": "2Ci5LEjtvY7kwBiLMipbayAnQStu696v5gjG1oL3aHhc3KMReAsJy8t4ZTptyzpufM5gVu35DAc6fPEr1tT5ggGx",
  "key7": "5JJwnk3XcMWbiQu9syW8LLFbjaS5pb1FoNt4EbrvnQLuy77uk8ZUBHk882TQe87EQVcRGiGXTTreNzwhfDkAYTvJ",
  "key8": "4BS7Rsviz2ufr622qjWX5CcRwusVeQYfgDaVzZiVRzymSkRYt64Z3cqZTjPL88evCbDMbNP56zSfhUR6eTSp2hHQ",
  "key9": "4ousMpm7HFRt4cMm9fsE2qMDCUd7syzKRhtQpahgA4EvUbd7pahfHF8RPFCvuqKh5cj7L4eJR5DcR1VnKA3QMKdA",
  "key10": "2zvhGpM8B8j1Usw5wyTiPApyNcAg49Rtht6LawGJer4kFzDrEzgzXp2gvcrjriidRavFR7629YXb3SiNQMnszSyJ",
  "key11": "4T6QiBC6RnAwU8A1TPg9RXFkpdSZzAJvxSKAKCoeiXb589bBRKn3d6C99VYyjF4HsuwuDWfa629Wf9vBAw3U4gKH",
  "key12": "5uYLXRCKBcPVYDXJDKKZCWDPoa6cXtuJHxvfHNPkFSyg81oGPG6Ci83FsrPWJUYggqgYnhRa3Hu6T5rPK6ydDvWi",
  "key13": "3nJBWPf1NnqHFUzt3fCty8MMpjUtyn1xgamib4FsSrd41KkiU7S2SaRLK89SBMVSq3YoNcoXU7Wwh6CFBE5h2Gze",
  "key14": "4tiCHrvk8pUPmGPFZeNfs1oyNY4oXeELM1hb88qkuFPc1mWAg2DVvQ5huL5AqBNfwAH73jkPhZMGiSLhT3KHPND8",
  "key15": "qFeSoHY19rXkuirS7P7UcSyHRFtkwckEaYGsoi62Q16ToSq1WwuGwXFrNz9zrWpRKURHaWXqD1KDRs1omDUENkR",
  "key16": "2Ud8sMgpUwySPFMN4JPfNCQxRJnnjmiRFnaePwsTbiLTBCysENxKANpdEjd7mUyWxjqPScWXWunwTjHTLMb3Xa67",
  "key17": "2UqmLzWLC9cRc1sg82B6TkdKBrEwDWqqK8hRPyv4Cb14ioV3vLpDF6vNayv6oNdk7momYezSdaHG2B3AynuEFepz",
  "key18": "LWW6Pn5djccwSLUDbp2NZEn5jpGMEP2Vvv3H4J3Mbxpmxi8fL49QoWi2c4CwidqLqsqTPDhx1W9C7TSgp3AeDaD",
  "key19": "2Rso2c3GsNJynQR6f44jbJDN5VMK4xbVkLtq7TXJJxq9XsRyUVCxN2ecvy8Z1tt3YibheHmL7n6iF5sQLyDLo6tA",
  "key20": "3c1PAhus4YJzzBBDWTNXrZRmiyLccg2ARBYJ24QuQEuzBNo18dhEUYDTiuWYD2Uc6jNyUZNhvLGZoCBxFCfeobfF",
  "key21": "2E59DdZN2nfkMFJ9KmW6WG4mvQu2MozSRGoBsbqDWk8BfoLp1pXzroNZ7weYfR9RWWPvNmCPJbVMVCNY4vtsdknc",
  "key22": "FAdVKAvKaTAE4nWbteCC11veoc3Vpm7KxTvSeBEeftCzjqDMiWNNACAk2Vmd6RMqVxaF3p3j6U4vhoLtZEYk31k",
  "key23": "3Hhqn2PiALaoK74SSDV1xX51Frzk4XvbXkK16gQE1Rb4Dznk4At2UiWSm6VtEAqyX6My2YYceEUq2zoHC6AdTKik",
  "key24": "5XsXjdCqKBuXXXGsc1x81New4LWHQCZPmRpWPbshbffqcDBBs2oEiHy3eB5KGL3uxoUeHP4rKnTBieuJ81BZhXVp",
  "key25": "3byCPNRtBcU4M7xiwD4MQexRDVcmYSPB8YuCQf82XsuZxsJtFXQZ3JsCQm5itkDBF2fctNJqPyCW3pfCPEy1oNpW",
  "key26": "Aofbzm2mN1UE8YWEBwn7X5ukTzy3GhzjEhcp6bMt4xwLyiYpXmDdQmY6cwRMgMarc5SEumW8pZNoJuQGGoso8SB",
  "key27": "ZKxZVE4k4WuyBXXZjaxyuYt3GZgFitE6Mc8XHTQTVMNJ6BYjyFrevKFRDRwZP86vNoT8U6bdiEFkNcGgmUik2zz",
  "key28": "4BfXbLkwVqQhDFzd45iMFaqw559GhzhidFDNkBujQxk2pLMSVuJBLQDcUjBvceBe6Cxxc3hTRW6dH78NaSaL85uP",
  "key29": "2Y2Bric9wnqMEanGkssnebwrCFLyKRnHVi1wzVQdWGahEvb9usYoy2vDWr85nBuP6NRWUAcQQNSE2kYEp4oBMCRo"
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
