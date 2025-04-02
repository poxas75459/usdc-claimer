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
    "1URZtbnafwsxoNH8SSTNVy52GpoTATPa6tKhbMx59mjvqgLrn45VPQzaGykqFfhsK46oQRVsVo4dWwpMNbYKoCq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vh9bprcPmoTP3j7m2AMgs3ru9W2BrnFQMGtBQy5UQbuTvM63ZkytcTqybAvAX6ntKMiTP8vfoiKa71HiHPq1KXs",
  "key1": "5h3DxPqUGyb8RRjrMSa3KvjyzmM7nKFQGonqbivH5Kie2b2Rrd4Qd1ySzW3cQEf9F1D3Q91JwzpLe8Jw2dBbi1BX",
  "key2": "39fWcCCdDH3t6eKN1FrAHjNo1ow6onFxz9sHoPvH2ajqjvNvxWZeULvPY2ZXdwYa71S7zQB3APr9JwzeWB8W8YEE",
  "key3": "p3uH3SGr7wggT1wCZDdaHbthvQu3iyKm897kvoozuiopmvRJMwBpwqhKyqUSfRXpxp9s4zDXtvanTuT3G8MMk95",
  "key4": "55nxVhqWWmsGyTqdEyrm9rFbB8NbidDR9vAcGbh2Vp3D5Z6NQEJQxrSdKu6YoBaLNvGtKoZF1r89i4XAvHFkWYGT",
  "key5": "2SNQu4QrnMDMuyt6aWQX3o4FmFd9dooAgMKGhtjx1K6LuaKcUGD3rb9MuSq8DF7xTRxmLiXXjPkva4H4N7ALQ9hy",
  "key6": "5b5zUrpuYxe1yFVaLuZgrGbPSaBB5BJc4V85kAUNvw6gBpWvqo3dXku4SE5R2Hs5CA9dbdFhpRVoArLLG4v3AWd9",
  "key7": "56ytZgQVfjKMec9YEC4PPctXQi8f1HCo6Bk6grLXi9AVELgQbXK5e8R9EuegJjcSVGxBYYMt68M1qXcnqncsbo9f",
  "key8": "2K9q2Siw7aPH2sRjt5jxTm4sZgrNPfEmAHt1Q1UYYMatEAkVr8BPHFKj8cEa5vrp8gxo3vFpp3qVUE1Vry1ovbnu",
  "key9": "rmkA74Ze9MqoQgs1TFr85tVwaic7ga6nH59wsZx9W3RHBiHFNw1vsJGovVQ5hVWW8zNsq8WxjDPTrEwcUerS6eS",
  "key10": "5DRD1dg9aHooRc6xd7HfhTQVDvySF7Q7Mc48awsm3CHkZNmKj51j5ieuKjHN6pPNVkReQkjNgWzkwm2FzNntP8u9",
  "key11": "5eWEq36B81Hr33AzNxEQYUuzukbndqRVYTSvg7uUr3Q8Za6kL73RSyoHQ4E8e3Z1gbRek4Qm92zHpyLFehcRRhgc",
  "key12": "3QbBfqHwRmnyaBF3wq1tZHpoPo8n5NA1PVPKR6LPpwHxJ2BWFyZhLLXojc4wdfcdDisixGeiQazoiSipFcsApC1f",
  "key13": "4k12MJK43m8cRgVRmr5ZH2bm5SLGD9kDbaxHUdy7rEX9n7yfpfmEC7LNALjX8DpR1oqmiMky1n8K6PzdmFrDFAmM",
  "key14": "3jRU9xJNeZRAkQQqu7Dit6FQfsgVQunTe4TJ2vG4VrM76XgXFueZ8jhFcsERrioSYvqTsqNMn86pMqNBmwwjYHZM",
  "key15": "6uLuBzMcwP7Uz9AgZT7Yv78W8wBvr3EEk5n8YyfT7fbKMBkAN1evk66wuykMqbnMHMsFirdYq3T5gVHLPi8vhMk",
  "key16": "Jzmv3T5B3BDGKsHEXnwtLTJ9qnyzoU6GNqHbZUJhd5KCKXjnh61kdik2iWomsPX4qsPm6uW6v8bJgttugNUbAom",
  "key17": "4oHztUf8n95KVorX7fCTFfUJUYegC1HGgkca9xwAt5j5jdindqDguweBP55dLyd5aJ8WC5pJ8FQQQ4NqXKxcGdYg",
  "key18": "5NSqfohjQ8LGK8Fi3Z57ekkPPdWYAAMC3sLDgbTuCyPNdcCsKRg2k6K9JVBPwnwxGKQsg2CvMoJiamDm14mtouSx",
  "key19": "AmLGR867gAxcNYHpA3BjGwTdMKGwDTTAMAiXupNHTC9sfzGagAaYas7Jt6UqXsD1qfDA2PZyrBtG5RAunFa3szq",
  "key20": "3vrcAw4BmQyVxtkH3X7AaDJBtWzQ2X2aKCrk52wxTDdPgMRvzSUJCxcgQo4RocUgxfKLNSEeaSFLML3cN58Sc4Xh",
  "key21": "63y2jNLdKbmaGhDqbsUjrNqDUm4xgqwgwgrSV7vtGJBzYDpek3RDBPHPswmyKYEaKaa88UFGpNWFkwSczNvrqyfc",
  "key22": "67RnykDEV8hLom98mGnw1krkVaxnxSRGMEh5MKLnbMSyZdN7dqsGddNzYyMM9evYMUPSVQ6nJkaw6bPXMhcx9EDA",
  "key23": "2s5JajT34188H5sckimGGJvGNHhC2r1k2NvqmzTE3JMWb7HXJ1Xc6tR1GDkLMY7aHzSLi7CkmcFMqjgSKZZDNXMZ",
  "key24": "4Voyj8GXrA64GiZtDutF9kTAsBoPjKNXkNjko1oVgGszkSEGPhPRbEeBYFgTRr4uHxNUmzfRrocE9i95ZmcDZiog",
  "key25": "2TohCU2RYVmw8T91TLVbNbR5TyhqYzEkh6LB3WoZuZ8CNWM3ZkvArxBATkx958Dg351nM7ZGH8Wf5rEPFgvrLR4Y",
  "key26": "597adKVqUDLtzYz7DH7nUqtGwgLJh5MEbTo6UcCu5dF2NemJ1FoDePRizSCfQDsgHoWJ2K8hgLCrxtF6GSNUfNaF",
  "key27": "4j8MWfjJPmnTpoTqp4BagChcPZAvb8NTm3X2HMkkBN36NhueWh1d4e7Eu1kRcaujTR2TgRwPUaGh1nDdGzTYB2bc",
  "key28": "45rmkbvSHdhR2nmbQTNoCh75yncrN1EpGbzqJ9nSsWGf7KUMiTZ9ZF8av7SzVXv9BTmfLJAFXDCbnacq8DA23sLX",
  "key29": "2ZxRTZhUsWeqaTzmiFZ3ht68v91LRu9iJPdwKP9FTYXvciPYvszntaPQXoGagYCYswM6h591MWHBbeuMTjSUSzYw",
  "key30": "43pVVCefwGX33t83T5mA3fvq2dcFZp3Gt5HXpqUPVwrsBgMTRdMiy7LaJWpnqmsgZpiEJJKRJuNg4887Teq5oe48",
  "key31": "4skkS177Dhk48trURPAh3xUbZwSQch2fxBAYMWVKW9gGhFXGPpHHLQusKY9cwt6y5y2PzcEbCfrqEqxapKYn3LLJ",
  "key32": "KFvJ7veFsG3T2WrKt9g5EAn7EejtvPQa5tPXXnPBeQWtRZygRXAhAY6VvmTmGvoiRHZQosHHjf3BZRsVFmuZ5Xv",
  "key33": "3V37TrPBqcjYzKQpw58pf4a4JTQfbFdinPF2xHMqGeJ8Z5ibPmR78Mqr4FjvXXMTMb4ynAkXnqEfajj3Y1LVFW2V"
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
