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
    "3p7woVSbkjJ9FtP9Jm4wsKAcaaDRtVoNEHh86JJ117Ne3yGsh7qYSneW7NqYswimUWTRdBUMnAsv6qQSaxJd2ivW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CpTATNCoJmoNrrZtkzsNiLiHajdtzwLb36KN4Jfuh9dHCVKLjdECre4WwZKTyQQ9Q8ZZFyDxYp4uruYsSQLKbHp",
  "key1": "4FZ9ovvf82EPo1QcfLEnZJwsFCjD9gGS9pFUbJHwyeWGyAHgnjNPGf8YjcAX6kfMu8s6m2hkLTcLQ1H8V1HdztD9",
  "key2": "5yDkpuAWCZACsabU2Fi44zpsiq65MHkVhms2mpzs3A2shHAmKzDR3zUrZAR6yba5QySaiVvgpxV2WKbwFddxUSBc",
  "key3": "4hH2z2xyHXEiYHxzz7ztLBQpLHPsuwGLtoxngSbtSYZVX1pmGqYBA5RQU5TytC5pytEDkJpWoc6YPkpSDn3RX3MY",
  "key4": "312qN64VvqpnTgoFJ2oasQwjXcXT4ZmZ2cxXW79Va5wysKEXPeocuVy4wYcsZR6a4nKwAbpjXiB6e6dSdFe98ix3",
  "key5": "3YZCxPWPxx7qY5vyy7ob73Zczr4hqLWHZuKNepRECawnbrwRHGW3AjQx21E7jDs3n5gi1z4S9gm4FLrBP89KaL1E",
  "key6": "4A23TNHWUjKr6GaZBjGgKqhk12ZJTgULgZcvsJ5pSvb1m3rxxgNzgaAjCVEMQquTyarX2zpep7USdNCPw85vVoBo",
  "key7": "2aNKrehyhSKwZn2SN6EPspU34nQf8VFd95qxMzSmjYVKyzt5dHZbfjQ3JfGzji6EwFMgCyBgahHmuzDTceBEu7fu",
  "key8": "Mgiscxr2XWd378e4RBbMWpYGiNxw4GGQ7ZCcXhu9x1aEV7t9M3UmV99qKmxjDiVVn2x8hH5UM7W6gb2dvkeL3Fc",
  "key9": "5Hu64aUq33PZ49bASabFMZ3xTuSaqPiVqDWHEgWw8ae4DRrh5Y5qAYMirZa2ECZSwy8DJdxCc1xczpj31cjcSt2G",
  "key10": "4hUeZVZX1d2xUieiad1nD1AyboXaPPmEiu7bfywAmDuuk1puHSLQFsjNjJjrfgqrrDM8kJuE4SkDvZ4PED6cNTVu",
  "key11": "4B8p8gegu3jGzJ2fHrXdjgGRsHtWsbbV8EnMLmYMk3qdfBw44A2fT68wqdTDBSXEfKMRLurWzLxTpMxXHc81Njap",
  "key12": "3CwAz18bAfH5FLEE7MeS5nWAg9WM6XzCoXS7GTnN5C24LsExLzQy1DtBNgjWMBc4fmZpLcQ9wUSJ8xbLVaxRkr8U",
  "key13": "372yfvPmbfif3EELHzk6DsVmVEqG4dGZbVSJePG5LjA5JNWN9qMwRkHx1aLSMbCzf7RxXqqbdVLp8ffWJhotnGuZ",
  "key14": "31y6s7ohrezYTqbGPHSYFk5knJ6nXPc6Pcu3ZcHptn6J8rH84XskRtQcUCbB2Db3rApyDogYcs4nHpe8CrSDqYf2",
  "key15": "29Dssocwn3iUubhtk1TYfpA7tv31haiFR18zmVsPyd3yWLwNyGqoLiDNDLXaghWzKnBco5SEeMuYa3Gi32XzWG1S",
  "key16": "Ycpx8kEZzMQCb8iU3vi7ydyuv4s5YS9e9hsGP1MzQBppUG4KMyjxBDV2bM1eT1Le6AysvGCj3BDo81p6RuPHra6",
  "key17": "5WW2kYXq7x5qdQ5Q8aU7ZsM9ojnF2irfhASX4EvgqpBMdikC7WmamGTCPSVEBW8AiZdPwkAmiTfH7iqjdr8ue2ao",
  "key18": "thBxD5SjKbmeejZVc8MHk2XsK8H1nXs8TXMajG1kLwkRYG43CU1ufLqxSYs1y4XavAhAVmGSXTPmtGbvdDuNy11",
  "key19": "5GGbSR3ouiFAWJCMUCD7vvC2611uizM6WZ8GXtbZ6fqpLPCzscRgbRUbgYvWMjcKepJm1imcKg9oNWZX65YKJrDz",
  "key20": "EMR8bikeKnUamDPcFSKvykj91wHM9rJcqDFZKp8n5K5P92ochBuTwXtKNJidiL4UxEhjLsKS6EjzctypCJP3jqk",
  "key21": "38hpZ4jS4hAY1JTvLwuevdeRPLzzTPqZcy75f1n1ukK3jXgjCzUuLWRyE4XfVijcCxGGH8J4n6W8uA9XHq6zF5x5",
  "key22": "5LMjMB1ASsjFMqkeuftrenmBobZv48xrZ3BjCe1tLnuKsSiFAdnbG4oZcVGcdGE5kpmuFgfG5JW7K91x9fJeKytP",
  "key23": "2roMgJ6W6nS8xcReJ7FKASLZH9pQNKzM3HLbTARvSc4ouyhFTSPebWMGruKKFEQ4FfBTWtxqSh6XfJTSq7fiBx1p",
  "key24": "3PkhNKKHFc1jAuXNbrpZxTcxuCSNXKKmpcUhuiKVt6EsZZR634LA7TDXBNua4quoEhMwUbjoBZ8tvowuuNL7E3g2",
  "key25": "48yMWXNeHvrSRkW8HxCZD2LZMQXz8xTBUsjyC5ovoXzs8GTKRbHJM6UyPZSJDpgmJ6t5zz4thmywsYmbDTAmAJdH",
  "key26": "Zna6ApFcX2xZX62JkfheDnqgoBkAzb8rm9ePQQR4m8XjWJW85uHrtf1hwH8LUHH1Qw53Bxgy3ZTPpYtLmzSVmWc",
  "key27": "uHbSycmz7qxpc4XKzd25z8RMCuWCfdhZochY6tXHAU86d7wGnPy56igHJ1eX3EfyWihLaC6RDhXmLEQj3AAiKi3",
  "key28": "2tAxDtpQffNXmHfj5TDiFSZpkMxjNqYmruSkB8iaDagV2JLjapTvb8wcJPrTUwDWXtBw1SkRYYBU3BFjY9CV3U6V",
  "key29": "BWxpztRrdTZRFemE1h1B9DGZw8pmfpG8uLKV1rNuRq1k36RH1b6EEdTdYaj1dnwomRWL4xp3JJkvDqcGdGL5c5j",
  "key30": "5TjSsWTik5U4vcx3rRmooWF5P7fuJTRK18a6Ps5wnxA4YYSaCi9sq8qdRQXhW5of6a94mwYkQWxesHL11cn6SFAy",
  "key31": "HoYiPhB97ZwAd8EEhSZQSHE7EXrMh67jk8ZRaxP8oU2Dv3yis9HDuEnjx8ArpeXm1BXEqx7gqzPyzc23CDGXvuA",
  "key32": "5JDLysy2sZgV2UyRNPwUaxyMVGYjDokz5Fb6mAhFms7RpvYkWb32xp79fWrFqgiLkzYobMwM9yxQeCXdRNFcVyiy",
  "key33": "3LJuAUn6Z9fAFacDDQhKoXKYib1CJBEn44wm5cLsMGcsuQ4Xr7gz8AkZKEpcfJS6chvtXrHQ5VokPoAoo3Po9m6J",
  "key34": "eug2wDWJn61j2EiJi31A68mBMpeBJzHigL2zPwuivEssATjww66jmUundTiwwkG33rqNu67vgH1YPCxUnmzUAYz",
  "key35": "5fUv5f29sK3dwahF4J7RwUthKHDwsxqJ2CLNCRH7AXWvrLXsrtpTtuVxapzo8gNjvxnQGF6AwYejrLAeAtLTVxQc",
  "key36": "26JTJoiJBpqyoA7mrpmuUu99jTn8MnZ6ooGb3dGc7tAcSa6ut8xXxAQibqbitJVWeNCWBqfUJNqpqMQMx8vufQNj"
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
