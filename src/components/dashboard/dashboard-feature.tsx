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
    "124XYv4E78mCvqXPeRGaSK1pNcxxetjqNX4vca5inwJTUsSqJL12iziDHJH4RRrKGDR1mubVMbou6LYWnvJXrdtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gXwsj1hMJ92CfwaK2ohGNhYd5b2UzycrhqduJeJuVtirvzKevNwNyXNXTfkYW35H3RwN1R5f1ZofgMeX1aHCcT7",
  "key1": "YY8iZ6TH2fZ5moGmSDE53PKT6f5ibBDJyzAankmsvjqxJfZmC19KE4sLibe65eUYE1bfDRL4eDLV96NKTUFqUfu",
  "key2": "4A3puu8MGTjKYPoLqsfw78aURufZbVXmX85K1uuhidzEvFPVmGvVwDbm7XvKdHMNA3KrSKJqS2aYmUWEjC3epi1r",
  "key3": "xm6dcaRa5oQ21Z8dcYgF89oFb6EMEorSiS93pUtHuXCPSH4aKkfgAUCzciAUWS5rDyRhuJXxdijxXjVKrDA7rqE",
  "key4": "2BPKYBtKPiZLC6wwVVXe6QsK9CUbeELKQ7JWYK3UfVEkbNRBWYfhqymahwPfkTmBqGHgcGPj4Kwpr7cgN2nQGzxJ",
  "key5": "2bVWQS8pK57xbsKWaUjjXqdwmna8pWXp5C1mhvRkqvziqgkarXd1adb3KHbRCvUxqQVBBazLmAmRVJQZnGm7jS7P",
  "key6": "5hCSz35KaTHvAdP46mkXjga6xLj3TZ7fAMpYeCUb6vYSW7mGcytrT7Y7vjSaspjaYNJaBPckjt6eXZHfAJsP6KXE",
  "key7": "429kRFTNspvFcSVd1vomBeQwrubqsDqRU2LE7BgBfpqbpCBJux7sM16peTHkT8qnNV524C6Nj3TAN9NkKSby1YCJ",
  "key8": "4SB5KSS9SYRc4JPxN9VMVnuzoFW5teMHMc3QfQYNp2ev5A42ZbsbKUQSRe89haVRTBVNHGyZ56ddS3vZ7swb77tF",
  "key9": "3kbbhWjiPVkKhjwMGRYVQB12ELaAnXixrpseRj8GZjjccM78jFM9VeAMK3us8V5XNCn1ka1kuCsi4xeptMNSvSXR",
  "key10": "2GHxkdVKmSsPA2TLNxoMkNRH46hQUD6sUN1YwgRbzZrWnHU1ELEmxbiaGe97Ja4ZUq4dTyTW5Jt5qoN2nEVjt6vj",
  "key11": "3dT8bof3ZEB5wCN6H4Vc7tUpfGVfusYCgs2oxGuHeriKcTqUsNBTbsAbA95AKPuMk7HfXQXMDycQMB1HdHmRRFLQ",
  "key12": "YGCzsqHeLtvEg5wiBvZL1KFvdfm8rXgHup6fJCSQ1VZjaZ7WSGDKRDLQ87E28CfrGtvc9y6hJ9rF62Y1mUZZa9B",
  "key13": "3mzk8MoCcAvmunkuJ3TcYpbmKndZAFYUYEuggWwhEGMCD4oCbeDXtMMtjM6SxVRwZBcu2P8LWkW1gndddz6N2NeH",
  "key14": "3etjsMqE2LzHEQmD34sXU3XfG3x5nA4FeK7wjpAVHTxLUj9aDDwEvcGn67XUkJCNy5j8Cgxjf1JbWbb2nLyHsJdk",
  "key15": "3wgBPe8y9HDSiVWqooEC7Q6z1pnW3dHUqjonQqbso3youVqdVqbzfjf5fopkdNju7b7a4PB6heK7dcoxSbJMVJ3V",
  "key16": "2bPx3tED1ZF9WmtDzeMuhVazXno8meajX4SFPqj6BH5Taz4UVEwNcwq4xMuFjt8AmEmE7P9e92XQQEMNPybbsGSN",
  "key17": "27D6Fa61tsQgdNAcJ2fFLxM4WHjCjXQb1crpizYKuiy1FVe33L5C9LxSUJEufPzdpGjA8AMcdccHn8EuPxnjGL5S",
  "key18": "2L3jZ2sLL3BkcrWtaTBK8VxfJmDRxhP5mKhpSP61rX4CnrxS9BEEN7w7DYcMZFv39XhL7wM25Ry6W8chna53U3U",
  "key19": "4rXDdHycTa76cZiAC9CJ24MDgLV28J4NrLZJWegtJEMYKUYxveMSouQZ91ixzt9kPTLcfkM5JXd2qWpBzNbh6KBB",
  "key20": "5T9ekF8jBUybNTHmG6H577osF3bTRFzhu3MSFYqbYHfpWyaQuJw9puNy1darWmCEHvFU6BdrXb4WCQb8hZVvqhN8",
  "key21": "2jFBhXkcgzGG1N3bEw8CckCHJQrmBzrG9i4swQ3aF2ELke5YtkoLSHMMRikMbRWRRL5bVs2t8G8LqWsZdiWceaoU",
  "key22": "25ys2DuA394nk4WieAN779hc7h4Aj7D2Gn6i3v9LnN6AowCsASPLChPznRFLQmuMdWtG9MXytEPH9Lr72Ksmz7hE",
  "key23": "63Z35CKxTxCsaRV5TjJt2X6AMifgM85mjC2yGwv5M9dHz6c3J1fiVUAuQXHdH2vQBpgGykDwnGxgEWF7oepdZ3b4",
  "key24": "4Qste5L3Lbo1eLQZWdrxFReYLndY6fedrPagmxkKatqzD1U8jzjHfZKXW3mTZr8tYzu4tQte4YkpEipuKAjT4de8",
  "key25": "4gt6tUyjR9QKGdZxXaMz4mbgNoK9Mm3ft1jpG81p1wJsvwFrThcwkXgwVJAuC8tSHojPNqnhCDMb79G615YmjLed",
  "key26": "5qm5HXePbvrzMeoKEQkFiGkfV6G35kJ5sp2EPoLdHwBk7hApEb7n8RT2FacjoXGX4qByjyQtAEcBdtFbTjMagJJ8",
  "key27": "3i3cY1BKt32VG28P2pQgPFH4AWGBAN7EqBqjxPkFcdwLZ9UGb7kXMieJ71NvFyjpgG7rUexBZxzg7WBdwAGJtnPb",
  "key28": "zWAaBZBMihGfN5LCEYeMbvpkYoJWFLxqamznNGghjHQU2Gd7scNxcRDQNJ9shxbZpugv51DBfV8zmkrCfpDdpUJ",
  "key29": "4bM1iZZVkurXx5QWyK6RDsTEZSFaJ3i9JCExKucUf5HkRQdqsg5Nm9GVss8Do5Ka3JvntmhDGDQ5NkvWQUFEcMQh",
  "key30": "5tBzc6xN1ekcctxiG5ZKQub22YiWp2QipYveCkCQq565m5v9Z6rAhgRU853fT18CRi2QVQdhtRhgDgeJF3xEJMM8",
  "key31": "2dLsZxGgaFg9suhpofLLWtfebe4YKtnQbnhg3sE3rdFJDboM5Y1jhurhsuDQXDcKxWBu4YdzgBQj39ViRxv1gZmg"
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
