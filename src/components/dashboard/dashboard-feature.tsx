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
    "49XerojwryTkrWv4ktzxf47nR8MjtaEyHfq4dQzZBekD7A4zsqWDAEAwsBsWKEzAb1BoA7bYUtWXGMYK8cattYQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EqWY4LA6g2Dvjncd3tVET7EZmgReaPxuMNmj4BykyBvudUsnnzZphTg62o7nj56D9yThBftLsBk2Bn6fGTKRgYt",
  "key1": "28Xw53cX7dzgfpzCdC3qcZ33mGBExM7tC6bjwS9ziBRS1rFWLX2EnDFygShgaHZMX9vKGgZEumgcPDBzYrRGe3CH",
  "key2": "5S3etazcUKTkLqz1DXNwYtkmjnbner1mkEo5LW6X1c75z5cbx241H2mWTWXk2Z4jrmXZKbFoaZwrFKrdSbZWmiZw",
  "key3": "2XLyfNwE7YmiQhmH4Di2CNJtoU1QnxRmZAEfoE2FkRJxxiHTg3Fb2NBS73gjb8KS3EVdsETtFToeYGzxBwwAuS1N",
  "key4": "3KMuBbmJq5MdULirfkjueFX7NX6xNkzsFf8mVdzHcwnNB53UwSoJvQpsid6qG1MxdLwf6B7BYk46psWXkeeEMspU",
  "key5": "5M1YagFRC3iS6ath3x8iKB152GfhVt5BeyaDkiJuQcLDUWpQbeLhbBJZdUXJeXyGgjzBQpQiXFPJyJhfRoc3k8Fx",
  "key6": "CM7ifmfjyxPN5HTCJHbJz6yTixacUB131s99g8C8sTAfw3M7j2faArTKo468mQFHb7mwLrBNV5q3LrfMZmXtUf4",
  "key7": "5gZzwefMocn5DfxQ87cG5tiGXZ96eRGkbzAeuvf5rZyneA5gqUqLbYhJh9MngQYYXdPGGq5cjKLbVeTf6Q1LuLzZ",
  "key8": "2ZRmQ62ZT3A5xvN9iKZ8PbmLPTy69La4SjqCXEdPoP4oemZRa36eRU1Bn6aTWEcLjJ6JcHThCsarrpD5Ne7VYVxZ",
  "key9": "sdY7VXb4LTWaBsVAFMctqiqsdDXZZa2WhY52KdZNcojWp4De1SJAgyXuvBv23XHEXGjiMQUCTB6njXCMCDjQnDk",
  "key10": "5bt3rWMpEnXoruQEfUGwTQ5fgVStkTbvSEaAeKW927Ps77yJRDjkY6mxJ8MZEtYdwczkoYC4sdpzHxCSngnmBnyg",
  "key11": "5Gkc3C5rwKF4ANdtXf5CWqtNRQon9HVuiN2stVivjG2Yg5rxbbEhdq3erXc3dT7TeTgtgVpLXbW8iTuAiCoptsid",
  "key12": "4A5Vkb4BsJVg7fFHUoziSYLgbcefuPZSCt7xEMxdP5YQU9LxUDQYh3uMGCVrXzexfgAEmc4k6SahqTT27k4Qsa7S",
  "key13": "3pUus7BrA8iCR5e8Db3yyrFMeBqGQukGUMX7mmEytR5PuynDXjJj9JUZos9nXgDhL1s7Ad4vk8z3CQ9QyNNeMTys",
  "key14": "UUQdDcDrYAnrXiMjLWq77mEuiZALnDL8Vi8rAAaea1DaZdMTtRXqkd5EwL7fdFSnb28jGNqoXyeaKUtaXoVvyT4",
  "key15": "3iCkn39nisrAtDZFzuywZ4hW2c8sMUMKfNFm8jtUabr14EVxRKQZK4rAoPcPg3K6KDNvCUuXYFWTFH7PQ3EDHLxd",
  "key16": "2a7Xki9NeoYT1ihe4Mnt8D395A5Ub3s3kytDyvtr7FoT9B5NWtoPwiHYa7Vc2sDtqR1e8WHTs9GR6KzLBjvggEv8",
  "key17": "3qZsvdpXBvi84Wz7FYbcbxPmcPg7vFwx95HA89VTychMPzuM3GAPTazp775Vu6XWyQxFw5PBRifisdQwwRbEJXwX",
  "key18": "5BCRqZo25cjVgy73zPvKu6qZvEqaYdbDsfr8axBRDjuFSdduSoVbedob6tjJui6uq6TUErfnwrrPjzmEr3WrtLHg",
  "key19": "2iYFPGBzbo1GLH1Yu1r63UoDxk6nPh7NVqwM974WMarqkpUGNxNdAapp43jrVB6VCR5Y43KpR6EQLVTChhJ5vHKv",
  "key20": "2cYdmtvvj2uu3Z1dJb4zACeGxMU8coNnMedbDMrDeUvvgAUSdQZ4zARD5bx7BDNjnDBsWyfRHdJeX2JHobGsKmzo",
  "key21": "24fDu8znDZLSepUYr8n9MM7VebZkqQowsd5kDwGVvLPsjnZk61iNdSf1sCQoSZfTUHCtTcZKP1DR1EUs5UZhVGWy",
  "key22": "3NKqHcpHzu1mY7L6VVoQ9YAPwEA361vPQVeWSWHHMa39vSWyq6iMh6TcYEeHhgBNd6Y5vPSyVetw29eqZFvwC7Ui",
  "key23": "2tjvKkjNbDabfqeDYEbkow3rAhPgJAVcKaVm2wngGE4JCug6EbXwoRc6U1g5zxjzGLmoGK4qmFcEq8ufXuuMG9mJ",
  "key24": "fXpNJxRQqbi2rgShVtRfENh9b1BgGSewd7rUpVLi7HmBCBjZKic6sLB2xMN64ciZ3SmNyXeErPpKkL2eJajNzGW",
  "key25": "4hjZxYbheEZ6i56h4TC4ic8oH8ZD5gRb4EW9nrQxFsFdgP52HxUM94i8ZAjn4aZapVFUfvVD14evFE25sKoqS2qL",
  "key26": "4JLFeGfLtnUkpHJeMYqhCFzZKEc4UVrVrn7pDVHu4WPKo3czKXBLPvcBxnCEM1bGaZoA3ZrqDwGyM24ReUQ1qouS",
  "key27": "4DvaGTwCXGpMvExvq4K6iPRhjZ1rdhbFHCPZNM2GnmGyA87YNtPBeRfnDogx2V6adkni8Df7zsJJsisBpSZjaxbC",
  "key28": "5vFJvQ6d6bZnz6cGQSSCqNHfnhGK4nMS2rRaYucYfLrwD6DCLVnS47qcJhZtBnP6RpTxWfKtMb6ZNurS982hhHVS",
  "key29": "48Ubk75FM4HXp3uVh6oMmFNqKixz1uPNp3P6ufaMVQ4jRMtFwP4eQ5zSsMSBuLm7uqyekqA42jTJ3ZwFGNnTRnRF",
  "key30": "4jzQQjCARSErioXUFswmzY1Hd5yc8T931tgRBurNkh35kNJ5daaVWFVqD7yFfdCyDs6VsauwxD82qvgCmRNKwrfZ",
  "key31": "2LWxe372m9eFdQwiWbZpNbv4z1XfAurAHzXDkLE5uKxks2JSu2gcqmKmGoJBA2H9kKNjxYvcfXJzt6pj4QezkFQ3",
  "key32": "5zXkEtodFX1e1WCkmQBSkTy4bZuKsXJktcpFNBbQyrz4M6Ju7HbjtD3kqgvH23HNYNtfcLdFCT6wC8ejWg6QG1n3",
  "key33": "38CuaQ9dzC7nWTRm8Sd1phuDRnUUxG4GrjEojKjrhBJwcLRaWWzaaeFghoPgHyKrrJ1SHHfTkQUwohT4aRUCRLCq",
  "key34": "4qy8QgmKxo5NMQg6J8Bm3F3AZp4XUNnSdKhMY6Ji9fUc8NRyBbushHs3iwDhposxXDx4VoMSs4ZmvyrkY8dh5Fws",
  "key35": "2r8ctbUzk8HFT11tvL8Mv5CRX3Gr9AKLLaiXEHAZWvNkvhzgqaYUcUDb9YJVfeZhDT5p7ebCkp3rVPZcAW18ky5t",
  "key36": "3zhwwKSmA8mY8ntVoF8zirxMvQRaN2iV5z73KqBUos29wCBBrissjL2quRa59iAyoZC7kPnXDSRsUdB743WDgjLN",
  "key37": "2kiQZ19Y6RCSTikztk8sFaCa9stm5q67hMyuwPZtXEA8cuB2qNkFfCREcdWaqeX1qYLxoQgu9S5fsbdLTrVcL5aD",
  "key38": "5hJREQatRxWveCCCmr2oKvK2uenAycVUnkyf5iX7VcchsN5aG3EXr2uv2NAnSJN4tnCr7iHvA7JtzYsVV4WUnzhJ",
  "key39": "rb4t6g9MpeJ2aAt619stVTuqroqkYVnqTVzvWsp9Jep6uSRtv1GHm717jZL9kHyo9dgYndqsmSLiEesdGgwz78K",
  "key40": "VRvVTU6PppHiu3v7aR3F4rNZGM4CHmNiVdTxbTYYDcuW2NdQiiRvopzgnvKH6mC9VdwKknmFEQkPfEp7XUz8fUN",
  "key41": "3rCyRN94moLpgiAZjgTntrAcjkYY6a8shkLUZ67H8KXK3541QgyH42F1S6eutSPYSqj6AKoWoorm4UAAox8bjoPQ",
  "key42": "4EgMqvr63iKrqW5F8oz5AwvdDoEWDYeLEcETvsyPG8z4CzqPJvH66UsFQeomotXZxYxNFVPaYCiUHzXJftoSyy4M",
  "key43": "3Emrq8d9Gac9JiBuvErJaqf8qbh1yHaNK5iTfyWgnaJDio6zAeXWVzaKtZmuuj8sU1G5F6uRjunSrn4eAt8BUHpf",
  "key44": "5C3K3eYb6ikcPv2Nr4ac2XEur1qtebgmrGErgJRqsb93A7S7DXHFZvayDyUqHsJhEb9LZCqzofZD5DqrKgnNNjur",
  "key45": "3LgfyVQGRxpaEZWfavPurYeLpaR3ERM9gpUtjkwGzHgcMpViNufHrkPvJdkRGRmaR9ZXsr2aTW7VGMw3dwghkZkS"
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
