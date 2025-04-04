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
    "2jhbXY411yfa7FdLWh9pHDJjHU7uahX1x2ACjsv79bw5uNsnyq1xs5uzd6nii4UHDAGq4zhX9G53vrUkVmDcBVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cvaNq1DrtU4tcLojz5kSux79RKfxUrm4Pe3SrepZDJygnc7RrRai5997SwY77ggTSXmmSuuU9bJhnYCV1LFe5s5",
  "key1": "3rdUAn2bvxR5iwuiCgLJuMr3xdTYkAQo5ZGBaNCDW97KB6b5VcyK4WHDy44sFY63GfbKw8qDJaUKLNe8nNDEqYZA",
  "key2": "5fdqakY9zdJyyQPkk2XpBKTSo1Nyva1iMw5uevw268zRkq5dtf5LEkKAacDGKEPLHepwa6ZA81wLy5v1fpZ3KoBi",
  "key3": "5W3227et5CGXUX4sWTWX9bMNovwcV7LJ3YL4ddAVvXaLXiXFwTJ7gJymKjHhQbASUG73Nk8uRLps6Ti1LfufsxCU",
  "key4": "4DaoeUWug8JYgA9qQTj2ZWBNqjHMQba821vr8sMD8au7KfeZHvdWXpgWYZtLMhVhWreX6Tsm6T5WrA8g4gY2PdZc",
  "key5": "2cddZBzsusUUfFrLrbQk1QTmYgn5bBRpKfUGQiyiUidKDDqZTa2gEtwE6Z3Da1HKseFEJB75DPRZNj1ZPY36PPhu",
  "key6": "5mw61N91E6dxmQKE4RrtodwfaTXdPbfsLc6rS5mH6yDH4X6hH8jwj55YFJdFMiG2fHQBRpytb54yc5GPCiusZ5NQ",
  "key7": "31nLWNL8Vz6JGMETaXc6WFBAqdJMZEhNJGgMNYPN34y3V85HQXWgRaWLs5NAkiiNjoGJSYWwFDt5xjxfBfyjFg7n",
  "key8": "dkahXj3XXeP6W7FYCyVQeLpKN8KmkBMgEBkCmhWBf7MGCg3Nx4eTU6BH9c9tGXaKd7BVyYVUbn58quZCJ7vEDQH",
  "key9": "5jsRtfQY1rpkn4exPBqqQ1vNpC4zwMimnjHivraxqokfL176XNisLUJLpA6ejh6nSTR3PPP9gD17CbmsfJx4F83w",
  "key10": "642bLg52h5CgzC1p4gB53KXrUJwhChm9jn8bLjSjtgQAHXtUGcC69MwvLuCyPNqDWUtoHzK9hqWMKX81HNWLzugb",
  "key11": "4nmtTKSCxHJZUmma4v8QFKkvEpBtKFqUrSW291TFFSBBAearcGN1kBiyPPTaF7d1Cb5zQmYZpiemdBxoTskxXrGu",
  "key12": "2ZEamw5pC5vgR2z7mo14DZFsDuvFnhjyUbWDhVY1nm9yQVu6oVZzwLTBFYYGKzMPBbkgq3ppAGLU7e8Fnxmvf2Qf",
  "key13": "442cf9SKsRoMmhSPz84jBQ1ckdY4A3Cwwkj6B3t9tQKwsTHnanZYzBCNvsFx5xmh8M5GdTZogEhjF6FXZ8Pjq7kg",
  "key14": "3hgvCJ42ZWXLcGV2ZG8Kq8thu1EqkLLEhoWAwWe1ofSCTqcwbGdFsxc1B8Xi1R1cv7vfnr3XRfnAZutcDMNJRcvN",
  "key15": "5DNMiJftaaB1BYKA1W8JCkYXCGzMCvFkTtWrfTrqz5CGHnCSweaxC8GMvaLjgfUSysJV413fQeXRa4WVKWzsYoio",
  "key16": "qnP14kUmLYf7PDsHYMePEDJqnqFrhgB1oeyW3yvQKK959AhxuaFoxbENe3XWYwwEYws4z7KYhJmXZ1p5HzjaZPV",
  "key17": "ku3yRL9qgtv545N9CjmFcMsooLMTSfnUP1EEUeZ7abH6BnXLHzQobyirUiiqZDFY7c2bhmm32Vau92MCwod5cnZ",
  "key18": "2r9hqPDmYES8KpcgtvpGKjDEWMeyFNMU9mXGSZzSg1iX9AAsLiSvXosRuJ9zjSXPG2YpDX7trJ9aYkQm9djCSfkW",
  "key19": "5bpXtnccjxXsaSjvjyok9FNybucGq1mCCKrp2Q4MywRpazv7zfHqmQkqmqLjfaHk92Ku3WBSUG25PhwT6igVwyfq",
  "key20": "2W8zLYzzYpA4EUygweVy244g9koZHLcg5zc2QTo6Myix7B8Vces6FvdGnnMepR6T5ZKpP4mciiWgkGTC7zaRCRHq",
  "key21": "2UV24hswuMPVCXRyun2hTRM1JyTzfuPk4sL8pDaSXh6214HKnyXBG6XQuyhKqkoZLsgXWvcMwnWbT4BC1gbjVw2Y",
  "key22": "3BTJN92981bQ598xrvLF4fCivuqFjDvn54fo1UHmouqcKZnMDf3A2DsK5UVpjFfMAph63x3rZZ7WEgRvk1Wp1Hnw",
  "key23": "3xcvc1bkEonxN9bFSy2HgHdbHYBh39iFo2JjNRxKBj6Re3yNXEc5t74UaoWn12SUG7zVuB1PewdxAF4AXMSZHQtp",
  "key24": "4sT54Aq6HUQ4sWmYgJPoCjxnX7efju2BnUAmmJLUfvJko3xC56XMUCeJbkysxPUbjkUCZECizhAHcob6XEzu2R7z",
  "key25": "5if8w2VBu3Fj4LfGjgNs9o8yNji2ppD9hEGrKoPhfF2NCJw8THPwZ2RWAWFtsQzxVdBBRYndukpZHXAp26hGmMBS",
  "key26": "5zKnndVF4hLzaGRviY2JBKk8oyhpda6XkvpKYHQ2SxVYk32o2UgsA858rqQLFfWWTNwV4XRKpWzwEaWSsV1EJ9KX",
  "key27": "3ctHomNCJ8xowv3zojhbY4qSAUrxo5LGTYLNKSPkh19NLoBKTeRrZQJ5Fwv8ftucxxr5EgHfyguQrx27RrL4277y",
  "key28": "5s73t8dD72PTyY9knWBGhsG8uQLLY7JHFi8AaKeqcy4hghJ37ZGVMVNDe9sD2MScAKCjny67JdCFfeG6mx1M88G8",
  "key29": "2AyfW7ivmLPsmU48zS45kQgm9yjrjLvBp6NqEQQ4URKbcXARGJ3aaJvMiJ43xsRtXAPGNNAivouDKaCvGcfMJaGF",
  "key30": "4aC6th2j92LoTWTJDjXiYuLds7yJv1gyG8DAAP8rXVUWNSkYxo6i2yHK4L8C8b18DzNJRvzY1GieNYp249R5pEGU",
  "key31": "5kAzhWibVuGfrHZDJ1ojCvq2eEMfZpGtLQAgJfEseMMg4WAgMNtTcpW1umrzjnTLuFG8CuH5JF2spGFWqXfwJAJg",
  "key32": "5Hwq8NQcLaiwN4xciRc9zkh7quhsZrhsFUeS17LuiQsUu4N2SmidfgegFffqpEKcHEFshMSZJkcsDFCVZRdXTw3q",
  "key33": "61CmhuHkuh5J8GvNYo5ftS16w3pNouzxypFwa78BRnkyzFLQt4GBhjNPnyi6mxv7VCsZXm6xxBvKgPRLVZoLTWkz",
  "key34": "5z6Mi96FfMzYhx2xJ8mDF294NuRwfDBBmSNu4pKiNu5W782KPApSNbnAAoACSdYrFZtk1sy8pDTC7xQgrTGkgie1",
  "key35": "59PNR6FWYsk1ZshYmahoq3Q5imLWQYUuZSpaNm1QyNTMveeStAg2KXdjmyigq3HxdqwXuC8W5r5pJvbLgpadVgd2",
  "key36": "6hAq592S9BQoBwZf2Vcvp4yPuXrW3UwchcY3x3qhAnNZj5vyevicP8YySCKrdNpFaGszne8gQApXw2pd3z8Q7gb",
  "key37": "c4bgVsLewdJsnXY3S2EU2tQNbtS54wwsARUc9A16uGyFBG15AV8R44zQrJLN3ooiPzmNpVkuLgmRkYAemYUcpF4",
  "key38": "z2jc1VdVvQE4Hd6TRPpCSFbNCZStQdUPPFEVrkq3uRzNv9UDovnGBNLm28jafKWTGBW4oz7LNvC7WgxWdBFpXSV",
  "key39": "3MRpKbit7oq5kGjV618fBMpk13rVXCEXFPaaV4W7eZyis7CuAK9DFLBffRr23jZKaumB5CZ7sq8Svpb2ri3LzNGD",
  "key40": "5CKwYFqujFBp62rCgTWPrt26yctgTxYFat9LidzygAz9BhLBBMyw6ChQ6fau7P7xku4111RXyaszM72nGV75jRqR",
  "key41": "4iFFFRp1CBKrGKwoFcC5ajKaqsFkNbp8g58M7mWYGxEcwwYphosHAsAeb2sbiRn7hpRgtV975Epd9wmWVZz3xqb5",
  "key42": "28CjiMHuZVNNeoyLRDTkyU6Z55wyXXN8bFFnVz1KXgktSHC1mgLyzjapPq4w18oiCnHf6RroJESqnguZAzjnCL8e"
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
