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
    "3gjqd1j6ixp8PpC82u8Vos3q3QzPboUpFfnW8jVbvQ74PMTEyiuuMfqVpA3RftTPNG4LwQpkHiWKMfLgkLr6LxYw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHexkdAW8La1MC6P8kujedF9uC7W1NvM4rabU3csKTXEExs9YcgSyzCnf3Po4xuyvasB2kCmouR3v7PjgZMH9qG",
  "key1": "4ihhb3UjdgESXxRSXmLYue1K32TbFeNZczEE3rfH2pQC5NdzZmmSsS98JEa9STEp2afe61EweeDa2Qd44upTNkQ8",
  "key2": "2xuR3qLp1pM6Hmz5Rz2iPv1UGFrMjCL6xGcupNP5hs6KsJ5zBvmRdzr5FxWNJvu9fxhbaYzdgzLgKoi8RZdDgVPf",
  "key3": "2FUiQULAE8TV7YYo9h7ShgoW2FK3B8WT5463NSr3jEqAa2kjiCSyWcwHwt37tdd9ALQiRp6rhFrA6tnLEWivWqFk",
  "key4": "3yJExPnFZ7p7UHRdCrkS7LQqYd1xaA5LViTq6LrPgdWtpJAjWZnYc2D4p4FoQ3CkcXfgiExRSHybT6PA4m6eAxxh",
  "key5": "65GMfznHZohaULzmWxyzuvpQD6HHAxf7VC5Hyk9PMMvq4Vi3WDWudkJdjeT9rQj9qYwob9KLqFbyDiNeV4LB64Cu",
  "key6": "c9CnJNiFaH3cTMsNsDUamwVJWvinwPWaMzX3K3546PigmCpWych3eEsA8EgDFsbZcCAtuVKqfuWbcBQJq6h2Jhf",
  "key7": "7iNptCfwdsEJrJnicAdmo5eqbbAHWmyYXRQeSGSoKxa7xQX3Rksj9Z5Hx8U3mq5uoDPLiwF39YLzwjpUrfakTpQ",
  "key8": "5w7RXtyuATSQq3ZQnuwFsteuPB6qpkikTQVWFCFcMqg4dsVeiX61zHLHWqSspYxgRfqQQzGoX4Xt2BHV8HWPsteH",
  "key9": "51HFDHQqCuZ2qwD4Ngb6ahHWq8KT2Cu37iwnNsbWwXbHhMScSgkYbQRB1mzKQtmeAidY1AvRuYbQpwP5V2pRpDWu",
  "key10": "WDy59XzEzmFvmCwGYY9W2xC6MmF2xjSaTKv8fxTjiFxAY7vLrVqfdEQeJ92FZg1VvmFSgQXhM6Va4otP25cZgbi",
  "key11": "4nirYubseZNhdbW8SLECnFQaGudhB97bAjdi6gohzHwK9LYxce3syBdiAcp9gX6AorAboznPXQdZMXzvahU8UbMt",
  "key12": "4TUVsVkMHHb8GBNauRLFz7SgVvjAqdD5wUzqtU3pm656ijbjP9UfP9kNMS5qJYyEWX3D1h9LzBrx8BVtUqNiPYao",
  "key13": "3gmgDa8skdD1QkjGat8wpDRFvXueehYnAhUZU5GnHM66yDZr1QBaj8tBH82szrFYk8ezkeVbwCZWhDcVoRrxc1jZ",
  "key14": "5R1gXPzuqbq8cm5LhnrzWSnRPCE5M5pppvqEqHTmR2fuzcmwhRP3yawvdFUMF3FFzBbq2kv2L6wXB6ZSPgscxVvE",
  "key15": "2d8DGc5vV2CyKPk7Fq3aLQECe7fCobeBa7gW4v85FvJ3hKa3Gus2ypQDgyANkmfxZdUSTes2c5WiCwQ8N5AnGggf",
  "key16": "4HsrwmXrhFbPS4dzQJEVoUXeirgpSVCoNYBSJTZauhW1STz8sXaknwQjseLU84cfi5yTGEA1fDiWVYLCtAx9roNe",
  "key17": "5yXrkUHM3u6YicoPW3xaLBFeFJ9WzWfafpS5RpHQfsQXPprXhehMmYnMedeuvVZqRxRzYVzaffj9zgU4B473Cxk9",
  "key18": "65GxeH6DMBiukyiQNXXvD9JGwQxAgRL7PaT3deErAVKQgKNMh7Ez4sMLx11smHWqzeiuww2Tu5oVvcvJDA4CXJ4n",
  "key19": "2YLB8GN2M1NycAdJzMcFz47GEr3yJGKdAd3vrRCoPryb9BtDBzoP5ZN7XaLojTLVpmCeVtB1dVkwn84ZYi3fmuU3",
  "key20": "u3UobFSzbMFX6eGBFsXPRuxn4KpagVmr91knysuDsGP8LLeHr9fCd1wVpph2V8HAtMuzVaPjif8vF8RhifmNckv",
  "key21": "5Sxd3nya9yc6VxaffHTt7qE9baqTyohGEEcPUR4KbUXz5X2TYhacDRxEpfCkw15M61c72xRk7Zu2w18zwDVybin9",
  "key22": "2Ci26YrZ3ryvg9uvGqTbJdRtuUgCJSn9zibfjs2JB6USiRVZDgKPB6mfSWUT7m5fPTXkQo3dds7fEVSe9mRQjSVN",
  "key23": "4eXUsWDCjUniyaBMzBwbMjzbU52WqfAgi8eUJPxZMgJFvUymBGnUCRuqvsmr3kFhPbMcBBjctS21xGtdY1GrwkP4",
  "key24": "53Uav2LTgvvDAXihCngNeXRGeArLgYusvfd6rT1ZN4sRpHGNMMJQDZrMCMexuXiFinjqpfGqXhoZkTVQrYKwrjUa",
  "key25": "gk4V5E8B4JCjuoLV5CAHYntzspq3LLshDeb3jpGAKUkR8pMLBJcQ6Ac33t7NFtJCK5efzdxo7YESNLsXy6Q4xAR",
  "key26": "2GRXBAtW6YbP7yqA1qJGoih2HHxnZTaQurSqV1BYeTUWV4G3mCtv3kbCttgUxVTuxqTNjDUzkU5UPtYfDYCVTQx3",
  "key27": "WjgR1qWBkTptE7TLhaRYhGrmR6yQq6TJJaBf5Qoq5MubjmY8XVrM1ofrcpEhBhAJPFG3MhwC7Kb4wCLCd5yABfa",
  "key28": "5az7uBb5Huq8mn8zoegVHTDkKmAxBdbTqwsz1bsLgdGUQy2ev3LEk2Bbp6mepMfwPQKdagAhPJ5aSiJdGp951GZt",
  "key29": "21eLBjjRhASpVHmzjUbv944SfKew84ErYVTWjNzMrpLYjdfV2pm41jqKZWfouyvESSuMxu3g6v1RCJvE6g9XfkNv",
  "key30": "3Rm7RN2V8wr4EoC6C1zYuTBdA5i3Z2V3pg5bWjmRdsGhzhRYQ2oQLACfZKvGfPp6zaueZBGqFvasAd6cwZjxDhw3",
  "key31": "4SBVYcpvn5abFFszBNcANJM3KcTGpCDr4f7w8mQk4oKkYgKxBdJkYMb5ZbkB7CrnuaVBhpV5zK8P8BzdERqWCeft",
  "key32": "5QKJEXnKSixXohGxrDGxdotKpKqB1QDVg1Pgxptpmjmpua3fDuwwhVGPiwwzDXZMHTLx798NwTnhQM9LZYQRVHhY",
  "key33": "4FGjPgrQZhmNMjG6DqGmjyZDXZXv4AhWZX1bVzm3gRbVoiT9QnbuGmdA6Ur7sPcZUCNKZkwNCQywEPpPdFckvp7Y",
  "key34": "2PGNYryYqr9LFgWpm34M87KSsnFBQJsKmD3PGwGshnfiiNFcSJuQpPWgsFXnhXczJqnyMCfnBTLGwxLRJRYSdFA6",
  "key35": "HAGu9BiUmRWzvsCdrfPJxoRsW4Nu1J4CggnX85XYSPcSz8YAY659w4sTABa7Vv6DUC8JnZ5nQyNFai8ZRTtkygJ",
  "key36": "43a1nfUKNHuh6jBKBf2W7Udg927tugJU5JKWGdYL5nS4kDVUBaLR9zxWmT8ppdezejNVu8aixgiFCDh6TzJB6Niz",
  "key37": "3kFwUYD99KPXSPkiPGbausoexin9SwERQbumy242NTj1kTU5KXSyDYNCXGK338cKgz3D9Csqd11L691fvD2CL12J",
  "key38": "57JScmKys7hp5RracD5g5kqppEUB5hjrrDhMX6KeJyBgEBERaVQ1SN6vRDZ5iVA6ucTEA8QJgi4NoYGmRo7a6q73"
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
