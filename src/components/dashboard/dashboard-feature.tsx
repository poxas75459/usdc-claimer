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
    "4BDvfmfRnL6NNoXev2bpDh2jBaoWWx7b5WMX8CcpfTadrMqs4k6ZTxT68sw9vCbuiZfSKTmA4QyDc1WifZkSUe5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YfH7G9mefkAPLR9ypDDhvY85pwFtVeG9frDxGY7XptaBDFve4T3XnGfpynT327XK99SG93WvSLnix2pwqEzpVZj",
  "key1": "AqDnQtUBYYQepykN29Ay2MCpb15V91SF8di9pjC1Uqo1hPWBgWj9Xezck27sxJLJofH9B9o1d8JG3auodYG9UTs",
  "key2": "5AcbstgDMwGwxxX5ThW6K494Bd37vv8ZJZssgZ2v6Cx7Koox1fFwoxpqvYfMjPYBKAscQNc6c5GrbuacUyfMk2bk",
  "key3": "489pJQwnioUfBVWQLwukufJ9wFhZsLNhveCEzP1wgkKvD4471FQuJ98MmfGCzNHdyyApeAAzDUpTBid8nVQMHCaf",
  "key4": "5cogvGZxMfWbxCreEA5Sq55M5NU46bhu5G4anNvcdSLrZwYHrAEd6Vb76vg494KKqvx8db33EZiWYcTMVTvEkRLR",
  "key5": "4PuJXkTXj5Bs7qxXo8PnXj6HZ1CsshpDS5XBrbnPwPs6Rw23WfbWfMoYX2QBdPfCKXh689QtLqyKsSH9MEGqTTV3",
  "key6": "5fVGoo4U71qYY6pRNeVCpKPKgUzBiHF5wrJr4HQNrRN7PLfrVeAK7CMhE5kcuGjbG8saGqyeJsCwVNnzDT2JA3qU",
  "key7": "2tzKsH8URxjqgfmUYce78tyXn8tLHuBPDVh7g4XN2DfjN2Nr5G7WQEZwMwTrsE8cUbTb7ocqCRYWQxenrq9UHzx",
  "key8": "63yQnNvDabFYmhbnas4kbdXHgWKM38khSPGx3T3gCCXBa6mSrPm9pYNsXpDnDPfBJ3LdNdNrGmEFCQeEopZTo7X8",
  "key9": "tUi4fDLrK4RTzEa1NBoR4K5AAB1HFtWt5CiPSBp6u91HczH2awyxbtp5z8JkrMF9NGc4SW2VkYMBzepCxpAuHtr",
  "key10": "4DHUNo4DhHBMcbxSKWd8RheFnF7cehHoBFDp7Jxt2W1gqQJpvUBpmpM7QSvebuKQUSkjaTdPcPoT7CC7vLjJs9U6",
  "key11": "5Jr2BnvXpWasBcth2csLUL5pQVJj4EG7z4DkEQDsZzSgCEG1UCTPvpb8VL8wAooBoRBHjCVGtca8CigAwGYgSPmF",
  "key12": "48WERZtiWa4hRVrBUw6DUFM5PpiL9YgbTH4zm8FKrbmDjkZwf2VDNVTTGi6kUSPCG75wdLWXK9F6TFLKj3sCDvT7",
  "key13": "3rJMUhGkmTDDKjvMc1gNkaDASwcFT1FVVysGZN3jzR9y299MrhwzXgvYRtqfKxJcj6o5Mtv8Vpveo4jB2FZiML6s",
  "key14": "KXkupfQcNzmPkr8VobEKs3YUaBzUWoGp67Ff5Lh9rq9svgSrsLqcvDRCB1YaEos4PfYGRMrK3D2aMv3vQHyuX4Z",
  "key15": "3YyeSX5EheZAuG86poPE9yPYNZxkhs21uwVdB6bacoBaj7VZLuGYxJeNKaho8xBXk9N48x4MuWjkiMsNZAxcBKEJ",
  "key16": "2Ynhag2EfhbsUUQewDPYQDHND3pxn3VhX73ygvmaiQFeNao7A2UbqSFkJ55wXvcKb52VStYXoa2KabVZNTdYtNr6",
  "key17": "5UWu3cWarhmNzR9TnVwx4yxZQyQV46Bn4rrbgL7ofV4XniBWRq6XdLFACoZC21d4xScDu5LtD5is1KHQLfboKjp",
  "key18": "5cejZHYo3ZtB3aP62DcJc65BLYJHPYBsQbsy7dXWh6JfDFUscKJPaG9JywnkirEfw4fh2SwBVSjAoh3LNR5ijFMS",
  "key19": "3kY8iXVERXd6JVt1NSb9DNUdfLJtR2FjVndkeF8eseQHvQmQivMWdnDHqMNeeZ78AS1To4fVEk5aKuRVkTMf1KdS",
  "key20": "sEwDYGTn9fuBV17rphod2hPBuzB7tgJykn3jnGRVDV4rifZP4nexawojYTL4iqm2freCKXetMEAYCx5ZqqtPm26",
  "key21": "64oN72WhUZYKfcghUp5b5mVJuXKKfyLJqNvBxwVk9ZRU3Brf9YS3D3uJw5PmY94zEMqQfcfps16HoH3vYU9xnboB",
  "key22": "4uKDuEKULThYiXYB7SZ2JBkykHt1MrSZsmck9ei1BHWiBg1tQsMXK9KzEjJmsSW1pETmXAurQaeMcoCfMnbsHeG4",
  "key23": "cHx14itCxK9dP1592ExKdUb7zaeqyAMorucHnWs1RkVHGQFZhf7MHbXagLb1756s2LpShpZuFVjzmJhBb1qcSfS",
  "key24": "5LBfXXjfkxyeURZXM9pcxodEV6foiJ7AtUNyDS7j4F8RXZ5UYxv9iwu9soLZDSnDmo2bsSt1FfWNriMkwinMFj9X",
  "key25": "4kLW8fiargroNnu2t7jCF3Vi6rBzi2CiM1SduXTXyxVBMf9cwe5apAfKCSvtPt8zQ8WkLq8KpQgQkz13Ei8z52us",
  "key26": "4vmRruEknQjTTCyuKMRczNU9wYMDCYmbtKBQgmUc8e21pAUFNUSHTyNkk4hjf6MURnNws2CDBPiWtU64sZMiSJF9"
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
