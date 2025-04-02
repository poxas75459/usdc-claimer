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
    "2DLyo6NiyBSW1pyyuTFqWrZr8EG2bSAAFKMr2VWXZaB1YDmjCiWyV48RWFuemwSnJSYX5VXF5BFXPkb3Y7yZA6sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jm1xVHAVLT7UwFac2pEDrAVsLAxfhvmJoQNine8MWfbnaM8jbSTMnDXGuWyjjvJUxp9qMeQ9YBTqEUd5zAysaqb",
  "key1": "4dmCPywgQMoZBuRYRW2hoi1ScBbvTMRYHh3Z4cemj7YYGvXHphLkc6FSVYyDGD3vT4Apo1iGEwN9itbjhKT18hGh",
  "key2": "2w6PozC11TSJoVCNuwTha44BjFmrxKzbVbvkfBeNxNb6mJdHC7ssUJXGAa2xBrwzNicFkYn2wi3a6g7tQ6Z6sgCS",
  "key3": "5ySnqgTDRSPRKEz2ihnoXfseWP52nT6BeANZ3WGCxouhcLdDMhn4cp26PGc2N8XgZK2VGU1tHbbijtsznTTwfzCQ",
  "key4": "2sGuGGdKPZYBrKbCSeU3rAWU7YPkpCBUpxcnrs86Pno2eASems1htpTVpkM66QqgiW29DNa8ZajYMtXr42GcYu2k",
  "key5": "5DcQDbq1jnRG5D3oTZYxAneLgitnGc8QE7BReDaz7DfeCrwbJysKXUuLZTyr3PQWi2YKbSzPaikbRvG6osStAg2q",
  "key6": "2hocDrbqHGEfggeAVziAjvsmqeorSKNxkEuoxMyUqcAR7ezdXF6zdxbhrUKTn8WBA2yZeyHX3swLZRbQCRqA3YCq",
  "key7": "264F77VkREqEGMVrxSQ7DjTpMmJtMmCvUmS6tNnrb949hshx1JpiG2mkZWqJAjyRjxFXnpTv3toRLca5rQHWskBs",
  "key8": "3UFbRSQ8GThp7RCnrCFgKEJr5bB76S7oDzMFfjECyqPqD9uaM75v1rypSWZ9CaY4ScM3akNcxLrZu8Bst2cJgma",
  "key9": "4DutiiQ1281fmxR4X8MX5BUNvCa6FHhXwtXBFeSKmqo2ZiHA3ge8rrTJ8keDMCD6SCKcQ2tWkxPgUSB8knJjbb5J",
  "key10": "4zQVEpXscKZWRnwxq9NsKC4XMvTjuz2Q88VAQvT5J6gzjcZjjUKXks2JvYT9c3QBAHPAbz3TGVxoeJ4toFEmjr32",
  "key11": "iou7vBFDp9dr2Cg5y6Cick6utupUfyVcyCVZozwAPo5VHquZVGTXkwuwfCfPMouYUhAxSCi1G42tszvEzDc3QyZ",
  "key12": "4uarhQL3jTzhKfcLLBNwKE4obt1G5MNa6tNgJMvHWf9Ch74PzUr1Z1Dw8Ps7K4S2a22JRRRDBrgyX8GYH33x9ggU",
  "key13": "3WxfJPVKLwAhpAQtwyKcXSiMUpLXa7DUFMwLWBPyFGj7jnuzcdQV3AJBUapv8Q2ZjCQd84X3ui13UhB8xfFVCLjD",
  "key14": "325V9xqNZnuaL1GFFjNW18Dnhx32ymcbs9GADkY989uERnYciRhjr97NADywjwEzU7s43K7CxDRG7JHQpMQkRynU",
  "key15": "y388k2dkRQ1vp3fonLo4sdSJ23hFX5aT84jG1Xwhxmsh7XkzwnFD2MzdSwESJqyCUtKGPcNiuTWgmCBjV1JwV3a",
  "key16": "3G8bBXQUCxNq5jW2bWBqb7wtXUdAFuGGNapg7ugB79CxdAXWL3SckCoHUeX3u2XuWugkq9BekfeJtgCcC2n7mDm6",
  "key17": "DpS8BT4EVZCsouYaPcZecCf6oWyJf1bUZ4972s4DP4e7aY5cpXGMUFbtpkpPZQtjkFCeuyost5DwPcGkNcgZeWc",
  "key18": "T99PokVpjQwBcRcpbhVeKwifChTMHy7szWXubnJ3CJsBVbjGUhXEk2LFYcbfXwzrQdrfN9o37zqeRRSryb6ntc5",
  "key19": "31cDKgYsEXocUJrudLB9VD2TFcxRqmkdCiv7zi7eRMH9LJAQyRJJUz8BMcZBGhb5GLsv2WvMDxtu5Kwh5ZVreDtS",
  "key20": "fMdbyk4hMGB1pKBzNQuDgD2qBUzryXHb2fnVcS7jhLViD1jgC3QQzgDEsvo9GwsRTKuMiGGHZkH1tfAtfKhkZVF",
  "key21": "5fPRR5uPrY9KmpKbdx4vzWDLQA2gXCS8a4uSnWmeyjjfjo5aithLTf4sLVZCaog2rL2Fi7uHY5Um2LQL4gwgJFZg",
  "key22": "4Cipg8cMKPU1yjLJ72ENpsA5Ko2TX14FnXeCrNYuJemRJPGV1ktEFs3LeM2ZXN5SbXSDz9Xucy6417W8HmYSecU1",
  "key23": "4wr9ZZz6zsRnckEmiUMg2sv75bnB8HhG2fJPAU1azyzyiy6V3e1zeEU6qom6rvzJRcepDYZ4dJpbXB7JWP6gHSQz",
  "key24": "AYqG5DvPBwN3hCpsbT1vPAVbZ6aFueJvqMyff5eYvCjonNUKrCm4t6hUtyaSs4ZvtqifnLDRejou8KBfxiiuRUa",
  "key25": "3eSmhWNueo1SMccQio8KuN1aU6sUEwrNMVDZrN6CZ8w4tcKUBgfdSHP3deeYn2Br84qewwUYxex8qPzTZhQZFA6u",
  "key26": "5NZUDiPt6mLoMLoeEFZFz4pVYAgeJfTUAfeDqR4vAwkWPjNHBne9XKXtsZL1PkFwLSNUNDbkWD1PvZNecWNioXMj",
  "key27": "3gCrhYLBfpA8eMApJ6sL8WB77QPKPNn8Vp7naRY7YUG3ew59mfkFwrUZAHop5f9z9ctHhMbaG7nAS4KXVPZnYpcX",
  "key28": "rKyTRpsBjvgQsqVJxmHWxnpqict6g1XcehKzSrKo5eyD1uzoAKf2Fh6FbEenG6RKnqsYE7zKZqq8GQBcFctR9iM",
  "key29": "2otcxdfa9zzC46Cc6bFrM3p9rHSLEJsNDtPTa9uT62TLWADce24b8sMP6bxhCannaSXbNZsAREGmceXqD2p3Ak95"
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
