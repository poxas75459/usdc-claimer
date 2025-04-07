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
    "2Ma7RtnoXNAjrfAxGeGxqu9gUDZWogfkZuaV3Lnxafvxh95kL1NhhvkDPX4RsduvudYRGTXEAvN4fXX4ByaanS8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AFNsbvrFMLYZumR7wUkGLTM381WkFhM9zKSjyFo9Shf4vrW9hNSLxFMs3wj7mhqoaxv8wVCpN8UK5gS9FLNhHJF",
  "key1": "62JLY1d45e9DseDSdEJUsHVUMpM47nLSoCP8bPuX7DaTCW7m4D4WT5vMMta6soedaES5fGvZGZBFsvzQaXjXLBgf",
  "key2": "2n3r3X3Ge4xad5BEJ6QJWQL1PjTMeZYx4SPV1aAvqnBghv9CJhE32vG5CHLHbyXXBJsxV7mC6kAERyrMSFL9CPMR",
  "key3": "2JPzYcRj6DkBvLQRtHi35KthUodxHKeSkfZa5nyfBD2XBJs9zAx789dtvkJwXN6mrwjhPaH662WB3NhUwoBpUpQu",
  "key4": "4gYzHAforGkiWJ3vuiKAarzwAR3w1T6WQ64vqJ8A7DdAqiUgUJKKphxRdZh73izoQsZf11XRaBw3HCnP6NwvYaim",
  "key5": "akouXPPztUoRsX67hRDTcrBiCnjQrVoKwGBTv9KtLGG4wJhPSfG42wxd2UUoaPtr9qEBpJSzYfMRCtfSAafRfzp",
  "key6": "2AAHnzdsA4KxkF7ubPbASQRe7MEggDfAhzikNiiEtQRKtHm6CKiv3UoXRYV3ejEakY1SXYxPHDoa8jyRQNDBf2Ah",
  "key7": "4uDthExAysVQGGrNfqxLc5Dbm1fqGQFMfuXaP94R59LQmjuWx9iMcdqKmb8t9MRCaetZL4sSFs3xLHgRMi4XuFoS",
  "key8": "5xZd5mpXEuMQfxb99GUE5CvSTYa4TVSgynMJBfFNqeSKhHewScbvRP9rrhZc8XpM3nV8rm6SE7gPtp7HqCLbrwQ7",
  "key9": "5YKngFsBkxqg7eA2o3BZNYUaaU26iFM7UhLKn1fFsB9m5KYb5STMaPHfpdWrYjy1z5N8tS4LaJEmbacaWkCinms6",
  "key10": "ASyTTYJYFzAogEf2GNye2XYC22EA27gD6BvcWdBdujWgqFoEoLQMBDutz9BcgyCTZYxbRjS2PFa6Ed7euqPwuwF",
  "key11": "mYTfrftx7cchiPy2mcQKs2vNLT1XLnRjUdKKd6uNHEMjxzoiNz6QyrY4nmhQCaqbiVZZkfRHLoZicVsjV6zvTAa",
  "key12": "4NdXvezbXJecyfvfPKjt7R9LJ99BXYU27kjzsNcUS6aB37n5tsVXe5DwoPZTyNXJp8iFWj4LiwrP1vokW5EusaVf",
  "key13": "4qv2oYhpLXwrHZxHCGp8rBCMzvx9kJCUBLWiNw4fx1qYtMEg5k1QUbcRwqDHFhjhKEkkNqhTpB5yV2f3Wrv7vm7F",
  "key14": "57BUxW7FjrXJrNfRZ5VL37vnGM2rv56VwxydQeyT1iLTyV64cUc4gBVk3ZhgCT1r7yJjTWcrk5UtdiPNVFEDm3fG",
  "key15": "d93J5xwVjk68EEVUaLKK84nCawRRJzxee9bUHu7cDUi2m2xcnmpMQqn62BB6CmfmPx21wuya8bHEz7UCR7gkiJL",
  "key16": "mo3SAt2v1xi8desRay4FMrAEkxUgk2utigxB7YyAEsaxsjMESfPVQuEfFmV8Uxx8RsA9jK9zhENdJBud8Q8NZDA",
  "key17": "57kZqPL3rwdhennvsxHyRoKZzKeJiPTpajMw28YuswmbXVjYcw6SfZmMfyaV7FoginaSYJNHYKrFei7E7EgaQepb",
  "key18": "3padqdqoMR8JPhRVQZKjaqgk9VJwNTzaoZ9zufqpnKxHcivtwttF8DRKeCcQAhr5MjVhSCBXpT6SFXSRYnZwxpjX",
  "key19": "5UwGF6obaEteh2As4KhcdmQtnu8qENqWw2RaL9jsArZ7pwZRgxK9JVnRyotzwavg1cMzN7Z1zR1uaxde5haBkq34",
  "key20": "54ti5c2C8NY8YwW5GaxmKjE4jqJB4TaDjm6Zr1uq1KPkb3ATakuxoSHvKDtt24Vf3WkQmE3AJp4hRZMnoWmLqTEU",
  "key21": "4ijLaeBEGJUkgEqqMbkkzRurW94gLoBRqtDmWjkCTpjYzZ6xYjUf5qj9oHwY26h9dkG1LHokPSJ3qPfzTykCZf97",
  "key22": "2jziXq5y3s2GjmTP2xW7kfeesBG7Mx4KJogT6sDwFHF82wMMpekyzjXREDC5Krn6RvjTmSWrt7xHmVMRoox8YaWh",
  "key23": "2C8ooif8BFJH5jy8DKqbaawUW1DBXAA7cVA8M3mCYpPgqZbAkyp2jo6Lvrx4HPGA9VyWHtRAqoavGrUZzmnEg3kU",
  "key24": "2bRKmWG6E1dge1FZLo89TgPm3ChbUe1cn8ejTfiUQQcjncStUXVEAjTNKc44Q2G2BzYyQn6gcaDdv3T29DYtJeEJ",
  "key25": "3tdGPVDvXPUAP8bE5wfFC8reLegkJub79GpbeeGHh3zo9adUYCGsDVF8teRGYkbD1i1GvyRYFTfoAJesjosgFjjE",
  "key26": "632fhqgZqhwoULpkxzMDGEiEyEJ5LDUNAVPxBw8t7wiaLRSZoCEsuV7CAkKRcnpupAVsovQvbcZq37No5QhLXSgZ"
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
