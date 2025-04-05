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
    "2mfyCbzXUbtPxqcL7vK3bQVyRPujQpfpvyX8HC25Qh9FHDqKxdbrhhSXNohMUa3zSA2U3zpoB2CbHrm16v8n3uw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "277R6LUVEv29Xhm73WSotJuStcWiZLUqdKeD829ortiwYA83cvMUDqgbRiDchpUoonJfpApGcxPgTcCD9RjSiTWN",
  "key1": "PwWfwCYNkwQAHDZgj9HCMKbfWpbpp7UwW7jiM4bgn95Sx2kJ2boGW8BU61UbomxFeMsXNc3P3PKkzmEQE3rzjvV",
  "key2": "5sYFx6ci12aBZSU2DAJDNUrW9Phjm8jqqRfjLLvHvAgtj2zHZegNevGdYGDEH5EDP7zDxiKPuMooftCDtmyXe8FH",
  "key3": "8hNYYubyd3xWUj2So9RgDYRASD5kFD9QP7fbeVc2nZgH9Mb8nFaVRCk6KU5NyDk8SsbticAdVzeSpQRm5QV2UQs",
  "key4": "4NMNtM2FUCmGhKMyw8kSHa85CrHNv6h6vApRXRqxAvYiUGE6fBTc2R8dnD56PtyzdnHDN1nWktzG4uAbyjqHjQfV",
  "key5": "3nj8qqVkXFX1DGUJdsEENwe4tnZVDQHrUSxRVjPHdvXPhFcMsqSacU5LRF6hmHuRaG7u7NmfRQ6ng1donG6pAWZc",
  "key6": "B74wsoSXo56a6ij9SQ4ToEwqe5YMhpzMBeEzWago2crB4BsuVN6WHAoUsbCtE1Cju9jSCGdMdy1PMN95wWcYdsV",
  "key7": "5Lc4jeAtU2AXqgrdicYfCfUr4ZBu3rRzF5ACUMLzbYiTNqVEguBEwyvdWVkB3taoNnS3iSrKdvX29UHMdFS1we86",
  "key8": "2UWBwCryU5eEhx7qKjtX2pfD6K4GeCWa8GLvU6fGbvWHrbdohBGpGnnE4U9mj27QeY61nrjxCVyAribvy7cjv52G",
  "key9": "NQY81nTeYJ9BBDRLAj2hDWABCg9dpE7RXpPvLo2if487z2Ucg7jgdczVJkVZd3xDXUB2VM9f6hdFBbYXPadGcEB",
  "key10": "mbQXEnY4MS3kpkPuEhP8DAFy9sMMxrSTS7CQxiTnznFGQwksMqmgJeHUtEgw4CTMK5kQbxrxqhADkDyCjQK8ZLZ",
  "key11": "s4X5UPmDg3HFcjZBNbviZGW5kUfjibiK5o3K63SHFig44ouCEazerd4TT7mv4gPE1dW7AtjrH8X5wW46KwVGJoE",
  "key12": "8soXrEVPuq5TNcvjT9skSHQi5YBUHiGD8FQAhmEWwc5fsrVPVabXx7f876nZewMjYoEkNiq71kMoAHFGVjbUrsX",
  "key13": "5V4LedvkNH4ap5xiMXkSKzUfL6a77Vas2p7YofYwUVdooiDhB9v1pZoGR9aXXHXdd3cEnRdZgvsc9WoEy2V7UaVR",
  "key14": "4JTb3jCH6VTMnyUjXn1jEyMgiBRMheL8oD3ntAYDKpCrAKJn2CNM2YmibkhM8VRHEd9qJu2gpVWpMxq5LD5n67i9",
  "key15": "3TDNWtMgwaJMWeg57vLdu5aaqgH5cKv9iJaWbvLrWuALfyyMmu9486KytmzU5VogV6LF5r5EhTvJTWAyF7Bg36a8",
  "key16": "4NFPDTqRQ4kHkovJLTdGNKGC8thPshN1MDKS7BnDmcJANMtt6gciAwpAnyFs8kRq8m3ycDyRtz54sonLu5QnRTVw",
  "key17": "4ZijYpDRwURHWtYs6rDKvTGU6P2M4quNnRGvXkVtzDNXLs46xKbUvwjaAXHrpCJ1N1C7x8JErGBaKmYs3yA6LR3e",
  "key18": "5ueZ2iEx1CbBwkLkWySgSXXTh3jynQjHAYYXWVqkjHdN1mhUenayY8y9EQ2wMRenfLrmq1s1SuucRgBafD6unDPP",
  "key19": "34phDnCDoyCPxBYbExMgjBsRCffSiEZb5hQ1wWKtghawgEJaqYoLaGFP5tAUMt5wHHsQ6fsus25CDxWJT4fMGFXs",
  "key20": "5tX9pmq88AfSixLYmiKSnnd4b3SvTpo1y2mnAvH36N4yergqHTArRGe8n4WyXAncSNvG2kEhfMirAszuSbjY3zK3",
  "key21": "5SvyAMQN3vducvjaeHg5ufEGUjcoeZsb31grDs1bP14RPRDB9kuQU8fdtePnu1dpxmZ6mtn3pQQ6Epi2L1HW6YD1",
  "key22": "5kPTCsFU9jH9SwU1iZ2WXccpPqRHF8Pb6Ht1WDbeKcRAn23vzeuB15Nkkrrb2enrWrdKuVHkEy2GnAooxmo2k6mY",
  "key23": "25e9Qnbka6BtMUX8E93r5CCg7QKSdonFyhhxzN1mvXvGB5MdTt1nRfECK6Q2Q6WtCZNA9td3iXhQgzMPWVtm6jFk",
  "key24": "2w915wQxcsUtcNRVB9V69gmJUXUAfvMVS2aQhG4x6qPVqMeumVM1JJ59HB74B1BMMiJU79oH9QpbGGF7Mxz9Lm6f"
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
