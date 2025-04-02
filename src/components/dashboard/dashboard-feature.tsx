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
    "4VjdKFpfaAkmGb9kmXncBYCaG2kWa8NpLtpg9cF7x7Pz6EwcMcyebKNkibfidRfowDCSGyGgeZRxsJ2pEv6gMZTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bSgrohR5AxANjvvcGpdbBSdWN9pE7Lobs3hvshtAyy1T3kGhyYGBXvz6viUMW3NVhSLYWwpfBnZDzyXk2BYdPt2",
  "key1": "m8TVnfKmMjtBcCvJUF4wx7P5knKBhvQWUuNC1TWCcDJKwwfGxwzzrws2MnUuAFHGRRvkKEsK5vMz6wHzhuncvsH",
  "key2": "5aDenBqejqYJ8WBfdQz24769Nr1QNmr6oKHvfxJJVq7iN7BgkCoD9ToDz3Ar9emdKE6ouuPWBbqxStqzNo9u7EU1",
  "key3": "nmTG6rxPLVK92Rz9fdhJ49HnEAb3cdCoq7WJZDdwt5YYbfc3vLsQ7tvKkXwuTLow8uu8kxyT8ZDnW8gbdB8wsmm",
  "key4": "56zYXLKxER4s3M84cNEGWMCa7T4HHQZDzDmfTpyx3zjxhafpYocGTLuvs6MkjnNLD7HXVsfZ66HsYxCn9yefkWFW",
  "key5": "rwkKaE7mhQeYmGDsxDyRcJZcdFUdE5kpjGHa7jc7zyTHYhF4jtY9ikGaotoX3FwzeV6ETf37gyDRjPBzauH5YEc",
  "key6": "3LovK1F6JB9j9MTorYuhSvRsB2k7JCwoPfNmMVHhrDUzqy8YT4CeFVdnFm2XwyRKFkivLZEy5VvBD3Sk2MSUQhS6",
  "key7": "zzZDch4oN3WN4qLR87gxfrHnWDJ1t2Aet11nVhiAZu1U6Z4skRtnpwXcwwRcir5r23dbzWbvTQZzmKDAQ7LSs3B",
  "key8": "3X8nUSMvS2dRmqfiwbUZkjwGtwhVqngxTFLeL82SarcV3bftj9RoAYf6xQiLoCTsnrdsFQGW62jzYjx46n92BGdM",
  "key9": "5sEjqZ1zyWU3PCV2mdeWGWRsk758tHJxRgBdwVueofQSUjuYLTSA9WeaFadpMuepB59sNQgKab7ACxJGUjXS5KpH",
  "key10": "4FVPbv15NYTGDZiTbgzwTUsKRcuUuK2T18roJC6SQGH3SSvEBKk7xf4PuipasiifU7N3PJ2K6NouRRDWn6QTsJwZ",
  "key11": "WiDN8LGsg6ecxnKcv3eU4p4CMYerAMqDVH5Mdf7Ujh8zL5zfozXYdK4k2onri783ZnVcupXBHyMCa5PWSsXkagP",
  "key12": "hnxVdeG9zrQsZQ7YbPJMVn9kvooUT5uYCJHMZLiXSRk7RZQtdRdMsBeSLbjQShPtHHHb5sQNKPbxeouBZUmB11N",
  "key13": "jGdukRgfuc5KYJQqkSzTGMFq7XXoMWG7ixUMpYsbLQvKCu9bWYXoDiFPurgzBbXSz99qKw11oqgxp6FSNbif9R6",
  "key14": "4rBQ9p4FJk1Z28XBeP3UqKAer2X9Xzn1oTgbV5HwLFHES3uSL5YNTdTFfS5qdGLThYd5JhvBfjoFnCcdiuLhqU8g",
  "key15": "4VkS1Qh2c97ZDkA4YozMjQ9w2rAc3e6HvG3v91cdM7YKTki8GS6Dqi7NBzgXN7MKytqTg8GtjjgYoXydXw7neq37",
  "key16": "3JJJ29bSvdsNMnmwjQyGf4EKrg6gHs8pFhDjV2JGTqHrZXGTsANUWM7y3obHsUhQ5Jqf27CPvTjut7aKJZdEfXFu",
  "key17": "pNfzbgDfuxCHjWGVAoXgKtcsSJ9KFHKDjXvtjVXLWWFpSR7H3AxHn6VRXNzQuLRimJfmHJpvwLMvTHEDWR6B6j3",
  "key18": "56oSngc8n1S1wR7TdgCkJxdR2NCt8s7hq7ccnAcu8Dp2P7aCNcirKB3to6okXSQCLsjYFnvJZKq5s3u4ZobVLTff",
  "key19": "5ybpQXuAFjhYWUEPxNFoK5gCgK9vRHV94gGhg8Ls2nKaUWDjQqehTQPLWmHrifmYw9bdH9gMkGwPkpWcVs3vLsFD",
  "key20": "5FuRVu8cEqa61JZxB5MMiXcPWQYorvTPVZhmohm71vZdT5fLKd7fBnr1ArLquBR8miVHHM6VMgtSxk3muX26qjdn",
  "key21": "4XoBZv698HotsQzZigkoojwi2TBx7SYSTtMyifHBhvxfz6A3oEBUc62y2W6H1yMpazEnSMmUeH1NwK1cXT8WdPFP",
  "key22": "2EvhFL5aVXJzrctKegp9KHyZugZuCLpQhovCGSidkQqWoAwTr5VNLfJf6VSgKaK8y9xNqnkWyPJsDDtmhiApGTzP",
  "key23": "4PNCps8qSVYfwfn7sHwPap7EET6CUEBvoRukzg3FAjVAh1u1AGtDkapT4QY6iH5XuXeVAUX4Q9BNLPu7FfSrbnkc",
  "key24": "3V3McgeCYs85qwQH39zYX7XuPVn8HB5yLWJtDkKnLJbjYshLJn1MR4RZQfgsXSRcwH15q6j2E8hjs7UeMHD7KVCW",
  "key25": "5PRmTjewSJRKWnhXJBdC3VqRXDzDD9HTUWGAXuSftfwXHaKe1HZe7BKJHDkffEWsn5VFnoeCPzNqpuy26dKKMNYe",
  "key26": "2MUaLiguTCD2Kzzv37cFpdNGgQsn5xA7ZpSmo1EHUKtW42wMQfnm47V1wXVZqbqJ2Eei6wyyjw7ce23N7QxEsWwQ",
  "key27": "3zZh9t4NfYcRmX22QuxQRML2wr4T7TGymtspiz9bRsjSQkpW39LkuL2h9bXhQnYChxdxdXJjFVP9PZnDxJz8aPHS",
  "key28": "52RRnYd7goYpFRyEjoaTsq5FqcU2r9ps9kcyrVrsDsZkzgqNdSyUcVrmjmFxZY6bQvTML6FDXynv5QgdgdeCwcea"
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
