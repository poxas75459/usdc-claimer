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
    "2bWNuS2QJUBia1ZtXDTU2VpexA8trVuTM5JNswng7oC6NxbKXiMLgcTh3RyaY1CmPUBwC5M6AJ6Fi6i2Y4MvfVDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YEUbiAdaYWQ3jUeXrnd9ZvYvsRs7AQXbYmCzFL8TgU9ZgPze3LBYQj1BT7vwD6hWhmNkcFniCN5eRToHJkVmJwN",
  "key1": "2LYzRSkaozBT9Uqpgv3NTrpRy45ArMGUmFkUhBGnGEBwUhU4NrUtPdGauQuppc1au23YVPhKNBLcomTi8oVw9vkB",
  "key2": "2fupt33qaQrd3bSH9acBV5QMomoN135MGrbJmsZUgeRXeWwBKDrLUpqcZCbnhCXKCBGQjXjJh1Tv64dXmiewUo8d",
  "key3": "5g71TXVcMgf5Hj9jrnsCiZQ9Ljm6Bp9MWboNYPW3TzajzudEkAgzw9Bo1oDiTbkMdUE4onXdAkoiQd6MHNNRsm8m",
  "key4": "2JegYkC1hQ1oxdLFE6Gux6hRDFpcdbWJUJvDyoM8X47xev7wSNQiTBfvLum7jT8qC1KtM5TrgpR6Lg4DjYc4i9w5",
  "key5": "2HQJ1MZnK2Z1QGNysTidwTZqCaCX3NrAbMA89K1sTfvK78zeK3HbriYLTuWy6ALcJwirPbEZ3CZKVSjXuHqe3UZn",
  "key6": "2v7csZTqzuFaRx4hSnWYY8pQxHZarZ1BDwxy9eD9ELng9ky2hXCszhrP1kJZYrm8aJ9QNfQ1R9ZEFZCJTSqkoUGk",
  "key7": "RyQR9yjMogtpZMZYaJx7VPxQoS82XwrHEvQCTCGjVsMSnYLdPzGsvPxwBeMxPaXjcKo2trZfpwrQVJHGkDUT6sW",
  "key8": "31Q94o67XNNjAkZYp2gGpaqTg5APwT42nLQduSHPR5DQqkYKtLQJG3PN2CCo81oQhSBV5jBkrTBMnvtBqJrZhPtz",
  "key9": "2Nt4c8z23M8LhhMe8F4AJzWNva9fErMGq2ERVSS61uaUCqe36afmQc6SU54EG2W5TBMxrmH9mApZnhoLT2pR7xNx",
  "key10": "4saCsiUP2p4gW1GmY8fjmh1L4McCVCy1uEnKugi94Ce3Vea6JGCU2pyK9JdhhFciJfZxgfoZ5vWqRJznKd5HvpFA",
  "key11": "27HkbTGBvFfUh9wVEFiURyFwsmWusk3sWgyHGMvHKjevkvUCSx7HDFQ9QeLv4Xg9oc6WTytNoLuZyDyoar1u3aVE",
  "key12": "2w5KorYBbp6jJtviasvWUnqppgtQoMCZGnqmZAvAAWxBkZnZmi6gmgKroLBLSdPkTgwLW1aEXiRC8Fq3jVqKj8Wz",
  "key13": "22ZgzRdHbZYSP4X4FAtsis7FLdPzGiYim82PvXEDymg83xKVkeLYsN98j9pMTdmj4KuHNbcsx3KdwNkgbcUohUha",
  "key14": "4gGuUjphnxwkbMLrQZmpMQQyC8dgV32UFp2jW16cmeRvD4F6zqbJgb9r9HUkPSEx5s9P8QmAB6VMWb8qPg4rxBXm",
  "key15": "5qyhkHWPUkaVixrpF1P7VEzE21FWqwqkEGFWA3i2JmtS7Ph7K22coBA6dq3oSXLTm3GXViGe6xnSrMm2UXe4kEVF",
  "key16": "5hgyiwDBZsigj3DciNouqDMTK3C7XXF4DeGgmL3q8WbzroCab7HFA7ZXxUKXSBtTGwXVE1KWMGEftiF9wVr8xEaU",
  "key17": "4QbzSbtBD9NZZBtrsKZkU9Qk4m558noJhUNBpn5VsLPMjB9tvzz42Zpqpgt2zFeReSDwSd1XitUAT5cFfQcgKA4g",
  "key18": "4Ada7YEPWv5ShX978sgpK2mRAKTevhvDoyXi28kfcRC8QPAz2S9ks29tR5m5Tx4ntsyCKSctpUFgdSyXtVsMEWQN",
  "key19": "3uSMW1octmFpUfadCiwtfYJLq816KufxXQBft9WS5pBiagzNLKsokZB7ZbX2MWrqGchB8tkQvEhmtRUwkwn1PMNB",
  "key20": "5X6AgwCUqJBDRAPAMwpVC5s8m6Wk4i6Tsasrg1riUKG8DFR1ZnLkDghi9gJBQrajPzt8bqJ6TZ3rauUUKiQvsn1W",
  "key21": "5m5CgG7e8r97ZciejnSopJe7ZYrDt33DFtQaFt6EgbB2gCGC8QD2vP8ir6rwvyNshc8kFaeVC13gktZ7KznH93uA",
  "key22": "5xo75EYFypqFTEn6Y2jmDUF5m4ur8pX9xqdgcSQoGmPAyNkefWZs9jDku2oDJkX4ucb3GyiuyJ4pEWYUGsUzdswb",
  "key23": "54ZLCj8zH3yi589QpkWoFWUkuDDbpiKahufhWziZ9MDgW47iGHgADhByvyC7bzsnxzUQ8ZmmFyP7XrqkQoGDKTCR",
  "key24": "631RsUc8jj3K6FnEyz7QXFyDwfV6UkvjLa5rGEnF9nMTsmsSGsn6A6x7KgHC9LjaakUbhBpj2ZGsDfb2AtkkMSi2",
  "key25": "2LV7Lfc9Gs7MkDXtAnWqm2PUyfJ8zAc1haFhoqjKT4mFLqyw3owgT3TqA3tMVvoYMinLEP7sMdisZjBdA1DqV6fN",
  "key26": "4isaVbhGVqGWWw6Y82vVPweFRW4agJA8v1M9zuMJv2ni5BW3u2Wf2Qz5bygdsxZFDY3Vk9jsNvkURTEh6JGEA5up",
  "key27": "3hMN9Q5vkDR9SPGoNP2mmH5ScP8QuzaQh4GYQwfcmE6Yci8Fq5JwAE86cCKUebstLmRR5jtXao8LErttDqpzH6BU",
  "key28": "xUHydj9KBFQA14KvEF8TbYnRkfbFxzeejTmXYDSzxUaPwystMhbWH7VbJWUXv5ApUECwTKoh549oPxjFED4maik",
  "key29": "5hr2mKo7JkuakY4U8yKA31zGehC7kEF39GfBZtpUrEKt9zVhUGFULxBNavNnnf39eydKn2gravfQkpqcmVi4DfHb",
  "key30": "41c4JmmqEDDdq9maS9DigbNA7JBrRMhoufsxoHJypDW5XneJivK8hZFu4Bks1sCZMsryd32dFNbjgg6YLDmLZ7D3",
  "key31": "2CxYsBjbJXT6H5kmSL979WzTgjYHTRJZ4bzouAN8w8NYWiyoySYbSkYvBHP2ApLZeZyML5oUBx4pPL6y4dummeDm",
  "key32": "35pfE1Ua8KLjN5N2wkZYbsZ44pYSxsMeUoobTcY8KFbSZeoMsWTA4bvw7EZ5HSau8mz6oFdGMfCj6GsZSBYhWGfc",
  "key33": "2traYML3qPuBnuu2QQa7e67cYhwxd8p3QVcH1wHQwMomMD29MyfhBJ4x7QmG81Pn6ifYXNDTPdGULBaUriN2WdsT",
  "key34": "4daK9ke3dwUDSGfd6KzpcqmJWoEBHLsExoft57UQ4juVrJUj2ubqWNr7RYzxfyM3S9cZHN2UZk6kxGkWj21tbm5B",
  "key35": "5LJCF7Kqx6fZBNWBqfhBV9oTB8btbCbg9rZyDfhdLGxp4YAa27mXfFkY42hTtFh731WYdjWXKKWtizd3nGzmxvyz",
  "key36": "3iMEYfhvjy69N4aVU5Uz1Z4oJfVTgBRtrvmo8ebmUWh1udK1YfjYFZgt5A8SLxiKqGmHUUC78EaqiCV9Rq56jnae",
  "key37": "4nh2MhX5x8Wujr4UUQYCe4A1yMU6AuHhSL6yQJC4eu8i4ybwA6hG9fJgYFPvhs2SXmNnzBfsuvyEwh4AQkuYQ2EH",
  "key38": "2GZ912gAAvjqxGzztfmmLzqfDezq6pne7UuBF9A967h83aWG276epajdjTYx2mdr5sPbew3oGvnHDXZ97o4VnVpT",
  "key39": "5sfVqzfL7tvqwdZaGEKCNcAmq4mNAnzDsFVBQeeLpQBNA8GCQSpJexh48youMkZG4rZQ6H3cJPej567RioW21Bfg",
  "key40": "5m9ZaZDekWpx71ynszsHE3vh2jzCiQ5x3Mw6srj5Z8ETgHUUJVvfrJAPG7MhMN2dktzP3bD6QyQsUXGAFpbd2K61",
  "key41": "5VLvfVXrp5bztSkXrnW1ihuhsqTkcRCcoKRfbDRbH8NevU7LXqquk8sMQH9WwUvNmuEJDKMunj9b2JCpuzDKHF7p",
  "key42": "4UWsoQcWNAUEAL924upkzFXqLiQSHiYd63yJaArmJd26BpkVx7LEdjx8xvprwr3LzSGpHqGFSQ9AHQZkxEKna8w5"
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
