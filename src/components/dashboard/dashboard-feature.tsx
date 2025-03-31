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
    "25g8pK9gusE5wgPi5uw9mxKhsqk6R6rRaC7LTNQwmSK4L5dtD9ND2jzMugFP5U5g1JaqwYY568VZKUUjf5rTWRqF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KeG4wcQzUy3TrVoNxoygvhj4JTt1fu56Qfru5FX1BzJX4AgpgM46FrGCeGfXHNRdHLr5cHGuqPYpKpCPZ6aszVV",
  "key1": "33aBTa2qQhH3EgYPkv5RnqWoxQwcyGcGSqkeJ1KH3tpqqijmX3eK5F19x9dwC9vLbvEZRzwmvUjx1GM6ZmMQGK1J",
  "key2": "eAGti5mkNtRKX1KEekxTdqjLNWsViyqHV543jERGZ9yafk59jegeQozodXoEgCK8hWqbqohxuC3XKh3bmfRiMRS",
  "key3": "44YtddCfyZfiCWu7PEosZmirkgY1WPsPoz5eaaefyKEEBs4q8K1Ckum9jq6F7RievoKkL7bEoP2W1h25DdaX4mWn",
  "key4": "YYHe2ASm4iUwNfSFQRAMPbYVWfdqxA6SghkavNJbBaW4hxLpzfsMfpvre1tGCj1Ls5MSGBDrDgVYAkr5EsgoCwa",
  "key5": "4RHyACqpRfxQ2XNHraAFWBuTR8saECj7Jv9mStG4dWYX4EGfzCwN31fe8kJn95s9PBsz5vMgEHUQKtuFvAurNSYu",
  "key6": "EFGyavBfsgR2kzCEBeL8CUWJZ6a8ytUt91Gg5Z1uJpG4Eo7dxdJnWUH7uXJANbndUgkLZrDJHbnhVWX4BsMQoLs",
  "key7": "4XiGgyYffZs6VuyJo5Kt5v7V1q7ECnBHhDBvT59T2wzFbPGh3ZzSHyejScEBzwiDcAFHftTWdDVGMXZCC9jqSeJy",
  "key8": "5siyLTx9nYiFFN5i8SPJLfVkk2NcwGer6dtvrCzKQB8Nxz8srXwt4VGyjKy1cgca8BS4MefAZktLCRbzcSe95fec",
  "key9": "HaxFo4odzfyjFyRYzSfqPbkoHvUECF25dRNsAZfJistA44JMBRCxBaVSCxugMoGfUDN9AQzUjRdT2Tf42Yks9mA",
  "key10": "nQ1LWqdqbqMk4uTbo2dB7yEVJaMmSpMssxEf7T9Qy6ZJF5WfsatGUqmvP6qbEPKurh7b9jRU9NZWP5ZDckCVBsU",
  "key11": "3rjAJtExdJkSh9K479NAmiHJySySEbeYfS4dNJZ8N8BgNtFPtQ7xnzz7MvZadhtXPXiDutbZae1vRFSZUpTCZX23",
  "key12": "22wu7M2UEuNooApZz9CkTgbjFXuk2J6wKGkfSHy3M3aS3FES9nLf3ps8b22sM6orE82Ya4XoxMwkMkU21wvpCXrK",
  "key13": "24ZRrsQeZFiuV7WHH6yhNnN4TmWGMWPf2jXg1wioHov1a7y51C7f8RAauMucM5rDiPuf6zToUaBxfYcCVBKzXq5Q",
  "key14": "3erB8GxLR3e9dbHQkBky7podDmELeuf8mLVQfmKm4rm3qrTdj79gA4UqNvaHopgzPittRZebb99nWrWXjY4epoDq",
  "key15": "2MR2LinSkarnzPXQ4GY4jjdFFf25N1XPdCr6K5Jb1GGFa6xcmgAPtCR5pmrCvGN6rgsQQUc3B6dVhwgZiQiD5CbG",
  "key16": "3EYXEgyYMEP7YZF7Krp6Ey8RAXgrqprkJeGmVrfjtoUzqecwd6aak3LdQWW2rAH4paVKB5PoLoopPNcsCV44uJ4k",
  "key17": "518QbnWzDDBfQuuvwrHszHggNhpKLdeEEaoNMHqu16AsiKMHfs24ShpgUSKQxNffKXDHgbfr9F4EXFyZELKd78r6",
  "key18": "dm6Ett2toLanNgESsWMHdBEMY2Z2FSL3ZU9RNCQbu5NH5yxYGTvg9mmDzzwfmbjpPAu7EH4K9U1ia5u9d98StQX",
  "key19": "3Mo4qvEUSfhfPQNgvKhcCvQHVme6zJ8bHgZ2nSomXYqzWDWsdhGxqJNxqrVrfkPTJzxH2TrcJ12vsREt8kZRj1oq",
  "key20": "3ntaH1jFeRhHvQjAUdo87ctNWvtFEbjW9BnDvYtrF7ocR6vha2zYcoPW2pRzBK6dsigM9tVeiYHcty2VvRZJ8tK9",
  "key21": "4DusiGiZKfAyNGAdUC76YhfeJcyLw9UBJE1FryM53ZxYQhJX85mFunEe8QQkp5ughmgt9fttzbGV3g121irskHEp",
  "key22": "5Xa5MFH11vksZQRt57aySEf9ysSz3wi1Y9to6s8NGpKSqGFSCr2YiZnsgrQrqxcnTotuoDxsoZFDyPPvZzUKBuhv",
  "key23": "NycNXdWoAj4UcoetBrCYUcbXbzBRta67udhHdG83b7AbFTtqjJFbkJU3ewWzdPKFhmeY6t2q9Dzd4juP8UMgBWL",
  "key24": "5WvFBXq91mNKASdaUFtiNyA9WF66NrU6X7VK6swcezrSnAfY5p9GNfZQ3je6KfA7WrUmiNV7YWffxSpdmnaBeYMb",
  "key25": "XStPs9SNSf6DimJampd1X16gaKhfiDgK85g4aBTzuwiVKkJbhMjAyX9nnCf5fG6JpFyvvt2xQVoaUJB4kBPPmh5",
  "key26": "2nf2D7iuQFCsGBJSoL9MZnJSagV51xga6xLLV6qFtmEfqrLNMEEYC3C3CV6btzkDEUfJbVyrSBKpwRUv8e6k19uJ",
  "key27": "4Y5joNq5kbMw2ipvXnNA21mTkBEJsgERj7AHFqm44BAi7QxdWZR379G8SiWW1L2gnzjnuBKhjtSn7HvYt9zghtGH",
  "key28": "5BvLj8eFC9fgYzPbXrWFTbtbVVNiirTGsWvzd4X6BDzywPcdxwCicAtFJssp2BXcDb1BUkBQhbLoJeRuzqxJqGDf",
  "key29": "4UvK6wx4Bt49wnKWoqbN4jfTzaBGQWs7rHnAbdvGeySVYgnDLnM85CYLbboVntpozF4nZ55WaT83554h4zU6pk7z",
  "key30": "5eGCRyuTwurFBt8PfhPp6kZEVcG8KWJgRieqPsZaHkH6VeQtPyUu4fSahFMoDePvpnpZhksCT5SE8pqKLQJsX6vc",
  "key31": "4k7vGRZDb9PykUsFQySUSKGvLrxntrQ1gJ9SGDYXxHkmbQJB6GozG7ez5bSadzKrbauS51FvXbZ7vBUXXxZkfHNn",
  "key32": "kj1ooPm2rRuwTZZoEQyScD6VWeehtzhTEdW5d5qxAY6K3ybKLHDCh8W3nE8ujvmGp6N2UK21N6H52fehUa9mQXX",
  "key33": "2YTnXBjzaSaHAMJ5aKkVMzTwcxaQ639DeigWxzqW8D2qPnRbuxSU2XitExcAdjqSojQwgYbxHseKLe7ANL159JKh",
  "key34": "22ogH2TRU5XjwDJhvtLjrPH47SpQ2vsdcCZ865AMWKa6VbMqXmUK8pwY2EKJL6i1SbvwAAdcE5tdAgNC8wAj8ucZ"
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
