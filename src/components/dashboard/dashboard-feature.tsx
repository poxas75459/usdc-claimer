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
    "2Z6LHqqdQ6xneAPdWMgaVhqnVUkMa3CpAXx8rY9w17VSS1RyWqk1aAAuGmVoXsnUkqdEcghLbYGzacGaK4gmBTxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "83bqGLNpCDrd3FfZte4gYkm9M2mYptQkg47R6PpyUyVw8MqeYumJcoA57TkjwcvREcAhMQph9jkH4HC9xBz5A5S",
  "key1": "4GT97se6fGX4Cr1Zvo5CkyjQxZubGmueXHsNsgppPLMRGdzHknKcopDP2VAC45uWQwSieybnxTCEcbNVEFBN18bn",
  "key2": "21CqZ4L9jechi1JEkKUUDGRbZDUdxVJf1Mfnw73d42MMwGJGxQ6pUQxqhhwusYL3QjREMc36eW95cWmVKFJwpfWj",
  "key3": "35MiK4oKw1medrVnRtdKJh9wJa2z4WDFXbsdVmF4162RVtMJqvitEWFVC4BiVTFhhLgPnoGczfCTsVeASyZ3tFE8",
  "key4": "8TG61Ec2HT1uk27DcgbjutrcDFUSoZCAf2iD83NNYjzUPwYXRwMzFPfrp16Aid6r9rAEpehDgRGo5Y6gfpvNmdb",
  "key5": "2Pv9gGLhSCoPmo2qUzMF9Ug2eUsduBhphL5x8Du4RK9p82os4ybYesPZmTFYdTuLqZsPtDReP2fGKGvWGg44L6Xv",
  "key6": "4uHXKsdu7FPPqV53wn7KUYSZ9PL8WDhnonFMEtufwA3enWsvPbnA9duqu48jc9G8MvrVLdjK9fypjSeXLNGPUWB",
  "key7": "Z9cCLsDNtRyegD2W8m2qTf2DyXDLPhf2EspFHMhwTgiBJ1Cj84yi625z6uN6tnzmXFeRZdkAd6JtCYscZ4zjASP",
  "key8": "23ZxEzH6YLFZozTjGp2W1GHQLkafvZREaMYaYbmkXnfTPPiDEgTMEy9t3tmAa2QtoHtL68b6wRsjiJ77riKMarRD",
  "key9": "Fo9ZUHBo9E7o9bxv1oCqmxLsjM6UBXRMcNmwGfTkdzjwwCw67gTC9Coy83pLyyesyMo3vBGWwwcTci1pxLfV2p4",
  "key10": "64TtG7riufkxpG1oNRZ64L3zFs332HzFuL9MjFAdi1x6GDvtBEzsoniZgYBaptSecXCjXpfx5pKV3GRACFQaJ7Th",
  "key11": "pEps1J2Vjm4GZNXdTxrGKmoH3mVvJcYmdQe5X1jey3hARbGwS5mNDx9cfhR48sw5ohzcZnQevf7pZVKboSAYdQg",
  "key12": "5aPd3AiGjzj71fjUbz6ExWaKRLBQe9y5G8AY2r4DdjmnCm2UEmqgm9a89FtxoxXHGrC2trHq9xi4B83pDQCfbBo6",
  "key13": "45evkaCwspLyTrjr9ZsEtzV7xJnoJcva3AhYQLZ4rafzgqG7e2f664NMuC6m1wen58kLZ6TQQmg4h58p3qEJdN92",
  "key14": "26WxP1thXcg5aahLVfE23sWjGAgXsoFdxPYJc4AGo3EJTrdobPFUirYmcZfXfz6CAAG3wpoQg9vDVtq9NgujRrVo",
  "key15": "4BUkB86L6S9wpuzEt37dHX6gWrxU2SDfCUqdRsDVFpGBjEY8tqgcQirLWAh5st1hQwcWrN1xVL1iJkGXzKRCrREX",
  "key16": "3QKzbUsRXJDxcH76BkbSFfRswFwRz1Qyo82Ns8YFEZWF4X3ew8dmKfQkeLNxbxiEhL2CamhtieJJbw2hB1haJSJ",
  "key17": "4WkTu4H2DZVQfxkVzALrQ1dLFk8AA1FtDim1nQZRUhE6124nhPy43XSyTrXDbjxNekmuaD43wwxRnTxM9dvy4dP5",
  "key18": "sjfDQZzRmWLN6oRVNQXEBA5XLoDHhscDqqEeCZyq1L5kmcvqHcjNVQ4RPJr2bGemxjW8Zq55RbEfnf3jeFM58Dd",
  "key19": "2tGYcVgExeh5G65STxtx48PJmbyh4nkLSaDxeEZN9jXgXdnNPHkAFXGwbCCuWGzhALJXHLRPMLEztxVtnrqc2eB7",
  "key20": "HVNuabGKZjCNqm8i6Ga1isvcyabctviquaKUBsLJDAbpEKsr33B3tHqaCqp8qmvbmnBwRP3o3DpprutVrS2raVu",
  "key21": "51fHKckWcqLrPNbfjCvypmW7CjsUBwMJ3GgGGViMMHn81HoCDvSKgWCZkPJxP5WczS4QdjqHYSphdEqdUDn3CZLZ",
  "key22": "4xwA1hek4wWpVEGG8g6H6SsVCEGYXZvqhK11Zerx9eYW3WPi9pctYoUTT1rn6f2coBawM148D9sRujxLPbRGuZjP",
  "key23": "3kiwPsoG7WiUcsHAeSjvam7LRhP5ZTG69cK3YLPXZSKHYW7Dc3QRAFPdiMDKZLdWD2XfU2munN7DgXrPi8b9YNPi",
  "key24": "3u5ESiFyKH4kbcxwhivQs5QCdSbZsvoBkkqy2ttVd2XxJiKVDoK8cUEjtCdF45jaMoczrEH9rDyV2NGdws31cnre",
  "key25": "5m82umv6L1RaYs4r98Y6cxSfD4tQPsoyWAD8MEnTZ7FEcPAV9v4EMwAb95wNWQE149FA2MgA43vTa9B9MY9xf9A5",
  "key26": "cQur1aAKcT44z8tspdxkmyq7QdRst6LCK6XEgNJLijDzSjRzS6BFQ3TzyTrXVF57QqcxYdcKGun29TojUtaEe7q",
  "key27": "4r5K3yHk814kFzevoka6Bcz7Fei5cDa19pJNNBTzeFR7PKSHz5TwVribGvog3TzU3tWTbcVLejeKa1MonD9W3FkB",
  "key28": "S4hpMiGCvESBL6smCZQqnj87tXurJZRVmP9XxR2bJM5yLQ1J1aMG9gwijPSiRX5SXcZQf4VBLRMG5G2xiT9baZc",
  "key29": "4dUmhGeaR8h3WfwzfT37yrwwLhoHrR7TSoQgnV4KocLcxKpnpNVfbPMzY41QYaKjPua81g24DPaADt6FVMvH3Cj1",
  "key30": "k3QExCWGTehvN8VHd6dJiEEmDSYyWbdf22aK8LWRLYa66zoCt5KzjE6kuCHhnPwEjDozWVsu6dAfhNX1pvfS2SQ",
  "key31": "5hFwwFH9B9bVYwJmDVdNnYdtJWXbo9oJMcDSpqGGgmkMSeTgVf8ZwK8ahu1TiF7pTq8pRYR6M29qdAoQBq7NLYYT",
  "key32": "5j6aSx6ekHyPz93LUAQaf6mudPY6TWer1zD9RwNxw7RsCp8KUfLtgFqEiSs334m7AcaG9uLTr4AtWhfV7ro9cQ6y",
  "key33": "3Y5rZVxQyC5zZRrK3ceJ1QjDishFemCFbFudzkjMoQt2URVW1CFPGa84XBFHzmWnXELjXkkCKERpwdKin8EuMrP",
  "key34": "39UUyKt4DLJMwVjDeLu4y85EXtqVDJiizec8Y4FJQ34HoWgxHwQrfbvZHNTDBYKpdUMpRhTd33XkV1oo25WPRBTh",
  "key35": "5iAfrNPzWaq32NSprgBvMVideC55qiJnb46scRU5SAtubcdvFeE6jjeHNWmEVMX5FUzu8Jwy2pgMfL8fqwvK5qV3",
  "key36": "5ztNxKwDfR34ChUTsjnsKwFUVXCoW3eDgnBYFntu6bEG7itYCTjbLVtZCjc73e2UW4wJoYCtqipKTL7G9P5CFdDD"
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
