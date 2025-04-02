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
    "56Su6bbRA6iDCNYyDb7SMgDAZbp25iXiaZMgeeE2geLKawiPTuYPbG6nrmeDF3U63ZPpLc8syH3reNBbDYGnMqSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5buPrFFeoRsFBDV6Nc3Qtx84ECYaRrGNDn8ZovxQK7bNP6eR8amugn44K99jfmw4ZPB2buEUH8PRH2DZh9scW1WT",
  "key1": "5zXWJKefmmP8C11Sdj3dwaW3Mu4HBKNnqxi878ctoACtN81sCgUvD7dUMnvg8yTzmMTbMhmzcGoz3GgNMHTm3LAV",
  "key2": "1SyYqnK7DAScAVt5SmTh8ZMMUqBe5ot9ztfEM1bAtJEPG9AAZKZLf3KGefXSNjZcndD4FkUsvbQDAfjWQiBYtc1",
  "key3": "fnAfQKVyF5zdYKgym3uiA9i1KS8WGNEGhujMEjagDe6YzDGr2ah83oujzNF6k81E8EHoSKXkxp4WwNkv5LNvKmL",
  "key4": "4to19kbW4zH6b9qEUFRHGrKhTRH6KQChaubosE4sRcbXvfaV7hEkAcmdBBkazvhomBA97KSeLqt4xxB2oVY1GokB",
  "key5": "22gxNmZQLosT3UmhD2nmSQiyJCKQhpVqtTpBUsUmLY18UkRv4TbPk2jVRPFsbwJCxW1QtfTvf1beedN5BwVKt5WX",
  "key6": "3g5gTu1MAaaTUY58Caec7q9Tmmy7x9DXAMvCjAZxM9feuWjkJmXsAMAt7ckp2cSkYnqSNKTqRqXcQszwTffs5WUN",
  "key7": "ueryZcfpDzNV12wZZp3uxiaTQ8f7Yk3hGUjhM4dyavntWEgd4tkqJy6okRoxFATQw5b646sbc61JCgs2cqrSrbv",
  "key8": "3ey9Xqi89AzGDw77WCNyaaLvP98517oFvMftsFpKynASj4QBkSzzE2jGYBdqf2dZYHEbmaV6GYSLbAzZPP5RNECa",
  "key9": "626BpZ3cYPnqsrrkRTnmdU1xYPkx92XVBWyRN9RGPSJbkXq81DAgJz643AWoASQUVKBu1uUJgLXCXnXKQuVVtmiF",
  "key10": "4z5gThYvE4MZx7xQMTXqxhdU4M1S319AMTr7F27eapavJoqXC7KaJAH4boANGZZDBk2pF6fcGy6GhDC9EnKveKew",
  "key11": "4xyHDQLJBqUFBWbJQf2KPPHegQvq6yKfzDeYVf9oyz8j1waEEvyADVXfeuc6sDrQvEbJJsXFGpv6wiUoeSQCtvZ4",
  "key12": "CTUF4KcPfkfQH2cJpNG8aEbpCnDmiStLSPwo6U5sPXGsytWaq3tJbmnmo5fumWf21xwazLXuyyWyCT4DVtWv84r",
  "key13": "31DdzqWssh6mFYBJgYdTzMsvjsRF4fFkaw9F6JBf7XTtS4ZLXCXs7ckhC3z4GrAM81SPBTj8EPCNiPXHFpZZGEim",
  "key14": "227Zo7zjW7Rqunut7pMdSWbYzTjXJrkszNFbRQvLwjGL2iRvrCVsVQ1ZdcagF2ZwnyXoJ3wWPo8iqJrPrX57b3gr",
  "key15": "JwzbLeHfzNPW2uCxtTtWBSDirWmuUgD5QUqenKpqt2JJdRsKTYULP7Fdktz7zzrgCdxHbnwcZYgMMvLeg5nbkR6",
  "key16": "4kDUifHUhEPucn8GjcMjpfQQZhptKmyhCcWkbEJ513fDNY4pouFwsQxfZTmdyagV6MNzeZdgFsV9T6ymutChSE53",
  "key17": "3gdnXbnTawNxj5cTW2UST5YRVre1AwEqZnEb1zdKN4yiZGh2DasJc6qvWk3uCDbmMwaPmfFNe8hNvrvFQBSUjSHC",
  "key18": "2nYovfKef4izmgKeJqsX243Rp3JrydLWE9jtznkAK8xxFSvL8zDsz8GGvZT4z5gktZZnHyZBmz7DyUdWMEVwJ3YB",
  "key19": "3Zs3TEYRprYxB7EfymkxdFjJb1CQFuzX7Nm26mVpZkgvgirK4AQdcHu2rZNJjYeNjJBmxdDkUADAuFFzWzvX7bCi",
  "key20": "UMLeWsPnHnbkcs6FsVQG3TwKbCGE76Acki3eDXBMJWz4JdDNSRTn2cF9nGvTNMANUp6uxPweg5XmjuVK4WY61Fi",
  "key21": "2QYSDKLWq36UdGqKV1BUjxMw95Dsa8RWP3GWDbxkPxk4LQ9GfYzTCegQFzQvGW1CrpdtQKXRytsSxvSbUDVtn9TV",
  "key22": "3X3Cy3PqTYsN9RwHa5QqR4mNRFuYWs6t5E5Hcf4QF9QgAV8VWVDaVsReUkoxVypdaypBPATcTG2vDjgTGiLAdQdm",
  "key23": "5gyPCkQX5NUNGqnoPSfeZtHaWoS39PHr8DVomeEiG9JVADSuuiYNmjsxgEPxvKpZVUauqKY4BPh1cDR7qWKonHBQ",
  "key24": "5y8yWhWMYUGSQHsMPwyDpamuZdEzQAbquMqjFb7mpYPSMLM6WeFU1MqoRj5mXVxNohu1af9xCE6pwHNFxuhM98S6",
  "key25": "5kPmsdU7NjyRWyfjjVa4ru2JWLmbWmTesgXKM1dkbHiBt7m1XvQVVDLDytBtQxPEKLcEAwUkLkryLeYijFd2iwty",
  "key26": "4pzK6qtBAv5opswYzi3o897J2eq9wBwUhWBWoG3b9ntcpWnPcji9ZTQW9VTtmUfyKWqobzA6Fqqz7RbB21B3rXKR",
  "key27": "3jZ7NLCaJ6RtcF6FDxcHZXCiXj5EH2zvyKfjT9dtzWwRhP4f3zY7CsrHHYSkQz49ZP23NvxJ7b81MeCuci88gULT",
  "key28": "44FPjjiFoiQ3XMmat46CaUcWzUMfV4zeRDPFJXJPFahFhdAmCivgEZBfEexJexuEDFwuib2t7sR2yaNHi3g6UW3S",
  "key29": "5UbZYsVKofAJU4X6omuvTPSREcPY5Xd91btyshZJVUn3WxrhC6pZYGdnpqDoKdKXoBQkoHxN5BjLEeBxro33VrXj",
  "key30": "5uE8Mjtbh85A9DyHb3Z2XU8YNXm6LNiPBRfxWhWUUv92ZCu4LBz4mCw3LvwRMGCtxmQ2QEYUhKJEXREdouZ45LTN",
  "key31": "2CqeE2ggL31nCNFvLDL4kv9d3fZcJA5EJojWX2gkmbHK9iFPQVcZDwvVj4NiAxB448mCFjUH29gNop6U284cm7jz",
  "key32": "NSyfEGKgaG7pbyUNbEptfwux4faBcsusYnJSfcDGdsf86dqdsnhjXhL4i9wA2fhNEZkgHMfs5hQ7F875SRp2WVn",
  "key33": "2Sgdi7CYvSt9wZTztbKCXaeR6cJip6EP4NsdE5t38DRvkhjENJ1ywjaeFqFEjYLH6ur2HgNBTdH7FMxw9xdMFPj8",
  "key34": "3izVfGMSRFzSv27rWZKZZDi7PadXnsYo3MoWSoyKZpCn9iLAUtiZgoTdeQrs7dEdUaYiuwZbSWyp5F8NPxN6uYVF",
  "key35": "3tWVHXKeiCKDS42hi1QztFiqNXKBr5GQFs4x1dvRpPtwGtLdDbVApZbfmXC7ktjRWohaf7gjejLgRvXTtTxtKumd",
  "key36": "2bB8GBrvjHVVuzS2G3Ys4gv86kxxjdrbDsPgkP8xBKwoQpugTEa8gEYEihMgW7jTSajAG3dcwcY2pxqE1kSanxYM",
  "key37": "qsmXzAsbXBrbLrQ4oUix5e6pdFm1YhCnRWabYNCRH8qEHVtFW2V7q4eSb8y2feWfAqQfF8zznBRaWN8vMSNVBjd"
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
