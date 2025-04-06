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
    "4yLsA33aFgMRSDVVZ228NJoYVVfV8FbdCcDMqQS1gZAAh1ak1trDBQqJ67S5yiaJhVnyhVrBLzBxGhy5PyN2Ndjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xfUs1uDKHRLB9P2fr8KnFzLtzSgQe2RQHPv86ryxAWDoYQ7zN4VHjV6KcXC4yCFtvu4SQiHXCDU7ucTV6ogPhPt",
  "key1": "61svDwUWSHqmN2jDo1yFDsEXotbd2pgbSrBNGxAmvBp1V6XP5fYDbYhoD9T2e84P3Kq1cVG3zYdfTQkZfQkvptXN",
  "key2": "RrTYiykxy5jUEL4AFUgUvPB8D9viGAGn9zgJATWH54ZxwWBhoor15FPy2r2eX18b1P7hq1CW7SExnRNUPoUYwE4",
  "key3": "57e2SwfuKMbwjo5BnpLnqJtMwHKtJeYSMKTsUZ6e4nhrUzF3kZiPBeEmCXVGoH3oDsncg6ZspD4MoC6x6dwqEpgH",
  "key4": "4ST5pyqC5hDF35dgqcDuY6jhho6kq6rqmSJxpv4Jhtbp3B9K7ttWDpRsK5fPgRdpRsJ6N9ACLxhxpTvKKvughhb6",
  "key5": "58Ubs3vsQseUMVbWQ4oqGg3AEty86vrqfDCLacaxpBAqgrqe679b25fzbPW7duRJyM5QBj5deqrS1mPu3jYQGtx4",
  "key6": "5uMnbnZUX4EJwjkfBDBhtgeYCNRUpNVqr5o1XuJihwP3iqTzh6y8M4MYeg3er3WUacEtJJxg1M7YQH3Xp6h39Vzh",
  "key7": "2qugTZBB1Pw86YVxKkjsxqXqFTKcju4RsZZbuGoPZE9XRtmew4uyWsAqaK5AJo1mTm5WcKH7GbgwS36HRyw5eoFm",
  "key8": "28TYGS32Xm2USsyCZwD8paZAYkVqrvMosABccomiqpUC2GzaReyhZp7LQRaEmYD8S5QveefFjRhjKGtnnwrPUoRi",
  "key9": "y8qTLKdSx1ZrLY2X7iX9cTEqTM5E5dnJAujHzPTC1trHFGZH4gYAohT66uxerEYj84YQnVvUNqzR29GE4PDfP2x",
  "key10": "8Q1PX5fFkfQTnUM5hck7hw4hJZL4sgqQxS9tGSgijYsCriJroApCHkk9WVJDzKsB1WFRsPHvfDGow77jdaMDyPq",
  "key11": "3pbMtppRsLhR2N9xgEE5Ck3waZLQiapD6BC6c6cxBHVWJZoRPqR7Ze6fgTs2cf32wGJHhVPLenCbSbFLDuSNs8Gz",
  "key12": "4RsqSSenSyj8UiaGK3dRYV75jfWtjrFcZjzyEamDoRTuQ8dQkCx8Wdydab9H6LLEQ1HaLPXu937bSQqXM55zbYQE",
  "key13": "2nui7n8GG9718qi4eLMUzn6VzPjvXKJs6AcaieSemDNBNrf63GiUsYTtVaJGXDdjgAT88SgaxCYvPkJJ5mSFRULa",
  "key14": "2uijFqL8Q2QriTi41Xg7dEpdCmP59ULVzXizfKwbieGGqSstKXxSqWsMkcGBuXdtAZrS8VBGNdtTpA1Hmrgsor9F",
  "key15": "2J1h429298KQDCEF76zcqusajPka6Foyrchs9ynAYHC6LeoyxSeKXcphgQHV6ZjLSfHYvGZNDgvgLqmNLUExQwaY",
  "key16": "3rcH96bnvAxJ2V2nLAGPjzdvDoaL9WSjouvd7fbS3NLWVNNdXZonjqWCw5sdHmBqefUWJKE2ZSJWwu2YqBDtN6oi",
  "key17": "3EstMJGh8aTcJUqnjzjbvfXdBmfXHYHzJePLBspVUc2Mhm4jfK7qZR4GdzgVyY6wcYuMjd4PCPvEjo9ZbXA27Uws",
  "key18": "63JGVnqoyTkYmhjt7vY2673Jf27n9QgiSMeg7JEaQ7HFLL8dzU2hushTiX5LP95JpbQ554bVMpiynbEP1sJqAub5",
  "key19": "3h2c5ir61SAET1agUTsSAvx4AVcn3iwaAsxi2GacNcEbLQWwxwgdWCG67UoTF8gat4vF4VbrJKbVjppNYpFGisJ6",
  "key20": "2s26RTDMGQ9UgQe7ySYjKRzJsKqZUe1TUmszAsv1zhtaaLsj9AjN2WBdp8u8qXgSCkNvApi4edNbUK14LKEn6Lhr",
  "key21": "dt7sWggj6XbLnufnGc2XzAq6ZF9bpbEwuNCJzCoXe4UXU8xxzHADDuLpKAGHXtHRDF72cdPn4aT5cN9UiNE6vD7",
  "key22": "wGPCFnim9gdVA7VEoXrVvbZMsFvhWnGewukeiHS6EDXvYzMh4uMw4Sne4XrZRB7nKFktGEHdJD5AR92FjfuLGqA",
  "key23": "5K6jhpGnVSY6kTUv4bC6gf7Y4rso199EfLGgjk5h7Y8jr5NCyguvRxXda16Ycyqj2kRrARTFgZ8wADin28Hqp3Gj",
  "key24": "37H7pkT8a2RTZegmUDgtuhiK7eaSPA9E5fXC4SXAY4zAQp2UC97fbU3ADovs9fetgR1zXh13epEgtwP2xwoqAsco",
  "key25": "5coBfch1iku47FgXJaKNGvXfs3sEhwBJU8ZqytuQaJHHb49y8XqanfjywY5s8unCLbuNN7pSPG3rvwAJ9QL4MUxg",
  "key26": "C59sWVW4FFTWu2iLbDadkH5L8b7yNyD4nGBDiP6qmFBnziU4jwZ53bRNcd7PKpAD8pryMNSky9Mvpcu4ue4eR33",
  "key27": "5NZqxrfCAuayDvuYWpXS5i1rSCV4FtpiVL5YP2GgGwYZNA1ZH9ZvBLMwj4BmQ7rLrArahedJjufBHLgDayKsmaAk",
  "key28": "39QgqwCutFsUiTBcNL9GQBtZ25W36Vs64GnLuyWNznyEPbbceYZXVt33gm7HK4yrLFuHjPz5YMGhqnDFk58t54S1",
  "key29": "3ht5YGJFDcDTFzxkfCavHAm34jD2Qzv8vasvSvBoCeSYsxrLSWuaUqXL4fPLMRUrXBLQiyB2GZ7ZTqxkRADkF6Dv",
  "key30": "2ffnpox7u8ojuEAWumaVAYmY7kUAWPMFvgYotpmcQJ8HqiR8UegQZRgzHeicurpq2GEtMLFnKvdwYQirWKH9qGWz",
  "key31": "3VsZR8Ldo3QMTj16mF4hauxwquLtkWv4VRZEA4k6DafJALRwNVqgv1EPbj3UxFQi392BU3sFLxF1WxuPyKMNjiwg",
  "key32": "61B44rnFXrYWsJTg3oJUtZV2dUtHmZYW9B2ioLwnMYzDjmnFNrXMSnAME7EwMV1svEqDDaAW1USDm72EhYmB6srY",
  "key33": "5v45bPpsyxWYyuJ9jpTCnQEDyFX52BLjFtqokPHPYutWgzL8knUQ37D9YXeKh4X1ggqGRP7nJE4cNUkzAMMGYiSh",
  "key34": "5XDJKAgKZvqE39bDVVxo82ZqDsX5xq4sehQVci6Pu7Uaqk77d8drB4XHhdj1hwaD72V3RqSZQCZBEnLKGDFg2f9c",
  "key35": "NBBgvyuqTTaR1xUaRwpGAvdtGa7AaoHRFoaXNMPeaMx8dppXDaFUSH3g55oxh8jr6q8TaJuXBTAu9vXqXAto23V",
  "key36": "2nLcu5CbyXF9Rbrehpigkb52iB11nu8CQMVpVH3zDZDPVugVfeN9kw6oD4BcPHxFDATYEYsYP7gdBqBxMH5PKCXC",
  "key37": "258j4TKmZNjCpFriXcdffYPqy5rDVFcfexGoMG9yNajtTB5uhEXDbEh9K5cE9Yd3yUwdkYFgdEYvxFUUMWGSTDB2",
  "key38": "MqZQXQibkKn96wYsEAMVjBJoravsVjQCqz176SmC9VrDFLotmqHTb1f8NUa8oVtPFjPyVoSpF3agtvSrzs9X2DG",
  "key39": "4ZBYmDZTafnJhYTYkK5aUKB9JSyBVpKWNPt26v9oFmTssLxNLnKRkRFYrvSuAg73RJtnj7LbQX3K9MzU5Qb37wgH",
  "key40": "33bM7zzFrsP45G2VD1QgVmytZ3kkumUdbc1E5S3od5s9LUWFLLdegQmfg6kx3HEXqo3MPz2CoJ6gu1291Z5bMsRi",
  "key41": "4zRmSNq8HPVs7o9DAGS1gT3Rw537qms8EzvHBCk3inYR33KAP9vDm2MmiCcy9BP3jahgWYYDvU79HQ13wjb6bxrt",
  "key42": "5d7F7TSwuHd4R4ubc9AZcprRJ4KkDvW9cNBjVVayU1YdPSppULK4JH3LjQpc1zJ5tWv9Qsa5KfzSHwPE4iPGbLeX",
  "key43": "3ycd5KSYLPtVRdg6SkinuFUaaHXAdyJ1cYBg7bKR5jbq1HHLHLpz1V6SGBLWPsgoh1pEZWBcuytF7YWsjoyVVScJ",
  "key44": "VpKSms52zuHLKRW5fqbLcgckULR2cMJQEkjsiZ7mnFGLyJMSjAyzzqqtLdM4xRVeQthhgdEnLg55gFKzQdAZ5eo",
  "key45": "2W2XziH6zmWLg8QkyD41BqANtXuM8WiB6qvheXjc4fYMYgoEdoemdSHU9ZzMVdCc3aiFsFd9Eo6Jir99x6tDRJDG",
  "key46": "5qMorjJGtfSrknJeqUc6mVjtMvUQ8n1u9jCs3dgpvG7idX7xqi9ApekK8q362gFt6MyzKZ2Wwr8mmHCjWDE3YjA"
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
