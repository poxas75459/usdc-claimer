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
    "2MNoEo56Hd7E3KjTvFA6FJqTNUH7tNNZ6ntUP8uPbSbJJnakYiRQobKTaoCTYrRcRRtLkCH5TwpcxCBsNbfhNLeh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wXjX8oaGHWh4Z7h3VRo1mVQGFxKpaEgynU6yXTBgKBomXXcsoXQt5V4vmHvT7uvinMKja6TNJxRvaiMyZMqXNcP",
  "key1": "2LV5dBLKVqgVakfihdYKqCjWJmpVZatBhG816nuAVaTsKtnEKb82vmC5F5mgYmVTeyE9xKx1EG69tJ9bxnZ4vWpZ",
  "key2": "4bM1ki2Q5RGqpruRrMpMuUNEaDaktpa6EdT1q9kK4QSMMJDsanVqF5DUSLfrGyFXxdgabDSAmvMhm5b8KPdEa6y3",
  "key3": "Mj766CUGB3PrCtapu3HFERC8asiiYVbJoMzALtoBsQbDMRfN6boDqQ3E2esg6CLfvEiq3hPeZdkp7XHMnWTMjB9",
  "key4": "V83QFghfYbDM7y6zye89uxgSzHPwn2jmfoBrz73wuWFBTSXPB5hgRjnvcft82E4bavuqQmXk4aMHfPk1JVpMKwV",
  "key5": "2Ete7cpy3PbbfDkiF61fST9TcUf6Q7GwSKShLq6zhWhp2awTBzYm26UcH7ewrv27AKkR8d76F399VsrHfdtfUus9",
  "key6": "3opQD3E782UgoGNj9EhBxw4cus69ZEcqhRRwFotVpt3T5Ez3R1yz2nSyWofxPovonNKUnms8gRySa4noYjP3xPM6",
  "key7": "5y6PXTMXxGRPn3G9CBrMbUF8G6U94vyBMJ4S2oQy3io5Nh3SLnMayx47ntt5r5T95kNDe8EvdhFCxuS1U1HVnnPg",
  "key8": "35CDtRZkDbW5HBbD2kTCktkDA2qdsHmp8pPtChhhdx1zUAmiJcLjup5fPnSfE6YCEBMiW6RtGeN5Rp7DX6vzawK",
  "key9": "3BBF2uE9eMUax2DSw57xA3nQqM4uhwgAnWpPkmDg7m1AtMPTSs8ewcjgJD8xL9Ax6xvABkp7SzPGMM4TPfixbZxm",
  "key10": "2KK4nZHpEFaqS9Yd3JXhjgfaeiu7skGsXEqZQaLbQHXfviJvPBEt47Z6LMntxftvyKbkrz6zdBuaV6TkrZ24TisW",
  "key11": "37SHpjeqXrdfx9EcYCqbSZ9kQaQXwjr6XYJ9rk2WrTn3261DM5f5rBKKYwmNQrjinD4xtzzXhGH5UAxkZg7nG3rN",
  "key12": "51SYn9hSU89jZgvMhDBeRRUUd85gUB3uEspCsTCcmRKaX1x3pgh2HmN352FLuAjAsj6B258MBAoa37XzVN2gadgV",
  "key13": "3WrjtDJEdNZcMtkBzyJt8RTfnb1f4jy6VYocFHZjDaJ48KyZHiCeUvwgeBdXEnmjU9eWZPyFYJiTMwSSzsC99iCk",
  "key14": "61CAQWMJnm2dZnZGuZ2S16BG4VnKjkWSxUa8rKXNbYHCPRxuDNPf56V8ztZrqK5ivBtwqxP62WJySkgXCkqyJSyS",
  "key15": "uTxoyjCJM7sn9b68JnLdFm5omqc3KKgQfi8wF4iPFHLAfyF57VQDfPTzwyurzUL3VTDHVrhiZg6PcZYeyz5RTh4",
  "key16": "5hZ5Dbfycp97zykT8yuGj2cfv7e2QJQJ9YBgrV1F4kYrJmu5PMYuhV4QT35DaeWf3BEGD2s7Y3xosDiLxdhyHYA6",
  "key17": "4cBKHRjE2f9grinJhKoaw2gLZbqy3rk2hdfFkrYfcfrJKbSRknfha2ySmcHy1g9SMC62ZfnxuaQKrAW3DVnc3xEg",
  "key18": "HcaYDM7iT4Ak7AhMdbusLqcbUW9i5T6oNxvu8Naz5Kk2df4ZRv5BU4mFLwxdp9MPFxtxgyrxc2fapjgghUZTj9n",
  "key19": "2Q6fqdUaatDvf7h8HQeEpCLUZPyY6zwnMtPqZCa2yjmbzTMrwK6bxm82Ktp1GpeBGauLiDeEh46USCRpTV9XAKcm",
  "key20": "5RDPQXExgsDpRjhavfJkLTzm5BcvKcUpcCyoccHCAidF6sdTcy4qrcLU4LTGaCZs4Tpj3pDGpSZttsoP186t8jxS",
  "key21": "4qBakpb5j4dEeSnPW2zSqArHg4YSmYZJUvzFMpUYyUXsJATH47d9A6KXc666UApUw88LxtSrL56AXtCqLsbVnYKZ",
  "key22": "g1PX7x8ogt2hEharyTu5hXhWJMwPuavbaXYmPVL2KS2zQcj7nh6dr3WgsH5F22jFuKpWG6MVGf8fMiXkZGgGxk5",
  "key23": "3k1P5yKs2nsdsZftWXexfLJcp7TCpFVDf1Js5YsYmdWNQeD7DYqcEVeiKbjqjwmc5EkQu3wmJ8kqmQWpsvd6vY2K",
  "key24": "3j7gujD9pwXTQVVUQq6Wv4Fveh1rUCNvLfp7NdmBR3Kvbaf6jbw5yULU6DJyNtMNjeJnDSnDjDzFDQxbdLZLRHoB",
  "key25": "2494vvXGkL3mKoeJtjzHV9dmmRqgWNHS24WLzE56iHBequEt5hJanyneTFQXq4CbcXXNm7H2D4RdWLEEbEJBx6j8",
  "key26": "27kDRndejhCUApNXCzcn6T83o2BscjkNALoD7iCpi6XsvJQvxkgaMDLAH7PzfPb184sfXn3SgGxb77Jzxd9URvQg",
  "key27": "5e7h96ankNjN5vVtvZ48sjsGxY3jcu6CSZg4MoaNQMczPpU32wwcgfJJHCVuiUTudimYRdbkoBjWF7JauvTc48S",
  "key28": "3JfFBBka625twSPaBFRcRaibpnKQj3n9XF3krSfPGYLKSexNGaomWgw18AV31BuWEi2JWGo43U5PnDG61kxvFT3v",
  "key29": "5RfCK2qjrFXzN8BBBzFro8ngauqhxtGP3h7BUqgvuij6tZJWoscJQZCFa1fMTnC6jwSv5Q45inWGG8CDD727AMk8",
  "key30": "3XGxLKAv8mH92Nxw3cdJjWycBNPRSGh5Fp5NNhMbsRE9Z5RHsQSHo6krA5AurtYBL1aPY4ceNstckuKbyaAbwgZA",
  "key31": "5n5L1XWMeGF4iz8M1nLophpc8EeQBE8qP1XqG6CaQEwwR3gg1X8U9UEwYQUBC6SLp34ubGbWWxf4YLJSSJFdwdAX",
  "key32": "Dk4CpXULQ5cQ2rgJvnFCZqPmWHZhWD25DnJidXDD9nWHkCHiMnQJpsPWxNnnqLK8eT7RGXRCzRyCcHn3YqAc5fv",
  "key33": "577AvTe4qNjUagqfH3KrZYFc74eryG4SX46k46Nw9ms1KiELdJ6JQLjiaewVaNL17eX5r854Kya6rp3yY66tTzPn",
  "key34": "5QJh6HoaMpTdfj2WbtKTbFYhDdB5VqiZDf7Mxnoks2TdDKyze9PojjrjKJHeRTguHzSKwyNLFF3CWD8DkDvwXX6T",
  "key35": "YGNVRyb5vAYcU3UJkxtPpXsHpwejiwVU4whGJGRH399kFYPGDMxZBzjnDjsBoLuva6vNpQDdSznidjg8p9GiUGk",
  "key36": "GAEjbDUhHxjkGFfmNQA76D2A5eaaFZXPcDUwiYy7BfJCv9iKDzQcvmQKMfyw4qekzADE9DE5WDusnkCTsTc5HM6",
  "key37": "3hZUP8f7b7FEL1R6ds7TBrGwtBGZ7iUMFCjntPJkuVM1mg4usFFEgKj772jwK6hpc7XkrmC2JAvzvZfyM44WqQDe",
  "key38": "2F5aSN78NoNWNmqVu7rv2ETGvAuz6SqRxu7UEeyyW6crbmTxyyoBMzZERbXJk5mwLJsTaprtggMDy9aJT2XkJR55",
  "key39": "2SfyueZWVvZchP4ZjgdUjDCuuRY8hRskGzb1D4DW9gp7Co2EBEWnA6S57sYQB956EwQqEL7icdkgHCAgxQxvHmft",
  "key40": "5MJk5FUYxA5DMRnuUC6b6FbycjizAaoprYTHDpH2hPNhpNp5Lii2815vdZ9wRj2DSxjD4HJRuHKtRgjy7HzBVmeL",
  "key41": "z3FdAvCHEF7Pg7a6zdV6aPKkJqQYDe5evudD3Nnd1CsFWmu2chfbA3X65NZZmas6kFrTrGhrDNYoRhqLFgapnfx",
  "key42": "t5ntbnfKV4eRx1j5Kw4msZtxn1QRRpyB1XqP8PqSvbRhgYKtiuM9MEC6PCoRBhk8bCYpCi99UDyuzWc7JYkGWYv",
  "key43": "3v6Ng9mnMRiqNaEoikcDdUPJ3QyRiJxkH38BeUjcMf5F8y4PetppzLLDgjJi6WouXUN6Lb9zZM4HQ9biunD4i49J",
  "key44": "2iVPeBS4fGX3UMSppWmdjjg7zkdwwUoGHoibnaJP64kZne1NoB4Q56mQKF7i8r19X8Dp2J712vpENcfnDrLbzAVu"
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
