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
    "4hH8nWrg5ZyDCZx5ZcwbRMSAa4Ch8A6eSprzcE4QB7xFNV8TupQ1b2H2FCKr5rC6KDh5kUYP5HQh3TEc1dweKx5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tXSmjTmaZQXLYqJSma1jaAeB7r3eZp1T3KbXaTRVCd1Qigjn8uuHnyLmnKsXQYxHyoFvT2bHxhiz5qt2n9NJ8qL",
  "key1": "5pCK1kEm4LcX5mnuHr7mcyXNUzwMYKBrecJ2LWrcFWu4caZat9b6E8UUen3JqGtTrXvEJYfrhkACodHAbP2vJ3KR",
  "key2": "mo1JV3eNpP6NvNXYdR6LJzMUYsrLig7bXwYSvSQRWzQ5XnNQ4EXb8up5V3EPeceXWnPsHXJ2xM8vpM9SoEEXy8F",
  "key3": "3CBBNQzkT3mE8wfttSHBkfudokaFmRtXZ2NvYJq5qRyFTaz15xVLaencwGR3XdTiYgswe3nvDE8rUE7PNGbtpgjm",
  "key4": "3siwPc1dJSyyrbAb4zUyf5hrkGJZHPmGvjpbcaMB1GWUF1SUAxfAVraXsgchM1pJVXUa3rX56W3bRzt4nYQEZJ5L",
  "key5": "4x4DdRcV3T1ksNWh1CLXn12DRTErmEyXvzBD7oWarcHHWmJ9Zdapm9gFViLW3dWqnxPsrVZU6PK8quDrukWznF8L",
  "key6": "253gbf8agYGavmKMpzX1gAqvBKqW8zyJCPLTJgpyW5AqBZEeKhvVGAaEiimLtEbk4WKv94Hx5pFinVEvYtCJVb4z",
  "key7": "3S73YxL1AEWHAKHJmEXoqtTmQvPXheVARxR6Wtzy1NmcYQTkra7SyNYqEWyuT56K9X3BbYoSmpLMG86aD9nBPiDU",
  "key8": "2HgvP2ZqeFr7jUae1GWsHVDSZaZnQpY7WfPnZHHMuy5JQeworgTQTNDpSh3Sqxw5wec6QU36qhxhm6vCZHhcNES2",
  "key9": "2GYGh1GGDAa2c7zDUuJi9L24NJz13E3MuXe4W1hSr1awcayGxk7P8jNE1ynMXK9uJx3HVSivf8uRtE385SKSbhhU",
  "key10": "5PN9Fo6xHvhdqHDAxXKBH1diZNRxMs1voFEkipXAcWsXdJaeBejE9KrJ66FNDfEEnnvyX4QY1ziBVoTWhyBLREMM",
  "key11": "vULBmw1uAvFTcqZs5UP51WSFaVw7dBB9Ge37Lj5C6mKjRSAUM6yVuttHHbqAYdR4nVFK3MKZbds6NaNB7mg95oU",
  "key12": "3PAZSG6Y8M3gGqrCyTmtePwdNr3Ts6SLyNf2A5SpdcMsSYdSntNNNxUZyerC7bvhKUJ8HmfbyqFpC5YirZyiaT78",
  "key13": "4DEx7fdSGFxWUAgMvEJoz9w9nvSuAYcVMJ9hR2Wed3AqBDDvDuHE8R4u8G8i3XNSf6zwPi3TH55ry9d4cJGXMcH8",
  "key14": "2iFNwqmeiChLsZJa1iFfeKYK7owC8st8dsZKDbvdAf1kqvanaCXgFtyU31z4MtpwLUjCdxCJ1Lt9rchV8fke8JZi",
  "key15": "2mapSUQMrMUqW8NgW6egMNyhD3H7rDkm76tEjxdsqcgqrD3yP2RazjzDRjdQMGFGCWELXVSvAgjDsQHWtAhYjnVa",
  "key16": "3ArsQ7UHJKDHdb1rAiD4exMJh4jhzUx1z3fTugwdPCFyPuVkFCbMcNWuSY8VRgVsguFekiBF9zuf9b4R3S5ywEdj",
  "key17": "5w9hkgLmfMGksmkCvKGTChDv4dNszXgJfwrdNCKLij7KJfJkfRa7Y3Y1xDYs1nUeXRC2qHEsPq8eB3MfwRJCsGtM",
  "key18": "4wzwq1e6VE3PWPrzbxenBjHAfMwt77LjH9odMhWstU6sNyM8FFcWoJLgnKNuKeDUsVQr5mTG8rCwyt1uYTeEFgyc",
  "key19": "2STt6YiypnN41qwaHaYC7AZ2qdSNSsLMGrYvQHzLUrA3vygbuZWff6At5qbJZo6F6d52us3nUtBsBu8fotxxGAJK",
  "key20": "H4j8xXYQNkgUh1tsr2CmiYf2ceUo2k55FBRKZZhVPWRTEaXcX8HhqiFwxg2hzcvR1q2M47hHxSDkmk6D19Eyxv8",
  "key21": "2MSJNRhZWecu9ygkUBJrUMqYtEpwDMtJwFEvvGpKMVWy3TkoncGMGDhMaQM7cUymqLfEJiKVvvsuVh5gF6hoGqk",
  "key22": "3isGXs8Q2mdPNMqBYarqW3CnrfvbUEKLbjfsnM4ZBwoB8cm7te3kaGpkcHxTBo7qwZdRhDAszNFNa5vmrKyHQDXp",
  "key23": "3pP3ZdfB2q2WHuANHwa5rwKdcpvjhAciEon7gcLuQcC6QP5UGSN4Cz8z1ZZ751vnnzpGJG5WE9pzsHfdZXVkZD5s",
  "key24": "usQYfZ4Ao67BamH2igT4JNL5zPwGm6mF4sXGoAVEHAdedmHa4pSBu2QvkvP2Xrm88A7wevDrqjEPQ34PBrE88Xm",
  "key25": "2WyBHhKmbZhUaYfECsR5EWCenZfGnqz2unLycRKmKYF7CF14eCFUiyiAfHm5DYHBQ9dd4c8Cx4syRwmQKkdcsLRX",
  "key26": "34ncbFJ4pF3hpeWd1pJia5jGx63P7FqiNsPFzX4cQoCDNXgEH5qRJbUmU46YwUN8uurqCb6F6xnXPG4kYceP2GxH",
  "key27": "5mhgwk99bTVsXfd4sfJh4AtWhmfsqscDFQqo49ESwQRKJjbTivRDiUXbswHyVnxYuBQAL4GGKQ8uy6N3CH1yDXcw",
  "key28": "5JXQS5dEQ8SJxiL4qxuTjqZ7VHTUS5ZLpsJHx74Qn4rq9XJKsznRWvKcJWzBwcrXbREFMceXVkFXLYSS8LV3oKWG",
  "key29": "wkkjohvWCKpPzAvPzsuvCDuQcn2qaYcfrTwHEWsRbpepGC5dq9q2doozTKwfkevL8FHHkVhwQtxDTrf3A3t6GEc",
  "key30": "k39GE51whBT7QpnH8gh8NW2DypqyHPCzcKdh7xyFXXtp72Bt8ivcBh6hqkyKCff7fhtiwA5dZBvpELHcPbNwYBx",
  "key31": "4DkYBy5J2RQFv52hWiVWqJ1mg4imm1EPZgAcWw8Z233jAyG4UXXrUTBoxX6wj65UcSX4e3fTGW4jqChPn2QphqLt",
  "key32": "335rJ7w8JDmvhVpFRtZdttLFAr5FnhRF818GUSGwRHqU6cSTSbjg6Q5cLkVjozNv7CBthu2YjrrWQoj5ZEFN83vZ",
  "key33": "5mBPK82GSTt8sCTM65nBqMcn1FS988wiSz8PdAeVsAt6dEwezfobZQerpkyq4DvvTC6EfyAgwq5omjAanVAEoua6",
  "key34": "3tyQgwRqTtyFfZYcbSDTUTsmT1miRXaEJXao3mUgHQfbdayn3C9VJ6YWLyTB8zbzGzHFJWN1uDasfPUwya1a9CqJ",
  "key35": "L39NgJHwcL3P66DwEHbT2fJEpSuAJScxFMgv42p8GyQ4vLCQiBh9RJfevpcwpSnsWCWsv5VEp9JJQA6RYTeuooB",
  "key36": "62RqiT2DTJ13u9LpvK1hy8VF1FZR6MMU94cQpfQNCUWTFYvuB38pNZ8qJ1zxRgdExjNGf1SfftZfZebJDXbmJhAn",
  "key37": "43TsHRu5AAoiLBd92fLY59twZHLCRHjnUMAnUexmxHqdUuyDB7RgkPNyMg2q2RwvGhHvPgRXPGutZQ4HmgKsW6m",
  "key38": "oFKXGXiRgcoPCoCMFKGb7JcRLWgsmA9ETj9RMocRQkDsxDqK1ZKS7KL4X2dz7rdtD8pm291A1QgsWeoCD2mnM9s",
  "key39": "4marMsVaK4TaCNpBqTta9w68rmsR8s6Vm6et2g45RQoRmRQFvXrRXoMAnHuYekjVJYe15HBSPQvMMk8uEEsxGGU7",
  "key40": "5PX8hMTWu7jpYRLoXHzLuoJXBhVWcawDiTKRk3BhLDhKBpiTW3GcjmpbviLGPUDvJyhodYuFB66Wb4EswBv6xKAF",
  "key41": "Ai4NrH6WKatt6L7zEXCd7kf6DRkTZ19Gs6aLM3j9BYSoMqCdotNmg3ZpmcSjrRjioLWyFjuooTpnCdWYtPYWkUC",
  "key42": "5R8HNKpcm8N9e7K9N2TLb9LCRVgLDvsPoabe8EfWCweP17iAQsGaYw6jrJPcqGCz1pne1q25UUhdJ7ZQHcjsTaBs",
  "key43": "4wUX9kUdfHuwsifj9G4cB8ECsgvc3yEH1VtwZiGvpPmCDb42U7tuaWtqbAzKpzGkY6qkGKo1yxAGcMk7Wokv1bJe",
  "key44": "39D7B7upM5avKFUR8WF4GrMnyYaALx2xpYo4x5QhJvusUrR4Tu5xvfpsjXenP8efS6ScK6xVMRDQmecK3Cs57akz",
  "key45": "2h2ZRvdBQ2GUzYuGgmZZtGpTaK4HbJNfGRFziBMvFiGLtSU6muMJjkAmkZ9KLaF64zBMEFLhqCkqjdbnzkvguEjN",
  "key46": "4kvjUo4opHPgHUWVEUVzWwnbb3KVq5R5SpphrPnp8CgnUze2b3notpG9gMPt3JaNFaxTz1PGkpPtd4xFFzMKnT4E",
  "key47": "56wryeUErNTwnyu8sxbpxLEZX9kr9g1tib9oSWhFmDs1PCYsnnvEfYMNe2p79khM4DkaaJ1B6bKC4YPXw9mHr1GU",
  "key48": "4npV9Y9GnArfq4YgaZqGqqUSNkR95v18Z9kKt2BppcgGvyvMBEz4N6PSwukM7eh2w6iCy35XiR5SJBWCYhnNfAGQ"
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
