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
    "4qXHuLiRNBzjDWFq1bwV4DvwN56me4szavApBTytt1ziGMdcS2JtjC4vLfQDviLU7ZXsc9dkPx75eomko4siY7YP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gkSGp2vFqSi73fm5QzXydxXEV2ysXLUFd1WLUY5GDyAXeDQMP27PDfydvujmt9Lhqx6yPLJxg99QAJvvLmVgNFz",
  "key1": "4SYjE2QuExvbJ2iwmMh4GcAwhsqCirfMfonXG8urcX5aJ6CtnA7QAYyKM3utHcLayEoTm4dpSYTuciHQkJc6Lm36",
  "key2": "56tB8BaAvPD6MHj2i1EQrfLnz9v5cMknqQgzyUdWBPTN8RMHKEBzt5h8wyVEdP1r3jnY9tRpvtZw1GEHR1fJkkji",
  "key3": "T66uvaJDCNmnquEted918xc3WVWHmgBdQTJMPjuiPgryT5kdnBSDMrEGkJgH58pvCmdUGR77FFmGej6NwtiQuAv",
  "key4": "4c9oZ1m2XPoQizAENMwTAQ4Xb2DqZrkKEYan2RyPkVFDYYJeCuiySbA3Y89z587JdAVrFHgHknyDGKnNrato3HmU",
  "key5": "4Yhzaaq1Bpg9c2q5emgyGrvmMjCCMgfPiFpbqi2bcdA7stEZE8FYtgkkaosm6ibppbEPoAzhaTUQiioADoWe2Lpw",
  "key6": "dnKQYidnyxwVcqJ8VVoTkiCtC7feGXnM1sPDGPmren4pPCpXVc7HCXww9Cehazbx3CVeHkMKnTq49Duagcxp1La",
  "key7": "2oGYg1hLXxzPVHbusCa7sYy69WjryDePRhvCBHgDzz2Xp6NayE9QmC348AzV62Em2wNvGd6186pbWJRQxZCxiC3f",
  "key8": "qWEA9Sr14BuqkvsBMKj7Zjh6hCEb3nNFuwRuUjg9y6nf85Eh3ujQQWccWgvxm12xG2Sr22VMTgKEKUL7p3muE6k",
  "key9": "65UrDtrjN9mocMrNjzjMsWyoPfq1oJz2wjcnpLhGtUrjJ9uP67d1opXmbEjFJkiGafqDpzr9xSWe5MgBLao3aELX",
  "key10": "VXG6AUjU8144mVfEGMP8tTzLZPDxuPyNPxxJbaAoCwZTZRgSKeRQeHUqvHccLFHaMAnzPxyXTcDJcYQvCC1BAeR",
  "key11": "5uU78zD9KbBwaBEhkqVsKhCcjVVRZA4WJ1z7LGNyfsjXVsa5DzKjBJydHe6u7YhNGcdsSFF3t82dZ6sU6xk9sfa",
  "key12": "4xi69kdBsmMpLmGmHfASWzrQuU8cPNaUcKy4F6r9vu3ScTsLVsHw91ahV6seipcoqXTTdsZhNPCnzi1CkembZZpN",
  "key13": "35bbSrfdxpJ6NuCA5GFgSDu69tXBCYTNkeU2tUNzooxhBMzVKW7bCdQZAAH8pEHhVG13LgUvyLLXsbXWeN75daem",
  "key14": "5TpCANmMMTRikJQ8tc8sTQrS8E2cBAeiHMJmk25a8kLEsHggschDXmJM4EStjtfTsuPPb5M2qLoNLjTM5nKH9saw",
  "key15": "64JcAMwSew7jg9FjQjr3e4bmty7vG2HAn2uAKVP9g4nXVi8Z7TrY5Ms9pMwHxq8hd8vuCEpxY4NKjN7GSnAqfgS",
  "key16": "4ZrVSapUEJew7RLGE43fKbqT4a4WzvtUNbbebtZ1KsxhJrHc4ByDas3iG92E2hyVM34jLhNuBocUkGGmhNQjhmtT",
  "key17": "2tavZovQtY4wqvTWBpimAvo127Ly3Cb8iecyuHvFXacXqSTYowhLCbMnEQgjkiaTKoQ4FMsQErTtuk1Y4mGrE6oz",
  "key18": "3xoLet5Zv68scAbuJ3HAYKuD36x9aJ1yh8gztqwyGw6b2re8XDpv9ygU3hgYLpmRBuAg7NT9mRbMcLMqrYPykFT3",
  "key19": "4Ac8DzmPLedGwQYDENdhT736RNsNYdkvB8S6FnrKxNCzsHxkNuoqyEYK6HS8HwGxrhKvVCU5uHutbGyDJAAK1DR9",
  "key20": "2SqsgYjS7zgsK9sNZtV1RLHLjWkhDrE6kcPQB59dGNuh8P9Y2cMUJidrryeFYNgS1KqZWapngHtNG6odYndwuXEi",
  "key21": "WYFkSjCMCaPVCbQRp7pUUkA2oKqfooJe2QzJo4dadbudRihfLT34WDoUq9RyA67WVVYXuiet6XVkp6s2Ycdqx1v",
  "key22": "26s7E6G4gr8McEmo35gLUwJhMLUhoZJgnJRoRVW2k5EhChUH8ntyex8VGtVJk6z9SqDXqPYyJxmuzZKvqz1U5EjT",
  "key23": "3e4j26eRDD1kLXEToBoZRBJjPmuju2enFH2jUxbEcGiFGCJy8B1rEQzck5nLuVnaaWgYtrihkEmUeDLErzmA2BPE",
  "key24": "72MVTWsAW8Wb2auYwEKz1wiF4Akx5wszQBW8RVGn21BRgJ49aM59SkPN9HZVEUQefUH9P7UHbZpPxu4VktQUR2D",
  "key25": "3Z4uHwWF5MMJbfdzaSXMqMP9caeHHyLXsQeEBLpwL5wf2FnkA8mVizUbbRLscxrXowb2vLq3zCvvFLQx29RGqYAA",
  "key26": "51E28PexRDykFruHW9FyTU72SZFAMgpgSfYkXAvmg23JbSLWv3R6rceQSjP7HXhdAnKJ4dcwFhCLNoYeufw8yLCL",
  "key27": "32zt3xnUpeQ6foaW2itjGh5Z5VGbEqdK5L3gmtv41rENV27SY69ae57TtQrYZtXSe7tozeBbfD9nJSkD9xyVx9L1",
  "key28": "4z8K5A5ZYKHJJ6Pk3mtpjVWPACCRu96MGVNMeeLArc4XzNof6CYGtyM3Yz1w2LrrQtkDdLn2fHARjrijSZQFvNDb",
  "key29": "CNLYnqvUFAZKVgXxy3CuioMn8TFbc9XZn62qTFEjxuuMVnDBHFnzLhR4tMeStcYaD1EEcZMpzMQHneVeYMDdhG5",
  "key30": "4EyqpXvjSxXihXEL6367nt4uRrU9QGt6Eid6k1aiCDX74LENEsShXVbDF4gLeBxvZF8FzHUZVeZntSmZXJk4TJA2",
  "key31": "4hGqU7ttcUy1vHRPdKnMMQH7StYFjrZ7epTF5Xkh1E5Y5yRRy3oFQGnMyiEJAreNpvA97DMWsuGKqkh58LEvreom",
  "key32": "2tEe4M3oCrBVKf7fe7jL8DEJyZ2mbWE6yQ2Tipjbk8dsy9HzeA3dYJSjPyEaQ6zhtaC4bQa82G8a6xY7bYi1hJyV",
  "key33": "4hX6FWyZJ2RV2HSGS3FZTNGrbhBjwTSV8VKoHHnoFBrkVB1GoTmrJyx45CHQ11KPS2tDLf5VHwytDKP2EhborXj7",
  "key34": "4jk7DCJZigMvG8c8v2LBywme6yrzAjNa6f6Sr8TpQ3py9UfRu7nDwt9dLfpN3gcZofN8z7ZhMMsEq1Zx6S7zvkoK",
  "key35": "4AjhJT3AfWoL8LDYk8BKvXfBzk6HG6Z3pBBE5BKgpfiKHerR1RxZaCWJu1kFEBJEUnwNrYcLo3KP44cUbAEtooX4",
  "key36": "24paTMM935zW4WMnBa34dnjNrPXhunRX7XoDpA7bwTpHTPdMgsQtRasTo6VeiH9w5ikgQ39A1ecNGPfiFSBhBv3v",
  "key37": "32UG7NNjAaBgvzaZzWobo828rpnQfvZJ3Wqn1hNZg8j9td5KMoFyxUmpwutkpfeNdhpnnAk8q4H9iEhAcrzGmDY8",
  "key38": "4FwYWw29gZH9B1df5xtM5DMjtPHYb8RkiWGTD1n8amJrskZDL8nn7EJSTGszyExrLHmBfmdWfP8wAVdZDNDi3Nr3",
  "key39": "3cxMaMHnNqz5VrGPWyiWn3XcY2YRoxMq34ioTYGsYz3eBaATkZeU2bhccebqktm7dZrqnDefcZTBNonhazjdBMwY",
  "key40": "5RqhzGMAMRFr4fDJyoVedYb2Z9A2cv4RqkpzGyuUfnSxk3YB24v3P9ZmLkHewBHTBBb535fd2SRe3HVpL9v2NLcd",
  "key41": "4t25qa6iw2ThVe3NBx1ZYAsRpgkr8ShmGCWJSSYukTiBKfEpZFLBKRTw8X9oBiusMuGdEqmL3wvRXidxbuoXWv6p",
  "key42": "28hmBAJfKgTQjVC9LupDFugi6tE5wqnt6aikuV1iFHm5g1LVsru7xsDAWUHEpong8gPfADKUdsfZHFwtAA4hw3uX",
  "key43": "3WgWgUa57bAxVqN3NXirDaj79px6cPPSjCiEg2VDpn58iL6LwtoVuZPXq56TAB9N6EjA8Sn7eZQWYJF9vHwhRFQ6"
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
