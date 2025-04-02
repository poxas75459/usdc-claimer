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
    "3W5DJr5Mwhrt56wMWk57Y2mbZARfrxypJpXWTePPWsFWmwEihGsb89hvdztcZ65Z7fkTBVFqUZ2QnUkficm2JjAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DVP7JkuWAmnvtfDVcxsWQwQExi32L46hfEbA91EueY9r3h3bLkehnhGPygQ5VGPsrijK6rac2fn56JBh3DopiDD",
  "key1": "67nnRaK96znaaVX1NDpaDae7dANMVUwU7NEuJKQso47nCnPj18Q4UfLHrR1VHsXYi6wNELpj6FLnf3aodjWERLfz",
  "key2": "38kQ4WK9Ws5UFfihPwoqcMA4tK1Zo9HM2Zaa8TXsnxSymP9LijeTYezAiFJU1j25B1Yq6mFBGwneLzkzaSK3j9EC",
  "key3": "4ZrbvgkZzeX9emTJk1vZqhpJ4HnUL1sUTTUHX9CjS4ZECLEN7KjtCSqpX6s34tWAgm1dw4KLJLvu4cfixHtsePBt",
  "key4": "jrAc3nu4NGGWycDj3sJe4k3vNFuCHsekCyrwTSzikFAChNvMVYo8CpGGGG9V1dWdGKQx4af8MBLSyRDAQQsKqbj",
  "key5": "2dkmuDskc4pXT66jDWZaph64k9c66jPvVbkJMjrwJqrPynWxAKob1d7aBZ37GJtQFFia95Hz4TSVfjxsBonWAU96",
  "key6": "5Un7WcLDMNwcYs4XdBgA1Sk1JA8m8KDhq1YUmJoQBqDcfmBSw754v32WuaeNExZ2J5cq6695AN1PcSHuKaNR4qre",
  "key7": "46yg4Ea8QYrCwPCzFrtbCdEyxBkiCo4XBE8EPn1Wvp77ByDeTmfeY3yYugf4P4L5TVHHdmNDbUQFva3Wk4roHFMX",
  "key8": "3cZrwRrmzYrhF89K9D1WtjYPwgCrFPZKebmcCfgBgnTBGLxVhgKoKXbZdZagCjJgCZUeuFRJwnxcDH6xRgoSEfA5",
  "key9": "4q4tnWizQiZEZF287N9g4deDrackNoe13558hSMAEA85cW4NDpV9qCwFEeQNtbyJYVanN8gcM1bXvmXt1FALQyE8",
  "key10": "4Y7RTgNhfSDsTmeAtayZL2hZQYNy25knJ9j5BKvsm8t4M1cyBbxWkmxEXTZZc9ZbmFSBUJi2FM3F5NP1LJWEBkqJ",
  "key11": "33xL1ypUdgaMt9rz6XWb6pGAtpiRbKfYufLLDi9z8XZAniVtbHLeK6YtxskjrZ63pGm9A8XB8c1rE8CVTVA8yKx7",
  "key12": "3D2B7BZY2E6hVMS1TnpZEkBtczpjdFPF47prG3AQqc7QkmWBa6b6mTUXB6KxFGzmB348hcj8DDAAAZa9qW3mEKK1",
  "key13": "4pKJE3nJ1pvwspXbtfkLBeh2SkZrTehRfELZXdqtcMNpDVFmxgxRnGwuS5Ex84JemodZ8gGq1rq28LNhzcBXw5MW",
  "key14": "5wwwR6BbHFyeXDEueFYfdrCfLJSBdyuUVFM5G576im8kfecY4mTGTLQJF6nkBqrVwfKmZzmBLeaU2FS71Hsg1eQ1",
  "key15": "46RVDqzveMHmAiWZwzaqDru8he3BS3mrM65WLYF3HDiQmvB9R5pQEM5cLvirYP9tVMaYep2kNfGbZDzF5zH4wHxQ",
  "key16": "4P4bAKiZTc8ri1LrfX95rc58TvCtzDdJPGhnHZSqhUMwwSX1o2BJtrPfZKJHKwii49t5GLi4gn57aQ8Mf47v3rSn",
  "key17": "2b95i7vC4hZ4zsoM7U4pQgXff9Gt1NTbwPxUYf3qzYVdnqeKhavb2yKu5ULNPKgVTq2L6XR9ZnUhfCQ1gRSGRSmo",
  "key18": "hRb3ZS2Sitp7tTh2cnWuvjUov8yKQXxaMh2KyLVEMqyfNdanh4vB5De5AghjFhSvQHaLsYpV6gUgosNF4aCErBC",
  "key19": "33penDWN8YAVmgHhfPu5sTVQhWJDhud2YkCXsgBsMudsZQakF4Qi8MJ2dJ6Zv9M8UYgcUZyzcXyRNf7EUkXdPmeE",
  "key20": "52Tfbbk9AQkVC9rJ7sMYuybvo4Vp7bKr43Fk1SWjeZSeFg8PABLg8khT6QYFk9uYqAn9NLYuT3XhuCYzcaktYNbg",
  "key21": "4e8UEiYF2Su9TmXAgmMrPYEQCsZntubdpRA2kGswaYsdw94pLLem5azRjJ2YFQg4HF15L4TSKAUb4DyUgHUnBZ31",
  "key22": "3SaKnvupBiDU9Le4669HmtDEvR6YqHnnSH73FMKCm1JqZ96kabWzT3wdDbcCUJ36Uqv1JddsXgFax9cEaVmesGEs",
  "key23": "2Eu8Ai8wGRStzZiYVG5FwSWi3SzX4sE6eyVbkcStaDnRjbm2fSBNf2JocntnH5k6swfcM3AHf2uFYHp4Nq6HFkTw",
  "key24": "2PE5fMf2YSZxVvsZFy2hN3Ja8rrXpsMptiTaRKoo4mUoP8zh2X675AsfyFQSMQahtzFB21zQ9t6BRUdzZ1NQ9oHe",
  "key25": "24L78ZEwm6QHxT2wXQaDJzEHGELAe4PjDGjeX6AsxXrNY779ZLf5WqQGHfAUbWX1yjXRKHcqALqResQD2xUscMfQ",
  "key26": "3mqzQGzWCUAKEZXAjCZniyGwvHjhqcrZEhsxUNhmE7MrqSR5bH7FwTBZp7pRwwg2o2m68mJux3nusRNZLHwfLnqL",
  "key27": "3ESPYxLiAPzi4xVkmLiC15PxmMnGSXCSZKGTn1vYxMougB9nDLPriPkk3sXbVsLgShLVxB6L4u2fUEPk4a5CBCma",
  "key28": "59XKCZCtW55cHPLuh8wYnDRG2zN97x5n52TgiJyBnoxe5Q3GTTP61dJN6qQnWFT9RjBqT4dtzQvh5bZLY4L4J7DC",
  "key29": "5GEtViHEMXnLTKeM9WPsMSa8sU9nZ6EXwKNu1GsVacfZaPPX1qYtrEq4F5UM9puoCzMv5JaPS119fY33nM12SqRZ"
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
