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
    "5sBh7NemYTEkx7TatZtk8puaEcVSdTkJAEYFTBZCvhXY8iwDj7wNjVz3xa8Rnc2hoJF3d9KAMpdeY54RJ9VcZ7h5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXLgHPmgLw3iwvkR8tFJrZeXYWKXBD16xZRTSsgQfdJCq7auDYy9iP1FD8S6DY7DY8xXnTEfpbWvt3i3wZ4h1WA",
  "key1": "2twuY2CyjMUhrQt6mDnrepB4LWBJve35gFEmG6iZtPD2NfZn95k9xRAYTvxDwuWFNXDPMu7YKEtAXxh3BMstMKoB",
  "key2": "2pAWT14T2mS8itQhmUthwSQtd9Uf8pLXm9LEuHibXtqezDoNsvHPzo5KYD2mTDToN22McWFFPBJfTtZFB5XjnMKL",
  "key3": "2JeNMBVn3LRupTNejTMSnufPtn8VzL9kKRFp4nVr4rjfdW4NaPV5LKZjeBGqWYo3sJ37V1pxkZ7FWDSUDsiaN1vm",
  "key4": "2qALmg3a75gernz4fRnjChVqegBogskrQMmvpVJHuXewDWZZyv7Rk4erAnjEiLzEaUSwTUo7AaDwk312wHj2EmNE",
  "key5": "5RH5Q4HL1AxV4oEbGMByEuERAB6BfQomdUU4evfFrqVAXafF41DiJdjVyQvH4F5zbQobqJsK6LVVquDppKBYQiKu",
  "key6": "5pLHtJ4QUXM9tZSok5g8fiPhK7MDHpHCLhSbsyFJyNqd7seG8DTjuGf8BZWxQcgnDCThPzdG7xsZusMD8iKSVZkh",
  "key7": "3Na7Ms86v6EXMn1Ws83rBAp5eUJpzXH5fxmW8JSYKxiCspD6n5w6E3tvjzRZ3orCYk38pnsKhr5oAzzUX8NqaeRY",
  "key8": "2YyitW8tnLuFfHutrq5SU8stc42HwcyxHv73hH5T9wtnLZU9696EDTmHYq5QPNSRmdnhEkPVrqEJjdWnveU4Azd9",
  "key9": "2cBuZheZkMM3nV41hri3VhSTu1UCr6Nv6fQWTt41ejT1Wz2ZtyXZWWWfKtrn33oLrQQaUNVrH3Fz4Xnu3Vsm8d5o",
  "key10": "23pm8f44imD3XSvjyuB1DYbPEjuBU62yYQrDeEWMr5kFHpzXm6P85bcjBP2Kq3t2V14ZZsbiKjzyU1yaAeUp5U7E",
  "key11": "3jJXV3epbrQk1GtwrALaY16kRffbhuhDhXMtzXNk4XuPi7P5cBiTzkVaeBVQsN3Mgwxobkqp2YMtXYWsVZsiJd3j",
  "key12": "4fsSg8vVsnVDBcMcvaD7Kq5hkh5wD2UTgsi2MtTcCKx34NodPquA54TqhP9usvXg1Lo3mHV3HSzeMwLmRJ4ofyr5",
  "key13": "4XZQ9TqtsEJ51q5nXEA6XQFE3F7C3tiFmnQtyvvJQXfLJRtHhYwnaptkZe32THk3dNGVBeBA7ZFm5Fgw3MgCFxbS",
  "key14": "5U1FQi7uzuwNJUijhrnhqzhNHSKKhtUMP8B6Qgw5e9okGgfTyzCTT4Si5A1ajXUGVejtjK8oVU1cZkcqbAdrs9D4",
  "key15": "24PVyz2eoAxN1d8j7Ti8NR2boMvWwbwbGtwfgMzRQt3hBmD7X8dBUuT6tRnKeyL8CuNaLf2aDSttnJsHyCAKx162",
  "key16": "2DDA4yySpAQsYAsxq5DbDDLDFJBp7uBzsQt29H4bg6eAERFYyx3H1foP2Rz6FVyQDeo36MXqF9zKTkazKgzML7Fs",
  "key17": "2uDH4tvoJWTAv1QnsaMrqqTcci8DiCkrK31J9yHEGCSzanEc1Lc4szo5M5HnPvf22K76hAT4Nr7ihLuXUTayT8zy",
  "key18": "2uMdXQU8WyD64scmtptadB6R6NXzBe1mdxTe9exL3PGHLhEW8R5KNikJfiT1pnugKCr5FpmQC47pPqooGAoFAozZ",
  "key19": "5JE4F7z2XGjoS4RMZiBAQLW4AxYBpdyoTz3iA7QpiDijSoyzddhyaUQZZpz2NsAFSMWo3nYNGBYUb3THGoyXcPDs",
  "key20": "3wiKZLjhmcKZCibnnu22ZPHhC1Y8HTCvRfjtyS4S6yZqQEDA2CQ1FZusgdJohQQYhHCfvzGRvaq2eBbpeZtNP7v",
  "key21": "51MoUZ91LY7a1732PUtPTQghrPFwUzg9XrRPBAzZu87RgXKcUqfDqiD9XdyCgAksRYfDsqqKiQNnfYEQx9vxjBxy",
  "key22": "12VRXVHVr9W6BXdWb8vZ428XLJJFAuRxvXZvZzQ5JMXJbUo7c3gXQczgS6b1mmUo7KzLmEH44mfcYqB1L67REid",
  "key23": "29iJ1TDWoN8HGnZQyz6zPXhxBgU5enAAjxx3PpfuboZe5PPjgQujGpkzGVwjgdSxQws9kpzKPgAt6Csf82EZW9zx",
  "key24": "4yQXHsmLu6b1XDVcp81fYFLy7xyZvzo7yzFeqJ9LrZqZe85LTeBRvzD9Jk1H4R8xZbSkqjPp9yiqGVSax3V82FV2",
  "key25": "2jf3JKiemVpCxFacNj9rhYvwv7XpZJRJ9toyCv7hEFkf6hET21jwpx27M8Lp6NuV4ZHxBs3wgi4AtQSwPrB7xgdz",
  "key26": "62yMSVL1Yg6x5W2pTDWTWKt2N3Nwe1vhYUbGnPLotukfE974J9CLv1h7mvU7MrWqwpyMN1k67SWspfQh9s1XEPN7",
  "key27": "2P2gg2RaZ4jegxmfyi64ZqRS2JAkCsKZcQFrDukGYEDGJ8yBM9ybwFHSeiSVt3z9ysrVaHnR22F5UAwHnh5VMHyU"
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
