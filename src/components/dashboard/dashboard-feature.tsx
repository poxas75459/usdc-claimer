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
    "31wW11mqLVu76pGv5JWGJk3ugn1EL9KyTLdH9YDPf7QH6ekRZm6S7bmzdiMMaudxbLWAtTWDb9wBYCEXRHgsERbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28n1TG6AQWNxrQo6eCe9F77dP24kPodzJ4KDMrtxYypLXdftiEDGNQbyP3Csu7UPwJvnS4f1y1SR3A1QUWeGiMaP",
  "key1": "34AmxPTA6JvgNm4WwtMvM7yreNednuvmB4Cv8tCkVeQZKc8fS95SohTA98zYGMWamkJBoZRNXaHgbdmATfxJCsQh",
  "key2": "4DSfZbBC6KWGoEuCfFgEqkcchBoX3ySsjcPr37ycdkkongEdkmmaEB2yS2RtHT3cbUixfK7qsvyX8xifkq7jwxFs",
  "key3": "WEM1Xr5YwwZQt6s3D6mh1B9TPxAUeYPwuCHH6SoARrx23Hv176Qdb37WNSvnWqbvnHQSthrfjhCaQArnvRTsoBN",
  "key4": "5vaiANqYoh4dAqzn4L9WoBjAfGcmXJDPCUD6jnMY3HuFsr1Rj1kD2XYPycJUgEmRStB1TbSgat44LyjJNvx4sYFs",
  "key5": "DsxGJLaHhPLtAvk7634Rhqj6D8tZa8Afrrb7ooJUfoy7VM3iy5ekQvA2HQCvvsj9CHuFrK7BgiQc3QcYCtx6Wxk",
  "key6": "4wdaM7ZNYyriYqnLjXxoLutFbSsAHtmk6nJMViC27pGuDB4p9Xe9vNjmAoiWmfwABXHxrrKD3NVjhreFFHBivxmh",
  "key7": "3PQy6mbah1QDoaTeTuknZyzco5JFSa1Rn2NBmNtRMTGsGFniSebYBJDPF7YQEmVA6C9z22DFU9p9rfKzQTDn7ckX",
  "key8": "yYijGiTkYfcPfakfzHiyBPfLkYb18ame3Fmg6vhbKbbgcLcKmdE9LcvRyZmiZGbk59xPhmPgpP5eqEzLy4LspBd",
  "key9": "4CPDiAQXKExAezVYM772oJxEb2PuqJ8T8VRV3hBEtjch1DeTJQRm3gB6zo9FzKRMVCDGK8nhGp979ZKf8Lg8yGrL",
  "key10": "3wFguHVKuf2vzZd7STfS72tykN2nxBV6zFMS671Z1mfSJC655W8wDCodNdCTiw9XPUDZSqZYY3opr8cdPvaoozuC",
  "key11": "3cxk13FK6bsyGMVHH11h74qSDk26QJd5sYoTyhXM5dAXfhXoSWznGYefFbrZJx9pTVXCqHTYhRYEyXAbgJ3EdqES",
  "key12": "2uaa6rxrxZ6JAJ6hs1QkGatDSLpqCABpbs81ZpoG1bcZaqQdPfbDEKLN9aJBBCD8DLyPVNBhGdVy14S7y6nr514y",
  "key13": "CQT8Ru6tmAPWpNoF2SBn6B4CfexvRKd7XFvL3w81G3ji9vtQjBnMX9WsxiWfCP2LY4eYmJ9x3KfvGwn9UdyyruA",
  "key14": "4BBjrosLaLTWofjgkPNyA5D7QjYQNy9FeteLvxKZQKPxYj69r13cEPYB67UsxQFg9J4c4Y8iUtPQ3Ls838wyariF",
  "key15": "5sCPYbuegw1w19tmBt5PAbcbSBjvgV3LiGSNGWDnhbnzSPDWskWaSNWD7UnCK2krGrtGWy7b7snwpwuBKkFpNXJh",
  "key16": "3qGjxthZWRK5Zy4xePeZyk3sQiJsakwd73H4b5XRMuThQkoEsm3LC8egeNBoNVooW6zgYq62dsQevCRa4eCHWDwf",
  "key17": "2nzqvFeFTnxzus2xAnjVtk7tU7UMQoGX42M5rCn5C8mKFNFucMn3ug5XSGJdDWhgCp9v8UvXXZ7YQbgZxN4RQoyT",
  "key18": "66QHWG3RKspRNZZMYpButpfeoQe39syw7X1pXUdM63Li3cZ9NNs8LmHGMFhSdbrJ5ZYLjBjzEjJgKjGnWhcPtjmd",
  "key19": "55aVX2ueUxpbxpBix4DECuDvUu8pzwYM1ytkMvicsH8RRpspmvoHdYw5QNqs1G68EmTqTpEnXEnBMSTps4M5ViVK",
  "key20": "56v4gph7uBtCbYjKNtpYYhPwqutnM8HF6fJw5EXF4D1GcBg1t9msUW9xzaXRGJ2VftBBmmvVwjDWQkE6vMXuhp9x",
  "key21": "4h1uSrZWW8aKXub3c958r9razyDBBcb6maDFZfH8hkPbiyxfiy8QeDKGcpKedqbPY7mwdjpzNR39vCCq54JpPsuy",
  "key22": "KSHhJLvVS9Nx7tjSYsndRY7SE72YKyKYJL2NWuh7ni4Pyw7dr58M17R4Q5TsbJ4LLp48DXajZihHran7nwhJzYu",
  "key23": "sP4FoUtje7M7KUQXVo2qD2r77BbMWg2D9N2GqEX8BmNNWLh513rBMQwDUcg7spcURoNxQzEXQjJXiGEgF1KmuxY",
  "key24": "2xKfopFXcDaW9DHZYgBpeTKQ8LQEPJ9gFGM1tWApnCV7NMG7jPZeYwCU7LfFyEAfdLwMNu181rhmHBAoSjsNLgVW",
  "key25": "4Z42GrM7ACHDuZMk4HbW1qjQA4UjgymdEnLmyNAwrRNEc9CM25efhduWEMcLTUXvCrYUFDhZnA6b2bZ6eyFx55U7",
  "key26": "2tbbCvXprgBwohrSfUsmpDXq1Sx1tiD4NN8JTT8n1uwBrVSFFwxsodPsdfcRzsUSAyT8oH2JAF27qoMBRjsWqcY2",
  "key27": "2stBiDABYUW8SyNW9ydPfzadFzKL59j4uwv2M8MC7D2MumRgr1f7Cvxuu1s2DVLDsYKa8qt4KshuP2q8Wcuze495",
  "key28": "62NTXDQAJxcXmLjNyf71rbWpntnzqCRuzRfpU3UAcd52MoPoEPAeDpNj57CwFKyxUnV41uAzmA3t4nWsuSbEuTpo",
  "key29": "2nQUBRMeoUyWMeRt6AvmUsiauJXi8ZqNvk3wqDhBc57PUoxFguRcbPc3wj9xHaH9JxUsbxQJVn78AbFX5VpZof3t",
  "key30": "2JNL9hRjGK2skNgDKCNbD6HJqW7Vzqg5HyhoBVTcDePgZ315stm7F6FsPxM2p3kTnWsfyy5Ho8caanM2tMPh7tDn",
  "key31": "4oq6cmZqPiD1FSkKrxrd8UnPAS2qqFAJy1f1MRcVNVruKSNSK2RsFAxKM9u6uPrZ4euwSrfgbrBNvDRXvNQqirnB",
  "key32": "cycTxuqWaad3eyFuMrhDHBEN9ZYpwrAWMSJ9T6CbgzPbZnqbT9SkKDB1dCtQi8ryETsxNCWne4p6sPB8BzemXQC",
  "key33": "23sM5JzoCk8LRK9CcRJS1tXFtEaS5bV7ppoLyfCShfNZZEYmNm8dqoTwpbHTjK5kyLf9A9UeSKgyy6HytXM3512o",
  "key34": "3xPWwL4V2dbv5zb8K5YCTtuoYprGKYdxgErgQaUDqXgY8qcFpTughUH2sp5mS27Afsz1WuCGgz52tFyAKNLWTBm4",
  "key35": "2ZMSBz42JLF9Vkp5U7BZ9rRzMLkA6Miu1qRkspVzP4VpPyTiabEfBT6NvGLAYpvTL9qtYbskYazcWgAw42M1KGuW",
  "key36": "48Y8p9V2CVhPutjATprct2rdUs81DXbv4dHbSR1N1xmqSym91cGoh4DB7QMHdGsXSuAHsiBMsM33ZNt5E4sx1jJQ",
  "key37": "2yWsJH9AAURcDCkk6iZp9yNMTaPZjy4zsRVB7ddYaXRNJbMeeLbuUWHs3btRCgu15muQNj5z1JHiAFY6z5gA4CYT",
  "key38": "4hdKaYPxQZEci5eXRA3k1sboeTvRtdPAinVxVhUJLfDrJisUvwRM3tzVbySnJgnWHvEAJ1xqHVTQjPZXSKA9xpuK",
  "key39": "2XsWCj7G6E48ZScvDxx54UZ4isiHvaetK28CtQgvstWXLRkk91oTocW8BTN731pfWS98kHaDdHLUhWUtWVyt3YAp",
  "key40": "3MhrFh2hZUQihJ1jQv3EofSh3XiZqWBdLFofFExNWBWoiKvrh68wkEDChhHPZ5rPaxjRYqhDKYwPebfPzQGiG2UF",
  "key41": "wkWG2gBddnrDeqX3YKXL4KC9xKnPAzKt9zKZHGdjck9eTUV5tkBZBavbhwqoDeXszgUtmoEPzoEazcAvr8w5Uze"
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
