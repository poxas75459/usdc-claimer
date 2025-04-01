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
    "6Yn4oEkgj4MGT8fMP3VebqKWFLNiGsu8mYjyEkWTHpurecz2xyoJNoHBdBKx5cbeZsx31vWPy2q7WmHmH9ZbL5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mqtVdHtSTSckS6UdShLDwXBtxWr4eixU8DxodDpsexPix5CPJJ8eQ5xSwcB9YiQTee46h1ygayAQi834XhU4iS3",
  "key1": "4juQQm3tepwL9WNZYSaNM89AweF3cL92kMgfZ4VUPRHZfsurmkcnccTtx1w5NyMs4AS6ehXCyApntZhmnv4tXayW",
  "key2": "4FR6TuU2jg48sepwHy3fpGE8ft1ZriQ5STAYfbDrnZELTX6UD3yH4FkM52JrwzFRgrhXFgAxBZGtnDPHmHVctq6W",
  "key3": "3jzoQAbgAMK8h6whDWaHAURjXY5qoVRxjaxUxRoCGPr3LuFHcH6qJk95abtsG2c37dZgBpFbVcKmwwjLPE83zwfh",
  "key4": "3JGjkqMC3mn866X2ysTYENTZm6GGSRKErcajzqLapLK1N3La4KUYsdHqrHZnR1QKQLPQmcEu58Uk2PBN2zzmSSfW",
  "key5": "5qpb1X6L1gV2Qmy3f8cG9byHpXRgSMjttskHwQGCe5ujvVY31bFjp55hsCv8esRjXeiH8W68A41j9DRCsKG7w4zQ",
  "key6": "3weVkf83Z7mQkGERdsE2aKFMW2CtfmgZ76cJDJmvGBHa15bp58GrW7J4Dd4qhar5NrdFji5GpBbeAyXeeT49KpLD",
  "key7": "5wJqYa1TVfNUjqwyG9e4pZcrk9woj56aUPrBEkPQ1jdkVeoS1bRHrx6LXtTe2Hh5xbqer8vy8FhVsX1cMipCNuKW",
  "key8": "3e5phstUjVsnMUN3VMVaduPFhaj7HS9NJmYqzhr9QJs7fjg1TLn1jK122txqLJ6kd4i3wdySSpxXzohpMY22wgpv",
  "key9": "9irehQbjvzo2EUwXVFV23KSDaE5Hcr8NqZp4DvZmgspibq2v4Ef5T4uNDet1gvKfM2wSZPWPVShY5EMgVwX9n8U",
  "key10": "44fRSJEbzvo1WctMAJLkCcwGKbtbvbj1DQjjn1yDSiW8fzXE6mukQgtLJakNBuUkaeBcY6yRNR5sWKasGGp3eUUn",
  "key11": "25Ci7H9XE63dbzRcDfoUYg4gMdh5z8B4YM93a1stQE4CGWgNEpgnpBWfJdGFEwBjeoCjqwFm5EoEH8bqjizSxJGq",
  "key12": "2h2mKvtncPj36pJEoCiBxRgyjcm49qQCrQJ7MUU6bH6bA3cbiK7zs7oRhcJ7Fb6C2cFwBi1rYbLQCZaDgKCy7WGe",
  "key13": "3FByJobLV7i5kjZN3TC2Fpy4jjai1VvPwHFxsQTsXdyouwGy6JwXUQV5bADkSLLKuKDqZwyHgQwwBzxWobz5g4UH",
  "key14": "3huwphAP9PQ8Et7ds4bp5pg27vT9TWh8JN23DNZtUQB6xtXLZxj78hyzViRigN68fhU92Gms1QUfQdPaFghJbZeB",
  "key15": "5RVUp5o4E8fRMoX1noVV1kuExK2ougPw8XpUAn1zqZhf8FuCw1Udyg4ZhoJ92ps1hPMC3gm4pLAtcyzi98Ljb3aU",
  "key16": "5TYiGDYRB6wCGxPdLaVExLcrYfUxP5r5UxAgMnBtB7yaxwLLZd3K2rVxMLs4cVQLBHy7HBeb19epYaQLAHYVxyBV",
  "key17": "2iybnnMiiFJwZkGQi8Epj87SXVPyCTWT9ZbbAAmvpPdr6FxC9znB9TMrbNvDE8f2AnEYABjsquer5rV6XEit26oA",
  "key18": "kPMvx8nfrphx3Xitr1u1TZZZyfeKLeYZDJcebuwrBVCqPAgVUj1v5Cj7cFoNM7irAn2pbinYzkFF2j1GxgHkNdN",
  "key19": "3B9XxEQmHfhNDPYgwKi88H5eHpMW4LmjfpzSYbznCVg719ghsXPsqwMWY6Si3tx5n7jf59JEjrFu4GuL5h8A2ad",
  "key20": "3rp5B8fTPfPdwzM91GpeB8nPJSnu8NmvjcaPahNp4T5W1kcW3PYw8AiPAwTMqsrYN24cJwXRaDH87bMZGidQrn5r",
  "key21": "4mw4Eq32Xdun2kY54ocgkMXvx3zDpGpDgwwtsY3E4hKPJWqbHJE47W6BnhaizDphytbCyZTmzZXBHhrfhG81obYu",
  "key22": "3rwGjZMUqygojsBkVjbfQtT4RmRGnoBiX2XggLnfPJqpDmt94msauUCeu5Zij7knbmtzcczRrWsiBJoHUwRx4Lfj",
  "key23": "5PhRyZf8SD8kU2gVtCDHSEvaBtoGwzjvNCAheBtdmU9Acq3fKhCiMw9fSdQqszBBtuG7oT4kvULFHub31yRiWjS7",
  "key24": "2U2gQ7rwaW13w3JAHHUcxJwhp36Apz1SHfdssX1mU5VnNRTLX8MwwbK4wRGKJw9h4M6yf4czAvH7uZA2kmU9TQ16",
  "key25": "4oRoj9Yu7oAupVFfXAAE75SWbwb4G1UbVwy9Txt7X6sYc3TUhxin2xf7HJ1chY8D2k2jEuRViKR3ELCKtugvV8Z2",
  "key26": "5CSExrf8FPE7JU4xDpxgPUKTHxL9xQ3tRWKhRXhhp62AU3x8ktk83jDUdqvNDJFeuY26WeTrEkw4Dg1BLsaohAsm",
  "key27": "4VhpvTxDsNYCY49KY5rwfXESPSTSuavLpVVBjZSYqAi2d22kfqis51FGB9eJzNRKYubqP3mHk6rKT9iSNXrPjm5u",
  "key28": "3odRxsHVeaBSNPEJuNZ3ywaR5KEVMpQvTnuHYm8qXtpG1dksHcF2PMAc1oZTFLyE93P5Lo32vJ6rDD9wjJzi12E8",
  "key29": "3jSKdNz7U2j1HoZ56327SCYuvzoDkcoXMZ9UNWmBArA4KxLfm8S9CUpGuW9CnpW6QTD641Am6sSbTP7V4ejTeen1",
  "key30": "5cPrqmtLvGfptDSg3RSYm6NS4ZWyWRoXTrekKmusKVVNaA8hXQzBgZCQSwgMT3BPLVg8D9yNTCxUbee7KXB1tbcv",
  "key31": "5AM75vGMbsT9yvL9EB7oy6vkzf6s6MohJ1xkhrCNCiV7G9oyyDr9GpoQF7GPyMDRQcwJwVbBPQwpcDRcJx7PVdyN",
  "key32": "3d58MeDQ8axeMYppWj5aa1L8fC7LtzYrR7ZfrbcnRph1zeMbWQzZYVXTyp5HRcqmC7FCnLRecwYuk3UXE76A2Eos",
  "key33": "4CXtcNbEQ7WPxidkQjCjAZtG7A8ebSa6sERZLf2tryBSzHTmdJB22AMFGQFUjuzY4yocL9W6xyX6sBHJDM8wWEDT",
  "key34": "3nxpSQuLHYMzthMbpjogvmsRuGLMQiVENtxUk8xPbjqs9ivFc2ZFV6xfTRJsw6YQ9HGQjEUDFXMKNzcYWZ1wiBe6",
  "key35": "JB98H5SKdvYLc43eeQDPrC46DVPB7ZJGR23rV8mbCt5dFGW1oNY2uM2sF9Gtb4QJughUBJnGk3psL3MAsBnAttS"
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
