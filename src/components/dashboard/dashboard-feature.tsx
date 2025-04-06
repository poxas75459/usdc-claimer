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
    "jWqPxuJvGm9SGy958v5sv6cSPEyxxruejg7fZb9R9LSd2w9AxBcXuD8E1pdedZjdVsreDKA7UFjTwpgPsfR3hua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26uTA2cWHYDwXzi4VEU5MxM5ec5cv6fmXacXBQMgHKFrUWcR6NEKb6SR1LFiF6UJH7rFQ3Aq4CNcCPsDjgQSqMCc",
  "key1": "5ftacH7G3ZBbCkaYfj46WHneJ9FVBBQDqGa1ayKDBUK55ZgG8b71gvvDDoAou5FWhwv4jS8wjx46pmrbERBCc2JG",
  "key2": "5Qfd9gE1ifUyMGVB4GEJifZYee5FoHaSczTdSFVmkGLez7gZj6TDR4J8PHfYHfTgcpbpT9mNJ8HAkGN1ZFiLEDLd",
  "key3": "UHuRZWck92qNg26W4urrtyx8ss4dCSgDtiigjUHzuY7Q62XdnMRzUJeLkFjXa5jGC1hAVE3VQwLXHQi671pyFkF",
  "key4": "xwNwTQgVWEZuf7TrjMXEndnGXkyrxW3R3RtsjBWZHPEboEDzYW5atosL27pqeN6TKDd7wdTGGnubenfe8s3mhfy",
  "key5": "4F2twk4aDkRnPApFtEmBmabNbnP8Wra2HgJrjkKH13SWg7uTXYm9X7YspTAtwgoK3VK84aUVGRjDZDEiXjsaghwU",
  "key6": "2RG9VSgxKQm5Ah5pNuCWMSKUPFxRGCeGjJXKMdUfvTjqoMYFkAjCKNbkDVhETSf2QJPqqKMt4sinNXohjmowDviQ",
  "key7": "WpPFpvn51gGQU9UAit7MLcbYVBvPn3CjkvCj1BhVyk7H1JJgzv9YkdtFETUaL7eeu7bgt5iFog7JYRj7qnSLLKf",
  "key8": "2AWYk1tutpY3fW2BmVNkYck6jdVfLWz46ZDv3VtGTpSzeppj8Pzy4TVaCnAFUHeWVdsWREpHFp9aodKUn54PWZK3",
  "key9": "xaGKwXynHwYmPps41hGKJ7z5VSo9hfqcA41u6sS75ZzvqBTyWA68DCy4fz1oQd2bSx12AgNEaT8yoybJpF8ihsi",
  "key10": "5S8WUYJWBn8q8ZNFMaqpJnEVPxU3ARym8edrDiZGLyr1h2ZMLeHETxVV3kEBQzyNZ5b1VoK8NJWgyD5twT73PL4g",
  "key11": "5u3WQvEDKyApFTTGowR1BLGf8m5W5QwWtU4gLbrMwmMJGzBjeMCtxbtxzPS4xyrYnQygmMHsFf3pnpRQ1zHjh9SK",
  "key12": "2x7PxfDQvDjyj4JKa1veg7ApQtFR6NkgEkF1dNZc3KmtzydRSXzeLrKx9dHreQa1XWNq9jdESdbAcJ8WFw6PmGFg",
  "key13": "2gf8yVqt165Z77FR8U2DQoVutRyh1ahhnAJf4E6P8jeg5gK2M9b6XvabJadg9qh4qCScu3RADSi9G3RWE6zTtfdM",
  "key14": "42nE3vqmNaehXq1DeEi6bWDmboRaVPBMvhhFRYz9HNi3YgaHLvTBzUqQYfDp74HEXC5NRMXrmPmq7ND5iVnopXn",
  "key15": "2ygPkTnBrJKNWvTxxRAsAH6WAMrQr3viDKGp7foYCoDVZhTitfu2RRSki16B4rzyi4bpr8myNoWFzWQz8RdRRyir",
  "key16": "ckd2MAijwAUmFaTGTJJXsjcXpfawX9J8aaGeZetnrPALXYFGP4wQqNYCJc8RDTGAZPk8u5VbVq6iRKMiKs3vwuG",
  "key17": "5vo3BCSEMujQWLnhsSDa2ydgoVV5cf7HL49phVMn6ik297Z3C5iULvCqivvvYDyzci9ePUbRHeYoDCmjQVggkhbx",
  "key18": "4YLFZxYuWQr3b1yveAUjfipTCN7xQXLwtcL9uH7xRrxkyVYBracfCCbmCkFqHbR2bvrwoobqo6rkJhWwDUHEzAZ2",
  "key19": "6167o9rA3oYour7KhCNEfQWDvQEWUsM4RpeV2HzavDBkjQN2nvURuCxTebKwWVNHC4Y8kAnzrkGEHhd64js8GTRb",
  "key20": "4ju1noFGwxZoq61TQGguCrJCgiRpg1BvsMrvxMz898deM1URChqD2WysJSvSdHZkCcj7GASp2nB3zkAS63KajxEo",
  "key21": "SzZPvkz68d3YTBrXnyMiEKhG5AGMsUx4rxPmm9c9gSiiyTsNFdGwZChbgejEQGdQAcpaL15KSB39uFNxwAYdnLA",
  "key22": "5hPSP856nv2gbYBEHLAgUfm4uEDd8WB7hCLJLAVPcN3MK5SyuR2GxkDBMATEgoAquU9ZtmkH9pLyJ8UAf9EkSZdx",
  "key23": "5yfsYqGK1a7aT8dimvYd1STTVpNUUnwvh5J6KtatH126NTXnJsT4rbmq54WmQEKsnURfnZDTMfBt3FogQYp1sBFM",
  "key24": "4f6VF8gRZehvsuHNAF5JdMpfUmsD3bZduPeu28iTwhGdpmGjr9mqxLpuAQnDdNRNkia1HnNM9WPFajVJkhWyFsWG"
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
