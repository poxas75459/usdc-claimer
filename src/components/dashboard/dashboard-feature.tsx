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
    "5o2Cnu3wdGSwadFP7QezdNwS4jTBvyGjWwGhwTnSrwYpCTGEmeVeXJqEo9SXCMLKTb6Gg7y5uHfSJzg7wo6imYYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vnjDjuLc1i1Fu9hwWb1ZcrSsSZJVrtxnoP4P9hYrt41BuUmdeboA1TW6V2bpEHzJe2Etq1Y2orA4dravKsjXuu7",
  "key1": "3524sEdqBoDfH1AB5x2GsMHSKrSbuwrGjpCZrnn6iVAotuuAAnDp75nkYK5MXDU4RVdV16cNyYN3PisS9F6nfYdh",
  "key2": "5LjeFfvghkBHtWjQaiuR23jXPdXKneu7Nxvdi3QnnmSmCg9a5CJdmVEugn3x9LL1aDmM9JvVv9RRQtdBCmYqyRKD",
  "key3": "2YEi4GYUXttv8fap7mgn7FWRaD1XDXv5DSBTABmVi2ckpx2h7k3MT23xsUpskj85MJTPtdfwGdU52rniR95MFroL",
  "key4": "FhczLCFHfRcuPLB4a7ogdAaaCQ5Hy5oSP5D25jsBSYG7fKHmdQQNXGhXUksxb4bN1MT1hQvM4o6Srv1rRk2ca6H",
  "key5": "2KpgJzibbPbAm2k8uWaqR4i6XaATCWCvAJQtcUmg4oPyzfdH7TX4gJuPKjaXsHUGUG9hpc8KTxX9YBFXrWDJac4c",
  "key6": "5DGTcLhstKQZy9ofzLnYNgCgdtVSdUP8LEjLpXNQeodzRvRwKeAPQaUtLzd19xhvQCQQk3A33KstGg9CuGuVat2K",
  "key7": "2Sx4Fh763GHZvoJjXmzE1Gf4AmREZpVki13xjzVExbSCgKzzDJhwgUFYLk3aj7r5jWeAJFDixVQ6TyRwu7qvCM4w",
  "key8": "4rVEQBe9ZSC4WeWi8GoRpf8r7BALhK224UXP2RpE2vKAimHPN8cdQ3Kna38ktWcu5AG21L4QH3WmZoSSuEMCRypn",
  "key9": "3ruTXGBcviKs6NEPnNLsdvAu7Wbp4KVpmUb6fmkqwAzwr1duY6CVDHPKXWVvHnd4KXGh5Xvyg1KSQa2DUwdjrEFU",
  "key10": "2e4fbgDCsBViGdWjB3Z1ExxJaL9ijriq9JqUHevfiSEWqCYfr8kiwiKtXBtENrdCxfMUrTw8GX4Da7TWXR4MAs5d",
  "key11": "2szjeuZoe87zCVKucZ1BBjLBv3Hg4Xe4r89APKt42Le6V9NPtw46TTJhxjoAsq5zLVx5Z4MBTf1z8Ea1cpiA3heu",
  "key12": "3ArKyzfxA1gw9133c958BrcgZdZS1Y7XJzLdwQb3PoMRFyJRDR1aRr8vrPJFHusvnW8GbMt4fyoGCZ7tytK72wNP",
  "key13": "4gTFM2x7Szgbrr5snXzmCtksnXey75qjojSMfmgscJfqm3UX7tJUe5C2azpaxmHxXvyccSn1Vg8bU8MJsb9utnKs",
  "key14": "5tZkhCA57QrfYMu9uxxMMYhAu9VTNE7dREZK9DuBmfjb8DTiEYCDzvR44PkcLgt8zumSjyoNqnyhdsehvUowMryd",
  "key15": "PKbzPwEfMZNaGz4wbhyhKn1vZZsrGbPr3CVpdDL3GSemtUw6dsPp5tjchXVvX6tXHQ1ih1yDcwBVvC74EsjWmkz",
  "key16": "VFm3njtD7z1TgSKYcaqp9GSfmrsEoKBh7Yh5bo8UvWc6ZxT6eYuMa6rNsHkENe3WhTtcFdnnmWzw31tTk5Y14Lx",
  "key17": "2wdoDrnPiRKdrFVPysmXVD7d8bkQZ7B6ddiagG3Tj5Kcz3rzRKVqsZ68gj8jThTcqdXZa9v16ir8aDGnjwHRM9ik",
  "key18": "RvDNpESMSsimZBBdLFVkPAfrt7dzoNa5SarjuvJ5NwmVX8Po6UYWBtvD7UUoAzfdZcGFQxH5hti5PmHeuDkAh5w",
  "key19": "cugsXZ6J3DwmtJ3GVVLjSvFdJQxeEgU9AoG63kotn3BRThEazLbZ1iiQFj2TkL3Tu1H4U1YS1Z5XtZChHXsNYPm",
  "key20": "2iyhDqfx8yTDTjj2mqjeLimWXyksvMLPRBzw6baodiY2ZgRULahgM7hQPaJenn35kjjV6NPwHRVqvcpciVYm8A8",
  "key21": "8MhSXzDScBM6DjvRthpWPBYaejt2ZHk6YRJoU14N75Zwek7QcfZ31xaYZVMwxjJroatx7XQeAx1oRh1u3HAZYpg",
  "key22": "3eeo8wzgqtsMxb5Arf2BookmCtJwY4EBzphXTT1d7NNsLtQnAFxZFMJrhXLnsq3EMGUDwWYUqKWzA8youUQ3GvKv",
  "key23": "4phGJaH6V89V3Kf5WoyUgCijDGfRSkyKx9N9nNC2JTCtnN2iYbp6LFJsi1BXM7ndXaMQdZN29CoD5sZBofNvHDAk",
  "key24": "SwuV1CfVqTtmBwdgm1pcYNuyfDQPj9i6TZXBgi3w7zG5ZWmpwxkVezaw8RdBu5EX42Cepe4ejcM9NPQg9Qcbff8",
  "key25": "5bfyqq676MiEG1v93SLsCfj378WZ66AR5B9qMrSEvaoGHgaPEERVWxEBRBN8J9nysFMTsAYw6wZgsgwxijt1kBfS",
  "key26": "4UFnRtZMaa4J2Avw3H7CMVaEzLCr1QWCD1d7Au8f3ZpxZDJpfAPC28v8FJGG3Jzh5oSUySESzP6eNMq3J2mzDF1i",
  "key27": "5Ya489JabDAWDsPXoXT1Ca552icYFafEdb6EYjhAF3ZgKbRzxojhYwj35TM4L3WTZrCAJVeVz5itgj8E1fE1MhwM",
  "key28": "4cEVb1SKfWizYFqvQJX8GSivhyacS6d9JarZufCvh4796HptcS5JB96xe4YJZL4g48BZo19HsrhbdPE3RMVbWT3G",
  "key29": "2RDN8CacMQFTYQdnSGNt5VL9uVMgGxrjwSBwxWHbVHP4sbTYq46giPJywMpG21mnLssSgBRVvqxci3DQuTuiaZc6",
  "key30": "5MFhjeTZsGrEXTsivwLP5qimp6tg76YmwK1Kbd9FQXqQ4fGxV1jRJr5ogj2Rqey6kmwtwmomnmLPxL6Vg9cNazaT",
  "key31": "4NY64hdvvZpgTq8iGWCdpSK7WqNaCEzM38QZSxZUhnyEcyShg4aKFmoaS7ie2ixTWQuBr32NRW91mxJqP5QfvftV",
  "key32": "2zL2sw2wSXxs3FvfjfSPtsMyEaPUQN25HpVgQC25mLMDHcmi3SrE8oFPiYY873LixZpmugKLGedaSNKwrbJmQ3kV",
  "key33": "5oR1qJ8oW4sRSXxoZHtdu3qrQy2NZjcVDpAkuQrv31HQQZMgp9g4Bf3Hu2y8BzeWwRUScC9C6UYFsDXHrpkoPiYM",
  "key34": "4M3rdzwKkhLKFK6yg8gE3Z7ZoFJXbhC6r6Bd7qohdYYyRMyMbJs8HWfY1vtXJBFSK7S9CDejnSKN3sc4ZxbLKdzs",
  "key35": "39jwexcC9j81RGmskx8wUoHQWCfHTHQdEFjQZgABWiHc4WvZL5pLqLGd8NP6pJiKD8wBSDJxAGUsP9MRSaKZRADW",
  "key36": "2YA3ZEH4E55FGSh8Ecq4cdrtJSmi35s4YDNTEnsrT9PcWmJo1F9jDGNNvonbfZuQUxod4WM8SVXKw1dbEmkKEpJ8",
  "key37": "2H8brz7ycDJ3qkah3eCZTy7Y18qbScQsjLS7usj6UDMvHKTJfnLV5DJvCx39ubEDET6DMFJ249vGzg17Aw8w3e5v",
  "key38": "4noTcgbKmRcR7GG7ZX26vjqH1bwVa4chv3jW1atdn79UCaEdWrCPmtvTZer1rTyN5vqCSJMWHuEKqRmkRjL4S8qt",
  "key39": "2kjw3ove2CETBKKsnvfDn1x9zBKMr8J5xdK12vWvu8NnTffVJazFbA5ypoApjbeJBfdMLi9hpjypZUCnsQY1JCxP"
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
