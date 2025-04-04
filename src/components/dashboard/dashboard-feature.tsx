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
    "57f5Tsu1RgHjWSbA5unULkph2fjurLDtCCfXMLdCmr5JRVSnFY6qHJ8TArX5EbGVHnpCmujC5j69FUaFdfCAHBS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RLv8biEDT4ZsWxRUDRCbXEDQvwiFnqHnstDjmkm6L5ukCqfLWRAEnijLu7aXxsbmWikBL5dcA3yJ17Q7CwcnpNt",
  "key1": "5Vc1GP4XJEaPLx89Vz8SXPuVcATngF9APp7aaQ5ZH4AqFzH55fdHJqsNiQE1WBt2vtbh9kvNndouPrS9iQ8GvFez",
  "key2": "67X1gBBfQRdHwNXipfsVbz22z2fZbWQPXHE2rpuqeu6w4VXueZURPqFwSjh86zx7kZKcsCLVEd31BnX8wybJ55qY",
  "key3": "2SVz3yMMk5onrnLhyqgNNqF2SEwB7tRjZTYctSL6aX1d99Rh922pAeAec2LBBvziqinVhAF5sNufEp4XYMNRWMmv",
  "key4": "2pXdwfn4BiLssrxVCvVR6aPC8DYktKeEggRCt7EuhHFFPUzHHU6QKZtySPC1Jjrvhrj95KXrxivyDydyReaTUkfJ",
  "key5": "67mLQwkQ1ZMyfMwW2uFyusr6AxZWeXB85Zu6N6FpCkv7E9j4UkbvfoN67dZgiBTRuoib59DZ3eRLmhoeopAT5z6X",
  "key6": "5GoSebuxTLhqKVbaLisDz7vZtMwNHpGBeyDsg2Cuzs127Gzk9txsVf66jPW6CeM9nTFwjSHG7frdpZAjF9yj86Mk",
  "key7": "2SyMAAktya1EWEL8SjWDmMBxcobV9BbmkVpBYxYaA6hGErdYnMwL7pArQPuRGFdRzcm1vr8yfygh3kHsM8w7BEuV",
  "key8": "Cd9a5tXMLLDxaPBZfwd29u95cDRdEJ5APczkNSceAiQa8eRr4G2MS6USh7qRxGWZVi17wWsz4hxJF9qgUXn8RBs",
  "key9": "49k7Vmere1ELFrfT3az7RaKNx8GUZPakKJE13m8A6JWM1zUuvoxbcgNKP5P4gNmYPNx6NHrBhjrtrioRHoCXLVEu",
  "key10": "3MuP5FVEbPG1RTraTqfNJSa7f2QTyKzh5P3gzRVC16hfizrWg3TDHNamT1Hy7241n1ZTmqQVFiF4w21tbKx4f5AP",
  "key11": "4QxKSKgACUTj33PLahyA81QUjwhbF4oNhsba7FL7d8YRTWGgdcisT1DUiiFN5yy8HWEqJyqdDGLAEbfT6tfatujH",
  "key12": "25wGCL6yePQxLneYXCN19b6rSupEG9eyxJybXuXi8epXDFGvmm1yVKWPbhFguJqMtTiTX9KSBNVPjyhWQWBL3PJd",
  "key13": "P9uh1rUi4nTaNywXdbc53hmD5ifgYZ9s4VTcNEH6wsA3JYVwgQnhDyK7ogxRgSjzrq2GVFNjcySZ3VjgexCgFER",
  "key14": "34euDYxgS2uZ2BpSGvMFzMGRdnVPnfYCzg41NGoE4BfHGypiDWMeZDLzSrmojrztE4QwwqSViqbZhTWZvDxznSP1",
  "key15": "4f72m3zshMKySEUDyLPPGpkPrgKtsY7Fvynkye5ZoMb2Sw7dVLYmkvdFXTGqjGzJzdER1vjiyGKPHiMsnU6GfeZT",
  "key16": "EzfoTByf8EFd6WbNjHZij5XHddzQojKsSmMrgzKnWM2hEWPZeQsQNE7YZ3xeVaXyQTimVFqBZvdt6ii94H4mQLd",
  "key17": "22rMpPvgLgAGagRxnP8Qhsz6uaRbUksy7hp3tmSWcbiQWuks1FgM6EsL6YjUcLCZGezYmHMHBdVWhkHZZcLWtt7d",
  "key18": "63YjPani1pTdfd2jj3pi1FKuVj7NSD85tHAjkoMXLVePdkJEueKHgLNbrBySZrhvNz1Qbcn2VRBL8ETJyywhTMbj",
  "key19": "59AHXC17h4SwMczYSUpsLkXvHA6urSJ2LRMVrZv3XjY8f6PqgndRgvBs8Gov7kzkoKx6NU91LUWtp1MyUoZsYWaV",
  "key20": "2W4j66tV9VUe4xzcVtYr8wyVNthVJigJTRmVGFPh6gubw8SNzQsoqFUSPQCtBReNGFkrFyNtea5GTMCCgXe9vNDd",
  "key21": "39hpH49FsbigmrbGxsjuB4fTeZYq6Dy5T8YUcqkHLkHnrwfhXGervSbzm7UkjXfNkNHhHJh1bwQ9aAX2b8GnGFgm",
  "key22": "aFvAZn6UaiyM7xVNeZGkBJtsHEsCSpAUQaFuY2mAqQj6tcL1nwymuMGAtCEqEzfAFoNoQ2EZMVYAxZfDuwTe1qq",
  "key23": "2hmUFJapWHsRxZUDu7ALZf7FFdJHamZ4YH3aMx5J6UhCvRpdQ6DSmrdCrvHTuKvbuTJqjmvorfyUzqN7yzsKrLrn",
  "key24": "cqEVAJcWfpsfqXr1quQz45k7DLzddxP2ZunWnQ4ciwpUtsWUptwLrBMTkBWffNX6TNyLBpCKdha7UHN2mFsTPk3",
  "key25": "5RuTGC9hRjc6oxhHBkLGtTw6VMDhAisDPmc18wEFHGqeGFVgtEMyNhWBoKJRrHRiWoL88vrppRk18h12MCn31eh",
  "key26": "3oAQLAq7gypdjkDs4qcUhKDuWm9G9TDzEHxGTRFW1gsYXV59wwQb5uU8SD9Kxgkahhwp2VBCpJDMvZazpsCbUbUL",
  "key27": "j1PBe8UZ36wrFUeNNQGe7Ae1KsFtpbSnXqyHULm6xys5gUVKzvcnB3Lr4r2RRsQScDVBz8GkDxyirELxqCuDdgA",
  "key28": "2FHsz3Zrja5UQj4vdLWbRmpz3fVn9C7EtFyTLAnxGRm8tTasVdQtmfzAVB16BNGavuAyuXBmWpGr1CxQCPq7gDYe",
  "key29": "52oVxJXP9sUidEj1BhZrrxweybSiNXqgEFTSbBbDzD8bud5hJC9nh4dPaJbU8DqtWLLymxRRDyPwHJSR6JzMEziT",
  "key30": "5FB9aYbndJMmaKYQD2WReqwrsuUGiKfpjHN9qNo8rZQ6MoWqHfgDjUXUCzBJdhmtQfoXf2zEFT94CgQRNhvqfv23",
  "key31": "5DzzspC9S1ZBzBK75qvWtzxrqXBiRgcAicSx8RbAdEe3qw1uyXA6wnk9qzA655r5uDiJXJbTwHwWsjkm7WQv4yW1",
  "key32": "2SLjNMhZP5xFgDnQkQmu5YFd9LvEDeN4hwzShwv7Gnocvwdxfi69vgVsLwbsyDgS2D8asmm3gyvJSffYhHoQUmem",
  "key33": "5R6ZJwVbnKQgTFoZPmHd2uBH2weW46FLbDeHRbPyaWBNVy6yXZWztniHr15QLbto8nwnQZZyHjysUJuifzxspxzb",
  "key34": "2futxbar4z2cnKcKtY2Ru1NCo9uzQJTaPbd9dnMxL566SWT2P7hbpYyNwv362nysWsJUFWcHoVy5K8RW8CpMCjqb",
  "key35": "3hTefUDUmFdo2GMJ3U21piT4He6mFiKk264Rpj3UHybUEGL6orZp2QFJtNNNZ1nKBkVJ74EGX9D9nrFPZrDTWCN2",
  "key36": "3qJqgkbPJoHSAY4px3RL5Xw8Sb8BSCmeMQpWiHN84Qai3LPpRLETfgvou92VZ2KaZ2zyvQGZ44kqGqKRncWau9KJ",
  "key37": "4CS2cySRY9A6DQxHDjY21ywin2Na85GCY4N2tYKayvesUmTcC3CGVnvVQCih3EaxwuY7jrKMv4QXJU1VypDx7fKi",
  "key38": "3vait9VBe5bQj5QNi37Sa96kty3q29Lcvn2tyyPssDYKextWBYGUGMZNLGyBMcrvgigwsFhigg8kwYcyPhHK6rn5",
  "key39": "5NEPGfnqFCywkbv4YaSQ9dpFMYJmaQaf1wBYtEP82fqyRuoN6W3He9mKPVN9KMsbJhMnMYo7XZ3agEWLCEkd62kS",
  "key40": "4By5KBnGy9QTFmeSuMn8ZaptZNpNZ9VtjtPiJPjpDpb6JGW6vKmoQ2CYYQu8SHjcGj6TQnQEMSFWewNoNGtkWFff",
  "key41": "5FebixXFxHXZMAnB24LqqkTq5S4N8cg8AV9SdQEjZE2HKDQQH2Ks2Xu2HzXjA8hewpEWQjHczgMZBusu2e7wJbPs",
  "key42": "3WQz6QwsnoS2pqPBNWPU6vrZgBrn4PXX61fUPNSSs5piFpEQZWTos1WFdH9maFu15orGVHh9jGSLMviMp4qNvJte",
  "key43": "2VJwJp6oHZ7o2a6FPVLv5q88yqSTEKgUBTZuT3hghCVsHf9SqzJsdHGrD6tuyez19z7o4anFy1wsPhGd9QeH3rm8",
  "key44": "4i6CPyjbpD5odstTBzyymejtwR9Fu5Ncvhu5SX6wcHWJat3biaC6psrtwdTshepSErVhdN96awCAKuvvN5ZF4ovD",
  "key45": "4uxVNZ6Ugo5CJE7wWFLz19i8qFFaZguqAUPQA76df4Qwscu6wLdjHXCx5sRPLF1sVHbFegwowi7Ld7WHoKX2a3Lv",
  "key46": "4vmDnRshbcRvABYHnHP97RXUUw7FLEpRduBCM4HtvTrFbxAVwESrrBdWNvRpXZJ7cVLL5h4YB7L6Dtr26WbVQKgE"
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
