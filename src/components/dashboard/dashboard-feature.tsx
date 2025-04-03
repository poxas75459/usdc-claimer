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
    "2GCpdPL6eM2LGq9mEVLRAC9MHghWDZdj5qtwuk9VDY5LGLx5kuCBxKjWP3jqSe4McjzxZ4RZuNeAtuNYw7S718P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YexzKezz917UtpT3DJz7byvPEoR67b5rhzeJZChRGhzXRuPCuc8D25iDi4jZuEPzhUunFFtmmwTzZ6PQKPeDT4S",
  "key1": "2fqFQLj6Q96x8rCNoYpRf4WPVfHXDFgNmaZmNRRG4Zz3vRCdJ9FSdPtj4PgJXGPMasyGtVArveCZ8BJ3zMkdEBSE",
  "key2": "3VBSetUF1r74gAqikn1MPMv6pXzLYrx3V834pYiBbwzbQyUuSGHLNnPWfcV9h3dTMGKoiXm8nzgkxUpQ689yAXRW",
  "key3": "5bTSGA9HLYzP8TgoRvBDLKjmFuxD61PZUfGFxa2cWujhsBmkkQzaLGp6z5CTirK9fDtZDncdfmF8zZehnonHnbdf",
  "key4": "4eSky8hDi6a2izCnY8FJDCW18ZN4hj2JEZ4DqZG4zJdm6va5mXRVFt7YixJktDYfxjAuoNMj9pyLwqYVNp6Ucutx",
  "key5": "5584yC1CFMTcmWQFFNd2cwiw2BTBE4b4H9C82a1HEorpRBpKMfsU4q6qG6ZVb46JKVnyLKZwxK1kJRWMyaVxqQ7M",
  "key6": "333v49DVRvRYLn6nmyTpgP1As7kZzy91JJTEXkZNz7ofKoewCJZVa1dPZ1ovHdL1ByD8UKWtcU7fyzhQLykkjswQ",
  "key7": "52GHwiAtj6zCD7DpzeyeBQmCphMa1qy6eMEkydxTeDAqAJCm2vmpPXv6gvoKDUJiEwfxQiM1gfuGnEvYxS1icAQz",
  "key8": "CChSp7sr2NmJWkdWSmzZ6VLXk4qiPahCFT1Nk3TbDmMjNoHhfTJa5eLCow7k5zoC9buJEEtqHZW5NpiLQxEdgPB",
  "key9": "3KfPfiX7u9R9WLTZnYUZmZ1sSKBvvDcVKZFQQQopgf8bgomktM6pQ6d7cDWz5jSZ54GxiLyPiMFt6UtUxjwAu3U3",
  "key10": "2iRBowqyNKPsAtPpNqAGdKgRfRoyQ3qtrCVA3QRc5hnX9qwm992xQ9E9wD8R7W5Bnj8nXHWhseM1LnPkwfrbLgXQ",
  "key11": "54qkTcFUKXATDR7ENVkcbi8BAvsMdSfbWD5vLXtLrcMr6JKZwuP5qiqUxPpQvRmVKXmbRusYdgpcVmPaGC21og8F",
  "key12": "4tLMwtDorCLLSQBRJRFnZyUmBkFYQrEii1YJKBBEs14bEVhFWy39P1TA4UbPkzMYn39daZ1eba1vkdgWHFsVsveU",
  "key13": "33yYRFeQ1fJMkPrvTWbGavsEHUDSUr6PdhDN6yd8y1ERnkiz1UUdYHtogzQyYAGZeyZ6U39Hs3GbaTxU8sVXPPns",
  "key14": "3ZPP1smao9RnSG3aQpMy7hchsHacUKwq5E5RP6eJZ3BvXPZs1qWrt7JNqJ3HzyXxSxaZefF6ioPAiXpMuEdWJL8M",
  "key15": "2bYt18zT218xHfnnG9ge8PaSPWShh52f8SXufn2QCMJUukfhbMrTg3JFrbFMzeC8CuTEprce6PubfgUXqRSy9Mo7",
  "key16": "GLUvBHRcBwSF9LwfsdnAnFPMqzc9c2xbvixu9dS1vkHPXQvBBWEX6nabSbbEmcBkwBNDy5p7ivfrzvtyFKJYuoQ",
  "key17": "26Pi2PTzRhYXvTQKkDtDiTGr3DRtcZPFbRKpp7xr1k9NfAoai8RhfiDnqzcJbW49pc2Z8NmGL1D2NLppmQfFkMf9",
  "key18": "2an8M5CNE1qg9baZcRyUjcGHDuaiC8VEMDCDZNh8bduoqYcvLmaWvXAdNeYe9FjsmHwEYARCBZkebAEYaUQGrcXP",
  "key19": "5wLm7CAViQwP51VzL9qR6KBvcawe3dTRxCvxRTHdiT7QCWVb83X3W5jLnZQknj1r1916fDWuKix3AmpDMzHABByh",
  "key20": "2ujjxa7dUpZoZXEXKV7ABHgXZxRgGB9vADESbD7sijQmKT3s51wM1ZxopNXAWQrvJXcZFj61YwRkUhfjkwi1UxL2",
  "key21": "5zLkZ8JYVzYuVszW79kzg1voyEZpn5v1gsjeioKxGnyK6d5RB23cQyqn9DeRgAMsiGPUyH8Vu6jGKGkCDCc5hqJF",
  "key22": "48unyBFyEqjvsuEtWigzQoz3F5dYhioC6EFu89sZSJDjq5JYih2HoYw2YGmiKRGUyD6PNeJPfHv6p5rfcTzTuAnw",
  "key23": "5jPUTjJ1okyYXtxJkHyjDQw6HMYX9EZdjdtBxQa1Qon3PoJgb4iRJSJqKWBCFDhUtQSKCjbeeaZhHU9rNB9gQseH",
  "key24": "2UFrngEiYF86fwNqJh7ChLJRNCBijQ7qPHwsV6wCYn8J1oWxjduWquTSGuuy6qbum4PNo31zKbikb32CyYJA7mca",
  "key25": "2WiyuDfPZg3Qxbr1MH7AifpahptjtoxZWfywcTL7A9x4b4iJybJguX5kNTkqFVZiCQBqpx46HRVQ1tRM2kSZaT5K",
  "key26": "5P28aYg6bosVdxDq28SnKMS5a2fXojjKULzEcf2oNPJ7e1Yhmj1rPNWasZ17yaQdQ9A2Hg5WUqHoGeTRZb1j3LFE",
  "key27": "21GsjnfngcUMY9yBSyXSpy6uephvGtyMtktyuH1122m3zGy5Bi7LPR9UARecQnym2WGZv19H5M6od7FmSFp91uE7",
  "key28": "2mmGENQQW2ijEwm61vqBbKWF79CUDDbLAV29i14939DTkcMUa6aeXiJneZdnb5ioiqJfYHARFhp24sMvN9EZhyFs",
  "key29": "2tWtZ4XrmNrX7YA9ZEQHuuXTPrpRWqNniq1p1NYScXztb4PY9fijMiGBK9pPjhz76fieptj9MTqatH4g3Kt1Zkzb",
  "key30": "3gUhYB9kEoPhf2qB6sZKfD1zSGzPSHTaDyekMcYUzBWZtecJowMePbNyfuRLvo19LnJtVrF95w2zWBZcLE3JLc1o",
  "key31": "22LrQssBhZ9zdR5QiwbjDRoS7CUVSCs3GvoWcSjasP2QxEzzffaozP7TkaMA49LTHgLXjuhmYJQmgo9WQjpz5sVL",
  "key32": "51wTKC25zRmRE1WZx6sPo4cU6A8xd58rmd9jRBNehYQqHoBbSf3V5GjbXvdAA6neDX3xRbpKTqBEZEsbJ3KtWnzm"
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
