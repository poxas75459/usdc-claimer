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
    "2RBt1UsyemX2bEf4mKdhAJGQVmbdJp7epKL48STPdSiZUU9Nw9vucrpsgLMemvhFbCPaMp38t8L14BRtXDhppH8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GVhNWkXoQVotQWj2VRPSrR7EbA11t7mAtEMGJuYReKtPirbv3yhfMRhHzBZbepD8AixR6B4MLcki6EtEZKtiDBP",
  "key1": "2g3RqAQyP6k5n3NcXHGjmzBpzrDGeBRc84X1koc4bJWLRhWtX1sBWN3UbDr1WuUN5imeVrZHZaa25hygVpDza4tj",
  "key2": "2Q98oXbkZKpW2bSPE2kBvAyg7T5Pkn8UkwiAqWk7H3fB2xLx3jxwgKT1GsF8WsSiPq2aWJKPtD5K9YBHE2HWJs4G",
  "key3": "4sWxdwnPvwiC8va2VEYnbn1AdWkwfgy8DhacwLTK7mV31V8AsczzKZY6dP22cXHbLZ7ySuiJWNhTN769q1zUWwCf",
  "key4": "2bsLx1pETZjZY1gnR2k9kyhQ5jb4JaRDSFxobBQdjGezc2H6Vgczi2rw3N319wyct2hp67nY1C4cgm8Ymobs2eF9",
  "key5": "3R4t7wp16ES4TyDHt31GN6b77Yp341xHNAcxvboXrYyWjvdPygXA6Sr1hWMAvuBvUuU5ubSUbAb7gf7EAw5Z89RQ",
  "key6": "3M193Edg3cGjhpByErKYmnm7dstTQRPdVnhadrGNaWWie4YGhYCvHDBYD15QnYhPZaFt1YXFbp6pLR9aWYmX1Peq",
  "key7": "5tZFqzfNcQMJopanFzmYV87Eqe6uKDfNQMYQuyfzXcH2R5X5BfnfcGzYFHSJLFWJgEBSCJcDB4Q65cQeV1XcJeHj",
  "key8": "5Dtcy8Hx3YEhjY8hcWgtDqhBKv6CHZhaSezsQ1N2FVaGkbYwpovPDau7np56z2DvkpPyB9SvxfZ3rDZGEXRme6RY",
  "key9": "2y9pv6SKqKatjdVhpXXNrhMxhqi7m6HRmcwBwZ9Lympt246JqANDyKiuonxGSzdH5yDBY8QiecFwVFv7THpPfwUW",
  "key10": "2QnL2UGDPv6yoXBFndWjBnPX2mDhrJaxG5x4B5qzy8VnmQjzyqaeQ6P5eNbaafictLSQBqLZhaQXrpeBSFE7832u",
  "key11": "39eatTHFgVZxbvEy9MC7HvdwzoZM2TshpotHPMse2tpiZY6HUV3UQ93RK4KHGBJ5849pFbfU1UQnY84LP52Q4HJ6",
  "key12": "3Rgbxrdr3ZfPv3SpLyaWgpcFm2EW934nrKVwqthW47gVT2h7p6ZRDsuhBUTWAQQhLkc94SvNyQcyM6jRaQWp7BU",
  "key13": "9uvrMHWQSY8icUpiT3XRsjAf7m9RRfyVcB5JbwbEuzevECLVMCkmdF2zDGdLsp5gVMnWJF88tF6Q9yXhxdUFwJC",
  "key14": "4TNpAgfZj6ATPfpYkfLJz7pFq8ag35HtFUwT9zR9ckTDMFdeM44CzSb8iGVorEMe6HeYnoTGSY3QkidChYNNpNU5",
  "key15": "MS7iHMwaXksUE29v7VxbfdY2KX5XkRjcmw9mF5XyPhexF1hzj9usVHdmr2QBZpiSXdcmPnAgvKGrGBvXdDqk7bQ",
  "key16": "4jdBCtSvrxH6wSceBZNa3ggZuWTNq5D4WpQ5z2AxwZeT3m6xvDzLLRBA5wZHEscx2SYSSKfgC5P8mZZUpaYApaHn",
  "key17": "39SxcaGVHwyDXg8gie4yt7wwpdPzRVCq9BXrxmUEnn1tkccwTzHZsmetRhtQUkFz9YT8X81LbFJsB6n2Sx8cwwgi",
  "key18": "5LhfXSdUhpmN3iNJUhtameZpu9Xp44K9q5uJXpAygypBmVBvSZuVY8hK8FZoy3ErBvgt8mcTJGWGgoxW6RJW6duA",
  "key19": "3Aerbz6BdCs5Z6pH7a3w2k5PrTrhcx3z9jsPkHFuaG2MFtvJprK4Yq2dYhpfcjbD9WJLzPFT9UCXqdcHY7dtJQ2d",
  "key20": "59ypBuqqCrB8wJvMEZ5wsHNn2mwhNW3n4wx1jUCsUvJ6Lbaz8RgAkxGo2dbpCAedSTj8jKNZ3XzQYsvy8ZyoWBaU",
  "key21": "5N66P13EAPHU6euWnHx7cXNpDQEU1urqagJThQrpS7EQmPF5eKQ12fm177YDfCqN9vQMoXjwShXJzRB3heisrs11",
  "key22": "2sUyWpNmsT1VTmfZ7ncp27C2jsRTQLwRrvbu6kg18jM2GddvqSfURdW9ubx5eJUSmdSoGw4CAVA2tqTmk1hT9nxm",
  "key23": "4qx8i7TsZNHhNcQsuGSCLCCUTEF1LL5Gwecu1yJQXHQYBkMf1McYuvVsaSyrMe73qhEMDpZY5HrNBQXso7j84ayw",
  "key24": "5EKV4dvJvEz8cD4d9jynK9Tc53XR6k8pHUtxvEqAETdnBgmG5jBxrMteNDkJHxNBBqxbz45rArBdRL9zu6HkKm3H",
  "key25": "5SUqwRwQeFBZiv4Dp7JkbFxKEKCnSqb4VaSme4LbtEg6Nk8shx1SmshoXa4tyYsdtR4Bz6qvtsDpMVHswVDjY2w5",
  "key26": "2MnowjFYXMjhFMXZAQtGbXSeLzqUKFrdPhoRUJQ7RtpJ5aqc4TwuLgrE3eDc7sfDQp5a7fTXHDQbpFc5Kns93x4k",
  "key27": "431rw2kf29oNK1UCBGBXSSRkzQbuc45wx3768gsaXQwWY1zq2Q4f6i6ki24up32Pjyza5QQkgZf5hndRrHAUGvEH",
  "key28": "4kSTk4ZN6aYW6URp8P1atJxejUS4PbcvNTt1cyr4vZ52hYK8hMMfRb6rdo6vACAsv8n5pH4sENmw14cYtKYcbXcj",
  "key29": "5c1YWfV1iwEdV99b3HPNeSEwKjMWqcZ4o2w5SuM6R3ZpdvcS3JnGtcXemt6gQQJjDnHpRUW26R4cAc3M4VdSPKA2",
  "key30": "F6vj6w3Xe4iyUzjggf9g8p7MQRhJdWdsTZ1L1M27PZfmQji3LmbQjWeYFNLiLLXfyhJPNTfY96xiL6FMExeVXZ2",
  "key31": "2DBdiFUBiEhoShom6ZrX6EVEKn64roKe4yjstcE4hHtUS1hH3xj3uDPoi88KoFj57XiaiYdVMGh5CmRCZE6L4SgU",
  "key32": "eytddXi6DSG48XvEfyCpCPycYVsHKt67ff9g5DDNFQpvLMbfY851GKpnPWG9md8E8AvWk8nUsQcjS1BHLK8qedX",
  "key33": "65vF9WohDGev6aGuDWuaeKsYf8jVPRd7ae6jT2VgBjKFGTovdfWKsZpW1ZzVykn6WoKjXr7GUK522okjjFb3NvtK",
  "key34": "4DupNoQAWd7rTCHFcM2Ah4jwk69dv2z1vJmsQn5DiHewiUEgTShZdfRRDSpFMJQCpCnoEtDnLReE9gsR5QbboAjs",
  "key35": "5bt3gruebmJ771YXT97PC6EE8DQj1PTRN3rLmzdsRv35GuNsUo3JzagveGyKAC6FdC3akNgCZxzdFTmGxgsX9qpy",
  "key36": "q6hJM8gFywg49jDTdxKg4fXnYDQwzA1CnEt8tgRTsnmNEt2B35BASerwRjB1VkFBsPppiaqjnEUWYkz8CxDeEML",
  "key37": "UXbMt3WJvkUNsJ6oWFTTonFrEGRrosQKMpxtEw5N33c5TizDZ5TBPGGVpdGwvRrJoFdCs1hQHTWLFHUYaTvvy9S",
  "key38": "5bY9WFr5aKuBp7THA2qePo9Yq5mtKRcDJ95MzCSbu1xaTVdD2cZp15KBSbi7NjdLjcRK7Rf4pYNMJXiXicGN6ZJN",
  "key39": "2VtciX1H7obnkCBLtPvMTPzMsxYRqqzkrc5WcM5jdFnC2xJDVYM8ZfUTnjJyBvPeZFaDFYzgq24LeBHc7psfekRY",
  "key40": "28sbUz3y61vFEZ7GmCyCYtKVRfDt8bVh2zuYnoKVqgqn4AMaSsPmnKJdNE5f6McZiSkwVZKWfLY2zEXTwQhwEd8x",
  "key41": "5aDhnjZD67ay3Xofb2XrY4ABh1rgwMpUfteDd6RQb5NWVEvTe4qBXSeY6amVQCexbm95DFvEVz5VeESymzj5mfKa",
  "key42": "2RWP1m4gEiYmvokzFzn58xiEfRXYFv1FRgvMYBM1VQpRr6gmt3YikrjUssnursqmd3ha1PUDjZReQEbyyRhwG3hF",
  "key43": "3XnUyJDrG2LPmCftpAt4DyxUyFeqEdaCjAnz6qCPB19R1RHangWuZYEeosKq8df1zhgzZ727gx2yVhRjzMKxAenU",
  "key44": "2zCRNxgVj1bWTLvCS6D8XoiVxwEf1zdwvhTMxJ3ejRqLb438pQCQkSZXW1JpToqTHPNotyHpR6AF3sBA5Zb12QRm",
  "key45": "4Uc12sHbKxh2JdKWGTsMEjoTCn1CiE28jEHGDnmSFMZFnpeiiZBxUB2p1srtEHTFnXW2CqcEE8S363WemEWqSsVf",
  "key46": "5Mdrb7A7MSJFrNLLncuYh4vrXfT4jPeumG6bMWdKnipkjF85qMUnLs4DghP1X9JZaZ5i5WCbjRoSJRVKDuoFaZru",
  "key47": "5pZGpzJJkpdfpRYtizYKzAa6ArChhe3mmQUK5snvqjnfru7koFXyXjdeGopJHaFew2ty6ECMg9gxWyyhdB7XDknf"
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
