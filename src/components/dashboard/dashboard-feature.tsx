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
    "2RtbX9SuBPR9NwXUviZH3sJ9Nwv2CwpWvWzifZ6KRGhWZpoQP9we5UuQ3HkXJRBRqFbattHUQGu8QS8k5v4vaZsJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LCdkq9xKt2ewhZmq1yK47Fco6x8ZS8cnKmxrhcR8hdCuJJWe3rpq78frdT5CtYxE8LU278cRgoxPa4x5DhER3fR",
  "key1": "2NZ43yhjqPsizAWdc1r3TM7o1Z1qt6E7SV8q5q8ucJGebVVryVGdYWGbmh5jxZDiY3cGXCZFAH2pYY1eux2bu3QH",
  "key2": "WbwMHEFYSqAtE1wBYH145MhkDbUw2paXSgeC3EiA57uVwRqDQxmEYUMBqZL7eg8vkUeTaEZ5cgAS8XsD8jCjR4F",
  "key3": "AbBmdGQ7WZZ9NopvzFs3UPmiH8CJsK8UkERTzBrT6jr93JJ1MN9hhbm9pqSeqdma5Roi94gnFioaFkjN3TUZQ7q",
  "key4": "5bUcDcGqmnjo4LUrxLwsox63Ezw5CHqiD1GjE85oLxeQvUMKgc36JyoV5qvSAjVBSBHTX8xtLxwoqHjWMGmhNvPH",
  "key5": "5mtFiZmoJgPaDGHA67XbkXpN9qHqayuMux8QPrXkUM4bMgtHczViN6MrbeExKf2Tcp9eJsAr8cVcSBkjsdAZZnfd",
  "key6": "UJpgcZZNMpb458wpSGqoowvftdqahAstk6kPsaR3mox35uWVmYrK6MtKnDuNUARSCKt4tVMBK6GhD7pGrURtwUi",
  "key7": "LkGBvF4Atkced2oq6idWgpNQEMKNZhsrP4CgdjZr9gp1pAXtLp13dYZXmp9pj4QniPcHm5iR2erEitnrqcAQyg7",
  "key8": "4cDkrhto1pfMYS6GsFyzppbHnFeNcifPwUxkr8s4CZn213YQccwGX9FwMUoqjs4KJJQyNzDc4tuipGJzodtksdUr",
  "key9": "3Qmr3XEB2ksRdcrCeShUBTKaobY354CERpbnnSkMvhJtLGvQL43Y39mmeRD6Eq9YJQAAH2pWgn7VKgPJK6MZCNVS",
  "key10": "4493MvCvGhWbVhvfkCV3aP8Lb3eFKDsvWxQ6r4KZ1WBzis4YTAhUKHzw74qTr9QV5yuX4h5ysgdBwhbvy5AvXyFR",
  "key11": "4p3fDVNr94rgMwY1436b6UinaAc2N7uMHk2DMvPRRdDNbLdFrtnBbD8Mgr7Svdn2Cy2KW9LidbTdS6YXwh1FAw7m",
  "key12": "4uY9mgqGbJAxAFUNacJE2qt5ZxLLDTCCXvJbEkxqHDgaCuowJTcUvow5Mt1ipehoPyuVRi8rM3xwXsCfXqSAicLr",
  "key13": "2Y2Sgt23EyVf1EyoTj2zGq43K777n3LVLgxh3Jb1BULe1KxpzTjCupGWxLno3fpgMikYYzdVXMqczCCvH12ZLGnX",
  "key14": "3mTAxEtdcZKrNV95DX3rw4ZmCYav1dZN3GJpZEMQjbHdr6j4CZrgQEW5nmB8M37L38GzXxuxGaH2BThuZ2sTHuCa",
  "key15": "4JAA2Eu7REKWswjXsCKupjiwwJ4UgWsYV6Jc5HmrWsaFhHYqTksgAqQzmfgQi2m7nFc1KDRyLRAyysfbW1gNk1KJ",
  "key16": "2FCDEobei8w984rTpkacf8cUwjjmaMCjsr7Htr1x81wfx5TmVfnwSSztJMncoprwoV6wQYEwxfUmnwT6jhsAgTcC",
  "key17": "XRUk14nMajYdYw3ffshmZgM3mFBVZRXci8HnDt5VSbSKVYVbGXuPs6deeKu6uNhWFTkzmT8SuB6Tx59Vhn3jYEr",
  "key18": "2Ytba8RjQxa15HjDFQciFesf4Ji7K2Pk8ZHB5qVUhw7yqiVn7uTxD7JtSn85xBN6ydpmPVEXh7oEh3WiZ6ac8gPt",
  "key19": "2JnaeEQHcc9cLALq4PPhaDh5A1TKQcpfefWxEjE1CtM6G83GEa7rYBrRGfoMGg7M624NDkvRvAY1im9TRXmicJJA",
  "key20": "227Eh32bkfJmxPXpjju8veQtUfJ1szhTfRWZmC3iTkiGs28YMGwrKEE5o1FwfP5w8CmhYJWdGE9Um6Q6jDeFHCsW",
  "key21": "3jik2d3cEbHe1eyUBRwyYchkWpc3uw4xykB1wKyCsVpjFdj2f2N2C4xB8yyrU2ifqF8c8cauKszBsBdcHVNUcgwQ",
  "key22": "4tLMrf8EpZcwjxEqqE6M21yLBVdNi64taFcaBmZKaSpb2fFSFPcQUsshUApVU418uJHxzb5WSEXWC7Qm3p91fAXt",
  "key23": "5yaNZN1xYfnoocF2BSa73X6amb6SDZbfmWfSSD5tAaC8riabyhkSoe2AJVGAfA1rPTfazS9NDnkT6UaqzPDDSLvs",
  "key24": "5PagNXQU41xKGUuN7CB3vkzcpGiDQacS8LBkMnzgTMmZqVKsPDHNw53xAcgvwqyHdGYf7BmDHqbWNMoM9rAm1tkm",
  "key25": "5FhQ3a8xTYkR391zgin9KD12N5K87CMFd8NpNi3BzUZTTTCfiXnixazdcANNg68TLQUQ3Vs9nnwpg58sWZUgorgF",
  "key26": "5sdJvPZWJRcu53sJV1NckVUcMSLTAb8gx13s8B2kDkSCWz3MZ8whsMDbMPVyMPwksVk85Cqr1NkcnLgSsgYm7BGa",
  "key27": "5TDHnzecP6vVNM4bSsvjcRGH9QZEVfWbugN4uey5Pr21yNdFhjmLn7GHdvyAGZ1VFLrDdnDruMskFdo1NTb21U85",
  "key28": "2WDjmLdqVb2UToxznbkoMCw7D5rokuuydCXqzAZeW8kEhmSNUfjH1pbSjZrV6ZKibmLmo9CUYxXGqMyuHWtqkLJG"
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
