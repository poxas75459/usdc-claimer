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
    "638MErtkBgPWcXckDmD9dSNzVtoUi4GXqXpVDBCfJbt1KfdXebBapAcpV7fKyRoCgUjonLpD3yCmdvUf9yR53haE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Wh7PUywy5Ko9b9EL1yXFJQ9xuZVZFJV4By8BmWhHpYrvpLJvTVXdLh5aFgPb8LpF5nvEjqEfUDz9GgQvMtsJqo",
  "key1": "2dqoDjdn7DvDejSjq3G7Ct3yFWFNby8DiHci3uutYTFYaobZx6HxcQC69bzHQaWSAL74eygbm1cNi31ARPAcA7jU",
  "key2": "2n8WzekRSpfQzvGrXr1VwqR2Lq69xG1Wy4sfCN6qhqdgDU1J19ubS6ZDts4r8urUf7Q6NxPwjg3oTFd5tcW41tfD",
  "key3": "63A3fZidt7qmYcWS2WpSEGArqSP8WcKSmtz4L8dFVmm1rZwF3XX6CDcxZVvu8VQ8QBBckLuG4a9P2Nz3c6qtJy78",
  "key4": "43MZk6YHePkG6H7LKqbeEWga91Hk5m4fLnZCDMTNpbuw4Gb3iaos4YT7v3cSqhJi79siu2TXr1fARd8M39xhKHVz",
  "key5": "5gCJgMpmYZLcuH74b7WDjvmWcP7MSk3R9c1hzsKAcV1r8JqqPsiTxtftZVwonMpBcyDUFoHJSeQQJsuKZc1mqRN8",
  "key6": "4LwsqvAb8NWKz1tGqpzwjBhfTCYNjpyfNbCmV32s2k4f3qxDkcGEGLNSgEMrycsnU7dquKv2xkHQvnDVLkqHGoMv",
  "key7": "59fVG6CDMp9D5TZBvn7znyaU3BtakHezti2DwhzEFKukHPjqMVK53THzrrj5wboDEYpXLvcNRPKfYQjz1MhMPCib",
  "key8": "5ogwC5Cur9ntA2bvJjPSo7WQJ6RaBJ4MagFL9NLTeJJ51wzoD9UjUpmovYGaJ65ouCPQqVeXDBmtpakGjygfNxpB",
  "key9": "61crHWkncfeTisdzTNsqRJwbeNDb7G1ar1935P3G3N7YcrcDS4FJ4yDcbxYPoR5cXNXcNku9SueXt27r7gXiANQh",
  "key10": "5VE6PxPuhcB6dEkMDcCYwDrZE7uFwgKZ3FXEfRmoJ9v3HLparpp1n2d7BbEpLK2UriTNRKR5LH6sc8Sbq252KZvL",
  "key11": "5zy5LyYTKV3rk3xYHiysbs1uUtBqRdSY2jKwTewKRvjZMWfeatAZNQvwpfBj28mXfAWbSbrEgHpGdKbRk2jWVJqF",
  "key12": "5gKCtbgvRTkLCR9Dj9jkxUXAmVQidj8socmbeqqp55BC61FZuRSciC1EjD1Jgrhrm5EKhoTUytm7efMyb6eWYWVs",
  "key13": "K2WPKrqUDtANhEL81UUd76SP4GAZ3vyHFXBqg5sfFRH9eAA9EHGXTRt8ArvED1VDykPSzkLGNAHxtX2CoKLq2zs",
  "key14": "4LQfJh2tQQUsZmM6rkjUXBZC6mrbQjySzuFAjtf1iiNU7HqVojGXtQPDpbyDyQ18QTAmY2P8b9ycsB3Caq1RsQwc",
  "key15": "3B2zaEMEyUxqnCNgGZfbDNc7ygDcDdAkJ6zqsFnbEvh5KJYrHScvqiytrnqbudKgVrXNWnz3KsJADQ8bq3ptZjdr",
  "key16": "31JsZsgqUd9DuDGnzCAUu4U1ZfXingrnHYmd41Z3yvMVTYQeBAcM4gKxTQePRhuQ9jKhJHYmJDxtjeuxhf6hr5qf",
  "key17": "2JA8cTANzQvoXsBv6dtt3qS7xDh8vrMcvRoEbD45QoCA4GR7rVrSzKX9p2CdAUb7QF8JtnJWksBhix6QgJQSd3as",
  "key18": "5zg6shDXaNqGFt1JF7oDvwhySuwP2vKWnVef8wAYa4CggzrjHe5DLvr53W9hxPWPVdJzNscUwyLa3FirNgjTnEM7",
  "key19": "65hiHisoMVKoGpRKgTV7QjUUB4oHgUmwr6FH2xeN141UL3McZcFfQSJuhvmM3qMkJmtE4WXTbafxVRPZePUCdAdi",
  "key20": "47Qhyg8SpmHvRvWKk5g8stdDvf9FXiKngWY5yCd2DCSZEC7iBvuKxVj1CC1oC2B7pfXj4eYHaaF1r13aT54sS7M5",
  "key21": "4YYJqGQGVXXB5eNzyCuFPHm1K7UfzA9Kc1gDayg3BRBAuHVZvqif3q2kRMnW1XNif8e3yPPqXtNRg4dbugevAES9",
  "key22": "5nE7dbfqJCaZEkpGBLX4L1LrmN9FnuH8fLdo2JrgrMncV8cTCQzGu9CsqbGDw84mK5uTwRrVn73uN2zmFEYVpygU",
  "key23": "2gULXxUPUgq1Kx4SNE93FWphT8Vq7ecF4ceyDcAY7Pr5ycrWwZxgkJS6XC1uNKHSxCnjpA8wMCDh9VyaqUPb73nq",
  "key24": "4Mo2o2wYCdrL9hw67UxdENXy3X1tUHF3uW5k5Z7YjCzbbDQS6DidPhqLnonvZVFYLvbiUQ2387E1zMLnNXE2UBkF",
  "key25": "4gRPswKbqDxffvpPkrYcEc8jMzsY9c6e41MAdmhr9PDvCcouPbR3tzjXWJy1n5nVCkehsifZty3P8VDm95YdSiNW",
  "key26": "3qRv6S9M75etBajnrEZ953UsjnWbfmNGAYjWZkGiDeCoVAJhtx2Cdx4GhKeWi2EiBKE2VhkHPKDDykxBEpCWEAaK"
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
