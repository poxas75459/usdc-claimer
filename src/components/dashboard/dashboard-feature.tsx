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
    "2aoewNxP59LPsc17qZUGSoS89uyu6vFpafTr2Ms2PAPsPGjQNMkBAebuY2K7gBnjiCMgrDsJw4DanEguJzWLjej6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EdavTxaxEQMyAREvghhHUWdtqrGsuhDozLSDSEqZh8FMmsKSHQ9DbpvrrwYEzT2Q65VP6KCv2ziwWZTUALTUVgQ",
  "key1": "4bMtnLQwuM5yVosmqEdmmWmx8Sv4i8rHjx2kDDKp1upo7m2WjzdmD76dCLKBECpFrx7G91GExqPdfAqy94dsdECb",
  "key2": "83YtDXP3H3uudW5ZC7qERupMgu4hf3cY9NACJWZE7jnUpXEyU1Q1pbZ7j15BSTjargaG9js5i4J8iMGuUShGcWP",
  "key3": "4vY4SLt6NubrwQ5e8dwSpPgyJ2fLkJzKTd8ktLcrBNwhVzysDVtsxizNyZgz1JSsHP1GDgQmQapsCPC4o3cKR3cK",
  "key4": "52XtXnYzna95VLy2pz5dy9jsCce3Wi9rremsmPReZtRyheEs4d2QYdJvEMFGqnbVMaWCqST5n6mZk1Nd6bnsrt3x",
  "key5": "3Q3hzsjBhEqr2FeUjTnvBqqjZsAQGhkw7ugYP11uRRuH71cQnrsMpxXN89AbTQ4p83rt7QyBorvBMyRAFnThZzuh",
  "key6": "2woRTFA9tBdWoATsQTYsYZ4Jwk9ZMAFQd88AZQ2VAFiiVqGsZAGYbq4idPYivp3yFsaGJ3CybLEC2VhGnzNpkJcX",
  "key7": "2eqrAXG9kjeT7G7MLDRCtcSURncNCerYeG9BFTAW4EEjfaCLuLpPbjrR92W83FX98ydDPMSwiRaqp582SuwSv7DM",
  "key8": "671kCBY3JYPB63g6TkQVCwRQn8Dfph3EqDpU5q5gcaqCkxx5ib1R33WyjdnbTuWMhbEr4FfgCKYJNYAE4q22LaZG",
  "key9": "5nSBR2DEeWrL5poAC7AghdhtEVdrEm5jwRpuzFQyF5MNpMJRAgqxTmRjhJcHrHJwhgoTQZWTyFVvbhDfhPRsvDKP",
  "key10": "u7YYjzk4QyuDaaQ6m43JWyyzBiHPGfGGNo9SBPbMJAs94t9yVxqzeA78sUyja6rSHCYkU7R3VjMTwjNujUtAgRx",
  "key11": "3JntA8hrRqWZU9vYDNKHFoNgj1hpZP5pQ1EoxtNX6TBDHefHGLRd3sRNB2HR4VnsShWt3RCRhgyHFrcqNmVu8Eog",
  "key12": "5M6cYZnxXghyvC95YeKLpUYqPvpLn3aUV5QD4aQtd1ZTY7jZMiQ3PTM2P8YTN4XEMt1m86fwVA12qCBmJrf4oJ45",
  "key13": "5BizzJivj7k25PsyJKNt6y3j3Dnuqh3eztmR6KJaqaf4rB6rk6QLGcbPAjVNG3LGdj6Wg8FjWFtaQGB78Nw1VQ2g",
  "key14": "5bzfbNZjCJm1wviSxmztRedevDYHAMZNVpiHpCQFD7sUgPMiMuDcEbPT6mKHqVb9ZZ5YPXid7gUo9aCtrmty8upn",
  "key15": "4jginQF317djRufByjFGo99q1kmn3YTUXtND7W4zEN3CPoDBt1iE1fTmTeWBMrzhDArQjkxkVTQo5owWEjjkfuA2",
  "key16": "3V1QJKdbT1AWieCySNW1BQoZ5kFTN2qkQbU4upjh9bzNyz78jBj2K93K431aQt7LX8JjroAKmuFWzsXQTM9LBVCM",
  "key17": "4eZ7ZwQfA4sdn8QPusRH1reveaTGnM1P1dxbCZXPCaj1iAhjNjfgyLaUaJQkjJy1dW56SDSmQgLj9qaxdzxfQ6jH",
  "key18": "5XqpgJnYf5kPTreHx2c1CMqNkRcf8NT4QnXxwypqz8hbbXtGEksJqLfN659EBMHuke5Z7q4sV1QaG6T2rFkMezTU",
  "key19": "YgemDWRzwRtWeFEiFULqNkqCdqMebzXjRnRFTLFMiLebvmd83zHkg14QXq16hxLbhcmNRzYXpkaL37EmzCcLD1r",
  "key20": "4Fm1T1uaeNcHL861bsj7Js1gznS3z419P9xwE6K8Nf7tAFpsqbaEKxfLeCQQpY9FmzBTh1ejdePH1teQMN3J3TSh",
  "key21": "3L1ZKKLCianTvUHepRnDwqej1iNcG9dTrkTu7JuCDFY6mW64myyKAhYPmpyhpAovqsSe1VfmubGJouFBUVX9zfke",
  "key22": "4ZAZuepVMfL99ipRWm8j6oXdgaSPynnFTtGGTRQhnqmkgrPhqUHkNYEdUPd1ZmbmGEEYWWXEJt46boaeLGzSgkpz",
  "key23": "PVqqYN93LGSFsyhSZyWgH6F5sViesCUy4U2v7s49pSK47zc8HMmavA7VbKViUd417cxft55ow1JNaYEUT7dHTEB",
  "key24": "hBBykxLmhm57TrtWAr2rzJCHreDCddrsTTLZvXDRipUr6Fx7qcknfNJCHdVC4t2KRr4wMNadNcJfRWb5kVraX7P",
  "key25": "22FavL92Qbd64PbyqwBhBEtk8ZrUp4Qac7gUTXAtkKRDjXhkTFXtrHFDLb3qPxYTdSNW8eP1AUvna3VLhBvx7umF",
  "key26": "4jRmmJtk1a5nGLGRPjVwWtazxEttUXnmp87CHadM7YA61kgRzEU6SezujMFxuTexmBf1Vx2MNQ21UhMnBe9kAses"
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
