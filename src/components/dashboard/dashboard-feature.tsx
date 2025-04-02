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
    "2KJo8jymcjv9qWCvCy3FvNUxs1WCi4pygKWBCobHLcG43uTk8rDKaHhCAbM1HeRaqucQswzqL64t656d3tRw2zrX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B6ncKqUFWHpt1DZssAaZE7xq8rH41gbFu1rof1eQCP4tUxGyow11WBa42mSGsa9mNXq9bgDEHQkrWR7cFH6xxYH",
  "key1": "2J4hdQEsPiqcr36JeTLdchvELJmuNhySyPDzb7uLzp3YKpUDhhFtGohUTXCmsqSczo925mKzgyqhLLFHpQ4nLjFh",
  "key2": "3EmwPQA2CeRuFKrik5o8sAr2cr14Xo33k8q6XczUSnMqsUcYwFnsUQTbMXLbUeWeeKycN3v8vTLAUWrgfoNbcwtW",
  "key3": "5Cd9WGxXWdxwYcGQrnek5sYGyHre2Gw87khvgtDbueHSP45W7Y5G9HBLuy8RXepDgS8t7Nyd24mxvcc2S8pcMdMs",
  "key4": "TirSeNte53kz2yjEQ4GW5vJFjMehw4z4ZBfFGFoWWtWgkfftyGnbXbD7um3DLCxTdUzwENNPaHndjLtnXbDQEH6",
  "key5": "5vGYLAsYLGPbLgfMoFtfidyp9BMuBmbQJrFaE168unvY2eRae54CaMuBD3ueGNr9BMUyAxt7kdQHefte62W4ekRG",
  "key6": "5faXWYgKUc9xHr9UaciTFac1mpcbtc5vCNfdXjm1JNBbn8nVmcGdDR268F7E9ejvYHDCa6FQHNzJENPorJbb1H85",
  "key7": "2YjKr6y4xuhRsU7iD98GXu9zYrCfDCAM9zVsgpVirwWf1g9VKTkzfjwVmUbSNnbTVGymSQntU6cEyuZQVS53pucs",
  "key8": "5hdvesLJe1tfqibCXKUVEaEUuZMRXkxFajMnR7KjYKCg52YK17CCD78ndxanJFNSeVwxgs45mVjmopZNcuFNdw1v",
  "key9": "49Ge8G5mJ2CMVLoZxmUGSByvrcTqzX8pJ3upkK2tv9akdM6w8x25F4DLrPJtTjKm1kJ8c8Q8neZim5JJzNrpDoQ2",
  "key10": "2ZoWBeppHyULve1y39r8KR8u2BRzz9S5kMCm4buVEAN4kqgovN7H9wkyKKsgv564g9P6gfEbouTQfeM9gzjBSSFY",
  "key11": "95173pSrEnsYU2ESMsa3bJDUGuk6cVLx8Yx9SNzxNTHcfN9MDzWCWGHT1m2gjUTGHaQ6o7N3eST2igzcUnGX2kN",
  "key12": "pUNH7sjwHeogJzbB71YjR1vgrGwRbP8o5Cq6sHsQRZWUaLcpFAqZpDEEKSTCPTHX7Rz6cGouAP6DQvyVtDsN3Wh",
  "key13": "5F73PYhP4jnAmnwXgxF345MRF1cQQXAAnQUzJfAPfAVdf6j2JDMBDZJHFSWjJeB8Z3aSuNSqvLrJTX6m4UF4CBKq",
  "key14": "4pE6CN8JYSi1TNMDPc32ixtTnPKbYqnAU1s8dvmbp9vQjEBTmFvDX5z3cLiiorEB2bgJ8cuiJcqYPYATxAhazztW",
  "key15": "5T6vmuxtmuKiJ9Q2uWEUkbugekjtqyJvToYJRXqkoYxkBHi8tXD2h1mZrDn2Tn6a65My2cRY88W6RUwLg4YV5cRw",
  "key16": "5q9gw42LVh19MQisQ244oycsbLSkusck9S9zhid7VVU968R8y3nrkB7sHmizW3fPsR2UGs7YNfAN5XhfnD6WRjfF",
  "key17": "3K7eH6bBTVJWAajQ3hodd9EkyZc9zkkjT3JkytAktCiARxH3EjYMYidh4uLupCsPTmp7qtpHiYMN7TVT7z9qM9vE",
  "key18": "41VbRhVVhDGJBxLjXR2bP5RvVDH89R4HgsAhNr7xinGueiw22ygzLVsKLsogBbsPuaaC9QE5EturoH6MeoewBGhf",
  "key19": "5qBgUpD3icVQrWRpKcFsRLZqS332NgVJDfhQrHQq9DaXdfnFGDJi7s252ubX82BqhXHnjYJ5QFW3TBu5JQTmBXDz",
  "key20": "4zimTfqPDNFV63mCu4Xthprtsr6psDaM3VT62XVfWrfTtesoV7LoeNckPkeU2uqrWgdUYhmnfo885EUXYTHx2Vo3",
  "key21": "dSK8RyZwoUkVsLgUqqiTZXT7HBbt6XWBtg8JoKj8SKb44v5gPd8ziX3jmNntoqGDzbtG3a3URob58x3jTWgNqmg",
  "key22": "XuuXA5vEXUxfe1WgwHtJuozr4vmF3XSYu32GFvsjy4xcxo5saFGxaHSgvSw953tBQPVnm7U6sy1DHMmkajQYcsY",
  "key23": "G1TFCMYENmdizB6nDgRnoxseUAtHzReYXpJkxbUU19iTiMmQp8ukpJuxsxeUFuBSErspxvW2ZHCjkLu5btCjwpm",
  "key24": "3PKEdi1RkrH5ecnMTG6LtHoLoYL47tTMUH9mwZYsHkMYuysXCRzYXbUiP4ErPVrieAwQ3C24ZfiA9KGAY5yXCdQP",
  "key25": "414BQg3dpL99SDbpbrHryJM1ou8un3j6nTguJbh3ZZqbBuk4nGExrNjEb3aLyhC3opurnL2JomXv9tSGy5RvtAEC",
  "key26": "5X9R5Pr1fKGyfks8LGaq26n3JQNzpRZFAbdnRQR8y1XYGhZ44DuT6rb4PA6mcsMEDM7geNWqrsnFZCt3pxR4ZaJ4",
  "key27": "gGoLxzty93Rc7GwSioFewGKLA8DQ7JPyuRJK3r4qj9iZXmyGTu3YR8HE7KTTyR2c3xpi8N16AVmeaRM38x8eEGu",
  "key28": "37J8zvQwkUcCNoRPyV2gfRr6ProjyKnZfj79CiHh2dA4577tSqAjR2u12GXgBGRvyFrLxpwSEoAn7AAxNQR4o8sK",
  "key29": "2AhU5pog2VpDzEzxiCK9juF345J79m4SK5VynbqgtTALboSDbrHau64ddtx7qw26Jxv6wegqoujdKhLBHhzt3pqu",
  "key30": "4CzPrBZvVgNVzCATME6JJHZVfj4CyCMFMpypUTFj9ooz2V4cKdUDAg9H9Hm8vKnpm4MftDHWz3jZMPCaJnPQmLFA"
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
