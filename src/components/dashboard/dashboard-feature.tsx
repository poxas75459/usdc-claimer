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
    "XoF42FJX1qRviPhWhthGEaq6knkgZE32iRfqU98ZsdaWJVpBSnhjsc4JYFcDzECG4JsgH61dfqykvVToi3C3b2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zaqfhmrQxkDWVq26bGLwvSbHgp3eQ7a3BHe8ycL35ghc6y1xbdEFasEChzQhg3sDbR8riTEbeP3YXbgR7D39yDW",
  "key1": "5H4yJoURP9s6GDohGGfgXGMQ2HYJPotTdYZ4n2n6aoubCYbCPYGJuCM77kLyQv2GEU4zfwCRFJY53yGur2C34Tpz",
  "key2": "3Mjjwxhcv1MzA12EwZtqeGU93918r2UCnZdFL4fxG8ztsbNz5TWrKq7r9ZKYJPCioFwCCSQDffgHTHWHekiZAF6U",
  "key3": "4QxheXTtiasWRR6kzyCYamimoW3oMZvatUgbKtjHXS8eaaRSaPzCFMBCmLsPQBf1ZW6DstDbD19aYEuGRaKRPhac",
  "key4": "abEZRKXFDtPdDfyB1DtpdbfhLxaMwpFbkYa8VAqfLfuJUU2EtiN2Vs5KdVzRNKk4eWfNM8oWw6BVhwYKKtD8vdA",
  "key5": "2Nsx2i5QUTYg2CaLJmbJEV4qdU6EBBKvVYVmQfhQYDYRR9h67ESQNekFXsxMhdViRaMJxvNfVnb7VZNHSUsTRL19",
  "key6": "opUiTXvGQNL1xmfRaHWswLiowAp7fg97GchyAn1kEGgmrkP9aM89WQ8YEGS2QaxFDYTdBGHcuvT7sxnb1yJ6aCd",
  "key7": "vFehMd1MEsQ31fyYvpEU7tDqtd2ocXdGctCJBw4CJobXKazDNFDW7pk59SBaawy3LLf7jMTsgjxZG7Mr6YEHtHh",
  "key8": "5AeHjgW9AWVdx27zAJBPdhqCCkbf8YKysqHYmKaQRtzAmKvGVW4G1up7oHqVo2Rs3MQkLgCaFzmjoeCMQTWcTRaR",
  "key9": "CUSsJQHMju6nP9SUnkZ3LCtR7miK3ftSCw85iwRvyECW99Yf4ZakF7wiLngWFTwS9EnJLkV2kPJZkywRTQ8XRhi",
  "key10": "2YuyBBsd4NtAPRFFpncKCTGSkHZjqGhMe2DLuCcyVzxSruzzWuLoJzBkWsZRWonGqKmZoEPmpTg1VhGkPrEZnmHy",
  "key11": "3e8pHRkDRNTAjnWN6WqrixDubhVomPcAKtcuDoN7CpSSyL18Y3EeUBYpYw5aFDheL6RL6JcV5bfsS92W8GREFqJv",
  "key12": "EvoMv2DxWnLaNeQp1zKhnuyiSzmFVBoThyUUU1Sz95PEonHCGAhe8gBPMGR9839e7k9r3eBqD6JoXhJ7LpHGFyo",
  "key13": "4gH68J15ca22SGbh14erCA3M7EFQr9MpkZJAiYvM17aHN2TRuFh9netNc7LtSDRNEFj8s1SyimhftnDhGK2m8eAY",
  "key14": "329SwYjHkYN4kchwyisq4bekFBh6zC9qxe4fNefpLM6xhMH8im5M9Gv6EUMTfbJMXcozqdCH3VkU9Zy9HtR4Pi48",
  "key15": "2cozdc5LPdRcRzpbmgnfAzKAv9GRvGtVd3QaqTy9Zg9sXuyqHA1N6AZPYwCQDdXG5vQ1phexGJWsodzfrBwuHKxF",
  "key16": "63GskSGGjsV3cp79vXGn3gHALVQ6XoJw1q4tcKiH9JrUGGXEUayaodLSQ64AAtnfmTTmX1HwDfahdy3M1MKZgDij",
  "key17": "f9vHHLn1jggkUnHgDWZLY7vDWanGnc8gF29JC61m8TwUJoV6owL8465KHw7jdZVpRtQcY9Ecx2PvVv8qeK26RBZ",
  "key18": "2YihKafyQWdUoJZDrhDtCRo5UcLnYR6wc6MfmJMAzCRGxzSVf3MwX2f21jZKQyEpaRTGHaD3LkEUTu8jaJht3FEK",
  "key19": "4iGQeyfp6RE6o76dPrhsXpUNQzmEXTK7G7xZyhDn5Wn8ot3CKpbvBUtRkEBHqkcQ9bwygFT5JpHvQEMQxmonjQY4",
  "key20": "3AdpN8NwbELvgtLDzyhzUAHvpuuZktce7naUfNLEjcKXhMQRXkLwKWVvSJTPSZrt39ePfeGUUqrLSce5Z5nYbkp9",
  "key21": "3hKvfuHYwYxsMTRfNQ8o3L3bsXHjiHFiURX7fzKzKSB8skKGKFydPbAgJHzg47Etho5LzRXVHB2wU9hqGcVRrkem",
  "key22": "5uC5K3uPNFmc9zf67oCPNWp9V79Xyoydq728rhZR6wN4EdhunTJcZhW3Paa4LnDWpZPU7g4Dw3vpCKyK9VQ2MQDa",
  "key23": "5HYPvxsunosBTMLV1oGYpUed9mbwddDE3Gd6g1rfKMKukXCjDR6QsgPMguL8nV6Tu52kXyTav5SkCfRPehatNSo5",
  "key24": "35EHomvScsJABkJy5DfRPEq3Cx4wFU4sCkgKQ5N5azGUJoNyb9WdhErxERphGWCo3rorcbhmP9w9wh2znxo9EBhD",
  "key25": "39TykCdvMRCGcHWv9jnwwoERxwJGVU6PXXxWrSv1DruLYwjN28zhaMMHZvWEXtcjdZM7iJKXG6jNAoDZKpRYypmp",
  "key26": "3jrFqnBAifxD92pxdNN4HKCJbPD6H6hgqZgQJfqSWY7fotg68STvG7RkoSF8LsyqAAKhKtwHWxFy8eq33wVisL1T",
  "key27": "3x7Ghqmf2EgZAZ1aSt9Eyv8hFU7qim8f8hbiDTXsPsxMRaugAyBFTtxkNvYA8UMZq1ttGruk2qbZoQgXvqj5f6Ux",
  "key28": "3pLdvcTbG8dfv7Sh7SHxg88P5T1CEwUUYby2isxusp2QrQkVyM49iD9eqdm9n42EbYqWBsRKHL2EaZKe92ZCtxqF",
  "key29": "3Aa4ct92EuymjGaFv1ef5rTzg4Dk8yD75Yqy6YYX7qPBRspY66tptmfsH85V9hcx5wub4X7B5R8wam7RQ3cftYVZ",
  "key30": "U7AaZFeKHMQPsAc3it2TRVfk3ewC1tVBEwL3ckGWDZ2Dw2tNM3eA8ZN2v2PQ2Ynkb6BMkScN32UfbTeSjSSYJ58",
  "key31": "BZ3AWNLxD3JMXKVYvruj1CXf19GiUfB94QNi8gGJgeG4Q2q2u1jWNGrdVWWAKBiBa5avt3xrWRJsMuc7Znrw7YD",
  "key32": "3oXCKhWQC7GhgU1gSSB6mi39Thk5VK7h1a3daums9h7YT6KSjPeUNfbKy9FdMHbWkApppM93JttRMcACmCsaH29g"
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
