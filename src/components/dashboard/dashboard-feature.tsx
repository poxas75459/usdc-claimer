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
    "2kJqVfJb4PPUvxjYPZ6wKcmZqmWmat1Zop3Rtkia1j4yPbCJNp9AS6fWcjXPfAyBikMxGmZ4JRMTFyQX8fPVbvMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4giuPJnCbpgSAB8zKM9P7UHBgWFo462F7vNLrbhk8MuFVTkfRNskts3vHjAvTxXfzY21w5P7spktjthNUUPGsBUm",
  "key1": "pyus5cWgycePeeWwL2riAtomFFHBKKVi84Z14paduKYyoKEhWVWmVDh2E8FZdeWjvjxyCxDsASSDsGJY3ccabZr",
  "key2": "3KgwvEtrZYVpUAqpWwX1WyPnHSvuxWJZ13QpxUUdntNYLFX8pdG7PSLRMhD5U7JMBRBwqiJpKjRhpgqwy1w2Xu6p",
  "key3": "4XdpmV1hCuXCzVi8qYrivKCANCEmr4weXX7SAGsKd2BFdE9ZUbahVbz5c2cPAC9tHGYxawTgCZUn1mdiYZHCwFyx",
  "key4": "3i2JgZXif62D3MqJzhPX5koLHZmp6Qm3egvKfGnhK5NNnoRGtuSy4c5rTjJFMxJcQr2GP9VuqzawQimkD8vPqDex",
  "key5": "4nJJ5qiL63CudTZsFzrhE7N7Ks748oHFcSYybWad5KBdpTnK1q8JckqgUQamRzFfxpKXVUszmsoEJ9KAGPeTzX5C",
  "key6": "2VfYntupBwv23xfDx5ZRnoy9QPyjH7ovLkXxh4vBteGHWi6bQ9Xa3KzmvDvRDxntDzhQ7Sx8DLd749UZHsmLjs9S",
  "key7": "4PiHsz25YQP3TmgU11XUmu61gi3Xhpo7ca6ndW5pQp1EJbYaCFx2XG3Nuv4xJfoKCh8hrmi6pGVNaqehxVV3rf54",
  "key8": "ZqN9e6STyuP7WWhfMiu2aKnVP8cEjhpwHtTEja1QikTVhQevyK3wUyDvko4FwP5CbxaeSmgvY9erEWnR14BREWH",
  "key9": "2PRUh4Rmcyn7X4cCeYuEbBuh791nS5krGmzLpZPwe7gLNcyQBMKGk2pQcmBim1JG8J7zmy5nNWCnLH3TyV7feeyk",
  "key10": "4wywcd4HXAsfb5A7AaXD3zFh5HUdXi84bnYGrjscZXDzqdTLwAboaPcKcrieHCw8gGnrLwg9zbTbrYX8L4LyYrJf",
  "key11": "V6VigQgY6dWk2de4xARvJR16vdhmouPSyeAm7JsG1jrFj3ifmXLhgXfu14Pzi3sH96Wn8BkPg6EgVqTNwYBJXbU",
  "key12": "5TiMeFSv3Nt62aLsAWmtq24TDLetkCzvfuQ3d813qFoBBjtYXGrYzDzJB9EwSCFh4DJjyFeTgFtdSrFm7xZqvkna",
  "key13": "5FV1pLofj8TSpJGbMGkyk6V4p97EvyXegWtvJegjBWtPJEo6ud1rWgCzzLUJPgcktKWZgmQxp4fsdAB8yvj4Qcym",
  "key14": "3Zpxq1bde6NkWVuBKxyjcaw3DiaMtvysVRaMULhn5Q3qcPpVBZ2YH17MbwD8Fu8nPQSDkxE8R6mpm4fJUMFKnD8k",
  "key15": "WvDjempPZxd259T4Sb81UJRx4b4HD671dtMtZ5J1J98qqtHWPb9iYu1jyT1mHbVU1GyVp2RBoUidoW5aTzYSLxr",
  "key16": "2SRKNHc1xPWc9V1fCcw9WBEMci4mgz3EGhPFdZKiqBpJZd2BhK6Td2dEBJmREZUmrFdGmTnqt13zN4eF3GgR85EY",
  "key17": "3nAnsojcNZLgnsnXvzvmSobSgkQ6LRiavou4zWvrNts718wwjSdK3mx5pYD8bEGN9NzobQA8n271ZgntZsapBkXs",
  "key18": "4EfGMr5vrntoT7FZ22kiJnrY4xkKcDLUChSap48o5GUyKVLVym98c4mjRrAvd1Vp9fMYp8BajihfmVnorTGWstqP",
  "key19": "2nwz4hRXCiscQnFKap43KLvVbE3Pv62bg4TzFyAf8XZHQaMTLaCJfkt3YWZgpfgk9dJY1ku2VZQRUz9wNvtnozUF",
  "key20": "5WSs21Hz5X6GVucs5JiFFTfMBPtNMauQzkeo1eBgWh3on2fmvE4u5sLvWa4VrfQQoArPTKAbxG95igBbhWzG5htz",
  "key21": "5ELrxUmSNWrnNFhtx368eixFh3zTo2CKd1tAFDyhTJuXBbwVhtH5N7FPdrAsky8hdqErFQk3trwGUPVpLRvmMSgJ",
  "key22": "XD288BVrHPyQg9w41abKWKAYkMtf8vARxNanY8SbmA7wSZN4sTkDn8fkdiieNRbkk5geSoqpF81M9pb9WeFgTsn",
  "key23": "3jNGjGw1acMN1R2UgiBkauT2LFz1DGMa71bTHtV1zoWu3yui3tbvcjvyPqMK3SwtgDzKKR3vAVXLFyRAPE7ArtCG",
  "key24": "3yvWiBELWyGnhUeseBxr8gUWYQ5tJmC4Yg8RxsZFLeqSJxiqLe59fwqkMptL5USAHeQNdB8jtLRkZhdAfKq6zQWs",
  "key25": "4Nv7qoUDfB6zRCFY4SNXT91J9HnLs9z5oPQq5ePbbbwjoSiF1pNqrrkEhn8aurKhVrDgBhY5jbsHUudjmd2jc2Hm",
  "key26": "dZ2DHNPPkCmC5XV3wGWhju5yaDT7ABUCwMSs8MxAyfnLZs1SkRxVya9zZHJ2PZ4tE5TBsVQa5ax5Ba7nXw3QtpD",
  "key27": "5cu6viVnk5K4N9hZhq5ZvVdxsb46emHGoufvQWgbVLhsmszG5QRvjgy2rA1gFkoBTZTQg4rb3X9Td7HnRMWuvxU9",
  "key28": "4KccqbN6jLCfNMXSyHP2tLrj2bv2YJouNH6EByTESXiwU2rdQuQV8P6hXXwckamLEHSeWxKdztYY4fbXdvB623Ri"
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
