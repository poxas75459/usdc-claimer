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
    "5ZZR1WnnUKnVXQubR8wh13wMNmbMJNc7WCFsAUTqK9ZmHyQiPxmyzEJ5vhiUXA1z44HELtZgYPPTtQAM1w6Nkokk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULyTwrAEdBAqrLLTzj7sCcDbQQ2Loe58tsyEu7PBDAyTCHwAZAxSkwg45VUwLKN4vSjd7Y5bD8eejW4TgYQBNEZ",
  "key1": "3zYVEWoiknTgcSifcA7KQroqrYSuFMaCyariwtAGmjju5cY3XxT2qtuE43yneuCmUnAvyqkkj3QGqTJpLsVVN327",
  "key2": "3igyVi9vh2hRPGLw8SP6hWy9YAA3LYafxGcTT6K7GW3KeRYyeYkkKmk13oGL882HHHGTWde3DWQr1Mk4LAeLi8nt",
  "key3": "4pvYzWwaf2Xe1GqwQvzXkNXzs2PMio3bwZxVcPAJMJyJsNVay9CPqLJPTgLZ2F8o6tAq9qzW3RVknWP2zUKn1u8V",
  "key4": "2s2LFAuVCjeMM65oKoVFHiBzggCnpUzLrkbk5a7hA9R6hxXdWk8z7Mm2xQTBek4hUdwYLaDTXKvtnVcJt1yLX8UU",
  "key5": "5sE32qDTFQ58JXM8hniEr4PQVrobkYPty1ShG1RbA1QnXgSuGtKA4QiDJsP3DHhq1boDzKM5SFW8petojZ73SxJ",
  "key6": "MY9e6B49RDkvygdA5187L4KANTGHZ4usemuzzN45Mz2gVKfZCohZbGNe1DRbH8nrs4AzbLhN7y1wC6F6oqm6eqT",
  "key7": "3fa1Zj2ZFt1cKP39Z8XwGqhZ2e3bmq5bpH1mfBs2bbJ38RPgsarNNB1cBcJnJhtfcQydujwDMAtNLe6fFFCjTaTg",
  "key8": "TKHECBiDBNGQ1cS4ThzwHkbsJQXrNxNNNhrw3aScWf3NXp4ojDgoBRgnfYQX6Q6SyikcqHKs86DKbdUwUbad2Ew",
  "key9": "2ipBRSa4n66S2KTvWeqaFSB1V4K8fB7sL4BPxwZUkEnHitAYZDAYm3bnYTLBi4DUF2iXkYh4EupRtE7ZmB3ktANV",
  "key10": "1uFiLBLqFSjMFrRq9YXRGFEieRKK9ADHJknkr5rJhkQdFseDysPLizJKmDqAUPNXUaPZ4CrZeY99qDzRAVGg83L",
  "key11": "35M45CMF3y2qNXMjBGFkr4NshYSAZ7h6rvKXFC1hosxAPo58caiy14AodHCZdPvv8yufpG6YDa4aQ8pa7h2Hqppv",
  "key12": "322q3gfnes5VuGrnSMPyKX98FwWbSZhhv7PteuWMYi6P4weo2S5LJ3Pcsv5U3R8Bnbd2dJCdhHyWzhNHhYe16Gj1",
  "key13": "2XSFk28TBxe21yepbMDgJJfcTj9DoS4LHMrgLYFCZ9VhuJTHfmzDhxr9DzaZwQvyzcpNGQjspMLvaZBYyHshamAB",
  "key14": "o7vVFQUju1wJfSAgwCd9wLahWABDaEx5ic3THKquj9X35fgC2CYCFZrMhU64C7Kn8ojJvmP7sABVyxTnSrhTNxo",
  "key15": "xkJi4YLj3iaoTVxbuougQYRp1JuoghRinxS9wLSvVFmBaQdiwPhTzkQJySAHiNhjq8oZ3X2SRxE5XPZmz6od2fM",
  "key16": "2tsZHeKg1bvBrpynkTCRXgyuFFPvyyYK699F9WYewZhFPQJkqyW8HN7NY4y8CemWqC5mjThHULEL8G4NottcSQZK",
  "key17": "5pgvjxTp2S9iCPgY1e7P5KaTs8gDNVoQJrsE9eTpaAxauBbZ9FCNLufnXGnXiFvcuuKAM7LWzCvNnqy6kYRAEwik",
  "key18": "4mGrcVmneVgBPp8VnGBMtndzNTgpwB61nN78YoRKHhZxwPvQgdQJUUdfccRaiAwwY5PU39Co1MKae79pcp8si1Cf",
  "key19": "26Ju82QmrQskpWRu2iLrZEuRVRF4Sv2KeR7roL2Adfkxx5qnZZj1Cygtz3dBzqHQTB736uvcYovcGQHepkDRnExv",
  "key20": "UPNhTGX7C2ViMQtYYmVVY7JqHucuAk7hDvNLTdXNBfEtYKUPichLao8HRp9ChaomfhFPgvH66sDSK26ubnKnfd8",
  "key21": "g37ygMX5qYmejHPZH4DDGQ2RvMmK3fjsZaDm6dLysdB21YqH3QEXk1q7qKhukPq1nyXiTHkALcLjEVpSupqU2MC",
  "key22": "F7wvvsFTNokQCVHW9ZRbxZinyUdLNJwYGsJisEvKn9aNXxsmhW6UEUu1K2iQdBMPnsen1rpajPEhwdW3HU72eve",
  "key23": "5MzbE8fZLq9JYYhoZg8fdVkzHeQAwxMrYHPVhgNSzGHBTYHeJjgWsQHqCEBw1zWhLFhw9XwBLx41cFvnFf8eavrX",
  "key24": "2jZbS94K5fM5yq8EvTV6QRCRMsmLqKXJLuXXLMcpZiFfXYTyEYCX8TugUyxxFK8ARR2zeWkdToV2DWyU1ddjvdaa",
  "key25": "3nzLCoNqbBnxp9cLCJFsikTqjwHk66avznR2kEkJ8zgbET3kV78A8W3EKrTer5HTAeJbq87BbtigGDNUu9iT4CMX",
  "key26": "2VexPKi4P42yEtbtuXdNUnLjBD8R1XPmoeXmV4PjSM8q5drnBAgdxe4PGiTHkt55wqNVyUmPztDzGBCtL5yYkKev",
  "key27": "5zt4odw2yqNHwd4zM8d7Tty7BoffUFGwtQGRSb1naeqb69ct7T9pyWF4JiVdTtNPXs8PjLttdwz3JUfZr4tKYEv5",
  "key28": "3aWBo64RTPmt6sULuoUKBf5xeH39h6X9hXr7DhwpnW9c9KrJdqxZQRu9ZcFXkitEcPSe5ucAaCYhmExujAMxJK9h",
  "key29": "4D659XYFmnNhRJQ4BxqMvSz4XFuhZv31neR4Cq4jayFTqU4Gv9rQZAvqfPYPvnBopsuAk8oUaevjDK9TU2FcDCnV",
  "key30": "562UixWnaxMgj7A3qVfYRoJKpxdRS4dnsic2NstFA4G6JaqCjr6dgMQVtkZhKktL6Uab6bzh1WZAxE1w6LCu1Qxo",
  "key31": "xx3JxWQhPPWRpyrQptwxZm2D1Aaqk7ZePCxeyDfXEQsdEx6bazi3KwYBs4xr1AWMKqHkrGYhW9Uw5VqbvEYURKo"
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
