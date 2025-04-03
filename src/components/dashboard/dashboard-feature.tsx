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
    "4earLXDPgqwpp11BKptpEabPfraDhjZfwEjYPoiGZmhR8jceB3vERbTbGgHivhKsjcobwzsdaiRJ7R5woscXSiPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XEF9qTZRna3Ni2hrFa848jQNNE3SqUJT25kQvfsqUSXXo19FaRjwCDT27foFTvimLKMYPuVgriMuMKqFsnZVPEz",
  "key1": "oawNYgxF4mc27T3MwnRtFrzMJFuqTQ67Yp6NJ9hxKLcze62EibXF71RHB1EwyVbWbty438An4Ntogh6x56aXMhL",
  "key2": "5bRQppqnEfbre7v5h9fPEJLFGVGQ6KsdC8LZUerhefWXzrtM6RvMifnp6GhyWdCDvdr2bPuCE9vZcaP6wNLtgbbT",
  "key3": "3d6xc6kDUC8U5EH5DwXX9DFyz9erfaov8M6FAococR2jMjsHvNtG1ACcStbbAWW1R8ySLqTWTDN8J1efFhysd9Sp",
  "key4": "2dHStFyj8Y5nFTtGRtyKJWyqQV45VouyRHJqNakCPmkLshjgMZfjp1ozCg2bAAd87iZE2kpjxTCArfaqCDguWZK2",
  "key5": "3i83CG1JTANws3N7NJr5twAurJdS9xhc36xfuocwnx11bnaScVpqqoYDYFQD2xeeADWA5AoAAr68UcSzYcpFJH75",
  "key6": "2YDUx3xo78H5qNgQpkGDxW9ciWru5LRjWdhtQeSzcLZ1e3cftVcLu1BTEmdxtBu7fcwJVSH5eZC4X5SZ1HY3r3Sp",
  "key7": "2AuKoxPNQpPSBDCKXPv9FQUGUwaiwPq4EVVja7Gvz9gu8RZg4GHje5vHREKe2zswHDRngXV7XGWDPss7kbNgcYEm",
  "key8": "5ydV4KgW6w6mrTLxCRxEKRQv2znLHVAt6nvoCRVDvDtBVNdfPRqPSpGAzKB4dbVe98Z2qCbu2QUgLDRf5aD9DDFN",
  "key9": "66iKg3ehkAp18vXg94ZGssJSSx3wRZ2vAXJ16PPpioZE29RZ1AcqjHjgtCQAhGy8qxxamkPLxDYxQbfiEJ93M9zR",
  "key10": "3h82SYTqE8ue6cjLhiWN4vRpWXVLUFrzWMzGSPCNyCtN4yFYefSmJ2eW9z59Uj1tV2kbXjnjdy3Ta1ES4RdVjHes",
  "key11": "3bttRRs245AcLUzr8g6nSPNdKncgyBsc15oAZQrvftRuGat35DXej86ET2UXfGnpdR5ZPRkb9VnvgGpnn135QLVb",
  "key12": "45ef4Ybjh3Y3dEbSsiRHrFefQPdwFXuuM3sQfvnRDZAXqF36enw7u7Ucgvn85uMC85ktnVMtqXtgwNzZLr4SVBYw",
  "key13": "w1AJTZBfgRFvw2SHEgryPzzigjA51SewRY74k74zfAo8stCGDJfx2MXjHWRUNee7cX1WfCmZ5pyn8JvxWXQgJkh",
  "key14": "4bkC4QuGcNxeDkGnNvLmwZLP3HXHZNE1VSZ8H6AqA9ZJaKrf54GsNBJup5aQynRyCNxaf4tr83UgsFe7KSJHHGMe",
  "key15": "3S9jFjjNLU44ZPHZNK7xCfTQaHizCrpFiHLJWzRnGZtg1NyKfXTWJQxkcPbVQ3XysUXRpfSoY8pzuYJKMvyqunoS",
  "key16": "LvSPoLzpCapW1ybqV9GwJKTE5LYCdRsVULqZUnBXvrvGVSkYJXSqsdooBq4aCsZqhRRYTkxN5MCzcE2Z7oExwLX",
  "key17": "zhkKV47tfdXTHjrpkEeqPjY67sKxTY9kHTPcPkBeohjqE4LiYrbb25oPpZdozcXeocYf8PKvLkBtTaZCXGPMmt9",
  "key18": "2fAPQnPLgKj8h1WRkamE1G4kzK2ryfDyuTpJ61zNhmKhBjimf8CREzkCdLiUkPLeUEwmfoJRZSqNNYq52haHDZaW",
  "key19": "4Aafusnn26zNC2LJ96Pboj6V85pFJ34GDDQ1sVeUZXwZf4fkG2QjCoMdWQc2kNH6B3MX4qgCFvgBKHPCRNsA6f1h",
  "key20": "5URCWQHvjnwtpVspdpjuiQ2zXYgeYdmbUsgNo4uYXyC56SXHM3mVfS3EBEQyVNQcFUdGGDjjHQ5vDyjMJqNu4GFS",
  "key21": "2io68MW5LkxyU74Kzi1kVj42D28QEBoKwzXQeFEwCGG93TEr8GR8BGcyksdvaA8YgAxoxsRDnFNyG6fRDBJuWW1R",
  "key22": "27d3pv7NrUeKxA4QCQWEPsa33XojBGop5kXktAY5wmhPqwa8DWXwiAp75JzRJAnYURkbKvQiUTStG6PxXFqPrxFp",
  "key23": "3gdXMiWssDUbTZyNq8j5pHQPfp5VS5br9t3h6B189KKw9vs89fKUhVLA8QEwZq9SAtwaBvHHzrP45zYTDMKoWjhz",
  "key24": "1UE5NRnfHV6GH4SiR3aeEUYS33UmCaDAgMci3N8MKdTJGbiSuqRiaJGvfyh5BYVDZtGkHj9QLoZ2uvRFGffviza",
  "key25": "38JqeCUhBiJbhdX66qqZff3NPmnoK4GSHJmQoPDB6ykKzimFYTyVnUYdfmpc2RXCu2UA18cMc3iorhACYdSScu9P",
  "key26": "sEH9hWmpAT2aKVTvTioCbQgYvBKdRdNfopHuGdu3CWApuf9BxeX4tMNy5ABoRhzGZ8MkFQt2mAE6Dp2ZimkWsaE",
  "key27": "64ZbLRVxTUFms6cTWNM9F6b526aDjmJ3wDin7LMpzjg5jZonc2fntAQ4TEjaEPUanKthwDa66ZNgm4vNxijGbnGq",
  "key28": "3PornvBcZBQRPZfxbwJpZSJBPotVL3J7x7pWLvHtqb4K4EETnGC3R1B8au5ZUyt3neFrUJ8rvzrQDQuoyoDAX7ZK"
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
