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
    "4WofMZ9DvbK7Df8f5DJ2zyTjYRpfTNxXq7Fm5Xzafaa5Vz79vMTtsi6rPVBXoKwhUP2xfZgspWAawVky7L5LJLbT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DGUtnkiSERGpkrta7fikRff6yaXtDgUzo83UgieyfeUzZDHjmaJjB2ikrmKzNPbx5ftYmq92VJZSf79UKJqj2Lz",
  "key1": "3gcMsy3MLvPWpppi7WcocFvfxZ1PcgNb6C347RXFfVp1yg7SkicrUcpuDkw7To4hZxSzXu6f6KYghRY8D6rbs7oL",
  "key2": "2pVPdPYAvnwauRzqRfX7wN8yZS7Ji1bmLPnC8xNUv5UXewvUP4jVFZUgHvUsrkukmWpDfQymfLyBaSEzdiRgud4g",
  "key3": "ivKqeX3YXVQUeNEntGntJA7cQRCQWSRbaLT9RHig4QtAbmTcKXuPaRK2EopeokRrG55EWiqJ4TsF6Cd7Miuw1AJ",
  "key4": "2v8VKVBonpJcY3FFBKUty1uyLwGya563R5WiyiuxVvwdcaUt8zA3H32K2qjRJrVTUFig1VnQxSFbxBJkwXfNQh6G",
  "key5": "5CZfVuneEJMTqVWSVLuXZpnnDbZGBB1s5DtEHC2MkamxVdxUk8AbfgEzW8Keun4XS6qVZyrBLAcs14GLhyoCKjbY",
  "key6": "2KbJxjGa3PEcrsDSxju4R9rJKJiSvzs8ALB9pmULLRZupgtTyyBrmBHBBdLRKr95bMNssFhCckoRE5tha6RM1Rbq",
  "key7": "5x2nwQdbK2JK7rpcY567cc42GF1jqvWQ8QVTErMCNG1UV9NRcvMBjHeeMe974dHFQSa7uejb84WoC9vvW3siUw4v",
  "key8": "pY7KE8iHvuyokTfon1NKuN1qM4axuxYUpwbYNaQHXW7V5KBoSvDEeVHntKkozZyLiXzkXAUrYEuJ3XnrjK21yqm",
  "key9": "3hdru2L1tkqBxjzBvWvMAE56YFQspwD5B9vTUxAtNnGqEw9ZBgyrVJmJWfyCSr1Y4Wx8UAnA7rQg2zYeB93cVjgS",
  "key10": "5rXPg4ts5iABSt1Q4x2ubme6ajArvuts8nii368knL8b36xiFDyuUp7UNEJRi61Akspkv23BK3vrXSHwsdkL4avk",
  "key11": "4pPX5j1AUGc4z1n8WYfjeYWJn8u3CY6ksJqHvxcT8oDDuSnaGw4aMKBkvDrG9TjSaMLqQ3TQRFxn894uxhDRiTym",
  "key12": "9EyPzFYkUavvUSrFoXoZuRkawHVs34LtgakeBvwE8i1yao5xNzmycW33H2RuKSNZKL9ws4ToknvKbzCujjWkfV3",
  "key13": "4peywxMrrgtLJTfTZ5ViN3DEsHYUZFYHafW2CQ7ucT3YFYwCAcbNxaMKhFwjZYGwpnezAiFseNyhNy55evrirUGW",
  "key14": "C5oPCL3MQKtfeeuzNEfn4o5kjvMwwcYqxqZvfWMsoeS4VTFCgBY65LDRaGhsd6B8FfgwLVXKvecaiSHjJsTvYkY",
  "key15": "3PNmUFCEKJn8WUGRrPLAD8odLmvDZd2ibNAdPaKKqfHRwFNABrwRqpTtZno33HQs5y6QJQgBuEmnY9ik5XFgdci4",
  "key16": "38aHd25rrje42JNU9eKDYNWYMKR34fiNR1jZ8qKV3Xme5BVQKxgCbXXBti1U3jbco32YA8P8eJJp6K8SbxQWNisD",
  "key17": "5eQRDmGHYBvHpCKWJV2B56q4stoszVWpz5xmxRTRNjDjD34ZrrjFhymuw3wDePugAR6fo1WotnDDFvAG9E341vMo",
  "key18": "ajcYPfYmHKxHNawDVys6R8tNwwneLPNGbjnTcg8P5RBy7n8AwfBTVJtV1qdynsG23C9sWdYtorDn3rCFcDGeGwN",
  "key19": "3V7cALF7SW7dt4zPcs4trASLHZ1BywimWFLpUQmCMWAp4rXUNHK8drDsNn3z6Ds3f58yrnu1i4DWihB6cdcAMH3j",
  "key20": "3dnB7M7mJk6NYGG574Djh68XtzEtAHofjJwzj426cnW59tg3qpthk8sKcS4dpP3UmQ9dZpmtEhmBv8QyEJwz3kSF",
  "key21": "URFaFP6R8HDu6MGJUnxGT8pkoaDgFZbqHgucYeAASiTenoSVGXEdFyint2vnn3TufKRjDWVBwGpmQXYry48wWZH",
  "key22": "hbvEscU2ZTfDke2ddsJq57NSLnD6muopHjq3UHkqjwGNgbQgjW4X11U1jzqfPsKVXL8LVHmxjPQkuUZsNjoE8DQ",
  "key23": "443PBwGeGJupdiB3vNnvJXhBP35gm7KsTJqH3E1zzmJ79EjUYzXci9d1EcaaX3Hvn36iZFEZWSQWymMhnvZ78vje",
  "key24": "384dEBt6KWPrTDH16wNjWLcaerNyRPkPxLts7AAn3Fe55rNDq4tBJVBn51Ly86zhvbU8sc1mTxQY1EeffogQXZ6r",
  "key25": "4C2HRHC2nEScRDKKtC9bssJdqV6LWKNHX9L7AAyTtA9Jzzr6ZKc3vC6jLM8KQBAWZUvCSZsDEgrx15kNABjzcjtG",
  "key26": "5vY4asemC5c89Xz7KCqPULxEpq443qTf2h64AeEThr9a6oWiYwb9PxeTKLwcZJg94qz7WC2EkdiASeLmeKwZWE4n",
  "key27": "59cM7XR9rCmmuRhPjibXkgwz5p3P8xjBtStBQEQA2Mc2zy54rpzzhXaLnSRKEAkYSq68dPMCmd7oRw8zBx3USt3K",
  "key28": "2UhCzAG7HxqQhd8E66qGheirLb2QN5fETU1fPhwurcFDuWriVA9vWS1icd4JPkP2AaJ7QXq1Qa4FnRVCqgpwb2rg",
  "key29": "51VHWfwppKTFmqBWhTS1GcBzSMuf4siKDZ2HLT7RkvdaZnE5wW2qjeQjjsjyvKAjDmtzPF6CZim6DpjPgEJS2AsS",
  "key30": "uUpH9Ue6k8CooV6ZGNaHQ3Zch5fWHh4qn4MsHtmV69o8aD8ZhAoM3e7ojC2XFi1aqCnEVC1Aed4o2f5mQ4QzndA",
  "key31": "4i47aDmopfh2j3WniiZd8F868P76fcgpaUhWwR4Z1DKTVKXgtqM9VJ6qdc3v6HgX1vVKZDxwNei49WrdeEZ2jqfN",
  "key32": "DZwDzrRYPU8W98juj79ZKrHy5UiiVrch2PRDMt5Y5t4HJMrr5QTuDj8k2RtxEU1JRUd8ZDehFmYxdeCupXRSeZR"
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
