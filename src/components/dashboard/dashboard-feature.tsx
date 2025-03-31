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
    "2BsAwioug7GnAbFqjdQe8wCYW3M6Cjxj5tyCmtD2ofHTj8xTUhtmeXEUN8dE1gAkPTM9d7AXuf359ZhhhXfNbX2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ovKkwYy3ZHqRyMG3iFh4rWXCn4X8s6rsuQe2UpcXR37zXhf5emAunDvA4njBT2wgJweRq9FxW61cdct6RiBsfoZ",
  "key1": "2LPdztqRDkHTna5PxQyGNWZ1QGcpFW4Dqvs2hMYDeBSC9WpnV82kMzspHXF1ZveepmK8ojdUaguRTuaS1PnLfkMj",
  "key2": "3LiaMeDFiBzrwkYqARVzNyJpUm9Gcew5zJQ4FVhWKDJ4dCGSUqhNNDihMWqApGJxNUHkxdcZfept3uGA8MiMpE4v",
  "key3": "3JmU1FZg4a3AjF7PV7Fq9jbN3EE1ZP6DmSvsRvuhhK85Jnoz4A7EK58h5HKv5H6HjxcEJtmepTEB3uZUwZkU1mDE",
  "key4": "5wjnbXjXEY6ruotTPLER2xXcCkRHTJYwoumXzSjamirp8u8tXr4J1mWC1NiVDefgckDTgvQGnhTLNNfnCUJf8tVv",
  "key5": "2vboSsBNm6cgmhkszB4M4DKyYb3P2sfGXvuiYdtdbePfTYDdDSPj9Uy1kCZaosRGuG3emL6eiVcMe6Ak7wsFMLF6",
  "key6": "5KHqZDwQni8KkDsPBuqheXYcbBvh1J19Kw4YH9PxcrPJ9EV6TKw7SBqQaucvGVmR7ZKbdDdLmL9T7AK4CkK1NX4g",
  "key7": "2QeVA1Yiqk3NfWpzJ4v5NyVYt2FD3ymb9FdoyifB4g7WNtDxvhvz4NQwiLsADfdBf9qmXNBGNFQPcEekN9C6rcD4",
  "key8": "2eshE95Xq6QrPYR5XEnDhQrA2yd8J5E4bs6vsc3XGA6S5Yiw3bWUWHCPAVis6h2wDtaaKMTUrFxb2LgqFwfq5Np5",
  "key9": "5otyr46z36LGT6Ycx6mqc2vqjXkwnswAG1mDruGHofhRVaVdjdzjZVFGM2HGYne8uaRJFeMHCZXpckkiezbUJ5x3",
  "key10": "2ZupvixHjGzzqtrPe51vpnyxNp3fe5HxqptZc98EUEfKwAosmVDRweYopDgW8dRE3hrAV5Cg19zAyeCxdHRHuVcp",
  "key11": "3SSC4oq26bLwN88r7XqvJCP33XzdB8BrrDVtoLEkAiRRwvBbCPasq89ckN3qFVMj7PkD58UdkpbkJLQT6AXe7xTu",
  "key12": "5PpN9jCGn4GgQZtNucPHxLD8fVN4VYpTQyr2rGHroXtJLcvCnWq1tBNF8fsERDu3xJ8ZDu3nCXCmutaMkwiGCcQn",
  "key13": "5FS7sDKFYjkVANj2Lzhmt8QoKoQJ769afSpN1yooAZrdQ7ZANc3gpbbisiHpEBUA4wBt1W6MgypVvm9gTpNcyFuH",
  "key14": "5DMBQfxrhvkiSSiZeSBbSAyrMkcxQHBDBgAdjCmLH4ryTnwx9ADkJAFQ1CNXedpRSj4fpvsDHkqVnHzFUrDhfku",
  "key15": "vwwtkcdHUv1untdtt9KzyUgD3g1R42y3WjSuPnteZ6Tj6icqNUoMXwY2ujMG8hDDetekpYwsSgc73hk8t442knd",
  "key16": "2Rt8GWacqSC2pyn64GWC2cfAY9srdfESWFN5aJwAABAyAMiu9oHWiFyzKxvniByRGxfj1NqpNmvJUXbu5CGv3xXh",
  "key17": "2QfbwTVpbfG9DC3dKoHGw6UZCz89FmcJ1ZanxYfkxc32JGuW54oqLUZDmV4fQajrsz3hUvvxzLD9HrHXC9doGryh",
  "key18": "5LZE7vZZYm2bqrATUJwqKuuaqgBS6Y97RUX4WB6Vsp1oReKRU2zQkreZQjvE1Addx8YrCX2wZ5y47WAcfwFPCXxW",
  "key19": "5XrBruiJrNNL7NF5HGtmEzYdRJR5H7Hbqyv4JWAT1Mt959mSj5Aqk7ZgwtbqptUbWuU317DgYeDh9tMMF75SS19Z",
  "key20": "3nSnn8vqiKDHvtTR25oR3Uk4YwiBEuVNdZUCNpT3gdZQWcSXg43QaPdST9QdJn9zK47DTTJ6kPNin1y5rapxbk1G",
  "key21": "674DsnPmqteA6MQnrH2vwuttGCnjBM6JzF412KPRs4zxt2wt3UxwuWmFeAYSYRjycyqBDBKFbZ7TgjdjyJ2fwy8w",
  "key22": "drBYjAtqG8zuv1HEmri6BNLQYbkaWoeHaLP2cHTCp76MSx1YGdWxvRFhodmSDBo2MG2xvgX3v6vVX7TNRQqCikm",
  "key23": "4LadFdrd9NZnv9U1bWwRqjNWsXGpjW2m1RZJ9Bu3LgUqZsdvPeBoJjDLAcXvBAfqtPEjK7xEUoUzwnHw4Tzyo24V",
  "key24": "2o12UERsvkMpjSJeawhEacW2enYgTHuoepCGn4eNph1tC8GZVGDcJxJ2tNoDeUCENz4y8DGxBNFFAQxC9ZiebYrm",
  "key25": "za1YMfL3LACzeEMjLnfYbAUT9YX72KNaBcNhzTRo7T44w3of75XuDSyp4R4rQdW7qnHW31yaVGizSnREdAMNg5c",
  "key26": "3QHyrSB1T1hLGN7fZu37havg4pQ5uLKWxJDEN5MMccXm8EHdXwEq3bw6FV841sjUP2ubJMZjfPf44KJTSrQvzD9E",
  "key27": "5eyhnNadN9AmXxmEp22c9frEBVvgj8J8DVfKuDm3Nw7WBTXak1eVEwQ6gvAuzfHSjCGdkiJRjJJmLCPakFzxusEm",
  "key28": "5V38nfcSHTAuztTQdW2jBrFuoypQ3KXJgXYdkiEUR8bGD8bZXSEofvxuPyJaUY9u46E5RqBmMNfENgYLhYoMAgQu",
  "key29": "5nFiCZ3agyNYhzhEpXgTUEJqKJWmFsP5vQTqRE3WFrujWKveP1Gn8CAZ8DTQ15sk2m7u4meRBqK7smHb3bxL5GNa",
  "key30": "2gFHXd9fxrjuSs9t7e2jVqRwddQodRaSzXRDS6FwubnrCivsyQ1eaXLnSthLsmWbYDD14rsi2SU7b9oZAJmYwgCM",
  "key31": "2kepX4kJK2Y3aJ8h6A159hU738S6tWFFmTLMLYC6w3U9dRTDSVUtNuuXpP4NS36qC6CqNZDQBhxeXbX2WjrHPEmZ",
  "key32": "4KettMdE48vBKJMs6N7rUEdbRhmYwRmdUbagGbHhFxxTAX9KRCPMK9SyAZZSzbFwqbZqw3rUcLVfCmeTTkir5gqX",
  "key33": "53bfhSo8msun1Joqm1sUPyiDZaXPGCdURyN17WSb3ZDw1qoNm5SnBiWcybdG99tWACEs4n24Qe1jgawHBTwzW29r",
  "key34": "4k478Bi4VNiX42P47aJPzwFPgPVYPrcdzWbn7h9L7qozc8jBxr4fefaMCoejSKhsRm83gns3ALsxxjzSTE6rKdDg",
  "key35": "5NFugEvhHgbZtAVdS6reuBRM6Ri82p2ibNDhRUjfmDcF26kMXz4ZYW46tzLt2zhcpE7XiNbyYswc1wVQfzzZ6h8w"
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
