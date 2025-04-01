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
    "MBSVLSaBA1oGf52FhJN6w9Ew4DJqzYXDBpBS98j2H8qwvEnX6GAojBZFbqQsQt6yCJ2XuHP637D2XSbBCCTENbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28mY4v6qqpr6u1rpBS6jrDMHo8QwaMLSfQuS4Emp7hr1irWgTZ1e5cqwQXRFyt3xHux4XnS4P1ahsi5pds6QgAEd",
  "key1": "2EyUiJJWvTxJEvTrRhRFvpWGodcr8eae7aEZew1RxkH2gVBMuJDL6C5xTh1J8fvJ1TRDxSQ7SSp9S26HjJLoxoBt",
  "key2": "5tKAkXsPtN2gwFindqUP79SYi4rTtRC8GBSjBc4Xu7f1Wu4jWzwNE6f6LMCtMrkCCgv8PKfrbTFmPySr4W4R3k9A",
  "key3": "5VocNjCf4wQfxYPfGtSsE1wvjfDFbnnqDi12oHJuRWS65XSUHScjs2jNmsw7H97zYnzmWCjGEf5CCNo1K4Z1G8yX",
  "key4": "FY4psfM5TALRQqZKQwocoJ7KBZxDEcjcQ6jxRy7xYLqaG6DThEcXHmBCkMp2AWSoMczDmx57Gh5RgekVd6vW3Hd",
  "key5": "5KDCQHFEsR3ygRBZfE32632H7SUPuhWBAwJ95eXz6rZ5LXp1DibMT48oPBwKx1Yz7quxXgFWj6XQ1jGpoWr2AsRn",
  "key6": "2r4GzjRfA445tiVKP8DCPhzYKx5XbXmG2GFRtZ1usw6wKvdMnka9X7wvkrTZCAgjuU2GdzBPNMyAWniDFaWvHkFv",
  "key7": "FRW1NJ99kt4ksyoC1NkxVzsPzbMBdwXCdK78wCxWaqJvfzWAdvFKRzwjVRQvYHajdp1oZudmraYrLKSvKoNVoPw",
  "key8": "3qVU1QEdpE9378vCCZMnmjhayw1SZYgijNfeHPKkGLou5Vqv8XsAHJQR6yMsP1AnL3gR4kXfZPPc3stdGAQPjUHx",
  "key9": "4nET9FFj5iWbcVsbuo9Z5LByjjrFZLE8nTbKZg3nLe8NvvYMi5Xf8oZ4CnuGM6iZQg1yNzEmqrr8EJ2i4bWk5tQd",
  "key10": "3ovyjaWy7jPsdhLPGyQ3A1ny27dR1oX8ZrsR76pFPSiBioqeAcesgYaEBbqfQUXuspRrTpLYbxX1je4Fu26pNxn9",
  "key11": "5tue2VF25mB6m37BuJXMfcdytxWbgNj3ZruJi7dv371BuZvMXNWb27xUCFJ1KA5a43JBqqrohgbkSvzbxDLmUmfu",
  "key12": "42HQNCDTnANh6wg9Xuoj1L9fxVM4kai2qgjLFNE1A6KNhUGxUsrtA9iM4bUzqdsVi8SctHzd9AM1kme23XByQuBd",
  "key13": "eDVe7Bv1QVAKh5pB5sbnuzCXjgJj9EwXFLWyDB3A2whKJ5xR7W7ZTY9UjqDLgfr2HSC4LAJDPfmt8CnKeDitRmS",
  "key14": "5uyDJWkU7it4iYhadcNxKpDqpz6CznxxNSAGifKa3qrNEXjBKDbyz3s76pDHQZPRyM9g1X7JBufcdenTbX9bHqxQ",
  "key15": "5TRwmezq2ZqmBVKmg6HCpsEezgfeT5Veu8zw2nDgngGVR1prRXSSop5aVPENVh5cCEBUtumTvaovPzQoWFPEJu8n",
  "key16": "3EthfPoNB3xaZ2GZoBgrcthywMzNiyMHB1w8EDLKLBvs8hcB5NcUvQZCBjknayoZLpuU9jkVdVRVGhLnS933tX4b",
  "key17": "5EUaeJFYE6sGPVfvDhHc2NrkhSq2G2wPSMZXiidj4AjaVXkm5e4SS31Zv5xhByWtBTvaJicjrQC9iTPvVn3N8nEr",
  "key18": "3fbRgogwVez1Fja7m7ZYih1W3j3Gds38e9jJwNCs7wya5HnLNS82PpZ88XN2xmmLkQQtbUaWpRVNV17Sw4RujhDr",
  "key19": "tySHxpjuUjgtfaxjyqX8i41DMYpgCJBGnr7MFHevjzsygURApQdQKotctadUwgWX3iTsCzNojpUkenC9TPCVNCf",
  "key20": "5akjHWhoeAbVRrtQJ6nckv8E79FPZmjyjXTD1Aq3xhTV1n6NhzFzgvRFCLebUwuAa1aqprY7xDeRwvtZu8ZxxgPJ",
  "key21": "2GnCi2iYT6SRKXpfpGi32nuzq6eUu6ENBByymdhSBvJobRcB6SQYTBu9tfwFhzBoKWFR7cfV8tm7E5BuCU6j2R6E",
  "key22": "5kFRGM9Fp5A91UdD8HsySX3AYKRczeNe6Ufv4kYdphs6k3mWvzBue3jY5eiSBQJknETcJPRuxCwgdEvfbJRLj4tu",
  "key23": "MYYdU2kv1fk56SvGP7MCAX3sbMAajypU8yJNtfUrkywRh3qfWug9B2jthTePqw2vwdSbdeoYvFa1hv6JZ3KUPXM",
  "key24": "5NK4BgRJqjmjebc5kSb1vYUFM3Vxn7LT9wdqfY34d5iGyFB5q5RE3hAQyp8gbvt5XZh787wQJtWHXLvAQBbXD1kG",
  "key25": "2BTiBnTjpPKvs4KSmQP6kNVaz7YUgt8xqf8YKEt8ip9DtGvjAFndi2UEcpEd2Lu4Yo9MGz7YUn2s9qgH6k3LyLby",
  "key26": "3harus9fi65cWe1igZ3pneFZcUKgzhKe5dpst5mXVkmCtknRCjvxtEfwNj7MxZKKX4BtM26Px9dpoCDkCoSLX8Ni",
  "key27": "5fdmrgycidSFarstwof7hC827w6d8QdpfyV9wqCFhWh7g9BNN9tpwgogbguHX1fPdiT5kgGcZ1XeVD5fHFAFvNsu"
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
