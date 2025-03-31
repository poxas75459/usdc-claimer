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
    "An7gigxDpBwP39o7dA8659RThRbJbqVMCPh3T7qWGzFp2jDainPvHGofSUDFCJYZToh5258vBaVttD3PfHCLeGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E68FGWyeL2aTiDJ5Y1UpeoVqJV1irw9U9maokZByMm4bDqyF4RQJw3tvkFT2qBz4uQVV9UKxXkqDN8VCHtMpLFE",
  "key1": "4Q6iCmahE2FJa4bKAe3KcGi4C8KEfGMs4HV2qasa9SqMXgZd2ULYfjSZNfeqbvhGTHFrnTTJzxpNvZfNUkUWULXQ",
  "key2": "UvVWW71cvb4aM13CBNTQ6QyA4HrimRAz3BDozazWC1mmw57GuByaAxGZAJPTJ9mS7zZXFHV1BxHCspyZmmR4jKq",
  "key3": "5efsjzSxdgrGWAN5965jRQwcHGGwmP84hhYsGzya4FaBPBJx878xJeYMa4Aw8vbjZtyD7MndqCxvu7CRepXeJF9E",
  "key4": "8r4fwH1mFWA8WvJaSfKdfgGbyX5XrPXHpaCj4oW31BqBEhDHxewJmCntgB6X1mMyV5goAuQPy7WYWZHfcofcqP9",
  "key5": "3N3u5gN3q9EgPJTz58h4BCTAXh8VaEeY5v7EGP9Si7ZfwrdCg9bYC89pZNmpiMj7XAVcpQRSFPZP92joFTy7TV9Q",
  "key6": "67ap2rPBZHkyCfottikW3MW8Evk5pCqJnwUfZ2uqxRfaePLWC7Lm8ZRGiAJY2Vk2zDxC7G2kRxPSg6GY4e3NqXvw",
  "key7": "22LYnJivqmLxAof53yDPCGsBKWHXUShMi78JauBMBhVWjXTxVE2En8QzTKAgkkbtNriw3KXiyUrVA8ooXPbHGogn",
  "key8": "FVF94LL3g6ynAGx5BDdvem7v9fShjYs5cYU24nxfMi7o1Dc7uwznxqx12xDjpiw6Uh6t59bXnWm76RpK5x9UAZN",
  "key9": "38rjhKzkYA7P3aRQmexLXe7xaMbRLgzj4E9pUJ9RQRJRG7e3xB5ovCLgqRZ1WFvxtxvRU8CBVMd9WDVjHhSfTyWo",
  "key10": "3t1qU1N2VViUmgNp9KJ1Y32sXvC9XsCno7vnBdPZT3xvpNt7XyHbcYJ2S4PUZrAbitWnsgsSrR2twSNdoL38Cnok",
  "key11": "3m1GACoEA1vXxXGTsg4ntK6U3qTd839qYM4ogJHQkRJosFqtE1164Saq3RcZTgQWudPTrnwnWF4mFkceqJn3rWBa",
  "key12": "4695Z4EYPZBupVCdo1BtWwytcjiihT5Abmsx7Cszkc4tpqZLJE76n3uzM22H8FCi2uvGkZLnBoVvdTScCSFUrVA6",
  "key13": "36Gtp6XEtDxSm69KtKu1csmhwuig1Yd4SJtwLb29z7ZT1q9M9tuCe1psw7vRQnX7mkWR15Z7QsevJU28MpYv2ZMK",
  "key14": "4GpsZUo2uDAHeGX5L5MKeUBCEJeTuXqw5UDBVYYmnuXus6YG3MdYiopv7kNAqmkBqYcvevFC69CL7H3X4Q7zVyU4",
  "key15": "V73TPSEgXwWcZbJJoq9XojmjZi12Tj3Ym1ZJfZLFGs7AwKQApMH9WisgA3oiDeGGKXEKsvgKjvVEjfDh2CNxYKm",
  "key16": "5qSo3hU5WXyVq7xanG5wWXzXmfAcJYU5f4KZ54mXFq3piij4NWXiP7e1TH7wyS4udtEh52mEMSMb1UPZFfJSWfkG",
  "key17": "2xStCrioUbhKgzd8rhMHVGicLqS1mbYpZ4sCJe6Ye9iBaEHGx8pNKrogPSP33NoV4Kzu1zvMq1uuYmyPmqxDdB5M",
  "key18": "3WeF9XepMJtpy1VhkKUQzFKN2DmXA8ReFx962169LMTP8p4QYrvieoECE7PvN2i738PxU14RQ7F8MExPpdBWDWv8",
  "key19": "yvSKKBvKakg1ZHhMJUFMvHry16LPdCyY3Zuz71t9HG92kYfDxmsE739SSFfXMKhMXKZPcGbPz8twuTxZPTViYsy",
  "key20": "3WfZVvaDqjn6Cu2mEZPeAjiRXhpQkqJLtPHfZn2bCAJ8yULdHyjNsSLA4e4m4G8CCkeUdfrfUx1sW5Qvx142bSQy",
  "key21": "2piQi1W8N1nt2iqnURNsuksbmmJdPgPazoPSRNwDxrYZEg5JRKeiEXaHRrGNeGhhDt2qtfDTyLnTBKt3QnVfAZE",
  "key22": "5NzXN1geEJ839yyPcP4cmAQRS5d1ZpqS9F7BtLWm3M4uuj7hL9TwK7SPCV84ozkt27W3aeFXBWZhg7e6Ee7mATws",
  "key23": "5sEffMYYn9yp2ASEPDLT22evj2iGBpbEMXhyT8xoJVQppSVi7HMDphrk5TSA1hFMN4gMypqNZBYwfGkPbTp2DxYD",
  "key24": "3nPsM3mPY4HGtz2HamQUxWz6DZnpAc3g5Hrfu14Jwp2VBFa8WcmJPVJoX33CjEkoUwFozoMHV5WgmD32V8w5UTTx",
  "key25": "4cRVn6gX4MdB5rChkh2eDyY55RYzgWHz3MaVfZgzk7YAutoekiMc1s2REW3Bab7cbVRqVuXvTmXmMNm1i11XJsgy",
  "key26": "35oLiEDC1gSdemdiquj6mj4ZqM4tphkxS83EWvwdHuZym2xjzQvLzhq6SBB1DudSJ85YxCNYw9axJunjTUcBGqEH",
  "key27": "H2u5NBCWPkZXmBTmhHvBh6ofarQ8wFhePBba9ruspRaLrQN2N1tTJdNkPbaiNur5cfMgtvr5rnHhCRGqzKhSron",
  "key28": "38BpiTVsnRpsB5fELzzttZzBtHiPqBZrBMVsrbJT7TnK3vbccUMQgUUq6CuCEH6mVjaySBG6DmDzCuQzqWmPeAU1",
  "key29": "3PgwEewxTBooKmAameCUWjtGRnLnuPJykUC29utPphcWM8YMfiT1sV6RziBtRqSxrij1SYwKsDW5CfK5VM3W4pHV",
  "key30": "jQqdiUpee5BdxGYwfY5gxoLNYutpUosp8Dgvx3zHgoz8kgMndZz1pZb8jY4AVmNBx7a38DbGpL5GgQshgRdv7TE",
  "key31": "KXGBVhLb9DhcjYjmeyRxX19trDCLe9ASJ3SNczjmyUNepMGuepTpcosrpB6T59gvnQ68sqmRH5tawNfBdFX9oJR",
  "key32": "o4iKoj5Vjt1Xy6QgcBBPoKZyLfufzuJScouYrNRXqfexR99NZzCkcbdR3doHBiwzB4HYpEjkqZzWCMJcYZAC7Gn",
  "key33": "2vabdDz84B5V6x3Zd9L3sxdV1ye1UMCASWGSLn73jKBvVDqMeoh2BaEbQRvyb6X5hKWvgEeNHY48rn6cHnGu3NGy",
  "key34": "4SvERRp1JsdbFR4spGcjCQ66WEqRTejZaWzeTQYo11VQag82sZUKmuCHo4TG14djaqu3kCvJixaRnyCAiEVt3cW1",
  "key35": "2iwPXHakg24pmS8Qcrgxe4Ls6oiKhfuTE4UFusxgieL4FuLpCCKn7yGzEZ7cZrCuFBnyjBvKhaWU6UKgFJY7gYnZ",
  "key36": "vikKsKYRhGusesEnrwDATC9jExeBtgvQjGF5syNkjHgmFPsRicDpoq8kBJDnEPD1MEFXNgodKButAWD9RjRpybk",
  "key37": "5RmxhreHuDiBX7g8yzF62krigwvvJJBs6gfi43Rqb3C4o6vcZDdvbGVU7Yq6DLivzx7oAsyrwMNzFxbB2shrqwi",
  "key38": "31Vy2hUcDVwYRn2CbxkFd4SCcoPYuFT84Cn5p98E967bp6i3r1ZFEyVYxUEo1MWj9NmT9z4aGTH8gSRvsLELSH1Q",
  "key39": "HpnZqBWoaVaKdFLRZbaXDgfYn7CFJN28oAq9wHzByCrLaq74USdrE4pqy7V6tjvnfXcfqohUJjS2Q8sYcjJkHKF",
  "key40": "5dZedVtdFVjT3rhN2RJ1KsGPD62EfEBwJahBTeaDq8Ej7xRrqW8g731WRofYDkbmcQxnEEeoYWFFJUfnaTNWY7XF",
  "key41": "3ij1MfomTY5mrf4N7ePPNTCSeAuLL2nzT5fdKPafVZWge3G1dA3k1oot7wmcRjzhbtSJULnZDV5jDmWeGAozB3iz",
  "key42": "5hwRhy45CdB5PgkGGFWyDmdMgYANZEdEGKcWWhPumDnKDn1tP5f984unFdXxsLcQTjxJgRA6e9iyaKFegX6N9c8y",
  "key43": "3deYBWbs6zAgqtjNXwJfXPA62jsuEz73Ueu6oQSjDHJxUju8dF9qhwT99Y7HU4EeP8i3qHxDybiw8pkM1QeUD1m5",
  "key44": "4QvWBSGwemTr2aWnXftpMm2uiPEdKiqBvoJJ5GXxPAsm8ziV3XzMd3u81tBwg4HLYLzL32rHZadAhgwCQuV3MRpT",
  "key45": "4ddxkYDAam5bAvkBr5P51v5tgyW2fkqQd5MXed1NfCWGGcEKB6RhkDoeiJzwJ9weo2eVHdeddoeieSTa1w1T8uJW",
  "key46": "4MJhhQGnPX9GtGFUuZr3B6aUySQRhwD42hLjnezejxvCPbkUKUARM3qGju4cysBJ5fsyop4VTtMuyho28BNhi5ed",
  "key47": "39VBvRxvQnZyo5noFEyw9QJ9qZwxgBmsGaHUZJKA7G31nxNFC3xZ6r4FkNiQT2EH8tYXZQY9EyWgqNpxtfNeKYGT"
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
