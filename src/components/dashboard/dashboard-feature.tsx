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
    "4Fj1fxuJzwz4tmjctXi65jVEwYQwDMQRRbiM82AmQujrNnJY5dq8PFPMNFTTTfkEogwgm72P13DS9tATFstuNXev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55RzDMm2d7syeHPnZMD9L1EYfvMA2LHUz3zx66NKK2w24Z9Hrub6JmG3vhLrZhHfHw7mnqBdUFVTXkMs73CZ4A27",
  "key1": "JCXoPgh4Qykjd2SouwF5Uovn7ui7BksbooRVaBUNeSFZr6DivR8UdNAnwEpTpFq3guDCwbr6MyrULNrykXxxC92",
  "key2": "2j7aLZWvuGxHdM7oCCvoPdcC84V684TRE6wp1tMqizxzt3i1qkDzsBE4R6r8gg8UkCgRFMmXWUm1fJJZxPmskasA",
  "key3": "31PKcF5xmNh7W5VZF9FivuDYyEEa5iiokdmF91DFRiJjt9yPrBhcRRF8XmzNhd5QQd9xFvPr19dk25H4tg9xLoM",
  "key4": "576YYVphrKUcQW44eqCiYg8dYDERPoMVUpRkLSgYn1eDfEvqncmR2mMpv4qt4aqiAfBrNqgjfv98GVj4tUHGoMxE",
  "key5": "4mXwPWBGgkvFaZ7YJaeS7tw5L3j1eR48E8CDJP1iTFi3ffZsvoVJgiKZ65a5ZKLQb1vz5VaXfCVLhvXNbfDBfXyk",
  "key6": "67Ud9TrR4LF4CVb6vYkickU7U8VYfRhrNJyzj1jLY6uGbQDiVbydFYV7KRJH1R4SfADH4hv2gbrZWSWY39nuR1aV",
  "key7": "2SENZGYH8fbiY26V2oShvHinNr2uJb1q6RnT1G29TvJEL6V85RhydDr1GEQDAhsWBaTLfd4fb2yJei4V3h9wpMKN",
  "key8": "5w1BrUUJxj4dKNjTRkSXG4zjyX4fN3p93ycvtez315LEQmFf1AdBv6LutaN4gQXHf4LSwVBpfvaT2U8aHctysnPn",
  "key9": "56XuHahbifQQpGAGucLQTTJByr5rT8BbkpsQuD855xKj1FRCsLXMPxQFFbk9rtNJ8NePEUKujRykwRMGTZBCgHxT",
  "key10": "XDUo4F9d3LHGTYe1PWMeW8EpcQNfwSJgKY7bmnZv7cG2bBjnaUpum2a4XfhhHiT2DQUagFau1ZuTQ4NNNK8TwFj",
  "key11": "2pCepJ9hrFcqCCXE4THqLr874fFbjdU7dqUPxkPsyVhBLuKgreDPVLJVkMK17rQupDy5pVJFe9jPpiKnzSusgLKL",
  "key12": "2YZuXL9N4iCTZjLHJkWFauJZVtjquu7vrpk9hQGG99KCrL1NGJpDxNHBLPzYUAF4TcQW14C8p6G9K4ByA5C86YZk",
  "key13": "2LLGaikrz7rgGA6aS85pTCTHyXEUHp7h9FB17yTwx7Jj8xoKVamTgLha3rwtRYTGMyKhkkWa59WayPmckXxxdude",
  "key14": "zomqdm3kcj3pxzXabPXymQ7WkovPeaaS4ba1kcxCc79PVpfibfAw5GVEyc59naY24Gmg1pktnkkiasgC9MjEw7a",
  "key15": "2fwyUEMff6h1S2HGyjQFv3J5WHbnLN6PnKWMm8om2CjXQFuW3n59FfGanjmmTGYXNWXTeqJaiqQv8QDiPmHYqEtN",
  "key16": "4prfJcayhZtFsLzE9D7ify5NtARwsp71WtdMcBSeXRGEer8uyiBEz8swjoCLkBEeKaqNdhqX71t9qkwtYJ9fs4mX",
  "key17": "C9gXWFb6KDaQZxj9G4JEKP2sKjgzyqPSEFhcN1UJKo3UzuqWh2Gm4rVGhmimcNq2XAMTM4C2RBD9mn7ThZejXQE",
  "key18": "5WWipGuFZw7mNy6BV9HuDHuSEJqCPCFi3MSGQ1oieDuSxGgdaxt9buSSviYgNxcj8kp4AGotSeJRe9DirhVhEe6J",
  "key19": "596rzBqUL99eJtuMJwGatt7njKzpqpMLQ2H4X4EdFEwRFkNnXtF1b8mTo98hNfXwAiYGtakpbb1YqBwsas6XZbJm",
  "key20": "qQDhRPwK2osKWGig6AqdvTqj7CxzHWPUopG5HsL6dcWnt6xfRXSJnbm4LzC1vybvPpLRkZLLAarwUDazaXwu5YV",
  "key21": "2pJCHiS8z3BH63WoUL612jWCC8SN4bifjfpBEWq7cpS3cJ4JJMVZPGqrdXt773eaAeFBvdSHrRU4PBGAFbfwxViJ",
  "key22": "ZqMVHjsyVHzGe4WEHseE3ZTZR7ZAYsNrPEEgccDYZMmj9NspA41xLCvhex2sTK3MQmAY1WyChVyuTCvkQSKro1M",
  "key23": "4iJE6JHkMMAeW1AX3o2HLQRi3TZdJjYQ5LY7YwKDX3Zd5uQVdwskPV1nBrsWueh2Gzo6nEYGKJu9fe9q1d4gKXPr",
  "key24": "2t3WFHZMbLA7rjYjvLY18X3rd7npqsxun5YUMFH8QXf9T8FT7SatgnGwSjbsJ99f57xpMbxqXqGyUnNfiRZqn4ka",
  "key25": "5foqMDy74BdHrqhkhx3MpxDhaKJjyuH5mXH2wy3pjj6mjHq3qDvwh4jnAYDRUwoHaoXNmseWRQSyDfQWpba16fmU",
  "key26": "LfftJ74gbuqKHEirdegGo2x1SgYNiQmfM8LnX4xR3N8UaZf9enV8jr18sP8f12gDktkHC5zy58Kzu4P7bTKEPHZ",
  "key27": "4XHSw6UWzHnLfwzY45eMHgxv8S4yw2iD6UQ7MWUYv11z884wA2QLRQZN95nb8trMSnDFNEZbctg93UuEVGUJRVAV",
  "key28": "a2NrjzpdsMKCYigEKifvcqdX1z2N3MDciFq4FL1odxXL8PgbkZFyE9DwkeiJHHXBAXW13izYMEsDJHf9hc5gRfi",
  "key29": "1vtC7Dter87d79icUnAWQxKPRwAfH94XNB3GRu89YVJuhGCUZoEEgg7naq8tjAfLuQ3gqHCJc1xebTLmYVjk3sH",
  "key30": "3cNZQqzASFAYBcdEkGQ8nARtvJP9eNvp5RkBu8rq9iaggXcvARdK5UUTEbS93MUgD2Bc6NgpJZUNCWjUB1gArAdd",
  "key31": "2h2zGEQHoNimQwwz4ULQJta8yt9LeELQMQubBNkHJp3aQnZgzyobjSwb2MZAnXaXKRqME2hwC3vAmJyxVZHhXvwu",
  "key32": "VdRury7DkzEeJhTYAYsK3yRxDvNitDCJGK6ZPnTZvjJH1E8hjg2nS4pt8w6PHqToA7GeBGQMctDLjjzUt7kSW7A",
  "key33": "24xhADnpNdnFKtDdSAHuTNXne74rFJ3LSDNmn4utB2Txakz1XKARZujWpnBPwmSqfCac6Yif1ZjvvvcACtG8qzv9",
  "key34": "3VEStC5WTuqd5qbAvbEj8NXNDkH8gk1mxtBd7eTrqXNmnH8te5WmFEykT7xC7HLMbsw6SHiagcfRHLvUU8f5kdRK",
  "key35": "3HZyPWoJ1GRZTzPpk8Jyjs7nphBGgHtXgseKTa3AY2PHSJ1tysLG8vvgDJfGbHyqihS8C7Nj98vZchyXyDC6KFxW",
  "key36": "3KopyYuu6XE2L8LAydKyqLWJvsFcY7ydWSQQv1Rhn6rTXjRXxdjARv9pxvEtbPBtdmcFqgUzpaKSRXn61WDE4FhD",
  "key37": "vaEoXrwVq95S7uX8oLFATym2EGw1QDF6HbYCHv3KECuiW9pb5yFZpgpEX6EBEDtKsem2Q8EhoBP4Q4sCRtwCiiH",
  "key38": "3FbZKPxptNAyZUraEUBH6v5adsfikVTMm9wfGbEsHB431zP1vjzzAph9wgJK37Vxir9LPVPM1BtPp1yo2piTK9ZZ",
  "key39": "5sJLMsygQKbQFtKBcj47KMgbHoHdu8e5Ab8nb6D3Zoz2hAkg1PDDkR4PE5hH71MiUvYppLs5XvN5WSdATA2rKxDM",
  "key40": "haTCZYE37NLEeMdXpEbPhxCmX4DgmoDQHh9Bbv99UNUSdZnYbtp88CrzjZHeNP59GFTs288h4B3ezzS5PRyQrgV",
  "key41": "3gwreoAzhcXUcCdCCYN2MJgC5fpzb5X4u5hDbMrHpyArpwuRtcD3mbss2ytYEvNhgAjzoYC4GUoD99ePEEJUyL2w",
  "key42": "2x93Ki86hGSNZjJXaQVjQVMnedq9MSzewCVu5MCADpzgxr9XUvSq9EfXC97tkTv2C4wMwbKBPnBVJciCBTjVM9v3",
  "key43": "2q5fPBabVWQMr1BPNHX2vpWMp1KQc2CmEHcNeakE6JKs1TdxNUe1oRTLLLcP19g5rHUbGpEePD2mi6A1tznp9zcn",
  "key44": "5WhuUnsgaj2S4PZdCHHEsUmjV1X9Dscjnx3fohEkkpK2qzPnMkAdmkKgMrcEFEzNBYcSRVK6CNvma5aC78H9UWKo",
  "key45": "5yaKsbzPu422Z8KEuqp3jNM8FQj4BfxNVY8dC3Jsxn35bVrwrn7nYk7PxDwWQHftDzXoWkjtTe9uozhzcCR1vEYp"
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
