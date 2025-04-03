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
    "4ehXeqbtRqmNSjj7o556ATvQ1pBkyBDLPYqxfNohsZLqiAhwT5utkzkaTy98yhU2cSk5CH27hLaRUkB6nPiPftFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Dsh2ohvDQ6q4eKUyEomDTRRnKbZWvQqS8mW2J2WC1FspfkPrxX7kekdXX1uMrrCuAtJKCsnRKtK3ukQQRzRW3fb",
  "key1": "DknST9Ec3SsiXDXtx69LxhKF1YhkG7se83YeAs1c4kLWVwRa3G2mxQbb7j9M9MGqmgL6ThwG4Sip3mUcXompYA8",
  "key2": "5LzvUYMqBzJex9RQLL6XYHrF5RMjvLaWaeJWzh2vd6rW3RCoeVrzW3c6LQFYi59bsq2DmS7gezKvzF9hHiMdRxpt",
  "key3": "5vu3sp8VGzBFvdeGiwiFSpP8KR3hTWoJyRqKcmRBaPUAUD5mzo8KEyKPcUCLdBq91JEtJ3yKgZ7fzQGWyZtzLj6B",
  "key4": "5ymnLSxpsMugd1jCzZPVDbFM6S1KUiiux3Ea3qp2AvSM3qbBCJCcJdT9oFAsH5nLpimzeACuGno8fwf6HE4aFD4f",
  "key5": "2Cx9EGBd3GbdsQJXaSDLZRaPUff99k8Uhg5CEWrHvEnh9ipTwDkhEUjui5RT3NSgG8niggTYR7TTaDyEkQT5RycL",
  "key6": "r8Wpm9njremyK3xF3nqZYrqgCKa2WvELAf3RDxvgfCArQxTPi9mXkFkazdPBcNv5XP8oSQZQD6jw87gwys4ZoMD",
  "key7": "2P3EJgM7SjwedQV9gjnr4RZNcEsvNbiAwUHM6He4p3KkZFuVSqFNEwAJrs4kGybytuqZacTR4xJ2w4ccNp8erPHT",
  "key8": "29mn5tWJddkzmY6tvKBAVMjeaQpkhPkDEqhzuPn4FwYmbu6xxL9JGKeQkrKWV2BuY2d4Lv7buiYDCk9ECSWvRdrN",
  "key9": "3jqnFrZ8XRfYnX6itX94h2TaFmFvwD15D1J3dZxrKmgJbT3TWWYnfwzXFPxJU8d27CQrmqvCx1SWxaMwEiZFFpQF",
  "key10": "4R1HB267BkK6bvkhbaByAtkekKY68cymZ73BsJNpkRXHkwze6GCgWmo961LuW9kqZJA2qbgSNwizBNTphHvB72i4",
  "key11": "MC67xsmAQtUxPrZ5L9RjSQa5aDMZ1S9Zq7Q2YeFvG9yATTZBAYpa4U69c8KnBDPB8gRqAHsmFT4aLuAh9Bk79g7",
  "key12": "4cAPAZBgFUjvLrAcgkU8jS2Bv9DJdFXCD282n1VfURJxZWjZEe56YwVU96AqrtZ2KbLaLFLDMqWjefmNAouF7ioY",
  "key13": "zJutgUN7eTNpqAH7nCpytbUeYDT4uanYFvZ2r533DdeLZi8sacGzHhUnJj3846GBfzR4TUESQBw46ZRbekuekQJ",
  "key14": "5Q8AshhnghsnZYfKN8xaFMvqpcs8ZGpUngte5Ab1ux4WgfmDAUoDh2ukR7XQjbnPB4JoyvwrFRBm5LnN4LgpRRLZ",
  "key15": "5mYTMBiDPbmVFhCcvsZgb2WJxPEKssJ1pKRimSstFJELVZEky1bHRu9ypYRhTrhhXcaYbDZp1PJDnuHWr8E1kgig",
  "key16": "2za2dVZwpq3ihQkRTVNCmZKBRjECUzZUfJAmddtC6cU9CVZ3EsfmaXU9DaN24e4NR9hj7f32iMKrdr7usquQX74U",
  "key17": "5QnzLHtqL8YvacXC6YSc4YoxQfgVKLpi2rruz7SXEEgXiHNLedZLffMSTbcPcXo2xmciN3Deu9DDiRM71yQVTmyi",
  "key18": "3GdE2gGtey9xRYkNMmWpztaog8KQEwy1dbBzGXX2C42yPRnmbdopRu4zH3uaoDcCgzQMmqHMpxNckxkyX4u4hubv",
  "key19": "2zkYoDkErcyZaQo8D2faCVZ3x1MLW9zCb5Y2xHwrSBcsrw6h5LxdsaMznmNLrscGV8gkLYT8EsdxHy3kekEeH2wf",
  "key20": "55BaVCFVSwUBxFadMoijZ7qtZ1m7VkbKpQHYwrxEnxtrGk5kCoRYyvgggSVtoTDr5vy6JR3zxVGrPxDX97Uiv5Fk",
  "key21": "Nk95xx1qnNAhJpM1L8fYEDhFdi5EsNycXftWjTesx5BTRqXEv8nTVrx7eHRqhrBfVneC2MR1DFF6SFCwwKyszh3",
  "key22": "4uXRDWuD2BGYRC3HxxJLcs41aP2epSWHmeF1qvDqrNuB9d2ED9NWSvFzncVcNWqzJd5NAzg7y8pJKZWSaT7uimri",
  "key23": "4H3a3V9RbUsrx7qxStKzw1KHHa8DgcLaTzJRKjvoiX5iU1yUZ1g3SHxTEt7r37msrdQsgAj6Pfm99FGk9ppAwZui",
  "key24": "4grtwGR1YtBE7QV5wjr1ADmyFuSby84z2obQ6Gy8uuYB97QtnAgBaBd9Fka3ddndiLEdpcbUYRYE7nXHRxbKMoHC",
  "key25": "4SuNVk7Ss1JQo7UCmdCD4mU7vVDQLQRG7eVh5sWPHEBmAP3ioLbYzyJFvJ73BPATfRPMJ3YzgxgTjS5mJ9ebbQ1N",
  "key26": "2MAkxLPJta1SqNs9P17hUkQfFPNJtNFdK4PVZiDGQMrH8mETpiWxot7qk3Xe9RUfkYviin8xv7EVf9R4oEnizCYk",
  "key27": "463gL4szU93Gv22oBggPKtoCgfX4qcbsPRo6wRAZBFo6HqW4jKetRhFddzHDFzcv6aTuxYL6dAHCdD41vPipKz87",
  "key28": "TLhRHC3mfHVgtgFqY1ZnALxfaYzazamd455wAY89U5qBsVR6FcQrXwhhCYE6hANGH7ffomW6wzuHPddt2fBK8NA",
  "key29": "4pN3nQRTS4AorfMHCNq6NmV6ZFj8A1jHZvVtPLiLKKPuTck2eTR1jBQRRyvfZdqKDopLy79J76tigxpQ5gECdKok",
  "key30": "2bTDmSjrqu4RDKwnto1ESD2GxkCnjZzCemougphGMwSnkfpkBUbYeRwTLosB65mBM1uLFoTJfNg7NGEDTmzDxzir",
  "key31": "2F7K5cksxUtEitaC6NuZ5PLJAec1CnCgdyB8XjhWyLeTMrfFREnmGHB8C3sry2HGdVaVUVpQzJpGP6EGuUuK9ERh"
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
