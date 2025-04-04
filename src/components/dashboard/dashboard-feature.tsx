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
    "3xj1M4LtxvHTdjHNPhMTx6yDU6xFJ7kb1vzkx2vwfgppirdQK1eZZ8cz3XWKAKaEFV6eDHFwvH1kMEfzLqbb1Rq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "REgGXKXwZsbPUtxkbadMXuaUJZMZAjauncNRkXMXiQYAaVvuwMTPephGeqoF18UvFzU8PGwyyjnq3928kzrDwNW",
  "key1": "4qJairVpzQtyNaG3yV5vJeB4AyGVZ7Ujz2o9pVUJdD4otoYfDryS7arrE1dvzF891dtGfUymNMRAGxkCJUfqRVf4",
  "key2": "4cCRrEcPrseaTzt7rVWAyamzGirHR3YWENsgm5xgWJcREGarHHkJbgoZGsSFeiQGbAAWWvtypR7oEQJSkGsGeVPo",
  "key3": "26Ct4D1LmfRoq1Kn3JMxwfrWKA8KQ9XxJchmvd8Sq2LKhRatoFHeJkDbBS8h5cS4pFjHfU7qit68BBZoc2thTPzc",
  "key4": "33ZLUTCprE3ykveW3Jxonbxp4JkCTUS2owwB52PiguaaBxZ4x337nYrCk3sjYGP1AFWifkSk1X3ksSY7nBzHSP7T",
  "key5": "3E8smgx6yypq54gefcyY3pNXSqQCFJPiG1p5AHBxNebadSbGNHaydSQoPC6EFMGP3P5F58wororNw25SrmSGfgj9",
  "key6": "5pQh1w4H5Wkm46jeSAgH7aRrMv8TCen9zwJt2tQ1yTBVdCQhWb9S58TFwmhn59J2THpmk9yHNHRo71ZDXY4URBtu",
  "key7": "2M51A2AYbtQCajUziaPYk7Nm1a7e8W66uFFsHVGrtxFxp3vaexsjLHdKimnNMkdu6Atsgzf5DPFLn9qGumSfKTq4",
  "key8": "51Rj19aXUMZXprRRtBmu9sXpMnpdMa54JkMWfSQonXEJwHDTvvdab6ajSGVCygAX3AR9PXtdaYWEv3U1paYTytV3",
  "key9": "4ZyiKYEMdSsdQXwBaehqoVVgBqyGsXBWeHSRt8qiMNa8ZBr2MWeGeEiYPXedpxCm5FfD2pUehjTGkWnpCwJYBfd4",
  "key10": "5gVAfc7kkpWBJhejVEHA6xV5kzYQvsQtPjZNPX4oR62zUxGL8T8paKHRQS7kYTWZzmAnbW4jJWCPN8RgVa9okFn3",
  "key11": "3q3aWeYbxUvTqHXCRUSr5GboLqkERTiA7y4kkiLc3KWjsPWTW42x6XFB6xsMBYJmSsSdepCmnWQwvyBWrid8eDAL",
  "key12": "4Ys9LDGJJ81n2MwFiEfw8MfM6d6DMC7hvbNpKu5X4MZJBoF9wYHJQ3QsBuVcSgjDgeuSZFFMrG3PSj69XDvuJ6Am",
  "key13": "2oA8SzrkMxVHDKQkEH6C1VgMT9RDBhiE6CpkDdsKkEaZmG5SMKVkUvLWdAFE1yDgWCSpVrsZ7Cwn535LE6QXKXi",
  "key14": "2nfzQnR5h1BA28osH7dqy6MHyGxpTeU5P1GgNmY8CjJMdyrxDwP561RTPsvCBLZ2yEd5zQ1Yp7p8Qu7v9hzt4ToG",
  "key15": "gxMdh7goFM9ZhjALY9ibKo1RbeckAww76Qcw9Ma76U3Qnni1iTFWfeYC9Athso4mWeihfUE4L5RH4aPi9zEaypf",
  "key16": "4AWex5yemcJEQH1nUWP3Lw2J9jniGfSqo1t9SiegE4DYtzCQkNEyriRHBPgBNwCD2RC2UTF9RnUZ1urtAUhBtRDL",
  "key17": "4aSfAu7K7Dt7orKr2oRdMTgGbiSuWfPysh3eKoY85sckcZR7hbu7ShHVdetg6SXfEJwNspiyG3x4uDtEGst2so1c",
  "key18": "3oW9ux7jJpkXKDSUQnSkuqXuhKxKtCzWdjXvgZe2PK859Gw7A8PfzNrYQveNskGd9yRzXNvZX35RvjeBVN4tkwK9",
  "key19": "56xiwwb3ZKmo53vaLoQA347PZAnGzNg9PnAKYjNVoBsX82YimW65z5aRv7zQ4XHEa3CS8JiWEzWiyAAYu6cLoq6c",
  "key20": "6txxdwpYXsUQL3TybngzKZPiZiytAvuSxqy4ZQhGrb8Ky4b4Db6zXP3UYyW5WxGNcUBb6fXcNWGagmV6cpqsSF9",
  "key21": "2UbG3tHZQyCdb3YPhE8tiT5sQXgAGXGCABq24NKXtGaqaYiPBSKhid6Uzbr5oARLNSoW6X7VHigNd6EY71gucL4L",
  "key22": "KqRgiEF8bZCoFwZqc4KpgENupuD1YPtnw99wDE2ML3A8ZGVkgoci8KkgMThMzgdqkQPXg9P23uYxMBbpsTgH1cU",
  "key23": "3ZxXAgVXCKuL1QWtCs5q8QmmzsWAaBLh7bqWibPscx5Vj58GPAYDxwUVpqMHBZ7K4HM1VBHF5cpKCg1YowBtVxdV",
  "key24": "hPPvbHMAnGKkY6VgLzucBc6EJRbTssvf92AeSzZD17pi4s1T6sxbDreKQKGfbicJsxvT31VLy2zxDP7ay6dd5yx",
  "key25": "4qQ4M2HExDxWdcMACm8PgKtAPDDQm8kRFz4SAzizS8dUNf52o1W1puxj185ssycBuS4mCQd65yFtFiTi8m5rea5P",
  "key26": "5bip2tSgi7JMDVji9TBvWPS5Zh7iH4uckEmxnuyNvueizDKsazUcSrJ9yV4rsmSLf5xwk1fp8UvQ163tsJiRknM5",
  "key27": "4oEgqagEDdoFCpegQKA7N9qQ1FcYXNjT72Zvyb1y7UJCGJwWbA8eLt89pekU8D1E9UW1sUEoqxXqoqykEgaioEQm",
  "key28": "5dmPxTpN5JmNpiCRWrUpwVKtqdzGs9nr44fsUT22XieKxz2bJNHBZSxotkVp4x5mLsoQcdbwbLpy9PBHXRRXjux1",
  "key29": "vop1pRNUsswB6cEyFkAcTgqexudeBQKDn8raDf9sUyZT82fSrrVWisQ16PVCvKS132TxForuj7BPqxpn9CbEHav",
  "key30": "27Wp4BvicqGRELsJDUoxrcjc15mZLmv2nLwPGPbfeLAWvTSz8eCsa27AnkmuFMpBqdn4xE9uELja3v85sgrCGjuF",
  "key31": "5ntidZ2YnGiECAkNRYJhsJdFcoghtjEic2WDd71WdX5cpMLqHsek2A7cZPsSEhaV3jckRsSNsHutZGqjrybwNdGi",
  "key32": "4XYZxKeU7hCpqGEuGiX5TdGcs1vFbAqVJGW6hHG2zfgdexG5KumuBEiwhpL28zYcbSaxYH6ByfoRYot65fPCiWrE",
  "key33": "2zozjFDPymzF6s9QspwMpDkRJmx8rj5kd7RZR9dDuwNw7Dj1FYzTYMLDN6inEePAegwYqeubtx4FZYgoy7LrDN55",
  "key34": "3rQW9gMMwpyPnEEckL8Ucz7w6rtaW3Bk1rjmewqETMZ16CnNvnSBFvTjhGN8LhZwookhSfxDcVrWpQRcqoZJECEk",
  "key35": "44psPjdduBQyXm3kraarSoTGPHmaRH5a643b2GzLjiGzKqQ8aiAuk5cJsR5tUz2N32NaMZHEhgdyqT1nTNLvJwf3",
  "key36": "5AQWTDM1JMCQXRzRH2SvJ7j5RiZddt5dFd17Exku2eFo1DjdhYyJ7poJrhYLVLez9o2T2fjVf4Dh9agbd8ULjQX3",
  "key37": "53oMXMn1TEu2mcA75CCAAjdaGi5dx1TV2QD7d7MnWHtgAPkqF7NbB7785Ym3WHvLf27P2VTfbNm79HbaJfsK2Ntb",
  "key38": "5Bwym5ND7mNT65WviuiuPmbxkXqvVMwAw2kzs7B7LcK8NDgrCekvoDoZgZxPRpmcafoZi3eyVhEswPVPufu8JKCu",
  "key39": "24Ehbv2rKV5AHu1BedJVFMehjf6JupFggCtRYikYNwP8RiiEsHtkvX3n5PZh5SMvUtMhwPM1aZvnYmRm7B5E4cTp",
  "key40": "9gAm3HvFcDVr2D7XAhfi5iWmhWJmohqVta2mcK2RjnbdmXh99WPmFNAgWP86isVvMoaYdDWb3nixUJ3VhjgJSun",
  "key41": "4gK7WrXBiF7yRdJvJKC19RsGTWzCjaVGYTWCdTeT1XHXZpeTrvroQZTgMvvZwwsNxrJkG7q9kgx2Lmi8zy13xSME",
  "key42": "2HWMLYG1H9actkJ47zioS9SExcbx3TWQ7ZVmHHCRLMJ66RmKz8kk4pg21tNLqfRkhPNZUmhBZsP5ahvnRjFPHqZN"
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
