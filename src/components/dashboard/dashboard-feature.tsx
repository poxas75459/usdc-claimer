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
    "5vsBQwjkjz9S4kqK9MXXoteXtQ7Aqq2MPbVJMHEaFWMCHEfVN6oiiqTGPVqBkkLggrnLCPJzCWB92n6nWqe7eaWg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6x8HB5GXJjtsHRybfcn5gH1sCnrPQgKZMzsicNi82WDfTcJAPkKsUVEzUTYxcCTfUEm3n8FMvXhu8k6o5RiuRjk",
  "key1": "3VsfZGLU4SqcFNnrPLkRpo9Q3NbCcRFLDQj2NSyEGa52FUmBLFh53Zv1vgdworsJ3REytj5gzYkthaK1MAZdioGt",
  "key2": "5DPkL5Zwb7YCYp3cQkNUUugrUXVbEu2odjfkixNQwXZDBnPDyPF4PjtwvHkakjvJpj4vzjjuf7HY3kF1XXewRGWq",
  "key3": "4xfWFh3iqycDCNsxVPz76xSRvioXFNoPsTckDAsLF7skqVz2c5jf6jTYRZ4JNLfBdmY37fwjrZvMCAv7cYb4iGWt",
  "key4": "EZMmdmoq2bTworwTZewTWid5sr5fm34faPQynWHZ6ZTy5kFX42DmW226kVDYxEEsdeazQ5MyhrWWsnNCk7TMy15",
  "key5": "NsR5S3XD7ZYKuLHXa3umqJzSY9JoNrqNzS6AAAsTfrdds6EiM1MkhYoLJwH1fRS4AeNgWv4PPoGaTmw58U7v7bj",
  "key6": "1ppbyHyTbV4vgnXZococNQhXv5shfw2gnsfjhtXQS7zQJnXuTV1swPssJeuCDB9hgfRCKqJ2xFzCg6bPkNchLTg",
  "key7": "3M6G4ZNTnshX1SmhFwfT5JxQktaCTgewQccyEakmMrS9p26wNdrQk5Hm2Xsmf1sbYbrakeZe5PtZeGvKEbjrUwCt",
  "key8": "5Yqxy64XDHBghoahG56FmueECKH1fpnekcL4rRoovZvcZBkKmdDa6ySoYEqLbDHLawVmTnM85fJnixzVmJ5nA3N7",
  "key9": "44e81PCSN5kEPA6RPqghgFgSBaThGL8A9T82NRQ3aULbNzaVi4xAjMuYTLnvKdspfhum2pNAfsPPUJ9W2CJ5f4FH",
  "key10": "44VjPqMapcGCMHMmFo12gFkCUBjbEEhW4geu99Nw9LEjUkinyTMAubmEL5t68DCnCoVMfABhdaerQACwh5tVrXza",
  "key11": "25Egy31kdrXY82WTTWKe839jH3fDtAoK4WAbtaqx5SdfkiWFAzYt99iVpahqF9w5cmynPvN35L3rLAP7FSjK66Mv",
  "key12": "Dz2CSDNLfKHmQyBJFZaySfGbiYihEZixyNPjnc9koNnGNXTq8i1AWvJebpnESa984tZptcD4VGgVhsd2xdcqq2N",
  "key13": "32ZVTFyDMiHcQ1fqET36ekwDCkKMvNwfrmHdhyVEY32nPBsZe4QG4twicMS9zj1L8dUPDrVbA9o4na93oG8YmFhT",
  "key14": "24Gtokt7BNpBQ1xDuk62FquEvKXeXNEkj4hsVmbkrpcM7xE6YxZuNGsB5BspVcZB8t69XmqWyt56SNmtSqGxhFYr",
  "key15": "5aoG3SzRHcJnoWB5DTwdrEH6GfzT3vZrraP7tRptSJPBjUPTDhiEMoqjsRKtbqF2RHaJazhv2wVC4YnYcFiqebqP",
  "key16": "4QQPsyUiMKjvHEZXh2M7RKfbPvwanJSrMzmqN3qbGZH93Nh3ahA9abmCKZzNWtu9K4Z7iiSaTLzXyeQVute6Dy3g",
  "key17": "2eLpARm1Vy3DVvvMYCu3a1vakLugnrybCEcRNyBAgZY7caX2xSCaoCtLZXkjf6CFnFJow2cKJDtj4yg43dkW5mtc",
  "key18": "4aoTHN6htGw7FsaPXdTq3hxwETSbBEWeddudtUingVQfUkeqfYuZRroE8M741fKbv17SePCbaQGj3dAjMfaZwJUr",
  "key19": "jkZZrLq6JoC8PpkyULkk8S2P1wsmgPRyQZ4fr2bkB9MAjMud1qxhXuoRq3tkyThkRp7ZFzc2kJFNDfb9577q5V7",
  "key20": "HnUNkZwgfUgJ7nCFqUDASwYBY4Mpk1WMu4jndPQeNtPFdS2QcQ65pe3PEDT3gEMJopAptHZ557jLB14hxuGQZgX",
  "key21": "2Z1QJtZiSvF6AMQQHged9ASaRbsf6YzLX5oms3kwbtePVR8JYEtgJe8onNYDfxeXzTYuN6yWTmgzhSVQXmJZnarD",
  "key22": "3PN5huMP41YTsJUx1GhkCjsZhPYddy3FFrhip9ko5HcF3YA6LGwZ28NASCzscNHJ6ucgbyEsBWp9Knn9CxHAhhqy",
  "key23": "4VR7yeDjfNLCv3TMARZEBo9hfqVSRyJY6GK1PXJdP6vrS5VX5GVjYRiLe7h1kNC3dEdYkEXG1oxoXxwwSZcVwP2J",
  "key24": "faThskE8zTGQNA5fmjDShVmsCSqKkx5VfgbeJiw1rCcv6M4mEX26Rf19FjcnboEP4jE3vRPEN1i1gKg7eTSzwv4",
  "key25": "5JQPD9tfGo6qaJyTf1NtuabvtYfYudG7sDHdr7DTsArf4UtQ6k6hAvyhe6EiYz2YjHgM2r514MWvcHfikqj5ETbm",
  "key26": "54h6h3rb5UsZgeMQR8m8rLf2vRAcwe7p9ypvxEAyr29iRXnRkNxE6PYDn32PAcie5YFRE72XeLVEu3no83oJUv5C",
  "key27": "55qG6bjq4Kx9sPSFh9Qxs2Tc9fWs4DcuLrYWwHQDRG8DKcN9M7nn3gYkUa4EabxpXUnuYpBxEghpFFrbyPEWwBLB",
  "key28": "3TK9uB6XwctFUvng3Y7png23B58mseXZHwWyXw3VVxr9n5DY26rTAxbPm1PMTwJniotMKQZ7KtKsADg92F5CwDij",
  "key29": "5jK124M1uDCDDLqoMjH42dZjJhFKxsaaF85yZKYM2TqhZkHgSGTAQgxyfoCFYceKTr4bZ86uvV2XPmEm961Da7VL",
  "key30": "5Sjn8BYQP67r7VCRNUiSnzg227nzm1HbHooPGhu8fj28dSYK2XBjw63UgmgdesRLcAGyyPYN7Eo7q9Knco91n2n",
  "key31": "iZgjEeiynXBSYxPLKoG7qToKcU5ZUSDqzRu195SsSnb3VEX858H96vxYd4hvuMcBMkViNvhGAEC4yuYrMH5oz8C",
  "key32": "3gkrxmkH9N3DPsgCmTcnkwRLqs4kScLjx9JRgbgsLeVwCJ4UNRYkG7j84gjcYtCw9dSqaSfJ9bwunQWo79TqJM9J",
  "key33": "2SNtQkkUaRUZ2wrcEQqbPq8vHKYESyp4yo5xfBk58QhUb2xdapzHSKgQwHLjCmaPRtSkRsp5w1DF58Qw2ra6nFAA",
  "key34": "4s1zmAY7RkgLgP5JH5Vtopdiemb6DC6mMHqvxUupN8oAjYxynV4sd1WA5pe2NTp4vFptQ7D5azegPXTFtiD5jDHU",
  "key35": "3wbKafe5ALbHUdvK1XUdoWyhPDGCApiptr4o7N2x23dEmdnQkmuuhF3VyZ18AoZgE1KtaDnLm7kqVKCC6iuFHmXQ",
  "key36": "66xiqpJGKSuXizenNNsdYq2CocVfn1gGjzpMnMvyKZ4J4C2GEvRyBbDJZXdMhhtkB2PnKmvyY8izBu4itt8JFUd9",
  "key37": "4JyJkAx2zkPy3F7pWfSsaHC9Xxqv7ELmFN5EXBfPcQ51ceJhFDC5aX5TShS2h6o92yVxcyJY3Uyiv4J1FJyd2PRd",
  "key38": "65eKUiAhMnpmXmBnJFPaDGyRsudoy6r9YXUuAYdWduWyjoKnyz6xnF64VvmJqybG4xUu9vXoKjoBzdeDTDKvt6Vz",
  "key39": "qpcxsHo2AwxsqqTYPktciFYy454JtAJj1ucDj7KQ1rPNE9oezVLdUbupKqeUEPAmNZEzUB63PBhGk7cHTqmiNxm",
  "key40": "32poKkwLfCTRRDgxbCzuusEFbKxeAzoRUV28i6S7L8b9a7CeqGgmeeNVP7fonnMqkB9BoyCNKUZhngmoeKFioZS6",
  "key41": "3X5bunZBm3KnaaTjFoGv2nCbK7SpGC8mYokfXmBVJVFQxyejPcJST5nkpm5AToXXS6xSfGgD88uLifVeiJDotsFs",
  "key42": "4v7u6N3Tr8ZARPu2VtgUxxdCFcP2mGQNuQeHqCuA4WKFhkbvC2QK7F9PMsYsprfrG1hqDJSdg9FMYVXfmmBBxeww",
  "key43": "59Wd6iZLz4MwmdAtAxeKeM3cTjv6DnUxWG6kA2K3Qsk4iUraPGbTGZ7GPWX36jtUB4Jtvrxf25raS3dv998G4Uqu",
  "key44": "2WAgWmdVDQYDQN3e9sjWPavGa3nzQoVGmw54ZtiFeFpsmJ1Vf94dY9rU8DFbihrhKQ6FGk5mKnueNBfbKSSSW6pp",
  "key45": "3zjQTL3AyEPCTZiFN27zZwqCRu1TiJDUCVqFocexhjKUPhLsEs5TQGyttvEanWkhmXXVQPcDeQo1B1sjZxDPEMCX",
  "key46": "4PrEhqeGkhF62ZKrZJGVwzBDrZYKqV9ct1hYnNeBKQGrMDeiosGpJ15BpRib8UX3o6UYdsqTdd1nvfehKcPm9Xnw",
  "key47": "5zjM3CpBHv2sbwtwxQtWU6Rex4A4Wq5ZwiJjiKectXzPV5uRPFdbF5Sp3orbZmtZviveuSqxQhkKUVWDMXf3rfcQ"
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
