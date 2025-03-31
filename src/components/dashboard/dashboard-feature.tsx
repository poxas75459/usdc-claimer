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
    "674BEpvzXFY5qWrr7Rshr5WosGwW4zkLjD5MnYhGGuUWzGR9sBCLPAJLVvwQvpiVwrWYjptmCrFvuRR75n6AWdWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45BxVZtgZ3nY38EYLNeJKc8Ne6wKRXCNzSJVX7P4Gq26DNjvfxsvLDZ2bm36fs4ngyX86Aj1q3vzHLvyVeDUirbT",
  "key1": "3GXCFWVPPWU7vPNcyAn53XaZoMu2wE7Z3L95VpoPULWtzN5M3ASdYrdXkQd9qx5mTDAS5PFdLzq3owm6vRxWQgRF",
  "key2": "2BMWL7K7WVxZx3ECfuj1Ritgqg8ChRuRcNWkhdLakrcjR4WzThXWLaiAkRSm3mmZhXKE81d8inzKdXFeN5UazPqT",
  "key3": "3McEE46pjfFfqnEBasm7w3R76u3x5dqp2C1XyDWZruGSfjuz8mrE4EDe88sS5KW8YQMLEwbqv4tHrsbWwzTQKdNR",
  "key4": "3HYs127qBh7N46KSnZEztmNsdBu5ZBQjQcn3GUYXeLKmb144hxxiYfn8VdqqTmPHMPNoor3MzEwLJRRAAnBC4Tz3",
  "key5": "LhcVPv3hnwnpToyjpm1SRvEZe1hsQufCuKhkdYgnsjJ6FRziegMjFqHmUhBMD7UDQSLckzwaMT3Z5rm1FHuyL5S",
  "key6": "4ArgYCScNHSvwGPKofCvZhfMLdy8GxYA6iHz1WS1Hu7kbfosTtGW1g4GVk2bFBLXxyimQDEo6g7zTQHpn5eLcy2p",
  "key7": "5JnTEu9GVwXKAvK8qJRhqPFCLiHqYRtkjMQdah1MwoGFLe8oHC9R24reBC4DBkpS9LnNp6kcTJV8KMVGvRUe2KNy",
  "key8": "2YmiNoN83RoKoXxWcxKajkB8if9ubh1zo3s9ovwGWNBfwY5SWmUjwnbMerNyMf5tu6BVw99J5c8zw1bQ719S4Pyt",
  "key9": "2CFrGKKYAFtMwK56a3ZY2nUvJsqATeLWG7JCXqDkmQCehYEA97b881Mb5GsfejsHuyGvAioW1rLq6kh7mv1zTrAA",
  "key10": "57jWfFwmogwe7z5rvKZii1EuJniV3KwrwJFMyiVTXUj8Q6DzXKYyXS8RVyPUYpCmmXKPuo5cwawRHZxmz3FQ53AM",
  "key11": "4Q87zFXoxdDMAGjvhYZYi7gzSr15z5nFSjDUXZnpQprwFzSiwpfxBPVXgBtopBjjmiho6Jaugtf2Cciaw49iSugQ",
  "key12": "KHmBQMoSewizq767ocgVPxS21LBcE88LnHnvtSZd8jEuFrhq6sbasH42KBcRz8hxFzuih6aNN35UtXaHLCnXtyv",
  "key13": "RFrqWD6RXNgi9MHJQ8Uf3QuHa2NtgDXmg6t6FEjekYcApX8L8Hh6suuwRZzuqxEYMtTvS9WeBkrTX8NHi6JkmL2",
  "key14": "3E2EPKwBxyPArPvZR94GSoDpMKPAXVDpVc39PGtwjGBWEQXHmHLX3fpFUjKDBhZbMH7xY7V6RhV3rH6xXNPj93f",
  "key15": "5wZ1XyU5vAahQTT4fopVJbhFu9jJV4cL9uieQK1czk2bJyvqAZVcRfXcBYPEc5USXyGk9RMzovwqsivG11DWcJGc",
  "key16": "3WH68AoaBP146BWxGW1czdw1HE37F3xPwTTy34hNmZ9hMFdQxoeayxAJWS2wvjuotowmXpPqCsKVNpm4JJccmz3h",
  "key17": "4pnkiaGuzmgNXGhKK2pXZnPWLxhMVK24jir9PcYHVXUWHMQWQkesL8gtHKkrK9fuNYxzLCD5Xp2iWgiyuLq6TT4u",
  "key18": "4Cj7YXgNxz6jFPLq3VEDeaJQxhE2Ez59YUfMBPtWyMMgVXHLacwsrzwQKpbWSzq9B7nhoTWtyNzNvMD9uyPo8qEP",
  "key19": "SmvLEzW3pc8ovKuFkY7JnqjWc2CpJ5b35L68stPL1SBdVB1NomwT6upU6K9cDNqdf6TzTfFvYP8fd1utwAU6RYy",
  "key20": "29nX8uNZYQMzbXkmULpqxkgLcEL78uqYpFeu11TL5vkE9nPYpNyhfKiwpvpnwxvDbppg8si6UM9EKXt2C79VCWZe",
  "key21": "hvc3JczZqZ8pKS1xXyN5PSF3EageiCp5Zn54xf1TzvkmEztWKhLa3XxyNgZxd3taNitd9c8nNt99Vq8J1q2dP6J",
  "key22": "3aHGvBDoLz3FrkkQRrKrVyxmqGdPwXi1YggDhGvug27vRF7FKNhK675UkgvJCYQYn6LwDnfNVRCvSXjE4FqB1XSx",
  "key23": "5ivh4ZTAMeaYEuqs4mALZTpef45wacbfPVyEdd9BxbkYPP3gzLKPp72U9T5CBwQ9sFWW9YEi3GUw9Wc7PmoLAMEd",
  "key24": "3pH3vKNZtVNAARL4D5QsLgSx7Rvpi7vF7wCNWadPXzZjs68q4DoGfiKcDApNsn1g2tAjsJwc7ctE2yczEQVjSXL8",
  "key25": "5bL8R5NDJg6KdC9kd54Vb6CzQoMmdWJSY3wKycXzMm6c4ESa6H9M3cLbAUEzZ2Q9QbM7reWkVAKeswep2T9tjrhb",
  "key26": "43XDA4uSX9bg7DSL8KsE2uVq7DoMyzMZTTsmpRLrBxnJAkA1NZ4nu39nWe67Y5Mmyu9bYWnQ7n8x62RqC8Xur47X",
  "key27": "2vKEcZZn8XEarmhzA6HfdCE4bue3TnRGKkUPJfXoFe7himT9SKmiUmZLuojcyu9iURBn7TRiATBroCJVume1e1MK",
  "key28": "4o3MpLzUsFMkPMZ3apf6GbVerJQfgdKtu99vUJaonedtbE2bF9FCEbPgr9DTuEKVgKQsV8T1qJKEcTHYZD1SkLwm",
  "key29": "2eVFM6gjAev8kSo8tcgRg4ufyHXQHmxUwqMG8gVHPjX2KdSvp2iorPKazw7fDXyAowZiKcU4tzHJqtiyqqLLJenh",
  "key30": "3RGcJuNCuupecuXSRQW2nx2wXdyrB2tyh2Dti2gqyQumnbDbDhTzoNeGYmL5SHqKLGf9JCJTiuNsFQL2ZTqd1r5j",
  "key31": "4N1pbJeMj5KciyrYv6jYou2oDw29iSWXDv4wyh4enyTD1vgCe8iLkZDYA6mtVwQrHGUuV9jXnEJodGnjwjTga5NB",
  "key32": "5aSykuSkYoBcfp18iFxyji1kzboswGeeAA2g2CiUBBA5BMmFYWE2Uybcc26FBKdaXCW7W3mwGVgrUJUjn2MFYvXR",
  "key33": "2EzHC8GUNCyt1ARhMzetTJWp5RFK4KVZwR3LyvYNM2EsX7RRwdtvR9N5xsQBTgt5ziKWK2gGrR5gRWbsnC6QCZU6",
  "key34": "56uURkRb8mqzJTCdSKsCekuPN386C9WufGioJXB7mD61Rfd6GwpMioNtBqdqfL6zTkWSha8pJFdi7A1z8swdp8mE"
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
