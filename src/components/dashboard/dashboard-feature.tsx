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
    "24E1AyQEtGhPTie2uNWhL3SDwhr8NnQNmnPE5GDeU3MozATCksv1hSZngaFM98Dczbrox5dHthFDCn88RF2hExDk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LL1wnWn8KzMwmQ4HFUg7L3ZUqDSHr1ne6fKeez1CopvQXGb6f7FZSMyDTtvzSN4CrNUr398G2pFcAuYW3rpmB98",
  "key1": "4Qf8FbeA51w7VTLS4NWzGk2xE7szBBfYmrgvV9Dt8o6aMgKoErCeEAqTjexa2tARsaTQdMH2ND59wdcCZdASYUNf",
  "key2": "3x6Z7SBWE6h2gcQmvF1js35X4GAbzUffJQ4fm5WRUNfFttjUKoWa1PvBvTxhkrNU3pPASxGcKtwozEA8TTc26Rhd",
  "key3": "4DX8aGgktjYy7StAaYuYPBBiCTYiny4xjXKoKczdRCjr5w365N4zy7xmF46hAguDQ1S7Jo75SrFXA6NRvnph5FhC",
  "key4": "5ijkAwG18vxL8UTnzJMKZRMHFSZWfybjTjjSrH4bDf7HfDcCEsq1crduSwNG6BmtjTC16TPfjftzRaPE2qEY6McN",
  "key5": "ogvSPiqJCs2Q7SzdcMsVWsXU4YT8SuHpGSwubqG5PhhzhdXrqAoPUD1DerDt4n3PC71q6QghUWLaYq169Qq7icc",
  "key6": "sUkySsbKGkqsLMCe2ZddBEb1kFx2sCK19Uagne5hgnwhVd6y97Xz9s5BkPVDpLGKZpbRBW5d4bRhMfC497W6rLn",
  "key7": "4R3KsSQrfCoVj1njyKted4RMp2wTiBqR7C5euAWaDodZ1TxcdSv7CnQ9efXtKdxFMFPSGPDMHdd6D2pcfh8NeNpJ",
  "key8": "2ruGLQqXAH8Q8Yh4iDoRebEnRKqdkjJrYWxFW991SvR8c7g9eQHWGEySyVMA4NnY3MmziaWyq97BAaxBxthjXDuV",
  "key9": "3eZNYvbuXJwkNyjFeKdj6mfi7BkXCYsp3g5CJuFa4suvqvc91RMknXEChmGsgZ94ZVxRQTEznH3tiRwpzjw3ikst",
  "key10": "4QE9m9z9XUYpKi5nTXQNCr2bE6cAhuypyCBVkjWUALvEUWxJ1Eof5PDUKUuFzWPBPsUNsYZAnQE4vQWohenJXVPV",
  "key11": "3NhDd6bZ9X65qjzEVwqAApfrwxmA93y1Ezz6tfGANKpdewEmVYBCwCPb2VHNBgU6NQ9bGrZpcZ38ENer5Am2mzhf",
  "key12": "221VCVBZcqj1cPGFQsCEsQzuA99Xig2bh5hNSfNLX2fKXFffLvfD8PQq8vdqBxL84yN7avTAb2hq1tyzMqQEMHPH",
  "key13": "58M9pjU8KjBTGpETKs557K6e9ipo1yL8wUAUWqFTYfXDAQ2rvFt1qVP7vxjig8iqMktuZyYFPQVxYtaoy29Dur5r",
  "key14": "8iimTcsAvkYogRhnMkLDHHHVLEk57Gg9C9sPspwrL7gLK5ZwMboF8YBbs6Tz3bvkWtCLWhoZG1cibrhwJsz3p5M",
  "key15": "5yGBHSmr4m1JZHQkLjQ6KGxTFyDzv15JY9cAeYMBdQCGYfzvUJiuMhAgJDXwZoQXkYXdAHdYGktphzDjky2asVtL",
  "key16": "22JYogBqspfcywweoxBLnLf3RDVyKvg9AukUTgyPWMNdtmAZUAA2cDnLL3mhNEB1gwWH819y9bqHjMG2SjAaXY9y",
  "key17": "2AZrV62sMqREnBZDT1157n5NJLiqj6JMA9arPQHbTZxHeWViijdhU1TmjsVsDktbXwcrQCAqeZr4P2bLWw25EniL",
  "key18": "3tYbD7o3K89W8dU8e7AgYb8CZEHH3gqgTVK3r7kDyZeo6bpkw8CdXpJjx7yFeLoV7yhzR6BCxPbUWhe7SNHeNxi8",
  "key19": "5Xcw2U27xZ4jykdMSbP6fqjPeQxDkxxzwhXWe3149UDd7eYauxhg1LTTW7THyGM8GgPMnWzFFEZnWSCUZMKnUSUY",
  "key20": "45v8pKxU5hAdcmwkSgmk7DYXNEji127MRzdHuTYVAYDkm21Ej1BNzGnhZ2JGzjs6hFZpYc9wS2xWAET3sCLJPYP8",
  "key21": "dRuxTWp9HQY98MDTckzsRQDqae8cJ4bdHAicbMJ514xdKjjsLS1eej4QmRamFTqayRKHgZAdxK6zfbmpHnhDsPr",
  "key22": "4ujjEgCo9TWcm4JwKCSTtqDF7qHeUKaym6yB5knQH6XKr55voRkxEBCSEAaUFg1w7Y1ci7NNeiRbjZv8j9N7RGNq",
  "key23": "7PmZvgMzSyG9WdsXvQV4BJcPQjc2rRM2r4DjZxbUwhEpkYr8RwxyX8jtTYri8v4scxgD4rzwz8UES2qXtxFuMWD",
  "key24": "5ZZeA7Yok2mn4z3sj5jPxbZuKVPnkL12uDJmcaZUUiFbvmpCRvpPQEEBPbnnn5H8Vu4WdmC3WH1jU9e6d3i5WBpG",
  "key25": "J9bxrNEKrNY962vk3AitFxCvpydXtoGTnqaS1KkwFmztkiUcYrwnFMDQoeZgy9hFjHE9JnX9cGd6xazUiYPeaLb",
  "key26": "4f7VUZFQ9kR9M2Pm1XpC38nYty5ntfAcyM5omPPynR8int96oJTEjYK6EWYzBv1psQKVuBeLCdRA3mMYp1aRsPGg",
  "key27": "4fSZ1Ee3x9MhEeTKDk2byDq3HJA5Vo1rjR5bHsdSYVwZN4zZ8YfEAbpGTKtK3svzEkzCbZNQyUMBXGS2r75boER5",
  "key28": "5hrFbGm81tC5X5C3h41XDgSqnRTJ6B1ncwC239BeKfiyUDBWbTVh2Las6B23tWza941VuHkT67JWWe5WdH8Djofp",
  "key29": "24wSAT5HPzfUAaSUUiprkRra25ZGkSL52YdcSsDwyUGZrQgGhuxQYY1Y6uGEVR38ncdAVv2Mf8A5QXgxj5n8xtHP",
  "key30": "5SWpfvtvenviEfRnQP1oNuyodHjnYTeCBAPywrK6a6TjaRKrcjXzDBKPyB8poP6CtmL34VqgLsDsqE7YEdPridb9",
  "key31": "5ic4BvhSgvU2SeeJAY9brDLiv8M4Y8AGw6P9SSv1XuVPQWKfFCiuxLhxNbj8fnMJQKe3HAADP6Lsqw2DCepoG8Uv",
  "key32": "4TjWRBbec9HrdUuAcrLcjdVfjSqBCAs5bKLuEik9XENztx9KQGthjir3TXYgDWRJ41YCeNQhHXvUSb4YZbGLkJhz",
  "key33": "2zfF6qAruYvU6KwLbseVs8u6vKiaBHBV5213F2Jx6jDLPfVtmzDakwXr16rreNy7WgqCWdUiXihXYR67GbEEPmbR",
  "key34": "63nc7HRErWRfgnXwyjqhhjeXqEnFjjieoCF5w3Dyxtb7dVQYaMZ5VnPip2XTXfpf4N3XNu7Wm8w5ujk8CU5eYqS2",
  "key35": "2Yb2kkJqwktZLsSsxGRcucLom8aaiXRVkk84w8mydgdebbrPCGRTy7g34CCUKHZ2QBjyiVChCppHGoTq9nmvs9yc",
  "key36": "4vzKR4ZiJU8x8GUYRvqoXZiE2sMCHHYHyguiuEn76kAMgHSGkY6ywstuxFoyyTctyYVSsRDhxpF4nuwBjmCLRzbH",
  "key37": "3Hzi3NHBbBQdgstnyBttJb5ddoeShJFhfG9WUF2zUoEgqXUy7KgRh5giWQrRX65kVnPEdgYCaUxuBbgfUPTHd5Dj",
  "key38": "3DJUZwL5WYeKoGRrCu1vds6EnwcQ63JTUJBwJMt8winrAoJZxnYPzszrz5RY9tzjbo1kesKEfwufQeabPvgBGU4f",
  "key39": "4PE5iB4keK2vpKteJANrtStxmkqPoAFmK1h26PeZKfiKsJGN7ws6UX6YBbZnNSxGJLRY4XGLawLofYM1joYnj1Ny"
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
