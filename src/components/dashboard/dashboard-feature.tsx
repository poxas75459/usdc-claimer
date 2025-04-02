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
    "5dkyRfjmozmaXSi2jnibfdB5U9K7yc2QwB2hiHWsZK7JSEoDTUYRcgsXmxkqvpqPQCLsU85JvuP8887UdfpEmpNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WcoVeHLbUxPz5FMDtfPA2ftgRw4iFZ2gy4M8EGsNxjXwdL99AySAq5EwmnA16fW8NQbknUbDfkYo3mq9B9hgCvE",
  "key1": "ZPUUyeoFsbho11n7GCswRJqbCtZYfwqXKTXiPxCWVPDsCFMPGRRUfZZvZFMaXux6GC44raDDMCr23i4jcNZFhKz",
  "key2": "47CzQL2LYXYh5SUF3jp2xkEzfEPLKgZjKSLpozKk3N9DVbozm5P8ni3nUxdk7DdVMnB2mRmCwsPcbkQXUuqsx1yr",
  "key3": "3uSNiPp3jEtXHbbC8Nd7KAyRUBZUAcxUdKQP74RwvnNdiyhUAuhZKLvZnkYEsRDE6DR8YYAELNdMQVdkkLa7EB1t",
  "key4": "5vHQ572FFcM2CTgyvZVzkf62DaZpgF7erVUgN8Jj5Lo3PTDEJz8C45NFzqy9GMfBH9tkPhBgJ4A4ocGZGw81ffn6",
  "key5": "pgcwKoWzz8KFHydduTQ9Sz68SARGs2dTCAvbwBPC455q2WnCy27pEjbWSwZjqHEpkM4RQtgMYQTNn14FZjVEWfV",
  "key6": "3XW7oDPNdSFPn2TL1fePXTuGdig4pHcezwEHRyxThAj9yMQ9xjrznPsNxc54cfrRD1JdDx84o3hD3WWkYyxqW3Pn",
  "key7": "47Em7NBXMt4ZcXgMgUjnAsdNeiHFCPkN4qvqJ8CDy1Vo4jFw41ZUwdDKAqWtPqo7yT9FZMs4KfdJpogDK4L1Dkwp",
  "key8": "5gPnw9ZpcdCrUczbJoVo7DiKAyEJZ1vNWDf5f3gv1PzykB5N3ks1csSqTShkfLc14xn1aLPqpuG6K7GubQHdBDes",
  "key9": "4kdLBHFVczrgRF1YnpHo4CWoP891enk6YH39wqAZApBznR6vEaNenTQxX8iwhMJct1eznYVL6Cakwqnfubwkpivf",
  "key10": "JWNmUJWmLr5yDF8st7fM8ShXsvByoaaiEyiDc8kCvAEcaPgFjnG159p86um6NoDTPFuT4jjGHbhkJXMr3ayKQd3",
  "key11": "4BJJFjTLHn1QQFcsmCdfLNFcoWEhFovP9ZuhYfbMx57oQM7UzXnwGiDEZweNojpFHNLPEbxsny9GTubh9BunEXch",
  "key12": "21FH9CbxbA7ZUuuFPsNf9rBFsYjS3wK5YqvqMBiS8cCFtkyNHVnJQXYXSVgmcNUqDs1ZkaDto1mtaGF3TSwfLJ6M",
  "key13": "32TLhbVcPgcb9vvNduWAaURreqT29CiRnorxhzYvnvhGNVLafZXVuvsndxZJ2Q4QccyBN7iM5rdQXkUiu3KshLm2",
  "key14": "61wEpdwg1V3TcJrTfaEoFGdP664NQouHLB4TrUMS7xARhBfjm5wmxyF2EUmJCTCYvdACqwowQubTg8xv7qcVThYi",
  "key15": "4KNytdWsqKmjCTwwDyrM17uAfXurPFm4pMQNveZv99gu8jZhEPcD4KTyR3vDVVQgyGYLumiirw6hk7GCobSQAafZ",
  "key16": "3Awx3bHBTaFiSAuBTSp9FTMoqWPohfcMFbrLMmRkWJawxRsNQTMNUNtVaH2Pwd1Tcpv2txcTmZjikftvQ2PsfGzK",
  "key17": "FmiZrquM6UU9MSKfhACZhKAKerchLG3TmtEQqP3ssNBZCHTVC38uBuqkfv3kVyttshYeBrGtwxG31JFudzBajyU",
  "key18": "3ExhDoUKfazNVyMp9VdUn155DaPi7cw1FaPCoA4gMkvGASpBfG67c8Caw18mZnnHgam3c4snSERtjFa5jnE16F5i",
  "key19": "2f7MLZXJTQ4HFtsEdyQz9kWBjYsE2N8uEyJHT3DtgjzpQ7QkNmpDtmTbQkQ7GxKYt4dLQKZKnSGNoMfcfquMkuXG",
  "key20": "Gr4pZENQfbZXwT5i4WqRocTxS5UrTomKThZ4ERhdUU8GLdoRzje9jgkv3QMbPBQ5gtnoDvtbYHYGPu8JQNCKR1h",
  "key21": "4SMmdwzwgSBwR6FqUhqK7PZasnCNmwwKz1391JrCCxS6KDYyna4ZqNzt99R1UcLAwpHqhLhfJkJtLB6KdC6jeBqQ",
  "key22": "2uuXCSMmAuMQtYk65M3aUYKpR8JQBL2Yat6gKQYevhbfmYTSRqGUsaVcTeAqcfMa8vdZZezAaCLyXmvYJUiNDPPW",
  "key23": "658JaxRDYK1oJMowPs2PoduAyUTiyjWbq2GW1YXcUEaM1JF4LTENyEQXGrgoTJhjZbxMznVnTCayrLnuwNDzfySz",
  "key24": "4EsTFynxNDivq1VXpESH71kt8fMQrCnAxEDfuATZHfsyL9JpaPMMFw7B5aETbaHpMWYG1bEkJs6EPYU1sVNZpLzY",
  "key25": "5ZzLDKu62rYZSEYnrhrCnCMN8ELesc5Vdt873k7mw6Z337aKSUgMP8z7qBSv2U3HpKwvCnVfmXfwDkAZgLCFFWRF",
  "key26": "4kGDt69ELkG17iPZge88QsMfiVde2jjKqgeCZHVdT23FUaVPDtL5dc2WMBSMmtgJN7TfoWwxVaWtD76PhrdxxGz7",
  "key27": "5p6aTF1w7CVqUfrsdyqsSEazSNFCgB7hh8S9CCGbTsR8RrPQ34pBK73jm6cwpCociUpMorM68vtHVCz9mW8Xths2",
  "key28": "2j5aPiJRExeQfuC2wDGJdEW93yoqTGmXqz8SRVYn1GG7zY5LCcAKgrFSgiTSV8b59fGG5H2MUgqY5bgULvB6xib1",
  "key29": "5ZwvYQpXVaCJL8EpSxaXgn9ZTD56erf5Egu65UvczePnVbtYXCPKt8kYiMEeoqXX1VSwAq7zY411qHmw8bVn9BNr",
  "key30": "2ezvRuf1pVqit3QtucfQgsNjbP6B2ogWV9VLe9UN5HE4v1kvRdWRj9j644RQfFbitcQrSmxw4R78bxvcpvBiDAYb",
  "key31": "baMBvarhHVUMMYcScQJriiaLfZvKjzXhjJyo6fCbXa9P6cfNKXjpC3kNbkSz2jqjrrkSmmKrKa5Zq294Sda7qDF",
  "key32": "2V3Mu7G7cV7hRvByL8nwQzd4hUmRdt7Wt2VSqBWaiL31PJM5zCVZWgcastmcyuc8f4vGz1nZ5vmv6pnGkiKvvDSZ",
  "key33": "2E1jC3hnimtPat46xWHHxLzPxYvPsGW6ePzbqyQmtMrfg4xMh7Mt9yPByaFAzcdT34EEL4whJg8R4LRSRAB3qJ35",
  "key34": "bEttkMGmCx9vJd2tbDxwXiiVxh85NEGtNhyMfqVnWmjfbNScMtapAwhz9L8viSPFQm5fqjx9A3VDMLHGp4D9Xhb",
  "key35": "Y6MH1hPgGaKrfB1hXE7bN7unYwiGUCK61SE3zEQTgNJKJDxfXYpsZiYX66W3W3GivoPEkYtMVcd7U5CprnXpcr2",
  "key36": "2ngnUJ6A3qaQ5NDJUK8BA82ktxZpSzZxiQiGSZqeAaKY7FyjXBEqZmHvpHbVY7vhNm9ZvP2mKM8vU5rrhyZm3f6R",
  "key37": "3yo84UsB4RXMc9DKo94TPPCk59vzv9aMMCSjAs3HC5AqgT1VDe9LLqdHjExzup1rM7yuQX3HyKfQdgRwZ4VfzxGW",
  "key38": "miHkzGKmzrC9JmgSpVtfjTbau3TFNvb2xaYamaA7JFUs2r4CS4KiearhHc8zHGPoozHSSQnWux7WmYjoU5ZAueU",
  "key39": "4GYKvoauFEqXTQ6VugoLqsgn57MQYGP1NcM8kBVpshSSCRt9yzWcod85YESt9UzxaNagEQWqZkcDEBRatx2sBeXe",
  "key40": "3jTw7jSNjqNxDrhSau5cmjdqT8ZnrjuckEjT1jmmemRPZNpy1JYUZerLgizwJJZLj4wsWeW3iwnzrSQCPCPjcPS4",
  "key41": "5itfgHmgWXP71wAkxZb5ocuZsyApC99eFC8KobUPmbNy65RLjcFW3TzDroT1esBMKXxr2wD89U89DpcpTgRhNGm6",
  "key42": "2brFP4pCmMCidiXCxWWZP5s4MsnzcMYbLBN5YrPwovBtbqMMoN51KrLzLMTCe9HzVtoQNu3Mz2Sh5tTE2TXx4rPE",
  "key43": "4Sq97eQnoaoU45EM6FvMnqAfCVgyjML6FgztFqaAnTxEdiTMKrJBxrEDHXCAFLBEqzzBs9nDZtkmDgL8xERo7jFu",
  "key44": "5y7YN3cqqAFhzsZMtvSWWhenAxwwrFH1P38244SnzezeTQjSzpRdhXK1NFxutMwcaiw79kAJK18Ucng4S9N2wz62"
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
