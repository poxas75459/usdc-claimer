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
    "jGSpFQQ8RtyyTQS1Mo4mFiT2ym8HNCBGHEsuBkmGKc6EB4YZTzvHYdz8ZcPFM9am2DnkL8zNsCHY6FUPAjjb94x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gRh99jm1d5SYiVxG8AckfgjYGvf9SxURGgMVHSNgbSJ1kxCRxLGfbFcA7Wq4vG2JunnhcQVRPhQQMfgheMqGALo",
  "key1": "66DtHuZBtaoBzrTpprRQJFAvbLpkcDe7G6e9YKgYVgzjFwR6Ref4iDytTwaau2ULw2M64CG4X677D4LpiVCSvHKp",
  "key2": "3jsU2NWFVG4j7AaNN2oV5GoR4aiNBM4q1SqPNLjXovWzUBoo8Tbh9x1nVmz7WPKahWNK2KPhL35zWcLoWxJdJT5P",
  "key3": "3kZkum71ybWELrHohB84uD4Pm7y37doULG6Se9jyFJdKTZFSs9rqJSFhJ3b4So3WvZLdH2vZUs5hJcdAGiw8fdz2",
  "key4": "xxhurgsM1rqrpjPLAiG6Y6YHmMGVDQp3DnsCvU39aKv1d9QuhjgJvWbBe75XG86NiQeEQhnhgq8vJnepd6m73mK",
  "key5": "3JktA8dm8uydR7f5HsPZDU8YVw54545BTd6sq9B1wkyy1q3CvvNq1YGWYpuxfc3quyGYCPquaWw67Ddqr5qciK5y",
  "key6": "2UZQoRoFpVR2S9foGRLBmLUtxh3mdEKUsnCx6kengEWRSXotmsfPHUSMgHuz43YfEybTzVwdWJP4xX9cUrpePfS1",
  "key7": "5Sbj4DdiLg6VT6buqyTvRfatWcAFVsS6G2acr9JxeTUCKkFjXwmG335H9iFYuAFoeAjkySpSpoVZykf1zyVsWXHr",
  "key8": "53HbjuXNN9n9LfkLjeuwWdgSqHyFH57325peSNoctJZN7QK2DqWAZPo3Dw1CBhWCzMVcoEGiCvtab58R6MJEqsTU",
  "key9": "3QPorpyfY2hF8659UzDBEJJ1D5MQXK1vLWYq6JRsPQeJC1zpLzEstFMACD2sYFnxDG9LBSLrGGa9yiGjm6z6r4i6",
  "key10": "3PCTj6pdvrcp1ML83gPFxUhuUhL6W6568PR4vQPwNd8719nZHibJW32ZZMoYm2uRmgju4o5riDjYodEqH6xgXC1g",
  "key11": "4qWqDgvYbQtmAFGk1phRQYJYARPgwciKCkF8a4zHrCUBupb96GYv9AC76Xh5D5azuwRsN6XRRV4d9os5Kk9Tor6N",
  "key12": "3NqEB1EDhkAfsP6uMUZq54bFBCqh6nwM7xgfrgT5tupt6u9L5QGMZsnNNHgLoetsYBP6GAokjbMjXVp3e9oTn914",
  "key13": "5UVY78FqwgRG7WT6h6P5GqEKLMwtUtwqWRTfogjKUpdoTbjNSspPv9W5eWxejQr3bbb3pPM1AhV8KaiBSyKuPv23",
  "key14": "6682F4p16WJw8TUh55dh5isXm171BCxwApFLLfA2C3z3kZF7LQKQFUUnSsraCRZuuEdnJhVjuc2oEXCuckXgLxHj",
  "key15": "4FxviGShckWstdfk8qZPWHjrkXGe1f39HpMd1wXJZMkjYXEWsNxeNC5zG9zEprzDvWSiCMepTe5nxrh8beQtuzod",
  "key16": "2EKN4RHj7NFP8EfTnLUpf3XVR7GYSRv17A8tK5UrP2WfbY9mnyU4thaVRQr8qshK39m5M5XFJaQyXPhPFh7oNhhf",
  "key17": "5wYSzMLNPMRDUjwiVcxcUmaXUDiR85Rw45R2bGKGPtjKduucyttFjWokzCKwbBTKBjbLFMt23UZUiLeZwmpM3eKk",
  "key18": "e4Meo2S46MMHPvxfYP5dJjehqWbs2cziKpco75Ut8vCngqCMCeaxvfA2MciGJ35A4mUsNkJGWXxRU7upt6S3d99",
  "key19": "51RGT2p9LPJXExBgQ2fQ6XJy5YHASN3xX3S6Wh55k9zjcdwJw7etoLXv68FZoW2PN2B5jowExZp2Ftx1t7eZ4ppw",
  "key20": "LfX5beaz8fu7i26PXExKiC7fyJq8QJNdrr3jd4vEQTWfNXW5mFCXLcjGUngsDFT5irck7cS4xRfB7pbMYwtdsic",
  "key21": "5MNL96R1YYCaRa1RYm9z6g9tpQ9Ty4cnzVDSHYxSe3kuzZ3H2jDbeKkLD8DLmCMAan5Cg3nVgNnysvULifpzwzcL",
  "key22": "G6CMJwAbE8jJcMNAMW6AJjaCftw64NyqfckQEqT1EaTaheDcR8Dz7hde2L2QscnDx4hrpPo5gTKCvetKTwZktfn",
  "key23": "4zR97bR4QQHQSvDZimKSurQQdjAviUPF2YBBnpYgrQSZSBpaZxBBnSPRKu35jjaqKchdCPTj73M1skuGWPeocrDm",
  "key24": "4smSmi8iZkGeVbYeue8o7vhMsZB6GFsh9pET3NY7B5TdgYoc7F3DB4bgrAThq9hx6FoVoxykC4LXPbxaZxUhSrjr",
  "key25": "4pcMwo6XyNL6i2R2VCFd72UxspkmSdhtWTyFGXfM59jBPYTUSUn8AWU4GnjKmbou4PkzfDhWunByGpTLcww5xkqb",
  "key26": "2HVeyoHLbKngpqhT3D3JKoJvbLMJWMt57gaEsFFffcB9nwtQssSUHmgWT2co64y3V9UxYJn8CmUdoqn9zBK3ZcMo",
  "key27": "35zBiHqKfxYGXXoA9DJ2xp3iCtcpdta3UiqHPryYHrb5mmfBgKuUeC8qGZBQqpUq476LyAEtQt9TYxjtDuipKFHr"
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
