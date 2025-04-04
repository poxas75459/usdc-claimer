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
    "4rRiH2yCAkss3cYXCequJ9z3TBq1a2AS4Zr9mifiRoAQJpLn7d5ipyN2dqwkvqkSZz4wvrFSeUys5dR4smM4cbTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25MGGuYZJY26q9nitMa3rYxNTV3RJmUaBKF6sD7k8WMLj3o7VZQi1LrY2SLqVoPWmKXBvrvBkZBkPNakbUZnEcqS",
  "key1": "5uBqkmvznCHcWY3QKSGFB6wg1PAiXCYoKZXiPr3R1HLKdgympNZzzjrZZGMXjnLHEwdFtEnNYrRbBL4cjYvh1bM",
  "key2": "53miBHLrJ4ALDaLV1EQ74rCGyRPZspdjaa7hfC8VR8ComkuvHpWKVjFU4QHBTnAChpc2MYLBcecwsYS4k7h1LiEY",
  "key3": "3QFB5qURxT9F6Dw52fR2jAfyiofRhx2WjQP4KAfFNHwSt15g1Q6n5kfeP88TQkR729pD5ZX6YrhNjebxrX6MJyY6",
  "key4": "3aKJRFGGebSDszRp1agVG5m52f2hUNBykDRZSEtkTxiM9hEBERHY8ZqpSwrLwSvZFjPrVYYpnyY92eP7iaFcdw4t",
  "key5": "276UaTsj7SY5wJ4faguReuaZzhcsXiz1dCzXtN1spRLauTMRPew9a8EDzxEnKzbg2rSS5311rhjKZGXFc45sjgte",
  "key6": "2bUqRh9zTDwMLMz9e6b1rYDwhozcCCfaaE35Wdj5bZYh32gx3ke9qme16rpTQ3zZgUcR4okp7saovZ9mwt7dk8S9",
  "key7": "2ZMH1osKigzQ4fLjomXddvnbHRga4UuoQeKBZUDoTFZvLduDEByGkV3swLGYTQRAixNVMvuJV6Hmr6T46u2NhVJP",
  "key8": "2VL3pdobkcjSeSVMUL7XSZJpc5FkcYcbdF46qyr68tD56o8Ji9gT5mybM5avHBXXA8vSFbL85N5hTEKUx87ftRH4",
  "key9": "2f4j6MLhGbpmZEqZotRWL2FG3LQGNqmk5iP648GyFj3ijdi2rKYWm9PYvmwCe2YeQrrKtvAW3sx2t4qf3daiRhZg",
  "key10": "nvWVroaUrYdLZcfq6dSNx1WbWaFU8oYGheHKsCtvFvH5ZsRLj5D6wugCoDjJa8hiJNDNSMcXwbfhPUhVzn6zfWn",
  "key11": "MBbtWm3VfUWL1wbv7Rm6k5hUUSi9YVEtCmj3m79Vcg7UXAJUXfUmHyAonPsTdTMzMTP8iteRBBR3VqqbcjJDijH",
  "key12": "3vcL3sK6E7Yo68GSoa8xvdc93S5viqwog5CGWxQfsdiBRfuafzZJVuN8HWXx1EMkmRHW1ZchajbEBjvpUJxwkceT",
  "key13": "4vpX6PjYwVVKUGEnQ8mu1dtqPwRZR7TvwJE7Fz9gcxzs8e1KwQdxYwDMqkZMyNsJmJMnSFayUC6fWMUTtjGrWXaV",
  "key14": "3XBwFkeWUqbofZaF214EDKRHwkjtLiY5hv8vniHZf9eq6bHMmCLMeZrWfD2nX2zH5VJ33XHxXgMz24yoQnj98JEz",
  "key15": "4TCJhMMpFfdDrnE1LcR1DWdETR6qxELt9cQShQDirpZ7ivDxgQrq6LWL3NjBQEU56m9iwXd6tsDoTgQ3iuvp8cNx",
  "key16": "2C9bqmKmcs2ML2VKAzYgkMj7yqMuwRQ9CHqSLjS6GJ2NMmW9GoEW5wHuo4Az3ca6LgDcBJ4Wosu6BLUvVdr47NZe",
  "key17": "4hPfBKpMCW1wPQVPrmAfDaseU8BZbuTQ1B2tgqaun8QcVABotoqYyqXLwLC6dXPHKCkhKqMxkxXemN3nv2dTN9qT",
  "key18": "5Zn5rvLLBKkYHgtM8nsue2PrVQp8fj1CQTDG17UcKt23aYbLbm19xdyreSRXro9beLW5VbHtF6BFQji5wmG4ZizB",
  "key19": "2DixovLQjGB5tuqYVwC1mQ4vHRUSzDVnNCtmaqZvJtzCQ9w5wUuXfeVyRCr1P9fUj5fpx1hSLrBkuyKyBLybv1cV",
  "key20": "4udhKWQEwZfB2Z73A3mzYed4dMu9NBt9AWXuX3F9mv1k1ApVzH1RMoTJt8zLtoELF7ac1bbK1KA7Czz7FmmFRmZN",
  "key21": "27eDCmve3ya8ZVL67ceFY5e8Apy6WAvnsVoe4McFHXxCV1RjkFgMhygHz3qNFCk4UBFpsdTqQEP9tn3FSPmHG9NA",
  "key22": "4Kk58qLNvWSxoDzEa9q2P7BUpeVizKBzKtUeZwrNjNqpK4AjFitbF9TTu8y1ZWvZg9VuGovuAz98rQ54fVvNQKph",
  "key23": "2XDMFSBjJe6RJ4TmyhfEr8QPCzrEbney3ASVkVxmbtZ7M2MwfmywBV5Zs3mP3AfGfrZCACrM9cW9SSSFHvv3eGKz",
  "key24": "5VCULUSAtkDACgoCAq8ypFDV6gSdQymE1um6NVjeXXvih3zvqUUQW2qK9Ve2Kv9RKtKdpxJBrJk4uQfPcmohTiHt",
  "key25": "4jXabBYDF16Rft5aujxWZ8gLuEZu7zhbdLz1pCfozuwaxrR9HUtdme1g2Rhh3E8U2xzsh6NCaNiCBbZUCqaGYuY4",
  "key26": "4UvLZuDJSbztGaW4oLVEPfGyLKfTdB9P7ihVvSMi16QFtZT7LCYcihEW5B4cCCHZh8GRX2BUVXRipnmTkHyTLxx4",
  "key27": "4oN4gT4587PjxH4fpAkVQ6carFvyVkgKVMVknda8DuxRysxYAEmxfcLcoQ7m3CxqRdFDAw7st969dSk8hKCUqePC",
  "key28": "Ht2UQJyt2LFSh5Ysxauy3YWdcmNXENAcK4Ksgo5vjC2LaEGgSvP2Xtaac2EBZyFmjFBbT4sp1vrG8WoaCwprGve",
  "key29": "2ttmkpu4w1fTpuSqjDNVGTmobmZWHZkNUp1otUAM3zMUyMuu86RXyxe3hZZNLT52pghEBLmeamoV9HYi3vmeSySU",
  "key30": "2B2PSxrFXozdeSmNeM4fAxa4nNDMbc5pJ8Vpaqiv4LrUmXZoVvwWws3UAN3W7dtHfKARYetCpRaNmhH9jzRjj9ui",
  "key31": "3MKMk4AFeSBzK429kThySSpkLRCtEBumPGb3HgPSeWLSDUgpejmw3Ah1NTUEE7fCBLYWxw7vuzb335vjxPKUtXpW",
  "key32": "5zfzfUa7wM6hZFVZbHenLbodSaMZWG8b19oDhYvHqffGuaUVTTaLKHm6uWr149LbpgcV2EANCtxCXj9n5UVqi7GC",
  "key33": "4LbfLvEBYxuTshLjZP9vnH3Qk7BZaffkfXyBoX21YLUgr3YqwCxLQWUdjA6o9RGmJdzVJAdsvKczREAXuoCCHdGy"
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
