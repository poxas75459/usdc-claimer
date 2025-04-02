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
    "653i7CBVypSAtdhLhrcA7DeWVwkNxaWdRvapnSh1fpFSZVLKHTJDh9pgRBaTWTftDHjnr3FEmA9JdJwuD3QCQbqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sf6A6NN5KvfwZEoXPYBwwJ6jvJYvrJFbEeJRNWCUdkT3xVtAEUeLEqAAGtKYDZpEcqbeZLAtTADAkzPk3PD6KEd",
  "key1": "4KWNsY1YEht6vAhW6NMgbJAXVioxDju1AN6qRMs71in16h7n5TEUZQ8ivNAVb1E5z1QNcGN9GoUJTP9VvrGRqpMt",
  "key2": "4YegSGN2rMFG4LgC576FGVXinqh6pdZDbUnvHxikDyDt32caeep2YVt8f1Rsc6ZA8xy7dXYfYPJUnL46jUYVPtfi",
  "key3": "4ow5JVnCLRasiYeZDmYDPBRHCFEqZUAUbgzqgj5kCkrxjtqiPiD8jgzhAfmgM6a6fSEqakDpZH2M5r9fny5pHm9v",
  "key4": "3ysegFH91tXVMN3VskNkcrPQwtgTZLdEUeWPDpyVMcVjWfjJdXCnSF2EvG6E3uEwBF4JKN2SLL3ATxJp8SWJYskX",
  "key5": "2k3VzPKSVP3oyzDfTnxFWs25Wftxos3LgirWMz6Zcsm6Zn6oDNPwweaYf13Vk1KzY64zoZfZYFh4mxhNhyC1Njyb",
  "key6": "pMVMXtcp7kjtByBXV4QFbRmhaDvue4aFkt7LyYsNzG1mNcoD6uBMrv9KJAQB9Ubkv2ajMjymRXF95aAhKv7f6L6",
  "key7": "SmsYZPZFE64W1nzwofkaegfmcxtL6sQuFANGoSGbzMthm7MxhmvufsCvV9ZqFsLButYzixgG6BUsu1kHwLpTwMd",
  "key8": "4SSB3xv9wDhfY34hXbUg6LSAPgCVJt6gB8fbi6W5D4DrG6Zd1MFWtK384bziUskPka9rbGdfwGrjeZoAwmgcbnvN",
  "key9": "5EyQtLwEr6R18KjMYqQQNPzWvCJrkuhh3cVv2CvrmMHc7dqfgcN5jPu3tLkFJhrVvD6nArBjtpU52DvueYjdZyn8",
  "key10": "22WiD8E8NLMcrEzZSJLXCrBoF7NWFraCFfisZHMuPF2AoHNDz9F6zdZNJqq4accHPYqP6eSXEoBLPLxN2Si84qtM",
  "key11": "3ZUn1aZ4V2zWLGmKQSfUpGMjrFCLhsHvEqpk6a4AgRT5qNA5DWCLwC7ywbrxXcJLoxGUZXnyCSxRruYFLvMCybcs",
  "key12": "4VjQJt1GXrZFxYPkktdHRn5ULd1rmw9d1j1arLg9RSAaYMZLWrjqwaJTHxfWC7e634uwthLtFreVL37kzgKEwZHF",
  "key13": "2GXgtKMvWFkezgaynt5AKcAtLrwiNitNvGzWzb95QDLo1d1oq62fT3s57WvZ2Un6jvX88ULa9zbNUJkUDh614qRx",
  "key14": "3W1rrfa5CrXzwuc6T2692USdMzvXQcapYwyVmnPexsv6mQZ4X6u86DVMF7FZfy3PE4K5qpgChSWnH9QnmjzTUesf",
  "key15": "39JkSJQ4XffZBXWQnBoG9AA329P7KGvXzFz8MnfXqwSxwYyxA4zXgL6VTRzvnwe8BNqiGjdvjjy2v4NH8Sh9SLmD",
  "key16": "65N8NJQK34n2pPZnkiPHzwrA1TXRS7x47cTjS19BKgNLDJdSZX6y1BUW989cLW3SCjQvYziwUmUMmPEYzh1WgRrQ",
  "key17": "5g4PbyVLpaNCUJB1efQWNcoRQHKgo4WVUJJ4DBWQbvT8tFr56V1Y77SsYZzv1ipXtzk2vEYwx5EdMfPwT4bxyZMk",
  "key18": "4atEPr9Cb94wXF2qaudVG8uMH3BdrDXkzDLLqD5gDmNenDiBSP2iGeTy1ymETBHQ9dNFGgmii7H4CXNvwdPxUjJ3",
  "key19": "s5EwfjeK9XGf8kSJqbQDLHdMfUA4JdKykzizrafB2wND4bV1EhwQjstU1d1DpAz11hTJFGQ5Y5DVdg3XcpnSND7",
  "key20": "5vdALeMi7M7KynMmz1W7BUfbA98FPEdG7xUh8QJkNrXpd7oMmzwfQXFNZocYfiMpAdAcmyZjB3TqYjxKjgdnScpi",
  "key21": "38uVPz9oCmKymS7EcTLoFDcchLzk6gvYYig2E2d4eH63Pzn3DC8F5Twfn5mfk3bNfnWrVrqb3DXbatZdVCMfcfvj",
  "key22": "5z4fG9mXeh6ys6BiG5CLftVmvSJkE7Tr4FrRyaY6CTxkuDJjZW9Us5uGaA8WLtKVyipLMUDtifFdg6eoCSuVPEnd",
  "key23": "4uarinYypRVgGN12cdF3mkgDc7vaZBkby7hX5o1iGgiHZYcQZb7uc7cnA9gyMrdrzABQZukMkMNa9U5Tm7MjMuca",
  "key24": "2GCMpRag2ZRg1cy1DtEVq4tQCm3XrvQ1ipXYfirx2BZ865Y8w6jmy6X1usWazD7EduXtF3AsyEAADKnLtiTpFrxd",
  "key25": "56asPTJ5CrruyRTynrHGK7UNgjWktnugDYJoY9A9vM1kKwF8iVsZJdF3AhYTZwFksTbkSaK23P8XpqDqU2ByA32y",
  "key26": "4oe4tqttz6s7aagaWYMa94K7QR3oRbYsAZMp256Enxdbg9h3bgMLT9CYrgGsEaH9AWLMcr4TcpYqtHTXswWZx4F2",
  "key27": "2J8H4Qkb8SU63sNJtqJRjTYzrsXPdxU5zqAjAGfbwkHQZKvjqzWUJZJdibA9L8oT3Tz28SdTTGbhYKcUJ5w5Dgnm",
  "key28": "44U6afV9LPa3XZCHHCgFZdRsQcvJvBytxoJWGc3DaAjdo9qJtHtR8N8onDhUfEERiyfqt5bo7FkQ5VzkyXHMPXg8",
  "key29": "3hMqMW6mLrMqC673rwxgQV2JvFth9P9UrA4EBUAeXXcQyRwm2rxYvUPUgmP39Cfccgstm9njpimhEqXZxudDk48X",
  "key30": "61B8LiTB32NcPREgC28vipWibwFzeDbrGkFAWLSBLkKWGeA1x3RTftDuK2XSrdbQDrciDQoC1hDS8Nq8wCKGsX3",
  "key31": "4VwfkMPu1oCsArkJhxTx8yDiaiAZSCXC7Stxa5TfuC3PegUCrhiTAUCVJGjSPcSkovpzJUMHKAzi2mt5THBXh2yC",
  "key32": "5Wq68rT2tP9ABY6AoGRaP6tnJMemEvS7FzvQdNsPoJ9x732t8mGKNXpTs4umw6KLVRt1rY1nHJF1PpbgUPK3Rc3Q",
  "key33": "22QsxBb8y9XJRJKi6KspJJtS2MPYQNZmjKQerLGcj1sRR7HArpj1LDTy36wCoEcpCqHRPTK4NGyGD6zQAcTy9yrT",
  "key34": "3SmMmmdaehk6eYYxN7LCc3Fa9uXCbzPmox6vxkapwFQkgdRSs4R2CGpLEPmGLfsyeCW48k4JhXdHa5CmzeXnp3aH",
  "key35": "ULcrauUZmxDqNrWbsBbPM2ALEhspVvYSyhGxN2GCbrFH636yJwJsTCzGrSEe7ei8pCxv2VZnogNCNQmHN943sfM",
  "key36": "CK92PTchcsTt2FabMXM4faviqbJFPcKu5Xm5UtESh8zN59f7stVPCKqw7KPsLmLLzExdc4xK3rYyRej6m5HBwdK",
  "key37": "2aQpSrRDpeUcnpHbTiDTKhCfn8Q3giNsL1fRnWRaKWK9Urvk43b34H6GwuDwwp3eeRbbZCUZrJU7uMrVvXRST71A",
  "key38": "2XdomsSMkReMHabSbDsovhPmmd5uoBCpx5oB4hSsyKnGzZLGzeiZBfxAd4QhTRZXCqzTu4WDohZcoTYsj5AV1aTu",
  "key39": "3Cn5bjx6E6FUxg75wZTytvrWYoQ5wabpVdoUuj5EFjUFhhoPRtTkbmNfWzUjyrR57JtyRrPe4T7FQkbJ6Za2mskn",
  "key40": "jLNu4LzwiZpX4sjGDBhh3E5xqLJW5aYduw6NxZNTLtxtyhxDDC3PdXyZsUbJHzwL5CTKcfoMY8oSHgbja9tGmKw",
  "key41": "23mRFWXHawQPnEaUrWmTCw8YmRiLKUFDs5ps8NHiutHtCnFAWrb3ViFxbeCe7G8ZTS44Fe8fLSyfwNN6JwaADXqL",
  "key42": "3KevQWdrpsssJnsKbXCqBhuVgQWKWcsKtwWiPgfJ96RDeyAyE7gYRFub9g4FB4ExfydqwdP83qJfwr6f7JgGbVLH",
  "key43": "5oZBqF8VNLUZ6kpTQ4GsCH2QweDq4b3TJqg4un2LjTSA6ef8N6vLFdrJx38vSJyfdmdBbPtvuntyLMJzzLYgVbyS",
  "key44": "25cYtG6pQvSVEV7Wjd9VQkmcWXx4wy9mWHNGJGc5k2DbHZ9LTPXwQEv3J1h2RFRabGDT4auCbB9njLRBrrKH9SEd",
  "key45": "62U7yeQFKG7M1wSusyhTVfQJTDDeRwHxVegTCPzr3hVHHtR4y3wzxkvgdayCpUzcS2QCzAZcXFFhL7m3eayzsqso",
  "key46": "2ph4zLaAJpp7wvjXXx5eSRXis92vfcgzJxTfj1TKtvtQYy13RSbxSXApez1uZU2378xLZJHXwtbMQXLfT3tDSGGm",
  "key47": "297NXgzhxoWgrwLJDYC4wKgacAqz58uZepG5hpzbr5wooncdhUCrjKN7zFC3JqgLqkkWPrrxbaEuxma7wjmZ99LT",
  "key48": "54ZsKavaARjuzyB7sDsyXXuTw5wwLgYorEGs1XCywDbgTj1XGCmgtmszVWVUy7GMbWNdcm4Zek7jDewFkg6vwWRB"
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
