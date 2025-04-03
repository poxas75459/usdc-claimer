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
    "27vViaoprNHGPfpLNUBLHax6u49ehk74n4asQFp636QMx7NGDqHKQakwCDKFSqC4x3vAbVFnyi349LXAYkSq63KB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47YZjuRkGe6BaZtqHrmZwsadyaebKDBP4LgVVn6hRSph6S8bJ5D7Qm4wHGN4MKj6qLeJbmsaMdJmAeQryBshsh44",
  "key1": "2i8bp43e39A75Up5BSbBTCfVHchK8hsbPesyqdv3bFh91GiHgVLLPiTPJC5ZpVkMRyMsNXncp9h4egAvB6t3goF",
  "key2": "FSGWdpGGLPjJHAzihcQCh8rHmXQnohDVQw3ahrnnq1yECcXmyvn7N6nM7nxhLBjEreAu3Baf6DNW5GZaPU6VhQt",
  "key3": "2jmEBY7MMwqyXu1YMxrK1ig7ptdfpJofkoEwVwzL8Vz92K29tzi44jehyPckakyFqYWHpfgwJG8iaPW2tbGjTYa7",
  "key4": "5Fpk2tJ3iaZnbfQLdjvnDKrqmfDEvRcgRxCwvJFfvoxbXU1movtPKXaDR2naReX9KA1coLpHaQV7CLSRo3Y7ozTT",
  "key5": "4KjEh9PyEsap6SnuSUX14XjfqWdFZm9h6oWVQhc3uCr1CMevMiThBUYZcJAcTyf3e5dt4ZALPn5fewgGgHXk4ffb",
  "key6": "2hqX2hwVn56u6rfpyK3DVtQwQ5NMogVzXVDDZLKPSJ9xej8zUUHPC1jNrc3T7uWSHzXp3YoHn2FzSQMwqriECogQ",
  "key7": "2UqbuKfEGRHzxrgNwdHHay9k4u9gJEay3tZmTzqapUFxoPQMZLCUY1fVpr6rn9GiY9uFAJJKq8j4VYsXniVKSXdt",
  "key8": "67fxjCAD81QBipBX74nfPrZ5f21n3qjah3mySkU6qvs4bF4jLBM2PtAFobAvdyDgrKFPXBWaBU2a9Dd9ynBByYqc",
  "key9": "3DsKJYNNLQDYk2Aw4dJzn3YZztEGVyrGV38jb219F5X5RwDMX7sgnFRVZmxjUXgTtJSMGja2YCnUYpFP9JLC2Qag",
  "key10": "37r6bBZv1B54oTcbj1q3XmVq5dydxhegCpX1Vznj8UHtE5tZRb1nHz36hndG9gBEcSm8wpyT9FGy4SftJi4L1eEr",
  "key11": "5F4G5CDXGrxABc7Vd1EHm7j7LeJmKN6JFkcDsuePEAovrgjs6nCcjxnNj2jnfEYBbYy3kcQL1WttxozD96T7Ep6L",
  "key12": "2yzRXviHHz8Hc1bZzfWiLqWo74RWybgWGavSvQzEWVbcZDaW6sKFsLMn5HkueAMa6p2tsbG6VF39WbAg1pJ7LxqR",
  "key13": "2PxZYsnhYsLg7m2Shm6PK6kAv17xHZJ6vjTYcq5nt7anPhMedHSgGBgR4T8LzfRkYTDEvUucksvuEn4P4kPdyTS3",
  "key14": "4QS9yh5qzicxVoLoBESbFc4sdcgXiyv7N2Sxb3AEwrfYGiyrpe5k82xHHVZyhnNmJjzgEWKEpEQz8ZbetGsE9SeP",
  "key15": "26S2ZwA5CoZeeGBes2iW2u8iWX5r4Bgvr9EzoXhmkUJktQoJ5ud9pFcAyy9hdYV4RyF9FRDCZAArEn4MtibY6aWm",
  "key16": "4vqfGUU1MCtkFbkYiJyTZS9w2nqrNvZ67ut8omsyVXmNXQp5kEC54SDDAxUpRreZSoVGJ7T9wRw4uJ5hGbuaUJgJ",
  "key17": "2EPXfvFj85YarP4W1DBpwYBLhwnxZ5diE3Qf9HEkPYfrjArqpCMLD8vu1SuPAPbu3FeDn4tVHhLC2VcV6BPEvGFt",
  "key18": "5m44Pv7Xsc22xSxpFn7xxhzEkBbMWXWoageGV9fCvixWMc6DZTYkaodVvjgRPck9QY7AfmVENxavAMWPE2ufbobj",
  "key19": "foBApATkekEhbmmLvVAFKSsJS3zsEzrFUwaCJPRKeKaNUMKZacYGje7PcD4xWgrwVna6tpDwr7iVuniakTvo1R5",
  "key20": "F74UuKWrEyDYe2EQjXeT5ya8dicy3YDLP55g4jPuxCXLNRzFcVfattuTRftT8ZaZGxhaEPKcyZAopsBAExPTgzj",
  "key21": "2CFNPj3P7o4iuvTGqVxzwtEmHGvxyuAXCJeDQ7ZBfXpmE34qf6JVsBrNsYaSE9HmXAKCL1emzpMTS5XJDskkpvA3",
  "key22": "4qSTmT38Zufn8zggSzUN7tBHgsxxcEuhETEqjLGaA3DryiGZKMptvncoz1ovL7kx7cTmZz1QAT7M7a24KyZBaGb3",
  "key23": "23oPFS4smUJj4Ey7SrJAC3vFGozBWTU78uNoKN58uu1ff5SVJ4aQS4ikeFcMWmAW2UNxQ9gGSgtAYFoNp2d3wubF",
  "key24": "4eqqudnEwC75LzZmxZ7rQMu3qoGGJCRP7dTUC7sfoeb1mjJJ39t7tw86Tqc9D2mbL1zSb7zPtTvYv2EyUpEdcw2q",
  "key25": "5QhkVxXUcfmWxSYeYRxz53ETDRSfNhdWjvxniD2ZLUCojv8aBSqWDgWjfiU6cYuwJcxghpTyE6PU7KBiCBXdLucs",
  "key26": "JayhChJp9qBQzb9F22yHHtXVVJea1icSmfFNoTTGK1aLKFxp57yk3Vjq2516etv4zrpWyGiJgrYwX169AVyP5A5",
  "key27": "57cWARmEfMD9FkAAdsu2NeTXn8A9vVbkxPhbrgQkeNsdaggMvCn3HCePqzYe4D4E4CXVF85Nskmb4dcz3qJWgFpe",
  "key28": "4eT2zMqcroVoStJddgoYeudAh31ivFr2AN3YNdoBukMyZe7zsiWYWk4erkMXih7PVtYi8So11jwEKkZPiT5HwKZh",
  "key29": "5tUE6jYmitpkg7wV6bxm7PuRC9tEXi9tgJm64b27yv4NqNPzSpo8eFe3ReKT3vuDKx4ePdvNfjSF91xwKzFJQ5jz",
  "key30": "hk6bLfdV4M4DTCpn5siLV7oqMQrhyo4rY4NLRbkd4JGdA5mciwx5k5zm6ssLv9dwuFYk8hccSov9m8QQAo2vHJ5",
  "key31": "5EX4NefQrZmjZQNZKysH3sMikFzKHmxUA4pm1vVvv7X4wntWnpecZ4rTB8vRo6X7sEz2MMP6Pyk2awcx1MrdRD77",
  "key32": "42WfxVqihLiszKiLTKqLbXiNhPfXTZhsEEbgwdVWej5JRBjjLFTvou5ii5qrc25SDNfKQxQgtzaF4UxGfX2hAbJo",
  "key33": "2fn8fro9YaX5E5V2X3UaDkLogZPzkty1FfWYc239kqTaKyP297cwdzgNrJ43Q2FBBuYc5Z9trpgxPnqZ8ssqE8aC",
  "key34": "2peNLTQSzhKYnkuzUj2eNZAzxpQJ6cvu1pgQ2EuH23sSSdFidZHAXn9URfcremGJeDhxasQYJmFXnzXTe3Z8FZR7",
  "key35": "558NJ5rwS4vmfZS7t81SGAh9KiRMx9R23XwCkFAfTKoNdkFjnwfkJJkAZqLVDap6Ukz1WohTbaDKUvzgZmg2uk9d",
  "key36": "3hFjyY2ppQ3e7eT3xHrA5TWk2YVzSN6mttLNbfm37F7HckRQZxaK8M3sFZqsEjdXB7fMFNpJRRi7AXR6HGNFgM4b",
  "key37": "3mGf2WEV671SHtphnh2Yf6oehV833a74QYXaTxTamMzgYDfTrnntndX6LVwkSjvkHUKWBAoHcWvUdpCJCqUygt1J",
  "key38": "65ytMMYjQHhBTicCZvVy5qaWzaovwdxANpuBtHiJ2YFWkG8Fhy6Np8tgeDqFTNsWQSqqoHK91uqWdHZeJ2peAxUL",
  "key39": "D7EtHxQeYd1KXFQfia5Q2a6ezzSvs6E26SiYejWuFvD2GDP15pqHsA2XBrK525drU6UVij68paK9zwCNSvdDzec",
  "key40": "W1g25WXejsoXL1EbSPEtqzhbA2Vcd4LEBAzvYhaAVNBnmDCEA8ThzNER2mpNj7FLzWoxaTR5RhcadbBJR1gtjkY",
  "key41": "3zEh4C72pGFZnVqG6QKg4rLYChR7Fm5C21W5nHnXnME8tPLUoE1DB51GfCjgShvjxjyatXn1HaifK4L5ipNtf5d7",
  "key42": "XmY1ixxcpyfsgqGkehJ4zi8af6k18UyAmmdgm9PjjK1BJuHCj847LGKt5FMGdEdNYCRx6ayEZrTdGQY8JT2Vbs4",
  "key43": "5X1PuzY4rRricffu8tLx8ruaX2ipZkjJEf6RawcCyAUnPK7dv4vk32oCf8QQ1EYEE1NgVSdwkYYhCTaknwsg345n",
  "key44": "Jo2S3r2WJ9arUe9jjktNFz25z7ofXvEbZLnuZoyVHB77SUt7Wks3AzrXNjVNjLrsNrBLbn2vbvQu7bmRwqXcWco",
  "key45": "2q2E8vyeRygSq5BjB9VHHta5kypAJ73Ev7m4gD6gRsS6i1w4ZuzGW2kedRQFst3vSprudmrgdaDVRsa8seVGqfeL"
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
