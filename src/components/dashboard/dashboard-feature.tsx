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
    "4v4uLbJ8sUKovQjbeqDek9dsPm3LbpcD2M2ZP1smixHC85EgDLYHidZ6Gp8XvNFhTJqB1iztW9FtACSLU7fApB82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23WJDSp3o6HdDwqeDovryg4Ke5fQ3MnGcU4Xb64WHWAzAMeNjBwfwM5E2JG6biw8HTiuQdCET66Zx54SUEMU8GCX",
  "key1": "56APDEMuNZyZgsc5JQ8o8gCJ9i9Apd8X2JqwXdebDwZ76qX37zoz8YSTXc6AeYfhrPobVD1xmdFiio1dNgZXMwme",
  "key2": "3Tv8ddWcXvhn2RNXomsJiYi7qWwcqCix5N9UrNgnzjxEhL7WA3igEhmvG3eJK6YgKZeXgKs1cqFCZkTWCFA1Zi7g",
  "key3": "53zNEaJ1sqfAedyzXgid1iV8rrJ1Yex7tSU3G9gDXhC9udgHwaS5x85ntQuBnGkoXmvx2f2irKUd3Bv7YGaTYUm1",
  "key4": "2VNJRNRoCYa2jWif8U2pBg6i2BsCSrVs6ruxqtXCNZQcRgqfSxwssi5XVJUT9uwzfCA5dLYKmBggGTjhX7rZL7td",
  "key5": "2f6UyDryEJgRF2jnpJaK3RMSaLvGFMdo81zFrW1Nhhr8AfoXWJV65gDA3zW5Avn6JTCryFUyGgbDHjngGbNi6QRb",
  "key6": "3VwaN6A3G3XmZuCD6yuymbt3wLV7e56U16vmNDUTYxJeujJk2GWu6hjVpSsEyFk9WNduCWbwzoQRC2qeXMcaSMag",
  "key7": "2ksZ1wDqVhdBVmgyjZrH2XaFjsWrTT4ACf7N4ZSeSDtWR4KdvwD6r2XGWftz6SkpHHu3Tun4VzLcZeunsM2TJ4cn",
  "key8": "2pfEtb5stLGTLdF7K46nnPAcm7PA574e6t4rgEVqRX5HK2rNiRpStX4evjv2ssfmoqMNTkrtLoaDReHkxMAQuQL9",
  "key9": "5F7m26yfYyajV4jbfqJ1CamzcFaGAkazCaBY2cS8dXYT4ZrBeYTqXHyk1RXhmujpmDWT1qAo3jNhCwVBPRiPAjYK",
  "key10": "3sFTdKbhgRFEWMvGoegzEVogBYjXT37WUenbg44tsp78ts39kqGTFKjLANiba4c9EzYkRuuEdxkBV7aDRfrq44qu",
  "key11": "66tLgiAHgZr9pqHN368H3TjWTYucHrNUzLUpRktiDP2EcrqHYhFQLZYKYcNqserECPkZ2V6NE2cwsyR2cfGv5fCA",
  "key12": "5RZyjeNgMnf2g97deEumDmHfszRAjJfK16Sn1gykhWk6rNk8ydU8ydjLsCKbX6BtSjm5iEDneVo2rbJJfbwJJGEA",
  "key13": "28JYoBCAK4Gk83imwQ98EyUM8HTzFjMc3ze8Kwf3gB2S4w8B4SBN6z1ppLZUFB956PjeXefyuQa5YN3SL9uRKwmY",
  "key14": "tbrqMqHxzpBoTxYitkngX6vNquan82PXHdaRibw1r8hg2qoNxKJNZ5uio2ZaDueKcn7gjZVNyAK36D7WdGnfDLK",
  "key15": "5FPWY2gx1tupMXD4YukCxHaEAAHUMF78ZyT5JMSstwYumddRSMtke7owe2f5EPrJSfpWj12ee7cKBeSS4ePZxEuT",
  "key16": "2Xm9zti95VjzkL7SDhA2VyQZuSFYeV4NMv19E8bYHcyby4tekEPJD7RQxpmq2xn2tpdfXJd22Xuz75EGg16uD5Qu",
  "key17": "2qPosDXr1GrsHsZXtnij3686QeqaWHTXCVWq8LhrLpFjXv8P7CavLcudoVGmzsAkrZ81FSvNDyzAARBK7kGsm2a4",
  "key18": "NEnyU15i7gSWYaE1xvqpQek9tUqdpBwhukAX5Jq4pXQZiT5JbUUXyecWAxz2Ttts7vmmYbcwbuKeV6gtwMMFqzn",
  "key19": "2HNwpXwziiLaGtuQHwhViubUBJx4KRWjD34GxXtsnBiRNSr3FbcX9RAUunSTP9UzyRmPAGvpmmxDEUe7K9hHraYX",
  "key20": "5vap64ZdUSmAtHmRzSe89QPdG63PyaG8zfXP8YhEEdA2eq2LPRk74WjMM7a5o4HandrRWackxGZapUT7iRegDUT7",
  "key21": "2mrDTSUZACyEWv1ePfVaLUe8gMc9VuGbZfKciWKeS9y2Y1T4937UHd1E42LbAJNAvo4mTJNcN2R6vkg5Uu3Echw9",
  "key22": "2RtLNSLCZiwkKFPiVYdpJya7gfBMPHcHEbdUmhYzyKHiv5GPnxtXEhpf72JumHNWUn6EAftFr5g5aZDTkhfWS7V5",
  "key23": "2McdWsAeGdjK7Ptmudhnwr6GGBbjsyaXEf34RBHGCWxf3KXyNpA2YUn8g6TaunuhFGmXu1QFisYUHM4cKcC5KVCN",
  "key24": "2cN3ALXZpjpt7HQMejYSJ2EhY87TytxsX3sspzRYFwJKDyMKZ5B7nibMBd5BoyV7BpkxfBed2MQ6SZn5FGTv8Uko",
  "key25": "dVFFgcTvswU3SxDXsTkZqEXhauFKeXtjyqxP1mSX8cVKTzp1Y5HWAbZp23BJXhtYgGCbUdXp6DqA5uAG7LraKvP",
  "key26": "xLLVXGNFyoQ82QkoTLa3oxRkrdGuVr2F4izhE7MjxKW6Y6zqnYuS2VR3u2CdK41F6AHMEkXjcTk4Hu7SoYGykg2",
  "key27": "kPwfM3UALEBDPZVwZWDoDMfp1bXaSP1JemnTrHC2SeNjrxfR4xVPMVopzwHzTT8PXT1rwcoxAQas5zpMM6MAPYs",
  "key28": "3ntCEVHKHYtPagVxqhbaJtJQfLTjRDZAaJwqUPf1Ff3ScgXAEQaTbNgh2UFJBUzCunCqkdvUqxB9acyYHGqD2XkF",
  "key29": "5rcrSzyMFekwdQmNy8tSFPaHY35wWn3a3k6jHWdZgXMJmhrTa3HzqAVidoyTxypwq9bYtzrPeKJ1HFNWjZVSk9j1",
  "key30": "xSvw4nmjSfgmuqbapMyJMG4d46yE2n7SizkGfUaBVB4N5qDAHdopF415zRYhdkG3CiUTVTZG4LL5LhejHjGjpBw",
  "key31": "4genvfrknZpeN3RgVKyknzFpX15M1ssdM2VUsoNZbKxh4N67nbHmfbbEdWmPkYVohA6pwmvPTjdRNGkVR8gs11pp",
  "key32": "3KcxKG7bE2ADGyowLBd1FAy5dAGqeCDnNXLw9ZXXjWR4RwTkFmQjzmWevgN1vgRUGvuyLdCYqv5ziCYr5QqM6wC",
  "key33": "3AcJe1w4L2Sms2HdiJ5EX7MRcUhcGLPHHetjhzQPxN4FT9nyD1ov4TLZSzAeDKfSZP85cqShAv6Q6MmLQV7z68MY",
  "key34": "4kwjtJctavczRn7s5ohay6oLEZn1R34yKWUmuXnTnigJhGrofSDfWnXidFTsrq94BEhYoWD13WXVXTCNDNttPMJw",
  "key35": "4Zg76mNq5JN3dz2rG8VGAivFa6Pprcef3eAGT8XC34aSymJ7uZa4XWAoZc19KKw8AYUDfDdqq79gpsWRm8KDokwe",
  "key36": "4f5JrGGCgwkme2wtdoN4b3sw7keTKF2Vh7tmaVRBysBZYE1Sa99wFsV8fttHozQDnyrPRHA7GgdgCKEA4Sa5r9BF",
  "key37": "4f4hKPZghKAQyCen7jHNm95EjqqdQ6tUDXW4G6Euf4iJrCPSaSgd7A5ayUjwNYRC7hbmepiUfTErca1vEpsKDCuZ",
  "key38": "eRvuzouRXTqMvfy73pGoQVF4GXf6UQ8c5VkGYmniV19ud7mbrXgSqqkcCpndscFEyegMwKsvKuYFYtzTeKcug7V",
  "key39": "5qgqdpn7Yzt8vGmh1YrnA6x354MRvCrdn5YPBHTj7f8PVfpmZcKh2kKaMbxcetv7hoaF8CaZ1nRwu24jfsbTdyBi",
  "key40": "4uSGBwxxcWFp6RThkpxVjHxpLMFUYuwQpjCXxoQV867vBtevPJkN2rxegeUEigAxBQ4N9zDsSmUqT3adnEHz5934",
  "key41": "51vtxjsqZ8qdjZYt2AGJ1B157weR5eiF4Tm11cFRjFLZ8LGuDFUCkLVUDQHFdWSmc1imH74nS416WiWQCmrmNaGK",
  "key42": "4o2MN3VtUt8C7W3NAoDBqx2SeNRz3bUPMseFjeY54Ri8KHUqTWcTLkdHpDDSb9mWKSMxxyUwbXph9R5Ax9mKVzgd",
  "key43": "3bFt83dnPb38dcwhZvF1zrCUSGosN7YXaiyzeEWEGAsm6zMcBPpfnuYrU6NVSazXVaAE7z4EPzfdPMLRikUke1PW"
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
