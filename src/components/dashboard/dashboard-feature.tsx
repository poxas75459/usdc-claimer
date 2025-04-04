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
    "3y3JyfY4Varucojt3RgYqtkEwbs83t5FefXg9raD2HJM1Nc7mmBMF6Vt2Hwb5FJNRYbrPSrvNkyseGofnFojAWB7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KMTdm2fSAi5gk7jgYLGzFnKhxKEoyDuutDSyMyDpxNQUegG3oqQmfAr831FNJhi8S3jY92t3MLZndcmQ7Ag8R3p",
  "key1": "61uKcHki6ska1qPo2CjQ47uwZHiL1i8GZgF5d5Yxu25wG2R1WqwEccfPaEyguGzkTBWNuBk4TMvsDkAMpozbjApG",
  "key2": "2SJPidi5miARdDfpAJkexkAFNe71ZqU8sstDnHwA6U299Hvz9yLGfKPsT4YKwLzeaqjgCLAWayyXqVeySquBH8jB",
  "key3": "668rHBUWBvG49ssZ7QmVNa9SJDqn33fkgQq1gKogYT5a4TdnqbLffrd39wVAbgfFem8z1rgNPNwpUudW9ByJgMes",
  "key4": "EQcAqGtZ22Xp4NJsgbgfAZypNYatbKUX82ciqWLXW9vrsM181sxGVts5TMd3eRwVLs5RJ7jVeWwAe47m75Jizan",
  "key5": "MCFRJ6k5HXjSnX4tob3h2gWS5BQh8RUtEwWqEk3cUHEEXCtVdTG2uxjC7Y5ewKqH9qTppJPNBkgnssbMrAhnUQq",
  "key6": "5KHYN4wSj2CNsuuiUH8v4fabaD5q6riJpxsdB1vqwaMNxqzhg8n6MruGmiYNdgbnzzdMwEGn81LcKQ7imuCyTkUu",
  "key7": "4YNCEvg6M4MS9jbzdruM6ax5Sq1BxQLXyNCsK7kALiRCMGaYr91HbkfpokKLrLWNWjK9Y6fuxnVx6Q7hwyGjRmuZ",
  "key8": "4fjzAkFsAciz8AUhfEiT1TFZKxkSWGfi8nGaVBWVe3n4UTqJ6nsCZ37ZHX5SpTucRxLgT4LQL2Du7UQwwjEe2cR5",
  "key9": "5ahkNj6c6RJ3gmDczwgTAsnQJongruQqqJPGSGwhBF8hKTnguod62Kah8hvuJght2AcoYxaHkUEqmwoDnx2xMyGm",
  "key10": "2pmHjJj76MSrETQRZJSept6ZNJdXj5Px4mvEXn4LiNUb2mpaVuoW2y8o5x7ZYawz2e9h6zotxjkWfXeAc3iQMXuK",
  "key11": "4B7mTh2c45AMbFVMsdPS8nK5PMixmpM5tF1ALPG3J3FMSXZgG2aaGU9ZdnPmNhDjNaAC5RdCDupD5FzRWNQP2PwA",
  "key12": "5uscjPYsQLGJHPquXNjPEoenTMZNHe6iu37u4BLn7zrbjzk8GF5uqXfgHxpTjn7AefpG9kNzexQybBDRRudgZ21o",
  "key13": "2revpt8kaPKz4Dun4fMh5MHr8tfLp9JM2XUsAmkLb1QGtAucNKPKimZtT542S8WXTZVTWsyDXVZSVpstEEnWb8Zw",
  "key14": "52Bf4BM76UDTYzGUQkiXcVhqkHNX1fwzjesxVNYfy5EASyk3EehNVJAAPhASpQZUpt8VforP59fNzX1u7mHberaq",
  "key15": "42YH3UdbiEgqGvKoJurxteQ5LDaNjupqA2CiUmLZsjvLYiNomEXPSy73vaxCoVzR3JViMd9orpXyTzGg9jE5NFcu",
  "key16": "2FBwqxKWPHYaJ9gyJyVAj4wzyV7whqWdFKu5ww2FPv65pHWzvb9EC2ycTw4uGxDtmpT1RViGfhmeB4dZ5Wtcx4e8",
  "key17": "5TmyZFCjCrPrMaJ7sd6jb6ULAkuzSNoYBqXenVJWFNtvmr2bwfNkyZDUsaySJvRUsEmdz2imDPa11PzEEgyAYj3f",
  "key18": "439U8AERvx5gP13Aw8coTD7esAwwdtaVM14FkLvpfMnqE9eYfMMxrzQnPSJ4hDNETsCWLfNCfLwWTvA5rC1TDBC6",
  "key19": "bJWsLPwpzqzXdgBR4SYk2mnV7dZ8zukuEqVELjPbRo3mQgVrNYi986W9gpiqyh9w4U3gn3pnSeN542JpCGzfiXd",
  "key20": "hHcVFdRnYtvKixg4qSU838zn1AAz5GTq5gu4NyVUzWw8kiu8oHXdPscWCjYr3muPwomyECtp24dnV32cCHe79oT",
  "key21": "2b14q7QQXDyNd3u4RrZGgoscFr6QkAoMRVioV4UHhsW6k8zGs8TpULWkqpWoybSDt1PtvotcXaA6aCzFggEChScH",
  "key22": "xW65qRCUSmnsqXtDUG4mHmvhuu2CUrvNRNEo4aLhHGhRZiUnp2MHGpU7iWav7mdHqFvujW8qNbLv1VsKAWYaBnr",
  "key23": "5JPB9cdd3zzxo9e1ytPNbDQH1Kky273pdpYfpsM86hvP95MMMU7t2gExCuJPXXZtgzm5FtFin2QCG8ZeNdbep647",
  "key24": "3kAujC4aAv8c4EMQyGBAPc1pG2VKXWPopH7zaCdAH2DV8sTwxuGKiKtcSvPJAmLtcAWZ6npag5LYj6U79e6WRj8L",
  "key25": "66HWpTRtfUrKNdCRY5sLNajpsTzQ4gnoPKTb7Y8VE1LRX5CBTko5V429ECQHDZtWP77xoRJFiKVw5W7mtGFegZKB",
  "key26": "4yzm3bRkfP38WBYTVNyw4gN5YTZvpt9mE586VSqNxfHNpLYQhUF9zxeFX3VhStZVuC49LpHGfHnE6dUJdexFqNPH"
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
