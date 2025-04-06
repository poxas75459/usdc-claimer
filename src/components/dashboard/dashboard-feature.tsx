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
    "58RXdDRdXxcjzht9Ha3KgyP79JwJoPKmcha9auBum6FoR8sbeMWXyyA5iQQ4FKm4V5cngu7r7wfvo3XpaFQr6h6q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mNvhSD52rxTZJAg9cyoNhZyxJVUumfKs6KCogBSLmXYSAhT744ztwB8LNRkeTBqFeiEs7LqytofHxL17wxnEsro",
  "key1": "22tNgZWnodsyWHGY3pQz99zL7pRCrddpnFQWHLh1MGo3ZFWa5CnsGdhfCuWQ3RQfN7Yo5uKxAtoJckb3FdgC4Nva",
  "key2": "5ZwuX9a9XbmjjF9PxYfNHMpZN54Smkf3HEcR5aMVF1wmkWxgkKgDzB2bzhfFJk4yiVDP2f1ZA5sAYjjgAzdDwyJm",
  "key3": "3HGpbumtevhvaj1Vc657jBsMPUPQ4ayGuMRQyopz8Ab4TgwhzsFDf1ZLb8PHWshwTyaSuNdqeKaqMUzQxFHKdYCu",
  "key4": "34hFnR5i7nqTvaZcEK1Ns1srFTFgGxstjXXiQ6yhFPNaEDHcnmjH7a8z6uRR2Rzof52xEnSNsCg9KF9gkcAgwA8y",
  "key5": "3cdbBFETyrfJk93fqUbK96zdULRnXsY9pLALRgZ2zDa4yhZ9dqn6H1UiXvk3c5nkyNNMXoTXMpM7YQ75JJqmduNo",
  "key6": "rX4bXRk7bhs41WjbNEN1L33b36uN7YJMELLJhQ4ZUr3Qv5GYjuac8wiW9CM3FXpKrtdBxuzGo5ELPgNScQKp2Sz",
  "key7": "4jzoT18BwHQg7cjjqFGrFM2fL8dbwyAiRE44LZ58bHBo8GFKaQALnFXaKrZMn9HFpzseoyrEwarhSyQT5vuCBQbp",
  "key8": "5MR3FoCxMggySTPxPRPGbJN9DZVdUHehax96Qdw7xhDPTfh9Sw9aUTyXCBvYFzhnzhnekrAiu4WgJ9ZRWTxKEiAK",
  "key9": "3P12DSWgetiFBAqECvFsexTefvW938RQhbCT7UPVzk25hu2KLdT25QapSXja3pJXjdw1EMTt9TzUJmhnq2XAjMdw",
  "key10": "3N15ccSnf63eozvSoL7abyteEfBbZCE7xjGE8PmzcnM7eFEEwoMFD8xbhKbJEELVTkvhZmx6nDzzkCpeeq7sSLCj",
  "key11": "3s2tBzTL8oNLyWVSjSj2FvqMSRxZCwEEjd1bJjCPu2zkWe1dEjs1F6hD7uCr8jznzQuBHc1FR2e6JoYJvjBekGQp",
  "key12": "2v1fYSdjChqSiRnikHYatS5FNvWSNS42db7J8g1cSJcYGFGUZVSthCQUxAkjpSnSBMPvyBsMsyxnfjMiZtGBZSx8",
  "key13": "3EoPghxkMVGVJ9J6RDTpovcLDgBJectMVkAxoBpSXa46p5dvzbmweNyLhCGsb53hCEg6t98dpxQNFtSmGfjxBJ8F",
  "key14": "5qNKWkrfQCDpDyVDdj7CZJNM6k53nGGsjePjURq6CQayJ7kVikkr9AX4w87THarjjH9h3PPVdPXdmAJ27vDtz7EW",
  "key15": "2yfPmKv4Wghi2TkiCZ3LXk6eUENes2UWnDgNuhKBpvv4yz6WHuaRzFuYzfRwg1KGobTECEZuy3HGkVFxDyuFjD1i",
  "key16": "2jpB5CKRq29UfxYMbYjsfq5AhAwipzr7mWSdMCfPX4Z9cXMWtkocoT6xMqbg1uzsLihrZtvHgH8jgjJUyKZsgAT6",
  "key17": "3iMoBMjJ1bmW3Y8gwrxnd9QJxrr6KwHzR11CWWAy4TLGArfQRYcU9RmQzqLNKUFhA8e9CXfq9FopknEUpLuJAPoB",
  "key18": "2quWTW67mMs2YX9nKPCLeFPmJUx3zkGQLLr8JVYW6qHkgLqCG3UfXKfnoHhWs8sKYpmfJ1J7xgP7AFEQjnr6qLSj",
  "key19": "jzkkjTXwjrLq9qfjUS7CAPG2RRwtkGmFDffW4TgAMyg4sc3qQaB5AbJ1Mq7rztRiEqMaZcVxyepwAKtYFjUcwf1",
  "key20": "4KbdDBtpneSWD7R8TfV6ttNXSRhbpYzHCjYcZbmNRy1PuiuwTzzizcUKM1c6HUqroMD68cKjjSkuvAnaHq57Eunf",
  "key21": "2fvZpqYDAqUfHCsTvzZRkJq8H4NyQY4gnewsicBGmDoGmsVjghg68MUmxzRR78ZCZcSxLyX7fQ4aN6DkoPFZZBN",
  "key22": "3bXASUPwDqyNhexzk3133YEcKGP31ZCcGNWoqfe7FY7tiopUHp8Ss4sZXZ2hddCpeNrFM6vLCEbHuqohArkTiGJw",
  "key23": "kGHrKNqjKfdzBBR8z4WinTHLpEXYQxTM53dKKHRc5GExqfV6UsSVWbZfCUhHsGv3e1kFpXVuaGT1vSbrPvcUhQ6",
  "key24": "5LP4XMJ7jYSwxTr3H7iyVNBURoVwMBhLsxZRue8vzmsQm1L4dYEMcvn1uphfRcjizWXq1dP5W7twGqLrTxnswQPk",
  "key25": "4SHFUuW6pJJEqUhEfUg7ySpFMrN4DPhJ2BuqxfGaE2Yk3H5YfRG7T3xyxoZP7n1RWGDL7nmmJAqUYXpYrnGqtRA9",
  "key26": "pRMAw6HW9pVUjKmWHxnsutS29ZVsCexjCmVGBQryQ8CgqQFsG2Aoe2XF7qMw6KHX5Yy9AJWowAdQARaAJMXCGVN",
  "key27": "4pxPgiozLRCMYVzjbYQ6yk7ddCRTXF3TNDZttQbg5nj3BmT3PMkqiPJA4SJ89gnYXQBC8FY4MaL8CpL4LBm7d3nn",
  "key28": "4zUWH5H5GjMmGXBCgePpg1hYMpy2fwosbLaUmYsaz9bsBp8nxdYN54VZKCTBWFjfhqaURKALwp9kHCeke5r2ESg3"
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
