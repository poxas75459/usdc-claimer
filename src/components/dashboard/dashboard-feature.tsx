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
    "2mVLHdyXcuRST3fkX3uakdawPE28DnzXXiyUdPKfcjB9RfAz1EqYDRUtcf2EhzZBtySBYfK74WGiZEbiZqGRftLZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T9KwZDZmjFhNRARdPKcqyiDG7vTu5NwJDGQdEYw69iMqXBmBmWsSXtTpe3WhVgVaHbCSyN9a7bYp1vKJ3LwFSUU",
  "key1": "3ZKXz2NFFUMNa2MVkoYUdQnMUz9KBYFumfdgoZ5mBgMSqdvAU8h2x2jY8CvvUumgEKyJbukvJ24pyNeKUUXLKzGg",
  "key2": "2NRkCohw1pLxbpwz72AzFohy5UWVQV9NmpaBcwrLA3is9vqEENkdBuyfrvXCximfRezxhN3zWr1FNYLbk8uhuQNj",
  "key3": "525beboVujRF9vDSKWPRCtmQVo1Z1xaKAFHBe85NdvWPVjNkgqV5WnNJjCc4614nrCrUa7Nnf2kosSXFXjLKboQk",
  "key4": "2SB4etjkE4rwRz9f6RmkmKggbg8y2VhgaSoC3HQWMrWTxfbEBiAw3dHb16LGqPHJzmdDW7PZpwv9ztAN1rvrwTR3",
  "key5": "2tDKBU7nbmURvwkD7D84Hh1u4fsjRyLRizyhpLLBd2pyg7Ed9hfyE29AbFmzEeKHfkac3iQHFxMtzjgCkktFrD7p",
  "key6": "4JadHWGbYVysNnEVkFTB3GvKJWPNrHuEvZqhWTMziQLUJhFVAK6ALzVXaPbmu5AWa5jj344XhSLMWBbaJvbFNTJ5",
  "key7": "92nfAhS6H5fpSqgaBpbSVA7VJjqQnNuvYQ4BE8gj6FHwnxuMy7ge32fbTBABML3PSTTec4hAUnFMYUnpbtaQ5wt",
  "key8": "5FYxtpaawHvgu1fJ8czRGWqBKP5yxYtdLn9yXX16RFoMGzi1UN9Ydju54PYhLAzccGCwh4HzzyUTs3dDZC9AbaEP",
  "key9": "4FjsvBoFRHmndqU7BCHzbAX9DbSvULTVt1yph1EyffZFtq12XmkatyPCGjDSvwF7UfrY3pyf3SZutPUqeYrNbLon",
  "key10": "3v1D52Xra7jzLcChEzKmTPZjnWdf1oW7ejGN7Zwx6Y6H7xCSJzgyrFpg5Jftxbp938vm9V9CT9uwKprmwT6Wo3mt",
  "key11": "568NfDyrif1ze1a5CZrg4sJ8DTQjBfx5gF3hAvNvqg9uHSw4txtF7t49V7SdU6kzw5Cuw4CmZniPaip5Lm8MfZpi",
  "key12": "5dzt6eqk1rDtBFPPMg45EQSfJVmgNwKE71MAnRJ3eYiW3w4wB9TdLhLet4x49qdB1WpU6SSYbJYkgbdA8eXJj796",
  "key13": "36MkBhqrLbcnNwKhjDzzwgh1NeSExJy3hF8CYxtacSA2M5rhLjx1kW8vQrvSbvmevTVC5bDLLJGRUNiPSba8VajD",
  "key14": "2YsZ8cMqJbCHYFYF8PgBqQyaJxapgPaUUHpCBDZNUiYaTkgshZxJmu4Qe9hBm7cK3wcPyog5urdNnqzoPNm3REt",
  "key15": "God3JsiXyYVVtCLQAoEiZDYS7EXsEkGcqBcrndZ1vGRsvvCTqVeZtiYqBdY1vsCaqKvgsbfEvo1AcC31xegLbbu",
  "key16": "2romojTSxxQ8GyQKSkF1bgP6P9eRjGzr5BSUgXiJaN4ZeqCQMNRcTUMBToP9YNTLSuZJFwQBpUzswi6XeUqpAyYP",
  "key17": "4tTsExJUr8aFKBHSoDEUgB7ZD7ApHi7mgSs1g6PHdaZY37JGc3KEqRBUdUMc7ikRQSomnR8hPS7L7EMDeW9oxpYZ",
  "key18": "4ffQVzTddJWBTMGWNrR4r3EZpCPcTeWngx4RhtbjjiBDvTndCpAs8uRm2hov8hC3P9epEBaMW7LpQrbvSCpP5Kmo",
  "key19": "4BdGKqzFDS1tW5NSdmzcSquGWp7rj7foA7v4tsd3woWusE8P9ae64rnGgQptHPgVnwxbfnmWkRmw85qnHHKUq7sM",
  "key20": "kyD4ZCgxztdNM8fuHBsHRXHnjUDcD3GZgEU7q7555iimhHTrsiThBpUZqCUMsh5ntwMtn7ou2aSgro1arPNqHL1",
  "key21": "3MzzgDu69NMRxPcabujiaGtA3dGaGmnXA5PN3SXBtrf5kFcG6oTdjHQwhjpMQmoKJwyEXK8VVwfoB7SX1QRf89gA",
  "key22": "4BYrvHPuL9AUtv5xxBzGJ44L5a7JqZpxnJMWThxJhS7BMtKyc1adPvGGZXD8e7qd4rY8GSwt2LXtxsNbrViScQYr",
  "key23": "4Ynmef4DpXWecXDT28oxa5gidFm6uV6dthzcL9VEwNuMsJPnuLk5ECfpP1DTR9UwC9FxjSDUwN3dUyckZ6rY4kAk",
  "key24": "5avc7Bg3nLgsGn4w4VxgnhuVkcDLq932ZLjL75ZC3rU33YqdEhgAhmp5PzhV2ehNSXGPupc9gTJknL3oXEbudD6K",
  "key25": "CWU2sg4nRHk7e4hTxqHuYrqQ8d5f9192i1Khb2vFNf84Y4p1pWhB8YGNYC5ERyQFUXeoURd4MYLk3iSZzRG1iC7",
  "key26": "2YszwWYEa4bmPGtsgzhA6PfRWmSpeSgPKwRB2drzBKuugwvMpbMfiHKxrzeKzbNs5bKbt3wEuQ2zps6AnPFj58g9",
  "key27": "52ZLVe6zben5eEo44xyLG7WPRd1gVAK8jiBQbdh9igdaVJ4GzkZbFqMrtC1bLoiuFaowCh8e7aCHnaZDyFeF1e2t",
  "key28": "4znU1mxGkxohBziehhEsJ486Xwk216SUzqe5FxdefodUiQn7362f5ZNway7rArg9iDAC3vtAgyTRs92aNPFDm74N",
  "key29": "2KBb9ZKSb13djPN4hNkZLounbVc166xQmTA1TTRurSNiqTPjskWWGtxuXYBNXvYjnHC2bcyADKMFvj9GFFqPQREY",
  "key30": "4McrgbesSAXBd8Bgf64iNT5xWGy2Lez9Sgm8augctR4SzMZ6NdGAQe7Z4QyMPiV4hUsRSYTT3pVrLvFmmquKbVmk",
  "key31": "4Aa7d3tudXar5eFqBE1YAobkPu7XXpovgq6QRRakC7UzV4Gp5Fki6VHZssiRvK8cBXqmR8XYgJCs9pHsNGVGSTzm",
  "key32": "gA2fVsvA2Sir8C4LtwTBUmGa1ut8KV8HaPASJq8RmxF3kMhUzMpu8GZbsV6pAh1QBi5bxSBH1mzJdDsvtLZhkEf",
  "key33": "27BzHRVdMmi1QFBYfU1xAq6iChomV4AXpK143MZFWU2uQMQagozDVN54G4minK8oCfxJhQ5svSaGHnQReT2PAFC5",
  "key34": "2uFMnWQoqEChRGZaQTkvoC8qQQP4GjaVugD8LiLZWrEUTBgfHYAZhzh2d31Jnua4L97k3Hx6CRGHVaUsDixCtqji",
  "key35": "3FehBXAswsZdZnN4DXcu8xPR16gekB8mwsHasKqCTB8e2qLVSyX6f56XAxxtKxTdqYAoCJYqzq69SQjejKh1yj2h",
  "key36": "5tENwBh79RmYxF7dZFMbvwBMHehx123voscLbcp21ou83zJk4dT7AAFq4CzfXehpQLAcjB2ap1tBXUt4HCKTX9xD",
  "key37": "4mx4wbybLw9y3vPDDH76TsRcQMUorTpjBTSPVf2ToYU7cGPrpSbN34NkFcRZm6RSTgXumGh2NBko3AW3Uo4S1HE4",
  "key38": "2MPN6BcE9pWqScJBa99qHDViE8Be5my2AbjnPoF8zc7ZZos7HXVL6Kaj2WZTwmNpme3qh3mVbwTumoEirk1KY2Ui",
  "key39": "e6HP7Huxg2DwmkoNsRsNqhWN9GarjBaczgXB3BzKKnB9JQiGGmT5Q3fF9AqLHgkSfruhWhBqHoYiLrarmszXuB1",
  "key40": "5n9n4vQ49xnsauwPPocX8jmtBTH5VMEeBqN1PZNGtZYVPGD4hbmVDr2LJCdQZ9zBKuyYTBtPSDKzJZMJnPtefJTa",
  "key41": "2HfZGnxe8qR2nVA14ezPVmHGHwHsSfE69MCy4mh5BvJHsPpSCeo29JvCwBbe5LYDgi9X2K3a3bskvS51vqoctjVx",
  "key42": "DCPqL32Nx2N5iYQHwUC3HKtPHTwBXoGY8ZTEMJZeFztnbnoWT8SfEcW9YAEHVkEGrCmZb3yyuWWjkVsFfg2rGoR",
  "key43": "25vMq1Azke3HwaNswjRJr85ioeyv6NLUVFc8bULNatH3dTZy51iVp3WVQ4yXAhyVoQj2XaDTG6CSz7ef27oxBprL",
  "key44": "4vMpfKokuKLJ7XT1FNurGqt5Hm8x2PP43yZF6jJQXjbNuv5JgsZtGhgjko3zG2TcVYMzKq8Bec1heuEpbJv6fufJ",
  "key45": "MNJk1q7WJdNhjDJPtD9w7MZRKYSVzRqeAprELStZH8Gk26D6J1ros4JtTGdoDDii7qoWcBQqEoV6BfAYKcUxi4Y",
  "key46": "3TtwzC4UoLfjzLoeztceaV1F6xRnbuQ3GtPGw3gXsgvW1uck5w5Kvzp4eutSQwQyXSTufeJ7pUdfct1VjujJU2eA",
  "key47": "3UtQpa92fhRe1WWTaRRLv3JEB8kBr5VVJxrNbcyq5zhhwQdJEkimm1vP9W4XugJZYRNhthGpKZrVa8BrsBJqNwQD",
  "key48": "5SRECvgJbzBZg3wn9dbWhzAfZyYinWjfsDk1NpnDskkjCfrZaeyEXpjCewkDQCHVkneZTKQULE77XMf2rirSgSde"
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
