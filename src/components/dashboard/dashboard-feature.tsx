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
    "2AscSmXw9cw3fwksnznmDjYY95EdfKLd52x8mQ4sPqxCdcJdEjQvHNkL9mPrqfsyymUWmw4BxiWJEyPFrXzUz9cY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NBNYR4N2B31cChKxGRBDwybXto1TBndWgdjDPJ2KMAXwDrSdkKCYKzPfSDkDZJrW1zQLeD8BQ5uhVyGxAPtwBC3",
  "key1": "4B2tmzQ9uAzxn4MVrke6PrKQ7xZKE9j2JtsNNZiA6fVMHrpU6GDTwHoem2M3eCfujXKgzbFQPKK98C1kf2e4ravw",
  "key2": "386WQxE9vAHPEonXJzZJynSgV77MjocHXCBk5PFENwzJtsoXqoWJJYfnMWkePHQEgB1LArP9AVz1byNSB57S5prE",
  "key3": "59dX7sWyfkzeHhPqogvbupAQs3MmNGrSs4qVxEfsvgBDRiQ384heDoeXTo1VSg5AkdunwnKfdhF4kiZKSz6FnFxm",
  "key4": "3PHxdU6G7kijebqZU2qapgzGsYC51JWAKVaFRvE1i4hpUWta2HFFNpBU65e3MqF5ahS4SMFkMByTrk4McoKjuG31",
  "key5": "4YVQ1yBQU94wdhcq3eU5pqctaQjQ6uUsfSFa1TKxdutDbXMs8auS4xGTL85YoapmMo6Yqv1z9Sr75L9ukHCuuFwP",
  "key6": "5wJQ7uk9gFDyZi1qszhSEvDd25xf3gCcwv1iXbCPXnqFDJYpwDduMkUaQdQgpaD7GZP5u6if5sKqMP74ZJkKkqzE",
  "key7": "2qn5p5nq8Sx6CnWoB21ZLS6HVRhhaQy1zRp4SQpt7yxMnbUmdgm7KKQ9hdDyEiUt2WqTW7YiXRPUqKewstJzrHBt",
  "key8": "5bz7cu8EVkJXVTYFrVyvdB3FGis3LAxiXMe7PXa6wuxj89DzW1eQ72hafRc2NYqEjCXGYbvKuGojpREDumbfc5FL",
  "key9": "5aNsKYt4xNueBn6rv141T8eCP9A9XNYHjygmXCwVPv9Me69FiM1a7NF7ff6xQFRScMK1dAKbhpbd1aLWAmkrdTHU",
  "key10": "5GfX4dQPxrKZCRvXVKX5qCnjEs7RDXcz6WUWJLWHqPaJP2x2GrvgXBrUB6BVXt6nB3P3woFgt657mi1SQb2WTjo3",
  "key11": "29ULs3Xbv4fagUcFr3rpJtcEs6FBYBNkeTTK87jfGvP9uSFVVNk9zBAsq7edDuGZKfMDBV5YBip8psT3KcW3h44c",
  "key12": "5VPzvQ2WVEvq5YprqgaEKfYAZkE1uUhSva76yPa9ypSVQXernND42TGWVdpS98HXvGm4wkmgsk2aE1gHz9Mit5Pr",
  "key13": "pBAwMi5n3bAENLBuWVtp78sTp8d3RF9GcEfjQzS5bDeZ35HEouj32XsJQU7rgyxkqDTSYbwGjzPmTW5HozJQNPd",
  "key14": "4DqDXxsG9j9NmLZqVUvy13FjqP1harBQUszKL5tpTv6VgffjtJviTtFQ7cyDzvjHjKCPJVxvcRhyLub58gESQnHf",
  "key15": "24vQMdnHpAsE8TvKR2VfXA1szzYsrr6Wot3afV97kbgdUK28rBjjC77m1aK9pfLKCVZZvWPeD8TbgPVQyC9bzLDQ",
  "key16": "572rzUQVWLbyj3uP18FyrgUDxxJZkhpspQBUaATYb6DV9wYaFF2zvYUi7MwUXCjBi7PkJTXADLpHEV8bmBf6PSm9",
  "key17": "2X1ff7UA6kiZrZXtgHXJ7SWy2pph5FzCo12p4p4QYphiEjvsoZZixGSJEZLkknVF8NY6gH36VmE2tiMTGRWL313F",
  "key18": "4Qwzm472CRZ8XEkwLAHh636WhFdWrVMmMCrDwjShNkqcfsz7CPXJRvoqihLN6BnE6idtD1iogPMHeDLH3CEpjv8C",
  "key19": "4qfsjBXd6Kvi5P2vBjqgA7WuxszKR1WaHkDjqg5tKbV1osRcS3qWJZPNPK8o3mXDjtUh5z4DKtDREV78a1zoZWzt",
  "key20": "3hyGxtoSnRQGQ1WMukXGmjwg8MqgCgCDmoBwdpVzmB64wTbqVStksFHkyTGKPnAQQBwouPEMtrrPMWBFgq2HLPZh",
  "key21": "5WTApeVARajBkGtkr13dnakMw3CtgJujZ5CXEmrRx9zJNmUGgTYjZiJeNLnJGWo3RLs7FPk7kFoUJWbpQWG85MjY",
  "key22": "4RkKGAQpLRueht5zrHjSQyqCxNpMnx9vq9gM7BPJqfd9oh9j3pcpeojwMfqoGPasA4gayq2zMqCRP2QfiQHF1RYw",
  "key23": "3ADtQddXqPMNNjW7aHKkysQW9dGPmeLE7YRXDBaFALMMws2d9nGGrvsM3SfvDLC5PKMzcxG4GXN4adHaMdkMCjAg",
  "key24": "73oAcjf9iR1yygULTiVzbzFUKR622BRbjkZDXsv3JjjLhJEgKizeR2BXmDyU1eQ2eJE9ZE7G8ttiGWS9WfuRVir",
  "key25": "4co3eBaUXXdmUkrXrGcT5LJ6D5yLqhaCt3CFLwcDMyhurURsCZZX2yTXn7vhdgybVGbhtpToMZ8uKSTWnSkiuA5g",
  "key26": "TjCPUkDZaoK5jEFcnP8cUiqe7KcL3ZdYhQPb7qAaPekbbeqdZ6vvbBWZMWpYvKNbFkR6AnFkauLyvfSA5xiWGnK",
  "key27": "22f6whpaxMrkvLHPuVQQqXA62LgFpRa7hfG4otFxmLbKHuC6Ekrp17EUhcMbgbAThT82UGUZufV1KwB6Vd36VgDY",
  "key28": "5Uwvm9ZR3vZQXsVdq8ygsfxhqDHK7WusXSX1bRP44zzYB3BuhMKRGQb35rbCzFzwkD3bcFAQgvrHMP3kmCLEKBUz",
  "key29": "3BwUKmZcm79vvXQ5vWq5Qofhu63DyCDSjwqkXaAMJhx7gYVuJ3bwBT6mhbEzGU5rNyYUycXP7yub9fvkTjeGxg3D",
  "key30": "Fxhjp59WZgiaPaDbhDqpV6DyyEiudSt2SZb9tRy34rmg4KScdcxAZ1Fm9Spwq9giJzRLJJz3znLQVimkdi9JdKs",
  "key31": "HMtiyyukVEdnCFpXp5Qhomayfi1Yw6pv5ZUkzXgCXEw9RyQyp6vTaKCPftRDWcCCV4f38v2udjuqnfZgWrd7rha",
  "key32": "42n9eryMzietHRP3ypqeB5p1jXoMWBXs2GcTB9uHEwBf8pXuKDhrz9kaUK4DoDzrzPACu2narfZysZE5btrLQYuR",
  "key33": "2PoBvXPT7XZoQBb3e4MyVvcsWo24Sp2UBQ7hw85og6LnJXmU9JGRZCPbJ8X63137RSiaMAG7TAax5Pe2dQaU9N6C",
  "key34": "3LuZsa9Sa89UTLmUkRoEHwaE4Zd4AT6uwCMiMiF9UeCpyiWoi7DJFQn7ypvEfZFw6W8WYYbvMJr6eKb6u2efEe9D",
  "key35": "2HjzFhpmQNtwFVpD6ozEwnZhYUSp13Rmn1vZoSytT1H7ZDgi938QRskWDGAcoCzuMbfRntu4a6QJY2Fnb7JFTB2N",
  "key36": "2RxLfHCHUn34q3VjQCzcFy1x83RgHUpZALnPX94ADUFco6ZRQWyZoEqM4Q1kudZ5YESw66dNbAVcptRHumbHU3xa",
  "key37": "33MVZWEenritxXWVp7EMx6QRAwzwbC7DdzJFYtJmLsv6bVgd2Zx9yEFCd5kETMcwPDEATUAXa5T6ujLk5H9iBS8q",
  "key38": "4gnrUX1XoU4UGFTVWt34AVbQ9n9RKXowYasPHsRVcS7Znir56TvkJxsoosMHwuYsSGwPDfVAD2yy8rLbxAghZ7qt",
  "key39": "8oApUTCSBg6VaouNFcRQGBVvNqc8ttXdLBpJzMcUnprkaXXbu795yJY3VJr8nKL5ckDAmDvRhPaND9sbobEoZ6s",
  "key40": "2NSyt7bJ69CAZseeBv9ZqfrKwEuhQDejbDxhkN4BZnZeMojQ8Lksi2h9nmbFxU6qL4fQFB2pkrs8fpV7GJhsrg3y",
  "key41": "2LGkDWiZ6G8UM9Et7owrwkNagLZGZ6f1n69j8RvvnW6qRPZuuJ49arUhPwojunLjCd29Z43C8CDkAviXhHX748c4",
  "key42": "2CmUVUy1bv5xUFgNns7MXW7BMb2yxnRNhRVsBkTwpe9m1M5eCy2QgPjwoPS9RksSX7DeMuW9h1pNe4npEPms1vEu",
  "key43": "5SRatzRAwQyLfvrYK96EustthH5REWU77Wjkoqq2bEMjHFBt6YAB3xkPvtD5mL9bBmCuZxhD6LrGu2hW2YUBhcgs",
  "key44": "3ediT9Zf5zQP74Vqm76uHqFS5Qe4fPwDnGs5kQJq6eUXoD6o1jjLYzwGT6G42Mw4Au9Q6o9frVSU8w1DhnHEtAQU",
  "key45": "2oCPeeSFKbvtZyS2C3QBNksEBY4n9zgSnAJvFA1s23qnFZ39knzsbeKE9TZMjBSopMHodX5rnigTDiHwmNXz2WhN",
  "key46": "2pppgke4kxk6sHogX61pHwMtM51UneC8FGDMP2C4Ufo5EvzouYFFfz98xXzRqJG6chkhBWJSTHaTdnUhiMuBZYFd",
  "key47": "MDBDVsCAFc9GSrX9gTGTzkCinQA7om5iEfawpSr3oPGY84yp7ohUM4DBJ5QkLvYdPKArDDWL2ayYk5PeFgGBeFL",
  "key48": "59SrDMkpbnb8J7DFZtGstrs2kDykkzefqQCMzGCWD14iWK6Fh5R2b4XFYSFYAFiRLYMeWcSp8nW5cZQxCuusztxc",
  "key49": "5SBM5Vddar2pk2RR1m4zXKhx2GTPs5ih3DtDq26Y6AZF59nj4F3qrWKngzhY9GqQWgyc8LDp4HPoHj66g6vCbGLN"
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
