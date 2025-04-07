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
    "4k88rDCs1gfHWHB1HQeYgazFt4tt9trCA3feoLaRpHeE7PYXvTKZzy1AtJz73GYSRhTasFprUjZDkXZtC1Zm7TT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xazHs2PwybEY9dUaB6dcoatmLT6X2wtPi8SdzNVP3Ljy2sCCiz2tkDp7L9nEheGfpWyKkGb2BcEcLQYthK1miXo",
  "key1": "2H45V18Cm7okT1cGwgGrbyyKYm5frnTG45KJ34pQeqJJYT3Kq4saQVxkjEGwcsxxxYSY3RmYbShLmqr54fHF9YeP",
  "key2": "S5rac3wHPyxXowQQwY6YXxHEajbqhQqEFwd7DpBgWSShmcs7Wn6my8BcNE8oEbo2EXpHroh3HsCkCHpk8F3iXRq",
  "key3": "5K3SMFNtYpkrT1XvAfoZ4gsGQ5HT7WGemJBJvXXK48acvjshMucTvJEFDUtJYiwyasco9k5jxmLBX7TxKojG9tdn",
  "key4": "QorbSbW2NuuHmeKiuPNeFKTNfD546o7E5sT6fRUK1pE2Lgx3hyZSE6ERPVK4SmEARQyhSuPZWfWk395V93UWvcU",
  "key5": "5c3LWD11QqZatYgPJ9Li3qDtzJ6u9DAGno4QuukF3J93TCgBYLaE3GJ1MkjnFhx8XSRdJDQAsHrtybW18xKULWkE",
  "key6": "yJsBCMb1w9fX1gvRoazXJvt7u5E4HNsGHjVYRtu1Y2ReHDTLMBmv5Pw9DM42xvPaMTJ6gSMp4zWiN4gESQ9Xz6h",
  "key7": "4YS9zgrgUWSYX9ywFWc7VHoXUnK7BGJaaUsLfHYgS1hXpmDaLQB6iHuRYyUhJX2omDK5YxWGyfgrFgJHM9FhKhoL",
  "key8": "dwghYMUabBgmn4L29oRA2n62qQcb6N5DBNyo1b1bKzj9YjUMrppChCN8cdW3FLTJMezFRFjZj5w36JYeigVaz6x",
  "key9": "FEMgV8m11jNELSJT6dhZfaYnUnm9BAEATEMHyKxJEnFCkXXr88hC3Zze4GrZzHGvQNMLJh5Cj8j9J13FJ51d4u2",
  "key10": "4MWZLXK14WVSxDY4pKm2uma9C2uwr5iQ6AMzBkL9SPaLDcEkgi4icVxqaKy1NgkE4XpdbBimTp8NaYQYpmDJzNqw",
  "key11": "3eLaLFARdPaw2edVVt2GSE9Fo9sXgE3Tmcapw3EkMuzbiehhtYCsguHdCwUwkr1x1VDGK7GcKHf5D4too5KyPdRA",
  "key12": "2K9RY38bBbqTYAwMdnyoZipSwcJeMn4bTBDWSBM1dq6GtYLsNKG3xhMSFTJyL9zzfahBp8zwvSwePZPFHc1imqab",
  "key13": "ZfY9bPh13tjGRryGtPPkxrTm71fyYXk1RUb2tEUcKBhVV8fkRPzWJqpsW86z8XY728Y53kwyhgwqBxTa1VVvEK4",
  "key14": "4UCDnPJ6YYiGvkpQa13mivFS5aT8wk4EpjtFcrCLLpJYWexjvW7vxJmGpmVMARMQepdgDGGJ6hFp54Gv29i6iS4s",
  "key15": "2VqmFS1XAwJ9SbCkmhHaJ1Hjxn7K8BDAX4sT38LstjT1Ke2EZTTKTEV3zRkHKeHPNGPBXDnWzeNCoFWqjkc5R64B",
  "key16": "5pp7n1ZmQBpnn7w3HjpmH3ko41CrYP99Aork9DgDJGJ9NCCLgjrdDLTHnuN1CyveMRABxAxrdCSg1UZXw2m8HtN4",
  "key17": "4fcEQFDX5SzAt7pteXK5sagPdxoC7WRrbmDMmpQwAM7F8ujrUjLM3HHfCudZ8yUPGLzhQBgXiNEmi1s4rRYwkHFz",
  "key18": "5sJvWis9desDRf42RuiB5AUk5EBA1Niun4HYoNbw5XunMpE7Gz336tmtg3wTZhTDA7QdJiY3D1mbGLxFL3QEKVeZ",
  "key19": "2dow4RqW26v27sETqJPamkEML49LbiaFdYQipvKkpskN495XXsD5T2SvNvBFXQfvfHC7ZpYGWoL8ysTEQCWSQhDr",
  "key20": "5Kf1Lm7ECYm4Cvm58eNSju1eTVeMCcZy9gVgeTV8ecQ5QC7Fj7LPkqAZUEfW1qz5uDwiK6Kv8ZoXdcW2iogCg9tY",
  "key21": "3odVjTwYMjACkTrX9UTWJrpproPyLAX463uESSdKJtvh3v6LwfRxQ8jwFWFTQz3eCj9i6mqq9mtw7Y7t8a8KSQfW",
  "key22": "4iPzstf444TQ6eiQw92pUyYMCVqu9qEMv1wB3TACEj9QsWdRD5rk4DUCLT1Hs3oQnNtKrN2yiWeVECpFzu5jKWFX",
  "key23": "4V4PskETFpA14XkVRZtafTt7tgnTMp5CLZP21CGxv6pHAEz43xvTRCV7L4njMo3AV2UGPMfcTtmiBFZNUT2AU8X7",
  "key24": "4JeUq5oL5EsL6w4nZHzQSoYx9whqcoWiGKHJbdLSQ5z8rHimrQ5yGFbqE38jeSFA17QLnGKeVavfosdPCyvxEx35",
  "key25": "3zpsfh9NCfkUyNiZRZdvNNq9XMX6tfwCidxxRDe25Bj6tiJE1CsA4Vrh2h7noVV8QUZPn57NXNHXwtG51WmogjWg",
  "key26": "5Erjd2VQN8PzRPhYF94qmk2LgG7mnFCACNmUiG36wRGkNHJBYAYebm433jT8kKNVKphzKtwu3H7XDeLCNZ9XVVw4",
  "key27": "5afMyPRtjmPUmf37VWw9mhc3K6BvXVn5ewP4APvmuhG5SywcZA3Q5EWfBHpKmq2iJdpzFgMBzLpmQEHNcV7ivTB1",
  "key28": "3TbTjLQLtcNCVurE5QWGLNBW64wAGvRcuijQk9VAAYCAVTWrTXuZ9xbd7D9cZccXkQ7jKgb6PRercep73fMCydJv",
  "key29": "3hsq5WsS9yxMDAWFmyy2xYK3mfJivq6hzAKBCTTdpub6nVe77Wu68rJ8ccLhCNGi23YTFfVgKHnsD5LVXDm1V6sJ",
  "key30": "PBwQ4AC5rRG4uTYbmjSyXFFnPQMyTaNiTpFCNgVt5GzHBHC26AU2pYSw3L1nCdLDaLij7sT5AUaVHscbLUx64ZZ",
  "key31": "BfkAo6TuzbJu64oSeie6rmsbMhBob5kjG5BWYNZw4HyZjRQ3i1XjKp8CaSVmehAJwGALaXYAEwg138ysC8R2U1M",
  "key32": "4nvgXMn6TgdXz5GmarDqxc67VxNcDad4Ae12CVHBkLSqkJv5H9GdetMkPHV9zqNT8cEXeyrgQRX6KtsD6oy2avcs",
  "key33": "MxsPc2UBhCcwSytwjbTVQF7r3TK2jjghHDpRKjPfjrXDXgxti63wvnt249CSXgwL8mpCkH5bYdyPAo5sMFfvo53",
  "key34": "2GSmihpmLt8r6MncRyvmuv4G2Juti2ERZEmEY348CT2fvVh1wHt4kMyNMUE72CPd7t1zwkLPQ6YAJ7PzcB3ySdRX",
  "key35": "63XvepKN1sS4BUcHh5v3ene2smytTWnymVZqQD85LQBs6rhABTss5Mr5HSmg1edkWRCAEjqFZwB7NVNfAq3UNWLh",
  "key36": "4i7gv2v11iJqXSzEbmTgcJFBVzwDryi5X9rSAgtjYR7HwUQUgRLSXA5gSDLruCJ9mD28GkSwcgDsdZK4nFZuGfPn",
  "key37": "2y4sL6wQQXovntWSrmKCJhULZMgidYQXVBhE3pQkHSwTbZUy9kmpnHtXAJFtzvKrnX5vsauhRFP9pGaJSwM9YXJh",
  "key38": "467AgFDA85RuMaGyZyTiUGhWHT63XaaQTUrD1CPR8BUCztGHV8cwe3cH1kDZXoc3vm7eAf1MxDYhxLiXRzNJgCcG",
  "key39": "5Tea1ikQ1dob5ZV2ESv4Q1DuPfc2qXg5P46foe6ca4zERh2UZDZRgbQBFs38Qbw6DhZSP3c1Tu8azMawWTUe9GTf",
  "key40": "3hYj1TY9hk84hS4SYvP1pjUFpbzGLMXZ6GcsB81Ug3P7vDaCFg53P39HPckY8ecd3tX71FenwadRe5yEAj26h5bM",
  "key41": "3VggJDJpmAEweG3KBK5RpAg7BJX5S6pr4SGU3MHswjEB96ryaKwtTAMXXvXjMhb4t3sLdwU2cbrUmWbrsZrUqeq5",
  "key42": "2LhXJAjcBPKx923aQSHYywJQGSgnNfeoxo9xw3nmtZghQtAZfNQEQSjf1mNpAeGV7gZyaPwxBhyQn5rognJNaSfK",
  "key43": "66RBoyEydsvw9Bce4MhzC5ZYwmnRRDr82PJyRMnokhxDhDiBQNdtB2eJiArpAjF3ZiSCD85CZFyiL7LfK5nQ2hSu",
  "key44": "4QbKcHrGhtpc46EoRB5wK5i2Dyvnq9msCGriELnUtoGF9ZXVQV3631j8dUFJpAtYGzVtdmWJBcNBoBziq1MpkkW3",
  "key45": "wYtAaZCJcQLxHvSkseQQC8g6DJAosNxkWc9c8bP2Acsi33wNZyUAHJ6cGN7XDgfexMc3gDThi1jLtuFAXCyN56h",
  "key46": "2y5NYcGGSbji1aiWUDjpBN8g5HgZ3jFkogweVcqoYoeKka5cEcCaeRF2nWHSRiBz7ouVpX8Kjvpv5rE8aTLzfXNg"
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
