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
    "5NuRmNU9kJyhiXR9XEGj1NXKseMiertwRwLzn6f3HGydpGCDQ8gMn3xToMByeoJR6PajNhqsfofsjzCCoXiAUDVQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dvnXGdXQPYNDjWR2vQ4PsQpp6ru4AbXFzrSqsf3v2tZExgeLMffy8ykxSLP5JWYeiAytmgS2U26tEeUXx7WZAxx",
  "key1": "48EW1u3D93v9z2PY1S5wRFNDXZAdzmvNXkUQLRyqs53ajeWfXrRi1e6mZaH687RW1cxPaV8SuUso7dBUzWT9YWgC",
  "key2": "3Q65g5S2GXs2msXgAYaBAfeSrivS7KEtbVyTzTnKVtvVgh8X3PH2SMFU6zyLWNPUswegZTsSyizRVDaaoNmEfVon",
  "key3": "3tyHTg7KF32F5tTcn9RT8oEvAbz6jKTJVcr3h2TgyNV3gbaF9LWLojpvfFrXTkcc8YFdGi5KCgKqmiVjyjkLZiJd",
  "key4": "2uCaniY7JECT4srwSp27hZNk4TBjGxRAWXGAY6E2zAxedhHBZXaJJdZasKB2Bp246Y9rUPU6D8E2ZeRCDm4WcSp9",
  "key5": "4oeg9vYrRkPNnWSNs9ac3cgCvswtVJNEst1VytgzVQQ29qqswB4ramsK5KoemzhrD2Cg8ScRak7hdxGuXWyakwXJ",
  "key6": "3vJhbtfnjSGVNH7VRTj8iJYKim9b49CjdSo5zKunH6csTEvwJe8f6v8Noe9gjPig9mhvJGdq9Pd6C2YEZQr9CZMP",
  "key7": "3wvVGfEwwYFSjTJ7cHE3wi34vibsVwYnPS7WtaSqD6qmrfvKWPQUsb97zo5jpMUiU93UnNt8adrEBxiRx3FhZMvR",
  "key8": "3kTk9h6FuNJtkD3MD4NDqbxwc8djNtnyvYqNk6Cm6SFq968hKD14VHzWgPyWGAoVsSVqm5coYgjc87YFFo4F5EyP",
  "key9": "45DXsjZbkww9aaCiA462xY2WGvXHLjqTEfNX4ai9jjHBNVkKmx2oAb9EWQWDji5K8Sw3zLzR8RRR25mazV35QiLb",
  "key10": "52FVzUSUZrGu3bwY2h9oP1he3kvbMNXdzxCyDRBd4ggdYtAP3T6q4KSr3TtoMmNKVqxSNWPJ1ueadtpFi75Jk7ae",
  "key11": "1ZASmHyjrkEeKBbCQiZpekw3v8YE4Rj9AH376qNGo4shUCbrDDj1pChhUjtK1RZGt7ZzWxV71rkEpd4XFrhn3rD",
  "key12": "21vBYyqiE8zjHixBtKPWFC9eVCav9iWdWfGmkZXgJrTNKqdZNbxjijktFmQGhJb88qrXHFeFZYK2SrQNH1MSfdgN",
  "key13": "2Qi1kUbqfdvw3rzj5DvTz9LaJJN11krJ2YDvMcbrjZCebRkLLsywJjXaCbDqjbk4f1NR2mat8bxDsYUuAynn2kVH",
  "key14": "4WytbEJh7vMGWRhSgtwDsT2qoYzhMdjdfc8dXhUj3cpF4QtXGonyS4wefjQQMkcgMcDVQJNQ3JZRCeBc6bc8PYpC",
  "key15": "bupH7VVsjTedHbzui1adLrTMcgszvpgeperDTGzj4c32U44M6EcMdaYWJDSuWKgZXz7VnVs9q3PKnvPZx5JDNW6",
  "key16": "4V9qEaY3FBTNpoAQFCTEZKoLzU7WZPXv2xQNUxyvimoWscLgjCtu3Yuav43cFMHJ7XxVW9Gk8UREnzczE1ehs52w",
  "key17": "53LKVT3z55fBjNKDSMWCpcXSKAPoJvsWCQb7eTdwRsDwk2Qz7TH6aeLYWMSYiatMb8hLnQPZECGuubs769vghURG",
  "key18": "3ExoKo2xtkRNRVrbGt1i8t8K6eNf1kh62HwxUxjsuYmjRAbMUjA5pFNQm3Xd2ECAgsKqPsvWW3w37eiyMcqZ6MWh",
  "key19": "czhUi7cWpaPPU7vohsHwPVTfr7hMCJzdFVVkHWU6dTqUhdBeBfDYwQaKLmUJQrBqJKgwmWKoBsZ7QHwY2artGAY",
  "key20": "3vFbUJowZKUn7g4n2QjRXckjGsbMQ1LTaVk9nXVUsD3jtHHzcemhLHivhdWNExcEFNs1DzMAFdz66DxTnYHXPBgf",
  "key21": "3YP3BtvLgQcVVnRpTdb7PYmcmCXfLNmBwrS47mfWdUTnqiArsTcSunhyqdexGACxerWg1Wi66PeHiSqdG2iW2zL2",
  "key22": "5JkPZmgamahXkpUDAQgrKMZvmWdUBLPFjNXu4Nhu1uVsCvKSnUhzrShqyU75CKLHYG3VT35Tw9vGN2m7pqafjMN8",
  "key23": "3HSwd7EXLDL2XAYASVp5W48pY35W7UiGw42pUHkwBTtfTfuvSoXkz52NJuSMD3Eukfy5g1vQjfxY9qQQTcu2oJA7",
  "key24": "56MdmD4yBdQ7ZK78xeN6uqyG7RNxaEibmuU2BV83UNedU7joy5REXmcznDhovHfo55wKHRWGy65F7ejciJZscDg",
  "key25": "3wtwF2UnSuaEsP5TMf9nzrAG8R37nWbQpUfzR5mkXVZEwU7g99tqpzxeiGqCEeZ588URYTsNUZq85KK5LVJGsPPc",
  "key26": "5pWL7VDCGi7NPwpYD8HZViD7fSFeBSKDUrdYzY5fGKtHq5AAxGdp38WMhRYBNgLjspyZGCyakFaLo1AfAWkoN4Kb",
  "key27": "5E2E8Rs3QYbvPn5ebyT49N4XgxKa2PhL9WsgQhCbN1PazCZzfQEyaLi2ff6fX9zqFrzzLJMZWfuy1DvZ7dpmMRea",
  "key28": "4vY61zuDwsLYsBYyDNesoF1cXyZHMCRvwBKm9FmBsSwiRzpYW8ovTEnx5gKyrd5uFYYuJQh7UpwjqxCsNznEDjkh",
  "key29": "45Xp6EWd87ee1CMheahAq3fu2UawpLB2WQ3wrZ9QSP8Sp735cfg4RFkaEjWJAsxMSCzG7VeHB3M9uBvexebTuJdH",
  "key30": "47FqiFAvh8QZXir7Usg5Y49u6qF7jhQkd741jujAytL5QDV4mBpJT2jxxrzWEnaGCqDHvFx5htf7pbnjJ9RaRU2T",
  "key31": "2J7R1Jzorzk13UAxdiCSG1xp5o6g4uMWNQVcNSWJYGXEtXi7nU166Pn4oD3jLkz8uUv24PaYsPC7TCiwAS3LxAth",
  "key32": "WYxY4EsYQmDhmdCPVXGYBpQVeK5tFwedT2fWdLqsCryiE2AodYS6G92eVHTA3x7Dg9HUUKxpFdGWm52Jo26RzpD",
  "key33": "4raMGR86W7aULjVKVmPpq1yHf5RCG6Td8wCyFNvvaDJSN6gTBVmpnzaUW6BGZWZGcUGV35ABc8dTGaBavjAaQygn",
  "key34": "3yqvGzM9F82mfLuMoDD3ZYv6f2oLWnsBazoRPcWeZo8e3NoRyrVmhwf6g2VHdQnqTGbT9mj3kCxfVnXacGmCkqqM",
  "key35": "3gai5fKvQRbRSVUo3MwNyxNbXEswfitnV3FfHkJR1FQ3Fx3gWnEWV1Z1eewicjRP1KvDatotntEeHfWoyASXKhqf",
  "key36": "3e6op5ekCU5FBoknzfqpkiHZU7qUhSmYyNCEdp4kkjchJP8MspintpnbTbasw5xkysUwmoBU4ccHZvNtCjkXrWmL",
  "key37": "MAsC4ZkidrNeatDAUse4PfcbDiSPeLbVLJJMLh6kTKGZgMrwM4TFhonpJqBsNYqZ4mmUhDzW98qcr4K8zS2PRAd",
  "key38": "42Y4AS6jnqZzi2vhTnFxTrcyhUR7z7XwsWzK9hdKfZnqe9GyyCYqNevcBF4YT1TEGwv6ZbjPZsKuPmMh1L5vWjLV",
  "key39": "44kRaVJSPUxsBEXTb5wBTdLHuxJpZHyEn2JZ3onrbpLNEhxkF4LH8q4MiNbgWYbimHrZHEPALeUxvFkcYAedzohL",
  "key40": "2pMJ7U8vAQqp3BEK4yUGvEGjE467YhoQr4wXohgoYtykHy3RTb4rajwyPNFKjzGdRcRvNJLY8fb1cU8S1H78m8TW",
  "key41": "2bsbNe4o5Hws6Gy1rB74h4PzSbYe1c9ZzaVvfPX2hbXmRkKatDkR9WT9NxjUKECMP1A4esv3CnNfSdTQEoHb3L8n",
  "key42": "2xupreMFJcFFvoreaiDidDy4kUW15tgX9QvyBKMCsN1UwRu5KrursmwxinVe1wVqEUaaRyhjhbYKxHaeaoc4bS4K",
  "key43": "3yEJybxBehPqMQpDZ7UUwfaWfvNfZYqN3wPrF5Qg6SQR9dKcaShAF7ieM7xpa8w2LtYVxfRWpwDGvBfFR5PCXZAH",
  "key44": "2C83EjfPhKfi5uMZCfjWktiWyGCnDjs4cHKqdkFVqE1Qy5TjnjHGW85PB7uKefWmFWtq3kuUq5snEVvXefLTDEkJ",
  "key45": "2rniUoNQsSjmmV8ttYEi41FfkEjh2ETPsEUBGRBfNgfhga8CsxPZADWEvSCuA85UuQw32CyThp6RKLg5NQfKV3xg"
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
