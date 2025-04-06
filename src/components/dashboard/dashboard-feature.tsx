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
    "Uc8jqazQMg9fmeJ9TguaKuw5DhZg7Qq31mdbrUtoTFCf7a9F6rGE1atd6SeNLJxfBDW8zS18jTUuRiiR91AptJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jxqVPWggNYTXdBNLiLBVZoYZ79yAhiqFMwdgPsXdKySMfQKPfc13G9LRCyS3g9XHDGS8UaciAHuFtZaULXQtQtV",
  "key1": "2CbmpMCBjAPnkL2raRNBnBuYm76onfUJTFqe1HWj2cb5zW1b55yG2zvwcAz7uKMtmenGaSR7hGyTaSTBZrHqDPuL",
  "key2": "5kxzdnfmgj9i9xkgBPxudBatBuohnLBqF7NuPLDpaFBBoeTYiuiPBhRouWbgV9vn8FaT7eMNHpMCWb8SpWHCDGeE",
  "key3": "5dWqyy5YoeA8yG7FVQ4KvmbwSH37QBheHYwPAVfMUdLbxk7sCPBqXqjAgPSuxSaBjCWyLmM4zT4iJ59H8sJzMYN8",
  "key4": "5yexv6nQTqs3mzUh9s6hSqigBUbjnvGHgvvccp4aroamSvU12LZ3dZyxHQxiEaYSkUVAcBzcYhcmjLyEu8n2dZW6",
  "key5": "3w4nwvbTkkRkJD9DQqabVnrggZiviG4HPCmar2gfK6By4ESskjpTSJQe6RLH1RbMPSauGe3NUNJk2eFRxAWjL2jY",
  "key6": "55cpUtcSHSUnjCUfG8edeZo4E4reHJzzJYhavMbCQWoTyYZj5Ss4AtearaaBGuwSDQ4bP4VXNVThRGgWPggeeRiT",
  "key7": "9ZRrTw4QvP7aZknNCQstQKFCEHD31XpqdnZckPyeaneiGtJEQp4NVGjWVBbwCZHDSa4nS5MGcJiBG8oeDH78LzW",
  "key8": "4LJnGXq7iyZ74AMNuo84ZtNGxbbuyYBLoNqZafN4irwyz5ZSxCJMcGeqzfp3dp4TBCh4V5VqNu8UU6gjwBAuuoPq",
  "key9": "61RXyRBZxs8UBJ6T5NZBfbFw8piC5rxG2Mq6A4RPksKBAJSjLDQ4c53KTgcWTgnTaxzjDyefELMQvPxPfMgdnbEH",
  "key10": "4twaA8nExSUFMZ8KiavedEFJCNWGRVnTYNFnmemZXhPdeqq63xFQ1f6KqGP9HcgqFuT7XC6fUNh2U7RLEmFnCgZE",
  "key11": "6PKdiiNitr62PtLqcANzYZ3wQxNRVhrz1aAZmpKMte3gbw2KguyDE9gP1Zn7gu6zmjdHzj321PPsasnKijHRbQs",
  "key12": "T12ULknBrHft5TzcCdZ3UmkW4MPCEL4PCwyxgcNw8SaPECfZUs3vpsVZh4BwCFFLkgrfYBtgFFJFkfYE7jSz4zD",
  "key13": "59zCQMBmxnHnyeMwWAuLg25j9cJSW5UGPHMtUCyniReqfjZvtYKySeBoR2YZtFVDRLkFsugg3ceCKLEXhTi8Gi1A",
  "key14": "32b7EQKuaGgaRTemS9QGSBazBu19DVEGxzoX27u15DzuB5b28N2c7g1nZCdK1bWpi7M8W9o7rEoCqANWfxUdhUww",
  "key15": "4nHvDwhVQNA3m749D1R9LmKFZtx5X4q2g1tmfh1ChZiLhjurx6SnGLxUb8jrrSCcHNcUPmrDSgXAZgpEaZV7W8Tm",
  "key16": "2MaFR16uCn5EHt9xhAwa2XnjgVQzTHCZ7sU8ZUom2sNwy6SufHGeXEwmvRpvXcehLKWHC9cGw71hoCyt1EP1yQjm",
  "key17": "3N3jdtTMLKbaGeHCKCifuUV6xQXTGCEAnHHADVoXwMUtCgjrESjKeHdV9o5517ydAirMNpZ7uQGDN71rsfW23a5v",
  "key18": "4VVpbQnz9aSpdq8tNRzVamzRPVntwzTVLC1EkAU7Y145iJN37EzfzJzoFPBEZ2EC1oLc8V672HF7TmWuodVzyJbf",
  "key19": "5N12HAFpUat1wkwChEF1AFfZVe3rhiZXVz1exxsyAe1zHcVpA8kuK8qdyA52As6mugKJBe4vB4DeXoyKj6qCjh8u",
  "key20": "43SKjvi7U1uaNAG8kgWqftibEoXehMJJ48ghVQ5r3fCsJeFBjqz47myMe3vhKVpAY8XHkQNqsLK3qHVVwdC4BWVY",
  "key21": "zWgNovhgydBTYYZuQ3nrnkMTuA3dQntTionVuvLHHAXaHU7ZxWeSjMdeuxeP1A5TDv4722wFiQfB2XXnrYJBVVV",
  "key22": "2QSEXBXdxuTpqhg8ZpqKyKbx49qPjDAZwehu47kmYgRf21eQ5TSJw2AEcMSosiXSRYRiJwMzhgwUmF1BFsPRKqdc",
  "key23": "XVLJ2hwgWHKkxTYo6JjtgHgC8z5NyF52Xn8Zzv3qFFn51Qk8e1of11agHTL6Ug91Hq7CEmPT6RCgVZgrkwrZJJR",
  "key24": "4uTdiD31hybzKrGdxts37yFs3XgYqMp9cF6Cj2ni8hZMESggPJcarZoRY7n8Y6nkrhj3PLWnaYg6xuAC2fM2wxnT",
  "key25": "5QrP3pybMmkCmXh75BqVh6k7QTJ14Miu5A6AfydW47F7fJVLy1AMsYWkcwM9gXzpAYC6KgfWLb88q6SuQ91bf4CY",
  "key26": "2nitydVcAUbKoziDepetLy1tFibzbcUNqm7KpKHxQXs6EG6gFDoF4qFJrx4bRj2KTwamduabehoQ9CUpm3KQdbnZ",
  "key27": "56WGTBQEG9LLUh6QqZ5gxg5G4KfFoSqiXQTMx7Yvg71RoYXv9vhjBXz7cPP7Lr6hcxDufrk21fumoE3ZubegEQhY",
  "key28": "2BtktESqskKhYR4mpJoySKCTobVan2PZtoLQJwNvXD3tcdPwaBg7wJZcpUKrMw4acaXFUKHMkRq96v5nozn8RVB3",
  "key29": "2toYpEPeDJguL53qYb9MDTAveAWjioZW8QfipBdV37Y5VkhF7a7rWF2xBdajTRcS7j1GZaP9ab2Ca6kd49TjrZjf",
  "key30": "2gTh4dnE7ucGNuQwsuYdbVj8TzfYv537wX3yQ8o5fxDXSKbUoYn42FeHvh5nmgQ23QTVEk5s5Xny2mL4r47ZRCbF",
  "key31": "NNqGAds2HyiS3vQ3NcUkC153n7qVUib3kQLd6AeViuGsDaxtJnwkHLT74XtnfvK6KFBqJnofA1rLpq4o8ERFf44",
  "key32": "3fVYKn9PfwgJeZwLRg1xbwaNxT6cmqQuqCK6BXE5AMfHhbwAcnhG8wrhsRcBWasj99NEUF5aYV9bp3DEf7sXgGaN",
  "key33": "3Sqpfr6XE67cZMdHNF1sCoiRCdtMMXn5W6kWv6WyCMe7MEsfjfavf2nGe493pY516NqDaqoCqiGBYtH9jm3DSxRk",
  "key34": "3yHJYUkM7pxKqdaUbMn6FGjYbNDyJzR8itAeTRwvwSUrq9FnfkizRQNABx5pjtZDnDBFNL1G6w7sENw3nPHTAWE9",
  "key35": "2SpCBXwt2yGy7VTaw22BFnpGwepvso6BYBm2FeLduacegJj9vDQC95hAXiAZwvnVMChGf5Q467t4Bkdx7DFrapeb",
  "key36": "4xXspsXkNCthEEefGmNib4Pn9LMJqzriHz4UffrfMZWZdN9p5KP4NRDmm68r8AFod9koz1cDUyjRZq2Xc8kELX69",
  "key37": "3HPxSEnUbgsbt3AWi392V3q5i3kdo28btdHN9RtevwRQZXFNuSGH2YVbDyUvyUgqnq8RvbiJLfaP8huPmgLFDcDA",
  "key38": "25p9f2Gox55CvzeGBJ9V8Tf8Qswa6Z5eJvedKcuTHKzRohJTAYkB6UgmPxN8grLNSTxgRbUCJuW3uiMSHUDriEh3",
  "key39": "4aJkhx2J3efQk1Bib8tiEss6WsNe3H3DFPNdwZNoyhr38vNEFmKFtDtN8Jo8TgYQokPufvxiGFghhyJhPKJJBv7G",
  "key40": "25DEM8DfC5VgHmdPLAdCTEW4Bz3MrhYUB6pNFhoW9ZZbJM2FfjYB5NLSxNCNHtDcp172kXQjYAMkMgXUbrzVSUCx"
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
