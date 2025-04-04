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
    "CvjXRrvMMN6GCdxUqPbYtGL2mcpLjFyB4QxdiPzJ4AtV2NYo59Req6Gqz3XwwWjj9nmjQmvpQc1fCN7hZjYR5k6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56QLsKszxTHd61ub4BPCERiYeh9gHoFiHFRPxy9YvEGPWVyGZ51xgi7trzKGZR2iRithNDzHpB7jE5zU8pWBAsdY",
  "key1": "4Jf1pp24bNw7yoDYKpsYnsMEmdhwgiUXMam4f5MUzMjXzJpyuV2R2goi1YDAhdBNKnmwa9xRG2D495AQXT4jHX4Q",
  "key2": "3E5vRckSssk92HqyEkKTb6ZL3d6hMH1xYwjJquPaJvPyUwtqUehE6TwiUsp3YVxHFVhCu8JyK7koT5CxLgnqRhSH",
  "key3": "2Do8STs1dAvEXaBq7XMB9WBbTb28ZCgLh1ngx3zpmhta9JxdvuYBz9FVhGqRQjrSonJ1p2UYCjCAh6emoPFLHksZ",
  "key4": "2kTogVQLTDXiBS4Z39JJFm2LzfHx2t2YbUG1MeXjDdepmfwMZR1BvGvZMdG5KiWd4KYXJAkvV13iqYgQrWumd2CL",
  "key5": "3mhqvNSaDkZT4rMNpMncpMUET4spqYMewnN5TczSynHAZQdiFJnTxzG1UumQ7qBjR5fsvLswfKJs5vhgLt1BJxmU",
  "key6": "2WCSGfqXyYuYXpeQYc7jsd5x4uByiAR7YFc39d121osHHmpHopG8WdhokM1EzDVAW3mtRQ76igHYom7jF9E8kTZw",
  "key7": "62RA5uW74tNopviYCwC98Ah93r8QJVZpu8TM9Hsd5v9ZwkZFCwfebKrnP4QjK94TYespvXST9Uz5gFUwmGYFu9gn",
  "key8": "2BWuJ7fzbctKhLhNfa8zzfk3U2GWJhJSDBED2db8XjZvqjwXr2MG2yEvxnn9RtpLJvLTvH77XHbFSPr59RSbz9nS",
  "key9": "2ZprkpbL7WwzcCcUCR19CBDAkPu17pijFjsD6dCVDqaMdyiF9DHt65KsUQxq6dNR9d9YLhitkjwgPNc24VQLA66P",
  "key10": "3WGF7eXnTDCTh6EJFsY58gaCQGEp3dRHHDLMY12EXcAkdmSBPGdMy6E8DHU9vtuZUDtqkS5RgFHvuK9Sea59TTKV",
  "key11": "5SzdEpd9cD25JHTVsVKhKBdpxruxJyGcCcmwBPoeCgkZ3Vk52QEMQ2AhdBwKiRovPABtZjNrTF8pt3X9G49YC8pt",
  "key12": "4JEiSpFbCJxDToKMU6zZJusKgw7jXifEwpFTzMMDNsxhEpWqwNNHNhnZ3RkY3zd5QBX6MV7PmGhgy3dUbYPJu131",
  "key13": "56JnWdbyYTRmW2sbCkWPzQFh4pWXxm9yXe3ERduvumnfPdADB1uy5qrpSprXyMLsrwqfQSueAnyrUH7b5dhsvU3R",
  "key14": "3cNHACihp6SrQd4C5DPaubsN3W3oLd358pBe3LUSJR3U2sHSpLpkpDmzdGnLjpsF9wsCE4i5qTa9kijHN3QF5iFB",
  "key15": "2qgzMkuhX1ZJYKPqcX5ejDLQyMFf3mxpD9NpyY8rrZFkE5CfzFpUDn8fYXmY5JAsVxjbiUcAadWfM6jx4U7BFMCz",
  "key16": "2n2TMQcCzFBT6j3bBjHQTzSwYYQjizhuoStjnqhkbEPcYYYHNeQkSbAzjbTUKf9b6AbtL6p2D4EXDNpx4Uay1j6r",
  "key17": "CQgP5dcF8PN6C8BLKZYTujy7kssSFEYZjJiNrHNdNv19kxoVMUMRfHCo7enDJTEMDwwKcDo7t1yEneqDVK5NnN1",
  "key18": "4bj9jhgRdwbi9xSG8pgKzKnLxcr5rwtoDhSm4HQMuHgpU5QbucegKtVzU9Pr4QaGX38M6PpxXK3iDcXvk8NhPFAt",
  "key19": "5yDosbPUhBTnwAka4Wa1xPT5Pdx9tWLMcmf5ZYkurDBVrgrKbmFfLVEx8zfZXryGYVdmBPVCGc7CuD7JWKQ7rqTJ",
  "key20": "3Qjo3tXUTeRUDkixCjNyeM1eb4diHaHyTFVLA2sRWGkzrUazYDjQVDRkX5iUyH7efZP8d68A8HYtaepkbntjFDeY",
  "key21": "58PrCRG2KPzEtER6DJA4KniDNWjMNbe6jdizp4pFTUQws6L2LoEXPiN6Hpz7ZGiTJHBeQqN8mE37dwfkGu8NHhBM",
  "key22": "4oCgQFie6q4P5x5p419ACTZdVXNQQURu38Q9shPsbLLQCjGYWQQnQYQiA6nJ2wXvS9TobtgCAioDQ9rpEKVPjFgw",
  "key23": "63rB9wruGeNUdmswCvut3kE2WMimQ2kCvgUJXJqqHbCE2n6mSyE4rTJTqNogJnDWYyXjFo9bkcvEaNnkeCyVtey9",
  "key24": "4GUc4Fk3z3VKe7Kp7vqp5j3WGZPaGYBPbgmGia8ctMjJvHrPqqitjXdUG7HK9Tt2pqsWgvcXMzhLF6sU7fJuYbKB",
  "key25": "GTFxVKnoU8rokfwwps2WBWH2Y6BNX2rToMw5HfDjpf1cRmtiMsm8NXZuV5ZUp77ua383HmUiCSWD9iZEBSZrPVf",
  "key26": "3nqrnsdtBAhZ6TcVgpT8j25nDCNSNEy6PeodXycn45k7wFtFL8kCnm261SB4Vb3uNVM9AgWVpKsZHKHc6Z8kinoM",
  "key27": "55aXhQNRe7DKyugCv7frLdPpQBT7SF17HCAifhyguekiDwkn9EredES9qwhSavCrQkfkY6gnUYZw3oaDwTL4ngbR",
  "key28": "5cuPHXhCNMWvCUvud6Acsn2uxXXBPJbNJThnMmGQDyZx9DpmXw7sgyQf1nfBcWjroCV1FMFa9YZqmzsvRFujwzGV",
  "key29": "4DmbiJJTnVXqVoPgh1vKuFvnaZBdcUxVizEm64uJJYDPrLtkuu1VccscxEkqvVBAx36cCVSNfTWJ1jBCx1CH7HCB",
  "key30": "5txfoxkQMm2gyiqGS8kDkF84UC9RT4qVKPJp3PN6j2nZYWJZm3FczS2nLzMj4N8hxe2qDLd3QPah44X7TB9t2Vpj",
  "key31": "33KCu5Su5411KSDyXvLV74AUZaotjDGtuWVWHPqE7RC1UVM7He9pmteiKajFNnGC8dEouYXtGPXGfMUxy4XLwT52"
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
