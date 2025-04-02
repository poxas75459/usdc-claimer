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
    "5gUPJoPnjePE7r7uFbJ4ZD9qDgcag61G1LG5fLRobzFYjwuNbVnYD26XE6pub6A8bbNAgvETanA2ZSvCRcxRQ38S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ECN9BWirPPdqF1Esw2YJyjgYRAmMzxS5Pkk1CtgBd86gfhr3MUtEza8kNMsFed8KnyeDxMVa1zuYrkcdEBKtZaG",
  "key1": "57uo8EG6mebFVfWKBDAioAb56TuPz6eKDpzinmC6ThVstzJdx264Cqd1vqZ9VxEkXnQR1adoJpfcE2PBaNks3Mn",
  "key2": "2MqQSRwbwkFGALGPv5jKT3gCkNTiZCaj3LNYWYyzGBKEgZQcW3AJ3ro4yVidBgazDkoD21cSUN5Ca7Mew197TrSE",
  "key3": "5Uyg7376ezGLShumSGsg46jjjpVkTFaSNXnGJTm8vdTCto85hBsNLrJhXXhWxY7q6X2MZs7WTauWxaSXybALgzRq",
  "key4": "3c7XH1fpTaSPoXSMnwbZdN6eGfAnWhKTYSJzZzNbvcRUXfgN5YZpGDcinLrLfvWwcbQR3SDau3LDTFTLU2ALvyKG",
  "key5": "56iqPVWQL7FfaPvAVmksCSefwZVo2n92ZD6kHkJnHiTd8vE7HxyayRLphGPK7ohyaepjbuofbWL1QyvQLciCguF1",
  "key6": "44YrQtoHpU7ShUWBReFxujPMeL5hckxNz2Co3wRCqLmEgwMLrrWWcv4xRbJrJ7nKiVRDg2mY3G2HMxuFEdfxUn7a",
  "key7": "5p1z66cdR8HuXitCpJAbApzpKVhFZojjkYnpYNWcGhN41XZcAGNcZBQdN2C95BM5ZQHxFWoZ4Yo2ekTrWcR19W4U",
  "key8": "39qbb3557dkf6GKZWf3uAcvEhAPQzkFiZLWA3YT8yno1yY1A5zpAwbEFSJj13NSHv2VVo3ELmQBGQRfGyG921n22",
  "key9": "2aEs6ePjpJDJHdaJfJmSu62abzgcTLogd8yhhokCm83g1MTT4JJXZfycx87xpn7BCy1EH4ZHK5DnT7kwzyN5cHK1",
  "key10": "2rzk33mjZcnA8GE5H82QPHoc2t3t7oLhJQvtvWW5yZurr7YmM7FfeMUkCaTCWgfaR4xdFJSx5qp99ibtGFTzigHx",
  "key11": "3b9Y1tMVkoiL7wW7yWXzM77HfrHJmnhZVKL5xGZh9WYLDZcrXqG2voMwr3RE8rkQRQLVn6pgswtwR4UxtGfXQ9Sk",
  "key12": "2kntnqMwBgTDCyCPP2diGJTDVkfs3emRqqkajaDwwJrWcQhNWKryJpwCNRJ9fwjTKo93nz1KAWqZ99H4aYoSqCdm",
  "key13": "464jP8taKZTdT1yHkDEW7t7hxpQWfRWqRkniBwjV5dMTQBTwPnCHGe16MN19ajs5RHjETVmFJuoSUdcTTHfCKYNX",
  "key14": "474iKnEjz3FiMLS6WaXsRFRkLBw1pgasEuJ1VUfNam2T9HCMV7Xn1qCPMhCufuD3T9pLAKmeeTdHDk1y2jiFRzLt",
  "key15": "5bcyfEBocDKNSRGPpY2bt94VGAgA2S1eg3JWMHvJM9fqrUUcGA1vMqkspWyCfKzqsdbHZcGjqbcS4UNqkz1zMR7K",
  "key16": "3NBq43dvm45VHCpAdLaaAuTqKYroJv4uoSFEFp8jSR1uhWDo6awJBwcWPsJKZL4jdJCJBp5zE3t1t1YRdHZinYNe",
  "key17": "npCuZx5WpKgwUqnhFZqEdrhoM8rQdhyfXjTBxP86mQec4q4UenVQyxdiPBZz5URq1jh9TqcN9WGdHkubN1JAy61",
  "key18": "4quRhZdBh4McDu28fMFMsAPbAAPPXr815Uiv5zfRDgPGACtVAwmxPhSVgo7YP4d2fMd6taGQk2kwFtsRrWpmrPXN",
  "key19": "k4GK6WN4trgXVCusUCk5rjSm3b982ER5xqvgvgbY2afoN23bD3NCRqfHuu7vknae6US1vu1EUX68cv4Dgkqx6vj",
  "key20": "5L2GVU645X6NE8uZPSfPrUbHiQ4s91SUh71kKB853xUsaoySrz3Pnb92t7ZyyVuihngEbkchDeNGT8C2yC4Z3pb3",
  "key21": "5xnUyMm5y9T8JGMQd4MqvjemUQzE2xZCG2JyRwKL4NQ31t3VKVx2kHNZwBj7su9VqeoSfzWQEm8kxAFaZu6Hx4oA",
  "key22": "5Hyh8QYjrPd4D7xKFEf8hL5GksR93ZhPjtNst6DWEYTiJeerAXr2zbSxKeGx3DRGNQydzBroY7f2aWtmq7QG2GoN",
  "key23": "2juwJAFBvCc6PcwPaYQu27M3cRry288TNA85g6ksktLESe6GPvvWNpyfj7p5THNZKtY4Zz9VEndk6rd7h5FrvAk6",
  "key24": "yJomJZE7H6gXZrSnRi3UREgQuUUcnontfyKYJ4K497sHTPgfbY2bq8iyUPSEdWf6WJcuz3LQAXgnw6fvLF9A5SG",
  "key25": "3THyaVGkbzPHaVc3Vuk2DLqxfM4fC25SZxmoMWJDP4vEERC6SVRYWN5G3QZJHzGuFE65hudQDHM6VyMcVhYxzESm",
  "key26": "4eTqKWqGddAdrpz7T1RUHCga8MW1kVhXjgFKYjZc72mhioNMHJjcYCZjJBve9KmTrtxHTnszCArFgEAUtNyuNeCf",
  "key27": "JCeWk4eWHBsxYhdXGJRJgqQsiHBnPGmaVmbDjNwafLyMn9WxZVFeZRCP3gCZ6KvoVXtTQb1GQ2w3WVbZj2d5fU2",
  "key28": "fUfc9oZqu6LXnUKTK8ysU7K8hiGjMn3BZUpYrXURGEV3ZYCDN2wXkYEK9ovcKyktDbJyQ61Z3zEj1xj7m9wsumU",
  "key29": "2qfWhprk8oMW7AHXcv2ijLsgXTPP8hhmVfwVJH5iJqAg7HAcCtdW6sj556a64PmcMX4VvbgWpyKEoZqvWgkkZ2dg",
  "key30": "4VJATerxcdomxQQmL5tgjvNWokE4ThGzxTDC3TYJtRNnLptzwUXhBFREMTGsu6n6mjpGMU4QEybH5xFzd7u8MJwP"
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
