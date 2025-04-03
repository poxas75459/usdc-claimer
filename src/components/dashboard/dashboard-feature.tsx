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
    "5P1E8gLD79xFtchKv4rXtNwDYBbrUQWjgK2woTsvbuBEjkAPpzcANPbbRkLjfwVakc3Hd6UT1EukeEiFuzp628hT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PpUzPw9xsPZrbn8yQzLeo1gWRFf91FuHKBHiL1yK8QbSudSQZrUb4SfEJo29GkkyWZMXPEHUPQX2xuv6EbDdZAn",
  "key1": "2wW4CPhsHJGxi1hCrPb6gu9Yc5jEyfXo18Lprf7hMitMgdhBFiVuGEJW7v4wDKW9sKRcnjSHWLUo8SEKbVC3XWKg",
  "key2": "d1yFgKnpMYtkRcF498xiKw2FkxGeRewxpusDkR162RQs3pejPB2oYA4VfLmiFRv2wTw9e7TUVGb39GzH6iUTzbe",
  "key3": "4kerUZkPCLoMBVHvu3rC5bTnPdDcMxWTWg14Y4U3fuFJCuReD2yzCpSPpUgkFruQw9s7NybYhnu4wVaXTYYwyrEE",
  "key4": "4gD8rDS517MzLBT3Kt9Ht9mzLgiS9L8FjdYwstoC5sy3K2esY8s3TekFvT93W9K6dQ7VqAtqcUZsUWn7guqfbf21",
  "key5": "3DgDtaUjSnhoezxfB1Ekr9pqfUMENH771qZ8LuPL7h5EEL3aXG81tdgKvFGKC3bfYVExFgrXFZLpg5czB76VDm4L",
  "key6": "hFv4K6fHwZodZjtATw7ZvEvYmUwiDMCasko3KuZM2EWh88SufsphpMubQNXGaP9adh2cfYCVpDVU3H5vJwpd42i",
  "key7": "4pbWE66wB8b99N4wcBnnw8CdkCHehZjoK6uCZu8AxmT5icwb59MS26K4PvEhFVVQCbVJHNS2hkRJHVMQg3F7CpTi",
  "key8": "3shmwpCRVbAjmQGoHCUd9XR6kn9viwPf4AHGdCLHtwGss1dHbrTKhQvqsbpZtHyfx1CyWxDA8okiDkMLgnSDvaGG",
  "key9": "ryoMEY1yhfZW7PGFzzPKirP3GA8rvVHaMudhfvqG8YsxUaSn8suFmTDPEoa7Pye5oZ994TPRyGF7EAYRiZbQ2UB",
  "key10": "5fSozHUbYnugGk7SFjjoqACr7y3C7bGzQadCw8okFjrbb9zg5rBApkn9DcVDfuauPd5TiuGV9X6sZBQ31rxJWDB",
  "key11": "54TAP6PD3pwxPR9FNaXGGWJa7GmvuULU3UKq7iPQVunC3HgKwqoMHzwTqZuwvT3LtBXYui3uuNB44zV2eaihTjZN",
  "key12": "3xbz3f6K4keG4SQREV29iu1iQ1ScjTvf3RfEQscUijcE6J551HkBNKzM6STa5fLRq6ksXXSiYFXnwN2CZ2JEw2n4",
  "key13": "3X9D3nPKNZGmksEFNXrqdcbPAGqwB3fJJgxetTPzt4e53SSjKrmcduTNSvmmXxdVka5GVoMnMZDxoGLrJPQEgtm",
  "key14": "WcozEXnRUvLfUi6EnCek3xh144Kkpvq1LPTW3ee9NkY56kenFLQmjewQohNnEpgKckLKL9FwrW78XnpcgYhPf3W",
  "key15": "3twspuz3yiWpndwEDtmQPPvW4hmvoQZxBmWny7s4g4CtqiR9SLXcYZRrCQfCEuB7PkWkV3foqiQxQG72LyvYyVwr",
  "key16": "5B2uoAD185F1UptQTmBT83grgAXejCsgRyxM2BYqPavBKpziacfVt5nRymwyvhXt4NN2Vx7h8hUmbFEHecNCCEBq",
  "key17": "66vmkEZmf4o6QM2vpntFnsnh1ESkuU4W9kiJTyXozq5ktgovwE3QsGA3t8U9pDWt7A1DthmEC9DZnS88E4CW5H6V",
  "key18": "3cjY97o8m1op13aAU1GoQJSxXPQaVLqATFfkdAJxJ3vZdy1xWGNMcHfYHmtfAAaUvtHoWhr1gZt4SVd8WvfHGv8u",
  "key19": "2EboMHoMXSN2o6Ryy47yTLfSWqMLzYfFWFMNAyUM3ZzoW98RAzxe2Kh4MudnCaNg8AswZ832eupnFRW9wjuw3HTg",
  "key20": "4MGpwMicvY8uCo7LsLLbzrEtmXsP3DKMBYfuKymnYmLk8PFty5TZLsga3Ux69K32wNRznpEYuqpN63bLwPNkKtMj",
  "key21": "5ngFe6GDczkAZ1hJ1TgHsAW1AJUUEuv2ZVgdCYoFvZA1bX1rpwPsA3ZiuPLWi8z7vyee8aQ6q2LkXon6MFoX7iX2",
  "key22": "5AHNG6Kc4x6r27FGHdkFGX4V56NCyd3peF2QYgYSd72Th3NpmV1MesGJEQdpKiuYeUULUeZMyybRxfP9QZkMVhkP",
  "key23": "4mEh1kQx9yKxqH2krpjc5MPTrdnMVSURyRvmJEFQ8NsqYjySSamZVhiXPCDw27TjfefhZCx1KeG7DqzFdYosPuh1",
  "key24": "3rMtmxNbftXkHcw5zvW3fgqob9EFyLigrPk4D5GTnqBUXUgMNrB3mH5ZBQ8RG6VhQc1PFV1s5TNYvrkY9d5V9ETT",
  "key25": "4nXjvtb36XyWqgyB1UdsDfwmWMR1NfdKJZfnikc6cwoQXQ1f9Szs7stDhAgusV3rFCpZ8yxFYSyNeBLwwTqtCmgF",
  "key26": "5DMxNT78WmJ8iNsp1T31Pq1UFS8NykxUbiLTJewiE6ZGxXAFbqKvcT4k5b12ndsJtoZCwLATxbcZA8xkpoY4XcBm",
  "key27": "63awjCTrNFtpQi5TsvmoHNb5rq4Nc21Eo9bpx8xktcDKTJ5KrWmHUen2PN4DdsicneQ85FHJbaTSq6ZM1nTnaVEx",
  "key28": "58crKmF6T58y7eTjRG6UMdusG1KVM14HcUmeTPZnchgnXKskZcn19nWawgoHH5RsbaPe833Ypi7kgZn7kL5xfpQQ",
  "key29": "54D53N2XWakPYszsB6bu2fG39NLZexyWfe33RgJR9k2oSrmKvCBrb8Kgm7Nt4WHew87H8SDwxfWADpuHY21b8i83",
  "key30": "3wrmAF87zXe1cXZ1i6p6CtdTaY2QZnDxvoqwBpyLaypwmhGPdsmJy7hBCnUQvZ161u4jdbqKZkpwhtfsH8tfzF5Q",
  "key31": "3tGxN3YKRmwk9Hjw7w1N85YKtLhEtrTkjSwPv3LPT1vg23BCbYXMtK9i9eCwvYAV5iN2eTeBDs7YLYNtzG4cbug6",
  "key32": "XMUoLFqhQE9UYXVPezpuKUbNbTdQf73tGcGE11RFGXu6ZrGnm1H2fmdhrDAwDkJkDdV2nYv9iCmHgxs11gNVfmd",
  "key33": "THDM8GGg5yfzMBXu5CRypHZm4UhrJtcbeXg5VcEq7DoRC8r3nCgATwFHKPzpCR93kJNRFn3RLhxr98pP61rCeS6",
  "key34": "4qMBMzQg8KEBFMqASC4QRt2pD4ajAwTLWYGRt8NudhUAPm1Lvji9Ztax73emtbbsc5HvEc7nVS3opwuezppxJNtn",
  "key35": "5RjbyaQDHxDfHJwofUEZVFuxgy8kYs9o1LCCXCiDHdhwsirk6n87w2PULYfaVDDKrpsg9EvkXbNayALZ4DTCRXgS",
  "key36": "26Gp7VwVS2WiPaUt57gm9EQdojg7rNMSWxpuYvcxHhCtFPTMZByagL1wZATRUuHaWfJT9ne11nhEFNEUbYuaBpS4",
  "key37": "671WQGSyqFH31Umv7G9VnoQxTdppzaKTpdXzSRZ3VL42i8JZwFmXVjD4usrgMg2vaBFd26TUPwKp7FcK1Ga9BH9j",
  "key38": "5F7NhvfKG5uJaKPuMNpv8QWZQSRLQrkyG29yj2s36bfHRGaDy97CnoNhQsFfFn9EUdXu5miK4Fov2m3ibubU9E92",
  "key39": "2Bz26kaCrc6Y6AxvVe2ewaaYg5rLn5dXWj1owLNkWvuViArhscreZGCgqycqdn6VZUecTowivYJLDNf7BEgLc7DB",
  "key40": "5XFT9NKnRnsBsTdjGGroewLoCZGDiF8ntJnHKwgJC1zUEwiHz1tUoYQEVmCZdqCYNRG1t59oMLV6XFW16MT2Y47p",
  "key41": "W2caZeNnPgWXS3dacSFiSPDVUrtVVNZdtSsUqRRGwvWcUf2CLXUY7PupSizmDVgAV4wkMnbSH4gEA8qtm5MZEaD",
  "key42": "MrQtFmbypdqZpnUo87dZdmus9RtjaTtxVq6V89LyEEycj3MP47UoM6h678ccCrbYGKDssLJfD2F951J4q7cou7m",
  "key43": "y6g8niihEaMonVsgpanznPCbq8bGjYrM4Ur16GxaAJcTY2e3CNkKyK9q2CPsHWk4M19eLCih6YbwHNT7xnwvPGG",
  "key44": "5hNMq8kdWGYaitRFvsm7Dia9y3dyUtQi9CvXCTFh9oJZM8KFQTYH2vVu1KEaukWL3djtwiBMQ8aVjQn5jxAdf8m2",
  "key45": "42PMsLbuzbqkjKdqa8VXWENQYhGu3ny4dcr6BjLnTBEpTKnMSjgjx5fo1jCThGxYzcWL1yrxJAJCCEfzxTZnoW6P",
  "key46": "2jvqBit4tzRAyEGWgid8Q9omuXQFxvQkjgTqm3i4HnANnR9mLuuQFR4VBc8WfzGqrzNuvJdvC6vWTnJT7LJU7MCD",
  "key47": "2Co2tqE4fxL4774sR88FxziRMqCJbGRJc35ugfdTMWvTpTYGJ3qyWXrWFHGFSo6NtgN9fnux4oRvvsVeqE5eJzMw",
  "key48": "2SQpXRucvDvuMgxhgBrKCQCoUYD7u8tWQXBTA1hvstW4AxgDz75jPbB2KoZ8b7D3Tywf617ryVZAsjWa8a92HMgW",
  "key49": "5MzPPbQo52xur3mZGjLzVwwNc2gFYbh1XSJT5etoEY3bM6Wc6iLBZ8Q3VCEfcXNjSFa6PcGYwjek4386k2dc53Df"
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
