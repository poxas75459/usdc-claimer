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
    "5Rxs3nQUbXBmA6PtsFZKeKEQQTtAWVgdA8nis83Zt5SrKzZHF569ZK8QkKf6FckzHk2oUza1QVh5kNy1oxES5sGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S8swRvSv1kDw9ET19EPRhXUiaKZdBZKxGZUQS4Yc28pSBSTm7VpR7iRxPF5ahsse6LW19fKpYXAkXnnApk2HHS9",
  "key1": "2WLZqcQ4Rpy1FpAF7Jx6ZmM5hAwmxymDPu4EQ6rQHXxb1o7MJqRvAq9jUWS9jHK8kkBTYQnkotvw13QxqUxPRHr8",
  "key2": "4Dqh4XNJ4WecrzvU2Mu8YGrrTss5Tt8YV7bEACveZqKzEoZyLuyvV4UyszK4CTWpQfdN8aNf5iUHCF1VQZJ1Gi8q",
  "key3": "5wUv5GaY6ErTYputrYcEjz1EpZzia9XgoqgUTuFQ7cmWoUeRUgLw5g4jSr8weLgfjWiACCWsUqZ6vyF2WMnK8kEH",
  "key4": "57pyhHdAqXb5ujnFqXiAWcXiFcCbwMMWEqptb9hcr1mzKomfDGFjukgKGJXzauwF5VRxosFM7bCWmb7fnVcWY147",
  "key5": "5vQNHQYbuSymD2TSbB4ri3CydwvZ93LbkvdKNmvHSogTGL7s9sPkLYZTYMufiGt8n2gNBXXyhcRrJNcSfdjWR5ZP",
  "key6": "e4hLTWmQRv5Nw93mrDQXzenNQbpnq589oHPdgfmHLAHMgLoLxnuhA1yTqU5nRNHQ4odbtBDJp9AfZSmwtRXfhAL",
  "key7": "35z9oCARRyUc24q5VS1UePP1yzKwB2uyEoYbE1jQYVmBBQw3bRnnAAcNtLEr62RAeXRkd3WkfSgM6v4eu4Mf3wTr",
  "key8": "2kP1c6KmX82emUqqrQTDwMgnYAEsKW9Tko8sMBeQgBZsj3E53zUkh8ovi9NSEcWqQQFybpUvJiKscw8nWDdRPtYw",
  "key9": "2q2EJfNhAfWK4E51mr5MppYpE46v7b9cECdBnrViWMCrGyUCgcwFXxe6eVPnMgNmj1ZyL4iNx5o21nkwsDLjuL7B",
  "key10": "5r7eE9f4bTNoRDRNgztwGbdCp2mb8ek8TmJ1v5dFLM1nSqqGEYFcjkeo8SkPB8JC3XXPFuuzEstMYJhgAae9hvmR",
  "key11": "4DyUKmPFHL1KnQee3nRXnbhmrxKqy3n3298kEzcyqxTxsEHYcvMv94gkdE8N3JRMz7kyw3RHyoAWumHB7PdJ8rtT",
  "key12": "3j3xErQDmGddQZYe1dSrLSn8AbbhZ315VTyqx3zt236v1dK1KDLvyRw2G2jhSR1dJpoGhcWYvxSV2aKEfZukKwab",
  "key13": "4KLdjFob9tVKzosW9kAaayu41RtSZF2xtqonDypbJJDdHWYTSUSijCtcWr6sYk4HN56b7a9grteixQdWPgDBekkP",
  "key14": "z2kWKU66tqJ3zZVQSrpU5JQs4ngi2sS4HGAGM4HcTv4AwYW3rMfCkcowCpraKWyqBh1Y2JevJywwSD3wV8qSj2A",
  "key15": "32QMJu8WBTT47R5kXivcrRi6knkWeU3BbHKh2EeP3ZZXLKUVNsg4podBCzmPZ9XPgdQm2q2xRz55vL92aMFQV4nz",
  "key16": "3Jquoy4hbprnoyW9LkBXSCw5qhTwCaYFeUGwciS1LZnhAiaef9misaJXUiNZdVWGgBa6hvt7Kh323gfCztqjSmpp",
  "key17": "5HSr5BieuY6YErizxcpVYfh75xxXB185TwEux51TcqcogFYuuJPnfztqsHuCMXNp5qZwcemsUoSEfmzBDiYNoLPN",
  "key18": "4iEnUNidGY5FcD3g5f3BmNxUmMGscoitGYmLNdHspDDYxCywnasQzrTu2iVZRXkxPqysmi8J3PDzKWxUKUmLMtG1",
  "key19": "jahxHMW4yERjd2Cz8J9rZCqwbZFJB3kst3shMPTChJ5oqFJckK5BAFki3hGREkryNiUexPXwKQFPfEas3YTpQia",
  "key20": "4DWRFSRP1LgMSYGEaY7BjKiwMVngzpLtu4t8Eq5cx3p1JN4aeGc1TL25QLafN949mjyJ4dHEfn9364B5Yw9J2WwF",
  "key21": "4zcdC6ESYpUT4F9QeYDvtNCMS21F9NmoJdn7r1ygUTTJyaQ7E9ZCKywk1jSWkp2WzLipGVYUQXJEFzzjnM1VYjEN",
  "key22": "3cuRpSc7BRcUs4AHxVTvo3EUakiiFBQaA6aviwqxE341QVjGHg7fn9JF9wHefKEaWdDkqvoqtEriUFSUn86LMC5b",
  "key23": "wuAuEFMp1uz5yAntXVErBKdP2KCK5CBg3XJkDohnhgojgh6HqfjZDeg4j6qk7JkTC6HbSPAV4jnrckkXyiZnWu4",
  "key24": "tyrGC3nfcZKMg3fAGf7jC2NnXfaxAKEWsxTbvAdbbwJeUJCyKGfUHkRtqbRU9xcU42BRDsRYV2PvwGqiMX26Rkj",
  "key25": "5gibbMyf8tBxiBtv1VgCtBvcA2dNs6ZPuSYL4xADtdk7FewQXAsdXimnrTdd8oDAfBYDhsQbEfdEsMGuqof7mYMk",
  "key26": "2B3NTg7A6Ca4pLYEC4a84HsHNAnA3fTpe99qi9q2z4XKJ3vRL2Ra6YrwtqvTd4vh3sL4FxW6AN3XdLL6B1nHv25h",
  "key27": "5xttukifDv6Y2ND2Wz4NxamB4SWQ7fj2WLLJWsxapUvd16LHgTvhPta9xNwxrDQZ9v36xCrva2kiWbQ4crkAcPGC",
  "key28": "5B2nNvGsFud7R9nzD3vxMXzJbYiPGSpCJfPeLVRgAon4hoLjtMfJpWPuhBzcGaNzYZsc7tcoH7HrKCTUUF56Hmx",
  "key29": "QnXZb4qwqS5xtwfF5zGbp2pn44VwXfqyLE2Q6XmZ2jK2stPuU8KKLFcjoEbsB6pqs3HXKcp8QSw38PP67aBVXME",
  "key30": "4G8uuZXUKHD6fLcAyPjf3vzgLBq4uWT7bayq9ZQKizoLKSgYriu9HDeE6vBAvCr3bVGLRg5rbqQgzAwpJ1EntTBg",
  "key31": "5Brgp8zxC6t5x1yywQt9vqpLc8udNiwEWbo2Xn4XTyWA1rNS1E2LG2pizRSKkwoEotQii62R8nFTrpG5zNCQXQHy",
  "key32": "3xmTWSe1UxkLKL6itEHxTesQQXyyT5o9E7strkC3X5WNUGqMArsQ6b2qBcYJh2CLa225rQxMDf6x2wouVRTtmui3",
  "key33": "3gBcmjth8QjjepAHbHcBKX3dnwtrkmEM7nb54EmcTvW1jwFj9oXh1THrxbvUTsJQjRoiJ7f8fSEpTHaL3p7eCUwm",
  "key34": "5x5caug55enGyGcJYVteAayZpRDB9evGDmAfB3ku2avrUEVxdct7k4rCMg1J8ktaRUyhsHWuJPcgwRH9dfCWGNp",
  "key35": "2cJEzNHwYP2LpTXENdg2BnVoHp4MwStj4zaX63PWhvhhrk1V17jMrcXGnJkxLr65FDiTYUwuLu7fuFurJAFqW6LT",
  "key36": "xyyoeezvhGd7tzKb6c5wzW5vQJR6mP884RHcYjt3r5F4oXhUzyi98MZmxdpkZDD8UpYsRGvgx8ac3X5yZFaGsxc",
  "key37": "3Tsw6pbdTiZCiqaWwCm2VvnRCkpzLvd2p54psEncWneAkVYWett2mCEV7L4HW8sty4kATu9VmfsUGY3gZeBRuRzc",
  "key38": "2opR582RSqBsAqcFawJKyj5dysnAUt7cHaJmrVpTCner6wiVgfdsKJSFs2sgQnZCYYSQX7grVC2bNM25cMFZSa8m",
  "key39": "eQ2yc81Y2rmFLSxy8cdSFV4gDfzg2oE5TrmTgwEUnUP3jLTmVUCDLjhj22xUJTqtRWYVgKaobf9tuHFsomGwvw1",
  "key40": "66WQw5v5Ta66Wrzei1jxcntubYA53H6un4eqAqGh2CtjNjGVYH7v25kZGMeAEHKsJAyGanoJKLSWuNrX7q4huNr8",
  "key41": "yYkg8URAdwXjBQXBXen6p9qDXoZGmpaXZinXzxFwQY82gLkKnrCyBuvZYywohVYPX8sQBjS7ci6euaDRPWkR1DY",
  "key42": "5wtzGnxFE8EZDeurMMzyEKSQgo9jD8zw2QnfL2n8uEWGqN5dZGt2TPdN1TCW7oCtTmP8PuRCRY69FPFCyjJNTecB",
  "key43": "C85WDUAQNFoocpA7NFmE12g3hYSg18zyq6DPvVFpSL5tGqexSRzc7dwTWTx2L697RKSdqkubrHtNQEQZaYtM2wE",
  "key44": "4Ave5S3rk3XC68gkf3DRYiFMYTM8JymrM5GNbmYcNWeFTGiVtFZ7FmeGDAXuRPufJ6H57U2bx4yuGdf3B3kY9roV"
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
