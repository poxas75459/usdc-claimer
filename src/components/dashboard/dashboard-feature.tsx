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
    "4jfqxAaq9JtdVgC4e7TVpExhkALkqUbbMSvPxtYoHRqi6sB6mENqXuvkdwqiR3EeULMe4ZFWZV93Wc5bzGhMyUnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zzCNqDLmwhWoRJZ4Nyxph77m37cfC255Z9Ksi8CaXhBpHSTiYkDHLQiwpbJrumHCZXkWfRBRHAgpeZm2WDsHZYB",
  "key1": "2GmEZzn6vV2zAKZt4B9ChLojAansu2Qqm9CWheKgNT1nCKuvvgCa1tfDdcDkRdZFXr5mQq4o3DrweMy1u3JdFr7h",
  "key2": "4rDzYKs97URLr4AFRksgPcSvEDCFes4DyStt4e2cQfC1QLFi7axQQqfGPReCYgmEJzfR4C7F79DU8SwfXH731BAr",
  "key3": "4RQkA2E9y2Ux3SE5NgWKW8bDg2bRhzGtEZdfRKpiXNFjnfD44wyqphNj4J7B58gB5RCiVB6mQ8NyyftXSVhAd5Ht",
  "key4": "4Ufw4QBPmVyDTrGmgV8sWLJdXs5eoKrshshRxUtmFETGyZ6jUYgMFqcVyY2uJVFVfrnpcxzVMQcjcvevaw1Zw8Tn",
  "key5": "4TBeXzX2hz8xN8rPcVHTQ6MdE3MGoPdaGshfdHwcHiazXqkhu7HSFPyWya8wrtfZj2JZkQCxQsqGEoL9gheCHKjk",
  "key6": "3AvfgVVBiAPM892JW5XmcZC84MFRMSRABRmBEkK6ueEwtRzvQ8A17MAuHVbpBhK9Lz1atUq7gSeVWb9FsGVSsZa6",
  "key7": "b3tzok7UQo7ob2PK9esqcd4wHY7svFpu3jVdiBd9wWVZs1n3zJgtCtUQHDW5Mrqxc4TMHB7FywK29Yv6g8gBxks",
  "key8": "2itqkZhVAGwu94aobDPdiyF2bHPEiDKFL34FnpEv99pCpreirHVkXqFBZ5GfrREuZC12yJigpvcLBbauPUpoC5jD",
  "key9": "Uq3qkHf6DdZ4HLLvJBhyWeZDwka58gPGDBPTqP2bZmuL6waJJUJhpdaDJ7EKdijVUjtPYNPfh64VmyBTHW7wzsF",
  "key10": "3D1ALqYuxtXQVJrhMMx3jPnERKgtpEKvFToZwa5egNyifPqQgn48MvkYtoBAZyAhLsBuNKayUQvLFeqHQJQCfPXF",
  "key11": "4f1gT1dZgfJwxs7LwCsnASGNX7UKUL98w5rwPurLjjjz4APxtEh66phCLtQMNcLoZCdKLKnnn4Y4pqrwzx6QNQJV",
  "key12": "eLUYhtu6damtz4i7TpjjN2hg5HbPkbGEB6a3cvdHr852oAezTzVPdaZqR1hz94GDCdp88TAguSU7wWt1HJHxtdR",
  "key13": "4c92RmtxSq3FbnT26Hr1U4b1AqfV4SFzZaE8ZFx5BMwQS5ZNP1f5mP5uaVb59fStAsSSmU3iZsghcY8U6k3VzUGD",
  "key14": "34MY5SrX83p4hZ9UHgWWXPnMHwq2QjeqAwLaadAwpL4QDHBAee2W2dYzXL4QceKUhex8rP88AeHGBMgEzuogsYys",
  "key15": "Zaq3aiZ29fTMAfT2y9Mg4NvPAY6JKvR5gQbdncL4Vn6y4i1zNQERiLgXS3QXdqPtUKuDpiumjusH2YY4HqMoy8u",
  "key16": "zYW4Di5LRkraiCb3f8YWH5GdH1AjRHVhqsqvJJ3Hgw2uGnen2pKSP7s3C4RQmrVzdWY6eRGqx2iBBjECa8GJAS7",
  "key17": "66KtVE3K1CPLAfgYD7DShBpj68BRwBxxCZQku4h4NXCu7mzyZBXqSEsSdQMo39hDKD85XoBAekbps9CRE3buLsMB",
  "key18": "3sJ35zKmHwP6jYB2MC7cp62DAffGjoLfwXDcZ7kFEkGAbQMi5kd7RsvzeZ1AEeC8T5cYYYMNu2t11dnCZVz3Wchx",
  "key19": "5yATXEt8t2PwDXWix4NxiYs5CVY39EzvLXYP11sbkSjce8NGayoSwc4oyw3Nb7wZqthqNjXCX6b5kVjAwsEGgdZJ",
  "key20": "1RH3vQgkvsM2E99xWVDQj7r8QfGzS2zpKFvtWVgPxc43kYELAhKEhSuNXTRumPaRvMxQPyup4SrKRFHDLo4TzDX",
  "key21": "47qz7ipxkP8o9MHka22fL7dH5w4Cht6Dmaun4H5zXx7q82gD3cKjj8CjNEZUFdjDXgKMMnmWaMb1PHPysUsQtCTk",
  "key22": "3F1XKCsvL1EhKBDZHKAS4U7DwBcQBMyAGQPTVj3wi9YCFYR7yTB8Qc8MBnRMvoBn19bY7Jenv3RTcSgEWd58KkFL",
  "key23": "JH8hzYMofsagWmmDgToWs9XUWp41iRbi7q67P7rNuEhKKSjh9HmBk29gfL4G1sGpL9UR9sVvWrJ2ZSTC4frnQC8",
  "key24": "9Ef9TpJVAYN2fbRb15XTFV6Ty7R5pNLpFXvXFcUwhAoWAu5kj7GdrKqhNn5ZeukZGSyvnKSfFfv2Dibn17e6ZfH",
  "key25": "3E1b6ueq31hzkQgSd34ZkwTd45sx8jJSFemy7DHQ4ueHcEKvVaHH2icDeiNvpj2mUebMmMYNiHCo4xQHKp2qwerS",
  "key26": "4X3DMWau9eYcgxC4GtpSMkAH58WQEJggywZuc8BBJKfb9divyLpzbd5J3L8a5ixAczUc5MeydnEkrMs89jkRR3Gy",
  "key27": "3VnjHk7tYF8qTDit2jB2wxQiqXbLUG6YREiUDc6ZcwMHbM6Cpy8vATcqUffte12Q9RkGeSCB2d6MHXD67cckUHdn",
  "key28": "5qTWh8cEBCB1Fc7HTQ6bAFVq91ripnLNeJyE8t9LJE5iPgpkGMeVedu1gYF8j4V8Sj6ZNYxsiMPQqPN8ZdyNzge4",
  "key29": "4t9cCU2pNJU5kf6XAMyEvkma35YZn6Ermjxs1M6rh2miHpkYU86ZjxGypTo7iBuBJBJbSUYDUUew3UWa38k9M13h",
  "key30": "Kcwuxo61F8XfnEM9LtcNmBGADwFRWCaWVtwrUscUfNNgFSZxVKh2p32BE2woRkn77E8aqDemhMpo6ytuYFUQAw5"
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
