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
    "4e4U37dnv789zdLmAywJp5Joz5QikJp2emRB2ZfHpkiFN6xyg9DDmeJSfdo2cisaa4bD8j6v9bkRW6tsHhfX4AWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4njFJcEznFEszuioJqYmKBaBdKsoWLrT8pQUufoNCJzbqJyC3ueu1VPj6DzP9461BddhCrk66Cdr6oMxR4goQrNR",
  "key1": "4dVBa6VThb25cijZFtTwkJBu8uXBNEBLdMuSiWe5uBsDcch2wWt8p6DVcsuhJB4sECLHJsbJdqZcuBpvYGFcBTRh",
  "key2": "4M7pv4Qv6LKL5u12vgvxw4df9JtAYrW4onrwUvt2jhby1DJTQF3GYJ5cCwdoi8PjW8iNaDdPUkMUoK5ZtH415eoW",
  "key3": "NwPQ4CV1v4PB2BnYXubmx5pMxUA8eb4x2sLgpFobnuy4ziNaMuPmE2KK9UZCjREj84zfanyk3e8Z4CdJaxg7xNi",
  "key4": "32yg2XZHzBrNxxART7nxyDdbHuNcBCZGQKKBszk1oc3iYCAUNkFkezqyMnsUcyEnugRkV5hMczn26rSBoG1zbiAk",
  "key5": "5Wc9QBsAhemNSZqvpqWE17fRqEyKcGAom3PEGxm6ifymCrRJBj1GjwDkJG7dznnEzUdgPRDc8su9JVxFWFir5P85",
  "key6": "Jyx88Bp9PtopXPCx5EAJ8WFyZKZYdWziYEGAT2TmH7qJWyiLh9Qg2xqzmxVrj7KrAt5LAXYKZNSXjApq8YQahF7",
  "key7": "2wdV9HoKGCvdnTreeHUMzR8XhXLfWDAA9sxEtqcG8nxsh6qS7QcAVwFGdxWKYib3aTy9i3FxY7RRBTf3yvfhFXtW",
  "key8": "5eYVRNcfLB7dujYTtzq7zWrRaS8EHP8J7zDr9ANHaX7Eqg6ZJAFNJ5USkSeGiUZaQ4uwV1Cy9KkhfFxDP1YFQAQQ",
  "key9": "3Kzv3Nq4GJFVbti8sny2Ynj5Bn3HTmjWh4JxnGR71UrUJRYj8MWLPMJebwGvttTv4XLTi1G5icQQG9UY6MGJ5mrf",
  "key10": "6487prv1djACPJCZwj4orLzNESDuTqMjtHBNPgxJXac3qAUXBcFZWpXbLhZq8yeTSen3fX7HBXmi8MehKa6Pik1Q",
  "key11": "3AK7eKqfC5fPf2kdeSQ2PSD8U8vkQWiPptcDr1dCrkDdkqJnGYYo6GD8SpkQob5yqyWUbeLZJU2DRqR3UcjrtBrG",
  "key12": "2RtbFjMGg7wKAwa1cubupF3LymziGQ2j5A7Du2feJreLoHPNJNnoLca1iEuPxruDbLdXZLUPiRhjcNLXcNbquj3B",
  "key13": "2qwUfUGJyULo4AksmUPGs5dDEKdoBPhWViePrzqWyF5zZmKxTVhuHNeBZrafAGsrmzLR77MGBAP46BkXeutxAfNc",
  "key14": "4rkE1TQa6eqLL5LrNa4CvrYHWWyL8CtSCyHPN3QHzDUiH84gTKKVKjRHYx88dEZgSJewrohZ5mNkvfaWWrVBQWoY",
  "key15": "3tXB91o56UnKm58PacjjsV7pLgjXxg3Xm5mxeJADRQa1R35ueQhNGREMJmmKVKWooi1LUVyXKrvMJSmbkFdfybAW",
  "key16": "3URykZUzvU8ubVjw9NxiM7Ed9A2GthXPemEJHVyxe4JnVhEyMZGkxA9Nfc3rE1bSDXySE5Tks8BpRW5HwdnX8vnY",
  "key17": "4KpC965gXTNKwCdyq2rcMzj7HFnTHv4Sdp443d1DJ7F6r3Vo4j7pNuGVnftwtoQfcTTusj9iYk4eeMvjDbKCk7ke",
  "key18": "38J4KaiEpdvwnaRrTZTQa5y1bhrZNkXnYs3KUHUZQyUsPphxApQm7Ev3mLMHnwgn5RAsHfkhgi6jU943AbZC95Zn",
  "key19": "QRSmr5JBeZnJijKTPyhFB3dPsU8nSQhrTS3CRFkTnh6bwcfJBc3M6kVNix8DLmRKAaTDyQLm67zE8nVNJn36c1E",
  "key20": "wxmHzpE9LGK4nKmefxW27s1bM8Nu9oMGDqLPJV2fNWGDHwE6G4cYFodc1KzVWN7En76sKac4hAysW7S6MZ43vt6",
  "key21": "4U6r4GMavVngx9aaTrqY1hDJmJrZLsvFgGnPJ2ogU5rsNf6CjJ8S8hjBREGk1WtkRFw2KJeUeV5Xt5APXzpMPVb",
  "key22": "4JgeBPaVWCp5f7vcn7osVwGW3pxjBAxmz1aHoJyyUfADP4XHpygdZqYgsNPdwC21tKtxhNDVhoeuBkrsraHLtGEG",
  "key23": "4UMbafP4rM29hPBTkR26f7sTBUTLZ8puXdVtYboAeHBnWJ3h3VpAEZhJhGYX6e6dg2ThT9NzQLK5X7Xn37ToGx98",
  "key24": "4Cyk4ZrWuh9ogFnzuS8mzWjxzttXkaT3yd5JSrFDfVM1HmzHQisGxBonhM9pR7XTa2nybAV7Qyp4ft6dhvXCyqww",
  "key25": "3qegU7NQiyXJQ9XL1g8H6JYTjL5aWiDW2MvWzyJnXEGsSFjsCCW74Gs24vuZ2BeWUxj9KHdk2kiTCfzapnzvQry6",
  "key26": "3cSMCHjTsThUFcciTKmJY8ETVMYszrPBkiYB6kzqX4HdavQpY3ZS7idqY7yaNStSqqvqqJzz2d1mfVF4vxvFyqEQ",
  "key27": "teHXwqQzhCsntpXiNPLFtD8GNwPqt9VA1Nbcc9tZA49Uhazi6err129kQ129EKi21nM2hf32HJ1c858Em7dyrkq"
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
