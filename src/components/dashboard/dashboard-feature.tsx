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
    "3wRvgUZmLQ75F6UZGC1P38aP1r7Cqg2658aVaqPgpnc3ty9PPhHHG6g5LiUFqqMx1TBSFrbWavzWwWPs4r9naFxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZXMEEQsnJUWktcDjqcAqm5cUzfW6sNBkRJYDNsxr9RQV5dY4eRGNKAiS2WFaWXETLMgAPe4baGom1q2vtewqXjG",
  "key1": "5wrRdtvSwPT7WpdSRvnmBLYdrNVXpPRa4XM6fi5Qytz22oE9RezcXr1yTQNb6VhA8ZQn3sc6WbqpYBzPN3tnvem9",
  "key2": "362ciinFJhwvbGB5SMgdKoGjW6JQ6uaJLbnvqeUbBEFB57ck57HkrVDwgfQsrqUsp5ifY8RCfgX5xS3rskGeKUvo",
  "key3": "4fgTtcPNqY8x5NSVzqz8pbyRUFoqfdrHaGngQgxWKSRwSBZE5KKKx54yAPEMX26XzsCtj9J8DX7h1m5uDtkudvoZ",
  "key4": "4ED9cdUfcjKvWDrJjpEVLzMEL6L7wj6tCenkCcwuUZr2ZVxjYbV34QzY4F1HU8HikQgFEKDb7Y7jo62Lc83wutQQ",
  "key5": "5oDjqttTqPDXmpcGHExPm19K3qDPrZTTnhMF8jqBEKAsspyS537kfFrA6k8FpMBrLiek3CKmYm41ysfMdMBXXrs2",
  "key6": "S1dyRGWhMYyhG7zdu6s9Ff8NZ53u3BS5gcWusYDnxYeRymLRw6LKwgGFXYFDxpgmjwcNDsRNXZJEwNhz6fkPgec",
  "key7": "45iTmDd6YiiR6yEGDUvYKuqGpyhhMYk11Wc8FrcbvnZfBxRUmCU9dcYBKQq8NBGsNuWkjquZfspAW2LPqFeEBkTu",
  "key8": "2FMKc6ydgWpxsZNMdGjAPLacz1b87sTVinoEm9hM1ugiPY3TovouWsuLw4Cky5W6NdXRAAcq1cPVmSbh1VJZt5bw",
  "key9": "4scgMwS63y4ucd1sKzTzEyu8Z3bdEneZ3Qs5vhpkPPC1J2BXpvzsAhWTuenEP9VyvTEyswGQwW3BWumYfPyw7Mer",
  "key10": "ZsrJJXQxdm2RixUJvderHpW2vU58HbBvBeeeE2N9R75Hc7Yk553W8Mqxv8F8RVMvng6a8VAUZ5gUBf1QxnHrVxP",
  "key11": "Ecog244dzeTzg8ipasRyDVpLVfak4dRgqbxMz3sgPde9fEJ5PFnbHjcHC3oJo2yhZPTttQ25nxVe1mUcYpofEe3",
  "key12": "2FVeuapmeBaX7zanx9hdiifucKeMmUYiz4qdCvhEMY9XEfv6fS2RdjRfSNiLMditxJNXuhSDvkjKXSMp1UVoo8AT",
  "key13": "2idNrft7G72XhK37KQqdJ4ydhjM2bm4QcecqzbJR2btyoJJvw8iqi72oTnKxmWTwXGFi9F8QSU9VjbC2J5YTWkfM",
  "key14": "3Co5Tp3TGmX2dXeDthqDMPpRUhcgUL7muT218n75MJQrRzs7bAD7ouXtQyM3eLwEiWWmrTiCYx6UdTz1Vnu6DZup",
  "key15": "HS6tLWxcKYdzsas67zLgEcjmEbaH3rLHJzy9TyWuyFYKenbRuii7nbFKBY3YbMGCtH2tXVjotpb5VZthG68HHEj",
  "key16": "3C1N2Bt5wGpW9sCdTPRzhWwhFUf1qmDGmPFJ2mt3PfU5oCNeWjfYUWjiy545GSkWf3MvkFTa1S7BD3qPCUSJ6mxD",
  "key17": "5Ewo5A8g8No4k43yoY885WP2WpBn1UYYtxiL5pW9mkT4KJRXEeJEAC3ALSqAwCaLy39Tjz678iz1U6AWdi4HBjJM",
  "key18": "3trqtTPHGGwZNAqmgNHG5MK9mG9CsJmQyHRsFHx2rpojT6a8SWHJrRig1PJW1p7VUG3M8n7ds7CoCYewTKZ5L14J",
  "key19": "54RGhDc1D5Hn8AeH6aynexXxQR2hwZxuVaLDzp9ftwbZmwtEb3KGbwAG9Dqk2fFeqqe4Mh6JPK9aNsFnud7UBnB9",
  "key20": "k1CWuRQv4XFGRHFZdvtAfWsaMyqWqe2LdmSwXuXW7LP4BDpzBJbgnERqNj3kkngjNTY9iUH29fQ65gHWuH6xrjE",
  "key21": "2cxAhfAdwq6ahq9V3HEkHgpVPmzL5Wkn56pESS15XhFJdEZLJQs7evFgwddC195f3cPQeEznEG6BBo7KgnYCLf8n",
  "key22": "3K4bqa9VgjnfqAggHQCKLPuxxuu5GR8bL1VXmVNPYkP2UHksn2eCvfzjzqH1FwQZoAWUrLEL9EHTHgwbW3UGMteS",
  "key23": "EGCXQ2Ne1QJGP1QBVvR8U1wQZ3XAoEzGaBRZY6SHNLjzxwaSoZ3hdTbX5dfbMFNSwuJWqpQdCYy9PVrsyEjpRST",
  "key24": "5QLc1cZS4h9UT2SRPoVXbemSwWsAkKPsf3gqLhogZJF6CJkeVZTHUBfmrHDAA7Nf7JFhGBgL9VL7XVLrDdj6eLmM",
  "key25": "3Pg9E9QK19qcubRGG9JYX21PkzhKv2a8ahFSonnBA11TyNWF7dNZGqskrPresoBNdRTe2zL2kY6VyUsP943UE6FB",
  "key26": "BKM5TDwgU9kUSAYCR18Syo9GsPpPvf1r4mRU85RWdrLqjvyb9riHjsyJX7aR86Sv7ezcqSwr9kF6jf3SKGnUonA",
  "key27": "5Mo7AhzyyxzUxHBTn9zadJSZce3tYu3UtgMPAA6kn9HPEsMzrrZ5PPn2XUEV87RFzcd1iwjGuSfHXz5Y4rYTUoxF",
  "key28": "4cpfZqmbQ66wHxWquhF7WbuvbdFfQHGv6b9X51UgCRQHwsKYbkUjjkiGkqe2yZvx8mkb55sdnDgj1kMakezKyGrg"
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
