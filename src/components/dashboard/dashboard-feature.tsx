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
    "49ZTQyvfqkRv3EFgpzt9gcmAENyYr3VxLRVo2ruvahwWWZTk4maGbbPLvrjSbNpH3fAEXK3PNCVaFGrWuivSVDWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iAMrzyw1PNEsa4YmjqiKm6TYsAwvgkeAJWW2ir5PkAa8BFXhtXggFx76KxFNKmtR2M39JFNw2z9HcQsKqpPuZVF",
  "key1": "3EDJsrDYZ2x91Tcxi7Ec6ScwYgLRNsPrTB8VEWBkysPaiQw5VvN1LkYe47n58B9LbFAxN82KsxW6nrdMzAnp3MY8",
  "key2": "64A7uX9Ch7L7SdjMfNgHQErBvsXncLGkdg3BhZoDwJ96iVVk1hNbPt6pS8pGybJGipWPLqKhfvzDbRDjwgfGXMQ4",
  "key3": "3k1xqNVRMXJrbnnFAaQ11osMELbMMcf3Q216eJ3Cqdoto1FLaoJYkLsP8dJe8bBDzonpVpJiRP2EhCJfeEeWCEr9",
  "key4": "4SXJBzS9frB6Wnzo7cDCUMb1xU96pLfXfU9vquCw94gze5GbH9g7KZ6pqB5fS7ooCsdYTPUaQsGubt4K9UaXsGCa",
  "key5": "2JC299yL13gbT2W7zXwoAL5VapgbXb5VwUKMEh78hkFhJ6Gte1rcVrpSPxRRnBeW9vjLTWbHa4UvvXFnLqjiz9CA",
  "key6": "4SB3e6SBku5ukDBKsw35k3u9QYmVdLNfQDsBzhPTGYwRX36tyJGDHAmYV4WM7r1aYcTPF8BNUgTX1XBRKdBZH8Rw",
  "key7": "4Kkw4n1rHGoWZtqJaCtt8hNQKoSHpdPhRJyVyehzB9Tjfkkn3zfd1GzP52EfCxzcz6XmiokPQhGFb4d2hwgx21zh",
  "key8": "4PUZNFT8kUGZ4srCrjsuidT6uVdo6gY1LVqudJta6sGuYy4wYJc9gqEYA9CJMdehJMm7nW7cp7H8Bt7EM3bpFErv",
  "key9": "2EjyC3kyRf1ffxDPEigT8FwaDmiPUX8nLLcwG2xnugrFsSeq9bF3NfYjx3EzsE7SaCQipUe2oht4549aTgptghSM",
  "key10": "2cKYynDDnaS52NtcZZ35YPEaU12ULDV8hxchRcx8dueJUjVuA4vQvKr7JgLx5CpRW4xdFMnRNPGzp8SVMeiJj178",
  "key11": "4RiZt68Vk49otrBFyMzTxxemqXDNJFVJLEQCr2M9x1PZ5mhU9N9f6WowLxoMUr8jSLZuZfCrS4pv4LB6icxC7n5b",
  "key12": "3VCY1cQ58bWv47SCVY5AJo2RaVvH5B2c8K8FkKmSCvXwHgef8FcjhdosHvPddfPwScjDT8Ljx1T2jXZNqY73QHEs",
  "key13": "3RLdvDCab7dCyhmwqsf2FJRm7kc7GJHgCndNy21kek3GSoEUg123Tcq8dLLduShFBKXVpjGemL2ee53L33N6rvjs",
  "key14": "3rXsCUhXSpsfS6pyLBSTF2SCLQVwXERvT6DQbYZE6436QrGNr7Jz4K4PVw5GcCNmfDJoYNzcT1ymkSURn9vtrgom",
  "key15": "3XJUUzqhdVeQ3f9Mr8Z2vpqazmHSnmcgchRAti6XMCmK3DunVTaHVC8JKjntMbYojgT8FBxy4K5i7GHM29cMVSQ",
  "key16": "73wbswFwvPNfPe6YFMhTezRt3YxhC1Tgv9mY2KJK2VjszFQgDRFjwqH7LswGQ4BxmhFxpsTEU2RPkx3D57a38Li",
  "key17": "4KaSNWhmGroWMEkfjTsrgb8z4CdKTva2c8Ri1L6Vp39oGPdJLJrHnnCYfxJRtZrWMyajA3BtAcXJ8orV71WE5mNA",
  "key18": "3gTZbtrTJxPV7UT2MLgNMXsE13iiMKdjGdyNqC941tbeXShH5uKtisDV4zUyr539jDb8rhBKtYjZVtVBX8fEoMSr",
  "key19": "2YUB3gSLKbFq63qtnmVMH2DgQigyxKNioaGe6SYUM4nLb6sgxLdwZHfLGeY72tCj8Kk8Fqo6tnnHSt6ANUEhpRqv",
  "key20": "5TsPedvpn9SktBhcFKuYnopY2SkQ124AXvUStQXuYa6cZQ9BamuCWZevSgu4Xng1RV129V7pz2rmTw4f59Yn2As8",
  "key21": "66tsyXfa1eCR3UEnyLA3trrJkrnVLF2xYsicxThTwFHbzeFgpS82VquGY1vVMXYHZfsYZJ7WMqM6AHBzZwb6e14w",
  "key22": "3WVEBNTcBahbqqHQK3w9wjtpAo1LmDKoZj7M5X32YR1LKKCkexcftf8jFEs7J4nMmXX4zKHp3U879VguWxvxjVhD",
  "key23": "4FmLy5UWMvCeLbmFDFm4HppzFHFZwRnhJGRV3G5JoejPYCA2qEiBvTZCdmyKjTorSLbGakhuUJEKGaHarrnw1emJ",
  "key24": "273WEu5B6Jhdxk6199KKK7f23EN9LoUqB7ieTN96ZDcbwJTJtMeqe3swWGwtgtwEJoNZtZ2BGwqW3trdkYBUMfaZ"
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
