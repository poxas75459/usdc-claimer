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
    "3tRa1JNQPpoMPV7rZbRMmusY4VYTzHMqH9khTWnt4emBDVVWqGYXANmzNT3pzbKw6uooU1eze3XoSyfqrfayZDwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jS972WAACm6Br4Ci6cR5xR1eNrwE5kC6bjU9goAvqpwyo7rpWc5FpxuBQR2A4sj8V9HWX4PhhHKjpa5ocKsaLhD",
  "key1": "46PeCjDG2vxcsfYZYLCcpHBxGg4S4hG4XQweKMVq8YrEhuRjxSnB7Kiz4T1kZDFNF3fxXh7vUxw7zG5K2zTYBZYB",
  "key2": "5QNSBTazdWQptNjuRYTWeRXAMvQKUSvdoFRymjZJh82BN8cLsS33VFakSZyFPweND9aJiJ4W29DixdPENzrVmoT2",
  "key3": "6WJ5DejSz8TSfKM9FBtnF72PHHSGz8Ljr3s5z4y24V2c8nTUGSpcWeAMvGn7CGjZAfQSbmBsKD4Bb7vZweAKkjJ",
  "key4": "3JHryApCYGks5rfFo6jdpfzFq5ig2aQZBRh9xcBruQeoPE12uEtNi9YCAtnm6AQTJN8BFjwuCHY8wY9BF8T2FFSh",
  "key5": "2X81zo16c2pWpWY3DgqjD7av6WrYdTZCduR1kLj2KFyHgPLN6jb8qN4HuiVuDf7R2GLoUFE7En9SoGnxWBpF4NYA",
  "key6": "2zKSdVi66cNVU4Ub7gHW4b8B5YjA6o2eD8jkSDBvCYeDVj6QxP7fW2FWF6xa5Z9BHYuZ5ZzH4MC5Ni8iRoRyuEZU",
  "key7": "2iTh43yd9Q9XJ6zkx4sc18hTjznvwhsyRWhFND9dRQ6ScxGxFTWwPcHLywcQUX8jq15Scj7yBLp7zC5w5WwYhzew",
  "key8": "5HZxZp7UgkWvtFhSTvJwE3VbGr5MaaKVPGPv83xeqtRcbRFSmippCzZGU5wpvSP1SpvBDqooTC7x8acSF226nofD",
  "key9": "4XywWjaHZfjEGjCtWshpQWyRUEMFqbNohdbzCXL5fGnvT7RjGYhXiC1DJZRYHQ4XEK1HoXajipvY7L12XTqsiqu3",
  "key10": "wR1hk6CToQkhbY22v6iSxaUPBghfF4H7jmLRDMrazyUm7WBFhA1HhgCQM4voLFqMqi4G9bhgSTk6BBLqMFsJ4i9",
  "key11": "5nYZyXyT8QwdEzBq5RUWsHdCLkb8zc1SeXU3QEhYFifcVTFpKyEiAHEfbLwjaFZb8TP8TVZDVnMNgv6cWyvTV7Uk",
  "key12": "5y3qwBmJSirNoECM3QxDHQWHBpzEMbZahsQc2uwaqMu5tKU3BCy6HRktGi4ByMS5Bar8jd1Sh9tYjd7MfZxVg1nP",
  "key13": "2kHamvVCvmPQ6hzVNEioPUkSLmaLvGBPagfR5K3UX3WN6jKTzpnJWyWcDwLE5zeNyqAXUD99uJpybmnWYg15wXDw",
  "key14": "5XRwtXGaxGEuF4cUBszYqbX7iagyqsujsCTSZi9RBnKhwa1TVeZzowwYzhLMU1MQMP9rDEGtFV8Hgf8eqKQLqTY",
  "key15": "zMBPWfZnCBFUE4ELcr9Mk1sJKzzMtUCQzY1374U6HoX96jkJvn5Gt7BcHoQtCSR1LkSv1APdkhGYCYg6fuvz3Hx",
  "key16": "33ctUVhwd1tVmMRDaAkK82JMrzMq4k8VbRjhr6476SrLaY6GHsyoXP6zmK1vs1a3PNvCrA8qqxyagccxPs7Tc2qm",
  "key17": "2VqpuPRjov5KsPt8jrpe4R1ZRKqBRKUVWeyNunjnpx8aiGRhi2N3pMn6Y3sKQPYkbBi34uMeDkqa2edqQN5dUmpL",
  "key18": "3QMyxjNdb2YcMjn53So2aik2DZ1eWoxycquG6toaCxJa6jxR8j66X4ZgfqdWjWunpqJMAbKQgXFgdZwtoDcjUaWW",
  "key19": "5jMitCWBQqCAqZ4CYZRRZnGyrT9RGLrWnA6ERSH9RFNdqXan8C9HYFeq2EP1wtbTFsouwC7GX8Jc2nq68enLtsni",
  "key20": "26Uqqk4zyL3PExYoxnmyqA8hHM4Qh7fcRNS7mfbtMXxts57RHRGDeoRMdD3N55AqmAEUVSruLVzSmxX9iRvPBNfZ",
  "key21": "5EB9Xn7G1gGFc5hJdP2UV4FkJ1NHwt5TQ6NPtDpgCooYzh29wnEgTNtGAhHvx282Am9iy8AAxpfhnENXwedgcEsL",
  "key22": "5gTGJia95C8FLur7eUS9Gv4BEjhcH3N5fedq1ovYciaoi5Hqije1BwyfGyZKuZM9xbiwKFoUYG2ffcXg3in6h4F1",
  "key23": "2irFa6jAkubTRPHmRdxtjacQrfbmnC6h9WVBt1oyUPn936e3TnD1BazDihYridc9ZpGbMLNF8TtHPLmRv1Wo5iRb",
  "key24": "4oxYakU7wPAzDG5xBQyCm1WNfJ5aa8wM19fPBmnxLwYUCsSTLLAvpAVmhEQuXNgKeHby6GpSbMkvFQPPz134j3e6",
  "key25": "39rYA1pB2YstknnSgRvxiZc2s3zVRts4Qytfnkg511gmxk8F1o9doxmozvf86z4u8kfjXpAxHJJuC8NkcT6miUvU",
  "key26": "64J5JPsnPwsCC3LKYvKcuSBh8EPYenEXfxw761CjSmTPAW5kzxSoEt1eWy4UbsRVxXhb6PUQ7kZQi19X6uRBrXHH",
  "key27": "3kEzsX99z2AsFdtdafcV6gx7HUh7LPzDmc2ha66gcHEpLPXTsAc8aWAhEBEse9mLe6sb2kqBVPc2rwKDqSCnMSN5",
  "key28": "2Aytuk3Jnv5QA89ZMFKdsxJKMejreQ5byqzBuG1u6ivtHA7Fyy2FScD4z8vbTTBoZe4QADZpqS89aHpjXR4M5fbT",
  "key29": "3R7Pnac7eQs9qEuX4fGvLWCiXwiaTA5GDyKe4aB4ZPd7wykXWgq1rpKmFaF6JJbk3NJHYQPqzfHjMxWgznDE6YYa",
  "key30": "5PMtZDmKBXMC2domLcYYoUcTAbhSuRzL5uwVNC4H6ZTTE2mQ9hexvNWn76QLRsWv9Txkmj12MV7i1BwNdq2kxbY1",
  "key31": "3mZxwn4vWynBGuxCTc6NrqjEhwwNyZwwfJWVnG4kBGkkmtPvMeoyYk8YKycndaHfz9JJnD5G8svHxeKo9hcSbkSs",
  "key32": "3utoDgzDJncpxF5xcAD3u6zoTSc39WitotJkRm3E7jAtz36Vzmq4CCZUx51fGCZhqdbgp1w5icd4eoWjauzMBxWR",
  "key33": "5LsTxkVtNhF8zpSm4zPw9uEfrEADirsmanu9N3GW6oSXATe2up76YpLs1ynbcxbq5mZ8XHDR8zjkyB94at83LDoK",
  "key34": "nKhXrR4M8dRsKVwHkjzEMRU4KXJq6SqrmwqRbGxf7HfZexJrBnxi959SwL6GD7MfigSRLAPaRtNuN35E4heQ3qz",
  "key35": "2FAtYKsrEWseadMKSiBMrpKweYuV4gXGr74i2r5KWm19rfrXNbMwkwJni8c6zbFLYSc3FTnAGkhXD82P3weTb1rW",
  "key36": "2Ex5YCtvThpJLi2yaQ2CDmcigMhmqjWepumjjmc2MQ8Wm1aN7W7inBvWj6Mdcrc7jAjN9D4KF9wiPfyKVUpanC5A",
  "key37": "4Xo73rhPFXMcCk4KFQASengSrs4NUswpZ4njcmfoeWgyqJqWnertqzkbsYMQxm24xqs6k6Yxo3UccfMiXHiTALjN",
  "key38": "e1ip8cgvFPcu96bPYckKhZQyZrZ8yzYUMifepYRhJyxuYArxjeJaZuxdu36mRNGBDib4im6kVmxE9rXsLqucU4r",
  "key39": "2YRsdEoTFXi71wBLJZnb8u2RxjiVwifadYNVGBGnQ9kWw9Bm6DriSaEiCYp19T9DHM6VC5EgakZamisPnQT3DcVB",
  "key40": "3Y28DYA2kNdJbdmmKcGoCnbsnoA3Xu2QAqWpYTeMaZYYSFLyLXLcA87JBogxMbs1shyrEVt2erKHEvZEgWGp6RLB",
  "key41": "2BWivzqdJYLEk2LAyLXGMkTFfCCspDjDzQBGBZZg5vkYf4Y3F3FnkqtQaSh3GRAk6bKJ7Xac1FXw3gx5Jd8Qj5h5",
  "key42": "2ZQRWbUFQ1TuXUC4WMAD5Vn45SiBhVEaBzukuqFedeSKmafBNsy46XtnwHonKEZmXKZJD24UHbDM4dRxdg73yi3o",
  "key43": "3uLSFyoLMBY8YK3EyGocns4o3dUcLjdhLWiG8nLnwe8gNuGM9HF3yDzj5Myg26UymY39b18UmQtuaXwCY2NTyQn9",
  "key44": "3XGmkUB54cnu2W6SxxwVhWTzHjqS6bdfX2ikW9CbVpRFTB2YRdEaegjzq4J8ecGHBSSEDnhVkwq6EhheXsVjBa81",
  "key45": "4vCYey3QSfiGgwhyZDgGBv4ozAJdSGNsY4JgtHyrxatTZxhvnVUPqLZVH83Y3UAmRuL93gEVVxqbevNFzoyXdwVr",
  "key46": "3dAASJMbPntZd4Dw7bazHy9FDREujbLGV2rPCBivzTWRhjVoMPQnsqJhGHxunJuhJdtXvntzMTp7Ukz1q7xJSsdB",
  "key47": "39PTvsD2kBnALKRqqc5CBksu62Lo1sn1VBe688WdQyA1ZH1o9BHjgFSq1BAfLejDSyNaR5QJpL8M1sAfMAAaT2xP",
  "key48": "4JvVENYaTDDnkNMwZQQCmiL6NPMXSA4Ahqr9xUekb1Zgk1xKpScd623mUr6wpjvRNiCazNFz1GVD6eUtV2iEjXxg",
  "key49": "2qtfJy8H7MPcWzFMjP2rTMWvud715rjLYf5o2kmrrojmv79oWq56st5nVwHLLwyKFgcmZU1EFAaTFFAAtGnetQp5"
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
