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
    "3FGoSoZB6pQnhocA2pHJzQLZgZtxk7YMYvn5MkGA1E9pkr92bnGwBwEjsAQmKgX3mPugfNX3Fj5frueyjPi9fQ1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S9XaKFAqd8oJWLrC9Nz7EKQY9xx9uUeN3qmfDPgGAU7hieeewYHKR5Xzs1osM4sNGZh2FxwhWVLVq2ULq2yHcV4",
  "key1": "3dVxD5Ak6CynZUSrp3kE2vQKpLsvhiYp7hcNicLyEgbQRip4twQGR8i5DkD5RqMDJYsCNpK1rWq4y9yefevQiJa",
  "key2": "49Azfk8tgakw4AB9wNkpqRiiyTCPYFZ8rqSHFuuqwrTGap7L5ziq5MCB1GnTJuRUmaZzqTbcaFntvrhpLmZm9Frf",
  "key3": "4oZqTrdzqu9AWhSGaDYHDdSMeGP9Y7PwiBx1hpNitH9CfywhW9RzZ5txSjK4pQpK6WYxd9cpyDhwFoBfKLJ253uz",
  "key4": "5EV6AKzSM2S4StTSaah1gkcmbfBsHR4EHYVzyf2cxWy7GL3azUHbvGX99UD5KfoyJ5tFY4wdTTb23Qu2qaYLdUQP",
  "key5": "5PVzeKGJ5n7br7jD6aRmDgr1vb2KZCASVgqXwJfCouswE7VVco6vfkmuP6Vv2EEnZSe81fdjx362NhRBLuiTNrGh",
  "key6": "gopijVzE2q7u4Jt43wMwoC6gpWuFRK8LQtyLXW5SLLdWhAcPcskVdWGxsXs1oVjjg5srQFNrb3zCEFZRJao7CL5",
  "key7": "3ifWMw4f1WLysVB3ETYcaAvPYxEAn6Q639cQvTFcW8Qb23zmzAt5nVu9o1siQmiPYU4rfrxRU1gd5qNWwWB1e8VV",
  "key8": "4QM2mC7n4vkf3XFM8uKmL1GsuKKonoiPEbtKP7txknXfSLRpU4mPA4MiWw1WxstS8hsvAtsVcgkiS19SmntRsD3f",
  "key9": "5qs1R1mfEFomvuLVjvFAneFQpx7azn4jfLT8Ka55Kn8SFo4bjzDrC5NtE4E2ST1Y9uh88PyD7jC8NtCD4izew6w4",
  "key10": "mHqd1mCnmyVmk1MTBXs5MzgKcp8nxoMHqgqPhb1biMG22gqVzX2qXsur5wfw1Baht9J6Cjn4i6SoWGsrBgLtsPN",
  "key11": "32sgYjzu48aTiG5eptA2hf8XZ5ZawnhM8kH5zh6TQUaaGKA28GjgN192p7TjUyhYEe4ajmJ6LPk1TZ6GHaauRFLT",
  "key12": "hfZjERwvKJAiszpXMCBaRWCHbmGyqTDZ79Hg153Bejo49V2VB73BufoHzMLsQ3vvMdCXXa59w5Wbgxh4BU4sDPJ",
  "key13": "26UKAEwpbU7k42HuXgCoDuCi8Ptvwmjc3E5XHAMncEtK2cLCHHDPYfZ4WjSuFtuiqVFRqbEGSPzotn8xKW3DTGh5",
  "key14": "3Qa3By62AHpxyzv7pdWWeWKfUPgVWSPCwYRyXPrJWgJdYBGFFtXHei8mfrR8cdbkat6WxLWDqwJGpjHcogWHJfH4",
  "key15": "3E4kFBceyxoCHm5JqRYHwmCSdscQqdve8n7US1hSyEN8ZL8o6CJL5YDWgMwWQhF7LFzizCZ926bMdr8QpsCFDhA8",
  "key16": "4e71VJ77KqpiuTFbVQEXB4zzvZTNbEzB4hv7o9nAawQhruBavE5FhENvX7YXfoSbH2rc3BsQikWs9ugagMDT2Lup",
  "key17": "3H8xZpehmYXe2JJ2VJduG47BUf48dyASTKg4kSMTD5o6iGZFFMocHR89DKCXMUdH6tC9VmfpRrnbpw1yqYvdnxEx",
  "key18": "5VKE3XJP7QiTaM7r4Un74WVfpunPSNqkWDFeKc1NgKs4T9DhXU1JcFCo9bNRtwcmxX5G1WuBVupb2dY3Mcnsw7F3",
  "key19": "2hnDWXiLLDjTXtFVPWj1oyeYuNEQ8VoS2w8wGryFeEChFY4E7zAaW51GFoqSqZeKLjs5PSniCx36rqbV9BqWKVQU",
  "key20": "5VpqxZeq4nJ4RSgpskMWnqNFgTYrLuJsRjGPsvaaVikVFwvPKvvuqixRaTbGSzz325PJtGNmdqTHkzDSXY4NfUEy",
  "key21": "4y4awvPDyvs2bJYnDcw1mppjqk2xQhTiNdm2FGtWBDw3wDBHiZkk9BTyGghnAZni4n4B1h1U4PhW4mZ6UA311z6s",
  "key22": "nc5HzQnrnmBvUEozBCp4qEjJnQz7k9RR1bkBhHfsefmWhBQmrXukkwbg6v1VTCiGs6ESspgXvHPjmwQNKh6kuZv",
  "key23": "5FRVvjrd56q67j9YUUCRqEbBJkjJ9R2pxwyvYVxgHtaQ1m2P3RhQUWjzNA6cy2ncv6KVQBXWKwyyho1UkLeGjSio",
  "key24": "4u8rhxn1ekptE9YhCNAgt5SYogg93UrTi6K3u8z4DGJ8pUFdQv4SQH2MDEqh4SToSE34Fj17VYkeWThpceYiNrMx",
  "key25": "34wVVC4FXPRqiHsjAG5L1L64fF1nfizyGV7FvCoPRu3gTYVhYYdHaSW521y4eywkxHynm8Su9w4eRsxyDLQoKmQH",
  "key26": "3LQZ6QzgCZst3NGtUmxiJ6z1cS7KyNGc1Kz73WMWd8TsTK64ZNYh1Sza53GTUYPo49s3qoJs98eDYmgHdQNVLGno",
  "key27": "5TfabmFsgKVKnWpvfXLHd9SAPsgpZeMoENEEpqLLAhTAmdfU8AJRtATcNVwgqUo5FvZxLYDQdAeXpdpwGPm3t3pt",
  "key28": "4RnKzuquKCvBVbKdkzoLwiAmVnnhpWEFn4yNvUJo3Jg6P2MFyPFHic8ayvEqPxQu3BSRSwZj3MZohrnnQtMjejXf",
  "key29": "2G6iJ3bwTHD1mX2E5gvnP7h4nwndQ6yyoAxwEnsU2srrAbQyYqEkiZQpTNviuw6oKHMXVebQ54eaUAauE7NYym1c",
  "key30": "2ETHy9UCpT7WjA9mU2jPXYgd8fdZk5fsLmjU28hKJnXBhT1KdwtaN56r6JYkHcgh2RXsjjWpErUYyaTdDLJg7S7Z",
  "key31": "TTSerPze1hUWu74jnrPP5XsmEj9kbU1Qn5Ui8og9jt2A1zHV5T9W1ozhdRFDU2iVP3rT4MChkKXpzGVhVCjvq1n",
  "key32": "3mkh8wc2eSdWko42prtrN6AAVD8xmy8NEbYzH7n3ZG2x2YFUPN1MgdBzxUrvpSrgRZHSLCMCbD2L5bZ72gRSwa3t",
  "key33": "MKxugjGRUdWA6CA7jWocKhyHtJy9n4qvZ8rwDdocSTm88Gvyj3g16u4BNdg8GwbF4UXAm78yBc3Fy6P8Ly18of4",
  "key34": "3d8zEzdkQipkcb6Vo3tXq4LKXhEnakJz91VGcNWbLcv54v2FZu8iXyHULeBxmV65bEFY2YEvTZjMpVKD8TjwEKfr",
  "key35": "7y15K2ftMX7RAQ2H3piMMq2Q5yHg3WNaTn8SYMaVNwYnXC8wEpKSud3Ct75CiQP3M6N6s2htPosZF12qdTgouwx",
  "key36": "5xp535wvQZVATqEStHeBYGgED8iRmXPMPrJhDqfWAc5burYeR4gpx4c3JVpc4HZQJrT9DwdRq5xeeuAwMyt1Wxyi",
  "key37": "2XmVd6bXjt36CFCYpay97U2aTUXnNFSSwVjNisHLUCdhkGAqDweo5JG1KgxFH4QuixYAVLPzpLXU2jhE4AeqWbQJ",
  "key38": "4MkTzEt6muT6QZwGEWqF2HfLoBzNu5esgQ1RvoB3So8F1wTdvqQWJaFrnMECnkE94aTdzUiJFqntbm1gjRH5VCWk",
  "key39": "4AVc7W7bhV9ETBZkHZRc9N5P8pmKLA2azyWnNTasB1fpXX6Rr6PBeY4tdVeRRPN2LKvkXKQZfZLqunbTuXSmypy",
  "key40": "29bwmJkGNZBhp8VJQe7ncfdg2yhRiVodRGTRK4yY4J93yoKwyyjisTqCeHbg5Xjagv7CNWpAhL9vD9njuLBvRWA7",
  "key41": "2z4yqmqBGtvQm1mjrPziAwLEMNyh6uNdL53x2Zq1g4DvCap9G9EN1dMjxfGjggouumJ3U1ZaPyqVL5G6AQ44f11e",
  "key42": "9tvKbm2dFx6bgDEEMpFEXrtQdqUTuX1ycoAWBBjwY4cG3HfDKB4vRswHxebYt7TwWs9fNeVtB7JnuEA99De3kyD",
  "key43": "47iA47nzvmnoh7u5TEsAR6ut6M7dfj8mimNrAJaFi7C3CdXT5wRgnjgGa5AGjwELmvATfh2AQenMjMRGQhzEApLt",
  "key44": "2UAgkcskuWqEyA4QoVvNF9cC2UKrmJaqcYGgCDEDQhJBwv3W4NXix767yMPBaMPwpt7wZANf9x6X3gXxapEkSd3q",
  "key45": "3uLtCc6TpFFQS8vJgENPyZMiFiMvV3U4deHiTqbPw5onXzPERAGyTJky9zgLDgguATzirPXppfsSSeyfpLvLFiuo",
  "key46": "R3687aYrodRRYt3CbwfkTLRaz5hXVtnATAQiuKbYx14hbNXBxHwN2SoEAwLWQsRSZdagxTdSFkyCH6rcH4BVD47",
  "key47": "4TZMHdpBcah1Ey65nAa5sELqFLA79TNV7w14BCYnNqcrSXjuS5xP1PWX1kwM9jxz9YW9t4uRzJo9KdFmJ1Li7etT",
  "key48": "53jzkv4eCCnp87C6rZBzJfW9FDARZPc4FGvayinHCRb3zkxfdD3sMoZ7McDbPRXduxebg3mGdCw17ztAPRb9ACia"
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
