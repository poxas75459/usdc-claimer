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
    "QVAsPzPjpHHQF4RahVvSMzMKbwEqRAM534AtDC53314kDqHn1Tu4sEFLvXREFSmBHswxEHQNPoFjRFjNQ9H4n3S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eh6vThALMbrVN29FfPUvoRquHEg5vNfxcRVcTVepuV2xCjhhZJMjrz8qdawmXaswVmG7H5ogsxs4BVyKjtL5LZy",
  "key1": "4y6xHbQ4uDksT4GZJEzbgSZ15FHbsKQSXi5U1YZP9TLTDavCJaHLXmBF3KAQKMJYCjsg7wWZ3ykFuj3AWFwH6jWU",
  "key2": "2qcRNTkEkXgUGerCY8eZJsiwfHZmgmxNTFtiXCL6s8Gk51PQ6ERkaC29S872bAjXBDS8fMpHnKzQZXz2bPvdfztD",
  "key3": "QdwmyLCDFrz1G1mdewUS8qt1BN7DVSMvY6gQXokC8WaTt1XQC2qrfg3XnYJ5ygYzSWcf2jPGY2WjFASvf13r8um",
  "key4": "3BKrYsZgiTLJbdLycHKf4SL3mpbSYo9DUhuT53cCy3Q1VgQ84z5QWMEKJqhijgkJ6NjChqcs655zVKmcbN5JCJhh",
  "key5": "LKHJK3Y1eV1KEFQ6TfiUYnfRE3sDLKBGgyJj5vm3QyxXrpgJsHspMyTDwkizc9knTLTDGQz75wyzsjABzSotbkp",
  "key6": "2TD1rBCk8cB1hhPifNwAx12J9C13z4LYQRspwNibXfADp2bMdJJfZPiC4R5ps2YQT6LekZpDcmEezkqHvoP6iB87",
  "key7": "2nRLH2FqmkTHfoNA7nt8aM6rqHxVZWtoswhX95KnnJUcU4ozB72iCPsyBkgpcW7SNJaQ28xutay19vEpNRBzBj5w",
  "key8": "5Km5CQbtVWH5qPPrNyenEEZriLnUpU6SZ54uQHknPLdhQUggAmwYzaqCHUcmeWsqUU5mGQ32bAJcfUkTPKcdx1T7",
  "key9": "3XEhWCWLN1WDyudb5dBfMT2ic5J3gmA9rzycSMJy7eYjtrSgTtHaqbEGPLzV1rHtzw3jcCLux863UZYD1LP4PYRd",
  "key10": "3LV5V5mSY6ZuPP3Tnn65BKbznNpcCanTgtavcfAZH7m8ezzFTF6obNkiDbKH6agnT9ie3Kx3eAxTVxF1D9mfL1Aa",
  "key11": "5Gz73ioaPFva1ApyEUdRbCC5L5XsMR2Zt7Zm3JVukZxo8rNhfxoAGEq3JJPXdGqYupw4oefwd578UJuranes3Kxx",
  "key12": "3sptdVaYnU36Y1iw12w4DCovY8TdhkZ4XWJ7eEeAorhnQjTvQDNy3cLhs1KQf6Y32kner3yG4JPC5RxtHhwqLsvV",
  "key13": "2uH7nrZi1WcqTrNcoEeys3XwVe6KgeJfSuHd5EFTjg1NrU1vW4M5cLMaMN99n9Am67LtUnQnzgeUPXYsDyid5H4u",
  "key14": "NmF5FRnbjYCAxnXkZqnnkAbYR8skjNgEPakwTFFosvLNpzCSnrprqF5PAuZtf9Ms5yds7tvjaJmk4kdJYG9Aq5k",
  "key15": "2wECtCwdiCkxosZgM7c8BKHF8fUVrmZPmzkgFphjw9AntcVgHtDumhuo9xHax6SPDcurXdk3gKCmkL2U5PpqS8aj",
  "key16": "3VH4xvNU4cRBbxfmc8W6MwsEkRYDk4yBPPYjRXnrmQx9SJfsihcnkX5jaVu5HZEiD8jvVyiGe346hVg1nbym5a6z",
  "key17": "5TiDnYPTas1pcFieqtJmbiCE7WMZxq4chJcvBir3oxf6wAGvqq3XoA9eEbNbHELHb1wPTkW9Aj49PpXuXMtn4NyH",
  "key18": "wxBcdzq8t9bzdX93oUg7iYoFxCbJAQP62qhne3SjuTkMV7oRHXtHejUFncWC78WMi1XX7fhqKtoyBz4T4MGEDuH",
  "key19": "52gQRkdu84feoP5Na1TCEsk9xP5wKhqcaTUYwtBocUaGe4PZTV6Ck2DnBLd9qtGmnVZuLRuwL2xekFofL53P4vzc",
  "key20": "3Jr5jXcoj11NvCxQQjnFyGVeRa4oM69Z9UfFt17ofyMPrEj1fJovsq33xtogS2HRKdnDv5Mr5e9ac8RHzb1SRx1A",
  "key21": "59kQt9c1QFaXQDhV8XasTZR3dyu2aegJpwt54tPGRn1EHqUQCFU9Hww8tV1aEq8NiAeXPiTwLrLqpZp4RUNZCmYA",
  "key22": "3qAiCcsq8XetwBz7THja9oFKGYgQLpynkPVYfxFTyk3vsCbrz5qCFP9q1q1agH7jf6FMxEAbu7RCZfTb3EmKqTdB",
  "key23": "5bg1fXP1twgaRi69uWa9AfBhYtmduhBXRHJaNMa4MNMD7YFa8cdfc8D1iMVy9cUxj2ChvuGcWeaC6jocSN5kZChQ",
  "key24": "5tzi1JP2PAsnJjjAtUb67s6duCR22scjzYwA4ffLm8L6Li35pPRySi6cr4hWqoTResU4mR5JqnjBn5zEYddmHAAn",
  "key25": "EPpUPNPX8yQvub3Nbm9MVA6mhhdZNYAnLTCtBWgZKf4nvLba942WqLnutLGkBjYd9ZUpkryPpGWkvWPWyXsrz4v",
  "key26": "4TTLwbE71GJpzdBiFE244YWms3kGMdEETNJchUSiQ1AF7NLS3QoSRS9ReUyHaV3Y8HKhEJCXaxt9h1DmoiCuS5oF",
  "key27": "4oSNe2S9L3aJ5asjMuFyusymmTpfwLX7BGpvrKvYo3B8s75z13K7EEUe66bSpPoTZGvMdbpbFMSwPPoZHhmeTP5F",
  "key28": "4jCLARedi5UucCXsyJ1G3AYGuce47DWbcXSjgsKGYjFnFPLejJwJTeyCu5P7qWXpYamheqYRawSk3m23QtJj8yVD",
  "key29": "59Uzs6J7UdCLti6Jzora67M6MhJHod5WafEwenL9SPTAwrtSSrPXm5TeSjcUCnbQPXZ9VgQiQzKcSp2AkzLXorL6",
  "key30": "4Qemp5cbPVqgPBpiurG8p9NJyLpGKNR83X5QbuX6nBufEvXJJGdtwtyrdhgiyL65kig11kvWCQHzxfRL2tbcUc6E",
  "key31": "3g2a3nWtoisJvqvxf2ZVVXdH8jbCm66p4ZDLVXJWb7mnEa9jCg8gcp4P5u7EtbetsEo53MfuFjkcaXJ7hdamhjQq",
  "key32": "kyu9oFHCmWaacXuHB7cHxm3ToXkV6F9ri8YQg5diu3NYgoqgBS92AXPMyVwwAtrQbVKM3ZLdmhkT8oezTK6yPAB",
  "key33": "2AvYVtnYPGsrNVreZb54zLQvxxfiSMYJaaAz7GUsvQ8MX3Sh6hm9aJiCF82UB9RXsC1mrWPEP7ULaoEpZDGaBKTv",
  "key34": "5PdzFVWoe95Z4Tst1KqgZPQvNMHctBif9xHSaoE9MyjBfum4ZVA3Po2FogqUuu1aeFegELh8Je63oVsDh93UK9Ub"
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
