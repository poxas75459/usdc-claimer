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
    "3fBzt3NkV8zgvV1cviBWUgdVtPM9sgu6XRBs4wzxLHBRiLcUFTopJNPoipZ3ziPBZagxCbBh2kfW5QWjoNVbWsc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BRfTdPk9xiJn7aLkvzioDH1ifPkYe9SSoKQcEs9EBeYyXczBmJyg4bABfnbeJbkGuEsNx77bC66m1XyfqwK81ZM",
  "key1": "4CKk9RqNpbYTTz5WEgNJZeXcDey9nww72SnvDUUR7M2FzWMr1fRc4hC2JqjCnuqQBuk3dr4aNy6wR5ki1CFdtgtX",
  "key2": "55RxaNcV2nvV4AXHrCmgRuxF9v6U18kzWv1qkZuzcBg3BgXKd11ZiGXKGKQC1RQ5pnQnxbbFz4q4SEkHtGh3LvrF",
  "key3": "4G5HMW4Mf8mEXEiHyic645Fz85TnnxwX33f5LabUZ5r6SAPcziYRAsbBC2PSdKTRjdJJLevneCvsMAuZcLjXSnKR",
  "key4": "61aCLSeZXffCSSxM1m5d458fWRN2EJomHiVTCJHySN466cicFMLRRgkqaKFUF8CLL6DepFgy3PRU7dKtLoVJDikS",
  "key5": "4YhbEMqQxrQ5gCGCKKXsLdQHZSyyc4j6Y3iLu8yGn9YVfGzW4qARr11wfekEKSxyG7xihaykKVzeFj8NKWU6Qbh8",
  "key6": "X39UHSk2zMHYV1d56VAbwk7JuD2wsEWAcB9X1h4eEsp3aEDgrGMhAuaXU95EdokanRvaLjF5BT9eAHgCo8c4vvX",
  "key7": "4GGqpBgGQPJio7vhsyRxKEtWoCFpJu1q8izT3qnJtf9X15NnF58JJPuMcSZd6xaQpDNkFq2DqJAQhtM1UXk4d6xV",
  "key8": "2yTwsSg9eyjdTkPK9oBF4auJNZxSXc8Jgwkx5Wv12En9EjRZhB9H6AZqZHhuBEAgDh9Ewg5eZDM5fvDDTXAqnRJ5",
  "key9": "3yqQ3nkPtYbjS7ZqGjHRwjhWvVnnz7Ufpk1jogYxmsLJkr13tedHmsctD56j3hejJFZVxhCE4TW3MrFTRhqt3WJ",
  "key10": "5C95QSaFrnxY4aajJEavWDUFg4xikngCS2yunof1S3kxdVFqGE39ahL8jG868Hd6BhKKKZ3vZ24nue8qdSJ5gq2h",
  "key11": "4AT7LvLWfSsAqim7W9xEotBzxAv5etkiBM8f2nRpnaVPrbhFpqvHGnW47Trmf1gDeGicT3tjBHbDbcEzWzGWMcbD",
  "key12": "2yhrWy1uJ9xXwBHX8Y4zbHMFt1K59r4LoyyMPrqzUzmqoHfgKcjexwdy3sm1ThmA1iA2e79NiEmZuek4k7wB9jDf",
  "key13": "2GT2wKqzUJUGsusmkHSFZXwqJRSniFEPoJnd1BxN1rhbJ5airqRAWry1iW13rumx3579SswHBkuuPgaEMuSoSBZi",
  "key14": "2Z98te3epRecCLXKq6714GKPjQk1WyRHrYMcX7FxoyzGDEzgwsaej77TUgoy1MVQoy9iPsNo6DPEmdoZKN5KmpU2",
  "key15": "48nUEFj8GtwojABGvPCkXos975mb7k9W9u559yxey8HTxx4F8wpGBYmjck12YyPWkVBnskKbvcik2T95aQbDkyFE",
  "key16": "4FDVuwT5S89aHZfCAKiqQTJK6fr8BMdstaYfEHNUTi4EF3SZXf2pgZ8vkrikRGtHAhCJgCu9EYVocKtEmzNvsLnC",
  "key17": "7Z7uwRNi8SgQYecygrdhLgvMrZ6SiKX7PZa1xmspKtKuNCKYcMJor8fhqGSME2H4tWSVpSTJoDetvwVnCnupzwV",
  "key18": "4bnLfBzQ3GEHxM7dHhMkL4rKNXTQRZ6khSuMYiQo29Zn6cneCg6ZywKS4zQmgLa8R17yyReFohPGSPwnj9ai7XFd",
  "key19": "3kP7e2yayv5spVWwC41R7UH8V2PQGv6nAjT2xKfNpLHwxGBRSDndVNj3P88WocQzD7o1YgRee5QVaxzru9egba15",
  "key20": "sranYTMyfwjorJJuDiHYEdPMTZpecYPqfqsBcMjCh9svAU7312Cs4QLY68Tysf4s2dfTYrMWzEtiTSEKDxQWW7P",
  "key21": "oNm4SaKCG3iM1tsweEkM1rSgjjx1aqtZtVdypoAF7L2Sgkg4V1wzFrAxTG6twHxZwwZ1tXW8f2YrjS75Pn5enxv",
  "key22": "5wkip5fWGUNLpTu1hHCWKUbAZ9ZdKVMgMhRm4jbrtWuwqjV2cF2ZryGcRjpsDvTHRNfcfwhcNgYsswWxWWuqYb6K",
  "key23": "8HDg8NRsf3yDv9SbHScZgHJTA3pb5t4C28vaWim9WKP1KBygmmUbeZkm6g685qbLJLjBej89RY72tvETEeHra87",
  "key24": "5T3QrFdtJQ334nQCi4oMXeUDER4VnvdnYcq6p3tH1Ko6hf9cDjtsThQuRLhzY2xfFqRBf6CmBzNJsD59ctLZX5sJ",
  "key25": "Nkc5MueNC4SykVegsmqwnccNQocTMwumCrzKh6FDasFG7e9DtZ6B7YgLM2fLK8MqcX8SMEN57nBj9is7EYnWZ8c",
  "key26": "2WFP3JZ5eZcN6sZCRt98EWmtAYfPbDsbrCxwQTBUuGsxVqHhhTa1gwjCkKHY4PKFEaeN27F2ekpPZLvdKKu59Zbe",
  "key27": "iMtx3cag3VzvrdNLtrFHnfhnQ8DaKvqb4CwJiu7UhNfZtq2TsCD1HaiNXLmFZRYns4QXwsHhiDpBVNaknps4ZzY",
  "key28": "5M3MDT1uTeJuK6aenTc6Xq2ssQPxRcxK6Yjv3sKBCEy2DcXcM7t35x4DNbrR6LXhbLbirGzpib2nmV9ytQK2STqR",
  "key29": "2wGz2F7Ucc3SBRKc3JGJa1FSDfcDFaBzkW3dtEjRjsEgocC29WTNxH1JkQGTbcLkq2aEAqUdiNBTkWvigjkuYPSV",
  "key30": "5hwm38QvaR2jcbzJMTzdfZpFqfqvwNzXTQ1qEAjJnWZ6P6CPEWFYBvojmaKhJ88rk8baCA3PL9nyaBhWRJrcc227",
  "key31": "5xr9HZHCFv33DQgQduytVmn2bzf7MDCCX9BdBLMtMGhSK73NoaCeKp8eUi72srff5hhJvRRURhySMzMZE4Nkm7ch",
  "key32": "4CeHLpctaUYxw3paLtbXDgz19JL8nM3kJwwsDXZGcHDGBVXq8WvSfCDFtXMkB3vkXcfned25QPzDvdA53qGFGyxR",
  "key33": "5YCRPjxiNb7L8c7sKf8LkMrvxeF7Qj1eJRTG9owfrEYWQLyqADzcBypp4dcmZ7KYxK8MD3KJLjvmD33AXKE2QJhR",
  "key34": "3DSMwB9eJnjbZzmVTvGiWmgjDDURbQenMyYZjLgDtsSspW1s9U2SRwYpGXtVevrPr4n3dMQDSuV2QbmESdrM91iE",
  "key35": "4GzXS2bgTYAFSLe2pidupmTYFjLE8jcud2bdJPZpeNsYxV2kdCth7Gw3c7PoiE8574C1tu6Aur3whbrXW2z2jCTv",
  "key36": "35xPbzsZ6vx5Xhx3ewXGtBqPsnLbFDX3gHoGmskoyhGeHk4PNUcEdTvMhXtmwQkP4FQ3fN3EkF2xXg3tFKeZXmMf",
  "key37": "XqgeL7rgntrEfxq2D5QkLiQm7kvsCXEQ27XRuZkV83iyaHVeAowK82P2dSnvQJeVsYryWwz8awNDjwKJFPf9cgU",
  "key38": "4ek6XJ7vbyXqqEUJduCGW22mCicy3i3QxkckXZuFPyGBFadRWzwtwkRZL4jWrgj3GZHzuSFvo9NU92zexkxM6G97",
  "key39": "4FerYX4xayHMbDhG6AWZJTMHUjRJDfFKyRpfW3MNjw9rWUbpbCQGwCCbW3Wtq3syWzzv2adqoqhrGVjKyDzLj4pr",
  "key40": "cvv44dpqoE8Fnzx95F4YMfRkNP4Wk3oDRHTkeDXy4QEbUCeKLfsFaurgGjGkfvBFgBGCVmGu3QxX4kzLXCuVVrb",
  "key41": "5zaZGPmKS3XMXiN8bTudWPvqwq5nUB6RgGZmgkqphyyKbHA55tsU6GiF9pVi1vBdwBSybBbz38xxDyFmdSiJXS4o",
  "key42": "2csGJ4e26J6kp1FjX4WaxujvcR4jkDckrJ7BYuU1K87WwbjzRmGCjxukbZaFy1cBiynVq5gRLtB7QDTaq6ixLoQk",
  "key43": "KQRBoStFkyUTNy8bxxk78iWJS5DeqSkyMfqc1J25n3N7rmjtuhXAnLAizdQQwZwMzb3NJqYhD8TDrNyYGYRrCUP"
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
