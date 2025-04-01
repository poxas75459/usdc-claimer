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
    "47d9qahnaNdeBTWgdu4t283NqQb7iXegGJEDjtNvjHjEicXL1UyC8c2So4F7djkLK5mZ4D9D3YB2VGztDFthfH6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "213skWfZuUxfLAFgJNNfSErA2RX8r4BU5CemFSCuDmPeeZWSBv94gNozqCJajkRtiDN6phJakkr2WKmB98ki4czn",
  "key1": "cgbPzm2FXKKahmvFaxvFf7oUq9fozkoeUPALDFzSsY22kJyvTwo55PJqsry8BVPZn2itiffi4nHeaEqdLiDRrDf",
  "key2": "4k8jhhWkW5Q2ne7pd4udU6QiKsCdRs5WozreGyKpsyyhp9s1AgKLXWQYkhCJXwgiRzfB4Xx5kQzT2umZUJ5FPuiW",
  "key3": "42jA27BJcqHq4ZQwVJ8pGDQVcnJ3bwvM6YFChqVUCQuYtC2xd6a5X3FAMuUfYFQX3RkWQSL4dSXdKWap2CtdzbKJ",
  "key4": "29YTgVwxdWSPoVhxUVpPTM67Ycft3qQPm4RU6NYYtAwbg4x5py4Z11C8G8nVaY51yoM5qeH8VpBYQeZDBJbtrhud",
  "key5": "sHzbAXFZjMnneWeuzLWbj2rfznJAr2HdkPwsGpmsCQby7GkJCY81Cv78oKBHnsgCjX8Mo1gPmfUhLbXyB9gHpVJ",
  "key6": "26ctjopxWrPYT7LpJGWbj1LLTX5GvjmyiAnHU4jocFASyp79LaJSVCjD7QJGt1EtMpgAWpYwULBmdqeiL2XZzMGF",
  "key7": "4YRGH5yvZCA43ZxWNozngPjEYisskAAFyzRWJ3niAeBUWCNWJN86LLN5v8YFuyCFwApLSsRVsgNvaM6RkpAek7Xr",
  "key8": "5jkZUeNXFVVgfaCM3VVR99myFx2rWWNFBLp5ZZaXxHX7ExCEcGaANb3qDcgXYfgTtWYQ2tNQaDKuamniCiTcmFbL",
  "key9": "3iMZr8BvTPm49qhp9U9KK4Se9qKWQkDQpMMJ5xDFj2mA9scjHWjQEFuRkJE8qGfyZnM9QvTtq4e4C5edwDpe8kkB",
  "key10": "3Ag5KKEVo2YtEJ2rCFaTGDWGv87s7eaLoR4pqiTBJfZQTyhQCYK99BKRnNpdomsco4ZD9zfD9Kyx6QTTmhERt6kM",
  "key11": "2xfhWkyH924roWRsntrTs926JCmG1U3JSXtC5ZrSqeMvrANr5kyWcFkgrRQS7JyXi3JKvUQPrh2UwVuVrq1sNG4x",
  "key12": "Z7cwDNb54DQ1EHKL8tRDzt2ECJd3uSrUdzSqZfuRMmJCk6dV6dzgA3MhaAoiCxMBnRLVcPSVjXoJTL2dVPok1Uu",
  "key13": "3xz25Kii6bsXvEK2Lw15SCSCy3LroccwXRgszAUh4tECMiSMLra9MDR4R2b5JHb1XZCeAmGqfiTuBULfvbauKve9",
  "key14": "3sdGpSTjyjf6D7sGpS7xwaZLNMz7BCozb6WnhU1S7iMevo5p6sugLFdjA4qcJMYNFy8L9owaKUZW2E6oFKbtnqL3",
  "key15": "2sVhchF79FeoXMhinn86czSbuZZfJxwxJ86SFVuCCug9PCRF4TVJogfgsdy5EQgPfgtsfYfc1dLc7zMW5RcUXCmd",
  "key16": "37JYPs3G2vWWgpKqrayjAwgdibB6qfZxxG66kaDG8owRKkRUY68ocaLTzPvq9K4EsEWvQvBn28kMmB7Vbc7hhvGG",
  "key17": "2Gbq3si4yUY3HqrEqkt9aFuC188cNXVxpyJDfWBXZUH2UjYFRx8wHi5nQofTSvWxxABniuftFNdj3d2F5a4AJ4mW",
  "key18": "2UwbuF7mqBp3xSsHCxthFkZD8mxWbLyaFaCd3KjaN7LHAXo6mB4c8qJ1E34QH58XintEYcV42vjts3yk8TaQCZoc",
  "key19": "2ZEbuGDPDWnqHqua5k7JKXGqJEEFFC9pmaXFTTJ4dMkTq8oiDbVc9kzMyCpnpYyQapLya8x8xtgEJazpK2EHMM9m",
  "key20": "38rTKAif7NHb5Kwc8C7HGy5KBZBoyNfY1e1EjqrFVVMJ8VsE3dEZw1HhJr22rRHZGLwkJjNzZLJfoBWjzoyTaCsw",
  "key21": "3fWoh9ET277TpLpz2ytgVtQBdVquK9mS2KLsEgMH4GqZxMiMHi77qqmu4u3CKMiut6uPfvDPu98Qttj7Fs1aQKu9",
  "key22": "7YZikewroHFRt4h89QFLg41E8GjDRsV4A6x1eGig7nDL6Fe8p2uMwhJp42WUc9pTjKSq2HjTzoqDHak5NGc4ekX",
  "key23": "JaTYnihZHDrhfhzECA7PPpeL4aGTXUnbPeg2i6AKKzuhBW9yQzamT1EcyHHfyaUwhxurEYME2djosutDP5yXaYt",
  "key24": "4rxX8dSZsKr3Kup7r3p9WiRgtv1k76G8eSUBU3yyps3A9xxX8HWhs9kN9BbG2x8hG1xgDmwdCMAvmgWCvuVNMQyB",
  "key25": "4Umy6CCbjhT34b1nEQpWwUtYbdJcTsKsxvPkqMPwzxyzXqAZdWtVeBb33xBmLE8gesS73BP7UJ4WEwsLrYMKdNYE",
  "key26": "4jX4DtwQvw3BfVVBok6nVsMKVXByotEiVYcFisqh8MHyC2YsR9RGHQTYwhPTxbtVfp5jo3KQg9YhjAPABxtgupgs",
  "key27": "SAY5ybUH9Ki8yGzgP8dgoxgDm8bEHywRRDn6RJkbRR9bKH2HdV6rCAZ2ZwxaLWb4iv8q4JxK6a7iCEvQbu6j3Wz"
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
