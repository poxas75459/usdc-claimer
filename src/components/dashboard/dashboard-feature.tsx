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
    "3bCCJS4bEJcmHfwK69jpudKS1Urja71JcEPR966BVHL667SX3gmwhU1yvLYQgu4o3YRdu8KfKZGVnsba1MohEuE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SuboTJEAXuDiwaTE11rQgJsJUE6h9PDJ2x6zxPMzvCVhfvFAoKZ9gyq5xwkJFx5euAfYjtaVniLSdBzX631bKxj",
  "key1": "4gVrqXKafjeEpdhcpg1VePPnuEM4wPe5SPJLGkQoewKsHveJU5qKtDZV97SrCj1uhn3wpgTk1v6XGL1H22kRZ6US",
  "key2": "54c7igVwiCGZU9YLKVmqztBCmh3TAN8yZGo9jynpf5cxLzhn7moHXPJhWgtLU1DEy9XHRZDcHoGzKdTES8KdQToB",
  "key3": "2LnAznKpQGLW5zDPyHno9METxh2waYRZzTQA6xpCAZe49auzDjz3ssoqSUG9LJV7TW5Xo1m8WND17vmH2NKmgVqX",
  "key4": "3Sm76vPRSws6EdZfSFsxmUio5pgTinTRR8sdQ17myHHj6FhX4xrXnpeoyNuq5esgjVKKDGWtKQPGxMzU8vgzutMp",
  "key5": "5cmgR7MnSBF1QAsoJhotpX7KNdMH9iU9HFTbEJLsmVWegTJoVgPVMALCViBp8kX3XgB2HRTWW2YhtFxwEG12depP",
  "key6": "5sPG9VAP3jH15JRDYrqs7JugtXGXXpmN1EEen6BKWT6hdGAW2PMWSjnfTPABQMowHQkfHdjEycZAU2bUx7mLd7Zx",
  "key7": "T8uhKZF4bNDWKgugFRkF24GwSqWVbrSApaXH64Ru2WGi5LnMaVwWJjaAjTGhpCWt6DXZZaHAeusU99zRyuJTmxx",
  "key8": "LKWAZF4qMNu2gHxbwejFFmM8Bnu3zXcWfSBtnf7uTdntabHjhhfLtEKysiG6mxY1YahMoBSRm5U4yidmy3Uhpcb",
  "key9": "3RYhXfdEYqXxvxgGggcRu9j5owcD2zFH9e7XqLpDFctkbxb9BBiob9h2K6wZ1zbM2WcDVaNfwsspHoWzqorUdXtK",
  "key10": "LMT1PnkhRRduNuBGixSyV6DdPEPp9aCUNsnTGj32nuvHH8sZ5vC4DuPi29mxyWqSGjirg5LmH15u4UzU7EiRBma",
  "key11": "4JSh6nRwpYB4W13tHSwLKrEmrmMkxE7G54HgyYpzvHR7cM18sYZGvWzauRGqzQUAiekzoGmMnoi9gDwZVmzggQep",
  "key12": "37B1jH3pnRTBu3rt4AcU4Z88Dyt1xTTNgzU2BQgSY9KhaSMc7c5HK9o9i5Ww8XRnQVjPyvBNgkXJj2McCmG63aCL",
  "key13": "5hxrH77mURN6Jx8Q1F43LUCWdqVYA1FwXZpJ8AAQ2Q43Y5zBVXXYDpJJ8LuwvMHMQdYu1t4hTDMH4A2pfEBaJCSy",
  "key14": "4pRs9ks6514s6ELBq2tKfFsQMYGobZKDC3ZzWFz2nZ8NP9jcqAKUc58ef5WV72nGQ7kL3NQYh4MQZNv5dzAQafe1",
  "key15": "5UdskpbLbsNFukJuio1fQ7c9Cidmb1oHewDM8ySuQrrLDszHeZcX5mVDjFmTe2bwocvZxfxGRxaCaAd1DPPhGtFh",
  "key16": "3bi5RA1QAKSPQ8QweqVUqoQP1ndK4bVr1urCu6wSKSPY5cmuj8vkGcjvTueUrikXPkHL9a23KaRcjbXe3ByGhzpx",
  "key17": "xec3RViS6wRrhAPAxiDXoAcJXoTqkLnA55r7monHUBMnjBqbus7MNW8wJtb8vzE5rnCtYaZkMMM5cggqtjNLdvp",
  "key18": "4uTtAhmifEDG6XExwUvbaYoxsvD9P2wLmXa4DdgAn9SvtpAtqL8qM9WSiYRbrg1RJwyuhSrg5W9mXhPBf1DN8PhN",
  "key19": "4oU1WBTpHs3uy5aGEvHpe4PPchtpz5pS94Pt4eZCdq7jkA5EAmYGJmfn6DZKiL3bMBSzpjT2e7GD8LMUHBSUFMks",
  "key20": "5zY5NFCXzZP8U9i6uM4CgZf8eybqAt9p7pZmQX6syJweCUsvtUX6DAyN9A5RL8REEvNQsLGxJDMDoU4JLdBNVX4a",
  "key21": "2s9rv2S4doEq9nbS5Up8NYcqN3tpF5u7tvZb9vMJXgNJbn4dvT43FRjbw8GsfkC7a2nNFwvj7RNXzaEszrcKzk3k",
  "key22": "KvmDvikE2yNJs28BonQZy7ew7yvBcSNJNrCS78YiJTHoDCKQ7MbFpQH5SZii1MKkpDEKGmQL93x54utemFkwLjL",
  "key23": "1ektxzU452gXUQWd8wEDNdMmygassjU2GwLQyzK3f8VwgpZRSEAy6CTBx3GonoXkxzabbfz2vrevFGKvDwt9Qy7",
  "key24": "66bev1HwR2zR1Fr8cFMrBGNkENcmtv72gxoS1ceir63UJFDUTYrkbhb5cX6iRSk49EzHVvvDFYW5sSoMD8GMVW2d",
  "key25": "5HKrioeWEok7WT9SczTtFaTJE3DHDv8tj1EqE76sKYmvfE81sU9MEDYBhY7kP8nAL15sK1QEVtzVttULVJfdWCbH",
  "key26": "4hWYe54jWQbx6eVgjc9EaLMgY3dfYHuBvf8bv3kcH7ZrWWZT6UFiD5eeqxZvhAAAGnrUqW5R9bb9hvhaftWxhEtj",
  "key27": "4Cx6j2Kv6ThGGci1MwhSxuqYmftv5ZRca1Rj5mUn5i4T2M2PcvtGNEmDVkfuqa5PsNrRRTpwvWeVwJYMYiduhf3t",
  "key28": "2ivtRdHUaUWP6NMKg3fchAFtiG88fz1MtcqioJa727PLm8LLsnLZ17R6UmYWSEVh6GpG8nr9qb6aTUbYDSSwPUg7",
  "key29": "4WT8PDzMNUcgq6Uovr911h7qaV48DsR7GY7ByVRC3qGWBcMWrSFY5bwTA6GCDoeUnoChkh4EUTV1QUMVn6FUQBVc",
  "key30": "4S9zVEf4wNeWcYtDa2qVg7AVrkTneHg6VYvs5f4grD4ML4GJaxaSNsBn4NnD7yPgafFjZVwLBjb4WM8rbvvf1GsR",
  "key31": "EFQXteGMUprW6a1L4XSiV9ZRfokZNyPGmmknG3H6Vsa3mA7wKAPEsqTVUdJPGbUZTJeKXPPZTJvYZoxfehPJ7d4",
  "key32": "4drLcJBcrppnyrtfPzERCmXRv51JfX2a8vD9GypXaGVJ4n1Ns5jMiWykQ3ncPe2pfW8NWtz5xg9bMurbggeYPfCA",
  "key33": "5o7aqGc4nZnFSvhytevWBMjGH3dhjWcGPLVHonbJZUDqYyZ9LJGAr2YRpZf9eTpm8yaZiCQvkcZGipLVsQgnwsLw",
  "key34": "62PbVqH56Dkh7BdRFYQLvSKNUsH1uKkFs7Uspy4FTNPRuwd1KqoM25vGzddyWAqLKDFzKeqBfP9crusb6M4aJhhK",
  "key35": "2LqugPp8nDj5WZpSS4y9RJE4WWut8cnLXX7TVqLT8CQAWAhaYTHteF1DMY7hrp35QCMZ9RSr79YnPxztyCfR9Wb4",
  "key36": "33s7B6j8LZyj7REcEPFGZEHx94wkThUxawL7W7HW2nsTgnSMqA1NCRNMcyTi2esu21EBgJQnHzfDY3d7Dmnt9yuF"
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
