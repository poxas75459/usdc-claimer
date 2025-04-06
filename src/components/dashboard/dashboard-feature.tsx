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
    "tmpLonuDSXvjj1akNNgibnFpL5tzH5wDi7xRAkwK4GimzaVEoHfFK9ZrpbRTWuHaZCQj2L6czWPwMQbVdKax5jP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xGDnAa8N2whYrwGqf2ZoaWQL7MY5QY9W9JCJqMW4MW1B3MCHt1JkDh3gRuEBgmrQufJWJzzoN5CWtzyHF6ogbWH",
  "key1": "1uKfhaoYW5cafewTQDx3n5vrgnFtxoy37twVaxASEatXU14aVyuKyaztUnAZz7kZGcGvy8W9Q3nVz617rCMGV3k",
  "key2": "k3JTvrZa1Yos16rjK2jE2z47Phdcx2Y5z949qbRfYZqJzhifaaMYLh3vv3jDYYEJYsoXyvhtpnbgFXox7ZCteHc",
  "key3": "2RZZAiXsAxU4fVXLr3wQZi3cr6f7ayB2Yxvk6AcQWgn6hxKAF7iKJmWoFz8dQG7ECTCmbtjUzmHYTKSsZsNhuBSK",
  "key4": "3ksSJmmYoschEcVXS3nHk7XUjByto5sXZNcSj8eE2dvTvUypbNxD7cCMCDfsA4odvhCgcY8mxroAnor6gfZwtFwc",
  "key5": "ybbsfyrEb7sP7nvFPQ2vLcjozE8i2CwW9nMvMKZoMXE8S2scQrjFPfcFMwKeFV5hnBq74GwLKJy8koSqdabyqqd",
  "key6": "4YBuir1sqYp8uwU8hS8ziERrWSP7rL4paGH8SmJSrqRxvgeCPPb5DiNsVFuf53fjWMkFZGA3i7kibRaGwVqiKQsq",
  "key7": "4z6sAbcW6MmuCRLrgK2FHJDwTtbQs1yFymGhHA9o7sdqRLBCdUs5DL1NJ6YLv9iZdSeqKmdp3gAgBUwWkeJ1AApD",
  "key8": "4RrL2tWuhtKEXzuoX6SNvwTbpEcxgbvrSFocTYrFwmB2hgishKQsFnGLQdde3BiHgVuvbFu9ukxa7buX8W1WrM8H",
  "key9": "sfJgJFqgD2NfGKU5DFM5xnN2wjvdkUS8QWMLqfbVHCnr5HvKRqeeCWYrNj2eyZe1zoAzZnVKvU8HdZkJc5oSahp",
  "key10": "iZk52YPomie6tcbnaNGd81e64sFtrcLrjMSuMXsfbxFqpLnvptFji279zgmP8Bat7zXBgpnaWwmum5BW3954SpQ",
  "key11": "38AeZqdVXGmM3mgoPE5pGvgiT3pdBKWKkdzcQhMLFa6Hk483y2n7WVkGtvXinpndRRggJWAAnBz3sVh2WUMPfG2N",
  "key12": "4hUkT4BUqpSR6dtfb9Z8pviXM3fg7Ddn2P96eQnYWQXxvvW3dEPQNDGUkMrdjtaWU1Dc1nSid7LL3MkVDc8cpe92",
  "key13": "5sYkap7zgNUVPJvBsVUzMuyrt1BJSbgQjQGkDm2BBDwYy9qBVYoEE2pju22U7MnDkK1Z6QnfqncR6eJ8NwdbYyg2",
  "key14": "5GawbrfDmcz42eRm5LZPVwzvuUVirbjtoxLU55KTSzivCTm6ydw27dJoGCSuyq4Ty2jVeaKAQFkApXMzU72HG8fs",
  "key15": "5M9DDyET11pqThWMskUi57HVg5FtwS2WVnScdWZPtp2WVAhUZAk1P4uxJjCCBQp3DYpjfvTPDRqCWKW9jnMmU6Qz",
  "key16": "j2fkSKL7bFepezissqMhBuQDy4F7gai8UUuMbYTWtDG7vsopy5vFpfytAtU2JVp7aS4VqyVq9wqXekf1LfLmZUG",
  "key17": "5X3PyG938K63NK2DjEUp1YcYXqcdvc9P2ri2giUycnm9DrQhVP4J3f3eUTvcvdFTBQej6h1tiBZAjLMgvXTvdxJz",
  "key18": "2X8q6V6PZHHyJ9FWUTA6Hz7fDHxhko2zAqtAd2KMagZp1njtmPdmc7DNfsBCM6KgXNGkgoDY5QfMhGykCogNzKJp",
  "key19": "4Veae5LayDRJWPvcYBo8xBxprYo2WqhxWLZ98WaegBEjX5sbjXqcxCG6K5rhYqs4T32bZqZ9Q7nkSFwMP5gnradX",
  "key20": "5Rpdjq9XMw8ENk7CwiDLhgJjowoEvdmvbVAaqo4nGCmpouQTX394u11J5cxt59sHTuQjL77KkkxGVmVuFZrHpNSW",
  "key21": "3kFfCcDsRFeZyBYqWyrLGbLxrnenXgUNt4T9HVGz8WKDFW9gK8cR15nepXvV8ScL7mFPR5tPZHET625EZNvewds5",
  "key22": "3XUZo8ccZpTxU7eGVuC91smTiQrkh9BiSuYpkot8xsPNeMJptchLKcKcBBpKMDG2UeCyDKxeHEpBfWD62hXUyW52",
  "key23": "3j1frduNquEeCLQaVnRShKS2NkvkiZpxWoEUNtsvCUR35VcmkruYyAjriweiMSoVu85zNhsV3dCnSKZaoWnb4xT7",
  "key24": "3hgd937SCsZwkZk1qVX58TJdc84TS3zQcEuuogN34xgB8AirPCGevhLkikXNKf1bhWE6gZYPdmnwXqBttEPvKJD7",
  "key25": "3cTXpQgscpxC4L5DtxvB3Pxwp1ZQR9jSwWLw73Ejni3HkXMR1hEBsFvwbnwP86fs5Jrum6Z3GLQZszFRf5AnbWGw",
  "key26": "4jnrefVPgDJUytKvpW5QfGo25RLwCwvHGPyxsPRgYA56TcVwV8MSrpx3NzEoa5YhYdkPdE8wgnkdztLHwEXS7Wee",
  "key27": "3evcKshpsYm84ztpgXKVV6L6mPt5E2GHT1PPN2hVEh3woUEqkRGHMLVLiGXG3wC6E2Y74cNqnaqHKrt48BN573hS",
  "key28": "4LdKcfgiadhHH6ructVMF5ek6Vae1QCBc2QekQ8swjq4UdL4L36diuZtvJTUhhtNVeK2GKifrJoptxox3A6to74W",
  "key29": "58Qsr6zqcEt75PMTJF5CNspCV5NwtPVaMvXMdaTKMxKJqYV6RPGuWHDLvg67Uo9g7FKteN7UsVniZRFXhez7z43L",
  "key30": "4pkpSXk6zkyeTaZkvvEeVrhu7gFC5SqnMJCcyRR6L32qcW2hFkhWLEJ2cQscAQc91iCo7bcFppe38pGpb4B5GDH8",
  "key31": "5jEeuSDS8ZzaXJsz5khHjYV3GH5w3bhhu6QFLE3oa37YiS23UGCSY6gEbgcCAg4VnuXzTk1XKwXxKf4K7fwLMSSg",
  "key32": "5MreqV79L4FQh3WVTpK8zyf7KFsv3TK5p5CAdM5w44RJVaSQaGEwYngcf5SNWG9Ttjnh5GZ3K5Cuqh9avHLRwCZu",
  "key33": "5e4Qw1aN58C6sJk9HKme2RdgrUhdfB5TkefFBHTWL2Hoh1neHfphKEPvhGqQ1LBFyUpV1wWowLGFtmqTz4HgjpqK",
  "key34": "pU42L6imkBQzY4tFVU15g6NUhnLgNdv7xWrx8TeLhDyz73LCd8WaxHJJ7hHuH3Jd383axzH2vR6rmKqTim97PTJ",
  "key35": "5fqCnMP17e7sV3V1FKgEZndiJ45252mvuRXgJtZMaTwdP3EyJTkeuvW6JKfpsFdVeNtwLDdXYC4H4T7EJ2AGPap3",
  "key36": "22ZMc3cDbPPCNRUTi5cAPo8Cqax1E3c1JHRyBwTCXDJ3Y4F8VEwHd9quiyv5zXo77vX8xh27bGEgZPzurYn8eAvY",
  "key37": "4ALM7Ut4yC5GrJfi69ZTWL1im6PraEthUuXiansaNoEPn2Br5oCUo9B4LjKdnooTd6WcdznYAoMZLAAigNQS9d9p",
  "key38": "51wjvXy19vVodw4ow3oPV7JNpKiS65hwYgimSKR4xyXXbZzXPg9qy6kuSco8Ghg4LGcAVgU6rxQ9CdDi8t1R8qHC",
  "key39": "2pJUvoH9yRRQrETWz6mBQKYq3etBMBVGuGLR62qJTjyM31vgCesq5wFSKwhAT6aq2maeRTGvVfyxEFvmu1tP3RSJ",
  "key40": "4bgMtNMcp4qw8V68gJuSXwrpTagbeZhwfr6Enc9ezatAtajZ4T3iXFt4fJv3TMvCuRkzjYiQED87m5di23NVdaiX"
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
