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
    "3AwdBuakrES8AadZf3Ts8WwPHT7AZWNkJcXnRs32zA4kMzfRzte8QyQJc7EXAUK9yiRAzdMxduXEPrUyfduur3bj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBtkWx2wHoYQFHKBp3u4uFVvA86QxmY7ZZ97CZ5oprKmdZdp99A7zWEExY31LL8KktYi6WUYquYThdZNgnhBZJw",
  "key1": "4WGiKMy7f7hTczPNw1ieGdtQy7DHHXUD7pEYQYFDJQ2LuwsK2sMh67DJoBgBSJBzH36x85gz9USzQExiDujeyAGd",
  "key2": "3x9CkuyEDDA73cabwnzFTVMLaoPmqdmEMtSVTbY6gNdc8T1Hc8PL15JemHPYoEPzZaK38oYBoA4YaSRJzJU89pu2",
  "key3": "5nH6i1mtveVc5jeWjhh8KQDzqrBYqvTVPkeQXyhj5995NQsxHhAzHz2dDLzyLGxTE4hmtmVCWQCSSDa16X2dbn6T",
  "key4": "5C3fuYksYCuCxX7cFjZGzxrZdQqTimVy3FiKTmMkm23749r7FTGBXQRuj6PVoN7pxsPgCpY4XjpY2ZqtCMsnpWDy",
  "key5": "3tuymDC2i51W6raGuiVJQEvcUU4oJL8bKFRQ5sVXhxTw2bruEwMkGHBywCgxNFf4YGMuPmYrbSoUhos5FRm8phw5",
  "key6": "5BRbHYefka3C8XLAUmTeG4sa5b3DF3KghB9na4y242bnoG3BhgiwGdpVRbRDCcrkATfFAmfE5eZQ5D12queXyNoX",
  "key7": "8D4aEfDFzfXwUHS6t5VZzH5m8Ziomcm1ty2ByL6fvtJYNUSi9rE8oUtNR6zEArJkpf91REhNAstbk8Gq9j1BB2F",
  "key8": "3yngoDPW5XHWBbr5X37w6m4PqtDqbMt3Rrf3Wdag6TCjBwc2UxsnLkU7qhxMoCY5EjFaSJrtn1vqkdbpSYWLSpTx",
  "key9": "iKQmDcye5eUMAUqisfs7hSUkS72dDRt7DEfoGPCrffpZTTyFqg5tenqywXAGakZKLRU4RMi2s9E7Kz8siSnsx7r",
  "key10": "56EswbXPjem3r6GHd1NyFkYcHw6Nstqhx55Sxymr5Qc3amx78UNNjkuH95dMe6BCxW6xxPQQTqzSBZYjN65z72ay",
  "key11": "2HmSnFaFYSy1QVicUy2pAwdubvS461bkXUFj7B2seXrXKs8eatuVCyYjBs99mzz95WMnCmw6j4AfuoFDrSbabpcn",
  "key12": "3Bp4TexsnC2BFzChtKkvzkAUv3WGWA5xbgEpE81fzq2vKbFFVFwU9PytEVWDPEU9goHFgat4ixtyA6AdFKCqP4FB",
  "key13": "2C7s53E6Y9jzH5wUnYxvbDkuga2uNkeLE5MmYdqheGSquNbvJxkbyMcw7fWZgsHJiRUyrFSTm2KTqX4dSvPYJ7rD",
  "key14": "3oru7nbLSRaJEaBdoAa3Ch1QA26vdL21wwb6K4AQtWW1zxZudPJPbAgd9pjMg1YFFv975vV87AsWkwmiKfvcL8Fp",
  "key15": "94o7EF4wy6Lf1EtT43qyDUdNn43NLFp7twzR8Pvckm4z37EerLFbqpysRNzQfvBskXsEieAdpw1sL4rSMkxDqq8",
  "key16": "6WAUnmqbJGVQDyhGZEM6CvCYt76McecVbQ2kJimzDHhXHvDmaq737DutnZVdDXSmHuENMVPyZKWZ6QLc5cpYPjD",
  "key17": "2DvjJVfNK9ooqEHWnyjipBvGQEm6DVouwuW1mYYLW4GAbZCp2uyUvxRNa6Lgh45uacvdC7D79k7zgd5jULkZUjwZ",
  "key18": "3GjSdm998tufxeaTKkUgucwwbQqwYZEcPybYX17pMPkChLXsBnDNLqcWzLzBeQiJtxa69669Xd9hsuLtzR3PKCqJ",
  "key19": "T1mYPQg2osqyC6NmYrMFgcDgUqWnRSLR1t42ZqduwtbfWkuAqm8aQipvL8JAEUGhze79o1behnYdE3GewLyZ2BX",
  "key20": "5PdBxaX1JccFotdGELQXubH623Rn5ep2skMa3hf9hAR9eQ1qBPFMzVHahbqYeV59omgB7JT81WTJM4nGD9WUvifz",
  "key21": "3njZDpMcfsRmCDZbWiHf4QxSdCrWGkNpmPEscKHbPrMMHzv8vXCH1zbFLRHgTtqYNXrFsGCWzLPvQfAj1kQM14MU",
  "key22": "5Anu4q9omXNfwx6B5wxh85o87AUedi82wvA48cKZPyRnFAZPRWw1PcgBu5QtwekjDJBL3ErKJALG47BXX8ec5e7s",
  "key23": "4wVz1qdFcBzCUjxT2EzXq28UuhvruRVdfcX7kuwD8W2eECUwEe8ruCwysFdx1rod5WwdvpdGd6q18dfws8d7y9cM",
  "key24": "33HGcV8wLHeYyieBJTWgNhAVmvLckZzb2fV9fRVStkPq6uQg9NtDbYi5A5cRkpPMqo4wEEXEUdRg79pSjtBVrMdr",
  "key25": "5uW3dpZjA6BdX7pKRxuFVBjXuFbCtid8ZN9sMw8W1Jgx4jhbPPQmCz6nBwzot8F4DKsAxJbJo6jCHKQrJikCDy2x",
  "key26": "RuDNxUSQLpuxw27ovKWCH2LeGz2TpfjafYa6aTrNayRxJTPDswgudWz6FTTLvdtTYhL1ozYGqsMbKiEvLvWYFDT",
  "key27": "3Zz8xiNZjG9zpgKgBb33Jfn5Xsa3JwLbLahN2PaWioyfHtUEiGTo94ncUDSyWAe3ta66SiQiUHPcESHcH2Jde7US",
  "key28": "3qmQWfrcPMN6KegijkFWxoqCyZHHS72LW4YfhAwd1eD8P1odBmCQUUhtFUvKfWe34PeLZ7ntDmEDuXXFWBkeinGG",
  "key29": "2J9J2h9hX4DLi9Hun188ToFoGWRQ6N6gKk84gQ4x1SXJhhdy6PAzaVXjR8ctYkPaDYpytgRuQX8Me9Bpb3HFxvk7",
  "key30": "3BNmxyVdEAmAVgdDkE9i4VA8uTN6wVLjdsJGLyg1TZ3AiF9xTWj65pJrQ5H5AMW5wmdkVYPLzg8vsThmPiqDL7EK",
  "key31": "qC9i6jRmy4UbTwRi7sgnqe6Z9GRftDbXixsuLbwT7XyhByc9tfTLqDnMZtZnL874oEi5WpB6qcVWgQh5zR9RwzH",
  "key32": "xGEraffvH13s5dBRJChWBwwtZ5Q3VFECLMX516VH5LNAFWnk4mebwx7QRSXmNiPp3Y1jHYuc4fjYDBGG599BdoC",
  "key33": "3czm458Dtj1jRxQomW5n9eC39B9Pzr9niE6RvvpmSim1F6DUbgakDgJb25gdJvCxYbdK7UQNT1XmgQuKQLL9dBft",
  "key34": "4obkK6Dwd96jU3KHwnYZEVSuMgBdPBFvAYJaQtswp7DXprzDcikjPmqpbStyUmDZRqgNonB1GWKNrBDsZ37EBoQD",
  "key35": "3VX3RHHZfyjHfiWvxATEWbTPf7QHCF45FshpU3jvkVpAyznqxTEGbUMtxKdwDFhpyVvfuW9QkAJjrLuZ8z3XQa5Q",
  "key36": "2PWBjHsfQJ42hM3hVjoqGScn7rTaLzYEYmzigZ5wziBFPeVTxF3k4JC1XFFb6Tv8NsSMBAjhsEyNtLruMraFemvY",
  "key37": "3Xnmp4teuuCG8VufF4chcExXyxHED7CLkYVMizTyTnx7CjEWqsCQh4a9eWi9TpFiVdCAfgTXRsawiVW78oc4h9ww",
  "key38": "5SHbfNzx1RakrxDbgYez6LozsXA6jUJYcY6mpKkQcTz3BsDh1FGyxhaSc9ZAhxy5aN9csEWFviE14yFT1Qus9Wxj",
  "key39": "3tZVMKdXvGndcV6AyeQNr1Pp2w2mCPhM2Bp1VbcK22jqdcZxXvqSnen2DjfJccGuZoxurCGubZGcbjNJiHjW3DUv",
  "key40": "288CsvRc7XQcRWvtuqKfTrS1vSash6kZGQhdmYcmSdYGNXQGNyUURprzD5eJxQresepfnZRxr5wHtoD7vTQUZvpF",
  "key41": "2P3vQXe6zFkjRy6wgXwyyo2JWTbZ9GT5tQBBpGJAGCYobRRVSTJTaCqbkZvbHPGvD9ASvxMeFAkRva1gzjv3Y2pn",
  "key42": "3awit4tjnHQbSJuEbu3skcsbFpyhwaHnakHsdH8bhq6XhowA43UzDbdbv9Lhxrrfi1UJ3hv6hdgUsCRtk8C5B6EH",
  "key43": "483LfrkV5uh8C3CG3doZf4p8Wr1p7rbP4AMZkW7Qr97CXJWeeT92BCTtKU3gcK4vn9ayAXGnkTHM8H2LegfjQB26"
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
