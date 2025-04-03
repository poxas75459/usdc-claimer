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
    "5xehZ7eQ8ubUrK3NwqQB13niikgvrPHfVb9MLudyVRVSwP2BYR3A4RbrWWkgsuhpusGQLsGU3kzwS9ixcd4R3pdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BWoarLh7Cb441avK3RnZfj7CUjfhYTov68mW1MJwNwSYUtFFCJbVZ5Guqg6R5wrLfexF2GXnLVC9E5eQ5tesXLP",
  "key1": "4evHQoH3UTF8sUBi5K4xt6BxwZcZ5Fw2H5hHNHmicLDUm6eQWHDagfWhTsECNb6qF7Lg54bBJyBHyy8w6VkcdQSk",
  "key2": "5qD7JLHEATDsvusdmHy5krT8KyV3UE5QQKjAAXEWBWs1w6MUETpujXAAMadPYj1j48kW6bHmnZatmUhxQbhAgYYT",
  "key3": "5UzgRrESom7vww4V5KiywFiK3g6GqYiTtc5qRPZdMg9UVttPwXXmwurCumLYnWfMfpyvVM8Y8KbQaYvW1VipzCJM",
  "key4": "6sk6LowMtnX8pex3fqS5mDtiNNWP8SLSF76636Cz1oXUsr8nU2sLStz5M7KRxQQGThLsfc8niPUjqxGz3HCymXu",
  "key5": "5QfaYehWnyFDVQCreiNoZ5xFw16DzQFW3TQ5txdNGQKdcCrSY9DTLhjmjFjYJj6HCV56YDGY93tWYGRHcuW9Tgum",
  "key6": "2BDKqCgqrV1Km1ReUR5C6JzyCb1XoWmshn5G6RmxWgPZRybro3DPDzD8sN4hWuVG4E9ptGbfAeek3vYvZ7gxEHDj",
  "key7": "5EkousNekUZ5vPNFb3ve6FWhbNTdLR8JowqcMAfCmbVamUvJXpwnNqyonpgX2ZMoCLN1DqTKR2HmJ69XSoZmcfu1",
  "key8": "ve2fLVKucqFRMRGau1jvLmQeACebHEd2vwgMKArJtMFkyvKVYhycqUgpStNaiyKCPtoLAQLrYn6FuMzTRVkp9bh",
  "key9": "2PdqRmoZkGiQfW94xDHJYgSfvYC1T7K5d7VZXcuBaA59hEwfemXkVRJDtcsfSEDyX91k3LRHsHjRhL9Q2WvZqeDE",
  "key10": "VY11mmcjXs8vVaw3aFc8PhNWtURDGtpKBBo9awwK97wNgY1AEf9n2JZaiwta4bUm7yA4S1yqss5fCrSVWNvw7sQ",
  "key11": "4GVCXAQcwz3gP5rKjXx5BiWZLi5YGyMy7qDCjSYk6Wx1GhfTVMKg29MiFLCRSwjechX48BsJSBpRPDaTejWVgXJR",
  "key12": "44nbruAZBMCAUghFe7r92ta3mnur5gsdN6xfRMcNGhhaNyhgzpEt1XEGntTUiqJzgfJ8CM5V98Ws1ktAbX6xJb84",
  "key13": "pUQyNzhtayPtrmKgjajzzCxaMC4U5spzz3nd3hbeLzasKX5PPvpsFFhqNxyWTPJQGRu6zzYDhFgVe3XwBGVEyP7",
  "key14": "4VbrANsAbKTu1fNFD4GTBmfNLcpYXnA1KkdmE7jpAeMDvX2NfWMHprJdNHhfbZy1ydmKyMXe9iHUppmUdafFvQ3X",
  "key15": "3ginY3amCsk1nLqApLHajRJF3QX3widYX6ZLHjBreqwM2ksvEPz8FkzremQizqe7SzK9yUzWdFACwhTP8mC2quz5",
  "key16": "4uu7fJ5MVARVXqJ1vpZhj2XQy72rhKJVemm6UqHeUTwvZsnDSQbwWij6xfqDKXYPHiu96AiAQWHBzx25Mi6KNrJq",
  "key17": "2V1yWgGfShoXbzQ5SAiGJEd5H6zdsbZbNvyuLEV7SoUbk3gawYJMQM4Vju1YGMvXT3qkrLWa1eEhvgLpgQKd1gzD",
  "key18": "4HsZRcpXKkTJBX2NW7DtZBfDWuiaVyDZaBFt4JgELSkhSEspihooZZG7vXNu5hWV8P4fNFZszGJbmw22YKWT43ic",
  "key19": "2AnPVJatdDPhgcgQFcXVL2ogq7N35jpYkq9Citta1CznZkNda9SJbKAKH9yLdCVH4sSk74xnYbE7V7ahFLb8SiMJ",
  "key20": "5hFk1BdGAesZdZW1bUU2HTiRwNM1RRwWvdqFbN1XmnShV1dvjWmzbR9VMaSWRyR1ii1xUQ5sxxLjmV9DVnPk1ssm",
  "key21": "E1kkmXnDKatYFRGAZMj3nLAa8AAHMBtFmEwCbPFPLjmZWn5bhuMJfwvgYFbrsFxBVCzVr9mr8YppPvTxpExdW3e",
  "key22": "3q6jdDiWmH6mfVXHYVW5RtGDZxXkzBJVFvdDzUJA86XdDAqyMg11XRGo69ucUBepC813CofP3DS374Dwyr1AJtc7",
  "key23": "2LdtCeu6Qb13zQpiZyKSvGp2Tm66qzC2ZCRSYpDEGodiAL1o8Amzrs9CUupfAazTmvbJbLgig5VSgUvm2Lm3gshH",
  "key24": "3LwZ3MvF9GtPEY4ca5PVFVsknFpgqnAK5zx6d2YmRBkcrP3gdngjRW1TuKwgdbiAimmzJj6Q44MsrNoTd5B8T5Zd",
  "key25": "4gcjf1oPrgXyVpuLSJUrA7gPqjpM7ZUAahFvVkZWZ6bJHMnKnKRrcnK95tfmzuovgio5zvqBtUgC7r7KHWPVedWj",
  "key26": "2gtMwjNkSqt1hooXSaiAZzo7ybCbJdJbVg39WQBwqmuS61vsnKkRcQBytnNkRdjQUdrHgKCbyMiYtKnYBwmFbYRp",
  "key27": "5PeRP2c8ZFGHs6Fjk17zkDRCZ7u7LtpH6ndS3UvyP7PFLYBjpzp9bA8wdeVUMwVWDYbXajuDw9CeFGd6VW35z9sq",
  "key28": "2GU82tZQESUp3koVRnpdbqWwaqKbTYEY7jyTAp1WNSeVyep9AHLxoQTdA8jegieFq5n33qaw8bPAfKX2FQ3PeuqL",
  "key29": "2xvX4fcqMg1j2vaEAJ5Fcf4Y9qXFfcGpF7w2deYB1P7av51J5oPcYYFcqB6o2bqSD91fJntRuq8mgeEfmzjBSwZG",
  "key30": "weyteVpnrjBEWYFx9VauLnuEq65bdsJuSLGLmx49z7TMEpBEAggjAAwwNYqqwh5oBrTv33dqKDBcGDSQTd5oVCZ",
  "key31": "EBaCAJMk4iMTtG24SdDyn9ub576TiedDNE4hssm352MYbDALKRon6jKFvqiBdHqH1nWnZNgyLJuZvpGYvvRr2Mq",
  "key32": "RpedzFLz8zK5CTAsAEYEwo4eLoqBGLuXHmRpCQrg54UZQzyRA31SiAd9Cmt6XB4cDa5erGDRWkQEH9HqwpF7UQD",
  "key33": "4zja2LUWgsNBTiGkH6nVVT9EKPh1n8W3RhYhznspQwS9wXHgBDqgQ3beAz4xnQFkxfXBcX41UrHweTuC5KwuWTFj",
  "key34": "26BFabe1Jdt5uGZGDi1rzbXNHsjgXQLiYL1Pb228ZDbcfDGS9bdkjXAzzWEy8JAn9SDLxYFQpFi8yhFrffJffb9E",
  "key35": "4bjowGDZXiEAhnVNUUUU2HkoYEq1voJ6Q8fb18CzWkVGyURZo53cD3fpZrVMfg7K7Pz21NJ5fSvzLVbJ8Etz7W1H",
  "key36": "3uS6pBHPoNPCYMfwpNFyrgkNBAbXMpCmzhrN7nn6F51m5suQ4C1HgHDo8TvcHoAQEUBPMASeBVKzXzSz2fyPiRtE",
  "key37": "4NhtXhmjFCF95CcfRetKdLMnYin95Dcbe1m69951HTHpYtKe9pLTAfw49zN5uXBtC4JHCPz6uTyw9e6iK5fooZd",
  "key38": "4qdEtqn2wM3inReJz5qDqsGvTX35QDUJDUWgZ4LbZDKSBALz6hoovrHjJgH6Cnj3yqTGe71StEHDSLozojEciQoq",
  "key39": "5UUJGRer66fXPmoHrhu9HkkADtHnTE1EJBMZT9spXNwMHJ8sBtFaSeGyYNii9cby5JcWmPZBv1WScRVNrP8wVspi",
  "key40": "bUdctB4iAexYyvqnCgv9EJ1R5E8gXv8HNK9zg1anpuVLtJG1WGERdtkdP8XRKiVbvGLt57RjUMMKzY73sDEKUuM",
  "key41": "4mF1cMbNd93qQ6DJMpiKubCNXMZUrzwL8EGZ53nwt1fd7XG9vtCf4STwJGAdqAUdQXz2SQJmkw7ceCagANdRvVEp"
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
