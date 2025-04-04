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
    "ktAjNrJUA3ES6WmTs2j4Da3TdcFcBWZrcbVRDQAV9m4XYmAiAGrGE4hFkpmwuLF5Z5j9kTyH9tAt9LrpFZhCry2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a8WGn41KZPGwmRDjnV3qp7x5QEsvmsx6trgcZL8MZZUrwgkWamkRsWTopsjjQsGzAdtbVK6Zhrqn9eCwjrnaGfg",
  "key1": "2NtMPzaHh57GammdcQe3Vpxx9n3jUxiV3G3b5iGMaDe2viSAB7oAGLBnw8nUVwnT5svKD9jqVVXuRLfu2jN1tkKz",
  "key2": "5PVA6C5rgWAMKetf92bCDwHHGeRWwbNPzQ29zr65K9g78uNFEeCorzRZRkvnuEDTJY8tv7Ps7wEgkP54bp8ytvb",
  "key3": "5CTuTULtFDzFKeFu8eAQyopL688tHYBFVPVHgAVmSuYZXtQigU4x7vc4Qe2DftW67vjfUhmdkdZfPLzYiTdqh142",
  "key4": "4qWYDGBRGcnHh42oKeiHUHj6D9TYEuvj7ShznDp8yCuLbHoKjtXvYrX4Z8VEZpXUF8bsm6MFEmrxVPDKAY3ymLi5",
  "key5": "4iVcCZzu7QeSUyGPMPWZGbtrucBAJzEvWiypt2ngyjnRMEGvzqDGAvtkbWQ1PFyofbMeM93XrcFR7tQNUX7aTfZv",
  "key6": "mXfkJvCYDMMbzzyYHgHrbtMLxNXj3EmhgTL3M3dxKdSphVtM2WJu8rKz46fwSNmxRYYP5rYD1j7Jx8cnq2Z495Y",
  "key7": "5F95dFpA2nXpegdKkr9MTbXXBto6F57mz15ozteR1WRxs9qTvyFq9dqJTvMq7JDufHkFqD4ei1aNd1gjVPRQ7sdo",
  "key8": "3jbUNZL5msmWDmdqeUNoBJek4wcg6SeFUhDSF49aKFs8XoKvmV8od9J7gWVpAij3oczCDHdWuedTeJypGkdgT4e7",
  "key9": "2VZeZECrTPXu9Yy6dDJkKXC7QgXR3gxx6qftRtTFeHkacVaywNnjyz17XEKJdrckkd4jprJHxFM8DGL7KjheZ2Ee",
  "key10": "2RfkN6jyLfUqmeA2BUheRCb3SqXbSWk8qmS5VoAH9GhGt53qRSrxbnC86yXQcGuFzwA4KbyyUNfGf6yTs1kAHSYU",
  "key11": "5qNRR5tJfMx6xZaU5riNbziFZ9XtGn4MeuDxC9gvVFAu6yVVDDUir25ff9Lsuem2tYSjvFsG44AZ1yuT3newUmTS",
  "key12": "3NHapz82NffWm9KsRCfJnBDZ1XtzbANizVG5PU5PWbj4wCzGeJUzWTL9oqFVBV8bfXtUEmiwRM3brZDXVTGDUxWU",
  "key13": "ji8JkvBPE4SwLTC4ixHv4DWsvBWnPML9fJbVWrmumicrego9eTeuEQXYWop7JAFWT77AchM55vkTi3zz5xwLcLD",
  "key14": "5o1DY7svW3NWCS7MNA41at8FMqWEMurt9p6rPVkM5SfgAco3r2ziPDZz9CyKqkREsmbZ8A6EwKdtiJkTL2oVgwjN",
  "key15": "3C2wAyYAC58BjeYNB9XoStd4Acviu4UpLvNtNcEQHmypsN8VgkWoxkHedq2QDPQ2v8msYu7PxmMiGBDN8XoShZiT",
  "key16": "5V5vUT9nT9zwvunpfkhz4CZpjyPUman5kd86MWf9AbujSjp2RCzjdfe8V8DBzVyWSg7pC1qLyChes6UTQ7P1jw7r",
  "key17": "48WaLF1a3oXVS6F3VX6gp5mFEi2BtK6CgxJtDwGFJrzVQBDyri7E5hqb3JYsxYTWbQhncJKktxnTcnXhfn3cN9vL",
  "key18": "66p4uGjsCJSB4Cn53Ga4gtsgjuSgXisZtCBhcrNJ4BAUdvPB3g3pvyB7teZAVRGY8QWimvHtQ7PiXU4DgicQuD34",
  "key19": "3JP17g1uo39EEv9ZPw9FGyd3W4xaKh87Bjd7p8Dm2WMEehLg8UaPvFpU1VEnqRobApXVix2pBejCn6gA9tfDqNJ9",
  "key20": "2fbzLa3R8pw12hXWL32rsudrAKTcMRsbftfYL26sY4BPXJJ9yX6sWNs8RR2YmMvqRg2zYMDRsUHxg9e94q1Qdbjp",
  "key21": "2f8XYxqEYkdYYpsHb83ojoZhUNYn7GR4WTHbo6T9VdhXGW6Xn8gtd61DApVRfPVEwC6qBwXeLZrSgcWwVMbWuZCx",
  "key22": "VKYjZYoUumhGXuGkf6ifMh7ZqfYpyxRyq99nAZRynP7iS9pX7Y9Cb6aBgjYtmsHT4SvM7mbGGu9Loj6ENBZQSeP",
  "key23": "4kGrPADYgXNNAEV9M9TDLNwrVg7cqDeZt1XRJ9Lcbo8WSsi1v7wmf1CTBcGtJrJ9KpZdknN42BbdvYM7mPK6i78c",
  "key24": "62RNPBP55Q9sitXgeFwgBqKiViyoHuN4AkRMyowc52rYLjL5cEQUNP5UwV5P6XH4ettCUgyXntdGQraCuG8nnfud",
  "key25": "53x4FskzA5EdQLPf9R1PNayoqFVYp3fc6WrL4LgFc2Q44qekRmMQX5Z4miGk2vwWQrSB6JBTJ721MetAkofkwNPE",
  "key26": "5PQLf5FZXVra5JEraLWF2PHxpwR7KNqKVTaZwMsSyyjXFGtRWZShsakzTTNupGGhpPymnvRoXfQBz8cQevPJRqs2",
  "key27": "5aey86NDq7FRN7jnS3DHmgWhv7qRxAfhctpMW3khzwShdGpoThA2hhrFKecZAHUGHe6q5ua9XiDTGBdvRUkd9jcF",
  "key28": "2LugUfdxcuTmXXFe7sGvGpU5BE7uaYomECzoGd6QoBYcKo321riMmUv1ohRt4yQqUwStQbiDBTHRhfiybdtny1QQ",
  "key29": "FAHJXm9Kw8Wcjf1EeTRp4nTSNRhamVJy3ThExpghQo6MwMi8WtMSmFpuiPbhZZnwptFM5geftkBTCd8s4C8mC2i",
  "key30": "3brBLnd3fqJ2GYUfnrvphJJ2jA7LWSKZyq1AFhKzcJGyTdQ2BP9s3SNs9NJjXn7E6Sg8QpzpLyzaEHA83ZZ342fV",
  "key31": "2X9xJUScKwcktmbxNgGj6xT5fVq9ayk8P7mLQDu6k63W4fB1Es1NjCpofMMwKLkXtt8xV4PT2wT324JVv9gtCC6F",
  "key32": "4sN6J8wjdqu4qJHXUQTpJwtAoR6XvxRTwyihGP7id46h2GhxFaRs4TMsCwuMdnrv7jMcihjP1DgDNCTfqyjd2WJN",
  "key33": "2MAuAkN7Y1chJsJ6mN4ig2YzgHVVPW4WkoNBE6Jtksq4DRPCi8pNwScTJtfpa8rLWynWr7LD4WGkxJvRw9WhPdzu",
  "key34": "62BEEyzsLzsdu31ExUQUN9sDdncukdAf5UxQZUrJFCoA8XbYq6zq4kXCrUAEUmJ3DthocbdtP7g4wPzGPKFBVuqC",
  "key35": "32SiYqs9vJYZvVEZUEmwPooqeWn1fbeMAu1v9JaFA2jcYPLM97vxW5Z1VaZyyQV2Dxz2vuLZ2ULdfXDcuipTTaKN",
  "key36": "2n5sS5p3GuZmmA88eQu5cu3EstRezj8sWBcMuF4DPb9LG8ZKsNuK71RPatY2Jq3AdgJbyuJXHdAceFcqRPw9QVu4",
  "key37": "CbNVtqVHUK64VACkt8oRcQAqsv2wTW2FzvA3zgiXZUWP145SJN3xLBmLRZP74ksiy26Lw2QEc5ssmJtz7HmzpFs",
  "key38": "z18czfTPHiwX9BZC6ba26EuqgWgwL9uVBXgKtjofE829HVWeHNcuhP25zVMc5Vaa6PokodXWGYzeMLvUriEcFqD",
  "key39": "sQYPR7pTrgVhzNmVEZofu4AiiWuVmFz5dPDKXL2jas6PUJU6SWxGZnBba1ZZZQpD3NoQpEhjvh5JYUzou4Qfkr8",
  "key40": "2HH1B3DxhBr176ujtJE8FuEjczwqdTXdJdLo3dfChWUofmfKX7PwrQgbCRKnnkFDtEEoTtrkMtMBRewX1EV25Lcs",
  "key41": "62rxUNFGB3ddHCmJj8o6jqrA3GD16LNg7apSHBfZ9bvi4WfCcR2LBqcRv7SwWtV6rGDd9qTZL5LRuKYLGG5GXin9",
  "key42": "4LgVVxYdafmmk4wA8ie9yXGDaggKvGYTsFTQTS6BviCPhCxLQG7HJAKLDdjRanCkVRmG8Kzvo2ybnoNGiA7GLMWB",
  "key43": "5zS5HR5poY8azMAXhQJ2tXyTGWbx7WsALANMuoLqBKZkYNUydPn6hNBCG2dYjb8oGcA8jCvcMKKXYQtddraYQpz4",
  "key44": "Ewqw6ZfgBibpyVTC2DGp5ddqwVxCmMEENzjtJBdHjKcYdwmoVjSLcG3QxBc1TH5chqWtX3NFNT54HjUcfP5aQkF",
  "key45": "5TNg4bnQ8MPWesoYo4aRCZ3BgUDW1SdHvNQtgRuiyTKJ5BsMKuMeyHHrPEo1pJRub7qBn8Y4t7DXGXrqoxAsizCp",
  "key46": "29UZRnc9DkjrdWzLgADbN15NXZ7BN7DnrqNrV71pJD8gsk7Vr5jFXpSCCYLXr34Ew3bQGyCHwJd2nX8NQGvcucoA",
  "key47": "64ER41RaV2rLzdAuwBRmGbH3qpwQ3r5k7iQX18ort7K3LarCM1yoDLEvrdTiQerALesJ4nqebybxK7Z471yCxoyi"
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
