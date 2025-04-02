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
    "3PU6TEvA5wT9S7bpWSuP2JPKN87JeaL6jCGdJNNsKSgz7k2mu18bVyZGkWjw5ndvzTYhQyjxCePuBgRhwq12Yv1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGr9b6ktMVmhDtQBsLdMfPmyCEFAvn9ESccuZBdJNGWM3nTfBsEQB72DQxsG2Jkf4qkqsUmPietCndTHZSancuY",
  "key1": "9soyRgGKcYSdB8BGSfusmyaKskah9yv3Ub4mH1i22FSQ865LSXdhif3jcQV7kexmqshTZfMGhNjxPx1WsyM6fCr",
  "key2": "2hsVh7gUFf1FkY8FtiT8YzZve3SUKnH6gjehyJE6NtnHL2FjwXtzBHwV9MMcekPXD8QS6NkY9T94hqngGBU72sRM",
  "key3": "5zatAwn57SLRzxDYxJiTcSuZwok88Ha9vjFsVZrXFHoXsAvxeLbqAnbMKAwRP9g1M9SLXftnq3XpYTyQw1ightuF",
  "key4": "65V3vnyNna3SfenLmmoDH86AtNipEreqQzoXvjVyjLWpboxj9GhPpMqXxNv4mgLnzLGFBSY9fzwiXaS6sGJsGBc9",
  "key5": "2DgXeTpxNY5bk9zNgfycaWwuubcuNKFFk28ucyYDzqVeY2WDTTaRPDN6RB3AHvyWw8ygN3LiuNCuvn1z5nHf2GYb",
  "key6": "2Bkv9UphCzjb2akyJE259EWUYNNy4vhH6X6puGArS5YqPu9UC5tYDAJg9J1sjKvYHAFYxVJ1aj5LVCSkkHoxYme8",
  "key7": "5vTPyunbQmFB7swUYP6WrvK2q86XCrpDSExUTVTSapqSYoQhHbMK7fSsxRmuRXgzYjZfUviHhXxmKsCHEuo3oPHB",
  "key8": "5DmRTRa5eHWHjfrcBPFc19pJhcWig75iR4S7LBopbkdWmKuYfaMoBhLnVCNRPcKmxABdXNVkGAdyis33LGzcoYam",
  "key9": "2GJT4cUUrbwcNxmdxZJrSsoSbRupSWgtu3sdsuQVsrLFN7aj14QH32yzhiBCZ7xJUDwLdx35zwyNJtpw1czfBoGK",
  "key10": "5cU9PWhBCadRFUpScDGbo3QX347PbP3VJXEX6kABJZEDrmzbU1SXXeZMMzvw8arC1G1YutWQkAjZNwgMQLUKmfKp",
  "key11": "3mbBQqgm7fmFngvoK2Vh41QErC7tCBe6tSYrNgcmettCqh95rzQPhG4V6V125pmmaEpK9kjPyRuZttETqSbiDT8H",
  "key12": "4CPsYDp1E66vXCPntZSimhLnhaLpuBNrehMkC8MoV4iPrnn3h9A5imBz4a67xC9nTtvwgHj28NbvmLSxhCPp6ZKN",
  "key13": "4ojYp1f4hicQdp5YLuTXxWx4ftppDBgqzC1HkGMBtMnvis2byA7EoPdF2FmxzGyTjqXo8qftZUZeHLDpYNFVXG6x",
  "key14": "acN1z3KFb2dwnyar9AG1dfo3ynhPyUqG5H6UtbwvZdCFZREdVj1ZMvoYuXBZMtJrMfnGrayDTmw33YiHQEvjNCV",
  "key15": "25rZyutFGa8HcYf4X3MgG5rZCa9TFedNyZtLuuJBk2uqthg5oCficJ8p6ddXytW2qaSky7JjRhhnPWzyAf8png5E",
  "key16": "54BzAikiaUiRjBfoFay9gGBAtDZEGyN2thQEMfidr4Yk8RRcL4dJbJymLoJmh9BwVSy7Xz1VgW7JJTcRikCKa9FM",
  "key17": "C4YE8wUa14X4XfyvF9qsGmiajJ14zFcNQFMk27r3mZAeUgmdDCqtDmio4Yyc1jbar6KwmkrMPrhjP2yDf4VNbWa",
  "key18": "v6H3RFAdWFkJA6UEB38YKHhXrywuvoBVjYXXjN8Khh8FbkQgsYnFj3tWnoDLj1PipRKCP4ViKMz2UYBaU45RRJL",
  "key19": "5ybYuBcYsCECegWuuw3kXC5hvQQrt8TgHQBM4EH6FAMjpP6NHP94MYy1NhjKtXwTouqfLSesuvxFCoDMXDM5DSzG",
  "key20": "61s3NZnQA1T7V8jhK98kmXUQMdpvZbWQZGxsWcWQRoH717yb2dEkjNxBptoFCrMc1KxBgCsiLNxUVGv2eEjnEJZZ",
  "key21": "3rC8PzUyMJNqSgPtXCxuFVFqgNquRD63RZpQW6Q5LYmS3wGkuLpx2kssDfCSwWbHDTb4gF5jGX79FVumM95x3WZW",
  "key22": "4YTRb4dSDvhHAg5VwUHwf6urTqYQL1ktPBm9RJsYkgXBqre3L2naALfkW77qFV92oj31magXVTZhvfgVYs27rPU7",
  "key23": "62Fbp3wqXEhGLd2fC4vt5PqtVZRpMXXKAq2JkaQ6NW34RGHthSvDjvpuEGQZCoMeJmuqKDAeknAGN9Qy21xoCb6H",
  "key24": "2CGmyuWPUPW1WYzfGedAn8LFCNG37dSpixJCe1HTp4WESvwQjwXzvqaRr2SDV3vBVDLGnf9JncMCFRgvjgREGhd8",
  "key25": "37npNfuikQvVwhxA3nGY565T5ZQmU5e7Y6SVWvp5FuGQ5cyumWNYErTXgHaT3EmY31FxD9N7oUiisHkBBjmrLGrx",
  "key26": "3Nh8VRzQ6Z5tcsgySbaiE1UiRTDQVU3y6bwUuZ7krN3NN4ZPWmfcpgKpPTEfMbojF3UWx4PVtsUMmdLWpqqXENA3",
  "key27": "319mgRyqLo4BNk36kzFCxKBvE8ET4yuA4UeLGY2sPKUamZutZq5YQdW8kJfq57bStNDR4i4cAWrnGSq8RTATbTae",
  "key28": "2Xm4MZcLvCYFdaScyJY5nFAK7JejXQ5rmnVtN4FRHCjnFABLwErfddMHebc3Yvytk6yWK8PvVMnf2H2fi9eUDXhr",
  "key29": "449ZwmGWEJMk52fC88NNnHfgB91n3eEz9h5cqvUNJwtgSXmQ1S1GxNQ41f4v5b2yRQT6QBteAw59qSRy6jQYiiWx",
  "key30": "3wCv97x1FjTGKAExH69h9EqLPK5YaqFwGy5MsuA2c678x4YardeBoD8Sq4tezYywdAA6K1xCgP2UpGpkGFcwpmXE",
  "key31": "3nv7q8JvqijVTYqtkehKrbULQMjKNYtXEQJCpMDPJC9NgbUdWL6SgGj111PAUeV1Z73jZFR9Syu3euw96iGcrvjL",
  "key32": "5bAL6m487AjGNU9LWCsD6gCgCmgjyHiKXUpvbNf1zJjHC4w9M4EvZvMBG917ZFhpHF24WvPqBCU1N6W1S2Sm57Ne",
  "key33": "4eKtNMiSZKpU6PAJdmeuqXbeBS73P6CD6VYmc8qhkmoAEHGrnwe8JR19zUE5yn6YWe1DKrwTbzhnVrk89vYMen33",
  "key34": "4vjLhgBbV14YthBS6613NGaExWSypZu9jnfLHKa7YkxQ9Z5kCvLRS42uvFYJ9YjUS3wJsRMrWmptqtNWojgMbEXz",
  "key35": "faYooqLyPFfZX5PmN86M4ky81Vgd4CW1yyqkkdWhSSFrvikoYgzBFy5dsHo8SvorHo1LqVBAdQbjG1f5QXG6QJj"
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
