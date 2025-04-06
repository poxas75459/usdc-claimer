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
    "4rEi1TozfVM6BTzw1YsKZ83z9ZxNDxpmeVG4Vy9qrFp1T5NaPytv1a1gXiDc9ND5oFhDynq4kdwG6c6kgbh8veMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mk3gcs41jS7QN5PSDhDnG73Twqz75CKKssteqmG6bLAktktp65WUJtYz3jfjgzVwQBhu1HWes5eo2eGD97gALtd",
  "key1": "4Qwso6K2znj45iaGdNbkfBLqdhtX4Q61pm3CCQS9U5a3C7Fp3cfCBy252kmk6cJzKk9xy6qhVXXZFrUFGEa5G1mB",
  "key2": "47QA2wPCHSkLNpKdpRAnZSxwoBQoQFZqSptCgm1QQ56P7YjCyt2QnMyZm1xGqhVZ9mWXjFvtrZJ1vxqXEFPpyFJs",
  "key3": "2RVvyUyyravffqwB2nFPHRvnX4ZLeWU5BauURpA1PNXpKhM2VGXieQ6cYJepgudWQ969TYPrHFepbs4kKiDo1TaK",
  "key4": "2WgEUj5USCogA4dP6ML3SmFzBt2fpG8Jiy96g13tsYGc586vk4aCBdf7Ej5zjEDdH4dez5hrq5ZmZbLbd16ANcW6",
  "key5": "8iwoP6N8GmecqEnG32VRu2e5LXEjRQ7wfh6PzMhiPUmMdfnfzmVwMehGyoTmLCguZ67RkoKLx6N9WdPEsPSnxkL",
  "key6": "4KcrNVYkoxwEU1p7mWQV7kA24xiqNLrWz3cAYhKnYn14FtUsp2qBirckTzeep4XjiGG4cDi3zXwb3aR8afLhQcS7",
  "key7": "LD8WK5vmPr5BkdWnvo2v4eTsFJW7hqNMEjZ462841UAPZ6wK7Jp16bFEQYQVnRMojQvpm7qJ7DgYVxzV4ad4xXP",
  "key8": "2fz574rsThZU7KkoxzLMcvZhcyFc9MMyqBzz8BrNKHyfV6Pi92AML9mBp8WKYJS7rRnjR5krTXDN9tqnb2NAA8RM",
  "key9": "5Haw8GxzH7AvKPu77bmnEYwVfMB6GCCPvdn2WGoztWAJsWxDLL5TuTymspvNzTfXytM1g6fu2QMbEhiDirYXx8j7",
  "key10": "fi3xVj1dPzRJRehGSgQfEZVhTboHzzYfBFub7zSwqaszyWLp6vS1xre8gnEFEiYWQxwVYwUGn2SPYi9fBXG9FUv",
  "key11": "3mrpNPsTzi6pt35ihSetBGTiLXcDadfpbe5KGVnsfh8FRAwM7TCCFDnFHVaMeTr8TXdRZiua9f8qRD24hqdHbygr",
  "key12": "5q3mm3cHgB7rEH2fubrN7qzv5Cixg37WpcdzwGaq67ccU9KEdnGR43LyspS2GGukuDbppabAjY7N5UVJaCrBBVQC",
  "key13": "3r61iyEDrnzBvzNJUQpgCQGzu58AS7duodqehpEr9rKYChbic5dnzhe1Sp4aAQvj3Hw2GKwDcxtjY7eC3QEcJKCM",
  "key14": "55zk55BvAhQ8Kg7awnGWGUoFyNTRU4g5AfkkpAn3sWT8KXbbuq7EQ9yswDxiwf7s47eZ7z8hgcZVFcv65zDWdmP1",
  "key15": "5z1KGo9NrEgK7LGtJCbPC5KT3oUjW15gjZQUFTJey89DUY4X8NwGnJEjmwQwaxYu74fq39UagjUjNpBizknWnafG",
  "key16": "4mNHZ6u9ss2eTVE98WHFGSMeu3QKbjGVMueAtQBjUu899c31sa5oXzxtxrsYHigSBWp3HKt9GfEA9TtGzh8krEc",
  "key17": "5aayhFpokD26EYHPgwPB7ueLeXXX2QUnrC3u9TSkmS6TvqP5dqSy5gjqV9m5X58GQA31jJF4r1uSBruN7ZeG6ZF5",
  "key18": "49WVCZqdzMQtfVSBN6psm3vxcVwMVRpspHHP7PfCist7EmwqSS2MFCAJhGn75EKPofdusJ9cL6FFioV16mG2cThi",
  "key19": "4J1A2ygWFRCCWqvWmEESmu81g3ELtrzfrx3iV4hc2edThKcUkJVhThLdfii1x38wrhBf1cfdm8mv1Hct8WiSfY9v",
  "key20": "8zju7hpJLuJ8TFhSZW6Q2M3DSq3svKPu9KyMtXkZjftaHVbE8sLqFwcYsecKJraLXS2MUwoK3DijPpsfsUE1NNg",
  "key21": "2f4RZ5uvb9n5dUzbn1P5tfTe4VYcsWMW1NUAsdmYSwbddaitGK11Cj3SgzxwnX6cGQpWXyDDC6QfArm7M4bzoXky",
  "key22": "34AzDyUeon7kbPRMBJxnHS3qRAmoB4xNNPAfYmTMWvy3eXnxNvfnKf7VicifRq9cSxx4fo3nuxE9H4NSq8EVsnJH",
  "key23": "58yc8HGceRrNJHFZ6tkUBUAH77mgpj7JJkpvPTQMdByjzQDMBLhqPDBH8Y1iZpXSHZW2yKzfLQ68kD6QDiNdP65M",
  "key24": "btQv7mZhihBNFGwUxj6QqsL3bcewBNeqytu1d9xxxGbXX23XpJrfAfxoSjzYvcHbadFSvxXFYzDL1couTeBKxvG",
  "key25": "5CVebUvScfoBxeUZmqYSMxPdwDGo5cVXfmkQcrhitHznLizGCeAJe67vwSh5baspYRV1YKkjuSs58BzNadpXsymk",
  "key26": "59xrNdShySeRjqdAx9Bj6W2E1Sg23mK6JHLCEMb8YPwM1WTUWVzrJA1avMaiyJPXRnbPMKhi6afVomXZZT2yd7f6",
  "key27": "H3P4zLgoDqjRvdyiZSjfkYcwpaAkVNCNzoNydY9Vc98YHfoQWaVD2KPBm4S334NsQRzpMZj9aR1HEiiG5agZMQK",
  "key28": "2iJbvS7Rc8cijX6rWbSMLJPdD7mwdGu1w5QoZ799fQp98qtZLwzxiWSz4oYnmYrioLAL2Ff7hgyCHsNsW1g2zrQt",
  "key29": "43Fao2UYGUGGi8nVF622KDZamJVsD87bi3vxs4ye6Z3zwCGTmu9YEhKeKdYVj9mRmovwxdxDiFYoeNeoQCx7jqCU",
  "key30": "26F5nzLLiLHRrDRdDbuU8dndMjgJWqu248sjXPBcZtxebh7JedadibfHJzup1QeYXoocEdvKkgsK96N8EJn3UGVv",
  "key31": "CUwfMWREUhjFbtaFrCY73C9AjbL7CcrUE6eGf62fyoi1HMwZqFqg4uAeLAso3xgMqshcZiRNWgyY6pYHpbFV7bt",
  "key32": "5soGzKyDfTB5ShFonXhog6NCDTovn7iVovs8XegHGnErwkFnCaQA35q4PtRdMkBav7S58bbKV4to9j4WHqkkKr2X",
  "key33": "5xXKASHQuwb6fXrJjgSoXComsaxyNNfZb53d8fUjoMDSSyLQ1vDKr4jWQQeaPwbVTCdMm689k3fSAV1V8FEE3guZ",
  "key34": "2h2mBhjyVzdap9VTe2crxgsoaggh9ArrTU2XNmQBr8aQGXQXqpy79H37cgnHysyhuuDiGipVDNzavTtk55FYyGGm",
  "key35": "3iVLXhK5Zdh9zXiDqgDy2ZRpur1KrvAg8JzpTdLnb2GupHsY9N51BDDcTjbJetY15wC5g2TKVW1XD8XjXVAwUHL3",
  "key36": "5vKPjFBp94dXmnjr5sCnfo8UDvsiVsihvPeupKKum6UQjwup4hsmQDPtRo5CZnqUL59fWQSd5ASNTVEVHpFeAwLh"
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
