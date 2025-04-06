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
    "4BRSDXrYWwHW8pSpDkLoH7xT91YvgYHCetMiB3LnhdSnyEsTLMMBeM8fuuTkVFppTetS7fcAoJm9jDeQYjiBuU6S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rHTBpiyKBWXG77Z9AM1XmGHSo7oPvC3WVTFQnY7YjWEsnt1me7AFrrZF8Fks84FUwjfwyCwdDLDN5koFEqwGEAg",
  "key1": "5sPvtHm38yokiP9gMoNXK3RJ31RkQd9LBLJ3rchH5yUdmXPgTKYSNTEBPhTthNA6vv48MAGj4tdo29AnKzsMQDBg",
  "key2": "455ZSJj7aYQvMr5Cdiky8AarvoXLa8MX8CWHkpnZynnN6uo5dS7b5eabRVHMAvhv45kfCZ1pGaA8gKsXMU42tYUp",
  "key3": "2MjoDjtqnCbDHGukci94E8D5VTFYFHc6zXsFwhraiogA758Ph8gtF9c5Q5XPV8xEs7iUqGGmebqmyBqQ5sfknCqD",
  "key4": "4UtRAVT7Twvj8U9hkyBThMxeuHCqqtaUbYnxhdyyzaAEUDHr2XiZKF2mocfwNpRe81JRccaMh9h4zuiyAFT9o26g",
  "key5": "3YSWR3nfoRdaRi8HR8352KvSvAZRwh9tYio7ryCzjTBukfN4LxYgHNVbMCmAzsVdJRCJzVEokjgbiYRXZ1sCYrJd",
  "key6": "3HuRZeLdfsQaELVqd2p54RWhTkHSUYs53SMJhizeALod2u6FFasQsr51kp6KZdDNLBovGiS2di2vbq46dVkVoZCL",
  "key7": "2DR413YSYauuPctr5g88MZy5XgKKVwDv2uXVp9Wck3m5jJMfyE5Mpg6EWjnddxtg812xVguStyhNV46bnKbKPj2",
  "key8": "3UBu1kdSd74syv7otLqDwSgVbCxVjfgc3bmDRmJtTQ52mBPQRrmnpKyqLqLVw4Ki8tdtDyaLhYv4xbii1LfnnKoN",
  "key9": "2naiJ371ZX4E5qyW1Sa7m2DiXxHHjNu3BhCzPAm73NeASkBXaTeu9xx311yZrqDWgAhJqj9Q275tQb8PL1V3zntN",
  "key10": "5GHDWwAnHKtxDmHiJYArupXxBe92rRNX7Em6AXZAgTBTm6iutVR4Y9BTVPhvFTWsvcZmP14cBX2vG5dpoaJ8iroi",
  "key11": "2qLCQ4Ek4UkfnEEXN6umgcjvdYyAWZDNLJkMY4gePL4B5D5H26D8mhTLwu1D1M8uqyVB33rAyHXfBENyJvLPAHMJ",
  "key12": "47ZakghWYxuDhVeBcgy3tpnhRej7yAD1FjKgQKcvtpQcfiQTb89UK8QakDyAkoLtdF2oUmUsVMa2r65xuKZbJEpH",
  "key13": "2W6K14Tismq735MhpvkWXo2AGfCG6RbVkrmw3AK7d8wwCyhUVpoqDpYPfeLMFxtNpwQ4isGANRmuBSfHT9GZVAmF",
  "key14": "fwNxUAXKpnG2EDCK5YkGUkjLXMZ4wGT1YUgwppRHppLgPzYifECJd96hXPJicA32HyWR2P3DdtwPtHE3jHwEDxi",
  "key15": "66WpNMbJN9qgsKxcb659fZbb8En9NVyVuD6PEsAYPnnM6sbvnwc2L22gfdhfnx9de2idnyfGBYkx2VhVHcm6Qh4V",
  "key16": "2YpDj9qvDSWXsxRhWh83YEBYhqFfAzUYcmm6YQCt8oGRFt4r9ifEs9NYMuqnPTcnA2CjbMZt36VvHjZ3XNf7Tecp",
  "key17": "5umzJ1uF6SgPcHvwKfVqRB6uBgjDB3FhZs5MfaFSkpBYGzoM6XXsYZLVpTVYi1qC7JpsxNF5M8BxNzQ583cqTyem",
  "key18": "5CQujytaguhjYREKq9vZvS2aUnZ6P46HzVHZmtLuB1gzWuxHVLtyy81SyNSY9uzdMhtDHB9P93goaQZrsu4oUg5U",
  "key19": "2rvQoUNdn5H48sVadoSyMQg7waDuXvD7ewgf1AcjTbzorSYQ4Kik29L51cKximQ9KK1CyNiwRCLgUkC5GNeqdk4V",
  "key20": "58sAkhRqhNdxtx6wVphqGY3YPJtgNc4aMnVBBkNpjkh3hTRskitqt5HGc95GWeseZcN6RWhnkz5dXRfQaqpbktig",
  "key21": "5izsrHTRCAM1q48jYqAikzg2tvutD8Zep1AdJj7t9wZM2Kp5dhzBzxiMnwhRkQpL7T3TDJknwGD1v9bvr1Pb769C",
  "key22": "51DXiX179kQbpWouevRX95kzp7hy7wgTZ9vjbCQ7jzbCwTSYudTdQAfG27d94yLRyKB9fmSTMvDazhik6WKeBQqc",
  "key23": "2PdV7khtP8fn912skpLqzfSPQf3TKrjQEZxY8C4MhPqbXADiPRBiMcQ5hRzumDPFf5WfoSjxJdJjV1QHiuaNV6FS",
  "key24": "2qKJ8FbkRJrSqHH8Vv9mBpAfstK7AuMZpQ4ABh7WQaYTq49rcXi97tpN6qnA5VcSRh8RmEu82WMEguc1xgnU4niR",
  "key25": "3p9UzmMy9su2jBDw9iVyo3wxziki9CG9ND8QgZxHuvDZQpCeGHCGaKuv9b5DYDwfdnt5eBoLQXKCCBUDvEASreEm",
  "key26": "61KmFqhdAt4tkQtGonCptnWxMf2qbPPDY8aGQGBTJek4QrUDaPXsRuUKvEGr2ut2x6QASb1Ss7GQppcqnWAFk7YP",
  "key27": "3kJaA11zPF3f4YFdk8xR8wJs52x8XWbLkp64AGZGb51LZ2WSJrcDE59xLshNSCsNdbMSCSmVMARcrsLf5QxaSzVT",
  "key28": "5TaM1U6hHZhhkbP1YU5C1VKZLj4n1RiYVxpAxvrhqJzz4vNEud8zxuRcc5GdzpMTXc7jmFN5b3FvPd2eWikuatjR",
  "key29": "N5oEuMYXnjzpdGmvJfVXTK8kKPeHffu758Jnt3JhNmw7WbvieDKXu286ocVVo3Kd26Vb4oQJzgRMbiVVAwBTSVX",
  "key30": "5azzYzJeGHwaCMTeN4YWcemC9TANt67aLJjtitG9xLaWmUfA4JRa4EaEwrUsGjod7SirUVJEbqbji1FHzwbp1fxm",
  "key31": "3FGm7JhTutciTroN3csGgpwTnfwEtG8HSQWFFWhv88hReEwad7hKJ5zc3eR7W9MF7UaRqvoSQYXQAMrtGA3omZ8G",
  "key32": "53EZc3gdH87sR5Vsvborr4UAtrSM2wUSiEoxsozuv83z8ndjxL7AVWzt1AnKCcseCH2h9BzcQQReu2rP3ijcTvXX",
  "key33": "spXfciPw9NKiBu7pDWSAEbnAzpvdbQt4r8yJgGCVE1fHp5q1BQVr3QhZWVDmJEAGheqVSYYNRf5MKtMj1P8qQDW",
  "key34": "3JP33jkjRH91P1N8eAZpi78UZLYdF3QLdzQfVjF7zacFY6rEuBbBhSGn4SuRnrQznDaVRW987YCaVwwnjo4bg9sB"
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
