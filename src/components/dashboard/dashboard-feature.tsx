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
    "2hPQ8akidMX1WX1iNB6vdXubhTGHdKuiJkqH8Z1CELxpHuxgDiJpsaRcLKiX8aPTQWTMFExs6Wg9kLTXgafHm9Qz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AtB26QzkwKBnxw6cvdemkKPa2P1vRzwzW5JVUFQ5WYvX6wtPPB7HuMrCz7Xruo9BKFVDJzkXmLdXj4Q8rPiXtBu",
  "key1": "3zB4o63fDi9PRohS4zphCzuYyR7R4m26MZcfpByTR6PhKPoyPWvg388K5GwbFuiyJNLGfDau629mtHQu5kvDArcx",
  "key2": "biVrK5vviVus4Sd5rYds5hTiDXypi15dSpvo3QCPbJFTTTuNptXFMzCg5RyowzVjLv3nRZTUzYDLX8QgxRq3Tkv",
  "key3": "27rLne43bTHr9hVMHJYZYmfZyDXryavHhAD1y8RUqFm2naPsMRC5hixQPgaHMKquRZ2CSXv3CHNBDKGmPrNP4ZNj",
  "key4": "aEezuKRr4bzrSNEkpfWZNzexFjuPjTCv2AWtYrMLMTxp9ucn54aPaUdU12Tda9Pw1bA27DH8uDXzR8j96FRLncQ",
  "key5": "LjEPCY6TUu8wwczPDqwDmMXDPqsKywPtLqT9YqCcYjzUKF5b2rCgX2MZr7URqxBjXcoKUhfWaRaiRQTvRZqxGYv",
  "key6": "3hEvUrCAjbSRvBDiCR7vEK3SAsS7oS37MwR2aa78R4ecyCeAQGwr2oFUCZCccLEZmoVv8MGuoE5mM7ARXqTMfB34",
  "key7": "2qw3UaLC2K4mczxtvgfzaB96U53h48MswaHJj4F9psov3SDxVNmfTrM2rVc7jXeBduakpRNKbr3g5hLki4vnLKwi",
  "key8": "hhwpPbyHAP2GaUwMJMA768i5wB1U7AsSZz3iVvB4MkZCWHEg7RqCXk21s6smLLzUeSfCAkTst4Z3ShcRnrqqXxP",
  "key9": "3zJeHA7X8n5cju4VyMu63t3Bf5byD8yD7ExdJ7wLCsQ28dCd6KohEDVXptFrEJ1roPcH9dLkHMqmdtYu1SEQwGj3",
  "key10": "3Q74veXXTMgKNZuPi5JqBWG2Lt4gren38RVUUueKTsYaKCb15jp8KyB6wVdaKeRQsaxnT3had27N5AsnzLobmnCf",
  "key11": "MHWAswBtSJRPJ9N2gMAByaozzis93A4U2UtBWEc9SRkMbXAPsSPmMWG1U37bqYic5ToNnkwGj7PupkTg1cPUD7o",
  "key12": "2uT27dbqDctmMhHkis5faG5o9acEZYA9scRNmxbnvpSpNdNDEnNWAZTGd5Qy9qtpaEe77jZp4qbgVxCMzFhJSSXt",
  "key13": "5vabQFcgUTewpjUoksUjnmK3jxfszDCgSCVjAuqNjrdhjSL117zA6wbktQCT9z9WSdEfM2fZbL1aMVGaAvz7jHsC",
  "key14": "hYaqRSNnkzUcBzW5Hq97Af5AxLNKF7uBApwS66wysXVPan9wn2LhnTWGkVMK4XqA4arbJe9yomQDLuiqsFT9n1k",
  "key15": "2WfPP8MdER7vA6V4E6nkfVqPE7fsoDUifhqhvArnNsbZLcDaCczMEnfZXpzWdGRgJe9cY2UFPQMsBbUc1oiaVEmg",
  "key16": "4sZpWd4wjF479LpnTVnAXrnwsHxrizkN3MzMsGpuCGgMLZcbGbeLJBMuin9o5UJ3wr8hqrfesV9B5TUNCsSvW4RX",
  "key17": "w5wuW9XEohk1HGF8chRCcmwKJv9jgq5TPLbkVi5fWFJRiL1CgmJfAecVsYLpgHhVfoaHM5gJSDvUCdfxaUWXGqv",
  "key18": "4tWD11wJtimHJS9FXHytQfoUbbFZUhARn2DAyKEgyMhAmEoSBVp42ZRxPJrEiaHycqEvhEPovPevjz314hiXCA3H",
  "key19": "5AgPZTCwEBi24QsHdMLdCpRXEUWS8GJiBSTP5bFerTc9g3vXmiaPSU7xkiTZFSL9Dhm5iutZUtqu8bEvhL5Z4dih",
  "key20": "2m5Q6qUt14Fu9Z3K4DqH1hLxnksJjJcuvHGsdYMm6PZcQmrLYScQ7sZYVj4MAYtLfWCkCo84RyDf6FkSxcsKYrSS",
  "key21": "5CDrDStvtAw73gaNkbPRLQBbbUYcNMnVw7RM6JPsjjfvD53sqBwCzm96s4jmQPj1Jm4HTBDzYyPAzNLbS8Yi77ev",
  "key22": "5w8Go63CHKnag3rbvJyFo64mSKvKRirNVMwMZ5JfFdV7HBfbdAQVy1U2RN76gw9hj3HCLN3589u9heoGx27dyEBC",
  "key23": "4rvbEonUQeV3bh4kHwogEYBsVEvPxbies5Zy1t22Ku2Se8udq846wgFbCD6E7KP3zxKBkQKG9S2ZrzMptXfsTpxn",
  "key24": "3tbsDt5mJWinjy9ujQd3YWy9pSRhMhikxn16biZLKa7YzVg9f8jMCjq5e2kKCQqNTtTvM2t3ZpNgtkPFQ9mba4YQ",
  "key25": "oFdwKkpdcJbvvP2BXjeBuGT7vxiKPTLqTPpXXyBTCVuTQ1GDLnr4fX32Y9Yu9AEskJpBsSvkWUc1HG6NyhYKFHF",
  "key26": "5KH4iL98qEtEoqSEKB6R4C5pVtaev6xZNGUhCFHRFSEXaT4eRbXPy9NaMoYoA7owqU6uQa2sqSGbSwEfJPcFTFP1",
  "key27": "124YTtpv6f9RhiKw8ZYTEDtEVvfTfzcaBP3gESmFizRL8c7i5gnJ7BGth965K6WB9nSa4WnE8ki5uMr4YT9HF1Xq",
  "key28": "3RwFSgjibfS5Qe2fjjiKfXo8e1n5GnKhTmZuhn3aAP5veRSJSx7j487BMQYNEBvmezk9364kSncEUrYcZjhuKteJ",
  "key29": "3SHdpBBuLq8AEXj2wWED6SYYqVMKtfbVJLCodRN4qSrZg8PokfbhnmQFn3KRhYqw3MJ5b9FswH7o9dqaA7yLwjYe",
  "key30": "5rX6NsL7ShBxKW3fwerfe1HJfwrXN6cxhxRh9kHvYJiffnHp3wBqChvbotw8N6zHRf9wTRcackNqY8Ns1KZrwiKP",
  "key31": "4ZfbYcok2WHhSwLSmdczP63MzvA3tpuFskGtxhBDuctUsQN7ebRYAbaT2cxh57FCJ6nPiV7FfTS2Zk6DDexgjaY",
  "key32": "4LNhqyv7PDdvYR1pWUWEUh9rmkzs2UdH6oaGQBgi4F4DUg8qTQGpipXUrtgSsTmxLLVRsW2k7s2uPNqfbMuavT5D",
  "key33": "3DB2P2W6cf3FmXXoA4DZTPbFUvmh2iz3NFzB1FieGQYqaE43VXi3Ta16GBiGLraAvu2skBLMkNGbjUuPRVMeeTf6",
  "key34": "3h3ngx2Zrq2RLFdCfu3Y9Lq9pRAshLyC7narQhtf9o6JWm2WZJ33qc16Qk9bVtyL4rFfVyDnrTUgqe3SY7Fmypny"
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
