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
    "5bi74rqc9mqy42V2aw4pkgk25Fq3ijD2CVWxKXGWK9wuZCWaTuC4H8B345bPgaFWasnVe5dSo1ZMG7kg8ijbi4Rt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54UEuCyCYLTzZDmr7BaKLjHVtirFn1QHnmrNsCQNETbA7zzHBfbhYtHozTK59jkEGZ9cyj2kbUwqoE5QuJAQhaod",
  "key1": "2Em9C7eirKCdyXsj5HzVsRkgfXAKhXdokXMeN9gEAXTJTNK9gAMvduTFjWhXeKpE1PqCnpvz6TXhoq84Nmeye6fx",
  "key2": "ee4besZbNi2RxsgFjr9q51a7AW9Dwi4RkvJSRihSgXGzVEsxbicazPPTkqPze7ojWPoBDBzeWdW187VgsrdcqKw",
  "key3": "4Rjkdv5AsTiFSuJXLFwJXsPwvx46MBZpKsdpQswo83M2C7xKdD9ir8qV3K7ZpntXzqZszuoEJbvRUHfeGDqXs1VR",
  "key4": "4TptuBW3S1Yfub6QpNavdLbmSxDdtaHJfL8fSYRYycCEL6z8pEhrZEyPeQ2kFHh8pU17LaVont7kDoCqpwoytuRn",
  "key5": "4XY84kKvSoACiq8EKLZnb4fYKAWuLQq73Zoic9bqkjJK5gPipPYvt7nLJLMg9icwj38JLaoJDcZ3Ajn5o8d1XAVZ",
  "key6": "MdZp6xi9qW69t8PJks7ftPc8Ri8P8xBHTPjdWvU8r4D2aBNEFm8tc6M74zmPKhg4fQtXdCkes3vfR92MdQ6VDay",
  "key7": "4SvLokpsfAPKvJTeVpGqb27MQQRognLi7xAG1DdXZ2TG3v5GdNwCtNb6c5StdMfMUSeUQFHhWWEKyv1bJPFjgrXt",
  "key8": "LpFsDHx15VeTypiPSFJbzDLZZVeNQbVWeHqjFprwnzQnqVdkiZyKHqMssNJ5kDXAqkQEzgzWHaNbNqPmreYCEn4",
  "key9": "DbeHSVLhkNwgS1LQCKMQAtePKXqWSpTBstv2nuuuoFPHHU8cgYQ5KKWU9DpJZ67LxXFyF8kNRmo4rz2GWwUcR8v",
  "key10": "Bw7kbxnASUEhPrGXjRB3kryJuFDJDf6n4pENmV7TXhuvyAPsX2omH97rmuVeXVmzp2fmbQbPqN5FrmndoARvknf",
  "key11": "61sRcuLTPC6iV34BgVqf8xgKiprNaHTSia31FA5zYotXYBoep4qc2LFyKp4uvSHcXSMbgjyM8qVvrXo4Kc7qbwKV",
  "key12": "5QnwGoUzRiU2dw3M8oJJGr2D4URTC6k1MDZLZs5nZhmyTHsFWef9dspKPD4H4hjhbDXk4qA34FNNr2ejKu14CjGr",
  "key13": "9igRLBh4azVyxe4VmpGughyGh8GTfewCYCyNmrEqFST9voxyKU7dvB8gmUMBSYQTDH6y5nwtUHvFyHFx5zcxEtr",
  "key14": "2T2EdNTJ2TJzbpeMmAGR5cQ2tPbGb97UEPepCuFJK9dh7tJWrS7r1PBoCNESywmG7LjVa6QgcYbtcP4EVfBVrCZP",
  "key15": "GpxeNshxayn7kMjbjfYMZKZDhgeZKk2VKYiUPqXC7R8NPbmDNfzEjdkRvJdX6b5qX9zY8vdPXXAXdoTwLysUpCU",
  "key16": "5EjUEkyP2h74HuJoLutNjcD2qL6GFcxHsZP3LhYvjFCfU4ShD4coEwoqdTFj5Psyx2odoFzmWj1dah4KY6RtvTc9",
  "key17": "387Wkkzw5NexFfSWnhTv6KkLUg7LJjBgeePuKdZ937vE4kcrSNpE23LsmaArYjHePZSi8ahbeqWVxNxT6iaBYAkH",
  "key18": "3ksWmed1Zue5ECKMEPawaoooHyup1my5JVgt6edKtzE3Dy4XruDGpWuf17MC1YymAu7AiHQGbm9Cj55E3Q66qsqh",
  "key19": "2h6aez1RVqSnhiWLBmoTPaqXeoBWDF6HUewKY4GJE9C6b4gFm95bFXniCKXVyfocg3UfsNM35pnwHvEnyCZyApQg",
  "key20": "Py1CSRr32JLGMt8BVUMrWjVuuGDF8dTMivRwSgFPcQRgAAG6cRMokhQSmHBtYFnvjSFZMtQuwdzazSJi9BoBxdw",
  "key21": "4gduiNi3AVviKzKcn3WgWJJkaj4A93PRPqgu6mweHaSeT2EZ8MtppiKnAvV6cj276k4fEHPwi7tsyrjS4yghTLfN",
  "key22": "4vf1JQn3EJLawwMG7vnUcEMRKRvydduK2NXv5Yt7GaHVYnua9ZaoME2fNMXLCVUnLd93zcn1PtFasWa1nDhkcHNu",
  "key23": "2SYNjYKtTCQFoyUhUZyyyQN7BAw9GhphDrfVZriEcZe1GWyr8KUhC3Jbk7oMcVW9nA1q3cmM4cNPo3UcNGrbiWJa",
  "key24": "3ZEmRkQE43dLgFE7QfV1imVuVHvXiwK9b5eLAvvz3M5LVo9LsdY8s5E9oc4VF7HDngHLDBXHkKmAZfF59k45Z3zr",
  "key25": "36JZbCjHMofT8iMumXpW6NgWxqj5kBfMNosh8D3LJ3Geyggd7qiBkQF1NH1qwC11YWkwBGsUbktcExnJeVd5VeR3",
  "key26": "5AApNer4EMf85iT7mKsNs2CxRZDZheowT8dPU2YYh51yvreNuUwnhk68G4CTBkoPqfm9mdGkHxgJ7ByiGqpSXFwV",
  "key27": "5oF4wwV5PQfcLjrhwG8HtQsL7htNFi12KRtatLW7HD6dFvauaWYpd44Pw7jQW1WBdyegsyfDtoEyarc1ku5DU2p2",
  "key28": "56eXDzjTTJ4t1AUfz9jgT6L1CrnyZtsfZb2PvUkzjnr9kNmeJUhvY3bCJxi3stfBxh5PLcoEkjgQjGFR2ZSdxJoh",
  "key29": "5QwoySgYpaQacAQY7ED5sA54vGRNput2JG7RuzZkAjMzsikYoZrGi91eaGULgGDmhBSDVCEv5XBk8FyZtuv36Mhr",
  "key30": "5NNCyWpw2tuZMURqMsNoq4kbv3UQamv8qETMS79CgC2Fwb1x3AbRw9fCqhkCo7nQwAUf1mzkn4P9N3RiqXVJCooq"
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
