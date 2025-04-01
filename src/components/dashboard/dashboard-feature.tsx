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
    "hwhxQ2oPXFyMo2ENc4FXo9WSDXqySqY9mZpYDbvreyWHX5E5Kqv23vnmscyFQBznJxDboj6dadwM3LCsGQv76iM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64eAgFTP7nL7CgrSvQUZJy8BCbnfJSt5Vzn6HXCVHTvmR79kppJ2G2ZujK32HMJqCY92fguhcvVns8L8TuVJF3TW",
  "key1": "46vkA7a4ipU8Cwfp3R5fp4VZWXzRaNcX1jcvwf5Bauet3EwxnDYcKkChHeHvvdFomuTSNMiyhBfhmpkLfZLcgKJt",
  "key2": "bPwopMPM1HwsqSCSbvRzcYgvXJ5znE1cJjTsgW9JJJoPwnnyjTkud4rKwE485EsbwKqCVgffHdyoXAiyQfCe3UV",
  "key3": "Z66Pq2Xyq7eMZ826YLn2Q9izsfVM7e6LQW5fK9Xb1mDe6MzzzZezPMmp8FZjX5DerZ6RMijZejjY4JA65aS98vW",
  "key4": "2AeWD1aLUzKB3tjDPMCxnJCFLxjeytV3EsvaHfjHS8b1vwnj8u9oyu9yAqDGFV5yG3drUmb8XvQn2mexoowxq7kJ",
  "key5": "3Ydzor1qgccAXttP3b25rrxMU7ybJDxfZSXfbzRm9Vfafab4JLGJmf444khB5eo51G2dpVMyLUyc93GKXZETGYBE",
  "key6": "5qFFSy2nkpBMY9nRrEGhtL3T63KLbPUMc2rdnFZEPbHQ6zCGjcf58tcm9rpvJBuJtdzkfLrpnw6BjXCt2W6vQUox",
  "key7": "TnpUdDEoD8RM4Vj455sFBLDKqQEtaDDN12MuzB451tpHqVrWafHxGX89ExMtNy9yYh63uBV1mUaxgkUS98Veet8",
  "key8": "4cFNa83DAqWbp3HrAXEs3WgN4sWnCYxLr123nPdBSx7euXoU7XtqU3LsYy1qSpZvKH5gGwweZYhXpAWu47J7H8XS",
  "key9": "2RgaGwLc2j5KhnL5Sm7cLaRww81mXVSbW4J4kb7hJL2BkDANu4cdiQVMZeo2dCiL4MsJdrrk3mT1N6evcgbTcavy",
  "key10": "2NMmwbtai7khShwTuh13LTRt4FKppD78eLrFDjXWTBXMdTd8hACw4xz5oLpvG3SaVR6czj6KShjkwHUfSTMtgqoU",
  "key11": "4eiVrLzk41yUivLaU3T49hLp5iDgsUvQWJQHJAMG6xd7sVWK9vVwYS6Lbpi3LiHymjVowq7efMBpe25mhvSJ4CBV",
  "key12": "5zpot1vWm8t3hzjPvB9L8dFbPyKmUWsRbSJv131grPoSsgmeDtnGVjdKU5ztDpcfWPBVzAAxRt36LNvz1qsfgCSH",
  "key13": "KpfomFo262UYh3tzEzQdMtsexCBqmUctrqZN3TXbHy2rPtWtpgwua3HTDZPqXPUwED5PqC1GUjSRarFuyYmeCq1",
  "key14": "3KhgftxetaCik14XywwwSTjEPjrtwEGUQBN9mE9jMSyJQwPd32XX2nT7ErcnEMX1MGiigD3wmYDrMyMKzSEawHN6",
  "key15": "6MVkBGKkc9Tvzmb3uCqMyYLMnfTkYup44hC2aUxQMEchS6iJDSDCQDcZgi9pXV5zF7xj8hXYg7y7NQgecnPpDgA",
  "key16": "3oJmgnmPuCEAK5RjffJZNf21hKdEFJzZ2t8hUU5JjR5bFpz8jcjPvKynP5cUkfiUpQk8kscx9FHp48bEuYNNtNoG",
  "key17": "33e29Hhp2my9RDqArb8sF5HjPKJzDk9q38ir7WKe1n8Cakt65R9KednwHgcckrSi84bziazsn1fc1jcbxzvbex5b",
  "key18": "3Z2qks7EPN3QQgtjVjQNghj244sBXjL9PQX9J2okrCqxrBTzsfuimNcD92LDo2SzhV8oYtzdjxM6LCed1vDPj8Sk",
  "key19": "273EbWB7G5Jr8bAR8GaeGGRQQVNY2tXbXstJuhy5gDJtXdyE2pzZqRHiS5taYNDHkY6hP7Wzuij5HQ5rvSvSoMcK",
  "key20": "3k7DesWuaD7SQcbo5uuSnTCbzxqoXG3pXWnQeJBUqyN2U587q2bVHjvfY3JbL3uU9WzRaQeq9HiCXaneCPuxc2pi",
  "key21": "4ua5H6Ka1PdGXtuzHE8FqpKscccr1yP57R643aGer7k4JWYdgDzQ5mNX3DmV1jE1idzUKmTp21m8yDCKPF1AStWG",
  "key22": "2RysYoCqCoKk25hPhSpVQwFgQdvbCqBZLJPCYuMY6im9rMwpPpEAzk2agjT9cwMMCgDzr6kLyN58z4cwEQ9mZHMs",
  "key23": "2PLosLT5CvX1RExxHf2uhcRgQoEA1dExFiy49HrawiPY1kvnh3Lh1AchSy9NZLJogJ2FwUgPAa2nNkKtPL5Uv3SU",
  "key24": "5CUYSwSY9LVYDaQDh9hV4bYZh5P2V9j7oojuGTpuRpQKYmF9q8s2jV1XLQhRyugj6sWxQYVqgGQL1i1tpjpqjTtt",
  "key25": "31By851J66fVd6kZQN6YfiJeDAwjoonBhyj4KmjbWEzPqSPW5y5etM4azmRroVBWD3YCULnkL4YwFR1MtcEjFbNe",
  "key26": "CbUFgwqcVigKv45dxTNEVuJ4YwT6He1URM7UWDAZgGUWhLKk5e7vvPBPh8HsG6NF6dBKZGZJgEbTotEw4ryQbgc",
  "key27": "m8TawjLW8ptqxXS6G3KAUKLozwW4WVyDi8e4iMD9c2NzxGqdNrCfg6gE9nTxk6ikVZ2jzZWvo6LwvSUnDtdZexu",
  "key28": "4REAP9QgtqiiWCn5QST1CWaX4rCnerKSj2aERe8AXWjxjBrepakVMWAV7Ec95tCpDLgeiJwHRMLLme2syQfpLMbB",
  "key29": "EPPQGu4nNZAjJkH2Qw51GEH7KbJTPCSJJkMMsAk2rSb28Xv37NKjE3h9Uo8jUSSCMXnbiuSDgFynacwZ4ozZ2Jo",
  "key30": "2gdLn1LsmW1UtizHNuvsxKoafdrFU9KLAY86gTppcMK7dpaXQ28qHmhpeGxit84mcX1mTWnpGJR8x7qxVNZXgYNX",
  "key31": "5Zw1aw58e4rwQcTqYc55xsWrPvDA5k5i3HBfYJiaaTnFfPxRWAqA5gmtRwaDNvQcnMHWcAdENHXDQ1PcmJYWY1g5",
  "key32": "4wN8J1MafKdyPgpbBY4xcEo63hMaqG7F5kiBsuBg4sxtuuDtnhjKXpE8rNLPTCQ4NQqYuRjsqDbd7e7o6YvXvjBf",
  "key33": "3Bi5fpxSk4iyTNdy9W4BituUPmdnCroSpHbzWqxPyFSzSRdLSxj61S7tCQb9YHT8QnctbmRDERSy2pmGwuigASJH",
  "key34": "4MZWtCxRGzVHKnsc5dMHV9wuWbPQpcbeAGxPq3NKsrQkgCpGcpZoytLANUbUtPApTcy6u7Pa1TYM4DdW8havQvNX",
  "key35": "3o1wWXoqisQJtNFgUpsGgrqHpNVCVZovWpjjxS69uKcedzSiScJhvV9q5MFVcbjbc84kW2awxKqcuH73mgxREo7M",
  "key36": "2mqvoJn2KHaQCYEkakCNmeRiw2FNtLUVM9GZ84LpXfSc8cU9aQcxpMD13zjBnJtb111qE7wGaTCff3ATxxojjm7t",
  "key37": "3aKbtDp5Ff6ps7DKCbKDytJ44zHrWksKME2RuRZAufqw98YUC8SBT8foK3PBXevnCAiYtj6cfzWn27MamDXJe4Hk",
  "key38": "4pFRKUaueokLCRR83EpMt6woWZ5aFBSzJRQLpMMixVz47UqTxkU3jzpWpdYeuUnMHXngrPV1xNVZnYV9MowBjdVL",
  "key39": "3hofm7XgmttqcqYjuFi9ujdnTwCBz6jmmL8xyjGWhnMjmZ1Vh1U8nVhCvSqKeAdNZNJLJ2DHDsvYaLnysmFfKMaZ",
  "key40": "3HAipfoNGfy7Ye34H5euanCdbLtRHit7R2G7MS8un4mD6YjB2cM5XyupydDjL6VczRQP9hxLvMMmsJVLqD3ACpT6",
  "key41": "34sWLnHrFT8Zah4BfJw8TzaMFoBJ5QUJdMhwvKfqoSd7WGurpBAQuFhrN1nJD96ugH2z3pBsGa1qyvcUMbtNzKDf",
  "key42": "3tgQscj8F311uWpQ9L4PWARNGMw2kG258sqdxtWZinfPMrGmuSnm4ZNAadnaFt2FxCCuPMX7wG5UpXuRjsEwqv8v",
  "key43": "3iJLtu1mqHb6a9Wyeub9SLxChVZugrVyvBE6meZ97k1PVTq1Nop5XcSAoE5CC2Y2XEYLG9bD6UTfEvFqXz1VEUdS",
  "key44": "431SpHeeN8hye6k82acFe53b216XkSb1oaDFcSSnV7TK1v6UoMBSiLztouMbEuS9JeHwPTAVhnZUQ8gWk6QjW9Vj"
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
