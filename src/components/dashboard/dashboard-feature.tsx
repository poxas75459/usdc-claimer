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
    "2yitWZH4f7fLqbya7H91pbNJdbawGvq2R1BD5mspC867Dg7FzL2mc8dykaU4CB6LwUKQ8TA9eieRAg9pGXm3qzxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ejDuugYZSvEMzwg7zUcbwKZqFZ4DtxBE2H8RMBJwnGuXruShzaKeub1WW8zN4it1CWqvTFdcyVRVqyuyMJ3uat6",
  "key1": "FPqB6mtRt7qooG3EYvvEkynNwrxsYdENjZ1qdvndAqwcEyht9vsDhnwKN3PKRJGgwfVRJuaMtkRDpdRxFwfNBKX",
  "key2": "56JNsnbDWh25M4ixS2Nw8RVeaHE1aLeHTF1sFguhB4855uj8yy8d7iweHCt8ezM7kBaYiKPgKbwFW9zEQj4eMgDa",
  "key3": "2utbwnEoYi39ZkPNnxnCfNC2NMtjF2XjxxnhHoKchiegjNob2sM873CYTQQF8DAoeHbqZSfDCZrReYSYKJdd9e7P",
  "key4": "3KJZzLKqmEzaNW7Y1brhmiwpHFFMfaRVCqRG1K4LXyQypNR6BxzudyqNi18PKh6LsCFeyMjMcQG9Mw9GBv1hLtLm",
  "key5": "3R3ERUH5FBTYYtX68ZJ3wESZPXnu8B6w4jPct8X59NZ6otaYr2XFtz2F9UZ5Us5brHmmEeZo3gYFcPa3W4D4JWS",
  "key6": "Yb6W6BFdwG8LynFPPnErFTkLqR7CY2rQekioLo8BaSBgSwQUfvA7FoovzzhFqAW1Aak2Uu9bVZX92CKgNowkmFp",
  "key7": "eyHx2fMzFEK8oKsdgQtrSk8idyUGKYxrezsEsH5xvfWp4RjU2RZk1WJVKmcBcitfytFwutYeRunTVSJ24aQRALi",
  "key8": "3cZCro6MKMEAkteyqn8zYBGiGSXeHA9BCV729sGZpFyoU5HVyZChwGR23xpBL7UUmW3mFkbPh6SxK8SmuWPqbEeQ",
  "key9": "4yZMUreyDzkLbBLpgdkQmGFpdhFB5ridteQLoLR4vms1r7Xy7vUEfcZD6MGbgeCU2rqJ3qToPQRM7pn5rXUxBhx8",
  "key10": "3KC3AT4GgVt5kAhx9YXTyvW2xxQViJJwcR6zq87ZpMnKqcNY5yDAMtgD4Cw24rDq5dHqQwtsNTweQedArT9iUep2",
  "key11": "5sJz2ACk8sY6QTYyRDMaKfRQZqUSTW8aYoShQFGNNWM29nkQ6JaaYCbqm94rWmYbDfM1W4kFFHCp6TXqZhdVUn2J",
  "key12": "4b4fPDkCCp7r7om4xqwkxqHH4KoTVxWhu5e8p8kDovgrMDP7Vd3XtEseFsbpW7g1BrjuD5P9Cbgga2pX79rYCF8S",
  "key13": "x77T2JtuJw7hbKhzZNZBMRWojuheR4JX4bDWSd9PzCPkr4cZA8bpCEiDwkZsUkczwxDwqy5pj5PrD6q4iC1LHDG",
  "key14": "29nJPhvikYJL6yguDTFLwhtQxVmP5ESMA8k4ayA9ryYYCaeXbDSbBrkZyof3uVA4GcjkEEs9uw4CWpvR1kDMoEjE",
  "key15": "4WHNnwffEyP2d3f1BrMxVg9F9ii4judU4jZRxtQcXxhBDcwXpcgtYokm5GKRViW2Uh4f66b7NmtMCavTeEoyxbpt",
  "key16": "3yPnCw7fJsL3ei4SSNp7ubkiRyM5DKkf5Bh8iipPGiB7MVKwEsTP1191mWqFqeZC8Gmmv4qj1nxruZaLmZfKtGmQ",
  "key17": "3y8v1hTq5JJ4mLSEUnzjiAhSHxdiXCAE4Xbs1fN1e6jA1ZNZeUXRiNPXRzFXLhghi3x6vQPmGZt4r2jycjFPrVsX",
  "key18": "3N4Sv8GGcVdP8BcBATcMJSmQ1w3QToodrD5MpdAxzqG1ToWgxorMePP9P2r2d3tDwPZ3kzYidcKsw5gq8Ew8VZSU",
  "key19": "4fqpJ517akZvupGwkk77Qpm44yA3ZSS5v8ZhUeq8wRo62pDVmzypp4PcNA1oh6K8bZit6yanpEgNS1PbNe8FRg7m",
  "key20": "5SRifJ3Pw8aEzY9nwrNMwEfBdy2Mfk4ESPpbMrddPivWi8tkjxnnf7MjDdgYYmf32ix67EcaRU2QWzHSzjKcJxAB",
  "key21": "57sgysJovjtC4hvzhgeAHAUfpFxaW63A66QHuG41zCNa2xDgSPiTrEiNq8f2o94SU1LY3AyK8B5gkKofvszZQ3Nj",
  "key22": "5DPg227as3jv6HkF87qEagL14LfAtzCqeVWjPhxYGh3UbX9QZRn5bWaKXJRRE1rsRsNRFb1Fa9YDj8ZWzHvY1NK9",
  "key23": "3YCuPk72gvUqKhCkujBGrwandSPws4ssmX99onaV5y6GLagrGWKf7YGztERsWdWFnpXhxsaBoVrV1iFwQABtuw8i",
  "key24": "5iZP811tzCRkGSkGwfaLhiKrjhk4vJ4KUVHuroVmYRj5DAHTduFrEjdYoxUuCy4ooGaXUsRFwkkaiLJ7qnU8Ktc9",
  "key25": "hE6ZP1txGynLvQQbQA2e9nAuLjVfCSsu1RfQPnF5YpScYWggYuwTkVh7NMc7EojxETgFfF7PrvJ4buENR5QsVXj",
  "key26": "65QubTRqRuQdLrwDAFfouzRMEK5hcyEZP6Wrm258B7ea2g6xNUyzpKu2ySjLW2rHFZ6hCaTFAGLG8KN9YrdSsJZ3",
  "key27": "Fu4r4hzQJyBSgCtrexeEtH19YZMHJeRvDF4SGsLMCYMreGfwY2PQ4XoQdF7ULbp55rwsXpUyYE1ibMTm1ARUdQh",
  "key28": "2hrN2WddXDvo6jyQcA3C43y2fxY2Ffj4dhoXAx8xpEmqVHgDwfUYyi5iMYT1gRe9ftTQWJvpr9YfxduUj2dQt8Ya",
  "key29": "45qGZRvZRJNV3Ca8khh9h2vV2Vwt16HvEGPHZH5rmX2u49VnUdGQdjCtWrXGJ7F5FzcbiwSBnvaUK4rBGS5CCn1r",
  "key30": "5RBHNiVoKiQgTa3xYQhccB5s9kEoyRyzYcSCtCAZpnNkMyLB5iMhUrZnfG8d2RezBhheuUcCK1WyYof6KVLebKbS",
  "key31": "4dJrzN1tcERdvv2cEb2c8QUME6mkbjHGTcYKpk6pKcoSRLwvXtLbg6G9L4RBPYq7FHGEkuFAkGi6kXxQQyBPm2hv",
  "key32": "4Ec1M8Fk9aqRCS3hahYhXxqMiNjKaCe7C2GZkbd6WiNn4Nw4LG8edkrZEswaG6wJ7CjUcesWyPomBR7xtiUUBLt5",
  "key33": "4EZuigH5pNEnt1o961db5Tk3LrYNrnxS5H1bkWkSaoPA1s2fezVqwqhzDBZoDnPvogqzHFBT12jiQieNvkXQj1dD",
  "key34": "5YRAQPeQWANovSemrxH9ZSYbq7iXqzp5pcT4NSmAZwbz9wbrmcAeMS77cGWSCXT8AuS7x7tT63LvCciwNRA6Ci8g",
  "key35": "icffkey5XjasazmCjGh4XumPb6VHHu5d2TxxDtxd6UeAfMHorqF9NctzUVJkBNi5XPh1o2GmcAkuAKsZChYyX1J",
  "key36": "5fCKRs4bBTMGbANQosFTFT9STEoCiPjyg8t4vRHvmyB7pfbxzSE8MSLEDNny35NZ1xyW52FvtXvkGR5GRUqZrkbC",
  "key37": "4hhuPe5nj6W1dvTXayaw718ASrwm2XemjSz41ubX7vkAJjxHmmgE2Ba9HsNEMzQ24M7Cz4HMhaGvVgxpPRNSLCU9",
  "key38": "4r1NpFRgxevjQUfNspKUnFFkoBPeiDkjhiKid6GiAi5ducHMhKdwjpjouqcZnaqGhxRQvwxLeJW7p9gyfzKCJuQZ",
  "key39": "54fV5ooWacHbkv73Pakzr3Zm6nVgQMXRNR4DCovbSzXXb9Qa5aBYXHmni97ePdq4jHBB4LNTb4w3ttFb9evZuGMX",
  "key40": "4CU1CKcmEz95L1khfgQYifWRqkzPbQW6SrNDHHnyPgMBFYpfGNcTb7AGdkapNc7MGhZY4tes3BSFxXxBQP5TCY6U",
  "key41": "4FHQ4NfqyVq7PruSDQVaq11bAmXQFboiWgeiV6n6R6BttG1Wodon7TnmQexy45d8mFVntcFkYWHLnB8cdQgeMrnc",
  "key42": "2vvcPX4h2qbvfMUT6cM6X2jgEedSH6Y58yKkTuHw3AbEGoD4w79Ru8ENQbWRGx9GwYE8uCY6Rv1MJNJMdiyzge5T",
  "key43": "Y3rSg7BLMcWbqebnkD24kYBLk2xcQg5Fkpfcuad1tcyRGLrLX2yFuDF7mWC6nTRjwBQkfJULmww6vxDQv16iiqx",
  "key44": "2MHg4HiPhM7NnsvVh4xWd8YGaRWfUMGQTbDTHNP7w9WZDoKKbwxNBN6u78hbBHiyYpzwC8nhcssNy93L4dwESzVR",
  "key45": "62pbqYsHxkHgAi4TikT9nAdW7W4a88baaZ51Jv1dehn52ae8SUvz3aAp2pkVtVEzkfmTtmjxiD9WgVGLrq8oxKSQ",
  "key46": "5qMpLNxKxyMA4BU8VfGVWiG1ogWSWMkXoLDnLpm61xVU9KSJg3tTpiGmakXne9xMxxromCFvovkTBiZ9Wo7XGhKu",
  "key47": "BecvuMbm8R4A2mBjGAcr9nqU4Ed3vaZZNZX3tXXBuNvuqUvjGNLTGhr61Ghb7mkdu9RAAK2CgoYJHVzryhTZSP7",
  "key48": "2BCXcaLTKHVzUX7BncfkBXn9vqyCwamxLiBmLhcVnEXCeFPe8goRMeNXeT6yUtGkSb3WcoGPL1EgKqWv5kr9SYki"
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
