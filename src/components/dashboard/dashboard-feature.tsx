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
    "3JdEMzkeu9FksNFjwG9QaiouwaNdtTcytJ3JjW7HNAJwEdGEWYqR3rLmuFEJckP37NL7ge7dfvJ7WG7nDHZgh4a9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VMitBVND2X1XdD4sHbNo3qQutWHzdVoNJBL8Gg4fKrSYrK4by82zV7h2AQXgTdk9h2xZd8p1Y7r9vt5uTWTyYL7",
  "key1": "3WNwWCRiN5wnLyhJJ3Ugibx3TbCkFZFusekQ67BQk54pRziPVKCrhF7eZyjeBRL8U2oNQ1N7T7XThRPFBqx8T2qD",
  "key2": "2cjT5uKcTabtNgHtzagZTJBBvdnAyA247vy7HnrGe2oEyzjXnzEY57n5cCM6KYaFp5nReijGLjeGFCMkbFAXTV3f",
  "key3": "4dahKvxHHKcxX9in838Mkhn7zcm949oNZnX5cwEaPj1t9GzKMXY3VYy7GXnXLVpkS8kNzrkDg1QZxZU3r9WbyRNK",
  "key4": "5UgHS4oEDfTvdR18cbLCQUnSex8ZTogf8Q3sJ96tY3DshyYbpCzSWzqwSvr3E3oCVaBFLs1UFpuchrLuZJytxqjW",
  "key5": "4bGxwkh1UqWJVM4Sm292sSrTBo1xuyibDCksFayJ1o2HK4VicjWTXk3MWDWZr7zibSQw2yAhaWk3CPH2M28A2Jj4",
  "key6": "EA5tmB6L1HLJB8oDtJkbmSZ3Hss5oM9uwsiJpQmUGRwoGPSYL9zmNSmJeeYgCzaAupBhHyJEBYWjRWwoeYGB8uT",
  "key7": "66zFQTRpKwYUhy5rGggKdanKGmgnjNL29EVCjMKYMTqLKBGd2jN1KRuLXkFRBheN2ZJNBitfHUo3FrADTFrkfAky",
  "key8": "btj6sEFWB8675DGcajYa36UW8G7r6EJJmyakwzf3Zf5CefbZw5Fa9V4YxfMPtkb7mcL5hVCtKpFv58TUjvbAACM",
  "key9": "4653c6D3HDueZEne1QioD5fcK3emw7JQkmraHsPhyYyHQJDzyA8WFREGGF9VhBnHani5Lzdr6Wk4W56uSgsZFqju",
  "key10": "62xtiSzWz2wCbps2eoGHfUJnM8gJsCKn7z68936VHEozHo5oC6z5rdV4VrDhVgajTXPVho9b7TL1fDsUqbguJduq",
  "key11": "3fcKKjy5dTQrCw2JGFafSbuJs551VsACP4xu5Z9KQXw3mcuHrYjC2LXVDiYNv6A1bKhQxErmE7Lu2sWLdxXpTpdZ",
  "key12": "2NMFVTRK4wSjCXoi67yP16Xqnej1QxeqURcm8q17GJsSUFR43Eziy8ceSQfnARCyUD9mgWpbiDqy6jHj5cLCEQ4B",
  "key13": "3yvfcH9kcrtiddUR2JV6qmuUdEHNaSqNAax17hHgGy9zSwocsaDhGwTB4wUCEeMxXDauaY4FDyuyC6vCgyTiAKKm",
  "key14": "2JLrdVwfKUYoxYSvvU1aiwWXUeghpfkD9f3qrZbtHbxGy9sUij5DkhJUQsm3Vh4KMtiDKLwmyq59fK4PaPCbA7SE",
  "key15": "3LBTtQanifT7EuFgmyyKZ2jjmD2pYj8JkUsFgW5kpre5G7GoLPJSuahuFJUpXXAiKpjRt7KkBFwEM4brgrmfKrYe",
  "key16": "4amkbHWRLC9YroKvPj7wMzaCx4xT8fAR9haGnMqPh9NacMjMCfXpChm3nugd695Zq9i6LzfSb78bnAxEnM3Nm7Rx",
  "key17": "qYhXDfAUTfWBVd8k6d8TvzmD6KbRJjxKUf1cX1fGxRjhjvYn8ny6zBt9VrjDuSBHyjXxf6iv2oK4QpKD6xKDtrN",
  "key18": "5YPXedVx6sszMwPKZGeQ4zg78fjQQ3r7sWJrKQqGtrE9nauFzTJREeFRCovanThj6QkfrjqN8Y1nPc6zfyZhseUF",
  "key19": "3tWG7qd7GveAKjnnHhyJiiqHdjASRFj5WuPrWfZoP6NskmCkMm5CJfN3FduBN8jLHvbwzTZvpCr2FYgK8gjaBSga",
  "key20": "H64ZbFvAy9jrLsatNtQqxPCwEYzwyJ675Tkn1UZGNDasqW1u5kv94C7Lf5pCT7E6LLEXz7yghBXPEJiGdBZRwYK",
  "key21": "63AWZH6ZGhPuS6qjBf6Bet9mu8PZ4y7XRoBUL5AFpzc3VH9nAfyhc52n2K3HmNCUMc3czNABU43ULijuucnaDUj7",
  "key22": "gaEVncRuBv8EDD29H1Z3VGMLG4FgUf7rPb167E618bSe2nxJzbusbRe8hy83JSSKxovRKn2EFCBo3Vq3EHn7Fb5",
  "key23": "5MvUxid5wMoxwYe4pqySTUoWajRdhvBBmkpqz9VES9oj2eU7wxRMG7bbn8azdgrVDkPHXivRQtzCEr5b2LiSVKRp",
  "key24": "42dZZb8i7nUnQf3Ekh94QBoJXei8Z8PsKm7mJF3YNwiMU6FfQhhGnKG718Dg8YuChCD7asu9Dzza7VwpxE5KoAtw"
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
