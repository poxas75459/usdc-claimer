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
    "41sbuL8ynWJbH8VxfMVh8sER6ovrSphFyCVpu8sbMnvBRxHjHdoNKSMPbDeeyvyQb9hpjQjQB1RT9KdgLggK6pp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4axWtf8qUtxJzuLgzpmzZEAfvC1ZhGGNUJEyXf55TnWRUB6vaaY9FgxQpdAEcRzHBQY8r1Eo36nRBr2z3b4WamE7",
  "key1": "5bvnBMBj5Mp6yAHPvcYfgZ1EXy5FpAxzzNVNTHQG2U8RRQtW76VwuFLqzzAmwcHCtmFQewxJ77cV2wyVq9wmCSpo",
  "key2": "2A9AQD5uWb5FxeSJiWESgwjWfCAMBckcQ3qCACTa2KwUFWhhSCyDEQU8uscmrdndtzQWWuVaMC2mWgRoiBYwHdRz",
  "key3": "5rh4Ukjra55tT8JfTsabBJ8n5VBndFhuGWJvhGYozotcgnhYoCcBS2huTL3AppsRe3KkqogYhU7owDdYp2mjtTap",
  "key4": "wPoMVMgHWQZ4do7U8Fp6DHm4Y3wZ5F7aEm426RcZBX1SrsRcSLbJNrLr9BkCu9VyBWTkcncxJJ9fdJtfEjYk6K8",
  "key5": "3KQBsa8QNW33iLrdwCWQWXQN8e8e752faRhULxVEejmCztKQVDiWm9Sv8d214dRG3N1TL2g6gDeQqnBmktoHzTKu",
  "key6": "4isEfYEt5rXMEnvermG1QgH95rQFmsf7d38DfGwfsiXi1X8L4Xzfb6xowBTjA4erm4xmZGLwFBXCGNF9XuoSsmN9",
  "key7": "4Q4LSn2mjnan6ZAftCJ9GsR2TbJkqmc58D3H1ZqEQUJMVDj74jpWuhqgW4dzrLNwGHCu6MCk7XVrEGBjTrwAHhHv",
  "key8": "2kXjUaDDdJ15GX6cMCcGsWtZWy63UX9Zh7i3VQY3L6d9aYui7TrEQzfs8xcyJH9Nbem6D8hSq1ZefkSykcRWSMmJ",
  "key9": "4XrzWQuhV8eDBPHHpmWA6A7Yor6rFLocKw8Ftf8CZc24gJRWV9cbPcDx3cDDoQihpcYm7BXHMXmvcCvpnXc3k2mo",
  "key10": "RHgiVHWzF8Y4WJ3DgvJ1ZUxJsdi8FGGoUaTGt98DqkoDWf6CtYKJLdUsj95vVopYcHr1zGsgaEWicDfwCKwfgze",
  "key11": "9i6r9dubLQFiacQtfiR7WeKaWA8T8ufnhJNZc8UrSgnudnKuq6dxEQ1gZ1cErPQPfPHxxcKuqWCoJy94CU23nxE",
  "key12": "28vcpmhA2a7w3cMKxb38iPZhcWiuUUcn7vap6CGEp1K7bzsxPZAK1RvPKuJzc1WrDpGh6pXYhf222UEGqWjfmt2q",
  "key13": "dNsoXDU8y94Y67L17nNPVej1KjikZQRdcnZFVEbafAWNSkJ84b5Co9KruR7KpWm5e9ksQWhgCbNLsvYMGqghpM3",
  "key14": "4GgYYnLpjVar4zLAfC7TbFaCTcZAhAaAZ3ad8cqxbxKmGYrDzQEmeD5mRXu5nYAVHHpnHfmWFL773w4ZedUE1k7s",
  "key15": "vzz5a2KPok7QojZFRcMQQ3FjA2J7aL36RuygQ1b4f3t6J7ReU99SQG4oeE1C43U7joKu6wfH885GQh65sh5DT7J",
  "key16": "4JibCMsefHPDf7i5SBw75LZuy1uT71fBsFVioN2UvXErwvhfhCorkL3NAYSivPgbgxi8naNMc4anJVVkn4YWmGDJ",
  "key17": "3bFYVKNyG4RBE8xNbQh7aR4FZEpsGFHCjsZPfftWjks4jT3Mb8GgrGJJkNXuoCDgvG6qkqeFt9xJwPNsHPpDV8qm",
  "key18": "VRnJNNB71Mk3946U5E82JfzZENLzCXXxbKgQAvgvKgBXWxGE9zSo6qwVQcMcYg2i35KGkiRd3xNdXCs8GVNSEWS",
  "key19": "2ao1MjoR26KF6ACUCMtRkaNNtSoc7d37HgTfVARARqCBZoDCNNfRbqe7jfBFkvHs576NDVeWWFEZshvMmSfTcYkG",
  "key20": "3ZhGWDNtLsMYXAPX5nLepPH4mgYQSUarET3aMVQ6DLPBPHaohoLFCKZHcGvbKEPPFkaM19mL7z5BYb6qfrm3q8uC",
  "key21": "Tuvb4zmwVmuhmqj6LvG8Q67P8kmaEsgZmS74qci5iifCyLysk74oh3ryqpGLknp3BpyLUSNu4W4N8UEBKucQPQt",
  "key22": "2pzGaBvdm3mJVs6ia9cwg3DLvYkKt2FH4HE9DroJPxj9QTLmcZau22Fovvj6g3KEteJmenupdysdPUySgx8VfhU1",
  "key23": "64BPJfHm851tBfoKHdCUdQ74jK6YFpXfY6GndHhMoW6mMq2tuqyWniQwksG2UbUNymUz1U8Tx9g7sMeThpuz5hng",
  "key24": "swP4WsvdeBL4RiFVY3m97xU78Dirautbp8yxcM5qrjaj1zdu9p4hsB63PD5WjT2qTVXyUnzURRZN4MyonGw4Bhp",
  "key25": "4emf2CVJ73T84ttNgmvdzDYDTJQwqyne19nH9Ao8iCX9FT8JEowBiQPdxrrXPqUTEUMWQm9km1eEC3ft6jB5fdda",
  "key26": "3q84VaFHXHBHXGYPBVMaU6uV8Mn56Zt4SXZ8jJZJ7sMo41XZdWMTcqGD3goerQtYWsGioYeD3Pt1GjfwytnQwhUA",
  "key27": "5raTnuocrGNZKMAgsMnekW2E3hEp2wo4yzu4pDyQp7GhNpkH2yF2phvwmEX6YUFo2C3XTts2HetG1ypr2Sw1bzog",
  "key28": "2tHPiEdqpcv9nuwDhJqMuW2YqxGgorGW2rb928RArG4eMUZhYCFjjcAg4MatBaDHAiU4AQFWE3tAWRyaofyBFjaT",
  "key29": "3n4vqHs92oPcJCYiqRcoXtYFApCbRbo1qrRgRHW8uAMvXUNFkm9FaDdW3edNtLkAXEgZVq1qLZd3hrB1phcuhFnk",
  "key30": "4qrTqhzvGuiDSga9hgRQCfZhLoNkF8kdJLwjjBFZvTboute4jXKS8D9Rd1V5pNPp2xA6TbgiBCQFMuLhGGEhxVMZ",
  "key31": "2ms4S173d5CMiNwcC2DFYtMRKYu4gxvCXn8DDvoFEbSHbDVvnGPFdvqpF4J8VEzGqrhVrTZ4s27WQ4nxSGXd8tj5",
  "key32": "hdn3yibwbhYJEiwVdzqaN5bECsrFEKd17n7PEJQ2GMxpXACq4gj1PHzzvXSmL4o935XgtJPkNvwqFHS2itmyNKz",
  "key33": "4JQKGgxjH1AMxMe6S75xrEzqJ7RxcB2Zu5U8XKagYXMa6DP3iqm8w6ehgzkXJxRuR5sz4ed8kBiE9uscw45gAQoG",
  "key34": "okUup8ef26tTNFZxhfu7ctFBP8CK4JPqTyTzhZEr7R3UJkjwyN5GHV4RUneTfLTR2bwV95VkEqFHcjKTo6JjZvx",
  "key35": "3eU6H89k1ySTngfwgTJA3zvJ8eTrpe8yQVGBJuFnKvuNsvUPeg5boSXvMJkBD5Lpc3ynzajhxn1TkEXFwpFJdtQ",
  "key36": "4BAe9y84NpgecqmdPfGD2QWsRWXngU55vxW1N1bVGm92VeLAEMcA24NgJirMgGehxAun5zhhsyhLe1TUN9scqqgn",
  "key37": "ZAb8yFShhTu7Ly6Bb98TCY9mU5SQqsutaqZjppkmGHkGBfj1tbXqwstxboY7t8WeQJVEXqxkZ5PWqfRTWQjrx6d"
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
