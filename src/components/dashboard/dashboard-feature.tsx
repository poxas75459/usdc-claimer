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
    "67EAPdXEtC8fs8cV9t8bEUSaHrcgPCVmDU9VY2fPpxEnTZCWTGkBeGpRFRKiBY3QbJHJAboQoFxJQGu34Rh93msf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47n8b8HNyQV3vfVXZ2FNbTXFjCPKaEzVbCWX4xJPJwnerw5hUdSVToT858ymXs4jzRKDrHrj93bhzUb7DQZGNRSK",
  "key1": "54rBx6doeha4vyDYo4nka456pxcB8MXWybSPVTH3GTSNxJNBVxnQigDTDXgzMYF2ZGKcv59FN3LuiMiGV7NdAwAk",
  "key2": "4EeLYqUQN2DU3MqsccaHnpZUF71Xr9xbxQeoqM1JzoRhgxZPLfZRMRhui4xf54ewM143enFZmfJw6oSjbioMSwxX",
  "key3": "p5ZcGNBGsA9KnDktzchvqQbqShEgwDRsfdf67AaQ4JeAm2NQpoebhRRWAuUXuAVAmCCjiQEhkbuj9oYVjXXK1iC",
  "key4": "2Dd9wVqmEsdFxhEAfz55Gz3oeyjHLu7gPis9ijDMvuiFgHxgAJ7TJ8ng6oJw8Umr46uXZwDq7Q16U8r9n2vvZEPX",
  "key5": "4Czge6qee3ftAtWxFz2PuygtDQ2T26EDvw94JHW6YLgbD42iW5iv5qmdnS6os2DZSsxPsy7tJ5Dc8nTZ8NmB7vM3",
  "key6": "4E1kChS1J8EdGWU58Ly6AwUJLjjnqKKQXMNRPCK8xiVdoiFkReNm235xrm5bLBTiExJgKdHBQo48i4vt4Ke9AnuF",
  "key7": "2mdiU6QtaC9iTARYwmiCijxfmgKnD3G99Xf4ZpRohoUuGdgVFfA8SWpGCYxmhLYpGjwwyUDfJYY9c3ULcWdaR19K",
  "key8": "3hyBYNNdToD7Y83WgVPH4TwmsFNZNMChX8vZ96Zp9Au5KKoC1CjErkF2bTrvgy3VvmehfNEZePzavCCLis53soEh",
  "key9": "zKj5154aD5Yxx4JUdYnDCsmzHiGXNzdcwXqT68WUxXigrxVK1oDfoFnu37BxgGkhdYUBEuEDkZAjic4c98FJW6A",
  "key10": "4XDwcFYSF9JXui6w7sRKB1QVCoTGkGpWoURRdWrc9BPLYtr5NBXJGJfHveS7HpzdgYw7Ufq8AMzAY6XXqEW1mZ6q",
  "key11": "2a6UYVGShPx8L9km34uVFAcYz6nVkSH89JeSj2DBzdTXyN3sZ1d7Pwr86BacjoK33THieB6Jis54YNprqt1gvJjH",
  "key12": "21iXFJbkFePNRAyA841MAM2wzug1ybqrLWYUPJENqxXSoxFk7gf3vjRvxcxZ6jfDbEW7UJfDXuWZqcU49E2Y77bD",
  "key13": "36pCabDwgW1WFFZCrTgRXtUwCVcZAWmjGrDgAbQVp3qAeY2xvSieErZCPDRdwyymUAYvHP76eDnCQXY1SjbgtM81",
  "key14": "5Ea1L5azneZ6yTRQoDnGStBNBnhEkM2rhtHKJFHFgdLzVFdnNhKmepMhpfm1KvXXvJAnyAXdRkGhYNvHexB6CEZ6",
  "key15": "5uUjrouRqA5UZptDftGhgiHxn1hMUbz3hCUFtfF7bkNjRh7HZYP85JBfvE41VzF8Wiz12XmaSkZBbdfbjikLWV9V",
  "key16": "5WbLV1xzYC7qTT1sGTT6zRS7Q89EM4oLkY62BGxtnsCcavuZmXpsdrwvzaZXnwsvKDcL3Y1o7sMBtbtXgtbUCiQ2",
  "key17": "tXViotLTHATkrU9qdQdbJrNfWmrtRqJKFJJaHkSNZjQAyBmc6psYviPgMzC5tEYFJJooEfVNHX4LgmDayfph1nZ",
  "key18": "3wP1FA51zAxXDUAkcpzMvyg1LSpxcXXmfNaCYwvqoUhwsdCFF39kVWWNYdPSpSh36etLCD9K7GYj2qyJkpM5k3MW",
  "key19": "67L6kmnXBgWLswTY3NQJxrhL9ViDmBkEaKbnAXzXuRPBujwH23fmcRP8ZkVbYmF6ZWgtyDAs699jFCxxxBAeu79X",
  "key20": "XJrs89fpEhAvrBmFVBKiWJWqMmqXrAtbygK7VxPBiv45NU1fLSqK7vj5K5CVDnefjna7JtTavUAAnXBg8bvQtF3",
  "key21": "N7M31oi7R76PDEBQ3KebWPGeq5REAJiP6h1WnW1kpF3pWpQFroLaLGtvwnbvo1q5DELzRJdHxr6vKtP8bGfq8ug",
  "key22": "58wCxCQhbQ9eK54EnqfJc11KZ6ZDuw4WRAE7uregxkyA2Zb1Lp221KXiCBrWZ8TWFeHq4YbxLVwrNdn1b5eFM1Xr",
  "key23": "2GhmYyEjVhqbgxpeK3U1KAbDsLZ4m87cHHfcTuqpbdNm4bRcJWz9cuDLMrPoStcW4TSRoPdzhHS373kG3w12s9g",
  "key24": "62Jnm4X9XKuV4ZxXpLRfWzSf8E2FZkHi2NnTXyTsUCFNqXwWTUUqQhRgFvMPw9rPX6Y9EHmoDE3qv6knLHJ9RW2f",
  "key25": "icCYDTNy9tfVxctTFFSdr1XYcMtTnkJorep48yiWreZXjXWTGAew8JkXiCxxmLQoM7AKthgTxHuS5ijVohiotnc",
  "key26": "p67EKktzQh6JX3WoSUaQippiHxZwAwpsF48ME3KwYBdvySmRh4eQtruQA9s49GabH2iVgzSPcKvrE13WQCdrYVr",
  "key27": "2e7GaVE6RYW2Dnqu5hFDfPh1otScEdk3BnD1TVTybksMkypqCf7TnnrLmZmvucuvofZM7MVu4zsKsNbQD6hbkoYd",
  "key28": "3vVmFsbHaK4WyVGVkDC5SGFRKfMTVbWF7dtXNV2nZyvXMZRPEcpGjWh4TxpEhi1LXddixUMnxcKQe5io1GbwApvL",
  "key29": "2tFT4bKYtGohwxquUFiXdZfFsh41G32ptqnhtxi6KvWXLxvW2tznq8eGKzNzTMD24atLRE8porPLncTZdG65ezwW",
  "key30": "3L8QDjRVwSBRPPjAKU7hRva2TRy6QtmQbMDZz1cWhaE3qc2LPmZaA51EnvRTVtx9znHxjSzJm4sS9dpdi7S2WNAs",
  "key31": "5QYm1Pja3kvERY4avrgX1YzA9oc4SxcX94BMiEgefPwG7GEUY76HcqPdL5MgXwJveTcCRfHbBEYm15ystJDoa2M7"
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
