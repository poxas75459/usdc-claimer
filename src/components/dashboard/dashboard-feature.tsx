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
    "3aUFq4JW4wLtDMA1vmf6XVFMXYBinVXSW6RKFh2bsaVXNHkXDERVtGHD73DZycRzGgR3BgCvuNMKYHMjXEjRgAbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nnKYm1UkggC7TT6QUVX8zX3xQxE2BcsbeCy5Fj4vFYuoPjfwoUy69Mdp3SExCv1no5H8PA1ViShBdjfmxZha5jg",
  "key1": "4r8GN2KBu7XdFFvFrUSzyxHAcgpk58nbhFuqz9kWNoeDV1NUuJ9eDdd7c2phwfh5LBAtc2zUJjmdJ9vz63yCRPMo",
  "key2": "2gEzSThsRCFqGhkJT4rmU9a3LJVag9vNC4VPUnGRAW4pQFQsfbjFwPGGTEnBWB5SeDasjcMoKSj8QBk38D5NmujU",
  "key3": "63NssnWYTzKTaYd2SMgaYkdLv1pYmzhZ32PNZUsUHUuhsX7tojpVv8dDwBKmuVJ7KrHjyDWkVMojwzmxhjnJe3vf",
  "key4": "5vFyKSf8NyzocvsNuzHfLpEwBEVSt6dDQTeuSghjHTcXHUMCGNCsjg2M8UZAMc65TLMoVcPn1Mx21oVMBwxsyCog",
  "key5": "4KBxNCwSDVjFJ64MzLcziiGC4hMfeDqd3h2koJEKeGQygN8Nt3nyPMqrm57dWne2qd3Ze355hH2AYHnT2qMbhAw9",
  "key6": "39Bf2KrhEKRYfJh4hjWAzUqS14WPStYgVa6rdfUvspG72XDe7bMWs4sHdGhSvbRUy5Nsc1ViGz3bUAo4682Lo95z",
  "key7": "2DRVzWsGunpGS2C7Vuuun5QFa566jZyprRRyXnFtECK4PMvFWVjwnghVTCtLpGyCVqDqsXf89pAzQsoKXRcjnLi9",
  "key8": "5pdo8VcLS3UazPyfR9RhGNjeWKRBPxdHmsL4MqWj5juCERUhiQ2MJdkopfiUi6RkH9yJMapNMpvQ6EcKEZnzfFCv",
  "key9": "6Xx9WgG5okGxMNLyKKYUjcDFz772iGkgLifEkomxWeJ6QtJaTqeDzvAUrYHvAeaRhLYy27ckPqtgyVkTycT3pkq",
  "key10": "5aTesWhoVsynXkogHHMh4bgbSDVpHXk6MQo3M8cA1jPfGG4GfuA1RT2ZJ6JNVeWrhd7MznzNn7Ct6oQqSahnMcy4",
  "key11": "2ixTpriteQQ5C1TBxGn25QJi59C779AcAVkEs7VyjKENNEhr7CKHVFCX6xjx6tFAhgmSWCZhrcvM9YhhzD5Y594D",
  "key12": "4dBdh9jZB8szQ7WJ8EwkQ2gQEbRqaWcrVdTvyUtER7nucaGTdfXBnrAd4CkCugRiH8GgzLE27QcsKju1fZT7K3QN",
  "key13": "66imAAeoKcUdGZdqjSjaeczMZf7aq9Cxys3VStoe3gX7nSiFDcsWwbVs2ViwBKbBQrGLrrEVb27zxzJY4FwEvtx4",
  "key14": "4zoB6NPJw2eYxPnngcdDQDmCm31T93WhXHEF5VdPY9RY9ES8YvDsDKKtDgnZrWGE4fW47mifwNgtrkW1xZ6ZjqTs",
  "key15": "2cgymMzQ5mAEHf397hCe5KSZMWHVw3ZdZ8GUTsX1BaL3sX5N8kdZZjFSky6Y6gG7UZ2aT1MyQCXt5Ym1GpTse4gt",
  "key16": "oJS1WWJhvh8bmKumwPEgSoWRsfuFSVLdTBUHCvb8vm3hmbRQCJtkHJPp9Lr9BHz34JM32y3Q7YQnBTNQ6eMQnP2",
  "key17": "257yZb8Bgiba6TSWFrGGc2hEKoHGsUgi5d15yuKX3yqtMYkQsRre8oxqmGed7RqnVf7e1CsRoN2UsezKk3owbgCH",
  "key18": "48ojzfRz7fSZKNqSXBhr5rAGmvXXe6veRupNDd5xR9c74zgAQbAhqK1dgb9LUL5L6ypntHv8h76Lo4hGPkPD2xWW",
  "key19": "3wEe6VvmTZ6xxUx2Z8kmxhSjW2RBZJSmpk9Q611ECrGmVVvoxYy3vjyvBsGg72Di4hP2Xkga9pKeZfiS8WJo8FZj",
  "key20": "3guoNSVSiS2HjVZWAx6bEmifq7LvfbF7m36rvhxVTPSYr87hqUF1XYHrRQXCabpBDU5qju4zosMHBBaBMsMKV6Fs",
  "key21": "2G5obaQX1EFSEQGYpNpu1PYkdFJ2rmYjo1vPpSosCD8f5wTAqQG2UQKuhdN99AYuRU3mrE5g5uTLLiKd2jTt8aFY",
  "key22": "4kvB9W57iYtmYUN9i2Vyg3YuWfm6hJfD3EtttDRXKJZCLSVj4GovAYfmXf1RV1GFA38feCm6MSZaaCR4RM6YanVh",
  "key23": "2yBZQq2vWGM4vUrVwXJsPtoWqJ3fuRZkpMiyxUBxB8h65vsHR6vs64phXCiZJV9yh6jQq6FQdR8s1ugLJoZyQ2Fn",
  "key24": "63sHCNmqvQERXELmaFu83iMQuURw9hy8MYdfR4a5yF2xH8wyBvdBrL4mCu3Ek2zQBR91Z6w1qVJ3GuxGQdFoZiN3",
  "key25": "63KDHB3HUBSrZn4kKtjBuNWdBFN5nLmeFvswgpmisXK5URvZUsgfnU3EGnkFvHsLHqpTwq6B22Jctuabxrg8wW78",
  "key26": "2NqW8oLcEiktNS1CCaLMJ8PfW99JmTX6Q3pzHFa6wGeq9a5SGjZzwdhcvcEkAwd568GAU7tEnmU8Cqj1UQrkWa68",
  "key27": "5ZJTnv3SfGcLtzaF1GZegfjak4eTirBiJhDqJqvGAbqzqC4VcZnsyLTLSYcQx2E4eh1w1gDD7pdHLmcXGSH8MrXe",
  "key28": "5ybUx4a6LzgTEYdJCZMudpZkhVfH9kWW4cDBJegudMbeGbVhvrPLzN1m2tPuqunZ5YhB3ZnaBsXfPvRbdJxnmuee",
  "key29": "22viXo2YTEdhJjvhy4FwGgux1ght8vetG3iVHTdTRi7zUS2eSezFDPxVDDjaDWAoKEHhau5FQFDc5bhSP8ygAdfB",
  "key30": "443yFdP9vgedVmxD2mWz39kWVEXesf17ekmBgheCBa73fbEXZFTZPQog1YrgjH4A1Vv15EUbCDWSH8SRrpxMvx9U",
  "key31": "5u2yzajBtDJUKpu3Y2dZXbSB4idpvKmLjzjTmQ2qmnjvj3xAYM8wx4z1a5vAhRDu1xR6DcRkwxErnJZTxyPASgr3",
  "key32": "BbohNgFjHw3k91QpHdGbdzmSZAzktEWBCbrPvtKkKScChQQS1arSzjV5yGxFbfkGY1BNm7NHouuvBSzybdXMiBh",
  "key33": "4gLHQP1qdLo75q7tvFSvTiQU8rLgMdKsQYmUeJx53MNmLFyqorWJNVZ7Gamr4CpiVV1Y8pcT3BZzzSUxiZZFSFj9",
  "key34": "5v87hp8CRD2WZcdqVh9csNeU1zcoeajaez55mW4zdBy8tKPJqNLu8PymXPhu1vUVsX189fbKCj8aPMx65FGwDVbw",
  "key35": "5FUsPjcncxQkagpAU9jFE8KAKNE8Wj5Proaz4j2ru7QPYMeiwgGCKkr1UXkJL3Mh4PQcETpHHACdmUeAsEtydBzU",
  "key36": "2FBC7DvEQnfxibr7XosZyAv9tycsANvhJxAYXqdmj15t2Y635mKB2sT3iAxbMpjCa6p8v29PyMskwxTCkSFZSqq3",
  "key37": "QtdToXH43shE2cRBdTqQNYFBiymuYHyCrv69ogV6cuQ6ULo1WRg82WTgCZVHXYauDpjRHFYbDGfDvpqRPKsUE4Z",
  "key38": "Q4PqziupQzNLHsBxMUKVdxDnBfwe7zDLyC8EjkWbQQML7Ld4HiZNfyp2cKTeteQ5T2txXjtdohQUj7GwMQnggtV",
  "key39": "5HQ2d1H3RiXyemPQ8chKrjJ6mtbhgLoi7tKHpLVxQcCKtoSW54UQkCtsE1ZEvtMajsdpsXscRFVLgP8LJ3VgqWT3",
  "key40": "2fBmkiewXZFizViRnvAo6G6NpGFqxKiN6GAbg5PcCRrJZa52NQLaaMXsDsvQ3UCx6YV5WKZz61GDdvYPck9yZX8S",
  "key41": "5td6NSQBrJ3mTWAu6RVP4zFvvQMWFnGN6wPffBDWUufj6ffggX2dHs7J3KhS1HWVQxXNuPspsEJMJC3DhUfTUepG",
  "key42": "3FaTVHKv8xq6iCqeCSV3zt5zPLwmWKB2A554pCWAsWprxS1W6ZwXuqjF6snpVMP6eim6tX9nA3HhM934v26JxsrL"
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
