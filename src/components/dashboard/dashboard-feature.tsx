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
    "2wRyBLdQN6CJThG7zpU5ZhpepXCQ5JBtYGLaQXgknXk38nc1jnkBYSZV7ZdAcLMCJMsrYDVKe3cTTuNesdpt9HwD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rnMJJegnVxL9Cy64HvPpUR7dDum9yQF977AHbWzzL1kEnSf4PUiQ6ZK5zZr4xfH93C26TKEmsAci9tMoTz5FzMP",
  "key1": "5Ro5ActRAfeM5S4ZX7TTtDBvvd5u3H3iAUJDLKx24aCpETLz3k2sbP78xWcuw4HE6agb25YypjHjdPMrvVKdRS8c",
  "key2": "29CmnsXXaPFvf5gscWLaaG77WTAzi5kvFLC5HL9tkC8JR5adDSGLC22kaMsapEGVcnGKX5GNg8HRSHes8nBuYFHn",
  "key3": "3RY2CJvZ99oBc6BvfyXKKDiZS3VwSw1LdnDSpyA5cb9eaDXFaTm8Pk24FTAS2V1xSWYiyWBiqTeddgTgMo9JrWtw",
  "key4": "3StsHA41Fxh9puHqjEcxTZrf7tkcq7f3Ha3NioHy6gRWgUVUcMwYhc7MyVFUUpCzoBRn66M9gCFvRNmEbd9mJLX9",
  "key5": "572nrRwYgnbpcYt4KjPm1KmiaExbyfzQ7A3Ex1PPszxTgNRkaKk9Jr8oUCKNCzbaMnGKi2zjuU5uk7x1wKooWJwM",
  "key6": "KWkjb45f4b2AwMM9bKRdnW14FRZ8UtJdenb9A92HT7yzCj6FuoD6DtibLaVKEr2fPDfdpcd1ci1dbHw9TXKySzk",
  "key7": "58EsCzgErCt9gFM5wy8fHHNG7EMj8PN9krR1AStPXiiGyWYLEVW7maYJBFzxHh8yjpUQM2egdFHqSLHjz94NFX3j",
  "key8": "2ypN3v2HQKArG7mNKnRih4Qrnhno59k7kgCpxbHCotsLnUz1YBSNfAaMCzQrfwDL93TGStXjmQng4gKDC3wwrQbR",
  "key9": "2iGhBgdgK9v8Sed5TyfbA7JfvCNjJXniUuevsSB5PKgDKUUPxMPEbbgtZjjbdYzuVHshWCTM8Z4EY4YZXd9166GL",
  "key10": "ayMffVrRYy6QNTwkArySoo3sQAHwBfGLrpcuUH8n7Sr1wQwSXiJFYGBGYVCEhNnDdTEb4FdUTKxKU4A8H9WyAXy",
  "key11": "5Xzhy62timxa4eB1exv1eLc8qtfkxfEHxeKdAW6wkZfdPXpf8reoYvMWDWTDB4eYHoQFRN6MeCAwaVTUh65ebAsD",
  "key12": "5j1qxKwdLD1LVHHM5xEKK814HANq2bv5f147g3xcH61Wt78TKbJxBGAYQrjbwfh411sYXYFANKp5YDGQ5s9J1Fvk",
  "key13": "25WpTYCAgnajM1VLfhzWB7bgYJ1DGQmzEfJbiRHYsBbZSq15RTBm3TL8T6Zv9fyNy4Z438rSLGfW5JAtoMr7Cja4",
  "key14": "k477FyXWgZhVLkD5vwYEX5ufX8hawMdMfNg5MrD3iFFgULV2sMHL1L556166jeKLsp4ZkWVtyEFEanANwwFjdGr",
  "key15": "646RvtXtZFSvutCKbZQLYbr9dFi5EGeDgemWYvMQ24facZ3Gf4dH7MbFbvxAbAD3ZxuUwuNapqMYV5q5uJjzuueJ",
  "key16": "hXW1Fet6V5XoXzRotVgdbG9AVxtrLqmWUVFzHuFdD8dfUwSKrsiCBL9KPsvBeE9YX8ak671yy5zABoayvnTV3aC",
  "key17": "nTqMJxf5BFWBc4f2tVM814n8tXNipJr1HQoUrLC3rv7vfsKEGCH5W1ctHvqtr9BJPGX9WgpiQLNWLnd72kwppwR",
  "key18": "22hdPMgTQhPSuDJmrYv2wJpYx6KgGSRa5CgTS8QBtmkkWjnyRU5RGXWW2gcQo58UZeneYjGzYfmsYTHND9jiiuqd",
  "key19": "3yWhCS83PmWTRrV1HeaQ45SfaFarpUtXoyXbN7SMAnuBBV5eqkBDCuXw8WjGQYxbqXMsKLo59PqsoZrbZZUQF6Aw",
  "key20": "anrt5xpRmVhNg3fTdkmHReAZNfdX3ZN7U6ShJR3nWnV93SvVPagoX1SCmRZtH4BbuinbfCyX889AhW4kZU1b9p9",
  "key21": "3YmjkMdAT7KptGJbtAhSk2Uc58VPy6jg4YtMbGaE9LoUzzLER4j9Zw7DrXncC3YRA3bp6DWxtKawmA5MuAchU6ed",
  "key22": "5pKEZrtjk76TD96BxosXBxUZ2p6sVMGpZK7tsWPf8eUU6PZES2xrC4yYCBnB8Y1kELSHNC6mrw6zLLKSa5zSnugr",
  "key23": "36bd1LxXkTUQJGLE1aCXG6fM4kxuDVVVD7woFwiKqWJQb6yXEnuEiKsYGbCuuSoHisVQH2KtwV45CDVwV7cHDWdr",
  "key24": "4rktarVJiwhHRuKGWXiHr1mzzbSFmrJL5nmMaMMLGKyVifmnyvKhp2B7nhATdy9pYzia69S2r5SwytvqBU8csG7E",
  "key25": "4k4RhNTuWgERJyiPz1MzkRsCfbmnqQz5q9HLfy8QnoXdSH8Bk7ASUpQQF1wXWRe4MU1i4gwiajp4gx5ob738dXeh",
  "key26": "LCHaJfLpEcjrx8PTHzkSTaceq2yZgFaKwRPio5vHCn6qkeq9q9y2K4ezcyfF91UDJ6x4RQizpQwV7mW1JKArrZ2",
  "key27": "pYKhmVwQTCBfyfh9rPPxg9NFUF8jCn9AUaPdKu5YgXtzbypgRR1y1QhSMbp8oRXki8nDMMFzWh9PnVDcGVUGUXN",
  "key28": "4UsuBovtfbBtag1vN7eXs4TM8KAW3kP26bgqGEzKVtP8hca2dhwK6VcFPs16xdNJ5QRoQS5ZDvXqH4CscBBgJwvb",
  "key29": "2c4MB6tTrvdRJZGPsVJE7nppwJsR26eWqCtJ67LSARZaL4QYvoNgb8QgZnHEzV6odStSzC6c45GCzqQ8MhYn7hXA",
  "key30": "2EB12S4RcfDzfATSsBqKrsQowaUb3NXFNgRisS3hqMGRhq5PcvkkT8hR7Vfur2L875ExYoR5nXYAaazWh2ecbggd"
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
