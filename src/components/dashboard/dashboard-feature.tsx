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
    "5EyUymWPjatFbrWzp5Te2wzpyG3B1VGH824Ht7Sge3K3VEQuhEFDK75PFViJyBeYAVgqpN8HP6hcRrifcUkD5K9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7zLi9TgCcwLjDfTKP5HKLqySfCtPRXnLdY3tkSKxvfZb8SpUty96sK5WTWNiR8JqFDT8Bkbe4WXSVeC5S7DTsF2",
  "key1": "JhWirdvbUQt5ZrA3go4BUy8gFvdjbSm38aiY8WPoXTEpdAw2FeQhpvym3xz94UQPP8dyx1h2Q4byQJRomSQrrte",
  "key2": "2dqGGWaMGG2ncymydnKLvmFdsKAV1m6tyYyePKdxL1udWBQ5qh9DFYfZ74fdibjjoBiLbCFugXXgJyWxBk7g6wuN",
  "key3": "5FRjyuf8xHQ1AL2VSES7Pq2ksqqcprMiumxFw6cebYTJWxnfFXq3fTrgGKWYYoiXGYhMWbyDb5iCKJyZzGEuvoDb",
  "key4": "3cPmLw6VjhKKRRxJYsLfdG7htGLLp4ZEYn46J1FJca3Ndnit8E6kNiejwWY1Soj2JAtUyzkoEUvfCNS47kq9KYin",
  "key5": "2QSUmJp9rsLS2Mz82ZdxuwfYnRiS2aa79ZFn9DhtbcF5XdmtTvs1rERB8rLVSP844PeBRXXHr7Pf2EuLbVkT4K43",
  "key6": "5q7Fwu1YJ7rGaSjZpZsn3o8HxpoFcwc3eJBZKmDRnXFrVFbpjfcwjM7xunedRSQodinCVZecQMwMyfimuwxEbp1c",
  "key7": "35iTmh4AbfGq6GANvaaTN15wNU6oNP1dv5egvrj12QuFCabkkEYg25xfjQpCTMphB78wvfqHHnR6CMeZ6YiGj1ib",
  "key8": "3nfYtAzQubgoVzpgscKcx5awAs4nUtDqq73CS9ibJj85mUparikjcA46vedUTH1z19p2X3Cih5eXGAG7xT9zn1mE",
  "key9": "3UAWKz2PtZSc232tQufgW5cPLd43nSMDwfSbSNnWbxAHY9Cbj6HMaVrDZVtURyahHu1T6rZHLF9V2fHPu3RLyLWv",
  "key10": "3q5vJJm9PrZrQPzJe8dfB7UgbDLoNP7bTNHdQdiYocqVzJb46UEYUsuNKXEVKpcikaw8nPfGnKrvfMAMKpX4gbQ2",
  "key11": "2gJk6dDN7quMmDNkkbFjhRppRxSyDXLvXqXQzGWMsMK6Sy5kD7cBuebt1DyucstKHhjbq22iP24uYRf3fyzFMjWp",
  "key12": "2SS5ko2KfgSHrSceFyG7pREUZ8AQ3mBjhwBHoogD1BGEUFcsEZN3UHWoNaZi7A9wKC6cDLLFxvrifPWMHMfEccLr",
  "key13": "5NaZnwfh48EYgsUYoHDqHBtMPyacCUgHbi3PRUGWibV3sq2Q5pm7KEDF7JR2hiuuwQn3rt1LQPxpUgGLrqgbG7jq",
  "key14": "3Lm9V3mr1iPWPTqs71j1ZnVRPbfZEsdmKZRAmisRCMUH8vTg3pSUKrZvWe8dWi8t2NcBLxMCpWtPatsrsWrXNNoe",
  "key15": "2kaivhMyCzmuWovr9wCk47gmnezTTT6qm4RstzUExCjtTkjjBrkoexrJfv6dzGo8JuiBNvRbrLuz9JJ8waxuGNX5",
  "key16": "4DwZbEmjrmm5FwxYzX4nkmik7TCEFzW6NPnrkHTvBwT4bC7aQRnBJaZNXDfAmt9j1RgttHLoS5ZbaFw4r7fzV4Aq",
  "key17": "62LxFRUKZEsZdSPtQktiaF19kU9z5jNRuhNn4tg4MMo1UZqTB8AZkJxofG9SwLVwzFEQZuzR2BJRedGLd3Yps7it",
  "key18": "hv7N5KojVpVNAdH8F1jpNKzAv5PW1z4RrxUfzH5vGXqhbH8iTDGVrSyPrVdK4ZqjDXNr2QPT1EVeca2CM8yC6zg",
  "key19": "2p3JBY7PRQeTXrSAKTcHPEB6oKNTYpJmjWrg3fiMPx4ryVed1UkS5Z217qqVk8CytRycni7JDqVAzttyvy5hyUVr",
  "key20": "4nyFR2B4NTEnwRNQkjvf7s5FAYWhXnjav3ayUCdT4fy96khCHRd69HrrNQvfWTUjBYkcJoC6fPzsYHvoJoPzFVng",
  "key21": "3nc68FGiPkog8kB8r7ayCE248XepCerEJresiT6Xn8hP3X3Y8JWfYPasoCZM3mscLsV5GPmR32vwSq9RpjRah3jW",
  "key22": "5xChjCNTw1a8WtRiUaeBqWyJfmrGzB2CdJfwGgWLQk7gYJ3kCSJiWN8q8u91SnHuk19rk8j2G6qJ16SNVMRXNFrg",
  "key23": "5TrusmGNbSSKP1viRxFZp4pXRJkmo3zuDYQaqGrq6t47mp1HDFQ9T55jPEAH79WXSfPgbecVVHgJ2QonfsSeFv8y",
  "key24": "4gfWAkxLUNWe2FfE5PRZB228enRxNVnW2iPuZYEvCVtK32JAt6b56zbif2JV9H3C34xw1g3auC9Qye1iBGWEkhKG",
  "key25": "51d2w9muwcSbXwgE9h2Yqtz7ADF4GNMx2UdScbJRQ6fViqTqjvGBZETRv2Gi66eEPsYuG9V1VcvCMEo9TURAtZN2",
  "key26": "4dutUJSvy4YbA8Hj9DvGKpFD1iiwN4X6fBh7nqMBzVp9b3nZdJ9nmG6UoiE4kpZbQVEVj2zd9mCHDFMJksHXTA9s",
  "key27": "2QF1UAnza2J5mMKwVDPrxWS16crQd6h2vab4cZqnPEazbXr9NwjAVDTF8ucEWwDAQ73USwFqmTzDRJ7ESVHYqEGa",
  "key28": "4ZiwcUMDpwWAn9Au5nUuzE7PicXB81ByxkuNLQXW8Y1QCBnF6PM16cT12VEiiftvoou92vbYjVuL5zc9VRuYGSyz",
  "key29": "2cNJyDogcsSLzhERjxdatfTnFeaNcaPoFzzCUJXtmbZoi3q6wzNRC8sR1fLEjjQ5UtFEzfXNS26FjxQLRA3VXpQj",
  "key30": "474ZegUqbgroWNNu87n3kYtDGPZVLTdThxmDzaX9VRZgQHw8a1BJep62XWL67kqrBzbyUUMXUy32z9knnXbn7nae",
  "key31": "rkcNk4EkKo8okbpEroXstJAEjqViApbz7bP3X98E1u7itiSG6bsFRh9ykza8Z8kHxXA5LfiyZbEEg9trPPXgrQx",
  "key32": "3yemyRNG6noaS5nEfi3N3wNJzZCbTM1K6qFBzrHuTVcov3SiPPXyxE7sRXehV8GxekKZGqEK68qxetmHCVvZqUTw",
  "key33": "5HXusvujXhLVAcH1vgex3EqWH5v4g9o4ubY8XrwuLi3nDPKVeGGr74L1pdw4jFjqoku9HfHzqxjC5BcAf6ss6kGx",
  "key34": "4Hic41SGRrZyjF4R7r6sn84xhsT1BZeN8XLwQ8KWU3vcmutRX9RMCZNrzPKJ3zfL7BRTk6ZkBzzFvuxvZ6bpjGA3",
  "key35": "4oYWo6XyLwsca8fe54Hn9E1UaDiebk4624hpF4U1gRMkbgdGQnse5jUP37KL153DhusT4ySYCjD4fGEVNopHyMRM",
  "key36": "5c9zRHDkKEGzBZKkj4AhUvpfb6EYwhoiZNhD2erFvoBsZgyW82s5yUKtMwipnF8Zb4LSdRkREucdRphPLfVgyDKP",
  "key37": "VC1UQNJRF8tVpQb52bYsmmNtBdNvCBsv5N67cez5tKoPUYnVz7qiBkDXjtdP6Phy712yzuECuD1pV6XGexyRD5J",
  "key38": "4tRDPN8DM4cVBdyuhDSRgP2ursQVxAaD2wzKhbUcxyiCfjPZQMXbm1awVXQgjuqbDpato1nBppFk35t9adzHjQ23",
  "key39": "J5PJRJ8vXqDa4VCeCx4XmCw8T7HJkZwXhZim3ZgBuLaDUgUyfG4VBwfSrCuPn6HRH4BD7wBEwzVwFpEHdcDFiSd",
  "key40": "4owcT2kfrFi6RJvnwbcQNbtYTw4BoA3xTRwPmAKwopq6qFXnBnvcFXmtqyjjQ1PqjhPwvjApsmKhPqvfbgNdVgBk",
  "key41": "4rNRGfEMos2H4DfQ55h4c8QLrhioFgdQRus8GZJVe4t9HToFnnt2iK5ekNwxLrXtNwvjdomn6JW1FPKSvDZUPno7",
  "key42": "56WJAQ2Ed9PYNoKNLfHKyWUQyukKugCs2g5kSaC78BkxG1KsAjJ9u5tiR3u2h6kzsfnVh2gUrw4TxViiBnGfu963",
  "key43": "3vNGG9js68rcL319XLufesb9c1ijfinh4fzNV4RxmLB3N7kQgEr6c3LePipC3G5h9pwFW7VcvbVwd87GEdVabidG",
  "key44": "3gAH25LbAUEZR1J2ZxtaAeqA5VPtEeL6c8fb6CxELPhVWvRFFf59kbfMuroEXaDJ4G5nXs6Jw9E7MiKeAMRQdZEi",
  "key45": "3Kx5VyMDLSSPNKoiKph3BcJpXEPLmbFgmDfBu5G2VkurDGooqpjqP7FQzRrhNwXiKvEuciuWkDU5EnbLtsBhNfYv",
  "key46": "4nbmDJn1dWPAok6xmiLPBQU64JNJSZJh8ABMtxqWD8rrAGcXNPtd9qG77DofngrzavWvicdskHNicmoEkv8NtumR",
  "key47": "2Vfc4T85H5DkCxzTqnAXEpiFGLAuaVaPr4pLZ1cjzyvQBkF7oGnr1RzjXkaHMBrfYCUMcRzVQAbBPtDN8nnf9zWg",
  "key48": "5i4syQtXSk7Dgi6EPvvWG1Py7maJm43SMpyVLjCpSad9iWwJttJJiTWr1z1ws9fVpfzpw9EHbPvgUoCqAAtwtE9Q"
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
