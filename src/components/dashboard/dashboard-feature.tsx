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
    "2vkHgD5Xt7B5UuQg1H1D3963TLa2CzyH14n9MLK6CYeV32MFWjpvyh891bbfFPBhUH3CnH89aPjHjbXGSpdbsFHA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22msee7E2KwRfZfdr8bZe9C5xSUNW5yjG4WqFBWtkrRxxtHDfTZs5onToqh7TJ8n6c5746u85ssVnUv18o7gxK7P",
  "key1": "5bB436DAGQcx4LCF7qoejjy5jtf5iC3Y4oePDvJCFFVM9Zf2CtnHe8WDpJaaoywCFBzH1h6kpLDrYmz1NhEQhVNu",
  "key2": "3wXgwUja19YPb9UfyAxJZsw4K2eYxaR18DQuXrDiyxBUabpFCzUGrGSXebVRKze7YPHZvbSGbKDVrfX99e6r6Po6",
  "key3": "5W5bTfeRzp2BmqMSqEZgHkh5kyUXwoHqkXD4Mr4qnzzmLAwDE5Vax4M5JAFS8sK7sQtDByewcg8EbGBBexUvw9F6",
  "key4": "4a5TuwSEzRBMV51PvLPTkVjHu7TDM6sZpyuZjZLyw26a8GA9GCzszPT9bXngSz5tK6aeq8hqsQtSAqbymbt88y5Z",
  "key5": "UszAkuKRs818pS916vDE3tWpZUesrs8CwwDzneTB4hcUBf5gRCDAwivCRokQPqU6rPvNsx8EBwQCKy2aniBeBvn",
  "key6": "3QbhfFZsbfWT1HJtbmHpGbrEA1vT5amL4fnaZccRGCmPj9yk7SUU2L5ikEzX1Wvo5i9EQ8xAQrXSf31KwGnMMxZP",
  "key7": "2sCUrw3HNsw1pmsBpXB8aAfD2CraYcLHLj55jFtwyhdtwob2iUSCd9m3K3bAGkMrPVeXqw1FzdEQuun7CDhVrpjf",
  "key8": "624GAjqqMDFEF9FuDDq4vWyNmkHXUuFYLDTT2hGgezHsBP4cVjZ2Y45Lq3N6Cvkg5k83nJN6gvJzN1Zh8fMkpibB",
  "key9": "eExoyFYSgXJ6uLxdicYVSEmmUPFXYXP1TNWDjfrH6UVJq1Zvi99aLJsFbjLctGBEmcWTh3z8rWY4n7krtyVcnk4",
  "key10": "65VQkFwUoyvtx41rSo8Tnsw76p92FWfh2envACuupSCpF4yZ4oF5ym9PSNz3Nof55v9V5aU4xPLvvBkdLvGTgiB",
  "key11": "5A8kU6kgoFHbHA2W2NP71Xk8YgGP9rr9544ryDMGYyKLUFeYcW3hKkHGXHn62x66ar77qK9EAtrJviWcaW8Ug3Ts",
  "key12": "5ZB1okm8Pq7E8EnUt8qzDNBFLDfTCK5e2zkAKviHFDmieCf86brFDiEmbKQXDMAgCm6L1pHwrUEV5gSUWFk9YQ68",
  "key13": "MZorCFA591fpyLxdnhAw4y3N7Eg1VK9a4u8pK8B4jga4MzhJ2dEReeE1Nihb5aA2TYFSEd5FT5pKs2VzVWB28AM",
  "key14": "sjWH12wKPq9fhmu57vhUonpHFGL78BPpdb9AtUCwvQuwVmrgTM4fnHwJzhFMsyxKUerueowWATTzWZreCmWGW79",
  "key15": "54Pa2Twczf9JPaQ8wuokheTR5RLQYskcJqCbAaxFxJcPNM53eG1KnnpVeTyyJtpQoMh2bWsYQELk7GdW7GT4N2Bj",
  "key16": "TpbwK1pxVkRAjvZeWypDXnmhZEtmcurqC31ZdFshWhQkC7ivwaLo7cEAwKqABeCJummomaNNsjfJ8q4EHv7Cu4z",
  "key17": "2TbRebLK4K4sdhCrviN5rnuYxeWq9sQhzfLvTFRn1L2jGFhcCKEeX2uyqusE534TpwENrvPhQswRNCps8GNX9Ypg",
  "key18": "4yW6DWEkb5BrH1ZVmBa2tsjYt7oF4Fo9yFJMpWi8WosiuGVKpJ4BKTRRjdDxX8i9NYRmJVHkQ7iR3ZFEYYoA9GRw",
  "key19": "C3WqCKrDRArkwK81xfAgBrCARTwjP45EYyzxxpZnBxDuowdkq4AqiHpemgE2jWHWWJwv6jmJdTdex8DU9hU1cWo",
  "key20": "2FrqBpPDGqcFDbc7DG76j22kkMTyhYBAiYUL8PxSYduffx23K4KN98Sg2xzHbGyNYemK8jvFvfe3cQaVeLt39ZrX",
  "key21": "2PuoouCtJbA74S64HZZZ4dq9iXT5BgVb6dP6YY7Askx482sboSxgyNobU4H2JJPZ18vb8VaGrkdXEEYuPUMTnPjv",
  "key22": "3cmdBTUXunCpxSxXLLFCFDiTzEPVt7b3ZEvQ2GyZhwtqV4Nd15otZZCg2p2DjKjZghK4gsG1uWMFN7X8bzsV3uh3",
  "key23": "n4p17HdhaFxnWMPoGyDKxA7hoQVsZ8vnD64guGhwhK6TPbRcpDgsUa8dJZ56hx5sP24ojNyCbFrtTSoBaXvNtLU",
  "key24": "64QHtftE3f8mzhV34LZrortU1vy1KqsNTkhcMUbwjvSu4EvePB32E4G5GVkaaGR9PUErSMgEQaN2iUBdweVF58L2",
  "key25": "HJoudc5gx8RdcdrnQsr3K8cfksV7QsKqUHRnGyzPWN8kXpfqbScPvU45qY9y9k7KMkbqzYux6Q85Kfa73u89Hhh",
  "key26": "iWsXUW5QNFhJK1rCWXXkdC1TPy26LoU49T9KKtUbgCM19jLSQFsXS8ZHNpFY32XjzuTkP61dWjSdQMXMtwQhKP3",
  "key27": "36f3HYNDLoNShqXVybQyiazpi5eraH9XQC2BhwQKk4rGh4vLqrGG9raBDb6D8bhu48QRB7gShQLvWcnQokiLBQ3W",
  "key28": "3CAr5UotEWdgVWwce1JfWUQyHQrDfipw8ju7ocVDxfcrpNPxTcVoJK4W3jB2xsZRZNsEHjXYEimMkgQ3DCQk4D9x",
  "key29": "59QAHB87FDc5F1UJKJdAXyyt4KhktCjoMUiyWcdBxzjsRn7Rq73TiQBTHD69S2MN57e1dyHAokX6Taja33GiFZx7",
  "key30": "61JCWKonaRWieWRcwJoS2UrkinJwL8omZDEZfJCa41mXMk9ioL3RnV2G3Wp9hWEh4RaSqBcQxqRrLUzgKMVpTnfe",
  "key31": "3Pd1nKqnSkCz4dTm9QqVK4R4br6CtpdGUnzodhjqaTcYNvZ2w1KvVDbNArkyCarzTRjYch5NuSnemLXvxoRLoMx1",
  "key32": "2rKKmUeo9sookRaSPPAqittyeSPCZDbBg9deyFgXWozaLeqvE1Qsqnb8tYJtSoFmo2nypHXzUCgqoz7mLcySshUm",
  "key33": "2GVRfbUfQ7JGjeGtYC9jvvWaPn27cPH7Lk4LdJvXu99ND2nWf6xttwMp4cF6CxMdfjhvswFNrtDPsUewAGvShyWC",
  "key34": "Drm3sSVg66nN7Ho5Vfa3fCUg7MRbZfHEAdjiQuSLgybhnin2Ajn7vEqcmUwWT2DdrSnQS2RtVczo72hWUsQNEcn",
  "key35": "5f4JjsgRGY8pHkpCHBgjAyKq4Mg2eMWgKdFtCZGY9bKrGGHYxCznuRoLW2rNBQgLmbD95rkzUkoXFKpwFktETdAa",
  "key36": "3pfefzsH9M7QgASkWzTtBmCKtrLzu1gArfJGFFMAjvxPWXabbNz1hMhvz1LHHGmrcFDrQEuH7SBuxXFvNcKjjTvP",
  "key37": "4qSF4mbbPq2Z6wUEW6giavLAURHGw6cobQvFvqLUweWkeGhmnmZiUCUXv2A3dGDdMMApc5dDxf4KZhGm6fXpBLbT",
  "key38": "ZjWgsbBbVDy6ZT2YaTyiqh52yb4Ff4ikPDBkWZSAz6xapC6sZwKuTMyiS5W3s6E6zwJNbvoehp52G5vBC9eDnxr",
  "key39": "3PAQhkCRXrsfZqL1DL1LsqfizQ4y5Qc1sfnKoRuMQKvhvvckMECbUgpWrZTqYFnPZKMzFg6auYNNnCBtAwNrBuMX",
  "key40": "52wkWhzDt5WXd7CB7W1GQtPUES3nKx6txfxApQtQnYtjZ6dvLREcKKueAjDs5gVf2Q58rmB4dbtW1HcC2xEB5UX6",
  "key41": "4uBrwSpK4McwwKStPnfbPhoMaq3sihv23iwoquCLyA3fpBYfVnfvZEnBenWVj3DiHtHeneWuWHuLDLLhfUCTt7tw",
  "key42": "4yq5VuSQqy26Ugkc4k6H8weqH1s5aPsBa3GCqQ61wViF3cjbjBiVmoQ48xgqKin4mdZa6XPsiqzm1t9YosUT35Si"
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
