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
    "xRwRAX86ChMJHa2PyRHNxGGTPePNqDDsiXuDstqVbedjAF9M4jbMhp9hwNnABgLrpB5xrd47Q2dP4PWn62mj96c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jtGLTFQTuCjjymHTuVtLammiznvWuXwt3wAevvHeKUVErKpKYn55cbUAUmdepM4tzFcpkcboCkCdac7xX2UK9jh",
  "key1": "5CzRXJ1r33ooYdiLffHoirKwQq5j6gzqz65AgD4cyjs44gxH3fAMPhBtc11wukiznDZmypi3yWn5awKTF12LrEUt",
  "key2": "2BeSFNqr6cJJ65MJfW1882sUADFBG7A1j4LL8syfbG2V3huVgeZgKWv3biYQ762GVjbwFNnJH13DaMUo8wKYSnLd",
  "key3": "4F8BSZZ4kvpa82U29k8Ldd3cqhwMz93eYaU4jA7sLsgBjMiBjSgkx3sccaCLjzsWN4xjCXk74ASQQDMxDZyqGAMA",
  "key4": "3xHohXP6unHk2C81URVe6mKKm5v5vfF3BjvSyT3fz34oKYDc3fEPdpT1ff4YuV2pBx6Bsk9CzvKGAB3Y5LzwUmUH",
  "key5": "5dhBAYHFeBGn1uqxS6xGZgpm9z1YmCdnnV8DiX6tuJXiNtUWE4yi6FBURTXy98RyGdqN97P9165KXxrSpgXJpHHV",
  "key6": "2SnJwcnDQN4ZHxsAbMXdeFkxE2J8dCQ2CHZqYKx5bhVMhXpcqCKworswwzJiHYFfw87C473HjHqkBkbCzMkmXkf2",
  "key7": "55sgZws5JvK2mwZDawA9i1QMqL74mhptGXvS2wV9RqhP6yaJ2Xs3QcaEQQeRD4b1je8Dm2ymdJKuLSuxbC72qLyM",
  "key8": "54RrfwuX2P3tcU7DtXSZo4VoP75BwHcHsETuVs7TpMTaTuFMQiKLARxA2KuW6msiAiZWS5BoJTcqgc3Gwc3oPpzu",
  "key9": "5F91D26PZb11oNix6wxqpo5NxH99G2raMkwZeuVq2VeVkbqYQBYoEQHeCQP8HrfqkSdeJpx3DDHNCKMLpDjnYpY3",
  "key10": "5x4PRdMKRn3RgRZLUydmNTTY56hoVQFWoFeuVySyEVy2hHbzeMsLHFEf6KXfDFQJz4AypmDvEcQ9zf2JeZU5oyqe",
  "key11": "5emTnoPk9kMQkdBVEy6nGeTmPLLFcYwN2kp9eAK3iFPmF6vyjkj31EhSFvAJHBuUsPtTiYDKVAsgaYBa3BJuKtN",
  "key12": "5nPtYFfvYZMaVYRpGAG6aVTDnzNfc9u97f5FAeriZukaeeoRUCqueUuV9CmeEu2mpnEUqi9662sbJwt9Ty8uohJh",
  "key13": "3sPTfNLPWoBDfBQqn3tfw3TJJHwfHCnzhLCfMgUs1x1WSqvb9Cq8aFKoRzSWeMZMg1mytPYNkWZdDw5mo3ADhvEg",
  "key14": "5zTqxtQ4Z8Y6o1eHNP9oPYv79YHW77CYTu17RMUcmZSuUDGFnMBKCPNmG5Maqc2rTSiG5rq6z5KGqkNdVtn1HW3M",
  "key15": "5wEMcFuFoMmjDLkSEcrbymE4KafDexg97cUdBHkgFAKbFz9yARfu8U5dEQKrGw69QhcWYywQQbbBAMg5R6yzR6C9",
  "key16": "5sPKK6h6iNokmXLdNDXHf3EjRcXSCebYgPSS2s6KNpXcPaH3VFzzCbPEKT1TxVgwTEHnvdrQNfPg8WXpkUdHGJT",
  "key17": "24sYTAeBLn9W9PNUUET1KBrpdzimTkkcBy4nLX3s8k29R4Hf9M4JweSffsVy8FZ9xmVaANXgcATDajWobSTcmT4p",
  "key18": "Z8bmkdYcsjUjNhqZ8hfHU8RJKimRhAA3M3VpQhhfAVB2rkNov4XUy8hmQ28ahTf3WMxJd8Pgn1oK1E5XshBqTjj",
  "key19": "3Jkv5ep4YAP6Dg9LPR4P2b1WrTettcmaypDJLK8BzL2EeTHpFYmsYk1prtaXwbFxJSJV6zcgA9QvpP6dTbrsx6re",
  "key20": "3uE2nf8usVwqHyChZHigakwboEefvuRuWkz6Fe1Mupsx5UK7LX6hDeAj3H9daoAT4f3ZQpJphhgLmquTABXCAYE9",
  "key21": "41VEjmz1yEzy1DvaHsqBFyXoehRLjPhLaDSCH7Q5gvmQxpd4m1a9AFKKfkwuci3ufb6CfwjtVFRDHYktpMR3iDqu",
  "key22": "38Qpc6M9RzK5aXUGxXyjYenu2v7Br3kRmUkNX51YVUtpZR4qvF1bWvjGkWetS2BAwb3CQDKnzA68B5MZWz8gGSHB",
  "key23": "4rVf5gu1js9kdG6ieLfzST7XbZHGcr4rCzW3RQ6fUE4fDhdVoDGQPFT3bZNFvguzXjeXcJ1VDYKexQTzeZxaJk2y",
  "key24": "2JwSNziP5X8cK23nTTeCZgQ2u7uyDJTj2qXhQrNXpwUx8eeVxuqJeZ4LxbEGY9wAwb6A4komcBBnBorh9sQdcaks",
  "key25": "2Vhddbe3jDVUYX4EgpQJDVkYXckBHRkhqA7VWcQjjsLeFQTuC6QQrYcSU6kRUozb5ADhoXhdoNHe3F4zy1MKLREN",
  "key26": "4obP6xf2yF1sofqPFYpppTxp5QSsjW2ppzSi6fNa96KeLjjYgsrr8z12rbQFTMwV7yNwd7K1xyzF4yziH9MLiKvh",
  "key27": "5yKxYBXRKuNobDrmZ7kcGiMRqdQD5SNnJUA9EiZfc87CwGjSorEpwZHKTFPugEKz6qdoDxhNNfKy7aWoNaW2WvVi",
  "key28": "41NjA6CJjVQS2razK2tXKU4fsQkuu94UQrvbqN1Vt7cXF45HDdJhKNrPBdFgpYfLXp7wjF9EQ6Qr3mWEbjfND1n1",
  "key29": "35QnRuyBTP1VHNCtktd5pqapHaTEoeHpsuDdncCcuTEnT16MqVEQpKFV4kA4bsEHKDjPeN63qCiZq79k43m9WP43",
  "key30": "2t9hKR3dBH8Ne86MaDZyiM6uYHbNZsAXrw1xLeHr1amAtVrFhPfMPrSTgQxW1XMEuC4tbdYdPxM3KqyPpuatW46g",
  "key31": "63K3Kcik1cTkNhELfPswGzFZgH1iHFTgfJoF7amFY2STbceUBc38hC7UcCnKtvcfGhStrnqo8GkRP9NfuvaEsW1T",
  "key32": "e6nKXhzCXK9wUMqN9XmtqWy8NsCsk84AMmFy3ESfECA65puQLDzjHxr246gzSbwYud9D2CwsgABKKirpfHGEHAe",
  "key33": "54DsCXTm6KQb9y81JLU47QjUTMMZaYnoTgk9CrQVDESJ69tGpSacLdTfSETUsiXFMDPHrkREGPCXLMUPeprENocp",
  "key34": "5DZvtFspuyAKWUnLb7AbBtcfzDwEQ77WXB4Vc4mRt89CvTNiAJQzG8rCmYunwwHdXPbvYSeJUZjrbYW3vnanqBW7"
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
