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
    "4brKMrnFqsmsMJXmX4WhYquEj2gDZuBKvJ42nGhP7pdM4yMiG7ddCdDC35fmRput9zfUCK2EkSTUjR6vmuqu7GAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X397cUX9aYgkpQukfE2ge1NaEXv8zjMh7J5ecz89C9hED79B2BRGa9GjENcZZwu5airgoSXDCzChLBkkHxfJKPQ",
  "key1": "YkAr9qMVAvf9KxtfvNGHgAUUKYfMQiaSEDF3tpV5wVNydaqaGhwyr3k5tgHKKCs6gEFcFBdfh94DtwoXWMThEm4",
  "key2": "2KKMe4vgV77X4U8Zu8wKu5gA2M4fDTwN5JNQKHFB6GmdKWaRXpRB4fWoAKhhzW2hDCBvk8GLBA3QyFv6rxxbVwaW",
  "key3": "3fmZ15YWwTKHgcTEsDq7Las3Y5KJk2rx5WPRmqCyo7woTopMe9PbgVUEM8cE4ahxSZXLDSyizq2SAYWK8P89AUxu",
  "key4": "4QHfm4J3qZVsYmx4359pjfCu1XVFTCbToPCeDVvoMaSYndea492WhaSzDYxyMrHXUWosZN9xyVwxQRroVmJoBN8a",
  "key5": "24qrC5zgmoWHgdroNGptqv7pWJFhhzmz6QgPnHgpLeRkmNnBvY3KwHC3tb2EjQ7x7jMTTVEvnShSSGCRf1XAqWrU",
  "key6": "21CCrLsX6ivzig9gVmxh7mubRd94gp9eDWabUrWXbUp8y6ccSvTG87QDPsvHecvatScEtEQrxqrtSvyTGfV3BDFV",
  "key7": "3bUtjoGS58PnYHgc5HmCCxZu4GxwJ3j1dzEZbkKYu45DgzMmF6b48RtRGaWNrzQFEP6kuwqTVkbs5rLTxYCXHryF",
  "key8": "4d8zU3Cw7oKRtHip5rEPeRckhVEHG2XE63qT8dkMbWyvHNmENfFVXoBRsZNW22i1FeiqpjmHCGGttZBrVkgsAk6P",
  "key9": "3kHqe7Mzt6s4SHFBP8e1eNC2qYrRghAJaN7HQZh8SnQHa8NkrH7RNF35cz2Q572jZ7sz5dfM2NGWAdH9GaBu4nxK",
  "key10": "5dskUavvwUkJpXnAMUfT3SLksbDv8S5VBVJ929AYmkCqbBZC1Dv1VaiHtkf9ZcWJhTcdonMrF8ssp2YEcc4NoWPH",
  "key11": "67oZSk7ed5vbydrECAjLc6mQiwoPnzaLHSzHZZWbWGwLnfebgGsG7gW8ZLLYg6h6ncjpeNq5w1pjHSbFNTEQwq3T",
  "key12": "4hoy8XDY9V4bjgaifxTSXsz5PmPoXJwccVvEkGM5N8VUqUS9xRnF7fUEcmRJ2kx2rgh2akisrdUSf1pVfNfUF54R",
  "key13": "eEvzbwpXn3gpuCS92CBiYLAVB5aWDrLHP5Q5F1kyR2aeUBt9SVGPxiH7CugEBRMgnzNzvpyGdw7rw1qZKGRdHLr",
  "key14": "3cZ5srzmFoHep2fTa2wq8wLnWL6NigyXgezTzp6cEDqNmytMSuTcTVn7mkrVkj6wNV8aMqPkXqAViGEX9vCTwww8",
  "key15": "4Y2zhaNVaWkHNUoiTZx6buhLYiKc2NPuSGwjwSkoGKDx2K7LeUZZQNbmyj4dXbusdiHwiMveqNqzaLL2ff9jGVik",
  "key16": "2VUe2q5FFghABzY2c16ZYA5eYFdnwKBk7nfW5qX77YYexGjcXWAcdNLkR8C78UTnZGQHd3MLVjHUZSwpFohZwkFu",
  "key17": "24NhqyzHMn4JCV88ukzLEAr9aDQ13VEN2mPhJwsSaP5JoCf2KCFouQ6L51giFnMomta2PAdngLCFXaVzc57h1Thd",
  "key18": "2aHfU1ekMRSX2oe2dv6ziZLYu1moJQZUzFJVskfgpQ2rzSENLaTTPGY5FCKpSoyA8iWRTjenUD9fd84b8EnLT7Md",
  "key19": "3P1A3c55jcpCepjKz4mV93VT61bNctMVqTo6qVvqqYZo2dVNWHQFAVWBgDT183tRBcFH824N2498HKR8CZDLaUym",
  "key20": "jmqM67yZUWP7kGqCwBDCDTVQKotWoytYDT3AUFfaKHTgNZw16aHFP8qWerQgQno8NvJCQimWeG33LVEC2CTivQM",
  "key21": "5MDLQ3jyAuXuDpxnHDQGJA6e3ieFDFYu9NrTPM7LnzrXmhpms24FLn9Ecf4AvQyJUdsRTaVHSELWJV4BQRzRCGLk",
  "key22": "2Pbq7BEKTFuXogfayu6k3Frby7z5cEKL6cFePKh5JHXRn9hSR7ojn9G9mvZrLnLE6PvCTxuWbTN7b3irhbrE4rbX",
  "key23": "3awfv6qEzuGffF8zhhQraVygNcrP2HWfUT2WP8arm73A7x4vX95AJ8rXNUJLFHpMM1XQQ764zwzxwNorMR5ecwBM",
  "key24": "3Mprn7Xo1Z6p7TWT1HoeKbzrz3QnPquEQ7t4TXagFmbx1Nqnbu6nrqUpQHQVmMYKhHGYReDivP81n2tkXXH5EWSi",
  "key25": "4gp6DZmL9z9VTjvFX23VincZMbRRjDaRa6AUPU48w9tJCn3EuoRv8syG1YDjzkZxxc8S48ZepDEYM1tpyMYi9Kmq",
  "key26": "3hBHRUrTzHym4Qbf9GVRXtfZn1y8E2MLZMzEL74638gSauH3imDwCzyrXudBDZhe8JU8v4gZBBP6hpJHfAkEWhGn",
  "key27": "2xDn8KU45baWPfsCYgoTJh7sMdo8tTTpynkfzhdGaX17Cz5WQVr6X6yCGRJSSDR6m5n94tg9YPpYacuHaY3cbW38",
  "key28": "5VKCnTZm6a8CkYR45TtV1Cyz1bgP47XBgJ7JVXC2rzK49XApxgDBFi9TwsfFFfeVJGtXNuyeFophqoSY4c36Pov2",
  "key29": "3gQCBMungdo1czjVqZR99kfPSSTyrb5wcGrVGpfXP7c9rRBuKzuVsekPTvYJuQdFEBVDe9aZYptSjv9DuT44VokQ",
  "key30": "26dfPvjzx6WXJd45gBBq6TM1Lik76gghNzJVRvkFUpENwoYW6pEs7X7uKzTnzFN6SADkbs6Zxqw3p8DAQ3aeTsRg",
  "key31": "2mNdARc1y9mVUiiXs4HEgk6rjCWKioeJta9JuHaMVgMXr7kFyeKVaHDionLwpciffKEV6bdxbFHV4zUDtNxHSS3i",
  "key32": "5GJ3rpU6bEMh32kvER2z9FGXTzLYLBX6UdwQh7T66DWqU7HiVSpNUWKvLeVnAk3rtui58E8vzUpJVC5MkDA5wENQ",
  "key33": "4NhrpBSQqDdZeabSkfBaSygPnTe2vgkBRTqskgqBpUbkZ9QFTy4hLpNospvvzHKVWk9GAZZezqkd3ipvLG5Fo3y8",
  "key34": "3Jv6hgCmFm2mN7GA57APYWRZtdSytph19VYQ5AesLrXBAfNEAGEfETaC3gbT9PNLR8TjuVpcbJepco5KeCqBTxZA",
  "key35": "4iTmBHwDzxGU8W41gRgsJvwzAa1rrVep6ric2V84nmchfWcw3kBBmakT2XDFgBo8dfoWxiQ6GQgPYiuD3TC4sA13",
  "key36": "4fKCNdFJw47DQ5hiKvLpSod6CbgiZ1mcNQMSGvL2b77X5jcZtdpKE4uMMGGhwPzfZw5rv15zfKx1bRpsMrQaTcu9",
  "key37": "3FScp2qmG3ijGvh1o2c7Gukxk9RwxjXh1G4yjPwstjSNfK394oNXMS4kDm81dhRnY1nJSRj6hPhJ1TLz7nJv7HLs",
  "key38": "3Au1vn7DnA3wZiTAbECJ1QJBahNcbhbp8yoD824vJXFJUtiK5B2K3J8regtoKNXua5H4vZMS8BwCRLwqtScYn2fz",
  "key39": "5Y4E7KvWh9oQqokZ5Hfeqot2AuAkyWAFKDp7XbHcGQfEf5QLphjpMXnjpfsx1sH6sS6FbX8SQbyEZrMU8kwVrfva",
  "key40": "5A2jgDSoh31AR9cgsZQTDjDFgjKDmog6TmCwKcrp7Bagb4aqAqdzNr7p8vg3CLF1mA8jkgo6dfN7Lyqx2PyxCGJU"
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
