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
    "5gj2NFtgGDGZ9K8PqpHKi2PuhJFFBTEHVYk4NjQ25R3PDZfFk7EM5v5DYc5mBxWAN3rLfJwoDNY4CiGFJVLu375U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vJYm65R2G9sGcHWta1E7yTCUZGYvhoGRChryQVyhiKjeXofKCzkruss3DRVv4jeLhH7eHuWTpDqk4JQ9XFa4iza",
  "key1": "65MhJ53FachkCKP3LtAhojbHHZDPfV8kLLt5kmZJkC6Nqhbmf3dS56A9HY4i4PZVH1rJjzr6hbBZSc9HRv6yefBw",
  "key2": "3pvMVsno9xBHCbiT37fVb1RbZ1q3HPyTQtsgZAkxdLi1vxcnxVYYf725W4VkeWGbf8CqAgfLirAW53BegEUj55mC",
  "key3": "3gtNmFV79MDbwUapKqiTGe1wwbQTik3tXChvTnx8u1JAzbP63CM4Cs4mRVt3tmZ1yt5DwZaFkNr29CoUNygJAqMV",
  "key4": "5Cr3tVELJNBEJPS86QWCoMjTG62rV6HZBes7wEQut1fQ2Myt9rMQt7zcDRb3dURVKjzLifF98Zer1XLjSrJ7i8pg",
  "key5": "4vc1r1TrJP9TB16h7iuSJJcSs3asAbxEzfkVANovMBjfHfcM4kcHfky2vrrK3ApBmAx5SGJLyNfDcqCcVft1snHA",
  "key6": "6Kn4z42Bf2NgLoNx4xR9RG9z9Ljat3B3peTtE3HMCTd77zc27iyKfLJBUphQa7dP2iLTnnj8Q13dKD2Evjchx2f",
  "key7": "2TF4Fgk9h4o7PqW8YWRsjU4k7R99obXfEVskHwbVRUD6CZoPUCZbnaTXuvXSXghUTm5iesPsD1Yf912GYGqV7jeF",
  "key8": "FSRb34YGnyxLywvkDQ6HxP6HVowcGNpCEAuQPEx6YuNp3RGULia3qFkerhRd5Tw4G6dUrZEAJuh96xmgmc7Br73",
  "key9": "2gu2ZWN6yC6mUHGyqjziTWVzNDJwTRBLPaxDrRGQm7diowUFFqZgiTFFaLAj3HbV158Zi1kURLtkCMMmRLfsbjmb",
  "key10": "aSmRaf7QTJML2RLxYRctVVgtiQWYeKG11VMyWMQ2wPjsSevcTErxWBHNgWnvhJ9TGzEZrzb7XJmEcZRmwLihkpy",
  "key11": "2UaCzbohrGgZNfxojuMC7tYsaJuR1CVL6cJxVSjsdhiDjTb1Ca6EBSr8viRfU9UvQvBgGFeTBYBbRABp8DQPtiKq",
  "key12": "4F7H5bLKNWkCuHYKRH8euahCBzDBacTj6DeQr3LDghwEtdEpdj4p5ajtm5EFb9djUDuxGZsZjgS6KXdR98g5V9SR",
  "key13": "4jGfyx29J93zxquTvMiNjXwSnBk8pKw8jMwcpXK61dCydZwysqMQtR9RgK7wwcvwb3qfYFCLL2KFUFg2HieMT5Nr",
  "key14": "56MiLMd4DPBm1PdwuyBfyppQ1FMeFUmDjn8wjDYM3qH2ebvpFNEaAy32KPpBunv3ejRRmxjMDJZSbbRdKtf8L1UP",
  "key15": "5oQvi6yfNw4TiMG1VLQCEsLtPFpcaEb8WMMk67TMPRFw3bidhp8onqoZRjaMDdwnvigVxKKBGEghQMcw4Djuvqs6",
  "key16": "4isLsfwZUZ2touPrNd9rtJ58n27Di4dPdUrvLxb1KzUhwd7UWiM5EgRsKpgXyUjR4agJREiPdrhDvAXJPXxHQFha",
  "key17": "4nz6zaBdSKHyAFoLCf2En2VjvZkkFbfqG9kvp4CJ44NHDABNsdJTqMgNZx2u7EHmsvMxJsbFmPkTBwFiMjoVfWrK",
  "key18": "2BxdxeYjjoJ4ivP6RUbdK4EippagNw81vBxveDGmaKPGYvmESAAgsnwGkbvB3qL1fna93YrBvicrHxSZAUwRtsdv",
  "key19": "pR912H3w3fuZCFYKWvH6g4Ddw7haBezqt8kcgVE8wh54FyYygoyX8j1SVJk9q6DiEBBx2zNqDb8roUHJWpnUaCA",
  "key20": "LUidxvsPBCdQEcxJjvxEXZQvJSWGsMzQqux993yvSUuMmMZEYf8qKUcQ9J86DSa6r7CRC6CF6izJGy6oj2E3X89",
  "key21": "2vwdhJtb6z5JmEhCmP9yijZ3nVYqX32w2cBRLenbvLtpLBR78wvdJFLVhg9vLcbXojnkWLVHKz5CxUMbPdED5otc",
  "key22": "5ptWazckHwpQk23b5hXNtPiMLL4rSLefiGbiprWife4dn5rrrtAfH9RaymoK3BC9tiPEYT9ATefrJsezBiSVEaEe",
  "key23": "44Ms7WJF8xBzUXBxcJQ1AZLKki4TwMkF1EUV9Mg4Kqd1A8xaWyhyKaCJ3fEoPtqCmft5PPXwjRo9d1B9JqPLa9Qv",
  "key24": "4iBLqQixtt4exEEn1WnYxLTkpJ8RH31gTMt58hemxC43kGe17FyRcw7z7nZxWgkZpvjhF117eqMfUf62vw1BfxvJ",
  "key25": "sS4xkEkBkJV6THSNepe4odaT6BNfSXyTAq8VsqkkumG7JCicy7QvZg1r6BrUuP2FNkeETgXJaJFXxdd5JdRtia4",
  "key26": "5yEgRTKAzUVUpVWVhDsBTWKcwrxhqhCXsoXL62s2Nq9Dzxp9khqEC4hz7ZjS4KKCAKasM3ftmymMn5oxxmJjJe43",
  "key27": "4LTKCxqEy4SA2AxEF6sYr2caNvbiXK6YWc9as9PJmGm87FEAJVzGLAkyrigChA6wVr4YhwLqwP2hy5Tb8tKZZkfh",
  "key28": "AjVWT46SKKYwM21qCtenjhk7aHRhJcZxCovzybUmqtgzbuVZ59GyitffXEjR9bWetS8hZ9yo9Y3G9KawReMWEQZ",
  "key29": "56HKpjFyhoSdsPzdvJt7Zqub4JL3wrzb1ekMZAbxc7js9JHg97CBkd8J9DKbD2zN7kGrvYXFfhioG3jaSKSBVwPu",
  "key30": "2dCjR65QjVs2KUdkidMfHQiCKJqGC3QqVDC9yYX3Rrfmh8dRjgcmQnFQRoXzL7QanQN7awjotUFpW3HG9Y37BfZi",
  "key31": "3YstMtVXh46NNB16YMCMSR9LaDYcXYx3pAjcnFJoTYYhPJxAPqw6YQBTEWEveFaHRpgL83aDGpk3NDXJ2tQdN2KX"
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
