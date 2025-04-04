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
    "5KamthRCHMfuFrxhJ4YMX5bCEzcFi7ZsxJkjyLmPbjfpSMDjPea6b6t7SFCGQeBYBRNjdvS3LL1NgxvmyMjLTKKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ptVs2sVkoU1tcq7pAZL2bxJryYJrn3f97cpQqJKt12zUHWgenoJkoeQNmnvmpfoyggyV6ewSf3VqGd3WmDeF8RH",
  "key1": "2vamdCPq58QqnMLNFpd8PEBjpVYFpPuxvn7duzQEmnwQopFHfGiy3HW9X4MZVJbsvzKe6wKkSSssSCVngzPYFTCm",
  "key2": "6XQR4To6gGVwNaJKnXnuDhUEVp3X3FqNBwHGStLKtCfSSXzQrEENPQzsiz9z2tq6Qxw2jN3HJPxnttsF1bYW6fT",
  "key3": "7LaroLhSuDwKUUDKiRM7FJG6JTP8oDY1sHmzBFEmzpAmanbkH4hQPNgykHeKkUrRX19eapPYcoeRtUaMdpg1aHT",
  "key4": "3Bq5H5wSPrhVKbwEmMGY4VvHxcPhKF3L9p999koAfPEnAk6hX1Sg86EdR2XEPjcCYd2i1p9jmSt2zwtJFphXe1rs",
  "key5": "4xNYXVXd6W54mYvn7ETQ1EpByuUazxBPnUe2iTLhEGhvJX4hFhhi6Ykuq1AjjDGKg3QcXbkGiq5EcAkoEptUPVZr",
  "key6": "kAV9eZrp56xYEXS3kizxcScxiJ1VNUSgd48UrY2Tz3A4W6E7WwQus61wuBS4mak5DjdfLQztPWa365pM2UmpNyq",
  "key7": "4w9VGPw1WKyzysEKuvVkCekubsbVLUd4RuQFA6rWr4wjppu5QPsnNvh1T9rWqFvQmFQjYqTKfQWwJGjwtr89Q7WU",
  "key8": "2trKzqrpC8uYXJbkt2eFAXmMRwMPMKCMaEkN4boqV2HUbK9hMXXoQeZAQkptTztzfieUENChSGwLxMqhwtkriMc1",
  "key9": "3P9nosq7rGiexWxd2LidQRZptu9r17NMPoqxmWMUXdG1QVapAMuVzy2QwiroeE5XRCxSjDgat45HadC95NRLGpFq",
  "key10": "5isLov16MB2PpMs7QiN1zJXG51xo861Ypyz3QLQtaa9oSVLJxDd8XDrhDDDgjUVn6UQRaMP1wbWDTa9R887xHddu",
  "key11": "2rHzeJWW58o4p4nrx59eZc2VxZkLPFW7RN8TJw4hoXxqTq3De6HC5JGFSBfqQL4w2zeG64dNYmm14cnTVcVLpHuF",
  "key12": "23xpGbo2s3HfrodSmoojdBu6mWRL6Au12LrZxS4XwKyaZTEct1BAN2DJesXQgiX1W8buha7ZPbbicNFpv52gABh1",
  "key13": "5mewzqLfLb7a2vq1PqonawFyZW6R4XMQWWUxx3XxqeRUw3BushhhuZHz4P4ErpNQtLkuxaQxb24eVtsGWQ4iRnDe",
  "key14": "39CmqF4vucCZ4iJ53H4MauvUjqXpfUMTkYzTEAH5oCCfxTmpCGg9EdDmfjHbhyaaaN91DcWgzsWfRHNfqhwzybsU",
  "key15": "4T61Mg9mhu8U27mtXxi6PfPVKQN3hmbTJpyxhs3nq8iWVCQt7CX8H1XHeEiXMq8NwqMYD7z7PfmjyveK8tz83i3q",
  "key16": "3PU5iMzVrWTnDs7W5y6E1vYSAjyXn74Fcy8hzRzSbzTqX5EHN27CGoMrQ8YE9FgcWyQRGevauKythX1HctYzF4wN",
  "key17": "m2Q1bG1Yn7hhFSvc9sMrkbaXaGqyrPF6SqKuR3sNk8hK5pzozQ9aBSfpyhz4Q3K2wHjibnBy8tZgZnLUifZbBp8",
  "key18": "4wiorubiU5recHwtvHwF55CnBskwrY21YT8MBTjiV15ehzjSqbcH7wmfas9XCUM4iL6j1FKjGT5KFG4pZsCKYP8N",
  "key19": "2hrzANGURXvsPrNfdN9acy7UwS9ERrtJky9n13RMesLstcpJuufYEN7u6neJYXjHpZiLbvDLvbAHERLy27QJopNi",
  "key20": "5A4mGeekj4ZxDHCeTmrxhmL7t97ygAYJhM3EeeSy1xeJyvrYQGbcWFWumCxcXLZwokXLHuBGDsGULKdttaPkitqx",
  "key21": "63A9qN6iYXJ2xm6kNB5NyEgoBzrqy8PLottesQxRCHRX2DCJG5fbpSH4ze8c6n1rZxNDBnmpH9HkFxDaEJwc5zgF",
  "key22": "5hMrV3gqetqPXG1K1FbFnp3FaUJvivMy6YRNCxidU6CPjCBzkjLpPVYBdNQdTg9cYgFuuNEFcyKCHYgWGSr7kjMy",
  "key23": "34NRrMhJ2WACCsnL217JWNhPfr8qVbpiJAy2K5V85ssjD1CTjphBx7qpEFMjuoXA8VEM6T3kVsYCRvEAewvVeU9t",
  "key24": "NEA3PDjH1qE3mMb9kdWbhR5JcgFHEcDWvZm2DRQQnLDjX6uZnRxCrcESmvRgotJHURGW7oRnWXRxEkkoQvXPb8f",
  "key25": "2AXaNTiYUzpA5E5q1mzC4ngLKKcbnE2pkLpce1HyAMxbvbjrAGL4gp4P4jMjz5qSzzqoGqQBx9FjZtp2BS2nVQ7h",
  "key26": "qw6CcqNUemPwtz4yjnv2EM7MjeUN3DDemv1NF4tr4Yc1VtJBhCPr9tJqYNfjegtSoHPXMpFjNTHktXmC6hkjM3c",
  "key27": "59CYj6edz2ykEmDDTNXZ9k8xHamZqmD2NznNZVmbdET9it7wFhtfYYskbWhEC7oLgxCzZAeq5K1xGEGRrGPE3Cco",
  "key28": "VYCB6TXV8hzAuuU3TqmS3NTiXcFjcdAaxi4MLiZoGus9Z1GycZbFQJyrDbcKS9TG4Mp3thfhCRdfitrJxZvsffL",
  "key29": "5oVr3TsefTbSQmAB5kNMekz1QTygGZ5irAjK3YLiG2g564jfPoNEkwHUx4AF616RGpaSQyiM6Uq6Zi7qG3jftT9J",
  "key30": "4ZPmaWUemBTYuiNejSxMH3qnYddkC8iye1KPSgAkLaCF397uy8LWPnXRwYAATpoz962vj22aQMuxxPkcvqbLuPJn",
  "key31": "31cBeqqYpKPA4wCmW5qwTQci6MSKXFBYxsmC2p3SJbGGwgEAXVQqdfmToSyn3nmYWmgpEL77XTPZh1z11fHChZEs",
  "key32": "7TjXiutr6PG7Zat3b92E7cVmM8bKoLC5UErJmFXVYZoEnbDGrHMbm3u1NJVQwkxzUhBRHY4kof46kxERcJkyhnY",
  "key33": "qqiyqALpmLDJQnSViJUWcN75Cnbdua7AacXK5AkpveuQBvwfabi1odECCogcoihBzFPSdzhbsJLxvJ23SSvpwoj",
  "key34": "WDvgxmPvVUZodTodwmC9NTRBxFGkXEdie389p2cfsNu361KnJZ9kTouKfuLxCWSqh5XG1LAthntrzz32zBvRBub",
  "key35": "BbzJfhhpVy4WCckrNBTii9wZStiWVo9q7ezS542ExWTVn6hJhs8FfMdHcnZKGbxPG7jP8p1NQtijrY9fEMC6X97",
  "key36": "2cCa3UMuzQdxSbmVKDNS5op5ExNhuSDc4SquuAEABFB51hVyeac9vianMaVFxvCQ2hzpfgC1G9VcaB3okHHJz8Lo",
  "key37": "4iYAReRkxvRncyn5xemkyA4myH7quMSu7zugkxxq17NoWtJT6R7wYWtemUBPDSyA2psuPNKjpYRGoMdkQRknHLYM",
  "key38": "3sACbNVdtfYKS4rb71Y6DsLtzTeqZRXmR4vj1t4w2mHsQcsNYg6HjJejyhotyV8PjJwm514XyfjFu54QwAjK2Ac7",
  "key39": "51ueyC1QGKp3zQmyE7kSGVJAhQ4yGrbR4BT6YmkP3kD3TXUJu7Qho8AQmcgXNZPX3zokGtEyMLYD6s73TTF6fhhV",
  "key40": "4bkfWD7E8v2RvTz79oYzj8LoGrG9nPeabUyy5EXTHzjZX9txr7Qt5Jqgg9udDLhNLA1AWsbykLskHLuMhDofLiZU"
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
