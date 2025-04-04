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
    "HmNKZQfzLyVEgjbbKarqjKBG2t4HdSuYXhWhKXFz2ca63rWhjybktR2xmbPdZSeuuw9Qez1ELHaGz2ftdEiuzbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "651T6yfGnmnvM7WyfJ4uG21sJMPvzgUKHZhU7HcthiP54VCn4wLkrd38uNAhg5yJLsJSQ3HfYULaGVWCeQ4wo6yD",
  "key1": "64P5WaJyNRa2FJXq4o2kjLcfrqnRqiUA2mbvz4W1hw5dnvuENzE3Jehya44bhcUT228qoxzMSFGWC5mApSSaeSCt",
  "key2": "4D5q1Fc6jpsdY3oS2Mcm4eu5CkhJLHKNHS5Q5h8LDodfQDe4XKsuawN4eNK46vZWhQUJmhkSe2ebXDGEhsB3CiGJ",
  "key3": "3XQaApFM2zWzwYURHZcvG3sfVivD4cTsEuFzeBCjuRgPXWqKtta1Ex2sXn688DTa2xKUjyv6JNrT3WxhZr63nFV7",
  "key4": "2PibsaHWEaygN8HGsSq4jh7ShjeJcTdXFnBqFBHtXdCJfZ5DFieEkXLDPmJ6ooBxc8Gt57JwJGv1Dvpru4deaAhz",
  "key5": "4mUqrV64AkQZCkm5bbFbVTzdLZJbqyNGKCyzi159YrHnLAT6rKnjyCAFfEteczCQDS16eHvmcTZUGqw81mu7r88H",
  "key6": "4Va7szoyvzAbKMYvgjb1AdqYKGBMHRcRWywhTD8KPK1L1B2pBXtUJhcAfpxSiPZ3qkzfd1P9j2E9L1XZy5i7Sokf",
  "key7": "3JwHxKLvxNFYSBRiKavxwUmUShGhWSTbAitvEV3fWApj6QG4UhkgPDyCZkHLkRLys84YC7ULMncGSK4csGbYtkLj",
  "key8": "4wVcxKDJBjKnjJ9PkYZKitL88S3msz9sFLkDAAngujizTvRmXWZNFb99xknjZrAPCM3P2BuxSXpQFqG3VYa23aLw",
  "key9": "N6RiW6JWNuaW2u1ya3EQNYZLrRHT94PTJhCVbq2eHP9QnbRAqvAXVpY2uyVscd1Yi1pN9Wnb1BcLTBN2osS79Xm",
  "key10": "4c5TDd65A9oJKciRExx9DH8qePC5iy4WoBSUsWn6j2MQmmxdRT3o6K7W3E2idWDCi7uXUu2hkBLJqy99Qm9h8E4b",
  "key11": "6qQezxPoZNrWbSY7fSMwezdfxYe2DzsA7MYfQG15xgtGnXfnU6GVosR8dv3t7JpLYuWSsApMeBDH9ad3kDf48xq",
  "key12": "65hm6zurc3vBbkaqfShWSJ4hxGFacRdCGYkZmBZS6LhMgQPHQEwF8WM6NC4H5LyL8NEUYv3NTLMPFd9z4pa5xo6Y",
  "key13": "18kP4eBV2wV8gy6uGNJ5knLBQ4bUi5SSouSGm7JphZ4AzJh78EgQ2vZ3eGYG8RBXhAo41SmULvkMb4Nffy6gxDj",
  "key14": "37yHZEVvGKYQRn7zXqXSuV8waeF2z8W6bEfK9GL44VEPmPanRvPFBUMpHPE5Ann9p42Wnf43vHmuaQfBn1QZGaG4",
  "key15": "2QU7PJ38zLxtFrNNgkVbcRMmV1wAHtzVByb2RXxhB8cjLdKPFdUzbVRqAgTgxv7BSPmMwoa715kW9uuK6TfEBp4N",
  "key16": "4RKNnYLiL3BVeU1CAoYKmyekzuUPR7xXSHLiq3jcBRCNvAcYKZQaTGZoYSUfMPKU1RZ2TEBAdi8iZM3zY2g3paj",
  "key17": "hqGoqNxgGZekpWAJKiRbDZMG4WHqerTjjTGewdZKer1C4tHfUDhatCTKZswakoA2487pqeHCtvcpGefXsfxrqKY",
  "key18": "5Ng1VrefbfGp4k1dQLV7Dg21B3kfUGxoSZvr8qnK8YD7VbFdYP7ifLo4wMV5ZUJSdzYWkkrR9FphN68GfWWRkcdZ",
  "key19": "4Q1FWxiMAQZvbsK8HndFbgNpngG6juJofk66LRxdYdifi6tvNPXhurooUtspe4wgpPU1KiJjX7vuHoHE4bCcj7g1",
  "key20": "DAqyR8toJpaX9twDxYCx2m1hKkktbryyiSNQUdwMuR5fVJCrK6Udmmz5Ymiz3gapgRCS6DeMW5qT3ACfGddXegJ",
  "key21": "31adhR55zkMduYDBweCgRa8ig87vd5uERkG99cCdDVBDekTngcmcGatfTBuagPnYTgpXPbRyenvsX6W54ZsYjn8f",
  "key22": "3TDS3TYr5YEQ8Uy8xGhHbHWzSkpTHmGGJnh5Kki97UWYkZVgQ2TXeUgF9DaPdma4pt9eHPD4YehAF7tvSM2PGwWL",
  "key23": "4r3ggmQBXUn64KHSPMQyfajxk3AaANWiWE5rr83h33jbyoJy5rXEHQXpgqqN2Z7WSez5wJZPLc1h14pZNzUCDknM",
  "key24": "2vPrpVuiMs8YeCoZUMnrvDvn9Fhh6W4rKHRS5L7QnGF9SMEig1qfKVc2Czmt8KuxcE7FXiUmhuk5wZr7v6vpkBdv",
  "key25": "3L2xbQUu4y1VZ5mip2DQJi2Sx1nv8tZGLZk1xaAAyLUE1NhLY9DpJSwRaZsofAVNDqxYjiZ7t9NZRAAFRKj4bEzQ",
  "key26": "2cuSqgcuwuxrtsZtMuBwemitFAWbU4hj6pnH7EFxxvBhWJJSasJoBBnYJtwGYh9YTn1Ga6Gvo1XnqBeR6SzYknje",
  "key27": "2Vq3J8XZzunmwHEnrV1i8m1Djo35DcXZvUpJ2LyBjHFwfxdDczovG7XaC7S4dehWbPZ9Tzj3PGyDGUHQPsbS3FK2",
  "key28": "3RUtEBG76pA5ixJQjXHrnfAT7T1at1hS2CD2cjfqRWGdm9A6NH6KK7LmLrKtYYMsbiQRxdE1htMTN81A3UAZqscq",
  "key29": "3pD5QPtMvpiNPSmdqSquMCzYWCi7j9W6bkBBwu7ufUdrdDt4eaVFnbmHSUrk9hZB3XcGHP687FVwcGsJ3reFaBy6",
  "key30": "3DjvxXYQ9FhVTt5vrz2NtPRS64PnZ9VJDBHk9XddvCdo9d4t5A1c1snMMXWxA18zrdh9d3oYxBpidPXqEMcvRwCx",
  "key31": "2t69fCwZfyhoQxsPTkrgyp2eKsz78iDLUYH4Hme7fNYBVT8C6yY8RWWkK9tRBMzgM9Ffx2LBKzhgoXh1ohwaur4S",
  "key32": "2Lg3qseEzS212nUGhc4vkHnAJ5L1cn91FEpEaS8DYuEjyrLX152zMAE7jBQEow7DcKH4B9Xv5eu7DwAjDmGHxwag",
  "key33": "5wGXU9eiLHrRWc6RzERbC3WuRg8vRPsXu4PQ4vXEm5YcppzYvp1WrHq2D7EZxuzAuRpHjivvptRuHeDsfgaRbWR5",
  "key34": "53VNtER5Ymy4mFPoWnfmpbzB3fLwKVBuBuNKhFbnzqkL1DKoP6hEHHXZexaBsJ6EbXd7mJhHuCubgy8MEiWsBeQ5",
  "key35": "5Pt7DJN6fn2iAPahXryacuDoPE2SHosUTf6uWcHPLkbWEwXk9TmhwGXMSjz7F7M5ki4ZxBcNBbVfF974yqicHF5d",
  "key36": "2mau2HSZjML3puboCq5CUnb5TPWLYTPToBVPRRSaqUCh88YvHG2xccnLAM4bKAcBJnDTze5SyWVhmnrv7k17iNSX",
  "key37": "5khb1XcDCibfMWbTB2ZagyTTzYzy2HHE8ASZQxtKcpjWSRPiSJiv1u5zgt9Amyi3JUuteiE6twaDYPhgvLhAnEHd",
  "key38": "4DoFhmyqK5h3CqXPFiLHrhW3RDmntjmUTsqz7JZVEzkvYjfkMwR5paq2tqd7rbF4YS5uU6ZLfhKvrg2pwrU3mf7Q",
  "key39": "xt9XVQWY4rp5YqWuti7m7wf4y8RtvD3ozDsZCSfhiQvaxUXqJFvngtKHpcxTwEtTxhU1V88GpHFoW7nQ8tT31fW",
  "key40": "4A6PFAvLXvNhkwUXnqQPdwiaZzAwdSgbadf4mDXUv12o7H9CJrUviyH7cY3WoPeY8rAqGtRaTSei3T9ZHCDhB3Af",
  "key41": "ajk2QgW1s3fZtCWJWeVNdnDcFeCgbL2BK5UPGaoUtoiQqtXdJE2wnVvC7sHX9mFgnuV8DVMAh7VXk3uc8vpamud",
  "key42": "w29eqkebzebTz8LehfQfsRyY6NCE6WgMkbo29pCdPCLKPUUK7zm1QzHu1zt9DQtpnwjvRQHfqGyKQzRDn9BJgMw",
  "key43": "2LhpHzSPC7SnqdCUtG8Fm1q6WC5Ef2c9vHqMFHrntARz3NXT6Bxaj7zSW3R7CBKoJj51LUaQEBQcjEPQed1VMfXD",
  "key44": "3UabHYwLHD3aFnxaySsfPnWLgdyboRK4YfYvxxiCsC8NkF7nWqa5Xy6nAV3brD8u2F84rDyBQDLuzKjTwHyurBai"
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
