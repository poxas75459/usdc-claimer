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
    "27oH5r7Kam31opPqTh4QzmqpX1hKuhLhxxC1hjG9VDCiuPzv72yPPt57Rwh1CPc1zf7oLWCcggFpgP9AMn8atvhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jEiGSNAHp5d1vjqhaqi64yrNmRotTJiEbdnpVNccprZa6BHoMRbLLWoPGjwce1dKaFZfC6wLhtGfSd2KuiCJeVy",
  "key1": "gcsDzxfi3HA8Eq3jmCPNimMJeUn82LYJdu8henywrt1ERCgaTWLEJTewV1Q5fWvhEnHgVrk5pH2E9enTt6RkAJd",
  "key2": "24ku9WEiGBpiDLorggGLYnPybjUUBsrntSDKGJVh7aB2KiX8skVekNTCrxvWWzBDNcMBHEx1bKjDZKDgx3uDydBS",
  "key3": "GuLfrHPS2UBYomfu28NFikJkRhvPJ4ZMuF1SFN4RxU9PZ6hjXXGeVHWiDxnZs7zMFaesFGS8TB3QxZ45DHjEAzV",
  "key4": "rSFgNyVfRUtEzkSavsTBZcFukGj1DVE7w7AHPFRppNnUaXGBhjbw3CCr5X6KG5VT21TTsJVUXrwNUCQMR7Bhhdi",
  "key5": "3ziwdnqPAZ3kdJyKEUWQUtZ3oAy8nvMczVcssXsnCFLNUc8wJN4eKxVWuPdb3mYx4siA1m68hGvf4TY36geUqPuU",
  "key6": "2NEFVZ9VsgLuViFqdHWBEWoCUZ3SNPqqCcov2tmwzhDR1DgMcvSDWr6iUqndydpNeab5WcwM2vbLMyxn335BBpVo",
  "key7": "4KfpPZa9RugcQRQiEkW7g58qE35N8eEQhzMsKzRUsjgsUBDZnpUZrYdLxeaZC9kxkK99dnnjBsapBxgozRtTryar",
  "key8": "21d4YDE8sRj7XybKUXjyFCxf5XXTxmtvWsEwetJmMK84VxodwLk4eD2hMXXWJUBRnBbepudYb3oyJSNgp7VndM2V",
  "key9": "42QfPPtUDX9vSNSsa8QzZF1M8XAVS1qoWkBzHgzAfCK7pWjnLpwXWxinvBYQ3NBWyrLqh84bRrQoq3zsaBvkWf9M",
  "key10": "3ytfkwBmZUz6e6izJF6kje3AJxfcoAXuxVAvrBLzN6qVTAiJvGEWreTAEt7qUuJrmzBHxzaLnoE9WL4M9NNq2nVF",
  "key11": "8kCNgfX1aNmZ78GfynoQJaVTS3LGspERajgMyZ116nkP1VVNE3sTeD9YxVx83Yr1ksT1Gk1hTXvGTQMffeVZNrJ",
  "key12": "3uVvyS77Cy2adsjBrG8wTkmgv6ZwPLZ89FXnYUCsjjY71odRd79XgT3v9M6jbWdjTN4cS47hw842ZKefnigr57wN",
  "key13": "eAdHZjbJUUWp3jeQMRfUpQiGh3jG4z3yFUR5R93YLoYLbCPmmquSB71RGvEw64A6NUkg3no5NLFpYUM5Ez55qQv",
  "key14": "5NUgQVQ5yHdH6L6ArzQ6Ub1uJFzPeuYBrKvz9EsZnmrSSth99As4Z3hUN97usqrWaqgFK98h78wKS72ezdFrVBwe",
  "key15": "2crZJwVeck83BkFci14EEt3o6JYgfta44moFTr6huSjg2USo5ixtNRBKgw9k5rQPvJigphSowovFGXfNs8kZGejx",
  "key16": "5KnBtC65NDJcZsv2hM4yCQZnF2HzDQVVHp6zSEB7r9NF7CoXkgerTDKH4pUN5wDDYjUp2WuxGieDVPDKuP5ZMEBd",
  "key17": "2CjwLLbUE6moeAe7DTTmEoNjtgXGx52trJwZTeskpj6H6cPVxTAuYYoAgnirADNigQPB6uf8pvHa3n2KygarBAyZ",
  "key18": "5ZerBjqkjx7NuekE7PHHhezCnMjnFVpGBofRY9Kh9qJ5g45piMQqs1nG2mwvjxqLPQKZXP7wgKqfjY6jZpA2hbYA",
  "key19": "q37enrrBiGh5EYrstU6Doe4hWgqRq5PUmxX7mqGQtQZcH7TfRD2TeESt7bNXVGS78yQWohWQjUgaypBGFzYHjrU",
  "key20": "4ywrFGt5bGJuYvaqYNYTFBsALGhNEKGUsLNYX7TJHJ9PPwgU6krhoPXMCKzeW6pq6v9NLSTExEqurTU4eJfQQ9vJ",
  "key21": "5u84Hyr8T8NQn2owfnS5EwcVHWAq2p9cJCduT7CYxnY1tEp8dq25VTi6fiPBHpA7QzyHVegUnRDtiU3MSQnos5eF",
  "key22": "3KDNubQ5XkkBkiTSKLCpoGk1CMXLN1YLLWYzvny2T53tw3Bv1zo4aXGFYcxoJpS436rMx2WUCD9jtBb3AGRPe62N",
  "key23": "ZJtNMVLfVxQXcLXu5xsTWvFFZNitQrq6RkfbM8pefCpeHxC1mPQst7brR4tdwv4axqTdfRf4rzx1r3R44Xpe3iS",
  "key24": "3MnuA3sgWJyXVLqvERFwxfmLAKM8X9NTpkVTyXRwQoQv7eB2JaHqJpH23H7LtkPPrGrhjTpLEWH4mFqz1gPdUfCH"
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
