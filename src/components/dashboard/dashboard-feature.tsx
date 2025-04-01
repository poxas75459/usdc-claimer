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
    "5k3hQfQaRFh7BwuGkP4Xu73az5Jzjj48VKWkR8JY9CYCSZmj42GpKxav1Wrti5kKF5h8tTrFr46qXCFedWrt8UvC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qHs353qZNvqQEtYDzP1M4JYmwHe55pMcRcjhmiYYAN3FCT5PnWqpnvNukYp7zjaat6XZp9rSaLcFXSMnTvrjC3s",
  "key1": "66ULwndJBRvZcyvRC2aZitz4R8iss2k3yuBS22kbnb4b7EiJbwzanFUqgzzFeovQdKFC2YwnEgnPz2hcWLEBQ3kG",
  "key2": "3Ab6h8n97ytaJSSrpC4zj6oGnCMciC2SAGGMSGYBN7PbujmvUeY1wCFVNwZjDz5qFfrnknTFjkJWmtCEQZJkWLDP",
  "key3": "1nQJ1kXwFo3NLf4KKH3NwhXFs3paKUwYr6wcskGaHXYijYTb8qThGbXzRHsC4VNLCUdXsBULjEzhL7fqfDkTZt7",
  "key4": "Q7ZRyH155XDSbr42poraTe3Q6gLkmi25E434raACrJNcJ4t5iQKDY781HHWSc8HNe5aG84LeECexoP5ZwcTdHzJ",
  "key5": "5BuYS6SixZAPV7odzbmjUE5t5HNJEnFJUeZ1c3TQFbcp14mBRGuwWrp1MjwyxhYHkVqnfxHLqPVdFc3A3PeFf9ZF",
  "key6": "36eNCDQNzH3aYvS2Sf7DmEk6NaKyQ5X9hqwouNQmeJTTcWDVCVXSMKRw2zVspui1VxAXwqnpfqQWbb6Zt7x3UtGF",
  "key7": "cXkNA776GBB8zgUygnfVVS8JBScJmjXG7WYxeHPvZffAph7ow9SVBqUL3vQcTp2SevApXfY5aJNtDycZozCdv5J",
  "key8": "26Eda8NWP4Hzaw2cBA9w1dH7fadPmSEWzoR3YAHMXncPJshth17LVg3LKudZns9LGpTsRiR1BBK5SLno6wEPrxgR",
  "key9": "5JefMhSLzVW25HdY3zEy1gC2LZC1pKzU2uMRWocLWtW7NeTRW4fGdHVVzEsK47KNDr1tLWCXxwrBLWpWKvC96JRU",
  "key10": "2Q6bMx911qBbtxqZVRumNwYtoXNDMbtPfSDEkwRrbLQPecPomhjpkn6vonfbofbD3M8zi6VNt5zPiJ7Dgh89S8GC",
  "key11": "5Jh3FXbfCmdVkZD8zmoc3ymEPP6GxZUw3WUyevFgMPKwfRKR8VdFtjSCsqZqHkuXvBdCgRqDnTnpUdWQTcfX2Cuo",
  "key12": "24dyEhr7UqV4wV8KVakvpgTUakpTarFh6vXFgJhjWoDmnZnqVV2Zvq3anJ5pBJK5d8BMyDZyFrFvyytCzfR2SW38",
  "key13": "5DZ7YyYZZXe4sWjhDdzEriHrnxpvyGhGfDpX2A6FujiRMsCgd1tbwsZ3UQX8o2TqRk55FbvYJvyVUZQ8baoXZi5c",
  "key14": "5cF4E5nk4d6pfXw4akhPJUcPFzWX6kVywx3mcncc1qvMpFGT3dcCfvGA7UDhPLwYsb1ZcKAeLigY1MkirEbJn7HP",
  "key15": "byZqHcpZXVahAGx4D6JBR5dbgfVBSia1aPq6oJnyKZkiNLukJ3RG9og96AHAL9STuqhJ3YLSSnbqAGrp5Qi6HdF",
  "key16": "3pa2txhMktZuiHGDiqwDSmpeqU27gm65vLSZFUZvsS58RY9mAehV6yci6zpCuoAaSRcitNMYFqG6tzCfKj5uVSTG",
  "key17": "5qSZtcnPbNStAewxYn8MmnxkeJ6gjt2GY4DEmQD2imY7Jwo7MFGMEbzHSEY3pWYE1oNmaDckbeyMGNTuDEDRFiS7",
  "key18": "4pWtqFThtdrtCc9ZPg2qC1inrLFWijGo3ZFuoYYqBYZ4j1hamdYKAfvncF75vn1n8pKYfKaXDBRh5MKNUG7PNN5E",
  "key19": "3xa1TJ1NF6ajQMCD8rp8xUJmGSrAY9xQjkYwYGZyhwvNcJTgozAU2KjVzPBFksP9YsgeJ3p2MUBpzEoqvsnReUBJ",
  "key20": "2EknA9z5LXDVuU6RCpdAvysEZP5TPM3z2jNjcw5YMrvGC5A2iMf4wqmLwfSoQjsGdDtyhw7xsWB9PYt1WuF96WNx",
  "key21": "6Xy2mEaavVivM5HRAgDWUmfBLj5MXbRrRGJqwRbDJ41mLMhbY4QuKQdwQxmER1k2bp8i1bAbtgjBTTe4eNPJi5D",
  "key22": "28rySLcxC2tr2AbYCJvaJhQppLciv6cH8jSs45htRPHyZfx1YYAywK8VCZEQW6hMkpmMkXqRv6FTUNdj59SdS3o8",
  "key23": "5s4DeGUdCZdeVhAj33deQvMDGok1YdoBFnsaMSriNz4rtK87G61La9NQUJ7cbJbY7FW1fjsseHJjwpQbwRUvrkdt",
  "key24": "3qF4YhzYPspM5iBzeE4NNL6DPUwTgq7gLnJpoUy5zTEsWPoFhMJSok43wagX3Sm4aa3951wtEEAsB9qj2fJFVHw8",
  "key25": "39xssAZsu4JePJ4RuW5NpYxbhT5TsSRsKEFSFbU4GWrK8a9bAcyxg86UQZazKkkXTZjeUMpPVHkPopMCfiFkwonM",
  "key26": "3rX8WpKc12pEXcGnubtELWKnTzPnZbdxNvLDyLVVNfuGMC1UGFBvKuQmBQfgyWWAbFN8UCrEGLouMyckWvGt88CT",
  "key27": "4jwd37f8DYxBPU7pMfQ9qXyDm1XEpcSd1zkLBPtbfABtuTSf2dpxKncq5osRPGFgtp7W8bgUTPezbyLQL331v2wQ",
  "key28": "5nmByuGMni9JtJJTTkJEzr9egWRqc3YGYJaahVJEekVb7LsoqrN1kCE3XhM6Q9boBH8afnW5uh77JhfArjqRRFQ1",
  "key29": "3A9xCma4DS6YZHDSEBPeMGcd8kvKKFPH7aG3bmura7869WPx7eRD6nAp3pqxoGMXNA9fEimZZQbFf1j4SXjHGSSX",
  "key30": "2owhgbwG8tkb4qshPeajofcrCYrfJCXZGpSSKqeY9fdH56dErUEZ5aLgqc1ssNpbWa3F6WUC8kC92bPf3jAAU1QS",
  "key31": "55wRAfJL1SJQKBTNB4PDvRD2cLqkBQtQiyBLHVHXCXvXkEFw2rbQSRBN1zWg2yXLv3zMGVfFxybfUi79cU8HMXMB",
  "key32": "EcPfToh5F7BhJus9kaWFmucrAQAyQoghjhUMNo8pXTPSk3ZQ9bPxC989XEjqQsgZR1jLLzYa1ap7mVEt5eayrPz",
  "key33": "g9qs1YgNpF3q1qaKRt4Wgi8BnNEFGJDEV7E3st47HkExSLH6SKBeEcFAgdQCXEmutmEx4rsjamFVsxgz9jYvCFu",
  "key34": "RkDu6AGEY8wJwponwXM9Mr9dz8YeKNrPeaEdbAfd8NeKdmHkKXbLUfuY3P6KsCVxyADeocKm4YgZ24oP3Xm7jt7",
  "key35": "4PiAHf18R44bcSqnrskqkv5kEVPzzqfJJBLopzNh29vbugfMQHqPyjwCfdbnkHxf1z1CaKVz89j88RhPJDNu5dnu",
  "key36": "2LXR9oGzgqhFjdfCWJvAQqVybdLsap4WcNeaFRWwW3HVC1r3kzpmWiKuzQvWcwzkGwHpwcnQDp7dhiPrz9MPP3ic",
  "key37": "5hAKHFnhnkeaDjwuupQBvUZjTXxFGFQ3wH711ACU9F1FCjzUUQjsqhmaUPejpTmuMXFSraWMtkhaRooYcYY4SXFo",
  "key38": "31wiCiCUegUCZ6GW8RSQK6VAMdjizwZiBVABj1sS4WmEN81y7Rs6YfPtSW6r9cLpab8sLziRhZQrRyxWkrVcC3EB",
  "key39": "jxKtaQucCAnLZb1h7XuvStRw5MUpmJSWmLp7D3U6moJkV35tmrruMvMoEW4P1cc38EHdV4xTBx4tfT34f4E4Jev",
  "key40": "5EvPkF9ZgCbdrVD1CCcgjMxkyvoxFoR6k3ikWmSPKBckcdD7eYzL74dEZw8KSsoUBsuFw7aXZLc6HSTuY9fPNKDn"
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
