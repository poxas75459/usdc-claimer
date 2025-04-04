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
    "s8WEcxLA6Z42gYrEThnwjL8JKRm6uZThsV3uJZWSp86Kk1jcgEKMkFYu6af6Qvr35etQwfuhWoCko6sZRDqFyAJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aP9BowAtJ89v3sRVCkH5JQfPoTdTyoHpcZycQxeoH2R6rAfwBU41qNmckf5sMuSDkNrAMzUWhDRxpAJspoSJah8",
  "key1": "4QMtHzTMFVpgTWxN7G8saMXLGJ5ykYeaP8bHfZbCDXtZvyPYQFd6bGcJ7AqHaqctHPT2tKVdPJfnKXrfx1dYDx63",
  "key2": "3EYGbyk9wiwQcJRUT2D4QKsU4MAiNiSB6KyXra3VYBQEKE5KhhLaseQHU6529ueo51rmyS6CNmUYzLWaNVvRno1t",
  "key3": "J81QU4kQtUNpt6vNVTv2d1jfZXogC94wLe2P5QzdRWVcR8zhRJ8G1jqz5Drqi4VBV5CSREmea75fmbZV5NLAR6M",
  "key4": "32nfodjN23MQKN2NJxNUdr8hoYb2kPESi7YXp9VAah45o7DcMCz4g29AyAx5qD3zbqnYaW8JfnKGMxGKxMqk3NCZ",
  "key5": "gVNhost3zJh2Tcp45YrG8Pnsyp1ra7TJJ6zkL1U7QhDHiqmMkUhAaicdPaK7CRJ3FdgsgcMRJEdTBinpmduNa2B",
  "key6": "3S8dq5gb9h8bYtosmgaY1VBNHrFJQV23Gyv546TKpvd6PLCaz7Z5p6MSDFzfSB3UuboBXELCaeU4tMz8Zd7QrHoA",
  "key7": "3k9vUxcBkoEgyqizST5vWFQ8u6WmoPdtihmkXpicUiL8oE4kvuPiz9WGnZBe1h2oYWZckTu4zsBq2GMhoGVfJPw4",
  "key8": "3SvwctpdSwYWaWoK7HpBcTym17WcCXRHwoBdTE8fAZSpdBvhxwbt6apvKFrwnUjHhUbuh2wi2jbttfV4W44zhxst",
  "key9": "2975zkr6QR4QuLtdGDYgUnEVFDL8tJvLmVzhkipiyMs751Fqsm25qgCXRiviwpKj7qjiML7RWQJCJtzoFjWtXd3T",
  "key10": "3twGdjozpMbqLa4ojBkstPBNQrffgNP9ZBhtuXdkKCCLiVwYULePPddQji43GRgqoapVm1zbAXTCKFDhP4nFhdbW",
  "key11": "4weCJwmSEF2gSse1fjURFicDu1AsScEKKAZoqKZTjWaRf1PWCv3ZddFvTQjZnLzfwZhoUW5LCMojRVfKZfiGpuLX",
  "key12": "2aNKQ7zLvcqTET2ZYhFfYkMQ32QN6TR3raK7Sc2AbVWDAPvCHdrntpkjub4bpSGxUxSiZVS5xdW2WhNrQpyejpMz",
  "key13": "57MSteHhWhZiWTKpN1XJYNtY1DbmuunRCsQCe167vTbhzempKCELXfKukFZuR9uJQFW7PS3S76hETPovj3C7Tqg2",
  "key14": "5udXESb3uC6cAWv1gtg8MWZJVxJWH4ihgnma8r8WxEmF5tu96ME99HSgFkSVCGZQgrpBWc5ZsrzpqCrFzmc51vQY",
  "key15": "54ebUweD5xnHaRNVtZxkAkresnNHi8HNL1YCHdHTSTUBfi2m3NLdAc5sp7AFc5wx7414aQ4E4cZmqCcxSgJzGeoS",
  "key16": "YnMS9NFgeTPgBsF4cDnttUtc1yStpefwEieAWAps2FgAmbZMxgx9JGtUNdvAiyRUCFzRQ19X2XZmg9jAEyTGMPP",
  "key17": "XwR4tEorT6TiR6tEewxwE7GFK3YbcyraPdpYWVZGtkwHikF6nV3zvqmZbawYviPncgbLrhCDsNkCM6Zx8AUJAU9",
  "key18": "2RyQM9Eo2vexbj9ye9BgmT7P6qWDdcF2z7ZCVNx1qDfMH2bdh5KUU6CCEno34AP23jgh9pjQLQ6wjeSXwDYP2Tuj",
  "key19": "XxzRG1kz46fbRjQLDXqWRtpRSrYcTgTTA85q66Pc47MurbYt3b5CPA2wVxC8NNAWuAj7edrZyXXwU1UL3cV6vBq",
  "key20": "2D5mxs8DNjhvde6Qxg2CzrLBVkMXt41HcoYPWx5RLivDkE1BiYHpbwz6k6fvc6CaCsKyq25eXzCkZmF2rUeKLt2M",
  "key21": "3QKdeKpxHBsy8i2hauay45iEhCguDDCjYc3qE88EPyntppyZ7mP4zkQ1YpkqTA1f5kZHzSku46JaXhta7igW6wyQ",
  "key22": "cZ8s4zNMNYBB3tkVtb85sL34vhLAqcBQUFMwGVMJR1NJHWeeZx4v5ww9E7bEFK56FGi4x2H8HW5u2ThwV1ijGc4",
  "key23": "2YpqkFpKKBJxYPNudKRwVTymXrCTBAHoqZkW1kMgWm7tKys3zXfTgpWXaQKhzPcoa7H12EAF8PY4bUdbn65t61dG",
  "key24": "3XfAq5TAweAttkvnHFR5W11DsJnJ7YwUbXkp8rTNkuAERLLxDYrzqMVrB9JzFoukfE2yjJCxn3eNveWrPHa3TQrs",
  "key25": "o55vjoZxQuSE1BMePGgEsgkeRHfchHLaWkQAxBaLKh97nLvxECvHLmwGceWhnPJzfRoD24UzpE3Uvak4HzYTAKD",
  "key26": "4hjF9fSMvozukAi2yXyg4B3NYiLQFVpyJUyqEK6aZfzjSpWcQVhFqmE7DAph3NEMGnyddNWtNMA55ohcXVKYdBs7",
  "key27": "4seXacraV4F8LggwzDt3xDWNZTbxZ1Zmx8C5DiFy2KyDCLzsP3Usy59HsJZRTM5Xn5Zsc28a58puGKAjrssC61KR",
  "key28": "2UpPxphEM6HCG3UQqcKHCoitNf4fQumQrUR5e79dwcjacR4iKSYjFRtkCnxcpm2Myq2LKATzEXseaf6i7VhbJtYW"
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
