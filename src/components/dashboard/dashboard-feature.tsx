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
    "2vAAW1AHiPV7p1ML2iAEkY4p3DGtLT6ZLeBny5cmjjoEuLmBV96KdUhwh9w9fqLBcDqt4zp9qr24ttZHyDPHBGMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PEiEBcZTgj8JnjyLsRehdxt6pkx6ejBYLWyGMxQjgVap1oTL4acZpV4piYfzYEVaXqZt4vHctJuh5kbDvyDmwzf",
  "key1": "4xDFg6jrWTgNEz6RXf7FxXme48Ls1EG1MfxcGqj4cHrcLdbkq3DF6Mi5wGaa54i5bKwL9nbgFm6Hj1pgmTpdrET4",
  "key2": "2ZdYUwBaz3MtHJxyJVkjA4wsxJHmvGghqojfdKdUWY2KFTKNLUfbnvwBnKYqFuJ4UynVvCtU4UEkZkMi6TzwTETy",
  "key3": "bWGnd6ZFUXHkCnveKXSuGvbXvJ3PQTRk1Zbj1DmVvnLKgoT7xGfGQZarXfSah8s9XKyA1mb2r5oTjwjqxBEcKiQ",
  "key4": "3j2v69YqNbk9xFz4mhkBEsaqJ1rd653jvWjukyU6TdM2SUFvGcJo5qjQWY9py2KFp31viBti3hqgxLZuHTbFfFeo",
  "key5": "459vKMJ6fxnF4Cw9eKcLb63bgbKW5ygy5uaKTBBKR1RTUDowbLPWRBypdfUpppdGYPe33fptXicX8Km4UyTpksaa",
  "key6": "533umc9wKrPZtk2DeAAMeohBzWCHYhUW4VpVQqufyAg3xCJosUufEFCBHdxAaUCAyXBTGo4fCZJ2bneTt7zadm4R",
  "key7": "oovMe3ue4w3HUJEiJD1DJKUseBJfSGVpWxqmAuNigQLjkvvnicKYJ7Vw2SRGXjArfNxL9geN3FgKE1B4B3Ebi3N",
  "key8": "2VL1eUEQmLBmeHVpPEo2usketErCEty5e789qXymDFnf1Fs4XVfySQeAwuoD6VUwjtD3czwm3av81UjRo3GVShzB",
  "key9": "F2WV5AamBSQpsmanfBvXBf2yW1qjASicn6QTc9kQyAxnHQT37c4BcEJwzgSKz5PL8MimcxuzZ7Unf8ZCw5Cw8Jk",
  "key10": "9vodwFPNMfrdGmwMpqptyWzE1UkPYh6f1EDm4JunY9nCDqH6LvwGYAecuFEdzk3yofB8ptYY3xdbEiWrW2i27aq",
  "key11": "c2c1HZMubzsS9QKvMUUgafAwgWkKFj4BGJscuB8Pd6ZYDznYQvC1PLqdguKnRoVoYT8Bao8FabMWNpdC5EhRTnm",
  "key12": "5U8PJc7y7XK2eg1AQYqbfETFJVjTTRTfvATKyH6mamY8mb4BwWjWF3hKxyY7tTvyeubNrXDyFgZatu5crUnZLaMR",
  "key13": "3fpbgedazpTeZfaEPrgK88HcPPPp7EeTGPJw7LErGkkkpwcH58fpcnCZkJzNELFu3cwtuB9652qoa4VTuyfXD7LD",
  "key14": "3JMdC3Wehue2a1F8NXHQbsTqpNptNpzBShQrPDPyxK3SDTv2fxvrmk1YA6ivpAbQSJr6oELJAfVMCMYQ4ZCeeRkB",
  "key15": "5ZYak1RZ6RESR9Vvopx1V8sS2agtv3n2inmvtCQ4VN394bFeTBJE5BqAHXzWRffQTYuMy7BX3uURParvYmMfQdep",
  "key16": "3AJ66xpcpCozxP3M5rd1Szk8UqFHgjVyvBXJ1xCKG7meKgJ4m3vtYRnLf4UwNDKUP6igq22pjWZ91nmKqkva758Q",
  "key17": "8gkwAhWvWiH8pwhyoLZeAz9JMA1P2n6fhhNN858bvMspjknjme7dthiVvCk7PDiy5mg8LCWxW2G9XwsGaPuJnHb",
  "key18": "3w3Pe7pmdoAGRLDHbeFtErtDZZyqAuXMw7ZDtRATBZFgptCSAHiYBrM1UoKQMdKuVWUhmCqViVsm4L4yThjk15Gg",
  "key19": "3DsVcD7Z6TzJg2YKmD11TzmtLcRv7ud6ePWJG1c76GCWjHHwWMffHZZut3WBo9ePozX69MTaDsJd5rUdCHF7od26",
  "key20": "5RcqAzadGQcDtRWAWPd9v829Knf1qGNFRMZNqzTYd1iazjfXMf4vXomB9PtDGqJzTgPfsBuJ9xMpJFHqduHoumhc",
  "key21": "2VDyv4msYs9kUER81wg7eKmWgHVDunDzfEqinjN3JgDpUXFf4M21uSfamU4EsuHeFqU5Sx1Bk8QQY9xqim6V9QH6",
  "key22": "5NPRupGczvFRtPVqR5yXiG3rsktzVkZnWUUzzAN5xyU2wP6H5mtWqE53c5yrJka1juXjsNiWXhGJtWdjZqHKJ1NT",
  "key23": "4DYfj8zfbmL8XZxC4pbHTkJkwui8gGxr2VLC6QXVr4BdQrnRBLdnSNAQh9nx5zVcg8Kv5drUqboaoopZKqTQR2Me",
  "key24": "4Vs9KxbB784jfkVLzZb4JXPkVRp5UXkG4aJksgHazipfDCdauGEdZcUDpkyLq5WTBNMRJLg3Ds8F6st6swRCg2ox",
  "key25": "dRT2cAzwvkzwi88BKDH2aCmxEQ2vfHZQpkwB5M44oxGvbZcJMG5wBNZuAdiUZCVjs3BWR8HFz3UuBpRcogfGPPp",
  "key26": "3hQYhLC5ntgdjqS5giU8QiebYwthBYLN8dkY3vNBeAWuKx4hXq6dRLVfxnA7ns6V4AZJTWBpxiHrqTfby5DEdRZQ",
  "key27": "4znYDQL7BrwcU1gCNaSMSnJV89vbDvmmMW527H41zTErLKEQ3rBrfVAtc8PsywiR4vW9CetZYgG1PGPNb9CY73yA",
  "key28": "54zFKfq1oM8wijXyyeZiceu1zr8Tj4eg9z11xXzYBwP4HpvJ3k5DDWkNXQZP6DwNazWAeAmBfYMoiZrBBdFztomY",
  "key29": "5nC2FY3959feLN1zsR6S85HgarNxWxdjzFpBzDhrsU6g3dHKvQHnnBpPLroiARcfpvn3hAh2KJfGMJvGTRUBo6M"
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
