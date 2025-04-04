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
    "3L5pV16tKmLTx5oTnSpbFo2aMkQaRobfK2FX7ZgQbUtMzdc9sByaeMLLzD54XehbDEjW2QgtEAHmjxyJRuURFPy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yUZTgWi5gqdk1FPLSW87sn4PYXy5t5Jaq8mzrNUBm4B7KxxisxLxLiE7FtrNtxUvE6J8PuBWLeewzqzMjJYZ6no",
  "key1": "352EWGH4xZGrvZD8PC5ndT9LKFXKJ75KVPVYFSAaBrQm6nHhbgoYXjmxyog16FxcWk2gHkxV89UQZxU1ecMrXjLm",
  "key2": "2xQ8G4vYa43svN8B2inF5ZY3fHUEoN9SLetMzPePibJ4MDc4JZ7cyJ9ppVS56ssta5MPB6jwSauiYioMcfioHYLN",
  "key3": "f3gcWae6FxtJvTsEcEaSiwgfxZsDAPnKUNNc8g3dC3Agtek9sbPjPHcWArotk5nwpjo8pkcXcsQABY5zvLR2hqU",
  "key4": "4fVwLkfgTt3x4BgmbSDiZgHwgHCTvG54m5PvNCsFtbFT4gD53CUn5AfT8CLcvkmnibFPJEWE3vd3UhBE4do22nTp",
  "key5": "38GF1QKr1qcNcjSU2ueaANTmzLovBbxBE8DvbYwZPfhfxiqQyR1E2QFT1ySNZTr3NjGiwjhS6xYJQBCb5mpmpAq3",
  "key6": "5GWbmKDMwuFCnLk4QDz2GfoZ1G25YmKBcZ3B3z3gWk6YLPF6QytMDAXG6nRdiMM62XKJMqgrjf3XCHbJnRCRQjS5",
  "key7": "2tGRrnjFF4YKRFsobQGSeFfHHrjeUnHtrdVsU7sNxTSwsZGDwrdf5XihzqNbdt3iu51zZ25YxYzoLfVUsHdAo9H5",
  "key8": "2GV2tby2ZH5zuXBVFv6uiQCrfxUH38BmQqUVtFns6Fue21kbNtdsT2Y4dQLF6KGNj7eiuc89DDMXPoRvdgdmnuFT",
  "key9": "2Q3DhXVEr13VVMMjxkLnmJJGjKdbLzfxFiwPQiDVhvsE2tJK3yAf4RQAw9zpBnbmCg8zU8jZQqMwgTXATaJKn9uz",
  "key10": "3PdNQzGAxmN9u563mTqnu4cYcYUVDXGQQbPPko2fuPBPU1856JpXBc6NF8UNr9fyYBWRc4ApeeC9bJqZe8yU71C4",
  "key11": "3cyyXKJfSmWkCzaLDukRXLV5j8vzhxVbYGrjeWWmsoMb7QXB1d3mZuPFbLJFeYWu2jtFPQrJMUFVXyYxbJ2hPALj",
  "key12": "2DHoKo9cDJSmJHmVdFiati5MFPiiWQXDXBQypkmpdzn2hQ2h2avTy38tUi8t8y8F1peQ3q7RdCVw3Dgv5YFaURSY",
  "key13": "4SpXxV9ic9BoSSDCL9EDcjV7sq5UcznDA6Q1q3zc3mWHyM1am1rTppTLPZZpqT8BuRWy1kRYkyLEQ1S33wL5A1dn",
  "key14": "4K2AEDWK43CvfvqzyikfxhEY6CTxxe3Ceq5TtYjchJaFEZ3cF31cytNQKq1p3mKr3YqSUtbdXzHH4yYvzTonkKCZ",
  "key15": "5JuEYfK9MdHKwrTJC4APsSkw3mLtRMTGjZqZXzyvcuSKy7NYXUs7QSKA5pEUDYBRijRVGNqARzTPTA2iqVacdv7b",
  "key16": "3GqXxEB3vBvaMuhChBJoM4iy1Re1aX14U6yX5kLVkVkDzfaPDK9hwfnmC7e7Goz1xpgK5maB5kV94LRnSc1mS8iF",
  "key17": "3pepbL1icGr6Wdwq9enRMNvjeFDUTwh9R57FZPrtvwJ2dX1SDqFQhfShZBCeTWXynu5nEKrKf8eVv5oZxz5isMgn",
  "key18": "65y9DEE7rTGsg5U6j7nAZ7on6VyNGggtk6hRFoh44Fk9JLsLf4eY4Nu21Q6pk5UBd2buraEaW2Dcs77G1jMyBu7W",
  "key19": "2aV5yfwnA1uxwjkAkhA7Rxxyip6jgXd2LRWqmFahwgboycko8gojPVLPiqpRphN6PJSqwrLvSQt7LKs1h9GeCn1i",
  "key20": "2Mb5XKJwcPM23nh5AkQFE7ou83M1brercsQHrJniFDjqukLoyqQmtJPcyjW5quFWmkajKRaDqr3GDZU1UHUWWesT",
  "key21": "5zEWfFki9BgctgRn389YUddEbLw3Kvn3XABjQaSmmRBhPT4GbFWGAdmncNVTxMnF9etieeL986MejaYsrvkAMdPt",
  "key22": "QZneCutA2bKwDL5foPRnCJvU6zgy9PF8aLaoeNXk4JiW7pvpLHaJtPuq2raehXwBugTQcptYvdtKiv9frwSJEYo",
  "key23": "51VKYYj9VHa3bRLv6QJGNoDanAq52BsWcxdSB3CkQ5VcsccpYux6P2vGM2TkXfDrJEEARjmikguyCUpRWvtr6dhs",
  "key24": "61eNYqKzVjP7rskJSt6ZW6nBsTyYTG2X4tu4Hry8vwRg5eiUsrZqcNkQNNZgRd75UZXiw87dZLHQuHchpK8YDwD6",
  "key25": "3MDdggykRnFT365kCPLk4ZidPecj7B83qyq5qk8LSv6TqcJ4Ug4VmTnNr9zxG4LiQNG6V8NLJre8AWpASAg3u9G3",
  "key26": "244ZU8FeCT3vXxTKqwd3L7ZHuUJzoNctpokjQzF4JBNTpkPiDpaHoFNSYfP8VBKzEY6LhVjEDr1fETVbTi13PCyt",
  "key27": "RbzGTinKnSWdxuqp2C4xVjVuZLxpfrnGQesUr1zcHrwTC3a1rCu4FdENqFWuVMPKkRrDnrRkHKwoo7V7t1pJQTz",
  "key28": "5gdxgGg2ywSQNmNNJ1aV2nTAhNX41pJFWi6eF1ji2YFHCpmK9d3v7JPreDG8kjcqS454mwt7qPM8Bt39x9zoSs3p",
  "key29": "6U9dFbVaRkZp4szYr3xeWTEE6rmsVpsAMXagpX5r5uyfEMNE2eXPHQkJhJtBi9LV2RaH8c5EZ9tfEGhoNamz6iB",
  "key30": "62yJMt6JQdkZAEbnDWuGkidW4g9bakfYB9F7W3x3obbMx8jSs35nXTNWAKqxXbA5TmTYzN6zxj3gXxi78KefRrn9",
  "key31": "3DELpHdTSWQJjCUxDdeym5TnBP1FUS18RQtDDjqkN5ZLA4ViMenZsFXxR8cSEW74UTWqkTr6h9VPNUgpAsUcutye",
  "key32": "3b9yLHCMNqtCmmwJGNDUQgG7XZyqrXXYHHVUqL4wfw5vKygvGVYvZ4b34m6M2q4X2hgGaDputRhWte186jpKUZzu",
  "key33": "szhnhtCE83W4pcrS9YCyTe2zbt6APys3sn4tUYQ1NRqaf7qNZ6Y9Z8CijzchdNquPfjFbs1JtY4S2p8sScKK6FZ",
  "key34": "2D6X2Lui61ZVksdLsQuXwH3opiVkhMEDJSNuTMQWV65SW5fxCVkJcbajDZEctt8YfTssqkZCCowcXd5Fds9ymvhc",
  "key35": "35UbFGBsfPbfacFDgNPhyCuzuCGryFw4pPHCJT4nuzM4hBprvSESfapWrPzQYdPxQxZdrzumJZXKXKQ95E3wK9Fk",
  "key36": "2LT4duK5j8nDYzfYQtAGrPrgDWpQRNJtxRGMXmG6UqEmmMiQRGiqfDBaSDxTJkrfeHCCKFrd2FAqiYEd5UZoF5nE",
  "key37": "k6C3BGpCbDWnRBoWM2DnUwqqTJPUoGT176kqATpyaMiJQbuWUsFJ9sq1gyCmf23ZNM6EpwQU9BEktVCmRPTBbo9",
  "key38": "qT93yhcttpnutHiZUf8wLsoPPdz7Ukm1MNk1ztoVPfkJF7EUMipCCA3dwJ6jtsr8QFwTxTE3uCm7b7iQkwErsSn",
  "key39": "326PowmT9T4GRCBoAwDSh9mr4RCidAMLCTFiNtzp2D1GMu8WTjmpBXPtZeov3iZo8wa1eTttuDXrv588E89TMCkB",
  "key40": "2ZtvGB1fnvTmatC9hvg98kr3cGr8V6PVk2F5idujokU7qnbxA66GPZaRQcJ54tbpjMSA8M4g2GiPKBSb3iHUXwZM",
  "key41": "3Fcsnomp4KUsNFbE3PW37qtQmLLsofPKCtghzeFYvrcK2J2mGSPbgXfnMsfpr7J7Qzfn6na3zLKmjjicXAs8feLy",
  "key42": "4YscKfggYjYzty9ZtEcBQL9uSJcbswB4Q9VnQbHa7u1xrfjC2MpaDekXPkQW8kFg22MKmYGEGmg1293DizZsFKoo"
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
