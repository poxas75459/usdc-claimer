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
    "5xvWqkDxGJBcdowjRL4NUzfQu87tX6eP5JYjardkFpi4zxWjq3afRZgdofpELAM5hrwwBCnpmNu2aeK1GSFGA1cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WaA1rTGLAV8jVK5zuw4FHKJQ1xWkAMVf8KPpnehtSAhv2qnAkhGVmHWjctmVxGp2G1gSVJsoCtTtXN2EW6zEbvn",
  "key1": "2AKXw6W2XHPaAeidC5ECSuzjwsgvHzqGW3dDieUWrJT2KQcHjbjErN8EFkcn4HBRuwxdyzRyVJq3zWCwpYi8dngZ",
  "key2": "3vJAiRTy69TASHsYAhJjgNRajAJcegi4cscZoW4ZCffijB4q8dvXUet1KbY49XxBTggwyc1i1xDGXHVRViVzaz37",
  "key3": "4tvywdrgxemxpEZ2QWabTASUAvfasKoSRunWSeHGLsFFvfTiWcz4TaSKWdh7YdREtcrQ8zqaxsWfpgQyRwPFvGAe",
  "key4": "4RGtgjf3RcNKm7d68CCR6h5vZLvEWH6Vi8VMxKtUztjNufhF46inw1NGyGuFh2DsfrZmUNeGWEFWB2GrUyV1vV9u",
  "key5": "31AoevtiqbbxSTejt6FQnYw7FCoSnetKaLyHUWcMnDjjAz7AtRc5s9keBJBDCqf1q2gnoFBhUPPbngNcmvTe6XGZ",
  "key6": "BeHn2JiFaTtRrttBLTJy4ZazFeVWudEi1mvWpKodarnqLQhni5nuUPZtoTM5ENuJ6HHfe1n3ctwhgYH5x5SGB9c",
  "key7": "2MbxgCWMQz1RiqcVmpU664JWfH6FCHZwxbXJprZdhHTa1W7PjsK39sgWfD1KhARLRpuxW95z18z9aXyqsJfdHv73",
  "key8": "5gGgmHT6DWRHKacAT16yUTHeNfm2bTmwUm7h1RHmq8B9o6nnUpuQeKoFKkNcE4dYtYUA3uBVm7pqnygSdsGyU88p",
  "key9": "6CeYN57Udns8Bj27cND4fWqMW9HUW3Z1x5ycTLxKNAuff4yiQ9dL6Km8N2zkLFCF7PYTnkfn6Yw3rjqsnBFjWqf",
  "key10": "5GwgMHaaHRfT2jofNft2W7UPh6U2hTGTZjZxTUXNxq7ctqAfFHwvXPus5XBFBJxAWzTU9RDHFZwiRcxF7cwtr9XM",
  "key11": "317EcqBFVHRpQT1CiRYyTpCwMsQcJJ6JDcgiWL1U9Xrr3D9KJFMqf5vhK5wK3g84JLyLEo9m1qmiuEzPhstYmAVv",
  "key12": "5t5szFuUZQE7n5D55sA84D64QHBQZBmpa2KdJF3ereUtKuo4vq1DvaG994hgqkx4vtpCjT7ZqoJwsCnLCuj9PApr",
  "key13": "5XHr7MHcMxVWcpo1RSBBh7iXrNePVeAUN7oooXg8NPMyK3x5yeSiQUAFtHqmYo7FKwWGJWi7jufPFbzU9BnHCD3Q",
  "key14": "5ws7KhkN9ppxopVenrmQc78fy9x3DZBEHZrzSR7KtmpK2mdR6CVVibR4VfD69NqCQiLRXZtQpnkSPcuJzKoKxZ95",
  "key15": "KkfBFcZJ6jFtTdZRy9J4bx1ZRJazXSSL86uvrygEqA6DJPSCs5CqyqRCw4p2FnM36hUhh8U6Pw9YDENV16ZN3fA",
  "key16": "54NjxD6xPTLgtEvc8D24tByRm5YNXp9UNXQEL5ZVdDpPwLjDsVFhHaKHNGmkFetKbCLnBY6dtqwBh8W9fmeY3r84",
  "key17": "kFfKi7XNQ2fKyjuGj1NqsUamgHx4cZ4wRaaH9LAyFC3TAt2MKAcrA8FFuv5LnLRKLUKmLjvKjTsHfVU5CKkCUuQ",
  "key18": "5PFUbPJSgwk5ikJ8Lj9iCvFdZzccL73BKRfkx9qkoFAdvqUJ4bDPK4ryAkzvBLrg4Wzt7m7sX5tBrCFEYP3u7TBC",
  "key19": "45xkeNnTBLRXcDYTjBsXP2LPMNquNWRtTiQbGDYk1V91KRXp3yWQ8NcSFYCK43pWfHcCv5WxM31Y4xP1UxSGzsDc",
  "key20": "VmTFdMUMP3JJW1bGzQZuAw2YsYN3BSySQ52qBDHZHcVyRgvMwtdnifoxYGSnf4JjpFLTyYbJ6oZzUq9riHnypWq",
  "key21": "4GsfoGthzDAcX5fVpHVzfMVnX5fo3M33CqnSMNRJ4kVy4HaiFVtXhYbk99psBrFhgJxgyvKm7mdSuNbD9Qwn6csk",
  "key22": "2PjHJCBhh2yWSAyQZZQgGiLVrw4KzMsVpbhUnC5wVJvUKtEwCqiq6tGNJu6vZicMrtX6JTh9QkZwRjUepkdmHVhd",
  "key23": "2S6xm2TPn2UNxtXaHy27rzgQh91JxR7kT53U62HJAc2QUZ1q1yHX5iE8DcdM6Dggk4L1XgZopXTNQDBBwNmqyo1f",
  "key24": "4fmskXB5L7p4WmN3XMcizMt4AFCjDjYjuD4VVLokmF96J3f3vYfK4JLJUJUcSqWT929YD5GJccim4KZaRx2VPRQJ",
  "key25": "3jtzbSg2zFJBsGxBXvoHDcwYyXAGk5B3fmexEWvSrhai6k9gxh465oYLAiapbk3bJQ7Sbc4eTBpvsB4JqgyqHDAY",
  "key26": "4vA4xWY29ixiuNqrK9iZh8wD9XMMhogYERBs2BeHnayuCPbGRvgikxLvuZd5daXbCsQzg9cX8TeGqftG67R6udHW",
  "key27": "5BnE2X7tuFM27np7JBR27fzxCMkaU7nFPgLAMQz5BAiBwib4Pven5sjhFc41zdke3ajN5G71ooJFW5nsz279Hv17",
  "key28": "tetd7j4Vpj5TwYsAd432iLw3s6J7QK2SKUnT1n6RGtapssCjfy2k8ujWfnsRcqdE47QkPzX7MRo42FzBnkn16ae",
  "key29": "5JLBLtpgJXnF7NJJkrBphBgPqTpiw55NCBDH13ZuWNMCEEyFSDeech4Ro4Q1aGH1RgZPBBZk3LQcFqqnyhgxTRkA",
  "key30": "4q3doTZkSDdDv5uPp9gzcurLA4JgzQ11if9AZX1rpuTTdrGWRzigCfLKsCpVQ9GtYENiNwJVVi95JjoE2WAgEdeu",
  "key31": "k4qkDS355mjFfyao8qnKDHRCaH5EF8wNa3zyxCs7WzaJrAfXJBx4wGNPNmCeKe5nM88S5oYjaFkHVto2PrRbJUi",
  "key32": "2adK2uLeDuAp5MvqpxoeNQGgsGhks3u7LnTgyacKBu93kbWo3xA4F1gd7ijBuc1ik3ECJinvzfV58PC1M9yseCkj",
  "key33": "35HzTK3ucNejuuVViymeA8hAZJ8ztDm2zavwpiQj6tNtTjU89zPsvr91HZuJzVYsht9P8sM3m7gk2dKmzVUWrMVu",
  "key34": "2vaRnb6vcHB8YBxjsEUGquJJHYnydoaaNZKpHFA7bv4zJQeEE2TrisvUPeRB6bknh4pPYkt9LBYQBeym5HDzCZ6E",
  "key35": "57FKr5rdwzF2zXKK2AbXM8g65HzSH4BrCVEwqiD6tXhfyrj68eohUPGiDdbeYkTBpqfc38TxpRDpCWfY7CRbvSfr",
  "key36": "3NubzQCTGWu4TuX8sfxREjctoubR3hnF2s6fFS8H4chv7wSpUXFvE2W5exBKPixgA2otjqF5NZJZ2n9C8y6qsrNR"
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
