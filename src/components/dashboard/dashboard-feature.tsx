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
    "38tLBe7u8DWVnymymenhgd87nEpWzv2rAu3ExZ1q5rk2AiKXGxKLxH1cLRHZUZp3y1EUHaB1kcqJEC8dv3ooKQAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QjA47mnaYpaYU5UMrzcfsaA387mDskobXSukYLtNqyAuTCFu3Fqmz9AdKEbvCFrngNLha51rpQFw2br7cWgPH6G",
  "key1": "2pCBkDYuLNyg3gUvtDzkNSDsL9t7AmnkRbbPEZ4UwLqUNBrgG757c81z8GXbXK9kxzknbxMjQZAxZhD1rMjxovCW",
  "key2": "5rc6DVC8zRwwnUGH1A8YTRNFB8b2ZDhvET9cJq3sqjSP1xzoHKKv8Nmmci6WnwYYToE2U69RTxjqikBcEttDuig",
  "key3": "5sqWF9DVbhd4YPoF6kptPF2tDByKsEJUqK5U1oQZuohCq1g3cSosUfJvd7XiCoPsFG25uohDYJnZitgpgbNb8VME",
  "key4": "31k82n5uaQVQfnnvkxPoeEqSfNwiCTu2wJiSFpiCEh16AhsWduBDja1bMqh5SAEeZvViL5xme6VNNKGwS7KJ1FQb",
  "key5": "2CMoVu6Ba8gAfbNWxxDL2kQ9H6MSVW64EqFwCuc9D6wkjRiPh9GNJhDFRXiBu9rv1Kxm436quzkdw1pSc1QUqd3n",
  "key6": "5WMw4DEeHg9LaqnbRGgNz7u9J5je6pKGMvcbHmeT3VBttVJLWXTZ1zDFjujHNqAP9PzZdoWczreHhzgT749mfYeG",
  "key7": "5qpRW1jtLCs5ZD7SqckVfFduyUwujfomXdjehzdrZB1kRTQBkr9ADkPRh8zXViFWpkSHuh3zrJ2Np56cmk1gpsXk",
  "key8": "2a31S2ZFip7mUFnwSDvGpF4NhMejkLpFCF4k6jDN4pVqy5Hb87Mq5SaYVdbP92NB4GdyzY6SFvxoLdANGK9hcVYD",
  "key9": "5aAjwsMJPCnphKJj6whPrHpj8MDf3g4UN54FsSJAZQKME4z6311V5ZqKCwxeYyN2uxTPA2HVQpsMQS5nyutDupKf",
  "key10": "54SDjyv6neXmME76ke2g8UmNhhMNNusqjFv4b8DMZZZUnQnVf19w6vBmELPM15T6aZdF7j9bCAqB5nuMpaqtShU5",
  "key11": "4NpvAN1iaWANef3PFGiYqBifGH3yW86axRCPaMfFFU4tt2QBkPdT7cKFqFfaeoP84iH9VmkVK21aAUfEmsC2hzxn",
  "key12": "2oGhxbZW63dDMnBqxVHS5XeeJLL85LeVt74Tbc8xipHEAfREFiqpuZ15UcvMPH26FiEPoBPADnhZMMbp3dKUbiPu",
  "key13": "5KuDffGUqKCMWhpzc9SEJ4KZA1oGw9caqmMYoVuRr21Q48tjAgvucjo98S5wohURQNi4LKroiQfRnGX37caHtqgM",
  "key14": "2thr7b2HZCQafaYm8cFYQXLdCmCZjTowyWG5F3ZL7re8dKwYjbp53oQPNMF2etwfkFEkqM8BBMnDo3xRd86xwLoV",
  "key15": "5nVUzpxBGK8yJciDAgwYz83NkNM9GApCZxJvoX7BjghN9h58v3C3zoG4ZtrAxqTLoDop6SQ7s7BjgLE9SnnBXoem",
  "key16": "54MeW87GckQawQZLHiSB6jdgBoJu2c8Nk8QygZxoRegXGxCzscf6hB4zVs9VsGJ1CjbBqmyK1hswwmisodazB1kK",
  "key17": "3EpJvdhrWzxCt9FRDD1QHw7JLCCgZQyZxkepCBt5Z5RsM5Vy2FkjgJoMDAEUS77LVnTdA7y4euaoZ9Z72GyrKUQx",
  "key18": "5yvVNKMpXQVfbD8ojp74smYbXyYwaZGKKSp9fjGVEATCTsfv2HErkDcJKYC4n6bpZMciLzEwN2eHB7xcs1Xa1Msh",
  "key19": "2CWVsx56iJAci7ELKeHxyvavTDa13NmwcJ4zUEcQ2wfqpp9JhsQdmhfcra1sjHoDHMtxbBU56RPv1Lg1aniBZyJV",
  "key20": "2EaDTVo2iKx5o9GaR6NpQD4xHJzcgeUk99QXvpFsX2KWP2HC6dEt5k8t3MagVPrk1EDjCmLmKUN8heqAMzjqLwVo",
  "key21": "46XtFig3U8P1t6LJKpNqZfzJRrURDnEtx6nTfdhzDSnY2XsrZX6s9ikks4GafX13pVvRUQrMhGwGgnmb8p6kv4AV",
  "key22": "BtCDtzFwRT8SSrJSYGBCwAeebWgAWoYooG78tmo5p6voerVujh2aCRKakZgTGXMoDWKcVVDyX1jN53BFTGgnuFK",
  "key23": "5BY9Bfyyt6Pc28mdG5jLNJAikeb624EXKqd3FjhVnKBKGVTS2c2HJEqqj5NNEhGfNQ3PKDS3e63P1d6LLrF626Zk",
  "key24": "5TBPwQMxz3CrzLr145ZfRhNXkkUFJ92jSB8SstZyykTgrk4JvMkDgVm2am9DEEoLmknmoaR5JGwGTRYAC7qGr1cv",
  "key25": "zEfvSZyNyLE7uEsmiiqTf6RQNaa4W9YpdbopnP3jxm8Q1m7Z6emopKtVTN3cH3hBFFFV2j7unU9Th37YbmsAppa",
  "key26": "5fnDhDz6SRwpEVjepufq7AnnUyVTTLnuMeQxJni9AxSNCqSDZzfDSyQStTxiwHTMNk4JcjnQWz73GHEF5WbfS54P",
  "key27": "5PpUMws9wFTZprBCD1s6u1Rx6gvRKa28bZGiDEVp8npAJxytKkvn7j2dzmboyfAHrsoVAdS1YYU5ztbcSkP3K3kT",
  "key28": "5GfiguS2VfeRLjHhBeG163irbq8YG7eSEsNvjUHEnSV5bRhaGtr65irhvejimqhB7CZVaKFzGkL186RdJp82Vkgf",
  "key29": "35kWf2bvuwfL7wKDfN9b3CcrF91E5e85WZYebu1ukyKcwXu8mrbZSZ54hq3uWtCjdypJJvsSZYdzWuwjrTB8H5mG",
  "key30": "6321E9x9yeZigQNqjrKDeNEcZSAwwHiyvGRDhUzSterdiCV1vBCTJYJHNYiUPteMaGfjvayLNBDzcYTrArRExYXA",
  "key31": "rY919pEG5Go2gim5ef4p2Y8AugNXrMzVK4nveh3swnidYADG4mxHxb7yP99gY7H2o2MGGP8a3DfiTiWzUL2ZEar",
  "key32": "4Xp1sjys9y3ReUmpk4LYi2Nq4ASsG8HFp7nWwefv8DnopP1MUdCcaEf9PCwJF9g86d9RDHgv589UNCUbU9hmZMEJ",
  "key33": "2UGJC5FDXq2Pq9FHq3H5h6sgTD2hhQ2TJTCwK6KGEuVL4hTt48xqznEBMp6rTbm1kkSCgDk2Pk1cnzMeh1YH66W7"
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
