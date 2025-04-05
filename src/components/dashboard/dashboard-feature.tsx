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
    "W9ZTs7HcQDQ6co35cT1zhH52U7J8c51BtoDWUo33Hafovqbzfpui6QzSv21DvTs4n4z9BHJQGCm7neHaqZH8KxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MdC4eWmFmfZT1dt516TaGmc922fPcYbiKkZRkGNBvouQCcDAPGL6Y1NZYzaQzhcrxFgPFi7sMN9XkPo5aKh1EBf",
  "key1": "bXDyWxDVWM4v5LenoDnR9eNQNYYm3NRyaUeeXPx9QNR3TA3XrmwFVY3nKPhAjfXrtRUxHxMGExZ3NKNC4LoJTbS",
  "key2": "2SZ5nYq6JawDoeqgcFxrcBpo6yECrkTrTMiLp6bAkeJQVYvZGuSpTsjMXk3uABHp745uMdu7f2HnvwtCMaFEQnwE",
  "key3": "2r7NQtphZZDj2V9qzd77ctrsajigrrLnJ64shLh2e9DtQwcJAeXHX2omqogEsZf6LGMbWojhbRT3Wgi9WMU5qETK",
  "key4": "Lj4KrSVwtQiZSJuKSsTRokVu8CnTowxxxKXmBHi3A5DetH44rZg3kKSVo5cTdqEAaU2BTLdajD4Nnnv6xTWFh7H",
  "key5": "5AcCdToo5EyMrfdCmquLgBW6R5c2bFBJZMhpMkUB9sqrW9gqb98qTVb2s2EZtcKVVJhnT7owjQZnMcxwtJQD7Kej",
  "key6": "36fjUFD4menguhUY3RSKPhge3SYWp8WVvs4TvMVmdizBwHMs3p1dVk7SUT891e1JQTSkSNWQEQMEyJESvuHQM9cj",
  "key7": "3W1yPHKXwEoGTTWjQnyECtFK9j8iHwMnH543sgthEuBtKeM7PvRXtvyyJEQpQKitB5wqmhk8MuqTWmQHN6ZGSx46",
  "key8": "2yEG4faBy3EKmY9iq7riVpX8PvEcNnvqgeH2ssAQo2V3WXF2s43mFbf9qMMvroFVjDXDjPABeQuAyjMg9T8ZDmfq",
  "key9": "4mAC5XTLCkfkzKCtkxz2H9jTAL8Jy9f122zknV9v7FAqKp1s97hoGbbwJNSgmBQ81bPSPEaUK4PszdeE4sHjCY1A",
  "key10": "52tTNiHP8SrfoQLWM85aUbFdo4mAkvfDfMJUHA3EvkH6hYM4ujs9i8RdKxn1rX45oq9ceAnH69gnVQmfnJHbpJrV",
  "key11": "2ckvxcXEHAuVb4XtNHETB8E3qV68VpNwYNazYEVpMkx4M1KvMqWG1DUHmr6eAC53SWM754PfGJ8PrSpuivzonLAh",
  "key12": "qDeRb3GrmKB75NM3rkXVJJGy7WgJCGXDT4V7cWM4asDqgARaGvtsoepReH8uRzss21WDE5P59yXadfRTPi6BK8X",
  "key13": "51rNJnA6YjSCPdqUL9Lbg55V2Jo1p7gSoaZjF1M4i51VbJuXPLLVmfaY5MgPApYa4Mg8gi5AJtMCULMvMaZAhhk9",
  "key14": "2QJF2FPRYZfDdSa83cNz9Hs38afmgYWJgMidMCkux9i1ow5WBhnEAhSMD2CzpXs7aWnC93dgAHqXkUHLPfu8uHx6",
  "key15": "3ZPM5d5L3n9JMR4b4XeoyxTDgpdTjNwECazghpBXCYr7QRZSnx2bZzdNSh64VgYMmarW7LUJrsNq3JyRwx5j8SDk",
  "key16": "4uPNKiAXbwGgQh7qnMCHtcQeSKqYtWTDsoXCVAgvznf2EZVqb5pGH1VVVNJA4kxWRmVTuxLaJMM43qM8F8qbEesh",
  "key17": "22MLgyt9winwMPa4JjXFnXzPPu38xdEcokcnem9D9XE5qrmPgWYTBBZqGMriXrJCZ5rWUM1iUhNh2QEiTSiXzqbc",
  "key18": "4Cq39VMbxz8mnfLBdm4TetSC3cYmVaVtgW8MPRqydEuz1hygPccXh9p6f2eZr8PoRr5YX5o8SaYXQCsuvgbwvymU",
  "key19": "38wyoAkBF9P5QswdVotxHnP8bLoJWEuc21f8GC1KnZ1DDH8azbrwNM8U1gYQxLcZYzfgYCuRYeeBVPFWzNUWxJJR",
  "key20": "4TDXv12kqYJCSDm35ymMpajQ7iSffMvLbW2iwXyXHkW4sBHaY7A8YLRuxYyWcbneamAi5hRSN7qgfTBHrxBix7FS",
  "key21": "5PACdR8q3RU4L7yaiHxmQD2pQTASd88BK21VDSTfPBkXWZ4gftA7J9XEmFbjfKa3E6ykt5fsRZQYFAkgV147qsP3",
  "key22": "3Dxm3BmGty54nLSnwV97xc83842FHSDNigYFJ7ifpDYD1mY3C7LLmwZtVLMpDhp1PjGez5jvokH2SS7KbsbsRMEi",
  "key23": "2vpZStrWVJcf2yqwftALR6wJix4Ux9zD6yAPt7DuFUPGgNcowg6hzYHPHmrj7uydLZBevUcmNuYd3qsWeR9xc8h7",
  "key24": "3wzBY2vSSffXPUsW3Eo5cxXhvwVPTyxs2uEQ1k2ZW6T4idu4iZuUYhie3kSN74T997vzAfR3qTaPtQHTQBhr7kB5",
  "key25": "dnjMVX3ZyvCmHEKKDDexj8PHrN69joVJZwcEqAg5LznAPx4gyM5fM6wwFGXpT1b15kYQ8DbrUSnymFA3Se1aR5H",
  "key26": "2FHf5XEnkyGSUVNgbE9ciwrGsj2NHRErseKdtoLvjfHZTSH5XohskSv5sHXUBqnx9it3n6LmiHoTHCTK4R8A1cJB",
  "key27": "4ER8vXXf5T1P5wGYeeGr4Yfvb7MtJVrCodt5qkrPjoRv54MUD4ZbFCs6VLAzZA1vvYqPkX5yjPTfdteBDLxCzWti",
  "key28": "5S3acetBRYKiDHeMH96JWMUzjgyKZK8ReBCrstSBisWyyrQhK79PLuK3eWT98umMRjdhCRV9ZS7VNbhtuYBRAG1W",
  "key29": "3BR4ygfH2t51SyggMyCC6G8qWXzHmWDd1a4PfCrRZt3KmoRCm7aSp1peKm2EFJSkE7fyJuEegExWmeuRgaV3YXjS",
  "key30": "37BTDMNhYf8VRj7cY8GEU851UT2ZGCpPGk1qjXZPGSbHrrNYzVx9NBNV1KwrVWWpupB1EC6KVbCD5HevBhXAEpZ5",
  "key31": "5VAC3WESbvTh7EGZjy9GsSBYT8uDnGHLmcaqp4xj7vvU4fofcAqSpkPzZJPQfu5QrShjQntZRf7xzWFGpDWNky9X",
  "key32": "kTVBn98n6eaRLbbjQSjVwDBFudwk9Jf4Bsm8uGUm6haoK7v1DRQCnAaNCHJSRWyJ8AjkhWJcXfEX59y25J7rR4V",
  "key33": "ZXWaKrTxZaCuUxKbwGG6NB3xHsiCmy1kSGjbGnhbc5SMKPbRv9F1BbRgTM2qr2CKKpwicAmpkq8k1kBTZXy9vQ6",
  "key34": "3mv5k93bZhrohVFozskNcQuZGkWsXGZK7uWQaqf4gMUifsjExs2VpXB62ZYcu7p9XkxWP3qBVbhvY35V7GAoVq5V",
  "key35": "3jm1BsZJWC2KE5NTCi9NUimQzpqAkezfjmu5QbCk6CLoU8X6XbUmLRnh2DGmv9bJfc5QoVwfgp4Gh9YFqcZxPvBU"
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
