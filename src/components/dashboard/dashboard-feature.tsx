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
    "5dpuedqMLRmPU1ZrmSvTkYnu4objW8cMdg2t1vqfmxK9iTWgFNBRj5EG96iNZjKShv2XGXwyZ6YJKomG49aYyuDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d6CJAoZt4wVUYS4EHzMmrqjvmkaxYboMtGuNa4QM7qgLy91xTrFsXXxwUF2wPtjFqD2zMDKYrfawmS8EJwUR8VS",
  "key1": "2YFjhm98Z7LKrEkQbRrC9R9j38CMz2Xnv3SMkQTXiRnavrZbtk2uEz4Uy5T4rwbVHvG2muLzGc8VzqcjL95GfHk5",
  "key2": "uP57o9DJy8fkeyEwaeDubRbg9KbJ3otiyBwTypeVwSykxzuFDhSdjPWoMmdcspPocQeqsbiqU5ay8N5BbA7aRnf",
  "key3": "5rj7AzjxsnLQvnJVjGuYrEp15XZrUg23LeFPF7JjzURP6YgEAvGKiEr7P4JaRy216ZeGuvfmShY3LW6Xsw1iUT8x",
  "key4": "674PgwMCwREHMtr13xLjjHfbwU4d6iM3acFUat1c2WDhp9atq8tVKJ14jjgPjCgPwv9fcPAsD6StN6u2f6Tc34rs",
  "key5": "5Yi9zt78E5EM2857qQYfiKLs6BRmej9fum5rVKas42wVM5LhbAk45BvrMFTAgVVpJyLXa1Z46QWDBAjtuFvqp1m8",
  "key6": "3H9wqxKij9ebGH6BmALVj9joYK4hNiaXKAc6mErePVVvQZVHr88Q4qWWD6wbFVwrqyuLHwdyRgpU5WgQtkyiA3mh",
  "key7": "qWCfHhGKuEnxdcVwxheZi8quCzT3KERPoGTCXZ4DamHN4vM4M1omTQmsGWySterMpKWvM5MhZWpmyuFKuwm6wBa",
  "key8": "63FXYaWnGqY5NMPb7UMtpuwdsRM9AJ8t7EhsUKLg51Bddcnt7qbheTTZ55FDZuYrf8uHwz4DL1Y3rtyNRh3pCATW",
  "key9": "5XQe4KDYpLK4XFXB5wyT3yKhoj1gbigAgTgnmkgXk7123uCXfKJyRcch6zQwbweRc2LvXRpAosRPS8vit6C4e1m1",
  "key10": "43nc33sV9EQw7mZBpY2QhQqofr6QG3Yn96TtKC3sR9wkdbL8xXeZ5rnWWpNoevRNQekiU2n5uRqX3m51debMJ1uX",
  "key11": "5LhR9fLeBS74vp41H2r15BbhWRDGLuhwK2WkyaqQRyrPrLZQNdL1qVH9fx2PHjbBm6BF62LuuoVjZtwUELdp9ST7",
  "key12": "5en88seQbUhxKPGH1GFDpTJLBCaa2mkZG7XeeAU59M1wJxEhwPkHDB6YdXof18hUyvxMhtcoim7fskJn62XTeE1u",
  "key13": "4f6kteFdh4zQTNMedw8zXXcYgxLCFH5z8rtQL3c5yGT5c8tjtG6fiX4dZ5QjidwLsevGqoEv3VutcYr8qhReES1Z",
  "key14": "3n1bBaHkuPqPz2mvuAgvBUsVgAc3xES9SamRtMs84AcLa5d1rEBRoyW75qTHEcwaN125W14VMxVbLisH3CikC3nf",
  "key15": "5EcELHYSXPpG56Me7nAn5X29bJ9KU3g8Xxuqsn8VDWRxf1iqw1rnac6umDogvW3gmgWmF6ByQYX5ijHZfeRsHiho",
  "key16": "2iauxPXzGZck7QyqhaJk53JBggnTWgLbqgXsymrWvNe4Gtb1KSvtrBY6xFopKuczgiqmyY1wS1rETFXdVfEgSUgP",
  "key17": "3HSMn3RzjXUmio22vTauv4985jajQjjFVfJhonfYkvNFA7nRuvdGQqDxsZZSr8Gx13VSqaHib6yvvqS4gE3iH9xa",
  "key18": "3Qf4fBtvtX678CtKeM5PkwbhGnMHDtNQdThMQxiJi2GjP27BUVqqeLHQLvb4QkLkGCdmupUeyjWZ1y92MVkLZ5Hh",
  "key19": "2uRVW9g5ptWx64Fst7Z46mxeQUuTozZHENG8gUTqpMnmgmXcB8Hz5QjXTe59ExFJ5NJ6rGdShRAUNAYxSqtMTidP",
  "key20": "4VFczDdSvgUMfbeZpxTTwANayC8zh3qT2qUJgnQ6GiUaRiJ3ogm8XmDUe781wPE4zjbYhMbwyiZHJnh9FiCVuo5J",
  "key21": "48mtYzW2if47p3ffVb2AS6AwBiZ8iyEwWPd36ZUhGeXaAwhNg55rJZsW6Cha4QkeccUW9HPSuiG5xznQ6gvBwtke",
  "key22": "5P3wcXXsAGTUL5s1RBcXVKu5yuNxzU3FUozBkWpXo7SduimpoU9Gkf4ayJ6eWcVkCrWCY7YpSKYypG7rh54dfut1",
  "key23": "nMFERRkij4zqgPs4dZ5JfnwdJioDsyrycW92xunQiWGthgw6UaVqgBSHmYD1TAJ2gENkna9KRppctn7FHsbCwjC",
  "key24": "4UnqdijiK67QpPYweVtb74BKXZjBy4R4X1tfZ6gJDhXVPz18RD34u1fx3QFXfpuN1guTCMSLdF7FVWaZx8kDwp8D"
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
