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
    "5sKKjBZviLSM9GDBpaxz4yN9pgpCZGnj6HRrzVYhNmsGMczi9fQTjpd5FhdZfJDXUZnuAkS6Hz4PECPm5gsK9VmH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r82GG6jr24B5nLbuK2sHi1J7Qu6SG8gTswUe3MrvuUFhvLdtFE53mJrSKwehwfx5mrucfhiXbGhbrzD4e9PEQh7",
  "key1": "5vvegwnqVQ8hzUK2vDCzESLMvcRdAShZbK3RKYzwEtPZASDs6dHTMx1rjsMAQads49G5z9xkaKEKgb8LtrrTzJHA",
  "key2": "4ws8czvZorFh82Uofd7hY74Shwevi8xoeDKLyBCthiD4FUBK52PyNsSmiwSYZRz9bPVTnfgk4DGjGK5aymWZZZRu",
  "key3": "2C2CPHKhL21Q41YkcAyG3AbGgBAQzWbnL5HrP2o162RfcUwjhFNNmwfyo3YP1KcqZbcN8BVbijvpx9UoBhstrBna",
  "key4": "5g2symDAsxHdCtgLT8ogCh7XL3caSrHGk2b4F44LCRF5uVh9o2gdeNuAdjuyQRH8MfsCumMGGGve1kPpE1ZUzDJP",
  "key5": "5gHAK8LFoXdiUysertfyWsajBBMbE7xe9fWsYnN4BnyUBPZ4jJusEHCC7QeyzUU38JeEPncCR79KF8FZUm3j4xLk",
  "key6": "39u1TtBQXL9vztmGAeNXmMnnLVjSckP3STAdDbrMPHrnnR3eYZeJmD8STGumjo53Tf1QvQyDFvCBaW2yxry5W9aQ",
  "key7": "42BXddUcp1MdEi5c7c8HcdyU2XM9DdkYr545chrF5Vk8dHBiTTrGobanhBkjaWo7VGbhVp385Xzbm9QYd6WFvT1R",
  "key8": "5cy9wSz7FhRb8TvcawJSWSXmwJDidZ5jckWUSkqdth23x6z4gP5Zc1CoXarvH48zgcgMmj1bgrYjhxyt4QfwWhRq",
  "key9": "4DhaUGAqnB8GhpbvyNQtQcHvJ1j2iJcAVNoXFsgXXuxZwa5DcikhXtxNB1G68Sis3CvLVnM7B4Tk1Ggwid4P6B6E",
  "key10": "3AbwR8QPaSUHDt8iaLdEPMxEj9XkVxTgr7Wj9osNSoUM19TYyCYrrqmj7VfywVpB8NdGwtptyemrUPjNzUQhPcDq",
  "key11": "woUBzc9AeU8nefLXRocuW8h3BiCuDfPLTshsjfC4dzp3VTzmRfU6i7sh1Etv7tj7rnSgsiz9oPAZAV3UMEWe7hr",
  "key12": "QZxoQJH2m8PpzjwYgX532QUatj78XsybUpU5jmozQkUf9DDjRS28VB9DvKq6dVBnqpQsCVPXmU8BY1LBax1JgAM",
  "key13": "3PFuE4H4HkXNELcXVKdKo8zSWejJXG4dYuyAN1fMQKgLyc8uNKfaf2pTA7a42wCmWftnh517hRH6kQEUa5WKKGjx",
  "key14": "67LUSAKdJEi3NLGhktph3ojHV6dvkMyaCygCKum7UrfGJjYtePvhSwRj8HvPmxZgRmHbFUwTdoY9Eaktc22TZuBo",
  "key15": "31dVYkiVpPctmhAonisRgwp6xXitx8gnkPJt57kP29FL4iWhr8oR4ESLLDx8quF8Lxrs2ESMdNi8GjMSbbvRYHky",
  "key16": "A7LUP7fwe4xD5n6EdsWkus244VrbxqWXHP1E28X8bsujmdmVSu76RrYHVeFevfyQWk5kDUna2uJg5rW1kDpTwaW",
  "key17": "44TjY5hwGkWEFfuGxCVhse6wNoTPnhvmPwsu3scJoepF5r8py2o3vNSykhzv1FMd1agmWAsTbeDRMPcWA2Br9eCy",
  "key18": "2e8SpK5kUphngef5fTswbEa2iPKHbhT52d356goZfHxFPNh7c3YcXrayxHvVVE1zkwmvtQnLcbYkRfrBQpmveuSM",
  "key19": "5oTXoRU6wZYLTH3ZL4RaaCBEoz4Bv3KJLKyKK3X2idJgst2UVg5YmZrvERWsz8Y9UahqgrVXKvGQXZzDXprpPiTE",
  "key20": "yTYoacMJpdi8sZ21cgCmKTARHuMqLqs3XH79vg3Zehp5ahqVeuVzCEmfVJqk7ykGwnLQfE8vVKTt2wbLahLcwcL",
  "key21": "66EzVfxM5frV7q2ANPTu8zGWrVbj3MK2cyRD55LfeP14rCY8EhsoJTHzcZctNyYEte3Z66CuAx2i8P3PaWg6sBCW",
  "key22": "2SLGo5LG77bcDLxhaR14fnwUhJsoJsvrNddvC8No4ycXUfWKSDfZKGBmV5aA1yqALyEomKvXX654KhYCH7qp313e",
  "key23": "afhxUq33MUVkRmnJJoRGAHUL4mnduMsXFoLb1y8hHJnRKwEAVG9crvHwh3ZosW5VvRJaXFpnsAb8NCGfViguHLP",
  "key24": "aR5K8DHvVy35AtvKH7tce8ku77nMcTuQABVrRSP82LWAUFdqEmqnLD5FGjnWkM9SMJVmRro2TEjgv5PvjoPugFJ",
  "key25": "4UtuY6B6nDCpUsqrDfHMLmfRRoZH8Ne18D9g8P5fsSnUUqijbS8x1UBraDdPEGHsd3Lk4MNqPo95nsj7hKX41WPH",
  "key26": "3yTb67NHRgVP5bwmNXaq4bM34n8z5RDaERzGPzgL39WdXAFfaxVF2g1nUwK6PUet3B7zdcYMktjYCWnZZNwQmebs",
  "key27": "37E7KHHHZDUz1wBNDMCJdRu7XXjvEhLgdVB4d8JEVuq3VjYwymXYV5r8Pfs51mswgfcXVvHDFNVSWuHYHj5vX3Hi",
  "key28": "5JVyoddT56ruipmCH8JH9fWqe7byAwWWLek5YZQfKYY4uLsU8DoRQwxUSy7yfaqVaNF7EfarGXi1Jkpz3vYV5ggA",
  "key29": "8dt2bkZA6AiCmpkL9FowMMKgbuEikyQYBgz2b2dSmt2jwUtMy7XBdU6qAXtNLyyu1opD21vYAmHiM6m9MnrvxWe",
  "key30": "57skycDZbkvNX9ETQXVmiVdpZ7f9sQqDNqz3PtHEBqbDnmLwusHti15QHJep57VGA7hAVGrQESbJpJJY9fYqUBiN",
  "key31": "isCA6Y8Rf76MoAQPNvJgaNnbNw3zxUoa3KWuURkdL7kG1ekkCrzfTv7hD5kme9Dv6UKfaUMmieLC4Ph3Zc4WnRM",
  "key32": "PtNdtJUHHDV8D5gxS1ELtKUBCsNHHgeqo47WXqTJWAenfc5S4VzQYeeUzXoEf5FQap7NDt4cREcH3WvwQFDzJKP",
  "key33": "9Bqb53CKdzWLeJcQWMga5DpAjkrxrqw13S1JFtRu4xd12sdcPQF7EzUL8dpRosDuVQgD4q5ej4pRqL862q6sshS",
  "key34": "Dfjf8NdCsZN6ytFXtgG5C4KtmzPFbKGfJkTXXcZFVQNRPHNFaFS1LJYJafM9KHRWLStqSLWZEUnMnE9pti3V6QD",
  "key35": "2KUhLpzQaFtpL2fPizJMXTWVYcDavd7u8C1M5crENggp4HG7z7LtHf4m9KLumjaPuxpGSNqrDJXecxq8gpdrppLi"
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
