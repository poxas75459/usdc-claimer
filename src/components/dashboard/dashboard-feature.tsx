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
    "3R7eCZeHoRXJE4uE3sPujsd9mGuzbwngMsNMNgSpSHpRRMtFmc61FT6i9g6gm7CUpiaqYKstdVDEMWMknkJ8hKPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pbzzivDB9WjveW2RNh6B545JU1f9EWq9KsouXKEwVyRiChRcvMkkdypdywAb27ZA7JgU27VaRQeH7VvW2DqnFN8",
  "key1": "5aD9xgn4mseVFoHquY5emYkUMgk4SPRmSkQEh6PaJskfB1xAAMQXt5iJc7jHtBjxBAHmKi75Awo6QFnvsDniBAnY",
  "key2": "65XaEZMYt7ewtMjwqqSNhb4KWwQirrXrXmwYRaVcemH2QWZiqzjFCnDtMmVJesejfyXqB2HC2mkNs8yXUeCrjLXZ",
  "key3": "5DHERr4XHqsBoSBq4zJ9ZFDitruiHGmRwaGXFRv4DaYiC4Ku4qFihooymKUENognTq1qNYKut6QwV5CuV5m6zQXE",
  "key4": "5LdeT3Bg1UJU9ycbuA8NwnUhSReMSHmZpNF1hXBHbWgfGMhbT6tSfsDrNQmYqydmMyBvQAzxYs3AVCsATgr77oC4",
  "key5": "5ZyLcmrXFFFNaMjeonQYEdJzNqoLPNVKbf66fv6ZMx2iDjhBkQ2hNvva9wvMyutvvG4q8EzK4G22fzjapc5XUazy",
  "key6": "2CrJ2WCLt8SNuE8PHjc1ajbTPki13ivE7APq1GNfU8JAUEw88ZUnVWxXHasWf1imCzYzd7BWMLCVy7y2CabKYys6",
  "key7": "2qkH82h39JThyZF8WYgV84ud9ovDGA7HsRiekFQJ9hq9yagMRoPLjKTAK4Np5qzLeXfDFjxFRzAxsvibr4AXihae",
  "key8": "4s33tUQ3EuL6eMiGECSfLefDeKaK2GrPYc5dHFr5sR7TiUb4Z2vjJAgQ1A3ar8xEvci3Gb1HE7LxqUF4Sgqy9tkA",
  "key9": "2xmzexw9yZuCrH4zD995iWekaewuzvCG8wDduvhZgZfdyqbY95cQcameyjXNpqUtAbN8c7BX84BCz8ZmMySTFQGc",
  "key10": "472bHDnDJ6o7792zbDXZbTWRNrTDuqpDF74WVVNAeQzozLqNJBXX8zynufbHNRtTE9HjjdjnfyuENEnAGUTkvjWn",
  "key11": "4UvGCtsPepBGVetckTMwwymDBWxqF85PwxiEtzGCQZNfp9ko9U8cpaYosbJdtC9HCTDjbg9HQXxhiUyPhj5E9MLg",
  "key12": "3NM1TzcgGeYxa88KzhFfGrSuZsmHMNSNfXQGu58Koe57oBrdHfQyW1e4KDjdrXbMJc4sTSFHaVSTcSvYhjZ95BM9",
  "key13": "3kvnoTavZ8iWDA5smjimTBSzE1RuixAYDi1pHJ3Cz8bPDxZQUAN779XyMtDWS4WymPMxgLp1Nq5PkSsigMFT13dp",
  "key14": "572Um4Cdwwk2pfjKwoCsnzChU1RjsF98t6Paum7dfnbpVEFZ5zNCaDcf1d3mGFr9eGn2sho2DheGMZ3tsuvEWa3v",
  "key15": "4pu92vz9ievmFYN8945uEt4Q1pjBsVkN3GU2bYWvyzC1hvP5T83h1Eu6HnPCMyz6CvuT1Av9X4TMzAU3GQHVZ6UW",
  "key16": "BidzrUhY483wCPpqTWTRe1WifvgHqoh8D8jiuh3wK2eVdL5qkuri7xPetiNJ7F3NzVnZBR7EZpdLvqwXrKfMEM6",
  "key17": "3NYMb8i5C7wgsWNBqkzzUYATYmjEjsvfspsg2k6AyWe9bjBqigtRoDDmzWFmtKmfy3ewC8Mno7mLwwVpHqvCJ5vW",
  "key18": "2jnQi3zCzyV7QHd2RitTQnccvWDPrPv7YDGQmVb5CwQ2qYJ2fiPE8nNLXN9fsWvzPgnYkfdUiwJhi8USLDHP1opu",
  "key19": "3FuJnzzcq2RRr9Q8iL4pdTpPbMjFpwvUrUNGM6tdn2vcR16UJjptLhAutz2g5e87okoKUQ9KAMDNee9sK3ccjCp4",
  "key20": "2MwDfud1U4XuyLFxm7Gi5134MWyrGqEXDKuxGVGMjfb9mSQngcnB8AaoFdxLugxyor13F3fWmZejWEV7T9F56pLT",
  "key21": "BENbVCbWwBt3owQw9fzbHPV5vmc81UGoRP9PqjKLDud484JtThnvuPhzoMNrMeoZgGNxuaXh295czdxKUJxMH9t",
  "key22": "W4T1Mr943jV3ZRqCFfu1pjubodfBShBW3xGxjZjqicshUnax7BGRgKrfQzJsPDUYM94SFyRTKXpmbGR9es2SvvH",
  "key23": "4SE1waMRn9g2efNteDGqjLUP8Cvn1PwFUfzYS4vgBg7brNVno39N8ZXP2eM21rZP21qJbZMWmC2PYjQmTaGovPvz",
  "key24": "54RotAEQdJgbMgyM4VACjeEmoBJfquvu8KnvzKbnxmWzFHAurvs4oh81GxdWgAatSuZc5g6zQBMuGiUJyWMCknjv",
  "key25": "2hcV3XKkiVbJG8fGTbcJ51UXANfd7JjMpF8SGBiYVba8DwJ3YRLEtS6PFAJ85hn5Vmmg7ykzSThQwvLPF9n8fexd",
  "key26": "BQWPUHm28qqrRXqJGodcxfYKj3cDF5wLVJVma5fEuMkfoxZQYeYyQ56pYeAPWzXCehhXadxH4jDpMyrfbqt7Y3y",
  "key27": "EKbYpavaabT8oMfSKXhkBCrDRSfLHduTvijCuSAGRa3rgfRngu7xXvKsqwzYBuuMPjkLV9h575CpwbEzT7vkNc1",
  "key28": "5SgbyUfW6QdU7KwLXoK48n1NwwTd4Ne2yHWMANMurFXqYuHwUF1vfRGqR4jeQ5wf6EAz8HAJjPXju3K4ZMtdP3QL",
  "key29": "2XRVHSYyCpTBt5L4K6jUsiMSHZhyUxmJLRrCSkXJpdMZCQhhHKVHjnpT2zuByY1PyU4nJj5yVJ1SafRLgYL8Qpim",
  "key30": "3KXhVfgUYtHf2CFmWo4PYb7myMjBcA82EyH3vTBoBfwEDVpcr4PALqBuSXqEcQpS1FBuWb5DaejE79prRr2CHgxr",
  "key31": "aCZ6Qw2D6RnnFrUr3pUijdpS2XtWEDVqUSXzhorXfVpsr6dzQ4qHR3UnmxPTcT7NrxAwEE7TTqs7p688K7wYSzT",
  "key32": "QxXGSGSEPZrMVY5TW4ZhCJVXLnvvtsYQqZibL5xeUzwGWK3ChfSFgGxQSdyTGWc3XetUzxp9NkLR1DEM5iM271a",
  "key33": "5KY5LNXJ4z2qHBW1vmBghP6zCG3sNrB2GhALkPL2hPZ2rsvR3U1nhPH2ftN1QiVAhLdYjdxu19ib8eM2cUguf1aG"
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
