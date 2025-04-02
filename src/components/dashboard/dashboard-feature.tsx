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
    "2pMr35Ug2pTCCTvP9KYic4fE2RLH6PWmudKsAjyVpDuQSq6MrDRnATvwvDFGywNbiNvT9aSA9xeDJ7177Le5oMdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mtH2UM4nmM2scuN3okyMTZbn2dT6JpZiLwXFntLmWGh6QDfifVHmLyuf66dh7Q7m754BnsdruCDPD6ta5ZgzT4J",
  "key1": "yhTCg1TMhndLL3s8jmr475TCNcybcdZYE8xN1eWD6G5rdGJaRvgQvukuySCTNoyjHUHPVJKRBMhYWHaB3uJ366S",
  "key2": "4fyvYdX5CrawheuMuV44JnGc3xCYydQ8jYuMgbBQvMn7T5mfkCmueNsgyKQiE7BsWCwxh64j3dynjvbWQb8fTi3",
  "key3": "2q5LzFdGg7NsvuhmM2NHhMJbrRZfwGvjfsuPbtfg6zUQh5avZS3uGVNkYzhajTq43UCi7G8LTrkrffVAphWMtDdF",
  "key4": "2EFSUtdDCPEquFY2rL8pozXcmCmwcJpkVzJM9vDzpGcpZG8rxnUT9rsfm2jwMyJXyouf5GYekxSrRBb5qYCWH5iP",
  "key5": "5uU8xiJee66tcZru3N1LoQ5k1xkp5dua3bDV6uTqRV7myRTD1JeujzxGns2H46fTLmnunAJFec56FZWn5HS1vf5Y",
  "key6": "5EpvPbxQnPWyTq72C3YAMCxuNQuHsiG2M8W2KXcEF5KmCXJRNyXfcvtoEDVQXeCzxwcQkfsKXsodSBcz8wrfY6tp",
  "key7": "25iRL98ASEym2KpXjPxPUD9Vafv1BRgwHSDs4mrT9fLDtDv1kJCJTVG5biDPEfFXgXNZa4SuM3GjgvnqG6Ana4k4",
  "key8": "bgZK1GcMVgokE9GLwZaBLTFkE44KJKtkfND4o7pTsDDmyrEHoKekrbT59judiosyqdTGQRRiq4QbShBUZw3ZEg6",
  "key9": "5kBsMWwdKoRDrpacKZPFM1zmmkXb4LHXJaueyoVP1VY4TKTpjVJ6SYV6u3BvYT9p9tj5h4Uv49KQ639Aiamtdx7N",
  "key10": "5DtJwzBC1LDU9xYti2yav59tgMxpcJmip1zaYXDmrK8FbEjYa6TsU5FnPzXkMxXNt7wg4H7ubuk2ySxCQRKmB6vu",
  "key11": "g6qF9ju3z85hozAaAuZK3sPYy5PHHnQoEdnpGR9Ks5KUaZ2j3Gwd55NmxiqSgKWVDZJs3jdy69FTVBUrmeSMJf6",
  "key12": "3JAMHqcjYwTBi9PmBUJaaAXuDow8fxaAomUUJ4uDYLPt9jA5nAFE3WwZVViTexPjUd85jLYw6K7WxjuWmCXNdTGg",
  "key13": "5cunEGq18bHxFUXoZex2PMaS5ypqfnKgxKTax5vpyiWCWmqksjCocf9zzKyaczhgS7G41nXbBM4UDoAJ6ipiXKFZ",
  "key14": "6TxTdEupzkcnaUaxzAXttybVmxgpuec9J9A6mtN64cqb47B6sJZvrX1hunMZ8EBAatNdsPtjgqR6CcKv2BSPkh6",
  "key15": "4pBBCabwjhNoihFBNZZ1yPwbjLTjEzfLubTyWrnpkGZJ1tgZiqiEqnozJuoDdQ7rcwUiwBV33Jpm2KZPiTnLYCzP",
  "key16": "3vvJobwatQ8bNqgr9g6RfbBPduLZ3b6BL1U6ubRWdhfn2pyj6pg3g4Ucrdg24QmjpUAKAxGiw9F2Q3FtdfJmeyZz",
  "key17": "Pw4GmVGM64VexTiesinfEYEXm7QMox8JbHsqmxyHGUcjMV5eS2uuQW3qCHqwCQu4fvJGYsZfpUBhLRjWeCek83n",
  "key18": "44hVdVfmfrwr13J8ZqpsGU7HUwCr9MYhdwhsVT4dCnTiYneBRJznRLxJS8YJ11x7UkxrNxZYLN8kPvUWZVQEw1cz",
  "key19": "8SRqhMQUD1ZZpKcdZnt3ShsQKJE3ZvUM4JyDCDJK5D8NkRGbfdo5Yy65LxeMNTQbbG8zKt2gyx2DpUSttGxPb5u",
  "key20": "55jpcZf81JH8j3eZ5vcmhw7XcmJb8Lqn8qMojDuYDNfniDfw9eoCd94bDzGuoftUkV22kL882df5W7xP6qK23GHf",
  "key21": "4tQGyBpdCEotr2dhfdsirrVWg4QvrC61mWC4Frp9dMDpt3oFaKYE7k7sz3MG4Mu9s34FZFQVSmbW8kJd1hk4iaZc",
  "key22": "cZHXKhKqcavXWEnKmeMfbwTZgx59PDtqcQjeNyWtS7PBzd7Le9BaQHm4y4y6hHP3CpTcZ8LhfCsb9ZEALmMFfmb",
  "key23": "2iUXSw3fq3XspH6ADdMLWFgG1kLBE7bzQzuv4Vv5YMNnFWDZycjbTTWuZbE8uTjo9YKQQndwTEEa9L1V2rUDmRik",
  "key24": "t3isCpbSXg8DaCPnxm4kcQKaxZAE83vKR5hBw7bq88sKeHczizS5HSWzJ8Kg3SSrR9FLoGr7V8axXRm2KjcZAbK",
  "key25": "4PABSRfiaPKZoitGUQFEVFVxFTJAYbHRn4LdcFe7NzsHwujAKfcY7gud2PqAPvsB4uZgBFCcKgn5bLpuEgT54Vuq",
  "key26": "67XQkCwjXDxtaGP2C6Nj31EmesxCVWCxfdHScDYJGzBuz51GXYYQ8KoPrp5QXJ4KykNwqAsoY9Sg64YPNZ6abAfY",
  "key27": "2MQpwsMkmDNWdKQfLFKKjJ372UYfVAQoUYiAW8bQGAibs7vbZwtvaZ6LRhtCcQRYYvYSTmJANRxKAmJgEKRhxhX5",
  "key28": "2KNpTwc79NUxk5EzB5qewSw3gL29H7fcde5k9ozJ68dYRCNCSPyMmgSGibnWcAu3i3VSnLqoxMZaAEhdpWaoxNq1",
  "key29": "8nVMGyEkwcL3bDt9iDwmw35wkuC6AGH3vpzw9L1wTrehCrSNqWHxyb2uRCKEU7Sy5heM567fKQ8Eq8BNiMbaZc2",
  "key30": "PS7rHNnBFyQ9VZpXRvKKCNDCJFSA2zCoSUZH6vgeE7BhbcmoqEQmYETGv1nkqbn97RZSmuARFtCRTn34V6xxwWo",
  "key31": "1tijh9RNHe4TXRh1YWNFBFkBVBbkBx4ekQvgNPmAUknGPE1TpGK9KPZSq5gjg256RhK3BwbyRcqYV5Ad4knonf5",
  "key32": "4y3DRRJw4NoQUmDYv6sdKTV9UMAhAj2NpjM2poE5TxivyiPVbcN1CPvNdNLMRK2BMqxNmXeQMKTro5W4th5mzz2",
  "key33": "67g495L3bWJ1eGYbpPBM5qk5kpbuEyBtXrbm2ec5Rf2u7yCXRMzS4PVg6FaoRNV3gPqj1HeLzPVf8bN3KV6VdmH9",
  "key34": "43LGTbxdvrhxHpo4n5yF94w2mPiiM74DhJed4sonNk95dd79jeBpVMJ5HHqMSnZt3oZFxU1XADhKqBgpy8LBptao",
  "key35": "5p6gqr6Gcxuio1eg8es4sy82YcQiiQhjX3msKnSKG1KK3X8y3n7PLooU9JZhg9EdrW5RqMfFCMVtAzZtsuyHdMhJ",
  "key36": "2SzCQDbVTA67CJE4j6ErQvQJJPCh1mx7gFd6VVtXcrY7r57x5yi1iCXYcwnVMnQcQ2RGcefi3xntkweDCmBCiKGk"
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
