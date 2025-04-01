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
    "53DsuBhnbSkXCrArpEtKnpFcVXRwQyUxEDR3tfEpeo3CjkbUoh1mfwN4RrCSpzBmzCvJBoyxGKiPxp8h8BvJXf6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x5srtp8erzGdr5NnEKpZjHfvN9WnL2wbJzScjrWFBpYuiwVNv8i3iwEcMECRLEGcfkH5vD9kRzuqvJ1A7yroEFt",
  "key1": "4qpqjyfYQVzk2RPY81UNJfCQnhxznpNTJhAySBTvthgYzc4537qL7H83LE69wvBCpJDHGELws6i9muMkcSCeDBUg",
  "key2": "4pbtWubzTDLgcvUQNg6oikFBfRL8Q345oafxWv3va5rwDx54kxVrGCpizbzNj9BYW49ezaWD86a9M6s1TKFhiW11",
  "key3": "ipDgyeCVE4rsxaqkFqPXWYwXRAwia6zGhtCogp9pLMmkkPRFpyoxD43iRfCpTvDYjJ1Ru4iLMhanJ35w9V7xfbG",
  "key4": "4jkezw8torfGhpYVxsmHW2cb5ityxPxwX8AT7aSys4sD9ofHbxVTqTekBkc3RiEUoRvVyCXSgJyXw3XK8pUSGtfQ",
  "key5": "2UDZoCmnQRjhLTaTxneeZE1SCDk6kzcVUXkUGVqdKM5gR85FDUUCSSLmfnFmoGnKZTvzSpW617SgRMLNQSp83h95",
  "key6": "5tz349PEbrE5MX7bqf8LhLuCabwNBo7kQ5g8LPRtdbJLKhsbW1mnRV3LfQ5Dsnz4xKNi55sYBn2mH1YaUFTsT5Zo",
  "key7": "4dVj1xRQhCCKrpHymeerKDz3YBzGEyDmoipAvNRDy236jQEdJy882DjJngk1JFRRPbP39skQGRBTsaPkbbt4J53M",
  "key8": "4Hdb4jDUFP6Kqc4hNeFxXqyW87GKGzDFiaCLXTWA9t4kehL1VgwXsVeEtJ2Xp9g8LxvzGST2DMkg856e2eR5S6qF",
  "key9": "5jivJyGWW7gefhLK9eWhMASCsDXzzqpqVX8Pzah7rVRyzfDviBAeN1S95ncMjVe7btHRZR3HQPSPCxpcMekYctY7",
  "key10": "3KaUr9rc6SGd3pDUkfJa7diUY3NqLSkhtpggWqR37fh5UMzwJLBqAbsy8yp9Rn7LHayJbNdFG6PvuZoyBDwywUgg",
  "key11": "3oTmGWN2WECc6qx1ugWwuCBHU6nzPDHq29GcoCjsow8ZTFgUAM2zky6rjKNCRP5SVuaKPmHq9DAD3TE71rK9cMDP",
  "key12": "2pFCNJ8YoLoE1d6chr8QLenyidXmjTpkc8wB7mK7aeMCccwLaU7UqGACw1b28XN4DQLNjCrcMmtuZBaFnGJADQwH",
  "key13": "5jq7YNfukpsUjxDHbmtj7SJ9uYBz1dgUs61Lfenx7nLtjPPsW7Ucg5Eeft1ek7tHVmgq4bsEjnamBVjyYUBEV447",
  "key14": "2RAjg9BMstb6zbtN6gcHfRStxNKkizvqVBki8QUiL1w9hQjZdY19YXhvRat2tJ5JZP6sFWKAkRoLMCDwTcCRJ6zy",
  "key15": "2BMLKr4F6rdvtqkJz2V2EAdJZCgzjgwjmVHQJuo1wXbwRpcYiPRWpSPCwQPiCJp9ppTmaXSDbRpwagr16L5Nwwm",
  "key16": "4Hh5L7LfhhEPANB3A6EDKfTcGY9ZaRsuJeA9QXCmNnpNv8K6BKkVbiDy12RxUGwEkQoZMJes2tYcXCbvz5dPf1t5",
  "key17": "RUkhEsqPzEdqfVURRpAmsdNtWdZDZKxfbjhv9BJWAMJeTP3J9k2XvbmRZJmfPnpBMDauMKpHaWdfhqG8qY2XnJ7",
  "key18": "5sip1E5Q57VoFh74LPLy55f88zpmAvu17rSezQykt59eUCNuAqF7NXnbVjCoEYsyeQUMpkGWaKAxyypNDRnmRLKL",
  "key19": "5p9yJCUU3gEzCVCB1rrBZBs9yo7rRav9NsBnEXHdqPQre75cDWCTqYMsJs5baWEJauauHLKYKzvrDGa3dabw3frv",
  "key20": "4dhjyEuVq1sx75P2p7RzpbNLXEhzbjhadfyAJ52yM5mB2PwyLrnDawUSg9dNLMH85PeGDGipxZv71eaxkH8saKmb",
  "key21": "3K3bHp9CAiYqtQ5zfVzreAbfNnFYdmqKpCLqxYeE2QmYkCmrTVjYp9WEDuLDiqQ1cHihv7Mb6MXuvUnzroEGQYjX",
  "key22": "1cX5doWfDCyZMNsKAVfAVhvFa9mxMfF6j5g5wD7jyH4RYQ8XgbckcqF6PedWGqwmR9SVSPtyn64kq7Sj7Tj2f3P",
  "key23": "3Z5ErLamWw7qMmGdzyQpk5XJBjGATurHeVBgDY2W1thfnTKbGNan1ZACTvahjoYXK3oPm3KR3JuAe4qgDdJ4y1fB",
  "key24": "BnxBRy8Z41tgkVoPQHPNeb537xJVyszPyQz18dPrr5GTdhJJNfNKqkBg6YZ7MT3bV6yXYVypk6twnUvMoWmszTw",
  "key25": "66XpVsGSDaVEWujHpUN2jLBbZRXrpaQwHfTCumc7yqYQtKi9cULxNukKJEjpSYdGjsaKn1EcDY7doH8iHzYFXnhs",
  "key26": "3DKSFzwBPC62Q4f8K1wuGUj6yr79gdKLMaPJS3aVC28fLU9pqYgPZ8HNrJ3qWMr2qJB1w2z5fge2mZ3qPDhW6BTC",
  "key27": "4qQwCXvgBRLdMroPAh98rbXxrqh4wjpDTjNLxCwfDS1J7Hj6dtWiRiBmYqrSDpmoAvcXVa8Y5Tu82jm57G9qgNEa",
  "key28": "3NjmrybEgZqqPMv6WGY7s5L1roZHzi14VHLRyPnG343AJf7Ms26AkZKqDt6y3mQcJKcBAKDLD4rxyMzxN6SnjDHy",
  "key29": "3zhfh3EnjeQ95FMHwQrU3LgAfwn9pG35hisKp81VmDeb1MXqbErLEEfYjFQeXdz6Xi78MNxqCYPZc2BajjzviQJU",
  "key30": "3H63YeCwVQaM5YGXsnckMw7nYwJUfeg6Zj2rVDCQhwdWnwFuMbdFpepTS7ry6xk1citUHBkmrHcWupanVdQNLen"
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
