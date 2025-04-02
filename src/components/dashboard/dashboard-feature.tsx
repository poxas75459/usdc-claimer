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
    "4z7g7p8pM5XgxTqC5RDFHwpMtst5xZy35eJn969xRtZciMbeXjJwdfxvRW1UbTbKmsmJBcGsFAsUdSx8fNSCxYM3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "skkT2Xu6Fo3NF8FKjdVj9akRft7eiZa7YGh6E2HhbEErdf9zSKwHFRjLGyHGfG5631M6ALdHuvM4iP6cUqVQabz",
  "key1": "2zwHQnyKSgUhgBLp4iLtgcsmywXRVFxVpZGs2Mdv76FBEEySdBnfUEXUnbytD7wK7SwHFzV355ERPyH3EZB6bnEd",
  "key2": "5Pe7t5N5R7TEGPjGHTe8btw5GPCybQtVj2uNPfi9WzW6WKd7Rir1fDQYaYXDb2JBMvW78FDCEDEpVAPzkMwMPsZR",
  "key3": "3JbPZbesUiid1weSoUvp9PUePRDKWC6gv2ZAPWedZTFsU7pk8Xn6PYGBfxS1PmYAvmkwxcZqM9VYhEJkvjMRF69a",
  "key4": "4FvhuLRdWaLDxviq3yQ8Vn1JHRnqg12x6rk7QxuPu7K6GFi2uvTo4ingL7Qqka68vbYa1p2DW7WvzLD1WXfMBndq",
  "key5": "45M4vApapAyYsvvGiTrPc8FYA4JJs5qS1reEiemD5MMdLptUJffZybQEpvF5tykEX3iqiz1VhoW2dwXQYdYsbDsB",
  "key6": "2ME2F5fq7ZT8Zt7xNkxZLpK3ccFaX5v8hd1qGDEDHt1FUg2iDpc9JZuE5AYZRadE9Agxh3WUrQUm9fxswK1pF5Sp",
  "key7": "4cc5mMzhRweedSwE2y3eNSxoRXw39aK67cJszZW5z4HQGmipFNVmKEU7dNYyUuvU7NYHMfTDvw19xPhfyJrRa4qg",
  "key8": "29DCcLd3dF68G1KzZWQDoey1jQA6TD1FeEHcDbhAEJ4NEV4Fs93yRGys8MCRTWTd7RpsE9ei5syrgkPahUtbi38u",
  "key9": "5fT6P7W4mxfZjeNbj7X8dNXLmcWknLBi9jm3RRafHztNcavcCdHw2VBa3qPMigxXDkUN9jMErgbnN3vt8qHmYHdz",
  "key10": "2r9rLyWD2fQriBb6V7uJpp6jQ7JPVXtU2F8qQ4q2yN5Z9NAWBQy9adsnxDdThX4sKkgfBLMp4rHxk8NZyroBfo2Z",
  "key11": "5CuC97FBbke8UrTHg85kRxN3SoGYRnS9jkBZVthP1szA1UpHRHonqPMVB3V3mCLX8GocAoHLYBwSxf4hkJuZCtDB",
  "key12": "4UpjoDTqoixrYK1fTnFkAjUZeYHLKMNTejRwGj9rSoKiivvgCaWDnjniu8S1kiqKH6n2GhGox78wFGDBDWXFzizY",
  "key13": "3tBsYAFgumzB95wEG8hK5BD1Xu6NMxzbiLofoRzJLaBUbH1vBk8nrUpkv2uq7G364Rq6U1EgagmfW2SkKzPQrXvV",
  "key14": "2MYcXtW1tmqRsDMbouDndBcGjhAWxD7Q5LCZH8S8N4N53EvLvxnnnioKLfw8jSRtECZrxMAr8DeSNUGhQeJG96kb",
  "key15": "3ANnP5i8Zm7BQ1rKKX9YwPKgmmYVGs3ePmJx9rUEGYZXHVcDraZTXXic5qWJFq6jhpvByjPJ8eU4iBiqQe94Urxs",
  "key16": "45RCnC3uuhLac5qDJdHMc9bRXARjytrtq79ZtMYF4H5npDrqGUqTw2Ti9yeQ68Ks4xD5AZovLNyrarkgVREQhhji",
  "key17": "3e9LYJA6W427i9xDbWjMMWynzRTeoj1marj8QKdWpRV8dC28FsvrmEZK8wpk5VFwD1uCCZo4L17t53kogMpbsmbf",
  "key18": "2YPmAUYiheX1722vfALeiNChVEYQtY6BW622L1MScRUX3GAJujmxFvXDFPnwkHDHCLmJLzmUChboLUbudg9suHYt",
  "key19": "YifMvpakZHwDPkqabdWjrxu5myCnA4h6ocm2vaG2Dwbbq5p52h3hiME2JHbbxQARrXVixRxRdiPG3oq4EWWwruc",
  "key20": "5axPc8hEzvxWngqpmvgQ6hNQq7vnUwsaAPiDtdqAfHiUG8TnfEUFF6cujCpx6o38P8DV3ARvTtjqoUgcVPix4ZQc",
  "key21": "4D2tgqpizPU1A3HnmkdUW673LTgWx9Sr3U7Qo2APjQmZcy6iyvz58T8kGeLhz946k2wC8cp3i6g2RHhKXzpSMSHi",
  "key22": "3xJUwXWcrmkBVV3xLMnruxVCRhscRrQSU3JM6m8SiBMmNbbpuSn3CfNsWSoGpcL5h7g869kUMJrbKg2uJUENZfaW",
  "key23": "237qQ2t8sBtBbShvmppdcmfUv3Xf2XL9xmHNgXCHHyMHrjCkZevMhbSopHbKg2ntpmSHjb9x1B4ZwkqT5RgLwjRD",
  "key24": "5rexVQYXEUge1tcoS9N7YCJBZvUuJkRRrviv3sXs9UdEA2yyF8eNBuACgP8W6kJ5GM1ZftpecXsE7o9gA6STZDum",
  "key25": "2iuqAToxNJi9iBZas4Ukz5vsCYUrvq37UauzjWpVb9spVe2CG414HzSYEncwesF9psnbpKhrouGHRPAeaYnSbyZv",
  "key26": "5TSVCmH1ZgtCAs8bqgNqo8BMkbGkjMDVu5iUUb9JgcopTHHKc5MEef2zwmSUUHf9PSp2tmWCgrXjXa5DpN5ecmC5",
  "key27": "Ln8UFjv6wP5U6Na3yh8gn3GcnmwXA93xbVSdDue1MtcyQqUwbex53ohMy1PV5p36iV9X5eq8YHPfw1EBRTuasLd",
  "key28": "8Bb768u5F4f4wY8gqPg4nc5ep33vmfE1afjHwz5HuGGtqiywXe8n1B5essV9mxKXPrbcpwmNwD69BhuZPcLRKVG",
  "key29": "MuNBBzUMov9KqEvZctTWGYwoEGTGMvrfWQgsV1D1wK17uatXVK3z8ESarMNvKi56Ta25RhTyDyPqJkr8F3kpoBZ",
  "key30": "4dWGgwpAwNXUsYEJ74fUQfW1qbEF9vnoYzQ5CBqNxxEnTX4gVW44ysJP7xuQT4SR4vDrKB7Sf4DJw3g97KHsbpHe"
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
