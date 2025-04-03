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
    "4VfCozxmUqk7fTShKbHH9dgynkQLudkqXj75x91MCmhiDbGQDemqkee28Z2Aa6zGvbmFXDnkLhVdqR6g4zgiMGmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LgBtdcY7uAsAQxFvQZzkvpzB6v9BzphjXgHxbn3ATHUjo8rHZQbgfZZc9VLwxZASraaCC9JYgvSzU6rt3Xchz9T",
  "key1": "35zBF9vBrKGmpncbXnjeYx57csEEJgPTnTqEJa7xCZLxeSaV3Duc7Ug2hf8EpcqAeScZHasCEkr5gfwE6yav8Rhs",
  "key2": "32NZb4vWTrHc8bsMFfZ3vdSFtsJFrEy27ecdCwh7yWyjtRPt1S8WLAQSeCkxi31gaa2d3DQBcxqffgmE8rnyYHN1",
  "key3": "5Jo1CaVHAVM11cMmwM6ztLA6FWrYRhwv9to3ijx7Xin52Sk99bp5TUYTSRuvP7o6npGtkGyjPaQSrwmgswgXYeRW",
  "key4": "477Jz8rh4Frjk8MQ2NVNq7qKWtaYf2bjh2NCvJmie23P8oAkw3j93w38Su6hSkTmJpjYXnQ6LSovpa3rQxA1bN8",
  "key5": "5GmVLCAuZDV2NUczjzrVA6n3YFshhXDrtxZYUnMk44Rn8K182xnHgc4mt49FwRW52GDVZ2eZHBdX9P3aWCJGLwoG",
  "key6": "3QXxioSqXp8tia7QR7sym5uKnswTzjgtKoFkD6Ty68xCbqsVUic99u36E6SLkPGoQ7sRifiTnaBqCcu9UUfgpJYg",
  "key7": "2mzrdbT7vrxrFCi1uCE8QwhQZaNNrvkwJcLwhxpjyeT4TBPytVdzPC2aNy8xHDSjMRk6hraqGbEx8ymcTXBiCWgJ",
  "key8": "7yba5X73Ps1FsjaCUCnKyYk3qmyTXuQp5xMTcMfUpEAg46uerxJ8nexxsAbdUPkgdx6GcfkuN6qnLmCmJh5eNT1",
  "key9": "1EMQrPsPeajmnSGjvaqbPUsDmyuCTr97eSk2dRqwN9Q4RKPy2GdRByfQcCqA5feVTktpgXqQJyaFYxVh5sfLYi9",
  "key10": "2CLK7MJGNRYsBt3qdmZsr6UZPPQaqecxUxnDD5LWBGkXg1G1aNAn8KBdw8j7eq5ydMyaZykmDP4WT2SToUJ4ePPy",
  "key11": "5VAFrojrNvyYzLtjkorzKkVzBdXZSCeZjCgz58RCG9igEZmNNTPPGtbgbX9HSKnXWUnCbHwgGjoeB7bu9LuHZHBF",
  "key12": "4SLZg2f5SekR2sNZCnoUVHfHb5n8TwcD3UXAKCP9EFetNnCUSMLP7HnADiJw2W7Sdpx89SkWqUeJqknLrynniNgQ",
  "key13": "3ts6A4zsqWhmYRM1stT1mYk23h2TRmSo4svKE5jeabxU4MyC6H6vthBf9bY1s6Y2FY3PTRF1KudzxDjKW4hZDBff",
  "key14": "25NVLoN8xNv4ohFGnfkAS76qicxDtJGmV37FaFtMCHyipngCUmcF8hE7HVHGKzS4RHB84iUaY3XH1hen6swRQsVf",
  "key15": "5mDyacQvqW13fb1eKAH7gc2JUbLygvdhPMcGe8TtYCrPkgfSK1UAgxt8CqeaqqkZaBtsi2RGkCAwadDnk6E2hebp",
  "key16": "8tADMgZbrrGCt81DzAujPxWQBqA24wwv1fqYWu1px23i6ZDbbi38CYhS1NoNsXLdvaG5cdWoCo2PJ9yJB7iC56x",
  "key17": "2Hez9AAoHjWNioy9DFQeUwqJBy2LtVF954YufhJYyQ2aUqXzUgaynCUMRr3i2VJFbb3sjMujHjozgHtY8ybHXRH6",
  "key18": "5cqKAH3dhNetKLKF2Ru6t89hLHz4JQv4Non7FBp51aCyRPxAxMwRzx8yQ6YiVLmqyiCoLXd9sC2YyUFL8a2oAURc",
  "key19": "2x5g6MJNXZUWjdyYeCxDWRreasmbQdEdonVvpKuQx927ndqLXNMxrMggWeZzydsNTP8ynSmdMhnzY5gHDmxMwksv",
  "key20": "asRyo9XyjjGREmmjS7U4jG1dnFH5nNbjng6GMz3KtQYDPuUNGBFxRKnRhHzfAH2UPCNoMX6jf3Pofj3Khhcz4W6",
  "key21": "D8DUecgUJbsydsFoqaSQMo5KBCN4M2tmvkGcc7bQ3M9V3LBi44nTpyFRP7fZ66gWMBqWfU3LhAJ2xdMbszaDr67",
  "key22": "5xYaLBm9Er6YLj9iehTMmgPPo75mc1ke8DYKtT9rveT6MhGKPjHmimrmmKtLRvbDfFoJ1SFb5WGEqUgxYCmg7zvi",
  "key23": "2Xh6d2rMjsinLcqrHkqxKVpN1G8YrUhJQ6NeQrvpn1t4qXQvGCHZY9vE7AMEufbMveTqCnJBzupXCMVFgfWq4xRA",
  "key24": "5YjixSPexgt7rrtg9bkaLK7Y17zxpSSuXqb5zP8vcKhvLdZLL2mwpmnBmjdf3SvqW4FCgSHMC2so7xg1hu9qHKPX",
  "key25": "4dn8FKGreKLK4qCyS4ZnskyG2uz7qDX5K1rTMmepUsJKRKtTp3tbup2NPrVxrpM3N7ethYccp5nUGQj8NRa5QYfJ",
  "key26": "3UPQSf9UswR7xGASwMxxUSc6YxbXmisN5e1V2XwaneiT5q1JTBMY4Xs6pSnJ6WYpPk17aiAAQLR8xCwBbhM43MRq",
  "key27": "2czYxZXJjqbZSXmn78G3BV9T4gKGJw4zVxZ5mmkSQXYLWW8s4PuQfCFFKRLDLyPyywpLrKcsb28ebBqbW8u7CCUh",
  "key28": "2PEfQmH2VZq4QWsatXMo9LetSHjKuwLoomuPyQgfcbxBDuZmKCB6vTQijoG2G8V5sKFALxbYpX9zgqkRQ3ksgQsK",
  "key29": "4HUf5cwb7ELasPRYXx72KeAUb2VSb5Bw3iTLJmHXqWfK8smDiLD7H6doDfo8Jn8LJhTGaQWtzTxpYWtF3Z3U5c28",
  "key30": "5jYfY9CVG1U2oj2o4m3gdFSaW6mnbobtU7hB7TsWqQwuNP8KAidNH7mbCXYpm255FWRZ3wd2zzq6SaUSt2Aua3N2",
  "key31": "2LpLG843u9T6qB4sTxG557bpMKZEApY9gsJWkdTU5mnhyrboevRrgwuPoiHzDdc4DMDQz9n1fbQYxs8Y8mzdocc2",
  "key32": "2JMP1wtZccuUsFtDrHZ56D1G345n47Yq21W8a7fh2oS1nHAYECN3qcFfT7VdSCxjUH8AN3moHVyjvNYQy2LtZLwQ",
  "key33": "5XPasfjB8A3AXKhMbKKMEwJEMGsbzNt4gwB14mPD2v7N8LoGvQfd7DdXXg4rCxzKAhmVGVXTHc6JtrzBamEZGc47"
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
