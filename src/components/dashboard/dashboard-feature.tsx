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
    "47cBXBPBhrqrmNyQ6Crp29d2D4nNQNpfBqaPRk67PtK3VKzPmRdd9G1KG6cQo3KwNaJmrqgRV1MBjMSX9jVgGbC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gyNCgFCiiuZgonPGfTtMadgxxG3qqJTtpGTbSi4yjxfdTf6gK6kePDSGCCb844wkecfRhkZVxjvXKGPrB7P2pye",
  "key1": "3YdDekcZoFbzjsu14RhUKBPucsdMiBwUNkEJMchpqEukXqhBC3ArEMXALWeBVZ66V9Z6WFv2xiHgeCtAmH7CaXQp",
  "key2": "3GjnRGaSwM978VPYH2QdqfEC3KSTdN3XFZVA5rchHdbuoBnn23GJhkWbLDic7SXHMUJ7bQETrDzRhvDCzqiwsyMu",
  "key3": "2JF1smn1WvQDX2XLS7cowYtmjco4PVFQEziKZZL5ELjbEh2qtuUYqH2mRrcfrCKFhchJqXfj7QLRsXsUg3GCq1Pp",
  "key4": "5JvHxLoczYLmypyxt3K5yjXm32zh84N9WrmtZSogzgZC8iVudbc2Uk9Ddbt2vB8rHp9o3XN1LTbSTfrv69xd3JGB",
  "key5": "282kDEWKqa7MMfU5W3SAbc2x1BaQsyzETyaSZ2335j51NFzwHvvS1U5gh6e4DHy5vxtLGDJJHEtTY8MsLrSzj8KJ",
  "key6": "5rofDFAdXwrJsMv4TDVM6g9jbgu4WCpE4zMtwfbi4AkWBX8tnoC5BL4zJFd6kPAGhDcrPRBdhhcXCua1amgUgQA1",
  "key7": "46uLMwdoV3Y9aRYZYingjo8BXhuXixVs9dJUMNSb3hQdUhCKKoCTDGgTQksQKwohFA2xey23n8SAJwXjJ2qhtbK4",
  "key8": "4zgjGwcTJ3XehidKZkFQm8omw6bMyKdwmf1hgMnV9M9Dy3skyxs6gH5dQqDDMD6ZvZmC2BoGRjJg4VkD5Zdza2JZ",
  "key9": "3sGppaFsq8fCb7VRGSarCnSELTxMKttY6NZXuvSerJbJWe7pfUvycZx8W2FX81xukaYazEUhy5476PsnLLmqVEaj",
  "key10": "32PWDPb9grsAiZtrhtjcJeGy1fhrKY6aXnefPqXb54gv4BhsMQVus6hUJEj6AEpcgsfPwr83MXpGTqLQR641WpDv",
  "key11": "3ZvWK9K2W12P94FUxgGCkA7Njwo8AeF79YGEnWBcw8kBWy6Br5VbWesDcXn2yt7QxEffwf2wx1kX2CKuqWKVjrtL",
  "key12": "5ZGFmfUrpgBsLNvQ3LVAGJ8bu2bcoLif3cCQSvQyRYDqVixGWfvubeadpVktxnm8WZKS8QMZX8WpkYVd3TpJF1NT",
  "key13": "kTt8WgTvPUXHbrKwXhvKTK7KWqCvg3XDgomwWZQSUKp4Qgwrco4sTxt3UNk43fSH5vaBF3WB8sVWLScLUZ72FrT",
  "key14": "3GuDdG1xcwoR3jp23441YEc2s49LRwdWK4W7ZgmC14E9gmLkxG9umJbZWZJaTgQsvCLKCVB1Fp8gcDKe9s3pMkuH",
  "key15": "4ijLrdAndchFfgbdzxxuBVrwrYQicbzhxvg52uwVxCEweosGYD87CQwauB5JYBHVnFkq3MXK7VDCWtDe6Y7GjUDL",
  "key16": "Y1ZdPnrF4V1nPcuLo8fmssNxBfqs8ix6TBMDghM94U8MNgzY4Ly1JfmLvJ4sUQHDvr19kw5pPwHofep586h3P7M",
  "key17": "31Qst1Jmozh2NXvvMEMkh7aiyHNpnMyzT6dtamARGYCVvZhYiJvQJgkejYKAfjxHu9kDXS7rK2xfJ1HdaVySR4FU",
  "key18": "4UubqdBotgWCvvNKMo8CriTd17XS1zt3rgf4MKHg5JcSc4ByhT9yH97BnpzbDrATuQD2S8wECNHY83eqNnCjUHB1",
  "key19": "2Fkb6W6uZE2w56GvGv3z2zX8KsqNpKJDGFVPWjCeQkUWKe34CZq79Gzep6HepHo9x7WeqxtxAdy6fvPdLHxYs45x",
  "key20": "3KHat11CRPymoFHBZ1SR5yzUXsg9xsfkxu3yiX5sVoVyPWvqxWm76FDKEZKuuPiPuHsbr4rrXgVrwoUHaRK4qzgp",
  "key21": "41REWCy7meawtUXFRaRJ2SADM5i7kqwgN5HzmrKK8YrJx88SksALkPTeNHgaSjUM8HPqGykdvX7XutGLzHu67WN",
  "key22": "4GnuYZazYgxTnXQ8oMu76mgUc2Y6ZcoaPiRCaxfGV91jjNTqS9R2WJeQYebuYuRTcS1WExBFCU9baD5N7nx7nq4C",
  "key23": "4q5JrDfhNTHTJGmsgC3NjaJ4EZapMDPTVX5qT84kFaA69oeCFv24kFFYj1AKNqB6Uq4gyDpgXpzjRdpoFeQb1gQB",
  "key24": "2f6MktqU38hebNQzBnSmbCnZ8WisjnrMXoDgJqYchcDjk8Kn9KMALzjbSanCWqQwCPMrr6WTfd1YJLk9C6ecT6W9",
  "key25": "5azV1pNrsRvp5itePyeNamjE4dwqBit4dMPcqtGtmH9DLvdgRq86bWCpG4v3jWoGznydpXKRUpZJZf9W3G2Xkjun",
  "key26": "iLKbzT23Frsd32YyRNM9FR6Vc3omy9L8bygx6Vw3PMHvNS1g3BWsAXrCSkUdD9KYd6SU6TYyU33KKraE2LwyTRv",
  "key27": "4jk4m6Bhxu3b12KSkaH5JLgcEKKHfEjnYUkzzidCu5nzyFhyL3rZTF6GzwWt5QaAGdBBpJymWoMAy8UzcqaxSNks",
  "key28": "3i54gAh92iBgVtgL5X4PBFyy1UgPYqLm3WDMohs7kyGuGJ11vDKqfk8HPJZ3QjxRUHo79VZffqisJ3596NFgJpUB",
  "key29": "nZog1Znj8vbsGS36PV9UHNjPWqLJnWDEoQ5HHh5DPYAFTyeu5SFXYQoKp857VM72CkFpGLy6mC67pEZwjVEdKVx",
  "key30": "4hCa9SHvErKQg7r4wRVf9mfaGbyqNxKY5YD2vvJzGGXxdUtxJ67znnp8odVHnqWn9dBDDF5YRKVb5Vx2uuKbkxjq",
  "key31": "4pryQthASWTXBLMY6cFz9k8NGoSNszpefmdw441q8DAz41MPv4VEz4eC6zFFEpvn6LZvXRZBnuc1Bew3pKP44spb",
  "key32": "n59Q8yuRkCG5Uc5FN4krogP3cv5xxFemdTjCWf4BZicREeb5RR9RgeTbEyWgBjQM5St6RdvTdPBHjWyPKNUnygS",
  "key33": "4aoLZamPHvDzCWEnyiLMcS8GisMFYvrMnJuHPi4ceo2D2tEsD5vtuxXobyG1D7YbhT9XKqZFd6KHhmQKayuq7qvQ",
  "key34": "5Bkgaw7W9ULaEzjTp8L7bqhki27dxPTcJzbFm57TBmxbY4Saw6HcTGLszrLsj6z7UMcQ8eu3BdNV5Hx4GAXH5LJR",
  "key35": "2QJFEUFpQZN9xXbLh8m21vj7TL6enFtFn2BogXVo3gmTADNx2sKhHoPBDkTRoArzguQssG4FUqH9aWY7kq4Rx7uE",
  "key36": "5UHMxzVpnmcAXKjn696uBAjkKitsNSR9T3YBuPY1p8KZzGPgN5qKo19nLmajTFLkTDGg93nV4UZvUof3tQpZFwow",
  "key37": "2bzGzEKkNm1nutEAUrgeTf45N7mcLcwtraPVhZaDijco9vcdK321su1m8GqaP8c48HuCY2abRd4z91dnHSbPGJxv",
  "key38": "3nggCxuYDrHTUw85pCxCS83UbvmTpt1PbLvYnbDVx3d45rUZZEesTVN76VpmpqLAD1cfoCjEiZ6KohbTBuvXTpn3",
  "key39": "2Q4MKfJezMUJGTWcv6jfPf3YULDE554rKAvQ87K1piiv9BNRFTu79xWLnVrdNJhH2XMsshbXoaTEawdESGjwcJzS",
  "key40": "4XuKBU5iGKpRZw5kWyrWNo9cnC57MiRvnPzYJDKcYsenevbghM2QP8VMUn8FCxFMmfJXH9u5tZCDFSEjSjZKJwa1",
  "key41": "4VuVwc8LWDb4iLkAZtcspRbpYY24YwzyMfXDvybcY9CYyrdM483zdt6WvW7Cqm4jtdDodNYFYsBtWNFMaeDHw6z4",
  "key42": "3xvJWfaD3Uo699JaTC8976MxCgkBXH2vXs3iPncAfgeanbdZmx6GMi4zUrxuybEzijnMc6xiZhjtwaLJKMWTtUZj",
  "key43": "2WznZU3oLDUvUrCRMgM4hkCyczhH4dSbxfYZhnRZjRNf231CAsQxvVVaxHg4x5XD3NtwkrFxi5M5YkhFuHGfzCPd",
  "key44": "5VLtkVTCYvjK47dVW9TevodUPCc9iK1ZRxKtVbBF24zwDbzprRLTfjnrZ6Y2wWp5Dk88w32BrQPmPooutc65b7aM",
  "key45": "4XCLDckJsxi2iDVcbxx49KuLevUK8MofPAggBhHPyLraht3wFmZZc3dCfUbxuRyaGLUwhiQKj5wttUjhy38VLbc4",
  "key46": "3yfhhDU1Xh1PjyBc4AaQ4dLLzF3R9Ad9mRZSoXWhcjpoXszmH87HTtCsbaQVxRKJytXkETq69f6xiAYjCpix1ZWD",
  "key47": "Vi9T8wGTnaTw9BWjgMsBfyDzLf9Y5kFZafdutKw5LWVfxtdNyb3yYRNijpMEjLKXgJyzvVuMQTKNFuBiAjjf4Nt",
  "key48": "3RQYmGEf2PNGazHwZp6Njhhf9m8biq5Y4fkQyQHe5hP74wSzXa5XYt2EazWdxxyPJZHB79TF6kETx8m1Lwo5bC6"
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
