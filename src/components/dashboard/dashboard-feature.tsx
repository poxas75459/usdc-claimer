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
    "ZnAFuisXprhSYV9o7AkDfSR2VV4YxTbfR3beyQR7zeFrNgNyr4VMBjoyxnbH9YJ9gq6KAKkbXvNo6cm5dA2dxV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41ofUJfHcxjcWBV2pFFWu5TdCBK9e98M2vXhnySAGtQJ9MHELTLg2vCJzsYKCJbhnXsz7KrVsaRHwUqz3aCW8Qm2",
  "key1": "hgGi3gPrTyDUGQALR8vXRnatAg2dSduowJSVxuVLhzCjJyViVpQ2LRQPQWQiFh7X33rzzbfGaQNWUpJkLVnpV21",
  "key2": "3ZTSNP5zPxt5TYmnrkCbsuV6ZDVyo8Gr8tNfTkhriJQBDTWHb2xXFEhKxDdmYYxTLPzUxGTZWabCAyjVBzTCRCLq",
  "key3": "2qjdTenmX8X8RwxT9NZNhVVtcsVkNAMk3hgMRNh6zWc2B5CwsDh2ckaBN53dizJtaQHJQn6aA23r7UetD1zx4PWN",
  "key4": "EnsnexehtbeKYKRNqYBi6WwCJHshA7R6NtvNZa4qJxF51kNhuzgykHHzjCE1JimRVeypGFZ2WMVzyYTbpNcC8M7",
  "key5": "3TtQtiCAvjzZWB97z9SsED95ziCE2fdBXsJ26qNNFVmxuHrisbEUmv5PyBQbh7EVT4gzGbF9Z3tVhjnnKGyCukf3",
  "key6": "2R7GqsJSkVFzKH7whH8PjWox773kSZqtLT5G2VdyvYQp3UjnJfaL7Loh5iaMyR8Lm4dim6eKwfPuB1mUQ2kkzmhD",
  "key7": "43UPuZqohGKzpDdj3R4pdu9iYkeUrnkvp1r2phhEuods2MFMvXESfzi3f1NHkpRF41oLHTEuUSt7zS7RtXiXwx6A",
  "key8": "2kiJ4R8dovybLhw1bqDJZPHtkLbKpKaF9TihkDSaBAubuwcWfby5ceE4iPooV8oLgXJGtHVP8WCQjDyL266HGySn",
  "key9": "3UAjV1jcM6VCMTxeXkyYaKit5Dnfykw6jAuqhBXwJT1KEaMJb2Zh4FkAAUGAABir7FkqzjMmZFru1yD1MJu6bGnf",
  "key10": "5XScxWojBhjqdmxMEkzdFQHW4f7JoXeYzKymCv7GQMYbLAKfLbseRJmYTWSidNMn6PJWVj8RfGiBkTUt5haAvKBs",
  "key11": "Y28mrpjDC1i7BBfnk66AN4vaMB6ByfoXNkxDq8f4r9EB935ZFYaGm4Vb9yXT7QUH65zA4P4nWQXvKmxGn23RukB",
  "key12": "5cDGyvnDpRXMaCt1fG9g2K9CjS6fb4fPo6k19q2V4nkHLWTxvCvcUFt8pPAVexa9F9x2K7rYYYN3Poo2n9gJvooV",
  "key13": "4jWiEzAwC3JtWW89K4txdUxdXFCQxZV477Z4DnqRyanYswEQmkLDbi37NfNE4F3RPK8vd7iPQJiR46niBWKUz1hZ",
  "key14": "54gvW7THqG6MDwA2xXajcEmvCz6iNcKxMpdG43WwmtPgVTDXNsfRqJuUV9AEAgJqjhwWePHE4LfKjTJu1rz6uhVF",
  "key15": "s9UQRcpzuonKnT5JpWbhQo2bmLzypnyZgXzWF5bKFM1AyGHoQvDEQk6gPRCKDps7usQnLEt2XHYnAWfViqJbkxx",
  "key16": "5ZRVfmyq4TNsJEP6jP2aNV1MTiJzBFq8XwPd6GcuMKC9msmSbAwHXuupY8vH9S6RLC8JedXoU33xjqZnGeBoQZqN",
  "key17": "4oCcqrnZC22hSLYb3LJVvdoUxTqqu9mtNU9tJBARM5wUmrpUhhoE4NhHV4nKxUDaqgKunj6X5hGQs5AGbbDiAwtR",
  "key18": "4ff27JLL3ziWnh83w7jwqfTJf6K81YUEuzgURu2HmwiKSunZTmvattBoRhKLVL8XBnBhwcRQVmmuYJPEERgPm1ym",
  "key19": "4rohBxUSCpdp4w8DaSDjBZzSJ9NSivEff2HG8a7RERUcLzKjceSyeL7ZmG8em83sfueRwwkV9zmV43KDUDgXYVCH",
  "key20": "544KtVCr43dKyy9V6mM1enYzE1raa34H7DvgsQ2PCXFT1s9hfLS9DU4t6CeviBAJg97SkJVKb3gGMTmRiWScviZy",
  "key21": "YPZHqMRtqgwgcEhpZmwHBHgF24368JWKJCX422hLioxucgsHHy3AAALQ8xHXm5tcacahR4BN1t18wMLA5YRf9za",
  "key22": "4GFy1P2HgGgqN2wu2AEXpVV5LRdYtYNGV9Szvp5QxtMZRXasQGidJXwdVFhJweMZFeLkFfu58oPJHTo7ijWi71me",
  "key23": "2ANuWZsUpbCZHYG2YdSJBH52eqvxetYcD3ijAx8NegHHadbPgfUmkjNcH5JFdCXGwWpDBRvtfXQJCq75i4PyrbxL",
  "key24": "2MqjFV12g8gKpVW5uZcojKRzfpdbBJYuXiv9GHqz8tc6ztTNJfXABF5bgWEB3dAXvvRoJHGPpD8H3rG4RRx5dsLR",
  "key25": "2u2TUQsgw1mhoasP53i7SW3TxP5eqWdp2ZbVQqHXQJcg962a4z8Czrr28GKNwJfNGQq233QertZcibDaHb5ujRqb",
  "key26": "3kh5x4XeyZJVLwmJ8irFqwySd7GrD4dkBNnFfx9HCfjSbN3krmhBFmgnARsHFwsgzE4uV5U1h9WK6w5uK6GWEJB6",
  "key27": "4A4b1nTemsc7YjE2g7wBv7rw4dRh5hx7J25LBc9JarYce86faP7tka6t5UdPWXF6urddmPr5NFNcNyEx2YeU9b5v",
  "key28": "5D1t1KwkXdUHCzJoD2KfuLk7jhN1xpLH3Jdi8ed8hnZgQYFBMMH7sr1FgVvvXDVoKBkenrTsMtKqdn59NP7jw4He",
  "key29": "4RpjtkaoyrBocuYHo3x9BdgUurQSVhgS3vjKjcDEoStkPse978V4sWPG9rKgCuJHRfa9fJQXSP8cd86hWv9FiVwQ",
  "key30": "62Gapcz6pDhdHzAVv2S116tWS7JzUZw1VhVnPYxuwMSA6pNnWdobEnTnMUNiGnsSf37Mr6DXhEiPEj3fjuuuoCuH",
  "key31": "26dLC5tuHc9FxZjeFmoBenWtEfKw92JvBhScuzKAHKRbVKmNeyDsberVRQCERjJ4Lp8HTdoSk6ahPNFz8uxRtyG9",
  "key32": "2nyHD2xVqkzA4WcxRNv74pTGrsAqNLQVKcdsbLtqSW1uYBXkXR3FWE6rJCx19ag8WMra6gnLnWxLktL6JDzEWa7k",
  "key33": "c73RTPw9J8KHA3HiLXjp52Q3WxPTCfUvuX4cJEGLTdUax8eR9JRV2YcvPdzEy6DHEHhUivkQpoNghCLJMQ1biBM",
  "key34": "4skZXjeaZLt2aMVV9dPweQKtSfJRsYgqndK9F4jpxicKM6YroQncvTENaeLfHrnNkH7rN67K31D8sm84fGB76JTQ",
  "key35": "5FAA2jM852ufhQbJHG7CrD25gZDDH3yYeEaUWqTXy6Ppvx9JmxFqNeEjQtWodFrZMMqaXVxtMR2fzNfiiojixmEw",
  "key36": "3udrCXMDoxL5fp6YBFcq9y2nL1B84L5XTks9FeoeDPncCwxNN7YCBeQVFPmLWkXK6UyEcARNavPUDYD7fiE8PzsM",
  "key37": "4z8sm22cdbpZkVsd6bgWkUhW4WzYR12q4jyDYi9kkvgm4eU7DUhtHqbrd35pPmHVMT4q3NHnD28oUcqN2idhgrSS",
  "key38": "5RF2gd4MoT6n6eu7VGDmdE88pi83VFShRFSiSmSotQ4YWph8yGYubw8QAawVrzdmjhDxY6NMyNQMMRnnzQWjppRx",
  "key39": "5w9VzYBz4gg4PJTytZkwmiGFk4JyPBJKxsb4WegwNDUDirbjdL9ggeAmijcbzwYvHWHftcVuCKP2EWy1ZDbfghZW",
  "key40": "4G1VwoGKnqxFssZ7tHNcLtFVoTzPcPx5PK9fVeFV4u2jCw8ugxxBdHsvQjwJN4Si63R1M9rdRex9X6MLUVuszpuj",
  "key41": "4d3zzyNFfAcEnXXRKPn7aLqCw3kXDDPjenNW7sgPwDZVvH1zEuymYuQBdtMzF9kBRcqttoJFe9vZAdqWy17H2A7M",
  "key42": "2oj84ryKTS1DSMTLyGGpmHbnsyzSQgPfqQX5FBKk14F3xExduh5KATmUYEpUf6iqUYjgvaffEAagf52H9C7Romkp",
  "key43": "QMbWreihDos17evvfJUEjHSj5b74R7r7YwCL6mGN9XdE6dj9fz8TJ95byxidX7MSvJfrx5GGpyp6vPn3ddZJyQG",
  "key44": "5exXySuKzTH7nm3Y8avoBZs37qLQLSR2QqGvL1ouVkpQqtA9QthuM6J5sGap66tdkdQMCBrQmR3X6YrC6KabvCWe",
  "key45": "DT3H9okiUc4XiZd3RwnZkQF3Cq1jaQuiF67io5TBi4aWe1GMYeW2rod29ZTdhjpqx6qFkcL7xaiyxK3sHrAvg8q",
  "key46": "91CFoDtV6yXxkkh26FBveLSTwhaLZy1BMKaanS1PLwygpLPxJLipVe2VU56n6zFtarpHLjsPhJa9cHxfBs83NZX",
  "key47": "58qZ8qtzhn3VeDUiWhqVGodHMCRoxCdQ5mMjMonRRQbwK6jWVQ8gq9ucnjSKGzE8rM7y7TLT7FvrAirRCRy4FaWA",
  "key48": "4Xgd94jDTgGiV1bsdd1iqoJK6iKpJsfW11WXiBTDcWu6JG3xzGJt9i1by2nsE3DefYSNz1manHWR5vAzyc3oju4J"
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
