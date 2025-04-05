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
    "4kvNqWzorrEHKR8mGMrYGT9nCD9qqy6GdBMyBXzETxDVb7o9e6A6eJwp1jZvLRpPadG2DmK1Xq1BGgxkvJX8av2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59kPmE1LJ4i8Tfve2BNnZPv9D3CkcPfZTgm34pfsFDj7gDP6ZtVF2PWSDoU14RepRmMEmyftufGPqewXFoJeVwh",
  "key1": "4wzMJnhQ5kySBpC2dph2J1RrzNLEHQV1rHkotFrdZ9GWjSwJernvQJM8bQC39Qzpd1dwWZGiEopmMCLwyaAmgH6y",
  "key2": "3AabUjhsVcKMm5dNpovZzueQRGmFDZ7J8ByqM9uYUQm86vqXeE89F8NSaE5pZkUaSkKkg74bfyLUiZfmQ1wWbhaY",
  "key3": "2hfCiBdXQu8R6uvrrpJuy2SPHReKdMGXFQCjck8RpMfpvLZYhCYU4pHFnJgnMsaC9nx4Nov6mknRSVwBTRe12bhX",
  "key4": "4pTxiExDw56VVZpJzYN4ke1m9MR6XwNmNruuEYujkTo1CaSr1kBfzZmFz9uxnDi5fvBgw21p7GqzFqswxrshH9So",
  "key5": "3NaujJCpL1gWKPqz1v48JXiF6tLXiFfwBE3D5UYaHQSu8DXt6boYpHDVcxiNbVsbHNRgrgGhRBdG2GbimeWNQ6b2",
  "key6": "ZmmEvgrruXdUxJ9eqeUwy5bqtV1U2wTh67mbyyemzWfVdUYhqV6et1eXeAyqW53GfD3vUVjiAkwx2LMWZfkCQp9",
  "key7": "3dwEh4Lc6SjyySJCEBhmktDhRRdiCxdcWejeFafmfuvCSRvSSKskMb7qvho8ePmx63okAnhea34aEBYdywEr3L4G",
  "key8": "Rxb63dTPsAzFUAu4QSzmZRG9oQkjQfdLL58K7cLFKmm3XSkdahrKj9PeUejYovydL8Dr7sWDkyiDttQYRVi7kHQ",
  "key9": "2vDYQsKeA1HeyZdRqcpcJRr8xnnpkSNSFJFKzYGX2hKBxobHg1NXPesTF6rCDAF2viva3fNgRpcwq847w5cMqr66",
  "key10": "4LSw7UutaSE76okNpZD3TpiYuJEWK1kxFRUMadmSpHrhtxwnQTZWg73xWMYQZC2ZPzYKnEsyeyaGnJ72rs45XCjC",
  "key11": "oJih2kWWobKsxdjaxcdnV8LGQbiB5nKnBx2UCpyyjFtR5DJUwzseXqCUcYrotxUtHPSLWBWnGAfSezbWvAUwG8j",
  "key12": "4qDRgCES29V8MR2aBy3sgVEzEoYdyc7vFy63G4Luidrn9M4S4mvjSzNrbEMbUPKCtYkTQwTGQAkVRRByKwG3Tszx",
  "key13": "2mYoySeo6Xcscp1sxKy2hXYSCpMpQXTr7xh9EXLF8DXMAB5PD92nLEsECn3mKfXpkqXxdz49rxosEmSxPoVBeazp",
  "key14": "4hZ76HvbUMU7wMUbCNEd95zYx5rFDZNxmaioZKuRvusejYJXvDHpzafk8D6BBqt6btWm5udMFLD7k3ZunTNM9vZX",
  "key15": "4kjzmtA3RQB12vvr1XiG71wnbU8XPMyWv9kL4XxitB1nvRQ2pKgdssxcsPnNdwwuoAuqGHek2L1dGqoAcXbiknqr",
  "key16": "3yMYqUbsL7DXAmzqbbYWTCsCyqX6pB8wTo6Jwhm86oF3LwbrdUgt1CCS4R5ARNgRNJYgstkDbz9KhyYC3gQY2New",
  "key17": "4XD5MbB1Wt6gPW7BpJNsvWUjGZkbYAJGVu3u7hW5D7b5Ek4UsGo51LGUTPVZQc4pJCsuHcFzBjYGdbQRY2jc4M6X",
  "key18": "yZA465YDmAZj1Zwi96Q5HsC16gU98nUxYsuAdNZok2xJLmy2sk7K98HvqLr447XnWCWNf57G5h5rzt2pEQaxrq9",
  "key19": "2DucWwTXZV1hLpiGcXz4S6LtxFSpFedCXcT2JzQL9tv8DtFT9SwTQjsJUjctdnY4P5Ma9UTze9viMsEXuVqSmvVJ",
  "key20": "3q49tFoyqf8VmPDusWa8L9fru3V8iUcs6MH7j2z6uJNV8yDsdrxGkD3X9KWx87Azn1i2SL2z3wTuNbYFnkhzDnDz",
  "key21": "4fUfdSFjD253vKWRCryRhBR3E7HPeBhnvN168tYrD7yfAb2Pyunm5FS6CXJ1tYh491ZXpxEfEvt5w2mAAT8SFN1",
  "key22": "36J94B48P4Qq5rfDH8xiaG83hJrR7fjcBL6hjY42NFDyFMJfxiJT6EeudLJK47uNYHHfvvzrdqCfiNr6NJAVmjKX",
  "key23": "9CMd8ugocBxK5eviuQjP49JNXhMsQ8AfRk6hkj9wMdymNpXMBxdmHcs8L1yrShXLNgbGbtUh3kzBnauzD2FsH5r",
  "key24": "1SQY5QchAKXAAo5TeBYt2zRtXvAHCTq99HCvyKkUgL6uY6mta2nxuj4Zi1LDQ7XDMq5v83K69UWPVvvA5TsDk4r",
  "key25": "Je8PAe7XDhAMXbbwVFQsrnGdjWXxEEzgUd6g1BtpRVQq1hDV6CrE1PGkk1GAbs9wSE5odqwVtnieTdL9PXKt9XS"
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
