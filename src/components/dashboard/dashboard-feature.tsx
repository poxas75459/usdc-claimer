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
    "64CP8oxTeB48TUKKoU6NumogzBXoB29exyR98mhVo73vwUBcCbBfzevv3LwGNfvicBK7fTDduALTKGYxgz2wdvMQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CFQGXWGioFGv7EUQgsJzWQtRgFUH19D9gV2qLuyXD6ekz6mPzP9KVZJc4TimHmyJpCpdeon2r6UJydYH6mpqqU6",
  "key1": "4FiZhKcyeEQmNDmxgg6dftDQmXTZTrosLhsfthX2heAa9fRzXEoqbGjbHB4A6NBgjCvLVCdaZeBZPfBhS6a3v7ow",
  "key2": "3PivYvzTeSxa8R46ioA4NWPnWZwiJXcDnfqQEAwrHkU1ZeDRHS2qnatdyQHqK72NZ78GF9VK4X3qinDVUs1CRBmN",
  "key3": "5XkSPSmcwYZm96qnUHnusSGc73tuJKPG4bhK7rU1oNkzRRw4RHgcfJyigJc7p5k9QwnVffMJDFMy9f26dgkcqwzN",
  "key4": "Ppe8mNzRo9uCB1fZASNTbdZMNVb42ExLf5c6RT18z1DGyqwDkU9trtQrYpPFjjb7ARcRBV4hyz74DKvWiUqNVtr",
  "key5": "3WfjtqcBLZRbpdn7G3pkcmnGmpQAJxkejVbRexgS1UfDbXqinzfxNdyPnsp92shRxunLi97TQmmL8u7vAEDpyaeH",
  "key6": "5pxP3dkSGnssKSjb2EpmBRFZNkQPsVknRCmwm7Q9ashLXdsRwBnkqxJpWNNm93gWEN8vjZKTpmDxCT9RsTqz6dJn",
  "key7": "2L3Yp7Vhjx6LKr62KkgJ61pbRLNJAy6FeY8yTuPRKwkkBqG68ysJvaQi12HLm1D7iBr6FSGku3zPn6qgQkZDQY9f",
  "key8": "3WTQcVhgxianQi5kpZkoWcdPp1KU6i2bzRsYbx9KRBp1NV2hvFmSxwQ7fkHgEMrdrTRbT4A3g4wA3AZGoe8WDutb",
  "key9": "5pgjxvw8JjMJRbTZfyvbCuR4nEcTmgoFA3NNcGrWGnuXNpo4TXCrtER4jzAuqFHbr8b2zQuGSS1WXaoMxyKSpKYR",
  "key10": "4xxXTRbCsLZfBVMLe7FMtHxN2DYKZdsoRAqpgePbnQLYWko2GdfC9qmTTza2n5qwFb2RJ4Sowe2STCXJDXnyj2ik",
  "key11": "4nkreFXS6HX4c59Hq6TTCTzMXTfLP9Vrb9PEddPnehW6sRkeKhagfiofrcAF2edNE496rL4J8NNTjvAz2JcuGcj5",
  "key12": "5GW6xcbeSjYaZAEuzokTQt9o21K3JR7Twj7gZJ81EfRcCF5WbExprtzQ2k7FsqHdPkuys5FeF9mD5XRUh7gTEUR4",
  "key13": "2vP5fJ6NXdWgZ5rtRF3L7fDuLbZyA1L3ynGQh6sbSKiXaE8WFYYeTUxZ74s9Smm6TUBp9USiL7pXtqXsUuwyyqdd",
  "key14": "5m7bU75Zt1jA7HLWvDkeQajqhMCGeq48EAKNHkPf3sARa97PhmpACwLFfxMMn3NmGeLusYUpc9d8MXT4LHWAR81Y",
  "key15": "5bXKr4ZzwcFvmPnAPkmMVRvBB6LBZT4Czvgo6ttoTfCTxZFL2yqQjoFBTLAtcDtxNLpm2mcqifbej6MzfFVWwZHh",
  "key16": "2A5YGyYBD8LmErbbEsY89hcyGinUPCXNZuPZaTjDVjQNueReYP7NaxYFdygQH4ycy61rTEahq1PDVQbUUZnfLTwQ",
  "key17": "2YnWSFwCZ3ZuBbXnYAvZzFzjJyBqnnpcT1wD755zBRPjDtni36d1fmQ7RuVbHFavuaUz7HbX5EaA84RcP6x2xkne",
  "key18": "4GeQZAvSYVR65ANcHSB6kPygXN2JoekJb9fq3xfCaUr5tmPMMbe5QvnoisVmYhjwZPibXFLuMrACMHyyHAfXUkPV",
  "key19": "4sKc7Zrgc1NYbL8m7Nd5KrbLoajvpKpMwQhGvau6ZKFjUssuxzyqSn8ivZF62GY8NP7brefNg6rm4uNh8KyDC8Ku",
  "key20": "32BPYrviPscYG4rqoKuRhr8ew1H2yzYC5AsH1gJhdTaWydk7xWJy2SgTQfsRiFWeeNvPphhXhcUphKQqLFVLogd7",
  "key21": "3HHwMHouvJsv9d5gWgfUm4LxZyrEiQ6xoTeVB39zn69tS1J36Qke92mc6s5fSKiyJi7grZ3qwfHxXWFGNMboH3gQ",
  "key22": "x1KHRLS2fuFstgVQnoP2W3Cojr9oUhRRuPSyFPxV6U4pS8GGFDAfjBm9jmXkqbtHMmcL6Sbhzbq3D1npQn7siqx",
  "key23": "3fQwAmf9CY2BKedFAFz7s2Hggx7FuLj389zJizGpiPuxrFvmNXeufnby6W13KWnFMreSPDh1LQEv7vZjpyZKQRWK",
  "key24": "2MhNq9FRYWyP5ZVnT5hTSZkiaLSwHuBKyvDm2xdFD8aSxHrMN27EwJXu4UVEatTGWYPhS7n2B56EpcHvpxZNfw4i",
  "key25": "4UrjJ4gdiKVNKdkDDAK49o8M41HHzVDDLe5V34YwAmhaEH58xHU6PVVYCGHhGRp8KRyymumAFZqcmQra5KJbrSj",
  "key26": "3vEf6LzzES1nmDyq42nxWdXPyu2sU5MaSHMu6YYXSso5AmMoKxnCyLzV7JMQ8oBCJhzkQrXFh9NjRNro9tyfehV9",
  "key27": "2dNHruneTgt6Kcxqk9J6nSFg9nPYQoQbW9VezgbTbzpH2rBsjtNPKdAUcD9bvQRNe3cMT8VwNg5QzAZA2BQokz9A",
  "key28": "423YKq4Z719xM69MyotWGGJbfKrPVRhS1rfUFePe5BuStnvgP3HC5bSigW6Bc5HvCJn81tKUEe6FZn9LjbwkAZog",
  "key29": "5YgQYDf9H9WjCEnCbHwFemUkjzrsUZ4KUZpyfHRgPUVuaeNrpjxS4DqNyV3YghyxpFxE4iQD4C4jAgHKU2B7bw1Z",
  "key30": "4tTZGYSk1yrbn8A8YYwADvZ9Up7g4r5AwVB2578Nb5Hd4mddrN2n5yfnYv74owNw3RsyGQWZCSQQ2ARgFYUjtyoZ",
  "key31": "qqwBksEoCWPmvgwwtRQnnQTKGFy2APHM3RQLD9rxRxHyrxK7hRfw75HVk8Ltzp4wUxvEbeCB8exiyNY4KzXgV4A",
  "key32": "5zsctnMPmuaN4t2gi9TjyDnvuWMdJBNbhe5bSCGqHRBkwBN42MH1sv1VG2qhQta8uPSEct3pEtRgATKk83gKeeEe",
  "key33": "c9LVrHMBq3jumSXykyXo2NZHpkjZCMZW2g4NQTLsozof4faSy3Mu5h15NVbog7mh1F1iBXjjTqNkMsV1ocvtLgV",
  "key34": "34395KUY95AY1WVxfMsvCFd9Uae1kR1Cf3xtBZKsgUTEyRjwnp2RLR2E1H7v26BKCu9KtaSR8YZFLMsUihUMik8N",
  "key35": "5WpbdRWPFHJ7TtD5Zy9BpwmMr2v9Vsig5jChvn5YS2MtGtAqv3jHNKhGt2nWhDtvUuUqDRFRRTUoLZJtUvYRZA3A",
  "key36": "3NhQACR6EwFTUByG5bB6zGBsJF4e4aYR1qwoLfYFYCmbEmHNVc21pob8H4rtkT2UHZQeN6j6UWLgjuQHhsk9sone",
  "key37": "3jPznwUQNbhTuye1ofdXdK4mDy6y5BFeJESkapGr18jKCUfLNtG4T3wf3D8Lcrdyifpfpj5sHGArkfL9UupBxUnJ",
  "key38": "3obwVdA93oRZiRmKC6GtCKC16UxdBbCdKxHkdcBmL7DdRWeLdCDQckeeWWqy24kDyTviicBQ7zV6w7fRadMMdkvi",
  "key39": "ou43vi69bwEcAvnSv1W7gLWYa7qayfyhZQQRahVUgkKQu14jWzVEhoNd4apvuqb2kD6garGZYVshXWbUcwjqXjT",
  "key40": "3d82Rpdothxpo3DDnpanCe69WHUKfNgz5SiaBQ99dBpCwtwWyCGp3kitGYXHet6DZsGVEaBMThdrwdGyV4WSnfDA",
  "key41": "4DsHr75Mc3XsTJWMza8ktttAWe17E1GDYXjhxcYwZWnjnn1MbMwQ6EvinhCeosi5kqk7N1fAC2EHsquf2P6siq2q",
  "key42": "2DKjDJzS3bhRTeE8zmRFYuDKG8teAEefJHxCRJM2FmwTNNd9JwMbyNv7SAdoz2mZCsDJFtU5s4c3cXA9gdtsRXWr"
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
