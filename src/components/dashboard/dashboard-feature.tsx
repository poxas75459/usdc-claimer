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
    "3YYi7uHy5jdkL6KvSEQdLsqV9Z8zqNGsVWfUFwhVHWcvVmBuPeg3yW9r1azawbRqXJTMoeQc7CwJtibcaR6M3dag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SwfYz3i7fik1noewfkwL8ubF3iujyTw9JLkGQwCBcd823xXLvTpx597NTyeZEFtAjkfBCJuiKC6krqjU6jXDQVq",
  "key1": "4czSCsuwtTBdjpkp55HC6bEqYhymom657naL4dpnu41ziYRpjRQj1JZYs7uqcDw6CdfJ6c4wgQoBBbo2vdM65X4t",
  "key2": "2dHECWBTTiYqkrr56gmKD6Eb1vYTiANHefj9a6mSzQEaPTSsgRJTzJFgEJgNHNYqcU9asvuJbjGHchQkTasrjNpM",
  "key3": "PUsLCxXvGBJN3t3RN4SdWqDdEqMnLyifsk1XRbS7cPSXHD3Jnod2TmLt4QHgXVSUf33aQ1eHEcH4y9XykBgaMUn",
  "key4": "5GfimXg6qsSUZWYk5wBm4qMFVeTvQjHtEHheCrtNrZpkRsNVeH3j5tVYn43GzG8X6KXa8zkeehZ4WHRZo1vMAuEf",
  "key5": "53GXQpqmHQApfQdr3Rjey55erPKDvTV7zWBzYDsnpe5bpbxeKnbZKgm4nkqjYow86oPYfhwcHk8EGMPMdcq3aJj5",
  "key6": "5uBLgF9EfbjvEvzAv8JkponeTxVvFqFcbMmFu4jjJN96w4FikjKPiFZbkn3ZWYF1mthWcw6Vojm71icgc19V1cv6",
  "key7": "2AcVjZdG21PXjSbjpLoztaunaieo47KLcNwsbHkGPhLCmpV4seYHudRJLjwThzVwJbribXBVAVoj5RCD4xr78wJ2",
  "key8": "2YL5KCrfwDg72N1Q3UGhzaTifSerNhA3k3oUPp8Td33GJA9tCkjgvKu7EBbLrRub7PjKzYfKMoen69WGNzqiLtx1",
  "key9": "4qQMKPTaUkKp8bE3NU5LCfeTNf53nJRSHB6THeEftNhTi2CuACPN7zSQe1up6Vdhiry7ix7NwMzVetXMSr9YsEvY",
  "key10": "3ZDPrrgSKFJJpcz1MwBbLBvQYgrvcGT9EFfXCNiZHjvPbmCF3iKg1QDdPNZZoxsBuhmzH8CYQKNtY4RgW1v6KKYP",
  "key11": "5YuVCaxLagovMpqVujemi34j3TJdtnzhTAVNyrc2XfGZ6iLAjMSwKVKJcUva5NTc35cLgoaYhrMtTMhtd9QZzTnD",
  "key12": "3Wm9X61wSwLyPhG63J8KDAuCbXALYwdvPsCqjQFUGYUyJngBjA1JvzLJY7uhxJ3gEd4tfmxV52qVosAwVknv1oG6",
  "key13": "3N74ypHvWwjoeGgGC4Jvweky5AvcD3B8DkzvbQuVHtW9VSwKGXuopym9NagQstdFc1Ryzgajf3aRm7M74u3ASwT3",
  "key14": "2V9UTvXdgUjexftxKaxfmwVgKWFK1toX24719nzpfCSG5JP5aBjCdx88EgonnYHsxCuiye5fu9Mx9Y2uEMNH52uF",
  "key15": "27eNRit87M5AJ6gpzAzpDAFyix6FzvHeKYHaR5J9eaZzWeCYq48qMadxCajCin17sp2ZkRRUVaNzrrPcwaz7uZsj",
  "key16": "4z4xvaBrvAKedkg5NdY9zvcSzj8TsqJXcakBkX3g6KuxvoMnemFKbo8auejcUYMKDPaAcVvscGuEJWMwgVqiq6S8",
  "key17": "3QsNXZWo8jjPb7dNfUFT5rmJ3PMV3ueTQLZDUd5YAbBRD43GAgWRo9Z6WFT7mv18ce5qZAns3dLacVApwdVVPPeU",
  "key18": "8mnk6UW1QaCAYb4NBWRXXtGsbVUD45SEPDzNrZgz8E3LF7TppWRjjdQEcBLd5EnhCxKFBAWbpC7uyThAnRbGf8u",
  "key19": "3UKMzDTgQ3hvwL4oJvwcqwx951KVQptz2H5pG5VisPBAGM2MtseQFxWua1S5USqn7yV9rRMBXcj1FKPTh1yWCqEx",
  "key20": "2ekV9W9GiV8d72QK65eBTgoczsQXHUYMWdjiG1cHPbXqPnB7NTAkPXGZ4ok2fq7pr7oNyiMfZd4BvjmjsUjxC2VX",
  "key21": "3aRTjp9S2pGHfXUXHLtMJULTJHBCqpNRmd8QLS5ADYYqXV6AZ8Su5A6ZTnuQjEKTi45MeAKuCrtFPVdkUGtct8uB",
  "key22": "3H9fYzHE38shJzyYn4pvVyxVH8hvknqFwZxmjCPpaTodrDPL6Ke19FGSv2GxyFA7vRVeMH4hrWSRebVVRYwhEVuo",
  "key23": "4rRmS1rxpvXdgwCKLt8bKKf8qa59AV9iF1ZDMupxWRdBuYDTKePvJuw8qXG6GXFvVBGqf17ygZARcy5PBiyJWoLk",
  "key24": "5QK3oqxguDq7sihespBSYB5JjGyiF48obkfWqfD9MDw1p8XgSyjhXyFXoyxbh3ivno816H6pTRHmWqJNYqQchVGG",
  "key25": "2evRyxcKMiUB8picybz3W67FHphEaSLX4UYBKZLJktUzfq6MbUwn5PygjE7ZL7WYjHKnYz8cdTX6J4GBPjUcDxuz",
  "key26": "5r2MghnauM3Rq3tuCeyNVG4hfSZX7WZqtHtiBEWJDtVFne3fcdh7Gdu8R4RNHXZPGqEzMW81t7272zhPjJxexfs1",
  "key27": "wZMjSUohjD5EEAvbdTqNFa14s1gvuiyrik1ZpRSCjXqshmDRE7ofBPDztb4M6SRo26W5nWvc1c1jaZW97X2cJXF",
  "key28": "HuqdZSVwsu4NApYqrki5xtYKvadsaLAn8w8moKzD3sAZnef5U7uuTv4ieMzhGpf8ypeaoRLjQWJ6B5CeVr1ZZ7X",
  "key29": "2sS6LXDvG36MwmsDq7kYm3py6PTGdCdJ7X5J3k95hJWSnnBwV2MmZ69mPUAE35jnh6S1kfL5U1v3RVryd2TYFPG1",
  "key30": "49XaE6DMaqL1GdwU7Av9tyy6NDvT8TuXkpG4hLVBW5s1dxFrXJAsgcCyJdr5tc2htyGmBHhNCKdpw131xc7CV4k9",
  "key31": "5Gth9J6i3RrxccWVfqT51tiyH28SzCVQMKPa3X137565bSe2WzDtqjXSTZDpyqctFSwDFx3ARfsdcZkdLu2Wae4T",
  "key32": "3KQHe7VPHnpd5SK3pBRpcGnHpzH17FS2ZoQ6qwCnDV5gfk2x9XaV88cLPmjwQGoVbnqmZhVKLTV8bm5mtQ26efo"
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
