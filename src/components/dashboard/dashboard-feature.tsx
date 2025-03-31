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
    "5hQsq87KRj1hDS2jBFcut5Sj5UL8hkX2a8yP19UfyZXqiQ1pURmCVGctTNzdfG1T4mHFfqRPKy1mumn1N7rX1eV2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g3zcyXK1XB3SderVwd6eWRY4HpX4benmas9wRu3D8F3SgTBzztJw6xhR1a4obcULHcEnRRmjpGJsEyncuscAtue",
  "key1": "2qNuozjUbv1nGnXugTfDKA6nM2gxVMjub1YLtxmEhXKXgKJcb97eTW6Gn24PcPpmm8hfxhHwd32yDMZEubiHFzp1",
  "key2": "2pG94CTB7wJZHoqNUZVQso6FrW7Rt7JH9D6gWLF4fqhWUWYRDAgegjb8PEYo5E2hFiGLy3TkBRF2aMCLBZ8vGBX7",
  "key3": "5QDJyXHnzueWjrR7DhpdD9kFrk86ptAGwqoxxoDbXjAEQRJpkwkEAbWEsbfRTe64Hjss4xi2jkbEYUBGDBAqiiqd",
  "key4": "5hk5NrGBgTJtEZNtQtst58Y4qXfJ5S5zBqZhnzbn5QwFouMQgeTSZ7JLdkJV8kecKAWEnNcPXqJimGCg1xLcatDu",
  "key5": "2t6zLykNYFY3KQoMufTQvfByA5X1kqzVyEjfB6siye42GrVs3Pjs81RApqGrAdyeZkYp43MUQ7ccPmmdtK8zzSaP",
  "key6": "3U89Sgc49g4wtNu97JH9idDG2GwbY5yE83vT5CUtWGS1AQ6Jy2oTkLYT2zvRgMNsr1qGxgJwB7yq1KgCVLypX5ch",
  "key7": "2VAtUFbhZ7Q1n4sEyFqBDXBsR13rKApN5haJsnHc6udzxJEnCjHVRGja6MgambGTncRPTv5vaGCQU2HKqvSJ1WNR",
  "key8": "dFZt5CPyhS4RiASAy64ErekwXhCpS73MCyC4XKhsMQfNvwCuBuTB1iitTL3wnWxDK3NsWVjCAkF3gAbof51rqCz",
  "key9": "2QsViqxiGCvKwyCdqqjrfU6zZPB9sNhXpJ1inGDSeyk3PoERoAsAETvMuz5xM5YbAyo2bY45r6VoAwZZi8umKdDH",
  "key10": "5fhWoGJvUrrTC91TDDHaAn8TSuyeosVQX3z19Nw1Axt6GXySLbkiRh2P7peWTp6aXKVi69t1NaBP1ZJCSJ6DtcPJ",
  "key11": "5KPM1Zp5WEAR1M3Tq1zejDw3rfCFD5unzXSpqXFBaPqRqKE5KFo4TWx2tp37trjhyy8NciVSeXmgZWjjKCaCexN8",
  "key12": "3Uv8UeABPxnaLPJ3xaJvBnHBGaBBy912zAhsWYp4ocfzKb8oyH3ndHuk5RAsXiYPxEVvTLkyu34eSvgZimEZqnme",
  "key13": "5uLo1SeZjJo6xHyfJQGwwEWkxUjczZ8R9nBZVvzTXkSjB5YKiww36mqtZWRAZAmDstPwLZEVirs5pE3wvhLCXofc",
  "key14": "Lt4bRnzzAJ9Hms3tZNJfymPx2MJr8xRroQdVmBPtb4GEd48RdNLAhkQdxwwxqUwjtAZZb2FPHoSx4FvuVsduwzR",
  "key15": "46oe8SEztG8g75bk86ryoDLwrbYFXYLJ33GertV2DXWgiLhb9tfWbhNARXwYowrPw2bNREmx6ZSSbnVJpxeb2u8Y",
  "key16": "2ZGLiVucqp6bics5ub68s6U3LGsvfZSgFsUH6L9uB5wJ2NrmxohVfcQW4tAzQ3bM2mpUh4xs7Mk5Aee544yd1KdY",
  "key17": "2b3cVa8XEAPgjKr4h9DWFb8a846KxEnsofH6Q2KTgs1XmewPGxrG5VwBSXJBCyFrt7hhRq18AvpuSDX6jLaUYkYP",
  "key18": "3SVYkonpbZHZzfYojNvqaYpPqHg6oR3ViBgLkJVzV2KNzaz3FiGhpt9hJ1zPhokvD7BVarM1LvCKGRK6CVgm2K8T",
  "key19": "4R32uxaZAhzNQJL3iV2W1otSZAjjikKfzUuwjNoNHDrTdTeDcX81eGqkoUYwNPCxUGuPtzvA1KbR76gMvR4jvTCr",
  "key20": "23kC2LKG8jtQNJXkn68WzkLvd637zhuHqhTiSRBRhphNKKtvRLkhsDKq7Bn7ip6GgkYUrGyK7KDLamG7hmHTwxWR",
  "key21": "SdAaedwBm2gcTuT5PrCWGM494VHuErdj9LRSiKoR9Chw4GnvnD7PbhQBARBNybobVC6kAJBRij7ZLmkkQwQPAFC",
  "key22": "53Qw7exvdcwik6RJ876ZP1wRRX3dZ5euze6J3CdyPxJ8qc48EiG6QsmDBTkyCDvveNimatifxKhyCLT4YqRLzPJk",
  "key23": "4Lv29v7NAx7Re1Uub4WyRDY94KFsbuSh1YBzYJEAr5UGxKYNeQnSt4Pw7w1uGBjgbLRBM1Xyxg4UTNFbWR8tWvBt",
  "key24": "5ipScvtSAHAcxLW41g9JyQo6Vm1Kyb7KysiGyAAfixbctffpKj5cfo5jzrkyoVmCGES88PZjzMdzfBLyWwFsZR4p",
  "key25": "4Ls2eoVP1QtJiJEy7xtj4pAqpE4q3yscsj5jXym7XnvhKfgXDaaE7AQdzWMamQgk93gKjKC7rdkvHC6XqtjU5MHj",
  "key26": "2QB9i53iKxh7ZLYNYBgJLvaPMYm9z5yVbUUFyPo6q1LpUyonaQm6teG7oy7UXYpQb1mPauCc4wUjAZRNuwsugmoC",
  "key27": "3cEUrwUd3GNx2g1VoEuUwp8VkaHX5dedh25HiCME4wSQt3VhuDMXtLshGLf1AmaUAL4uJYz97WHeaYMJbVGEAeBA"
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
