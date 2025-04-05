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
    "4fgiSEZCZB9JdSVfG96byF24W8wNApnDkvmWyVuxGLtpVvDtaydCJndD7rcAru8ucVT2qFMg5U8BnWzA9f6bb3Ez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4byvN2BTXodGf8q5GdPnpjAcjkBqkiqVYmURCMWUY6uqacUsTRuFFdJnnY3uwKqsHjXfcceUvxXitEmpDRwswZyz",
  "key1": "2fPci5tYm2K1utkykvnyy9xDd1p6vGcPrehxeXipv45zt45w4W7DcnKozmW6AeNeNwgZ3wHqjGinyuvueVJmgeKm",
  "key2": "3CMQwfgt4LV6jBJsmKxyENEwyX2c52nnv53g8ypbbFrzyh6vNYHyxD5BCqdA8hJSH1HDRwWP3ESPNaL9Md3zzdwa",
  "key3": "5qrgQoWTyV3vmoFM6VrZXLnT9WFVexULMc6KxKvasQARMpmmLoCAadA8LeibeoHHy4qQGxoMsNPCjhx3qnv1dGFx",
  "key4": "5h2ZFhUvKNNz8bQzWgn739a47y56gbRbaMAQcBGfRXd4ejYyZXw6NjjrR9m24p3qMswc9AgvqwYc64Jj6AYwcvRA",
  "key5": "4hTREDqwYLaC2AeEv1SFH3VVuMEv3zfmpx7vNiH8hb8hwKgrbNT8tyjnUCbuEW6LC1T6mXBBdmGYrJgDkqr8iJd1",
  "key6": "RFrcpAL5tiHCkGmTnRPM11gJdVyHNzymS3Vp3TiqPDYEnAM6G6TCiVKLMQwseS4GALgUhgHPbT4osbZJ5Tp1Eku",
  "key7": "2EQzfcGRxdZLJBrFiuEFk5dPRKzWExdyHXvDCW3QThxiYF4RBw4NjeZinTBQkTBpSKVb9jhN4SajvKQ54B2MhQZe",
  "key8": "4eTtE9RSyxB7bZskjXfPSgQZf6XvhcLvjJc7n4n8avu19r3rur3YFKPcxfN2jvKeaivS41xRTY1en9y9i7fGokSA",
  "key9": "3AH6R5gr9XidZhYLJbyrtrT3VCpGkmpnhrPNda5PpikDqnG7CdmGXDsfnXypwFSWFTksHCxya7grvzWtD3KpaTBy",
  "key10": "4TqKkUQAD3fsb4LQWfTGYa28EPEWsMpRGU8Bmpt9WoPyn29BF95BXnG1gNvuAW9AKa76gGF6a9szbbShCD9jgyzP",
  "key11": "tdTZCCjHiaowcSvd7TNe8cRjTSoLUFCeDh3s6e1tL1XMK6F8nCrk8Ck7EabQJGXDXdH3kWsoRf9JwqjqhyYsRkt",
  "key12": "2GU8sigqduKYQMgisv6TCRDsE69kLrGR8uL8qf4VkYbmeD839HJk8LoYf4jQA4CK6ApiVzRimis9MUvFCFsg5RbA",
  "key13": "5H22YfpBoMvU4YcPgQyoSSGgUC5hFRqYKLrcNHqZ1VbL9ibNJUvkTKaWSw3MLyqzeLHUaGKibsLAiYz8PdEhndti",
  "key14": "2jJrw6wouYpaWsZgijJRDGhVGQojju7PCTs8RE5jTwXHraqb3GhvAPo39GEWHg94xVCrdLTBX6rgNSBBdtHHG9AL",
  "key15": "2q4XiC4cm3Po57rV13HvYKAnpzd1pztYPdrexSZ9SMGJ8Wc7mEyagyEeT7h3JmMqvh9Jtx8Wj5aaaRLd5A25YNUb",
  "key16": "3YfcQ6DMbgTzE1EydZgV847VVh5ETpP7BaXBzYUVnnqC11J5bBTcPtpe8KVJMoaSjYxwtXdaS14jUhCxw1HUGUhe",
  "key17": "3nnAmFmwgbFyRnoTykhrJc68ovafKZ7Xx4tykBR6FXy6sSAjYdMAxmYHfFWvX8HLr81geiwppo7VBdZD4xomVzU5",
  "key18": "67BoYG1uonjdRw3gFt8qV3UWH9iRbfoQSEBz2JGf1X5MtMHirAU7Uc8oD2dXB1gHPFjPVCbLqYHjXgKWFyH8Cr2Y",
  "key19": "3CSj5527jjtRxCU8eai9yrCoxRfWM2rBWwwqTGgBoytF6m7J3v6N5hxcTLy94BrFvABZ5V5LmbBA2knrRahqYvCn",
  "key20": "38Ct6vgZB4hbfLufJkjCXFknWRzJ7N35tuVVG9TFP39HtkAixTBBgGdozV6neCNDBib85Tc8cAqoUd7hxsaTduzo",
  "key21": "54nh6YYssCHMgxzu89iEpuYYaGY3JfXxEWSdKucWRvNiDVFcyMXioiztuoFgnDx2ocNQWJvUARxwDDjHm1RfSri4",
  "key22": "3kT9QZkyWdXQ2xyWT9yYmCpUzoUMRPoigCR5H7NvX78EYppWMm8d4ArhnrghiZiVBJsym5uhc9xnJeh2Vi4hfyUP",
  "key23": "YP7ZGxLo8mvAbgn4dshSqWXy7C24Z3MW7Pm3JhJk5ZSUq9gBkNi7qsbmP431HpK122XBdR1Zgq7kYM6KiRL7BER",
  "key24": "EJauTXWXVWH2owDy6jsyEbKvZNEPH6ryFpAqTVLdKphHfSBHZx3A1s1AcxJArzSwt8Ku1wf38GyBco66VX2Xjz5",
  "key25": "5bnqr3iDR5vbHqdEVMb5v4teo5wjV7K7ydRmCfd8Es5BJZwkvBkNYJbUqh8d1AKnfpWZXCfMEhPiouxqvBv7q6gn",
  "key26": "4Dg2BDCYeR56PZuPmBLa4YAUuGZZFSCiBDbFXzGd5PK2jGE6VnS56B65ovTBAHPwumyknNAwVhVn6S7XewPZmVo8",
  "key27": "2Kr5Uymion3wXmCDCLuVFKPz7wCmbU799dv2nyFCXWS8iH3cuAa69Jjdu7NSrmYoR5ucsKkEBHHqSj9q53XeRCfR",
  "key28": "5nCPVnz3nx7rsXqG2cEeaqe9vQBQP7hsMB5jepwJA4dCtWBQtNpqDXK36S6VE4WarhdAo32wP8GjBfvTyqLyv5qK"
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
