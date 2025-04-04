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
    "37Bhi4PPu4bHsHUV3sbMLYCGFjhVKVYQZNKbKvpve6uPeuTZ5mnqdwKFi43yfRc8KuHfD6LSjwECHDxcDpL7dkgh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ng1a8JsVd4V6Q9HRRfZQxvCUurwdzcu5Rshd8DMESkcPvoLNNqKThW17JejPhQwq6MmovXyfkPvpA98vCTAgB28",
  "key1": "FBvWUPWawfeDDV8RXzU3RAahjy764De6mgAisykrEUFJdKCbj3QoNWrHg6T7RXMaLkiR1KrrLm5AyDMVKet8vLE",
  "key2": "3AVMsYZQngS7bTYK6qCwGJdDyND6AHqy6XSG6cMP7BfqcMpHFu6TSfVX8fPdKaatriciaGtQ8NVvMtV61kncJJRT",
  "key3": "567125ywsBJYTFT1xeKEqdPURrLnzBkEeGSrM414bDBT83oapWgo9eimGA12yrjoqnT3Vsec5V1Fvkj3qQ5jedDi",
  "key4": "5Xxt8tGou7vAGhjDC6FbbD3teoK1ScN4fo3D1L9na8CR3Sk88VVCohb9tymvvr9nmyFXkGhMq8JDknsAgzNbyDWq",
  "key5": "5igu5G6ZvAnaWJJ6Dg7L4Y2efXMYv5tTq1eRdPuBoW7NYLyeWwBbXwzpcjSJYQaPG8i7Kuau7PpGn8WriZa4Su5H",
  "key6": "5x1QB7CorqFLtibfUe1KGSPyNeGZ2aT6NVy9yfHKtDMkztUibBam2D1prrgPrkmUDFvHbYF8j1HcQgikS6UCortj",
  "key7": "36dpke4x58FzG2AgjQzrscznfwfEoXfwBiMX5UKeJDs5ZdawUSUGuAwGKZQzHAGTbgL3g3bGzExCbZvBnfDgzH4t",
  "key8": "Gzj16ERbkRuevGRVCUAB2ShkGBhDh9J5SkskA8MEAzJ8x9g6zF5LgDyS2Ytwa5UhZcg2x2V1NBr2k8Kec4viU9q",
  "key9": "2Ya5abun3p5rPydcXkua2AVDPouuuhL4P1xe7ZiMzPrpyEhDwfj2Q1r5og5Bj9BFAgKA4ssB334KnhApqiSJmscE",
  "key10": "4XiUBn2h1T7XSCEFqX8fjHfAWKcLUNyJxLdLXfP3rWzka3wdUaR3hNRotX7UJqBdLSCUHx1XwNYmLdFvPkwECpJ7",
  "key11": "2aB2wFPL7fPb36NZ5HeVpJeqmBXTYcLnNQXAusrfMC2hTAZep963FZN1JY9JLXFoFTfgvhq6escCP31h3CFhVueC",
  "key12": "4ZXSiqNbm7EuLaFvV5Uv6x1kwkfQwRB5AdT1M1hqrNdNzMmocAvZFiJK9UNXJYJn7Bh8Z4UBwBcpoWUqzcMbBnhi",
  "key13": "5GsNumZMqJnH7EBXhHbch2STTJnSMUBZPNB1QHgngYHJ8rgBphF8FBwAWnh93bcA8yGLbuD93EF3LDZ66pDFfJ1Y",
  "key14": "4hd7z2ZaFqa2ufxT1zAfEjPxuNP7HhUvSC55zfGaKfJP8hyqb8ULaYHW7B9cJ8SuYumuH6c6byd2BvWphySSRXu8",
  "key15": "5aJ5oZt9iq76aP9fnkJYRhzbBqXmx37vcUxwtJ1GSpsavXSL9M9RkidqEjCt382nhkRYY5qshtb25JTkr33SXVwv",
  "key16": "5hcpcMznTEWemNwmdKLR8tmwciA5bYmKnEVpJYHHHkpzdNYKH3zQi8jU7L84xYwDw6WjhmqARDyN9tXhVJ2boGwG",
  "key17": "4RqbYrzYmRmZG3mpasSWhpApcuxRvXknn1tXGDeat7Md7tdS3DzrQebeamTf3waw5kKzY5pWKSsWDFS6U5juf5Ha",
  "key18": "63k5NqBFPtiHcWdt5cBkxEV5FQCybjQa616Lf8GJrcCQZm5D5wo9EDMfdFEsvz7PF9DsVSoQnKjH5xGnvfUhNZMJ",
  "key19": "2ipFRMnLNfZtP4WY4eMBBKeG1NG4XaaxQR1HVVPcoCjHMuAeGHHuWGCpzohjEwEUByVrYDZ1fnMUUjjsi2UFAQoV",
  "key20": "3qBpaLLQT9f4BpFpeTjQE7sq2EM1F2fbmztYvJ56Wj4WPaMqBtHASUoD1jKpU3sZYqnCwbWLhC4myjs4AA5TpvwJ",
  "key21": "63KwaQom6FeGPqiBQPzekhEUuDPygKwZYdBjEV1Vejj2kqcFxkmpoLf7RCNWLd1iPtsgYyK8cSafirKS9b3ozRe9",
  "key22": "2Ti8TD2EraTmM34NamGR8R8pMrvykK3LkbL3VfPNMYKKXfWxi7pK7DC8uEjeFc35RhHpU5Cre5MF6fw4T6frdAD8",
  "key23": "3S8PX795TaKiCPD3h2myTKfEKkMZhkQs6s42oB6U9juFRoi8E7m6NDyBbpE2WNGz9ctMyske6o3m2R2g2TqmQxGE",
  "key24": "4VNrmt7VruNKCij7iMzXFfLXkUTNcNhbg7Ho9LAPgFWj24NxcvuMfRp7FQEZfhBByfCge2nW29rBoYWHSk2h3rJv",
  "key25": "KkQymJLCgpq1rNeUTEUTn2osFDguHSY5H2QaL1YNJ832rF3zLGoH2Gj2FquX3Pe4D89sUg36V7hFvBnWCRJBj3z",
  "key26": "RFvzi2xYztBiTvdW2cwPMe8vPynokqnd2Zan6Fep7cqJ6yZVyR4VnMo4V3nbN7YW4kP4kwk1zRFHUVTdy3uwF2A",
  "key27": "5sGv5oZZ5fLrmDYBvDKfERwZPcXHXfBVYR3GkpvZLrFxGUkg66ABSDeNiuxRDPNN2RmTH7DP6GMyCDrv34c33S7z",
  "key28": "4B6FdzR28EhstvTh3yExC2z7WAtAh9ESGmVxDXvBX7Z3G8jEivUuBaW1TrrixFnXShHjR5otE2Jyg214VNojY9mC",
  "key29": "5wn33zrxS8pHg9cpWQJF2A9KzbtjDRbAniawUiqZpU3g9VdrW4wZwBy8TqCubdGQq2aapSMyZNpwMGsxKY9Tf6HY",
  "key30": "4MTb2nzjcwK8w3vdCa9myYsCNXDYbCVpqdsCtdERmteSe3tD2zE6CVt32QG8Gdw6gmBsbULkTJsmERL9KubYsKtu",
  "key31": "5iZWcGw9wid68TJukyBbdwXCkuX5jkBvHyzMN61U3TypMbWxYEaK1TjjvXk5zUur6bcXddcWuaMvsqUWX45NmxhA",
  "key32": "4WjJ3ghfpz5tgfantaVdYytjZvabu23CgzXCAMynu8tArnwFYYpTc5jKv6iUTrHyVXhf4BMRP3kuX4LT3G2McGi8",
  "key33": "2Aqf3bs7RtKjErsdpKXnbgLf7F8UR2ccnGujUjEihzdh72DTeZauNHbCjfDG7GYiyo2S8VTgqa2ytxuuJ6vdp6h3",
  "key34": "2U8kVRttEWbTYnJrYPBGTxhNCVezu4Bc9DLJ2AH5pdpufYCQLdu8n4f3oE7uKyCRu2Rz2DdmsNZUPsLnbYsS9mma",
  "key35": "49zAw5jk6VybxpA6g2dcNBRConPU7DwR1eGkLAu1VGfqVMDQaHahnLcxvppkoRBAZ9QTZ48NcuiE9mnPKchbwgrz",
  "key36": "4JpP3wQwgzeRBLJKttHeWB7Ljw5suTMzJBXBrc3xafGD4UHHsmbP14UWicUMFeq2okkWAtymrhakE9z7UDkmT5kd",
  "key37": "5JcAmhFWBUL76CrVeWsgzAjstkbsufpcR1QLCf85VA3ogqkr1pLGGX5bwfsheD676H93No3Q32YkvRRwZv4QrUH2",
  "key38": "soqCqt5g9jNYsR6a4H7RUJhv4pyStBC7gpi5fofZTzDmk6EBmAaSx1FSmGAfjJct5Kf8mCsCDdmppQ5crxte14d",
  "key39": "3RaNJ3rScnRHpLtcmhfxGBD46oPz8f7kbednLsEqYQLdcz4CfiCqkVQRzi7Pei2nMjuene8ZkU23y4RUDyzNg4f1",
  "key40": "2asmA8Whe8iYJW1Y9b2uCBiqvtQEShcF9jweyHtd6hvWjfQ5iod6PqLJh4EuuhYhnR1EyG7ZDCXXzxVJBhEBd4ZT",
  "key41": "CUYY67P4ffX78QV5rF1DYtrxTABNBGFSpN1nMafQmWZ5cGxqeVia48Rtd25ChRySUj4QzvQZaNhX9y5PbUDvL7M",
  "key42": "dHeBrMWmSYhGHVs4KP1zHs6zc9LuRbt9ASj6DmjwBxq5hjo5ZX4JgWq4syBiz9grJCFNccGNHwe2E4fVErA49D6",
  "key43": "5H6PXr1pXbwGC3T4AVbuiiJgnkLw9Wro38vyxY3gg3gRyfUE1VMM3vfLLvmXfgrFe9ufb8ghchakrBKNjo9ga7iJ",
  "key44": "3HiworduLqkgXWjyj5R9xcy2WJQYtpBcquBmfEbhPpw3Juf4NVH7BxqFbSJmkUGdKgHG9M31CGcJ8vrh9aUDp8s4",
  "key45": "2gAZDR71msQzVKeiELuspx5Rpfmee9MgDSWcFDvrRD8PSypbQUNHsoEdYsREUE4Wt14nN9KRynfKgNr3j7KKQwdy",
  "key46": "4GHgxwNTG6Sochdh7ZN9J6YdcYfEAwjEEuNuKbiQMJccaP15NiZFMRKMGHXjyCcfCm4MfAsFB85RNjqPJ9iRtbNG"
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
