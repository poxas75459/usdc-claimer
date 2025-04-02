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
    "3yKbkHc939BPz22dfJ1z6YbarPHqQGNbcykzoi5AdvR1aAz28jaNzSTEHa35pC1tJbzaLyFVjx9qmzmqYpwCCBVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PzXnkcuFaDKVQMsvGtHBWivjzhbkgo5wyZVc823ne7P1ao1mZdxgoeMA1BvvuVtV22fuPiQa9BcoAKXDHSLm4hN",
  "key1": "33nra33sbkZdyU1qSyBev7Bq3icmoQY7RREcgHLeaR5BScbHVzScB37LPHqC3rftj3dwyNkUub1qtqUFivVCHZRh",
  "key2": "feLmf76xigzS381gBS3uQp1JyqBsJVqTkDJRfNJYhsZuDmnMh6vVpR4oFrS6nAbUMwSHNFpC81BHaaXVj4THb4L",
  "key3": "5jQLcJtphz42zFVUjawFyrxDxgTP5YtSKvsuj4dqz9RmC5U9FyT6qMJRBoNi1bMVrDeAEcNLmm7bXHaemn7PHVhP",
  "key4": "2cJZNvbpcRqNsGbNDrVhwRTnXekSJVEQdfdcooySz5KAjAsNRkm9MmjfBT9nvN4GWHV1Zetch1btsvB6vq178Kom",
  "key5": "3RifNVofGeWR9ja6FFVE9Ekrsg4KhHXfm8vjJjsmuyp6jWMpxFpENbS4rPBJ7bv6dh9FgiVBPjR5uyNN4cwks46K",
  "key6": "3qcMX3q64WsrJQUPSmECXbWixG72VvgoKxuZbDe2acqYxqX6HbvyzwNovCUrCFtWS9LVwSFu2DtLCa11NurjBpBZ",
  "key7": "4gib7vN53fnsenA7VTDtaMZPDVH4huphynmw9ppE85U4aMmgrJdh4M6AiicRn5RxWNB8MvGR8vyQ6uC39n1paVg6",
  "key8": "NpcwE2QRtLx5eCkkehcBBDXoJXCLkRAYZ4NxWds5kKmuRBxUMBGgsSPXeW2RESmuMFK3hRu4TWVGWQhq6LqkRcx",
  "key9": "ntyj6USf2EV9s4nVStqGCkoa3jcracpEBTCMFyePJy21aZBaGW5wTeYG87YKDX9Q1fMYhuyfLLYN82hQthUDjuH",
  "key10": "4mGatNMMPqN61MxQKSxgmgqf6mnkNaNRmr7G4zJJCSs8MiE8ca4ucpsvyfGcru1aEi4N4fuXM2HYxoR8gFQHcZkj",
  "key11": "4SpYtVXiwVedL45XcuzWADdL14kVzoqmJ1dEqbCYCPb7LC9o3eBd6vRqCHW1VxxuRZARMCyswng5xAz6XdAxaZyb",
  "key12": "3bC7aVmJfiSC2CFwKScHtAuBtE271bPzAKP3AVKdMFSot6XqsEMCkBdTcJXp4f43FU3cdMshTD1jiShK2cpEPxM5",
  "key13": "4QCY8GRVZeugqfdHAgTMvNqyD8EGPVq6YJncskETiReUn5xK5Fus88X87bvGGpUTHg3HdaxR9D4pPjzZ6CfUHAKG",
  "key14": "3BUWNHxD2zxLvQZjK8i1oZHjBJ2geLBBY5BsN81F3dUXNjYTc7TMPXJvkhZZeUUfYoae4L573LJ76YfF4JhucHTb",
  "key15": "5F7BoCtBskwvJhXuEzS3uk6vKUpD9Jkyw46rEUUCghQYTJKREJiMopn65TkKGnsm6XV9Kp6Gdva5D8iuvKBeqvUX",
  "key16": "3mRWZmdR5mtXSU8Zq5cfzeSAGLDAXJphH34ReViwEd7HZDyDawnRsECfPenfpLsXrXJ75jCzbqkthoBqV1vkkUeN",
  "key17": "b8oAL9q4jSo6J7Qc6MGGE69MydatnDafeaoPD2oPzMVeS2XFKooTzoaUcLHGZ61KKtEzvjc3BkMhU7pparbEDHr",
  "key18": "4PurafSMBx6UoZpsbmNhbNMBH7LEBTpWgE881PDktF3CBtf4PBZR8kpsNJd2QuwBuLqDK4udCJpkVZGMbwbfVyZF",
  "key19": "knPZHd4sdHJM7f4HpQVEU1Ph3d33FhuAXm4UaJBXR9pqMKMkBNBT5gSnHXGMRGHCLicHK7hCqvdjX5MuHyFGc5V",
  "key20": "5WhVjDFgFyfWrioobn4NiqpabnBECLEx4yccTbP79bzFHtQPCaW633Q1FfLdb7atbB1SFbqEbToEz9wFhgsBfMPU",
  "key21": "53H9CtzrWiRctyazRNBXY7cGpQsL49t2tFPZihbHUhzJDAcF9ch1CZKbPZa41Uu4zEw7WoweebziZ3bV2jypxb9y",
  "key22": "2TRC5Wvd39DUUQwG3ihocoN9nAWaAH9MH1S1RZQ7SHShm51Y2zrSDBCx9V94BcLtD82cYVkTGaY9LC3tc9VHkJQs",
  "key23": "41tkmn9Ys1FLYBosxskuYdX2zDDbsfuz1FoH9ggM8DjZbMEeSd9YQxZyfc381ZR7rqdxVZ74GJo5MzytMbYgQwBZ",
  "key24": "3Y5k7wn8R6vJtx46cbc3vWTbT45RgjwV3NKrxpPUNBYZqQ3xc2XWaC6L6yHSLVasFL63dUN5i3iipC4aJUFyx3xt",
  "key25": "249YMYUXpGEc7G5oacDbSacoCFh3bndQzxF9uqSZWA1tkbFUdvrMy9ytTxRisFX3zgu28dW772Zy2vuYvVqhAyCo",
  "key26": "4gaJSojW1SABrNQajwhQeGLg4Ta5hbWJ64hJs28Byxqg973XSvFKwsWcnHi3PnMqcEThVDhaan8EsYFRrVcUi1ja"
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
