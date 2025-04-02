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
    "o16nM3YqxesLtVeWa3xeVanFeoypcYKHmnbz9ABEZG8e9yqxYTQHjVuMNQyrKhFgtxpDnWGUPxntpwRkFa3oqeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4EgPyRLtFrcFhX9uJ8axfVXWuGXxUp7Au36S3eyn67dSvKg5AACNuuJXsm9peA5vpnYaF2o2Svy9jpfcd6Hncn",
  "key1": "5V11HEtF1aR4B4myr1Mk2wxETpcgWxfURL41ZFqYKnaGqGYDLjmbMSySqtKKfCRQ7r1tQ9xn4D4h1qnBteDaA6Sd",
  "key2": "4kN2i6e1Ez5cXF2i6XEdeWgesdnPjc9wWCfWSH5RJNj1DGYmPcAWcBMzTcFNUstuGoZvJEXVJ4RkF4brks7UFqzD",
  "key3": "2enGT6Kuk2PALLznbYwvWDVuDRTP1LTdWb4C3empP9S8HNoEFeuLepHizondcZandsFYB3drkkeT1qtAM6Cr2VYz",
  "key4": "2GBeKNtpZza9WuiLCcRRuwjtFFRqgU4xyzNNyNcQUdRqBkoTzviBraGwXdrTZUo36of8nEAVbZtQT61BX864H3Db",
  "key5": "2HK24yx3ZaZDQUWjwbgots7hMksiZtp8pab3NWoHPtNM6faHQv6VrseCc3aci8uRxFxBW7eTRBu76eXb7oYFWMTq",
  "key6": "66igo7xAeWZpRYyZQvji8skPCPBoqxzJ5zFV8GXs6xM9Y7ghUzwHzjKTxXc8rDeUyj2n2vYr5JqAjXJB8bi6U4Bo",
  "key7": "4GEfCAxVVpR4YPbQDjt5NtaPoDKmsQ2MHdUy4mtaE5iSEmmHyK9V7znaCNjKPVemntJTueq9dyU8C3sUwxv5gzUD",
  "key8": "PRk7Xue1LDvzR48arZtHqSQnwcgijFpbFaimYN591CojUkQUjirztVYk3s1wjZKbKrcLjRqnkZnB56xMbX2SVcY",
  "key9": "GqXZfi5VVRgk7Gbt6SFCvuiqpvsovpFMfm1H9BupwAiZp3xKAMMHP5rAuzCHu9FFbHUFT8E4AeviurJPQ47NW3v",
  "key10": "3YGWo23PEhLaoipLffcJBudBrX9ueQ9iNEpKFzz196UVaFJNqvy3uHxtiEvMxrZRpKXbptmvtAtT7WKxBbGDpGTr",
  "key11": "3FShLo4b7oEzWtT8PLcQZuQvLNn6B955LSKugesa63CR8pXgPsV3vmtMhpe2fADmKZopXaJnWH2JkV9RwgRz1U8Y",
  "key12": "cWMqA6RtbPTiYUBBS3pKsonXoui9ySbVYCtGXzTgx9SKTYzELCXS6Cj73dGVkhdXpNsQg1DYXKvcyYr17kKK1Sj",
  "key13": "2TS4kTrGn3EWXh18rujbVFXrnZftTqa38orjCdKZkoUyqBbqNGNE9YwKfaAo5RpHwKb3wUBzmDzLgFtCnXkF17RY",
  "key14": "3HAK9nHMBw3XGQK32x3FcQKXUBfcZiTm5kcwtQ5YWpV2TwpaWQVZ6vdTXVPV9uux7b4zB4r28wTYZibYTV52Sr1i",
  "key15": "4Qr1y2v2Fcf84fXDv16C55Y2a2VnJYb7wBQjpLRuPdtDYyu3EDiTLtYtDy95YfnLs84pQ4mGSe9dPSYSnHzUEGcM",
  "key16": "cU412UHfu5rLZc3mLKqLbSQUui4z7mk6FZsFGBB48yamKjZSbYYnMjbSSvX1PspYrY1etSGePJf2TAzsGMn8jFt",
  "key17": "4LgrbxUKqpEfV7ppz5xyFFY42cZGETPYdE6aiUX3ghPMxd6JJEkz7sTqFPJXx4nUi45z2NTRoXGvXLKmydgkHbuP",
  "key18": "3MmPqBhrrFhtCwrjJ3FZxX87U8xUgAr1tVZGcQWMxkDicMohAUayT17yVcw5EJp9WnUnfwxbvvbacajHZzGTcsGL",
  "key19": "kkPVMvYsZKbRYfrpB5JBNRmFyCPVpgZoCTFZ9rLGxmbGayK5fyLqrW2PL1jo3YveSpF1fyapMCmtkEB1XUBdmG3",
  "key20": "5HjenoiCKANE6zsQhyRyut2iikLEEXQGndfe3hUGAfCKpoSV3Z2P1hewYTuqkzwa9pHhfEMEEBtG7KDpnVNV8YLC",
  "key21": "y56s1GGvSGM7J7T3bdLLSE3gbeeLjF78HxUQ2tLRQybS2ZgC2EK1Et7cyE1zBF3ZeopWXT8iKz73F5oF4JtiQNG",
  "key22": "5P7h2wxkFgvyS7A15zWFmFmkCTCcoFJmqcKh7BkMJNsAyexxfUU6YGSz8Xix6h5xrfZ1gbACnMfvZPKYdENw79yN",
  "key23": "4gHpmWVptcUcuosYVz1mLSCd8WcBiJPvSjCJKH2axKHTFarcSj58gqJzAuVFzFKAZvFQDB9kSrXRM9TcaSf1CJRd",
  "key24": "4GLtHsPoAioxRXDbiZSgTUcaQn7ERCYgj4reoMJ1uD4i6PL4gSi9Kdf8dS9AbbscF8LmwkkQAce8DNw4HHk6ZJ5u",
  "key25": "4tuqgVMV5Lu94cKqDwnqNdpmYQgKZsquSYGfHW5xtkqBMH8ULkGGkvmB2N9zyFXWsYY2VZw3RQznJs4qbeHfp255",
  "key26": "5sEnGmTeBDZ3UFcDyVA13Y627hhgKU35trJqHVUKPKg9oQSpJZ2XDeQ8YuSpMqoJ2vaSW74oXVju5CK3PRV9MaHn",
  "key27": "GsLoJ1jEUx6h3XCh6fKDGA7ZKvMb18zfVNCjQDHg7N41LbhaQeL3rRCRYZks1cgXbf1j2ZuWUPMLTyD6aqiXCQ3",
  "key28": "4w7vYicHXxm5MegqTvWMUTSjPQYppArmgjzERYK5Qn7Yk2sFHCoQDct62qG8r85xSz6eKioyH6JtVRm8CBEof1jR",
  "key29": "58K6Hgcz2NquvHTRDqyJuPaPEcggjqdYA8xrWUbZVd24mxFhkmLKWYrd5eEqpsT2fu5ZRGcDcQcTvLYFoP8L8oEi"
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
