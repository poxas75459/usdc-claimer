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
    "39WNXoXHRohM316UQhAaUiaFSWkWwX4xCYTYLh8wmnAniRFs9G9JenhJh8PLC3iXG1kYQtXo2sbh988KmvSk3qbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52GDbbtzSpaPr8mxnzco7S3tR5389ovQsXcUKRMLaPw22W5r2jXNDJ2NgF9RWzumThL2XmNaBwesYVPy2jVn3KEL",
  "key1": "2TeGmLUbS9SPWvzqcDYkdYDzh7sNwtPashFJifj4qVcRKriZoDExv9BtU4VD2qX8Gr7oyPziRWqJp631xUBDZBTy",
  "key2": "mbASzdtkbCQdyFZ5Sg453vns5aBjgSB11jM3BzuoRMq3Zh2VJCpVGD3dBjzCkNvPGVZmEvibapR7n4dLyemAZm9",
  "key3": "4MesZ86CKiE6cta6FuRY3JYfq7kC64ZSbrkQjEJzW1eYDWRPgaAhMucu7F6WDcXTgq7D2mAtxMS7ZSh4B5GwBuQQ",
  "key4": "SZ8rPg74heiTkbAQSJ4CAgBZT93ffEoJk9yVod6JEN1LWi3uCBWgKacqvkudcLNatHyE1ijdT2J8XyFAKdAwg1f",
  "key5": "4qv7oBRmqdPMqyXpGkgpVSfNoADxJNfnc2fh8tdfwtYfWjxhjXTnz1crjs4xWJQnkHJdG62hcRxaVNoxaQLRnBMw",
  "key6": "56KNcDyPoznQEiXpshXmGZ264K6WVsPZYbbbgcQ7QuWxQt5pXmRBcASqYjVg9jyEpUfNwM3pP1d9nW33GDoCaMng",
  "key7": "2QrZZswnXCpshF1esVQ1nD6hfmDNH3TTPbi9wz1HpT5JxW2daDqbxUaFCm4d72Y6EhbAFnKQFMFEdRQ3VotUpVFP",
  "key8": "48CkbeQnwhf7mY3wMNt8BUXUtgD4xKYcSqSVgtHCXwws8CPVtZcwF6pTxpJLxRSXghxD15nYPCMdqT8kuX8bzK3q",
  "key9": "5wfYtfGZXwJuKrYtePyjZF1NXfwo8DZYdLiDhLdnRToid1VJyieaajegKosZk5m8KT5vxz9WebcKDfQbEX9U1h62",
  "key10": "56Udaood5LuWWupiZY6PS2r9jnoftko4zJNJK5PXS6ChWVidp3mLA6UqNhEBDxCUTiDPSf3cA5mgKZZ1WVCHMknU",
  "key11": "5JGUkpZCkyEjymPy3nQp5xAB9kWwUHYCp7Yhoht5jMJTxXzYGW93UCUGjM5QMP7KzsHhhhgLaX71xmBbVK1y2cjc",
  "key12": "4r5eiZuYRxiQQeQtgVVXRhrcQDM9vFSStp8ziuhJFicyDaoDJRXBSVyGgVoRybdWcKAB1XFeUspdknxqBvbuQink",
  "key13": "uxxbjNXarRRAoiMyAgWx74JQncUYtV8mkkiE5Aw5uNaNwU2DaeurZUwruraBLDRXM8WbS48G1iAn4mKCg6ymXCm",
  "key14": "4877WXq5JwDWKWKnuk6CdNUQcbaHzqfnA1ofErFaMR7rBdCxFHLejtR34uw1yFx7wU8SPfTQeohefGXrNxLXVQqp",
  "key15": "4HhEDqxDkNyGy28NT2Ke7gSfoQqAoSTFMEJbhCTmtmavgBonddq5GDyeFQk4Ty9z3e1E814fLG1ZSkTabaXh6JGz",
  "key16": "2cKkzTPuBNv4pCLn77YVCoKSKhh4x8Gpc3xDmXGEcwoQ7AUmktZpnFFRqeurNWMNZnJsdNfQ8qMZeARes3UUa5bw",
  "key17": "54yDS2HvCtvZ4YKDHf8AarYpfkKBgxu9Z5FNu5eGQCoQY2VwK7nTg8DwNTbX7h1bfUw7q1mgebpGZoXqMMGRLRYt",
  "key18": "2rETMqteX7x2cB5Rks7BW1ExWYURzBNTHLqeHRA54NPMq6m6wUtgpx8RWpWUP7unLs1KQxpFidq6BjwndCPqgLLg",
  "key19": "4AHHqX68PnCtDDoZafnshvbLDpk4rqUi6QDw9Y9L51EtyBd92A3g7j1ULAMdm2fSHnBZFDuvQqwsmqtyyxtY6M6f",
  "key20": "5RY3nKdAwCybssqV2zduoBmwWhSuUHTPk2wfvbnuBmtZGKAXwnwE7nDqWtnQHyVm9666k435puqH4VmR24j924Vr",
  "key21": "3GuW2A9otf2jXQS6UWRaQemQMffzcvqyKePMXvynCKdQLjXV1RyJU3p4NGAB5PXHYKvmk2MUk1MnmxzzYFXwztZU",
  "key22": "2Fn5SuQVHPWWzHUgfDw6ZMVSZH4Rs7932tnC3rUvZLXr27Rh817WLTM26WRx2YNdQpDrXgJBnhkL2Twe67Z4QL8U",
  "key23": "eq36NmNB7ayDLpFL6ZVGvVabF8f63XBTTYQtyY3NZmaRYxUk2zMoioJR3EgaNxYo2QMpmyKLywC2ptAgWjn9SWo",
  "key24": "44ifysBo1xNjry2kdyE62TUvhRwC8drNTbzDALvLMpF9Q6e78dQU1EA3HfEMa6J2itrvxTxariHd6hDnSdLuZvRH"
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
