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
    "2KJoMgfNhuHs1V4JPUk3aDxvSNZpdTAGVdoeH1xT6SaK12nExmfcHgTQ3rJPbDAMjB6eVooAdxtx6Jv49f9uPaz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nMnTWK7xjdu2wYqxPjChcS5jh2AxrXGrV1stCXDmQQNDBhPfSsSHZRG2yxMqw81BsjnMNxhYgGNQDA3wpfCiYmk",
  "key1": "57X1eNQT3G8gTp1jn3fG8KzHe5mUowuZZSZKRw5ZJUdDuH9gwBb2CXw1fxoYzQ9XDYNdqkeRCyqJdpEYQUMeMAbP",
  "key2": "334EXxsdUdNc4Cv5f8QvLtP7qYoiK4Tf5nuVjDUfLQy7GRktYeTMjQfHyR7JYfPHoWo6PTyNjGx29ZTgcsvWTi9x",
  "key3": "3UUk2gtPtsRnDpz1FGBYbre4xrvTniCsuDyDz63x47vakWrGaUMgnGEsFBYDhZ6jLJBnj3tZfBnTRshv7XVMtrYi",
  "key4": "4CMtKENcRV7aKNJk9b6a75zLseQEjExsBqFTDcRjwyzUc1KqeLpAnBoVh9NsNLhBi2vQzVHN9imjRss8MEdx1Pjf",
  "key5": "d98PqQUJqNq1VGP9uwfovAq2Jw79jrPZ3ozNuQoq38BLwTYMY1MQGXh7oFpKzbkGHz5rph6W5975m24ubmHxdS7",
  "key6": "2vEqn272oCTRTBbAfo2MPSWf15oeAPYAEuk2udZkbFbCEjv7EvZCJ4fNToz6C7DhtHdyFK5YEbQEDzEPBE6QRKov",
  "key7": "24ooY59Nq4AFYoMsqxExMPFoAebAzKYkwNorDyq1FTEfaWxVFBN5aZBuU7zNNZWkSbdLcvj671fHJ1ji21UppmJ7",
  "key8": "2sgMkY64ba4JgJJtP7k3q1rFaoPBXRQDKeBFyefSZVAa3YVU3xGgktdkg2YAbWMep77DNeMTpF3zV5g8unFpfHNh",
  "key9": "613gvsvdbD6USTzb6HAhmMDh3ZqWnVw9HEevZkd6UVoWjCTufuh6Gxcmtd1FLirczAT65uC8sMUHHcQhK7cMX9Vp",
  "key10": "661aCu4JXoSMXr35MXdHiEuNEUocfyt7rrxtjbF9tdy5oAFDP7MbfnaYQuz829zYdoEDA1Ns8R9KxMLSx27yP3Nm",
  "key11": "Eokg47W3uFpdEtkHAjgR5GCifRsuudTvBMdH6hwHduY3iargNeJVE5GdTSoecdYAA2wRDG4ycbsuQdgK85ziApE",
  "key12": "2qdWtCcAckw74WhF7KYATh8A7Q3tLBS5yjs1XcdgErngPeinWHejKvtARWVDuELZxNwM9YJdjQdFnoaVjyq9SLvw",
  "key13": "428Wv5zyktaQ45zpbj5fBv4yMtfCNW3pNgChABVRwPfXN2ZS6qTmQGfSdKnGHFcPm2wULCRgS6MZ2yLKqShvgRAD",
  "key14": "5vRc8q3gVcSBneyXVnYLKBTtkx2ZyaALheK7H8YZzvJXc2c2KnxmwzLbUFnXgFbutkt2A56BgoLX98B6voT3WEMc",
  "key15": "5cvbAj1vrxSeeDr7j7bYPUTZXr95YEvbVJbUwsnAZzS4gE1qQsF4Effe6X1g2hSo9yqLL3mGwuTXp6KVQzVdssy9",
  "key16": "5Pbg8eNaqHYminjhZ9E2Z4HAHRqDkR8hSSGRwutBVKFKHHP2QSdEgzcRM4uMi6iWLdNvB2L2YXqPrnwyeCL3xG98",
  "key17": "3Kiac6Zh4qQAQRDBKhGDbimH2F71BWh3fXDGZDFSxsoYz3VVytkhyGUVBqdm9g9MoJ4fFknitAyL1eH8qUAndaiQ",
  "key18": "458AVPiyBDMZkmaTUcw1JV6iQuLUbfUeKNaZ6QiNGruPpeDPifwQbUiwtyRrGmQyj7xMdRjTRG3U15aQV38BU4Mc",
  "key19": "2gs26MgG6ijAZoGXBv6Gu74o4hwdREWHJgiLGMuFqEbb2yWVgxfehAHDzjWrPmJvTwQx9CR9U3jaA89BCDXbSjs4",
  "key20": "5BkU4695LYSuf7J3cU2cmcN8iupk8FdCxRaJF8dBfFqxdLQr7JnNHoTEAn73XqRDBcix4cjXREZbDiuZ2SmC1pya",
  "key21": "5cWX1FfcYfUgBMgRNTSF3jJCaU5yyf892Sykb5QDYEY2nXtkH5fYRuFdTANnXtEJVtkhTeABNuHtz4TeytTPT3cd",
  "key22": "pfYSJrBEpnPe8omAiiWdPiUYLUkXb3zQsX8TaZoj9PJVesZayT1mERgFx4VtPkwJwVj8kanudrJnoAaAjRoPXP7",
  "key23": "cXwNoQz1973GHENRbfT1qYKpgTiH1PMnPDgke2CcPBVtPtUvN4zkC4kHsQEmKfGQvynizZd6WJpM6Qi8PLdpiPw",
  "key24": "2P9nGnq35wJXv5b4S1PE8bbACXwTaGByrUAWZjD7gXse9NjsdL88ZvpXhhEcvqrHqt9McvyWf9W2PoTBV5ra7LRX"
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
