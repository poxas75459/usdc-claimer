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
    "2LdXkcUajseUAwvGGkExhk9J3TdQwEPftrhjNMhYxVfV6X6C1457fU2WVTyEDfV7aP7PbhtT8ZNmQBpj9cyrJZCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wc6egvm1TETKsHfLcvjNQwWaAmTSZLrBhaQtZFPEvUKqnwQSpiirZchRg74zfSByNLxHm3bVhaBbMh2RhxCEWBm",
  "key1": "5hYeoa7LrWmmZs6gd6sw9GiRVHiKmDJd7UYxEQ6jZRY8KDa6gdSn7D8ssTP1Ux7ZQZR19unhfnfR8iBCzj6UdBqB",
  "key2": "qUiaacCY7vPhoSCVdsu2cHyTodfRmQZGrbHQXLRwpY5WTpJypFukk1bA7nuUifgaJxb9zwv5KkZ7hfq64w93hB6",
  "key3": "3RAW9LTFLaNPi3jzMk9655rYV82euCpAr2nmQpyttegtyqMYqfFbJ8EiUj8zhpKBXpmr7Y5f8UH7XVZS6BXcBXHM",
  "key4": "5G3nL2zzMNtaHRzLD5xhJq7drcBvx7Ub4VdA2dbdXgmjkKhxMFmyNKkesYusdNRoLekiVQaqMiWMH4rYJ9FB1y7V",
  "key5": "5p5caUFw5yp6Csmi9AVXWqasRawchH74mKhtCnoRYKFps2PpJ6hVVRv4HknAX8c1EFyqV1SFfi3yebk78J9oP1bE",
  "key6": "2FWqQfdKyNu9tFWCFpXrhZMrratgFkLB3zz6kGFCMUuKkQkTaib8csQYu9ott2s8vMVLfmqwtbDBCjvs4BgXRz95",
  "key7": "2JtiM7xqtuiGDtctSViCiMiRFeuAmLRttcybfPfMAJ14ZHRRuy5ugcF4q6cZLTQxJqcGq873VYthRyvkH4yss8wm",
  "key8": "3vLLJyFVt3WiN4jjWHd5E9JKCWFCauVraVHY5ixiAWhSZoNbFHN4YAGP66Jjd1Uub5QkX5kX9yJpYumwmt83zEW9",
  "key9": "2pQKZz6LpUmDRmpHKp7CypssUy72ijbzYCpAdWnvXNF4rpGBsfkXTJ7ZZoHyM1z3wqrWXWJa28iomL7Y7vXuGCvW",
  "key10": "4iskSKsGX8FjjAzvXn3t4jDSBqvC8VmpyV2VFdxytEir6KoUHGwymZBfVoLSAXzerELQXFwEiZTtmM7D1uTxia7z",
  "key11": "vCTmhsUVYpj3duyQAwiVuGht1H5AJwPxoegPCYPsmeA1wLTMptbShxp6XETbbxs4beoxifhLG9LGQmMmwnB9Go5",
  "key12": "3frPJLU8N51yd7JkJQo6xoipJzYdWyzdM1K3iX9YiwLLhqnUoyvzZQ1DXnxyiyH8NarAdKZoW7Hz4dDRT3orGmXk",
  "key13": "7EWuBcFaYP14scZ4QURhDyeLSHDgVR9hmh9SrWJQhftLKZKVWVp5twvusBKNUBNJehnrR4jVH1Z91ceW5Whoope",
  "key14": "2tNx5ZRUtpGWZ5oWiLk1pwQ7NcJWyie4v8JP3rKMss1nK8vtpikBfW4RzTyngEwBc2gcwPfEd4ApZGrT539UJm44",
  "key15": "5g4dhiJat5ZvF63MwnuuaQegdFoAxgfXU8rXUxB4LariEwk8KH96AHaomV5VobCEKSDPRZnggSpS8idMntGEXZ2p",
  "key16": "REnZNz5LfbK3ogyvf7vbKw3oxqF7bc1kFxtD5GHsRMaQmfxpMy4VGddRXi5nEKsz2uVZvitxyHsEvjmHYJPAaNX",
  "key17": "rBFWA2Dvz7UBf1oHd58dkzEA4enFuc5ZASaN4F4jrGock7zKjQrz7k2ow9GhiD5LCBwv2U4TxLQRnLXRie5GH7V",
  "key18": "45sFxWt4EaKwbi6JGCWFJDiRtsWf5L6uiXi2S14ZQKjeUCgz2N5QbSthTSjFRnfyeWoyDdaAsKQk5CrdYH6pdEMB",
  "key19": "5QVDRFVAAhjD2ivkeHx9CihXVYfvUCtnGcaSDW5ghDFdKYeF8pYdQXcmnQzy4crew9PTrP9euGcckdcZ5Swc8S1N",
  "key20": "3wCTS3wsgBwbJyJ7LxtbFruEHKY4v3nW5pvu1UDpg1PYzbwmMftKrTsP8HXD52bUUeC3xKetzkT6Z63wNsQ3y8iD",
  "key21": "5XxKgHBE62F37ZrcPjfZEmb2CWLKHfDP2sLGZDA2JSrtDmCpTfjNK3C9dfghfY3ePwFZdRCaARyJ2LftSKVXsX5k",
  "key22": "5sU2FB9BTUSfjMq36UBCzzg8zHr7CiPeKJ8v5fraEYAEMhbXGUJND7gwy3NmY5aZhYCitGjwBv7fqofr56fQuXCk",
  "key23": "SP4FtqA9dvCBWceodT6GfVNo44qoEv3Xn9d5JswNZFD4LfPZWo1n63y479bSUgix2BaoSDd4UBS34eam2v28uLG",
  "key24": "3G31VWJryzDeDorXzy2GoFcoAMQtM7vTDmByYcDUkqSLmugsivZ6NJU6dGMqFCLUw3QWazpKxXyoybYMeRtkcS85",
  "key25": "5YTwScmFLNGYJx7HMXVF1VXdJsu8C4mmcy4CV3tjfZbyrsrCx2TgW2wZ9oVdrJQ3qshuah3d1wKFFAAGjpH72NxW",
  "key26": "52T25dF8sru8wG5sHAyKhLTrJEU7Lv6yQN2ufa65jqwVEuw7qqNXmP5knUKizffi24rXD282tUcDcsWTCWwnSPYi",
  "key27": "3gCigk4NaGkWEF9DgqZ1eeNuSX7P3R5mnU9Luik2kaZKUxma773HdxywLv8r75h8Uqtkb8R4QHBNJozDZuJoC9yp",
  "key28": "4tZab5hbiCtM1t5VpCq2QGz4XoGm2XJZbXK5f3Xs2Po19SxAq6VCk6BoMg876UDMnBBxsVY2hVcUzBJLYVbE2Hp6",
  "key29": "TMDiaB3AyGFEcSkKr89LGRRThHqjfJvcBHEckk8rVQmQXKKakhqv82kP3DsHeSYqM7poDDrLgwQZZaaj8FG3F8u",
  "key30": "65ATC1JNeDG7cYJVjaje44bYCCZiGYK95k5x2dy4Vr8ap9uFEV6u81XLsLgdqyhQvVYYfW8ixvhV7iSu4XnXgFcf",
  "key31": "vBXjEePHeFcdSvVwmZNgvVfPMVv13tRFAJKpopCrXRRB3yXbWQJypkESZYvrrCjBvRQwWS4hoyFvAqSdaHgLNWA",
  "key32": "wYUGJtJsd6rw6HHUpGW49BspewYunYG87JHUQE4dk6rCr5u6xG7rSoKYomTiFw49vELsELmjsJo4EdyjBRioTqb",
  "key33": "4jdgewo1KZqH81BACHuef71aeHGbbi8d7dEpTU5bhPpEVH3sGJjL1oEfaUxEXQjEGs1FizCuqVAHUm88kSDrUJNa",
  "key34": "2NtrSvbpQjz7VXsPiL6UYkVDphTaJuoy6DxAKTxa2cB39odih8r9SmhU7ERYvUYfPbNYasC39teBiKSXnzEsuSre",
  "key35": "HE88Akh3XXpK4ubL4gZYuHgAAqSmPFWpG26wd4k9ELHQTgramC2dQbQ4KRbUzwpqdCQw6RYFhnx9KfqL3tG9YZr",
  "key36": "64qVwgxn7fQN6X8bXPSBJkP6ZKPd3GmSMsc2kz4EovBNPqJtqwi9Me2k6W2M6gpQ3zzD4bSbdCY5k2Rso7hyPVr9",
  "key37": "5kVsmwVnZHroeKGp5VJoXrPU3FrMec5KqVrLhh4j8fV9Qx7DbBK8qBsEBLmipH6qp3QLxPcDjmooMERCwL3jH4vD",
  "key38": "4Jde1g8DP7pSHqxHv6wggg31oJmtugzy7v2yRzzKyse6JrfTWKVXdcBpjGuf8c8yP6aJzFKHLJqdAJFmqtGPXEzR"
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
