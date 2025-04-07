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
    "QXsewdVBYBDHkFKX8QovPN99i4gEMurH8UegtCAYrMjChyZMfDbbM2oyqrnWSAqEUPRXP2BMBnuXtucMdTcNcWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BaaX6UrVqqxNDTXJ1KdoT5hVcApD7Zt6GykqhEMutZpWDQq11KpVekU3v4Yj7bVn6KRAYr9BnQ9zJZN4C63redJ",
  "key1": "2J3WfTwxvMSM6N7EEfM1wmw2MiaNWY8gWJhaYj3qystvj2vfjGg4RZQnWowNmBqusnyhJEfGmHVoaBJ7H3L7RD3e",
  "key2": "2izrn1UdRdZUwGwk5qVMBNLMvrCdS6ytq31K2nMw7MSPmLMp6AAijirL959MeaM2H3EQwdiW8ki49g3DcBETE1VV",
  "key3": "27hHaKG3YaitYu3FEZns6WymKXxKhMZcAFfJbcus3ukpNprRbJjz8D1he2xZGFSoSRRu2zmzxbeC7Jv1bBRXo4rn",
  "key4": "2NPvt7sgAZipgtRHXE38SEA73ayX3dGdywGZ6JJyM1Yxbxco6HonSrfxrUBwsQrodT2b9NPKo6mEQ8SwqUB7QoWv",
  "key5": "2ooknRSyCevUCMqocrFiQP54sicExUbDBuYgFiFkQxzvzy6tNpkgQsif4toezeWkWX6j5LXUcUTpVt3RDAKvpRBF",
  "key6": "25dP3gyLnpRA7EzSDUZEwCx1SztcP8zdh2vgeemzChv2ghYDiowJEHG1uM312a5epTMB8vgkfExC57KpRpiFxZsh",
  "key7": "5XoDoimHzNxGfppPK9Sp8hEpj62d8fvKGoF2Unm4TJYcUBbBkVEyz9uKhqXcp4mQy2eFMAXFkFfKu3yrLUcFfezh",
  "key8": "5pztB2CZGjkGp7QBEjeARit8ycXxEgHJUTco5hvBVEuM1psspYhPvJUp8NPW2eijUCzqRmaksiB3VujnN1J8cfpF",
  "key9": "5g3G8X3DLLyegFD64sDgnoWPaYybwrEW5UXxuBgAh9sSmjJRkYwxTWsMKLXezQY1cBkJw1QmuX3sXH4YpByepJ5e",
  "key10": "3PcYAQD8b22cP8a4nwrcvKeMRNK7AyQSQJfFbxN7YZwxYWn6zUXpfKvwjotqZ1n7XEAULrw9kaFALrdHXN7GnMdx",
  "key11": "2vF9zZWqC9p2GqpJfqnYS8zywMnAhWVPxRrkno8Fd28VnHf2gfquWjQQzuD3krSsBjFoyoF2gQboJ4x1QgYsQzc5",
  "key12": "5yZcAuabiGmABXCcZTj7bnymq14ZjiVdUevSLVBuat2RwezwvNLM3e9KRvDFNUC7bXrAofQWcz4w642v8a6Z1TWC",
  "key13": "bUn6gePZ53M6Q6re83J7q1QtTtsNvGHNeB81chVFKszCQoXBzZCQyv8hB5Hq34y3Gx8ZW1wraDNqyshMGzMNcgP",
  "key14": "dz8PCzkvDvajpbtPrs66tn6jSbkSB9GiwXLQjBGvgAoCW2amB5PTK4qA2C4RYGMzvzZ7rqdtHSTdBh3P3RLcVgm",
  "key15": "6cauTQVhk78TBQBZsUM8ACdSaWnRN9mEyjuWvw4yaGwy47avsFxA549YhJUjoRbur7ymcZTGwjc9KKebsoooba1",
  "key16": "3NQyvHHPbUWA1YmwKVVoCfpuWQnyBCYbNVmDD1BR8yPkkEizbRwTeG17kYLKGK3dH31BjAsojLpPTgyDWk1Veskq",
  "key17": "2wkS8pufkhEhkKAXUoHHtJtrMf4CJPnuaoFNZv5GzA2nhgjqMN5CGhnjZohzFwm4NL8VfANooMHeHW6PAy3Curho",
  "key18": "2uty62SHg2r1AXq2q8ZPfrY2Q2nuUSkg1gQnGEFkVoSE9ZSkMEgLYrVHiSMEisk9iEGcQAGkuZ6hiBtC2ZnZpdcY",
  "key19": "434qd4f16HbQdHXFVESLf72UbpmZ5rPpFQH6xuonzuzmxKjmn2vj42s5gZzKBUadHQ3DW5D2MFu3cBNKRhAksfhU",
  "key20": "5Pf1ZaVGAN1BBvvoAoLo6Fpse4h5jtYoK2eazUFmweM4C4odgknAFXMrB5PbdnytmT8WWDwvguh1Yn6sDhKv5iCe",
  "key21": "3RkzuH7ZDriQ4dTKgBmYoyJR3N9Qv9W3rrXYhkhmAH6TrFh2hhPWTRSf1wHU3oaxFiPriydFbvijctomZCSjt2rR",
  "key22": "4d7Dmcy9xyonsPRRsexQGjhr3WgUosZCimhN87ofe639UuYyk9vH4hkackGoxj2vh8ggHYpV3nB9AB3dZfQxpADQ",
  "key23": "5CZkB68UTK8xQySHR4phsWncMgHC4n2J7iunuFxpFt3VygJH2QXATJgvqNda6ZsjficeLvwc4PzpcqSW5mkn9dT5",
  "key24": "5Uqy8chnbR5UBjXcqnxfbt6GQjYskXw69UWMF9e7pGBe5svogv6XCNaJS9RW3hZXWair5Sm4ZvHsgYqDGD1HSFYL",
  "key25": "4grEc3wyrC3ZoKECYTiCWpKwpHK7h9tU7xWSCQquLBaxHLGyuB41PMASrnujfwMAzuFCfdXk2XYgwCmzCP939NZh",
  "key26": "4xyUVhuVVgwB2SnkQDb8wGrPfn4rtYYwgXEKRggbYamh6fxxGUAp6Lyu89iKhWwziXVt7G1CJ1jVtcJPq63So9uh",
  "key27": "5b62XBtFb1z2AhJXXdJgs8dwaz72TBhTGWwohmQbnPmmN9o65t9KR2McNjrjkL5t9XFjN4FRTHkEFs52ttXKC66a",
  "key28": "4E6ob6wwvCsWP7PVUkVhXHPpemKLZRacMQquNfEdpMUCrj58uP9HiBiimND9nnL8ZaJAeohoEyrev7vNb5mpbhuX",
  "key29": "47q9qGfFoTpPHEwkTkUctPXgnsDFupCBAfiaLWensDNhk3pK8SU1GKLWwT1B3anN5imAzKD7oBNxCSvNDX7rNRNk",
  "key30": "3dc5cguquDREqRYbgj4aVjqEGcDJCWqW995nAepyziJYVAwSPSwUAmP4RUT238nxSyQURaHkCj35GPwqfufMwW6B",
  "key31": "5va7QsaKz1RyvaYyAzhPAVaNAFgLrDsmMRda3Z1CGnSTTBR7xY5zaoGS3xr7As46dNSFVcZ1gNSmMgvN1jXX8Njg",
  "key32": "44oE49bnYZrPYvKSPh2azkDXEgtdPjJv6wehgMqf3JA99HDC3M26DmnNKmTUQwsRnCfWugYhQttWrhbGcjiyv5U",
  "key33": "5hdPX1ScFuCNdeFvGgs1byFwaYUz1sFzyTicGk43DCYJM4XcBrp4kRfWqwcAFtxDKN11q6aRpg7P7J1G6ZeYvKas",
  "key34": "4ktZGqD49zutVhZpNMQRF28dj5NR4v79LL6iDeGFzxAr7c5DSXbF1avtKVMx9Pgdy14J2htyuVna1BjR1ze2PWur",
  "key35": "4ZTCShtWKK5jooFW6D6RCUYRcqjQ3rcxj9jFjiU3b65gqURH2vT5rUuynaSLsE6uHiermiUpgAzPnabbrpGLMWJP",
  "key36": "41XBq2K4v8wGD8Psnxx2caH5D5F81ibVwyCcEKXSVRxVwwa5W2EBvP2DbWMb8FsqeYJoWyhUhvFVhK21tZfmHfKy",
  "key37": "31MMEWMs9C4E47WcGgA1NGh7jkdkkzVPR1zU5JhkAFCxHy4mm8k9ebJVNFA5o5MPTfPuaNbdF31Y2Tf1oGEGUNGA",
  "key38": "4pA1t7Saqea1dEAasVUew4hAiJhJBCzdXtCQq8746VMNFGNNeMN1apmRZfdvVnAmXuQKv1aaKWrxvazWmT958w5H",
  "key39": "3iEkoGRqRdp4td8uQqoADX5XX86c5FyM9R7aGf5UTDve9xBjZZBQWxNV4HywPWsuYy4JnyowiyHAMrBKvErA65Yj"
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
