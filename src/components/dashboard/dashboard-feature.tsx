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
    "4h9ZrZXd5gZLgG3FQihFntaU4giRFTA1QBdgbpPz2oGwRCq8aK16q2mfqPTiru4vgazJ6vcEcJnfDG2tkAU4Woez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ZQUE8qajF6RmXcrEpqAYusXZNbkjtqWCf3TqMuD22FudL7XuysbxW7QNb9SzKsBgTseQ36ntH2fKnsKw4aRn2N",
  "key1": "4eSH1H5H4i7xgT9EvriUd8qLDux4SiCUisj6AHMVhunpP16jyNF3mzvLW5r4vsEdtiyr1BZSMtR2Y5qSyJKvLjio",
  "key2": "5feCLdjoVhXAEyFX4AG4ygnfb6H9G2uzs4BEHjD35zMWLtSas8vWeY2e1uhEcG53JjMYgoFUnaqXDSqzNrdA1HGH",
  "key3": "5nupEEi1AEYp7kuzqxxZW4pvA5rd1ZM3uq8TpXv9rySgdtK1PXGpfJA8NceBhiyeYMV7gCs6SAtMpvJnCcrTMTcH",
  "key4": "zSAuyVdu5nxiNMU5F8FWU3Pq3983v2o4tzRWBEhA3RdXoKLdjNW9cQdojTXz5Cbq7Qh3cWz48RKcqZKTZ2BYNvJ",
  "key5": "2GEoQKmRrRfEq4XjRvgzHCQzjieELgo4eeoAMEyW3WwQnXCgBV5gT1FhERmNkGmWEC39aGmAGJVKQt9P1zMu49eA",
  "key6": "fC5UhGX41UKTN56d2UBf37GR7afKM1WAtJc4pL2i9b5VroTNwnJEhHwKksUF4DZZ5aMrfiqQxLRHBXc5zD8SYjB",
  "key7": "64Ywk4NtDpmLMR2VQw55uwe2NBZsXSQdVmLKvj8qu88TmFrSfeYhwGyvgXWtgm4d5YZ6N24NgVH4fd1Wt7FZBNhL",
  "key8": "21VZdNAQPEiUUy983mZcP48tJ1MJ3VcBMbEFsgsEg63u1TnoEdARfKnGMaFoDfBQMjBStZpUSWdhY3wiJiy1RSxX",
  "key9": "214PNiAfSwjUjaiSvBBp8CY7WbFragvpXRr4pjFhZT7kxNkNT4ZLZD4dWaYpfBu1H1FYTfXY4uuphr7RGYidmQMT",
  "key10": "4mJAEfCJMTqq12BCCtC4xNtxsyVSi95DuHmtk1BaVfVUpwG9hnAeu6EBoXK2zbQcQoCdZ3P6WkS14c7CecjxYeE4",
  "key11": "31aTHzp81Y5asbL5QZNHmRMgKy7tb2bXA9Fis9mHxQW6f3tYUdevxLJkqumPPLwGCw1kjjWZhje7cnqA3PasSj1E",
  "key12": "32jNG7kWha2tg9WynSyadB3m47wQFSwQ5enQxkAwWeTKweKooqz8RgctVcJKGmmvtWnDAHjJHNQ8w9NHg3ZThUwN",
  "key13": "5EDXSkYp6EQQo4e76X4DKEpRTZuBxzKvhjEYFLnen83X79m1Hd5pLUyWg96nuxcYDJ4t4nKWuwEeCUdUwMkRWtAJ",
  "key14": "5scmBaGjSErLjzSpDadMCCfr3bQCLE34mK6ZqNN8vLKcfRhe2RKECKGwfMzQaoHAwsWTKGFV8NoZqgbZKAcXsZei",
  "key15": "2VU5gC7jAJXAsGVxBwtz4qjmCj18bN4FYsqnkFvjhfNsHH3W6E6kqogtxaTWwiEZFLQVvHqAEuJAFEVaXzC1KM95",
  "key16": "395J1MJ4NgV4UHSZLjAqd6K9Ea6kMCjR9UYjUpkpZqMg5c1yYMyGKEPBi3soyD4QxfvrMtMoU2hAdiYygeXbbHCN",
  "key17": "4yWL6P5uo541kvst3ADmh25fZpbcePKcUWLMAKEDTYt8h26Wkbtvb5N6sYSrdRw9rLH9LJ9RENLkWPQpja2B8ebv",
  "key18": "3wZSkmGWzfnqZhhgmueTWjCCYLTJA7BWRvwSmTCpRXcoBsipZBHesZVyh262w4i9fXML1NM6DNCPcUY3BtJ2SYz1",
  "key19": "4KKCUApPG5bKZ2VeR9kTc2sWZvwCJU6kgkBkmbuV2TDNru1Fw9amNNSekpk9iyECBkiqCyTmT7wECz4GZYpQ1AV7",
  "key20": "37X6bEpJEhcYdFSin8c3GShXe4v2piYFKVqJiRijnvRqMMHbtVS4iGMZHex26TBJbACikhXgA9JaVBnxZe2wRy1Y",
  "key21": "eLdc7oVLrxgS4dMDrffGCyBc1o2AzPEyATz4bWrfvpae6EzZ68Twy3tZdGybNFahUnmAWyUKfrTJjRAoRaQT55N",
  "key22": "3hAWroD9kn2f2gEHeRcxFArRbEcnDkF1w1WPNvNtu5AKooCKtv8ZB5HxN6De64wMYQFuRr4oHsVB8koLaZFSNL4Y",
  "key23": "21RNVnnkQ2KDgHZL95TfhxcbxX9tAapjVJt8NXx529XXLMo6BB7T8hgmGm2F6kofraHAUaodLShmik3v2fnxXhzQ",
  "key24": "3HMos2ASUCgB2M7s8Ycv2wNt2VkrDwmbNr2V7kTJgymqEoiT2NzQmg4FytSf6T8qJKWkgwPbGhDfqoneecsWwx5m",
  "key25": "2EDHvhBqhMN4p21oQtQGDTYyaxBEKcrWN512jEwEnTr6zLXNk2kRt5TbjnZVC2Eh1CRxFphUe33x2WshCM2GiXyZ",
  "key26": "3h1ESvmizLiHc4dtwXh1QajB1yUi1YYuMUBwGi9iuD3nTqokcd8aZ39qH3wTpgopobdEX2jMCn8bnCPLfmisWy56",
  "key27": "ziWUxTWpuNgkJW3FHVm2Qw1psshvZDHVz23gQymsw3cGMhH4MyHLic67YFgttdYJX4DgweR8fNavhdCnpyBb7QL",
  "key28": "4oTB52byQvYPkxPLSzQzUj1BYETrTTPN2WPz9agTanTV9SxV52sJFq6axZ3YunoRqHLfvU7JNS3TgnATwMM5cgRM",
  "key29": "NGCkYuJTekxs2P73hXV1477aTpQV97yAaRKjLahGNjmBvoqCgPZmBhW5fYwQs3WgCioNToNZXAW2o7M5ua6kcKC",
  "key30": "4j76k9UU8oJE8XnYNEHzrFx8ZEuUMVr5RwvADoP658FEHVLPtMEhTkG1Wk47Bh2RDzY6ACewAvth4Fq97nud9Qz8",
  "key31": "3aeWS14cCZp5FkFjVk2mLWw8g7vgstN2hF5K9Ki869tAHqJha5DocxZ1CxZp1YP9FYhAdywQZk764Pmm8TQiPrTg"
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
