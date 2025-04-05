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
    "2hhTSCpZ3kkoY3C2SNZWCYekbTk78cV1PXmVqapfvoFL8drt6u2BoT89nYzASChzqPRaA2oMZuuimoWfRcgRGcko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hW4pfsn25jHS5TYYprnFQ7MJHsiYDn9wGnTG9UURWMJZqL4hcFy4EqdA29MuP8Dt5AGcKxV59Cqyxi3LToFuHj5",
  "key1": "4gYUh8AxnP8VZY6VZFxGkNoDdgNprbzLUM4GjWJbB5zhQivTMuqZCEQaMUHhNKWGqNJZhLHYoCCpBe9GG4afersW",
  "key2": "5SwtKv7jJCt4Fi6hocVbiaLPNwH7HkF8ShKpZPK6Aa9ZwBe37D3GYq2T2RVu9YqdG2Ms31MD2Bb47eRaXgkwqSXr",
  "key3": "HyjWzshpJCtL7XZ4CQuUCSWTLv4vxcf4E2mjwJjD1ME9okHYfRetzxKfgCjbKpfptgnLrF2xfZzvehES7Y182eu",
  "key4": "3KNED581Vb3kzFcRpbVrsiJSchkHhoxGfCBV9ukrf2oU58Q4bTTEjck51dXNt8Mjd1h9MR8pZYASewpEbsQSzr2j",
  "key5": "3NbfuxtezmJtY1sx7w4peTFPj92Bsdt1QHqg3kSH7fQbcCNwsXpckVCx7czy3YvBkUiFfftQqEFsGgpmW9YPR5kx",
  "key6": "5DhrmLH9vbjDbzLU5qPVVcRyM4YXFDAQGAbArPhCUavAX6dcW7XuLqMF43Vs4tq9LeRCeFuT5nmymxuGWnVDpx7m",
  "key7": "3ECZTNGAx3M6mJUFdpnYN6zEifxeC6FDBwKDxpKy6YgpLbHWKsSvHzDekNi3DgUi1hpuwBNawKTW2pjGpRL1NfnA",
  "key8": "TETus8HjHFe1LViSzZuPVShtA5HQZjcqwstTXuXDGMdgisrJw2yKNp6gz2Nx1NEmeH3joXTts9ymbmGHbbMQNNv",
  "key9": "mKecpXuz5Xh6VyySoqaYV8sHQzybpycmGEq51oonU1ZunRNrwEY5Ax33AvuXtiZK9KdDLZJ1RL2Haprz61iFi21",
  "key10": "34k4nxtGSJoBqm4oy8w4aD5v2FJnkUM39dKmcD6eUA7F8k4JGEKcmNu2xdQXgSyPxfaeH5gh6LTtjnvnR7KPKdH9",
  "key11": "4HnJh9AeRNk2qCL893eCzQMwEKYsJJAoTytHXZMrztEJKfjzniuBfMWhwBi21gW7B9UVhGMD4tVyNax7WtHuKEYh",
  "key12": "2cbLLcNqbCJgbyJGZSHASwaSHRYdJnRJLkueTL96DhePM4SpMUVFxxTcQeydaGKmd7NvrAYocMU2efXx1v6DBpy5",
  "key13": "5G6WDPrnwMELAith2Kkg3ac14BuMjx7s7p5aWRCR8zjtVgKvAy3GJRq2ZH2YeqjpGNe63HRNFeUfg8mFmYDPckDf",
  "key14": "2aRDVjiLryxP8NLGFtr3XWU3nrZVwqonZ13DM6Ppg2xX8Hpo1LpmBDp2b2cD7XrYZotXxhyajKDSA1cKojx9tnuz",
  "key15": "2TkQjpsRosri5NVjf2t3TAS943uh6kEetFyr5Ea9Khx1wW1MKhe8AbATQfNvVhP6KLtvu7kdJHr6VxYnKe7Kwgq5",
  "key16": "3M9HcUkEJ1ytbeHgz8ZPaUndv7obAhXAJANKDAeqcxaw5UXaEsQGT4ozpXoHxpKamfFvnWRJuomX7SgDWbV94oLc",
  "key17": "454fXtJreZEGqj9jwuXfX6pL6NRZTe1F4W1hVWeREPEmnbPuXCjyoG9d2r5uJ5mUXYM1QLio7Sd3uD6HYinncGbZ",
  "key18": "58fsdpBV416w1CBDbiNCtCpqxLhD7yTXarMpCvre8ro21Mjtj5ivjRNVHUaDPwdeDouHjrBbDMRRPeqFHfCRiQKd",
  "key19": "39Yevx6wznajx3AtpHGPPXKw6Q99wv67DCKu9Xn3aLZ3otPy7ZpYjPoNu4pB55vG6a9kR924v8Zzb68MhZqkgAhb",
  "key20": "mBr4jtHNtsv8NMs6pQtNyd6Y3vmy2dYVPXQpybSwmjekUCWexfSuwQbg51h7AfteFxX6P5qDpyetHcSEwGo1rXc",
  "key21": "36fmUUfXnYKEDGwNziJ7zJEN9bY5cHacvjG3kGRVZ6E6Q5FH3Jun6Kms86CmjFYpaAP6ABqLfKrgEk3jHm8SLLL9",
  "key22": "2mFgiHeT5LGrzGTqqWCfRrBSku6Gqnf6HBprUGav9iiJBrxKcyKW9wtr1ov2SxYKv1KcdrJRFxVvuypupbBanpDH",
  "key23": "3viZRZTEMCi8RkmgReEdT9KPcHGoeb27Xf7t2Zq4SHMSq6jQHoYdcQ5cMAQYJsYJeLaWbvDWH69XcFriKtegkNhS",
  "key24": "54U4H31SMDdCBdwsDcVjFaT8nb5NoiKfmszi6EspmdHKjMc3dxHKSRmUsb1bePcqwSRPsLKxcpTWMyvAzvdaKipr",
  "key25": "22eqq2PoDGiMBJ8qDTdtxbJYKo8EnpF7PNd8VQPWgcQH1p4ooXxaCaFT3gDfK9GrQniJUeG5dz1JUfRU2eX2FGsU",
  "key26": "4yqycHm1ejqnB4WxcdbZ75EZaX1cSMTpGcXrAdrAPnho5fdBjWsY8ZngDVQcM78LZBwznL15KsyTH6CigoMMT15x",
  "key27": "STJydj6ZD2D9gs4X8wPUabAGbcF1PpXnBoLKTR5PDEFPqcJTPfRUpMBgW96TPV5htNoQ81JBDSGDMjCCmTZjcAT",
  "key28": "5AwCu9g15gVC8D9XBwQr6jraLkB9bnRtVJoiEFC9kvDrWcphKZgcedVggpy8QQs3iRrWNCbxpTz47tAwNaezCQyo",
  "key29": "JB23Locoowqf8fUJmV9YcfxKsUq93YdyDzcFWgFMVxr3d83FnNKZuZ5wr8MxzKSVqgvbWc6msoFApAoJnQaXw81",
  "key30": "5kqXqRPDGjCdHhaQWXwK2AM2Bz7cYQH4DE8iJ5QmKFaqS4HCuLpWmhUPL1S9yxp9MQNiiPiL3v49H3bLHnUNJ1DZ",
  "key31": "4Ew7Hcu4B1KtovmpVBaZs8MsGdKS4H7RvHvhZhXXWJPrQviNk9PHFXzCJhmCYgQAQXq3wd9efZVFUWNvrjugofBW"
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
