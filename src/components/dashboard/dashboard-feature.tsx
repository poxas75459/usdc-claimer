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
    "3UYe5451FLfrQwBbD2sCC2ZNzZhwiuwCyiGHrshFVkBdHJFxpnvZESUPYxSCdZKuGTvrTJwhQuZWuCe9FhvGhw2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EWj1DnxbtZJKrwZY9k1hghw7sjFbhmg4EETMUEWchjH6jRCvTWKMqXJvE54g6FswoK7PenfV3ehEfPAch5iiuMx",
  "key1": "5UDwyLfiYrC2RTYhyZrudjtLwKbhwLDvMfR4o4qnynuhVfJWNQrYMmi7yb6qjXRHXNLoku4ywWYUewhkQQY6toDB",
  "key2": "3q3hKbVpyrwUi3vNV9uRy9BLUuqR3PSeiB2qrVRmPaGE5S1SR88gP5Wncrrs7KoKgUt2pf5pRdsvgpzB5PVoL96A",
  "key3": "5Z3HeTfjc1hHWD3uUQ9PNVwNs2w4xE2FAEBVMLF2rgqSPiHxpsaSano7ArR98qBHcHGcrmgEmMDYbo29CojWjVdc",
  "key4": "31G1NaiHUAZ52RMrNrLGptJ1U2txu3H2PzYdYp5YptaMTZdGu5fpVEF9a58xcNnFeYo4pJyWerne4BiX7VBojcZD",
  "key5": "28Srb2htBmweQtSjTfrxDGkfGAYrWBaDN4pkJhgXzpgemjMd2Y4GcmEfytsCAi2gsTWkabSBM8qWapAGxvqr3fBL",
  "key6": "3VXhM57ecLa9jT1y7AWAJPwLmav8AkNi8CNwwcuUxmc7xqQvQZ9TGY7Jbp7F3FVyn3WJzLjut5FxJGzQdK1byFbw",
  "key7": "2BkhYF3NsFRTjnz91XUVz4QJtKZHWnnUci3QMu3gURXVAHYhoeRXtm67jiX4YhojqcAVZkqcoUGApSgZeauMWS4H",
  "key8": "4q1dc4KqpLzEpwS25w4NtpNF6z5fMF3148ccyScsGSoQqhauU7uZcZKnoqFq5aSja6spQxguB3Z5LYXG7SnYMyMG",
  "key9": "N3SXwThFS3stG1zw9JhsE8Ltmgu6MT7XWpoRFsD6vw57qegPYA3sTtXeUkapiXBten8WhQbUG5nSMgSBFqB1v18",
  "key10": "qefTsDH4VXvjAUJQdQTTdiFxqbwLfuN2uwr2UYyCwL7o6Y46QHpVkjXJyhG2P4N1ECCDMBBskJW6Mbc94Lgoxu7",
  "key11": "4jSTYcHT15zv3iyM5XsQNCGh2MnVAvso3VjABLopUTyoPhvpQYSfy2xn8DzxTHHnGc8KNuG9j7rdnvBHqQ5XgS9t",
  "key12": "gSG95uctvrDFbJawXAVH5Bn9vLkjQ6qvQ2enG7voPPvhFDhSUnUWdM4Kt8rAUcpcDZQSE18yH2ygLqLHq5HgcpG",
  "key13": "58tz23jAkyv9ucVb66N38mq9eX6cudTCRQVCPpCtYknrgYWbGQgeo7GZHmPwdauZHMvBBrDbmdrrDSba8o6TpcnZ",
  "key14": "5WMKZnYmmFQHhQfg91qxpxa883BEjwmtMm2ViejXoAAoY7wFU2k1Jmg7531GqKqAi3dEwUpg3fxwjfq75fH9Vqww",
  "key15": "3XfzJpWULwhXu6u33CHJKUoYZoxxAcHvH9EPHHF6tT6n2P1ZH6xQ3qumSpEa4zBHfDCUxJiXi5Bp93dYD1uS9s23",
  "key16": "215CM9APkEov2UH7jZuxgR5hCS9Bg6Er7FgDhq8cZX2Q6JGAHwtnGFbKU4LJYtEPaPZ5dxauSoLqXv5RdNcBPWRV",
  "key17": "3Q2bF19J7fsD7Sdhc7mSwEae3mLHRUUAjFyVd3BqFmSHEGZVvoBh75mTaorHhgwyK79MPML7SaUXm1wo2T4rpW97",
  "key18": "4S8BCvaacoBVqeTRfbALDHtQFshd2aCpDDjzf9vjzWWyGzFewEN49sYqiXhCgMEGAb88BuLiRVNLCMFupAGaPXnE",
  "key19": "3WRJfW3XxM2Rut7dq9qW9mF7XEugEjmN1SKyrhEQmQof2bDiLJ9v4LRNWjr5PQbadMfVavvrzvFAjGFPjQV7ZQwA",
  "key20": "5oQzuq9WhqizUAJg7ihCMW43HN1ggV5N6kzfww5986xQb7boW6wrpdvaoFde9i523CoU5wdGuRhYD7fPi5QwcwH8",
  "key21": "5jzLyU8eAtrH2VsNVB9C15KczjEF1MByXLM8iLmAGDYNjMNv4bmUjnEthRWSTq1zn93KWn1S7T4StZv2vgD8KV8f",
  "key22": "3JMZ3GkBFnyvqSHHZMDxLgNgyz4NTqJn2csKM3K6ipxcoD6YL2AHLdFJqqgmhF15EB44g3B24ufEPn6uHDPrifLb",
  "key23": "5ECure3J8gT4ecHKiLyNtVLeJbjjt7Jyv8KYhDHvTUgjapb24MrNYoYutBywXRuQqzKroVwpSQ12jpkuybkVnFLz",
  "key24": "Uy1uJ6XZSVQiM1wiyuXU2UAgXswXjPc6hZibTRFL4cP4VdDuiDuiTrmB1SAcV5PXWL5ToNHBAnmo2FREAs7kn5H",
  "key25": "4dYMPFc4gQccKEdaAJk3DWK1vsejNEGQ9T8PEXQ4KiC9EKEiABWGYvPupxuqP4aTzHvqN4dmTia1a6enVvaZecWH",
  "key26": "cJTYERyLMUvWRuuVALrwkRBKLGyd1c1VSja65JNxWn8r12krNZAZALfKrNungY9sPB4auFW3K4NHZ7ChWZwhKQb",
  "key27": "2wa64XwsBZrjafbEa8TpewqCKRjVkb8mCyGtdevTeQShQezCcM2ruBkdFGfrp2j9hqfVzLHn9CuQ4AysXKhg6gFM"
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
