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
    "5Z2QPQD5MKoKvdubn9wNSakufrTaGAXNJfgHgF9q9DGBTsbjUsfRaXBX23xX6GmodixwPXszvpziQBNKeVAg19eT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N8KGFWs42ybrz55YuFfM28gisP8EKkRKsDBgfN3B5hfTeZWpacghUCaYbHmf4orMDLBHatPvTqjEvM7HLn3N39J",
  "key1": "y3EQcMRnWkxAYph7CXYwqDg4FAB1mvgyn7TVEqP91Kfqwp6SvVUrMCtWFSsL32tvYS6K2Z4E63sr7fkUhNnZccK",
  "key2": "5GVrurZMxFGyGu5T5tUdRN9jRvFhf3W6F9XTLFqKLnEpLVd95gzNjQUKg2im4jjLD8Nyh8a2SEw5n9N7ZvdHU1aq",
  "key3": "5SY4L2dMu1FsPVjobDuRr6nXj2CQPtJHrS2EU5jr1EHicKGTJSZaP2JECo6beHCRTj33d6x34JyUvcDcLDgFHVEs",
  "key4": "5mhqmjb7M6kThxqGDMa7xSGrbMXrE8wYHAA8CrV5onot7MZhmyv2mKxtSohyJ5PJoCJMhQFeqd5Xuqidc33KBTLf",
  "key5": "81pZYoPdT9EY6TBMsj8YLqLosFbs5mJrzyp6jZ42pphpLYsHyZJJkW6HcBx45M6eC8kZgKRKPR3wW73As3dDaDe",
  "key6": "5tGG5BEPYHpZhJJ62ikgUADGyMU6k66FHwPwzY7HyzUymPAFUBVcd4syzVQy73ZgXDuyy14jwbxtoLpjn9wnLvY",
  "key7": "SFT3t86w8iLnX73q6oRfvxCoSyU91iEnavAjbBg7vsnBFZzS7zfv9NoFXHUamgb2RdLkPV7AyNQ5aVSQfT5g4k4",
  "key8": "3YPh1U1XV6HTniDGdpuAWJm7mGCFJ59a9zKNFRajrboYyq55MdH19L6rF78pcZB38QihUDrWb6vs3ok49Qxh26ad",
  "key9": "2SnRZ6JzkQeb5EMdzLRLxG9SJeUpwoScbBx4SnsL9E64tiW5AcMjCr7DX6ege5uSGhd6TLrRZaqQ4AWW7UdcbMSW",
  "key10": "5s9492VRA9NCD1EW2xo3AN6wrdkVX6wCMpctd6xWAazFu6QKSVkPz9MYRhGazX7wj8MasJUHxVxcwqoQRUaEr6vY",
  "key11": "2JXPNdYo8uUd4AUVPXPrU4GV9oqaF33R7aNf6oGbKyPgqM5ofvfCJFZfM4Pwvj2Pz8CsgykNJ3hne2jn3Fvp1GD6",
  "key12": "2xwyaszr6xcBHXoykJ8hzct8qtuEiE2GydXXi6DZZZ7vLpG9HS6AAZ1SWmtAtsu8rAwgVzLv9eQ5UsQy2wUujSa4",
  "key13": "54WGpvbFFLXRchQtVM2Q71TUtpfJEjPtEVJtmAfpHzmBiNS6frHJkfeZ6G1tsfe4ca4AJ5HJuRzEZBJimVMTTxE5",
  "key14": "3n22TBem8YWGUWaUnvYWyjLWuD8VeUmjrVUdHqwC2MozvtNAve7hxvDeSPuYjvgguYYLUa8pEU4D9ZMewhR6qW14",
  "key15": "5jQ7K294yeo6dugBxBjpysQPWK44PdvKnTp2Xxs14oNyCMSriHJ5cFB7R8ysDXrRbTnuKtpNxrCDMgSgCeYihKDL",
  "key16": "4bhDWz8BkPvw7krpiiEZxRnG9M1U2tjm3U9zpbk2KnN759XwEdpRgx2Y3udERwunt18vTNcqq6LhocLL3u2UwcjA",
  "key17": "28f2HzrVBoFC3Rdn1swPVE9J3KsiBXjvtQtMC7hGLP5A7SaCeRxdPM4TdTWCyJwAxpzVxYZeKYEkDRxUAJCykjDa",
  "key18": "36XBiX336VeWJMuyAT5DjyHzcXzLXAnsYnXys9u7To3uiCHECF6uEP4jmaNBZ7ELYa81RYz7it8ZEoEXo9Gj3P7z",
  "key19": "4ySkgQZ8pY42Mym8Wje5p4DEXpBZaWu5FALCQvh3nfxZPvo7cwagtJg9cxKEpY2Dez9rGxYS1eegJeFgRxp8eUHe",
  "key20": "4tNw1fSYnTx8DVVK57WKpi7SywvehGZ8UyM3hMTqJYQigDmRFY7qgwCkZuqwEtJ6wvBUh2xudpW2HR3btXYmqfM9",
  "key21": "4pXmRLR57ekwyoQXMiwEnGekgaqNGCvmXQacDjPWMSyrC3z5yJCEC4fPRVe9kd2LRcdpVEYdGQMR46wQzk5Gt4WW",
  "key22": "2CCX99T3gAG7oew8jjfhqE4B5R9xfyTsqRqaUAwJQC4MFzT9fFUv3bMmZrmHhexzxhyx5V2PBKtEBmrn6hU7ZZTq",
  "key23": "4jk5kFXnzxo98KymZkX1AeK6PZUVyvNPXDfwsadv1aXecTw8nbRTR7d3rWqx8A6NBQSgL21x3wyvTBKinLriguqa",
  "key24": "mEbPJJaDXWuGUqSVuEUswB1rNXeSqn9NJAkX5K1JJijBkBXdNBgft8HybxNJNxE3zHobMq8aWFnotcAyTdebey5",
  "key25": "2aaTz6a9Gn7Scsm31Zbp47RQwkJ5hrrexna9kUTbhZvtjSvbV3YStHp2Nzh8MHyssmkFJPrZw6QjhFqehuHyECwK",
  "key26": "3Fw6Zef4qaKfoYGjbAkpk5pDeZwYN6ZwijQsjmufpW1W3V3kunYMXGq6VYi71K2SNzwciKbo47PQNeJH22qLmjpW",
  "key27": "X8NM3qHxecfzRa7eVpnWtaSLMgAUs7LF8uq74jDDedt13qrzMaKS6L1wfR6e5dVsJbT5m6NqpbbNhpeDw3S1dDG",
  "key28": "4tZ86Abb7XJRxEgHGc1vLXRrFqnkRHhigG6ZiN5gXkX2Dm2YPyzNTq23zWErz1k8nBszSGoCvjLz22JJqJDPXFdw",
  "key29": "3ZA1vqe9seFhSCtVGhXRQXmeqfZUMCaZmAb1S6Jo2yQ6qma5bjtRqHgNtQyagz3xmoDMEPaLyup3H4UBtx3CSjNR",
  "key30": "3JXCW2ocoM9HygARwFGijQmH3p1GvyNqebqZ7q4Bdx81PU8QB88LgpXpXqB4TB1aFGDPqE4wq57cxyu7EvQS9eAN",
  "key31": "eEkmAXVYLZLS8CAWRtKSFEspsx1AfmqxyxUvU5YW5svDUSkXHgoM8T3tbyW5phaarDPTUchYAVpHnMFWTCiMVYK",
  "key32": "43SYDWKCvgUecmn1RUS6YHKtVAAXgt3Us7Qv95bSVT13kFJx6bgawCQbb7q5ZBvGyh1C2RAHsj3rREYQz2ezJ1S6",
  "key33": "JHMHQtfhKCA9KaTgBYonfEPxu1JwuCzedqdFx9wBZ8MtMPmRKuJDd7RK1nyXJXaj3jfERqm7p886RxvzQg1xWKi",
  "key34": "ogNhsfj4z4DUuaFEnb14YGudg86doDwGgg2bgiDypq9DMFhGU61YxkqqjQSF2RjALBLcMDthwTEBxERqQ9iWv95",
  "key35": "oLKJBy39pvbR8e6nYS8LMMcGv8ZwfwMqeQsj2Uyo3rW5B3owE1NpD3WfhGv7vE4aDRBdtQyxqhagTHcDNmdm2pg",
  "key36": "4FfhS91u2Kiybdq1gbC5w3qNhPpeAd9VfbZXeUBh1vJSizwgHcU5sniFS9vEnM6a8LpBm27d9oQipFH8te1ZxyHm",
  "key37": "5J7pN96SPSwAzLh8ohcnKowZ1SZC5gwxEE8MwmXzZoFnZH9Me8eMrsBXQNxH37dMmw77Ecue4t3JRa4YNd1fjwRX",
  "key38": "2nJcTcnRPyZstrXtzVzp4J54TsDh1SEzGPdP5Zyaohv769wzutShfYSUB3AhBQHF2nhaihQ8ZQmVXCWMPEiTgT83"
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
