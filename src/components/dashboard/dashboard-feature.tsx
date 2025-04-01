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
    "4bFDNp6paEnhpcYAgPBEQXDLg7s2YpEfQk7mzg6pZrjdntXE54FcvavwZ5s7aZZSTVXJnDiTK1HFGyn8WWRvLNPL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2drKfT54hNDijEFs2AQPpUsdFmXpPEmaGf4Gs8AD1fP6rRQfmbDUvGM12WgitiqgycisvtRoEdCF3XeHJNK3znEv",
  "key1": "4YrdhTBhryoNZzU9jDVsCVoc4GiFn4GPJEY4ZbMUwhxDD1HZk1NdMUxgSozk9gxTtSnhMFMkSHN8rWwuv633QExm",
  "key2": "4WrJkK8fNw8a6HqCBUVe9jAna9Ts64P3q4pJbx35KAhXoLkaZffCnspNeZDpAAoX3x67UiKBCb1tBvf47Q88j5ST",
  "key3": "5FiGGb59Ae9SYw6hvp92BsMQwmUbS3nC9WYW9GtCsPr47yXYfUkHDKWU7U2Akd1SMNbdizGvw4fZQA4fFBjbaDhi",
  "key4": "3XT6mNhkXLmonmmpS6h9oZuAi2Hm4wDv5E7abuCfPDYZikCYAcz1aqmWCRsHpNRDzoUQrMK3qmkA15rFnfEp1VX7",
  "key5": "zzPhNQwH2c58mgLWkGuV6qZdaWgT4CT9wx2xFFLQJSqiBfwcdKGbZgsVrH7rpCKLhWEAMqi4Y75mhWkRnvn5ywy",
  "key6": "4N8xBaYbYm97Qr1gGUwbvJrLN2tdNaFGSCa4DSQyNX67rrLyvRHEXdRhx6W1X4NZC3mYUtGn9ZTevCLZ9vaHLAoM",
  "key7": "3JbkzrJq8fyMLinSnivvjyPZq968FTYfPPoPuh1A5ySTeTnSLT9VqEckt9hQ5oLu53HfMNVacpH4PimJ51ZhjW2e",
  "key8": "4wwGZUe2WBRzrRsto4rxKDDadpxQDmgV9943T43NAkrb8i7hb7zDxvuw3Pq169ic31e8VEz1TEseQrMHfBA8MvAu",
  "key9": "hZkEvuqXUUctPxjRjf4o16Vgqs15eqFqiYrnkhN89a6wCmZbeTzANWG87wmHsCe8G43cUTRTGJwhu4NzCfZBdV5",
  "key10": "2ZWEKJFgeJifBu3gW4cfFCcBtyzTqxz5bsbWThVz9HLpWA6rSi1YXW3PzcqhSefRr1i2XtKmLGfzVZMTtNoowdJG",
  "key11": "4VYPd8EJ56v4v8iNGVSuF2zhjn4cmfhRKoHrbu9y81cX3f9Qv8ekKys1deRkb4ZatzU1Zyejxo3uzE7ZHPe4usW7",
  "key12": "5AcdQSpEAWaKtWNSBNdc34RT4b6dzMPfGdJbAPDg9rBNeNnDLvuYReaoTMnC9BetQhowNZhyoRhscsGuWcEdJY6w",
  "key13": "4q1PTDc2WDr5zMjKf9or1oHBDYhNjgtxPJisiGVsq3UvAvT6uT3aqaQS6KMBxpow7cRCCjEdfdFs1NC5abENhMPw",
  "key14": "3MrDY2GN8wVVbP826vmv6vxK46VHQnsj6L5tP9jZovM7tAzFfKSGapJ1Q8hUTgzpye4TGa3pWunYvgNghLsP1jeo",
  "key15": "2GbxA6TnpYmCJGXQqy5PYN5nWDsq4pSMfHEuYLtM2dVFGquT62C8s8cHhRqZTeqWPf5XHuQqqYgaQreieXFxGDUo",
  "key16": "dhh5YG5WXuQ8g64DT44zbKG82PNFzWVq25L9pNm6fx5UmwdSjDjLt4S6iLkVhuSmCNBcKcVQyGyGdwDkDKUzGVv",
  "key17": "3bucgMepAc6nggHxDf76YPkQietnR1UJ6vCSePm1PCZzbGW3yNKdYPyZtWT1po2yge5Vnp5WAjXnCx4XToEpert9",
  "key18": "2CrXfHtjU3sg4ppwb9LYVPjqWiG2b87F9muGgQ2CmEoKGbxkZr19aQoDJoWhpEm7ErbVZeg3qgJF17z75Q37fbea",
  "key19": "2xUq1CPiDLAGMvFLcSTzGp4DZoAQFe52sUckWbTmaEn8oXPP7XiX2epYhUAkLn7Wt5PyZqq9XrNSMj1e72GUuht5",
  "key20": "5ufa8MfA5jxKQVtCmerqBuXDWGJ42QgNusjH35AzotC4ohekSWYHc2tGW16MhrvAmUNbYFEQkiz17igyamhmLTPs",
  "key21": "35ZpBphoSqDydBbH6LpgpCzG3QrLaj4zwKcTLJtwKNReZFzTFmUCSGi9P9cPtW65evjeknjf7unfpxgBzi5aEQik",
  "key22": "5yxiaazoVkq4Ez3hBA9MAhjfXQYFDWrruLL5uPk95JJPN4Ub2P8zPe9kFM82GQrDZtmeAxtgH6a1BCKXc2J6FUMa",
  "key23": "4ub8QmzYQkJGhPYTDB6zHEDfAGtYYfucX8GVmzsgueKxDozxRj79UoW8ttW2kfyN7W1uHTjn1tRTRFVJjmw6MJap",
  "key24": "5McmgGsSHsv69GkgRpNTymFUrNWjQqkRYc9kyWYdVaYv9CagT4dyo5yQXhecAnru8nJDUiWE3zyMu1NvvcxjCtpC",
  "key25": "2wLv7PZPq91hJEXihG5C9N6FgcGBSrMRUb1jXarub9tRoUv6nx1ddgzSoZNBiUTGvn8bzGeMAidrUCumCjttRfPv",
  "key26": "2tJN2dziZ1YMo95pX415e9UGAgEwpUGxgocvBvMv2Ggt6aKahB91vMsy8TaLiX6xWCCJYjtwcSD1MaAp341XXwMw"
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
