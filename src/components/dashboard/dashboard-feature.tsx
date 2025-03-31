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
    "4wbkdsa95ETGgp4YP7YPJVjihRfhE6Y8BAByNwJm6w43RA7YJWBu3aMwuib6WwtXM3XVRawJ45s6MqKmedgPbQ9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DRFsiB5HbzyA1eER91rwUjeG6xmRE4xKJf6KtPCV64JotffqrouniPTBMDSwSQULNyvu5sAzAc3RwDczZLmnwJ4",
  "key1": "B59Ty4eVRXsandvniNHbZ4zUfChVgLY1DjxaZVxD2zZ9yXHprm7242iGuRB72U7ED3noYFapAKmPfULFXBrW2QE",
  "key2": "2V8ZLpJUythF8QVcZ1FzRhsvCkKU8qmE1o9c8AL7vHYUobiznU6nUc26CUptDhwFVtNBp2QcQnvmAt3iL7RUhbwc",
  "key3": "2DcwAELYkDYKaLCd8p49saqEMYuT3jpx8dhz6SLbyUF2CfzseF7hkMSEQQs5Bv2atsAoLDpGJdsSoiFXptiekgfp",
  "key4": "5AX5A9yUynURGyXkaD47yyZTz5ptgo8oVg2GVstpd4Wmq11q6Gw2wnAW3qmdzVbgQFWiGncXyGBC5HjBRcunse6d",
  "key5": "3V9H71U9yR4D1oPEJc2MRZ63iCqtev61aDjDrhnXLudtg1zsjVZdQSCZUtwdawo7RDt1nfdcqE1pSv53Fm6cfSe3",
  "key6": "59RJDBojqDcRGN928mjXd3yEHwrRBtkBURpkQoMeM9h6UtKykWe34CLj6b9Gq8WG8NJLUn6gqEyHKyi7nmq3KNvm",
  "key7": "4e6KDhhWzr7kSWLpEVyALhjZhkpw4dRSyyw4YyALvhecBqVE4igXFQ5kGU5YKpN62S9rtgtJoWBvdg7GYqcQYJ7V",
  "key8": "24kzaYvsWpwAFjzoSAFDxkGNbgBSK84pyB3RbTtEDFqjhMer3DMTcJ4wTB9Lx4hms7gDVvVJH9kc56E2scXZQcY6",
  "key9": "445ZxAyxaHPTaL3fGkCCTi9zEUVnsGHigLxpf58EKSHcCynL8UGoVduGNNS4LjWT1Yp9dY7YAXnSYweRGaPND7Jn",
  "key10": "5YhAsShgjedaHgEQsyqyf3dLgHXyp17a9SXyq5Y4Buscq2J9yA2dbgMf7ujkNae598wHNHGyQNik5wN7ZMPZJRJc",
  "key11": "238jynNdtRvV3dZkU7nk6wFivFDWCwTFNTP1xJpBUXq6k7q1sf5YLiskJJoxG1j3zgmJsaEAYJtJbg4BqWt5ikw5",
  "key12": "5PkjpwRYSrCFjoZXJGG1KdC3kyFUp71J6tz7PPSeXdHJDb2ZrNaP3bb5Z1qYVedps3brqa4r3DKRgFG1xXji2QUu",
  "key13": "61GmzUiPYbFnBhYWVn9rVnXRb4h5VitUCKkK7JD8Gv9kHxPtr5dQ7ZULAKrq3UiE6S85CDEuqsAnecL6jDQ5NW69",
  "key14": "6sqxQu4gVCzjvuEjzpELoLCzN7uhdXXCgtQzi7Q8RTg4d2RPqLFA6HNqD7iojFUE586qh9mHRxM8PDDYYuSKt3b",
  "key15": "4dRWASdCmsRoSnV5eEWpYDPjDUxXdCuNp5r2BsEqpYmPhUBacsdLw1Z8d9GnrqDsDWM4LhKW6vqV2w2iTnVRRFdV",
  "key16": "2jhoEnJrXd887jo72A3WoofZanEADkzfXUyJ29Y54YLGa7csYEkuDxHekKWZqAdEGnBdTpkLBUafjYrZTprx2QGW",
  "key17": "2rxrTTedYLLznCYq1sEY84tudVatdi5ejZVEVh9foi1hitk3zsnUFaNsU7EcLcsAcPT1nwjSyf98cCuEC4GEYPfF",
  "key18": "3XowDkGcar4s1AKPdpeHGadt31MAWRF64xQu3JUSPZtUiFF4wYX1HTWUVNcUUcMPw4pyo5E1xXp9MenDRNLLo5Mw",
  "key19": "41Qtt4pEtCkWWCPAy9otkPg2RxaMWGax6b7PcXbwBQBFBT3jq8Efc7SYcqF4iqkbAELNqNrdRwcQ5EguTsxHXNCC",
  "key20": "45xdzj8V7U2hMbGv6NBUPhuT6n9gmZ4o8w8qhQ8PKNN6KpscvH4eAR7P9qbfGDmmir4BSvVxcmhDmfPcwo19j8EE",
  "key21": "2yTAJooE9zmVkypFNkRgwmbUdxx893rrbtLtnFv32ebDBpEmYQuffwHdoR8n7sdPRbj3XNMC8GfFWtxQAthDKLsQ",
  "key22": "3KguJsPxi7gfAPex3SZ8zvu54gZpbUReJZ6ydM6bTTVa7EkN67NXjRpUCCJLFq2doP8uaCJjiHoGxENe1U9BqSN",
  "key23": "3T2oVEqo9VDSV6cjdMjf5CxgoCVR4fgbQVcHSgMUAiQYZN5aSzqgBQSN9ke7LyTzz3iysiY62j26GMVJDrowsexz",
  "key24": "3kkq9epyfU827yMNMToR1pZ9TRt7nuwohbE41yD1hUwxBpPgV7iio4Ems7zQ15Vm3DUMCmNszYAi4VxgiDSQzfm3",
  "key25": "3jTn8R1EmPQPcm5zQcnMBhwHYcqa371zdgSdWFG45VgAgkoBea3FbLLPKvW2PVq7oFEfTfjhMNmdvdLaZShMFAFn",
  "key26": "4Z1iSyinvvvC6fRvjPSszVzS4awnHURxuNjJfK9JsbMwfwSN4kABPUK77vt55KD2RgiEzcS9GRvhCuxi6UZZgEre",
  "key27": "2KRjJJ9F7BaaEFsW4pttQCpq26unDpNgCVf7DxG9KjNpxctScnuAxkDHEBwECXbmi9geZK8YVUWg1dCBzC6v7SRe",
  "key28": "5B6jum1xZC4zH4iu5uKmg3epLvcQuirqWsvB4n5ZDnEoKweLd9Ntn4ufxJvH2vAj6379ZX6xJ7E3ebThUWndR6MZ",
  "key29": "2qBve4t4yJy82zjZER6GuDMV113mmK4y3cxP5fn9ELuyAgpnsXaXZBJBVNaScmmn34k3TnpYDwsKbDxKVCpNtrtn",
  "key30": "RhnF5yayPew8MVXRXhXVny3tgvYoPAmwecjbucyAWC3tCpuqT8V1SB3VKXqAYkL5HTfMXKTguc9sA7LDHhFGX4u",
  "key31": "512CFGiGFKEpXHsxzdHj83B7aKA7siUvBJqe3fVXwxufauuU5NFeNPfY7LpJm9BBp6vc1q9S2DU23w6r5cwKwXVp",
  "key32": "5q4aqQhrKDZB7zooKZKdcLS2La8DhUorHUjN65TwTB12vGDwjTxXafhQK9bfr9ii62bs1k6qcwixAm58L2kp7PZR",
  "key33": "3r8mwZYk633MesYGKbSZgVXYFvRzb6eMN2n3ao6iaUwqDH4krBZGT7JBEytFo1ZBneVfPCo756ZHFBtBWL7cDQUU",
  "key34": "2QmzWQxNimNi4CKXkgqmZkBfCudfsdRAy9JjHgTHWH1YyB4CMj7rgs59Zmg2LBwySWf37VFEDRGxh3JUZhFbKsfU",
  "key35": "61x4VgziaLJAj4VK4jxBgcrKQmGGy8Gs1tCjtwuG54DBHER5m4DN2K8MZiZigG1JqrpHZ9uq8gZdRh2rpdN9R3tX",
  "key36": "28fndNkxW7YWArPrQZZR2zQH5cAzzfEir3wSp2NgRpupD7faKQDBkESQPCyDaHS2N4vaXsqkfpjdemcinDe923Jp",
  "key37": "5mFTpx2GYvUuT1PkhcjfKNBMigrvVGpdRxqY3LpJi2RbHTFWj25FZrKitMZLH93e3v8pa9KYWNfsNCQUkUC7miz5",
  "key38": "4kHnmv91JN6sT4s25PMNZbCpyd4RFyhSHuvnRf8FnztunMFaNznRdH1vYeqdLWevKboMKnVYfeYcxcdRNu9RWvUD",
  "key39": "4YUYjiFdwAQTiSc2pnbtcJd9TTECsujAqNHJ7gvvzZGRNHBb6KAL7p8ummaaF1ZZd1HRY93vkrsoN8agggXdJfnV",
  "key40": "41xHbRv5PrUGeszwv5bvPSFoLwzrQnnw3Gn5RtmHNXXCVTTus1q6xyKixwUZfANEVrUij6eTSi1Uni86meXDg6it",
  "key41": "55qm1TgPN5hQoeGBYbTSKJZfSLYH7etf4YcsWJUo6s1bqDENnpykUMmC22fWXvpGnAoaYhxAXM3fUxr6DM6uXLBS",
  "key42": "2rKjhtMg2pfDVvBy8E9mkkuyuwNuwiQQshpAfydG7urS9h3mZckkdjtDUVTc2Ky5F3zYCaxNK2zgmw5JvqYmDZnb"
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
