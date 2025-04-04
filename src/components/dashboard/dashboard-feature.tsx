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
    "79AstM3ndqBuoT2oBhboVVsDpp1GYx7pnKK2QP3FjxgweN8FDdufJApkkwN32EKZgp2p4zpDUkRP7KLZk3QK6tF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JcW6585GqLQnNQu17tTqRL77taam9hbeetwwSH1ELdPJGmRxEd1rgp9vFNdZJWaTksh5SB2Re7mJV4Jiz4KME49",
  "key1": "5JSf4Jc9D7GDxUi48T58RDXWMQrKkTw1MwnajpqPmXQuVSFhbovLG86EoqRjyQUNtAPYB5XrtWsAKg38JEHujvYZ",
  "key2": "3W2R9jJbcHQcvHraK3sZDXMdQkgvC6tCWBDUEY6jDVxRA5VhEfNR8kHqfbPgA1pDpuHLmremReysgHHbU3AnMZzU",
  "key3": "JLRgcSz5THxLvUyCXoJjVYpQV9a58qEKVSgpLDtqNjE86ndG3vTywALu3GxPbLjtYSTDYkjoWUkV89LwcFa34SB",
  "key4": "676NgV5GdCfkyk17JY3AkabSW5RF9D8aFzRRgGeSKzaZ1yFmCndfpeT3Hf2BGSZ3Lbq3e7VbfWkUDuh3FhUz7LWX",
  "key5": "54ae47wa275nBP2Lb3yiEVGKdzGtgPnQJ3bLEJH6mzAEo7ouvp4PAiTYaFc91KMC7zMz4x3Wkr8KPtaZG4KfQyPV",
  "key6": "549ieKXDEhRGgwczAiekbyqdf7jSYPnxWpCW8Djt1B4NX16w6FtyGqZqDXiegtoKnASQNTQzB2H1jBnKoNhT14dJ",
  "key7": "FcxHViqqvitKAT9LoUJFzHNwm1BBjydpgEiAYwic94ksBiPrcjoxVhLvU1K5fxQUhhqC1XxsTRbMGBeGjHQsTVK",
  "key8": "3NSq8vbrGjYmZFsgkGe4FjMypYHu78RcPhQy2Qc3S6x5KDTVesYq77v9kJLrDGMduMY9M9rXj8L9USe4Lk9QthKN",
  "key9": "5L2n4YtsaGhcysF4wgGga4xgpftkXsf9angNurJiFKSJoeXNYiEctgwatdJbdYhRGJhBbwp4V1A53vgR3tAUJYww",
  "key10": "4FRBFF9pHCkMcWh6EUitc4RTfwJcRSVG6QbAurs1qMkmWEJ1wY7kM59h3LX1NWh1Bk5vPattjf9PYQF9tSaGdNWC",
  "key11": "re1hjmtFU3jkzw99wrxGK9SUefUu8nxZDRujfD7njGgPtuCbsHVazfEUgiQLePcLBi6Gb2m5V1ZsLKJ5mVbHcBQ",
  "key12": "5PGAtFdsh7vWwud7sG7N1HLTPkrJpac14wfYPKu5p6rKsPntVK7zWZD4nMvTue2CLrRekkuNbkpg3xzUYQtvCiju",
  "key13": "WC1LQL9LxkiNXpjbBrYUWjPw9YvufzwjVMWJoSuQEw3FdbVHaRWjNsGdGVv3yo22dqqJA91izBtnXeQXDhBvmz1",
  "key14": "4iLhxiumXU9PwQRgL2yfvEPaCMfpeMRVHtVJNrQSAjZjQ4No9knGGqahbn9noy376W6Q3dTCCx2QVMf35AaEh6TH",
  "key15": "5AhGARSeUBT9Q8ctYUYXWSNJykjX1P4K2bTJ6Vo1S4a7NeZZSnd9PN8zcQi2gFXaSf3R2S8Yu6T5u5LD9ao39ukr",
  "key16": "28DamftqPQoskC4RcTxwF54G34pAk7Ah5XsM3QV7Q3dJL9cHq7EN6Nq4hkFQu8h3o5fC7Bp274KNATFUyLKFFJTT",
  "key17": "45fUpjXg1chj9N8HqLR7bGWEYSLyL7JAL1WniVeJjyzG5egLjSyg8XH7oTqmUGqTWyB1ErubT7G8C6m9fcG9N6jq",
  "key18": "54pspnW4SdgCDXUGyA1VwDsTSfdQo3YktjN35pZbzQhY5q3QJkK2tBPQHyh8qTRUXJkidh9NbnyekNyL8chyBn3A",
  "key19": "2J6qxgE6THEeRx6aQaWDqLoSGRKHxCtdYXanjokmoLXSXQygfsV7PqTjAHk1g1o2mM9dtj1uLYs5WUnUT4KTJzfc",
  "key20": "66p8CanNFsAXELAkmHT896CXyWVDJCgvcLjURjdGqx1oSySQZ9Pb2SA7SyQ8gw7wF6H5Fx7ZCZSmYQRu9MrsmYjz",
  "key21": "CbeV8T1BfvgVsrFT7zDUMy7cXTe4LStWtYqQieWv81YqNf3kKvWWA2ivserg88KBCKRxtfQdcPD9edx1GxnmQ4V",
  "key22": "21T585u7emFqMsHbEx8wKefRMs3MgGZBPFELeYcdKZnCoA8FS3k7U5hPH1oWfBjQ9pT6icgBVGNfnYL1BqASrikq",
  "key23": "pzVsTyemQ12Nk5jTcfLp8u55unCh5LHEy4qa382Z2QZVFoe2bnvX5t6ieGw8S4UKnYed2ZVzEU3CmvYBieeGzgb",
  "key24": "5FQeF26EyZBaGr5rQ9aKNt66U6PEfCvu9DPiGkysQZLGLMpFQZxqYufbzsStNgyqesiBuphgGbkuEMpoGqS5X6KX",
  "key25": "hERk1AcT669QzNydJcCbGwfWcxPUes41zcBUzo59WR4W4AyxyyUPfCtGwtPETpMdMSgjeo7nAeHFfUg9RyM4qj8",
  "key26": "697k1RH5gpwWJXCHDdrY6MXGyEbXjmZRftfLGB6ceHA1vGtPcwkAyM7doQ8His8rbriwnMHidMQ6Eg2c5C2JK9h",
  "key27": "3Fy6Vo1Hdrho2Hbn924HhUwEgSTw7hHS8GifGFDNbuJTTUNWiv34cHFeXCysBmVGpjKrD5rGxzfVV49xD9UDMzMU",
  "key28": "2dHdQERTsqU2gDEdDtHPaRk7SZt4yiF7YKLJCaxvTJkxGbQ2uGoLBRdD3efZVaNcE8c2cTj9e7HEWFJABu6ki5er",
  "key29": "28cCXGmXSzauE9v4aWFijQfxm9zd7UDh4PgR9MhBpR4XiFXwrftLgzX2C4wU7jxSpyTQ7TnxXVxaJJxsjpGLz2MS"
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
