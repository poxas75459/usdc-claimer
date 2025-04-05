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
    "5Q6J1GSqvT1XQYcmxCtb9DYSYiTEuWAAbGXMxe8Z776P9vpz1D5WtrnAURdZyifMBNnPQGvaQsSGKWLadCZELS2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kBVXRmm5TMrBekRiKCUXvtCxM5EdaUiipkBo3TZx2sD65FfGUZoang2Gjgic6pStTiEAq4SUE9NDsFEHcLW7ds2",
  "key1": "5DpL5qRE1FphVU8Ay4F4pHUYTuVEx7FtEXgWbu4Po5aNCqBDAmvDUmFUmnnmZ2DFnwdvxMCvLDkJt9DPiTRRumov",
  "key2": "3j9qb3RuVW9LsXJihAQEh3a9WySRCzNHDvMyCNGbYMVaugAJPUtawmkE2znzwF82dbeX62nx6H6y22Bz8fv5cYSn",
  "key3": "3yGFW3ZJAMRaD3D1DXbeUTddNUC9R8ggUctmMryCG4RAurAHxDko2VuMDQUeNi5YM5DNEGVHqpuhFU3JgCxgU5iZ",
  "key4": "5Pv8AEfXhpqFTied1UwfBa19TRjxtSmhPxkGheT3BU2mMv54VNhjho8FSTV9ybbZV6LhLVEtv1Nh7YnEnrUbULWR",
  "key5": "3k7DNUuaN6LZjjHfCtejW5TJceLos5isZzv52CfE2yooirdjR9vGMcpPyUperdimS8FFG18jcBtDq2uBdjydeeZX",
  "key6": "4LtyavPM48Yo1gvd4kpFnS5eJfAHgjSfX2ex9GXj4yahSuu2ynF1LPyFBKsmH1ehKHwrVJKCnf8TKwxUPkuycy8Y",
  "key7": "YaeAjqYizVD14JuQohhmkPy4vc1aRa286eM2C94qAiSjZKSho9ptijxjTBqmtfMLYDRV8UfEKgYSoPBNiG421vS",
  "key8": "2mT1XnRAXAonvRjFfpHFwU9R35HkPueAKHGWzZ4XMfEp59sX9KMTFLjn8of9DCuDUcwF2LwW38u1aJvR6XQDvRC4",
  "key9": "o9NbmtpDqLhEuBqHbTmZYLTJWbJRuZ9j3ZZYnK9ZWNiEeayjhNUDxQJpZkr6MLLxgxy17YDMpSjSNdmGWCqecsW",
  "key10": "5PvWZijrPTmS8uSxZY7Vpiu5RZXTSBV1S3R7ZrLaS65oET1Dw8BpbWPwP8wcTZktirY1rFiSLFNX8djHZKDnp81K",
  "key11": "mQSS5nyuyQqfTZZr1PpiKut6PbJp8xytnjW47UjtZfVxEW4daomLNT9VaCbZqksGVnYN3NLQCD6vFnYrUoXed4r",
  "key12": "ngf4ahqANXZNdcrd1GoWFGW3ju3qyb9o1tYRLx91TbsgHqyhdowsUa557ZYbAz1fna64CFkJAwREKeMkdERtL5a",
  "key13": "3cbMwtWqzb3YRk8tm8qvwNq1iYZJtkkJEZGpiomzsu1mTihL2nsbxN5qUsGrnP4QcktyxdQiFpUoRed5XZHpC26y",
  "key14": "UFewkaTUN1QhqAMiVDTDdg2DVdmYQ62QBpY2aMzJn8J8J7fgpVCU8pydToEkayD6kANPpwYiuc76ptf3eepkids",
  "key15": "2DnYPj7weFu6qSfzkigkGkiSQ29bs5WDwm1GVYbkiNn1vLToiXkehoQJaN6Hu5M2PY7X8RtA3fA8EyVq4whmmPpH",
  "key16": "4iDAnLpmChC11cuAzruTF7ZeQEDFffzcYk5w8nCaRSMUvrBxH4RhdttPYCL7MydujwQPTZBvdYgcVwj3238ny5UB",
  "key17": "2VboRw41dvQw3Rmrb36nrPRKtt9BjmBqkaNLb5SMqAk8Dp1PsNTeK5XSEBrNeh7HEzNPaGEMPj25iTPsLiwfcH1z",
  "key18": "525hmTrLcPXgKkvSdMToQWpahcHfC1kKwm1UexAibjBUd9P7rzqCjjwTBgnEUfFrZEERkhMdyjvTFBi3W1nZxZdH",
  "key19": "hNGsLrobPVnUUTKcjSzoTzUY2wgNnjqw47iCmDNPBACPE2xnb218bH5SeZUHxYk6T4WuxuFmv6NkQjhM1323osT",
  "key20": "3U47z2m4ib44VwX3LxMsRNG4Dmm5DbX2DHAPmyfe7RBYime15Y1Ttw3Bmhuhdr68DZYZG6ER7vPgGhCQ7ipzpWTu",
  "key21": "rZ5t5LWhLKMNn4zxQSg4ABQB9gSc3jMJYdqErwP3ksuk1C3nvY9pD9gyAAUoJkbqyaZfoDw8Yx4o6cB7cZCn4ao",
  "key22": "2b7pUfZoe2CkmAT61QAokhshFqpZkCHv9gL7JGSmTnrKwbbNVedsndXbErjCSjS2CN4gTRkVow3PxH7ZNksjpTHg",
  "key23": "2RCTw29K4RyYWJdFJYaZhQvBzRvtrx8Sk73UGsakRYN9BU23kyeFLd4eRdXcfTDmUkfKT3CE8WS1SALviqUUjA2s",
  "key24": "4AE1qLuNTyQEArDsMk7FGC2KEp6Zz2vbngKkRj5UJjrBM9hyoqD111yUKyJiTHbETDkwDQF3b1JBHXADGXcKMc9H",
  "key25": "2TieLvGAQp4Y4AroJCTkBrbScJDQXDbZdwHz3ETR5ayA1JE2gnp1RXoM4nZwXgeKoTDHo9BV5giZxJQLW2y7pc2b",
  "key26": "63KptRg8ABdoS9KDnqUW3ftWyCVHJqwaLma9wzfEqsepbMeMQxHzFdMf4PvzN3nZYbeXzsPMaE2USGaFtQBEXZ6B",
  "key27": "5zDW1o6WYKXCPQDUex3HSAa2jt3RvDb8P1tEjwe1o42KC3fyQGjLtoQZB5acTC225pHV7SKtAhWqrqkKJsT74mhS",
  "key28": "4f19CLNMbyRvAXXa8pGEH1ZanivPUm8hfhpPYzHeyNHWX2iRxuma5UiWVZMpzMMsXYuYjjDbposYzCrJDtmebbJ2",
  "key29": "2hJvH8ipLiCzj1FVydeHojAov9wrZ9mJK4fRMzxhgHUeK2ZjoS6izn5SiaUE1xzhdhvRgYsufhjN9hEeyTDNMA8K",
  "key30": "4vpYMfjJULrvYv1beyrLsxWBnkVNMB9CYMBya28zZxMiF53P3gfffWopYY2dvVJ8Pb9herLg7rseqNsC6wVLt8Gr",
  "key31": "3qf9QhB8duk3k61AAMXeueJVCLo7LHD7Zi9GPo1YdW8ARSzhTySFooaeKXyYXEExvDK5m5RsJkiTvCnPTW3vW22L",
  "key32": "4nrFV7H97ejpzShjgqW2SBqofXVu1FrjexpEBkjEFnjCBKdBLAJ68hmFrXbRBRBXgxE5dV6zjogRjhfFmsW5h3zU",
  "key33": "4C8YLkqAamzwdU3PF1A8brY6anHFe7kWyL1BwXDRE9zG7g9M11JTjR2LcJBo1fipgKXDAeaQJDeftdJpYf1fiRAv",
  "key34": "2qgwzsgeBZZTwVcBYpYKtqNj1SPiHQ67CBzDMftvSE3mNnLzwL6UVf16Sx6EUxWd9X96Rp53c492xfYJSRar5aox",
  "key35": "2ujivAYo7HYoumGL6y2DE92RjAuXyjQjWVgF1TarBj3E79g2g6V7B3vdx42HM3Qvnh6pETfgbFRiMxY1RtGHfAPV",
  "key36": "58rn9ekz6u47kkVPKy3fJKtF5QNsbtvGyzSP1MX4KBkCGn7HD3FHFRU4daH96mMS7QaKDVrZzY4sWNX5N1q3DmTK",
  "key37": "5xGvvGwhgYRtC1Shf1Fa1yvAvLgo2XtsXhCvu5G7738pXq9wYJWCqw4Nqvwm2rDNvVcxvb3GPrpe4vef6uSG4eb4",
  "key38": "64bQ95HQ4qbkodkPnthQj3VU8VX57pygtPSpYBysjUP7c9WotpU2fvjcGaAK6YUuGFspaNKR1WCNxw1ZhBV4ZBLb",
  "key39": "4oh4zRjnsoRtUKybHwG3dh4JY81sgVKSwnP9TYFS6cDoW89fsbC8Zy4yKnyLUSRwQcV4LCDwweJt6YB1G6Z1WnnH",
  "key40": "g2a7kvQ1Ppk365W2BUANkMGizK35RFC7GpvA3wKy3jTnEpKth1eJsJwcasgsu2RhT3TDLnXwhogD8r1zkY5vQq3",
  "key41": "3ZGwb3XF5tCqMtGv23waByyXC8EnpJHZ3mhMKMGYvLsKV3RVhQvZAXkyrhF2Gas8modLDv9mm8QLaoxM1zKVikyG",
  "key42": "4pgrghCXWJstyx1Twb7Gzh6yDCKeDqPBKRabm4CqgRKRZ9SS2hZpp4yMAGGeughcartpz5ptHyq8L7Tqv8igAxZH",
  "key43": "3SwqkEMb7PQmf29Q9hm6JgiFontGoG1vR7Mmgj35igtiEZzDXpytXtyixqnxxGQ53ZNpwCBtuKUsR3txPirgUc2S",
  "key44": "4vPJoqE71hYBgQDtbG8qmJ2AwbDkdt5TiQ8jtajxKPsUSfXgTCPTE3LAcvdbde1M38yKZbxwZvPDxxdLFxmE2xWP",
  "key45": "2STiLqQKCtqF2Bzq65CxQuiPuDLAq8xVxTDgNTpWehANjWUCPdywrxq7r32Zpf3BDvESjirqXq6exzVYAF6aW8cF",
  "key46": "D1FKHH68urf1k4RYn8hQbaeHmQiPKjREmFDL7V8wbKjjvEjukJdCCrQfGXq4zQXYNUiVXNdSSpXNmKWPzrftFUL",
  "key47": "4Q3YvWqGytqSWuBz9gEBVmEosfiVmdiwBM9qjx8hhvHoojiEgTBdiKN2ysqEFvqjVXbAj5fFFJgCNEGBSRxJ45i2",
  "key48": "4Hty6w4hz8jRamqo49pTqURvnC8vMvXTWJEu32VjwH9SVDLotbMRBVDi77LQ3GnvZRmeuSYGYR7YraTM57nxfudQ",
  "key49": "amcRuBToM1E7hyRbwr45EFq2WqoNEm3cCHy5VmBfwgBkZPFXxGAHoiKSQRcr8YkoCn86a79DkY4XkKG8w2zFcxc"
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
