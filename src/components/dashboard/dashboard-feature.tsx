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
    "5iKXJzfu16MUTsSPhrkQcKRpBFUr1wSm2xZhpiZvHa5Kd8hfK4GQEougHTJ7Qx7bwPHTve2n42NjcCHr8NjLB65L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FopwJxtXipVsKqU6W334WQfiDjJxoESg9sbaMwzMDEfm33qpbwAyMugjPTjJzVFLktiYGZC95zjE3VL4TTnpGrs",
  "key1": "abCV26oVQdq5j2APUtL5cHgX2cbXemEJiSWD6BSPfRwHiVaPVxrqMjedfKBwT2pTzs36bYWcPpcWMRaxfxNe9rw",
  "key2": "3yumVNUj4jXrjJP1hfnWWkpW38VqrTAXCiBDr73rS3z1feugVU2M4L3kmcrXrvYLa6yWJbWQLgSp4bNQNPu9Hm9V",
  "key3": "4LQdP8JmzbU6Aa8WMeSigYi9kXp9i2SHP3KZWiKgZEikvRRjinyJPUE69yvHnPBSdQTWnJevHiq1ezLfJJovnyod",
  "key4": "3gpjYokSkqowRvzRxgq1Jh9fmPMLVWbndc2HRKhczknQmyoUarpSpdHZwttek8fZaBitp5i9jRuUU7H79nz96bJ",
  "key5": "LkcdamAWGqiUdZECb5Wd8g1rGLMhiJQmXXjTEadeiwwGRdoECpSFK5BxMp6W8bqh6G1rVsESk34yk6bAFfEhatX",
  "key6": "3FFLbwPgaCdtYUYEi1Sox1oy6VTDCB9ruANdYYUse1wSzDcswGpwZ5SMpVjRvkJbZcBTdaWKGNquLbBSfPDYVVyH",
  "key7": "XapQhYwFDcUvHRLSdggkpmXu3TMkXg9ojjDFuE3sHSCsmJ7bA7c1vXsi3ZHchgcLD6DufF7jaBqG7fWz1Bws6xJ",
  "key8": "5exhJ9KiXVPvXeNSDF2bP9uEzkBTZnCF1yi3LKqdBgz9YZ85t4Pevgg9SVoPeDcDgztKYAFvjLmrCUj4mppAibRB",
  "key9": "319HMa6jXJKfNCJ6XoruMvQ9ydXsqucEwjzcN6d7hzHQFU3Bd6LqAwrEvWcsmMQBt5vx8yYuHcdobchw88YZ8Pqp",
  "key10": "5MoFvbdZ3MKKbqBUxTJHivePzxxF3QQtswgqeWvgfVhCs9FasdmXHNrQDfooQfemF51KTrSfcYoCBXLsgnyGCsA",
  "key11": "2xGFUohbNM7aihyf75DzvXZNUCEHYmgzE9TXoH8VZT9yZxgAChgFngTfFbTEF3mpGoA5AFYbFPHQzEfH1UdxcenS",
  "key12": "2ziQmk4DitN49LP8mZ9CGytvQpd6gbLnK9rfExVRqEh4rt1F8ueu2gS84ogUHG6maz4c8W29bq3zaWBowSFgMox2",
  "key13": "5Fp9AZqVmPCj6YkjzjwonerkFR2LG7tvjBLEDdDj7Ev9GB1MaCSc5kzUEFqMtUSNTpvfkjjcYkjVmMhau4CTSzM",
  "key14": "26CLGu3MCdNQWfhZsmLY9DJKyC9VrUATvLqSyVnHLELhAaZTLfSxMtJXfmuWoEe9iswbccqUBkKNA3DgYiKPGtZG",
  "key15": "2ykKqJ3R93fGYyvHJuARz3Xwdtg7kr6MggDqRgYM5m9TtZVCskfwQLoR1e4UXbEf6X7nAN7pFGiTYUYQQpU6qMyA",
  "key16": "2567pzzFoL1obA8eebh1P8DUzDAkeQ7PttLzuHFPjvWAca3NtECRwMHouPiMYzDyoqF8t3p5UW8FGyiut1CrQ4BP",
  "key17": "5VASwbG8nrfQ3Ughbn5S1szTU44ZyKgb2JkAkUZ39U4XT9tyKPkmQTRM94bNLJawATe2xWwWr21idgTZFHqiLN8k",
  "key18": "5oZxUQLbtL35ponxihokpRFBHPJ511zDK4P4TnFQ1ixYyG4PYgxNxE3uvZR5mjjFG1gLCVt29knWgm5rGjSiGBtu",
  "key19": "VoggyjcEn5kt3b61PUFw1GVBw7cfmxuPCZ1V6Tgp6J8tACqSqDp1C9x1nEfrfi7dRFjfnuPh78n3JtDkKxqVhLL",
  "key20": "3C9N6XNdsJtZJgFvmWYiAaXTPuiWkpspjMyn4GVgDerH7zwVEaJUfzhkUV67FheoqSRzurm9z9zFeKPg5jcJW1Ly",
  "key21": "xaEFTF3M1NvjQ4noVE7WdWeTRaWF73NK77ssvB3CtSdsMNeZK3e2jL44ZAkGFsfd3MopbAzLPdmhei4knYPemAF",
  "key22": "3Y1uyyJm2Xfpo3xQkXmSQkSjEPxfHTdseAJ52ya6X5ndcys8hmVdE5WsHzVXvBnofXbszA2UPbgM1bRPobYwEkWj",
  "key23": "4bGJbfpoj5DoLyGmEZMWrVCaRRgo3NSWiaKhonSSsbAwBmVFzcU4zRzqRjHUv3znmiVRwJyaHqiYJK6vYiBqQMrx",
  "key24": "5BSxuxKto1DjXVCMRsbXSmZM3GwBTVmDG2bQTo4VEXw1JiAqoap2PK4GffUpNmvUM7GLb8MYhETFxKVWEvLUrA74",
  "key25": "2TFrT2zxHaQgdLFQjoTQVDVpe2H1YFtZZDmvVSEYrspPjAK6ixADbL1VQddu5QZhWS9Fk2KKGCHbTnEfSDNi4BZX",
  "key26": "3vvWLYVhMihH9ucXdAPuvr17zVr1Vqd6rzesvGJyRsHSUvr1TbpUrsTos8XAy5rpGcbJrugW6wDNxyaXfJdftfZF"
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
