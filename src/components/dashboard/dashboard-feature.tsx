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
    "4oR4o26K4NeUNn6mxNgFJhDryU965HHHENws32Ahh7BuP7srmR7MfauhCcd5toBeANojHXQeV5JKXhnru5bscn5Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28YfMtowZGunMXPwAzAN2FGwyHSy6JtJi2XcnnaDFzPNBHkZy19hzCWsWZx5Qg4NkDyeduzYpEGKmXYaWXqvZKZ4",
  "key1": "3p9GFnBNrkBpNYQ8UuApa8AMoFsArjrHLSx7M2W4z1WrVtLyDVPzADb5iaRzyp6i4wxW4o4ihfbz5vAMjc8Sm1p9",
  "key2": "uYTqoFPCPnSGZaGp6A2tRruhSXYKUc6x3qvSup7jb2JpM2EturP1LQSwfMkZQ7pWPUgLtdbFw43iGqTsJufJAZi",
  "key3": "CnwKzbb2BYZqLY4yyuGM8inBG4NHJHNzVQovWHofCMrfUDFDhRmB1YoWh18dAcJAqqcXeemPqrMuVeeB1So9u8C",
  "key4": "39VfqCXFsL9wdNzLc9MRJNV8GNQt8V11LQaxgNCxMhQGyU9yA49SmATzS4WLiA7UHgXCimE1CY5HbvkiLk1NkvLE",
  "key5": "5iPCtfwYnBTv4HrdqAsyZxASrGGGvZm5xZWPQsN465avjUnGQSw74rmhA4ZnwQ7v2Dk2eFDcL4WGH4mydzUgW8zE",
  "key6": "47gWYpCdMmEncpSWEfRAwu7LdztorWZ93VSchy2KSetcmYh4MuW2qLT1AeztkTuedoVqgV3fvSRYAYHLzivJhzcP",
  "key7": "4wQsrLwihNShkQrM7ggH5yApf9bKw84qcyt1Ko8s9NsoHjTcTdHZHRqqnnKCihasY8okdwb6XZpGq2i2KCFbPAKk",
  "key8": "2bp1QXy1ZVjKe5sHhqCwcHRLCgsrXJMjPMCXZ1RNap7ZCWywmyCgYD2ReXmctpWWAgkDjks7XqFYsXACr7CgHbEv",
  "key9": "fhHF4Am3j66L4dbJKUvfJo3jtkrYN5SGYkHqUegj6C9NQwjP4RaWk9pNH8V9HG6K8Sm9i4ZHXPMLSCmgQfK8P2m",
  "key10": "5N8H6TgwcpM8ZTXx4AZPkZ4uZSiJtGeRrNwKrCz5zikBRMBrjDyznWPyZXVcb6nM4smn6RvMCL4Ry5HG4KoFbuGQ",
  "key11": "wYsZtbxynT8AVXH5qyFisDVR3B5ppNsdHySsjvY7pb8AFZ3woFbAC9dMN4r1ChTzz2EcXRRqXuDGWVX2fpe8opi",
  "key12": "3Tdu1NPa7RX4az2biYBN7PywLGgEDQ6P7gHFb7CHK34eEQ1csDME2rHy6nvEPk7gXqpEBa3Xvqy523nGrMDDYaDo",
  "key13": "5Roh3qzdQedtPrQ3WiWRV2zuTGneNBUvyri52UJx8xgadEGXXJaUsHzwkk6XRDhd9wXuSq5zdzsX84q6UJJd7Vjx",
  "key14": "4bCD5MrY6xqZAwEP4WiXi9yVPhFjCNdAZGNX4oMXU7SZBkUFB4TRST3SXEkzQChdJeJciLe7zHyy7Bx8WnHUWW6y",
  "key15": "3CQz64zdvGdYhwmQVNrrB5RR7yT7FpgABetYLPesDZrpGqpG6HRYqP8M2Md9Rct6gg5s7i5N6Lz2mQi8LQcgcB4V",
  "key16": "WVaj3RAdihC73ugVBogNrQeJRe4MejGG2vBZC8CQNhtdXtxrokQfTJ79kypqdPFEKeQNN8mP2SJ6kipp61iRkP4",
  "key17": "5MjTp38HqYW8y63M4TQZfhJ18YRkkiwwHEE6faoYBLki7aHYtyHoc4Ju9JxJZJD6vjY9eJjEHXBorwAjUsLtQ7jM",
  "key18": "3utkNjGfTLsHT8bA7c8kUzZ4qdEzSWyYMiYiyRpHW39q91XyhRES2gEyXD7KRqnhNt6kqfEUbDt1pQE6RQPWXek",
  "key19": "3P1NhB4QMDTnzbdQdpnnw5fWSRBQ1rPURyWRvCRYtGG9vyq1ZMvgBrKxvpytA4pGxAZqbLiVzapDYhM9DCxqrnKx",
  "key20": "2Z96i7YZ15TEyAuBMkcvQVWqzvst3z5BND7ryZZQexnREwXafnubUah66kUSSNF4NxJaRPBz5tLU2dwhHKzgsvFd",
  "key21": "5T83jUTxfP57Wm6uWso7SmFDBzFq1yUVbPisJNGNKNLMKQufxr4ujC2Sx8p5do7VsnEuZJxvVUs4aaifmpiYrypK",
  "key22": "5urEhkY1c7m75WyBSnKWnqvYpXBByhPriMPdTGrtG7Nzsskszi5DahAMvf2oy42v3JKLfvt8otmoMtX8ypbWy9L7",
  "key23": "U2jdkAE27KMk1x3ZMRgrYS9ZrVaeJEbcqS9uJm7tZQSV5M28rQvgMhLi56bpqsJwvRiAxyAuS3hDXUhm2gf5uqY",
  "key24": "5YdkNqsfA3Y2WsPMJR6Xw68boC4ptbt4ZraDG2r5y8VANG6D6u3wJNk9tzhA1V7wyBqEYSiSBQfqJhh8dCByTWXA",
  "key25": "2PHUEbYXxqP9kFZgYnHws74LcPUXQS1yh47CSuVzhXyMq8SvWFV8f1o6CsXd7ciCAGduaE9rBdZjGX8iH22qbu2v",
  "key26": "2rCLJmVtbzXBaswTSMUhQtZrLxiBSMDip5u4Sm3KbTGGkwxtgxr687fEv7W3iMbDH4PbNRHc8vzLhitNToZQXMLk",
  "key27": "2BWDnc3BURuoFdA8NcVLL8qrdfGqWBMwrzFEC3p3mU5wbSW7vHiUHDyym7b22amrRLz2KoPM3oxJSXaWX5wKNY5b",
  "key28": "3bb4Di7ESGx5uVpBpJPiPS4gA27YT3z9N14BJYF1KCN7hfRXhChstH56iQ1jwGhkDNdpk4v23F23p6cWpbzDE9C8",
  "key29": "4iRWXwuUgWCYNkM7Fdt2qMZ2uKysKU7tvUSM2Wv3jeWMcjqBQj3B9nqVfYfi147AEseMt2apdpk7zHB7LY8pSVny",
  "key30": "3dPGmYYdZLN7muWWebT92LvUspjoc7UuwkWcREHu99Ud4QgMccWfhWP3nBtLmPzuaV9zckkETucmCHCCohkAvKEM",
  "key31": "4ctySdMGgzuBgRiy5XutrbL77g1xF9rjz2twoEsPVvXJLnWi2kDaeyeEXq7vtsKaZvqFaQye1idmAmosSu7nfniZ",
  "key32": "4UZyKqtfejgmkdi8cExoANFacMJAmBosRMysAqEUqzYnYZtgQgnoJqsTqX9PZnwED5xu2YYtBogLdWY7mWKBJsTM",
  "key33": "cH5jJu3fE4g9YE3gNq25V1TwAViwcWS1NLQ94mcUVAgZx191nQ5Z77x6iGP7MBqfN7n3YsiZZuLrVrC27ey5U1b",
  "key34": "59Rv1oYyH6hRnVXfN4HzcQ7YkGSbG8uxjEosKQifWZ9pJQox48F1s9Nq2cdRT6uwnVzSRUaHSaBPqazpg9D8U5vw",
  "key35": "4utGsHYFQYAFqQphLyuqE3jFbL6nLyG11y7mCER6UPLqxpfVGwiqnp1RWeGSmnRBsod2tn5iXBaH9VH5D1U98YfM",
  "key36": "5aw7tE6CTbnYpEmG4EPMqWdxkgMmPpJeGxYjAfvq6AUn1mcM1rDDnVGCEUYyQLwMGVVSxmY7W72pRHNpnH8H9tAj",
  "key37": "2BtjjhRMgYuqyT8hWbQFumQJVoeip4QBVCFN16Hap2fSCHTYR7PmXM91t4BZNXRS6g7q8hsrGjampY78m1MP2MN9",
  "key38": "3KcChwTke1Lt6NLeHBADcRFFPwdE5cPfwQtzgU8WxmDYyWFXMftxi7biW7DaxPGVFeuxxvk479Yeyb5Xknp4nDbu",
  "key39": "2a5KGUh7YiqVV2LQh3Ao88jbxceTcRhR3G5U6szgvLMm8DVdz1AsCgF7Fkvbfcyu8tY5jjsPv874gR38v7SRazv",
  "key40": "5bSWRpK15J2JccCfftuNiLguWcmZHaKrghqqj5Xpv4HXy8fgSw8yPbtHHCBxndE3gU8RZKJTqLVdFJTvTMzhkcVi",
  "key41": "45vTvM1wP1MmYi85kSLq9Aenj1XM4XGkr8oUSiXgACkjzBmXPvQZvkUaH9nCgCLCUJ8M39kQrjXSNSh3tzDVtgbF",
  "key42": "41L3rhv3ehSb4P9V9UUm9TmWtTsMEjrwY4JX79ukgKnKDaeGpqUakgwuk36SjtYRBRdXSLJupxZKh18tigc8piE5",
  "key43": "2tqfjn6cRfEk7HMUHMuZQKU91vMu9ay1nzG2BLHt4Vmn8bbAUFZFKwRCn3itK92RnH7AKj8e3o67jdAfdb6redsT"
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
