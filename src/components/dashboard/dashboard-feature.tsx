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
    "qSwFP6UMftnyLLFVEu1mtLr4TZXJUGG5fHdmxU4hQhWKTPgqESncb22r4adYRoJYw6rXz27J8mf67R25YQANvAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FxcY4iG3YoUFisxFvJgytBdehsSSvxrGHC9hQkvvsqJRMnN3GfmohxR7b223NGTny3Wv1bocY8XhB6E6ZTuxe9A",
  "key1": "5Zj9r9VT8vaivKSdzJMjYytebmDWEa7HhwTFs7WRBhpHv7GMpXuNuFEZMeg4TCePu7FP8i6pCMetoZhnXckBGzr2",
  "key2": "4UxXaX4X743CCWRF3WYZReahgnvsaZvU3TBaV9CyD29S9aTrbfdMiHXupGQbk1mp97K2aJC9gUeWVHfgBp3tDbY",
  "key3": "7gZctx1iSx4ZNBQnHricbmEYFZjmeXFkWiqKkNmr14g5hWsKFZZqFNjpENY78t25ojB4hqN6gtWdxFhMvYRRV4K",
  "key4": "4KG5VfZKJ8TtUeAnhTtB1eJAqYSN6vn1Z5dqRHZF8JWgtmPEVRzDA9ktvs1kwQDGqY6bCYRDjqVemvJcA4pNiaMT",
  "key5": "2VQ2uTPyAS9ncWsrBciv9GHahFGxXoza7CMRSwy7kWAH4mjZ37KKG2Gnf93aoDBip3uRvVfvBuMXKxGbS4aUahAG",
  "key6": "5GeEXtJ4RaxN1jSdepwA8HYLRax62Bb4dWjPincWiMSGkaa4F9xoGKikuPi1i738VDVyQc5m6NBNQGcZFhQpvvEu",
  "key7": "5qc69v6csayeRU9P8TAWgLoK2nkH6rjZNbMqpgzzXSLt1Fmg7Xh5BWRpxYfPfjibkTh9SjAPsHarNmEy5rjPgUwX",
  "key8": "5W6EDabBC4uFEahQd3Q88WXjJQLmRQvEvbdmLyoz9a2GUJqJRJE75fEDvmWAkihKP63y4FKyqqtfeerDrz9zhEYB",
  "key9": "3DY7J4HTmKHVzUvypKAY7u49TXmJZLp1xM16TaDstj46U7o9jgz1hCoNYKvLLhdWXqNC2QBm6eCneXKpxL1QXLc3",
  "key10": "4xsodAEFcRe7Qci1ofj5bYhzSX87ZkKb7eaqU15iPkGbaPnas6g6Pck8i15MdxLc5fMRgtyyvPzfPECqq3hxcHeA",
  "key11": "58kfLwsdtNjEVDZxuKoBHPrjUPr83UL9gEiJWpm8FUm6GrbfvGQLfz4cJqmWfzF1Hx8fRes4nfKGZmJz4r6qcnWA",
  "key12": "4Y1tMcXt45mcGjZ34Eavyn4jcDmPjb96aRyad6cBZWTWZgekpVSHiy356B9zNcdpfCMwxHXqLNphPeguDaYW4fyw",
  "key13": "4LA3knQJuotqp4yrABSc3g4xrmncBZUvn1pDxNbvZTvy4bCudsozDK6DxQzwSDW5AQFh5ukY114burZJqEurQaNy",
  "key14": "2gz1bx3G4nWduBWEQ4WEiHwZR4w3oH98Cnr8yE8vnUTehKV5mBcpunc7sWYgNdtqEghhVEaScjyfBoNokmzc9H5w",
  "key15": "5wSFpn9du2eupej9aCa96cpQ3P2iZTvCvHMKef72pgQeoPxhxKCnCFH6VUZ3BHX29V96Jyz46kCQNkkReZSVGiLs",
  "key16": "4UR5ALaWw2xpCg9qwJyBgcUHiVX1v3aArHWWjh9f9LGgg3XU4LaLvqcMo5TNfBQ5D2XGTdNukmSp4z4vzSzU7fCv",
  "key17": "5epSHLnKTCi5otP4fzZfwjVtnHwooJvZ7Td7W5fQAzHWRSU9aZ1XDG3ACJAhsxX1uSm8iepLrVQtcMmFLtaLh7dg",
  "key18": "4hJGtnsbVLE2AweWa7bBdyC48RRBqcbANHeeHV4zN4sePNASisSfr5S9AJx4avrGrz6cz5EjhC9ZSjxg9DgnoWNc",
  "key19": "67W82rSmUf2KyCW2EaBW6omwU1UGLApdsz8sMWWGYiPMpe9pGKoJJKoJubdEYCZr2JtmsCiv5dbXyqouFyreYHHc",
  "key20": "237KJm4ZYFkhBFs1DwP2qy3fBWHjJWC6D4vZDrHiPxrkr7Dvq2Sa6HAZZAtXVx8e8qcZnA5mbgryGHcSALQqC1Q5",
  "key21": "573T7PFv1DLTVQCCE48pngsmdwiHfgW5yYzQH1NhR6CavXmsEvNj92UXQyfgJVjkut86X5XH2bxaEgx7CRBZ78R6",
  "key22": "3HzavTAtVufzguNap4aG2vji4iNfw1obWysYa1FPwTqcBDNTWU3wvXT1ebrRqpoXdw3cofYMJStfP47v3UsQvZCG",
  "key23": "5haiNPxoTBiXnX599RwUAkVEjUD9LTsEtnxc8u5HzdoG7hh7YwiyFPsCVZQqERRiLt6wGaWX2bjFRMTESsRBFjT4",
  "key24": "AArwkq3VvdbFW8taiz9otYw9YB6KB9ad9nPWv57ko8jiqkvAm3ry6wgjBuxQSn3HDNghMK18YdV6Byf3rdM6KF1",
  "key25": "48UDhdRTPh7kJMvQySh4fKiM1G5FsVMD8jsQDwuy3u6uEhsPueyzq46jLZU1Je1Lt9z9Gii95XUJTavDRJQKiznH",
  "key26": "5E85Yjs8ZSQGWfUsqWgfNmstK5e9U7FuZtwr78Ep1XzuyvSgdNmVrfi3qjom81bQ84pX5PtNRbmn6udxTiRdGcBD",
  "key27": "5c6SZDNkYU3UUgNSJiUaWcwiKjzpmKBVLUooZhDZaNx65A9YWjari5yQ5PebJYdWqtCssRmb7AdZkCnUpbkqVvor",
  "key28": "4tsgXNstB9CymxYL3ZaPzCU8pRPWLQpXEa5t89jrsiXK2umgaatXfGXZ5t2CT8bTWDXHFqe8aB1MofmtL2MZuKXL",
  "key29": "3bVXtHvxqsaDQZzKCDbywB5Gt1hy2kPkZssXE7KHYWJesKcnMmRZQ2CXmmY8ATHZdEDDdjkwgNSfC3c7ZBzB5QoX",
  "key30": "4vSd8of6XpBjLZf16TtQwqHTUBP4BBDHHHUoD6tmr4GWawwHWrhf9gYqhRX2sJAnAAAzidWE6hod6BG7txYRHYm6",
  "key31": "2ESNfo2hokX1dWNjweHP4hJMTPi5AuBWkAdgfZtU2umGajihaARCsHaHA7n6DNSb6jBDWsjN2oUfgwb95TWWjXGJ"
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
