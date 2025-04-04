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
    "w3nZEPnCm9LmTZM8dexCsY3CiNGqt7oWn4zAMLS71fcETZ2JhAsDzyKaKbAT1p33YpUS7j1VnYG3suni6HrH6dw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BFuCnNU7mn6LohFFACXaa46g6AjTXhAsdjx48oNJ2tvF2sDe8pfjey1ud1xgmASCaKwruZP2KosNxASKUauBmc2",
  "key1": "4coM1vPZWHGtGpseSnZfGQDFG7Q58cxDA55efaQrh4MAb8pYQBoWjnGxT78Z4ocvg8JoMyMSWawkGCFKGzZxmjfA",
  "key2": "4fZjfVgpoJbt8a1Z3wLmb9TpsxvKXmov52a3bfzwinC7td35ENefLUqS7mh2sRzPpRVeyFRUmarfiRyR2kt3yxWH",
  "key3": "3PPZjWMLVD2yfGd1jdfYdyTQSixjUKSY4n2eUAWpFWFuoEvb4jfZHkkswSocvVGGq4BqTTou2rmz1hmFAGsGczw6",
  "key4": "5KuzrQU37Pm1Wuo36EHxtJkCvMmtGTrRAxyBZfLFMsBJKBh2hA8WddCVfxLENR5kFhumbFod2k3dYjEjBxyZk2S7",
  "key5": "5wNNJ4xyoMahGJ8iZ2WgojE2zL6QcM8Jrc9owsmPKXrto8PGEoCGfs6SPpKRc1iDk2m49qaFZoES27a52xFh4rd3",
  "key6": "5MdXkrqmebgE5ugHu581t85diVcLDT7ymTVG1GCokU55PDcQEmpsi2KWiUs9img6QqSYbg2yJr9chVBDm6YW8Bso",
  "key7": "4HcSNEkWCrMkVNTsJEuyVRo5WnZWuJBNF52i2Agy6VYXCPBLdSArfGr6ijE4jFc8GTE2DPAgaLtpqppv8p1AeP4g",
  "key8": "4eM6BZdunghYNdrhj7nRBS8B4EXqduw6Pyuhdjr23SxPqku2jtuLveQAFCYeBeJ6gDDLeG1pzPGfkePr2fNsiQN6",
  "key9": "5GWF6vcF4L9gfzmTYYLqU6dtu9SGJJQGxtfBcbUJTsgZkgyrXrY2stBkcKdCBb2NuGREhtVwGpGfSd1AyZDhL53E",
  "key10": "g6MhecW7MSrr8LaUTMHK3D71cshLryoHuET6U3vdt9f5iac9YijdRy5CwMMH9pFLjA8gRAkQyoNNV1bb8pCvkgi",
  "key11": "49zF2dspTEAFgSuxkcqwvbwZin438vqPHjWxTQpjoZaQ3qduv7Q7ank8K4M5sx2QQWTecw3ieMfjBxTMbuDRVtwY",
  "key12": "2dCeqXLgCAYy6CuKNSLo8Pya1JJFZd3Hu84TUcGk7BUQMsxscpPbxhrDDpRB7UN2gemc8s79i4W33XzxdLbzykF1",
  "key13": "54uCNuNxMJYfvGiJ2YpVJbwVekCgQLGraykPmFSAMbQC4c1BuvMK5sN4nCSAmeeNFDVgbgqJcuWyQH67J3KUs4Bj",
  "key14": "66kzi4CM1s7xRxRmPDPHD5kmVqWudaZT5zJg7pL9fnma6V9XM4ZJPaMHHw8iaPXcUygUe4y5aDHPmNYxAVhGUYF2",
  "key15": "3RrQtfhSzJ6vPDwzNXWCZ6HjutrGNM23yTKfkH2ppoeuJPWXrspBn62v1GQ1s7U6Yjjc8rRYKWUUi4J3fpmdRmC1",
  "key16": "5h8dqewZEoHtrxM5Ui8GmnvHLPQMi7XxT9WgMDcELvTLi7mUq4XmiCsRwsW5MxDmHt8qpWGdsngyHsWocojtFUT4",
  "key17": "AeEGzCTuShgzN5PXUcVXmKUmUS9nRvBdkfu82oqdp6jY6pVd4934CSdNBS962EENFJKNoVDkWf5W5aFpuMyMM4h",
  "key18": "5UdcQvjT58REY7wzwpTHsbtEdHW5Hf47a7kgEKjFi78ncGuaG3jFVhdPQhzoofSJBKy6is6FFgeVcNAED7ywur49",
  "key19": "5JUmTX1zPaxdQ5GmK4x9WKRBg8cyytooqatRjaWW2uByvGMREcFx82B8dBUFeFKYJMMsTUFa8Z5wnQeRpoWpsHr5",
  "key20": "38tQioBLEaPY7KM5ENVJWZgss1vVvEZ6eeGavhTfSjKvjuCFTssMzVf7B5SoC3H3YbGnTz8MQAT9nFDMmaEs9age",
  "key21": "33R3BchB2w72KPomeP3mTg6Smrrn3o4Gq2jeyvKQsrHgDw8zf9zVUtHBLt37QNjk2x8t1AaE2VFskRUuNme3TVxF",
  "key22": "2kQJDowXnjozBsj3BMWS3nM3MsyFxWZVSzUbbzMVFSkpwY7bQYBASPLBTmvzPvfjh3rNP6rZ5d8jrMMHiDkydyRS",
  "key23": "2dJWsf6qx7Dmn11T9fwxo5fmBwkTdQFybtyq5qURmvdDzrEZd4agY2JEZwHBynABrK6GPNM5brHZwVJtnrC5FbDt",
  "key24": "3ZcbTHC9GZsphzpPtVaMBcSwFahyAx9yK8HrSjsQ8i7gPc11a99G6v3BeDno2idjard222PTAyQwDHMYweLFfMiq",
  "key25": "5X2UJKrxs3SheLSD9Ge67v1Q9rjDUhhdToiWk4zPVBadBUjjHLnVxyXgfrvJuCf9Cg9CsPxbFEsFN1AxCsgeEUef",
  "key26": "5iCv6arR7DQHSGegwX6eXDjZ9PwABVK6avSycf5uqyVKAVCfJ5rB3t5FTrtLwECxqi92jsErNHEFUsjaMhMinfWL",
  "key27": "4zGhkAenYtMYJjb3NoJmeLX9qWqohH1xeoNNzusyBLSRk3ArMdrX6L1uzvWLf9WUzVvpjDt7X1CoZ49RBVFtWHex",
  "key28": "4HKtAaxBGgXCWs8BpH8xoqM8LTidihKXCzjS9UbomDqw6EsMECGziDVUuwF2VZKFzBRUySxydrk7byJmWzXSwM6C",
  "key29": "5zBaiL5nVGJ3DLLEU68BZB6uYBbqdVFqSx2kJb9nqpLd3ELqCY43Jb1K4RBAPXVL597YNkg3or4VEtpYiCRFaSX4",
  "key30": "44LGf5YjABfSyHG2ipuZdcZbnsEeFtqcjdVQYKUpFgANFKACafGnHgqm6Nqs6EsrmXb6mNYbkaVru6RbSTdVBfdi"
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
