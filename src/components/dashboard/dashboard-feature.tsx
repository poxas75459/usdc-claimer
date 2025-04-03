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
    "2ZpMcwcfeHS7xYVPoXGDAsFLxcnUVjd6q6Y5gCYM6sa45Cvnka86kEhtcgqmWPEnh4GAETTkUzyDUcKrjz1tKXNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51hDMUg6t1AeTjcbVFW6AWCn4SZcWuy14Fahsr9U4qMy6aLzkFYsSrVkaoBve3W2BKBJzuywuZJzNhvPog7FLBms",
  "key1": "3SeVsLPUrCGmggtjEJJqBaRuLAboqz6VgraG2wYvLkiED3VpzQe2JZ8T2SUyvcLBSDFUytPi7PkiULwgCxaSJHK8",
  "key2": "4fhpSqPiQxSFpdWKGLWyr5p8kCKsoxydy5Fqyrm25EDW8zhbm3piA2bbMQvyLTcat2EuGx9FZNT974E5z8CF7VLX",
  "key3": "2yabFAzaraJ6KHA2j7QBDadYXJF2nTMTuUDmCjKARo8KMXVn122MVxmg1t1FySYWdKiRwDSLAJKTvJaKqbzEuSek",
  "key4": "s8RLBU7SUgzT63UsQqnSv5iA3GYi7C2YLRRuQsHcushPtA8DTLb1VFdw8hAQ2ZHyXw1E9fGhBEVMFD5Wc4b88vp",
  "key5": "5V2sJVkCXa2p2WpP3ZfnBpJTpkzh91bGxjpwSj6pkAQ75nNzEQ4NXDdfXDsTcxzfVMbsvBceBn1i2GhHerL8HREf",
  "key6": "2YMsXFdZz8ZQyZVfVBUupt9QWhLzo2m2PaM85DHnYPjS9xcriVHAr9XzCyAtSAYFmkbcxtngfDVK1APegQ79Ayqz",
  "key7": "4vTYtME9UW3rHdTJUbKwXavUjpQMFBQkmrh1NcYBbT8hEknSKUSS7oCEieZWm6zrggJEEnp8EbHqqLBHL3y21dB5",
  "key8": "wM6LJeFc8jqEZJfhmbktK5DHHssLxnk8mRBrxR2JMSVVQUZ4Le47p6WnBzqDDtYUVC3DyafqRaUPJuz6E8h4ib6",
  "key9": "3P9eEdS9WXTKoH1J5Eb4krdHmqWXDJVDF9bwuZEtvpGX7A6nqbZsqFVFsyswTxW7Dwnk6hsnQofRArCWrrPkA42X",
  "key10": "3wWAw4aA5MeRzmRKZYAhd1PL8KBoWebgiPmTBtwJWu1XM3G7NfAuAEtUE51x9ownuBXihLHbJfJVrRJsYDthiYPz",
  "key11": "5YKd4QckQAHTMnpvwjxmUSm1xDnv6SB2L8BLpxFDU8141uYfxWvfnUBJEcpULpkKoLgYPVkrLf18vr9w43FR7G9f",
  "key12": "3FGTnExoBq7qm2HWR9PTC7L5SYf4BDBjdYNbPJHNLRFX2x4pfLkci9GPVm73MNsddvFaHtyhAsx6GY3FcCAiEwXG",
  "key13": "2rTffLsJZmkNdF9334GWZ6fCa12BBQqcaEenpKN19KEJ2MUfEaJ1i3rtr4JPuSStNQPGNBdsbezezcT5vKuzMPw3",
  "key14": "2vfTHLXzBufDo5FphWsc8rU2onWQkDv3RyGHAvj11qiYZcPEcqJXbGWoGmBogiAfUHLp8efCbzYJqV7bww7b8M4H",
  "key15": "5JSXaxm16wGZX8Veky9AYrpEuMg1xMjXB91SsfMMUXqij6GMCwRbRjKYBuFKQJzyovEE17FMHaUwasRXPmRSWEr1",
  "key16": "3gErSTy1SPacr8fiT4ufv6y4f8YYuorcdDhCjhQgqw2HxVMATTwB9KbQhGuPLeEoPedj4Dxb2V7H7a49fPbpmapd",
  "key17": "4kzgg3LpLdm4GvhZC5e82GKxk2ak3SVPvPVZ18csbwCJB2hD1mqh7vgLFhuhYosBttu1uNRtd5BY5vNnAPbjWirP",
  "key18": "4ZLYKzhRywNdUZ6RLSQvQJEH7g5QGmTgJ5FCBpN59zBv3JByUgqHboiqzkEEYLFf22yWtVZbS5mN9Rm47FUesiJ6",
  "key19": "41Ue7esG1o7kTAmxXsUUjssAHS5vZGBTsC2CwDH2461Rn5PNr3vsa4omRYeH8gt6dMsooe98pb7mj7G74KrSGA2i",
  "key20": "5AF5qxJpMLHZ3mp6owE3HcSHpLdg7kp7pjDEeJT4EFM8QuqxAu99BW5q6HHZAxPUA5Hcqn686atfqRkowEmQu2U3",
  "key21": "22N3qmqmAkkf2TCAvszNhFGLhtFMnwZwWtWQ7VeXZNBApFqRLvsedtt9sNoaFUzn6vrXHJkNQkzwy8ttWf7nZKXp",
  "key22": "pfDdUymSBmPTeEFFjxpwz4iojNBmTGvPE2U2kzDeo9xK3xrzr2RXe5669KZPe6WAXJ2cRSsSDq5BKFLsCVJiPcb",
  "key23": "4kh4u5dg9bA1dpoTQ4BQEmJCypoWM35LvgkypYayb7htTutsGvM7QkXUTdSJ4P6X4LvLrQURAQmHc9VWJ6ihWCua",
  "key24": "YMgDbKxEVDzApML3KLj4n6zhL8JszdueupEqcsDEYmaC4bFcprX6w7fZjKWHkj93Augek3iviySKobxC1Mgz2Uh",
  "key25": "4E6tWiY1wSGEK6QC2M6vojAkWTdTDJwQQEpSFvRCLuKWUWTiFj4e84j2XsBhi5p7LzYL3FJaK8QhEAvZjqsp4ew4",
  "key26": "4cbSMeJc1WBZdzMGzA18Cj9RqABswcQmN4AcpkvMjKn8x4TeaRQ7Ed1fv7snhWiiANCpgPYCsCx1SuhbX7LQJ21z",
  "key27": "3jDHREb2KiGi6mV9ied79gMNhVFs5SyJTCrZ5xfasPhMy81B3sS9grg7XYZzDXaKS8r3kTu6FBRVTwP2rmX5iZw3"
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
