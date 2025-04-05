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
    "XwDS3hC7yq4HB6A6yQJiaxijC6wir5s87UuUJPBU2Vi8Lu2R5gA6y542CMKFFvaZ1KgiEw1zRGXiXsTydwQVucw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "488M452LLf4ZAnLLiq8hDJMNNBwXRTZKauoLv6JQipzJV6oWbrXhaEG9n1hgbhRggq7dkN9KQwFkp8pjYC1sFLSb",
  "key1": "5R7AYG2wnqYM9okKHoHYh37V3PnMmpvB7s9mwcyvwcmzNbQDVCuaEPW85FdBWs4VGhbiw9PjSXwXvpfdvDMWiLZS",
  "key2": "jLHWogpNvjUotestMAcCebDwg4K6ZHWGLcWvCbdZuKVRRupL3b6mccfrPTZekZkcDwUN4qiwpHMadc78Mpwyct4",
  "key3": "2H3vQq39VJrmmPtMqrwuEhD8Bo5XxDGrQLKDmRkagL4d8Ky45dpFYwqSQ5QQKkoo7dPWjdtSNJ4jCkPyacTgwijp",
  "key4": "MuHaTNBEDYyFbKZbbngodSG5LZQtX6SqH7fyuoVNmsV8LLZJA9BjHA8ixaLW9P6bAwmTAAzoTk7f8EL5sKSX3Ui",
  "key5": "2oVY3BzuVFGGu25UuxnTfF6tf5AMwkCkxAKgtoPpn5RkFqtStRxRYFAQJP43KyBPhFCgHFfSCACEwV9YWKxrQeDC",
  "key6": "398MZdmoFbFUpaX6A7itXT93ACDHikS2TmaBik6biBdP5Xdo2crYk5azYZpkqEAyNadCPXexYBXzffAp9YUndvGa",
  "key7": "5HYQKuseJzbkPNJHKeCesubxorZabcEqoFLkhxpDLsp6dx5YCf3jmapTtXC8WHwSVdbLBmrW8a1ay4npzmX3AMfn",
  "key8": "4QZxADYN4B9LCH7JDz61M3uGMRQ5h4ZnfZ7uvwsYKSsVybGSV5sTjxUYnRemXqR3NRzcqDQtn1pyjCpMpA2bNEXq",
  "key9": "t4gbkE99Vf9DmKK2dNZebxre8LARYnnw4FksKzkXCTLMwty9fCGvDXhhM5t2MgTqm6bPGJ3WYq6iXaR4VFmKE3A",
  "key10": "2ieJrMnqswTEHj3gfurT8Q6a8wC5Ficf3zXNfzenUjePqbtV7Q58ivaB8w7yTKmxbEM6mWzAGBFBP6tsaKkZ2Sq1",
  "key11": "5LArBbjLciTWGFViqzxUJhMfjK6Nc5hVarUKy4CuiZsNE5UJismM6Pt8xqwQ8waTLRVnWCy93yoSHCTuuS3hXGi4",
  "key12": "h8zqZbH8P81kY2u31KqME5W7gUcALBmLpSQ7ZXobBRGzj1QLrvEuaWs7Vq78hhcHrVDXKTxAdp6RMzK7pcXzcxp",
  "key13": "67fUHEYkG5wxrei7HSWz21LHcZSkDzUePWELv1UYtLqBzenbstuDmZoBbNzEqTWawbQnvcsngCRuuF9GXzhHV82e",
  "key14": "4yCRBCcVwoCTprWp4eaucCMMfprAk3ZA4HSZ9ruhr2gqWLdogXKmf9D698W2gqoP5V4Mg4eVE76bagosFc69AJgX",
  "key15": "3zJS1Uga64iFxbCCVEC3ohTJH95udz8EgadZ3sqfrapRyz3umYKdsv5WNdb8ujQQA9i8CnFZBxKG4qqzcP17py62",
  "key16": "zoDC3GKdgXKVz4XsCxxgXnKvVzchpKc2NVCAZ3zCGsw98BGURoCXVmW3XmTmN89Kvd3HWUa8qq7i7EDKmM9sWap",
  "key17": "2MYGHc1W288QbCRnmysni43t9QCewUVQwq6Liro2dequHpfCBboBYjaA4RtFNFMEkK4FFNRMykBJdKdNHhQXSBDv",
  "key18": "61Hf8iBywCxd8Huc3RNjhiFpA2Pix35F8JCV677w2hbGtydmHXHdQ8Xf5B8yQvbt39uJg8iTrf3ThRBWmhjGHRgu",
  "key19": "3BRoSueftQLFN5SSLDAkFdGFou2SqsNkDxg9PaE3a5og7rk25ZJntaJx9CjvzTGSbE4ofh3hUXfQ9HzDfNkdqck4",
  "key20": "4ygAQJAt6oYm7siM3oQciJPntkzBniS4w7NvPyGuB4uRYay1QXzneWCpxMM24hfFmN1T2oFCFfQncbbrNK3sCQs9",
  "key21": "og1sN4bfuGKejysq5k9KjLwCzRfsmwdovEgfHCWcXgBNKrgJbnGNVnzWfvjue2YhL7C2RhEdfMxvD6kwdiFcik9",
  "key22": "54dsx5Cw3sJ3FQx5mQ2fzjJdZW3EgodiMRqssQPmyTVUqHeEw9453rfrByaiWmHPsHEEt3mcShBEJfvhRgfxEsjK",
  "key23": "35J9QHNn8sYD9mqFxxuHZmUZHRuoV7pfGzQG5PRAWkivB1TThPf92AT1ddhUKUQspo2gDuKGvQN9FAyFqp7me3d5",
  "key24": "4bEmpe7VQJtekGTtSBM8JYuxHkeDmxGxMUFgHRodrskGSJe6kg5RfazZVJmztYzeRaroTY3dqoLXbaX6JN33BkT2",
  "key25": "3YJjXcnDKMow7ai5nfbJbAX2w7tg2PKmKH3QG8n4S73MokX4Btkh5CTK2nEnVbmHBsPcgWjhPWsQxhe1rKH31N1j",
  "key26": "zg8RcP87jUiZKccQRtZfdaSu5SecPT2pvHNY626cWrGLFZj23foLsxRcUdLa8FKFS8Fqv111CwSatymNZ5oacRE",
  "key27": "FnaiotTR2UDBGf9YCe9ACcoZHwRj1WPEwuebdTpZNWxeFvA3392SJpQpUZrgJnn6JjTpqsyuAN8ktPfS4tjyHt5",
  "key28": "DUp8f1TFS2nLkQKUU4w5fMLK6vN8yGFPR9y4oZEsSLSb2iz5bVkak2kqzP3FvA6CtM5LXgo531rzTBh7q2gyRBF",
  "key29": "1WmUuHwSCxCumampDJVMVKfFfu7TmzQsWDpNFgeDhPTP4S3jw5uX3MjEiueyKLr24HQ27MXoiWGMfw7or9W7idX",
  "key30": "5i9PWAMX63RNpyQJ8voC2nhnqNhqnhbFQ6rTEEegv4aaadyFM54cLh26iQwhGYpHRFmghcmFatsLD7KumNmnEv5z",
  "key31": "3E3emgwTyN67PwA6299jrEVURnbWtgcAgDnzWwrL6MKSawhEhHyXdDEgRtE6YmKKEB6H3Z8a6egzqBa4214Meypk",
  "key32": "44hdCiumHbvP8gkk238msaC61N1rrSk9VBtC3jh2tfARnksFb14JxQEBYsjbvZq7Z7j2zSGvrfjqTxVsuEe3fN4p",
  "key33": "2hspcLFQNmucZL7186bWH9tbFSV4uBxCUZQCuGsTQFXpX2TSHmqBfdv4XiUFt1zCw7g2vZVrpfjhsj4pJCxXWKPJ",
  "key34": "4Nzqo5CiikJVgfQdUZgVVtbKuP4voPZAx1wTjXE1neukrZMXdxzCrERXH9vvqm5rqeZHmUmRTY6zCtDwrhhdvqMD",
  "key35": "67C5F8sfYxVJQXj6QJNrftz3CK3Crm2mfwRKiujcRWeQzCxxGVNn98WN57LeUmtT5rcHoJSw5vm2aqyYYBzYhMt2",
  "key36": "27RHd8RyYStpMHZd8RzZMdUWfmW5ckDa3h23qtNCBukE6682t98FrriZK1tXv9Eh4pSakBartq1u7YmpayE54ojP",
  "key37": "5mdwXd28Gz4Sk4pLEhbrAAcbnYPrSn3B7CVnJk7qjKygdenxKehyhkhZ1yoQ72NoSJfhqCg4a8ucdiQ9XcXompgg",
  "key38": "3HMxYMbBQTFD7heiJZ6ApViWeDZ1cufd5SBvKvAtVHMuZu3Mwa1KBA714EBtroAMCPtZYXEDVPTVCMBX2PJ1hdVw",
  "key39": "wyWT8674rtZL8ELuvYrRYUuacGHXjmmUNGFT3zUfxykspfPnPFdeHn7Kgai6xMcLdtVxVBAwAZYLJnjcgd47UtD",
  "key40": "5oJLPDRYBaofguzvtyHLr6yqte76ZgG4E5mBTeQAoZCxFfVEjNPPnDuXTjF7Tow6LTDXQ93Dv98PFKKA5GNjgP1y",
  "key41": "5K8cZfaBhBEL4QR9FQ7ZnmkmQSuXpqbN5Yv1V27zSNRrUGg5j4UbrgzrdLH9btUkuKMJXSsa3EAC8tJ8TxAJEsMS",
  "key42": "5PWBPPhMeLRxwndHQ6hTFSA4FHXgND11YrwShUjYPZPkEGXN84Yy8ALdkBrz8AYqr39Ns8PoiumsKybcYD3jNWTx",
  "key43": "k9VTYm2ncyvKoE55eQGJpjSSWsxqYsjszDnrC1xbMLiGXD3mH8HwmMEa74HoHodiLTtdTsPyerEa6hDYSnAJTxx",
  "key44": "5TX1hTim3CueUfjyJXrvDWhiaZLEZBUc9ec4NCoCAdBmhfxgQN16PcJHec3W9BW7mVdMb4TpdLw13GyS8wES4BNM"
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
