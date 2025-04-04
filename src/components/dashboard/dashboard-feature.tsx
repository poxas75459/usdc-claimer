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
    "4bFTioBRU5iuzFA9i5yLsQno6wgBCYUQkXR1BM5EGZMLy5P4qrNS9rFYXpPGcxoBrPpLoZdyb47dY98TSigqFZ4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1PnyVQwUiQXYbwHRZitCU18373mMPeAvbf2NwryDPwsSHksjuqAC9hXTk2pw2wCyS14UfbEoCKtukxUes18xwXs",
  "key1": "5j7BFTw33RPoqhV9SjiFxtRE9WoTc6w1J5hxsdUKy9mkUB2YCzqLg6RmMuY7meXLCMns6oWnum3uNNsfkDGbfToR",
  "key2": "ErtCBUvMFkQjDXNsobujbL1bDZj9bhFf25HW8KKet4kxyUAP3BLWFXwMXweNdKZt2FAH8M8vzwTZV45gmiabCxM",
  "key3": "5vH23ew6cUN3pxC57NTw1kKHaAgaYsnQkMFhBn1Pj7qzZzGufhsD7ix5h7ZHvr3PK6Krp4pjUuGReaPTY2Y7R3i4",
  "key4": "4mNEhTBZ8pn1QjCurDZEHfnA43UJpQvabKr6cDfXBajRAfZCoT7t9fLTJ22FjX4uEzVF6i7YtmHTfPagyerCrbjj",
  "key5": "5KWZD8CMgrfHA8dMGb54Mx4qktRHSiy7JcHFiubisGgfRnaMgv55wDSsu7Q6vgKLwPhkBWeHoQUMAtcAbSQ4ye9y",
  "key6": "2g4VeMoewNeQ4r7rbhPZp4mA3KPveD6gB2YX57zZSPc86F6DbwbjwrryAEfsJXMY38vC2aqZDE1sGbjm2xqAcAcs",
  "key7": "XVghirPSZVEEgTAe4jtLo49xzJN1ro2EjPcQh7mWi13P6T2cosLgjpyh6qRiZx2ZRD91Qe7ntR6vNSsGDHsvsBk",
  "key8": "4oXAbdqNatw3gzKLAgZTroNiYd1Y34Q4SGSYCtC5Hh4eGCd7fvPQ7CKPf2J2dXsy9EiwtyKsuNksHf5tTbH8B1yg",
  "key9": "36hnvjWXGWGtUUVzYTCHqfJMJxdkfFy4qw3pMnJpK6T7hgz1rXCQN8SiDwEp9V87ySTUDzANeVTqioMRYHc2pr9e",
  "key10": "5dsfbY2QPMKheKAfU3zYEiMGHqYHajzG2TcTJisyugKtxvTPrANMR6Ut7dD5Xk17wzzjmUjQKv24b6db7Vb3FV3X",
  "key11": "4GuiAsTB7qXTturMLF86pp7aQiQ6oexUwiUEfSWdqyCye9QPNjthZAkw9U271TD9Cd4j5DMeKEoQCsrecSMPqhJb",
  "key12": "2ZXmmSfptBKa2sKWgg5x7fUDP7UWQQRiMQoLA242ZbzAsyJ6x2vW8UZGZYkkTSUHx2cKC8RZAQYuFJ4YiW7BsfSQ",
  "key13": "5pvq8HwzaSz1uYySD31VqLNpLPZF2ijLfUBKVPa17AVuakm8HNpPMwuCpiHtA7zpFP7iHMpHFydhyoqaqwh3rui4",
  "key14": "3JtNT2t8ibCgFno7u8dGP5wAJ6rm4CX2TiLui6XfngwPCXJXjKtmU3ocQHrag15dc1iEf37byCUTxWK35zx5dx1d",
  "key15": "2wnPkjTxFnaxUwHeqfkSz6wLjMQQUSq4Gkr5q1hCZPApYAb5PPapuXujYewz92M2UM8qQyStycQZ5nTvt4atVKh2",
  "key16": "MR5t2WgdtXbVznGvN8gC2crkRRtm1dS7C2XZ581RS72igVGar2NqN1YWM5Q5D3yJZyFVDGHLpqSY914nG2ryC24",
  "key17": "4uVW8cBPG7wGCMnVPhsNKwXYnW6HNmMfUjrfwC2MdgSwTyZY9Yao4syk3w7Ka9Sa4nFuH6x48EwM4VroNTdTouVy",
  "key18": "5kz5FJfbTB1eLqcvMjutN9mAjGMmfXGxxiXQdXRAyHiDKfbcpsMDWHpqqGrs5qmpZgdsmbJpCftwJmuGPNUHmVZQ",
  "key19": "2AMgRzCs9ewfqtunWY9uLauZRNC6orMUkEwNm48LfaLAEvWD3knmiXVQSeLvpZZJtZERZAvq9DpUEXWBePviSKoT",
  "key20": "29FnKtMJHZpJRwkNB8RJh1gxXU9tkmdyd7rEZ1b63Wanrxu5y8E2iEDWTJFMXLQKKxnDzVWESESEvBBbEpHFbzcU",
  "key21": "uMPMZ4eEWRmL9qupLyqu4yhEyiRV76rphvxYzZuTrds1voUas6MbWxqdn3uKJ6bXVArx1REQVKgFh6uHcTUG4a8",
  "key22": "3PNCCa7ySTFfuVSemuKTQdVKywyZBQBqzgPR7W1LdKPjaTR7hoogRuZFdGVTeePWxqT7hMsAgz9UvcoKq4cBSPwT",
  "key23": "4E3MoYWUbVUPh4MMW4Bectk6es1h3Y2h4uRdoQzPhvQZzkNiftQhaFN7NLRudPUjUBnBFSvxzHzPwQyGu36vUKGH",
  "key24": "4uZ1fBKFpM4NHH4MYvCjQAwsRbz7Ayi7i8a6NCAsoHmVrw6ShphZrZ6xHZd8ieuJKxw1gcEKcY73w11RLMMDQsuZ",
  "key25": "2Lj1cTiCdwk7rHnKncWiSQHbPFTKzPdeQTLSaKfW2Cp8Bib6p2fcVUBQiAxANKd8RBYdvzxTD9sHX8DwoT3ZznuR",
  "key26": "27xFo8buan5M1XYKPuRd2q8mTBHHVUhwtKMgdknFub68TTvUqsb9oCSzuPYgDxc43RPLcx3zchzGkAkP7qwNGVCP",
  "key27": "5VYBZK88uZUaEsF38rNZhpcwkZ8js8ryHLusLWqTtiSBrwLzoerpPa1ywjcQpG8P3FD6Sniz4HPbngNEZNvEMYKw"
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
