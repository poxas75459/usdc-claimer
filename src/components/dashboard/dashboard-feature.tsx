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
    "3dXCUzg8JzNxLL2eNunK7vPwbmhYVasfNQQcgL3M8hfziKMQEyw7t7jgwK5TvUfFcXTXJTd2LEhyLNPenEmKZdNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KTzKERTovbggdj4mRpFJfLV8ipTeerR17JWmZwP8Vrc5fnQSQMXUmcpfxGmn6sA4EWjVgyTDEhwfuJEF8eZZhSm",
  "key1": "3gq3TgsNLmSjhRTap68XqzB9UGwpATRCj8uWvKgd3GYis6bFGPsGijTLqkGK1j8PmCKrpS8WkmKnA3JvJPSYw4Pb",
  "key2": "67Rwqxo6vtorRN2V8aFm9YRpL1eGQXr7vv7mWxfmqRVFGFQGRrQ8ywPp4UhSxsigMtJksLxLdPj2ZhzFWfaytgjD",
  "key3": "3EdnHbpA5ewbLtM5JdK8xbQUxhJQWvjM4RxbDYduEKBdDvWdNvAXQYtijWTf22LWKagJerJBbvLGK9K5kjPHzZZh",
  "key4": "4nxvwgNUWrmXx6LVgXbecopYqr5YcpNeywiFEYR4ByggvMoPYDpRokcrEGsP8CLcC7huCKn7srZoZTcyaBHpJj1p",
  "key5": "5ruGXViENQrEraSJ1Qi8XFKTfcsgLgyikx1xDcUcPMvssiEKoawu2nX9dbsVa1HVYHH4b71FcXMy28DGZZ6tjXfg",
  "key6": "F5hiLAV92nF2DVFfTSuY3siRJ9Zw9egEiZWHnA9ryph2W7WepzCSNrzVgcwvG5pc2KKMK6AXVxn83GK9RciBhqH",
  "key7": "rqTnLTSqMteYo3aEsaqktMtCi79yCz3q5PzD5CKCYHHvTzcXoDLkxS3k3NjUazthfU3Bhq8ygaduRoV26TfLrfe",
  "key8": "2zMLV4uTjjU4eynkU5Bcd9JRQvdxQvnAsDAw5MF3ubBuTug8FB5bViECZhzTtbZnNt68gczJBh5x7taW6bGZ2w1M",
  "key9": "4pJfYU5dVEEynojDmBhczRwoqNNMkHitf9c6Pg2LGb7XmZ1e8vLcVK5JFARrU4HxxHpHyHTsLv8yVSvfEAprc5V9",
  "key10": "2HVRa3XagbiHs84AonRY81Rr17goSHMnXe3m6rZNdiLWANAEAQwabTdxqKJtrVSbPQbkctJuLGWuGHE4K5gmhUTe",
  "key11": "21jvaxUz9oTeywzDzmUsNiswZMbuW8h7jizQ94XoRP1BsGJyZP9wk8JjcJmL3iPyEvkhbPRg9pUzgvBpzTR7takH",
  "key12": "3ishDBu1GMGAabUn4c17xNwgBJwkguboSmYotD12a12VCCHPSxvGipCdrkPKo16Ame6jj5kyBqwyrEa6GRJX38rD",
  "key13": "5hUFDxtZ9UA2pveQNyLs84DGthbqY1za6HzpSkNSPuPzBwjChCFbGwUuNmqL3YNp8hYzZTdFCpmThkBXB16rhrpv",
  "key14": "4CxmswGGLhMLTppfdSStXyXSQ8FEir7bZ3zgbaDg77JXwEFcNgbBjyLvEjeYNPLDpFAnCecQu2WosCKY13GVi6zW",
  "key15": "5UWmSFBm4BKAXJ5xkfgwmXUHr4jdN6KcqEcaAhQ6YHDXV3XYWTDK1EXPUZLJ77nJhgwsv133ZeKFvSFzfhfgDzaW",
  "key16": "5KUDYqJbMs1k2VjnsRxtvbU8E9xfdZk9XFDz4V79WpepdEyj8vMyWhaFcDkEp5UYyDc4v3fbn4HEM67uD8KetWys",
  "key17": "ytjEXnHE1L8G8PNdqHNeUE8ei54mq1H4HjHtr1WTaC89epDfihyGRTPwQDSuYMyeSPwFB6CT8L7yLwkv77myiWD",
  "key18": "2KBS1Hjp2qNWDRrSiJ15qzdCmqhpwwkDpTJAGJYu4Ebza9GzHKZK5RorHi8hKj3wfmb4FUjDWyRA3e5cHzTTPBJK",
  "key19": "3iWUXRq8SmM1vgXXn9aJXfmBZNT7obbNLEV8RikGYcP8w9hfkbuRghZFZKr8Ez4JYRx5r3XAutuyQ5PuaEvQ87Kd",
  "key20": "4RH1mW99AFBoFgnCiJVi9yYwdbkRzrm415tmNZTRp5i6MNJzjw1ZQ1X9MwjrsodXfMsL9Ajxi4imtZufF5dsbHvd",
  "key21": "5BMKqcfnkMJnB2icLwWZqND1JxqQrU4daUS5joZaXHFeotxKQj5faHDqJTrzSAEGSEUZZohx1hsRFy64wJNZG8dG",
  "key22": "4WyfuoMVW6ob2eNsc3xqdWmtgWjopNdMPejmMX54Ktx3jbnGrN3u5tm8mccr4MVkv4WiWpCUUsVqmxUmA8b4gyCu",
  "key23": "PCVYPiBCb9CpctYEHD3Tc2cVzeDLn1jzDVq5uSpxYBMvY6wUSSVNDqUg9yeZTM69C13vkcy5u39cDWjC8NKtJE7",
  "key24": "5bJXGvHmeM8dUyxXeN8TWKb87JzoV1JLY3RFUcvME7R9bKt8xxvQY5GKSqg64wA1PwdJELw6NnvGMAuPvKdSxDT",
  "key25": "7hH7rPaahuu73Y5xA28qXrMhfeaAjiEsmv3LAoCsBfaC18FFE86d46v3NJpQQZ1P7E4xwpjVLgi7NcLBF6t14Qx",
  "key26": "4Q62yyqJWgxfJ1er2fzQm34FGXUEGwi4XVRPqQtszZdsdQujC1mShdQNC6jAZ5y58nsMhjHSgRtFZTLzzfk91ygg",
  "key27": "3bUceF2sp2wtbP6BT6BcL4kVGWTi8QQcDvyGuqJA6FzQqpg9JA3KCM6mGV1QxWUMDnQJV6aSpftVS63cdQ8TTb2w",
  "key28": "FkEVRefds3VJ5ixC88LgQ6ozyaYhmefqn3SDbRVLEr4M4cnEZh5AvVTJ8JEU7Kh8HHPpQ2cCJsXxA1B62oN81N8",
  "key29": "3BaF58PmfQmh7WDAZGq1vhPJaicUmZ56MAAEegyqVvQrH7T2HnVsDUHYChtMbqv6GncMuVK7a8dPMVdsd9FgkAHv",
  "key30": "jqqCHo35e526uDASfknCcwvwwLxN6e2ELXikoi6dQdm3gBpXQ51jajR2DBH1CNK8GbK8spBJLrj3Foo1xpptdH5",
  "key31": "4hMSqkvDqvuUhRBDkoM5iAz23Xf8uT6EjwxBGq433Uq48iNuBc58j1kCt6UevBXZMrx2EpA2JA4FjQabwD9p9Wjk",
  "key32": "2Vqb1p8jx7hkkXSbE8MGnP9nQguY4vRHJxaHbWy6H869KbFNRiwKe17nXF9rA2g6BkhoTaUYav4MXS4vuLiBX55k",
  "key33": "28EGuYwFZH1TzUcWhTgFvMtffsXtJviDqb4Yqiq8yBjnkZsQUabXgrsEmiT6hBTzDPMWj8nc3H3j7wVXMrke94Yy",
  "key34": "ecRhwZubzAa55iWM6xCGUzRxBVuyjYa9Ewm5k2uwqP7SLUCFXdzTZ2Fw3EVqp81gADBtrES4JFL1Lksd47AyA2C",
  "key35": "4kCp6b49fFWqCu4wwpJ8iX4kpxquFrkNwmfsTFZkY8WfgEdWc1ojovmWbs4NvehSbdShaiB2Xcgtd5B5xKK9QMLW"
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
