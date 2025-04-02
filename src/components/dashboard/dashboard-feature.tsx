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
    "45mdsw4wpK6UEi1gx9hijRWtCXtgiHtBPgSAdZjq781Yw3b9DxuA8p9qJseptg5NLVd3Uc35GiAAbPc3ZKnPV9CE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZSNPj9aBpeT5wza8y5aK4XmXuuxjzvsp1ctfMdKDjTJSYkztfPYRGFdAM9di1eJ95sPy2PUHEftycMW2W5Ex6qf",
  "key1": "2yWW7exsCaSuaVUHCfa8HM7SWhDg78uqjR7e9KTh97kkVgiowifzQvMoCgmboUnGKysLzRzx4FPDVX3pseqkqUSZ",
  "key2": "4Qb1JoABgaVg2ysHcRodfshT7ZVK78Ad53ZPnS3sRTtniy6QpvVcVYBakWcrwP5GTRANTRNi3RB7B76rXbKSs9ER",
  "key3": "3GKzZmrwet7cmL6qe3aCeaPRBaNPCFoyZzefter2AX5uiAqdpaqHh4oHT9jrBgAgVbWXZjb8rypqKB3CC3KtVHmy",
  "key4": "4uV4LUbD9rKG8AX7JbCCgh3jeXmRoigaPBrTS9rahmb6e9WKBf6RUyauta7CFQKYdmnK6chXLChCocepqzs6BvS4",
  "key5": "3KtDBk12cuaCPzjAfEV1MZe7xdqyfCeti6jhq2Ntv57GgcTb6k7fFmkTpYRy2tnnRNn8KNCvbM2UeDDFQJ41953B",
  "key6": "34vgUhfcwyLnMPrKRM8xbwZffDxHU2sFcXz3WX5KjxqXwjdoPnqqGvJStQG34iymaksctoUn6XbPJt4uznSWbqkq",
  "key7": "LyVogLKZRLq98UJXjHf1tME9hxCKgjG1nkmvTVGZTJDcKaKXRt2gJcaRyRxSfiy7NGtESoCXof8TNNkja12d46A",
  "key8": "5Rxpnipsqsagy6k7uwYbs3GW5hxR1MFNJ8Surrjv5X3xGqFo37mX29oLDi56U1PmmwFeJkaPMvjhjjNabgTJrVGf",
  "key9": "B3oV5ckR94g7s1M8o5ubSk1cepj87i1SYG114NSSBmmNXg8MH1fuz1SLCgLWqn3kWr6H6GeuZGL7dpYGhxt1Xis",
  "key10": "5hisq9Eu5JMyWhncyt3gFrLitDU3vmQSxaDtMZa15UTEMgjZvFqoVF6xRtCo9EHZctcEJQimc2UrHe1dJ2jkihJG",
  "key11": "5w9yLYMqkj82YAHQuAL7oQv6JTRRm8B4JSU2xekKUknJNNVkSjMETm5HeKaqSaurCXt87b25WDSnZRiEcuT69ytP",
  "key12": "tgtokrLDKnoKctjfDVfWLwMN7158qoUdaNuM5AazBWaUKdV1SaXBVrqhw9QyBJAHZaWQCF3JKMvpCus7wQLddEX",
  "key13": "5vB8M5oUTVwhXR74QDQ4hczFE3LbXQMx42dprU8WWSkPJAciKL2Pgf7pjLn1jSNiSvVyKEd52yV9oqQ2XFseWh8R",
  "key14": "3vjUuNkF6vpk4QG9Rgg6Vawa6WX5sdUj8XfVjPsX4HMGjgU2BGaC5VM5DKitJ4hGyg1USYdiEnCxQ9wxAo4sxNxp",
  "key15": "4mi61ANDxfUZgsEisBfyUue6FtsjgJAoCV5yV8cx6oCts9yHSc7zTpaspMV8uwRJhoXGZPRrCt7uPxtV4KqcByN3",
  "key16": "fY6DV3sPXswjTBTc4HoyZPvCxK5HjF7jcARfYRJpNA1iivhbj71JJj4aAoRtoF9NFrg5tku6pwvGWtifSHG3NN8",
  "key17": "3UkUVQ9E2TqzJSb2hRdFG1HWeBTwN9VyjLMvZ93AGuwnQx1ndJNpFYLUv7CrbzXgjebRh7jtPmWyCiS7GVYFnKXB",
  "key18": "3gFTDRUiC7Dw1jJY7a97Trzxph24FmqrQGgCEu99yZJoiGxkZ46i5FzpHwMAP4a8RHKXx8axNE4VFDvBSvQrPs5q",
  "key19": "38bPxk83XpoQ8wEd1WjFqGta9JWTcXdYjBVGYGbVqBMrYbPS4aAuiuJoY3HYAsY5dLUXMDymHMB981PJJhduVuNX",
  "key20": "5cRno3cwJAfEjENxCkfEpqxgXUFuiwBgASiVHC6WjjiUVwsVde4EX5MCq2x2o4TDgByowsuYzzJqKYMH7sLtJFfS",
  "key21": "5B9gwdZBVWt49e3H1zZjeQjA2wVcTnFLtuf71jP3s1LXbHbrdp54NLhrH1UWPSsgKxFc6rXKTaNFPLgUMxvHaEZu",
  "key22": "uT7c6X3VXUUKVpuViVdoDCf4xkS2omCLWhUyQVoWRxT1wGQF84zHUmLPdKfBtD2EaxZH9tXmLTWbXwyBzRjZW16",
  "key23": "3vQL9sxHYzKFcamToJ6qFGAUFFQhjZTgpp3hmW3P3gNhxXuaKW9RLxLawgixFESbCdUofWT49344Rm7cA9kYYkTG",
  "key24": "59BzrC9bTj5RfR9fBMu6XzVK4Wghsv7wxADSp7hT3w9P5yL1G96kqDvM1y5tm3K492sZ8sW7FyppbJXHeqFEfocu",
  "key25": "dYSXVrnHhNYBHZMQdmcsQgHuPafDc78k9fbkqLCbpz8Jg4f5w4Y2nA9Atc9mMTjNBcQnFUGzJnvrPx1dwBWzT77",
  "key26": "2SLJGhmDV48QM1WhFRuTqEcz57rdAQSF3Az5s49hJSDx8W6QJ6S8qD7eryiWjBKYe51Gsqpky6dagWv1MtD7if1q",
  "key27": "5ZQwMUKhAFRYJKNzQUouUkerkuiGifvsJfLfvKWQ3ms6p8wpxrFJACLf9aFTkXdPb3RVmMJyW2EDdMa5vJCGjbet",
  "key28": "4prrQHSB22E8H5axFjjUrApAWtiJm3vhrgqkSbP8xV8k6hu22Fvpe5PToFs7XmjiuP72nSmC6CDMCARkqziPydEk",
  "key29": "49cuYoicwqZ8M1SmtUnPXtK68Wuk5RYDHhsCFYKXmBTUxc8fZLSoVz41bp41qzAhqCp97UUxm9dtsK9GZhZE3Q1G",
  "key30": "3T5eepCqJNsSHWBcUSRifxLuom1XJyHU7vhDfeX43DZhF7SfxRVnsY88jQtgk4Vzp7LbcaooPRLnqzhkqBHp7Ffg",
  "key31": "zGK6tzSfBi6RZzjNgn5rUw82yFdBZYStQE6AQGUgwU4xvTMU9jhDnUbVC4wPcYVco1s3jJDZJ1ZAUHSbBwLnqNa",
  "key32": "299ti1psRwtjZKDBVx7988PiT4pTXwWKtfggn3Bk29XrQZgJkPBN5xrJrbvz6pj1r76QH4zpKwssZ3WkPfud8R7r",
  "key33": "3cXQrmeZLugr8W6LJixxW9txXJ3atEzZ9wo7xCu51MbRwxSm6NacvYcUxVdXZVZLjk1y8qnHVfKNfAYSTL4Ve3mP",
  "key34": "xdPzrd7JD5HF97tDuDAJazYk7ccJxuxNdqppDNP7SsNDmFsiBChntJMiSCUfbhidFE4s4o8jngRR7AxE5RpkgQM",
  "key35": "fKaDJA2ptFArYVx2FAMsp7eVcnvKMQEv83ip48fRnLq2xQwGvAwwExj28Y485rv7iKwumkcZSjaHV4tUpDNMYVf",
  "key36": "4K9BjisNm7Mf2vdmbgsVsgU8Zz79awLNPAuJKNFwu1NUz3jAYNgX62Wv3gFEUjBSYLg47TUE9C8W967TPu3DxkPJ",
  "key37": "4uhDe5oNYKqkrqbnJ5r5Cj8hmoQQc4nBuBemKTVaPGzRPEVw7XaS9gBumsRCAcP5Y2JGcaJK8jL9fHUvaXiD6zW",
  "key38": "4UjvQ1V6qdC9abS9oKjj2MLzn1NGUUHx3bby2YEBkZsSRveo8yFqFAPZzS1XyB1cutNKuuWVEvVbuwGqDsUmQ6Vn",
  "key39": "2XCCaSi3kpPVq7Gsd9jPKK1bJwm9G1GjAf6X7WH82zaisLZxyhRdWzWZZohVL31xDcQs4AscYniqFphWHbddUCmi",
  "key40": "4EzeDDBaDfYJMxDsxZAMdJDYRcn3tquRLBFJ5xKv94yZ8JZE7xHgJCtsHj92ErY7LVv5xnz2XusvNJNLZboGpEp",
  "key41": "4rvZiUJi1c2vSVCtmGe8oB2ZzBFoMwxnzLA654TqaTmo33YVTLyHiEeiZdQ61spVBfwsBxKaLgC5uoi6QEBiSt3S",
  "key42": "3FV1LLKokYbeLNtsx8ZAbmsHgnLH221e45aM7Wp8LJtEnUCVQWfvojH9XpgazxtRauwe1sUUSrwDjAnvzb7hQ9H8",
  "key43": "6bcyvRMzJDkVMxjATDJKcPUmRGquPxwT1ynZTAZzL3ab34HwngaT43Q1mHJ1gCoE1i13aGJCng5vwZP25BRS8Wh",
  "key44": "2sxknaQeHYn86JMVD5V5nTdxMnrA4moPrpTCbv41N3aRy1pmfXgCnBTKh5xFmaFKEn3Bb2cASQJj5D2tfiXAsRqN",
  "key45": "55K6SnJrvMduLh9a9D6pAhMkLiqxe86hHXnUV6vGLgJU4hUeoA8oiKJgvccnKLEcRn89kiDnuRU161N3Sk5f813r",
  "key46": "2sBt4SbG6JZwapA6S5Y8sxNaFuUYZXqGJZAeZa9WhoKvkMjBqmbfQ95sgN16wGzJwfa9JbAjhEWDWb7wjJjyJpjE",
  "key47": "5H8j19ckFBjxrx9pr4GpNUHLZLXxTVg9xnRVEJ7V848A9qk85V1LDccpu9XWfRxyhHJ9yk3XChr2vgXmKUudWB2E"
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
