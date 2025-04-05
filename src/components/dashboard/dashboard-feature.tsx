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
    "3vFhrXWVLra1gCceQRUE2nXoab21S8GoQJ64zjJLBxNwcsH9h3A1FyJZYaGjYJaPwQGLP5awPtNA3NdnGz68hitN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31GcKagxwSgT7PBWPrWKtQgSttygQgYaxJ7Ng9bYfkFigH8nYBmRMiWcpAtDjYWumgdmMeLAZXZ6rN1f8kaxrz5S",
  "key1": "5ydJ6gk2v4rxtWq1HycrGAmeTPs5G99dtZ6snYYs963doLB7We4YDfWUSuna77Dsr8PbQSbnyRdrpfRhMS5yJwFd",
  "key2": "5ePhSb5AmcvN658EG45cutxNUihj2XDNB8e32da8W85XzGtKq2FS4MfLYGG8wLD3tBrH5t97atvdFNnCXTiELBhL",
  "key3": "4JciyxzYGQi8naoukJ7LjTc96mSEuEyne5EUt7jXjPSomQCsBCPhDJmWGrkfvzzUJL1DbqHkqDdSF6U8rZwFDCDE",
  "key4": "3g4DZUk6S9DmRFN6rqYmNwTiY3aFG5ixkDBYnF1gCD8YjgUarAKkaSrSxncbcYGojudB7svBtj2tzALqErVcmyeo",
  "key5": "2ta5K7FD2BXJv3C7387iqsUQRUw4YA6tvHMZAqcj2hJTmteasC1eXgBVec8XoZu7sf8W855ZaTV9B9nT8q36QwYN",
  "key6": "44LjzhzZNhzxm3ATjpDvo5Ep6ywX5dRJiiEr398NbQYwnMoDtAwRmdbyaXpka52WRXK5RddqMBKYJAQUuMvqZskL",
  "key7": "27qBau33A1RN5L1mQtg5kysCj1462kF3v9wsDur8mnb2CPwgYCXJLLTDitSRGWPr2t5xJYS5gnyHhf1dqGi4vqfo",
  "key8": "WFDmesD1Hp9iqQmyE9ajmJ5VJzfxogrcJhwgDJ96NYgkCwMgoBgvErcwaFn88ni2X3oQy5efPXdn3FJU7cNLrR2",
  "key9": "4N6JXzpHbGK3bednMaz48FDFNKhGLBLqdfxft3Ke7NdVCi62iNRn7UPsTQXZXUNiceVbbk8SUZJn85dNZaRYcS8n",
  "key10": "42N3G3EPvVNhHJ5VxCobq64z9oRogfVHPjHBKXvzRedKGWfSutFckVSrmjqbqYetMAJ368d8hED82xYbAJ5EnKbP",
  "key11": "zvftxAq3QRCZQUWPMLSTG4PNUKGNbwpUM8cgVJEA5SH3BUf8C1qAHkBdTmUPAPYq6uAUihjixtH6brghgXeAr4C",
  "key12": "qAwDvzF77pLQioFBNsEqxoJuuCVTawEGm5CeACboJRhah1TDoNASwBJ2xScQjuTSskdE1kzX5YtCCEpSCUAsAq7",
  "key13": "k9h21XYCXyZxkiN1pCvTTXCie3M6rEV9S9MHF4srHivhBaWnRS82E3oDbySksKQSsULzsjNHXmPUzke5sxcxmtM",
  "key14": "52JHx4WuRvzbeSsd1akLcf1nUZ7wQtfJmBxw3JGiL6aymRwwBnAeWMBBcHEjiyAxVPfCkzoZoBPXssdwnD3sAyAL",
  "key15": "5YvDyMqH6t1mPJivJmQxR16FJCvaBdj369mGzi24aAQfb6S7FL5SNibVQp2aJoebGzMF1Vzfxk5NWXgda6j1weKN",
  "key16": "2SFMqTLnCwth9jXYuRmksA24rmvEemGU6AEjSmcMbEG6Pfge24jcBMqkTYPtvtqNM8gfUbgiwUjbmhHWGnGCorug",
  "key17": "55794d8reKzn2P3rB55n3sfrPbjjA7xFoRHBFcyY38C1XWx9ndGoyZ6UT6hAszRqmMiQ8cqcVB8UoYvEBtoHhZu2",
  "key18": "55xNobH9Ab9QzRh9ShVpYLL9EQcusqf4vuHdASLo6kGAzLbdLsmQVkgjw7VBGXuJ5BpiWDj35icX5cDrDTrWGWaX",
  "key19": "4QNB89YjvF4y1b4ZCCo6hbcSZKdRxz3Zj8gJJTjK2Rn73zhkKkYxo6fYevGuQVK4kPnLmyZLGE6f2if5SxvyCBqU",
  "key20": "5jpZSANUDFvD3RcNzSYMArLSKburXawZUrczEgkWMTV35EykrSUy6f9e6YGJW7EEZSEHf1mVaQaCUo2ubkNxZ7DA",
  "key21": "3EgyMAy4T5tqfSRTTqCC1VLQJxgtS23TS1VunTJ71CrKX5pohKbWXq1N86Kv5oKFFzzd4MfLUhb3MZFiwMy7X4pF",
  "key22": "XGeZ93yK3o8gE1y9DF9VdHneDXC1eg3F7dzQpQFuDGXBMS8WFW2b5Uh3rTwQkXT26PgQMpesS1ntrMEALNmBERq",
  "key23": "2Li5W5e1rAKhHnAgPVyffjuVG5yjvwBqA1p757vEvqg1TZECxD8dp8VVEGo77znYhWPVjYRYWKfA8seY6AtpRgMn",
  "key24": "3RXYM3ex8vdT1uszNqX9mZMtGAH4JMCnmr4cyTETdH1FxVgKAY7MGxH4s6hA2KUz1JLqBE8Fk3Wn7CMtCSECVFM"
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
