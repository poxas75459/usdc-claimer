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
    "2abQ4yHPVgsqp3pwiyh8G5raCLW11ms7mDNQdqCsY1orYcKcA3dRAkbhziRPKN7kawVm8xQ94PGzwUhJmdaGzhdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E8ZBkwG8yNrhJ2xgCpXdjuHev1YcMd38tmXC2LMTWUYJEpamwiouuQpTYvD9oSVPPqLWDtwvHS4NwoJpVxkUbw4",
  "key1": "NxxjjB7XkF2b7mUXdME67t1y4GHUhXRNvXH5B682jo3eHdXt6vcs5d83cgws2zjBkU6GDmKhSg8NxcG6SL7xw1H",
  "key2": "5sZSYb7T7A5qvo4XogtBwYapffpq2mpt41LjbNwJMXu8KPkYC73dTdaREBYnFcFYow3LrTj4f7PbfLG7y3KrvpFM",
  "key3": "21zWHDB3GefKmg3DR75oHmoTk61zTSELyVZVSVBdw7zqTwaAYwRh1GXwVhzBU2pLqXUANtcMEomWFWEXDZynXvyX",
  "key4": "46bXd2ztSuG4N8mWR23kNks2h7Tvq8ihEnyYqegpSBdJwrUSg96pKBgSiauh2dh5PSRqScLwYe7LiHz9wtBX6YSz",
  "key5": "63B5HqPU3MtEdVSYQX3TGR2eXGqmE6zs5WbFRUqG8Fz2ezVNjkw9QkzekPaeXGXmDyt51jWQK5SsdpwxA6sTW3mi",
  "key6": "24xqgKL8xH6rHohBDTnaqwr7RyS6gNEDeay6as6rfRwcUdVowMABU7JktJRg98FeomiXzTi8W8V5UEiR2y6AkBen",
  "key7": "2y2vATJCYfShMP8oVH61QtfkadLLWMai5G8n7fg2trRAoPCZJVYeqMvU4bd48D6posFJAHi3j3w6GTtDmCsyBdu6",
  "key8": "QJ36znY4QR9B3sfjvdEad16tLmUU49RLwt3VyXUTyt5k7mL6EM2PYAnsGdmNoD4yQwX6X4a5jS4pPzNQaC6C57a",
  "key9": "uzKRj5nwBVizvpR2gwi9G9QdYBjqWdMVU6FrhaUBDoFNhSv97tgX72YiWvZRf4q63C61EwUfgUqBZp6L4jv2Ayw",
  "key10": "2pF4nYPbDmkNFa4E5c79cBxXiqZYEu8oBCEpZYRVd1QNEyFRGnuQmXqTosoXgmkyMCYvnPXgwtAj8ux1TycQDK4C",
  "key11": "3EiC9358tX3VT8TJgcEsPUG3xuqFLMU48xjosPqL1tz2CnTQvuTPsHn4K1dbA5Yyd5YLbxDfQfUeP2ucTpZ5iBpe",
  "key12": "5Y9F2CudjhEeriEh7nAoLv4EuE2qn5HniH2munuYjfpyYLxdwLg8yRkCu5eCU93B4ykxB44UtoDdPYRLoPDUsSPm",
  "key13": "3pWNuhkihLBAHReiwhvXLpnVu938wdGPFWwTHwAMZ2aHzhu4EjHJiYv89xxD3pDYPyxSSo66cRZDdN2XzRNA5zE1",
  "key14": "3EysDSDzhQYzevXVDd9CaET7UGnZQRLtKhenpQHPvKdrcrLUk7nfWXwbKxsYDJimXGA9KoM8RQQRVd1BLaWn14Sk",
  "key15": "3bmnHH5obuBZyWM13vCN23WL4YszGYwYDVBMJtAPmDeLPBDDkysE8VXz4qj6wyc7uhJu7snB6ZPDia1sMFfkfgpW",
  "key16": "2Su2nhyngVyCLo3YBfdupnVMDgFBDpzWMzi5QscFWNBvUedCmmRWGrkkkXMhsWHAKmtQMktfi4NyXDD26sjykqdb",
  "key17": "4qKS58jtiGePjsSp1CRrvW9QNs9LbDgWxGJafEeUSAaJjN7UQCmKnLRy5vtAKJKQSynFtWmsfDM2ijobMxAHy1h2",
  "key18": "FYSntgwgQATTSq98J2jZJqkFp8mi4e3AvfdGGWahfSUVEhisDnkuV5DLvYh1kuLzqcFmTYDvjvPyqCFWAxQg8rb",
  "key19": "9f7feWxouMBqRq4xxVJrP7xyWRP51VvMvQXXWUhjssxFDngA3xeuFv4atiVEMdPriDhKza1ff5UYeu6xZw5u27j",
  "key20": "5qt1q9GWwho4E7ufaHZW9nzyDg4LxYYQu4RQj5p3QEz8mCbYQqZZGpspayc3MaJ6Eewd54RsZ6aMGY5CGCEhYGo7",
  "key21": "oUqpbJJFUQdaL6sYvAffR9txc7EtjK5iQa6AQMcnpg5pVqAeKAK4W114iV1qTWPGNUR9v78PUBftHCjYSZTCNbz",
  "key22": "vb3oXGGXUUAgdCByGAsarZcQ6MhUynnSANmyNjad2kr5vbiwjxfHfqJ2FXZKxa9KUJQYnceoV2nf7xBkkx9NUaw",
  "key23": "5vU2LmznJ9ipYY9ko4jMPeY7WXonkewb8SGB6aaUtLi9c5VnxU9dovkLHjhyR5zWuCLxKB9a3qTg6hYCT5czUZ6k",
  "key24": "JUpj3E7HK2KMJPeBFZ6oi4AF7uPKVMvzLu7TuDNWZ2qLHGt3HTxkhdbTctg48veptUt54oudRik948zkM62B8mJ",
  "key25": "3Jb9En4qQBxHW9p54ivV1kqyaKfxFAPJYBziv7KGh19c3wmjqHBXmADYQQnfrguiAm7x3fphwTBsZ1XqtZs2pbHB",
  "key26": "3KffxUw5rGeM7Y3dyj2P1TVp12Hjntv4aaTzEKAd8xLjJGNibm872cxJ6Vpou5DfcLaUVg2rdUyxrdAiJifHjgmW",
  "key27": "4bZg9A2zCZEwyDdSXBnf8vitmyjwugux8qZDomxXzamiqAYGBJ49LLaTKejgquctL8DQ5BvhNbqbvSAvX2xvrX2G",
  "key28": "35bxDG9Em5ozf3nEG4VRfbmmWXfM9ojwgEKfyfNdQ87DRXmoC5m39qDo1YF3A1pdnZh9nHhNVkU8xZ7zp7JyMpZk",
  "key29": "2eMq6MbP21XBBvQKWgcAZ5FmtVhpeVzaXHGLexHmUJeVU4F1FUKPwg5ohfAMr7qi7XtyZok6PWGKYezWiFkciQL6",
  "key30": "2jfkaCcPQAEUwQxKcCw2oSETugpHPB4sjc9mZtMc85oBA8hBPtb9JNmSR2PcznBbaSwUQjhAuS8RY7bSVftHkayM",
  "key31": "ADfsD877UafKD3MU2NzmUmHnjo3yXdnadpeRLAhh8VoXcHBAE2rfJCdHxhbwicdawTjxrys6CjZJmdBDuVHkyUc",
  "key32": "4jaShQ3BzY6spwszq4pm5n5R7BbvC6f7uEaZC44DvQ3tAho2HxZYmkjt5HFRLzmSxfMJuUAUEHdP5FNRMN4fDw6Z",
  "key33": "26DvdichPUVtee1nLaX2MUCBNxVeB3Kx2bYeyLnoWcv9zCH5UzzDy9wNS2XKw9MM8FG8oiGA6BUx8bQPxwx3Fnny",
  "key34": "3AdGgwADui9qsSubxxZqrPuk9EverahN7dGs9GZ2tDpXCWn9Vtfs2mypzqBGT4HVKUxs7ZBdD6wrUwabzAH7jE9V",
  "key35": "BCqTMpqac4PyWSMUPmymdpdAvqozpgRUAv2ZHSBoovGERLsGMQMaekNfL94iZmo7YSCknkd4d7QZnyzhbzRXLq4",
  "key36": "dV7d2WJqcySLyZU161pwd5TRKa9rb9Yw9BVEEgDfrTjewFMtwjHSFMYhpHBqp5vzfjVEaqqyACZ5ksEwGMhjasn",
  "key37": "5FSvUVucZqhkEffDCc9mQSYz6inWH5DAqxh5oUgNv72MCrzFMECY7TRLsizwrn5mQHkDM6c869MjioqAG22cwnWP",
  "key38": "42ZzkPHrEPkN6ckBwDn1ZfsYvhDq4hwVUhk7GmCecBP5U38KUrLDTakp2iWKrfjxm8Puab7sbExzoTnhaMANMbEo"
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
