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
    "3REErwyX3C96vSdG5qqp3DALn6NgSFpwCFo6cXpCKpFnwhvbzSuNzsBnaA3bKzAf4BRmVfa1ZrCW92ySxNZY2QMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hF13jQ5tzMLdPah2Z9FAQanEPfL3b66oyorAhLqsFXMnMq7byDoUafLWTRULwhrWJPjzzEmsHKPSLyoQbzBqV5e",
  "key1": "WLCv2hCkjtV3WC7cDJGh9nfmJm1aSyU56tgZ2iD27AAmA7sBkGWsfUJXRd7zJeovE871tFQLcuyRwsBPoGzdhzm",
  "key2": "3BQno48dVfsLYYuWav1Knm8z5MgxuBFTAuwamELZKQsKnZRNYjx45B8DWeAaiLTbDATcmHqpZDs9gNDXsjJPNDV7",
  "key3": "3uKdUEVVszVYkqzN9nWHpGhYmBAVJJzQrQZFrXvJP9GeCPZ4CX2KNUcEq3F8LxRCLSdhPmhhVYuEzDKTDhLZGiwu",
  "key4": "4tCcADWFHmdtpcZ4Wb4FP97V29fYYmxn9xWhwR2n6ujiRVLdk2PUxmJLsQX1MRcLJE4cdWRD6HBLa53TAMGDh7xf",
  "key5": "4qGyyABPp7W23hJJVhfg8c4N1ZwxCjVZ5LyR1T3Pqa2KVJmQ7mBkkVumSANEjfo7nh8FG16nCaLUJQsNMK3HN217",
  "key6": "gZCJyM9VggSafBdDTJhYwsCmADWAJGYPM4fe7x4yFKyPFzpCSvZZAvxDuJFxX4xwtcGGnzu5ZdPJeVrQtiQPnFS",
  "key7": "dLtKzXaymDoADhfW8oxaER16DAoF4GCjM4jEdWRYdQEfoJyAHvoXnPnnFoC2R16gV8Gnn9ds7vE1B5CNCTUhfDk",
  "key8": "57udjDauzvyi2HP5LgFTjq17i4DkUkXbTEhFK1iUf2Wzt2WdtDAchodXuAHdyTwgXshEPsMTNbdeTPAkADVhDz2k",
  "key9": "WUt8rrnGymXiX95XWQVhphkPH8qMtdGtnYcq3DLsT34YzSa1h9BRNqnhvWQrLMLC7KBzbtziT64wDcmvR28NqaT",
  "key10": "2JHUtyCKRaaxWajoRn22tFQ1KvD9zUhCx9TVaggcP3RfDLYhoiJubaawjL4R1vyD8CpeAdxdQw66xzWosbECHNVR",
  "key11": "3x38PnCknYrfnHwXZ49nJFiKZ95eJeTU73fkzhfpg3MAymFLSL1F4Wo9u6zf1dCUgWt4M6a5VBw43EyQGreu1mFi",
  "key12": "KnwGmoxqdvzjd9EjfBYzgQTwHc5rtAwYJztwmedMkMi4Rx6vxiFgcxjY1G8DQbN6bSiXrD3jzvKusSYj5juUxq5",
  "key13": "4yNABpXXF2QVhLM39UiFPaVf6wmFQ2us48tg17nh7dQLiHzB6Gf8PWUNdzzekXWgFbYPSePychgdq9kjaiyyqdAc",
  "key14": "34QgQXicWhtYZC8LxG22tR8J1r23oPMfsLiRjXe1QStyQtNb7bRVJtHgqnkQjmY8sQcM9iu8oVf2wDvh6bZW8apg",
  "key15": "65moVAonqf3St51Tp78XhDuiYyiycd8B4tJKa63bxJNuaz62NwiTP2CUUyQBfPPbFArFVtPEB5YWdf3kXKLjrvUA",
  "key16": "2LfGB5knh2QnmJydPr58aQYdMHDm17bnJFkzpu7F43tam7874LMfa8GtrZAbyETaKsqiCEPL6m91v99cqpBEbmhv",
  "key17": "5VEYgmCQmjxYsvZq4cEWveF17ZB4bkA8nFujWrgq55GeZC8TYfQWUXgBRZnEo6tLLKDGEveyDGRuhQ15zuyJdi5q",
  "key18": "5vKXhcMKTWme4UxvFLv3LNFZAQ5XzfasLPdMmLxW42KeAUC1dEzEe29Cde32DqSnLU8uSAf4oYamnUKKR4K5xkRG",
  "key19": "3R8WaqtCo2LeVY8ekLLAVRru8kn8aFFkwnTSyJALapXrLrssJWdS83GLy83GhtJCetafQ8yuRTnmU867dgNrXgtR",
  "key20": "5unZNc7LVh42nnmC1uydt6Pz7nTHbqVLTNft7c1j143uiQKVZR8otS93M3es6dp23S3axJnYDBpGzFvjPP8eT642",
  "key21": "2oY6yYkqzCQPEuuLwStDVEvJDVp5ASju6RhfzyG28UfpwGFmWbpNYiZwBkxXKoNr4KQ9SEoQap1YtfSNcrWitEeZ",
  "key22": "4HyV4CS8qEkTUmZ7r5FtoEbeffbyFNEFenVCZEUX8R5EVwfAknAS6qBD4MgJsh4noi1PWSsFdfYu6NTNy14jURw6",
  "key23": "NqgFwgjdhw25ccdGfxbCL6WY9ESUt2ciXTY5dzvLLPdXRpYzi8S8nFr6pKDUY4dpYpSPwp4c7ixFm72Aj4qDdRn",
  "key24": "3YyftoQDTLgVMkXsLBkoox291fXDgkpNuhGE5yoWh5ebDWvMXAMGJBhDcBSsAXDGKCdtBubM7dkRQrR3px2LxQn6",
  "key25": "4f66SMMUQT655Pr5i6B24qsKgW6uct6D1MSDyRNAdJnbjqUhny7ppJksV7TnYePDpqkRHkNNKmZarpW1Km8VC4ZX",
  "key26": "2cBkL1cu9qSyKu5Tvxc67hs3UNMUHvXnbist6ndfaiReEu2WcM6dsXXVPGXXxZcJ4Mcn5bAzNaye1ugN14yVMBFA",
  "key27": "8pQ3dLaFH8wtTd5sZXy9L8CybepbbV16NgSiVfNaZ1aZM6nFUJmnkbhHYCMpZfya6BeiaejQjFNZ9VSmMxGGqGa",
  "key28": "4yKMDpkRcakT26rUwtVEfeP6j43h9TG8ZqYdBvHYkezy6ZNY6FeiRaj2zPhc67veoKCzLi631iDsHBeJ2vR4a9jk",
  "key29": "CPRBBipTdy7DYQrscvmY3cjc4mmmyv4Lg31QLR81PaFLS1xgZSsBKBjA97eBHewEbjUWuZ4LqDLmLbJFxSvYmiC",
  "key30": "2WD1VsVZEwcUM9ez88yk2xehWRm6PmUcHPSEyzFxqrmHRkJxcrEqqSvMECCNrdKVq9hkNNXMWPdJNygY18u67GMU",
  "key31": "4AruMedkp28vFzgKnYDoc3jPRM2mgigeJzoQZe24L8sTFMukq7jxv7TjyQ58zS1KGYoA4G5ZyfnSWdVtUecqGVTv",
  "key32": "2CXwBHPB6gqpzkBtRbS8e71dtPdahv7FWarve6rFwkrsFJzLEwuvUdz7178Qndo2QahBouPD9Wp2VwBmhwfdDrH6",
  "key33": "2mPU8RFYsX7zcUU7nP2MHhnmSj2fNhFWmtHm2MRaEFqj7MHfboKkuNtYQ45vWDhkgxCHG3nJyspGtqu7KDjqmCHP",
  "key34": "23x5fVKPMHsvscA9ddAxzhEAZNxTr9kSh4sGGMmy1jGmDeadTNK4pAh78b3EvxNiFgtqiWMhrLFXbzzPrJR1QHvR",
  "key35": "5jtfe9jGAtoi26Pop6kNJn6aaezd7EUXGWbXUP5aMPUDUpHLMDi74bh19swGupqoPVTR4vwEnprndXhHr3AmyNrr",
  "key36": "4h4mo9uoSEa5ZEc6gnDxQS5dvokHY3fgfYaJKYowNigL1zrmBHSccmUyoiKRud3Lu3DCX5F1KYWMp1H71MJJxmeT",
  "key37": "2pHcuNGijaQz9WihRPGjuUibTURhVYXRXFRwnEr81gjMUiTY48DDJkcaL8qexKsofheXCGoiv6Rg1EprGPtR8omY",
  "key38": "XFJdUQ3dn3Xo7MZeKehbSsX9mDHSYvQzFayyAjSwHufNoK8UxZKXJ5sexckLJwSJirBqsnGDoShsSX2CgAVQyjr",
  "key39": "3JXL52MwUJ59BNL7DNKBhWL3vhLh841PgGs7XUcwGzyirFiLJxBkRsafESJMuEsaaqbsUkpq6CqLHP99cBGK6oso",
  "key40": "4qkLbPRRyAQ3uuvMcXW3J8p1civoMH1bgTkv7aJDEV3j5CFYZgR5W3Eo9QzQbxJPbBS7RYrjkD8Qoen4xJAea84R",
  "key41": "5jRPExbsQzVZeQkSezEVaf5CvVm9SVcxUHvm21XMmL45xikyqxdouwyk2ue36uxTTjptKYHTapajsnh9NYLGLfi2",
  "key42": "5oebpQkTg44ra13yEiwGjxZSgKBRNJxL7wxwmNW7H4uDiyjzyqcKJpjrkEsSXM1bYkyAjSKUWX2jYypnpzkoxwWx",
  "key43": "3KSZqxPKithujvgDAPN8rAhHcY99MLJmK6nNTDmRitpDTMRRFjZFR2tBsjZDoFKRga3KeLg4VG1HgoqXAhYA4JSs",
  "key44": "2YbuGPar1stpJxVz2CianVduYdLw6fsZme8m7X9LWsCAeVhgf1yFcM7j414o7bsZmiWiXTLeULoq34PyPTcn6DVo"
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
