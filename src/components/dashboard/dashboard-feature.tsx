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
    "3TeuRSHxV1qJATgXuzXqe2tw3dUUNNCQB8k4V31kB9sS1BGCfFZomUspeCDN2ZsbbTSeGujCApHm9ggDuTWYzg2z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wJu7fw8H7rU3CMD5h9SwKbHre3wQjYH3LbikEamcKpCkkLKHWG6L9qCSddwYUKDn8nVe5QtrgoWNQ7vTeV7nNX",
  "key1": "4kECxCYvpygu1NFDoYrqdJfdknYiRmdQyB1syRmMbLspJtLPr6qKYhpJsGLGeHLgenv3j1TknQHxPJfumDSq9KrU",
  "key2": "4mUTcY3MBL4Q8Y6fFVZY85As4AoRuGp7weutXEzBoGWUyRkp8YbGvsLtRZ3NG18s5dMRQYFj5PDetdvXF6N4o9Yk",
  "key3": "3yRQW8rAH7GzTBK9UsYpLBKL31bpKgkDEnYappc7bT2ZSshFQWYJLNUgBSNoXVDKM679S65NVcYYh4sjg7zkGLvn",
  "key4": "4aJivH2Yg4aqYrYqP5EaEdFB2jg435bLGc5YaSqmaDd7F8JKNuDtdYzQ8mZMNBWfDPH99SwfQFq6x7VSUGqZ2YgH",
  "key5": "3SQ8Vs5u8zQVfX9tQEBmJpn4dqi7UfQYDcmjStm1RuMHGU2CtvXcqsJYqTMWKnmEL7HApECXuiChHts2GijgTzbn",
  "key6": "4Ttuq1Jshfb7UTsvWMChGe6Ng1DM7dB3PhmnXbzAUqPBXZ7bVMEU2U17ji8iKxSZStWmSAif9NnR6s5yN1wBACSD",
  "key7": "2r9BTqFs4CHW9cA84iPtvBB89QP9gkhxxoo5YDSbkX4mjh4xzNkSAVxnnnck4nWsnzTgKMdHwgS8GcsAHoan6xZ9",
  "key8": "29f8bpMMr6X6NY7Q2Uziy4yz3yoGRYPx595mYWeARWyDnWZWf3TK3dzuQsTnQMBTdkDp4BnfHCzNdMvR6595pg3z",
  "key9": "oyMW7cNQ9H6299GzxZVyZhmYhrNLScpfCe3UaL1MJPupMk8DXC89DarbFbByvHUPmdTHzYXE27jdkXk6r2qHfrU",
  "key10": "4kfozk7seoAftwE8xDyZLNWB7sqqEFKJCm3NLtTSQVH8eUTGEj1xXjcpeYndSVE776YY1dbKWu6vWYpEMDBuRC8q",
  "key11": "2LZuqCDhmQnBgaxbmA11ESx5Hn23sag67EDeFnMgegeUKLuV23UdkoYJJzEj2gh9Th9dTqfNTa9gKKmrAQxFofRe",
  "key12": "3LHhnRKFLe6wFzV9eB1E2AwgDevJk5kdAjMiehuc1Ehi3v7YQFxe2zZ8mgaedNVaqggER6j4Nv1LHuBDQ6RiTR7g",
  "key13": "517DAXJNZs2Fe7Qm3ocpmiwFDWTe9XfNUh6apqNFyw8vRjeup2CoQHkT3Brz7EyVLrL5prL4CduS7tSPHXDLkrrT",
  "key14": "VbMup7PxD3W1vnpXCWWypK4gJykLR4R9pqKxaH8ViaCz7E1PNuBsUNDUzmB2HNgcEvSppbeGvKecJ389USuCLHh",
  "key15": "2qY6t2GgFzPdRfgpYWnwvtZfkMzWhLFcg7C4WpLxhjGp1oetaRE4T3fZAydbHRKdEpog5mRC3dUHrnNn2sKLaLEZ",
  "key16": "64uYYSPPV5WPhYcDZ76J4a3ByGVhKV2jotyABBKBjpEMsfufdNV5JwBqTsun6MCPXeYHJ1LdqPjeAHXzpBs3qRre",
  "key17": "5WhdXEbXiC25M6VqGXQc53rfBe8ridqhi7zfLA3vLXzqJZM5GKjNs5ZvUCFAsJ1PDtA8G9LgsnGnH6g9BZB34e6R",
  "key18": "3PqVCUZ3dm6tpvzwSpZNG6gM9RxWBGEj41XEtMzQ2hEBC3gR7pKEzDrs9XiHDRp4Q4AeMHTTt1CxCFD81RK6peQ4",
  "key19": "4DnPbTL2o1zRyJs5VVDYgpcLfVkjese5HgsCEPPCzt1XGZtsbkNnL5KXaYWoZRk6WX8FCy5XXHni734GiMR4Z9TC",
  "key20": "3FuJUeFLCLoQievevKswiqDkMktXLzNjjeCf46AxGi1Y46bhVEa6HWjuoz3HMLw2EnQv2P1oaDLEJm8Ne7dkuKW8",
  "key21": "5uGVagtHJJZwibuezvbPCNSZuFHDisfZUE6LTKiQkdcBELLDKXiH9o42Hw5FVcC13Ja6QGiNUvVKHMmF4Eq4S1p9",
  "key22": "5qTMj4fUqj52Ye9gejeZ32t9PWVatmwhy1ZkqjShVNd6CDQ4qny91wNwx3EDeewUSBQy9ZjKMMncerhnCmGdRum7",
  "key23": "2fywRHUzAvGVDpKuQRBrc6ncRwv7ABhA8XZot8XE9TXaoxsW4n5xSdawJekJ2Yx2YDms8JYJZg1XJXcDYacz7Jwr",
  "key24": "3yaK11MMwaFZ68NvQV6ZVGLAwVo7JfV4S4Rx1d3kuw56uezRngFdEJW8bcPTm8vuzvG1TWoF698FYRRgcoqChHLh",
  "key25": "2K8mw2BTMvLBG6skuNL8BLwW4cw6PZE1VAAUZGKkiBWfFAQthUduuv5ubVbkUf8EySiDcSpAh9Vw6qpDjKXgWEZY",
  "key26": "5oTSriJMiZGJ9sF1ygkaX8kQy6P8fMhUwL6UbsAyGgJVzDNJGRzpEhv2YqabTmCVDJurryrXJqoCuPUNQpo3ekvq",
  "key27": "9jVFpJPWRZN9JbmhpZ4oM8YhqTbi8ahCCrRSNVNqqmQiQ7n6gjDRUrAMsXddgkAdEnJEczgvPhuY1Lbvz6k6Qe4",
  "key28": "493Yt3niRWPuGUXSk3s2oS6TG2ZJL7WmJmjLLi1mXTW5AfvBbBZYFvLPCVgGFtWS2xfFxNKUccRehqgUsbJLq5uK",
  "key29": "SU15irDvFRRgBhA19YSqUAeUoVDBbetWkATvCPqW9Lh1vYABqEGA7HFps8BZeapNka5JC7b1PsBnrohrLpGwxyg",
  "key30": "oDJnKBJwTUTW3ZsfMP9AAi8pdqJPSovoZ6fRLsTVErDoxYfMgVt9HAi2nmfzGznAs3vrWyoT91yaQCqxfGrXwms",
  "key31": "22uWsKQF8MuZ6TgnMrxTVH1DiCeRTqRMv9AnyXv6uGaroT35jMEg6qenoVjfcAbyP7C55bog4Qpcg4cJaUyksXS8",
  "key32": "2PDxrQAKop1ikZqCvpAierJiW1qgnvhvSrBBdfaK1CKPrbkwATJftYvTjoXmPvzWEXFvVqurmDZScwTVUMPVKSrh",
  "key33": "3rtChb8xadZNFCP74WuYJZvuASBYKxh37Y2eDDSvJ5snghiUVVkWhNFbupWiASb2kpG2iAruZYsp7D5p5QM1hPXJ",
  "key34": "2edeUgzUa7PZQ5RooaraV1gdQEoX3ns3BVgTJ21UYEBmNvLVwDmUXTuv8entxs2WRZEYpUBEqGm3bsBx8YU7APzR",
  "key35": "2TmMm3az8GWsTHqcREbQgs3uBtXZ8qtAFS5PEWwbUgcQiTH46oHAL7DabbDKLCmgavTfCw1smcCNRNosfk9SFhUy",
  "key36": "4iwBVaCvyEo8wr5Mwtp68ABsSf6aiC465rJdMUcitkKA8rKsmXZmYzbrmomk8UT2rYC8ModAmCDbFA7L2AEeCyo8",
  "key37": "5dieahCBfDw2NB5wJ6eo8L2jwt6zf9ntDMuyVVDNYJPLT53xpH87gUfEhJLrE86jTRkun9kkoDrYTo71CLX2npYS",
  "key38": "65o78Wzt97LeK3asmemfDadDyBFGypwiFS74vD3NQttgWCzuq21JS8JWa4REG8pGzraFbG71n9z8aZ32tFH4GFDm",
  "key39": "SE9M39YSZuxXKuDW9Zbu5XkVUGxBcuxUsNzSbHufcfpXm9r3BhQ8qZVZa44ygLDdshCfYdDxKivkv2KBTBCa6bb"
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
