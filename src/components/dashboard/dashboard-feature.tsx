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
    "4FkezuuuKe32oijHFfWtLFwHHPR9NhQcJ3tvuoWysgMk65SjeMWDPK2RERUDKBgCN3HxcdJPror4dERRzNvMRb7x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EPX9oThn6wdNo2CjWiWG11Rtm6DHvTTFDaGFRGVtREtaBFEWSpwAZiAfLwSrZ9MCBPDSxvWbxBu3ogxjfW8un4d",
  "key1": "5YbMJ3C9G1k9qhDR8FQTH3CEMQp1j3UW3qHDjRZcc9goDKtCUGGpfYuAJpATpuUniaUaAFfk4z2hVLtFwNRjUQFY",
  "key2": "4PQBxgA9F7D9x6croUXCPakN9wCV2yjMC16GRWFQmZeiEkMa9bi75H2WoNbEwpWy87r7ZSkq6JF9HLHSYPLCMAzp",
  "key3": "4ubPcqSVrVUPQgajgiGZAVTGtsk2UDYWvPAsLEfVHiKP33fVMDwvp7no2AJk4iQbRJYMhXYTcsZ8BLzPiPCk7MV7",
  "key4": "fWgPPaMZs7kENVCmWYMZ59qn6WPU5PiBknW2ZUrPcgAvvzF368uJAXFQ3wK26WixAtQExsi8fTev81k8bkJHSyX",
  "key5": "26E4awLnVApY3dpP3euU54LgQZ6pAT7SREGNrjBCs5G5YAGjWsn2JdrG68YV3UoaQTUtRpbHQxYx93qL9W7F3zFQ",
  "key6": "5W9vgB63SHK3xTEX1vwuwTHZBZxnW8JTRMAYbZKcmvdNgXYzP2tZHEsczyBG2fk6H34CteQ2rYj272Fecqhs9iPp",
  "key7": "3U2iPcJ56kpMTQVQbJJegab2B4cjsYGs4tffCMEKJX1g9pzqdssGBxmuZm64s2EcYLpkv1Ur9LHDRDg8HYzjBtAQ",
  "key8": "22sDugbnhooJsLGJH5hSdUa2HDdDPcQG29njeU2Lf6h4ZZUifxLs6tE8gn43615Sd1dv5TyeoQmpc4zCKDnhvg3v",
  "key9": "2FspBpCS4UvXwJiQpALRPRQPr7QiSHdzkseqEmHGqGwFiWtrYUpXZqawqiMTosJcVMuh8cdn67E4VkRja5teunm7",
  "key10": "4ksVPvWU8pnjr7WNCHkKKHwmWRLLx8mW1rH19LpSUzmaXg2brs1MPNCqKkMQeuhLTxuAnyCTeJ9UZNDndw6xggRa",
  "key11": "YGo5xUWAQdtXCjYSyfbPBtbgzfbUNw3KiPvHRfsYNJ55UuQ1XQiX8hEjFsi3V1WMKaRGps2SsLiqaVreR7w1L6q",
  "key12": "HpoPw35RczvJvynX2RjLqh2EpyPhjCCCVKfNKtMQXGtR6B9RUx9V8K2CU2qXk48GR3obfauK2h2ptazq8TFemQs",
  "key13": "gXf5dQMDNiztq8hUPZpoLQHHYZK4Tj2skzs8LaqYjfB8vvZQvkKXJqeTX6FkeTKt88KMTYu3NjW3euHP5RoELPA",
  "key14": "5qEzKWnCcaG5CiqVWSLc6XRsME6ZBVhyoLqd2r5wUzHVdC52S9oJnDXqB9NGzAfp6DLLhCNyh6V62UhqJWFXgGA5",
  "key15": "3qHpVUYibowhBKG5oJew6x8dMnPHUtXSXqbrdMxMWv1LJKfSHke4ZiHRYiGCv62qyPstcWtC38mTDuLTVpRDC24G",
  "key16": "4hfxDKCvTs21TdwJnGQhtAYk48VuMnZ9eoWCChKJvCtv2AaQBP8XmTMw9p2vbcjyVhJ5r6kpx9Ks1V6C53KjqkiH",
  "key17": "5TEamVoBv9GNz3fyKeZ5rDUS7bbEw5rF4oeo5HjmwoGweeKnwATgKcfVS9h56s4DQW6QHWxjYLzJxVvpJNgRhpSQ",
  "key18": "33GLWG5Actg75uJjH292CXohfTDnGRmo5TnoJJknWiQ35yxVXHBPj79nfDi7RtTTFooFXXCu4uvN2o5HMCnpmpqH",
  "key19": "3yYfpx8Gr2qKBbiQCgeT4rxRG5RAsoRBPbGi9jTqVA5YrhxkosXta9rtwXRDjZi5LMS6Np9QQ6Q2frdE5mmRzkQh",
  "key20": "3dBW4w8uPzvU4bG1WGkzykVSSaZayGsxUbeW3coKTd3nju4W7a54s2gaAWJgyNgi4hHoPr1sy4nwGCakNSW228yA",
  "key21": "1cHKSwKatZePxmKCkiVXDSgn27UvsTTzJFXhgiJHjjcU9yCw4zkfvV2p2nHXhrgHN8224KM7Q14GgHitUYjbNsN",
  "key22": "67NXBbdLuP7SPyq8bT1vWCyfopqZr7PTTjm2axqqsWx3oy3N3dWGPy3KSgPoxTDy1TsJt1ytQgPyN9nQ4mpXMQpV",
  "key23": "42RpkJZVUNGH29e4yMZ1ah4vLgbb7dqazxbtn9fE2GQttS2e681jbk5uymxFkJaxZAkJrEiaJUQqVuRe8KbyBLDD",
  "key24": "XmPmnUaYE7KRP9hYVQABbcs45e63HKGNyZNKt8RdHU8PKhBtLVpyQCYkWjgtgenzqopQmib6FzgcntrqcGLNNSZ",
  "key25": "2xtmYkJ3yzrvhviMNEzmv6Wwv6YnEjwbg6zo9k4mtcng56Rd49Az9bx5MEF5AQ3ayQLknXpCh4mu6opDU3m8DTj",
  "key26": "3dypsEue2nYS1VnQ8FKivWgRrMp5a4EZekTPGNDK6ikzXjHRoiyYSB7r6W9szhuDR6SVebQ8HhHrLHMdXr8ktWwK",
  "key27": "2MXFNHaeivyV5MNfEBCqQoedLKXj4zXnyfbCtsCZSxpppqLuyYuziVQoL6TvugmRuGSGYHgy5YukQuEm2yFcTLJz",
  "key28": "4mXyxJzQFAWLer8iGHQ1iziwD5YhRV4sJfC4YpWMEgB6AEZqoGRzhnRXv6u5Uooj8TsjvLw3dzVx4W7KXzKnz7mH",
  "key29": "5CQ7danyWPFVDgbHWV98EGmn7hDYvsd3YT5Djr1NLLNumWtP2Ewjet4bsjLEL1YmrvLPYxuggRvkbJawPVwbk8F5",
  "key30": "EWdf2cVEzKySVYQ3rNDoJWuJcnxjy47scbNKvUEGAmGDoB2mrwapbCbxNL9SfKvapu6S31LVykLc2GesAGFLwUa",
  "key31": "VhckgJBJujUmCcYLCbXYLRDLByxvtP6tM4CQ3WaqTPi287Ss9ApnyogLKRh3Kt4SSxki1zLH9rsxXU5qbLXTTeX",
  "key32": "4QPaMAinRAiLEB1JufdtdWa6kJsomwcfvmRdaEo3yk84nMyYdgb6pk5K8kgbsYif1VWcqkiDtTn9tHbqrzXCpZUc",
  "key33": "3qpXaEqCAav231eJuNFYauPb1p4Aje2H2ACuVbrxfJoR6sdFMfVpXFGjsGFhiNBNju7qxt58BLSx4vqxkukJ7v5t",
  "key34": "3f8hYQDkK36Qdjo8EDjH7TyBh3KVcDURSeB9auHcccJh7rojtDrBP8f7scJTpSGFZU8dEBKJTc5wF33jRnZ2BpSB"
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
