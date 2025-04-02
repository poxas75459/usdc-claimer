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
    "67c8maidNQgUmNecuEDhhwzQw2rjThjXu1tZQjNqeWet3fiUPnsXQPPSmykFDTgaWwJMTZp3tB6pSmZAe5L7v9fq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QJuaUASgQNQXBKxfcSXYU9LnoxKRZCN731ZWBod2BisfeX3XBxEukv177F73Hww8m1yPGeQQ2ZQboPB2VuYEDa5",
  "key1": "o6uxpTTaU8qUzQZkELUmS4bbfJeSTxPFiRwDaR6eDYoZaCo5qPbm3XjaXXHDmZpFnwyv9jLtjpfdVnkPkmiux4W",
  "key2": "2qhyddfWSq4MU9uH88YL8qEuURQkoRUP3s6s246KEnB95Mf9AxjuSkXkeRyrv29shTDb8LPfhUbA2i8aeAbNtc3Z",
  "key3": "2nusg57e9nZMbAqdFU4xxAXJaH5P8Vc68E1Vx2L2ymfhcstB5gksPsGQQUTzbHK7s9KW2Zced4zMLj25gZxa2ADP",
  "key4": "4HQZdeUhrWFFb8UTTBEnTpEpHaMLRfGTRB1XLU8JGWUP3sXSSGJBqoWRQRpQFG76mvMGEun72oxoX5MTo912AP26",
  "key5": "5V683j3zpc9buYpGccudzWxfTkxaGcvH3uBkzVrbbHRWwSVGJKkhrH8hmFHFv4QU49teYHBEsUmoXDir6zMu8Mv2",
  "key6": "2usRfF1Ja1QxmBtQ243UDU8PVm6zc8ebQzTdiBC3dtuRySwUHa7R5Rpxv7SEpV2V65vQcnRUnnCBteEyGPniKXzH",
  "key7": "5nY5exUoiH6qvD6RCWxVzRFLCNfnW3WcWW8aQhut9YiQbFnTKAwxZQTzfDMTgYKE73a3YpK7YNwRd2ixLaEMrADE",
  "key8": "5kZjqvnaBKtrW4FyuJibQ7qkCqudxe8zoWwnS7vSAwzCcSZPRweAp79BFwwpqDF8ZmEpvC5gSzTsXv3paXV7Su91",
  "key9": "rzSTUHqNPmDWqCzABLYEwoRVGkGphaudQEqAYnJqQEnR6jAEkawTpxE5rD9m7Fs4PpBdn94LdT2HPuRj7DTmqcD",
  "key10": "3VCYmEBS5PHwH4b55pL8Jebb4QqYRPtdi1pMrBmRTtUBWr8hD9Vsh91NdWRKr9iaTzeeYRGUmhmik3QqzPvPK1R1",
  "key11": "mMxx74UJQZCXgXKAiDxrPB2LBH4HbqbeBCVyC1Gvkppxm7ibxBt4fULG8Pfu2ogsb1wfpwT1MqCrRGWpvbpjTGg",
  "key12": "H1PdmGVRDzjGrz4g2kVz8THG2NYykPrUCHAP6ZWZNpinkNj4bEaWb7dMz9VySn2udtYQwBd3kedRLziJmb9QL6G",
  "key13": "3esTqjq7Ke8ua6ndsTp9pd29bDYNjhBvBvhfgnqykpzh73uZHKPuHFUkNrfnUqsSSwqpWWLurFR6LK2MPGuYE7y2",
  "key14": "58rc81tuby394LgbWe7DVNQ9FMWakNMxVYKe6QyVhBv8v7BC25wUDcqXsm1i3WSLRWLWvUrjs4BUDrmCmVBFcS62",
  "key15": "4CCcSzhXwXdDuuWMtXcMKXs3DNtFbX61tKNjPWfW9KxM6pPXUPES5hMEKCkEAjEm3hra6DZR4aixEa2xKWjds1vE",
  "key16": "2UVGEd8H4cboHAazoqjA51t2Khx6xyzwQPcbx7MUQsHdcvKudhriheirgC7Wy2eWfDgpLmS4xZcfE1gWxxSkgA9Q",
  "key17": "3TMzfwk1VT8Fy9TQTGRTNsVs4RKgFUBB14tj1gnnEFbRUeHKuZky8Q2fkFtrAsc14CToAi6q1gCBm4hX4cUvzY5G",
  "key18": "pGg7RXaoNUM75ffczK82QShVJG7iHWiJDmLJcKyjZpyrAx6JXTk3AsmdcC2iDVGCN4AiBwxAHdHCeTsBA1BhN3P",
  "key19": "3PbshoQhpmEzCLTXhz5nkFNyFgzhjUoMYWmiEttCgDEyAcccwrpM6QCMeqDs7qv9gbVF1nzv4Go2iDQkr1EM8Zf6",
  "key20": "4NAy2heYDE1APTWUVdoD57gZCA64PmaHNNqyJ6WWuUb2eidUVuuhcapAnqM4Y6qFw89GgGwHBV2kgftwxFij7nPS",
  "key21": "59LazmDzc2Z7u6vvWJqho1hmAkfpH2T3SriG9V6RHgkWD3H7grqRFCLE2B5eb4JE7uRSuqCV4Gs44dpmff7NWXQJ",
  "key22": "o3vtHVZGdszY3fuWVe6hwjFeUyiEVHFMTjJSgnFD1255Aa6YwViXpsHgpJitzh2HBZJUzBGZYf3kcf1b6pLnP1r",
  "key23": "5pccHHC3i8m752S1Z3QjsQq36nHqHcvWXd9SjwMQVsDSRw3vEFnc7qkmWyRdap7aZFDomk5gcbDKT66ETwX4tVzv",
  "key24": "2nU59mcXWPX5LH8YBDy5Uy6N7ETJMkDEsX6bQEYdtucGFr4ZCNviptMnYzRNMnZ7tX8HiTFQBbTT8TyTxynBxzQL",
  "key25": "3w8cvaYUYBhTgHi1xFRP19iuEFznsyaQwYHWMUB8hyBcJ71Rer1ncoU1KMoGfuXvZB3FJKNQKcv6679U9GnBua2D",
  "key26": "4KfhGveK5tE2vTbVbq8wSU6kXSQdeBPQRYxqEXhu4BEm5XU5aupq7Xgmg1Wns7fm5n2Xxwu9ZuAghNjEqMaZadmk",
  "key27": "4ZxTH9yWu26enqfBvi9AXeDYRXp8W9YZ1VByPq8ox6VS1SvinwuFecWni8weTcNr4mGziR4N4M57C4xebHFyxVB7",
  "key28": "3ZqmCbRWcWFWB2acGhjxF1z1q7yE83ibvQu5JEkRxB2p21DVNckx4uR6TNtHwogmpa3DqBh9hMLbjM5w7TEh4hgV"
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
