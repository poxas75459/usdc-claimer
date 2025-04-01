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
    "5Vw7zrJG7FFVnLdJ3NH63HZjsCKTZLQ7D7LzQwESLFR933CzwMhzeKVy5nLsFypPDSsKqMnnrrPsgFNKpQBhUnEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P7kyQeNJCkvv4zof183bkXGn6sLQUKibTkiTREoqnvVshEwTijQt2yUQKsGGS7yPvW77qrrceqaUkpopsrvt2S1",
  "key1": "2Dt45CmtztmMy7om3K7rU45mipH5wBkcQv8tvP3QpUveLyRanAL3BgcUqd15BofehniwmyV6hm5b6Sw4YfeJnK1G",
  "key2": "3XkAdSYzBiNXwt3Sr8JcNAVdWyxufetNBDKu3z9PSNuF5jJDsRRCpAvvh3zwNNncTT7J4zdAzmDMxGiPHSGarspk",
  "key3": "26Hp5mSj1ytegzNd47p5MAos8BEgx2sQ9ESGYJA7bD9tCL3hLdsFxWM6RrFiQfPjeF1VyumW497fzVdKZw61vEHQ",
  "key4": "u1hmEqpecbfrALbFV6oLKPpFbuYyPnzPp9UmQ23v48GvKvhxGwUWj5VYsVSchn1Pdu9o6CLT1d8xPpyMH38pviX",
  "key5": "yNJS6UrT9TqAFPZBxHyFFnaBuekxK9uYp9Kd6Vtk6VMAwPyt73yJcYKDrAR4ne3dx2AXLSjTSAxhAt53n6QieHe",
  "key6": "5WRviP8PKqGefGNXMvekEz77mL2WZzB2VedwqwHxxhwLTfHNP2ywYXofrDjwake7UWzQ4ro4uJ7GujgSmX4DZUYL",
  "key7": "4ciGV5A6i5sqwsjLJaYov2sPM7qXuPLVrMNutEbs2v6b4NZPtMbKPUf3Qtr7BDxWTgyAixg2VL9getQTqqr8EzDD",
  "key8": "2YRt3cwwohEtVX45mgeGfAX6WS7nY4mC1ftiVcM1b6gwD1Y9sxYjwh1BAq6JR842nhmGvfEnV43mVUWppoy1bLWA",
  "key9": "YTfRwM69qUhzP4hLXYJvB6zGKqZwyitxzskFEXNExvJyJjbVQUX68saBVXFqESiXSJ5FaazUq1q32DWh2kE6wa7",
  "key10": "2kM9ixpiHUb8juxCEtWGPMwA9EWdXPLD73Kq8vxPh7LKeZHERZdiwSXp9oK1Qudda8JdqaKoTJiswxknHgnMVBt9",
  "key11": "4EqGLRpiJkF2eEfgPifyawfbx5soHXUkjXbq5AjVr7wMbqyfdetin3QuXCNSbo12BQ2PgyjWSJiEdiaWejb211Ve",
  "key12": "5RNhjCgMQtmtCST6MMQEPC7CKzonkGQyRvNsQ1aJHpCmb4pPpCW31sArj4FqMHVToMiYBMxezbQY4ewphuPXCD2r",
  "key13": "V4GnrDU9gYy3vAzVSaSoZR65xitzvNWyKah8FKbGXv4tefBowaeXJB524VRSNYxZoWZjXVuWXUi4AVHZvgnxUuL",
  "key14": "5jDXo4Vgdyuck6xM64bfXEkVY9B7Ct7njBb469rh25pu1ggprfXDT7D9DHTY7XPfTi6wEzVzN49XPLHFjXXppJEb",
  "key15": "3fznDefCPHSMXbBTRRGaCjmk9Aj5QS8Gn2pEqEUFBVXckSieEtQd3C2MPGJWBoWJ1jHwCpJuiRik45UGEXkvdPmQ",
  "key16": "3o5x9PsBtXY7DuwwawqyKvUpfk9pFh1ZviDrPGfeFXsEtMVzVbFad3s55KP39RWD4fwR6XVXqwFBpXzy1BZHUtrB",
  "key17": "3YuTADcEVzsi6uajCE8HyJVpywvCUhssV46dbB5mecGi2sosenJT6Lp83GgpdfrtsXHnvUhi4pP7Swmc2Ag5gm9A",
  "key18": "58nJYa75MkHxzDXFDx2sKeAMormRG5nSRg3JQprG364QVc4kvD38DnDX1ayiLDMqeSk7aWnQSyLYhJsxDYSuSKat",
  "key19": "dFFQXLADTnQ34Zs9f3kQJ1B7yzgn58G7VjmEXRTcwD8B4Cg5vQkwpSYmAEjxFEGrZtLToCTNdiPybiWsb8LsJJ9",
  "key20": "2K66wUsc1L5Xqiuw6XdF54UHjKRzzbMwAFxgehiLct1ioCMLmDiB2nrMygLyGs3bj8Jzcsweumu5R7TAXfWLtpSJ",
  "key21": "3zruZ59emgySs5d5wkbVCBtGXmZFrZSmKAkUZ1ck3tdYt1nK6TS8CHfGH1a8jBCTC7pP4gJY7vHVNPEW4KUYRkRr",
  "key22": "53j2p4KnKGCKMa6wFkxkw2SGF1MMzpvaXU4dfRMXc3i1SNV2gHoc8pFz614TKgjEp3BRyVFvCsK5p8ohXX7r81t",
  "key23": "4GPm8jKoVZpFa8Kdj8UG7UqeVZnjXTM62H3c2pvcukU6AoGeZ9SnjST7AU8eLgTmjrMjniMFvR4h4uzAFhsfHwiD",
  "key24": "XcZbRfoeTBU9JCpf12yQr8ak863qkW9FYzsxk3ReTcqbyCUK8HxBw3AM2vzpZy3GVvqmrLmzZr4w5FzM5Fxcwrn",
  "key25": "RPqMBQSS8w5qDHz8no1CN6FZSHtFYZ9Pp6DPq7dvqzsVbzYiLKGi4urZn1DZ7WdXqnt9yQueHjeHQeZu8a64cZN",
  "key26": "5TM9AMRFeVgjSpe7bGSGRXBYEKL2teFhtqV2LBfiD69Vp95s2jF5h5shnybmKhFZoYU6BRenaB22vkPaQHN9Ht1d",
  "key27": "4wFzu2nWYfJf1L6zhq5XHkFpQrF2T5ugrMED8YKQYf8as6n6j757K44aG9TVY7qzhRvsaw9griPjnAJX5aDEoWeV",
  "key28": "X3sXagC616NqczvdB2q2jiwEszqABDMYHsKGLDV38MMQfjTM3iHHUu95XfeNgf3iw6J56snh2zd8ytsKyb3r1KK",
  "key29": "SSBRCXyCgcDmfbfXgnTfU34JeW8bFUMAumofBf9YjpE1Cz7kogsSZFRaAwkaofhXHHZ6vy8X4GX42KUKytNHS4G",
  "key30": "mXePD4cTDw3ixrwcJNg24Acirt2S2DpbnjZBKYzZe1AGHrEYsPAWajT9fdMojSQazMZdiGuikFbPBaHxUDjj3De",
  "key31": "62D4mZw8GjLBcKRM2VU9mfB54eXRaxdGKaxgLfcZSTbW7AD2xhLTcV6MRBAzDpkqC3RmAoUG3Vkaz6GgQ6BkaZBb",
  "key32": "5fbhAbpoZ6LJWN3KU7UPyzcvW5rYkk8miqpAfSfDsa36TH4vMwRWcTpN1XwoV1HSkUhmiWRGDbcaug9JQrAB5PCd",
  "key33": "3t7oExFBZCFfpMCs2u4CRdYdds1z3FYLs8QE7WH1j46Vsz3K2qVEd7dDAFGBx2hnxkvgWvSG3mvPahAasgUwf4im",
  "key34": "4aCtokxruE8B3MSWa7EQjVKd58jTFhrH2qt6MfcQSfPiCxTqyaDSVR81PG7gq8jbacRgi2zKv8koKGsHj7aLACMX"
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
