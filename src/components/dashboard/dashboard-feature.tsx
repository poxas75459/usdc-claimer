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
    "5AnuoAZyXFrtuYvmMH1ozjuhHMhVgfi4Pv3EcJVi3ZdvzqiBGx358Ro4fPhqMnnBtk7ZyrMuAgYcirSEKnUpvapi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zb1LewNVZtPVgJ9P2m2eSorTv1woR7xZHCFpMiiPaoRyNxW4WJaiiqZ4C6XrEu7xvXKgSJDJmzVRAGkKkuJ4WQR",
  "key1": "3dDv9JEZaGA1Q4p51bmrHv8pbDR8vtrijzanDa3nY9aqL5cxjevRwDE2tGVjGrJpzWxShWkYCYvbino23852oKPK",
  "key2": "4J2hhA16Va9Z4vWziJBwfwyVJFR2nxb9mDfiGxwcty7ktnG8HQYSVH2CGmwsYGxbp2Qt5xGbWjnhsHykkivLvPHm",
  "key3": "r4CLMGkErooNn9q3PjDw9xJY1LQTt81tnhPHZmzEa6cn7nyofecXeLG9iRtxRencbcMSeiYMTM6MfQTuCYFgwUG",
  "key4": "YAiEq9Gyhw17p68rVLfosVANgqfZHdDRdBfKQcDJw9phaYR7wxR9bSXD7ab4fXSgM596HDuFZa617Hac9ibUrYT",
  "key5": "TSKLwNhvtEU4HNCBbkhmFqrvWbkRovjp66BfrGUs6x5VDxudBk9g9oitw2MwXkihD8kdWtvfj9VkhERHhMtrgpr",
  "key6": "4k1YNtZgkqzPWukKYv227FyUa4aeFtYqjw6NqXk8bGeQaMRzNCCNoM6Rhv6xX9tJsSqQWgHLio2vsmgQYHk8Wez8",
  "key7": "3nXFUdi92rxvSwi6CgbvUr8dQV9qAQyXKNdoyF1FqGbkFK39eCtPHyUBkWX1ywm8XjKxbqNsp1H819aHpCZo4Qa3",
  "key8": "2FiX8SA9Ty3sCQuyC22JvWvPnNdPPuNh3aNSrE3XAdRe8ViH8Xc24bwSLq3UNgM8G5f5REQKWJrfLmLmGfB5DS9D",
  "key9": "66YDnasb1zsrSrjNmRcwhn6RRbFdZ13SvvzRgCvXxg6mdQSiYGzv2DKRUN5Yw3Z1w2F8tSs8LR7KD8tFYtJS5jvc",
  "key10": "3eLY1yKo6ejRSTBaJv4kpNGJ2MiS8saGdg9Ph5itMnZq9Zp8jSka8vHrqhXKLAxSAZRaVJ7pdu1qgubeeSadk15z",
  "key11": "2jvcXR53YW9LrJ4h9U97ShqEZKkBEmmYVzqpE6TcBHt3zkTCKD2Xi8BMw8ss8tgszStJvgb8FSGnoa2tJ84syUg",
  "key12": "627iM6G3Nh3DtyUhykneb9QN7nCiS75o5GtFKc87PBdyCyBk9dKjaTroFU7qYxNLWWpApqgzVwr6e3vP7FVmXNa9",
  "key13": "2oE1R7Zi8ayoZWiHkywQhPQR9A7hFkAneXeEyZsk98jddLhjmusthFqhCUvJj3is1Zz45vjGwzNXMn5jh58M41C3",
  "key14": "2uJNFX3aLbq1G1Wtu5Jz3h77CpGkMR1bdRqHFNFr5ssfkhce5bVonMvQoPLFgFrM1dGnVXS6GLcxXiPjQLk2PYD3",
  "key15": "45wHDv9jbCEu7LPXCTNeoN5LcypZsfbNjnUnvSNuLm2g8or8u2PrKfXvCQSvodvakVQVkqBqnUfgsWH9VHH8ebHX",
  "key16": "gbfYNFtTStgWUesZc1mtFTpfQtxfCN8mfeT69GL3qbBHev6K2UgFVpxg3C7hA5AAgCEiuKx9dywdouWXh3SmgHp",
  "key17": "43eiMsv5bXP5bStkwCRYMCsRS1rDPU5MZSvLBRpWXQ4RoqPdUn83v5TxEHGZLhLqc4EHNCXFuoVfXykm4CVP7Mm3",
  "key18": "AG792TWAUw6JQfvNE5Kh6fvBETuNqfQJFbUWnrKFXiKwy5G61Vdse1X973cL9mZ7yy3aHtUbSMUsfHqpy4RgnTo",
  "key19": "F3mFeLX9RFWcj5K4uoLiNQyPRPpkWp2ZNiuevrJMUEW1fdgMr9Hti5CcURYJXf9un4PFa9aYcuB1XVpUV1AAbXm",
  "key20": "3UsAPRX49XbL3WVVpa4mjmpfPyrTHmgkVA4GRSKbtpSZrzfrbpCkhcijzb5nus42wnLPLgJP238B3b2WWudPugGs",
  "key21": "4fVAyWy3CbuWtLEs3TBVhpwCJc4C3r2nReWSBiHv6WuA2MF5jPeDgoWdwG59UbuSYtEDGPGWoe6GaHg1d4ZhVode",
  "key22": "2F3Xy5FH41Uay5Fdh8WzuzMLTbBZYGP2UdUtqchy4zmWN4FRm1z7YFk6KAwyVUbMwwz6KgNnQxEabUKNLaQmZNit",
  "key23": "5R8JPSY2Jta9DYbkcUQyzQ9XHv5UBwhckdYSc2aUWfiHfBSyrCLPTiW5rv9iReBoty7XFU9AhpcsSScJ94ADmydV",
  "key24": "bKQqbMa49NiWSMbUzvYEPTDHLo74NUwGzyxXdBDuXySLP6aXev4TokQwv862rmZkGC9a9bTpYFsYJF9WSoGTgH1",
  "key25": "2XemnJceADLLkaCxQUA9uAXasvvC8tPqPdpk2NTjWsMGccerdoAjznzQ7Uh59aTYTQC3cBMpgPnY3EmTCNy4LEDj",
  "key26": "2kLAKAPXh2t3e4GFnvkDHrR2tmEN4GNBzjNkbPhmqRqyb6jRwUpGpcQAh3VD7tWTAKoJZk8gYrgDvvKMh1KK8Pp7",
  "key27": "4DTfDyH44DjFozu8LKEE34GC3MtqiZUtdsPBzvn6sk9QtHZEA6NBMq4r4XDTRrTWRGVbvqSAKXUeyMM2fAu9mRhv",
  "key28": "3nXeEcJ57Yadt9vkeXconb5o6AybWP8JFqfgV3hHvqxkpwZJrTYzjWoQ1Y76qtRwu844zd9q1stP6rbPeV5vx9da",
  "key29": "5Lz7MyszjtkzyGB2gLLXVW86qcsjnJYxd2tvgbtJoHfeSzS4sHKdMdoGFMpej1N7fpt1N7fCFFDH72Gwyc6r3iPD",
  "key30": "4vGQvXa6y9H7RVTi5EE5ZCGnGeH6EtJeeYKeDBqfS9tTjuig24hzdetNmJF3hYkVgBZFZmRz3FHENaVwQ8smo9rh",
  "key31": "2rCgYK5EJVGgfASuNW4MzqCh9CSjEBaDanaRahSimp4kifgDtN3sJU3GzVJjQ2cn2D9YkLDqmoKdjSuQnjmea6Gj",
  "key32": "53be9yXu3jaLdpeR3rwAXDq146hS9ZZXD9BX5UWnCipNjuUMPSTXSVPDt28ZKu6KuWP1szZAfr4b5KPB2YaHPvNP",
  "key33": "4DSx5TGRgoWe2R9Crii4xpQ1nehToxfRBRY7GLia45Cpqx38NeudyCfFrxfgHsjDqoDChkj5rzo6gXgcNuxdLUde",
  "key34": "4TjUPG5Tjso6Szykbb6t4surGPFLzf9LbjvfcTK46jVGQhJTt2Cfjr48bAoQGjkxasYsEZAFWTuYmV2e2ZtM71Jt",
  "key35": "43Yay8quAY3MXyNR81caY7ywAkn7pECpaxa92ST9qZTySGknQmPsn13xi3xUA9ywTrm2UVhMKYmqfZvF7vDgvNc5",
  "key36": "og3zRyZHgFK6DvM87RBRn1aRJwceDh4tp2zWTbFBvGm8cGKZEenvwNQDtQC7PdAESSyACDEyBX9pXKAULeyA7wD",
  "key37": "2qXNxUkGWmzxe3jfPMWp98ENu6by5qoDRxN5BiBUcZYTJKb6MfMxDyhL5XcSj2kXdCE2JAVAbzJtunY1B1ynCRB5",
  "key38": "s5BHjSydg7F64QfyY6c13eCBbQni5woGoLQEsxJmvs6HzT75DhJLAd2srBVRwRjzK9UUes8gVZn2g26r1uzkvcz"
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
