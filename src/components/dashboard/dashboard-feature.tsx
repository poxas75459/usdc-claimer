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
    "2FF1k9jp34jWgA27c6BbV6ywDhp9quUzYeop5a3H9Bipu6vr4ibvVRefGRkMkzB6iquaeoPKFSNqj1UB3uhFMzx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1scubTex55c7yHH2fzqfWhioRNt3ozVP5NBsYzHUu6WVqnzWewwFBwZMyV42V9Z7hZG59NL6ufRRsyBwpZTaUp",
  "key1": "3gQZZG78Jt6VK9x5BBJHTBHcpKZ7AZdq3ujaWw8EyhyuYTxngKoWPKQ8HnbZbWRTW8WDzWYY93RN62cmZWitcKj4",
  "key2": "5pE2UHLDJFoY5aLACT4BTvwwT3Njy69NiaaXp3qf2vmbAHLjmGdqrqB9zW2qnaXKBdjqTsLpTEmLbVbHNDg6YSXW",
  "key3": "3agTy5wwgv7F5kf9DAM62gR7H8YuPU6jZDwzHwCK2LS2YzcwHMvJ8bjYKBqEtcpyPpAHFnLQg6f8EDr9FihAu4J7",
  "key4": "2dFAmea6ux5RCngcuFAcCVgerEoHAY7rw8frUykHNUh4JLuHaoyNdFiRzrRmSNnZvZMsWiQzsnUB1peYqewqSezX",
  "key5": "5G8CVQamq5getHGMtCqHu25fJAfjkP8D4srcpiGqteoKYo2vjvZzy4jd5x1C1jTzVDrcwqCB2jffG8ygCENMRoxe",
  "key6": "4kpZsYwEzPi8nS9e15nYweQaSVhBoqzng3Q9M6hwsPD7H9nU8bZEakmGjJafN6Cf3JeiSuask8DyBdLMfsFqx3AN",
  "key7": "2qdDE7Bae2EPgrchxD2e34PTfnqS9byuaYd36NQ7viEnhBeTQQBCKzk8GisA5nzjcaqXTRRa11v5pLd8eVwLiEYK",
  "key8": "2hWbDCh2fQcTEPo5uwGnSeKKrxay1xy3NQNEZjpheB9RCkC2QKi2ozKLZtcCWph43RutRLuHa5s6vbhGmaMKfykU",
  "key9": "5fFRczRGsLpktVqtNvXDSuYJbF5sq3GcZXESnJ8jp3JW1QokiX2wxssiqEPYQNmwnfE2ogMGsUiJQ8CtZCPBg9nw",
  "key10": "5cSV93acgiwApnKV1ewdR8teHTnnfvR1RWdBS1b8vxrJX2mUTfHsrR5BY1pDiRMdChWgmJKPtV3GkJSARmNncA49",
  "key11": "223qA5yd4pAnMQiDZC5d2idK3CdDbjVkG1ivprx18q3AeMtPK9YewJ6LdrBaqqqWYd3fv6H2a5mcj4tyde6NLPQ3",
  "key12": "5NWJ6abhygHFg9VDqPQndaD4mMdfXsSjbPR5tLRQ3x8Z5js2dejFRmbXpRAfF6hEAbkhkKA6yjtmMM8Szs9S4P1p",
  "key13": "4CFVbA8jtr7cLSs4MJhjTmwCfjezfzZmDHjoWioZWgtBbtepjiq7cQDZDiyqQ96HKb3H7sg7Xfdja44B8rjUu5qg",
  "key14": "nLt7Vd7HaXhwCaCoEYtBqfTq4gK3HbpuaQ6H6QRrRofvmiCu3bvGSEeSDp8iodvYSKunCd8XE2X27GWacvJYEJ4",
  "key15": "iJtjc3BRjFndY69wN5KBBMe4fsTL9acw6DV5xnt2vdrBw4nASdgwET4Vd2TWQ7LXhpJgajLDLrGnNaS2scoeYjW",
  "key16": "txfbDvau5Qed9dg1i8vw3emdrH6TQymoVYgWZVkDzLU4aMAbYhJDmqBtMj1RHWKNxdU2kfC7b4pA84wxbhfdAXM",
  "key17": "2oTb6Xk9EWUALzRTr43J2Q8pktx2D59ePLdpMGPiCc8iZULJaxM6SiWWpdGmNnFw4cJQr993ga2bkwXM7HRDfNM9",
  "key18": "391Dm9W6gxMkziUPxEfSyZfaP6gRPG6QmAo8Hv1xjcti8nRYFd4La7KHYHUxYoD4cbT9mMcTYER3CNF2seSz1tkJ",
  "key19": "4gmZuG7821YZ7nJWocRjowqVHb7PgtSagJtwPUbZJv8Mne64PzVaJZVdHTPu1MN57E1kYhLeGtDeP5W84FAfVZQb",
  "key20": "63DP11jgPGojmnCHAAEkZESDnrSe2whbV2VSNnQWExjuZ6XfDxvYWxXYQPzbviHKVohjAApLYVtwoWAwA5kecK2D",
  "key21": "fMVMRa55FEvrxxj9YfgcqAHZTpDLF15LGAxcS3Bf2JSqFmjimA9xEguyWiF4fxx3NFrA6u53zySTim4SBju469K",
  "key22": "HqWxxgGFNb5TzmY8jZMsQJCwcMnPVDj37yQbd4f4gYh57usTAJsrCWQfyuFRoLasET5ekyrUy69PKhpo14CnBj9",
  "key23": "1vaeqj6PM9ZzRSx65zA8WQJPETPgnF8N91sHXf3h4djsxwbnZHo1wHP27zhTNSkFDtPU8Jcr3WT9j7Lwmu9yKPK",
  "key24": "2UZM285Qsb8rBzofwbioGTTjkZ1i3X1s7QQ4u6kvGycaw99eMFiDtAjZ3JpJgiRLDNDKi2aeuY6HbxaYrZ6W5K57",
  "key25": "3yWBdcsBfdMZf5roQX1BsTMWEtBApcKrf9Pp8hzqmCVFp4vpVZTBHCgKsjPQcJV9fn8Uvf1cAjzDgsZ9tjo6zupA",
  "key26": "5HVuYw4TmeYjt934QAVg7e7nNTibncgNHAYtpBwtm1SEqGgQNG73KDhGE8fjXcE3t3Pt3pp6fwdZjCbi1ciGbSDk",
  "key27": "5J9cKomiwFqPVWHirQiFpqcC4E7zX2yTYPDSKKpjSNLDmwKoE2wtxqtFexsh7QfZsnM3HMKgefRWwVkAQy5mq86G",
  "key28": "2RaqDBy4VjboBwL3xc6HQBhgFAQJVu6ZMvfZAuJ53n21hgKCj1YqciZ3B9Fm2XhA9322DA8Ai7K3f4BX6JxcTTYa",
  "key29": "2bzPC9gvpTzpjXj3YP7kBbSBd8FySXdYn76kVxuJY7zJKU7B5sD6v7x3FAEEPDq23Bj5DpXcweSm7fi4mVaNp6DK",
  "key30": "z6RwUqK8d37oRXThqdEqoDdBfxAPFABu7M6EAEzEimAfdfGwkUsHdKgrZggibpA6QUSX479vNZYSHaRAqz1upkj",
  "key31": "2FhDJ5AVLzzyA1PVMWxbeV63j5eM6qgGSMdoqDJvrYmueivyYejopgQB623rTvU2fiQy4Yo7wJFZTLGTKBfnPXxa",
  "key32": "5Ws91HqVVggwSY1WSRPGFC9EUc5cJmsQVUM1Xm4wXKBRtv6j741SWAy5Y2pciSeYymSPoJG7gqFP68hzR97LtS9N",
  "key33": "4CeNeWmNz4xn6i8zKqLZ5tntJf94j6qq5nEPY9a8dYVJxczK4DuvezCU2GYFXniksKod5RE1AwSJP9YL7Eh6aVb4",
  "key34": "2aeBhiwrhdqvL5kLhghB4nQjxZJycyBH2Dg1ZBJT6ekcoQMM5DShqUnNRDjWt5tbDR9HmTEpBMiSEKQGshq77fRU",
  "key35": "33UKiJBgn6SbVy8KbVMUu1zctpFd7MPWAAyTQ1zx3uCpjUCrpScVeTAp468J8NWL9tzAJqvNEWvCVK3x6XP8fC3D",
  "key36": "5SZXhBMoRVtbcuJanrQkbVRc3H3NYk65C2jyLrdxSaWZFeSWePR78moe4jYA7ycMNTLJrs8vqd6W6dTG5NgW4uD3",
  "key37": "67XhkQo4tuVFjnWpZwiDaxPkreG16SVoxz9B4ZF9hnd7jEFDw3dgStKkd7PsXQ9Kq6q4Y7Xb1K4C19tAxNSjom1d",
  "key38": "5iiVYbCjf4veX2Cq8Lf91rLSiVfcPcxkTqbGDQKuNq6HdfP532v2VRj56iCWutBYqUGKFau2uSEMXi94EP5NobzZ",
  "key39": "2QE71zzxxuJmoo7i5GRYZaZrLjmzNvWVMBFZFqLcystubetbztVGyyKRyPbm1fdqtHZoU7gYwAcyV82jNHpPsq5c",
  "key40": "4ZZeyYfjABwb7EhYZwR1uBR3Q39A2Duf7yejZR5JFXpKGzQ18Tkwz6sgr86ijTGE37cPYETwdbR2DBo9aUtEBC8j",
  "key41": "4ZumvnmTRdVrwmrND7RJnQGUFjxViqinNdZxy2xgdfMCsLTw5W4YmgftHeoMauU42xWHRzLYh2ZpndAMdk4ZbWc1",
  "key42": "5MaENQL8ApSogDDfmJuYAjNDFaRBtRYG5AnLVtzs88Pf5DRMrypq8gUP9gJGj8G7SHMfd68MqsoDVsM2aVbaEbJj"
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
