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
    "2v3kKUCvM13pBWwmgfVzYjqVB2YWsFfLcWh2e3cdF32kJqStAkV8vPDamyT8NZdrah8GBa1VttKdpEUgwwHHJWaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WjzdmgATo3CYFUSnQ3UqxhA7e9Y7aBJUyMMCBeeG6C7g9vmXdGAzwRmCgY9jveTJKQDtF29jGkgpx9rgPufuoSo",
  "key1": "4TS5TbmX48kZYNoe89zEMBAoNyN6MaRuomwBxrvem9fPgKo1MY3kTYVoF2NP5XyDGyG3g1j3Wa658fUJB1ZUx5Li",
  "key2": "rVoFQy6DkzvVwFKPWySSxmcKV2xNcZ7zzUQeDYKLPWjGkNJwuc8CNNssrBnJj29a8p3Nmp82NarrSinYBb85UDh",
  "key3": "3agFdK5Fk4gLYTpn3Dv3oR2k6yUGzTFtBC3iwUbP7ALQAtEAAQSSspuL8Jb9iN1UGfy6C87xexVjCeizvkR5RkiP",
  "key4": "3YGxx6V2dMBdKMq2X26BjypQEZ6xau8CstD8nHWJe6yu8MRMWxd49bwRU68tPNarpUSoe1JUEnynfXv7KBSZvvSW",
  "key5": "5Eq8nPHvApk6fqNtK4EMu8kfR1rcZutGbBMkcmUEwkgBAoND4brMv4BkPtWcBL1iDssZU3zXmjracWxgpwyEqKDY",
  "key6": "2X7rfzZeXWnPs3FU61WvmM69d9M1tjUP5E9oh3BDF8WDDHdzEuKeboi6jnYNwmgiWwvKkXj5PZ37iVkUJbezL2bB",
  "key7": "3gB5CF56x8VF9oMRbEUp6MNp9tQwTZbpK3wqbKUapob83goXuQBLVYxHka7eWx8qwBpfNyLZ6jo1X7sX5YRJaWnz",
  "key8": "4NcGGPQwswvkBa11PQd8NoDeuBEVHZn2HePA5SZf2HWRiVHm9pHPrcxqF46aDqs5dSwJDUuyAMvixGBQcmbn5VKN",
  "key9": "3c4ky6ZejHgkQVZhQw5ydfGbNduN5wrMJ5VzDTR326VK5QukT6TQGukKPQic8GkKqZUmrFjKvz8KB3VdVz84joAh",
  "key10": "3cy1fzWT9SMKKC5p13kPPQhHhhAH7P4w2X13zg3p3Hpg99SwteFXepX64tXHR4P5vzdJ4PUqS6X1LuaJVd27Qakv",
  "key11": "JwTTcfVmxAXEQ5PXxHZgVFVMThG1rN6M1k3UHC8uNiH26dBoWdMJJomthqwTfCko8f9n2qyomJMY3mbpy5jSNNp",
  "key12": "4Jf2AYTZpX51h74uNnq9C7B9M9y5v7ScNn1mGj2Z3vTypWn3vnAB9tr8jivwKDDZswi5TQuuRa9eJY9SJrGJWkPT",
  "key13": "j6M2dVTQM9ZxxGbcxLnK7Vdo4Qy2iZCJcWxPZw17GuSMe6Nz2BapNqKuGwh8Hkyr9nmk96p5BDFLwe2pEqggrXY",
  "key14": "2gynYVNwwFRZ1hypKHmu853siZYH8P7uVgnc5mZpr5QhLsTxkgN5zbXjcjsL6yKgMJrrySEGbUgg1LVqy5kPkSSx",
  "key15": "KJbQB3DocA3CFznQFAC1k852JAWdrtDUZSDE6Mp3dCLN3TpuKEWCoftqJzvhnpZ7cviDHsfBJMVRH5EMV4CbUqh",
  "key16": "41v5DLJkkAhymFMpfXTrQ7F2ZXpdSoCQecRr98mQaivkSfGSbzTRG9Fn8nnFwhMAKgYTfmoYy6dkm6C8Hi3EoouP",
  "key17": "2ohvdnQ6csTGQ7VbeaTXxPrTneSq68MBGzBPDa7HB2RgZVfzDypwrfpi9MgyseLUvhZrmCLeG2erq6SUotfrB1zf",
  "key18": "4jHHTVTv9ovpLwVHw9YFC4Fps6MZXHNiwomft3h2MbYzVHFkbFVgKAY3PyMDen2KUy8DZoUiNfh4RDEmTvhA5HyC",
  "key19": "7PxRGg1LpQaZS4RtN15TzAWuvQk2C4ajnkP8iJaQFF4ibqwsX5fCxGQpXydr4Mg744qkr5cmNvPnfPZiSvw5Xd4",
  "key20": "uBNdXuXeFV7RdpMEfpmmk3oDjc5MkBkagbzykGPtyujFRMcHyTnukrWAG7Wm9QpJjWdPncXe1cooYjRSM4GNwUX",
  "key21": "42iA14bSzVHYeMBs2pBF7UdgwtcuTVUQg6vZxMYNb5M7jU4c9y3NZ4d8AxtrTfkiDUSLLcKXiJyiaHNLktae1v1B",
  "key22": "4w8JuWAeJzZtpKhWuhNSTUqSr1b7sEF6NpSY6JENZU36RbgrJGP3zYNtKwLhpozrE4ybVxDvxizuyrg7XteWAb5P",
  "key23": "4WCZWTais3djyQdNecG3VwWs1RUZEQ1SE3U2X8QNW85E5oZEjQwNmTKB13R7dd6USL7NuQuiADSZcRf3jvzP6EsD",
  "key24": "4tddiURE9tzxRhUfn4jLxWjHfeq2sZhLki5Gv2eG3sojXeGAYwrhytrr2ju54G5vLmYi5bDv9Cxv1FkkssTx4Mnk",
  "key25": "3WRnMHXAzEsQF6hoknC2eUKeAQijVU4DQqAN2QTLcV25pKaZr5BDhwJobUmsw4Wh79s9pJUpjmJWhKxF9p4nfvSG",
  "key26": "4dNYRSUjmWDCRsWUwrjjSFQduVXmxZeyArBQMaxde9uFBEE5GidFxjHVZBpnUrcZ8PqDG4u5EtSQj8ZdDjzVYbK9",
  "key27": "JyBbZhUFzucH4ugWA27uTF3wJu5m4Ket3wtvtBtwQaWJsm1e9eXyH264nMvp1XfhfMviidVz41vLQ7WkBaySbo1",
  "key28": "2iN3SamGhSJLXeeQGE2enHrHzwZxk8WXYyMrTi63myDe1qkePZbDXaAtXtPwiFdcGgce534UEUYaAbn6X8j5fZUs",
  "key29": "rJsY1LHEAeNFVEVnaGd76UQPWerZ2HJ29C392Rz9KCCMhioc177YzhsMHKwGubsFxdMyL84Pk7CmcvE3yaysgWS",
  "key30": "41FqhKWg1Ec3KneRGQ2WY72wDm6mJzKvQiVcNypChhQNrwhF7YYVWneaLPnqycbxcPJvmm1t1WgMvocesHqs1nbF",
  "key31": "3hBVSHHpCh64t6ioHEzz7exS7sF8SHB9LzuixR2ZSY6yC2BbZYSNUjVRVWAxnckWs25dad6BE1c6wWsXHp24Dye9",
  "key32": "2QrwTu6k1JH5xtk7Nf7NrS4RU87Jn8tvsxpcmLfSxL8scR6JDJAXMQtmoKHswKD3Db12L83r2xJwprWcEYTdiP7E",
  "key33": "56S4PY3NdLU2f59BLLnFsELKcXiC5xDNQdQqzmRSGM43wpLge7oazDkW2i7tBuuqu4HCkdEwaiQA8EA9Sj6Frx4D",
  "key34": "3RpyXskUxbj6T3rMJYZ4gYW5voDoQe6E9YCkw6qSk1gaRkbCVwELBRGjm564GX7ZzVZTynXmQfoygmcVQB7bRNyX",
  "key35": "Bq7HJswTLzhfVqebyetbNThZHtu7iVVZjZG5nGFgQzLNj28TyCNsEDQEQ7Z875XVRCceZw1pBNkXzHnVVsxjaYk",
  "key36": "4aSSKatoDCq7KhqH4rRLZ1NXMpxjuhihPfbLfhR5X2jgRhdRkKPJC9Bqch1xjxkxwiEZsqhRjED9FQcqzNkwNFto",
  "key37": "4uKhzuFxZshgGeWca8ZSf9aP282QwYFqad9joDYaWt3hBjZ8dg4R45hqifvP5ZEU6orzEydJDvnV3msVFqRq6a6c",
  "key38": "2GQa9bqPsnqPGKA3ZLPXM9V66Vo4uvh39LnbVxtqZmyc5o9MJtKSo5Laz6ERTZH7rxz9mxnhftxg3NJsi3EiWki1",
  "key39": "FsiYHnk3562CSCWcQZ23mHADHfhd1imZW5dbWjL1TWk7xbDGL21ronhfi8RT9PavPoU64xWMaji3mfnTMKfDSww",
  "key40": "2pzse6nk2hUQpASkHogHehfBArDstqsJcvfCnaK5mFzwiKPxmKYMFVpuq1kob5yTs6nFWPGVoXUd1y6fn52Moe1c",
  "key41": "vnr3wTusTaPj8k4iRo89BMbv2kqxpF2JnfGqXey1gMBXBgBZgXrk4o3MF9NDDLiAof4daPRP4cFnosRPzqRCtPT",
  "key42": "4sSkEQMj7PT36vHKCDyyNhFd4Q1fLbjRF2BuLTHyaind8HQvfKBmLHJyix9kCZWLMgrvdZuGHEb58XfcjEMfeuBE",
  "key43": "4JLmPx19fDyc6a5CE6EGqEx5EB9pTGEnkLwcX1KfzCefeGRMTaaLBdT1APMvWYRtaKxPFJCSVxT3rnUXwzTofnEL",
  "key44": "2bu8TqXy94ZBRQyxsBT86kAipGuYzDn4CzZdJ4vVuYQe5qA1VdTmGXGN2DP1NYyTQMoxeubxn9gATUMN3CiL8pUi",
  "key45": "3x76ciWuqeSbpnB1dA5AwSgHNzwpDX2KKdKpffCaL4BUm6HqJKNyAmXdDdRJE89QwHNaYPwCZHpnSwC1aEjn9iQX"
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
