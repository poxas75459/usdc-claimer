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
    "62KeCLeR28kz9WucNkcv9xrY3PCoHgsXVcMkdT5m37Y2qRM3paLRPy5WCNz8Fz3kwuoNTyeLbbCFjMv7kMSh8143"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56j9qr3dRLASJz6o7rFs2KRGHwXEW6z9b7FmoD2onFTfvaaoLoiFoL11Mdjy6gLh9Xbs8EkVDoFRMdrHnhzrnEJF",
  "key1": "53tv2ss9nb2VTN2mjVfZMNXnwngtwb8nJGSKhdrz6RFAUj7pJZpaosXPSGZgLvSLR8aSHRiSqCHBUNCFSsPRdegY",
  "key2": "59x5tcKxAafDbcu6cQy3wJTE6QcFk6uSVL6rzPYHGN6rToLPBtEKuNGVY2agtzrUyWb38fv9zeFdBf5Nb56oCTzA",
  "key3": "2SSJC2HBHMsPVjoQ3bsPrVzwgsKUmAjmTXqKXvKdZi5Rs2wKQCzvQ6atb7MEWj7CrEF7q6s18nGJCNf3AeqJ7wzm",
  "key4": "5UEU86eDkcfv71S1Vu9EEix3V1xTxtSijzAkeerVx33mjcEmAXRt8rzmnemf5ZAM2xP9ot1AjpU4nP3jGdXiKm3C",
  "key5": "mj3TAw7SSvkZgA7V6H36mhjgbszByd256uoTpRnZtGP9uuP5AkhjegzMRTxoZfV3zGTx31bCSyWDQTrevoX6sEo",
  "key6": "3iNXHvL2rU8nRKso5dABB4c4JjqcexEnv92G1PKnkM9yUvyZCr12kLGWfHCuRTqKosnvFPG8kW1nPCLdkzG2HWit",
  "key7": "3BgijT5FMZ2g7LGqQetXNReRifaCdjjHphXzvbBwuzTFeYa4gdLNxXpReXMNcutZ7jRwo6uxhjjQgJUfCN9s9yB7",
  "key8": "5FU4bGJjYB5oGvR69j1RpomYZbGirg4zwzCb3yNASdGSZKCpXZ2dLLub9Y1MgvphSWBasicNhJKAhqLYU1mYn4Q9",
  "key9": "4o6vn6ucdNVJk5HdVBdoSrmsnTe6kJxhfHLdowWuxtc8bJDB5wCy2g6K1gCDiYEJqMmdwzk3BBPo5bqk1bYuRJPL",
  "key10": "4gJy21qiU96DSGJ6GjujkuY8n8xqc5jYkNKe4gLhXRbNUsDQh7Qd7Ac6J9tnqPscD16SUasDtuWjf4cvJhhazxVm",
  "key11": "29aB4DCjiLnuQVpvWHfS29mfAqDQgBBy4k7xYfzdJ1Y2VTUQqNdkpfvyHRzV2VncokBvS9xTP73p3j9PXqngtHLE",
  "key12": "2GZ97LLCifPGgTJmV5skeS8qsJ7dxPtLFVGcPoMda5aenV6Ezpy9e91YZPGwaLC72Kb5kVncT3CtSgJQAqiNU4rz",
  "key13": "Lep9yHmQoBCJQkV3aCVGqD4UbZ7aaZFt1GTNKHQmNmUAUmnf5PxSeQ9vWjmHjPfMjauuJqA8YZEFKmCj8QmSwzR",
  "key14": "4xuTetAXciCkfk8qAk9y2MaNfz4uzMGz2DWf1F9FaVKt2F749te2i2rZK6u26Bvs4qfLyggGxcT2FHXFJiH5Cqck",
  "key15": "35SSZnr5Ri2ZRifa1QHNtN4YxPqiS7unGosLmhJA9jh6b3AJrSzunf6oxrgvE3iTubSMJdsAPjPNtvcuymGjKyfZ",
  "key16": "2d9ZRCvX6KDkPrzkATibaGtr51rPwjS9NeYUTAYXmjDFKKv9jFKHM4y2eSQ79hKi8iVz5BWf3myaamAmkMAKzqLG",
  "key17": "5kY1o2YPLaZSWE5UXxALehyu9YCYXRWN1mUL3Xfj7CUnjT6L4mMSs9Eaqxdq7Y7GuZvNfvWBJMQdKisTT2NL1DGw",
  "key18": "4wKfQhWtK2m2uZzCCV18CsGBvTUfLK8jpAkxedzVYVT1CVRrdaDydUAQYMmFnLqS85P68CCvrhPyYAP7WRchfhtA",
  "key19": "3gxkoXhvPJJVCmam1qbdrwmBn2ij5mwMg3DURe7pKqWMxPc3YoJazRm3wms7XtvBXzxdJAWgwCJkbyRsj9g28Tja",
  "key20": "4t5pR8ELX2B8L2J4rgGCvsz2bUitpaChAA5kjtxjn1MvtJwczWAzVnGTSY8UDRvPjNzTjYcwdMiKxqAGxF3byTS9",
  "key21": "if7LfbiHLh3J1oEgqpWwpLuhpgyvrxW2hekfCVYmDkDX1EPJ5aNxgbGdXS2MCgafX869iRc8tNH8nPVoxByvGqn",
  "key22": "cRfS5YchjqvPMaGygzcAqKGCLPLkzzoizd4uuWVyVaj4xhMHTk96eHe3eoji718KhHqyb2dAm8g8sNnDjUt9Uye",
  "key23": "4rYcrWZ8aTE7oSqRYEii82K1Diiom2kxc5m5grBCbk8Un13s5DQJbkfgNYf2ja4CyEZjMbJJqiTieNHY79F9CdXa",
  "key24": "5SuM4p7HJzbn64Z4ryQ3WSFFXvjVXAuWvkogCixakpeqYZigudSM2ynJagFF44vMdJjg4kdmVS2iviCpj5YAR4gj",
  "key25": "WZ5ssUXrEwDpHt2stBpNDXYhYAjxcwf16NdHHWzZPuioHeLs5WsW3Ng6StYRDXZLHN6F3mxXT36pf7R4hdW6H3e",
  "key26": "3MFrWuxMyFZrKbjr8spxL69H6t4DWAJ99EV5RZamhG9Paenc9TKYVSvg5yahaAvPB2mgaCenrh7eqxQqgmtNmQBp",
  "key27": "46U4zuNdmiPMPozd77tqAkTirtcb67245mjrDdvT5t7LBGCUekkeHCsu76SwMrLtAiYz4g99xC1sGaA862CsVqPX",
  "key28": "jBLTF5GS6aPmjrqutduCmHn7uVoZM44iRmURRp6Abt7LFmV7GztYLToQg4WnVgeV95Y6Mr6etqe77NHrucgMfFY",
  "key29": "9owCnQ3kqdk4NimkuMSaARD1XwAyqZaDbNVoVcia3j791vdEBwkWHeDVAqz4gL2Yk37EsD9yny3YzDgj7LJTPxS",
  "key30": "hZzQjQ9RcewaHZAoAFYcz1LHJiW5Mbk2MKHKTdHQMCb1KSFSAdksuqo8BguULcN7NsETNWFaex4ZWtgAVVq8n69",
  "key31": "HAEzGeVAZNW1oY31SHcmhrqnsFUshBWy7FpDbMLzPJ8eeGsFKfrCgZNiwUuMhAqnjh7SiKmYbG1cwGyWSbz7Z8b",
  "key32": "35TogbAN6CNBXDX6nTqXfmFMr59pFHXWvsN4tfu5ZM6sZJ5j2LosUexkv9fXM8cXUuF9khERwPnPML9y2EVPYfeb",
  "key33": "3DizdAmhAPMS1kCcmaXXgi113mzi7XJ9gQ48QGhU7B684Gy8DKK3gCssLtx8GdRYnKvn9nryvtBRQ6GzJz3WxGkh",
  "key34": "5aNm2TAbybKpa7By7qAPXwnMz8Z5sfJvkxDEWrEyHstCBS7LkCExgHJDXk12xWTd2n4DJt5AcmPWWTk2uh1Gzkek",
  "key35": "2hsyjLkVKwYs325xFXhwcuph2Yxqd8PvByusddMj58bM2tLdBriw8uehW2hJHMHciwmtSWMzihBkvkgpHuHZYyKU",
  "key36": "3YhGA6ozLep7qMQzUemFSfT9GmCeMGizE6rhrTJ7FoxKAkDVne54gojfy9BpfvZsGexuiJiJNWhsuGRTQfY37Kce",
  "key37": "2sBy72JvcsD3K9x1uJ2uyidF4wMTfHqgYPzyh87YvqUWQ72AuawYHeyQrZAG5nAePhiq9RymtVkGUeRUPvDfSv63",
  "key38": "4vMQt4PRuYmhkhWEAwVdmLsfLSxtJwk3axwhKWKHCkmLr2LhzVLDPZBbS5bV6u1sr2dAdVwr39gznPzws369GBoa",
  "key39": "5GwUoYuYSdG6YfTDV8H5dtH7i2xoAQkJj3Ntr3xJAMJTKswU3BPjXUqZRktFbibS62GwxqLCEv1zgv4Z2E1Yh7Cu"
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
