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
    "eYVqsxQ5wdUGMZ1Q834xmGeo3wrneiKpTXY8egqrdf3QdeTPNYDiV7jMM3bLAPaXkfSRMmL7GeyrEPStwA3baH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QLK4gFNyfCFAnBADv67wkbnvp6bXZ4Nz3Ki96pUhjLeVStQMF6BTrXqyynqg42HmARXUfhbc1WUhB2nRotm7Jwg",
  "key1": "DCxo7E9V4TmQ4tPyKdYPmTAYL3cfpnnMKhj2kxf9HPSrqqEFYW9tcg677EmgwcV9FLUxeFvBnqL7aXRwovbXTTb",
  "key2": "HDKb3ffcQgPM2bSTTbJeAEYSkd4hB6TW7uJzCGpmCjnMBkc1UVdkkuqra3MkLFT2smYDBQk5eBgRtQAM5pw97tm",
  "key3": "3L9qb5rEH94owQgwsQP8iGnDBvUhPfAnJThkgL2BxY8nu9pB9jnuseMD9VE7Ck3BtRykyEzZkHhfDDhrENpv4NeJ",
  "key4": "32y8VAe3HC2MnPrnTScXZwzGEbr7NQ8ZzYHxgVWuqnbKY7vacGte4TW6j3tcMYVfLEvWkofxmgDzssg1YuDb9gz1",
  "key5": "3HQZfiaT4dkzxpgsknEUsdf7EjiyNMUxFeVjX7egWu5Vgvm95KDJye1CukMDHPBwzLwPNxkvQhq42ymxYBco1jgT",
  "key6": "3fa2VeF3PtVtqQLZJCbiLCpoA98jo3Y7dUAk3mGKgmpKvLQJMF5KfC4BE7xNEmLs4htEiUFKj8vDb8gsAGHsL1bZ",
  "key7": "5BMuvf8Xe5PRnXSMETYVsCmnsVLaeoj5vJxLpiNnbmZfMr5HwcbDEGGE6LLo5QMdRveFXs6zhVHM2Qn6JTYixRMs",
  "key8": "4UFCFC37k4ym9KRKxgtSUoRJzGL3nszHhSH7gFwojmjZZKnpuoecLfjR13RVd4kqRT2C8oyoozagWt61QK1BSGWQ",
  "key9": "4FV37Nn2nMceNidTyGc21yjEb9CynDeW7ArwE1Cx63Y1P9QQym5ZKRXtEywA1rtePq7iPGxNQUrreME6ezGSjxTq",
  "key10": "97ofFuEEy8W6sDgBkX1hKKiY8p17wcYefDZ4YD8mJ2uoJYiKwrZmeUDSc4RCBdMowjyUYJu6TrHmZozAXPc7qTL",
  "key11": "3NeuFVK4VJwrppYnB6hhV9zMqLRixNRv3SsEVCqKnQwmZbwjiVY2XKfMXFbRbwuK3skW7mtvhDWp4xyZyoW9DZ5y",
  "key12": "424Qf3Zmbrg1QwYDswDHGZevUsEeYUXhTkQCYL4zGCmAmqugna7Ft8oa9s4QMRHbPdwy1LWDK8HC6ZQjr47Cw26i",
  "key13": "5g4Wt2k1LGhRwf3wamc9LbZzbRsKMPepttSkKvH3XKMjkJXhPkEshgLuj4jTvdMvTBSETdr6eDhN7q6eQJP6DKYv",
  "key14": "Sf7d5AamGQQc3sbc3wHgFfmXhcTgLFikG5L6gm1SWzkU92bwvBfpLqBDmePZPuqmL6F7kMo7Be7N2xWBvaK4z3e",
  "key15": "3rawP1pAeRUe8X2vNBGk9R1Tb451Q26MSNhtZGHB5UQuuWngkRzWeU2Zhvh2iJB1jhFvKFPaZTGVJn6ERwm5thRw",
  "key16": "2LoawMGQcjmLRDwdnbeHfU7VrrYiZ2kWuxuRDobVRfHCK7fXox4tsAHasmK4LnL2MC5YKYxMpUJMGauZ7m5wzLYy",
  "key17": "4wyYW49QD1x7tkkTytKTK6HV2i5xAmb2hFzmgjYxz5pocUgpPZg4MLuuzp4n15ccYLcnR8UhDiCRy95oAEjNHiF4",
  "key18": "2DoVSY1wupzjknu5eX2HPFaRjaiNN3dvDGwHhGVW6EaYq6oERmcgSTjjqGi6upL2P8TSJy18e6m1heHzjpKKbLc6",
  "key19": "3rnCgdJNB3FLn9Do2NX9jgQNj6bPCug63GjzUhh9ZLo5FxebsLZR3vG7e5dDkpTUWLFsYWuLSUdJ2fyk7wg1ALLS",
  "key20": "BWxDWcNTSzjZ4rRQchTCeNbJmb8S7ypLzQrrpa6dTxoydvq1QCv3tyHbqqTkfco56yKxYDgGhdQGkWaBRXK8HzB",
  "key21": "3T154o7nN2hnKdLAzgCGEvoJezpG85XgieFpvKCwLnKoNZE8JAiumond2G1ASd6eiMBUKxZGq6szkhVX8oqYuAME",
  "key22": "67UdVzCQ8V513UmvZHr66VH9bxYTP8MWfwt8ummxwi6CeuWutifWmEn2nFEKtq9LaKUQWaJa1cWJ141F9YUDF71G",
  "key23": "43CgRn7rFwFmwKKmiz1qkKVfZ5GfB8je9B8DP7N5d91Jukf6zBC3thAvyRzNArZ6pdz3Gs98jpxjzBZostWyXHwD",
  "key24": "26ob8C2gt9e9NXTjiHxGQFRdDL2UFdPebsFMBFdu84hUhZYP5tAiDQeZH2tEUYcPpEcSkkvNxK4pDn7Xks2xP4sd",
  "key25": "5uNsoRvbU6ub75wmKSu6GeYsSUdPmZGPs9Rsyf9r9831dVf4pUiUKw5WJBsUVeHs4dJXjzpLq5oUewYb5AgfZFuV",
  "key26": "64hBopqffdUBcJrZmjdcfg2yDsL4GiQcbnv5f58jk9TLLheapYZDottdtqTZqEnNyRoP1mNEMU5YfzNtn7f3zz6L",
  "key27": "5oxM21Rgs1BfDxABUiYmLACVzq9dVheEqhPeXNPPYCatdArBGZcvaoSrN8qXQKctybLPNZinL9iY1kmMFN49Sek1",
  "key28": "5hTk7NzBwkAVVc8JA2Uki3AtKdXveU1hEZ47AUDki9oxJd4E26uUALoJh7sVooqVbUuM6uN75etzDKhrkzKoLisL",
  "key29": "41VpG4knV8Yu1T6eQ5ayGkcPouDaYH1nn9kAvLmHs5bdB16daUNGNBkiDwD13GwSMhCsox7u8qaz6RLPfbiJRsce",
  "key30": "ELWKhx6Jv4SsJqVpQjAbMgL8oLHYb9JhzuEM9Tnp2XMkPUpH6DV572FoSNe2KRJSGUSqCatvgFTzPiRUb9haaAP"
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
