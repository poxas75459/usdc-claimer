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
    "gzUBcDraEsdNjveETqUhoXCV4W7oQHyZkeEz3q5iGNp6iZVFZrDa2vinvTvv6kbGMwomkFRsUYt3WakuEv6yZg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w1KSBTrKWobxsXaLz2FbJwnrnLGESYdejLAxP7DBeXQvbrZmJNAevcmyFzYDmkZBn5SovnK4ffKJ8iZfRXm9gqH",
  "key1": "45eS9p74kXxtNHEoWtR18yc2JYysF3qY1g7T9WWeoyGvFmRdca1u3FAt1JjZnCqmu4qG55f8rxwGixYPCJtbZCof",
  "key2": "xcuHxmUP4yMpEvV5uiRLfGFyLWuK1HQgFEPPficZoFZ6YspfV3uFUz1U7gLcuU7zfZhnnfyey2EfQUG91tZiLkX",
  "key3": "2w6UQ6iviaBBR8S5oDKBhZUpAK4tDVtE2me87EpPYzLve8HnkWBc59LG4EePMSgvGsdsCKR5dA7cuW2s15EqEgC5",
  "key4": "4669bsqoG8LaKCFpTwSiYbYUpdgo1Bc8puaELyFpVipQanKkEo4KBaHNenFTuEaMyo4F4MvtFPH3aUMXdeekrZDp",
  "key5": "tyXFDhVaRfCacHjE8N71eEGgmpUYppgKRoApE2WLQ1ufUpXrL2eRuVcnQajGA6brpANVnoseACQebNTq9s4dPma",
  "key6": "NjuYH7ZrKqwaMuo1ouDGC5evieHaX1cLK45FMTxRSujXbxFPbMyArmhgra6Z4EENS7GC836Tu6hb9FYgeV477P9",
  "key7": "4qwzk9C3PtBZ2KjikWY3ViBsBM9FDpBemHAjqvwoQ3GrZ3qbWqbis5T2S1XaaDZLZCyjUmsTfcguQxevbYL8kXXg",
  "key8": "3W7KF5FKEuaQnmQDqYWyWyCSDvSKsW8ta2mJNg8wUeCdjLcKm54cxp9tLXxoYHritJhNcTUgTLwGjsX4teUkuSYb",
  "key9": "5xG5mCw1SW5qchAobVxFgawhWMA6RpJ2PzZN5aL8x56mfKyVm6JzAQ2FJKonwx4wwdPBq3UjJtCux9x9Rv5YXRMd",
  "key10": "3Hy1WJngx1tWtNM7cLnyL51PgRAmAST97VJuD21EFAb3CSPizF6EbHzppkTPkoB2tj1fpA3MJghoLJ8KxtkKLcj6",
  "key11": "5SsppcPCUvC5tVUtc4cx7yCSKDKdehb3DjBZxtLk5QDtCKQXajbKPiSfmikf6j16meCufvVgwWNA3N28bRQFVFzj",
  "key12": "4nHrmVkVomCzFgM2iXCQF98QEUiDZ1JvcH1Tgsh5Vtxixi7vhqGeQN5NPMLV7zVo1NKCEv2iPdqp1o1ZAinESfMz",
  "key13": "61eceJEMvkSLqrAaB6mESME6V3e5YToVbwLQ3LZoXzvmdqsBKUzteA5BW7Se5E7yzS5X8LkCKSVgeM12ix1rfptL",
  "key14": "HwVN2yBt6YHx1nAZtrvKk9VaZi7CrFW3dCB4DcXe7Nor82jqKmLuvhKjySoqgVKGYa9F8vBT3c5Rq7v99Bs3EF4",
  "key15": "5pLy9Z18i1tZ34tAZyBMZXJNGYjeg2jdNjyrRgMgkyKkwN71nqRdS8XQx6XiBsGom8BGoaVpnWP5MVtaoRAdmzB2",
  "key16": "3kMwxh5JVrhMxzrfS6EN5EVMUtQPtn5DqaxNVMBwLTsyyaMEayowWzpoC95Afc8enP8SJ2ANpQoXsqHgaZHcoi6r",
  "key17": "4LDtJTWStr88EX3n1NkwyaJGSWRgDW9sxNk9zggv1C3qomRDVFxE35d8kfS4vvZcMTS18b9S9MGP8L1qQfgDNsZ4",
  "key18": "4yc91tsjtiE16Vnmw6hxvXssTAk6FzrnmVtfg6h9dmRtDpw24FZWUTpZLUfWm5zjowNG9QxoGhBkiVT6qTPSaywJ",
  "key19": "2HELDdBVWj1cqUTEB2hAiBAN1Y7bTcYThfLy9VaCVXzqsCnjW6M4x34G3q3gvsxmgLZiiWmsJ8mQg7JGUNTJnqqL",
  "key20": "RCiBopbwnvKNkPEdZ9oz77MThojWQwqGjMW4etbLX8grzhfn7QN5snyhcwMpRjATakkiGGybgE9VS9MoiPwurTM",
  "key21": "2UUCLY3yv5opgDGnKDYcWYAaEqTZbmY3BGoUXYWPowpt8qpSHGpSAptfpybo4gnxvjETBULd26mjFSB3uQxzpD93",
  "key22": "3TW4GYP9D2mH7Ysa6rvPJRsUR6ecmHRCmKUTvaJN7DgRTWD5CkdHUraiLEK7aFmWcWXbWWUAvAhmWMVKQEjASLbV",
  "key23": "2JW4PXZjeLHj27rXHjrdeev4XdeNJwPzz6bUzhkTa2xUUYC5gBc7de2kPuPupDtp9f1gknjY3z1VPy1PS4UwBUiu",
  "key24": "Dk4EgB77FVXEjoc549xYvr9sgpHYpRQfe7y59v6u34Zj74Lr4bzvZT7J2rrm1cy8GtNATFptJdieGfp7ET8e1WK"
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
