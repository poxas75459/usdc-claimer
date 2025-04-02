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
    "3e2q2pEM9wLKn86HnVBMYUUTTiZHbtF9QBazZp6hWmeKWCxm5gsvgBJW18UXWuRZ9duvNaL6jteuYz5fGkNifaGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4edGoa7MeiQjBDTovQRPkigfiNp8weFtHoPebdzuRJaXq1TmebfKQKS2mD3NcVmN4zKRj2J6LySmjD4eTTipxcBA",
  "key1": "3PdenCGx4bkjmcgUGfof32XArcLgkMLw4qY7oXnH2GXagHGefiwzzuoUT8HUusRErkw9mPhSfQPetgdZpP78VMBW",
  "key2": "XXzh6VqnpuHdCoVJjK5TZeHR9uUBiChcg9jQhg8ZzbaqZMDwN8jW4vYpj84Cej74XpBmkRgwpCAQJroxMpbUgaU",
  "key3": "4p2agnrbQMHcZMCrHG1RP9wXjFXq9rsjQxq4h9McmRpGHHkfg9M8CLULgQvEqPY48CPFcwLbqYCKLhANeBR1Z2Uz",
  "key4": "3698aUsXkmRkajFf7HrVjLKTphMHcK49Vx2bH2nxoKyvP1My3oBdLs2C98ky3qvXG4QfuhCe5tZjhLf7Lt4YqBK",
  "key5": "3Gq3P6Xrx18A5TWJXL3kBSk99WoEiwndq3agVtZQgzK9siD52CznxeMNFi8mkCNDsWJFCRaUtp5oaj1afALHQRvt",
  "key6": "2K66AmsQB6hdnQWzeJfYA2Yppz5qXE9tfBTjECsbTo1LL46eu5b6sG1AVkP1D35zYDmZ5mmoJAC5ai3ovzeuBf7o",
  "key7": "3zM5wBgBT3RRvS5HqEhtqtpy15gkWmq3FZt3MPd42u2UorC4u62uwtEv1MCtLceu2pNuQhhGcYiad9WB6NwPhh4H",
  "key8": "428ERBBNiukfEZACC59qET9z2DtcFWh6FzT8Qp6bL4BBNQcaj1s1NfDGwTH3if8nAq21JSSthynep48pLBwr8gwu",
  "key9": "8mBCktVYR8R5Ssid9KKAHgYbN8N6Zb63Uc7sDZrmrFFRnHPNzb72oKbJZTJdtbJTB8NM6NtaqbQgLS2D8cFnNx3",
  "key10": "5Ge3zAmBBpD37BKiUNrK7MoDrVQ4Jgvn8mwfXcLt1ZG55pbhjCoPLEQf342Ps7yMZkMxnx4q1r5QC4hXbE6gYLUF",
  "key11": "62D41MhLYvr7KEzyqBGb1SPVnBqZYZPJinDE4ztfT7pLBgBqwvF7fBins4BjG43U3JFWSToyfRqZDzhEKq8BqbQ5",
  "key12": "4TusnUG5LWqLMjuETZWh9uQy8HAqF4FURcEbxeAob7ecdDH4D5oZQZ2N81o9R5hD2BM88PCiPmRRwTJZxjSth8bG",
  "key13": "4iNoqKBGEcjZwpas4FXAZhitRC6Nkj2PvAWptgucM7DMZP1HD5yjsxmZ14tRWqRzqpoBJM3x8KDKcp3eUpSHo7Yh",
  "key14": "2UJifnpEDUJWo4upTAqLJUn6j91AqdWG3copF8DjvA36w4WkABrGEzrq6BqkmJ9o8VSoAPAgZqguCBhjBvY8vgi3",
  "key15": "5VrbuucqWioE2fV6uXeTrwxCRki4vyss2a81FiWjCyUjkJGWr5CePj6ZMdkqtAxkeK7XCVQ39UzywAVrU7wrkzia",
  "key16": "p7XY69kuNqMFifD7cSi7V2TudAVYGwAkxZ3E1MkWs8uJNUCm9T5QUqsxgQ6FNqiwfmDBXBQ5MJAoAwDfvCNCwBE",
  "key17": "5mN2uaaE2QTPJ1ugdPmLCvNPwKfNC2F8JeKskoVgotFpSRpKj2qGktVZV4v6q6PSEHy5Cfn2F8mNKXhijW9fZshC",
  "key18": "4BK39faQQyGfhiVTXmMrc9g8ZUV5iUd4V4LqzMiiG1hD2MYgu8PomHmPJrVxd2xnZHsRTefAHe3DjeUvFnDTBZuo",
  "key19": "3YxucHfhFYy46LxShmjeqLNi3SQm755wvBiN41q1RMQFu5AKkodVU2bvjfYVCgqXdFCZt51b4wYESjFUpnxUWqMu",
  "key20": "28Umj4geEBiDZi1MoB6Nk1UFLrnSoXRWyTp8sGYtgA4mh7wosiYoV73ULE5PGdoxJZvXUhqs5hHhAvUHyeZJjcUU",
  "key21": "4mtHQrfd7f5v9TUhAeJTYy6ZpeaUDV1xbpEQUbgCEHd4QGS1fLcAwmbHk2uztnQrtLfyuNmS3BGrUnkrYZogM2sK",
  "key22": "5icDgnd18q6Pcwf7kKTKj6PTt2ebk6evBECc7f3SwDBxQFMcavpRVcssmjCuCPPUDEQWz6tB8CLyQuVTMUdWxVxz",
  "key23": "4fE4uvrom54oiuvk4pHt7p3iTTipKcDsceUcKBE3G8hepL94QTDjYkLrDy22TvPG8cy5HJJLWeZdb5y37bEnrW2Z",
  "key24": "3CZ6nL7yAZsCkfaJ7xa5UJ777pb673xXJKKXFBfjHGKkbc84ZDDXaPsdBpozRFjpBRXTYSbD1KdSFCMStw2pBCvr",
  "key25": "3qo9aEMZAZSCDn5G7JJgiiRQrvLHAH7mPaBdLUrxXRLZAgEAJQrk7xnE4yTkSfAnh7dbmD7CW8jF6RadSFKybFit",
  "key26": "21KCxVMuQT4Jk43NrkUcVd91TUohRUwF23YkEubyjDeZJtE4W8ZbsigEFM8WZkrR7aw1j55hNjnM3sdkeaFmntMb",
  "key27": "4vSdmbzpaWNGmmcqTJiQ2AAMNJY8MU7Sa6kGVZghH7KSvHwnwC3vP4x5QS7Uscbk2t9TQVKG4mRDceti4UDtDnEH",
  "key28": "5s3vGht3QpAMhhghwgUWqDMXSxYMdH4hHMYWyJfPqGdaT1EjQFk7Bs1ifcdFd8exmkdRRoJTtUBjuZfepzHK7wiS",
  "key29": "2SifNw8psas9w2EEjRxVdRVCSuKNF5dzrVNF3k4yoepd8aUNp7aHnzwWLykeBqVvFDZ4j9aD8yzkZVvkkciNX9ae",
  "key30": "4WQrdP8rVLUJptzZw44qcgGdbDMNq2TTidFAMs2xhNuqYAefCxBnekWVmdjdby8z6KHWNQDKfAePc2RCjeoidBge",
  "key31": "27Re4yYrVGF7ygkqd4FRWJR9r7QUUvnwWNd6i2gcEAeVkznsgDCEV5kicCiE5qrrDwrNxz6SHBUuhazYpVd8snR1",
  "key32": "44ho3skRtho1bEQynJSAiSDFCxVt8vnz46znj6PYkNEc835FpJCeuz7BDPRPBB49BD6MfgZ3tnmWmrJFZHECHis2",
  "key33": "Unq5T3hmFxnH2koMCYZ5Krq44ijp75Jn35vQMQbjNe6UaFdipFRpLfdHq4fjc1gbdETewVqTXnxGXuvk619XgFX",
  "key34": "3K3wjYUHbrPj4S6xd7NUwUPTsgKFKkRFHDcHsEeV9TypPSPk2bxSP4YiNn9zTWZ3ycxZkEE2Y9id7iWBPRxZGujr",
  "key35": "2Z1qH9S6xRL27A1QcsBoMKsCxaCppa88cyeow4BJpWYj9gGwEYBATmdDU8BwpM9N4E6BtWxvP2fnBPYUQCNgoGxu",
  "key36": "5tuyUgbkTm8EGfuWBXjxsnkhuMmd8iw1cCK8XqNLFS1YYXaATqpkDuSVL2gycPtESM2QmhWhNFcV5DCXh9kZy932"
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
