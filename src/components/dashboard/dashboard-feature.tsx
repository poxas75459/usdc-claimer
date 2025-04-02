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
    "4sZvL3xURtTryFkXnRrU7nyN4Y7RJZ5A5oGJPVVP2pnyd23qHb8iGd4VPAecAjU8QxVRAVNL9mDGTMDqNNwhY57J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zDLSMYe87f3VnD5VEsJiAi5jtXCunTkEJpukqtJ7zrmLrqcv4qQBKo2UUmhzVtJ89BvQ4Bg6zqYqnzT3c5YM3Ri",
  "key1": "3DmeSNwVW6Rqgb7pv2AiiMyfNhkcZXXSTq8vM5NibyriZxAoLyZKpiGwfionY6knmAp8o6HsXKzziBpR2EEY3GcQ",
  "key2": "4PBExyZhE9fJsuMPrziEwcEeP541Lhg1A3PxKkPe8xRdfN8iFVqKXK4yj93YLqbBRxDXW5mnx7gjLhdg6qDKh7Rw",
  "key3": "jzAHzecJ3gzG9eoxAt6dseAciXwFpP1PFJUqBQHpfVD3SnY8MX7zR9Bw8B4eaFGAzC9QAgbQDZbTftJHgaAEFCr",
  "key4": "5mcHWZuejRDJdt6ykez9MXKnshes26ABEaxvCJjqrgaeRWLhfpu7yu6D98TvQ8CT9yHK3h7gtZMqBZpXtqdxm6gc",
  "key5": "4Svq1DkUq2VGgG3HWKkYJUVMbcNE3ZJJwmVBHLxC9S6KbmRyD88CGeHjNbUdCCVC91wnLuzreWgZwBHtZ1uKfT4H",
  "key6": "2J5Jigyd8SkrAjFvDkjzySY5ZPThxFnu6UMS27QumYEm2Jv7PYb3EcjijxTycwUbbe8tweQPFatjtkvxhndKYVrd",
  "key7": "3tYSDpBr9rYrroo8Esqqh2c56N5Gm4zhMhWzoVshRAqdRHM718afGaLsAuaxi9fwKYmeh6xSuUoKVvLD4hQ3LJzA",
  "key8": "66EaSGaRQ8UVNcf5PsAecLthmATC3WWKk7zZ8NjvqHuVhYeicpdZxihgwiEGw9F5HhzQE2BLCM6JckyGDVAKvYZx",
  "key9": "2ojkfXFWuafVDyQRMX8KFbJaupgZD1a7bCsx3WczWLPJeRNWeNspNHwqv3ncQGD1s4mE1czB35MjtfvJjm9Vm8CQ",
  "key10": "2FggV7RqxnJeekzUEtQ3KKQ7yfmM9Te6mRCB5z58Rrfyx1wA6eHMeRFvxmp5MXrhLHx2BpJtTaYvKZeDycNNhMoT",
  "key11": "5FnRHmpcZkeLJcnmAot3xTToVpX2JY6BtHF2vVc5avh6Sk1Uow5D4vuASFa5sMjr1AREYhkJSqJEaotYp7xrh2j3",
  "key12": "4tMcTcQUZiPT1F4JqbLC4P2B3Tgq89hzVTNuU2vHF5h4uVPRezFyD4hdwNYJ8YACA4Smx9xVg42G9qwZLm3EH236",
  "key13": "4jLPtYmbgGyCfs1tLriJtKK84Ga9NiA9j4h6tkMEwZzNCsnTcSQ8fvNR3ThWrdFHEaXnAseXk3pWRViAyGHB2eoy",
  "key14": "4SeXNdPa6vpp3NAmUxkyhB4oDVvnAj5Lr5veK476uH4bUcZjkKKQCZxLcdeuVtoFyhWmpoDUQ4NNdoUtKLo3EQ4Q",
  "key15": "4gthLm45bDtZ6uCqzvsbUzysAqaQy5ft2oqoUeDC59VWeUe97nsowTskpiJrPMQCGsV7wwN3GJ8nCQS1DXuxDVpK",
  "key16": "Ltkwp6fmv6jfAie3rViEwojvaf2Uk9otG4aoCJn9K7Yk2tigqBpyqMCD2BwT29ZByG4yjwHvt8Zywjeg3KgQumU",
  "key17": "3KbJ9pY2wnkvhKSTpMde1sxegZCGzwzmvaUfbpnq7TnEM5hvQERThFF3WAHXTYZyyeYEyDDLXgYzbDx7t1i9AA6A",
  "key18": "4RSGjbNUXNnZBmHw7XX73LLSBQuabJjN5VPqKkFgMy2HjitgHY2zJthphPkpZiUJeRYBuGo87zaJ8zaSRXse5hew",
  "key19": "2GaHt3C3jJ1DtexpocP9xeQJMKm7LPGZ1aK8CAsJgR2Y4mdFaFEv8ZtYu6FQDmBrbd3T7f8r4q5A9u5ttzFg84jy",
  "key20": "4wAjboNB8cTsX6TNWw1tn7XQrwvkimBtXtnLu9iDizadvhcrHGxDFypPCSwNYLcBkKEcG6wnEhcvFyvJVJtQAtmR",
  "key21": "2vabvQ971dEYLuVHjWC4SM1HPw6STWbWzJFMmvscySZPu1cDxRits2ZN9Hs4GSfQSfgSA8QgWQTbCdrKUgLDye32",
  "key22": "5SePhKgNsVbLFtLHFeRdDdemxcZ6KjjgXGEU4ue6mTaHu7jaESg4ZmcTMmBvqKCYvoxjqzKprcZi4bL5xWPEedCU",
  "key23": "4fhjRPDFJZtVa11CW6NsF8mdhCkTixmGJW2WFfbEGnZNMRmRg7pevB1dejoJVRG2hgbUZjDPdf3sBnztheSUnxz4",
  "key24": "eXWuMeJeqouxjAoj4v8Zqxpxbud9PMkkjuQTdBFvAqmEYpoNNXL3wrEvy1Bc6QkTFVamZVwBdpA4FazNLBQuYvr",
  "key25": "2WBVUVQteWVZn52KWzG8YMaoe2LNB3229MWfMjHMrRxe3G9cpoj1YiHpesrFhG2PNghEHiDvQVSt8tAfPf9cQQkw",
  "key26": "2tn82j1571s2k6dzK7EMJ383nLNsr3fLxuiqWWvpFUgPTW6xzZR3KhwENfyn366QxgHCywZuTa3egYJU6kG9Ayyw",
  "key27": "2xJg8dU4o7K3ST3ZqALg45QaZQ7BSAhYtMttXzZpgWTRfxuWrtYWoGj9c6rnrXXcrSDjMmpbGZNmij2Vn8Ev1JBo",
  "key28": "3tpdW1iEUwSpcqmtNVT3qwJD2GArZH6pFv8T3pxHZbuGNNCRU2GWtnNg6yUvkJuprZNBWJ3qWaCQpsoGgxn3Kmk9",
  "key29": "31JB8EeeS2BLTJUnc8QDAm4s4EwoymVXfHBU8Qq2pifxgQHyJyGKsR4kg6Q4yu2ema28FMxPQV6JxqgvvddqUWmB",
  "key30": "5FJoyYvDrZxnySDeNBoMA9xf1mqwszr5ffm4GU6H7L6h6jqXXhg9kJ8TLJah53zUBDuh1yM2af8AvhGhXFh9DtmZ",
  "key31": "3k9243haVskE9dEd2LmgKxoFFqtxFzZAxcgft976TCf5BEnD5H4JAGyZ7XrCbD3StQ2H1BXc1ctzkgTTUDqBRSs6",
  "key32": "3tc89sdLwLnqeK8nRcX5gUuUZw31u8Qpwgp1vMu5DRNn3nyYT9qqMVNs1hNUq5ky661eA3yAe4hBD8efs8NFV4Yd",
  "key33": "2JMF7ZRLvmpvcxZ8HF3mMGaMCQUhvoxio7F7ta59XdBgna3bWDDwJacLrPp8agQEMYxhkc5qu9EFnMuV6K7y7RuY"
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
